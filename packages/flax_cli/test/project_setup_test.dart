import 'dart:convert';
import 'dart:io';

import 'package:flax_cli/src/cli.dart';
import 'package:flax_codegen/src/config.dart';
import 'package:flax_cli/src/project_setup.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';
import 'package:yaml/yaml.dart';

void main() {
  late Directory root;
  setUp(() {
    root = Directory(Directory.systemTemp.resolveSymbolicLinksSync())
        .createTempSync('flax-setup-');
    File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: sample_host
dependencies:
  flutter: {sdk: flutter}
''');
  });
  tearDown(() => root.deleteSync(recursive: true));

  test(
    'init creates working conventions once and preserves the host entry',
    () async {
      final main = File(p.join(root.path, 'lib/main.dart'));
      main.parent.createSync();
      main.writeAsStringSync('// Existing host application.\n');
      final errors = <String>[];
      expect(
        await runFlaxCli(
          ['init'],
          workingDirectory: root.path,
          writeStdout: (_) {},
          writeStderr: errors.add,
        ),
        0,
        reason: errors.join('\n'),
      );
      final pubspec = loadYaml(
        File(p.join(root.path, 'pubspec.yaml')).readAsStringSync(),
      ) as Map;
      expect(pubspec['dependencies']['flax_annotations'], '0.0.0');
      expect(pubspec['flutter']['assets'], [
        'assets/flax_modules/',
        'assets/flax/app/',
      ]);
      expect(
        File(p.join(root.path, 'flax_package.yaml')).existsSync(),
        isFalse,
      );
      expect(
        File(p.join(root.path, 'bindings/flax_app.yaml')).existsSync(),
        isFalse,
      );
      final npm = jsonDecode(
        File(p.join(root.path, 'js/package.json')).readAsStringSync(),
      );
      expect(npm['scripts']['build'], 'node build.mjs && tsc -p .');
      expect(
        File(p.join(root.path, 'js/build.mjs')).readAsStringSync(),
        contains('prepareModules()'),
      );
      expect(main.readAsStringSync(), '// Existing host application.\n');
      expect(await flaxInitializeProject(root.path), isEmpty);
    },
  );

  test('init merges missing settings without replacing custom sources and builders', () async {
    final pubspec = File(p.join(root.path, 'pubspec.yaml'));
    pubspec.writeAsStringSync(
      '${pubspec.readAsStringSync()}  flax_codegen: {path: ../existing-tool}\n'
      '  flax:\ndev_dependencies:\n  flax_annotations:\n  build_runner:\n',
    );
    File(p.join(root.path, 'flax_package.yaml')).writeAsStringSync('''
# Keep this namespace.
format: 2
bindingNamespace: my.stable.host
capabilities: [bindings]
''');
    File(p.join(root.path, 'build.yaml')).writeAsStringSync('''
# Keep other generators.
targets:
  \$default:
    sources:
      include: [lib/**]
      exclude: [test/fixtures/**]
    builders:
      other:generator: {enabled: true}
''');
    final js = Directory(p.join(root.path, 'js'))..createSync();
    File(p.join(js.path, 'package.json')).writeAsStringSync(
      jsonEncode({
        'name': 'existing-js',
        'scripts': {'build': 'vite build'},
        'dependencies': {
          '@flax/core': 'file:../my-core',
          '@flax/build': 'file:../my-build',
        },
      }),
    );
    for (final file in ['build.mjs', 'tsconfig.json']) {
      File(p.join(js.path, file))
          .writeAsStringSync('// Existing custom config.\n');
    }
    await flaxInitializeProject(root.path);
    final build = File(p.join(root.path, 'build.yaml')).readAsStringSync();
    expect(build, contains('# Keep other generators.'));
    final target = (loadYaml(build) as Map)['targets'][r'$default'];
    expect(target['sources']['exclude'], ['test/fixtures/**']);
    expect(target['builders']['other:generator']['enabled'], isTrue);
    expect(target['builders']['flax_codegen:bindings']['enabled'], isTrue);
    expect(
      File(p.join(root.path, 'flax_package.yaml')).readAsStringSync(),
      contains('my.stable.host'),
    );
    expect(
      File(p.join(js.path, 'build.mjs')).readAsStringSync(),
      '// Existing custom config.\n',
    );
    final npm = jsonDecode(
      File(p.join(js.path, 'package.json')).readAsStringSync(),
    );
    expect(npm['scripts']['build'], 'vite build');
    expect(npm['dependencies']['@flax/core'], 'file:../my-core');
    expect(npm['dependencies']['@flax/build'], 'file:../my-build');
    expect(npm['devDependencies']['@flax/build'], isNull);
    final merged = loadYaml(pubspec.readAsStringSync()) as Map;
    expect(merged['dependencies']['flax_codegen']['path'], '../existing-tool');
    expect(merged['dev_dependencies']['flax_codegen'], isNull);
    expect(merged['dependencies']['flax'], isNull);
    expect(merged['dev_dependencies']['flax_annotations'], isNull);
    expect(merged['dev_dependencies']['build_runner'], isNull);
    expect(
      (merged['dependencies'] as Map).containsKey('flax_annotations'),
      isFalse,
    );
  });

  test(
    'setup preserves implicit Builder sources and validates scope exclusions',
    () async {
      final build = File(p.join(root.path, 'build.yaml'));
      for (final setting in [
        '',
        'sources: []',
        'sources: {exclude: [test/fixtures/**]}',
      ]) {
        build.writeAsStringSync('targets:\n  \$default:\n    $setting\n');
        await flaxInitializeProject(root.path);
        flaxSynchronizeLegacyProject(root.path, flaxCodegenDefaultOutputs);
        final target =
            (loadYaml(build.readAsStringSync()) as Map)['targets'][r'$default'];
        final sources = target['sources'];
        final includes = sources is Map ? sources['include'] : sources;
        expect(
          includes,
          containsAll(['bin/**', 'web/**', 'tool/**', 'pubspec.lock']),
        );
        if (sources is Map) expect(sources['exclude'], ['test/fixtures/**']);
      }
      final scope = File(p.join(root.path, 'bindings/flax_app.yaml'));
      scope.parent.createSync();
      scope.writeAsStringSync('format: 2\n');
      build.writeAsStringSync('''
targets:
  \$default:
    sources: {include: [lib/**], exclude: [bindings/**]}
''');
      final before = build.readAsStringSync();
      expect(
        () =>
            flaxSynchronizeLegacyProject(root.path, flaxCodegenDefaultOutputs),
        throwsFormatException,
      );
      expect(build.readAsStringSync(), before);
    },
  );

  test(
    'init rejects directory collisions before modifying the project',
    () async {
      Directory(p.join(root.path, 'js/tsconfig.json'))
          .createSync(recursive: true);
      final pubspec = File(p.join(root.path, 'pubspec.yaml'));
      final before = pubspec.readAsStringSync();
      await expectLater(
        flaxInitializeProject(root.path),
        throwsA(isA<FileSystemException>()),
      );
      expect(pubspec.readAsStringSync(), before);
      expect(
        File(p.join(root.path, 'flax_package.yaml')).existsSync(),
        isFalse,
      );
    },
  );

  test('setup preserves projects using only named Builder targets', () async {
    final build = File(p.join(root.path, 'build.yaml'));
    const custom = 'targets:\n  frontend:\n    sources: [web/**]\n';
    build.writeAsStringSync(custom);
    await expectLater(flaxInitializeProject(root.path), throwsFormatException);
    expect(build.readAsStringSync(), custom);
    expect(
      () => flaxSynchronizeLegacyProject(root.path, flaxCodegenDefaultOutputs),
      throwsFormatException,
    );
    expect(build.readAsStringSync(), custom);
  });

  test('sync owns only Flax outputs and returns to default app conventions', () {
    File(p.join(root.path, 'build.yaml')).writeAsStringSync('''
targets:
  \$default:
    builders:
      other:generator: {enabled: true}
''');
    final outputs = [
      ...flaxCodegenDefaultOutputs,
      'lib/custom/admin.g.dart',
      'lib/flax_bindings/admin.dart',
      'js/admin.ts',
      'bindings/manifest.json',
      flaxCodegenJsBuildPlan,
    ];
    flaxSynchronizeLegacyProject(root.path, outputs);
    Map<dynamic, dynamic> config() =>
        loadYaml(File(p.join(root.path, 'build.yaml')).readAsStringSync())
            as Map;
    final builders = config()['targets'][r'$default']['builders'];
    expect(
      builders['flax_codegen:bindings']['options']['outputs'],
      hasLength(7),
    );
    expect(builders['other:generator']['enabled'], isTrue);
    expect(flaxSynchronizeLegacyProject(root.path, outputs), isEmpty);
    flaxSynchronizeLegacyProject(root.path, flaxCodegenDefaultOutputs);
    expect(
      config()['targets'][r'$default']['builders']['flax_codegen:bindings']['options']['outputs'],
      isNull,
    );
  });

  test('sync checks global output overrides and updates local build modes', () {
    final build = File(p.join(root.path, 'build.yaml'));
    for (final mode in ['options', 'dev_options', 'release_options']) {
      final original =
          '''
global_options:
  flax_codegen:bindings:
    $mode: {outputs: [lib/stale.g.dart]}
''';
      build.writeAsStringSync(original);
      expect(
        () =>
            flaxSynchronizeLegacyProject(root.path, flaxCodegenDefaultOutputs),
        throwsFormatException,
      );
      expect(build.readAsStringSync(), original);
    }
    for (final configured in [flaxCodegenDefaultOutputs, null]) {
      build.writeAsStringSync(
        jsonEncode({
          'global_options': {
            'flax_codegen:bindings': {
              'options': {'outputs': configured},
            },
          },
        }),
      );
      flaxSynchronizeLegacyProject(root.path, flaxCodegenDefaultOutputs);
      final global =
          (loadYaml(build.readAsStringSync()) as Map)['global_options'];
      expect(global['flax_codegen:bindings']['options']['outputs'], configured);
    }
    expect(
      () => flaxSynchronizeLegacyProject(root.path, [
        ...flaxCodegenDefaultOutputs,
        'lib/extra.g.dart',
      ]),
      throwsFormatException,
    );
    build.writeAsStringSync('''
global_options:
  other:generator: {options: {keep: true}}
targets:
  \$default:
    builders:
      flax_codegen:bindings:
        dev_options: {outputs: null}
        release_options: {outputs: [lib/stale.g.dart]}
''');
    flaxSynchronizeLegacyProject(root.path, flaxCodegenDefaultOutputs);
    final result = loadYaml(build.readAsStringSync()) as Map;
    final builder =
        result['targets'][r'$default']['builders']['flax_codegen:bindings'];
    for (final mode in ['dev_options', 'release_options']) {
      expect(
        builder[mode]['outputs'],
        unorderedEquals(flaxCodegenDefaultOutputs),
      );
    }
    expect(
      result['global_options']['other:generator']['options']['keep'],
      isTrue,
    );
    expect(
      flaxSynchronizeLegacyProject(root.path, flaxCodegenDefaultOutputs),
      isEmpty,
    );
  });

  test(
    'init rejects excluded metadata and symlink destinations before writing',
    () async {
      final before = File(p.join(root.path, 'pubspec.yaml')).readAsStringSync();
      final build = File(p.join(root.path, 'build.yaml'));
      build.writeAsStringSync('''
targets:
  \$default:
    sources: {include: [lib/**], exclude: [flax_package.yaml]}
''');
      await expectLater(
        flaxInitializeProject(root.path),
        throwsFormatException,
      );
      expect(
        File(p.join(root.path, 'pubspec.yaml')).readAsStringSync(),
        before,
      );
      build.deleteSync();
      if (!Platform.isWindows) {
        final outside = Directory(p.join(root.path, 'outside'))..createSync();
        Link(p.join(root.path, 'js')).createSync(outside.path);
        await expectLater(
          flaxInitializeProject(root.path),
          throwsA(isA<FileSystemException>()),
        );
        expect(
          File(p.join(root.path, 'pubspec.yaml')).readAsStringSync(),
          before,
        );
        expect(outside.listSync(), isEmpty);
      }
    },
  );
}
