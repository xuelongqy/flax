import 'dart:convert';

import 'asset_key.dart';

/// Validates the portable build index and normalizes native image-variant metadata.
Map<String, List<Map<String, Object?>>> parseFlaxAssetManifest(String source) {
  final json = jsonDecode(source);
  if (json is! Map<String, dynamic> ||
      json['formatVersion'] != 1 ||
      json['assets'] is! Map<String, dynamic>) {
    throw const FormatException('Invalid flax.assets.json.');
  }
  final assets = json['assets'] as Map<String, dynamic>;
  final result = <String, List<Map<String, Object?>>>{};
  for (final item in assets.entries) {
    if (!isFlaxAssetKey(item.key) ||
        item.value is! List ||
        (item.value as List).isEmpty) {
      throw const FormatException('Invalid Flax asset key or variants.');
    }
    final variants = <Map<String, Object?>>[];
    for (final variant in item.value as List) {
      if (variant is! Map<String, dynamic> ||
          variant['asset'] is! String ||
          !isFlaxAssetKey(variant['asset'] as String) ||
          (variant['dpr'] != null &&
              (variant['dpr'] is! num ||
                  !(variant['dpr'] as num).isFinite ||
                  (variant['dpr'] as num) <= 0))) {
        throw const FormatException('Invalid Flax asset variant.');
      }
      variants.add({
        'asset': variant['asset'],
        if (variant['dpr'] case final num dpr) 'dpr': dpr.toDouble(),
      });
    }
    result[item.key] = variants;
  }
  return result;
}
