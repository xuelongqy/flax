import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:isolate';
import 'dart:typed_data';

import 'package:ffi/ffi.dart';

import '../runtime/api.dart';
import 'native_calls.dart';
import 'runtime_bindings.g.dart';

part 'native_ffi.dart';

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
final class FlaxNativeJsRuntime
    implements
        FlaxJsRuntime,
        FlaxJsSourcePreparer,
        FlaxJsModuleRuntime,
        Finalizable {
  factory FlaxNativeJsRuntime.fromEngine(
    Pointer<FlaxApi> table,
    Pointer<FlaxEngineGcApi> gc,
    Pointer<FlaxEngineBindingApi> binding, [
    Pointer<FlaxEngineFfiApi>? ffi,
    Pointer<FlaxEngineExecutionApi>? execution,
    Pointer<FlaxEngineModulesApi>? modules,
  ]) {
    ffi ??= nullptr;
    execution ??= nullptr;
    modules ??= nullptr;
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
            'c197ca5199e9ee5661e865596c9c07294dfab51c' ||
        gc.ref.dart_revision.cast<Utf8>().toDartString() !=
            '416e33b0ffaef062a60ec966bb8c82ed2b83f128') {
      throw UnsupportedError(
        'Incompatible Flax Flutter engine or GC extension',
      );
    }
    if (binding == nullptr ||
        binding.ref.version != FLAX_ENGINE_BINDING_VERSION ||
        binding.ref.struct_size != sizeOf<FlaxEngineBindingApi>() ||
        binding.ref.register_members == nullptr ||
        binding.ref.invoke_member == nullptr ||
        binding.ref.call == nullptr ||
        binding.ref.copy_buffer == nullptr ||
        binding.ref.share_buffer == nullptr ||
        binding.ref.read_buffer == nullptr ||
        binding.ref.instance_type == nullptr ||
        binding.ref.type_parts == nullptr ||
        binding.ref.nullable_type == nullptr ||
        binding.ref.instantiate == nullptr ||
        binding.ref.record_fields == nullptr ||
        binding.ref.new_record == nullptr) {
      throw UnsupportedError('Incompatible Flax binding engine extension');
    }
    if (ffi != nullptr &&
        (ffi.ref.version != FLAX_ENGINE_FFI_VERSION ||
            ffi.ref.struct_size != sizeOf<FlaxEngineFfiApi>() ||
            ffi.ref.install == nullptr ||
            ffi.ref.checkpoint == nullptr ||
            ffi.ref.retire == nullptr)) {
      throw UnsupportedError('Incompatible Flax native FFI extension');
    }
    if (execution != nullptr &&
        (execution.ref.version != FLAX_ENGINE_EXECUTION_VERSION ||
            execution.ref.struct_size != sizeOf<FlaxEngineExecutionApi>() ||
            execution.ref.call == nullptr ||
            execution.ref.get_property == nullptr ||
            execution.ref.inspect_arguments == nullptr ||
            execution.ref.prepare == nullptr ||
            execution.ref.poll == nullptr ||
            execution.ref.cancel == nullptr)) {
      throw UnsupportedError('Incompatible Flax execution engine extension');
    }
    if (modules != nullptr &&
        (modules.ref.version != FLAX_ENGINE_MODULES_VERSION ||
            modules.ref.struct_size != sizeOf<FlaxEngineModulesApi>() ||
            modules.ref.install == nullptr ||
            modules.ref.set_wakeup_port == nullptr)) {
      throw UnsupportedError('Incompatible Flax native module extension');
    }
    return FlaxNativeJsRuntime._(
      NativeCalls(table.ref),
      gc.ref,
      binding.ref,
      ffi == nullptr ? null : ffi.ref,
      execution == nullptr ? null : execution.ref,
      modules == nullptr ? null : modules.ref,
    );
  }

  FlaxNativeJsRuntime._(
    this._calls,
    this._gc,
    this._binding,
    this._ffi,
    this._execution,
    this._modules,
  ) {
    _results = _execution;
    _batchArguments = _execution != null;
    using((arena) {
      final result = arena<Pointer<FlaxRuntime>>();
      _checked(arena, (error) => _calls.create(result, error));
      _handle = result.value;
    });
    if (_modules != null) {
      final weak = WeakReference(this);
      final port = _jobsPort = RawReceivePort(null, 'Flax V8 foreground tasks')
        ..keepIsolateAlive = false;
      port.handler = Zone.current.bindUnaryCallbackGuarded((dynamic _) {
        final runtime = weak.target;
        if (runtime == null || runtime.isDisposed) return;
        (runtime._hostJobHandler ?? runtime._moduleJobHandler)?.call();
      });
      try {
        using(
          (arena) => _checked(
            arena,
            (error) => _modules.set_wakeup_port
                .asFunction<
                  int Function(Pointer<FlaxRuntime>, int, Pointer<FlaxError>)
                >()(_handle, port.sendPort.nativePort, error),
          ),
        );
      } catch (_) {
        dispose();
        rethrow;
      }
    }
  }

  final NativeCalls _calls;
  final FlaxEngineGcApi _gc;
  final FlaxEngineBindingApi _binding;
  FlaxEngineFfiApi? _ffi;
  final FlaxEngineExecutionApi? _execution;
  FlaxEngineExecutionApi? _results;
  bool _batchArguments = false;

  /// Lets comparison probes select the original or combined execution path.
  void useEngineResultsForExperiment(bool enabled, {bool arguments = false}) {
    _ensureAlive();
    if (_depth != 0) throw StateError('Cannot change an active runtime');
    if (!enabled) {
      _results = null;
      _batchArguments = false;
      return;
    }
    final api = _execution;
    if (api == null) {
      throw UnsupportedError('Engine execution extension is unavailable');
    }
    _results = api;
    _batchArguments = arguments;
  }

  late final _callResult = _results!.call
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          int,
          Pointer<FlaxBindingArgument>,
          Pointer<FlaxBindingArgument>,
          int,
          Pointer<Uint64>,
          Pointer<FlaxValueInfo>,
          Pointer<FlaxError>,
        )
      >();
  late final _getPropertyResult = _results!.get_property
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          int,
          Pointer<Uint16>,
          int,
          Pointer<Uint64>,
          Pointer<FlaxValueInfo>,
          Pointer<FlaxError>,
        )
      >();
  late final _inspectArguments = _results!.inspect_arguments
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          int,
          Pointer<Uint64>,
          int,
          Pointer<FlaxValueInfo>,
          Pointer<FlaxError>,
        )
      >();
  final FlaxEngineModulesApi? _modules;
  RawReceivePort? _jobsPort;
  void Function()? _hostJobHandler;
  void Function()? _moduleJobHandler;

  @override
  void setHostJobHandler(void Function()? handler) => _hostJobHandler = handler;

  @override
  int get moduleCapabilities => _modules?.capabilities ?? 0;

  @override
  FlaxJsObject installModuleLoader(
    FlaxJsFunction importer, {
    void Function()? onWakeup,
  }) => _entry((arena) {
    final api = _modules;
    if (api == null) {
      throw UnsupportedError('This engine does not include native ESM');
    }
    if (importer is! _NativeObject) {
      throw ArgumentError('Expected a native import callback');
    }
    (importer as _NativeObject)._check(this);
    final result = arena<Uint64>();
    _checked(
      arena,
      (error) => api.install
          .asFunction<
            int Function(
              Pointer<FlaxRuntime>,
              int,
              Pointer<Uint64>,
              Pointer<FlaxError>,
            )
          >()(_handle, (importer as _NativeObject)._id, result, error),
    );
    _moduleJobHandler = onWakeup;
    return _read(arena, result.value) as FlaxJsObject;
  });
  ReceivePort? _ffiPort;
  late final _registerMembers = _binding.register_members
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          int,
          Pointer<Uint64>,
          Pointer<FlaxError>,
        )
      >();
  late final _invokeMember = _binding.invoke_member
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          int,
          int,
          Pointer<FlaxBindingArgument>,
          int,
          Pointer<Int32>,
          Pointer<Uint64>,
          Pointer<FlaxError>,
        )
      >();
  late final _bindingCall = _binding.call
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          int,
          Pointer<FlaxBindingArgument>,
          Pointer<FlaxBindingArgument>,
          int,
          Pointer<Uint64>,
          Pointer<FlaxError>,
        )
      >();
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
  late final _copyBuffer = _binding.copy_buffer
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          Object,
          Pointer<Uint64>,
          Pointer<FlaxError>,
        )
      >();
  late final _shareBuffer = _binding.share_buffer
      .asFunction<
        int Function(
          Pointer<FlaxRuntime>,
          Object,
          int,
          Pointer<Uint64>,
          Pointer<FlaxError>,
        )
      >();
  late final _readBuffer = _binding.read_buffer
      .asFunction<
        Object Function(Pointer<FlaxRuntime>, int, int, Pointer<FlaxError>)
      >();
  late final _instanceType = _binding.instance_type
      .asFunction<
        Object? Function(Pointer<FlaxRuntime>, Object, Pointer<FlaxError>)
      >();
  late final _typeParts = _binding.type_parts
      .asFunction<
        Object? Function(Pointer<FlaxRuntime>, Object, Pointer<FlaxError>)
      >();
  late final _nullableType = _binding.nullable_type
      .asFunction<
        Object? Function(Pointer<FlaxRuntime>, Object, Pointer<FlaxError>)
      >();
  late final _instantiate = _binding.instantiate
      .asFunction<
        Object? Function(
          Pointer<FlaxRuntime>,
          Object,
          Object,
          Pointer<FlaxError>,
        )
      >();
  late final _recordFields = _binding.record_fields
      .asFunction<
        Object? Function(Pointer<FlaxRuntime>, Object, Pointer<FlaxError>)
      >();
  late final _newRecord = _binding.new_record
      .asFunction<
        Object? Function(
          Pointer<FlaxRuntime>,
          Object?,
          Object,
          Object,
          Pointer<FlaxError>,
        )
      >();

  @override
  List<Object?> dartRecordFields(Record value) => _entry((arena) {
    Object? result;
    _checked(arena, (error) {
      result = _recordFields(_handle, value, error);
      return error.ref.code;
    });
    return (result as List).cast<Object?>();
  });

  @override
  Record newDartRecord(Type? type, List<String> names, List<Object?> fields) =>
      _entry((arena) {
        Object? result;
        final fieldNames = List<String>.of(names, growable: false);
        final values = List<Object?>.of(fields, growable: false);
        _checked(arena, (error) {
          result = _newRecord(_handle, type, fieldNames, values, error);
          return error.ref.code;
        });
        return result as Record;
      });

  /// Reads the VM type without invoking an Object.runtimeType override.
  @override
  Type dartInstanceType(Object value) => _entry((arena) {
    Object? result;
    _checked(arena, (error) {
      result = _instanceType(_handle, value, error);
      return error.ref.code;
    });
    return result as Type;
  });

  /// Reads real VM Type components. Display names never drive type selection.
  @override
  List<Object?> dartTypeParts(Type type) => _entry((arena) {
    Object? result;
    _checked(arena, (error) {
      result = _typeParts(_handle, type, error);
      return error.ref.code;
    });
    return (result as List).cast<Object?>();
  });

  @override
  Type nullableDartType(Type type) => _entry((arena) {
    Object? result;
    _checked(arena, (error) {
      result = _nullableType(_handle, type, error);
      return error.ref.code;
    });
    return result as Type;
  });

  /// Instantiates once; the resulting closure retains its Dart receiver/context.
  @override
  Function instantiateDartClosure(
    Function factory,
    List<Type> types,
  ) => _entry((arena) {
    Object? result;
    // CastList is not a VM array. Normalize before passing the checked Handle.
    final arguments = List<Type>.of(types, growable: false);
    _checked(arena, (error) {
      result = _instantiate(_handle, factory, arguments, error);
      return error.ref.code;
    });
    return result as Function;
  });

  final SendPort _owner = Isolate.current.controlPort;
  late final Pointer<FlaxRuntime> _handle;
  final _callbacks = <_HostCallback>{};
  int _depth = 0;

  /// Scalar-only diagnostic spans for the isolated startup experiment.
  void Function(String, bool)? traceForExperiment;
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
      if (error.ref.message != nullptr || error.ref.stack != nullptr) {
        _calls.errorClear(error);
      }
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
    return _encodedBytes(arena, utf8.encode(string));
  }

  static (Pointer<Uint8>, int) _encodedBytes(Arena arena, Uint8List data) {
    final pointer = arena<Uint8>(data.length + 1);
    pointer.asTypedList(data.length).setAll(0, data);
    return (pointer, data.length);
  }

  void _release(Arena arena, int id) {
    _checked(arena, (error) => _calls.releaseValue(_handle, id, error));
  }

  FlaxJsValue _read(
    Arena arena,
    int id, {
    bool borrowed = false,
    Pointer<FlaxValueInfo>? prepared,
  }) {
    final tracing = traceForExperiment;
    final label = borrowed ? 'native:borrowed-input' : 'native:result';
    final info = prepared ?? arena<FlaxValueInfo>();
    var transferred = false;
    var traceStarted = false;
    try {
      tracing?.call(label, true);
      traceStarted = true;
      if (prepared == null) {
        _checked(arena, (error) => _calls.inspect(_handle, id, info, error));
      }
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
        case FlaxValueKind.FLAX_BIGINT:
          return FlaxJsBigInt(
            BigInt.parse(
              String.fromCharCodes(
                info.ref.string_data.asTypedList(info.ref.string_length),
              ),
            ),
          );
        case FlaxValueKind.FLAX_OBJECT:
        case FlaxValueKind.FLAX_FUNCTION:
          final value = kind == FlaxValueKind.FLAX_FUNCTION
              ? _NativeFunction(this, id, borrowed)
              : _NativeObject(this, id, borrowed);
          if (!borrowed) {
            tracing?.call('native:bind-result', true);
            try {
              _checked(arena, (error) => _bindValue(_handle, id, value, error));
            } finally {
              tracing?.call('native:bind-result', false);
            }
          }
          transferred = true;
          return value;
      }
    } finally {
      try {
        if (info.ref.string_data != nullptr) {
          _calls.bufferFree(info.ref.string_data.cast());
          info.ref.string_data = nullptr;
        }
        if (!transferred && !borrowed && id != 0) _release(arena, id);
      } finally {
        if (traceStarted) tracing?.call(label, false);
      }
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
        FlaxJsBigInt() => FlaxValueKind.FLAX_BIGINT,
        _ => throw ArgumentError('Unsupported FlaxJsValue implementation'),
      };
      final number = switch (value) {
        FlaxJsNumber(:final value) => value,
        FlaxJsBoolean(:final value) => value ? 1.0 : 0.0,
        _ => 0.0,
      };
      final (text, length) = switch (value) {
        FlaxJsString(:final value) => _codeUnits(arena, value),
        FlaxJsBigInt(:final value) => _codeUnits(arena, value.toString()),
        _ => (nullptr.cast<Uint16>(), 0),
      };
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
        return _evaluate(arena, text, length, url, urlLength);
      });

  bool _preparingSources = false;

  @override
  Future<bool> prepareSources(
    List<FlaxJsSource> sources, {
    required FlaxJsSource entry,
    Future<void>? cancelled,
  }) async {
    _ensureAlive();
    final api = _execution;
    if (api == null) return false;
    if (_preparingSources || _depth != 0) {
      throw StateError('Runtime is already active');
    }
    final start = api.prepare
        .asFunction<
          int Function(
            Pointer<FlaxRuntime>,
            Pointer<FlaxSource>,
            int,
            Pointer<FlaxSource>,
            Pointer<Int32>,
            Pointer<FlaxError>,
          )
        >();
    final poll = api.poll
        .asFunction<
          int Function(Pointer<FlaxRuntime>, Pointer<Int32>, Pointer<FlaxError>)
        >();
    final cancel = api.cancel
        .asFunction<int Function(Pointer<FlaxRuntime>, Pointer<FlaxError>)>();
    final started = using((arena) {
      void encode(FlaxSource output, FlaxJsSource source) {
        final (data, length) = _encodedBytes(arena, source.bytes);
        final (url, urlLength) = _encodedBytes(arena, source.sourceUrlBytes);
        output
          ..data = data
          ..length = length
          ..url = url
          ..url_length = urlLength;
      }

      final inputs = arena<FlaxSource>(sources.length);
      for (var i = 0; i < sources.length; i++) {
        encode(inputs[i], sources[i]);
      }
      final main = arena<FlaxSource>();
      encode(main.ref, entry);
      final result = arena<Int32>();
      _checked(
        arena,
        (error) => start(_handle, inputs, sources.length, main, result, error),
      );
      return result.value != 0;
    });
    if (!started) return false;
    _preparingSources = true;
    var stop = false;
    var requested = false;
    cancelled?.then<void>(
      (_) {
        stop = true;
      },
      onError: (Object _) {
        stop = true;
      },
    );
    try {
      while (true) {
        _ensureAlive();
        final ready = using((arena) {
          if (stop && !requested) {
            _checked(arena, (error) => cancel(_handle, error));
            requested = true;
          }
          final result = arena<Int32>();
          _checked(arena, (error) => poll(_handle, result, error));
          return result.value;
        });
        if (ready != 0) {
          if (requested) {
            throw StateError('JavaScript initialization cancelled');
          }
          return ready > 0;
        }
        await Future<void>.delayed(const Duration(milliseconds: 2));
      }
    } finally {
      _preparingSources = false;
    }
  }

  @override
  FlaxJsValue evaluateSource(FlaxJsSource source) => _entry((arena) {
    final (text, length) = _encodedBytes(arena, source.bytes);
    final (url, urlLength) = _encodedBytes(arena, source.sourceUrlBytes);
    return _evaluate(arena, text, length, url, urlLength);
  });

  FlaxJsValue _evaluate(
    Arena arena,
    Pointer<Uint8> text,
    int length,
    Pointer<Uint8> url,
    int urlLength,
  ) {
    final result = arena<Uint64>();
    _checked(
      arena,
      (error) =>
          _calls.evaluate(_handle, text, length, url, urlLength, result, error),
    );
    return _read(arena, result.value);
  }

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
    final result = arena<Uint64>();
    _checked(arena, (error) => _copyBuffer(_handle, bytes, result, error));
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
      if (length.value == 0) return Uint8List(0);
      // The native snapshot owns these bytes independently of the JS runtime.
      final bytes = output.value.asTypedList(
        length.value,
        finalizer: _calls.bufferFreePointer,
      );
      output.value = nullptr;
      return bytes;
    } finally {
      _calls.bufferFree(output.value.cast());
    }
  });

  @override
  FlaxJsObject createUint8Array(Uint8List bytes) => createSharedBuffer(bytes);

  @override
  FlaxJsObject createSharedBuffer(Object data) => _entry((arena) {
    final type = FlaxBufferType.of(data);
    if (type == null) {
      throw ArgumentError('Expected primitive TypedData or ByteBuffer');
    }
    // ByteBuffer preserves readonly access; viewing bytes adds no payload copy.
    final bytes = data is Uint8List
        ? data
        : data is ByteBuffer
        ? data.asUint8List()
        : (data as TypedData).buffer.asUint8List(
            data.offsetInBytes,
            data.lengthInBytes,
          );
    final output = arena<Uint64>();
    _checked(
      arena,
      (error) => _shareBuffer(_handle, bytes, type.index, output, error),
    );
    return _read(arena, output.value) as FlaxJsObject;
  });

  @override
  Uint8List readUint8Array(FlaxJsObject value) =>
      readSharedBuffer(value, FlaxBufferType.uint8) as Uint8List;

  @override
  Object readSharedBuffer(FlaxJsObject value, FlaxBufferType type) => _entry((
    arena,
  ) {
    if (value is! _NativeObject) {
      throw ArgumentError('Unsupported object implementation');
    }
    value._check(this);
    Object? result;
    _checked(arena, (error) {
      result = _readBuffer(_handle, value._id, type.index, error);
      return error.ref.code;
    });
    final bytes = result as Uint8List;
    final buffer = bytes.buffer;
    final offset = bytes.offsetInBytes;
    final length = bytes.lengthInBytes;
    return switch (type) {
      FlaxBufferType.byteBuffer => buffer,
      FlaxBufferType.int8 => buffer.asInt8List(offset, length),
      FlaxBufferType.uint8 => bytes,
      FlaxBufferType.uint8Clamped => buffer.asUint8ClampedList(offset, length),
      FlaxBufferType.int16 => buffer.asInt16List(offset, length ~/ 2),
      FlaxBufferType.uint16 => buffer.asUint16List(offset, length ~/ 2),
      FlaxBufferType.int32 => buffer.asInt32List(offset, length ~/ 4),
      FlaxBufferType.uint32 => buffer.asUint32List(offset, length ~/ 4),
      FlaxBufferType.int64 => buffer.asInt64List(offset, length ~/ 8),
      FlaxBufferType.uint64 => buffer.asUint64List(offset, length ~/ 8),
      FlaxBufferType.float32 => buffer.asFloat32List(offset, length ~/ 4),
      FlaxBufferType.float64 => buffer.asFloat64List(offset, length ~/ 8),
      FlaxBufferType.byteData => buffer.asByteData(offset, length),
    };
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
          // Zero arguments need only one receiver inspect; keep that cheaper path.
          final infos = owner._batchArguments && count != 0
              ? frame<FlaxValueInfo>(count + 1)
              : null;
          if (infos != null) {
            owner._checked(
              frame,
              (error) => owner._inspectArguments(
                owner._handle,
                receiver,
                arguments,
                count,
                infos,
                error,
              ),
            );
          }
          FlaxJsValue read(int id, int index) {
            final value = owner._read(
              frame,
              id,
              borrowed: true,
              prepared: infos == null ? null : infos + index,
            );
            if (value is _NativeObject) borrowed.add(value);
            return value;
          }

          try {
            final thisValue = read(receiver, 0);
            final args = List<FlaxJsValue>.generate(
              count,
              (i) => read(arguments[i], i + 1),
              growable: false,
            );
            output.value = owner._encode(
              frame,
              function(thisValue, List.unmodifiable(args)),
            );
            return FlaxStatus.FLAX_OK.value;
          } finally {
            // A failed decode must also release descriptions not yet consumed.
            if (infos != null) {
              for (var i = 0; i <= count; i++) {
                final data = (infos + i).ref.string_data;
                if (data != nullptr) owner._calls.bufferFree(data.cast());
              }
            }
          }
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

  void _bindingArgument(
    Arena arena,
    FlaxBindingArgument output,
    FlaxJsValue input,
  ) {
    switch (input) {
      case FlaxJsUndefined():
        output.kind = FlaxValueKind.FLAX_UNDEFINED.value;
      case FlaxJsNull():
        output.kind = FlaxValueKind.FLAX_NULL.value;
      case FlaxJsBoolean(:final value):
        output.kind = FlaxValueKind.FLAX_BOOLEAN.value;
        output.number = value ? 1 : 0;
      case FlaxJsNumber(:final value):
        output.kind = FlaxValueKind.FLAX_NUMBER.value;
        output.number = value;
      case FlaxJsString(:final value):
        output.kind = FlaxValueKind.FLAX_STRING.value;
        final (text, length) = _codeUnits(arena, value);
        output.text = text;
        output.length = length;
      case FlaxJsBigInt(:final value):
        output.kind = FlaxValueKind.FLAX_BIGINT.value;
        final (text, length) = _codeUnits(arena, value.toString());
        output.text = text;
        output.length = length;
      case _NativeObject():
        input._check(this);
        output.kind = FlaxValueKind.FLAX_OBJECT.value;
        output.id = input._id;
      default:
        throw ArgumentError('Unsupported binding argument');
    }
  }

  @override
  int registerProxyMembers(FlaxJsObject layout) => _entry((arena) {
    if (layout is! _NativeObject) throw ArgumentError('Foreign proxy layout');
    layout._check(this);
    final first = arena<Uint64>();
    _checked(
      arena,
      (error) => _registerMembers(_handle, layout._id, first, error),
    );
    return first.value;
  });

  @override
  FlaxJsValue? invokeProxyMember(
    FlaxJsObject receiver,
    int member,
    List<FlaxJsValue> arguments,
  ) => _entry((arena) {
    if (receiver is! _NativeObject) {
      throw ArgumentError('Foreign proxy receiver');
    }
    receiver._check(this);
    if (member < 0) throw ArgumentError('Invalid proxy member');
    final inputs = arena<FlaxBindingArgument>(arguments.length + 1);
    for (var i = 0; i < arguments.length; i++) {
      _bindingArgument(arena, inputs[i], arguments[i]);
    }
    final handled = arena<Int32>();
    final output = arena<Uint64>();
    _checked(
      arena,
      (error) => _invokeMember(
        _handle,
        receiver._id,
        member,
        inputs,
        arguments.length,
        handled,
        output,
        error,
      ),
    );
    return handled.value == 0 ? null : _read(arena, output.value);
  });

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
    if (!retireNativeFfi()) {
      throw StateError('Native FFI callbacks are still retiring');
    }
    _disposing = true;
    try {
      using((arena) {
        _checked(arena, (error) => _calls.destroy(_handle, error));
      });
      _disposed = true;
      _jobsPort?.close();
      _jobsPort = null;
      _hostJobHandler = null;
      _moduleJobHandler = null;
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
    if (_runtime._results != null) {
      final info = arena<FlaxValueInfo>();
      _runtime._checked(
        arena,
        (error) => _runtime._getPropertyResult(
          _runtime._handle,
          _id,
          text,
          length,
          output,
          info,
          error,
        ),
      );
      return _runtime._read(arena, output.value, prepared: info);
    }
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
    // The existing spare slot holds the receiver as well as the argument array.
    final storage = arena<FlaxBindingArgument>(arguments.length + 1);
    final receiver = storage;
    final inputs = storage + 1;
    _runtime._bindingArgument(arena, receiver.ref, thisValue);
    for (var i = 0; i < arguments.length; i++) {
      _runtime._bindingArgument(arena, inputs[i], arguments[i]);
    }
    final output = arena<Uint64>();
    if (_runtime._results != null) {
      final info = arena<FlaxValueInfo>();
      _runtime._checked(
        arena,
        (error) => _runtime._callResult(
          _runtime._handle,
          _id,
          receiver,
          inputs,
          arguments.length,
          output,
          info,
          error,
        ),
      );
      return _runtime._read(arena, output.value, prepared: info);
    }
    _runtime._checked(
      arena,
      (error) => _runtime._bindingCall(
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
  });
}
