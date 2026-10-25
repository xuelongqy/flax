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
  try {
    // This local probe loads a workspace dylib, without distribution signing.
    for (final entry in saved.entries) {
      entry.key.writeAsStringSync(
        entry.value
            .replaceFirst(
              '<key>com.apple.security.app-sandbox</key>\n\t<true/>',
              '<key>com.apple.security.app-sandbox</key>\n\t<false/>',
            )
            .replaceFirst(
              '<dict>',
              '<dict>\n\t<key>com.apple.security.cs.disable-library-validation</key>\n\t<true/>',
            ),
      );
    }
    await run('flutter', [
      'build',
      'macos',
      '--${args.single}',
      '--no-pub',
      '-t',
      '$root/experiments/js_slicing/app.dart',
    ], directory: '$root/examples/embedded');
  } finally {
    for (final entry in saved.entries) {
      entry.key.writeAsStringSync(entry.value);
    }
  }
}
