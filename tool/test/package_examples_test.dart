import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:test/test.dart';
import 'package:yaml/yaml.dart';

import '../example_run.dart' as example_run;
import '../src/package_discovery.dart';
import '../src/ui_testing.dart';
import '../src/platform_selection.dart';
import '../src/package_verification.dart';
import '../src/example_engine.dart';

void main() {
  late Directory temporary;
  late List<(String, List<String>, String?)> commands;

  setUp(() {
    temporary = Directory.systemTemp.createTempSync('flax-example-tests-');
    commands = [];
  });
  tearDown(() => temporary.deleteSync(recursive: true));

  test('example copies declared business roots outside assets', () {
    final source = Directory('${temporary.path}/source')..createSync();
    final target = Directory('${temporary.path}/target');
    _write(source, 'assets/flax_modules/modules.json', '{}');
    _write(source, 'flax/flax.json', '{"id":"main"}');
    _write(source, 'flax/assets/data.json', '{}');
    _write(source, 'config.json', '{}');
    copyExampleAssets(source, target, {
      'flutter': {
        'assets': [
          'flax/',
          {'path': 'flax/assets/'},
          'config.json',
          '../outside/',
        ],
      },
    });
    expect(File('${target.path}/flax/flax.json').existsSync(), isTrue);
    expect(File('${target.path}/flax/assets/data.json').existsSync(), isTrue);
    expect(
      File('${target.path}/assets/flax_modules/modules.json').existsSync(),
      isTrue,
    );
    expect(File('${target.path}/config.json').existsSync(), isTrue);
  });

  test('nested consumer directive relocation is idempotent and preserves IDs', () {
    final consumer = Directory('${temporary.path}/consumer')..createSync();
    final original = '${temporary.absolute.uri}fixture.dart';
    final file = File('${consumer.path}/bindings.dart')
      ..writeAsStringSync("import '$original';\nconst id = '$original';\n");
    rewriteDartDirectiveUris(consumer, temporary, consumer);
    final once = file.readAsStringSync();
    rewriteDartDirectiveUris(consumer, temporary, consumer);
    expect(file.readAsStringSync(), once);
    expect(once, contains("const id = '$original';"));
    expect(
      once,
      contains(
        "import '${Directory(consumer.resolveSymbolicLinksSync()).uri}fixture.dart';",
      ),
    );
  });

  Future<void> record(
    String executable,
    List<String> arguments, {
    String? directory,
  }) async {
    commands.add((executable, arguments, directory));
  }

  FlaxWorkspacePackage package(
    String name, {
    List<String> dependencies = const [],
  }) {
    final directory = Directory(p.join(temporary.path, 'packages', name));
    _write(directory, 'pubspec.yaml', '''
name: $name
version: 0.0.0
environment:
  sdk: ^3.13.2
''');
    if (dependencies.isNotEmpty) {
      File(p.join(directory.path, 'pubspec.yaml')).writeAsStringSync(
        'dependencies:\n'
        '${dependencies.map((name) => '  $name: 0.0.0').join('\n')}\n',
        mode: FileMode.append,
      );
    }
    _write(directory, 'flax_package.yaml', '''
format: 2
dart:
  entrypoint: package:$name/$name.dart
capabilities: [codegen]
''');
    Directory('${directory.path}/example/${currentCheckTarget().os}')
        .createSync(recursive: true);
    return FlaxWorkspacePackage(name, directory);
  }

  test('staged Dart packages retain shared Flutter assets', () {
    final owner = package('flax_sandbox_example');
    _write(owner.directory, 'README.md', '# Sandbox example\n');
    _write(owner.directory, 'lib/flax_sandbox_example.dart', 'library;\n');
    final payload = [0x50, 0x4b, 0x03, 0x04, 0x00, 0xff];
    final archive = File('${owner.directory.path}/assets/app.flax');
    archive.parent.createSync(recursive: true);
    archive.writeAsBytesSync(payload);
    File('${owner.directory.path}/pubspec.yaml').writeAsStringSync(
      'flutter:\n  assets:\n    - assets/app.flax\n',
      mode: FileMode.append,
    );
    final target = Directory('${temporary.path}/consumer/packages');
    copyDartPackages(temporary, target, [owner.name]);
    expect(
      File('${target.path}/${owner.name}/assets/app.flax').readAsBytesSync(),
      payload,
    );
  });

  test('launch preparation builds only the selected package example', () async {
    final material = package('flax_material_ui');
    _write(material.example, 'pubspec.yaml', _flutterPubspec('v8'));
    _write(material.example, 'js/package.json', '''
{"name":"@flax/example-material-ui"}
''');
    package('flax_cupertino_ui');
    final selected = await example_run.prepareExample(
      temporary.path,
      packageName: material.name,
      runCommand: record,
    );
    expect(selected!.directory.path, material.directory.path);
    expect(commands.map((c) => [c.$1, ...c.$2]), [
      [
        'pnpm',
        '--reporter=append-only',
        '--workspace-concurrency=1',
        '--filter',
        '@flax/example-material-ui...',
        'run',
        'build',
      ],
      ['node', 'tool/example_bundle.mjs', '--package', 'flax_material_ui'],
    ]);
    expect(commands.every((c) => c.$3 == temporary.path), isTrue);
  });

  test(
    'gallery launch prepares the aggregate without other entrypoints',
    () async {
      _write(temporary, 'examples/embedded/js/package.json', '''
{"name":"@flax/example-embedded"}
''');
      expect(
        await example_run.prepareExample(temporary.path, runCommand: record),
        isNull,
      );
      expect(commands.map((c) => [c.$1, ...c.$2]), [
        [
          'pnpm',
          '--reporter=append-only',
          '--workspace-concurrency=1',
          '--filter',
          '@flax/example-embedded...',
          'run',
          'build',
        ],
        ['node', 'tool/example_bundle.mjs', '--aggregate'],
      ]);
    },
  );

  test('invalid example selections fail before building anything', () async {
    package('no_example');
    for (final entry in {
      'no_example': throwsArgumentError,
      'unknown': throwsStateError,
    }.entries) {
      await expectLater(
        example_run.prepareExample(
          temporary.path,
          packageName: entry.key,
          runCommand: record,
        ),
        entry.value,
      );
    }
    expect(commands, isEmpty);
  });

  test(
    'binding owners follow Pub dependencies rather than discovery order',
    () {
      final core = package('flax');
      final provider = package('z_provider', dependencies: ['flax']);
      final consumer = package(
        'a_consumer',
        dependencies: ['z_provider', 'flax', 'external_package'],
      );
      package('m_support', dependencies: ['z_provider']);
      final indirect = package(
        'b_indirect',
        dependencies: ['m_support', 'flax'],
      );
      for (final owner in [consumer, indirect, provider, core]) {
        _write(owner.directory, 'bindings/flax_bindings.yaml', '');
      }
      File(p.join(core.directory.path, 'pubspec.yaml')).writeAsStringSync(
        'dev_dependencies:\n  a_consumer: 0.0.0\n',
        mode: FileMode.append,
      );
      final discovered = discoverPackages(temporary.path);
      const discoveryOrder = [
        'a_consumer',
        'b_indirect',
        'flax',
        'm_support',
        'z_provider',
      ];
      expect(discovered.map((package) => package.name), discoveryOrder);
      for (final input in [discovered, discovered.reversed]) {
        expect(
          bindingPackagesInDependencyOrder(input)
              .map((package) => package.name),
          ['flax', 'z_provider', 'a_consumer', 'b_indirect'],
        );
      }
      expect(discovered.map((package) => package.name), discoveryOrder);
    },
  );

  test('binding package cycles fail with the dependency path', () {
    final first = package('a_owner', dependencies: ['z_owner']);
    final second = package('z_owner', dependencies: ['a_owner']);
    for (final owner in [first, second]) {
      _write(owner.directory, 'bindings/flax_bindings.yaml', '');
    }
    expect(
      () => bindingPackagesInDependencyOrder([second, first]),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'message',
          'Cyclic binding package dependencies: a_owner -> z_owner -> a_owner',
        ),
      ),
    );
  });

  group('Flutter example discovery', () {
    test('binding discovery ignores unrelated YAML and reserved overrides', () {
      final owner = package('binding_names');
      for (final name in [
        'flax_bindings.yaml',
        'flax_components.yml',
        'config.yaml',
        'notes.yaml',
        'flax_overrides.yaml',
      ]) {
        _write(owner.directory, 'bindings/$name', '');
      }
      expect(bindingConfigs(owner).map(p.basename), [
        'flax_bindings.yaml',
        'flax_components.yml',
      ]);
    });

    test('skips absent and empty examples', () async {
      final missing = package('missing');
      final empty = package('empty');
      empty.example.createSync(recursive: true);
      expect(missing.hasFlutterExample, isFalse);
      expect(empty.hasFlutterExample, isFalse);
      expect(
        await runAllPackageExamples(temporary.path, runCommand: record),
        0,
      );
      expect(commands, isEmpty);
    });

    test('does not descend into a template container', () async {
      final container = package('template_container');
      final nested = Directory(
        p.join(container.example.path, 'author_template'),
      );
      _write(nested, 'pubspec.yaml', _flutterPubspec('v8'));
      _write(nested, 'test/widget_test.dart', '');
      expect(container.hasFlutterExample, isFalse);
      expect(
        await runPackageExampleTests(
          temporary.path,
          container,
          runCommand: record,
        ),
        0,
      );
      expect(
        await runAllPackageExamples(temporary.path, runCommand: record),
        0,
      );
      expect(commands, isEmpty);
    });

    test(
      'requires a Flutter SDK dependency, not only a version constraint',
      () async {
        final plain = package('plain_dart');
        _write(plain.example, 'pubspec.yaml', '''
name: plain_example
environment:
  sdk: ^3.13.2
  flutter: '>=3.47.2'
dependencies:
  collection: any
''');
        _write(plain.example, 'test/example_test.dart', '');
        expect(plain.hasFlutterExample, isFalse);
        expect(
          await runAllPackageExamples(temporary.path, runCommand: record),
          0,
        );
        expect(commands, isEmpty);
      },
    );

    test('propagates malformed root manifests', () async {
      final invalid = package('invalid');
      _write(invalid.example, 'pubspec.yaml', '[\n');
      expect(() => invalid.hasFlutterExample, throwsA(isA<YamlException>()));
      await expectLater(
        runAllPackageExamples(temporary.path, runCommand: record),
        throwsA(isA<YamlException>()),
      );
      expect(commands, isEmpty);
    });
  });

  test(
    'stages a missing platform project without modifying the source example',
    () async {
      final engine = package('flax_engine_v8');
      _write(engine.directory, 'README.md', '# Fixture');
      _write(
        engine.directory,
        'lib/flax_engine_v8.dart',
        'class FlaxV8Engine {}',
      );
      final runnable = package('runnable');
      Directory('${runnable.example.path}/${currentCheckTarget().os}')
          .deleteSync(recursive: true);
      _write(runnable.example, 'pubspec.yaml', _flutterPubspec('v8'));
      _write(runnable.example, 'test/widget_test.dart', '');
      final before = File('${runnable.example.path}/pubspec.yaml')
          .readAsStringSync();
      expect(
        await runPackageExampleTests(
          temporary.path,
          runnable,
          engine: 'v8',
          runCommand: record,
        ),
        1,
      );
      expect(
        commands.first.$2,
        contains('--platforms=${currentCheckTarget().os}'),
      );
      expect(commands.map((c) => c.$2.first), ['create', 'pub', 'test']);
      expect(commands.first.$2, contains('--empty'));
      expect(commands.last.$3, isNot(runnable.example.path));
      expect(
        File('${runnable.example.path}/pubspec.yaml').readAsStringSync(),
        before,
      );
    },
  );

  const engine = 'v8';
  group('$engine example commands', () {
    test(
      'application staging excludes the test plugin and preserves source',
      () async {
        final runtime = package('flax_engine_$engine');
        _write(runtime.directory, 'README.md', '# Test runtime');
        _write(
          runtime.directory,
          'lib/flax_engine_$engine.dart',
          'class FlaxV8Engine {}',
        );
        final runnable = package('runnable');
        final support = package('fixture_support');
        _write(support.directory, 'README.md', '# Fixture support');
        final original = '''${_flutterPubspec(engine)}
dev_dependencies:
  fixture_support: 0.0.0
  flutter_test:
    sdk: flutter
  integration_test:
    sdk: flutter
''';
        _write(runnable.example, 'pubspec.yaml', original);
        await withPackageExample(
          temporary.path,
          runnable,
          engine,
          (staged) async {
            expect(staged, isNot(runnable.example.path));
            final manifest = readYamlFile(File('$staged/pubspec.yaml'));
            expect(manifest['dev_dependencies'], contains('flutter_test'));
            final support = manifest['dev_dependencies']['fixture_support'];
            expect(support['path'], '../packages/fixture_support');
            expect(
              Directory('$staged/${support['path']}').existsSync(),
              isTrue,
            );
            expect(
              manifest['dependencies'],
              isNot(contains('fixture_support')),
            );
            expect(
              manifest['dev_dependencies'],
              isNot(contains('integration_test')),
            );
          },
          forApplication: true,
          runCommand: record,
        );
        expect(
          File('${runnable.example.path}/pubspec.yaml').readAsStringSync(),
          original,
        );
        expect(commands.last.$2, ['pub', 'get']);
      },
    );

    test('runs sorted widget and current-platform integration tests', () async {
      final runnable = package('runnable');
      _write(runnable.example, 'pubspec.yaml', _flutterPubspec(engine));
      _write(runnable.example, 'test/z_test.dart', '');
      _write(runnable.example, 'test/a_test.dart', '');
      _write(runnable.example, 'test/helper.dart', '');
      _write(runnable.example, 'integration_test/app_test.dart', '');
      expect(runnable.hasFlutterExample, isTrue);
      expect(
        await runPackageExampleTests(
          temporary.path,
          runnable,
          engine: engine,
          runCommand: record,
        ),
        3,
      );
      expect(commands.map((call) => call.$1), ['flutter', 'flutter']);
      expect(commands.map((call) => call.$2), [
        ['test', '--no-pub', 'test/a_test.dart', 'test/z_test.dart'],
        [
          'test',
          '--no-pub',
          '-d',
          currentCheckDevice(),
          'integration_test/app_test.dart',
        ],
      ]);
      expect(
        commands.map((call) => call.$3),
        everyElement(runnable.example.path),
      );
    });

    test(
      'aggregate runs valid examples alongside template containers',
      () async {
        final container = package('a_template');
        _write(
          container.example,
          'author_template/pubspec.yaml',
          _flutterPubspec(engine),
        );
        final runnable = package('b_runnable');
        _write(runnable.example, 'pubspec.yaml', _flutterPubspec(engine));
        _write(runnable.example, 'test/widget_test.dart', '');
        expect(
          await runAllPackageExamples(
            temporary.path,
            engine: engine,
            runCommand: record,
          ),
          1,
        );
        expect(commands.single.$3, runnable.example.path);
      },
    );

    test('aggregate preserves a real command failure', () async {
      final runnable = package('runnable');
      _write(runnable.example, 'pubspec.yaml', _flutterPubspec(engine));
      _write(runnable.example, 'test/widget_test.dart', '');
      _write(runnable.example, 'integration_test/app_test.dart', '');
      final failure = ProcessException('flutter', ['test'], 'failed', 7);
      await expectLater(
        runAllPackageExamples(
          temporary.path,
          engine: engine,
          runCommand: (executable, arguments, {directory}) async {
            await record(executable, arguments, directory: directory);
            throw failure;
          },
        ),
        throwsA(same(failure)),
      );
      expect(commands, hasLength(1));
    });
  });
}

void _write(Directory directory, String path, String content) {
  final file = File(p.join(directory.path, path));
  file.parent.createSync(recursive: true);
  file.writeAsStringSync(content);
}

String _flutterPubspec(String engine) =>
    '''
name: runnable_example
dependencies:
  flutter:
    sdk: flutter
  flax_engine_$engine: 0.0.0
''';
