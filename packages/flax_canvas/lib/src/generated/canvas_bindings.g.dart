// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member
import 'dart:core';

import 'package:flax_canvas/flax_canvas.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart' as api1;

import 'dart:core' as api2;

// ignore: unused_element
const _flaxOmitted = Object();
const canvasBindings = FlaxBindingModule(
  'canvas',
  [
    FlaxObjectBinding(
      "flax.canvas/canvas#type:FlaxCanvasSurface",
      [
        FlaxGetter("alpha", FlaxTypeRef("bool"), _FlaxCanvasSurface_alpha),
        FlaxGetter("width", FlaxTypeRef("int"), _FlaxCanvasSurface_width),
        FlaxGetter("height", FlaxTypeRef("int"), _FlaxCanvasSurface_height),
        FlaxGetter(
          "generation",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_generation,
        ),
        FlaxGetter("sequence", FlaxTypeRef("int"), _FlaxCanvasSurface_sequence),
        FlaxGetter(
          "decodedBytes",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_decodedBytes,
        ),
        FlaxGetter(
          "compressing",
          FlaxTypeRef("bool"),
          _FlaxCanvasSurface_compressing,
        ),
        FlaxGetter(
          "compressGeneration",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_compressGeneration,
        ),
        FlaxGetter(
          "compressCount",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_compressCount,
        ),
        FlaxGetter(
          "compressBytes",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_compressBytes,
        ),
        FlaxGetter("closed", FlaxTypeRef("bool"), _FlaxCanvasSurface_closed),
        FlaxGetter(
          "transferred",
          FlaxTypeRef("bool"),
          _FlaxCanvasSurface_transferred,
        ),
        FlaxGetter(
          "onError",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "error",
                  FlaxTypeRef("any"),
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "stack",
                  FlaxTypeRef(
                    "object",
                    id: "flax.core/flutter#type:StackTrace",
                  ),
                  required: true,
                  positional: true,
                ),
              ],
              FlaxTypeRef("void"),
              _callback0,
              id: "callback:<>(p:r:error:any:,p:r:stack:object:flax.core/flutter#type:StackTrace)->void:",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
          _FlaxCanvasSurface_onError,
        ),
        FlaxGetter(
          "hasListeners",
          FlaxTypeRef("bool"),
          _FlaxCanvasSurface_hasListeners,
        ),
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
                  _callback2,
                  id: "callback:<>()->void:",
                  invoke: _callback2Invoke,
                  matches: _callback2Matches,
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
        "resize": FlaxInstanceMethod(
          [
            FlaxParameter(
              "nextWidth",
              FlaxTypeRef("int"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "nextHeight",
              FlaxTypeRef("int"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "reset",
              FlaxTypeRef("bool"),
              required: false,
              defaultValue: false,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _FlaxCanvasSurface_resize,
          startsRoute: false,
        ),
        "clearHistory": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _FlaxCanvasSurface_clearHistory,
          startsRoute: false,
        ),
        "replaceWithClear": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _FlaxCanvasSurface_replaceWithClear,
          startsRoute: false,
        ),
        "maybeCompress": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _FlaxCanvasSurface_maybeCompress,
          startsRoute: false,
        ),
        "abandon": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _FlaxCanvasSurface_abandon,
          startsRoute: false,
        ),
        "dispose": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _FlaxCanvasSurface_dispose,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "width",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "height",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alpha",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createFlaxCanvasSurface,
      disposeMethod: "dispose",
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "package:flutter/src/foundation/change_notifier.dart::ChangeNotifier",
        "dart:core::Object",
        "flax.core/flutter#type:Listenable",
      ],
      setters: [
        FlaxSetter("alpha", FlaxTypeRef("bool"), _FlaxCanvasSurface_set_alpha),
        FlaxSetter("width", FlaxTypeRef("int"), _FlaxCanvasSurface_set_width),
        FlaxSetter("height", FlaxTypeRef("int"), _FlaxCanvasSurface_set_height),
        FlaxSetter(
          "generation",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_set_generation,
        ),
        FlaxSetter(
          "sequence",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_set_sequence,
        ),
        FlaxSetter(
          "decodedBytes",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_set_decodedBytes,
        ),
        FlaxSetter(
          "compressing",
          FlaxTypeRef("bool"),
          _FlaxCanvasSurface_set_compressing,
        ),
        FlaxSetter(
          "compressGeneration",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_set_compressGeneration,
        ),
        FlaxSetter(
          "compressCount",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_set_compressCount,
        ),
        FlaxSetter(
          "compressBytes",
          FlaxTypeRef("int"),
          _FlaxCanvasSurface_set_compressBytes,
        ),
        FlaxSetter(
          "closed",
          FlaxTypeRef("bool"),
          _FlaxCanvasSurface_set_closed,
        ),
        FlaxSetter(
          "transferred",
          FlaxTypeRef("bool"),
          _FlaxCanvasSurface_set_transferred,
        ),
        FlaxSetter(
          "onError",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "error",
                  FlaxTypeRef("any"),
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "stack",
                  FlaxTypeRef(
                    "object",
                    id: "flax.core/flutter#type:StackTrace",
                  ),
                  required: true,
                  positional: true,
                ),
              ],
              FlaxTypeRef("void"),
              _callback3,
              id: "callback:<>(p:r:error:any:,p:r:stack:object:flax.core/flutter#type:StackTrace)->void:",
              invoke: _callback3Invoke,
              matches: _callback3Matches,
            ),
          ),
          _FlaxCanvasSurface_set_onError,
        ),
      ],
      matches: _isFlaxCanvasSurface,
      methods: const {},
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
      matches: _isFlaxCanvasView,
      methods: {},
    ),
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.canvas/canvas#read:FlaxCanvasSurface.pictureLimit",
      [],
      FlaxTypeRef("int"),
      _FlaxCanvasSurface_static_get_pictureLimit,
    ),
    FlaxFunctionBinding(
      "flax.canvas/canvas#read:FlaxCanvasSurface.commandBytesLimit",
      [],
      FlaxTypeRef("int"),
      _FlaxCanvasSurface_static_get_commandBytesLimit,
    ),
  ],
  moduleId: "flax.canvas/canvas",
  dependencyModules: ["flax.core/flutter"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.canvas/canvas#type:FlaxCanvasSurface",
      api.FlaxCanvasSurface,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.canvas/canvas#type:FlaxCanvasView",
      api.FlaxCanvasView,
      "widget",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
bool _isFlaxCanvasSurface(Object value) => value is api.FlaxCanvasSurface;
Object? _FlaxCanvasSurface_alpha(Object value) =>
    (value as api.FlaxCanvasSurface).alpha;
Object? _FlaxCanvasSurface_width(Object value) =>
    (value as api.FlaxCanvasSurface).width;
Object? _FlaxCanvasSurface_height(Object value) =>
    (value as api.FlaxCanvasSurface).height;
Object? _FlaxCanvasSurface_generation(Object value) =>
    (value as api.FlaxCanvasSurface).generation;
Object? _FlaxCanvasSurface_sequence(Object value) =>
    (value as api.FlaxCanvasSurface).sequence;
Object? _FlaxCanvasSurface_decodedBytes(Object value) =>
    (value as api.FlaxCanvasSurface).decodedBytes;
Object? _FlaxCanvasSurface_compressing(Object value) =>
    (value as api.FlaxCanvasSurface).compressing;
Object? _FlaxCanvasSurface_compressGeneration(Object value) =>
    (value as api.FlaxCanvasSurface).compressGeneration;
Object? _FlaxCanvasSurface_compressCount(Object value) =>
    (value as api.FlaxCanvasSurface).compressCount;
Object? _FlaxCanvasSurface_compressBytes(Object value) =>
    (value as api.FlaxCanvasSurface).compressBytes;
Object? _FlaxCanvasSurface_closed(Object value) =>
    (value as api.FlaxCanvasSurface).closed;
Object? _FlaxCanvasSurface_transferred(Object value) =>
    (value as api.FlaxCanvasSurface).transferred;
Object? _FlaxCanvasSurface_onError(Object value) =>
    (value as api.FlaxCanvasSurface).onError;
Object? _FlaxCanvasSurface_hasListeners(Object value) =>
    (value as api.FlaxCanvasSurface).hasListeners;
Object? _FlaxCanvasSurface_static_get_pictureLimit(
  Map<String, Object?> values,
) => api.FlaxCanvasSurface.pictureLimit;
Object? _FlaxCanvasSurface_static_get_commandBytesLimit(
  Map<String, Object?> values,
) => api.FlaxCanvasSurface.commandBytesLimit;
void _FlaxCanvasSurface_set_alpha(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).alpha = value as bool;
}

void _FlaxCanvasSurface_set_width(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).width = value as int;
}

void _FlaxCanvasSurface_set_height(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).height = value as int;
}

void _FlaxCanvasSurface_set_generation(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).generation = value as int;
}

void _FlaxCanvasSurface_set_sequence(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).sequence = value as int;
}

void _FlaxCanvasSurface_set_decodedBytes(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).decodedBytes = value as int;
}

void _FlaxCanvasSurface_set_compressing(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).compressing = value as bool;
}

void _FlaxCanvasSurface_set_compressGeneration(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).compressGeneration = value as int;
}

void _FlaxCanvasSurface_set_compressCount(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).compressCount = value as int;
}

void _FlaxCanvasSurface_set_compressBytes(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).compressBytes = value as int;
}

void _FlaxCanvasSurface_set_closed(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).closed = value as bool;
}

void _FlaxCanvasSurface_set_transferred(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).transferred = value as bool;
}

void _FlaxCanvasSurface_set_onError(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).onError =
      value as void Function(Object error, api2.StackTrace stack)?;
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

Object? _FlaxCanvasSurface_resize(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).resize(
    values["nextWidth"] as int,
    values["nextHeight"] as int,
    reset: values["reset"] as bool,
  );
  return null;
}

Object? _FlaxCanvasSurface_clearHistory(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).clearHistory();
  return null;
}

Object? _FlaxCanvasSurface_replaceWithClear(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).replaceWithClear();
  return null;
}

Object? _FlaxCanvasSurface_maybeCompress(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).maybeCompress();
  return null;
}

Object? _FlaxCanvasSurface_abandon(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).abandon();
  return null;
}

Object? _FlaxCanvasSurface_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).dispose();
  return null;
}

Object _createFlaxCanvasSurface(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FlaxCanvasSurface(
        values["width"] as int,
        values["height"] as int,
        alpha: values["alpha"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFlaxCanvasView(Object value) => value is api.FlaxCanvasView;

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

const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[2,2,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape1),
];
Function _flaxShape0<_Shape0, _Shape1, _Shape2>() =>
    (FlaxDartTypes types, bool withinCallback) {
      Object _callback0(FlaxCallback _flaxBridgeCallback) =>
          (_Shape0 p0, _Shape1 p1) {
            final positional = <Object?>[];
            final named = <String, Object?>{};
            positional.add(p0);
            positional.add(p1);
            return _flaxBridgeCallback.call(positional, named) as _Shape2;
          };
      bool _callback0Matches(Object value) =>
          value is _Shape2 Function(_Shape0 error, _Shape1 stack);
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function as _Shape2 Function(_Shape0 error, _Shape1 stack))(
          positional[0] as _Shape0,
          positional[1] as _Shape1,
        );
      }

      return types.define<_Shape2 Function(_Shape0 error, _Shape1 stack)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "error",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "stack",
                types.ref<_Shape1>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Shape2>(withinCallback: true),
            _callback0,
            id: types.key<_Shape2 Function(_Shape0 error, _Shape1 stack)>() + ":callback:<>(p:r:error:parameter:,p:r:stack:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape1<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
  Object _callback0(FlaxCallback _flaxBridgeCallback) => () {
    final positional = <Object?>[];
    final named = <String, Object?>{};
    return _flaxBridgeCallback.call(positional, named) as _Shape0;
  };
  bool _callback0Matches(Object value) => value is _Shape0 Function();
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as _Shape0 Function())();
  }

  return types.define<_Shape0 Function()>(
    FlaxTypeRef(
      "callback",
      nullable: false,
      callback: FlaxCallbackBinding(
        [],
        types.ref<_Shape0>(withinCallback: true),
        _callback0,
        id: types.key<_Shape0 Function()>() + ":callback:<>()->parameter:",
        invoke: _callback0Invoke,
        matches: _callback0Matches,
      ),
    ),
    withinCallback: withinCallback,
  );
};
Object _callback0(FlaxCallback _flaxBridgeCallback) =>
    (Object p0, api2.StackTrace p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      _flaxBridgeCallback.call(positional, named);
    };
bool _callback0Matches(Object value) =>
    value is void Function(Object error, api2.StackTrace stack);
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object error, api2.StackTrace stack))(
    positional[0] as Object,
    positional[1] as api2.StackTrace,
  );
  return null;
}

Object _callback1(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  _flaxBridgeCallback.call(positional, named);
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

Object _callback2(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  _flaxBridgeCallback.call(positional, named);
};
bool _callback2Matches(Object value) => value is void Function();
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback3(FlaxCallback _flaxBridgeCallback) =>
    (Object p0, api2.StackTrace p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      _flaxBridgeCallback.call(positional, named);
    };
bool _callback3Matches(Object value) =>
    value is void Function(Object error, api2.StackTrace stack);
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object error, api2.StackTrace stack))(
    positional[0] as Object,
    positional[1] as api2.StackTrace,
  );
  return null;
}
