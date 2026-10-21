// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:configured_host/api.dart' as api;
import 'package:flax/bindings.dart';
import 'package:configured_prices/api.dart' as api1;
import "package:configured_prices/src/generated/bindings.g.dart"
    as _flaxBindings0;

// ignore: unused_element
const _flaxOmitted = Object();
const adminBindings = FlaxBindingModule(
  'admin',
  [],
  functions: [
    FlaxFunctionBinding(
      "example.shop/admin#function:resetCart",
      [],
      _flaxBinding0,
      _function_resetCart,
    ),
  ],
  constants: [],
  moduleId: "example.shop/admin",
  dependencyModules: ["example.prices/prices"],
  dependencies: [_flaxBindings0.pricesBindings],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
  ],
  stateVariants: [],
  dartTypes: [],
  dartShapes: _flaxDartShapes,
);
Object? _function_resetCart(Map<String, Object?> values) {
  return api.resetCart();
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[];
const _flaxBinding0 = FlaxTypeRef(
  "object",
  id: "example.prices/prices#type:Money",
);
