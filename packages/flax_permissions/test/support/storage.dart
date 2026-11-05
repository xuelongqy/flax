import 'dart:typed_data';

import 'package:flax/secure_storage.dart';

class PermissionTestStorage implements FlaxSecureStorage {
  final _values = <(String, String, String), Uint8List>{};
  @override
  Future<Uint8List?> read({
    required String module,
    required String owner,
    required String key,
  }) async => _values[(module, owner, key)];
  @override
  Future<void> write({
    required String module,
    required String owner,
    required String key,
    required Uint8List value,
  }) async {
    _values[(module, owner, key)] = Uint8List.fromList(value);
  }

  @override
  Future<void> delete({
    required String module,
    required String owner,
    required String key,
  }) async {
    _values.remove((module, owner, key));
  }

  @override
  Future<void> deleteOwner({required String owner}) async {
    _values.removeWhere((key, _) => key.$2 == owner);
  }
}
