// ignore_for_file: depend_on_referenced_packages
import 'dart:convert';
import 'dart:ffi';

import 'package:ffi/ffi.dart';
import 'package:flax/runtime.dart';
import 'package:flutter/scheduler.dart';

class Slicing {
  Slicing(String path, this.runtime) {
    final library = DynamicLibrary.open(path);
    final capture = library
        .lookupFunction<
          Int32 Function(Pointer<NativeFunction<Uint8 Function()>>),
          int Function(Pointer<NativeFunction<Uint8 Function()>>)
        >('flax_slice_capture');
    _enable = library.lookupFunction<Void Function(Int32), void Function(int)>(
      'flax_slice_enable',
    );
    _paused = library.lookupFunction<Int32 Function(), int Function()>(
      'flax_slice_paused',
    );
    _stats = library
        .lookupFunction<Pointer<Utf8> Function(), Pointer<Utf8> Function()>(
          'flax_slice_stats',
        );
    _free = library
        .lookupFunction<
          Void Function(Pointer<Utf8>),
          void Function(Pointer<Utf8>)
        >('flax_slice_free');
    _close = library.lookupFunction<Void Function(), void Function()>(
      'flax_slice_close',
    );
    _canYield = NativeCallable<Uint8 Function()>.isolateLocal(
      () =>
          SchedulerBinding.instance.schedulerPhase == SchedulerPhase.idle &&
              hostDepth == 0
          ? 1
          : 0,
      exceptionalReturn: 0,
    );
    runtime.registerHostFunction('__captureSliceProbe', (_, _) {
      if (capture(_canYield.nativeFunction) != 1) {
        throw StateError('Expected the maintained runtime V8 isolate');
      }
      return const FlaxJsUndefined();
    });
    runtime.evaluate(
      '__captureSliceProbe(); delete globalThis.__captureSliceProbe;',
    );
  }

  final FlaxJsRuntime runtime;
  int hostDepth = 0, rejectedReentries = 0;
  bool closed = false;
  late final NativeCallable<Uint8 Function()> _canYield;
  late final void Function(int) _enable;
  late final int Function() _paused;
  late final Pointer<Utf8> Function() _stats;
  late final void Function(Pointer<Utf8>) _free;
  late final void Function() _close;

  bool get paused => _paused() != 0;

  FlaxJsValue evaluate(String source, {bool slice = false}) {
    if (closed) throw StateError('Slicing closed');
    if (paused) {
      rejectedReentries++;
      throw StateError('JS is paused in an interrupt; reentry is forbidden');
    }
    _enable(slice ? 1 : 0);
    try {
      return runtime.evaluate(source);
    } finally {
      _enable(0);
    }
  }

  Map<String, dynamic> get stats {
    final text = _stats();
    try {
      return jsonDecode(text.toDartString()) as Map<String, dynamic>;
    } finally {
      _free(text);
    }
  }

  void close() {
    if (closed) return;
    _close();
    _canYield.close();
    closed = true;
  }
}
