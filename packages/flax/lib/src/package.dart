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
import 'sandbox/sandbox.dart';

/// Installs local .flax ZIP files without replacing an active application's files.
class FlaxPackage {
  static final _pending = <String, Future<Directory>>{};
  static final _queues = <String, Future<void>>{};

  /// Defaults to the sandbox application root, or ApplicationSupport/flax.
  /// Sandbox contents live in bundle; their receipt lives in the application root.
  /// Different content requires closing its sessions and removing the old bundle first.
  /// Integrity checks detect damage; they do not authenticate a publisher.
  /// Cache hits validate the completion receipt and every inventoried file.
  /// Damaged completed installations fail without overwriting their directories.
  static Future<Directory> install(
    File file, {
    Directory? installationDirectory,
    FlaxSandbox? sandbox,
  }) async {
    final root =
        installationDirectory ??
        Directory(
          sandbox?.applicationPath ??
              p.join((await getApplicationSupportDirectory()).path, 'flax'),
        );
    await root.create(recursive: true);
    final rootPath = await root.resolveSymbolicLinks();
    final installations = p.join(
      rootPath,
      sandbox == null ? 'installed' : 'bundle',
    );
    if (sandbox != null &&
        (p.equals(installations, sandbox.homePath) ||
            p.isWithin(installations, sandbox.homePath) ||
            p.isWithin(sandbox.homePath, installations))) {
      throw ArgumentError(
        'Sandbox data and installed bundles must not overlap',
      );
    }
    final filePath = await file.resolveSymbolicLinks();
    final singleBundle = sandbox != null;
    final key = '$installations\u0000$filePath';
    return _pending.putIfAbsent(key, () async {
      final previous = _queues[rootPath] ?? Future<void>.value();
      final completion = Completer<void>();
      _queues[rootPath] = completion.future;
      try {
        await previous;
        return Directory(
          await Isolate.run(
            () => _install(filePath, installations, singleBundle),
          ),
        );
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
final _digestPattern = RegExp(r'^[a-f0-9]{64}$');

Future<String> _install(
  String source,
  String directory,
  bool singleBundle,
) async {
  final installations = Directory(directory);
  if (FileSystemEntity.typeSync(installations.path, followLinks: false) ==
      FileSystemEntityType.link) {
    throw const FormatException(
      'Flax installation directory must not be a symlink.',
    );
  }
  if (!singleBundle) installations.createSync(recursive: true);
  final lock = File(p.join(installations.parent.path, '.install.lock'))
      .openSync(mode: FileMode.append);
  try {
    lock.lockSync(FileLock.blockingExclusive);
    final digest = (await sha256.bind(File(source).openRead()).first)
        .toString();
    final installed = singleBundle
        ? installations
        : Directory(p.join(installations.path, digest));
    final receipt = File(
      p.join(
        installed.parent.path,
        singleBundle ? _receiptName : '$digest.install.json',
      ),
    );
    final receiptType = FileSystemEntity.typeSync(
      receipt.path,
      followLinks: false,
    );
    if (receiptType != FileSystemEntityType.notFound &&
        receiptType != FileSystemEntityType.file) {
      throw const FormatException(
        'Flax installation receipt must be a real file.',
      );
    }
    final installedType = FileSystemEntity.typeSync(
      installed.path,
      followLinks: false,
    );
    if (installedType != FileSystemEntityType.notFound &&
        installedType != FileSystemEntityType.directory) {
      throw const FormatException(
        'Flax installation must be a real directory.',
      );
    }
    if (installedType == FileSystemEntityType.directory) {
      await _checkInstallation(installed, receipt, digest);
      return installed.path;
    }
    installed.parent.createSync(recursive: true);
    final staging = installed.parent.createTempSync('.install-');
    final contents = Directory(p.join(staging.path, 'bundle'));
    final stagedReceipt = File(p.join(staging.path, _receiptName));
    try {
      contents.createSync();
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
          final path = p.joinAll([
            contents.path,
            ...header.filename.split('/'),
          ]);
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
        final inventory = _readInventory(contents);
        if (names.length != inventory.length + 1 ||
            !names.containsAll(inventory.keys)) {
          throw const FormatException(
            'Flax package file inventory does not match.',
          );
        }
        await _checkFiles(contents, inventory);
        _checkApplication(contents);
        // Recheck after extraction so replacing the source during installation fails.
        if ((await sha256.bind(File(source).openRead()).first).toString() !=
            digest) {
          throw const FormatException(
            'Flax package changed during installation.',
          );
        }
        final inventoryDigest = sha256
            .convert(
              File(p.join(contents.path, _inventoryName)).readAsBytesSync(),
            )
            .toString();
        stagedReceipt.writeAsStringSync(
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
      contents.renameSync(installed.path);
      try {
        // Publish completion last, without adding installer files to the bundle.
        stagedReceipt.renameSync(receipt.path);
      } catch (_) {
        installed.deleteSync(recursive: true);
        rethrow;
      }
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
        !_digestPattern.hasMatch(value['sha256'] as String)) {
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

Future<void> _checkFiles(
  Directory root,
  Map<String, ({int size, String digest})> inventory,
) async {
  for (final item in inventory.entries) {
    final file = _installedFile(root, item.key);
    if (file.lengthSync() != item.value.size ||
        (await sha256.bind(file.openRead()).first).toString() !=
            item.value.digest) {
      throw FormatException('Flax package integrity failed: ${item.key}');
    }
  }
}

Future<void> _checkInstallation(
  Directory root,
  File receiptFile,
  String digest,
) async {
  final receipt = jsonDecode(
    _installedFile(
      receiptFile.parent,
      p.basename(receiptFile.path),
    ).readAsStringSync(),
  );
  final inventoryFile = _installedFile(root, _inventoryName);
  if (receipt is! Map<String, dynamic> ||
      receipt['formatVersion'] != 1 ||
      receipt['digest'] is! String ||
      !_digestPattern.hasMatch(receipt['digest'] as String) ||
      receipt['inventoryDigest'] !=
          sha256.convert(inventoryFile.readAsBytesSync()).toString()) {
    throw const FormatException('Invalid Flax installation receipt.');
  }
  if (receipt['digest'] != digest) {
    throw StateError(
      'A different package is already installed. Close its sessions and remove '
      '${root.path} before installing new content.',
    );
  }
  await _checkFiles(root, _readInventory(root));
  _checkApplication(root);
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
