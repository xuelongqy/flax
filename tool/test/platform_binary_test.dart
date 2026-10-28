import 'dart:io';

import 'package:test/test.dart';

import '../src/platform_binary.dart';
import '../src/example_engine.dart';

void main() {
  test('Apple release audit canonicalizes copy-phase symbols and detects changed data', () async {
    final temporary = Directory.systemTemp.createTempSync('flax-symbol-audit-');
    addTearDown(() => temporary.deleteSync(recursive: true));
    Future<void> xcrun(List<String> arguments) async {
      final result = await Process.run('xcrun', arguments);
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
    }

    final source = File('${temporary.path}/symbols.c')
      ..writeAsStringSync('''
#include <string.h>
const char *symbol_audit_value(void) { return "flax-symbol-original"; }
int symbol_audit_length(const char *value) { return (int)strlen(value); }
''');
    final original = File('${temporary.path}/original.dylib');
    await xcrun([
      'clang',
      '-dynamiclib',
      '-g',
      source.path,
      '-o',
      original.path,
    ]);
    final staged = original.copySync('${temporary.path}/staged.dylib');
    await xcrun(['strip', '-S', '-x', staged.path]);
    await xcrun([
      'codesign',
      '--force',
      '--sign',
      '-',
      '--timestamp=none',
      staged.path,
    ]);
    final packaged = staged.copySync('${temporary.path}/packaged.dylib');
    await xcrun(['strip', '-S', '-x', packaged.path]);
    for (final file in [original, staged, packaged]) {
      await normalizeAppleCodeSignature(file, stripSymbols: true);
    }
    expect(staged.readAsBytesSync(), original.readAsBytesSync());
    expect(packaged.readAsBytesSync(), original.readAsBytesSync());
    final bytes = packaged.readAsBytesSync();
    final offset = String.fromCharCodes(bytes).indexOf('flax-symbol-original');
    expect(offset, greaterThanOrEqualTo(0));
    bytes[offset] ^= 1;
    packaged.writeAsBytesSync(bytes);
    await normalizeAppleCodeSignature(packaged, stripSymbols: true);
    expect(
      packaged.readAsBytesSync(),
      isNot(orderedEquals(original.readAsBytesSync())),
    );
  }, skip: !Platform.isMacOS);

  test('iOS V8 examples retain existing entitlements and configure every signing variant', () {
    final example = Directory.systemTemp.createTempSync('flax-ios-signing-');
    addTearDown(() => example.deleteSync(recursive: true));
    final project = File('${example.path}/ios/Runner.xcodeproj/project.pbxproj')
      ..parent.createSync(recursive: true);
    for (final custom in [false, true]) {
      final paths = custom
          ? ['Runner/Debug.entitlements', 'Runner/Release.entitlements']
          : ['Runner/Runner.entitlements'];
      project.writeAsStringSync(
        custom
            ? paths
                  .map(
                    (path) =>
                        'CODE_SIGN_ENTITLEMENTS = "$path"; PRODUCT_BUNDLE_IDENTIFIER = example;',
                  )
                  .join('\n')
            : 'PRODUCT_BUNDLE_IDENTIFIER = example;\nPRODUCT_BUNDLE_IDENTIFIER = example;',
      );
      for (final path in paths) {
        File('${example.path}/ios/$path')
          ..parent.createSync(recursive: true)
          ..writeAsStringSync(
            '<plist><dict><key>existing</key><dict><key>nested</key><true/></dict></dict></plist>',
          );
      }
      selectExampleEngine(Directory.current.path, example.path, 'v8');
      final once = project.readAsStringSync();
      final entitlements = [
        for (final path in paths)
          File('${example.path}/ios/$path').readAsStringSync(),
      ];
      selectExampleEngine(Directory.current.path, example.path, 'v8');
      expect(project.readAsStringSync(), once);
      expect(RegExp('CODE_SIGN_ENTITLEMENTS =').allMatches(once), hasLength(2));
      for (final (index, path) in paths.indexed) {
        final text = File('${example.path}/ios/$path').readAsStringSync();
        expect(text, entitlements[index]);
        expect(
          text,
          contains('<key>existing</key><dict><key>nested</key><true/></dict>'),
        );
        expect(
          text,
          contains(
            '<key>com.apple.developer.kernel.extended-virtual-addressing</key><true/>',
          ),
        );
        expect(text, isNot(contains('allow-jit')));
      }
    }
  });
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
