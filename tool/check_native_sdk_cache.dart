import 'dart:io';

import 'package:flax/native_sdk.dart';
import 'package:path/path.dart' as p;

Future<void> main(List<String> args) async {
  if (args.length != 3 || !const ['hermes', 'v8'].contains(args[0])) {
    throw ArgumentError(
      'Usage: dart run tool/check_native_sdk_cache.dart <engine> <archive> <sha256>',
    );
  }
  final root = Directory.fromUri(Platform.script.resolve('../'));
  final archive = File(p.absolute(args[1]));
  final temp = Directory.systemTemp.createTempSync('flax-sdk-cache-');
  try {
    final results = await Future.wait([
      for (var i = 0; i < 2; i++)
        buildFlaxNativeSdk(
          engine: args[0],
          packageRoot: Directory(
            p.join(root.path, 'packages', 'flax_engine_${args[0]}'),
          ).uri,
          coreRoot: Directory(p.join(root.path, 'packages', 'flax')).uri,
          cacheRoot: Directory(p.join(temp.path, 'cache')).uri,
          outputRoot: Directory(p.join(temp.path, 'output-$i')).uri,
          sdkArchive: archive.uri,
          sdkSha256: args[2],
        ),
    ]);
    if (results.any(
      (result) => !result.bridge.existsSync() || result.libraries.isEmpty,
    )) {
      throw StateError('Concurrent SDK preparation produced incomplete assets');
    }
    stdout.writeln('Concurrent bridge builds shared one verified SDK cache.');
  } finally {
    temp.deleteSync(recursive: true);
  }
}
