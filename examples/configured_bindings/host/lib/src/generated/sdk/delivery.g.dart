// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:configured_delivery/configured_delivery.dart' as api;
import 'package:flax/bindings.dart';

// ignore: unused_element
const _flaxOmitted = Object();
const deliveryBindings = FlaxBindingModule(
  'delivery',
  [_flaxBinding2],
  functions: [],
  constants: [],
  moduleId: "example.shop/delivery",
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
      "example.shop/delivery#type:DeliveryEstimate",
      api.DeliveryEstimate,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
bool _isDeliveryEstimate(Object value) => value is api.DeliveryEstimate;
Object? _DeliveryEstimate_days(Object value) =>
    (value as api.DeliveryEstimate).days;
Object _createDeliveryEstimate(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.DeliveryEstimate(days: values["days"] as int);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[];
const _flaxBinding0 = FlaxGetter.plain(
  "days",
  flaxIntType,
  _DeliveryEstimate_days,
);
const _flaxBinding1 = <FlaxParameter>[
  FlaxParameter.required("days", flaxIntType),
];
const _flaxBinding2 = FlaxObjectBinding(
  "example.shop/delivery#type:DeliveryEstimate",
  [_flaxBinding0],
  {},
  constructors: {"": _flaxBinding1},
  create: _createDeliveryEstimate,
  matches: _isDeliveryEstimate,
  setters: [],
  supertypes: ["dart:core::Object"],
);
