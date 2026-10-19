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
    _flaxBinding29,
    _flaxBinding36,
    _flaxBinding81,
    _flaxBinding87,
    _flaxBinding118,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:debugPrintBeginFrameBanner",
      [],
      _flaxBinding9,
      _read_debugPrintBeginFrameBanner,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:debugPrintEndFrameBanner",
      [],
      _flaxBinding9,
      _read_debugPrintEndFrameBanner,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:debugPrintScheduleFrameStacks",
      [],
      _flaxBinding9,
      _read_debugPrintScheduleFrameStacks,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:debugTracePostFrameCallbacks",
      [],
      _flaxBinding9,
      _read_debugTracePostFrameCallbacks,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#read:timeDilation",
      [],
      _flaxBinding119,
      _read_timeDilation,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugAssertAllSchedulerVarsUnset",
      [FlaxParameter("reason", _flaxBinding2, required: true)],
      _flaxBinding9,
      _function_debugAssertAllSchedulerVarsUnset,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:defaultSchedulingStrategy",
      [
        FlaxParameter("priority", _flaxBinding30, required: true),
        FlaxParameter("scheduler", _flaxBinding120, required: true),
      ],
      _flaxBinding9,
      _function_defaultSchedulingStrategy,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugPrintBeginFrameBanner%3D",
      [FlaxParameter("value", _flaxBinding9, required: true)],
      _flaxBinding5,
      _write_debugPrintBeginFrameBanner,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugPrintEndFrameBanner%3D",
      [FlaxParameter("value", _flaxBinding9, required: true)],
      _flaxBinding5,
      _write_debugPrintEndFrameBanner,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugPrintScheduleFrameStacks%3D",
      [FlaxParameter("value", _flaxBinding9, required: true)],
      _flaxBinding5,
      _write_debugPrintScheduleFrameStacks,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:debugTracePostFrameCallbacks%3D",
      [FlaxParameter("value", _flaxBinding9, required: true)],
      _flaxBinding5,
      _write_debugTracePostFrameCallbacks,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_scheduler#function:timeDilation%3D",
      [FlaxParameter("value", _flaxBinding119, required: true)],
      _flaxBinding5,
      _write_timeDilation,
    ),
  ],
  constants: [
    FlaxConstantGroup(_flaxBinding32, {
      "flax.core/sdk_scheduler#read:Priority.idle": api.Priority.idle,
      "flax.core/sdk_scheduler#read:Priority.animation": api.Priority.animation,
      "flax.core/sdk_scheduler#read:Priority.touch": api.Priority.touch,
    }),
    FlaxConstantGroup(_flaxBinding30, {
      "flax.core/sdk_scheduler#read:Priority.kMaxOffset":
          api.Priority.kMaxOffset,
    }),
  ],
  moduleId: "flax.core/sdk_scheduler",
  dependencyModules: ["flax.core/flutter", "flax.core/sdk_foundation"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
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
    if (identical(canceled, _flaxOmitted)) {
      super.stop();
      return;
    }
    super.stop(canceled: canceled as bool);
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
    if (identical(rescheduling, _flaxOmitted)) {
      super.scheduleTick();
      return;
    }
    super.scheduleTick(rescheduling: rescheduling as bool);
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
    if (identical(debugIncludeStack, _flaxOmitted)) {
      return super.toString();
    }
    return super.toString(debugIncludeStack: debugIncludeStack as bool);
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
    if (identical(test, _flaxOmitted)) {
      return super.catchError(onError);
    }
    return super.catchError(onError, test: test as bool Function(Object p0)?);
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
    if (identical(onError, _flaxOmitted)) {
      return super.then<R>(onValue);
    }
    return super.then<R>(onValue, onError: onError as Function?);
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
    if (identical(onTimeout, _flaxOmitted)) {
      return super.timeout(timeLimit);
    }
    return super.timeout(
      timeLimit,
      onTimeout: onTimeout as api3.FutureOr<void> Function()?,
    );
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
      FlaxCallbackParameter(
        "onValue",
        types.define<api3.FutureOr<R> Function(void value)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "value",
                  FlaxTypeRef("void"),
                  required: true,
                  positional: true,
                ),
              ],
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
        required: true,
        positional: true,
      ),
      FlaxCallbackParameter(
        "onError",
        FlaxTypeRef("function", nullable: true),
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

      return FlaxInstanceMethod(
        [
          FlaxParameter(
            "onValue",
            types.define<api3.FutureOr<_Method0> Function(void value)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "value",
                      FlaxTypeRef("void"),
                      required: true,
                      positional: true,
                    ),
                  ],
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
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onError",
            FlaxTypeRef("function", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
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

      return FlaxInstanceMethod(
        [
          FlaxParameter(
            "onValue",
            types.define<api3.FutureOr<_Method0> Function(void value)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "value",
                      FlaxTypeRef("void"),
                      required: true,
                      positional: true,
                    ),
                  ],
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
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onError",
            FlaxTypeRef("function", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
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
              FlaxCallbackParameter(
                "elapsed",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
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
      FlaxCallbackParameter(
        "onValue",
        types.define<api3.FutureOr<_Callback0> Function(void value)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "value",
                  FlaxTypeRef("void"),
                  required: true,
                  positional: true,
                ),
              ],
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
        required: true,
        positional: true,
      ),
      FlaxCallbackParameter(
        "onError",
        FlaxTypeRef("function", nullable: true),
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

const _flaxBinding0 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding1 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding0,
  id: "callback:<>()->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding2 = FlaxTypeRef("String");
const _flaxBinding3 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding4 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding2,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding3,
  id: "callback:<>(p:r:name:String:)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding5 = FlaxTypeRef("void");
const _flaxBinding6 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding5,
  id: "callback:<>()->void:",
);
const _flaxBinding7 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:Ticker",
);
const _flaxBinding8 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "originalTicker",
      _flaxBinding7,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  id: "callback:<>(p:r:originalTicker:object:flax.core/sdk_scheduler#type:Ticker)->void:",
);
const _flaxBinding9 = FlaxTypeRef("bool");
const _flaxBinding10 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding9,
  id: "callback:<>()->bool:",
);
const _flaxBinding11 = FlaxTypeRef("String", nullable: true);
const _flaxBinding12 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding11,
  id: "callback:<>()->String?:",
);
const _flaxBinding13 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding9,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  id: "callback:<>(p:r:value:bool:)->void:",
);
const _flaxBinding14 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding2,
  id: "callback:<>()->String:",
);
const _flaxBinding15 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:Ticker",
  nullable: true,
);
const _flaxBinding16 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding15,
  id: "callback:<>()->object?:flax.core/sdk_scheduler#type:Ticker",
);
const _flaxBinding17 = FlaxCallbackBinding(
  [],
  _flaxBinding5,
  FlaxCallbackAdapters.wrapVoid0,
  id: "callback:<>()->void:",
  invoke: FlaxCallbackAdapters.invokeVoid0,
  matches: FlaxCallbackAdapters.matchesVoid0,
);
const _flaxBinding18 = FlaxTypeRef("callback", callback: _flaxBinding17);
const _flaxBinding19 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "callback",
      _flaxBinding18,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  id: "callback:<>(p:r:callback:callback:<>()->void:)->void:",
);
const _flaxBinding20 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api3.Stream<void>>,
  item: _flaxBinding5,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[void:]",
    _stream0Matches,
    _stream0Adapt,
  ),
);
const _flaxBinding21 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding20,
  id: "callback:<>()->stream:flax.core/flutter#type:Stream[void:]",
);
const _flaxBinding22 = FlaxTypeRef("any", nullable: true);
const _flaxBinding23 = FlaxCallbackBinding(
  [],
  _flaxBinding22,
  FlaxCallbackAdapters.wrap0<Object?>,
  id: "callback:<>()->any?:",
  invoke: FlaxCallbackAdapters.invoke0<Object?>,
  matches: FlaxCallbackAdapters.matches0<Object?>,
);
const _flaxBinding24 = FlaxTypeRef("callback", callback: _flaxBinding23);
const _flaxBinding25 = FlaxTypeRef(
  "future",
  item: _flaxBinding5,
  future: FlaxFutureBinding("void:", _future0Adapt),
);
const _flaxBinding26 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "action",
      _flaxBinding24,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding25,
  id: "callback:<>(p:r:action:callback:<>()->any?:)->future:[void:]",
);
const _flaxBinding27 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding25,
  id: "callback:<>()->future:[void:]",
);
const _flaxBinding28 = FlaxInstanceMethod.signature(
  _flaxBinding6,
  _PerformanceModeRequestHandle_dispose,
);
const _flaxBinding29 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:PerformanceModeRequestHandle",
  [],
  {"dispose": _flaxBinding28},
  constructors: {},
  create: _createPerformanceModeRequestHandle,
  matches: _isPerformanceModeRequestHandle,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding30 = FlaxTypeRef("int");
const _flaxBinding31 = FlaxGetter("value", _flaxBinding30, _Priority_value);
const _flaxBinding32 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:Priority",
);
const _flaxBinding33 = <FlaxParameter>[
  FlaxParameter("offset", _flaxBinding30, required: true),
];
const _flaxBinding34 = FlaxInstanceMethod(
  _flaxBinding33,
  _flaxBinding32,
  _Priority_operatorAdd,
);
const _flaxBinding35 = FlaxInstanceMethod(
  _flaxBinding33,
  _flaxBinding32,
  _Priority_operatorSubtract,
);
const _flaxBinding36 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:Priority",
  [_flaxBinding31],
  {"operatorAdd": _flaxBinding34, "operatorSubtract": _flaxBinding35},
  constructors: {},
  create: _createPriority,
  matches: _isPriority,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding37 = FlaxGetter(
  "forceFrames",
  _flaxBinding9,
  _Ticker_forceFrames,
);
const _flaxBinding38 = FlaxGetter("muted", _flaxBinding9, _Ticker_muted);
const _flaxBinding39 = FlaxGetter(
  "isTicking",
  _flaxBinding9,
  _Ticker_isTicking,
);
const _flaxBinding40 = FlaxGetter("isActive", _flaxBinding9, _Ticker_isActive);
const _flaxBinding41 = FlaxGetter(
  "scheduled",
  _flaxBinding9,
  _Ticker_scheduled,
);
const _flaxBinding42 = FlaxGetter(
  "shouldScheduleTick",
  _flaxBinding9,
  _Ticker_shouldScheduleTick,
);
const _flaxBinding43 = FlaxGetter(
  "debugLabel",
  _flaxBinding11,
  _Ticker_debugLabel,
);
const _flaxBinding44 = FlaxSetter(
  "forceFrames",
  _flaxBinding9,
  _Ticker_set_forceFrames,
);
const _flaxBinding45 = FlaxSetter("muted", _flaxBinding9, _Ticker_set_muted);
const _flaxBinding46 = FlaxInstanceMethod.signature(
  _flaxBinding1,
  _Ticker_start,
);
const _flaxBinding47 = FlaxInstanceMethod.signature(
  _flaxBinding4,
  _Ticker_describeForError,
);
const _flaxBinding48 = <FlaxParameter>[
  FlaxParameter(
    "canceled",
    _flaxBinding9,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding49 = FlaxInstanceMethod(
  _flaxBinding48,
  _flaxBinding5,
  _Ticker_stop,
);
const _flaxBinding50 = <FlaxParameter>[
  FlaxParameter(
    "rescheduling",
    _flaxBinding9,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding51 = FlaxInstanceMethod(
  _flaxBinding50,
  _flaxBinding5,
  _Ticker_scheduleTick,
);
const _flaxBinding52 = FlaxInstanceMethod.signature(
  _flaxBinding6,
  _Ticker_unscheduleTick,
);
const _flaxBinding53 = FlaxInstanceMethod.signature(
  _flaxBinding8,
  _Ticker_absorbTicker,
);
const _flaxBinding54 = FlaxInstanceMethod.signature(
  _flaxBinding6,
  _Ticker_dispose,
);
const _flaxBinding55 = <FlaxParameter>[
  FlaxParameter(
    "debugIncludeStack",
    _flaxBinding9,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding56 = FlaxInstanceMethod(
  _flaxBinding55,
  _flaxBinding2,
  _Ticker_toString,
);
const _flaxBinding57 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
);
const _flaxBinding58 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "elapsed",
      _flaxBinding57,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding5,
  FlaxCallbackAdapters.wrapVoid1<api2.Duration>,
  id: "callback:<>(p:r:elapsed:object:flax.core/flutter#type:Duration)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api2.Duration>,
  matches: FlaxCallbackAdapters.matchesVoid1<api2.Duration>,
);
const _flaxBinding59 = FlaxTypeRef("callback", callback: _flaxBinding58);
const _flaxBinding60 = <FlaxParameter>[
  FlaxParameter("_onTick", _flaxBinding59, required: true),
  FlaxParameter("debugLabel", _flaxBinding11, required: false),
];
const _flaxBinding61 = FlaxProxyMember(
  "start",
  0,
  _flaxBinding1,
  hasSuper: true,
);
const _flaxBinding62 = FlaxProxyMember(
  "describeForError",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding63 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "canceled",
      _flaxBinding9,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding5,
  id: "callback:<>(n:o:canceled:bool:)->void:",
);
const _flaxBinding64 = FlaxProxyMember(
  "stop",
  0,
  _flaxBinding63,
  hasSuper: true,
);
const _flaxBinding65 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rescheduling",
      _flaxBinding9,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding5,
  id: "callback:<>(n:o:rescheduling:bool:)->void:",
);
const _flaxBinding66 = FlaxProxyMember(
  "scheduleTick",
  0,
  _flaxBinding65,
  hasSuper: true,
);
const _flaxBinding67 = FlaxProxyMember(
  "unscheduleTick",
  0,
  _flaxBinding6,
  hasSuper: true,
);
const _flaxBinding68 = FlaxProxyMember(
  "absorbTicker",
  0,
  _flaxBinding8,
  hasSuper: true,
);
const _flaxBinding69 = FlaxProxyMember(
  "dispose",
  0,
  _flaxBinding6,
  hasSuper: true,
);
const _flaxBinding70 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "debugIncludeStack",
      _flaxBinding9,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding2,
  id: "callback:<>(n:o:debugIncludeStack:bool:)->String:",
);
const _flaxBinding71 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding70,
  hasSuper: true,
);
const _flaxBinding72 = FlaxProxyMember(
  "forceFrames",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding73 = FlaxProxyMember(
  "muted",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding74 = FlaxProxyMember(
  "isTicking",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding75 = FlaxProxyMember(
  "isActive",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding76 = FlaxProxyMember(
  "scheduled",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding77 = FlaxProxyMember(
  "shouldScheduleTick",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding78 = FlaxProxyMember(
  "debugLabel",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding79 = FlaxProxyMember(
  "forceFrames",
  2,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding80 = FlaxProxyMember(
  "muted",
  2,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding81 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:Ticker",
  [
    _flaxBinding37,
    _flaxBinding38,
    _flaxBinding39,
    _flaxBinding40,
    _flaxBinding41,
    _flaxBinding42,
    _flaxBinding43,
  ],
  {
    "start": _flaxBinding46,
    "describeForError": _flaxBinding47,
    "stop": _flaxBinding49,
    "scheduleTick": _flaxBinding51,
    "unscheduleTick": _flaxBinding52,
    "absorbTicker": _flaxBinding53,
    "dispose": _flaxBinding54,
    "toString": _flaxBinding56,
    "@super:start": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _Ticker_super_start,
    ),
    "@super:describeForError": FlaxInstanceMethod.signature(
      _flaxBinding4,
      _Ticker_super_describeForError,
    ),
    "@super:stop": FlaxInstanceMethod(
      _flaxBinding48,
      _flaxBinding5,
      _Ticker_super_stop,
    ),
    "@super:scheduleTick": FlaxInstanceMethod(
      _flaxBinding50,
      _flaxBinding5,
      _Ticker_super_scheduleTick,
    ),
    "@super:unscheduleTick": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _Ticker_super_unscheduleTick,
    ),
    "@super:absorbTicker": FlaxInstanceMethod.signature(
      _flaxBinding8,
      _Ticker_super_absorbTicker,
    ),
    "@super:dispose": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _Ticker_super_dispose,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding55,
      _flaxBinding2,
      _Ticker_super_toString,
    ),
    "@super:get:forceFrames": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _Ticker_super_get_forceFrames,
    ),
    "@super:get:muted": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _Ticker_super_get_muted,
    ),
    "@super:get:isTicking": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _Ticker_super_get_isTicking,
    ),
    "@super:get:isActive": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _Ticker_super_get_isActive,
    ),
    "@super:get:scheduled": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _Ticker_super_get_scheduled,
    ),
    "@super:get:shouldScheduleTick": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _Ticker_super_get_shouldScheduleTick,
    ),
    "@super:get:debugLabel": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _Ticker_super_get_debugLabel,
    ),
    "@super:set:forceFrames": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding9, required: true)],
      const FlaxTypeRef("void"),
      _Ticker_super_set_forceFrames,
    ),
    "@super:set:muted": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding9, required: true)],
      const FlaxTypeRef("void"),
      _Ticker_super_set_muted,
    ),
  },
  constructors: {"@implementation": _flaxBinding60},
  create: _createTicker,
  matches: _isTicker,
  setters: [_flaxBinding44, _flaxBinding45],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding61,
    _flaxBinding62,
    _flaxBinding64,
    _flaxBinding66,
    _flaxBinding67,
    _flaxBinding68,
    _flaxBinding69,
    _flaxBinding71,
    _flaxBinding72,
    _flaxBinding73,
    _flaxBinding74,
    _flaxBinding75,
    _flaxBinding76,
    _flaxBinding77,
    _flaxBinding78,
    _flaxBinding79,
    _flaxBinding80,
  ]),
);
const _flaxBinding82 = FlaxGetter(
  "ticker",
  _flaxBinding15,
  _TickerCanceled_ticker,
);
const _flaxBinding83 = FlaxInstanceMethod.signature(
  _flaxBinding14,
  _TickerCanceled_toString,
);
const _flaxBinding84 = <FlaxParameter>[
  FlaxParameter("ticker", _flaxBinding15, required: false),
];
const _flaxBinding85 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding86 = FlaxProxyMember(
  "ticker",
  1,
  _flaxBinding16,
  hasSuper: true,
);
const _flaxBinding87 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:TickerCanceled",
  [_flaxBinding82],
  {
    "toString": _flaxBinding83,
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding14,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:ticker": FlaxInstanceMethod.signature(
      _flaxBinding16,
      _TickerCanceled_super_get_ticker,
    ),
  },
  constructors: {"@implementation": _flaxBinding84},
  create: _createTickerCanceled,
  matches: _isTickerCanceled,
  setters: [],
  supertypes: ["dart:core::Object", "dart:core::Exception"],
  proxy: FlaxProxyBinding([_flaxBinding85, _flaxBinding86]),
);
const _flaxBinding88 = FlaxGetter(
  "orCancel",
  _flaxBinding25,
  _TickerFuture_orCancel,
);
const _flaxBinding89 = FlaxInstanceMethod.signature(
  _flaxBinding19,
  _TickerFuture_whenCompleteOrCancel,
);
const _flaxBinding90 = FlaxInstanceMethod.signature(
  _flaxBinding21,
  _TickerFuture_asStream,
);
const _flaxBinding91 = FlaxTypeRef("function");
const _flaxBinding92 = FlaxTypeRef("any");
const _flaxBinding93 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "p0",
      _flaxBinding92,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding9,
  FlaxCallbackAdapters.wrap1<Object, bool>,
  id: "callback:<>(p:r:p0:any:)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<Object, bool>,
  matches: FlaxCallbackAdapters.matches1<Object, bool>,
);
const _flaxBinding94 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding93,
);
const _flaxBinding95 = <FlaxParameter>[
  FlaxParameter("onError", _flaxBinding91, required: true),
  FlaxParameter("test", _flaxBinding94, required: false),
];
const _flaxBinding96 = FlaxInstanceMethod(
  _flaxBinding95,
  _flaxBinding25,
  _TickerFuture_catchError,
);
const _flaxBinding97 = FlaxTypeRef(
  "futureOr",
  item: _flaxBinding22,
  future: FlaxFutureBinding("any?:", _future1Adapt),
);
const _flaxBinding98 = FlaxTypeRef("function", nullable: true);
const _flaxBinding99 = FlaxTypeRef(
  "futureOr",
  item: _flaxBinding5,
  future: FlaxFutureBinding("void:", _future0Adapt),
);
const _flaxBinding100 = FlaxCallbackBinding(
  [],
  _flaxBinding99,
  _callback1,
  id: "callback:<>()->futureOr:[void:]",
  invoke: _callback1Invoke,
  matches: _callback1Matches,
);
const _flaxBinding101 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding100,
);
const _flaxBinding102 = <FlaxParameter>[
  FlaxParameter("timeLimit", _flaxBinding57, required: true),
  FlaxParameter("onTimeout", _flaxBinding101, required: false),
];
const _flaxBinding103 = FlaxInstanceMethod(
  _flaxBinding102,
  _flaxBinding25,
  _TickerFuture_timeout,
);
const _flaxBinding104 = FlaxInstanceMethod.signature(
  _flaxBinding26,
  _TickerFuture_whenComplete,
);
const _flaxBinding105 = FlaxInstanceMethod.signature(
  _flaxBinding14,
  _TickerFuture_toString,
);
const _flaxBinding106 = <FlaxParameter>[];
const _flaxBinding107 = FlaxProxyMember(
  "whenCompleteOrCancel",
  0,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding108 = FlaxProxyMember(
  "asStream",
  0,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding109 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "onError",
      _flaxBinding91,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "test",
      _flaxBinding94,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding25,
  id: "callback:<>(p:r:onError:function:,n:o:test:callback?:<>(p:r:p0:any:)->bool:)->future:[void:]",
);
const _flaxBinding110 = FlaxProxyMember(
  "catchError",
  0,
  _flaxBinding109,
  hasSuper: true,
);
const _flaxBinding111 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding5,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding97,
  _callback2,
  id: "callback:<>(p:r:value:void:)->futureOr:[any?:]",
  invoke: _callback2Invoke,
  matches: _callback2Matches,
);
const _flaxBinding112 = FlaxTypeRef("callback", callback: _flaxBinding111);
const _flaxBinding113 = FlaxTypeRef(
  "future",
  item: _flaxBinding22,
  future: FlaxFutureBinding("any?:", _future1Adapt),
);
const _flaxBinding114 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "timeLimit",
      _flaxBinding57,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "onTimeout",
      _flaxBinding101,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding25,
  id: "callback:<>(p:r:timeLimit:object:flax.core/flutter#type:Duration,n:o:onTimeout:callback?:<>()->futureOr:[void:])->future:[void:]",
);
const _flaxBinding115 = FlaxProxyMember(
  "timeout",
  0,
  _flaxBinding114,
  hasSuper: true,
);
const _flaxBinding116 = FlaxProxyMember(
  "whenComplete",
  0,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding117 = FlaxProxyMember(
  "orCancel",
  1,
  _flaxBinding27,
  hasSuper: true,
);
const _flaxBinding118 = FlaxObjectBinding(
  "flax.core/sdk_scheduler#type:TickerFuture",
  [_flaxBinding88],
  {
    "whenCompleteOrCancel": _flaxBinding89,
    "asStream": _flaxBinding90,
    "catchError": _flaxBinding96,
    "then": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "onValue",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "value",
                  _flaxBinding5,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding97,
              _callback0,
              id: "callback:<>(p:r:value:void:)->futureOr:[any?:]",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
          required: true,
        ),
        FlaxParameter("onError", _flaxBinding98, required: false),
      ],
      FlaxTypeRef(
        "future",
        item: _flaxBinding22,
        future: FlaxFutureBinding("any?:", _future1Adapt),
      ),
      _TickerFuture_then,
      genericFactory: _flaxGeneric_TickerFuture_then,
      ownerTypes: [],
    ),
    "timeout": _flaxBinding103,
    "whenComplete": _flaxBinding104,
    "toString": _flaxBinding105,
    "@super:whenCompleteOrCancel": FlaxInstanceMethod.signature(
      _flaxBinding19,
      _TickerFuture_super_whenCompleteOrCancel,
    ),
    "@super:asStream": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _TickerFuture_super_asStream,
    ),
    "@super:catchError": FlaxInstanceMethod(
      _flaxBinding95,
      _flaxBinding25,
      _TickerFuture_super_catchError,
    ),
    "@super:then": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "onValue",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "value",
                  _flaxBinding5,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding97,
              _callback0,
              id: "callback:<>(p:r:value:void:)->futureOr:[any?:]",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
          required: true,
        ),
        FlaxParameter("onError", _flaxBinding98, required: false),
      ],
      FlaxTypeRef(
        "future",
        item: _flaxBinding22,
        future: FlaxFutureBinding("any?:", _future1Adapt),
      ),
      _TickerFuture_super_then,
      genericFactory: _flaxGeneric_TickerFuture_super_then,
      ownerTypes: [],
    ),
    "@super:timeout": FlaxInstanceMethod(
      _flaxBinding102,
      _flaxBinding25,
      _TickerFuture_super_timeout,
    ),
    "@super:whenComplete": FlaxInstanceMethod.signature(
      _flaxBinding26,
      _TickerFuture_super_whenComplete,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding14,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:orCancel": FlaxInstanceMethod.signature(
      _flaxBinding27,
      _TickerFuture_super_get_orCancel,
    ),
  },
  constructors: {
    "@implementation": _flaxBinding106,
    "@implementation:complete": _flaxBinding106,
  },
  create: _createTickerFuture,
  matches: _isTickerFuture,
  setters: [],
  supertypes: ["dart:core::Object", "dart:async::Future"],
  proxy: FlaxProxyBinding([
    _flaxBinding107,
    _flaxBinding108,
    _flaxBinding110,
    FlaxProxyMember(
      "then",
      0,
      FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            "onValue",
            _flaxBinding112,
            required: true,
            positional: true,
          ),
          FlaxCallbackParameter(
            "onError",
            _flaxBinding98,
            required: false,
            positional: false,
          ),
        ],
        _flaxBinding113,
        _callback3,
        id: "callback:<R:any?:=any?:>(p:r:onValue:callback:<>(p:r:value:void:)->futureOr:[any?:],n:o:onError:function?:)->future:[any?:]",
        invoke: _callback3Invoke,
        matches: _callback3Matches,
        genericFactory: _callback3Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding115,
    _flaxBinding116,
    _flaxBinding85,
    _flaxBinding117,
  ]),
);
const _flaxBinding119 = FlaxTypeRef("double");
const _flaxBinding120 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:SchedulerBinding",
);
