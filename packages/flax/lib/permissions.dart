/// Module declarations, host approval, consent and revocable resource authority.
library;

import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'dart:typed_data';

import 'package:crypto/crypto.dart';
import 'package:flax_annotations/flax_annotations.dart';

import 'secure_storage.dart';
import 'src/secure_storage_registry.dart';
import 'src/permissions/catalog.dart';
import 'src/permissions/delivery.dart';

export 'package:flax_annotations/flax_annotations.dart'
    show
        FlaxPermissionAuthorization,
        FlaxPermissionDefinition,
        FlaxPermissionGuard;

export 'src/permissions/catalog.dart';

part 'src/permissions/model.dart';
part 'src/permissions/manager.dart';
part 'src/permissions/context.dart';

Object? _permissionData(Object? value) {
  if (value == null || value is bool || value is String) return value;
  if (value is num && value.isFinite) return value;
  if (value is List) {
    return List<Object?>.unmodifiable(value.map(_permissionData));
  }
  if (value is Map && value.keys.every((key) => key is String)) {
    return Map<String, Object?>.unmodifiable({
      for (final key in (value.keys.cast<String>().toList()..sort()))
        key: _permissionData(value[key]),
    });
  }
  throw ArgumentError('Permission scope must contain finite, plain data');
}

String _permissionDigest(Object? data) =>
    sha256.convert(utf8.encode(jsonEncode(_permissionData(data)))).toString();

bool _permissionId(String value) =>
    RegExp(r'^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$').hasMatch(value);

FlaxPermissionScopeRules _standardPermissionScope(String id) => switch (id) {
  'flax.network' => const FlaxOriginPermissionScope(webSocket: true),
  'flax.module.remote' => const FlaxOriginPermissionScope(),
  'flax.documents.open' => const FlaxDocumentPermissionScope(),
  _ => const FlaxBooleanPermissionScope(),
};
