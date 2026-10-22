import 'dart:convert';
import 'dart:io';

import 'package:build/build.dart';
import 'package:build_test/build_test.dart';
import 'package:flax_codegen/builder.dart';
import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/manifest.dart';
import 'package:flax_codegen/src/ownership.dart';
import 'package:test/test.dart';

void main() {
  const outputs = [
    'lib/generated/shop.g.dart',
    'js/shop.ts',
    'lib/generated/admin.g.dart',
    'js/admin.ts',
  ];
  Builder builder([List<String> paths = outputs]) =>
      flaxCodegenBindingsBuilder(BuilderOptions({'outputs': paths}));

  test(
    'builder uses the same config-free app conventions as the CLI',
    () async {
      final sources = _sources()
        ..removeWhere((key, _) => key.startsWith('shop|bindings/flax_'));
      sources['shop|lib/api.dart'] = '''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport() int cartQuantity() => 1;
''';
      final result = await testBuilders(
        [flaxCodegenBindingsBuilder(BuilderOptions.empty)],
        sources,
        rootPackage: 'shop',
        testingBuilderConfig: false,
        flattenOutput: true,
      );
      expect(result.succeeded, isTrue, reason: result.errors.join('\n'));
      expect(result.outputs.map((id) => id.path).toSet(), {
        'bindings/manifest.json',
        'bindings/js_modules.json',
        'lib/src/generated/app.g.dart',
        'lib/flax_bindings/app.dart',
        'js/src/generated/app.ts',
      });
      final adapter = result.readerWriter.testing.readString(
        AssetId('shop', 'lib/src/generated/app.g.dart'),
      );
      expect(adapter, contains('final appPlugin = FlaxBindingPlugin('));
      expect(adapter, contains('"@flax/app/app"'));
      expect(adapter, contains('cartQuantity'));
      final plan = jsonDecode(
        result.readerWriter.testing.readString(
          AssetId('shop', 'bindings/js_modules.json'),
        ),
      ) as Map;
      expect(plan['modules'], [
        {'specifier': '@flax/app/app', 'source': 'js/src/generated/app.ts'},
      ]);
      expect(plan['providers'], ['@flax/core-runtime']);
      expect(plan['compilerOptions'], {
        'paths': {
          '@flax/app/app': ['../js/src/generated/app.ts'],
        },
      });
    },
  );

  test('default app Builder reuses a config-free provider without copying its types', () async {
    final sources = _sources()
      ..removeWhere((key, _) => key.startsWith('shop|bindings/flax_'));
    sources['shop|flax_package.yaml'] =
        '${sources['shop|flax_package.yaml']}javascript: {package: "@example/provider-runtime", types: "@example/provider"}\n';
    sources['shop|lib/api.dart'] = '''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport() class Cart { Cart(); int quantity = 1; }
''';
    final provider = await testBuilders(
      [flaxCodegenBindingsBuilder(BuilderOptions.empty)],
      sources,
      rootPackage: 'shop',
      testingBuilderConfig: false,
      flattenOutput: true,
    );
    expect(provider.succeeded, isTrue, reason: provider.errors.join('\n'));
    for (final id in provider.outputs) {
      sources['${id.package}|${id.path}'] = provider.readerWriter.testing
          .readString(id);
    }
    sources['shop|build.yaml'] = r'''
targets:
  $default:
    sources: [$package$, lib/**, pubspec.yaml, flax_package.yaml, bindings/manifest.json]
additional_public_assets: [flax_package.yaml, bindings/manifest.json]
''';
    sources.addAll({
      'client|build.yaml': 'targets: {\$default: {sources: [\$package\$, lib/**, flax_package.yaml, pubspec.yaml, js/package.json]}}\n',
      'client|pubspec.yaml': 'name: client\nenvironment: {sdk: ^3.13.2}\ndependencies: {flax: any, flax_annotations: any, shop: any}\n',
      'client|flax_package.yaml': 'format: 2\nbindingNamespace: example.client\ncapabilities: [bindings]\n',
      'client|js/package.json': '{"name":"client-js","dependencies":{"@example/provider":"0.0.0","@example/provider-runtime":"0.0.0"}}',
      'client|lib/api.dart': '''
import 'package:flax_annotations/flax_annotations.dart';
import 'package:shop/flax_bindings/app.dart';
@FlaxExport() Cart currentCart() => Cart();
''',
    });
    final reader = TestReaderWriter(rootPackage: 'client');
    for (final entry in sources.entries.where(
      (entry) => !entry.key.startsWith('client|'),
    )) {
      final parts = entry.key.split('|');
      reader.testing.writeString(AssetId(parts[0], parts[1]), entry.value);
    }
    final consumer = await testBuilders(
      [flaxCodegenBindingsBuilder(BuilderOptions.empty)],
      {
        for (final entry in sources.entries)
          if (entry.key.startsWith('client|')) entry.key: entry.value,
      },
      rootPackage: 'client',
      readerWriter: reader,
      testingBuilderConfig: false,
      flattenOutput: true,
    );
    expect(consumer.succeeded, isTrue, reason: consumer.errors.join('\n'));
    final ts = consumer.readerWriter.testing.readString(
      AssetId('client', 'js/src/generated/app.ts'),
    );
    expect(ts, contains('@example/provider/app'));
    expect(ts, isNot(contains('export class Cart')));
    final dart = consumer.readerWriter.testing.readString(
      AssetId('client', 'lib/src/generated/app.g.dart'),
    );
    expect(dart, contains('_flaxBindings0.appBindings'));
    expect(dart, contains('binding:example.client/app'));
    expect(
      consumer.readerWriter.testing.readString(
        AssetId('client', 'bindings/js_modules.json'),
      ),
      contains('@example/provider-runtime'),
    );
  });

  test('nested public src carriers match CLI visibility', () async {
    final sources = _sources();
    sources['shop|pubspec.yaml'] = sources['shop|pubspec.yaml']!.replaceFirst(
      'flax_annotations: any',
      'flax_annotations: any, vendor: any',
    );
    sources['shop|flax_package.yaml'] =
        '${sources['shop|flax_package.yaml']}bindingDependencies: {generate: [vendor]}\n';
    sources['shop|lib/api.dart'] =
        "import 'package:vendor/feature/src/value.dart';\n${sources['shop|lib/api.dart']}\n@FlaxExport(scope: 'shop') Value currentValue() => Value();\n";
    sources['vendor|pubspec.yaml'] =
        'name: vendor\nenvironment: {sdk: ^3.13.2}\n';
    sources['vendor|lib/feature/src/value.dart'] =
        "export '../../src/value.dart';\n";
    sources['vendor|lib/src/value.dart'] =
        'class Value { Value(); int get count => 1; }\n';
    final result = await testBuilders(
      [
        builder([
          ...outputs,
          'lib/src/generated/dependencies/vendor_bindings.g.dart',
          'js/src/generated/dependencies/vendor/index.ts',
          'js/src/generated/dependencies/vendor/_bindings/dependency_vendor.__module.ts',
          'js/src/generated/dependencies/vendor/_bindings/dependency_vendor_Value.ts',
        ]),
      ],
      sources,
      rootPackage: 'shop',
      testingBuilderConfig: false,
      flattenOutput: true,
    );
    expect(result.succeeded, isTrue, reason: result.errors.join('\n'));
    expect(
      result.readerWriter.testing.readString(AssetId('shop', 'js/shop.ts')),
      contains('currentValue'),
    );
    expect(
      result.readerWriter.testing.readString(
        AssetId(
          'shop',
          'js/src/generated/dependencies/vendor/_bindings/dependency_vendor_Value.ts',
        ),
      ),
      contains('get count()'),
    );
  });

  test(
    'tracked assets generate sibling scopes without filesystem inputs',
    () async {
      final result = await testBuilders(
        [builder()],
        _sources(),
        rootPackage: 'shop',
        testingBuilderConfig: false,
        flattenOutput: true,
      );
      expect(result.succeeded, isTrue, reason: result.errors.join('\n'));
      final reader = result.readerWriter;
      final shop = reader.testing.readString(AssetId('shop', 'js/shop.ts'));
      final admin = reader.testing.readString(AssetId('shop', 'js/admin.ts'));
      expect(shop, contains('currentCart'));
      expect(shop, isNot(contains('resetCart')));
      expect(shop, isNot(contains('debugLabel')));
      expect(admin, contains('resetCart'));
      expect(admin, isNot(contains('currentCart')));
      expect(result.outputs.length, 5);

      final configured = _sources();
      configured['shop|bindings/flax_shop.yaml'] =
          configured['shop|bindings/flax_shop.yaml']!.replaceFirst(
            'annotations: true',
            '''classes:
  Cart:
    kind: object
    constructors: {'': []}
    getters: [quantity]
    setters: [quantity]
functions: [currentCart]''',
          );
      configured['shop|bindings/flax_admin.yaml'] =
          configured['shop|bindings/flax_admin.yaml']!.replaceFirst(
            'annotations: true',
            'functions: [resetCart]',
          );
      final legacy = await testBuilders(
        [builder()],
        configured,
        rootPackage: 'shop',
        testingBuilderConfig: false,
        flattenOutput: true,
      );
      expect(legacy.succeeded, isTrue, reason: legacy.errors.join('\n'));
      for (final output in result.outputs) {
        expect(
          legacy.readerWriter.testing.readString(output),
          reader.testing.readString(output),
          reason: output.toString(),
        );
      }
    },
  );

  test('source discovery tracks unexported APIs and skips its own generated adapters', () async {
    final sources = _sources();
    for (final scope in ['shop', 'admin']) {
      final key = 'shop|bindings/flax_$scope.yaml';
      sources[key] = sources[key]!
          .replaceFirst('library: package:shop/api.dart\n', '')
          .replaceFirst('annotations: true\n', '');
    }
    sources['shop|lib/src/cart.dart'] = sources['shop|lib/api.dart']!
        .replaceFirst(
          'int quantity = 1;',
          'int quantity = 1; static int limit = 100;',
        );
    sources['shop|lib/api.dart'] = '''
import 'generated/shop.g.dart';
class Host {
  @override
  String toString() => shopBindings.toString();
}
''';
    sources['shop|bindings/flax_shop.yaml'] =
        '${sources['shop|bindings/flax_shop.yaml']}sources: [lib/src/**.dart, lib/api.dart]\n';
    final result = await testBuilders(
      [
        builder([
          ...outputs,
          'lib/flax_bindings/shop.dart',
          'lib/flax_bindings/admin.dart',
        ]),
      ],
      sources,
      rootPackage: 'shop',
      testingBuilderConfig: false,
      flattenOutput: true,
    );
    expect(result.succeeded, isTrue, reason: result.errors.join('\n'));
    expect(
      result.readerWriter.testing.readString(AssetId('shop', 'js/shop.ts')),
      contains('currentCart'),
    );
    expect(
      result.readerWriter.testing.readString(AssetId('shop', 'js/admin.ts')),
      contains('resetCart'),
    );
    final facade = result.readerWriter.testing.readString(
      AssetId('shop', 'lib/flax_bindings/shop.dart'),
    );
    expect(facade, contains('show Cart, currentCart;'));
    expect(facade, isNot(contains('Cart.limit')));
  });

  test(
    'undeclared outputs fail before any generated file is written',
    () async {
      final result = await testBuilders(
        [builder(outputs.take(2).toList())],
        _sources(),
        rootPackage: 'shop',
        testingBuilderConfig: false,
        flattenOutput: true,
      );
      expect(result.succeeded, isFalse);
      expect(result.outputs, isEmpty);
      expect(result.errors.join('\n'), contains('options.outputs'));
    },
  );

  test('Dart output from an earlier builder participates in annotation discovery', () async {
    final sources = _sources()
      ..['shop|lib/api.dart'] = "export 'model.g.dart';\n"
      ..['shop|api.seed'] = 'quantity'
      ..['shop|build.yaml'] =
          'targets: {\$default: {sources: [lib/**, api.seed, flax_package.yaml, pubspec.yaml, bindings/*.yaml]}}\n';
    for (final scope in ['shop', 'admin']) {
      final key = 'shop|bindings/flax_$scope.yaml';
      sources[key] = sources[key]!
          .replaceFirst('library: package:shop/api.dart\n', '')
          .replaceFirst('annotations: true\n', '');
    }
    final result = await testBuilders(
      [
        _ModelBuilder(),
        builder([
          ...outputs,
          'lib/flax_bindings/shop.dart',
          'lib/flax_bindings/admin.dart',
        ]),
      ],
      sources,
      rootPackage: 'shop',
      testingBuilderConfig: false,
      flattenOutput: true,
    );
    expect(result.succeeded, isTrue, reason: result.errors.join('\n'));
    expect(
      result.readerWriter.testing.readString(AssetId('shop', 'js/shop.ts')),
      contains('quantity'),
    );
    expect(result.outputs, contains(AssetId('shop', 'lib/model.g.dart')));
  });

  test('builder rejects unsafe paths and unknown options', () {
    for (final path in [
      '../escape.dart',
      '/escape.ts',
      'a/../b.ts',
      '.dart_tool/a.dart',
      'lib\\a.dart',
      'pubspec.yaml',
    ]) {
      expect(() => builder([path]), throwsArgumentError, reason: path);
    }
    expect(
      () => flaxCodegenBindingsBuilder(const BuilderOptions({'typo': true})),
      throwsArgumentError,
    );
  });
}

class _ModelBuilder implements Builder {
  @override
  final buildExtensions = const {
    '^api.seed': ['lib/model.g.dart'],
  };

  @override
  Future<void> build(BuildStep step) async {
    final member = await step.readAsString(step.inputId);
    await step.writeAsString(
      AssetId(step.inputId.package, 'lib/model.g.dart'),
      '''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport(scope: 'shop')
class Cart { int $member = 1; }
''',
    );
  }
}

Map<String, String> _sources() => {
  'shop|build.yaml': 'targets: {\$default: {sources: [lib/**, flax_package.yaml, pubspec.yaml, bindings/*.yaml]}}\n',
  'shop|pubspec.yaml': '''
name: shop
environment: {sdk: ^3.13.2}
dependencies: {flax: any, flax_annotations: any}
''',
  'shop|flax_package.yaml': '''
format: 2
bindingNamespace: example.builder
dart: {entrypoint: 'package:shop/api.dart'}
capabilities: [bindings]
''',
  for (final scope in ['shop', 'admin'])
    'shop|bindings/flax_$scope.yaml':
        '''
format: 2
name: $scope
library: package:shop/api.dart
dartOutput: lib/generated/$scope.g.dart
tsOutput: js/$scope.ts
annotations: true
''',
  'shop|lib/api.dart': '''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport(scope: 'shop')
class Cart {
  int quantity = 1;
  @FlaxIgnore()
  String get debugLabel => 'Dart only';
}
@FlaxExport(scope: 'shop')
Cart currentCart() => Cart();
@FlaxExport(scope: 'admin')
int resetCart() => 1;
''',
  'flax_annotations|lib/flax_annotations.dart': File(
    '../flax_annotations/lib/flax_annotations.dart',
  ).readAsStringSync(),
  'flax|build.yaml': 'additional_public_assets: [bindings/manifest.json]\n',
  'flax|bindings/manifest.json': FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: 'flax',
      namespace: FlaxCodegenBindingNamespace.parse('flax.core'),
      modules: const [],
    ),
    modules: const {},
    importPackageNames: const [],
  ).encode(),
};
