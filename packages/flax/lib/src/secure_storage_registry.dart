import '../secure_storage.dart';

/// Shared by Core's host registration and permission consumers in this isolate.
abstract final class FlaxSecureStorageRegistry {
  static FlaxSecureStorage? current;
  static int users = 0;

  static void register(FlaxSecureStorage storage) {
    if (identical(current, storage)) return;
    if (users != 0) {
      throw StateError('Cannot replace secure storage while Flax uses it');
    }
    current = storage;
  }
}
