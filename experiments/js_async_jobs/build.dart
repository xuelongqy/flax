import 'dart:io';

import '../../tool/src/process.dart';

Future<void> main(List<String> args) async {
  if (args.isEmpty ||
      args.length > 2 ||
      !['debug', 'release'].contains(args.first) ||
      args.length == 2 && args.last != 'generated') {
    throw ArgumentError('Expected debug or release, optionally generated');
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
    if (args.length == 2) {
      final originals = <File, String>{
        for (final name in ['host', 'async'])
          File('$root/packages/flax/lib/src/ui/$name.dart'): File(
            '$root/packages/flax/lib/src/ui/$name.dart',
          ).readAsStringSync(),
      };
      final patch = '$root/experiments/js_async_jobs/checkpoint.patch';
      await run('git', ['apply', '--check', patch], directory: root);
      await run('git', ['apply', patch], directory: root);
      for (final entry in originals.entries) {
        saved[entry.key] = entry.value;
        patched[entry.key] = entry.key.readAsStringSync();
      }
    }
    // generated_app.dart deliberately requires the local checkpoint experiment.
    if (args.length == 2) {
      await run('dart', [
        'analyze',
        '$root/experiments/js_async_jobs',
      ], directory: root);
    }
    await run('flutter', [
      'build',
      'macos',
      '--${args.first}',
      '--no-pub',
      '-t',
      '$root/experiments/js_async_jobs/${args.length == 2 ? 'generated_app' : 'app'}.dart',
    ], directory: '$root/examples/embedded');
  } finally {
    for (final entry in saved.entries) {
      if (patched[entry.key] case final expected?) {
        if (entry.key.readAsStringSync() != expected) {
          throw StateError(
            'Concurrent change; refusing to restore ${entry.key.path}',
          );
        }
      }
      entry.key.writeAsStringSync(entry.value);
    }
  }
}
