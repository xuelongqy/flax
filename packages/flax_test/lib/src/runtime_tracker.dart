import 'dart:typed_data';

import 'package:flax/runtime.dart';
import 'package:flutter/scheduler.dart';

/// Counts owned handles around the real engine, without changing runtime behavior.
class FlaxTestRuntimeTracker implements FlaxJsRuntime {
  FlaxTestRuntimeTracker(this.inner);

  final FlaxJsRuntime inner;
  // Diagnostics must not turn every facade into a business GC root.
  final _owned = <WeakReference<_TrackedObject>>[];
  final hostCalls = <String, int>{};
  final evaluationMicroseconds = <String, int>{};
  final jsCalls = <String, int>{};
  final checkpointPhases = <SchedulerPhase>[];
  int? handlesAtDispose;
  int copiedToJs = 0;
  int copiedFromJs = 0;
  int byteWrites = 0;
  int byteReads = 0;
  final hostOperations = <String, int>{};
  final _operationCategories = <int, String>{};
  Iterable<_TrackedObject> get _live =>
      _owned.map((entry) => entry.target).whereType<_TrackedObject>();
  int get handles => _live.length;
  List<String> get handleLabels => _live.map((value) => value.label).toList();
  int get pendingFutures =>
      (jsCalls['__flaxBindings.future'] ?? 0) -
      (jsCalls['__flaxBindings.settleFuture'] ?? 0);
  int get pendingPromises =>
      (jsCalls['__flaxBindings.observePromise'] ?? 0) -
      (hostCalls['__flaxPromiseSettlement'] ?? 0);
  int get activeSubscriptions => jsCalls.entries.fold(
    0,
    (count, entry) =>
        count +
        (entry.key.endsWith('.observe')
            ? entry.value
            : entry.key.endsWith('.observe.result')
            ? -entry.value
            : 0),
  );

  FlaxJsValue wrap(FlaxJsValue value, String label, {bool owned = true}) {
    if (value is! FlaxJsObject) return value;
    final result = value is FlaxJsFunction
        ? _TrackedFunction(this, value, label)
        : _TrackedObject(this, value, label);
    if (owned) {
      _owned.removeWhere((entry) => entry.target == null);
      _owned.add(WeakReference(result));
    }
    return result;
  }

  FlaxJsValue unwrap(FlaxJsValue value) =>
      value is _TrackedObject ? value.inner : value;
  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:eval'}) {
    final watch = Stopwatch()..start();
    try {
      return wrap(inner.evaluate(source, sourceUrl: sourceUrl), sourceUrl);
    } finally {
      evaluationMicroseconds.update(
        sourceUrl,
        (elapsed) => elapsed + watch.elapsedMicroseconds,
        ifAbsent: () => watch.elapsedMicroseconds,
      );
    }
  }

  @override
  FlaxJsValue getGlobal(String name) => wrap(inner.getGlobal(name), name);
  @override
  FlaxJsObject createArrayBuffer(Uint8List bytes) {
    copiedToJs += bytes.length;
    byteWrites++;
    return wrap(inner.createArrayBuffer(bytes), 'bytes') as FlaxJsObject;
  }

  @override
  Uint8List readBytes(FlaxJsObject value) {
    final bytes = inner.readBytes(unwrap(value) as FlaxJsObject);
    copiedFromJs += bytes.length;
    byteReads++;
    return bytes;
  }

  @override
  void registerHostFunction(String name, FlaxJsHostFunction callback) {
    inner.registerHostFunction(name, (receiver, args) {
      if (args.isNotEmpty && args.first is FlaxJsString) {
        hostOperations.update(
          '$name:${(args.first as FlaxJsString).value}',
          (v) => v + 1,
          ifAbsent: () => 1,
        );
      }
      if (name == '__flaxInvokeOperation' &&
          args.isNotEmpty &&
          args.first is FlaxJsNumber) {
        final category =
            _operationCategories[(args.first as FlaxJsNumber).value.toInt()];
        if (category != null) {
          hostOperations.update(
            '$name:$category',
            (v) => v + 1,
            ifAbsent: () => 1,
          );
        }
      }
      hostCalls.update(name, (n) => n + 1, ifAbsent: () => 1);
      final result = unwrap(
        callback(wrap(receiver, '$name.this', owned: false), [
          for (final value in args) wrap(value, '$name.arg', owned: false),
        ]),
      );
      if (name == '__flaxResolveOperation' &&
          result is FlaxJsNumber &&
          args.length == 5 &&
          args[2] is FlaxJsString) {
        _operationCategories[result.value.toInt()] =
            (args[2] as FlaxJsString).value;
      }
      return result;
    });
  }

  @override
  void bindDartPeer(FlaxJsObject object, Object target, {Object? origin}) =>
      inner.bindDartPeer(
        unwrap(object) as FlaxJsObject,
        target,
        origin: origin,
      );

  @override
  int registerProxyMembers(FlaxJsObject layout) =>
      inner.registerProxyMembers(unwrap(layout) as FlaxJsObject);

  @override
  FlaxJsValue? invokeProxyMember(
    FlaxJsObject receiver,
    int member,
    List<FlaxJsValue> arguments,
  ) {
    final result = inner.invokeProxyMember(
      unwrap(receiver) as FlaxJsObject,
      member,
      arguments.map(unwrap).toList(),
    );
    return result == null ? null : wrap(result, 'proxy.member:$member');
  }

  @override
  bool drainMicrotasks({int maxJobsHint = -1}) {
    checkpointPhases.add(SchedulerBinding.instance.schedulerPhase);
    return inner.drainMicrotasks(maxJobsHint: maxJobsHint);
  }

  @override
  bool get isDisposed => inner.isDisposed;
  @override
  void dispose() {
    handlesAtDispose = handles;
    inner.dispose();
    _operationCategories.clear();
  }
}

class _TrackedObject implements FlaxJsObject {
  _TrackedObject(this.runtime, this.inner, this.label);
  final FlaxTestRuntimeTracker runtime;
  final FlaxJsObject inner;
  final String label;
  @override
  FlaxJsValue getProperty(String name) =>
      runtime.wrap(inner.getProperty(name), '$label.$name');
  @override
  void setProperty(String name, FlaxJsValue value) =>
      inner.setProperty(name, runtime.unwrap(value));
  @override
  bool strictEquals(FlaxJsObject other) =>
      inner.strictEquals(runtime.unwrap(other) as FlaxJsObject);
  @override
  FlaxJsObject retain() => runtime.wrap(inner.retain(), label) as FlaxJsObject;
  @override
  void release() {
    inner.release();
    runtime._owned.removeWhere(
      (entry) => entry.target == null || identical(entry.target, this),
    );
  }

  @override
  bool get isReleased => inner.isReleased;
}

class _TrackedFunction extends _TrackedObject implements FlaxJsFunction {
  _TrackedFunction(super.runtime, FlaxJsFunction super.inner, super.label);
  @override
  FlaxJsValue call(
    List<FlaxJsValue> arguments, {
    FlaxJsValue thisValue = const FlaxJsUndefined(),
  }) {
    runtime.jsCalls.update(label, (n) => n + 1, ifAbsent: () => 1);
    return runtime.wrap(
      (inner as FlaxJsFunction).call(
        arguments.map(runtime.unwrap).toList(),
        thisValue: runtime.unwrap(thisValue),
      ),
      '$label.result',
    );
  }
}
