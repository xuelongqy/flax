part of '../../bindings.dart';

class _PendingFuture {
  _PendingFuture(this.result);
  final FlaxTypeRef result;
  bool ready = false;
  Object? value;
  Object? error;
}

class _PendingPromise {
  _PendingPromise(this.result);
  final FlaxTypeRef result;
  final completer = Completer<Object?>();
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
    _promises[id] = pending;
    try {
      _releaseJs(
        helper('observePromise').call([FlaxJsNumber(id.toDouble()), value]),
      );
    } catch (_) {
      _promises.remove(id);
      rethrow;
    }
    return pending.completer.future;
  }

  void _completePromise(_PendingPromise pending, FlaxJsValue value) {
    final settlement = _promiseSettlementLeaf(pending.result);
    if (settlement.kind == 'void') {
      pending.completer.complete();
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
    final pending = _PendingFuture(result);
    _pending[id] = pending;
    if (closing) {
      pending.error = StateError('FlaxSessionClosed');
      pending.ready = true;
      checkpoint();
    }
    // Closing marks pending results ready with a cancellation error. A later
    // Future completion must not overwrite that result before JS receives it.
    future.then(
      (value) {
        if (!active || _pending[id] != pending || pending.ready) return;
        pending.value = value;
        pending.ready = true;
        checkpoint();
      },
      onError: (Object error, StackTrace stack) {
        if (!active || _pending[id] != pending || pending.ready) return;
        pending.error = error;
        pending.ready = true;
        checkpoint();
      },
    );
    return helper('future').call([FlaxJsNumber(id.toDouble())]);
  }

  void cancelFutures() {
    for (final pending in _pending.values) {
      pending.error = StateError('FlaxSessionClosed');
      pending.ready = true;
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
      // Flutter has finished adopting this frame's callback results. Discarded
      // children must not stay alive until the next builder call or a GC cycle.
      if (_unmountedResults.isNotEmpty) {
        final unmounted = _unmountedResults.toList();
        _unmountedResults.clear();
        for (final result in unmounted) {
          result.release();
        }
      }
      for (final result in _hostResults) {
        result.release();
      }
      _hostResults.clear();
      final ready = _pending.entries
          .where((entry) => entry.value.ready)
          .toList();
      for (final entry in ready) {
        _pending.remove(entry.key);
        final pending = entry.value;
        FlaxJsValue? result;
        try {
          if (pending.error == null) {
            result = memberResult(pending.value, pending.result);
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
    if (!complete ||
        _hostTasks.isNotEmpty ||
        _pending.values.any((p) => p.ready)) {
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
