// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:your_package/api.dart' as api;
import 'package:flax/bindings.dart';

// ignore: unused_element
const _flaxOmitted = Object();
const exampleBindings = FlaxBindingModule(
  'example',
  [_flaxBinding5],
  functions: [],
  constants: [],
  moduleId: "vendor.example/example",
  dependencyModules: [],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "vendor.example/example#type:Gauge",
      api.Gauge,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
bool _isGauge(Object value) => value is api.Gauge;
Object? _Gauge_value(Object value) => (value as api.Gauge).value;
void _Gauge_set_value(Object receiver, Object? value) {
  (receiver as api.Gauge).value = value as int;
}

Object? _Gauge_increment(Object receiver, Map<String, Object?> values) {
  (receiver as api.Gauge).increment(values["by"] as int);
  return null;
}

Object _createGauge(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Gauge(value: values["value"] as int);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[];
const _flaxBinding0 = FlaxGetter.plain("value", flaxIntType, _Gauge_value);
const _flaxBinding1 = FlaxSetter("value", flaxIntType, _Gauge_set_value);
const _flaxBinding2 = <FlaxParameter>[
  FlaxParameter("by", flaxIntType, required: false, defaultValue: 1),
];
const _flaxBinding3 = FlaxInstanceMethod.plain(
  _flaxBinding2,
  flaxVoidType,
  _Gauge_increment,
);
const _flaxBinding4 = <FlaxParameter>[
  FlaxParameter("value", flaxIntType, required: false, defaultValue: 0),
];
const _flaxBinding5 = FlaxObjectBinding(
  "vendor.example/example#type:Gauge",
  [_flaxBinding0],
  {"increment": _flaxBinding3},
  constructors: {"": _flaxBinding4},
  create: _createGauge,
  matches: _isGauge,
  setters: [_flaxBinding1],
  supertypes: ["dart:core::Object"],
);
