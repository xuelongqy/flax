// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:configured_host/src/app_api.dart' as api;
import 'package:flax/bindings.dart';

// ignore: unused_element
const _flaxOmitted = Object();
const appBindings = FlaxBindingModule(
  'app',
  [],
  functions: [
    FlaxFunctionBinding(
      "example.shop/app#function:hostAppName",
      [],
      flaxStringType,
      _function_hostAppName,
    ),
  ],
  constants: [],
  moduleId: "example.shop/app",
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
  id: "binding:example.shop/app",
  bindingModules: [appBindings],
  jsModules: {"@flax/app/host"},
);
Object? _function_hostAppName(Map<String, Object?> values) {
  return api.hostAppName();
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[];
