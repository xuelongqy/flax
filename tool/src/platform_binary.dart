import 'dart:io';
import 'dart:convert';

import 'package:path/path.dart' as p;

import 'dart:typed_data';

import 'package:crypto/crypto.dart';
import 'package:flax/native_sdk.dart';
import 'package:flax/native_target.dart';

import 'local_engine.dart';

/// Audit the engine-owned V8 closure after Flutter signs the real application.
Future<Map<String, Object?>> verifyEngineApplication(
  String product,
  String mode, {
  FlaxNativeTarget? target,
}) async {
  target ??= FlaxNativeTarget('macos-arm64');
  final source = '${flutterSdkRoot()}/engine/src';
  final lock = jsonDecode(
    File('$source/flutter/flax/source.lock.json').readAsStringSync(),
  ) as Map;
  final expected = (lock['targets'][target.name]['libraries'] as Map)
      .cast<String, String>();
  if (target.name == 'android-arm64') {
    return _verifyAndroidEngineApplication(product, mode, expected);
  }
  final framework =
      '$product/Contents/Frameworks/FlutterMacOS.framework/Versions/A';
  final files = Directory(product)
      .listSync(recursive: true, followLinks: false)
      .whereType<File>()
      .toList();
  final libraries = <File>[];
  final hashes = <String, String>{};
  final temporary = Directory.systemTemp.createTempSync(
    'flax-signed-libraries-',
  );
  try {
    for (final entry in expected.entries) {
      final name = p.basename(entry.key);
      final matches = files
          .where((file) => p.basename(file.path) == name)
          .toList();
      if (matches.length != 1 ||
          matches.single.path != '$framework/Libraries/$name') {
        throw StateError('Expected one engine-owned $name in the application');
      }
      final original = File(
        '$source/out/flax_mac_${mode}_arm64/FlutterMacOS.framework/Versions/A/Libraries/$name',
      );
      if ((await sha256.bind(original.openRead()).first).toString() !=
          entry.value) {
        throw StateError('Engine SDK input changed: $name');
      }
      final normalized = <String>[];
      for (final (index, file) in [original, matches.single].indexed) {
        final copy = file.copySync('${temporary.path}/$index-$name');
        final strip = await Process.run('codesign', [
          '--remove-signature',
          copy.path,
        ]);
        if (strip.exitCode != 0 && !'${strip.stderr}'.contains('not signed')) {
          throw StateError(
            'Cannot inspect signed library $name: ${strip.stderr}',
          );
        }
        normalized.add((await sha256.bind(copy.openRead()).first).toString());
      }
      if (normalized[0] != normalized[1]) {
        throw StateError('Packaged library content changed: $name');
      }
      libraries.add(matches.single);
      hashes[name] = normalized.first;
    }
    final binary = File('$framework/FlutterMacOS');
    await verifyBinaryArchitectures(target, [binary, ...libraries]);
    await verifyNativeDependencies(target, [binary, ...libraries]);
    await _inspect('codesign', ['--verify', '--deep', '--strict', product]);
    final entitlements = await _inspect('codesign', [
      '--display',
      '--entitlements',
      ':-',
      product,
    ]);
    if (!RegExp(r'<key>com.apple.security.cs.allow-jit</key>\s*<true\s*/>')
        .hasMatch(entitlements)) {
      throw StateError('The macOS application is missing allow-jit');
    }
    final signature = await Process.run('codesign', [
      '--display',
      '--verbose=4',
      product,
    ]);
    if (signature.exitCode != 0 || !hasHardenedRuntime('${signature.stderr}')) {
      throw StateError(
        'The release application is missing hardened runtime signing: '
        '${signature.stdout}${signature.stderr}',
      );
    }
    return {
      'signatureVerified': true,
      'hardenedRuntime': true,
      'allowJit': true,
      'adHocSigning': '${signature.stderr}'.contains('Signature=adhoc'),
      'libraryValidation': !RegExp(
        r'<key>com.apple.security.cs.disable-library-validation</key>\s*<true\s*/>',
      ).hasMatch(entitlements),
      'singleV8Closure': true,
      'unsignedLibrarySha256': hashes,
    };
  } finally {
    temporary.deleteSync(recursive: true);
  }
}

Future<Map<String, Object?>> _verifyAndroidEngineApplication(
  String product,
  String mode,
  Map<String, String> expected,
) async {
  final target = FlaxNativeTarget('android-arm64');
  final entries = (await _inspect('unzip', ['-Z1', product])).split('\n');
  final names = [
    'libflutter.so',
    ...expected.keys.map(p.basename),
    if (mode != 'debug') 'libapp.so',
  ];
  for (final name in names) {
    final path = 'lib/arm64-v8a/$name';
    if (entries.where((entry) => entry == path).length != 1) {
      throw StateError('Expected one APK engine library: $path');
    }
  }
  final paths = entries
      .where((entry) => entry.startsWith('lib/') && entry.endsWith('.so'))
      .toList();
  if (paths.toSet().length != paths.length ||
      paths.any(
        (entry) =>
            !RegExp(r'^lib/arm64-v8a/[a-zA-Z0-9_.+-]+\.so$').hasMatch(entry),
      )) {
    throw StateError('Unexpected or duplicate APK native library path');
  }
  final extracted = Directory.systemTemp.createTempSync('flax-engine-apk-');
  try {
    await _inspect('unzip', ['-q', product, ...paths, '-d', extracted.path]);
    final files = [for (final path in paths) File('${extracted.path}/$path')];
    final hashes = <String, String>{};
    for (final entry in expected.entries) {
      final name = p.basename(entry.key);
      final file = File('${extracted.path}/lib/arm64-v8a/$name');
      final hash = (await sha256.bind(file.openRead()).first).toString();
      if (hash != entry.value) {
        throw StateError('APK SDK library changed: $name');
      }
      hashes[name] = hash;
    }
    await verifyBinaryArchitectures(target, files);
    await verifyNativeDependencies(
      target,
      files,
      systemDependencies: const {
        'libEGL.so',
        'libGLESv2.so',
        'libjnigraphics.so',
        'libnativewindow.so',
      },
    );
    for (final file in files) {
      final data = ByteData.sublistView(await file.readAsBytes());
      final start = data.getUint64(32, Endian.little);
      final size = data.getUint16(54, Endian.little);
      final count = data.getUint16(56, Endian.little);
      if (size < 56 || start + count * size > data.lengthInBytes) {
        throw StateError('Invalid ELF program headers: ${file.path}');
      }
      for (var i = 0; i < count; i++) {
        final offset = start + i * size;
        if (data.getUint32(offset, Endian.little) != 1) continue;
        if (data.getUint64(offset + 48, Endian.little) < 16384 ||
            data.getUint64(offset + 8, Endian.little) % 16384 !=
                data.getUint64(offset + 16, Endian.little) % 16384) {
          throw StateError('ELF is not 16 KB page compatible: ${file.path}');
        }
      }
    }
    final sdk =
        Platform.environment['ANDROID_HOME'] ??
        Platform.environment['ANDROID_SDK_ROOT'];
    if (sdk == null) throw StateError('Set ANDROID_HOME for the APK audit');
    final tools = '$sdk/build-tools/36.1.0';
    await _inspect('$tools/zipalign', ['-c', '-P', '16', '4', product]);
    await _inspect('$tools/apksigner', ['verify', '--verbose', product]);
    return {
      'signatureVerified': true,
      'singleV8Closure': true,
      'nativeLibraries': paths.map(p.basename).toList()..sort(),
      'sdkLibrarySha256': hashes,
      'pageSize16k': true,
      'dartAot': mode != 'debug',
      'apkSha256': (await sha256.bind(File(product).openRead()).first)
          .toString(),
    };
  } finally {
    extracted.deleteSync(recursive: true);
  }
}

bool hasHardenedRuntime(String signature) {
  final flags = RegExp(
    r'^CodeDirectory .*\bflags=0x([a-fA-F0-9]+)',
    multiLine: true,
  ).firstMatch(signature);
  return flags != null && (int.parse(flags[1]!, radix: 16) & 0x10000) != 0;
}

Future<void> verifyNativeAssets(
  FlaxNativeTarget target,
  String engine,
  FlaxNativeSdkResult assets,
) async {
  await verifyBinaryArchitectures(target, [assets.bridge, ...assets.libraries]);
  await verifyNativeDependencies(target, [assets.bridge, ...assets.libraries]);
  final command = target.os == 'windows'
      ? 'llvm-readobj'
      : target.apple
      ? 'nm'
      : 'llvm-nm';
  final args = target.os == 'windows'
      ? ['--coff-exports', assets.bridge.path]
      : target.apple
      ? ['-gU', assets.bridge.path]
      : ['-D', assets.bridge.path];
  final result = await Process.run(command, args);
  if (result.exitCode != 0 ||
      !(result.stdout as String).contains('flax_${engine}_get_api')) {
    throw StateError('Cannot verify bridge export: $command ${result.stderr}');
  }
}

/// Shared Android C++/Windows CRT assets must be identical before packaging both engines.
Future<void> verifySharedLibraries(List<FlaxNativeSdkResult> engines) async {
  final hashes = <String, String>{};
  for (final engine in engines) {
    for (final library in engine.libraries) {
      final basename = library.uri.pathSegments.last;
      final name = basename.toLowerCase().endsWith('.dll')
          ? basename.toLowerCase()
          : basename;
      final hash = (await sha256.bind(library.openRead()).first).toString();
      if (hashes.containsKey(name) && hashes[name] != hash) {
        throw StateError('Engines ship different bytes for $name');
      }
      hashes[name] = hash;
    }
  }
}

Future<String> _inspect(String command, List<String> arguments) async {
  final result = await Process.run(command, arguments);
  if (result.exitCode != 0) {
    throw StateError('$command ${arguments.join(' ')}: ${result.stderr}');
  }
  return result.stdout as String;
}

Future<List<String>> _dependencies(FlaxNativeTarget target, File file) async {
  if (target.apple) {
    final text = await _inspect('otool', ['-L', file.path]);
    return text
        .split('\n')
        .where((s) => s.startsWith('\t'))
        .map((s) => s.trim().split(' (').first)
        .toList();
  }
  if (target.os == 'windows') {
    final text = await _inspect('llvm-readobj', ['--coff-imports', file.path]);
    return RegExp(
      r'^\s*Name: (.+)$',
      multiLine: true,
    ).allMatches(text).map((m) => m[1]!.trim()).toList();
  }
  final text = await _inspect('llvm-readobj', ['--needed-libs', file.path]);
  final block = RegExp(
    r'NeededLibraries \[([^\]]*)\]',
    dotAll: true,
  ).firstMatch(text);
  if (block == null) {
    throw StateError('Cannot inspect ELF dependencies: ${file.path}');
  }
  return block[1]!
      .split('\n')
      .map((s) => s.trim())
      .where((s) => s.isNotEmpty)
      .toList();
}

/// Inspect linked binaries as well as the SDK manifest's declared closure.
Future<void> verifyNativeDependencies(
  FlaxNativeTarget target,
  List<File> files, {
  Set<String> systemDependencies = const {},
}) async {
  String name(String path) => target.os == 'windows'
      ? p.basename(path).toLowerCase()
      : p.basename(path);
  final supplied = files.map((f) => name(f.path)).toSet();
  for (final file in files) {
    for (final dependency in await _dependencies(target, file)) {
      if (flaxSdkSystemDependency(target.os, dependency) ||
          systemDependencies.contains(dependency)) {
        continue;
      }
      if (!supplied.contains(name(dependency)) ||
          target.apple && !dependency.startsWith('@')) {
        throw StateError(
          'Unresolved/nonrelocatable dependency: ${file.path} -> $dependency',
        );
      }
    }
    if (target.os == 'linux' || target.os == 'android') {
      final text = await _inspect('llvm-readobj', [
        '--dynamic-table',
        file.path,
      ]);
      if (target.os == 'linux') {
        final versions = await _inspect('llvm-readobj', [
          '--version-info',
          file.path,
        ]);
        for (final version in RegExp(
          r'GLIBC_(\d+)\.(\d+)',
        ).allMatches(versions)) {
          final major = int.parse(version[1]!);
          final minor = int.parse(version[2]!);
          if (major > 2 || major == 2 && minor > 31) {
            throw StateError(
              'Bridge/runtime exceeds glibc 2.31 baseline: ${file.path} ${version[0]}',
            );
          }
        }
      }
      for (final match in RegExp(
        r'(?:RUNPATH|RPATH)\s+(.+)',
      ).allMatches(text)) {
        if (RegExp(r'(?:^|[:\s])/(?!\$ORIGIN)').hasMatch(match[1]!)) {
          throw StateError('Absolute build path in ${file.path}: ${match[0]}');
        }
      }
    }
  }
}

Iterable<File> hookBuildFiles(Directory hooks) sync* {
  if (!hooks.existsSync()) return;
  for (final entry in hooks.listSync(followLinks: false)) {
    if (entry is File) {
      yield entry;
    } else if (entry is Directory) {
      // SDK caches are inputs, not build receipts or diagnostics. Their deeply
      // nested license paths can exceed Windows' MAX_PATH.
      if (RegExp(r'^sdk-[a-f0-9]{64}(?:\.part)?$')
          .hasMatch(p.basename(entry.path))) {
        continue;
      }
      yield* hookBuildFiles(entry);
    }
  }
}

/// Check the final Flutter bundle, where Apple assets have been renamed and signed.
Future<Map<String, Object?>> verifyApplicationAssets(
  FlaxNativeTarget target,
  String app,
  String product,
  List<String> engines, {
  required bool signed,
}) async {
  final receipts = hookBuildFiles(Directory('$app/.dart_tool/hooks_runner'))
      .where((f) => f.path.endsWith('sdk-receipt.json'))
      .map((f) => jsonDecode(f.readAsStringSync()) as Map)
      .where((r) => r['target'] == target.name && engines.contains(r['engine']))
      .toList();
  for (final engine in engines) {
    if (!receipts.any((r) => r['engine'] == engine)) {
      throw StateError(
        'Missing application SDK receipt: ${target.name}/$engine',
      );
    }
  }
  final names = <String>{
    for (final receipt in receipts)
      ...(receipt['libraries'] as Map).keys.cast<String>(),
    for (final engine in engines) target.bridgeName(engine),
  };
  if (target.os == 'android') {
    final entries = (await _inspect('unzip', [
      '-Z1',
      product,
    ])).split('\n').toSet();
    final paths = [for (final name in names) 'lib/${target.androidAbi}/$name'];
    for (final path in paths) {
      if (!entries.contains(path)) {
        throw StateError('Missing APK native asset: $path');
      }
    }
    final extracted = Directory.systemTemp.createTempSync('flax-apk-assets-');
    try {
      await _inspect('unzip', ['-q', product, ...paths, '-d', extracted.path]);
      final files = [for (final path in paths) File('${extracted.path}/$path')];
      await verifyBinaryArchitectures(target, files);
      await verifyNativeDependencies(target, files);
      return {
        'dependencyClosure': true,
        'nativeAssets': names.toList()..sort(),
      };
    } finally {
      extracted.deleteSync(recursive: true);
    }
  }
  final files = <File>[];
  final directory = Directory(
    target.apple
        ? '$product/${target.os == 'macos' ? 'Contents/' : ''}Frameworks'
        : product,
  );
  final available = directory
      .listSync(recursive: true, followLinks: false)
      .whereType<File>()
      .toList();
  for (final name in names) {
    final actualName = target.apple
        ? name
              .replaceFirst(RegExp(r'^lib'), '')
              .replaceFirst(RegExp(r'\.dylib$'), '')
        : name;
    final file = available
        .where(
          (f) => target.os == 'windows'
              ? p.basename(f.path).toLowerCase() == actualName.toLowerCase()
              : p.basename(f.path) == actualName,
        )
        .firstOrNull;
    if (file == null) {
      throw StateError('Missing packaged native asset: $actualName');
    }
    files.add(file);
    if (target.apple) {
      final arch = target.architecture == 'x64' ? 'x86_64' : 'arm64';
      await _inspect('lipo', [file.path, '-verify_arch', arch]);
      for (final dependency in await _dependencies(target, file)) {
        if (flaxSdkSystemDependency(target.os, dependency)) continue;
        if (!dependency.startsWith('@rpath/') ||
            !File('${directory.path}/${dependency.substring(7)}')
                .existsSync()) {
          throw StateError(
            'Invalid packaged framework dependency: ${file.path} -> $dependency',
          );
        }
      }
    }
  }
  if (!target.apple) {
    await verifyBinaryArchitectures(target, files);
    await verifyNativeDependencies(target, files);
  }
  if (target.apple && signed) {
    await _inspect('codesign', ['--verify', '--deep', '--strict', product]);
  }
  return {
    'dependencyClosure': true,
    'nativeAssets': names.toList()..sort(),
    if (target.apple) 'signatureVerified': signed,
  };
}

Future<void> verifyBinaryArchitectures(
  FlaxNativeTarget target,
  List<File> files,
) async {
  for (final file in files) {
    final bytes = await file.readAsBytes();
    final data = ByteData.sublistView(bytes);
    final int machine;
    if (bytes.length < 64) {
      throw StateError('Truncated native asset: ${file.path}');
    }
    if (target.os == 'windows') {
      if (data.getUint16(0, Endian.little) != 0x5a4d) {
        throw StateError('Expected PE: ${file.path}');
      }
      final pe = data.getUint32(0x3c, Endian.little);
      if (pe + 6 > bytes.length ||
          data.getUint32(pe, Endian.little) != 0x4550) {
        throw StateError('Invalid PE: ${file.path}');
      }
      machine = data.getUint16(pe + 4, Endian.little);
    } else if (target.apple) {
      if (data.getUint32(0, Endian.little) != 0xfeedfacf) {
        throw StateError('Expected thin Mach-O: ${file.path}');
      }
      machine = data.getUint32(4, Endian.little);
    } else {
      if (data.getUint32(0, Endian.big) != 0x7f454c46 || bytes[5] != 1) {
        throw StateError('Expected ELF: ${file.path}');
      }
      machine = data.getUint16(18, Endian.little);
      if (bytes[4] != (target.architecture == 'arm32' ? 1 : 2)) {
        throw StateError('Wrong ELF class: ${file.path}');
      }
    }
    final expected = target.os == 'windows'
        ? (target.architecture == 'x64' ? 0x8664 : 0xaa64)
        : target.apple
        ? (target.architecture == 'x64' ? 0x1000007 : 0x100000c)
        : {'arm32': 40, 'arm64': 183, 'x64': 62}[target.architecture];
    if (machine != expected) {
      throw StateError(
        'Wrong asset architecture: ${file.path} ($machine, expected $expected)',
      );
    }
  }
}
