// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:flutter/physics.dart' as api;
import 'package:flax/bindings.dart';

import 'dart:core' as api1;

// ignore: unused_element
const _flaxOmitted = Object();
const sdk_physicsBindings = FlaxBindingModule(
  'sdk_physics',
  [
    FlaxEnumBinding(
      "flax.core/sdk_physics#type:SpringType",
      {
        "criticallyDamped": api.SpringType.criticallyDamped,
        "underDamped": api.SpringType.underDamped,
        "overDamped": api.SpringType.overDamped,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    _flaxBinding42,
    _flaxBinding54,
    _flaxBinding40,
    _flaxBinding56,
    _flaxBinding63,
    _flaxBinding31,
    _flaxBinding76,
    _flaxBinding61,
    _flaxBinding85,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_physics#function:nearEqual",
      [
        FlaxParameter("a", _flaxBinding86, required: true),
        FlaxParameter("b", _flaxBinding86, required: true),
        FlaxParameter("epsilon", _flaxBinding0, required: true),
      ],
      _flaxBinding3,
      _function_nearEqual,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_physics#function:nearZero",
      [
        FlaxParameter("a", _flaxBinding0, required: true),
        FlaxParameter("epsilon", _flaxBinding0, required: true),
      ],
      _flaxBinding3,
      _function_nearZero,
    ),
  ],
  constants: [
    FlaxConstantGroup(_flaxBinding8, {
      "flax.core/sdk_physics#read:Tolerance.defaultTolerance":
          api.Tolerance.defaultTolerance,
    }),
  ],
  moduleId: "flax.core/sdk_physics",
  dependencyModules: ["flax.core/flutter"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
    "shared-static-readers",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:BoundedFrictionSimulation",
      api.BoundedFrictionSimulation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:ClampedSimulation",
      api.ClampedSimulation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:FrictionSimulation",
      api.FrictionSimulation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:GravitySimulation",
      api.GravitySimulation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:ScrollSpringSimulation",
      api.ScrollSpringSimulation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:Simulation",
      api.Simulation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:SpringDescription",
      api.SpringDescription,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:SpringSimulation",
      api.SpringSimulation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:SpringType",
      api.SpringType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_physics#type:Tolerance",
      api.Tolerance,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
Object? _function_nearEqual(Map<String, Object?> values) {
  return api.nearEqual(
    values["a"] as double?,
    values["b"] as double?,
    values["epsilon"] as double,
  );
}

Object? _function_nearZero(Map<String, Object?> values) {
  return api.nearZero(values["a"] as double, values["epsilon"] as double);
}

bool _isBoundedFrictionSimulation(Object value) =>
    value is api.BoundedFrictionSimulation;
Object? _FlaxProxyDispatch0_super_call_x(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch0)._flaxSuper_x(
    values["time"] as double,
  );
}

Object? _FlaxProxyDispatch0_super_call_dx(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch0)._flaxSuper_dx(
    values["time"] as double,
  );
}

Object? _BoundedFrictionSimulation_super_timeAtX(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _BoundedFrictionSimulationProxy)._flaxSuper_timeAtX(
    values["x"] as double,
  );
}

Object? _FlaxProxyDispatch0_super_call_isDone(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch0)._flaxSuper_isDone(
    values["time"] as double,
  );
}

Object? _FlaxProxyDispatch2_super_call_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch2)._flaxSuper_toString();
}

Object? _BoundedFrictionSimulation_super_get_finalX(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _BoundedFrictionSimulationProxy)._flaxSuperGet_finalX;
Object? _FlaxProxyDispatch3_super_get_tolerance(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch3)._flaxSuperGet_tolerance;
Object? _FlaxProxyDispatch3_super_set_tolerance(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch3)._flaxSuperSet_tolerance(
    values["value"] as api.Tolerance,
  );
  return null;
}

Object _createBoundedFrictionSimulation(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case '@implementation':
      return _BoundedFrictionSimulationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["drag"] as double,
        values["position"] as double,
        values["velocity"] as double,
        values["_minX"] as double,
        values["_maxX"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isClampedSimulation(Object value) => value is api.ClampedSimulation;
Object? _ClampedSimulation_simulation(Object value) =>
    (value as api.ClampedSimulation).simulation;
Object? _ClampedSimulation_xMin(Object value) =>
    (value as api.ClampedSimulation).xMin;
Object? _ClampedSimulation_xMax(Object value) =>
    (value as api.ClampedSimulation).xMax;
Object? _ClampedSimulation_dxMin(Object value) =>
    (value as api.ClampedSimulation).dxMin;
Object? _ClampedSimulation_dxMax(Object value) =>
    (value as api.ClampedSimulation).dxMax;
Object? _ClampedSimulation_super_get_simulation(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ClampedSimulationProxy)._flaxSuperGet_simulation;
Object? _ClampedSimulation_super_get_xMin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ClampedSimulationProxy)._flaxSuperGet_xMin;
Object? _ClampedSimulation_super_get_xMax(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ClampedSimulationProxy)._flaxSuperGet_xMax;
Object? _ClampedSimulation_super_get_dxMin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ClampedSimulationProxy)._flaxSuperGet_dxMin;
Object? _ClampedSimulation_super_get_dxMax(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ClampedSimulationProxy)._flaxSuperGet_dxMax;
Object _createClampedSimulation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _ClampedSimulationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["simulation"] as api.Simulation,
        xMin: values["xMin"] as double,
        xMax: values["xMax"] as double,
        dxMin: values["dxMin"] as double,
        dxMax: values["dxMax"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFrictionSimulation(Object value) => value is api.FrictionSimulation;
Object? _FrictionSimulation_finalX(Object value) =>
    (value as api.FrictionSimulation).finalX;
Object? _FrictionSimulation_timeAtX(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FrictionSimulation).timeAtX(values["x"] as double);
}

Object? _FrictionSimulation_super_timeAtX(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FrictionSimulationProxy)._flaxSuper_timeAtX(
    values["x"] as double,
  );
}

Object? _FrictionSimulation_super_get_finalX(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FrictionSimulationProxy)._flaxSuperGet_finalX;
Object _createFrictionSimulation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      if (!values.containsKey("tolerance")) {
        return _FrictionSimulationProxy(
          values['@peer'] as FlaxProxyPeer,
          values["drag"] as double,
          values["position"] as double,
          values["velocity"] as double,
          constantDeceleration: values["constantDeceleration"] as double,
        );
      }
      return _FrictionSimulationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["drag"] as double,
        values["position"] as double,
        values["velocity"] as double,
        tolerance: values["tolerance"] as api.Tolerance,
        constantDeceleration: values["constantDeceleration"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isGravitySimulation(Object value) => value is api.GravitySimulation;
Object _createGravitySimulation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _GravitySimulationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["acceleration"] as double,
        values["distance"] as double,
        values["endDistance"] as double,
        values["velocity"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isScrollSpringSimulation(Object value) =>
    value is api.ScrollSpringSimulation;
Object? _ScrollSpringSimulation_super_get_type(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ScrollSpringSimulationProxy)._flaxSuperGet_type;
Object _createScrollSpringSimulation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      if (!values.containsKey("tolerance")) {
        return _ScrollSpringSimulationProxy(
          values['@peer'] as FlaxProxyPeer,
          values["spring"] as api.SpringDescription,
          values["start"] as double,
          values["end"] as double,
          values["velocity"] as double,
        );
      }
      return _ScrollSpringSimulationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["spring"] as api.SpringDescription,
        values["start"] as double,
        values["end"] as double,
        values["velocity"] as double,
        tolerance: values["tolerance"] as api.Tolerance,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSimulation(Object value) => value is api.Simulation;
Object? _Simulation_tolerance(Object value) =>
    (value as api.Simulation).tolerance;
void _Simulation_set_tolerance(Object receiver, Object? value) {
  (receiver as api.Simulation).tolerance = value as api.Tolerance;
}

Object? _Simulation_x(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Simulation).x(values["time"] as double);
}

Object? _Simulation_dx(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Simulation).dx(values["time"] as double);
}

Object? _Simulation_isDone(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Simulation).isDone(values["time"] as double);
}

Object? _Simulation_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Simulation).toString();
}

Object _createSimulation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      if (!values.containsKey("tolerance")) {
        return _SimulationProxy(values['@peer'] as FlaxProxyPeer);
      }
      return _SimulationProxy(
        values['@peer'] as FlaxProxyPeer,
        tolerance: values["tolerance"] as api.Tolerance,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSpringDescription(Object value) => value is api.SpringDescription;
Object? _SpringDescription_mass(Object value) =>
    (value as api.SpringDescription).mass;
Object? _SpringDescription_stiffness(Object value) =>
    (value as api.SpringDescription).stiffness;
Object? _SpringDescription_damping(Object value) =>
    (value as api.SpringDescription).damping;
Object? _SpringDescription_duration(Object value) =>
    (value as api.SpringDescription).duration;
Object? _SpringDescription_bounce(Object value) =>
    (value as api.SpringDescription).bounce;
Object? _SpringDescription_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SpringDescription).toString();
}

Object? _SpringDescription_super_get_mass(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SpringDescriptionProxy)._flaxSuperGet_mass;
Object? _SpringDescription_super_get_stiffness(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SpringDescriptionProxy)._flaxSuperGet_stiffness;
Object? _SpringDescription_super_get_damping(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SpringDescriptionProxy)._flaxSuperGet_damping;
Object? _SpringDescription_super_get_duration(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SpringDescriptionProxy)._flaxSuperGet_duration;
Object? _SpringDescription_super_get_bounce(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SpringDescriptionProxy)._flaxSuperGet_bounce;
Object _createSpringDescription(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _SpringDescriptionProxy(
        values['@peer'] as FlaxProxyPeer,
        mass: values["mass"] as double,
        stiffness: values["stiffness"] as double,
        damping: values["damping"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSpringSimulation(Object value) => value is api.SpringSimulation;
Object? _SpringSimulation_type(Object value) =>
    (value as api.SpringSimulation).type;
Object? _SpringSimulation_super_get_type(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SpringSimulationProxy)._flaxSuperGet_type;
Object _createSpringSimulation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      if (!values.containsKey("tolerance")) {
        return _SpringSimulationProxy(
          values['@peer'] as FlaxProxyPeer,
          values["spring"] as api.SpringDescription,
          values["start"] as double,
          values["end"] as double,
          values["velocity"] as double,
          snapToEnd: values["snapToEnd"] as bool,
        );
      }
      return _SpringSimulationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["spring"] as api.SpringDescription,
        values["start"] as double,
        values["end"] as double,
        values["velocity"] as double,
        snapToEnd: values["snapToEnd"] as bool,
        tolerance: values["tolerance"] as api.Tolerance,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTolerance(Object value) => value is api.Tolerance;
Object? _Tolerance_distance(Object value) => (value as api.Tolerance).distance;
Object? _Tolerance_time(Object value) => (value as api.Tolerance).time;
Object? _Tolerance_velocity(Object value) => (value as api.Tolerance).velocity;
Object? _Tolerance_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Tolerance).toString();
}

Object? _Tolerance_super_get_distance(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ToleranceProxy)._flaxSuperGet_distance;
Object? _Tolerance_super_get_time(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ToleranceProxy)._flaxSuperGet_time;
Object? _Tolerance_super_get_velocity(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ToleranceProxy)._flaxSuperGet_velocity;
Object _createTolerance(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _ToleranceProxy(
        values['@peer'] as FlaxProxyPeer,
        distance: values["distance"] as double,
        time: values["time"] as double,
        velocity: values["velocity"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

abstract interface class _FlaxProxyDispatch0 {
  FlaxProxyPeer get _flaxPeer;
  double _flaxSuper_x(double time);
  double _flaxSuper_dx(double time);
  bool _flaxSuper_isDone(double time);
}

double _FlaxProxyDispatch0_call_x(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
  double time,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    time,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_x(time);
  }
  final _flaxConvertedResult = _flaxResult.$2 as double;
  return _flaxConvertedResult;
}

double _FlaxProxyDispatch0_call_dx(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
  double time,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    time,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_dx(time);
  }
  final _flaxConvertedResult = _flaxResult.$2 as double;
  return _flaxConvertedResult;
}

bool _FlaxProxyDispatch0_call_isDone(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
  double time,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    time,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_isDone(time);
  }
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch3 {
  FlaxProxyPeer get _flaxPeer;
  api.Tolerance get _flaxSuperGet_tolerance;
  void _flaxSuperSet_tolerance(api.Tolerance value);
}

api.Tolerance _FlaxProxyDispatch3_get_tolerance(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_tolerance;
  final _flaxConvertedResult = _flaxResult.$2 as api.Tolerance;
  return _flaxConvertedResult;
}

void _FlaxProxyDispatch3_set_tolerance(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
  api.Tolerance value,
) {
  final result = _flaxReceiver._flaxPeer.call(_flaxMember, [value], const {});
  if (!result.$1) {
    _flaxReceiver._flaxSuperSet_tolerance(value);
    return;
  }
}

abstract interface class _FlaxProxyDispatch2 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toString();
}

String _FlaxProxyDispatch2_call_toString(
  _FlaxProxyDispatch2 _flaxReceiver,
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

final class _BoundedFrictionSimulationProxy
    extends api.BoundedFrictionSimulation
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch3, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _BoundedFrictionSimulationProxy(
    this._flaxPeer,
    double super.drag,
    double super.position,
    double super.velocity,
    double super._minX,
    double super._maxX,
  );
  @override
  double x(double time) {
    return _FlaxProxyDispatch0_call_x(this, 0, time);
  }

  double _flaxSuper_x(double time) {
    return super.x(time);
  }

  @override
  double dx(double time) {
    return _FlaxProxyDispatch0_call_dx(this, 1, time);
  }

  double _flaxSuper_dx(double time) {
    return super.dx(time);
  }

  @override
  double timeAtX(double x) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[x], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_timeAtX(x);
    }
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double _flaxSuper_timeAtX(double x) {
    return super.timeAtX(x);
  }

  @override
  bool isDone(double time) {
    return _FlaxProxyDispatch0_call_isDone(this, 3, time);
  }

  bool _flaxSuper_isDone(double time) {
    return super.isDone(time);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 4);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get finalX {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.finalX;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_finalX {
    return super.finalX;
  }

  @override
  api.Tolerance get tolerance => _FlaxProxyDispatch3_get_tolerance(this, 6);
  api.Tolerance get _flaxSuperGet_tolerance {
    return super.tolerance;
  }

  @override
  set tolerance(api.Tolerance value) =>
      _FlaxProxyDispatch3_set_tolerance(this, 7, value);
  void _flaxSuperSet_tolerance(api.Tolerance value) {
    super.tolerance = value;
  }
}

final class _ClampedSimulationProxy extends api.ClampedSimulation
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch3, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _ClampedSimulationProxy(
    this._flaxPeer,
    api.Simulation super.simulation, {
    double super.xMin,
    double super.xMax,
    double super.dxMin,
    double super.dxMax,
  });
  @override
  double x(double time) {
    return _FlaxProxyDispatch0_call_x(this, 0, time);
  }

  double _flaxSuper_x(double time) {
    return super.x(time);
  }

  @override
  double dx(double time) {
    return _FlaxProxyDispatch0_call_dx(this, 1, time);
  }

  double _flaxSuper_dx(double time) {
    return super.dx(time);
  }

  @override
  bool isDone(double time) {
    return _FlaxProxyDispatch0_call_isDone(this, 2, time);
  }

  bool _flaxSuper_isDone(double time) {
    return super.isDone(time);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 3);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.Simulation get simulation {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.simulation;
    final _flaxConvertedResult = _flaxResult.$2 as api.Simulation;
    return _flaxConvertedResult;
  }

  api.Simulation get _flaxSuperGet_simulation {
    return super.simulation;
  }

  @override
  double get xMin {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.xMin;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_xMin {
    return super.xMin;
  }

  @override
  double get xMax {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.xMax;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_xMax {
    return super.xMax;
  }

  @override
  double get dxMin {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.dxMin;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_dxMin {
    return super.dxMin;
  }

  @override
  double get dxMax {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.dxMax;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_dxMax {
    return super.dxMax;
  }

  @override
  api.Tolerance get tolerance => _FlaxProxyDispatch3_get_tolerance(this, 9);
  api.Tolerance get _flaxSuperGet_tolerance {
    return super.tolerance;
  }

  @override
  set tolerance(api.Tolerance value) =>
      _FlaxProxyDispatch3_set_tolerance(this, 10, value);
  void _flaxSuperSet_tolerance(api.Tolerance value) {
    super.tolerance = value;
  }
}

final class _FrictionSimulationProxy extends api.FrictionSimulation
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch3, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _FrictionSimulationProxy(
    this._flaxPeer,
    double super.drag,
    double super.position,
    double super.velocity, {
    api.Tolerance super.tolerance,
    double super.constantDeceleration,
  });
  @override
  double x(double time) {
    return _FlaxProxyDispatch0_call_x(this, 0, time);
  }

  double _flaxSuper_x(double time) {
    return super.x(time);
  }

  @override
  double dx(double time) {
    return _FlaxProxyDispatch0_call_dx(this, 1, time);
  }

  double _flaxSuper_dx(double time) {
    return super.dx(time);
  }

  @override
  bool isDone(double time) {
    return _FlaxProxyDispatch0_call_isDone(this, 2, time);
  }

  bool _flaxSuper_isDone(double time) {
    return super.isDone(time);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 3);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double timeAtX(double x) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[x], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_timeAtX(x);
    }
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double _flaxSuper_timeAtX(double x) {
    return super.timeAtX(x);
  }

  @override
  double get finalX {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.finalX;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_finalX {
    return super.finalX;
  }

  @override
  api.Tolerance get tolerance => _FlaxProxyDispatch3_get_tolerance(this, 6);
  api.Tolerance get _flaxSuperGet_tolerance {
    return super.tolerance;
  }

  @override
  set tolerance(api.Tolerance value) =>
      _FlaxProxyDispatch3_set_tolerance(this, 7, value);
  void _flaxSuperSet_tolerance(api.Tolerance value) {
    super.tolerance = value;
  }
}

final class _GravitySimulationProxy extends api.GravitySimulation
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch3, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _GravitySimulationProxy(
    this._flaxPeer,
    double super.acceleration,
    double super.distance,
    double super.endDistance,
    double super.velocity,
  );
  @override
  double x(double time) {
    return _FlaxProxyDispatch0_call_x(this, 0, time);
  }

  double _flaxSuper_x(double time) {
    return super.x(time);
  }

  @override
  double dx(double time) {
    return _FlaxProxyDispatch0_call_dx(this, 1, time);
  }

  double _flaxSuper_dx(double time) {
    return super.dx(time);
  }

  @override
  bool isDone(double time) {
    return _FlaxProxyDispatch0_call_isDone(this, 2, time);
  }

  bool _flaxSuper_isDone(double time) {
    return super.isDone(time);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 3);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.Tolerance get tolerance => _FlaxProxyDispatch3_get_tolerance(this, 4);
  api.Tolerance get _flaxSuperGet_tolerance {
    return super.tolerance;
  }

  @override
  set tolerance(api.Tolerance value) =>
      _FlaxProxyDispatch3_set_tolerance(this, 5, value);
  void _flaxSuperSet_tolerance(api.Tolerance value) {
    super.tolerance = value;
  }
}

final class _ScrollSpringSimulationProxy extends api.ScrollSpringSimulation
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch3, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _ScrollSpringSimulationProxy(
    this._flaxPeer,
    api.SpringDescription super.spring,
    double super.start,
    double super.end,
    double super.velocity, {
    api.Tolerance super.tolerance,
  });
  @override
  double x(double time) {
    return _FlaxProxyDispatch0_call_x(this, 0, time);
  }

  double _flaxSuper_x(double time) {
    return super.x(time);
  }

  @override
  double dx(double time) {
    return _FlaxProxyDispatch0_call_dx(this, 1, time);
  }

  double _flaxSuper_dx(double time) {
    return super.dx(time);
  }

  @override
  bool isDone(double time) {
    return _FlaxProxyDispatch0_call_isDone(this, 2, time);
  }

  bool _flaxSuper_isDone(double time) {
    return super.isDone(time);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 3);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.SpringType get type {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.type;
    final _flaxConvertedResult = _flaxResult.$2 as api.SpringType;
    return _flaxConvertedResult;
  }

  api.SpringType get _flaxSuperGet_type {
    return super.type;
  }

  @override
  api.Tolerance get tolerance => _FlaxProxyDispatch3_get_tolerance(this, 5);
  api.Tolerance get _flaxSuperGet_tolerance {
    return super.tolerance;
  }

  @override
  set tolerance(api.Tolerance value) =>
      _FlaxProxyDispatch3_set_tolerance(this, 6, value);
  void _flaxSuperSet_tolerance(api.Tolerance value) {
    super.tolerance = value;
  }
}

final class _SimulationProxy extends api.Simulation
    implements _FlaxProxyDispatch3, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _SimulationProxy(this._flaxPeer, {api.Tolerance super.tolerance});
  @override
  double x(double time) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[time], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: x');
    }
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double dx(double time) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[time], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: dx');
    }
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  bool isDone(double time) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[time], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: isDone');
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 3);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.Tolerance get tolerance => _FlaxProxyDispatch3_get_tolerance(this, 4);
  api.Tolerance get _flaxSuperGet_tolerance {
    return super.tolerance;
  }

  @override
  set tolerance(api.Tolerance value) =>
      _FlaxProxyDispatch3_set_tolerance(this, 5, value);
  void _flaxSuperSet_tolerance(api.Tolerance value) {
    super.tolerance = value;
  }
}

final class _SpringDescriptionProxy extends api.SpringDescription
    implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _SpringDescriptionProxy(
    this._flaxPeer, {
    required double super.mass,
    required double super.stiffness,
    required double super.damping,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get mass {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.mass;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_mass {
    return super.mass;
  }

  @override
  double get stiffness {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.stiffness;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_stiffness {
    return super.stiffness;
  }

  @override
  double get damping {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.damping;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_damping {
    return super.damping;
  }

  @override
  api1.Duration get duration {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.duration;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Duration;
    return _flaxConvertedResult;
  }

  api1.Duration get _flaxSuperGet_duration {
    return super.duration;
  }

  @override
  double get bounce {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.bounce;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_bounce {
    return super.bounce;
  }
}

final class _SpringSimulationProxy extends api.SpringSimulation
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch3, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _SpringSimulationProxy(
    this._flaxPeer,
    api.SpringDescription super.spring,
    double super.start,
    double super.end,
    double super.velocity, {
    bool super.snapToEnd,
    api.Tolerance super.tolerance,
  });
  @override
  double x(double time) {
    return _FlaxProxyDispatch0_call_x(this, 0, time);
  }

  double _flaxSuper_x(double time) {
    return super.x(time);
  }

  @override
  double dx(double time) {
    return _FlaxProxyDispatch0_call_dx(this, 1, time);
  }

  double _flaxSuper_dx(double time) {
    return super.dx(time);
  }

  @override
  bool isDone(double time) {
    return _FlaxProxyDispatch0_call_isDone(this, 2, time);
  }

  bool _flaxSuper_isDone(double time) {
    return super.isDone(time);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 3);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.SpringType get type {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.type;
    final _flaxConvertedResult = _flaxResult.$2 as api.SpringType;
    return _flaxConvertedResult;
  }

  api.SpringType get _flaxSuperGet_type {
    return super.type;
  }

  @override
  api.Tolerance get tolerance => _FlaxProxyDispatch3_get_tolerance(this, 5);
  api.Tolerance get _flaxSuperGet_tolerance {
    return super.tolerance;
  }

  @override
  set tolerance(api.Tolerance value) =>
      _FlaxProxyDispatch3_set_tolerance(this, 6, value);
  void _flaxSuperSet_tolerance(api.Tolerance value) {
    super.tolerance = value;
  }
}

final class _ToleranceProxy extends api.Tolerance
    implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _ToleranceProxy(
    this._flaxPeer, {
    double super.distance,
    double super.time,
    double super.velocity,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch2_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get distance {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.distance;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_distance {
    return super.distance;
  }

  @override
  double get time {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.time;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_time {
    return super.time;
  }

  @override
  double get velocity {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.velocity;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_velocity {
    return super.velocity;
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[];
const _flaxBinding0 = FlaxTypeRef("double");
const _flaxBinding1 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "time",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:time:double:)->double:",
);
const _flaxBinding2 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter("x", _flaxBinding0, required: true, positional: true)],
  _flaxBinding0,
  id: "callback:<>(p:r:x:double:)->double:",
);
const _flaxBinding3 = FlaxTypeRef("bool");
const _flaxBinding4 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "time",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding3,
  id: "callback:<>(p:r:time:double:)->bool:",
);
const _flaxBinding5 = FlaxTypeRef("String");
const _flaxBinding6 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding5,
  id: "callback:<>()->String:",
);
const _flaxBinding7 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding0,
  id: "callback:<>()->double:",
);
const _flaxBinding8 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_physics#type:Tolerance",
);
const _flaxBinding9 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding8,
  id: "callback:<>()->object:flax.core/sdk_physics#type:Tolerance",
);
const _flaxBinding10 = FlaxTypeRef("void");
const _flaxBinding11 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding8,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding10,
  id: "callback:<>(p:r:value:object:flax.core/sdk_physics#type:Tolerance)->void:",
);
const _flaxBinding12 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_physics#type:Simulation",
);
const _flaxBinding13 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding12,
  id: "callback:<>()->object:flax.core/sdk_physics#type:Simulation",
);
const _flaxBinding14 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_physics#type:SpringType",
);
const _flaxBinding15 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding14,
  id: "callback:<>()->enum:flax.core/sdk_physics#type:SpringType",
);
const _flaxBinding16 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
);
const _flaxBinding17 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding16,
  id: "callback:<>()->object:flax.core/flutter#type:Duration",
);
const _flaxBinding18 = FlaxGetter(
  "tolerance",
  _flaxBinding8,
  _Simulation_tolerance,
);
const _flaxBinding19 = FlaxSetter(
  "tolerance",
  _flaxBinding8,
  _Simulation_set_tolerance,
);
const _flaxBinding20 = FlaxInstanceMethod.signature(
  _flaxBinding1,
  _Simulation_x,
);
const _flaxBinding21 = FlaxInstanceMethod.signature(
  _flaxBinding1,
  _Simulation_dx,
);
const _flaxBinding22 = FlaxInstanceMethod.signature(
  _flaxBinding4,
  _Simulation_isDone,
);
const _flaxBinding23 = FlaxInstanceMethod.signature(
  _flaxBinding6,
  _Simulation_toString,
);
const _flaxBinding24 = <FlaxParameter>[
  FlaxParameter(
    "tolerance",
    _flaxBinding8,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding25 = FlaxProxyMember("x", 0, _flaxBinding1);
const _flaxBinding26 = FlaxProxyMember("dx", 0, _flaxBinding1);
const _flaxBinding27 = FlaxProxyMember("isDone", 0, _flaxBinding4);
const _flaxBinding28 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding6,
  hasSuper: true,
);
const _flaxBinding29 = FlaxProxyMember(
  "tolerance",
  1,
  _flaxBinding9,
  hasSuper: true,
);
const _flaxBinding30 = FlaxProxyMember(
  "tolerance",
  2,
  _flaxBinding11,
  hasSuper: true,
);
const _flaxBinding31 = FlaxObjectBinding(
  "flax.core/sdk_physics#type:Simulation",
  [_flaxBinding18],
  {
    "x": _flaxBinding20,
    "dx": _flaxBinding21,
    "isDone": _flaxBinding22,
    "toString": _flaxBinding23,
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:tolerance": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch3_super_get_tolerance,
    ),
    "@super:set:tolerance": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding8, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch3_super_set_tolerance,
    ),
  },
  constructors: {"@implementation": _flaxBinding24},
  create: _createSimulation,
  matches: _isSimulation,
  setters: [_flaxBinding19],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding25,
    _flaxBinding26,
    _flaxBinding27,
    _flaxBinding28,
    _flaxBinding29,
    _flaxBinding30,
  ]),
);
const _flaxBinding32 = FlaxGetter(
  "finalX",
  _flaxBinding0,
  _FrictionSimulation_finalX,
);
const _flaxBinding33 = FlaxInstanceMethod.signature(
  _flaxBinding2,
  _FrictionSimulation_timeAtX,
);
const _flaxBinding34 = <FlaxParameter>[
  FlaxParameter("drag", _flaxBinding0, required: true),
  FlaxParameter("position", _flaxBinding0, required: true),
  FlaxParameter("velocity", _flaxBinding0, required: true),
  FlaxParameter(
    "tolerance",
    _flaxBinding8,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "constantDeceleration",
    _flaxBinding0,
    required: false,
    defaultValue: 0.0,
  ),
];
const _flaxBinding35 = FlaxProxyMember("x", 0, _flaxBinding1, hasSuper: true);
const _flaxBinding36 = FlaxProxyMember("dx", 0, _flaxBinding1, hasSuper: true);
const _flaxBinding37 = FlaxProxyMember(
  "isDone",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding38 = FlaxProxyMember(
  "timeAtX",
  0,
  _flaxBinding2,
  hasSuper: true,
);
const _flaxBinding39 = FlaxProxyMember(
  "finalX",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding40 = FlaxObjectBinding(
  "flax.core/sdk_physics#type:FrictionSimulation",
  [_flaxBinding32],
  {
    "timeAtX": _flaxBinding33,
    "@super:x": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_x,
    ),
    "@super:dx": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_dx,
    ),
    "@super:isDone": FlaxInstanceMethod.signature(
      _flaxBinding4,
      _FlaxProxyDispatch0_super_call_isDone,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:timeAtX": FlaxInstanceMethod.signature(
      _flaxBinding2,
      _FrictionSimulation_super_timeAtX,
    ),
    "@super:get:finalX": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FrictionSimulation_super_get_finalX,
    ),
    "@super:get:tolerance": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch3_super_get_tolerance,
    ),
    "@super:set:tolerance": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding8, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch3_super_set_tolerance,
    ),
  },
  constructors: {"@implementation": _flaxBinding34},
  create: _createFrictionSimulation,
  matches: _isFrictionSimulation,
  setters: [],
  supertypes: ["flax.core/sdk_physics#type:Simulation", "dart:core::Object"],
  parent: _flaxBinding31,
  proxy: FlaxProxyBinding([
    _flaxBinding35,
    _flaxBinding36,
    _flaxBinding37,
    _flaxBinding28,
    _flaxBinding38,
    _flaxBinding39,
    _flaxBinding29,
    _flaxBinding30,
  ]),
);
const _flaxBinding41 = <FlaxParameter>[
  FlaxParameter("drag", _flaxBinding0, required: true),
  FlaxParameter("position", _flaxBinding0, required: true),
  FlaxParameter("velocity", _flaxBinding0, required: true),
  FlaxParameter("_minX", _flaxBinding0, required: true),
  FlaxParameter("_maxX", _flaxBinding0, required: true),
];
const _flaxBinding42 = FlaxObjectBinding(
  "flax.core/sdk_physics#type:BoundedFrictionSimulation",
  [],
  {
    "@super:x": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_x,
    ),
    "@super:dx": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_dx,
    ),
    "@super:timeAtX": FlaxInstanceMethod.signature(
      _flaxBinding2,
      _BoundedFrictionSimulation_super_timeAtX,
    ),
    "@super:isDone": FlaxInstanceMethod.signature(
      _flaxBinding4,
      _FlaxProxyDispatch0_super_call_isDone,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:finalX": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _BoundedFrictionSimulation_super_get_finalX,
    ),
    "@super:get:tolerance": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch3_super_get_tolerance,
    ),
    "@super:set:tolerance": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding8, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch3_super_set_tolerance,
    ),
  },
  constructors: {"@implementation": _flaxBinding41},
  create: _createBoundedFrictionSimulation,
  matches: _isBoundedFrictionSimulation,
  setters: [],
  supertypes: [
    "flax.core/sdk_physics#type:FrictionSimulation",
    "flax.core/sdk_physics#type:Simulation",
    "dart:core::Object",
  ],
  parent: _flaxBinding40,
  proxy: FlaxProxyBinding([
    _flaxBinding35,
    _flaxBinding36,
    _flaxBinding38,
    _flaxBinding37,
    _flaxBinding28,
    _flaxBinding39,
    _flaxBinding29,
    _flaxBinding30,
  ]),
);
const _flaxBinding43 = FlaxGetter(
  "simulation",
  _flaxBinding12,
  _ClampedSimulation_simulation,
);
const _flaxBinding44 = FlaxGetter(
  "xMin",
  _flaxBinding0,
  _ClampedSimulation_xMin,
);
const _flaxBinding45 = FlaxGetter(
  "xMax",
  _flaxBinding0,
  _ClampedSimulation_xMax,
);
const _flaxBinding46 = FlaxGetter(
  "dxMin",
  _flaxBinding0,
  _ClampedSimulation_dxMin,
);
const _flaxBinding47 = FlaxGetter(
  "dxMax",
  _flaxBinding0,
  _ClampedSimulation_dxMax,
);
const _flaxBinding48 = <FlaxParameter>[
  FlaxParameter("simulation", _flaxBinding12, required: true),
  FlaxParameter(
    "xMin",
    _flaxBinding0,
    required: false,
    defaultValue: double.negativeInfinity,
  ),
  FlaxParameter(
    "xMax",
    _flaxBinding0,
    required: false,
    defaultValue: double.infinity,
  ),
  FlaxParameter(
    "dxMin",
    _flaxBinding0,
    required: false,
    defaultValue: double.negativeInfinity,
  ),
  FlaxParameter(
    "dxMax",
    _flaxBinding0,
    required: false,
    defaultValue: double.infinity,
  ),
];
const _flaxBinding49 = FlaxProxyMember(
  "simulation",
  1,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding50 = FlaxProxyMember(
  "xMin",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding51 = FlaxProxyMember(
  "xMax",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding52 = FlaxProxyMember(
  "dxMin",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding53 = FlaxProxyMember(
  "dxMax",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding54 = FlaxObjectBinding(
  "flax.core/sdk_physics#type:ClampedSimulation",
  [
    _flaxBinding43,
    _flaxBinding44,
    _flaxBinding45,
    _flaxBinding46,
    _flaxBinding47,
  ],
  {
    "@super:x": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_x,
    ),
    "@super:dx": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_dx,
    ),
    "@super:isDone": FlaxInstanceMethod.signature(
      _flaxBinding4,
      _FlaxProxyDispatch0_super_call_isDone,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:simulation": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ClampedSimulation_super_get_simulation,
    ),
    "@super:get:xMin": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _ClampedSimulation_super_get_xMin,
    ),
    "@super:get:xMax": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _ClampedSimulation_super_get_xMax,
    ),
    "@super:get:dxMin": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _ClampedSimulation_super_get_dxMin,
    ),
    "@super:get:dxMax": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _ClampedSimulation_super_get_dxMax,
    ),
    "@super:get:tolerance": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch3_super_get_tolerance,
    ),
    "@super:set:tolerance": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding8, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch3_super_set_tolerance,
    ),
  },
  constructors: {"@implementation": _flaxBinding48},
  create: _createClampedSimulation,
  matches: _isClampedSimulation,
  setters: [],
  supertypes: ["flax.core/sdk_physics#type:Simulation", "dart:core::Object"],
  parent: _flaxBinding31,
  proxy: FlaxProxyBinding([
    _flaxBinding35,
    _flaxBinding36,
    _flaxBinding37,
    _flaxBinding28,
    _flaxBinding49,
    _flaxBinding50,
    _flaxBinding51,
    _flaxBinding52,
    _flaxBinding53,
    _flaxBinding29,
    _flaxBinding30,
  ]),
);
const _flaxBinding55 = <FlaxParameter>[
  FlaxParameter("acceleration", _flaxBinding0, required: true),
  FlaxParameter("distance", _flaxBinding0, required: true),
  FlaxParameter("endDistance", _flaxBinding0, required: true),
  FlaxParameter("velocity", _flaxBinding0, required: true),
];
const _flaxBinding56 = FlaxObjectBinding(
  "flax.core/sdk_physics#type:GravitySimulation",
  [],
  {
    "@super:x": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_x,
    ),
    "@super:dx": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_dx,
    ),
    "@super:isDone": FlaxInstanceMethod.signature(
      _flaxBinding4,
      _FlaxProxyDispatch0_super_call_isDone,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:tolerance": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch3_super_get_tolerance,
    ),
    "@super:set:tolerance": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding8, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch3_super_set_tolerance,
    ),
  },
  constructors: {"@implementation": _flaxBinding55},
  create: _createGravitySimulation,
  matches: _isGravitySimulation,
  setters: [],
  supertypes: ["flax.core/sdk_physics#type:Simulation", "dart:core::Object"],
  parent: _flaxBinding31,
  proxy: FlaxProxyBinding([
    _flaxBinding35,
    _flaxBinding36,
    _flaxBinding37,
    _flaxBinding28,
    _flaxBinding29,
    _flaxBinding30,
  ]),
);
const _flaxBinding57 = FlaxGetter(
  "type",
  _flaxBinding14,
  _SpringSimulation_type,
);
const _flaxBinding58 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_physics#type:SpringDescription",
);
const _flaxBinding59 = <FlaxParameter>[
  FlaxParameter("spring", _flaxBinding58, required: true),
  FlaxParameter("start", _flaxBinding0, required: true),
  FlaxParameter("end", _flaxBinding0, required: true),
  FlaxParameter("velocity", _flaxBinding0, required: true),
  FlaxParameter(
    "snapToEnd",
    _flaxBinding3,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "tolerance",
    _flaxBinding8,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding60 = FlaxProxyMember(
  "type",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding61 = FlaxObjectBinding(
  "flax.core/sdk_physics#type:SpringSimulation",
  [_flaxBinding57],
  {
    "@super:x": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_x,
    ),
    "@super:dx": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_dx,
    ),
    "@super:isDone": FlaxInstanceMethod.signature(
      _flaxBinding4,
      _FlaxProxyDispatch0_super_call_isDone,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:type": FlaxInstanceMethod.signature(
      _flaxBinding15,
      _SpringSimulation_super_get_type,
    ),
    "@super:get:tolerance": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch3_super_get_tolerance,
    ),
    "@super:set:tolerance": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding8, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch3_super_set_tolerance,
    ),
  },
  constructors: {"@implementation": _flaxBinding59},
  create: _createSpringSimulation,
  matches: _isSpringSimulation,
  setters: [],
  supertypes: ["flax.core/sdk_physics#type:Simulation", "dart:core::Object"],
  parent: _flaxBinding31,
  proxy: FlaxProxyBinding([
    _flaxBinding35,
    _flaxBinding36,
    _flaxBinding37,
    _flaxBinding28,
    _flaxBinding60,
    _flaxBinding29,
    _flaxBinding30,
  ]),
);
const _flaxBinding62 = <FlaxParameter>[
  FlaxParameter("spring", _flaxBinding58, required: true),
  FlaxParameter("start", _flaxBinding0, required: true),
  FlaxParameter("end", _flaxBinding0, required: true),
  FlaxParameter("velocity", _flaxBinding0, required: true),
  FlaxParameter(
    "tolerance",
    _flaxBinding8,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding63 = FlaxObjectBinding(
  "flax.core/sdk_physics#type:ScrollSpringSimulation",
  [],
  {
    "@super:x": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_x,
    ),
    "@super:dx": FlaxInstanceMethod.signature(
      _flaxBinding1,
      _FlaxProxyDispatch0_super_call_dx,
    ),
    "@super:isDone": FlaxInstanceMethod.signature(
      _flaxBinding4,
      _FlaxProxyDispatch0_super_call_isDone,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:type": FlaxInstanceMethod.signature(
      _flaxBinding15,
      _ScrollSpringSimulation_super_get_type,
    ),
    "@super:get:tolerance": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch3_super_get_tolerance,
    ),
    "@super:set:tolerance": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding8, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch3_super_set_tolerance,
    ),
  },
  constructors: {"@implementation": _flaxBinding62},
  create: _createScrollSpringSimulation,
  matches: _isScrollSpringSimulation,
  setters: [],
  supertypes: [
    "flax.core/sdk_physics#type:SpringSimulation",
    "flax.core/sdk_physics#type:Simulation",
    "dart:core::Object",
  ],
  parent: _flaxBinding61,
  proxy: FlaxProxyBinding([
    _flaxBinding35,
    _flaxBinding36,
    _flaxBinding37,
    _flaxBinding28,
    _flaxBinding60,
    _flaxBinding29,
    _flaxBinding30,
  ]),
);
const _flaxBinding64 = FlaxGetter(
  "mass",
  _flaxBinding0,
  _SpringDescription_mass,
);
const _flaxBinding65 = FlaxGetter(
  "stiffness",
  _flaxBinding0,
  _SpringDescription_stiffness,
);
const _flaxBinding66 = FlaxGetter(
  "damping",
  _flaxBinding0,
  _SpringDescription_damping,
);
const _flaxBinding67 = FlaxGetter(
  "duration",
  _flaxBinding16,
  _SpringDescription_duration,
);
const _flaxBinding68 = FlaxGetter(
  "bounce",
  _flaxBinding0,
  _SpringDescription_bounce,
);
const _flaxBinding69 = FlaxInstanceMethod.signature(
  _flaxBinding6,
  _SpringDescription_toString,
);
const _flaxBinding70 = <FlaxParameter>[
  FlaxParameter("mass", _flaxBinding0, required: true),
  FlaxParameter("stiffness", _flaxBinding0, required: true),
  FlaxParameter("damping", _flaxBinding0, required: true),
];
const _flaxBinding71 = FlaxProxyMember(
  "mass",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding72 = FlaxProxyMember(
  "stiffness",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding73 = FlaxProxyMember(
  "damping",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding74 = FlaxProxyMember(
  "duration",
  1,
  _flaxBinding17,
  hasSuper: true,
);
const _flaxBinding75 = FlaxProxyMember(
  "bounce",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding76 = FlaxObjectBinding(
  "flax.core/sdk_physics#type:SpringDescription",
  [
    _flaxBinding64,
    _flaxBinding65,
    _flaxBinding66,
    _flaxBinding67,
    _flaxBinding68,
  ],
  {
    "toString": _flaxBinding69,
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:mass": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _SpringDescription_super_get_mass,
    ),
    "@super:get:stiffness": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _SpringDescription_super_get_stiffness,
    ),
    "@super:get:damping": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _SpringDescription_super_get_damping,
    ),
    "@super:get:duration": FlaxInstanceMethod.signature(
      _flaxBinding17,
      _SpringDescription_super_get_duration,
    ),
    "@super:get:bounce": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _SpringDescription_super_get_bounce,
    ),
  },
  constructors: {"@implementation": _flaxBinding70},
  create: _createSpringDescription,
  matches: _isSpringDescription,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding28,
    _flaxBinding71,
    _flaxBinding72,
    _flaxBinding73,
    _flaxBinding74,
    _flaxBinding75,
  ]),
);
const _flaxBinding77 = FlaxGetter(
  "distance",
  _flaxBinding0,
  _Tolerance_distance,
);
const _flaxBinding78 = FlaxGetter("time", _flaxBinding0, _Tolerance_time);
const _flaxBinding79 = FlaxGetter(
  "velocity",
  _flaxBinding0,
  _Tolerance_velocity,
);
const _flaxBinding80 = FlaxInstanceMethod.signature(
  _flaxBinding6,
  _Tolerance_toString,
);
const _flaxBinding81 = <FlaxParameter>[
  FlaxParameter(
    "distance",
    _flaxBinding0,
    required: false,
    defaultValue: 0.001,
  ),
  FlaxParameter("time", _flaxBinding0, required: false, defaultValue: 0.001),
  FlaxParameter(
    "velocity",
    _flaxBinding0,
    required: false,
    defaultValue: 0.001,
  ),
];
const _flaxBinding82 = FlaxProxyMember(
  "distance",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding83 = FlaxProxyMember(
  "time",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding84 = FlaxProxyMember(
  "velocity",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding85 = FlaxObjectBinding(
  "flax.core/sdk_physics#type:Tolerance",
  [_flaxBinding77, _flaxBinding78, _flaxBinding79],
  {
    "toString": _flaxBinding80,
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _FlaxProxyDispatch2_super_call_toString,
    ),
    "@super:get:distance": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _Tolerance_super_get_distance,
    ),
    "@super:get:time": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _Tolerance_super_get_time,
    ),
    "@super:get:velocity": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _Tolerance_super_get_velocity,
    ),
  },
  constructors: {"@implementation": _flaxBinding81},
  create: _createTolerance,
  matches: _isTolerance,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding28,
    _flaxBinding82,
    _flaxBinding83,
    _flaxBinding84,
  ]),
);
const _flaxBinding86 = FlaxTypeRef("double", nullable: true);
