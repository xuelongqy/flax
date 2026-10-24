import 'dart:convert';
import 'dart:io';

import 'package:code_assets/code_assets.dart';
import 'package:crypto/crypto.dart';
import 'package:hooks/hooks.dart';
import 'package:native_toolchain_c/native_toolchain_c.dart';

Future<String> command(String program, List<String> arguments) async {
  final result = await Process.run(program, arguments);
  if (result.exitCode != 0) {
    throw StateError(
      '$program failed (${result.exitCode}): ${result.stderr}\n${result.stdout}',
    );
  }
  return result.stdout as String;
}

String assetInstallName(String name) => '@rpath/$name.framework/$name';

Future<void> main(List<String> arguments) async {
  await build(arguments, (input, output) async {
    if (!input.config.buildCodeAssets) return;
    final manifest = input.packageRoot.resolve('native-plan.json');
    output.dependencies.add(manifest);
    final plan = jsonDecode(
      await File.fromUri(manifest).readAsString(),
    ) as Map<String, Object?>;
    if (plan['formatVersion'] != 1) {
      throw StateError('Unsupported native asset plan');
    }
    for (final entry in (plan['files'] as Map<String, Object?>).entries) {
      final file = input.packageRoot.resolve(entry.key);
      if ('${sha256.convert(await File.fromUri(file).readAsBytes())}' !=
          entry.value) {
        throw StateError(
          'Native input changed; rebuild the JavaScript application: $file',
        );
      }
      output.dependencies.add(file);
    }
    final built =
        <String, ({String path, String installName, Set<String> aliases})>{};
    for (final library
        in (plan['libraries'] as List<Object?>).cast<Map<String, Object?>>()) {
      final os = input.config.code.targetOS.name;
      if (!(library['targets'] as List<Object?>).contains(os)) {
        throw UnsupportedError('${library['id']} does not support $os');
      }
      var target = '$os-${input.config.code.targetArchitecture.name}';
      if (os == 'ios') {
        target += input.config.code.iOS.targetSdk == IOSSdk.iPhoneSimulator
            ? '-simulator'
            : '-device';
      }
      final binaries = library['binaries'] as Map<String, Object?>;
      var binary = binaries[target] as String?;
      var kind = library['kind'];
      final name = library['name'] as String;
      final dependencies =
          <({String path, String installName, Set<String> aliases})>[];
      for (final id
          in (library['dependencies'] as List<Object?>? ?? const [])) {
        final dependency = built[id];
        if (dependency == null) {
          throw StateError('Native dependency must be built first: $id');
        }
        dependencies.add(dependency);
      }
      if (kind == 'cmake') {
        final cmake = library['cmake'] as Map<String, Object?>;
        final buildDirectory = input.outputDirectory.resolve('cmake-$name/');
        final sdkName = os == 'ios'
            ? (input.config.code.iOS.targetSdk == IOSSdk.iPhoneSimulator
                  ? 'iphonesimulator'
                  : 'iphoneos')
            : 'macosx';
        final sdk = (await command('xcrun', [
          '--sdk',
          sdkName,
          '--show-sdk-path',
        ])).trim();
        await command('cmake', [
          '-S',
          input.packageRoot.resolve(cmake['directory'] as String).toFilePath(),
          '-B',
          buildDirectory.toFilePath(),
          '-DCMAKE_BUILD_TYPE=Release',
          '-DCMAKE_POSITION_INDEPENDENT_CODE=ON',
          '-DCMAKE_OSX_ARCHITECTURES=${input.config.code.targetArchitecture.name}',
          '-DCMAKE_OSX_SYSROOT=$sdk',
          if (os == 'ios') '-DCMAKE_SYSTEM_NAME=iOS',
          '-DCMAKE_OSX_DEPLOYMENT_TARGET=${os == 'ios' ? input.config.code.iOS.targetVersion : input.config.code.macOS.targetVersion}',
          for (final entry
              in (cmake['defines'] as Map<String, Object?>? ?? {}).entries)
            '-D${entry.key}=${entry.value}',
        ]);
        await command('cmake', [
          '--build',
          buildDirectory.toFilePath(),
          '--config',
          'Release',
          if (cmake['target'] != null) ...[
            '--target',
            cmake['target'] as String,
          ],
        ]);
        binary = buildDirectory.resolve(cmake['output'] as String).toFilePath();
        kind = binary.endsWith('.a') ? 'static' : 'dynamic';
      }
      if (kind != 'sources' && binary == null) {
        throw UnsupportedError('${library['id']} has no binary for $target');
      }
      final bundled = input.outputDirectory.resolve('lib$name.dylib');
      if (kind == 'dynamic') {
        await File.fromUri(input.packageRoot.resolve(binary!))
            .copy(bundled.toFilePath());
        output.assets.code.add(
          CodeAsset(
            package: input.packageName,
            name: library['name'] as String,
            linkMode: DynamicLoadingBundled(),
            file: bundled,
          ),
        );
      } else {
        final sources = library['kind'] == 'cmake'
            ? <String>[]
            : (library['sources'] as List<Object?>).cast<String>();
        if (kind == 'static') {
          final anchor = input.outputDirectory.resolve(
            '${library['name']}_anchor.c',
          );
          await File.fromUri(anchor)
              .writeAsString('static const int flax_archive_anchor = 0;\n');
          sources.add(anchor.toFilePath());
        }
        await CBuilder.library(
          name: library['name'] as String,
          assetName: library['name'] as String,
          sources: sources,
          includes: (library['includes'] as List<Object?>).cast<String>(),
          language: library['language'] == 'c++' ? Language.cpp : Language.c,
          std: library['language'] == 'c++' ? 'c++17' : 'c17',
          flags: [
            if (kind == 'static')
              '-Wl,-force_load,${input.packageRoot.resolve(binary!).toFilePath()}',
            for (final dependency in dependencies) dependency.path,
          ],
        ).run(input: input, output: output);
      }
      final path = bundled.toFilePath();
      await command('xcrun', [
        'lipo',
        '-verify_arch',
        input.config.code.targetArchitecture.name,
        path,
      ]);
      final oldId = (await command('xcrun', [
        'otool',
        '-D',
        path,
      ])).trim().split('\n').last.trim();
      final aliases = <String>{oldId, oldId.split('/').last};
      if (binary != null) aliases.add(binary.split('/').last);
      final changes = <String>[];
      final linked = (await command('xcrun', [
        'otool',
        '-L',
        path,
      ])).split('\n').skip(1);
      for (final line in linked) {
        final dependencyName = line
            .trim()
            .split(' (compatibility version')
            .first;
        if (dependencyName.isEmpty ||
            dependencyName == oldId ||
            dependencyName.startsWith('/usr/lib/') ||
            dependencyName.startsWith('/System/Library/')) {
          continue;
        }
        final matches = dependencies
            .where(
              (entry) =>
                  entry.installName == dependencyName ||
                  entry.aliases.contains(dependencyName) ||
                  entry.aliases.contains(dependencyName.split('/').last),
            )
            .toList();
        if (matches.length != 1) {
          throw StateError(
            'Undeclared or ambiguous dependency in ${library['id']}: $dependencyName',
          );
        }
        changes.addAll(['-change', dependencyName, matches.single.installName]);
      }
      final installName = assetInstallName(name);
      await command('xcrun', [
        'install_name_tool',
        '-id',
        installName,
        ...changes,
        path,
      ]);
      built[library['id'] as String] = (
        path: path,
        installName: installName,
        aliases: aliases,
      );
    }
  });
}
