import 'dart:ffi';
import 'dart:io';

import 'package:flax/native_sdk.dart';
import 'package:path/path.dart' as p;

import 'src/engine_selection.dart';
import 'src/package_discovery.dart';
import 'src/process.dart';

Future<void> main(List<String> arguments) => command(() async {
  if (!Platform.isMacOS || Abi.current() != Abi.macosArm64) {
    throw UnsupportedError('Native runtime verification requires macOS arm64');
  }
  final engine = selectedEngine(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../'));
  final package = findPackage(root.path, 'flax_engine_$engine').directory;
  final core = findPackage(root.path, 'flax').directory;
  final output = Directory(p.join(package.path, 'build', 'sdk-bridge'));
  final localArchive = Platform.environment['FLAX_ENGINE_SDK_ARCHIVE'];
  final localDigest = Platform.environment['FLAX_ENGINE_SDK_SHA256'];
  await buildFlaxNativeSdk(
    engine: engine,
    packageRoot: package.uri,
    coreRoot: core.uri,
    cacheRoot: Directory(p.join(package.path, '.cache', 'sdk')).uri,
    outputRoot: output.uri,
    sdkArchive: localArchive == null ? null : File(localArchive).absolute.uri,
    sdkSha256: localDigest,
  );
  final build = p.join(output.path, 'cmake');
  await run('cmake', [
    '--build',
    build,
    '--target',
    if (engine == 'v8') ...[
      'flax_v8_runtime_test',
      'flax_v8_lifecycle_test',
    ] else
      'flax_runtime_test',
  ]);
  await run('ctest', ['--test-dir', build, '--output-on-failure']);
});
