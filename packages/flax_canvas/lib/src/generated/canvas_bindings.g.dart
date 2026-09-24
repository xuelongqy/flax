// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import
import 'dart:core';

import 'package:flax_canvas/flax_canvas.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart' as api1;

// ignore: unused_element
const _flaxOmitted = Object();
const canvasBindings = FlaxBindingModule(
  'canvas',
  [
    FlaxObjectBinding(
      "flax.canvas/canvas#type:FlaxCanvasSurface",
      [
        FlaxGetter("width", FlaxTypeRef("int"), _FlaxCanvasSurface_width),
        FlaxGetter("height", FlaxTypeRef("int"), _FlaxCanvasSurface_height),
      ],
      {
        "addListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback0,
                  id: "callback:<>()->void:",
                  invoke: _callback0Invoke,
                  matches: _callback0Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _FlaxCanvasSurface_addListener,
          startsRoute: false,
        ),
        "removeListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback1,
                  id: "callback:<>()->void:",
                  invoke: _callback1Invoke,
                  matches: _callback1Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _FlaxCanvasSurface_removeListener,
          startsRoute: false,
        ),
      },
      constructors: {},
      create: _createFlaxCanvasSurface,
      disposeMethod: null,
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "package:flutter/src/foundation/change_notifier.dart::ChangeNotifier",
        "dart:core::Object",
        "flax.core/flutter#type:Listenable",
      ],
      setters: [
        FlaxSetter("width", FlaxTypeRef("int"), _FlaxCanvasSurface_set_width),
        FlaxSetter("height", FlaxTypeRef("int"), _FlaxCanvasSurface_set_height),
      ],
      matches: _isFlaxCanvasSurface,
      methods: {},
      staticGetters: {},
    ),
    FlaxWidgetBinding(
      "flax.canvas/canvas#type:FlaxCanvasView",
      {
        "": [
          FlaxParameter(
            "canvas",
            FlaxTypeRef(
              "object",
              id: "flax.canvas/canvas#type:FlaxCanvasSurface",
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "width",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "height",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _FlaxCanvasViewHost.new,
      fixedArguments: false,
      methods: {},
    ),
  ],
  functions: [],
  moduleId: "flax.canvas/canvas",
  uiProtocol: 21,
  requiredCapabilities: const <String>[],
  stateVariants: [],
);
bool _isFlaxCanvasSurface(Object value) => value is api.FlaxCanvasSurface;
Object? _FlaxCanvasSurface_width(Object value) =>
    (value as api.FlaxCanvasSurface).width;
Object? _FlaxCanvasSurface_height(Object value) =>
    (value as api.FlaxCanvasSurface).height;
void _FlaxCanvasSurface_set_width(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).width = value as int;
}

void _FlaxCanvasSurface_set_height(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).height = value as int;
}

Object? _FlaxCanvasSurface_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _FlaxCanvasSurface_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object _createFlaxCanvasSurface(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');

class _FlaxCanvasViewHost extends FlaxWidgetHost {
  _FlaxCanvasViewHost(super.node);

  @override
  api1.Widget buildNative(Map<String, Object?> values) =>
      _createFlaxCanvasView(node.ctor, values);
}

api1.Widget _createFlaxCanvasView(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FlaxCanvasView(
        values["canvas"] as api.FlaxCanvasSurface,
        key: values["key"] as api1.Key?,
        width: values["width"] as double?,
        height: values["height"] as double?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object _callback0(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback0Matches(Object value) => value is void Function();
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback1(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback1Matches(Object value) => value is void Function();
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}
