part of '../../bindings.dart';

/// One typed view over a Dart Stream. Creating the view never listens.
class _StreamReference {
  _StreamReference(
    this.session,
    this.id,
    this.binding,
    this.type,
    this.source,
    this.value,
  );

  final _Session session;
  final int id;
  final FlaxStreamTypeBinding binding;
  final FlaxTypeRef type;
  final Object source;
  Stream<Object?>? value;

  void release() {
    if (value == null) return;
    value = null;
    session._streamReferences.remove(id);
    final views = session._streamViews[source];
    views?.remove(type.stream!.id);
    if (views?.isEmpty ?? false) session._streamViews.remove(source);
  }
}

class _StreamBorrow extends _Resource {
  _StreamBorrow(this.reference, this.wrapper);

  final _StreamReference reference;
  final FlaxJsObject wrapper;

  @override
  void validate() {
    if (reference.value == null) throw StateError('Released Dart Stream');
  }

  @override
  void close() => wrapper.release();
}

class _DartErrorReference {
  _DartErrorReference(this.session, this.id, this.error, this.stack);

  final _Session session;
  final int id;
  final Object error;
  final StackTrace stack;
  bool released = false;

  void release() {
    if (released) return;
    released = true;
    session._dartErrors.remove(id);
    session._dartErrorIds.remove(error);
  }
}

class _DartErrorBorrow extends _Resource {
  _DartErrorBorrow(this.reference, this.wrapper);

  final _DartErrorReference reference;
  final FlaxJsObject wrapper;

  @override
  void validate() {
    if (reference.released) throw StateError('Released Dart error');
  }

  @override
  void close() => wrapper.release();
}

class _TrackedStreamIterator {
  _TrackedStreamIterator(this.session, this.id, this.reference)
    : iterator = StreamIterator<Object?>(reference.value!);

  final _Session session;
  final int id;
  final _StreamReference reference;
  final StreamIterator<Object?> iterator;
  bool moving = false;
  bool retired = false;

  Future<bool> moveNext() {
    if (retired) throw StateError('Released Dart Stream iterator');
    if (moving) throw StateError('Concurrent Stream iterator next');
    moving = true;
    return iterator.moveNext().then(
      (hasValue) {
        moving = false;
        if (!hasValue) retire();
        return hasValue;
      },
      onError: (Object error, StackTrace stack) {
        moving = false;
        retire();
        Error.throwWithStackTrace(error, stack);
      },
    );
  }

  Object? get current {
    if (retired) throw StateError('Released Dart Stream iterator');
    return iterator.current;
  }

  Future<void> cancel() {
    if (retired) return Future<void>.value();
    retire();
    return iterator.cancel();
  }

  void retire() {
    if (retired) return;
    retired = true;
    session._streamIterators.remove(id);
  }
}

/// A lazy Dart Stream over one JavaScript AsyncIterable. The controller only
/// asks for another item while its Dart subscription is not paused.
class _AsyncIterableStreamSource {
  _AsyncIterableStreamSource(this.session, this.id) {
    controller = StreamController<Object?>(
      sync: true,
      onListen: _listen,
      onPause: _pause,
      onResume: _resume,
      onCancel: _cancel,
    );
  }

  final _Session session;
  final int id;
  late final StreamController<Object?> controller;
  bool started = false;
  bool paused = false;
  bool requesting = false;
  bool closed = false;

  Stream<Object?> get stream => controller.stream;

  void _listen() {
    if (started) return;
    started = true;
    _request();
  }

  void _pause() => paused = true;

  void _resume() {
    paused = false;
    _request();
  }

  void _request() {
    if (closed || paused || requesting || !session.active) return;
    requesting = true;
    FlaxJsValue? result;
    try {
      result = session.helper('asyncIterableNext').call([
        FlaxJsNumber(id.toDouble()),
      ]);
      final future = session.promiseResult(
        result,
        const FlaxTypeRef('future', item: _anyList),
      )!;
      future.then(
        (value) {
          requesting = false;
          if (closed) return;
          final entry = value as List<Object?>;
          if (entry.isEmpty || entry.first is! bool) {
            _fail(
              StateError('Invalid AsyncIterator result'),
              StackTrace.current,
            );
            return;
          }
          if (entry.first as bool) {
            closed = true;
            session._asyncIterableSources.remove(id);
            controller.close();
            return;
          }
          if (entry.length != 2) {
            _fail(
              StateError('Invalid AsyncIterator result'),
              StackTrace.current,
            );
            return;
          }
          controller.add(entry[1]);
          _request();
        },
        onError: (Object error, StackTrace stack) {
          requesting = false;
          _fail(error, stack);
        },
      );
      session.checkpoint();
    } catch (error, stack) {
      requesting = false;
      _fail(error, stack);
    } finally {
      if (result != null) _releaseJs(result);
    }
  }

  void _fail(Object error, StackTrace stack) {
    if (closed) return;
    closed = true;
    session._asyncIterableSources.remove(id);
    try {
      final result = session.helper('asyncIterableReturn').call([
        FlaxJsNumber(id.toDouble()),
      ]);
      try {
        session.observeEvent(result);
      } finally {
        _releaseJs(result);
      }
    } catch (releaseError, releaseStack) {
      session.report(releaseError, releaseStack);
    }
    controller
      ..addError(error, stack)
      ..close();
  }

  Future<void> _cancel() => cancel();

  Future<void> cancel() {
    if (closed) return Future<void>.value();
    closed = true;
    session._asyncIterableSources.remove(id);
    FlaxJsValue? result;
    try {
      result = session.helper('asyncIterableReturn').call([
        FlaxJsNumber(id.toDouble()),
      ]);
      if (session.closing) {
        session.observeEvent(result);
        return Future<void>.value();
      }
      return session
          .promiseResult(
            result,
            const FlaxTypeRef('future', item: FlaxTypeRef('void')),
          )!
          .then<void>((_) {});
    } catch (error, stack) {
      if (!session.closing) return Future<void>.error(error, stack);
      session.report(error, stack);
      return Future<void>.value();
    } finally {
      if (result != null) _releaseJs(result);
      session.checkpoint();
    }
  }
}

/// Owns callbacks installed by one generated `listen` call. Dart still owns
/// event timing and cancellation; this wrapper only makes bridge cleanup
/// deterministic when the subscription stops retaining those callbacks.
class _TrackedStreamSubscription<T> implements StreamSubscription<T> {
  _TrackedStreamSubscription(
    this.session,
    this.inner, {
    void Function(T)? onData,
    void Function(Object, StackTrace)? onError,
    void Function()? onDone,
    required this.cancelOnError,
  }) {
    _setData(onData);
    _setError(onError);
    _setDone(onDone);
  }

  final _Session session;
  final StreamSubscription<T> inner;
  final bool cancelOnError;
  final Zone _zone = Zone.current;
  final _callbacks = <_Callback>{};
  bool _retired = false;

  void _replaceCallback(Object? previous, Object? next) {
    final old = previous == null ? null : _callbackSources[previous];
    if (old != null) {
      _callbacks.remove(old);
      old.retire();
    }
    final current = next == null ? null : _callbackSources[next];
    if (current != null) _callbacks.add(current);
  }

  void Function(T)? _data;
  void _setData(void Function(T)? callback) {
    _replaceCallback(_data, callback);
    _data = callback;
    inner.onData(callback);
  }

  void Function(Object, StackTrace)? _error;
  void _setError(void Function(Object, StackTrace)? callback) {
    _replaceCallback(_error, callback);
    _error = callback;
    inner.onError(
      callback == null
          ? cancelOnError
                ? (Object error, StackTrace stack) {
                    try {
                      _zone.handleUncaughtError(error, stack);
                    } finally {
                      retire();
                    }
                  }
                : null
          : (Object error, StackTrace stack) {
              try {
                callback(error, stack);
              } finally {
                if (cancelOnError) retire();
              }
            },
    );
  }

  void Function()? _done;
  void _setDone(void Function()? callback) {
    _replaceCallback(_done, callback);
    _done = callback;
    inner.onDone(() {
      try {
        callback?.call();
      } finally {
        retire();
      }
    });
  }

  void retire() {
    if (_retired) return;
    _retired = true;
    session._streamSubscriptions.remove(this);
    for (final callback in _callbacks) {
      callback.retire();
    }
    _callbacks.clear();
    _data = null;
    _error = null;
    _done = null;
  }

  @override
  Future<void> cancel() {
    retire();
    return inner.cancel();
  }

  @override
  void onData(void Function(T data)? handleData) => _setData(handleData);

  @override
  void onError(Function? handleError) {
    _setError(handleError as void Function(Object, StackTrace)?);
  }

  @override
  void onDone(void Function()? handleDone) => _setDone(handleDone);

  @override
  void pause([Future<void>? resumeSignal]) => inner.pause(resumeSignal);

  @override
  void resume() => inner.resume();

  @override
  bool get isPaused => inner.isPaused;

  @override
  Future<E> asFuture<E>([E? futureValue]) {
    for (final callback in _callbacks) {
      callback.retire();
    }
    _callbacks.clear();
    final future = inner.asFuture<E>(futureValue);
    future.whenComplete(retire).ignore();
    return future;
  }
}

extension _StreamCalls on _Session {
  void _observeStreamCleanup(Future<void> future) {
    unawaited(
      future.then<void>(
        (_) {},
        onError: (Object error, StackTrace stack) => report(error, stack),
      ),
    );
  }

  FlaxJsValue errorResult(Object error, StackTrace stack) {
    try {
      return anyResult(error);
    } on ArgumentError {
      // Any Dart object can be an asynchronous error. Only explicitly marked
      // error positions widen the ordinary Object conversion in this way.
    }
    var reference = _dartErrorIds[error];
    if (reference == null) {
      reference = _DartErrorReference(this, _nextObject++, error, stack);
      _dartErrors[reference.id] = reference;
      _dartErrorIds[error] = reference;
    }
    final message = error is FlaxJsException ? error.message : error.toString();
    final text = error is FlaxJsException && error.jsStack.isNotEmpty
        ? error.jsStack
        : stack.toString();
    return helper('dartError').call([
      FlaxJsNumber(reference.id.toDouble()),
      FlaxJsString(message),
      text.isEmpty ? const FlaxJsNull() : FlaxJsString(text),
    ]);
  }

  FlaxJsValue streamResult(Object source, FlaxTypeRef type) {
    final adapter = type.stream;
    final binding = registry._types[type.id];
    if (adapter == null || binding is! FlaxStreamTypeBinding) {
      throw ArgumentError('Unknown Dart Stream type');
    }
    final views = _streamViews.putIfAbsent(source, () => {});
    final existing = views[adapter.id];
    if (existing != null && existing.value != null) {
      return helper('streamObject').call([
        FlaxJsString(binding.id),
        FlaxJsString(adapter.id),
        FlaxJsNumber(existing.id.toDouble()),
      ]);
    }
    late final Stream<Object?> adapted;
    try {
      adapted = adapter.adapt(source);
    } on TypeError {
      throw ArgumentError('Incompatible Dart Stream result');
    }
    final reference = _StreamReference(
      this,
      _nextObject++,
      binding,
      type,
      source,
      adapted,
    );
    views[adapter.id] = reference;
    _streamReferences[reference.id] = reference;
    return helper('streamObject').call([
      FlaxJsString(binding.id),
      FlaxJsString(adapter.id),
      FlaxJsNumber(reference.id.toDouble()),
    ]);
  }

  _Value decodeStream(FlaxJsObject input, FlaxTypeRef type) {
    final adapter = type.stream;
    if (adapter == null) throw ArgumentError('Missing Dart Stream adapter');
    final handle = helper('tryObjectHandle').call([input]);
    if (handle is! FlaxJsNumber) {
      throw ArgumentError('Expected a Dart Stream reference');
    }
    final reference = _streamReferences[handle.value.toInt()];
    final source = reference?.source;
    if (reference == null || source == null || reference.value == null) {
      throw ArgumentError('Foreign or released Dart Stream');
    }
    late final Stream<Object?> adapted;
    try {
      adapted = adapter.adapt(source);
    } on TypeError {
      throw ArgumentError('Incompatible Dart Stream view');
    }
    return _Value(adapted, [_StreamBorrow(reference, input.retain())]);
  }

  void registerStreams() {
    runtime.registerHostFunction('__flaxCreateStream', (_, args) {
      _checkCall(args, 3);
      if (args.length != 3 || args[2] is! FlaxJsObject) {
        throw ArgumentError('Invalid Stream constructor');
      }
      final binding = registry._types[(args[1] as FlaxJsString).value];
      if (binding is! FlaxStreamTypeBinding) {
        throw ArgumentError('Unknown Stream type');
      }
      final descriptor = args[2] as FlaxJsObject;
      final ctor = _textProperty(descriptor, 'ctor');
      final parameters = binding.constructors[ctor];
      if (parameters == null) throw ArgumentError('Unknown Stream constructor');
      final sources = _arguments(descriptor, parameters, allowBindings: false);
      try {
        for (final source in sources.values) {
          source.initial.escapeCallbacks();
          escapeWidget(source.initial.data);
        }
        final value = binding.create(
          ctor,
          sources.map((name, source) => MapEntry(name, source.initial.data)),
        );
        return holdHostResult(streamResult(value, binding.view));
      } finally {
        for (final source in sources.values.toList().reversed) {
          source.release();
        }
      }
    });

    runtime.registerHostFunction('__flaxCreateAsyncIterableStream', (_, args) {
      _checkCall(args, 3);
      if (args[1] is! FlaxJsString || args[2] is! FlaxJsNumber) {
        throw ArgumentError('Invalid AsyncIterable Stream');
      }
      final binding = registry._types[(args[1] as FlaxJsString).value];
      if (binding is! FlaxStreamTypeBinding) {
        throw ArgumentError('Unknown Stream type');
      }
      final id = (args[2] as FlaxJsNumber).value.toInt();
      if (id <= 0 || _asyncIterableSources.containsKey(id)) {
        throw ArgumentError('Invalid AsyncIterable source');
      }
      final source = _AsyncIterableStreamSource(this, id);
      _asyncIterableSources[id] = source;
      try {
        return holdHostResult(streamResult(source.stream, binding.view));
      } catch (_) {
        _asyncIterableSources.remove(id);
        rethrow;
      }
    });

    runtime.registerHostFunction('__flaxStream', (_, args) {
      _checkCall(args, 5);
      if (args[2] is! FlaxJsNumber ||
          args[3] is! FlaxJsString ||
          args[4] is! FlaxJsString) {
        throw ArgumentError('Invalid Stream member call');
      }
      final type = (args[1] as FlaxJsString).value;
      final binding = registry._types[type];
      final reference =
          _streamReferences[(args[2] as FlaxJsNumber).value.toInt()];
      if (binding is! FlaxStreamTypeBinding ||
          reference == null ||
          reference.binding.id != type ||
          reference.value == null) {
        throw ArgumentError('Foreign or released Dart Stream');
      }
      final operation = (args[3] as FlaxJsString).value;
      final name = (args[4] as FlaxJsString).value;
      if (operation == 'get') {
        final getter = binding.getters
            .where((value) => value.name == name)
            .firstOrNull;
        if (getter == null || args.length != 5) {
          throw ArgumentError('Unknown Stream getter');
        }
        return holdHostResult(
          memberResult(getter.read(reference.value!), getter.type),
        );
      }
      final method = binding.instanceMethods[name];
      if (operation != 'call' || method == null) {
        throw ArgumentError('Unknown Stream method');
      }
      final values = objectArguments(args.sublist(5), method.parameters);
      try {
        for (final value in values.values) {
          value.escapeCallbacks();
          escapeWidget(value.data);
        }
        var result = method.invoke(
          reference.value!,
          values.map((name, value) => MapEntry(name, value.data)),
        );
        if (result is StreamSubscription<Object?>) {
          final tracked = _TrackedStreamSubscription<Object?>(
            this,
            result,
            onData: values['onData']?.data as void Function(Object?)?,
            onError:
                values['onError']?.data as void Function(Object, StackTrace)?,
            onDone: values['onDone']?.data as void Function()?,
            cancelOnError: values['cancelOnError']?.data == true,
          );
          _streamSubscriptions.add(tracked);
          result = tracked;
        }
        return holdHostResult(memberResult(result, method.result));
      } finally {
        for (final value in values.values.toList().reversed) {
          value.release();
        }
        checkpoint();
      }
    });

    runtime.registerHostFunction('__flaxCreateStreamIterator', (_, args) {
      _checkCall(args, 2);
      if (args[1] is! FlaxJsNumber) {
        throw ArgumentError('Invalid Stream iterator');
      }
      final reference =
          _streamReferences[(args[1] as FlaxJsNumber).value.toInt()];
      if (reference == null || reference.value == null) {
        throw ArgumentError('Foreign or released Dart Stream');
      }
      final id = _nextStreamIterator++;
      _streamIterators[id] = _TrackedStreamIterator(this, id, reference);
      return FlaxJsNumber(id.toDouble());
    });

    runtime.registerHostFunction('__flaxStreamIterator', (_, args) {
      _checkCall(args, 3);
      if (args[1] is! FlaxJsNumber || args[2] is! FlaxJsString) {
        throw ArgumentError('Invalid Stream iterator call');
      }
      final iterator =
          _streamIterators[(args[1] as FlaxJsNumber).value.toInt()];
      if (iterator == null) throw StateError('Released Dart Stream iterator');
      return switch ((args[2] as FlaxJsString).value) {
        'next' => holdHostResult(
          futureResult(
            iterator.moveNext().then<Object?>((value) => value),
            const FlaxTypeRef('bool'),
          ),
        ),
        'current' => holdHostResult(
          memberResult(iterator.current, iterator.reference.type.item!),
        ),
        'cancel' => holdHostResult(
          futureResult(
            iterator.cancel().then<Object?>((_) => null),
            const FlaxTypeRef('void'),
          ),
        ),
        _ => throw ArgumentError('Unknown Stream iterator operation'),
      };
    });
  }

  void cancelStreamSubscriptions() {
    for (final subscription in _streamSubscriptions.toList()) {
      try {
        subscription.retire();
        _observeStreamCleanup(subscription.cancel());
      } catch (error, stack) {
        report(error, stack);
      }
    }
    _streamSubscriptions.clear();
  }

  void cancelStreamIterators() {
    for (final iterator in _streamIterators.values.toList()) {
      try {
        _observeStreamCleanup(iterator.cancel());
      } catch (error, stack) {
        report(error, stack);
      }
    }
    _streamIterators.clear();
  }

  void cancelAsyncIterableSources() {
    if (_asyncIterableSources.isEmpty) return;
    for (final source in _asyncIterableSources.values.toList()) {
      unawaited(source.cancel());
    }
    _asyncIterableSources.clear();
    if (active) {
      try {
        _releaseJs(helper('cancelAsyncIterables').call(const []));
      } catch (error, stack) {
        report(error, stack);
      }
    }
  }
}
