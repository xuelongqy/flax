import 'dart:io';

import '../../tool/src/process.dart';

Future<void> main(List<String> args) async {
  if (args.length != 1 || !['debug', 'release'].contains(args.single)) {
    throw ArgumentError('Expected debug or release');
  }
  final root = File.fromUri(Platform.script).parent.parent.parent.path;
  final saved = <File, String>{
    for (final name in ['DebugProfile', 'Release'])
      File('$root/examples/embedded/macos/Runner/$name.entitlements'): File(
        '$root/examples/embedded/macos/Runner/$name.entitlements',
      ).readAsStringSync(),
  };
  final patched = <File, String>{};
  try {
    // A local workspace dylib is not a distributable application resource.
    for (final entry in saved.entries) {
      final text = entry.value
          .replaceFirst(
            '<key>com.apple.security.app-sandbox</key>\n\t<true/>',
            '<key>com.apple.security.app-sandbox</key>\n\t<false/>',
          )
          .replaceFirst(
            '<dict>',
            '<dict>\n\t<key>com.apple.security.cs.disable-library-validation</key>\n\t<true/>',
          );
      entry.key.writeAsStringSync(text);
      patched[entry.key] = text;
    }
    await run('flutter', [
      'build',
      'macos',
      '--${args.single}',
      '--no-pub',
      '-t',
      '$root/experiments/js_handoff/app.dart',
    ], directory: '$root/examples/embedded');
  } finally {
    for (final entry in saved.entries) {
      if (entry.key.readAsStringSync() != patched[entry.key]) {
        throw StateError('Concurrent entitlement edit: ${entry.key.path}');
      }
      entry.key.writeAsStringSync(entry.value);
    }
  }
}
