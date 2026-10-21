import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:path/path.dart' as p;

import 'asset_key.dart';
import 'asset_manifest.dart';

/// Reads immutable application resources from one installed directory.
///
/// Keys are slash-separated paths relative to [directory]. The directory must
/// include AssetManifest.bin or the generated portable flax.assets.json index.
class FlaxDirectoryAssetBundle extends CachingAssetBundle {
  FlaxDirectoryAssetBundle(this.directory);

  final Directory directory;
  Future<String>? _root;

  Future<File> _file(String key) async {
    if (!isFlaxAssetKey(key)) {
      throw FlutterError('Invalid application asset key: "$key".');
    }
    try {
      final root = await (_root ??= directory.resolveSymbolicLinks());
      final resolved = await File(p.joinAll([root, ...key.split('/')]))
          .resolveSymbolicLinks();
      if (!p.isWithin(root, resolved)) {
        throw FlutterError('Application asset escapes its directory: "$key".');
      }
      return File(resolved);
    } on FileSystemException catch (error) {
      throw FlutterError('Unable to load asset: "$key". ${error.message}');
    }
  }

  @override
  Future<ByteData> load(String key) async {
    if (key == 'AssetManifest.bin' &&
        !await File(p.join(directory.path, key)).exists()) {
      return const StandardMessageCodec().encodeMessage(
        parseFlaxAssetManifest(await loadString('flax.assets.json')),
      )!;
    }
    final file = await _file(key);
    try {
      return ByteData.sublistView(await file.readAsBytes());
    } on FileSystemException catch (error) {
      throw FlutterError('Unable to load asset: "$key". ${error.message}');
    }
  }

  @override
  Future<ui.ImmutableBuffer> loadBuffer(String key) async =>
      key == 'AssetManifest.bin'
      ? ui.ImmutableBuffer.fromUint8List(Uint8List.sublistView(await load(key)))
      : ui.ImmutableBuffer.fromFilePath((await _file(key)).path);
}
