import 'dart:io';
import 'dart:isolate';

import 'package:code_assets/code_assets.dart';
import 'package:flax/native_sdk.dart';
import 'package:flax/native_target.dart';
import 'package:flax_native_assets/flax_native_assets.dart';
import 'package:hooks/hooks.dart';

Future<void> main(List<String> arguments) async {
  await build(arguments, (input, output) async {
    if (!input.config.buildCodeAssets) return;
    final code = input.config.code;
    final target = FlaxNativeTarget.fromBuild(
      code.targetOS.name,
      code.targetArchitecture.name,
      appleSdk: code.targetOS == OS.iOS ? code.iOS.targetSdk.type : null,
    );
    // Linux V8 needs the SDK's libc++ and a compatible Clang, not Dart's GCC.
    // Windows uses the same Visual Studio generator as the native contract build.
    final compiler = code.targetOS == OS.linux || code.targetOS == OS.windows
        ? null
        : code.cCompiler?.compiler;
    final prompt = code.targetOS == OS.windows
        ? code.cCompiler?.windows.developerCommandPrompt
        : null;
    final entry = Isolate.resolvePackageUriSync(
      Uri.parse('package:flax/native_sdk.dart'),
    );
    if (entry == null) throw StateError('Cannot locate the flax package');
    final coreRoot = File.fromUri(entry).parent.parent.uri;
    final assets = await buildFlaxNativeSdk(
      engine: 'hermes',
      target: target,
      testContracts: input.userDefines['testContracts'] == true,
      compiler: compiler,
      compilerEnvironmentScript: prompt?.script,
      compilerEnvironmentArguments: prompt?.arguments ?? const [],
      packageRoot: input.packageRoot,
      coreRoot: coreRoot,
      cacheRoot: Platform.environment['FLAX_ENGINE_SDK_CACHE'] == null
          ? input.outputDirectoryShared
          : Directory(Platform.environment['FLAX_ENGINE_SDK_CACHE']!)
                .absolute
                .uri,
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
    if (assets.testLibrary case final library?) {
      output.assets.code.add(
        CodeAsset(
          package: input.packageName,
          name: 'test_contracts',
          linkMode: DynamicLoadingBundled(),
          file: library.uri,
        ),
      );
    }
    final shared = input.metadata['flax_native_assets']['libraries'];
    if ((code.targetOS == OS.android || code.targetOS == OS.windows) &&
        shared is! Map) {
      throw StateError('Shared native runtime assets are missing');
    }
    for (final library in await flaxUniqueEngineLibraries(
      assets.libraries,
      shared is Map ? Map<String, Object?>.from(shared) : const {},
    )) {
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
