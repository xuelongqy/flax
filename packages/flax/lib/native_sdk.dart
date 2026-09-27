import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:path/path.dart' as p;

final Map<String, Future<void>> _localSdkLocks = {};

/// Build-time input for the native asset hooks. Not part of the runtime API.
final class FlaxNativeSdkResult {
  const FlaxNativeSdkResult(this.bridge, this.libraries, this.sources);

  final File bridge;
  final List<File> libraries;
  final List<File> sources;
}

Future<FlaxNativeSdkResult> buildFlaxNativeSdk({
  required String engine,
  required Uri packageRoot,
  required Uri coreRoot,
  required Uri cacheRoot,
  required Uri outputRoot,
  Uri? sdkArchive,
  String? sdkSha256,
}) async {
  if (!const {'hermes', 'v8'}.contains(engine)) {
    throw ArgumentError.value(engine, 'engine');
  }
  final package = Directory.fromUri(packageRoot);
  final core = Directory.fromUri(coreRoot);
  final cache = Directory.fromUri(cacheRoot)..createSync(recursive: true);
  final output = Directory.fromUri(outputRoot)..createSync(recursive: true);
  final lock = File(p.join(package.path, 'native', 'sdk.lock.json'));
  final pinned = jsonDecode(lock.readAsStringSync()) as Map<String, dynamic>;
  if (pinned['schemaVersion'] != 2 ||
      pinned['engine'] != engine ||
      pinned['os'] != 'macos' ||
      pinned['architecture'] != 'arm64') {
    throw StateError('Invalid $engine SDK lock: ${lock.path}');
  }
  if ((sdkArchive == null) != (sdkSha256 == null)) {
    throw StateError('Set both sdkArchive and sdkSha256');
  }
  final expectedDigest = sdkSha256 ?? pinned['sha256'] as String;
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
        await _verifySdk(sdk, pinned);
      } else {
        if (sdkArchive == null && !archive.existsSync()) {
          await _download(pinned['url'] as String, archive, expectedDigest);
        }
        await _verifyHash(archive, expectedDigest);
        final temporary = Directory(
          p.join(cache.path, 'sdk-$expectedDigest.part'),
        );
        if (temporary.existsSync()) temporary.deleteSync(recursive: true);
        temporary.createSync(recursive: true);
        try {
          await _extract(archive, temporary);
          await _verifySdk(temporary, pinned);
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

  final manifest = jsonDecode(
    File(p.join(sdk.path, 'manifest.json')).readAsStringSync(),
  ) as Map<String, dynamic>;
  final native = Directory(p.join(package.path, 'native'));
  final coreNative = Directory(p.join(core.path, 'native'));
  if (!File(p.join(coreNative.path, 'src', 'runtime.cpp')).existsSync()) {
    throw StateError('Flax ABI source is missing from ${coreNative.path}');
  }
  final sources = [
    lock,
    if (sdkArchive != null) archive,
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
  final build = Directory(p.join(output.path, 'cmake'));
  await _run('cmake', [
    '-S',
    native.path,
    '-B',
    build.path,
    '-G',
    'Ninja',
    '-DFLAX_CORE_NATIVE=${coreNative.path}',
    '-DFLAX_ENGINE_SDK=${sdk.path}',
    '-DCMAKE_BUILD_TYPE=Release',
    '-DCMAKE_OSX_ARCHITECTURES=arm64',
    '-DCMAKE_OSX_DEPLOYMENT_TARGET=15.0',
  ]);
  await _run('cmake', ['--build', build.path, '--target', 'flax_$engine']);
  final bridge = File(p.join(build.path, 'lib', 'libflax_$engine.dylib'));
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
  return FlaxNativeSdkResult(bridgeAsset, libraries, sources);
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
      '--retry-all-errors',
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
    if (p.posix.isAbsolute(name) || components.contains('..')) {
      throw StateError('Unsafe SDK archive path: $name');
    }
  }
  await _run('tar', ['-xzf', archive.path, '-C', destination.path]);
}

Future<void> _verifySdk(Directory sdk, Map<String, dynamic> pinned) async {
  final file = File(p.join(sdk.path, 'manifest.json'));
  if (!file.existsSync()) throw StateError('SDK manifest is missing');
  final data = jsonDecode(file.readAsStringSync()) as Map<String, dynamic>;
  if (data['schemaVersion'] != 2 ||
      data['engine'] != pinned['engine'] ||
      data['sdkVersion'] != pinned['sdkVersion'] ||
      data['os'] != pinned['os'] ||
      data['architecture'] != pinned['architecture'] ||
      data['minimumOSVersion'] != '15.0' ||
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
}

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
}) async {
  final result = await Process.run(executable, arguments);
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
