import 'dart:convert';
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

    test('accepts validate|check|generate --library <uri>', () {
      for (final command in const ['validate', 'check', 'generate']) {
        final parsed = parseFlaxCodegenCliArgs([
          command,
          '--library',
          'package:cli_pkg/widgets.dart',
        ]);
        expect(parsed.command, command);
        expect(parsed.configPath, isNull);
        expect(parsed.library, 'package:cli_pkg/widgets.dart');
        expect(parsed.automatic, isTrue);
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
      expect(validateCode, 0, reason: stderr.join('\n'));
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
      expect(generateCode, 0, reason: stderr.join('\n'));
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
        File(p.join(package.root.path, 'bindings', 'manifest.json'))
            .existsSync(),
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
      expect(
        stdout.single,
        'Generated bindings and manifests are reproducible.',
      );

      await FlaxCodegenPackagePipeline.checkConfig(package.configPath);
    });

    test('automatic library mode discovers and generates public API', () async {
      final package = _tempCliPackage();
      File(package.configPath).deleteSync();
      File(p.join(package.root.path, 'bindings', 'extra.yaml')).deleteSync();
      final stdout = <String>[];
      final stderr = <String>[];
      const library = 'package:cli_pkg/widgets.dart';

      final validateCode = await runFlaxCodegenCli(
        ['validate', '--library', library],
        workingDirectory: package.root.path,
        writeStdout: stdout.add,
        writeStderr: stderr.add,
      );
      expect(validateCode, 0, reason: 'stderr=${stderr.join('\n')}');
      expect(stderr, isEmpty);
      expect(
        stdout.first,
        contains('Validated automatic bindings for cli_pkg'),
      );
      expect(
        stdout,
        contains('NOTE oldGreet: Deprecated API remains selected'),
      );
      stdout.clear();

      final generateCode = await runFlaxCodegenCli(
        ['generate', '--library', library],
        workingDirectory: package.root.path,
        writeStdout: stdout.add,
        writeStderr: stderr.add,
      );
      expect(generateCode, 0, reason: 'stderr=${stderr.join('\n')}');
      expect(stderr, isEmpty);
      expect(
        stdout.first,
        contains('Generated automatic bindings for cli_pkg'),
      );
      final dartOutput = File(
        p.join(
          package.root.path,
          'lib',
          'src',
          'generated',
          'widgets_bindings.g.dart',
        ),
      );
      final tsOutput = File(
        p.join(package.root.path, 'js', 'src', 'generated', 'bindings.ts'),
      );
      expect(dartOutput.existsSync(), isTrue);
      expect(tsOutput.existsSync(), isTrue);
      expect(tsOutput.readAsStringSync(), contains('Counter'));
      expect(tsOutput.readAsStringSync(), contains('Mode'));
      expect(tsOutput.readAsStringSync(), contains('NameTransform'));
      expect(tsOutput.readAsStringSync(), contains('greet'));
      expect(tsOutput.readAsStringSync(), contains('oldGreet'));
      expect(tsOutput.readAsStringSync(), contains('defaultLimit'));
      expect(tsOutput.readAsStringSync(), contains('setWriteOnly'));
      stdout.clear();

      final checkCode = await runFlaxCodegenCli(
        ['check', '--library', library],
        workingDirectory: package.root.path,
        writeStdout: stdout.add,
        writeStderr: stderr.add,
      );
      expect(checkCode, 0);
      expect(stderr, isEmpty);
      expect(stdout.first, contains('Checked automatic bindings for cli_pkg'));
    });

    test(
      'automatic library mode can bind a dependency public library',
      () async {
        final package = _tempCliPackage();
        final stdout = <String>[];
        final stderr = <String>[];

        final code = await runFlaxCodegenCli(
          ['generate', '--library', 'package:api_pkg/api.dart'],
          workingDirectory: package.root.path,
          writeStdout: stdout.add,
          writeStderr: stderr.add,
        );

        expect(code, 0, reason: 'stderr=${stderr.join('\n')}');
        expect(stderr, isEmpty);
        expect(
          stdout.first,
          contains('Generated automatic bindings for cli_pkg'),
        );
        final tsOutput = File(
          p.join(package.root.path, 'js', 'src', 'generated', 'bindings.ts'),
        ).readAsStringSync();
        expect(tsOutput, contains('ExternalCounter'));
      },
    );

    test(
      'automatic library mode applies partial overrides and excludes',
      () async {
        final package = _tempCliPackage();
        File(p.join(package.root.path, 'bindings', 'overrides.yaml'))
            .writeAsStringSync('''
format: 1
overrides:
  classes:
    GenericBox:
      typeArguments: [String]
  exclude: [legacyHelper]
''');

        final validation = await FlaxCodegenPackagePipeline.validateLibrary(
          'package:cli_pkg/widgets.dart',
          packageRoot: package.root.path,
        );
        final module = validation.localModels.single;
        final box = module.classes.singleWhere(
          (type) => type.name == 'GenericBox',
        );
        expect(box.typeArguments, ['String']);
        expect(box.constructors, isNotEmpty);
        expect(
          module.functions.map((function) => function.call.name),
          isNot(contains('legacyHelper')),
        );
        expect(
          validation.skips
              .where((skip) => skip.target == 'legacyHelper')
              .single
              .reason,
          'Excluded by auto override',
        );
      },
    );

    test(
      'automatic library mode reuses Flutter providers and Widget semantics',
      () async {
        final package = _tempWidgetCliPackage();
        final validation = await FlaxCodegenPackagePipeline.validateLibrary(
          'package:widget_cli_pkg/widget_package.dart',
          packageRoot: package.path,
        );
        final module = validation.localModels.single;
        expect(
          module.functions.single.call.parameters.map((p) => p.name),
          containsAll(['context', 'builder', 'rootNavigator']),
        );
        expect(module.functions.single.route, isNotNull);

        final list = module.classes.singleWhere(
          (type) => type.name == 'AutoList',
        );
        final itemBuilder = list.constructors.single.parameters.singleWhere(
          (parameter) => parameter.name == 'itemBuilder',
        );
        expect(itemBuilder.independentWidgetResult, isFalse);

        final bar = module.classes.singleWhere(
          (type) => type.name == 'AutoBar',
        );
        expect(
          bar.widgetInterfaces.map((type) => type.name),
          contains('PreferredSizeWidget'),
        );
        expect(validation.directDependencies.keys, contains('flax'));
      },
    );

    test(
      'old invocation returns exit 1 with usage and no package mutation',
      () async {
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
      },
    );

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
  final root = Directory(Directory.systemTemp.resolveSymbolicLinksSync())
      .createTempSync('flax-cli-pkg-');
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
dart:
  entrypoint: package:cli_pkg/widgets.dart
javascript:
  package: '@cli/auto'
  version: same
  mode: runtime
capabilities:
  - bindings
bindingNamespace: example.cli
''');
  Directory(p.join(root.path, 'lib')).createSync();
  File(p.join(root.path, 'lib', 'widgets.dart')).writeAsStringSync('''
typedef NameTransform = String Function(String value);

enum Mode { compact, expanded }

const defaultLimit = 20;
int mutableLimit = 1;
set writeOnly(int value) { mutableLimit = value; }

String greet(String name) => 'Hello \$name';
@Deprecated('Use greet')
String oldGreet(String name) => greet(name);
String legacyHelper() => 'legacy';

class Counter {
  Counter.create();
}

class GenericBox<T> {
  GenericBox(this.value);
  final T value;
}

class StringBoxUse {
  StringBoxUse(this.value);
  final GenericBox<String> value;
}

class IntBoxUse {
  IntBoxUse(this.value);
  final GenericBox<int> value;
}
''');
  File(p.join(root.path, 'lib', 'extra.dart')).writeAsStringSync('''
class Extra {
  Extra.create();
}
''');
  final apiPackage = Directory(p.join(root.path, 'api_pkg'))..createSync();
  Directory(p.join(apiPackage.path, 'lib', 'src')).createSync(recursive: true);
  File(p.join(apiPackage.path, 'lib', 'api.dart')).writeAsStringSync('''
export 'src/api_impl.dart';
''');
  File(p.join(apiPackage.path, 'lib', 'src', 'api_impl.dart'))
      .writeAsStringSync('''
class ExternalCounter {
  ExternalCounter(this.value);
  final int value;
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
    },
    {
      "name": "api_pkg",
      "rootUri": "../api_pkg/",
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

Directory _tempWidgetCliPackage() {
  final root = Directory(Directory.systemTemp.resolveSymbolicLinksSync())
      .createTempSync('flax-widget-cli-pkg-');
  addTearDown(() {
    if (root.existsSync()) {
      root.deleteSync(recursive: true);
    }
  });
  File(p.join(root.path, 'pubspec.yaml')).writeAsStringSync('''
name: widget_cli_pkg
dependencies:
  flutter: any
  flax: any
''');
  File(p.join(root.path, 'flax_package.yaml')).writeAsStringSync('''
format: 1
dart:
  entrypoint: package:widget_cli_pkg/widget_package.dart
javascript:
  package: '@cli/widget-auto'
  version: same
  mode: runtime
capabilities:
  - bindings
bindingNamespace: example.widgetcli
''');
  Directory(p.join(root.path, 'bindings')).createSync();
  File(p.join(root.path, 'bindings', 'overrides.yaml')).writeAsStringSync('''
format: 1
overrides:
  functions:
    openPage:
      data:
        result: true
      route:
        context: context
        rootNavigator: rootNavigator
        builders: [builder]
''');
  Directory(p.join(root.path, 'lib')).createSync();
  File(p.join(root.path, 'lib', 'widget_package.dart')).writeAsStringSync('''
import 'package:flutter/widgets.dart';

Future<Object?> openPage({required BuildContext context,
    required WidgetBuilder builder, bool rootNavigator = false}) =>
  Navigator.of(context, rootNavigator: rootNavigator).push<Object?>(
    PageRouteBuilder<Object?>(pageBuilder: (context, _, _) => builder(context)));

class AutoList extends StatelessWidget {
  const AutoList({super.key, required this.itemBuilder});

  final Widget Function(BuildContext context, int index) itemBuilder;

  @override
  Widget build(BuildContext context) => itemBuilder(context, 0);
}

class AutoBar extends StatelessWidget implements PreferredSizeWidget {
  const AutoBar({super.key, required this.height});

  final double height;

  @override
  Size get preferredSize => Size.fromHeight(height);

  @override
  Widget build(BuildContext context) => const SizedBox.shrink();
}
''');
  _copyWorkspacePackageConfig(root, 'widget_cli_pkg');
  return root;
}

void _copyWorkspacePackageConfig(Directory packageRoot, String packageName) {
  final repoRoot = p.normalize(p.join(Directory.current.path, '../..'));
  final sourcePath = p.join(repoRoot, '.dart_tool', 'package_config.json');
  final decoded = jsonDecode(File(sourcePath).readAsStringSync()) as Map;
  final sourceUri = File(sourcePath).absolute.uri;
  final packages = <Map<String, Object?>>[];
  for (final raw in decoded['packages'] as List) {
    final entry = Map<String, Object?>.from(raw as Map);
    if (entry['name'] == packageName) continue;
    entry['rootUri'] = sourceUri
        .resolve(entry['rootUri']! as String)
        .toString();
    packages.add(entry);
  }
  packages.add({
    'name': packageName,
    'rootUri': packageRoot.uri.toString(),
    'packageUri': 'lib/',
  });
  final tool = Directory(p.join(packageRoot.path, '.dart_tool'))..createSync();
  File(
    p.join(tool.path, 'package_config.json'),
  ).writeAsStringSync(jsonEncode({'configVersion': 2, 'packages': packages}));
}

List<String> _listing(Directory root) {
  final entries = <String>[];
  void walk(Directory directory) {
    for (final entity
        in directory.listSync(followLinks: false).toList()
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
