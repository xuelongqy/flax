import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

import 'asset_key.dart';

/// Exposes one built-in business directory using package-relative asset keys.
class FlaxPrefixedAssetBundle extends CachingAssetBundle {
  FlaxPrefixedAssetBundle({AssetBundle? bundle, String prefix = 'assets/flax'})
    : bundle = bundle ?? rootBundle,
      prefix = prefix.replaceFirst(RegExp(r'/+$'), '') {
    if (!isFlaxAssetKey(this.prefix)) {
      throw ArgumentError.value(
        prefix,
        'prefix',
        'Expected a relative asset key',
      );
    }
  }

  final AssetBundle bundle;
  final String prefix;

  String _key(String key) {
    if (!isFlaxAssetKey(key)) {
      throw FlutterError('Invalid application asset key: "$key".');
    }
    return '$prefix/$key';
  }

  Future<ByteData> _manifest() async {
    final manifest = await AssetManifest.loadFromAssetBundle(bundle);
    final root = '$prefix/';
    final entries = <String, List<Map<String, Object>>>{};
    for (final key in manifest.listAssets().where(
      (key) => key.startsWith(root),
    )) {
      entries[key.substring(root.length)] = [
        for (final variant in manifest.getAssetVariants(key)!)
          {
            'asset': _relativeVariant(variant.key),
            'dpr': ?variant.targetDevicePixelRatio,
          },
      ];
    }
    return const StandardMessageCodec().encodeMessage(entries)!;
  }

  String _relativeVariant(String key) {
    if (!key.startsWith('$prefix/')) {
      throw FlutterError(
        'Application asset variant escapes its prefix: "$key".',
      );
    }
    final relative = key.substring(prefix.length + 1);
    _key(relative);
    return relative;
  }

  @override
  Future<ByteData> load(String key) async {
    if (key == 'AssetManifest.bin') return _manifest();
    if (key == 'AssetManifest.bin.json') {
      final data = await _manifest();
      return ByteData.sublistView(
        utf8.encode(jsonEncode(base64Encode(Uint8List.sublistView(data)))),
      );
    }
    return bundle.load(_key(key));
  }

  @override
  Future<ui.ImmutableBuffer> loadBuffer(String key) async =>
      key == 'AssetManifest.bin' || key == 'AssetManifest.bin.json'
      ? super.loadBuffer(key)
      : bundle.loadBuffer(_key(key));
}
