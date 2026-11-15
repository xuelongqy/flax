// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_import, unnecessary_cast, deprecated_member_use
import 'dart:core';
import 'dart:async';

import 'package:flax/bindings.dart';

import 'dart:async' as t0;
import 'dart:core' as t1;
import 'dart:typed_data' as t2;
import 'dart:ui' as t3;

import 'package:flutter/foundation.dart' as t4;
import 'package:flutter/gestures.dart' as t5;
import 'package:flutter/painting.dart' as t6;
import 'package:flutter/rendering.dart' as t7;
import 'package:flutter/scheduler.dart' as t8;
import 'package:flutter/semantics.dart' as t9;
import 'package:flutter/services.dart' as t10;
import 'package:flutter/widgets.dart' as t11;

Future<Object?> flaxAdapter0Adapt(Future<Object?> value) =>
    value.then<Map<String, Object?>>((value) => value as Map<String, Object?>);
Future<Object?> flaxAdapter1Adapt(Future<Object?> value) =>
    value.then<Object>((value) => value as Object);
Future<Object?> flaxAdapter2Adapt(Future<Object?> value) =>
    value.then<String>((value) => value as String);
Future<Object?> flaxAdapter3Adapt(Future<Object?> value) =>
    value.then<t2.ByteData?>((value) => value as t2.ByteData?);
Future<Object?> flaxAdapter4Adapt(Future<Object?> value) =>
    value.then<t2.Uint8List>((value) => value as t2.Uint8List);
Future<Object?> flaxAdapter5Adapt(Future<Object?> value) =>
    value.then<t3.AppExitResponse>((value) => value as t3.AppExitResponse);
Future<Object?> flaxAdapter6Adapt(Future<Object?> value) =>
    value.then<t3.Codec>((value) => value as t3.Codec);
Future<Object?> flaxAdapter7Adapt(Future<Object?> value) =>
    value.then<t3.Image>((value) => value as t3.Image);
Future<Object?> flaxAdapter8Adapt(Future<Object?> value) =>
    value.then<t3.ImmutableBuffer>((value) => value as t3.ImmutableBuffer);
Future<Object?> flaxAdapter9Adapt(Future<Object?> value) =>
    value.then<t6.ImageCacheStatus?>((value) => value as t6.ImageCacheStatus?);
Future<Object?> flaxAdapter10Adapt(Future<Object?> value) => value
    .then<t11.RoutePopDisposition>((value) => value as t11.RoutePopDisposition);
Future<Object?> flaxAdapter11Adapt(Future<Object?> value) =>
    value.then<bool>((value) => value as bool);
Future<Object?> flaxAdapter12Adapt(Future<Object?> value) =>
    value.then<double>((value) => value as double);
Future<Object?> flaxAdapter13Adapt(Future<Object?> value) =>
    value.then<int>((value) => value as int);
Future<Object?> flaxAdapter14Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> flaxAdapter15Adapt(Future<Object?> value) => value;
Object flaxAdapter16(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<String>((value) => value as String);
};
bool flaxAdapter16Matches(Object value) => value is Future<String> Function();
Object? flaxAdapter16Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<String> Function())();
}

Object flaxAdapter17(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<bool>((value) => value as bool);
};
bool flaxAdapter17Matches(Object value) => value is Future<bool> Function();
Object? flaxAdapter17Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<bool> Function())();
}

Object flaxAdapter18(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<double>((value) => value as double);
};
bool flaxAdapter18Matches(Object value) => value is Future<double> Function();
Object? flaxAdapter18Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<double> Function())();
}

Object flaxAdapter19(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool flaxAdapter19Matches(Object value) => value is Future<void> Function();
Object? flaxAdapter19Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function())();
}

Object flaxAdapter20(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return _flaxBridgeCallback.call(positional, named);
};
bool flaxAdapter20Matches(Object value) => value is Object? Function();
Object? flaxAdapter20Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function())();
}

Object flaxAdapter21(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return _flaxBridgeCallback.call(positional, named) as t0.FutureOr<Object?>;
};
bool flaxAdapter21Matches(Object value) =>
    value is t0.FutureOr<Object?> Function();
Object? flaxAdapter21Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as t0.FutureOr<Object?> Function())();
}

Object flaxAdapter22(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return _flaxBridgeCallback.call(positional, named) as t0.FutureOr<void>;
};
bool flaxAdapter22Matches(Object value) =>
    value is t0.FutureOr<void> Function();
Object? flaxAdapter22Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as t0.FutureOr<void> Function())();
}

Object flaxAdapter23(FlaxCallback _flaxBridgeCallback) =>
    (Map<String, String> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
          .then<Map<String, Object?>>((value) => value as Map<String, Object?>);
    };
bool flaxAdapter23Matches(Object value) =>
    value
        is Future<Map<String, Object?>> Function(
          Map<String, String> parameters,
        );
Object? flaxAdapter23Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as Future<Map<String, Object?>> Function(Map<String, String> parameters))(
    positional[0] as Map<String, String>,
  );
}

Object flaxAdapter24(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  _flaxBridgeCallback.call(positional, named);
};
bool flaxAdapter24Matches(Object value) => value is void Function(Object? data);
Object? flaxAdapter24Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? data))(positional[0]);
  return null;
}

Object flaxAdapter25(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  _flaxBridgeCallback.call(positional, named);
};
bool flaxAdapter25Matches(Object value) =>
    value is void Function(Object? element);
Object? flaxAdapter25Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? element))(positional[0]);
  return null;
}

Object flaxAdapter26(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  _flaxBridgeCallback.call(positional, named);
};
bool flaxAdapter26Matches(Object value) =>
    value is void Function(Object? result);
Object? flaxAdapter26Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? result))(positional[0]);
  return null;
}

Object flaxAdapter27(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  _flaxBridgeCallback.call(positional, named);
};
bool flaxAdapter27Matches(Object value) =>
    value is void Function(Object? value);
Object? flaxAdapter27Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? value))(positional[0]);
  return null;
}

Object flaxAdapter28(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as Iterable<Object?>;
};
bool flaxAdapter28Matches(Object value) =>
    value is Iterable<Object?> Function(Object? element);
Object? flaxAdapter28Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Iterable<Object?> Function(Object? element))(
    positional[0],
  );
}

Object flaxAdapter29(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as t0.FutureOr<Object?>;
};
bool flaxAdapter29Matches(Object value) =>
    value is t0.FutureOr<Object?> Function(Object? value);
Object? flaxAdapter29Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as t0.FutureOr<Object?> Function(Object? value))(
    positional[0],
  );
}

Object flaxAdapter30(FlaxCallback _flaxBridgeCallback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as bool;
};
bool flaxAdapter30Matches(Object value) =>
    value is bool Function(Object? element);
Object? flaxAdapter30Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object flaxAdapter31(FlaxCallback _flaxBridgeCallback) => (String p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool flaxAdapter31Matches(Object value) =>
    value is Future<void> Function(String value);
Object? flaxAdapter31Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function(String value))(
    positional[0] as String,
  );
}

Object flaxAdapter32(FlaxCallback _flaxBridgeCallback) => (t7.Constraints p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  _flaxBridgeCallback.call(positional, named);
};
bool flaxAdapter32Matches(Object value) =>
    value is void Function(t7.Constraints constraints);
Object? flaxAdapter32Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(t7.Constraints constraints))(
    positional[0] as t7.Constraints,
  );
  return null;
}

Object flaxAdapter33(FlaxCallback _flaxBridgeCallback) =>
    (t11.BuildContext p0, Object? p1, t11.Widget? p2) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      return _flaxBridgeCallback.call(positional, named) as t11.Widget;
    };
bool flaxAdapter33Matches(Object value) =>
    value
        is t11.Widget Function(
          t11.BuildContext context,
          Object? value,
          t11.Widget? child,
        );
Object? flaxAdapter33Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as t11.Widget Function(
        t11.BuildContext context,
        Object? value,
        t11.Widget? child,
      ))(
    positional[0] as t11.BuildContext,
    positional[1],
    positional[2] as t11.Widget?,
  );
}

Object flaxAdapter34(FlaxCallback _flaxBridgeCallback) =>
    (t11.BuildContext p0, t11.AsyncSnapshot<Object?> p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return _flaxBridgeCallback.call(positional, named) as t11.Widget;
    };
bool flaxAdapter34Matches(Object value) =>
    value
        is t11.Widget Function(
          t11.BuildContext context,
          t11.AsyncSnapshot<Object?> snapshot,
        );
Object? flaxAdapter34Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as t11.Widget Function(
        t11.BuildContext context,
        t11.AsyncSnapshot<Object?> snapshot,
      ))(
    positional[0] as t11.BuildContext,
    positional[1] as t11.AsyncSnapshot<Object?>,
  );
}

Object flaxAdapter35(FlaxCallback _flaxBridgeCallback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool flaxAdapter35Matches(Object value) =>
    value is Future<void> Function(bool systemOverlaysAreVisible);
Object? flaxAdapter35Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function(bool systemOverlaysAreVisible))(
    positional[0] as bool,
  );
}

Object flaxAdapter36(FlaxCallback _flaxBridgeCallback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool flaxAdapter36Matches(Object value) =>
    value is Future<void> Function(bool value);
Object? flaxAdapter36Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function(bool value))(positional[0] as bool);
}

Object flaxAdapter37(FlaxCallback _flaxBridgeCallback) => (double p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool flaxAdapter37Matches(Object value) =>
    value is Future<void> Function(double value);
Object? flaxAdapter37Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function(double value))(
    positional[0] as double,
  );
}

Object flaxAdapter38(FlaxCallback _flaxBridgeCallback) =>
    ({required int priority, required t8.SchedulerBinding scheduler}) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      named["priority"] = priority;
      named["scheduler"] = scheduler;
      return _flaxBridgeCallback.call(positional, named) as bool;
    };
bool flaxAdapter38Matches(Object value) =>
    value
        is bool Function({
          required int priority,
          required t8.SchedulerBinding scheduler,
        });
Object? flaxAdapter38Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as bool Function({
        required int priority,
        required t8.SchedulerBinding scheduler,
      }))(
    priority: named["priority"] as int,
    scheduler: named["scheduler"] as t8.SchedulerBinding,
  );
}

Object flaxAdapter39Create() => <Map<String, Object?>>[];
Object flaxAdapter39Restore(Object value) =>
    (value as Iterable<Object?>).cast<Map<String, Object?>>();
bool flaxAdapter39Matches(Object value) =>
    value is Iterable<Map<String, Object?>>;
Object flaxAdapter40Create() => <Object>[];
Object flaxAdapter40Restore(Object value) =>
    (value as Iterable<Object?>).cast<Object>();
bool flaxAdapter40Matches(Object value) => value is Iterable<Object>;
Object flaxAdapter41Create() => <Object?, Object?>{};
bool flaxAdapter41Matches(Object value) => value is Map<Object?, Object?>;
Object flaxAdapter42Create() => <Object?>[];
Object flaxAdapter42Restore(Object value) =>
    (value as Iterable<Object?>).cast<Object?>();
bool flaxAdapter42Matches(Object value) => value is Iterable<Object?>;
Object flaxAdapter43Create() => <Object?>[];
bool flaxAdapter43Matches(Object value) => value is List<Object?>;
Object flaxAdapter44Create() => <Object?>{};
bool flaxAdapter44Matches(Object value) => value is Set<Object?>;
Object flaxAdapter45Create() => <String, Object?>{};
bool flaxAdapter45Matches(Object value) => value is Map<String, Object?>;
Object flaxAdapter46Create() => <String, String>{};
bool flaxAdapter46Matches(Object value) => value is Map<String, String>;
Object flaxAdapter47Create() => <String>[];
Object flaxAdapter47Restore(Object value) =>
    (value as Iterable<Object?>).cast<String>();
bool flaxAdapter47Matches(Object value) => value is Iterable<String>;
Object flaxAdapter48Create() => <String>[];
bool flaxAdapter48Matches(Object value) => value is List<String>;
Object flaxAdapter49Create() => <String>{};
bool flaxAdapter49Matches(Object value) => value is Set<String>;
Object flaxAdapter50Create() => <String?>[];
Object flaxAdapter50Restore(Object value) =>
    (value as Iterable<Object?>).cast<String?>();
bool flaxAdapter50Matches(Object value) => value is Iterable<String?>;
Object flaxAdapter51Create() => <String?>[];
bool flaxAdapter51Matches(Object value) => value is List<String?>;
Object flaxAdapter52Create() => <t1.Enum>[];
Object flaxAdapter52Restore(Object value) =>
    (value as Iterable<Object?>).cast<t1.Enum>();
bool flaxAdapter52Matches(Object value) => value is Iterable<t1.Enum>;
Object flaxAdapter53Create() => <t3.Color>[];
Object flaxAdapter53Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.Color>();
bool flaxAdapter53Matches(Object value) => value is Iterable<t3.Color>;
Object flaxAdapter54Create() => <t3.Color>[];
bool flaxAdapter54Matches(Object value) => value is List<t3.Color>;
Object flaxAdapter55Create() => <t3.DisplayFeature>[];
Object flaxAdapter55Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.DisplayFeature>();
bool flaxAdapter55Matches(Object value) => value is Iterable<t3.DisplayFeature>;
Object flaxAdapter56Create() => <t3.DisplayFeature>[];
bool flaxAdapter56Matches(Object value) => value is List<t3.DisplayFeature>;
Object flaxAdapter57Create() => <t3.FontFeature>[];
Object flaxAdapter57Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.FontFeature>();
bool flaxAdapter57Matches(Object value) => value is Iterable<t3.FontFeature>;
Object flaxAdapter58Create() => <t3.FontFeature>[];
bool flaxAdapter58Matches(Object value) => value is List<t3.FontFeature>;
Object flaxAdapter59Create() => <t3.FontVariation>[];
Object flaxAdapter59Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.FontVariation>();
bool flaxAdapter59Matches(Object value) => value is Iterable<t3.FontVariation>;
Object flaxAdapter60Create() => <t3.FontVariation>[];
bool flaxAdapter60Matches(Object value) => value is List<t3.FontVariation>;
Object flaxAdapter61Create() => <t3.FrameTiming>[];
Object flaxAdapter61Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.FrameTiming>();
bool flaxAdapter61Matches(Object value) => value is Iterable<t3.FrameTiming>;
Object flaxAdapter62Create() => <t3.FrameTiming>[];
bool flaxAdapter62Matches(Object value) => value is List<t3.FrameTiming>;
Object flaxAdapter63Create() => <t3.LineMetrics>[];
Object flaxAdapter63Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.LineMetrics>();
bool flaxAdapter63Matches(Object value) => value is Iterable<t3.LineMetrics>;
Object flaxAdapter64Create() => <t3.LineMetrics>[];
bool flaxAdapter64Matches(Object value) => value is List<t3.LineMetrics>;
Object flaxAdapter65Create() => <t3.Locale>[];
Object flaxAdapter65Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.Locale>();
bool flaxAdapter65Matches(Object value) => value is Iterable<t3.Locale>;
Object flaxAdapter66Create() => <t3.Locale>[];
bool flaxAdapter66Matches(Object value) => value is List<t3.Locale>;
Object flaxAdapter67Create() => <t3.Offset>[];
Object flaxAdapter67Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.Offset>();
bool flaxAdapter67Matches(Object value) => value is Iterable<t3.Offset>;
Object flaxAdapter68Create() => <t3.Offset>[];
bool flaxAdapter68Matches(Object value) => value is List<t3.Offset>;
Object flaxAdapter69Create() => <t3.PointerData>[];
Object flaxAdapter69Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.PointerData>();
bool flaxAdapter69Matches(Object value) => value is Iterable<t3.PointerData>;
Object flaxAdapter70Create() => <t3.PointerDeviceKind>[];
Object flaxAdapter70Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.PointerDeviceKind>();
bool flaxAdapter70Matches(Object value) =>
    value is Iterable<t3.PointerDeviceKind>;
Object flaxAdapter71Create() => <t3.PointerDeviceKind>{};
bool flaxAdapter71Matches(Object value) => value is Set<t3.PointerDeviceKind>;
Object flaxAdapter72Create() => <t3.Rect>[];
Object flaxAdapter72Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.Rect>();
bool flaxAdapter72Matches(Object value) => value is Iterable<t3.Rect>;
Object flaxAdapter73Create() => <t3.Rect>[];
bool flaxAdapter73Matches(Object value) => value is List<t3.Rect>;
Object flaxAdapter74Create() => <t3.SemanticsAction>[];
Object flaxAdapter74Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.SemanticsAction>();
bool flaxAdapter74Matches(Object value) =>
    value is Iterable<t3.SemanticsAction>;
Object flaxAdapter75Create() => <t3.SemanticsAction>{};
bool flaxAdapter75Matches(Object value) => value is Set<t3.SemanticsAction>;
Object flaxAdapter76Create() => <t3.Shadow>[];
Object flaxAdapter76Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.Shadow>();
bool flaxAdapter76Matches(Object value) => value is Iterable<t3.Shadow>;
Object flaxAdapter77Create() => <t3.Shadow>[];
bool flaxAdapter77Matches(Object value) => value is List<t3.Shadow>;
Object flaxAdapter78Create() => <t3.StringAttribute>[];
Object flaxAdapter78Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.StringAttribute>();
bool flaxAdapter78Matches(Object value) =>
    value is Iterable<t3.StringAttribute>;
Object flaxAdapter79Create() => <t3.StringAttribute>[];
bool flaxAdapter79Matches(Object value) => value is List<t3.StringAttribute>;
Object flaxAdapter80Create() => <t3.TextBox>[];
Object flaxAdapter80Restore(Object value) =>
    (value as Iterable<Object?>).cast<t3.TextBox>();
bool flaxAdapter80Matches(Object value) => value is Iterable<t3.TextBox>;
Object flaxAdapter81Create() => <t3.TextBox>[];
bool flaxAdapter81Matches(Object value) => value is List<t3.TextBox>;
Object flaxAdapter82Create() => <t4.Factory<t5.OneSequenceGestureRecognizer>>[];
Object flaxAdapter82Restore(Object value) => (value as Iterable<Object?>)
    .cast<t4.Factory<t5.OneSequenceGestureRecognizer>>();
bool flaxAdapter82Matches(Object value) =>
    value is Iterable<t4.Factory<t5.OneSequenceGestureRecognizer>>;
Object flaxAdapter83Create() => <t4.Factory<t5.OneSequenceGestureRecognizer>>{};
bool flaxAdapter83Matches(Object value) =>
    value is Set<t4.Factory<t5.OneSequenceGestureRecognizer>>;
Object flaxAdapter84Create() => <t4.DiagnosticsNode>[];
Object flaxAdapter84Restore(Object value) =>
    (value as Iterable<Object?>).cast<t4.DiagnosticsNode>();
bool flaxAdapter84Matches(Object value) =>
    value is Iterable<t4.DiagnosticsNode>;
Object flaxAdapter85Create() => <t4.DiagnosticsNode>[];
bool flaxAdapter85Matches(Object value) => value is List<t4.DiagnosticsNode>;
Object flaxAdapter86Create() => <t5.HitTestEntry<t5.HitTestTarget>>[];
Object flaxAdapter86Restore(Object value) =>
    (value as Iterable<Object?>).cast<t5.HitTestEntry<t5.HitTestTarget>>();
bool flaxAdapter86Matches(Object value) =>
    value is Iterable<t5.HitTestEntry<t5.HitTestTarget>>;
Object flaxAdapter87Create() => <t6.BoxShadow>[];
Object flaxAdapter87Restore(Object value) =>
    (value as Iterable<Object?>).cast<t6.BoxShadow>();
bool flaxAdapter87Matches(Object value) => value is Iterable<t6.BoxShadow>;
Object flaxAdapter88Create() => <t6.BoxShadow>[];
bool flaxAdapter88Matches(Object value) => value is List<t6.BoxShadow>;
Object flaxAdapter89Create() => <t6.InlineSpanSemanticsInformation>[];
Object flaxAdapter89Restore(Object value) =>
    (value as Iterable<Object?>).cast<t6.InlineSpanSemanticsInformation>();
bool flaxAdapter89Matches(Object value) =>
    value is Iterable<t6.InlineSpanSemanticsInformation>;
Object flaxAdapter90Create() => <t6.InlineSpanSemanticsInformation>[];
bool flaxAdapter90Matches(Object value) =>
    value is List<t6.InlineSpanSemanticsInformation>;
Object flaxAdapter91Create() => <t6.PlaceholderDimensions>[];
Object flaxAdapter91Restore(Object value) =>
    (value as Iterable<Object?>).cast<t6.PlaceholderDimensions>();
bool flaxAdapter91Matches(Object value) =>
    value is Iterable<t6.PlaceholderDimensions>;
Object flaxAdapter92Create() => <t6.PlaceholderDimensions>[];
bool flaxAdapter92Matches(Object value) =>
    value is List<t6.PlaceholderDimensions>;
Object flaxAdapter93Create() => <t7.CustomPainterSemantics>[];
Object flaxAdapter93Restore(Object value) =>
    (value as Iterable<Object?>).cast<t7.CustomPainterSemantics>();
bool flaxAdapter93Matches(Object value) =>
    value is Iterable<t7.CustomPainterSemantics>;
Object flaxAdapter94Create() => <t7.CustomPainterSemantics>[];
bool flaxAdapter94Matches(Object value) =>
    value is List<t7.CustomPainterSemantics>;
Object flaxAdapter95Create() => <t7.TextSelectionPoint>[];
Object flaxAdapter95Restore(Object value) =>
    (value as Iterable<Object?>).cast<t7.TextSelectionPoint>();
bool flaxAdapter95Matches(Object value) =>
    value is Iterable<t7.TextSelectionPoint>;
Object flaxAdapter96Create() => <t7.TextSelectionPoint>[];
bool flaxAdapter96Matches(Object value) => value is List<t7.TextSelectionPoint>;
Object flaxAdapter97Create() => <t7.RenderObject>[];
Object flaxAdapter97Restore(Object value) =>
    (value as Iterable<Object?>).cast<t7.RenderObject>();
bool flaxAdapter97Matches(Object value) => value is Iterable<t7.RenderObject>;
Object flaxAdapter98Create() => <t7.RenderObject>[];
bool flaxAdapter98Matches(Object value) => value is List<t7.RenderObject>;
Object flaxAdapter99Create() => <t7.RenderSliver>[];
Object flaxAdapter99Restore(Object value) =>
    (value as Iterable<Object?>).cast<t7.RenderSliver>();
bool flaxAdapter99Matches(Object value) => value is Iterable<t7.RenderSliver>;
Object flaxAdapter100Create() => <t7.RenderSliver>[];
bool flaxAdapter100Matches(Object value) => value is List<t7.RenderSliver>;
Object flaxAdapter101Create() => <t7.RenderView>[];
Object flaxAdapter101Restore(Object value) =>
    (value as Iterable<Object?>).cast<t7.RenderView>();
bool flaxAdapter101Matches(Object value) => value is Iterable<t7.RenderView>;
Object flaxAdapter102Create() => <t9.CustomSemanticsAction, void Function()>{};
bool flaxAdapter102Matches(Object value) =>
    value is Map<t9.CustomSemanticsAction, void Function()>;
Object flaxAdapter103Create() => <t9.SemanticsNode>[];
Object flaxAdapter103Restore(Object value) =>
    (value as Iterable<Object?>).cast<t9.SemanticsNode>();
bool flaxAdapter103Matches(Object value) => value is Iterable<t9.SemanticsNode>;
Object flaxAdapter104Create() => <t9.SemanticsTag>[];
Object flaxAdapter104Restore(Object value) =>
    (value as Iterable<Object?>).cast<t9.SemanticsTag>();
bool flaxAdapter104Matches(Object value) => value is Iterable<t9.SemanticsTag>;
Object flaxAdapter105Create() => <t9.SemanticsTag>{};
bool flaxAdapter105Matches(Object value) => value is Set<t9.SemanticsTag>;
Object flaxAdapter106Create() => <t10.AutofillClient>[];
Object flaxAdapter106Restore(Object value) =>
    (value as Iterable<Object?>).cast<t10.AutofillClient>();
bool flaxAdapter106Matches(Object value) =>
    value is Iterable<t10.AutofillClient>;
Object flaxAdapter107Create() => <t10.LogicalKeyboardKey>[];
Object flaxAdapter107Restore(Object value) =>
    (value as Iterable<Object?>).cast<t10.LogicalKeyboardKey>();
bool flaxAdapter107Matches(Object value) =>
    value is Iterable<t10.LogicalKeyboardKey>;
Object flaxAdapter108Create() => <t10.LogicalKeyboardKey>{};
bool flaxAdapter108Matches(Object value) =>
    value is Set<t10.LogicalKeyboardKey>;
Object flaxAdapter109Create() => <t10.PhysicalKeyboardKey>[];
Object flaxAdapter109Restore(Object value) =>
    (value as Iterable<Object?>).cast<t10.PhysicalKeyboardKey>();
bool flaxAdapter109Matches(Object value) =>
    value is Iterable<t10.PhysicalKeyboardKey>;
Object flaxAdapter110Create() => <t11.FocusNode>[];
Object flaxAdapter110Restore(Object value) =>
    (value as Iterable<Object?>).cast<t11.FocusNode>();
bool flaxAdapter110Matches(Object value) => value is Iterable<t11.FocusNode>;
Object flaxAdapter111Create() => <t11.NavigatorObserver>[];
Object flaxAdapter111Restore(Object value) =>
    (value as Iterable<Object?>).cast<t11.NavigatorObserver>();
bool flaxAdapter111Matches(Object value) =>
    value is Iterable<t11.NavigatorObserver>;
Object flaxAdapter112Create() => <t11.NavigatorObserver>[];
bool flaxAdapter112Matches(Object value) =>
    value is List<t11.NavigatorObserver>;
Object flaxAdapter113Create() => <t11.Route<Object?>>[];
Object flaxAdapter113Restore(Object value) =>
    (value as Iterable<Object?>).cast<t11.Route<Object?>>();
bool flaxAdapter113Matches(Object value) =>
    value is Iterable<t11.Route<Object?>>;
Object flaxAdapter114Create() => <t11.Route<Object?>>[];
bool flaxAdapter114Matches(Object value) => value is List<t11.Route<Object?>>;
Object flaxAdapter115Create() => <t11.OverlayEntry>[];
Object flaxAdapter115Restore(Object value) =>
    (value as Iterable<Object?>).cast<t11.OverlayEntry>();
bool flaxAdapter115Matches(Object value) => value is Iterable<t11.OverlayEntry>;
Object flaxAdapter116Create() => <t11.OverlayEntry>[];
bool flaxAdapter116Matches(Object value) => value is List<t11.OverlayEntry>;
Object flaxAdapter117Create() => <t11.ScrollPosition>[];
Object flaxAdapter117Restore(Object value) =>
    (value as Iterable<Object?>).cast<t11.ScrollPosition>();
bool flaxAdapter117Matches(Object value) =>
    value is Iterable<t11.ScrollPosition>;
Object flaxAdapter118Create() => <t11.WidgetState>[];
Object flaxAdapter118Restore(Object value) =>
    (value as Iterable<Object?>).cast<t11.WidgetState>();
bool flaxAdapter118Matches(Object value) => value is Iterable<t11.WidgetState>;
Object flaxAdapter119Create() => <t11.WidgetState>{};
bool flaxAdapter119Matches(Object value) => value is Set<t11.WidgetState>;
Object flaxAdapter120Create() => <t11.WidgetStatesConstraint, Object?>{};
bool flaxAdapter120Matches(Object value) =>
    value is Map<t11.WidgetStatesConstraint, Object?>;
Object flaxAdapter121Create() => <t11.Widget>[];
Object flaxAdapter121Restore(Object value) =>
    (value as Iterable<Object?>).cast<t11.Widget>();
bool flaxAdapter121Matches(Object value) => value is Iterable<t11.Widget>;
Object flaxAdapter122Create() => <t11.Widget>[];
bool flaxAdapter122Matches(Object value) => value is List<t11.Widget>;
List<t11.Widget> flaxAdapter122Snapshot(Iterable<Object?> items) =>
    List<t11.Widget>.unmodifiable(items.cast<t11.Widget>());
Object flaxAdapter123Create() => <double>[];
Object flaxAdapter123Restore(Object value) =>
    (value as Iterable<Object?>).cast<double>();
bool flaxAdapter123Matches(Object value) => value is Iterable<double>;
Object flaxAdapter124Create() => <double>[];
bool flaxAdapter124Matches(Object value) => value is List<double>;
Object flaxAdapter125Create() => <int, t7.TableColumnWidth>{};
bool flaxAdapter125Matches(Object value) =>
    value is Map<int, t7.TableColumnWidth>;
Object flaxAdapter126Create() => <int>[];
Object flaxAdapter126Restore(Object value) =>
    (value as Iterable<Object?>).cast<int>();
bool flaxAdapter126Matches(Object value) => value is Iterable<int>;
Object flaxAdapter127Create() => <int>[];
bool flaxAdapter127Matches(Object value) => value is List<int>;
Object flaxAdapter128Create() => <num>[];
Object flaxAdapter128Restore(Object value) =>
    (value as Iterable<Object?>).cast<num>();
bool flaxAdapter128Matches(Object value) => value is Iterable<num>;
Object flaxAdapter129Create() => <num>[];
bool flaxAdapter129Matches(Object value) => value is List<num>;
