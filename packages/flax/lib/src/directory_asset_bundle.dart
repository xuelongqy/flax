import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

import 'asset_key.dart';
import 'asset_manifest.dart';
import 'sandbox/file_system.dart' show readFlaxRootedBytes;

/// Reads immutable application resources from one installed directory.
///
/// Keys are slash-separated paths relative to [directory]. The directory must
/// include AssetManifest.bin or the generated portable flax.assets.json index.
class FlaxDirectoryAssetBundle extends CachingAssetBundle {
  FlaxDirectoryAssetBundle(this.directory);

  final Directory directory;
  Future<String>? _root;

  Future<Uint8List> _bytes(String key) async {
    if (!isFlaxAssetKey(key)) {
      throw FlutterError('Invalid application asset key: "$key".');
    }
    final root = await (_root ??= directory.resolveSymbolicLinks());
    return readFlaxRootedBytes(root, key);
  }

  @override
  Future<ByteData> load(String key) async {
    try {
      return ByteData.sublistView(await _bytes(key));
    } on FileSystemException catch (error) {
      if (key == 'AssetManifest.bin' && error.osError?.errorCode == 2) {
        return const StandardMessageCodec().encodeMessage(
          parseFlaxAssetManifest(await loadString('flax.assets.json')),
        )!;
      }
      throw FlutterError('Unable to load asset: "$key". ${error.message}');
    }
  }

  @override
  Future<ui.ImmutableBuffer> loadBuffer(String key) async =>
      ui.ImmutableBuffer.fromUint8List(Uint8List.sublistView(await load(key)));
}
