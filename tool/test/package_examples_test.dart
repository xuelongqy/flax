import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:test/test.dart';
import 'package:yaml/yaml.dart';

import '../src/package_discovery.dart';
import '../src/ui_testing.dart';

void main() {
  late Directory temporary;
  late List<(String, List<String>, String?)> commands;

  setUp(() {
    temporary = Directory.systemTemp.createTempSync('flax-example-tests-');
    commands = [];
  });
  tearDown(() => temporary.deleteSync(recursive: true));

  Future<void> record(
    String executable,
    List<String> arguments, {
    String? directory,
  }) async {
    commands.add((executable, arguments, directory));
  }

  FlaxWorkspacePackage package(String name) {
    final directory = Directory(p.join(temporary.path, 'packages', name));
    _write(directory, 'pubspec.yaml', '''
name: $name
version: 0.0.0
environment:
  sdk: ^3.13.2
''');
    _write(directory, 'flax_package.yaml', '''
format: 1
dart:
  entrypoint: package:$name/$name.dart
capabilities: [codegen]
''');
    return FlaxWorkspacePackage(name, directory);
  }

  group('Flutter example discovery', () {
    test('skips absent and empty examples', () async {
      final missing = package('missing');
      final empty = package('empty');
      empty.example.createSync();
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
      _write(nested, 'pubspec.yaml', _flutterPubspec('hermes'));
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

  for (final engine in ['hermes', 'v8']) {
    group('$engine example commands', () {
      test('runs sorted widget and macOS integration tests', () async {
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
          ['test', '--no-pub', '-d', 'macos', 'integration_test/app_test.dart'],
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
