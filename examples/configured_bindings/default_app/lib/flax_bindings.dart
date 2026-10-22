// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:configured_default_app/cart.dart' as _scope0_api;
import 'package:flax/bindings.dart';
import 'package:configured_default_app/cart.dart' as _scope1_api;

// ignore: unused_element
const _scope0_flaxOmitted = Object();
const appBindings = FlaxBindingModule(
  'app',
  [],
  functions: [
    FlaxFunctionBinding(
      "app.configured.default.app/app#function:addItem",
      [],
      flaxIntType,
      _scope0_function_addItem,
    ),
    FlaxFunctionBinding(
      "app.configured.default.app/app#function:cartQuantity",
      [],
      flaxIntType,
      _scope0_function_cartQuantity,
    ),
  ],
  constants: [],
  moduleId: "app.configured.default.app/app",
  dependencyModules: [],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "call-layouts",
    "generic-member-views",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
  ],
  stateVariants: [],
  dartTypes: [],
  dartShapes: _scope0_flaxDartShapes,
);
final appPlugin = FlaxBindingPlugin(
  id: "binding:app.configured.default.app/app",
  bindingModules: [appBindings],
  jsModules: {"@flax/app/app"},
);
Object? _scope0_function_addItem(Map<String, Object?> values) {
  return _scope0_api.addItem();
}

Object? _scope0_function_cartQuantity(Map<String, Object?> values) {
  return _scope0_api.cartQuantity();
}

const _scope0_flaxDartShapes = <FlaxDartShapeTemplate>[];

// ignore: unused_element
const _scope1_flaxOmitted = Object();
const adminBindings = FlaxBindingModule(
  'admin',
  [],
  functions: [
    FlaxFunctionBinding(
      "app.configured.default.app/admin#function:resetCart",
      [],
      flaxIntType,
      _scope1_function_resetCart,
    ),
  ],
  constants: [],
  moduleId: "app.configured.default.app/admin",
  dependencyModules: [],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "call-layouts",
    "generic-member-views",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
  ],
  stateVariants: [],
  dartTypes: [],
  dartShapes: _scope1_flaxDartShapes,
);
final adminPlugin = FlaxBindingPlugin(
  id: "binding:app.configured.default.app/admin",
  bindingModules: [adminBindings],
  jsModules: {"@flax/app/admin"},
);
Object? _scope1_function_resetCart(Map<String, Object?> values) {
  return _scope1_api.resetCart();
}

const _scope1_flaxDartShapes = <FlaxDartShapeTemplate>[];
