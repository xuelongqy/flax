import 'dart:io';
import 'dart:convert';

import 'package:path/path.dart' as p;

import 'dart:typed_data';

import 'package:crypto/crypto.dart';
import 'package:flax/native_sdk.dart';
import 'package:flax/native_target.dart';

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
  List<File> files,
) async {
  String name(String path) => target.os == 'windows'
      ? p.basename(path).toLowerCase()
      : p.basename(path);
  final supplied = files.map((f) => name(f.path)).toSet();
  for (final file in files) {
    for (final dependency in await _dependencies(target, file)) {
      if (flaxSdkSystemDependency(target.os, dependency)) continue;
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

/// Check the final Flutter bundle, where Apple assets have been renamed and signed.
Future<Map<String, Object?>> verifyApplicationAssets(
  FlaxNativeTarget target,
  String app,
  String product,
  List<String> engines, {
  required bool signed,
}) async {
  final receipts = Directory('$app/.dart_tool')
      .listSync(recursive: true, followLinks: false)
      .whereType<File>()
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
      await _inspect('lipo', ['-verify_arch', arch, file.path]);
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
