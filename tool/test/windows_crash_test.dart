import 'dart:convert';
import 'dart:io';

import 'package:test/test.dart';

import '../src/process.dart';

void main() {
  test(
    'Windows CDB captures a fault in a spawned native child',
    () async {
      expect(
        Platform.environment['FLAX_WINDOWS_CDB'],
        isNotNull,
        reason: 'Run tool/prepare_windows_debugger.ps1 before this test',
      );
      final work = Directory.systemTemp.createTempSync('flax debugger child ');
      addTearDown(() => work.deleteSync(recursive: true));
      final source = File('${work.path}/fault.cpp')
        ..writeAsStringSync(
          'int main() { volatile int *p = nullptr; *p = 42; }\n',
        );
      final executable = '${work.path}/flax_debugger_fault.exe';
      await run('clang++', [
        '-O0',
        source.path,
        '-o',
        executable,
      ], timeout: const Duration(seconds: 30));
      final evidence = Directory(
        '${Platform.environment['FLAX_WINDOWS_CRASH_DIR'] ?? work.path}'
        '/debugger-self-test',
      );
      await expectLater(
        run(
          'powershell',
          [
            '-NoProfile',
            '-NonInteractive',
            '-Command',
            "& '${executable.replaceAll("'", "''")}'; exit \$LASTEXITCODE",
          ],
          directory: work.path,
          environment: {'FLAX_WINDOWS_CRASH_DIR': evidence.path},
          captureWindowsCrash: true,
          timeout: const Duration(seconds: 30),
        ),
        throwsA(
          isA<ProcessException>().having(
            (e) => e.errorCode & 0xffffffff,
            'original native AV',
            0xc0000005,
          ),
        ),
      );
      final capture = evidence.listSync().whereType<Directory>().single;
      final receipt = jsonDecode(
        File('${capture.path}/crash.json').readAsStringSync(),
      ) as Map;
      expect((receipt['attempts'] as List).length, 1);
      final dumps = receipt['attempts'][0]['dumps'] as List;
      expect(dumps, isNotEmpty);
      for (final dump in dumps) {
        expect(File(dump as String).lengthSync(), greaterThan(0));
      }
      final log = File('${capture.path}/attempt-1.log').readAsStringSync();
      expect(log, contains('flax_debugger_fault'));
      expect(log.toLowerCase(), contains('c0000005'));
    },
    skip: Platform.isWindows ? false : 'Runs on both Windows CI architectures',
    timeout: const Timeout(Duration(minutes: 7)),
  );
  test(
    'debugger reproduction cannot turn the original failure into a pass',
    () async {
      final work = Directory.systemTemp.createTempSync('flax crash capture ');
      addTearDown(() => work.deleteSync(recursive: true));
      final evidence = Directory('${work.path}/evidence');
      final debugger = File('${work.path}/fake cdb')
        ..writeAsStringSync('''#!/bin/sh
while [ "\$#" -gt 0 ]; do
  case "\$1" in
    -logo) shift; printf 'debugger reproduction succeeded' > "\$1" ;;
  esac
  shift
done
exit 0
''');
      expect((await Process.run('chmod', ['+x', debugger.path])).exitCode, 0);
      final environment = {
        'FLAX_WINDOWS_CDB': debugger.path,
        'FLAX_WINDOWS_CRASH_DIR': evidence.path,
      };
      await run(
        'sh',
        ['-c', 'exit 0'],
        directory: work.path,
        environment: environment,
        captureWindowsCrash: true,
      );
      expect(evidence.existsSync(), false);
      await expectLater(
        run(
          'sh',
          ['-c', 'exit 7'],
          directory: work.path,
          environment: environment,
          captureWindowsCrash: true,
        ),
        throwsA(isA<ProcessException>().having((e) => e.errorCode, 'code', 7)),
      );
      final capture = evidence.listSync().whereType<Directory>().single;
      final receipt = jsonDecode(
        File('${capture.path}/crash.json').readAsStringSync(),
      ) as Map;
      expect(receipt['originalExitCode'], 7);
      expect((receipt['attempts'] as List).length, 3);
      expect(
        (receipt['attempts'] as List).every((a) => a['debuggerExitCode'] == 0),
        true,
      );
      expect(
        File('${capture.path}/attempt-1.log').readAsStringSync(),
        contains('succeeded'),
      );
    },
    skip: Platform.isWindows
        ? 'POSIX fake debugger; Windows CI uses real CDB'
        : false,
  );
  test(
    'fault dumps survive deletion of the temporary consumer',
    () async {
      final work = Directory.systemTemp.createTempSync('flax crash dump ');
      addTearDown(() => work.deleteSync(recursive: true));
      final consumer = Directory('${work.path}/consumer')..createSync();
      final debugger = File('${work.path}/fake cdb')
        ..writeAsStringSync(r'''#!/bin/sh
while [ "$#" -gt 0 ]; do
  if [ "$1" = '-cf' ]; then
    shift
    name=$(sed -n 's/.*\.dump \/m \/u \([^;]*\);.*/\1/p' "$1" | head -n 1)
    printf 'fault dump' > "$name"
  fi
  shift
done
exit 1
''');
      expect((await Process.run('chmod', ['+x', debugger.path])).exitCode, 0);
      await expectLater(
        run(
          'sh',
          ['-c', 'exit 9'],
          directory: consumer.path,
          environment: {
            'FLAX_WINDOWS_CDB': debugger.path,
            'FLAX_WINDOWS_CRASH_DIR': '${work.path}/evidence',
          },
          captureWindowsCrash: true,
        ),
        throwsA(isA<ProcessException>().having((e) => e.errorCode, 'code', 9)),
      );
      consumer.deleteSync(recursive: true);
      final capture = Directory('${work.path}/evidence')
          .listSync()
          .whereType<Directory>()
          .single;
      final receipt = jsonDecode(
        File('${capture.path}/crash.json').readAsStringSync(),
      ) as Map;
      expect((receipt['attempts'] as List).length, 1);
      expect(
        File((receipt['attempts'][0]['dumps'] as List).single as String)
            .readAsStringSync(),
        'fault dump',
      );
    },
    skip: Platform.isWindows
        ? 'POSIX fake debugger; Windows CI uses real CDB'
        : false,
  );
}
