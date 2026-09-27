import 'dart:io';
import 'dart:isolate';

import 'package:code_assets/code_assets.dart';
import 'package:flax/native_sdk.dart';
import 'package:hooks/hooks.dart';

Future<void> main(List<String> arguments) async {
  await build(arguments, (input, output) async {
    if (!input.config.buildCodeAssets) return;
    if (input.config.code.targetOS != OS.macOS ||
        input.config.code.targetArchitecture != Architecture.arm64) {
      throw UnsupportedError('Flax hermes supports macOS arm64 only.');
    }
    final entry = Isolate.resolvePackageUriSync(
      Uri.parse('package:flax/native_sdk.dart'),
    );
    if (entry == null) throw StateError('Cannot locate the flax package');
    final coreRoot = File.fromUri(entry).parent.parent.uri;
    final assets = await buildFlaxNativeSdk(
      engine: 'hermes',
      packageRoot: input.packageRoot,
      coreRoot: coreRoot,
      cacheRoot: input.outputDirectoryShared,
      outputRoot: input.outputDirectory,
      sdkArchive: input.userDefines.path('sdkArchive'),
      sdkSha256: input.userDefines['sdkSha256'] as String?,
    );
    for (final source in assets.sources) {
      output.dependencies.add(source.uri);
    }
    output.assets.code.add(
      CodeAsset(
        package: input.packageName,
        name: 'flax_engine_hermes.dart',
        linkMode: DynamicLoadingBundled(),
        file: assets.bridge.uri,
      ),
    );
    for (final library in assets.libraries) {
      output.assets.code.add(
        CodeAsset(
          package: input.packageName,
          name: library.uri.pathSegments.last,
          linkMode: DynamicLoadingBundled(),
          file: library.uri,
        ),
      );
    }
  });
}
