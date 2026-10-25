// Experiment-only async boundary. Existing binding calls remain synchronous.
// ignore_for_file: depend_on_referenced_packages
import 'dart:async';
import 'dart:collection';
import 'dart:ffi';

import 'package:flax/runtime.dart';

import '../js_slicing/scheduling.dart';

class AsyncJobs extends Slicing {
  AsyncJobs(String path, FlaxJsRuntime runtime) : super(path, runtime) {
    final library = DynamicLibrary.open(path);
    _schedule = library.lookupFunction<Void Function(), void Function()>(
      'flax_jobs_schedule',
    );
    _running = library.lookupFunction<Int32 Function(), int Function()>(
      'flax_jobs_running',
    );
    _count = library.lookupFunction<Int64 Function(), int Function()>(
      'flax_jobs_count',
    );
    _rearmed = library.lookupFunction<Int64 Function(), int Function()>(
      'flax_jobs_rearmed',
    );
    _closeJobs = library.lookupFunction<Void Function(), void Function()>(
      'flax_jobs_close',
    );
    _run = NativeCallable<Void Function()>.isolateLocal(() {
      _queue.removeFirst()();
      if (_queue.isNotEmpty) _schedule();
      // CFRunLoop blocks do not flush Flutter's Dart microtask queue themselves.
      Timer.run(() {});
    });
    final initialize = library
        .lookupFunction<
          Int32 Function(
            Pointer<Void>,
            Pointer<NativeFunction<Void Function()>>,
          ),
          int Function(Pointer<Void>, Pointer<NativeFunction<Void Function()>>)
        >('flax_jobs_init');
    if (initialize(NativeApi.initializeApiDLData, _run.nativeFunction) != 1) {
      _run.close();
      super.close();
      throw StateError('Cannot initialize native async job entry');
    }
  }

  final _queue = Queue<void Function()>();
  late final NativeCallable<Void Function()> _run;
  late final void Function() _schedule, _closeJobs;
  late final int Function() _running, _count, _rearmed;

  bool get running => _running() != 0;
  bool get idle => !running && _queue.isEmpty;
  int get completedJobs => _count();
  int get rearmed => _rearmed();

  Future<T> submit<T>(T Function() action) {
    if (closed) return Future.error(StateError('Async jobs closed'));
    final result = Completer<T>();
    _queue.add(() {
      try {
        result.complete(action());
      } catch (error, stack) {
        result.completeError(error, stack);
      }
    });
    _schedule();
    return result.future;
  }

  @override
  void close() {
    if (closed) return;
    if (running || _queue.isNotEmpty) {
      throw StateError('Cannot close an active async job queue');
    }
    _closeJobs();
    _run.close();
    super.close();
  }
}
