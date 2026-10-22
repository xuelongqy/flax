// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';
import 'dart:ui' as api;

import 'package:flax/bindings.dart';

import 'dart:typed_data' as api1;
import 'dart:core' as api2;
import 'dart:async' as api3;
import 'dart:isolate' as api4;

// ignore: unused_element
const _flaxOmitted = Object();
const sdk_dart_uiBindings = FlaxBindingModule(
  'sdk_dart_ui',
  [
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:AppExitResponse",
      {"exit": api.AppExitResponse.exit, "cancel": api.AppExitResponse.cancel},
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:AppExitType",
      {
        "cancelable": api.AppExitType.cancelable,
        "required": api.AppExitType.required,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:AppLifecycleState",
      {
        "detached": api.AppLifecycleState.detached,
        "resumed": api.AppLifecycleState.resumed,
        "inactive": api.AppLifecycleState.inactive,
        "hidden": api.AppLifecycleState.hidden,
        "paused": api.AppLifecycleState.paused,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:BlendMode",
      {
        "clear": api.BlendMode.clear,
        "src": api.BlendMode.src,
        "dst": api.BlendMode.dst,
        "srcOver": api.BlendMode.srcOver,
        "dstOver": api.BlendMode.dstOver,
        "srcIn": api.BlendMode.srcIn,
        "dstIn": api.BlendMode.dstIn,
        "srcOut": api.BlendMode.srcOut,
        "dstOut": api.BlendMode.dstOut,
        "srcATop": api.BlendMode.srcATop,
        "dstATop": api.BlendMode.dstATop,
        "xor": api.BlendMode.xor,
        "plus": api.BlendMode.plus,
        "modulate": api.BlendMode.modulate,
        "screen": api.BlendMode.screen,
        "overlay": api.BlendMode.overlay,
        "darken": api.BlendMode.darken,
        "lighten": api.BlendMode.lighten,
        "colorDodge": api.BlendMode.colorDodge,
        "colorBurn": api.BlendMode.colorBurn,
        "hardLight": api.BlendMode.hardLight,
        "softLight": api.BlendMode.softLight,
        "difference": api.BlendMode.difference,
        "exclusion": api.BlendMode.exclusion,
        "multiply": api.BlendMode.multiply,
        "hue": api.BlendMode.hue,
        "saturation": api.BlendMode.saturation,
        "color": api.BlendMode.color,
        "luminosity": api.BlendMode.luminosity,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:BlurStyle",
      {
        "normal": api.BlurStyle.normal,
        "solid": api.BlurStyle.solid,
        "outer": api.BlurStyle.outer,
        "inner": api.BlurStyle.inner,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:BoxHeightStyle",
      {
        "tight": api.BoxHeightStyle.tight,
        "max": api.BoxHeightStyle.max,
        "includeLineSpacingMiddle": api.BoxHeightStyle.includeLineSpacingMiddle,
        "includeLineSpacingTop": api.BoxHeightStyle.includeLineSpacingTop,
        "includeLineSpacingBottom": api.BoxHeightStyle.includeLineSpacingBottom,
        "strut": api.BoxHeightStyle.strut,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:BoxWidthStyle",
      {"tight": api.BoxWidthStyle.tight, "max": api.BoxWidthStyle.max},
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:Brightness",
      {"dark": api.Brightness.dark, "light": api.Brightness.light},
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:ClipOp",
      {"difference": api.ClipOp.difference, "intersect": api.ClipOp.intersect},
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:PointMode",
      {
        "points": api.PointMode.points,
        "lines": api.PointMode.lines,
        "polygon": api.PointMode.polygon,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:CheckedState",
      {
        "none": api.CheckedState.none,
        "isTrue": api.CheckedState.isTrue,
        "isFalse": api.CheckedState.isFalse,
        "mixed": api.CheckedState.mixed,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:ColorSpace",
      {
        "sRGB": api.ColorSpace.sRGB,
        "extendedSRGB": api.ColorSpace.extendedSRGB,
        "displayP3": api.ColorSpace.displayP3,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:DartPerformanceMode",
      {
        "balanced": api.DartPerformanceMode.balanced,
        "latency": api.DartPerformanceMode.latency,
        "throughput": api.DartPerformanceMode.throughput,
        "memory": api.DartPerformanceMode.memory,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:DisplayFeatureType",
      {
        "unknown": api.DisplayFeatureType.unknown,
        "fold": api.DisplayFeatureType.fold,
        "hinge": api.DisplayFeatureType.hinge,
        "cutout": api.DisplayFeatureType.cutout,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:DisplayFeatureState",
      {
        "unknown": api.DisplayFeatureState.unknown,
        "postureFlat": api.DisplayFeatureState.postureFlat,
        "postureHalfOpened": api.DisplayFeatureState.postureHalfOpened,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:FilterQuality",
      {
        "none": api.FilterQuality.none,
        "low": api.FilterQuality.low,
        "medium": api.FilterQuality.medium,
        "high": api.FilterQuality.high,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:FramePhase",
      {
        "vsyncStart": api.FramePhase.vsyncStart,
        "buildStart": api.FramePhase.buildStart,
        "buildFinish": api.FramePhase.buildFinish,
        "rasterStart": api.FramePhase.rasterStart,
        "rasterFinish": api.FramePhase.rasterFinish,
        "rasterFinishWallTime": api.FramePhase.rasterFinishWallTime,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:TileMode",
      {
        "clamp": api.TileMode.clamp,
        "repeated": api.TileMode.repeated,
        "mirror": api.TileMode.mirror,
        "decal": api.TileMode.decal,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:ImageByteFormat",
      {
        "rawRgba": api.ImageByteFormat.rawRgba,
        "rawStraightRgba": api.ImageByteFormat.rawStraightRgba,
        "rawUnmodified": api.ImageByteFormat.rawUnmodified,
        "rawExtendedRgba128": api.ImageByteFormat.rawExtendedRgba128,
        "png": api.ImageByteFormat.png,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:TargetPixelFormat",
      {
        "dontCare": api.TargetPixelFormat.dontCare,
        "rgbaFloat32": api.TargetPixelFormat.rgbaFloat32,
        "rFloat32": api.TargetPixelFormat.rFloat32,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:PixelFormat",
      {
        "rgba8888": api.PixelFormat.rgba8888,
        "bgra8888": api.PixelFormat.bgra8888,
        "rgbaFloat32": api.PixelFormat.rgbaFloat32,
        "rFloat32": api.PixelFormat.rFloat32,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:KeyEventType",
      {
        "down": api.KeyEventType.down,
        "up": api.KeyEventType.up,
        "repeat": api.KeyEventType.repeat,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:KeyEventDeviceType",
      {
        "keyboard": api.KeyEventDeviceType.keyboard,
        "directionalPad": api.KeyEventDeviceType.directionalPad,
        "gamepad": api.KeyEventDeviceType.gamepad,
        "joystick": api.KeyEventDeviceType.joystick,
        "hdmi": api.KeyEventDeviceType.hdmi,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:PaintingStyle",
      {"fill": api.PaintingStyle.fill, "stroke": api.PaintingStyle.stroke},
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:StrokeCap",
      {
        "butt": api.StrokeCap.butt,
        "round": api.StrokeCap.round,
        "square": api.StrokeCap.square,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:StrokeJoin",
      {
        "miter": api.StrokeJoin.miter,
        "round": api.StrokeJoin.round,
        "bevel": api.StrokeJoin.bevel,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:PlaceholderAlignment",
      {
        "baseline": api.PlaceholderAlignment.baseline,
        "aboveBaseline": api.PlaceholderAlignment.aboveBaseline,
        "belowBaseline": api.PlaceholderAlignment.belowBaseline,
        "top": api.PlaceholderAlignment.top,
        "bottom": api.PlaceholderAlignment.bottom,
        "middle": api.PlaceholderAlignment.middle,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:PathFillType",
      {
        "nonZero": api.PathFillType.nonZero,
        "evenOdd": api.PathFillType.evenOdd,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:PathOperation",
      {
        "difference": api.PathOperation.difference,
        "intersect": api.PathOperation.intersect,
        "union": api.PathOperation.union,
        "xor": api.PathOperation.xor,
        "reverseDifference": api.PathOperation.reverseDifference,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:ViewFocusDirection",
      {
        "undefined": api.ViewFocusDirection.undefined,
        "forward": api.ViewFocusDirection.forward,
        "backward": api.ViewFocusDirection.backward,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:ViewFocusState",
      {
        "unfocused": api.ViewFocusState.unfocused,
        "focused": api.ViewFocusState.focused,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:PointerChange",
      {
        "cancel": api.PointerChange.cancel,
        "add": api.PointerChange.add,
        "remove": api.PointerChange.remove,
        "hover": api.PointerChange.hover,
        "down": api.PointerChange.down,
        "move": api.PointerChange.move,
        "up": api.PointerChange.up,
        "panZoomStart": api.PointerChange.panZoomStart,
        "panZoomUpdate": api.PointerChange.panZoomUpdate,
        "panZoomEnd": api.PointerChange.panZoomEnd,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:PointerDeviceKind",
      {
        "touch": api.PointerDeviceKind.touch,
        "mouse": api.PointerDeviceKind.mouse,
        "stylus": api.PointerDeviceKind.stylus,
        "invertedStylus": api.PointerDeviceKind.invertedStylus,
        "trackpad": api.PointerDeviceKind.trackpad,
        "unknown": api.PointerDeviceKind.unknown,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:PointerSignalKind",
      {
        "none": api.PointerSignalKind.none,
        "scroll": api.PointerSignalKind.scroll,
        "scrollInertiaCancel": api.PointerSignalKind.scrollInertiaCancel,
        "scale": api.PointerSignalKind.scale,
        "unknown": api.PointerSignalKind.unknown,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:Tristate",
      {
        "none": api.Tristate.none,
        "isTrue": api.Tristate.isTrue,
        "isFalse": api.Tristate.isFalse,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
      {
        "defer": api.SemanticsHitTestBehavior.defer,
        "opaque": api.SemanticsHitTestBehavior.opaque,
        "transparent": api.SemanticsHitTestBehavior.transparent,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:SemanticsInputType",
      {
        "none": api.SemanticsInputType.none,
        "text": api.SemanticsInputType.text,
        "url": api.SemanticsInputType.url,
        "phone": api.SemanticsInputType.phone,
        "search": api.SemanticsInputType.search,
        "email": api.SemanticsInputType.email,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:SemanticsRole",
      {
        "none": api.SemanticsRole.none,
        "tab": api.SemanticsRole.tab,
        "tabBar": api.SemanticsRole.tabBar,
        "tabPanel": api.SemanticsRole.tabPanel,
        "dialog": api.SemanticsRole.dialog,
        "alertDialog": api.SemanticsRole.alertDialog,
        "table": api.SemanticsRole.table,
        "cell": api.SemanticsRole.cell,
        "row": api.SemanticsRole.row,
        "columnHeader": api.SemanticsRole.columnHeader,
        "dragHandle": api.SemanticsRole.dragHandle,
        "spinButton": api.SemanticsRole.spinButton,
        "comboBox": api.SemanticsRole.comboBox,
        "menuBar": api.SemanticsRole.menuBar,
        "menu": api.SemanticsRole.menu,
        "menuItem": api.SemanticsRole.menuItem,
        "menuItemCheckbox": api.SemanticsRole.menuItemCheckbox,
        "menuItemRadio": api.SemanticsRole.menuItemRadio,
        "list": api.SemanticsRole.list,
        "listItem": api.SemanticsRole.listItem,
        "form": api.SemanticsRole.form,
        "tooltip": api.SemanticsRole.tooltip,
        "loadingSpinner": api.SemanticsRole.loadingSpinner,
        "progressBar": api.SemanticsRole.progressBar,
        "hotKey": api.SemanticsRole.hotKey,
        "radioGroup": api.SemanticsRole.radioGroup,
        "status": api.SemanticsRole.status,
        "alert": api.SemanticsRole.alert,
        "complementary": api.SemanticsRole.complementary,
        "contentInfo": api.SemanticsRole.contentInfo,
        "main": api.SemanticsRole.main,
        "navigation": api.SemanticsRole.navigation,
        "region": api.SemanticsRole.region,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:SemanticsValidationResult",
      {
        "none": api.SemanticsValidationResult.none,
        "valid": api.SemanticsValidationResult.valid,
        "invalid": api.SemanticsValidationResult.invalid,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:TextLeadingDistribution",
      {
        "proportional": api.TextLeadingDistribution.proportional,
        "even": api.TextLeadingDistribution.even,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:TextDecorationStyle",
      {
        "solid": api.TextDecorationStyle.solid,
        "double": api.TextDecorationStyle.double,
        "dotted": api.TextDecorationStyle.dotted,
        "dashed": api.TextDecorationStyle.dashed,
        "wavy": api.TextDecorationStyle.wavy,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_dart_ui#type:VertexMode",
      {
        "triangles": api.VertexMode.triangles,
        "triangleStrip": api.VertexMode.triangleStrip,
        "triangleFan": api.VertexMode.triangleFan,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    _flaxBinding198,
    _flaxBinding203,
    _flaxBinding207,
    _flaxBinding299,
    _flaxBinding316,
    _flaxBinding317,
    _flaxBinding318,
    _flaxBinding319,
    _flaxBinding320,
    _flaxBinding328,
    _flaxBinding334,
    _flaxBinding335,
    _flaxBinding336,
    _flaxBinding347,
    _flaxBinding360,
    _flaxBinding369,
    _flaxBinding202,
    _flaxBinding396,
    _flaxBinding407,
    _flaxBinding415,
    _flaxBinding418,
    _flaxBinding459,
    _flaxBinding462,
    _flaxBinding467,
    _flaxBinding484,
    _flaxBinding495,
    _flaxBinding501,
    _flaxBinding510,
    _flaxBinding517,
    _flaxBinding521,
    _flaxBinding540,
    _flaxBinding558,
    _flaxBinding559,
    _flaxBinding564,
    _flaxBinding571,
    _flaxBinding575,
    _flaxBinding576,
    _flaxBinding598,
    _flaxBinding621,
    _flaxBinding633,
    _flaxBinding645,
    _flaxBinding649,
    _flaxBinding664,
    _flaxBinding665,
    _flaxBinding666,
    _flaxBinding704,
    _flaxBinding752,
    _flaxBinding773,
    _flaxBinding777,
    _flaxBinding787,
    _flaxBinding858,
    _flaxBinding868,
    _flaxBinding872,
    _flaxBinding924,
    _flaxBinding935,
    _flaxBinding941,
    _flaxBinding946,
    _flaxBinding1074,
    _flaxBinding1075,
    _flaxBinding1154,
    _flaxBinding1158,
    _flaxBinding1206,
    _flaxBinding1217,
    _flaxBinding1257,
    _flaxBinding1296,
    _flaxBinding1297,
    _flaxBinding1302,
    _flaxBinding1391,
    _flaxBinding1397,
    _flaxBinding1411,
    _flaxBinding1415,
    _flaxBinding1479,
    _flaxBinding1481,
    _flaxBinding1500,
    _flaxBinding421,
    _flaxBinding1501,
    _flaxBinding1515,
    _flaxBinding1562,
    _flaxBinding1565,
    _flaxBinding636,
    _flaxBinding1568,
    _flaxBinding1574,
    _flaxBinding1596,
    _flaxBinding1605,
    _flaxBinding1612,
    _flaxBinding1630,
    _flaxBinding1639,
    _flaxBinding1648,
    _flaxBinding1655,
    _flaxBinding1669,
    _flaxBinding1670,
    FlaxObjectBinding(
      "flax.core/sdk_dart_ui#type:UniformArray",
      [_flaxBinding1671],
      {
        "operatorGetIndex": FlaxInstanceMethod.plain(
          _flaxBinding922,
          FlaxTypeRef("object", id: "flax.core/sdk_dart_ui#type:UniformType"),
          _UniformArray_operatorGetIndex,
        ),
      },
      constructors: {},
      create: _createUniformArray,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isUniformArray,
      methods: const {},
    ),
    _flaxBinding1677,
    _flaxBinding1680,
    _flaxBinding1683,
    _flaxBinding1686,
    _flaxBinding1687,
    _flaxBinding1689,
    _flaxBinding1692,
    _flaxBinding1695,
    _flaxBinding1706,
    _flaxBinding1724,
    _flaxBinding1730,
    _flaxBinding1740,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:channelBuffers",
      [],
      _flaxBinding1741,
      _read_channelBuffers,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:isRunningOnPlatformThread",
      [],
      flaxBoolType,
      _read_isRunningOnPlatformThread,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:kTextHeightNone",
      [],
      flaxDoubleType,
      _read_kTextHeightNone,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:window",
      [],
      _flaxBinding1742,
      _read_window,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:clampDouble",
      [
        FlaxParameter.required("x", flaxDoubleType),
        FlaxParameter.required("min", flaxDoubleType),
        FlaxParameter.required("max", flaxDoubleType),
      ],
      flaxDoubleType,
      _function_clampDouble,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:decodeImageFromList",
      [
        FlaxParameter.required("list", flaxUint8ListType),
        FlaxParameter.required("callback", _flaxBinding1744),
      ],
      flaxVoidType,
      _function_decodeImageFromList,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:decodeImageFromPixels",
      [
        FlaxParameter.required("pixels", flaxUint8ListType),
        FlaxParameter.required("width", flaxIntType),
        FlaxParameter.required("height", flaxIntType),
        FlaxParameter.required("format", _flaxBinding551),
        FlaxParameter.required("callback", _flaxBinding1744),
        FlaxParameter(
          "allowUpscaling",
          flaxBoolType,
          required: false,
          defaultValue: true,
        ),
        FlaxParameter("rowBytes", flaxNullableIntType, required: false),
        FlaxParameter(
          "targetFormat",
          _flaxBinding545,
          required: false,
          defaultValue: api.TargetPixelFormat.dontCare,
        ),
        FlaxParameter("targetHeight", flaxNullableIntType, required: false),
        FlaxParameter("targetWidth", flaxNullableIntType, required: false),
      ],
      flaxVoidType,
      _function_decodeImageFromPixels,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:decodeImageFromPixelsSync",
      [
        FlaxParameter.required("pixels", flaxUint8ListType),
        FlaxParameter.required("width", flaxIntType),
        FlaxParameter.required("height", flaxIntType),
        FlaxParameter.required("format", _flaxBinding551),
      ],
      _flaxBinding24,
      _function_decodeImageFromPixelsSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:instantiateImageCodec",
      [
        FlaxParameter.required("list", flaxUint8ListType),
        FlaxParameter(
          "allowUpscaling",
          flaxBoolType,
          required: false,
          defaultValue: true,
        ),
        FlaxParameter("targetHeight", flaxNullableIntType, required: false),
        FlaxParameter("targetWidth", flaxNullableIntType, required: false),
      ],
      _flaxBinding548,
      _function_instantiateImageCodec,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:instantiateImageCodecFromBuffer",
      [
        FlaxParameter.required("buffer", _flaxBinding550),
        FlaxParameter(
          "allowUpscaling",
          flaxBoolType,
          required: false,
          defaultValue: true,
        ),
        FlaxParameter("targetHeight", flaxNullableIntType, required: false),
        FlaxParameter("targetWidth", flaxNullableIntType, required: false),
      ],
      _flaxBinding548,
      _function_instantiateImageCodecFromBuffer,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:instantiateImageCodecWithSize",
      [
        FlaxParameter.required("buffer", _flaxBinding550),
        FlaxParameter("getTargetSize", _flaxBinding1747, required: false),
      ],
      _flaxBinding548,
      _function_instantiateImageCodecWithSize,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:lerpDouble",
      [
        FlaxParameter.required("a", flaxNullableNumType),
        FlaxParameter.required("b", flaxNullableNumType),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      flaxNullableDoubleType,
      _function_lerpDouble,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:loadFontFromList",
      [
        FlaxParameter.required("list", flaxUint8ListType),
        FlaxParameter("fontFamily", flaxNullableStringType, required: false),
      ],
      _flaxBinding61,
      _function_loadFontFromList,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:runOnPlatformThread",
      [FlaxParameter.required("computation", _flaxBinding1750)],
      _flaxBinding1751,
      _function_runOnPlatformThread,
      genericFactory: _flaxGenericFunction9,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:CheckedState.value%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding167)],
      flaxIntType,
      _enum_CheckedState_get_value,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:CheckedState.hasConflict%3Acall",
      [
        FlaxParameter.required("receiver", _flaxBinding167),
        FlaxParameter.required("other", _flaxBinding167),
      ],
      flaxBoolType,
      _enum_CheckedState_call_hasConflict,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:CheckedState.merge%3Acall",
      [
        FlaxParameter.required("receiver", _flaxBinding167),
        FlaxParameter.required("other", _flaxBinding167),
      ],
      _flaxBinding167,
      _enum_CheckedState_call_merge,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:DartPluginRegistrant.ensureInitialized",
      [],
      flaxVoidType,
      _DartPluginRegistrant_ensureInitialized,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:FontVariation.lerp",
      [
        FlaxParameter.required("a", _flaxBinding1752),
        FlaxParameter.required("b", _flaxBinding1752),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding1752,
      _FontVariation_lerp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:FragmentProgram.fromAsset",
      [FlaxParameter.required("assetKey", flaxStringType)],
      _flaxBinding1754,
      _FragmentProgram_fromAsset,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:Image.onCreate",
      [],
      _flaxBinding1756,
      _Image_static_get_onCreate,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:Image.onDispose",
      [],
      _flaxBinding1756,
      _Image_static_get_onDispose,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Image.onCreate%3D",
      [FlaxParameter.required("value", _flaxBinding1756)],
      flaxVoidType,
      _Image_static_set_onCreate,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Image.onDispose%3D",
      [FlaxParameter.required("value", _flaxBinding1756)],
      flaxVoidType,
      _Image_static_set_onDispose,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:ImageDescriptor.encoded",
      [FlaxParameter.required("buffer", _flaxBinding550)],
      _flaxBinding1758,
      _ImageDescriptor_encoded,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:ImmutableBuffer.fromUint8List",
      [FlaxParameter.required("list", flaxUint8ListType)],
      _flaxBinding1759,
      _ImmutableBuffer_fromUint8List,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:ImmutableBuffer.fromAsset",
      [FlaxParameter.required("assetKey", flaxStringType)],
      _flaxBinding1759,
      _ImmutableBuffer_fromAsset,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:ImmutableBuffer.fromFilePath",
      [FlaxParameter.required("path", flaxStringType)],
      _flaxBinding1759,
      _ImmutableBuffer_fromFilePath,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:IsolateNameServer.lookupPortByName",
      [FlaxParameter.required("name", flaxStringType)],
      _flaxBinding1760,
      _IsolateNameServer_lookupPortByName,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:IsolateNameServer.registerPortWithName",
      [
        FlaxParameter.required("port", _flaxBinding1051),
        FlaxParameter.required("name", flaxStringType),
      ],
      flaxBoolType,
      _IsolateNameServer_registerPortWithName,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:IsolateNameServer.removePortNameMapping",
      [FlaxParameter.required("name", flaxStringType)],
      flaxBoolType,
      _IsolateNameServer_removePortNameMapping,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:KeyEventDeviceType.label%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding84)],
      flaxStringType,
      _enum_KeyEventDeviceType_get_label,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:KeyEventType.label%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding82)],
      flaxStringType,
      _enum_KeyEventType_get_label,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Path.combine",
      [
        FlaxParameter.required("operation", _flaxBinding1761),
        FlaxParameter.required("path1", flaxPathType),
        FlaxParameter.required("path2", flaxPathType),
      ],
      flaxPathType,
      _Path_combine,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:Picture.onCreate",
      [],
      _flaxBinding1763,
      _Picture_static_get_onCreate,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:Picture.onDispose",
      [],
      _flaxBinding1763,
      _Picture_static_get_onDispose,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Picture.onCreate%3D",
      [FlaxParameter.required("value", _flaxBinding1763)],
      flaxVoidType,
      _Picture_static_set_onCreate,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Picture.onDispose%3D",
      [FlaxParameter.required("value", _flaxBinding1763)],
      flaxVoidType,
      _Picture_static_set_onDispose,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:PlatformDispatcher.instance",
      [],
      _flaxBinding371,
      _PlatformDispatcher_static_get_instance,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:PluginUtilities.getCallbackHandle",
      [FlaxParameter.required("callback", flaxFunctionType)],
      _flaxBinding1764,
      _PluginUtilities_getCallbackHandle,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:RRect.lerp",
      [
        FlaxParameter.required("a", _flaxBinding1765),
        FlaxParameter.required("b", _flaxBinding1765),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding1765,
      _RRect_lerp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:RSuperellipse.lerp",
      [
        FlaxParameter.required("a", _flaxBinding1766),
        FlaxParameter.required("b", _flaxBinding1766),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding1766,
      _RSuperellipse_lerp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Rect.lerp",
      [
        FlaxParameter.required("a", _flaxBinding0),
        FlaxParameter.required("b", _flaxBinding0),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding0,
      _Rect_lerp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:RootIsolateToken.instance",
      [],
      _flaxBinding1767,
      _RootIsolateToken_static_get_instance,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:SemanticsAction.fromIndex",
      [FlaxParameter.required("index", flaxIntType)],
      _flaxBinding1402,
      _SemanticsAction_fromIndex,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SemanticsAction.values",
      [],
      _flaxBinding1769,
      _SemanticsAction_static_get_values,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:SemanticsFlag.fromIndex",
      [FlaxParameter.required("index", flaxIntType)],
      _flaxBinding1770,
      _SemanticsFlag_fromIndex,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.values",
      [],
      _flaxBinding1773,
      _SemanticsFlag_static_get_values,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SemanticsFlags.none",
      [],
      _flaxBinding161,
      _SemanticsFlags_static_get_none,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:SemanticsFlags.none%3D",
      [FlaxParameter.required("value", _flaxBinding161)],
      flaxVoidType,
      _SemanticsFlags_static_set_none,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Shadow.convertRadiusToSigma",
      [FlaxParameter.required("radius", flaxDoubleType)],
      flaxDoubleType,
      _Shadow_convertRadiusToSigma,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Shadow.lerp",
      [
        FlaxParameter.required("a", _flaxBinding1774),
        FlaxParameter.required("b", _flaxBinding1774),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding1774,
      _Shadow_lerp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Shadow.lerpList",
      [
        FlaxParameter.required("a", _flaxBinding1661),
        FlaxParameter.required("b", _flaxBinding1661),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding1661,
      _Shadow_lerpList,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SystemColor.platformProvidesSystemColors",
      [],
      flaxBoolType,
      _SystemColor_static_get_platformProvidesSystemColors,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SystemColor.light",
      [],
      _flaxBinding1775,
      _SystemColor_static_get_light,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SystemColor.dark",
      [],
      _flaxBinding1775,
      _SystemColor_static_get_dark,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Tristate.value%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding169)],
      flaxIntType,
      _enum_Tristate_get_value,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Tristate.hasConflict%3Acall",
      [
        FlaxParameter.required("receiver", _flaxBinding169),
        FlaxParameter.required("other", _flaxBinding169),
      ],
      flaxBoolType,
      _enum_Tristate_call_hasConflict,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Tristate.merge%3Acall",
      [
        FlaxParameter.required("receiver", _flaxBinding169),
        FlaxParameter.required("other", _flaxBinding169),
      ],
      _flaxBinding169,
      _enum_Tristate_call_merge,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Tristate.toBoolOrNull%3Acall",
      [FlaxParameter.required("receiver", _flaxBinding169)],
      flaxNullableBoolType,
      _enum_Tristate_call_toBoolOrNull,
    ),
  ],
  constants: [
    FlaxConstantGroup(flaxIntType, {
      "flax.core/sdk_dart_ui#read:ChannelBuffers.kDefaultBufferSize":
          api.ChannelBuffers.kDefaultBufferSize,
    }),
    FlaxConstantGroup(flaxStringType, {
      "flax.core/sdk_dart_ui#read:ChannelBuffers.kControlChannelName":
          api.ChannelBuffers.kControlChannelName,
    }),
    FlaxConstantGroup(_flaxBinding1013, {
      "flax.core/sdk_dart_ui#read:HitTestResponse.empty":
          api.HitTestResponse.empty,
    }),
    FlaxConstantGroup(_flaxBinding16, {
      "flax.core/sdk_dart_ui#read:RRect.zero": api.RRect.zero,
    }),
    FlaxConstantGroup(_flaxBinding19, {
      "flax.core/sdk_dart_ui#read:RSuperellipse.zero": api.RSuperellipse.zero,
    }),
    FlaxConstantGroup(flaxRectType, {
      "flax.core/sdk_dart_ui#read:Rect.zero": api.Rect.zero,
      "flax.core/sdk_dart_ui#read:Rect.largest": api.Rect.largest,
    }),
    FlaxConstantGroup(_flaxBinding159, {
      "flax.core/sdk_dart_ui#read:SemanticsAction.tap": api.SemanticsAction.tap,
      "flax.core/sdk_dart_ui#read:SemanticsAction.longPress":
          api.SemanticsAction.longPress,
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollLeft":
          api.SemanticsAction.scrollLeft,
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollRight":
          api.SemanticsAction.scrollRight,
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollUp":
          api.SemanticsAction.scrollUp,
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollDown":
          api.SemanticsAction.scrollDown,
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollToOffset":
          api.SemanticsAction.scrollToOffset,
      "flax.core/sdk_dart_ui#read:SemanticsAction.increase":
          api.SemanticsAction.increase,
      "flax.core/sdk_dart_ui#read:SemanticsAction.decrease":
          api.SemanticsAction.decrease,
      "flax.core/sdk_dart_ui#read:SemanticsAction.showOnScreen":
          api.SemanticsAction.showOnScreen,
      "flax.core/sdk_dart_ui#read:SemanticsAction.moveCursorForwardByCharacter":
          api.SemanticsAction.moveCursorForwardByCharacter,
      "flax.core/sdk_dart_ui#read:SemanticsAction.moveCursorBackwardByCharacter":
          api.SemanticsAction.moveCursorBackwardByCharacter,
      "flax.core/sdk_dart_ui#read:SemanticsAction.setText":
          api.SemanticsAction.setText,
      "flax.core/sdk_dart_ui#read:SemanticsAction.setSelection":
          api.SemanticsAction.setSelection,
      "flax.core/sdk_dart_ui#read:SemanticsAction.copy":
          api.SemanticsAction.copy,
      "flax.core/sdk_dart_ui#read:SemanticsAction.cut": api.SemanticsAction.cut,
      "flax.core/sdk_dart_ui#read:SemanticsAction.paste":
          api.SemanticsAction.paste,
      "flax.core/sdk_dart_ui#read:SemanticsAction.didGainAccessibilityFocus":
          api.SemanticsAction.didGainAccessibilityFocus,
      "flax.core/sdk_dart_ui#read:SemanticsAction.didLoseAccessibilityFocus":
          api.SemanticsAction.didLoseAccessibilityFocus,
      "flax.core/sdk_dart_ui#read:SemanticsAction.customAction":
          api.SemanticsAction.customAction,
      "flax.core/sdk_dart_ui#read:SemanticsAction.dismiss":
          api.SemanticsAction.dismiss,
      "flax.core/sdk_dart_ui#read:SemanticsAction.moveCursorForwardByWord":
          api.SemanticsAction.moveCursorForwardByWord,
      "flax.core/sdk_dart_ui#read:SemanticsAction.moveCursorBackwardByWord":
          api.SemanticsAction.moveCursorBackwardByWord,
      "flax.core/sdk_dart_ui#read:SemanticsAction.focus":
          api.SemanticsAction.focus,
      "flax.core/sdk_dart_ui#read:SemanticsAction.expand":
          api.SemanticsAction.expand,
      "flax.core/sdk_dart_ui#read:SemanticsAction.collapse":
          api.SemanticsAction.collapse,
    }),
    FlaxConstantGroup(_flaxBinding1771, {
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasCheckedState":
          api.SemanticsFlag.hasCheckedState,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isChecked":
          api.SemanticsFlag.isChecked,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isCheckStateMixed":
          api.SemanticsFlag.isCheckStateMixed,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasSelectedState":
          api.SemanticsFlag.hasSelectedState,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isSelected":
          api.SemanticsFlag.isSelected,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isButton":
          api.SemanticsFlag.isButton,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isTextField":
          api.SemanticsFlag.isTextField,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isSlider":
          api.SemanticsFlag.isSlider,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isKeyboardKey":
          api.SemanticsFlag.isKeyboardKey,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isReadOnly":
          api.SemanticsFlag.isReadOnly,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isLink":
          api.SemanticsFlag.isLink,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isFocusable":
          api.SemanticsFlag.isFocusable,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isFocused":
          api.SemanticsFlag.isFocused,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasEnabledState":
          api.SemanticsFlag.hasEnabledState,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isEnabled":
          api.SemanticsFlag.isEnabled,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isInMutuallyExclusiveGroup":
          api.SemanticsFlag.isInMutuallyExclusiveGroup,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isHeader":
          api.SemanticsFlag.isHeader,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isObscured":
          api.SemanticsFlag.isObscured,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isMultiline":
          api.SemanticsFlag.isMultiline,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.scopesRoute":
          api.SemanticsFlag.scopesRoute,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.namesRoute":
          api.SemanticsFlag.namesRoute,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isHidden":
          api.SemanticsFlag.isHidden,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isImage":
          api.SemanticsFlag.isImage,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isLiveRegion":
          api.SemanticsFlag.isLiveRegion,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasToggledState":
          api.SemanticsFlag.hasToggledState,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isToggled":
          api.SemanticsFlag.isToggled,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasImplicitScrolling":
          api.SemanticsFlag.hasImplicitScrolling,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasExpandedState":
          api.SemanticsFlag.hasExpandedState,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isExpanded":
          api.SemanticsFlag.isExpanded,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasRequiredState":
          api.SemanticsFlag.hasRequiredState,
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isRequired":
          api.SemanticsFlag.isRequired,
    }),
    FlaxConstantGroup(_flaxBinding1632, {
      "flax.core/sdk_dart_ui#read:TextDecoration.none": api.TextDecoration.none,
      "flax.core/sdk_dart_ui#read:TextDecoration.underline":
          api.TextDecoration.underline,
      "flax.core/sdk_dart_ui#read:TextDecoration.overline":
          api.TextDecoration.overline,
      "flax.core/sdk_dart_ui#read:TextDecoration.lineThrough":
          api.TextDecoration.lineThrough,
    }),
    FlaxConstantGroup(_flaxBinding378, {
      "flax.core/sdk_dart_ui#read:ViewPadding.zero": api.ViewPadding.zero,
    }),
  ],
  moduleId: "flax.core/sdk_dart_ui",
  dependencyModules: ["flax.core/flutter", "flax.core/sdk_dependencies"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "call-layouts",
    "dart-type-tokens",
    "engine-type-handles",
    "generic-call-types",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "lazy-js-iterables",
    "native-functions",
    "native-navigation-objects",
    "native-widget-proxies",
    "proxy-super-constructors",
    "shared-buffers",
    "shared-static-readers",
    "shared-uint8",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:AccessibilityFeatures",
      api.AccessibilityFeatures,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:AppExitResponse",
      api.AppExitResponse,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:AppExitType",
      api.AppExitType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:AppLifecycleState",
      api.AppLifecycleState,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer",
      api.BackdropFilterEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:BlendMode",
      api.BlendMode,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:BlurStyle",
      api.BlurStyle,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:BoxHeightStyle",
      api.BoxHeightStyle,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:BoxWidthStyle",
      api.BoxWidthStyle,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Brightness",
      api.Brightness,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:CallbackHandle",
      api.CallbackHandle,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Canvas",
      api.Canvas,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ChannelBuffers",
      api.ChannelBuffers,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:CheckedState",
      api.CheckedState,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ClipOp",
      api.ClipOp,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ClipPathEngineLayer",
      api.ClipPathEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ClipRRectEngineLayer",
      api.ClipRRectEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer",
      api.ClipRSuperellipseEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ClipRectEngineLayer",
      api.ClipRectEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Codec",
      api.Codec,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ColorFilter",
      api.ColorFilter,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ColorFilterEngineLayer",
      api.ColorFilterEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ColorSpace",
      api.ColorSpace,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:DartPerformanceMode",
      api.DartPerformanceMode,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:DartPluginRegistrant",
      api.DartPluginRegistrant,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Display",
      api.Display,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:DisplayCornerRadii",
      api.DisplayCornerRadii,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:DisplayFeature",
      api.DisplayFeature,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:DisplayFeatureState",
      api.DisplayFeatureState,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:DisplayFeatureType",
      api.DisplayFeatureType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:EngineLayer",
      api.EngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FilterQuality",
      api.FilterQuality,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FlutterView",
      api.FlutterView,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FontFeature",
      api.FontFeature,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FontVariation",
      api.FontVariation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FragmentProgram",
      api.FragmentProgram,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FragmentShader",
      api.FragmentShader,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FrameData",
      api.FrameData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FrameInfo",
      api.FrameInfo,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FramePhase",
      api.FramePhase,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:FrameTiming",
      api.FrameTiming,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:GestureSettings",
      api.GestureSettings,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:GlyphInfo",
      api.GlyphInfo,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Gradient",
      api.Gradient,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:HitTestRequest",
      api.HitTestRequest,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:HitTestResponse",
      api.HitTestResponse,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Image",
      api.Image,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ImageByteFormat",
      api.ImageByteFormat,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ImageDescriptor",
      api.ImageDescriptor,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ImageFilterEngineLayer",
      api.ImageFilterEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ImageSamplerSlot",
      api.ImageSamplerSlot,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ImageShader",
      api.ImageShader,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ImmutableBuffer",
      api.ImmutableBuffer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:IsolateNameServer",
      api.IsolateNameServer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:KeyData",
      api.KeyData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:KeyEventDeviceType",
      api.KeyEventDeviceType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:KeyEventType",
      api.KeyEventType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:LineMetrics",
      api.LineMetrics,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Locale",
      api.Locale,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:LocaleStringAttribute",
      api.LocaleStringAttribute,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:MaskFilter",
      api.MaskFilter,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:OffsetBase",
      api.OffsetBase,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:OffsetEngineLayer",
      api.OffsetEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:OpacityEngineLayer",
      api.OpacityEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Paint",
      api.Paint,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PaintingStyle",
      api.PaintingStyle,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Paragraph",
      api.Paragraph,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ParagraphBuilder",
      api.ParagraphBuilder,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ParagraphConstraints",
      api.ParagraphConstraints,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ParagraphStyle",
      api.ParagraphStyle,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Path",
      api.Path,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PathFillType",
      api.PathFillType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PathMetric",
      api.PathMetric,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PathMetricIterator",
      api.PathMetricIterator,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PathMetrics",
      api.PathMetrics,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PathOperation",
      api.PathOperation,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Picture",
      api.Picture,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PictureRasterizationException",
      api.PictureRasterizationException,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PictureRecorder",
      api.PictureRecorder,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PixelFormat",
      api.PixelFormat,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PlaceholderAlignment",
      api.PlaceholderAlignment,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PlatformDispatcher",
      api.PlatformDispatcher,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PluginUtilities",
      api.PluginUtilities,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PointMode",
      api.PointMode,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PointerChange",
      api.PointerChange,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PointerData",
      api.PointerData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PointerDataPacket",
      api.PointerDataPacket,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PointerDeviceKind",
      api.PointerDeviceKind,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:PointerSignalKind",
      api.PointerSignalKind,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:RRect",
      api.RRect,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:RSTransform",
      api.RSTransform,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:RSuperellipse",
      api.RSuperellipse,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Rect",
      api.Rect,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:RootIsolateToken",
      api.RootIsolateToken,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Scene",
      api.Scene,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SceneBuilder",
      api.SceneBuilder,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsAction",
      api.SemanticsAction,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsActionEvent",
      api.SemanticsActionEvent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsFlag",
      api.SemanticsFlag,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsFlags",
      api.SemanticsFlags,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
      api.SemanticsHitTestBehavior,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsInputType",
      api.SemanticsInputType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsRole",
      api.SemanticsRole,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsUpdate",
      api.SemanticsUpdate,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsUpdateBuilder",
      api.SemanticsUpdateBuilder,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SemanticsValidationResult",
      api.SemanticsValidationResult,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Shader",
      api.Shader,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer",
      api.ShaderMaskEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Shadow",
      api.Shadow,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SingletonFlutterWindow",
      api.SingletonFlutterWindow,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SpellOutStringAttribute",
      api.SpellOutStringAttribute,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:StringAttribute",
      api.StringAttribute,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:StrokeCap",
      api.StrokeCap,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:StrokeJoin",
      api.StrokeJoin,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:StrutStyle",
      api.StrutStyle,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SystemColor",
      api.SystemColor,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:SystemColorPalette",
      api.SystemColorPalette,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Tangent",
      api.Tangent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TargetImageSize",
      api.TargetImageSize,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TargetPixelFormat",
      api.TargetPixelFormat,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TextBox",
      api.TextBox,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TextDecoration",
      api.TextDecoration,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TextDecorationStyle",
      api.TextDecorationStyle,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TextHeightBehavior",
      api.TextHeightBehavior,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TextLeadingDistribution",
      api.TextLeadingDistribution,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TextPosition",
      api.TextPosition,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TextStyle",
      api.TextStyle,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TileMode",
      api.TileMode,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:TransformEngineLayer",
      api.TransformEngineLayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Tristate",
      api.Tristate,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:UniformArray",
      api.UniformArray<api.UniformType>,
      "object",
      typeFactory: _flaxType_UniformArray,
      factory: _flaxClass_UniformArray,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:UniformFloatSlot",
      api.UniformFloatSlot,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:UniformMat2Slot",
      api.UniformMat2Slot,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:UniformMat3Slot",
      api.UniformMat3Slot,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:UniformMat4Slot",
      api.UniformMat4Slot,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:UniformType",
      api.UniformType,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:UniformVec2Slot",
      api.UniformVec2Slot,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:UniformVec3Slot",
      api.UniformVec3Slot,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:UniformVec4Slot",
      api.UniformVec4Slot,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:VertexMode",
      api.VertexMode,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:Vertices",
      api.Vertices,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ViewConstraints",
      api.ViewConstraints,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ViewFocusDirection",
      api.ViewFocusDirection,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ViewFocusEvent",
      api.ViewFocusEvent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ViewFocusState",
      api.ViewFocusState,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dart_ui#type:ViewPadding",
      api.ViewPadding,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
final sdk_dart_uiPlugin = FlaxBindingPlugin(
  id: "binding:flax.core/sdk_dart_ui",
  bindingModules: [sdk_dart_uiBindings],
  jsModules: {
    "@flax/dart/ui",
    "@flax/flutter/animation",
    "@flax/flutter/foundation",
    "@flax/flutter/gestures",
    "@flax/flutter/painting",
    "@flax/flutter/rendering",
    "@flax/flutter/scheduler",
    "@flax/flutter/semantics",
    "@flax/flutter/services",
    "@flax/flutter/widgets",
  },
);
Object? _function_clampDouble(Map<String, Object?> values) {
  return api.clampDouble(
    values["x"] as double,
    values["min"] as double,
    values["max"] as double,
  );
}

Object? _function_decodeImageFromList(Map<String, Object?> values) {
  api.decodeImageFromList(
    values["list"] as api1.Uint8List,
    values["callback"] as void Function(api.Image result),
  );
  return null;
}

Object? _function_decodeImageFromPixels(Map<String, Object?> values) {
  api.decodeImageFromPixels(
    values["pixels"] as api1.Uint8List,
    values["width"] as int,
    values["height"] as int,
    values["format"] as api.PixelFormat,
    values["callback"] as void Function(api.Image result),
    allowUpscaling: values["allowUpscaling"] as bool,
    rowBytes: values["rowBytes"] as int?,
    targetFormat: values["targetFormat"] as api.TargetPixelFormat,
    targetHeight: values["targetHeight"] as int?,
    targetWidth: values["targetWidth"] as int?,
  );
  return null;
}

Object? _function_decodeImageFromPixelsSync(Map<String, Object?> values) {
  return api.decodeImageFromPixelsSync(
    values["pixels"] as api1.Uint8List,
    values["width"] as int,
    values["height"] as int,
    values["format"] as api.PixelFormat,
  );
}

Object? _function_instantiateImageCodec(Map<String, Object?> values) {
  return api.instantiateImageCodec(
    values["list"] as api1.Uint8List,
    allowUpscaling: values["allowUpscaling"] as bool,
    targetHeight: values["targetHeight"] as int?,
    targetWidth: values["targetWidth"] as int?,
  );
}

Object? _function_instantiateImageCodecFromBuffer(Map<String, Object?> values) {
  return api.instantiateImageCodecFromBuffer(
    values["buffer"] as api.ImmutableBuffer,
    allowUpscaling: values["allowUpscaling"] as bool,
    targetHeight: values["targetHeight"] as int?,
    targetWidth: values["targetWidth"] as int?,
  );
}

Object? _function_instantiateImageCodecWithSize(Map<String, Object?> values) {
  return api.instantiateImageCodecWithSize(
    values["buffer"] as api.ImmutableBuffer,
    getTargetSize:
        values["getTargetSize"]
            as api.TargetImageSize Function(
              int intrinsicWidth,
              int intrinsicHeight,
            )?,
  );
}

Object? _function_lerpDouble(Map<String, Object?> values) {
  return api.lerpDouble(
    values["a"] as num?,
    values["b"] as num?,
    values["t"] as double,
  );
}

Object? _function_loadFontFromList(Map<String, Object?> values) {
  return api.loadFontFromList(
    values["list"] as api1.Uint8List,
    fontFamily: values["fontFamily"] as String?,
  );
}

Object? _function_runOnPlatformThread(Map<String, Object?> values) {
  return api.runOnPlatformThread<Object?>(
    values["computation"] as api3.FutureOr<Object?> Function(),
  );
}

Object? _read_channelBuffers(Map<String, Object?> values) => api.channelBuffers;
Object? _read_isRunningOnPlatformThread(Map<String, Object?> values) =>
    api.isRunningOnPlatformThread;
Object? _read_kTextHeightNone(Map<String, Object?> values) =>
    api.kTextHeightNone;
Object? _read_window(Map<String, Object?> values) => api.window;
bool _isAccessibilityFeatures(Object value) =>
    value is api.AccessibilityFeatures;
Object? _AccessibilityFeatures_accessibleNavigation(Object value) =>
    (value as api.AccessibilityFeatures).accessibleNavigation;
Object? _AccessibilityFeatures_invertColors(Object value) =>
    (value as api.AccessibilityFeatures).invertColors;
Object? _AccessibilityFeatures_disableAnimations(Object value) =>
    (value as api.AccessibilityFeatures).disableAnimations;
Object? _AccessibilityFeatures_boldText(Object value) =>
    (value as api.AccessibilityFeatures).boldText;
Object? _AccessibilityFeatures_reduceMotion(Object value) =>
    (value as api.AccessibilityFeatures).reduceMotion;
Object? _AccessibilityFeatures_highContrast(Object value) =>
    (value as api.AccessibilityFeatures).highContrast;
Object? _AccessibilityFeatures_onOffSwitchLabels(Object value) =>
    (value as api.AccessibilityFeatures).onOffSwitchLabels;
Object? _AccessibilityFeatures_supportsAnnounce(Object value) =>
    (value as api.AccessibilityFeatures).supportsAnnounce;
Object? _AccessibilityFeatures_autoPlayAnimatedImages(Object value) =>
    (value as api.AccessibilityFeatures).autoPlayAnimatedImages;
Object? _AccessibilityFeatures_autoPlayVideos(Object value) =>
    (value as api.AccessibilityFeatures).autoPlayVideos;
Object? _AccessibilityFeatures_deterministicCursor(Object value) =>
    (value as api.AccessibilityFeatures).deterministicCursor;
Object? _AccessibilityFeatures_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AccessibilityFeatures).toString();
}

Object _createAccessibilityFeatures(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isBackdropFilterEngineLayer(Object value) =>
    value is api.BackdropFilterEngineLayer;
Object _createBackdropFilterEngineLayer(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isCallbackHandle(Object value) => value is api.CallbackHandle;
Object? _CallbackHandle_toRawHandle(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CallbackHandle).toRawHandle();
}

Object? _CallbackHandle_super_toRawHandle(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _CallbackHandleProxy)._flaxSuper_toRawHandle();
}

Object _createCallbackHandle(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "fromRawHandle":
      return api.CallbackHandle.fromRawHandle(values["_handle"] as int);
    case '@implementation':
      return _CallbackHandleProxy.fromRawHandle(
        values['@peer'] as FlaxProxyPeer,
        values["_handle"] as int,
      );
    case "@implementation:fromRawHandle":
      return _CallbackHandleProxy.fromRawHandle(
        values['@peer'] as FlaxProxyPeer,
        values["_handle"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCanvas(Object value) => value is api.Canvas;
Object? _Canvas_save(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).save();
  return null;
}

Object? _Canvas_saveLayer(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).saveLayer(
    values["bounds"] as api.Rect?,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_restore(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).restore();
  return null;
}

Object? _Canvas_restoreToCount(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).restoreToCount(values["count"] as int);
  return null;
}

Object? _Canvas_getSaveCount(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Canvas).getSaveCount();
}

Object? _Canvas_translate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).translate(
    values["dx"] as double,
    values["dy"] as double,
  );
  return null;
}

Object? _Canvas_scale(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).scale(
    values["sx"] as double,
    values["sy"] as double?,
  );
  return null;
}

Object? _Canvas_rotate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).rotate(values["radians"] as double);
  return null;
}

Object? _Canvas_skew(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).skew(values["sx"] as double, values["sy"] as double);
  return null;
}

Object? _Canvas_transform(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).transform(values["matrix4"] as api1.Float64List);
  return null;
}

Object? _Canvas_getTransform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Canvas).getTransform();
}

Object? _Canvas_clipRect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).clipRect(
    values["rect"] as api.Rect,
    clipOp: values["clipOp"] as api.ClipOp,
    doAntiAlias: values["doAntiAlias"] as bool,
  );
  return null;
}

Object? _Canvas_clipRRect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).clipRRect(
    values["rrect"] as api.RRect,
    doAntiAlias: values["doAntiAlias"] as bool,
  );
  return null;
}

Object? _Canvas_clipRSuperellipse(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Canvas).clipRSuperellipse(
    values["rsuperellipse"] as api.RSuperellipse,
    doAntiAlias: values["doAntiAlias"] as bool,
  );
  return null;
}

Object? _Canvas_clipPath(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).clipPath(
    values["path"] as api.Path,
    doAntiAlias: values["doAntiAlias"] as bool,
  );
  return null;
}

Object? _Canvas_getLocalClipBounds(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Canvas).getLocalClipBounds();
}

Object? _Canvas_getDestinationClipBounds(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Canvas).getDestinationClipBounds();
}

Object? _Canvas_drawColor(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawColor(
    values["color"] as api.Color,
    values["blendMode"] as api.BlendMode,
  );
  return null;
}

Object? _Canvas_drawLine(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawLine(
    values["p1"] as api.Offset,
    values["p2"] as api.Offset,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawPaint(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawPaint(values["paint"] as api.Paint);
  return null;
}

Object? _Canvas_drawRect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawRect(
    values["rect"] as api.Rect,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawRRect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawRRect(
    values["rrect"] as api.RRect,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawDRRect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawDRRect(
    values["outer"] as api.RRect,
    values["inner"] as api.RRect,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawRSuperellipse(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Canvas).drawRSuperellipse(
    values["rsuperellipse"] as api.RSuperellipse,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawOval(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawOval(
    values["rect"] as api.Rect,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawCircle(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawCircle(
    values["c"] as api.Offset,
    values["radius"] as double,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawArc(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawArc(
    values["rect"] as api.Rect,
    values["startAngle"] as double,
    values["sweepAngle"] as double,
    values["useCenter"] as bool,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawPath(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawPath(
    values["path"] as api.Path,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawImage(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawImage(
    values["image"] as api.Image,
    values["offset"] as api.Offset,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawImageRect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawImageRect(
    values["image"] as api.Image,
    values["src"] as api.Rect,
    values["dst"] as api.Rect,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawImageNine(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawImageNine(
    values["image"] as api.Image,
    values["center"] as api.Rect,
    values["dst"] as api.Rect,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawPicture(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawPicture(values["picture"] as api.Picture);
  return null;
}

Object? _Canvas_drawParagraph(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawParagraph(
    values["paragraph"] as api.Paragraph,
    values["offset"] as api.Offset,
  );
  return null;
}

Object? _Canvas_drawPoints(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawPoints(
    values["pointMode"] as api.PointMode,
    values["points"] as List<api.Offset>,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawRawPoints(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawRawPoints(
    values["pointMode"] as api.PointMode,
    values["points"] as api1.Float32List,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawVertices(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawVertices(
    values["vertices"] as api.Vertices,
    values["blendMode"] as api.BlendMode,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawAtlas(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawAtlas(
    values["atlas"] as api.Image,
    values["transforms"] as List<api.RSTransform>,
    values["rects"] as List<api.Rect>,
    values["colors"] as List<api.Color>?,
    values["blendMode"] as api.BlendMode?,
    values["cullRect"] as api.Rect?,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawRawAtlas(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawRawAtlas(
    values["atlas"] as api.Image,
    values["rstTransforms"] as api1.Float32List,
    values["rects"] as api1.Float32List,
    values["colors"] as api1.Int32List?,
    values["blendMode"] as api.BlendMode?,
    values["cullRect"] as api.Rect?,
    values["paint"] as api.Paint,
  );
  return null;
}

Object? _Canvas_drawShadow(Object receiver, Map<String, Object?> values) {
  (receiver as api.Canvas).drawShadow(
    values["path"] as api.Path,
    values["color"] as api.Color,
    values["elevation"] as double,
    values["transparentOccluder"] as bool,
  );
  return null;
}

Object _createCanvas(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Canvas(
        values["recorder"] as api.PictureRecorder,
        values["cullRect"] as api.Rect?,
      );
    case '@implementation':
      return _CanvasProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isChannelBuffers(Object value) => value is api.ChannelBuffers;
Object? _ChannelBuffers_push(Object receiver, Map<String, Object?> values) {
  (receiver as api.ChannelBuffers).push(
    values["name"] as String,
    values["data"] as api1.ByteData?,
    values["callback"] as void Function(api1.ByteData? data),
  );
  return null;
}

Object? _ChannelBuffers_setListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ChannelBuffers).setListener(
    values["name"] as String,
    values["callback"]
        as void Function(
          api1.ByteData? data,
          void Function(api1.ByteData? data) callback,
        ),
  );
  return null;
}

Object? _ChannelBuffers_clearListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ChannelBuffers).clearListener(values["name"] as String);
  return null;
}

Object? _ChannelBuffers_sendChannelUpdate(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ChannelBuffers).sendChannelUpdate(
    values["name"] as String,
    listening: values["listening"] as bool,
  );
  return null;
}

Object? _ChannelBuffers_drain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ChannelBuffers).drain(
    values["name"] as String,
    values["callback"]
        as Future<void> Function(
          api1.ByteData? data,
          void Function(api1.ByteData? data) callback,
        ),
  );
}

Object? _ChannelBuffers_handleMessage(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ChannelBuffers).handleMessage(
    values["data"] as api1.ByteData,
  );
  return null;
}

Object? _ChannelBuffers_resize(Object receiver, Map<String, Object?> values) {
  (receiver as api.ChannelBuffers).resize(
    values["name"] as String,
    values["newSize"] as int,
  );
  return null;
}

Object? _ChannelBuffers_allowOverflow(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ChannelBuffers).allowOverflow(
    values["name"] as String,
    values["allowed"] as bool,
  );
  return null;
}

Object? _ChannelBuffers_super_push(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ChannelBuffersProxy)._flaxSuper_push(
    values["name"] as String,
    values["data"] as api1.ByteData?,
    values["callback"] as void Function(api1.ByteData? data),
  );
  return null;
}

Object? _ChannelBuffers_super_setListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ChannelBuffersProxy)._flaxSuper_setListener(
    values["name"] as String,
    values["callback"]
        as void Function(
          api1.ByteData? data,
          void Function(api1.ByteData? data) callback,
        ),
  );
  return null;
}

Object? _ChannelBuffers_super_clearListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ChannelBuffersProxy)._flaxSuper_clearListener(
    values["name"] as String,
  );
  return null;
}

Object? _ChannelBuffers_super_sendChannelUpdate(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ChannelBuffersProxy)._flaxSuper_sendChannelUpdate(
    values["name"] as String,
    listening: values["listening"] as bool,
  );
  return null;
}

Object? _ChannelBuffers_super_drain(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ChannelBuffersProxy)._flaxSuper_drain(
    values["name"] as String,
    values["callback"]
        as Future<void> Function(
          api1.ByteData? data,
          void Function(api1.ByteData? data) callback,
        ),
  );
}

Object? _ChannelBuffers_super_handleMessage(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ChannelBuffersProxy)._flaxSuper_handleMessage(
    values["data"] as api1.ByteData,
  );
  return null;
}

Object? _ChannelBuffers_super_resize(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ChannelBuffersProxy)._flaxSuper_resize(
    values["name"] as String,
    values["newSize"] as int,
  );
  return null;
}

Object? _ChannelBuffers_super_allowOverflow(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ChannelBuffersProxy)._flaxSuper_allowOverflow(
    values["name"] as String,
    values["allowed"] as bool,
  );
  return null;
}

Object _createChannelBuffers(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ChannelBuffers();
    case '@implementation':
      return _ChannelBuffersProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object? _enum_CheckedState_get_value(Map<String, Object?> values) =>
    (values["receiver"] as api.CheckedState).value;
Object? _enum_CheckedState_call_hasConflict(Map<String, Object?> values) {
  return (values["receiver"] as api.CheckedState).hasConflict(
    values["other"] as api.CheckedState,
  );
}

Object? _enum_CheckedState_call_merge(Map<String, Object?> values) {
  return (values["receiver"] as api.CheckedState).merge(
    values["other"] as api.CheckedState,
  );
}

bool _isClipPathEngineLayer(Object value) => value is api.ClipPathEngineLayer;
Object _createClipPathEngineLayer(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isClipRRectEngineLayer(Object value) => value is api.ClipRRectEngineLayer;
Object _createClipRRectEngineLayer(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isClipRSuperellipseEngineLayer(Object value) =>
    value is api.ClipRSuperellipseEngineLayer;
Object _createClipRSuperellipseEngineLayer(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isClipRectEngineLayer(Object value) => value is api.ClipRectEngineLayer;
Object _createClipRectEngineLayer(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isCodec(Object value) => value is api.Codec;
Object? _Codec_frameCount(Object value) => (value as api.Codec).frameCount;
Object? _Codec_repetitionCount(Object value) =>
    (value as api.Codec).repetitionCount;
Object? _Codec_getNextFrame(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Codec).getNextFrame();
}

Object? _Codec_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Codec).dispose();
  return null;
}

Object _createCodec(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _CodecProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isColorFilter(Object value) => value is api.ColorFilter;
Object? _ColorFilter_debugShortDescription(Object value) =>
    (value as api.ColorFilter).debugShortDescription;
Object? _ColorFilter_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorFilter).toString();
}

Object _createColorFilter(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "mode":
      return api.ColorFilter.mode(
        values["color"] as api.Color,
        values["blendMode"] as api.BlendMode,
      );
    case "matrix":
      return api.ColorFilter.matrix(values["matrix"] as List<double>);
    case "linearToSrgbGamma":
      return api.ColorFilter.linearToSrgbGamma();
    case "srgbToLinearGamma":
      return api.ColorFilter.srgbToLinearGamma();
    case "saturation":
      return api.ColorFilter.saturation(values["saturation"] as double);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isColorFilterEngineLayer(Object value) =>
    value is api.ColorFilterEngineLayer;
Object _createColorFilterEngineLayer(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isDartPluginRegistrant(Object value) => value is api.DartPluginRegistrant;
Object? _DartPluginRegistrant_ensureInitialized(Map<String, Object?> values) {
  api.DartPluginRegistrant.ensureInitialized();
  return null;
}

Object _createDartPluginRegistrant(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isDisplay(Object value) => value is api.Display;
Object? _Display_id(Object value) => (value as api.Display).id;
Object? _Display_devicePixelRatio(Object value) =>
    (value as api.Display).devicePixelRatio;
Object? _Display_size(Object value) => (value as api.Display).size;
Object? _Display_refreshRate(Object value) =>
    (value as api.Display).refreshRate;
Object? _Display_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Display).toString();
}

Object _createDisplay(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _DisplayProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isDisplayCornerRadii(Object value) => value is api.DisplayCornerRadii;
Object? _DisplayCornerRadii_topLeft(Object value) =>
    (value as api.DisplayCornerRadii).topLeft;
Object? _DisplayCornerRadii_topRight(Object value) =>
    (value as api.DisplayCornerRadii).topRight;
Object? _DisplayCornerRadii_bottomRight(Object value) =>
    (value as api.DisplayCornerRadii).bottomRight;
Object? _DisplayCornerRadii_bottomLeft(Object value) =>
    (value as api.DisplayCornerRadii).bottomLeft;
Object? _DisplayCornerRadii_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.DisplayCornerRadii).toString();
}

Object? _FlaxProxyDispatch0_super_call_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch0)._flaxSuper_toString();
}

Object? _DisplayCornerRadii_super_get_topLeft(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DisplayCornerRadiiProxy)._flaxSuperGet_topLeft;
Object? _DisplayCornerRadii_super_get_topRight(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DisplayCornerRadiiProxy)._flaxSuperGet_topRight;
Object? _DisplayCornerRadii_super_get_bottomRight(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DisplayCornerRadiiProxy)._flaxSuperGet_bottomRight;
Object? _DisplayCornerRadii_super_get_bottomLeft(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DisplayCornerRadiiProxy)._flaxSuperGet_bottomLeft;
Object _createDisplayCornerRadii(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.DisplayCornerRadii(
        topLeft: values["topLeft"] as double,
        topRight: values["topRight"] as double,
        bottomRight: values["bottomRight"] as double,
        bottomLeft: values["bottomLeft"] as double,
      );
    case '@implementation':
      return _DisplayCornerRadiiProxy(
        values['@peer'] as FlaxProxyPeer,
        topLeft: values["topLeft"] as double,
        topRight: values["topRight"] as double,
        bottomRight: values["bottomRight"] as double,
        bottomLeft: values["bottomLeft"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isDisplayFeature(Object value) => value is api.DisplayFeature;
Object? _DisplayFeature_bounds(Object value) =>
    (value as api.DisplayFeature).bounds;
Object? _DisplayFeature_type(Object value) =>
    (value as api.DisplayFeature).type;
Object? _DisplayFeature_state(Object value) =>
    (value as api.DisplayFeature).state;
Object? _DisplayFeature_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.DisplayFeature).toString();
}

Object? _DisplayFeature_super_get_bounds(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DisplayFeatureProxy)._flaxSuperGet_bounds;
Object? _DisplayFeature_super_get_type(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DisplayFeatureProxy)._flaxSuperGet_type;
Object? _DisplayFeature_super_get_state(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DisplayFeatureProxy)._flaxSuperGet_state;
Object _createDisplayFeature(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.DisplayFeature(
        bounds: values["bounds"] as api.Rect,
        type: values["type"] as api.DisplayFeatureType,
        state: values["state"] as api.DisplayFeatureState,
      );
    case '@implementation':
      return _DisplayFeatureProxy(
        values['@peer'] as FlaxProxyPeer,
        bounds: values["bounds"] as api.Rect,
        type: values["type"] as api.DisplayFeatureType,
        state: values["state"] as api.DisplayFeatureState,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isEngineLayer(Object value) => value is api.EngineLayer;
Object? _EngineLayer_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.EngineLayer).dispose();
  return null;
}

Object _createEngineLayer(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _EngineLayerProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFlutterView(Object value) => value is api.FlutterView;
Object? _FlutterView_viewId(Object value) => (value as api.FlutterView).viewId;
Object? _FlutterView_platformDispatcher(Object value) =>
    (value as api.FlutterView).platformDispatcher;
Object? _FlutterView_display(Object value) =>
    (value as api.FlutterView).display;
Object? _FlutterView_devicePixelRatio(Object value) =>
    (value as api.FlutterView).devicePixelRatio;
Object? _FlutterView_physicalConstraints(Object value) =>
    (value as api.FlutterView).physicalConstraints;
Object? _FlutterView_physicalSize(Object value) =>
    (value as api.FlutterView).physicalSize;
Object? _FlutterView_viewInsets(Object value) =>
    (value as api.FlutterView).viewInsets;
Object? _FlutterView_viewPadding(Object value) =>
    (value as api.FlutterView).viewPadding;
Object? _FlutterView_systemGestureInsets(Object value) =>
    (value as api.FlutterView).systemGestureInsets;
Object? _FlutterView_padding(Object value) =>
    (value as api.FlutterView).padding;
Object? _FlutterView_gestureSettings(Object value) =>
    (value as api.FlutterView).gestureSettings;
Object? _FlutterView_displayFeatures(Object value) =>
    (value as api.FlutterView).displayFeatures;
Object? _FlutterView_displayCornerRadii(Object value) =>
    (value as api.FlutterView).displayCornerRadii;
Object? _FlutterView_render(Object receiver, Map<String, Object?> values) {
  (receiver as api.FlutterView).render(
    values["scene"] as api.Scene,
    size: values["size"] as api.Size?,
  );
  return null;
}

Object? _FlutterView_updateSemantics(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FlutterView).updateSemantics(
    values["update"] as api.SemanticsUpdate,
  );
  return null;
}

Object? _FlutterView_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.FlutterView).toString();
}

Object _createFlutterView(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFontFeature(Object value) => value is api.FontFeature;
Object? _FontFeature_feature(Object value) =>
    (value as api.FontFeature).feature;
Object? _FontFeature_value(Object value) => (value as api.FontFeature).value;
Object? _FontFeature_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.FontFeature).toString();
}

Object? _FontFeature_super_get_feature(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FontFeatureProxy)._flaxSuperGet_feature;
Object? _FontFeature_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FontFeatureProxy)._flaxSuperGet_value;
Object _createFontFeature(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FontFeature(
        values["feature"] as String,
        values["value"] as int,
      );
    case "enable":
      return api.FontFeature.enable(values["feature"] as String);
    case "disable":
      return api.FontFeature.disable(values["feature"] as String);
    case "alternative":
      return api.FontFeature.alternative(values["value"] as int);
    case "alternativeFractions":
      return api.FontFeature.alternativeFractions();
    case "contextualAlternates":
      return api.FontFeature.contextualAlternates();
    case "caseSensitiveForms":
      return api.FontFeature.caseSensitiveForms();
    case "characterVariant":
      return api.FontFeature.characterVariant(values["value"] as int);
    case "denominator":
      return api.FontFeature.denominator();
    case "fractions":
      return api.FontFeature.fractions();
    case "historicalForms":
      return api.FontFeature.historicalForms();
    case "historicalLigatures":
      return api.FontFeature.historicalLigatures();
    case "liningFigures":
      return api.FontFeature.liningFigures();
    case "localeAware":
      return api.FontFeature.localeAware(enable: values["enable"] as bool);
    case "notationalForms":
      return api.FontFeature.notationalForms(values["value"] as int);
    case "numerators":
      return api.FontFeature.numerators();
    case "oldstyleFigures":
      return api.FontFeature.oldstyleFigures();
    case "ordinalForms":
      return api.FontFeature.ordinalForms();
    case "proportionalFigures":
      return api.FontFeature.proportionalFigures();
    case "randomize":
      return api.FontFeature.randomize();
    case "stylisticAlternates":
      return api.FontFeature.stylisticAlternates();
    case "scientificInferiors":
      return api.FontFeature.scientificInferiors();
    case "stylisticSet":
      return api.FontFeature.stylisticSet(values["value"] as int);
    case "subscripts":
      return api.FontFeature.subscripts();
    case "superscripts":
      return api.FontFeature.superscripts();
    case "swash":
      return api.FontFeature.swash(values["value"] as int);
    case "tabularFigures":
      return api.FontFeature.tabularFigures();
    case "slashedZero":
      return api.FontFeature.slashedZero();
    case '@implementation':
      return _FontFeatureProxy(
        values['@peer'] as FlaxProxyPeer,
        values["feature"] as String,
        values["value"] as int,
      );
    case "@implementation:enable":
      return _FontFeatureProxy.enable(
        values['@peer'] as FlaxProxyPeer,
        values["feature"] as String,
      );
    case "@implementation:disable":
      return _FontFeatureProxy.disable(
        values['@peer'] as FlaxProxyPeer,
        values["feature"] as String,
      );
    case "@implementation:alternative":
      return _FontFeatureProxy.alternative(
        values['@peer'] as FlaxProxyPeer,
        values["value"] as int,
      );
    case "@implementation:alternativeFractions":
      return _FontFeatureProxy.alternativeFractions(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:contextualAlternates":
      return _FontFeatureProxy.contextualAlternates(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:caseSensitiveForms":
      return _FontFeatureProxy.caseSensitiveForms(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:denominator":
      return _FontFeatureProxy.denominator(values['@peer'] as FlaxProxyPeer);
    case "@implementation:fractions":
      return _FontFeatureProxy.fractions(values['@peer'] as FlaxProxyPeer);
    case "@implementation:historicalForms":
      return _FontFeatureProxy.historicalForms(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:historicalLigatures":
      return _FontFeatureProxy.historicalLigatures(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:liningFigures":
      return _FontFeatureProxy.liningFigures(values['@peer'] as FlaxProxyPeer);
    case "@implementation:localeAware":
      return _FontFeatureProxy.localeAware(
        values['@peer'] as FlaxProxyPeer,
        enable: values["enable"] as bool,
      );
    case "@implementation:notationalForms":
      return _FontFeatureProxy.notationalForms(
        values['@peer'] as FlaxProxyPeer,
        values["value"] as int,
      );
    case "@implementation:numerators":
      return _FontFeatureProxy.numerators(values['@peer'] as FlaxProxyPeer);
    case "@implementation:oldstyleFigures":
      return _FontFeatureProxy.oldstyleFigures(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:ordinalForms":
      return _FontFeatureProxy.ordinalForms(values['@peer'] as FlaxProxyPeer);
    case "@implementation:proportionalFigures":
      return _FontFeatureProxy.proportionalFigures(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:randomize":
      return _FontFeatureProxy.randomize(values['@peer'] as FlaxProxyPeer);
    case "@implementation:stylisticAlternates":
      return _FontFeatureProxy.stylisticAlternates(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:scientificInferiors":
      return _FontFeatureProxy.scientificInferiors(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:subscripts":
      return _FontFeatureProxy.subscripts(values['@peer'] as FlaxProxyPeer);
    case "@implementation:superscripts":
      return _FontFeatureProxy.superscripts(values['@peer'] as FlaxProxyPeer);
    case "@implementation:swash":
      return _FontFeatureProxy.swash(
        values['@peer'] as FlaxProxyPeer,
        values["value"] as int,
      );
    case "@implementation:tabularFigures":
      return _FontFeatureProxy.tabularFigures(values['@peer'] as FlaxProxyPeer);
    case "@implementation:slashedZero":
      return _FontFeatureProxy.slashedZero(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFontVariation(Object value) => value is api.FontVariation;
Object? _FontVariation_axis(Object value) => (value as api.FontVariation).axis;
Object? _FontVariation_value(Object value) =>
    (value as api.FontVariation).value;
Object? _FontVariation_lerp(Map<String, Object?> values) {
  return api.FontVariation.lerp(
    values["a"] as api.FontVariation?,
    values["b"] as api.FontVariation?,
    values["t"] as double,
  );
}

Object? _FontVariation_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.FontVariation).toString();
}

Object? _FontVariation_super_get_axis(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FontVariationProxy)._flaxSuperGet_axis;
Object? _FontVariation_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FontVariationProxy)._flaxSuperGet_value;
Object _createFontVariation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FontVariation(
        values["axis"] as String,
        values["value"] as double,
      );
    case "italic":
      return api.FontVariation.italic(values["value"] as double);
    case "opticalSize":
      return api.FontVariation.opticalSize(values["value"] as double);
    case "slant":
      return api.FontVariation.slant(values["value"] as double);
    case "width":
      return api.FontVariation.width(values["value"] as double);
    case "weight":
      return api.FontVariation.weight(values["value"] as double);
    case '@implementation':
      return _FontVariationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["axis"] as String,
        values["value"] as double,
      );
    case "@implementation:italic":
      return _FontVariationProxy.italic(
        values['@peer'] as FlaxProxyPeer,
        values["value"] as double,
      );
    case "@implementation:opticalSize":
      return _FontVariationProxy.opticalSize(
        values['@peer'] as FlaxProxyPeer,
        values["value"] as double,
      );
    case "@implementation:slant":
      return _FontVariationProxy.slant(
        values['@peer'] as FlaxProxyPeer,
        values["value"] as double,
      );
    case "@implementation:width":
      return _FontVariationProxy.width(
        values['@peer'] as FlaxProxyPeer,
        values["value"] as double,
      );
    case "@implementation:weight":
      return _FontVariationProxy.weight(
        values['@peer'] as FlaxProxyPeer,
        values["value"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFragmentProgram(Object value) => value is api.FragmentProgram;
Object? _FragmentProgram_fromAsset(Map<String, Object?> values) {
  return api.FragmentProgram.fromAsset(values["assetKey"] as String);
}

Object? _FragmentProgram_fragmentShader(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentProgram).fragmentShader();
}

Object _createFragmentProgram(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFragmentShader(Object value) => value is api.FragmentShader;
Object? _FragmentShader_setFloat(Object receiver, Map<String, Object?> values) {
  (receiver as api.FragmentShader).setFloat(
    values["index"] as int,
    values["value"] as double,
  );
  return null;
}

Object? _FragmentShader_getUniformFloat(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformFloat(
    values["name"] as String,
    values["index"] as int?,
  );
}

Object? _FragmentShader_getUniformVec2(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformVec2(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformVec3(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformVec3(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformVec4(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformVec4(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformMat2(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformMat2(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformMat3(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformMat3(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformMat4(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformMat4(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformFloatArray(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformFloatArray(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformVec2Array(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformVec2Array(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformVec3Array(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformVec3Array(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformVec4Array(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformVec4Array(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformMat2Array(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformMat2Array(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformMat3Array(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformMat3Array(
    values["name"] as String,
  );
}

Object? _FragmentShader_getUniformMat4Array(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getUniformMat4Array(
    values["name"] as String,
  );
}

Object? _FragmentShader_getImageSampler(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FragmentShader).getImageSampler(
    values["name"] as String,
  );
}

Object? _FragmentShader_setImageSampler(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FragmentShader).setImageSampler(
    values["index"] as int,
    values["image"] as api.Image,
    filterQuality: values["filterQuality"] as api.FilterQuality,
  );
  return null;
}

Object _createFragmentShader(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFrameData(Object value) => value is api.FrameData;
Object? _FrameData_frameNumber(Object value) =>
    (value as api.FrameData).frameNumber;
Object _createFrameData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _FrameDataProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFrameInfo(Object value) => value is api.FrameInfo;
Object? _FrameInfo_duration(Object value) => (value as api.FrameInfo).duration;
Object? _FrameInfo_image(Object value) => (value as api.FrameInfo).image;
Object _createFrameInfo(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _FrameInfoProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFrameTiming(Object value) => value is api.FrameTiming;
Object? _FrameTiming_buildDuration(Object value) =>
    (value as api.FrameTiming).buildDuration;
Object? _FrameTiming_rasterDuration(Object value) =>
    (value as api.FrameTiming).rasterDuration;
Object? _FrameTiming_vsyncOverhead(Object value) =>
    (value as api.FrameTiming).vsyncOverhead;
Object? _FrameTiming_totalSpan(Object value) =>
    (value as api.FrameTiming).totalSpan;
Object? _FrameTiming_layerCacheCount(Object value) =>
    (value as api.FrameTiming).layerCacheCount;
Object? _FrameTiming_layerCacheBytes(Object value) =>
    (value as api.FrameTiming).layerCacheBytes;
Object? _FrameTiming_layerCacheMegabytes(Object value) =>
    (value as api.FrameTiming).layerCacheMegabytes;
Object? _FrameTiming_pictureCacheCount(Object value) =>
    (value as api.FrameTiming).pictureCacheCount;
Object? _FrameTiming_pictureCacheBytes(Object value) =>
    (value as api.FrameTiming).pictureCacheBytes;
Object? _FrameTiming_pictureCacheMegabytes(Object value) =>
    (value as api.FrameTiming).pictureCacheMegabytes;
Object? _FrameTiming_frameNumber(Object value) =>
    (value as api.FrameTiming).frameNumber;
Object? _FrameTiming_timestampInMicroseconds(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FrameTiming).timestampInMicroseconds(
    values["phase"] as api.FramePhase,
  );
}

Object? _FrameTiming_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.FrameTiming).toString();
}

Object _createFrameTiming(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FrameTiming(
        vsyncStart: values["vsyncStart"] as int,
        buildStart: values["buildStart"] as int,
        buildFinish: values["buildFinish"] as int,
        rasterStart: values["rasterStart"] as int,
        rasterFinish: values["rasterFinish"] as int,
        rasterFinishWallTime: values["rasterFinishWallTime"] as int,
        layerCacheCount: values["layerCacheCount"] as int,
        layerCacheBytes: values["layerCacheBytes"] as int,
        pictureCacheCount: values["pictureCacheCount"] as int,
        pictureCacheBytes: values["pictureCacheBytes"] as int,
        frameNumber: values["frameNumber"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isGestureSettings(Object value) => value is api.GestureSettings;
Object? _GestureSettings_physicalTouchSlop(Object value) =>
    (value as api.GestureSettings).physicalTouchSlop;
Object? _GestureSettings_physicalDoubleTapSlop(Object value) =>
    (value as api.GestureSettings).physicalDoubleTapSlop;
Object? _GestureSettings_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.GestureSettings).copyWith(
    physicalDoubleTapSlop: values["physicalDoubleTapSlop"] as double?,
    physicalTouchSlop: values["physicalTouchSlop"] as double?,
  );
}

Object? _GestureSettings_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.GestureSettings).toString();
}

Object? _GestureSettings_super_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _GestureSettingsProxy)._flaxSuper_copyWith(
    physicalDoubleTapSlop: values["physicalDoubleTapSlop"] as double?,
    physicalTouchSlop: values["physicalTouchSlop"] as double?,
  );
}

Object? _GestureSettings_super_get_physicalTouchSlop(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _GestureSettingsProxy)._flaxSuperGet_physicalTouchSlop;
Object? _GestureSettings_super_get_physicalDoubleTapSlop(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _GestureSettingsProxy)._flaxSuperGet_physicalDoubleTapSlop;
Object _createGestureSettings(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.GestureSettings(
        physicalTouchSlop: values["physicalTouchSlop"] as double?,
        physicalDoubleTapSlop: values["physicalDoubleTapSlop"] as double?,
      );
    case '@implementation':
      return _GestureSettingsProxy(
        values['@peer'] as FlaxProxyPeer,
        physicalTouchSlop: values["physicalTouchSlop"] as double?,
        physicalDoubleTapSlop: values["physicalDoubleTapSlop"] as double?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isGlyphInfo(Object value) => value is api.GlyphInfo;
Object? _GlyphInfo_graphemeClusterLayoutBounds(Object value) =>
    (value as api.GlyphInfo).graphemeClusterLayoutBounds;
Object? _GlyphInfo_graphemeClusterCodeUnitRange(Object value) =>
    (value as api.GlyphInfo).graphemeClusterCodeUnitRange;
Object? _GlyphInfo_writingDirection(Object value) =>
    (value as api.GlyphInfo).writingDirection;
Object? _GlyphInfo_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.GlyphInfo).toString();
}

Object _createGlyphInfo(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.GlyphInfo(
        values["graphemeClusterLayoutBounds"] as api.Rect,
        values["graphemeClusterCodeUnitRange"] as api.TextRange,
        values["writingDirection"] as api.TextDirection,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isGradient(Object value) => value is api.Gradient;
Object _createGradient(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "linear":
      return api.Gradient.linear(
        values["from"] as api.Offset,
        values["to"] as api.Offset,
        values["colors"] as List<api.Color>,
        values["colorStops"] as List<double>?,
        values["tileMode"] as api.TileMode,
        values["matrix4"] as api1.Float64List?,
      );
    case "radial":
      return api.Gradient.radial(
        values["center"] as api.Offset,
        values["radius"] as double,
        values["colors"] as List<api.Color>,
        values["colorStops"] as List<double>?,
        values["tileMode"] as api.TileMode,
        values["matrix4"] as api1.Float64List?,
        values["focal"] as api.Offset?,
        values["focalRadius"] as double,
      );
    case "sweep":
      return api.Gradient.sweep(
        values["center"] as api.Offset,
        values["colors"] as List<api.Color>,
        values["colorStops"] as List<double>?,
        values["tileMode"] as api.TileMode,
        values["startAngle"] as double,
        values["endAngle"] as double,
        values["matrix4"] as api1.Float64List?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isHitTestRequest(Object value) => value is api.HitTestRequest;
Object? _HitTestRequest_view(Object value) =>
    (value as api.HitTestRequest).view;
Object? _HitTestRequest_offset(Object value) =>
    (value as api.HitTestRequest).offset;
Object? _HitTestRequest_super_get_view(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _HitTestRequestProxy)._flaxSuperGet_view;
Object? _FlaxProxyDispatch1_super_get_offset(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch1)._flaxSuperGet_offset;
Object _createHitTestRequest(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.HitTestRequest(
        view: values["view"] as api.FlutterView,
        offset: values["offset"] as api.Offset,
      );
    case '@implementation':
      return _HitTestRequestProxy(
        values['@peer'] as FlaxProxyPeer,
        view: values["view"] as api.FlutterView,
        offset: values["offset"] as api.Offset,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isHitTestResponse(Object value) => value is api.HitTestResponse;
Object? _HitTestResponse_hasPlatformView(Object value) =>
    (value as api.HitTestResponse).hasPlatformView;
Object? _HitTestResponse_super_get_hasPlatformView(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _HitTestResponseProxy)._flaxSuperGet_hasPlatformView;
Object _createHitTestResponse(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.HitTestResponse(
        hasPlatformView: values["hasPlatformView"] as bool,
      );
    case '@implementation':
      return _HitTestResponseProxy(
        values['@peer'] as FlaxProxyPeer,
        hasPlatformView: values["hasPlatformView"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isImage(Object value) => value is api.Image;
Object? _Image_width(Object value) => (value as api.Image).width;
Object? _Image_height(Object value) => (value as api.Image).height;
Object? _Image_debugDisposed(Object value) =>
    (value as api.Image).debugDisposed;
Object? _Image_colorSpace(Object value) => (value as api.Image).colorSpace;
Object? _Image_static_get_onCreate(Map<String, Object?> values) =>
    api.Image.onCreate;
Object? _Image_static_get_onDispose(Map<String, Object?> values) =>
    api.Image.onDispose;
Object? _Image_static_set_onCreate(Map<String, Object?> values) {
  api.Image.onCreate = values["value"] as void Function(api.Image image)?;
  return null;
}

Object? _Image_static_set_onDispose(Map<String, Object?> values) {
  api.Image.onDispose = values["value"] as void Function(api.Image image)?;
  return null;
}

Object? _Image_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Image).dispose();
  return null;
}

Object? _Image_toByteData(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Image).toByteData(
    format: values["format"] as api.ImageByteFormat,
  );
}

Object? _Image_debugGetOpenHandleStackTraces(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Image).debugGetOpenHandleStackTraces();
}

Object? _Image_clone(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Image).clone();
}

Object? _Image_isCloneOf(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Image).isCloneOf(values["other"] as api.Image);
}

Object? _Image_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Image).toString();
}

Object _createImage(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isImageDescriptor(Object value) => value is api.ImageDescriptor;
Object? _ImageDescriptor_width(Object value) =>
    (value as api.ImageDescriptor).width;
Object? _ImageDescriptor_height(Object value) =>
    (value as api.ImageDescriptor).height;
Object? _ImageDescriptor_bytesPerPixel(Object value) =>
    (value as api.ImageDescriptor).bytesPerPixel;
Object? _ImageDescriptor_encoded(Map<String, Object?> values) {
  return api.ImageDescriptor.encoded(values["buffer"] as api.ImmutableBuffer);
}

Object? _ImageDescriptor_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.ImageDescriptor).dispose();
  return null;
}

Object? _ImageDescriptor_instantiateCodec(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ImageDescriptor).instantiateCodec(
    targetFormat: values["targetFormat"] as api.TargetPixelFormat,
    targetHeight: values["targetHeight"] as int?,
    targetWidth: values["targetWidth"] as int?,
  );
}

Object _createImageDescriptor(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "raw":
      return api.ImageDescriptor.raw(
        values["buffer"] as api.ImmutableBuffer,
        width: values["width"] as int,
        height: values["height"] as int,
        rowBytes: values["rowBytes"] as int?,
        pixelFormat: values["pixelFormat"] as api.PixelFormat,
      );
    case '@implementation':
      return _ImageDescriptorProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isImageFilterEngineLayer(Object value) =>
    value is api.ImageFilterEngineLayer;
Object _createImageFilterEngineLayer(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isImageSamplerSlot(Object value) => value is api.ImageSamplerSlot;
Object? _ImageSamplerSlot_shaderIndex(Object value) =>
    (value as api.ImageSamplerSlot).shaderIndex;
Object? _ImageSamplerSlot_name(Object value) =>
    (value as api.ImageSamplerSlot).name;
Object? _ImageSamplerSlot_set(Object receiver, Map<String, Object?> values) {
  (receiver as api.ImageSamplerSlot).set(values["val"] as api.Image);
  return null;
}

Object _createImageSamplerSlot(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isImageShader(Object value) => value is api.ImageShader;
Object? _FlaxProxyDispatch2_super_call_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch2)._flaxSuper_dispose();
  return null;
}

Object? _FlaxProxyDispatch2_super_get_debugDisposed(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch2)._flaxSuperGet_debugDisposed;
Object _createImageShader(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ImageShader(
        values["image"] as api.Image,
        values["tmx"] as api.TileMode,
        values["tmy"] as api.TileMode,
        values["matrix4"] as api1.Float64List,
        filterQuality: values["filterQuality"] as api.FilterQuality?,
      );
    case '@implementation':
      return _ImageShaderProxy(
        values['@peer'] as FlaxProxyPeer,
        values["image"] as api.Image,
        values["tmx"] as api.TileMode,
        values["tmy"] as api.TileMode,
        values["matrix4"] as api1.Float64List,
        filterQuality: values["filterQuality"] as api.FilterQuality?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isImmutableBuffer(Object value) => value is api.ImmutableBuffer;
Object? _ImmutableBuffer_length(Object value) =>
    (value as api.ImmutableBuffer).length;
Object? _ImmutableBuffer_debugDisposed(Object value) =>
    (value as api.ImmutableBuffer).debugDisposed;
Object? _ImmutableBuffer_fromUint8List(Map<String, Object?> values) {
  return api.ImmutableBuffer.fromUint8List(values["list"] as api1.Uint8List);
}

Object? _ImmutableBuffer_fromAsset(Map<String, Object?> values) {
  return api.ImmutableBuffer.fromAsset(values["assetKey"] as String);
}

Object? _ImmutableBuffer_fromFilePath(Map<String, Object?> values) {
  return api.ImmutableBuffer.fromFilePath(values["path"] as String);
}

Object? _ImmutableBuffer_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.ImmutableBuffer).dispose();
  return null;
}

Object _createImmutableBuffer(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isIsolateNameServer(Object value) => value is api.IsolateNameServer;
Object? _IsolateNameServer_lookupPortByName(Map<String, Object?> values) {
  return api.IsolateNameServer.lookupPortByName(values["name"] as String);
}

Object? _IsolateNameServer_registerPortWithName(Map<String, Object?> values) {
  return api.IsolateNameServer.registerPortWithName(
    values["port"] as api4.SendPort,
    values["name"] as String,
  );
}

Object? _IsolateNameServer_removePortNameMapping(Map<String, Object?> values) {
  return api.IsolateNameServer.removePortNameMapping(values["name"] as String);
}

Object _createIsolateNameServer(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isKeyData(Object value) => value is api.KeyData;
Object? _KeyData_timeStamp(Object value) => (value as api.KeyData).timeStamp;
Object? _KeyData_type(Object value) => (value as api.KeyData).type;
Object? _KeyData_deviceType(Object value) => (value as api.KeyData).deviceType;
Object? _KeyData_physical(Object value) => (value as api.KeyData).physical;
Object? _KeyData_logical(Object value) => (value as api.KeyData).logical;
Object? _KeyData_character(Object value) => (value as api.KeyData).character;
Object? _KeyData_synthesized(Object value) =>
    (value as api.KeyData).synthesized;
Object? _KeyData_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.KeyData).toString();
}

Object? _KeyData_toStringFull(Object receiver, Map<String, Object?> values) {
  return (receiver as api.KeyData).toStringFull();
}

Object? _FlaxProxyDispatch3_super_call_toStringFull(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch3)._flaxSuper_toStringFull();
}

Object? _FlaxProxyDispatch3_super_get_timeStamp(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch3)._flaxSuperGet_timeStamp;
Object? _KeyData_super_get_type(Object receiver, Map<String, Object?> values) =>
    (receiver as _KeyDataProxy)._flaxSuperGet_type;
Object? _KeyData_super_get_deviceType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _KeyDataProxy)._flaxSuperGet_deviceType;
Object? _KeyData_super_get_physical(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _KeyDataProxy)._flaxSuperGet_physical;
Object? _KeyData_super_get_logical(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _KeyDataProxy)._flaxSuperGet_logical;
Object? _KeyData_super_get_character(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _KeyDataProxy)._flaxSuperGet_character;
Object? _FlaxProxyDispatch3_super_get_synthesized(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch3)._flaxSuperGet_synthesized;
Object _createKeyData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.KeyData(
        timeStamp: values["timeStamp"] as api2.Duration,
        type: values["type"] as api.KeyEventType,
        physical: values["physical"] as int,
        logical: values["logical"] as int,
        character: values["character"] as String?,
        synthesized: values["synthesized"] as bool,
        deviceType: values["deviceType"] as api.KeyEventDeviceType,
      );
    case '@implementation':
      return _KeyDataProxy(
        values['@peer'] as FlaxProxyPeer,
        timeStamp: values["timeStamp"] as api2.Duration,
        type: values["type"] as api.KeyEventType,
        physical: values["physical"] as int,
        logical: values["logical"] as int,
        character: values["character"] as String?,
        synthesized: values["synthesized"] as bool,
        deviceType: values["deviceType"] as api.KeyEventDeviceType,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object? _enum_KeyEventDeviceType_get_label(Map<String, Object?> values) =>
    (values["receiver"] as api.KeyEventDeviceType).label;
Object? _enum_KeyEventType_get_label(Map<String, Object?> values) =>
    (values["receiver"] as api.KeyEventType).label;
bool _isLineMetrics(Object value) => value is api.LineMetrics;
Object? _LineMetrics_hardBreak(Object value) =>
    (value as api.LineMetrics).hardBreak;
Object? _LineMetrics_ascent(Object value) => (value as api.LineMetrics).ascent;
Object? _LineMetrics_descent(Object value) =>
    (value as api.LineMetrics).descent;
Object? _LineMetrics_unscaledAscent(Object value) =>
    (value as api.LineMetrics).unscaledAscent;
Object? _LineMetrics_height(Object value) => (value as api.LineMetrics).height;
Object? _LineMetrics_width(Object value) => (value as api.LineMetrics).width;
Object? _LineMetrics_left(Object value) => (value as api.LineMetrics).left;
Object? _LineMetrics_baseline(Object value) =>
    (value as api.LineMetrics).baseline;
Object? _LineMetrics_lineNumber(Object value) =>
    (value as api.LineMetrics).lineNumber;
Object? _LineMetrics_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.LineMetrics).toString();
}

Object? _LineMetrics_super_get_hardBreak(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LineMetricsProxy)._flaxSuperGet_hardBreak;
Object? _LineMetrics_super_get_ascent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LineMetricsProxy)._flaxSuperGet_ascent;
Object? _LineMetrics_super_get_descent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LineMetricsProxy)._flaxSuperGet_descent;
Object? _LineMetrics_super_get_unscaledAscent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LineMetricsProxy)._flaxSuperGet_unscaledAscent;
Object? _LineMetrics_super_get_height(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LineMetricsProxy)._flaxSuperGet_height;
Object? _FlaxProxyDispatch4_super_get_width(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch4)._flaxSuperGet_width;
Object? _FlaxProxyDispatch5_super_get_left(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch5)._flaxSuperGet_left;
Object? _LineMetrics_super_get_baseline(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LineMetricsProxy)._flaxSuperGet_baseline;
Object? _LineMetrics_super_get_lineNumber(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LineMetricsProxy)._flaxSuperGet_lineNumber;
Object _createLineMetrics(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.LineMetrics(
        hardBreak: values["hardBreak"] as bool,
        ascent: values["ascent"] as double,
        descent: values["descent"] as double,
        unscaledAscent: values["unscaledAscent"] as double,
        height: values["height"] as double,
        width: values["width"] as double,
        left: values["left"] as double,
        baseline: values["baseline"] as double,
        lineNumber: values["lineNumber"] as int,
      );
    case '@implementation':
      return _LineMetricsProxy(
        values['@peer'] as FlaxProxyPeer,
        hardBreak: values["hardBreak"] as bool,
        ascent: values["ascent"] as double,
        descent: values["descent"] as double,
        unscaledAscent: values["unscaledAscent"] as double,
        height: values["height"] as double,
        width: values["width"] as double,
        left: values["left"] as double,
        baseline: values["baseline"] as double,
        lineNumber: values["lineNumber"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isLocale(Object value) => value is api.Locale;
Object? _Locale_languageCode(Object value) =>
    (value as api.Locale).languageCode;
Object? _Locale_scriptCode(Object value) => (value as api.Locale).scriptCode;
Object? _Locale_countryCode(Object value) => (value as api.Locale).countryCode;
Object? _Locale_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Locale).toString();
}

Object? _Locale_toLanguageTag(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Locale).toLanguageTag();
}

Object? _Locale_super_toLanguageTag(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _LocaleProxy)._flaxSuper_toLanguageTag();
}

Object? _Locale_super_get_languageCode(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LocaleProxy)._flaxSuperGet_languageCode;
Object? _Locale_super_get_scriptCode(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LocaleProxy)._flaxSuperGet_scriptCode;
Object? _Locale_super_get_countryCode(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LocaleProxy)._flaxSuperGet_countryCode;
Object _createLocale(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Locale(
        values["_languageCode"] as String,
        values["_countryCode"] as String?,
      );
    case "fromSubtags":
      return api.Locale.fromSubtags(
        languageCode: values["languageCode"] as String,
        scriptCode: values["scriptCode"] as String?,
        countryCode: values["countryCode"] as String?,
      );
    case '@implementation':
      return _LocaleProxy(
        values['@peer'] as FlaxProxyPeer,
        values["_languageCode"] as String,
        values["_countryCode"] as String?,
      );
    case "@implementation:fromSubtags":
      return _LocaleProxy.fromSubtags(
        values['@peer'] as FlaxProxyPeer,
        languageCode: values["languageCode"] as String,
        scriptCode: values["scriptCode"] as String?,
        countryCode: values["countryCode"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isLocaleStringAttribute(Object value) =>
    value is api.LocaleStringAttribute;
Object? _LocaleStringAttribute_locale(Object value) =>
    (value as api.LocaleStringAttribute).locale;
Object? _LocaleStringAttribute_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.LocaleStringAttribute).toString();
}

Object? _FlaxProxyDispatch6_super_call_copy(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch6)._flaxSuper_copy(
    range: values["range"] as api.TextRange,
  );
}

Object? _LocaleStringAttribute_super_get_locale(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _LocaleStringAttributeProxy)._flaxSuperGet_locale;
Object? _FlaxProxyDispatch6_super_get_range(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch6)._flaxSuperGet_range;
Object _createLocaleStringAttribute(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.LocaleStringAttribute(
        range: values["range"] as api.TextRange,
        locale: values["locale"] as api.Locale,
      );
    case '@implementation':
      return _LocaleStringAttributeProxy(
        values['@peer'] as FlaxProxyPeer,
        range: values["range"] as api.TextRange,
        locale: values["locale"] as api.Locale,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isMaskFilter(Object value) => value is api.MaskFilter;
Object? _MaskFilter_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.MaskFilter).toString();
}

Object _createMaskFilter(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "blur":
      return api.MaskFilter.blur(
        values["_style"] as api.BlurStyle,
        values["_sigma"] as double,
      );
    case '@implementation':
      return _MaskFilterProxy.blur(
        values['@peer'] as FlaxProxyPeer,
        values["_style"] as api.BlurStyle,
        values["_sigma"] as double,
      );
    case "@implementation:blur":
      return _MaskFilterProxy.blur(
        values['@peer'] as FlaxProxyPeer,
        values["_style"] as api.BlurStyle,
        values["_sigma"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isOffsetBase(Object value) => value is api.OffsetBase;
Object? _OffsetBase_isInfinite(Object value) =>
    (value as api.OffsetBase).isInfinite;
Object? _OffsetBase_isFinite(Object value) =>
    (value as api.OffsetBase).isFinite;
Object? _OffsetBase_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.OffsetBase).toString();
}

Object? _OffsetBase_operatorLessThan(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.OffsetBase) < (values["other"] as api.OffsetBase);
}

Object? _OffsetBase_operatorGreaterThan(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.OffsetBase) > (values["other"] as api.OffsetBase);
}

Object? _OffsetBase_operatorLessThanOrEqual(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.OffsetBase) <= (values["other"] as api.OffsetBase);
}

Object? _OffsetBase_operatorGreaterThanOrEqual(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.OffsetBase) >= (values["other"] as api.OffsetBase);
}

Object? _OffsetBase_super_operatorLessThan(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _OffsetBaseProxy)._flaxSuper_operatorLessThan(
    values["other"] as api.OffsetBase,
  );
}

Object? _OffsetBase_super_operatorGreaterThan(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _OffsetBaseProxy)._flaxSuper_operatorGreaterThan(
    values["other"] as api.OffsetBase,
  );
}

Object? _OffsetBase_super_operatorLessThanOrEqual(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _OffsetBaseProxy)._flaxSuper_operatorLessThanOrEqual(
    values["other"] as api.OffsetBase,
  );
}

Object? _OffsetBase_super_operatorGreaterThanOrEqual(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _OffsetBaseProxy)._flaxSuper_operatorGreaterThanOrEqual(
    values["other"] as api.OffsetBase,
  );
}

Object? _OffsetBase_super_get_isInfinite(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _OffsetBaseProxy)._flaxSuperGet_isInfinite;
Object? _OffsetBase_super_get_isFinite(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _OffsetBaseProxy)._flaxSuperGet_isFinite;
Object _createOffsetBase(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _OffsetBaseProxy(
        values['@peer'] as FlaxProxyPeer,
        values["_dx"] as double,
        values["_dy"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isOffsetEngineLayer(Object value) => value is api.OffsetEngineLayer;
Object _createOffsetEngineLayer(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isOpacityEngineLayer(Object value) => value is api.OpacityEngineLayer;
Object _createOpacityEngineLayer(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isPaint(Object value) => value is api.Paint;
Object? _Paint_isAntiAlias(Object value) => (value as api.Paint).isAntiAlias;
Object? _Paint_color(Object value) => (value as api.Paint).color;
Object? _Paint_blendMode(Object value) => (value as api.Paint).blendMode;
Object? _Paint_style(Object value) => (value as api.Paint).style;
Object? _Paint_strokeWidth(Object value) => (value as api.Paint).strokeWidth;
Object? _Paint_strokeCap(Object value) => (value as api.Paint).strokeCap;
Object? _Paint_strokeJoin(Object value) => (value as api.Paint).strokeJoin;
Object? _Paint_strokeMiterLimit(Object value) =>
    (value as api.Paint).strokeMiterLimit;
Object? _Paint_maskFilter(Object value) => (value as api.Paint).maskFilter;
Object? _Paint_filterQuality(Object value) =>
    (value as api.Paint).filterQuality;
Object? _Paint_shader(Object value) => (value as api.Paint).shader;
Object? _Paint_colorFilter(Object value) => (value as api.Paint).colorFilter;
Object? _Paint_imageFilter(Object value) => (value as api.Paint).imageFilter;
Object? _Paint_invertColors(Object value) => (value as api.Paint).invertColors;
void _Paint_set_isAntiAlias(Object receiver, Object? value) {
  (receiver as api.Paint).isAntiAlias = value as bool;
}

void _Paint_set_color(Object receiver, Object? value) {
  (receiver as api.Paint).color = value as api.Color;
}

void _Paint_set_blendMode(Object receiver, Object? value) {
  (receiver as api.Paint).blendMode = value as api.BlendMode;
}

void _Paint_set_style(Object receiver, Object? value) {
  (receiver as api.Paint).style = value as api.PaintingStyle;
}

void _Paint_set_strokeWidth(Object receiver, Object? value) {
  (receiver as api.Paint).strokeWidth = value as double;
}

void _Paint_set_strokeCap(Object receiver, Object? value) {
  (receiver as api.Paint).strokeCap = value as api.StrokeCap;
}

void _Paint_set_strokeJoin(Object receiver, Object? value) {
  (receiver as api.Paint).strokeJoin = value as api.StrokeJoin;
}

void _Paint_set_strokeMiterLimit(Object receiver, Object? value) {
  (receiver as api.Paint).strokeMiterLimit = value as double;
}

void _Paint_set_maskFilter(Object receiver, Object? value) {
  (receiver as api.Paint).maskFilter = value as api.MaskFilter?;
}

void _Paint_set_filterQuality(Object receiver, Object? value) {
  (receiver as api.Paint).filterQuality = value as api.FilterQuality;
}

void _Paint_set_shader(Object receiver, Object? value) {
  (receiver as api.Paint).shader = value as api.Shader?;
}

void _Paint_set_colorFilter(Object receiver, Object? value) {
  (receiver as api.Paint).colorFilter = value as api.ColorFilter?;
}

void _Paint_set_imageFilter(Object receiver, Object? value) {
  (receiver as api.Paint).imageFilter = value as api.ImageFilter?;
}

void _Paint_set_invertColors(Object receiver, Object? value) {
  (receiver as api.Paint).invertColors = value as bool;
}

Object? _Paint_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Paint).toString();
}

Object _createPaint(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Paint();
    case "from":
      return api.Paint.from(values["other"] as api.Paint);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isParagraph(Object value) => value is api.Paragraph;
Object? _Paragraph_width(Object value) => (value as api.Paragraph).width;
Object? _Paragraph_height(Object value) => (value as api.Paragraph).height;
Object? _Paragraph_longestLine(Object value) =>
    (value as api.Paragraph).longestLine;
Object? _Paragraph_minIntrinsicWidth(Object value) =>
    (value as api.Paragraph).minIntrinsicWidth;
Object? _Paragraph_maxIntrinsicWidth(Object value) =>
    (value as api.Paragraph).maxIntrinsicWidth;
Object? _Paragraph_alphabeticBaseline(Object value) =>
    (value as api.Paragraph).alphabeticBaseline;
Object? _Paragraph_ideographicBaseline(Object value) =>
    (value as api.Paragraph).ideographicBaseline;
Object? _Paragraph_didExceedMaxLines(Object value) =>
    (value as api.Paragraph).didExceedMaxLines;
Object? _Paragraph_numberOfLines(Object value) =>
    (value as api.Paragraph).numberOfLines;
Object? _Paragraph_debugDisposed(Object value) =>
    (value as api.Paragraph).debugDisposed;
Object? _Paragraph_layout(Object receiver, Map<String, Object?> values) {
  (receiver as api.Paragraph).layout(
    values["constraints"] as api.ParagraphConstraints,
  );
  return null;
}

Object? _Paragraph_getBoxesForRange(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).getBoxesForRange(
    values["start"] as int,
    values["end"] as int,
    boxHeightStyle: values["boxHeightStyle"] as api.BoxHeightStyle,
    boxWidthStyle: values["boxWidthStyle"] as api.BoxWidthStyle,
  );
}

Object? _Paragraph_getBoxesForPlaceholders(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).getBoxesForPlaceholders();
}

Object? _Paragraph_getPositionForOffset(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).getPositionForOffset(
    values["offset"] as api.Offset,
  );
}

Object? _Paragraph_getClosestGlyphInfoForOffset(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).getClosestGlyphInfoForOffset(
    values["offset"] as api.Offset,
  );
}

Object? _Paragraph_getGlyphInfoAt(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).getGlyphInfoAt(
    values["codeUnitOffset"] as int,
  );
}

Object? _Paragraph_getWordBoundary(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).getWordBoundary(
    values["position"] as api.TextPosition,
  );
}

Object? _Paragraph_getLineBoundary(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).getLineBoundary(
    values["position"] as api.TextPosition,
  );
}

Object? _Paragraph_computeLineMetrics(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).computeLineMetrics();
}

Object? _Paragraph_getLineMetricsAt(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).getLineMetricsAt(
    values["lineNumber"] as int,
  );
}

Object? _Paragraph_getLineNumberAt(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Paragraph).getLineNumberAt(
    values["codeUnitOffset"] as int,
  );
}

Object? _Paragraph_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Paragraph).dispose();
  return null;
}

Object _createParagraph(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _ParagraphProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isParagraphBuilder(Object value) => value is api.ParagraphBuilder;
Object? _ParagraphBuilder_placeholderCount(Object value) =>
    (value as api.ParagraphBuilder).placeholderCount;
Object? _ParagraphBuilder_placeholderScales(Object value) =>
    (value as api.ParagraphBuilder).placeholderScales;
Object? _ParagraphBuilder_pushStyle(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ParagraphBuilder).pushStyle(
    values["style"] as api.TextStyle,
  );
  return null;
}

Object? _ParagraphBuilder_pop(Object receiver, Map<String, Object?> values) {
  (receiver as api.ParagraphBuilder).pop();
  return null;
}

Object? _ParagraphBuilder_addText(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ParagraphBuilder).addText(values["text"] as String);
  return null;
}

Object? _ParagraphBuilder_addPlaceholder(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ParagraphBuilder).addPlaceholder(
    values["width"] as double,
    values["height"] as double,
    values["alignment"] as api.PlaceholderAlignment,
    baseline: values["baseline"] as api.TextBaseline?,
    baselineOffset: values["baselineOffset"] as double?,
    scale: values["scale"] as double,
  );
  return null;
}

Object? _ParagraphBuilder_build(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ParagraphBuilder).build();
}

Object _createParagraphBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ParagraphBuilder(values["style"] as api.ParagraphStyle);
    case '@implementation':
      return _ParagraphBuilderProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isParagraphConstraints(Object value) => value is api.ParagraphConstraints;
Object? _ParagraphConstraints_width(Object value) =>
    (value as api.ParagraphConstraints).width;
Object? _ParagraphConstraints_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ParagraphConstraints).toString();
}

Object _createParagraphConstraints(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ParagraphConstraints(width: values["width"] as double);
    case '@implementation':
      return _ParagraphConstraintsProxy(
        values['@peer'] as FlaxProxyPeer,
        width: values["width"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isParagraphStyle(Object value) => value is api.ParagraphStyle;
Object? _ParagraphStyle_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ParagraphStyle).toString();
}

Object _createParagraphStyle(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ParagraphStyle(
        textAlign: values["textAlign"] as api.TextAlign?,
        textDirection: values["textDirection"] as api.TextDirection?,
        maxLines: values["maxLines"] as int?,
        fontFamily: values["fontFamily"] as String?,
        fontSize: values["fontSize"] as double?,
        height: values["height"] as double?,
        textHeightBehavior:
            values["textHeightBehavior"] as api.TextHeightBehavior?,
        fontWeight: values["fontWeight"] as api.FontWeight?,
        fontStyle: values["fontStyle"] as api.FontStyle?,
        strutStyle: values["strutStyle"] as api.StrutStyle?,
        ellipsis: values["ellipsis"] as String?,
        locale: values["locale"] as api.Locale?,
      );
    case '@implementation':
      return _ParagraphStyleProxy(
        values['@peer'] as FlaxProxyPeer,
        textAlign: values["textAlign"] as api.TextAlign?,
        textDirection: values["textDirection"] as api.TextDirection?,
        maxLines: values["maxLines"] as int?,
        fontFamily: values["fontFamily"] as String?,
        fontSize: values["fontSize"] as double?,
        height: values["height"] as double?,
        textHeightBehavior:
            values["textHeightBehavior"] as api.TextHeightBehavior?,
        fontWeight: values["fontWeight"] as api.FontWeight?,
        fontStyle: values["fontStyle"] as api.FontStyle?,
        strutStyle: values["strutStyle"] as api.StrutStyle?,
        ellipsis: values["ellipsis"] as String?,
        locale: values["locale"] as api.Locale?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPath(Object value) => value is api.Path;
Object? _Path_fillType(Object value) => (value as api.Path).fillType;
void _Path_set_fillType(Object receiver, Object? value) {
  (receiver as api.Path).fillType = value as api.PathFillType;
}

Object? _Path_combine(Map<String, Object?> values) {
  return api.Path.combine(
    values["operation"] as api.PathOperation,
    values["path1"] as api.Path,
    values["path2"] as api.Path,
  );
}

Object? _Path_moveTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).moveTo(values["x"] as double, values["y"] as double);
  return null;
}

Object? _Path_relativeMoveTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).relativeMoveTo(
    values["dx"] as double,
    values["dy"] as double,
  );
  return null;
}

Object? _Path_lineTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).lineTo(values["x"] as double, values["y"] as double);
  return null;
}

Object? _Path_relativeLineTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).relativeLineTo(
    values["dx"] as double,
    values["dy"] as double,
  );
  return null;
}

Object? _Path_quadraticBezierTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).quadraticBezierTo(
    values["x1"] as double,
    values["y1"] as double,
    values["x2"] as double,
    values["y2"] as double,
  );
  return null;
}

Object? _Path_relativeQuadraticBezierTo(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Path).relativeQuadraticBezierTo(
    values["x1"] as double,
    values["y1"] as double,
    values["x2"] as double,
    values["y2"] as double,
  );
  return null;
}

Object? _Path_cubicTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).cubicTo(
    values["x1"] as double,
    values["y1"] as double,
    values["x2"] as double,
    values["y2"] as double,
    values["x3"] as double,
    values["y3"] as double,
  );
  return null;
}

Object? _Path_relativeCubicTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).relativeCubicTo(
    values["x1"] as double,
    values["y1"] as double,
    values["x2"] as double,
    values["y2"] as double,
    values["x3"] as double,
    values["y3"] as double,
  );
  return null;
}

Object? _Path_conicTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).conicTo(
    values["x1"] as double,
    values["y1"] as double,
    values["x2"] as double,
    values["y2"] as double,
    values["w"] as double,
  );
  return null;
}

Object? _Path_relativeConicTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).relativeConicTo(
    values["x1"] as double,
    values["y1"] as double,
    values["x2"] as double,
    values["y2"] as double,
    values["w"] as double,
  );
  return null;
}

Object? _Path_arcTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).arcTo(
    values["rect"] as api.Rect,
    values["startAngle"] as double,
    values["sweepAngle"] as double,
    values["forceMoveTo"] as bool,
  );
  return null;
}

Object? _Path_arcToPoint(Object receiver, Map<String, Object?> values) {
  final _flaxHas3 = values.containsKey("radius");
  flaxInvokeWithDefaults(
    (receiver as api.Path).arcToPoint,
    <Object?>[
      values["arcEnd"] as api.Offset,
      values["clockwise"] as bool,
      values["largeArc"] as bool,
      (_flaxHas3 ? values["radius"] as api.Radius : null),
      values["rotation"] as double,
    ],
    <int>[1 | 2 | 4 | (_flaxHas3 ? 8 : 0) | 16],
    const <String>["", "clockwise", "largeArc", "radius", "rotation"],
  );
  return null;
}

Object? _Path_relativeArcToPoint(Object receiver, Map<String, Object?> values) {
  final _flaxHas3 = values.containsKey("radius");
  flaxInvokeWithDefaults(
    (receiver as api.Path).relativeArcToPoint,
    <Object?>[
      values["arcEndDelta"] as api.Offset,
      values["clockwise"] as bool,
      values["largeArc"] as bool,
      (_flaxHas3 ? values["radius"] as api.Radius : null),
      values["rotation"] as double,
    ],
    <int>[1 | 2 | 4 | (_flaxHas3 ? 8 : 0) | 16],
    const <String>["", "clockwise", "largeArc", "radius", "rotation"],
  );
  return null;
}

Object? _Path_addRect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).addRect(values["rect"] as api.Rect);
  return null;
}

Object? _Path_addOval(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).addOval(values["oval"] as api.Rect);
  return null;
}

Object? _Path_addArc(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).addArc(
    values["oval"] as api.Rect,
    values["startAngle"] as double,
    values["sweepAngle"] as double,
  );
  return null;
}

Object? _Path_addPolygon(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).addPolygon(
    values["points"] as List<api.Offset>,
    values["close"] as bool,
  );
  return null;
}

Object? _Path_addRRect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).addRRect(values["rrect"] as api.RRect);
  return null;
}

Object? _Path_addRSuperellipse(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).addRSuperellipse(
    values["rsuperellipse"] as api.RSuperellipse,
  );
  return null;
}

Object? _Path_addPath(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).addPath(
    values["path"] as api.Path,
    values["offset"] as api.Offset,
    matrix4: values["matrix4"] as api1.Float64List?,
  );
  return null;
}

Object? _Path_extendWithPath(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).extendWithPath(
    values["path"] as api.Path,
    values["offset"] as api.Offset,
    matrix4: values["matrix4"] as api1.Float64List?,
  );
  return null;
}

Object? _Path_close(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).close();
  return null;
}

Object? _Path_reset(Object receiver, Map<String, Object?> values) {
  (receiver as api.Path).reset();
  return null;
}

Object? _Path_contains(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Path).contains(values["point"] as api.Offset);
}

Object? _Path_shift(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Path).shift(values["offset"] as api.Offset);
}

Object? _Path_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Path).transform(
    values["matrix4"] as api1.Float64List,
  );
}

Object? _Path_getBounds(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Path).getBounds();
}

Object? _Path_computeMetrics(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Path).computeMetrics(
    forceClosed: values["forceClosed"] as bool,
  );
}

Object _createPath(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Path();
    case "from":
      return api.Path.from(values["source"] as api.Path);
    case '@implementation':
      return _PathProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPathMetric(Object value) => value is api.PathMetric;
Object? _PathMetric_length(Object value) => (value as api.PathMetric).length;
Object? _PathMetric_isClosed(Object value) =>
    (value as api.PathMetric).isClosed;
Object? _PathMetric_contourIndex(Object value) =>
    (value as api.PathMetric).contourIndex;
Object? _PathMetric_getTangentForOffset(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.PathMetric).getTangentForOffset(
    values["distance"] as double,
  );
}

Object? _PathMetric_extractPath(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetric).extractPath(
    values["start"] as double,
    values["end"] as double,
    startWithMoveTo: values["startWithMoveTo"] as bool,
  );
}

Object? _PathMetric_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetric).toString();
}

Object _createPathMetric(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isPathMetricIterator(Object value) => value is api.PathMetricIterator;
Object? _PathMetricIterator_current(Object value) =>
    (value as api.PathMetricIterator).current;
Object? _PathMetricIterator_moveNext(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.PathMetricIterator).moveNext();
}

Object _createPathMetricIterator(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isPathMetrics(Object value) => value is api.PathMetrics;
Object? _PathMetrics_iterator(Object value) =>
    (value as api.PathMetrics).iterator;
Object? _PathMetrics_length(Object value) => (value as api.PathMetrics).length;
Object? _PathMetrics_isEmpty(Object value) =>
    (value as api.PathMetrics).isEmpty;
Object? _PathMetrics_isNotEmpty(Object value) =>
    (value as api.PathMetrics).isNotEmpty;
Object? _PathMetrics_first(Object value) => (value as api.PathMetrics).first;
Object? _PathMetrics_last(Object value) => (value as api.PathMetrics).last;
Object? _PathMetrics_single(Object value) => (value as api.PathMetrics).single;
Object? _PathMetrics_cast(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).cast<Object?>();
}

Object? _PathMetrics_followedBy(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).followedBy(
    values["other"] as Iterable<api.PathMetric>,
  );
}

Object? _PathMetrics_map(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).map<Object?>(
    values["toElement"] as Object? Function(api.PathMetric e),
  );
}

Object? _PathMetrics_where(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).where(
    values["test"] as bool Function(api.PathMetric element),
  );
}

Object? _PathMetrics_whereType(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).whereType<Object?>();
}

Object? _PathMetrics_expand(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).expand<Object?>(
    values["toElements"] as Iterable<Object?> Function(api.PathMetric element),
  );
}

Object? _PathMetrics_contains(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).contains(values["element"]);
}

Object? _PathMetrics_forEach(Object receiver, Map<String, Object?> values) {
  (receiver as api.PathMetrics).forEach(
    values["action"] as void Function(api.PathMetric element),
  );
  return null;
}

Object? _PathMetrics_reduce(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).reduce(
    values["combine"]
        as api.PathMetric Function(
          api.PathMetric value,
          api.PathMetric element,
        ),
  );
}

Object? _PathMetrics_fold(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).fold<Object?>(
    values["initialValue"],
    values["combine"]
        as Object? Function(Object? previousValue, api.PathMetric element),
  );
}

Object? _PathMetrics_every(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).every(
    values["test"] as bool Function(api.PathMetric element),
  );
}

Object? _PathMetrics_join(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).join(values["separator"] as String);
}

Object? _PathMetrics_any(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).any(
    values["test"] as bool Function(api.PathMetric element),
  );
}

Object? _PathMetrics_toList(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).toList(
    growable: values["growable"] as bool,
  );
}

Object? _PathMetrics_toSet(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).toSet();
}

Object? _PathMetrics_take(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).take(values["count"] as int);
}

Object? _PathMetrics_takeWhile(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).takeWhile(
    values["test"] as bool Function(api.PathMetric value),
  );
}

Object? _PathMetrics_skip(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).skip(values["count"] as int);
}

Object? _PathMetrics_skipWhile(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).skipWhile(
    values["test"] as bool Function(api.PathMetric value),
  );
}

Object? _PathMetrics_firstWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).firstWhere(
    values["test"] as bool Function(api.PathMetric element),
    orElse: values["orElse"] as api.PathMetric Function()?,
  );
}

Object? _PathMetrics_lastWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).lastWhere(
    values["test"] as bool Function(api.PathMetric element),
    orElse: values["orElse"] as api.PathMetric Function()?,
  );
}

Object? _PathMetrics_singleWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).singleWhere(
    values["test"] as bool Function(api.PathMetric element),
    orElse: values["orElse"] as api.PathMetric Function()?,
  );
}

Object? _PathMetrics_elementAt(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PathMetrics).elementAt(values["index"] as int);
}

Object _createPathMetrics(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isPicture(Object value) => value is api.Picture;
Object? _Picture_debugDisposed(Object value) =>
    (value as api.Picture).debugDisposed;
Object? _Picture_approximateBytesUsed(Object value) =>
    (value as api.Picture).approximateBytesUsed;
Object? _Picture_static_get_onCreate(Map<String, Object?> values) =>
    api.Picture.onCreate;
Object? _Picture_static_get_onDispose(Map<String, Object?> values) =>
    api.Picture.onDispose;
Object? _Picture_static_set_onCreate(Map<String, Object?> values) {
  api.Picture.onCreate = values["value"] as void Function(api.Picture picture)?;
  return null;
}

Object? _Picture_static_set_onDispose(Map<String, Object?> values) {
  api.Picture.onDispose =
      values["value"] as void Function(api.Picture picture)?;
  return null;
}

Object? _Picture_toImage(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Picture).toImage(
    values["width"] as int,
    values["height"] as int,
  );
}

Object? _Picture_toImageSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Picture).toImageSync(
    values["width"] as int,
    values["height"] as int,
    targetFormat: values["targetFormat"] as api.TargetPixelFormat,
  );
}

Object? _Picture_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Picture).dispose();
  return null;
}

Object _createPicture(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _PictureProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPictureRasterizationException(Object value) =>
    value is api.PictureRasterizationException;
Object? _PictureRasterizationException_message(Object value) =>
    (value as api.PictureRasterizationException).message;
Object? _PictureRasterizationException_stack(Object value) =>
    (value as api.PictureRasterizationException).stack;
Object? _PictureRasterizationException_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.PictureRasterizationException).toString();
}

Object _createPictureRasterizationException(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case '@implementation':
      return _PictureRasterizationExceptionProxy(
        values['@peer'] as FlaxProxyPeer,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPictureRecorder(Object value) => value is api.PictureRecorder;
Object? _PictureRecorder_isRecording(Object value) =>
    (value as api.PictureRecorder).isRecording;
Object? _PictureRecorder_endRecording(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.PictureRecorder).endRecording();
}

Object _createPictureRecorder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.PictureRecorder();
    case '@implementation':
      return _PictureRecorderProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPlatformDispatcher(Object value) => value is api.PlatformDispatcher;
Object? _PlatformDispatcher_onPlatformConfigurationChanged(Object value) =>
    (value as api.PlatformDispatcher).onPlatformConfigurationChanged;
Object? _PlatformDispatcher_displays(Object value) =>
    (value as api.PlatformDispatcher).displays;
Object? _PlatformDispatcher_views(Object value) =>
    (value as api.PlatformDispatcher).views;
Object? _PlatformDispatcher_implicitView(Object value) =>
    (value as api.PlatformDispatcher).implicitView;
Object? _PlatformDispatcher_onMetricsChanged(Object value) =>
    (value as api.PlatformDispatcher).onMetricsChanged;
Object? _PlatformDispatcher_engineId(Object value) =>
    (value as api.PlatformDispatcher).engineId;
Object? _PlatformDispatcher_onViewFocusChange(Object value) =>
    (value as api.PlatformDispatcher).onViewFocusChange;
Object? _PlatformDispatcher_onBeginFrame(Object value) =>
    (value as api.PlatformDispatcher).onBeginFrame;
Object? _PlatformDispatcher_onDrawFrame(Object value) =>
    (value as api.PlatformDispatcher).onDrawFrame;
Object? _PlatformDispatcher_onPointerDataPacket(Object value) =>
    (value as api.PlatformDispatcher).onPointerDataPacket;
Object? _PlatformDispatcher_onKeyData(Object value) =>
    (value as api.PlatformDispatcher).onKeyData;
Object? _PlatformDispatcher_onReportTimings(Object value) =>
    (value as api.PlatformDispatcher).onReportTimings;
Object? _PlatformDispatcher_onPlatformMessage(Object value) =>
    (value as api.PlatformDispatcher).onPlatformMessage;
Object? _PlatformDispatcher_accessibilityFeatures(Object value) =>
    (value as api.PlatformDispatcher).accessibilityFeatures;
Object? _PlatformDispatcher_onAccessibilityFeaturesChanged(Object value) =>
    (value as api.PlatformDispatcher).onAccessibilityFeaturesChanged;
Object? _PlatformDispatcher_locale(Object value) =>
    (value as api.PlatformDispatcher).locale;
Object? _PlatformDispatcher_locales(Object value) =>
    (value as api.PlatformDispatcher).locales;
Object? _PlatformDispatcher_onLocaleChanged(Object value) =>
    (value as api.PlatformDispatcher).onLocaleChanged;
Object? _PlatformDispatcher_initialLifecycleState(Object value) =>
    (value as api.PlatformDispatcher).initialLifecycleState;
Object? _PlatformDispatcher_alwaysUse24HourFormat(Object value) =>
    (value as api.PlatformDispatcher).alwaysUse24HourFormat;
Object? _PlatformDispatcher_lineHeightScaleFactorOverride(Object value) =>
    (value as api.PlatformDispatcher).lineHeightScaleFactorOverride;
Object? _PlatformDispatcher_letterSpacingOverride(Object value) =>
    (value as api.PlatformDispatcher).letterSpacingOverride;
Object? _PlatformDispatcher_wordSpacingOverride(Object value) =>
    (value as api.PlatformDispatcher).wordSpacingOverride;
Object? _PlatformDispatcher_paragraphSpacingOverride(Object value) =>
    (value as api.PlatformDispatcher).paragraphSpacingOverride;
Object? _PlatformDispatcher_textScaleFactor(Object value) =>
    (value as api.PlatformDispatcher).textScaleFactor;
Object? _PlatformDispatcher_onTextScaleFactorChanged(Object value) =>
    (value as api.PlatformDispatcher).onTextScaleFactorChanged;
Object? _PlatformDispatcher_nativeSpellCheckServiceDefined(Object value) =>
    (value as api.PlatformDispatcher).nativeSpellCheckServiceDefined;
Object? _PlatformDispatcher_supportsShowingSystemContextMenu(Object value) =>
    (value as api.PlatformDispatcher).supportsShowingSystemContextMenu;
Object? _PlatformDispatcher_brieflyShowPassword(Object value) =>
    (value as api.PlatformDispatcher).brieflyShowPassword;
Object? _PlatformDispatcher_platformBrightness(Object value) =>
    (value as api.PlatformDispatcher).platformBrightness;
Object? _PlatformDispatcher_onPlatformBrightnessChanged(Object value) =>
    (value as api.PlatformDispatcher).onPlatformBrightnessChanged;
Object? _PlatformDispatcher_systemFontFamily(Object value) =>
    (value as api.PlatformDispatcher).systemFontFamily;
Object? _PlatformDispatcher_onSystemFontFamilyChanged(Object value) =>
    (value as api.PlatformDispatcher).onSystemFontFamilyChanged;
Object? _PlatformDispatcher_semanticsEnabled(Object value) =>
    (value as api.PlatformDispatcher).semanticsEnabled;
Object? _PlatformDispatcher_onSemanticsEnabledChanged(Object value) =>
    (value as api.PlatformDispatcher).onSemanticsEnabledChanged;
Object? _PlatformDispatcher_onSemanticsActionEvent(Object value) =>
    (value as api.PlatformDispatcher).onSemanticsActionEvent;
Object? _PlatformDispatcher_onHitTest(Object value) =>
    (value as api.PlatformDispatcher).onHitTest;
Object? _PlatformDispatcher_frameData(Object value) =>
    (value as api.PlatformDispatcher).frameData;
Object? _PlatformDispatcher_onFrameDataChanged(Object value) =>
    (value as api.PlatformDispatcher).onFrameDataChanged;
Object? _PlatformDispatcher_onError(Object value) =>
    (value as api.PlatformDispatcher).onError;
Object? _PlatformDispatcher_defaultRouteName(Object value) =>
    (value as api.PlatformDispatcher).defaultRouteName;
Object? _PlatformDispatcher_static_get_instance(Map<String, Object?> values) =>
    api.PlatformDispatcher.instance;
void _PlatformDispatcher_set_onPlatformConfigurationChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.PlatformDispatcher).onPlatformConfigurationChanged =
      value as void Function()?;
}

void _PlatformDispatcher_set_onMetricsChanged(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onMetricsChanged =
      value as void Function()?;
}

void _PlatformDispatcher_set_onViewFocusChange(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onViewFocusChange =
      value as void Function(api.ViewFocusEvent viewFocusEvent)?;
}

void _PlatformDispatcher_set_onBeginFrame(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onBeginFrame =
      value as void Function(api2.Duration duration)?;
}

void _PlatformDispatcher_set_onDrawFrame(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onDrawFrame = value as void Function()?;
}

void _PlatformDispatcher_set_onPointerDataPacket(
  Object receiver,
  Object? value,
) {
  (receiver as api.PlatformDispatcher).onPointerDataPacket =
      value as void Function(api.PointerDataPacket packet)?;
}

void _PlatformDispatcher_set_onKeyData(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onKeyData =
      value as bool Function(api.KeyData data)?;
}

void _PlatformDispatcher_set_onReportTimings(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onReportTimings =
      value as void Function(List<api.FrameTiming> timings)?;
}

void _PlatformDispatcher_set_onPlatformMessage(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onPlatformMessage =
      value
          as void Function(
            String name,
            api1.ByteData? data,
            void Function(api1.ByteData? data)? callback,
          )?;
}

void _PlatformDispatcher_set_onAccessibilityFeaturesChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.PlatformDispatcher).onAccessibilityFeaturesChanged =
      value as void Function()?;
}

void _PlatformDispatcher_set_onLocaleChanged(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onLocaleChanged =
      value as void Function()?;
}

void _PlatformDispatcher_set_onTextScaleFactorChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.PlatformDispatcher).onTextScaleFactorChanged =
      value as void Function()?;
}

void _PlatformDispatcher_set_onPlatformBrightnessChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.PlatformDispatcher).onPlatformBrightnessChanged =
      value as void Function()?;
}

void _PlatformDispatcher_set_onSystemFontFamilyChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.PlatformDispatcher).onSystemFontFamilyChanged =
      value as void Function()?;
}

void _PlatformDispatcher_set_onSemanticsEnabledChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.PlatformDispatcher).onSemanticsEnabledChanged =
      value as void Function()?;
}

void _PlatformDispatcher_set_onSemanticsActionEvent(
  Object receiver,
  Object? value,
) {
  (receiver as api.PlatformDispatcher).onSemanticsActionEvent =
      value as void Function(api.SemanticsActionEvent action)?;
}

void _PlatformDispatcher_set_onHitTest(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onHitTest =
      value as api.HitTestResponse Function(api.HitTestRequest request)?;
}

void _PlatformDispatcher_set_onFrameDataChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.PlatformDispatcher).onFrameDataChanged =
      value as void Function()?;
}

void _PlatformDispatcher_set_onError(Object receiver, Object? value) {
  (receiver as api.PlatformDispatcher).onError =
      value as bool Function(Object exception, api2.StackTrace stackTrace)?;
}

Object? _PlatformDispatcher_view(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PlatformDispatcher).view(id: values["id"] as int);
}

Object? _PlatformDispatcher_requestViewFocusChange(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).requestViewFocusChange(
    direction: values["direction"] as api.ViewFocusDirection,
    state: values["state"] as api.ViewFocusState,
    viewId: values["viewId"] as int,
  );
  return null;
}

Object? _PlatformDispatcher_sendPlatformMessage(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).sendPlatformMessage(
    values["name"] as String,
    values["data"] as api1.ByteData?,
    values["callback"] as void Function(api1.ByteData? data)?,
  );
  return null;
}

Object? _PlatformDispatcher_sendPortPlatformMessage(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).sendPortPlatformMessage(
    values["name"] as String,
    values["data"] as api1.ByteData?,
    values["identifier"] as int,
    values["port"] as api4.SendPort,
  );
  return null;
}

Object? _PlatformDispatcher_registerBackgroundIsolate(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).registerBackgroundIsolate(
    values["token"] as api.RootIsolateToken,
  );
  return null;
}

Object? _PlatformDispatcher_setSemanticsTreeEnabled(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).setSemanticsTreeEnabled(
    values["enabled"] as bool,
  );
  return null;
}

Object? _PlatformDispatcher_setIsolateDebugName(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).setIsolateDebugName(
    values["name"] as String,
  );
  return null;
}

Object? _PlatformDispatcher_requestDartPerformanceMode(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).requestDartPerformanceMode(
    values["mode"] as api.DartPerformanceMode,
  );
  return null;
}

Object? _PlatformDispatcher_getPersistentIsolateData(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.PlatformDispatcher).getPersistentIsolateData();
}

Object? _PlatformDispatcher_scheduleFrame(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).scheduleFrame();
  return null;
}

Object? _PlatformDispatcher_scheduleWarmUpFrame(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).scheduleWarmUpFrame(
    beginFrame: values["beginFrame"] as void Function(),
    drawFrame: values["drawFrame"] as void Function(),
  );
  return null;
}

Object? _PlatformDispatcher_updateSemantics(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).updateSemantics(
    values["update"] as api.SemanticsUpdate,
  );
  return null;
}

Object? _PlatformDispatcher_setApplicationLocale(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PlatformDispatcher).setApplicationLocale(
    values["locale"] as api.Locale,
  );
  return null;
}

Object? _PlatformDispatcher_computePlatformResolvedLocale(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.PlatformDispatcher).computePlatformResolvedLocale(
    values["supportedLocales"] as List<api.Locale>,
  );
}

Object? _PlatformDispatcher_scaleFontSize(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.PlatformDispatcher).scaleFontSize(
    values["unscaledFontSize"] as double,
  );
}

Object _createPlatformDispatcher(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isPluginUtilities(Object value) => value is api.PluginUtilities;
Object? _PluginUtilities_getCallbackHandle(Map<String, Object?> values) {
  return api.PluginUtilities.getCallbackHandle(values["callback"] as Function);
}

Object _createPluginUtilities(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isPointerData(Object value) => value is api.PointerData;
Object? _PointerData_viewId(Object value) => (value as api.PointerData).viewId;
Object? _PointerData_embedderId(Object value) =>
    (value as api.PointerData).embedderId;
Object? _PointerData_timeStamp(Object value) =>
    (value as api.PointerData).timeStamp;
Object? _PointerData_change(Object value) => (value as api.PointerData).change;
Object? _PointerData_kind(Object value) => (value as api.PointerData).kind;
Object? _PointerData_signalKind(Object value) =>
    (value as api.PointerData).signalKind;
Object? _PointerData_device(Object value) => (value as api.PointerData).device;
Object? _PointerData_pointerIdentifier(Object value) =>
    (value as api.PointerData).pointerIdentifier;
Object? _PointerData_physicalX(Object value) =>
    (value as api.PointerData).physicalX;
Object? _PointerData_physicalY(Object value) =>
    (value as api.PointerData).physicalY;
Object? _PointerData_physicalDeltaX(Object value) =>
    (value as api.PointerData).physicalDeltaX;
Object? _PointerData_physicalDeltaY(Object value) =>
    (value as api.PointerData).physicalDeltaY;
Object? _PointerData_buttons(Object value) =>
    (value as api.PointerData).buttons;
Object? _PointerData_obscured(Object value) =>
    (value as api.PointerData).obscured;
Object? _PointerData_synthesized(Object value) =>
    (value as api.PointerData).synthesized;
Object? _PointerData_pressure(Object value) =>
    (value as api.PointerData).pressure;
Object? _PointerData_pressureMin(Object value) =>
    (value as api.PointerData).pressureMin;
Object? _PointerData_pressureMax(Object value) =>
    (value as api.PointerData).pressureMax;
Object? _PointerData_distance(Object value) =>
    (value as api.PointerData).distance;
Object? _PointerData_distanceMax(Object value) =>
    (value as api.PointerData).distanceMax;
Object? _PointerData_size(Object value) => (value as api.PointerData).size;
Object? _PointerData_radiusMajor(Object value) =>
    (value as api.PointerData).radiusMajor;
Object? _PointerData_radiusMinor(Object value) =>
    (value as api.PointerData).radiusMinor;
Object? _PointerData_radiusMin(Object value) =>
    (value as api.PointerData).radiusMin;
Object? _PointerData_radiusMax(Object value) =>
    (value as api.PointerData).radiusMax;
Object? _PointerData_orientation(Object value) =>
    (value as api.PointerData).orientation;
Object? _PointerData_tilt(Object value) => (value as api.PointerData).tilt;
Object? _PointerData_platformData(Object value) =>
    (value as api.PointerData).platformData;
Object? _PointerData_scrollDeltaX(Object value) =>
    (value as api.PointerData).scrollDeltaX;
Object? _PointerData_scrollDeltaY(Object value) =>
    (value as api.PointerData).scrollDeltaY;
Object? _PointerData_panX(Object value) => (value as api.PointerData).panX;
Object? _PointerData_panY(Object value) => (value as api.PointerData).panY;
Object? _PointerData_panDeltaX(Object value) =>
    (value as api.PointerData).panDeltaX;
Object? _PointerData_panDeltaY(Object value) =>
    (value as api.PointerData).panDeltaY;
Object? _PointerData_scale(Object value) => (value as api.PointerData).scale;
Object? _PointerData_rotation(Object value) =>
    (value as api.PointerData).rotation;
Object? _PointerData_respond(Object receiver, Map<String, Object?> values) {
  (receiver as api.PointerData).respond(
    allowPlatformDefault: values["allowPlatformDefault"] as bool,
  );
  return null;
}

Object? _PointerData_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PointerData).toString();
}

Object? _PointerData_toStringFull(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.PointerData).toStringFull();
}

Object? _PointerData_super_respond(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _PointerDataProxy)._flaxSuper_respond(
    allowPlatformDefault: values["allowPlatformDefault"] as bool,
  );
  return null;
}

Object? _FlaxProxyDispatch7_super_get_viewId(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch7)._flaxSuperGet_viewId;
Object? _PointerData_super_get_embedderId(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_embedderId;
Object? _PointerData_super_get_change(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_change;
Object? _PointerData_super_get_kind(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_kind;
Object? _PointerData_super_get_signalKind(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_signalKind;
Object? _PointerData_super_get_device(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_device;
Object? _PointerData_super_get_pointerIdentifier(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_pointerIdentifier;
Object? _PointerData_super_get_physicalX(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_physicalX;
Object? _PointerData_super_get_physicalY(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_physicalY;
Object? _PointerData_super_get_physicalDeltaX(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_physicalDeltaX;
Object? _PointerData_super_get_physicalDeltaY(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_physicalDeltaY;
Object? _PointerData_super_get_buttons(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_buttons;
Object? _PointerData_super_get_obscured(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_obscured;
Object? _PointerData_super_get_pressure(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_pressure;
Object? _PointerData_super_get_pressureMin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_pressureMin;
Object? _PointerData_super_get_pressureMax(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_pressureMax;
Object? _PointerData_super_get_distance(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_distance;
Object? _PointerData_super_get_distanceMax(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_distanceMax;
Object? _PointerData_super_get_size(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_size;
Object? _PointerData_super_get_radiusMajor(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_radiusMajor;
Object? _PointerData_super_get_radiusMinor(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_radiusMinor;
Object? _PointerData_super_get_radiusMin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_radiusMin;
Object? _PointerData_super_get_radiusMax(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_radiusMax;
Object? _PointerData_super_get_orientation(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_orientation;
Object? _PointerData_super_get_tilt(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_tilt;
Object? _PointerData_super_get_platformData(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_platformData;
Object? _PointerData_super_get_scrollDeltaX(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_scrollDeltaX;
Object? _PointerData_super_get_scrollDeltaY(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_scrollDeltaY;
Object? _PointerData_super_get_panX(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_panX;
Object? _PointerData_super_get_panY(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_panY;
Object? _PointerData_super_get_panDeltaX(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_panDeltaX;
Object? _PointerData_super_get_panDeltaY(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_panDeltaY;
Object? _PointerData_super_get_scale(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_scale;
Object? _PointerData_super_get_rotation(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataProxy)._flaxSuperGet_rotation;
Object _createPointerData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      final _flaxHas2 = values.containsKey("timeStamp");
      return flaxInvokeWithDefaults(
        api.PointerData.new,
        <Object?>[
          values["viewId"] as int,
          values["embedderId"] as int,
          (_flaxHas2 ? values["timeStamp"] as api2.Duration : null),
          values["change"] as api.PointerChange,
          values["kind"] as api.PointerDeviceKind,
          values["signalKind"] as api.PointerSignalKind?,
          values["device"] as int,
          values["pointerIdentifier"] as int,
          values["physicalX"] as double,
          values["physicalY"] as double,
          values["physicalDeltaX"] as double,
          values["physicalDeltaY"] as double,
          values["buttons"] as int,
          values["obscured"] as bool,
          values["synthesized"] as bool,
          values["pressure"] as double,
          values["pressureMin"] as double,
          values["pressureMax"] as double,
          values["distance"] as double,
          values["distanceMax"] as double,
          values["size"] as double,
          values["radiusMajor"] as double,
          values["radiusMinor"] as double,
          values["radiusMin"] as double,
          values["radiusMax"] as double,
          values["orientation"] as double,
          values["tilt"] as double,
          values["platformData"] as int,
          values["scrollDeltaX"] as double,
          values["scrollDeltaY"] as double,
          values["panX"] as double,
          values["panY"] as double,
          values["panDeltaX"] as double,
          values["panDeltaY"] as double,
          values["scale"] as double,
          values["rotation"] as double,
          values["onRespond"] as void Function({bool allowPlatformDefault})?,
        ],
        <int>[
          1 |
              2 |
              (_flaxHas2 ? 4 : 0) |
              8 |
              16 |
              32 |
              64 |
              128 |
              256 |
              512 |
              1024 |
              2048 |
              4096 |
              8192 |
              16384 |
              32768 |
              65536 |
              131072 |
              262144 |
              524288 |
              1048576 |
              2097152 |
              4194304 |
              8388608 |
              16777216 |
              33554432 |
              67108864 |
              134217728 |
              268435456 |
              536870912 |
              1073741824 |
              2147483648,
          1 | 2 | 4 | 8 | 16,
        ],
        const <String>[
          "viewId",
          "embedderId",
          "timeStamp",
          "change",
          "kind",
          "signalKind",
          "device",
          "pointerIdentifier",
          "physicalX",
          "physicalY",
          "physicalDeltaX",
          "physicalDeltaY",
          "buttons",
          "obscured",
          "synthesized",
          "pressure",
          "pressureMin",
          "pressureMax",
          "distance",
          "distanceMax",
          "size",
          "radiusMajor",
          "radiusMinor",
          "radiusMin",
          "radiusMax",
          "orientation",
          "tilt",
          "platformData",
          "scrollDeltaX",
          "scrollDeltaY",
          "panX",
          "panY",
          "panDeltaX",
          "panDeltaY",
          "scale",
          "rotation",
          "onRespond",
        ],
      ) as api.PointerData;
    case '@implementation':
      final _flaxHas3 = values.containsKey("timeStamp");
      return flaxInvokeWithDefaults(
        _PointerDataProxy.new,
        <Object?>[
          values['@peer'] as FlaxProxyPeer,
          values["viewId"] as int,
          values["embedderId"] as int,
          (_flaxHas3 ? values["timeStamp"] as api2.Duration : null),
          values["change"] as api.PointerChange,
          values["kind"] as api.PointerDeviceKind,
          values["signalKind"] as api.PointerSignalKind?,
          values["device"] as int,
          values["pointerIdentifier"] as int,
          values["physicalX"] as double,
          values["physicalY"] as double,
          values["physicalDeltaX"] as double,
          values["physicalDeltaY"] as double,
          values["buttons"] as int,
          values["obscured"] as bool,
          values["synthesized"] as bool,
          values["pressure"] as double,
          values["pressureMin"] as double,
          values["pressureMax"] as double,
          values["distance"] as double,
          values["distanceMax"] as double,
          values["size"] as double,
          values["radiusMajor"] as double,
          values["radiusMinor"] as double,
          values["radiusMin"] as double,
          values["radiusMax"] as double,
          values["orientation"] as double,
          values["tilt"] as double,
          values["platformData"] as int,
          values["scrollDeltaX"] as double,
          values["scrollDeltaY"] as double,
          values["panX"] as double,
          values["panY"] as double,
          values["panDeltaX"] as double,
          values["panDeltaY"] as double,
          values["scale"] as double,
          values["rotation"] as double,
          values["onRespond"] as void Function({bool allowPlatformDefault})?,
        ],
        <int>[
          1 |
              2 |
              4 |
              (_flaxHas3 ? 8 : 0) |
              16 |
              32 |
              64 |
              128 |
              256 |
              512 |
              1024 |
              2048 |
              4096 |
              8192 |
              16384 |
              32768 |
              65536 |
              131072 |
              262144 |
              524288 |
              1048576 |
              2097152 |
              4194304 |
              8388608 |
              16777216 |
              33554432 |
              67108864 |
              134217728 |
              268435456 |
              536870912 |
              1073741824 |
              2147483648,
          1 | 2 | 4 | 8 | 16 | 32,
        ],
        const <String>[
          "",
          "viewId",
          "embedderId",
          "timeStamp",
          "change",
          "kind",
          "signalKind",
          "device",
          "pointerIdentifier",
          "physicalX",
          "physicalY",
          "physicalDeltaX",
          "physicalDeltaY",
          "buttons",
          "obscured",
          "synthesized",
          "pressure",
          "pressureMin",
          "pressureMax",
          "distance",
          "distanceMax",
          "size",
          "radiusMajor",
          "radiusMinor",
          "radiusMin",
          "radiusMax",
          "orientation",
          "tilt",
          "platformData",
          "scrollDeltaX",
          "scrollDeltaY",
          "panX",
          "panY",
          "panDeltaX",
          "panDeltaY",
          "scale",
          "rotation",
          "onRespond",
        ],
      ) as api.PointerData;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPointerDataPacket(Object value) => value is api.PointerDataPacket;
Object? _PointerDataPacket_data(Object value) =>
    (value as api.PointerDataPacket).data;
Object? _PointerDataPacket_super_get_data(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PointerDataPacketProxy)._flaxSuperGet_data;
Object _createPointerDataPacket(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      final _flaxHas0 = values.containsKey("data");
      return flaxInvokeWithDefaults(
        api.PointerDataPacket.new,
        <Object?>[(_flaxHas0 ? values["data"] as List<api.PointerData> : null)],
        <int>[(_flaxHas0 ? 1 : 0)],
        const <String>["data"],
      ) as api.PointerDataPacket;
    case '@implementation':
      final _flaxHas1 = values.containsKey("data");
      return flaxInvokeWithDefaults(
        _PointerDataPacketProxy.new,
        <Object?>[
          values['@peer'] as FlaxProxyPeer,
          (_flaxHas1 ? values["data"] as List<api.PointerData> : null),
        ],
        <int>[1 | (_flaxHas1 ? 2 : 0)],
        const <String>["", "data"],
      ) as api.PointerDataPacket;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRRect(Object value) => value is api.RRect;
Object? _RRect_left(Object value) => (value as api.RRect).left;
Object? _RRect_top(Object value) => (value as api.RRect).top;
Object? _RRect_right(Object value) => (value as api.RRect).right;
Object? _RRect_bottom(Object value) => (value as api.RRect).bottom;
Object? _RRect_tlRadiusX(Object value) => (value as api.RRect).tlRadiusX;
Object? _RRect_tlRadiusY(Object value) => (value as api.RRect).tlRadiusY;
Object? _RRect_tlRadius(Object value) => (value as api.RRect).tlRadius;
Object? _RRect_trRadiusX(Object value) => (value as api.RRect).trRadiusX;
Object? _RRect_trRadiusY(Object value) => (value as api.RRect).trRadiusY;
Object? _RRect_trRadius(Object value) => (value as api.RRect).trRadius;
Object? _RRect_brRadiusX(Object value) => (value as api.RRect).brRadiusX;
Object? _RRect_brRadiusY(Object value) => (value as api.RRect).brRadiusY;
Object? _RRect_brRadius(Object value) => (value as api.RRect).brRadius;
Object? _RRect_blRadiusX(Object value) => (value as api.RRect).blRadiusX;
Object? _RRect_blRadiusY(Object value) => (value as api.RRect).blRadiusY;
Object? _RRect_blRadius(Object value) => (value as api.RRect).blRadius;
Object? _RRect_width(Object value) => (value as api.RRect).width;
Object? _RRect_height(Object value) => (value as api.RRect).height;
Object? _RRect_outerRect(Object value) => (value as api.RRect).outerRect;
Object? _RRect_safeInnerRect(Object value) =>
    (value as api.RRect).safeInnerRect;
Object? _RRect_middleRect(Object value) => (value as api.RRect).middleRect;
Object? _RRect_wideMiddleRect(Object value) =>
    (value as api.RRect).wideMiddleRect;
Object? _RRect_tallMiddleRect(Object value) =>
    (value as api.RRect).tallMiddleRect;
Object? _RRect_isEmpty(Object value) => (value as api.RRect).isEmpty;
Object? _RRect_isFinite(Object value) => (value as api.RRect).isFinite;
Object? _RRect_isRect(Object value) => (value as api.RRect).isRect;
Object? _RRect_isStadium(Object value) => (value as api.RRect).isStadium;
Object? _RRect_isEllipse(Object value) => (value as api.RRect).isEllipse;
Object? _RRect_isCircle(Object value) => (value as api.RRect).isCircle;
Object? _RRect_shortestSide(Object value) => (value as api.RRect).shortestSide;
Object? _RRect_longestSide(Object value) => (value as api.RRect).longestSide;
Object? _RRect_hasNaN(Object value) => (value as api.RRect).hasNaN;
Object? _RRect_center(Object value) => (value as api.RRect).center;
Object? _RRect_lerp(Map<String, Object?> values) {
  return api.RRect.lerp(
    values["a"] as api.RRect?,
    values["b"] as api.RRect?,
    values["t"] as double,
  );
}

Object? _RRect_contains(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RRect).contains(values["point"] as api.Offset);
}

Object? _RRect_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RRect).toString();
}

Object? _RRect_shift(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RRect).shift(values["offset"] as api.Offset);
}

Object? _RRect_inflate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RRect).inflate(values["delta"] as double);
}

Object? _RRect_deflate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RRect).deflate(values["delta"] as double);
}

Object? _RRect_scaleRadii(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RRect).scaleRadii();
}

Object _createRRect(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "fromLTRBXY":
      return api.RRect.fromLTRBXY(
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
        values["radiusX"] as double,
        values["radiusY"] as double,
      );
    case "fromLTRBR":
      return api.RRect.fromLTRBR(
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
        values["radius"] as api.Radius,
      );
    case "fromRectXY":
      return api.RRect.fromRectXY(
        values["rect"] as api.Rect,
        values["radiusX"] as double,
        values["radiusY"] as double,
      );
    case "fromRectAndRadius":
      return api.RRect.fromRectAndRadius(
        values["rect"] as api.Rect,
        values["radius"] as api.Radius,
      );
    case "fromLTRBAndCorners":
      final _flaxHas4 = values.containsKey("topLeft");
      final _flaxHas5 = values.containsKey("topRight");
      final _flaxHas6 = values.containsKey("bottomRight");
      final _flaxHas7 = values.containsKey("bottomLeft");
      return flaxInvokeWithDefaults(
        api.RRect.fromLTRBAndCorners,
        <Object?>[
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          (_flaxHas4 ? values["topLeft"] as api.Radius : null),
          (_flaxHas5 ? values["topRight"] as api.Radius : null),
          (_flaxHas6 ? values["bottomRight"] as api.Radius : null),
          (_flaxHas7 ? values["bottomLeft"] as api.Radius : null),
        ],
        <int>[
          1 |
              2 |
              4 |
              8 |
              (_flaxHas4 ? 16 : 0) |
              (_flaxHas5 ? 32 : 0) |
              (_flaxHas6 ? 64 : 0) |
              (_flaxHas7 ? 128 : 0),
        ],
        const <String>[
          "",
          "",
          "",
          "",
          "topLeft",
          "topRight",
          "bottomRight",
          "bottomLeft",
        ],
      ) as api.RRect;
    case "fromRectAndCorners":
      final _flaxHas1 = values.containsKey("topLeft");
      final _flaxHas2 = values.containsKey("topRight");
      final _flaxHas3 = values.containsKey("bottomRight");
      final _flaxHas4 = values.containsKey("bottomLeft");
      return flaxInvokeWithDefaults(
        api.RRect.fromRectAndCorners,
        <Object?>[
          values["rect"] as api.Rect,
          (_flaxHas1 ? values["topLeft"] as api.Radius : null),
          (_flaxHas2 ? values["topRight"] as api.Radius : null),
          (_flaxHas3 ? values["bottomRight"] as api.Radius : null),
          (_flaxHas4 ? values["bottomLeft"] as api.Radius : null),
        ],
        <int>[
          1 |
              (_flaxHas1 ? 2 : 0) |
              (_flaxHas2 ? 4 : 0) |
              (_flaxHas3 ? 8 : 0) |
              (_flaxHas4 ? 16 : 0),
        ],
        const <String>["", "topLeft", "topRight", "bottomRight", "bottomLeft"],
      ) as api.RRect;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRSTransform(Object value) => value is api.RSTransform;
Object? _RSTransform_scos(Object value) => (value as api.RSTransform).scos;
Object? _RSTransform_ssin(Object value) => (value as api.RSTransform).ssin;
Object? _RSTransform_tx(Object value) => (value as api.RSTransform).tx;
Object? _RSTransform_ty(Object value) => (value as api.RSTransform).ty;
Object? _RSTransform_super_get_scos(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _RSTransformProxy)._flaxSuperGet_scos;
Object? _RSTransform_super_get_ssin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _RSTransformProxy)._flaxSuperGet_ssin;
Object? _RSTransform_super_get_tx(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _RSTransformProxy)._flaxSuperGet_tx;
Object? _RSTransform_super_get_ty(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _RSTransformProxy)._flaxSuperGet_ty;
Object _createRSTransform(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.RSTransform(
        values["scos"] as double,
        values["ssin"] as double,
        values["tx"] as double,
        values["ty"] as double,
      );
    case "fromComponents":
      return api.RSTransform.fromComponents(
        rotation: values["rotation"] as double,
        scale: values["scale"] as double,
        anchorX: values["anchorX"] as double,
        anchorY: values["anchorY"] as double,
        translateX: values["translateX"] as double,
        translateY: values["translateY"] as double,
      );
    case '@implementation':
      return _RSTransformProxy(
        values['@peer'] as FlaxProxyPeer,
        values["scos"] as double,
        values["ssin"] as double,
        values["tx"] as double,
        values["ty"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRSuperellipse(Object value) => value is api.RSuperellipse;
Object? _RSuperellipse_left(Object value) => (value as api.RSuperellipse).left;
Object? _RSuperellipse_top(Object value) => (value as api.RSuperellipse).top;
Object? _RSuperellipse_right(Object value) =>
    (value as api.RSuperellipse).right;
Object? _RSuperellipse_bottom(Object value) =>
    (value as api.RSuperellipse).bottom;
Object? _RSuperellipse_tlRadiusX(Object value) =>
    (value as api.RSuperellipse).tlRadiusX;
Object? _RSuperellipse_tlRadiusY(Object value) =>
    (value as api.RSuperellipse).tlRadiusY;
Object? _RSuperellipse_tlRadius(Object value) =>
    (value as api.RSuperellipse).tlRadius;
Object? _RSuperellipse_trRadiusX(Object value) =>
    (value as api.RSuperellipse).trRadiusX;
Object? _RSuperellipse_trRadiusY(Object value) =>
    (value as api.RSuperellipse).trRadiusY;
Object? _RSuperellipse_trRadius(Object value) =>
    (value as api.RSuperellipse).trRadius;
Object? _RSuperellipse_brRadiusX(Object value) =>
    (value as api.RSuperellipse).brRadiusX;
Object? _RSuperellipse_brRadiusY(Object value) =>
    (value as api.RSuperellipse).brRadiusY;
Object? _RSuperellipse_brRadius(Object value) =>
    (value as api.RSuperellipse).brRadius;
Object? _RSuperellipse_blRadiusX(Object value) =>
    (value as api.RSuperellipse).blRadiusX;
Object? _RSuperellipse_blRadiusY(Object value) =>
    (value as api.RSuperellipse).blRadiusY;
Object? _RSuperellipse_blRadius(Object value) =>
    (value as api.RSuperellipse).blRadius;
Object? _RSuperellipse_width(Object value) =>
    (value as api.RSuperellipse).width;
Object? _RSuperellipse_height(Object value) =>
    (value as api.RSuperellipse).height;
Object? _RSuperellipse_outerRect(Object value) =>
    (value as api.RSuperellipse).outerRect;
Object? _RSuperellipse_safeInnerRect(Object value) =>
    (value as api.RSuperellipse).safeInnerRect;
Object? _RSuperellipse_middleRect(Object value) =>
    (value as api.RSuperellipse).middleRect;
Object? _RSuperellipse_wideMiddleRect(Object value) =>
    (value as api.RSuperellipse).wideMiddleRect;
Object? _RSuperellipse_tallMiddleRect(Object value) =>
    (value as api.RSuperellipse).tallMiddleRect;
Object? _RSuperellipse_isEmpty(Object value) =>
    (value as api.RSuperellipse).isEmpty;
Object? _RSuperellipse_isFinite(Object value) =>
    (value as api.RSuperellipse).isFinite;
Object? _RSuperellipse_isRect(Object value) =>
    (value as api.RSuperellipse).isRect;
Object? _RSuperellipse_isStadium(Object value) =>
    (value as api.RSuperellipse).isStadium;
Object? _RSuperellipse_isEllipse(Object value) =>
    (value as api.RSuperellipse).isEllipse;
Object? _RSuperellipse_isCircle(Object value) =>
    (value as api.RSuperellipse).isCircle;
Object? _RSuperellipse_shortestSide(Object value) =>
    (value as api.RSuperellipse).shortestSide;
Object? _RSuperellipse_longestSide(Object value) =>
    (value as api.RSuperellipse).longestSide;
Object? _RSuperellipse_hasNaN(Object value) =>
    (value as api.RSuperellipse).hasNaN;
Object? _RSuperellipse_center(Object value) =>
    (value as api.RSuperellipse).center;
Object? _RSuperellipse_lerp(Map<String, Object?> values) {
  return api.RSuperellipse.lerp(
    values["a"] as api.RSuperellipse?,
    values["b"] as api.RSuperellipse?,
    values["t"] as double,
  );
}

Object? _RSuperellipse_contains(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RSuperellipse).contains(
    values["point"] as api.Offset,
  );
}

Object? _RSuperellipse_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RSuperellipse).toString();
}

Object? _RSuperellipse_shift(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RSuperellipse).shift(values["offset"] as api.Offset);
}

Object? _RSuperellipse_inflate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RSuperellipse).inflate(values["delta"] as double);
}

Object? _RSuperellipse_deflate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RSuperellipse).deflate(values["delta"] as double);
}

Object? _RSuperellipse_scaleRadii(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.RSuperellipse).scaleRadii();
}

Object _createRSuperellipse(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "fromLTRBXY":
      return api.RSuperellipse.fromLTRBXY(
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
        values["radiusX"] as double,
        values["radiusY"] as double,
      );
    case "fromLTRBR":
      return api.RSuperellipse.fromLTRBR(
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
        values["radius"] as api.Radius,
      );
    case "fromRectXY":
      return api.RSuperellipse.fromRectXY(
        values["rect"] as api.Rect,
        values["radiusX"] as double,
        values["radiusY"] as double,
      );
    case "fromRectAndRadius":
      return api.RSuperellipse.fromRectAndRadius(
        values["rect"] as api.Rect,
        values["radius"] as api.Radius,
      );
    case "fromLTRBAndCorners":
      final _flaxHas4 = values.containsKey("topLeft");
      final _flaxHas5 = values.containsKey("topRight");
      final _flaxHas6 = values.containsKey("bottomRight");
      final _flaxHas7 = values.containsKey("bottomLeft");
      return flaxInvokeWithDefaults(
        api.RSuperellipse.fromLTRBAndCorners,
        <Object?>[
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          (_flaxHas4 ? values["topLeft"] as api.Radius : null),
          (_flaxHas5 ? values["topRight"] as api.Radius : null),
          (_flaxHas6 ? values["bottomRight"] as api.Radius : null),
          (_flaxHas7 ? values["bottomLeft"] as api.Radius : null),
        ],
        <int>[
          1 |
              2 |
              4 |
              8 |
              (_flaxHas4 ? 16 : 0) |
              (_flaxHas5 ? 32 : 0) |
              (_flaxHas6 ? 64 : 0) |
              (_flaxHas7 ? 128 : 0),
        ],
        const <String>[
          "",
          "",
          "",
          "",
          "topLeft",
          "topRight",
          "bottomRight",
          "bottomLeft",
        ],
      ) as api.RSuperellipse;
    case "fromRectAndCorners":
      final _flaxHas1 = values.containsKey("topLeft");
      final _flaxHas2 = values.containsKey("topRight");
      final _flaxHas3 = values.containsKey("bottomRight");
      final _flaxHas4 = values.containsKey("bottomLeft");
      return flaxInvokeWithDefaults(
        api.RSuperellipse.fromRectAndCorners,
        <Object?>[
          values["rect"] as api.Rect,
          (_flaxHas1 ? values["topLeft"] as api.Radius : null),
          (_flaxHas2 ? values["topRight"] as api.Radius : null),
          (_flaxHas3 ? values["bottomRight"] as api.Radius : null),
          (_flaxHas4 ? values["bottomLeft"] as api.Radius : null),
        ],
        <int>[
          1 |
              (_flaxHas1 ? 2 : 0) |
              (_flaxHas2 ? 4 : 0) |
              (_flaxHas3 ? 8 : 0) |
              (_flaxHas4 ? 16 : 0),
        ],
        const <String>["", "topLeft", "topRight", "bottomRight", "bottomLeft"],
      ) as api.RSuperellipse;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRect(Object value) => value is api.Rect;
Object? _Rect_left(Object value) => (value as api.Rect).left;
Object? _Rect_top(Object value) => (value as api.Rect).top;
Object? _Rect_right(Object value) => (value as api.Rect).right;
Object? _Rect_bottom(Object value) => (value as api.Rect).bottom;
Object? _Rect_width(Object value) => (value as api.Rect).width;
Object? _Rect_height(Object value) => (value as api.Rect).height;
Object? _Rect_size(Object value) => (value as api.Rect).size;
Object? _Rect_hasNaN(Object value) => (value as api.Rect).hasNaN;
Object? _Rect_isInfinite(Object value) => (value as api.Rect).isInfinite;
Object? _Rect_isFinite(Object value) => (value as api.Rect).isFinite;
Object? _Rect_isEmpty(Object value) => (value as api.Rect).isEmpty;
Object? _Rect_shortestSide(Object value) => (value as api.Rect).shortestSide;
Object? _Rect_longestSide(Object value) => (value as api.Rect).longestSide;
Object? _Rect_topLeft(Object value) => (value as api.Rect).topLeft;
Object? _Rect_topCenter(Object value) => (value as api.Rect).topCenter;
Object? _Rect_topRight(Object value) => (value as api.Rect).topRight;
Object? _Rect_centerLeft(Object value) => (value as api.Rect).centerLeft;
Object? _Rect_center(Object value) => (value as api.Rect).center;
Object? _Rect_centerRight(Object value) => (value as api.Rect).centerRight;
Object? _Rect_bottomLeft(Object value) => (value as api.Rect).bottomLeft;
Object? _Rect_bottomCenter(Object value) => (value as api.Rect).bottomCenter;
Object? _Rect_bottomRight(Object value) => (value as api.Rect).bottomRight;
Object? _Rect_lerp(Map<String, Object?> values) {
  return api.Rect.lerp(
    values["a"] as api.Rect?,
    values["b"] as api.Rect?,
    values["t"] as double,
  );
}

Object? _Rect_shift(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Rect).shift(values["offset"] as api.Offset);
}

Object? _Rect_translate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Rect).translate(
    values["translateX"] as double,
    values["translateY"] as double,
  );
}

Object? _Rect_inflate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Rect).inflate(values["delta"] as double);
}

Object? _Rect_deflate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Rect).deflate(values["delta"] as double);
}

Object? _Rect_intersect(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Rect).intersect(values["other"] as api.Rect);
}

Object? _Rect_expandToInclude(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Rect).expandToInclude(values["other"] as api.Rect);
}

Object? _Rect_overlaps(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Rect).overlaps(values["other"] as api.Rect);
}

Object? _Rect_contains(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Rect).contains(values["offset"] as api.Offset);
}

Object? _Rect_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Rect).toString();
}

Object _createRect(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "fromLTRB":
      return api.Rect.fromLTRB(
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
      );
    case "fromLTWH":
      return api.Rect.fromLTWH(
        values["left"] as double,
        values["top"] as double,
        values["width"] as double,
        values["height"] as double,
      );
    case "fromCircle":
      return api.Rect.fromCircle(
        center: values["center"] as api.Offset,
        radius: values["radius"] as double,
      );
    case "fromCenter":
      return api.Rect.fromCenter(
        center: values["center"] as api.Offset,
        width: values["width"] as double,
        height: values["height"] as double,
      );
    case "fromPoints":
      return api.Rect.fromPoints(
        values["a"] as api.Offset,
        values["b"] as api.Offset,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRootIsolateToken(Object value) => value is api.RootIsolateToken;
Object? _RootIsolateToken_static_get_instance(Map<String, Object?> values) =>
    api.RootIsolateToken.instance;
Object _createRootIsolateToken(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isScene(Object value) => value is api.Scene;
Object? _Scene_toImageSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Scene).toImageSync(
    values["width"] as int,
    values["height"] as int,
  );
}

Object? _Scene_toImage(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Scene).toImage(
    values["width"] as int,
    values["height"] as int,
  );
}

Object? _Scene_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Scene).dispose();
  return null;
}

Object _createScene(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _SceneProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSceneBuilder(Object value) => value is api.SceneBuilder;
Object? _SceneBuilder_pushTransform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SceneBuilder).pushTransform(
    values["matrix4"] as api1.Float64List,
    oldLayer: values["oldLayer"] as api.TransformEngineLayer?,
  );
}

Object? _SceneBuilder_pushOffset(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SceneBuilder).pushOffset(
    values["dx"] as double,
    values["dy"] as double,
    oldLayer: values["oldLayer"] as api.OffsetEngineLayer?,
  );
}

Object? _SceneBuilder_pushClipRect(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SceneBuilder).pushClipRect(
    values["rect"] as api.Rect,
    clipBehavior: values["clipBehavior"] as api.Clip,
    oldLayer: values["oldLayer"] as api.ClipRectEngineLayer?,
  );
}

Object? _SceneBuilder_pushClipRRect(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SceneBuilder).pushClipRRect(
    values["rrect"] as api.RRect,
    clipBehavior: values["clipBehavior"] as api.Clip,
    oldLayer: values["oldLayer"] as api.ClipRRectEngineLayer?,
  );
}

Object? _SceneBuilder_pushClipRSuperellipse(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SceneBuilder).pushClipRSuperellipse(
    values["rsuperellipse"] as api.RSuperellipse,
    clipBehavior: values["clipBehavior"] as api.Clip,
    oldLayer: values["oldLayer"] as api.ClipRSuperellipseEngineLayer?,
  );
}

Object? _SceneBuilder_pushClipPath(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SceneBuilder).pushClipPath(
    values["path"] as api.Path,
    clipBehavior: values["clipBehavior"] as api.Clip,
    oldLayer: values["oldLayer"] as api.ClipPathEngineLayer?,
  );
}

Object? _SceneBuilder_pushOpacity(
  Object receiver,
  Map<String, Object?> values,
) {
  final _flaxHas1 = values.containsKey("offset");
  return flaxInvokeWithDefaults(
    (receiver as api.SceneBuilder).pushOpacity,
    <Object?>[
      values["alpha"] as int,
      (_flaxHas1 ? values["offset"] as api.Offset? : null),
      values["oldLayer"] as api.OpacityEngineLayer?,
    ],
    <int>[1 | (_flaxHas1 ? 2 : 0) | 4],
    const <String>["", "offset", "oldLayer"],
  ) as api.OpacityEngineLayer;
}

Object? _SceneBuilder_pushColorFilter(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SceneBuilder).pushColorFilter(
    values["filter"] as api.ColorFilter,
    oldLayer: values["oldLayer"] as api.ColorFilterEngineLayer?,
  );
}

Object? _SceneBuilder_pushImageFilter(
  Object receiver,
  Map<String, Object?> values,
) {
  final _flaxHas1 = values.containsKey("offset");
  return flaxInvokeWithDefaults(
    (receiver as api.SceneBuilder).pushImageFilter,
    <Object?>[
      values["filter"] as api.ImageFilter,
      (_flaxHas1 ? values["offset"] as api.Offset : null),
      values["oldLayer"] as api.ImageFilterEngineLayer?,
    ],
    <int>[1 | (_flaxHas1 ? 2 : 0) | 4],
    const <String>["", "offset", "oldLayer"],
  ) as api.ImageFilterEngineLayer;
}

Object? _SceneBuilder_pushBackdropFilter(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SceneBuilder).pushBackdropFilter(
    values["filter"] as api.ImageFilter,
    backdropId: values["backdropId"] as int?,
    blendMode: values["blendMode"] as api.BlendMode,
    oldLayer: values["oldLayer"] as api.BackdropFilterEngineLayer?,
  );
}

Object? _SceneBuilder_pushShaderMask(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SceneBuilder).pushShaderMask(
    values["shader"] as api.Shader,
    values["maskRect"] as api.Rect,
    values["blendMode"] as api.BlendMode,
    filterQuality: values["filterQuality"] as api.FilterQuality,
    oldLayer: values["oldLayer"] as api.ShaderMaskEngineLayer?,
  );
}

Object? _SceneBuilder_pop(Object receiver, Map<String, Object?> values) {
  (receiver as api.SceneBuilder).pop();
  return null;
}

Object? _SceneBuilder_addRetained(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SceneBuilder).addRetained(
    values["retainedLayer"] as api.EngineLayer,
  );
  return null;
}

Object? _SceneBuilder_addPerformanceOverlay(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SceneBuilder).addPerformanceOverlay(
    values["enabledOptions"] as int,
    values["bounds"] as api.Rect,
  );
  return null;
}

Object? _SceneBuilder_addPicture(Object receiver, Map<String, Object?> values) {
  (receiver as api.SceneBuilder).addPicture(
    values["offset"] as api.Offset,
    values["picture"] as api.Picture,
    isComplexHint: values["isComplexHint"] as bool,
    willChangeHint: values["willChangeHint"] as bool,
  );
  return null;
}

Object? _SceneBuilder_addTexture(Object receiver, Map<String, Object?> values) {
  final _flaxHas4 = values.containsKey("offset");
  flaxInvokeWithDefaults(
    (receiver as api.SceneBuilder).addTexture,
    <Object?>[
      values["textureId"] as int,
      values["filterQuality"] as api.FilterQuality,
      values["freeze"] as bool,
      values["height"] as double,
      (_flaxHas4 ? values["offset"] as api.Offset : null),
      values["width"] as double,
    ],
    <int>[1 | 2 | 4 | 8 | (_flaxHas4 ? 16 : 0) | 32],
    const <String>["", "filterQuality", "freeze", "height", "offset", "width"],
  );
  return null;
}

Object? _SceneBuilder_addPlatformView(
  Object receiver,
  Map<String, Object?> values,
) {
  final _flaxHas2 = values.containsKey("offset");
  flaxInvokeWithDefaults(
    (receiver as api.SceneBuilder).addPlatformView,
    <Object?>[
      values["viewId"] as int,
      values["height"] as double,
      (_flaxHas2 ? values["offset"] as api.Offset : null),
      values["width"] as double,
    ],
    <int>[1 | 2 | (_flaxHas2 ? 4 : 0) | 8],
    const <String>["", "height", "offset", "width"],
  );
  return null;
}

Object? _SceneBuilder_build(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SceneBuilder).build();
}

Object _createSceneBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SceneBuilder();
    case '@implementation':
      return _SceneBuilderProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsAction(Object value) => value is api.SemanticsAction;
Object? _SemanticsAction_index(Object value) =>
    (value as api.SemanticsAction).index;
Object? _SemanticsAction_name(Object value) =>
    (value as api.SemanticsAction).name;
Object? _SemanticsAction_static_get_values(Map<String, Object?> values) =>
    api.SemanticsAction.values;
Object? _SemanticsAction_fromIndex(Map<String, Object?> values) {
  return api.SemanticsAction.fromIndex(values["index"] as int);
}

Object? _SemanticsAction_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsAction).toString();
}

Object _createSemanticsAction(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _SemanticsActionProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsActionEvent(Object value) => value is api.SemanticsActionEvent;
Object? _SemanticsActionEvent_type(Object value) =>
    (value as api.SemanticsActionEvent).type;
Object? _SemanticsActionEvent_viewId(Object value) =>
    (value as api.SemanticsActionEvent).viewId;
Object? _SemanticsActionEvent_nodeId(Object value) =>
    (value as api.SemanticsActionEvent).nodeId;
Object? _SemanticsActionEvent_arguments(Object value) =>
    (value as api.SemanticsActionEvent).arguments;
Object? _SemanticsActionEvent_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  final _flaxHas0 = values.containsKey("arguments");
  return flaxInvokeWithDefaults(
    (receiver as api.SemanticsActionEvent).copyWith,
    <Object?>[
      (_flaxHas0 ? values["arguments"] : null),
      values["nodeId"] as int?,
      values["type"] as api.SemanticsAction?,
      values["viewId"] as int?,
    ],
    <int>[(_flaxHas0 ? 1 : 0) | 2 | 4 | 8],
    const <String>["arguments", "nodeId", "type", "viewId"],
  ) as api.SemanticsActionEvent;
}

Object? _SemanticsActionEvent_super_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  final _flaxHas0 = values.containsKey("arguments");
  return flaxInvokeWithDefaults(
    (receiver as _SemanticsActionEventProxy)._flaxSuper_copyWith,
    <Object?>[
      (_flaxHas0 ? values["arguments"] : null),
      values["nodeId"] as int?,
      values["type"] as api.SemanticsAction?,
      values["viewId"] as int?,
    ],
    <int>[(_flaxHas0 ? 1 : 0) | 2 | 4 | 8],
    const <String>["arguments", "nodeId", "type", "viewId"],
  ) as api.SemanticsActionEvent;
}

Object? _SemanticsActionEvent_super_get_type(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsActionEventProxy)._flaxSuperGet_type;
Object? _SemanticsActionEvent_super_get_nodeId(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsActionEventProxy)._flaxSuperGet_nodeId;
Object? _SemanticsActionEvent_super_get_arguments(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsActionEventProxy)._flaxSuperGet_arguments;
Object _createSemanticsActionEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsActionEvent(
        type: values["type"] as api.SemanticsAction,
        viewId: values["viewId"] as int,
        nodeId: values["nodeId"] as int,
        arguments: values["arguments"],
      );
    case '@implementation':
      return _SemanticsActionEventProxy(
        values['@peer'] as FlaxProxyPeer,
        type: values["type"] as api.SemanticsAction,
        viewId: values["viewId"] as int,
        nodeId: values["nodeId"] as int,
        arguments: values["arguments"],
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsFlag(Object value) => value is api.SemanticsFlag;
Object? _SemanticsFlag_index(Object value) =>
    (value as api.SemanticsFlag).index;
Object? _SemanticsFlag_name(Object value) => (value as api.SemanticsFlag).name;
Object? _SemanticsFlag_static_get_values(Map<String, Object?> values) =>
    api.SemanticsFlag.values;
Object? _SemanticsFlag_fromIndex(Map<String, Object?> values) {
  return api.SemanticsFlag.fromIndex(values["index"] as int);
}

Object? _SemanticsFlag_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsFlag).toString();
}

Object _createSemanticsFlag(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _SemanticsFlagProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsFlags(Object value) => value is api.SemanticsFlags;
Object? _SemanticsFlags_isChecked(Object value) =>
    (value as api.SemanticsFlags).isChecked;
Object? _SemanticsFlags_isSelected(Object value) =>
    (value as api.SemanticsFlags).isSelected;
Object? _SemanticsFlags_isEnabled(Object value) =>
    (value as api.SemanticsFlags).isEnabled;
Object? _SemanticsFlags_isToggled(Object value) =>
    (value as api.SemanticsFlags).isToggled;
Object? _SemanticsFlags_isExpanded(Object value) =>
    (value as api.SemanticsFlags).isExpanded;
Object? _SemanticsFlags_isRequired(Object value) =>
    (value as api.SemanticsFlags).isRequired;
Object? _SemanticsFlags_isFocused(Object value) =>
    (value as api.SemanticsFlags).isFocused;
Object? _SemanticsFlags_isAccessibilityFocusBlocked(Object value) =>
    (value as api.SemanticsFlags).isAccessibilityFocusBlocked;
Object? _SemanticsFlags_isButton(Object value) =>
    (value as api.SemanticsFlags).isButton;
Object? _SemanticsFlags_isTextField(Object value) =>
    (value as api.SemanticsFlags).isTextField;
Object? _SemanticsFlags_isInMutuallyExclusiveGroup(Object value) =>
    (value as api.SemanticsFlags).isInMutuallyExclusiveGroup;
Object? _SemanticsFlags_isHeader(Object value) =>
    (value as api.SemanticsFlags).isHeader;
Object? _SemanticsFlags_isObscured(Object value) =>
    (value as api.SemanticsFlags).isObscured;
Object? _SemanticsFlags_scopesRoute(Object value) =>
    (value as api.SemanticsFlags).scopesRoute;
Object? _SemanticsFlags_namesRoute(Object value) =>
    (value as api.SemanticsFlags).namesRoute;
Object? _SemanticsFlags_isHidden(Object value) =>
    (value as api.SemanticsFlags).isHidden;
Object? _SemanticsFlags_isImage(Object value) =>
    (value as api.SemanticsFlags).isImage;
Object? _SemanticsFlags_isLiveRegion(Object value) =>
    (value as api.SemanticsFlags).isLiveRegion;
Object? _SemanticsFlags_hasImplicitScrolling(Object value) =>
    (value as api.SemanticsFlags).hasImplicitScrolling;
Object? _SemanticsFlags_isMultiline(Object value) =>
    (value as api.SemanticsFlags).isMultiline;
Object? _SemanticsFlags_isReadOnly(Object value) =>
    (value as api.SemanticsFlags).isReadOnly;
Object? _SemanticsFlags_isLink(Object value) =>
    (value as api.SemanticsFlags).isLink;
Object? _SemanticsFlags_isSlider(Object value) =>
    (value as api.SemanticsFlags).isSlider;
Object? _SemanticsFlags_isKeyboardKey(Object value) =>
    (value as api.SemanticsFlags).isKeyboardKey;
Object? _SemanticsFlags_static_get_none(Map<String, Object?> values) =>
    api.SemanticsFlags.none;
Object? _SemanticsFlags_static_set_none(Map<String, Object?> values) {
  api.SemanticsFlags.none = values["value"] as api.SemanticsFlags;
  return null;
}

Object? _SemanticsFlags_merge(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsFlags).merge(
    values["other"] as api.SemanticsFlags,
  );
}

Object? _SemanticsFlags_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SemanticsFlags).copyWith(
    hasImplicitScrolling: values["hasImplicitScrolling"] as bool?,
    isAccessibilityFocusBlocked: values["isAccessibilityFocusBlocked"] as bool?,
    isButton: values["isButton"] as bool?,
    isChecked: values["isChecked"] as api.CheckedState?,
    isEnabled: values["isEnabled"] as api.Tristate?,
    isExpanded: values["isExpanded"] as api.Tristate?,
    isFocused: values["isFocused"] as api.Tristate?,
    isHeader: values["isHeader"] as bool?,
    isHidden: values["isHidden"] as bool?,
    isImage: values["isImage"] as bool?,
    isInMutuallyExclusiveGroup: values["isInMutuallyExclusiveGroup"] as bool?,
    isKeyboardKey: values["isKeyboardKey"] as bool?,
    isLink: values["isLink"] as bool?,
    isLiveRegion: values["isLiveRegion"] as bool?,
    isMultiline: values["isMultiline"] as bool?,
    isObscured: values["isObscured"] as bool?,
    isReadOnly: values["isReadOnly"] as bool?,
    isRequired: values["isRequired"] as api.Tristate?,
    isSelected: values["isSelected"] as api.Tristate?,
    isSlider: values["isSlider"] as bool?,
    isTextField: values["isTextField"] as bool?,
    isToggled: values["isToggled"] as api.Tristate?,
    namesRoute: values["namesRoute"] as bool?,
    scopesRoute: values["scopesRoute"] as bool?,
  );
}

Object? _SemanticsFlags_toStrings(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsFlags).toStrings();
}

Object? _SemanticsFlags_hasRepeatedFlags(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsFlags).hasRepeatedFlags(
    values["other"] as api.SemanticsFlags,
  );
}

Object? _SemanticsFlags_hasConflictingFlags(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsFlags).hasConflictingFlags(
    values["other"] as api.SemanticsFlags,
  );
}

Object? _SemanticsFlags_super_merge(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsFlagsProxy)._flaxSuper_merge(
    values["other"] as api.SemanticsFlags,
  );
}

Object? _SemanticsFlags_super_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsFlagsProxy)._flaxSuper_copyWith(
    hasImplicitScrolling: values["hasImplicitScrolling"] as bool?,
    isAccessibilityFocusBlocked: values["isAccessibilityFocusBlocked"] as bool?,
    isButton: values["isButton"] as bool?,
    isChecked: values["isChecked"] as api.CheckedState?,
    isEnabled: values["isEnabled"] as api.Tristate?,
    isExpanded: values["isExpanded"] as api.Tristate?,
    isFocused: values["isFocused"] as api.Tristate?,
    isHeader: values["isHeader"] as bool?,
    isHidden: values["isHidden"] as bool?,
    isImage: values["isImage"] as bool?,
    isInMutuallyExclusiveGroup: values["isInMutuallyExclusiveGroup"] as bool?,
    isKeyboardKey: values["isKeyboardKey"] as bool?,
    isLink: values["isLink"] as bool?,
    isLiveRegion: values["isLiveRegion"] as bool?,
    isMultiline: values["isMultiline"] as bool?,
    isObscured: values["isObscured"] as bool?,
    isReadOnly: values["isReadOnly"] as bool?,
    isRequired: values["isRequired"] as api.Tristate?,
    isSelected: values["isSelected"] as api.Tristate?,
    isSlider: values["isSlider"] as bool?,
    isTextField: values["isTextField"] as bool?,
    isToggled: values["isToggled"] as api.Tristate?,
    namesRoute: values["namesRoute"] as bool?,
    scopesRoute: values["scopesRoute"] as bool?,
  );
}

Object? _SemanticsFlags_super_toStrings(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsFlagsProxy)._flaxSuper_toStrings();
}

Object? _SemanticsFlags_super_hasRepeatedFlags(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsFlagsProxy)._flaxSuper_hasRepeatedFlags(
    values["other"] as api.SemanticsFlags,
  );
}

Object? _SemanticsFlags_super_hasConflictingFlags(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SemanticsFlagsProxy)._flaxSuper_hasConflictingFlags(
    values["other"] as api.SemanticsFlags,
  );
}

Object? _SemanticsFlags_super_get_isChecked(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isChecked;
Object? _SemanticsFlags_super_get_isSelected(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isSelected;
Object? _SemanticsFlags_super_get_isEnabled(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isEnabled;
Object? _SemanticsFlags_super_get_isToggled(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isToggled;
Object? _SemanticsFlags_super_get_isExpanded(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isExpanded;
Object? _SemanticsFlags_super_get_isRequired(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isRequired;
Object? _SemanticsFlags_super_get_isFocused(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isFocused;
Object? _SemanticsFlags_super_get_isAccessibilityFocusBlocked(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)
    ._flaxSuperGet_isAccessibilityFocusBlocked;
Object? _SemanticsFlags_super_get_isButton(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isButton;
Object? _SemanticsFlags_super_get_isTextField(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isTextField;
Object? _SemanticsFlags_super_get_isInMutuallyExclusiveGroup(
  Object receiver,
  Map<String, Object?> values,
) =>
    (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isInMutuallyExclusiveGroup;
Object? _SemanticsFlags_super_get_isHeader(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isHeader;
Object? _SemanticsFlags_super_get_isObscured(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isObscured;
Object? _SemanticsFlags_super_get_scopesRoute(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_scopesRoute;
Object? _SemanticsFlags_super_get_namesRoute(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_namesRoute;
Object? _SemanticsFlags_super_get_isHidden(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isHidden;
Object? _SemanticsFlags_super_get_isImage(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isImage;
Object? _SemanticsFlags_super_get_isLiveRegion(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isLiveRegion;
Object? _SemanticsFlags_super_get_hasImplicitScrolling(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_hasImplicitScrolling;
Object? _SemanticsFlags_super_get_isMultiline(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isMultiline;
Object? _SemanticsFlags_super_get_isReadOnly(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isReadOnly;
Object? _SemanticsFlags_super_get_isLink(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isLink;
Object? _SemanticsFlags_super_get_isSlider(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isSlider;
Object? _SemanticsFlags_super_get_isKeyboardKey(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SemanticsFlagsProxy)._flaxSuperGet_isKeyboardKey;
Object _createSemanticsFlags(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsFlags(
        isChecked: values["isChecked"] as api.CheckedState,
        isSelected: values["isSelected"] as api.Tristate,
        isEnabled: values["isEnabled"] as api.Tristate,
        isToggled: values["isToggled"] as api.Tristate,
        isExpanded: values["isExpanded"] as api.Tristate,
        isRequired: values["isRequired"] as api.Tristate,
        isFocused: values["isFocused"] as api.Tristate,
        isButton: values["isButton"] as bool,
        isTextField: values["isTextField"] as bool,
        isInMutuallyExclusiveGroup:
            values["isInMutuallyExclusiveGroup"] as bool,
        isHeader: values["isHeader"] as bool,
        isObscured: values["isObscured"] as bool,
        scopesRoute: values["scopesRoute"] as bool,
        namesRoute: values["namesRoute"] as bool,
        isHidden: values["isHidden"] as bool,
        isImage: values["isImage"] as bool,
        isLiveRegion: values["isLiveRegion"] as bool,
        hasImplicitScrolling: values["hasImplicitScrolling"] as bool,
        isMultiline: values["isMultiline"] as bool,
        isReadOnly: values["isReadOnly"] as bool,
        isLink: values["isLink"] as bool,
        isSlider: values["isSlider"] as bool,
        isKeyboardKey: values["isKeyboardKey"] as bool,
        isAccessibilityFocusBlocked:
            values["isAccessibilityFocusBlocked"] as bool,
      );
    case '@implementation':
      return _SemanticsFlagsProxy(
        values['@peer'] as FlaxProxyPeer,
        isChecked: values["isChecked"] as api.CheckedState,
        isSelected: values["isSelected"] as api.Tristate,
        isEnabled: values["isEnabled"] as api.Tristate,
        isToggled: values["isToggled"] as api.Tristate,
        isExpanded: values["isExpanded"] as api.Tristate,
        isRequired: values["isRequired"] as api.Tristate,
        isFocused: values["isFocused"] as api.Tristate,
        isButton: values["isButton"] as bool,
        isTextField: values["isTextField"] as bool,
        isInMutuallyExclusiveGroup:
            values["isInMutuallyExclusiveGroup"] as bool,
        isHeader: values["isHeader"] as bool,
        isObscured: values["isObscured"] as bool,
        scopesRoute: values["scopesRoute"] as bool,
        namesRoute: values["namesRoute"] as bool,
        isHidden: values["isHidden"] as bool,
        isImage: values["isImage"] as bool,
        isLiveRegion: values["isLiveRegion"] as bool,
        hasImplicitScrolling: values["hasImplicitScrolling"] as bool,
        isMultiline: values["isMultiline"] as bool,
        isReadOnly: values["isReadOnly"] as bool,
        isLink: values["isLink"] as bool,
        isSlider: values["isSlider"] as bool,
        isKeyboardKey: values["isKeyboardKey"] as bool,
        isAccessibilityFocusBlocked:
            values["isAccessibilityFocusBlocked"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsUpdate(Object value) => value is api.SemanticsUpdate;
Object? _SemanticsUpdate_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.SemanticsUpdate).dispose();
  return null;
}

Object _createSemanticsUpdate(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _SemanticsUpdateProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSemanticsUpdateBuilder(Object value) =>
    value is api.SemanticsUpdateBuilder;
Object? _SemanticsUpdateBuilder_updateNode(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsUpdateBuilder).updateNode(
    actions: values["actions"] as int,
    additionalActions: values["additionalActions"] as api1.Int32List,
    childrenInHitTestOrder: values["childrenInHitTestOrder"] as api1.Int32List,
    childrenInTraversalOrder:
        values["childrenInTraversalOrder"] as api1.Int32List,
    controlsNodes: values["controlsNodes"] as List<String>?,
    currentValueLength: values["currentValueLength"] as int,
    decreasedValue: values["decreasedValue"] as String,
    decreasedValueAttributes:
        values["decreasedValueAttributes"] as List<api.StringAttribute>,
    flags: values["flags"] as api.SemanticsFlags,
    headingLevel: values["headingLevel"] as int,
    hint: values["hint"] as String,
    hintAttributes: values["hintAttributes"] as List<api.StringAttribute>,
    hitTestBehavior: values["hitTestBehavior"] as api.SemanticsHitTestBehavior,
    hitTestTransform: values["hitTestTransform"] as api1.Float64List,
    id: values["id"] as int,
    identifier: values["identifier"] as String,
    increasedValue: values["increasedValue"] as String,
    increasedValueAttributes:
        values["increasedValueAttributes"] as List<api.StringAttribute>,
    inputType: values["inputType"] as api.SemanticsInputType,
    label: values["label"] as String,
    labelAttributes: values["labelAttributes"] as List<api.StringAttribute>,
    linkUrl: values["linkUrl"] as String,
    locale: values["locale"] as api.Locale?,
    maxValue: values["maxValue"] as String,
    maxValueLength: values["maxValueLength"] as int,
    minValue: values["minValue"] as String,
    platformViewId: values["platformViewId"] as int,
    rect: values["rect"] as api.Rect,
    role: values["role"] as api.SemanticsRole,
    scrollChildren: values["scrollChildren"] as int,
    scrollExtentMax: values["scrollExtentMax"] as double,
    scrollExtentMin: values["scrollExtentMin"] as double,
    scrollIndex: values["scrollIndex"] as int,
    scrollPosition: values["scrollPosition"] as double,
    textDirection: values["textDirection"] as api.TextDirection?,
    textSelectionBase: values["textSelectionBase"] as int,
    textSelectionExtent: values["textSelectionExtent"] as int,
    tooltip: values["tooltip"] as String,
    transform: values["transform"] as api1.Float64List,
    traversalParent: values["traversalParent"] as int,
    validationResult:
        values["validationResult"] as api.SemanticsValidationResult,
    value: values["value"] as String,
    valueAttributes: values["valueAttributes"] as List<api.StringAttribute>,
  );
  return null;
}

Object? _SemanticsUpdateBuilder_updateCustomAction(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SemanticsUpdateBuilder).updateCustomAction(
    hint: values["hint"] as String?,
    id: values["id"] as int,
    label: values["label"] as String?,
    overrideId: values["overrideId"] as int,
  );
  return null;
}

Object? _SemanticsUpdateBuilder_build(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SemanticsUpdateBuilder).build();
}

Object _createSemanticsUpdateBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SemanticsUpdateBuilder();
    case '@implementation':
      return _SemanticsUpdateBuilderProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isShader(Object value) => value is api.Shader;
Object? _Shader_debugDisposed(Object value) =>
    (value as api.Shader).debugDisposed;
Object? _Shader_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Shader).dispose();
  return null;
}

Object _createShader(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isShaderMaskEngineLayer(Object value) =>
    value is api.ShaderMaskEngineLayer;
Object _createShaderMaskEngineLayer(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isShadow(Object value) => value is api.Shadow;
Object? _Shadow_color(Object value) => (value as api.Shadow).color;
Object? _Shadow_offset(Object value) => (value as api.Shadow).offset;
Object? _Shadow_blurRadius(Object value) => (value as api.Shadow).blurRadius;
Object? _Shadow_blurSigma(Object value) => (value as api.Shadow).blurSigma;
Object? _Shadow_convertRadiusToSigma(Map<String, Object?> values) {
  return api.Shadow.convertRadiusToSigma(values["radius"] as double);
}

Object? _Shadow_lerp(Map<String, Object?> values) {
  return api.Shadow.lerp(
    values["a"] as api.Shadow?,
    values["b"] as api.Shadow?,
    values["t"] as double,
  );
}

Object? _Shadow_lerpList(Map<String, Object?> values) {
  return api.Shadow.lerpList(
    values["a"] as List<api.Shadow>?,
    values["b"] as List<api.Shadow>?,
    values["t"] as double,
  );
}

Object? _Shadow_toPaint(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Shadow).toPaint();
}

Object? _Shadow_scale(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Shadow).scale(values["factor"] as double);
}

Object? _Shadow_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Shadow).toString();
}

Object? _Shadow_super_toPaint(Object receiver, Map<String, Object?> values) {
  return (receiver as _ShadowProxy)._flaxSuper_toPaint();
}

Object? _Shadow_super_scale(Object receiver, Map<String, Object?> values) {
  return (receiver as _ShadowProxy)._flaxSuper_scale(
    values["factor"] as double,
  );
}

Object? _Shadow_super_get_color(Object receiver, Map<String, Object?> values) =>
    (receiver as _ShadowProxy)._flaxSuperGet_color;
Object? _Shadow_super_get_blurRadius(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ShadowProxy)._flaxSuperGet_blurRadius;
Object? _Shadow_super_get_blurSigma(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ShadowProxy)._flaxSuperGet_blurSigma;
Object _createShadow(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      final _flaxHas0 = values.containsKey("color");
      final _flaxHas1 = values.containsKey("offset");
      return flaxInvokeWithDefaults(
        api.Shadow.new,
        <Object?>[
          (_flaxHas0 ? values["color"] as api.Color : null),
          (_flaxHas1 ? values["offset"] as api.Offset : null),
          values["blurRadius"] as double,
        ],
        <int>[(_flaxHas0 ? 1 : 0) | (_flaxHas1 ? 2 : 0) | 4],
        const <String>["color", "offset", "blurRadius"],
      ) as api.Shadow;
    case '@implementation':
      final _flaxHas1 = values.containsKey("color");
      final _flaxHas2 = values.containsKey("offset");
      return flaxInvokeWithDefaults(
        _ShadowProxy.new,
        <Object?>[
          values['@peer'] as FlaxProxyPeer,
          (_flaxHas1 ? values["color"] as api.Color : null),
          (_flaxHas2 ? values["offset"] as api.Offset : null),
          values["blurRadius"] as double,
        ],
        <int>[1 | (_flaxHas1 ? 2 : 0) | (_flaxHas2 ? 4 : 0) | 8],
        const <String>["", "color", "offset", "blurRadius"],
      ) as api.Shadow;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSingletonFlutterWindow(Object value) =>
    value is api.SingletonFlutterWindow;
Object? _SingletonFlutterWindow_onMetricsChanged(Object value) =>
    (value as api.SingletonFlutterWindow).onMetricsChanged;
Object? _SingletonFlutterWindow_locale(Object value) =>
    (value as api.SingletonFlutterWindow).locale;
Object? _SingletonFlutterWindow_locales(Object value) =>
    (value as api.SingletonFlutterWindow).locales;
Object? _SingletonFlutterWindow_onLocaleChanged(Object value) =>
    (value as api.SingletonFlutterWindow).onLocaleChanged;
Object? _SingletonFlutterWindow_initialLifecycleState(Object value) =>
    (value as api.SingletonFlutterWindow).initialLifecycleState;
Object? _SingletonFlutterWindow_textScaleFactor(Object value) =>
    (value as api.SingletonFlutterWindow).textScaleFactor;
Object? _SingletonFlutterWindow_nativeSpellCheckServiceDefined(Object value) =>
    (value as api.SingletonFlutterWindow).nativeSpellCheckServiceDefined;
Object? _SingletonFlutterWindow_supportsShowingSystemContextMenu(
  Object value,
) => (value as api.SingletonFlutterWindow).supportsShowingSystemContextMenu;
Object? _SingletonFlutterWindow_brieflyShowPassword(Object value) =>
    (value as api.SingletonFlutterWindow).brieflyShowPassword;
Object? _SingletonFlutterWindow_alwaysUse24HourFormat(Object value) =>
    (value as api.SingletonFlutterWindow).alwaysUse24HourFormat;
Object? _SingletonFlutterWindow_onTextScaleFactorChanged(Object value) =>
    (value as api.SingletonFlutterWindow).onTextScaleFactorChanged;
Object? _SingletonFlutterWindow_platformBrightness(Object value) =>
    (value as api.SingletonFlutterWindow).platformBrightness;
Object? _SingletonFlutterWindow_onPlatformBrightnessChanged(Object value) =>
    (value as api.SingletonFlutterWindow).onPlatformBrightnessChanged;
Object? _SingletonFlutterWindow_systemFontFamily(Object value) =>
    (value as api.SingletonFlutterWindow).systemFontFamily;
Object? _SingletonFlutterWindow_onSystemFontFamilyChanged(Object value) =>
    (value as api.SingletonFlutterWindow).onSystemFontFamilyChanged;
Object? _SingletonFlutterWindow_onBeginFrame(Object value) =>
    (value as api.SingletonFlutterWindow).onBeginFrame;
Object? _SingletonFlutterWindow_onDrawFrame(Object value) =>
    (value as api.SingletonFlutterWindow).onDrawFrame;
Object? _SingletonFlutterWindow_onReportTimings(Object value) =>
    (value as api.SingletonFlutterWindow).onReportTimings;
Object? _SingletonFlutterWindow_onPointerDataPacket(Object value) =>
    (value as api.SingletonFlutterWindow).onPointerDataPacket;
Object? _SingletonFlutterWindow_onKeyData(Object value) =>
    (value as api.SingletonFlutterWindow).onKeyData;
Object? _SingletonFlutterWindow_defaultRouteName(Object value) =>
    (value as api.SingletonFlutterWindow).defaultRouteName;
Object? _SingletonFlutterWindow_semanticsEnabled(Object value) =>
    (value as api.SingletonFlutterWindow).semanticsEnabled;
Object? _SingletonFlutterWindow_onSemanticsEnabledChanged(Object value) =>
    (value as api.SingletonFlutterWindow).onSemanticsEnabledChanged;
Object? _SingletonFlutterWindow_frameData(Object value) =>
    (value as api.SingletonFlutterWindow).frameData;
Object? _SingletonFlutterWindow_onFrameDataChanged(Object value) =>
    (value as api.SingletonFlutterWindow).onFrameDataChanged;
Object? _SingletonFlutterWindow_accessibilityFeatures(Object value) =>
    (value as api.SingletonFlutterWindow).accessibilityFeatures;
Object? _SingletonFlutterWindow_onAccessibilityFeaturesChanged(Object value) =>
    (value as api.SingletonFlutterWindow).onAccessibilityFeaturesChanged;
Object? _SingletonFlutterWindow_onPlatformMessage(Object value) =>
    (value as api.SingletonFlutterWindow).onPlatformMessage;
void _SingletonFlutterWindow_set_onMetricsChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onMetricsChanged =
      value as void Function()?;
}

void _SingletonFlutterWindow_set_onLocaleChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onLocaleChanged =
      value as void Function()?;
}

void _SingletonFlutterWindow_set_onTextScaleFactorChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onTextScaleFactorChanged =
      value as void Function()?;
}

void _SingletonFlutterWindow_set_onPlatformBrightnessChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onPlatformBrightnessChanged =
      value as void Function()?;
}

void _SingletonFlutterWindow_set_onSystemFontFamilyChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onSystemFontFamilyChanged =
      value as void Function()?;
}

void _SingletonFlutterWindow_set_onBeginFrame(Object receiver, Object? value) {
  (receiver as api.SingletonFlutterWindow).onBeginFrame =
      value as void Function(api2.Duration duration)?;
}

void _SingletonFlutterWindow_set_onDrawFrame(Object receiver, Object? value) {
  (receiver as api.SingletonFlutterWindow).onDrawFrame =
      value as void Function()?;
}

void _SingletonFlutterWindow_set_onReportTimings(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onReportTimings =
      value as void Function(List<api.FrameTiming> timings)?;
}

void _SingletonFlutterWindow_set_onPointerDataPacket(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onPointerDataPacket =
      value as void Function(api.PointerDataPacket packet)?;
}

void _SingletonFlutterWindow_set_onKeyData(Object receiver, Object? value) {
  (receiver as api.SingletonFlutterWindow).onKeyData =
      value as bool Function(api.KeyData data)?;
}

void _SingletonFlutterWindow_set_onSemanticsEnabledChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onSemanticsEnabledChanged =
      value as void Function()?;
}

void _SingletonFlutterWindow_set_onFrameDataChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onFrameDataChanged =
      value as void Function()?;
}

void _SingletonFlutterWindow_set_onAccessibilityFeaturesChanged(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onAccessibilityFeaturesChanged =
      value as void Function()?;
}

void _SingletonFlutterWindow_set_onPlatformMessage(
  Object receiver,
  Object? value,
) {
  (receiver as api.SingletonFlutterWindow).onPlatformMessage =
      value
          as void Function(
            String name,
            api1.ByteData? data,
            void Function(api1.ByteData? data)? callback,
          )?;
}

Object? _SingletonFlutterWindow_computePlatformResolvedLocale(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SingletonFlutterWindow).computePlatformResolvedLocale(
    values["supportedLocales"] as List<api.Locale>,
  );
}

Object? _SingletonFlutterWindow_scheduleFrame(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SingletonFlutterWindow).scheduleFrame();
  return null;
}

Object? _SingletonFlutterWindow_sendPlatformMessage(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SingletonFlutterWindow).sendPlatformMessage(
    values["name"] as String,
    values["data"] as api1.ByteData?,
    values["callback"] as void Function(api1.ByteData? data)?,
  );
  return null;
}

Object? _SingletonFlutterWindow_setIsolateDebugName(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.SingletonFlutterWindow).setIsolateDebugName(
    values["name"] as String,
  );
  return null;
}

Object _createSingletonFlutterWindow(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isSpellOutStringAttribute(Object value) =>
    value is api.SpellOutStringAttribute;
Object? _SpellOutStringAttribute_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SpellOutStringAttribute).toString();
}

Object _createSpellOutStringAttribute(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.SpellOutStringAttribute(
        range: values["range"] as api.TextRange,
      );
    case '@implementation':
      return _SpellOutStringAttributeProxy(
        values['@peer'] as FlaxProxyPeer,
        range: values["range"] as api.TextRange,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isStringAttribute(Object value) => value is api.StringAttribute;
Object? _StringAttribute_range(Object value) =>
    (value as api.StringAttribute).range;
Object? _StringAttribute_copy(Object receiver, Map<String, Object?> values) {
  return (receiver as api.StringAttribute).copy(
    range: values["range"] as api.TextRange,
  );
}

Object _createStringAttribute(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isStrutStyle(Object value) => value is api.StrutStyle;
Object _createStrutStyle(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.StrutStyle(
        fontFamily: values["fontFamily"] as String?,
        fontFamilyFallback: values["fontFamilyFallback"] as List<String>?,
        fontSize: values["fontSize"] as double?,
        height: values["height"] as double?,
        leadingDistribution:
            values["leadingDistribution"] as api.TextLeadingDistribution?,
        leading: values["leading"] as double?,
        fontWeight: values["fontWeight"] as api.FontWeight?,
        fontStyle: values["fontStyle"] as api.FontStyle?,
        forceStrutHeight: values["forceStrutHeight"] as bool?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSystemColor(Object value) => value is api.SystemColor;
Object? _SystemColor_name(Object value) => (value as api.SystemColor).name;
Object? _SystemColor_value(Object value) => (value as api.SystemColor).value;
Object? _SystemColor_isSupported(Object value) =>
    (value as api.SystemColor).isSupported;
Object? _SystemColor_static_get_platformProvidesSystemColors(
  Map<String, Object?> values,
) => api.SystemColor.platformProvidesSystemColors;
Object? _SystemColor_static_get_light(Map<String, Object?> values) =>
    api.SystemColor.light;
Object? _SystemColor_static_get_dark(Map<String, Object?> values) =>
    api.SystemColor.dark;
Object _createSystemColor(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SystemColor(
        name: values["name"] as String,
        value: values["value"] as api.Color?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSystemColorPalette(Object value) => value is api.SystemColorPalette;
Object? _SystemColorPalette_brightness(Object value) =>
    (value as api.SystemColorPalette).brightness;
Object? _SystemColorPalette_accentColor(Object value) =>
    (value as api.SystemColorPalette).accentColor;
Object? _SystemColorPalette_accentColorText(Object value) =>
    (value as api.SystemColorPalette).accentColorText;
Object? _SystemColorPalette_activeText(Object value) =>
    (value as api.SystemColorPalette).activeText;
Object? _SystemColorPalette_buttonBorder(Object value) =>
    (value as api.SystemColorPalette).buttonBorder;
Object? _SystemColorPalette_buttonFace(Object value) =>
    (value as api.SystemColorPalette).buttonFace;
Object? _SystemColorPalette_buttonText(Object value) =>
    (value as api.SystemColorPalette).buttonText;
Object? _SystemColorPalette_canvas(Object value) =>
    (value as api.SystemColorPalette).canvas;
Object? _SystemColorPalette_canvasText(Object value) =>
    (value as api.SystemColorPalette).canvasText;
Object? _SystemColorPalette_field(Object value) =>
    (value as api.SystemColorPalette).field;
Object? _SystemColorPalette_fieldText(Object value) =>
    (value as api.SystemColorPalette).fieldText;
Object? _SystemColorPalette_grayText(Object value) =>
    (value as api.SystemColorPalette).grayText;
Object? _SystemColorPalette_highlight(Object value) =>
    (value as api.SystemColorPalette).highlight;
Object? _SystemColorPalette_highlightText(Object value) =>
    (value as api.SystemColorPalette).highlightText;
Object? _SystemColorPalette_linkText(Object value) =>
    (value as api.SystemColorPalette).linkText;
Object? _SystemColorPalette_mark(Object value) =>
    (value as api.SystemColorPalette).mark;
Object? _SystemColorPalette_markText(Object value) =>
    (value as api.SystemColorPalette).markText;
Object? _SystemColorPalette_selectedItem(Object value) =>
    (value as api.SystemColorPalette).selectedItem;
Object? _SystemColorPalette_selectedItemText(Object value) =>
    (value as api.SystemColorPalette).selectedItemText;
Object? _SystemColorPalette_visitedText(Object value) =>
    (value as api.SystemColorPalette).visitedText;
Object _createSystemColorPalette(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isTangent(Object value) => value is api.Tangent;
Object? _Tangent_position(Object value) => (value as api.Tangent).position;
Object? _Tangent_vector(Object value) => (value as api.Tangent).vector;
Object? _Tangent_angle(Object value) => (value as api.Tangent).angle;
Object? _Tangent_super_get_position(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TangentProxy)._flaxSuperGet_position;
Object? _Tangent_super_get_vector(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TangentProxy)._flaxSuperGet_vector;
Object? _Tangent_super_get_angle(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TangentProxy)._flaxSuperGet_angle;
Object _createTangent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Tangent(
        values["position"] as api.Offset,
        values["vector"] as api.Offset,
      );
    case "fromAngle":
      return api.Tangent.fromAngle(
        values["position"] as api.Offset,
        values["angle"] as double,
      );
    case '@implementation':
      return _TangentProxy(
        values['@peer'] as FlaxProxyPeer,
        values["position"] as api.Offset,
        values["vector"] as api.Offset,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTargetImageSize(Object value) => value is api.TargetImageSize;
Object? _TargetImageSize_width(Object value) =>
    (value as api.TargetImageSize).width;
Object? _TargetImageSize_height(Object value) =>
    (value as api.TargetImageSize).height;
Object? _TargetImageSize_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.TargetImageSize).toString();
}

Object? _TargetImageSize_super_get_width(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TargetImageSizeProxy)._flaxSuperGet_width;
Object? _TargetImageSize_super_get_height(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TargetImageSizeProxy)._flaxSuperGet_height;
Object _createTargetImageSize(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TargetImageSize(
        width: values["width"] as int?,
        height: values["height"] as int?,
      );
    case '@implementation':
      return _TargetImageSizeProxy(
        values['@peer'] as FlaxProxyPeer,
        width: values["width"] as int?,
        height: values["height"] as int?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextBox(Object value) => value is api.TextBox;
Object? _TextBox_left(Object value) => (value as api.TextBox).left;
Object? _TextBox_top(Object value) => (value as api.TextBox).top;
Object? _TextBox_right(Object value) => (value as api.TextBox).right;
Object? _TextBox_bottom(Object value) => (value as api.TextBox).bottom;
Object? _TextBox_direction(Object value) => (value as api.TextBox).direction;
Object? _TextBox_start(Object value) => (value as api.TextBox).start;
Object? _TextBox_end(Object value) => (value as api.TextBox).end;
Object? _TextBox_toRect(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextBox).toRect();
}

Object? _TextBox_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextBox).toString();
}

Object? _TextBox_super_toRect(Object receiver, Map<String, Object?> values) {
  return (receiver as _TextBoxProxy)._flaxSuper_toRect();
}

Object? _TextBox_super_get_top(Object receiver, Map<String, Object?> values) =>
    (receiver as _TextBoxProxy)._flaxSuperGet_top;
Object? _TextBox_super_get_right(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TextBoxProxy)._flaxSuperGet_right;
Object? _TextBox_super_get_bottom(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TextBoxProxy)._flaxSuperGet_bottom;
Object? _TextBox_super_get_direction(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TextBoxProxy)._flaxSuperGet_direction;
Object? _TextBox_super_get_start(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TextBoxProxy)._flaxSuperGet_start;
Object? _TextBox_super_get_end(Object receiver, Map<String, Object?> values) =>
    (receiver as _TextBoxProxy)._flaxSuperGet_end;
Object _createTextBox(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "fromLTRBD":
      return api.TextBox.fromLTRBD(
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
        values["direction"] as api.TextDirection,
      );
    case '@implementation':
      return _TextBoxProxy.fromLTRBD(
        values['@peer'] as FlaxProxyPeer,
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
        values["direction"] as api.TextDirection,
      );
    case "@implementation:fromLTRBD":
      return _TextBoxProxy.fromLTRBD(
        values['@peer'] as FlaxProxyPeer,
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
        values["direction"] as api.TextDirection,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextDecoration(Object value) => value is api.TextDecoration;
Object? _TextDecoration_maskValue(Object value) =>
    (value as api.TextDecoration).maskValue;
Object? _TextDecoration_contains(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextDecoration).contains(
    values["other"] as api.TextDecoration,
  );
}

Object? _TextDecoration_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextDecoration).toString();
}

Object _createTextDecoration(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "combine":
      return api.TextDecoration.combine(
        values["decorations"] as List<api.TextDecoration>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextHeightBehavior(Object value) => value is api.TextHeightBehavior;
Object? _TextHeightBehavior_applyHeightToFirstAscent(Object value) =>
    (value as api.TextHeightBehavior).applyHeightToFirstAscent;
Object? _TextHeightBehavior_applyHeightToLastDescent(Object value) =>
    (value as api.TextHeightBehavior).applyHeightToLastDescent;
Object? _TextHeightBehavior_leadingDistribution(Object value) =>
    (value as api.TextHeightBehavior).leadingDistribution;
Object? _TextHeightBehavior_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.TextHeightBehavior).toString();
}

Object? _TextHeightBehavior_super_get_applyHeightToFirstAscent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TextHeightBehaviorProxy)
    ._flaxSuperGet_applyHeightToFirstAscent;
Object? _TextHeightBehavior_super_get_applyHeightToLastDescent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TextHeightBehaviorProxy)
    ._flaxSuperGet_applyHeightToLastDescent;
Object? _TextHeightBehavior_super_get_leadingDistribution(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TextHeightBehaviorProxy)._flaxSuperGet_leadingDistribution;
Object _createTextHeightBehavior(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextHeightBehavior(
        applyHeightToFirstAscent: values["applyHeightToFirstAscent"] as bool,
        applyHeightToLastDescent: values["applyHeightToLastDescent"] as bool,
        leadingDistribution:
            values["leadingDistribution"] as api.TextLeadingDistribution,
      );
    case '@implementation':
      return _TextHeightBehaviorProxy(
        values['@peer'] as FlaxProxyPeer,
        applyHeightToFirstAscent: values["applyHeightToFirstAscent"] as bool,
        applyHeightToLastDescent: values["applyHeightToLastDescent"] as bool,
        leadingDistribution:
            values["leadingDistribution"] as api.TextLeadingDistribution,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextPosition(Object value) => value is api.TextPosition;
Object? _TextPosition_offset(Object value) =>
    (value as api.TextPosition).offset;
Object? _TextPosition_affinity(Object value) =>
    (value as api.TextPosition).affinity;
Object? _TextPosition_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextPosition).toString();
}

Object? _TextPosition_super_get_offset(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TextPositionProxy)._flaxSuperGet_offset;
Object? _TextPosition_super_get_affinity(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TextPositionProxy)._flaxSuperGet_affinity;
Object _createTextPosition(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextPosition(
        offset: values["offset"] as int,
        affinity: values["affinity"] as api.TextAffinity,
      );
    case '@implementation':
      return _TextPositionProxy(
        values['@peer'] as FlaxProxyPeer,
        offset: values["offset"] as int,
        affinity: values["affinity"] as api.TextAffinity,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextStyle(Object value) => value is api.TextStyle;
Object? _TextStyle_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextStyle).toString();
}

Object _createTextStyle(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextStyle(
        color: values["color"] as api.Color?,
        decoration: values["decoration"] as api.TextDecoration?,
        decorationColor: values["decorationColor"] as api.Color?,
        decorationStyle: values["decorationStyle"] as api.TextDecorationStyle?,
        decorationThickness: values["decorationThickness"] as double?,
        fontWeight: values["fontWeight"] as api.FontWeight?,
        fontStyle: values["fontStyle"] as api.FontStyle?,
        textBaseline: values["textBaseline"] as api.TextBaseline?,
        fontFamily: values["fontFamily"] as String?,
        fontFamilyFallback: values["fontFamilyFallback"] as List<String>?,
        fontSize: values["fontSize"] as double?,
        letterSpacing: values["letterSpacing"] as double?,
        wordSpacing: values["wordSpacing"] as double?,
        height: values["height"] as double?,
        leadingDistribution:
            values["leadingDistribution"] as api.TextLeadingDistribution?,
        locale: values["locale"] as api.Locale?,
        background: values["background"] as api.Paint?,
        foreground: values["foreground"] as api.Paint?,
        shadows: values["shadows"] as List<api.Shadow>?,
        fontFeatures: values["fontFeatures"] as List<api.FontFeature>?,
        fontVariations: values["fontVariations"] as List<api.FontVariation>?,
      );
    case '@implementation':
      return _TextStyleProxy(
        values['@peer'] as FlaxProxyPeer,
        color: values["color"] as api.Color?,
        decoration: values["decoration"] as api.TextDecoration?,
        decorationColor: values["decorationColor"] as api.Color?,
        decorationStyle: values["decorationStyle"] as api.TextDecorationStyle?,
        decorationThickness: values["decorationThickness"] as double?,
        fontWeight: values["fontWeight"] as api.FontWeight?,
        fontStyle: values["fontStyle"] as api.FontStyle?,
        textBaseline: values["textBaseline"] as api.TextBaseline?,
        fontFamily: values["fontFamily"] as String?,
        fontFamilyFallback: values["fontFamilyFallback"] as List<String>?,
        fontSize: values["fontSize"] as double?,
        letterSpacing: values["letterSpacing"] as double?,
        wordSpacing: values["wordSpacing"] as double?,
        height: values["height"] as double?,
        leadingDistribution:
            values["leadingDistribution"] as api.TextLeadingDistribution?,
        locale: values["locale"] as api.Locale?,
        background: values["background"] as api.Paint?,
        foreground: values["foreground"] as api.Paint?,
        shadows: values["shadows"] as List<api.Shadow>?,
        fontFeatures: values["fontFeatures"] as List<api.FontFeature>?,
        fontVariations: values["fontVariations"] as List<api.FontVariation>?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTransformEngineLayer(Object value) => value is api.TransformEngineLayer;
Object _createTransformEngineLayer(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
Object? _enum_Tristate_get_value(Map<String, Object?> values) =>
    (values["receiver"] as api.Tristate).value;
Object? _enum_Tristate_call_hasConflict(Map<String, Object?> values) {
  return (values["receiver"] as api.Tristate).hasConflict(
    values["other"] as api.Tristate,
  );
}

Object? _enum_Tristate_call_merge(Map<String, Object?> values) {
  return (values["receiver"] as api.Tristate).merge(
    values["other"] as api.Tristate,
  );
}

Object? _enum_Tristate_call_toBoolOrNull(Map<String, Object?> values) {
  return (values["receiver"] as api.Tristate).toBoolOrNull();
}

bool _isUniformArray(Object value) =>
    value is api.UniformArray<api.UniformType>;
Object? _UniformArray_length(Object value) =>
    (value as api.UniformArray<api.UniformType>).length;
Object? _UniformArray_operatorGetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.UniformArray<api.UniformType>)[values["index"]
      as int];
}

Object _createUniformArray(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isUniformFloatSlot(Object value) => value is api.UniformFloatSlot;
Object? _UniformFloatSlot_shaderIndex(Object value) =>
    (value as api.UniformFloatSlot).shaderIndex;
Object? _UniformFloatSlot_name(Object value) =>
    (value as api.UniformFloatSlot).name;
Object? _UniformFloatSlot_index(Object value) =>
    (value as api.UniformFloatSlot).index;
Object? _UniformFloatSlot_set(Object receiver, Map<String, Object?> values) {
  (receiver as api.UniformFloatSlot).set(values["val"] as double);
  return null;
}

Object _createUniformFloatSlot(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isUniformMat2Slot(Object value) => value is api.UniformMat2Slot;
Object? _UniformMat2Slot_set(Object receiver, Map<String, Object?> values) {
  (receiver as api.UniformMat2Slot).set(
    values["m00"] as double,
    values["m01"] as double,
    values["m10"] as double,
    values["m11"] as double,
  );
  return null;
}

Object _createUniformMat2Slot(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isUniformMat3Slot(Object value) => value is api.UniformMat3Slot;
Object? _UniformMat3Slot_set(Object receiver, Map<String, Object?> values) {
  (receiver as api.UniformMat3Slot).set(
    values["m00"] as double,
    values["m01"] as double,
    values["m02"] as double,
    values["m10"] as double,
    values["m11"] as double,
    values["m12"] as double,
    values["m20"] as double,
    values["m21"] as double,
    values["m22"] as double,
  );
  return null;
}

Object _createUniformMat3Slot(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isUniformMat4Slot(Object value) => value is api.UniformMat4Slot;
Object? _UniformMat4Slot_set(Object receiver, Map<String, Object?> values) {
  (receiver as api.UniformMat4Slot).set(
    values["m00"] as double,
    values["m01"] as double,
    values["m02"] as double,
    values["m03"] as double,
    values["m10"] as double,
    values["m11"] as double,
    values["m12"] as double,
    values["m13"] as double,
    values["m20"] as double,
    values["m21"] as double,
    values["m22"] as double,
    values["m23"] as double,
    values["m30"] as double,
    values["m31"] as double,
    values["m32"] as double,
    values["m33"] as double,
  );
  return null;
}

Object _createUniformMat4Slot(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isUniformType(Object value) => value is api.UniformType;
Object _createUniformType(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isUniformVec2Slot(Object value) => value is api.UniformVec2Slot;
Object? _UniformVec2Slot_set(Object receiver, Map<String, Object?> values) {
  (receiver as api.UniformVec2Slot).set(
    values["x"] as double,
    values["y"] as double,
  );
  return null;
}

Object _createUniformVec2Slot(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isUniformVec3Slot(Object value) => value is api.UniformVec3Slot;
Object? _UniformVec3Slot_set(Object receiver, Map<String, Object?> values) {
  (receiver as api.UniformVec3Slot).set(
    values["x"] as double,
    values["y"] as double,
    values["z"] as double,
  );
  return null;
}

Object _createUniformVec3Slot(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isUniformVec4Slot(Object value) => value is api.UniformVec4Slot;
Object? _UniformVec4Slot_set(Object receiver, Map<String, Object?> values) {
  (receiver as api.UniformVec4Slot).set(
    values["x"] as double,
    values["y"] as double,
    values["z"] as double,
    values["w"] as double,
  );
  return null;
}

Object _createUniformVec4Slot(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isVertices(Object value) => value is api.Vertices;
Object? _Vertices_debugDisposed(Object value) =>
    (value as api.Vertices).debugDisposed;
Object? _Vertices_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vertices).dispose();
  return null;
}

Object _createVertices(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Vertices(
        values["mode"] as api.VertexMode,
        values["positions"] as List<api.Offset>,
        colors: values["colors"] as List<api.Color>?,
        textureCoordinates: values["textureCoordinates"] as List<api.Offset>?,
        indices: values["indices"] as List<int>?,
      );
    case "raw":
      return api.Vertices.raw(
        values["mode"] as api.VertexMode,
        values["positions"] as api1.Float32List,
        colors: values["colors"] as api1.Int32List?,
        textureCoordinates: values["textureCoordinates"] as api1.Float32List?,
        indices: values["indices"] as api1.Uint16List?,
      );
    case '@implementation':
      return _VerticesProxy(
        values['@peer'] as FlaxProxyPeer,
        values["mode"] as api.VertexMode,
        values["positions"] as List<api.Offset>,
        colors: values["colors"] as List<api.Color>?,
        textureCoordinates: values["textureCoordinates"] as List<api.Offset>?,
        indices: values["indices"] as List<int>?,
      );
    case "@implementation:raw":
      return _VerticesProxy.raw(
        values['@peer'] as FlaxProxyPeer,
        values["mode"] as api.VertexMode,
        values["positions"] as api1.Float32List,
        colors: values["colors"] as api1.Int32List?,
        textureCoordinates: values["textureCoordinates"] as api1.Float32List?,
        indices: values["indices"] as api1.Uint16List?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isViewConstraints(Object value) => value is api.ViewConstraints;
Object? _ViewConstraints_minWidth(Object value) =>
    (value as api.ViewConstraints).minWidth;
Object? _ViewConstraints_maxWidth(Object value) =>
    (value as api.ViewConstraints).maxWidth;
Object? _ViewConstraints_minHeight(Object value) =>
    (value as api.ViewConstraints).minHeight;
Object? _ViewConstraints_maxHeight(Object value) =>
    (value as api.ViewConstraints).maxHeight;
Object? _ViewConstraints_isTight(Object value) =>
    (value as api.ViewConstraints).isTight;
Object? _ViewConstraints_isSatisfiedBy(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ViewConstraints).isSatisfiedBy(
    values["size"] as api.Size,
  );
}

Object? _ViewConstraints_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ViewConstraints).toString();
}

Object? _ViewConstraints_operatorDivide(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ViewConstraints) / (values["factor"] as double);
}

Object? _ViewConstraints_super_isSatisfiedBy(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ViewConstraintsProxy)._flaxSuper_isSatisfiedBy(
    values["size"] as api.Size,
  );
}

Object? _ViewConstraints_super_operatorDivide(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ViewConstraintsProxy)._flaxSuper_operatorDivide(
    values["factor"] as double,
  );
}

Object? _ViewConstraints_super_get_minWidth(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ViewConstraintsProxy)._flaxSuperGet_minWidth;
Object? _ViewConstraints_super_get_maxWidth(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ViewConstraintsProxy)._flaxSuperGet_maxWidth;
Object? _ViewConstraints_super_get_minHeight(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ViewConstraintsProxy)._flaxSuperGet_minHeight;
Object? _ViewConstraints_super_get_maxHeight(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ViewConstraintsProxy)._flaxSuperGet_maxHeight;
Object? _ViewConstraints_super_get_isTight(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ViewConstraintsProxy)._flaxSuperGet_isTight;
Object _createViewConstraints(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ViewConstraints(
        minWidth: values["minWidth"] as double,
        maxWidth: values["maxWidth"] as double,
        minHeight: values["minHeight"] as double,
        maxHeight: values["maxHeight"] as double,
      );
    case "tight":
      return api.ViewConstraints.tight(values["size"] as api.Size);
    case '@implementation':
      return _ViewConstraintsProxy(
        values['@peer'] as FlaxProxyPeer,
        minWidth: values["minWidth"] as double,
        maxWidth: values["maxWidth"] as double,
        minHeight: values["minHeight"] as double,
        maxHeight: values["maxHeight"] as double,
      );
    case "@implementation:tight":
      return _ViewConstraintsProxy.tight(
        values['@peer'] as FlaxProxyPeer,
        values["size"] as api.Size,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isViewFocusEvent(Object value) => value is api.ViewFocusEvent;
Object? _ViewFocusEvent_viewId(Object value) =>
    (value as api.ViewFocusEvent).viewId;
Object? _ViewFocusEvent_state(Object value) =>
    (value as api.ViewFocusEvent).state;
Object? _ViewFocusEvent_direction(Object value) =>
    (value as api.ViewFocusEvent).direction;
Object? _ViewFocusEvent_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ViewFocusEvent).toString();
}

Object _createViewFocusEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ViewFocusEvent(
        viewId: values["viewId"] as int,
        state: values["state"] as api.ViewFocusState,
        direction: values["direction"] as api.ViewFocusDirection,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isViewPadding(Object value) => value is api.ViewPadding;
Object? _ViewPadding_left(Object value) => (value as api.ViewPadding).left;
Object? _ViewPadding_top(Object value) => (value as api.ViewPadding).top;
Object? _ViewPadding_right(Object value) => (value as api.ViewPadding).right;
Object? _ViewPadding_bottom(Object value) => (value as api.ViewPadding).bottom;
Object? _ViewPadding_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ViewPadding).toString();
}

Object _createViewPadding(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _ViewPaddingProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

abstract interface class _FlaxProxyDispatch0 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toString();
}

String _FlaxProxyDispatch0_call_toString(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toString();
  }
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch3 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toStringFull();
  api2.Duration get _flaxSuperGet_timeStamp;
  bool get _flaxSuperGet_synthesized;
}

String _FlaxProxyDispatch3_call_toStringFull(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toStringFull();
  }
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

api2.Duration _FlaxProxyDispatch3_get_timeStamp(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_timeStamp;
  final _flaxConvertedResult = _flaxResult.$2 as api2.Duration;
  return _flaxConvertedResult;
}

bool _FlaxProxyDispatch3_get_synthesized(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_synthesized;
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch2 {
  FlaxProxyPeer get _flaxPeer;
  void _flaxSuper_dispose();
  bool get _flaxSuperGet_debugDisposed;
}

void _FlaxProxyDispatch2_call_dispose(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    _flaxReceiver._flaxSuper_dispose();
    return;
  }
  return;
}

bool _FlaxProxyDispatch2_get_debugDisposed(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_debugDisposed;
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch6 {
  FlaxProxyPeer get _flaxPeer;
  api.StringAttribute _flaxSuper_copy({required api.TextRange range});
  api.TextRange get _flaxSuperGet_range;
}

api.StringAttribute _FlaxProxyDispatch6_call_copy(
  _FlaxProxyDispatch6 _flaxReceiver,
  int _flaxMember, {
  required api.TextRange range,
}) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{"range": range},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_copy(range: range);
  }
  final _flaxConvertedResult = _flaxResult.$2 as api.StringAttribute;
  return _flaxConvertedResult;
}

api.TextRange _FlaxProxyDispatch6_get_range(
  _FlaxProxyDispatch6 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_range;
  final _flaxConvertedResult = _flaxResult.$2 as api.TextRange;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch1 {
  FlaxProxyPeer get _flaxPeer;
  api.Offset get _flaxSuperGet_offset;
}

api.Offset _FlaxProxyDispatch1_get_offset(
  _FlaxProxyDispatch1 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_offset;
  final _flaxConvertedResult = _flaxResult.$2 as api.Offset;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch4 {
  FlaxProxyPeer get _flaxPeer;
  double get _flaxSuperGet_width;
}

double _FlaxProxyDispatch4_get_width(
  _FlaxProxyDispatch4 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_width;
  final _flaxConvertedResult = _flaxResult.$2 as double;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch5 {
  FlaxProxyPeer get _flaxPeer;
  double get _flaxSuperGet_left;
}

double _FlaxProxyDispatch5_get_left(
  _FlaxProxyDispatch5 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_left;
  final _flaxConvertedResult = _flaxResult.$2 as double;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch7 {
  FlaxProxyPeer get _flaxPeer;
  int get _flaxSuperGet_viewId;
}

int _FlaxProxyDispatch7_get_viewId(
  _FlaxProxyDispatch7 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_viewId;
  final _flaxConvertedResult = _flaxResult.$2 as int;
  return _flaxConvertedResult;
}

final class _CallbackHandleProxy extends api.CallbackHandle {
  final FlaxProxyPeer _flaxPeer;
  _CallbackHandleProxy.fromRawHandle(this._flaxPeer, int super._handle)
    : super.fromRawHandle();
  @override
  int toRawHandle() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toRawHandle();
    }
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int _flaxSuper_toRawHandle() {
    return super.toRawHandle();
  }
}

final class _CanvasProxy implements api.Canvas {
  final FlaxProxyPeer _flaxPeer;
  _CanvasProxy(this._flaxPeer);
  @override
  void save() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: save');
    }
    return;
  }

  @override
  void saveLayer(api.Rect? bounds, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      bounds,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: saveLayer');
    }
    return;
  }

  @override
  void restore() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: restore');
    }
    return;
  }

  @override
  void restoreToCount(int count) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      count,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: restoreToCount');
    }
    return;
  }

  @override
  int getSaveCount() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getSaveCount');
    }
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  void translate(double dx, double dy) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      dx,
      dy,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: translate');
    }
    return;
  }

  @override
  void scale(double sx, [Object? sy = _flaxOmitted]) {
    final _flaxResult = _flaxPeer.call(6, <Object?>[
      sx,
      if (!identical(sy, _flaxOmitted)) sy,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: scale');
    }
    return;
  }

  @override
  void rotate(double radians) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[
      radians,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: rotate');
    }
    return;
  }

  @override
  void skew(double sx, double sy) {
    final _flaxResult = _flaxPeer.call(8, <Object?>[
      sx,
      sy,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: skew');
    }
    return;
  }

  @override
  void transform(api1.Float64List matrix4) {
    final _flaxResult = _flaxPeer.call(9, <Object?>[
      matrix4,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: transform');
    }
    return;
  }

  @override
  api1.Float64List getTransform() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getTransform');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Float64List;
    return _flaxConvertedResult;
  }

  @override
  void clipRect(
    api.Rect rect, {
    Object? clipOp = _flaxOmitted,
    Object? doAntiAlias = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      11,
      <Object?>[rect],
      <String, Object?>{
        if (!identical(clipOp, _flaxOmitted)) "clipOp": clipOp,
        if (!identical(doAntiAlias, _flaxOmitted)) "doAntiAlias": doAntiAlias,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: clipRect');
    }
    return;
  }

  @override
  void clipRRect(api.RRect rrect, {Object? doAntiAlias = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(
      12,
      <Object?>[rrect],
      <String, Object?>{
        if (!identical(doAntiAlias, _flaxOmitted)) "doAntiAlias": doAntiAlias,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: clipRRect');
    }
    return;
  }

  @override
  void clipRSuperellipse(
    api.RSuperellipse rsuperellipse, {
    Object? doAntiAlias = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      13,
      <Object?>[rsuperellipse],
      <String, Object?>{
        if (!identical(doAntiAlias, _flaxOmitted)) "doAntiAlias": doAntiAlias,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: clipRSuperellipse');
    }
    return;
  }

  @override
  void clipPath(api.Path path, {Object? doAntiAlias = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(
      14,
      <Object?>[path],
      <String, Object?>{
        if (!identical(doAntiAlias, _flaxOmitted)) "doAntiAlias": doAntiAlias,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: clipPath');
    }
    return;
  }

  @override
  api.Rect getLocalClipBounds() {
    final _flaxResult = _flaxPeer.call(15, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getLocalClipBounds');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Rect;
    return _flaxConvertedResult;
  }

  @override
  api.Rect getDestinationClipBounds() {
    final _flaxResult = _flaxPeer.call(16, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getDestinationClipBounds');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Rect;
    return _flaxConvertedResult;
  }

  @override
  void drawColor(api.Color color, api.BlendMode blendMode) {
    final _flaxResult = _flaxPeer.call(17, <Object?>[
      color,
      blendMode,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawColor');
    }
    return;
  }

  @override
  void drawLine(api.Offset p1, api.Offset p2, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(18, <Object?>[
      p1,
      p2,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawLine');
    }
    return;
  }

  @override
  void drawPaint(api.Paint paint) {
    final _flaxResult = _flaxPeer.call(19, <Object?>[
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawPaint');
    }
    return;
  }

  @override
  void drawRect(api.Rect rect, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(20, <Object?>[
      rect,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawRect');
    }
    return;
  }

  @override
  void drawRRect(api.RRect rrect, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(21, <Object?>[
      rrect,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawRRect');
    }
    return;
  }

  @override
  void drawDRRect(api.RRect outer, api.RRect inner, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(22, <Object?>[
      outer,
      inner,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawDRRect');
    }
    return;
  }

  @override
  void drawRSuperellipse(api.RSuperellipse rsuperellipse, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(23, <Object?>[
      rsuperellipse,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawRSuperellipse');
    }
    return;
  }

  @override
  void drawOval(api.Rect rect, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(24, <Object?>[
      rect,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawOval');
    }
    return;
  }

  @override
  void drawCircle(api.Offset c, double radius, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(25, <Object?>[
      c,
      radius,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawCircle');
    }
    return;
  }

  @override
  void drawArc(
    api.Rect rect,
    double startAngle,
    double sweepAngle,
    bool useCenter,
    api.Paint paint,
  ) {
    final _flaxResult = _flaxPeer.call(26, <Object?>[
      rect,
      startAngle,
      sweepAngle,
      useCenter,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawArc');
    }
    return;
  }

  @override
  void drawPath(api.Path path, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(27, <Object?>[
      path,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawPath');
    }
    return;
  }

  @override
  void drawImage(api.Image image, api.Offset offset, api.Paint paint) {
    final _flaxResult = _flaxPeer.call(28, <Object?>[
      image,
      offset,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawImage');
    }
    return;
  }

  @override
  void drawImageRect(
    api.Image image,
    api.Rect src,
    api.Rect dst,
    api.Paint paint,
  ) {
    final _flaxResult = _flaxPeer.call(29, <Object?>[
      image,
      src,
      dst,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawImageRect');
    }
    return;
  }

  @override
  void drawImageNine(
    api.Image image,
    api.Rect center,
    api.Rect dst,
    api.Paint paint,
  ) {
    final _flaxResult = _flaxPeer.call(30, <Object?>[
      image,
      center,
      dst,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawImageNine');
    }
    return;
  }

  @override
  void drawPicture(api.Picture picture) {
    final _flaxResult = _flaxPeer.call(31, <Object?>[
      picture,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawPicture');
    }
    return;
  }

  @override
  void drawParagraph(api.Paragraph paragraph, api.Offset offset) {
    final _flaxResult = _flaxPeer.call(32, <Object?>[
      paragraph,
      offset,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawParagraph');
    }
    return;
  }

  @override
  void drawPoints(
    api.PointMode pointMode,
    List<api.Offset> points,
    api.Paint paint,
  ) {
    final _flaxResult = _flaxPeer.call(33, <Object?>[
      pointMode,
      points,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawPoints');
    }
    return;
  }

  @override
  void drawRawPoints(
    api.PointMode pointMode,
    api1.Float32List points,
    api.Paint paint,
  ) {
    final _flaxResult = _flaxPeer.call(34, <Object?>[
      pointMode,
      points,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawRawPoints');
    }
    return;
  }

  @override
  void drawVertices(
    api.Vertices vertices,
    api.BlendMode blendMode,
    api.Paint paint,
  ) {
    final _flaxResult = _flaxPeer.call(35, <Object?>[
      vertices,
      blendMode,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawVertices');
    }
    return;
  }

  @override
  void drawAtlas(
    api.Image atlas,
    List<api.RSTransform> transforms,
    List<api.Rect> rects,
    List<api.Color>? colors,
    api.BlendMode? blendMode,
    api.Rect? cullRect,
    api.Paint paint,
  ) {
    final _flaxResult = _flaxPeer.call(36, <Object?>[
      atlas,
      transforms,
      rects,
      colors,
      blendMode,
      cullRect,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawAtlas');
    }
    return;
  }

  @override
  void drawRawAtlas(
    api.Image atlas,
    api1.Float32List rstTransforms,
    api1.Float32List rects,
    api1.Int32List? colors,
    api.BlendMode? blendMode,
    api.Rect? cullRect,
    api.Paint paint,
  ) {
    final _flaxResult = _flaxPeer.call(37, <Object?>[
      atlas,
      rstTransforms,
      rects,
      colors,
      blendMode,
      cullRect,
      paint,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawRawAtlas');
    }
    return;
  }

  @override
  void drawShadow(
    api.Path path,
    api.Color color,
    double elevation,
    bool transparentOccluder,
  ) {
    final _flaxResult = _flaxPeer.call(38, <Object?>[
      path,
      color,
      elevation,
      transparentOccluder,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: drawShadow');
    }
    return;
  }
}

final class _ChannelBuffersProxy extends api.ChannelBuffers {
  final FlaxProxyPeer _flaxPeer;
  _ChannelBuffersProxy(this._flaxPeer);
  @override
  void push(
    String name,
    api1.ByteData? data,
    void Function(api1.ByteData? data) callback,
  ) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      name,
      data,
      callback,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_push(name, data, callback);
      return;
    }
    return;
  }

  void _flaxSuper_push(
    String name,
    api1.ByteData? data,
    void Function(api1.ByteData? data) callback,
  ) {
    super.push(name, data, callback);
    return;
  }

  @override
  void setListener(
    String name,
    void Function(
      api1.ByteData? data,
      void Function(api1.ByteData? data) callback,
    )
    callback,
  ) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      name,
      callback,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_setListener(name, callback);
      return;
    }
    return;
  }

  void _flaxSuper_setListener(
    String name,
    void Function(
      api1.ByteData? data,
      void Function(api1.ByteData? data) callback,
    )
    callback,
  ) {
    super.setListener(name, callback);
    return;
  }

  @override
  void clearListener(String name) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[name], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearListener(name);
      return;
    }
    return;
  }

  void _flaxSuper_clearListener(String name) {
    super.clearListener(name);
    return;
  }

  @override
  void sendChannelUpdate(String name, {required bool listening}) {
    final _flaxResult = _flaxPeer.call(
      3,
      <Object?>[name],
      <String, Object?>{"listening": listening},
    );
    if (!_flaxResult.$1) {
      _flaxSuper_sendChannelUpdate(name, listening: listening);
      return;
    }
    return;
  }

  void _flaxSuper_sendChannelUpdate(String name, {required bool listening}) {
    super.sendChannelUpdate(name, listening: listening);
    return;
  }

  @override
  Future<void> drain(
    String name,
    Future<void> Function(
      api1.ByteData? data,
      void Function(api1.ByteData? data) callback,
    )
    callback,
  ) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      name,
      callback,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_drain(name, callback);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_drain(
    String name,
    Future<void> Function(
      api1.ByteData? data,
      void Function(api1.ByteData? data) callback,
    )
    callback,
  ) {
    return super.drain(name, callback);
  }

  @override
  void handleMessage(api1.ByteData data) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[data], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_handleMessage(data);
      return;
    }
    return;
  }

  void _flaxSuper_handleMessage(api1.ByteData data) {
    super.handleMessage(data);
    return;
  }

  @override
  void resize(String name, int newSize) {
    final _flaxResult = _flaxPeer.call(6, <Object?>[
      name,
      newSize,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_resize(name, newSize);
      return;
    }
    return;
  }

  void _flaxSuper_resize(String name, int newSize) {
    super.resize(name, newSize);
    return;
  }

  @override
  void allowOverflow(String name, bool allowed) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[
      name,
      allowed,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_allowOverflow(name, allowed);
      return;
    }
    return;
  }

  void _flaxSuper_allowOverflow(String name, bool allowed) {
    super.allowOverflow(name, allowed);
    return;
  }
}

final class _CodecProxy implements api.Codec {
  final FlaxProxyPeer _flaxPeer;
  _CodecProxy(this._flaxPeer);
  @override
  Future<api.FrameInfo> getNextFrame() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getNextFrame');
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<api.FrameInfo>((value) => value as api.FrameInfo);
    return _flaxConvertedResult;
  }

  @override
  void dispose() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: dispose');
    }
    return;
  }

  @override
  int get frameCount {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  int get repetitionCount {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }
}

final class _DisplayProxy implements api.Display {
  final FlaxProxyPeer _flaxPeer;
  _DisplayProxy(this._flaxPeer);
  @override
  String toString() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: toString');
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  @override
  int get id {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  double get devicePixelRatio {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  api.Size get size {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as api.Size;
    return _flaxConvertedResult;
  }

  @override
  double get refreshRate {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }
}

final class _DisplayCornerRadiiProxy extends api.DisplayCornerRadii
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _DisplayCornerRadiiProxy(
    this._flaxPeer, {
    required double super.topLeft,
    required double super.topRight,
    required double super.bottomRight,
    required double super.bottomLeft,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get topLeft {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.topLeft;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_topLeft {
    return super.topLeft;
  }

  @override
  double get topRight {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.topRight;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_topRight {
    return super.topRight;
  }

  @override
  double get bottomRight {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.bottomRight;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_bottomRight {
    return super.bottomRight;
  }

  @override
  double get bottomLeft {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.bottomLeft;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_bottomLeft {
    return super.bottomLeft;
  }
}

final class _DisplayFeatureProxy extends api.DisplayFeature
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _DisplayFeatureProxy(
    this._flaxPeer, {
    required api.Rect super.bounds,
    required api.DisplayFeatureType super.type,
    required api.DisplayFeatureState super.state,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.Rect get bounds {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.bounds;
    final _flaxConvertedResult = _flaxResult.$2 as api.Rect;
    return _flaxConvertedResult;
  }

  api.Rect get _flaxSuperGet_bounds {
    return super.bounds;
  }

  @override
  api.DisplayFeatureType get type {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.type;
    final _flaxConvertedResult = _flaxResult.$2 as api.DisplayFeatureType;
    return _flaxConvertedResult;
  }

  api.DisplayFeatureType get _flaxSuperGet_type {
    return super.type;
  }

  @override
  api.DisplayFeatureState get state {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.state;
    final _flaxConvertedResult = _flaxResult.$2 as api.DisplayFeatureState;
    return _flaxConvertedResult;
  }

  api.DisplayFeatureState get _flaxSuperGet_state {
    return super.state;
  }
}

final class _EngineLayerProxy implements api.EngineLayer {
  final FlaxProxyPeer _flaxPeer;
  _EngineLayerProxy(this._flaxPeer);
  @override
  void dispose() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: dispose');
    }
    return;
  }
}

final class _FontFeatureProxy extends api.FontFeature
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _FontFeatureProxy(this._flaxPeer, String super.feature, [int super.value]);
  _FontFeatureProxy.enable(this._flaxPeer, String super.feature)
    : super.enable();
  _FontFeatureProxy.disable(this._flaxPeer, String super.feature)
    : super.disable();
  _FontFeatureProxy.alternative(this._flaxPeer, int super.value)
    : super.alternative();
  _FontFeatureProxy.alternativeFractions(this._flaxPeer)
    : super.alternativeFractions();
  _FontFeatureProxy.contextualAlternates(this._flaxPeer)
    : super.contextualAlternates();
  _FontFeatureProxy.caseSensitiveForms(this._flaxPeer)
    : super.caseSensitiveForms();
  _FontFeatureProxy.denominator(this._flaxPeer) : super.denominator();
  _FontFeatureProxy.fractions(this._flaxPeer) : super.fractions();
  _FontFeatureProxy.historicalForms(this._flaxPeer) : super.historicalForms();
  _FontFeatureProxy.historicalLigatures(this._flaxPeer)
    : super.historicalLigatures();
  _FontFeatureProxy.liningFigures(this._flaxPeer) : super.liningFigures();
  _FontFeatureProxy.localeAware(this._flaxPeer, {bool super.enable})
    : super.localeAware();
  _FontFeatureProxy.notationalForms(this._flaxPeer, [int super.value])
    : super.notationalForms();
  _FontFeatureProxy.numerators(this._flaxPeer) : super.numerators();
  _FontFeatureProxy.oldstyleFigures(this._flaxPeer) : super.oldstyleFigures();
  _FontFeatureProxy.ordinalForms(this._flaxPeer) : super.ordinalForms();
  _FontFeatureProxy.proportionalFigures(this._flaxPeer)
    : super.proportionalFigures();
  _FontFeatureProxy.randomize(this._flaxPeer) : super.randomize();
  _FontFeatureProxy.stylisticAlternates(this._flaxPeer)
    : super.stylisticAlternates();
  _FontFeatureProxy.scientificInferiors(this._flaxPeer)
    : super.scientificInferiors();
  _FontFeatureProxy.subscripts(this._flaxPeer) : super.subscripts();
  _FontFeatureProxy.superscripts(this._flaxPeer) : super.superscripts();
  _FontFeatureProxy.swash(this._flaxPeer, [int super.value]) : super.swash();
  _FontFeatureProxy.tabularFigures(this._flaxPeer) : super.tabularFigures();
  _FontFeatureProxy.slashedZero(this._flaxPeer) : super.slashedZero();
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get feature {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.feature;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_feature {
    return super.feature;
  }

  @override
  int get value {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_value {
    return super.value;
  }
}

final class _FontVariationProxy extends api.FontVariation
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _FontVariationProxy(this._flaxPeer, String super.axis, double super.value);
  _FontVariationProxy.italic(this._flaxPeer, double super.value)
    : super.italic();
  _FontVariationProxy.opticalSize(this._flaxPeer, double super.value)
    : super.opticalSize();
  _FontVariationProxy.slant(this._flaxPeer, double super.value) : super.slant();
  _FontVariationProxy.width(this._flaxPeer, double super.value) : super.width();
  _FontVariationProxy.weight(this._flaxPeer, double super.value)
    : super.weight();
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get axis {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.axis;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_axis {
    return super.axis;
  }

  @override
  double get value {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_value {
    return super.value;
  }
}

final class _FrameDataProxy implements api.FrameData {
  final FlaxProxyPeer _flaxPeer;
  _FrameDataProxy(this._flaxPeer);
  @override
  int get frameNumber {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }
}

final class _FrameInfoProxy implements api.FrameInfo {
  final FlaxProxyPeer _flaxPeer;
  _FrameInfoProxy(this._flaxPeer);
  @override
  api2.Duration get duration {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as api2.Duration;
    return _flaxConvertedResult;
  }

  @override
  api.Image get image {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as api.Image;
    return _flaxConvertedResult;
  }
}

final class _GestureSettingsProxy extends api.GestureSettings
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _GestureSettingsProxy(
    this._flaxPeer, {
    double? super.physicalTouchSlop,
    double? super.physicalDoubleTapSlop,
  });
  @override
  api.GestureSettings copyWith({
    Object? physicalTouchSlop = _flaxOmitted,
    Object? physicalDoubleTapSlop = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      if (!identical(physicalTouchSlop, _flaxOmitted))
        "physicalTouchSlop": physicalTouchSlop,
      if (!identical(physicalDoubleTapSlop, _flaxOmitted))
        "physicalDoubleTapSlop": physicalDoubleTapSlop,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_copyWith(
        physicalTouchSlop: physicalTouchSlop,
        physicalDoubleTapSlop: physicalDoubleTapSlop,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.GestureSettings;
    return _flaxConvertedResult;
  }

  api.GestureSettings _flaxSuper_copyWith({
    Object? physicalTouchSlop = _flaxOmitted,
    Object? physicalDoubleTapSlop = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(physicalTouchSlop, _flaxOmitted);
    final _flaxHas1 = !identical(physicalDoubleTapSlop, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.copyWith,
      <Object?>[
        (_flaxHas0 ? physicalTouchSlop as double? : null),
        (_flaxHas1 ? physicalDoubleTapSlop as double? : null),
      ],
      <int>[(_flaxHas0 ? 1 : 0) | (_flaxHas1 ? 2 : 0)],
      const <String>["physicalTouchSlop", "physicalDoubleTapSlop"],
    ) as api.GestureSettings);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double? get physicalTouchSlop {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.physicalTouchSlop;
    final _flaxConvertedResult = _flaxResult.$2 as double?;
    return _flaxConvertedResult;
  }

  double? get _flaxSuperGet_physicalTouchSlop {
    return super.physicalTouchSlop;
  }

  @override
  double? get physicalDoubleTapSlop {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.physicalDoubleTapSlop;
    final _flaxConvertedResult = _flaxResult.$2 as double?;
    return _flaxConvertedResult;
  }

  double? get _flaxSuperGet_physicalDoubleTapSlop {
    return super.physicalDoubleTapSlop;
  }
}

final class _HitTestRequestProxy extends api.HitTestRequest
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _HitTestRequestProxy(
    this._flaxPeer, {
    required api.FlutterView super.view,
    required api.Offset super.offset,
  });
  @override
  api.FlutterView get view {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.view;
    final _flaxConvertedResult = _flaxResult.$2 as api.FlutterView;
    return _flaxConvertedResult;
  }

  api.FlutterView get _flaxSuperGet_view {
    return super.view;
  }

  @override
  api.Offset get offset => _FlaxProxyDispatch1_get_offset(this, 1);
  api.Offset get _flaxSuperGet_offset {
    return super.offset;
  }
}

final class _HitTestResponseProxy extends api.HitTestResponse {
  final FlaxProxyPeer _flaxPeer;
  _HitTestResponseProxy(this._flaxPeer, {required bool super.hasPlatformView});
  @override
  bool get hasPlatformView {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.hasPlatformView;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_hasPlatformView {
    return super.hasPlatformView;
  }
}

final class _ImageDescriptorProxy implements api.ImageDescriptor {
  final FlaxProxyPeer _flaxPeer;
  _ImageDescriptorProxy(this._flaxPeer);
  @override
  void dispose() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: dispose');
    }
    return;
  }

  @override
  Future<api.Codec> instantiateCodec({
    Object? targetWidth = _flaxOmitted,
    Object? targetHeight = _flaxOmitted,
    Object? targetFormat = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{
      if (!identical(targetWidth, _flaxOmitted)) "targetWidth": targetWidth,
      if (!identical(targetHeight, _flaxOmitted)) "targetHeight": targetHeight,
      if (!identical(targetFormat, _flaxOmitted)) "targetFormat": targetFormat,
    });
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: instantiateCodec');
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<api.Codec>((value) => value as api.Codec);
    return _flaxConvertedResult;
  }

  @override
  int get width {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  int get height {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  int get bytesPerPixel {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }
}

final class _ImageShaderProxy extends api.ImageShader
    implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _ImageShaderProxy(
    this._flaxPeer,
    api.Image super.image,
    api.TileMode super.tmx,
    api.TileMode super.tmy,
    api1.Float64List super.matrix4, {
    api.FilterQuality? super.filterQuality,
  });
  @override
  void dispose() {
    return _FlaxProxyDispatch2_call_dispose(this, 0);
  }

  void _flaxSuper_dispose() {
    super.dispose();
    return;
  }

  @override
  bool get debugDisposed => _FlaxProxyDispatch2_get_debugDisposed(this, 1);
  bool get _flaxSuperGet_debugDisposed {
    return super.debugDisposed;
  }
}

final class _KeyDataProxy extends api.KeyData
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch3 {
  final FlaxProxyPeer _flaxPeer;
  _KeyDataProxy(
    this._flaxPeer, {
    required api2.Duration super.timeStamp,
    required api.KeyEventType super.type,
    required int super.physical,
    required int super.logical,
    required String? super.character,
    required bool super.synthesized,
    api.KeyEventDeviceType super.deviceType,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringFull() {
    return _FlaxProxyDispatch3_call_toStringFull(this, 1);
  }

  String _flaxSuper_toStringFull() {
    return super.toStringFull();
  }

  @override
  api2.Duration get timeStamp => _FlaxProxyDispatch3_get_timeStamp(this, 2);
  api2.Duration get _flaxSuperGet_timeStamp {
    return super.timeStamp;
  }

  @override
  api.KeyEventType get type {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.type;
    final _flaxConvertedResult = _flaxResult.$2 as api.KeyEventType;
    return _flaxConvertedResult;
  }

  api.KeyEventType get _flaxSuperGet_type {
    return super.type;
  }

  @override
  api.KeyEventDeviceType get deviceType {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.deviceType;
    final _flaxConvertedResult = _flaxResult.$2 as api.KeyEventDeviceType;
    return _flaxConvertedResult;
  }

  api.KeyEventDeviceType get _flaxSuperGet_deviceType {
    return super.deviceType;
  }

  @override
  int get physical {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.physical;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_physical {
    return super.physical;
  }

  @override
  int get logical {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.logical;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_logical {
    return super.logical;
  }

  @override
  String? get character {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.character;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_character {
    return super.character;
  }

  @override
  bool get synthesized => _FlaxProxyDispatch3_get_synthesized(this, 8);
  bool get _flaxSuperGet_synthesized {
    return super.synthesized;
  }
}

final class _LineMetricsProxy extends api.LineMetrics
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch4, _FlaxProxyDispatch5 {
  final FlaxProxyPeer _flaxPeer;
  _LineMetricsProxy(
    this._flaxPeer, {
    required bool super.hardBreak,
    required double super.ascent,
    required double super.descent,
    required double super.unscaledAscent,
    required double super.height,
    required double super.width,
    required double super.left,
    required double super.baseline,
    required int super.lineNumber,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  bool get hardBreak {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.hardBreak;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_hardBreak {
    return super.hardBreak;
  }

  @override
  double get ascent {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.ascent;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_ascent {
    return super.ascent;
  }

  @override
  double get descent {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.descent;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_descent {
    return super.descent;
  }

  @override
  double get unscaledAscent {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.unscaledAscent;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_unscaledAscent {
    return super.unscaledAscent;
  }

  @override
  double get height {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.height;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_height {
    return super.height;
  }

  @override
  double get width => _FlaxProxyDispatch4_get_width(this, 6);
  double get _flaxSuperGet_width {
    return super.width;
  }

  @override
  double get left => _FlaxProxyDispatch5_get_left(this, 7);
  double get _flaxSuperGet_left {
    return super.left;
  }

  @override
  double get baseline {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.baseline;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_baseline {
    return super.baseline;
  }

  @override
  int get lineNumber {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.lineNumber;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_lineNumber {
    return super.lineNumber;
  }
}

final class _LocaleProxy extends api.Locale implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _LocaleProxy(
    this._flaxPeer,
    String super._languageCode, [
    String? super._countryCode,
  ]);
  _LocaleProxy.fromSubtags(
    this._flaxPeer, {
    String super.languageCode,
    String? super.scriptCode,
    String? super.countryCode,
  }) : super.fromSubtags();
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toLanguageTag() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toLanguageTag();
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toLanguageTag() {
    return super.toLanguageTag();
  }

  @override
  String get languageCode {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.languageCode;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_languageCode {
    return super.languageCode;
  }

  @override
  String? get scriptCode {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.scriptCode;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_scriptCode {
    return super.scriptCode;
  }

  @override
  String? get countryCode {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.countryCode;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_countryCode {
    return super.countryCode;
  }
}

final class _LocaleStringAttributeProxy extends api.LocaleStringAttribute
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch6 {
  final FlaxProxyPeer _flaxPeer;
  _LocaleStringAttributeProxy(
    this._flaxPeer, {
    required api.TextRange super.range,
    required api.Locale super.locale,
  });
  @override
  api.StringAttribute copy({required api.TextRange range}) {
    return _FlaxProxyDispatch6_call_copy(this, 0, range: range);
  }

  api.StringAttribute _flaxSuper_copy({required api.TextRange range}) {
    return super.copy(range: range);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.Locale get locale {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.locale;
    final _flaxConvertedResult = _flaxResult.$2 as api.Locale;
    return _flaxConvertedResult;
  }

  api.Locale get _flaxSuperGet_locale {
    return super.locale;
  }

  @override
  api.TextRange get range => _FlaxProxyDispatch6_get_range(this, 3);
  api.TextRange get _flaxSuperGet_range {
    return super.range;
  }
}

final class _MaskFilterProxy extends api.MaskFilter
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _MaskFilterProxy.blur(
    this._flaxPeer,
    api.BlurStyle super._style,
    double super._sigma,
  ) : super.blur();
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }
}

final class _OffsetBaseProxy extends api.OffsetBase
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _OffsetBaseProxy(this._flaxPeer, double super._dx, double super._dy);
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  bool operator <(api.OffsetBase other) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_operatorLessThan(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_operatorLessThan(api.OffsetBase other) {
    return super < (other);
  }

  @override
  bool operator >(api.OffsetBase other) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_operatorGreaterThan(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_operatorGreaterThan(api.OffsetBase other) {
    return super > (other);
  }

  @override
  bool operator <=(api.OffsetBase other) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_operatorLessThanOrEqual(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_operatorLessThanOrEqual(api.OffsetBase other) {
    return super <= (other);
  }

  @override
  bool operator >=(api.OffsetBase other) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_operatorGreaterThanOrEqual(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_operatorGreaterThanOrEqual(api.OffsetBase other) {
    return super >= (other);
  }

  @override
  bool get isInfinite {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.isInfinite;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isInfinite {
    return super.isInfinite;
  }

  @override
  bool get isFinite {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.isFinite;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isFinite {
    return super.isFinite;
  }
}

final class _ParagraphProxy implements api.Paragraph {
  final FlaxProxyPeer _flaxPeer;
  _ParagraphProxy(this._flaxPeer);
  @override
  void layout(api.ParagraphConstraints constraints) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      constraints,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: layout');
    }
    return;
  }

  @override
  List<api.TextBox> getBoxesForRange(
    int start,
    int end, {
    Object? boxHeightStyle = _flaxOmitted,
    Object? boxWidthStyle = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      1,
      <Object?>[start, end],
      <String, Object?>{
        if (!identical(boxHeightStyle, _flaxOmitted))
          "boxHeightStyle": boxHeightStyle,
        if (!identical(boxWidthStyle, _flaxOmitted))
          "boxWidthStyle": boxWidthStyle,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getBoxesForRange');
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api.TextBox>;
    return _flaxConvertedResult;
  }

  @override
  List<api.TextBox> getBoxesForPlaceholders() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getBoxesForPlaceholders');
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api.TextBox>;
    return _flaxConvertedResult;
  }

  @override
  api.TextPosition getPositionForOffset(api.Offset offset) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      offset,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getPositionForOffset');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.TextPosition;
    return _flaxConvertedResult;
  }

  @override
  api.GlyphInfo? getClosestGlyphInfoForOffset(api.Offset offset) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      offset,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getClosestGlyphInfoForOffset');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.GlyphInfo?;
    return _flaxConvertedResult;
  }

  @override
  api.GlyphInfo? getGlyphInfoAt(int codeUnitOffset) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      codeUnitOffset,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getGlyphInfoAt');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.GlyphInfo?;
    return _flaxConvertedResult;
  }

  @override
  api.TextRange getWordBoundary(api.TextPosition position) {
    final _flaxResult = _flaxPeer.call(6, <Object?>[
      position,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getWordBoundary');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.TextRange;
    return _flaxConvertedResult;
  }

  @override
  api.TextRange getLineBoundary(api.TextPosition position) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[
      position,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getLineBoundary');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.TextRange;
    return _flaxConvertedResult;
  }

  @override
  List<api.LineMetrics> computeLineMetrics() {
    final _flaxResult = _flaxPeer.call(8, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: computeLineMetrics');
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<api.LineMetrics>;
    return _flaxConvertedResult;
  }

  @override
  api.LineMetrics? getLineMetricsAt(int lineNumber) {
    final _flaxResult = _flaxPeer.call(9, <Object?>[
      lineNumber,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getLineMetricsAt');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.LineMetrics?;
    return _flaxConvertedResult;
  }

  @override
  int? getLineNumberAt(int codeUnitOffset) {
    final _flaxResult = _flaxPeer.call(10, <Object?>[
      codeUnitOffset,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getLineNumberAt');
    }
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  @override
  void dispose() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: dispose');
    }
    return;
  }

  @override
  double get width {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double get height {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double get longestLine {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double get minIntrinsicWidth {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double get maxIntrinsicWidth {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double get alphabeticBaseline {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double get ideographicBaseline {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  bool get didExceedMaxLines {
    final _flaxResult = _flaxPeer.call(19, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  int get numberOfLines {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  bool get debugDisposed {
    final _flaxResult = _flaxPeer.call(21, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }
}

final class _ParagraphBuilderProxy implements api.ParagraphBuilder {
  final FlaxProxyPeer _flaxPeer;
  _ParagraphBuilderProxy(this._flaxPeer);
  @override
  void pushStyle(api.TextStyle style) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      style,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushStyle');
    }
    return;
  }

  @override
  void pop() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pop');
    }
    return;
  }

  @override
  void addText(String text) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[text], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addText');
    }
    return;
  }

  @override
  void addPlaceholder(
    double width,
    double height,
    api.PlaceholderAlignment alignment, {
    Object? scale = _flaxOmitted,
    Object? baselineOffset = _flaxOmitted,
    Object? baseline = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      3,
      <Object?>[width, height, alignment],
      <String, Object?>{
        if (!identical(scale, _flaxOmitted)) "scale": scale,
        if (!identical(baselineOffset, _flaxOmitted))
          "baselineOffset": baselineOffset,
        if (!identical(baseline, _flaxOmitted)) "baseline": baseline,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addPlaceholder');
    }
    return;
  }

  @override
  api.Paragraph build() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: build');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Paragraph;
    return _flaxConvertedResult;
  }

  @override
  int get placeholderCount {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  List<double> get placeholderScales {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as List<double>;
    return _flaxConvertedResult;
  }
}

final class _ParagraphConstraintsProxy extends api.ParagraphConstraints
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch4 {
  final FlaxProxyPeer _flaxPeer;
  _ParagraphConstraintsProxy(this._flaxPeer, {required double super.width});
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get width => _FlaxProxyDispatch4_get_width(this, 1);
  double get _flaxSuperGet_width {
    return super.width;
  }
}

final class _ParagraphStyleProxy extends api.ParagraphStyle
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _ParagraphStyleProxy(
    this._flaxPeer, {
    api.TextAlign? super.textAlign,
    api.TextDirection? super.textDirection,
    int? super.maxLines,
    String? super.fontFamily,
    double? super.fontSize,
    double? super.height,
    api.TextHeightBehavior? super.textHeightBehavior,
    api.FontWeight? super.fontWeight,
    api.FontStyle? super.fontStyle,
    api.StrutStyle? super.strutStyle,
    String? super.ellipsis,
    api.Locale? super.locale,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }
}

final class _PathProxy implements api.Path {
  final FlaxProxyPeer _flaxPeer;
  _PathProxy(this._flaxPeer);
  @override
  void moveTo(double x, double y) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[x, y], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: moveTo');
    }
    return;
  }

  @override
  void relativeMoveTo(double dx, double dy) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      dx,
      dy,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: relativeMoveTo');
    }
    return;
  }

  @override
  void lineTo(double x, double y) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[x, y], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: lineTo');
    }
    return;
  }

  @override
  void relativeLineTo(double dx, double dy) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      dx,
      dy,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: relativeLineTo');
    }
    return;
  }

  @override
  void quadraticBezierTo(double x1, double y1, double x2, double y2) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      x1,
      y1,
      x2,
      y2,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: quadraticBezierTo');
    }
    return;
  }

  @override
  void relativeQuadraticBezierTo(double x1, double y1, double x2, double y2) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      x1,
      y1,
      x2,
      y2,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: relativeQuadraticBezierTo');
    }
    return;
  }

  @override
  void cubicTo(
    double x1,
    double y1,
    double x2,
    double y2,
    double x3,
    double y3,
  ) {
    final _flaxResult = _flaxPeer.call(6, <Object?>[
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: cubicTo');
    }
    return;
  }

  @override
  void relativeCubicTo(
    double x1,
    double y1,
    double x2,
    double y2,
    double x3,
    double y3,
  ) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: relativeCubicTo');
    }
    return;
  }

  @override
  void conicTo(double x1, double y1, double x2, double y2, double w) {
    final _flaxResult = _flaxPeer.call(8, <Object?>[
      x1,
      y1,
      x2,
      y2,
      w,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: conicTo');
    }
    return;
  }

  @override
  void relativeConicTo(double x1, double y1, double x2, double y2, double w) {
    final _flaxResult = _flaxPeer.call(9, <Object?>[
      x1,
      y1,
      x2,
      y2,
      w,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: relativeConicTo');
    }
    return;
  }

  @override
  void arcTo(
    api.Rect rect,
    double startAngle,
    double sweepAngle,
    bool forceMoveTo,
  ) {
    final _flaxResult = _flaxPeer.call(10, <Object?>[
      rect,
      startAngle,
      sweepAngle,
      forceMoveTo,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: arcTo');
    }
    return;
  }

  @override
  void arcToPoint(
    api.Offset arcEnd, {
    Object? radius = _flaxOmitted,
    Object? rotation = _flaxOmitted,
    Object? largeArc = _flaxOmitted,
    Object? clockwise = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      11,
      <Object?>[arcEnd],
      <String, Object?>{
        if (!identical(radius, _flaxOmitted)) "radius": radius,
        if (!identical(rotation, _flaxOmitted)) "rotation": rotation,
        if (!identical(largeArc, _flaxOmitted)) "largeArc": largeArc,
        if (!identical(clockwise, _flaxOmitted)) "clockwise": clockwise,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: arcToPoint');
    }
    return;
  }

  @override
  void relativeArcToPoint(
    api.Offset arcEndDelta, {
    Object? radius = _flaxOmitted,
    Object? rotation = _flaxOmitted,
    Object? largeArc = _flaxOmitted,
    Object? clockwise = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      12,
      <Object?>[arcEndDelta],
      <String, Object?>{
        if (!identical(radius, _flaxOmitted)) "radius": radius,
        if (!identical(rotation, _flaxOmitted)) "rotation": rotation,
        if (!identical(largeArc, _flaxOmitted)) "largeArc": largeArc,
        if (!identical(clockwise, _flaxOmitted)) "clockwise": clockwise,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: relativeArcToPoint');
    }
    return;
  }

  @override
  void addRect(api.Rect rect) {
    final _flaxResult = _flaxPeer.call(13, <Object?>[
      rect,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addRect');
    }
    return;
  }

  @override
  void addOval(api.Rect oval) {
    final _flaxResult = _flaxPeer.call(14, <Object?>[
      oval,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addOval');
    }
    return;
  }

  @override
  void addArc(api.Rect oval, double startAngle, double sweepAngle) {
    final _flaxResult = _flaxPeer.call(15, <Object?>[
      oval,
      startAngle,
      sweepAngle,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addArc');
    }
    return;
  }

  @override
  void addPolygon(List<api.Offset> points, bool close) {
    final _flaxResult = _flaxPeer.call(16, <Object?>[
      points,
      close,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addPolygon');
    }
    return;
  }

  @override
  void addRRect(api.RRect rrect) {
    final _flaxResult = _flaxPeer.call(17, <Object?>[
      rrect,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addRRect');
    }
    return;
  }

  @override
  void addRSuperellipse(api.RSuperellipse rsuperellipse) {
    final _flaxResult = _flaxPeer.call(18, <Object?>[
      rsuperellipse,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addRSuperellipse');
    }
    return;
  }

  @override
  void addPath(
    api.Path path,
    api.Offset offset, {
    Object? matrix4 = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      19,
      <Object?>[path, offset],
      <String, Object?>{
        if (!identical(matrix4, _flaxOmitted)) "matrix4": matrix4,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addPath');
    }
    return;
  }

  @override
  void extendWithPath(
    api.Path path,
    api.Offset offset, {
    Object? matrix4 = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      20,
      <Object?>[path, offset],
      <String, Object?>{
        if (!identical(matrix4, _flaxOmitted)) "matrix4": matrix4,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: extendWithPath');
    }
    return;
  }

  @override
  void close() {
    final _flaxResult = _flaxPeer.call(21, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: close');
    }
    return;
  }

  @override
  void reset() {
    final _flaxResult = _flaxPeer.call(22, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: reset');
    }
    return;
  }

  @override
  bool contains(api.Offset point) {
    final _flaxResult = _flaxPeer.call(23, <Object?>[
      point,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: contains');
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  api.Path shift(api.Offset offset) {
    final _flaxResult = _flaxPeer.call(24, <Object?>[
      offset,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: shift');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Path;
    return _flaxConvertedResult;
  }

  @override
  api.Path transform(api1.Float64List matrix4) {
    final _flaxResult = _flaxPeer.call(25, <Object?>[
      matrix4,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: transform');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Path;
    return _flaxConvertedResult;
  }

  @override
  api.Rect getBounds() {
    final _flaxResult = _flaxPeer.call(26, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: getBounds');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Rect;
    return _flaxConvertedResult;
  }

  @override
  api.PathMetrics computeMetrics({Object? forceClosed = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(27, <Object?>[], <String, Object?>{
      if (!identical(forceClosed, _flaxOmitted)) "forceClosed": forceClosed,
    });
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: computeMetrics');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.PathMetrics;
    return _flaxConvertedResult;
  }

  @override
  api.PathFillType get fillType {
    final _flaxResult = _flaxPeer.call(28, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as api.PathFillType;
    return _flaxConvertedResult;
  }

  @override
  set fillType(api.PathFillType value) {
    _flaxPeer.call(29, [value], const {});
  }
}

final class _PictureProxy implements api.Picture {
  final FlaxProxyPeer _flaxPeer;
  _PictureProxy(this._flaxPeer);
  @override
  Future<api.Image> toImage(int width, int height) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      width,
      height,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: toImage');
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<api.Image>((value) => value as api.Image);
    return _flaxConvertedResult;
  }

  @override
  api.Image toImageSync(
    int width,
    int height, {
    Object? targetFormat = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      1,
      <Object?>[width, height],
      <String, Object?>{
        if (!identical(targetFormat, _flaxOmitted))
          "targetFormat": targetFormat,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: toImageSync');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Image;
    return _flaxConvertedResult;
  }

  @override
  void dispose() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: dispose');
    }
    return;
  }

  @override
  bool get debugDisposed {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  int get approximateBytesUsed {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }
}

final class _PictureRasterizationExceptionProxy
    implements api.PictureRasterizationException {
  final FlaxProxyPeer _flaxPeer;
  _PictureRasterizationExceptionProxy(this._flaxPeer);
  @override
  String toString() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: toString');
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  @override
  String get message {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  @override
  api2.StackTrace? get stack {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as api2.StackTrace?;
    return _flaxConvertedResult;
  }
}

final class _PictureRecorderProxy implements api.PictureRecorder {
  final FlaxProxyPeer _flaxPeer;
  _PictureRecorderProxy(this._flaxPeer);
  @override
  api.Picture endRecording() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: endRecording');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Picture;
    return _flaxConvertedResult;
  }

  @override
  bool get isRecording {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }
}

final class _PointerDataProxy extends api.PointerData
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch3, _FlaxProxyDispatch7 {
  final FlaxProxyPeer _flaxPeer;
  _PointerDataProxy(
    this._flaxPeer, {
    int super.viewId,
    int super.embedderId,
    api2.Duration super.timeStamp,
    api.PointerChange super.change,
    api.PointerDeviceKind super.kind,
    api.PointerSignalKind? super.signalKind,
    int super.device,
    int super.pointerIdentifier,
    double super.physicalX,
    double super.physicalY,
    double super.physicalDeltaX,
    double super.physicalDeltaY,
    int super.buttons,
    bool super.obscured,
    bool super.synthesized,
    double super.pressure,
    double super.pressureMin,
    double super.pressureMax,
    double super.distance,
    double super.distanceMax,
    double super.size,
    double super.radiusMajor,
    double super.radiusMinor,
    double super.radiusMin,
    double super.radiusMax,
    double super.orientation,
    double super.tilt,
    int super.platformData,
    double super.scrollDeltaX,
    double super.scrollDeltaY,
    double super.panX,
    double super.panY,
    double super.panDeltaX,
    double super.panDeltaY,
    double super.scale,
    double super.rotation,
    void Function({bool allowPlatformDefault})? super.onRespond,
  });
  @override
  void respond({required bool allowPlatformDefault}) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      "allowPlatformDefault": allowPlatformDefault,
    });
    if (!_flaxResult.$1) {
      _flaxSuper_respond(allowPlatformDefault: allowPlatformDefault);
      return;
    }
    return;
  }

  void _flaxSuper_respond({required bool allowPlatformDefault}) {
    super.respond(allowPlatformDefault: allowPlatformDefault);
    return;
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringFull() {
    return _FlaxProxyDispatch3_call_toStringFull(this, 2);
  }

  String _flaxSuper_toStringFull() {
    return super.toStringFull();
  }

  @override
  int get viewId => _FlaxProxyDispatch7_get_viewId(this, 3);
  int get _flaxSuperGet_viewId {
    return super.viewId;
  }

  @override
  int get embedderId {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.embedderId;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_embedderId {
    return super.embedderId;
  }

  @override
  api2.Duration get timeStamp => _FlaxProxyDispatch3_get_timeStamp(this, 5);
  api2.Duration get _flaxSuperGet_timeStamp {
    return super.timeStamp;
  }

  @override
  api.PointerChange get change {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.change;
    final _flaxConvertedResult = _flaxResult.$2 as api.PointerChange;
    return _flaxConvertedResult;
  }

  api.PointerChange get _flaxSuperGet_change {
    return super.change;
  }

  @override
  api.PointerDeviceKind get kind {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.kind;
    final _flaxConvertedResult = _flaxResult.$2 as api.PointerDeviceKind;
    return _flaxConvertedResult;
  }

  api.PointerDeviceKind get _flaxSuperGet_kind {
    return super.kind;
  }

  @override
  api.PointerSignalKind? get signalKind {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.signalKind;
    final _flaxConvertedResult = _flaxResult.$2 as api.PointerSignalKind?;
    return _flaxConvertedResult;
  }

  api.PointerSignalKind? get _flaxSuperGet_signalKind {
    return super.signalKind;
  }

  @override
  int get device {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.device;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_device {
    return super.device;
  }

  @override
  int get pointerIdentifier {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.pointerIdentifier;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_pointerIdentifier {
    return super.pointerIdentifier;
  }

  @override
  double get physicalX {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1) return super.physicalX;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_physicalX {
    return super.physicalX;
  }

  @override
  double get physicalY {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.physicalY;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_physicalY {
    return super.physicalY;
  }

  @override
  double get physicalDeltaX {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.physicalDeltaX;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_physicalDeltaX {
    return super.physicalDeltaX;
  }

  @override
  double get physicalDeltaY {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.physicalDeltaY;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_physicalDeltaY {
    return super.physicalDeltaY;
  }

  @override
  int get buttons {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.buttons;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_buttons {
    return super.buttons;
  }

  @override
  bool get obscured {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.obscured;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_obscured {
    return super.obscured;
  }

  @override
  bool get synthesized => _FlaxProxyDispatch3_get_synthesized(this, 17);
  bool get _flaxSuperGet_synthesized {
    return super.synthesized;
  }

  @override
  double get pressure {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    if (!_flaxResult.$1) return super.pressure;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_pressure {
    return super.pressure;
  }

  @override
  double get pressureMin {
    final _flaxResult = _flaxPeer.call(19, const [], const {});
    if (!_flaxResult.$1) return super.pressureMin;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_pressureMin {
    return super.pressureMin;
  }

  @override
  double get pressureMax {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.pressureMax;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_pressureMax {
    return super.pressureMax;
  }

  @override
  double get distance {
    final _flaxResult = _flaxPeer.call(21, const [], const {});
    if (!_flaxResult.$1) return super.distance;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_distance {
    return super.distance;
  }

  @override
  double get distanceMax {
    final _flaxResult = _flaxPeer.call(22, const [], const {});
    if (!_flaxResult.$1) return super.distanceMax;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_distanceMax {
    return super.distanceMax;
  }

  @override
  double get size {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.size;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_size {
    return super.size;
  }

  @override
  double get radiusMajor {
    final _flaxResult = _flaxPeer.call(24, const [], const {});
    if (!_flaxResult.$1) return super.radiusMajor;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_radiusMajor {
    return super.radiusMajor;
  }

  @override
  double get radiusMinor {
    final _flaxResult = _flaxPeer.call(25, const [], const {});
    if (!_flaxResult.$1) return super.radiusMinor;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_radiusMinor {
    return super.radiusMinor;
  }

  @override
  double get radiusMin {
    final _flaxResult = _flaxPeer.call(26, const [], const {});
    if (!_flaxResult.$1) return super.radiusMin;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_radiusMin {
    return super.radiusMin;
  }

  @override
  double get radiusMax {
    final _flaxResult = _flaxPeer.call(27, const [], const {});
    if (!_flaxResult.$1) return super.radiusMax;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_radiusMax {
    return super.radiusMax;
  }

  @override
  double get orientation {
    final _flaxResult = _flaxPeer.call(28, const [], const {});
    if (!_flaxResult.$1) return super.orientation;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_orientation {
    return super.orientation;
  }

  @override
  double get tilt {
    final _flaxResult = _flaxPeer.call(29, const [], const {});
    if (!_flaxResult.$1) return super.tilt;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_tilt {
    return super.tilt;
  }

  @override
  int get platformData {
    final _flaxResult = _flaxPeer.call(30, const [], const {});
    if (!_flaxResult.$1) return super.platformData;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_platformData {
    return super.platformData;
  }

  @override
  double get scrollDeltaX {
    final _flaxResult = _flaxPeer.call(31, const [], const {});
    if (!_flaxResult.$1) return super.scrollDeltaX;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_scrollDeltaX {
    return super.scrollDeltaX;
  }

  @override
  double get scrollDeltaY {
    final _flaxResult = _flaxPeer.call(32, const [], const {});
    if (!_flaxResult.$1) return super.scrollDeltaY;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_scrollDeltaY {
    return super.scrollDeltaY;
  }

  @override
  double get panX {
    final _flaxResult = _flaxPeer.call(33, const [], const {});
    if (!_flaxResult.$1) return super.panX;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_panX {
    return super.panX;
  }

  @override
  double get panY {
    final _flaxResult = _flaxPeer.call(34, const [], const {});
    if (!_flaxResult.$1) return super.panY;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_panY {
    return super.panY;
  }

  @override
  double get panDeltaX {
    final _flaxResult = _flaxPeer.call(35, const [], const {});
    if (!_flaxResult.$1) return super.panDeltaX;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_panDeltaX {
    return super.panDeltaX;
  }

  @override
  double get panDeltaY {
    final _flaxResult = _flaxPeer.call(36, const [], const {});
    if (!_flaxResult.$1) return super.panDeltaY;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_panDeltaY {
    return super.panDeltaY;
  }

  @override
  double get scale {
    final _flaxResult = _flaxPeer.call(37, const [], const {});
    if (!_flaxResult.$1) return super.scale;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_scale {
    return super.scale;
  }

  @override
  double get rotation {
    final _flaxResult = _flaxPeer.call(38, const [], const {});
    if (!_flaxResult.$1) return super.rotation;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_rotation {
    return super.rotation;
  }
}

final class _PointerDataPacketProxy extends api.PointerDataPacket {
  final FlaxProxyPeer _flaxPeer;
  _PointerDataPacketProxy(this._flaxPeer, {List<api.PointerData> super.data});
  @override
  List<api.PointerData> get data {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.data;
    final _flaxConvertedResult = _flaxResult.$2 as List<api.PointerData>;
    return _flaxConvertedResult;
  }

  List<api.PointerData> get _flaxSuperGet_data {
    return super.data;
  }
}

final class _RSTransformProxy extends api.RSTransform {
  final FlaxProxyPeer _flaxPeer;
  _RSTransformProxy(
    this._flaxPeer,
    double super.scos,
    double super.ssin,
    double super.tx,
    double super.ty,
  );
  @override
  double get scos {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.scos;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_scos {
    return super.scos;
  }

  @override
  double get ssin {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.ssin;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_ssin {
    return super.ssin;
  }

  @override
  double get tx {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.tx;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_tx {
    return super.tx;
  }

  @override
  double get ty {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.ty;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_ty {
    return super.ty;
  }
}

final class _SceneProxy implements api.Scene {
  final FlaxProxyPeer _flaxPeer;
  _SceneProxy(this._flaxPeer);
  @override
  api.Image toImageSync(int width, int height) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      width,
      height,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: toImageSync');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Image;
    return _flaxConvertedResult;
  }

  @override
  Future<api.Image> toImage(int width, int height) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      width,
      height,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: toImage');
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<api.Image>((value) => value as api.Image);
    return _flaxConvertedResult;
  }

  @override
  void dispose() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: dispose');
    }
    return;
  }
}

final class _SceneBuilderProxy implements api.SceneBuilder {
  final FlaxProxyPeer _flaxPeer;
  _SceneBuilderProxy(this._flaxPeer);
  @override
  api.TransformEngineLayer pushTransform(
    api1.Float64List matrix4, {
    Object? oldLayer = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      0,
      <Object?>[matrix4],
      <String, Object?>{
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushTransform');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.TransformEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.OffsetEngineLayer pushOffset(
    double dx,
    double dy, {
    Object? oldLayer = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      1,
      <Object?>[dx, dy],
      <String, Object?>{
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushOffset');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.OffsetEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.ClipRectEngineLayer pushClipRect(
    api.Rect rect, {
    Object? clipBehavior = _flaxOmitted,
    Object? oldLayer = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      2,
      <Object?>[rect],
      <String, Object?>{
        if (!identical(clipBehavior, _flaxOmitted))
          "clipBehavior": clipBehavior,
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushClipRect');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.ClipRectEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.ClipRRectEngineLayer pushClipRRect(
    api.RRect rrect, {
    Object? clipBehavior = _flaxOmitted,
    Object? oldLayer = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      3,
      <Object?>[rrect],
      <String, Object?>{
        if (!identical(clipBehavior, _flaxOmitted))
          "clipBehavior": clipBehavior,
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushClipRRect');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.ClipRRectEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.ClipRSuperellipseEngineLayer pushClipRSuperellipse(
    api.RSuperellipse rsuperellipse, {
    Object? clipBehavior = _flaxOmitted,
    Object? oldLayer = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[rsuperellipse],
      <String, Object?>{
        if (!identical(clipBehavior, _flaxOmitted))
          "clipBehavior": clipBehavior,
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushClipRSuperellipse');
    }
    final _flaxConvertedResult =
        _flaxResult.$2 as api.ClipRSuperellipseEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.ClipPathEngineLayer pushClipPath(
    api.Path path, {
    Object? clipBehavior = _flaxOmitted,
    Object? oldLayer = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      5,
      <Object?>[path],
      <String, Object?>{
        if (!identical(clipBehavior, _flaxOmitted))
          "clipBehavior": clipBehavior,
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushClipPath');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.ClipPathEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.OpacityEngineLayer pushOpacity(
    int alpha, {
    Object? offset = _flaxOmitted,
    Object? oldLayer = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      6,
      <Object?>[alpha],
      <String, Object?>{
        if (!identical(offset, _flaxOmitted)) "offset": offset,
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushOpacity');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.OpacityEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.ColorFilterEngineLayer pushColorFilter(
    api.ColorFilter filter, {
    Object? oldLayer = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      7,
      <Object?>[filter],
      <String, Object?>{
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushColorFilter');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.ColorFilterEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.ImageFilterEngineLayer pushImageFilter(
    api.ImageFilter filter, {
    Object? offset = _flaxOmitted,
    Object? oldLayer = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      8,
      <Object?>[filter],
      <String, Object?>{
        if (!identical(offset, _flaxOmitted)) "offset": offset,
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushImageFilter');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.ImageFilterEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.BackdropFilterEngineLayer pushBackdropFilter(
    api.ImageFilter filter, {
    Object? blendMode = _flaxOmitted,
    Object? oldLayer = _flaxOmitted,
    Object? backdropId = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      9,
      <Object?>[filter],
      <String, Object?>{
        if (!identical(blendMode, _flaxOmitted)) "blendMode": blendMode,
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
        if (!identical(backdropId, _flaxOmitted)) "backdropId": backdropId,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushBackdropFilter');
    }
    final _flaxConvertedResult =
        _flaxResult.$2 as api.BackdropFilterEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  api.ShaderMaskEngineLayer pushShaderMask(
    api.Shader shader,
    api.Rect maskRect,
    api.BlendMode blendMode, {
    Object? oldLayer = _flaxOmitted,
    Object? filterQuality = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      10,
      <Object?>[shader, maskRect, blendMode],
      <String, Object?>{
        if (!identical(oldLayer, _flaxOmitted)) "oldLayer": oldLayer,
        if (!identical(filterQuality, _flaxOmitted))
          "filterQuality": filterQuality,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pushShaderMask');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.ShaderMaskEngineLayer;
    return _flaxConvertedResult;
  }

  @override
  void pop() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: pop');
    }
    return;
  }

  @override
  void addRetained(api.EngineLayer retainedLayer) {
    final _flaxResult = _flaxPeer.call(12, <Object?>[
      retainedLayer,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addRetained');
    }
    return;
  }

  @override
  void addPerformanceOverlay(int enabledOptions, api.Rect bounds) {
    final _flaxResult = _flaxPeer.call(13, <Object?>[
      enabledOptions,
      bounds,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addPerformanceOverlay');
    }
    return;
  }

  @override
  void addPicture(
    api.Offset offset,
    api.Picture picture, {
    Object? isComplexHint = _flaxOmitted,
    Object? willChangeHint = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      14,
      <Object?>[offset, picture],
      <String, Object?>{
        if (!identical(isComplexHint, _flaxOmitted))
          "isComplexHint": isComplexHint,
        if (!identical(willChangeHint, _flaxOmitted))
          "willChangeHint": willChangeHint,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addPicture');
    }
    return;
  }

  @override
  void addTexture(
    int textureId, {
    Object? offset = _flaxOmitted,
    Object? width = _flaxOmitted,
    Object? height = _flaxOmitted,
    Object? freeze = _flaxOmitted,
    Object? filterQuality = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      15,
      <Object?>[textureId],
      <String, Object?>{
        if (!identical(offset, _flaxOmitted)) "offset": offset,
        if (!identical(width, _flaxOmitted)) "width": width,
        if (!identical(height, _flaxOmitted)) "height": height,
        if (!identical(freeze, _flaxOmitted)) "freeze": freeze,
        if (!identical(filterQuality, _flaxOmitted))
          "filterQuality": filterQuality,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addTexture');
    }
    return;
  }

  @override
  void addPlatformView(
    int viewId, {
    Object? offset = _flaxOmitted,
    Object? width = _flaxOmitted,
    Object? height = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      16,
      <Object?>[viewId],
      <String, Object?>{
        if (!identical(offset, _flaxOmitted)) "offset": offset,
        if (!identical(width, _flaxOmitted)) "width": width,
        if (!identical(height, _flaxOmitted)) "height": height,
      },
    );
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addPlatformView');
    }
    return;
  }

  @override
  api.Scene build() {
    final _flaxResult = _flaxPeer.call(17, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: build');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Scene;
    return _flaxConvertedResult;
  }
}

final class _SemanticsActionProxy implements api.SemanticsAction {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsActionProxy(this._flaxPeer);
  @override
  String toString() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: toString');
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  @override
  int get index {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  String get name {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }
}

final class _SemanticsActionEventProxy extends api.SemanticsActionEvent
    implements _FlaxProxyDispatch7 {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsActionEventProxy(
    this._flaxPeer, {
    required api.SemanticsAction super.type,
    required int super.viewId,
    required int super.nodeId,
    Object? super.arguments,
  });
  @override
  api.SemanticsActionEvent copyWith({
    Object? type = _flaxOmitted,
    Object? viewId = _flaxOmitted,
    Object? nodeId = _flaxOmitted,
    Object? arguments = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      if (!identical(type, _flaxOmitted)) "type": type,
      if (!identical(viewId, _flaxOmitted)) "viewId": viewId,
      if (!identical(nodeId, _flaxOmitted)) "nodeId": nodeId,
      if (!identical(arguments, _flaxOmitted)) "arguments": arguments,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_copyWith(
        type: type,
        viewId: viewId,
        nodeId: nodeId,
        arguments: arguments,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsActionEvent;
    return _flaxConvertedResult;
  }

  api.SemanticsActionEvent _flaxSuper_copyWith({
    Object? type = _flaxOmitted,
    Object? viewId = _flaxOmitted,
    Object? nodeId = _flaxOmitted,
    Object? arguments = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(type, _flaxOmitted);
    final _flaxHas1 = !identical(viewId, _flaxOmitted);
    final _flaxHas2 = !identical(nodeId, _flaxOmitted);
    final _flaxHas3 = !identical(arguments, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.copyWith,
      <Object?>[
        (_flaxHas0 ? type as api.SemanticsAction? : null),
        (_flaxHas1 ? viewId as int? : null),
        (_flaxHas2 ? nodeId as int? : null),
        (_flaxHas3 ? arguments : null),
      ],
      <int>[
        (_flaxHas0 ? 1 : 0) |
            (_flaxHas1 ? 2 : 0) |
            (_flaxHas2 ? 4 : 0) |
            (_flaxHas3 ? 8 : 0),
      ],
      const <String>["type", "viewId", "nodeId", "arguments"],
    ) as api.SemanticsActionEvent);
  }

  @override
  api.SemanticsAction get type {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.type;
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsAction;
    return _flaxConvertedResult;
  }

  api.SemanticsAction get _flaxSuperGet_type {
    return super.type;
  }

  @override
  int get viewId => _FlaxProxyDispatch7_get_viewId(this, 2);
  int get _flaxSuperGet_viewId {
    return super.viewId;
  }

  @override
  int get nodeId {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.nodeId;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_nodeId {
    return super.nodeId;
  }

  @override
  Object? get arguments {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.arguments;
    final _flaxConvertedResult = _flaxResult.$2;
    return _flaxConvertedResult;
  }

  Object? get _flaxSuperGet_arguments {
    return super.arguments;
  }
}

final class _SemanticsFlagProxy implements api.SemanticsFlag {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsFlagProxy(this._flaxPeer);
  @override
  String toString() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: toString');
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  @override
  int get index {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  @override
  String get name {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }
}

final class _SemanticsFlagsProxy extends api.SemanticsFlags {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsFlagsProxy(
    this._flaxPeer, {
    api.CheckedState super.isChecked,
    api.Tristate super.isSelected,
    api.Tristate super.isEnabled,
    api.Tristate super.isToggled,
    api.Tristate super.isExpanded,
    api.Tristate super.isRequired,
    api.Tristate super.isFocused,
    bool super.isButton,
    bool super.isTextField,
    bool super.isInMutuallyExclusiveGroup,
    bool super.isHeader,
    bool super.isObscured,
    bool super.scopesRoute,
    bool super.namesRoute,
    bool super.isHidden,
    bool super.isImage,
    bool super.isLiveRegion,
    bool super.hasImplicitScrolling,
    bool super.isMultiline,
    bool super.isReadOnly,
    bool super.isLink,
    bool super.isSlider,
    bool super.isKeyboardKey,
    bool super.isAccessibilityFocusBlocked,
  });
  @override
  api.SemanticsFlags merge(api.SemanticsFlags other) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_merge(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsFlags;
    return _flaxConvertedResult;
  }

  api.SemanticsFlags _flaxSuper_merge(api.SemanticsFlags other) {
    return super.merge(other);
  }

  @override
  api.SemanticsFlags copyWith({
    Object? isChecked = _flaxOmitted,
    Object? isSelected = _flaxOmitted,
    Object? isEnabled = _flaxOmitted,
    Object? isToggled = _flaxOmitted,
    Object? isExpanded = _flaxOmitted,
    Object? isRequired = _flaxOmitted,
    Object? isFocused = _flaxOmitted,
    Object? isButton = _flaxOmitted,
    Object? isTextField = _flaxOmitted,
    Object? isInMutuallyExclusiveGroup = _flaxOmitted,
    Object? isHeader = _flaxOmitted,
    Object? isObscured = _flaxOmitted,
    Object? scopesRoute = _flaxOmitted,
    Object? namesRoute = _flaxOmitted,
    Object? isHidden = _flaxOmitted,
    Object? isImage = _flaxOmitted,
    Object? isLiveRegion = _flaxOmitted,
    Object? hasImplicitScrolling = _flaxOmitted,
    Object? isMultiline = _flaxOmitted,
    Object? isReadOnly = _flaxOmitted,
    Object? isLink = _flaxOmitted,
    Object? isSlider = _flaxOmitted,
    Object? isKeyboardKey = _flaxOmitted,
    Object? isAccessibilityFocusBlocked = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{
      if (!identical(isChecked, _flaxOmitted)) "isChecked": isChecked,
      if (!identical(isSelected, _flaxOmitted)) "isSelected": isSelected,
      if (!identical(isEnabled, _flaxOmitted)) "isEnabled": isEnabled,
      if (!identical(isToggled, _flaxOmitted)) "isToggled": isToggled,
      if (!identical(isExpanded, _flaxOmitted)) "isExpanded": isExpanded,
      if (!identical(isRequired, _flaxOmitted)) "isRequired": isRequired,
      if (!identical(isFocused, _flaxOmitted)) "isFocused": isFocused,
      if (!identical(isButton, _flaxOmitted)) "isButton": isButton,
      if (!identical(isTextField, _flaxOmitted)) "isTextField": isTextField,
      if (!identical(isInMutuallyExclusiveGroup, _flaxOmitted))
        "isInMutuallyExclusiveGroup": isInMutuallyExclusiveGroup,
      if (!identical(isHeader, _flaxOmitted)) "isHeader": isHeader,
      if (!identical(isObscured, _flaxOmitted)) "isObscured": isObscured,
      if (!identical(scopesRoute, _flaxOmitted)) "scopesRoute": scopesRoute,
      if (!identical(namesRoute, _flaxOmitted)) "namesRoute": namesRoute,
      if (!identical(isHidden, _flaxOmitted)) "isHidden": isHidden,
      if (!identical(isImage, _flaxOmitted)) "isImage": isImage,
      if (!identical(isLiveRegion, _flaxOmitted)) "isLiveRegion": isLiveRegion,
      if (!identical(hasImplicitScrolling, _flaxOmitted))
        "hasImplicitScrolling": hasImplicitScrolling,
      if (!identical(isMultiline, _flaxOmitted)) "isMultiline": isMultiline,
      if (!identical(isReadOnly, _flaxOmitted)) "isReadOnly": isReadOnly,
      if (!identical(isLink, _flaxOmitted)) "isLink": isLink,
      if (!identical(isSlider, _flaxOmitted)) "isSlider": isSlider,
      if (!identical(isKeyboardKey, _flaxOmitted))
        "isKeyboardKey": isKeyboardKey,
      if (!identical(isAccessibilityFocusBlocked, _flaxOmitted))
        "isAccessibilityFocusBlocked": isAccessibilityFocusBlocked,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_copyWith(
        isChecked: isChecked,
        isSelected: isSelected,
        isEnabled: isEnabled,
        isToggled: isToggled,
        isExpanded: isExpanded,
        isRequired: isRequired,
        isFocused: isFocused,
        isButton: isButton,
        isTextField: isTextField,
        isInMutuallyExclusiveGroup: isInMutuallyExclusiveGroup,
        isHeader: isHeader,
        isObscured: isObscured,
        scopesRoute: scopesRoute,
        namesRoute: namesRoute,
        isHidden: isHidden,
        isImage: isImage,
        isLiveRegion: isLiveRegion,
        hasImplicitScrolling: hasImplicitScrolling,
        isMultiline: isMultiline,
        isReadOnly: isReadOnly,
        isLink: isLink,
        isSlider: isSlider,
        isKeyboardKey: isKeyboardKey,
        isAccessibilityFocusBlocked: isAccessibilityFocusBlocked,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsFlags;
    return _flaxConvertedResult;
  }

  api.SemanticsFlags _flaxSuper_copyWith({
    Object? isChecked = _flaxOmitted,
    Object? isSelected = _flaxOmitted,
    Object? isEnabled = _flaxOmitted,
    Object? isToggled = _flaxOmitted,
    Object? isExpanded = _flaxOmitted,
    Object? isRequired = _flaxOmitted,
    Object? isFocused = _flaxOmitted,
    Object? isButton = _flaxOmitted,
    Object? isTextField = _flaxOmitted,
    Object? isInMutuallyExclusiveGroup = _flaxOmitted,
    Object? isHeader = _flaxOmitted,
    Object? isObscured = _flaxOmitted,
    Object? scopesRoute = _flaxOmitted,
    Object? namesRoute = _flaxOmitted,
    Object? isHidden = _flaxOmitted,
    Object? isImage = _flaxOmitted,
    Object? isLiveRegion = _flaxOmitted,
    Object? hasImplicitScrolling = _flaxOmitted,
    Object? isMultiline = _flaxOmitted,
    Object? isReadOnly = _flaxOmitted,
    Object? isLink = _flaxOmitted,
    Object? isSlider = _flaxOmitted,
    Object? isKeyboardKey = _flaxOmitted,
    Object? isAccessibilityFocusBlocked = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(isChecked, _flaxOmitted);
    final _flaxHas1 = !identical(isSelected, _flaxOmitted);
    final _flaxHas2 = !identical(isEnabled, _flaxOmitted);
    final _flaxHas3 = !identical(isToggled, _flaxOmitted);
    final _flaxHas4 = !identical(isExpanded, _flaxOmitted);
    final _flaxHas5 = !identical(isRequired, _flaxOmitted);
    final _flaxHas6 = !identical(isFocused, _flaxOmitted);
    final _flaxHas7 = !identical(isButton, _flaxOmitted);
    final _flaxHas8 = !identical(isTextField, _flaxOmitted);
    final _flaxHas9 = !identical(isInMutuallyExclusiveGroup, _flaxOmitted);
    final _flaxHas10 = !identical(isHeader, _flaxOmitted);
    final _flaxHas11 = !identical(isObscured, _flaxOmitted);
    final _flaxHas12 = !identical(scopesRoute, _flaxOmitted);
    final _flaxHas13 = !identical(namesRoute, _flaxOmitted);
    final _flaxHas14 = !identical(isHidden, _flaxOmitted);
    final _flaxHas15 = !identical(isImage, _flaxOmitted);
    final _flaxHas16 = !identical(isLiveRegion, _flaxOmitted);
    final _flaxHas17 = !identical(hasImplicitScrolling, _flaxOmitted);
    final _flaxHas18 = !identical(isMultiline, _flaxOmitted);
    final _flaxHas19 = !identical(isReadOnly, _flaxOmitted);
    final _flaxHas20 = !identical(isLink, _flaxOmitted);
    final _flaxHas21 = !identical(isSlider, _flaxOmitted);
    final _flaxHas22 = !identical(isKeyboardKey, _flaxOmitted);
    final _flaxHas23 = !identical(isAccessibilityFocusBlocked, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.copyWith,
      <Object?>[
        (_flaxHas0 ? isChecked as api.CheckedState? : null),
        (_flaxHas1 ? isSelected as api.Tristate? : null),
        (_flaxHas2 ? isEnabled as api.Tristate? : null),
        (_flaxHas3 ? isToggled as api.Tristate? : null),
        (_flaxHas4 ? isExpanded as api.Tristate? : null),
        (_flaxHas5 ? isRequired as api.Tristate? : null),
        (_flaxHas6 ? isFocused as api.Tristate? : null),
        (_flaxHas7 ? isButton as bool? : null),
        (_flaxHas8 ? isTextField as bool? : null),
        (_flaxHas9 ? isInMutuallyExclusiveGroup as bool? : null),
        (_flaxHas10 ? isHeader as bool? : null),
        (_flaxHas11 ? isObscured as bool? : null),
        (_flaxHas12 ? scopesRoute as bool? : null),
        (_flaxHas13 ? namesRoute as bool? : null),
        (_flaxHas14 ? isHidden as bool? : null),
        (_flaxHas15 ? isImage as bool? : null),
        (_flaxHas16 ? isLiveRegion as bool? : null),
        (_flaxHas17 ? hasImplicitScrolling as bool? : null),
        (_flaxHas18 ? isMultiline as bool? : null),
        (_flaxHas19 ? isReadOnly as bool? : null),
        (_flaxHas20 ? isLink as bool? : null),
        (_flaxHas21 ? isSlider as bool? : null),
        (_flaxHas22 ? isKeyboardKey as bool? : null),
        (_flaxHas23 ? isAccessibilityFocusBlocked as bool? : null),
      ],
      <int>[
        (_flaxHas0 ? 1 : 0) |
            (_flaxHas1 ? 2 : 0) |
            (_flaxHas2 ? 4 : 0) |
            (_flaxHas3 ? 8 : 0) |
            (_flaxHas4 ? 16 : 0) |
            (_flaxHas5 ? 32 : 0) |
            (_flaxHas6 ? 64 : 0) |
            (_flaxHas7 ? 128 : 0) |
            (_flaxHas8 ? 256 : 0) |
            (_flaxHas9 ? 512 : 0) |
            (_flaxHas10 ? 1024 : 0) |
            (_flaxHas11 ? 2048 : 0) |
            (_flaxHas12 ? 4096 : 0) |
            (_flaxHas13 ? 8192 : 0) |
            (_flaxHas14 ? 16384 : 0) |
            (_flaxHas15 ? 32768 : 0) |
            (_flaxHas16 ? 65536 : 0) |
            (_flaxHas17 ? 131072 : 0) |
            (_flaxHas18 ? 262144 : 0) |
            (_flaxHas19 ? 524288 : 0) |
            (_flaxHas20 ? 1048576 : 0) |
            (_flaxHas21 ? 2097152 : 0) |
            (_flaxHas22 ? 4194304 : 0) |
            (_flaxHas23 ? 8388608 : 0),
      ],
      const <String>[
        "isChecked",
        "isSelected",
        "isEnabled",
        "isToggled",
        "isExpanded",
        "isRequired",
        "isFocused",
        "isButton",
        "isTextField",
        "isInMutuallyExclusiveGroup",
        "isHeader",
        "isObscured",
        "scopesRoute",
        "namesRoute",
        "isHidden",
        "isImage",
        "isLiveRegion",
        "hasImplicitScrolling",
        "isMultiline",
        "isReadOnly",
        "isLink",
        "isSlider",
        "isKeyboardKey",
        "isAccessibilityFocusBlocked",
      ],
    ) as api.SemanticsFlags);
  }

  @override
  List<String> toStrings() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toStrings();
    }
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> _flaxSuper_toStrings() {
    return super.toStrings();
  }

  @override
  bool hasRepeatedFlags(api.SemanticsFlags other) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_hasRepeatedFlags(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_hasRepeatedFlags(api.SemanticsFlags other) {
    return super.hasRepeatedFlags(other);
  }

  @override
  bool hasConflictingFlags(api.SemanticsFlags other) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_hasConflictingFlags(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_hasConflictingFlags(api.SemanticsFlags other) {
    return super.hasConflictingFlags(other);
  }

  @override
  api.CheckedState get isChecked {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.isChecked;
    final _flaxConvertedResult = _flaxResult.$2 as api.CheckedState;
    return _flaxConvertedResult;
  }

  api.CheckedState get _flaxSuperGet_isChecked {
    return super.isChecked;
  }

  @override
  api.Tristate get isSelected {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.isSelected;
    final _flaxConvertedResult = _flaxResult.$2 as api.Tristate;
    return _flaxConvertedResult;
  }

  api.Tristate get _flaxSuperGet_isSelected {
    return super.isSelected;
  }

  @override
  api.Tristate get isEnabled {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.isEnabled;
    final _flaxConvertedResult = _flaxResult.$2 as api.Tristate;
    return _flaxConvertedResult;
  }

  api.Tristate get _flaxSuperGet_isEnabled {
    return super.isEnabled;
  }

  @override
  api.Tristate get isToggled {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.isToggled;
    final _flaxConvertedResult = _flaxResult.$2 as api.Tristate;
    return _flaxConvertedResult;
  }

  api.Tristate get _flaxSuperGet_isToggled {
    return super.isToggled;
  }

  @override
  api.Tristate get isExpanded {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.isExpanded;
    final _flaxConvertedResult = _flaxResult.$2 as api.Tristate;
    return _flaxConvertedResult;
  }

  api.Tristate get _flaxSuperGet_isExpanded {
    return super.isExpanded;
  }

  @override
  api.Tristate get isRequired {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.isRequired;
    final _flaxConvertedResult = _flaxResult.$2 as api.Tristate;
    return _flaxConvertedResult;
  }

  api.Tristate get _flaxSuperGet_isRequired {
    return super.isRequired;
  }

  @override
  api.Tristate get isFocused {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1) return super.isFocused;
    final _flaxConvertedResult = _flaxResult.$2 as api.Tristate;
    return _flaxConvertedResult;
  }

  api.Tristate get _flaxSuperGet_isFocused {
    return super.isFocused;
  }

  @override
  bool get isAccessibilityFocusBlocked {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.isAccessibilityFocusBlocked;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isAccessibilityFocusBlocked {
    return super.isAccessibilityFocusBlocked;
  }

  @override
  bool get isButton {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.isButton;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isButton {
    return super.isButton;
  }

  @override
  bool get isTextField {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.isTextField;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isTextField {
    return super.isTextField;
  }

  @override
  bool get isInMutuallyExclusiveGroup {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.isInMutuallyExclusiveGroup;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isInMutuallyExclusiveGroup {
    return super.isInMutuallyExclusiveGroup;
  }

  @override
  bool get isHeader {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.isHeader;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isHeader {
    return super.isHeader;
  }

  @override
  bool get isObscured {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.isObscured;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isObscured {
    return super.isObscured;
  }

  @override
  bool get scopesRoute {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    if (!_flaxResult.$1) return super.scopesRoute;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_scopesRoute {
    return super.scopesRoute;
  }

  @override
  bool get namesRoute {
    final _flaxResult = _flaxPeer.call(19, const [], const {});
    if (!_flaxResult.$1) return super.namesRoute;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_namesRoute {
    return super.namesRoute;
  }

  @override
  bool get isHidden {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.isHidden;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isHidden {
    return super.isHidden;
  }

  @override
  bool get isImage {
    final _flaxResult = _flaxPeer.call(21, const [], const {});
    if (!_flaxResult.$1) return super.isImage;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isImage {
    return super.isImage;
  }

  @override
  bool get isLiveRegion {
    final _flaxResult = _flaxPeer.call(22, const [], const {});
    if (!_flaxResult.$1) return super.isLiveRegion;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isLiveRegion {
    return super.isLiveRegion;
  }

  @override
  bool get hasImplicitScrolling {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.hasImplicitScrolling;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_hasImplicitScrolling {
    return super.hasImplicitScrolling;
  }

  @override
  bool get isMultiline {
    final _flaxResult = _flaxPeer.call(24, const [], const {});
    if (!_flaxResult.$1) return super.isMultiline;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isMultiline {
    return super.isMultiline;
  }

  @override
  bool get isReadOnly {
    final _flaxResult = _flaxPeer.call(25, const [], const {});
    if (!_flaxResult.$1) return super.isReadOnly;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isReadOnly {
    return super.isReadOnly;
  }

  @override
  bool get isLink {
    final _flaxResult = _flaxPeer.call(26, const [], const {});
    if (!_flaxResult.$1) return super.isLink;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isLink {
    return super.isLink;
  }

  @override
  bool get isSlider {
    final _flaxResult = _flaxPeer.call(27, const [], const {});
    if (!_flaxResult.$1) return super.isSlider;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isSlider {
    return super.isSlider;
  }

  @override
  bool get isKeyboardKey {
    final _flaxResult = _flaxPeer.call(28, const [], const {});
    if (!_flaxResult.$1) return super.isKeyboardKey;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isKeyboardKey {
    return super.isKeyboardKey;
  }
}

final class _SemanticsUpdateProxy implements api.SemanticsUpdate {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsUpdateProxy(this._flaxPeer);
  @override
  void dispose() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: dispose');
    }
    return;
  }
}

final class _SemanticsUpdateBuilderProxy implements api.SemanticsUpdateBuilder {
  final FlaxProxyPeer _flaxPeer;
  _SemanticsUpdateBuilderProxy(this._flaxPeer);
  @override
  void updateNode({
    required int id,
    required api.SemanticsFlags flags,
    required int actions,
    required int maxValueLength,
    required int currentValueLength,
    required int textSelectionBase,
    required int textSelectionExtent,
    required int platformViewId,
    required int scrollChildren,
    required int scrollIndex,
    required int traversalParent,
    required double scrollPosition,
    required double scrollExtentMax,
    required double scrollExtentMin,
    required api.Rect rect,
    required String identifier,
    required String label,
    required List<api.StringAttribute> labelAttributes,
    required String value,
    required List<api.StringAttribute> valueAttributes,
    required String increasedValue,
    required List<api.StringAttribute> increasedValueAttributes,
    required String decreasedValue,
    required List<api.StringAttribute> decreasedValueAttributes,
    required String hint,
    required List<api.StringAttribute> hintAttributes,
    required String tooltip,
    required api.TextDirection? textDirection,
    required api1.Float64List transform,
    required api1.Float64List hitTestTransform,
    required api1.Int32List childrenInTraversalOrder,
    required api1.Int32List childrenInHitTestOrder,
    required api1.Int32List additionalActions,
    Object? headingLevel = _flaxOmitted,
    Object? linkUrl = _flaxOmitted,
    Object? role = _flaxOmitted,
    required List<String>? controlsNodes,
    Object? validationResult = _flaxOmitted,
    Object? hitTestBehavior = _flaxOmitted,
    required api.SemanticsInputType inputType,
    required api.Locale? locale,
    required String minValue,
    required String maxValue,
  }) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      "id": id,
      "flags": flags,
      "actions": actions,
      "maxValueLength": maxValueLength,
      "currentValueLength": currentValueLength,
      "textSelectionBase": textSelectionBase,
      "textSelectionExtent": textSelectionExtent,
      "platformViewId": platformViewId,
      "scrollChildren": scrollChildren,
      "scrollIndex": scrollIndex,
      "traversalParent": traversalParent,
      "scrollPosition": scrollPosition,
      "scrollExtentMax": scrollExtentMax,
      "scrollExtentMin": scrollExtentMin,
      "rect": rect,
      "identifier": identifier,
      "label": label,
      "labelAttributes": labelAttributes,
      "value": value,
      "valueAttributes": valueAttributes,
      "increasedValue": increasedValue,
      "increasedValueAttributes": increasedValueAttributes,
      "decreasedValue": decreasedValue,
      "decreasedValueAttributes": decreasedValueAttributes,
      "hint": hint,
      "hintAttributes": hintAttributes,
      "tooltip": tooltip,
      "textDirection": textDirection,
      "transform": transform,
      "hitTestTransform": hitTestTransform,
      "childrenInTraversalOrder": childrenInTraversalOrder,
      "childrenInHitTestOrder": childrenInHitTestOrder,
      "additionalActions": additionalActions,
      if (!identical(headingLevel, _flaxOmitted)) "headingLevel": headingLevel,
      if (!identical(linkUrl, _flaxOmitted)) "linkUrl": linkUrl,
      if (!identical(role, _flaxOmitted)) "role": role,
      "controlsNodes": controlsNodes,
      if (!identical(validationResult, _flaxOmitted))
        "validationResult": validationResult,
      if (!identical(hitTestBehavior, _flaxOmitted))
        "hitTestBehavior": hitTestBehavior,
      "inputType": inputType,
      "locale": locale,
      "minValue": minValue,
      "maxValue": maxValue,
    });
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: updateNode');
    }
    return;
  }

  @override
  void updateCustomAction({
    required int id,
    Object? label = _flaxOmitted,
    Object? hint = _flaxOmitted,
    Object? overrideId = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{
      "id": id,
      if (!identical(label, _flaxOmitted)) "label": label,
      if (!identical(hint, _flaxOmitted)) "hint": hint,
      if (!identical(overrideId, _flaxOmitted)) "overrideId": overrideId,
    });
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: updateCustomAction');
    }
    return;
  }

  @override
  api.SemanticsUpdate build() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: build');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.SemanticsUpdate;
    return _flaxConvertedResult;
  }
}

final class _ShadowProxy extends api.Shadow
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _ShadowProxy(
    this._flaxPeer, {
    api.Color super.color,
    api.Offset super.offset,
    double super.blurRadius,
  });
  @override
  api.Paint toPaint() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toPaint();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Paint;
    return _flaxConvertedResult;
  }

  api.Paint _flaxSuper_toPaint() {
    return super.toPaint();
  }

  @override
  api.Shadow scale(double factor) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      factor,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_scale(factor);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Shadow;
    return _flaxConvertedResult;
  }

  api.Shadow _flaxSuper_scale(double factor) {
    return super.scale(factor);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.Color get color {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.color;
    final _flaxConvertedResult = _flaxResult.$2 as api.Color;
    return _flaxConvertedResult;
  }

  api.Color get _flaxSuperGet_color {
    return super.color;
  }

  @override
  api.Offset get offset => _FlaxProxyDispatch1_get_offset(this, 4);
  api.Offset get _flaxSuperGet_offset {
    return super.offset;
  }

  @override
  double get blurRadius {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.blurRadius;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_blurRadius {
    return super.blurRadius;
  }

  @override
  double get blurSigma {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.blurSigma;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_blurSigma {
    return super.blurSigma;
  }
}

final class _SpellOutStringAttributeProxy extends api.SpellOutStringAttribute
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch6 {
  final FlaxProxyPeer _flaxPeer;
  _SpellOutStringAttributeProxy(
    this._flaxPeer, {
    required api.TextRange super.range,
  });
  @override
  api.StringAttribute copy({required api.TextRange range}) {
    return _FlaxProxyDispatch6_call_copy(this, 0, range: range);
  }

  api.StringAttribute _flaxSuper_copy({required api.TextRange range}) {
    return super.copy(range: range);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.TextRange get range => _FlaxProxyDispatch6_get_range(this, 2);
  api.TextRange get _flaxSuperGet_range {
    return super.range;
  }
}

final class _TangentProxy extends api.Tangent {
  final FlaxProxyPeer _flaxPeer;
  _TangentProxy(
    this._flaxPeer,
    api.Offset super.position,
    api.Offset super.vector,
  );
  @override
  api.Offset get position {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.position;
    final _flaxConvertedResult = _flaxResult.$2 as api.Offset;
    return _flaxConvertedResult;
  }

  api.Offset get _flaxSuperGet_position {
    return super.position;
  }

  @override
  api.Offset get vector {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.vector;
    final _flaxConvertedResult = _flaxResult.$2 as api.Offset;
    return _flaxConvertedResult;
  }

  api.Offset get _flaxSuperGet_vector {
    return super.vector;
  }

  @override
  double get angle {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.angle;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_angle {
    return super.angle;
  }
}

final class _TargetImageSizeProxy extends api.TargetImageSize
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _TargetImageSizeProxy(this._flaxPeer, {int? super.width, int? super.height});
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  int? get width {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.width;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_width {
    return super.width;
  }

  @override
  int? get height {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.height;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_height {
    return super.height;
  }
}

final class _TextBoxProxy extends api.TextBox
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch5 {
  final FlaxProxyPeer _flaxPeer;
  _TextBoxProxy.fromLTRBD(
    this._flaxPeer,
    double super.left,
    double super.top,
    double super.right,
    double super.bottom,
    api.TextDirection super.direction,
  ) : super.fromLTRBD();
  @override
  api.Rect toRect() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toRect();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Rect;
    return _flaxConvertedResult;
  }

  api.Rect _flaxSuper_toRect() {
    return super.toRect();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get left => _FlaxProxyDispatch5_get_left(this, 2);
  double get _flaxSuperGet_left {
    return super.left;
  }

  @override
  double get top {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.top;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_top {
    return super.top;
  }

  @override
  double get right {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.right;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_right {
    return super.right;
  }

  @override
  double get bottom {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.bottom;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_bottom {
    return super.bottom;
  }

  @override
  api.TextDirection get direction {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.direction;
    final _flaxConvertedResult = _flaxResult.$2 as api.TextDirection;
    return _flaxConvertedResult;
  }

  api.TextDirection get _flaxSuperGet_direction {
    return super.direction;
  }

  @override
  double get start {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.start;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_start {
    return super.start;
  }

  @override
  double get end {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.end;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_end {
    return super.end;
  }
}

final class _TextHeightBehaviorProxy extends api.TextHeightBehavior
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _TextHeightBehaviorProxy(
    this._flaxPeer, {
    bool super.applyHeightToFirstAscent,
    bool super.applyHeightToLastDescent,
    api.TextLeadingDistribution super.leadingDistribution,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  bool get applyHeightToFirstAscent {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.applyHeightToFirstAscent;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_applyHeightToFirstAscent {
    return super.applyHeightToFirstAscent;
  }

  @override
  bool get applyHeightToLastDescent {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.applyHeightToLastDescent;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_applyHeightToLastDescent {
    return super.applyHeightToLastDescent;
  }

  @override
  api.TextLeadingDistribution get leadingDistribution {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.leadingDistribution;
    final _flaxConvertedResult = _flaxResult.$2 as api.TextLeadingDistribution;
    return _flaxConvertedResult;
  }

  api.TextLeadingDistribution get _flaxSuperGet_leadingDistribution {
    return super.leadingDistribution;
  }
}

final class _TextPositionProxy extends api.TextPosition
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _TextPositionProxy(
    this._flaxPeer, {
    required int super.offset,
    api.TextAffinity super.affinity,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  int get offset {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.offset;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_offset {
    return super.offset;
  }

  @override
  api.TextAffinity get affinity {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.affinity;
    final _flaxConvertedResult = _flaxResult.$2 as api.TextAffinity;
    return _flaxConvertedResult;
  }

  api.TextAffinity get _flaxSuperGet_affinity {
    return super.affinity;
  }
}

final class _TextStyleProxy extends api.TextStyle
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _TextStyleProxy(
    this._flaxPeer, {
    api.Color? super.color,
    api.TextDecoration? super.decoration,
    api.Color? super.decorationColor,
    api.TextDecorationStyle? super.decorationStyle,
    double? super.decorationThickness,
    api.FontWeight? super.fontWeight,
    api.FontStyle? super.fontStyle,
    api.TextBaseline? super.textBaseline,
    String? super.fontFamily,
    List<String>? super.fontFamilyFallback,
    double? super.fontSize,
    double? super.letterSpacing,
    double? super.wordSpacing,
    double? super.height,
    api.TextLeadingDistribution? super.leadingDistribution,
    api.Locale? super.locale,
    api.Paint? super.background,
    api.Paint? super.foreground,
    List<api.Shadow>? super.shadows,
    List<api.FontFeature>? super.fontFeatures,
    List<api.FontVariation>? super.fontVariations,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }
}

final class _VerticesProxy extends api.Vertices implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _VerticesProxy(
    this._flaxPeer,
    api.VertexMode super.mode,
    List<api.Offset> super.positions, {
    List<api.Color>? super.colors,
    List<api.Offset>? super.textureCoordinates,
    List<int>? super.indices,
  });
  _VerticesProxy.raw(
    this._flaxPeer,
    api.VertexMode super.mode,
    api1.Float32List super.positions, {
    api1.Int32List? super.colors,
    api1.Float32List? super.textureCoordinates,
    api1.Uint16List? super.indices,
  }) : super.raw();
  @override
  void dispose() {
    return _FlaxProxyDispatch2_call_dispose(this, 0);
  }

  void _flaxSuper_dispose() {
    super.dispose();
    return;
  }

  @override
  bool get debugDisposed => _FlaxProxyDispatch2_get_debugDisposed(this, 1);
  bool get _flaxSuperGet_debugDisposed {
    return super.debugDisposed;
  }
}

final class _ViewConstraintsProxy extends api.ViewConstraints
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _ViewConstraintsProxy(
    this._flaxPeer, {
    double super.minWidth,
    double super.maxWidth,
    double super.minHeight,
    double super.maxHeight,
  });
  _ViewConstraintsProxy.tight(this._flaxPeer, api.Size super.size)
    : super.tight();
  @override
  bool isSatisfiedBy(api.Size size) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[size], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_isSatisfiedBy(size);
    }
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool _flaxSuper_isSatisfiedBy(api.Size size) {
    return super.isSatisfiedBy(size);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.ViewConstraints operator /(double factor) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[
      factor,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_operatorDivide(factor);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.ViewConstraints;
    return _flaxConvertedResult;
  }

  api.ViewConstraints _flaxSuper_operatorDivide(double factor) {
    return super / (factor);
  }

  @override
  double get minWidth {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.minWidth;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_minWidth {
    return super.minWidth;
  }

  @override
  double get maxWidth {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.maxWidth;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_maxWidth {
    return super.maxWidth;
  }

  @override
  double get minHeight {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.minHeight;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_minHeight {
    return super.minHeight;
  }

  @override
  double get maxHeight {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.maxHeight;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_maxHeight {
    return super.maxHeight;
  }

  @override
  bool get isTight {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.isTight;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isTight {
    return super.isTight;
  }
}

final class _ViewPaddingProxy implements api.ViewPadding {
  final FlaxProxyPeer _flaxPeer;
  _ViewPaddingProxy(this._flaxPeer);
  @override
  String toString() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: toString');
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  @override
  double get left {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double get top {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double get right {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  @override
  double get bottom {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }
}

Function _flaxGenericFunction9<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Map<String, Object?> values) {
        return api.runOnPlatformThread<_Method0>(
          values["computation"] as api3.FutureOr<_Method0> Function(),
        );
      }

      Object _callback0(FlaxCallback _flaxBridgeCallback) => () {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        return _flaxBridgeCallback.call(positional, named)
            as api3.FutureOr<_Method0>;
      };
      bool _callback0Matches(Object value) =>
          value is api3.FutureOr<_Method0> Function();
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function as api3.FutureOr<_Method0> Function())();
      }

      return FlaxFunctionBinding(
        "flax.core/sdk_dart_ui#function:runOnPlatformThread",
        <FlaxParameter>[
          FlaxParameter.required(
            "computation",
            types.define<api3.FutureOr<_Method0> Function()>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [],
                  types.ref<api3.FutureOr<_Method0>>(withinCallback: true),
                  _callback0,
                  id:
                      types.key<api3.FutureOr<_Method0> Function()>() +
                      ":callback:<>()->futureOr:[parameter:]",
                  invoke: _callback0Invoke,
                  matches: _callback0Matches,
                ),
              ),
            ),
          ),
        ],
        types.ref<Future<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_PathMetrics_cast<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.PathMetrics).cast<_Method0>();
      }

      return FlaxInstanceMethod.plain(
        _flaxBinding200,
        types.ref<Iterable<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_PathMetrics_map<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.PathMetrics).map<_Method0>(
          values["toElement"] as _Method0 Function(api.PathMetric e),
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "toElement",
            types.define<_Method0 Function(api.PathMetric e)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("e", _flaxBinding869)],
                  types.ref<_Method0>(withinCallback: true),
                  FlaxCallbackAdapters.wrap1<api.PathMetric, _Method0>,
                  id: types.key<_Method0 Function(api.PathMetric e)>() + ":callback:<>(p:r:e:object:flax.core/sdk_dart_ui#type:PathMetric)->parameter:",
                  invoke:
                      FlaxCallbackAdapters.invoke1<api.PathMetric, _Method0>,
                  matches:
                      FlaxCallbackAdapters.matches1<api.PathMetric, _Method0>,
                ),
              ),
            ),
          ),
        ],
        types.ref<Iterable<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_PathMetrics_whereType<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.PathMetrics).whereType<_Method0>();
      }

      return FlaxInstanceMethod.plain(
        _flaxBinding200,
        types.ref<Iterable<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_PathMetrics_expand<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.PathMetrics).expand<_Method0>(
          values["toElements"]
              as Iterable<_Method0> Function(api.PathMetric element),
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "toElements",
            types.define<Iterable<_Method0> Function(api.PathMetric element)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("element", _flaxBinding869)],
                  types.ref<Iterable<_Method0>>(withinCallback: true),
                  FlaxCallbackAdapters
                      .wrap1<api.PathMetric, Iterable<_Method0>>,
                  id:
                      types
                          .key<
                            Iterable<_Method0> Function(api.PathMetric element)
                          >() +
                      ":callback:<>(p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->iterable:[parameter:]",
                  invoke: FlaxCallbackAdapters
                      .invoke1<api.PathMetric, Iterable<_Method0>>,
                  matches: FlaxCallbackAdapters
                      .matches1<api.PathMetric, Iterable<_Method0>>,
                ),
              ),
            ),
          ),
        ],
        types.ref<Iterable<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_PathMetrics_fold<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.PathMetrics).fold<_Method0>(
          values["initialValue"] as _Method0,
          values["combine"]
              as _Method0 Function(
                _Method0 previousValue,
                api.PathMetric element,
              ),
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required("initialValue", types.ref<_Method0>()),
          FlaxParameter.required(
            "combine",
            types.define<
              _Method0 Function(_Method0 previousValue, api.PathMetric element)
            >(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter.plain(
                      "previousValue",
                      types.ref<_Method0>(withinCallback: true),
                    ),
                    FlaxCallbackParameter.plain("element", _flaxBinding869),
                  ],
                  types.ref<_Method0>(withinCallback: true),
                  FlaxCallbackAdapters
                      .wrap2<_Method0, api.PathMetric, _Method0>,
                  id:
                      types
                          .key<
                            _Method0 Function(
                              _Method0 previousValue,
                              api.PathMetric element,
                            )
                          >() +
                      ":callback:<>(p:r:previousValue:parameter:,p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->parameter:",
                  invoke: FlaxCallbackAdapters
                      .invoke2<_Method0, api.PathMetric, _Method0>,
                  matches: FlaxCallbackAdapters
                      .matches2<_Method0, api.PathMetric, _Method0>,
                ),
              ),
            ),
          ),
        ],
        types.ref<_Method0>(),
        invoke,
      );
    };
Type _flaxType_UniformArray<_Owner0 extends api.UniformType>() =>
    api.UniformArray<_Owner0>;
Function _flaxClass_UniformArray<_Owner0 extends api.UniformType>() =>
    (FlaxDartTypes types, String id) {
      // ignore: unused_element
      bool _isUniformArray(Object value) => value is api.UniformArray<_Owner0>;
      // ignore: unused_element
      Object? _UniformArray_length(Object value) =>
          (value as api.UniformArray<_Owner0>).length;
      Object? _UniformArray_operatorGetIndex(
        Object receiver,
        Map<String, Object?> values,
      ) {
        return (receiver as api.UniformArray<_Owner0>)[values["index"] as int];
      }

      // ignore: unused_element
      Object _createUniformArray(String ctor, Map<String, Object?> values) {
        switch (ctor) {
          default:
            throw ArgumentError("Unknown constructor");
        }
      }

      return FlaxDartClass(
        api.UniformArray<_Owner0>,
        FlaxObjectBinding(
          id,
          [FlaxGetter.plain("length", flaxIntType, _UniformArray_length)],
          {
            "operatorGetIndex": FlaxInstanceMethod.plain(
              _flaxBinding922,
              types.ref<_Owner0>(),
              _UniformArray_operatorGetIndex,
            ),
          },
          constructors: {},
          create: _createUniformArray,
          matches: _isUniformArray,
          setters: [],
          supertypes: [
            "flax.core/sdk_dart_ui#type:UniformArray",
            ...["dart:core::Object"],
          ],
          listenerPairs: {},
          disposeMethod: null,
        ),
      );
    };
const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[1,1,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[2,2,[],[]]]", _flaxShape1),
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape2),
  FlaxDartShapeTemplate("[\"callback\",[3,3,[],[]]]", _flaxShape3),
  FlaxDartShapeTemplate(
    "[\"callback\",[0,0,[\"allowPlatformDefault\"],[false]]]",
    _flaxShape4,
  ),
];
Function _flaxShape0<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape1 Function(_Shape0 data)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "data",
                types.ref<_Shape0>(withinCallback: true),
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            FlaxCallbackAdapters.wrap1<_Shape0, _Shape1>,
            id:
                types.key<_Shape1 Function(_Shape0 data)>() +
                ":callback:<>(p:r:data:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke1<_Shape0, _Shape1>,
            matches: FlaxCallbackAdapters.matches1<_Shape0, _Shape1>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape1<_Shape0, _Shape1, _Shape2>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape2 Function(_Shape0 data, _Shape1 callback)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "data",
                types.ref<_Shape0>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "callback",
                types.ref<_Shape1>(withinCallback: true),
              ),
            ],
            types.ref<_Shape2>(withinCallback: true),
            FlaxCallbackAdapters.wrap2<_Shape0, _Shape1, _Shape2>,
            id: types.key<_Shape2 Function(_Shape0 data, _Shape1 callback)>() + ":callback:<>(p:r:data:parameter:,p:r:callback:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke2<_Shape0, _Shape1, _Shape2>,
            matches: FlaxCallbackAdapters.matches2<_Shape0, _Shape1, _Shape2>,
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
Function _flaxShape3<_Shape0, _Shape1, _Shape2, _Shape3>() =>
    (FlaxDartTypes types, bool withinCallback) {
      Object _callback0(FlaxCallback _flaxBridgeCallback) =>
          (_Shape0 p0, _Shape1 p1, _Shape2 p2) {
            final positional = <Object?>[];
            final named = <String, Object?>{};
            positional.add(p0);
            positional.add(p1);
            positional.add(p2);
            return _flaxBridgeCallback.call(positional, named) as _Shape3;
          };
      bool _callback0Matches(Object value) =>
          value
              is _Shape3 Function(_Shape0 name, _Shape1 data, _Shape2 callback);
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function
            as _Shape3 Function(_Shape0 name, _Shape1 data, _Shape2 callback))(
          positional[0] as _Shape0,
          positional[1] as _Shape1,
          positional[2] as _Shape2,
        );
      }

      return types.define<
        _Shape3 Function(_Shape0 name, _Shape1 data, _Shape2 callback)
      >(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "name",
                types.ref<_Shape0>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "data",
                types.ref<_Shape1>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "callback",
                types.ref<_Shape2>(withinCallback: true),
              ),
            ],
            types.ref<_Shape3>(withinCallback: true),
            _callback0,
            id:
                types
                    .key<
                      _Shape3 Function(
                        _Shape0 name,
                        _Shape1 data,
                        _Shape2 callback,
                      )
                    >() +
                ":callback:<>(p:r:name:parameter:,p:r:data:parameter:,p:r:callback:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape4<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      Object _callback0(FlaxCallback _flaxBridgeCallback) =>
          ({Object? allowPlatformDefault = _flaxOmitted}) {
            final positional = <Object?>[];
            final named = <String, Object?>{};
            if (!identical(allowPlatformDefault, _flaxOmitted))
              named["allowPlatformDefault"] = allowPlatformDefault;
            return _flaxBridgeCallback.call(positional, named) as _Shape1;
          };
      bool _callback0Matches(Object value) =>
          value is _Shape1 Function({_Shape0 allowPlatformDefault});
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        if (!named.containsKey("allowPlatformDefault")) {
          return (function
              as _Shape1 Function({_Shape0 allowPlatformDefault}))();
        }
        return (function as _Shape1 Function({_Shape0 allowPlatformDefault}))(
          allowPlatformDefault: named["allowPlatformDefault"] as _Shape0,
        );
      }

      return types.define<_Shape1 Function({_Shape0 allowPlatformDefault})>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "allowPlatformDefault",
                types.ref<_Shape0>(withinCallback: true),
                required: false,
                positional: false,
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            _callback0,
            id:
                types.key<_Shape1 Function({_Shape0 allowPlatformDefault})>() +
                ":callback:<>(n:o:allowPlatformDefault:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Object _callback0(FlaxCallback _flaxBridgeCallback) =>
    (api1.ByteData? p0, void Function(api1.ByteData? data) p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
          .then<void>((value) => null);
    };
bool _callback0Matches(Object value) =>
    value
        is Future<void> Function(
          api1.ByteData? data,
          void Function(api1.ByteData? data) callback,
        );
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as Future<void> Function(
        api1.ByteData? data,
        void Function(api1.ByteData? data) callback,
      ))(
    positional[0] as api1.ByteData?,
    positional[1] as void Function(api1.ByteData? data),
  );
}

Object _callback1(FlaxCallback _flaxBridgeCallback) => (api.PathMetric p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named);
};
bool _callback1Matches(Object value) =>
    value is Object? Function(api.PathMetric e);
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(api.PathMetric e))(
    positional[0] as api.PathMetric,
  );
}

Object _callback2(FlaxCallback _flaxBridgeCallback) => (api.PathMetric p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as Iterable<Object?>;
};
bool _callback2Matches(Object value) =>
    value is Iterable<Object?> Function(api.PathMetric element);
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Iterable<Object?> Function(api.PathMetric element))(
    positional[0] as api.PathMetric,
  );
}

Object _callback3(FlaxCallback _flaxBridgeCallback) =>
    (Object? p0, api.PathMetric p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return _flaxBridgeCallback.call(positional, named);
    };
bool _callback3Matches(Object value) =>
    value is Object? Function(Object? previousValue, api.PathMetric element);
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as Object? Function(Object? previousValue, api.PathMetric element))(
    positional[0],
    positional[1] as api.PathMetric,
  );
}

Object _callback4(FlaxCallback _flaxBridgeCallback) =>
    (String p0, api1.ByteData? p1, void Function(api1.ByteData? data)? p2) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      _flaxBridgeCallback.call(positional, named);
    };
bool _callback4Matches(Object value) =>
    value
        is void Function(
          String name,
          api1.ByteData? data,
          void Function(api1.ByteData? data)? callback,
        );
Object? _callback4Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function
      as void Function(
        String name,
        api1.ByteData? data,
        void Function(api1.ByteData? data)? callback,
      ))(
    positional[0] as String,
    positional[1] as api1.ByteData?,
    positional[2] as void Function(api1.ByteData? data)?,
  );
  return null;
}

Object _callback5(FlaxCallback _flaxBridgeCallback) =>
    ({Object? allowPlatformDefault = _flaxOmitted}) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      if (!identical(allowPlatformDefault, _flaxOmitted))
        named["allowPlatformDefault"] = allowPlatformDefault;
      _flaxBridgeCallback.call(positional, named);
    };
bool _callback5Matches(Object value) =>
    value is void Function({bool allowPlatformDefault});
Object? _callback5Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  if (!named.containsKey("allowPlatformDefault")) {
    (function as void Function({bool allowPlatformDefault}))();
    return null;
  }
  (function as void Function({bool allowPlatformDefault}))(
    allowPlatformDefault: named["allowPlatformDefault"] as bool,
  );
  return null;
}

Object _callback6(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return _flaxBridgeCallback.call(positional, named) as api3.FutureOr<Object?>;
};
bool _callback6Matches(Object value) =>
    value is api3.FutureOr<Object?> Function();
Object? _callback6Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<Object?> Function())();
}

Object _collection0Create() => <api.Offset>[];
bool _collection0Matches(Object value) => value is List<api.Offset>;
Object _collection1Create() => <api.Offset>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Offset>();
bool _collection1Matches(Object value) => value is Iterable<api.Offset>;
Object _collection2Create() => <api.RSTransform>[];
bool _collection2Matches(Object value) => value is List<api.RSTransform>;
Object _collection3Create() => <api.RSTransform>[];
Object _collection3Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.RSTransform>();
bool _collection3Matches(Object value) => value is Iterable<api.RSTransform>;
Object _collection4Create() => <api.Rect>[];
bool _collection4Matches(Object value) => value is List<api.Rect>;
Object _collection5Create() => <api.Rect>[];
Object _collection5Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Rect>();
bool _collection5Matches(Object value) => value is Iterable<api.Rect>;
Object _collection6Create() => <api.Color>[];
bool _collection6Matches(Object value) => value is List<api.Color>;
Object _collection7Create() => <api.Color>[];
Object _collection7Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Color>();
bool _collection7Matches(Object value) => value is Iterable<api.Color>;
Object _collection8Create() => <api.TextBox>[];
bool _collection8Matches(Object value) => value is List<api.TextBox>;
Object _collection9Create() => <api.TextBox>[];
Object _collection9Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.TextBox>();
bool _collection9Matches(Object value) => value is Iterable<api.TextBox>;
Object _collection10Create() => <api.LineMetrics>[];
bool _collection10Matches(Object value) => value is List<api.LineMetrics>;
Object _collection11Create() => <api.LineMetrics>[];
Object _collection11Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.LineMetrics>();
bool _collection11Matches(Object value) => value is Iterable<api.LineMetrics>;
Object _collection12Create() => <double>[];
bool _collection12Matches(Object value) => value is List<double>;
Object _collection13Create() => <double>[];
Object _collection13Restore(Object value) =>
    (value as Iterable<Object?>).cast<double>();
bool _collection13Matches(Object value) => value is Iterable<double>;
Object _collection14Create() => <api.PointerData>[];
bool _collection14Matches(Object value) => value is List<api.PointerData>;
Object _collection15Create() => <api.PointerData>[];
Object _collection15Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.PointerData>();
bool _collection15Matches(Object value) => value is Iterable<api.PointerData>;
Object _collection16Create() => <String>[];
bool _collection16Matches(Object value) => value is List<String>;
Object _collection17Create() => <String>[];
Object _collection17Restore(Object value) =>
    (value as Iterable<Object?>).cast<String>();
bool _collection17Matches(Object value) => value is Iterable<String>;
Object _collection18Create() => <api.DisplayFeature>[];
bool _collection18Matches(Object value) => value is List<api.DisplayFeature>;
Object _collection19Create() => <api.DisplayFeature>[];
Object _collection19Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.DisplayFeature>();
bool _collection19Matches(Object value) =>
    value is Iterable<api.DisplayFeature>;
Object _collection20Create() => <api2.StackTrace>[];
bool _collection20Matches(Object value) => value is List<api2.StackTrace>;
Object _collection21Create() => <api2.StackTrace>[];
Object _collection21Restore(Object value) =>
    (value as Iterable<Object?>).cast<api2.StackTrace>();
bool _collection21Matches(Object value) => value is Iterable<api2.StackTrace>;
Object _collection22Create() => <Object?>[];
Object _collection22Restore(Object value) =>
    (value as Iterable<Object?>).cast<Object?>();
bool _collection22Matches(Object value) => value is Iterable<Object?>;
Object _collection23Create() => <api.PathMetric>[];
Object _collection23Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.PathMetric>();
bool _collection23Matches(Object value) => value is Iterable<api.PathMetric>;
Object _collection24Create() => <api.PathMetric>[];
bool _collection24Matches(Object value) => value is List<api.PathMetric>;
Object _collection25Create() => <api.PathMetric>{};
bool _collection25Matches(Object value) => value is Set<api.PathMetric>;
Object _collection26Create() => <api.Display>[];
Object _collection26Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Display>();
bool _collection26Matches(Object value) => value is Iterable<api.Display>;
Object _collection27Create() => <api.FlutterView>[];
Object _collection27Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.FlutterView>();
bool _collection27Matches(Object value) => value is Iterable<api.FlutterView>;
Object _collection28Create() => <api.FrameTiming>[];
bool _collection28Matches(Object value) => value is List<api.FrameTiming>;
Object _collection29Create() => <api.FrameTiming>[];
Object _collection29Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.FrameTiming>();
bool _collection29Matches(Object value) => value is Iterable<api.FrameTiming>;
Object _collection30Create() => <api.Locale>[];
bool _collection30Matches(Object value) => value is List<api.Locale>;
Object _collection31Create() => <api.Locale>[];
Object _collection31Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Locale>();
bool _collection31Matches(Object value) => value is Iterable<api.Locale>;
Object _collection32Create() => <api.StringAttribute>[];
bool _collection32Matches(Object value) => value is List<api.StringAttribute>;
Object _collection33Create() => <api.StringAttribute>[];
Object _collection33Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.StringAttribute>();
bool _collection33Matches(Object value) =>
    value is Iterable<api.StringAttribute>;
Object _collection34Create() => <api.TextDecoration>[];
bool _collection34Matches(Object value) => value is List<api.TextDecoration>;
Object _collection35Create() => <api.TextDecoration>[];
Object _collection35Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.TextDecoration>();
bool _collection35Matches(Object value) =>
    value is Iterable<api.TextDecoration>;
Object _collection36Create() => <api.Shadow>[];
bool _collection36Matches(Object value) => value is List<api.Shadow>;
Object _collection37Create() => <api.Shadow>[];
Object _collection37Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Shadow>();
bool _collection37Matches(Object value) => value is Iterable<api.Shadow>;
Object _collection38Create() => <api.FontFeature>[];
bool _collection38Matches(Object value) => value is List<api.FontFeature>;
Object _collection39Create() => <api.FontFeature>[];
Object _collection39Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.FontFeature>();
bool _collection39Matches(Object value) => value is Iterable<api.FontFeature>;
Object _collection40Create() => <api.FontVariation>[];
bool _collection40Matches(Object value) => value is List<api.FontVariation>;
Object _collection41Create() => <api.FontVariation>[];
Object _collection41Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.FontVariation>();
bool _collection41Matches(Object value) => value is Iterable<api.FontVariation>;
Object _collection42Create() => <int>[];
bool _collection42Matches(Object value) => value is List<int>;
Object _collection43Create() => <int>[];
Object _collection43Restore(Object value) =>
    (value as Iterable<Object?>).cast<int>();
bool _collection43Matches(Object value) => value is Iterable<int>;
Object _collection44Create() => <api.SemanticsAction>[];
bool _collection44Matches(Object value) => value is List<api.SemanticsAction>;
Object _collection45Create() => <api.SemanticsAction>[];
Object _collection45Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.SemanticsAction>();
bool _collection45Matches(Object value) =>
    value is Iterable<api.SemanticsAction>;
Object _collection46Create() => <api.SemanticsFlag>[];
bool _collection46Matches(Object value) => value is List<api.SemanticsFlag>;
Object _collection47Create() => <api.SemanticsFlag>[];
Object _collection47Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.SemanticsFlag>();
bool _collection47Matches(Object value) => value is Iterable<api.SemanticsFlag>;
Future<Object?> _future0Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> _future1Adapt(Future<Object?> value) =>
    value.then<api.FrameInfo>((value) => value as api.FrameInfo);
Future<Object?> _future2Adapt(Future<Object?> value) =>
    value.then<api.Image>((value) => value as api.Image);
Future<Object?> _future3Adapt(Future<Object?> value) =>
    value.then<api1.ByteData?>((value) => value as api1.ByteData?);
Future<Object?> _future4Adapt(Future<Object?> value) =>
    value.then<api.Codec>((value) => value as api.Codec);
Future<Object?> _future5Adapt(Future<Object?> value) => value;
Future<Object?> _future6Adapt(Future<Object?> value) =>
    value.then<api.FragmentProgram>((value) => value as api.FragmentProgram);
Future<Object?> _future7Adapt(Future<Object?> value) =>
    value.then<api.ImageDescriptor>((value) => value as api.ImageDescriptor);
Future<Object?> _future8Adapt(Future<Object?> value) =>
    value.then<api.ImmutableBuffer>((value) => value as api.ImmutableBuffer);
const _flaxBinding0 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Rect",
  nullable: true,
);
const _flaxBinding1 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Paint",
);
const _flaxBinding2 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("bounds", _flaxBinding0),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:bounds:object?:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding3 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("count", flaxIntType)],
  flaxVoidType,
  id: "callback:<>(p:r:count:int:)->void:",
);
const _flaxBinding4 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("dx", flaxDoubleType),
    FlaxCallbackParameter.plain("dy", flaxDoubleType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:dx:double:,p:r:dy:double:)->void:",
);
const _flaxBinding5 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("radians", flaxDoubleType)],
  flaxVoidType,
  id: "callback:<>(p:r:radians:double:)->void:",
);
const _flaxBinding6 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("sx", flaxDoubleType),
    FlaxCallbackParameter.plain("sy", flaxDoubleType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:sx:double:,p:r:sy:double:)->void:",
);
const _flaxBinding7 = FlaxTypeRef("Float64List");
const _flaxBinding8 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("matrix4", _flaxBinding7)],
  flaxVoidType,
  id: "callback:<>(p:r:matrix4:Float64List:)->void:",
);
const _flaxBinding9 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding7,
  id: "callback:<>()->Float64List:",
);
const _flaxBinding10 = FlaxCallbackBinding.signature(
  [],
  flaxRectType,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding11 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BlendMode",
);
const _flaxBinding12 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("color", flaxColorType),
    FlaxCallbackParameter.plain("blendMode", _flaxBinding11),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:color:object:flax.core/flutter#type:Color,p:r:blendMode:enum:flax.core/sdk_dart_ui#type:BlendMode)->void:",
);
const _flaxBinding13 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("p1", flaxOffsetType),
    FlaxCallbackParameter.plain("p2", flaxOffsetType),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:p1:object:flax.core/flutter#type:Offset,p:r:p2:object:flax.core/flutter#type:Offset,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding14 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("paint", _flaxBinding1)],
  flaxVoidType,
  id: "callback:<>(p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding15 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rect", flaxRectType),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding16 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RRect",
);
const _flaxBinding17 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rrect", _flaxBinding16),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:rrect:object:flax.core/sdk_dart_ui#type:RRect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding18 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("outer", _flaxBinding16),
    FlaxCallbackParameter.plain("inner", _flaxBinding16),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:outer:object:flax.core/sdk_dart_ui#type:RRect,p:r:inner:object:flax.core/sdk_dart_ui#type:RRect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding19 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RSuperellipse",
);
const _flaxBinding20 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rsuperellipse", _flaxBinding19),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:rsuperellipse:object:flax.core/sdk_dart_ui#type:RSuperellipse,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding21 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("c", flaxOffsetType),
    FlaxCallbackParameter.plain("radius", flaxDoubleType),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:c:object:flax.core/flutter#type:Offset,p:r:radius:double:,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding22 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rect", flaxRectType),
    FlaxCallbackParameter.plain("startAngle", flaxDoubleType),
    FlaxCallbackParameter.plain("sweepAngle", flaxDoubleType),
    FlaxCallbackParameter.plain("useCenter", flaxBoolType),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,p:r:startAngle:double:,p:r:sweepAngle:double:,p:r:useCenter:bool:,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding23 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("path", flaxPathType),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding24 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Image",
);
const _flaxBinding25 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("image", _flaxBinding24),
    FlaxCallbackParameter.plain("offset", flaxOffsetType),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:image:object:flax.core/sdk_dart_ui#type:Image,p:r:offset:object:flax.core/flutter#type:Offset,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding26 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("image", _flaxBinding24),
    FlaxCallbackParameter.plain("src", flaxRectType),
    FlaxCallbackParameter.plain("dst", flaxRectType),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:image:object:flax.core/sdk_dart_ui#type:Image,p:r:src:object:flax.core/sdk_dart_ui#type:Rect,p:r:dst:object:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding27 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("image", _flaxBinding24),
    FlaxCallbackParameter.plain("center", flaxRectType),
    FlaxCallbackParameter.plain("dst", flaxRectType),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:image:object:flax.core/sdk_dart_ui#type:Image,p:r:center:object:flax.core/sdk_dart_ui#type:Rect,p:r:dst:object:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding28 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Picture",
);
const _flaxBinding29 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("picture", _flaxBinding28)],
  flaxVoidType,
  id: "callback:<>(p:r:picture:object:flax.core/sdk_dart_ui#type:Picture)->void:",
);
const _flaxBinding30 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Paragraph",
);
const _flaxBinding31 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("paragraph", _flaxBinding30),
    FlaxCallbackParameter.plain("offset", flaxOffsetType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:paragraph:object:flax.core/sdk_dart_ui#type:Paragraph,p:r:offset:object:flax.core/flutter#type:Offset)->void:",
);
const _flaxBinding32 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PointMode",
);
const _flaxBinding33 = FlaxTypeRef(
  "iterable",
  item: flaxOffsetType,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Offset]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding34 = FlaxTypeRef(
  "list",
  item: flaxOffsetType,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Offset]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding33,
);
const _flaxBinding35 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("pointMode", _flaxBinding32),
    FlaxCallbackParameter.plain("points", _flaxBinding34),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:pointMode:enum:flax.core/sdk_dart_ui#type:PointMode,p:r:points:list:[object:flax.core/flutter#type:Offset],p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding36 = FlaxTypeRef("Float32List");
const _flaxBinding37 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("pointMode", _flaxBinding32),
    FlaxCallbackParameter.plain("points", _flaxBinding36),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:pointMode:enum:flax.core/sdk_dart_ui#type:PointMode,p:r:points:Float32List:,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding38 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Vertices",
);
const _flaxBinding39 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("vertices", _flaxBinding38),
    FlaxCallbackParameter.plain("blendMode", _flaxBinding11),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:vertices:object:flax.core/sdk_dart_ui#type:Vertices,p:r:blendMode:enum:flax.core/sdk_dart_ui#type:BlendMode,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding40 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RSTransform",
);
const _flaxBinding41 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding40,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:RSTransform]",
    _collection3Create,
    _collection3Matches,
    restore: _collection3Restore,
  ),
);
const _flaxBinding42 = FlaxTypeRef(
  "list",
  item: _flaxBinding40,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:RSTransform]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding41,
);
const _flaxBinding43 = FlaxTypeRef(
  "iterable",
  item: flaxRectType,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Rect]",
    _collection5Create,
    _collection5Matches,
    restore: _collection5Restore,
  ),
);
const _flaxBinding44 = FlaxTypeRef(
  "list",
  item: flaxRectType,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Rect]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding43,
);
const _flaxBinding45 = FlaxTypeRef(
  "iterable",
  item: flaxColorType,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Color]",
    _collection7Create,
    _collection7Matches,
    restore: _collection7Restore,
  ),
);
const _flaxBinding46 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxColorType,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Color]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding45,
);
const _flaxBinding47 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BlendMode",
  nullable: true,
);
const _flaxBinding48 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("atlas", _flaxBinding24),
    FlaxCallbackParameter.plain("transforms", _flaxBinding42),
    FlaxCallbackParameter.plain("rects", _flaxBinding44),
    FlaxCallbackParameter.plain("colors", _flaxBinding46),
    FlaxCallbackParameter.plain("blendMode", _flaxBinding47),
    FlaxCallbackParameter.plain("cullRect", _flaxBinding0),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:atlas:object:flax.core/sdk_dart_ui#type:Image,p:r:transforms:list:[object:flax.core/sdk_dart_ui#type:RSTransform],p:r:rects:list:[object:flax.core/sdk_dart_ui#type:Rect],p:r:colors:list?:[object:flax.core/flutter#type:Color],p:r:blendMode:enum?:flax.core/sdk_dart_ui#type:BlendMode,p:r:cullRect:object?:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding49 = FlaxTypeRef("Int32List", nullable: true);
const _flaxBinding50 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("atlas", _flaxBinding24),
    FlaxCallbackParameter.plain("rstTransforms", _flaxBinding36),
    FlaxCallbackParameter.plain("rects", _flaxBinding36),
    FlaxCallbackParameter.plain("colors", _flaxBinding49),
    FlaxCallbackParameter.plain("blendMode", _flaxBinding47),
    FlaxCallbackParameter.plain("cullRect", _flaxBinding0),
    FlaxCallbackParameter.plain("paint", _flaxBinding1),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:atlas:object:flax.core/sdk_dart_ui#type:Image,p:r:rstTransforms:Float32List:,p:r:rects:Float32List:,p:r:colors:Int32List?:,p:r:blendMode:enum?:flax.core/sdk_dart_ui#type:BlendMode,p:r:cullRect:object?:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding51 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("path", flaxPathType),
    FlaxCallbackParameter.plain("color", flaxColorType),
    FlaxCallbackParameter.plain("elevation", flaxDoubleType),
    FlaxCallbackParameter.plain("transparentOccluder", flaxBoolType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,p:r:color:object:flax.core/flutter#type:Color,p:r:elevation:double:,p:r:transparentOccluder:bool:)->void:",
);
const _flaxBinding52 = FlaxTypeRef("ByteData", nullable: true);
const _flaxBinding53 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("data", _flaxBinding52)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api1.ByteData?>,
  id: "callback:<>(p:r:data:ByteData?:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api1.ByteData?>,
  matches: FlaxCallbackAdapters.matchesVoid1<api1.ByteData?>,
);
const _flaxBinding54 = FlaxTypeRef("callback", callback: _flaxBinding53);
const _flaxBinding55 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("name", flaxStringType),
    FlaxCallbackParameter.plain("data", _flaxBinding52),
    FlaxCallbackParameter.plain("callback", _flaxBinding54),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:name:String:,p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->void:",
);
const _flaxBinding56 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("data", _flaxBinding52),
    FlaxCallbackParameter.plain("callback", _flaxBinding54),
  ],
  flaxVoidType,
  FlaxCallbackAdapters
      .wrapVoid2<api1.ByteData?, void Function(api1.ByteData? data)>,
  id: "callback:<>(p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->void:",
  invoke: FlaxCallbackAdapters
      .invokeVoid2<api1.ByteData?, void Function(api1.ByteData? data)>,
  matches: FlaxCallbackAdapters
      .matchesVoid2<api1.ByteData?, void Function(api1.ByteData? data)>,
);
const _flaxBinding57 = FlaxTypeRef("callback", callback: _flaxBinding56);
const _flaxBinding58 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("name", flaxStringType),
    FlaxCallbackParameter.plain("callback", _flaxBinding57),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:name:String:,p:r:callback:callback:<>(p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->void:)->void:",
);
const _flaxBinding59 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("name", flaxStringType)],
  flaxVoidType,
  id: "callback:<>(p:r:name:String:)->void:",
);
const _flaxBinding60 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("name", flaxStringType),
    FlaxCallbackParameter.plain("listening", flaxBoolType, positional: false),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:name:String:,n:r:listening:bool:)->void:",
);
const _flaxBinding61 = FlaxTypeRef(
  "future",
  item: flaxVoidType,
  future: FlaxFutureBinding("void:", _future0Adapt),
);
const _flaxBinding62 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("data", _flaxBinding52),
    FlaxCallbackParameter.plain("callback", _flaxBinding54),
  ],
  _flaxBinding61,
  _callback0,
  id: "callback:<>(p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->future:[void:]",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding63 = FlaxTypeRef("callback", callback: _flaxBinding62);
const _flaxBinding64 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("name", flaxStringType),
    FlaxCallbackParameter.plain("callback", _flaxBinding63),
  ],
  _flaxBinding61,
  id: "callback:<>(p:r:name:String:,p:r:callback:callback:<>(p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->future:[void:])->future:[void:]",
);
const _flaxBinding65 = FlaxTypeRef("ByteData");
const _flaxBinding66 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("data", _flaxBinding65)],
  flaxVoidType,
  id: "callback:<>(p:r:data:ByteData:)->void:",
);
const _flaxBinding67 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("name", flaxStringType),
    FlaxCallbackParameter.plain("newSize", flaxIntType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:name:String:,p:r:newSize:int:)->void:",
);
const _flaxBinding68 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("name", flaxStringType),
    FlaxCallbackParameter.plain("allowed", flaxBoolType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:name:String:,p:r:allowed:bool:)->void:",
);
const _flaxBinding69 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FrameInfo",
);
const _flaxBinding70 = FlaxTypeRef(
  "future",
  item: _flaxBinding69,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:FrameInfo",
    _future1Adapt,
  ),
);
const _flaxBinding71 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding70,
  id: "callback:<>()->future:[object:flax.core/sdk_dart_ui#type:FrameInfo]",
);
const _flaxBinding72 = FlaxCallbackBinding.signature(
  [],
  flaxSizeType,
  id: "callback:<>()->object:flax.core/flutter#type:Size",
);
const _flaxBinding73 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:DisplayFeatureType",
);
const _flaxBinding74 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding73,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:DisplayFeatureType",
);
const _flaxBinding75 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:DisplayFeatureState",
);
const _flaxBinding76 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding75,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:DisplayFeatureState",
);
const _flaxBinding77 = FlaxCallbackBinding.signature(
  [],
  flaxDurationType,
  id: "callback:<>()->object:flax.core/flutter#type:Duration",
);
const _flaxBinding78 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding24,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Image",
);
const _flaxBinding79 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FlutterView",
);
const _flaxBinding80 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding79,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:FlutterView",
);
const _flaxBinding81 = FlaxCallbackBinding.signature(
  [],
  flaxOffsetType,
  id: "callback:<>()->object:flax.core/flutter#type:Offset",
);
const _flaxBinding82 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:KeyEventType",
);
const _flaxBinding83 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding82,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:KeyEventType",
);
const _flaxBinding84 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:KeyEventDeviceType",
);
const _flaxBinding85 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding84,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:KeyEventDeviceType",
);
const _flaxBinding86 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextRange",
);
const _flaxBinding87 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:StringAttribute",
);
const _flaxBinding88 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("range", _flaxBinding86, positional: false)],
  _flaxBinding87,
  id: "callback:<>(n:r:range:object:flax.core/flutter#type:TextRange)->object:flax.core/sdk_dart_ui#type:StringAttribute",
);
const _flaxBinding89 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding90 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding89,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding91 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding86,
  id: "callback:<>()->object:flax.core/flutter#type:TextRange",
);
const _flaxBinding92 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OffsetBase",
);
const _flaxBinding93 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("other", _flaxBinding92)],
  flaxBoolType,
  id: "callback:<>(p:r:other:object:flax.core/sdk_dart_ui#type:OffsetBase)->bool:",
);
const _flaxBinding94 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ParagraphConstraints",
);
const _flaxBinding95 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("constraints", _flaxBinding94)],
  flaxVoidType,
  id: "callback:<>(p:r:constraints:object:flax.core/sdk_dart_ui#type:ParagraphConstraints)->void:",
);
const _flaxBinding96 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextBox",
);
const _flaxBinding97 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding96,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:TextBox]",
    _collection9Create,
    _collection9Matches,
    restore: _collection9Restore,
  ),
);
const _flaxBinding98 = FlaxTypeRef(
  "list",
  item: _flaxBinding96,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:TextBox]",
    _collection8Create,
    _collection8Matches,
  ),
  iterable: _flaxBinding97,
);
const _flaxBinding99 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding98,
  id: "callback:<>()->list:[object:flax.core/sdk_dart_ui#type:TextBox]",
);
const _flaxBinding100 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextPosition",
);
const _flaxBinding101 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("offset", flaxOffsetType)],
  _flaxBinding100,
  id: "callback:<>(p:r:offset:object:flax.core/flutter#type:Offset)->object:flax.core/sdk_dart_ui#type:TextPosition",
);
const _flaxBinding102 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:GlyphInfo",
  nullable: true,
);
const _flaxBinding103 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("offset", flaxOffsetType)],
  _flaxBinding102,
  id: "callback:<>(p:r:offset:object:flax.core/flutter#type:Offset)->object?:flax.core/sdk_dart_ui#type:GlyphInfo",
);
const _flaxBinding104 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("codeUnitOffset", flaxIntType)],
  _flaxBinding102,
  id: "callback:<>(p:r:codeUnitOffset:int:)->object?:flax.core/sdk_dart_ui#type:GlyphInfo",
);
const _flaxBinding105 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("position", _flaxBinding100)],
  _flaxBinding86,
  id: "callback:<>(p:r:position:object:flax.core/sdk_dart_ui#type:TextPosition)->object:flax.core/flutter#type:TextRange",
);
const _flaxBinding106 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:LineMetrics",
);
const _flaxBinding107 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding106,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:LineMetrics]",
    _collection11Create,
    _collection11Matches,
    restore: _collection11Restore,
  ),
);
const _flaxBinding108 = FlaxTypeRef(
  "list",
  item: _flaxBinding106,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:LineMetrics]",
    _collection10Create,
    _collection10Matches,
  ),
  iterable: _flaxBinding107,
);
const _flaxBinding109 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding108,
  id: "callback:<>()->list:[object:flax.core/sdk_dart_ui#type:LineMetrics]",
);
const _flaxBinding110 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:LineMetrics",
  nullable: true,
);
const _flaxBinding111 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("lineNumber", flaxIntType)],
  _flaxBinding110,
  id: "callback:<>(p:r:lineNumber:int:)->object?:flax.core/sdk_dart_ui#type:LineMetrics",
);
const _flaxBinding112 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("codeUnitOffset", flaxIntType)],
  flaxNullableIntType,
  id: "callback:<>(p:r:codeUnitOffset:int:)->int?:",
);
const _flaxBinding113 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextStyle",
);
const _flaxBinding114 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("style", _flaxBinding113)],
  flaxVoidType,
  id: "callback:<>(p:r:style:object:flax.core/sdk_dart_ui#type:TextStyle)->void:",
);
const _flaxBinding115 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("text", flaxStringType)],
  flaxVoidType,
  id: "callback:<>(p:r:text:String:)->void:",
);
const _flaxBinding116 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding30,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Paragraph",
);
const _flaxBinding117 = FlaxTypeRef(
  "iterable",
  item: flaxDoubleType,
  collection: FlaxCollectionBinding(
    "iterable:[double:]",
    _collection13Create,
    _collection13Matches,
    restore: _collection13Restore,
  ),
);
const _flaxBinding118 = FlaxTypeRef(
  "list",
  item: flaxDoubleType,
  collection: FlaxCollectionBinding(
    "list:[double:]",
    _collection12Create,
    _collection12Matches,
  ),
  iterable: _flaxBinding117,
);
const _flaxBinding119 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding118,
  id: "callback:<>()->list:[double:]",
);
const _flaxBinding120 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("x", flaxDoubleType),
    FlaxCallbackParameter.plain("y", flaxDoubleType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:x:double:,p:r:y:double:)->void:",
);
const _flaxBinding121 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("x1", flaxDoubleType),
    FlaxCallbackParameter.plain("y1", flaxDoubleType),
    FlaxCallbackParameter.plain("x2", flaxDoubleType),
    FlaxCallbackParameter.plain("y2", flaxDoubleType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:x1:double:,p:r:y1:double:,p:r:x2:double:,p:r:y2:double:)->void:",
);
const _flaxBinding122 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("x1", flaxDoubleType),
    FlaxCallbackParameter.plain("y1", flaxDoubleType),
    FlaxCallbackParameter.plain("x2", flaxDoubleType),
    FlaxCallbackParameter.plain("y2", flaxDoubleType),
    FlaxCallbackParameter.plain("x3", flaxDoubleType),
    FlaxCallbackParameter.plain("y3", flaxDoubleType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:x1:double:,p:r:y1:double:,p:r:x2:double:,p:r:y2:double:,p:r:x3:double:,p:r:y3:double:)->void:",
);
const _flaxBinding123 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("x1", flaxDoubleType),
    FlaxCallbackParameter.plain("y1", flaxDoubleType),
    FlaxCallbackParameter.plain("x2", flaxDoubleType),
    FlaxCallbackParameter.plain("y2", flaxDoubleType),
    FlaxCallbackParameter.plain("w", flaxDoubleType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:x1:double:,p:r:y1:double:,p:r:x2:double:,p:r:y2:double:,p:r:w:double:)->void:",
);
const _flaxBinding124 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rect", flaxRectType),
    FlaxCallbackParameter.plain("startAngle", flaxDoubleType),
    FlaxCallbackParameter.plain("sweepAngle", flaxDoubleType),
    FlaxCallbackParameter.plain("forceMoveTo", flaxBoolType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,p:r:startAngle:double:,p:r:sweepAngle:double:,p:r:forceMoveTo:bool:)->void:",
);
const _flaxBinding125 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("rect", flaxRectType)],
  flaxVoidType,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding126 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("oval", flaxRectType)],
  flaxVoidType,
  id: "callback:<>(p:r:oval:object:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding127 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("oval", flaxRectType),
    FlaxCallbackParameter.plain("startAngle", flaxDoubleType),
    FlaxCallbackParameter.plain("sweepAngle", flaxDoubleType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:oval:object:flax.core/sdk_dart_ui#type:Rect,p:r:startAngle:double:,p:r:sweepAngle:double:)->void:",
);
const _flaxBinding128 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("points", _flaxBinding34),
    FlaxCallbackParameter.plain("close", flaxBoolType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:points:list:[object:flax.core/flutter#type:Offset],p:r:close:bool:)->void:",
);
const _flaxBinding129 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("rrect", _flaxBinding16)],
  flaxVoidType,
  id: "callback:<>(p:r:rrect:object:flax.core/sdk_dart_ui#type:RRect)->void:",
);
const _flaxBinding130 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("rsuperellipse", _flaxBinding19)],
  flaxVoidType,
  id: "callback:<>(p:r:rsuperellipse:object:flax.core/sdk_dart_ui#type:RSuperellipse)->void:",
);
const _flaxBinding131 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("point", flaxOffsetType)],
  flaxBoolType,
  id: "callback:<>(p:r:point:object:flax.core/flutter#type:Offset)->bool:",
);
const _flaxBinding132 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("offset", flaxOffsetType)],
  flaxPathType,
  id: "callback:<>(p:r:offset:object:flax.core/flutter#type:Offset)->object:flax.core/sdk_dart_ui#type:Path",
);
const _flaxBinding133 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("matrix4", _flaxBinding7)],
  flaxPathType,
  id: "callback:<>(p:r:matrix4:Float64List:)->object:flax.core/sdk_dart_ui#type:Path",
);
const _flaxBinding134 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PathFillType",
);
const _flaxBinding135 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding134,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:PathFillType",
);
const _flaxBinding136 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding134)],
  flaxVoidType,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:PathFillType)->void:",
);
const _flaxBinding137 = FlaxTypeRef(
  "future",
  item: _flaxBinding24,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:Image",
    _future2Adapt,
  ),
);
const _flaxBinding138 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("width", flaxIntType),
    FlaxCallbackParameter.plain("height", flaxIntType),
  ],
  _flaxBinding137,
  id: "callback:<>(p:r:width:int:,p:r:height:int:)->future:[object:flax.core/sdk_dart_ui#type:Image]",
);
const _flaxBinding139 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
  nullable: true,
);
const _flaxBinding140 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding139,
  id: "callback:<>()->object?:flax.core/flutter#type:StackTrace",
);
const _flaxBinding141 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding28,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Picture",
);
const _flaxBinding142 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "allowPlatformDefault",
      flaxBoolType,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(n:r:allowPlatformDefault:bool:)->void:",
);
const _flaxBinding143 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PointerChange",
);
const _flaxBinding144 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding143,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:PointerChange",
);
const _flaxBinding145 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PointerDeviceKind",
);
const _flaxBinding146 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding145,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:PointerDeviceKind",
);
const _flaxBinding147 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PointerSignalKind",
  nullable: true,
);
const _flaxBinding148 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding147,
  id: "callback:<>()->enum?:flax.core/sdk_dart_ui#type:PointerSignalKind",
);
const _flaxBinding149 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PointerData",
);
const _flaxBinding150 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding149,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:PointerData]",
    _collection15Create,
    _collection15Matches,
    restore: _collection15Restore,
  ),
);
const _flaxBinding151 = FlaxTypeRef(
  "list",
  item: _flaxBinding149,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:PointerData]",
    _collection14Create,
    _collection14Matches,
  ),
  iterable: _flaxBinding150,
);
const _flaxBinding152 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding151,
  id: "callback:<>()->list:[object:flax.core/sdk_dart_ui#type:PointerData]",
);
const _flaxBinding153 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("width", flaxIntType),
    FlaxCallbackParameter.plain("height", flaxIntType),
  ],
  _flaxBinding24,
  id: "callback:<>(p:r:width:int:,p:r:height:int:)->object:flax.core/sdk_dart_ui#type:Image",
);
const _flaxBinding154 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:EngineLayer",
);
const _flaxBinding155 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("retainedLayer", _flaxBinding154)],
  flaxVoidType,
  id: "callback:<>(p:r:retainedLayer:object:flax.core/sdk_dart_ui#type:EngineLayer)->void:",
);
const _flaxBinding156 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("enabledOptions", flaxIntType),
    FlaxCallbackParameter.plain("bounds", flaxRectType),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:enabledOptions:int:,p:r:bounds:object:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding157 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Scene",
);
const _flaxBinding158 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding157,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Scene",
);
const _flaxBinding159 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsAction",
);
const _flaxBinding160 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding159,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:SemanticsAction",
);
const _flaxBinding161 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding162 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("other", _flaxBinding161)],
  _flaxBinding161,
  id: "callback:<>(p:r:other:object:flax.core/sdk_dart_ui#type:SemanticsFlags)->object:flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding163 = FlaxTypeRef(
  "iterable",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection17Create,
    _collection17Matches,
    restore: _collection17Restore,
  ),
);
const _flaxBinding164 = FlaxTypeRef(
  "list",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection16Create,
    _collection16Matches,
  ),
  iterable: _flaxBinding163,
);
const _flaxBinding165 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding164,
  id: "callback:<>()->list:[String:]",
);
const _flaxBinding166 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("other", _flaxBinding161)],
  flaxBoolType,
  id: "callback:<>(p:r:other:object:flax.core/sdk_dart_ui#type:SemanticsFlags)->bool:",
);
const _flaxBinding167 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:CheckedState",
);
const _flaxBinding168 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding167,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:CheckedState",
);
const _flaxBinding169 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Tristate",
);
const _flaxBinding170 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding169,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:Tristate",
);
const _flaxBinding171 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsUpdate",
);
const _flaxBinding172 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding171,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:SemanticsUpdate",
);
const _flaxBinding173 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Paint",
);
const _flaxBinding174 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Shadow",
);
const _flaxBinding175 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("factor", flaxDoubleType)],
  _flaxBinding174,
  id: "callback:<>(p:r:factor:double:)->object:flax.core/sdk_dart_ui#type:Shadow",
);
const _flaxBinding176 = FlaxCallbackBinding.signature(
  [],
  flaxColorType,
  id: "callback:<>()->object:flax.core/flutter#type:Color",
);
const _flaxBinding177 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
);
const _flaxBinding178 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding177,
  id: "callback:<>()->enum:flax.core/flutter#type:TextDirection",
);
const _flaxBinding179 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TextLeadingDistribution",
);
const _flaxBinding180 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding179,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:TextLeadingDistribution",
);
const _flaxBinding181 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextAffinity",
);
const _flaxBinding182 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding181,
  id: "callback:<>()->enum:flax.core/flutter#type:TextAffinity",
);
const _flaxBinding183 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("size", flaxSizeType)],
  flaxBoolType,
  id: "callback:<>(p:r:size:object:flax.core/flutter#type:Size)->bool:",
);
const _flaxBinding184 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ViewConstraints",
);
const _flaxBinding185 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("factor", flaxDoubleType)],
  _flaxBinding184,
  id: "callback:<>(p:r:factor:double:)->object:flax.core/sdk_dart_ui#type:ViewConstraints",
);
const _flaxBinding186 = FlaxGetter.plain(
  "accessibleNavigation",
  flaxBoolType,
  _AccessibilityFeatures_accessibleNavigation,
);
const _flaxBinding187 = FlaxGetter.plain(
  "invertColors",
  flaxBoolType,
  _AccessibilityFeatures_invertColors,
);
const _flaxBinding188 = FlaxGetter.plain(
  "disableAnimations",
  flaxBoolType,
  _AccessibilityFeatures_disableAnimations,
);
const _flaxBinding189 = FlaxGetter.plain(
  "boldText",
  flaxBoolType,
  _AccessibilityFeatures_boldText,
);
const _flaxBinding190 = FlaxGetter.plain(
  "reduceMotion",
  flaxBoolType,
  _AccessibilityFeatures_reduceMotion,
);
const _flaxBinding191 = FlaxGetter.plain(
  "highContrast",
  flaxBoolType,
  _AccessibilityFeatures_highContrast,
);
const _flaxBinding192 = FlaxGetter.plain(
  "onOffSwitchLabels",
  flaxBoolType,
  _AccessibilityFeatures_onOffSwitchLabels,
);
const _flaxBinding193 = FlaxGetter.plain(
  "supportsAnnounce",
  flaxBoolType,
  _AccessibilityFeatures_supportsAnnounce,
);
const _flaxBinding194 = FlaxGetter.plain(
  "autoPlayAnimatedImages",
  flaxBoolType,
  _AccessibilityFeatures_autoPlayAnimatedImages,
);
const _flaxBinding195 = FlaxGetter.plain(
  "autoPlayVideos",
  flaxBoolType,
  _AccessibilityFeatures_autoPlayVideos,
);
const _flaxBinding196 = FlaxGetter.plain(
  "deterministicCursor",
  flaxBoolType,
  _AccessibilityFeatures_deterministicCursor,
);
const _flaxBinding197 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AccessibilityFeatures_toString,
);
const _flaxBinding198 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:AccessibilityFeatures",
  [
    _flaxBinding186,
    _flaxBinding187,
    _flaxBinding188,
    _flaxBinding189,
    _flaxBinding190,
    _flaxBinding191,
    _flaxBinding192,
    _flaxBinding193,
    _flaxBinding194,
    _flaxBinding195,
    _flaxBinding196,
  ],
  {"toString": _flaxBinding197},
  constructors: {},
  create: _createAccessibilityFeatures,
  matches: _isAccessibilityFeatures,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding199 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _EngineLayer_dispose,
);
const _flaxBinding200 = <FlaxParameter>[];
const _flaxBinding201 = FlaxProxyMember("dispose", 0, flaxVoidCall);
const _flaxBinding202 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:EngineLayer",
  [],
  {"dispose": _flaxBinding199},
  constructors: {"@implementation": _flaxBinding200},
  create: _createEngineLayer,
  matches: _isEngineLayer,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding201]),
);
const _flaxBinding203 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer",
  [],
  {},
  constructors: {},
  create: _createBackdropFilterEngineLayer,
  matches: _isBackdropFilterEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding204 = FlaxInstanceMethod.shared(
  flaxIntCall,
  _CallbackHandle_toRawHandle,
);
const _flaxBinding205 = <FlaxParameter>[
  FlaxParameter.required("_handle", flaxIntType),
];
const _flaxBinding206 = FlaxProxyMember(
  "toRawHandle",
  0,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding207 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:CallbackHandle",
  [],
  {
    "toRawHandle": _flaxBinding204,
    "@super:toRawHandle": FlaxInstanceMethod.shared(
      flaxIntCall,
      _CallbackHandle_super_toRawHandle,
    ),
  },
  constructors: {
    "fromRawHandle": _flaxBinding205,
    "@implementation": _flaxBinding205,
    "@implementation:fromRawHandle": _flaxBinding205,
  },
  create: _createCallbackHandle,
  matches: _isCallbackHandle,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding206]),
);
const _flaxBinding208 = FlaxInstanceMethod.shared(flaxVoidCall, _Canvas_save);
const _flaxBinding209 = FlaxInstanceMethod.shared(
  _flaxBinding2,
  _Canvas_saveLayer,
);
const _flaxBinding210 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _Canvas_restore,
);
const _flaxBinding211 = FlaxInstanceMethod.shared(
  _flaxBinding3,
  _Canvas_restoreToCount,
);
const _flaxBinding212 = FlaxInstanceMethod.shared(
  flaxIntCall,
  _Canvas_getSaveCount,
);
const _flaxBinding213 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _Canvas_translate,
);
const _flaxBinding214 = <FlaxParameter>[
  FlaxParameter.required("sx", flaxDoubleType),
  FlaxParameter("sy", flaxNullableDoubleType, required: false),
];
const _flaxBinding215 = FlaxInstanceMethod.plain(
  _flaxBinding214,
  flaxVoidType,
  _Canvas_scale,
);
const _flaxBinding216 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _Canvas_rotate,
);
const _flaxBinding217 = FlaxInstanceMethod.shared(_flaxBinding6, _Canvas_skew);
const _flaxBinding218 = FlaxInstanceMethod.shared(
  _flaxBinding8,
  _Canvas_transform,
);
const _flaxBinding219 = FlaxInstanceMethod.shared(
  _flaxBinding9,
  _Canvas_getTransform,
);
const _flaxBinding220 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ClipOp",
);
const _flaxBinding221 = <FlaxParameter>[
  FlaxParameter.required("rect", flaxRectType),
  FlaxParameter(
    "clipOp",
    _flaxBinding220,
    required: false,
    defaultValue: api.ClipOp.intersect,
  ),
  FlaxParameter(
    "doAntiAlias",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding222 = FlaxInstanceMethod.plain(
  _flaxBinding221,
  flaxVoidType,
  _Canvas_clipRect,
);
const _flaxBinding223 = <FlaxParameter>[
  FlaxParameter.required("rrect", _flaxBinding16),
  FlaxParameter(
    "doAntiAlias",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding224 = FlaxInstanceMethod.plain(
  _flaxBinding223,
  flaxVoidType,
  _Canvas_clipRRect,
);
const _flaxBinding225 = <FlaxParameter>[
  FlaxParameter.required("rsuperellipse", _flaxBinding19),
  FlaxParameter(
    "doAntiAlias",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding226 = FlaxInstanceMethod.plain(
  _flaxBinding225,
  flaxVoidType,
  _Canvas_clipRSuperellipse,
);
const _flaxBinding227 = <FlaxParameter>[
  FlaxParameter.required("path", flaxPathType),
  FlaxParameter(
    "doAntiAlias",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding228 = FlaxInstanceMethod.plain(
  _flaxBinding227,
  flaxVoidType,
  _Canvas_clipPath,
);
const _flaxBinding229 = FlaxInstanceMethod.shared(
  _flaxBinding10,
  _Canvas_getLocalClipBounds,
);
const _flaxBinding230 = FlaxInstanceMethod.shared(
  _flaxBinding10,
  _Canvas_getDestinationClipBounds,
);
const _flaxBinding231 = FlaxInstanceMethod.shared(
  _flaxBinding12,
  _Canvas_drawColor,
);
const _flaxBinding232 = FlaxInstanceMethod.shared(
  _flaxBinding13,
  _Canvas_drawLine,
);
const _flaxBinding233 = FlaxInstanceMethod.shared(
  _flaxBinding14,
  _Canvas_drawPaint,
);
const _flaxBinding234 = FlaxInstanceMethod.shared(
  _flaxBinding15,
  _Canvas_drawRect,
);
const _flaxBinding235 = FlaxInstanceMethod.shared(
  _flaxBinding17,
  _Canvas_drawRRect,
);
const _flaxBinding236 = FlaxInstanceMethod.shared(
  _flaxBinding18,
  _Canvas_drawDRRect,
);
const _flaxBinding237 = FlaxInstanceMethod.shared(
  _flaxBinding20,
  _Canvas_drawRSuperellipse,
);
const _flaxBinding238 = FlaxInstanceMethod.shared(
  _flaxBinding15,
  _Canvas_drawOval,
);
const _flaxBinding239 = FlaxInstanceMethod.shared(
  _flaxBinding21,
  _Canvas_drawCircle,
);
const _flaxBinding240 = FlaxInstanceMethod.shared(
  _flaxBinding22,
  _Canvas_drawArc,
);
const _flaxBinding241 = FlaxInstanceMethod.shared(
  _flaxBinding23,
  _Canvas_drawPath,
);
const _flaxBinding242 = FlaxInstanceMethod.shared(
  _flaxBinding25,
  _Canvas_drawImage,
);
const _flaxBinding243 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _Canvas_drawImageRect,
);
const _flaxBinding244 = FlaxInstanceMethod.shared(
  _flaxBinding27,
  _Canvas_drawImageNine,
);
const _flaxBinding245 = FlaxInstanceMethod.shared(
  _flaxBinding29,
  _Canvas_drawPicture,
);
const _flaxBinding246 = FlaxInstanceMethod.shared(
  _flaxBinding31,
  _Canvas_drawParagraph,
);
const _flaxBinding247 = FlaxInstanceMethod.shared(
  _flaxBinding35,
  _Canvas_drawPoints,
);
const _flaxBinding248 = FlaxInstanceMethod.shared(
  _flaxBinding37,
  _Canvas_drawRawPoints,
);
const _flaxBinding249 = FlaxInstanceMethod.shared(
  _flaxBinding39,
  _Canvas_drawVertices,
);
const _flaxBinding250 = FlaxInstanceMethod.shared(
  _flaxBinding48,
  _Canvas_drawAtlas,
);
const _flaxBinding251 = FlaxInstanceMethod.shared(
  _flaxBinding50,
  _Canvas_drawRawAtlas,
);
const _flaxBinding252 = FlaxInstanceMethod.shared(
  _flaxBinding51,
  _Canvas_drawShadow,
);
const _flaxBinding253 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PictureRecorder",
);
const _flaxBinding254 = <FlaxParameter>[
  FlaxParameter.required("recorder", _flaxBinding253),
  FlaxParameter("cullRect", _flaxBinding0, required: false),
];
const _flaxBinding255 = FlaxProxyMember("save", 0, flaxVoidCall);
const _flaxBinding256 = FlaxProxyMember("saveLayer", 0, _flaxBinding2);
const _flaxBinding257 = FlaxProxyMember("restore", 0, flaxVoidCall);
const _flaxBinding258 = FlaxProxyMember("restoreToCount", 0, _flaxBinding3);
const _flaxBinding259 = FlaxProxyMember("getSaveCount", 0, flaxIntCall);
const _flaxBinding260 = FlaxProxyMember("translate", 0, _flaxBinding4);
const _flaxBinding261 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("sx", flaxDoubleType),
    FlaxCallbackParameter.plain("sy", flaxNullableDoubleType, required: false),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:sx:double:,p:o:sy:double?:)->void:",
);
const _flaxBinding262 = FlaxProxyMember("scale", 0, _flaxBinding261);
const _flaxBinding263 = FlaxProxyMember("rotate", 0, _flaxBinding5);
const _flaxBinding264 = FlaxProxyMember("skew", 0, _flaxBinding6);
const _flaxBinding265 = FlaxProxyMember("transform", 0, _flaxBinding8);
const _flaxBinding266 = FlaxProxyMember("getTransform", 0, _flaxBinding9);
const _flaxBinding267 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rect", flaxRectType),
    FlaxCallbackParameter.plain(
      "clipOp",
      _flaxBinding220,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "doAntiAlias",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,n:o:clipOp:enum:flax.core/sdk_dart_ui#type:ClipOp,n:o:doAntiAlias:bool:)->void:",
);
const _flaxBinding268 = FlaxProxyMember("clipRect", 0, _flaxBinding267);
const _flaxBinding269 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rrect", _flaxBinding16),
    FlaxCallbackParameter.plain(
      "doAntiAlias",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:rrect:object:flax.core/sdk_dart_ui#type:RRect,n:o:doAntiAlias:bool:)->void:",
);
const _flaxBinding270 = FlaxProxyMember("clipRRect", 0, _flaxBinding269);
const _flaxBinding271 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rsuperellipse", _flaxBinding19),
    FlaxCallbackParameter.plain(
      "doAntiAlias",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:rsuperellipse:object:flax.core/sdk_dart_ui#type:RSuperellipse,n:o:doAntiAlias:bool:)->void:",
);
const _flaxBinding272 = FlaxProxyMember(
  "clipRSuperellipse",
  0,
  _flaxBinding271,
);
const _flaxBinding273 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("path", flaxPathType),
    FlaxCallbackParameter.plain(
      "doAntiAlias",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,n:o:doAntiAlias:bool:)->void:",
);
const _flaxBinding274 = FlaxProxyMember("clipPath", 0, _flaxBinding273);
const _flaxBinding275 = FlaxProxyMember(
  "getLocalClipBounds",
  0,
  _flaxBinding10,
);
const _flaxBinding276 = FlaxProxyMember(
  "getDestinationClipBounds",
  0,
  _flaxBinding10,
);
const _flaxBinding277 = FlaxProxyMember("drawColor", 0, _flaxBinding12);
const _flaxBinding278 = FlaxProxyMember("drawLine", 0, _flaxBinding13);
const _flaxBinding279 = FlaxProxyMember("drawPaint", 0, _flaxBinding14);
const _flaxBinding280 = FlaxProxyMember("drawRect", 0, _flaxBinding15);
const _flaxBinding281 = FlaxProxyMember("drawRRect", 0, _flaxBinding17);
const _flaxBinding282 = FlaxProxyMember("drawDRRect", 0, _flaxBinding18);
const _flaxBinding283 = FlaxProxyMember("drawRSuperellipse", 0, _flaxBinding20);
const _flaxBinding284 = FlaxProxyMember("drawOval", 0, _flaxBinding15);
const _flaxBinding285 = FlaxProxyMember("drawCircle", 0, _flaxBinding21);
const _flaxBinding286 = FlaxProxyMember("drawArc", 0, _flaxBinding22);
const _flaxBinding287 = FlaxProxyMember("drawPath", 0, _flaxBinding23);
const _flaxBinding288 = FlaxProxyMember("drawImage", 0, _flaxBinding25);
const _flaxBinding289 = FlaxProxyMember("drawImageRect", 0, _flaxBinding26);
const _flaxBinding290 = FlaxProxyMember("drawImageNine", 0, _flaxBinding27);
const _flaxBinding291 = FlaxProxyMember("drawPicture", 0, _flaxBinding29);
const _flaxBinding292 = FlaxProxyMember("drawParagraph", 0, _flaxBinding31);
const _flaxBinding293 = FlaxProxyMember("drawPoints", 0, _flaxBinding35);
const _flaxBinding294 = FlaxProxyMember("drawRawPoints", 0, _flaxBinding37);
const _flaxBinding295 = FlaxProxyMember("drawVertices", 0, _flaxBinding39);
const _flaxBinding296 = FlaxProxyMember("drawAtlas", 0, _flaxBinding48);
const _flaxBinding297 = FlaxProxyMember("drawRawAtlas", 0, _flaxBinding50);
const _flaxBinding298 = FlaxProxyMember("drawShadow", 0, _flaxBinding51);
const _flaxBinding299 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Canvas",
  [],
  {
    "save": _flaxBinding208,
    "saveLayer": _flaxBinding209,
    "restore": _flaxBinding210,
    "restoreToCount": _flaxBinding211,
    "getSaveCount": _flaxBinding212,
    "translate": _flaxBinding213,
    "scale": _flaxBinding215,
    "rotate": _flaxBinding216,
    "skew": _flaxBinding217,
    "transform": _flaxBinding218,
    "getTransform": _flaxBinding219,
    "clipRect": _flaxBinding222,
    "clipRRect": _flaxBinding224,
    "clipRSuperellipse": _flaxBinding226,
    "clipPath": _flaxBinding228,
    "getLocalClipBounds": _flaxBinding229,
    "getDestinationClipBounds": _flaxBinding230,
    "drawColor": _flaxBinding231,
    "drawLine": _flaxBinding232,
    "drawPaint": _flaxBinding233,
    "drawRect": _flaxBinding234,
    "drawRRect": _flaxBinding235,
    "drawDRRect": _flaxBinding236,
    "drawRSuperellipse": _flaxBinding237,
    "drawOval": _flaxBinding238,
    "drawCircle": _flaxBinding239,
    "drawArc": _flaxBinding240,
    "drawPath": _flaxBinding241,
    "drawImage": _flaxBinding242,
    "drawImageRect": _flaxBinding243,
    "drawImageNine": _flaxBinding244,
    "drawPicture": _flaxBinding245,
    "drawParagraph": _flaxBinding246,
    "drawPoints": _flaxBinding247,
    "drawRawPoints": _flaxBinding248,
    "drawVertices": _flaxBinding249,
    "drawAtlas": _flaxBinding250,
    "drawRawAtlas": _flaxBinding251,
    "drawShadow": _flaxBinding252,
  },
  constructors: {"": _flaxBinding254, "@implementation": _flaxBinding200},
  create: _createCanvas,
  matches: _isCanvas,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding255,
    _flaxBinding256,
    _flaxBinding257,
    _flaxBinding258,
    _flaxBinding259,
    _flaxBinding260,
    _flaxBinding262,
    _flaxBinding263,
    _flaxBinding264,
    _flaxBinding265,
    _flaxBinding266,
    _flaxBinding268,
    _flaxBinding270,
    _flaxBinding272,
    _flaxBinding274,
    _flaxBinding275,
    _flaxBinding276,
    _flaxBinding277,
    _flaxBinding278,
    _flaxBinding279,
    _flaxBinding280,
    _flaxBinding281,
    _flaxBinding282,
    _flaxBinding283,
    _flaxBinding284,
    _flaxBinding285,
    _flaxBinding286,
    _flaxBinding287,
    _flaxBinding288,
    _flaxBinding289,
    _flaxBinding290,
    _flaxBinding291,
    _flaxBinding292,
    _flaxBinding293,
    _flaxBinding294,
    _flaxBinding295,
    _flaxBinding296,
    _flaxBinding297,
    _flaxBinding298,
  ]),
);
const _flaxBinding300 = FlaxInstanceMethod.shared(
  _flaxBinding55,
  _ChannelBuffers_push,
);
const _flaxBinding301 = FlaxInstanceMethod.shared(
  _flaxBinding58,
  _ChannelBuffers_setListener,
);
const _flaxBinding302 = FlaxInstanceMethod.shared(
  _flaxBinding59,
  _ChannelBuffers_clearListener,
);
const _flaxBinding303 = FlaxInstanceMethod.shared(
  _flaxBinding60,
  _ChannelBuffers_sendChannelUpdate,
);
const _flaxBinding304 = FlaxInstanceMethod.shared(
  _flaxBinding64,
  _ChannelBuffers_drain,
);
const _flaxBinding305 = FlaxInstanceMethod.shared(
  _flaxBinding66,
  _ChannelBuffers_handleMessage,
);
const _flaxBinding306 = FlaxInstanceMethod.shared(
  _flaxBinding67,
  _ChannelBuffers_resize,
);
const _flaxBinding307 = FlaxInstanceMethod.shared(
  _flaxBinding68,
  _ChannelBuffers_allowOverflow,
);
const _flaxBinding308 = FlaxProxyMember(
  "push",
  0,
  _flaxBinding55,
  hasSuper: true,
);
const _flaxBinding309 = FlaxProxyMember(
  "setListener",
  0,
  _flaxBinding58,
  hasSuper: true,
);
const _flaxBinding310 = FlaxProxyMember(
  "clearListener",
  0,
  _flaxBinding59,
  hasSuper: true,
);
const _flaxBinding311 = FlaxProxyMember(
  "sendChannelUpdate",
  0,
  _flaxBinding60,
  hasSuper: true,
);
const _flaxBinding312 = FlaxProxyMember(
  "drain",
  0,
  _flaxBinding64,
  hasSuper: true,
);
const _flaxBinding313 = FlaxProxyMember(
  "handleMessage",
  0,
  _flaxBinding66,
  hasSuper: true,
);
const _flaxBinding314 = FlaxProxyMember(
  "resize",
  0,
  _flaxBinding67,
  hasSuper: true,
);
const _flaxBinding315 = FlaxProxyMember(
  "allowOverflow",
  0,
  _flaxBinding68,
  hasSuper: true,
);
const _flaxBinding316 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ChannelBuffers",
  [],
  {
    "push": _flaxBinding300,
    "setListener": _flaxBinding301,
    "clearListener": _flaxBinding302,
    "sendChannelUpdate": _flaxBinding303,
    "drain": _flaxBinding304,
    "handleMessage": _flaxBinding305,
    "resize": _flaxBinding306,
    "allowOverflow": _flaxBinding307,
    "@super:push": FlaxInstanceMethod.shared(
      _flaxBinding55,
      _ChannelBuffers_super_push,
    ),
    "@super:setListener": FlaxInstanceMethod.shared(
      _flaxBinding58,
      _ChannelBuffers_super_setListener,
    ),
    "@super:clearListener": FlaxInstanceMethod.shared(
      _flaxBinding59,
      _ChannelBuffers_super_clearListener,
    ),
    "@super:sendChannelUpdate": FlaxInstanceMethod.shared(
      _flaxBinding60,
      _ChannelBuffers_super_sendChannelUpdate,
    ),
    "@super:drain": FlaxInstanceMethod.shared(
      _flaxBinding64,
      _ChannelBuffers_super_drain,
    ),
    "@super:handleMessage": FlaxInstanceMethod.shared(
      _flaxBinding66,
      _ChannelBuffers_super_handleMessage,
    ),
    "@super:resize": FlaxInstanceMethod.shared(
      _flaxBinding67,
      _ChannelBuffers_super_resize,
    ),
    "@super:allowOverflow": FlaxInstanceMethod.shared(
      _flaxBinding68,
      _ChannelBuffers_super_allowOverflow,
    ),
  },
  constructors: {"": _flaxBinding200, "@implementation": _flaxBinding200},
  create: _createChannelBuffers,
  matches: _isChannelBuffers,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding308,
    _flaxBinding309,
    _flaxBinding310,
    _flaxBinding311,
    _flaxBinding312,
    _flaxBinding313,
    _flaxBinding314,
    _flaxBinding315,
  ]),
);
const _flaxBinding317 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ClipPathEngineLayer",
  [],
  {},
  constructors: {},
  create: _createClipPathEngineLayer,
  matches: _isClipPathEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding318 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ClipRRectEngineLayer",
  [],
  {},
  constructors: {},
  create: _createClipRRectEngineLayer,
  matches: _isClipRRectEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding319 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer",
  [],
  {},
  constructors: {},
  create: _createClipRSuperellipseEngineLayer,
  matches: _isClipRSuperellipseEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding320 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ClipRectEngineLayer",
  [],
  {},
  constructors: {},
  create: _createClipRectEngineLayer,
  matches: _isClipRectEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding321 = FlaxGetter.plain(
  "frameCount",
  flaxIntType,
  _Codec_frameCount,
);
const _flaxBinding322 = FlaxGetter.plain(
  "repetitionCount",
  flaxIntType,
  _Codec_repetitionCount,
);
const _flaxBinding323 = FlaxInstanceMethod.shared(
  _flaxBinding71,
  _Codec_getNextFrame,
);
const _flaxBinding324 = FlaxInstanceMethod.shared(flaxVoidCall, _Codec_dispose);
const _flaxBinding325 = FlaxProxyMember("getNextFrame", 0, _flaxBinding71);
const _flaxBinding326 = FlaxProxyMember("frameCount", 1, flaxIntCall);
const _flaxBinding327 = FlaxProxyMember("repetitionCount", 1, flaxIntCall);
const _flaxBinding328 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Codec",
  [_flaxBinding321, _flaxBinding322],
  {"getNextFrame": _flaxBinding323, "dispose": _flaxBinding324},
  constructors: {"@implementation": _flaxBinding200},
  create: _createCodec,
  matches: _isCodec,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding325,
    _flaxBinding201,
    _flaxBinding326,
    _flaxBinding327,
  ]),
);
const _flaxBinding329 = FlaxGetter.plain(
  "debugShortDescription",
  flaxStringType,
  _ColorFilter_debugShortDescription,
);
const _flaxBinding330 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ColorFilter_toString,
);
const _flaxBinding331 = <FlaxParameter>[
  FlaxParameter.required("color", flaxColorType),
  FlaxParameter.required("blendMode", _flaxBinding11),
];
const _flaxBinding332 = <FlaxParameter>[
  FlaxParameter.required("matrix", _flaxBinding118),
];
const _flaxBinding333 = <FlaxParameter>[
  FlaxParameter.required("saturation", flaxDoubleType),
];
const _flaxBinding334 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ColorFilter",
  [_flaxBinding329],
  {"toString": _flaxBinding330},
  constructors: {
    "mode": _flaxBinding331,
    "matrix": _flaxBinding332,
    "linearToSrgbGamma": _flaxBinding200,
    "srgbToLinearGamma": _flaxBinding200,
    "saturation": _flaxBinding333,
  },
  create: _createColorFilter,
  matches: _isColorFilter,
  setters: [],
  supertypes: ["dart:core::Object", "flax.core/flutter#type:ImageFilter"],
);
const _flaxBinding335 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ColorFilterEngineLayer",
  [],
  {},
  constructors: {},
  create: _createColorFilterEngineLayer,
  matches: _isColorFilterEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding336 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:DartPluginRegistrant",
  [],
  {},
  constructors: {},
  create: _createDartPluginRegistrant,
  matches: _isDartPluginRegistrant,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding337 = FlaxGetter.plain("id", flaxIntType, _Display_id);
const _flaxBinding338 = FlaxGetter.plain(
  "devicePixelRatio",
  flaxDoubleType,
  _Display_devicePixelRatio,
);
const _flaxBinding339 = FlaxGetter.plain("size", flaxSizeType, _Display_size);
const _flaxBinding340 = FlaxGetter.plain(
  "refreshRate",
  flaxDoubleType,
  _Display_refreshRate,
);
const _flaxBinding341 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Display_toString,
);
const _flaxBinding342 = FlaxProxyMember("toString", 0, flaxStringCall);
const _flaxBinding343 = FlaxProxyMember("id", 1, flaxIntCall);
const _flaxBinding344 = FlaxProxyMember("devicePixelRatio", 1, flaxDoubleCall);
const _flaxBinding345 = FlaxProxyMember("size", 1, _flaxBinding72);
const _flaxBinding346 = FlaxProxyMember("refreshRate", 1, flaxDoubleCall);
const _flaxBinding347 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Display",
  [_flaxBinding337, _flaxBinding338, _flaxBinding339, _flaxBinding340],
  {"toString": _flaxBinding341},
  constructors: {"@implementation": _flaxBinding200},
  create: _createDisplay,
  matches: _isDisplay,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding342,
    _flaxBinding343,
    _flaxBinding344,
    _flaxBinding345,
    _flaxBinding346,
  ]),
);
const _flaxBinding348 = FlaxGetter.plain(
  "topLeft",
  flaxDoubleType,
  _DisplayCornerRadii_topLeft,
);
const _flaxBinding349 = FlaxGetter.plain(
  "topRight",
  flaxDoubleType,
  _DisplayCornerRadii_topRight,
);
const _flaxBinding350 = FlaxGetter.plain(
  "bottomRight",
  flaxDoubleType,
  _DisplayCornerRadii_bottomRight,
);
const _flaxBinding351 = FlaxGetter.plain(
  "bottomLeft",
  flaxDoubleType,
  _DisplayCornerRadii_bottomLeft,
);
const _flaxBinding352 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _DisplayCornerRadii_toString,
);
const _flaxBinding353 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch0_super_call_toString,
);
const _flaxBinding354 = <FlaxParameter>[
  FlaxParameter.required("topLeft", flaxDoubleType),
  FlaxParameter.required("topRight", flaxDoubleType),
  FlaxParameter.required("bottomRight", flaxDoubleType),
  FlaxParameter.required("bottomLeft", flaxDoubleType),
];
const _flaxBinding355 = FlaxProxyMember(
  "toString",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding356 = FlaxProxyMember(
  "topLeft",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding357 = FlaxProxyMember(
  "topRight",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding358 = FlaxProxyMember(
  "bottomRight",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding359 = FlaxProxyMember(
  "bottomLeft",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding360 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:DisplayCornerRadii",
  [_flaxBinding348, _flaxBinding349, _flaxBinding350, _flaxBinding351],
  {
    "toString": _flaxBinding352,
    "@super:toString": _flaxBinding353,
    "@super:get:topLeft": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _DisplayCornerRadii_super_get_topLeft,
    ),
    "@super:get:topRight": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _DisplayCornerRadii_super_get_topRight,
    ),
    "@super:get:bottomRight": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _DisplayCornerRadii_super_get_bottomRight,
    ),
    "@super:get:bottomLeft": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _DisplayCornerRadii_super_get_bottomLeft,
    ),
  },
  constructors: {"": _flaxBinding354, "@implementation": _flaxBinding354},
  create: _createDisplayCornerRadii,
  matches: _isDisplayCornerRadii,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding355,
    _flaxBinding356,
    _flaxBinding357,
    _flaxBinding358,
    _flaxBinding359,
  ]),
);
const _flaxBinding361 = FlaxGetter.plain(
  "bounds",
  flaxRectType,
  _DisplayFeature_bounds,
);
const _flaxBinding362 = FlaxGetter.plain(
  "type",
  _flaxBinding73,
  _DisplayFeature_type,
);
const _flaxBinding363 = FlaxGetter.plain(
  "state",
  _flaxBinding75,
  _DisplayFeature_state,
);
const _flaxBinding364 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _DisplayFeature_toString,
);
const _flaxBinding365 = <FlaxParameter>[
  FlaxParameter.required("bounds", flaxRectType),
  FlaxParameter.required("type", _flaxBinding73),
  FlaxParameter.required("state", _flaxBinding75),
];
const _flaxBinding366 = FlaxProxyMember(
  "bounds",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding367 = FlaxProxyMember(
  "type",
  1,
  _flaxBinding74,
  hasSuper: true,
);
const _flaxBinding368 = FlaxProxyMember(
  "state",
  1,
  _flaxBinding76,
  hasSuper: true,
);
const _flaxBinding369 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:DisplayFeature",
  [_flaxBinding361, _flaxBinding362, _flaxBinding363],
  {
    "toString": _flaxBinding364,
    "@super:toString": _flaxBinding353,
    "@super:get:bounds": FlaxInstanceMethod.shared(
      _flaxBinding10,
      _DisplayFeature_super_get_bounds,
    ),
    "@super:get:type": FlaxInstanceMethod.shared(
      _flaxBinding74,
      _DisplayFeature_super_get_type,
    ),
    "@super:get:state": FlaxInstanceMethod.shared(
      _flaxBinding76,
      _DisplayFeature_super_get_state,
    ),
  },
  constructors: {"": _flaxBinding365, "@implementation": _flaxBinding365},
  create: _createDisplayFeature,
  matches: _isDisplayFeature,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding355,
    _flaxBinding366,
    _flaxBinding367,
    _flaxBinding368,
  ]),
);
const _flaxBinding370 = FlaxGetter.plain(
  "viewId",
  flaxIntType,
  _FlutterView_viewId,
);
const _flaxBinding371 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PlatformDispatcher",
);
const _flaxBinding372 = FlaxGetter.plain(
  "platformDispatcher",
  _flaxBinding371,
  _FlutterView_platformDispatcher,
);
const _flaxBinding373 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Display",
);
const _flaxBinding374 = FlaxGetter.plain(
  "display",
  _flaxBinding373,
  _FlutterView_display,
);
const _flaxBinding375 = FlaxGetter.plain(
  "devicePixelRatio",
  flaxDoubleType,
  _FlutterView_devicePixelRatio,
);
const _flaxBinding376 = FlaxGetter.plain(
  "physicalConstraints",
  _flaxBinding184,
  _FlutterView_physicalConstraints,
);
const _flaxBinding377 = FlaxGetter.plain(
  "physicalSize",
  flaxSizeType,
  _FlutterView_physicalSize,
);
const _flaxBinding378 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ViewPadding",
);
const _flaxBinding379 = FlaxGetter.plain(
  "viewInsets",
  _flaxBinding378,
  _FlutterView_viewInsets,
);
const _flaxBinding380 = FlaxGetter.plain(
  "viewPadding",
  _flaxBinding378,
  _FlutterView_viewPadding,
);
const _flaxBinding381 = FlaxGetter.plain(
  "systemGestureInsets",
  _flaxBinding378,
  _FlutterView_systemGestureInsets,
);
const _flaxBinding382 = FlaxGetter.plain(
  "padding",
  _flaxBinding378,
  _FlutterView_padding,
);
const _flaxBinding383 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:GestureSettings",
);
const _flaxBinding384 = FlaxGetter.plain(
  "gestureSettings",
  _flaxBinding383,
  _FlutterView_gestureSettings,
);
const _flaxBinding385 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:DisplayFeature",
);
const _flaxBinding386 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding385,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:DisplayFeature]",
    _collection19Create,
    _collection19Matches,
    restore: _collection19Restore,
  ),
);
const _flaxBinding387 = FlaxTypeRef(
  "list",
  item: _flaxBinding385,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:DisplayFeature]",
    _collection18Create,
    _collection18Matches,
  ),
  iterable: _flaxBinding386,
);
const _flaxBinding388 = FlaxGetter.plain(
  "displayFeatures",
  _flaxBinding387,
  _FlutterView_displayFeatures,
);
const _flaxBinding389 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:DisplayCornerRadii",
  nullable: true,
);
const _flaxBinding390 = FlaxGetter.plain(
  "displayCornerRadii",
  _flaxBinding389,
  _FlutterView_displayCornerRadii,
);
const _flaxBinding391 = <FlaxParameter>[
  FlaxParameter.required("scene", _flaxBinding157),
  FlaxParameter("size", flaxNullableSizeType, required: false),
];
const _flaxBinding392 = FlaxInstanceMethod.plain(
  _flaxBinding391,
  flaxVoidType,
  _FlutterView_render,
);
const _flaxBinding393 = <FlaxParameter>[
  FlaxParameter.required("update", _flaxBinding171),
];
const _flaxBinding394 = FlaxInstanceMethod.plain(
  _flaxBinding393,
  flaxVoidType,
  _FlutterView_updateSemantics,
);
const _flaxBinding395 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlutterView_toString,
);
const _flaxBinding396 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FlutterView",
  [
    _flaxBinding370,
    _flaxBinding372,
    _flaxBinding374,
    _flaxBinding375,
    _flaxBinding376,
    _flaxBinding377,
    _flaxBinding379,
    _flaxBinding380,
    _flaxBinding381,
    _flaxBinding382,
    _flaxBinding384,
    _flaxBinding388,
    _flaxBinding390,
  ],
  {
    "render": _flaxBinding392,
    "updateSemantics": _flaxBinding394,
    "toString": _flaxBinding395,
  },
  constructors: {},
  create: _createFlutterView,
  matches: _isFlutterView,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding397 = FlaxGetter.plain(
  "feature",
  flaxStringType,
  _FontFeature_feature,
);
const _flaxBinding398 = FlaxGetter.plain(
  "value",
  flaxIntType,
  _FontFeature_value,
);
const _flaxBinding399 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FontFeature_toString,
);
const _flaxBinding400 = <FlaxParameter>[
  FlaxParameter.required("feature", flaxStringType),
  FlaxParameter("value", flaxIntType, required: false, defaultValue: 1),
];
const _flaxBinding401 = <FlaxParameter>[
  FlaxParameter.required("feature", flaxStringType),
];
const _flaxBinding402 = <FlaxParameter>[
  FlaxParameter.required("value", flaxIntType),
];
const _flaxBinding403 = <FlaxParameter>[
  FlaxParameter("enable", flaxBoolType, required: false, defaultValue: true),
];
const _flaxBinding404 = <FlaxParameter>[
  FlaxParameter("value", flaxIntType, required: false, defaultValue: 1),
];
const _flaxBinding405 = FlaxProxyMember(
  "feature",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding406 = FlaxProxyMember(
  "value",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding407 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FontFeature",
  [_flaxBinding397, _flaxBinding398],
  {
    "toString": _flaxBinding399,
    "@super:toString": _flaxBinding353,
    "@super:get:feature": FlaxInstanceMethod.shared(
      flaxStringCall,
      _FontFeature_super_get_feature,
    ),
    "@super:get:value": FlaxInstanceMethod.shared(
      flaxIntCall,
      _FontFeature_super_get_value,
    ),
  },
  constructors: {
    "": _flaxBinding400,
    "enable": _flaxBinding401,
    "disable": _flaxBinding401,
    "alternative": _flaxBinding402,
    "alternativeFractions": _flaxBinding200,
    "contextualAlternates": _flaxBinding200,
    "caseSensitiveForms": _flaxBinding200,
    "characterVariant": _flaxBinding402,
    "denominator": _flaxBinding200,
    "fractions": _flaxBinding200,
    "historicalForms": _flaxBinding200,
    "historicalLigatures": _flaxBinding200,
    "liningFigures": _flaxBinding200,
    "localeAware": _flaxBinding403,
    "notationalForms": _flaxBinding404,
    "numerators": _flaxBinding200,
    "oldstyleFigures": _flaxBinding200,
    "ordinalForms": _flaxBinding200,
    "proportionalFigures": _flaxBinding200,
    "randomize": _flaxBinding200,
    "stylisticAlternates": _flaxBinding200,
    "scientificInferiors": _flaxBinding200,
    "stylisticSet": _flaxBinding402,
    "subscripts": _flaxBinding200,
    "superscripts": _flaxBinding200,
    "swash": _flaxBinding404,
    "tabularFigures": _flaxBinding200,
    "slashedZero": _flaxBinding200,
    "@implementation": _flaxBinding400,
    "@implementation:enable": _flaxBinding401,
    "@implementation:disable": _flaxBinding401,
    "@implementation:alternative": _flaxBinding402,
    "@implementation:alternativeFractions": _flaxBinding200,
    "@implementation:contextualAlternates": _flaxBinding200,
    "@implementation:caseSensitiveForms": _flaxBinding200,
    "@implementation:denominator": _flaxBinding200,
    "@implementation:fractions": _flaxBinding200,
    "@implementation:historicalForms": _flaxBinding200,
    "@implementation:historicalLigatures": _flaxBinding200,
    "@implementation:liningFigures": _flaxBinding200,
    "@implementation:localeAware": _flaxBinding403,
    "@implementation:notationalForms": _flaxBinding404,
    "@implementation:numerators": _flaxBinding200,
    "@implementation:oldstyleFigures": _flaxBinding200,
    "@implementation:ordinalForms": _flaxBinding200,
    "@implementation:proportionalFigures": _flaxBinding200,
    "@implementation:randomize": _flaxBinding200,
    "@implementation:stylisticAlternates": _flaxBinding200,
    "@implementation:scientificInferiors": _flaxBinding200,
    "@implementation:subscripts": _flaxBinding200,
    "@implementation:superscripts": _flaxBinding200,
    "@implementation:swash": _flaxBinding404,
    "@implementation:tabularFigures": _flaxBinding200,
    "@implementation:slashedZero": _flaxBinding200,
  },
  create: _createFontFeature,
  matches: _isFontFeature,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding355, _flaxBinding405, _flaxBinding406]),
);
const _flaxBinding408 = FlaxGetter.plain(
  "axis",
  flaxStringType,
  _FontVariation_axis,
);
const _flaxBinding409 = FlaxGetter.plain(
  "value",
  flaxDoubleType,
  _FontVariation_value,
);
const _flaxBinding410 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FontVariation_toString,
);
const _flaxBinding411 = <FlaxParameter>[
  FlaxParameter.required("axis", flaxStringType),
  FlaxParameter.required("value", flaxDoubleType),
];
const _flaxBinding412 = <FlaxParameter>[
  FlaxParameter.required("value", flaxDoubleType),
];
const _flaxBinding413 = FlaxProxyMember(
  "axis",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding414 = FlaxProxyMember(
  "value",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding415 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FontVariation",
  [_flaxBinding408, _flaxBinding409],
  {
    "toString": _flaxBinding410,
    "@super:toString": _flaxBinding353,
    "@super:get:axis": FlaxInstanceMethod.shared(
      flaxStringCall,
      _FontVariation_super_get_axis,
    ),
    "@super:get:value": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _FontVariation_super_get_value,
    ),
  },
  constructors: {
    "": _flaxBinding411,
    "italic": _flaxBinding412,
    "opticalSize": _flaxBinding412,
    "slant": _flaxBinding412,
    "width": _flaxBinding412,
    "weight": _flaxBinding412,
    "@implementation": _flaxBinding411,
    "@implementation:italic": _flaxBinding412,
    "@implementation:opticalSize": _flaxBinding412,
    "@implementation:slant": _flaxBinding412,
    "@implementation:width": _flaxBinding412,
    "@implementation:weight": _flaxBinding412,
  },
  create: _createFontVariation,
  matches: _isFontVariation,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding355, _flaxBinding413, _flaxBinding414]),
);
const _flaxBinding416 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FragmentShader",
);
const _flaxBinding417 = FlaxInstanceMethod.plain(
  _flaxBinding200,
  _flaxBinding416,
  _FragmentProgram_fragmentShader,
);
const _flaxBinding418 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FragmentProgram",
  [],
  {"fragmentShader": _flaxBinding417},
  constructors: {},
  create: _createFragmentProgram,
  matches: _isFragmentProgram,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding419 = FlaxGetter.plain(
  "debugDisposed",
  flaxBoolType,
  _Shader_debugDisposed,
);
const _flaxBinding420 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _Shader_dispose,
);
const _flaxBinding421 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Shader",
  [_flaxBinding419],
  {"dispose": _flaxBinding420},
  constructors: {},
  create: _createShader,
  matches: _isShader,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding422 = <FlaxParameter>[
  FlaxParameter.required("index", flaxIntType),
  FlaxParameter.required("value", flaxDoubleType),
];
const _flaxBinding423 = FlaxInstanceMethod.plain(
  _flaxBinding422,
  flaxVoidType,
  _FragmentShader_setFloat,
);
const _flaxBinding424 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter("index", flaxNullableIntType, required: false),
];
const _flaxBinding425 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformFloatSlot",
);
const _flaxBinding426 = FlaxInstanceMethod.plain(
  _flaxBinding424,
  _flaxBinding425,
  _FragmentShader_getUniformFloat,
);
const _flaxBinding427 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformVec2Slot",
);
const _flaxBinding428 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
];
const _flaxBinding429 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding427,
  _FragmentShader_getUniformVec2,
);
const _flaxBinding430 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformVec3Slot",
);
const _flaxBinding431 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding430,
  _FragmentShader_getUniformVec3,
);
const _flaxBinding432 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformVec4Slot",
);
const _flaxBinding433 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding432,
  _FragmentShader_getUniformVec4,
);
const _flaxBinding434 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformMat2Slot",
);
const _flaxBinding435 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding434,
  _FragmentShader_getUniformMat2,
);
const _flaxBinding436 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformMat3Slot",
);
const _flaxBinding437 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding436,
  _FragmentShader_getUniformMat3,
);
const _flaxBinding438 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformMat4Slot",
);
const _flaxBinding439 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding438,
  _FragmentShader_getUniformMat4,
);
const _flaxBinding440 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformFloatSlot>>,
);
const _flaxBinding441 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding440,
  _FragmentShader_getUniformFloatArray,
);
const _flaxBinding442 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformVec2Slot>>,
);
const _flaxBinding443 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding442,
  _FragmentShader_getUniformVec2Array,
);
const _flaxBinding444 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformVec3Slot>>,
);
const _flaxBinding445 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding444,
  _FragmentShader_getUniformVec3Array,
);
const _flaxBinding446 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformVec4Slot>>,
);
const _flaxBinding447 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding446,
  _FragmentShader_getUniformVec4Array,
);
const _flaxBinding448 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformMat2Slot>>,
);
const _flaxBinding449 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding448,
  _FragmentShader_getUniformMat2Array,
);
const _flaxBinding450 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformMat3Slot>>,
);
const _flaxBinding451 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding450,
  _FragmentShader_getUniformMat3Array,
);
const _flaxBinding452 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformMat4Slot>>,
);
const _flaxBinding453 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding452,
  _FragmentShader_getUniformMat4Array,
);
const _flaxBinding454 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImageSamplerSlot",
);
const _flaxBinding455 = FlaxInstanceMethod.plain(
  _flaxBinding428,
  _flaxBinding454,
  _FragmentShader_getImageSampler,
);
const _flaxBinding456 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:FilterQuality",
);
const _flaxBinding457 = <FlaxParameter>[
  FlaxParameter.required("index", flaxIntType),
  FlaxParameter.required("image", _flaxBinding24),
  FlaxParameter(
    "filterQuality",
    _flaxBinding456,
    required: false,
    defaultValue: api.FilterQuality.none,
  ),
];
const _flaxBinding458 = FlaxInstanceMethod.plain(
  _flaxBinding457,
  flaxVoidType,
  _FragmentShader_setImageSampler,
);
const _flaxBinding459 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FragmentShader",
  [],
  {
    "setFloat": _flaxBinding423,
    "getUniformFloat": _flaxBinding426,
    "getUniformVec2": _flaxBinding429,
    "getUniformVec3": _flaxBinding431,
    "getUniformVec4": _flaxBinding433,
    "getUniformMat2": _flaxBinding435,
    "getUniformMat3": _flaxBinding437,
    "getUniformMat4": _flaxBinding439,
    "getUniformFloatArray": _flaxBinding441,
    "getUniformVec2Array": _flaxBinding443,
    "getUniformVec3Array": _flaxBinding445,
    "getUniformVec4Array": _flaxBinding447,
    "getUniformMat2Array": _flaxBinding449,
    "getUniformMat3Array": _flaxBinding451,
    "getUniformMat4Array": _flaxBinding453,
    "getImageSampler": _flaxBinding455,
    "setImageSampler": _flaxBinding458,
  },
  constructors: {},
  create: _createFragmentShader,
  matches: _isFragmentShader,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:Shader", "dart:core::Object"],
  parent: _flaxBinding421,
  disposeMethod: "dispose",
);
const _flaxBinding460 = FlaxGetter.plain(
  "frameNumber",
  flaxIntType,
  _FrameData_frameNumber,
);
const _flaxBinding461 = FlaxProxyMember("frameNumber", 1, flaxIntCall);
const _flaxBinding462 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FrameData",
  [_flaxBinding460],
  {},
  constructors: {"@implementation": _flaxBinding200},
  create: _createFrameData,
  matches: _isFrameData,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding461]),
);
const _flaxBinding463 = FlaxGetter.plain(
  "duration",
  flaxDurationType,
  _FrameInfo_duration,
);
const _flaxBinding464 = FlaxGetter.plain(
  "image",
  _flaxBinding24,
  _FrameInfo_image,
);
const _flaxBinding465 = FlaxProxyMember("duration", 1, _flaxBinding77);
const _flaxBinding466 = FlaxProxyMember("image", 1, _flaxBinding78);
const _flaxBinding467 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FrameInfo",
  [_flaxBinding463, _flaxBinding464],
  {},
  constructors: {"@implementation": _flaxBinding200},
  create: _createFrameInfo,
  matches: _isFrameInfo,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding465, _flaxBinding466]),
);
const _flaxBinding468 = FlaxGetter.plain(
  "buildDuration",
  flaxDurationType,
  _FrameTiming_buildDuration,
);
const _flaxBinding469 = FlaxGetter.plain(
  "rasterDuration",
  flaxDurationType,
  _FrameTiming_rasterDuration,
);
const _flaxBinding470 = FlaxGetter.plain(
  "vsyncOverhead",
  flaxDurationType,
  _FrameTiming_vsyncOverhead,
);
const _flaxBinding471 = FlaxGetter.plain(
  "totalSpan",
  flaxDurationType,
  _FrameTiming_totalSpan,
);
const _flaxBinding472 = FlaxGetter.plain(
  "layerCacheCount",
  flaxIntType,
  _FrameTiming_layerCacheCount,
);
const _flaxBinding473 = FlaxGetter.plain(
  "layerCacheBytes",
  flaxIntType,
  _FrameTiming_layerCacheBytes,
);
const _flaxBinding474 = FlaxGetter.plain(
  "layerCacheMegabytes",
  flaxDoubleType,
  _FrameTiming_layerCacheMegabytes,
);
const _flaxBinding475 = FlaxGetter.plain(
  "pictureCacheCount",
  flaxIntType,
  _FrameTiming_pictureCacheCount,
);
const _flaxBinding476 = FlaxGetter.plain(
  "pictureCacheBytes",
  flaxIntType,
  _FrameTiming_pictureCacheBytes,
);
const _flaxBinding477 = FlaxGetter.plain(
  "pictureCacheMegabytes",
  flaxDoubleType,
  _FrameTiming_pictureCacheMegabytes,
);
const _flaxBinding478 = FlaxGetter.plain(
  "frameNumber",
  flaxIntType,
  _FrameTiming_frameNumber,
);
const _flaxBinding479 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:FramePhase",
);
const _flaxBinding480 = <FlaxParameter>[
  FlaxParameter.required("phase", _flaxBinding479),
];
const _flaxBinding481 = FlaxInstanceMethod.plain(
  _flaxBinding480,
  flaxIntType,
  _FrameTiming_timestampInMicroseconds,
);
const _flaxBinding482 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FrameTiming_toString,
);
const _flaxBinding483 = <FlaxParameter>[
  FlaxParameter.required("vsyncStart", flaxIntType),
  FlaxParameter.required("buildStart", flaxIntType),
  FlaxParameter.required("buildFinish", flaxIntType),
  FlaxParameter.required("rasterStart", flaxIntType),
  FlaxParameter.required("rasterFinish", flaxIntType),
  FlaxParameter.required("rasterFinishWallTime", flaxIntType),
  FlaxParameter(
    "layerCacheCount",
    flaxIntType,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "layerCacheBytes",
    flaxIntType,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "pictureCacheCount",
    flaxIntType,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "pictureCacheBytes",
    flaxIntType,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter("frameNumber", flaxIntType, required: false, defaultValue: -1),
];
const _flaxBinding484 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FrameTiming",
  [
    _flaxBinding468,
    _flaxBinding469,
    _flaxBinding470,
    _flaxBinding471,
    _flaxBinding472,
    _flaxBinding473,
    _flaxBinding474,
    _flaxBinding475,
    _flaxBinding476,
    _flaxBinding477,
    _flaxBinding478,
  ],
  {"timestampInMicroseconds": _flaxBinding481, "toString": _flaxBinding482},
  constructors: {"": _flaxBinding483},
  create: _createFrameTiming,
  matches: _isFrameTiming,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding485 = FlaxGetter.plain(
  "physicalTouchSlop",
  flaxNullableDoubleType,
  _GestureSettings_physicalTouchSlop,
);
const _flaxBinding486 = FlaxGetter.plain(
  "physicalDoubleTapSlop",
  flaxNullableDoubleType,
  _GestureSettings_physicalDoubleTapSlop,
);
const _flaxBinding487 = <FlaxParameter>[
  FlaxParameter(
    "physicalDoubleTapSlop",
    flaxNullableDoubleType,
    required: false,
  ),
  FlaxParameter("physicalTouchSlop", flaxNullableDoubleType, required: false),
];
const _flaxBinding488 = FlaxInstanceMethod.plain(
  _flaxBinding487,
  _flaxBinding383,
  _GestureSettings_copyWith,
);
const _flaxBinding489 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _GestureSettings_toString,
);
const _flaxBinding490 = <FlaxParameter>[
  FlaxParameter("physicalTouchSlop", flaxNullableDoubleType, required: false),
  FlaxParameter(
    "physicalDoubleTapSlop",
    flaxNullableDoubleType,
    required: false,
  ),
];
const _flaxBinding491 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "physicalTouchSlop",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "physicalDoubleTapSlop",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding383,
  id: "callback:<>(n:o:physicalTouchSlop:double?:,n:o:physicalDoubleTapSlop:double?:)->object:flax.core/sdk_dart_ui#type:GestureSettings",
);
const _flaxBinding492 = FlaxProxyMember(
  "copyWith",
  0,
  _flaxBinding491,
  hasSuper: true,
);
const _flaxBinding493 = FlaxProxyMember(
  "physicalTouchSlop",
  1,
  flaxNullableDoubleCall,
  hasSuper: true,
);
const _flaxBinding494 = FlaxProxyMember(
  "physicalDoubleTapSlop",
  1,
  flaxNullableDoubleCall,
  hasSuper: true,
);
const _flaxBinding495 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:GestureSettings",
  [_flaxBinding485, _flaxBinding486],
  {
    "copyWith": _flaxBinding488,
    "toString": _flaxBinding489,
    "@super:copyWith": FlaxInstanceMethod.plain(
      _flaxBinding487,
      _flaxBinding383,
      _GestureSettings_super_copyWith,
    ),
    "@super:toString": _flaxBinding353,
    "@super:get:physicalTouchSlop": FlaxInstanceMethod.shared(
      flaxNullableDoubleCall,
      _GestureSettings_super_get_physicalTouchSlop,
    ),
    "@super:get:physicalDoubleTapSlop": FlaxInstanceMethod.shared(
      flaxNullableDoubleCall,
      _GestureSettings_super_get_physicalDoubleTapSlop,
    ),
  },
  constructors: {"": _flaxBinding490, "@implementation": _flaxBinding490},
  create: _createGestureSettings,
  matches: _isGestureSettings,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding492,
    _flaxBinding355,
    _flaxBinding493,
    _flaxBinding494,
  ]),
);
const _flaxBinding496 = FlaxGetter.plain(
  "graphemeClusterLayoutBounds",
  flaxRectType,
  _GlyphInfo_graphemeClusterLayoutBounds,
);
const _flaxBinding497 = FlaxGetter.plain(
  "graphemeClusterCodeUnitRange",
  _flaxBinding86,
  _GlyphInfo_graphemeClusterCodeUnitRange,
);
const _flaxBinding498 = FlaxGetter.plain(
  "writingDirection",
  _flaxBinding177,
  _GlyphInfo_writingDirection,
);
const _flaxBinding499 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _GlyphInfo_toString,
);
const _flaxBinding500 = <FlaxParameter>[
  FlaxParameter.required("graphemeClusterLayoutBounds", flaxRectType),
  FlaxParameter.required("graphemeClusterCodeUnitRange", _flaxBinding86),
  FlaxParameter.required("writingDirection", _flaxBinding177),
];
const _flaxBinding501 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:GlyphInfo",
  [_flaxBinding496, _flaxBinding497, _flaxBinding498],
  {"toString": _flaxBinding499},
  constructors: {"": _flaxBinding500},
  create: _createGlyphInfo,
  matches: _isGlyphInfo,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding502 = FlaxTypeRef(
  "list",
  item: flaxColorType,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Color]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding45,
);
const _flaxBinding503 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxDoubleType,
  collection: FlaxCollectionBinding(
    "list:[double:]",
    _collection12Create,
    _collection12Matches,
  ),
  iterable: _flaxBinding117,
);
const _flaxBinding504 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TileMode",
);
const _flaxBinding505 = FlaxTypeRef("Float64List", nullable: true);
const _flaxBinding506 = <FlaxParameter>[
  FlaxParameter.required("from", flaxOffsetType),
  FlaxParameter.required("to", flaxOffsetType),
  FlaxParameter.required("colors", _flaxBinding502),
  FlaxParameter("colorStops", _flaxBinding503, required: false),
  FlaxParameter(
    "tileMode",
    _flaxBinding504,
    required: false,
    defaultValue: api.TileMode.clamp,
  ),
  FlaxParameter("matrix4", _flaxBinding505, required: false),
];
const _flaxBinding507 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
  nullable: true,
);
const _flaxBinding508 = <FlaxParameter>[
  FlaxParameter.required("center", flaxOffsetType),
  FlaxParameter.required("radius", flaxDoubleType),
  FlaxParameter.required("colors", _flaxBinding502),
  FlaxParameter("colorStops", _flaxBinding503, required: false),
  FlaxParameter(
    "tileMode",
    _flaxBinding504,
    required: false,
    defaultValue: api.TileMode.clamp,
  ),
  FlaxParameter("matrix4", _flaxBinding505, required: false),
  FlaxParameter("focal", _flaxBinding507, required: false),
  FlaxParameter(
    "focalRadius",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
];
const _flaxBinding509 = <FlaxParameter>[
  FlaxParameter.required("center", flaxOffsetType),
  FlaxParameter.required("colors", _flaxBinding502),
  FlaxParameter("colorStops", _flaxBinding503, required: false),
  FlaxParameter(
    "tileMode",
    _flaxBinding504,
    required: false,
    defaultValue: api.TileMode.clamp,
  ),
  FlaxParameter(
    "startAngle",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "endAngle",
    flaxDoubleType,
    required: false,
    defaultValue: 6.283185307179586,
  ),
  FlaxParameter("matrix4", _flaxBinding505, required: false),
];
const _flaxBinding510 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Gradient",
  [],
  {},
  constructors: {
    "linear": _flaxBinding506,
    "radial": _flaxBinding508,
    "sweep": _flaxBinding509,
  },
  create: _createGradient,
  matches: _isGradient,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:Shader", "dart:core::Object"],
  parent: _flaxBinding421,
  disposeMethod: "dispose",
);
const _flaxBinding511 = FlaxGetter.plain(
  "view",
  _flaxBinding79,
  _HitTestRequest_view,
);
const _flaxBinding512 = FlaxGetter.plain(
  "offset",
  flaxOffsetType,
  _HitTestRequest_offset,
);
const _flaxBinding513 = FlaxInstanceMethod.shared(
  _flaxBinding81,
  _FlaxProxyDispatch1_super_get_offset,
);
const _flaxBinding514 = <FlaxParameter>[
  FlaxParameter.required("view", _flaxBinding79),
  FlaxParameter.required("offset", flaxOffsetType),
];
const _flaxBinding515 = FlaxProxyMember(
  "view",
  1,
  _flaxBinding80,
  hasSuper: true,
);
const _flaxBinding516 = FlaxProxyMember(
  "offset",
  1,
  _flaxBinding81,
  hasSuper: true,
);
const _flaxBinding517 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:HitTestRequest",
  [_flaxBinding511, _flaxBinding512],
  {
    "@super:get:view": FlaxInstanceMethod.shared(
      _flaxBinding80,
      _HitTestRequest_super_get_view,
    ),
    "@super:get:offset": _flaxBinding513,
  },
  constructors: {"": _flaxBinding514, "@implementation": _flaxBinding514},
  create: _createHitTestRequest,
  matches: _isHitTestRequest,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding515, _flaxBinding516]),
);
const _flaxBinding518 = FlaxGetter.plain(
  "hasPlatformView",
  flaxBoolType,
  _HitTestResponse_hasPlatformView,
);
const _flaxBinding519 = <FlaxParameter>[
  FlaxParameter.required("hasPlatformView", flaxBoolType),
];
const _flaxBinding520 = FlaxProxyMember(
  "hasPlatformView",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding521 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:HitTestResponse",
  [_flaxBinding518],
  {
    "@super:get:hasPlatformView": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _HitTestResponse_super_get_hasPlatformView,
    ),
  },
  constructors: {"": _flaxBinding519, "@implementation": _flaxBinding519},
  create: _createHitTestResponse,
  matches: _isHitTestResponse,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding520]),
);
const _flaxBinding522 = FlaxGetter.plain("width", flaxIntType, _Image_width);
const _flaxBinding523 = FlaxGetter.plain("height", flaxIntType, _Image_height);
const _flaxBinding524 = FlaxGetter.plain(
  "debugDisposed",
  flaxBoolType,
  _Image_debugDisposed,
);
const _flaxBinding525 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ColorSpace",
);
const _flaxBinding526 = FlaxGetter.plain(
  "colorSpace",
  _flaxBinding525,
  _Image_colorSpace,
);
const _flaxBinding527 = FlaxInstanceMethod.shared(flaxVoidCall, _Image_dispose);
const _flaxBinding528 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ImageByteFormat",
);
const _flaxBinding529 = <FlaxParameter>[
  FlaxParameter(
    "format",
    _flaxBinding528,
    required: false,
    defaultValue: api.ImageByteFormat.rawRgba,
  ),
];
const _flaxBinding530 = FlaxTypeRef(
  "future",
  item: _flaxBinding52,
  future: FlaxFutureBinding("ByteData?:", _future3Adapt),
);
const _flaxBinding531 = FlaxInstanceMethod.plain(
  _flaxBinding529,
  _flaxBinding530,
  _Image_toByteData,
);
const _flaxBinding532 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
);
const _flaxBinding533 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding532,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:StackTrace]",
    _collection21Create,
    _collection21Matches,
    restore: _collection21Restore,
  ),
);
const _flaxBinding534 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding532,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:StackTrace]",
    _collection20Create,
    _collection20Matches,
  ),
  iterable: _flaxBinding533,
);
const _flaxBinding535 = FlaxInstanceMethod.plain(
  _flaxBinding200,
  _flaxBinding534,
  _Image_debugGetOpenHandleStackTraces,
);
const _flaxBinding536 = FlaxInstanceMethod.shared(_flaxBinding78, _Image_clone);
const _flaxBinding537 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding24),
];
const _flaxBinding538 = FlaxInstanceMethod.plain(
  _flaxBinding537,
  flaxBoolType,
  _Image_isCloneOf,
);
const _flaxBinding539 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Image_toString,
);
const _flaxBinding540 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Image",
  [_flaxBinding522, _flaxBinding523, _flaxBinding524, _flaxBinding526],
  {
    "dispose": _flaxBinding527,
    "toByteData": _flaxBinding531,
    "debugGetOpenHandleStackTraces": _flaxBinding535,
    "clone": _flaxBinding536,
    "isCloneOf": _flaxBinding538,
    "toString": _flaxBinding539,
  },
  constructors: {},
  create: _createImage,
  matches: _isImage,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding541 = FlaxGetter.plain(
  "width",
  flaxIntType,
  _ImageDescriptor_width,
);
const _flaxBinding542 = FlaxGetter.plain(
  "height",
  flaxIntType,
  _ImageDescriptor_height,
);
const _flaxBinding543 = FlaxGetter.plain(
  "bytesPerPixel",
  flaxIntType,
  _ImageDescriptor_bytesPerPixel,
);
const _flaxBinding544 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _ImageDescriptor_dispose,
);
const _flaxBinding545 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TargetPixelFormat",
);
const _flaxBinding546 = <FlaxParameter>[
  FlaxParameter(
    "targetFormat",
    _flaxBinding545,
    required: false,
    defaultValue: api.TargetPixelFormat.dontCare,
  ),
  FlaxParameter("targetHeight", flaxNullableIntType, required: false),
  FlaxParameter("targetWidth", flaxNullableIntType, required: false),
];
const _flaxBinding547 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Codec",
);
const _flaxBinding548 = FlaxTypeRef(
  "future",
  item: _flaxBinding547,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:Codec",
    _future4Adapt,
  ),
);
const _flaxBinding549 = FlaxInstanceMethod.plain(
  _flaxBinding546,
  _flaxBinding548,
  _ImageDescriptor_instantiateCodec,
);
const _flaxBinding550 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImmutableBuffer",
);
const _flaxBinding551 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PixelFormat",
);
const _flaxBinding552 = <FlaxParameter>[
  FlaxParameter.required("buffer", _flaxBinding550),
  FlaxParameter.required("width", flaxIntType),
  FlaxParameter.required("height", flaxIntType),
  FlaxParameter("rowBytes", flaxNullableIntType, required: false),
  FlaxParameter.required("pixelFormat", _flaxBinding551),
];
const _flaxBinding553 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "targetWidth",
      flaxNullableIntType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "targetHeight",
      flaxNullableIntType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "targetFormat",
      _flaxBinding545,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding548,
  id: "callback:<>(n:o:targetWidth:int?:,n:o:targetHeight:int?:,n:o:targetFormat:enum:flax.core/sdk_dart_ui#type:TargetPixelFormat)->future:[object:flax.core/sdk_dart_ui#type:Codec]",
);
const _flaxBinding554 = FlaxProxyMember("instantiateCodec", 0, _flaxBinding553);
const _flaxBinding555 = FlaxProxyMember("width", 1, flaxIntCall);
const _flaxBinding556 = FlaxProxyMember("height", 1, flaxIntCall);
const _flaxBinding557 = FlaxProxyMember("bytesPerPixel", 1, flaxIntCall);
const _flaxBinding558 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ImageDescriptor",
  [_flaxBinding541, _flaxBinding542, _flaxBinding543],
  {"dispose": _flaxBinding544, "instantiateCodec": _flaxBinding549},
  constructors: {"raw": _flaxBinding552, "@implementation": _flaxBinding200},
  create: _createImageDescriptor,
  matches: _isImageDescriptor,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding201,
    _flaxBinding554,
    _flaxBinding555,
    _flaxBinding556,
    _flaxBinding557,
  ]),
);
const _flaxBinding559 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ImageFilterEngineLayer",
  [],
  {},
  constructors: {},
  create: _createImageFilterEngineLayer,
  matches: _isImageFilterEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding560 = FlaxGetter.plain(
  "shaderIndex",
  flaxIntType,
  _ImageSamplerSlot_shaderIndex,
);
const _flaxBinding561 = FlaxGetter.plain(
  "name",
  flaxStringType,
  _ImageSamplerSlot_name,
);
const _flaxBinding562 = <FlaxParameter>[
  FlaxParameter.required("val", _flaxBinding24),
];
const _flaxBinding563 = FlaxInstanceMethod.plain(
  _flaxBinding562,
  flaxVoidType,
  _ImageSamplerSlot_set,
);
const _flaxBinding564 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ImageSamplerSlot",
  [_flaxBinding560, _flaxBinding561],
  {"set": _flaxBinding563},
  constructors: {},
  create: _createImageSamplerSlot,
  matches: _isImageSamplerSlot,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding565 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _FlaxProxyDispatch2_super_call_dispose,
);
const _flaxBinding566 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _FlaxProxyDispatch2_super_get_debugDisposed,
);
const _flaxBinding567 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:FilterQuality",
  nullable: true,
);
const _flaxBinding568 = <FlaxParameter>[
  FlaxParameter.required("image", _flaxBinding24),
  FlaxParameter.required("tmx", _flaxBinding504),
  FlaxParameter.required("tmy", _flaxBinding504),
  FlaxParameter.required("matrix4", _flaxBinding7),
  FlaxParameter("filterQuality", _flaxBinding567, required: false),
];
const _flaxBinding569 = FlaxProxyMember(
  "dispose",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding570 = FlaxProxyMember(
  "debugDisposed",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding571 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ImageShader",
  [],
  {
    "@super:dispose": _flaxBinding565,
    "@super:get:debugDisposed": _flaxBinding566,
  },
  constructors: {"": _flaxBinding568, "@implementation": _flaxBinding568},
  create: _createImageShader,
  matches: _isImageShader,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:Shader", "dart:core::Object"],
  parent: _flaxBinding421,
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding569, _flaxBinding570]),
);
const _flaxBinding572 = FlaxGetter.plain(
  "length",
  flaxIntType,
  _ImmutableBuffer_length,
);
const _flaxBinding573 = FlaxGetter.plain(
  "debugDisposed",
  flaxBoolType,
  _ImmutableBuffer_debugDisposed,
);
const _flaxBinding574 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _ImmutableBuffer_dispose,
);
const _flaxBinding575 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ImmutableBuffer",
  [_flaxBinding572, _flaxBinding573],
  {"dispose": _flaxBinding574},
  constructors: {},
  create: _createImmutableBuffer,
  matches: _isImmutableBuffer,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding576 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:IsolateNameServer",
  [],
  {},
  constructors: {},
  create: _createIsolateNameServer,
  matches: _isIsolateNameServer,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding577 = FlaxGetter.plain(
  "timeStamp",
  flaxDurationType,
  _KeyData_timeStamp,
);
const _flaxBinding578 = FlaxGetter.plain("type", _flaxBinding82, _KeyData_type);
const _flaxBinding579 = FlaxGetter.plain(
  "deviceType",
  _flaxBinding84,
  _KeyData_deviceType,
);
const _flaxBinding580 = FlaxGetter.plain(
  "physical",
  flaxIntType,
  _KeyData_physical,
);
const _flaxBinding581 = FlaxGetter.plain(
  "logical",
  flaxIntType,
  _KeyData_logical,
);
const _flaxBinding582 = FlaxGetter.plain(
  "character",
  flaxNullableStringType,
  _KeyData_character,
);
const _flaxBinding583 = FlaxGetter.plain(
  "synthesized",
  flaxBoolType,
  _KeyData_synthesized,
);
const _flaxBinding584 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _KeyData_toString,
);
const _flaxBinding585 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _KeyData_toStringFull,
);
const _flaxBinding586 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch3_super_call_toStringFull,
);
const _flaxBinding587 = FlaxInstanceMethod.shared(
  _flaxBinding77,
  _FlaxProxyDispatch3_super_get_timeStamp,
);
const _flaxBinding588 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _FlaxProxyDispatch3_super_get_synthesized,
);
const _flaxBinding589 = <FlaxParameter>[
  FlaxParameter.required("timeStamp", flaxDurationType),
  FlaxParameter.required("type", _flaxBinding82),
  FlaxParameter.required("physical", flaxIntType),
  FlaxParameter.required("logical", flaxIntType),
  FlaxParameter.required("character", flaxNullableStringType),
  FlaxParameter.required("synthesized", flaxBoolType),
  FlaxParameter(
    "deviceType",
    _flaxBinding84,
    required: false,
    defaultValue: api.KeyEventDeviceType.keyboard,
  ),
];
const _flaxBinding590 = FlaxProxyMember(
  "toStringFull",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding591 = FlaxProxyMember(
  "timeStamp",
  1,
  _flaxBinding77,
  hasSuper: true,
);
const _flaxBinding592 = FlaxProxyMember(
  "type",
  1,
  _flaxBinding83,
  hasSuper: true,
);
const _flaxBinding593 = FlaxProxyMember(
  "deviceType",
  1,
  _flaxBinding85,
  hasSuper: true,
);
const _flaxBinding594 = FlaxProxyMember(
  "physical",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding595 = FlaxProxyMember(
  "logical",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding596 = FlaxProxyMember(
  "character",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding597 = FlaxProxyMember(
  "synthesized",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding598 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:KeyData",
  [
    _flaxBinding577,
    _flaxBinding578,
    _flaxBinding579,
    _flaxBinding580,
    _flaxBinding581,
    _flaxBinding582,
    _flaxBinding583,
  ],
  {
    "toString": _flaxBinding584,
    "toStringFull": _flaxBinding585,
    "@super:toString": _flaxBinding353,
    "@super:toStringFull": _flaxBinding586,
    "@super:get:timeStamp": _flaxBinding587,
    "@super:get:type": FlaxInstanceMethod.shared(
      _flaxBinding83,
      _KeyData_super_get_type,
    ),
    "@super:get:deviceType": FlaxInstanceMethod.shared(
      _flaxBinding85,
      _KeyData_super_get_deviceType,
    ),
    "@super:get:physical": FlaxInstanceMethod.shared(
      flaxIntCall,
      _KeyData_super_get_physical,
    ),
    "@super:get:logical": FlaxInstanceMethod.shared(
      flaxIntCall,
      _KeyData_super_get_logical,
    ),
    "@super:get:character": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _KeyData_super_get_character,
    ),
    "@super:get:synthesized": _flaxBinding588,
  },
  constructors: {"": _flaxBinding589, "@implementation": _flaxBinding589},
  create: _createKeyData,
  matches: _isKeyData,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding355,
    _flaxBinding590,
    _flaxBinding591,
    _flaxBinding592,
    _flaxBinding593,
    _flaxBinding594,
    _flaxBinding595,
    _flaxBinding596,
    _flaxBinding597,
  ]),
);
const _flaxBinding599 = FlaxGetter.plain(
  "hardBreak",
  flaxBoolType,
  _LineMetrics_hardBreak,
);
const _flaxBinding600 = FlaxGetter.plain(
  "ascent",
  flaxDoubleType,
  _LineMetrics_ascent,
);
const _flaxBinding601 = FlaxGetter.plain(
  "descent",
  flaxDoubleType,
  _LineMetrics_descent,
);
const _flaxBinding602 = FlaxGetter.plain(
  "unscaledAscent",
  flaxDoubleType,
  _LineMetrics_unscaledAscent,
);
const _flaxBinding603 = FlaxGetter.plain(
  "height",
  flaxDoubleType,
  _LineMetrics_height,
);
const _flaxBinding604 = FlaxGetter.plain(
  "width",
  flaxDoubleType,
  _LineMetrics_width,
);
const _flaxBinding605 = FlaxGetter.plain(
  "left",
  flaxDoubleType,
  _LineMetrics_left,
);
const _flaxBinding606 = FlaxGetter.plain(
  "baseline",
  flaxDoubleType,
  _LineMetrics_baseline,
);
const _flaxBinding607 = FlaxGetter.plain(
  "lineNumber",
  flaxIntType,
  _LineMetrics_lineNumber,
);
const _flaxBinding608 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _LineMetrics_toString,
);
const _flaxBinding609 = FlaxInstanceMethod.shared(
  flaxDoubleCall,
  _FlaxProxyDispatch4_super_get_width,
);
const _flaxBinding610 = FlaxInstanceMethod.shared(
  flaxDoubleCall,
  _FlaxProxyDispatch5_super_get_left,
);
const _flaxBinding611 = <FlaxParameter>[
  FlaxParameter.required("hardBreak", flaxBoolType),
  FlaxParameter.required("ascent", flaxDoubleType),
  FlaxParameter.required("descent", flaxDoubleType),
  FlaxParameter.required("unscaledAscent", flaxDoubleType),
  FlaxParameter.required("height", flaxDoubleType),
  FlaxParameter.required("width", flaxDoubleType),
  FlaxParameter.required("left", flaxDoubleType),
  FlaxParameter.required("baseline", flaxDoubleType),
  FlaxParameter.required("lineNumber", flaxIntType),
];
const _flaxBinding612 = FlaxProxyMember(
  "hardBreak",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding613 = FlaxProxyMember(
  "ascent",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding614 = FlaxProxyMember(
  "descent",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding615 = FlaxProxyMember(
  "unscaledAscent",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding616 = FlaxProxyMember(
  "height",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding617 = FlaxProxyMember(
  "width",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding618 = FlaxProxyMember(
  "left",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding619 = FlaxProxyMember(
  "baseline",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding620 = FlaxProxyMember(
  "lineNumber",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding621 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:LineMetrics",
  [
    _flaxBinding599,
    _flaxBinding600,
    _flaxBinding601,
    _flaxBinding602,
    _flaxBinding603,
    _flaxBinding604,
    _flaxBinding605,
    _flaxBinding606,
    _flaxBinding607,
  ],
  {
    "toString": _flaxBinding608,
    "@super:toString": _flaxBinding353,
    "@super:get:hardBreak": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _LineMetrics_super_get_hardBreak,
    ),
    "@super:get:ascent": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _LineMetrics_super_get_ascent,
    ),
    "@super:get:descent": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _LineMetrics_super_get_descent,
    ),
    "@super:get:unscaledAscent": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _LineMetrics_super_get_unscaledAscent,
    ),
    "@super:get:height": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _LineMetrics_super_get_height,
    ),
    "@super:get:width": _flaxBinding609,
    "@super:get:left": _flaxBinding610,
    "@super:get:baseline": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _LineMetrics_super_get_baseline,
    ),
    "@super:get:lineNumber": FlaxInstanceMethod.shared(
      flaxIntCall,
      _LineMetrics_super_get_lineNumber,
    ),
  },
  constructors: {"": _flaxBinding611, "@implementation": _flaxBinding611},
  create: _createLineMetrics,
  matches: _isLineMetrics,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding355,
    _flaxBinding612,
    _flaxBinding613,
    _flaxBinding614,
    _flaxBinding615,
    _flaxBinding616,
    _flaxBinding617,
    _flaxBinding618,
    _flaxBinding619,
    _flaxBinding620,
  ]),
);
const _flaxBinding622 = FlaxGetter.plain(
  "languageCode",
  flaxStringType,
  _Locale_languageCode,
);
const _flaxBinding623 = FlaxGetter.plain(
  "scriptCode",
  flaxNullableStringType,
  _Locale_scriptCode,
);
const _flaxBinding624 = FlaxGetter.plain(
  "countryCode",
  flaxNullableStringType,
  _Locale_countryCode,
);
const _flaxBinding625 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Locale_toString,
);
const _flaxBinding626 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Locale_toLanguageTag,
);
const _flaxBinding627 = <FlaxParameter>[
  FlaxParameter.required("_languageCode", flaxStringType),
  FlaxParameter("_countryCode", flaxNullableStringType, required: false),
];
const _flaxBinding628 = <FlaxParameter>[
  FlaxParameter(
    "languageCode",
    flaxStringType,
    required: false,
    defaultValue: 'und',
  ),
  FlaxParameter("scriptCode", flaxNullableStringType, required: false),
  FlaxParameter("countryCode", flaxNullableStringType, required: false),
];
const _flaxBinding629 = FlaxProxyMember(
  "toLanguageTag",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding630 = FlaxProxyMember(
  "languageCode",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding631 = FlaxProxyMember(
  "scriptCode",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding632 = FlaxProxyMember(
  "countryCode",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding633 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Locale",
  [_flaxBinding622, _flaxBinding623, _flaxBinding624],
  {
    "toString": _flaxBinding625,
    "toLanguageTag": _flaxBinding626,
    "@super:toString": _flaxBinding353,
    "@super:toLanguageTag": FlaxInstanceMethod.shared(
      flaxStringCall,
      _Locale_super_toLanguageTag,
    ),
    "@super:get:languageCode": FlaxInstanceMethod.shared(
      flaxStringCall,
      _Locale_super_get_languageCode,
    ),
    "@super:get:scriptCode": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _Locale_super_get_scriptCode,
    ),
    "@super:get:countryCode": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _Locale_super_get_countryCode,
    ),
  },
  constructors: {
    "": _flaxBinding627,
    "fromSubtags": _flaxBinding628,
    "@implementation": _flaxBinding627,
    "@implementation:fromSubtags": _flaxBinding628,
  },
  create: _createLocale,
  matches: _isLocale,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding355,
    _flaxBinding629,
    _flaxBinding630,
    _flaxBinding631,
    _flaxBinding632,
  ]),
);
const _flaxBinding634 = FlaxGetter.plain(
  "range",
  _flaxBinding86,
  _StringAttribute_range,
);
const _flaxBinding635 = FlaxInstanceMethod.shared(
  _flaxBinding88,
  _StringAttribute_copy,
);
const _flaxBinding636 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:StringAttribute",
  [_flaxBinding634],
  {"copy": _flaxBinding635},
  constructors: {},
  create: _createStringAttribute,
  matches: _isStringAttribute,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding637 = FlaxGetter.plain(
  "locale",
  _flaxBinding89,
  _LocaleStringAttribute_locale,
);
const _flaxBinding638 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _LocaleStringAttribute_toString,
);
const _flaxBinding639 = FlaxInstanceMethod.shared(
  _flaxBinding88,
  _FlaxProxyDispatch6_super_call_copy,
);
const _flaxBinding640 = FlaxInstanceMethod.shared(
  _flaxBinding91,
  _FlaxProxyDispatch6_super_get_range,
);
const _flaxBinding641 = <FlaxParameter>[
  FlaxParameter.required("range", _flaxBinding86),
  FlaxParameter.required("locale", _flaxBinding89),
];
const _flaxBinding642 = FlaxProxyMember(
  "copy",
  0,
  _flaxBinding88,
  hasSuper: true,
);
const _flaxBinding643 = FlaxProxyMember(
  "locale",
  1,
  _flaxBinding90,
  hasSuper: true,
);
const _flaxBinding644 = FlaxProxyMember(
  "range",
  1,
  _flaxBinding91,
  hasSuper: true,
);
const _flaxBinding645 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:LocaleStringAttribute",
  [_flaxBinding637],
  {
    "toString": _flaxBinding638,
    "@super:copy": _flaxBinding639,
    "@super:toString": _flaxBinding353,
    "@super:get:locale": FlaxInstanceMethod.shared(
      _flaxBinding90,
      _LocaleStringAttribute_super_get_locale,
    ),
    "@super:get:range": _flaxBinding640,
  },
  constructors: {"": _flaxBinding641, "@implementation": _flaxBinding641},
  create: _createLocaleStringAttribute,
  matches: _isLocaleStringAttribute,
  setters: [],
  supertypes: [
    "flax.core/sdk_dart_ui#type:StringAttribute",
    "dart:core::Object",
  ],
  parent: _flaxBinding636,
  proxy: FlaxProxyBinding([
    _flaxBinding642,
    _flaxBinding355,
    _flaxBinding643,
    _flaxBinding644,
  ]),
);
const _flaxBinding646 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _MaskFilter_toString,
);
const _flaxBinding647 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BlurStyle",
);
const _flaxBinding648 = <FlaxParameter>[
  FlaxParameter.required("_style", _flaxBinding647),
  FlaxParameter.required("_sigma", flaxDoubleType),
];
const _flaxBinding649 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:MaskFilter",
  [],
  {"toString": _flaxBinding646, "@super:toString": _flaxBinding353},
  constructors: {
    "blur": _flaxBinding648,
    "@implementation": _flaxBinding648,
    "@implementation:blur": _flaxBinding648,
  },
  create: _createMaskFilter,
  matches: _isMaskFilter,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding355]),
);
const _flaxBinding650 = FlaxGetter.plain(
  "isInfinite",
  flaxBoolType,
  _OffsetBase_isInfinite,
);
const _flaxBinding651 = FlaxGetter.plain(
  "isFinite",
  flaxBoolType,
  _OffsetBase_isFinite,
);
const _flaxBinding652 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _OffsetBase_toString,
);
const _flaxBinding653 = FlaxInstanceMethod.shared(
  _flaxBinding93,
  _OffsetBase_operatorLessThan,
);
const _flaxBinding654 = FlaxInstanceMethod.shared(
  _flaxBinding93,
  _OffsetBase_operatorGreaterThan,
);
const _flaxBinding655 = FlaxInstanceMethod.shared(
  _flaxBinding93,
  _OffsetBase_operatorLessThanOrEqual,
);
const _flaxBinding656 = FlaxInstanceMethod.shared(
  _flaxBinding93,
  _OffsetBase_operatorGreaterThanOrEqual,
);
const _flaxBinding657 = <FlaxParameter>[
  FlaxParameter.required("_dx", flaxDoubleType),
  FlaxParameter.required("_dy", flaxDoubleType),
];
const _flaxBinding658 = FlaxProxyMember(
  "operatorLessThan",
  0,
  _flaxBinding93,
  hasSuper: true,
);
const _flaxBinding659 = FlaxProxyMember(
  "operatorGreaterThan",
  0,
  _flaxBinding93,
  hasSuper: true,
);
const _flaxBinding660 = FlaxProxyMember(
  "operatorLessThanOrEqual",
  0,
  _flaxBinding93,
  hasSuper: true,
);
const _flaxBinding661 = FlaxProxyMember(
  "operatorGreaterThanOrEqual",
  0,
  _flaxBinding93,
  hasSuper: true,
);
const _flaxBinding662 = FlaxProxyMember(
  "isInfinite",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding663 = FlaxProxyMember(
  "isFinite",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding664 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:OffsetBase",
  [_flaxBinding650, _flaxBinding651],
  {
    "toString": _flaxBinding652,
    "operatorLessThan": _flaxBinding653,
    "operatorGreaterThan": _flaxBinding654,
    "operatorLessThanOrEqual": _flaxBinding655,
    "operatorGreaterThanOrEqual": _flaxBinding656,
    "@super:toString": _flaxBinding353,
    "@super:operatorLessThan": FlaxInstanceMethod.shared(
      _flaxBinding93,
      _OffsetBase_super_operatorLessThan,
    ),
    "@super:operatorGreaterThan": FlaxInstanceMethod.shared(
      _flaxBinding93,
      _OffsetBase_super_operatorGreaterThan,
    ),
    "@super:operatorLessThanOrEqual": FlaxInstanceMethod.shared(
      _flaxBinding93,
      _OffsetBase_super_operatorLessThanOrEqual,
    ),
    "@super:operatorGreaterThanOrEqual": FlaxInstanceMethod.shared(
      _flaxBinding93,
      _OffsetBase_super_operatorGreaterThanOrEqual,
    ),
    "@super:get:isInfinite": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _OffsetBase_super_get_isInfinite,
    ),
    "@super:get:isFinite": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _OffsetBase_super_get_isFinite,
    ),
  },
  constructors: {"@implementation": _flaxBinding657},
  create: _createOffsetBase,
  matches: _isOffsetBase,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding355,
    _flaxBinding658,
    _flaxBinding659,
    _flaxBinding660,
    _flaxBinding661,
    _flaxBinding662,
    _flaxBinding663,
  ]),
);
const _flaxBinding665 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:OffsetEngineLayer",
  [],
  {},
  constructors: {},
  create: _createOffsetEngineLayer,
  matches: _isOffsetEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding666 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:OpacityEngineLayer",
  [],
  {},
  constructors: {},
  create: _createOpacityEngineLayer,
  matches: _isOpacityEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding667 = FlaxGetter.plain(
  "isAntiAlias",
  flaxBoolType,
  _Paint_isAntiAlias,
);
const _flaxBinding668 = FlaxGetter.plain("color", flaxColorType, _Paint_color);
const _flaxBinding669 = FlaxGetter.plain(
  "blendMode",
  _flaxBinding11,
  _Paint_blendMode,
);
const _flaxBinding670 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PaintingStyle",
);
const _flaxBinding671 = FlaxGetter.plain(
  "style",
  _flaxBinding670,
  _Paint_style,
);
const _flaxBinding672 = FlaxGetter.plain(
  "strokeWidth",
  flaxDoubleType,
  _Paint_strokeWidth,
);
const _flaxBinding673 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:StrokeCap",
);
const _flaxBinding674 = FlaxGetter.plain(
  "strokeCap",
  _flaxBinding673,
  _Paint_strokeCap,
);
const _flaxBinding675 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:StrokeJoin",
);
const _flaxBinding676 = FlaxGetter.plain(
  "strokeJoin",
  _flaxBinding675,
  _Paint_strokeJoin,
);
const _flaxBinding677 = FlaxGetter.plain(
  "strokeMiterLimit",
  flaxDoubleType,
  _Paint_strokeMiterLimit,
);
const _flaxBinding678 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:MaskFilter",
  nullable: true,
);
const _flaxBinding679 = FlaxGetter.plain(
  "maskFilter",
  _flaxBinding678,
  _Paint_maskFilter,
);
const _flaxBinding680 = FlaxGetter.plain(
  "filterQuality",
  _flaxBinding456,
  _Paint_filterQuality,
);
const _flaxBinding681 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Shader",
  nullable: true,
);
const _flaxBinding682 = FlaxGetter.plain(
  "shader",
  _flaxBinding681,
  _Paint_shader,
);
const _flaxBinding683 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ColorFilter",
  nullable: true,
);
const _flaxBinding684 = FlaxGetter.plain(
  "colorFilter",
  _flaxBinding683,
  _Paint_colorFilter,
);
const _flaxBinding685 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ImageFilter",
  nullable: true,
);
const _flaxBinding686 = FlaxGetter.plain(
  "imageFilter",
  _flaxBinding685,
  _Paint_imageFilter,
);
const _flaxBinding687 = FlaxGetter.plain(
  "invertColors",
  flaxBoolType,
  _Paint_invertColors,
);
const _flaxBinding688 = FlaxSetter(
  "isAntiAlias",
  flaxBoolType,
  _Paint_set_isAntiAlias,
);
const _flaxBinding689 = FlaxSetter("color", flaxColorType, _Paint_set_color);
const _flaxBinding690 = FlaxSetter(
  "blendMode",
  _flaxBinding11,
  _Paint_set_blendMode,
);
const _flaxBinding691 = FlaxSetter("style", _flaxBinding670, _Paint_set_style);
const _flaxBinding692 = FlaxSetter(
  "strokeWidth",
  flaxDoubleType,
  _Paint_set_strokeWidth,
);
const _flaxBinding693 = FlaxSetter(
  "strokeCap",
  _flaxBinding673,
  _Paint_set_strokeCap,
);
const _flaxBinding694 = FlaxSetter(
  "strokeJoin",
  _flaxBinding675,
  _Paint_set_strokeJoin,
);
const _flaxBinding695 = FlaxSetter(
  "strokeMiterLimit",
  flaxDoubleType,
  _Paint_set_strokeMiterLimit,
);
const _flaxBinding696 = FlaxSetter(
  "maskFilter",
  _flaxBinding678,
  _Paint_set_maskFilter,
);
const _flaxBinding697 = FlaxSetter(
  "filterQuality",
  _flaxBinding456,
  _Paint_set_filterQuality,
);
const _flaxBinding698 = FlaxSetter(
  "shader",
  _flaxBinding681,
  _Paint_set_shader,
);
const _flaxBinding699 = FlaxSetter(
  "colorFilter",
  _flaxBinding683,
  _Paint_set_colorFilter,
);
const _flaxBinding700 = FlaxSetter(
  "imageFilter",
  _flaxBinding685,
  _Paint_set_imageFilter,
);
const _flaxBinding701 = FlaxSetter(
  "invertColors",
  flaxBoolType,
  _Paint_set_invertColors,
);
const _flaxBinding702 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Paint_toString,
);
const _flaxBinding703 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding1),
];
const _flaxBinding704 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Paint",
  [
    _flaxBinding667,
    _flaxBinding668,
    _flaxBinding669,
    _flaxBinding671,
    _flaxBinding672,
    _flaxBinding674,
    _flaxBinding676,
    _flaxBinding677,
    _flaxBinding679,
    _flaxBinding680,
    _flaxBinding682,
    _flaxBinding684,
    _flaxBinding686,
    _flaxBinding687,
  ],
  {"toString": _flaxBinding702},
  constructors: {"": _flaxBinding200, "from": _flaxBinding703},
  create: _createPaint,
  matches: _isPaint,
  setters: [
    _flaxBinding688,
    _flaxBinding689,
    _flaxBinding690,
    _flaxBinding691,
    _flaxBinding692,
    _flaxBinding693,
    _flaxBinding694,
    _flaxBinding695,
    _flaxBinding696,
    _flaxBinding697,
    _flaxBinding698,
    _flaxBinding699,
    _flaxBinding700,
    _flaxBinding701,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding705 = FlaxGetter.plain(
  "width",
  flaxDoubleType,
  _Paragraph_width,
);
const _flaxBinding706 = FlaxGetter.plain(
  "height",
  flaxDoubleType,
  _Paragraph_height,
);
const _flaxBinding707 = FlaxGetter.plain(
  "longestLine",
  flaxDoubleType,
  _Paragraph_longestLine,
);
const _flaxBinding708 = FlaxGetter.plain(
  "minIntrinsicWidth",
  flaxDoubleType,
  _Paragraph_minIntrinsicWidth,
);
const _flaxBinding709 = FlaxGetter.plain(
  "maxIntrinsicWidth",
  flaxDoubleType,
  _Paragraph_maxIntrinsicWidth,
);
const _flaxBinding710 = FlaxGetter.plain(
  "alphabeticBaseline",
  flaxDoubleType,
  _Paragraph_alphabeticBaseline,
);
const _flaxBinding711 = FlaxGetter.plain(
  "ideographicBaseline",
  flaxDoubleType,
  _Paragraph_ideographicBaseline,
);
const _flaxBinding712 = FlaxGetter.plain(
  "didExceedMaxLines",
  flaxBoolType,
  _Paragraph_didExceedMaxLines,
);
const _flaxBinding713 = FlaxGetter.plain(
  "numberOfLines",
  flaxIntType,
  _Paragraph_numberOfLines,
);
const _flaxBinding714 = FlaxGetter.plain(
  "debugDisposed",
  flaxBoolType,
  _Paragraph_debugDisposed,
);
const _flaxBinding715 = FlaxInstanceMethod.shared(
  _flaxBinding95,
  _Paragraph_layout,
);
const _flaxBinding716 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BoxHeightStyle",
);
const _flaxBinding717 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BoxWidthStyle",
);
const _flaxBinding718 = <FlaxParameter>[
  FlaxParameter.required("start", flaxIntType),
  FlaxParameter.required("end", flaxIntType),
  FlaxParameter(
    "boxHeightStyle",
    _flaxBinding716,
    required: false,
    defaultValue: api.BoxHeightStyle.tight,
  ),
  FlaxParameter(
    "boxWidthStyle",
    _flaxBinding717,
    required: false,
    defaultValue: api.BoxWidthStyle.tight,
  ),
];
const _flaxBinding719 = FlaxInstanceMethod.plain(
  _flaxBinding718,
  _flaxBinding98,
  _Paragraph_getBoxesForRange,
);
const _flaxBinding720 = FlaxInstanceMethod.shared(
  _flaxBinding99,
  _Paragraph_getBoxesForPlaceholders,
);
const _flaxBinding721 = FlaxInstanceMethod.shared(
  _flaxBinding101,
  _Paragraph_getPositionForOffset,
);
const _flaxBinding722 = FlaxInstanceMethod.shared(
  _flaxBinding103,
  _Paragraph_getClosestGlyphInfoForOffset,
);
const _flaxBinding723 = FlaxInstanceMethod.shared(
  _flaxBinding104,
  _Paragraph_getGlyphInfoAt,
);
const _flaxBinding724 = FlaxInstanceMethod.shared(
  _flaxBinding105,
  _Paragraph_getWordBoundary,
);
const _flaxBinding725 = FlaxInstanceMethod.shared(
  _flaxBinding105,
  _Paragraph_getLineBoundary,
);
const _flaxBinding726 = FlaxInstanceMethod.shared(
  _flaxBinding109,
  _Paragraph_computeLineMetrics,
);
const _flaxBinding727 = FlaxInstanceMethod.shared(
  _flaxBinding111,
  _Paragraph_getLineMetricsAt,
);
const _flaxBinding728 = FlaxInstanceMethod.shared(
  _flaxBinding112,
  _Paragraph_getLineNumberAt,
);
const _flaxBinding729 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _Paragraph_dispose,
);
const _flaxBinding730 = FlaxProxyMember("layout", 0, _flaxBinding95);
const _flaxBinding731 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("start", flaxIntType),
    FlaxCallbackParameter.plain("end", flaxIntType),
    FlaxCallbackParameter.plain(
      "boxHeightStyle",
      _flaxBinding716,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "boxWidthStyle",
      _flaxBinding717,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding98,
  id: "callback:<>(p:r:start:int:,p:r:end:int:,n:o:boxHeightStyle:enum:flax.core/sdk_dart_ui#type:BoxHeightStyle,n:o:boxWidthStyle:enum:flax.core/sdk_dart_ui#type:BoxWidthStyle)->list:[object:flax.core/sdk_dart_ui#type:TextBox]",
);
const _flaxBinding732 = FlaxProxyMember("getBoxesForRange", 0, _flaxBinding731);
const _flaxBinding733 = FlaxProxyMember(
  "getBoxesForPlaceholders",
  0,
  _flaxBinding99,
);
const _flaxBinding734 = FlaxProxyMember(
  "getPositionForOffset",
  0,
  _flaxBinding101,
);
const _flaxBinding735 = FlaxProxyMember(
  "getClosestGlyphInfoForOffset",
  0,
  _flaxBinding103,
);
const _flaxBinding736 = FlaxProxyMember("getGlyphInfoAt", 0, _flaxBinding104);
const _flaxBinding737 = FlaxProxyMember("getWordBoundary", 0, _flaxBinding105);
const _flaxBinding738 = FlaxProxyMember("getLineBoundary", 0, _flaxBinding105);
const _flaxBinding739 = FlaxProxyMember(
  "computeLineMetrics",
  0,
  _flaxBinding109,
);
const _flaxBinding740 = FlaxProxyMember("getLineMetricsAt", 0, _flaxBinding111);
const _flaxBinding741 = FlaxProxyMember("getLineNumberAt", 0, _flaxBinding112);
const _flaxBinding742 = FlaxProxyMember("width", 1, flaxDoubleCall);
const _flaxBinding743 = FlaxProxyMember("height", 1, flaxDoubleCall);
const _flaxBinding744 = FlaxProxyMember("longestLine", 1, flaxDoubleCall);
const _flaxBinding745 = FlaxProxyMember("minIntrinsicWidth", 1, flaxDoubleCall);
const _flaxBinding746 = FlaxProxyMember("maxIntrinsicWidth", 1, flaxDoubleCall);
const _flaxBinding747 = FlaxProxyMember(
  "alphabeticBaseline",
  1,
  flaxDoubleCall,
);
const _flaxBinding748 = FlaxProxyMember(
  "ideographicBaseline",
  1,
  flaxDoubleCall,
);
const _flaxBinding749 = FlaxProxyMember("didExceedMaxLines", 1, flaxBoolCall);
const _flaxBinding750 = FlaxProxyMember("numberOfLines", 1, flaxIntCall);
const _flaxBinding751 = FlaxProxyMember("debugDisposed", 1, flaxBoolCall);
const _flaxBinding752 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Paragraph",
  [
    _flaxBinding705,
    _flaxBinding706,
    _flaxBinding707,
    _flaxBinding708,
    _flaxBinding709,
    _flaxBinding710,
    _flaxBinding711,
    _flaxBinding712,
    _flaxBinding713,
    _flaxBinding714,
  ],
  {
    "layout": _flaxBinding715,
    "getBoxesForRange": _flaxBinding719,
    "getBoxesForPlaceholders": _flaxBinding720,
    "getPositionForOffset": _flaxBinding721,
    "getClosestGlyphInfoForOffset": _flaxBinding722,
    "getGlyphInfoAt": _flaxBinding723,
    "getWordBoundary": _flaxBinding724,
    "getLineBoundary": _flaxBinding725,
    "computeLineMetrics": _flaxBinding726,
    "getLineMetricsAt": _flaxBinding727,
    "getLineNumberAt": _flaxBinding728,
    "dispose": _flaxBinding729,
  },
  constructors: {"@implementation": _flaxBinding200},
  create: _createParagraph,
  matches: _isParagraph,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding730,
    _flaxBinding732,
    _flaxBinding733,
    _flaxBinding734,
    _flaxBinding735,
    _flaxBinding736,
    _flaxBinding737,
    _flaxBinding738,
    _flaxBinding739,
    _flaxBinding740,
    _flaxBinding741,
    _flaxBinding201,
    _flaxBinding742,
    _flaxBinding743,
    _flaxBinding744,
    _flaxBinding745,
    _flaxBinding746,
    _flaxBinding747,
    _flaxBinding748,
    _flaxBinding749,
    _flaxBinding750,
    _flaxBinding751,
  ]),
);
const _flaxBinding753 = FlaxGetter.plain(
  "placeholderCount",
  flaxIntType,
  _ParagraphBuilder_placeholderCount,
);
const _flaxBinding754 = FlaxGetter.plain(
  "placeholderScales",
  _flaxBinding118,
  _ParagraphBuilder_placeholderScales,
);
const _flaxBinding755 = FlaxInstanceMethod.shared(
  _flaxBinding114,
  _ParagraphBuilder_pushStyle,
);
const _flaxBinding756 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _ParagraphBuilder_pop,
);
const _flaxBinding757 = FlaxInstanceMethod.shared(
  _flaxBinding115,
  _ParagraphBuilder_addText,
);
const _flaxBinding758 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PlaceholderAlignment",
);
const _flaxBinding759 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextBaseline",
  nullable: true,
);
const _flaxBinding760 = <FlaxParameter>[
  FlaxParameter.required("width", flaxDoubleType),
  FlaxParameter.required("height", flaxDoubleType),
  FlaxParameter.required("alignment", _flaxBinding758),
  FlaxParameter("baseline", _flaxBinding759, required: false),
  FlaxParameter("baselineOffset", flaxNullableDoubleType, required: false),
  FlaxParameter("scale", flaxDoubleType, required: false, defaultValue: 1.0),
];
const _flaxBinding761 = FlaxInstanceMethod.plain(
  _flaxBinding760,
  flaxVoidType,
  _ParagraphBuilder_addPlaceholder,
);
const _flaxBinding762 = FlaxInstanceMethod.shared(
  _flaxBinding116,
  _ParagraphBuilder_build,
);
const _flaxBinding763 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ParagraphStyle",
);
const _flaxBinding764 = <FlaxParameter>[
  FlaxParameter.required("style", _flaxBinding763),
];
const _flaxBinding765 = FlaxProxyMember("pushStyle", 0, _flaxBinding114);
const _flaxBinding766 = FlaxProxyMember("pop", 0, flaxVoidCall);
const _flaxBinding767 = FlaxProxyMember("addText", 0, _flaxBinding115);
const _flaxBinding768 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("width", flaxDoubleType),
    FlaxCallbackParameter.plain("height", flaxDoubleType),
    FlaxCallbackParameter.plain("alignment", _flaxBinding758),
    FlaxCallbackParameter.plain(
      "scale",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "baselineOffset",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "baseline",
      _flaxBinding759,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:width:double:,p:r:height:double:,p:r:alignment:enum:flax.core/sdk_dart_ui#type:PlaceholderAlignment,n:o:scale:double:,n:o:baselineOffset:double?:,n:o:baseline:enum?:flax.core/flutter#type:TextBaseline)->void:",
);
const _flaxBinding769 = FlaxProxyMember("addPlaceholder", 0, _flaxBinding768);
const _flaxBinding770 = FlaxProxyMember("build", 0, _flaxBinding116);
const _flaxBinding771 = FlaxProxyMember("placeholderCount", 1, flaxIntCall);
const _flaxBinding772 = FlaxProxyMember(
  "placeholderScales",
  1,
  _flaxBinding119,
);
const _flaxBinding773 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ParagraphBuilder",
  [_flaxBinding753, _flaxBinding754],
  {
    "pushStyle": _flaxBinding755,
    "pop": _flaxBinding756,
    "addText": _flaxBinding757,
    "addPlaceholder": _flaxBinding761,
    "build": _flaxBinding762,
  },
  constructors: {"": _flaxBinding764, "@implementation": _flaxBinding200},
  create: _createParagraphBuilder,
  matches: _isParagraphBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding765,
    _flaxBinding766,
    _flaxBinding767,
    _flaxBinding769,
    _flaxBinding770,
    _flaxBinding771,
    _flaxBinding772,
  ]),
);
const _flaxBinding774 = FlaxGetter.plain(
  "width",
  flaxDoubleType,
  _ParagraphConstraints_width,
);
const _flaxBinding775 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ParagraphConstraints_toString,
);
const _flaxBinding776 = <FlaxParameter>[
  FlaxParameter.required("width", flaxDoubleType),
];
const _flaxBinding777 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ParagraphConstraints",
  [_flaxBinding774],
  {
    "toString": _flaxBinding775,
    "@super:toString": _flaxBinding353,
    "@super:get:width": _flaxBinding609,
  },
  constructors: {"": _flaxBinding776, "@implementation": _flaxBinding776},
  create: _createParagraphConstraints,
  matches: _isParagraphConstraints,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding355, _flaxBinding617]),
);
const _flaxBinding778 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ParagraphStyle_toString,
);
const _flaxBinding779 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextAlign",
  nullable: true,
);
const _flaxBinding780 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
  nullable: true,
);
const _flaxBinding781 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextHeightBehavior",
  nullable: true,
);
const _flaxBinding782 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:FontWeight",
  nullable: true,
);
const _flaxBinding783 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:FontStyle",
  nullable: true,
);
const _flaxBinding784 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:StrutStyle",
  nullable: true,
);
const _flaxBinding785 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
  nullable: true,
);
const _flaxBinding786 = <FlaxParameter>[
  FlaxParameter("textAlign", _flaxBinding779, required: false),
  FlaxParameter("textDirection", _flaxBinding780, required: false),
  FlaxParameter("maxLines", flaxNullableIntType, required: false),
  FlaxParameter("fontFamily", flaxNullableStringType, required: false),
  FlaxParameter("fontSize", flaxNullableDoubleType, required: false),
  FlaxParameter("height", flaxNullableDoubleType, required: false),
  FlaxParameter("textHeightBehavior", _flaxBinding781, required: false),
  FlaxParameter("fontWeight", _flaxBinding782, required: false),
  FlaxParameter("fontStyle", _flaxBinding783, required: false),
  FlaxParameter("strutStyle", _flaxBinding784, required: false),
  FlaxParameter("ellipsis", flaxNullableStringType, required: false),
  FlaxParameter("locale", _flaxBinding785, required: false),
];
const _flaxBinding787 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ParagraphStyle",
  [],
  {"toString": _flaxBinding778, "@super:toString": _flaxBinding353},
  constructors: {"": _flaxBinding786, "@implementation": _flaxBinding786},
  create: _createParagraphStyle,
  matches: _isParagraphStyle,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding355]),
);
const _flaxBinding788 = FlaxGetter.plain(
  "fillType",
  _flaxBinding134,
  _Path_fillType,
);
const _flaxBinding789 = FlaxSetter(
  "fillType",
  _flaxBinding134,
  _Path_set_fillType,
);
const _flaxBinding790 = FlaxInstanceMethod.shared(
  _flaxBinding120,
  _Path_moveTo,
);
const _flaxBinding791 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _Path_relativeMoveTo,
);
const _flaxBinding792 = FlaxInstanceMethod.shared(
  _flaxBinding120,
  _Path_lineTo,
);
const _flaxBinding793 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _Path_relativeLineTo,
);
const _flaxBinding794 = FlaxInstanceMethod.shared(
  _flaxBinding121,
  _Path_quadraticBezierTo,
);
const _flaxBinding795 = FlaxInstanceMethod.shared(
  _flaxBinding121,
  _Path_relativeQuadraticBezierTo,
);
const _flaxBinding796 = FlaxInstanceMethod.shared(
  _flaxBinding122,
  _Path_cubicTo,
);
const _flaxBinding797 = FlaxInstanceMethod.shared(
  _flaxBinding122,
  _Path_relativeCubicTo,
);
const _flaxBinding798 = FlaxInstanceMethod.shared(
  _flaxBinding123,
  _Path_conicTo,
);
const _flaxBinding799 = FlaxInstanceMethod.shared(
  _flaxBinding123,
  _Path_relativeConicTo,
);
const _flaxBinding800 = FlaxInstanceMethod.shared(_flaxBinding124, _Path_arcTo);
const _flaxBinding801 = <FlaxParameter>[
  FlaxParameter.required("arcEnd", flaxOffsetType),
  FlaxParameter("clockwise", flaxBoolType, required: false, defaultValue: true),
  FlaxParameter("largeArc", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter(
    "radius",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("rotation", flaxDoubleType, required: false, defaultValue: 0.0),
];
const _flaxBinding802 = FlaxInstanceMethod.plain(
  _flaxBinding801,
  flaxVoidType,
  _Path_arcToPoint,
);
const _flaxBinding803 = <FlaxParameter>[
  FlaxParameter.required("arcEndDelta", flaxOffsetType),
  FlaxParameter("clockwise", flaxBoolType, required: false, defaultValue: true),
  FlaxParameter("largeArc", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter(
    "radius",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("rotation", flaxDoubleType, required: false, defaultValue: 0.0),
];
const _flaxBinding804 = FlaxInstanceMethod.plain(
  _flaxBinding803,
  flaxVoidType,
  _Path_relativeArcToPoint,
);
const _flaxBinding805 = FlaxInstanceMethod.shared(
  _flaxBinding125,
  _Path_addRect,
);
const _flaxBinding806 = FlaxInstanceMethod.shared(
  _flaxBinding126,
  _Path_addOval,
);
const _flaxBinding807 = FlaxInstanceMethod.shared(
  _flaxBinding127,
  _Path_addArc,
);
const _flaxBinding808 = FlaxInstanceMethod.shared(
  _flaxBinding128,
  _Path_addPolygon,
);
const _flaxBinding809 = FlaxInstanceMethod.shared(
  _flaxBinding129,
  _Path_addRRect,
);
const _flaxBinding810 = FlaxInstanceMethod.shared(
  _flaxBinding130,
  _Path_addRSuperellipse,
);
const _flaxBinding811 = <FlaxParameter>[
  FlaxParameter.required("path", flaxPathType),
  FlaxParameter.required("offset", flaxOffsetType),
  FlaxParameter("matrix4", _flaxBinding505, required: false),
];
const _flaxBinding812 = FlaxInstanceMethod.plain(
  _flaxBinding811,
  flaxVoidType,
  _Path_addPath,
);
const _flaxBinding813 = FlaxInstanceMethod.plain(
  _flaxBinding811,
  flaxVoidType,
  _Path_extendWithPath,
);
const _flaxBinding814 = FlaxInstanceMethod.shared(flaxVoidCall, _Path_close);
const _flaxBinding815 = FlaxInstanceMethod.shared(flaxVoidCall, _Path_reset);
const _flaxBinding816 = FlaxInstanceMethod.shared(
  _flaxBinding131,
  _Path_contains,
);
const _flaxBinding817 = FlaxInstanceMethod.shared(_flaxBinding132, _Path_shift);
const _flaxBinding818 = FlaxInstanceMethod.shared(
  _flaxBinding133,
  _Path_transform,
);
const _flaxBinding819 = FlaxInstanceMethod.shared(
  _flaxBinding10,
  _Path_getBounds,
);
const _flaxBinding820 = <FlaxParameter>[
  FlaxParameter(
    "forceClosed",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding821 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PathMetrics",
);
const _flaxBinding822 = FlaxInstanceMethod.plain(
  _flaxBinding820,
  _flaxBinding821,
  _Path_computeMetrics,
);
const _flaxBinding823 = <FlaxParameter>[
  FlaxParameter.required("source", flaxPathType),
];
const _flaxBinding824 = FlaxProxyMember("moveTo", 0, _flaxBinding120);
const _flaxBinding825 = FlaxProxyMember("relativeMoveTo", 0, _flaxBinding4);
const _flaxBinding826 = FlaxProxyMember("lineTo", 0, _flaxBinding120);
const _flaxBinding827 = FlaxProxyMember("relativeLineTo", 0, _flaxBinding4);
const _flaxBinding828 = FlaxProxyMember(
  "quadraticBezierTo",
  0,
  _flaxBinding121,
);
const _flaxBinding829 = FlaxProxyMember(
  "relativeQuadraticBezierTo",
  0,
  _flaxBinding121,
);
const _flaxBinding830 = FlaxProxyMember("cubicTo", 0, _flaxBinding122);
const _flaxBinding831 = FlaxProxyMember("relativeCubicTo", 0, _flaxBinding122);
const _flaxBinding832 = FlaxProxyMember("conicTo", 0, _flaxBinding123);
const _flaxBinding833 = FlaxProxyMember("relativeConicTo", 0, _flaxBinding123);
const _flaxBinding834 = FlaxProxyMember("arcTo", 0, _flaxBinding124);
const _flaxBinding835 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("arcEnd", flaxOffsetType),
    FlaxCallbackParameter.plain(
      "radius",
      flaxRadiusType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "rotation",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "largeArc",
      flaxBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "clockwise",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:arcEnd:object:flax.core/flutter#type:Offset,n:o:radius:object:flax.core/flutter#type:Radius,n:o:rotation:double:,n:o:largeArc:bool:,n:o:clockwise:bool:)->void:",
);
const _flaxBinding836 = FlaxProxyMember("arcToPoint", 0, _flaxBinding835);
const _flaxBinding837 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("arcEndDelta", flaxOffsetType),
    FlaxCallbackParameter.plain(
      "radius",
      flaxRadiusType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "rotation",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "largeArc",
      flaxBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "clockwise",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:arcEndDelta:object:flax.core/flutter#type:Offset,n:o:radius:object:flax.core/flutter#type:Radius,n:o:rotation:double:,n:o:largeArc:bool:,n:o:clockwise:bool:)->void:",
);
const _flaxBinding838 = FlaxProxyMember(
  "relativeArcToPoint",
  0,
  _flaxBinding837,
);
const _flaxBinding839 = FlaxProxyMember("addRect", 0, _flaxBinding125);
const _flaxBinding840 = FlaxProxyMember("addOval", 0, _flaxBinding126);
const _flaxBinding841 = FlaxProxyMember("addArc", 0, _flaxBinding127);
const _flaxBinding842 = FlaxProxyMember("addPolygon", 0, _flaxBinding128);
const _flaxBinding843 = FlaxProxyMember("addRRect", 0, _flaxBinding129);
const _flaxBinding844 = FlaxProxyMember("addRSuperellipse", 0, _flaxBinding130);
const _flaxBinding845 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("path", flaxPathType),
    FlaxCallbackParameter.plain("offset", flaxOffsetType),
    FlaxCallbackParameter.plain(
      "matrix4",
      _flaxBinding505,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,p:r:offset:object:flax.core/flutter#type:Offset,n:o:matrix4:Float64List?:)->void:",
);
const _flaxBinding846 = FlaxProxyMember("addPath", 0, _flaxBinding845);
const _flaxBinding847 = FlaxProxyMember("extendWithPath", 0, _flaxBinding845);
const _flaxBinding848 = FlaxProxyMember("close", 0, flaxVoidCall);
const _flaxBinding849 = FlaxProxyMember("reset", 0, flaxVoidCall);
const _flaxBinding850 = FlaxProxyMember("contains", 0, _flaxBinding131);
const _flaxBinding851 = FlaxProxyMember("shift", 0, _flaxBinding132);
const _flaxBinding852 = FlaxProxyMember("transform", 0, _flaxBinding133);
const _flaxBinding853 = FlaxProxyMember("getBounds", 0, _flaxBinding10);
const _flaxBinding854 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "forceClosed",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding821,
  id: "callback:<>(n:o:forceClosed:bool:)->object:flax.core/sdk_dart_ui#type:PathMetrics",
);
const _flaxBinding855 = FlaxProxyMember("computeMetrics", 0, _flaxBinding854);
const _flaxBinding856 = FlaxProxyMember("fillType", 1, _flaxBinding135);
const _flaxBinding857 = FlaxProxyMember("fillType", 2, _flaxBinding136);
const _flaxBinding858 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Path",
  [_flaxBinding788],
  {
    "moveTo": _flaxBinding790,
    "relativeMoveTo": _flaxBinding791,
    "lineTo": _flaxBinding792,
    "relativeLineTo": _flaxBinding793,
    "quadraticBezierTo": _flaxBinding794,
    "relativeQuadraticBezierTo": _flaxBinding795,
    "cubicTo": _flaxBinding796,
    "relativeCubicTo": _flaxBinding797,
    "conicTo": _flaxBinding798,
    "relativeConicTo": _flaxBinding799,
    "arcTo": _flaxBinding800,
    "arcToPoint": _flaxBinding802,
    "relativeArcToPoint": _flaxBinding804,
    "addRect": _flaxBinding805,
    "addOval": _flaxBinding806,
    "addArc": _flaxBinding807,
    "addPolygon": _flaxBinding808,
    "addRRect": _flaxBinding809,
    "addRSuperellipse": _flaxBinding810,
    "addPath": _flaxBinding812,
    "extendWithPath": _flaxBinding813,
    "close": _flaxBinding814,
    "reset": _flaxBinding815,
    "contains": _flaxBinding816,
    "shift": _flaxBinding817,
    "transform": _flaxBinding818,
    "getBounds": _flaxBinding819,
    "computeMetrics": _flaxBinding822,
  },
  constructors: {
    "": _flaxBinding200,
    "from": _flaxBinding823,
    "@implementation": _flaxBinding200,
  },
  create: _createPath,
  matches: _isPath,
  setters: [_flaxBinding789],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding824,
    _flaxBinding825,
    _flaxBinding826,
    _flaxBinding827,
    _flaxBinding828,
    _flaxBinding829,
    _flaxBinding830,
    _flaxBinding831,
    _flaxBinding832,
    _flaxBinding833,
    _flaxBinding834,
    _flaxBinding836,
    _flaxBinding838,
    _flaxBinding839,
    _flaxBinding840,
    _flaxBinding841,
    _flaxBinding842,
    _flaxBinding843,
    _flaxBinding844,
    _flaxBinding846,
    _flaxBinding847,
    _flaxBinding848,
    _flaxBinding849,
    _flaxBinding850,
    _flaxBinding851,
    _flaxBinding852,
    _flaxBinding853,
    _flaxBinding855,
    _flaxBinding856,
    _flaxBinding857,
  ]),
);
const _flaxBinding859 = FlaxGetter.plain(
  "length",
  flaxDoubleType,
  _PathMetric_length,
);
const _flaxBinding860 = FlaxGetter.plain(
  "isClosed",
  flaxBoolType,
  _PathMetric_isClosed,
);
const _flaxBinding861 = FlaxGetter.plain(
  "contourIndex",
  flaxIntType,
  _PathMetric_contourIndex,
);
const _flaxBinding862 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Tangent",
  nullable: true,
);
const _flaxBinding863 = <FlaxParameter>[
  FlaxParameter.required("distance", flaxDoubleType),
];
const _flaxBinding864 = FlaxInstanceMethod.plain(
  _flaxBinding863,
  _flaxBinding862,
  _PathMetric_getTangentForOffset,
);
const _flaxBinding865 = <FlaxParameter>[
  FlaxParameter.required("start", flaxDoubleType),
  FlaxParameter.required("end", flaxDoubleType),
  FlaxParameter(
    "startWithMoveTo",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding866 = FlaxInstanceMethod.plain(
  _flaxBinding865,
  flaxPathType,
  _PathMetric_extractPath,
);
const _flaxBinding867 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _PathMetric_toString,
);
const _flaxBinding868 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PathMetric",
  [_flaxBinding859, _flaxBinding860, _flaxBinding861],
  {
    "getTangentForOffset": _flaxBinding864,
    "extractPath": _flaxBinding866,
    "toString": _flaxBinding867,
  },
  constructors: {},
  create: _createPathMetric,
  matches: _isPathMetric,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding869 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PathMetric",
);
const _flaxBinding870 = FlaxGetter.plain(
  "current",
  _flaxBinding869,
  _PathMetricIterator_current,
);
const _flaxBinding871 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _PathMetricIterator_moveNext,
);
const _flaxBinding872 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PathMetricIterator",
  [_flaxBinding870],
  {"moveNext": _flaxBinding871},
  constructors: {},
  create: _createPathMetricIterator,
  matches: _isPathMetricIterator,
  setters: [],
  supertypes: ["dart:core::Object", "flax.core/flutter#type:Iterator"],
);
const _flaxBinding873 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Iterator",
  dartType: FlaxDartTypes.typeOf<api2.Iterator<api.PathMetric>>,
);
const _flaxBinding874 = FlaxGetter.plain(
  "iterator",
  _flaxBinding873,
  _PathMetrics_iterator,
);
const _flaxBinding875 = FlaxGetter.plain(
  "length",
  flaxIntType,
  _PathMetrics_length,
);
const _flaxBinding876 = FlaxGetter.plain(
  "isEmpty",
  flaxBoolType,
  _PathMetrics_isEmpty,
);
const _flaxBinding877 = FlaxGetter.plain(
  "isNotEmpty",
  flaxBoolType,
  _PathMetrics_isNotEmpty,
);
const _flaxBinding878 = FlaxGetter.plain(
  "first",
  _flaxBinding869,
  _PathMetrics_first,
);
const _flaxBinding879 = FlaxGetter.plain(
  "last",
  _flaxBinding869,
  _PathMetrics_last,
);
const _flaxBinding880 = FlaxGetter.plain(
  "single",
  _flaxBinding869,
  _PathMetrics_single,
);
const _flaxBinding881 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding869,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:PathMetric]",
    _collection23Create,
    _collection23Matches,
    restore: _collection23Restore,
  ),
);
const _flaxBinding882 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding881),
];
const _flaxBinding883 = FlaxInstanceMethod.plain(
  _flaxBinding882,
  _flaxBinding881,
  _PathMetrics_followedBy,
);
const _flaxBinding884 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("element", _flaxBinding869)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api.PathMetric, bool>,
  id: "callback:<>(p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api.PathMetric, bool>,
  matches: FlaxCallbackAdapters.matches1<api.PathMetric, bool>,
);
const _flaxBinding885 = FlaxTypeRef("callback", callback: _flaxBinding884);
const _flaxBinding886 = <FlaxParameter>[
  FlaxParameter.required("test", _flaxBinding885),
];
const _flaxBinding887 = FlaxInstanceMethod.plain(
  _flaxBinding886,
  _flaxBinding881,
  _PathMetrics_where,
);
const _flaxBinding888 = FlaxTypeRef(
  "iterable",
  item: flaxNullableAnyType,
  collection: FlaxCollectionBinding(
    "iterable:[any?:]",
    _collection22Create,
    _collection22Matches,
    restore: _collection22Restore,
  ),
);
const _flaxBinding889 = <FlaxParameter>[
  FlaxParameter.required("element", flaxNullableAnyType),
];
const _flaxBinding890 = FlaxInstanceMethod.plain(
  _flaxBinding889,
  flaxBoolType,
  _PathMetrics_contains,
);
const _flaxBinding891 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("element", _flaxBinding869)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api.PathMetric>,
  id: "callback:<>(p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.PathMetric>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.PathMetric>,
);
const _flaxBinding892 = FlaxTypeRef("callback", callback: _flaxBinding891);
const _flaxBinding893 = <FlaxParameter>[
  FlaxParameter.required("action", _flaxBinding892),
];
const _flaxBinding894 = FlaxInstanceMethod.plain(
  _flaxBinding893,
  flaxVoidType,
  _PathMetrics_forEach,
);
const _flaxBinding895 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("value", _flaxBinding869),
    FlaxCallbackParameter.plain("element", _flaxBinding869),
  ],
  _flaxBinding869,
  FlaxCallbackAdapters.wrap2<api.PathMetric, api.PathMetric, api.PathMetric>,
  id: "callback:<>(p:r:value:object:flax.core/sdk_dart_ui#type:PathMetric,p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->object:flax.core/sdk_dart_ui#type:PathMetric",
  invoke: FlaxCallbackAdapters
      .invoke2<api.PathMetric, api.PathMetric, api.PathMetric>,
  matches: FlaxCallbackAdapters
      .matches2<api.PathMetric, api.PathMetric, api.PathMetric>,
);
const _flaxBinding896 = FlaxTypeRef("callback", callback: _flaxBinding895);
const _flaxBinding897 = <FlaxParameter>[
  FlaxParameter.required("combine", _flaxBinding896),
];
const _flaxBinding898 = FlaxInstanceMethod.plain(
  _flaxBinding897,
  _flaxBinding869,
  _PathMetrics_reduce,
);
const _flaxBinding899 = FlaxInstanceMethod.plain(
  _flaxBinding886,
  flaxBoolType,
  _PathMetrics_every,
);
const _flaxBinding900 = <FlaxParameter>[
  FlaxParameter("separator", flaxStringType, required: false, defaultValue: ''),
];
const _flaxBinding901 = FlaxInstanceMethod.plain(
  _flaxBinding900,
  flaxStringType,
  _PathMetrics_join,
);
const _flaxBinding902 = FlaxInstanceMethod.plain(
  _flaxBinding886,
  flaxBoolType,
  _PathMetrics_any,
);
const _flaxBinding903 = <FlaxParameter>[
  FlaxParameter("growable", flaxBoolType, required: false, defaultValue: true),
];
const _flaxBinding904 = FlaxTypeRef(
  "list",
  item: _flaxBinding869,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:PathMetric]",
    _collection24Create,
    _collection24Matches,
  ),
  iterable: _flaxBinding881,
);
const _flaxBinding905 = FlaxInstanceMethod.plain(
  _flaxBinding903,
  _flaxBinding904,
  _PathMetrics_toList,
);
const _flaxBinding906 = FlaxTypeRef(
  "set",
  item: _flaxBinding869,
  collection: FlaxCollectionBinding(
    "set:[object:flax.core/sdk_dart_ui#type:PathMetric]",
    _collection25Create,
    _collection25Matches,
  ),
  iterable: _flaxBinding881,
);
const _flaxBinding907 = FlaxInstanceMethod.plain(
  _flaxBinding200,
  _flaxBinding906,
  _PathMetrics_toSet,
);
const _flaxBinding908 = <FlaxParameter>[
  FlaxParameter.required("count", flaxIntType),
];
const _flaxBinding909 = FlaxInstanceMethod.plain(
  _flaxBinding908,
  _flaxBinding881,
  _PathMetrics_take,
);
const _flaxBinding910 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", _flaxBinding869)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api.PathMetric, bool>,
  id: "callback:<>(p:r:value:object:flax.core/sdk_dart_ui#type:PathMetric)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api.PathMetric, bool>,
  matches: FlaxCallbackAdapters.matches1<api.PathMetric, bool>,
);
const _flaxBinding911 = FlaxTypeRef("callback", callback: _flaxBinding910);
const _flaxBinding912 = <FlaxParameter>[
  FlaxParameter.required("test", _flaxBinding911),
];
const _flaxBinding913 = FlaxInstanceMethod.plain(
  _flaxBinding912,
  _flaxBinding881,
  _PathMetrics_takeWhile,
);
const _flaxBinding914 = FlaxInstanceMethod.plain(
  _flaxBinding908,
  _flaxBinding881,
  _PathMetrics_skip,
);
const _flaxBinding915 = FlaxInstanceMethod.plain(
  _flaxBinding912,
  _flaxBinding881,
  _PathMetrics_skipWhile,
);
const _flaxBinding916 = FlaxCallbackBinding(
  [],
  _flaxBinding869,
  FlaxCallbackAdapters.wrap0<api.PathMetric>,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:PathMetric",
  invoke: FlaxCallbackAdapters.invoke0<api.PathMetric>,
  matches: FlaxCallbackAdapters.matches0<api.PathMetric>,
);
const _flaxBinding917 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding916,
);
const _flaxBinding918 = <FlaxParameter>[
  FlaxParameter.required("test", _flaxBinding885),
  FlaxParameter("orElse", _flaxBinding917, required: false),
];
const _flaxBinding919 = FlaxInstanceMethod.plain(
  _flaxBinding918,
  _flaxBinding869,
  _PathMetrics_firstWhere,
);
const _flaxBinding920 = FlaxInstanceMethod.plain(
  _flaxBinding918,
  _flaxBinding869,
  _PathMetrics_lastWhere,
);
const _flaxBinding921 = FlaxInstanceMethod.plain(
  _flaxBinding918,
  _flaxBinding869,
  _PathMetrics_singleWhere,
);
const _flaxBinding922 = <FlaxParameter>[
  FlaxParameter.required("index", flaxIntType),
];
const _flaxBinding923 = FlaxInstanceMethod.plain(
  _flaxBinding922,
  _flaxBinding869,
  _PathMetrics_elementAt,
);
const _flaxBinding924 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PathMetrics",
  [
    _flaxBinding874,
    _flaxBinding875,
    _flaxBinding876,
    _flaxBinding877,
    _flaxBinding878,
    _flaxBinding879,
    _flaxBinding880,
  ],
  {
    "cast": FlaxInstanceMethod(
      _flaxBinding200,
      FlaxTypeRef(
        "iterable",
        item: flaxNullableAnyType,
        collection: FlaxCollectionBinding(
          "iterable:[any?:]",
          _collection22Create,
          _collection22Matches,
          restore: _collection22Restore,
        ),
      ),
      _PathMetrics_cast,
      genericFactory: _flaxGeneric_PathMetrics_cast,
      ownerTypes: [],
    ),
    "followedBy": _flaxBinding883,
    "map": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "toElement",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("e", _flaxBinding869)],
              flaxNullableAnyType,
              _callback1,
              id: "callback:<>(p:r:e:object:flax.core/sdk_dart_ui#type:PathMetric)->any?:",
              invoke: _callback1Invoke,
              matches: _callback1Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "iterable",
        item: flaxNullableAnyType,
        collection: FlaxCollectionBinding(
          "iterable:[any?:]",
          _collection22Create,
          _collection22Matches,
          restore: _collection22Restore,
        ),
      ),
      _PathMetrics_map,
      genericFactory: _flaxGeneric_PathMetrics_map,
      ownerTypes: [],
    ),
    "where": _flaxBinding887,
    "whereType": FlaxInstanceMethod(
      _flaxBinding200,
      FlaxTypeRef(
        "iterable",
        item: flaxNullableAnyType,
        collection: FlaxCollectionBinding(
          "iterable:[any?:]",
          _collection22Create,
          _collection22Matches,
          restore: _collection22Restore,
        ),
      ),
      _PathMetrics_whereType,
      genericFactory: _flaxGeneric_PathMetrics_whereType,
      ownerTypes: [],
    ),
    "expand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "toElements",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("element", _flaxBinding869)],
              _flaxBinding888,
              _callback2,
              id: "callback:<>(p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->iterable:[any?:]",
              invoke: _callback2Invoke,
              matches: _callback2Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "iterable",
        item: flaxNullableAnyType,
        collection: FlaxCollectionBinding(
          "iterable:[any?:]",
          _collection22Create,
          _collection22Matches,
          restore: _collection22Restore,
        ),
      ),
      _PathMetrics_expand,
      genericFactory: _flaxGeneric_PathMetrics_expand,
      ownerTypes: [],
    ),
    "contains": _flaxBinding890,
    "forEach": _flaxBinding894,
    "reduce": _flaxBinding898,
    "fold": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "initialValue",
          FlaxTypeRef("any", nullable: true),
        ),
        FlaxParameter.required(
          "combine",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain(
                  "previousValue",
                  flaxNullableAnyType,
                ),
                FlaxCallbackParameter.plain("element", _flaxBinding869),
              ],
              flaxNullableAnyType,
              _callback3,
              id: "callback:<>(p:r:previousValue:any?:,p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->any?:",
              invoke: _callback3Invoke,
              matches: _callback3Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef("any", nullable: true),
      _PathMetrics_fold,
      genericFactory: _flaxGeneric_PathMetrics_fold,
      ownerTypes: [],
    ),
    "every": _flaxBinding899,
    "join": _flaxBinding901,
    "any": _flaxBinding902,
    "toList": _flaxBinding905,
    "toSet": _flaxBinding907,
    "take": _flaxBinding909,
    "takeWhile": _flaxBinding913,
    "skip": _flaxBinding914,
    "skipWhile": _flaxBinding915,
    "firstWhere": _flaxBinding919,
    "lastWhere": _flaxBinding920,
    "singleWhere": _flaxBinding921,
    "elementAt": _flaxBinding923,
  },
  constructors: {},
  create: _createPathMetrics,
  matches: _isPathMetrics,
  setters: [],
  supertypes: ["dart:core::Iterable", "dart:core::Object"],
  collectionView: _flaxBinding881,
);
const _flaxBinding925 = FlaxGetter.plain(
  "debugDisposed",
  flaxBoolType,
  _Picture_debugDisposed,
);
const _flaxBinding926 = FlaxGetter.plain(
  "approximateBytesUsed",
  flaxIntType,
  _Picture_approximateBytesUsed,
);
const _flaxBinding927 = FlaxInstanceMethod.shared(
  _flaxBinding138,
  _Picture_toImage,
);
const _flaxBinding928 = <FlaxParameter>[
  FlaxParameter.required("width", flaxIntType),
  FlaxParameter.required("height", flaxIntType),
  FlaxParameter(
    "targetFormat",
    _flaxBinding545,
    required: false,
    defaultValue: api.TargetPixelFormat.dontCare,
  ),
];
const _flaxBinding929 = FlaxInstanceMethod.plain(
  _flaxBinding928,
  _flaxBinding24,
  _Picture_toImageSync,
);
const _flaxBinding930 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _Picture_dispose,
);
const _flaxBinding931 = FlaxProxyMember("toImage", 0, _flaxBinding138);
const _flaxBinding932 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("width", flaxIntType),
    FlaxCallbackParameter.plain("height", flaxIntType),
    FlaxCallbackParameter.plain(
      "targetFormat",
      _flaxBinding545,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding24,
  id: "callback:<>(p:r:width:int:,p:r:height:int:,n:o:targetFormat:enum:flax.core/sdk_dart_ui#type:TargetPixelFormat)->object:flax.core/sdk_dart_ui#type:Image",
);
const _flaxBinding933 = FlaxProxyMember("toImageSync", 0, _flaxBinding932);
const _flaxBinding934 = FlaxProxyMember("approximateBytesUsed", 1, flaxIntCall);
const _flaxBinding935 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Picture",
  [_flaxBinding925, _flaxBinding926],
  {
    "toImage": _flaxBinding927,
    "toImageSync": _flaxBinding929,
    "dispose": _flaxBinding930,
  },
  constructors: {"@implementation": _flaxBinding200},
  create: _createPicture,
  matches: _isPicture,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding931,
    _flaxBinding933,
    _flaxBinding201,
    _flaxBinding751,
    _flaxBinding934,
  ]),
);
const _flaxBinding936 = FlaxGetter.plain(
  "message",
  flaxStringType,
  _PictureRasterizationException_message,
);
const _flaxBinding937 = FlaxGetter.plain(
  "stack",
  _flaxBinding139,
  _PictureRasterizationException_stack,
);
const _flaxBinding938 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _PictureRasterizationException_toString,
);
const _flaxBinding939 = FlaxProxyMember("message", 1, flaxStringCall);
const _flaxBinding940 = FlaxProxyMember("stack", 1, _flaxBinding140);
const _flaxBinding941 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PictureRasterizationException",
  [_flaxBinding936, _flaxBinding937],
  {"toString": _flaxBinding938},
  constructors: {"@implementation": _flaxBinding200},
  create: _createPictureRasterizationException,
  matches: _isPictureRasterizationException,
  setters: [],
  supertypes: ["dart:core::Object", "dart:core::Exception"],
  proxy: FlaxProxyBinding([_flaxBinding342, _flaxBinding939, _flaxBinding940]),
);
const _flaxBinding942 = FlaxGetter.plain(
  "isRecording",
  flaxBoolType,
  _PictureRecorder_isRecording,
);
const _flaxBinding943 = FlaxInstanceMethod.shared(
  _flaxBinding141,
  _PictureRecorder_endRecording,
);
const _flaxBinding944 = FlaxProxyMember("endRecording", 0, _flaxBinding141);
const _flaxBinding945 = FlaxProxyMember("isRecording", 1, flaxBoolCall);
const _flaxBinding946 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PictureRecorder",
  [_flaxBinding942],
  {"endRecording": _flaxBinding943},
  constructors: {"": _flaxBinding200, "@implementation": _flaxBinding200},
  create: _createPictureRecorder,
  matches: _isPictureRecorder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding944, _flaxBinding945]),
);
const _flaxBinding947 = FlaxGetter.plain(
  "onPlatformConfigurationChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onPlatformConfigurationChanged,
);
const _flaxBinding948 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding373,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Display]",
    _collection26Create,
    _collection26Matches,
    restore: _collection26Restore,
  ),
);
const _flaxBinding949 = FlaxGetter.plain(
  "displays",
  _flaxBinding948,
  _PlatformDispatcher_displays,
);
const _flaxBinding950 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding79,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:FlutterView]",
    _collection27Create,
    _collection27Matches,
    restore: _collection27Restore,
  ),
);
const _flaxBinding951 = FlaxGetter.plain(
  "views",
  _flaxBinding950,
  _PlatformDispatcher_views,
);
const _flaxBinding952 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FlutterView",
  nullable: true,
);
const _flaxBinding953 = FlaxGetter.plain(
  "implicitView",
  _flaxBinding952,
  _PlatformDispatcher_implicitView,
);
const _flaxBinding954 = FlaxGetter.plain(
  "onMetricsChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onMetricsChanged,
);
const _flaxBinding955 = FlaxGetter.plain(
  "engineId",
  flaxNullableIntType,
  _PlatformDispatcher_engineId,
);
const _flaxBinding956 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ViewFocusEvent",
);
const _flaxBinding957 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("viewFocusEvent", _flaxBinding956)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api.ViewFocusEvent>,
  id: "callback:<>(p:r:viewFocusEvent:object:flax.core/sdk_dart_ui#type:ViewFocusEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.ViewFocusEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.ViewFocusEvent>,
);
const _flaxBinding958 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding957,
);
const _flaxBinding959 = FlaxGetter.plain(
  "onViewFocusChange",
  _flaxBinding958,
  _PlatformDispatcher_onViewFocusChange,
);
const _flaxBinding960 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("duration", flaxDurationType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api2.Duration>,
  id: "callback:<>(p:r:duration:object:flax.core/flutter#type:Duration)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api2.Duration>,
  matches: FlaxCallbackAdapters.matchesVoid1<api2.Duration>,
);
const _flaxBinding961 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding960,
);
const _flaxBinding962 = FlaxGetter.plain(
  "onBeginFrame",
  _flaxBinding961,
  _PlatformDispatcher_onBeginFrame,
);
const _flaxBinding963 = FlaxGetter.plain(
  "onDrawFrame",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onDrawFrame,
);
const _flaxBinding964 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PointerDataPacket",
);
const _flaxBinding965 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("packet", _flaxBinding964)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api.PointerDataPacket>,
  id: "callback:<>(p:r:packet:object:flax.core/sdk_dart_ui#type:PointerDataPacket)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.PointerDataPacket>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.PointerDataPacket>,
);
const _flaxBinding966 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding965,
);
const _flaxBinding967 = FlaxGetter.plain(
  "onPointerDataPacket",
  _flaxBinding966,
  _PlatformDispatcher_onPointerDataPacket,
);
const _flaxBinding968 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:KeyData",
);
const _flaxBinding969 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("data", _flaxBinding968)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api.KeyData, bool>,
  id: "callback:<>(p:r:data:object:flax.core/sdk_dart_ui#type:KeyData)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api.KeyData, bool>,
  matches: FlaxCallbackAdapters.matches1<api.KeyData, bool>,
);
const _flaxBinding970 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding969,
);
const _flaxBinding971 = FlaxGetter.plain(
  "onKeyData",
  _flaxBinding970,
  _PlatformDispatcher_onKeyData,
);
const _flaxBinding972 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FrameTiming",
);
const _flaxBinding973 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding972,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:FrameTiming]",
    _collection29Create,
    _collection29Matches,
    restore: _collection29Restore,
  ),
);
const _flaxBinding974 = FlaxTypeRef(
  "list",
  item: _flaxBinding972,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:FrameTiming]",
    _collection28Create,
    _collection28Matches,
  ),
  iterable: _flaxBinding973,
);
const _flaxBinding975 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("timings", _flaxBinding974)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<List<api.FrameTiming>>,
  id: "callback:<>(p:r:timings:list:[object:flax.core/sdk_dart_ui#type:FrameTiming])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<List<api.FrameTiming>>,
  matches: FlaxCallbackAdapters.matchesVoid1<List<api.FrameTiming>>,
);
const _flaxBinding976 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding975,
);
const _flaxBinding977 = FlaxGetter.plain(
  "onReportTimings",
  _flaxBinding976,
  _PlatformDispatcher_onReportTimings,
);
const _flaxBinding978 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding53,
);
const _flaxBinding979 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("name", flaxStringType),
    FlaxCallbackParameter.plain("data", _flaxBinding52),
    FlaxCallbackParameter.plain("callback", _flaxBinding978),
  ],
  flaxVoidType,
  _callback4,
  id: "callback:<>(p:r:name:String:,p:r:data:ByteData?:,p:r:callback:callback?:<>(p:r:data:ByteData?:)->void:)->void:",
  invoke: _callback4Invoke,
  matches: _callback4Matches,
);
const _flaxBinding980 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding979,
);
const _flaxBinding981 = FlaxGetter.plain(
  "onPlatformMessage",
  _flaxBinding980,
  _PlatformDispatcher_onPlatformMessage,
);
const _flaxBinding982 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:AccessibilityFeatures",
);
const _flaxBinding983 = FlaxGetter.plain(
  "accessibilityFeatures",
  _flaxBinding982,
  _PlatformDispatcher_accessibilityFeatures,
);
const _flaxBinding984 = FlaxGetter.plain(
  "onAccessibilityFeaturesChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onAccessibilityFeaturesChanged,
);
const _flaxBinding985 = FlaxGetter.plain(
  "locale",
  _flaxBinding89,
  _PlatformDispatcher_locale,
);
const _flaxBinding986 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding89,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection31Create,
    _collection31Matches,
    restore: _collection31Restore,
  ),
);
const _flaxBinding987 = FlaxTypeRef(
  "list",
  item: _flaxBinding89,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection30Create,
    _collection30Matches,
  ),
  iterable: _flaxBinding986,
);
const _flaxBinding988 = FlaxGetter.plain(
  "locales",
  _flaxBinding987,
  _PlatformDispatcher_locales,
);
const _flaxBinding989 = FlaxGetter.plain(
  "onLocaleChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onLocaleChanged,
);
const _flaxBinding990 = FlaxGetter.plain(
  "initialLifecycleState",
  flaxStringType,
  _PlatformDispatcher_initialLifecycleState,
);
const _flaxBinding991 = FlaxGetter.plain(
  "alwaysUse24HourFormat",
  flaxBoolType,
  _PlatformDispatcher_alwaysUse24HourFormat,
);
const _flaxBinding992 = FlaxGetter.plain(
  "lineHeightScaleFactorOverride",
  flaxNullableDoubleType,
  _PlatformDispatcher_lineHeightScaleFactorOverride,
);
const _flaxBinding993 = FlaxGetter.plain(
  "letterSpacingOverride",
  flaxNullableDoubleType,
  _PlatformDispatcher_letterSpacingOverride,
);
const _flaxBinding994 = FlaxGetter.plain(
  "wordSpacingOverride",
  flaxNullableDoubleType,
  _PlatformDispatcher_wordSpacingOverride,
);
const _flaxBinding995 = FlaxGetter.plain(
  "paragraphSpacingOverride",
  flaxNullableDoubleType,
  _PlatformDispatcher_paragraphSpacingOverride,
);
const _flaxBinding996 = FlaxGetter.plain(
  "textScaleFactor",
  flaxDoubleType,
  _PlatformDispatcher_textScaleFactor,
);
const _flaxBinding997 = FlaxGetter.plain(
  "onTextScaleFactorChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onTextScaleFactorChanged,
);
const _flaxBinding998 = FlaxGetter.plain(
  "nativeSpellCheckServiceDefined",
  flaxBoolType,
  _PlatformDispatcher_nativeSpellCheckServiceDefined,
);
const _flaxBinding999 = FlaxGetter.plain(
  "supportsShowingSystemContextMenu",
  flaxBoolType,
  _PlatformDispatcher_supportsShowingSystemContextMenu,
);
const _flaxBinding1000 = FlaxGetter.plain(
  "brieflyShowPassword",
  flaxBoolType,
  _PlatformDispatcher_brieflyShowPassword,
);
const _flaxBinding1001 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Brightness",
);
const _flaxBinding1002 = FlaxGetter.plain(
  "platformBrightness",
  _flaxBinding1001,
  _PlatformDispatcher_platformBrightness,
);
const _flaxBinding1003 = FlaxGetter.plain(
  "onPlatformBrightnessChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onPlatformBrightnessChanged,
);
const _flaxBinding1004 = FlaxGetter.plain(
  "systemFontFamily",
  flaxNullableStringType,
  _PlatformDispatcher_systemFontFamily,
);
const _flaxBinding1005 = FlaxGetter.plain(
  "onSystemFontFamilyChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onSystemFontFamilyChanged,
);
const _flaxBinding1006 = FlaxGetter.plain(
  "semanticsEnabled",
  flaxBoolType,
  _PlatformDispatcher_semanticsEnabled,
);
const _flaxBinding1007 = FlaxGetter.plain(
  "onSemanticsEnabledChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onSemanticsEnabledChanged,
);
const _flaxBinding1008 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsActionEvent",
);
const _flaxBinding1009 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("action", _flaxBinding1008)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api.SemanticsActionEvent>,
  id: "callback:<>(p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsActionEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.SemanticsActionEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.SemanticsActionEvent>,
);
const _flaxBinding1010 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1009,
);
const _flaxBinding1011 = FlaxGetter.plain(
  "onSemanticsActionEvent",
  _flaxBinding1010,
  _PlatformDispatcher_onSemanticsActionEvent,
);
const _flaxBinding1012 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:HitTestRequest",
);
const _flaxBinding1013 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:HitTestResponse",
);
const _flaxBinding1014 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("request", _flaxBinding1012)],
  _flaxBinding1013,
  FlaxCallbackAdapters.wrap1<api.HitTestRequest, api.HitTestResponse>,
  id: "callback:<>(p:r:request:object:flax.core/sdk_dart_ui#type:HitTestRequest)->object:flax.core/sdk_dart_ui#type:HitTestResponse",
  invoke: FlaxCallbackAdapters.invoke1<api.HitTestRequest, api.HitTestResponse>,
  matches:
      FlaxCallbackAdapters.matches1<api.HitTestRequest, api.HitTestResponse>,
);
const _flaxBinding1015 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1014,
);
const _flaxBinding1016 = FlaxGetter.plain(
  "onHitTest",
  _flaxBinding1015,
  _PlatformDispatcher_onHitTest,
);
const _flaxBinding1017 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FrameData",
);
const _flaxBinding1018 = FlaxGetter.plain(
  "frameData",
  _flaxBinding1017,
  _PlatformDispatcher_frameData,
);
const _flaxBinding1019 = FlaxGetter.plain(
  "onFrameDataChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_onFrameDataChanged,
);
const _flaxBinding1020 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("exception", flaxAnyType),
    FlaxCallbackParameter.plain("stackTrace", _flaxBinding532),
  ],
  flaxBoolType,
  FlaxCallbackAdapters.wrap2<Object, api2.StackTrace, bool>,
  id: "callback:<>(p:r:exception:any:,p:r:stackTrace:object:flax.core/flutter#type:StackTrace)->bool:",
  invoke: FlaxCallbackAdapters.invoke2<Object, api2.StackTrace, bool>,
  matches: FlaxCallbackAdapters.matches2<Object, api2.StackTrace, bool>,
);
const _flaxBinding1021 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1020,
);
const _flaxBinding1022 = FlaxGetter.plain(
  "onError",
  _flaxBinding1021,
  _PlatformDispatcher_onError,
);
const _flaxBinding1023 = FlaxGetter.plain(
  "defaultRouteName",
  flaxStringType,
  _PlatformDispatcher_defaultRouteName,
);
const _flaxBinding1024 = FlaxSetter(
  "onPlatformConfigurationChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onPlatformConfigurationChanged,
);
const _flaxBinding1025 = FlaxSetter(
  "onMetricsChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onMetricsChanged,
);
const _flaxBinding1026 = FlaxSetter(
  "onViewFocusChange",
  _flaxBinding958,
  _PlatformDispatcher_set_onViewFocusChange,
);
const _flaxBinding1027 = FlaxSetter(
  "onBeginFrame",
  _flaxBinding961,
  _PlatformDispatcher_set_onBeginFrame,
);
const _flaxBinding1028 = FlaxSetter(
  "onDrawFrame",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onDrawFrame,
);
const _flaxBinding1029 = FlaxSetter(
  "onPointerDataPacket",
  _flaxBinding966,
  _PlatformDispatcher_set_onPointerDataPacket,
);
const _flaxBinding1030 = FlaxSetter(
  "onKeyData",
  _flaxBinding970,
  _PlatformDispatcher_set_onKeyData,
);
const _flaxBinding1031 = FlaxSetter(
  "onReportTimings",
  _flaxBinding976,
  _PlatformDispatcher_set_onReportTimings,
);
const _flaxBinding1032 = FlaxSetter(
  "onPlatformMessage",
  _flaxBinding980,
  _PlatformDispatcher_set_onPlatformMessage,
);
const _flaxBinding1033 = FlaxSetter(
  "onAccessibilityFeaturesChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onAccessibilityFeaturesChanged,
);
const _flaxBinding1034 = FlaxSetter(
  "onLocaleChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onLocaleChanged,
);
const _flaxBinding1035 = FlaxSetter(
  "onTextScaleFactorChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onTextScaleFactorChanged,
);
const _flaxBinding1036 = FlaxSetter(
  "onPlatformBrightnessChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onPlatformBrightnessChanged,
);
const _flaxBinding1037 = FlaxSetter(
  "onSystemFontFamilyChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onSystemFontFamilyChanged,
);
const _flaxBinding1038 = FlaxSetter(
  "onSemanticsEnabledChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onSemanticsEnabledChanged,
);
const _flaxBinding1039 = FlaxSetter(
  "onSemanticsActionEvent",
  _flaxBinding1010,
  _PlatformDispatcher_set_onSemanticsActionEvent,
);
const _flaxBinding1040 = FlaxSetter(
  "onHitTest",
  _flaxBinding1015,
  _PlatformDispatcher_set_onHitTest,
);
const _flaxBinding1041 = FlaxSetter(
  "onFrameDataChanged",
  flaxVoidNullableCallbackType,
  _PlatformDispatcher_set_onFrameDataChanged,
);
const _flaxBinding1042 = FlaxSetter(
  "onError",
  _flaxBinding1021,
  _PlatformDispatcher_set_onError,
);
const _flaxBinding1043 = <FlaxParameter>[
  FlaxParameter.required("id", flaxIntType),
];
const _flaxBinding1044 = FlaxInstanceMethod.plain(
  _flaxBinding1043,
  _flaxBinding952,
  _PlatformDispatcher_view,
);
const _flaxBinding1045 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ViewFocusDirection",
);
const _flaxBinding1046 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ViewFocusState",
);
const _flaxBinding1047 = <FlaxParameter>[
  FlaxParameter.required("direction", _flaxBinding1045),
  FlaxParameter.required("state", _flaxBinding1046),
  FlaxParameter.required("viewId", flaxIntType),
];
const _flaxBinding1048 = FlaxInstanceMethod.plain(
  _flaxBinding1047,
  flaxVoidType,
  _PlatformDispatcher_requestViewFocusChange,
);
const _flaxBinding1049 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter.required("data", _flaxBinding52),
  FlaxParameter.required("callback", _flaxBinding978),
];
const _flaxBinding1050 = FlaxInstanceMethod.plain(
  _flaxBinding1049,
  flaxVoidType,
  _PlatformDispatcher_sendPlatformMessage,
);
const _flaxBinding1051 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SendPort",
);
const _flaxBinding1052 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter.required("data", _flaxBinding52),
  FlaxParameter.required("identifier", flaxIntType),
  FlaxParameter.required("port", _flaxBinding1051),
];
const _flaxBinding1053 = FlaxInstanceMethod.plain(
  _flaxBinding1052,
  flaxVoidType,
  _PlatformDispatcher_sendPortPlatformMessage,
);
const _flaxBinding1054 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RootIsolateToken",
);
const _flaxBinding1055 = <FlaxParameter>[
  FlaxParameter.required("token", _flaxBinding1054),
];
const _flaxBinding1056 = FlaxInstanceMethod.plain(
  _flaxBinding1055,
  flaxVoidType,
  _PlatformDispatcher_registerBackgroundIsolate,
);
const _flaxBinding1057 = <FlaxParameter>[
  FlaxParameter.required("enabled", flaxBoolType),
];
const _flaxBinding1058 = FlaxInstanceMethod.plain(
  _flaxBinding1057,
  flaxVoidType,
  _PlatformDispatcher_setSemanticsTreeEnabled,
);
const _flaxBinding1059 = FlaxInstanceMethod.shared(
  _flaxBinding59,
  _PlatformDispatcher_setIsolateDebugName,
);
const _flaxBinding1060 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:DartPerformanceMode",
);
const _flaxBinding1061 = <FlaxParameter>[
  FlaxParameter.required("mode", _flaxBinding1060),
];
const _flaxBinding1062 = FlaxInstanceMethod.plain(
  _flaxBinding1061,
  flaxVoidType,
  _PlatformDispatcher_requestDartPerformanceMode,
);
const _flaxBinding1063 = FlaxInstanceMethod.plain(
  _flaxBinding200,
  _flaxBinding52,
  _PlatformDispatcher_getPersistentIsolateData,
);
const _flaxBinding1064 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _PlatformDispatcher_scheduleFrame,
);
const _flaxBinding1065 = <FlaxParameter>[
  FlaxParameter.required("beginFrame", flaxVoidCallbackType),
  FlaxParameter.required("drawFrame", flaxVoidCallbackType),
];
const _flaxBinding1066 = FlaxInstanceMethod.plain(
  _flaxBinding1065,
  flaxVoidType,
  _PlatformDispatcher_scheduleWarmUpFrame,
);
const _flaxBinding1067 = FlaxInstanceMethod.plain(
  _flaxBinding393,
  flaxVoidType,
  _PlatformDispatcher_updateSemantics,
);
const _flaxBinding1068 = <FlaxParameter>[
  FlaxParameter.required("locale", _flaxBinding89),
];
const _flaxBinding1069 = FlaxInstanceMethod.plain(
  _flaxBinding1068,
  flaxVoidType,
  _PlatformDispatcher_setApplicationLocale,
);
const _flaxBinding1070 = <FlaxParameter>[
  FlaxParameter.required("supportedLocales", _flaxBinding987),
];
const _flaxBinding1071 = FlaxInstanceMethod.plain(
  _flaxBinding1070,
  _flaxBinding785,
  _PlatformDispatcher_computePlatformResolvedLocale,
);
const _flaxBinding1072 = <FlaxParameter>[
  FlaxParameter.required("unscaledFontSize", flaxDoubleType),
];
const _flaxBinding1073 = FlaxInstanceMethod.plain(
  _flaxBinding1072,
  flaxDoubleType,
  _PlatformDispatcher_scaleFontSize,
);
const _flaxBinding1074 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PlatformDispatcher",
  [
    _flaxBinding947,
    _flaxBinding949,
    _flaxBinding951,
    _flaxBinding953,
    _flaxBinding954,
    _flaxBinding955,
    _flaxBinding959,
    _flaxBinding962,
    _flaxBinding963,
    _flaxBinding967,
    _flaxBinding971,
    _flaxBinding977,
    _flaxBinding981,
    _flaxBinding983,
    _flaxBinding984,
    _flaxBinding985,
    _flaxBinding988,
    _flaxBinding989,
    _flaxBinding990,
    _flaxBinding991,
    _flaxBinding992,
    _flaxBinding993,
    _flaxBinding994,
    _flaxBinding995,
    _flaxBinding996,
    _flaxBinding997,
    _flaxBinding998,
    _flaxBinding999,
    _flaxBinding1000,
    _flaxBinding1002,
    _flaxBinding1003,
    _flaxBinding1004,
    _flaxBinding1005,
    _flaxBinding1006,
    _flaxBinding1007,
    _flaxBinding1011,
    _flaxBinding1016,
    _flaxBinding1018,
    _flaxBinding1019,
    _flaxBinding1022,
    _flaxBinding1023,
  ],
  {
    "view": _flaxBinding1044,
    "requestViewFocusChange": _flaxBinding1048,
    "sendPlatformMessage": _flaxBinding1050,
    "sendPortPlatformMessage": _flaxBinding1053,
    "registerBackgroundIsolate": _flaxBinding1056,
    "setSemanticsTreeEnabled": _flaxBinding1058,
    "setIsolateDebugName": _flaxBinding1059,
    "requestDartPerformanceMode": _flaxBinding1062,
    "getPersistentIsolateData": _flaxBinding1063,
    "scheduleFrame": _flaxBinding1064,
    "scheduleWarmUpFrame": _flaxBinding1066,
    "updateSemantics": _flaxBinding1067,
    "setApplicationLocale": _flaxBinding1069,
    "computePlatformResolvedLocale": _flaxBinding1071,
    "scaleFontSize": _flaxBinding1073,
  },
  constructors: {},
  create: _createPlatformDispatcher,
  matches: _isPlatformDispatcher,
  setters: [
    _flaxBinding1024,
    _flaxBinding1025,
    _flaxBinding1026,
    _flaxBinding1027,
    _flaxBinding1028,
    _flaxBinding1029,
    _flaxBinding1030,
    _flaxBinding1031,
    _flaxBinding1032,
    _flaxBinding1033,
    _flaxBinding1034,
    _flaxBinding1035,
    _flaxBinding1036,
    _flaxBinding1037,
    _flaxBinding1038,
    _flaxBinding1039,
    _flaxBinding1040,
    _flaxBinding1041,
    _flaxBinding1042,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1075 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PluginUtilities",
  [],
  {},
  constructors: {},
  create: _createPluginUtilities,
  matches: _isPluginUtilities,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1076 = FlaxGetter.plain(
  "viewId",
  flaxIntType,
  _PointerData_viewId,
);
const _flaxBinding1077 = FlaxGetter.plain(
  "embedderId",
  flaxIntType,
  _PointerData_embedderId,
);
const _flaxBinding1078 = FlaxGetter.plain(
  "timeStamp",
  flaxDurationType,
  _PointerData_timeStamp,
);
const _flaxBinding1079 = FlaxGetter.plain(
  "change",
  _flaxBinding143,
  _PointerData_change,
);
const _flaxBinding1080 = FlaxGetter.plain(
  "kind",
  _flaxBinding145,
  _PointerData_kind,
);
const _flaxBinding1081 = FlaxGetter.plain(
  "signalKind",
  _flaxBinding147,
  _PointerData_signalKind,
);
const _flaxBinding1082 = FlaxGetter.plain(
  "device",
  flaxIntType,
  _PointerData_device,
);
const _flaxBinding1083 = FlaxGetter.plain(
  "pointerIdentifier",
  flaxIntType,
  _PointerData_pointerIdentifier,
);
const _flaxBinding1084 = FlaxGetter.plain(
  "physicalX",
  flaxDoubleType,
  _PointerData_physicalX,
);
const _flaxBinding1085 = FlaxGetter.plain(
  "physicalY",
  flaxDoubleType,
  _PointerData_physicalY,
);
const _flaxBinding1086 = FlaxGetter.plain(
  "physicalDeltaX",
  flaxDoubleType,
  _PointerData_physicalDeltaX,
);
const _flaxBinding1087 = FlaxGetter.plain(
  "physicalDeltaY",
  flaxDoubleType,
  _PointerData_physicalDeltaY,
);
const _flaxBinding1088 = FlaxGetter.plain(
  "buttons",
  flaxIntType,
  _PointerData_buttons,
);
const _flaxBinding1089 = FlaxGetter.plain(
  "obscured",
  flaxBoolType,
  _PointerData_obscured,
);
const _flaxBinding1090 = FlaxGetter.plain(
  "synthesized",
  flaxBoolType,
  _PointerData_synthesized,
);
const _flaxBinding1091 = FlaxGetter.plain(
  "pressure",
  flaxDoubleType,
  _PointerData_pressure,
);
const _flaxBinding1092 = FlaxGetter.plain(
  "pressureMin",
  flaxDoubleType,
  _PointerData_pressureMin,
);
const _flaxBinding1093 = FlaxGetter.plain(
  "pressureMax",
  flaxDoubleType,
  _PointerData_pressureMax,
);
const _flaxBinding1094 = FlaxGetter.plain(
  "distance",
  flaxDoubleType,
  _PointerData_distance,
);
const _flaxBinding1095 = FlaxGetter.plain(
  "distanceMax",
  flaxDoubleType,
  _PointerData_distanceMax,
);
const _flaxBinding1096 = FlaxGetter.plain(
  "size",
  flaxDoubleType,
  _PointerData_size,
);
const _flaxBinding1097 = FlaxGetter.plain(
  "radiusMajor",
  flaxDoubleType,
  _PointerData_radiusMajor,
);
const _flaxBinding1098 = FlaxGetter.plain(
  "radiusMinor",
  flaxDoubleType,
  _PointerData_radiusMinor,
);
const _flaxBinding1099 = FlaxGetter.plain(
  "radiusMin",
  flaxDoubleType,
  _PointerData_radiusMin,
);
const _flaxBinding1100 = FlaxGetter.plain(
  "radiusMax",
  flaxDoubleType,
  _PointerData_radiusMax,
);
const _flaxBinding1101 = FlaxGetter.plain(
  "orientation",
  flaxDoubleType,
  _PointerData_orientation,
);
const _flaxBinding1102 = FlaxGetter.plain(
  "tilt",
  flaxDoubleType,
  _PointerData_tilt,
);
const _flaxBinding1103 = FlaxGetter.plain(
  "platformData",
  flaxIntType,
  _PointerData_platformData,
);
const _flaxBinding1104 = FlaxGetter.plain(
  "scrollDeltaX",
  flaxDoubleType,
  _PointerData_scrollDeltaX,
);
const _flaxBinding1105 = FlaxGetter.plain(
  "scrollDeltaY",
  flaxDoubleType,
  _PointerData_scrollDeltaY,
);
const _flaxBinding1106 = FlaxGetter.plain(
  "panX",
  flaxDoubleType,
  _PointerData_panX,
);
const _flaxBinding1107 = FlaxGetter.plain(
  "panY",
  flaxDoubleType,
  _PointerData_panY,
);
const _flaxBinding1108 = FlaxGetter.plain(
  "panDeltaX",
  flaxDoubleType,
  _PointerData_panDeltaX,
);
const _flaxBinding1109 = FlaxGetter.plain(
  "panDeltaY",
  flaxDoubleType,
  _PointerData_panDeltaY,
);
const _flaxBinding1110 = FlaxGetter.plain(
  "scale",
  flaxDoubleType,
  _PointerData_scale,
);
const _flaxBinding1111 = FlaxGetter.plain(
  "rotation",
  flaxDoubleType,
  _PointerData_rotation,
);
const _flaxBinding1112 = FlaxInstanceMethod.shared(
  _flaxBinding142,
  _PointerData_respond,
);
const _flaxBinding1113 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _PointerData_toString,
);
const _flaxBinding1114 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _PointerData_toStringFull,
);
const _flaxBinding1115 = FlaxInstanceMethod.shared(
  flaxIntCall,
  _FlaxProxyDispatch7_super_get_viewId,
);
const _flaxBinding1116 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain(
      "allowPlatformDefault",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  _callback5,
  id: "callback:<>(n:o:allowPlatformDefault:bool:)->void:",
  invoke: _callback5Invoke,
  matches: _callback5Matches,
);
const _flaxBinding1117 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1116,
);
const _flaxBinding1118 = <FlaxParameter>[
  FlaxParameter("viewId", flaxIntType, required: false, defaultValue: 0),
  FlaxParameter("embedderId", flaxIntType, required: false, defaultValue: 0),
  FlaxParameter(
    "timeStamp",
    flaxDurationType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "change",
    _flaxBinding143,
    required: false,
    defaultValue: api.PointerChange.cancel,
  ),
  FlaxParameter(
    "kind",
    _flaxBinding145,
    required: false,
    defaultValue: api.PointerDeviceKind.touch,
  ),
  FlaxParameter("signalKind", _flaxBinding147, required: false),
  FlaxParameter("device", flaxIntType, required: false, defaultValue: 0),
  FlaxParameter(
    "pointerIdentifier",
    flaxIntType,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "physicalX",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "physicalY",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "physicalDeltaX",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "physicalDeltaY",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("buttons", flaxIntType, required: false, defaultValue: 0),
  FlaxParameter("obscured", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter(
    "synthesized",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("pressure", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter(
    "pressureMin",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "pressureMax",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("distance", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter(
    "distanceMax",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("size", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter(
    "radiusMajor",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "radiusMinor",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "radiusMin",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "radiusMax",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "orientation",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("tilt", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter("platformData", flaxIntType, required: false, defaultValue: 0),
  FlaxParameter(
    "scrollDeltaX",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "scrollDeltaY",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("panX", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter("panY", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter(
    "panDeltaX",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "panDeltaY",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("scale", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter("rotation", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter("onRespond", _flaxBinding1117, required: false),
];
const _flaxBinding1119 = FlaxProxyMember(
  "respond",
  0,
  _flaxBinding142,
  hasSuper: true,
);
const _flaxBinding1120 = FlaxProxyMember(
  "viewId",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1121 = FlaxProxyMember(
  "embedderId",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1122 = FlaxProxyMember(
  "change",
  1,
  _flaxBinding144,
  hasSuper: true,
);
const _flaxBinding1123 = FlaxProxyMember(
  "kind",
  1,
  _flaxBinding146,
  hasSuper: true,
);
const _flaxBinding1124 = FlaxProxyMember(
  "signalKind",
  1,
  _flaxBinding148,
  hasSuper: true,
);
const _flaxBinding1125 = FlaxProxyMember(
  "device",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1126 = FlaxProxyMember(
  "pointerIdentifier",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1127 = FlaxProxyMember(
  "physicalX",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1128 = FlaxProxyMember(
  "physicalY",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1129 = FlaxProxyMember(
  "physicalDeltaX",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1130 = FlaxProxyMember(
  "physicalDeltaY",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1131 = FlaxProxyMember(
  "buttons",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1132 = FlaxProxyMember(
  "obscured",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1133 = FlaxProxyMember(
  "pressure",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1134 = FlaxProxyMember(
  "pressureMin",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1135 = FlaxProxyMember(
  "pressureMax",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1136 = FlaxProxyMember(
  "distance",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1137 = FlaxProxyMember(
  "distanceMax",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1138 = FlaxProxyMember(
  "size",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1139 = FlaxProxyMember(
  "radiusMajor",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1140 = FlaxProxyMember(
  "radiusMinor",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1141 = FlaxProxyMember(
  "radiusMin",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1142 = FlaxProxyMember(
  "radiusMax",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1143 = FlaxProxyMember(
  "orientation",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1144 = FlaxProxyMember(
  "tilt",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1145 = FlaxProxyMember(
  "platformData",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1146 = FlaxProxyMember(
  "scrollDeltaX",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1147 = FlaxProxyMember(
  "scrollDeltaY",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1148 = FlaxProxyMember(
  "panX",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1149 = FlaxProxyMember(
  "panY",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1150 = FlaxProxyMember(
  "panDeltaX",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1151 = FlaxProxyMember(
  "panDeltaY",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1152 = FlaxProxyMember(
  "scale",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1153 = FlaxProxyMember(
  "rotation",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1154 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PointerData",
  [
    _flaxBinding1076,
    _flaxBinding1077,
    _flaxBinding1078,
    _flaxBinding1079,
    _flaxBinding1080,
    _flaxBinding1081,
    _flaxBinding1082,
    _flaxBinding1083,
    _flaxBinding1084,
    _flaxBinding1085,
    _flaxBinding1086,
    _flaxBinding1087,
    _flaxBinding1088,
    _flaxBinding1089,
    _flaxBinding1090,
    _flaxBinding1091,
    _flaxBinding1092,
    _flaxBinding1093,
    _flaxBinding1094,
    _flaxBinding1095,
    _flaxBinding1096,
    _flaxBinding1097,
    _flaxBinding1098,
    _flaxBinding1099,
    _flaxBinding1100,
    _flaxBinding1101,
    _flaxBinding1102,
    _flaxBinding1103,
    _flaxBinding1104,
    _flaxBinding1105,
    _flaxBinding1106,
    _flaxBinding1107,
    _flaxBinding1108,
    _flaxBinding1109,
    _flaxBinding1110,
    _flaxBinding1111,
  ],
  {
    "respond": _flaxBinding1112,
    "toString": _flaxBinding1113,
    "toStringFull": _flaxBinding1114,
    "@super:respond": FlaxInstanceMethod.shared(
      _flaxBinding142,
      _PointerData_super_respond,
    ),
    "@super:toString": _flaxBinding353,
    "@super:toStringFull": _flaxBinding586,
    "@super:get:viewId": _flaxBinding1115,
    "@super:get:embedderId": FlaxInstanceMethod.shared(
      flaxIntCall,
      _PointerData_super_get_embedderId,
    ),
    "@super:get:timeStamp": _flaxBinding587,
    "@super:get:change": FlaxInstanceMethod.shared(
      _flaxBinding144,
      _PointerData_super_get_change,
    ),
    "@super:get:kind": FlaxInstanceMethod.shared(
      _flaxBinding146,
      _PointerData_super_get_kind,
    ),
    "@super:get:signalKind": FlaxInstanceMethod.shared(
      _flaxBinding148,
      _PointerData_super_get_signalKind,
    ),
    "@super:get:device": FlaxInstanceMethod.shared(
      flaxIntCall,
      _PointerData_super_get_device,
    ),
    "@super:get:pointerIdentifier": FlaxInstanceMethod.shared(
      flaxIntCall,
      _PointerData_super_get_pointerIdentifier,
    ),
    "@super:get:physicalX": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_physicalX,
    ),
    "@super:get:physicalY": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_physicalY,
    ),
    "@super:get:physicalDeltaX": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_physicalDeltaX,
    ),
    "@super:get:physicalDeltaY": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_physicalDeltaY,
    ),
    "@super:get:buttons": FlaxInstanceMethod.shared(
      flaxIntCall,
      _PointerData_super_get_buttons,
    ),
    "@super:get:obscured": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _PointerData_super_get_obscured,
    ),
    "@super:get:synthesized": _flaxBinding588,
    "@super:get:pressure": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_pressure,
    ),
    "@super:get:pressureMin": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_pressureMin,
    ),
    "@super:get:pressureMax": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_pressureMax,
    ),
    "@super:get:distance": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_distance,
    ),
    "@super:get:distanceMax": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_distanceMax,
    ),
    "@super:get:size": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_size,
    ),
    "@super:get:radiusMajor": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_radiusMajor,
    ),
    "@super:get:radiusMinor": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_radiusMinor,
    ),
    "@super:get:radiusMin": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_radiusMin,
    ),
    "@super:get:radiusMax": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_radiusMax,
    ),
    "@super:get:orientation": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_orientation,
    ),
    "@super:get:tilt": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_tilt,
    ),
    "@super:get:platformData": FlaxInstanceMethod.shared(
      flaxIntCall,
      _PointerData_super_get_platformData,
    ),
    "@super:get:scrollDeltaX": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_scrollDeltaX,
    ),
    "@super:get:scrollDeltaY": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_scrollDeltaY,
    ),
    "@super:get:panX": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_panX,
    ),
    "@super:get:panY": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_panY,
    ),
    "@super:get:panDeltaX": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_panDeltaX,
    ),
    "@super:get:panDeltaY": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_panDeltaY,
    ),
    "@super:get:scale": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_scale,
    ),
    "@super:get:rotation": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _PointerData_super_get_rotation,
    ),
  },
  constructors: {"": _flaxBinding1118, "@implementation": _flaxBinding1118},
  create: _createPointerData,
  matches: _isPointerData,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1119,
    _flaxBinding355,
    _flaxBinding590,
    _flaxBinding1120,
    _flaxBinding1121,
    _flaxBinding591,
    _flaxBinding1122,
    _flaxBinding1123,
    _flaxBinding1124,
    _flaxBinding1125,
    _flaxBinding1126,
    _flaxBinding1127,
    _flaxBinding1128,
    _flaxBinding1129,
    _flaxBinding1130,
    _flaxBinding1131,
    _flaxBinding1132,
    _flaxBinding597,
    _flaxBinding1133,
    _flaxBinding1134,
    _flaxBinding1135,
    _flaxBinding1136,
    _flaxBinding1137,
    _flaxBinding1138,
    _flaxBinding1139,
    _flaxBinding1140,
    _flaxBinding1141,
    _flaxBinding1142,
    _flaxBinding1143,
    _flaxBinding1144,
    _flaxBinding1145,
    _flaxBinding1146,
    _flaxBinding1147,
    _flaxBinding1148,
    _flaxBinding1149,
    _flaxBinding1150,
    _flaxBinding1151,
    _flaxBinding1152,
    _flaxBinding1153,
  ]),
);
const _flaxBinding1155 = FlaxGetter.plain(
  "data",
  _flaxBinding151,
  _PointerDataPacket_data,
);
const _flaxBinding1156 = <FlaxParameter>[
  FlaxParameter("data", _flaxBinding151, required: false, omitWhenAbsent: true),
];
const _flaxBinding1157 = FlaxProxyMember(
  "data",
  1,
  _flaxBinding152,
  hasSuper: true,
);
const _flaxBinding1158 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PointerDataPacket",
  [_flaxBinding1155],
  {
    "@super:get:data": FlaxInstanceMethod.shared(
      _flaxBinding152,
      _PointerDataPacket_super_get_data,
    ),
  },
  constructors: {"": _flaxBinding1156, "@implementation": _flaxBinding1156},
  create: _createPointerDataPacket,
  matches: _isPointerDataPacket,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding1157]),
);
const _flaxBinding1159 = FlaxGetter.plain("left", flaxDoubleType, _RRect_left);
const _flaxBinding1160 = FlaxGetter.plain("top", flaxDoubleType, _RRect_top);
const _flaxBinding1161 = FlaxGetter.plain(
  "right",
  flaxDoubleType,
  _RRect_right,
);
const _flaxBinding1162 = FlaxGetter.plain(
  "bottom",
  flaxDoubleType,
  _RRect_bottom,
);
const _flaxBinding1163 = FlaxGetter.plain(
  "tlRadiusX",
  flaxDoubleType,
  _RRect_tlRadiusX,
);
const _flaxBinding1164 = FlaxGetter.plain(
  "tlRadiusY",
  flaxDoubleType,
  _RRect_tlRadiusY,
);
const _flaxBinding1165 = FlaxGetter.plain(
  "tlRadius",
  flaxRadiusType,
  _RRect_tlRadius,
);
const _flaxBinding1166 = FlaxGetter.plain(
  "trRadiusX",
  flaxDoubleType,
  _RRect_trRadiusX,
);
const _flaxBinding1167 = FlaxGetter.plain(
  "trRadiusY",
  flaxDoubleType,
  _RRect_trRadiusY,
);
const _flaxBinding1168 = FlaxGetter.plain(
  "trRadius",
  flaxRadiusType,
  _RRect_trRadius,
);
const _flaxBinding1169 = FlaxGetter.plain(
  "brRadiusX",
  flaxDoubleType,
  _RRect_brRadiusX,
);
const _flaxBinding1170 = FlaxGetter.plain(
  "brRadiusY",
  flaxDoubleType,
  _RRect_brRadiusY,
);
const _flaxBinding1171 = FlaxGetter.plain(
  "brRadius",
  flaxRadiusType,
  _RRect_brRadius,
);
const _flaxBinding1172 = FlaxGetter.plain(
  "blRadiusX",
  flaxDoubleType,
  _RRect_blRadiusX,
);
const _flaxBinding1173 = FlaxGetter.plain(
  "blRadiusY",
  flaxDoubleType,
  _RRect_blRadiusY,
);
const _flaxBinding1174 = FlaxGetter.plain(
  "blRadius",
  flaxRadiusType,
  _RRect_blRadius,
);
const _flaxBinding1175 = FlaxGetter.plain(
  "width",
  flaxDoubleType,
  _RRect_width,
);
const _flaxBinding1176 = FlaxGetter.plain(
  "height",
  flaxDoubleType,
  _RRect_height,
);
const _flaxBinding1177 = FlaxGetter.plain(
  "outerRect",
  flaxRectType,
  _RRect_outerRect,
);
const _flaxBinding1178 = FlaxGetter.plain(
  "safeInnerRect",
  flaxRectType,
  _RRect_safeInnerRect,
);
const _flaxBinding1179 = FlaxGetter.plain(
  "middleRect",
  flaxRectType,
  _RRect_middleRect,
);
const _flaxBinding1180 = FlaxGetter.plain(
  "wideMiddleRect",
  flaxRectType,
  _RRect_wideMiddleRect,
);
const _flaxBinding1181 = FlaxGetter.plain(
  "tallMiddleRect",
  flaxRectType,
  _RRect_tallMiddleRect,
);
const _flaxBinding1182 = FlaxGetter.plain(
  "isEmpty",
  flaxBoolType,
  _RRect_isEmpty,
);
const _flaxBinding1183 = FlaxGetter.plain(
  "isFinite",
  flaxBoolType,
  _RRect_isFinite,
);
const _flaxBinding1184 = FlaxGetter.plain(
  "isRect",
  flaxBoolType,
  _RRect_isRect,
);
const _flaxBinding1185 = FlaxGetter.plain(
  "isStadium",
  flaxBoolType,
  _RRect_isStadium,
);
const _flaxBinding1186 = FlaxGetter.plain(
  "isEllipse",
  flaxBoolType,
  _RRect_isEllipse,
);
const _flaxBinding1187 = FlaxGetter.plain(
  "isCircle",
  flaxBoolType,
  _RRect_isCircle,
);
const _flaxBinding1188 = FlaxGetter.plain(
  "shortestSide",
  flaxDoubleType,
  _RRect_shortestSide,
);
const _flaxBinding1189 = FlaxGetter.plain(
  "longestSide",
  flaxDoubleType,
  _RRect_longestSide,
);
const _flaxBinding1190 = FlaxGetter.plain(
  "hasNaN",
  flaxBoolType,
  _RRect_hasNaN,
);
const _flaxBinding1191 = FlaxGetter.plain(
  "center",
  flaxOffsetType,
  _RRect_center,
);
const _flaxBinding1192 = FlaxInstanceMethod.shared(
  _flaxBinding131,
  _RRect_contains,
);
const _flaxBinding1193 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _RRect_toString,
);
const _flaxBinding1194 = <FlaxParameter>[
  FlaxParameter.required("offset", flaxOffsetType),
];
const _flaxBinding1195 = FlaxInstanceMethod.plain(
  _flaxBinding1194,
  _flaxBinding16,
  _RRect_shift,
);
const _flaxBinding1196 = <FlaxParameter>[
  FlaxParameter.required("delta", flaxDoubleType),
];
const _flaxBinding1197 = FlaxInstanceMethod.plain(
  _flaxBinding1196,
  _flaxBinding16,
  _RRect_inflate,
);
const _flaxBinding1198 = FlaxInstanceMethod.plain(
  _flaxBinding1196,
  _flaxBinding16,
  _RRect_deflate,
);
const _flaxBinding1199 = FlaxInstanceMethod.plain(
  _flaxBinding200,
  _flaxBinding16,
  _RRect_scaleRadii,
);
const _flaxBinding1200 = <FlaxParameter>[
  FlaxParameter.required("left", flaxDoubleType),
  FlaxParameter.required("top", flaxDoubleType),
  FlaxParameter.required("right", flaxDoubleType),
  FlaxParameter.required("bottom", flaxDoubleType),
  FlaxParameter.required("radiusX", flaxDoubleType),
  FlaxParameter.required("radiusY", flaxDoubleType),
];
const _flaxBinding1201 = <FlaxParameter>[
  FlaxParameter.required("left", flaxDoubleType),
  FlaxParameter.required("top", flaxDoubleType),
  FlaxParameter.required("right", flaxDoubleType),
  FlaxParameter.required("bottom", flaxDoubleType),
  FlaxParameter.required("radius", flaxRadiusType),
];
const _flaxBinding1202 = <FlaxParameter>[
  FlaxParameter.required("rect", flaxRectType),
  FlaxParameter.required("radiusX", flaxDoubleType),
  FlaxParameter.required("radiusY", flaxDoubleType),
];
const _flaxBinding1203 = <FlaxParameter>[
  FlaxParameter.required("rect", flaxRectType),
  FlaxParameter.required("radius", flaxRadiusType),
];
const _flaxBinding1204 = <FlaxParameter>[
  FlaxParameter.required("left", flaxDoubleType),
  FlaxParameter.required("top", flaxDoubleType),
  FlaxParameter.required("right", flaxDoubleType),
  FlaxParameter.required("bottom", flaxDoubleType),
  FlaxParameter(
    "topLeft",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "topRight",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "bottomRight",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "bottomLeft",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding1205 = <FlaxParameter>[
  FlaxParameter.required("rect", flaxRectType),
  FlaxParameter(
    "topLeft",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "topRight",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "bottomRight",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "bottomLeft",
    flaxRadiusType,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding1206 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:RRect",
  [
    _flaxBinding1159,
    _flaxBinding1160,
    _flaxBinding1161,
    _flaxBinding1162,
    _flaxBinding1163,
    _flaxBinding1164,
    _flaxBinding1165,
    _flaxBinding1166,
    _flaxBinding1167,
    _flaxBinding1168,
    _flaxBinding1169,
    _flaxBinding1170,
    _flaxBinding1171,
    _flaxBinding1172,
    _flaxBinding1173,
    _flaxBinding1174,
    _flaxBinding1175,
    _flaxBinding1176,
    _flaxBinding1177,
    _flaxBinding1178,
    _flaxBinding1179,
    _flaxBinding1180,
    _flaxBinding1181,
    _flaxBinding1182,
    _flaxBinding1183,
    _flaxBinding1184,
    _flaxBinding1185,
    _flaxBinding1186,
    _flaxBinding1187,
    _flaxBinding1188,
    _flaxBinding1189,
    _flaxBinding1190,
    _flaxBinding1191,
  ],
  {
    "contains": _flaxBinding1192,
    "toString": _flaxBinding1193,
    "shift": _flaxBinding1195,
    "inflate": _flaxBinding1197,
    "deflate": _flaxBinding1198,
    "scaleRadii": _flaxBinding1199,
  },
  constructors: {
    "fromLTRBXY": _flaxBinding1200,
    "fromLTRBR": _flaxBinding1201,
    "fromRectXY": _flaxBinding1202,
    "fromRectAndRadius": _flaxBinding1203,
    "fromLTRBAndCorners": _flaxBinding1204,
    "fromRectAndCorners": _flaxBinding1205,
  },
  create: _createRRect,
  matches: _isRRect,
  setters: [],
  supertypes: ["dart:ui::_RRectLike", "dart:core::Object"],
);
const _flaxBinding1207 = FlaxGetter.plain(
  "scos",
  flaxDoubleType,
  _RSTransform_scos,
);
const _flaxBinding1208 = FlaxGetter.plain(
  "ssin",
  flaxDoubleType,
  _RSTransform_ssin,
);
const _flaxBinding1209 = FlaxGetter.plain(
  "tx",
  flaxDoubleType,
  _RSTransform_tx,
);
const _flaxBinding1210 = FlaxGetter.plain(
  "ty",
  flaxDoubleType,
  _RSTransform_ty,
);
const _flaxBinding1211 = <FlaxParameter>[
  FlaxParameter.required("scos", flaxDoubleType),
  FlaxParameter.required("ssin", flaxDoubleType),
  FlaxParameter.required("tx", flaxDoubleType),
  FlaxParameter.required("ty", flaxDoubleType),
];
const _flaxBinding1212 = <FlaxParameter>[
  FlaxParameter.required("rotation", flaxDoubleType),
  FlaxParameter.required("scale", flaxDoubleType),
  FlaxParameter.required("anchorX", flaxDoubleType),
  FlaxParameter.required("anchorY", flaxDoubleType),
  FlaxParameter.required("translateX", flaxDoubleType),
  FlaxParameter.required("translateY", flaxDoubleType),
];
const _flaxBinding1213 = FlaxProxyMember(
  "scos",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1214 = FlaxProxyMember(
  "ssin",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1215 = FlaxProxyMember(
  "tx",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1216 = FlaxProxyMember(
  "ty",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1217 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:RSTransform",
  [_flaxBinding1207, _flaxBinding1208, _flaxBinding1209, _flaxBinding1210],
  {
    "@super:get:scos": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _RSTransform_super_get_scos,
    ),
    "@super:get:ssin": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _RSTransform_super_get_ssin,
    ),
    "@super:get:tx": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _RSTransform_super_get_tx,
    ),
    "@super:get:ty": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _RSTransform_super_get_ty,
    ),
  },
  constructors: {
    "": _flaxBinding1211,
    "fromComponents": _flaxBinding1212,
    "@implementation": _flaxBinding1211,
  },
  create: _createRSTransform,
  matches: _isRSTransform,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1213,
    _flaxBinding1214,
    _flaxBinding1215,
    _flaxBinding1216,
  ]),
);
const _flaxBinding1218 = FlaxGetter.plain(
  "left",
  flaxDoubleType,
  _RSuperellipse_left,
);
const _flaxBinding1219 = FlaxGetter.plain(
  "top",
  flaxDoubleType,
  _RSuperellipse_top,
);
const _flaxBinding1220 = FlaxGetter.plain(
  "right",
  flaxDoubleType,
  _RSuperellipse_right,
);
const _flaxBinding1221 = FlaxGetter.plain(
  "bottom",
  flaxDoubleType,
  _RSuperellipse_bottom,
);
const _flaxBinding1222 = FlaxGetter.plain(
  "tlRadiusX",
  flaxDoubleType,
  _RSuperellipse_tlRadiusX,
);
const _flaxBinding1223 = FlaxGetter.plain(
  "tlRadiusY",
  flaxDoubleType,
  _RSuperellipse_tlRadiusY,
);
const _flaxBinding1224 = FlaxGetter.plain(
  "tlRadius",
  flaxRadiusType,
  _RSuperellipse_tlRadius,
);
const _flaxBinding1225 = FlaxGetter.plain(
  "trRadiusX",
  flaxDoubleType,
  _RSuperellipse_trRadiusX,
);
const _flaxBinding1226 = FlaxGetter.plain(
  "trRadiusY",
  flaxDoubleType,
  _RSuperellipse_trRadiusY,
);
const _flaxBinding1227 = FlaxGetter.plain(
  "trRadius",
  flaxRadiusType,
  _RSuperellipse_trRadius,
);
const _flaxBinding1228 = FlaxGetter.plain(
  "brRadiusX",
  flaxDoubleType,
  _RSuperellipse_brRadiusX,
);
const _flaxBinding1229 = FlaxGetter.plain(
  "brRadiusY",
  flaxDoubleType,
  _RSuperellipse_brRadiusY,
);
const _flaxBinding1230 = FlaxGetter.plain(
  "brRadius",
  flaxRadiusType,
  _RSuperellipse_brRadius,
);
const _flaxBinding1231 = FlaxGetter.plain(
  "blRadiusX",
  flaxDoubleType,
  _RSuperellipse_blRadiusX,
);
const _flaxBinding1232 = FlaxGetter.plain(
  "blRadiusY",
  flaxDoubleType,
  _RSuperellipse_blRadiusY,
);
const _flaxBinding1233 = FlaxGetter.plain(
  "blRadius",
  flaxRadiusType,
  _RSuperellipse_blRadius,
);
const _flaxBinding1234 = FlaxGetter.plain(
  "width",
  flaxDoubleType,
  _RSuperellipse_width,
);
const _flaxBinding1235 = FlaxGetter.plain(
  "height",
  flaxDoubleType,
  _RSuperellipse_height,
);
const _flaxBinding1236 = FlaxGetter.plain(
  "outerRect",
  flaxRectType,
  _RSuperellipse_outerRect,
);
const _flaxBinding1237 = FlaxGetter.plain(
  "safeInnerRect",
  flaxRectType,
  _RSuperellipse_safeInnerRect,
);
const _flaxBinding1238 = FlaxGetter.plain(
  "middleRect",
  flaxRectType,
  _RSuperellipse_middleRect,
);
const _flaxBinding1239 = FlaxGetter.plain(
  "wideMiddleRect",
  flaxRectType,
  _RSuperellipse_wideMiddleRect,
);
const _flaxBinding1240 = FlaxGetter.plain(
  "tallMiddleRect",
  flaxRectType,
  _RSuperellipse_tallMiddleRect,
);
const _flaxBinding1241 = FlaxGetter.plain(
  "isEmpty",
  flaxBoolType,
  _RSuperellipse_isEmpty,
);
const _flaxBinding1242 = FlaxGetter.plain(
  "isFinite",
  flaxBoolType,
  _RSuperellipse_isFinite,
);
const _flaxBinding1243 = FlaxGetter.plain(
  "isRect",
  flaxBoolType,
  _RSuperellipse_isRect,
);
const _flaxBinding1244 = FlaxGetter.plain(
  "isStadium",
  flaxBoolType,
  _RSuperellipse_isStadium,
);
const _flaxBinding1245 = FlaxGetter.plain(
  "isEllipse",
  flaxBoolType,
  _RSuperellipse_isEllipse,
);
const _flaxBinding1246 = FlaxGetter.plain(
  "isCircle",
  flaxBoolType,
  _RSuperellipse_isCircle,
);
const _flaxBinding1247 = FlaxGetter.plain(
  "shortestSide",
  flaxDoubleType,
  _RSuperellipse_shortestSide,
);
const _flaxBinding1248 = FlaxGetter.plain(
  "longestSide",
  flaxDoubleType,
  _RSuperellipse_longestSide,
);
const _flaxBinding1249 = FlaxGetter.plain(
  "hasNaN",
  flaxBoolType,
  _RSuperellipse_hasNaN,
);
const _flaxBinding1250 = FlaxGetter.plain(
  "center",
  flaxOffsetType,
  _RSuperellipse_center,
);
const _flaxBinding1251 = FlaxInstanceMethod.shared(
  _flaxBinding131,
  _RSuperellipse_contains,
);
const _flaxBinding1252 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _RSuperellipse_toString,
);
const _flaxBinding1253 = FlaxInstanceMethod.plain(
  _flaxBinding1194,
  _flaxBinding19,
  _RSuperellipse_shift,
);
const _flaxBinding1254 = FlaxInstanceMethod.plain(
  _flaxBinding1196,
  _flaxBinding19,
  _RSuperellipse_inflate,
);
const _flaxBinding1255 = FlaxInstanceMethod.plain(
  _flaxBinding1196,
  _flaxBinding19,
  _RSuperellipse_deflate,
);
const _flaxBinding1256 = FlaxInstanceMethod.plain(
  _flaxBinding200,
  _flaxBinding19,
  _RSuperellipse_scaleRadii,
);
const _flaxBinding1257 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:RSuperellipse",
  [
    _flaxBinding1218,
    _flaxBinding1219,
    _flaxBinding1220,
    _flaxBinding1221,
    _flaxBinding1222,
    _flaxBinding1223,
    _flaxBinding1224,
    _flaxBinding1225,
    _flaxBinding1226,
    _flaxBinding1227,
    _flaxBinding1228,
    _flaxBinding1229,
    _flaxBinding1230,
    _flaxBinding1231,
    _flaxBinding1232,
    _flaxBinding1233,
    _flaxBinding1234,
    _flaxBinding1235,
    _flaxBinding1236,
    _flaxBinding1237,
    _flaxBinding1238,
    _flaxBinding1239,
    _flaxBinding1240,
    _flaxBinding1241,
    _flaxBinding1242,
    _flaxBinding1243,
    _flaxBinding1244,
    _flaxBinding1245,
    _flaxBinding1246,
    _flaxBinding1247,
    _flaxBinding1248,
    _flaxBinding1249,
    _flaxBinding1250,
  ],
  {
    "contains": _flaxBinding1251,
    "toString": _flaxBinding1252,
    "shift": _flaxBinding1253,
    "inflate": _flaxBinding1254,
    "deflate": _flaxBinding1255,
    "scaleRadii": _flaxBinding1256,
  },
  constructors: {
    "fromLTRBXY": _flaxBinding1200,
    "fromLTRBR": _flaxBinding1201,
    "fromRectXY": _flaxBinding1202,
    "fromRectAndRadius": _flaxBinding1203,
    "fromLTRBAndCorners": _flaxBinding1204,
    "fromRectAndCorners": _flaxBinding1205,
  },
  create: _createRSuperellipse,
  matches: _isRSuperellipse,
  setters: [],
  supertypes: ["dart:ui::_RRectLike", "dart:core::Object"],
);
const _flaxBinding1258 = FlaxGetter.plain("left", flaxDoubleType, _Rect_left);
const _flaxBinding1259 = FlaxGetter.plain("top", flaxDoubleType, _Rect_top);
const _flaxBinding1260 = FlaxGetter.plain("right", flaxDoubleType, _Rect_right);
const _flaxBinding1261 = FlaxGetter.plain(
  "bottom",
  flaxDoubleType,
  _Rect_bottom,
);
const _flaxBinding1262 = FlaxGetter.plain("width", flaxDoubleType, _Rect_width);
const _flaxBinding1263 = FlaxGetter.plain(
  "height",
  flaxDoubleType,
  _Rect_height,
);
const _flaxBinding1264 = FlaxGetter.plain("size", flaxSizeType, _Rect_size);
const _flaxBinding1265 = FlaxGetter.plain("hasNaN", flaxBoolType, _Rect_hasNaN);
const _flaxBinding1266 = FlaxGetter.plain(
  "isInfinite",
  flaxBoolType,
  _Rect_isInfinite,
);
const _flaxBinding1267 = FlaxGetter.plain(
  "isFinite",
  flaxBoolType,
  _Rect_isFinite,
);
const _flaxBinding1268 = FlaxGetter.plain(
  "isEmpty",
  flaxBoolType,
  _Rect_isEmpty,
);
const _flaxBinding1269 = FlaxGetter.plain(
  "shortestSide",
  flaxDoubleType,
  _Rect_shortestSide,
);
const _flaxBinding1270 = FlaxGetter.plain(
  "longestSide",
  flaxDoubleType,
  _Rect_longestSide,
);
const _flaxBinding1271 = FlaxGetter.plain(
  "topLeft",
  flaxOffsetType,
  _Rect_topLeft,
);
const _flaxBinding1272 = FlaxGetter.plain(
  "topCenter",
  flaxOffsetType,
  _Rect_topCenter,
);
const _flaxBinding1273 = FlaxGetter.plain(
  "topRight",
  flaxOffsetType,
  _Rect_topRight,
);
const _flaxBinding1274 = FlaxGetter.plain(
  "centerLeft",
  flaxOffsetType,
  _Rect_centerLeft,
);
const _flaxBinding1275 = FlaxGetter.plain(
  "center",
  flaxOffsetType,
  _Rect_center,
);
const _flaxBinding1276 = FlaxGetter.plain(
  "centerRight",
  flaxOffsetType,
  _Rect_centerRight,
);
const _flaxBinding1277 = FlaxGetter.plain(
  "bottomLeft",
  flaxOffsetType,
  _Rect_bottomLeft,
);
const _flaxBinding1278 = FlaxGetter.plain(
  "bottomCenter",
  flaxOffsetType,
  _Rect_bottomCenter,
);
const _flaxBinding1279 = FlaxGetter.plain(
  "bottomRight",
  flaxOffsetType,
  _Rect_bottomRight,
);
const _flaxBinding1280 = FlaxInstanceMethod.plain(
  _flaxBinding1194,
  flaxRectType,
  _Rect_shift,
);
const _flaxBinding1281 = <FlaxParameter>[
  FlaxParameter.required("translateX", flaxDoubleType),
  FlaxParameter.required("translateY", flaxDoubleType),
];
const _flaxBinding1282 = FlaxInstanceMethod.plain(
  _flaxBinding1281,
  flaxRectType,
  _Rect_translate,
);
const _flaxBinding1283 = FlaxInstanceMethod.plain(
  _flaxBinding1196,
  flaxRectType,
  _Rect_inflate,
);
const _flaxBinding1284 = FlaxInstanceMethod.plain(
  _flaxBinding1196,
  flaxRectType,
  _Rect_deflate,
);
const _flaxBinding1285 = <FlaxParameter>[
  FlaxParameter.required("other", flaxRectType),
];
const _flaxBinding1286 = FlaxInstanceMethod.plain(
  _flaxBinding1285,
  flaxRectType,
  _Rect_intersect,
);
const _flaxBinding1287 = FlaxInstanceMethod.plain(
  _flaxBinding1285,
  flaxRectType,
  _Rect_expandToInclude,
);
const _flaxBinding1288 = FlaxInstanceMethod.plain(
  _flaxBinding1285,
  flaxBoolType,
  _Rect_overlaps,
);
const _flaxBinding1289 = FlaxInstanceMethod.plain(
  _flaxBinding1194,
  flaxBoolType,
  _Rect_contains,
);
const _flaxBinding1290 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Rect_toString,
);
const _flaxBinding1291 = <FlaxParameter>[
  FlaxParameter.required("left", flaxDoubleType),
  FlaxParameter.required("top", flaxDoubleType),
  FlaxParameter.required("right", flaxDoubleType),
  FlaxParameter.required("bottom", flaxDoubleType),
];
const _flaxBinding1292 = <FlaxParameter>[
  FlaxParameter.required("left", flaxDoubleType),
  FlaxParameter.required("top", flaxDoubleType),
  FlaxParameter.required("width", flaxDoubleType),
  FlaxParameter.required("height", flaxDoubleType),
];
const _flaxBinding1293 = <FlaxParameter>[
  FlaxParameter.required("center", flaxOffsetType),
  FlaxParameter.required("radius", flaxDoubleType),
];
const _flaxBinding1294 = <FlaxParameter>[
  FlaxParameter.required("center", flaxOffsetType),
  FlaxParameter.required("width", flaxDoubleType),
  FlaxParameter.required("height", flaxDoubleType),
];
const _flaxBinding1295 = <FlaxParameter>[
  FlaxParameter.required("a", flaxOffsetType),
  FlaxParameter.required("b", flaxOffsetType),
];
const _flaxBinding1296 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Rect",
  [
    _flaxBinding1258,
    _flaxBinding1259,
    _flaxBinding1260,
    _flaxBinding1261,
    _flaxBinding1262,
    _flaxBinding1263,
    _flaxBinding1264,
    _flaxBinding1265,
    _flaxBinding1266,
    _flaxBinding1267,
    _flaxBinding1268,
    _flaxBinding1269,
    _flaxBinding1270,
    _flaxBinding1271,
    _flaxBinding1272,
    _flaxBinding1273,
    _flaxBinding1274,
    _flaxBinding1275,
    _flaxBinding1276,
    _flaxBinding1277,
    _flaxBinding1278,
    _flaxBinding1279,
  ],
  {
    "shift": _flaxBinding1280,
    "translate": _flaxBinding1282,
    "inflate": _flaxBinding1283,
    "deflate": _flaxBinding1284,
    "intersect": _flaxBinding1286,
    "expandToInclude": _flaxBinding1287,
    "overlaps": _flaxBinding1288,
    "contains": _flaxBinding1289,
    "toString": _flaxBinding1290,
  },
  constructors: {
    "fromLTRB": _flaxBinding1291,
    "fromLTWH": _flaxBinding1292,
    "fromCircle": _flaxBinding1293,
    "fromCenter": _flaxBinding1294,
    "fromPoints": _flaxBinding1295,
  },
  create: _createRect,
  matches: _isRect,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1297 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:RootIsolateToken",
  [],
  {},
  constructors: {},
  create: _createRootIsolateToken,
  matches: _isRootIsolateToken,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1298 = FlaxInstanceMethod.shared(
  _flaxBinding153,
  _Scene_toImageSync,
);
const _flaxBinding1299 = FlaxInstanceMethod.shared(
  _flaxBinding138,
  _Scene_toImage,
);
const _flaxBinding1300 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _Scene_dispose,
);
const _flaxBinding1301 = FlaxProxyMember("toImageSync", 0, _flaxBinding153);
const _flaxBinding1302 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Scene",
  [],
  {
    "toImageSync": _flaxBinding1298,
    "toImage": _flaxBinding1299,
    "dispose": _flaxBinding1300,
  },
  constructors: {"@implementation": _flaxBinding200},
  create: _createScene,
  matches: _isScene,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding1301, _flaxBinding931, _flaxBinding201]),
);
const _flaxBinding1303 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TransformEngineLayer",
  nullable: true,
);
const _flaxBinding1304 = <FlaxParameter>[
  FlaxParameter.required("matrix4", _flaxBinding7),
  FlaxParameter("oldLayer", _flaxBinding1303, required: false),
];
const _flaxBinding1305 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TransformEngineLayer",
);
const _flaxBinding1306 = FlaxInstanceMethod.plain(
  _flaxBinding1304,
  _flaxBinding1305,
  _SceneBuilder_pushTransform,
);
const _flaxBinding1307 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OffsetEngineLayer",
  nullable: true,
);
const _flaxBinding1308 = <FlaxParameter>[
  FlaxParameter.required("dx", flaxDoubleType),
  FlaxParameter.required("dy", flaxDoubleType),
  FlaxParameter("oldLayer", _flaxBinding1307, required: false),
];
const _flaxBinding1309 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OffsetEngineLayer",
);
const _flaxBinding1310 = FlaxInstanceMethod.plain(
  _flaxBinding1308,
  _flaxBinding1309,
  _SceneBuilder_pushOffset,
);
const _flaxBinding1311 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRectEngineLayer",
  nullable: true,
);
const _flaxBinding1312 = <FlaxParameter>[
  FlaxParameter.required("rect", flaxRectType),
  FlaxParameter(
    "clipBehavior",
    flaxClipType,
    required: false,
    defaultValue: api.Clip.antiAlias,
  ),
  FlaxParameter("oldLayer", _flaxBinding1311, required: false),
];
const _flaxBinding1313 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRectEngineLayer",
);
const _flaxBinding1314 = FlaxInstanceMethod.plain(
  _flaxBinding1312,
  _flaxBinding1313,
  _SceneBuilder_pushClipRect,
);
const _flaxBinding1315 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRRectEngineLayer",
  nullable: true,
);
const _flaxBinding1316 = <FlaxParameter>[
  FlaxParameter.required("rrect", _flaxBinding16),
  FlaxParameter(
    "clipBehavior",
    flaxClipType,
    required: false,
    defaultValue: api.Clip.antiAlias,
  ),
  FlaxParameter("oldLayer", _flaxBinding1315, required: false),
];
const _flaxBinding1317 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRRectEngineLayer",
);
const _flaxBinding1318 = FlaxInstanceMethod.plain(
  _flaxBinding1316,
  _flaxBinding1317,
  _SceneBuilder_pushClipRRect,
);
const _flaxBinding1319 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer",
  nullable: true,
);
const _flaxBinding1320 = <FlaxParameter>[
  FlaxParameter.required("rsuperellipse", _flaxBinding19),
  FlaxParameter(
    "clipBehavior",
    flaxClipType,
    required: false,
    defaultValue: api.Clip.antiAlias,
  ),
  FlaxParameter("oldLayer", _flaxBinding1319, required: false),
];
const _flaxBinding1321 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer",
);
const _flaxBinding1322 = FlaxInstanceMethod.plain(
  _flaxBinding1320,
  _flaxBinding1321,
  _SceneBuilder_pushClipRSuperellipse,
);
const _flaxBinding1323 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipPathEngineLayer",
  nullable: true,
);
const _flaxBinding1324 = <FlaxParameter>[
  FlaxParameter.required("path", flaxPathType),
  FlaxParameter(
    "clipBehavior",
    flaxClipType,
    required: false,
    defaultValue: api.Clip.antiAlias,
  ),
  FlaxParameter("oldLayer", _flaxBinding1323, required: false),
];
const _flaxBinding1325 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipPathEngineLayer",
);
const _flaxBinding1326 = FlaxInstanceMethod.plain(
  _flaxBinding1324,
  _flaxBinding1325,
  _SceneBuilder_pushClipPath,
);
const _flaxBinding1327 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OpacityEngineLayer",
  nullable: true,
);
const _flaxBinding1328 = <FlaxParameter>[
  FlaxParameter.required("alpha", flaxIntType),
  FlaxParameter(
    "offset",
    _flaxBinding507,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("oldLayer", _flaxBinding1327, required: false),
];
const _flaxBinding1329 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OpacityEngineLayer",
);
const _flaxBinding1330 = FlaxInstanceMethod.plain(
  _flaxBinding1328,
  _flaxBinding1329,
  _SceneBuilder_pushOpacity,
);
const _flaxBinding1331 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ColorFilter",
);
const _flaxBinding1332 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ColorFilterEngineLayer",
  nullable: true,
);
const _flaxBinding1333 = <FlaxParameter>[
  FlaxParameter.required("filter", _flaxBinding1331),
  FlaxParameter("oldLayer", _flaxBinding1332, required: false),
];
const _flaxBinding1334 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ColorFilterEngineLayer",
);
const _flaxBinding1335 = FlaxInstanceMethod.plain(
  _flaxBinding1333,
  _flaxBinding1334,
  _SceneBuilder_pushColorFilter,
);
const _flaxBinding1336 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ImageFilter",
);
const _flaxBinding1337 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImageFilterEngineLayer",
  nullable: true,
);
const _flaxBinding1338 = <FlaxParameter>[
  FlaxParameter.required("filter", _flaxBinding1336),
  FlaxParameter(
    "offset",
    flaxOffsetType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("oldLayer", _flaxBinding1337, required: false),
];
const _flaxBinding1339 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImageFilterEngineLayer",
);
const _flaxBinding1340 = FlaxInstanceMethod.plain(
  _flaxBinding1338,
  _flaxBinding1339,
  _SceneBuilder_pushImageFilter,
);
const _flaxBinding1341 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer",
  nullable: true,
);
const _flaxBinding1342 = <FlaxParameter>[
  FlaxParameter.required("filter", _flaxBinding1336),
  FlaxParameter("backdropId", flaxNullableIntType, required: false),
  FlaxParameter(
    "blendMode",
    _flaxBinding11,
    required: false,
    defaultValue: api.BlendMode.srcOver,
  ),
  FlaxParameter("oldLayer", _flaxBinding1341, required: false),
];
const _flaxBinding1343 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer",
);
const _flaxBinding1344 = FlaxInstanceMethod.plain(
  _flaxBinding1342,
  _flaxBinding1343,
  _SceneBuilder_pushBackdropFilter,
);
const _flaxBinding1345 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Shader",
);
const _flaxBinding1346 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer",
  nullable: true,
);
const _flaxBinding1347 = <FlaxParameter>[
  FlaxParameter.required("shader", _flaxBinding1345),
  FlaxParameter.required("maskRect", flaxRectType),
  FlaxParameter.required("blendMode", _flaxBinding11),
  FlaxParameter(
    "filterQuality",
    _flaxBinding456,
    required: false,
    defaultValue: api.FilterQuality.low,
  ),
  FlaxParameter("oldLayer", _flaxBinding1346, required: false),
];
const _flaxBinding1348 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer",
);
const _flaxBinding1349 = FlaxInstanceMethod.plain(
  _flaxBinding1347,
  _flaxBinding1348,
  _SceneBuilder_pushShaderMask,
);
const _flaxBinding1350 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SceneBuilder_pop,
);
const _flaxBinding1351 = FlaxInstanceMethod.shared(
  _flaxBinding155,
  _SceneBuilder_addRetained,
);
const _flaxBinding1352 = FlaxInstanceMethod.shared(
  _flaxBinding156,
  _SceneBuilder_addPerformanceOverlay,
);
const _flaxBinding1353 = <FlaxParameter>[
  FlaxParameter.required("offset", flaxOffsetType),
  FlaxParameter.required("picture", _flaxBinding28),
  FlaxParameter(
    "isComplexHint",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "willChangeHint",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding1354 = FlaxInstanceMethod.plain(
  _flaxBinding1353,
  flaxVoidType,
  _SceneBuilder_addPicture,
);
const _flaxBinding1355 = <FlaxParameter>[
  FlaxParameter.required("textureId", flaxIntType),
  FlaxParameter(
    "filterQuality",
    _flaxBinding456,
    required: false,
    defaultValue: api.FilterQuality.low,
  ),
  FlaxParameter("freeze", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter("height", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter(
    "offset",
    flaxOffsetType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("width", flaxDoubleType, required: false, defaultValue: 0.0),
];
const _flaxBinding1356 = FlaxInstanceMethod.plain(
  _flaxBinding1355,
  flaxVoidType,
  _SceneBuilder_addTexture,
);
const _flaxBinding1357 = <FlaxParameter>[
  FlaxParameter.required("viewId", flaxIntType),
  FlaxParameter("height", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter(
    "offset",
    flaxOffsetType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("width", flaxDoubleType, required: false, defaultValue: 0.0),
];
const _flaxBinding1358 = FlaxInstanceMethod.plain(
  _flaxBinding1357,
  flaxVoidType,
  _SceneBuilder_addPlatformView,
);
const _flaxBinding1359 = FlaxInstanceMethod.shared(
  _flaxBinding158,
  _SceneBuilder_build,
);
const _flaxBinding1360 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("matrix4", _flaxBinding7),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1303,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1305,
  id: "callback:<>(p:r:matrix4:Float64List:,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:TransformEngineLayer)->object:flax.core/sdk_dart_ui#type:TransformEngineLayer",
);
const _flaxBinding1361 = FlaxProxyMember("pushTransform", 0, _flaxBinding1360);
const _flaxBinding1362 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("dx", flaxDoubleType),
    FlaxCallbackParameter.plain("dy", flaxDoubleType),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1307,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1309,
  id: "callback:<>(p:r:dx:double:,p:r:dy:double:,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:OffsetEngineLayer)->object:flax.core/sdk_dart_ui#type:OffsetEngineLayer",
);
const _flaxBinding1363 = FlaxProxyMember("pushOffset", 0, _flaxBinding1362);
const _flaxBinding1364 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rect", flaxRectType),
    FlaxCallbackParameter.plain(
      "clipBehavior",
      flaxClipType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1311,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1313,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,n:o:clipBehavior:enum:flax.core/flutter#type:Clip,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ClipRectEngineLayer)->object:flax.core/sdk_dart_ui#type:ClipRectEngineLayer",
);
const _flaxBinding1365 = FlaxProxyMember("pushClipRect", 0, _flaxBinding1364);
const _flaxBinding1366 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rrect", _flaxBinding16),
    FlaxCallbackParameter.plain(
      "clipBehavior",
      flaxClipType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1315,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1317,
  id: "callback:<>(p:r:rrect:object:flax.core/sdk_dart_ui#type:RRect,n:o:clipBehavior:enum:flax.core/flutter#type:Clip,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ClipRRectEngineLayer)->object:flax.core/sdk_dart_ui#type:ClipRRectEngineLayer",
);
const _flaxBinding1367 = FlaxProxyMember("pushClipRRect", 0, _flaxBinding1366);
const _flaxBinding1368 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("rsuperellipse", _flaxBinding19),
    FlaxCallbackParameter.plain(
      "clipBehavior",
      flaxClipType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1319,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1321,
  id: "callback:<>(p:r:rsuperellipse:object:flax.core/sdk_dart_ui#type:RSuperellipse,n:o:clipBehavior:enum:flax.core/flutter#type:Clip,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer)->object:flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer",
);
const _flaxBinding1369 = FlaxProxyMember(
  "pushClipRSuperellipse",
  0,
  _flaxBinding1368,
);
const _flaxBinding1370 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("path", flaxPathType),
    FlaxCallbackParameter.plain(
      "clipBehavior",
      flaxClipType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1323,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1325,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,n:o:clipBehavior:enum:flax.core/flutter#type:Clip,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ClipPathEngineLayer)->object:flax.core/sdk_dart_ui#type:ClipPathEngineLayer",
);
const _flaxBinding1371 = FlaxProxyMember("pushClipPath", 0, _flaxBinding1370);
const _flaxBinding1372 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("alpha", flaxIntType),
    FlaxCallbackParameter.plain(
      "offset",
      _flaxBinding507,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1327,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1329,
  id: "callback:<>(p:r:alpha:int:,n:o:offset:object?:flax.core/flutter#type:Offset,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:OpacityEngineLayer)->object:flax.core/sdk_dart_ui#type:OpacityEngineLayer",
);
const _flaxBinding1373 = FlaxProxyMember("pushOpacity", 0, _flaxBinding1372);
const _flaxBinding1374 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("filter", _flaxBinding1331),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1332,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1334,
  id: "callback:<>(p:r:filter:object:flax.core/sdk_dart_ui#type:ColorFilter,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ColorFilterEngineLayer)->object:flax.core/sdk_dart_ui#type:ColorFilterEngineLayer",
);
const _flaxBinding1375 = FlaxProxyMember(
  "pushColorFilter",
  0,
  _flaxBinding1374,
);
const _flaxBinding1376 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("filter", _flaxBinding1336),
    FlaxCallbackParameter.plain(
      "offset",
      flaxOffsetType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1337,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1339,
  id: "callback:<>(p:r:filter:object:flax.core/flutter#type:ImageFilter,n:o:offset:object:flax.core/flutter#type:Offset,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ImageFilterEngineLayer)->object:flax.core/sdk_dart_ui#type:ImageFilterEngineLayer",
);
const _flaxBinding1377 = FlaxProxyMember(
  "pushImageFilter",
  0,
  _flaxBinding1376,
);
const _flaxBinding1378 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("filter", _flaxBinding1336),
    FlaxCallbackParameter.plain(
      "blendMode",
      _flaxBinding11,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1341,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "backdropId",
      flaxNullableIntType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1343,
  id: "callback:<>(p:r:filter:object:flax.core/flutter#type:ImageFilter,n:o:blendMode:enum:flax.core/sdk_dart_ui#type:BlendMode,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer,n:o:backdropId:int?:)->object:flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer",
);
const _flaxBinding1379 = FlaxProxyMember(
  "pushBackdropFilter",
  0,
  _flaxBinding1378,
);
const _flaxBinding1380 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("shader", _flaxBinding1345),
    FlaxCallbackParameter.plain("maskRect", flaxRectType),
    FlaxCallbackParameter.plain("blendMode", _flaxBinding11),
    FlaxCallbackParameter.plain(
      "oldLayer",
      _flaxBinding1346,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "filterQuality",
      _flaxBinding456,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1348,
  id: "callback:<>(p:r:shader:object:flax.core/sdk_dart_ui#type:Shader,p:r:maskRect:object:flax.core/sdk_dart_ui#type:Rect,p:r:blendMode:enum:flax.core/sdk_dart_ui#type:BlendMode,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer,n:o:filterQuality:enum:flax.core/sdk_dart_ui#type:FilterQuality)->object:flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer",
);
const _flaxBinding1381 = FlaxProxyMember("pushShaderMask", 0, _flaxBinding1380);
const _flaxBinding1382 = FlaxProxyMember("addRetained", 0, _flaxBinding155);
const _flaxBinding1383 = FlaxProxyMember(
  "addPerformanceOverlay",
  0,
  _flaxBinding156,
);
const _flaxBinding1384 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("offset", flaxOffsetType),
    FlaxCallbackParameter.plain("picture", _flaxBinding28),
    FlaxCallbackParameter.plain(
      "isComplexHint",
      flaxBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "willChangeHint",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:offset:object:flax.core/flutter#type:Offset,p:r:picture:object:flax.core/sdk_dart_ui#type:Picture,n:o:isComplexHint:bool:,n:o:willChangeHint:bool:)->void:",
);
const _flaxBinding1385 = FlaxProxyMember("addPicture", 0, _flaxBinding1384);
const _flaxBinding1386 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("textureId", flaxIntType),
    FlaxCallbackParameter.plain(
      "offset",
      flaxOffsetType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "width",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "height",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "freeze",
      flaxBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "filterQuality",
      _flaxBinding456,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:textureId:int:,n:o:offset:object:flax.core/flutter#type:Offset,n:o:width:double:,n:o:height:double:,n:o:freeze:bool:,n:o:filterQuality:enum:flax.core/sdk_dart_ui#type:FilterQuality)->void:",
);
const _flaxBinding1387 = FlaxProxyMember("addTexture", 0, _flaxBinding1386);
const _flaxBinding1388 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("viewId", flaxIntType),
    FlaxCallbackParameter.plain(
      "offset",
      flaxOffsetType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "width",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "height",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(p:r:viewId:int:,n:o:offset:object:flax.core/flutter#type:Offset,n:o:width:double:,n:o:height:double:)->void:",
);
const _flaxBinding1389 = FlaxProxyMember(
  "addPlatformView",
  0,
  _flaxBinding1388,
);
const _flaxBinding1390 = FlaxProxyMember("build", 0, _flaxBinding158);
const _flaxBinding1391 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SceneBuilder",
  [],
  {
    "pushTransform": _flaxBinding1306,
    "pushOffset": _flaxBinding1310,
    "pushClipRect": _flaxBinding1314,
    "pushClipRRect": _flaxBinding1318,
    "pushClipRSuperellipse": _flaxBinding1322,
    "pushClipPath": _flaxBinding1326,
    "pushOpacity": _flaxBinding1330,
    "pushColorFilter": _flaxBinding1335,
    "pushImageFilter": _flaxBinding1340,
    "pushBackdropFilter": _flaxBinding1344,
    "pushShaderMask": _flaxBinding1349,
    "pop": _flaxBinding1350,
    "addRetained": _flaxBinding1351,
    "addPerformanceOverlay": _flaxBinding1352,
    "addPicture": _flaxBinding1354,
    "addTexture": _flaxBinding1356,
    "addPlatformView": _flaxBinding1358,
    "build": _flaxBinding1359,
  },
  constructors: {"": _flaxBinding200, "@implementation": _flaxBinding200},
  create: _createSceneBuilder,
  matches: _isSceneBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1361,
    _flaxBinding1363,
    _flaxBinding1365,
    _flaxBinding1367,
    _flaxBinding1369,
    _flaxBinding1371,
    _flaxBinding1373,
    _flaxBinding1375,
    _flaxBinding1377,
    _flaxBinding1379,
    _flaxBinding1381,
    _flaxBinding766,
    _flaxBinding1382,
    _flaxBinding1383,
    _flaxBinding1385,
    _flaxBinding1387,
    _flaxBinding1389,
    _flaxBinding1390,
  ]),
);
const _flaxBinding1392 = FlaxGetter.plain(
  "index",
  flaxIntType,
  _SemanticsAction_index,
);
const _flaxBinding1393 = FlaxGetter.plain(
  "name",
  flaxStringType,
  _SemanticsAction_name,
);
const _flaxBinding1394 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsAction_toString,
);
const _flaxBinding1395 = FlaxProxyMember("index", 1, flaxIntCall);
const _flaxBinding1396 = FlaxProxyMember("name", 1, flaxStringCall);
const _flaxBinding1397 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsAction",
  [_flaxBinding1392, _flaxBinding1393],
  {"toString": _flaxBinding1394},
  constructors: {"@implementation": _flaxBinding200},
  create: _createSemanticsAction,
  matches: _isSemanticsAction,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding342,
    _flaxBinding1395,
    _flaxBinding1396,
  ]),
);
const _flaxBinding1398 = FlaxGetter.plain(
  "type",
  _flaxBinding159,
  _SemanticsActionEvent_type,
);
const _flaxBinding1399 = FlaxGetter.plain(
  "viewId",
  flaxIntType,
  _SemanticsActionEvent_viewId,
);
const _flaxBinding1400 = FlaxGetter.plain(
  "nodeId",
  flaxIntType,
  _SemanticsActionEvent_nodeId,
);
const _flaxBinding1401 = FlaxGetter.plain(
  "arguments",
  flaxNullableAnyType,
  _SemanticsActionEvent_arguments,
);
const _flaxBinding1402 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsAction",
  nullable: true,
);
const _flaxBinding1403 = <FlaxParameter>[
  FlaxParameter(
    "arguments",
    flaxNullableAnyType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("nodeId", flaxNullableIntType, required: false),
  FlaxParameter("type", _flaxBinding1402, required: false),
  FlaxParameter("viewId", flaxNullableIntType, required: false),
];
const _flaxBinding1404 = FlaxInstanceMethod.plain(
  _flaxBinding1403,
  _flaxBinding1008,
  _SemanticsActionEvent_copyWith,
);
const _flaxBinding1405 = <FlaxParameter>[
  FlaxParameter.required("type", _flaxBinding159),
  FlaxParameter.required("viewId", flaxIntType),
  FlaxParameter.required("nodeId", flaxIntType),
  FlaxParameter("arguments", flaxNullableAnyType, required: false),
];
const _flaxBinding1406 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "type",
      _flaxBinding1402,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "viewId",
      flaxNullableIntType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "nodeId",
      flaxNullableIntType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "arguments",
      flaxNullableAnyType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1008,
  id: "callback:<>(n:o:type:object?:flax.core/sdk_dart_ui#type:SemanticsAction,n:o:viewId:int?:,n:o:nodeId:int?:,n:o:arguments:any?:)->object:flax.core/sdk_dart_ui#type:SemanticsActionEvent",
);
const _flaxBinding1407 = FlaxProxyMember(
  "copyWith",
  0,
  _flaxBinding1406,
  hasSuper: true,
);
const _flaxBinding1408 = FlaxProxyMember(
  "type",
  1,
  _flaxBinding160,
  hasSuper: true,
);
const _flaxBinding1409 = FlaxProxyMember(
  "nodeId",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1410 = FlaxProxyMember(
  "arguments",
  1,
  flaxNullableAnyCall,
  hasSuper: true,
);
const _flaxBinding1411 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsActionEvent",
  [_flaxBinding1398, _flaxBinding1399, _flaxBinding1400, _flaxBinding1401],
  {
    "copyWith": _flaxBinding1404,
    "@super:copyWith": FlaxInstanceMethod.plain(
      _flaxBinding1403,
      _flaxBinding1008,
      _SemanticsActionEvent_super_copyWith,
    ),
    "@super:get:type": FlaxInstanceMethod.shared(
      _flaxBinding160,
      _SemanticsActionEvent_super_get_type,
    ),
    "@super:get:viewId": _flaxBinding1115,
    "@super:get:nodeId": FlaxInstanceMethod.shared(
      flaxIntCall,
      _SemanticsActionEvent_super_get_nodeId,
    ),
    "@super:get:arguments": FlaxInstanceMethod.shared(
      flaxNullableAnyCall,
      _SemanticsActionEvent_super_get_arguments,
    ),
  },
  constructors: {"": _flaxBinding1405, "@implementation": _flaxBinding1405},
  create: _createSemanticsActionEvent,
  matches: _isSemanticsActionEvent,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1407,
    _flaxBinding1408,
    _flaxBinding1120,
    _flaxBinding1409,
    _flaxBinding1410,
  ]),
);
const _flaxBinding1412 = FlaxGetter.plain(
  "index",
  flaxIntType,
  _SemanticsFlag_index,
);
const _flaxBinding1413 = FlaxGetter.plain(
  "name",
  flaxStringType,
  _SemanticsFlag_name,
);
const _flaxBinding1414 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SemanticsFlag_toString,
);
const _flaxBinding1415 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsFlag",
  [_flaxBinding1412, _flaxBinding1413],
  {"toString": _flaxBinding1414},
  constructors: {"@implementation": _flaxBinding200},
  create: _createSemanticsFlag,
  matches: _isSemanticsFlag,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding342,
    _flaxBinding1395,
    _flaxBinding1396,
  ]),
);
const _flaxBinding1416 = FlaxGetter.plain(
  "isChecked",
  _flaxBinding167,
  _SemanticsFlags_isChecked,
);
const _flaxBinding1417 = FlaxGetter.plain(
  "isSelected",
  _flaxBinding169,
  _SemanticsFlags_isSelected,
);
const _flaxBinding1418 = FlaxGetter.plain(
  "isEnabled",
  _flaxBinding169,
  _SemanticsFlags_isEnabled,
);
const _flaxBinding1419 = FlaxGetter.plain(
  "isToggled",
  _flaxBinding169,
  _SemanticsFlags_isToggled,
);
const _flaxBinding1420 = FlaxGetter.plain(
  "isExpanded",
  _flaxBinding169,
  _SemanticsFlags_isExpanded,
);
const _flaxBinding1421 = FlaxGetter.plain(
  "isRequired",
  _flaxBinding169,
  _SemanticsFlags_isRequired,
);
const _flaxBinding1422 = FlaxGetter.plain(
  "isFocused",
  _flaxBinding169,
  _SemanticsFlags_isFocused,
);
const _flaxBinding1423 = FlaxGetter.plain(
  "isAccessibilityFocusBlocked",
  flaxBoolType,
  _SemanticsFlags_isAccessibilityFocusBlocked,
);
const _flaxBinding1424 = FlaxGetter.plain(
  "isButton",
  flaxBoolType,
  _SemanticsFlags_isButton,
);
const _flaxBinding1425 = FlaxGetter.plain(
  "isTextField",
  flaxBoolType,
  _SemanticsFlags_isTextField,
);
const _flaxBinding1426 = FlaxGetter.plain(
  "isInMutuallyExclusiveGroup",
  flaxBoolType,
  _SemanticsFlags_isInMutuallyExclusiveGroup,
);
const _flaxBinding1427 = FlaxGetter.plain(
  "isHeader",
  flaxBoolType,
  _SemanticsFlags_isHeader,
);
const _flaxBinding1428 = FlaxGetter.plain(
  "isObscured",
  flaxBoolType,
  _SemanticsFlags_isObscured,
);
const _flaxBinding1429 = FlaxGetter.plain(
  "scopesRoute",
  flaxBoolType,
  _SemanticsFlags_scopesRoute,
);
const _flaxBinding1430 = FlaxGetter.plain(
  "namesRoute",
  flaxBoolType,
  _SemanticsFlags_namesRoute,
);
const _flaxBinding1431 = FlaxGetter.plain(
  "isHidden",
  flaxBoolType,
  _SemanticsFlags_isHidden,
);
const _flaxBinding1432 = FlaxGetter.plain(
  "isImage",
  flaxBoolType,
  _SemanticsFlags_isImage,
);
const _flaxBinding1433 = FlaxGetter.plain(
  "isLiveRegion",
  flaxBoolType,
  _SemanticsFlags_isLiveRegion,
);
const _flaxBinding1434 = FlaxGetter.plain(
  "hasImplicitScrolling",
  flaxBoolType,
  _SemanticsFlags_hasImplicitScrolling,
);
const _flaxBinding1435 = FlaxGetter.plain(
  "isMultiline",
  flaxBoolType,
  _SemanticsFlags_isMultiline,
);
const _flaxBinding1436 = FlaxGetter.plain(
  "isReadOnly",
  flaxBoolType,
  _SemanticsFlags_isReadOnly,
);
const _flaxBinding1437 = FlaxGetter.plain(
  "isLink",
  flaxBoolType,
  _SemanticsFlags_isLink,
);
const _flaxBinding1438 = FlaxGetter.plain(
  "isSlider",
  flaxBoolType,
  _SemanticsFlags_isSlider,
);
const _flaxBinding1439 = FlaxGetter.plain(
  "isKeyboardKey",
  flaxBoolType,
  _SemanticsFlags_isKeyboardKey,
);
const _flaxBinding1440 = FlaxInstanceMethod.shared(
  _flaxBinding162,
  _SemanticsFlags_merge,
);
const _flaxBinding1441 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:CheckedState",
  nullable: true,
);
const _flaxBinding1442 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Tristate",
  nullable: true,
);
const _flaxBinding1443 = <FlaxParameter>[
  FlaxParameter("hasImplicitScrolling", flaxNullableBoolType, required: false),
  FlaxParameter(
    "isAccessibilityFocusBlocked",
    flaxNullableBoolType,
    required: false,
  ),
  FlaxParameter("isButton", flaxNullableBoolType, required: false),
  FlaxParameter("isChecked", _flaxBinding1441, required: false),
  FlaxParameter("isEnabled", _flaxBinding1442, required: false),
  FlaxParameter("isExpanded", _flaxBinding1442, required: false),
  FlaxParameter("isFocused", _flaxBinding1442, required: false),
  FlaxParameter("isHeader", flaxNullableBoolType, required: false),
  FlaxParameter("isHidden", flaxNullableBoolType, required: false),
  FlaxParameter("isImage", flaxNullableBoolType, required: false),
  FlaxParameter(
    "isInMutuallyExclusiveGroup",
    flaxNullableBoolType,
    required: false,
  ),
  FlaxParameter("isKeyboardKey", flaxNullableBoolType, required: false),
  FlaxParameter("isLink", flaxNullableBoolType, required: false),
  FlaxParameter("isLiveRegion", flaxNullableBoolType, required: false),
  FlaxParameter("isMultiline", flaxNullableBoolType, required: false),
  FlaxParameter("isObscured", flaxNullableBoolType, required: false),
  FlaxParameter("isReadOnly", flaxNullableBoolType, required: false),
  FlaxParameter("isRequired", _flaxBinding1442, required: false),
  FlaxParameter("isSelected", _flaxBinding1442, required: false),
  FlaxParameter("isSlider", flaxNullableBoolType, required: false),
  FlaxParameter("isTextField", flaxNullableBoolType, required: false),
  FlaxParameter("isToggled", _flaxBinding1442, required: false),
  FlaxParameter("namesRoute", flaxNullableBoolType, required: false),
  FlaxParameter("scopesRoute", flaxNullableBoolType, required: false),
];
const _flaxBinding1444 = FlaxInstanceMethod.plain(
  _flaxBinding1443,
  _flaxBinding161,
  _SemanticsFlags_copyWith,
);
const _flaxBinding1445 = FlaxInstanceMethod.shared(
  _flaxBinding165,
  _SemanticsFlags_toStrings,
);
const _flaxBinding1446 = FlaxInstanceMethod.shared(
  _flaxBinding166,
  _SemanticsFlags_hasRepeatedFlags,
);
const _flaxBinding1447 = FlaxInstanceMethod.shared(
  _flaxBinding166,
  _SemanticsFlags_hasConflictingFlags,
);
const _flaxBinding1448 = <FlaxParameter>[
  FlaxParameter(
    "isChecked",
    _flaxBinding167,
    required: false,
    defaultValue: api.CheckedState.none,
  ),
  FlaxParameter(
    "isSelected",
    _flaxBinding169,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isEnabled",
    _flaxBinding169,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isToggled",
    _flaxBinding169,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isExpanded",
    _flaxBinding169,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isRequired",
    _flaxBinding169,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isFocused",
    _flaxBinding169,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter("isButton", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter(
    "isTextField",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isInMutuallyExclusiveGroup",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("isHeader", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter(
    "isObscured",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "scopesRoute",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "namesRoute",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("isHidden", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter("isImage", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter(
    "isLiveRegion",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "hasImplicitScrolling",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isMultiline",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isReadOnly",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("isLink", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter("isSlider", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter(
    "isKeyboardKey",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isAccessibilityFocusBlocked",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding1449 = FlaxProxyMember(
  "merge",
  0,
  _flaxBinding162,
  hasSuper: true,
);
const _flaxBinding1450 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "isChecked",
      _flaxBinding1441,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isSelected",
      _flaxBinding1442,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isEnabled",
      _flaxBinding1442,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isToggled",
      _flaxBinding1442,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isExpanded",
      _flaxBinding1442,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isRequired",
      _flaxBinding1442,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isFocused",
      _flaxBinding1442,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isButton",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isTextField",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isInMutuallyExclusiveGroup",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isHeader",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isObscured",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "scopesRoute",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "namesRoute",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isHidden",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isImage",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isLiveRegion",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "hasImplicitScrolling",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isMultiline",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isReadOnly",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isLink",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isSlider",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isKeyboardKey",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isAccessibilityFocusBlocked",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding161,
  id: "callback:<>(n:o:isChecked:enum?:flax.core/sdk_dart_ui#type:CheckedState,n:o:isSelected:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isEnabled:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isToggled:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isExpanded:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isRequired:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isFocused:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isButton:bool?:,n:o:isTextField:bool?:,n:o:isInMutuallyExclusiveGroup:bool?:,n:o:isHeader:bool?:,n:o:isObscured:bool?:,n:o:scopesRoute:bool?:,n:o:namesRoute:bool?:,n:o:isHidden:bool?:,n:o:isImage:bool?:,n:o:isLiveRegion:bool?:,n:o:hasImplicitScrolling:bool?:,n:o:isMultiline:bool?:,n:o:isReadOnly:bool?:,n:o:isLink:bool?:,n:o:isSlider:bool?:,n:o:isKeyboardKey:bool?:,n:o:isAccessibilityFocusBlocked:bool?:)->object:flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding1451 = FlaxProxyMember(
  "copyWith",
  0,
  _flaxBinding1450,
  hasSuper: true,
);
const _flaxBinding1452 = FlaxProxyMember(
  "toStrings",
  0,
  _flaxBinding165,
  hasSuper: true,
);
const _flaxBinding1453 = FlaxProxyMember(
  "hasRepeatedFlags",
  0,
  _flaxBinding166,
  hasSuper: true,
);
const _flaxBinding1454 = FlaxProxyMember(
  "hasConflictingFlags",
  0,
  _flaxBinding166,
  hasSuper: true,
);
const _flaxBinding1455 = FlaxProxyMember(
  "isChecked",
  1,
  _flaxBinding168,
  hasSuper: true,
);
const _flaxBinding1456 = FlaxProxyMember(
  "isSelected",
  1,
  _flaxBinding170,
  hasSuper: true,
);
const _flaxBinding1457 = FlaxProxyMember(
  "isEnabled",
  1,
  _flaxBinding170,
  hasSuper: true,
);
const _flaxBinding1458 = FlaxProxyMember(
  "isToggled",
  1,
  _flaxBinding170,
  hasSuper: true,
);
const _flaxBinding1459 = FlaxProxyMember(
  "isExpanded",
  1,
  _flaxBinding170,
  hasSuper: true,
);
const _flaxBinding1460 = FlaxProxyMember(
  "isRequired",
  1,
  _flaxBinding170,
  hasSuper: true,
);
const _flaxBinding1461 = FlaxProxyMember(
  "isFocused",
  1,
  _flaxBinding170,
  hasSuper: true,
);
const _flaxBinding1462 = FlaxProxyMember(
  "isAccessibilityFocusBlocked",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1463 = FlaxProxyMember(
  "isButton",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1464 = FlaxProxyMember(
  "isTextField",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1465 = FlaxProxyMember(
  "isInMutuallyExclusiveGroup",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1466 = FlaxProxyMember(
  "isHeader",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1467 = FlaxProxyMember(
  "isObscured",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1468 = FlaxProxyMember(
  "scopesRoute",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1469 = FlaxProxyMember(
  "namesRoute",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1470 = FlaxProxyMember(
  "isHidden",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1471 = FlaxProxyMember(
  "isImage",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1472 = FlaxProxyMember(
  "isLiveRegion",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1473 = FlaxProxyMember(
  "hasImplicitScrolling",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1474 = FlaxProxyMember(
  "isMultiline",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1475 = FlaxProxyMember(
  "isReadOnly",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1476 = FlaxProxyMember(
  "isLink",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1477 = FlaxProxyMember(
  "isSlider",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1478 = FlaxProxyMember(
  "isKeyboardKey",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1479 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsFlags",
  [
    _flaxBinding1416,
    _flaxBinding1417,
    _flaxBinding1418,
    _flaxBinding1419,
    _flaxBinding1420,
    _flaxBinding1421,
    _flaxBinding1422,
    _flaxBinding1423,
    _flaxBinding1424,
    _flaxBinding1425,
    _flaxBinding1426,
    _flaxBinding1427,
    _flaxBinding1428,
    _flaxBinding1429,
    _flaxBinding1430,
    _flaxBinding1431,
    _flaxBinding1432,
    _flaxBinding1433,
    _flaxBinding1434,
    _flaxBinding1435,
    _flaxBinding1436,
    _flaxBinding1437,
    _flaxBinding1438,
    _flaxBinding1439,
  ],
  {
    "merge": _flaxBinding1440,
    "copyWith": _flaxBinding1444,
    "toStrings": _flaxBinding1445,
    "hasRepeatedFlags": _flaxBinding1446,
    "hasConflictingFlags": _flaxBinding1447,
    "@super:merge": FlaxInstanceMethod.shared(
      _flaxBinding162,
      _SemanticsFlags_super_merge,
    ),
    "@super:copyWith": FlaxInstanceMethod.plain(
      _flaxBinding1443,
      _flaxBinding161,
      _SemanticsFlags_super_copyWith,
    ),
    "@super:toStrings": FlaxInstanceMethod.shared(
      _flaxBinding165,
      _SemanticsFlags_super_toStrings,
    ),
    "@super:hasRepeatedFlags": FlaxInstanceMethod.shared(
      _flaxBinding166,
      _SemanticsFlags_super_hasRepeatedFlags,
    ),
    "@super:hasConflictingFlags": FlaxInstanceMethod.shared(
      _flaxBinding166,
      _SemanticsFlags_super_hasConflictingFlags,
    ),
    "@super:get:isChecked": FlaxInstanceMethod.shared(
      _flaxBinding168,
      _SemanticsFlags_super_get_isChecked,
    ),
    "@super:get:isSelected": FlaxInstanceMethod.shared(
      _flaxBinding170,
      _SemanticsFlags_super_get_isSelected,
    ),
    "@super:get:isEnabled": FlaxInstanceMethod.shared(
      _flaxBinding170,
      _SemanticsFlags_super_get_isEnabled,
    ),
    "@super:get:isToggled": FlaxInstanceMethod.shared(
      _flaxBinding170,
      _SemanticsFlags_super_get_isToggled,
    ),
    "@super:get:isExpanded": FlaxInstanceMethod.shared(
      _flaxBinding170,
      _SemanticsFlags_super_get_isExpanded,
    ),
    "@super:get:isRequired": FlaxInstanceMethod.shared(
      _flaxBinding170,
      _SemanticsFlags_super_get_isRequired,
    ),
    "@super:get:isFocused": FlaxInstanceMethod.shared(
      _flaxBinding170,
      _SemanticsFlags_super_get_isFocused,
    ),
    "@super:get:isAccessibilityFocusBlocked": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isAccessibilityFocusBlocked,
    ),
    "@super:get:isButton": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isButton,
    ),
    "@super:get:isTextField": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isTextField,
    ),
    "@super:get:isInMutuallyExclusiveGroup": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isInMutuallyExclusiveGroup,
    ),
    "@super:get:isHeader": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isHeader,
    ),
    "@super:get:isObscured": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isObscured,
    ),
    "@super:get:scopesRoute": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_scopesRoute,
    ),
    "@super:get:namesRoute": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_namesRoute,
    ),
    "@super:get:isHidden": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isHidden,
    ),
    "@super:get:isImage": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isImage,
    ),
    "@super:get:isLiveRegion": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isLiveRegion,
    ),
    "@super:get:hasImplicitScrolling": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_hasImplicitScrolling,
    ),
    "@super:get:isMultiline": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isMultiline,
    ),
    "@super:get:isReadOnly": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isReadOnly,
    ),
    "@super:get:isLink": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isLink,
    ),
    "@super:get:isSlider": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isSlider,
    ),
    "@super:get:isKeyboardKey": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _SemanticsFlags_super_get_isKeyboardKey,
    ),
  },
  constructors: {"": _flaxBinding1448, "@implementation": _flaxBinding1448},
  create: _createSemanticsFlags,
  matches: _isSemanticsFlags,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1449,
    _flaxBinding1451,
    _flaxBinding1452,
    _flaxBinding1453,
    _flaxBinding1454,
    _flaxBinding1455,
    _flaxBinding1456,
    _flaxBinding1457,
    _flaxBinding1458,
    _flaxBinding1459,
    _flaxBinding1460,
    _flaxBinding1461,
    _flaxBinding1462,
    _flaxBinding1463,
    _flaxBinding1464,
    _flaxBinding1465,
    _flaxBinding1466,
    _flaxBinding1467,
    _flaxBinding1468,
    _flaxBinding1469,
    _flaxBinding1470,
    _flaxBinding1471,
    _flaxBinding1472,
    _flaxBinding1473,
    _flaxBinding1474,
    _flaxBinding1475,
    _flaxBinding1476,
    _flaxBinding1477,
    _flaxBinding1478,
  ]),
);
const _flaxBinding1480 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SemanticsUpdate_dispose,
);
const _flaxBinding1481 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsUpdate",
  [],
  {"dispose": _flaxBinding1480},
  constructors: {"@implementation": _flaxBinding200},
  create: _createSemanticsUpdate,
  matches: _isSemanticsUpdate,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding201]),
);
const _flaxBinding1482 = FlaxTypeRef("Int32List");
const _flaxBinding1483 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection16Create,
    _collection16Matches,
  ),
  iterable: _flaxBinding163,
);
const _flaxBinding1484 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding87,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
    _collection33Create,
    _collection33Matches,
    restore: _collection33Restore,
  ),
);
const _flaxBinding1485 = FlaxTypeRef(
  "list",
  item: _flaxBinding87,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
    _collection32Create,
    _collection32Matches,
  ),
  iterable: _flaxBinding1484,
);
const _flaxBinding1486 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
);
const _flaxBinding1487 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsInputType",
);
const _flaxBinding1488 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsRole",
);
const _flaxBinding1489 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsValidationResult",
);
const _flaxBinding1490 = <FlaxParameter>[
  FlaxParameter.required("actions", flaxIntType),
  FlaxParameter.required("additionalActions", _flaxBinding1482),
  FlaxParameter.required("childrenInHitTestOrder", _flaxBinding1482),
  FlaxParameter.required("childrenInTraversalOrder", _flaxBinding1482),
  FlaxParameter.required("controlsNodes", _flaxBinding1483),
  FlaxParameter.required("currentValueLength", flaxIntType),
  FlaxParameter.required("decreasedValue", flaxStringType),
  FlaxParameter.required("decreasedValueAttributes", _flaxBinding1485),
  FlaxParameter.required("flags", _flaxBinding161),
  FlaxParameter("headingLevel", flaxIntType, required: false, defaultValue: 0),
  FlaxParameter.required("hint", flaxStringType),
  FlaxParameter.required("hintAttributes", _flaxBinding1485),
  FlaxParameter(
    "hitTestBehavior",
    _flaxBinding1486,
    required: false,
    defaultValue: api.SemanticsHitTestBehavior.defer,
  ),
  FlaxParameter.required("hitTestTransform", _flaxBinding7),
  FlaxParameter.required("id", flaxIntType),
  FlaxParameter.required("identifier", flaxStringType),
  FlaxParameter.required("increasedValue", flaxStringType),
  FlaxParameter.required("increasedValueAttributes", _flaxBinding1485),
  FlaxParameter.required("inputType", _flaxBinding1487),
  FlaxParameter.required("label", flaxStringType),
  FlaxParameter.required("labelAttributes", _flaxBinding1485),
  FlaxParameter("linkUrl", flaxStringType, required: false, defaultValue: ''),
  FlaxParameter.required("locale", _flaxBinding785),
  FlaxParameter.required("maxValue", flaxStringType),
  FlaxParameter.required("maxValueLength", flaxIntType),
  FlaxParameter.required("minValue", flaxStringType),
  FlaxParameter.required("platformViewId", flaxIntType),
  FlaxParameter.required("rect", flaxRectType),
  FlaxParameter(
    "role",
    _flaxBinding1488,
    required: false,
    defaultValue: api.SemanticsRole.none,
  ),
  FlaxParameter.required("scrollChildren", flaxIntType),
  FlaxParameter.required("scrollExtentMax", flaxDoubleType),
  FlaxParameter.required("scrollExtentMin", flaxDoubleType),
  FlaxParameter.required("scrollIndex", flaxIntType),
  FlaxParameter.required("scrollPosition", flaxDoubleType),
  FlaxParameter.required("textDirection", _flaxBinding780),
  FlaxParameter.required("textSelectionBase", flaxIntType),
  FlaxParameter.required("textSelectionExtent", flaxIntType),
  FlaxParameter.required("tooltip", flaxStringType),
  FlaxParameter.required("transform", _flaxBinding7),
  FlaxParameter.required("traversalParent", flaxIntType),
  FlaxParameter(
    "validationResult",
    _flaxBinding1489,
    required: false,
    defaultValue: api.SemanticsValidationResult.none,
  ),
  FlaxParameter.required("value", flaxStringType),
  FlaxParameter.required("valueAttributes", _flaxBinding1485),
];
const _flaxBinding1491 = FlaxInstanceMethod.plain(
  _flaxBinding1490,
  flaxVoidType,
  _SemanticsUpdateBuilder_updateNode,
);
const _flaxBinding1492 = <FlaxParameter>[
  FlaxParameter("hint", flaxNullableStringType, required: false),
  FlaxParameter.required("id", flaxIntType),
  FlaxParameter("label", flaxNullableStringType, required: false),
  FlaxParameter("overrideId", flaxIntType, required: false, defaultValue: -1),
];
const _flaxBinding1493 = FlaxInstanceMethod.plain(
  _flaxBinding1492,
  flaxVoidType,
  _SemanticsUpdateBuilder_updateCustomAction,
);
const _flaxBinding1494 = FlaxInstanceMethod.shared(
  _flaxBinding172,
  _SemanticsUpdateBuilder_build,
);
const _flaxBinding1495 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("id", flaxIntType, positional: false),
    FlaxCallbackParameter.plain("flags", _flaxBinding161, positional: false),
    FlaxCallbackParameter.plain("actions", flaxIntType, positional: false),
    FlaxCallbackParameter.plain(
      "maxValueLength",
      flaxIntType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "currentValueLength",
      flaxIntType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "textSelectionBase",
      flaxIntType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "textSelectionExtent",
      flaxIntType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "platformViewId",
      flaxIntType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "scrollChildren",
      flaxIntType,
      positional: false,
    ),
    FlaxCallbackParameter.plain("scrollIndex", flaxIntType, positional: false),
    FlaxCallbackParameter.plain(
      "traversalParent",
      flaxIntType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "scrollPosition",
      flaxDoubleType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "scrollExtentMax",
      flaxDoubleType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "scrollExtentMin",
      flaxDoubleType,
      positional: false,
    ),
    FlaxCallbackParameter.plain("rect", flaxRectType, positional: false),
    FlaxCallbackParameter.plain(
      "identifier",
      flaxStringType,
      positional: false,
    ),
    FlaxCallbackParameter.plain("label", flaxStringType, positional: false),
    FlaxCallbackParameter.plain(
      "labelAttributes",
      _flaxBinding1485,
      positional: false,
    ),
    FlaxCallbackParameter.plain("value", flaxStringType, positional: false),
    FlaxCallbackParameter.plain(
      "valueAttributes",
      _flaxBinding1485,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "increasedValue",
      flaxStringType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "increasedValueAttributes",
      _flaxBinding1485,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "decreasedValue",
      flaxStringType,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "decreasedValueAttributes",
      _flaxBinding1485,
      positional: false,
    ),
    FlaxCallbackParameter.plain("hint", flaxStringType, positional: false),
    FlaxCallbackParameter.plain(
      "hintAttributes",
      _flaxBinding1485,
      positional: false,
    ),
    FlaxCallbackParameter.plain("tooltip", flaxStringType, positional: false),
    FlaxCallbackParameter.plain(
      "textDirection",
      _flaxBinding780,
      positional: false,
    ),
    FlaxCallbackParameter.plain("transform", _flaxBinding7, positional: false),
    FlaxCallbackParameter.plain(
      "hitTestTransform",
      _flaxBinding7,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "childrenInTraversalOrder",
      _flaxBinding1482,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "childrenInHitTestOrder",
      _flaxBinding1482,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "additionalActions",
      _flaxBinding1482,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "headingLevel",
      flaxIntType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "linkUrl",
      flaxStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "role",
      _flaxBinding1488,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "controlsNodes",
      _flaxBinding1483,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "validationResult",
      _flaxBinding1489,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "hitTestBehavior",
      _flaxBinding1486,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "inputType",
      _flaxBinding1487,
      positional: false,
    ),
    FlaxCallbackParameter.plain("locale", _flaxBinding785, positional: false),
    FlaxCallbackParameter.plain("minValue", flaxStringType, positional: false),
    FlaxCallbackParameter.plain("maxValue", flaxStringType, positional: false),
  ],
  flaxVoidType,
  id: "callback:<>(n:r:id:int:,n:r:flags:object:flax.core/sdk_dart_ui#type:SemanticsFlags,n:r:actions:int:,n:r:maxValueLength:int:,n:r:currentValueLength:int:,n:r:textSelectionBase:int:,n:r:textSelectionExtent:int:,n:r:platformViewId:int:,n:r:scrollChildren:int:,n:r:scrollIndex:int:,n:r:traversalParent:int:,n:r:scrollPosition:double:,n:r:scrollExtentMax:double:,n:r:scrollExtentMin:double:,n:r:rect:object:flax.core/sdk_dart_ui#type:Rect,n:r:identifier:String:,n:r:label:String:,n:r:labelAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:value:String:,n:r:valueAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:increasedValue:String:,n:r:increasedValueAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:decreasedValue:String:,n:r:decreasedValueAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:hint:String:,n:r:hintAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:tooltip:String:,n:r:textDirection:enum?:flax.core/flutter#type:TextDirection,n:r:transform:Float64List:,n:r:hitTestTransform:Float64List:,n:r:childrenInTraversalOrder:Int32List:,n:r:childrenInHitTestOrder:Int32List:,n:r:additionalActions:Int32List:,n:o:headingLevel:int:,n:o:linkUrl:String:,n:o:role:enum:flax.core/sdk_dart_ui#type:SemanticsRole,n:r:controlsNodes:list?:[String:],n:o:validationResult:enum:flax.core/sdk_dart_ui#type:SemanticsValidationResult,n:o:hitTestBehavior:enum:flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior,n:r:inputType:enum:flax.core/sdk_dart_ui#type:SemanticsInputType,n:r:locale:object?:flax.core/sdk_dart_ui#type:Locale,n:r:minValue:String:,n:r:maxValue:String:)->void:",
);
const _flaxBinding1496 = FlaxProxyMember("updateNode", 0, _flaxBinding1495);
const _flaxBinding1497 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("id", flaxIntType, positional: false),
    FlaxCallbackParameter.plain(
      "label",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "hint",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "overrideId",
      flaxIntType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(n:r:id:int:,n:o:label:String?:,n:o:hint:String?:,n:o:overrideId:int:)->void:",
);
const _flaxBinding1498 = FlaxProxyMember(
  "updateCustomAction",
  0,
  _flaxBinding1497,
);
const _flaxBinding1499 = FlaxProxyMember("build", 0, _flaxBinding172);
const _flaxBinding1500 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsUpdateBuilder",
  [],
  {
    "updateNode": _flaxBinding1491,
    "updateCustomAction": _flaxBinding1493,
    "build": _flaxBinding1494,
  },
  constructors: {"": _flaxBinding200, "@implementation": _flaxBinding200},
  create: _createSemanticsUpdateBuilder,
  matches: _isSemanticsUpdateBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1496,
    _flaxBinding1498,
    _flaxBinding1499,
  ]),
);
const _flaxBinding1501 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer",
  [],
  {},
  constructors: {},
  create: _createShaderMaskEngineLayer,
  matches: _isShaderMaskEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding1502 = FlaxGetter.plain(
  "color",
  flaxColorType,
  _Shadow_color,
);
const _flaxBinding1503 = FlaxGetter.plain(
  "offset",
  flaxOffsetType,
  _Shadow_offset,
);
const _flaxBinding1504 = FlaxGetter.plain(
  "blurRadius",
  flaxDoubleType,
  _Shadow_blurRadius,
);
const _flaxBinding1505 = FlaxGetter.plain(
  "blurSigma",
  flaxDoubleType,
  _Shadow_blurSigma,
);
const _flaxBinding1506 = FlaxInstanceMethod.shared(
  _flaxBinding173,
  _Shadow_toPaint,
);
const _flaxBinding1507 = FlaxInstanceMethod.shared(
  _flaxBinding175,
  _Shadow_scale,
);
const _flaxBinding1508 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Shadow_toString,
);
const _flaxBinding1509 = <FlaxParameter>[
  FlaxParameter("color", flaxColorType, required: false, omitWhenAbsent: true),
  FlaxParameter(
    "offset",
    flaxOffsetType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "blurRadius",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
];
const _flaxBinding1510 = FlaxProxyMember(
  "toPaint",
  0,
  _flaxBinding173,
  hasSuper: true,
);
const _flaxBinding1511 = FlaxProxyMember(
  "scale",
  0,
  _flaxBinding175,
  hasSuper: true,
);
const _flaxBinding1512 = FlaxProxyMember(
  "color",
  1,
  _flaxBinding176,
  hasSuper: true,
);
const _flaxBinding1513 = FlaxProxyMember(
  "blurRadius",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1514 = FlaxProxyMember(
  "blurSigma",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1515 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Shadow",
  [_flaxBinding1502, _flaxBinding1503, _flaxBinding1504, _flaxBinding1505],
  {
    "toPaint": _flaxBinding1506,
    "scale": _flaxBinding1507,
    "toString": _flaxBinding1508,
    "@super:toPaint": FlaxInstanceMethod.shared(
      _flaxBinding173,
      _Shadow_super_toPaint,
    ),
    "@super:scale": FlaxInstanceMethod.shared(
      _flaxBinding175,
      _Shadow_super_scale,
    ),
    "@super:toString": _flaxBinding353,
    "@super:get:color": FlaxInstanceMethod.shared(
      _flaxBinding176,
      _Shadow_super_get_color,
    ),
    "@super:get:offset": _flaxBinding513,
    "@super:get:blurRadius": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _Shadow_super_get_blurRadius,
    ),
    "@super:get:blurSigma": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _Shadow_super_get_blurSigma,
    ),
  },
  constructors: {"": _flaxBinding1509, "@implementation": _flaxBinding1509},
  create: _createShadow,
  matches: _isShadow,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1510,
    _flaxBinding1511,
    _flaxBinding355,
    _flaxBinding1512,
    _flaxBinding516,
    _flaxBinding1513,
    _flaxBinding1514,
  ]),
);
const _flaxBinding1516 = FlaxGetter.plain(
  "onMetricsChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_onMetricsChanged,
);
const _flaxBinding1517 = FlaxGetter.plain(
  "locale",
  _flaxBinding89,
  _SingletonFlutterWindow_locale,
);
const _flaxBinding1518 = FlaxGetter.plain(
  "locales",
  _flaxBinding987,
  _SingletonFlutterWindow_locales,
);
const _flaxBinding1519 = FlaxGetter.plain(
  "onLocaleChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_onLocaleChanged,
);
const _flaxBinding1520 = FlaxGetter.plain(
  "initialLifecycleState",
  flaxStringType,
  _SingletonFlutterWindow_initialLifecycleState,
);
const _flaxBinding1521 = FlaxGetter.plain(
  "textScaleFactor",
  flaxDoubleType,
  _SingletonFlutterWindow_textScaleFactor,
);
const _flaxBinding1522 = FlaxGetter.plain(
  "nativeSpellCheckServiceDefined",
  flaxBoolType,
  _SingletonFlutterWindow_nativeSpellCheckServiceDefined,
);
const _flaxBinding1523 = FlaxGetter.plain(
  "supportsShowingSystemContextMenu",
  flaxBoolType,
  _SingletonFlutterWindow_supportsShowingSystemContextMenu,
);
const _flaxBinding1524 = FlaxGetter.plain(
  "brieflyShowPassword",
  flaxBoolType,
  _SingletonFlutterWindow_brieflyShowPassword,
);
const _flaxBinding1525 = FlaxGetter.plain(
  "alwaysUse24HourFormat",
  flaxBoolType,
  _SingletonFlutterWindow_alwaysUse24HourFormat,
);
const _flaxBinding1526 = FlaxGetter.plain(
  "onTextScaleFactorChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_onTextScaleFactorChanged,
);
const _flaxBinding1527 = FlaxGetter.plain(
  "platformBrightness",
  _flaxBinding1001,
  _SingletonFlutterWindow_platformBrightness,
);
const _flaxBinding1528 = FlaxGetter.plain(
  "onPlatformBrightnessChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_onPlatformBrightnessChanged,
);
const _flaxBinding1529 = FlaxGetter.plain(
  "systemFontFamily",
  flaxNullableStringType,
  _SingletonFlutterWindow_systemFontFamily,
);
const _flaxBinding1530 = FlaxGetter.plain(
  "onSystemFontFamilyChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_onSystemFontFamilyChanged,
);
const _flaxBinding1531 = FlaxGetter.plain(
  "onBeginFrame",
  _flaxBinding961,
  _SingletonFlutterWindow_onBeginFrame,
);
const _flaxBinding1532 = FlaxGetter.plain(
  "onDrawFrame",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_onDrawFrame,
);
const _flaxBinding1533 = FlaxGetter.plain(
  "onReportTimings",
  _flaxBinding976,
  _SingletonFlutterWindow_onReportTimings,
);
const _flaxBinding1534 = FlaxGetter.plain(
  "onPointerDataPacket",
  _flaxBinding966,
  _SingletonFlutterWindow_onPointerDataPacket,
);
const _flaxBinding1535 = FlaxGetter.plain(
  "onKeyData",
  _flaxBinding970,
  _SingletonFlutterWindow_onKeyData,
);
const _flaxBinding1536 = FlaxGetter.plain(
  "defaultRouteName",
  flaxStringType,
  _SingletonFlutterWindow_defaultRouteName,
);
const _flaxBinding1537 = FlaxGetter.plain(
  "semanticsEnabled",
  flaxBoolType,
  _SingletonFlutterWindow_semanticsEnabled,
);
const _flaxBinding1538 = FlaxGetter.plain(
  "onSemanticsEnabledChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_onSemanticsEnabledChanged,
);
const _flaxBinding1539 = FlaxGetter.plain(
  "frameData",
  _flaxBinding1017,
  _SingletonFlutterWindow_frameData,
);
const _flaxBinding1540 = FlaxGetter.plain(
  "onFrameDataChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_onFrameDataChanged,
);
const _flaxBinding1541 = FlaxGetter.plain(
  "accessibilityFeatures",
  _flaxBinding982,
  _SingletonFlutterWindow_accessibilityFeatures,
);
const _flaxBinding1542 = FlaxGetter.plain(
  "onAccessibilityFeaturesChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_onAccessibilityFeaturesChanged,
);
const _flaxBinding1543 = FlaxGetter.plain(
  "onPlatformMessage",
  _flaxBinding980,
  _SingletonFlutterWindow_onPlatformMessage,
);
const _flaxBinding1544 = FlaxSetter(
  "onMetricsChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_set_onMetricsChanged,
);
const _flaxBinding1545 = FlaxSetter(
  "onLocaleChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_set_onLocaleChanged,
);
const _flaxBinding1546 = FlaxSetter(
  "onTextScaleFactorChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_set_onTextScaleFactorChanged,
);
const _flaxBinding1547 = FlaxSetter(
  "onPlatformBrightnessChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_set_onPlatformBrightnessChanged,
);
const _flaxBinding1548 = FlaxSetter(
  "onSystemFontFamilyChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_set_onSystemFontFamilyChanged,
);
const _flaxBinding1549 = FlaxSetter(
  "onBeginFrame",
  _flaxBinding961,
  _SingletonFlutterWindow_set_onBeginFrame,
);
const _flaxBinding1550 = FlaxSetter(
  "onDrawFrame",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_set_onDrawFrame,
);
const _flaxBinding1551 = FlaxSetter(
  "onReportTimings",
  _flaxBinding976,
  _SingletonFlutterWindow_set_onReportTimings,
);
const _flaxBinding1552 = FlaxSetter(
  "onPointerDataPacket",
  _flaxBinding966,
  _SingletonFlutterWindow_set_onPointerDataPacket,
);
const _flaxBinding1553 = FlaxSetter(
  "onKeyData",
  _flaxBinding970,
  _SingletonFlutterWindow_set_onKeyData,
);
const _flaxBinding1554 = FlaxSetter(
  "onSemanticsEnabledChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_set_onSemanticsEnabledChanged,
);
const _flaxBinding1555 = FlaxSetter(
  "onFrameDataChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_set_onFrameDataChanged,
);
const _flaxBinding1556 = FlaxSetter(
  "onAccessibilityFeaturesChanged",
  flaxVoidNullableCallbackType,
  _SingletonFlutterWindow_set_onAccessibilityFeaturesChanged,
);
const _flaxBinding1557 = FlaxSetter(
  "onPlatformMessage",
  _flaxBinding980,
  _SingletonFlutterWindow_set_onPlatformMessage,
);
const _flaxBinding1558 = FlaxInstanceMethod.plain(
  _flaxBinding1070,
  _flaxBinding785,
  _SingletonFlutterWindow_computePlatformResolvedLocale,
);
const _flaxBinding1559 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _SingletonFlutterWindow_scheduleFrame,
);
const _flaxBinding1560 = FlaxInstanceMethod.plain(
  _flaxBinding1049,
  flaxVoidType,
  _SingletonFlutterWindow_sendPlatformMessage,
);
const _flaxBinding1561 = FlaxInstanceMethod.shared(
  _flaxBinding59,
  _SingletonFlutterWindow_setIsolateDebugName,
);
const _flaxBinding1562 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SingletonFlutterWindow",
  [
    _flaxBinding1516,
    _flaxBinding1517,
    _flaxBinding1518,
    _flaxBinding1519,
    _flaxBinding1520,
    _flaxBinding1521,
    _flaxBinding1522,
    _flaxBinding1523,
    _flaxBinding1524,
    _flaxBinding1525,
    _flaxBinding1526,
    _flaxBinding1527,
    _flaxBinding1528,
    _flaxBinding1529,
    _flaxBinding1530,
    _flaxBinding1531,
    _flaxBinding1532,
    _flaxBinding1533,
    _flaxBinding1534,
    _flaxBinding1535,
    _flaxBinding1536,
    _flaxBinding1537,
    _flaxBinding1538,
    _flaxBinding1539,
    _flaxBinding1540,
    _flaxBinding1541,
    _flaxBinding1542,
    _flaxBinding1543,
  ],
  {
    "computePlatformResolvedLocale": _flaxBinding1558,
    "scheduleFrame": _flaxBinding1559,
    "sendPlatformMessage": _flaxBinding1560,
    "setIsolateDebugName": _flaxBinding1561,
  },
  constructors: {},
  create: _createSingletonFlutterWindow,
  matches: _isSingletonFlutterWindow,
  setters: [
    _flaxBinding1544,
    _flaxBinding1545,
    _flaxBinding1546,
    _flaxBinding1547,
    _flaxBinding1548,
    _flaxBinding1549,
    _flaxBinding1550,
    _flaxBinding1551,
    _flaxBinding1552,
    _flaxBinding1553,
    _flaxBinding1554,
    _flaxBinding1555,
    _flaxBinding1556,
    _flaxBinding1557,
  ],
  supertypes: ["flax.core/sdk_dart_ui#type:FlutterView", "dart:core::Object"],
  parent: _flaxBinding396,
);
const _flaxBinding1563 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SpellOutStringAttribute_toString,
);
const _flaxBinding1564 = <FlaxParameter>[
  FlaxParameter.required("range", _flaxBinding86),
];
const _flaxBinding1565 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SpellOutStringAttribute",
  [],
  {
    "toString": _flaxBinding1563,
    "@super:copy": _flaxBinding639,
    "@super:toString": _flaxBinding353,
    "@super:get:range": _flaxBinding640,
  },
  constructors: {"": _flaxBinding1564, "@implementation": _flaxBinding1564},
  create: _createSpellOutStringAttribute,
  matches: _isSpellOutStringAttribute,
  setters: [],
  supertypes: [
    "flax.core/sdk_dart_ui#type:StringAttribute",
    "dart:core::Object",
  ],
  parent: _flaxBinding636,
  proxy: FlaxProxyBinding([_flaxBinding642, _flaxBinding355, _flaxBinding644]),
);
const _flaxBinding1566 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TextLeadingDistribution",
  nullable: true,
);
const _flaxBinding1567 = <FlaxParameter>[
  FlaxParameter("fontFamily", flaxNullableStringType, required: false),
  FlaxParameter("fontFamilyFallback", _flaxBinding1483, required: false),
  FlaxParameter("fontSize", flaxNullableDoubleType, required: false),
  FlaxParameter("height", flaxNullableDoubleType, required: false),
  FlaxParameter("leadingDistribution", _flaxBinding1566, required: false),
  FlaxParameter("leading", flaxNullableDoubleType, required: false),
  FlaxParameter("fontWeight", _flaxBinding782, required: false),
  FlaxParameter("fontStyle", _flaxBinding783, required: false),
  FlaxParameter("forceStrutHeight", flaxNullableBoolType, required: false),
];
const _flaxBinding1568 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:StrutStyle",
  [],
  {},
  constructors: {"": _flaxBinding1567},
  create: _createStrutStyle,
  matches: _isStrutStyle,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1569 = FlaxGetter.plain(
  "name",
  flaxStringType,
  _SystemColor_name,
);
const _flaxBinding1570 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
  nullable: true,
);
const _flaxBinding1571 = FlaxGetter.plain(
  "value",
  _flaxBinding1570,
  _SystemColor_value,
);
const _flaxBinding1572 = FlaxGetter.plain(
  "isSupported",
  flaxBoolType,
  _SystemColor_isSupported,
);
const _flaxBinding1573 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter("value", _flaxBinding1570, required: false),
];
const _flaxBinding1574 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SystemColor",
  [_flaxBinding1569, _flaxBinding1571, _flaxBinding1572],
  {},
  constructors: {"": _flaxBinding1573},
  create: _createSystemColor,
  matches: _isSystemColor,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1575 = FlaxGetter.plain(
  "brightness",
  _flaxBinding1001,
  _SystemColorPalette_brightness,
);
const _flaxBinding1576 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SystemColor",
);
const _flaxBinding1577 = FlaxGetter.plain(
  "accentColor",
  _flaxBinding1576,
  _SystemColorPalette_accentColor,
);
const _flaxBinding1578 = FlaxGetter.plain(
  "accentColorText",
  _flaxBinding1576,
  _SystemColorPalette_accentColorText,
);
const _flaxBinding1579 = FlaxGetter.plain(
  "activeText",
  _flaxBinding1576,
  _SystemColorPalette_activeText,
);
const _flaxBinding1580 = FlaxGetter.plain(
  "buttonBorder",
  _flaxBinding1576,
  _SystemColorPalette_buttonBorder,
);
const _flaxBinding1581 = FlaxGetter.plain(
  "buttonFace",
  _flaxBinding1576,
  _SystemColorPalette_buttonFace,
);
const _flaxBinding1582 = FlaxGetter.plain(
  "buttonText",
  _flaxBinding1576,
  _SystemColorPalette_buttonText,
);
const _flaxBinding1583 = FlaxGetter.plain(
  "canvas",
  _flaxBinding1576,
  _SystemColorPalette_canvas,
);
const _flaxBinding1584 = FlaxGetter.plain(
  "canvasText",
  _flaxBinding1576,
  _SystemColorPalette_canvasText,
);
const _flaxBinding1585 = FlaxGetter.plain(
  "field",
  _flaxBinding1576,
  _SystemColorPalette_field,
);
const _flaxBinding1586 = FlaxGetter.plain(
  "fieldText",
  _flaxBinding1576,
  _SystemColorPalette_fieldText,
);
const _flaxBinding1587 = FlaxGetter.plain(
  "grayText",
  _flaxBinding1576,
  _SystemColorPalette_grayText,
);
const _flaxBinding1588 = FlaxGetter.plain(
  "highlight",
  _flaxBinding1576,
  _SystemColorPalette_highlight,
);
const _flaxBinding1589 = FlaxGetter.plain(
  "highlightText",
  _flaxBinding1576,
  _SystemColorPalette_highlightText,
);
const _flaxBinding1590 = FlaxGetter.plain(
  "linkText",
  _flaxBinding1576,
  _SystemColorPalette_linkText,
);
const _flaxBinding1591 = FlaxGetter.plain(
  "mark",
  _flaxBinding1576,
  _SystemColorPalette_mark,
);
const _flaxBinding1592 = FlaxGetter.plain(
  "markText",
  _flaxBinding1576,
  _SystemColorPalette_markText,
);
const _flaxBinding1593 = FlaxGetter.plain(
  "selectedItem",
  _flaxBinding1576,
  _SystemColorPalette_selectedItem,
);
const _flaxBinding1594 = FlaxGetter.plain(
  "selectedItemText",
  _flaxBinding1576,
  _SystemColorPalette_selectedItemText,
);
const _flaxBinding1595 = FlaxGetter.plain(
  "visitedText",
  _flaxBinding1576,
  _SystemColorPalette_visitedText,
);
const _flaxBinding1596 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SystemColorPalette",
  [
    _flaxBinding1575,
    _flaxBinding1577,
    _flaxBinding1578,
    _flaxBinding1579,
    _flaxBinding1580,
    _flaxBinding1581,
    _flaxBinding1582,
    _flaxBinding1583,
    _flaxBinding1584,
    _flaxBinding1585,
    _flaxBinding1586,
    _flaxBinding1587,
    _flaxBinding1588,
    _flaxBinding1589,
    _flaxBinding1590,
    _flaxBinding1591,
    _flaxBinding1592,
    _flaxBinding1593,
    _flaxBinding1594,
    _flaxBinding1595,
  ],
  {},
  constructors: {},
  create: _createSystemColorPalette,
  matches: _isSystemColorPalette,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1597 = FlaxGetter.plain(
  "position",
  flaxOffsetType,
  _Tangent_position,
);
const _flaxBinding1598 = FlaxGetter.plain(
  "vector",
  flaxOffsetType,
  _Tangent_vector,
);
const _flaxBinding1599 = FlaxGetter.plain(
  "angle",
  flaxDoubleType,
  _Tangent_angle,
);
const _flaxBinding1600 = <FlaxParameter>[
  FlaxParameter.required("position", flaxOffsetType),
  FlaxParameter.required("vector", flaxOffsetType),
];
const _flaxBinding1601 = <FlaxParameter>[
  FlaxParameter.required("position", flaxOffsetType),
  FlaxParameter.required("angle", flaxDoubleType),
];
const _flaxBinding1602 = FlaxProxyMember(
  "position",
  1,
  _flaxBinding81,
  hasSuper: true,
);
const _flaxBinding1603 = FlaxProxyMember(
  "vector",
  1,
  _flaxBinding81,
  hasSuper: true,
);
const _flaxBinding1604 = FlaxProxyMember(
  "angle",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1605 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Tangent",
  [_flaxBinding1597, _flaxBinding1598, _flaxBinding1599],
  {
    "@super:get:position": FlaxInstanceMethod.shared(
      _flaxBinding81,
      _Tangent_super_get_position,
    ),
    "@super:get:vector": FlaxInstanceMethod.shared(
      _flaxBinding81,
      _Tangent_super_get_vector,
    ),
    "@super:get:angle": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _Tangent_super_get_angle,
    ),
  },
  constructors: {
    "": _flaxBinding1600,
    "fromAngle": _flaxBinding1601,
    "@implementation": _flaxBinding1600,
  },
  create: _createTangent,
  matches: _isTangent,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1602,
    _flaxBinding1603,
    _flaxBinding1604,
  ]),
);
const _flaxBinding1606 = FlaxGetter.plain(
  "width",
  flaxNullableIntType,
  _TargetImageSize_width,
);
const _flaxBinding1607 = FlaxGetter.plain(
  "height",
  flaxNullableIntType,
  _TargetImageSize_height,
);
const _flaxBinding1608 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TargetImageSize_toString,
);
const _flaxBinding1609 = <FlaxParameter>[
  FlaxParameter("width", flaxNullableIntType, required: false),
  FlaxParameter("height", flaxNullableIntType, required: false),
];
const _flaxBinding1610 = FlaxProxyMember(
  "width",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding1611 = FlaxProxyMember(
  "height",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding1612 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TargetImageSize",
  [_flaxBinding1606, _flaxBinding1607],
  {
    "toString": _flaxBinding1608,
    "@super:toString": _flaxBinding353,
    "@super:get:width": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _TargetImageSize_super_get_width,
    ),
    "@super:get:height": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _TargetImageSize_super_get_height,
    ),
  },
  constructors: {"": _flaxBinding1609, "@implementation": _flaxBinding1609},
  create: _createTargetImageSize,
  matches: _isTargetImageSize,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding355,
    _flaxBinding1610,
    _flaxBinding1611,
  ]),
);
const _flaxBinding1613 = FlaxGetter.plain(
  "left",
  flaxDoubleType,
  _TextBox_left,
);
const _flaxBinding1614 = FlaxGetter.plain("top", flaxDoubleType, _TextBox_top);
const _flaxBinding1615 = FlaxGetter.plain(
  "right",
  flaxDoubleType,
  _TextBox_right,
);
const _flaxBinding1616 = FlaxGetter.plain(
  "bottom",
  flaxDoubleType,
  _TextBox_bottom,
);
const _flaxBinding1617 = FlaxGetter.plain(
  "direction",
  _flaxBinding177,
  _TextBox_direction,
);
const _flaxBinding1618 = FlaxGetter.plain(
  "start",
  flaxDoubleType,
  _TextBox_start,
);
const _flaxBinding1619 = FlaxGetter.plain("end", flaxDoubleType, _TextBox_end);
const _flaxBinding1620 = FlaxInstanceMethod.shared(
  _flaxBinding10,
  _TextBox_toRect,
);
const _flaxBinding1621 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TextBox_toString,
);
const _flaxBinding1622 = <FlaxParameter>[
  FlaxParameter.required("left", flaxDoubleType),
  FlaxParameter.required("top", flaxDoubleType),
  FlaxParameter.required("right", flaxDoubleType),
  FlaxParameter.required("bottom", flaxDoubleType),
  FlaxParameter.required("direction", _flaxBinding177),
];
const _flaxBinding1623 = FlaxProxyMember(
  "toRect",
  0,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding1624 = FlaxProxyMember(
  "top",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1625 = FlaxProxyMember(
  "right",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1626 = FlaxProxyMember(
  "bottom",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1627 = FlaxProxyMember(
  "direction",
  1,
  _flaxBinding178,
  hasSuper: true,
);
const _flaxBinding1628 = FlaxProxyMember(
  "start",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1629 = FlaxProxyMember(
  "end",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1630 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextBox",
  [
    _flaxBinding1613,
    _flaxBinding1614,
    _flaxBinding1615,
    _flaxBinding1616,
    _flaxBinding1617,
    _flaxBinding1618,
    _flaxBinding1619,
  ],
  {
    "toRect": _flaxBinding1620,
    "toString": _flaxBinding1621,
    "@super:toRect": FlaxInstanceMethod.shared(
      _flaxBinding10,
      _TextBox_super_toRect,
    ),
    "@super:toString": _flaxBinding353,
    "@super:get:left": _flaxBinding610,
    "@super:get:top": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _TextBox_super_get_top,
    ),
    "@super:get:right": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _TextBox_super_get_right,
    ),
    "@super:get:bottom": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _TextBox_super_get_bottom,
    ),
    "@super:get:direction": FlaxInstanceMethod.shared(
      _flaxBinding178,
      _TextBox_super_get_direction,
    ),
    "@super:get:start": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _TextBox_super_get_start,
    ),
    "@super:get:end": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _TextBox_super_get_end,
    ),
  },
  constructors: {
    "fromLTRBD": _flaxBinding1622,
    "@implementation": _flaxBinding1622,
    "@implementation:fromLTRBD": _flaxBinding1622,
  },
  create: _createTextBox,
  matches: _isTextBox,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1623,
    _flaxBinding355,
    _flaxBinding618,
    _flaxBinding1624,
    _flaxBinding1625,
    _flaxBinding1626,
    _flaxBinding1627,
    _flaxBinding1628,
    _flaxBinding1629,
  ]),
);
const _flaxBinding1631 = FlaxGetter.plain(
  "maskValue",
  flaxIntType,
  _TextDecoration_maskValue,
);
const _flaxBinding1632 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextDecoration",
);
const _flaxBinding1633 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding1632),
];
const _flaxBinding1634 = FlaxInstanceMethod.plain(
  _flaxBinding1633,
  flaxBoolType,
  _TextDecoration_contains,
);
const _flaxBinding1635 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TextDecoration_toString,
);
const _flaxBinding1636 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1632,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:TextDecoration]",
    _collection35Create,
    _collection35Matches,
    restore: _collection35Restore,
  ),
);
const _flaxBinding1637 = FlaxTypeRef(
  "list",
  item: _flaxBinding1632,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:TextDecoration]",
    _collection34Create,
    _collection34Matches,
  ),
  iterable: _flaxBinding1636,
);
const _flaxBinding1638 = <FlaxParameter>[
  FlaxParameter.required("decorations", _flaxBinding1637),
];
const _flaxBinding1639 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextDecoration",
  [_flaxBinding1631],
  {"contains": _flaxBinding1634, "toString": _flaxBinding1635},
  constructors: {"combine": _flaxBinding1638},
  create: _createTextDecoration,
  matches: _isTextDecoration,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1640 = FlaxGetter.plain(
  "applyHeightToFirstAscent",
  flaxBoolType,
  _TextHeightBehavior_applyHeightToFirstAscent,
);
const _flaxBinding1641 = FlaxGetter.plain(
  "applyHeightToLastDescent",
  flaxBoolType,
  _TextHeightBehavior_applyHeightToLastDescent,
);
const _flaxBinding1642 = FlaxGetter.plain(
  "leadingDistribution",
  _flaxBinding179,
  _TextHeightBehavior_leadingDistribution,
);
const _flaxBinding1643 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TextHeightBehavior_toString,
);
const _flaxBinding1644 = <FlaxParameter>[
  FlaxParameter(
    "applyHeightToFirstAscent",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "applyHeightToLastDescent",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "leadingDistribution",
    _flaxBinding179,
    required: false,
    defaultValue: api.TextLeadingDistribution.proportional,
  ),
];
const _flaxBinding1645 = FlaxProxyMember(
  "applyHeightToFirstAscent",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1646 = FlaxProxyMember(
  "applyHeightToLastDescent",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1647 = FlaxProxyMember(
  "leadingDistribution",
  1,
  _flaxBinding180,
  hasSuper: true,
);
const _flaxBinding1648 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextHeightBehavior",
  [_flaxBinding1640, _flaxBinding1641, _flaxBinding1642],
  {
    "toString": _flaxBinding1643,
    "@super:toString": _flaxBinding353,
    "@super:get:applyHeightToFirstAscent": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _TextHeightBehavior_super_get_applyHeightToFirstAscent,
    ),
    "@super:get:applyHeightToLastDescent": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _TextHeightBehavior_super_get_applyHeightToLastDescent,
    ),
    "@super:get:leadingDistribution": FlaxInstanceMethod.shared(
      _flaxBinding180,
      _TextHeightBehavior_super_get_leadingDistribution,
    ),
  },
  constructors: {"": _flaxBinding1644, "@implementation": _flaxBinding1644},
  create: _createTextHeightBehavior,
  matches: _isTextHeightBehavior,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding355,
    _flaxBinding1645,
    _flaxBinding1646,
    _flaxBinding1647,
  ]),
);
const _flaxBinding1649 = FlaxGetter.plain(
  "offset",
  flaxIntType,
  _TextPosition_offset,
);
const _flaxBinding1650 = FlaxGetter.plain(
  "affinity",
  _flaxBinding181,
  _TextPosition_affinity,
);
const _flaxBinding1651 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TextPosition_toString,
);
const _flaxBinding1652 = <FlaxParameter>[
  FlaxParameter.required("offset", flaxIntType),
  FlaxParameter(
    "affinity",
    _flaxBinding181,
    required: false,
    defaultValue: api.TextAffinity.downstream,
  ),
];
const _flaxBinding1653 = FlaxProxyMember(
  "offset",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding1654 = FlaxProxyMember(
  "affinity",
  1,
  _flaxBinding182,
  hasSuper: true,
);
const _flaxBinding1655 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextPosition",
  [_flaxBinding1649, _flaxBinding1650],
  {
    "toString": _flaxBinding1651,
    "@super:toString": _flaxBinding353,
    "@super:get:offset": FlaxInstanceMethod.shared(
      flaxIntCall,
      _TextPosition_super_get_offset,
    ),
    "@super:get:affinity": FlaxInstanceMethod.shared(
      _flaxBinding182,
      _TextPosition_super_get_affinity,
    ),
  },
  constructors: {"": _flaxBinding1652, "@implementation": _flaxBinding1652},
  create: _createTextPosition,
  matches: _isTextPosition,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding355,
    _flaxBinding1653,
    _flaxBinding1654,
  ]),
);
const _flaxBinding1656 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TextStyle_toString,
);
const _flaxBinding1657 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextDecoration",
  nullable: true,
);
const _flaxBinding1658 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TextDecorationStyle",
  nullable: true,
);
const _flaxBinding1659 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Paint",
  nullable: true,
);
const _flaxBinding1660 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding174,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Shadow]",
    _collection37Create,
    _collection37Matches,
    restore: _collection37Restore,
  ),
);
const _flaxBinding1661 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding174,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Shadow]",
    _collection36Create,
    _collection36Matches,
  ),
  iterable: _flaxBinding1660,
);
const _flaxBinding1662 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FontFeature",
);
const _flaxBinding1663 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1662,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:FontFeature]",
    _collection39Create,
    _collection39Matches,
    restore: _collection39Restore,
  ),
);
const _flaxBinding1664 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding1662,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:FontFeature]",
    _collection38Create,
    _collection38Matches,
  ),
  iterable: _flaxBinding1663,
);
const _flaxBinding1665 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FontVariation",
);
const _flaxBinding1666 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1665,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:FontVariation]",
    _collection41Create,
    _collection41Matches,
    restore: _collection41Restore,
  ),
);
const _flaxBinding1667 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding1665,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:FontVariation]",
    _collection40Create,
    _collection40Matches,
  ),
  iterable: _flaxBinding1666,
);
const _flaxBinding1668 = <FlaxParameter>[
  FlaxParameter("color", _flaxBinding1570, required: false),
  FlaxParameter("decoration", _flaxBinding1657, required: false),
  FlaxParameter("decorationColor", _flaxBinding1570, required: false),
  FlaxParameter("decorationStyle", _flaxBinding1658, required: false),
  FlaxParameter("decorationThickness", flaxNullableDoubleType, required: false),
  FlaxParameter("fontWeight", _flaxBinding782, required: false),
  FlaxParameter("fontStyle", _flaxBinding783, required: false),
  FlaxParameter("textBaseline", _flaxBinding759, required: false),
  FlaxParameter("fontFamily", flaxNullableStringType, required: false),
  FlaxParameter("fontFamilyFallback", _flaxBinding1483, required: false),
  FlaxParameter("fontSize", flaxNullableDoubleType, required: false),
  FlaxParameter("letterSpacing", flaxNullableDoubleType, required: false),
  FlaxParameter("wordSpacing", flaxNullableDoubleType, required: false),
  FlaxParameter("height", flaxNullableDoubleType, required: false),
  FlaxParameter("leadingDistribution", _flaxBinding1566, required: false),
  FlaxParameter("locale", _flaxBinding785, required: false),
  FlaxParameter("background", _flaxBinding1659, required: false),
  FlaxParameter("foreground", _flaxBinding1659, required: false),
  FlaxParameter("shadows", _flaxBinding1661, required: false),
  FlaxParameter("fontFeatures", _flaxBinding1664, required: false),
  FlaxParameter("fontVariations", _flaxBinding1667, required: false),
];
const _flaxBinding1669 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextStyle",
  [],
  {"toString": _flaxBinding1656, "@super:toString": _flaxBinding353},
  constructors: {"": _flaxBinding1668, "@implementation": _flaxBinding1668},
  create: _createTextStyle,
  matches: _isTextStyle,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding355]),
);
const _flaxBinding1670 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TransformEngineLayer",
  [],
  {},
  constructors: {},
  create: _createTransformEngineLayer,
  matches: _isTransformEngineLayer,
  setters: [],
  supertypes: [
    "dart:ui::_EngineLayerWrapper",
    "dart:core::Object",
    "flax.core/sdk_dart_ui#type:EngineLayer",
  ],
  parent: _flaxBinding202,
  disposeMethod: "dispose",
);
const _flaxBinding1671 = FlaxGetter.plain(
  "length",
  flaxIntType,
  _UniformArray_length,
);
const _flaxBinding1672 = FlaxGetter.plain(
  "shaderIndex",
  flaxIntType,
  _UniformFloatSlot_shaderIndex,
);
const _flaxBinding1673 = FlaxGetter.plain(
  "name",
  flaxStringType,
  _UniformFloatSlot_name,
);
const _flaxBinding1674 = FlaxGetter.plain(
  "index",
  flaxIntType,
  _UniformFloatSlot_index,
);
const _flaxBinding1675 = <FlaxParameter>[
  FlaxParameter.required("val", flaxDoubleType),
];
const _flaxBinding1676 = FlaxInstanceMethod.plain(
  _flaxBinding1675,
  flaxVoidType,
  _UniformFloatSlot_set,
);
const _flaxBinding1677 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformFloatSlot",
  [_flaxBinding1672, _flaxBinding1673, _flaxBinding1674],
  {"set": _flaxBinding1676},
  constructors: {},
  create: _createUniformFloatSlot,
  matches: _isUniformFloatSlot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1678 = <FlaxParameter>[
  FlaxParameter.required("m00", flaxDoubleType),
  FlaxParameter.required("m01", flaxDoubleType),
  FlaxParameter.required("m10", flaxDoubleType),
  FlaxParameter.required("m11", flaxDoubleType),
];
const _flaxBinding1679 = FlaxInstanceMethod.plain(
  _flaxBinding1678,
  flaxVoidType,
  _UniformMat2Slot_set,
);
const _flaxBinding1680 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformMat2Slot",
  [],
  {"set": _flaxBinding1679},
  constructors: {},
  create: _createUniformMat2Slot,
  matches: _isUniformMat2Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1681 = <FlaxParameter>[
  FlaxParameter.required("m00", flaxDoubleType),
  FlaxParameter.required("m01", flaxDoubleType),
  FlaxParameter.required("m02", flaxDoubleType),
  FlaxParameter.required("m10", flaxDoubleType),
  FlaxParameter.required("m11", flaxDoubleType),
  FlaxParameter.required("m12", flaxDoubleType),
  FlaxParameter.required("m20", flaxDoubleType),
  FlaxParameter.required("m21", flaxDoubleType),
  FlaxParameter.required("m22", flaxDoubleType),
];
const _flaxBinding1682 = FlaxInstanceMethod.plain(
  _flaxBinding1681,
  flaxVoidType,
  _UniformMat3Slot_set,
);
const _flaxBinding1683 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformMat3Slot",
  [],
  {"set": _flaxBinding1682},
  constructors: {},
  create: _createUniformMat3Slot,
  matches: _isUniformMat3Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1684 = <FlaxParameter>[
  FlaxParameter.required("m00", flaxDoubleType),
  FlaxParameter.required("m01", flaxDoubleType),
  FlaxParameter.required("m02", flaxDoubleType),
  FlaxParameter.required("m03", flaxDoubleType),
  FlaxParameter.required("m10", flaxDoubleType),
  FlaxParameter.required("m11", flaxDoubleType),
  FlaxParameter.required("m12", flaxDoubleType),
  FlaxParameter.required("m13", flaxDoubleType),
  FlaxParameter.required("m20", flaxDoubleType),
  FlaxParameter.required("m21", flaxDoubleType),
  FlaxParameter.required("m22", flaxDoubleType),
  FlaxParameter.required("m23", flaxDoubleType),
  FlaxParameter.required("m30", flaxDoubleType),
  FlaxParameter.required("m31", flaxDoubleType),
  FlaxParameter.required("m32", flaxDoubleType),
  FlaxParameter.required("m33", flaxDoubleType),
];
const _flaxBinding1685 = FlaxInstanceMethod.plain(
  _flaxBinding1684,
  flaxVoidType,
  _UniformMat4Slot_set,
);
const _flaxBinding1686 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformMat4Slot",
  [],
  {"set": _flaxBinding1685},
  constructors: {},
  create: _createUniformMat4Slot,
  matches: _isUniformMat4Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1687 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformType",
  [],
  {},
  constructors: {},
  create: _createUniformType,
  matches: _isUniformType,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1688 = FlaxInstanceMethod.shared(
  _flaxBinding120,
  _UniformVec2Slot_set,
);
const _flaxBinding1689 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformVec2Slot",
  [],
  {"set": _flaxBinding1688},
  constructors: {},
  create: _createUniformVec2Slot,
  matches: _isUniformVec2Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1690 = <FlaxParameter>[
  FlaxParameter.required("x", flaxDoubleType),
  FlaxParameter.required("y", flaxDoubleType),
  FlaxParameter.required("z", flaxDoubleType),
];
const _flaxBinding1691 = FlaxInstanceMethod.plain(
  _flaxBinding1690,
  flaxVoidType,
  _UniformVec3Slot_set,
);
const _flaxBinding1692 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformVec3Slot",
  [],
  {"set": _flaxBinding1691},
  constructors: {},
  create: _createUniformVec3Slot,
  matches: _isUniformVec3Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1693 = <FlaxParameter>[
  FlaxParameter.required("x", flaxDoubleType),
  FlaxParameter.required("y", flaxDoubleType),
  FlaxParameter.required("z", flaxDoubleType),
  FlaxParameter.required("w", flaxDoubleType),
];
const _flaxBinding1694 = FlaxInstanceMethod.plain(
  _flaxBinding1693,
  flaxVoidType,
  _UniformVec4Slot_set,
);
const _flaxBinding1695 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformVec4Slot",
  [],
  {"set": _flaxBinding1694},
  constructors: {},
  create: _createUniformVec4Slot,
  matches: _isUniformVec4Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1696 = FlaxGetter.plain(
  "debugDisposed",
  flaxBoolType,
  _Vertices_debugDisposed,
);
const _flaxBinding1697 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _Vertices_dispose,
);
const _flaxBinding1698 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:VertexMode",
);
const _flaxBinding1699 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxOffsetType,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Offset]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding33,
);
const _flaxBinding1700 = FlaxTypeRef(
  "iterable",
  item: flaxIntType,
  collection: FlaxCollectionBinding(
    "iterable:[int:]",
    _collection43Create,
    _collection43Matches,
    restore: _collection43Restore,
  ),
);
const _flaxBinding1701 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxIntType,
  collection: FlaxCollectionBinding(
    "list:[int:]",
    _collection42Create,
    _collection42Matches,
  ),
  iterable: _flaxBinding1700,
);
const _flaxBinding1702 = <FlaxParameter>[
  FlaxParameter.required("mode", _flaxBinding1698),
  FlaxParameter.required("positions", _flaxBinding34),
  FlaxParameter("colors", _flaxBinding46, required: false),
  FlaxParameter("textureCoordinates", _flaxBinding1699, required: false),
  FlaxParameter("indices", _flaxBinding1701, required: false),
];
const _flaxBinding1703 = FlaxTypeRef("Float32List", nullable: true);
const _flaxBinding1704 = FlaxTypeRef("Uint16List", nullable: true);
const _flaxBinding1705 = <FlaxParameter>[
  FlaxParameter.required("mode", _flaxBinding1698),
  FlaxParameter.required("positions", _flaxBinding36),
  FlaxParameter("colors", _flaxBinding49, required: false),
  FlaxParameter("textureCoordinates", _flaxBinding1703, required: false),
  FlaxParameter("indices", _flaxBinding1704, required: false),
];
const _flaxBinding1706 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Vertices",
  [_flaxBinding1696],
  {
    "dispose": _flaxBinding1697,
    "@super:dispose": _flaxBinding565,
    "@super:get:debugDisposed": _flaxBinding566,
  },
  constructors: {
    "": _flaxBinding1702,
    "raw": _flaxBinding1705,
    "@implementation": _flaxBinding1702,
    "@implementation:raw": _flaxBinding1705,
  },
  create: _createVertices,
  matches: _isVertices,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding569, _flaxBinding570]),
);
const _flaxBinding1707 = FlaxGetter.plain(
  "minWidth",
  flaxDoubleType,
  _ViewConstraints_minWidth,
);
const _flaxBinding1708 = FlaxGetter.plain(
  "maxWidth",
  flaxDoubleType,
  _ViewConstraints_maxWidth,
);
const _flaxBinding1709 = FlaxGetter.plain(
  "minHeight",
  flaxDoubleType,
  _ViewConstraints_minHeight,
);
const _flaxBinding1710 = FlaxGetter.plain(
  "maxHeight",
  flaxDoubleType,
  _ViewConstraints_maxHeight,
);
const _flaxBinding1711 = FlaxGetter.plain(
  "isTight",
  flaxBoolType,
  _ViewConstraints_isTight,
);
const _flaxBinding1712 = FlaxInstanceMethod.shared(
  _flaxBinding183,
  _ViewConstraints_isSatisfiedBy,
);
const _flaxBinding1713 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ViewConstraints_toString,
);
const _flaxBinding1714 = FlaxInstanceMethod.shared(
  _flaxBinding185,
  _ViewConstraints_operatorDivide,
);
const _flaxBinding1715 = <FlaxParameter>[
  FlaxParameter("minWidth", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter(
    "maxWidth",
    flaxDoubleType,
    required: false,
    defaultValue: double.infinity,
  ),
  FlaxParameter(
    "minHeight",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "maxHeight",
    flaxDoubleType,
    required: false,
    defaultValue: double.infinity,
  ),
];
const _flaxBinding1716 = <FlaxParameter>[
  FlaxParameter.required("size", flaxSizeType),
];
const _flaxBinding1717 = FlaxProxyMember(
  "isSatisfiedBy",
  0,
  _flaxBinding183,
  hasSuper: true,
);
const _flaxBinding1718 = FlaxProxyMember(
  "operatorDivide",
  0,
  _flaxBinding185,
  hasSuper: true,
);
const _flaxBinding1719 = FlaxProxyMember(
  "minWidth",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1720 = FlaxProxyMember(
  "maxWidth",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1721 = FlaxProxyMember(
  "minHeight",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1722 = FlaxProxyMember(
  "maxHeight",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding1723 = FlaxProxyMember(
  "isTight",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding1724 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ViewConstraints",
  [
    _flaxBinding1707,
    _flaxBinding1708,
    _flaxBinding1709,
    _flaxBinding1710,
    _flaxBinding1711,
  ],
  {
    "isSatisfiedBy": _flaxBinding1712,
    "toString": _flaxBinding1713,
    "operatorDivide": _flaxBinding1714,
    "@super:isSatisfiedBy": FlaxInstanceMethod.shared(
      _flaxBinding183,
      _ViewConstraints_super_isSatisfiedBy,
    ),
    "@super:toString": _flaxBinding353,
    "@super:operatorDivide": FlaxInstanceMethod.shared(
      _flaxBinding185,
      _ViewConstraints_super_operatorDivide,
    ),
    "@super:get:minWidth": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _ViewConstraints_super_get_minWidth,
    ),
    "@super:get:maxWidth": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _ViewConstraints_super_get_maxWidth,
    ),
    "@super:get:minHeight": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _ViewConstraints_super_get_minHeight,
    ),
    "@super:get:maxHeight": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _ViewConstraints_super_get_maxHeight,
    ),
    "@super:get:isTight": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _ViewConstraints_super_get_isTight,
    ),
  },
  constructors: {
    "": _flaxBinding1715,
    "tight": _flaxBinding1716,
    "@implementation": _flaxBinding1715,
    "@implementation:tight": _flaxBinding1716,
  },
  create: _createViewConstraints,
  matches: _isViewConstraints,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1717,
    _flaxBinding355,
    _flaxBinding1718,
    _flaxBinding1719,
    _flaxBinding1720,
    _flaxBinding1721,
    _flaxBinding1722,
    _flaxBinding1723,
  ]),
);
const _flaxBinding1725 = FlaxGetter.plain(
  "viewId",
  flaxIntType,
  _ViewFocusEvent_viewId,
);
const _flaxBinding1726 = FlaxGetter.plain(
  "state",
  _flaxBinding1046,
  _ViewFocusEvent_state,
);
const _flaxBinding1727 = FlaxGetter.plain(
  "direction",
  _flaxBinding1045,
  _ViewFocusEvent_direction,
);
const _flaxBinding1728 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ViewFocusEvent_toString,
);
const _flaxBinding1729 = <FlaxParameter>[
  FlaxParameter.required("viewId", flaxIntType),
  FlaxParameter.required("state", _flaxBinding1046),
  FlaxParameter.required("direction", _flaxBinding1045),
];
const _flaxBinding1730 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ViewFocusEvent",
  [_flaxBinding1725, _flaxBinding1726, _flaxBinding1727],
  {"toString": _flaxBinding1728},
  constructors: {"": _flaxBinding1729},
  create: _createViewFocusEvent,
  matches: _isViewFocusEvent,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1731 = FlaxGetter.plain(
  "left",
  flaxDoubleType,
  _ViewPadding_left,
);
const _flaxBinding1732 = FlaxGetter.plain(
  "top",
  flaxDoubleType,
  _ViewPadding_top,
);
const _flaxBinding1733 = FlaxGetter.plain(
  "right",
  flaxDoubleType,
  _ViewPadding_right,
);
const _flaxBinding1734 = FlaxGetter.plain(
  "bottom",
  flaxDoubleType,
  _ViewPadding_bottom,
);
const _flaxBinding1735 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ViewPadding_toString,
);
const _flaxBinding1736 = FlaxProxyMember("left", 1, flaxDoubleCall);
const _flaxBinding1737 = FlaxProxyMember("top", 1, flaxDoubleCall);
const _flaxBinding1738 = FlaxProxyMember("right", 1, flaxDoubleCall);
const _flaxBinding1739 = FlaxProxyMember("bottom", 1, flaxDoubleCall);
const _flaxBinding1740 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ViewPadding",
  [_flaxBinding1731, _flaxBinding1732, _flaxBinding1733, _flaxBinding1734],
  {"toString": _flaxBinding1735},
  constructors: {"@implementation": _flaxBinding200},
  create: _createViewPadding,
  matches: _isViewPadding,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding342,
    _flaxBinding1736,
    _flaxBinding1737,
    _flaxBinding1738,
    _flaxBinding1739,
  ]),
);
const _flaxBinding1741 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ChannelBuffers",
);
const _flaxBinding1742 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SingletonFlutterWindow",
);
const _flaxBinding1743 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("result", _flaxBinding24)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api.Image>,
  id: "callback:<>(p:r:result:object:flax.core/sdk_dart_ui#type:Image)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.Image>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.Image>,
);
const _flaxBinding1744 = FlaxTypeRef("callback", callback: _flaxBinding1743);
const _flaxBinding1745 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TargetImageSize",
);
const _flaxBinding1746 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("intrinsicWidth", flaxIntType),
    FlaxCallbackParameter.plain("intrinsicHeight", flaxIntType),
  ],
  _flaxBinding1745,
  FlaxCallbackAdapters.wrap2<int, int, api.TargetImageSize>,
  id: "callback:<>(p:r:intrinsicWidth:int:,p:r:intrinsicHeight:int:)->object:flax.core/sdk_dart_ui#type:TargetImageSize",
  invoke: FlaxCallbackAdapters.invoke2<int, int, api.TargetImageSize>,
  matches: FlaxCallbackAdapters.matches2<int, int, api.TargetImageSize>,
);
const _flaxBinding1747 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1746,
);
const _flaxBinding1748 = FlaxTypeRef(
  "futureOr",
  item: flaxNullableAnyType,
  future: FlaxFutureBinding("any?:", _future5Adapt),
);
const _flaxBinding1749 = FlaxCallbackBinding(
  [],
  _flaxBinding1748,
  _callback6,
  id: "callback:<>()->futureOr:[any?:]",
  invoke: _callback6Invoke,
  matches: _callback6Matches,
);
const _flaxBinding1750 = FlaxTypeRef("callback", callback: _flaxBinding1749);
const _flaxBinding1751 = FlaxTypeRef(
  "future",
  item: flaxNullableAnyType,
  future: FlaxFutureBinding("any?:", _future5Adapt),
);
const _flaxBinding1752 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FontVariation",
  nullable: true,
);
const _flaxBinding1753 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FragmentProgram",
);
const _flaxBinding1754 = FlaxTypeRef(
  "future",
  item: _flaxBinding1753,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:FragmentProgram",
    _future6Adapt,
  ),
);
const _flaxBinding1755 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("image", _flaxBinding24)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api.Image>,
  id: "callback:<>(p:r:image:object:flax.core/sdk_dart_ui#type:Image)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.Image>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.Image>,
);
const _flaxBinding1756 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1755,
);
const _flaxBinding1757 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImageDescriptor",
);
const _flaxBinding1758 = FlaxTypeRef(
  "future",
  item: _flaxBinding1757,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:ImageDescriptor",
    _future7Adapt,
  ),
);
const _flaxBinding1759 = FlaxTypeRef(
  "future",
  item: _flaxBinding550,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:ImmutableBuffer",
    _future8Adapt,
  ),
);
const _flaxBinding1760 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SendPort",
  nullable: true,
);
const _flaxBinding1761 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PathOperation",
);
const _flaxBinding1762 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("picture", _flaxBinding28)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api.Picture>,
  id: "callback:<>(p:r:picture:object:flax.core/sdk_dart_ui#type:Picture)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.Picture>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.Picture>,
);
const _flaxBinding1763 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1762,
);
const _flaxBinding1764 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:CallbackHandle",
  nullable: true,
);
const _flaxBinding1765 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RRect",
  nullable: true,
);
const _flaxBinding1766 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RSuperellipse",
  nullable: true,
);
const _flaxBinding1767 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RootIsolateToken",
  nullable: true,
);
const _flaxBinding1768 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding159,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:SemanticsAction]",
    _collection45Create,
    _collection45Matches,
    restore: _collection45Restore,
  ),
);
const _flaxBinding1769 = FlaxTypeRef(
  "list",
  item: _flaxBinding159,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:SemanticsAction]",
    _collection44Create,
    _collection44Matches,
  ),
  iterable: _flaxBinding1768,
);
const _flaxBinding1770 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlag",
  nullable: true,
);
const _flaxBinding1771 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlag",
);
const _flaxBinding1772 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1771,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:SemanticsFlag]",
    _collection47Create,
    _collection47Matches,
    restore: _collection47Restore,
  ),
);
const _flaxBinding1773 = FlaxTypeRef(
  "list",
  item: _flaxBinding1771,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:SemanticsFlag]",
    _collection46Create,
    _collection46Matches,
  ),
  iterable: _flaxBinding1772,
);
const _flaxBinding1774 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Shadow",
  nullable: true,
);
const _flaxBinding1775 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SystemColorPalette",
);
