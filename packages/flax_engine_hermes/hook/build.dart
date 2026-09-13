import 'dart:convert';
import 'dart:io';

import 'package:code_assets/code_assets.dart';
import 'package:crypto/crypto.dart';
import 'package:flax/native_runtime.dart';
import 'package:hooks/hooks.dart';

Future<void> main(List<String> arguments) async {
  await build(arguments, (input, output) async {
    if (!input.config.buildCodeAssets) return;
    final config = input.config.code;
    if (config.targetOS != OS.macOS ||
        config.targetArchitecture != Architecture.arm64) {
      throw UnsupportedError(
        'Flax Hermes assets currently support macOS arm64 only.',
      );
    }
    final directory = input.packageRoot.resolve(
      'native/generated/macos_arm64/',
    );
    final manifestFile = File.fromUri(directory.resolve('manifest.json'));
    final library = File.fromUri(directory.resolve('libflax_hermes.dylib'));
    if (!await manifestFile.exists() || !await library.exists()) {
      throw StateError(
        'Hermes native assets are missing. In the Flax repository run '
        '`dart run melos run native:build` before running this package. '
        'A standalone package must include its prepared native/generated assets.',
      );
    }
    final manifest =
        jsonDecode(await manifestFile.readAsString()) as Map<String, Object?>;
    if (manifest['abiVersion'] != FLAX_ABI_VERSION ||
        manifest['os'] != 'macos' ||
        manifest['architecture'] != 'arm64') {
      throw StateError(
        'Hermes asset manifest does not match this host ABI/target.',
      );
    }
    final digest = await sha256.bind(library.openRead()).first;
    if (digest.toString() != manifest['sha256']) {
      throw StateError(
        'Hermes native asset checksum mismatch; rebuild the assets.',
      );
    }
    output.dependencies.add(manifestFile.uri);
    output.dependencies.add(library.uri);
    output.assets.code.add(
      CodeAsset(
        package: input.packageName,
        name: 'flax_engine_hermes.dart',
        linkMode: DynamicLoadingBundled(),
        file: library.uri,
      ),
    );
  });
}
