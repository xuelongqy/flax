import 'dart:convert';
import 'dart:ffi';
import 'dart:isolate';
import 'dart:typed_data';

import 'package:ffi/ffi.dart';

import '../runtime/api.dart';
import 'native_calls.dart';
import 'runtime_bindings.g.dart';

final _hostCallbackFinalizer = Finalizer<_HostCallback>(
  (record) => record.close(),
);

// The token contains a trampoline, not the business callback or a JS facade.
class _HostCallback {
  _HostCallback(FlaxNativeJsRuntime runtime, this.callable)
    : runtime = WeakReference(runtime);
  final WeakReference<FlaxNativeJsRuntime> runtime;
  final NativeCallable<FlaxHostCallbackFunction> callable;
  bool closed = false;
  void close() {
    if (closed) return;
    closed = true;
    _hostCallbackFinalizer.detach(this);
    runtime.target?._callbacks.remove(this);
    callable.close();
  }
}

/// Engine extension implementation. Construct through its checked engine API.
/// Owns native resources and must be explicitly disposed. Finalizable prevents
/// sending this object to another isolate and keeps it live during native calls.
final class FlaxNativeJsRuntime implements FlaxJsRuntime, Finalizable {
  factory FlaxNativeJsRuntime.fromEngine(
    Pointer<FlaxApi> table,
    Pointer<FlaxEngineGcApi> gc,
  ) {
    if (table == nullptr ||
        table.ref.version != FLAX_ABI_VERSION ||
        table.ref.struct_size != sizeOf<FlaxApi>()) {
      throw UnsupportedError('Incompatible Flax native ABI');
    }
    if (gc == nullptr ||
        gc.ref.version != FLAX_ENGINE_GC_VERSION ||
        gc.ref.struct_size != sizeOf<FlaxEngineGcApi>() ||
        gc.ref.flutter_revision == nullptr ||
        gc.ref.dart_revision == nullptr ||
        gc.ref.bind_value == nullptr ||
        gc.ref.bind_peer == nullptr ||
        gc.ref.register_host == nullptr ||
        gc.ref.cell_count == nullptr ||
        gc.ref.flutter_revision.cast<Utf8>().toDartString() !=
            '5fc346839b5d0eef006ed8404392afb4dfae428d' ||
        gc.ref.dart_revision.cast<Utf8>().toDartString() !=
            '04bcd1036cdc799ac6564988f159ee454d42c822') {
      throw UnsupportedError(
        'Incompatible Flax Flutter engine or GC extension',
      );
    }
    return FlaxNativeJsRuntime._(NativeCalls(table.ref), gc.ref);
  }

  FlaxNativeJsRuntime._(this._calls, this._gc) {
    using((arena) {
      final result = arena<Pointer<FlaxRuntime>>();
      _checked(arena, (error) => _calls.create(result, error));
      _handle = result.value;
    });
  }

  final NativeCalls _calls;
  final FlaxEngineGcApi _gc;
  late final _bindValue = _gc.bind_value
      .asFunction<
        int Function(Pointer<FlaxRuntime>, int, Object, Pointer<FlaxError>)
      >();
  late final _bindPeer = _gc.bind_peer
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          int,
          Object,
          Object?,
          Pointer<FlaxError>,
        )
      >();
  late final _registerHost = _gc.register_host
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          Pointer<Uint16>,
          int,
          Pointer<NativeFunction<FlaxHostCallbackFunction>>,
          Pointer<Void>,
          Object,
          Pointer<FlaxError>,
        )
      >();
  final SendPort _owner = Isolate.current.controlPort;
  late final Pointer<FlaxRuntime> _handle;
  final _callbacks = <_HostCallback>{};
  int _depth = 0;
  bool _disposed = false;
  bool _disposing = false;

  @override
  bool get isDisposed => _disposed;

  void _ensureAlive() {
    if (Isolate.current.controlPort != _owner) {
      throw StateError('Runtime belongs to another Dart isolate');
    }
    if (_disposed || _disposing) {
      throw StateError('Runtime is disposing or has been disposed');
    }
  }

  T _entry<T>(T Function(Arena arena) action) {
    _ensureAlive();
    _depth++;
    try {
      return using(action);
    } finally {
      _depth--;
    }
  }

  void _checked(Arena arena, int Function(Pointer<FlaxError>) action) {
    final error = arena<FlaxError>();
    try {
      final code = action(error);
      if (code == FlaxStatus.FLAX_OK.value) return;
      final message = _string(error.ref.message, error.ref.message_length);
      final stack = _string(error.ref.stack, error.ref.stack_length);
      switch (FlaxStatus.fromValue(code)) {
        case FlaxStatus.FLAX_STATE_ERROR:
          throw StateError(message);
        case FlaxStatus.FLAX_ARGUMENT_ERROR:
          throw ArgumentError(message);
        case FlaxStatus.FLAX_JS_ERROR:
          throw FlaxJsException(message, jsStack: stack);
        default:
          throw StateError('Native runtime error: $message');
      }
    } finally {
      _calls.errorClear(error);
    }
  }

  static String _string(Pointer<Uint8> pointer, int length) => length == 0
      ? ''
      : utf8.decode(pointer.asTypedList(length), allowMalformed: true);

  static (Pointer<Uint16>, int) _codeUnits(Arena arena, String string) {
    final pointer = arena<Uint16>(string.length + 1);
    pointer.asTypedList(string.length).setAll(0, string.codeUnits);
    return (pointer, string.length);
  }

  static (Pointer<Uint8>, int) _bytes(Arena arena, String string) {
    final data = utf8.encode(string);
    final pointer = arena<Uint8>(data.length + 1);
    pointer.asTypedList(data.length).setAll(0, data);
    return (pointer, data.length);
  }

  void _release(Arena arena, int id) {
    _checked(arena, (error) => _calls.releaseValue(_handle, id, error));
  }

  FlaxJsValue _read(Arena arena, int id, {bool borrowed = false}) {
    final info = arena<FlaxValueInfo>();
    var transferred = false;
    try {
      _checked(arena, (error) => _calls.inspect(_handle, id, info, error));
      final kind = FlaxValueKind.fromValue(info.ref.kind);
      switch (kind) {
        case FlaxValueKind.FLAX_UNDEFINED:
          return const FlaxJsUndefined();
        case FlaxValueKind.FLAX_NULL:
          return const FlaxJsNull();
        case FlaxValueKind.FLAX_BOOLEAN:
          return FlaxJsBoolean(info.ref.number != 0);
        case FlaxValueKind.FLAX_NUMBER:
          return FlaxJsNumber(info.ref.number);
        case FlaxValueKind.FLAX_STRING:
          return FlaxJsString(
            String.fromCharCodes(
              info.ref.string_data.asTypedList(info.ref.string_length),
            ),
          );
        case FlaxValueKind.FLAX_OBJECT:
        case FlaxValueKind.FLAX_FUNCTION:
          final value = kind == FlaxValueKind.FLAX_FUNCTION
              ? _NativeFunction(this, id, borrowed)
              : _NativeObject(this, id, borrowed);
          if (!borrowed) {
            _checked(arena, (error) => _bindValue(_handle, id, value, error));
          }
          transferred = true;
          return value;
      }
    } finally {
      _calls.bufferFree(info.ref.string_data.cast());
      if (!transferred && !borrowed) _release(arena, id);
    }
  }

  int _encode(Arena arena, FlaxJsValue value) {
    final result = arena<Uint64>();
    if (value is _NativeObject) {
      value._check(this);
      _checked(
        arena,
        (error) => _calls.cloneValue(_handle, value._id, result, error),
      );
    } else {
      final kind = switch (value) {
        FlaxJsUndefined() => FlaxValueKind.FLAX_UNDEFINED,
        FlaxJsNull() => FlaxValueKind.FLAX_NULL,
        FlaxJsBoolean() => FlaxValueKind.FLAX_BOOLEAN,
        FlaxJsNumber() => FlaxValueKind.FLAX_NUMBER,
        FlaxJsString() => FlaxValueKind.FLAX_STRING,
        _ => throw ArgumentError('Unsupported FlaxJsValue implementation'),
      };
      final number = switch (value) {
        FlaxJsNumber(:final value) => value,
        FlaxJsBoolean(:final value) => value ? 1.0 : 0.0,
        _ => 0.0,
      };
      final (text, length) = _codeUnits(
        arena,
        value is FlaxJsString ? value.value : '',
      );
      _checked(
        arena,
        (error) => _calls.makeValue(
          _handle,
          kind.value,
          number,
          text,
          length,
          result,
          error,
        ),
      );
    }
    return result.value;
  }

  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:eval'}) =>
      _entry((arena) {
        final (text, length) = _bytes(arena, source);
        final (url, urlLength) = _bytes(arena, sourceUrl);
        final result = arena<Uint64>();
        _checked(
          arena,
          (error) => _calls.evaluate(
            _handle,
            text,
            length,
            url,
            urlLength,
            result,
            error,
          ),
        );
        return _read(arena, result.value);
      });

  @override
  FlaxJsValue getGlobal(String name) => _entry((arena) {
    final result = arena<Uint64>();
    _checked(arena, (error) => _calls.globalObject(_handle, result, error));
    final global = _read(arena, result.value) as FlaxJsObject;
    try {
      return global.getProperty(name);
    } finally {
      global.release();
    }
  });

  @override
  FlaxJsObject createArrayBuffer(Uint8List bytes) => _entry((arena) {
    final input = arena<Uint8>(bytes.length + 1);
    input.asTypedList(bytes.length).setAll(0, bytes);
    final result = arena<Uint64>();
    _checked(
      arena,
      (error) => _calls.makeBytes(_handle, input, bytes.length, result, error),
    );
    return _read(arena, result.value) as FlaxJsObject;
  });

  @override
  Uint8List readBytes(FlaxJsObject value) => _entry((arena) {
    if (value is! _NativeObject) {
      throw ArgumentError('Unsupported object implementation');
    }
    value._check(this);
    final output = arena<Pointer<Uint8>>();
    final length = arena<Size>();
    try {
      _checked(
        arena,
        (error) => _calls.readBytes(_handle, value._id, output, length, error),
      );
      return Uint8List.fromList(output.value.asTypedList(length.value));
    } finally {
      _calls.bufferFree(output.value.cast());
    }
  });

  // Create the native root in a separate closure context. Sharing the
  // registration scope would retain its strong business callback argument.
  static NativeCallable<FlaxHostCallbackFunction> _hostTrampoline(
    WeakReference<FlaxNativeJsRuntime> weakRuntime,
    WeakReference<FlaxJsHostFunction> weakCallback,
  ) {
    return NativeCallable<FlaxHostCallbackFunction>.isolateLocal((
      Pointer<Void> context,
      Pointer<FlaxRuntime> runtime,
      int receiver,
      Pointer<Uint64> arguments,
      int count,
      Pointer<Uint64> output,
      Pointer<FlaxError> error,
    ) {
      final borrowed = <_NativeObject>[];
      try {
        final owner = weakRuntime.target;
        final function = weakCallback.target;
        if (owner == null || function == null) {
          throw StateError('Collected Dart host callback');
        }
        return owner._entry((frame) {
          if (runtime != owner._handle) {
            throw StateError('Foreign runtime callback');
          }
          FlaxJsValue read(int id) {
            final value = owner._read(frame, id, borrowed: true);
            if (value is _NativeObject) borrowed.add(value);
            return value;
          }

          final thisValue = read(receiver);
          final args = List<FlaxJsValue>.generate(
            count,
            (i) => read(arguments[i]),
            growable: false,
          );
          output.value = owner._encode(
            frame,
            function(thisValue, List.unmodifiable(args)),
          );
          return FlaxStatus.FLAX_OK.value;
        });
      } catch (exception, stack) {
        using((frame) {
          final (message, length) = _bytes(frame, exception.toString());
          final (trace, traceLength) = _bytes(frame, stack.toString());
          final owner = weakRuntime.target;
          if (owner == null) {
            return;
          }
          owner._calls.errorSet(
            error,
            FlaxStatus.FLAX_JS_ERROR.value,
            message,
            length,
            trace,
            traceLength,
          );
        });
        return FlaxStatus.FLAX_JS_ERROR.value;
      } finally {
        for (final value in borrowed) {
          value._released = true;
        }
      }
    }, exceptionalReturn: FLAX_CALLBACK_FAILURE);
  }

  @override
  void registerHostFunction(
    String name,
    FlaxJsHostFunction callback,
  ) => _entry((arena) {
    final weakCallback = WeakReference(callback);
    final weakRuntime = WeakReference(this);
    final callable = _hostTrampoline(weakRuntime, weakCallback);
    // A global setter may retain the function and then throw. Keep the callback
    // even if registration fails, as well as after a later global replacement.
    final record = _HostCallback(this, callable);
    _callbacks.add(record);
    _hostCallbackFinalizer.attach(callback, record, detach: record);
    final (text, length) = _codeUnits(arena, name);
    _checked(
      arena,
      (error) => _registerHost(
        _handle,
        text,
        length,
        callable.nativeFunction,
        nullptr,
        callback,
        error,
      ),
    );
  });

  /// Internal bridge edge; applications do not manage GC ownership.
  @override
  void bindDartPeer(FlaxJsObject object, Object target, {Object? origin}) {
    if (object is! _NativeObject) {
      throw ArgumentError('Expected a native JS object');
    }
    object._check(this);
    _entry((arena) {
      _checked(
        arena,
        (error) => _bindPeer(_handle, object._id, target, origin, error),
      );
    });
  }

  int get bridgeCellCount => _entry(
    (_) => _gc.cell_count.asFunction<int Function(Pointer<FlaxRuntime>)>()(
      _handle,
    ),
  );

  int get bridgeCallbackCount => _callbacks.length;

  @override
  bool drainMicrotasks({int maxJobsHint = -1}) {
    if (_depth != 0) {
      throw StateError('Cannot drain microtasks during a callback');
    }
    if (maxJobsHint < -1 || maxJobsHint > 0x7fffffff) {
      throw ArgumentError.value(maxJobsHint, 'maxJobsHint');
    }
    return _entry((arena) {
      final complete = arena<Int32>();
      _checked(
        arena,
        (error) =>
            _calls.drainMicrotasks(_handle, maxJobsHint, complete, error),
      );
      return complete.value != 0;
    });
  }

  @override
  void dispose() {
    if (_disposed) return;
    _ensureAlive();
    if (_depth != 0) throw StateError('Cannot dispose an active runtime');
    _disposing = true;
    try {
      using((arena) {
        _checked(arena, (error) => _calls.destroy(_handle, error));
      });
      _disposed = true;
    } finally {
      _disposing = false;
    }
    for (final callback in _callbacks.toList()) {
      callback.close();
    }
    _callbacks.clear();
  }
}

class _NativeObject extends FlaxJsObject {
  _NativeObject(this._runtime, this._id, this._borrowed);
  final FlaxNativeJsRuntime _runtime;
  final int _id;
  final bool _borrowed;
  bool _released = false;

  void _check(FlaxNativeJsRuntime runtime) {
    runtime._ensureAlive();
    if (!identical(runtime, _runtime)) {
      throw ArgumentError('Value belongs to another runtime');
    }
    if (_released) {
      throw StateError('Reference has been released or its callback returned');
    }
  }

  @override
  bool get isReleased => _released || _runtime.isDisposed;

  @override
  void release() {
    if (isReleased) return;
    _check(_runtime);
    if (!_borrowed) _runtime._entry((arena) => _runtime._release(arena, _id));
    _released = true;
  }

  @override
  FlaxJsObject retain() => _runtime._entry((arena) {
    _check(_runtime);
    final output = arena<Uint64>();
    _runtime._checked(
      arena,
      (error) =>
          _runtime._calls.cloneValue(_runtime._handle, _id, output, error),
    );
    return _runtime._read(arena, output.value) as FlaxJsObject;
  });

  @override
  FlaxJsValue getProperty(String name) => _runtime._entry((arena) {
    _check(_runtime);
    final (text, length) = FlaxNativeJsRuntime._codeUnits(arena, name);
    final output = arena<Uint64>();
    _runtime._checked(
      arena,
      (error) => _runtime._calls.getProperty(
        _runtime._handle,
        _id,
        text,
        length,
        output,
        error,
      ),
    );
    return _runtime._read(arena, output.value);
  });

  @override
  void setProperty(String name, FlaxJsValue value) => _runtime._entry((arena) {
    _check(_runtime);
    final input = _runtime._encode(arena, value);
    try {
      final (text, length) = FlaxNativeJsRuntime._codeUnits(arena, name);
      _runtime._checked(
        arena,
        (error) => _runtime._calls.setProperty(
          _runtime._handle,
          _id,
          text,
          length,
          input,
          error,
        ),
      );
    } finally {
      _runtime._release(arena, input);
    }
  });

  @override
  bool strictEquals(FlaxJsObject other) => _runtime._entry((arena) {
    _check(_runtime);
    if (other is! _NativeObject) {
      throw ArgumentError('Unsupported object implementation');
    }
    other._check(_runtime);
    final output = arena<Int32>();
    _runtime._checked(
      arena,
      (error) => _runtime._calls.strictEquals(
        _runtime._handle,
        _id,
        other._id,
        output,
        error,
      ),
    );
    return output.value != 0;
  });
}

final class _NativeFunction extends _NativeObject implements FlaxJsFunction {
  _NativeFunction(super.runtime, super.id, super.borrowed);

  @override
  FlaxJsValue call(
    List<FlaxJsValue> arguments, {
    FlaxJsValue thisValue = const FlaxJsUndefined(),
  }) => _runtime._entry((arena) {
    _check(_runtime);
    final ids = <int>[];
    try {
      final receiver = _runtime._encode(arena, thisValue);
      ids.add(receiver);
      final inputs = arena<Uint64>(arguments.length + 1);
      for (var i = 0; i < arguments.length; i++) {
        inputs[i] = _runtime._encode(arena, arguments[i]);
        ids.add(inputs[i]);
      }
      final output = arena<Uint64>();
      _runtime._checked(
        arena,
        (error) => _runtime._calls.call(
          _runtime._handle,
          _id,
          receiver,
          inputs,
          arguments.length,
          output,
          error,
        ),
      );
      return _runtime._read(arena, output.value);
    } finally {
      for (final id in ids) {
        _runtime._release(arena, id);
      }
    }
  });
}
