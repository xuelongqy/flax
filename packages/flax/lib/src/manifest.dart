import 'dart:convert';

import 'package:flutter/services.dart';

import 'asset_key.dart';

/// Business package metadata, independent of its built-in or directory location.
class FlaxManifest {
  const FlaxManifest({
    required this.id,
    required this.version,
    required this.entry,
    this.description,
  });

  final String id;
  final String version;
  final String entry;
  final String? description;

  static Future<FlaxManifest> load(AssetBundle bundle) async =>
      FlaxManifest.fromJson(jsonDecode(await bundle.loadString('flax.json')));

  factory FlaxManifest.fromJson(Object? json) {
    if (json is! Map<String, dynamic> || json['formatVersion'] != 1) {
      throw const FormatException('Unsupported flax.json formatVersion.');
    }
    String requiredString(String key) {
      final value = json[key];
      if (value is! String || value.trim().isEmpty) {
        throw FormatException('flax.json requires a nonempty "$key" string.');
      }
      return value;
    }

    final entry = requiredString('entry');
    if (!isFlaxApplicationEntry(entry)) {
      throw const FormatException(
        'flax.json entry must be a relative file outside reserved resource paths.',
      );
    }
    final description = json['description'];
    if (description != null && description is! String) {
      throw const FormatException('flax.json description must be a string.');
    }
    return FlaxManifest(
      id: requiredString('id'),
      version: requiredString('version'),
      entry: entry,
      description: description as String?,
    );
  }
}
