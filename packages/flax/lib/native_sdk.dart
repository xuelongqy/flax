import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:path/path.dart' as p;

import 'native_target.dart';

final Map<String, Future<void>> _localSdkLocks = {};

/// Build-time input for the native asset hooks. Not part of the runtime API.
final class FlaxNativeSdkResult {
  const FlaxNativeSdkResult(
    this.bridge,
    this.libraries,
    this.sources, {
    this.testLibrary,
  });

  final File bridge;
  final List<File> libraries;
  final List<File> sources;
  final File? testLibrary;
}

/// Download and verify an engine SDK without compiling a bridge.
Future<(Directory, List<File>)> prepareFlaxEngineSdk({
  required String engine,
  required Uri packageRoot,
  required Uri cacheRoot,
  required FlaxNativeTarget target,
  Uri? sdkArchive,
  String? sdkSha256,
}) async {
  if (!const {'hermes', 'v8'}.contains(engine)) {
    throw ArgumentError.value(engine, 'engine');
  }
  final package = Directory.fromUri(packageRoot);
  final cache = Directory.fromUri(cacheRoot)..createSync(recursive: true);
  final lock = File(p.join(package.path, 'native', 'sdk.lock.json'));
  final pinned = jsonDecode(lock.readAsStringSync()) as Map<String, dynamic>;
  if (pinned['schemaVersion'] != 3 ||
      pinned['engine'] != engine ||
      pinned['targets'] is! Map ||
      !(pinned['targets'] as Map).containsKey(target.name)) {
    throw StateError('Invalid $engine SDK lock: ${lock.path}');
  }
  final pin = <String, dynamic>{
    ...pinned,
    ...Map<String, dynamic>.from(pinned['targets'][target.name] as Map),
    'target': target.name,
  };
  if (pin['os'] != target.os ||
      pin['architecture'] != target.architecture ||
      pin['appleSdk'] != target.appleSdk) {
    throw StateError('SDK lock metadata does not match ${target.name}');
  }
  if ((sdkArchive == null) != (sdkSha256 == null)) {
    throw StateError('Set both sdkArchive and sdkSha256');
  }
  final expectedDigest = sdkSha256 ?? pin['sha256'] as String;
  _requireDigestShape(expectedDigest);
  final archive = sdkArchive == null
      ? File(p.join(cache.path, '$expectedDigest.tar.gz'))
      : File.fromUri(sdkArchive);
  final sdk = Directory(p.join(cache.path, 'sdk-$expectedDigest'));
  final lockFile = File(p.join(cache.path, 'sdk-$expectedDigest.lock'));
  final previous = _localSdkLocks[lockFile.path];
  final gate = Completer<void>();
  _localSdkLocks[lockFile.path] = gate.future;
  try {
    if (previous != null) await previous;
    final cacheLock = await lockFile.open(mode: FileMode.append);
    try {
      await cacheLock.lock(FileLock.exclusive);
      if (sdk.existsSync()) {
        if (sdkArchive != null) await _verifyHash(archive, expectedDigest);
        await _verifySdk(sdk, pin);
      } else {
        if (sdkArchive == null && !archive.existsSync()) {
          await _download(pin['url'] as String, archive, expectedDigest);
        }
        await _verifyHash(archive, expectedDigest);
        final temporary = Directory(
          p.join(cache.path, 'sdk-$expectedDigest.part'),
        );
        if (temporary.existsSync()) temporary.deleteSync(recursive: true);
        temporary.createSync(recursive: true);
        try {
          await _extract(archive, temporary);
          await _verifySdk(temporary, pin);
          temporary.renameSync(sdk.path);
        } finally {
          if (temporary.existsSync()) temporary.deleteSync(recursive: true);
        }
      }
    } finally {
      await cacheLock.unlock();
      await cacheLock.close();
    }
  } finally {
    if (identical(_localSdkLocks[lockFile.path], gate.future)) {
      _localSdkLocks.remove(lockFile.path);
    }
    gate.complete();
  }

  return (sdk, [lock, if (sdkArchive != null) archive]);
}

Future<FlaxNativeSdkResult> buildFlaxNativeSdk({
  required String engine,
  required Uri packageRoot,
  required Uri coreRoot,
  required Uri cacheRoot,
  required Uri outputRoot,
  FlaxNativeTarget? target,
  Uri? compiler,
  Uri? compilerEnvironmentScript,
  List<String> compilerEnvironmentArguments = const [],
  bool buildTests = false,
  bool testContracts = false,
  Uri? sdkArchive,
  String? sdkSha256,
}) async {
  target ??= FlaxNativeTarget.host();
  final (sdk, sdkSources) = await prepareFlaxEngineSdk(
    engine: engine,
    packageRoot: packageRoot,
    cacheRoot: cacheRoot,
    target: target,
    sdkArchive: sdkArchive,
    sdkSha256: sdkSha256,
  );
  final package = Directory.fromUri(packageRoot);
  final core = Directory.fromUri(coreRoot);
  final output = Directory.fromUri(outputRoot)..createSync(recursive: true);
  final pinned = jsonDecode(
    File(p.join(package.path, 'native', 'sdk.lock.json')).readAsStringSync(),
  ) as Map;
  final expectedDigest =
      sdkSha256 ?? pinned['targets'][target.name]['sha256'] as String;

  final manifest = jsonDecode(
    File(p.join(sdk.path, 'manifest.json')).readAsStringSync(),
  ) as Map<String, dynamic>;
  final native = Directory(p.join(package.path, 'native'));
  final coreNative = Directory(p.join(core.path, 'native'));
  if (!File(p.join(coreNative.path, 'src', 'runtime.cpp')).existsSync()) {
    throw StateError('Flax ABI source is missing from ${coreNative.path}');
  }
  final sources = [
    ...sdkSources,
    File(p.join(core.path, 'lib', 'native_sdk.dart')),
    File(p.join(core.path, 'lib', 'native_target.dart')),
    ...native
        .listSync(recursive: true, followLinks: false)
        .whereType<File>()
        .where(
          (f) => !f.path.contains('${p.separator}generated${p.separator}'),
        ),
    ...coreNative
        .listSync(recursive: true, followLinks: false)
        .whereType<File>()
        .where((f) => f.path.endsWith('.cpp') || f.path.endsWith('.h')),
  ];
  final environment = <String, String>{};
  if (compilerEnvironmentScript != null) {
    // The compiler configuration supplies this trusted Visual Studio script.
    String quote(String value) {
      if (RegExp(r'["%\r\n&|<>^]').hasMatch(value)) {
        throw ArgumentError('Invalid compiler environment argument');
      }
      return '"$value"';
    }

    final result = await _run('cmd', [
      '/d',
      '/s',
      '/c',
      'call ${quote(compilerEnvironmentScript.toFilePath())} '
          '${compilerEnvironmentArguments.map(quote).join(' ')} >nul && set',
    ], capture: true);
    for (final line in const LineSplitter().convert(result)) {
      final split = line.indexOf('=');
      if (split > 0) {
        environment[line.substring(0, split)] = line.substring(split + 1);
      }
    }
  }
  final options = await flaxNativeCmakeOptions(target, compiler: compiler);
  final build = Directory(p.join(output.path, 'cmake'));
  final previousConfig = File(p.join(build.path, 'CMakeCache.txt'));
  await _run('cmake', [
    // Migrate hook caches created before Windows used the validated VS build.
    if (target.os == 'windows' &&
        compiler == null &&
        previousConfig.existsSync() &&
        previousConfig.readAsStringSync().contains(
          'CMAKE_GENERATOR:INTERNAL=Ninja',
        ))
      '--fresh',
    '-S',
    native.path,
    '-B',
    build.path,
    if (target.os == 'windows' && compiler == null) ...[
      '-A',
      target.architecture == 'arm64' ? 'ARM64' : 'x64',
    ] else ...[
      '-G',
      'Ninja',
    ],
    '-DFLAX_CORE_NATIVE=${coreNative.path}',
    '-DFLAX_ENGINE_SDK=${sdk.path}',
    '-DFlaxEngineSDK_DIR=${sdk.path}/cmake',
    '-DCMAKE_BUILD_TYPE=Release',
    '-DBUILD_TESTING=${buildTests ? 'ON' : 'OFF'}',
    '-DFLAX_TEST_CONTRACTS=${testContracts ? 'ON' : 'OFF'}',
    ...options,
  ], environment: environment);
  await _run('cmake', [
    '--build',
    build.path,
    '--config',
    'Release',
    '--target',
    'flax_$engine',
  ], environment: environment);
  final bridge = File(p.join(build.path, 'lib', target.bridgeName(engine)));
  if (!bridge.existsSync()) throw StateError('Missing built $engine bridge');
  final assetDir = Directory(p.join(output.path, 'assets'))
    ..createSync(recursive: true);
  final bridgeAsset = bridge.copySync(
    p.join(assetDir.path, p.basename(bridge.path)),
  );
  final libraries = <File>[];
  for (final relative in (manifest['libraries'] as List).cast<String>()) {
    final source = File(p.join(sdk.path, relative));
    libraries.add(source.copySync(p.join(assetDir.path, p.basename(relative))));
  }
  File(p.join(output.path, 'sdk-receipt.json')).writeAsStringSync(
    jsonEncode({
      'target': target.name,
      'engine': engine,
      'sdkSha256': expectedDigest,
      'sdkVersion': manifest['sdkVersion'],
      'libraries': {
        for (final relative in (manifest['libraries'] as List).cast<String>())
          p.posix.basename(relative): manifest['files'][relative],
      },
    }),
  );
  File? testLibrary;
  if (testContracts) {
    await _run('cmake', [
      '--build',
      build.path,
      '--config',
      'Release',
      '--target',
      'flax_test_contracts',
    ], environment: environment);
    testLibrary =
        File(
          p.join(
            build.path,
            'lib',
            target.bridgeName('${engine}_test_contracts'),
          ),
        ).copySync(
          p.join(assetDir.path, target.bridgeName('${engine}_test_contracts')),
        );
  }
  return FlaxNativeSdkResult(
    bridgeAsset,
    libraries,
    sources,
    testLibrary: testLibrary,
  );
}

Future<List<String>> flaxNativeCmakeOptions(
  FlaxNativeTarget target, {
  Uri? compiler,
}) async {
  final options = <String>[];
  if (target.apple) {
    options.addAll([
      '-DCMAKE_OSX_ARCHITECTURES=${target.architecture == 'x64' ? 'x86_64' : 'arm64'}',
      '-DCMAKE_OSX_DEPLOYMENT_TARGET=15.0',
    ]);
    if (target.os == 'ios') {
      options.addAll([
        '-DCMAKE_SYSTEM_NAME=iOS',
        '-DCMAKE_OSX_SYSROOT=${(await _run('xcrun', ['--sdk', target.appleSdk!, '--show-sdk-path'], capture: true)).trim()}',
      ]);
    }
  } else if (target.os == 'android') {
    final home =
        Platform.environment['ANDROID_HOME'] ??
        Platform.environment['ANDROID_SDK_ROOT'];
    final ndk =
        Platform.environment['ANDROID_NDK_HOME'] ??
        (home == null ? null : p.join(home, 'ndk', '30.0.16248370'));
    if (ndk == null ||
        !File(p.join(ndk, 'build', 'cmake', 'android.toolchain.cmake'))
            .existsSync() ||
        !File(p.join(ndk, 'source.properties'))
            .readAsStringSync()
            .contains('30.0.16248370')) {
      throw StateError(
        'Android requires NDK 30.0.16248370 (ANDROID_NDK_HOME or ANDROID_HOME)',
      );
    }
    options.addAll([
      '-DCMAKE_TOOLCHAIN_FILE=$ndk/build/cmake/android.toolchain.cmake',
      '-DANDROID_ABI=${target.androidAbi}',
      '-DANDROID_PLATFORM=android-24',
      '-DANDROID_STL=c++_shared',
    ]);
  }
  if (target.os == 'linux' || target.os == 'windows' || target.apple) {
    if (compiler != null) {
      final cc = compiler.toFilePath();
      final name = p.basename(cc);
      final cxxName = name.startsWith('clang') && name != 'clang-cl.exe'
          ? name.replaceFirst('clang', 'clang++')
          : name.startsWith('gcc')
          ? name.replaceFirst('gcc', 'g++')
          : name;
      options.addAll([
        '-DCMAKE_C_COMPILER=$cc',
        '-DCMAKE_CXX_COMPILER=${p.join(p.dirname(cc), cxxName)}',
      ]);
    } else if (target.os == 'linux') {
      options.addAll([
        '-DCMAKE_C_COMPILER=${Platform.environment['CC'] ?? 'clang-23'}',
        '-DCMAKE_CXX_COMPILER=${Platform.environment['CXX'] ?? 'clang++-23'}',
      ]);
    }
  }
  return options;
}

Future<void> _download(String url, File archive, String digest) async {
  final uri = Uri.tryParse(url);
  if (uri == null ||
      uri.scheme != 'https' ||
      uri.host != 'github.com' ||
      !uri.path.startsWith('/xuelongqy/flax_js_runtime/releases/download/')) {
    throw StateError('Unexpected engine SDK download URL: $url');
  }
  final partial = File('${archive.path}.part');
  if (partial.existsSync()) partial.deleteSync();
  try {
    await _run('curl', [
      '--fail',
      '--location',
      '--retry',
      '2',
      // Supported by Ubuntu 20.04's curl; --retry-all-errors is not.
      '--retry-connrefused',
      '--connect-timeout',
      '15',
      '--silent',
      '--show-error',
      '--output',
      partial.path,
      uri.toString(),
    ]);
    await _verifyHash(partial, digest);
    partial.renameSync(archive.path);
  } finally {
    if (partial.existsSync()) partial.deleteSync();
  }
}

Future<void> _extract(File archive, Directory destination) async {
  final listing = await _run('tar', ['-tzvf', archive.path], capture: true);
  for (final line in const LineSplitter().convert(listing)) {
    if (line.isEmpty) continue;
    if (line.startsWith('l') || line.startsWith('h')) {
      throw StateError('SDK archive contains a link');
    }
  }
  final names = await _run('tar', ['-tzf', archive.path], capture: true);
  for (final name in const LineSplitter().convert(names)) {
    if (name.isEmpty) continue;
    final components = p.posix.split(name);
    if (p.posix.isAbsolute(name) ||
        p.windows.isAbsolute(name) ||
        name.contains('\\') ||
        components.contains('..')) {
      throw StateError('Unsafe SDK archive path: $name');
    }
  }
  await _run('tar', ['-xzf', archive.path, '-C', destination.path]);
}

Future<void> _verifySdk(Directory sdk, Map<String, dynamic> pinned) async {
  final file = File(p.join(sdk.path, 'manifest.json'));
  if (!file.existsSync()) throw StateError('SDK manifest is missing');
  final data = jsonDecode(file.readAsStringSync()) as Map<String, dynamic>;
  if (data['schemaVersion'] != 3 ||
      data['engine'] != pinned['engine'] ||
      data['sdkVersion'] != pinned['sdkVersion'] ||
      data['os'] != pinned['os'] ||
      data['architecture'] != pinned['architecture'] ||
      data['target'] != pinned['target'] ||
      data['appleSdk'] != pinned['appleSdk'] ||
      data['minimumOSVersion'] != pinned['minimumOSVersion'] ||
      data['minimumGlibcVersion'] != pinned['minimumGlibcVersion'] ||
      data.containsKey('abiVersion') ||
      data.containsKey('entrySymbol')) {
    throw StateError(
      'SDK target or version does not match ${pinned['engine']} lock',
    );
  }
  final files = Map<String, String>.from(data['files'] as Map);
  if (files.isEmpty ||
      data['libraries'] is! List ||
      (data['libraries'] as List).isEmpty ||
      !files.containsKey(data['cmakeConfig'])) {
    throw StateError('Incomplete SDK manifest');
  }
  for (final entry in files.entries) {
    if (p.posix.isAbsolute(entry.key) ||
        p.windows.isAbsolute(entry.key) ||
        entry.key.contains('\\') ||
        p.posix.split(entry.key).contains('..')) {
      throw StateError('Unsafe SDK file path: ${entry.key}');
    }
    await _verifyHash(File(p.join(sdk.path, entry.key)), entry.value);
  }
  for (final library in (data['libraries'] as List).cast<String>()) {
    if (!files.containsKey(library)) {
      throw StateError('Unhashed SDK library: $library');
    }
  }
  final libraries = (data['libraries'] as List).cast<String>();
  String dependencyName(String name) => pinned['os'] == 'windows'
      ? p.posix.basename(name).toLowerCase()
      : p.posix.basename(name);
  final basenames = libraries.map(dependencyName).toSet();
  if (basenames.length != libraries.length ||
      data['dynamicDependencies'] is! Map ||
      data['cmakeTarget'] != 'FlaxEngineSDK::${pinned['engine']}') {
    throw StateError('Invalid SDK dependency or link configuration');
  }
  for (final library in libraries) {
    final dependencies = data['dynamicDependencies'][library];
    if (dependencies is! List) {
      throw StateError('Missing SDK dependencies: $library');
    }
    for (final dependency in dependencies.cast<String>()) {
      final name = dependencyName(dependency);
      if (!basenames.contains(name) &&
          !flaxSdkSystemDependency(pinned['os'] as String, dependency)) {
        throw StateError('Missing SDK dependency: $library -> $dependency');
      }
    }
  }
  if (pinned['os'] == 'windows') {
    final imports = Map<String, String>.from(data['importLibraries'] as Map);
    if (imports.isEmpty ||
        imports.entries.any(
          (e) => !libraries.contains(e.key) || !files.containsKey(e.value),
        )) {
      throw StateError('Missing Windows SDK import library');
    }
  }
  if (pinned['engine'] == 'v8' &&
      data['metadata']?['jit'] != (pinned['os'] != 'ios')) {
    throw StateError(
      'V8 SDK JIT configuration does not match ${pinned['target']}',
    );
  }
}

/// System libraries supplied by the minimum supported operating system.
bool flaxSdkSystemDependency(String os, String dependency) => switch (os) {
  'macos' || 'ios' =>
    dependency.startsWith('/usr/lib/') ||
        dependency.startsWith('/System/Library/'),
  'windows' => RegExp(
    r'^(api-ms-.*|ext-ms-.*|kernel32|user32|advapi32|ole32|oleaut32|shell32|ws2_32|bcrypt|ntdll|dbghelp|winmm|version|psapi|secur32|crypt32|ucrtbase|icuuc|icuin)\.dll$',
    caseSensitive: false,
  ).hasMatch(dependency),
  'linux' => RegExp(
    r'^(lib(c|m|dl|pthread|rt|gcc_s|stdc\+\+)\.so(\..*)?|ld-linux.*\.so(\..*)?)$',
  ).hasMatch(dependency),
  'android' => const {
    'libc.so',
    'libm.so',
    'libdl.so',
    'liblog.so',
    'libandroid.so',
  }.contains(dependency),
  _ => false,
};

void _requireDigestShape(String digest) {
  if (!RegExp(r'^[0-9a-f]{64}$').hasMatch(digest)) {
    throw StateError('Invalid SDK SHA-256 digest');
  }
}

Future<void> _verifyHash(File file, String digest) async {
  _requireDigestShape(digest);
  if (!file.existsSync() ||
      (await sha256.bind(file.openRead()).first).toString() != digest) {
    throw StateError('SDK checksum mismatch: ${file.path}');
  }
}

Future<String> _run(
  String executable,
  List<String> arguments, {
  bool capture = false,
  Map<String, String>? environment,
}) async {
  final result = await Process.run(
    executable,
    arguments,
    environment: environment,
  );
  if (result.exitCode != 0) {
    throw ProcessException(
      executable,
      arguments,
      '${result.stdout}\n${result.stderr}',
      result.exitCode,
    );
  }
  if (!capture && result.stdout.toString().isNotEmpty) {
    stdout.write(result.stdout);
  }
  return result.stdout.toString();
}
