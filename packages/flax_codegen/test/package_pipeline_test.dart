import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/src/diagnostic.dart';
import 'package:flax_codegen/src/emitter.dart';
import 'package:flax_codegen/src/identity.dart';
import 'package:flax_codegen/src/manifest_v2.dart';
import 'package:flax_codegen/src/model.dart';
import 'package:flax_codegen/src/ownership.dart';
import 'package:flax_codegen/src/package_pipeline.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  group('FlaxCodegenPackagePipeline.validateConfig', () {
    test(
      'discovers multi-config packages without mutation or runner use',
      () async {
        final package = _tempPackage(
          name: 'host_pkg',
          libraries: {'host.dart': 'library;\n', 'widgets.dart': 'library;\n'},
          configs: {
            'widgets.yaml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'widgets',
              library: 'package:host_pkg/widgets.dart',
              dartOutput: 'lib/widgets.g.dart',
              tsOutput: 'js/widgets.ts',
            ),
            'host.yml': _minimalConfig(
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
          package.configPath('widgets.yaml'),
          processRunner: runner,
        );
        final viaHost = await FlaxCodegenPackagePipeline.validateConfig(
          package.configPath('host.yml'),
          processRunner: runner,
        );

        expect(viaWidgets.packageRoot, package.root.path);
        expect(viaWidgets.dartPackage, 'host_pkg');
        expect(viaWidgets.metadata.capabilities, ['bindings']);
        expect(viaWidgets.metadata.bindingNamespace, 'example.host');
        expect(viaWidgets.configPaths, [
          package.configPath('host.yml'),
          package.configPath('widgets.yaml'),
        ]);
        expect(
          [for (final module in viaWidgets.localModels) module.name],
          ['host', 'widgets'],
        );
        expect(viaHost.configPaths, viaWidgets.configPaths);
        expect(viaWidgets.directDependencies, isEmpty);
        expect(viaWidgets.outputInventory, [
          'bindings/manifest.json',
          'js/host.ts',
          'js/widgets.ts',
          'lib/host.g.dart',
          'lib/widgets.g.dart',
        ]);
        expect(
          () => viaWidgets.configPaths.add('/extra.yaml'),
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
          'ok.yaml': _minimalConfig(
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

      final linkPath = p.join(package.bindings.path, 'linked.yaml');
      Link(linkPath).createSync(package.configPath('ok.yaml'));
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

      final nested = p.join(package.bindings.path, 'nested', 'deep.yaml');
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

      final outside = p.join(package.root.path, 'lib', 'outside.yaml');
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

      final orphanRoot = _trustedTempRoot('flax-orphan-');
      addTearDown(() {
        if (orphanRoot.existsSync()) {
          orphanRoot.deleteSync(recursive: true);
        }
      });
      final orphanBindings = Directory(p.join(orphanRoot.path, 'bindings'))
        ..createSync();
      final orphanConfig = File(p.join(orphanBindings.path, 'orphan.yaml'))
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
      File(p.join(actualBindings.path, 'ok.yaml')).writeAsStringSync(
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
        p.join(linkedBindingsRoot.path, 'bindings', 'ok.yaml'),
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
format: 1
capabilities:
  - bindings
bindingNamespace: example.host
''');
      Directory(p.join(realPackageRoot.path, 'lib')).createSync();
      File(p.join(realPackageRoot.path, 'lib', 'ok.dart'))
          .writeAsStringSync('library;\n');
      final realBindings = Directory(p.join(realPackageRoot.path, 'bindings'))
        ..createSync();
      File(p.join(realBindings.path, 'ok.yaml')).writeAsStringSync(
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
        p.join(packageRootLink, 'bindings', 'ok.yaml'),
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
format: 1
capabilities:
  - bindings
bindingNamespace: example.host
''');
      Directory(p.join(nestedPackage.path, 'lib')).createSync();
      File(p.join(nestedPackage.path, 'lib', 'ok.dart'))
          .writeAsStringSync('library;\n');
      final nestedBindings = Directory(p.join(nestedPackage.path, 'bindings'))
        ..createSync();
      File(p.join(nestedBindings.path, 'ok.yaml')).writeAsStringSync(
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
        p.join(ancestorLink, 'nested_pkg', 'bindings', 'ok.yaml'),
        'Symbolic links are not allowed.',
      );
    });

    test('aggregates independent strict diagnostics in sorted order', () async {
      final package = _tempPackage(
        name: 'broken_pkg',
        metadata: '''
format: 2
capabilities:
  - bindings
bindingNamespace: example.broken
''',
        libraries: {'a.dart': 'library;\n', 'b.dart': 'library;\n'},
        configs: {
          'b.yaml': '''
format: 1
name: beta
library: package:broken_pkg/b.dart
jsPackage: '@broken/b'
dartOutput: lib/b.g.dart
tsOutput: js/b.ts
unknown: true
''',
          'a.yaml': '''
format: 1
name: alpha
library: package:broken_pkg/a.dart
jsPackage: '@broken/a'
dartOutput: lib/a.g.dart
''',
        },
      );

      try {
        await FlaxCodegenPackagePipeline.validateConfig(
          package.configPath('b.yaml'),
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
              package.configPath('a.yaml'),
              'FCG_MISSING_FIELD',
              '/tsOutput',
              'Missing field.',
            ),
            (
              package.configPath('b.yaml'),
              'FCG_UNKNOWN_FIELD',
              '/unknown',
              'Unknown field.',
            ),
            (
              p.join(package.root.path, 'flax_package.yaml'),
              'FCG_INVALID_VALUE',
              '/format',
              'Expected 1.',
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
            'ok.yaml': _minimalConfig(
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
            package.configPath('ok.yaml'),
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
          libraries: {'host.dart': 'library;\n', 'widgets.dart': 'library;\n'},
          configs: {
            'widgets.yaml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'widgets',
              library: 'package:host_pkg/widgets.dart',
              dartOutput: 'lib/widgets.g.dart',
              tsOutput: 'js/widgets.ts',
              imports: const ['mid_pkg'],
            ),
            'host.yml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'host',
              library: 'package:host_pkg/host.dart',
              dartOutput: 'lib/host.g.dart',
              tsOutput: 'js/host.ts',
              imports: const ['mid_pkg'],
            ),
          },
        );
        _writePackageConfig(workspace, {
          'host_pkg': host.root,
          'mid_pkg': mid.root,
          'leaf_pkg': leaf.root,
        });

        Future<ProcessResult> runner(
          String executable,
          List<String> arguments,
        ) {
          fail('validateConfig must not invoke the process runner');
        }

        final forward = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('widgets.yaml'),
          processRunner: runner,
        );
        final reversed = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('host.yml'),
          processRunner: runner,
        );

        expect(forward.directDependencies.keys.toList(), ['mid_pkg']);
        expect(reversed.directDependencies.keys.toList(), ['mid_pkg']);
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
          libraries: {
            'host.dart': 'library;\n',
            'widgets.dart': '''
class Counter {
  int get value => 0;
}
''',
          },
          configs: {
            'widgets.yaml': '''
format: 1
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
            'host.yml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'host',
              library: 'package:host_pkg/host.dart',
              dartOutput: 'lib/host.g.dart',
              tsOutput: 'js/host.ts',
              imports: const ['mid_pkg'],
            ),
          },
        );
        _writePackageConfig(workspace, {
          'host_pkg': host.root,
          'mid_pkg': mid.root,
          'leaf_pkg': leaf.root,
        });
        final before = _listing(workspace);
        Future<ProcessResult> runner(
          String executable,
          List<String> arguments,
        ) {
          fail('validateConfig must not invoke the process runner');
        }

        final viaWidgets = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('widgets.yaml'),
          processRunner: runner,
        );
        final viaHost = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('host.yml'),
          processRunner: runner,
        );

        expect(
          [for (final module in viaWidgets.localModels) module.name],
          ['host', 'widgets'],
        );
        expect(viaWidgets.localModels[0].classes, isEmpty);
        expect(viaWidgets.localModels[0].moduleId, 'example.host/host');
        expect(viaWidgets.localModels[0].requiredCapabilities, isEmpty);
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
          'widgets.yaml': '''
format: 1
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
      _writePackageConfig(workspace, {
        'host_pkg': host.root,
        'mid_pkg': mid.root,
      });

      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('widgets.yaml'),
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
      'dependency Manifest2 preserves inherited raw Function callback flags',
      () async {
        final workspace = _tempWorkspace();
        final base = _writeBaseListenManifestPackage(workspace);
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          libraries: {
            'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
          },
          configs: {
            'child.yaml': '''
format: 1
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
        _writePackageConfig(workspace, {
          'host_pkg': host.root,
          'base_pkg': base.root,
        });

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('child.yaml'),
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
            'map(this: object, transform: ((value: upstream0.Token) => number)): number {',
          ),
        );
      },
    );

    group('dependency Manifest2 typeLibraries resolution', () {
      test('name not exported by declared public library is FCG_RESOLUTION', () async {
        final workspace = _tempWorkspace();
        final base = _writeBaseMissingExportTypeLibraryPackage(workspace);
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          libraries: {
            'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
          },
          configs: {
            'child.yaml': '''
format: 1
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
        _writePackageConfig(workspace, {
          'host_pkg': host.root,
          'base_pkg': base.root,
        });

        try {
          await FlaxCodegenPackagePipeline.validateConfig(
            host.configPath('child.yaml'),
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
                'FCG_RESOLUTION',
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
          libraries: {
            'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
          },
          configs: {
            'child.yaml': '''
format: 1
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
        _writePackageConfig(workspace, {
          'host_pkg': host.root,
          'base_pkg': base.root,
        });

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('child.yaml'),
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
      'dependency Manifest2 preserves inherited data callback Object leaves',
      () async {
        final workspace = _tempWorkspace();
        final base = _writeBaseDataCallbackManifestPackage(workspace);
        final host = _writeHostPackage(
          workspace: workspace,
          name: 'host_pkg',
          libraries: {
            'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
          },
          configs: {
            'child.yaml': '''
format: 1
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
        _writePackageConfig(workspace, {
          'host_pkg': host.root,
          'base_pkg': base.root,
        });

        final result = await FlaxCodegenPackagePipeline.validateConfig(
          host.configPath('child.yaml'),
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
        libraries: {
          'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
        },
        configs: {
          'child.yaml': '''
format: 1
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
      _writePackageConfig(workspace, {
        'host_pkg': host.root,
        'base_pkg': base.root,
      });

      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('child.yaml'),
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
        libraries: {
          'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
        },
        configs: {
          'child.yaml': '''
format: 1
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
      _writePackageConfig(workspace, {
        'host_pkg': host.root,
        'base_pkg': base.root,
      });

      final result = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('child.yaml'),
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
            'widgets.yaml':
                '''
format: 1
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
          package.configPath('widgets.yaml'),
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
          'widgets.yaml': '''
format: 1
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
        package.configPath('widgets.yaml'),
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
            'b.yaml': _minimalConfig(
              packageName: 'host_pkg',
              name: 'same',
              library: 'package:host_pkg/b.dart',
              dartOutput: 'lib/b.g.dart',
              tsOutput: 'js/b.ts',
            ),
            'a.yaml': _minimalConfig(
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
            package.configPath('a.yaml'),
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
            'b.yaml': _minimalConfig(
              packageName: 'collide_pkg',
              name: 'beta',
              library: 'package:collide_pkg/b.dart',
              dartOutput: 'bindings/manifest.json',
              tsOutput: 'js/b.ts',
            ),
            'a.yaml': _minimalConfig(
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
        File(package.configPath('a.yaml')).writeAsStringSync(
          _minimalConfig(
            packageName: 'collide_pkg',
            name: 'alpha',
            library: 'package:collide_pkg/a.dart',
            dartOutput: 'lib/shared.g.dart',
            tsOutput: 'js/shared.ts',
          ),
        );
        File(package.configPath('b.yaml')).writeAsStringSync(
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
            package.configPath('a.yaml'),
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
          'ok.yaml': _minimalConfig(
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
          missingConfig.configPath('ok.yaml'),
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
          'ok.yaml': _minimalConfig(
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
          malformed.configPath('ok.yaml'),
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
          'a.yaml': _minimalConfig(
            packageName: 'host_pkg',
            name: 'alpha',
            library: 'package:host_pkg/a.dart',
            dartOutput: 'lib/a.g.dart',
            tsOutput: 'js/a.ts',
            imports: const ['missing_pkg'],
          ),
          'b.yaml': _minimalConfig(
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
          host.configPath('b.yaml'),
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
          'ok.yaml': _minimalConfig(
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
          mismatchHost.configPath('ok.yaml'),
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
          'ok.yaml': _minimalConfig(
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
          missingHost.configPath('ok.yaml'),
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
        libraries: {
          'child.dart': '''
import 'package:base_pkg/base.dart';

class Child extends Base {
  Child.create();
}
''',
        },
        configs: {
          'child.yaml': '''
format: 1
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
      _writePackageConfig(workspace, {
        'host_pkg': host.root,
        'base_pkg': base.root,
      });

      final validation = await FlaxCodegenPackagePipeline.validateConfig(
        host.configPath('child.yaml'),
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
      final localOnlyTs = FlaxCodegenBindingEmitter(validation.localModels)
          .typescript(validation.localModels.single);
      final withDepsTs = FlaxCodegenBindingEmitter(contextModules)
          .typescript(validation.localModels.single);
      expect(withDepsTs, contains('upstream0.StackTrace'));
      expect(localOnlyTs, isNot(equals(withDepsTs)));

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
        final emitter = FlaxCodegenBindingEmitter(contextModules);
        final staged = File(p.join(temporary.path, 'child.dart'));
        staged.writeAsStringSync(emitter.dart(module));
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
        host.configPath('child.yaml'),
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

    test('happy path writes outputs and checkConfig agrees', () async {
      final package = _tempGeneratePackage();
      final before = _packageFilesystemSnapshot(package.root);
      expect(
        File(p.join(package.root.path, 'lib', 'widgets.g.dart')).existsSync(),
        isFalse,
      );

      await FlaxCodegenPackagePipeline.generateConfig(
        package.configPath,
        processRunner: (executable, arguments) => formatRunner(
          executable,
          arguments,
          packageRoot: package.root.path,
        ),
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
        File(
          p.join(package.root.path, 'bindings', 'manifest.json'),
        ).existsSync(),
        isTrue,
      );

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
    });

    test('mid-install failure restores pre-generate filesystem snapshot', () async {
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
    });

    test('orphan owned generated files are deleted in the generate transaction', () async {
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
      final skippedRootBuild = File(
        p.join(package.root.path, 'build', 'skipped.g.dart'),
      )
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
    });

    test('ancestor symlink on expected output fails closed without writes', () async {
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
    });

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
      'extra.yaml': '''
format: 1
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
      'widgets.yaml': '''
format: 1
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
    configPath: package.configPath('widgets.yaml'),
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
      'extra.yaml': '''
format: 1
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
      'widgets.yaml': '''
format: 1
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
    package.configPath('widgets.yaml'),
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
    configPath: package.configPath('widgets.yaml'),
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
  final root = _trustedTempRoot('flax-pipeline-pkg-');
  addTearDown(() {
    if (root.existsSync()) {
      root.deleteSync(recursive: true);
    }
  });
  File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: $name
''');
  File(p.join(root.path, 'flax_package.yaml')).writeAsStringSync(
    metadata ??
        '''
format: 1
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

Directory _trustedTempRoot(String prefix) =>
    Directory(Directory.systemTemp.resolveSymbolicLinksSync())
        .createTempSync(prefix);

Directory _tempWorkspace() {
  final root = _trustedTempRoot('flax-pipeline-ws-');
  addTearDown(() {
    if (root.existsSync()) {
      root.deleteSync(recursive: true);
    }
  });
  return root;
}

({Directory root, String Function(String) configPath}) _writeHostPackage({
  required Directory workspace,
  required String name,
  required Map<String, String> configs,
  Map<String, String> libraries = const {},
}) {
  final root = Directory(p.join(workspace.path, name))..createSync();
  File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: $name
''');
  File(p.join(root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 1
capabilities:
  - bindings
bindingNamespace: example.host
''');
  final lib = Directory(p.join(root.path, 'lib'))..createSync();
  for (final entry in libraries.entries) {
    File(p.join(lib.path, entry.key)).writeAsStringSync(entry.value);
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

({Directory root, FlaxCodegenManifestV2 manifest})
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
  final manifest = FlaxCodegenManifestV2.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: package,
      namespace: ns,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: '$moduleName.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol20RequiredCapabilities(),
        ),
      ],
    ),
    modules: {moduleName: model},
    importPackageNames: const [],
  );
  File(p.join(bindings.path, 'manifest.json'))
      .writeAsStringSync(manifest.encode());
  return (root: root, manifest: manifest);
}

({Directory root, FlaxCodegenManifestV2 manifest})
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
  final manifest = FlaxCodegenManifestV2.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: package,
      namespace: ns,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: '$moduleName.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
            FlaxCodegenResolvedOwner(
              sourceIdentity: stackSource,
              wireId: stackWire,
            ),
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol20RequiredCapabilities(),
        ),
      ],
    ),
    modules: {moduleName: model},
    importPackageNames: const [],
  );
  File(p.join(bindings.path, 'manifest.json'))
      .writeAsStringSync(manifest.encode());
  return (root: root, manifest: manifest);
}

({Directory root, FlaxCodegenManifestV2 manifest})
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
  final manifest = FlaxCodegenManifestV2.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: package,
      namespace: ns,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: '$moduleName.yaml',
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
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol20RequiredCapabilities(),
        ),
      ],
    ),
    modules: {moduleName: model},
    importPackageNames: const [],
  );
  File(p.join(bindings.path, 'manifest.json'))
      .writeAsStringSync(manifest.encode());
  return (root: root, manifest: manifest);
}

({Directory root, FlaxCodegenManifestV2 manifest})
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

({Directory root, FlaxCodegenManifestV2 manifest}) _writeManifestPackage({
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
  return (root: root, manifest: manifest);
}

void _writePackageConfig(Directory workspace, Map<String, Directory> packages) {
  final tool = Directory(p.join(workspace.path, '.dart_tool'))..createSync();
  File(p.join(tool.path, 'package_config.json'))
      .writeAsStringSync(_packageConfigJson(packages, packageConfigDir: tool));
}

String _packageConfigJson(
  Map<String, Directory> packages, {
  required Directory packageConfigDir,
}) {
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

FlaxCodegenManifestV2 _manifestPackage({
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
  return FlaxCodegenManifestV2.fromResolved(
    package: FlaxCodegenResolvedPackage(
      dartPackage: package,
      namespace: ns,
      modules: [
        FlaxCodegenResolvedModule(
          moduleId: moduleId,
          source: '$moduleName.yaml',
          owners: [
            FlaxCodegenResolvedOwner(
              sourceIdentity: ownerSource,
              wireId: ownerWire,
            ),
          ],
          references: const [],
          requiredCapabilities: flaxCodegenProtocol20RequiredCapabilities(),
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
format: 1
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
