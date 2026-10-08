import 'dart:io';

import 'package:flax/native_target.dart';
import 'package:path/path.dart' as p;

import 'check_runtime.dart' as runtime;
import 'src/platform_binary.dart';

// Platform selection is fixed; the shared contract checks session isolation.
Future<void> main() => runtime.main(['--engine=v8']);

File builtBridge(Directory consumer, String engine) {
  final outputs = Directory(
    '${consumer.path}/.dart_tool/hooks_runner/shared/flax_engine_$engine/build',
  );
  final matches = hookBuildFiles(outputs)
      .where(
        (file) =>
            p.basename(file.path) ==
                FlaxNativeTarget.host().bridgeName(engine) &&
            p.basename(p.dirname(file.path)) == 'assets',
      )
      .toList();
  if (matches.length != 1) {
    throw StateError(
      'Expected one built $engine bridge, found ${matches.length}',
    );
  }
  return matches.single;
}
