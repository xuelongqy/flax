/// Host-only storage for authenticated Flax records. Never expose through bindings.
library;

import 'dart:typed_data';

/// A storage instance owns a fixed private namespace in its host backend.
/// Successful writes/deletes are durable, single-record operations. A null read
/// means absent, never locked, corrupted, unsupported or temporarily unavailable.
abstract interface class FlaxSecureStorage {
  Future<Uint8List?> read({
    required String module,
    required String owner,
    required String key,
  });

  Future<void> write({
    required String module,
    required String owner,
    required String key,
    required Uint8List value,
  });

  Future<void> delete({
    required String module,
    required String owner,
    required String key,
  });

  /// The host must stop new work and drain this owner's writes before deleting.
  /// Deletes only Flax records in this instance's namespace, never host secrets.
  Future<void> deleteOwner({required String owner});
}

enum FlaxSecureStorageFailure {
  unavailable,
  locked,
  integrityFailure,
  ioFailure,
  unsupported,
}

final class FlaxSecureStorageException implements Exception {
  const FlaxSecureStorageException(this.reason, {this.cause});

  final FlaxSecureStorageFailure reason;
  final Object? cause;

  @override
  String toString() => 'FlaxSecureStorageException: ${reason.name}';
}
