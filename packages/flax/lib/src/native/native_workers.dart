part of 'native_runtime.dart';

final _detachedReferenceFinalizer =
    Finalizer<(WeakReference<FlaxNativeJsRuntime>, int)>((record) {
      final (weak, id) = record;
      final runtime = weak.target;
      if (runtime == null || runtime.isDisposed || runtime._disposing) return;
      runtime._entry((arena) => runtime._release(arena, id));
    });

extension FlaxNativeWorkers on FlaxNativeJsRuntime {
  bool get supportsWorkers => _workers != null;

  (int, int) workerCountsForTesting() => using((arena) {
    final channels = arena<Uint64>(), runtimes = arena<Uint64>();
    _workers!.counts
        .asFunction<void Function(Pointer<Uint64>, Pointer<Uint64>)>()(
      channels,
      runtimes,
    );
    return (channels.value, runtimes.value);
  });

  void installWorkerBridge(int port) => _entry((arena) {
    final api = _workers;
    if (api == null) {
      throw UnsupportedError('Dedicated Workers require a matching engine');
    }
    _checked(
      arena,
      (error) => api.install
          .asFunction<
            int Function(Pointer<FlaxRuntime>, int, Pointer<FlaxError>)
          >()(_handle, port, error),
    );
  });

  void attachWorker(int channel, int port) => _entry((arena) {
    _checked(
      arena,
      (error) => _workers!.attach
          .asFunction<
            int Function(Pointer<FlaxRuntime>, int, int, Pointer<FlaxError>)
          >()(_handle, channel, port, error),
    );
  });

  void retireWorker() => _entry((arena) {
    _checked(
      arena,
      (error) => _workers!.retire
          .asFunction<
            int Function(Pointer<FlaxRuntime>, Pointer<FlaxError>)
          >()(_handle, error),
    );
  });

  void interruptWorker(int channel) =>
      _workers!.interrupt.asFunction<void Function(int)>()(channel);
}
