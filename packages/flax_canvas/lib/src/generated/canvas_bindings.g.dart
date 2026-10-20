// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:flax_canvas/flax_canvas.dart' as api;
import 'package:flax/bindings.dart';

import 'dart:ui' as api1;

import 'package:flutter/foundation.dart' as api2;

import 'dart:core' as api3;

import 'package:flutter/widgets.dart' as api4;

// ignore: unused_element
const _flaxOmitted = Object();
const canvasBindings = FlaxBindingModule(
  'canvas',
  [
    _flaxBinding64,
    FlaxWidgetBinding(
      "flax.canvas/canvas#type:FlaxCanvasView",
      {
        "": [
          FlaxParameter.required("canvas", _flaxBinding65),
          FlaxParameter("key", _flaxBinding66, required: false),
          FlaxParameter("width", flaxNullableDoubleType, required: false),
          FlaxParameter("height", flaxNullableDoubleType, required: false),
        ],
      },
      _FlaxCanvasViewHost.new,
      matches: _isFlaxCanvasView,
      methods: {},
    ),
  ],
  functions: [],
  constants: [
    FlaxConstantGroup(flaxIntType, {
      "flax.canvas/canvas#read:FlaxCanvasSurface.pictureLimit":
          api.FlaxCanvasSurface.pictureLimit,
      "flax.canvas/canvas#read:FlaxCanvasSurface.commandBytesLimit":
          api.FlaxCanvasSurface.commandBytesLimit,
    }),
  ],
  moduleId: "flax.canvas/canvas",
  dependencyModules: [
    "flax.core/flutter",
    "flax.core/sdk_dart_ui",
    "flax.core/sdk_foundation",
  ],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "native-navigation-objects",
    "native-widget-proxies",
    "shared-static-readers",
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
Object? _FlaxCanvasSurface_hasListeners(Object value) =>
    (value as api.FlaxCanvasSurface).hasListeners;
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
Object? _FlaxCanvasSurface_base(Object value) =>
    (value as api.FlaxCanvasSurface).base;
Object? _FlaxCanvasSurface_pictures(Object value) =>
    (value as api.FlaxCanvasSurface).pictures;
Object? _FlaxCanvasSurface_tail(Object value) =>
    (value as api.FlaxCanvasSurface).tail;
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
Object? _FlaxCanvasSurface_debugRasterize(Object value) =>
    (value as api.FlaxCanvasSurface).debugRasterize;
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

void _FlaxCanvasSurface_set_base(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).base = value as api1.Image?;
}

void _FlaxCanvasSurface_set_tail(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).tail = value as api1.Picture?;
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
      value as void Function(Object error, api3.StackTrace stack)?;
}

void _FlaxCanvasSurface_set_debugRasterize(Object receiver, Object? value) {
  (receiver as api.FlaxCanvasSurface).debugRasterize =
      value
          as Future<api1.Image?> Function(
            api1.Image? base,
            List<api1.Picture> pictures,
            int width,
            int height,
          )?;
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

Object? _FlaxCanvasSurface_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).dispose();
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

Object? _FlaxCanvasSurface_addPicture(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).addPicture(
    values["picture"] as api1.Picture,
    values["bytes"] as int,
  );
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

Object? _FlaxCanvasSurface_rasterize(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FlaxCanvasSurface).rasterize();
}

Object? _FlaxCanvasSurface_rasterizeSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FlaxCanvasSurface).rasterizeSync();
}

Object? _FlaxCanvasSurface_abandon(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlaxCanvasSurface).abandon();
  return null;
}

Object? _FlaxCanvasSurface_paint(Object receiver, Map<String, Object?> values) {
  (receiver as api.FlaxCanvasSurface).paint(
    values["canvas"] as api1.Canvas,
    values["size"] as api1.Size,
  );
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
  api4.Widget buildNative(Map<String, Object?> values) =>
      _createFlaxCanvasView(node.ctor, values);
}

api4.Widget _createFlaxCanvasView(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FlaxCanvasView(
        values["canvas"] as api.FlaxCanvasSurface,
        key: values["key"] as api2.Key?,
        width: values["width"] as double?,
        height: values["height"] as double?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[2,2,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[4,4,[],[]]]", _flaxShape1),
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape2),
];
Function _flaxShape0<_Shape0, _Shape1, _Shape2>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape2 Function(_Shape0 error, _Shape1 stack)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "error",
                types.ref<_Shape0>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "stack",
                types.ref<_Shape1>(withinCallback: true),
              ),
            ],
            types.ref<_Shape2>(withinCallback: true),
            FlaxCallbackAdapters.wrap2<_Shape0, _Shape1, _Shape2>,
            id: types.key<_Shape2 Function(_Shape0 error, _Shape1 stack)>() + ":callback:<>(p:r:error:parameter:,p:r:stack:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke2<_Shape0, _Shape1, _Shape2>,
            matches: FlaxCallbackAdapters.matches2<_Shape0, _Shape1, _Shape2>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape1<_Shape0, _Shape1, _Shape2, _Shape3, _Shape4>() =>
    (FlaxDartTypes types, bool withinCallback) {
      Object _callback0(FlaxCallback _flaxBridgeCallback) =>
          (_Shape0 p0, _Shape1 p1, _Shape2 p2, _Shape3 p3) {
            final positional = <Object?>[];
            final named = <String, Object?>{};
            positional.add(p0);
            positional.add(p1);
            positional.add(p2);
            positional.add(p3);
            return _flaxBridgeCallback.call(positional, named) as _Shape4;
          };
      bool _callback0Matches(Object value) =>
          value
              is _Shape4 Function(
                _Shape0 base,
                _Shape1 pictures,
                _Shape2 width,
                _Shape3 height,
              );
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function
            as _Shape4 Function(
              _Shape0 base,
              _Shape1 pictures,
              _Shape2 width,
              _Shape3 height,
            ))(
          positional[0] as _Shape0,
          positional[1] as _Shape1,
          positional[2] as _Shape2,
          positional[3] as _Shape3,
        );
      }

      return types.define<
        _Shape4 Function(
          _Shape0 base,
          _Shape1 pictures,
          _Shape2 width,
          _Shape3 height,
        )
      >(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "base",
                types.ref<_Shape0>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "pictures",
                types.ref<_Shape1>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "width",
                types.ref<_Shape2>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "height",
                types.ref<_Shape3>(withinCallback: true),
              ),
            ],
            types.ref<_Shape4>(withinCallback: true),
            _callback0,
            id:
                types
                    .key<
                      _Shape4 Function(
                        _Shape0 base,
                        _Shape1 pictures,
                        _Shape2 width,
                        _Shape3 height,
                      )
                    >() +
                ":callback:<>(p:r:base:parameter:,p:r:pictures:parameter:,p:r:width:parameter:,p:r:height:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape2<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
  return types.define<_Shape0 Function()>(
    FlaxTypeRef(
      "callback",
      nullable: false,
      callback: FlaxCallbackBinding(
        [],
        types.ref<_Shape0>(withinCallback: true),
        FlaxCallbackAdapters.wrap0<_Shape0>,
        id: types.key<_Shape0 Function()>() + ":callback:<>()->parameter:",
        invoke: FlaxCallbackAdapters.invoke0<_Shape0>,
        matches: FlaxCallbackAdapters.matches0<_Shape0>,
      ),
    ),
    withinCallback: withinCallback,
  );
};
Object _callback0(FlaxCallback _flaxBridgeCallback) =>
    (api1.Image? p0, List<api1.Picture> p1, int p2, int p3) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      positional.add(p3);
      return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
          .then<api1.Image?>((value) => value as api1.Image?);
    };
bool _callback0Matches(Object value) =>
    value
        is Future<api1.Image?> Function(
          api1.Image? base,
          List<api1.Picture> pictures,
          int width,
          int height,
        );
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as Future<api1.Image?> Function(
        api1.Image? base,
        List<api1.Picture> pictures,
        int width,
        int height,
      ))(
    positional[0] as api1.Image?,
    positional[1] as List<api1.Picture>,
    positional[2] as int,
    positional[3] as int,
  );
}

Object _collection0Create() => <api1.Picture>[];
bool _collection0Matches(Object value) => value is List<api1.Picture>;
Object _collection1Create() => <api1.Picture>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.Picture>();
bool _collection1Matches(Object value) => value is Iterable<api1.Picture>;
Future<Object?> _future0Adapt(Future<Object?> value) =>
    value.then<api1.Image?>((value) => value as api1.Image?);
const _flaxBinding0 = FlaxGetter.plain(
  "hasListeners",
  flaxBoolType,
  _FlaxCanvasSurface_hasListeners,
);
const _flaxBinding1 = FlaxGetter.plain(
  "alpha",
  flaxBoolType,
  _FlaxCanvasSurface_alpha,
);
const _flaxBinding2 = FlaxGetter.plain(
  "width",
  flaxIntType,
  _FlaxCanvasSurface_width,
);
const _flaxBinding3 = FlaxGetter.plain(
  "height",
  flaxIntType,
  _FlaxCanvasSurface_height,
);
const _flaxBinding4 = FlaxGetter.plain(
  "generation",
  flaxIntType,
  _FlaxCanvasSurface_generation,
);
const _flaxBinding5 = FlaxGetter.plain(
  "sequence",
  flaxIntType,
  _FlaxCanvasSurface_sequence,
);
const _flaxBinding6 = FlaxGetter.plain(
  "decodedBytes",
  flaxIntType,
  _FlaxCanvasSurface_decodedBytes,
);
const _flaxBinding7 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Image",
  nullable: true,
);
const _flaxBinding8 = FlaxGetter.plain(
  "base",
  _flaxBinding7,
  _FlaxCanvasSurface_base,
);
const _flaxBinding9 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Picture",
);
const _flaxBinding10 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding9,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Picture]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding11 = FlaxTypeRef(
  "list",
  item: _flaxBinding9,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Picture]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding10,
);
const _flaxBinding12 = FlaxGetter.plain(
  "pictures",
  _flaxBinding11,
  _FlaxCanvasSurface_pictures,
);
const _flaxBinding13 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Picture",
  nullable: true,
);
const _flaxBinding14 = FlaxGetter.plain(
  "tail",
  _flaxBinding13,
  _FlaxCanvasSurface_tail,
);
const _flaxBinding15 = FlaxGetter.plain(
  "compressing",
  flaxBoolType,
  _FlaxCanvasSurface_compressing,
);
const _flaxBinding16 = FlaxGetter.plain(
  "compressGeneration",
  flaxIntType,
  _FlaxCanvasSurface_compressGeneration,
);
const _flaxBinding17 = FlaxGetter.plain(
  "compressCount",
  flaxIntType,
  _FlaxCanvasSurface_compressCount,
);
const _flaxBinding18 = FlaxGetter.plain(
  "compressBytes",
  flaxIntType,
  _FlaxCanvasSurface_compressBytes,
);
const _flaxBinding19 = FlaxGetter.plain(
  "closed",
  flaxBoolType,
  _FlaxCanvasSurface_closed,
);
const _flaxBinding20 = FlaxGetter.plain(
  "transferred",
  flaxBoolType,
  _FlaxCanvasSurface_transferred,
);
const _flaxBinding21 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
);
const _flaxBinding22 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("error", flaxAnyType),
    FlaxCallbackParameter.plain("stack", _flaxBinding21),
  ],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid2<Object, api3.StackTrace>,
  id: "callback:<>(p:r:error:any:,p:r:stack:object:flax.core/flutter#type:StackTrace)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid2<Object, api3.StackTrace>,
  matches: FlaxCallbackAdapters.matchesVoid2<Object, api3.StackTrace>,
);
const _flaxBinding23 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding22,
);
const _flaxBinding24 = FlaxGetter.plain(
  "onError",
  _flaxBinding23,
  _FlaxCanvasSurface_onError,
);
const _flaxBinding25 = FlaxTypeRef(
  "future",
  item: _flaxBinding7,
  future: FlaxFutureBinding(
    "object?:flax.core/sdk_dart_ui#type:Image",
    _future0Adapt,
  ),
);
const _flaxBinding26 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("base", _flaxBinding7),
    FlaxCallbackParameter.plain("pictures", _flaxBinding11),
    FlaxCallbackParameter.plain("width", flaxIntType),
    FlaxCallbackParameter.plain("height", flaxIntType),
  ],
  _flaxBinding25,
  _callback0,
  id: "callback:<>(p:r:base:object?:flax.core/sdk_dart_ui#type:Image,p:r:pictures:list:[object:flax.core/sdk_dart_ui#type:Picture],p:r:width:int:,p:r:height:int:)->future:[object?:flax.core/sdk_dart_ui#type:Image]",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding27 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding26,
);
const _flaxBinding28 = FlaxGetter.plain(
  "debugRasterize",
  _flaxBinding27,
  _FlaxCanvasSurface_debugRasterize,
);
const _flaxBinding29 = FlaxSetter(
  "alpha",
  flaxBoolType,
  _FlaxCanvasSurface_set_alpha,
);
const _flaxBinding30 = FlaxSetter(
  "width",
  flaxIntType,
  _FlaxCanvasSurface_set_width,
);
const _flaxBinding31 = FlaxSetter(
  "height",
  flaxIntType,
  _FlaxCanvasSurface_set_height,
);
const _flaxBinding32 = FlaxSetter(
  "generation",
  flaxIntType,
  _FlaxCanvasSurface_set_generation,
);
const _flaxBinding33 = FlaxSetter(
  "sequence",
  flaxIntType,
  _FlaxCanvasSurface_set_sequence,
);
const _flaxBinding34 = FlaxSetter(
  "decodedBytes",
  flaxIntType,
  _FlaxCanvasSurface_set_decodedBytes,
);
const _flaxBinding35 = FlaxSetter(
  "base",
  _flaxBinding7,
  _FlaxCanvasSurface_set_base,
);
const _flaxBinding36 = FlaxSetter(
  "tail",
  _flaxBinding13,
  _FlaxCanvasSurface_set_tail,
);
const _flaxBinding37 = FlaxSetter(
  "compressing",
  flaxBoolType,
  _FlaxCanvasSurface_set_compressing,
);
const _flaxBinding38 = FlaxSetter(
  "compressGeneration",
  flaxIntType,
  _FlaxCanvasSurface_set_compressGeneration,
);
const _flaxBinding39 = FlaxSetter(
  "compressCount",
  flaxIntType,
  _FlaxCanvasSurface_set_compressCount,
);
const _flaxBinding40 = FlaxSetter(
  "compressBytes",
  flaxIntType,
  _FlaxCanvasSurface_set_compressBytes,
);
const _flaxBinding41 = FlaxSetter(
  "closed",
  flaxBoolType,
  _FlaxCanvasSurface_set_closed,
);
const _flaxBinding42 = FlaxSetter(
  "transferred",
  flaxBoolType,
  _FlaxCanvasSurface_set_transferred,
);
const _flaxBinding43 = FlaxSetter(
  "onError",
  _flaxBinding23,
  _FlaxCanvasSurface_set_onError,
);
const _flaxBinding44 = FlaxSetter(
  "debugRasterize",
  _flaxBinding27,
  _FlaxCanvasSurface_set_debugRasterize,
);
const _flaxBinding45 = <FlaxParameter>[
  FlaxParameter.required("listener", flaxVoidCallbackType),
];
const _flaxBinding46 = FlaxInstanceMethod.plain(
  _flaxBinding45,
  flaxVoidType,
  _FlaxCanvasSurface_addListener,
);
const _flaxBinding47 = FlaxInstanceMethod.plain(
  _flaxBinding45,
  flaxVoidType,
  _FlaxCanvasSurface_removeListener,
);
const _flaxBinding48 = <FlaxParameter>[];
const _flaxBinding49 = FlaxInstanceMethod.plain(
  _flaxBinding48,
  flaxVoidType,
  _FlaxCanvasSurface_dispose,
);
const _flaxBinding50 = <FlaxParameter>[
  FlaxParameter.required("nextWidth", flaxIntType),
  FlaxParameter.required("nextHeight", flaxIntType),
  FlaxParameter("reset", flaxBoolType, required: false, defaultValue: false),
];
const _flaxBinding51 = FlaxInstanceMethod.plain(
  _flaxBinding50,
  flaxVoidType,
  _FlaxCanvasSurface_resize,
);
const _flaxBinding52 = FlaxInstanceMethod.plain(
  _flaxBinding48,
  flaxVoidType,
  _FlaxCanvasSurface_clearHistory,
);
const _flaxBinding53 = <FlaxParameter>[
  FlaxParameter.required("picture", _flaxBinding9),
  FlaxParameter.required("bytes", flaxIntType),
];
const _flaxBinding54 = FlaxInstanceMethod.plain(
  _flaxBinding53,
  flaxVoidType,
  _FlaxCanvasSurface_addPicture,
);
const _flaxBinding55 = FlaxInstanceMethod.plain(
  _flaxBinding48,
  flaxVoidType,
  _FlaxCanvasSurface_replaceWithClear,
);
const _flaxBinding56 = FlaxInstanceMethod.plain(
  _flaxBinding48,
  flaxVoidType,
  _FlaxCanvasSurface_maybeCompress,
);
const _flaxBinding57 = FlaxInstanceMethod.plain(
  _flaxBinding48,
  _flaxBinding25,
  _FlaxCanvasSurface_rasterize,
);
const _flaxBinding58 = FlaxInstanceMethod.plain(
  _flaxBinding48,
  _flaxBinding7,
  _FlaxCanvasSurface_rasterizeSync,
);
const _flaxBinding59 = FlaxInstanceMethod.plain(
  _flaxBinding48,
  flaxVoidType,
  _FlaxCanvasSurface_abandon,
);
const _flaxBinding60 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Canvas",
);
const _flaxBinding61 = <FlaxParameter>[
  FlaxParameter.required("canvas", _flaxBinding60),
  FlaxParameter.required("size", flaxSizeType),
];
const _flaxBinding62 = FlaxInstanceMethod.plain(
  _flaxBinding61,
  flaxVoidType,
  _FlaxCanvasSurface_paint,
);
const _flaxBinding63 = <FlaxParameter>[
  FlaxParameter.required("width", flaxIntType),
  FlaxParameter.required("height", flaxIntType),
  FlaxParameter("alpha", flaxBoolType, required: false, defaultValue: true),
];
const _flaxBinding64 = FlaxObjectBinding(
  "flax.canvas/canvas#type:FlaxCanvasSurface",
  [
    _flaxBinding0,
    _flaxBinding1,
    _flaxBinding2,
    _flaxBinding3,
    _flaxBinding4,
    _flaxBinding5,
    _flaxBinding6,
    _flaxBinding8,
    _flaxBinding12,
    _flaxBinding14,
    _flaxBinding15,
    _flaxBinding16,
    _flaxBinding17,
    _flaxBinding18,
    _flaxBinding19,
    _flaxBinding20,
    _flaxBinding24,
    _flaxBinding28,
  ],
  {
    "addListener": _flaxBinding46,
    "removeListener": _flaxBinding47,
    "dispose": _flaxBinding49,
    "resize": _flaxBinding51,
    "clearHistory": _flaxBinding52,
    "addPicture": _flaxBinding54,
    "replaceWithClear": _flaxBinding55,
    "maybeCompress": _flaxBinding56,
    "rasterize": _flaxBinding57,
    "rasterizeSync": _flaxBinding58,
    "abandon": _flaxBinding59,
    "paint": _flaxBinding62,
  },
  constructors: {"": _flaxBinding63},
  create: _createFlaxCanvasSurface,
  matches: _isFlaxCanvasSurface,
  setters: [
    _flaxBinding29,
    _flaxBinding30,
    _flaxBinding31,
    _flaxBinding32,
    _flaxBinding33,
    _flaxBinding34,
    _flaxBinding35,
    _flaxBinding36,
    _flaxBinding37,
    _flaxBinding38,
    _flaxBinding39,
    _flaxBinding40,
    _flaxBinding41,
    _flaxBinding42,
    _flaxBinding43,
    _flaxBinding44,
  ],
  supertypes: [
    "flax.core/sdk_foundation#type:ChangeNotifier",
    "dart:core::Object",
    "flax.core/flutter#type:Listenable",
  ],
  disposeMethod: "dispose",
  listenerPairs: {"addListener": "removeListener"},
);
const _flaxBinding65 = FlaxTypeRef(
  "object",
  id: "flax.canvas/canvas#type:FlaxCanvasSurface",
);
const _flaxBinding66 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Key",
  nullable: true,
);
