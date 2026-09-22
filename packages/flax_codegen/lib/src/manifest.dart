import 'dart:convert';
import 'dart:io';

import 'model.dart';

/// Legacy Manifest format 1 surface.
///
/// After M3, format 1 is rejected. Use FlaxCodegenManifestV5 for the current
/// strict manifest format.
/// [uiProtocol] remains the shared protocol constant for consistency checks.
class FlaxCodegenBindingManifest {
  const FlaxCodegenBindingManifest({
    required this.package,
    required this.imports,
    required this.modules,
  });

  /// Removed format. Callers must use the current strict manifest format.
  static const formatVersion = 1;
  static const uiProtocol = 20;

  final String package;
  final List<String> imports;
  final List<FlaxCodegenModuleModel> modules;

  /// Always fails closed. Manifest format 1 is not supported after M3.
  factory FlaxCodegenBindingManifest.read(File file) {
    if (!file.existsSync()) {
      throw StateError('Missing binding manifest: ${file.path}');
    }
    final Object? decoded;
    try {
      decoded = jsonDecode(file.readAsStringSync());
    } on FormatException {
      throw StateError('Invalid binding manifest JSON: ${file.path}');
    }
    final format = decoded is Map ? decoded['formatVersion'] : null;
    if (format == 1) {
      throw StateError(
        'Binding manifest format 1 is not supported. Use Manifest format 11 '
        '(FlaxCodegenManifestV5): ${file.path}',
      );
    }
    throw StateError(
      'Unsupported binding manifest format: ${file.path}. '
      'Use FlaxCodegenManifestV5.',
    );
  }

  /// Always fails closed. Manifest format 1 encoding is not supported after M3.
  String encode() => throw UnsupportedError(
    'Binding manifest format 1 encoding is not supported. '
    'Use FlaxCodegenManifestV5.',
  );
}
