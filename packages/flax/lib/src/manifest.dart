import 'dart:convert';

import 'package:flutter/services.dart';

import 'asset_key.dart';
import 'runtime/modules.dart';

/// Business package metadata, independent of its built-in or directory location.
class FlaxManifest {
  const FlaxManifest({
    required this.id,
    required this.version,
    required this.entry,
    this.description,
    this.modules = const {},
    this.requiredCapabilities = const [],
  });

  final String id;
  final String version;
  final String entry;
  final String? description;

  final Map<String, FlaxModuleKind> modules;
  final List<String> requiredCapabilities;

  static Future<FlaxManifest> load(AssetBundle bundle) async =>
      FlaxManifest.fromJson(jsonDecode(await bundle.loadString('flax.json')));

  factory FlaxManifest.fromJson(Object? json) {
    if (json is! Map<String, dynamic>) {
      throw const FormatException('Invalid flax.json descriptor.');
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
    final modules = <String, FlaxModuleKind>{};
    final capabilities = <String>[];
    if (json['modules'] != null || json['requiredCapabilities'] != null) {
      final declared = json['modules'];
      final required = json['requiredCapabilities'] ?? const <Object?>[];
      if (declared is! Map ||
          required is! List ||
          required.toSet().length != required.length ||
          required.any(
            (item) => !const [
              'esm',
              'json-modules',
              'wasm-modules',
              'wasm-source-imports',
            ].contains(item),
          )) {
        throw const FormatException(
          'Invalid native module application descriptor.',
        );
      }
      for (final item in declared.entries) {
        if (item.key is! String ||
            !isFlaxApplicationEntry(item.key as String)) {
          throw const FormatException('Invalid application module path.');
        }
        final kinds = FlaxModuleKind.values.where(
          (kind) => kind.name == item.value,
        );
        if (kinds.isEmpty) {
          throw const FormatException('Unsupported module kind.');
        }
        modules[item.key as String] = kinds.single;
      }
      if (modules[entry] != FlaxModuleKind.javascript || modules.length > 256) {
        throw const FormatException('Invalid module entry or module count.');
      }
      capabilities.addAll(required.cast<String>());
    }
    return FlaxManifest(
      id: requiredString('id'),
      version: requiredString('version'),
      entry: entry,
      description: description as String?,
      modules: Map.unmodifiable(modules),
      requiredCapabilities: List.unmodifiable(capabilities),
    );
  }
}
