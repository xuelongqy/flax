import 'dart:io';

import 'package:test/test.dart';

import '../src/platform_binary.dart';
import '../src/example_engine.dart';

void main() {
  test(
    'local example signing is idempotent and preserves real Team validation',
    () {
      final example = Directory.systemTemp.createTempSync('flax-signing-');
      addTearDown(() => example.deleteSync(recursive: true));
      final project = File(
        '${example.path}/macos/Runner.xcodeproj/project.pbxproj',
      )..parent.createSync(recursive: true);
      final entitlements = File(
        '${example.path}/macos/Runner/Release.entitlements',
      )..parent.createSync(recursive: true);
      for (final team in [
        '',
        'DEVELOPMENT_TEAM = A123456789;',
        'DEVELOPMENT_TEAM = "A123456789";',
      ]) {
        project.writeAsStringSync('CODE_SIGN_IDENTITY = "-";\n$team\n');
        entitlements.writeAsStringSync('<dict></dict>');
        selectExampleEngine(Directory.current.path, example.path, 'v8');
        final once = entitlements.readAsStringSync();
        selectExampleEngine(Directory.current.path, example.path, 'v8');
        expect(entitlements.readAsStringSync(), once);
        expect(
          project.readAsStringSync(),
          contains('ENABLE_HARDENED_RUNTIME = YES;'),
        );
        expect(once, contains('com.apple.security.cs.allow-jit'));
        expect(
          once.contains('com.apple.security.cs.disable-library-validation'),
          team.isEmpty,
        );
      }
    },
  );
  test(
    'reads hardened runtime from actual codesign flags, including ad-hoc',
    () {
      expect(
        hasHardenedRuntime(
          'CodeDirectory v=20500 flags=0x10002(adhoc,runtime) hashes=5+7',
        ),
        isTrue,
      );
      expect(
        hasHardenedRuntime(
          'CodeDirectory v=20500 flags=0x10000(runtime) hashes=5+7',
        ),
        isTrue,
      );
      expect(
        hasHardenedRuntime('CodeDirectory v=20500 flags=0x2(adhoc) hashes=5+7'),
        isFalse,
      );
      expect(hasHardenedRuntime('Runtime Version=27.0.0'), isFalse);
    },
  );
}
