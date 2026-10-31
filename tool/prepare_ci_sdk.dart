import 'dart:io';

import 'package:flax/native_sdk.dart';
import 'package:flax/native_target.dart';

/// Explicit CI producer input; ordinary checks never call this downloader.
Future<void> main() async {
  final target = FlaxNativeTarget.host();
  if (target.name != 'macos-arm64') {
    throw UnsupportedError('CI engine preparation requires macOS arm64');
  }
  final root = Directory.fromUri(Platform.script.resolve('../'));
  final (sdk, _) = await prepareFlaxEngineSdk(
    engine: 'v8',
    packageRoot: root.uri.resolve('packages/flax_engine_v8/'),
    cacheRoot: root.uri.resolve('.local/ci-v8-sdk/'),
    target: target,
  );
  final environmentFile = Platform.environment['GITHUB_ENV'];
  if (environmentFile != null) {
    File(
      environmentFile,
    ).writeAsStringSync('FLAX_CI_V8_SDK=${sdk.path}\n', mode: FileMode.append);
  }
  stdout.writeln(sdk.path);
}
