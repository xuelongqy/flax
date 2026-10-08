part of '../../bindings.dart';

final _futureOwners = Expando<Object>();

// Native Dart Future children do not retain their producer. Promise-derived
// casts and continuations must keep that bridge origin while they remain live.
class _PromiseFuture<T> implements Future<T> {
  _PromiseFuture(this._inner, [this._owner]);

  final Future<T> _inner;
  // Flatten ownership to the original adapter. A cleanup listener would consume
  // uncaught Dart errors; the owner instead follows this Future's actual lifetime.
  final Object? _owner;

  @override
  Future<R> then<R>(FutureOr<R> Function(T) onValue, {Function? onError}) =>
      _PromiseFuture(_inner.then<R>(onValue, onError: onError), _owner ?? this);

  @override
  Future<T> catchError(Function onError, {bool Function(Object)? test}) =>
      _PromiseFuture(_inner.catchError(onError, test: test), _owner ?? this);

  @override
  Future<T> whenComplete(FutureOr<void> Function() action) =>
      _PromiseFuture(_inner.whenComplete(action), _owner ?? this);

  @override
  Future<T> timeout(Duration timeLimit, {FutureOr<T> Function()? onTimeout}) =>
      _PromiseFuture(
        _inner.timeout(timeLimit, onTimeout: onTimeout),
        _owner ?? this,
      );

  @override
  Stream<T> asStream() {
    // A subscription owns the controller, but not its Stream facade. Keep the
    // Promise origin in onListen so both an unused Stream and a listener retain
    // it; completion or cancellation removes that conditional ownership.
    late final StreamController<T> controller;
    controller = StreamController<T>(
      sync: true,
      onListen: () {
        _inner
            .then<void>(controller.add, onError: controller.addError)
            .whenComplete(() {
              controller.onListen = null;
              unawaited(controller.close());
            });
      },
      onCancel: () => controller.onListen = null,
    );
    return controller.stream;
  }
}

class _PendingFuture {
  _PendingFuture(this.result, this.future);
  final FlaxTypeRef result;
  // A ready delivery retains its source until JS receives the resolution.
  final Future<Object?> future;
  final _BindingContext? context = _bindingContext;
  bool ready = false;
  Object? value;
  Object? error;
}

class _PendingPromise {
  _PendingPromise(this.result);
  final FlaxTypeRef result;
  final completer = Completer<Object?>();
}

void _observeFuture(
  Future<Object?> future,
  _Session session,
  int id,
  _PendingFuture pending,
) {
  // The source owns its completion listener until it settles, including when
  // JS only attaches .then() and keeps no Promise alias. A closed session must
  // not be retained by that listener; completed Futures retain no view metadata.
  final owner = WeakReference(session);
  void complete(Object? value, Object? error) {
    final session = owner.target;
    if (session == null ||
        !session.active ||
        session._pending[id] != pending ||
        pending.ready) {
      return;
    }
    pending.value = value;
    pending.error = error;
    pending.ready = true;
    session._readyFutures[id] = pending;
    session.checkpoint();
  }

  future.then<void>(
    (value) => complete(value, null),
    onError: (Object error, StackTrace _) => complete(null, error),
  );
}

FlaxTypeRef _promiseSettlementLeaf(FlaxTypeRef type) {
  var current = type;
  while (current.kind == 'future' || current.kind == 'futureOr') {
    current = current.item!;
  }
  return current;
}

bool _promiseSettlementAllowsNull(FlaxTypeRef type) {
  var current = type;
  while (true) {
    if (current.nullable) return true;
    if (current.kind != 'future' && current.kind != 'futureOr') return false;
    current = current.item!;
  }
}

extension _AsyncCalls on _Session {
  void registerAsync() {
    runtime.registerHostFunction('__flaxAsyncError', (_, args) {
      if (active && args.length == 1 && args.single is FlaxJsString) {
        report(
          FlaxJsException((args.single as FlaxJsString).value),
          StackTrace.current,
        );
      }
      return const FlaxJsUndefined();
    });
    runtime.registerHostFunction('__flaxPromiseSettlement', (_, args) {
      if (!active ||
          args.length != 5 ||
          args[0] is! FlaxJsNumber ||
          (args[0] as FlaxJsNumber).value != flaxBindingVersion ||
          args[1] is! FlaxJsNumber ||
          args[2] is! FlaxJsBoolean) {
        throw ArgumentError('Invalid Promise settlement');
      }
      final rawId = (args[1] as FlaxJsNumber).value;
      if (!rawId.isFinite || rawId != rawId.truncateToDouble() || rawId <= 0) {
        throw ArgumentError('Invalid Promise settlement');
      }
      final id = rawId.toInt();
      final pending = _promises.remove(id);
      if (pending == null) return const FlaxJsUndefined();
      if (!(args[2] as FlaxJsBoolean).value) {
        if (args[3] is! FlaxJsString ||
            (args[4] is! FlaxJsString && args[4] is! FlaxJsNull)) {
          pending.completer.completeError(
            ArgumentError('Invalid Promise rejection'),
          );
          return const FlaxJsUndefined();
        }
        final stack = args[4] is FlaxJsString
            ? (args[4] as FlaxJsString).value
            : '';
        pending.completer.completeError(
          FlaxJsException((args[3] as FlaxJsString).value, jsStack: stack),
          stack.isEmpty ? StackTrace.current : StackTrace.fromString(stack),
        );
        return const FlaxJsUndefined();
      }
      _completePromise(pending, args[3]);
      return const FlaxJsUndefined();
    });
  }

  Future<Object?>? promiseResult(FlaxJsValue value, FlaxTypeRef type) {
    if (value is FlaxJsNull) {
      if (type.nullable) return null;
      throw ArgumentError('Unexpected null for Future');
    }
    if (closing) throw StateError('FlaxSessionClosed');
    final id = _nextPromise++;
    final pending = _PendingPromise(type.item!);
    // JS may consume a Promise-valued Stream event after it has settled. Keep
    // this bridge-owned Future observed without changing its rejection result.
    pending.completer.future.ignore();
    _promises[id] = pending;
    final future = _PromiseFuture(pending.completer.future);
    _futureOwners[future] = pending;
    try {
      if (value is FlaxJsObject) {
        runtime.bindDartPeer(value, future, origin: future);
      }
      _releaseJs(
        helper('observePromise').call([FlaxJsNumber(id.toDouble()), value]),
      );
    } catch (_) {
      _promises.remove(id);
      rethrow;
    }
    return future;
  }

  void _completePromise(_PendingPromise pending, FlaxJsValue value) {
    final settlement = _promiseSettlementLeaf(pending.result);
    if (settlement.kind == 'void') {
      pending.completer.complete();
      return;
    }
    // Erased Promise-valued Stream events may represent Future<void>. Their
    // undefined completion becomes null until the concrete adapter selects void.
    if (settlement.kind == 'any' &&
        settlement.nullable &&
        value is FlaxJsUndefined) {
      pending.completer.complete(null);
      return;
    }
    if (value is FlaxJsNull && _promiseSettlementAllowsNull(pending.result)) {
      pending.completer.complete(null);
      return;
    }
    _Value? decoded;
    try {
      decoded = decode(value, settlement);
      decoded.escapeCallbacks();
      escapeWidget(decoded.data);
      pending.completer.complete(decoded.data);
    } catch (error, stack) {
      pending.completer.completeError(error, stack);
    } finally {
      decoded?.release();
    }
  }

  void cancelPromises() {
    if (_promises.isEmpty) return;
    try {
      if (active) _releaseJs(helper('cancelPromises').call(const []));
    } catch (_) {
      // Runtime teardown below remains authoritative.
    }
    final error = StateError('FlaxSessionClosed');
    for (final pending in _promises.values) {
      if (!pending.completer.isCompleted) {
        pending.completer.completeError(error, StackTrace.current);
      }
    }
    _promises.clear();
  }

  FlaxJsValue futureResult(Future<Object?> future, FlaxTypeRef result) {
    final id = _nextFuture++;
    final pending = _PendingFuture(result, future);
    _pending[id] = pending;
    if (closing) {
      pending.error = StateError('FlaxSessionClosed');
      pending.ready = true;
      _readyFutures[id] = pending;
      checkpoint();
    }
    // Closing marks pending results ready with a cancellation error. A later
    // Future completion must not overwrite that result before JS receives it.
    _observeFuture(future, this, id, pending);
    return _peerResult(
      helper('future').call([FlaxJsNumber(id.toDouble())]),
      pending,
      origin: pending,
    );
  }

  void cancelFutures() {
    for (final entry in _pending.entries) {
      final pending = entry.value;
      pending.error = StateError('FlaxSessionClosed');
      pending.ready = true;
      _readyFutures[entry.key] = pending;
    }
    if (_pending.isNotEmpty) checkpoint();
  }

  /// Leave both the native entry stack and Flutter's frame before running JS jobs.
  void checkpoint() {
    if (!active || _checkpointScheduled || _checkpointRunning) return;
    _checkpointScheduled = true;
    void enqueue() => scheduleMicrotask(_runCheckpoint);
    if (SchedulerBinding.instance.schedulerPhase == SchedulerPhase.idle) {
      enqueue();
    } else {
      SchedulerBinding.instance.addPostFrameCallback((_) => enqueue());
      SchedulerBinding.instance.ensureVisualUpdate();
    }
  }

  void _runCheckpoint() {
    _checkpointScheduled = false;
    if (!active) return;
    if (SchedulerBinding.instance.schedulerPhase != SchedulerPhase.idle) {
      checkpoint();
      return;
    }
    _checkpointRunning = true;
    bool complete = true;
    try {
      // One host task per checkpoint preserves task -> microtasks -> next task.
      if (_hostTasks.isNotEmpty) {
        final (context, action) = _hostTasks.removeFirst();
        if (context.isActive) {
          try {
            action();
          } catch (error, stack) {
            report(error, stack);
          }
        }
      }
      for (final result in _hostResults) {
        result.release();
      }
      _hostResults.clear();
      final ready = _readyFutures.entries.toList();
      for (final entry in ready) {
        _readyFutures.remove(entry.key);
        _pending.remove(entry.key);
        final pending = entry.value;
        FlaxJsValue? result;
        try {
          if (pending.error == null) {
            result = pending.context == null
                ? memberResult(pending.value, pending.result)
                : pending.context!.run(
                    () => memberResult(pending.value, pending.result),
                  );
          }
        } catch (error) {
          pending.error = error;
        }
        try {
          _releaseJs(
            helper('settleFuture').call([
              FlaxJsNumber(entry.key.toDouble()),
              FlaxJsBoolean(pending.error == null),
              pending.error == null
                  ? result!
                  : FlaxJsString(pending.error.toString()),
            ]),
          );
        } finally {
          if (result != null) _releaseJs(result);
        }
      }
      sweepContexts();
      sweepObjects();
      // End the JS job after weak reads so deref does not keep wrappers alive.
      complete = runtime.drainMicrotasks(maxJobsHint: 1024);
    } catch (error, stack) {
      report(error, stack);
    } finally {
      _checkpointRunning = false;
    }
    if (!complete || _hostTasks.isNotEmpty || _readyFutures.isNotEmpty) {
      // Yield to Dart events when an engine honors the best-effort job limit.
      _checkpointScheduled = true;
      unawaited(Future<void>(() => _runCheckpoint()));
    } else if (_hostResults.isNotEmpty) {
      checkpoint();
    } else {
      _tryClose();
    }
  }

  void observeEvent(FlaxJsValue result) {
    if (result is FlaxJsObject) {
      _releaseJs(helper('observeEvent').call([result]));
    }
  }
}
