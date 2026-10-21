// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:flutter/scheduler.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/foundation.dart' as api1;

import 'dart:core' as api2;
import 'dart:async' as api3;

// ignore: unused_element
const _flaxOmitted = Object();
const sdk_schedulerBindings = FlaxBindingModule(
  'sdk_scheduler',
  [
    FlaxEnumBinding(
      "flax.core/sdk_scheduler#type:SchedulerPhase",
      {
        "idle": api.SchedulerPhase.idle,
        "transientCallbacks": api.SchedulerPhase.transientCallbacks,
        "midFrameMicrotasks": api.SchedulerPhase.midFrameMicrotasks,
        "persistentCallbacks": api.SchedulerPhase.persistentCallbacks,
        "postFrameCallbacks": api.SchedulerPhase.postFrameCallbacks,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_scheduler#type:SchedulerServiceExtensions",
      {"timeDilation": api.SchedulerServiceExtensions.timeDilation},
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    _flaxBinding15,
    _flaxBinding21,
    _flaxBinding65,
    _flaxBinding72,
    _flaxBinding101,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:debugPrintBeginFrameBanner",
      [],
      flaxBoolType,
      _read_debugPrintBeginFrameBanner,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:debugPrintEndFrameBanner",
      [],
      flaxBoolType,
      _read_debugPrintEndFrameBanner,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:debugPrintScheduleFrameStacks",
      [],
      flaxBoolType,
      _read_debugPrintScheduleFrameStacks,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:debugTracePostFrameCallbacks",
      [],
      flaxBoolType,
      _read_debugTracePostFrameCallbacks,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:timeDilation",
      [],
      flaxDoubleType,
      _read_timeDilation,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugAssertAllSchedulerVarsUnset",
      [FlaxParameter.required("reason", flaxStringType)],
      flaxBoolType,
      _function_debugAssertAllSchedulerVarsUnset,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:defaultSchedulingStrategy",
      [
        FlaxParameter.required("priority", flaxIntType),
        FlaxParameter.required("scheduler", _flaxBinding102),
      ],
      flaxBoolType,
      _function_defaultSchedulingStrategy,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugPrintBeginFrameBanner%3D",
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _write_debugPrintBeginFrameBanner,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugPrintEndFrameBanner%3D",
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _write_debugPrintEndFrameBanner,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugPrintScheduleFrameStacks%3D",
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _write_debugPrintScheduleFrameStacks,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugTracePostFrameCallbacks%3D",
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _write_debugTracePostFrameCallbacks,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:timeDilation%3D",
      [FlaxParameter.required("value", flaxDoubleType)],
      flaxVoidType,
      _write_timeDilation,
    ),
  ],
  constants: [
    FlaxConstantGroup(_flaxBinding17, {
      "flax.core/sdk_scheduler#read:Priority.idle": api.Priority.idle,
      "flax.core/sdk_scheduler#read:Priority.animation": api.Priority.animation,
      "flax.core/sdk_scheduler#read:Priority.touch": api.Priority.touch,
    }),
    FlaxConstantGroup(flaxIntType, {
      "flax.core/sdk_scheduler#read:Priority.kMaxOffset":
          api.Priority.kMaxOffset,
    }),
  ],
  moduleId: "flax.core/sdk_scheduler",
  dependencyModules: ["flax.core/flutter", "flax.core/sdk_foundation"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "call-layouts",
    "engine-type-handles",
    "generic-call-types",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "native-async-objects",
    "native-functions",
    "native-navigation-objects",
    "native-widget-proxies",
    "shared-static-readers",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.core/sdk_scheduler#type:PerformanceModeRequestHandle",
      api.PerformanceModeRequestHandle,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_scheduler#type:Priority",
      api.Priority,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_scheduler#type:SchedulerPhase",
      api.SchedulerPhase,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_scheduler#type:SchedulerServiceExtensions",
      api.SchedulerServiceExtensions,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_scheduler#type:Ticker",
      api.Ticker,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_scheduler#type:TickerCanceled",
      api.TickerCanceled,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_scheduler#type:TickerFuture",
      api.TickerFuture,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
Object? _function_debugAssertAllSchedulerVarsUnset(
  Map<String, Object?> values,
) {
  return api.debugAssertAllSchedulerVarsUnset(values["reason"] as String);
}

Object? _function_defaultSchedulingStrategy(Map<String, Object?> values) {
  return api.defaultSchedulingStrategy(
    priority: values["priority"] as int,
    scheduler: values["scheduler"] as api.SchedulerBinding,
  );
}

Object? _read_debugPrintBeginFrameBanner(Map<String, Object?> values) =>
    api.debugPrintBeginFrameBanner;
Object? _read_debugPrintEndFrameBanner(Map<String, Object?> values) =>
    api.debugPrintEndFrameBanner;
Object? _read_debugPrintScheduleFrameStacks(Map<String, Object?> values) =>
    api.debugPrintScheduleFrameStacks;
Object? _read_debugTracePostFrameCallbacks(Map<String, Object?> values) =>
    api.debugTracePostFrameCallbacks;
Object? _read_timeDilation(Map<String, Object?> values) => api.timeDilation;
Object? _write_debugPrintBeginFrameBanner(Map<String, Object?> values) {
  api.debugPrintBeginFrameBanner = values["value"] as bool;
  return null;
}

Object? _write_debugPrintEndFrameBanner(Map<String, Object?> values) {
  api.debugPrintEndFrameBanner = values["value"] as bool;
  return null;
}

Object? _write_debugPrintScheduleFrameStacks(Map<String, Object?> values) {
  api.debugPrintScheduleFrameStacks = values["value"] as bool;
  return null;
}

Object? _write_debugTracePostFrameCallbacks(Map<String, Object?> values) {
  api.debugTracePostFrameCallbacks = values["value"] as bool;
  return null;
}

Object? _write_timeDilation(Map<String, Object?> values) {
  api.timeDilation = values["value"] as double;
  return null;
}

bool _isPerformanceModeRequestHandle(Object value) =>
    value is api.PerformanceModeRequestHandle;
Object? _PerformanceModeRequestHandle_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PerformanceModeRequestHandle).dispose();
  return null;
}

Object _createPerformanceModeRequestHandle(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isPriority(Object value) => value is api.Priority;
Object? _Priority_value(Object value) => (value as api.Priority).value;
Object? _Priority_operatorAdd(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Priority) + (values["offset"] as int);
}

Object? _Priority_operatorSubtract(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Priority) - (values["offset"] as int);
}

Object _createPriority(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isTicker(Object value) => value is api.Ticker;
Object? _Ticker_forceFrames(Object value) => (value as api.Ticker).forceFrames;
Object? _Ticker_muted(Object value) => (value as api.Ticker).muted;
Object? _Ticker_isTicking(Object value) => (value as api.Ticker).isTicking;
Object? _Ticker_isActive(Object value) => (value as api.Ticker).isActive;
Object? _Ticker_scheduled(Object value) => (value as api.Ticker).scheduled;
Object? _Ticker_shouldScheduleTick(Object value) =>
    (value as api.Ticker).shouldScheduleTick;
Object? _Ticker_debugLabel(Object value) => (value as api.Ticker).debugLabel;
void _Ticker_set_forceFrames(Object receiver, Object? value) {
  (receiver as api.Ticker).forceFrames = value as bool;
}

void _Ticker_set_muted(Object receiver, Object? value) {
  (receiver as api.Ticker).muted = value as bool;
}

Object? _Ticker_start(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Ticker).start();
}

Object? _Ticker_describeForError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Ticker).describeForError(values["name"] as String);
}

Object? _Ticker_stop(Object receiver, Map<String, Object?> values) {
  (receiver as api.Ticker).stop(canceled: values["canceled"] as bool);
  return null;
}

Object? _Ticker_scheduleTick(Object receiver, Map<String, Object?> values) {
  (receiver as api.Ticker).scheduleTick(
    rescheduling: values["rescheduling"] as bool,
  );
  return null;
}

Object? _Ticker_unscheduleTick(Object receiver, Map<String, Object?> values) {
  (receiver as api.Ticker).unscheduleTick();
  return null;
}

Object? _Ticker_absorbTicker(Object receiver, Map<String, Object?> values) {
  (receiver as api.Ticker).absorbTicker(values["originalTicker"] as api.Ticker);
  return null;
}

Object? _Ticker_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Ticker).dispose();
  return null;
}

Object? _Ticker_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Ticker).toString(
    debugIncludeStack: values["debugIncludeStack"] as bool,
  );
}

Object? _Ticker_super_start(Object receiver, Map<String, Object?> values) {
  return (receiver as _TickerProxy)._flaxSuper_start();
}

Object? _Ticker_super_describeForError(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TickerProxy)._flaxSuper_describeForError(
    values["name"] as String,
  );
}

Object? _Ticker_super_stop(Object receiver, Map<String, Object?> values) {
  (receiver as _TickerProxy)._flaxSuper_stop(
    canceled: values["canceled"] as bool,
  );
  return null;
}

Object? _Ticker_super_scheduleTick(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TickerProxy)._flaxSuper_scheduleTick(
    rescheduling: values["rescheduling"] as bool,
  );
  return null;
}

Object? _Ticker_super_unscheduleTick(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TickerProxy)._flaxSuper_unscheduleTick();
  return null;
}

Object? _Ticker_super_absorbTicker(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TickerProxy)._flaxSuper_absorbTicker(
    values["originalTicker"] as api.Ticker,
  );
  return null;
}

Object? _Ticker_super_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as _TickerProxy)._flaxSuper_dispose();
  return null;
}

Object? _Ticker_super_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as _TickerProxy)._flaxSuper_toString(
    debugIncludeStack: values["debugIncludeStack"] as bool,
  );
}

Object? _Ticker_super_get_forceFrames(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TickerProxy)._flaxSuperGet_forceFrames;
Object? _Ticker_super_get_muted(Object receiver, Map<String, Object?> values) =>
    (receiver as _TickerProxy)._flaxSuperGet_muted;
Object? _Ticker_super_get_isTicking(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TickerProxy)._flaxSuperGet_isTicking;
Object? _Ticker_super_get_isActive(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TickerProxy)._flaxSuperGet_isActive;
Object? _Ticker_super_get_scheduled(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TickerProxy)._flaxSuperGet_scheduled;
Object? _Ticker_super_get_shouldScheduleTick(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TickerProxy)._flaxSuperGet_shouldScheduleTick;
Object? _Ticker_super_get_debugLabel(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TickerProxy)._flaxSuperGet_debugLabel;
Object? _Ticker_super_set_forceFrames(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TickerProxy)._flaxSuperSet_forceFrames(values["value"] as bool);
  return null;
}

Object? _Ticker_super_set_muted(Object receiver, Map<String, Object?> values) {
  (receiver as _TickerProxy)._flaxSuperSet_muted(values["value"] as bool);
  return null;
}

Object _createTicker(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Ticker(
        values["_onTick"] as void Function(api2.Duration elapsed),
        debugLabel: values["debugLabel"] as String?,
      );
    case '@implementation':
      return _TickerProxy(
        values['@peer'] as FlaxProxyPeer,
        values["_onTick"] as void Function(api2.Duration elapsed),
        debugLabel: values["debugLabel"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTickerCanceled(Object value) => value is api.TickerCanceled;
Object? _TickerCanceled_ticker(Object value) =>
    (value as api.TickerCanceled).ticker;
Object? _TickerCanceled_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TickerCanceled).toString();
}

Object? _FlaxProxyDispatch0_super_call_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch0)._flaxSuper_toString();
}

Object? _TickerCanceled_super_get_ticker(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TickerCanceledProxy)._flaxSuperGet_ticker;
Object _createTickerCanceled(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TickerCanceled(values["ticker"] as api.Ticker?);
    case '@implementation':
      return _TickerCanceledProxy(
        values['@peer'] as FlaxProxyPeer,
        values["ticker"] as api.Ticker?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTickerFuture(Object value) => value is api.TickerFuture;
Object? _TickerFuture_orCancel(Object value) =>
    (value as api.TickerFuture).orCancel;
Object? _TickerFuture_whenCompleteOrCancel(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.TickerFuture).whenCompleteOrCancel(
    values["callback"] as void Function(),
  );
  return null;
}

Object? _TickerFuture_asStream(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TickerFuture).asStream();
}

Object? _TickerFuture_catchError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TickerFuture).catchError(
    values["onError"] as Function,
    test: values["test"] as bool Function(Object p0)?,
  );
}

Object? _TickerFuture_then(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TickerFuture).then<Object?>(
    values["onValue"] as api3.FutureOr<Object?> Function(Object? value),
    onError: values["onError"] as Function?,
  );
}

Object? _TickerFuture_timeout(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TickerFuture).timeout(
    values["timeLimit"] as api2.Duration,
    onTimeout: values["onTimeout"] as api3.FutureOr<void> Function()?,
  );
}

Object? _TickerFuture_whenComplete(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.TickerFuture).whenComplete(
    values["action"] as Object? Function(),
  );
}

Object? _TickerFuture_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TickerFuture).toString();
}

Object? _TickerFuture_super_whenCompleteOrCancel(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TickerFutureProxy)._flaxSuper_whenCompleteOrCancel(
    values["callback"] as void Function(),
  );
  return null;
}

Object? _TickerFuture_super_asStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TickerFutureProxy)._flaxSuper_asStream();
}

Object? _TickerFuture_super_catchError(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TickerFutureProxy)._flaxSuper_catchError(
    values["onError"] as Function,
    test: values["test"] as bool Function(Object p0)?,
  );
}

Object? _TickerFuture_super_then(Object receiver, Map<String, Object?> values) {
  return (receiver as _TickerFutureProxy)._flaxSuper_then<Object?>(
    values["onValue"] as api3.FutureOr<Object?> Function(Object? value),
    onError: values["onError"] as Function?,
  );
}

Object? _TickerFuture_super_timeout(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TickerFutureProxy)._flaxSuper_timeout(
    values["timeLimit"] as api2.Duration,
    onTimeout: values["onTimeout"] as api3.FutureOr<void> Function()?,
  );
}

Object? _TickerFuture_super_whenComplete(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TickerFutureProxy)._flaxSuper_whenComplete(
    values["action"] as Object? Function(),
  );
}

Object? _TickerFuture_super_get_orCancel(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TickerFutureProxy)._flaxSuperGet_orCancel;
Object _createTickerFuture(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "complete":
      return api.TickerFuture.complete();
    case '@implementation':
      return _TickerFutureProxy.complete(values['@peer'] as FlaxProxyPeer);
    case "@implementation:complete":
      return _TickerFutureProxy.complete(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

abstract interface class _FlaxProxyDispatch0 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toString();
}

String _FlaxProxyDispatch0_call_toString(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toString();
  }
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _TickerProxy extends api.Ticker {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _TickerProxy(
    this._flaxPeer,
    void Function(api2.Duration elapsed) super._onTick, {
    String? super.debugLabel,
  });
  @override
  api.TickerFuture start() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_start();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.TickerFuture;
    return _flaxConvertedResult;
  }

  api.TickerFuture _flaxSuper_start() {
    return super.start();
  }

  @override
  api1.DiagnosticsNode describeForError(String name) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[name], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_describeForError(name);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DiagnosticsNode;
    return _flaxConvertedResult;
  }

  api1.DiagnosticsNode _flaxSuper_describeForError(String name) {
    return super.describeForError(name);
  }

  @override
  void stop({Object? canceled = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{
      if (!identical(canceled, _flaxOmitted)) "canceled": canceled,
    });
    if (!_flaxResult.$1) {
      _flaxSuper_stop(canceled: canceled);
      return;
    }
    return;
  }

  void _flaxSuper_stop({Object? canceled = _flaxOmitted}) {
    final _flaxHas0 = !identical(canceled, _flaxOmitted);
    flaxInvokeWithDefaults(
      super.stop,
      <Object?>[(_flaxHas0 ? canceled as bool : null)],
      <int>[(_flaxHas0 ? 1 : 0)],
      const <String>["canceled"],
    );
    return;
  }

  @override
  void scheduleTick({Object? rescheduling = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[], <String, Object?>{
      if (!identical(rescheduling, _flaxOmitted)) "rescheduling": rescheduling,
    });
    if (!_flaxResult.$1) {
      _flaxSuper_scheduleTick(rescheduling: rescheduling);
      return;
    }
    return;
  }

  void _flaxSuper_scheduleTick({Object? rescheduling = _flaxOmitted}) {
    final _flaxHas0 = !identical(rescheduling, _flaxOmitted);
    flaxInvokeWithDefaults(
      super.scheduleTick,
      <Object?>[(_flaxHas0 ? rescheduling as bool : null)],
      <int>[(_flaxHas0 ? 1 : 0)],
      const <String>["rescheduling"],
    );
    return;
  }

  @override
  void unscheduleTick() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_unscheduleTick();
      return;
    }
    return;
  }

  void _flaxSuper_unscheduleTick() {
    super.unscheduleTick();
    return;
  }

  @override
  void absorbTicker(api.Ticker originalTicker) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      originalTicker,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_absorbTicker(originalTicker);
      return;
    }
    return;
  }

  void _flaxSuper_absorbTicker(api.Ticker originalTicker) {
    super.absorbTicker(originalTicker);
    return;
  }

  @override
  // ignore: must_call_super
  void dispose() {
    if (!_flaxPeer.active) return;
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "dispose";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(6, <Object?>[], <String, Object?>{});
      if (!_flaxResult.$1) {
        _flaxSuper_dispose();
        return;
      }
      if (!(_flaxCalledSuper))
        throw StateError("dispose must call super.dispose()");
      return;
    } finally {
      _flaxActiveSuperMember = _flaxPreviousSuperMember;
      _flaxCalledSuper = _flaxPreviousCalledSuper;
    }
  }

  void _flaxSuper_dispose() {
    if (_flaxActiveSuperMember == "dispose") _flaxCalledSuper = true;
    super.dispose();
    return;
  }

  @override
  String toString({Object? debugIncludeStack = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[], <String, Object?>{
      if (!identical(debugIncludeStack, _flaxOmitted))
        "debugIncludeStack": debugIncludeStack,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toString(debugIncludeStack: debugIncludeStack);
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toString({Object? debugIncludeStack = _flaxOmitted}) {
    final _flaxHas0 = !identical(debugIncludeStack, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.toString,
      <Object?>[(_flaxHas0 ? debugIncludeStack as bool : null)],
      <int>[(_flaxHas0 ? 1 : 0)],
      const <String>["debugIncludeStack"],
    ) as String);
  }

  @override
  bool get forceFrames {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.forceFrames;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_forceFrames {
    return super.forceFrames;
  }

  @override
  bool get muted {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.muted;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_muted {
    return super.muted;
  }

  @override
  bool get isTicking {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.isTicking;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isTicking {
    return super.isTicking;
  }

  @override
  bool get isActive {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1) return super.isActive;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isActive {
    return super.isActive;
  }

  @override
  bool get scheduled {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.scheduled;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_scheduled {
    return super.scheduled;
  }

  @override
  bool get shouldScheduleTick {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.shouldScheduleTick;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_shouldScheduleTick {
    return super.shouldScheduleTick;
  }

  @override
  String? get debugLabel {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.debugLabel;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_debugLabel {
    return super.debugLabel;
  }

  @override
  set forceFrames(bool value) {
    final result = _flaxPeer.call(15, [value], const {});
    if (!result.$1) {
      super.forceFrames = value;
      return;
    }
  }

  void _flaxSuperSet_forceFrames(bool value) {
    super.forceFrames = value;
  }

  @override
  set muted(bool value) {
    final result = _flaxPeer.call(16, [value], const {});
    if (!result.$1) {
      super.muted = value;
      return;
    }
  }

  void _flaxSuperSet_muted(bool value) {
    super.muted = value;
  }
}

final class _TickerCanceledProxy extends api.TickerCanceled
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _TickerCanceledProxy(this._flaxPeer, [api.Ticker? super.ticker]);
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.Ticker? get ticker {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.ticker;
    final _flaxConvertedResult = _flaxResult.$2 as api.Ticker?;
    return _flaxConvertedResult;
  }

  api.Ticker? get _flaxSuperGet_ticker {
    return super.ticker;
  }
}

final class _TickerFutureProxy extends api.TickerFuture
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _TickerFutureProxy.complete(this._flaxPeer) : super.complete();
  @override
  void whenCompleteOrCancel(void Function() callback) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      callback,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_whenCompleteOrCancel(callback);
      return;
    }
    return;
  }

  void _flaxSuper_whenCompleteOrCancel(void Function() callback) {
    super.whenCompleteOrCancel(callback);
    return;
  }

  @override
  api3.Stream<void> asStream() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_asStream();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api3.Stream<void>;
    return _flaxConvertedResult;
  }

  api3.Stream<void> _flaxSuper_asStream() {
    return super.asStream();
  }

  @override
  Future<void> catchError(Function onError, {Object? test = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(
      2,
      <Object?>[onError],
      <String, Object?>{if (!identical(test, _flaxOmitted)) "test": test},
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_catchError(onError, test: test);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_catchError(
    Function onError, {
    Object? test = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(test, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.catchError,
      <Object?>[
        onError,
        (_flaxHas1 ? test as bool Function(Object p0)? : null),
      ],
      <int>[1 | (_flaxHas1 ? 2 : 0)],
      const <String>["", "test"],
    ) as Future<void>);
  }

  @override
  Future<R> then<R extends Object?>(
    api3.FutureOr<R> Function(void value) onValue, {
    Object? onError = _flaxOmitted,
  }) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(3, [
            R,
          ], _flaxProxySignature_TickerFuture_then<R>)
        : null;
    Future<R> _flaxContextSuper(
      api3.FutureOr<R> Function(void value) onValue, {
      Object? onError = _flaxOmitted,
    }) {
      return _flaxSuper_then<R>(onValue, onError: onError);
    }

    final _flaxResult = _flaxPeer.call(
      3,
      <Object?>[onValue],
      <String, Object?>{
        if (!identical(onError, _flaxOmitted)) "onError": onError,
      },
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_then<R>(onValue, onError: onError);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<R>(
      (value) => _genericCallbackResult<R>(value),
    );
    return _flaxConvertedResult;
  }

  Future<R> _flaxSuper_then<R extends Object?>(
    api3.FutureOr<R> Function(void value) onValue, {
    Object? onError = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(onError, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.then<R>,
      <Object?>[onValue, (_flaxHas1 ? onError as Function? : null)],
      <int>[1 | (_flaxHas1 ? 2 : 0)],
      const <String>["", "onError"],
    ) as Future<R>);
  }

  @override
  Future<void> timeout(
    api2.Duration timeLimit, {
    Object? onTimeout = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[timeLimit],
      <String, Object?>{
        if (!identical(onTimeout, _flaxOmitted)) "onTimeout": onTimeout,
      },
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_timeout(timeLimit, onTimeout: onTimeout);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_timeout(
    api2.Duration timeLimit, {
    Object? onTimeout = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(onTimeout, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.timeout,
      <Object?>[
        timeLimit,
        (_flaxHas1 ? onTimeout as api3.FutureOr<void> Function()? : null),
      ],
      <int>[1 | (_flaxHas1 ? 2 : 0)],
      const <String>["", "onTimeout"],
    ) as Future<void>);
  }

  @override
  Future<void> whenComplete(Object? Function() action) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      action,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_whenComplete(action);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_whenComplete(Object? Function() action) {
    return super.whenComplete(action);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 6);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  Future<void> get orCancel {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.orCancel;
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> get _flaxSuperGet_orCancel {
    return super.orCancel;
  }
}

FlaxCallbackBinding _flaxProxySignature_TickerFuture_then<R extends Object?>(
  FlaxDartTypes types,
) {
  Object _callback0(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
    final positional = <Object?>[];
    final named = <String, Object?>{};
    positional.add(p0);
    return _flaxBridgeCallback.call(positional, named) as api3.FutureOr<R>;
  };
  bool _callback0Matches(Object value) =>
      value is api3.FutureOr<R> Function(Object? value);
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as api3.FutureOr<R> Function(Object? value))(
      positional[0],
    );
  }

  Object _callback1(FlaxCallback _flaxBridgeCallback) =>
      (
        api3.FutureOr<R> Function(Object? value) p0, {
        Object? onError = _flaxOmitted,
      }) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        if (!identical(onError, _flaxOmitted)) named["onError"] = onError;
        return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
            .then<R>((value) => value as R);
      };
  bool _callback1Matches(Object value) =>
      value
          is Future<R> Function(
            api3.FutureOr<R> Function(Object? value) onValue, {
            Function? onError,
          });
  Object? _callback1Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    if (!named.containsKey("onError")) {
      return (function
          as Future<R> Function(
            api3.FutureOr<R> Function(Object? value) onValue, {
            Function? onError,
          }))(positional[0] as api3.FutureOr<R> Function(Object? value));
    }
    return (function
        as Future<R> Function(
          api3.FutureOr<R> Function(Object? value) onValue, {
          Function? onError,
        }))(
      positional[0] as api3.FutureOr<R> Function(Object? value),
      onError: named["onError"] as Function?,
    );
  }

  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "onValue",
        types.define<api3.FutureOr<R> Function(void value)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("value", flaxVoidType)],
              types.ref<api3.FutureOr<R>>(withinCallback: true),
              _callback0,
              id:
                  types.key<api3.FutureOr<R> Function(void value)>() +
                  ":callback:<>(p:r:value:void:)->futureOr:[parameter:]",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
          withinCallback: true,
        ),
      ),
      FlaxCallbackParameter.plain(
        "onError",
        _flaxBinding81,
        required: false,
        positional: false,
      ),
    ],
    types.ref<Future<R>>(withinCallback: true),
    _callback1,
    id:
        types
            .key<
              Future<R> Function(
                api3.FutureOr<R> Function(void value) onValue, {
                Function? onError,
              })
            >() +
        ":callback:<>(p:r:onValue:callback:<>(p:r:value:void:)->futureOr:[parameter:],n:o:onError:function?:)->future:[parameter:]",
    invoke: _callback1Invoke,
    matches: _callback1Matches,
  );
}

Function _flaxGeneric_TickerFuture_then<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.TickerFuture).then<_Method0>(
          values["onValue"] as api3.FutureOr<_Method0> Function(Object? value),
          onError: values["onError"] as Function?,
        );
      }

      Object _callback0(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        return _flaxBridgeCallback.call(positional, named)
            as api3.FutureOr<_Method0>;
      };
      bool _callback0Matches(Object value) =>
          value is api3.FutureOr<_Method0> Function(Object? value);
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function as api3.FutureOr<_Method0> Function(Object? value))(
          positional[0],
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "onValue",
            types.define<api3.FutureOr<_Method0> Function(void value)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("value", flaxVoidType)],
                  types.ref<api3.FutureOr<_Method0>>(withinCallback: true),
                  _callback0,
                  id:
                      types
                          .key<api3.FutureOr<_Method0> Function(void value)>() +
                      ":callback:<>(p:r:value:void:)->futureOr:[parameter:]",
                  invoke: _callback0Invoke,
                  matches: _callback0Matches,
                ),
              ),
            ),
          ),
          FlaxParameter("onError", _flaxBinding81, required: false),
        ],
        types.ref<Future<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_TickerFuture_super_then<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as _TickerFutureProxy)._flaxSuper_then<_Method0>(
          values["onValue"] as api3.FutureOr<_Method0> Function(Object? value),
          onError: values["onError"] as Function?,
        );
      }

      Object _callback0(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        return _flaxBridgeCallback.call(positional, named)
            as api3.FutureOr<_Method0>;
      };
      bool _callback0Matches(Object value) =>
          value is api3.FutureOr<_Method0> Function(Object? value);
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function as api3.FutureOr<_Method0> Function(Object? value))(
          positional[0],
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "onValue",
            types.define<api3.FutureOr<_Method0> Function(void value)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("value", flaxVoidType)],
                  types.ref<api3.FutureOr<_Method0>>(withinCallback: true),
                  _callback0,
                  id:
                      types
                          .key<api3.FutureOr<_Method0> Function(void value)>() +
                      ":callback:<>(p:r:value:void:)->futureOr:[parameter:]",
                  invoke: _callback0Invoke,
                  matches: _callback0Matches,
                ),
              ),
            ),
          ),
          FlaxParameter("onError", _flaxBinding81, required: false),
        ],
        types.ref<Future<_Method0>>(),
        invoke,
      );
    };
const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[1,1,[],[]]]", _flaxShape1),
];
Function _flaxShape0<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
  return types.define<_Shape0 Function()>(
    FlaxTypeRef(
      "callback",
      nullable: false,
      callback: FlaxCallbackBinding(
        [],
        types.ref<_Shape0>(withinCallback: true),
        FlaxCallbackAdapters.wrap0<_Shape0>,
        id: types.key<_Shape0 Function()>() + ":callback:<>()->parameter:",
        invoke: FlaxCallbackAdapters.invoke0<_Shape0>,
        matches: FlaxCallbackAdapters.matches0<_Shape0>,
      ),
    ),
    withinCallback: withinCallback,
  );
};
Function _flaxShape1<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape1 Function(_Shape0 elapsed)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "elapsed",
                types.ref<_Shape0>(withinCallback: true),
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            FlaxCallbackAdapters.wrap1<_Shape0, _Shape1>,
            id:
                types.key<_Shape1 Function(_Shape0 elapsed)>() +
                ":callback:<>(p:r:elapsed:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke1<_Shape0, _Shape1>,
            matches: FlaxCallbackAdapters.matches1<_Shape0, _Shape1>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Object _callback0(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api3.FutureOr<Object?>;
};
bool _callback0Matches(Object value) =>
    value is api3.FutureOr<Object?> Function(Object? value);
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<Object?> Function(Object? value))(
    positional[0],
  );
}

Object _callback1(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return _flaxBridgeCallback.call(positional, named) as api3.FutureOr<void>;
};
bool _callback1Matches(Object value) => value is api3.FutureOr<void> Function();
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<void> Function())();
}

Object _callback2(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api3.FutureOr<Object?>;
};
bool _callback2Matches(Object value) =>
    value is api3.FutureOr<Object?> Function(Object? value);
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<Object?> Function(Object? value))(
    positional[0],
  );
}

FlaxCallbackBinding _callback3Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  Object _callback0(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
    final positional = <Object?>[];
    final named = <String, Object?>{};
    positional.add(p0);
    return _flaxBridgeCallback.call(positional, named)
        as api3.FutureOr<_Callback0>;
  };
  bool _callback0Matches(Object value) =>
      value is api3.FutureOr<_Callback0> Function(Object? value);
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as api3.FutureOr<_Callback0> Function(Object? value))(
      positional[0],
    );
  }

  Object _callback1(FlaxCallback _flaxBridgeCallback) =>
      (
        api3.FutureOr<_Callback0> Function(Object? value) p0, {
        Object? onError = _flaxOmitted,
      }) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        if (!identical(onError, _flaxOmitted)) named["onError"] = onError;
        return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
            .then<_Callback0>((value) => value as _Callback0);
      };
  bool _callback1Matches(Object value) =>
      value
          is Future<_Callback0> Function(
            api3.FutureOr<_Callback0> Function(Object? value) onValue, {
            Function? onError,
          });
  Object? _callback1Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    if (!named.containsKey("onError")) {
      return (function
          as Future<_Callback0> Function(
            api3.FutureOr<_Callback0> Function(Object? value) onValue, {
            Function? onError,
          }))(
        positional[0] as api3.FutureOr<_Callback0> Function(Object? value),
      );
    }
    return (function
        as Future<_Callback0> Function(
          api3.FutureOr<_Callback0> Function(Object? value) onValue, {
          Function? onError,
        }))(
      positional[0] as api3.FutureOr<_Callback0> Function(Object? value),
      onError: named["onError"] as Function?,
    );
  }

  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "onValue",
        types.define<api3.FutureOr<_Callback0> Function(void value)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("value", flaxVoidType)],
              types.ref<api3.FutureOr<_Callback0>>(withinCallback: true),
              _callback0,
              id:
                  types.key<api3.FutureOr<_Callback0> Function(void value)>() +
                  ":callback:<>(p:r:value:void:)->futureOr:[parameter:]",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
          withinCallback: true,
        ),
      ),
      FlaxCallbackParameter.plain(
        "onError",
        _flaxBinding81,
        required: false,
        positional: false,
      ),
    ],
    types.ref<Future<_Callback0>>(withinCallback: true),
    _callback1,
    id:
        types
            .key<
              Future<_Callback0> Function(
                api3.FutureOr<_Callback0> Function(void value) onValue, {
                Function? onError,
              })
            >() +
        ":callback:<>(p:r:onValue:callback:<>(p:r:value:void:)->futureOr:[parameter:],n:o:onError:function?:)->future:[parameter:]",
    invoke: _callback1Invoke,
    matches: _callback1Matches,
  );
}

Object _callback3(FlaxCallback _flaxBridgeCallback) =>
    <R extends Object?>(
      api3.FutureOr<R> Function(void value) p0, {
      Object? onError = _flaxOmitted,
    }) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      if (!identical(onError, _flaxOmitted)) named["onError"] = onError;
      return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
          .then<R>((value) => _genericCallbackResult<R>(value));
    };
bool _callback3Matches(Object value) =>
    value
        is Future<R> Function<R extends Object?>(
          api3.FutureOr<R> Function(void value) onValue, {
          Function? onError,
        });
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  if (!named.containsKey("onError")) {
    return (function
        as Future<R> Function<R extends Object?>(
          api3.FutureOr<R> Function(void value) onValue, {
          Function? onError,
        }))<Object?>(
      positional[0] as api3.FutureOr<Object?> Function(Object? value),
    );
  }
  return (function
      as Future<R> Function<R extends Object?>(
        api3.FutureOr<R> Function(void value) onValue, {
        Function? onError,
      }))<Object?>(
    positional[0] as api3.FutureOr<Object?> Function(Object? value),
    onError: named["onError"] as Function?,
  );
}

Future<Object?> _future0Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> _future1Adapt(Future<Object?> value) => value;
bool _stream0Matches(Object value) => value is api3.Stream<void>;
api3.Stream<Object?> _stream0Adapt(Object value) =>
    (value is api3.Stream<void>
            ? value
            : (value as api3.Stream<Object?>).map<void>(
                (event) => _genericCallbackResult<void>(event),
              ))
        as api3.Stream<Object?>;
T _genericCallbackResult<T>(Object? value) {
  // Test assignability to cover both nullable and non-nullable numeric T.
  // Broad bounds keep their decoded representation; only the Dart use site
  // selects a more specific numeric representation.
  if (value is num && value is! T) {
    if (0 is T && 0.0 is! T) {
      if (!value.isFinite ||
          value.abs() > 9007199254740991 ||
          value != value.truncateToDouble()) {
        throw ArgumentError('Expected a safe integer');
      }
      return value.toInt() as T;
    }
    if (0.0 is T && 0 is! T) return value.toDouble() as T;
  }
  return value as T;
}

const _flaxBinding0 = FlaxCallbackBinding.signature(
  [],
  flaxTickerFutureType,
  id: "callback:<>()->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding1 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding2 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("name", flaxStringType)],
  _flaxBinding1,
  id: "callback:<>(p:r:name:String:)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding3 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:Ticker",
);
const _flaxBinding4 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("originalTicker", _flaxBinding3)],
  flaxVoidType,
  id: "callback:<>(p:r:originalTicker:object:flax.core/sdk_scheduler#type:Ticker)->void:",
);
const _flaxBinding5 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxBoolType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:bool:)->void:",
);
const _flaxBinding6 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:Ticker",
  nullable: true,
);
const _flaxBinding7 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding6,
  id: "callback:<>()->object?:flax.core/sdk_scheduler#type:Ticker",
);
const _flaxBinding8 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("callback", flaxVoidCallbackType)],
  flaxVoidType,
  id: "callback:<>(p:r:callback:callback:<>()->void:)->void:",
);
const _flaxBinding9 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api3.Stream<void>>,
  item: flaxVoidType,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[void:]",
    _stream0Matches,
    _stream0Adapt,
  ),
);
const _flaxBinding10 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding9,
  id: "callback:<>()->stream:flax.core/flutter#type:Stream[void:]",
);
const _flaxBinding11 = FlaxTypeRef(
  "future",
  item: flaxVoidType,
  future: FlaxFutureBinding("void:", _future0Adapt),
);
const _flaxBinding12 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("action", flaxNullableAnyCallbackType)],
  _flaxBinding11,
  id: "callback:<>(p:r:action:callback:<>()->any?:)->future:[void:]",
);
const _flaxBinding13 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding11,
  id: "callback:<>()->future:[void:]",
);
const _flaxBinding14 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _PerformanceModeRequestHandle_dispose,
);
const _flaxBinding15 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:PerformanceModeRequestHandle",
  [],
  {"dispose": _flaxBinding14},
  constructors: {},
  create: _createPerformanceModeRequestHandle,
  matches: _isPerformanceModeRequestHandle,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding16 = FlaxGetter.plain("value", flaxIntType, _Priority_value);
const _flaxBinding17 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:Priority",
);
const _flaxBinding18 = <FlaxParameter>[
  FlaxParameter.required("offset", flaxIntType),
];
const _flaxBinding19 = FlaxInstanceMethod.plain(
  _flaxBinding18,
  _flaxBinding17,
  _Priority_operatorAdd,
);
const _flaxBinding20 = FlaxInstanceMethod.plain(
  _flaxBinding18,
  _flaxBinding17,
  _Priority_operatorSubtract,
);
const _flaxBinding21 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:Priority",
  [_flaxBinding16],
  {"operatorAdd": _flaxBinding19, "operatorSubtract": _flaxBinding20},
  constructors: {},
  create: _createPriority,
  matches: _isPriority,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding22 = FlaxGetter.plain(
  "forceFrames",
  flaxBoolType,
  _Ticker_forceFrames,
);
const _flaxBinding23 = FlaxGetter.plain("muted", flaxBoolType, _Ticker_muted);
const _flaxBinding24 = FlaxGetter.plain(
  "isTicking",
  flaxBoolType,
  _Ticker_isTicking,
);
const _flaxBinding25 = FlaxGetter.plain(
  "isActive",
  flaxBoolType,
  _Ticker_isActive,
);
const _flaxBinding26 = FlaxGetter.plain(
  "scheduled",
  flaxBoolType,
  _Ticker_scheduled,
);
const _flaxBinding27 = FlaxGetter.plain(
  "shouldScheduleTick",
  flaxBoolType,
  _Ticker_shouldScheduleTick,
);
const _flaxBinding28 = FlaxGetter.plain(
  "debugLabel",
  flaxNullableStringType,
  _Ticker_debugLabel,
);
const _flaxBinding29 = FlaxSetter(
  "forceFrames",
  flaxBoolType,
  _Ticker_set_forceFrames,
);
const _flaxBinding30 = FlaxSetter("muted", flaxBoolType, _Ticker_set_muted);
const _flaxBinding31 = FlaxInstanceMethod.shared(_flaxBinding0, _Ticker_start);
const _flaxBinding32 = FlaxInstanceMethod.shared(
  _flaxBinding2,
  _Ticker_describeForError,
);
const _flaxBinding33 = <FlaxParameter>[
  FlaxParameter("canceled", flaxBoolType, required: false, defaultValue: false),
];
const _flaxBinding34 = FlaxInstanceMethod.plain(
  _flaxBinding33,
  flaxVoidType,
  _Ticker_stop,
);
const _flaxBinding35 = <FlaxParameter>[
  FlaxParameter(
    "rescheduling",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding36 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Ticker_scheduleTick,
);
const _flaxBinding37 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _Ticker_unscheduleTick,
);
const _flaxBinding38 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _Ticker_absorbTicker,
);
const _flaxBinding39 = FlaxInstanceMethod.shared(flaxVoidCall, _Ticker_dispose);
const _flaxBinding40 = <FlaxParameter>[
  FlaxParameter(
    "debugIncludeStack",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding41 = FlaxInstanceMethod.plain(
  _flaxBinding40,
  flaxStringType,
  _Ticker_toString,
);
const _flaxBinding42 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("elapsed", flaxDurationType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api2.Duration>,
  id: "callback:<>(p:r:elapsed:object:flax.core/flutter#type:Duration)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api2.Duration>,
  matches: FlaxCallbackAdapters.matchesVoid1<api2.Duration>,
);
const _flaxBinding43 = FlaxTypeRef("callback", callback: _flaxBinding42);
const _flaxBinding44 = <FlaxParameter>[
  FlaxParameter.required("_onTick", _flaxBinding43),
  FlaxParameter("debugLabel", flaxNullableStringType, required: false),
];
const _flaxBinding45 = FlaxProxyMember(
  "start",
  0,
  _flaxBinding0,
  hasSuper: true,
);
const _flaxBinding46 = FlaxProxyMember(
  "describeForError",
  0,
  _flaxBinding2,
  hasSuper: true,
);
const _flaxBinding47 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "canceled",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(n:o:canceled:bool:)->void:",
);
const _flaxBinding48 = FlaxProxyMember(
  "stop",
  0,
  _flaxBinding47,
  hasSuper: true,
);
const _flaxBinding49 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "rescheduling",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(n:o:rescheduling:bool:)->void:",
);
const _flaxBinding50 = FlaxProxyMember(
  "scheduleTick",
  0,
  _flaxBinding49,
  hasSuper: true,
);
const _flaxBinding51 = FlaxProxyMember(
  "unscheduleTick",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding52 = FlaxProxyMember(
  "absorbTicker",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding53 = FlaxProxyMember(
  "dispose",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding54 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "debugIncludeStack",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxStringType,
  id: "callback:<>(n:o:debugIncludeStack:bool:)->String:",
);
const _flaxBinding55 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding54,
  hasSuper: true,
);
const _flaxBinding56 = FlaxProxyMember(
  "forceFrames",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding57 = FlaxProxyMember(
  "muted",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding58 = FlaxProxyMember(
  "isTicking",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding59 = FlaxProxyMember(
  "isActive",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding60 = FlaxProxyMember(
  "scheduled",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding61 = FlaxProxyMember(
  "shouldScheduleTick",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding62 = FlaxProxyMember(
  "debugLabel",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding63 = FlaxProxyMember(
  "forceFrames",
  2,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding64 = FlaxProxyMember(
  "muted",
  2,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding65 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:Ticker",
  [
    _flaxBinding22,
    _flaxBinding23,
    _flaxBinding24,
    _flaxBinding25,
    _flaxBinding26,
    _flaxBinding27,
    _flaxBinding28,
  ],
  {
    "start": _flaxBinding31,
    "describeForError": _flaxBinding32,
    "stop": _flaxBinding34,
    "scheduleTick": _flaxBinding36,
    "unscheduleTick": _flaxBinding37,
    "absorbTicker": _flaxBinding38,
    "dispose": _flaxBinding39,
    "toString": _flaxBinding41,
    "@super:start": FlaxInstanceMethod.shared(
      _flaxBinding0,
      _Ticker_super_start,
    ),
    "@super:describeForError": FlaxInstanceMethod.shared(
      _flaxBinding2,
      _Ticker_super_describeForError,
    ),
    "@super:stop": FlaxInstanceMethod.plain(
      _flaxBinding33,
      flaxVoidType,
      _Ticker_super_stop,
    ),
    "@super:scheduleTick": FlaxInstanceMethod.plain(
      _flaxBinding35,
      flaxVoidType,
      _Ticker_super_scheduleTick,
    ),
    "@super:unscheduleTick": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _Ticker_super_unscheduleTick,
    ),
    "@super:absorbTicker": FlaxInstanceMethod.shared(
      _flaxBinding4,
      _Ticker_super_absorbTicker,
    ),
    "@super:dispose": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _Ticker_super_dispose,
    ),
    "@super:toString": FlaxInstanceMethod.plain(
      _flaxBinding40,
      flaxStringType,
      _Ticker_super_toString,
    ),
    "@super:get:forceFrames": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _Ticker_super_get_forceFrames,
    ),
    "@super:get:muted": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _Ticker_super_get_muted,
    ),
    "@super:get:isTicking": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _Ticker_super_get_isTicking,
    ),
    "@super:get:isActive": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _Ticker_super_get_isActive,
    ),
    "@super:get:scheduled": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _Ticker_super_get_scheduled,
    ),
    "@super:get:shouldScheduleTick": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _Ticker_super_get_shouldScheduleTick,
    ),
    "@super:get:debugLabel": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _Ticker_super_get_debugLabel,
    ),
    "@super:set:forceFrames": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _Ticker_super_set_forceFrames,
    ),
    "@super:set:muted": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _Ticker_super_set_muted,
    ),
  },
  constructors: {"": _flaxBinding44, "@implementation": _flaxBinding44},
  create: _createTicker,
  matches: _isTicker,
  setters: [_flaxBinding29, _flaxBinding30],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding45,
    _flaxBinding46,
    _flaxBinding48,
    _flaxBinding50,
    _flaxBinding51,
    _flaxBinding52,
    _flaxBinding53,
    _flaxBinding55,
    _flaxBinding56,
    _flaxBinding57,
    _flaxBinding58,
    _flaxBinding59,
    _flaxBinding60,
    _flaxBinding61,
    _flaxBinding62,
    _flaxBinding63,
    _flaxBinding64,
  ]),
);
const _flaxBinding66 = FlaxGetter.plain(
  "ticker",
  _flaxBinding6,
  _TickerCanceled_ticker,
);
const _flaxBinding67 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TickerCanceled_toString,
);
const _flaxBinding68 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch0_super_call_toString,
);
const _flaxBinding69 = <FlaxParameter>[
  FlaxParameter("ticker", _flaxBinding6, required: false),
];
const _flaxBinding70 = FlaxProxyMember(
  "toString",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding71 = FlaxProxyMember(
  "ticker",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding72 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:TickerCanceled",
  [_flaxBinding66],
  {
    "toString": _flaxBinding67,
    "@super:toString": _flaxBinding68,
    "@super:get:ticker": FlaxInstanceMethod.shared(
      _flaxBinding7,
      _TickerCanceled_super_get_ticker,
    ),
  },
  constructors: {"": _flaxBinding69, "@implementation": _flaxBinding69},
  create: _createTickerCanceled,
  matches: _isTickerCanceled,
  setters: [],
  supertypes: ["dart:core::Object", "dart:core::Exception"],
  proxy: FlaxProxyBinding([_flaxBinding70, _flaxBinding71]),
);
const _flaxBinding73 = FlaxGetter.plain(
  "orCancel",
  _flaxBinding11,
  _TickerFuture_orCancel,
);
const _flaxBinding74 = FlaxInstanceMethod.shared(
  _flaxBinding8,
  _TickerFuture_whenCompleteOrCancel,
);
const _flaxBinding75 = FlaxInstanceMethod.shared(
  _flaxBinding10,
  _TickerFuture_asStream,
);
const _flaxBinding76 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("p0", flaxAnyType)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<Object, bool>,
  id: "callback:<>(p:r:p0:any:)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<Object, bool>,
  matches: FlaxCallbackAdapters.matches1<Object, bool>,
);
const _flaxBinding77 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding76,
);
const _flaxBinding78 = <FlaxParameter>[
  FlaxParameter.required("onError", flaxFunctionType),
  FlaxParameter("test", _flaxBinding77, required: false),
];
const _flaxBinding79 = FlaxInstanceMethod.plain(
  _flaxBinding78,
  _flaxBinding11,
  _TickerFuture_catchError,
);
const _flaxBinding80 = FlaxTypeRef(
  "futureOr",
  item: flaxNullableAnyType,
  future: FlaxFutureBinding("any?:", _future1Adapt),
);
const _flaxBinding81 = FlaxTypeRef("function", nullable: true);
const _flaxBinding82 = FlaxTypeRef(
  "futureOr",
  item: flaxVoidType,
  future: FlaxFutureBinding("void:", _future0Adapt),
);
const _flaxBinding83 = FlaxCallbackBinding(
  [],
  _flaxBinding82,
  _callback1,
  id: "callback:<>()->futureOr:[void:]",
  invoke: _callback1Invoke,
  matches: _callback1Matches,
);
const _flaxBinding84 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding83,
);
const _flaxBinding85 = <FlaxParameter>[
  FlaxParameter.required("timeLimit", flaxDurationType),
  FlaxParameter("onTimeout", _flaxBinding84, required: false),
];
const _flaxBinding86 = FlaxInstanceMethod.plain(
  _flaxBinding85,
  _flaxBinding11,
  _TickerFuture_timeout,
);
const _flaxBinding87 = FlaxInstanceMethod.shared(
  _flaxBinding12,
  _TickerFuture_whenComplete,
);
const _flaxBinding88 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TickerFuture_toString,
);
const _flaxBinding89 = <FlaxParameter>[];
const _flaxBinding90 = FlaxProxyMember(
  "whenCompleteOrCancel",
  0,
  _flaxBinding8,
  hasSuper: true,
);
const _flaxBinding91 = FlaxProxyMember(
  "asStream",
  0,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding92 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("onError", flaxFunctionType),
    FlaxCallbackParameter.plain(
      "test",
      _flaxBinding77,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding11,
  id: "callback:<>(p:r:onError:function:,n:o:test:callback?:<>(p:r:p0:any:)->bool:)->future:[void:]",
);
const _flaxBinding93 = FlaxProxyMember(
  "catchError",
  0,
  _flaxBinding92,
  hasSuper: true,
);
const _flaxBinding94 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxVoidType)],
  _flaxBinding80,
  _callback2,
  id: "callback:<>(p:r:value:void:)->futureOr:[any?:]",
  invoke: _callback2Invoke,
  matches: _callback2Matches,
);
const _flaxBinding95 = FlaxTypeRef("callback", callback: _flaxBinding94);
const _flaxBinding96 = FlaxTypeRef(
  "future",
  item: flaxNullableAnyType,
  future: FlaxFutureBinding("any?:", _future1Adapt),
);
const _flaxBinding97 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("timeLimit", flaxDurationType),
    FlaxCallbackParameter.plain(
      "onTimeout",
      _flaxBinding84,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding11,
  id: "callback:<>(p:r:timeLimit:object:flax.core/flutter#type:Duration,n:o:onTimeout:callback?:<>()->futureOr:[void:])->future:[void:]",
);
const _flaxBinding98 = FlaxProxyMember(
  "timeout",
  0,
  _flaxBinding97,
  hasSuper: true,
);
const _flaxBinding99 = FlaxProxyMember(
  "whenComplete",
  0,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding100 = FlaxProxyMember(
  "orCancel",
  1,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding101 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:TickerFuture",
  [_flaxBinding73],
  {
    "whenCompleteOrCancel": _flaxBinding74,
    "asStream": _flaxBinding75,
    "catchError": _flaxBinding79,
    "then": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "onValue",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("value", flaxVoidType)],
              _flaxBinding80,
              _callback0,
              id: "callback:<>(p:r:value:void:)->futureOr:[any?:]",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
        ),
        FlaxParameter("onError", _flaxBinding81, required: false),
      ],
      FlaxTypeRef(
        "future",
        item: flaxNullableAnyType,
        future: FlaxFutureBinding("any?:", _future1Adapt),
      ),
      _TickerFuture_then,
      genericFactory: _flaxGeneric_TickerFuture_then,
      ownerTypes: [],
    ),
    "timeout": _flaxBinding86,
    "whenComplete": _flaxBinding87,
    "toString": _flaxBinding88,
    "@super:whenCompleteOrCancel": FlaxInstanceMethod.shared(
      _flaxBinding8,
      _TickerFuture_super_whenCompleteOrCancel,
    ),
    "@super:asStream": FlaxInstanceMethod.shared(
      _flaxBinding10,
      _TickerFuture_super_asStream,
    ),
    "@super:catchError": FlaxInstanceMethod.plain(
      _flaxBinding78,
      _flaxBinding11,
      _TickerFuture_super_catchError,
    ),
    "@super:then": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "onValue",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("value", flaxVoidType)],
              _flaxBinding80,
              _callback0,
              id: "callback:<>(p:r:value:void:)->futureOr:[any?:]",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
        ),
        FlaxParameter("onError", _flaxBinding81, required: false),
      ],
      FlaxTypeRef(
        "future",
        item: flaxNullableAnyType,
        future: FlaxFutureBinding("any?:", _future1Adapt),
      ),
      _TickerFuture_super_then,
      genericFactory: _flaxGeneric_TickerFuture_super_then,
      ownerTypes: [],
    ),
    "@super:timeout": FlaxInstanceMethod.plain(
      _flaxBinding85,
      _flaxBinding11,
      _TickerFuture_super_timeout,
    ),
    "@super:whenComplete": FlaxInstanceMethod.shared(
      _flaxBinding12,
      _TickerFuture_super_whenComplete,
    ),
    "@super:toString": _flaxBinding68,
    "@super:get:orCancel": FlaxInstanceMethod.shared(
      _flaxBinding13,
      _TickerFuture_super_get_orCancel,
    ),
  },
  constructors: {
    "complete": _flaxBinding89,
    "@implementation": _flaxBinding89,
    "@implementation:complete": _flaxBinding89,
  },
  create: _createTickerFuture,
  matches: _isTickerFuture,
  setters: [],
  supertypes: ["dart:core::Object", "dart:async::Future"],
  proxy: FlaxProxyBinding([
    _flaxBinding90,
    _flaxBinding91,
    _flaxBinding93,
    FlaxProxyMember(
      "then",
      0,
      FlaxCallbackBinding(
        [
          FlaxCallbackParameter.plain("onValue", _flaxBinding95),
          FlaxCallbackParameter.plain(
            "onError",
            _flaxBinding81,
            required: false,
            positional: false,
          ),
        ],
        _flaxBinding96,
        _callback3,
        id: "callback:<R:any?:=any?:>(p:r:onValue:callback:<>(p:r:value:void:)->futureOr:[any?:],n:o:onError:function?:)->future:[any?:]",
        invoke: _callback3Invoke,
        matches: _callback3Matches,
        genericFactory: _callback3Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding98,
    _flaxBinding99,
    _flaxBinding70,
    _flaxBinding100,
  ]),
);
const _flaxBinding102 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:SchedulerBinding",
);
