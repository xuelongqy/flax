// Built using the existing workspace package configuration.
// ignore_for_file: depend_on_referenced_packages

import 'dart:async';
import 'dart:convert';
import 'dart:ffi';

import 'package:ffi/ffi.dart';

class Job {
  Job(this.id);
  final int id;
  final started = Completer<void>();
  final result = Completer<Object?>();
}

/// Experimental JSON/handle transport, deliberately separate from Flax bindings.
class Worker {
  Worker(String path, this.host) {
    final library = DynamicLibrary.open(path);
    _create = library
        .lookupFunction<Pointer<Void> Function(), Pointer<Void> Function()>(
          'flax_worker_create',
        );
    _submit = library
        .lookupFunction<
          Int32 Function(Pointer<Void>, Int64, Pointer<Utf8>),
          int Function(Pointer<Void>, int, Pointer<Utf8>)
        >('flax_worker_submit');
    _sync = library
        .lookupFunction<
          Pointer<Utf8> Function(Pointer<Void>, Pointer<Utf8>),
          Pointer<Utf8> Function(Pointer<Void>, Pointer<Utf8>)
        >('flax_worker_sync');
    _poll = library
        .lookupFunction<
          Pointer<Utf8> Function(Pointer<Void>),
          Pointer<Utf8> Function(Pointer<Void>)
        >('flax_worker_poll');
    _reply = library
        .lookupFunction<
          Void Function(Pointer<Void>, Int64, Pointer<Utf8>),
          void Function(Pointer<Void>, int, Pointer<Utf8>)
        >('flax_worker_reply');
    _stop = library
        .lookupFunction<
          Void Function(Pointer<Void>),
          void Function(Pointer<Void>)
        >('flax_worker_stop');
    _destroy = library
        .lookupFunction<
          Void Function(Pointer<Void>),
          void Function(Pointer<Void>)
        >('flax_worker_destroy');
    _free = library
        .lookupFunction<
          Void Function(Pointer<Utf8>),
          void Function(Pointer<Utf8>)
        >('flax_worker_free');
    _pointer = _create();
    _timer = Timer.periodic(const Duration(milliseconds: 1), (_) => _drain());
  }
  final Object? Function(Map<String, dynamic>) host;
  final ready = Completer<void>();
  final _closed = Completer<void>();
  final _jobs = <int, Job>{};
  int _nextId = 0;
  int hostCalls = 0;
  bool _closing = false;
  late final Pointer<Void> _pointer;
  late final Timer _timer;
  late final Pointer<Void> Function() _create;
  late final int Function(Pointer<Void>, int, Pointer<Utf8>) _submit;
  late final Pointer<Utf8> Function(Pointer<Void>, Pointer<Utf8>) _sync;
  late final Pointer<Utf8> Function(Pointer<Void>) _poll;
  late final void Function(Pointer<Void>, int, Pointer<Utf8>) _reply;
  late final void Function(Pointer<Void>) _stop, _destroy;
  late final void Function(Pointer<Utf8>) _free;

  Job submit(String source) {
    if (_closing) throw StateError('Worker closed');
    final job = Job(++_nextId);
    final text = source.toNativeUtf8();
    try {
      if (_submit(_pointer, job.id, text) == 0) {
        throw StateError('Worker queue full or closed');
      }
    } finally {
      malloc.free(text);
    }
    _jobs[job.id] = job;
    return job;
  }

  Future<Object?> evaluate(String source) => submit(source).result.future;

  Object? evaluateSync(String source) {
    if (_closing) throw StateError('Worker closed');
    final text = source.toNativeUtf8();
    try {
      return _value(_read(_sync(_pointer, text)) as Map);
    } finally {
      malloc.free(text);
    }
  }

  Object? _read(Pointer<Utf8> text) {
    try {
      return jsonDecode(text.toDartString());
    } finally {
      _free(text);
    }
  }

  Object? _value(Map<dynamic, dynamic> envelope) {
    if (envelope['ok'] != true) throw StateError('${envelope['value']}');
    return envelope['value'];
  }

  void _drain() {
    for (var i = 0; i < 32; i++) {
      final text = _poll(_pointer);
      if (text == nullptr) return;
      final event = _read(text) as List;
      final id = event[1] as int;
      switch (event[0]) {
        case 1:
          Object? value;
          var ok = true;
          try {
            hostCalls++;
            value = host((event[2] as Map).cast<String, dynamic>());
          } catch (error) {
            ok = false;
            value = '$error';
          }
          final reply = jsonEncode({'ok': ok, 'value': value}).toNativeUtf8();
          try {
            _reply(_pointer, id, reply);
          } finally {
            malloc.free(reply);
          }
        case 2:
          final job = _jobs.remove(id);
          if (job == null) continue;
          try {
            job.result.complete(_value(event[2] as Map));
          } catch (error, stack) {
            job.result.completeError(error, stack);
          }
        case 3:
          if (event[2] == 'ready') {
            ready.complete();
          } else {
            _timer.cancel();
            _closed.complete();
            for (final job in _jobs.values) {
              job.result.completeError(StateError('Worker closed'));
            }
            _jobs.clear();
            return;
          }
        case 4:
          _jobs[id]?.started.complete();
      }
    }
  }

  Future<void> close() async {
    if (_closing) return;
    _closing = true;
    _stop(_pointer);
    await _closed.future.timeout(const Duration(seconds: 6));
    _destroy(_pointer);
  }
}
