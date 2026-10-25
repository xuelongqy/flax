import 'dart:convert';
import 'dart:io';

import 'package:code_assets/code_assets.dart';
import 'package:crypto/crypto.dart';
import 'package:hooks/hooks.dart';
import 'package:native_toolchain_c/native_toolchain_c.dart';

Future<String> command(String program, List<String> arguments) async {
  final ProcessResult result;
  try {
    result = await Process.run(program, arguments);
  } on ProcessException catch (error) {
    if (program == 'cmake' && error.errorCode == 2) {
      throw StateError(
        'CMake is required for native kind "cmake". Install CMake 3.24 or newer, '
        'add it to PATH, then verify "cmake --version". $error',
      );
    }
    rethrow;
  }
  if (result.exitCode != 0) {
    throw StateError(
      '$program failed (${result.exitCode}): ${result.stderr}\n${result.stdout}',
    );
  }
  return result.stdout as String;
}

String assetInstallName(String name) => '@rpath/$name.framework/$name';
String cmakeString(String value) => jsonEncode(value).replaceAll(r'$', r'\$');

List<String> generationFlags(
  Map<String, Object?> library,
  Map<String, Object?> profile,
  Uri root,
) => [
  '-target',
  profile['triple'] as String,
  '-isysroot',
  profile['sdk'] as String,
  profile['deploymentFlag'] as String,
  '-std=${library['std'] ?? (library['language'] == 'c++' ? 'c++17' : 'c17')}',
  ...(library['flags'] as List<Object?>? ?? const []).cast<String>(),
  for (final entry in (library['defines'] as Map? ?? const {}).entries)
    '-D${entry.key}${entry.value == null ? '' : '=${entry.value}'}',
  for (final path in (library['includes'] as List<Object?>).cast<String>()) ...[
    '-I',
    root.resolve(path).toFilePath(),
  ],
];

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
    final profile = (plan['profile'] as Map?)?.cast<String, Object?>();
    if (profile != null) {
      final os = input.config.code.targetOS.name;
      final variant = os == 'ios'
          ? (input.config.code.iOS.targetSdk == IOSSdk.iPhoneSimulator
                ? '-simulator'
                : '-device')
          : '';
      final target = '$os-${input.config.code.targetArchitecture.name}$variant';
      if (target != profile['target']) {
        throw StateError(
          'FFI definitions target ${profile['target']} does not match Flutter target $target; rebuild JavaScript for $target',
        );
      }
      final sdk = await Directory(
        (await command('xcrun', [
          '--sdk',
          profile['sdkName'] as String,
          '--show-sdk-path',
        ])).trim(),
      ).resolveSymbolicLinks();
      final settings = File('$sdk/SDKSettings.json');
      if (sdk != profile['sdk'] ||
          '${sha256.convert(await settings.readAsBytes())}' !=
              profile['sdkDigest']) {
        throw StateError('FFI SDK changed; rebuild JavaScript');
      }
      final compiler = await File(
        (await command('xcrun', [
          '--sdk',
          profile['sdkName'] as String,
          '--find',
          'clang',
        ])).trim(),
      ).resolveSymbolicLinks();
      final version = (await command(compiler, ['--version'])).trim();
      if (compiler != profile['compiler'] ||
          '${sha256.convert(utf8.encode(version))}' !=
              profile['compilerDigest']) {
        throw StateError('FFI compiler changed; rebuild JavaScript');
      }
      output.dependencies.add(settings.uri);
    }
    for (final entry in (plan['externalInputs'] as Map? ?? const {}).entries) {
      final file = File(entry.key as String);
      if ('${sha256.convert(await file.readAsBytes())}' != entry.value) {
        throw StateError(
          'FFI SDK header changed; rebuild JavaScript: ${file.path}',
        );
      }
      output.dependencies.add(file.uri);
    }
    final built =
        <String, ({String path, String installName, Set<String> aliases})>{};
    String? swiftSdk = profile?['sdk'] as String?;
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
      final generated = library['codegen'] == true;
      final abi = generated
          ? input.packageRoot.resolve(library['abiSource'] as String)
          : null;
      final name = library['name'] as String;
      final dependencies =
          <({String path, String installName, Set<String> aliases})>[];
      if (generated) {
        await command(profile!['compiler'] as String, [
          ...generationFlags(library, profile, input.packageRoot),
          '-x',
          library['language'] == 'c++' ? 'c++' : 'c',
          '-fsyntax-only',
          abi!.toFilePath(),
        ]);
      }
      Uri? compiledAbi;
      if (generated && kind != 'dynamic') {
        compiledAbi = input.outputDirectory.resolve(
          '${name}_abi.${library['language'] == 'c++' ? 'cpp' : 'c'}',
        );
        await File.fromUri(abi!).copy(compiledAbi.toFilePath());
      }
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
        Uri? abiHook;
        if (generated) {
          if (cmake['target'] is! String ||
              (cmake['target'] as String).isEmpty) {
            throw StateError('CMake codegen requires an explicit cmake.target');
          }
          await Directory.fromUri(buildDirectory).create(recursive: true);
          abiHook = buildDirectory.resolve('flax_ffi_abi.cmake');
          final flagVariable =
              'CMAKE_${library['language'] == 'c++' ? 'CXX' : 'C'}_FLAGS';
          final flags = generationFlags(
            library,
            profile!,
            input.packageRoot,
          ).map((value) => "'${value.replaceAll("'", "'\\''")}'").join(' ');
          // Add a separate unit after target creation; preserve source-local feature macros.
          await File.fromUri(abiHook).writeAsString(
            'include_guard(GLOBAL)\n'
            'set($flagVariable ${cmakeString(flags)} CACHE STRING "" FORCE)\n'
            'set(${flagVariable}_RELEASE "" CACHE STRING "" FORCE)\n'
            'cmake_language(DEFER DIRECTORY "\${CMAKE_SOURCE_DIR}" CALL target_sources '
            '${cmakeString(cmake['target'] as String)} PRIVATE ${cmakeString(compiledAbi!.toFilePath())})\n',
          );
        }
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
          if (generated) ...[
            '-DCMAKE_C_COMPILER=${profile!['compiler']}',
            '-DCMAKE_CXX_COMPILER=${File(profile['compiler'] as String).parent.path}/clang++',
            '-DCMAKE_PROJECT_INCLUDE_BEFORE=${abiHook!.toFilePath()}',
          ],
          '-DCMAKE_OSX_ARCHITECTURES=${input.config.code.targetArchitecture.name}',
          '-DCMAKE_OSX_SYSROOT=$sdk',
          if (os == 'ios') '-DCMAKE_SYSTEM_NAME=iOS',
          '-DCMAKE_OSX_DEPLOYMENT_TARGET=${generated
              ? profile!['deploymentTarget']
              : os == 'ios'
              ? input.config.code.iOS.targetVersion
              : input.config.code.macOS.targetVersion}',
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
        if (generated && library['kind'] != 'cmake') {
          sources.add(compiledAbi!.toFilePath());
        }
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
          std:
              library['std'] as String? ??
              (library['language'] == 'c++' ? 'c++17' : 'c17'),
          defines:
              (library['defines'] as Map?)?.cast<String, String?>() ?? const {},
          buildModeDefine: !generated,
          ndebugDefine: !generated,
          optimizationLevel: generated
              ? OptimizationLevel.unspecified
              : OptimizationLevel.o3,
          flags: [
            if (generated)
              ...generationFlags(library, profile!, input.packageRoot)
            else
              ...(library['flags'] as List<Object?>? ?? const [])
                  .cast<String>(),
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
      final architectures = (await command('xcrun', [
        'lipo',
        '-archs',
        path,
      ])).trim().split(RegExp(r'\s+'));
      if (architectures.length > 1) {
        final thin = '$path.thin';
        await command('xcrun', [
          'lipo',
          path,
          '-thin',
          input.config.code.targetArchitecture.name,
          '-output',
          thin,
        ]);
        await File(thin).rename(path);
      }
      final metadata = await command('xcrun', ['vtool', '-show-build', path]);
      // Zippered libraries may declare several platforms and mix old/new commands.
      final platforms = RegExp(
        r'^\s*platform\s+(\S+)',
        multiLine: true,
      ).allMatches(metadata).map((match) => match[1]!).toSet();
      if (RegExp(
        r'^\s*cmd\s+LC_VERSION_MIN_MACOSX\s*$',
        multiLine: true,
      ).hasMatch(metadata)) {
        platforms.add('MACOS');
      }
      if (RegExp(
        r'^\s*cmd\s+LC_VERSION_MIN_IPHONEOS\s*$',
        multiLine: true,
      ).hasMatch(metadata)) {
        platforms.add('IOS');
      }
      final expectedPlatform = os == 'macos'
          ? 'MACOS'
          : input.config.code.iOS.targetSdk == IOSSdk.iPhoneSimulator
          ? 'IOSSIMULATOR'
          : 'IOS';
      if (!platforms.contains(expectedPlatform)) {
        throw StateError(
          'Native platform mismatch in ${library['id']}: ${platforms.isEmpty ? 'unknown' : platforms.join(', ')}; expected $expectedPlatform',
        );
      }
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
        // Swift compatibility aliases may resolve to an SDK-provided system image.
        final swift = RegExp(r'^@rpath/(libswift[\w]+\.dylib)$')
            .firstMatch(dependencyName);
        if (matches.isEmpty && swift != null) {
          swiftSdk ??= (await command('xcrun', [
            '--sdk',
            os == 'ios'
                ? (input.config.code.iOS.targetSdk == IOSSdk.iPhoneSimulator
                      ? 'iphonesimulator'
                      : 'iphoneos')
                : 'macosx',
            '--show-sdk-path',
          ])).trim();
          final systemName = '/usr/lib/swift/${swift[1]}';
          final stub = File(
            '$swiftSdk${systemName.replaceFirst(RegExp(r'\.dylib$'), '.tbd')}',
          );
          if (await stub.exists()) {
            final declared = RegExp(
              r'''install-name:\s*['"]?(/usr/lib/swift/[^'"\s]+)''',
            ).firstMatch(await stub.readAsString())?[1];
            if (declared == systemName) {
              output.dependencies.add(stub.uri);
              changes.addAll(['-change', dependencyName, systemName]);
              continue;
            }
          }
        }
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
