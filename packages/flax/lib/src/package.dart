import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:isolate';

import 'package:archive/archive.dart';
import 'package:crypto/crypto.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

import 'asset_key.dart';
import 'manifest.dart';
import 'asset_manifest.dart';

/// Installs local .flax ZIP files without replacing an active application's files.
class FlaxPackage {
  static final _pending = <String, Future<Directory>>{};
  static final _queues = <String, Future<void>>{};

  /// Defaults to ApplicationSupport/flax. Completed installations are immutable.
  /// Integrity checks detect damage; they do not authenticate a publisher.
  /// Cache hits check file sizes and metadata/entry hashes, not all resource hashes.
  /// Damaged completed installations fail without overwriting their directories.
  static Future<Directory> install(
    File file, {
    Directory? installationDirectory,
  }) async {
    final root =
        installationDirectory ??
        Directory(
          p.join((await getApplicationSupportDirectory()).path, 'flax'),
        );
    await root.create(recursive: true);
    final rootPath = await root.resolveSymbolicLinks();
    final filePath = await file.resolveSymbolicLinks();
    final key = '$rootPath\u0000$filePath';
    return _pending.putIfAbsent(key, () async {
      final previous = _queues[rootPath] ?? Future<void>.value();
      final completion = Completer<void>();
      _queues[rootPath] = completion.future;
      try {
        await previous;
        return Directory(await Isolate.run(() => _install(filePath, rootPath)));
      } finally {
        completion.complete();
        if (identical(_queues[rootPath], completion.future)) {
          _queues.remove(rootPath);
        }
        _pending.remove(key);
      }
    });
  }
}

const _receiptName = '.flax-install.json';
const _inventoryName = 'flax.files.json';
const _maxFiles = 10000;
const _maxBytes = 512 * 1024 * 1024;

Future<String> _install(String source, String root) async {
  final installations = Directory(p.join(root, 'installed'));
  if (FileSystemEntity.typeSync(installations.path, followLinks: false) ==
      FileSystemEntityType.link) {
    throw const FormatException(
      'Flax installation directory must not be a symlink.',
    );
  }
  installations.createSync(recursive: true);
  final lock = File(p.join(root, '.install.lock'))
      .openSync(mode: FileMode.append);
  try {
    lock.lockSync(FileLock.blockingExclusive);
    final digest = (await sha256.bind(File(source).openRead()).first)
        .toString();
    final installed = Directory(p.join(root, 'installed', digest));
    if (FileSystemEntity.typeSync(installed.path, followLinks: false) ==
        FileSystemEntityType.link) {
      throw const FormatException('Flax installation must not be a symlink.');
    }
    if (installed.existsSync()) {
      _checkInstallation(installed, digest);
      return installed.path;
    }
    installed.parent.createSync(recursive: true);
    final staging = installed.parent.createTempSync('.install-');
    try {
      final input = InputFileStream(source);
      try {
        final directory = ZipDirectory()..read(input);
        final names = <String>{};
        final portableNames = <String>{};
        var bytes = 0;
        // Inspect the original headers: Archive merges duplicate names.
        for (final header in directory.fileHeaders) {
          final key = header.filename;
          final kind = (header.externalFileAttributes >> 16) & 0xf000;
          if (!isFlaxAssetKey(key) ||
              !names.add(key) ||
              !portableNames.add(key.toLowerCase()) ||
              key.toLowerCase() == _receiptName ||
              (kind != 0 && kind != 0x8000) ||
              (header.generalPurposeBitFlag & 1) != 0) {
            throw FormatException('Invalid Flax package entry: $key');
          }
          bytes += header.uncompressedSize;
          if (names.length > _maxFiles || bytes > _maxBytes) {
            throw const FormatException(
              'Flax package exceeds installation limits.',
            );
          }
        }
        for (final header in directory.fileHeaders) {
          final entry = header.file!;
          if (entry.filename != header.filename ||
              (entry.compressionMethod != CompressionType.none &&
                  entry.compressionMethod != CompressionType.deflate)) {
            throw FormatException(
              'Unsupported Flax package entry: ${header.filename}',
            );
          }
          final path = p.joinAll([staging.path, ...header.filename.split('/')]);
          File(path).parent.createSync(recursive: true);
          final output = _CheckedOutput(path, header.uncompressedSize);
          try {
            final compressed = entry.getStream(decompress: false);
            final sink = entry.compressionMethod == CompressionType.deflate
                ? ZLibCodec(raw: true).decoder
                      .startChunkedConversion(_OutputSink(output))
                : _OutputSink(output);
            while (!compressed.isEOS) {
              final remaining = compressed.length;
              sink.add(
                compressed
                    .readBytes(remaining < 65536 ? remaining : 65536)
                    .toUint8List(),
              );
            }
            sink.close();
            if (output.length != header.uncompressedSize ||
                output.crc != header.crc32) {
              throw FormatException(
                'Flax package checksum failed: ${header.filename}',
              );
            }
          } finally {
            output.closeSync();
          }
        }
        if (!names.contains(_inventoryName)) {
          throw const FormatException(
            'Flax package is missing its file inventory.',
          );
        }
        final inventory = _readInventory(staging);
        if (names.length != inventory.length + 1 ||
            !names.containsAll(inventory.keys)) {
          throw const FormatException(
            'Flax package file inventory does not match.',
          );
        }
        for (final item in inventory.entries) {
          final file = _installedFile(staging, item.key);
          final actual = (await sha256.bind(file.openRead()).first).toString();
          if (file.lengthSync() != item.value.size ||
              actual != item.value.digest) {
            throw FormatException('Flax package integrity failed: ${item.key}');
          }
        }
        _checkApplication(staging);
        // Recheck after extraction so replacing the source during installation fails.
        if ((await sha256.bind(File(source).openRead()).first).toString() !=
            digest) {
          throw const FormatException(
            'Flax package changed during installation.',
          );
        }
        final inventoryDigest = sha256
            .convert(
              File(p.join(staging.path, _inventoryName)).readAsBytesSync(),
            )
            .toString();
        File(p.join(staging.path, _receiptName)).writeAsStringSync(
          jsonEncode({
            'formatVersion': 1,
            'digest': digest,
            'inventoryDigest': inventoryDigest,
          }),
          flush: true,
        );
      } finally {
        input.closeSync();
      }
      staging.renameSync(installed.path);
      return installed.path;
    } finally {
      if (staging.existsSync()) staging.deleteSync(recursive: true);
    }
  } finally {
    lock.closeSync();
  }
}

Map<String, ({int size, String digest})> _readInventory(Directory directory) {
  final json = jsonDecode(
    _installedFile(directory, _inventoryName).readAsStringSync(),
  );
  if (json is! Map<String, dynamic> ||
      json['formatVersion'] != 1 ||
      json['files'] is! Map<String, dynamic>) {
    throw const FormatException('Invalid Flax package file inventory.');
  }
  final files = json['files'] as Map<String, dynamic>;
  final result = <String, ({int size, String digest})>{};
  for (final item in files.entries) {
    final value = item.value;
    if (!isFlaxAssetKey(item.key) ||
        item.key == _inventoryName ||
        item.key == _receiptName ||
        value is! Map<String, dynamic> ||
        value['size'] is! int ||
        (value['size'] as int) < 0 ||
        value['sha256'] is! String ||
        !RegExp(r'^[a-f0-9]{64}$').hasMatch(value['sha256'] as String)) {
      throw const FormatException('Invalid Flax package file inventory entry.');
    }
    result[item.key] = (
      size: value['size'] as int,
      digest: value['sha256'] as String,
    );
  }
  return result;
}

File _installedFile(Directory root, String key) {
  final file = File(p.joinAll([root.path, ...key.split('/')]));
  if (FileSystemEntity.typeSync(file.path, followLinks: false) !=
          FileSystemEntityType.file ||
      !p.isWithin(
        root.resolveSymbolicLinksSync(),
        file.resolveSymbolicLinksSync(),
      )) {
    throw FormatException('Invalid installed Flax package file: $key');
  }
  return file;
}

void _checkApplication(Directory root) {
  final manifest = FlaxManifest.fromJson(
    jsonDecode(_installedFile(root, 'flax.json').readAsStringSync()),
  );
  _installedFile(root, manifest.entry);
  for (final key in manifest.modules.keys) {
    _installedFile(root, key);
  }
  final assets = parseFlaxAssetManifest(
    _installedFile(root, 'flax.assets.json').readAsStringSync(),
  );
  for (final variants in assets.values) {
    for (final variant in variants) {
      _installedFile(root, variant['asset'] as String);
    }
  }
}

void _checkInstallation(Directory root, String digest) {
  final receipt = jsonDecode(
    _installedFile(root, _receiptName).readAsStringSync(),
  );
  final inventoryFile = _installedFile(root, _inventoryName);
  if (receipt is! Map<String, dynamic> ||
      receipt['formatVersion'] != 1 ||
      receipt['digest'] != digest ||
      receipt['inventoryDigest'] !=
          sha256.convert(inventoryFile.readAsBytesSync()).toString()) {
    throw const FormatException('Invalid Flax installation receipt.');
  }
  final inventory = _readInventory(root);
  for (final entry in inventory.entries) {
    if (_installedFile(root, entry.key).lengthSync() != entry.value.size) {
      throw FormatException('Incomplete Flax installation: ${entry.key}');
    }
  }
  _checkApplication(root);
  final manifest = FlaxManifest.fromJson(
    jsonDecode(_installedFile(root, 'flax.json').readAsStringSync()),
  );
  for (final key in [
    'flax.json',
    manifest.entry,
    'flax.assets.json',
    ...manifest.modules.keys,
  ]) {
    if (sha256
            .convert(_installedFile(root, key).readAsBytesSync())
            .toString() !=
        inventory[key]?.digest) {
      throw FormatException('Damaged Flax installation: $key');
    }
  }
}

class _CheckedOutput extends OutputFileStream {
  _CheckedOutput(String path, this.expectedSize)
    : super.withFileHandle(FileHandle(path, mode: FileAccess.write));
  final int expectedSize;
  int crc = 0;

  @override
  void writeBytes(List<int> bytes, {int? length}) {
    final count = length ?? bytes.length;
    if (this.length + count > expectedSize) {
      throw const FormatException(
        'Flax package entry exceeds its declared size.',
      );
    }
    crc = getCrc32(
      count == bytes.length ? bytes : bytes.sublist(0, count),
      crc,
    );
    super.writeBytes(bytes, length: count);
  }

  @override
  void writeByte(int value) => writeBytes([value]);
}

class _OutputSink implements Sink<List<int>> {
  _OutputSink(this.output);
  final _CheckedOutput output;
  @override
  void add(List<int> data) => output.writeBytes(data);
  @override
  void close() => output.flush();
}
