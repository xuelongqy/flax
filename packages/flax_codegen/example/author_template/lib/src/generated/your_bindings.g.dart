// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import
import 'dart:core';

import 'package:your_package/api.dart' as api;
import 'package:flax/bindings.dart';

// ignore: unused_element
const _flaxOmitted = Object();
const exampleBindings = FlaxBindingModule(
  'example',
  [
    FlaxObjectBinding(
      "vendor.example/example#type:Gauge",
      [FlaxGetter("value", FlaxTypeRef("int"), _Gauge_value)],
      {
        "increment": FlaxInstanceMethod(
          [
            FlaxParameter(
              "by",
              FlaxTypeRef("int"),
              required: false,
              defaultValue: 1,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _Gauge_increment,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "value",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 0,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createGauge,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [FlaxSetter("value", FlaxTypeRef("int"), _Gauge_set_value)],
      matches: _isGauge,
      methods: {},
    ),
  ],
  functions: [],
  moduleId: "vendor.example/example",
  dependencyModules: [],
  uiProtocol: 23,
  requiredCapabilities: const <String>["native-widget-proxies"],
  stateVariants: [],
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
