part of 'native_runtime.dart';

/// Internal session adapter. There is no application-facing Dart FFI package.
extension FlaxNativeFfi on FlaxNativeJsRuntime {
  void disableNativeFfi() {
    _ensureAlive();
    if (_ffiPort != null) {
      throw StateError('Cannot sandbox a runtime with active FFI');
    }
    _ffi = null;
  }

  void installNativeFfi(void Function() wake) {
    _ensureAlive();
    if (_ffiPort != null) return;
    final api = _ffi;
    if (api == null) {
      throw UnsupportedError('This engine does not include @flax/ffi');
    }
    final port = ReceivePort()..listen((_) => wake());
    try {
      using(
        (arena) => _checked(
          arena,
          (error) => api.install
              .asFunction<
                int Function(Pointer<FlaxRuntime>, int, Pointer<FlaxError>)
              >()(_handle, port.sendPort.nativePort, error),
        ),
      );
      _ffiPort = port;
    } catch (_) {
      port.close();
      rethrow;
    }
  }

  void checkpointNativeFfi() {
    if (_ffiPort == null) return;
    using(
      (arena) => _checked(
        arena,
        (error) => _ffi!.checkpoint
            .asFunction<
              int Function(Pointer<FlaxRuntime>, Pointer<FlaxError>)
            >()(_handle, error),
      ),
    );
  }

  bool retireNativeFfi() {
    if (_ffiPort == null) return true;
    final complete = using((arena) {
      final result = arena<Uint8>();
      _checked(
        arena,
        (error) => _ffi!.retire
            .asFunction<
              int Function(
                Pointer<FlaxRuntime>,
                Pointer<Uint8>,
                Pointer<FlaxError>,
              )
            >()(_handle, result, error),
      );
      return result.value != 0;
    });
    if (complete) {
      _ffiPort!.close();
      _ffiPort = null;
    }
    return complete;
  }
}
