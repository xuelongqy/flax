import 'dart:typed_data';

import 'package:flax/runtime.dart';
import 'package:flax/bindings.dart';
import 'package:flutter/scheduler.dart';

/// Counts owned handles around the real engine, without changing runtime behavior.
class FlaxTestRuntimeTracker
    implements FlaxJsRuntime, FlaxJsSourcePreparer, FlaxJsModuleRuntime {
  FlaxTestRuntimeTracker(this.inner);

  final FlaxJsRuntime inner;

  @override
  Future<bool> prepareSources(
    List<FlaxJsSource> sources, {
    required FlaxJsSource entry,
    Future<void>? cancelled,
  }) => inner is FlaxJsSourcePreparer
      ? (inner as FlaxJsSourcePreparer).prepareSources(
          sources,
          entry: entry,
          cancelled: cancelled,
        )
      : Future.value(false);

  /// Optional scalar-only experiment spans, balanced even when calls throw.
  void Function(String, bool)? trace;
  @override
  int get moduleCapabilities => inner is FlaxJsModuleRuntime
      ? (inner as FlaxJsModuleRuntime).moduleCapabilities
      : 0;
  @override
  void setHostJobHandler(void Function()? handler) {
    if (inner is FlaxJsModuleRuntime) {
      (inner as FlaxJsModuleRuntime).setHostJobHandler(handler);
    }
  }

  @override
  FlaxJsObject installModuleLoader(
    FlaxJsFunction importer, {
    void Function()? onWakeup,
  }) {
    if (inner is! FlaxJsModuleRuntime) {
      throw UnsupportedError('Native modules are unavailable');
    }
    return wrap(
      (inner as FlaxJsModuleRuntime).installModuleLoader(
        unwrap(importer) as FlaxJsFunction,
        onWakeup: onWakeup,
      ),
      'module-loader',
    ) as FlaxJsObject;
  }

  @override
  Type dartInstanceType(Object value) => inner.dartInstanceType(value);
  @override
  List<Object?> dartTypeParts(Type type) => inner.dartTypeParts(type);

  @override
  List<Object?> dartRecordFields(Record value) => inner.dartRecordFields(value);

  @override
  Record newDartRecord(Type? type, List<String> names, List<Object?> fields) =>
      inner.newDartRecord(type, names, fields);
  @override
  Type nullableDartType(Type type) => inner.nullableDartType(type);
  @override
  Function instantiateDartClosure(Function factory, List<Type> types) {
    final bound = inner.instantiateDartClosure(factory, types);
    if (mapDartBinding == null || bound is! Function Function()) return bound;
    return () {
      final adapter = bound();
      if (adapter is! FlaxDartClass Function(FlaxDartTypes, String)) {
        return adapter;
      }
      return (FlaxDartTypes types, String id) {
        final value = adapter(types, id);
        return FlaxDartClass(
          value.type,
          mapDartBinding!(value.binding),
          deferredFactories: value.deferredFactories,
        );
      };
    };
  }

  FlaxTypeBinding Function(FlaxTypeBinding)? mapDartBinding;
  // Diagnostics must not turn every facade into a business GC root.
  final _owned = <WeakReference<_TrackedObject>>{};
  int _pruneAt = 256;
  final hostCalls = <String, int>{};
  final evaluationMicroseconds = <String, int>{};
  final jsCalls = <String, int>{};
  int _observedSubscriptions = 0;
  final checkpointPhases = <SchedulerPhase>[];
  int? handlesAtDispose;
  int copiedToJs = 0;
  int copiedFromJs = 0;
  int byteWrites = 0;
  int byteReads = 0;
  final hostOperations = <String, int>{};
  final _operationCategories = <int, String>{};
  Iterable<_TrackedObject> get _live {
    _owned.removeWhere((entry) => entry.target == null);
    return _owned.map((entry) => entry.target).whereType<_TrackedObject>();
  }

  int get handles => _live.length;
  List<String> get handleLabels => _live.map((value) => value.label).toList();
  final _futureIds = Expando<int>();
  final _pendingFutureOwners = <int, WeakReference<Object>>{};
  int get pendingFutures {
    // A rootless Future may be collected without ever receiving a settlement.
    _pendingFutureOwners.removeWhere((_, owner) => owner.target == null);
    return _pendingFutureOwners.length;
  }

  int get pendingPromises =>
      (jsCalls['__flaxBindings.observePromise'] ?? 0) -
      (hostCalls['__flaxPromiseSettlement'] ?? 0);
  int get activeSubscriptions => jsCalls.entries.fold(
    _observedSubscriptions,
    (count, entry) =>
        count + (entry.key.endsWith('.observe.result') ? -entry.value : 0),
  );

  FlaxJsValue wrap(FlaxJsValue value, String label, {bool owned = true}) {
    if (value is! FlaxJsObject) return value;
    trace?.call('tracker:wrap', true);
    try {
      final result = value is FlaxJsFunction
          ? _TrackedFunction(this, value, label)
          : _TrackedObject(this, value, label);
      if (owned) {
        if (_owned.length >= _pruneAt) {
          _owned.removeWhere((entry) => entry.target == null);
          _pruneAt = _owned.length + 256;
        }
        final entry = WeakReference(result);
        result._trackingEntry = entry;
        _owned.add(entry);
      }
      return result;
    } finally {
      trace?.call('tracker:wrap', false);
    }
  }

  FlaxJsValue unwrap(FlaxJsValue value) =>
      value is _TrackedObject ? value.inner : value;
  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:eval'}) =>
      _evaluate(sourceUrl, () => inner.evaluate(source, sourceUrl: sourceUrl));

  @override
  FlaxJsValue evaluateSource(FlaxJsSource source) =>
      _evaluate(source.sourceUrl, () => inner.evaluateSource(source));

  FlaxJsValue _evaluate(String sourceUrl, FlaxJsValue Function() evaluate) {
    final watch = Stopwatch()..start();
    final tracing = trace;
    final label = tracing == null ? '' : 'js:eval:$sourceUrl';
    tracing?.call(label, true);
    try {
      return wrap(evaluate(), sourceUrl);
    } finally {
      tracing?.call(label, false);
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
  FlaxJsObject createUint8Array(Uint8List bytes) =>
      wrap(inner.createUint8Array(bytes), 'uint8') as FlaxJsObject;

  @override
  Uint8List readUint8Array(FlaxJsObject value) =>
      inner.readUint8Array(unwrap(value) as FlaxJsObject);

  @override
  FlaxJsObject createSharedBuffer(Object data) =>
      wrap(inner.createSharedBuffer(data), 'shared-buffer') as FlaxJsObject;

  @override
  Object readSharedBuffer(FlaxJsObject value, FlaxBufferType type) =>
      inner.readSharedBuffer(unwrap(value) as FlaxJsObject, type);

  @override
  void registerHostFunction(String name, FlaxJsHostFunction callback) {
    inner.registerHostFunction(name, (receiver, args) {
      final tracing = trace;
      final label = tracing == null ? '' : 'host:$name';
      tracing?.call(label, true);
      try {
        if (args.isNotEmpty && args.first is FlaxJsString) {
          var operation = (args.first as FlaxJsString).value;
          if (name == '__flaxBaseCall' &&
              operation == 'fetch' &&
              args.length > 1 &&
              args[1] is FlaxJsString) {
            operation = '$operation:${(args[1] as FlaxJsString).value}';
          }
          hostOperations.update(
            '$name:$operation',
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
            (args.length == 5 || args.length == 6) &&
            args[2] is FlaxJsString) {
          _operationCategories[result.value.toInt()] =
              (args[2] as FlaxJsString).value;
        }
        return result;
      } finally {
        tracing?.call(label, false);
      }
    });
  }

  @override
  void bindDartPeer(FlaxJsObject object, Object target, {Object? origin}) {
    inner.bindDartPeer(unwrap(object) as FlaxJsObject, target, origin: origin);
    if (_futureIds[object] case final id?) {
      _pendingFutureOwners[id] = WeakReference(target);
    }
  }

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
  WeakReference<_TrackedObject>? _trackingEntry;
  @override
  FlaxJsValue getProperty(String name) {
    final tracing = runtime.trace;
    tracing?.call('bridge:property', true);
    final FlaxJsValue value;
    try {
      value = inner.getProperty(name);
    } finally {
      tracing?.call('bridge:property', false);
    }
    return runtime.wrap(value, '$label.$name');
  }

  @override
  void setProperty(String name, FlaxJsValue value) =>
      inner.setProperty(name, runtime.unwrap(value));
  @override
  bool strictEquals(FlaxJsObject other) =>
      inner.strictEquals(runtime.unwrap(other) as FlaxJsObject);
  @override
  FlaxJsObject retain() {
    final tracing = runtime.trace;
    tracing?.call('bridge:retain', true);
    final FlaxJsObject value;
    try {
      value = inner.retain();
    } finally {
      tracing?.call('bridge:retain', false);
    }
    return runtime.wrap(value, label) as FlaxJsObject;
  }

  @override
  void release() {
    final tracing = runtime.trace;
    tracing?.call('bridge:release', true);
    try {
      inner.release();
    } finally {
      tracing?.call('bridge:release', false);
    }
    runtime.trace?.call('tracker:release', true);
    try {
      final entry = _trackingEntry;
      if (entry != null) runtime._owned.remove(entry);
      _trackingEntry = null;
    } finally {
      runtime.trace?.call('tracker:release', false);
    }
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
    final tracing = runtime.trace;
    final traceLabel = tracing == null ? '' : 'js:$label';
    tracing?.call(traceLabel, true);
    try {
      runtime.jsCalls.update(label, (n) => n + 1, ifAbsent: () => 1);
      final values = arguments.map(runtime.unwrap).toList();
      final receiver = runtime.unwrap(thisValue);
      tracing?.call('bridge:call', true);
      final FlaxJsValue value;
      try {
        value = (inner as FlaxJsFunction).call(values, thisValue: receiver);
      } finally {
        tracing?.call('bridge:call', false);
      }
      final result = runtime.wrap(value, '$label.result');
      if (label.endsWith('.observe') && result is FlaxJsFunction) {
        runtime._observedSubscriptions++;
      }
      if (label == '__flaxBindings.future' && result is FlaxJsObject) {
        runtime._futureIds[result] = (arguments.first as FlaxJsNumber).value
            .toInt();
      } else if (label == '__flaxBindings.settleFuture') {
        runtime._pendingFutureOwners.remove(
          (arguments.first as FlaxJsNumber).value.toInt(),
        );
      }
      return result;
    } finally {
      tracing?.call(traceLabel, false);
    }
  }
}
