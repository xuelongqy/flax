import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/src/diagnostic.dart';
import 'package:flax_codegen/src/emitter.dart';
import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/manifest.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:flax_codegen/src/manifest_projection.dart';
import 'package:flax_codegen/src/model.dart';
import 'package:flax_codegen/src/ownership.dart';
import 'package:flax_codegen/src/package_pipeline.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'support/core_package.dart';

void main() {
  group('FlaxCodegenPackagePipeline.validateConfig', () {
    test('SDK build plan uses the canonical provider route instead of unrelated reexports', () async {
      final workspace = _tempWorkspace();
      final provider = _writeHostPackage(
        workspace: workspace,
        name: 'base_pkg',
        bindingNamespace: 'example.base',
        libraries: {
          'api.dart': 'class Money { Money(); }',
          'alias.dart': "export 'api.dart';",
        },
        configs: {
          'flax_base.yaml': '''
format: 2
name: base
library: package:base_pkg/api.dart
jsPackage: '@base/values'
dartOutput: lib/base.g.dart
tsOutput: js/aggregate.ts
publicLibraries:
  package:base_pkg/api.dart:
    jsPackage: '@base/values'
    tsOutput: js/api/index.ts
  package:base_pkg/alias.dart:
    jsPackage: '@unused/reexport'
    tsOutput: js/alias/index.ts
classes:
  Money:
    kind: object
    constructors: {'': []}
''',
        },
      );
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {
          'api.dart': "import 'package:base_pkg/api.dart';\nMoney current() => Money();",
        },
        configs: {
          'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
dartOutput: lib/api.g.dart
tsOutput: js/api.ts
functions: [current]
''',
        },
      );
      final metadata = File(p.join(host.root.path, 'flax_package.yaml'));
      metadata.writeAsStringSync(
        '${metadata.readAsStringSync()}typesSdk: {name: "@host/sdk", scopes: [api]}\n',
      );
      _writePackageConfig(
        workspace,
        {'base_pkg': provider.root, 'host_pkg': host.root},
        javascriptDependencies: {
          'host_pkg': ['@flax/core', '@base/values'],
        },
        providerJavascript: {'base_pkg': '@base/values'},
      );
      final base = await FlaxCodegenPackagePipeline.generateConfig(
        provider.configPath('flax_base.yaml'),
      );
      File(p.join(provider.root.path, 'bindings/manifest.json'))
          .writeAsStringSync(base.manifest.encode());
      final validation = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_api.yaml'),
      );
      final outputs = FlaxCodegenBindingEmitter([
        ...validation.directDependencies.values.expand(
          (projection) => projection.modulesByModuleId.values,
        ),
        ...validation.localModels,
      ]).typescriptOutputs(validation.localModels.single);
      expect(outputs['js/api.ts'], contains("from '@base/values'"));
      await FlaxCodegenPackagePipeline.generateConfig(
        host.configPath('flax_api.yaml'),
      );
      final plan = jsonDecode(
        File(p.join(host.root.path, 'bindings/js_modules.json'))
            .readAsStringSync(),
      );
      expect(plan['typesSdk']['dependencies'], ['@base/values', '@flax/core']);
    });

    test(
      'shared public facades reject nonadjacent export collisions',
      () async {
        final package = _tempPackage(
          name: 'scope_pkg',
          libraries: {
            'a.dart': 'class Shared { Shared(); }',
            'b.dart': 'class Other { Other(); }',
            'c.dart': 'class Shared { Shared(); }',
          },
          configs: {
            for (final name in ['a', 'b', 'c'])
              'flax_$name.yaml':
                  '''
format: 2
name: $name
library: package:scope_pkg/$name.dart
jsPackage: '@example/$name'
dartOutput: lib/$name.g.dart
tsOutput: js/$name.ts
publicLibraries:
  package:scope_pkg/$name.dart:
    jsPackage: '@example/shared'
    tsOutput: js/shared/index.ts
classes:
  ${name == 'b' ? 'Other' : 'Shared'}:
    kind: object
    constructors: {'': []}
''',
          },
        );
        await expectLater(
          FlaxCodegenPackagePipeline.validateConfig(
            package.configPath('flax_a.yaml'),
          ),
          throwsA(
            isA<FlaxCodegenException>().having(
              (error) => error.diagnostics.any(
                (diagnostic) =>
                    diagnostic.code == FlaxCodegenDiagnosticCode.output &&
                    diagnostic.message.contains('js/shared/index.ts'),
              ),
              'shared export collision',
              isTrue,
            ),
          ),
        );
      },
    );

    test('sibling modules compose one public library facade', () async {
      final package = _tempPackage(
        name: 'scope_pkg',
        libraries: {'api.dart': 'class A { A(); } class B { B(); }'},
        configs: {
          for (final name in ['a', 'b'])
            'flax_$name.yaml':
                '''
format: 2
name: $name
library: package:scope_pkg/api.dart
jsPackage: '@example/api'
dartOutput: lib/$name.g.dart
tsOutput: js/$name.ts
publicLibraries:
  package:scope_pkg/api.dart:
    jsPackage: '@example/api'
    tsOutput: js/index.ts
classes:
  ${name.toUpperCase()}:
    kind: object
    constructors: {'': []}
''',
        },
      );
      final result = await FlaxCodegenPackagePipeline.generateConfig(
        package.configPath('flax_a.yaml'),
      );
      expect(
        result.outputInventory.where((path) => path == 'js/index.ts'),
        hasLength(1),
      );
      final source = File(p.join(package.root.path, 'js/index.ts'))
          .readAsStringSync();
      expect(source, contains('a_A'));
      expect(source, contains('b_B'));
      expect(source.split('// GENERATED CODE.').length, 2);
      await FlaxCodegenPackagePipeline.checkConfig(
        package.configPath('flax_b.yaml'),
      );
      File(package.configPath('flax_app.yaml'))
          .writeAsStringSync('format: 2\n');
      await FlaxCodegenPackagePipeline.generateConfig(
        package.configPath('flax_app.yaml'),
      );
      final plan = jsonDecode(
        File(p.join(package.root.path, 'bindings/js_modules.json'))
            .readAsStringSync(),
      ) as Map;
      expect(
        (plan['modules'] as List).where(
          (entry) => entry['specifier'] == '@example/api',
        ),
        hasLength(1),
      );
      await FlaxCodegenPackagePipeline.checkConfig(
        package.configPath('flax_app.yaml'),
      );
      File(package.configPath('flax_app.yaml'))
          .writeAsStringSync("format: 2\njsPackage: '@example/api'\n");
      await expectLater(
        FlaxCodegenPackagePipeline.generateConfig(
          package.configPath('flax_app.yaml'),
        ),
        throwsA(
          isA<FlaxCodegenException>().having(
            (error) => error.toString(),
            'conflicting entry',
            contains('Conflicting generated JS entries for @example/api'),
          ),
        ),
      );
    });

    test(
      'automatic scope keeps independent getter and setter owners',
      () async {
        final package = _tempPackage(
          name: 'scope_pkg',
          libraries: {'api.dart': 'int sharedValue = 3;'},
          configs: {
            'flax_read.yaml': """
format: 2
name: read
library: package:scope_pkg/api.dart
jsPackage: '@example/values'
dartOutput: lib/read.g.dart
tsOutput: js/read.ts
publicLibraries:
  package:scope_pkg/api.dart:
    jsPackage: '@example/values'
    tsOutput: js/index.ts
topLevel:
  getters: [sharedValue]
""",
            'flax_write.yaml': """
format: 2
name: write
library: package:scope_pkg/api.dart
automatic: true
jsPackage: '@example/values'
dartOutput: lib/write.g.dart
tsOutput: js/write.ts
publicLibraries:
  package:scope_pkg/api.dart:
    jsPackage: '@example/values'
    tsOutput: js/index.ts
""",
          },
        );
        final result = await FlaxCodegenPackagePipeline.generateConfig(
          package.configPath('flax_write.yaml'),
        );
        final read = result.localModels.singleWhere(
          (module) => module.name == 'read',
        );
        final write = result.localModels.singleWhere(
          (module) => module.name == 'write',
        );
        expect(read.topLevel!.getters.map((g) => g.name), ['sharedValue']);
        expect(write.topLevel!.getters, isEmpty);
        expect(write.topLevel!.setters.map((s) => s.name), ['sharedValue']);
        final source = File(p.join(package.root.path, 'js/index.ts'))
            .readAsStringSync();
        expect(source, contains('getSharedValue'));
        expect(source, contains('setSharedValue'));
        await FlaxCodegenPackagePipeline.checkConfig(
          package.configPath('flax_read.yaml'),
        );
      },
    );

    test(
      'automatic sibling libraries share source owners and generic parents',
      () async {
        final package = _tempPackage(
          name: 'scope_pkg',
          configs: {
            'flax_a_facade.yaml': '''
format: 2
name: facade
library: package:scope_pkg/facade.dart
automatic: true
jsPackage: '@example/facade'
dartOutput: lib/facade.g.dart
tsOutput: js/facade.ts
publicLibraries:
  package:scope_pkg/facade.dart:
    jsPackage: '@example/facade'
    tsOutput: js/facade/index.ts
''',
            'flax_z_base.yaml': '''
format: 2
name: base
library: package:scope_pkg/base.dart
automatic: true
jsPackage: '@example/base'
dartOutput: lib/base.g.dart
tsOutput: js/base.ts
publicLibraries:
  package:scope_pkg/base.dart:
    jsPackage: '@example/base'
    tsOutput: js/base/index.ts
''',
          },
          libraries: {
            'values.dart': '''
class Base { Base(); int get value => 3; }
class Child extends Base { Child(); }
class Bag<T extends Base> { Bag(this.item); final T item; }
T echo<T extends Base>(T value) => value;
''',
            'base.dart': "export 'values.dart';",
            'facade.dart': '''
import 'base.dart';
export 'base.dart';
class Derived extends Child { Derived(); }
Bag<Child> wrap(Child value) => Bag(value);
''',
          },
        );
        final result = await FlaxCodegenPackagePipeline.validateConfig(
          package.configPath('flax_a_facade.yaml'),
        );
        final base = result.localModels.singleWhere((m) => m.name == 'base');
        final facade = result.localModels.singleWhere(
          (m) => m.name == 'facade',
        );
        expect(
          base.classes.map((type) => type.name),
          containsAll(['Base', 'Child', 'Bag']),
        );
        expect(facade.classes.map((type) => type.name), ['Derived']);
        expect(base.functions.map((f) => f.call.name), ['echo']);
        expect(
          base.publicLibraries
              .singleWhere((route) => route.jsPackage == '@example/facade')
              .exports,
          containsAll(['Base', 'Child', 'Bag', 'echo']),
        );
        final generated = await FlaxCodegenPackagePipeline.generateConfig(
          package.configPath('flax_a_facade.yaml'),
        );
        expect(
          generated.outputInventory.where((p) => p == 'js/facade/index.ts'),
          hasLength(1),
        );
        final facadeSource = File(
          p.join(package.root.path, 'js/facade/index.ts'),
        ).readAsStringSync();
        expect(facadeSource, contains('base_Base'));
        expect(facadeSource, contains('facade_Derived'));

        expect(facade.functions.map((f) => f.call.name), ['wrap']);
        final child = base.classes.singleWhere((type) => type.name == 'Child');
        expect(
          facade.classes.single.superTypes.any((type) => type.id == child.id),
          isTrue,
        );
        final owners = result.manifest.modules
            .expand((m) => m.model.identities)
            .where((row) => row.owner)
            .toList();
        expect(
          owners.map((row) => row.sourceIdentity).toSet(),
          hasLength(owners.length),
        );
        expect(
          base.classes
              .singleWhere((type) => type.name == 'Bag')
              .typeParameters
              .single
              .defaultType!
              .id,
          base.classes.singleWhere((type) => type.name == 'Base').id,
        );
      },
    );

    test(
      'discovers prefixed siblings and honors an explicit custom filename',
      () async {
        final package = _tempPackage(
          name: 'scope_pkg',
          configs: {
            'flax_api.yaml': '''
format: 2
name: api
library: package:scope_pkg/api.dart
jsPackage: '@example/scope'
dartOutput: lib/api.g.dart
tsOutput: js/api.ts
classes: [Counter]
''',
            'custom.yml': '''
format: 2
name: extra
library: package:scope_pkg/api.dart
jsPackage: '@example/scope'
dartOutput: lib/extra.g.dart
tsOutput: js/extra.ts
functions: [readCount]
''',
            'notes.yaml': 'not a binding selection',
            'flax_overrides.yaml': 'format: 2\noverrides: {}\n',
          },
          libraries: {
            'api.dart':
                'class Counter { Counter(); int get count => 2; }\n'
                'int readCount(Counter value) => value.count;\n',
          },
        );
        final selected = await FlaxCodegenPackagePipeline.validateConfig(
          package.configPath('flax_api.yaml'),
        );
        expect(selected.localModels.map((value) => value.name), ['api']);
        final custom = await FlaxCodegenPackagePipeline.validateConfig(
          package.configPath('custom.yml'),
        );
        expect(custom.localModels.map((value) => value.name), ['extra', 'api']);
        expect(
          custom.localModels.first.functions.single.call.name,
          'readCount',
        );
        expect(
          custom.manifest.bindingNamespace,
          selected.manifest.bindingNamespace,
        );
      },
    );

    test(
      'source-scanned providers expose public carriers and are reused once',
      () async {
        for (final configFree in [false, true]) {
          final workspace = _tempWorkspace();
          const selection = """
format: 2
name: app
dartOutput: lib/app.g.dart
tsOutput: js/app.ts
""";
          final provider = _writeHostPackage(
            workspace: workspace,
            name: 'price_pkg',
            bindingNamespace: 'example.price',
            configs: configFree ? {} : {'flax_bindings.yaml': selection},
            libraries: {
              'src/money.dart': """
import 'package:flax_annotations/flax_annotations.dart';
@FlaxExport()
class Money { Money(); int get cents => 1200; }
""",
            },
          );
          final host = _writeHostPackage(
            workspace: workspace,
            name: 'shop_pkg',
            dependencies: ['price_pkg'],
            configs: configFree
                ? {}
                : {'flax_bindings.yaml': '${selection}imports: [price_pkg]\n'},
            libraries: {
              'src/shop.dart': """
import 'package:flax_annotations/flax_annotations.dart';
import 'package:price_pkg/flax_bindings/app.dart';
@FlaxExport()
Money currentPrice() => Money();
""",
            },
          );
          _writePackageConfig(
            workspace,
            {
              'price_pkg': provider.root,
              'shop_pkg': host.root,
              'flax_annotations': Directory(p.absolute('../flax_annotations')),
            },
            javascriptDependencies: {
              'shop_pkg': ['@example/price'],
            },
            providerJavascript: {'price_pkg': '@example/price'},
          );
          final generated = await FlaxCodegenPackagePipeline.generateConfig(
            configFree ? null : provider.configPath('flax_bindings.yaml'),
            packageRoot: provider.root.path,
          );
          expect(
            generated.localModels.single.typeLibraries['Money'],
            'package:price_pkg/flax_bindings/app.dart',
          );
          final consumer = await FlaxCodegenPackagePipeline.generateConfig(
            configFree ? null : host.configPath('flax_bindings.yaml'),
            packageRoot: host.root.path,
          );
          expect(consumer.localModels.single.classes, isEmpty);
          expect(
            consumer.localModels.single.functions.single.call.result.id,
            generated.localModels.single.classes.single.id,
          );
          expect(
            consumer.localModels.single.typeLibraries['Money'],
            'package:price_pkg/flax_bindings/app.dart',
          );
          expect(
            File(p.join(host.root.path, 'lib/flax_bindings/app.dart'))
                .readAsStringSync(),
            isNot(contains('show Money')),
          );
          await FlaxCodegenPackagePipeline.checkConfig(
            configFree ? null : host.configPath('flax_bindings.yaml'),
            packageRoot: host.root.path,
          );
        }
      },
    );

    test('automatic providers compare filtered members and reuse functions', () async {
      final workspace = _tempWorkspace();
      final base = _writeHostPackage(
        workspace: workspace,
        name: 'base_pkg',
        bindingNamespace: 'example.base',
        configs: const {},
        libraries: {
          'api.dart': '''
import 'package:meta/meta.dart';
class Value {
  Value();
  @protected int get available => 7;
  @visibleForTesting int get testing => 9;
}
int describe(Value value) => value.available;
T identify<T>(T value) => value;
T fixedIdentify<T>(T value) => value;
Future<Object?> copyData(Future<Object?> value) => value;
''',
        },
      );
      final middle = _writeHostPackage(
        workspace: workspace,
        name: 'middle_pkg',
        dependencies: ['base_pkg'],
        configs: const {},
        libraries: {
          'api.dart': """
import 'package:base_pkg/api.dart';
export 'package:base_pkg/api.dart' show Value;
Value pass(Value value) => value;
""",
        },
      );
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg', 'middle_pkg'],
        configs: const {},
        libraries: {'api.dart': "export 'package:base_pkg/api.dart';"},
      );
      for (final package in [base, middle, host]) {
        final metadata = File(p.join(package.root.path, 'flax_package.yaml'));
        metadata.writeAsStringSync(
          '${metadata.readAsStringSync()}javascript: {package: "@example/${p.basename(package.root.path)}", version: same, mode: runtime}\n',
        );
      }
      final repo = File(
        p.join(Directory.current.path, '../../.dart_tool/package_config.json'),
      ).absolute;
      final packages =
          (jsonDecode(repo.readAsStringSync())
                  as Map<String, Object?>)['packages']
              as List<Object?>;
      final meta = packages.cast<Map<String, Object?>>().singleWhere(
        (entry) => entry['name'] == 'meta',
      );
      final metaRoot = Directory.fromUri(
        repo.uri.resolve(meta['rootUri'] as String),
      );
      _writePackageConfig(
        workspace,
        {
          'base_pkg': base.root,
          'middle_pkg': middle.root,
          'host_pkg': host.root,
          'meta': metaRoot,
        },
        javascriptDependencies: {
          'middle_pkg': ['@example/base_pkg'],
          'host_pkg': ['@example/base_pkg', '@example/middle_pkg'],
        },
        providerJavascript: {
          'base_pkg': '@example/base_pkg',
          'middle_pkg': '@example/middle_pkg',
        },
      );
      File(p.join(base.root.path, 'bindings/flax_overrides.yaml'))
          .writeAsStringSync('''
format: 2
overrides:
  functions:
    fixedIdentify: {parameters: [value], typeArguments: [String]}
    copyData:
      parameters: [value]
      data: {parameters: [value], result: true}
''');
      final provider = await FlaxCodegenPackagePipeline.validateLibrary(
        'package:base_pkg/api.dart',
        packageRoot: base.root.path,
      );
      File(p.join(base.root.path, 'bindings/manifest.json'))
          .writeAsStringSync(provider.manifest.encode());
      final middleProvider = await FlaxCodegenPackagePipeline.validateLibrary(
        'package:middle_pkg/api.dart',
        packageRoot: middle.root.path,
      );
      File(p.join(middle.root.path, 'bindings/manifest.json'))
          .writeAsStringSync(middleProvider.manifest.encode());
      final value = provider.localModels.single.classes.single;
      expect(value.getters.map((getter) => getter.name), contains('available'));
      expect(
        value.getters.map((getter) => getter.name),
        isNot(contains('testing')),
      );
      final consumer = await FlaxCodegenPackagePipeline.validateLibrary(
        'package:host_pkg/api.dart',
        packageRoot: host.root.path,
      );
      expect(consumer.localModels.single.classes, isEmpty);
      expect(
        consumer.localModels.single.functions.map(
          (function) => function.call.name,
        ),
        ['copyData', 'fixedIdentify'],
      );
      expect(
        consumer.skips
            .where((skip) => skip.code == 'existing_provider')
            .map((skip) => skip.target),
        containsAll(['Value', 'describe', 'identify']),
      );
      File(host.configPath('flax_bindings.yaml')).writeAsStringSync('''
format: 2
name: scoped
library: package:host_pkg/api.dart
jsPackage: '@example/host_pkg'
dartOutput: lib/scoped.g.dart
tsOutput: js/scoped.ts
classes: [Value]
functions: [describe, identify]
''');
      final scoped = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_bindings.yaml'),
      );
      expect(scoped.localModels.single.classes, isEmpty);
      expect(scoped.localModels.single.functions, isEmpty);
      expect(
        scoped.skips
            .where((skip) => skip.code == 'existing_provider')
            .map((skip) => skip.target),
        containsAll(['Value', 'describe', 'identify']),
      );
      final config = File(host.configPath('flax_bindings.yaml'));
      final selected = config.readAsStringSync().replaceFirst(
        'functions: [describe, identify]',
        'functions: [describe, identify, copyData]',
      );
      config.writeAsStringSync('''
${selected}overrides:
  classes:
    Value: {getters: [available]}
  functions:
    describe: {data: {result: false}}
    copyData: {data: {parameters: [value], result: true}}
''');
      final overridden = await FlaxCodegenPackagePipeline.validateConfig(
        config.path,
      );
      expect(overridden.localModels.single.classes, isEmpty);
      expect(
        overridden.localModels.single.functions.map((value) => value.call.name),
        isEmpty,
      );
      config.writeAsStringSync(
        config.readAsStringSync().replaceFirst('[available]', '[missing]'),
      );
      await expectLater(
        FlaxCodegenPackagePipeline.validateConfig(config.path),
        throwsA(isA<FlaxCodegenException>()),
      );
    });

    test('distinct provider names use source identities and qualified imports', () async {
      final workspace = _tempWorkspace();
      final providers = {
        for (final name in ['base_a', 'base_b'])
          name: _writeHostPackage(
            workspace: workspace,
            name: name,
            bindingNamespace: 'example.${name.replaceAll('_', '')}',
            configs: const {},
            libraries: {
              'api.dart':
                  'class Token { Token(); } int convert(Token value) => 1;',
            },
          ),
      };
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: providers.keys.toList(),
        configs: const {},
        libraries: {
          'api.dart': '''
import 'package:base_a/api.dart' as first;
import 'package:base_b/api.dart' as second;
class Token { Token(); }
first.Token echoFirst(first.Token value) => value;
second.Token echoSecond(second.Token value) => value;
Token echoLocal(Token value) => value;
int convert(int left, int right) => left + right;
''',
        },
      );
      for (final package in [...providers.values, host]) {
        final metadata = File(p.join(package.root.path, 'flax_package.yaml'));
        metadata.writeAsStringSync(
          '${metadata.readAsStringSync()}javascript: {package: "@example/${p.basename(package.root.path)}", version: same, mode: runtime}\n',
        );
      }
      _writePackageConfig(
        workspace,
        {
          'host_pkg': host.root,
          for (final entry in providers.entries) entry.key: entry.value.root,
        },
        javascriptDependencies: {
          'host_pkg': ['@example/base_a', '@example/base_b'],
        },
        providerJavascript: {
          'base_a': '@example/base_a',
          'base_b': '@example/base_b',
        },
      );
      for (final entry in providers.entries) {
        final provider = await FlaxCodegenPackagePipeline.validateLibrary(
          'package:${entry.key}/api.dart',
          packageRoot: entry.value.root.path,
        );
        File(p.join(entry.value.root.path, 'bindings/manifest.json'))
            .writeAsStringSync(provider.manifest.encode());
      }
      final consumer = await FlaxCodegenPackagePipeline.validateLibrary(
        'package:host_pkg/api.dart',
        packageRoot: host.root.path,
      );
      final model = consumer.localModels.single;
      expect(model.classes.single.name, 'Token');
      final emitter = FlaxCodegenBindingEmitter([
        model,
        for (final dependency in consumer.directDependencies.values)
          ...dependency.modulesByModuleId.values,
      ]);
      final dart = emitter.dart(model);
      final ts = emitter.typescript(model);
      expect(model.typeLibraries['convert'], 'package:host_pkg/api.dart');
      expect(dart, contains('return api.convert('));
      for (final name in providers.keys) {
        expect(dart, contains("import 'package:$name/api.dart' as api"));
        expect(ts, contains("from '@example/$name'"));
      }
      expect(ts, contains('upstream0.Token'));
      expect(ts, contains('upstream1.Token'));
    });

    test('enhanced enum identities and generic constants survive projection', () async {
      final workspace = _tempWorkspace();
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'enum_pkg',
        bindingNamespace: 'example.enum',
        libraries: {
          'api.dart': "export 'src/enums.dart';",
          'src/enums.dart': '''
enum Status<T> {
  ready<int>(3), text<String>('three');
  const Status(this.value);
  final T value;
  T echo(T input) => input;
  static int reads = 0;
}
''',
        },
        configs: {
          'flax_api.yaml': '''
format: 2
name: api
library: package:enum_pkg/api.dart
jsPackage: '@enum/api'
dartOutput: lib/api.g.dart
tsOutput: js/api.ts
classes:
  Status:
    kind: enum
    getters: [value]
    instanceMethods:
      echo: [input]
    staticGetters: [reads]
    staticSetters: [reads]
''',
        },
      );
      final metadata = File(p.join(host.root.path, 'flax_package.yaml'));
      metadata.writeAsStringSync(
        '${metadata.readAsStringSync()}javascript: {package: "@enum/api", version: same, mode: runtime}\n',
      );
      _writePackageConfig(workspace, {'enum_pkg': host.root});
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_api.yaml'),
      );
      final type = result.localModels.single.classes.single;
      expect(
        type.enumOperationId('value', 'get'),
        'example.enum/api#function:Status.value%3Aget',
      );
      final diagnostics = FlaxCodegenManifestDiagnostics('enum-roundtrip.json');
      final restored = FlaxCodegenManifest.parse(
        result.manifest.encode(),
        diagnostics,
      )!;
      expect(diagnostics.items, isEmpty);
      expect(restored.encode(), result.manifest.encode());
      for (final model in [
        result.localModels.single,
        result.projection.modulesByModuleId['example.enum/api']!,
        restored.modules.single.model.module,
      ]) {
        final values = model.types
            .singleWhere((type) => type.name == 'Status')
            .enumValueTypes;
        expect(values['ready']!.tsArguments.single.kind, 'int');
        expect(values['text']!.tsArguments.single.kind, 'String');
        final ts = FlaxCodegenBindingEmitter([model]).typescript(model);
        expect(ts, contains('Status<number>'));
        expect(ts, contains('Status<string>'));
      }
    });

    test(
      'both generation modes require a direct Dart flax dependency',
      () async {
        final package = _tempPackage(
          name: 'host_pkg',
          libraries: {'api.dart': 'class Value { Value(); }'},
          configs: {
            'flax_api.yaml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'api',
              library: 'package:host_pkg/api.dart',
              dartOutput: 'lib/api.g.dart',
              tsOutput: 'js/api.ts',
            ),
          },
          metadata: '''
format: 2
capabilities: [bindings]
bindingNamespace: example.host
javascript: {package: '@host/api', version: same, mode: runtime}
''',
        );
        for (final dependency in ['', 'dev_dependencies:\n  flax: any\n']) {
          File(p.join(package.root.path, 'pubspec.yaml'))
              .writeAsStringSync('name: host_pkg\n$dependency');
          for (final validate in [
            () => FlaxCodegenPackagePipeline.validateConfig(
              package.configPath('flax_api.yaml'),
            ),
            () => FlaxCodegenPackagePipeline.validateLibrary(
              'package:host_pkg/api.dart',
              packageRoot: package.root.path,
            ),
          ]) {
            await expectLater(
              validate(),
              throwsA(
                isA<FlaxCodegenException>().having(
                  (error) => error.diagnostics.single.message,
                  'message',
                  contains('must depend on Dart flax'),
                ),
              ),
            );
          }
        }
      },
    );
    test('static accessors preserve wire identities and provider write capability', () async {
      final workspace = _tempWorkspace();
      final base = _writeHostPackage(
        workspace: workspace,
        name: 'static_base',
        bindingNamespace: 'example.staticbase',
        libraries: {
          'api.dart': "export 'src/values.dart';",
          'src/values.dart':
              'class Counter { static int count = 0; static int get tracked => count; '
              'static set tracked(num value) { count = value.round(); } }',
        },
        configs: {
          'flax_counter.yaml': """
format: 2
name: counter
library: package:static_base/api.dart
jsPackage: '@static_base/counter'
dartOutput: lib/counter.g.dart
tsOutput: js/counter.ts
classes:
  Counter:
    kind: object
    staticGetters: [count, tracked]
    staticSetters: [count, tracked]
""",
        },
      );
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'static_host',
        bindingNamespace: 'example.statichost',
        dependencies: ['static_base'],
        configs: const {},
        libraries: {'host.dart': "export 'package:static_base/api.dart';"},
      );
      for (final entry in [
        (base.root, 'static_base'),
        (host.root, 'static_host'),
      ]) {
        final metadata = File(p.join(entry.$1.path, 'flax_package.yaml'));
        metadata.writeAsStringSync(
          '${metadata.readAsStringSync()}javascript: {package: "@${entry.$2}/api", version: same, mode: runtime}\n',
        );
      }
      _writePackageConfig(
        workspace,
        {'static_base': base.root, 'static_host': host.root},
        javascriptDependencies: {
          'static_host': ['@static_base/counter', '@static_base/api'],
        },
        providerJavascript: {'static_base': '@static_base/api'},
      );
      final configFile = File(base.configPath('flax_counter.yaml'));
      final original = configFile.readAsStringSync();
      final complete = await FlaxCodegenPackagePipeline.validateConfig(
        configFile.path,
      );
      final type = complete.localModels.single.classes.single;
      expect(type.id, 'example.staticbase/counter#type:Counter');
      expect(
        type.staticGetterId(type.staticGetters.first),
        'example.staticbase/counter#read:Counter.count',
      );
      expect(
        type.staticSetterId(type.staticSetters.first),
        'example.staticbase/counter#function:Counter.count%3D',
      );
      expect(type.staticGetters.last.type.kind, 'int');
      expect(type.staticSetters.last.type.kind, 'num');
      expect(
        complete.manifest.modules.single.model.identities
            .where((row) => row.sourceIdentity.name == 'Counter.count=')
            .single
            .sourceIdentity
            .originatingUri,
        'package:static_base/src/values.dart',
      );
      final diagnostics = FlaxCodegenManifestDiagnostics('roundtrip.json');
      final roundtrip = FlaxCodegenManifest.parse(
        complete.manifest.encode(),
        diagnostics,
      )!;
      expect(diagnostics.items, isEmpty);
      expect(roundtrip.encode(), complete.manifest.encode());
      for (final section in ['staticGetters', 'staticSetters']) {
        final malformed = jsonDecode(complete.manifest.encode()) as Map;
        final model = (malformed['modules'] as List).single['model'] as Map;
        final accessor =
            ((model['classes'] as List).single[section] as List).first as Map;
        accessor['id'] = section == 'staticGetters'
            ? 'example.staticbase/counter#function:Counter.count'
            : 'example.staticbase/counter#read:Counter.count%3D';
        final rejected = FlaxCodegenManifestDiagnostics('invalid-static.json');
        expect(
          FlaxCodegenManifest.parse(jsonEncode(malformed), rejected),
          isNull,
        );
        expect(
          rejected.items.any((item) => item.pointer.contains('/$section/0/id')),
          isTrue,
        );
      }
      final emitted = FlaxCodegenBindingEmitter([complete.localModels.single]);
      expect(
        emitted.typescript(complete.localModels.single),
        contains(
          'invokeTopLevel("example.staticbase/counter#function:Counter.count%3D"',
        ),
      );
      for (final write in [false, true]) {
        configFile.writeAsStringSync(
          write
              ? original
              : original.replaceFirst(
                  '    staticSetters: [count, tracked]\n',
                  '',
                ),
        );
        final provider = write
            ? await FlaxCodegenPackagePipeline.validateLibrary(
                'package:static_base/api.dart',
                packageRoot: base.root.path,
              )
            : await FlaxCodegenPackagePipeline.validateConfig(configFile.path);
        File(p.join(base.root.path, 'bindings/manifest.json'))
            .writeAsStringSync(provider.manifest.encode());
        final consumer = await FlaxCodegenPackagePipeline.validateLibrary(
          'package:static_host/host.dart',
          packageRoot: host.root.path,
        );
        final classes = consumer.localModels
            .expand((module) => module.classes)
            .toList();
        if (write) {
          expect(classes, isEmpty);
          expect(
            consumer.skips.any(
              (skip) =>
                  skip.target == 'Counter' && skip.code == 'existing_provider',
            ),
            isTrue,
          );
        } else {
          expect(classes, isEmpty);
          expect(
            consumer.skips
                .where((skip) => skip.code == 'provider_surface_insufficient')
                .map((skip) => skip.target),
            containsAll(['Counter.count', 'Counter.tracked']),
          );
        }
      }
    });
    test('independent packages bind one source and accept each other in TypeScript', () async {
      final workspace = _tempWorkspace();
      final source = _writeHostPackage(
        workspace: workspace,
        name: 'money_source',
        bindingNamespace: 'example.source',
        configs: const {},
        libraries: {
          'money.dart':
              'class Money { Money(this.amount); final int amount; '
              'Money echo(Money value) => value; static int count = 0; }',
        },
      );
      String selection(String package) =>
          """
format: 2
name: money
library: package:money_source/money.dart
jsPackage: '@example/$package'
dartOutput: lib/money.g.dart
tsOutput: js/money.ts
classes:
  Money:
    kind: object
    constructors: {'': [amount]}
    getters: [amount]
    instanceMethods: {echo: [value]}
    staticGetters: [count]
    staticSetters: [count]
""";
      final a = _writeHostPackage(
        workspace: workspace,
        name: 'money_a',
        bindingNamespace: 'example.a',
        dependencies: ['money_source'],
        configs: {'flax_money.yaml': selection('a')},
      );
      final b = _writeHostPackage(
        workspace: workspace,
        name: 'money_b',
        bindingNamespace: 'example.b',
        dependencies: ['money_source', 'money_a'],
        configs: {'flax_money.yaml': selection('b')},
      );
      _writePackageConfig(workspace, {
        'money_source': source.root,
        'money_a': a.root,
        'money_b': b.root,
      });
      final first = await FlaxCodegenPackagePipeline.validateConfig(
        a.configPath('flax_money.yaml'),
      );
      File(p.join(a.root.path, 'bindings/manifest.json'))
          .writeAsStringSync(first.manifest.encode());
      final second = await FlaxCodegenPackagePipeline.validateConfig(
        b.configPath('flax_money.yaml'),
      );
      final models = [first.localModels.single, second.localModels.single];
      expect(models[0].classes.single.id, 'example.a/money#type:Money');
      expect(models[1].classes.single.id, 'example.b/money#type:Money');
      expect(second.directDependencies.keys, ['flax']);
      final emitter = FlaxCodegenBindingEmitter(models);
      final paths = <String, List<String>>{};
      for (final (index, model) in models.indexed) {
        final file = File(p.join(workspace.path, 'binding$index.ts'));
        file.writeAsStringSync(emitter.typescript(model));
        paths[model.jsPackage] = [file.path];
      }
      final consumer = File(p.join(workspace.path, 'consumer.ts'));
      consumer.writeAsStringSync("""
import { Money as A } from '@example/a';
import { Money as B } from '@example/b';
const a = A(3); const b = B(4);
a.echo(b); b.echo(a);
A.setCount(1); B.setCount(2); const current: number = A.count;
// @ts-expect-error An ordinary shape is not a Dart reference.
a.echo({ amount: 3 });
""");
      var root = Directory.current;
      while (!Directory(p.join(root.path, 'packages/flax_codegen'))
          .existsSync()) {
        root = root.parent;
      }
      paths['@flax/core/bindings'] = [
        p.join(root.path, 'packages/flax/js/src/runtime/bindings.ts'),
      ];
      final tsconfig = File(p.join(workspace.path, 'tsconfig.json'));
      tsconfig.writeAsStringSync(
        jsonEncode({
          'compilerOptions': {
            'strict': true,
            'exactOptionalPropertyTypes': true,
            'noEmit': true,
            'target': 'ES2022',
            'lib': ['ES2022'],
            'module': 'ESNext',
            'moduleResolution': 'Bundler',
            'paths': paths,
          },
          'files': [consumer.path],
        }),
      );
      final result = await Process.run('pnpm', [
        'exec',
        'tsc',
        '--project',
        tsconfig.path,
      ], workingDirectory: root.path);
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    });

    test(
      'dependency snapshot owner stops recursive superclass binding',
      () async {
        final workspace = _tempWorkspace();
        final base = _writeSnapshotProviderPackage(workspace);
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          dependencies: ['base_pkg'],
          libraries: {
            'api.dart': '''
import 'package:base_pkg/base.dart';

class Consumer {
  Consumer(this.value, this.optional, this.generic);
  final PublicValue value;
  final PublicValue? optional;
  final GenericValue<String>? generic;
}
''',
          },
          configs: {
            'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/api.ts
imports: [base_pkg]
classes:
  Consumer:
    kind: object
    constructors: {'': [value, optional, generic]}
    getters: [value, optional, generic]
''',
          },
        );
        _writePackageConfig(
          workspace,
          {'base_pkg': base.root, 'host_pkg': host.root},
          javascriptDependencies: {
            'host_pkg': ['@base/values'],
          },
          providerJavascript: {'base_pkg': '@base/values'},
        );

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_api.yaml'),
        );
        final local = result.localModels.single;
        final consumer = local.classes.singleWhere(
          (type) => type.name == 'Consumer',
        );
        final parameters = consumer.constructors.single.parameters;
        expect(parameters[0].type.id, 'example.base/base#type:PublicValue');
        expect(parameters[1].type.id, 'example.base/base#type:PublicValue');
        expect(parameters[1].type.nullable, isTrue);
        expect(parameters[2].type.id, 'example.base/base#type:GenericValue');
        expect(parameters[2].type.nullable, isTrue);
        expect(parameters[2].type.dartArguments.single.kind, 'String');
        expect(
          local.classes.map((type) => type.name),
          isNot(contains('HiddenBase')),
        );
        expect(
          local.classes.map((type) => type.name),
          isNot(contains('PublicValue')),
        );
        final dependency = result
            .directDependencies['base_pkg']!
            .modulesByModuleId
            .values
            .single;
        final typescript = FlaxCodegenBindingEmitter([dependency, local])
            .typescript(local);
        expect(typescript, contains('upstream0.PublicValue'));
        expect(typescript, contains('upstream0.GenericValue<string>'));
        expect(typescript, isNot(contains('HiddenBase')));
      },
    );

    test('unowned superclass remains fail-closed', () async {
      final workspace = _tempWorkspace();
      final base = _writeSnapshotProviderPackage(workspace);
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {
          'api.dart': '''
import 'package:base_pkg/base.dart';

class Consumer {
  Consumer(this.value);
  final HiddenBase value;
}
''',
        },
        configs: {
          'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/api.ts
imports: [base_pkg]
classes:
  Consumer:
    kind: object
    constructors: {'': [value]}
''',
        },
      );
      _writePackageConfig(
        workspace,
        {'base_pkg': base.root, 'host_pkg': host.root},
        javascriptDependencies: {
          'host_pkg': ['@base/values'],
        },
        providerJavascript: {'base_pkg': '@base/values'},
      );

      await expectLater(
        FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_api.yaml'),
        ),
        throwsA(
          isA<FlaxCodegenException>().having(
            (error) => error.diagnostics.map((item) => item.message).join('\n'),
            'message',
            contains(
              'External type HiddenBase from base_pkg has no binding provider',
            ),
          ),
        ),
      );
    });

    test('type-only recursive bounds cross a Manifest 12 provider without creating an owner', () async {
      final workspace = _tempWorkspace();
      final base = _writeHostPackage(
        workspace: workspace,
        name: 'base_pkg',
        libraries: {
          'base.dart': '''
class Leaf implements Comparable<Leaf> {
  Leaf();
  @override
  int compareTo(Leaf other) => 0;
}
typedef Items<T extends Comparable<T>> = List<T>;
''',
        },
        configs: {
          'flax_base.yaml': '''
format: 2
name: base
library: package:base_pkg/base.dart
jsPackage: '@base/values'
dartOutput: lib/base.g.dart
tsOutput: js/base.ts
typedefs: [Items]
classes:
  Leaf:
    kind: object
    constructors: {'': []}
''',
        },
      );
      File(p.join(base.root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 2
capabilities: [bindings]
bindingNamespace: example.base
''');
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {
          'api.dart': '''
export 'package:base_pkg/base.dart';
class Box<T extends Comparable<T>> {
  Box(this.value);
  final T value;
}
''',
        },
        configs: {
          'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/api.ts
imports: [base_pkg]
classes:
  Box:
    kind: object
    typeArguments: [Leaf]
    constructors: {'': [value]}
    getters: [value]
''',
        },
      );
      _writePackageConfig(
        workspace,
        {'base_pkg': base.root, 'host_pkg': host.root},
        javascriptDependencies: {
          'host_pkg': ['@base/values'],
        },
        providerJavascript: {'base_pkg': '@base/values'},
      );
      final provider = await FlaxCodegenPackagePipeline.validateConfig(
        base.configPath('flax_base.yaml'),
      );
      File(p.join(base.root.path, 'bindings/manifest.json'))
          .writeAsStringSync(provider.manifest.encode());
      File(base.configPath('flax_base.yaml')).deleteSync();
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_api.yaml'),
      );
      final local = result.localModels.single;
      final box = local.classes.single;
      expect(box.typeParameters.single.bound.kind, 'typeOnly');
      expect(box.typeParameters.single.bound.id, isNull);
      expect(
        box.typeParameters.single.defaultType!.id,
        'example.base/base#type:Leaf',
      );
      final rows = [
        ...provider.manifest.modules.single.model.identities,
        ...result.manifest.modules.single.model.identities,
      ];
      expect(
        rows.where((row) => row.sourceIdentity.name == 'Comparable'),
        isEmpty,
      );
      expect(
        rows.where((row) => row.owner && row.sourceIdentity.name == 'Leaf'),
        hasLength(1),
      );
      final dependency = result
          .directDependencies['base_pkg']!
          .modulesByModuleId
          .values
          .single;
      final emitter = FlaxCodegenBindingEmitter([dependency, local]);
      expect(emitter.typescript(local), contains('upstream0.Leaf'));
      expect(
        emitter.typescript(local),
        contains('__flaxBound:dart:core::Comparable'),
      );
      expect(
        emitter.typescript(dependency),
        contains('__flaxBound:dart:core::Comparable'),
      );
      expect(emitter.typescript(dependency), isNot(contains('compareTo(')));
    });

    test('setter input auto-owns an unselected same-package class without public export', () async {
      final workspace = _tempWorkspace();
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        libraries: {
          'api.dart': "export 'src/values.dart';",
          'src/values.dart': '''
class Token {
  const Token(this.value);
  final int value;
}
set token(Token value) {}
''',
        },
        configs: {
          'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/aggregate.ts
publicLibraries:
  package:host_pkg/api.dart:
    jsPackage: '@host/api'
    tsOutput: js/api/index.ts
topLevel:
  setters: [token]
''',
        },
      );
      _writePackageConfig(workspace, {'host_pkg': host.root});
      final before = _listing(host.root);
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_api.yaml'),
      );
      final modules = result.localModels;
      final module = modules.single;
      final token = module.classes.single;
      const tokenId = 'example.host/api#type:Token';
      expect(module.internalTypeNames, isEmpty);
      expect(token.name, 'Token');
      expect(token.id, tokenId);
      expect(token.constructors, isEmpty);
      expect(token.getters, isEmpty);
      expect(token.setters, isEmpty);
      expect(token.methods, isEmpty);
      expect(module.topLevel!.getters, isEmpty);
      expect(module.topLevel!.setters.single.type.id, tokenId);
      expect(
        module.topLevel!.setters.single.id,
        'example.host/api#function:token%3D',
      );
      expect(
        module.callableFunctions.single.call.parameters.single.type.id,
        tokenId,
      );
      expect(module.typeLibraries['Token'], 'package:host_pkg/api.dart');
      final encodedModule = FlaxCodegenManifestCodec.encodeModule(module);
      expect(encodedModule, isNot(contains('internalTypeNames')));
      final rows = result.manifest.modules.single.model.identities;
      expect(rows.map((row) => row.sourceIdentity.name), ['token=', 'Token']);
      expect(rows.every((row) => row.owner), isTrue);
      expect(
        rows.last.sourceIdentity.originatingUri,
        'package:host_pkg/src/values.dart',
      );
      expect(
        result
            .manifest
            .modules
            .single
            .model
            .module
            .topLevel!
            .setters
            .single
            .type
            .id,
        tokenId,
      );

      expect(module.publicLibraries.single.exports, ['token']);
      expect(
        result.outputInventory.where((path) => path.contains('_Token.ts')),
        isEmpty,
      );
      final outputs = FlaxCodegenBindingEmitter(modules)
          .typescriptOutputs(module);
      expect(outputs['js/api/index.ts'], contains('setToken'));
      expect(outputs['js/api/index.ts'], isNot(contains('TokenInput')));
      expect(outputs['js/api/index.ts'], isNot(contains('export { Token')));
      expect(
        outputs['js/api/_bindings/api.__internal.ts'],
        contains('export interface Token'),
      );
      expect(
        FlaxCodegenBindingEmitter(modules).typescript(module),
        contains('export interface Token'),
      );
      expect(_listing(host.root), before);
    });

    test('setter ordering is canonical and missing provider operations bind locally', () async {
      final workspace = _tempWorkspace();
      final base = _writeHostPackage(
        workspace: workspace,
        name: 'base_pkg',
        bindingNamespace: 'example.base',
        libraries: {'base.dart': 'int zeta = 0; int alpha = 1;'},
        configs: {
          'flax_base.yaml': """
format: 2
name: base
library: package:base_pkg/base.dart
jsPackage: '@base/values'
dartOutput: lib/base.g.dart
tsOutput: js/base.ts
topLevel:
  getters: [zeta, alpha]
  setters: [zeta, alpha]
""",
        },
      );
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {'consumer.dart': "export 'package:base_pkg/base.dart';"},
        configs: {
          'flax_consumer.yaml': """
format: 2
name: consumer
library: package:host_pkg/consumer.dart
jsPackage: '@host/consumer'
dartOutput: lib/consumer.g.dart
tsOutput: js/consumer.ts
imports: [base_pkg]
topLevel:
  setters: [alpha]
""",
        },
      );
      _writePackageConfig(
        workspace,
        {'base_pkg': base.root, 'host_pkg': host.root},
        javascriptDependencies: {
          'host_pkg': ['@base/values'],
        },
        providerJavascript: {'base_pkg': '@base/values'},
      );
      final configFile = File(base.configPath('flax_base.yaml'));
      final originalConfig = configFile.readAsStringSync();
      final first = await FlaxCodegenPackagePipeline.validateConfig(
        configFile.path,
      );
      configFile.writeAsStringSync(
        originalConfig.replaceAll('[zeta, alpha]', '[alpha, zeta]'),
      );
      final reordered = await FlaxCodegenPackagePipeline.validateConfig(
        configFile.path,
      );
      expect(reordered.manifest.encode(), first.manifest.encode());
      expect(
        first.localModels.single.topLevel!.setters.map((setter) => setter.name),
        ['alpha', 'zeta'],
      );
      expect(
        first.manifest.modules.single.model.identities.map(
          (row) => row.sourceIdentity.name,
        ),
        ['alpha=', 'zeta=', 'alpha', 'zeta'],
      );

      // A mutable Dart variable can still have a getter-only provider surface.
      configFile.writeAsStringSync(
        originalConfig.replaceFirst('  setters: [zeta, alpha]\n', ''),
      );
      final readonly = await FlaxCodegenPackagePipeline.validateConfig(
        configFile.path,
      );
      expect(
        readonly.localModels.single.topLevel!.getters.map(
          (getter) => getter.id,
        ),
        first.localModels.single.topLevel!.getters.map((getter) => getter.id),
      );
      File(p.join(base.root.path, 'bindings/manifest.json'))
          .writeAsStringSync(readonly.manifest.encode());
      configFile.deleteSync();
      final before = _listing(base.root);
      final consumer = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_consumer.yaml'),
      );
      final setter = consumer.localModels.single.topLevel!.setters.single;
      expect(setter.isReference, isFalse);
      expect(setter.id, startsWith('example.host/consumer#'));
      expect(_listing(base.root), before);
    });

    test('setter-only reexports freeze identity and reuse immutable provider projections', () async {
      final workspace = _tempWorkspace();
      final base = _writeHostPackage(
        workspace: workspace,
        name: 'base_pkg',
        libraries: {
          'base.dart': "export 'src/values.dart' show sink;",
          'src/values.dart': 'set sink(int value) {}',
        },
        configs: {
          'flax_base.yaml': """
format: 2
name: base
library: package:base_pkg/base.dart
jsPackage: '@base/values'
dartOutput: lib/base.g.dart
tsOutput: js/base.ts
topLevel:
  setters: [sink]
""",
        },
      );
      File(p.join(base.root.path, 'flax_package.yaml')).writeAsStringSync("""
format: 2
capabilities: [bindings]
bindingNamespace: example.base
""");
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {
          'consumer.dart': "export 'package:base_pkg/base.dart' show sink;",
        },
        configs: {
          'flax_consumer.yaml': """
format: 2
name: consumer
library: package:host_pkg/consumer.dart
jsPackage: '@host/consumer'
dartOutput: lib/consumer.g.dart
tsOutput: js/consumer.ts
imports: [base_pkg]
topLevel:
  setters: [sink]
""",
        },
      );
      _writePackageConfig(
        workspace,
        {'base_pkg': base.root, 'host_pkg': host.root},
        javascriptDependencies: {
          'host_pkg': ['@base/values'],
        },
        providerJavascript: {'base_pkg': '@base/values'},
      );
      final owner = await FlaxCodegenPackagePipeline.validateConfig(
        base.configPath('flax_base.yaml'),
      );
      const id = 'example.base/base#function:sink%3D';
      expect(owner.localModels.single.topLevel!.getters, isEmpty);
      expect(owner.localModels.single.topLevel!.setters.single.id, id);
      expect(
        owner
            .manifest
            .modules
            .single
            .model
            .identities
            .single
            .sourceIdentity
            .originatingUri,
        'package:base_pkg/src/values.dart',
      );
      File(p.join(base.root.path, 'bindings/manifest.json'))
          .writeAsStringSync(owner.manifest.encode());
      File(base.configPath('flax_base.yaml')).deleteSync();
      final before = _listing(base.root);
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_consumer.yaml'),
      );
      final setter = result.localModels.single.topLevel!.setters.single;
      expect(setter.id, id);
      expect(setter.isReference, isTrue);
      final rows = result.manifest.modules.single.model.identities;
      expect(rows.single.owner, isFalse);
      expect(rows.single.sourceIdentity.name, 'sink=');
      final projection = result.directDependencies['base_pkg']!;
      projection.modulesByModuleId.values.single.topLevel!.setters.clear();
      expect(
        projection.modulesByModuleId.values.single.topLevel!.setters.single.id,
        id,
      );
      expect(_listing(base.root), before);
    });

    test('extension operations freeze once across public libraries and reuse provider types', () async {
      final workspace = _tempWorkspace();
      final base = _writeHostPackage(
        workspace: workspace,
        name: 'base_pkg',
        libraries: {
          'base.dart': 'class Item { Item(this.value); final int value; }',
        },
        configs: {
          'flax_base.yaml': '''
format: 2
name: base
library: package:base_pkg/base.dart
jsPackage: '@base/values'
dartOutput: lib/base.g.dart
tsOutput: js/base.ts
classes:
  Item:
    kind: object
    constructors: {'': [value]}
    getters: [value]
''',
        },
      );
      File(p.join(base.root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 2
capabilities: [bindings]
bindingNamespace: example.base
''');
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {
          'api.dart': "export 'package:base_pkg/base.dart';\nexport 'src/extensions.dart';",
          'alias.dart': "export 'api.dart';",
          'src/extensions.dart': "import 'package:base_pkg/base.dart';\nextension ItemX on Item { int scaled(int factor) => value * factor; Item get same => this; int hidden() => value; }",
        },
        configs: {
          'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/api.ts
imports: [base_pkg]
publicLibraries:
  package:host_pkg/api.dart:
    jsPackage: '@host/api/main'
    tsOutput: js/main/index.ts
  package:host_pkg/alias.dart:
    jsPackage: '@host/api/alias'
    tsOutput: js/alias/index.ts
extensions:
  ItemX:
    getters: [same]
    methods: {scaled: [factor]}
''',
        },
      );
      _writePackageConfig(
        workspace,
        {'base_pkg': base.root, 'host_pkg': host.root},
        javascriptDependencies: {
          'host_pkg': ['@base/values'],
        },
        providerJavascript: {
          'base_pkg': '@base/values',
          'host_pkg': '@host/api',
        },
      );
      final provider = await FlaxCodegenPackagePipeline.validateConfig(
        base.configPath('flax_base.yaml'),
      );
      File(p.join(base.root.path, 'bindings/manifest.json'))
          .writeAsStringSync(provider.manifest.encode());
      File(base.configPath('flax_base.yaml')).deleteSync();
      final validated = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_api.yaml'),
      );
      final module = validated.localModels.single;
      expect(module.extensions.single.name, 'ItemX');
      expect(module.classes, isEmpty);
      expect(module.extensions.single.onType.id, 'example.base/base#type:Item');
      expect(validated.manifest.toJson()['formatVersion'], 28);
      expect(
        validated.manifest.modules.single.model.identities.where(
          (row) => row.owner,
        ),
        hasLength(2),
      );
      expect(module.extensions.single.members.map((member) => member.id), [
        'example.host/api#function:ItemX.getter.same',
        'example.host/api#function:ItemX.method.scaled',
      ]);
      final emitter = FlaxCodegenBindingEmitter([
        provider.localModels.single,
        module,
      ]);
      final outputs = emitter.typescriptOutputs(module);
      expect(outputs['js/main/index.ts'], contains('export { ItemX }'));
      expect(outputs['js/alias/index.ts'], contains('export { ItemX }'));
      expect(
        outputs.values.where((text) => text.contains('export const ItemX:')),
        hasLength(1),
      );
      final errors = FlaxCodegenManifestDiagnostics('roundtrip');
      final decoded = FlaxCodegenManifest.parse(
        validated.manifest.encode(),
        errors,
      );
      errors.throwIfAny();
      expect(decoded!.encode(), validated.manifest.encode());
      expect(
        () => FlaxCodegenBindingEmitter([module, module]),
        throwsStateError,
      );
      File(p.join(host.root.path, 'bindings/manifest.json'))
          .writeAsStringSync(validated.manifest.encode());
      File(host.configPath('flax_api.yaml')).deleteSync();
      final consumer = _writeHostPackage(
        workspace: workspace,
        name: 'consumer_pkg',
        dependencies: ['host_pkg'],
        libraries: {'api.dart': "export 'package:host_pkg/api.dart';"},
        configs: {
          'flax_api.yaml': '''format: 2
name: consumer
library: package:consumer_pkg/api.dart
jsPackage: '@consumer/api'
dartOutput: lib/consumer.g.dart
tsOutput: js/consumer.ts
imports: [host_pkg]
extensions:
  ItemX:
    getters: [same]
    methods: {scaled: [factor]}
''',
        },
      );
      File(p.join(consumer.root.path, 'flax_package.yaml')).writeAsStringSync(
        'format: 2\ncapabilities: [bindings]\nbindingNamespace: example.consumer\n',
      );
      _writePackageConfig(
        workspace,
        {
          'base_pkg': base.root,
          'host_pkg': host.root,
          'consumer_pkg': consumer.root,
        },
        javascriptDependencies: {
          'host_pkg': ['@base/values'],
          'consumer_pkg': ['@host/api'],
        },
        providerJavascript: {
          'base_pkg': '@base/values',
          'host_pkg': '@host/api',
        },
      );
      final consumed = await FlaxCodegenPackagePipeline.validateConfig(
        consumer.configPath('flax_api.yaml'),
      );
      final reference = consumed.localModels.single;
      expect(reference.extensions.single.isReference, isTrue);
      expect(
        consumed.manifest.modules.single.model.identities.where(
          (row) => row.owner,
        ),
        isEmpty,
      );
      final referenceEmitter = FlaxCodegenBindingEmitter([
        provider.localModels.single,
        module,
        reference,
      ]);
      expect(
        referenceEmitter.dart(reference),
        isNot(contains('_extension_ItemX_')),
      );
      expect(
        referenceEmitter.typescript(reference),
        contains('= upstream0.ItemX;'),
      );
      final selection = File(consumer.configPath('flax_api.yaml'));
      selection.writeAsStringSync(
        selection.readAsStringSync().replaceFirst(
          'scaled: [factor]',
          'hidden: []',
        ),
      );
      await expectLater(
        FlaxCodegenPackagePipeline.validateConfig(selection.path),
        throwsA(anything),
      );
    });

    test(
      'public library consumers reuse a manifest-only provider and named reads',
      () async {
        final workspace = _tempWorkspace();
        final base = _writeHostPackage(
          workspace: workspace,
          name: 'base_pkg',
          libraries: {
            'base.dart':
                'class Item { Item(this.value); final int value; }\n'
                'enum Mode { on, off }\n'
                'const answer = 42;\nfinal token = Item(7);\n',
            'alias.dart': "export 'base.dart';\n",
          },
          configs: {
            'flax_base.yaml': '''
format: 2
name: base
library: package:base_pkg/base.dart
jsPackage: '@base/values'
dartOutput: lib/base.g.dart
tsOutput: js/aggregate.ts
publicLibraries:
  package:base_pkg/base.dart:
    jsPackage: '@base/values/base'
    tsOutput: js/base/index.ts
  package:base_pkg/alias.dart:
    jsPackage: '@base/values/alias'
    tsOutput: js/alias/index.ts
types: [Mode]
topLevel:
  getters: [answer, token]
classes:
  Item:
    kind: object
    constructors:
      '': [value]
    getters: [value]
''',
          },
        );
        File(p.join(base.root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 2
capabilities: [bindings]
bindingNamespace: example.base
''');
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          dependencies: ['base_pkg'],
          libraries: {
            'consumer.dart': "export 'package:base_pkg/alias.dart';\n",
          },
          configs: {
            'flax_consumer.yaml': '''
format: 2
name: consumer
library: package:host_pkg/consumer.dart
jsPackage: '@host/consumer'
dartOutput: lib/consumer.g.dart
tsOutput: js/aggregate.ts
imports: [base_pkg]
publicLibraries:
  package:host_pkg/consumer.dart:
    jsPackage: '@host/consumer/api'
    tsOutput: js/api/index.ts
types: [Mode, Item]
topLevel:
  getters: [token, answer]
''',
          },
        );
        _writePackageConfig(
          workspace,
          {'base_pkg': base.root, 'host_pkg': host.root},
          javascriptDependencies: {
            'host_pkg': ['@base/values'],
          },
          providerJavascript: {'base_pkg': '@base/values'},
        );
        final owner = await FlaxCodegenPackagePipeline.validateConfig(
          base.configPath('flax_base.yaml'),
        );
        File(p.join(base.root.path, 'bindings/manifest.json'))
            .writeAsStringSync(owner.manifest.encode());
        File(base.configPath('flax_base.yaml')).deleteSync();
        final before = _packageFilesystemSnapshot(base.root);
        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_consumer.yaml'),
        );
        final provider = result
            .directDependencies['base_pkg']!
            .modulesByModuleId
            .values
            .single;
        final module = result.localModels.single;
        final emitter = FlaxCodegenBindingEmitter([provider, module]);
        final files = emitter.typescriptOutputs(module);
        expect(module.classes, isEmpty);
        expect(
          module.types.singleWhere((type) => type.name == 'Mode').id,
          'example.base/base#type:Mode',
        );
        expect(
          result.manifest.modules.single.model.identities.where(
            (identity) => identity.owner,
          ),
          isEmpty,
        );
        expect(files.values.join(), isNot(contains('defineEnum(')));
        expect(
          files['js/api/index.ts'],
          contains(
            'export { answer } from "@base/values/base/_bindings/base_answer"',
          ),
        );
        expect(
          files['js/api/index.ts'],
          contains(
            'export { getToken } from "@base/values/base/_bindings/base_token"',
          ),
        );
        expect(files.values.join(), isNot(contains('invokeTopLevel("')));
        expect(emitter.dart(module), isNot(contains('_read_token')));
        expect(
          FlaxCodegenBindingEmitter([module, provider])
              .typescriptOutputs(module),
          files,
        );
        _expectPackageFilesystemUnchanged(base.root, before: before);
      },
    );

    test(
      'readonly reexports reuse a manifest-only provider namespace',
      () async {
        final workspace = _tempWorkspace();
        final base = _writeHostPackage(
          workspace: workspace,
          name: 'base_pkg',
          libraries: {
            'base.dart': "export 'src/values.dart';\n",
            'src/values.dart': '''
class Item {
  Item(this.value);
  final int value;
}
const answer = 42;
final token = Item(7);
T identity<T>(T value) => value;
final genericIdentity = identity;
''',
          },
          configs: {
            'flax_base.yaml': '''
format: 2
name: base
library: package:base_pkg/base.dart
jsPackage: '@base/values'
dartOutput: lib/base.g.dart
tsOutput: js/base.ts
topLevel:
  jsName: BaseValues
  getters: [answer, token, genericIdentity]
classes:
  Item:
    kind: object
    constructors:
      '': [value]
    getters: [value]
''',
          },
        );
        File(p.join(base.root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 2
capabilities: [bindings]
bindingNamespace: example.base
''');
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          dependencies: ['base_pkg'],
          libraries: {
            'consumer.dart': '''
export 'package:base_pkg/base.dart';
const local = 9;
''',
          },
          configs: {
            'flax_consumer.yaml': '''
format: 2
name: consumer
library: package:host_pkg/consumer.dart
jsPackage: '@host/consumer'
dartOutput: lib/consumer.g.dart
tsOutput: js/consumer.ts
imports: [base_pkg]
topLevel:
  jsName: ConsumerValues
  getters: [token, local, answer, genericIdentity]
''',
          },
        );
        _writePackageConfig(
          workspace,
          {'base_pkg': base.root, 'host_pkg': host.root},
          javascriptDependencies: {
            'host_pkg': ['@base/values'],
          },
          providerJavascript: {'base_pkg': '@base/values'},
        );
        final owner = await FlaxCodegenPackagePipeline.validateConfig(
          base.configPath('flax_base.yaml'),
        );
        File(p.join(base.root.path, 'bindings/manifest.json'))
            .writeAsStringSync(owner.manifest.encode());
        File(base.configPath('flax_base.yaml')).deleteSync();
        final before = _listing(base.root);
        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_consumer.yaml'),
        );
        final provider = result
            .directDependencies['base_pkg']!
            .modulesByModuleId
            .values
            .single;
        final module = result.localModels.single;
        expect(module.topLevel!.getters.map((getter) => getter.isReference), [
          true,
          true,
          false,
          true,
        ]);
        expect(module.classes, isEmpty);
        final rows = result.manifest.modules.single.model.identities;
        expect(
          rows.where((row) => row.owner).map((row) => row.sourceIdentity.name),
          ['local'],
        );
        expect(
          rows
              .singleWhere((row) => row.sourceIdentity.name == 'answer')
              .sourceIdentity
              .originatingUri,
          'package:base_pkg/src/values.dart',
        );
        final emitter = FlaxCodegenBindingEmitter([provider, module]);
        final ts = emitter.typescript(module);
        final dart = emitter.dart(module);
        expect(ts, contains("from '@base/values'"));
        expect(ts, contains('get: () => upstream0.BaseValues.answer'));
        expect(ts, contains('readonly token: upstream0.Item'));
        expect(dart, isNot(contains('_read_answer')));
        expect(dart, isNot(contains('_read_token')));
        expect(dart, isNot(contains('_read_genericIdentity')));
        expect(dart, contains('_read_local'));
        final reversed = FlaxCodegenBindingEmitter([module, provider]);
        expect(reversed.typescript(module), ts);
        expect(reversed.dart(module), dart);
        expect(_listing(base.root), before);

        // A consumer manifest may rename its namespace, but not change the
        // declaration shape supplied by its authoritative provider.
        for (final mutation in [
          'kind',
          'name',
          'objectType',
          'callbackType',
          'callbackResult',
        ]) {
          final json = result.manifest.toJson();
          final model =
              ((json['modules'] as List).single as Map)['model'] as Map;
          final getters = (model['topLevel'] as Map)['getters'] as List;
          Map<String, Object?> getter(String name) => getters
              .cast<Map<String, Object?>>()
              .singleWhere((g) => g['name'] == name);
          switch (mutation) {
            case 'kind':
              getter('answer')['kind'] = 'getter';
            case 'name':
              getter('answer')['name'] = 'renamed';
            case 'objectType':
              getter('token')['type'] = getter('answer')['type'];
            case 'callbackType':
              getter('genericIdentity')['type'] = getter('answer')['type'];
            case 'callbackResult':
              (getter('genericIdentity')['type'] as Map)['result'] = getter(
                'answer',
              )['type'];
          }
          expect(
            () {
              final diagnostics = FlaxCodegenManifestDiagnostics(
                'consumer/manifest.json',
              );
              final changed = FlaxCodegenManifest.parse(
                jsonEncode(json),
                diagnostics,
              );
              diagnostics.throwIfAny();
              FlaxCodegenManifestProjection(
                root: changed!,
                directDependencies: result.directDependencies,
                source: 'consumer/manifest.json',
              );
            },
            throwsA(isA<FlaxCodegenException>()),
            reason: mutation,
          );
        }
      },
    );

    test('current dependencies preserve generic aliases and nominal ownership', () async {
      final workspace = _tempWorkspace();
      final base = _writeHostPackage(
        workspace: workspace,
        name: 'base_pkg',
        libraries: {
          'base.dart': '''
class Item {
  Item(this.value);
  final String value;
}
typedef Items = List<Item>;
typedef GenericItems<T extends Item> = List<T>;
typedef GenericMapper = T Function<T extends Item>(T value);
typedef Converter<T extends Item> = T Function<U extends T>(U value);
''',
        },
        configs: {
          'flax_base.yaml': '''
format: 2
name: base
library: package:base_pkg/base.dart
jsPackage: '@base/values'
dartOutput: lib/base.g.dart
tsOutput: js/base.ts
typedefs: [Items, GenericItems, GenericMapper, Converter]
classes:
  Item:
    kind: object
    constructors:
      '': [value]
    getters: [value]
''',
        },
      );
      File(p.join(base.root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 2
capabilities: [bindings]
bindingNamespace: example.base
''');
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {
          'consumer.dart': '''
import 'package:base_pkg/base.dart';
typedef SelectedItems = Items;
typedef SelectedGenericItems<T extends Item> = GenericItems<T>;
typedef SelectedMapper = GenericMapper;
typedef SelectedConverter<T extends Item> = Converter<T>;
typedef BoundOnly<T extends Item> = int;
class Consumer {
  Consumer(this.items);
  final Items items;
}
''',
        },
        configs: {
          'flax_consumer.yaml': '''
format: 2
name: consumer
library: package:host_pkg/consumer.dart
jsPackage: '@host/consumer'
dartOutput: lib/consumer.g.dart
tsOutput: js/consumer.ts
imports: [base_pkg]
typedefs: [SelectedItems, SelectedGenericItems, SelectedMapper, SelectedConverter]
classes:
  Consumer:
    kind: object
    constructors:
      '': [items]
    getters: [items]
''',
        },
      );
      _writePackageConfig(
        workspace,
        {'base_pkg': base.root, 'host_pkg': host.root},
        javascriptDependencies: {
          'host_pkg': ['@base/values'],
        },
        providerJavascript: {'base_pkg': '@base/values'},
      );
      final owner = await FlaxCodegenPackagePipeline.validateConfig(
        base.configPath('flax_base.yaml'),
      );
      final manifestFile = File(
        p.join(base.root.path, 'bindings/manifest.json'),
      );
      manifestFile.writeAsStringSync(owner.manifest.encode());
      File(base.configPath('flax_base.yaml')).deleteSync();
      final before = _listing(base.root);
      final consumer = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_consumer.yaml'),
        processRunner: (executable, arguments) async =>
            fail('validation must not run processes'),
      );
      final dependency = consumer
          .directDependencies['base_pkg']!
          .modulesByModuleId
          .values
          .single;
      final module = consumer.localModels.single;
      const itemId = 'example.base/base#type:Item';
      expect(dependency.typedefs.map((alias) => alias.name), [
        'Items',
        'GenericItems',
        'GenericMapper',
        'Converter',
      ]);
      expect(dependency.typedefs.first.target.item!.id, itemId);
      expect(module.typedefs.first.target.item!.id, itemId);
      expect(
        module.typedefs.first.originatingUri,
        'package:host_pkg/consumer.dart',
      );
      for (final aliases in [dependency.typedefs, module.typedefs]) {
        final items = aliases[1];
        expect(items.typeParameters.single.bound.id, itemId);
        expect(items.typeParameters.single.defaultType!.id, itemId);
        expect(
          identical(
            items.typeParameters.single.genericIdentity,
            items.target.item!.declaration!.genericIdentity,
          ),
          isTrue,
        );
        expect(aliases[2].target.typeParameters.single.bound.id, itemId);
        final converter = aliases[3];
        expect(
          identical(
            converter.typeParameters.single.genericIdentity,
            converter.target.typeParameters.single.bound.genericIdentity,
          ),
          isTrue,
        );
      }
      expect(module.classes.map((type) => type.name), ['Consumer']);
      expect(module.classes.single.getters.single.type.item!.id, itemId);
      final identities = consumer.manifest.modules.single.model.identities;
      expect(
        identities.where((identity) => identity.wireId.value == itemId),
        hasLength(1),
      );
      expect(
        identities.any(
          (identity) => identity.sourceIdentity.name == 'SelectedItems',
        ),
        isFalse,
      );
      final emitter = FlaxCodegenBindingEmitter([dependency, module]);
      expect(
        emitter.typescript(dependency),
        contains('export type Items = DartList<Item>;'),
      );
      final ts = emitter.typescript(module);
      expect(ts, contains("from '@base/values'"));
      expect(
        ts,
        contains(RegExp(r'export type SelectedItems = DartList<\w+\.Item>;')),
      );
      expect(ts, contains('export type SelectedItemsInput = DartListInput<'));
      expect(
        ts,
        contains(
          RegExp(
            r'export type SelectedGenericItems<T extends \w+\.Item = \w+\.Item> = DartList<T>;',
          ),
        ),
      );
      expect(
        ts,
        contains(
          RegExp(
            r'export type SelectedMapper = _FlaxDartCallable<\(<T extends \w+\.Item',
          ),
        ),
      );
      expect(ts, contains('export type SelectedConverterInput<T extends '));
      expect(ts, contains('<U extends T'));
      expect(emitter.dart(module), contains(itemId));
      expect(_listing(base.root), before);
      expect(manifestFile.readAsStringSync(), owner.manifest.encode());

      // The only nominal reference is in the alias parameter, not its target.
      File(host.configPath('flax_consumer.yaml')).writeAsStringSync('''
format: 2
name: consumer
library: package:host_pkg/consumer.dart
jsPackage: '@host/consumer'
dartOutput: lib/consumer.g.dart
tsOutput: js/consumer.ts
imports: [base_pkg]
typedefs: [BoundOnly]
classes: {}
''');
      final bounds = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_consumer.yaml'),
        processRunner: (executable, arguments) async =>
            fail('validation must not run processes'),
      );
      final boundModule = bounds.localModels.single;
      expect(boundModule.classes, isEmpty);
      expect(boundModule.typedefs.single.target.kind, 'int');
      final boundIdentities = bounds.manifest.modules.single.model.identities;
      expect(boundIdentities, hasLength(1));
      expect(boundIdentities.single.wireId.value, itemId);
      final boundTs = FlaxCodegenBindingEmitter([dependency, boundModule])
          .typescript(boundModule);
      expect(boundTs, contains("from '@base/values'"));
      expect(
        boundTs,
        contains(
          RegExp(
            r'export type BoundOnly<T extends \w+\.Item = \w+\.Item> = number;',
          ),
        ),
      );
      expect(_listing(base.root), before);
    });

    test(
      'discovers multi-config packages without mutation or runner use',
      () async {
        final package = _tempPackage(
          name: 'host_pkg',
          libraries: {'host.dart': 'library;\n', 'widgets.dart': 'library;\n'},
          configs: {
            'flax_widgets.yaml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'widgets',
              library: 'package:host_pkg/widgets.dart',
              dartOutput: 'lib/widgets.g.dart',
              tsOutput: 'js/widgets.ts',
            ),
            'flax_host.yml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'host',
              library: 'package:host_pkg/host.dart',
              dartOutput: 'lib/host.g.dart',
              tsOutput: 'js/host.ts',
            ),
          },
        );
        final before = _listing(package.root);
        Future<ProcessResult> runner(
          String executable,
          List<String> arguments,
        ) {
          fail('validateConfig must not invoke the process runner');
        }

        final viaWidgets = await FlaxCodegenPackagePipeline.validateConfig(
          package.configPath('flax_widgets.yaml'),
          processRunner: runner,
        );
        final viaHost = await FlaxCodegenPackagePipeline.validateConfig(
          package.configPath('flax_host.yml'),
          processRunner: runner,
        );

        expect(viaWidgets.packageRoot, package.root.path);
        expect(viaWidgets.dartPackage, 'host_pkg');
        expect(viaWidgets.metadata.capabilities, ['bindings']);
        expect(viaWidgets.metadata.bindingNamespace, 'example.host');
        expect(viaWidgets.configPaths, [
          package.configPath('flax_host.yml'),
          package.configPath('flax_widgets.yaml'),
        ]);
        expect(
          [for (final module in viaWidgets.localModels) module.name],
          ['host', 'widgets'],
        );
        expect(viaHost.configPaths, viaWidgets.configPaths);
        expect(viaWidgets.directDependencies.keys, ['flax']);
        expect(viaWidgets.outputInventory, [
          'bindings/manifest.json',
          'js/host.ts',
          'js/widgets.ts',
          'lib/host.g.dart',
          'lib/widgets.g.dart',
        ]);
        expect(
          () => viaWidgets.configPaths.add('/flax_extra.yaml'),
          throwsUnsupportedError,
        );
        expect(
          () => viaWidgets.directDependencies.clear(),
          throwsUnsupportedError,
        );
        expect(() => viaWidgets.localModels.clear(), throwsUnsupportedError);
        expect(
          () => viaWidgets.outputInventory.add('x'),
          throwsUnsupportedError,
        );
        expect(_listing(package.root), before);
      },
    );

    test('locator negatives use exact stable FCG_PATH messages', () async {
      final package = _tempPackage(
        name: 'locate_pkg',
        libraries: {'ok.dart': 'library;\n'},
        configs: {
          'flax_ok.yaml': _minimalConfig(
            packageName: 'locate_pkg',
            name: 'ok',
            library: 'package:locate_pkg/ok.dart',
            dartOutput: 'lib/ok.g.dart',
            tsOutput: 'js/ok.ts',
          ),
        },
      );

      Future<void> expectPathFailure(String path, String message) async {
        try {
          await FlaxCodegenPackagePipeline.validateConfig(
            path,
            processRunner: (executable, arguments) async {
              fail('validateConfig must not invoke the process runner');
            },
          );
          fail('expected FlaxCodegenException for $path');
        } on FlaxCodegenException catch (error) {
          expect(error.diagnostics, hasLength(1));
          final diagnostic = error.diagnostics.single;
          expect(diagnostic.code, FlaxCodegenDiagnosticCode.path);
          expect(diagnostic.pointer, '');
          expect(diagnostic.line, 1);
          expect(diagnostic.column, 1);
          expect(diagnostic.message, message);
          expect(diagnostic.source, p.normalize(p.absolute(path)));
        }
      }

      final directoryPath = p.join(package.bindings.path, 'as-directory');
      Directory(directoryPath).createSync();
      await expectPathFailure(directoryPath, 'Expected a regular file.');

      final linkPath = p.join(package.bindings.path, 'flax_linked.yaml');
      Link(linkPath).createSync(package.configPath('flax_ok.yaml'));
      await expectPathFailure(linkPath, 'Symbolic links are not allowed.');

      final badExtension = p.join(package.bindings.path, 'Ok.YAML');
      File(badExtension).writeAsStringSync(
        _minimalConfig(
          packageName: 'locate_pkg',
          name: 'bad',
          library: 'package:locate_pkg/ok.dart',
          dartOutput: 'lib/bad.g.dart',
          tsOutput: 'js/bad.ts',
        ),
      );
      await expectPathFailure(
        badExtension,
        'Expected a .yaml or .yml binding config.',
      );

      final nested = p.join(package.bindings.path, 'nested', 'flax_deep.yaml');
      File(nested).parent.createSync(recursive: true);
      File(nested).writeAsStringSync(
        _minimalConfig(
          packageName: 'locate_pkg',
          name: 'nested',
          library: 'package:locate_pkg/ok.dart',
          dartOutput: 'lib/nested.g.dart',
          tsOutput: 'js/nested.ts',
        ),
      );
      await expectPathFailure(
        nested,
        'Binding config must be a direct child of bindings/.',
      );

      final outside = p.join(package.root.path, 'lib', 'flax_outside.yaml');
      File(outside).writeAsStringSync(
        _minimalConfig(
          packageName: 'locate_pkg',
          name: 'outside',
          library: 'package:locate_pkg/ok.dart',
          dartOutput: 'lib/outside.g.dart',
          tsOutput: 'js/outside.ts',
        ),
      );
      await expectPathFailure(
        outside,
        'Binding config must be inside the package bindings directory.',
      );

      final orphanRoot = _trustedTempRoot('flax-orphan-', outsidePackage: true);
      addTearDown(() {
        if (orphanRoot.existsSync()) {
          orphanRoot.deleteSync(recursive: true);
        }
      });
      final orphanBindings = Directory(p.join(orphanRoot.path, 'bindings'))
        ..createSync();
      final orphanConfig = File(p.join(orphanBindings.path, 'flax_orphan.yaml'))
        ..writeAsStringSync(
          _minimalConfig(
            packageName: 'orphan',
            name: 'orphan',
            library: 'package:orphan/orphan.dart',
            dartOutput: 'lib/orphan.g.dart',
            tsOutput: 'js/orphan.ts',
          ),
        );
      await expectPathFailure(
        orphanConfig.path,
        'Binding config is not inside a Dart package.',
      );

      final linkedBindingsRoot = _trustedTempRoot('flax-link-bindings-');
      addTearDown(() {
        if (linkedBindingsRoot.existsSync()) {
          linkedBindingsRoot.deleteSync(recursive: true);
        }
      });
      File(p.join(linkedBindingsRoot.path, 'pubspec.yaml'))
          .writeAsStringSync('''
name: link_bindings_pkg
''');
      final actualBindings = Directory(
        p.join(linkedBindingsRoot.path, 'actual_bindings'),
      )..createSync();
      File(p.join(actualBindings.path, 'flax_ok.yaml')).writeAsStringSync(
        _minimalConfig(
          packageName: 'link_bindings_pkg',
          name: 'ok',
          library: 'package:link_bindings_pkg/ok.dart',
          dartOutput: 'lib/ok.g.dart',
          tsOutput: 'js/ok.ts',
        ),
      );
      Link(p.join(linkedBindingsRoot.path, 'bindings'))
          .createSync(actualBindings.path);
      await expectPathFailure(
        p.join(linkedBindingsRoot.path, 'bindings', 'flax_ok.yaml'),
        'Symbolic links are not allowed.',
      );

      final trustedTemp = Directory(
        Directory.systemTemp.resolveSymbolicLinksSync(),
      );
      final realPackageRoot = trustedTemp.createTempSync('flax-real-pkg-');
      addTearDown(() {
        if (realPackageRoot.existsSync()) {
          realPackageRoot.deleteSync(recursive: true);
        }
      });
      File(p.join(realPackageRoot.path, 'pubspec.yaml')).writeAsStringSync('''
name: pkg_root_link_pkg
''');
      File(p.join(realPackageRoot.path, 'flax_package.yaml'))
          .writeAsStringSync('''
format: 2
capabilities:
  - bindings
bindingNamespace: example.host
''');
      Directory(p.join(realPackageRoot.path, 'lib')).createSync();
      File(p.join(realPackageRoot.path, 'lib', 'ok.dart'))
          .writeAsStringSync('library;\n');
      final realBindings = Directory(p.join(realPackageRoot.path, 'bindings'))
        ..createSync();
      File(p.join(realBindings.path, 'flax_ok.yaml')).writeAsStringSync(
        _minimalConfig(
          packageName: 'pkg_root_link_pkg',
          name: 'ok',
          library: 'package:pkg_root_link_pkg/ok.dart',
          dartOutput: 'lib/ok.g.dart',
          tsOutput: 'js/ok.ts',
        ),
      );
      final realTool = Directory(p.join(realPackageRoot.path, '.dart_tool'))
        ..createSync();
      File(p.join(realTool.path, 'package_config.json')).writeAsStringSync(
        _packageConfigJson({
          'pkg_root_link_pkg': realPackageRoot,
        }, packageConfigDir: realTool),
      );
      final packageRootLink = p.join(
        trustedTemp.path,
        'flax-pkg-root-link-${realPackageRoot.path.hashCode}',
      );
      Link(packageRootLink).createSync(realPackageRoot.path);
      addTearDown(() {
        final link = Link(packageRootLink);
        if (link.existsSync()) {
          link.deleteSync();
        }
      });
      await expectPathFailure(
        p.join(packageRootLink, 'bindings', 'flax_ok.yaml'),
        'Symbolic links are not allowed.',
      );

      final ancestorParent = trustedTemp.createTempSync('flax-ancestor-');
      addTearDown(() {
        if (ancestorParent.existsSync()) {
          ancestorParent.deleteSync(recursive: true);
        }
      });
      final actualAncestor = Directory(p.join(ancestorParent.path, 'actual'))
        ..createSync();
      final nestedPackage = Directory(p.join(actualAncestor.path, 'nested_pkg'))
        ..createSync();
      File(p.join(nestedPackage.path, 'pubspec.yaml')).writeAsStringSync('''
name: ancestor_link_pkg
''');
      File(p.join(nestedPackage.path, 'flax_package.yaml'))
          .writeAsStringSync('''
format: 2
capabilities:
  - bindings
bindingNamespace: example.host
''');
      Directory(p.join(nestedPackage.path, 'lib')).createSync();
      File(p.join(nestedPackage.path, 'lib', 'ok.dart'))
          .writeAsStringSync('library;\n');
      final nestedBindings = Directory(p.join(nestedPackage.path, 'bindings'))
        ..createSync();
      File(p.join(nestedBindings.path, 'flax_ok.yaml')).writeAsStringSync(
        _minimalConfig(
          packageName: 'ancestor_link_pkg',
          name: 'ok',
          library: 'package:ancestor_link_pkg/ok.dart',
          dartOutput: 'lib/ok.g.dart',
          tsOutput: 'js/ok.ts',
        ),
      );
      final nestedTool = Directory(p.join(nestedPackage.path, '.dart_tool'))
        ..createSync();
      File(p.join(nestedTool.path, 'package_config.json')).writeAsStringSync(
        _packageConfigJson({
          'ancestor_link_pkg': nestedPackage,
        }, packageConfigDir: nestedTool),
      );
      final ancestorLink = p.join(ancestorParent.path, 'alias');
      Link(ancestorLink).createSync(actualAncestor.path);
      await expectPathFailure(
        p.join(ancestorLink, 'nested_pkg', 'bindings', 'flax_ok.yaml'),
        'Symbolic links are not allowed.',
      );
    });

    test('aggregates independent strict diagnostics in sorted order', () async {
      final package = _tempPackage(
        name: 'broken_pkg',
        metadata: '''
format: 1
capabilities:
  - bindings
bindingNamespace: example.broken
''',
        libraries: {'a.dart': 'library;\n', 'b.dart': 'library;\n'},
        configs: {
          'flax_b.yaml': '''
format: 2
name: beta
library: package:broken_pkg/b.dart
jsPackage: '@broken/b'
dartOutput: lib/b.g.dart
tsOutput: js/b.ts
unknown: true
''',
          'flax_a.yaml': '''
format: 2
name: alpha
library: package:broken_pkg/a.dart
jsPackage: '@broken/a'
dartOutput: lib/a.g.dart
''',
        },
      );

      try {
        await FlaxCodegenPackagePipeline.validateConfig(
          package.configPath('flax_b.yaml'),
          processRunner: (executable, arguments) async {
            fail('validateConfig must not invoke the process runner');
          },
        );
        fail('expected FlaxCodegenException');
      } on FlaxCodegenException catch (error) {
        expect(
          [
            for (final diagnostic in error.diagnostics)
              (
                diagnostic.source,
                diagnostic.code.value,
                diagnostic.pointer,
                diagnostic.message,
              ),
          ],
          [
            (
              package.configPath('flax_a.yaml'),
              'FCG_MISSING_FIELD',
              '/tsOutput',
              'Missing field.',
            ),
            (
              package.configPath('flax_b.yaml'),
              'FCG_UNKNOWN_FIELD',
              '/unknown',
              'Unknown field.',
            ),
            (
              p.join(package.root.path, 'flax_package.yaml'),
              'FCG_INVALID_VALUE',
              '/format',
              'Expected 2.',
            ),
          ],
        );
      }
    });

    test(
      'rejects malformed or non-file package_config rootUri as FCG_RESOLUTION',
      () async {
        final package = _tempPackage(
          name: 'bad_root_uri_pkg',
          packageConfigContents: '''
{
  "configVersion": 2,
  "packages": [
    {
      "name": "bad_root_uri_pkg",
      "rootUri": "http://example.com/pkg",
      "packageUri": "lib/"
    }
  ]
}
''',
          libraries: {'ok.dart': 'library;\n'},
          configs: {
            'flax_ok.yaml': _minimalConfig(
              packageName: 'bad_root_uri_pkg',
              name: 'ok',
              library: 'package:bad_root_uri_pkg/ok.dart',
              dartOutput: 'lib/ok.g.dart',
              tsOutput: 'js/ok.ts',
            ),
          },
        );
        try {
          await FlaxCodegenPackagePipeline.validateConfig(
            package.configPath('flax_ok.yaml'),
            processRunner: (executable, arguments) async {
              fail('validateConfig must not invoke the process runner');
            },
          );
          fail('expected FlaxCodegenException');
        } on FlaxCodegenException catch (error) {
          expect(error.diagnostics, hasLength(1));
          expect(
            error.diagnostics.single.code,
            FlaxCodegenDiagnosticCode.resolution,
          );
          expect(error.diagnostics.single.message, 'Invalid package config.');
        }
      },
    );

    test('auto-owns same-package dependency-only nominal types without exporting them', () async {
      final workspace = _tempWorkspace();
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        libraries: {
          'api.dart': '''
class Internal {
  const Internal();
}

class Public {
  const Public();
  Internal get value => const Internal();
}
''',
        },
        configs: {
          'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/aggregate.ts
publicLibraries:
  package:host_pkg/api.dart:
    jsPackage: '@host/api'
    tsOutput: js/api/index.ts
classes:
  Public:
    kind: object
    constructors:
      '': []
    getters: [value]
''',
        },
      );
      _writePackageConfig(workspace, {'host_pkg': host.root});

      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_api.yaml'),
      );
      final modules = result.localModels;
      final module = modules.single;
      final resolved = result.resolvedPackage.modules.single;

      expect(
        module.classes.map((value) => value.name),
        containsAllInOrder(['Public', 'Internal']),
      );
      expect(module.types.map((value) => value.name), contains('Internal'));
      expect(
        resolved.owners.map((owner) => owner.sourceIdentity.name),
        containsAll(['Internal', 'Public']),
      );
      expect(module.publicLibraries.single.exports, ['Public']);
      expect(
        result.outputInventory.where((path) => path.contains('_Internal.ts')),
        isEmpty,
      );
      final emitter = FlaxCodegenBindingEmitter(modules);
      expect(emitter.dart(module), contains('Internal'));
      final typescript = emitter.typescriptOutputs(module);
      expect(typescript.keys, contains('js/api/_bindings/api.__internal.ts'));
      expect(typescript['js/api/index.ts'], isNot(contains('Internal')));
      expect(
        typescript['js/api/_bindings/api.__internal.ts'],
        contains('Internal'),
      );
    });

    test('closes dependency-only superclass and interface identities without exporting them', () async {
      final workspace = _tempWorkspace();
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        libraries: {
          'api.dart': '''
abstract interface class Face {}

class Grand {
  const Grand();
}

class Base extends Grand implements Face {
  const Base();
}

class Public {
  const Public();
  Base get value => const Base();
}
''',
        },
        configs: {
          'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/aggregate.ts
publicLibraries:
  package:host_pkg/api.dart:
    jsPackage: '@host/api'
    tsOutput: js/api/index.ts
classes:
  Public:
    kind: object
    constructors:
      '': []
    getters: [value]
''',
        },
      );
      _writePackageConfig(workspace, {'host_pkg': host.root});

      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_api.yaml'),
      );
      final modules = result.localModels;
      final module = modules.single;

      expect(
        module.classes.map((value) => value.name),
        containsAll(['Public', 'Base', 'Grand', 'Face']),
      );
      final base = module.classes.singleWhere((value) => value.name == 'Base');
      expect(
        base.superTypes.map((value) => value.name),
        containsAll(['Grand', 'Face']),
      );
      expect(module.publicLibraries.single.exports, ['Public']);
      final typescript = FlaxCodegenBindingEmitter(modules)
          .typescriptOutputs(module);
      expect(typescript['js/api/index.ts'], isNot(contains('Base')));
      expect(typescript['js/api/index.ts'], isNot(contains('Grand')));
      expect(typescript['js/api/index.ts'], isNot(contains('Face')));
    });

    test(
      'closes nested signature and generic-bound dependency-only types',
      () async {
        final workspace = _tempWorkspace();
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          libraries: {
            'api.dart': '''
class Internal {
  const Internal();
}

typedef PublicList<T extends Internal> = List<T>;

class Public {
  const Public();

  Future<List<Internal?>> load(
    Internal? Function(List<Internal?> values) callback,
    Map<String, Set<Internal>> values,
  ) async => const <Internal?>[];
}
''',
          },
          configs: {
            'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/aggregate.ts
publicLibraries:
  package:host_pkg/api.dart:
    jsPackage: '@host/api'
    tsOutput: js/api/index.ts
typedefs: [PublicList]
classes:
  Public:
    kind: object
    constructors:
      '': []
    instanceMethods:
      load: [callback, values]
''',
          },
        );
        _writePackageConfig(workspace, {'host_pkg': host.root});

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_api.yaml'),
        );
        final modules = result.localModels;
        final module = modules.single;
        final internal = module.classes.singleWhere(
          (value) => value.name == 'Internal',
        );
        final alias = module.typedefs.singleWhere(
          (value) => value.name == 'PublicList',
        );

        expect(internal.constructors, isEmpty);
        expect(alias.typeParameters.single.bound.kind, 'typeOnly');
        expect(alias.typeParameters.single.bound.id, isNull);
        expect(alias.typeParameters.single.bound.originatingName, 'Internal');
        expect(
          result.resolvedPackage.modules.single.owners.map(
            (owner) => owner.sourceIdentity.name,
          ),
          containsAll(['Internal', 'Public']),
        );
        expect(
          module.publicLibraries.single.exports,
          containsAll(['Public', 'PublicList']),
        );
        final typescript = FlaxCodegenBindingEmitter(modules)
            .typescriptOutputs(module);
        expect(
          typescript['js/api/index.ts'],
          isNot(contains('export { Internal')),
        );
        final internalTypescript =
            typescript['js/api/_bindings/api.__internal.ts']!;
        expect(internalTypescript, contains('export interface Internal'));
        expect(internalTypescript, contains('#type:Internal'));
      },
    );

    test('sibling signature cycles converge deterministically', () async {
      final workspace = _tempWorkspace();
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        libraries: {
          'a.dart': '''
import 'package:host_pkg/b.dart';

class A {
  const A();
  B? get b => null;
}
''',
          'b.dart': '''
import 'package:host_pkg/a.dart';

class B {
  const B();
  A? get a => null;
}
''',
        },
        configs: {
          'flax_a.yaml': '''
format: 2
name: a
library: package:host_pkg/a.dart
jsPackage: '@host/a'
dartOutput: lib/a.g.dart
tsOutput: js/a.ts
classes:
  A:
    kind: object
    constructors:
      '': []
    getters: [b]
''',
          'flax_b.yaml': '''
format: 2
name: b
library: package:host_pkg/b.dart
jsPackage: '@host/b'
dartOutput: lib/b.g.dart
tsOutput: js/b.ts
classes:
  B:
    kind: object
    constructors:
      '': []
    getters: [a]
''',
        },
      );
      _writePackageConfig(workspace, {'host_pkg': host.root});

      final viaA = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_a.yaml'),
      );
      final viaB = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_b.yaml'),
      );

      expect(viaA.manifest.encode(), viaB.manifest.encode());
      expect(viaA.outputInventory, viaB.outputInventory);
      expect(
        viaA.resolvedPackage.modules
            .expand((module) => module.owners)
            .map((owner) => owner.sourceIdentity.name)
            .toSet(),
        {'A', 'B'},
      );
    });

    test(
      'explicit selection promotes an auto-closable type to the public facade',
      () async {
        final workspace = _tempWorkspace();
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          libraries: {
            'api.dart': '''
class Internal {
  const Internal();
}

class Public {
  const Public();
  Internal get value => const Internal();
}
''',
          },
          configs: {
            'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/aggregate.ts
publicLibraries:
  package:host_pkg/api.dart:
    jsPackage: '@host/api'
    tsOutput: js/api/index.ts
types: [Internal]
classes:
  Public:
    kind: object
    constructors:
      '': []
    getters: [value]
''',
          },
        );
        _writePackageConfig(workspace, {'host_pkg': host.root});

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_api.yaml'),
        );

        expect(result.localModels.single.publicLibraries.single.exports, [
          'Internal',
          'Public',
        ]);
        expect(
          result.outputInventory.where((path) => path.contains('_Internal.ts')),
          hasLength(1),
        );
      },
    );

    test('reuses declared JS types and a direct Dart provider without a YAML import', () async {
      final workspace = _tempWorkspace();
      final base = _writeManifestPackage(
        workspace: workspace,
        name: 'base_pkg',
        namespace: 'example.base',
        moduleName: 'base',
        typeName: 'Item',
        imports: const [],
      );
      final unused = _writeManifestPackage(
        workspace: workspace,
        name: 'unused_pkg',
        namespace: 'example.unused',
        moduleName: 'unused',
        typeName: 'Unused',
        imports: const [],
      );
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: const ['base_pkg', 'unused_pkg'],
        libraries: {
          'api.dart': '''
import 'package:base_pkg/base.dart';

class Holder {
  Holder();
  Item get item => Item();
}
''',
        },
        configs: {
          'flax_api.yaml': '''
format: 2
name: api
library: package:host_pkg/api.dart
jsPackage: '@host/api'
dartOutput: lib/api.g.dart
tsOutput: js/api.ts
classes:
  Holder:
    kind: object
    constructors:
      '': []
    getters: [item]
''',
        },
      );
      _writePackageConfig(
        workspace,
        {
          'base_pkg': base.root,
          'host_pkg': host.root,
          'unused_pkg': unused.root,
        },
        javascriptDependencies: {
          'host_pkg': ['@base_pkg/base'],
        },
        providerJavascript: {'base_pkg': '@base_pkg/base'},
      );

      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_api.yaml'),
      );

      expect(result.directDependencies.keys.toList(), ['base_pkg', 'flax']);
      expect(result.manifest.imports, ['base_pkg', 'flax']);
      expect(
        result.localModels.single.types.map((value) => value.name),
        isNot(contains('Item')),
      );
      expect(
        result.directDependencies['base_pkg']!.authoritativeWireId(
          FlaxCodegenSourceIdentity(
            kind: FlaxCodegenDeclarationKind.type,
            originatingUri: 'package:base_pkg/base.dart',
            name: 'Item',
            origin: FlaxCodegenOriginState.resolved,
          ),
        ),
        isNotNull,
      );
    });

    test(
      'loads direct dependency projections with transitive modules',
      () async {
        final workspace = _tempWorkspace();
        final leaf = _writeManifestPackage(
          workspace: workspace,
          name: 'leaf_pkg',
          namespace: 'example.leaf',
          moduleName: 'core',
          typeName: 'Leaf',
          imports: const [],
        );
        final mid = _writeManifestPackage(
          workspace: workspace,
          name: 'mid_pkg',
          namespace: 'example.mid',
          moduleName: 'bridge',
          typeName: 'Mid',
          imports: const ['leaf_pkg'],
        );
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          dependencies: ['mid_pkg'],
          libraries: {'host.dart': 'library;\n', 'widgets.dart': 'library;\n'},
          configs: {
            'flax_widgets.yaml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'widgets',
              library: 'package:host_pkg/widgets.dart',
              dartOutput: 'lib/widgets.g.dart',
              tsOutput: 'js/widgets.ts',
              imports: const ['mid_pkg'],
            ),
            'flax_host.yml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'host',
              library: 'package:host_pkg/host.dart',
              dartOutput: 'lib/host.g.dart',
              tsOutput: 'js/host.ts',
              imports: const ['mid_pkg'],
            ),
          },
        );
        _writePackageConfig(
          workspace,
          {'host_pkg': host.root, 'mid_pkg': mid.root, 'leaf_pkg': leaf.root},
          javascriptDependencies: {
            'host_pkg': ['@mid_pkg/bridge'],
          },
          providerJavascript: {
            'mid_pkg': '@mid_pkg/bridge',
            'leaf_pkg': '@leaf_pkg/core',
          },
        );

        Future<ProcessResult> runner(
          String executable,
          List<String> arguments,
        ) {
          fail('validateConfig must not invoke the process runner');
        }

        final forward = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_widgets.yaml'),
          processRunner: runner,
        );
        final reversed = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_host.yml'),
          processRunner: runner,
        );

        expect(forward.directDependencies.keys.toList(), ['flax', 'mid_pkg']);
        expect(reversed.directDependencies.keys.toList(), ['flax', 'mid_pkg']);
        final midProjection = forward.directDependencies['mid_pkg']!;
        expect(midProjection.modulesByModuleId.keys.toList()..sort(), [
          'example.leaf/core',
          'example.mid/bridge',
        ]);
        expect(
          reversed.directDependencies['mid_pkg']!.modulesByModuleId.keys
              .toList()
            ..sort(),
          forward.directDependencies['mid_pkg']!.modulesByModuleId.keys.toList()
            ..sort(),
        );
      },
    );

    test(
      'parses multi-config ownership projection and host zero-entry module',
      () async {
        final workspace = _tempWorkspace();
        final leaf = _writeManifestPackage(
          workspace: workspace,
          name: 'leaf_pkg',
          namespace: 'example.leaf',
          moduleName: 'core',
          typeName: 'Leaf',
          imports: const [],
        );
        final mid = _writeManifestPackage(
          workspace: workspace,
          name: 'mid_pkg',
          namespace: 'example.mid',
          moduleName: 'bridge',
          typeName: 'Mid',
          imports: const ['leaf_pkg'],
        );
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          dependencies: ['mid_pkg'],
          libraries: {
            'host.dart': 'library;\n',
            'widgets.dart': '''
class Counter {
  int get value => 0;
}
''',
          },
          configs: {
            'flax_widgets.yaml': '''
format: 2
name: widgets
library: package:host_pkg/widgets.dart
jsPackage: '@host/widgets'
dartOutput: lib/widgets.g.dart
tsOutput: js/widgets.ts
imports:
  - mid_pkg
classes:
  Counter:
    kind: object
    getters:
      - value
''',
            'flax_host.yml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'host',
              library: 'package:host_pkg/host.dart',
              dartOutput: 'lib/host.g.dart',
              tsOutput: 'js/host.ts',
              imports: const ['mid_pkg'],
            ),
          },
        );
        _writePackageConfig(
          workspace,
          {'host_pkg': host.root, 'mid_pkg': mid.root, 'leaf_pkg': leaf.root},
          javascriptDependencies: {
            'host_pkg': ['@mid_pkg/bridge'],
          },
          providerJavascript: {
            'mid_pkg': '@mid_pkg/bridge',
            'leaf_pkg': '@leaf_pkg/core',
          },
        );
        final before = _listing(workspace);
        Future<ProcessResult> runner(
          String executable,
          List<String> arguments,
        ) {
          fail('validateConfig must not invoke the process runner');
        }

        final viaWidgets = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_widgets.yaml'),
          processRunner: runner,
        );
        final viaHost = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_host.yml'),
          processRunner: runner,
        );

        expect(
          [for (final module in viaWidgets.localModels) module.name],
          ['host', 'widgets'],
        );
        expect(viaWidgets.localModels[0].classes, isEmpty);
        expect(viaWidgets.localModels[0].moduleId, 'example.host/host');
        expect(viaWidgets.localModels[0].requiredCapabilities, [
          'call-layouts',
          'generic-member-views',
          'instance-checks',
          'native-navigation-objects',
          'native-widget-proxies',
        ]);
        expect(viaWidgets.localModels[1].moduleId, 'example.host/widgets');
        expect(viaWidgets.localModels[1].classes.single.name, 'Counter');
        expect(
          viaWidgets.localModels[1].classes.single.id,
          'example.host/widgets#type:Counter',
        );
        expect(
          viaWidgets.manifest.modules.map((module) => module.name).toList()
            ..sort(),
          ['host', 'widgets'],
        );
        expect(viaWidgets.projection.modulesByModuleId.keys.toList()..sort(), [
          'example.host/host',
          'example.host/widgets',
          'example.leaf/core',
          'example.mid/bridge',
        ]);
        expect(
          viaWidgets.resolvedPackage.modules
              .expand((module) => module.owners)
              .map((owner) => owner.wireId.value)
              .toList(),
          ['example.host/widgets#type:Counter'],
        );
        expect(viaHost.manifest.encode(), viaWidgets.manifest.encode());
        expect(viaHost.outputInventory, viaWidgets.outputInventory);
        expect(
          () => viaWidgets.localModels.add(viaWidgets.localModels.first),
          throwsUnsupportedError,
        );
        expect(_listing(workspace), before);
      },
    );

    test('imported Mid in unwalked type-parameter bound remaps and keeps typeLibraries', () async {
      final workspace = _tempWorkspace();
      final mid = _writeManifestPackage(
        workspace: workspace,
        name: 'mid_pkg',
        namespace: 'example.mid',
        moduleName: 'bridge',
        typeName: 'Mid',
        imports: const [],
      );
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['mid_pkg'],
        libraries: {
          'widgets.dart': '''
import 'package:mid_pkg/bridge.dart' show Mid;

class Box<T extends Mid> {
  Box.create(this.value);
  final T value;
}
''',
        },
        configs: {
          'flax_widgets.yaml': '''
format: 2
name: widgets
library: package:host_pkg/widgets.dart
additionalLibraries:
  - package:mid_pkg/bridge.dart
jsPackage: '@host/widgets'
dartOutput: lib/widgets.g.dart
tsOutput: js/widgets.ts
imports:
  - mid_pkg
classes:
  Box:
    kind: object
    typeArguments:
      - Mid
    constructors:
      create: [value]
''',
        },
      );
      _writePackageConfig(
        workspace,
        {'host_pkg': host.root, 'mid_pkg': mid.root},
        javascriptDependencies: {
          'host_pkg': ['@mid_pkg/bridge'],
        },
        providerJavascript: {'mid_pkg': '@mid_pkg/bridge'},
      );

      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_widgets.yaml'),
        processRunner: (executable, arguments) async {
          fail('validateConfig must not invoke the process runner');
        },
      );

      final box = result.localModels.single.classes.single;
      expect(box.typeParameters, hasLength(1));
      expect(box.typeParameters.single.bound.id, 'example.mid/bridge#type:Mid');
      expect(box.typeParameters.single.bound.name, 'Mid');
      expect(
        result.resolvedPackage.modules.single.references.map(
          (reference) => reference.ownerWireId.value,
        ),
        contains('example.mid/bridge#type:Mid'),
      );
      expect(
        result.localModels.single.typeLibraries['Mid'],
        'package:mid_pkg/bridge.dart',
      );
    });

    test(
      'dependency Manifest 12 preserves inherited raw Function callback flags',
      () async {
        final workspace = _tempWorkspace();
        final base = _writeBaseListenManifestPackage(workspace);
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          dependencies: ['base_pkg'],
          libraries: {
            'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
          },
          configs: {
            'flax_child.yaml': '''
format: 2
name: child
library: package:host_pkg/child.dart
additionalLibraries:
  - package:base_pkg/base.dart
jsPackage: '@host/child'
dartOutput: lib/child.g.dart
tsOutput: js/child.ts
imports:
  - base_pkg
classes:
  Child:
    kind: object
    constructors:
      create: []
''',
          },
        );
        _writePackageConfig(
          workspace,
          {'host_pkg': host.root, 'base_pkg': base.root},
          javascriptDependencies: {
            'host_pkg': ['@base_pkg/base'],
          },
          providerJavascript: {'base_pkg': '@base_pkg/base'},
        );

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_child.yaml'),
          processRunner: (executable, arguments) async {
            fail('validateConfig must not invoke the process runner');
          },
        );

        final child = result.localModels.single.classes.singleWhere(
          (type) => type.name == 'Child',
        );
        final listen = child.methods.singleWhere(
          (method) => method.name == 'listen',
        );
        expect(listen.instance, isTrue);
        final onError = listen.parameters.singleWhere(
          (parameter) => parameter.name == 'onError',
        );
        expect(onError.type.kind, 'callback');
        expect(onError.type.declaration, isNull);
        expect(onError.type.parameters, hasLength(2));
        expect(onError.type.parameters[0].type.kind, 'any');
        expect(onError.type.parameters[0].encodeKind, 'error');
        expect(onError.type.parameters[0].required, isTrue);
        expect(onError.type.parameters[0].scoped, isFalse);
        expect(onError.type.parameters[1].type.name, 'StackTrace');
        expect(onError.type.parameters[1].type.nullable, isTrue);
        expect(onError.type.parameters[1].required, isFalse);
        expect(onError.type.parameters[1].encodeKind, isNull);
        expect(onError.type.parameters[1].scoped, isTrue);
        expect(onError.type.result!.kind, 'void');

        final map = child.methods.singleWhere((method) => method.name == 'map');
        expect(map.instance, isTrue);
        expect(map.result.kind, 'int');
        final transform = map.parameters.singleWhere(
          (parameter) => parameter.name == 'transform',
        );
        expect(transform.type.kind, 'callback');
        expect(transform.type.declaration, isNotNull);
        expect(transform.type.parameters, hasLength(1));
        expect(transform.type.parameters.single.type.name, 'Token');
        expect(transform.type.parameters.single.scoped, isTrue);
        expect(transform.type.result!.kind, 'int');

        final dependencyModules = [
          for (final projection in result.directDependencies.values)
            ...projection.modulesByModuleId.values,
        ];
        final typescript = FlaxCodegenBindingEmitter([
          result.localModels.single,
          ...dependencyModules,
        ]).typescript(result.localModels.single);
        expect(
          typescript,
          contains("import type * as upstream0 from '@base_pkg/base';"),
        );
        expect(typescript, contains('upstream0.StackTrace | null'));
        expect(typescript, isNot(contains('null.StackTrace')));
        expect(
          typescript,
          contains(
            'map(transform: ((value: upstream0.Token) => number)): number;',
          ),
        );
      },
    );

    group('dependency Manifest 12 typeLibraries resolution', () {
      test('name not exported by declared public library is FCG_DEPENDENCY', () async {
        final workspace = _tempWorkspace();
        final base = _writeBaseMissingExportTypeLibraryPackage(workspace);
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          dependencies: ['base_pkg'],
          libraries: {
            'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
          },
          configs: {
            'flax_child.yaml': '''
format: 2
name: child
library: package:host_pkg/child.dart
additionalLibraries:
  - package:base_pkg/base.dart
jsPackage: '@host/child'
dartOutput: lib/child.g.dart
tsOutput: js/child.ts
imports:
  - base_pkg
classes:
  Child:
    kind: object
    constructors:
      create: []
''',
          },
        );
        _writePackageConfig(
          workspace,
          {'host_pkg': host.root, 'base_pkg': base.root},
          javascriptDependencies: {
            'host_pkg': ['@base_pkg/base'],
          },
          providerJavascript: {'base_pkg': '@base_pkg/base'},
        );

        try {
          await FlaxCodegenPackagePipeline.validateConfig(
            host.configPath('flax_child.yaml'),
            processRunner: (executable, arguments) async {
              fail('validateConfig must not invoke the process runner');
            },
          );
          fail('expected missing typeLibraries export');
        } on FlaxCodegenException catch (error) {
          expect(
            [
              for (final diagnostic in error.diagnostics)
                (diagnostic.code.value, diagnostic.message),
            ],
            [
              (
                'FCG_DEPENDENCY',
                'Unknown dependency type: Ghost in package:base_pkg/base.dart',
              ),
            ],
          );
        }
      });

      test('dart:core StackTrace declared in dependency typeLibraries remains positive', () async {
        final workspace = _tempWorkspace();
        final base = _writeBaseListenManifestPackage(workspace);
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          dependencies: ['base_pkg'],
          libraries: {
            'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
          },
          configs: {
            'flax_child.yaml': '''
format: 2
name: child
library: package:host_pkg/child.dart
additionalLibraries:
  - package:base_pkg/base.dart
jsPackage: '@host/child'
dartOutput: lib/child.g.dart
tsOutput: js/child.ts
imports:
  - base_pkg
classes:
  Child:
    kind: object
    constructors:
      create: []
''',
          },
        );
        _writePackageConfig(
          workspace,
          {'host_pkg': host.root, 'base_pkg': base.root},
          javascriptDependencies: {
            'host_pkg': ['@base_pkg/base'],
          },
          providerJavascript: {'base_pkg': '@base_pkg/base'},
        );

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_child.yaml'),
          processRunner: (executable, arguments) async {
            fail('validateConfig must not invoke the process runner');
          },
        );

        expect([
          for (final projection in result.directDependencies.values)
            for (final module in projection.modulesByModuleId.values)
              ...module.typeLibraries.entries.map(
                (entry) => '${entry.key}=${entry.value}',
              ),
        ], contains('StackTrace=dart:core'));
        final child = result.localModels.single.classes.singleWhere(
          (type) => type.name == 'Child',
        );
        final onError = child.methods
            .singleWhere((method) => method.name == 'listen')
            .parameters
            .singleWhere((parameter) => parameter.name == 'onError');
        expect(onError.type.parameters[1].type.name, 'StackTrace');
      });
    });

    test(
      'dependency Manifest 12 preserves inherited data callback Object leaves',
      () async {
        final workspace = _tempWorkspace();
        final base = _writeBaseDataCallbackManifestPackage(workspace);
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          dependencies: ['base_pkg'],
          libraries: {
            'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
          },
          configs: {
            'flax_child.yaml': '''
format: 2
name: child
library: package:host_pkg/child.dart
additionalLibraries:
  - package:base_pkg/base.dart
jsPackage: '@host/child'
dartOutput: lib/child.g.dart
tsOutput: js/child.ts
imports:
  - base_pkg
classes:
  Child:
    kind: object
    constructors:
      create: []
''',
          },
        );
        _writePackageConfig(
          workspace,
          {'host_pkg': host.root, 'base_pkg': base.root},
          javascriptDependencies: {
            'host_pkg': ['@base_pkg/base'],
          },
          providerJavascript: {'base_pkg': '@base_pkg/base'},
        );

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_child.yaml'),
          processRunner: (executable, arguments) async {
            fail('validateConfig must not invoke the process runner');
          },
        );

        final child = result.localModels.single.classes.singleWhere(
          (type) => type.name == 'Child',
        );
        final listen = child.methods.singleWhere(
          (method) => method.name == 'listen',
        );
        final cb = listen.parameters.singleWhere(
          (parameter) => parameter.name == 'cb',
        );
        expect(cb.type.kind, 'callback');
        expect(cb.type.declaration, isNull);
        expect(cb.type.parameters, hasLength(1));
        expect(cb.type.parameters.single.type.kind, 'data');
        expect(cb.type.parameters.single.type.nullable, isTrue);
      },
    );

    test('inherited data-marked raw Function keeps nested error and scoped metadata', () async {
      final workspace = _tempWorkspace();
      final base = _writeBaseDataErrorScopedListenPackage(workspace);
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {
          'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
        },
        configs: {
          'flax_child.yaml': '''
format: 2
name: child
library: package:host_pkg/child.dart
additionalLibraries:
  - package:base_pkg/base.dart
jsPackage: '@host/child'
dartOutput: lib/child.g.dart
tsOutput: js/child.ts
imports:
  - base_pkg
classes:
  Child:
    kind: object
    constructors:
      create: []
''',
        },
      );
      _writePackageConfig(
        workspace,
        {'host_pkg': host.root, 'base_pkg': base.root},
        javascriptDependencies: {
          'host_pkg': ['@base_pkg/base'],
        },
        providerJavascript: {'base_pkg': '@base_pkg/base'},
      );

      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_child.yaml'),
        processRunner: (executable, arguments) async {
          fail('validateConfig must not invoke the process runner');
        },
      );

      final child = result.localModels.single.classes.singleWhere(
        (type) => type.name == 'Child',
      );
      final cb = child.methods
          .singleWhere((method) => method.name == 'listen')
          .parameters
          .singleWhere((parameter) => parameter.name == 'cb');
      expect(cb.type.kind, 'callback');
      expect(cb.type.declaration, isNull);
      expect(cb.type.parameters, hasLength(2));
      expect(cb.type.parameters[0].type.kind, 'data');
      expect(cb.type.parameters[0].encodeKind, 'error');
      expect(cb.type.parameters[0].scoped, isFalse);
      expect(cb.type.parameters[1].type.name, 'StackTrace');
      expect(cb.type.parameters[1].encodeKind, isNull);
      expect(cb.type.parameters[1].scoped, isTrue);
    });

    test('freeze remaps Child.supertypes to dependency wire IDs in models and Dart', () async {
      final workspace = _tempWorkspace();
      final base = _writeBaseDataCallbackManifestPackage(workspace);
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {
          'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
        },
        configs: {
          'flax_child.yaml': '''
format: 2
name: child
library: package:host_pkg/child.dart
additionalLibraries:
  - package:base_pkg/base.dart
jsPackage: '@host/child'
dartOutput: lib/child.g.dart
tsOutput: js/child.ts
imports:
  - base_pkg
classes:
  Child:
    kind: object
    constructors:
      create: []
''',
        },
      );
      _writePackageConfig(
        workspace,
        {'host_pkg': host.root, 'base_pkg': base.root},
        javascriptDependencies: {
          'host_pkg': ['@base_pkg/base'],
        },
        providerJavascript: {'base_pkg': '@base_pkg/base'},
      );

      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_child.yaml'),
        processRunner: (executable, arguments) async {
          fail('validateConfig must not invoke the process runner');
        },
      );

      const baseWire = 'example.base/base#type:Base';
      const baseSource = 'package:base_pkg/base.dart::Base';
      final child = result.localModels.single.classes.singleWhere(
        (type) => type.name == 'Child',
      );
      expect(child.supertypes, contains(baseWire));
      expect(child.supertypes, isNot(contains(baseSource)));

      final dependencyModules = [
        for (final projection in result.directDependencies.values)
          ...projection.modulesByModuleId.values,
      ];
      final dart = FlaxCodegenBindingEmitter([
        result.localModels.single,
        ...dependencyModules,
      ]).dart(result.localModels.single);
      expect(dart, contains('FlaxObjectBinding('));
      expect(dart, contains(baseWire));
      expect(dart, isNot(contains(baseSource)));
    });

    test(
      'freeze remaps only id fields and leaves semantic strings unchanged',
      () async {
        const rawId = 'package:host_pkg/widgets.dart::Counter';
        final package = _tempPackage(
          name: 'host_pkg',
          libraries: {
            'widgets.dart':
                '''
class Counter {
  Counter.create({this.tag = r'$rawId'});
  final String tag;
}
''',
          },
          configs: {
            'flax_widgets.yaml':
                '''
format: 2
name: widgets
library: package:host_pkg/widgets.dart
jsPackage: '@host/widgets'
dartOutput: lib/widgets.g.dart
tsOutput: js/widgets.ts
classes:
  Counter:
    kind: object
    jsName: "$rawId"
    constructors:
      create: [tag]
''',
          },
        );

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          package.configPath('flax_widgets.yaml'),
          processRunner: (executable, arguments) async {
            fail('validateConfig must not invoke the process runner');
          },
        );
        final counter = result.localModels.single.classes.single;
        expect(counter.id, 'example.host/widgets#type:Counter');
        expect(counter.jsName, rawId);
        expect(
          counter.constructors.single.parameters.single.defaultCode,
          "'$rawId'",
        );
      },
    );

    test('localModels returns fresh deep snapshots', () async {
      final package = _tempPackage(
        name: 'host_pkg',
        libraries: {
          'widgets.dart': '''
class Counter {
  int get value => 0;
}
''',
        },
        configs: {
          'flax_widgets.yaml': '''
format: 2
name: widgets
library: package:host_pkg/widgets.dart
jsPackage: '@host/widgets'
dartOutput: lib/widgets.g.dart
tsOutput: js/widgets.ts
classes:
  Counter:
    kind: object
    getters:
      - value
''',
        },
      );
      final result = await FlaxCodegenPackagePipeline.validateConfig(
        package.configPath('flax_widgets.yaml'),
        processRunner: (executable, arguments) async {
          fail('validateConfig must not invoke the process runner');
        },
      );
      final first = result.localModels.single;
      first.classes.clear();
      final second = result.localModels.single;
      expect(second.classes, hasLength(1));
      expect(second.classes.single.name, 'Counter');
      expect(
        result.manifest.modules.single.model.module.classes.single.name,
        'Counter',
      );
    });

    test(
      'duplicate local module names fail with FCG_OWNERSHIP before merge',
      () async {
        final package = _tempPackage(
          name: 'host_pkg',
          libraries: {'a.dart': 'library;\n', 'b.dart': 'library;\n'},
          configs: {
            'flax_b.yaml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'same',
              library: 'package:host_pkg/b.dart',
              dartOutput: 'lib/b.g.dart',
              tsOutput: 'js/b.ts',
            ),
            'flax_a.yaml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'same',
              library: 'package:host_pkg/a.dart',
              dartOutput: 'lib/a.g.dart',
              tsOutput: 'js/a.ts',
            ),
          },
        );
        try {
          await FlaxCodegenPackagePipeline.validateConfig(
            package.configPath('flax_a.yaml'),
            processRunner: (executable, arguments) async {
              fail('validateConfig must not invoke the process runner');
            },
          );
          fail('expected duplicate module ownership failure');
        } on FlaxCodegenException catch (error) {
          expect(
            error.diagnostics.any(
              (diagnostic) =>
                  diagnostic.code == FlaxCodegenDiagnosticCode.ownership &&
                  diagnostic.message == 'Duplicate moduleId.',
            ),
            isTrue,
          );
        }
      },
    );

    test(
      'output collisions include reserved manifest path as FCG_OUTPUT',
      () async {
        final package = _tempPackage(
          name: 'collide_pkg',
          libraries: {'a.dart': 'library;\n', 'b.dart': 'library;\n'},
          configs: {
            'flax_b.yaml': _minimalConfig(
              packageName: 'collide_pkg',
              name: 'beta',
              library: 'package:collide_pkg/b.dart',
              dartOutput: 'bindings/manifest.json',
              tsOutput: 'js/b.ts',
            ),
            'flax_a.yaml': _minimalConfig(
              packageName: 'collide_pkg',
              name: 'alpha',
              library: 'package:collide_pkg/a.dart',
              dartOutput: 'lib/shared.g.dart',
              tsOutput: 'js/a.ts',
            ),
          },
        );
        // Force a second collision between alpha dart and a rewritten beta path
        // by also colliding alpha dart with a shared path via sibling edit:
        File(package.configPath('flax_a.yaml')).writeAsStringSync(
          _minimalConfig(
            packageName: 'collide_pkg',
            name: 'alpha',
            library: 'package:collide_pkg/a.dart',
            dartOutput: 'lib/shared.g.dart',
            tsOutput: 'js/shared.ts',
          ),
        );
        File(package.configPath('flax_b.yaml')).writeAsStringSync(
          _minimalConfig(
            packageName: 'collide_pkg',
            name: 'beta',
            library: 'package:collide_pkg/b.dart',
            dartOutput: 'lib/shared.g.dart',
            tsOutput: 'bindings/manifest.json',
          ),
        );

        try {
          await FlaxCodegenPackagePipeline.validateConfig(
            package.configPath('flax_a.yaml'),
            processRunner: (executable, arguments) async {
              fail('validateConfig must not invoke the process runner');
            },
          );
          fail('expected output collision');
        } on FlaxCodegenException catch (error) {
          expect(
            [
              for (final diagnostic in error.diagnostics)
                (diagnostic.code.value, diagnostic.message),
            ],
            [
              (
                'FCG_OUTPUT',
                "Duplicate generated output path 'bindings/manifest.json' "
                    '(beta:tsOutput and package:manifest).',
              ),
              (
                'FCG_OUTPUT',
                "Duplicate generated output path 'lib/shared.g.dart' "
                    '(alpha:dartOutput and beta:dartOutput).',
              ),
            ],
          );
        }
      },
    );

    test('dependency resolution negatives use exact diagnostics', () async {
      Future<ProcessResult> runner(String executable, List<String> arguments) {
        fail('validateConfig must not invoke the process runner');
      }

      final missingConfig = _tempPackage(
        name: 'missing_config_pkg',
        writePackageConfig: false,
        libraries: {'ok.dart': 'library;\n'},
        configs: {
          'flax_ok.yaml': _minimalConfig(
            packageName: 'missing_config_pkg',
            name: 'ok',
            library: 'package:missing_config_pkg/ok.dart',
            dartOutput: 'lib/ok.g.dart',
            tsOutput: 'js/ok.ts',
          ),
        },
      );
      try {
        await FlaxCodegenPackagePipeline.validateConfig(
          missingConfig.configPath('flax_ok.yaml'),
          processRunner: runner,
        );
        fail('expected missing package config');
      } on FlaxCodegenException catch (error) {
        expect(error.diagnostics.single.message, 'Missing package config.');
      }

      final malformed = _tempPackage(
        name: 'malformed_pkg',
        packageConfigContents: '{not-json',
        libraries: {'ok.dart': 'library;\n'},
        configs: {
          'flax_ok.yaml': _minimalConfig(
            packageName: 'malformed_pkg',
            name: 'ok',
            library: 'package:malformed_pkg/ok.dart',
            dartOutput: 'lib/ok.g.dart',
            tsOutput: 'js/ok.ts',
          ),
        },
      );
      try {
        await FlaxCodegenPackagePipeline.validateConfig(
          malformed.configPath('flax_ok.yaml'),
          processRunner: runner,
        );
        fail('expected malformed package config');
      } on FlaxCodegenException catch (error) {
        expect(
          error.diagnostics.single.message,
          'Invalid package config JSON.',
        );
      }

      final workspace = _tempWorkspace();
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        libraries: {'a.dart': 'library;\n', 'b.dart': 'library;\n'},
        configs: {
          'flax_a.yaml': _minimalConfig(
            packageName: 'host_pkg',
            name: 'alpha',
            library: 'package:host_pkg/a.dart',
            dartOutput: 'lib/a.g.dart',
            tsOutput: 'js/a.ts',
            imports: const ['missing_pkg'],
          ),
          'flax_b.yaml': _minimalConfig(
            packageName: 'host_pkg',
            name: 'beta',
            library: 'package:host_pkg/b.dart',
            dartOutput: 'lib/b.g.dart',
            tsOutput: 'js/b.ts',
            imports: const ['ghost_pkg'],
          ),
        },
      );
      _writePackageConfig(workspace, {'host_pkg': host.root});
      try {
        await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('flax_b.yaml'),
          processRunner: runner,
        );
        fail('expected unknown imports');
      } on FlaxCodegenException catch (error) {
        expect(
          [
            for (final diagnostic in error.diagnostics)
              (diagnostic.code.value, diagnostic.message),
          ],
          [
            ('FCG_RESOLUTION', "Unknown imported package: 'ghost_pkg'."),
            ('FCG_RESOLUTION', "Unknown imported package: 'missing_pkg'."),
          ],
        );
      }

      final mismatchWorkspace = _tempWorkspace();
      final mismatchDep = Directory(
        p.join(mismatchWorkspace.path, 'mismatch_pkg'),
      )..createSync();
      Directory(p.join(mismatchDep.path, 'bindings')).createSync();
      File(p.join(mismatchDep.path, 'bindings', 'manifest.json'))
          .writeAsStringSync(
            _manifestPackage(
              package: 'other_pkg',
              namespace: 'example.other',
              moduleName: 'core',
              typeName: 'Other',
              imports: const [],
            ).encode(),
          );
      final mismatchHost = _writeHostPackage(
        workspace: mismatchWorkspace,
        name: 'host_pkg',
        libraries: {'ok.dart': 'library;\n'},
        configs: {
          'flax_ok.yaml': _minimalConfig(
            packageName: 'host_pkg',
            name: 'ok',
            library: 'package:host_pkg/ok.dart',
            dartOutput: 'lib/ok.g.dart',
            tsOutput: 'js/ok.ts',
            imports: const ['mismatch_pkg'],
          ),
        },
      );
      _writePackageConfig(mismatchWorkspace, {
        'host_pkg': mismatchHost.root,
        'mismatch_pkg': mismatchDep,
      });
      try {
        await FlaxCodegenPackagePipeline.validateConfig(
          mismatchHost.configPath('flax_ok.yaml'),
          processRunner: runner,
        );
        fail('expected package mismatch');
      } on FlaxCodegenException catch (error) {
        expect(
          error.diagnostics.single.message,
          "Binding manifest package mismatch: 'mismatch_pkg'.",
        );
      }

      final missingManifestWorkspace = _tempWorkspace();
      final emptyDep = Directory(
        p.join(missingManifestWorkspace.path, 'empty_pkg'),
      )..createSync();
      Directory(p.join(emptyDep.path, 'bindings')).createSync();
      final missingHost = _writeHostPackage(
        workspace: missingManifestWorkspace,
        name: 'host_pkg',
        libraries: {'ok.dart': 'library;\n'},
        configs: {
          'flax_ok.yaml': _minimalConfig(
            packageName: 'host_pkg',
            name: 'ok',
            library: 'package:host_pkg/ok.dart',
            dartOutput: 'lib/ok.g.dart',
            tsOutput: 'js/ok.ts',
            imports: const ['empty_pkg'],
          ),
        },
      );
      _writePackageConfig(missingManifestWorkspace, {
        'host_pkg': missingHost.root,
        'empty_pkg': emptyDep,
      });
      try {
        await FlaxCodegenPackagePipeline.validateConfig(
          missingHost.configPath('flax_ok.yaml'),
          processRunner: runner,
        );
        fail('expected missing manifest');
      } on FlaxCodegenException catch (error) {
        expect(error.diagnostics.single.message, 'Cannot read file.');
      }
    });
  });

  group('FlaxCodegenPackagePipeline.checkConfig', () {
    test(
      'identical generated package succeeds without mutating package state',
      () async {
        final prepared = await _prepareCheckPackage();
        final before = _packageFilesystemSnapshot(prepared.root);
        final calls = <List<String>>[];

        await FlaxCodegenPackagePipeline.checkConfig(
          prepared.configPath,
          processRunner: (executable, arguments) async {
            calls.add([executable, ...arguments]);
            expect(executable, Platform.resolvedExecutable);
            expect(arguments, ['format', '--page-width=80', arguments[2]]);
            final staged = p.normalize(arguments[2]);
            expect(
              p.isWithin(prepared.root.path, staged),
              isFalse,
              reason: 'Dart format staging must stay outside the package',
            );
            expect(File(staged).existsSync(), isTrue);
            return ProcessResult(0, 0, '', '');
          },
        );

        _expectPackageFilesystemUnchanged(prepared.root, before: before);
        for (final call in calls) {
          expect(call[0], Platform.resolvedExecutable);
          expect(call[1], 'format');
          expect(call[2], '--page-width=80');
          expect(p.isWithin(prepared.root.path, p.normalize(call[3])), isFalse);
        }
      },
    );

    test('dependency-backed Child package succeeds when emitted with flattened deps', () async {
      final workspace = _tempWorkspace();
      final base = _writeBaseListenManifestPackage(workspace);
      final host = _writeHostPackage(
        workspace: workspace,
        name: 'host_pkg',
        dependencies: ['base_pkg'],
        libraries: {
          'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
        },
        configs: {
          'flax_child.yaml': '''
format: 2
name: child
library: package:host_pkg/child.dart
additionalLibraries:
  - package:base_pkg/base.dart
jsPackage: '@host/child'
dartOutput: lib/child.g.dart
tsOutput: js/child.ts
imports:
  - base_pkg
classes:
  Child:
    kind: object
    constructors:
      create: []
''',
        },
      );
      _writePackageConfig(
        workspace,
        {'host_pkg': host.root, 'base_pkg': base.root},
        javascriptDependencies: {
          'host_pkg': ['@base_pkg/base'],
        },
        providerJavascript: {'base_pkg': '@base_pkg/base'},
      );

      final validation = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('flax_child.yaml'),
        processRunner: (executable, arguments) async {
          fail('validateConfig must not invoke the process runner');
        },
      );
      final dependencyModules = [
        for (final projection in validation.directDependencies.values)
          ...projection.modulesByModuleId.values,
      ];
      expect(dependencyModules, isNotEmpty);
      final contextModules = [...validation.localModels, ...dependencyModules];
      expect(
        () =>
            FlaxCodegenBindingEmitter(validation.localModels)
                .typescript(validation.localModels.single),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'missing dependency',
            'Missing provider for Base',
          ),
        ),
      );
      final withDepsTs = FlaxCodegenBindingEmitter(contextModules)
          .typescript(validation.localModels.single);
      expect(withDepsTs, contains('upstream0.StackTrace'));

      Future<ProcessResult> runner(
        String executable,
        List<String> arguments,
      ) async {
        expect(executable, Platform.resolvedExecutable);
        expect(arguments, ['format', '--page-width=80', arguments[2]]);
        expect(p.isWithin(host.root.path, p.normalize(arguments[2])), isFalse);
        return ProcessResult(0, 0, '', '');
      }

      final temporary = Directory.systemTemp.createTempSync('flax-check-dep-');
      try {
        final module = validation.localModels.single;
        final emitter = FlaxCodegenBindingEmitter(
          contextModules,
          bindingEntrypoints: {
            for (final provider in base.manifest.modules)
              provider.moduleId.value: provider.dartLibrary!,
          },
        );
        final staged = File(p.join(temporary.path, 'child.dart'));
        staged.writeAsStringSync(emitter.dart(module));
        expect(
          staged.readAsStringSync(),
          contains('package:base_pkg/base.g.dart'),
        );
        final format = await runner(Platform.resolvedExecutable, [
          'format',
          '--page-width=80',
          staged.path,
        ]);
        expect(format.exitCode, 0);
        File(p.join(host.root.path, module.dartOutput))
          ..parent.createSync(recursive: true)
          ..writeAsStringSync(staged.readAsStringSync());
        File(p.join(host.root.path, module.tsOutput))
          ..parent.createSync(recursive: true)
          ..writeAsStringSync(withDepsTs);
        File(p.join(host.root.path, 'bindings', 'manifest.json'))
            .writeAsStringSync(validation.manifest.encode());
      } finally {
        temporary.deleteSync(recursive: true);
      }

      final before = _packageFilesystemSnapshot(host.root);
      await FlaxCodegenPackagePipeline.checkConfig(
        host.configPath('flax_child.yaml'),
        processRunner: runner,
      );
      _expectPackageFilesystemUnchanged(host.root, before: before);
    });

    test('aggregates missing, stale, orphan, and non-regular FCG_OUTPUT diagnostics', () async {
      final prepared = await _prepareCheckPackage();
      final missingDart = p.join(prepared.root.path, prepared.dartRelative);
      final staleTs = p.join(prepared.root.path, prepared.tsRelative);
      final symlinkDart = p.join(
        prepared.root.path,
        prepared.secondDartRelative,
      );
      final directoryTs = p.join(prepared.root.path, 'js', 'extra.ts');
      final manifestPath = p.join(
        prepared.root.path,
        'bindings',
        'manifest.json',
      );
      final orphanNormal = p.join(prepared.root.path, 'lib', 'orphan.g.dart');
      final orphanHost = p.join(
        prepared.root.path,
        'lib',
        'orphan_host.g.dart',
      );

      File(missingDart).deleteSync();
      File(staleTs).writeAsStringSync(
        '$_normalGeneratedHeader\n// stale typescript body\n',
      );
      File(manifestPath).writeAsStringSync('{ "stale": true }\n');
      File(orphanNormal)
          .writeAsStringSync('$_normalGeneratedHeader\nexport {};\n');
      File(orphanHost)
          .writeAsStringSync('$_hostGeneratedHeader\nmixin Orphan {}\n');
      final linkTarget = File(
        p.join(prepared.root.path, 'lib', 'link_target.dart'),
      )..writeAsStringSync('library;\n');
      File(symlinkDart).deleteSync();
      Link(symlinkDart).createSync(linkTarget.path);
      File(directoryTs).deleteSync();
      Directory(directoryTs).createSync();

      final before = _packageFilesystemSnapshot(prepared.root);
      final calls = <List<String>>[];
      FlaxCodegenException? caught;
      try {
        await FlaxCodegenPackagePipeline.checkConfig(
          prepared.configPath,
          processRunner: (executable, arguments) async {
            calls.add([executable, ...arguments]);
            expect(executable, Platform.resolvedExecutable);
            expect(arguments, ['format', '--page-width=80', arguments[2]]);
            expect(
              p.isWithin(prepared.root.path, p.normalize(arguments[2])),
              isFalse,
            );
            return ProcessResult(0, 0, '', '');
          },
        );
        fail('expected aggregated FCG_OUTPUT failure');
      } on FlaxCodegenException catch (error) {
        caught = error;
      }

      expect(caught, isNotNull);
      final diagnostics = caught.diagnostics;
      expect(diagnostics, isNotEmpty);
      expect(
        diagnostics.every(
          (diagnostic) => diagnostic.code == FlaxCodegenDiagnosticCode.output,
        ),
        isTrue,
      );
      final relatives = [
        for (final diagnostic in diagnostics)
          p.normalize(p.relative(diagnostic.source, from: prepared.root.path)),
      ];
      expect(relatives, orderedEquals(List.of(relatives)..sort()));
      expect(
        relatives,
        containsAll([
          p.normalize(prepared.dartRelative),
          p.normalize(prepared.tsRelative),
          p.normalize('js/extra.ts'),
          p.normalize('bindings/manifest.json'),
          p.normalize('lib/orphan.g.dart'),
          p.normalize('lib/orphan_host.g.dart'),
          p.normalize(prepared.secondDartRelative),
        ]),
      );
      expect(
        diagnostics
            .singleWhere(
              (diagnostic) =>
                  p.normalize(
                    p.relative(diagnostic.source, from: prepared.root.path),
                  ) ==
                  p.normalize('js/extra.ts'),
            )
            .message,
        'Generated output is not a regular file.',
      );
      _expectPackageFilesystemUnchanged(prepared.root, before: before);
      for (final call in calls) {
        expect(p.isWithin(prepared.root.path, p.normalize(call[3])), isFalse);
      }
    });

    test('bindings/manifest.json missing and stale report exact FCG_OUTPUT messages', () async {
      for (final mode in const ['missing', 'stale']) {
        final prepared = await _prepareCheckPackage();
        final manifestPath = p.join(
          prepared.root.path,
          'bindings',
          'manifest.json',
        );
        final expectedMessage = mode == 'missing'
            ? 'Missing generated output.'
            : 'Generated output is stale.';
        if (mode == 'missing') {
          File(manifestPath).deleteSync();
        } else {
          File(manifestPath).writeAsStringSync('{ "stale": true }\n');
        }
        final before = _packageFilesystemSnapshot(prepared.root);
        FlaxCodegenException? caught;
        try {
          await FlaxCodegenPackagePipeline.checkConfig(
            prepared.configPath,
            processRunner: (executable, arguments) async {
              expect(
                p.isWithin(prepared.root.path, p.normalize(arguments[2])),
                isFalse,
              );
              return ProcessResult(0, 0, '', '');
            },
          );
          fail('expected FCG_OUTPUT for manifest $mode');
        } on FlaxCodegenException catch (error) {
          caught = error;
        }
        expect(caught, isNotNull);
        final diagnostics = caught.diagnostics;
        expect(
          diagnostics.every(
            (diagnostic) => diagnostic.code == FlaxCodegenDiagnosticCode.output,
          ),
          isTrue,
        );
        final relatives = [
          for (final diagnostic in diagnostics)
            p.normalize(
              p.relative(diagnostic.source, from: prepared.root.path),
            ),
        ];
        expect(relatives, orderedEquals(List.of(relatives)..sort()));
        expect(relatives, contains(p.normalize('bindings/manifest.json')));
        expect(
          diagnostics
              .singleWhere(
                (diagnostic) =>
                    p.normalize(
                      p.relative(diagnostic.source, from: prepared.root.path),
                    ) ==
                    p.normalize('bindings/manifest.json'),
              )
              .message,
          expectedMessage,
        );
        _expectPackageFilesystemUnchanged(prepared.root, before: before);
      }
    });

    test(
      'near-header and manual dart/ts files are ignored by orphan discovery',
      () async {
        final prepared = await _prepareCheckPackage();
        final nearHeader =
            File(p.join(prepared.root.path, 'lib', 'near_header.dart'))
              ..writeAsStringSync(
                '// GENERATED CODE. Selected public API subset; please edit.\n'
                '// Regenerate with dart run melos run bindings:generate.\n'
                'library near;\n',
              );
        final manual = File(p.join(prepared.root.path, 'lib', 'manual.dart'))
          ..writeAsStringSync('library manual;\n');
        final manualTs = File(p.join(prepared.root.path, 'js', 'manual.ts'))
          ..writeAsStringSync('export const manual = 1;\n');
        final before = _packageFilesystemSnapshot(prepared.root);

        await FlaxCodegenPackagePipeline.checkConfig(
          prepared.configPath,
          processRunner: (executable, arguments) async {
            expect(
              p.isWithin(prepared.root.path, p.normalize(arguments[2])),
              isFalse,
            );
            return ProcessResult(0, 0, '', '');
          },
        );

        expect(nearHeader.existsSync(), isTrue);
        expect(manual.existsSync(), isTrue);
        expect(manualTs.existsSync(), isTrue);
        _expectPackageFilesystemUnchanged(prepared.root, before: before);
      },
    );

    test(
      'orphan discovery diagnostic order is stable under reversed creation',
      () async {
        Future<List<String>> orphanSources(List<String> createOrder) async {
          final prepared = await _prepareCheckPackage();
          final paths = {
            'a': p.join(prepared.root.path, 'lib', 'orphan_a.g.dart'),
            'b': p.join(prepared.root.path, 'lib', 'orphan_b.g.dart'),
          };
          for (final key in createOrder) {
            File(paths[key]!).writeAsStringSync(
              '$_normalGeneratedHeader\nexport const $key = 1;\n',
            );
          }
          final before = _packageFilesystemSnapshot(prepared.root);
          try {
            await FlaxCodegenPackagePipeline.checkConfig(
              prepared.configPath,
              processRunner: (executable, arguments) async {
                expect(
                  p.isWithin(prepared.root.path, p.normalize(arguments[2])),
                  isFalse,
                );
                return ProcessResult(0, 0, '', '');
              },
            );
            fail('expected orphan FCG_OUTPUT failure');
          } on FlaxCodegenException catch (error) {
            _expectPackageFilesystemUnchanged(prepared.root, before: before);
            // Basenames: each call uses a fresh temp package root.
            return [
              for (final diagnostic in error.diagnostics)
                if (diagnostic.source == p.normalize(paths['a']!) ||
                    diagnostic.source == p.normalize(paths['b']!))
                  p.basename(diagnostic.source),
            ];
          }
        }

        final forward = await orphanSources(const ['a', 'b']);
        final reversed = await orphanSources(const ['b', 'a']);
        expect(forward, isNotEmpty);
        expect(forward, orderedEquals(List.of(forward)..sort()));
        expect(reversed, forward);
      },
    );

    test('ancestor symlink on expected output is FCG_OUTPUT without reading through', () async {
      final prepared = await _prepareCheckPackage();
      final outside = _trustedTempRoot('flax-check-outside-');
      addTearDown(() {
        if (outside.existsSync()) {
          outside.deleteSync(recursive: true);
        }
      });
      File(p.join(outside.path, 'widgets.ts')).writeAsBytesSync(
        File(p.join(prepared.root.path, prepared.tsRelative)).readAsBytesSync(),
      );
      File(p.join(outside.path, 'extra.ts')).writeAsBytesSync(
        File(p.join(prepared.root.path, 'js', 'extra.ts')).readAsBytesSync(),
      );
      File(p.join(outside.path, 'secret.bin')).writeAsBytesSync(const [0xff]);

      Directory(p.join(prepared.root.path, 'js')).deleteSync(recursive: true);
      Link(p.join(prepared.root.path, 'js')).createSync(outside.path);

      final before = _packageFilesystemSnapshot(prepared.root);
      FlaxCodegenException? caught;
      try {
        await FlaxCodegenPackagePipeline.checkConfig(
          prepared.configPath,
          processRunner: (executable, arguments) async {
            expect(
              p.isWithin(prepared.root.path, p.normalize(arguments[2])),
              isFalse,
            );
            return ProcessResult(0, 0, '', '');
          },
        );
        fail('expected FCG_OUTPUT for ancestor symlink');
      } on FlaxCodegenException catch (error) {
        caught = error;
      }

      expect(caught, isNotNull);
      final diagnostics = caught.diagnostics;
      expect(
        diagnostics.every(
          (diagnostic) => diagnostic.code == FlaxCodegenDiagnosticCode.output,
        ),
        isTrue,
      );
      final relatives = [
        for (final diagnostic in diagnostics)
          p.normalize(p.relative(diagnostic.source, from: prepared.root.path)),
      ];
      expect(relatives, orderedEquals(List.of(relatives)..sort()));
      expect(
        relatives,
        containsAll([
          p.normalize(prepared.tsRelative),
          p.normalize('js/extra.ts'),
        ]),
      );
      expect(
        diagnostics
            .where(
              (diagnostic) =>
                  p.normalize(
                    p.relative(diagnostic.source, from: prepared.root.path),
                  ) ==
                  p.normalize(prepared.tsRelative),
            )
            .every(
              (diagnostic) =>
                  diagnostic.message == 'Symbolic links are not allowed.',
            ),
        isTrue,
      );
      _expectPackageFilesystemUnchanged(prepared.root, before: before);
    });

    test(
      'invalid UTF-8 dart/ts does not throw during orphan discovery',
      () async {
        final prepared = await _prepareCheckPackage();
        File(p.join(prepared.root.path, 'lib', 'manual_invalid.dart'))
            .writeAsBytesSync(const [0xff, 0xfe, 0x00, 0x01]);
        File(p.join(prepared.root.path, 'js', 'manual_invalid.ts'))
            .writeAsBytesSync(const [0x80, 0x81, 0x82]);
        final before = _packageFilesystemSnapshot(prepared.root);

        await FlaxCodegenPackagePipeline.checkConfig(
          prepared.configPath,
          processRunner: (executable, arguments) async {
            expect(
              p.isWithin(prepared.root.path, p.normalize(arguments[2])),
              isFalse,
            );
            return ProcessResult(0, 0, '', '');
          },
        );

        _expectPackageFilesystemUnchanged(prepared.root, before: before);
      },
    );

    test(
      'nested lib/build exact-header orphan is reported; root build is skipped',
      () async {
        final prepared = await _prepareCheckPackage();
        final nestedOrphan = p.join(
          prepared.root.path,
          'lib',
          'build',
          'removed.g.dart',
        );
        Directory(p.join(prepared.root.path, 'lib', 'build'))
            .createSync(recursive: true);
        File(nestedOrphan)
            .writeAsStringSync('$_normalGeneratedHeader\nexport {};\n');
        Directory(p.join(prepared.root.path, 'build')).createSync();
        File(p.join(prepared.root.path, 'build', 'skipped.g.dart'))
            .writeAsStringSync('$_normalGeneratedHeader\nexport {};\n');

        final before = _packageFilesystemSnapshot(prepared.root);
        FlaxCodegenException? caught;
        try {
          await FlaxCodegenPackagePipeline.checkConfig(
            prepared.configPath,
            processRunner: (executable, arguments) async {
              expect(
                p.isWithin(prepared.root.path, p.normalize(arguments[2])),
                isFalse,
              );
              return ProcessResult(0, 0, '', '');
            },
          );
          fail('expected nested lib/build orphan FCG_OUTPUT');
        } on FlaxCodegenException catch (error) {
          caught = error;
        }

        expect(caught, isNotNull);
        final relatives = [
          for (final diagnostic in caught.diagnostics)
            p.normalize(
              p.relative(diagnostic.source, from: prepared.root.path),
            ),
        ];
        expect(relatives, orderedEquals(List.of(relatives)..sort()));
        expect(relatives, contains(p.normalize('lib/build/removed.g.dart')));
        expect(relatives, isNot(contains(p.normalize('build/skipped.g.dart'))));
        expect(
          caught.diagnostics
              .singleWhere(
                (diagnostic) =>
                    p.normalize(
                      p.relative(diagnostic.source, from: prepared.root.path),
                    ) ==
                    p.normalize('lib/build/removed.g.dart'),
              )
              .message,
          'Orphan generated output.',
        );
        _expectPackageFilesystemUnchanged(prepared.root, before: before);
      },
    );
  });

  group('FlaxCodegenPackagePipeline.generateConfig', () {
    test(
      'default app entries can be renamed without changing wire IDs',
      () async {
        final package = _tempPackage(
          name: 'scope_pkg',
          libraries: {
            'api.dart': '''
class Item { Item(); }
class Store { Store(); Item get item => Item(); }
''',
          },
          configs: {
            'flax_public.yaml': '''
format: 2
name: public
library: package:scope_pkg/api.dart
dartOutput: lib/public.g.dart
tsOutput: js/public/bindings.ts
classes:
  Item:
    kind: object
    constructors: {'': []}
''',
            'flax_internal.yaml': '''
format: 2
name: internal
library: package:scope_pkg/api.dart
dartOutput: lib/internal.g.dart
tsOutput: js/internal/bindings.ts
classes:
  Store:
    kind: object
    constructors: {'': []}
    getters: [item]
''',
          },
        );
        final configPath = package.configPath('flax_public.yaml');
        final generated = await FlaxCodegenPackagePipeline.generateConfig(
          configPath,
        );
        expect(
          generated.localModels.map((module) => module.jsPackage),
          unorderedEquals(['@flax/app/public', '@flax/app/internal']),
        );
        final source = File(
          p.join(package.root.path, 'js/internal/bindings.ts'),
        );
        expect(source.readAsStringSync(), contains("from '@flax/app/public'"));
        final originalIds = generated.localModels
            .expand((module) => module.classes.map((type) => type.id))
            .toList();
        final metadata = File(p.join(package.root.path, 'flax_package.yaml'));
        metadata.writeAsStringSync('''
${metadata.readAsStringSync()}javascript:
  types: '@example/sdk'
  package: '@example/sdk-runtime'
''');
        final renamed = await FlaxCodegenPackagePipeline.generateConfig(
          configPath,
        );
        expect(
          renamed.localModels.map((module) => module.jsPackage),
          unorderedEquals(['@example/sdk/public', '@example/sdk/internal']),
        );
        expect(
          renamed.localModels.expand(
            (module) => module.classes.map((type) => type.id),
          ),
          originalIds,
        );
        expect(
          source.readAsStringSync(),
          contains("from '@example/sdk/public'"),
        );
        expect(source.readAsStringSync(), isNot(contains('@flax/app')));
        final internal = File(package.configPath('flax_internal.yaml'));
        internal.writeAsStringSync(
          "${internal.readAsStringSync()}jsPackage: '@custom/internal'\n",
        );
        final overridden = await FlaxCodegenPackagePipeline.generateConfig(
          configPath,
        );
        expect(
          overridden.localModels.map((module) => module.jsPackage),
          unorderedEquals(['@example/sdk/public', '@custom/internal']),
        );
        await FlaxCodegenPackagePipeline.checkConfig(configPath);
      },
    );

    Future<ProcessResult> formatRunner(
      String executable,
      List<String> arguments, {
      required String packageRoot,
    }) async {
      expect(executable, Platform.resolvedExecutable);
      expect(arguments, ['format', '--page-width=80', arguments[2]]);
      expect(p.isWithin(packageRoot, p.normalize(arguments[2])), isFalse);
      return ProcessResult(0, 0, '', '');
    }

    test(
      'public library update removes orphaned chunks and rolls back deletes',
      () async {
        String config({bool alias = true, bool collision = false}) =>
            '''
format: 2
name: api
library: package:route_pkg/api.dart
jsPackage: '@route/sdk'
dartOutput: lib/api.g.dart
tsOutput: js/aggregate.ts
publicLibraries:
  package:route_pkg/api.dart:
    jsPackage: '@route/sdk/z'
    tsOutput: js/z/index.ts
${alias ? '''  package:route_pkg/alias.dart:
    jsPackage: '@route/sdk/a'
    tsOutput: js/${collision ? 'z' : 'a'}/index.ts
''' : ''}topLevel:
  getters: [answer]
classes:
  Counter:
    kind: object
    constructors:
      '': []
''';
        final package = _tempPackage(
          name: 'route_pkg',
          configs: {'flax_api.yaml': config()},
          libraries: {
            'api.dart': 'class Counter { Counter(); }\nconst answer = 42;\n',
            'alias.dart': "export 'api.dart';\n",
          },
        );
        final path = package.configPath('flax_api.yaml');
        Future<ProcessResult> formatter(
          String executable,
          List<String> arguments,
        ) =>
            formatRunner(executable, arguments, packageRoot: package.root.path);
        await FlaxCodegenPackagePipeline.generateConfig(
          path,
          processRunner: formatter,
        );
        final initial = await FlaxCodegenPackagePipeline.validateConfig(path);
        final oldFiles = initial.outputInventory
            .where((f) => f.startsWith('js/a/'))
            .toList();
        expect(oldFiles, ['js/a/_bindings/api.__module.ts', 'js/a/index.ts']);
        expect(
          File(p.join(package.root.path, 'js/aggregate.ts')).existsSync(),
          isFalse,
        );
        final manual = File(p.join(package.root.path, 'js/a/manual.ts'))
          ..writeAsStringSync('export const manual = true;\n');
        File(path).writeAsStringSync(config(alias: false));
        final before = _packageFilesystemSnapshot(package.root);
        var deletions = 0;
        await expectLater(
          FlaxCodegenPackagePipeline.generateConfig(
            path,
            processRunner: formatter,
            beforeInstallMutation: (absolute) {
              if (oldFiles.contains(
                    p.relative(absolute, from: package.root.path),
                  ) &&
                  ++deletions == 2) {
                throw StateError('injected orphan delete failure');
              }
            },
          ),
          throwsA(isA<FlaxCodegenException>()),
        );
        expect(deletions, 2);
        _expectPackageFilesystemContentsUnchanged(package.root, before: before);
        await FlaxCodegenPackagePipeline.generateConfig(
          path,
          processRunner: formatter,
        );
        for (final file in oldFiles) {
          expect(
            File(p.join(package.root.path, file)).existsSync(),
            isFalse,
            reason: file,
          );
        }
        expect(manual.readAsStringSync(), 'export const manual = true;\n');
        await FlaxCodegenPackagePipeline.checkConfig(
          path,
          processRunner: formatter,
        );
        File(path).writeAsStringSync(config(collision: true));
        final beforeCollision = _packageFilesystemSnapshot(package.root);
        await expectLater(
          FlaxCodegenPackagePipeline.generateConfig(
            path,
            processRunner: formatter,
          ),
          throwsA(
            isA<FlaxCodegenException>().having(
              (error) => error.diagnostics.any(
                (d) => d.code == FlaxCodegenDiagnosticCode.output,
              ),
              'output collision diagnostic',
              true,
            ),
          ),
        );
        _expectPackageFilesystemUnchanged(
          package.root,
          before: beforeCollision,
        );
      },
    );

    test('happy path writes outputs and checkConfig agrees', () async {
      final package = _tempGeneratePackage();
      final before = _packageFilesystemSnapshot(package.root);
      expect(
        File(p.join(package.root.path, 'lib', 'widgets.g.dart')).existsSync(),
        isFalse,
      );

      await FlaxCodegenPackagePipeline.generateConfig(
        package.configPath,
        processRunner: (executable, arguments) =>
            formatRunner(executable, arguments, packageRoot: package.root.path),
      );

      final afterGenerate = _packageFilesystemSnapshot(package.root);
      expect(afterGenerate.entries, isNot(equals(before.entries)));
      expect(
        File(p.join(package.root.path, 'lib', 'widgets.g.dart')).existsSync(),
        isTrue,
      );
      expect(
        File(p.join(package.root.path, 'js', 'widgets.ts')).existsSync(),
        isTrue,
      );
      expect(
        File(p.join(package.root.path, 'lib', 'extra.g.dart')).existsSync(),
        isTrue,
      );
      expect(
        File(p.join(package.root.path, 'bindings', 'manifest.json'))
            .existsSync(),
        isTrue,
      );

      final beforeCheck = _packageFilesystemSnapshot(package.root);
      await FlaxCodegenPackagePipeline.checkConfig(
        package.configPath,
        processRunner: (executable, arguments) =>
            formatRunner(executable, arguments, packageRoot: package.root.path),
      );
      _expectPackageFilesystemUnchanged(package.root, before: beforeCheck);
    });

    test(
      'mid-install failure restores pre-generate filesystem snapshot',
      () async {
        final package = _tempGeneratePackage();
        File(p.join(package.root.path, 'lib', 'widgets.g.dart'))
          ..createSync(recursive: true)
          ..writeAsStringSync('// prior widgets dart\n');
        File(p.join(package.root.path, 'js', 'widgets.ts'))
          ..createSync(recursive: true)
          ..writeAsStringSync('// prior widgets ts\n');
        File(p.join(package.root.path, 'lib', 'extra.g.dart'))
            .writeAsStringSync('// prior extra dart\n');
        File(p.join(package.root.path, 'js', 'extra.ts'))
          ..createSync(recursive: true)
          ..writeAsStringSync('// prior extra ts\n');
        File(p.join(package.root.path, 'bindings', 'manifest.json'))
            .writeAsStringSync('{ "prior": true }\n');

        final before = _packageFilesystemSnapshot(package.root);
        var mutationCount = 0;
        FlaxCodegenException? caught;
        try {
          await FlaxCodegenPackagePipeline.generateConfig(
            package.configPath,
            processRunner: (executable, arguments) => formatRunner(
              executable,
              arguments,
              packageRoot: package.root.path,
            ),
            beforeInstallMutation: (absolutePath) {
              mutationCount++;
              if (mutationCount == 2) {
                throw StateError('injected mid-install failure');
              }
            },
          );
          fail('expected mid-install failure');
        } on FlaxCodegenException catch (error) {
          caught = error;
        }

        expect(caught, isNotNull);
        expect(mutationCount, 2);
        expect(
          caught.diagnostics.single.message,
          contains('Package install failed:'),
        );
        expect(
          caught.diagnostics.single.message,
          contains('injected mid-install failure'),
        );
        // Restore rewrites prior bytes; mtimes may advance.
        _expectPackageFilesystemContentsUnchanged(package.root, before: before);
      },
    );

    test(
      'orphan owned generated files are deleted in the generate transaction',
      () async {
        final package = _tempGeneratePackage();
        await FlaxCodegenPackagePipeline.generateConfig(
          package.configPath,
          processRunner: (executable, arguments) => formatRunner(
            executable,
            arguments,
            packageRoot: package.root.path,
          ),
        );

        final orphanNormal = File(
          p.join(package.root.path, 'lib', 'orphan.g.dart'),
        )..writeAsStringSync('$_normalGeneratedHeader\nexport {};\n');
        final orphanHost = File(
          p.join(package.root.path, 'lib', 'orphan_host.g.dart'),
        )..writeAsStringSync('$_hostGeneratedHeader\nmixin Orphan {}\n');
        final skippedRootBuild =
            File(p.join(package.root.path, 'build', 'skipped.g.dart'))
              ..parent.createSync(recursive: true)
              ..writeAsStringSync('$_normalGeneratedHeader\nexport {};\n');

        await FlaxCodegenPackagePipeline.generateConfig(
          package.configPath,
          processRunner: (executable, arguments) => formatRunner(
            executable,
            arguments,
            packageRoot: package.root.path,
          ),
        );

        expect(orphanNormal.existsSync(), isFalse);
        expect(orphanHost.existsSync(), isFalse);
        expect(skippedRootBuild.existsSync(), isTrue);

        final beforeCheck = _packageFilesystemSnapshot(package.root);
        await FlaxCodegenPackagePipeline.checkConfig(
          package.configPath,
          processRunner: (executable, arguments) => formatRunner(
            executable,
            arguments,
            packageRoot: package.root.path,
          ),
        );
        _expectPackageFilesystemUnchanged(package.root, before: beforeCheck);
      },
    );

    test(
      'ancestor symlink on expected output fails closed without writes',
      () async {
        final package = _tempGeneratePackage();
        File(p.join(package.root.path, 'lib', 'widgets.g.dart'))
          ..createSync(recursive: true)
          ..writeAsStringSync('// prior\n');
        File(p.join(package.root.path, 'js', 'widgets.ts'))
          ..createSync(recursive: true)
          ..writeAsStringSync('// prior\n');
        File(p.join(package.root.path, 'lib', 'extra.g.dart'))
            .writeAsStringSync('// prior\n');
        File(p.join(package.root.path, 'js', 'extra.ts'))
          ..createSync(recursive: true)
          ..writeAsStringSync('// prior\n');
        File(p.join(package.root.path, 'bindings', 'manifest.json'))
            .writeAsStringSync('{ "prior": true }\n');

        final outside = _trustedTempRoot('flax-generate-outside-');
        addTearDown(() {
          if (outside.existsSync()) {
            outside.deleteSync(recursive: true);
          }
        });
        File(p.join(outside.path, 'widgets.ts')).writeAsStringSync('outside\n');
        File(p.join(outside.path, 'extra.ts')).writeAsStringSync('outside\n');
        Directory(p.join(package.root.path, 'js')).deleteSync(recursive: true);
        Link(p.join(package.root.path, 'js')).createSync(outside.path);

        final before = _packageFilesystemSnapshot(package.root);
        FlaxCodegenException? caught;
        try {
          await FlaxCodegenPackagePipeline.generateConfig(
            package.configPath,
            processRunner: (executable, arguments) => formatRunner(
              executable,
              arguments,
              packageRoot: package.root.path,
            ),
          );
          fail('expected FCG_OUTPUT for ancestor symlink');
        } on FlaxCodegenException catch (error) {
          caught = error;
        }

        expect(caught, isNotNull);
        expect(
          caught.diagnostics.every(
            (diagnostic) => diagnostic.code == FlaxCodegenDiagnosticCode.output,
          ),
          isTrue,
        );
        expect(
          caught.diagnostics.any(
            (diagnostic) =>
                diagnostic.message == 'Symbolic links are not allowed.',
          ),
          isTrue,
        );
        _expectPackageFilesystemUnchanged(package.root, before: before);
      },
    );

    test('generate then check agree from stale package contents', () async {
      final prepared = await _prepareCheckPackage();
      File(p.join(prepared.root.path, prepared.dartRelative))
          .writeAsStringSync('// stale dart\n');
      File(p.join(prepared.root.path, prepared.tsRelative))
          .writeAsStringSync('$_normalGeneratedHeader\n// stale ts\n');
      File(p.join(prepared.root.path, 'bindings', 'manifest.json'))
          .writeAsStringSync('{ "stale": true }\n');

      await FlaxCodegenPackagePipeline.generateConfig(
        prepared.configPath,
        processRunner: (executable, arguments) => formatRunner(
          executable,
          arguments,
          packageRoot: prepared.root.path,
        ),
      );

      final beforeCheck = _packageFilesystemSnapshot(prepared.root);
      await FlaxCodegenPackagePipeline.checkConfig(
        prepared.configPath,
        processRunner: (executable, arguments) => formatRunner(
          executable,
          arguments,
          packageRoot: prepared.root.path,
        ),
      );
      _expectPackageFilesystemUnchanged(prepared.root, before: beforeCheck);
    });
  });
}

({Directory root, String configPath}) _tempGeneratePackage() {
  final package = _tempPackage(
    name: 'generate_pkg',
    libraries: {
      'widgets.dart': '''
class Counter {
  Counter.create();
}
''',
      'extra.dart': '''
class Extra {
  Extra.create();
}
''',
    },
    configs: {
      'flax_extra.yaml': '''
format: 2
name: extra
library: package:generate_pkg/extra.dart
jsPackage: '@generate/extra'
dartOutput: lib/extra.g.dart
tsOutput: js/extra.ts
classes:
  Extra:
    kind: object
    constructors:
      create: []
''',
      'flax_widgets.yaml': '''
format: 2
name: widgets
library: package:generate_pkg/widgets.dart
jsPackage: '@generate/widgets'
dartOutput: lib/widgets.g.dart
tsOutput: js/widgets.ts
classes:
  Counter:
    kind: object
    constructors:
      create: []
''',
    },
  );
  return (
    root: package.root,
    configPath: package.configPath('flax_widgets.yaml'),
  );
}

const _normalGeneratedHeader =
    '// GENERATED CODE. Selected public API subset; do not edit.\n'
    '// Regenerate with dart run melos run bindings:generate.\n';

const _hostGeneratedHeader =
    '// GENERATED CODE. Selected host overrides; do not edit.\n'
    '// Regenerate with dart run melos run bindings:generate.\n';

({
  List<String> entries,
  Map<String, List<int>> bytes,
  Map<String, String?> linkTargets,
  Map<String, int> mtimes,
})
_packageFilesystemSnapshot(Directory root) {
  final entries = _listing(root);
  final bytes = <String, List<int>>{};
  final linkTargets = <String, String?>{};
  final mtimes = <String, int>{};
  for (final path in entries) {
    final type = FileSystemEntity.typeSync(path, followLinks: false);
    final stat = FileStat.statSync(path);
    mtimes[path] = stat.modified.millisecondsSinceEpoch;
    if (type == FileSystemEntityType.link) {
      linkTargets[path] = Link(path).targetSync();
      continue;
    }
    linkTargets[path] = null;
    if (type == FileSystemEntityType.file) {
      bytes[path] = File(path).readAsBytesSync();
    }
  }
  return (
    entries: entries,
    bytes: bytes,
    linkTargets: linkTargets,
    mtimes: mtimes,
  );
}

/// Field-wise deep compare: Record/`Map`/`List` `==` is identity for bytes lists.
void _expectPackageFilesystemUnchanged(
  Directory root, {
  required ({
    List<String> entries,
    Map<String, List<int>> bytes,
    Map<String, String?> linkTargets,
    Map<String, int> mtimes,
  })
  before,
}) {
  final after = _packageFilesystemSnapshot(root);
  expect(after.entries, before.entries);
  expect(after.linkTargets, before.linkTargets);
  expect(after.mtimes, before.mtimes);
  expect(after.bytes, before.bytes);
}

/// Same as [_expectPackageFilesystemUnchanged] but ignores mtimes (restore
/// rewrites prior bytes and may advance modification times).
void _expectPackageFilesystemContentsUnchanged(
  Directory root, {
  required ({
    List<String> entries,
    Map<String, List<int>> bytes,
    Map<String, String?> linkTargets,
    Map<String, int> mtimes,
  })
  before,
}) {
  final after = _packageFilesystemSnapshot(root);
  expect(after.entries, before.entries);
  expect(after.linkTargets, before.linkTargets);
  expect(after.bytes, before.bytes);
}

Future<
  ({
    Directory root,
    String configPath,
    String dartRelative,
    String tsRelative,
    String secondDartRelative,
  })
>
_prepareCheckPackage() async {
  final package = _tempPackage(
    name: 'check_pkg',
    libraries: {
      'widgets.dart': '''
class Counter {
  Counter.create();
}
''',
      'extra.dart': '''
class Extra {
  Extra.create();
}
''',
    },
    configs: {
      'flax_extra.yaml': '''
format: 2
name: extra
library: package:check_pkg/extra.dart
jsPackage: '@check/extra'
dartOutput: lib/extra.g.dart
tsOutput: js/extra.ts
classes:
  Extra:
    kind: object
    constructors:
      create: []
''',
      'flax_widgets.yaml': '''
format: 2
name: widgets
library: package:check_pkg/widgets.dart
jsPackage: '@check/widgets'
dartOutput: lib/widgets.g.dart
tsOutput: js/widgets.ts
classes:
  Counter:
    kind: object
    constructors:
      create: []
''',
    },
  );
  final validation = await FlaxCodegenPackagePipeline.validateConfig(
    package.configPath('flax_widgets.yaml'),
    processRunner: (executable, arguments) async {
      fail('validateConfig must not invoke the process runner');
    },
  );
  final pipeline = FlaxCodegenPackagePipeline(
    packageRoot: package.root.path,
    processRunner: (executable, arguments) async {
      expect(executable, Platform.resolvedExecutable);
      expect(arguments, ['format', '--page-width=80', arguments[2]]);
      expect(p.isWithin(package.root.path, p.normalize(arguments[2])), isFalse);
      return ProcessResult(0, 0, '', '');
    },
  );
  final emitted = await pipeline.emit(validation.localModels);
  for (final entry in emitted.entries) {
    final file = File(p.join(package.root.path, entry.key));
    file.parent.createSync(recursive: true);
    file.writeAsBytesSync(entry.value);
  }
  File(p.join(package.root.path, 'bindings', 'manifest.json'))
      .writeAsStringSync(validation.manifest.encode());
  return (
    root: package.root,
    configPath: package.configPath('flax_widgets.yaml'),
    dartRelative: 'lib/widgets.g.dart',
    tsRelative: 'js/widgets.ts',
    secondDartRelative: 'lib/extra.g.dart',
  );
}

({Directory root, Directory bindings, String Function(String) configPath})
_tempPackage({
  required String name,
  required Map<String, String> configs,
  Map<String, String> libraries = const {},
  String? metadata,
  bool writePackageConfig = true,
  String? packageConfigContents,
}) {
  final root = _trustedTempRoot(
    'flax-pipeline-pkg-',
    outsidePackage: !writePackageConfig && packageConfigContents == null,
  );
  addTearDown(() {
    if (root.existsSync()) {
      root.deleteSync(recursive: true);
    }
  });
  File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: $name
dependencies:
  flax: any
''');
  File(p.join(root.path, 'flax_package.yaml')).writeAsStringSync(
    metadata ??
        '''
format: 2
capabilities:
  - bindings
bindingNamespace: example.host
''',
  );
  final lib = Directory(p.join(root.path, 'lib'))..createSync();
  for (final entry in libraries.entries) {
    File(p.join(lib.path, entry.key)).writeAsStringSync(entry.value);
  }
  final bindings = Directory(p.join(root.path, 'bindings'))..createSync();
  for (final entry in configs.entries) {
    File(p.join(bindings.path, entry.key)).writeAsStringSync(entry.value);
  }
  if (writePackageConfig || packageConfigContents != null) {
    final tool = Directory(p.join(root.path, '.dart_tool'))..createSync();
    File(p.join(tool.path, 'package_config.json')).writeAsStringSync(
      packageConfigContents ??
          _packageConfigJson({name: root}, packageConfigDir: tool),
    );
  }
  return (
    root: root,
    bindings: bindings,
    configPath: (String name) => p.normalize(p.join(bindings.path, name)),
  );
}

Directory _trustedTempRoot(String prefix, {bool outsidePackage = false}) {
  var parent = Directory(Directory.systemTemp.resolveSymbolicLinksSync());
  if (outsidePackage) {
    // Repo-local TMPDIR must not leak its pubspec or package config into negatives.
    for (var ancestor = parent; ; ancestor = ancestor.parent) {
      if (File(p.join(ancestor.path, 'pubspec.yaml')).existsSync()) {
        parent = ancestor.parent;
      }
      if (ancestor.parent.path == ancestor.path) break;
    }
  }
  return parent.createTempSync(prefix);
}

Directory _tempWorkspace() {
  final root = _trustedTempRoot('flax-pipeline-ws-');
  addTearDown(() {
    if (root.existsSync()) {
      root.deleteSync(recursive: true);
    }
  });
  return root;
}

({Directory root, FlaxCodegenManifest manifest}) _writeSnapshotProviderPackage(
  Directory workspace,
) {
  const package = 'base_pkg';
  const namespace = 'example.base';
  const moduleName = 'base';
  const typeName = 'PublicValue';
  final root = Directory(p.join(workspace.path, package))..createSync();
  File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('name: $package\n');
  final lib = Directory(p.join(root.path, 'lib'))..createSync();
  File(p.join(lib.path, '$moduleName.dart')).writeAsStringSync('''
abstract class HiddenBase {}

class PublicValue extends HiddenBase {
  PublicValue(this.value);
  final int value;
}

class GenericValue<T> extends HiddenBase {}
''');
  final bindings = Directory(p.join(root.path, 'bindings'))..createSync();
  final ns = FlaxCodegenBindingNamespace.parse(namespace);
  final moduleId = FlaxCodegenModuleId(
    namespace: ns,
    name: FlaxCodegenModuleName.parse(moduleName),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:$package/$moduleName.dart',
    name: typeName,
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: typeName,
  );
  final genericSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:$package/$moduleName.dart',
    name: 'GenericValue',
    origin: FlaxCodegenOriginState.resolved,
  );
  final genericWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'GenericValue',
  );
  final genericIdentity = Object();
  final genericParameter = FlaxCodegenGenericParameter(
    'T',
    const FlaxCodegenTypeRef('any'),
    genericIdentity: genericIdentity,
  );
  final model = FlaxCodegenModuleModel(
    name: moduleName,
    library: 'package:$package/$moduleName.dart',
    jsPackage: '@base/values',
    dartOutput: 'lib/$moduleName.g.dart',
    tsOutput: 'js/$moduleName.ts',
    classes: [
      FlaxCodegenClassModel(
        name: 'GenericValue',
        id: genericWire.value,
        kind: 'object',
        constructors: const [],
        typeParameters: [genericParameter],
        supertypes: const [],
      ),
    ],
    types: [
      FlaxCodegenNamedTypeModel(name: typeName, id: ownerWire.value),
      FlaxCodegenNamedTypeModel(
        name: 'GenericValue',
        id: genericWire.value,
        typeParameters: [genericParameter],
      ),
    ],
    typeLibraries: const {
      typeName: 'package:$package/$moduleName.dart',
      'GenericValue': 'package:$package/$moduleName.dart',
    },
    snapshots: [
      FlaxCodegenSnapshotModel(
        name: typeName,
        id: ownerWire.value,
        fields: const [
          FlaxCodegenSnapshotFieldModel(name: 'value', kind: 'int'),
        ],
      ),
    ],
  );
  final manifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: package,
      namespace: ns,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'flax_$moduleName.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
            FlaxCodegenResolvedOwner(
              sourceIdentity: genericSource,
              wireId: genericWire,
            ),
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {moduleName: model},
    importPackageNames: const [],
  );
  File(p.join(bindings.path, 'manifest.json'))
      .writeAsStringSync(manifest.encode());
  final generated = File(p.join(root.path, model.dartOutput));
  generated.parent.createSync(recursive: true);
  generated.writeAsStringSync(FlaxCodegenBindingEmitter([model]).dart(model));
  return (root: root, manifest: manifest);
}

({Directory root, String Function(String) configPath}) _writeHostPackage({
  required Directory workspace,
  required String name,
  required Map<String, String> configs,
  Map<String, String> libraries = const {},
  List<String> dependencies = const [],
  String bindingNamespace = 'example.host',
}) {
  final root = Directory(p.join(workspace.path, name))..createSync();
  final allDependencies = {'flax', ...dependencies}.toList()..sort();
  File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: $name
dependencies:
${allDependencies.map((dependency) => '  $dependency: any').join('\n')}
''');
  File(p.join(root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 2
capabilities:
  - bindings
bindingNamespace: $bindingNamespace
''');
  final lib = Directory(p.join(root.path, 'lib'))..createSync();
  for (final entry in libraries.entries) {
    final file = File(p.join(lib.path, entry.key));
    file.parent.createSync(recursive: true);
    file.writeAsStringSync(entry.value);
  }
  final bindings = Directory(p.join(root.path, 'bindings'))..createSync();
  for (final entry in configs.entries) {
    File(p.join(bindings.path, entry.key)).writeAsStringSync(entry.value);
  }
  return (
    root: root,
    configPath: (String fileName) =>
        p.normalize(p.join(bindings.path, fileName)),
  );
}

({Directory root, FlaxCodegenManifest manifest})
_writeBaseDataCallbackManifestPackage(Directory workspace) {
  const package = 'base_pkg';
  const namespace = 'example.base';
  const moduleName = 'base';
  const typeName = 'Base';
  final root = Directory(p.join(workspace.path, package))..createSync();
  final lib = Directory(p.join(root.path, 'lib'))..createSync();
  File(p.join(lib.path, '$moduleName.dart')).writeAsStringSync('''
export 'dart:core' show Object;

class Base {
  void listen(Function cb) {}
}
''');
  final bindings = Directory(p.join(root.path, 'bindings'))..createSync();
  final ns = FlaxCodegenBindingNamespace.parse(namespace);
  final moduleId = FlaxCodegenModuleId(
    namespace: ns,
    name: FlaxCodegenModuleName.parse(moduleName),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:$package/$moduleName.dart',
    name: typeName,
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: typeName,
  );
  final cb = FlaxCodegenTypeRef(
    'callback',
    parameters: [
      FlaxCodegenParameterModel(
        name: 'p0',
        type: const FlaxCodegenTypeRef('data', nullable: true),
        required: true,
        positional: true,
        defaultCode: 'null',
      ),
    ],
    result: const FlaxCodegenTypeRef('void'),
  );
  final model = FlaxCodegenModuleModel(
    name: moduleName,
    library: 'package:$package/$moduleName.dart',
    jsPackage: '@$package/$moduleName',
    dartOutput: 'lib/$moduleName.g.dart',
    tsOutput: 'js/$moduleName.ts',
    classes: [
      FlaxCodegenClassModel(
        name: typeName,
        id: ownerWire.value,
        kind: 'object',
        constructors: const [],
        methods: [
          FlaxCodegenMethodModel(
            'listen',
            [
              FlaxCodegenParameterModel(
                name: 'cb',
                type: cb,
                required: true,
                positional: true,
                defaultCode: 'null',
              ),
            ],
            const FlaxCodegenTypeRef('void'),
            instance: true,
          ),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
  );
  final manifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: package,
      namespace: ns,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'flax_$moduleName.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {moduleName: model},
    importPackageNames: const [],
  );
  File(p.join(bindings.path, 'manifest.json'))
      .writeAsStringSync(manifest.encode());
  final generated = File(p.join(root.path, model.dartOutput));
  generated.parent.createSync(recursive: true);
  generated.writeAsStringSync(FlaxCodegenBindingEmitter([model]).dart(model));
  return (root: root, manifest: manifest);
}

({Directory root, FlaxCodegenManifest manifest})
_writeBaseDataErrorScopedListenPackage(Directory workspace) {
  const package = 'base_pkg';
  const namespace = 'example.base';
  const moduleName = 'base';
  const typeName = 'Base';
  final root = Directory(p.join(workspace.path, package))..createSync();
  final lib = Directory(p.join(root.path, 'lib'))..createSync();
  File(p.join(lib.path, '$moduleName.dart')).writeAsStringSync('''
export 'dart:core' show Object, StackTrace;

class Base {
  void listen(Function cb) {}
}
''');
  final bindings = Directory(p.join(root.path, 'bindings'))..createSync();
  final ns = FlaxCodegenBindingNamespace.parse(namespace);
  final moduleId = FlaxCodegenModuleId(
    namespace: ns,
    name: FlaxCodegenModuleName.parse(moduleName),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:$package/$moduleName.dart',
    name: typeName,
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: typeName,
  );
  final stackSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'dart:core',
    name: 'StackTrace',
    origin: FlaxCodegenOriginState.resolved,
  );
  final stackWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'StackTrace',
  );
  final cb = FlaxCodegenTypeRef(
    'callback',
    parameters: [
      FlaxCodegenParameterModel(
        name: 'p0',
        type: const FlaxCodegenTypeRef('data', nullable: true),
        required: true,
        positional: true,
        defaultCode: 'null',
        encodeKind: 'error',
      ),
      FlaxCodegenParameterModel(
        name: 'p1',
        type: FlaxCodegenTypeRef(
          'object',
          id: stackWire.value,
          name: 'StackTrace',
          nullable: true,
        ),
        required: false,
        positional: true,
        defaultCode: 'null',
        scoped: true,
      ),
    ],
    result: const FlaxCodegenTypeRef('void'),
  );
  final model = FlaxCodegenModuleModel(
    name: moduleName,
    library: 'package:$package/$moduleName.dart',
    jsPackage: '@$package/$moduleName',
    dartOutput: 'lib/$moduleName.g.dart',
    tsOutput: 'js/$moduleName.ts',
    classes: [
      FlaxCodegenClassModel(
        name: typeName,
        id: ownerWire.value,
        kind: 'object',
        constructors: const [],
        methods: [
          FlaxCodegenMethodModel(
            'listen',
            [
              FlaxCodegenParameterModel(
                name: 'cb',
                type: cb,
                required: true,
                positional: true,
                defaultCode: 'null',
              ),
            ],
            const FlaxCodegenTypeRef('void'),
            instance: true,
          ),
        ],
        supertypes: const [],
      ),
      FlaxCodegenClassModel(
        name: 'StackTrace',
        id: stackWire.value,
        kind: 'object',
        constructors: const [],
        methods: const [],
        staticGetters: [
          FlaxCodegenGetterModel(
            'current',
            FlaxCodegenTypeRef(
              'object',
              id: stackWire.value,
              name: 'StackTrace',
            ),
          ),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
    typeLibraries: const {'StackTrace': 'dart:core'},
  );
  final manifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: package,
      namespace: ns,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'flax_$moduleName.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
            FlaxCodegenResolvedOwner(
              sourceIdentity: stackSource,
              wireId: stackWire,
            ),
            FlaxCodegenResolvedOwner(
              sourceIdentity: FlaxCodegenSourceIdentity(
                kind: FlaxCodegenDeclarationKind.readonly,
                originatingUri: 'dart:core',
                name: 'StackTrace.current',
                origin: FlaxCodegenOriginState.resolved,
              ),
              wireId: FlaxCodegenWireId.read(
                moduleId: moduleId,
                publicBindingName: 'StackTrace.current',
              ),
            ),
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {moduleName: model},
    importPackageNames: const [],
  );
  File(p.join(bindings.path, 'manifest.json'))
      .writeAsStringSync(manifest.encode());
  final generated = File(p.join(root.path, model.dartOutput));
  generated.parent.createSync(recursive: true);
  generated.writeAsStringSync(FlaxCodegenBindingEmitter([model]).dart(model));
  return (root: root, manifest: manifest);
}

({Directory root, FlaxCodegenManifest manifest})
_writeBaseListenManifestPackage(Directory workspace) {
  const package = 'base_pkg';
  const namespace = 'example.base';
  const moduleName = 'base';
  const typeName = 'Base';
  final root = Directory(p.join(workspace.path, package))..createSync();
  final lib = Directory(p.join(root.path, 'lib'))..createSync();
  File(p.join(lib.path, '$moduleName.dart')).writeAsStringSync('''
class Token {}

class Base {
  void listen(Function onError) {}
  int map(int Function(Token value) transform) => 0;
}
''');
  final bindings = Directory(p.join(root.path, 'bindings'))..createSync();
  final ns = FlaxCodegenBindingNamespace.parse(namespace);
  final moduleId = FlaxCodegenModuleId(
    namespace: ns,
    name: FlaxCodegenModuleName.parse(moduleName),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:$package/$moduleName.dart',
    name: typeName,
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: typeName,
  );
  final tokenSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:$package/$moduleName.dart',
    name: 'Token',
    origin: FlaxCodegenOriginState.resolved,
  );
  final tokenWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'Token',
  );
  final stackSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'dart:core',
    name: 'StackTrace',
    origin: FlaxCodegenOriginState.resolved,
  );
  final stackWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: 'StackTrace',
  );
  final onError = FlaxCodegenTypeRef(
    'callback',
    parameters: [
      FlaxCodegenParameterModel(
        name: 'p0',
        type: const FlaxCodegenTypeRef('any'),
        required: true,
        positional: true,
        defaultCode: 'null',
        encodeKind: 'error',
      ),
      FlaxCodegenParameterModel(
        name: 'p1',
        type: FlaxCodegenTypeRef(
          'object',
          id: stackWire.value,
          name: 'StackTrace',
          nullable: true,
        ),
        required: false,
        positional: true,
        defaultCode: 'null',
        scoped: true,
      ),
    ],
    result: const FlaxCodegenTypeRef('void'),
  );
  final transformDeclared = FlaxCodegenTypeRef(
    'callback',
    parameters: [
      FlaxCodegenParameterModel(
        name: 'value',
        type: FlaxCodegenTypeRef('object', id: tokenWire.value, name: 'Token'),
        required: true,
        positional: true,
        defaultCode: 'null',
        scoped: true,
      ),
    ],
    result: const FlaxCodegenTypeRef('int'),
  );
  final transform = transformDeclared.declaredAs(transformDeclared);
  final model = FlaxCodegenModuleModel(
    name: moduleName,
    library: 'package:$package/$moduleName.dart',
    jsPackage: '@$package/$moduleName',
    dartOutput: 'lib/$moduleName.g.dart',
    tsOutput: 'js/$moduleName.ts',
    classes: [
      FlaxCodegenClassModel(
        name: typeName,
        id: ownerWire.value,
        kind: 'object',
        constructors: const [],
        methods: [
          FlaxCodegenMethodModel(
            'listen',
            [
              FlaxCodegenParameterModel(
                name: 'onError',
                type: onError,
                required: true,
                positional: true,
                defaultCode: 'null',
              ),
            ],
            const FlaxCodegenTypeRef('void'),
            instance: true,
          ),
          FlaxCodegenMethodModel(
            'map',
            [
              FlaxCodegenParameterModel(
                name: 'transform',
                type: transform,
                required: true,
                positional: true,
                defaultCode: 'null',
              ),
            ],
            const FlaxCodegenTypeRef('int'),
            instance: true,
          ),
        ],
        supertypes: const [],
      ),
      FlaxCodegenClassModel(
        name: 'Token',
        id: tokenWire.value,
        kind: 'object',
        constructors: const [],
        methods: const [],
        supertypes: const [],
      ),
      FlaxCodegenClassModel(
        name: 'StackTrace',
        id: stackWire.value,
        kind: 'object',
        constructors: const [],
        methods: const [],
        staticGetters: [
          FlaxCodegenGetterModel(
            'current',
            FlaxCodegenTypeRef(
              'object',
              id: stackWire.value,
              name: 'StackTrace',
            ),
          ),
        ],
        supertypes: const [],
      ),
    ],
    types: const [],
    typeLibraries: const {'StackTrace': 'dart:core'},
  );
  final manifest = FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: package,
      namespace: ns,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'flax_$moduleName.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
            FlaxCodegenResolvedOwner(
              sourceIdentity: tokenSource,
              wireId: tokenWire,
            ),
            FlaxCodegenResolvedOwner(
              sourceIdentity: stackSource,
              wireId: stackWire,
            ),
            FlaxCodegenResolvedOwner(
              sourceIdentity: FlaxCodegenSourceIdentity(
                kind: FlaxCodegenDeclarationKind.readonly,
                originatingUri: 'dart:core',
                name: 'StackTrace.current',
                origin: FlaxCodegenOriginState.resolved,
              ),
              wireId: FlaxCodegenWireId.read(
                moduleId: moduleId,
                publicBindingName: 'StackTrace.current',
              ),
            ),
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {moduleName: model},
    importPackageNames: const [],
  );
  File(p.join(bindings.path, 'manifest.json'))
      .writeAsStringSync(manifest.encode());
  final generated = File(p.join(root.path, model.dartOutput));
  generated.parent.createSync(recursive: true);
  generated.writeAsStringSync(FlaxCodegenBindingEmitter([model]).dart(model));
  return (root: root, manifest: manifest);
}

({Directory root, FlaxCodegenManifest manifest})
_writeBaseMissingExportTypeLibraryPackage(Directory workspace) {
  final base = _writeBaseListenManifestPackage(workspace);
  final encoded = jsonDecode(base.manifest.encode()) as Map<String, Object?>;
  final modules = List<Object?>.of(encoded['modules'] as List<Object?>);
  final entry = Map<String, Object?>.of(modules.single as Map<String, Object?>);
  final model = Map<String, Object?>.of(entry['model'] as Map<String, Object?>);
  final typeLibraries = <String, String>{
    for (final entry
        in (model['typeLibraries'] as Map<Object?, Object?>).entries)
      entry.key! as String: entry.value! as String,
    'Ghost': 'package:base_pkg/base.dart',
  };
  final sortedKeys = typeLibraries.keys.toList()..sort();
  model['typeLibraries'] = {
    for (final key in sortedKeys) key: typeLibraries[key],
  };
  entry['model'] = model;
  modules[0] = entry;
  encoded['modules'] = modules;
  File(p.join(base.root.path, 'bindings', 'manifest.json')).writeAsStringSync(
    '${const JsonEncoder.withIndent('  ').convert(encoded)}\n',
  );
  return base;
}

({Directory root, FlaxCodegenManifest manifest}) _writeManifestPackage({
  required Directory workspace,
  required String name,
  required String namespace,
  required String moduleName,
  required String typeName,
  required List<String> imports,
  String? librarySource,
}) {
  final root = Directory(p.join(workspace.path, name))..createSync();
  final lib = Directory(p.join(root.path, 'lib'))..createSync();
  File(p.join(lib.path, '$moduleName.dart')).writeAsStringSync(
    librarySource ??
        '''
class $typeName {
  $typeName();
}
''',
  );
  final bindings = Directory(p.join(root.path, 'bindings'))..createSync();
  final manifest = _manifestPackage(
    package: name,
    namespace: namespace,
    moduleName: moduleName,
    typeName: typeName,
    imports: imports,
  );
  File(p.join(bindings.path, 'manifest.json'))
      .writeAsStringSync(manifest.encode());
  final model = manifest.modules.single.model.module;
  final generated = File(p.join(root.path, 'lib/$moduleName.g.dart'));
  generated.parent.createSync(recursive: true);
  generated.writeAsStringSync(FlaxCodegenBindingEmitter([model]).dart(model));
  return (root: root, manifest: manifest);
}

void _writePackageConfig(
  Directory workspace,
  Map<String, Directory> packages, {
  Map<String, List<String>> javascriptDependencies = const {},
  Map<String, String> providerJavascript = const {},
}) {
  for (final entry in providerJavascript.entries) {
    final root = packages[entry.key]!;
    final file = File(p.join(root.path, 'flax_package.yaml'));
    var metadata = file.existsSync() ? file.readAsStringSync() : '';
    if (metadata.isEmpty) {
      final diagnostics = FlaxCodegenManifestDiagnostics(file.path);
      final manifest = FlaxCodegenManifest.parse(
        File(p.join(root.path, 'bindings/manifest.json')).readAsStringSync(),
        diagnostics,
      )!;
      diagnostics.throwIfAny();
      metadata =
          'format: 2\ncapabilities: [bindings]\n'
          'bindingNamespace: ${manifest.bindingNamespace.value}\n';
    }
    if (!RegExp(r'^javascript:', multiLine: true).hasMatch(metadata)) {
      file.writeAsStringSync(
        '${metadata}javascript: '
        '{package: "${entry.value}", version: same, mode: runtime}\n',
      );
    }
  }
  for (final entry in javascriptDependencies.entries) {
    for (final folder in ['js-types', 'js']) {
      final file = File(
        p.join(packages[entry.key]!.path, folder, 'package.json'),
      );
      file.parent.createSync(recursive: true);
      file.writeAsStringSync(
        jsonEncode({
          'name': '@test/${entry.key}${folder == 'js' ? '-runtime' : ''}',
          'version': '0.0.0',
          'dependencies': {for (final name in entry.value) name: '*'},
        }),
      );
    }
  }
  final tool = Directory(p.join(workspace.path, '.dart_tool'))..createSync();
  File(p.join(tool.path, 'package_config.json'))
      .writeAsStringSync(_packageConfigJson(packages, packageConfigDir: tool));
}

String _packageConfigJson(
  Map<String, Directory> packages, {
  required Directory packageConfigDir,
}) {
  packages = Map.of(packages);
  if (!packages.containsKey('flax')) {
    packages['flax'] = writeEmptyCorePackage(packageConfigDir.parent);
  }
  final entries = [
    for (final name in packages.keys.toList()..sort())
      () {
        final relative = p.relative(
          packages[name]!.path,
          from: packageConfigDir.path,
        );
        final rootUri = relative == '.'
            ? '../'
            : '${p.split(relative).join('/')}/';
        return '''
    {
      "name": "$name",
      "rootUri": "$rootUri",
      "packageUri": "lib/"
    }''';
      }(),
  ];
  return '''
{
  "configVersion": 2,
  "packages": [
${entries.join(',\n')}
  ]
}
''';
}

FlaxCodegenManifest _manifestPackage({
  required String package,
  required String namespace,
  required String moduleName,
  required String typeName,
  required List<String> imports,
}) {
  final ns = FlaxCodegenBindingNamespace.parse(namespace);
  final moduleId = FlaxCodegenModuleId(
    namespace: ns,
    name: FlaxCodegenModuleName.parse(moduleName),
  );
  final ownerSource = FlaxCodegenSourceIdentity(
    kind: FlaxCodegenDeclarationKind.type,
    originatingUri: 'package:$package/$moduleName.dart',
    name: typeName,
    origin: FlaxCodegenOriginState.resolved,
  );
  final ownerWire = FlaxCodegenWireId.type(
    moduleId: moduleId,
    publicBindingName: typeName,
  );
  final model = FlaxCodegenModuleModel(
    name: moduleName,
    library: 'package:$package/$moduleName.dart',
    jsPackage: '@$package/$moduleName',
    dartOutput: 'lib/$moduleName.g.dart',
    tsOutput: 'js/$moduleName.ts',
    classes: [
      FlaxCodegenClassModel(
        name: typeName,
        id: ownerWire.value,
        kind: 'object',
        constructors: const [FlaxCodegenConstructorModel('', [])],
        supertypes: const [],
      ),
    ],
    types: const [],
  );
  return FlaxCodegenManifest.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: package,
      namespace: ns,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: 'flax_$moduleName.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol21RequiredCapabilities(),
        ),
      ],
    ),
    modules: {moduleName: model},
    importPackageNames: imports,
  );
}

String _minimalConfig({
  required String packageName,
  required String name,
  required String library,
  required String dartOutput,
  required String tsOutput,
  List<String> imports = const [],
}) {
  final importBlock = imports.isEmpty
      ? ''
      : '''
imports:
${[for (final importName in imports) '  - $importName'].join('\n')}
''';
  return '''
format: 2
name: $name
library: $library
jsPackage: '@$packageName/$name'
dartOutput: $dartOutput
tsOutput: $tsOutput
$importBlock''';
}

List<String> _listing(Directory root) {
  final paths =
      root
          .listSync(recursive: true, followLinks: false)
          .map((entity) => entity.path)
          .toList()
        ..sort();
  return paths;
}
