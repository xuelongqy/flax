import 'dart:convert';
import 'dart:io';
import 'dart:isolate';

import 'package:code_assets/code_assets.dart';
import 'package:crypto/crypto.dart';
import 'package:flax/native_sdk.dart';
import 'package:flax/native_target.dart';
import 'package:hooks/hooks.dart';

Future<void> main(List<String> arguments) async {
  await build(arguments, (input, output) async {
    if (!input.config.buildCodeAssets) return;
    final code = input.config.code;
    if (code.targetOS != OS.android && code.targetOS != OS.windows) return;
    final target = FlaxNativeTarget.fromBuild(
      code.targetOS.name,
      code.targetArchitecture.name,
    );
    Uri? entry;
    var engine = 'hermes';
    for (final candidate in ['hermes', 'v8']) {
      entry = Isolate.resolvePackageUriSync(
        Uri.parse('package:flax_engine_$candidate/flax_engine_$candidate.dart'),
      );
      if (entry != null) {
        engine = candidate;
        break;
      }
    }
    if (entry == null) {
      throw StateError('Shared native assets require an engine package');
    }
    final (sdk, sources) = await prepareFlaxEngineSdk(
      engine: engine,
      target: target,
      packageRoot: File.fromUri(entry).parent.parent.uri,
      cacheRoot: Platform.environment['FLAX_ENGINE_SDK_CACHE'] == null
          ? input.outputDirectoryShared
          : Directory(Platform.environment['FLAX_ENGINE_SDK_CACHE']!)
                .absolute
                .uri,
      sdkArchive: input.userDefines.path('sdkArchive'),
      sdkSha256: input.userDefines['sdkSha256'] as String?,
    );
    output.dependencies.addAll(sources.map((f) => f.uri));
    output.dependencies.add(
      Isolate.resolvePackageUriSync(Uri.parse('package:flax/native_sdk.dart'))!,
    );
    output.dependencies.add(
      Isolate.resolvePackageUriSync(
        Uri.parse('package:flax/native_target.dart'),
      )!,
    );
    final manifest =
        jsonDecode(File('${sdk.path}/manifest.json').readAsStringSync()) as Map;
    final shared = <String, String>{};
    final names = target.os == 'windows'
        ? (manifest['runtimeLibraries'] as List).cast<String>()
        : (manifest['libraries'] as List).cast<String>().where(
            (n) => n.endsWith('/libc++_shared.so'),
          );
    if (names.isEmpty) {
      throw StateError(
        'SDK is missing shared runtime libraries for ${target.name}',
      );
    }
    for (final name in names) {
      final source = File('${sdk.path}/$name');
      final basename = source.uri.pathSegments.last;
      final file = source.copySync(
        File.fromUri(input.outputDirectory.resolve(basename)).path,
      );
      shared[basename] = (await sha256.bind(file.openRead()).first).toString();
      output.assets.code.add(
        CodeAsset(
          package: input.packageName,
          name: basename,
          linkMode: DynamicLoadingBundled(),
          file: file.uri,
        ),
      );
    }
    output.metadata['libraries'] = shared;
  });
}
