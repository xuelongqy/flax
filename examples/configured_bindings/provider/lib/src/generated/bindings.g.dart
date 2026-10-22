// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:configured_prices/api.dart' as api;
import 'package:flax/bindings.dart';

// ignore: unused_element
const _flaxOmitted = Object();
const pricesBindings = FlaxBindingModule(
  'prices',
  [_flaxBinding2],
  functions: [],
  constants: [],
  moduleId: "example.prices/prices",
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
      "example.prices/prices#type:Money",
      api.Money,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
final pricesPlugin = FlaxBindingPlugin(
  id: "binding:example.prices/prices",
  bindingModules: [pricesBindings],
  jsModules: {"@example/prices/api"},
);
bool _isMoney(Object value) => value is api.Money;
Object? _Money_cents(Object value) => (value as api.Money).cents;
Object _createMoney(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Money(cents: values["cents"] as int);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[];
const _flaxBinding0 = FlaxGetter.plain("cents", flaxIntType, _Money_cents);
const _flaxBinding1 = <FlaxParameter>[
  FlaxParameter.required("cents", flaxIntType),
];
const _flaxBinding2 = FlaxObjectBinding(
  "example.prices/prices#type:Money",
  [_flaxBinding0],
  {},
  constructors: {"": _flaxBinding1},
  create: _createMoney,
  matches: _isMoney,
  setters: [],
  supertypes: ["dart:core::Object"],
);
