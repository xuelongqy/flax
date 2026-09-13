import 'dart:io';

import 'package:flax_codegen/src/cli.dart';
import 'package:flax_codegen/src/package_pipeline.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  group('parseFlaxCodegenCliArgs', () {
    test('accepts validate|check|generate --config <path>', () {
      for (final command in const ['validate', 'check', 'generate']) {
        final parsed = parseFlaxCodegenCliArgs([
          command,
          '--config',
          'bindings/widgets.yaml',
        ]);
        expect(parsed.command, command);
        expect(parsed.configPath, 'bindings/widgets.yaml');
      }
    });

    test('rejects the old [--check] <config> form', () {
      for (final arguments in const [
        ['bindings/widgets.yaml'],
        ['--check', 'bindings/widgets.yaml'],
        ['--check'],
        ['widgets.yml'],
        ['check', '--check', '--config', 'bindings/widgets.yaml'],
      ]) {
        expect(
          () => parseFlaxCodegenCliArgs(arguments),
          throwsA(
            isA<FlaxCodegenCliUsageException>().having(
              (error) => error.message,
              'message',
              contains('The old "[--check] <config>" form is not supported.'),
            ),
          ),
          reason: 'arguments=$arguments',
        );
      }
    });

    test('rejects unknown commands and malformed --config usage', () {
      for (final arguments in const [
        <String>[],
        ['unknown', '--config', 'bindings/widgets.yaml'],
        ['validate'],
        ['validate', 'bindings/widgets.yaml'],
        ['validate', '--config'],
        ['validate', '--config', '--flag'],
        ['check', '--config', 'a.yaml', 'extra'],
        ['generate', '-c', 'bindings/widgets.yaml'],
      ]) {
        expect(
          () => parseFlaxCodegenCliArgs(arguments),
          throwsA(
            isA<FlaxCodegenCliUsageException>().having(
              (error) => error.message,
              'message',
              contains(flaxCodegenCliUsage),
            ),
          ),
          reason: 'arguments=$arguments',
        );
      }
    });
  });

  group('runFlaxCodegenCli', () {
    test('validate / generate / check happy paths on one package', () async {
      final package = _tempCliPackage();
      final stdout = <String>[];
      final stderr = <String>[];

      final validateCode = await runFlaxCodegenCli(
        ['validate', '--config', package.configPath],
        writeStdout: stdout.add,
        writeStderr: stderr.add,
      );
      expect(validateCode, 0);
      expect(stderr, isEmpty);
      expect(
        stdout.single,
        'Validated package cli_pkg (2 configs, 5 outputs).',
      );
      stdout.clear();

      final generateCode = await runFlaxCodegenCli(
        ['generate', '--config', package.configPath],
        writeStdout: stdout.add,
        writeStderr: stderr.add,
      );
      expect(generateCode, 0);
      expect(stderr, isEmpty);
      expect(
        stdout.single,
        'Generated selected Dart, TypeScript, and manifest bindings.',
      );
      expect(
        File(p.join(package.root.path, 'lib', 'widgets.g.dart')).existsSync(),
        isTrue,
      );
      expect(
        File(p.join(package.root.path, 'bindings', 'manifest.json')).existsSync(),
        isTrue,
      );
      stdout.clear();

      final checkCode = await runFlaxCodegenCli(
        ['check', '--config', package.configPath],
        writeStdout: stdout.add,
        writeStderr: stderr.add,
      );
      expect(checkCode, 0);
      expect(stderr, isEmpty);
      expect(stdout.single, 'Generated bindings and manifests are reproducible.');

      await FlaxCodegenPackagePipeline.checkConfig(package.configPath);
    });

    test('old invocation returns exit 1 with usage and no package mutation', () async {
      final package = _tempCliPackage();
      final before = _listing(package.root);
      final stderr = <String>[];

      final code = await runFlaxCodegenCli(
        ['--check', package.configPath],
        writeStdout: (_) => fail('stdout must stay empty'),
        writeStderr: stderr.add,
      );

      expect(code, 1);
      expect(stderr.single, contains('The old "[--check] <config>" form'));
      expect(stderr.single, contains(flaxCodegenCliUsage));
      expect(_listing(package.root), before);
    });

    test('pipeline failure prints diagnostics and returns exit 1', () async {
      final package = _tempCliPackage();
      final missing = p.join(package.root.path, 'bindings', 'missing.yaml');
      final stderr = <String>[];

      final code = await runFlaxCodegenCli(
        ['validate', '--config', missing],
        writeStdout: (_) => fail('stdout must stay empty'),
        writeStderr: stderr.add,
      );

      expect(code, 1);
      expect(stderr, isNotEmpty);
      expect(stderr.join('\n'), contains('FCG_PATH'));
      expect(stderr.join('\n'), contains('Cannot read file.'));
    });
  });
}

({Directory root, String configPath}) _tempCliPackage() {
  final root = Directory(
    Directory.systemTemp.resolveSymbolicLinksSync(),
  ).createTempSync('flax-cli-pkg-');
  addTearDown(() {
    if (root.existsSync()) {
      root.deleteSync(recursive: true);
    }
  });
  File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: cli_pkg
''');
  File(p.join(root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 1
capabilities:
  - bindings
bindingNamespace: example.cli
''');
  Directory(p.join(root.path, 'lib')).createSync();
  File(p.join(root.path, 'lib', 'widgets.dart')).writeAsStringSync('''
class Counter {
  Counter.create();
}
''');
  File(p.join(root.path, 'lib', 'extra.dart')).writeAsStringSync('''
class Extra {
  Extra.create();
}
''');
  final bindings = Directory(p.join(root.path, 'bindings'))..createSync();
  File(p.join(bindings.path, 'extra.yaml')).writeAsStringSync('''
format: 1
name: extra
library: package:cli_pkg/extra.dart
jsPackage: '@cli/extra'
dartOutput: lib/extra.g.dart
tsOutput: js/extra.ts
classes:
  Extra:
    kind: object
    constructors:
      create: []
''');
  File(p.join(bindings.path, 'widgets.yaml')).writeAsStringSync('''
format: 1
name: widgets
library: package:cli_pkg/widgets.dart
jsPackage: '@cli/widgets'
dartOutput: lib/widgets.g.dart
tsOutput: js/widgets.ts
classes:
  Counter:
    kind: object
    constructors:
      create: []
''');
  final tool = Directory(p.join(root.path, '.dart_tool'))..createSync();
  File(p.join(tool.path, 'package_config.json')).writeAsStringSync('''
{
  "configVersion": 2,
  "packages": [
    {
      "name": "cli_pkg",
      "rootUri": "../",
      "packageUri": "lib/"
    }
  ]
}
''');
  return (
    root: root,
    configPath: p.normalize(p.join(bindings.path, 'widgets.yaml')),
  );
}

List<String> _listing(Directory root) {
  final entries = <String>[];
  void walk(Directory directory) {
    for (final entity in directory.listSync(followLinks: false).toList()
      ..sort((left, right) => left.path.compareTo(right.path))) {
      entries.add(entity.path);
      final type = FileSystemEntity.typeSync(entity.path, followLinks: false);
      if (type == FileSystemEntityType.directory) {
        walk(Directory(entity.path));
      }
    }
  }

  walk(root);
  return entries;
}
