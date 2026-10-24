import 'dart:convert';
import 'dart:io';

import 'package:code_assets/code_assets.dart';
import 'package:hooks/hooks.dart';
import 'package:native_toolchain_c/native_toolchain_c.dart';

Future<void> main(List<String> arguments) async {
  await build(arguments, (input, output) async {
    if (!input.config.buildCodeAssets) return;
    final selection = input.packageRoot.resolve('selection.json');
    output.dependencies.add(selection);
    final plan =
        jsonDecode(await File.fromUri(selection).readAsString()) as Map;
    if (plan['enabled'] != true) return;
    await CBuilder.library(
      name: 'flax_ffi_dlopen_fixture',
      assetName: 'fixture',
      sources: ['native/fixture.c'],
      language: Language.c,
      std: 'c17',
      flags: [
        '-DFFI_DYNAMIC',
        '-fvisibility=hidden',
        '-Wall',
        '-Wextra',
        '-Werror',
      ],
    ).run(input: input, output: output);
  });
}
