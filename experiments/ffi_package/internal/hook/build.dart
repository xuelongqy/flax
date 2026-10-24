import 'dart:convert';
import 'dart:io';

import 'package:code_assets/code_assets.dart';
import 'package:crypto/crypto.dart';
import 'package:hooks/hooks.dart';
import 'package:native_toolchain_c/native_toolchain_c.dart';

Future<void> main(List<String> arguments) async {
  await build(arguments, (input, output) async {
    if (!input.config.buildCodeAssets) return;
    final manifest = input.packageRoot.resolve('native-plan.json');
    output.dependencies.add(manifest);
    final plan = jsonDecode(await File.fromUri(manifest).readAsString()) as Map;
    if (plan['formatVersion'] != 1) throw StateError('Unsupported FFI plan');
    final providers = (plan['providers'] as List).cast<Map>();
    if (providers.isEmpty) return;
    final os = input.config.code.targetOS.name;
    for (final provider in providers) {
      if (!(provider['targets'] as List).contains(os)) {
        throw UnsupportedError('Native provider does not support $os');
      }
    }
    final files = (plan['files'] as Map).cast<String, String>();
    for (final entry in files.entries) {
      final file = input.packageRoot.resolve(entry.key);
      final actual = sha256.convert(await File.fromUri(file).readAsBytes());
      if ('$actual' != entry.value) {
        throw StateError(
          'FFI input changed; prepare the JS build again: $file',
        );
      }
      output.dependencies.add(file);
    }
    await CBuilder.library(
      name: 'flax_ffi_providers',
      assetName: 'providers',
      sources: (plan['sources'] as List).cast<String>(),
      includes: (plan['includes'] as List).cast<String>(),
      language: Language.c,
      std: 'c17',
      flags: [
        '-fvisibility=hidden',
        if (input.config.code.targetOS == OS.android)
          '-Wl,-z,max-page-size=16384',
      ],
    ).run(input: input, output: output);
  });
}
