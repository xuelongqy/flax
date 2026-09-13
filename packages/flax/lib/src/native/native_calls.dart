import 'dart:ffi';

import 'runtime_bindings.g.dart';

// Convert the version-checked function table once per runtime. None of these
// calls is leaf: evaluation, property access, and release can enter the VM.
final class NativeCalls {
  NativeCalls(FlaxApi api)
    : create = api.create.asFunction(),
      destroy = api.destroy.asFunction(),
      evaluate = api.evaluate.asFunction(),
      globalObject = api.global_object.asFunction(),
      makeValue = api.make_value.asFunction(),
      inspect = api.inspect.asFunction(),
      cloneValue = api.clone_value.asFunction(),
      releaseValue = api.release_value.asFunction(),
      getProperty = api.get_property.asFunction(),
      setProperty = api.set_property.asFunction(),
      call = api.call.asFunction(),
      strictEquals = api.strict_equals.asFunction(),
      registerHost = api.register_host.asFunction(),
      drainMicrotasks = api.drain_microtasks.asFunction(),
      makeBytes = api.make_bytes.asFunction(),
      readBytes = api.read_bytes.asFunction(),
      bufferFree = api.buffer_free.asFunction(),
      errorClear = api.error_clear.asFunction(),
      errorSet = api.error_set.asFunction();

  final int Function(Pointer<Pointer<FlaxRuntime>>, Pointer<FlaxError>) create;
  final int Function(Pointer<FlaxRuntime>, Pointer<FlaxError>) destroy;
  final int Function(
    Pointer<FlaxRuntime>,
    Pointer<Uint8>,
    int,
    Pointer<Uint8>,
    int,
    Pointer<Uint64>,
    Pointer<FlaxError>,
  )
  evaluate;
  final int Function(Pointer<FlaxRuntime>, Pointer<Uint64>, Pointer<FlaxError>)
  globalObject;
  final int Function(
    Pointer<FlaxRuntime>,
    int,
    double,
    Pointer<Uint16>,
    int,
    Pointer<Uint64>,
    Pointer<FlaxError>,
  )
  makeValue;
  final int Function(
    Pointer<FlaxRuntime>,
    int,
    Pointer<FlaxValueInfo>,
    Pointer<FlaxError>,
  )
  inspect;
  final int Function(
    Pointer<FlaxRuntime>,
    int,
    Pointer<Uint64>,
    Pointer<FlaxError>,
  )
  cloneValue;
  final int Function(Pointer<FlaxRuntime>, int, Pointer<FlaxError>)
  releaseValue;
  final int Function(
    Pointer<FlaxRuntime>,
    int,
    Pointer<Uint16>,
    int,
    Pointer<Uint64>,
    Pointer<FlaxError>,
  )
  getProperty;
  final int Function(
    Pointer<FlaxRuntime>,
    int,
    Pointer<Uint16>,
    int,
    int,
    Pointer<FlaxError>,
  )
  setProperty;
  final int Function(
    Pointer<FlaxRuntime>,
    int,
    int,
    Pointer<Uint64>,
    int,
    Pointer<Uint64>,
    Pointer<FlaxError>,
  )
  call;
  final int Function(
    Pointer<FlaxRuntime>,
    int,
    int,
    Pointer<Int32>,
    Pointer<FlaxError>,
  )
  strictEquals;
  final int Function(
    Pointer<FlaxRuntime>,
    Pointer<Uint16>,
    int,
    FlaxHostCallback,
    Pointer<Void>,
    Pointer<FlaxError>,
  )
  registerHost;
  final int Function(
    Pointer<FlaxRuntime>,
    int,
    Pointer<Int32>,
    Pointer<FlaxError>,
  )
  drainMicrotasks;
  final int Function(
    Pointer<FlaxRuntime>,
    Pointer<Uint8>,
    int,
    Pointer<Uint64>,
    Pointer<FlaxError>,
  )
  makeBytes;
  final int Function(
    Pointer<FlaxRuntime>,
    int,
    Pointer<Pointer<Uint8>>,
    Pointer<Size>,
    Pointer<FlaxError>,
  )
  readBytes;
  final void Function(Pointer<Void>) bufferFree;
  final void Function(Pointer<FlaxError>) errorClear;
  final void Function(
    Pointer<FlaxError>,
    int,
    Pointer<Uint8>,
    int,
    Pointer<Uint8>,
    int,
  )
  errorSet;
}
