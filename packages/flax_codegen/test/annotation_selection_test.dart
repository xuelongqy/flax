import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/src/diagnostic.dart';
import 'package:flax_codegen/src/cli.dart';
import 'package:flax_codegen/src/package_pipeline.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'support/core_package.dart';

void main() {
  test('generated JS plans protect user files and retire when returning to legacy config', () async {
    final root = _package('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport() int cartQuantity() => 1;
''');
    Directory(p.join(root.path, 'bindings')).deleteSync(recursive: true);
    final plan = File(p.join(root.path, 'bindings/js_modules.json'));
    plan.parent.createSync();
    plan.writeAsStringSync('{"user": true}\n');
    await expectLater(
      FlaxCodegenPackagePipeline.generateConfig(null, packageRoot: root.path),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.toString(),
          'diagnostic',
          contains('non-generated JS build plan'),
        ),
      ),
    );
    expect(plan.readAsStringSync(), '{"user": true}\n');
    plan.deleteSync();
    await FlaxCodegenPackagePipeline.generateConfig(
      null,
      packageRoot: root.path,
    );
    expect(plan.existsSync(), isTrue);
    File(p.join(root.path, 'bindings/flax_app.yaml')).writeAsStringSync('''
format: 2
name: app
library: package:annotation_example/api.dart
dartOutput: lib/src/generated/app.g.dart
tsOutput: js/src/generated/app.ts
functions: [cartQuantity]
''');
    await FlaxCodegenPackagePipeline.generateConfig(
      null,
      packageRoot: root.path,
    );
    expect(plan.existsSync(), isFalse);
    await FlaxCodegenPackagePipeline.checkConfig(null, packageRoot: root.path);
  });
  test(
    'custom host-only Dart outputs keep a valid public API carrier',
    () async {
      final root = _package('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport() int appPlugin() => 1;
''');
      Directory(p.join(root.path, 'bindings')).deleteSync(recursive: true);
      Directory(p.join(root.path, 'bindings')).createSync();
      File(p.join(root.path, 'bindings/flax_app.yaml'))
          .writeAsStringSync('format: 2\ndartOutput: generated/app.g.dart\n');
      await FlaxCodegenPackagePipeline.generateConfig(
        null,
        packageRoot: root.path,
      );
      final carrier = File(p.join(root.path, 'lib/flax_bindings/app.dart'))
          .readAsStringSync();
      expect(carrier, contains('show appPlugin;'));
      expect(carrier, isNot(contains('generated/app.g.dart')));
      expect(
        File(p.join(root.path, 'generated/app.g.dart')).readAsStringSync(),
        contains('final appPlugin = FlaxBindingPlugin('),
      );
    },
  );
  test('default paths preserve existing user files and report reserved entry names', () async {
    final root = _package('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport() int cartQuantity() => 1;
''');
    Directory(p.join(root.path, 'bindings')).deleteSync(recursive: true);
    final output = File(p.join(root.path, 'lib/src/generated/app.g.dart'));
    output.parent.createSync(recursive: true);
    output.writeAsStringSync('// Another generator owns this file.\n');
    await expectLater(
      FlaxCodegenPackagePipeline.generateConfig(null, packageRoot: root.path),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.toString(),
          'diagnostic',
          contains('non-generated annotation binding output'),
        ),
      ),
    );
    expect(output.readAsStringSync(), '// Another generator owns this file.\n');
    output.deleteSync();
    File(p.join(root.path, 'lib/api.dart')).writeAsStringSync('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport() int appPlugin() => 1;
''');
    await expectLater(
      FlaxCodegenPackagePipeline.validateConfig(null, packageRoot: root.path),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.toString(),
          'diagnostic',
          contains('reserves appPlugin'),
        ),
      ),
    );
  });
  test('config-free CLI defaults match an explicit app scope and reject unknown scopes', () async {
    final root = _package('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport()
int cartQuantity() => 1;
''');
    Directory(p.join(root.path, 'bindings')).deleteSync(recursive: true);
    final errors = <String>[];
    for (final command in ['validate', 'generate', 'check']) {
      expect(
        await runFlaxCodegenCli(
          [command],
          workingDirectory: root.path,
          writeStdout: (_) {},
          writeStderr: errors.add,
        ),
        0,
        reason: errors.join('\n'),
      );
    }
    final validation = await FlaxCodegenPackagePipeline.validateConfig(
      null,
      packageRoot: root.path,
    );
    final snapshot = {
      for (final path in validation.outputInventory)
        path: File(p.join(root.path, path)).readAsStringSync(),
    };
    expect(
      snapshot['lib/src/generated/app.g.dart'],
      contains('final appPlugin = FlaxBindingPlugin('),
    );
    expect(
      snapshot['lib/flax_bindings/app.dart'],
      contains('show appBindings, appPlugin;'),
    );
    expect(
      File(p.join(root.path, 'bindings/flax_bindings.yaml')).existsSync(),
      isFalse,
    );
    File(p.join(root.path, 'bindings/flax_bindings.yaml'))
        .writeAsStringSync('format: 2\n');
    await FlaxCodegenPackagePipeline.checkConfig(null, packageRoot: root.path);
    for (final entry in snapshot.entries) {
      expect(
        File(p.join(root.path, entry.key)).readAsStringSync(),
        entry.value,
      );
    }
    File(p.join(root.path, 'lib/api.dart')).writeAsStringSync('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport(scope: 'typo') int cartQuantity() => 1;
''');
    await expectLater(
      FlaxCodegenPackagePipeline.validateConfig(null, packageRoot: root.path),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.toString(),
          'diagnostic',
          contains('typo'),
        ),
      ),
    );
    await expectLater(
      FlaxCodegenPackagePipeline.validateConfig(
        p.join(root.path, 'bindings/missing.yaml'),
      ),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.toString(),
          'diagnostic',
          contains('Cannot read file'),
        ),
      ),
    );
  });
  test('source discovery groups unexported libraries by scope and clears deleted APIs', () async {
    final root = _package('');
    for (final scope in ['app', 'shop', 'admin']) {
      _writeSourceConfig(root, scope);
    }
    final lib = Directory(p.join(root.path, 'lib/src'))..createSync();
    File(p.join(lib.path, 'shop.dart')).writeAsStringSync('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport(scope: 'shop')
class Cart { int quantity = 1; static int get defaultQuantity => 1; }
@FlaxExport(scope: 'shop')
Cart shopCart() => Cart();
''');
    File(p.join(lib.path, 'admin.dart')).writeAsStringSync('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport(scope: 'admin')
class Cart { int count = 2; }
@FlaxExport(scope: 'admin')
Cart adminCart() => Cart();
''');
    final app = File(p.join(lib.path, 'app.dart'))
      ..writeAsStringSync('''
import 'package:flax_annotations/flax_annotations.dart' as tags;
import 'shop.dart' as shop;
@tags.FlaxExport()
String appName() => 'host';
@tags.FlaxExport()
shop.Cart appCart() => shop.Cart();
''');
    final result = await FlaxCodegenPackagePipeline.generateConfig(
      _config(root),
    );
    expect(
      result.localModels
          .singleWhere((m) => m.name == 'app')
          .functions
          .singleWhere((function) => function.call.name == 'appName')
          .call
          .name,
      'appName',
    );
    expect(
      result.localModels
          .singleWhere((m) => m.name == 'shop')
          .classes
          .single
          .getters
          .single
          .name,
      'quantity',
    );
    expect(
      result.localModels
          .singleWhere((m) => m.name == 'admin')
          .classes
          .single
          .getters
          .single
          .name,
      'count',
    );
    final appModel = result.localModels.singleWhere((m) => m.name == 'app');
    final shopModel = result.localModels.singleWhere((m) => m.name == 'shop');
    expect(appModel.classes, isEmpty);
    expect(
      appModel.functions
          .singleWhere((f) => f.call.name == 'appCart')
          .call
          .result
          .id,
      shopModel.classes.single.id,
    );
    expect(
      appModel.typeLibraries['Cart'],
      'package:annotation_example/flax_bindings/shop.dart',
    );
    for (final module in result.localModels.where((m) => m.name != 'app')) {
      expect(module.functions.single.call.result.id, module.classes.single.id);
      expect(
        module.typeLibraries['Cart'],
        'package:annotation_example/flax_bindings/${module.name}.dart',
      );
    }
    final facade = File(p.join(root.path, 'lib/flax_bindings/shop.dart'))
        .readAsStringSync();
    expect(facade, contains('show Cart, shopCart;'));
    expect(facade, isNot(contains('Cart.defaultQuantity')));
    for (final file in lib.listSync().whereType<File>()) {
      file.deleteSync();
    }
    app.writeAsStringSync('');
    final cleared = await FlaxCodegenPackagePipeline.generateConfig(
      _config(root),
    );
    expect(cleared.localModels.expand((m) => m.classes), isEmpty);
    expect(cleared.localModels.expand((m) => m.functions), isEmpty);
    await FlaxCodegenPackagePipeline.checkConfig(_config(root));
  });

  test('sources resolve relative, package and encoded part URIs', () async {
    for (final (partUri, filename) in [
      ('cart_part.dart', 'cart_part.dart'),
      ('package:annotation_example/cart_part.dart', 'cart_part.dart'),
      ('cart%20part.dart', 'cart part.dart'),
    ]) {
      final root = _package(
        "import 'package:flax_annotations/flax_annotations.dart';\npart '$partUri';\n",
      );
      File(p.join(root.path, 'lib', filename)).writeAsStringSync(
        "part of 'api.dart';\n@FlaxExport() class Cart { int quantity = 1; }\n",
      );
      File(p.join(root.path, 'lib/outside.dart')).writeAsStringSync(
        "import 'package:flax_annotations/flax_annotations.dart';\npart 'http://[';\n@FlaxExport(scope: 'unknown') class Outside {}\n",
      );
      _writeSourceConfig(root, 'app', sources: ['lib/$filename']);
      final result = await FlaxCodegenPackagePipeline.generateConfig(
        _config(root),
      );
      final app = result.localModels.singleWhere((m) => m.name == 'app');
      expect(app.classes.single.name, 'Cart');
      expect(
        app.typeLibraries['Cart'],
        'package:annotation_example/flax_bindings/app.dart',
      );
      expect(
        File(p.join(root.path, 'lib/app.g.dart')).readAsStringSync(),
        contains('package:annotation_example/api.dart'),
      );
      await FlaxCodegenPackagePipeline.checkConfig(_config(root));
    }
  });

  test('source discovery rejects private export annotations at their source', () async {
    for (final declaration in ['class _Cart {}', 'int _cartCount() => 1;']) {
      final root = _package(
        "import 'package:flax_annotations/flax_annotations.dart';\n@FlaxExport() $declaration\n",
      );
      _writeSourceConfig(root, 'app');
      await expectLater(
        FlaxCodegenPackagePipeline.validateConfig(_config(root)),
        throwsA(
          isA<FlaxCodegenException>().having(
            (error) => error.diagnostics.any(
              (d) =>
                  d.source.endsWith('api.dart') &&
                  d.line == 2 &&
                  d.message.contains('private Dart'),
            ),
            'private export source diagnostic',
            isTrue,
          ),
        ),
      );
    }
  });

  test(
    'source discovery exports configured typedefs without runtime owners',
    () async {
      final root = _package('');
      Directory(p.join(root.path, 'lib/src')).createSync();
      File(p.join(root.path, 'lib/src/value.dart'))
          .writeAsStringSync('typedef Value = int Function(int count);\n');
      _writeSourceConfig(root, 'app');
      final config = File(p.join(root.path, 'bindings/flax_app.yaml'));
      config.writeAsStringSync(
        '${config.readAsStringSync()}typedefs: [Value]\n',
      );
      final result = await FlaxCodegenPackagePipeline.generateConfig(
        _config(root),
      );
      expect(
        result.localModels
            .singleWhere((m) => m.name == 'app')
            .typedefs
            .single
            .name,
        'Value',
      );
      expect(
        File(p.join(root.path, 'lib/flax_bindings/app.dart'))
            .readAsStringSync(),
        contains('show Value;'),
      );
      await FlaxCodegenPackagePipeline.checkConfig(_config(root));
    },
  );

  test('FlaxIgnore preserves independent getter and setter selections in both config modes', () async {
    for (final sourceMode in [false, true]) {
      for (final selectSetter in [false, true]) {
        final root = _package(
          "import 'package:flax_annotations/flax_annotations.dart';\n${selectSetter ? '@FlaxIgnore()' : ''} int get value => 1;\n${selectSetter ? '' : '@FlaxIgnore()'} set value(int next) {}\n",
        );
        final scope = sourceMode ? 'app' : 'shop';
        final selection =
            'topLevel: {${selectSetter ? 'setters' : 'getters'}: [value]}\n';
        if (sourceMode) {
          _writeSourceConfig(root, scope);
          final config = File(p.join(root.path, 'bindings/flax_$scope.yaml'));
          config.writeAsStringSync('${config.readAsStringSync()}$selection');
        } else {
          _writeConfig(root, scope, selection);
        }
        final result = await FlaxCodegenPackagePipeline.generateConfig(
          _config(root),
        );
        final model = result.localModels
            .singleWhere((m) => m.name == scope)
            .topLevel!;
        expect(
          model.getters.map((getter) => getter.name),
          selectSetter ? isEmpty : ['value'],
        );
        expect(
          model.setters.map((setter) => setter.name),
          selectSetter ? ['value'] : isEmpty,
        );
      }
    }
  });

  test(
    'source discovery protects existing hand-written export libraries',
    () async {
      final root = _package('');
      _writeSourceConfig(root, 'app');
      final output = File(p.join(root.path, 'lib/flax_bindings/app.dart'));
      output.parent.createSync();
      output.writeAsStringSync('class Existing {}\n');
      await expectLater(
        FlaxCodegenPackagePipeline.generateConfig(_config(root)),
        throwsA(
          isA<FlaxCodegenException>().having(
            (error) => error.toString(),
            'output conflict',
            contains('Refusing to replace a non-generated'),
          ),
        ),
      );
      expect(output.readAsStringSync(), 'class Existing {}\n');
    },
  );

  test('default app scope is explicit and does not fall into another configuration', () async {
    final root = _package('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport()
int appValue() => 1;
''');
    _writeSourceConfig(root, 'shop');
    await expectLater(
      FlaxCodegenPackagePipeline.validateConfig(_config(root)),
      throwsA(
        isA<FlaxCodegenException>().having(
          (e) => e.diagnostics.any(
            (d) =>
                d.source.endsWith('api.dart') &&
                d.message.contains('scope: app'),
          ),
          'missing default configuration',
          isTrue,
        ),
      ),
    );
  });

  test(
    'annotations isolate scopes, ignore members and match legacy outputs',
    () async {
      final root = _package('''
import 'package:flax_annotations/flax_annotations.dart' as tags;

@tags.FlaxExport(scope: 'shop')
class Cart {
  Cart();
  @tags.FlaxIgnore()
  Cart.internal();
  int quantity = 1;
  int add(int count) => quantity += count;
  @tags.FlaxIgnore()
  int debug = 2;
  @tags.FlaxIgnore()
  Function get unbound => () {};
}
@tags.FlaxExport(scope: 'shop')
Cart currentCart() => Cart();
@tags.FlaxExport(scope: 'admin')
int resetCart() => 1;
int unrelated() => 2;
''');
      final annotated = await FlaxCodegenPackagePipeline.generateConfig(
        _config(root),
      );
      final shop = annotated.localModels.singleWhere((m) => m.name == 'shop');
      final admin = annotated.localModels.singleWhere((m) => m.name == 'admin');
      expect(shop.classes.map((c) => c.name), ['Cart']);
      expect(shop.functions.map((f) => f.call.name), ['currentCart']);
      expect(admin.classes, isEmpty);
      expect(admin.functions.map((f) => f.call.name), ['resetCart']);
      final cart = shop.classes.single;
      expect(cart.getters.map((g) => g.name), ['quantity']);
      expect(cart.setters.map((g) => g.name), ['quantity']);
      expect(cart.constructors.map((c) => c.name), ['']);
      expect(cart.methods.map((m) => m.name), ['add']);
      final outputs = {
        for (final path in annotated.outputInventory)
          path: File(p.join(root.path, path)).readAsStringSync(),
      };

      // Configuration-only selection remains the same input/output contract.
      _writeConfig(root, 'shop', '''
classes:
  Cart:
    kind: object
    constructors: {'': []}
    getters: [quantity]
    setters: [quantity]
    instanceMethods: {add: [count]}
functions: [currentCart]
''', annotations: false);
      _writeConfig(
        root,
        'admin',
        'functions: [resetCart]\n',
        annotations: false,
      );
      final legacy = await FlaxCodegenPackagePipeline.generateConfig(
        _config(root),
      );
      expect(legacy.outputInventory, annotated.outputInventory);
      for (final path in outputs.keys) {
        expect(
          File(p.join(root.path, path)).readAsStringSync(),
          outputs[path],
          reason: path,
        );
      }
      await FlaxCodegenPackagePipeline.checkConfig(_config(root));
    },
  );

  test(
    'shared overrides apply after annotation discovery with local precedence',
    () async {
      final root = _package('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport(scope: 'shop')
class Cart {
  int quantity = 1;
  @FlaxIgnore()
  int debug = 2;
}
@FlaxExport(scope: 'admin')
int resetCart() => 1;
''');
      final shared = File(p.join(root.path, 'bindings/flax_overrides.yaml'));
      shared.writeAsStringSync('''
format: 2
overrides:
  classes:
    Cart: {getters: []}
''');
      Future<List<String>> getters() async {
        final result = await FlaxCodegenPackagePipeline.validateConfig(
          _config(root),
        );
        return result.localModels
            .singleWhere((m) => m.name == 'shop')
            .classes
            .single
            .getters
            .map((g) => g.name)
            .toList();
      }

      expect(await getters(), isEmpty);
      _writeConfig(root, 'shop', '''
overrides:
  classes:
    Cart: {getters: [quantity]}
''');
      expect(await getters(), ['quantity']);
      _writeConfig(root, 'shop', '');
      shared.writeAsStringSync(
        shared.readAsStringSync().replaceFirst('[]', '[debug]'),
      );
      await expectLater(
        getters(),
        throwsA(
          isA<FlaxCodegenException>().having(
            (e) => e.diagnostics.any(
              (d) => d.message.contains('FlaxIgnore member'),
            ),
            'ignored member conflict',
            isTrue,
          ),
        ),
      );
    },
  );

  test(
    'explicit YAML narrows an annotated class and deduplicates its root',
    () async {
      final root = _package('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport(scope: 'shop')
class Cart {
  Cart();
  int quantity = 1;
  int other() => 2;
}
@FlaxExport(scope: 'shop')
enum Status { ready }
''');
      _writeConfig(root, 'shop', '''
classes:
  Cart:
    kind: object
    getters: [quantity]
''');
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        _config(root),
      );
      final cart = result.localModels
          .singleWhere((m) => m.name == 'shop')
          .classes
          .singleWhere((c) => c.name == 'Cart');
      expect(cart.getters.map((g) => g.name), ['quantity']);
      expect(cart.constructors, isEmpty);
      expect(cart.methods, isEmpty);
      expect(cart.setters, isEmpty);
    },
  );

  test(
    'discovery follows the public entry and authentic annotation identity',
    () async {
      final root = _package('''
import 'fake.dart' as fake;
@fake.FlaxExport(scope: 'shop')
class Unselected {}
''');
      File(p.join(root.path, 'lib/fake.dart')).writeAsStringSync('''
class FlaxExport {
  const FlaxExport({required String scope});
}
''');
      File(p.join(root.path, 'lib/hidden.dart')).writeAsStringSync('''
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport(scope: 'shop')
class Hidden {}
''');
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        _config(root),
      );
      expect(result.localModels.expand((m) => m.classes), isEmpty);
    },
  );

  test('annotation misuse fails at the declaring Dart source location', () async {
    final cases = <(String, String, String)>[
      (
        "@FlaxExport(scope: 'typo') class Cart {}",
        '',
        'Unknown FlaxExport scope',
      ),
      (
        "@FlaxExport(scope: 'shop') @FlaxExport(scope: 'admin') class Cart {}",
        '',
        'only one FlaxExport',
      ),
      (
        "@FlaxExport(scope: 'shop') @FlaxIgnore() class Cart {}",
        '',
        'ignored or internal',
      ),
      (
        "@FlaxExport(scope: 'shop') final value = 1;",
        '',
        'supports public classes',
      ),
      (
        "@FlaxExport(scope: 'shop') enum Status { @FlaxIgnore() ready }",
        '',
        'cannot remove enum values',
      ),
      (
        "@FlaxExport(scope: 'shop') typedef Value = int;",
        '',
        'supports public classes',
      ),
      (
        "class Cart { @FlaxExport(scope: 'shop') int read() => 1; }",
        '',
        'Put FlaxExport on the class',
      ),
      (
        "@FlaxExport(scope: 'shop') int read(@FlaxIgnore() int value) => value;",
        '',
        'do not select parameters',
      ),
      (
        "@FlaxExport(scope: 'shop') class Cart { @FlaxExport(scope: 'shop') int read() => 1; }",
        '',
        'Put FlaxExport on the class',
      ),
      (
        "@FlaxExport(scope: 'shop') class Cart { @FlaxIgnore() int get debug => 1; }",
        'classes: {Cart: {kind: object, getters: [debug]}}\n',
        'FlaxIgnore member',
      ),
      (
        "@FlaxIgnore() class Cart {}",
        'classes: [Cart]\n',
        'FlaxIgnore declaration',
      ),
      (
        '@FlaxIgnore() set value(int next) {}',
        'topLevel: {setters: [value]}\n',
        'FlaxIgnore declaration',
      ),
      (
        "@FlaxExport(scope: 'admin') int resetCart() => 1;",
        'functions: [resetCart]\n',
        'conflicts with FlaxExport scope',
      ),
      (
        "@FlaxExport(scope: 'shop') int hidden() => 1;",
        'overrides: {exclude: [hidden]}\n',
        'Cannot generate FlaxExport',
      ),
    ];
    for (final (source, selection, message) in cases) {
      final root = _package(
        "import 'package:flax_annotations/flax_annotations.dart';\n$source\n",
      );
      _writeConfig(root, 'shop', selection);
      await expectLater(
        FlaxCodegenPackagePipeline.validateConfig(_config(root)),
        throwsA(
          isA<FlaxCodegenException>().having(
            (error) => error.diagnostics.any(
              (d) =>
                  d.source.endsWith('api.dart') &&
                  d.line >= 2 &&
                  d.message.contains(message),
            ),
            message,
            isTrue,
          ),
        ),
      );
    }
  });
}

String _config(Directory root) => p.join(root.path, 'bindings/flax_shop.yaml');

void _writeSourceConfig(Directory root, String scope, {List<String>? sources}) {
  _writeConfig(root, scope, '');
  final file = File(p.join(root.path, 'bindings/flax_$scope.yaml'));
  file.writeAsStringSync(
    file
            .readAsStringSync()
            .replaceFirst(
              'library: package:annotation_example/public.dart\n',
              '',
            )
            .replaceFirst('annotations: true\n', '') +
        (sources == null ? '' : 'sources: ${jsonEncode(sources)}\n'),
  );
}

Directory _package(String source) {
  final root = Directory(Directory.systemTemp.resolveSymbolicLinksSync())
      .createTempSync('flax-annotations-');
  addTearDown(() => root.deleteSync(recursive: true));
  Directory(p.join(root.path, 'lib')).createSync();
  Directory(p.join(root.path, 'bindings')).createSync();
  Directory(p.join(root.path, '.dart_tool')).createSync();
  File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: annotation_example
dependencies:
  flax: any
  flax_annotations: any
''');
  File(p.join(root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 2
capabilities: [bindings]
bindingNamespace: example.annotations
''');
  File(p.join(root.path, 'lib/api.dart')).writeAsStringSync(source);
  File(p.join(root.path, 'lib/public.dart'))
      .writeAsStringSync("export 'api.dart';\n");
  final core = writeEmptyCorePackage(root);
  File(p.join(root.path, '.dart_tool/package_config.json')).writeAsStringSync(
    jsonEncode({
      'configVersion': 2,
      'packages': [
        for (final entry in {
          'annotation_example': root,
          'flax': core,
          'flax_annotations': Directory(p.absolute('../flax_annotations')),
        }.entries)
          {
            'name': entry.key,
            'rootUri': entry.value.uri.toString(),
            'packageUri': 'lib/',
            'languageVersion': '3.13',
          },
      ],
    }),
  );
  for (final scope in ['shop', 'admin']) {
    _writeConfig(root, scope, '');
  }
  return root;
}

void _writeConfig(
  Directory root,
  String scope,
  String selection, {
  bool annotations = true,
}) {
  File(p.join(root.path, 'bindings/flax_$scope.yaml')).writeAsStringSync('''
format: 2
name: $scope
library: package:annotation_example/public.dart
dartOutput: lib/$scope.g.dart
tsOutput: js/$scope.ts
annotations: $annotations
$selection''');
}
