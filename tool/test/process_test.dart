import 'dart:convert';
import 'dart:io';

import 'package:test/test.dart';

void main() {
  for (final inheritEnvironment in [true, false]) {
    test(
      'static runner selects paired SDK and sanitizes environment (inherit=$inheritEnvironment)',
      () async {
        final root = Directory.current;
        final temporary = Directory.systemTemp.createTempSync('flax-process-');
        addTearDown(() => temporary.deleteSync(recursive: true));
        final sdk = Directory('${temporary.path}/paired-sdk');
        final engine = Directory('${temporary.path}/engine/src');
        final log = File('${temporary.path}/processes.jsonl');
        File('${sdk.path}/packages/flutter/lib/widgets.dart')
          ..parent.createSync(recursive: true)
          ..writeAsStringSync('');
        File(
            '${engine.path}/out/flax_mac_debug_arm64/FlutterMacOS.framework/Versions/A/FlutterMacOS',
          )
          ..parent.createSync(recursive: true)
          ..writeAsStringSync('');
        final fake = File('${sdk.path}/bin/flutter.dart')
          ..parent.createSync(recursive: true)
          ..writeAsStringSync('''
import 'dart:convert';
import 'dart:io';
void main(List<String> arguments) {
  final env = Platform.environment;
  File(env['FLAX_TEST_PROCESS_LOG']!).writeAsStringSync(jsonEncode({
    'script': Platform.script.toFilePath(),
    'arguments': arguments,
    'engine': env['FLUTTER_ENGINE'],
    'marker': env['FLAX_TEST_MARKER'],
    'parent': env['FLAX_TEST_PARENT'],
    'directory': Directory.current.path,
  }) + '\\n', mode: FileMode.append);
  stdout.writeln('└── flax_package.yaml');
}
''');
        final executable = File('${sdk.path}/bin/flutter')
          ..writeAsStringSync(
            '#!/bin/sh\nexec "${Platform.resolvedExecutable}" "${fake.path}" "\$@"\n',
          );
        // Any accidental bare Process.run('flutter') must fail, never use a real SDK.
        final shadow = File('${temporary.path}/wrong-sdk/bin/flutter')
          ..parent.createSync(recursive: true)
          ..writeAsStringSync('#!/bin/sh\nexit 91\n');
        final chmod = await Process.run('chmod', [
          '+x',
          executable.path,
          shadow.path,
        ]);
        expect(chmod.exitCode, 0, reason: '${chmod.stderr}');

        final originalConfig = File(
          '${root.path}/.dart_tool/package_config.json',
        );
        final config = jsonDecode(
          originalConfig.readAsStringSync(),
        ) as Map<String, dynamic>;
        for (final value in config['packages'] as List) {
          final entry = (value as Map).cast<String, dynamic>();
          entry['rootUri'] = entry['name'] == 'flutter'
              ? sdk.uri.resolve('packages/flutter/').toString()
              : originalConfig.uri
                    .resolve(entry['rootUri'] as String)
                    .toString();
        }
        final configFile = File('${temporary.path}/package_config.json')
          ..writeAsStringSync(jsonEncode(config));
        final package = Directory('${temporary.path}/package')..createSync();
        File('${package.path}/pubspec.yaml').writeAsStringSync('''
name: capture_fixture
version: 0.0.1
environment:
  sdk: ^3.14.0
''');
        File('${package.path}/flax_package.yaml').writeAsStringSync('''
format: 2
dart:
  entrypoint: package:capture_fixture/api.dart
capabilities: []
''');
        File('${package.path}/lib/api.dart')
          ..parent.createSync()
          ..writeAsStringSync('int value() => 1;\n');
        final script = File('${temporary.path}/check.dart')
          ..writeAsStringSync('''
import 'dart:io';
import '${File('${root.path}/tool/src/process.dart').uri}';
import '${File('${root.path}/tool/src/package_discovery.dart').uri}';
import '${File('${root.path}/tool/check_packages.dart').uri}' show checkDartPackage;
Future<void> main() async {
  final directory = ${jsonEncode(package.path)};
  for (final arguments in [
    ['pub', 'get'],
    ['packages', 'get'],
    ['analyze', '--no-pub'],
    ['create', '--empty', '--no-pub', '--platforms=ios', '.'],
  ]) {
    await run('flutter', arguments,
      directory: directory,
      inheritEnvironment: $inheritEnvironment,
      useLocalEngine: arguments.first != 'pub',
      environment: {
        'FLUTTER_ENGINE': 'must-be-removed',
        'FLAX_TEST_MARKER': 'explicit-marker',
        'FLAX_TEST_PROCESS_LOG': ${jsonEncode(log.path)},
      },
    );
  }
  final package = Directory(directory);
  await checkDartPackage(FlaxWorkspacePackage('capture_fixture', package), package);
}
''');
        final environment = {
          ...Platform.environment,
          'FLUTTER_ENGINE': engine.path,
          'FLUTTER_ROOT': '${temporary.path}/wrong-sdk',
          'FLAX_CHECK_TARGET': 'ios-device-arm64',
          'FLAX_TEST_PARENT': 'parent-preserved',
          'FLAX_TEST_MARKER': 'parent-marker',
          'FLAX_TEST_PROCESS_LOG': log.path,
          'PATH': shadow.parent.path,
        };
        Future<ProcessResult> invoke(List<String> arguments) => Process.run(
          Platform.resolvedExecutable,
          ['--packages=${configFile.path}', ...arguments],
          workingDirectory: root.path,
          environment: environment,
          includeParentEnvironment: false,
        );
        final result = await invoke([script.path]);
        expect(
          result.exitCode,
          0,
          reason: '${result.stdout}\n${result.stderr}',
        );
        final analyze = await invoke([
          '${root.path}/tool/package.dart',
          'analyze',
        ]);
        expect(
          analyze.exitCode,
          0,
          reason: '${analyze.stdout}\n${analyze.stderr}',
        );
        final rows = log
            .readAsLinesSync()
            .map((line) => jsonDecode(line) as Map<String, dynamic>)
            .toList();
        expect(rows, hasLength(7));
        final commands = [
          ['pub', 'get'],
          ['packages', 'get'],
          ['analyze', '--no-pub'],
          ['create', '--empty', '--no-pub', '--platforms=ios', '.'],
          ['pub', 'publish', '--dry-run', '--ignore-warnings'],
          ['analyze', '--no-pub', '--fatal-infos', 'lib'],
          ['analyze', '--no-pub', '--fatal-infos'],
        ];
        for (var index = 0; index < rows.length; index++) {
          final row = rows[index];
          expect(row['script'], fake.path);
          expect(row['arguments'], [
            '--local-engine-src-path=${engine.path}',
            '--local-engine=flax_mac_debug_arm64',
            '--local-engine-host=flax_mac_debug_arm64',
            ...commands[index],
          ]);
          expect(row['engine'], isNull);
          expect(
            row['marker'],
            index < 4 ? 'explicit-marker' : 'parent-marker',
          );
          expect(
            row['parent'],
            index < 4 && !inheritEnvironment ? isNull : 'parent-preserved',
          );
          expect(row['directory'], index < 6 ? package.path : root.path);
        }
      },
      skip: Platform.isWindows,
    );
  }
}
