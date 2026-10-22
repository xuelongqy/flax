// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:configured_default_app/cart.dart' as api;
import 'package:flax/bindings.dart';

// ignore: unused_element
const _flaxOmitted = Object();
const appBindings = FlaxBindingModule(
  'app',
  [],
  functions: [
    FlaxFunctionBinding(
      "example.defaults/app#function:addItem",
      [],
      flaxIntType,
      _function_addItem,
    ),
    FlaxFunctionBinding(
      "example.defaults/app#function:cartQuantity",
      [],
      flaxIntType,
      _function_cartQuantity,
    ),
  ],
  constants: [],
  moduleId: "example.defaults/app",
  dependencyModules: [],
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
final appPlugin = FlaxBindingPlugin(
  id: "binding:example.defaults/app",
  bindingModules: [appBindings],
  jsModules: {"@flax/app/app"},
);
Object? _function_addItem(Map<String, Object?> values) {
  return api.addItem();
}

Object? _function_cartQuantity(Map<String, Object?> values) {
  return api.cartQuantity();
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[];
