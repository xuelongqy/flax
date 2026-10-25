// ignore_for_file: depend_on_referenced_packages, implementation_imports
import 'dart:async';
import 'dart:convert';
import 'dart:ffi';

import 'package:ffi/ffi.dart';
import 'package:flax/runtime.dart';
import 'package:flax/src/native/native_runtime.dart';

class Handoff {
  Handoff(String path, this.runtime) {
    final lib = DynamicLibrary.open(path);
    final capture = lib
        .lookupFunction<Pointer<Void> Function(), Pointer<Void> Function()>(
          'flax_handoff_capture',
        );
    _start = lib
        .lookupFunction<
          Int32 Function(Pointer<Void>, Pointer<Utf8>, IntPtr, Int32),
          int Function(Pointer<Void>, Pointer<Utf8>, int, int)
        >('flax_handoff_start');
    _startFile = lib.providesSymbol('flax_handoff_start_file')
        ? lib.lookupFunction<
            Int32 Function(Pointer<Void>, Pointer<Utf8>, IntPtr, Int32),
            int Function(Pointer<Void>, Pointer<Utf8>, int, int)
          >('flax_handoff_start_file')
        : null;
    _ready = lib
        .lookupFunction<
          Int32 Function(Pointer<Void>),
          int Function(Pointer<Void>)
        >('flax_handoff_ready');
    _take = lib
        .lookupFunction<
          Pointer<Utf8> Function(Pointer<Void>),
          Pointer<Utf8> Function(Pointer<Void>)
        >('flax_handoff_take');
    _error = lib
        .lookupFunction<
          Pointer<Utf8> Function(Pointer<Void>),
          Pointer<Utf8> Function(Pointer<Void>)
        >('flax_handoff_error');
    _close = lib
        .lookupFunction<
          Int32 Function(Pointer<Void>),
          int Function(Pointer<Void>)
        >('flax_handoff_close');
    _free = lib
        .lookupFunction<
          Void Function(Pointer<Utf8>),
          void Function(Pointer<Utf8>)
        >('flax_handoff_free');
    runtime.registerHostFunction('__captureHandoff', (_, _) {
      _handle = capture();
      return const FlaxJsUndefined();
    });
    runtime.evaluate('__captureHandoff(); delete globalThis.__captureHandoff;');
    if (_handle == nullptr) throw StateError('Missing maintained V8 context');
  }
  final FlaxNativeJsRuntime runtime;
  Pointer<Void> _handle = nullptr;
  bool busy = false;
  late final int Function(Pointer<Void>, Pointer<Utf8>, int, int) _start;
  late final int Function(Pointer<Void>, Pointer<Utf8>, int, int)? _startFile;
  late final int Function(Pointer<Void>) _ready, _close;
  late final Pointer<Utf8> Function(Pointer<Void>) _take, _error;
  late final void Function(Pointer<Utf8>) _free;
  bool get workerRunning => busy && _ready(_handle) == 0;

  Future<Map<String, dynamic>> initialize(
    String source, {
    required bool background,
  }) => _initialize(source, background: background);

  Future<Map<String, dynamic>> initializeSourceFile(String path) =>
      _initialize(path, background: true, fromFile: true);

  Future<Map<String, dynamic>> _initialize(
    String source, {
    required bool background,
    bool fromFile = false,
  }) async {
    if (_handle == nullptr || busy) throw StateError('Handoff closed or busy');
    if (runtime.bridgeCellCount != 0 || runtime.bridgeCallbackCount != 0) {
      throw StateError(
        'Background initialization requires an empty Dart bridge',
      );
    }
    final start = fromFile ? _startFile : _start;
    if (start == null) {
      throw StateError('Native file initialization unavailable');
    }
    final started = Stopwatch()..start();
    final bytes = source.toNativeUtf8();
    busy = true;
    final length = bytes.length;
    try {
      if (start(_handle, bytes, length, background ? 1 : 0) != 1) {
        busy = false;
        throw StateError(
          'Native handoff start rejected: ${_error(_handle).toDartString()}',
        );
      }
    } finally {
      malloc.free(bytes);
    }
    final kickoffUs = started.elapsedMicroseconds;
    while (_ready(_handle) == 0) {
      await Future<void>.delayed(const Duration(milliseconds: 2));
    }
    final text = _take(_handle);
    if (text == nullptr) throw StateError('Native handoff adoption rejected');
    try {
      final result = jsonDecode(text.toDartString()) as Map<String, dynamic>;
      result['kickoffUs'] = kickoffUs;
      result['elapsedUs'] = started.elapsedMicroseconds;
      if (result['ok'] != true) {
        result['error'] = _error(_handle).toDartString();
      }
      return result;
    } finally {
      busy = false;
      _free(text);
    }
  }

  void close() {
    if (_handle == nullptr) return;
    if (busy || _close(_handle) != 1) {
      throw StateError('Cannot close an active handoff');
    }
    _handle = nullptr;
  }
}
