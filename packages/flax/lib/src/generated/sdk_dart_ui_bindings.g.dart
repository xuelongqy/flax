// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';
import 'dart:ui' as api;

import 'package:flax/bindings.dart';

import 'dart:typed_data' as api1;
import 'dart:core' as api2;
import 'dart:async' as api3;

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
    _flaxBinding15,
    _flaxBinding21,
    _flaxBinding27,
    _flaxBinding204,
    _flaxBinding246,
    _flaxBinding247,
    _flaxBinding248,
    _flaxBinding249,
    _flaxBinding250,
    _flaxBinding261,
    _flaxBinding268,
    _flaxBinding269,
    _flaxBinding270,
    _flaxBinding285,
    _flaxBinding297,
    _flaxBinding310,
    _flaxBinding20,
    _flaxBinding341,
    _flaxBinding348,
    _flaxBinding355,
    _flaxBinding358,
    _flaxBinding399,
    _flaxBinding402,
    _flaxBinding410,
    _flaxBinding427,
    _flaxBinding439,
    _flaxBinding447,
    _flaxBinding456,
    _flaxBinding465,
    _flaxBinding470,
    _flaxBinding489,
    _flaxBinding507,
    _flaxBinding508,
    _flaxBinding513,
    _flaxBinding518,
    _flaxBinding522,
    _flaxBinding523,
    _flaxBinding548,
    _flaxBinding569,
    _flaxBinding580,
    _flaxBinding596,
    _flaxBinding600,
    _flaxBinding618,
    _flaxBinding619,
    _flaxBinding620,
    _flaxBinding658,
    _flaxBinding730,
    _flaxBinding758,
    _flaxBinding762,
    _flaxBinding772,
    _flaxBinding873,
    _flaxBinding883,
    _flaxBinding887,
    _flaxBinding939,
    _flaxBinding953,
    _flaxBinding961,
    _flaxBinding967,
    _flaxBinding1096,
    _flaxBinding1097,
    _flaxBinding1183,
    _flaxBinding1191,
    _flaxBinding1238,
    _flaxBinding1248,
    _flaxBinding1288,
    _flaxBinding1327,
    _flaxBinding1328,
    _flaxBinding1334,
    _flaxBinding1430,
    _flaxBinding1436,
    _flaxBinding1453,
    _flaxBinding1457,
    _flaxBinding1533,
    _flaxBinding1535,
    _flaxBinding1555,
    _flaxBinding361,
    _flaxBinding1556,
    _flaxBinding1575,
    _flaxBinding1622,
    _flaxBinding1624,
    _flaxBinding585,
    _flaxBinding1627,
    _flaxBinding1633,
    _flaxBinding1655,
    _flaxBinding1663,
    _flaxBinding1671,
    _flaxBinding1690,
    _flaxBinding1699,
    _flaxBinding1710,
    _flaxBinding1719,
    _flaxBinding1733,
    _flaxBinding1734,
    FlaxObjectBinding(
      "flax.core/sdk_dart_ui#type:UniformArray",
      [_flaxBinding1735],
      {
        "operatorGetIndex": FlaxInstanceMethod(
          _flaxBinding937,
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
    _flaxBinding1741,
    _flaxBinding1744,
    _flaxBinding1747,
    _flaxBinding1750,
    _flaxBinding1751,
    _flaxBinding1753,
    _flaxBinding1756,
    _flaxBinding1759,
    _flaxBinding1767,
    _flaxBinding1787,
    _flaxBinding1793,
    _flaxBinding1803,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:channelBuffers",
      [],
      _flaxBinding1804,
      _read_channelBuffers,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:isRunningOnPlatformThread",
      [],
      _flaxBinding0,
      _read_isRunningOnPlatformThread,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:kTextHeightNone",
      [],
      _flaxBinding37,
      _read_kTextHeightNone,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:window",
      [],
      _flaxBinding1805,
      _read_window,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:clampDouble",
      [
        FlaxParameter(
          "x",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "min",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "max",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding37,
      _function_clampDouble,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:decodeImageFromList",
      [
        FlaxParameter(
          "list",
          _flaxBinding1806,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "callback",
          _flaxBinding1808,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding16,
      _function_decodeImageFromList,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:decodeImageFromPixels",
      [
        FlaxParameter(
          "pixels",
          _flaxBinding1806,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "width",
          _flaxBinding22,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "height",
          _flaxBinding22,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "format",
          _flaxBinding500,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "callback",
          _flaxBinding1808,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "allowUpscaling",
          _flaxBinding0,
          required: false,
          defaultValue: true,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "rowBytes",
          _flaxBinding364,
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "targetFormat",
          _flaxBinding494,
          required: false,
          defaultValue: api.TargetPixelFormat.dontCare,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "targetHeight",
          _flaxBinding364,
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "targetWidth",
          _flaxBinding364,
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding16,
      _function_decodeImageFromPixels,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:decodeImageFromPixelsSync",
      [
        FlaxParameter(
          "pixels",
          _flaxBinding1806,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "width",
          _flaxBinding22,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "height",
          _flaxBinding22,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "format",
          _flaxBinding500,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding90,
      _function_decodeImageFromPixelsSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:instantiateImageCodec",
      [
        FlaxParameter(
          "list",
          _flaxBinding1806,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "allowUpscaling",
          _flaxBinding0,
          required: false,
          defaultValue: true,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "targetHeight",
          _flaxBinding364,
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "targetWidth",
          _flaxBinding364,
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding497,
      _function_instantiateImageCodec,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:instantiateImageCodecFromBuffer",
      [
        FlaxParameter(
          "buffer",
          _flaxBinding499,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "allowUpscaling",
          _flaxBinding0,
          required: false,
          defaultValue: true,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "targetHeight",
          _flaxBinding364,
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "targetWidth",
          _flaxBinding364,
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding497,
      _function_instantiateImageCodecFromBuffer,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:instantiateImageCodecWithSize",
      [
        FlaxParameter(
          "buffer",
          _flaxBinding499,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "getTargetSize",
          _flaxBinding1811,
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding497,
      _function_instantiateImageCodecWithSize,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:lerpDouble",
      [
        FlaxParameter(
          "a",
          _flaxBinding1812,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "b",
          _flaxBinding1812,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "t",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding40,
      _function_lerpDouble,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:loadFontFromList",
      [
        FlaxParameter(
          "list",
          _flaxBinding1806,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "fontFamily",
          _flaxBinding531,
          required: false,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding218,
      _function_loadFontFromList,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:runOnPlatformThread",
      [
        FlaxParameter(
          "computation",
          _flaxBinding1815,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1816,
      _function_runOnPlatformThread,
      genericFactory: _flaxGenericFunction9,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:ChannelBuffers.kDefaultBufferSize",
      _flaxBinding22,
      api.ChannelBuffers.kDefaultBufferSize,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:ChannelBuffers.kControlChannelName",
      _flaxBinding13,
      api.ChannelBuffers.kControlChannelName,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:CheckedState.value%3Aget",
      [
        FlaxParameter(
          "receiver",
          _flaxBinding1458,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding22,
      _enum_CheckedState_get_value,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:CheckedState.hasConflict%3Acall",
      [
        FlaxParameter(
          "receiver",
          _flaxBinding1458,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "other",
          _flaxBinding1458,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding0,
      _enum_CheckedState_call_hasConflict,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:CheckedState.merge%3Acall",
      [
        FlaxParameter(
          "receiver",
          _flaxBinding1458,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "other",
          _flaxBinding1458,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1458,
      _enum_CheckedState_call_merge,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:DartPluginRegistrant.ensureInitialized",
      [],
      _flaxBinding16,
      _DartPluginRegistrant_ensureInitialized,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:FontVariation.lerp",
      [
        FlaxParameter(
          "a",
          _flaxBinding1817,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "b",
          _flaxBinding1817,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "t",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1817,
      _FontVariation_lerp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:FragmentProgram.fromAsset",
      [
        FlaxParameter(
          "assetKey",
          _flaxBinding13,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1819,
      _FragmentProgram_fromAsset,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:HitTestResponse.empty",
      _flaxBinding1036,
      api.HitTestResponse.empty,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:Image.onCreate",
      [],
      _flaxBinding1821,
      _Image_static_get_onCreate,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:Image.onDispose",
      [],
      _flaxBinding1821,
      _Image_static_get_onDispose,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Image.onCreate%3D",
      [
        FlaxParameter(
          "value",
          _flaxBinding1821,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding16,
      _Image_static_set_onCreate,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Image.onDispose%3D",
      [
        FlaxParameter(
          "value",
          _flaxBinding1821,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding16,
      _Image_static_set_onDispose,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:ImageDescriptor.encoded",
      [
        FlaxParameter(
          "buffer",
          _flaxBinding499,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1823,
      _ImageDescriptor_encoded,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:ImmutableBuffer.fromUint8List",
      [
        FlaxParameter(
          "list",
          _flaxBinding1806,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1824,
      _ImmutableBuffer_fromUint8List,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:ImmutableBuffer.fromAsset",
      [
        FlaxParameter(
          "assetKey",
          _flaxBinding13,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1824,
      _ImmutableBuffer_fromAsset,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:ImmutableBuffer.fromFilePath",
      [
        FlaxParameter(
          "path",
          _flaxBinding13,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1824,
      _ImmutableBuffer_fromFilePath,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:IsolateNameServer.removePortNameMapping",
      [
        FlaxParameter(
          "name",
          _flaxBinding13,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding0,
      _IsolateNameServer_removePortNameMapping,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:KeyEventDeviceType.label%3Aget",
      [
        FlaxParameter(
          "receiver",
          _flaxBinding527,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding13,
      _enum_KeyEventDeviceType_get_label,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:KeyEventType.label%3Aget",
      [
        FlaxParameter(
          "receiver",
          _flaxBinding525,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding13,
      _enum_KeyEventType_get_label,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Path.combine",
      [
        FlaxParameter(
          "operation",
          _flaxBinding1825,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "path1",
          _flaxBinding61,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "path2",
          _flaxBinding61,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding61,
      _Path_combine,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:Picture.onCreate",
      [],
      _flaxBinding1827,
      _Picture_static_get_onCreate,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:Picture.onDispose",
      [],
      _flaxBinding1827,
      _Picture_static_get_onDispose,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Picture.onCreate%3D",
      [
        FlaxParameter(
          "value",
          _flaxBinding1827,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding16,
      _Picture_static_set_onCreate,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Picture.onDispose%3D",
      [
        FlaxParameter(
          "value",
          _flaxBinding1827,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding16,
      _Picture_static_set_onDispose,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:PlatformDispatcher.instance",
      [],
      _flaxBinding312,
      _PlatformDispatcher_static_get_instance,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:PluginUtilities.getCallbackHandle",
      [
        FlaxParameter(
          "callback",
          _flaxBinding1828,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1829,
      _PluginUtilities_getCallbackHandle,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:RRect.lerp",
      [
        FlaxParameter(
          "a",
          _flaxBinding1830,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "b",
          _flaxBinding1830,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "t",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1830,
      _RRect_lerp,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:RRect.zero",
      _flaxBinding55,
      api.RRect.zero,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:RSuperellipse.lerp",
      [
        FlaxParameter(
          "a",
          _flaxBinding1831,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "b",
          _flaxBinding1831,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "t",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1831,
      _RSuperellipse_lerp,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:RSuperellipse.zero",
      _flaxBinding58,
      api.RSuperellipse.zero,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Rect.lerp",
      [
        FlaxParameter(
          "a",
          _flaxBinding29,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "b",
          _flaxBinding29,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "t",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding29,
      _Rect_lerp,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:Rect.zero",
      _flaxBinding51,
      api.Rect.zero,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:Rect.largest",
      _flaxBinding51,
      api.Rect.largest,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:RootIsolateToken.instance",
      [],
      _flaxBinding1832,
      _RootIsolateToken_static_get_instance,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:SemanticsAction.fromIndex",
      [
        FlaxParameter(
          "index",
          _flaxBinding22,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1442,
      _SemanticsAction_fromIndex,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.tap",
      _flaxBinding1437,
      api.SemanticsAction.tap,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.longPress",
      _flaxBinding1437,
      api.SemanticsAction.longPress,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollLeft",
      _flaxBinding1437,
      api.SemanticsAction.scrollLeft,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollRight",
      _flaxBinding1437,
      api.SemanticsAction.scrollRight,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollUp",
      _flaxBinding1437,
      api.SemanticsAction.scrollUp,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollDown",
      _flaxBinding1437,
      api.SemanticsAction.scrollDown,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.scrollToOffset",
      _flaxBinding1437,
      api.SemanticsAction.scrollToOffset,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.increase",
      _flaxBinding1437,
      api.SemanticsAction.increase,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.decrease",
      _flaxBinding1437,
      api.SemanticsAction.decrease,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.showOnScreen",
      _flaxBinding1437,
      api.SemanticsAction.showOnScreen,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.moveCursorForwardByCharacter",
      _flaxBinding1437,
      api.SemanticsAction.moveCursorForwardByCharacter,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.moveCursorBackwardByCharacter",
      _flaxBinding1437,
      api.SemanticsAction.moveCursorBackwardByCharacter,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.setText",
      _flaxBinding1437,
      api.SemanticsAction.setText,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.setSelection",
      _flaxBinding1437,
      api.SemanticsAction.setSelection,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.copy",
      _flaxBinding1437,
      api.SemanticsAction.copy,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.cut",
      _flaxBinding1437,
      api.SemanticsAction.cut,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.paste",
      _flaxBinding1437,
      api.SemanticsAction.paste,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.didGainAccessibilityFocus",
      _flaxBinding1437,
      api.SemanticsAction.didGainAccessibilityFocus,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.didLoseAccessibilityFocus",
      _flaxBinding1437,
      api.SemanticsAction.didLoseAccessibilityFocus,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.customAction",
      _flaxBinding1437,
      api.SemanticsAction.customAction,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.dismiss",
      _flaxBinding1437,
      api.SemanticsAction.dismiss,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.moveCursorForwardByWord",
      _flaxBinding1437,
      api.SemanticsAction.moveCursorForwardByWord,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.moveCursorBackwardByWord",
      _flaxBinding1437,
      api.SemanticsAction.moveCursorBackwardByWord,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.focus",
      _flaxBinding1437,
      api.SemanticsAction.focus,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.expand",
      _flaxBinding1437,
      api.SemanticsAction.expand,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsAction.collapse",
      _flaxBinding1437,
      api.SemanticsAction.collapse,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SemanticsAction.values",
      [],
      _flaxBinding1834,
      _SemanticsAction_static_get_values,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:SemanticsFlag.fromIndex",
      [
        FlaxParameter(
          "index",
          _flaxBinding22,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1835,
      _SemanticsFlag_fromIndex,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasCheckedState",
      _flaxBinding1836,
      api.SemanticsFlag.hasCheckedState,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isChecked",
      _flaxBinding1836,
      api.SemanticsFlag.isChecked,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isCheckStateMixed",
      _flaxBinding1836,
      api.SemanticsFlag.isCheckStateMixed,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasSelectedState",
      _flaxBinding1836,
      api.SemanticsFlag.hasSelectedState,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isSelected",
      _flaxBinding1836,
      api.SemanticsFlag.isSelected,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isButton",
      _flaxBinding1836,
      api.SemanticsFlag.isButton,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isTextField",
      _flaxBinding1836,
      api.SemanticsFlag.isTextField,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isSlider",
      _flaxBinding1836,
      api.SemanticsFlag.isSlider,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isKeyboardKey",
      _flaxBinding1836,
      api.SemanticsFlag.isKeyboardKey,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isReadOnly",
      _flaxBinding1836,
      api.SemanticsFlag.isReadOnly,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isLink",
      _flaxBinding1836,
      api.SemanticsFlag.isLink,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isFocusable",
      _flaxBinding1836,
      api.SemanticsFlag.isFocusable,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isFocused",
      _flaxBinding1836,
      api.SemanticsFlag.isFocused,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasEnabledState",
      _flaxBinding1836,
      api.SemanticsFlag.hasEnabledState,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isEnabled",
      _flaxBinding1836,
      api.SemanticsFlag.isEnabled,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isInMutuallyExclusiveGroup",
      _flaxBinding1836,
      api.SemanticsFlag.isInMutuallyExclusiveGroup,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isHeader",
      _flaxBinding1836,
      api.SemanticsFlag.isHeader,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isObscured",
      _flaxBinding1836,
      api.SemanticsFlag.isObscured,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isMultiline",
      _flaxBinding1836,
      api.SemanticsFlag.isMultiline,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.scopesRoute",
      _flaxBinding1836,
      api.SemanticsFlag.scopesRoute,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.namesRoute",
      _flaxBinding1836,
      api.SemanticsFlag.namesRoute,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isHidden",
      _flaxBinding1836,
      api.SemanticsFlag.isHidden,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isImage",
      _flaxBinding1836,
      api.SemanticsFlag.isImage,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isLiveRegion",
      _flaxBinding1836,
      api.SemanticsFlag.isLiveRegion,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasToggledState",
      _flaxBinding1836,
      api.SemanticsFlag.hasToggledState,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isToggled",
      _flaxBinding1836,
      api.SemanticsFlag.isToggled,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasImplicitScrolling",
      _flaxBinding1836,
      api.SemanticsFlag.hasImplicitScrolling,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasExpandedState",
      _flaxBinding1836,
      api.SemanticsFlag.hasExpandedState,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isExpanded",
      _flaxBinding1836,
      api.SemanticsFlag.isExpanded,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.hasRequiredState",
      _flaxBinding1836,
      api.SemanticsFlag.hasRequiredState,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.isRequired",
      _flaxBinding1836,
      api.SemanticsFlag.isRequired,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SemanticsFlag.values",
      [],
      _flaxBinding1838,
      _SemanticsFlag_static_get_values,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SemanticsFlags.none",
      [],
      _flaxBinding1484,
      _SemanticsFlags_static_get_none,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:SemanticsFlags.none%3D",
      [
        FlaxParameter(
          "value",
          _flaxBinding1484,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding16,
      _SemanticsFlags_static_set_none,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Shadow.convertRadiusToSigma",
      [
        FlaxParameter(
          "radius",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding37,
      _Shadow_convertRadiusToSigma,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Shadow.lerp",
      [
        FlaxParameter(
          "a",
          _flaxBinding1839,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "b",
          _flaxBinding1839,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "t",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1839,
      _Shadow_lerp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Shadow.lerpList",
      [
        FlaxParameter(
          "a",
          _flaxBinding1725,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "b",
          _flaxBinding1725,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "t",
          _flaxBinding37,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1725,
      _Shadow_lerpList,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SystemColor.platformProvidesSystemColors",
      [],
      _flaxBinding0,
      _SystemColor_static_get_platformProvidesSystemColors,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SystemColor.light",
      [],
      _flaxBinding1840,
      _SystemColor_static_get_light,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#read:SystemColor.dark",
      [],
      _flaxBinding1840,
      _SystemColor_static_get_dark,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:TextDecoration.none",
      _flaxBinding1692,
      api.TextDecoration.none,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:TextDecoration.underline",
      _flaxBinding1692,
      api.TextDecoration.underline,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:TextDecoration.overline",
      _flaxBinding1692,
      api.TextDecoration.overline,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:TextDecoration.lineThrough",
      _flaxBinding1692,
      api.TextDecoration.lineThrough,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Tristate.value%3Aget",
      [
        FlaxParameter(
          "receiver",
          _flaxBinding1460,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding22,
      _enum_Tristate_get_value,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Tristate.hasConflict%3Acall",
      [
        FlaxParameter(
          "receiver",
          _flaxBinding1460,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "other",
          _flaxBinding1460,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding0,
      _enum_Tristate_call_hasConflict,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Tristate.merge%3Acall",
      [
        FlaxParameter(
          "receiver",
          _flaxBinding1460,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "other",
          _flaxBinding1460,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1460,
      _enum_Tristate_call_merge,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dart_ui#function:Tristate.toBoolOrNull%3Acall",
      [
        FlaxParameter(
          "receiver",
          _flaxBinding1460,
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      _flaxBinding1487,
      _enum_Tristate_call_toBoolOrNull,
    ),
    const FlaxFunctionBinding.constant(
      "flax.core/sdk_dart_ui#read:ViewPadding.zero",
      _flaxBinding320,
      api.ViewPadding.zero,
    ),
  ],
  moduleId: "flax.core/sdk_dart_ui",
  dependencyModules: ["flax.core/flutter"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
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
    case '@implementation':
      return _FontFeatureProxy(
        values['@peer'] as FlaxProxyPeer,
        values["feature"] as String,
        values["value"] as int,
      );
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
    case '@implementation':
      return _FontVariationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["axis"] as String,
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
    case '@implementation':
      return _LocaleProxy(
        values['@peer'] as FlaxProxyPeer,
        values["_languageCode"] as String,
        values["_countryCode"] as String?,
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
  if (!values.containsKey("radius")) {
    (receiver as api.Path).arcToPoint(
      values["arcEnd"] as api.Offset,
      clockwise: values["clockwise"] as bool,
      largeArc: values["largeArc"] as bool,
      rotation: values["rotation"] as double,
    );
    return null;
  }
  (receiver as api.Path).arcToPoint(
    values["arcEnd"] as api.Offset,
    clockwise: values["clockwise"] as bool,
    largeArc: values["largeArc"] as bool,
    radius: values["radius"] as api.Radius,
    rotation: values["rotation"] as double,
  );
  return null;
}

Object? _Path_relativeArcToPoint(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("radius")) {
    (receiver as api.Path).relativeArcToPoint(
      values["arcEndDelta"] as api.Offset,
      clockwise: values["clockwise"] as bool,
      largeArc: values["largeArc"] as bool,
      rotation: values["rotation"] as double,
    );
    return null;
  }
  (receiver as api.Path).relativeArcToPoint(
    values["arcEndDelta"] as api.Offset,
    clockwise: values["clockwise"] as bool,
    largeArc: values["largeArc"] as bool,
    radius: values["radius"] as api.Radius,
    rotation: values["rotation"] as double,
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
    case '@implementation':
      if (!values.containsKey("timeStamp")) {
        return _PointerDataProxy(
          values['@peer'] as FlaxProxyPeer,
          viewId: values["viewId"] as int,
          embedderId: values["embedderId"] as int,
          change: values["change"] as api.PointerChange,
          kind: values["kind"] as api.PointerDeviceKind,
          signalKind: values["signalKind"] as api.PointerSignalKind?,
          device: values["device"] as int,
          pointerIdentifier: values["pointerIdentifier"] as int,
          physicalX: values["physicalX"] as double,
          physicalY: values["physicalY"] as double,
          physicalDeltaX: values["physicalDeltaX"] as double,
          physicalDeltaY: values["physicalDeltaY"] as double,
          buttons: values["buttons"] as int,
          obscured: values["obscured"] as bool,
          synthesized: values["synthesized"] as bool,
          pressure: values["pressure"] as double,
          pressureMin: values["pressureMin"] as double,
          pressureMax: values["pressureMax"] as double,
          distance: values["distance"] as double,
          distanceMax: values["distanceMax"] as double,
          size: values["size"] as double,
          radiusMajor: values["radiusMajor"] as double,
          radiusMinor: values["radiusMinor"] as double,
          radiusMin: values["radiusMin"] as double,
          radiusMax: values["radiusMax"] as double,
          orientation: values["orientation"] as double,
          tilt: values["tilt"] as double,
          platformData: values["platformData"] as int,
          scrollDeltaX: values["scrollDeltaX"] as double,
          scrollDeltaY: values["scrollDeltaY"] as double,
          panX: values["panX"] as double,
          panY: values["panY"] as double,
          panDeltaX: values["panDeltaX"] as double,
          panDeltaY: values["panDeltaY"] as double,
          scale: values["scale"] as double,
          rotation: values["rotation"] as double,
          onRespond:
              values["onRespond"]
                  as void Function({bool allowPlatformDefault})?,
        );
      }
      return _PointerDataProxy(
        values['@peer'] as FlaxProxyPeer,
        viewId: values["viewId"] as int,
        embedderId: values["embedderId"] as int,
        timeStamp: values["timeStamp"] as api2.Duration,
        change: values["change"] as api.PointerChange,
        kind: values["kind"] as api.PointerDeviceKind,
        signalKind: values["signalKind"] as api.PointerSignalKind?,
        device: values["device"] as int,
        pointerIdentifier: values["pointerIdentifier"] as int,
        physicalX: values["physicalX"] as double,
        physicalY: values["physicalY"] as double,
        physicalDeltaX: values["physicalDeltaX"] as double,
        physicalDeltaY: values["physicalDeltaY"] as double,
        buttons: values["buttons"] as int,
        obscured: values["obscured"] as bool,
        synthesized: values["synthesized"] as bool,
        pressure: values["pressure"] as double,
        pressureMin: values["pressureMin"] as double,
        pressureMax: values["pressureMax"] as double,
        distance: values["distance"] as double,
        distanceMax: values["distanceMax"] as double,
        size: values["size"] as double,
        radiusMajor: values["radiusMajor"] as double,
        radiusMinor: values["radiusMinor"] as double,
        radiusMin: values["radiusMin"] as double,
        radiusMax: values["radiusMax"] as double,
        orientation: values["orientation"] as double,
        tilt: values["tilt"] as double,
        platformData: values["platformData"] as int,
        scrollDeltaX: values["scrollDeltaX"] as double,
        scrollDeltaY: values["scrollDeltaY"] as double,
        panX: values["panX"] as double,
        panY: values["panY"] as double,
        panDeltaX: values["panDeltaX"] as double,
        panDeltaY: values["panDeltaY"] as double,
        scale: values["scale"] as double,
        rotation: values["rotation"] as double,
        onRespond:
            values["onRespond"] as void Function({bool allowPlatformDefault})?,
      );
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
    case '@implementation':
      if (!values.containsKey("data")) {
        return _PointerDataPacketProxy(values['@peer'] as FlaxProxyPeer);
      }
      return _PointerDataPacketProxy(
        values['@peer'] as FlaxProxyPeer,
        data: values["data"] as List<api.PointerData>,
      );
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
      if (!values.containsKey("topLeft")) {
        if (!values.containsKey("topRight")) {
          if (!values.containsKey("bottomRight")) {
            if (!values.containsKey("bottomLeft")) {
              return api.RRect.fromLTRBAndCorners(
                values["left"] as double,
                values["top"] as double,
                values["right"] as double,
                values["bottom"] as double,
              );
            }
            return api.RRect.fromLTRBAndCorners(
              values["left"] as double,
              values["top"] as double,
              values["right"] as double,
              values["bottom"] as double,
              bottomLeft: values["bottomLeft"] as api.Radius,
            );
          }
          if (!values.containsKey("bottomLeft")) {
            return api.RRect.fromLTRBAndCorners(
              values["left"] as double,
              values["top"] as double,
              values["right"] as double,
              values["bottom"] as double,
              bottomRight: values["bottomRight"] as api.Radius,
            );
          }
          return api.RRect.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            bottomRight: values["bottomRight"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomRight")) {
          if (!values.containsKey("bottomLeft")) {
            return api.RRect.fromLTRBAndCorners(
              values["left"] as double,
              values["top"] as double,
              values["right"] as double,
              values["bottom"] as double,
              topRight: values["topRight"] as api.Radius,
            );
          }
          return api.RRect.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topRight: values["topRight"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomLeft")) {
          return api.RRect.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topRight: values["topRight"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        return api.RRect.fromLTRBAndCorners(
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          topRight: values["topRight"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("topRight")) {
        if (!values.containsKey("bottomRight")) {
          if (!values.containsKey("bottomLeft")) {
            return api.RRect.fromLTRBAndCorners(
              values["left"] as double,
              values["top"] as double,
              values["right"] as double,
              values["bottom"] as double,
              topLeft: values["topLeft"] as api.Radius,
            );
          }
          return api.RRect.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topLeft: values["topLeft"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomLeft")) {
          return api.RRect.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topLeft: values["topLeft"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        return api.RRect.fromLTRBAndCorners(
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          topLeft: values["topLeft"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomRight")) {
        if (!values.containsKey("bottomLeft")) {
          return api.RRect.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topLeft: values["topLeft"] as api.Radius,
            topRight: values["topRight"] as api.Radius,
          );
        }
        return api.RRect.fromLTRBAndCorners(
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomLeft")) {
        return api.RRect.fromLTRBAndCorners(
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
        );
      }
      return api.RRect.fromLTRBAndCorners(
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
        topLeft: values["topLeft"] as api.Radius,
        topRight: values["topRight"] as api.Radius,
        bottomRight: values["bottomRight"] as api.Radius,
        bottomLeft: values["bottomLeft"] as api.Radius,
      );
    case "fromRectAndCorners":
      if (!values.containsKey("topLeft")) {
        if (!values.containsKey("topRight")) {
          if (!values.containsKey("bottomRight")) {
            if (!values.containsKey("bottomLeft")) {
              return api.RRect.fromRectAndCorners(values["rect"] as api.Rect);
            }
            return api.RRect.fromRectAndCorners(
              values["rect"] as api.Rect,
              bottomLeft: values["bottomLeft"] as api.Radius,
            );
          }
          if (!values.containsKey("bottomLeft")) {
            return api.RRect.fromRectAndCorners(
              values["rect"] as api.Rect,
              bottomRight: values["bottomRight"] as api.Radius,
            );
          }
          return api.RRect.fromRectAndCorners(
            values["rect"] as api.Rect,
            bottomRight: values["bottomRight"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomRight")) {
          if (!values.containsKey("bottomLeft")) {
            return api.RRect.fromRectAndCorners(
              values["rect"] as api.Rect,
              topRight: values["topRight"] as api.Radius,
            );
          }
          return api.RRect.fromRectAndCorners(
            values["rect"] as api.Rect,
            topRight: values["topRight"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomLeft")) {
          return api.RRect.fromRectAndCorners(
            values["rect"] as api.Rect,
            topRight: values["topRight"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        return api.RRect.fromRectAndCorners(
          values["rect"] as api.Rect,
          topRight: values["topRight"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("topRight")) {
        if (!values.containsKey("bottomRight")) {
          if (!values.containsKey("bottomLeft")) {
            return api.RRect.fromRectAndCorners(
              values["rect"] as api.Rect,
              topLeft: values["topLeft"] as api.Radius,
            );
          }
          return api.RRect.fromRectAndCorners(
            values["rect"] as api.Rect,
            topLeft: values["topLeft"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomLeft")) {
          return api.RRect.fromRectAndCorners(
            values["rect"] as api.Rect,
            topLeft: values["topLeft"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        return api.RRect.fromRectAndCorners(
          values["rect"] as api.Rect,
          topLeft: values["topLeft"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomRight")) {
        if (!values.containsKey("bottomLeft")) {
          return api.RRect.fromRectAndCorners(
            values["rect"] as api.Rect,
            topLeft: values["topLeft"] as api.Radius,
            topRight: values["topRight"] as api.Radius,
          );
        }
        return api.RRect.fromRectAndCorners(
          values["rect"] as api.Rect,
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomLeft")) {
        return api.RRect.fromRectAndCorners(
          values["rect"] as api.Rect,
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
        );
      }
      return api.RRect.fromRectAndCorners(
        values["rect"] as api.Rect,
        topLeft: values["topLeft"] as api.Radius,
        topRight: values["topRight"] as api.Radius,
        bottomRight: values["bottomRight"] as api.Radius,
        bottomLeft: values["bottomLeft"] as api.Radius,
      );
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
      if (!values.containsKey("topLeft")) {
        if (!values.containsKey("topRight")) {
          if (!values.containsKey("bottomRight")) {
            if (!values.containsKey("bottomLeft")) {
              return api.RSuperellipse.fromLTRBAndCorners(
                values["left"] as double,
                values["top"] as double,
                values["right"] as double,
                values["bottom"] as double,
              );
            }
            return api.RSuperellipse.fromLTRBAndCorners(
              values["left"] as double,
              values["top"] as double,
              values["right"] as double,
              values["bottom"] as double,
              bottomLeft: values["bottomLeft"] as api.Radius,
            );
          }
          if (!values.containsKey("bottomLeft")) {
            return api.RSuperellipse.fromLTRBAndCorners(
              values["left"] as double,
              values["top"] as double,
              values["right"] as double,
              values["bottom"] as double,
              bottomRight: values["bottomRight"] as api.Radius,
            );
          }
          return api.RSuperellipse.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            bottomRight: values["bottomRight"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomRight")) {
          if (!values.containsKey("bottomLeft")) {
            return api.RSuperellipse.fromLTRBAndCorners(
              values["left"] as double,
              values["top"] as double,
              values["right"] as double,
              values["bottom"] as double,
              topRight: values["topRight"] as api.Radius,
            );
          }
          return api.RSuperellipse.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topRight: values["topRight"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomLeft")) {
          return api.RSuperellipse.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topRight: values["topRight"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        return api.RSuperellipse.fromLTRBAndCorners(
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          topRight: values["topRight"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("topRight")) {
        if (!values.containsKey("bottomRight")) {
          if (!values.containsKey("bottomLeft")) {
            return api.RSuperellipse.fromLTRBAndCorners(
              values["left"] as double,
              values["top"] as double,
              values["right"] as double,
              values["bottom"] as double,
              topLeft: values["topLeft"] as api.Radius,
            );
          }
          return api.RSuperellipse.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topLeft: values["topLeft"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomLeft")) {
          return api.RSuperellipse.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topLeft: values["topLeft"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        return api.RSuperellipse.fromLTRBAndCorners(
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          topLeft: values["topLeft"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomRight")) {
        if (!values.containsKey("bottomLeft")) {
          return api.RSuperellipse.fromLTRBAndCorners(
            values["left"] as double,
            values["top"] as double,
            values["right"] as double,
            values["bottom"] as double,
            topLeft: values["topLeft"] as api.Radius,
            topRight: values["topRight"] as api.Radius,
          );
        }
        return api.RSuperellipse.fromLTRBAndCorners(
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomLeft")) {
        return api.RSuperellipse.fromLTRBAndCorners(
          values["left"] as double,
          values["top"] as double,
          values["right"] as double,
          values["bottom"] as double,
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
        );
      }
      return api.RSuperellipse.fromLTRBAndCorners(
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
        topLeft: values["topLeft"] as api.Radius,
        topRight: values["topRight"] as api.Radius,
        bottomRight: values["bottomRight"] as api.Radius,
        bottomLeft: values["bottomLeft"] as api.Radius,
      );
    case "fromRectAndCorners":
      if (!values.containsKey("topLeft")) {
        if (!values.containsKey("topRight")) {
          if (!values.containsKey("bottomRight")) {
            if (!values.containsKey("bottomLeft")) {
              return api.RSuperellipse.fromRectAndCorners(
                values["rect"] as api.Rect,
              );
            }
            return api.RSuperellipse.fromRectAndCorners(
              values["rect"] as api.Rect,
              bottomLeft: values["bottomLeft"] as api.Radius,
            );
          }
          if (!values.containsKey("bottomLeft")) {
            return api.RSuperellipse.fromRectAndCorners(
              values["rect"] as api.Rect,
              bottomRight: values["bottomRight"] as api.Radius,
            );
          }
          return api.RSuperellipse.fromRectAndCorners(
            values["rect"] as api.Rect,
            bottomRight: values["bottomRight"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomRight")) {
          if (!values.containsKey("bottomLeft")) {
            return api.RSuperellipse.fromRectAndCorners(
              values["rect"] as api.Rect,
              topRight: values["topRight"] as api.Radius,
            );
          }
          return api.RSuperellipse.fromRectAndCorners(
            values["rect"] as api.Rect,
            topRight: values["topRight"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomLeft")) {
          return api.RSuperellipse.fromRectAndCorners(
            values["rect"] as api.Rect,
            topRight: values["topRight"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        return api.RSuperellipse.fromRectAndCorners(
          values["rect"] as api.Rect,
          topRight: values["topRight"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("topRight")) {
        if (!values.containsKey("bottomRight")) {
          if (!values.containsKey("bottomLeft")) {
            return api.RSuperellipse.fromRectAndCorners(
              values["rect"] as api.Rect,
              topLeft: values["topLeft"] as api.Radius,
            );
          }
          return api.RSuperellipse.fromRectAndCorners(
            values["rect"] as api.Rect,
            topLeft: values["topLeft"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomLeft")) {
          return api.RSuperellipse.fromRectAndCorners(
            values["rect"] as api.Rect,
            topLeft: values["topLeft"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        return api.RSuperellipse.fromRectAndCorners(
          values["rect"] as api.Rect,
          topLeft: values["topLeft"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomRight")) {
        if (!values.containsKey("bottomLeft")) {
          return api.RSuperellipse.fromRectAndCorners(
            values["rect"] as api.Rect,
            topLeft: values["topLeft"] as api.Radius,
            topRight: values["topRight"] as api.Radius,
          );
        }
        return api.RSuperellipse.fromRectAndCorners(
          values["rect"] as api.Rect,
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomLeft")) {
        return api.RSuperellipse.fromRectAndCorners(
          values["rect"] as api.Rect,
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
        );
      }
      return api.RSuperellipse.fromRectAndCorners(
        values["rect"] as api.Rect,
        topLeft: values["topLeft"] as api.Radius,
        topRight: values["topRight"] as api.Radius,
        bottomRight: values["bottomRight"] as api.Radius,
        bottomLeft: values["bottomLeft"] as api.Radius,
      );
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
  if (!values.containsKey("offset")) {
    return (receiver as api.SceneBuilder).pushOpacity(
      values["alpha"] as int,
      oldLayer: values["oldLayer"] as api.OpacityEngineLayer?,
    );
  }
  return (receiver as api.SceneBuilder).pushOpacity(
    values["alpha"] as int,
    offset: values["offset"] as api.Offset?,
    oldLayer: values["oldLayer"] as api.OpacityEngineLayer?,
  );
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
  if (!values.containsKey("offset")) {
    return (receiver as api.SceneBuilder).pushImageFilter(
      values["filter"] as api.ImageFilter,
      oldLayer: values["oldLayer"] as api.ImageFilterEngineLayer?,
    );
  }
  return (receiver as api.SceneBuilder).pushImageFilter(
    values["filter"] as api.ImageFilter,
    offset: values["offset"] as api.Offset,
    oldLayer: values["oldLayer"] as api.ImageFilterEngineLayer?,
  );
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
  if (!values.containsKey("offset")) {
    (receiver as api.SceneBuilder).addTexture(
      values["textureId"] as int,
      filterQuality: values["filterQuality"] as api.FilterQuality,
      freeze: values["freeze"] as bool,
      height: values["height"] as double,
      width: values["width"] as double,
    );
    return null;
  }
  (receiver as api.SceneBuilder).addTexture(
    values["textureId"] as int,
    filterQuality: values["filterQuality"] as api.FilterQuality,
    freeze: values["freeze"] as bool,
    height: values["height"] as double,
    offset: values["offset"] as api.Offset,
    width: values["width"] as double,
  );
  return null;
}

Object? _SceneBuilder_addPlatformView(
  Object receiver,
  Map<String, Object?> values,
) {
  if (!values.containsKey("offset")) {
    (receiver as api.SceneBuilder).addPlatformView(
      values["viewId"] as int,
      height: values["height"] as double,
      width: values["width"] as double,
    );
    return null;
  }
  (receiver as api.SceneBuilder).addPlatformView(
    values["viewId"] as int,
    height: values["height"] as double,
    offset: values["offset"] as api.Offset,
    width: values["width"] as double,
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
  if (!values.containsKey("arguments")) {
    return (receiver as api.SemanticsActionEvent).copyWith(
      nodeId: values["nodeId"] as int?,
      type: values["type"] as api.SemanticsAction?,
      viewId: values["viewId"] as int?,
    );
  }
  return (receiver as api.SemanticsActionEvent).copyWith(
    arguments: values["arguments"],
    nodeId: values["nodeId"] as int?,
    type: values["type"] as api.SemanticsAction?,
    viewId: values["viewId"] as int?,
  );
}

Object? _SemanticsActionEvent_super_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  if (!values.containsKey("arguments")) {
    return (receiver as _SemanticsActionEventProxy)._flaxSuper_copyWith(
      nodeId: values["nodeId"] as int?,
      type: values["type"] as api.SemanticsAction?,
      viewId: values["viewId"] as int?,
    );
  }
  return (receiver as _SemanticsActionEventProxy)._flaxSuper_copyWith(
    arguments: values["arguments"],
    nodeId: values["nodeId"] as int?,
    type: values["type"] as api.SemanticsAction?,
    viewId: values["viewId"] as int?,
  );
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
    case '@implementation':
      if (!values.containsKey("color")) {
        if (!values.containsKey("offset")) {
          return _ShadowProxy(
            values['@peer'] as FlaxProxyPeer,
            blurRadius: values["blurRadius"] as double,
          );
        }
        return _ShadowProxy(
          values['@peer'] as FlaxProxyPeer,
          offset: values["offset"] as api.Offset,
          blurRadius: values["blurRadius"] as double,
        );
      }
      if (!values.containsKey("offset")) {
        return _ShadowProxy(
          values['@peer'] as FlaxProxyPeer,
          color: values["color"] as api.Color,
          blurRadius: values["blurRadius"] as double,
        );
      }
      return _ShadowProxy(
        values['@peer'] as FlaxProxyPeer,
        color: values["color"] as api.Color,
        offset: values["offset"] as api.Offset,
        blurRadius: values["blurRadius"] as double,
      );
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
    case '@implementation':
      return _VerticesProxy(
        values['@peer'] as FlaxProxyPeer,
        values["mode"] as api.VertexMode,
        values["positions"] as List<api.Offset>,
        colors: values["colors"] as List<api.Color>?,
        textureCoordinates: values["textureCoordinates"] as List<api.Offset>?,
        indices: values["indices"] as List<int>?,
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
    case '@implementation':
      return _ViewConstraintsProxy(
        values['@peer'] as FlaxProxyPeer,
        minWidth: values["minWidth"] as double,
        maxWidth: values["maxWidth"] as double,
        minHeight: values["minHeight"] as double,
        maxHeight: values["maxHeight"] as double,
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
    if (identical(physicalTouchSlop, _flaxOmitted)) {
      if (identical(physicalDoubleTapSlop, _flaxOmitted)) {
        return super.copyWith();
      }
      return super.copyWith(
        physicalDoubleTapSlop: physicalDoubleTapSlop as double?,
      );
    }
    if (identical(physicalDoubleTapSlop, _flaxOmitted)) {
      return super.copyWith(physicalTouchSlop: physicalTouchSlop as double?);
    }
    return super.copyWith(
      physicalTouchSlop: physicalTouchSlop as double?,
      physicalDoubleTapSlop: physicalDoubleTapSlop as double?,
    );
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
    if (identical(type, _flaxOmitted)) {
      if (identical(viewId, _flaxOmitted)) {
        if (identical(nodeId, _flaxOmitted)) {
          if (identical(arguments, _flaxOmitted)) {
            return super.copyWith();
          }
          return super.copyWith(arguments: arguments);
        }
        if (identical(arguments, _flaxOmitted)) {
          return super.copyWith(nodeId: nodeId as int?);
        }
        return super.copyWith(nodeId: nodeId as int?, arguments: arguments);
      }
      if (identical(nodeId, _flaxOmitted)) {
        if (identical(arguments, _flaxOmitted)) {
          return super.copyWith(viewId: viewId as int?);
        }
        return super.copyWith(viewId: viewId as int?, arguments: arguments);
      }
      if (identical(arguments, _flaxOmitted)) {
        return super.copyWith(viewId: viewId as int?, nodeId: nodeId as int?);
      }
      return super.copyWith(
        viewId: viewId as int?,
        nodeId: nodeId as int?,
        arguments: arguments,
      );
    }
    if (identical(viewId, _flaxOmitted)) {
      if (identical(nodeId, _flaxOmitted)) {
        if (identical(arguments, _flaxOmitted)) {
          return super.copyWith(type: type as api.SemanticsAction?);
        }
        return super.copyWith(
          type: type as api.SemanticsAction?,
          arguments: arguments,
        );
      }
      if (identical(arguments, _flaxOmitted)) {
        return super.copyWith(
          type: type as api.SemanticsAction?,
          nodeId: nodeId as int?,
        );
      }
      return super.copyWith(
        type: type as api.SemanticsAction?,
        nodeId: nodeId as int?,
        arguments: arguments,
      );
    }
    if (identical(nodeId, _flaxOmitted)) {
      if (identical(arguments, _flaxOmitted)) {
        return super.copyWith(
          type: type as api.SemanticsAction?,
          viewId: viewId as int?,
        );
      }
      return super.copyWith(
        type: type as api.SemanticsAction?,
        viewId: viewId as int?,
        arguments: arguments,
      );
    }
    if (identical(arguments, _flaxOmitted)) {
      return super.copyWith(
        type: type as api.SemanticsAction?,
        viewId: viewId as int?,
        nodeId: nodeId as int?,
      );
    }
    return super.copyWith(
      type: type as api.SemanticsAction?,
      viewId: viewId as int?,
      nodeId: nodeId as int?,
      arguments: arguments,
    );
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
    return (Function.apply(super.copyWith, <Object?>[], <Symbol, Object?>{
      if (!identical(isChecked, _flaxOmitted))
        #isChecked: isChecked as api.CheckedState?,
      if (!identical(isSelected, _flaxOmitted))
        #isSelected: isSelected as api.Tristate?,
      if (!identical(isEnabled, _flaxOmitted))
        #isEnabled: isEnabled as api.Tristate?,
      if (!identical(isToggled, _flaxOmitted))
        #isToggled: isToggled as api.Tristate?,
      if (!identical(isExpanded, _flaxOmitted))
        #isExpanded: isExpanded as api.Tristate?,
      if (!identical(isRequired, _flaxOmitted))
        #isRequired: isRequired as api.Tristate?,
      if (!identical(isFocused, _flaxOmitted))
        #isFocused: isFocused as api.Tristate?,
      if (!identical(isButton, _flaxOmitted)) #isButton: isButton as bool?,
      if (!identical(isTextField, _flaxOmitted))
        #isTextField: isTextField as bool?,
      if (!identical(isInMutuallyExclusiveGroup, _flaxOmitted))
        #isInMutuallyExclusiveGroup: isInMutuallyExclusiveGroup as bool?,
      if (!identical(isHeader, _flaxOmitted)) #isHeader: isHeader as bool?,
      if (!identical(isObscured, _flaxOmitted))
        #isObscured: isObscured as bool?,
      if (!identical(scopesRoute, _flaxOmitted))
        #scopesRoute: scopesRoute as bool?,
      if (!identical(namesRoute, _flaxOmitted))
        #namesRoute: namesRoute as bool?,
      if (!identical(isHidden, _flaxOmitted)) #isHidden: isHidden as bool?,
      if (!identical(isImage, _flaxOmitted)) #isImage: isImage as bool?,
      if (!identical(isLiveRegion, _flaxOmitted))
        #isLiveRegion: isLiveRegion as bool?,
      if (!identical(hasImplicitScrolling, _flaxOmitted))
        #hasImplicitScrolling: hasImplicitScrolling as bool?,
      if (!identical(isMultiline, _flaxOmitted))
        #isMultiline: isMultiline as bool?,
      if (!identical(isReadOnly, _flaxOmitted))
        #isReadOnly: isReadOnly as bool?,
      if (!identical(isLink, _flaxOmitted)) #isLink: isLink as bool?,
      if (!identical(isSlider, _flaxOmitted)) #isSlider: isSlider as bool?,
      if (!identical(isKeyboardKey, _flaxOmitted))
        #isKeyboardKey: isKeyboardKey as bool?,
      if (!identical(isAccessibilityFocusBlocked, _flaxOmitted))
        #isAccessibilityFocusBlocked: isAccessibilityFocusBlocked as bool?,
    }) as api.SemanticsFlags);
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
        [
          FlaxParameter(
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
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
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

      return FlaxInstanceMethod([], types.ref<Iterable<_Method0>>(), invoke);
    };
Function _flaxGeneric_PathMetrics_map<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.PathMetrics).map<_Method0>(
          values["toElement"] as _Method0 Function(api.PathMetric e),
        );
      }

      return FlaxInstanceMethod(
        [
          FlaxParameter(
            "toElement",
            types.define<_Method0 Function(api.PathMetric e)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "e",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/sdk_dart_ui#type:PathMetric",
                      ),
                      required: true,
                      positional: true,
                    ),
                  ],
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
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
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

      return FlaxInstanceMethod([], types.ref<Iterable<_Method0>>(), invoke);
    };
Function _flaxGeneric_PathMetrics_expand<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.PathMetrics).expand<_Method0>(
          values["toElements"]
              as Iterable<_Method0> Function(api.PathMetric element),
        );
      }

      return FlaxInstanceMethod(
        [
          FlaxParameter(
            "toElements",
            types.define<Iterable<_Method0> Function(api.PathMetric element)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/sdk_dart_ui#type:PathMetric",
                      ),
                      required: true,
                      positional: true,
                    ),
                  ],
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
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
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

      return FlaxInstanceMethod(
        [
          FlaxParameter(
            "initialValue",
            types.ref<_Method0>(),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "combine",
            types.define<
              _Method0 Function(_Method0 previousValue, api.PathMetric element)
            >(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "previousValue",
                      types.ref<_Method0>(withinCallback: true),
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/sdk_dart_ui#type:PathMetric",
                      ),
                      required: true,
                      positional: true,
                    ),
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
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
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
          [FlaxGetter("length", FlaxTypeRef("int"), _UniformArray_length)],
          {
            "operatorGetIndex": FlaxInstanceMethod(
              <FlaxParameter>[
                FlaxParameter("index", FlaxTypeRef("int"), required: true),
              ],
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
              FlaxCallbackParameter(
                "data",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
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
              FlaxCallbackParameter(
                "data",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "callback",
                types.ref<_Shape1>(withinCallback: true),
                required: true,
                positional: true,
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
              FlaxCallbackParameter(
                "name",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "data",
                types.ref<_Shape1>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "callback",
                types.ref<_Shape2>(withinCallback: true),
                required: true,
                positional: true,
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
              FlaxCallbackParameter(
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
Object _collection8Create() => <double>[];
bool _collection8Matches(Object value) => value is List<double>;
Object _collection9Create() => <double>[];
Object _collection9Restore(Object value) =>
    (value as Iterable<Object?>).cast<double>();
bool _collection9Matches(Object value) => value is Iterable<double>;
Object _collection10Create() => <api.DisplayFeature>[];
bool _collection10Matches(Object value) => value is List<api.DisplayFeature>;
Object _collection11Create() => <api.DisplayFeature>[];
Object _collection11Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.DisplayFeature>();
bool _collection11Matches(Object value) =>
    value is Iterable<api.DisplayFeature>;
Object _collection12Create() => <api2.StackTrace>[];
bool _collection12Matches(Object value) => value is List<api2.StackTrace>;
Object _collection13Create() => <api2.StackTrace>[];
Object _collection13Restore(Object value) =>
    (value as Iterable<Object?>).cast<api2.StackTrace>();
bool _collection13Matches(Object value) => value is Iterable<api2.StackTrace>;
Object _collection14Create() => <api.TextBox>[];
bool _collection14Matches(Object value) => value is List<api.TextBox>;
Object _collection15Create() => <api.TextBox>[];
Object _collection15Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.TextBox>();
bool _collection15Matches(Object value) => value is Iterable<api.TextBox>;
Object _collection16Create() => <api.LineMetrics>[];
bool _collection16Matches(Object value) => value is List<api.LineMetrics>;
Object _collection17Create() => <api.LineMetrics>[];
Object _collection17Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.LineMetrics>();
bool _collection17Matches(Object value) => value is Iterable<api.LineMetrics>;
Object _collection18Create() => <Object?>[];
Object _collection18Restore(Object value) =>
    (value as Iterable<Object?>).cast<Object?>();
bool _collection18Matches(Object value) => value is Iterable<Object?>;
Object _collection19Create() => <api.PathMetric>[];
Object _collection19Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.PathMetric>();
bool _collection19Matches(Object value) => value is Iterable<api.PathMetric>;
Object _collection20Create() => <api.PathMetric>[];
bool _collection20Matches(Object value) => value is List<api.PathMetric>;
Object _collection21Create() => <api.PathMetric>{};
bool _collection21Matches(Object value) => value is Set<api.PathMetric>;
Object _collection22Create() => <api.Display>[];
Object _collection22Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Display>();
bool _collection22Matches(Object value) => value is Iterable<api.Display>;
Object _collection23Create() => <api.FlutterView>[];
Object _collection23Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.FlutterView>();
bool _collection23Matches(Object value) => value is Iterable<api.FlutterView>;
Object _collection24Create() => <api.FrameTiming>[];
bool _collection24Matches(Object value) => value is List<api.FrameTiming>;
Object _collection25Create() => <api.FrameTiming>[];
Object _collection25Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.FrameTiming>();
bool _collection25Matches(Object value) => value is Iterable<api.FrameTiming>;
Object _collection26Create() => <api.Locale>[];
bool _collection26Matches(Object value) => value is List<api.Locale>;
Object _collection27Create() => <api.Locale>[];
Object _collection27Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Locale>();
bool _collection27Matches(Object value) => value is Iterable<api.Locale>;
Object _collection28Create() => <api.PointerData>[];
bool _collection28Matches(Object value) => value is List<api.PointerData>;
Object _collection29Create() => <api.PointerData>[];
Object _collection29Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.PointerData>();
bool _collection29Matches(Object value) => value is Iterable<api.PointerData>;
Object _collection30Create() => <String>[];
bool _collection30Matches(Object value) => value is List<String>;
Object _collection31Create() => <String>[];
Object _collection31Restore(Object value) =>
    (value as Iterable<Object?>).cast<String>();
bool _collection31Matches(Object value) => value is Iterable<String>;
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
    value.then<api1.ByteData?>((value) => value as api1.ByteData?);
Future<Object?> _future3Adapt(Future<Object?> value) =>
    value.then<api.Codec>((value) => value as api.Codec);
Future<Object?> _future4Adapt(Future<Object?> value) =>
    value.then<api.Image>((value) => value as api.Image);
Future<Object?> _future5Adapt(Future<Object?> value) => value;
Future<Object?> _future6Adapt(Future<Object?> value) =>
    value.then<api.FragmentProgram>((value) => value as api.FragmentProgram);
Future<Object?> _future7Adapt(Future<Object?> value) =>
    value.then<api.ImageDescriptor>((value) => value as api.ImageDescriptor);
Future<Object?> _future8Adapt(Future<Object?> value) =>
    value.then<api.ImmutableBuffer>((value) => value as api.ImmutableBuffer);
const _flaxBinding0 = FlaxTypeRef("bool");
const _flaxBinding1 = FlaxGetter(
  "accessibleNavigation",
  _flaxBinding0,
  _AccessibilityFeatures_accessibleNavigation,
);
const _flaxBinding2 = FlaxGetter(
  "invertColors",
  _flaxBinding0,
  _AccessibilityFeatures_invertColors,
);
const _flaxBinding3 = FlaxGetter(
  "disableAnimations",
  _flaxBinding0,
  _AccessibilityFeatures_disableAnimations,
);
const _flaxBinding4 = FlaxGetter(
  "boldText",
  _flaxBinding0,
  _AccessibilityFeatures_boldText,
);
const _flaxBinding5 = FlaxGetter(
  "reduceMotion",
  _flaxBinding0,
  _AccessibilityFeatures_reduceMotion,
);
const _flaxBinding6 = FlaxGetter(
  "highContrast",
  _flaxBinding0,
  _AccessibilityFeatures_highContrast,
);
const _flaxBinding7 = FlaxGetter(
  "onOffSwitchLabels",
  _flaxBinding0,
  _AccessibilityFeatures_onOffSwitchLabels,
);
const _flaxBinding8 = FlaxGetter(
  "supportsAnnounce",
  _flaxBinding0,
  _AccessibilityFeatures_supportsAnnounce,
);
const _flaxBinding9 = FlaxGetter(
  "autoPlayAnimatedImages",
  _flaxBinding0,
  _AccessibilityFeatures_autoPlayAnimatedImages,
);
const _flaxBinding10 = FlaxGetter(
  "autoPlayVideos",
  _flaxBinding0,
  _AccessibilityFeatures_autoPlayVideos,
);
const _flaxBinding11 = FlaxGetter(
  "deterministicCursor",
  _flaxBinding0,
  _AccessibilityFeatures_deterministicCursor,
);
const _flaxBinding12 = <FlaxParameter>[];
const _flaxBinding13 = FlaxTypeRef("String");
const _flaxBinding14 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _AccessibilityFeatures_toString,
);
const _flaxBinding15 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:AccessibilityFeatures",
  [
    _flaxBinding1,
    _flaxBinding2,
    _flaxBinding3,
    _flaxBinding4,
    _flaxBinding5,
    _flaxBinding6,
    _flaxBinding7,
    _flaxBinding8,
    _flaxBinding9,
    _flaxBinding10,
    _flaxBinding11,
  ],
  {"toString": _flaxBinding14},
  constructors: {},
  create: _createAccessibilityFeatures,
  matches: _isAccessibilityFeatures,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding16 = FlaxTypeRef("void");
const _flaxBinding17 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _EngineLayer_dispose,
);
const _flaxBinding18 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding16,
  id: "callback:<>()->void:",
);
const _flaxBinding19 = FlaxProxyMember("dispose", 0, _flaxBinding18);
const _flaxBinding20 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:EngineLayer",
  [],
  {"dispose": _flaxBinding17},
  constructors: {"@implementation": _flaxBinding12},
  create: _createEngineLayer,
  matches: _isEngineLayer,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding19]),
);
const _flaxBinding21 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding22 = FlaxTypeRef("int");
const _flaxBinding23 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding22,
  _CallbackHandle_toRawHandle,
);
const _flaxBinding24 = <FlaxParameter>[
  FlaxParameter("_handle", _flaxBinding22, required: true),
];
const _flaxBinding25 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding22,
  id: "callback:<>()->int:",
);
const _flaxBinding26 = FlaxProxyMember(
  "toRawHandle",
  0,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding27 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:CallbackHandle",
  [],
  {
    "toRawHandle": _flaxBinding23,
    "@super:toRawHandle": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding22,
      _CallbackHandle_super_toRawHandle,
    ),
  },
  constructors: {
    "@implementation": _flaxBinding24,
    "@implementation:fromRawHandle": _flaxBinding24,
  },
  create: _createCallbackHandle,
  matches: _isCallbackHandle,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding26]),
);
const _flaxBinding28 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Canvas_save,
);
const _flaxBinding29 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Rect",
  nullable: true,
);
const _flaxBinding30 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Paint",
);
const _flaxBinding31 = <FlaxParameter>[
  FlaxParameter("bounds", _flaxBinding29, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding32 = FlaxInstanceMethod(
  _flaxBinding31,
  _flaxBinding16,
  _Canvas_saveLayer,
);
const _flaxBinding33 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Canvas_restore,
);
const _flaxBinding34 = <FlaxParameter>[
  FlaxParameter("count", _flaxBinding22, required: true),
];
const _flaxBinding35 = FlaxInstanceMethod(
  _flaxBinding34,
  _flaxBinding16,
  _Canvas_restoreToCount,
);
const _flaxBinding36 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding22,
  _Canvas_getSaveCount,
);
const _flaxBinding37 = FlaxTypeRef("double");
const _flaxBinding38 = <FlaxParameter>[
  FlaxParameter("dx", _flaxBinding37, required: true),
  FlaxParameter("dy", _flaxBinding37, required: true),
];
const _flaxBinding39 = FlaxInstanceMethod(
  _flaxBinding38,
  _flaxBinding16,
  _Canvas_translate,
);
const _flaxBinding40 = FlaxTypeRef("double", nullable: true);
const _flaxBinding41 = <FlaxParameter>[
  FlaxParameter("sx", _flaxBinding37, required: true),
  FlaxParameter("sy", _flaxBinding40, required: false),
];
const _flaxBinding42 = FlaxInstanceMethod(
  _flaxBinding41,
  _flaxBinding16,
  _Canvas_scale,
);
const _flaxBinding43 = <FlaxParameter>[
  FlaxParameter("radians", _flaxBinding37, required: true),
];
const _flaxBinding44 = FlaxInstanceMethod(
  _flaxBinding43,
  _flaxBinding16,
  _Canvas_rotate,
);
const _flaxBinding45 = <FlaxParameter>[
  FlaxParameter("sx", _flaxBinding37, required: true),
  FlaxParameter("sy", _flaxBinding37, required: true),
];
const _flaxBinding46 = FlaxInstanceMethod(
  _flaxBinding45,
  _flaxBinding16,
  _Canvas_skew,
);
const _flaxBinding47 = FlaxTypeRef("Float64List");
const _flaxBinding48 = <FlaxParameter>[
  FlaxParameter("matrix4", _flaxBinding47, required: true),
];
const _flaxBinding49 = FlaxInstanceMethod(
  _flaxBinding48,
  _flaxBinding16,
  _Canvas_transform,
);
const _flaxBinding50 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding47,
  _Canvas_getTransform,
);
const _flaxBinding51 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding52 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ClipOp",
);
const _flaxBinding53 = <FlaxParameter>[
  FlaxParameter("rect", _flaxBinding51, required: true),
  FlaxParameter(
    "clipOp",
    _flaxBinding52,
    required: false,
    defaultValue: api.ClipOp.intersect,
  ),
  FlaxParameter(
    "doAntiAlias",
    _flaxBinding0,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding54 = FlaxInstanceMethod(
  _flaxBinding53,
  _flaxBinding16,
  _Canvas_clipRect,
);
const _flaxBinding55 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RRect",
);
const _flaxBinding56 = <FlaxParameter>[
  FlaxParameter("rrect", _flaxBinding55, required: true),
  FlaxParameter(
    "doAntiAlias",
    _flaxBinding0,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding57 = FlaxInstanceMethod(
  _flaxBinding56,
  _flaxBinding16,
  _Canvas_clipRRect,
);
const _flaxBinding58 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RSuperellipse",
);
const _flaxBinding59 = <FlaxParameter>[
  FlaxParameter("rsuperellipse", _flaxBinding58, required: true),
  FlaxParameter(
    "doAntiAlias",
    _flaxBinding0,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding60 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding16,
  _Canvas_clipRSuperellipse,
);
const _flaxBinding61 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Path",
);
const _flaxBinding62 = <FlaxParameter>[
  FlaxParameter("path", _flaxBinding61, required: true),
  FlaxParameter(
    "doAntiAlias",
    _flaxBinding0,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding63 = FlaxInstanceMethod(
  _flaxBinding62,
  _flaxBinding16,
  _Canvas_clipPath,
);
const _flaxBinding64 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding51,
  _Canvas_getLocalClipBounds,
);
const _flaxBinding65 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding51,
  _Canvas_getDestinationClipBounds,
);
const _flaxBinding66 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
);
const _flaxBinding67 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BlendMode",
);
const _flaxBinding68 = <FlaxParameter>[
  FlaxParameter("color", _flaxBinding66, required: true),
  FlaxParameter("blendMode", _flaxBinding67, required: true),
];
const _flaxBinding69 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding16,
  _Canvas_drawColor,
);
const _flaxBinding70 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
);
const _flaxBinding71 = <FlaxParameter>[
  FlaxParameter("p1", _flaxBinding70, required: true),
  FlaxParameter("p2", _flaxBinding70, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding72 = FlaxInstanceMethod(
  _flaxBinding71,
  _flaxBinding16,
  _Canvas_drawLine,
);
const _flaxBinding73 = <FlaxParameter>[
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding74 = FlaxInstanceMethod(
  _flaxBinding73,
  _flaxBinding16,
  _Canvas_drawPaint,
);
const _flaxBinding75 = <FlaxParameter>[
  FlaxParameter("rect", _flaxBinding51, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding76 = FlaxInstanceMethod(
  _flaxBinding75,
  _flaxBinding16,
  _Canvas_drawRect,
);
const _flaxBinding77 = <FlaxParameter>[
  FlaxParameter("rrect", _flaxBinding55, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding78 = FlaxInstanceMethod(
  _flaxBinding77,
  _flaxBinding16,
  _Canvas_drawRRect,
);
const _flaxBinding79 = <FlaxParameter>[
  FlaxParameter("outer", _flaxBinding55, required: true),
  FlaxParameter("inner", _flaxBinding55, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding80 = FlaxInstanceMethod(
  _flaxBinding79,
  _flaxBinding16,
  _Canvas_drawDRRect,
);
const _flaxBinding81 = <FlaxParameter>[
  FlaxParameter("rsuperellipse", _flaxBinding58, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding82 = FlaxInstanceMethod(
  _flaxBinding81,
  _flaxBinding16,
  _Canvas_drawRSuperellipse,
);
const _flaxBinding83 = FlaxInstanceMethod(
  _flaxBinding75,
  _flaxBinding16,
  _Canvas_drawOval,
);
const _flaxBinding84 = <FlaxParameter>[
  FlaxParameter("c", _flaxBinding70, required: true),
  FlaxParameter("radius", _flaxBinding37, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding85 = FlaxInstanceMethod(
  _flaxBinding84,
  _flaxBinding16,
  _Canvas_drawCircle,
);
const _flaxBinding86 = <FlaxParameter>[
  FlaxParameter("rect", _flaxBinding51, required: true),
  FlaxParameter("startAngle", _flaxBinding37, required: true),
  FlaxParameter("sweepAngle", _flaxBinding37, required: true),
  FlaxParameter("useCenter", _flaxBinding0, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding87 = FlaxInstanceMethod(
  _flaxBinding86,
  _flaxBinding16,
  _Canvas_drawArc,
);
const _flaxBinding88 = <FlaxParameter>[
  FlaxParameter("path", _flaxBinding61, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding89 = FlaxInstanceMethod(
  _flaxBinding88,
  _flaxBinding16,
  _Canvas_drawPath,
);
const _flaxBinding90 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Image",
);
const _flaxBinding91 = <FlaxParameter>[
  FlaxParameter("image", _flaxBinding90, required: true),
  FlaxParameter("offset", _flaxBinding70, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding92 = FlaxInstanceMethod(
  _flaxBinding91,
  _flaxBinding16,
  _Canvas_drawImage,
);
const _flaxBinding93 = <FlaxParameter>[
  FlaxParameter("image", _flaxBinding90, required: true),
  FlaxParameter("src", _flaxBinding51, required: true),
  FlaxParameter("dst", _flaxBinding51, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding94 = FlaxInstanceMethod(
  _flaxBinding93,
  _flaxBinding16,
  _Canvas_drawImageRect,
);
const _flaxBinding95 = <FlaxParameter>[
  FlaxParameter("image", _flaxBinding90, required: true),
  FlaxParameter("center", _flaxBinding51, required: true),
  FlaxParameter("dst", _flaxBinding51, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding96 = FlaxInstanceMethod(
  _flaxBinding95,
  _flaxBinding16,
  _Canvas_drawImageNine,
);
const _flaxBinding97 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Picture",
);
const _flaxBinding98 = <FlaxParameter>[
  FlaxParameter("picture", _flaxBinding97, required: true),
];
const _flaxBinding99 = FlaxInstanceMethod(
  _flaxBinding98,
  _flaxBinding16,
  _Canvas_drawPicture,
);
const _flaxBinding100 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Paragraph",
);
const _flaxBinding101 = <FlaxParameter>[
  FlaxParameter("paragraph", _flaxBinding100, required: true),
  FlaxParameter("offset", _flaxBinding70, required: true),
];
const _flaxBinding102 = FlaxInstanceMethod(
  _flaxBinding101,
  _flaxBinding16,
  _Canvas_drawParagraph,
);
const _flaxBinding103 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PointMode",
);
const _flaxBinding104 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding70,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Offset]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding105 = FlaxTypeRef(
  "list",
  item: _flaxBinding70,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Offset]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding104,
);
const _flaxBinding106 = <FlaxParameter>[
  FlaxParameter("pointMode", _flaxBinding103, required: true),
  FlaxParameter("points", _flaxBinding105, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding107 = FlaxInstanceMethod(
  _flaxBinding106,
  _flaxBinding16,
  _Canvas_drawPoints,
);
const _flaxBinding108 = FlaxTypeRef("Float32List");
const _flaxBinding109 = <FlaxParameter>[
  FlaxParameter("pointMode", _flaxBinding103, required: true),
  FlaxParameter("points", _flaxBinding108, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding110 = FlaxInstanceMethod(
  _flaxBinding109,
  _flaxBinding16,
  _Canvas_drawRawPoints,
);
const _flaxBinding111 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Vertices",
);
const _flaxBinding112 = <FlaxParameter>[
  FlaxParameter("vertices", _flaxBinding111, required: true),
  FlaxParameter("blendMode", _flaxBinding67, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding113 = FlaxInstanceMethod(
  _flaxBinding112,
  _flaxBinding16,
  _Canvas_drawVertices,
);
const _flaxBinding114 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RSTransform",
);
const _flaxBinding115 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding114,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:RSTransform]",
    _collection3Create,
    _collection3Matches,
    restore: _collection3Restore,
  ),
);
const _flaxBinding116 = FlaxTypeRef(
  "list",
  item: _flaxBinding114,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:RSTransform]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding115,
);
const _flaxBinding117 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding51,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Rect]",
    _collection5Create,
    _collection5Matches,
    restore: _collection5Restore,
  ),
);
const _flaxBinding118 = FlaxTypeRef(
  "list",
  item: _flaxBinding51,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Rect]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding117,
);
const _flaxBinding119 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding66,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Color]",
    _collection7Create,
    _collection7Matches,
    restore: _collection7Restore,
  ),
);
const _flaxBinding120 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding66,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Color]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding119,
);
const _flaxBinding121 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BlendMode",
  nullable: true,
);
const _flaxBinding122 = <FlaxParameter>[
  FlaxParameter("atlas", _flaxBinding90, required: true),
  FlaxParameter("transforms", _flaxBinding116, required: true),
  FlaxParameter("rects", _flaxBinding118, required: true),
  FlaxParameter("colors", _flaxBinding120, required: true),
  FlaxParameter("blendMode", _flaxBinding121, required: true),
  FlaxParameter("cullRect", _flaxBinding29, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding123 = FlaxInstanceMethod(
  _flaxBinding122,
  _flaxBinding16,
  _Canvas_drawAtlas,
);
const _flaxBinding124 = FlaxTypeRef("Int32List", nullable: true);
const _flaxBinding125 = <FlaxParameter>[
  FlaxParameter("atlas", _flaxBinding90, required: true),
  FlaxParameter("rstTransforms", _flaxBinding108, required: true),
  FlaxParameter("rects", _flaxBinding108, required: true),
  FlaxParameter("colors", _flaxBinding124, required: true),
  FlaxParameter("blendMode", _flaxBinding121, required: true),
  FlaxParameter("cullRect", _flaxBinding29, required: true),
  FlaxParameter("paint", _flaxBinding30, required: true),
];
const _flaxBinding126 = FlaxInstanceMethod(
  _flaxBinding125,
  _flaxBinding16,
  _Canvas_drawRawAtlas,
);
const _flaxBinding127 = <FlaxParameter>[
  FlaxParameter("path", _flaxBinding61, required: true),
  FlaxParameter("color", _flaxBinding66, required: true),
  FlaxParameter("elevation", _flaxBinding37, required: true),
  FlaxParameter("transparentOccluder", _flaxBinding0, required: true),
];
const _flaxBinding128 = FlaxInstanceMethod(
  _flaxBinding127,
  _flaxBinding16,
  _Canvas_drawShadow,
);
const _flaxBinding129 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PictureRecorder",
);
const _flaxBinding130 = <FlaxParameter>[
  FlaxParameter("recorder", _flaxBinding129, required: true),
  FlaxParameter("cullRect", _flaxBinding29, required: false),
];
const _flaxBinding131 = FlaxProxyMember("save", 0, _flaxBinding18);
const _flaxBinding132 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "bounds",
      _flaxBinding29,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:bounds:object?:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding133 = FlaxProxyMember("saveLayer", 0, _flaxBinding132);
const _flaxBinding134 = FlaxProxyMember("restore", 0, _flaxBinding18);
const _flaxBinding135 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "count",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:count:int:)->void:",
);
const _flaxBinding136 = FlaxProxyMember("restoreToCount", 0, _flaxBinding135);
const _flaxBinding137 = FlaxProxyMember("getSaveCount", 0, _flaxBinding25);
const _flaxBinding138 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "dx",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "dy",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:dx:double:,p:r:dy:double:)->void:",
);
const _flaxBinding139 = FlaxProxyMember("translate", 0, _flaxBinding138);
const _flaxBinding140 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "sx",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "sy",
      _flaxBinding40,
      required: false,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:sx:double:,p:o:sy:double?:)->void:",
);
const _flaxBinding141 = FlaxProxyMember("scale", 0, _flaxBinding140);
const _flaxBinding142 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "radians",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:radians:double:)->void:",
);
const _flaxBinding143 = FlaxProxyMember("rotate", 0, _flaxBinding142);
const _flaxBinding144 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "sx",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "sy",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:sx:double:,p:r:sy:double:)->void:",
);
const _flaxBinding145 = FlaxProxyMember("skew", 0, _flaxBinding144);
const _flaxBinding146 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "matrix4",
      _flaxBinding47,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:matrix4:Float64List:)->void:",
);
const _flaxBinding147 = FlaxProxyMember("transform", 0, _flaxBinding146);
const _flaxBinding148 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding47,
  id: "callback:<>()->Float64List:",
);
const _flaxBinding149 = FlaxProxyMember("getTransform", 0, _flaxBinding148);
const _flaxBinding150 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rect",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "clipOp",
      _flaxBinding52,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "doAntiAlias",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,n:o:clipOp:enum:flax.core/sdk_dart_ui#type:ClipOp,n:o:doAntiAlias:bool:)->void:",
);
const _flaxBinding151 = FlaxProxyMember("clipRect", 0, _flaxBinding150);
const _flaxBinding152 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rrect",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "doAntiAlias",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rrect:object:flax.core/sdk_dart_ui#type:RRect,n:o:doAntiAlias:bool:)->void:",
);
const _flaxBinding153 = FlaxProxyMember("clipRRect", 0, _flaxBinding152);
const _flaxBinding154 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rsuperellipse",
      _flaxBinding58,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "doAntiAlias",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rsuperellipse:object:flax.core/sdk_dart_ui#type:RSuperellipse,n:o:doAntiAlias:bool:)->void:",
);
const _flaxBinding155 = FlaxProxyMember(
  "clipRSuperellipse",
  0,
  _flaxBinding154,
);
const _flaxBinding156 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "path",
      _flaxBinding61,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "doAntiAlias",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,n:o:doAntiAlias:bool:)->void:",
);
const _flaxBinding157 = FlaxProxyMember("clipPath", 0, _flaxBinding156);
const _flaxBinding158 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding51,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding159 = FlaxProxyMember(
  "getLocalClipBounds",
  0,
  _flaxBinding158,
);
const _flaxBinding160 = FlaxProxyMember(
  "getDestinationClipBounds",
  0,
  _flaxBinding158,
);
const _flaxBinding161 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "color",
      _flaxBinding66,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "blendMode",
      _flaxBinding67,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:color:object:flax.core/flutter#type:Color,p:r:blendMode:enum:flax.core/sdk_dart_ui#type:BlendMode)->void:",
);
const _flaxBinding162 = FlaxProxyMember("drawColor", 0, _flaxBinding161);
const _flaxBinding163 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "p1",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "p2",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:p1:object:flax.core/flutter#type:Offset,p:r:p2:object:flax.core/flutter#type:Offset,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding164 = FlaxProxyMember("drawLine", 0, _flaxBinding163);
const _flaxBinding165 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding166 = FlaxProxyMember("drawPaint", 0, _flaxBinding165);
const _flaxBinding167 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rect",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding168 = FlaxProxyMember("drawRect", 0, _flaxBinding167);
const _flaxBinding169 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rrect",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rrect:object:flax.core/sdk_dart_ui#type:RRect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding170 = FlaxProxyMember("drawRRect", 0, _flaxBinding169);
const _flaxBinding171 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "outer",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "inner",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:outer:object:flax.core/sdk_dart_ui#type:RRect,p:r:inner:object:flax.core/sdk_dart_ui#type:RRect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding172 = FlaxProxyMember("drawDRRect", 0, _flaxBinding171);
const _flaxBinding173 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rsuperellipse",
      _flaxBinding58,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rsuperellipse:object:flax.core/sdk_dart_ui#type:RSuperellipse,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding174 = FlaxProxyMember(
  "drawRSuperellipse",
  0,
  _flaxBinding173,
);
const _flaxBinding175 = FlaxProxyMember("drawOval", 0, _flaxBinding167);
const _flaxBinding176 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "c",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "radius",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:c:object:flax.core/flutter#type:Offset,p:r:radius:double:,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding177 = FlaxProxyMember("drawCircle", 0, _flaxBinding176);
const _flaxBinding178 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rect",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "startAngle",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "sweepAngle",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "useCenter",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,p:r:startAngle:double:,p:r:sweepAngle:double:,p:r:useCenter:bool:,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding179 = FlaxProxyMember("drawArc", 0, _flaxBinding178);
const _flaxBinding180 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "path",
      _flaxBinding61,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding181 = FlaxProxyMember("drawPath", 0, _flaxBinding180);
const _flaxBinding182 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "image",
      _flaxBinding90,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:image:object:flax.core/sdk_dart_ui#type:Image,p:r:offset:object:flax.core/flutter#type:Offset,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding183 = FlaxProxyMember("drawImage", 0, _flaxBinding182);
const _flaxBinding184 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "image",
      _flaxBinding90,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "src",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "dst",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:image:object:flax.core/sdk_dart_ui#type:Image,p:r:src:object:flax.core/sdk_dart_ui#type:Rect,p:r:dst:object:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding185 = FlaxProxyMember("drawImageRect", 0, _flaxBinding184);
const _flaxBinding186 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "image",
      _flaxBinding90,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "center",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "dst",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:image:object:flax.core/sdk_dart_ui#type:Image,p:r:center:object:flax.core/sdk_dart_ui#type:Rect,p:r:dst:object:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding187 = FlaxProxyMember("drawImageNine", 0, _flaxBinding186);
const _flaxBinding188 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "picture",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:picture:object:flax.core/sdk_dart_ui#type:Picture)->void:",
);
const _flaxBinding189 = FlaxProxyMember("drawPicture", 0, _flaxBinding188);
const _flaxBinding190 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "paragraph",
      _flaxBinding100,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:paragraph:object:flax.core/sdk_dart_ui#type:Paragraph,p:r:offset:object:flax.core/flutter#type:Offset)->void:",
);
const _flaxBinding191 = FlaxProxyMember("drawParagraph", 0, _flaxBinding190);
const _flaxBinding192 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "pointMode",
      _flaxBinding103,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "points",
      _flaxBinding105,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:pointMode:enum:flax.core/sdk_dart_ui#type:PointMode,p:r:points:list:[object:flax.core/flutter#type:Offset],p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding193 = FlaxProxyMember("drawPoints", 0, _flaxBinding192);
const _flaxBinding194 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "pointMode",
      _flaxBinding103,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "points",
      _flaxBinding108,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:pointMode:enum:flax.core/sdk_dart_ui#type:PointMode,p:r:points:Float32List:,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding195 = FlaxProxyMember("drawRawPoints", 0, _flaxBinding194);
const _flaxBinding196 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "vertices",
      _flaxBinding111,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "blendMode",
      _flaxBinding67,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:vertices:object:flax.core/sdk_dart_ui#type:Vertices,p:r:blendMode:enum:flax.core/sdk_dart_ui#type:BlendMode,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding197 = FlaxProxyMember("drawVertices", 0, _flaxBinding196);
const _flaxBinding198 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "atlas",
      _flaxBinding90,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "transforms",
      _flaxBinding116,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "rects",
      _flaxBinding118,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "colors",
      _flaxBinding120,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "blendMode",
      _flaxBinding121,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "cullRect",
      _flaxBinding29,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:atlas:object:flax.core/sdk_dart_ui#type:Image,p:r:transforms:list:[object:flax.core/sdk_dart_ui#type:RSTransform],p:r:rects:list:[object:flax.core/sdk_dart_ui#type:Rect],p:r:colors:list?:[object:flax.core/flutter#type:Color],p:r:blendMode:enum?:flax.core/sdk_dart_ui#type:BlendMode,p:r:cullRect:object?:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding199 = FlaxProxyMember("drawAtlas", 0, _flaxBinding198);
const _flaxBinding200 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "atlas",
      _flaxBinding90,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "rstTransforms",
      _flaxBinding108,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "rects",
      _flaxBinding108,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "colors",
      _flaxBinding124,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "blendMode",
      _flaxBinding121,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "cullRect",
      _flaxBinding29,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "paint",
      _flaxBinding30,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:atlas:object:flax.core/sdk_dart_ui#type:Image,p:r:rstTransforms:Float32List:,p:r:rects:Float32List:,p:r:colors:Int32List?:,p:r:blendMode:enum?:flax.core/sdk_dart_ui#type:BlendMode,p:r:cullRect:object?:flax.core/sdk_dart_ui#type:Rect,p:r:paint:object:flax.core/sdk_dart_ui#type:Paint)->void:",
);
const _flaxBinding201 = FlaxProxyMember("drawRawAtlas", 0, _flaxBinding200);
const _flaxBinding202 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "path",
      _flaxBinding61,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "color",
      _flaxBinding66,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "elevation",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "transparentOccluder",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,p:r:color:object:flax.core/flutter#type:Color,p:r:elevation:double:,p:r:transparentOccluder:bool:)->void:",
);
const _flaxBinding203 = FlaxProxyMember("drawShadow", 0, _flaxBinding202);
const _flaxBinding204 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Canvas",
  [],
  {
    "save": _flaxBinding28,
    "saveLayer": _flaxBinding32,
    "restore": _flaxBinding33,
    "restoreToCount": _flaxBinding35,
    "getSaveCount": _flaxBinding36,
    "translate": _flaxBinding39,
    "scale": _flaxBinding42,
    "rotate": _flaxBinding44,
    "skew": _flaxBinding46,
    "transform": _flaxBinding49,
    "getTransform": _flaxBinding50,
    "clipRect": _flaxBinding54,
    "clipRRect": _flaxBinding57,
    "clipRSuperellipse": _flaxBinding60,
    "clipPath": _flaxBinding63,
    "getLocalClipBounds": _flaxBinding64,
    "getDestinationClipBounds": _flaxBinding65,
    "drawColor": _flaxBinding69,
    "drawLine": _flaxBinding72,
    "drawPaint": _flaxBinding74,
    "drawRect": _flaxBinding76,
    "drawRRect": _flaxBinding78,
    "drawDRRect": _flaxBinding80,
    "drawRSuperellipse": _flaxBinding82,
    "drawOval": _flaxBinding83,
    "drawCircle": _flaxBinding85,
    "drawArc": _flaxBinding87,
    "drawPath": _flaxBinding89,
    "drawImage": _flaxBinding92,
    "drawImageRect": _flaxBinding94,
    "drawImageNine": _flaxBinding96,
    "drawPicture": _flaxBinding99,
    "drawParagraph": _flaxBinding102,
    "drawPoints": _flaxBinding107,
    "drawRawPoints": _flaxBinding110,
    "drawVertices": _flaxBinding113,
    "drawAtlas": _flaxBinding123,
    "drawRawAtlas": _flaxBinding126,
    "drawShadow": _flaxBinding128,
  },
  constructors: {"": _flaxBinding130, "@implementation": _flaxBinding12},
  create: _createCanvas,
  matches: _isCanvas,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding131,
    _flaxBinding133,
    _flaxBinding134,
    _flaxBinding136,
    _flaxBinding137,
    _flaxBinding139,
    _flaxBinding141,
    _flaxBinding143,
    _flaxBinding145,
    _flaxBinding147,
    _flaxBinding149,
    _flaxBinding151,
    _flaxBinding153,
    _flaxBinding155,
    _flaxBinding157,
    _flaxBinding159,
    _flaxBinding160,
    _flaxBinding162,
    _flaxBinding164,
    _flaxBinding166,
    _flaxBinding168,
    _flaxBinding170,
    _flaxBinding172,
    _flaxBinding174,
    _flaxBinding175,
    _flaxBinding177,
    _flaxBinding179,
    _flaxBinding181,
    _flaxBinding183,
    _flaxBinding185,
    _flaxBinding187,
    _flaxBinding189,
    _flaxBinding191,
    _flaxBinding193,
    _flaxBinding195,
    _flaxBinding197,
    _flaxBinding199,
    _flaxBinding201,
    _flaxBinding203,
  ]),
);
const _flaxBinding205 = FlaxTypeRef("ByteData", nullable: true);
const _flaxBinding206 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "data",
      _flaxBinding205,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<api1.ByteData?>,
  id: "callback:<>(p:r:data:ByteData?:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api1.ByteData?>,
  matches: FlaxCallbackAdapters.matchesVoid1<api1.ByteData?>,
);
const _flaxBinding207 = FlaxTypeRef("callback", callback: _flaxBinding206);
const _flaxBinding208 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
  FlaxParameter("data", _flaxBinding205, required: true),
  FlaxParameter("callback", _flaxBinding207, required: true),
];
const _flaxBinding209 = FlaxInstanceMethod(
  _flaxBinding208,
  _flaxBinding16,
  _ChannelBuffers_push,
);
const _flaxBinding210 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "data",
      _flaxBinding205,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "callback",
      _flaxBinding207,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters
      .wrapVoid2<api1.ByteData?, void Function(api1.ByteData? data)>,
  id: "callback:<>(p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->void:",
  invoke: FlaxCallbackAdapters
      .invokeVoid2<api1.ByteData?, void Function(api1.ByteData? data)>,
  matches: FlaxCallbackAdapters
      .matchesVoid2<api1.ByteData?, void Function(api1.ByteData? data)>,
);
const _flaxBinding211 = FlaxTypeRef("callback", callback: _flaxBinding210);
const _flaxBinding212 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
  FlaxParameter("callback", _flaxBinding211, required: true),
];
const _flaxBinding213 = FlaxInstanceMethod(
  _flaxBinding212,
  _flaxBinding16,
  _ChannelBuffers_setListener,
);
const _flaxBinding214 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
];
const _flaxBinding215 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding16,
  _ChannelBuffers_clearListener,
);
const _flaxBinding216 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
  FlaxParameter("listening", _flaxBinding0, required: true),
];
const _flaxBinding217 = FlaxInstanceMethod(
  _flaxBinding216,
  _flaxBinding16,
  _ChannelBuffers_sendChannelUpdate,
);
const _flaxBinding218 = FlaxTypeRef(
  "future",
  item: _flaxBinding16,
  future: FlaxFutureBinding("void:", _future0Adapt),
);
const _flaxBinding219 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "data",
      _flaxBinding205,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "callback",
      _flaxBinding207,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding218,
  _callback0,
  id: "callback:<>(p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->future:[void:]",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding220 = FlaxTypeRef("callback", callback: _flaxBinding219);
const _flaxBinding221 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
  FlaxParameter("callback", _flaxBinding220, required: true),
];
const _flaxBinding222 = FlaxInstanceMethod(
  _flaxBinding221,
  _flaxBinding218,
  _ChannelBuffers_drain,
);
const _flaxBinding223 = FlaxTypeRef("ByteData");
const _flaxBinding224 = <FlaxParameter>[
  FlaxParameter("data", _flaxBinding223, required: true),
];
const _flaxBinding225 = FlaxInstanceMethod(
  _flaxBinding224,
  _flaxBinding16,
  _ChannelBuffers_handleMessage,
);
const _flaxBinding226 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
  FlaxParameter("newSize", _flaxBinding22, required: true),
];
const _flaxBinding227 = FlaxInstanceMethod(
  _flaxBinding226,
  _flaxBinding16,
  _ChannelBuffers_resize,
);
const _flaxBinding228 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
  FlaxParameter("allowed", _flaxBinding0, required: true),
];
const _flaxBinding229 = FlaxInstanceMethod(
  _flaxBinding228,
  _flaxBinding16,
  _ChannelBuffers_allowOverflow,
);
const _flaxBinding230 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding13,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "data",
      _flaxBinding205,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "callback",
      _flaxBinding207,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:name:String:,p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->void:",
);
const _flaxBinding231 = FlaxProxyMember(
  "push",
  0,
  _flaxBinding230,
  hasSuper: true,
);
const _flaxBinding232 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding13,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "callback",
      _flaxBinding211,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:name:String:,p:r:callback:callback:<>(p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->void:)->void:",
);
const _flaxBinding233 = FlaxProxyMember(
  "setListener",
  0,
  _flaxBinding232,
  hasSuper: true,
);
const _flaxBinding234 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding13,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:name:String:)->void:",
);
const _flaxBinding235 = FlaxProxyMember(
  "clearListener",
  0,
  _flaxBinding234,
  hasSuper: true,
);
const _flaxBinding236 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding13,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "listening",
      _flaxBinding0,
      required: true,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:name:String:,n:r:listening:bool:)->void:",
);
const _flaxBinding237 = FlaxProxyMember(
  "sendChannelUpdate",
  0,
  _flaxBinding236,
  hasSuper: true,
);
const _flaxBinding238 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding13,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "callback",
      _flaxBinding220,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding218,
  id: "callback:<>(p:r:name:String:,p:r:callback:callback:<>(p:r:data:ByteData?:,p:r:callback:callback:<>(p:r:data:ByteData?:)->void:)->future:[void:])->future:[void:]",
);
const _flaxBinding239 = FlaxProxyMember(
  "drain",
  0,
  _flaxBinding238,
  hasSuper: true,
);
const _flaxBinding240 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "data",
      _flaxBinding223,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:data:ByteData:)->void:",
);
const _flaxBinding241 = FlaxProxyMember(
  "handleMessage",
  0,
  _flaxBinding240,
  hasSuper: true,
);
const _flaxBinding242 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding13,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "newSize",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:name:String:,p:r:newSize:int:)->void:",
);
const _flaxBinding243 = FlaxProxyMember(
  "resize",
  0,
  _flaxBinding242,
  hasSuper: true,
);
const _flaxBinding244 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding13,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "allowed",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:name:String:,p:r:allowed:bool:)->void:",
);
const _flaxBinding245 = FlaxProxyMember(
  "allowOverflow",
  0,
  _flaxBinding244,
  hasSuper: true,
);
const _flaxBinding246 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ChannelBuffers",
  [],
  {
    "push": _flaxBinding209,
    "setListener": _flaxBinding213,
    "clearListener": _flaxBinding215,
    "sendChannelUpdate": _flaxBinding217,
    "drain": _flaxBinding222,
    "handleMessage": _flaxBinding225,
    "resize": _flaxBinding227,
    "allowOverflow": _flaxBinding229,
    "@super:push": FlaxInstanceMethod(
      _flaxBinding208,
      _flaxBinding16,
      _ChannelBuffers_super_push,
    ),
    "@super:setListener": FlaxInstanceMethod(
      _flaxBinding212,
      _flaxBinding16,
      _ChannelBuffers_super_setListener,
    ),
    "@super:clearListener": FlaxInstanceMethod(
      _flaxBinding214,
      _flaxBinding16,
      _ChannelBuffers_super_clearListener,
    ),
    "@super:sendChannelUpdate": FlaxInstanceMethod(
      _flaxBinding216,
      _flaxBinding16,
      _ChannelBuffers_super_sendChannelUpdate,
    ),
    "@super:drain": FlaxInstanceMethod(
      _flaxBinding221,
      _flaxBinding218,
      _ChannelBuffers_super_drain,
    ),
    "@super:handleMessage": FlaxInstanceMethod(
      _flaxBinding224,
      _flaxBinding16,
      _ChannelBuffers_super_handleMessage,
    ),
    "@super:resize": FlaxInstanceMethod(
      _flaxBinding226,
      _flaxBinding16,
      _ChannelBuffers_super_resize,
    ),
    "@super:allowOverflow": FlaxInstanceMethod(
      _flaxBinding228,
      _flaxBinding16,
      _ChannelBuffers_super_allowOverflow,
    ),
  },
  constructors: {"@implementation": _flaxBinding12},
  create: _createChannelBuffers,
  matches: _isChannelBuffers,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding231,
    _flaxBinding233,
    _flaxBinding235,
    _flaxBinding237,
    _flaxBinding239,
    _flaxBinding241,
    _flaxBinding243,
    _flaxBinding245,
  ]),
);
const _flaxBinding247 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding248 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding249 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding250 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding251 = FlaxGetter(
  "frameCount",
  _flaxBinding22,
  _Codec_frameCount,
);
const _flaxBinding252 = FlaxGetter(
  "repetitionCount",
  _flaxBinding22,
  _Codec_repetitionCount,
);
const _flaxBinding253 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FrameInfo",
);
const _flaxBinding254 = FlaxTypeRef(
  "future",
  item: _flaxBinding253,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:FrameInfo",
    _future1Adapt,
  ),
);
const _flaxBinding255 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding254,
  _Codec_getNextFrame,
);
const _flaxBinding256 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Codec_dispose,
);
const _flaxBinding257 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding254,
  id: "callback:<>()->future:[object:flax.core/sdk_dart_ui#type:FrameInfo]",
);
const _flaxBinding258 = FlaxProxyMember("getNextFrame", 0, _flaxBinding257);
const _flaxBinding259 = FlaxProxyMember("frameCount", 1, _flaxBinding25);
const _flaxBinding260 = FlaxProxyMember("repetitionCount", 1, _flaxBinding25);
const _flaxBinding261 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Codec",
  [_flaxBinding251, _flaxBinding252],
  {"getNextFrame": _flaxBinding255, "dispose": _flaxBinding256},
  constructors: {"@implementation": _flaxBinding12},
  create: _createCodec,
  matches: _isCodec,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding258,
    _flaxBinding19,
    _flaxBinding259,
    _flaxBinding260,
  ]),
);
const _flaxBinding262 = FlaxGetter(
  "debugShortDescription",
  _flaxBinding13,
  _ColorFilter_debugShortDescription,
);
const _flaxBinding263 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _ColorFilter_toString,
);
const _flaxBinding264 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding37,
  collection: FlaxCollectionBinding(
    "iterable:[double:]",
    _collection9Create,
    _collection9Matches,
    restore: _collection9Restore,
  ),
);
const _flaxBinding265 = FlaxTypeRef(
  "list",
  item: _flaxBinding37,
  collection: FlaxCollectionBinding(
    "list:[double:]",
    _collection8Create,
    _collection8Matches,
  ),
  iterable: _flaxBinding264,
);
const _flaxBinding266 = <FlaxParameter>[
  FlaxParameter("matrix", _flaxBinding265, required: true),
];
const _flaxBinding267 = <FlaxParameter>[
  FlaxParameter("saturation", _flaxBinding37, required: true),
];
const _flaxBinding268 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ColorFilter",
  [_flaxBinding262],
  {"toString": _flaxBinding263},
  constructors: {
    "mode": _flaxBinding68,
    "matrix": _flaxBinding266,
    "linearToSrgbGamma": _flaxBinding12,
    "srgbToLinearGamma": _flaxBinding12,
    "saturation": _flaxBinding267,
  },
  create: _createColorFilter,
  matches: _isColorFilter,
  setters: [],
  supertypes: ["dart:core::Object", "flax.core/flutter#type:ImageFilter"],
);
const _flaxBinding269 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding270 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:DartPluginRegistrant",
  [],
  {},
  constructors: {},
  create: _createDartPluginRegistrant,
  matches: _isDartPluginRegistrant,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding271 = FlaxGetter("id", _flaxBinding22, _Display_id);
const _flaxBinding272 = FlaxGetter(
  "devicePixelRatio",
  _flaxBinding37,
  _Display_devicePixelRatio,
);
const _flaxBinding273 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Size",
);
const _flaxBinding274 = FlaxGetter("size", _flaxBinding273, _Display_size);
const _flaxBinding275 = FlaxGetter(
  "refreshRate",
  _flaxBinding37,
  _Display_refreshRate,
);
const _flaxBinding276 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _Display_toString,
);
const _flaxBinding277 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding13,
  id: "callback:<>()->String:",
);
const _flaxBinding278 = FlaxProxyMember("toString", 0, _flaxBinding277);
const _flaxBinding279 = FlaxProxyMember("id", 1, _flaxBinding25);
const _flaxBinding280 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding37,
  id: "callback:<>()->double:",
);
const _flaxBinding281 = FlaxProxyMember("devicePixelRatio", 1, _flaxBinding280);
const _flaxBinding282 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding273,
  id: "callback:<>()->object:flax.core/flutter#type:Size",
);
const _flaxBinding283 = FlaxProxyMember("size", 1, _flaxBinding282);
const _flaxBinding284 = FlaxProxyMember("refreshRate", 1, _flaxBinding280);
const _flaxBinding285 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Display",
  [_flaxBinding271, _flaxBinding272, _flaxBinding274, _flaxBinding275],
  {"toString": _flaxBinding276},
  constructors: {"@implementation": _flaxBinding12},
  create: _createDisplay,
  matches: _isDisplay,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding278,
    _flaxBinding279,
    _flaxBinding281,
    _flaxBinding283,
    _flaxBinding284,
  ]),
);
const _flaxBinding286 = FlaxGetter(
  "topLeft",
  _flaxBinding37,
  _DisplayCornerRadii_topLeft,
);
const _flaxBinding287 = FlaxGetter(
  "topRight",
  _flaxBinding37,
  _DisplayCornerRadii_topRight,
);
const _flaxBinding288 = FlaxGetter(
  "bottomRight",
  _flaxBinding37,
  _DisplayCornerRadii_bottomRight,
);
const _flaxBinding289 = FlaxGetter(
  "bottomLeft",
  _flaxBinding37,
  _DisplayCornerRadii_bottomLeft,
);
const _flaxBinding290 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _DisplayCornerRadii_toString,
);
const _flaxBinding291 = <FlaxParameter>[
  FlaxParameter("topLeft", _flaxBinding37, required: true),
  FlaxParameter("topRight", _flaxBinding37, required: true),
  FlaxParameter("bottomRight", _flaxBinding37, required: true),
  FlaxParameter("bottomLeft", _flaxBinding37, required: true),
];
const _flaxBinding292 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding277,
  hasSuper: true,
);
const _flaxBinding293 = FlaxProxyMember(
  "topLeft",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding294 = FlaxProxyMember(
  "topRight",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding295 = FlaxProxyMember(
  "bottomRight",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding296 = FlaxProxyMember(
  "bottomLeft",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding297 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:DisplayCornerRadii",
  [_flaxBinding286, _flaxBinding287, _flaxBinding288, _flaxBinding289],
  {
    "toString": _flaxBinding290,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:topLeft": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _DisplayCornerRadii_super_get_topLeft,
    ),
    "@super:get:topRight": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _DisplayCornerRadii_super_get_topRight,
    ),
    "@super:get:bottomRight": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _DisplayCornerRadii_super_get_bottomRight,
    ),
    "@super:get:bottomLeft": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _DisplayCornerRadii_super_get_bottomLeft,
    ),
  },
  constructors: {"@implementation": _flaxBinding291},
  create: _createDisplayCornerRadii,
  matches: _isDisplayCornerRadii,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding292,
    _flaxBinding293,
    _flaxBinding294,
    _flaxBinding295,
    _flaxBinding296,
  ]),
);
const _flaxBinding298 = FlaxGetter(
  "bounds",
  _flaxBinding51,
  _DisplayFeature_bounds,
);
const _flaxBinding299 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:DisplayFeatureType",
);
const _flaxBinding300 = FlaxGetter(
  "type",
  _flaxBinding299,
  _DisplayFeature_type,
);
const _flaxBinding301 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:DisplayFeatureState",
);
const _flaxBinding302 = FlaxGetter(
  "state",
  _flaxBinding301,
  _DisplayFeature_state,
);
const _flaxBinding303 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _DisplayFeature_toString,
);
const _flaxBinding304 = <FlaxParameter>[
  FlaxParameter("bounds", _flaxBinding51, required: true),
  FlaxParameter("type", _flaxBinding299, required: true),
  FlaxParameter("state", _flaxBinding301, required: true),
];
const _flaxBinding305 = FlaxProxyMember(
  "bounds",
  1,
  _flaxBinding158,
  hasSuper: true,
);
const _flaxBinding306 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding299,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:DisplayFeatureType",
);
const _flaxBinding307 = FlaxProxyMember(
  "type",
  1,
  _flaxBinding306,
  hasSuper: true,
);
const _flaxBinding308 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding301,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:DisplayFeatureState",
);
const _flaxBinding309 = FlaxProxyMember(
  "state",
  1,
  _flaxBinding308,
  hasSuper: true,
);
const _flaxBinding310 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:DisplayFeature",
  [_flaxBinding298, _flaxBinding300, _flaxBinding302],
  {
    "toString": _flaxBinding303,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:bounds": FlaxInstanceMethod(
      [],
      _flaxBinding51,
      _DisplayFeature_super_get_bounds,
    ),
    "@super:get:type": FlaxInstanceMethod(
      [],
      _flaxBinding299,
      _DisplayFeature_super_get_type,
    ),
    "@super:get:state": FlaxInstanceMethod(
      [],
      _flaxBinding301,
      _DisplayFeature_super_get_state,
    ),
  },
  constructors: {"@implementation": _flaxBinding304},
  create: _createDisplayFeature,
  matches: _isDisplayFeature,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding292,
    _flaxBinding305,
    _flaxBinding307,
    _flaxBinding309,
  ]),
);
const _flaxBinding311 = FlaxGetter(
  "viewId",
  _flaxBinding22,
  _FlutterView_viewId,
);
const _flaxBinding312 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PlatformDispatcher",
);
const _flaxBinding313 = FlaxGetter(
  "platformDispatcher",
  _flaxBinding312,
  _FlutterView_platformDispatcher,
);
const _flaxBinding314 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Display",
);
const _flaxBinding315 = FlaxGetter(
  "display",
  _flaxBinding314,
  _FlutterView_display,
);
const _flaxBinding316 = FlaxGetter(
  "devicePixelRatio",
  _flaxBinding37,
  _FlutterView_devicePixelRatio,
);
const _flaxBinding317 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ViewConstraints",
);
const _flaxBinding318 = FlaxGetter(
  "physicalConstraints",
  _flaxBinding317,
  _FlutterView_physicalConstraints,
);
const _flaxBinding319 = FlaxGetter(
  "physicalSize",
  _flaxBinding273,
  _FlutterView_physicalSize,
);
const _flaxBinding320 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ViewPadding",
);
const _flaxBinding321 = FlaxGetter(
  "viewInsets",
  _flaxBinding320,
  _FlutterView_viewInsets,
);
const _flaxBinding322 = FlaxGetter(
  "viewPadding",
  _flaxBinding320,
  _FlutterView_viewPadding,
);
const _flaxBinding323 = FlaxGetter(
  "systemGestureInsets",
  _flaxBinding320,
  _FlutterView_systemGestureInsets,
);
const _flaxBinding324 = FlaxGetter(
  "padding",
  _flaxBinding320,
  _FlutterView_padding,
);
const _flaxBinding325 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:GestureSettings",
);
const _flaxBinding326 = FlaxGetter(
  "gestureSettings",
  _flaxBinding325,
  _FlutterView_gestureSettings,
);
const _flaxBinding327 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:DisplayFeature",
);
const _flaxBinding328 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding327,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:DisplayFeature]",
    _collection11Create,
    _collection11Matches,
    restore: _collection11Restore,
  ),
);
const _flaxBinding329 = FlaxTypeRef(
  "list",
  item: _flaxBinding327,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:DisplayFeature]",
    _collection10Create,
    _collection10Matches,
  ),
  iterable: _flaxBinding328,
);
const _flaxBinding330 = FlaxGetter(
  "displayFeatures",
  _flaxBinding329,
  _FlutterView_displayFeatures,
);
const _flaxBinding331 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:DisplayCornerRadii",
  nullable: true,
);
const _flaxBinding332 = FlaxGetter(
  "displayCornerRadii",
  _flaxBinding331,
  _FlutterView_displayCornerRadii,
);
const _flaxBinding333 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Scene",
);
const _flaxBinding334 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Size",
  nullable: true,
);
const _flaxBinding335 = <FlaxParameter>[
  FlaxParameter("scene", _flaxBinding333, required: true),
  FlaxParameter("size", _flaxBinding334, required: false),
];
const _flaxBinding336 = FlaxInstanceMethod(
  _flaxBinding335,
  _flaxBinding16,
  _FlutterView_render,
);
const _flaxBinding337 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsUpdate",
);
const _flaxBinding338 = <FlaxParameter>[
  FlaxParameter("update", _flaxBinding337, required: true),
];
const _flaxBinding339 = FlaxInstanceMethod(
  _flaxBinding338,
  _flaxBinding16,
  _FlutterView_updateSemantics,
);
const _flaxBinding340 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _FlutterView_toString,
);
const _flaxBinding341 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FlutterView",
  [
    _flaxBinding311,
    _flaxBinding313,
    _flaxBinding315,
    _flaxBinding316,
    _flaxBinding318,
    _flaxBinding319,
    _flaxBinding321,
    _flaxBinding322,
    _flaxBinding323,
    _flaxBinding324,
    _flaxBinding326,
    _flaxBinding330,
    _flaxBinding332,
  ],
  {
    "render": _flaxBinding336,
    "updateSemantics": _flaxBinding339,
    "toString": _flaxBinding340,
  },
  constructors: {},
  create: _createFlutterView,
  matches: _isFlutterView,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding342 = FlaxGetter(
  "feature",
  _flaxBinding13,
  _FontFeature_feature,
);
const _flaxBinding343 = FlaxGetter("value", _flaxBinding22, _FontFeature_value);
const _flaxBinding344 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _FontFeature_toString,
);
const _flaxBinding345 = <FlaxParameter>[
  FlaxParameter("feature", _flaxBinding13, required: true),
  FlaxParameter("value", _flaxBinding22, required: false, defaultValue: 1),
];
const _flaxBinding346 = FlaxProxyMember(
  "feature",
  1,
  _flaxBinding277,
  hasSuper: true,
);
const _flaxBinding347 = FlaxProxyMember(
  "value",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding348 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FontFeature",
  [_flaxBinding342, _flaxBinding343],
  {
    "toString": _flaxBinding344,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:feature": FlaxInstanceMethod(
      [],
      _flaxBinding13,
      _FontFeature_super_get_feature,
    ),
    "@super:get:value": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _FontFeature_super_get_value,
    ),
  },
  constructors: {"@implementation": _flaxBinding345},
  create: _createFontFeature,
  matches: _isFontFeature,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding292, _flaxBinding346, _flaxBinding347]),
);
const _flaxBinding349 = FlaxGetter("axis", _flaxBinding13, _FontVariation_axis);
const _flaxBinding350 = FlaxGetter(
  "value",
  _flaxBinding37,
  _FontVariation_value,
);
const _flaxBinding351 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _FontVariation_toString,
);
const _flaxBinding352 = <FlaxParameter>[
  FlaxParameter("axis", _flaxBinding13, required: true),
  FlaxParameter("value", _flaxBinding37, required: true),
];
const _flaxBinding353 = FlaxProxyMember(
  "axis",
  1,
  _flaxBinding277,
  hasSuper: true,
);
const _flaxBinding354 = FlaxProxyMember(
  "value",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding355 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FontVariation",
  [_flaxBinding349, _flaxBinding350],
  {
    "toString": _flaxBinding351,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:axis": FlaxInstanceMethod(
      [],
      _flaxBinding13,
      _FontVariation_super_get_axis,
    ),
    "@super:get:value": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _FontVariation_super_get_value,
    ),
  },
  constructors: {"@implementation": _flaxBinding352},
  create: _createFontVariation,
  matches: _isFontVariation,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding292, _flaxBinding353, _flaxBinding354]),
);
const _flaxBinding356 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FragmentShader",
);
const _flaxBinding357 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding356,
  _FragmentProgram_fragmentShader,
);
const _flaxBinding358 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FragmentProgram",
  [],
  {"fragmentShader": _flaxBinding357},
  constructors: {},
  create: _createFragmentProgram,
  matches: _isFragmentProgram,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding359 = FlaxGetter(
  "debugDisposed",
  _flaxBinding0,
  _Shader_debugDisposed,
);
const _flaxBinding360 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Shader_dispose,
);
const _flaxBinding361 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Shader",
  [_flaxBinding359],
  {"dispose": _flaxBinding360},
  constructors: {},
  create: _createShader,
  matches: _isShader,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding362 = <FlaxParameter>[
  FlaxParameter("index", _flaxBinding22, required: true),
  FlaxParameter("value", _flaxBinding37, required: true),
];
const _flaxBinding363 = FlaxInstanceMethod(
  _flaxBinding362,
  _flaxBinding16,
  _FragmentShader_setFloat,
);
const _flaxBinding364 = FlaxTypeRef("int", nullable: true);
const _flaxBinding365 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
  FlaxParameter("index", _flaxBinding364, required: false),
];
const _flaxBinding366 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformFloatSlot",
);
const _flaxBinding367 = FlaxInstanceMethod(
  _flaxBinding365,
  _flaxBinding366,
  _FragmentShader_getUniformFloat,
);
const _flaxBinding368 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformVec2Slot",
);
const _flaxBinding369 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding368,
  _FragmentShader_getUniformVec2,
);
const _flaxBinding370 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformVec3Slot",
);
const _flaxBinding371 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding370,
  _FragmentShader_getUniformVec3,
);
const _flaxBinding372 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformVec4Slot",
);
const _flaxBinding373 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding372,
  _FragmentShader_getUniformVec4,
);
const _flaxBinding374 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformMat2Slot",
);
const _flaxBinding375 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding374,
  _FragmentShader_getUniformMat2,
);
const _flaxBinding376 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformMat3Slot",
);
const _flaxBinding377 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding376,
  _FragmentShader_getUniformMat3,
);
const _flaxBinding378 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformMat4Slot",
);
const _flaxBinding379 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding378,
  _FragmentShader_getUniformMat4,
);
const _flaxBinding380 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformFloatSlot>>,
);
const _flaxBinding381 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding380,
  _FragmentShader_getUniformFloatArray,
);
const _flaxBinding382 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformVec2Slot>>,
);
const _flaxBinding383 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding382,
  _FragmentShader_getUniformVec2Array,
);
const _flaxBinding384 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformVec3Slot>>,
);
const _flaxBinding385 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding384,
  _FragmentShader_getUniformVec3Array,
);
const _flaxBinding386 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformVec4Slot>>,
);
const _flaxBinding387 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding386,
  _FragmentShader_getUniformVec4Array,
);
const _flaxBinding388 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformMat2Slot>>,
);
const _flaxBinding389 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding388,
  _FragmentShader_getUniformMat2Array,
);
const _flaxBinding390 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformMat3Slot>>,
);
const _flaxBinding391 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding390,
  _FragmentShader_getUniformMat3Array,
);
const _flaxBinding392 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:UniformArray",
  dartType: FlaxDartTypes.typeOf<api.UniformArray<api.UniformMat4Slot>>,
);
const _flaxBinding393 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding392,
  _FragmentShader_getUniformMat4Array,
);
const _flaxBinding394 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImageSamplerSlot",
);
const _flaxBinding395 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding394,
  _FragmentShader_getImageSampler,
);
const _flaxBinding396 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:FilterQuality",
);
const _flaxBinding397 = <FlaxParameter>[
  FlaxParameter("index", _flaxBinding22, required: true),
  FlaxParameter("image", _flaxBinding90, required: true),
  FlaxParameter(
    "filterQuality",
    _flaxBinding396,
    required: false,
    defaultValue: api.FilterQuality.none,
  ),
];
const _flaxBinding398 = FlaxInstanceMethod(
  _flaxBinding397,
  _flaxBinding16,
  _FragmentShader_setImageSampler,
);
const _flaxBinding399 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FragmentShader",
  [],
  {
    "setFloat": _flaxBinding363,
    "getUniformFloat": _flaxBinding367,
    "getUniformVec2": _flaxBinding369,
    "getUniformVec3": _flaxBinding371,
    "getUniformVec4": _flaxBinding373,
    "getUniformMat2": _flaxBinding375,
    "getUniformMat3": _flaxBinding377,
    "getUniformMat4": _flaxBinding379,
    "getUniformFloatArray": _flaxBinding381,
    "getUniformVec2Array": _flaxBinding383,
    "getUniformVec3Array": _flaxBinding385,
    "getUniformVec4Array": _flaxBinding387,
    "getUniformMat2Array": _flaxBinding389,
    "getUniformMat3Array": _flaxBinding391,
    "getUniformMat4Array": _flaxBinding393,
    "getImageSampler": _flaxBinding395,
    "setImageSampler": _flaxBinding398,
  },
  constructors: {},
  create: _createFragmentShader,
  matches: _isFragmentShader,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:Shader", "dart:core::Object"],
  parent: _flaxBinding361,
  disposeMethod: "dispose",
);
const _flaxBinding400 = FlaxGetter(
  "frameNumber",
  _flaxBinding22,
  _FrameData_frameNumber,
);
const _flaxBinding401 = FlaxProxyMember("frameNumber", 1, _flaxBinding25);
const _flaxBinding402 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FrameData",
  [_flaxBinding400],
  {},
  constructors: {"@implementation": _flaxBinding12},
  create: _createFrameData,
  matches: _isFrameData,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding401]),
);
const _flaxBinding403 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
);
const _flaxBinding404 = FlaxGetter(
  "duration",
  _flaxBinding403,
  _FrameInfo_duration,
);
const _flaxBinding405 = FlaxGetter("image", _flaxBinding90, _FrameInfo_image);
const _flaxBinding406 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding403,
  id: "callback:<>()->object:flax.core/flutter#type:Duration",
);
const _flaxBinding407 = FlaxProxyMember("duration", 1, _flaxBinding406);
const _flaxBinding408 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding90,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Image",
);
const _flaxBinding409 = FlaxProxyMember("image", 1, _flaxBinding408);
const _flaxBinding410 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FrameInfo",
  [_flaxBinding404, _flaxBinding405],
  {},
  constructors: {"@implementation": _flaxBinding12},
  create: _createFrameInfo,
  matches: _isFrameInfo,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding407, _flaxBinding409]),
);
const _flaxBinding411 = FlaxGetter(
  "buildDuration",
  _flaxBinding403,
  _FrameTiming_buildDuration,
);
const _flaxBinding412 = FlaxGetter(
  "rasterDuration",
  _flaxBinding403,
  _FrameTiming_rasterDuration,
);
const _flaxBinding413 = FlaxGetter(
  "vsyncOverhead",
  _flaxBinding403,
  _FrameTiming_vsyncOverhead,
);
const _flaxBinding414 = FlaxGetter(
  "totalSpan",
  _flaxBinding403,
  _FrameTiming_totalSpan,
);
const _flaxBinding415 = FlaxGetter(
  "layerCacheCount",
  _flaxBinding22,
  _FrameTiming_layerCacheCount,
);
const _flaxBinding416 = FlaxGetter(
  "layerCacheBytes",
  _flaxBinding22,
  _FrameTiming_layerCacheBytes,
);
const _flaxBinding417 = FlaxGetter(
  "layerCacheMegabytes",
  _flaxBinding37,
  _FrameTiming_layerCacheMegabytes,
);
const _flaxBinding418 = FlaxGetter(
  "pictureCacheCount",
  _flaxBinding22,
  _FrameTiming_pictureCacheCount,
);
const _flaxBinding419 = FlaxGetter(
  "pictureCacheBytes",
  _flaxBinding22,
  _FrameTiming_pictureCacheBytes,
);
const _flaxBinding420 = FlaxGetter(
  "pictureCacheMegabytes",
  _flaxBinding37,
  _FrameTiming_pictureCacheMegabytes,
);
const _flaxBinding421 = FlaxGetter(
  "frameNumber",
  _flaxBinding22,
  _FrameTiming_frameNumber,
);
const _flaxBinding422 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:FramePhase",
);
const _flaxBinding423 = <FlaxParameter>[
  FlaxParameter("phase", _flaxBinding422, required: true),
];
const _flaxBinding424 = FlaxInstanceMethod(
  _flaxBinding423,
  _flaxBinding22,
  _FrameTiming_timestampInMicroseconds,
);
const _flaxBinding425 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _FrameTiming_toString,
);
const _flaxBinding426 = <FlaxParameter>[
  FlaxParameter("vsyncStart", _flaxBinding22, required: true),
  FlaxParameter("buildStart", _flaxBinding22, required: true),
  FlaxParameter("buildFinish", _flaxBinding22, required: true),
  FlaxParameter("rasterStart", _flaxBinding22, required: true),
  FlaxParameter("rasterFinish", _flaxBinding22, required: true),
  FlaxParameter("rasterFinishWallTime", _flaxBinding22, required: true),
  FlaxParameter(
    "layerCacheCount",
    _flaxBinding22,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "layerCacheBytes",
    _flaxBinding22,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "pictureCacheCount",
    _flaxBinding22,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "pictureCacheBytes",
    _flaxBinding22,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "frameNumber",
    _flaxBinding22,
    required: false,
    defaultValue: -1,
  ),
];
const _flaxBinding427 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:FrameTiming",
  [
    _flaxBinding411,
    _flaxBinding412,
    _flaxBinding413,
    _flaxBinding414,
    _flaxBinding415,
    _flaxBinding416,
    _flaxBinding417,
    _flaxBinding418,
    _flaxBinding419,
    _flaxBinding420,
    _flaxBinding421,
  ],
  {"timestampInMicroseconds": _flaxBinding424, "toString": _flaxBinding425},
  constructors: {"": _flaxBinding426},
  create: _createFrameTiming,
  matches: _isFrameTiming,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding428 = FlaxGetter(
  "physicalTouchSlop",
  _flaxBinding40,
  _GestureSettings_physicalTouchSlop,
);
const _flaxBinding429 = FlaxGetter(
  "physicalDoubleTapSlop",
  _flaxBinding40,
  _GestureSettings_physicalDoubleTapSlop,
);
const _flaxBinding430 = <FlaxParameter>[
  FlaxParameter("physicalDoubleTapSlop", _flaxBinding40, required: false),
  FlaxParameter("physicalTouchSlop", _flaxBinding40, required: false),
];
const _flaxBinding431 = FlaxInstanceMethod(
  _flaxBinding430,
  _flaxBinding325,
  _GestureSettings_copyWith,
);
const _flaxBinding432 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _GestureSettings_toString,
);
const _flaxBinding433 = <FlaxParameter>[
  FlaxParameter("physicalTouchSlop", _flaxBinding40, required: false),
  FlaxParameter("physicalDoubleTapSlop", _flaxBinding40, required: false),
];
const _flaxBinding434 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "physicalTouchSlop",
      _flaxBinding40,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "physicalDoubleTapSlop",
      _flaxBinding40,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding325,
  id: "callback:<>(n:o:physicalTouchSlop:double?:,n:o:physicalDoubleTapSlop:double?:)->object:flax.core/sdk_dart_ui#type:GestureSettings",
);
const _flaxBinding435 = FlaxProxyMember(
  "copyWith",
  0,
  _flaxBinding434,
  hasSuper: true,
);
const _flaxBinding436 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding40,
  id: "callback:<>()->double?:",
);
const _flaxBinding437 = FlaxProxyMember(
  "physicalTouchSlop",
  1,
  _flaxBinding436,
  hasSuper: true,
);
const _flaxBinding438 = FlaxProxyMember(
  "physicalDoubleTapSlop",
  1,
  _flaxBinding436,
  hasSuper: true,
);
const _flaxBinding439 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:GestureSettings",
  [_flaxBinding428, _flaxBinding429],
  {
    "copyWith": _flaxBinding431,
    "toString": _flaxBinding432,
    "@super:copyWith": FlaxInstanceMethod(
      _flaxBinding430,
      _flaxBinding325,
      _GestureSettings_super_copyWith,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:physicalTouchSlop": FlaxInstanceMethod(
      [],
      _flaxBinding40,
      _GestureSettings_super_get_physicalTouchSlop,
    ),
    "@super:get:physicalDoubleTapSlop": FlaxInstanceMethod(
      [],
      _flaxBinding40,
      _GestureSettings_super_get_physicalDoubleTapSlop,
    ),
  },
  constructors: {"@implementation": _flaxBinding433},
  create: _createGestureSettings,
  matches: _isGestureSettings,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding435,
    _flaxBinding292,
    _flaxBinding437,
    _flaxBinding438,
  ]),
);
const _flaxBinding440 = FlaxGetter(
  "graphemeClusterLayoutBounds",
  _flaxBinding51,
  _GlyphInfo_graphemeClusterLayoutBounds,
);
const _flaxBinding441 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextRange",
);
const _flaxBinding442 = FlaxGetter(
  "graphemeClusterCodeUnitRange",
  _flaxBinding441,
  _GlyphInfo_graphemeClusterCodeUnitRange,
);
const _flaxBinding443 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
);
const _flaxBinding444 = FlaxGetter(
  "writingDirection",
  _flaxBinding443,
  _GlyphInfo_writingDirection,
);
const _flaxBinding445 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _GlyphInfo_toString,
);
const _flaxBinding446 = <FlaxParameter>[
  FlaxParameter("graphemeClusterLayoutBounds", _flaxBinding51, required: true),
  FlaxParameter(
    "graphemeClusterCodeUnitRange",
    _flaxBinding441,
    required: true,
  ),
  FlaxParameter("writingDirection", _flaxBinding443, required: true),
];
const _flaxBinding447 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:GlyphInfo",
  [_flaxBinding440, _flaxBinding442, _flaxBinding444],
  {"toString": _flaxBinding445},
  constructors: {"": _flaxBinding446},
  create: _createGlyphInfo,
  matches: _isGlyphInfo,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding448 = FlaxTypeRef(
  "list",
  item: _flaxBinding66,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Color]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding119,
);
const _flaxBinding449 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding37,
  collection: FlaxCollectionBinding(
    "list:[double:]",
    _collection8Create,
    _collection8Matches,
  ),
  iterable: _flaxBinding264,
);
const _flaxBinding450 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TileMode",
);
const _flaxBinding451 = FlaxTypeRef("Float64List", nullable: true);
const _flaxBinding452 = <FlaxParameter>[
  FlaxParameter("from", _flaxBinding70, required: true),
  FlaxParameter("to", _flaxBinding70, required: true),
  FlaxParameter("colors", _flaxBinding448, required: true),
  FlaxParameter("colorStops", _flaxBinding449, required: false),
  FlaxParameter(
    "tileMode",
    _flaxBinding450,
    required: false,
    defaultValue: api.TileMode.clamp,
  ),
  FlaxParameter("matrix4", _flaxBinding451, required: false),
];
const _flaxBinding453 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
  nullable: true,
);
const _flaxBinding454 = <FlaxParameter>[
  FlaxParameter("center", _flaxBinding70, required: true),
  FlaxParameter("radius", _flaxBinding37, required: true),
  FlaxParameter("colors", _flaxBinding448, required: true),
  FlaxParameter("colorStops", _flaxBinding449, required: false),
  FlaxParameter(
    "tileMode",
    _flaxBinding450,
    required: false,
    defaultValue: api.TileMode.clamp,
  ),
  FlaxParameter("matrix4", _flaxBinding451, required: false),
  FlaxParameter("focal", _flaxBinding453, required: false),
  FlaxParameter(
    "focalRadius",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
];
const _flaxBinding455 = <FlaxParameter>[
  FlaxParameter("center", _flaxBinding70, required: true),
  FlaxParameter("colors", _flaxBinding448, required: true),
  FlaxParameter("colorStops", _flaxBinding449, required: false),
  FlaxParameter(
    "tileMode",
    _flaxBinding450,
    required: false,
    defaultValue: api.TileMode.clamp,
  ),
  FlaxParameter(
    "startAngle",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "endAngle",
    _flaxBinding37,
    required: false,
    defaultValue: 6.283185307179586,
  ),
  FlaxParameter("matrix4", _flaxBinding451, required: false),
];
const _flaxBinding456 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Gradient",
  [],
  {},
  constructors: {
    "linear": _flaxBinding452,
    "radial": _flaxBinding454,
    "sweep": _flaxBinding455,
  },
  create: _createGradient,
  matches: _isGradient,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:Shader", "dart:core::Object"],
  parent: _flaxBinding361,
  disposeMethod: "dispose",
);
const _flaxBinding457 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FlutterView",
);
const _flaxBinding458 = FlaxGetter(
  "view",
  _flaxBinding457,
  _HitTestRequest_view,
);
const _flaxBinding459 = FlaxGetter(
  "offset",
  _flaxBinding70,
  _HitTestRequest_offset,
);
const _flaxBinding460 = <FlaxParameter>[
  FlaxParameter("view", _flaxBinding457, required: true),
  FlaxParameter("offset", _flaxBinding70, required: true),
];
const _flaxBinding461 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding457,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:FlutterView",
);
const _flaxBinding462 = FlaxProxyMember(
  "view",
  1,
  _flaxBinding461,
  hasSuper: true,
);
const _flaxBinding463 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding70,
  id: "callback:<>()->object:flax.core/flutter#type:Offset",
);
const _flaxBinding464 = FlaxProxyMember(
  "offset",
  1,
  _flaxBinding463,
  hasSuper: true,
);
const _flaxBinding465 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:HitTestRequest",
  [_flaxBinding458, _flaxBinding459],
  {
    "@super:get:view": FlaxInstanceMethod(
      [],
      _flaxBinding457,
      _HitTestRequest_super_get_view,
    ),
    "@super:get:offset": FlaxInstanceMethod(
      [],
      _flaxBinding70,
      _FlaxProxyDispatch1_super_get_offset,
    ),
  },
  constructors: {"@implementation": _flaxBinding460},
  create: _createHitTestRequest,
  matches: _isHitTestRequest,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding462, _flaxBinding464]),
);
const _flaxBinding466 = FlaxGetter(
  "hasPlatformView",
  _flaxBinding0,
  _HitTestResponse_hasPlatformView,
);
const _flaxBinding467 = <FlaxParameter>[
  FlaxParameter("hasPlatformView", _flaxBinding0, required: true),
];
const _flaxBinding468 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding0,
  id: "callback:<>()->bool:",
);
const _flaxBinding469 = FlaxProxyMember(
  "hasPlatformView",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding470 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:HitTestResponse",
  [_flaxBinding466],
  {
    "@super:get:hasPlatformView": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _HitTestResponse_super_get_hasPlatformView,
    ),
  },
  constructors: {"@implementation": _flaxBinding467},
  create: _createHitTestResponse,
  matches: _isHitTestResponse,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding469]),
);
const _flaxBinding471 = FlaxGetter("width", _flaxBinding22, _Image_width);
const _flaxBinding472 = FlaxGetter("height", _flaxBinding22, _Image_height);
const _flaxBinding473 = FlaxGetter(
  "debugDisposed",
  _flaxBinding0,
  _Image_debugDisposed,
);
const _flaxBinding474 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ColorSpace",
);
const _flaxBinding475 = FlaxGetter(
  "colorSpace",
  _flaxBinding474,
  _Image_colorSpace,
);
const _flaxBinding476 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Image_dispose,
);
const _flaxBinding477 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ImageByteFormat",
);
const _flaxBinding478 = <FlaxParameter>[
  FlaxParameter(
    "format",
    _flaxBinding477,
    required: false,
    defaultValue: api.ImageByteFormat.rawRgba,
  ),
];
const _flaxBinding479 = FlaxTypeRef(
  "future",
  item: _flaxBinding205,
  future: FlaxFutureBinding("ByteData?:", _future2Adapt),
);
const _flaxBinding480 = FlaxInstanceMethod(
  _flaxBinding478,
  _flaxBinding479,
  _Image_toByteData,
);
const _flaxBinding481 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
);
const _flaxBinding482 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding481,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:StackTrace]",
    _collection13Create,
    _collection13Matches,
    restore: _collection13Restore,
  ),
);
const _flaxBinding483 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding481,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:StackTrace]",
    _collection12Create,
    _collection12Matches,
  ),
  iterable: _flaxBinding482,
);
const _flaxBinding484 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding483,
  _Image_debugGetOpenHandleStackTraces,
);
const _flaxBinding485 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding90,
  _Image_clone,
);
const _flaxBinding486 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding90, required: true),
];
const _flaxBinding487 = FlaxInstanceMethod(
  _flaxBinding486,
  _flaxBinding0,
  _Image_isCloneOf,
);
const _flaxBinding488 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _Image_toString,
);
const _flaxBinding489 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Image",
  [_flaxBinding471, _flaxBinding472, _flaxBinding473, _flaxBinding475],
  {
    "dispose": _flaxBinding476,
    "toByteData": _flaxBinding480,
    "debugGetOpenHandleStackTraces": _flaxBinding484,
    "clone": _flaxBinding485,
    "isCloneOf": _flaxBinding487,
    "toString": _flaxBinding488,
  },
  constructors: {},
  create: _createImage,
  matches: _isImage,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding490 = FlaxGetter(
  "width",
  _flaxBinding22,
  _ImageDescriptor_width,
);
const _flaxBinding491 = FlaxGetter(
  "height",
  _flaxBinding22,
  _ImageDescriptor_height,
);
const _flaxBinding492 = FlaxGetter(
  "bytesPerPixel",
  _flaxBinding22,
  _ImageDescriptor_bytesPerPixel,
);
const _flaxBinding493 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _ImageDescriptor_dispose,
);
const _flaxBinding494 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TargetPixelFormat",
);
const _flaxBinding495 = <FlaxParameter>[
  FlaxParameter(
    "targetFormat",
    _flaxBinding494,
    required: false,
    defaultValue: api.TargetPixelFormat.dontCare,
  ),
  FlaxParameter("targetHeight", _flaxBinding364, required: false),
  FlaxParameter("targetWidth", _flaxBinding364, required: false),
];
const _flaxBinding496 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Codec",
);
const _flaxBinding497 = FlaxTypeRef(
  "future",
  item: _flaxBinding496,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:Codec",
    _future3Adapt,
  ),
);
const _flaxBinding498 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding497,
  _ImageDescriptor_instantiateCodec,
);
const _flaxBinding499 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImmutableBuffer",
);
const _flaxBinding500 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PixelFormat",
);
const _flaxBinding501 = <FlaxParameter>[
  FlaxParameter("buffer", _flaxBinding499, required: true),
  FlaxParameter("width", _flaxBinding22, required: true),
  FlaxParameter("height", _flaxBinding22, required: true),
  FlaxParameter("rowBytes", _flaxBinding364, required: false),
  FlaxParameter("pixelFormat", _flaxBinding500, required: true),
];
const _flaxBinding502 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "targetWidth",
      _flaxBinding364,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "targetHeight",
      _flaxBinding364,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "targetFormat",
      _flaxBinding494,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding497,
  id: "callback:<>(n:o:targetWidth:int?:,n:o:targetHeight:int?:,n:o:targetFormat:enum:flax.core/sdk_dart_ui#type:TargetPixelFormat)->future:[object:flax.core/sdk_dart_ui#type:Codec]",
);
const _flaxBinding503 = FlaxProxyMember("instantiateCodec", 0, _flaxBinding502);
const _flaxBinding504 = FlaxProxyMember("width", 1, _flaxBinding25);
const _flaxBinding505 = FlaxProxyMember("height", 1, _flaxBinding25);
const _flaxBinding506 = FlaxProxyMember("bytesPerPixel", 1, _flaxBinding25);
const _flaxBinding507 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ImageDescriptor",
  [_flaxBinding490, _flaxBinding491, _flaxBinding492],
  {"dispose": _flaxBinding493, "instantiateCodec": _flaxBinding498},
  constructors: {"raw": _flaxBinding501, "@implementation": _flaxBinding12},
  create: _createImageDescriptor,
  matches: _isImageDescriptor,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding19,
    _flaxBinding503,
    _flaxBinding504,
    _flaxBinding505,
    _flaxBinding506,
  ]),
);
const _flaxBinding508 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding509 = FlaxGetter(
  "shaderIndex",
  _flaxBinding22,
  _ImageSamplerSlot_shaderIndex,
);
const _flaxBinding510 = FlaxGetter(
  "name",
  _flaxBinding13,
  _ImageSamplerSlot_name,
);
const _flaxBinding511 = <FlaxParameter>[
  FlaxParameter("val", _flaxBinding90, required: true),
];
const _flaxBinding512 = FlaxInstanceMethod(
  _flaxBinding511,
  _flaxBinding16,
  _ImageSamplerSlot_set,
);
const _flaxBinding513 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ImageSamplerSlot",
  [_flaxBinding509, _flaxBinding510],
  {"set": _flaxBinding512},
  constructors: {},
  create: _createImageSamplerSlot,
  matches: _isImageSamplerSlot,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding514 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:FilterQuality",
  nullable: true,
);
const _flaxBinding515 = <FlaxParameter>[
  FlaxParameter("image", _flaxBinding90, required: true),
  FlaxParameter("tmx", _flaxBinding450, required: true),
  FlaxParameter("tmy", _flaxBinding450, required: true),
  FlaxParameter("matrix4", _flaxBinding47, required: true),
  FlaxParameter("filterQuality", _flaxBinding514, required: false),
];
const _flaxBinding516 = FlaxProxyMember(
  "dispose",
  0,
  _flaxBinding18,
  hasSuper: true,
);
const _flaxBinding517 = FlaxProxyMember(
  "debugDisposed",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding518 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ImageShader",
  [],
  {
    "@super:dispose": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding16,
      _FlaxProxyDispatch2_super_call_dispose,
    ),
    "@super:get:debugDisposed": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch2_super_get_debugDisposed,
    ),
  },
  constructors: {"@implementation": _flaxBinding515},
  create: _createImageShader,
  matches: _isImageShader,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:Shader", "dart:core::Object"],
  parent: _flaxBinding361,
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding516, _flaxBinding517]),
);
const _flaxBinding519 = FlaxGetter(
  "length",
  _flaxBinding22,
  _ImmutableBuffer_length,
);
const _flaxBinding520 = FlaxGetter(
  "debugDisposed",
  _flaxBinding0,
  _ImmutableBuffer_debugDisposed,
);
const _flaxBinding521 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _ImmutableBuffer_dispose,
);
const _flaxBinding522 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ImmutableBuffer",
  [_flaxBinding519, _flaxBinding520],
  {"dispose": _flaxBinding521},
  constructors: {},
  create: _createImmutableBuffer,
  matches: _isImmutableBuffer,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding523 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:IsolateNameServer",
  [],
  {},
  constructors: {},
  create: _createIsolateNameServer,
  matches: _isIsolateNameServer,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding524 = FlaxGetter(
  "timeStamp",
  _flaxBinding403,
  _KeyData_timeStamp,
);
const _flaxBinding525 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:KeyEventType",
);
const _flaxBinding526 = FlaxGetter("type", _flaxBinding525, _KeyData_type);
const _flaxBinding527 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:KeyEventDeviceType",
);
const _flaxBinding528 = FlaxGetter(
  "deviceType",
  _flaxBinding527,
  _KeyData_deviceType,
);
const _flaxBinding529 = FlaxGetter(
  "physical",
  _flaxBinding22,
  _KeyData_physical,
);
const _flaxBinding530 = FlaxGetter("logical", _flaxBinding22, _KeyData_logical);
const _flaxBinding531 = FlaxTypeRef("String", nullable: true);
const _flaxBinding532 = FlaxGetter(
  "character",
  _flaxBinding531,
  _KeyData_character,
);
const _flaxBinding533 = FlaxGetter(
  "synthesized",
  _flaxBinding0,
  _KeyData_synthesized,
);
const _flaxBinding534 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _KeyData_toString,
);
const _flaxBinding535 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _KeyData_toStringFull,
);
const _flaxBinding536 = <FlaxParameter>[
  FlaxParameter("timeStamp", _flaxBinding403, required: true),
  FlaxParameter("type", _flaxBinding525, required: true),
  FlaxParameter("physical", _flaxBinding22, required: true),
  FlaxParameter("logical", _flaxBinding22, required: true),
  FlaxParameter("character", _flaxBinding531, required: true),
  FlaxParameter("synthesized", _flaxBinding0, required: true),
  FlaxParameter(
    "deviceType",
    _flaxBinding527,
    required: false,
    defaultValue: api.KeyEventDeviceType.keyboard,
  ),
];
const _flaxBinding537 = FlaxProxyMember(
  "toStringFull",
  0,
  _flaxBinding277,
  hasSuper: true,
);
const _flaxBinding538 = FlaxProxyMember(
  "timeStamp",
  1,
  _flaxBinding406,
  hasSuper: true,
);
const _flaxBinding539 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding525,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:KeyEventType",
);
const _flaxBinding540 = FlaxProxyMember(
  "type",
  1,
  _flaxBinding539,
  hasSuper: true,
);
const _flaxBinding541 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding527,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:KeyEventDeviceType",
);
const _flaxBinding542 = FlaxProxyMember(
  "deviceType",
  1,
  _flaxBinding541,
  hasSuper: true,
);
const _flaxBinding543 = FlaxProxyMember(
  "physical",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding544 = FlaxProxyMember(
  "logical",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding545 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding531,
  id: "callback:<>()->String?:",
);
const _flaxBinding546 = FlaxProxyMember(
  "character",
  1,
  _flaxBinding545,
  hasSuper: true,
);
const _flaxBinding547 = FlaxProxyMember(
  "synthesized",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding548 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:KeyData",
  [
    _flaxBinding524,
    _flaxBinding526,
    _flaxBinding528,
    _flaxBinding529,
    _flaxBinding530,
    _flaxBinding532,
    _flaxBinding533,
  ],
  {
    "toString": _flaxBinding534,
    "toStringFull": _flaxBinding535,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:toStringFull": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch3_super_call_toStringFull,
    ),
    "@super:get:timeStamp": FlaxInstanceMethod(
      [],
      _flaxBinding403,
      _FlaxProxyDispatch3_super_get_timeStamp,
    ),
    "@super:get:type": FlaxInstanceMethod(
      [],
      _flaxBinding525,
      _KeyData_super_get_type,
    ),
    "@super:get:deviceType": FlaxInstanceMethod(
      [],
      _flaxBinding527,
      _KeyData_super_get_deviceType,
    ),
    "@super:get:physical": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _KeyData_super_get_physical,
    ),
    "@super:get:logical": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _KeyData_super_get_logical,
    ),
    "@super:get:character": FlaxInstanceMethod(
      [],
      _flaxBinding531,
      _KeyData_super_get_character,
    ),
    "@super:get:synthesized": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch3_super_get_synthesized,
    ),
  },
  constructors: {"@implementation": _flaxBinding536},
  create: _createKeyData,
  matches: _isKeyData,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding292,
    _flaxBinding537,
    _flaxBinding538,
    _flaxBinding540,
    _flaxBinding542,
    _flaxBinding543,
    _flaxBinding544,
    _flaxBinding546,
    _flaxBinding547,
  ]),
);
const _flaxBinding549 = FlaxGetter(
  "hardBreak",
  _flaxBinding0,
  _LineMetrics_hardBreak,
);
const _flaxBinding550 = FlaxGetter(
  "ascent",
  _flaxBinding37,
  _LineMetrics_ascent,
);
const _flaxBinding551 = FlaxGetter(
  "descent",
  _flaxBinding37,
  _LineMetrics_descent,
);
const _flaxBinding552 = FlaxGetter(
  "unscaledAscent",
  _flaxBinding37,
  _LineMetrics_unscaledAscent,
);
const _flaxBinding553 = FlaxGetter(
  "height",
  _flaxBinding37,
  _LineMetrics_height,
);
const _flaxBinding554 = FlaxGetter("width", _flaxBinding37, _LineMetrics_width);
const _flaxBinding555 = FlaxGetter("left", _flaxBinding37, _LineMetrics_left);
const _flaxBinding556 = FlaxGetter(
  "baseline",
  _flaxBinding37,
  _LineMetrics_baseline,
);
const _flaxBinding557 = FlaxGetter(
  "lineNumber",
  _flaxBinding22,
  _LineMetrics_lineNumber,
);
const _flaxBinding558 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _LineMetrics_toString,
);
const _flaxBinding559 = <FlaxParameter>[
  FlaxParameter("hardBreak", _flaxBinding0, required: true),
  FlaxParameter("ascent", _flaxBinding37, required: true),
  FlaxParameter("descent", _flaxBinding37, required: true),
  FlaxParameter("unscaledAscent", _flaxBinding37, required: true),
  FlaxParameter("height", _flaxBinding37, required: true),
  FlaxParameter("width", _flaxBinding37, required: true),
  FlaxParameter("left", _flaxBinding37, required: true),
  FlaxParameter("baseline", _flaxBinding37, required: true),
  FlaxParameter("lineNumber", _flaxBinding22, required: true),
];
const _flaxBinding560 = FlaxProxyMember(
  "hardBreak",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding561 = FlaxProxyMember(
  "ascent",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding562 = FlaxProxyMember(
  "descent",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding563 = FlaxProxyMember(
  "unscaledAscent",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding564 = FlaxProxyMember(
  "height",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding565 = FlaxProxyMember(
  "width",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding566 = FlaxProxyMember(
  "left",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding567 = FlaxProxyMember(
  "baseline",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding568 = FlaxProxyMember(
  "lineNumber",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding569 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:LineMetrics",
  [
    _flaxBinding549,
    _flaxBinding550,
    _flaxBinding551,
    _flaxBinding552,
    _flaxBinding553,
    _flaxBinding554,
    _flaxBinding555,
    _flaxBinding556,
    _flaxBinding557,
  ],
  {
    "toString": _flaxBinding558,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:hardBreak": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _LineMetrics_super_get_hardBreak,
    ),
    "@super:get:ascent": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _LineMetrics_super_get_ascent,
    ),
    "@super:get:descent": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _LineMetrics_super_get_descent,
    ),
    "@super:get:unscaledAscent": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _LineMetrics_super_get_unscaledAscent,
    ),
    "@super:get:height": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _LineMetrics_super_get_height,
    ),
    "@super:get:width": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _FlaxProxyDispatch4_super_get_width,
    ),
    "@super:get:left": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _FlaxProxyDispatch5_super_get_left,
    ),
    "@super:get:baseline": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _LineMetrics_super_get_baseline,
    ),
    "@super:get:lineNumber": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _LineMetrics_super_get_lineNumber,
    ),
  },
  constructors: {"@implementation": _flaxBinding559},
  create: _createLineMetrics,
  matches: _isLineMetrics,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding292,
    _flaxBinding560,
    _flaxBinding561,
    _flaxBinding562,
    _flaxBinding563,
    _flaxBinding564,
    _flaxBinding565,
    _flaxBinding566,
    _flaxBinding567,
    _flaxBinding568,
  ]),
);
const _flaxBinding570 = FlaxGetter(
  "languageCode",
  _flaxBinding13,
  _Locale_languageCode,
);
const _flaxBinding571 = FlaxGetter(
  "scriptCode",
  _flaxBinding531,
  _Locale_scriptCode,
);
const _flaxBinding572 = FlaxGetter(
  "countryCode",
  _flaxBinding531,
  _Locale_countryCode,
);
const _flaxBinding573 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _Locale_toString,
);
const _flaxBinding574 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _Locale_toLanguageTag,
);
const _flaxBinding575 = <FlaxParameter>[
  FlaxParameter("_languageCode", _flaxBinding13, required: true),
  FlaxParameter("_countryCode", _flaxBinding531, required: false),
];
const _flaxBinding576 = FlaxProxyMember(
  "toLanguageTag",
  0,
  _flaxBinding277,
  hasSuper: true,
);
const _flaxBinding577 = FlaxProxyMember(
  "languageCode",
  1,
  _flaxBinding277,
  hasSuper: true,
);
const _flaxBinding578 = FlaxProxyMember(
  "scriptCode",
  1,
  _flaxBinding545,
  hasSuper: true,
);
const _flaxBinding579 = FlaxProxyMember(
  "countryCode",
  1,
  _flaxBinding545,
  hasSuper: true,
);
const _flaxBinding580 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Locale",
  [_flaxBinding570, _flaxBinding571, _flaxBinding572],
  {
    "toString": _flaxBinding573,
    "toLanguageTag": _flaxBinding574,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:toLanguageTag": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _Locale_super_toLanguageTag,
    ),
    "@super:get:languageCode": FlaxInstanceMethod(
      [],
      _flaxBinding13,
      _Locale_super_get_languageCode,
    ),
    "@super:get:scriptCode": FlaxInstanceMethod(
      [],
      _flaxBinding531,
      _Locale_super_get_scriptCode,
    ),
    "@super:get:countryCode": FlaxInstanceMethod(
      [],
      _flaxBinding531,
      _Locale_super_get_countryCode,
    ),
  },
  constructors: {"@implementation": _flaxBinding575},
  create: _createLocale,
  matches: _isLocale,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding292,
    _flaxBinding576,
    _flaxBinding577,
    _flaxBinding578,
    _flaxBinding579,
  ]),
);
const _flaxBinding581 = FlaxGetter(
  "range",
  _flaxBinding441,
  _StringAttribute_range,
);
const _flaxBinding582 = <FlaxParameter>[
  FlaxParameter("range", _flaxBinding441, required: true),
];
const _flaxBinding583 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:StringAttribute",
);
const _flaxBinding584 = FlaxInstanceMethod(
  _flaxBinding582,
  _flaxBinding583,
  _StringAttribute_copy,
);
const _flaxBinding585 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:StringAttribute",
  [_flaxBinding581],
  {"copy": _flaxBinding584},
  constructors: {},
  create: _createStringAttribute,
  matches: _isStringAttribute,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding586 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding587 = FlaxGetter(
  "locale",
  _flaxBinding586,
  _LocaleStringAttribute_locale,
);
const _flaxBinding588 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _LocaleStringAttribute_toString,
);
const _flaxBinding589 = <FlaxParameter>[
  FlaxParameter("range", _flaxBinding441, required: true),
  FlaxParameter("locale", _flaxBinding586, required: true),
];
const _flaxBinding590 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "range",
      _flaxBinding441,
      required: true,
      positional: false,
    ),
  ],
  _flaxBinding583,
  id: "callback:<>(n:r:range:object:flax.core/flutter#type:TextRange)->object:flax.core/sdk_dart_ui#type:StringAttribute",
);
const _flaxBinding591 = FlaxProxyMember(
  "copy",
  0,
  _flaxBinding590,
  hasSuper: true,
);
const _flaxBinding592 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding586,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding593 = FlaxProxyMember(
  "locale",
  1,
  _flaxBinding592,
  hasSuper: true,
);
const _flaxBinding594 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding441,
  id: "callback:<>()->object:flax.core/flutter#type:TextRange",
);
const _flaxBinding595 = FlaxProxyMember(
  "range",
  1,
  _flaxBinding594,
  hasSuper: true,
);
const _flaxBinding596 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:LocaleStringAttribute",
  [_flaxBinding587],
  {
    "toString": _flaxBinding588,
    "@super:copy": FlaxInstanceMethod(
      _flaxBinding582,
      _flaxBinding583,
      _FlaxProxyDispatch6_super_call_copy,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:locale": FlaxInstanceMethod(
      [],
      _flaxBinding586,
      _LocaleStringAttribute_super_get_locale,
    ),
    "@super:get:range": FlaxInstanceMethod(
      [],
      _flaxBinding441,
      _FlaxProxyDispatch6_super_get_range,
    ),
  },
  constructors: {"@implementation": _flaxBinding589},
  create: _createLocaleStringAttribute,
  matches: _isLocaleStringAttribute,
  setters: [],
  supertypes: [
    "flax.core/sdk_dart_ui#type:StringAttribute",
    "dart:core::Object",
  ],
  parent: _flaxBinding585,
  proxy: FlaxProxyBinding([
    _flaxBinding591,
    _flaxBinding292,
    _flaxBinding593,
    _flaxBinding595,
  ]),
);
const _flaxBinding597 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _MaskFilter_toString,
);
const _flaxBinding598 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BlurStyle",
);
const _flaxBinding599 = <FlaxParameter>[
  FlaxParameter("_style", _flaxBinding598, required: true),
  FlaxParameter("_sigma", _flaxBinding37, required: true),
];
const _flaxBinding600 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:MaskFilter",
  [],
  {
    "toString": _flaxBinding597,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
  },
  constructors: {
    "@implementation": _flaxBinding599,
    "@implementation:blur": _flaxBinding599,
  },
  create: _createMaskFilter,
  matches: _isMaskFilter,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding292]),
);
const _flaxBinding601 = FlaxGetter(
  "isInfinite",
  _flaxBinding0,
  _OffsetBase_isInfinite,
);
const _flaxBinding602 = FlaxGetter(
  "isFinite",
  _flaxBinding0,
  _OffsetBase_isFinite,
);
const _flaxBinding603 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _OffsetBase_toString,
);
const _flaxBinding604 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OffsetBase",
);
const _flaxBinding605 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding604, required: true),
];
const _flaxBinding606 = FlaxInstanceMethod(
  _flaxBinding605,
  _flaxBinding0,
  _OffsetBase_operatorLessThan,
);
const _flaxBinding607 = FlaxInstanceMethod(
  _flaxBinding605,
  _flaxBinding0,
  _OffsetBase_operatorGreaterThan,
);
const _flaxBinding608 = FlaxInstanceMethod(
  _flaxBinding605,
  _flaxBinding0,
  _OffsetBase_operatorLessThanOrEqual,
);
const _flaxBinding609 = FlaxInstanceMethod(
  _flaxBinding605,
  _flaxBinding0,
  _OffsetBase_operatorGreaterThanOrEqual,
);
const _flaxBinding610 = <FlaxParameter>[
  FlaxParameter("_dx", _flaxBinding37, required: true),
  FlaxParameter("_dy", _flaxBinding37, required: true),
];
const _flaxBinding611 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "other",
      _flaxBinding604,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:other:object:flax.core/sdk_dart_ui#type:OffsetBase)->bool:",
);
const _flaxBinding612 = FlaxProxyMember(
  "operatorLessThan",
  0,
  _flaxBinding611,
  hasSuper: true,
);
const _flaxBinding613 = FlaxProxyMember(
  "operatorGreaterThan",
  0,
  _flaxBinding611,
  hasSuper: true,
);
const _flaxBinding614 = FlaxProxyMember(
  "operatorLessThanOrEqual",
  0,
  _flaxBinding611,
  hasSuper: true,
);
const _flaxBinding615 = FlaxProxyMember(
  "operatorGreaterThanOrEqual",
  0,
  _flaxBinding611,
  hasSuper: true,
);
const _flaxBinding616 = FlaxProxyMember(
  "isInfinite",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding617 = FlaxProxyMember(
  "isFinite",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding618 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:OffsetBase",
  [_flaxBinding601, _flaxBinding602],
  {
    "toString": _flaxBinding603,
    "operatorLessThan": _flaxBinding606,
    "operatorGreaterThan": _flaxBinding607,
    "operatorLessThanOrEqual": _flaxBinding608,
    "operatorGreaterThanOrEqual": _flaxBinding609,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:operatorLessThan": FlaxInstanceMethod(
      _flaxBinding605,
      _flaxBinding0,
      _OffsetBase_super_operatorLessThan,
    ),
    "@super:operatorGreaterThan": FlaxInstanceMethod(
      _flaxBinding605,
      _flaxBinding0,
      _OffsetBase_super_operatorGreaterThan,
    ),
    "@super:operatorLessThanOrEqual": FlaxInstanceMethod(
      _flaxBinding605,
      _flaxBinding0,
      _OffsetBase_super_operatorLessThanOrEqual,
    ),
    "@super:operatorGreaterThanOrEqual": FlaxInstanceMethod(
      _flaxBinding605,
      _flaxBinding0,
      _OffsetBase_super_operatorGreaterThanOrEqual,
    ),
    "@super:get:isInfinite": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _OffsetBase_super_get_isInfinite,
    ),
    "@super:get:isFinite": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _OffsetBase_super_get_isFinite,
    ),
  },
  constructors: {"@implementation": _flaxBinding610},
  create: _createOffsetBase,
  matches: _isOffsetBase,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding292,
    _flaxBinding612,
    _flaxBinding613,
    _flaxBinding614,
    _flaxBinding615,
    _flaxBinding616,
    _flaxBinding617,
  ]),
);
const _flaxBinding619 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding620 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding621 = FlaxGetter(
  "isAntiAlias",
  _flaxBinding0,
  _Paint_isAntiAlias,
);
const _flaxBinding622 = FlaxGetter("color", _flaxBinding66, _Paint_color);
const _flaxBinding623 = FlaxGetter(
  "blendMode",
  _flaxBinding67,
  _Paint_blendMode,
);
const _flaxBinding624 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PaintingStyle",
);
const _flaxBinding625 = FlaxGetter("style", _flaxBinding624, _Paint_style);
const _flaxBinding626 = FlaxGetter(
  "strokeWidth",
  _flaxBinding37,
  _Paint_strokeWidth,
);
const _flaxBinding627 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:StrokeCap",
);
const _flaxBinding628 = FlaxGetter(
  "strokeCap",
  _flaxBinding627,
  _Paint_strokeCap,
);
const _flaxBinding629 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:StrokeJoin",
);
const _flaxBinding630 = FlaxGetter(
  "strokeJoin",
  _flaxBinding629,
  _Paint_strokeJoin,
);
const _flaxBinding631 = FlaxGetter(
  "strokeMiterLimit",
  _flaxBinding37,
  _Paint_strokeMiterLimit,
);
const _flaxBinding632 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:MaskFilter",
  nullable: true,
);
const _flaxBinding633 = FlaxGetter(
  "maskFilter",
  _flaxBinding632,
  _Paint_maskFilter,
);
const _flaxBinding634 = FlaxGetter(
  "filterQuality",
  _flaxBinding396,
  _Paint_filterQuality,
);
const _flaxBinding635 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Shader",
  nullable: true,
);
const _flaxBinding636 = FlaxGetter("shader", _flaxBinding635, _Paint_shader);
const _flaxBinding637 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ColorFilter",
  nullable: true,
);
const _flaxBinding638 = FlaxGetter(
  "colorFilter",
  _flaxBinding637,
  _Paint_colorFilter,
);
const _flaxBinding639 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ImageFilter",
  nullable: true,
);
const _flaxBinding640 = FlaxGetter(
  "imageFilter",
  _flaxBinding639,
  _Paint_imageFilter,
);
const _flaxBinding641 = FlaxGetter(
  "invertColors",
  _flaxBinding0,
  _Paint_invertColors,
);
const _flaxBinding642 = FlaxSetter(
  "isAntiAlias",
  _flaxBinding0,
  _Paint_set_isAntiAlias,
);
const _flaxBinding643 = FlaxSetter("color", _flaxBinding66, _Paint_set_color);
const _flaxBinding644 = FlaxSetter(
  "blendMode",
  _flaxBinding67,
  _Paint_set_blendMode,
);
const _flaxBinding645 = FlaxSetter("style", _flaxBinding624, _Paint_set_style);
const _flaxBinding646 = FlaxSetter(
  "strokeWidth",
  _flaxBinding37,
  _Paint_set_strokeWidth,
);
const _flaxBinding647 = FlaxSetter(
  "strokeCap",
  _flaxBinding627,
  _Paint_set_strokeCap,
);
const _flaxBinding648 = FlaxSetter(
  "strokeJoin",
  _flaxBinding629,
  _Paint_set_strokeJoin,
);
const _flaxBinding649 = FlaxSetter(
  "strokeMiterLimit",
  _flaxBinding37,
  _Paint_set_strokeMiterLimit,
);
const _flaxBinding650 = FlaxSetter(
  "maskFilter",
  _flaxBinding632,
  _Paint_set_maskFilter,
);
const _flaxBinding651 = FlaxSetter(
  "filterQuality",
  _flaxBinding396,
  _Paint_set_filterQuality,
);
const _flaxBinding652 = FlaxSetter(
  "shader",
  _flaxBinding635,
  _Paint_set_shader,
);
const _flaxBinding653 = FlaxSetter(
  "colorFilter",
  _flaxBinding637,
  _Paint_set_colorFilter,
);
const _flaxBinding654 = FlaxSetter(
  "imageFilter",
  _flaxBinding639,
  _Paint_set_imageFilter,
);
const _flaxBinding655 = FlaxSetter(
  "invertColors",
  _flaxBinding0,
  _Paint_set_invertColors,
);
const _flaxBinding656 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _Paint_toString,
);
const _flaxBinding657 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding30, required: true),
];
const _flaxBinding658 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Paint",
  [
    _flaxBinding621,
    _flaxBinding622,
    _flaxBinding623,
    _flaxBinding625,
    _flaxBinding626,
    _flaxBinding628,
    _flaxBinding630,
    _flaxBinding631,
    _flaxBinding633,
    _flaxBinding634,
    _flaxBinding636,
    _flaxBinding638,
    _flaxBinding640,
    _flaxBinding641,
  ],
  {"toString": _flaxBinding656},
  constructors: {"": _flaxBinding12, "from": _flaxBinding657},
  create: _createPaint,
  matches: _isPaint,
  setters: [
    _flaxBinding642,
    _flaxBinding643,
    _flaxBinding644,
    _flaxBinding645,
    _flaxBinding646,
    _flaxBinding647,
    _flaxBinding648,
    _flaxBinding649,
    _flaxBinding650,
    _flaxBinding651,
    _flaxBinding652,
    _flaxBinding653,
    _flaxBinding654,
    _flaxBinding655,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding659 = FlaxGetter("width", _flaxBinding37, _Paragraph_width);
const _flaxBinding660 = FlaxGetter("height", _flaxBinding37, _Paragraph_height);
const _flaxBinding661 = FlaxGetter(
  "longestLine",
  _flaxBinding37,
  _Paragraph_longestLine,
);
const _flaxBinding662 = FlaxGetter(
  "minIntrinsicWidth",
  _flaxBinding37,
  _Paragraph_minIntrinsicWidth,
);
const _flaxBinding663 = FlaxGetter(
  "maxIntrinsicWidth",
  _flaxBinding37,
  _Paragraph_maxIntrinsicWidth,
);
const _flaxBinding664 = FlaxGetter(
  "alphabeticBaseline",
  _flaxBinding37,
  _Paragraph_alphabeticBaseline,
);
const _flaxBinding665 = FlaxGetter(
  "ideographicBaseline",
  _flaxBinding37,
  _Paragraph_ideographicBaseline,
);
const _flaxBinding666 = FlaxGetter(
  "didExceedMaxLines",
  _flaxBinding0,
  _Paragraph_didExceedMaxLines,
);
const _flaxBinding667 = FlaxGetter(
  "numberOfLines",
  _flaxBinding22,
  _Paragraph_numberOfLines,
);
const _flaxBinding668 = FlaxGetter(
  "debugDisposed",
  _flaxBinding0,
  _Paragraph_debugDisposed,
);
const _flaxBinding669 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ParagraphConstraints",
);
const _flaxBinding670 = <FlaxParameter>[
  FlaxParameter("constraints", _flaxBinding669, required: true),
];
const _flaxBinding671 = FlaxInstanceMethod(
  _flaxBinding670,
  _flaxBinding16,
  _Paragraph_layout,
);
const _flaxBinding672 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BoxHeightStyle",
);
const _flaxBinding673 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:BoxWidthStyle",
);
const _flaxBinding674 = <FlaxParameter>[
  FlaxParameter("start", _flaxBinding22, required: true),
  FlaxParameter("end", _flaxBinding22, required: true),
  FlaxParameter(
    "boxHeightStyle",
    _flaxBinding672,
    required: false,
    defaultValue: api.BoxHeightStyle.tight,
  ),
  FlaxParameter(
    "boxWidthStyle",
    _flaxBinding673,
    required: false,
    defaultValue: api.BoxWidthStyle.tight,
  ),
];
const _flaxBinding675 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextBox",
);
const _flaxBinding676 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding675,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:TextBox]",
    _collection15Create,
    _collection15Matches,
    restore: _collection15Restore,
  ),
);
const _flaxBinding677 = FlaxTypeRef(
  "list",
  item: _flaxBinding675,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:TextBox]",
    _collection14Create,
    _collection14Matches,
  ),
  iterable: _flaxBinding676,
);
const _flaxBinding678 = FlaxInstanceMethod(
  _flaxBinding674,
  _flaxBinding677,
  _Paragraph_getBoxesForRange,
);
const _flaxBinding679 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding677,
  _Paragraph_getBoxesForPlaceholders,
);
const _flaxBinding680 = <FlaxParameter>[
  FlaxParameter("offset", _flaxBinding70, required: true),
];
const _flaxBinding681 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextPosition",
);
const _flaxBinding682 = FlaxInstanceMethod(
  _flaxBinding680,
  _flaxBinding681,
  _Paragraph_getPositionForOffset,
);
const _flaxBinding683 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:GlyphInfo",
  nullable: true,
);
const _flaxBinding684 = FlaxInstanceMethod(
  _flaxBinding680,
  _flaxBinding683,
  _Paragraph_getClosestGlyphInfoForOffset,
);
const _flaxBinding685 = <FlaxParameter>[
  FlaxParameter("codeUnitOffset", _flaxBinding22, required: true),
];
const _flaxBinding686 = FlaxInstanceMethod(
  _flaxBinding685,
  _flaxBinding683,
  _Paragraph_getGlyphInfoAt,
);
const _flaxBinding687 = <FlaxParameter>[
  FlaxParameter("position", _flaxBinding681, required: true),
];
const _flaxBinding688 = FlaxInstanceMethod(
  _flaxBinding687,
  _flaxBinding441,
  _Paragraph_getWordBoundary,
);
const _flaxBinding689 = FlaxInstanceMethod(
  _flaxBinding687,
  _flaxBinding441,
  _Paragraph_getLineBoundary,
);
const _flaxBinding690 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:LineMetrics",
);
const _flaxBinding691 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding690,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:LineMetrics]",
    _collection17Create,
    _collection17Matches,
    restore: _collection17Restore,
  ),
);
const _flaxBinding692 = FlaxTypeRef(
  "list",
  item: _flaxBinding690,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:LineMetrics]",
    _collection16Create,
    _collection16Matches,
  ),
  iterable: _flaxBinding691,
);
const _flaxBinding693 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding692,
  _Paragraph_computeLineMetrics,
);
const _flaxBinding694 = <FlaxParameter>[
  FlaxParameter("lineNumber", _flaxBinding22, required: true),
];
const _flaxBinding695 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:LineMetrics",
  nullable: true,
);
const _flaxBinding696 = FlaxInstanceMethod(
  _flaxBinding694,
  _flaxBinding695,
  _Paragraph_getLineMetricsAt,
);
const _flaxBinding697 = FlaxInstanceMethod(
  _flaxBinding685,
  _flaxBinding364,
  _Paragraph_getLineNumberAt,
);
const _flaxBinding698 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Paragraph_dispose,
);
const _flaxBinding699 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "constraints",
      _flaxBinding669,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:constraints:object:flax.core/sdk_dart_ui#type:ParagraphConstraints)->void:",
);
const _flaxBinding700 = FlaxProxyMember("layout", 0, _flaxBinding699);
const _flaxBinding701 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "start",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "end",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "boxHeightStyle",
      _flaxBinding672,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "boxWidthStyle",
      _flaxBinding673,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding677,
  id: "callback:<>(p:r:start:int:,p:r:end:int:,n:o:boxHeightStyle:enum:flax.core/sdk_dart_ui#type:BoxHeightStyle,n:o:boxWidthStyle:enum:flax.core/sdk_dart_ui#type:BoxWidthStyle)->list:[object:flax.core/sdk_dart_ui#type:TextBox]",
);
const _flaxBinding702 = FlaxProxyMember("getBoxesForRange", 0, _flaxBinding701);
const _flaxBinding703 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding677,
  id: "callback:<>()->list:[object:flax.core/sdk_dart_ui#type:TextBox]",
);
const _flaxBinding704 = FlaxProxyMember(
  "getBoxesForPlaceholders",
  0,
  _flaxBinding703,
);
const _flaxBinding705 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding681,
  id: "callback:<>(p:r:offset:object:flax.core/flutter#type:Offset)->object:flax.core/sdk_dart_ui#type:TextPosition",
);
const _flaxBinding706 = FlaxProxyMember(
  "getPositionForOffset",
  0,
  _flaxBinding705,
);
const _flaxBinding707 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding683,
  id: "callback:<>(p:r:offset:object:flax.core/flutter#type:Offset)->object?:flax.core/sdk_dart_ui#type:GlyphInfo",
);
const _flaxBinding708 = FlaxProxyMember(
  "getClosestGlyphInfoForOffset",
  0,
  _flaxBinding707,
);
const _flaxBinding709 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "codeUnitOffset",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding683,
  id: "callback:<>(p:r:codeUnitOffset:int:)->object?:flax.core/sdk_dart_ui#type:GlyphInfo",
);
const _flaxBinding710 = FlaxProxyMember("getGlyphInfoAt", 0, _flaxBinding709);
const _flaxBinding711 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "position",
      _flaxBinding681,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding441,
  id: "callback:<>(p:r:position:object:flax.core/sdk_dart_ui#type:TextPosition)->object:flax.core/flutter#type:TextRange",
);
const _flaxBinding712 = FlaxProxyMember("getWordBoundary", 0, _flaxBinding711);
const _flaxBinding713 = FlaxProxyMember("getLineBoundary", 0, _flaxBinding711);
const _flaxBinding714 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding692,
  id: "callback:<>()->list:[object:flax.core/sdk_dart_ui#type:LineMetrics]",
);
const _flaxBinding715 = FlaxProxyMember(
  "computeLineMetrics",
  0,
  _flaxBinding714,
);
const _flaxBinding716 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "lineNumber",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding695,
  id: "callback:<>(p:r:lineNumber:int:)->object?:flax.core/sdk_dart_ui#type:LineMetrics",
);
const _flaxBinding717 = FlaxProxyMember("getLineMetricsAt", 0, _flaxBinding716);
const _flaxBinding718 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "codeUnitOffset",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding364,
  id: "callback:<>(p:r:codeUnitOffset:int:)->int?:",
);
const _flaxBinding719 = FlaxProxyMember("getLineNumberAt", 0, _flaxBinding718);
const _flaxBinding720 = FlaxProxyMember("width", 1, _flaxBinding280);
const _flaxBinding721 = FlaxProxyMember("height", 1, _flaxBinding280);
const _flaxBinding722 = FlaxProxyMember("longestLine", 1, _flaxBinding280);
const _flaxBinding723 = FlaxProxyMember(
  "minIntrinsicWidth",
  1,
  _flaxBinding280,
);
const _flaxBinding724 = FlaxProxyMember(
  "maxIntrinsicWidth",
  1,
  _flaxBinding280,
);
const _flaxBinding725 = FlaxProxyMember(
  "alphabeticBaseline",
  1,
  _flaxBinding280,
);
const _flaxBinding726 = FlaxProxyMember(
  "ideographicBaseline",
  1,
  _flaxBinding280,
);
const _flaxBinding727 = FlaxProxyMember(
  "didExceedMaxLines",
  1,
  _flaxBinding468,
);
const _flaxBinding728 = FlaxProxyMember("numberOfLines", 1, _flaxBinding25);
const _flaxBinding729 = FlaxProxyMember("debugDisposed", 1, _flaxBinding468);
const _flaxBinding730 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Paragraph",
  [
    _flaxBinding659,
    _flaxBinding660,
    _flaxBinding661,
    _flaxBinding662,
    _flaxBinding663,
    _flaxBinding664,
    _flaxBinding665,
    _flaxBinding666,
    _flaxBinding667,
    _flaxBinding668,
  ],
  {
    "layout": _flaxBinding671,
    "getBoxesForRange": _flaxBinding678,
    "getBoxesForPlaceholders": _flaxBinding679,
    "getPositionForOffset": _flaxBinding682,
    "getClosestGlyphInfoForOffset": _flaxBinding684,
    "getGlyphInfoAt": _flaxBinding686,
    "getWordBoundary": _flaxBinding688,
    "getLineBoundary": _flaxBinding689,
    "computeLineMetrics": _flaxBinding693,
    "getLineMetricsAt": _flaxBinding696,
    "getLineNumberAt": _flaxBinding697,
    "dispose": _flaxBinding698,
  },
  constructors: {"@implementation": _flaxBinding12},
  create: _createParagraph,
  matches: _isParagraph,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding700,
    _flaxBinding702,
    _flaxBinding704,
    _flaxBinding706,
    _flaxBinding708,
    _flaxBinding710,
    _flaxBinding712,
    _flaxBinding713,
    _flaxBinding715,
    _flaxBinding717,
    _flaxBinding719,
    _flaxBinding19,
    _flaxBinding720,
    _flaxBinding721,
    _flaxBinding722,
    _flaxBinding723,
    _flaxBinding724,
    _flaxBinding725,
    _flaxBinding726,
    _flaxBinding727,
    _flaxBinding728,
    _flaxBinding729,
  ]),
);
const _flaxBinding731 = FlaxGetter(
  "placeholderCount",
  _flaxBinding22,
  _ParagraphBuilder_placeholderCount,
);
const _flaxBinding732 = FlaxGetter(
  "placeholderScales",
  _flaxBinding265,
  _ParagraphBuilder_placeholderScales,
);
const _flaxBinding733 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextStyle",
);
const _flaxBinding734 = <FlaxParameter>[
  FlaxParameter("style", _flaxBinding733, required: true),
];
const _flaxBinding735 = FlaxInstanceMethod(
  _flaxBinding734,
  _flaxBinding16,
  _ParagraphBuilder_pushStyle,
);
const _flaxBinding736 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _ParagraphBuilder_pop,
);
const _flaxBinding737 = <FlaxParameter>[
  FlaxParameter("text", _flaxBinding13, required: true),
];
const _flaxBinding738 = FlaxInstanceMethod(
  _flaxBinding737,
  _flaxBinding16,
  _ParagraphBuilder_addText,
);
const _flaxBinding739 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PlaceholderAlignment",
);
const _flaxBinding740 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextBaseline",
  nullable: true,
);
const _flaxBinding741 = <FlaxParameter>[
  FlaxParameter("width", _flaxBinding37, required: true),
  FlaxParameter("height", _flaxBinding37, required: true),
  FlaxParameter("alignment", _flaxBinding739, required: true),
  FlaxParameter("baseline", _flaxBinding740, required: false),
  FlaxParameter("baselineOffset", _flaxBinding40, required: false),
  FlaxParameter("scale", _flaxBinding37, required: false, defaultValue: 1.0),
];
const _flaxBinding742 = FlaxInstanceMethod(
  _flaxBinding741,
  _flaxBinding16,
  _ParagraphBuilder_addPlaceholder,
);
const _flaxBinding743 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding100,
  _ParagraphBuilder_build,
);
const _flaxBinding744 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ParagraphStyle",
);
const _flaxBinding745 = <FlaxParameter>[
  FlaxParameter("style", _flaxBinding744, required: true),
];
const _flaxBinding746 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "style",
      _flaxBinding733,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:style:object:flax.core/sdk_dart_ui#type:TextStyle)->void:",
);
const _flaxBinding747 = FlaxProxyMember("pushStyle", 0, _flaxBinding746);
const _flaxBinding748 = FlaxProxyMember("pop", 0, _flaxBinding18);
const _flaxBinding749 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "text",
      _flaxBinding13,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:text:String:)->void:",
);
const _flaxBinding750 = FlaxProxyMember("addText", 0, _flaxBinding749);
const _flaxBinding751 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "width",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "height",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "alignment",
      _flaxBinding739,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "scale",
      _flaxBinding37,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "baselineOffset",
      _flaxBinding40,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "baseline",
      _flaxBinding740,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:width:double:,p:r:height:double:,p:r:alignment:enum:flax.core/sdk_dart_ui#type:PlaceholderAlignment,n:o:scale:double:,n:o:baselineOffset:double?:,n:o:baseline:enum?:flax.core/flutter#type:TextBaseline)->void:",
);
const _flaxBinding752 = FlaxProxyMember("addPlaceholder", 0, _flaxBinding751);
const _flaxBinding753 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding100,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Paragraph",
);
const _flaxBinding754 = FlaxProxyMember("build", 0, _flaxBinding753);
const _flaxBinding755 = FlaxProxyMember("placeholderCount", 1, _flaxBinding25);
const _flaxBinding756 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding265,
  id: "callback:<>()->list:[double:]",
);
const _flaxBinding757 = FlaxProxyMember(
  "placeholderScales",
  1,
  _flaxBinding756,
);
const _flaxBinding758 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ParagraphBuilder",
  [_flaxBinding731, _flaxBinding732],
  {
    "pushStyle": _flaxBinding735,
    "pop": _flaxBinding736,
    "addText": _flaxBinding738,
    "addPlaceholder": _flaxBinding742,
    "build": _flaxBinding743,
  },
  constructors: {"": _flaxBinding745, "@implementation": _flaxBinding12},
  create: _createParagraphBuilder,
  matches: _isParagraphBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding747,
    _flaxBinding748,
    _flaxBinding750,
    _flaxBinding752,
    _flaxBinding754,
    _flaxBinding755,
    _flaxBinding757,
  ]),
);
const _flaxBinding759 = FlaxGetter(
  "width",
  _flaxBinding37,
  _ParagraphConstraints_width,
);
const _flaxBinding760 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _ParagraphConstraints_toString,
);
const _flaxBinding761 = <FlaxParameter>[
  FlaxParameter("width", _flaxBinding37, required: true),
];
const _flaxBinding762 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ParagraphConstraints",
  [_flaxBinding759],
  {
    "toString": _flaxBinding760,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:width": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _FlaxProxyDispatch4_super_get_width,
    ),
  },
  constructors: {"@implementation": _flaxBinding761},
  create: _createParagraphConstraints,
  matches: _isParagraphConstraints,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding292, _flaxBinding565]),
);
const _flaxBinding763 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _ParagraphStyle_toString,
);
const _flaxBinding764 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextAlign",
  nullable: true,
);
const _flaxBinding765 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextDirection",
  nullable: true,
);
const _flaxBinding766 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextHeightBehavior",
  nullable: true,
);
const _flaxBinding767 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:FontWeight",
  nullable: true,
);
const _flaxBinding768 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:FontStyle",
  nullable: true,
);
const _flaxBinding769 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:StrutStyle",
  nullable: true,
);
const _flaxBinding770 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
  nullable: true,
);
const _flaxBinding771 = <FlaxParameter>[
  FlaxParameter("textAlign", _flaxBinding764, required: false),
  FlaxParameter("textDirection", _flaxBinding765, required: false),
  FlaxParameter("maxLines", _flaxBinding364, required: false),
  FlaxParameter("fontFamily", _flaxBinding531, required: false),
  FlaxParameter("fontSize", _flaxBinding40, required: false),
  FlaxParameter("height", _flaxBinding40, required: false),
  FlaxParameter("textHeightBehavior", _flaxBinding766, required: false),
  FlaxParameter("fontWeight", _flaxBinding767, required: false),
  FlaxParameter("fontStyle", _flaxBinding768, required: false),
  FlaxParameter("strutStyle", _flaxBinding769, required: false),
  FlaxParameter("ellipsis", _flaxBinding531, required: false),
  FlaxParameter("locale", _flaxBinding770, required: false),
];
const _flaxBinding772 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ParagraphStyle",
  [],
  {
    "toString": _flaxBinding763,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
  },
  constructors: {"@implementation": _flaxBinding771},
  create: _createParagraphStyle,
  matches: _isParagraphStyle,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding292]),
);
const _flaxBinding773 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PathFillType",
);
const _flaxBinding774 = FlaxGetter("fillType", _flaxBinding773, _Path_fillType);
const _flaxBinding775 = FlaxSetter(
  "fillType",
  _flaxBinding773,
  _Path_set_fillType,
);
const _flaxBinding776 = <FlaxParameter>[
  FlaxParameter("x", _flaxBinding37, required: true),
  FlaxParameter("y", _flaxBinding37, required: true),
];
const _flaxBinding777 = FlaxInstanceMethod(
  _flaxBinding776,
  _flaxBinding16,
  _Path_moveTo,
);
const _flaxBinding778 = FlaxInstanceMethod(
  _flaxBinding38,
  _flaxBinding16,
  _Path_relativeMoveTo,
);
const _flaxBinding779 = FlaxInstanceMethod(
  _flaxBinding776,
  _flaxBinding16,
  _Path_lineTo,
);
const _flaxBinding780 = FlaxInstanceMethod(
  _flaxBinding38,
  _flaxBinding16,
  _Path_relativeLineTo,
);
const _flaxBinding781 = <FlaxParameter>[
  FlaxParameter("x1", _flaxBinding37, required: true),
  FlaxParameter("y1", _flaxBinding37, required: true),
  FlaxParameter("x2", _flaxBinding37, required: true),
  FlaxParameter("y2", _flaxBinding37, required: true),
];
const _flaxBinding782 = FlaxInstanceMethod(
  _flaxBinding781,
  _flaxBinding16,
  _Path_quadraticBezierTo,
);
const _flaxBinding783 = FlaxInstanceMethod(
  _flaxBinding781,
  _flaxBinding16,
  _Path_relativeQuadraticBezierTo,
);
const _flaxBinding784 = <FlaxParameter>[
  FlaxParameter("x1", _flaxBinding37, required: true),
  FlaxParameter("y1", _flaxBinding37, required: true),
  FlaxParameter("x2", _flaxBinding37, required: true),
  FlaxParameter("y2", _flaxBinding37, required: true),
  FlaxParameter("x3", _flaxBinding37, required: true),
  FlaxParameter("y3", _flaxBinding37, required: true),
];
const _flaxBinding785 = FlaxInstanceMethod(
  _flaxBinding784,
  _flaxBinding16,
  _Path_cubicTo,
);
const _flaxBinding786 = FlaxInstanceMethod(
  _flaxBinding784,
  _flaxBinding16,
  _Path_relativeCubicTo,
);
const _flaxBinding787 = <FlaxParameter>[
  FlaxParameter("x1", _flaxBinding37, required: true),
  FlaxParameter("y1", _flaxBinding37, required: true),
  FlaxParameter("x2", _flaxBinding37, required: true),
  FlaxParameter("y2", _flaxBinding37, required: true),
  FlaxParameter("w", _flaxBinding37, required: true),
];
const _flaxBinding788 = FlaxInstanceMethod(
  _flaxBinding787,
  _flaxBinding16,
  _Path_conicTo,
);
const _flaxBinding789 = FlaxInstanceMethod(
  _flaxBinding787,
  _flaxBinding16,
  _Path_relativeConicTo,
);
const _flaxBinding790 = <FlaxParameter>[
  FlaxParameter("rect", _flaxBinding51, required: true),
  FlaxParameter("startAngle", _flaxBinding37, required: true),
  FlaxParameter("sweepAngle", _flaxBinding37, required: true),
  FlaxParameter("forceMoveTo", _flaxBinding0, required: true),
];
const _flaxBinding791 = FlaxInstanceMethod(
  _flaxBinding790,
  _flaxBinding16,
  _Path_arcTo,
);
const _flaxBinding792 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Radius",
);
const _flaxBinding793 = <FlaxParameter>[
  FlaxParameter("arcEnd", _flaxBinding70, required: true),
  FlaxParameter(
    "clockwise",
    _flaxBinding0,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "largeArc",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "radius",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("rotation", _flaxBinding37, required: false, defaultValue: 0.0),
];
const _flaxBinding794 = FlaxInstanceMethod(
  _flaxBinding793,
  _flaxBinding16,
  _Path_arcToPoint,
);
const _flaxBinding795 = <FlaxParameter>[
  FlaxParameter("arcEndDelta", _flaxBinding70, required: true),
  FlaxParameter(
    "clockwise",
    _flaxBinding0,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "largeArc",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "radius",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("rotation", _flaxBinding37, required: false, defaultValue: 0.0),
];
const _flaxBinding796 = FlaxInstanceMethod(
  _flaxBinding795,
  _flaxBinding16,
  _Path_relativeArcToPoint,
);
const _flaxBinding797 = <FlaxParameter>[
  FlaxParameter("rect", _flaxBinding51, required: true),
];
const _flaxBinding798 = FlaxInstanceMethod(
  _flaxBinding797,
  _flaxBinding16,
  _Path_addRect,
);
const _flaxBinding799 = <FlaxParameter>[
  FlaxParameter("oval", _flaxBinding51, required: true),
];
const _flaxBinding800 = FlaxInstanceMethod(
  _flaxBinding799,
  _flaxBinding16,
  _Path_addOval,
);
const _flaxBinding801 = <FlaxParameter>[
  FlaxParameter("oval", _flaxBinding51, required: true),
  FlaxParameter("startAngle", _flaxBinding37, required: true),
  FlaxParameter("sweepAngle", _flaxBinding37, required: true),
];
const _flaxBinding802 = FlaxInstanceMethod(
  _flaxBinding801,
  _flaxBinding16,
  _Path_addArc,
);
const _flaxBinding803 = <FlaxParameter>[
  FlaxParameter("points", _flaxBinding105, required: true),
  FlaxParameter("close", _flaxBinding0, required: true),
];
const _flaxBinding804 = FlaxInstanceMethod(
  _flaxBinding803,
  _flaxBinding16,
  _Path_addPolygon,
);
const _flaxBinding805 = <FlaxParameter>[
  FlaxParameter("rrect", _flaxBinding55, required: true),
];
const _flaxBinding806 = FlaxInstanceMethod(
  _flaxBinding805,
  _flaxBinding16,
  _Path_addRRect,
);
const _flaxBinding807 = <FlaxParameter>[
  FlaxParameter("rsuperellipse", _flaxBinding58, required: true),
];
const _flaxBinding808 = FlaxInstanceMethod(
  _flaxBinding807,
  _flaxBinding16,
  _Path_addRSuperellipse,
);
const _flaxBinding809 = <FlaxParameter>[
  FlaxParameter("path", _flaxBinding61, required: true),
  FlaxParameter("offset", _flaxBinding70, required: true),
  FlaxParameter("matrix4", _flaxBinding451, required: false),
];
const _flaxBinding810 = FlaxInstanceMethod(
  _flaxBinding809,
  _flaxBinding16,
  _Path_addPath,
);
const _flaxBinding811 = FlaxInstanceMethod(
  _flaxBinding809,
  _flaxBinding16,
  _Path_extendWithPath,
);
const _flaxBinding812 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Path_close,
);
const _flaxBinding813 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Path_reset,
);
const _flaxBinding814 = <FlaxParameter>[
  FlaxParameter("point", _flaxBinding70, required: true),
];
const _flaxBinding815 = FlaxInstanceMethod(
  _flaxBinding814,
  _flaxBinding0,
  _Path_contains,
);
const _flaxBinding816 = FlaxInstanceMethod(
  _flaxBinding680,
  _flaxBinding61,
  _Path_shift,
);
const _flaxBinding817 = FlaxInstanceMethod(
  _flaxBinding48,
  _flaxBinding61,
  _Path_transform,
);
const _flaxBinding818 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding51,
  _Path_getBounds,
);
const _flaxBinding819 = <FlaxParameter>[
  FlaxParameter(
    "forceClosed",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding820 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PathMetrics",
);
const _flaxBinding821 = FlaxInstanceMethod(
  _flaxBinding819,
  _flaxBinding820,
  _Path_computeMetrics,
);
const _flaxBinding822 = <FlaxParameter>[
  FlaxParameter("source", _flaxBinding61, required: true),
];
const _flaxBinding823 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "x",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "y",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:x:double:,p:r:y:double:)->void:",
);
const _flaxBinding824 = FlaxProxyMember("moveTo", 0, _flaxBinding823);
const _flaxBinding825 = FlaxProxyMember("relativeMoveTo", 0, _flaxBinding138);
const _flaxBinding826 = FlaxProxyMember("lineTo", 0, _flaxBinding823);
const _flaxBinding827 = FlaxProxyMember("relativeLineTo", 0, _flaxBinding138);
const _flaxBinding828 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "x1",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "y1",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "x2",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "y2",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:x1:double:,p:r:y1:double:,p:r:x2:double:,p:r:y2:double:)->void:",
);
const _flaxBinding829 = FlaxProxyMember(
  "quadraticBezierTo",
  0,
  _flaxBinding828,
);
const _flaxBinding830 = FlaxProxyMember(
  "relativeQuadraticBezierTo",
  0,
  _flaxBinding828,
);
const _flaxBinding831 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "x1",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "y1",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "x2",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "y2",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "x3",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "y3",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:x1:double:,p:r:y1:double:,p:r:x2:double:,p:r:y2:double:,p:r:x3:double:,p:r:y3:double:)->void:",
);
const _flaxBinding832 = FlaxProxyMember("cubicTo", 0, _flaxBinding831);
const _flaxBinding833 = FlaxProxyMember("relativeCubicTo", 0, _flaxBinding831);
const _flaxBinding834 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "x1",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "y1",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "x2",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "y2",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "w",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:x1:double:,p:r:y1:double:,p:r:x2:double:,p:r:y2:double:,p:r:w:double:)->void:",
);
const _flaxBinding835 = FlaxProxyMember("conicTo", 0, _flaxBinding834);
const _flaxBinding836 = FlaxProxyMember("relativeConicTo", 0, _flaxBinding834);
const _flaxBinding837 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rect",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "startAngle",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "sweepAngle",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "forceMoveTo",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,p:r:startAngle:double:,p:r:sweepAngle:double:,p:r:forceMoveTo:bool:)->void:",
);
const _flaxBinding838 = FlaxProxyMember("arcTo", 0, _flaxBinding837);
const _flaxBinding839 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "arcEnd",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "radius",
      _flaxBinding792,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "rotation",
      _flaxBinding37,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "largeArc",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "clockwise",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:arcEnd:object:flax.core/flutter#type:Offset,n:o:radius:object:flax.core/flutter#type:Radius,n:o:rotation:double:,n:o:largeArc:bool:,n:o:clockwise:bool:)->void:",
);
const _flaxBinding840 = FlaxProxyMember("arcToPoint", 0, _flaxBinding839);
const _flaxBinding841 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "arcEndDelta",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "radius",
      _flaxBinding792,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "rotation",
      _flaxBinding37,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "largeArc",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "clockwise",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:arcEndDelta:object:flax.core/flutter#type:Offset,n:o:radius:object:flax.core/flutter#type:Radius,n:o:rotation:double:,n:o:largeArc:bool:,n:o:clockwise:bool:)->void:",
);
const _flaxBinding842 = FlaxProxyMember(
  "relativeArcToPoint",
  0,
  _flaxBinding841,
);
const _flaxBinding843 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rect",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding844 = FlaxProxyMember("addRect", 0, _flaxBinding843);
const _flaxBinding845 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "oval",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:oval:object:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding846 = FlaxProxyMember("addOval", 0, _flaxBinding845);
const _flaxBinding847 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "oval",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "startAngle",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "sweepAngle",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:oval:object:flax.core/sdk_dart_ui#type:Rect,p:r:startAngle:double:,p:r:sweepAngle:double:)->void:",
);
const _flaxBinding848 = FlaxProxyMember("addArc", 0, _flaxBinding847);
const _flaxBinding849 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "points",
      _flaxBinding105,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "close",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:points:list:[object:flax.core/flutter#type:Offset],p:r:close:bool:)->void:",
);
const _flaxBinding850 = FlaxProxyMember("addPolygon", 0, _flaxBinding849);
const _flaxBinding851 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rrect",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rrect:object:flax.core/sdk_dart_ui#type:RRect)->void:",
);
const _flaxBinding852 = FlaxProxyMember("addRRect", 0, _flaxBinding851);
const _flaxBinding853 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rsuperellipse",
      _flaxBinding58,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:rsuperellipse:object:flax.core/sdk_dart_ui#type:RSuperellipse)->void:",
);
const _flaxBinding854 = FlaxProxyMember("addRSuperellipse", 0, _flaxBinding853);
const _flaxBinding855 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "path",
      _flaxBinding61,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "matrix4",
      _flaxBinding451,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,p:r:offset:object:flax.core/flutter#type:Offset,n:o:matrix4:Float64List?:)->void:",
);
const _flaxBinding856 = FlaxProxyMember("addPath", 0, _flaxBinding855);
const _flaxBinding857 = FlaxProxyMember("extendWithPath", 0, _flaxBinding855);
const _flaxBinding858 = FlaxProxyMember("close", 0, _flaxBinding18);
const _flaxBinding859 = FlaxProxyMember("reset", 0, _flaxBinding18);
const _flaxBinding860 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "point",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:point:object:flax.core/flutter#type:Offset)->bool:",
);
const _flaxBinding861 = FlaxProxyMember("contains", 0, _flaxBinding860);
const _flaxBinding862 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding61,
  id: "callback:<>(p:r:offset:object:flax.core/flutter#type:Offset)->object:flax.core/sdk_dart_ui#type:Path",
);
const _flaxBinding863 = FlaxProxyMember("shift", 0, _flaxBinding862);
const _flaxBinding864 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "matrix4",
      _flaxBinding47,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding61,
  id: "callback:<>(p:r:matrix4:Float64List:)->object:flax.core/sdk_dart_ui#type:Path",
);
const _flaxBinding865 = FlaxProxyMember("transform", 0, _flaxBinding864);
const _flaxBinding866 = FlaxProxyMember("getBounds", 0, _flaxBinding158);
const _flaxBinding867 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "forceClosed",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding820,
  id: "callback:<>(n:o:forceClosed:bool:)->object:flax.core/sdk_dart_ui#type:PathMetrics",
);
const _flaxBinding868 = FlaxProxyMember("computeMetrics", 0, _flaxBinding867);
const _flaxBinding869 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding773,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:PathFillType",
);
const _flaxBinding870 = FlaxProxyMember("fillType", 1, _flaxBinding869);
const _flaxBinding871 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding773,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:value:enum:flax.core/sdk_dart_ui#type:PathFillType)->void:",
);
const _flaxBinding872 = FlaxProxyMember("fillType", 2, _flaxBinding871);
const _flaxBinding873 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Path",
  [_flaxBinding774],
  {
    "moveTo": _flaxBinding777,
    "relativeMoveTo": _flaxBinding778,
    "lineTo": _flaxBinding779,
    "relativeLineTo": _flaxBinding780,
    "quadraticBezierTo": _flaxBinding782,
    "relativeQuadraticBezierTo": _flaxBinding783,
    "cubicTo": _flaxBinding785,
    "relativeCubicTo": _flaxBinding786,
    "conicTo": _flaxBinding788,
    "relativeConicTo": _flaxBinding789,
    "arcTo": _flaxBinding791,
    "arcToPoint": _flaxBinding794,
    "relativeArcToPoint": _flaxBinding796,
    "addRect": _flaxBinding798,
    "addOval": _flaxBinding800,
    "addArc": _flaxBinding802,
    "addPolygon": _flaxBinding804,
    "addRRect": _flaxBinding806,
    "addRSuperellipse": _flaxBinding808,
    "addPath": _flaxBinding810,
    "extendWithPath": _flaxBinding811,
    "close": _flaxBinding812,
    "reset": _flaxBinding813,
    "contains": _flaxBinding815,
    "shift": _flaxBinding816,
    "transform": _flaxBinding817,
    "getBounds": _flaxBinding818,
    "computeMetrics": _flaxBinding821,
  },
  constructors: {
    "": _flaxBinding12,
    "from": _flaxBinding822,
    "@implementation": _flaxBinding12,
  },
  create: _createPath,
  matches: _isPath,
  setters: [_flaxBinding775],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding824,
    _flaxBinding825,
    _flaxBinding826,
    _flaxBinding827,
    _flaxBinding829,
    _flaxBinding830,
    _flaxBinding832,
    _flaxBinding833,
    _flaxBinding835,
    _flaxBinding836,
    _flaxBinding838,
    _flaxBinding840,
    _flaxBinding842,
    _flaxBinding844,
    _flaxBinding846,
    _flaxBinding848,
    _flaxBinding850,
    _flaxBinding852,
    _flaxBinding854,
    _flaxBinding856,
    _flaxBinding857,
    _flaxBinding858,
    _flaxBinding859,
    _flaxBinding861,
    _flaxBinding863,
    _flaxBinding865,
    _flaxBinding866,
    _flaxBinding868,
    _flaxBinding870,
    _flaxBinding872,
  ]),
);
const _flaxBinding874 = FlaxGetter(
  "length",
  _flaxBinding37,
  _PathMetric_length,
);
const _flaxBinding875 = FlaxGetter(
  "isClosed",
  _flaxBinding0,
  _PathMetric_isClosed,
);
const _flaxBinding876 = FlaxGetter(
  "contourIndex",
  _flaxBinding22,
  _PathMetric_contourIndex,
);
const _flaxBinding877 = <FlaxParameter>[
  FlaxParameter("distance", _flaxBinding37, required: true),
];
const _flaxBinding878 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Tangent",
  nullable: true,
);
const _flaxBinding879 = FlaxInstanceMethod(
  _flaxBinding877,
  _flaxBinding878,
  _PathMetric_getTangentForOffset,
);
const _flaxBinding880 = <FlaxParameter>[
  FlaxParameter("start", _flaxBinding37, required: true),
  FlaxParameter("end", _flaxBinding37, required: true),
  FlaxParameter(
    "startWithMoveTo",
    _flaxBinding0,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding881 = FlaxInstanceMethod(
  _flaxBinding880,
  _flaxBinding61,
  _PathMetric_extractPath,
);
const _flaxBinding882 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _PathMetric_toString,
);
const _flaxBinding883 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PathMetric",
  [_flaxBinding874, _flaxBinding875, _flaxBinding876],
  {
    "getTangentForOffset": _flaxBinding879,
    "extractPath": _flaxBinding881,
    "toString": _flaxBinding882,
  },
  constructors: {},
  create: _createPathMetric,
  matches: _isPathMetric,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding884 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PathMetric",
);
const _flaxBinding885 = FlaxGetter(
  "current",
  _flaxBinding884,
  _PathMetricIterator_current,
);
const _flaxBinding886 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding0,
  _PathMetricIterator_moveNext,
);
const _flaxBinding887 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PathMetricIterator",
  [_flaxBinding885],
  {"moveNext": _flaxBinding886},
  constructors: {},
  create: _createPathMetricIterator,
  matches: _isPathMetricIterator,
  setters: [],
  supertypes: ["dart:core::Object", "flax.core/flutter#type:Iterator"],
);
const _flaxBinding888 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Iterator",
  dartType: FlaxDartTypes.typeOf<api2.Iterator<api.PathMetric>>,
);
const _flaxBinding889 = FlaxGetter(
  "iterator",
  _flaxBinding888,
  _PathMetrics_iterator,
);
const _flaxBinding890 = FlaxGetter(
  "length",
  _flaxBinding22,
  _PathMetrics_length,
);
const _flaxBinding891 = FlaxGetter(
  "isEmpty",
  _flaxBinding0,
  _PathMetrics_isEmpty,
);
const _flaxBinding892 = FlaxGetter(
  "isNotEmpty",
  _flaxBinding0,
  _PathMetrics_isNotEmpty,
);
const _flaxBinding893 = FlaxGetter(
  "first",
  _flaxBinding884,
  _PathMetrics_first,
);
const _flaxBinding894 = FlaxGetter("last", _flaxBinding884, _PathMetrics_last);
const _flaxBinding895 = FlaxGetter(
  "single",
  _flaxBinding884,
  _PathMetrics_single,
);
const _flaxBinding896 = FlaxTypeRef("any", nullable: true);
const _flaxBinding897 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding884,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:PathMetric]",
    _collection19Create,
    _collection19Matches,
    restore: _collection19Restore,
  ),
);
const _flaxBinding898 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding897, required: true),
];
const _flaxBinding899 = FlaxInstanceMethod(
  _flaxBinding898,
  _flaxBinding897,
  _PathMetrics_followedBy,
);
const _flaxBinding900 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "element",
      _flaxBinding884,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  FlaxCallbackAdapters.wrap1<api.PathMetric, bool>,
  id: "callback:<>(p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api.PathMetric, bool>,
  matches: FlaxCallbackAdapters.matches1<api.PathMetric, bool>,
);
const _flaxBinding901 = FlaxTypeRef("callback", callback: _flaxBinding900);
const _flaxBinding902 = <FlaxParameter>[
  FlaxParameter("test", _flaxBinding901, required: true),
];
const _flaxBinding903 = FlaxInstanceMethod(
  _flaxBinding902,
  _flaxBinding897,
  _PathMetrics_where,
);
const _flaxBinding904 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding896,
  collection: FlaxCollectionBinding(
    "iterable:[any?:]",
    _collection18Create,
    _collection18Matches,
    restore: _collection18Restore,
  ),
);
const _flaxBinding905 = <FlaxParameter>[
  FlaxParameter("element", _flaxBinding896, required: true),
];
const _flaxBinding906 = FlaxInstanceMethod(
  _flaxBinding905,
  _flaxBinding0,
  _PathMetrics_contains,
);
const _flaxBinding907 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "element",
      _flaxBinding884,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<api.PathMetric>,
  id: "callback:<>(p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.PathMetric>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.PathMetric>,
);
const _flaxBinding908 = FlaxTypeRef("callback", callback: _flaxBinding907);
const _flaxBinding909 = <FlaxParameter>[
  FlaxParameter("action", _flaxBinding908, required: true),
];
const _flaxBinding910 = FlaxInstanceMethod(
  _flaxBinding909,
  _flaxBinding16,
  _PathMetrics_forEach,
);
const _flaxBinding911 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding884,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "element",
      _flaxBinding884,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding884,
  FlaxCallbackAdapters.wrap2<api.PathMetric, api.PathMetric, api.PathMetric>,
  id: "callback:<>(p:r:value:object:flax.core/sdk_dart_ui#type:PathMetric,p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->object:flax.core/sdk_dart_ui#type:PathMetric",
  invoke: FlaxCallbackAdapters
      .invoke2<api.PathMetric, api.PathMetric, api.PathMetric>,
  matches: FlaxCallbackAdapters
      .matches2<api.PathMetric, api.PathMetric, api.PathMetric>,
);
const _flaxBinding912 = FlaxTypeRef("callback", callback: _flaxBinding911);
const _flaxBinding913 = <FlaxParameter>[
  FlaxParameter("combine", _flaxBinding912, required: true),
];
const _flaxBinding914 = FlaxInstanceMethod(
  _flaxBinding913,
  _flaxBinding884,
  _PathMetrics_reduce,
);
const _flaxBinding915 = FlaxInstanceMethod(
  _flaxBinding902,
  _flaxBinding0,
  _PathMetrics_every,
);
const _flaxBinding916 = <FlaxParameter>[
  FlaxParameter("separator", _flaxBinding13, required: false, defaultValue: ''),
];
const _flaxBinding917 = FlaxInstanceMethod(
  _flaxBinding916,
  _flaxBinding13,
  _PathMetrics_join,
);
const _flaxBinding918 = FlaxInstanceMethod(
  _flaxBinding902,
  _flaxBinding0,
  _PathMetrics_any,
);
const _flaxBinding919 = <FlaxParameter>[
  FlaxParameter("growable", _flaxBinding0, required: false, defaultValue: true),
];
const _flaxBinding920 = FlaxTypeRef(
  "list",
  item: _flaxBinding884,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:PathMetric]",
    _collection20Create,
    _collection20Matches,
  ),
  iterable: _flaxBinding897,
);
const _flaxBinding921 = FlaxInstanceMethod(
  _flaxBinding919,
  _flaxBinding920,
  _PathMetrics_toList,
);
const _flaxBinding922 = FlaxTypeRef(
  "set",
  item: _flaxBinding884,
  collection: FlaxCollectionBinding(
    "set:[object:flax.core/sdk_dart_ui#type:PathMetric]",
    _collection21Create,
    _collection21Matches,
  ),
  iterable: _flaxBinding897,
);
const _flaxBinding923 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding922,
  _PathMetrics_toSet,
);
const _flaxBinding924 = FlaxInstanceMethod(
  _flaxBinding34,
  _flaxBinding897,
  _PathMetrics_take,
);
const _flaxBinding925 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding884,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  FlaxCallbackAdapters.wrap1<api.PathMetric, bool>,
  id: "callback:<>(p:r:value:object:flax.core/sdk_dart_ui#type:PathMetric)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api.PathMetric, bool>,
  matches: FlaxCallbackAdapters.matches1<api.PathMetric, bool>,
);
const _flaxBinding926 = FlaxTypeRef("callback", callback: _flaxBinding925);
const _flaxBinding927 = <FlaxParameter>[
  FlaxParameter("test", _flaxBinding926, required: true),
];
const _flaxBinding928 = FlaxInstanceMethod(
  _flaxBinding927,
  _flaxBinding897,
  _PathMetrics_takeWhile,
);
const _flaxBinding929 = FlaxInstanceMethod(
  _flaxBinding34,
  _flaxBinding897,
  _PathMetrics_skip,
);
const _flaxBinding930 = FlaxInstanceMethod(
  _flaxBinding927,
  _flaxBinding897,
  _PathMetrics_skipWhile,
);
const _flaxBinding931 = FlaxCallbackBinding(
  [],
  _flaxBinding884,
  FlaxCallbackAdapters.wrap0<api.PathMetric>,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:PathMetric",
  invoke: FlaxCallbackAdapters.invoke0<api.PathMetric>,
  matches: FlaxCallbackAdapters.matches0<api.PathMetric>,
);
const _flaxBinding932 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding931,
);
const _flaxBinding933 = <FlaxParameter>[
  FlaxParameter("test", _flaxBinding901, required: true),
  FlaxParameter("orElse", _flaxBinding932, required: false),
];
const _flaxBinding934 = FlaxInstanceMethod(
  _flaxBinding933,
  _flaxBinding884,
  _PathMetrics_firstWhere,
);
const _flaxBinding935 = FlaxInstanceMethod(
  _flaxBinding933,
  _flaxBinding884,
  _PathMetrics_lastWhere,
);
const _flaxBinding936 = FlaxInstanceMethod(
  _flaxBinding933,
  _flaxBinding884,
  _PathMetrics_singleWhere,
);
const _flaxBinding937 = <FlaxParameter>[
  FlaxParameter("index", _flaxBinding22, required: true),
];
const _flaxBinding938 = FlaxInstanceMethod(
  _flaxBinding937,
  _flaxBinding884,
  _PathMetrics_elementAt,
);
const _flaxBinding939 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PathMetrics",
  [
    _flaxBinding889,
    _flaxBinding890,
    _flaxBinding891,
    _flaxBinding892,
    _flaxBinding893,
    _flaxBinding894,
    _flaxBinding895,
  ],
  {
    "cast": FlaxInstanceMethod(
      _flaxBinding12,
      FlaxTypeRef(
        "iterable",
        item: _flaxBinding896,
        collection: FlaxCollectionBinding(
          "iterable:[any?:]",
          _collection18Create,
          _collection18Matches,
          restore: _collection18Restore,
        ),
      ),
      _PathMetrics_cast,
      genericFactory: _flaxGeneric_PathMetrics_cast,
      ownerTypes: [],
    ),
    "followedBy": _flaxBinding899,
    "map": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "toElement",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "e",
                  _flaxBinding884,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding896,
              _callback1,
              id: "callback:<>(p:r:e:object:flax.core/sdk_dart_ui#type:PathMetric)->any?:",
              invoke: _callback1Invoke,
              matches: _callback1Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "iterable",
        item: _flaxBinding896,
        collection: FlaxCollectionBinding(
          "iterable:[any?:]",
          _collection18Create,
          _collection18Matches,
          restore: _collection18Restore,
        ),
      ),
      _PathMetrics_map,
      genericFactory: _flaxGeneric_PathMetrics_map,
      ownerTypes: [],
    ),
    "where": _flaxBinding903,
    "whereType": FlaxInstanceMethod(
      _flaxBinding12,
      FlaxTypeRef(
        "iterable",
        item: _flaxBinding896,
        collection: FlaxCollectionBinding(
          "iterable:[any?:]",
          _collection18Create,
          _collection18Matches,
          restore: _collection18Restore,
        ),
      ),
      _PathMetrics_whereType,
      genericFactory: _flaxGeneric_PathMetrics_whereType,
      ownerTypes: [],
    ),
    "expand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "toElements",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding884,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding904,
              _callback2,
              id: "callback:<>(p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->iterable:[any?:]",
              invoke: _callback2Invoke,
              matches: _callback2Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "iterable",
        item: _flaxBinding896,
        collection: FlaxCollectionBinding(
          "iterable:[any?:]",
          _collection18Create,
          _collection18Matches,
          restore: _collection18Restore,
        ),
      ),
      _PathMetrics_expand,
      genericFactory: _flaxGeneric_PathMetrics_expand,
      ownerTypes: [],
    ),
    "contains": _flaxBinding906,
    "forEach": _flaxBinding910,
    "reduce": _flaxBinding914,
    "fold": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "initialValue",
          FlaxTypeRef("any", nullable: true),
          required: true,
        ),
        FlaxParameter(
          "combine",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "previousValue",
                  _flaxBinding896,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding884,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding896,
              _callback3,
              id: "callback:<>(p:r:previousValue:any?:,p:r:element:object:flax.core/sdk_dart_ui#type:PathMetric)->any?:",
              invoke: _callback3Invoke,
              matches: _callback3Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef("any", nullable: true),
      _PathMetrics_fold,
      genericFactory: _flaxGeneric_PathMetrics_fold,
      ownerTypes: [],
    ),
    "every": _flaxBinding915,
    "join": _flaxBinding917,
    "any": _flaxBinding918,
    "toList": _flaxBinding921,
    "toSet": _flaxBinding923,
    "take": _flaxBinding924,
    "takeWhile": _flaxBinding928,
    "skip": _flaxBinding929,
    "skipWhile": _flaxBinding930,
    "firstWhere": _flaxBinding934,
    "lastWhere": _flaxBinding935,
    "singleWhere": _flaxBinding936,
    "elementAt": _flaxBinding938,
  },
  constructors: {},
  create: _createPathMetrics,
  matches: _isPathMetrics,
  setters: [],
  supertypes: ["dart:core::Iterable", "dart:core::Object"],
  collectionView: _flaxBinding897,
);
const _flaxBinding940 = FlaxGetter(
  "debugDisposed",
  _flaxBinding0,
  _Picture_debugDisposed,
);
const _flaxBinding941 = FlaxGetter(
  "approximateBytesUsed",
  _flaxBinding22,
  _Picture_approximateBytesUsed,
);
const _flaxBinding942 = <FlaxParameter>[
  FlaxParameter("width", _flaxBinding22, required: true),
  FlaxParameter("height", _flaxBinding22, required: true),
];
const _flaxBinding943 = FlaxTypeRef(
  "future",
  item: _flaxBinding90,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:Image",
    _future4Adapt,
  ),
);
const _flaxBinding944 = FlaxInstanceMethod(
  _flaxBinding942,
  _flaxBinding943,
  _Picture_toImage,
);
const _flaxBinding945 = <FlaxParameter>[
  FlaxParameter("width", _flaxBinding22, required: true),
  FlaxParameter("height", _flaxBinding22, required: true),
  FlaxParameter(
    "targetFormat",
    _flaxBinding494,
    required: false,
    defaultValue: api.TargetPixelFormat.dontCare,
  ),
];
const _flaxBinding946 = FlaxInstanceMethod(
  _flaxBinding945,
  _flaxBinding90,
  _Picture_toImageSync,
);
const _flaxBinding947 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Picture_dispose,
);
const _flaxBinding948 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "width",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "height",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding943,
  id: "callback:<>(p:r:width:int:,p:r:height:int:)->future:[object:flax.core/sdk_dart_ui#type:Image]",
);
const _flaxBinding949 = FlaxProxyMember("toImage", 0, _flaxBinding948);
const _flaxBinding950 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "width",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "height",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "targetFormat",
      _flaxBinding494,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding90,
  id: "callback:<>(p:r:width:int:,p:r:height:int:,n:o:targetFormat:enum:flax.core/sdk_dart_ui#type:TargetPixelFormat)->object:flax.core/sdk_dart_ui#type:Image",
);
const _flaxBinding951 = FlaxProxyMember("toImageSync", 0, _flaxBinding950);
const _flaxBinding952 = FlaxProxyMember(
  "approximateBytesUsed",
  1,
  _flaxBinding25,
);
const _flaxBinding953 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Picture",
  [_flaxBinding940, _flaxBinding941],
  {
    "toImage": _flaxBinding944,
    "toImageSync": _flaxBinding946,
    "dispose": _flaxBinding947,
  },
  constructors: {"@implementation": _flaxBinding12},
  create: _createPicture,
  matches: _isPicture,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([
    _flaxBinding949,
    _flaxBinding951,
    _flaxBinding19,
    _flaxBinding729,
    _flaxBinding952,
  ]),
);
const _flaxBinding954 = FlaxGetter(
  "message",
  _flaxBinding13,
  _PictureRasterizationException_message,
);
const _flaxBinding955 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
  nullable: true,
);
const _flaxBinding956 = FlaxGetter(
  "stack",
  _flaxBinding955,
  _PictureRasterizationException_stack,
);
const _flaxBinding957 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _PictureRasterizationException_toString,
);
const _flaxBinding958 = FlaxProxyMember("message", 1, _flaxBinding277);
const _flaxBinding959 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding955,
  id: "callback:<>()->object?:flax.core/flutter#type:StackTrace",
);
const _flaxBinding960 = FlaxProxyMember("stack", 1, _flaxBinding959);
const _flaxBinding961 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PictureRasterizationException",
  [_flaxBinding954, _flaxBinding956],
  {"toString": _flaxBinding957},
  constructors: {"@implementation": _flaxBinding12},
  create: _createPictureRasterizationException,
  matches: _isPictureRasterizationException,
  setters: [],
  supertypes: ["dart:core::Object", "dart:core::Exception"],
  proxy: FlaxProxyBinding([_flaxBinding278, _flaxBinding958, _flaxBinding960]),
);
const _flaxBinding962 = FlaxGetter(
  "isRecording",
  _flaxBinding0,
  _PictureRecorder_isRecording,
);
const _flaxBinding963 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding97,
  _PictureRecorder_endRecording,
);
const _flaxBinding964 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding97,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Picture",
);
const _flaxBinding965 = FlaxProxyMember("endRecording", 0, _flaxBinding964);
const _flaxBinding966 = FlaxProxyMember("isRecording", 1, _flaxBinding468);
const _flaxBinding967 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PictureRecorder",
  [_flaxBinding962],
  {"endRecording": _flaxBinding963},
  constructors: {"": _flaxBinding12, "@implementation": _flaxBinding12},
  create: _createPictureRecorder,
  matches: _isPictureRecorder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding965, _flaxBinding966]),
);
const _flaxBinding968 = FlaxCallbackBinding(
  [],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid0,
  id: "callback:<>()->void:",
  invoke: FlaxCallbackAdapters.invokeVoid0,
  matches: FlaxCallbackAdapters.matchesVoid0,
);
const _flaxBinding969 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding968,
);
const _flaxBinding970 = FlaxGetter(
  "onPlatformConfigurationChanged",
  _flaxBinding969,
  _PlatformDispatcher_onPlatformConfigurationChanged,
);
const _flaxBinding971 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding314,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Display]",
    _collection22Create,
    _collection22Matches,
    restore: _collection22Restore,
  ),
);
const _flaxBinding972 = FlaxGetter(
  "displays",
  _flaxBinding971,
  _PlatformDispatcher_displays,
);
const _flaxBinding973 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding457,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:FlutterView]",
    _collection23Create,
    _collection23Matches,
    restore: _collection23Restore,
  ),
);
const _flaxBinding974 = FlaxGetter(
  "views",
  _flaxBinding973,
  _PlatformDispatcher_views,
);
const _flaxBinding975 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FlutterView",
  nullable: true,
);
const _flaxBinding976 = FlaxGetter(
  "implicitView",
  _flaxBinding975,
  _PlatformDispatcher_implicitView,
);
const _flaxBinding977 = FlaxGetter(
  "onMetricsChanged",
  _flaxBinding969,
  _PlatformDispatcher_onMetricsChanged,
);
const _flaxBinding978 = FlaxGetter(
  "engineId",
  _flaxBinding364,
  _PlatformDispatcher_engineId,
);
const _flaxBinding979 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ViewFocusEvent",
);
const _flaxBinding980 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "viewFocusEvent",
      _flaxBinding979,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<api.ViewFocusEvent>,
  id: "callback:<>(p:r:viewFocusEvent:object:flax.core/sdk_dart_ui#type:ViewFocusEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.ViewFocusEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.ViewFocusEvent>,
);
const _flaxBinding981 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding980,
);
const _flaxBinding982 = FlaxGetter(
  "onViewFocusChange",
  _flaxBinding981,
  _PlatformDispatcher_onViewFocusChange,
);
const _flaxBinding983 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "duration",
      _flaxBinding403,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<api2.Duration>,
  id: "callback:<>(p:r:duration:object:flax.core/flutter#type:Duration)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api2.Duration>,
  matches: FlaxCallbackAdapters.matchesVoid1<api2.Duration>,
);
const _flaxBinding984 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding983,
);
const _flaxBinding985 = FlaxGetter(
  "onBeginFrame",
  _flaxBinding984,
  _PlatformDispatcher_onBeginFrame,
);
const _flaxBinding986 = FlaxGetter(
  "onDrawFrame",
  _flaxBinding969,
  _PlatformDispatcher_onDrawFrame,
);
const _flaxBinding987 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PointerDataPacket",
);
const _flaxBinding988 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "packet",
      _flaxBinding987,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<api.PointerDataPacket>,
  id: "callback:<>(p:r:packet:object:flax.core/sdk_dart_ui#type:PointerDataPacket)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.PointerDataPacket>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.PointerDataPacket>,
);
const _flaxBinding989 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding988,
);
const _flaxBinding990 = FlaxGetter(
  "onPointerDataPacket",
  _flaxBinding989,
  _PlatformDispatcher_onPointerDataPacket,
);
const _flaxBinding991 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:KeyData",
);
const _flaxBinding992 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "data",
      _flaxBinding991,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  FlaxCallbackAdapters.wrap1<api.KeyData, bool>,
  id: "callback:<>(p:r:data:object:flax.core/sdk_dart_ui#type:KeyData)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api.KeyData, bool>,
  matches: FlaxCallbackAdapters.matches1<api.KeyData, bool>,
);
const _flaxBinding993 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding992,
);
const _flaxBinding994 = FlaxGetter(
  "onKeyData",
  _flaxBinding993,
  _PlatformDispatcher_onKeyData,
);
const _flaxBinding995 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FrameTiming",
);
const _flaxBinding996 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding995,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:FrameTiming]",
    _collection25Create,
    _collection25Matches,
    restore: _collection25Restore,
  ),
);
const _flaxBinding997 = FlaxTypeRef(
  "list",
  item: _flaxBinding995,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:FrameTiming]",
    _collection24Create,
    _collection24Matches,
  ),
  iterable: _flaxBinding996,
);
const _flaxBinding998 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "timings",
      _flaxBinding997,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<List<api.FrameTiming>>,
  id: "callback:<>(p:r:timings:list:[object:flax.core/sdk_dart_ui#type:FrameTiming])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<List<api.FrameTiming>>,
  matches: FlaxCallbackAdapters.matchesVoid1<List<api.FrameTiming>>,
);
const _flaxBinding999 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding998,
);
const _flaxBinding1000 = FlaxGetter(
  "onReportTimings",
  _flaxBinding999,
  _PlatformDispatcher_onReportTimings,
);
const _flaxBinding1001 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding206,
);
const _flaxBinding1002 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding13,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "data",
      _flaxBinding205,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "callback",
      _flaxBinding1001,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  _callback4,
  id: "callback:<>(p:r:name:String:,p:r:data:ByteData?:,p:r:callback:callback?:<>(p:r:data:ByteData?:)->void:)->void:",
  invoke: _callback4Invoke,
  matches: _callback4Matches,
);
const _flaxBinding1003 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1002,
);
const _flaxBinding1004 = FlaxGetter(
  "onPlatformMessage",
  _flaxBinding1003,
  _PlatformDispatcher_onPlatformMessage,
);
const _flaxBinding1005 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:AccessibilityFeatures",
);
const _flaxBinding1006 = FlaxGetter(
  "accessibilityFeatures",
  _flaxBinding1005,
  _PlatformDispatcher_accessibilityFeatures,
);
const _flaxBinding1007 = FlaxGetter(
  "onAccessibilityFeaturesChanged",
  _flaxBinding969,
  _PlatformDispatcher_onAccessibilityFeaturesChanged,
);
const _flaxBinding1008 = FlaxGetter(
  "locale",
  _flaxBinding586,
  _PlatformDispatcher_locale,
);
const _flaxBinding1009 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding586,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection27Create,
    _collection27Matches,
    restore: _collection27Restore,
  ),
);
const _flaxBinding1010 = FlaxTypeRef(
  "list",
  item: _flaxBinding586,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection26Create,
    _collection26Matches,
  ),
  iterable: _flaxBinding1009,
);
const _flaxBinding1011 = FlaxGetter(
  "locales",
  _flaxBinding1010,
  _PlatformDispatcher_locales,
);
const _flaxBinding1012 = FlaxGetter(
  "onLocaleChanged",
  _flaxBinding969,
  _PlatformDispatcher_onLocaleChanged,
);
const _flaxBinding1013 = FlaxGetter(
  "initialLifecycleState",
  _flaxBinding13,
  _PlatformDispatcher_initialLifecycleState,
);
const _flaxBinding1014 = FlaxGetter(
  "alwaysUse24HourFormat",
  _flaxBinding0,
  _PlatformDispatcher_alwaysUse24HourFormat,
);
const _flaxBinding1015 = FlaxGetter(
  "lineHeightScaleFactorOverride",
  _flaxBinding40,
  _PlatformDispatcher_lineHeightScaleFactorOverride,
);
const _flaxBinding1016 = FlaxGetter(
  "letterSpacingOverride",
  _flaxBinding40,
  _PlatformDispatcher_letterSpacingOverride,
);
const _flaxBinding1017 = FlaxGetter(
  "wordSpacingOverride",
  _flaxBinding40,
  _PlatformDispatcher_wordSpacingOverride,
);
const _flaxBinding1018 = FlaxGetter(
  "paragraphSpacingOverride",
  _flaxBinding40,
  _PlatformDispatcher_paragraphSpacingOverride,
);
const _flaxBinding1019 = FlaxGetter(
  "textScaleFactor",
  _flaxBinding37,
  _PlatformDispatcher_textScaleFactor,
);
const _flaxBinding1020 = FlaxGetter(
  "onTextScaleFactorChanged",
  _flaxBinding969,
  _PlatformDispatcher_onTextScaleFactorChanged,
);
const _flaxBinding1021 = FlaxGetter(
  "nativeSpellCheckServiceDefined",
  _flaxBinding0,
  _PlatformDispatcher_nativeSpellCheckServiceDefined,
);
const _flaxBinding1022 = FlaxGetter(
  "supportsShowingSystemContextMenu",
  _flaxBinding0,
  _PlatformDispatcher_supportsShowingSystemContextMenu,
);
const _flaxBinding1023 = FlaxGetter(
  "brieflyShowPassword",
  _flaxBinding0,
  _PlatformDispatcher_brieflyShowPassword,
);
const _flaxBinding1024 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Brightness",
);
const _flaxBinding1025 = FlaxGetter(
  "platformBrightness",
  _flaxBinding1024,
  _PlatformDispatcher_platformBrightness,
);
const _flaxBinding1026 = FlaxGetter(
  "onPlatformBrightnessChanged",
  _flaxBinding969,
  _PlatformDispatcher_onPlatformBrightnessChanged,
);
const _flaxBinding1027 = FlaxGetter(
  "systemFontFamily",
  _flaxBinding531,
  _PlatformDispatcher_systemFontFamily,
);
const _flaxBinding1028 = FlaxGetter(
  "onSystemFontFamilyChanged",
  _flaxBinding969,
  _PlatformDispatcher_onSystemFontFamilyChanged,
);
const _flaxBinding1029 = FlaxGetter(
  "semanticsEnabled",
  _flaxBinding0,
  _PlatformDispatcher_semanticsEnabled,
);
const _flaxBinding1030 = FlaxGetter(
  "onSemanticsEnabledChanged",
  _flaxBinding969,
  _PlatformDispatcher_onSemanticsEnabledChanged,
);
const _flaxBinding1031 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsActionEvent",
);
const _flaxBinding1032 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "action",
      _flaxBinding1031,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<api.SemanticsActionEvent>,
  id: "callback:<>(p:r:action:object:flax.core/sdk_dart_ui#type:SemanticsActionEvent)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.SemanticsActionEvent>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.SemanticsActionEvent>,
);
const _flaxBinding1033 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1032,
);
const _flaxBinding1034 = FlaxGetter(
  "onSemanticsActionEvent",
  _flaxBinding1033,
  _PlatformDispatcher_onSemanticsActionEvent,
);
const _flaxBinding1035 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:HitTestRequest",
);
const _flaxBinding1036 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:HitTestResponse",
);
const _flaxBinding1037 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "request",
      _flaxBinding1035,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding1036,
  FlaxCallbackAdapters.wrap1<api.HitTestRequest, api.HitTestResponse>,
  id: "callback:<>(p:r:request:object:flax.core/sdk_dart_ui#type:HitTestRequest)->object:flax.core/sdk_dart_ui#type:HitTestResponse",
  invoke: FlaxCallbackAdapters.invoke1<api.HitTestRequest, api.HitTestResponse>,
  matches:
      FlaxCallbackAdapters.matches1<api.HitTestRequest, api.HitTestResponse>,
);
const _flaxBinding1038 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1037,
);
const _flaxBinding1039 = FlaxGetter(
  "onHitTest",
  _flaxBinding1038,
  _PlatformDispatcher_onHitTest,
);
const _flaxBinding1040 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FrameData",
);
const _flaxBinding1041 = FlaxGetter(
  "frameData",
  _flaxBinding1040,
  _PlatformDispatcher_frameData,
);
const _flaxBinding1042 = FlaxGetter(
  "onFrameDataChanged",
  _flaxBinding969,
  _PlatformDispatcher_onFrameDataChanged,
);
const _flaxBinding1043 = FlaxTypeRef("any");
const _flaxBinding1044 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "exception",
      _flaxBinding1043,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "stackTrace",
      _flaxBinding481,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  FlaxCallbackAdapters.wrap2<Object, api2.StackTrace, bool>,
  id: "callback:<>(p:r:exception:any:,p:r:stackTrace:object:flax.core/flutter#type:StackTrace)->bool:",
  invoke: FlaxCallbackAdapters.invoke2<Object, api2.StackTrace, bool>,
  matches: FlaxCallbackAdapters.matches2<Object, api2.StackTrace, bool>,
);
const _flaxBinding1045 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1044,
);
const _flaxBinding1046 = FlaxGetter(
  "onError",
  _flaxBinding1045,
  _PlatformDispatcher_onError,
);
const _flaxBinding1047 = FlaxGetter(
  "defaultRouteName",
  _flaxBinding13,
  _PlatformDispatcher_defaultRouteName,
);
const _flaxBinding1048 = FlaxSetter(
  "onPlatformConfigurationChanged",
  _flaxBinding969,
  _PlatformDispatcher_set_onPlatformConfigurationChanged,
);
const _flaxBinding1049 = FlaxSetter(
  "onMetricsChanged",
  _flaxBinding969,
  _PlatformDispatcher_set_onMetricsChanged,
);
const _flaxBinding1050 = FlaxSetter(
  "onViewFocusChange",
  _flaxBinding981,
  _PlatformDispatcher_set_onViewFocusChange,
);
const _flaxBinding1051 = FlaxSetter(
  "onBeginFrame",
  _flaxBinding984,
  _PlatformDispatcher_set_onBeginFrame,
);
const _flaxBinding1052 = FlaxSetter(
  "onDrawFrame",
  _flaxBinding969,
  _PlatformDispatcher_set_onDrawFrame,
);
const _flaxBinding1053 = FlaxSetter(
  "onPointerDataPacket",
  _flaxBinding989,
  _PlatformDispatcher_set_onPointerDataPacket,
);
const _flaxBinding1054 = FlaxSetter(
  "onKeyData",
  _flaxBinding993,
  _PlatformDispatcher_set_onKeyData,
);
const _flaxBinding1055 = FlaxSetter(
  "onReportTimings",
  _flaxBinding999,
  _PlatformDispatcher_set_onReportTimings,
);
const _flaxBinding1056 = FlaxSetter(
  "onPlatformMessage",
  _flaxBinding1003,
  _PlatformDispatcher_set_onPlatformMessage,
);
const _flaxBinding1057 = FlaxSetter(
  "onAccessibilityFeaturesChanged",
  _flaxBinding969,
  _PlatformDispatcher_set_onAccessibilityFeaturesChanged,
);
const _flaxBinding1058 = FlaxSetter(
  "onLocaleChanged",
  _flaxBinding969,
  _PlatformDispatcher_set_onLocaleChanged,
);
const _flaxBinding1059 = FlaxSetter(
  "onTextScaleFactorChanged",
  _flaxBinding969,
  _PlatformDispatcher_set_onTextScaleFactorChanged,
);
const _flaxBinding1060 = FlaxSetter(
  "onPlatformBrightnessChanged",
  _flaxBinding969,
  _PlatformDispatcher_set_onPlatformBrightnessChanged,
);
const _flaxBinding1061 = FlaxSetter(
  "onSystemFontFamilyChanged",
  _flaxBinding969,
  _PlatformDispatcher_set_onSystemFontFamilyChanged,
);
const _flaxBinding1062 = FlaxSetter(
  "onSemanticsEnabledChanged",
  _flaxBinding969,
  _PlatformDispatcher_set_onSemanticsEnabledChanged,
);
const _flaxBinding1063 = FlaxSetter(
  "onSemanticsActionEvent",
  _flaxBinding1033,
  _PlatformDispatcher_set_onSemanticsActionEvent,
);
const _flaxBinding1064 = FlaxSetter(
  "onHitTest",
  _flaxBinding1038,
  _PlatformDispatcher_set_onHitTest,
);
const _flaxBinding1065 = FlaxSetter(
  "onFrameDataChanged",
  _flaxBinding969,
  _PlatformDispatcher_set_onFrameDataChanged,
);
const _flaxBinding1066 = FlaxSetter(
  "onError",
  _flaxBinding1045,
  _PlatformDispatcher_set_onError,
);
const _flaxBinding1067 = <FlaxParameter>[
  FlaxParameter("id", _flaxBinding22, required: true),
];
const _flaxBinding1068 = FlaxInstanceMethod(
  _flaxBinding1067,
  _flaxBinding975,
  _PlatformDispatcher_view,
);
const _flaxBinding1069 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ViewFocusDirection",
);
const _flaxBinding1070 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:ViewFocusState",
);
const _flaxBinding1071 = <FlaxParameter>[
  FlaxParameter("direction", _flaxBinding1069, required: true),
  FlaxParameter("state", _flaxBinding1070, required: true),
  FlaxParameter("viewId", _flaxBinding22, required: true),
];
const _flaxBinding1072 = FlaxInstanceMethod(
  _flaxBinding1071,
  _flaxBinding16,
  _PlatformDispatcher_requestViewFocusChange,
);
const _flaxBinding1073 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
  FlaxParameter("data", _flaxBinding205, required: true),
  FlaxParameter("callback", _flaxBinding1001, required: true),
];
const _flaxBinding1074 = FlaxInstanceMethod(
  _flaxBinding1073,
  _flaxBinding16,
  _PlatformDispatcher_sendPlatformMessage,
);
const _flaxBinding1075 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RootIsolateToken",
);
const _flaxBinding1076 = <FlaxParameter>[
  FlaxParameter("token", _flaxBinding1075, required: true),
];
const _flaxBinding1077 = FlaxInstanceMethod(
  _flaxBinding1076,
  _flaxBinding16,
  _PlatformDispatcher_registerBackgroundIsolate,
);
const _flaxBinding1078 = <FlaxParameter>[
  FlaxParameter("enabled", _flaxBinding0, required: true),
];
const _flaxBinding1079 = FlaxInstanceMethod(
  _flaxBinding1078,
  _flaxBinding16,
  _PlatformDispatcher_setSemanticsTreeEnabled,
);
const _flaxBinding1080 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding16,
  _PlatformDispatcher_setIsolateDebugName,
);
const _flaxBinding1081 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:DartPerformanceMode",
);
const _flaxBinding1082 = <FlaxParameter>[
  FlaxParameter("mode", _flaxBinding1081, required: true),
];
const _flaxBinding1083 = FlaxInstanceMethod(
  _flaxBinding1082,
  _flaxBinding16,
  _PlatformDispatcher_requestDartPerformanceMode,
);
const _flaxBinding1084 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding205,
  _PlatformDispatcher_getPersistentIsolateData,
);
const _flaxBinding1085 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _PlatformDispatcher_scheduleFrame,
);
const _flaxBinding1086 = FlaxTypeRef("callback", callback: _flaxBinding968);
const _flaxBinding1087 = <FlaxParameter>[
  FlaxParameter("beginFrame", _flaxBinding1086, required: true),
  FlaxParameter("drawFrame", _flaxBinding1086, required: true),
];
const _flaxBinding1088 = FlaxInstanceMethod(
  _flaxBinding1087,
  _flaxBinding16,
  _PlatformDispatcher_scheduleWarmUpFrame,
);
const _flaxBinding1089 = FlaxInstanceMethod(
  _flaxBinding338,
  _flaxBinding16,
  _PlatformDispatcher_updateSemantics,
);
const _flaxBinding1090 = <FlaxParameter>[
  FlaxParameter("locale", _flaxBinding586, required: true),
];
const _flaxBinding1091 = FlaxInstanceMethod(
  _flaxBinding1090,
  _flaxBinding16,
  _PlatformDispatcher_setApplicationLocale,
);
const _flaxBinding1092 = <FlaxParameter>[
  FlaxParameter("supportedLocales", _flaxBinding1010, required: true),
];
const _flaxBinding1093 = FlaxInstanceMethod(
  _flaxBinding1092,
  _flaxBinding770,
  _PlatformDispatcher_computePlatformResolvedLocale,
);
const _flaxBinding1094 = <FlaxParameter>[
  FlaxParameter("unscaledFontSize", _flaxBinding37, required: true),
];
const _flaxBinding1095 = FlaxInstanceMethod(
  _flaxBinding1094,
  _flaxBinding37,
  _PlatformDispatcher_scaleFontSize,
);
const _flaxBinding1096 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PlatformDispatcher",
  [
    _flaxBinding970,
    _flaxBinding972,
    _flaxBinding974,
    _flaxBinding976,
    _flaxBinding977,
    _flaxBinding978,
    _flaxBinding982,
    _flaxBinding985,
    _flaxBinding986,
    _flaxBinding990,
    _flaxBinding994,
    _flaxBinding1000,
    _flaxBinding1004,
    _flaxBinding1006,
    _flaxBinding1007,
    _flaxBinding1008,
    _flaxBinding1011,
    _flaxBinding1012,
    _flaxBinding1013,
    _flaxBinding1014,
    _flaxBinding1015,
    _flaxBinding1016,
    _flaxBinding1017,
    _flaxBinding1018,
    _flaxBinding1019,
    _flaxBinding1020,
    _flaxBinding1021,
    _flaxBinding1022,
    _flaxBinding1023,
    _flaxBinding1025,
    _flaxBinding1026,
    _flaxBinding1027,
    _flaxBinding1028,
    _flaxBinding1029,
    _flaxBinding1030,
    _flaxBinding1034,
    _flaxBinding1039,
    _flaxBinding1041,
    _flaxBinding1042,
    _flaxBinding1046,
    _flaxBinding1047,
  ],
  {
    "view": _flaxBinding1068,
    "requestViewFocusChange": _flaxBinding1072,
    "sendPlatformMessage": _flaxBinding1074,
    "registerBackgroundIsolate": _flaxBinding1077,
    "setSemanticsTreeEnabled": _flaxBinding1079,
    "setIsolateDebugName": _flaxBinding1080,
    "requestDartPerformanceMode": _flaxBinding1083,
    "getPersistentIsolateData": _flaxBinding1084,
    "scheduleFrame": _flaxBinding1085,
    "scheduleWarmUpFrame": _flaxBinding1088,
    "updateSemantics": _flaxBinding1089,
    "setApplicationLocale": _flaxBinding1091,
    "computePlatformResolvedLocale": _flaxBinding1093,
    "scaleFontSize": _flaxBinding1095,
  },
  constructors: {},
  create: _createPlatformDispatcher,
  matches: _isPlatformDispatcher,
  setters: [
    _flaxBinding1048,
    _flaxBinding1049,
    _flaxBinding1050,
    _flaxBinding1051,
    _flaxBinding1052,
    _flaxBinding1053,
    _flaxBinding1054,
    _flaxBinding1055,
    _flaxBinding1056,
    _flaxBinding1057,
    _flaxBinding1058,
    _flaxBinding1059,
    _flaxBinding1060,
    _flaxBinding1061,
    _flaxBinding1062,
    _flaxBinding1063,
    _flaxBinding1064,
    _flaxBinding1065,
    _flaxBinding1066,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1097 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PluginUtilities",
  [],
  {},
  constructors: {},
  create: _createPluginUtilities,
  matches: _isPluginUtilities,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1098 = FlaxGetter(
  "viewId",
  _flaxBinding22,
  _PointerData_viewId,
);
const _flaxBinding1099 = FlaxGetter(
  "embedderId",
  _flaxBinding22,
  _PointerData_embedderId,
);
const _flaxBinding1100 = FlaxGetter(
  "timeStamp",
  _flaxBinding403,
  _PointerData_timeStamp,
);
const _flaxBinding1101 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PointerChange",
);
const _flaxBinding1102 = FlaxGetter(
  "change",
  _flaxBinding1101,
  _PointerData_change,
);
const _flaxBinding1103 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PointerDeviceKind",
);
const _flaxBinding1104 = FlaxGetter(
  "kind",
  _flaxBinding1103,
  _PointerData_kind,
);
const _flaxBinding1105 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PointerSignalKind",
  nullable: true,
);
const _flaxBinding1106 = FlaxGetter(
  "signalKind",
  _flaxBinding1105,
  _PointerData_signalKind,
);
const _flaxBinding1107 = FlaxGetter(
  "device",
  _flaxBinding22,
  _PointerData_device,
);
const _flaxBinding1108 = FlaxGetter(
  "pointerIdentifier",
  _flaxBinding22,
  _PointerData_pointerIdentifier,
);
const _flaxBinding1109 = FlaxGetter(
  "physicalX",
  _flaxBinding37,
  _PointerData_physicalX,
);
const _flaxBinding1110 = FlaxGetter(
  "physicalY",
  _flaxBinding37,
  _PointerData_physicalY,
);
const _flaxBinding1111 = FlaxGetter(
  "physicalDeltaX",
  _flaxBinding37,
  _PointerData_physicalDeltaX,
);
const _flaxBinding1112 = FlaxGetter(
  "physicalDeltaY",
  _flaxBinding37,
  _PointerData_physicalDeltaY,
);
const _flaxBinding1113 = FlaxGetter(
  "buttons",
  _flaxBinding22,
  _PointerData_buttons,
);
const _flaxBinding1114 = FlaxGetter(
  "obscured",
  _flaxBinding0,
  _PointerData_obscured,
);
const _flaxBinding1115 = FlaxGetter(
  "synthesized",
  _flaxBinding0,
  _PointerData_synthesized,
);
const _flaxBinding1116 = FlaxGetter(
  "pressure",
  _flaxBinding37,
  _PointerData_pressure,
);
const _flaxBinding1117 = FlaxGetter(
  "pressureMin",
  _flaxBinding37,
  _PointerData_pressureMin,
);
const _flaxBinding1118 = FlaxGetter(
  "pressureMax",
  _flaxBinding37,
  _PointerData_pressureMax,
);
const _flaxBinding1119 = FlaxGetter(
  "distance",
  _flaxBinding37,
  _PointerData_distance,
);
const _flaxBinding1120 = FlaxGetter(
  "distanceMax",
  _flaxBinding37,
  _PointerData_distanceMax,
);
const _flaxBinding1121 = FlaxGetter("size", _flaxBinding37, _PointerData_size);
const _flaxBinding1122 = FlaxGetter(
  "radiusMajor",
  _flaxBinding37,
  _PointerData_radiusMajor,
);
const _flaxBinding1123 = FlaxGetter(
  "radiusMinor",
  _flaxBinding37,
  _PointerData_radiusMinor,
);
const _flaxBinding1124 = FlaxGetter(
  "radiusMin",
  _flaxBinding37,
  _PointerData_radiusMin,
);
const _flaxBinding1125 = FlaxGetter(
  "radiusMax",
  _flaxBinding37,
  _PointerData_radiusMax,
);
const _flaxBinding1126 = FlaxGetter(
  "orientation",
  _flaxBinding37,
  _PointerData_orientation,
);
const _flaxBinding1127 = FlaxGetter("tilt", _flaxBinding37, _PointerData_tilt);
const _flaxBinding1128 = FlaxGetter(
  "platformData",
  _flaxBinding22,
  _PointerData_platformData,
);
const _flaxBinding1129 = FlaxGetter(
  "scrollDeltaX",
  _flaxBinding37,
  _PointerData_scrollDeltaX,
);
const _flaxBinding1130 = FlaxGetter(
  "scrollDeltaY",
  _flaxBinding37,
  _PointerData_scrollDeltaY,
);
const _flaxBinding1131 = FlaxGetter("panX", _flaxBinding37, _PointerData_panX);
const _flaxBinding1132 = FlaxGetter("panY", _flaxBinding37, _PointerData_panY);
const _flaxBinding1133 = FlaxGetter(
  "panDeltaX",
  _flaxBinding37,
  _PointerData_panDeltaX,
);
const _flaxBinding1134 = FlaxGetter(
  "panDeltaY",
  _flaxBinding37,
  _PointerData_panDeltaY,
);
const _flaxBinding1135 = FlaxGetter(
  "scale",
  _flaxBinding37,
  _PointerData_scale,
);
const _flaxBinding1136 = FlaxGetter(
  "rotation",
  _flaxBinding37,
  _PointerData_rotation,
);
const _flaxBinding1137 = <FlaxParameter>[
  FlaxParameter("allowPlatformDefault", _flaxBinding0, required: true),
];
const _flaxBinding1138 = FlaxInstanceMethod(
  _flaxBinding1137,
  _flaxBinding16,
  _PointerData_respond,
);
const _flaxBinding1139 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _PointerData_toString,
);
const _flaxBinding1140 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _PointerData_toStringFull,
);
const _flaxBinding1141 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "allowPlatformDefault",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  _callback5,
  id: "callback:<>(n:o:allowPlatformDefault:bool:)->void:",
  invoke: _callback5Invoke,
  matches: _callback5Matches,
);
const _flaxBinding1142 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1141,
);
const _flaxBinding1143 = <FlaxParameter>[
  FlaxParameter("viewId", _flaxBinding22, required: false, defaultValue: 0),
  FlaxParameter("embedderId", _flaxBinding22, required: false, defaultValue: 0),
  FlaxParameter(
    "timeStamp",
    _flaxBinding403,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "change",
    _flaxBinding1101,
    required: false,
    defaultValue: api.PointerChange.cancel,
  ),
  FlaxParameter(
    "kind",
    _flaxBinding1103,
    required: false,
    defaultValue: api.PointerDeviceKind.touch,
  ),
  FlaxParameter("signalKind", _flaxBinding1105, required: false),
  FlaxParameter("device", _flaxBinding22, required: false, defaultValue: 0),
  FlaxParameter(
    "pointerIdentifier",
    _flaxBinding22,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "physicalX",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "physicalY",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "physicalDeltaX",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "physicalDeltaY",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("buttons", _flaxBinding22, required: false, defaultValue: 0),
  FlaxParameter(
    "obscured",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "synthesized",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("pressure", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter(
    "pressureMin",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "pressureMax",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("distance", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter(
    "distanceMax",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("size", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter(
    "radiusMajor",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "radiusMinor",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "radiusMin",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "radiusMax",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "orientation",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("tilt", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter(
    "platformData",
    _flaxBinding22,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter(
    "scrollDeltaX",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "scrollDeltaY",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("panX", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter("panY", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter(
    "panDeltaX",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "panDeltaY",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter("scale", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter("rotation", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter("onRespond", _flaxBinding1142, required: false),
];
const _flaxBinding1144 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "allowPlatformDefault",
      _flaxBinding0,
      required: true,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(n:r:allowPlatformDefault:bool:)->void:",
);
const _flaxBinding1145 = FlaxProxyMember(
  "respond",
  0,
  _flaxBinding1144,
  hasSuper: true,
);
const _flaxBinding1146 = FlaxProxyMember(
  "viewId",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding1147 = FlaxProxyMember(
  "embedderId",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding1148 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1101,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:PointerChange",
);
const _flaxBinding1149 = FlaxProxyMember(
  "change",
  1,
  _flaxBinding1148,
  hasSuper: true,
);
const _flaxBinding1150 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1103,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:PointerDeviceKind",
);
const _flaxBinding1151 = FlaxProxyMember(
  "kind",
  1,
  _flaxBinding1150,
  hasSuper: true,
);
const _flaxBinding1152 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1105,
  id: "callback:<>()->enum?:flax.core/sdk_dart_ui#type:PointerSignalKind",
);
const _flaxBinding1153 = FlaxProxyMember(
  "signalKind",
  1,
  _flaxBinding1152,
  hasSuper: true,
);
const _flaxBinding1154 = FlaxProxyMember(
  "device",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding1155 = FlaxProxyMember(
  "pointerIdentifier",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding1156 = FlaxProxyMember(
  "physicalX",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1157 = FlaxProxyMember(
  "physicalY",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1158 = FlaxProxyMember(
  "physicalDeltaX",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1159 = FlaxProxyMember(
  "physicalDeltaY",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1160 = FlaxProxyMember(
  "buttons",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding1161 = FlaxProxyMember(
  "obscured",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1162 = FlaxProxyMember(
  "pressure",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1163 = FlaxProxyMember(
  "pressureMin",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1164 = FlaxProxyMember(
  "pressureMax",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1165 = FlaxProxyMember(
  "distance",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1166 = FlaxProxyMember(
  "distanceMax",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1167 = FlaxProxyMember(
  "size",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1168 = FlaxProxyMember(
  "radiusMajor",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1169 = FlaxProxyMember(
  "radiusMinor",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1170 = FlaxProxyMember(
  "radiusMin",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1171 = FlaxProxyMember(
  "radiusMax",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1172 = FlaxProxyMember(
  "orientation",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1173 = FlaxProxyMember(
  "tilt",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1174 = FlaxProxyMember(
  "platformData",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding1175 = FlaxProxyMember(
  "scrollDeltaX",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1176 = FlaxProxyMember(
  "scrollDeltaY",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1177 = FlaxProxyMember(
  "panX",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1178 = FlaxProxyMember(
  "panY",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1179 = FlaxProxyMember(
  "panDeltaX",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1180 = FlaxProxyMember(
  "panDeltaY",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1181 = FlaxProxyMember(
  "scale",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1182 = FlaxProxyMember(
  "rotation",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1183 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PointerData",
  [
    _flaxBinding1098,
    _flaxBinding1099,
    _flaxBinding1100,
    _flaxBinding1102,
    _flaxBinding1104,
    _flaxBinding1106,
    _flaxBinding1107,
    _flaxBinding1108,
    _flaxBinding1109,
    _flaxBinding1110,
    _flaxBinding1111,
    _flaxBinding1112,
    _flaxBinding1113,
    _flaxBinding1114,
    _flaxBinding1115,
    _flaxBinding1116,
    _flaxBinding1117,
    _flaxBinding1118,
    _flaxBinding1119,
    _flaxBinding1120,
    _flaxBinding1121,
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
    _flaxBinding1133,
    _flaxBinding1134,
    _flaxBinding1135,
    _flaxBinding1136,
  ],
  {
    "respond": _flaxBinding1138,
    "toString": _flaxBinding1139,
    "toStringFull": _flaxBinding1140,
    "@super:respond": FlaxInstanceMethod(
      _flaxBinding1137,
      _flaxBinding16,
      _PointerData_super_respond,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:toStringFull": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch3_super_call_toStringFull,
    ),
    "@super:get:viewId": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _FlaxProxyDispatch7_super_get_viewId,
    ),
    "@super:get:embedderId": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _PointerData_super_get_embedderId,
    ),
    "@super:get:timeStamp": FlaxInstanceMethod(
      [],
      _flaxBinding403,
      _FlaxProxyDispatch3_super_get_timeStamp,
    ),
    "@super:get:change": FlaxInstanceMethod(
      [],
      _flaxBinding1101,
      _PointerData_super_get_change,
    ),
    "@super:get:kind": FlaxInstanceMethod(
      [],
      _flaxBinding1103,
      _PointerData_super_get_kind,
    ),
    "@super:get:signalKind": FlaxInstanceMethod(
      [],
      _flaxBinding1105,
      _PointerData_super_get_signalKind,
    ),
    "@super:get:device": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _PointerData_super_get_device,
    ),
    "@super:get:pointerIdentifier": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _PointerData_super_get_pointerIdentifier,
    ),
    "@super:get:physicalX": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_physicalX,
    ),
    "@super:get:physicalY": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_physicalY,
    ),
    "@super:get:physicalDeltaX": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_physicalDeltaX,
    ),
    "@super:get:physicalDeltaY": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_physicalDeltaY,
    ),
    "@super:get:buttons": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _PointerData_super_get_buttons,
    ),
    "@super:get:obscured": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _PointerData_super_get_obscured,
    ),
    "@super:get:synthesized": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch3_super_get_synthesized,
    ),
    "@super:get:pressure": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_pressure,
    ),
    "@super:get:pressureMin": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_pressureMin,
    ),
    "@super:get:pressureMax": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_pressureMax,
    ),
    "@super:get:distance": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_distance,
    ),
    "@super:get:distanceMax": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_distanceMax,
    ),
    "@super:get:size": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_size,
    ),
    "@super:get:radiusMajor": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_radiusMajor,
    ),
    "@super:get:radiusMinor": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_radiusMinor,
    ),
    "@super:get:radiusMin": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_radiusMin,
    ),
    "@super:get:radiusMax": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_radiusMax,
    ),
    "@super:get:orientation": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_orientation,
    ),
    "@super:get:tilt": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_tilt,
    ),
    "@super:get:platformData": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _PointerData_super_get_platformData,
    ),
    "@super:get:scrollDeltaX": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_scrollDeltaX,
    ),
    "@super:get:scrollDeltaY": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_scrollDeltaY,
    ),
    "@super:get:panX": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_panX,
    ),
    "@super:get:panY": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_panY,
    ),
    "@super:get:panDeltaX": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_panDeltaX,
    ),
    "@super:get:panDeltaY": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_panDeltaY,
    ),
    "@super:get:scale": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_scale,
    ),
    "@super:get:rotation": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _PointerData_super_get_rotation,
    ),
  },
  constructors: {"@implementation": _flaxBinding1143},
  create: _createPointerData,
  matches: _isPointerData,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1145,
    _flaxBinding292,
    _flaxBinding537,
    _flaxBinding1146,
    _flaxBinding1147,
    _flaxBinding538,
    _flaxBinding1149,
    _flaxBinding1151,
    _flaxBinding1153,
    _flaxBinding1154,
    _flaxBinding1155,
    _flaxBinding1156,
    _flaxBinding1157,
    _flaxBinding1158,
    _flaxBinding1159,
    _flaxBinding1160,
    _flaxBinding1161,
    _flaxBinding547,
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
  ]),
);
const _flaxBinding1184 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:PointerData",
);
const _flaxBinding1185 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1184,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:PointerData]",
    _collection29Create,
    _collection29Matches,
    restore: _collection29Restore,
  ),
);
const _flaxBinding1186 = FlaxTypeRef(
  "list",
  item: _flaxBinding1184,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:PointerData]",
    _collection28Create,
    _collection28Matches,
  ),
  iterable: _flaxBinding1185,
);
const _flaxBinding1187 = FlaxGetter(
  "data",
  _flaxBinding1186,
  _PointerDataPacket_data,
);
const _flaxBinding1188 = <FlaxParameter>[
  FlaxParameter(
    "data",
    _flaxBinding1186,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding1189 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1186,
  id: "callback:<>()->list:[object:flax.core/sdk_dart_ui#type:PointerData]",
);
const _flaxBinding1190 = FlaxProxyMember(
  "data",
  1,
  _flaxBinding1189,
  hasSuper: true,
);
const _flaxBinding1191 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:PointerDataPacket",
  [_flaxBinding1187],
  {
    "@super:get:data": FlaxInstanceMethod(
      [],
      _flaxBinding1186,
      _PointerDataPacket_super_get_data,
    ),
  },
  constructors: {"@implementation": _flaxBinding1188},
  create: _createPointerDataPacket,
  matches: _isPointerDataPacket,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding1190]),
);
const _flaxBinding1192 = FlaxGetter("left", _flaxBinding37, _RRect_left);
const _flaxBinding1193 = FlaxGetter("top", _flaxBinding37, _RRect_top);
const _flaxBinding1194 = FlaxGetter("right", _flaxBinding37, _RRect_right);
const _flaxBinding1195 = FlaxGetter("bottom", _flaxBinding37, _RRect_bottom);
const _flaxBinding1196 = FlaxGetter(
  "tlRadiusX",
  _flaxBinding37,
  _RRect_tlRadiusX,
);
const _flaxBinding1197 = FlaxGetter(
  "tlRadiusY",
  _flaxBinding37,
  _RRect_tlRadiusY,
);
const _flaxBinding1198 = FlaxGetter(
  "tlRadius",
  _flaxBinding792,
  _RRect_tlRadius,
);
const _flaxBinding1199 = FlaxGetter(
  "trRadiusX",
  _flaxBinding37,
  _RRect_trRadiusX,
);
const _flaxBinding1200 = FlaxGetter(
  "trRadiusY",
  _flaxBinding37,
  _RRect_trRadiusY,
);
const _flaxBinding1201 = FlaxGetter(
  "trRadius",
  _flaxBinding792,
  _RRect_trRadius,
);
const _flaxBinding1202 = FlaxGetter(
  "brRadiusX",
  _flaxBinding37,
  _RRect_brRadiusX,
);
const _flaxBinding1203 = FlaxGetter(
  "brRadiusY",
  _flaxBinding37,
  _RRect_brRadiusY,
);
const _flaxBinding1204 = FlaxGetter(
  "brRadius",
  _flaxBinding792,
  _RRect_brRadius,
);
const _flaxBinding1205 = FlaxGetter(
  "blRadiusX",
  _flaxBinding37,
  _RRect_blRadiusX,
);
const _flaxBinding1206 = FlaxGetter(
  "blRadiusY",
  _flaxBinding37,
  _RRect_blRadiusY,
);
const _flaxBinding1207 = FlaxGetter(
  "blRadius",
  _flaxBinding792,
  _RRect_blRadius,
);
const _flaxBinding1208 = FlaxGetter("width", _flaxBinding37, _RRect_width);
const _flaxBinding1209 = FlaxGetter("height", _flaxBinding37, _RRect_height);
const _flaxBinding1210 = FlaxGetter(
  "outerRect",
  _flaxBinding51,
  _RRect_outerRect,
);
const _flaxBinding1211 = FlaxGetter(
  "safeInnerRect",
  _flaxBinding51,
  _RRect_safeInnerRect,
);
const _flaxBinding1212 = FlaxGetter(
  "middleRect",
  _flaxBinding51,
  _RRect_middleRect,
);
const _flaxBinding1213 = FlaxGetter(
  "wideMiddleRect",
  _flaxBinding51,
  _RRect_wideMiddleRect,
);
const _flaxBinding1214 = FlaxGetter(
  "tallMiddleRect",
  _flaxBinding51,
  _RRect_tallMiddleRect,
);
const _flaxBinding1215 = FlaxGetter("isEmpty", _flaxBinding0, _RRect_isEmpty);
const _flaxBinding1216 = FlaxGetter("isFinite", _flaxBinding0, _RRect_isFinite);
const _flaxBinding1217 = FlaxGetter("isRect", _flaxBinding0, _RRect_isRect);
const _flaxBinding1218 = FlaxGetter(
  "isStadium",
  _flaxBinding0,
  _RRect_isStadium,
);
const _flaxBinding1219 = FlaxGetter(
  "isEllipse",
  _flaxBinding0,
  _RRect_isEllipse,
);
const _flaxBinding1220 = FlaxGetter("isCircle", _flaxBinding0, _RRect_isCircle);
const _flaxBinding1221 = FlaxGetter(
  "shortestSide",
  _flaxBinding37,
  _RRect_shortestSide,
);
const _flaxBinding1222 = FlaxGetter(
  "longestSide",
  _flaxBinding37,
  _RRect_longestSide,
);
const _flaxBinding1223 = FlaxGetter("hasNaN", _flaxBinding0, _RRect_hasNaN);
const _flaxBinding1224 = FlaxGetter("center", _flaxBinding70, _RRect_center);
const _flaxBinding1225 = FlaxInstanceMethod(
  _flaxBinding814,
  _flaxBinding0,
  _RRect_contains,
);
const _flaxBinding1226 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _RRect_toString,
);
const _flaxBinding1227 = FlaxInstanceMethod(
  _flaxBinding680,
  _flaxBinding55,
  _RRect_shift,
);
const _flaxBinding1228 = <FlaxParameter>[
  FlaxParameter("delta", _flaxBinding37, required: true),
];
const _flaxBinding1229 = FlaxInstanceMethod(
  _flaxBinding1228,
  _flaxBinding55,
  _RRect_inflate,
);
const _flaxBinding1230 = FlaxInstanceMethod(
  _flaxBinding1228,
  _flaxBinding55,
  _RRect_deflate,
);
const _flaxBinding1231 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding55,
  _RRect_scaleRadii,
);
const _flaxBinding1232 = <FlaxParameter>[
  FlaxParameter("left", _flaxBinding37, required: true),
  FlaxParameter("top", _flaxBinding37, required: true),
  FlaxParameter("right", _flaxBinding37, required: true),
  FlaxParameter("bottom", _flaxBinding37, required: true),
  FlaxParameter("radiusX", _flaxBinding37, required: true),
  FlaxParameter("radiusY", _flaxBinding37, required: true),
];
const _flaxBinding1233 = <FlaxParameter>[
  FlaxParameter("left", _flaxBinding37, required: true),
  FlaxParameter("top", _flaxBinding37, required: true),
  FlaxParameter("right", _flaxBinding37, required: true),
  FlaxParameter("bottom", _flaxBinding37, required: true),
  FlaxParameter("radius", _flaxBinding792, required: true),
];
const _flaxBinding1234 = <FlaxParameter>[
  FlaxParameter("rect", _flaxBinding51, required: true),
  FlaxParameter("radiusX", _flaxBinding37, required: true),
  FlaxParameter("radiusY", _flaxBinding37, required: true),
];
const _flaxBinding1235 = <FlaxParameter>[
  FlaxParameter("rect", _flaxBinding51, required: true),
  FlaxParameter("radius", _flaxBinding792, required: true),
];
const _flaxBinding1236 = <FlaxParameter>[
  FlaxParameter("left", _flaxBinding37, required: true),
  FlaxParameter("top", _flaxBinding37, required: true),
  FlaxParameter("right", _flaxBinding37, required: true),
  FlaxParameter("bottom", _flaxBinding37, required: true),
  FlaxParameter(
    "topLeft",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "topRight",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "bottomRight",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "bottomLeft",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding1237 = <FlaxParameter>[
  FlaxParameter("rect", _flaxBinding51, required: true),
  FlaxParameter(
    "topLeft",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "topRight",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "bottomRight",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "bottomLeft",
    _flaxBinding792,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding1238 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:RRect",
  [
    _flaxBinding1192,
    _flaxBinding1193,
    _flaxBinding1194,
    _flaxBinding1195,
    _flaxBinding1196,
    _flaxBinding1197,
    _flaxBinding1198,
    _flaxBinding1199,
    _flaxBinding1200,
    _flaxBinding1201,
    _flaxBinding1202,
    _flaxBinding1203,
    _flaxBinding1204,
    _flaxBinding1205,
    _flaxBinding1206,
    _flaxBinding1207,
    _flaxBinding1208,
    _flaxBinding1209,
    _flaxBinding1210,
    _flaxBinding1211,
    _flaxBinding1212,
    _flaxBinding1213,
    _flaxBinding1214,
    _flaxBinding1215,
    _flaxBinding1216,
    _flaxBinding1217,
    _flaxBinding1218,
    _flaxBinding1219,
    _flaxBinding1220,
    _flaxBinding1221,
    _flaxBinding1222,
    _flaxBinding1223,
    _flaxBinding1224,
  ],
  {
    "contains": _flaxBinding1225,
    "toString": _flaxBinding1226,
    "shift": _flaxBinding1227,
    "inflate": _flaxBinding1229,
    "deflate": _flaxBinding1230,
    "scaleRadii": _flaxBinding1231,
  },
  constructors: {
    "fromLTRBXY": _flaxBinding1232,
    "fromLTRBR": _flaxBinding1233,
    "fromRectXY": _flaxBinding1234,
    "fromRectAndRadius": _flaxBinding1235,
    "fromLTRBAndCorners": _flaxBinding1236,
    "fromRectAndCorners": _flaxBinding1237,
  },
  create: _createRRect,
  matches: _isRRect,
  setters: [],
  supertypes: ["dart:ui::_RRectLike", "dart:core::Object"],
);
const _flaxBinding1239 = FlaxGetter("scos", _flaxBinding37, _RSTransform_scos);
const _flaxBinding1240 = FlaxGetter("ssin", _flaxBinding37, _RSTransform_ssin);
const _flaxBinding1241 = FlaxGetter("tx", _flaxBinding37, _RSTransform_tx);
const _flaxBinding1242 = FlaxGetter("ty", _flaxBinding37, _RSTransform_ty);
const _flaxBinding1243 = <FlaxParameter>[
  FlaxParameter("scos", _flaxBinding37, required: true),
  FlaxParameter("ssin", _flaxBinding37, required: true),
  FlaxParameter("tx", _flaxBinding37, required: true),
  FlaxParameter("ty", _flaxBinding37, required: true),
];
const _flaxBinding1244 = FlaxProxyMember(
  "scos",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1245 = FlaxProxyMember(
  "ssin",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1246 = FlaxProxyMember(
  "tx",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1247 = FlaxProxyMember(
  "ty",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1248 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:RSTransform",
  [_flaxBinding1239, _flaxBinding1240, _flaxBinding1241, _flaxBinding1242],
  {
    "@super:get:scos": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _RSTransform_super_get_scos,
    ),
    "@super:get:ssin": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _RSTransform_super_get_ssin,
    ),
    "@super:get:tx": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _RSTransform_super_get_tx,
    ),
    "@super:get:ty": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _RSTransform_super_get_ty,
    ),
  },
  constructors: {"@implementation": _flaxBinding1243},
  create: _createRSTransform,
  matches: _isRSTransform,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1244,
    _flaxBinding1245,
    _flaxBinding1246,
    _flaxBinding1247,
  ]),
);
const _flaxBinding1249 = FlaxGetter(
  "left",
  _flaxBinding37,
  _RSuperellipse_left,
);
const _flaxBinding1250 = FlaxGetter("top", _flaxBinding37, _RSuperellipse_top);
const _flaxBinding1251 = FlaxGetter(
  "right",
  _flaxBinding37,
  _RSuperellipse_right,
);
const _flaxBinding1252 = FlaxGetter(
  "bottom",
  _flaxBinding37,
  _RSuperellipse_bottom,
);
const _flaxBinding1253 = FlaxGetter(
  "tlRadiusX",
  _flaxBinding37,
  _RSuperellipse_tlRadiusX,
);
const _flaxBinding1254 = FlaxGetter(
  "tlRadiusY",
  _flaxBinding37,
  _RSuperellipse_tlRadiusY,
);
const _flaxBinding1255 = FlaxGetter(
  "tlRadius",
  _flaxBinding792,
  _RSuperellipse_tlRadius,
);
const _flaxBinding1256 = FlaxGetter(
  "trRadiusX",
  _flaxBinding37,
  _RSuperellipse_trRadiusX,
);
const _flaxBinding1257 = FlaxGetter(
  "trRadiusY",
  _flaxBinding37,
  _RSuperellipse_trRadiusY,
);
const _flaxBinding1258 = FlaxGetter(
  "trRadius",
  _flaxBinding792,
  _RSuperellipse_trRadius,
);
const _flaxBinding1259 = FlaxGetter(
  "brRadiusX",
  _flaxBinding37,
  _RSuperellipse_brRadiusX,
);
const _flaxBinding1260 = FlaxGetter(
  "brRadiusY",
  _flaxBinding37,
  _RSuperellipse_brRadiusY,
);
const _flaxBinding1261 = FlaxGetter(
  "brRadius",
  _flaxBinding792,
  _RSuperellipse_brRadius,
);
const _flaxBinding1262 = FlaxGetter(
  "blRadiusX",
  _flaxBinding37,
  _RSuperellipse_blRadiusX,
);
const _flaxBinding1263 = FlaxGetter(
  "blRadiusY",
  _flaxBinding37,
  _RSuperellipse_blRadiusY,
);
const _flaxBinding1264 = FlaxGetter(
  "blRadius",
  _flaxBinding792,
  _RSuperellipse_blRadius,
);
const _flaxBinding1265 = FlaxGetter(
  "width",
  _flaxBinding37,
  _RSuperellipse_width,
);
const _flaxBinding1266 = FlaxGetter(
  "height",
  _flaxBinding37,
  _RSuperellipse_height,
);
const _flaxBinding1267 = FlaxGetter(
  "outerRect",
  _flaxBinding51,
  _RSuperellipse_outerRect,
);
const _flaxBinding1268 = FlaxGetter(
  "safeInnerRect",
  _flaxBinding51,
  _RSuperellipse_safeInnerRect,
);
const _flaxBinding1269 = FlaxGetter(
  "middleRect",
  _flaxBinding51,
  _RSuperellipse_middleRect,
);
const _flaxBinding1270 = FlaxGetter(
  "wideMiddleRect",
  _flaxBinding51,
  _RSuperellipse_wideMiddleRect,
);
const _flaxBinding1271 = FlaxGetter(
  "tallMiddleRect",
  _flaxBinding51,
  _RSuperellipse_tallMiddleRect,
);
const _flaxBinding1272 = FlaxGetter(
  "isEmpty",
  _flaxBinding0,
  _RSuperellipse_isEmpty,
);
const _flaxBinding1273 = FlaxGetter(
  "isFinite",
  _flaxBinding0,
  _RSuperellipse_isFinite,
);
const _flaxBinding1274 = FlaxGetter(
  "isRect",
  _flaxBinding0,
  _RSuperellipse_isRect,
);
const _flaxBinding1275 = FlaxGetter(
  "isStadium",
  _flaxBinding0,
  _RSuperellipse_isStadium,
);
const _flaxBinding1276 = FlaxGetter(
  "isEllipse",
  _flaxBinding0,
  _RSuperellipse_isEllipse,
);
const _flaxBinding1277 = FlaxGetter(
  "isCircle",
  _flaxBinding0,
  _RSuperellipse_isCircle,
);
const _flaxBinding1278 = FlaxGetter(
  "shortestSide",
  _flaxBinding37,
  _RSuperellipse_shortestSide,
);
const _flaxBinding1279 = FlaxGetter(
  "longestSide",
  _flaxBinding37,
  _RSuperellipse_longestSide,
);
const _flaxBinding1280 = FlaxGetter(
  "hasNaN",
  _flaxBinding0,
  _RSuperellipse_hasNaN,
);
const _flaxBinding1281 = FlaxGetter(
  "center",
  _flaxBinding70,
  _RSuperellipse_center,
);
const _flaxBinding1282 = FlaxInstanceMethod(
  _flaxBinding814,
  _flaxBinding0,
  _RSuperellipse_contains,
);
const _flaxBinding1283 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _RSuperellipse_toString,
);
const _flaxBinding1284 = FlaxInstanceMethod(
  _flaxBinding680,
  _flaxBinding58,
  _RSuperellipse_shift,
);
const _flaxBinding1285 = FlaxInstanceMethod(
  _flaxBinding1228,
  _flaxBinding58,
  _RSuperellipse_inflate,
);
const _flaxBinding1286 = FlaxInstanceMethod(
  _flaxBinding1228,
  _flaxBinding58,
  _RSuperellipse_deflate,
);
const _flaxBinding1287 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding58,
  _RSuperellipse_scaleRadii,
);
const _flaxBinding1288 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:RSuperellipse",
  [
    _flaxBinding1249,
    _flaxBinding1250,
    _flaxBinding1251,
    _flaxBinding1252,
    _flaxBinding1253,
    _flaxBinding1254,
    _flaxBinding1255,
    _flaxBinding1256,
    _flaxBinding1257,
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
    _flaxBinding1280,
    _flaxBinding1281,
  ],
  {
    "contains": _flaxBinding1282,
    "toString": _flaxBinding1283,
    "shift": _flaxBinding1284,
    "inflate": _flaxBinding1285,
    "deflate": _flaxBinding1286,
    "scaleRadii": _flaxBinding1287,
  },
  constructors: {
    "fromLTRBXY": _flaxBinding1232,
    "fromLTRBR": _flaxBinding1233,
    "fromRectXY": _flaxBinding1234,
    "fromRectAndRadius": _flaxBinding1235,
    "fromLTRBAndCorners": _flaxBinding1236,
    "fromRectAndCorners": _flaxBinding1237,
  },
  create: _createRSuperellipse,
  matches: _isRSuperellipse,
  setters: [],
  supertypes: ["dart:ui::_RRectLike", "dart:core::Object"],
);
const _flaxBinding1289 = FlaxGetter("left", _flaxBinding37, _Rect_left);
const _flaxBinding1290 = FlaxGetter("top", _flaxBinding37, _Rect_top);
const _flaxBinding1291 = FlaxGetter("right", _flaxBinding37, _Rect_right);
const _flaxBinding1292 = FlaxGetter("bottom", _flaxBinding37, _Rect_bottom);
const _flaxBinding1293 = FlaxGetter("width", _flaxBinding37, _Rect_width);
const _flaxBinding1294 = FlaxGetter("height", _flaxBinding37, _Rect_height);
const _flaxBinding1295 = FlaxGetter("size", _flaxBinding273, _Rect_size);
const _flaxBinding1296 = FlaxGetter("hasNaN", _flaxBinding0, _Rect_hasNaN);
const _flaxBinding1297 = FlaxGetter(
  "isInfinite",
  _flaxBinding0,
  _Rect_isInfinite,
);
const _flaxBinding1298 = FlaxGetter("isFinite", _flaxBinding0, _Rect_isFinite);
const _flaxBinding1299 = FlaxGetter("isEmpty", _flaxBinding0, _Rect_isEmpty);
const _flaxBinding1300 = FlaxGetter(
  "shortestSide",
  _flaxBinding37,
  _Rect_shortestSide,
);
const _flaxBinding1301 = FlaxGetter(
  "longestSide",
  _flaxBinding37,
  _Rect_longestSide,
);
const _flaxBinding1302 = FlaxGetter("topLeft", _flaxBinding70, _Rect_topLeft);
const _flaxBinding1303 = FlaxGetter(
  "topCenter",
  _flaxBinding70,
  _Rect_topCenter,
);
const _flaxBinding1304 = FlaxGetter("topRight", _flaxBinding70, _Rect_topRight);
const _flaxBinding1305 = FlaxGetter(
  "centerLeft",
  _flaxBinding70,
  _Rect_centerLeft,
);
const _flaxBinding1306 = FlaxGetter("center", _flaxBinding70, _Rect_center);
const _flaxBinding1307 = FlaxGetter(
  "centerRight",
  _flaxBinding70,
  _Rect_centerRight,
);
const _flaxBinding1308 = FlaxGetter(
  "bottomLeft",
  _flaxBinding70,
  _Rect_bottomLeft,
);
const _flaxBinding1309 = FlaxGetter(
  "bottomCenter",
  _flaxBinding70,
  _Rect_bottomCenter,
);
const _flaxBinding1310 = FlaxGetter(
  "bottomRight",
  _flaxBinding70,
  _Rect_bottomRight,
);
const _flaxBinding1311 = FlaxInstanceMethod(
  _flaxBinding680,
  _flaxBinding51,
  _Rect_shift,
);
const _flaxBinding1312 = <FlaxParameter>[
  FlaxParameter("translateX", _flaxBinding37, required: true),
  FlaxParameter("translateY", _flaxBinding37, required: true),
];
const _flaxBinding1313 = FlaxInstanceMethod(
  _flaxBinding1312,
  _flaxBinding51,
  _Rect_translate,
);
const _flaxBinding1314 = FlaxInstanceMethod(
  _flaxBinding1228,
  _flaxBinding51,
  _Rect_inflate,
);
const _flaxBinding1315 = FlaxInstanceMethod(
  _flaxBinding1228,
  _flaxBinding51,
  _Rect_deflate,
);
const _flaxBinding1316 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding51, required: true),
];
const _flaxBinding1317 = FlaxInstanceMethod(
  _flaxBinding1316,
  _flaxBinding51,
  _Rect_intersect,
);
const _flaxBinding1318 = FlaxInstanceMethod(
  _flaxBinding1316,
  _flaxBinding51,
  _Rect_expandToInclude,
);
const _flaxBinding1319 = FlaxInstanceMethod(
  _flaxBinding1316,
  _flaxBinding0,
  _Rect_overlaps,
);
const _flaxBinding1320 = FlaxInstanceMethod(
  _flaxBinding680,
  _flaxBinding0,
  _Rect_contains,
);
const _flaxBinding1321 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _Rect_toString,
);
const _flaxBinding1322 = <FlaxParameter>[
  FlaxParameter("left", _flaxBinding37, required: true),
  FlaxParameter("top", _flaxBinding37, required: true),
  FlaxParameter("right", _flaxBinding37, required: true),
  FlaxParameter("bottom", _flaxBinding37, required: true),
];
const _flaxBinding1323 = <FlaxParameter>[
  FlaxParameter("left", _flaxBinding37, required: true),
  FlaxParameter("top", _flaxBinding37, required: true),
  FlaxParameter("width", _flaxBinding37, required: true),
  FlaxParameter("height", _flaxBinding37, required: true),
];
const _flaxBinding1324 = <FlaxParameter>[
  FlaxParameter("center", _flaxBinding70, required: true),
  FlaxParameter("radius", _flaxBinding37, required: true),
];
const _flaxBinding1325 = <FlaxParameter>[
  FlaxParameter("center", _flaxBinding70, required: true),
  FlaxParameter("width", _flaxBinding37, required: true),
  FlaxParameter("height", _flaxBinding37, required: true),
];
const _flaxBinding1326 = <FlaxParameter>[
  FlaxParameter("a", _flaxBinding70, required: true),
  FlaxParameter("b", _flaxBinding70, required: true),
];
const _flaxBinding1327 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Rect",
  [
    _flaxBinding1289,
    _flaxBinding1290,
    _flaxBinding1291,
    _flaxBinding1292,
    _flaxBinding1293,
    _flaxBinding1294,
    _flaxBinding1295,
    _flaxBinding1296,
    _flaxBinding1297,
    _flaxBinding1298,
    _flaxBinding1299,
    _flaxBinding1300,
    _flaxBinding1301,
    _flaxBinding1302,
    _flaxBinding1303,
    _flaxBinding1304,
    _flaxBinding1305,
    _flaxBinding1306,
    _flaxBinding1307,
    _flaxBinding1308,
    _flaxBinding1309,
    _flaxBinding1310,
  ],
  {
    "shift": _flaxBinding1311,
    "translate": _flaxBinding1313,
    "inflate": _flaxBinding1314,
    "deflate": _flaxBinding1315,
    "intersect": _flaxBinding1317,
    "expandToInclude": _flaxBinding1318,
    "overlaps": _flaxBinding1319,
    "contains": _flaxBinding1320,
    "toString": _flaxBinding1321,
  },
  constructors: {
    "fromLTRB": _flaxBinding1322,
    "fromLTWH": _flaxBinding1323,
    "fromCircle": _flaxBinding1324,
    "fromCenter": _flaxBinding1325,
    "fromPoints": _flaxBinding1326,
  },
  create: _createRect,
  matches: _isRect,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1328 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:RootIsolateToken",
  [],
  {},
  constructors: {},
  create: _createRootIsolateToken,
  matches: _isRootIsolateToken,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1329 = FlaxInstanceMethod(
  _flaxBinding942,
  _flaxBinding90,
  _Scene_toImageSync,
);
const _flaxBinding1330 = FlaxInstanceMethod(
  _flaxBinding942,
  _flaxBinding943,
  _Scene_toImage,
);
const _flaxBinding1331 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Scene_dispose,
);
const _flaxBinding1332 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "width",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "height",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding90,
  id: "callback:<>(p:r:width:int:,p:r:height:int:)->object:flax.core/sdk_dart_ui#type:Image",
);
const _flaxBinding1333 = FlaxProxyMember("toImageSync", 0, _flaxBinding1332);
const _flaxBinding1334 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Scene",
  [],
  {
    "toImageSync": _flaxBinding1329,
    "toImage": _flaxBinding1330,
    "dispose": _flaxBinding1331,
  },
  constructors: {"@implementation": _flaxBinding12},
  create: _createScene,
  matches: _isScene,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding1333, _flaxBinding949, _flaxBinding19]),
);
const _flaxBinding1335 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TransformEngineLayer",
  nullable: true,
);
const _flaxBinding1336 = <FlaxParameter>[
  FlaxParameter("matrix4", _flaxBinding47, required: true),
  FlaxParameter("oldLayer", _flaxBinding1335, required: false),
];
const _flaxBinding1337 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TransformEngineLayer",
);
const _flaxBinding1338 = FlaxInstanceMethod(
  _flaxBinding1336,
  _flaxBinding1337,
  _SceneBuilder_pushTransform,
);
const _flaxBinding1339 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OffsetEngineLayer",
  nullable: true,
);
const _flaxBinding1340 = <FlaxParameter>[
  FlaxParameter("dx", _flaxBinding37, required: true),
  FlaxParameter("dy", _flaxBinding37, required: true),
  FlaxParameter("oldLayer", _flaxBinding1339, required: false),
];
const _flaxBinding1341 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OffsetEngineLayer",
);
const _flaxBinding1342 = FlaxInstanceMethod(
  _flaxBinding1340,
  _flaxBinding1341,
  _SceneBuilder_pushOffset,
);
const _flaxBinding1343 = FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip");
const _flaxBinding1344 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRectEngineLayer",
  nullable: true,
);
const _flaxBinding1345 = <FlaxParameter>[
  FlaxParameter("rect", _flaxBinding51, required: true),
  FlaxParameter(
    "clipBehavior",
    _flaxBinding1343,
    required: false,
    defaultValue: api.Clip.antiAlias,
  ),
  FlaxParameter("oldLayer", _flaxBinding1344, required: false),
];
const _flaxBinding1346 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRectEngineLayer",
);
const _flaxBinding1347 = FlaxInstanceMethod(
  _flaxBinding1345,
  _flaxBinding1346,
  _SceneBuilder_pushClipRect,
);
const _flaxBinding1348 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRRectEngineLayer",
  nullable: true,
);
const _flaxBinding1349 = <FlaxParameter>[
  FlaxParameter("rrect", _flaxBinding55, required: true),
  FlaxParameter(
    "clipBehavior",
    _flaxBinding1343,
    required: false,
    defaultValue: api.Clip.antiAlias,
  ),
  FlaxParameter("oldLayer", _flaxBinding1348, required: false),
];
const _flaxBinding1350 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRRectEngineLayer",
);
const _flaxBinding1351 = FlaxInstanceMethod(
  _flaxBinding1349,
  _flaxBinding1350,
  _SceneBuilder_pushClipRRect,
);
const _flaxBinding1352 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer",
  nullable: true,
);
const _flaxBinding1353 = <FlaxParameter>[
  FlaxParameter("rsuperellipse", _flaxBinding58, required: true),
  FlaxParameter(
    "clipBehavior",
    _flaxBinding1343,
    required: false,
    defaultValue: api.Clip.antiAlias,
  ),
  FlaxParameter("oldLayer", _flaxBinding1352, required: false),
];
const _flaxBinding1354 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer",
);
const _flaxBinding1355 = FlaxInstanceMethod(
  _flaxBinding1353,
  _flaxBinding1354,
  _SceneBuilder_pushClipRSuperellipse,
);
const _flaxBinding1356 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipPathEngineLayer",
  nullable: true,
);
const _flaxBinding1357 = <FlaxParameter>[
  FlaxParameter("path", _flaxBinding61, required: true),
  FlaxParameter(
    "clipBehavior",
    _flaxBinding1343,
    required: false,
    defaultValue: api.Clip.antiAlias,
  ),
  FlaxParameter("oldLayer", _flaxBinding1356, required: false),
];
const _flaxBinding1358 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ClipPathEngineLayer",
);
const _flaxBinding1359 = FlaxInstanceMethod(
  _flaxBinding1357,
  _flaxBinding1358,
  _SceneBuilder_pushClipPath,
);
const _flaxBinding1360 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OpacityEngineLayer",
  nullable: true,
);
const _flaxBinding1361 = <FlaxParameter>[
  FlaxParameter("alpha", _flaxBinding22, required: true),
  FlaxParameter(
    "offset",
    _flaxBinding453,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("oldLayer", _flaxBinding1360, required: false),
];
const _flaxBinding1362 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:OpacityEngineLayer",
);
const _flaxBinding1363 = FlaxInstanceMethod(
  _flaxBinding1361,
  _flaxBinding1362,
  _SceneBuilder_pushOpacity,
);
const _flaxBinding1364 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ColorFilter",
);
const _flaxBinding1365 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ColorFilterEngineLayer",
  nullable: true,
);
const _flaxBinding1366 = <FlaxParameter>[
  FlaxParameter("filter", _flaxBinding1364, required: true),
  FlaxParameter("oldLayer", _flaxBinding1365, required: false),
];
const _flaxBinding1367 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ColorFilterEngineLayer",
);
const _flaxBinding1368 = FlaxInstanceMethod(
  _flaxBinding1366,
  _flaxBinding1367,
  _SceneBuilder_pushColorFilter,
);
const _flaxBinding1369 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ImageFilter",
);
const _flaxBinding1370 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImageFilterEngineLayer",
  nullable: true,
);
const _flaxBinding1371 = <FlaxParameter>[
  FlaxParameter("filter", _flaxBinding1369, required: true),
  FlaxParameter(
    "offset",
    _flaxBinding70,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("oldLayer", _flaxBinding1370, required: false),
];
const _flaxBinding1372 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImageFilterEngineLayer",
);
const _flaxBinding1373 = FlaxInstanceMethod(
  _flaxBinding1371,
  _flaxBinding1372,
  _SceneBuilder_pushImageFilter,
);
const _flaxBinding1374 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer",
  nullable: true,
);
const _flaxBinding1375 = <FlaxParameter>[
  FlaxParameter("filter", _flaxBinding1369, required: true),
  FlaxParameter("backdropId", _flaxBinding364, required: false),
  FlaxParameter(
    "blendMode",
    _flaxBinding67,
    required: false,
    defaultValue: api.BlendMode.srcOver,
  ),
  FlaxParameter("oldLayer", _flaxBinding1374, required: false),
];
const _flaxBinding1376 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer",
);
const _flaxBinding1377 = FlaxInstanceMethod(
  _flaxBinding1375,
  _flaxBinding1376,
  _SceneBuilder_pushBackdropFilter,
);
const _flaxBinding1378 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Shader",
);
const _flaxBinding1379 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer",
  nullable: true,
);
const _flaxBinding1380 = <FlaxParameter>[
  FlaxParameter("shader", _flaxBinding1378, required: true),
  FlaxParameter("maskRect", _flaxBinding51, required: true),
  FlaxParameter("blendMode", _flaxBinding67, required: true),
  FlaxParameter(
    "filterQuality",
    _flaxBinding396,
    required: false,
    defaultValue: api.FilterQuality.low,
  ),
  FlaxParameter("oldLayer", _flaxBinding1379, required: false),
];
const _flaxBinding1381 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer",
);
const _flaxBinding1382 = FlaxInstanceMethod(
  _flaxBinding1380,
  _flaxBinding1381,
  _SceneBuilder_pushShaderMask,
);
const _flaxBinding1383 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _SceneBuilder_pop,
);
const _flaxBinding1384 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:EngineLayer",
);
const _flaxBinding1385 = <FlaxParameter>[
  FlaxParameter("retainedLayer", _flaxBinding1384, required: true),
];
const _flaxBinding1386 = FlaxInstanceMethod(
  _flaxBinding1385,
  _flaxBinding16,
  _SceneBuilder_addRetained,
);
const _flaxBinding1387 = <FlaxParameter>[
  FlaxParameter("enabledOptions", _flaxBinding22, required: true),
  FlaxParameter("bounds", _flaxBinding51, required: true),
];
const _flaxBinding1388 = FlaxInstanceMethod(
  _flaxBinding1387,
  _flaxBinding16,
  _SceneBuilder_addPerformanceOverlay,
);
const _flaxBinding1389 = <FlaxParameter>[
  FlaxParameter("offset", _flaxBinding70, required: true),
  FlaxParameter("picture", _flaxBinding97, required: true),
  FlaxParameter(
    "isComplexHint",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "willChangeHint",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding1390 = FlaxInstanceMethod(
  _flaxBinding1389,
  _flaxBinding16,
  _SceneBuilder_addPicture,
);
const _flaxBinding1391 = <FlaxParameter>[
  FlaxParameter("textureId", _flaxBinding22, required: true),
  FlaxParameter(
    "filterQuality",
    _flaxBinding396,
    required: false,
    defaultValue: api.FilterQuality.low,
  ),
  FlaxParameter("freeze", _flaxBinding0, required: false, defaultValue: false),
  FlaxParameter("height", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter(
    "offset",
    _flaxBinding70,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("width", _flaxBinding37, required: false, defaultValue: 0.0),
];
const _flaxBinding1392 = FlaxInstanceMethod(
  _flaxBinding1391,
  _flaxBinding16,
  _SceneBuilder_addTexture,
);
const _flaxBinding1393 = <FlaxParameter>[
  FlaxParameter("viewId", _flaxBinding22, required: true),
  FlaxParameter("height", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter(
    "offset",
    _flaxBinding70,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("width", _flaxBinding37, required: false, defaultValue: 0.0),
];
const _flaxBinding1394 = FlaxInstanceMethod(
  _flaxBinding1393,
  _flaxBinding16,
  _SceneBuilder_addPlatformView,
);
const _flaxBinding1395 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding333,
  _SceneBuilder_build,
);
const _flaxBinding1396 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "matrix4",
      _flaxBinding47,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1335,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1337,
  id: "callback:<>(p:r:matrix4:Float64List:,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:TransformEngineLayer)->object:flax.core/sdk_dart_ui#type:TransformEngineLayer",
);
const _flaxBinding1397 = FlaxProxyMember("pushTransform", 0, _flaxBinding1396);
const _flaxBinding1398 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "dx",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "dy",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1339,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1341,
  id: "callback:<>(p:r:dx:double:,p:r:dy:double:,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:OffsetEngineLayer)->object:flax.core/sdk_dart_ui#type:OffsetEngineLayer",
);
const _flaxBinding1399 = FlaxProxyMember("pushOffset", 0, _flaxBinding1398);
const _flaxBinding1400 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rect",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "clipBehavior",
      _flaxBinding1343,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1344,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1346,
  id: "callback:<>(p:r:rect:object:flax.core/sdk_dart_ui#type:Rect,n:o:clipBehavior:enum:flax.core/flutter#type:Clip,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ClipRectEngineLayer)->object:flax.core/sdk_dart_ui#type:ClipRectEngineLayer",
);
const _flaxBinding1401 = FlaxProxyMember("pushClipRect", 0, _flaxBinding1400);
const _flaxBinding1402 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rrect",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "clipBehavior",
      _flaxBinding1343,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1348,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1350,
  id: "callback:<>(p:r:rrect:object:flax.core/sdk_dart_ui#type:RRect,n:o:clipBehavior:enum:flax.core/flutter#type:Clip,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ClipRRectEngineLayer)->object:flax.core/sdk_dart_ui#type:ClipRRectEngineLayer",
);
const _flaxBinding1403 = FlaxProxyMember("pushClipRRect", 0, _flaxBinding1402);
const _flaxBinding1404 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "rsuperellipse",
      _flaxBinding58,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "clipBehavior",
      _flaxBinding1343,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1352,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1354,
  id: "callback:<>(p:r:rsuperellipse:object:flax.core/sdk_dart_ui#type:RSuperellipse,n:o:clipBehavior:enum:flax.core/flutter#type:Clip,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer)->object:flax.core/sdk_dart_ui#type:ClipRSuperellipseEngineLayer",
);
const _flaxBinding1405 = FlaxProxyMember(
  "pushClipRSuperellipse",
  0,
  _flaxBinding1404,
);
const _flaxBinding1406 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "path",
      _flaxBinding61,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "clipBehavior",
      _flaxBinding1343,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1356,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1358,
  id: "callback:<>(p:r:path:object:flax.core/sdk_dart_ui#type:Path,n:o:clipBehavior:enum:flax.core/flutter#type:Clip,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ClipPathEngineLayer)->object:flax.core/sdk_dart_ui#type:ClipPathEngineLayer",
);
const _flaxBinding1407 = FlaxProxyMember("pushClipPath", 0, _flaxBinding1406);
const _flaxBinding1408 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "alpha",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "offset",
      _flaxBinding453,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1360,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1362,
  id: "callback:<>(p:r:alpha:int:,n:o:offset:object?:flax.core/flutter#type:Offset,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:OpacityEngineLayer)->object:flax.core/sdk_dart_ui#type:OpacityEngineLayer",
);
const _flaxBinding1409 = FlaxProxyMember("pushOpacity", 0, _flaxBinding1408);
const _flaxBinding1410 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "filter",
      _flaxBinding1364,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1365,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1367,
  id: "callback:<>(p:r:filter:object:flax.core/sdk_dart_ui#type:ColorFilter,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ColorFilterEngineLayer)->object:flax.core/sdk_dart_ui#type:ColorFilterEngineLayer",
);
const _flaxBinding1411 = FlaxProxyMember(
  "pushColorFilter",
  0,
  _flaxBinding1410,
);
const _flaxBinding1412 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "filter",
      _flaxBinding1369,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1370,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1372,
  id: "callback:<>(p:r:filter:object:flax.core/flutter#type:ImageFilter,n:o:offset:object:flax.core/flutter#type:Offset,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ImageFilterEngineLayer)->object:flax.core/sdk_dart_ui#type:ImageFilterEngineLayer",
);
const _flaxBinding1413 = FlaxProxyMember(
  "pushImageFilter",
  0,
  _flaxBinding1412,
);
const _flaxBinding1414 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "filter",
      _flaxBinding1369,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "blendMode",
      _flaxBinding67,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1374,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "backdropId",
      _flaxBinding364,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1376,
  id: "callback:<>(p:r:filter:object:flax.core/flutter#type:ImageFilter,n:o:blendMode:enum:flax.core/sdk_dart_ui#type:BlendMode,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer,n:o:backdropId:int?:)->object:flax.core/sdk_dart_ui#type:BackdropFilterEngineLayer",
);
const _flaxBinding1415 = FlaxProxyMember(
  "pushBackdropFilter",
  0,
  _flaxBinding1414,
);
const _flaxBinding1416 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "shader",
      _flaxBinding1378,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "maskRect",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "blendMode",
      _flaxBinding67,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "oldLayer",
      _flaxBinding1379,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "filterQuality",
      _flaxBinding396,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1381,
  id: "callback:<>(p:r:shader:object:flax.core/sdk_dart_ui#type:Shader,p:r:maskRect:object:flax.core/sdk_dart_ui#type:Rect,p:r:blendMode:enum:flax.core/sdk_dart_ui#type:BlendMode,n:o:oldLayer:object?:flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer,n:o:filterQuality:enum:flax.core/sdk_dart_ui#type:FilterQuality)->object:flax.core/sdk_dart_ui#type:ShaderMaskEngineLayer",
);
const _flaxBinding1417 = FlaxProxyMember("pushShaderMask", 0, _flaxBinding1416);
const _flaxBinding1418 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "retainedLayer",
      _flaxBinding1384,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:retainedLayer:object:flax.core/sdk_dart_ui#type:EngineLayer)->void:",
);
const _flaxBinding1419 = FlaxProxyMember("addRetained", 0, _flaxBinding1418);
const _flaxBinding1420 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "enabledOptions",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "bounds",
      _flaxBinding51,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:enabledOptions:int:,p:r:bounds:object:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding1421 = FlaxProxyMember(
  "addPerformanceOverlay",
  0,
  _flaxBinding1420,
);
const _flaxBinding1422 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "picture",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "isComplexHint",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "willChangeHint",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:offset:object:flax.core/flutter#type:Offset,p:r:picture:object:flax.core/sdk_dart_ui#type:Picture,n:o:isComplexHint:bool:,n:o:willChangeHint:bool:)->void:",
);
const _flaxBinding1423 = FlaxProxyMember("addPicture", 0, _flaxBinding1422);
const _flaxBinding1424 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "textureId",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "width",
      _flaxBinding37,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "height",
      _flaxBinding37,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "freeze",
      _flaxBinding0,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "filterQuality",
      _flaxBinding396,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:textureId:int:,n:o:offset:object:flax.core/flutter#type:Offset,n:o:width:double:,n:o:height:double:,n:o:freeze:bool:,n:o:filterQuality:enum:flax.core/sdk_dart_ui#type:FilterQuality)->void:",
);
const _flaxBinding1425 = FlaxProxyMember("addTexture", 0, _flaxBinding1424);
const _flaxBinding1426 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "viewId",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "offset",
      _flaxBinding70,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "width",
      _flaxBinding37,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "height",
      _flaxBinding37,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(p:r:viewId:int:,n:o:offset:object:flax.core/flutter#type:Offset,n:o:width:double:,n:o:height:double:)->void:",
);
const _flaxBinding1427 = FlaxProxyMember(
  "addPlatformView",
  0,
  _flaxBinding1426,
);
const _flaxBinding1428 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding333,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Scene",
);
const _flaxBinding1429 = FlaxProxyMember("build", 0, _flaxBinding1428);
const _flaxBinding1430 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SceneBuilder",
  [],
  {
    "pushTransform": _flaxBinding1338,
    "pushOffset": _flaxBinding1342,
    "pushClipRect": _flaxBinding1347,
    "pushClipRRect": _flaxBinding1351,
    "pushClipRSuperellipse": _flaxBinding1355,
    "pushClipPath": _flaxBinding1359,
    "pushOpacity": _flaxBinding1363,
    "pushColorFilter": _flaxBinding1368,
    "pushImageFilter": _flaxBinding1373,
    "pushBackdropFilter": _flaxBinding1377,
    "pushShaderMask": _flaxBinding1382,
    "pop": _flaxBinding1383,
    "addRetained": _flaxBinding1386,
    "addPerformanceOverlay": _flaxBinding1388,
    "addPicture": _flaxBinding1390,
    "addTexture": _flaxBinding1392,
    "addPlatformView": _flaxBinding1394,
    "build": _flaxBinding1395,
  },
  constructors: {"": _flaxBinding12, "@implementation": _flaxBinding12},
  create: _createSceneBuilder,
  matches: _isSceneBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1397,
    _flaxBinding1399,
    _flaxBinding1401,
    _flaxBinding1403,
    _flaxBinding1405,
    _flaxBinding1407,
    _flaxBinding1409,
    _flaxBinding1411,
    _flaxBinding1413,
    _flaxBinding1415,
    _flaxBinding1417,
    _flaxBinding748,
    _flaxBinding1419,
    _flaxBinding1421,
    _flaxBinding1423,
    _flaxBinding1425,
    _flaxBinding1427,
    _flaxBinding1429,
  ]),
);
const _flaxBinding1431 = FlaxGetter(
  "index",
  _flaxBinding22,
  _SemanticsAction_index,
);
const _flaxBinding1432 = FlaxGetter(
  "name",
  _flaxBinding13,
  _SemanticsAction_name,
);
const _flaxBinding1433 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _SemanticsAction_toString,
);
const _flaxBinding1434 = FlaxProxyMember("index", 1, _flaxBinding25);
const _flaxBinding1435 = FlaxProxyMember("name", 1, _flaxBinding277);
const _flaxBinding1436 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsAction",
  [_flaxBinding1431, _flaxBinding1432],
  {"toString": _flaxBinding1433},
  constructors: {"@implementation": _flaxBinding12},
  create: _createSemanticsAction,
  matches: _isSemanticsAction,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding278,
    _flaxBinding1434,
    _flaxBinding1435,
  ]),
);
const _flaxBinding1437 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsAction",
);
const _flaxBinding1438 = FlaxGetter(
  "type",
  _flaxBinding1437,
  _SemanticsActionEvent_type,
);
const _flaxBinding1439 = FlaxGetter(
  "viewId",
  _flaxBinding22,
  _SemanticsActionEvent_viewId,
);
const _flaxBinding1440 = FlaxGetter(
  "nodeId",
  _flaxBinding22,
  _SemanticsActionEvent_nodeId,
);
const _flaxBinding1441 = FlaxGetter(
  "arguments",
  _flaxBinding896,
  _SemanticsActionEvent_arguments,
);
const _flaxBinding1442 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsAction",
  nullable: true,
);
const _flaxBinding1443 = <FlaxParameter>[
  FlaxParameter(
    "arguments",
    _flaxBinding896,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("nodeId", _flaxBinding364, required: false),
  FlaxParameter("type", _flaxBinding1442, required: false),
  FlaxParameter("viewId", _flaxBinding364, required: false),
];
const _flaxBinding1444 = FlaxInstanceMethod(
  _flaxBinding1443,
  _flaxBinding1031,
  _SemanticsActionEvent_copyWith,
);
const _flaxBinding1445 = <FlaxParameter>[
  FlaxParameter("type", _flaxBinding1437, required: true),
  FlaxParameter("viewId", _flaxBinding22, required: true),
  FlaxParameter("nodeId", _flaxBinding22, required: true),
  FlaxParameter("arguments", _flaxBinding896, required: false),
];
const _flaxBinding1446 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "type",
      _flaxBinding1442,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "viewId",
      _flaxBinding364,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "nodeId",
      _flaxBinding364,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "arguments",
      _flaxBinding896,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1031,
  id: "callback:<>(n:o:type:object?:flax.core/sdk_dart_ui#type:SemanticsAction,n:o:viewId:int?:,n:o:nodeId:int?:,n:o:arguments:any?:)->object:flax.core/sdk_dart_ui#type:SemanticsActionEvent",
);
const _flaxBinding1447 = FlaxProxyMember(
  "copyWith",
  0,
  _flaxBinding1446,
  hasSuper: true,
);
const _flaxBinding1448 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1437,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:SemanticsAction",
);
const _flaxBinding1449 = FlaxProxyMember(
  "type",
  1,
  _flaxBinding1448,
  hasSuper: true,
);
const _flaxBinding1450 = FlaxProxyMember(
  "nodeId",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding1451 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding896,
  id: "callback:<>()->any?:",
);
const _flaxBinding1452 = FlaxProxyMember(
  "arguments",
  1,
  _flaxBinding1451,
  hasSuper: true,
);
const _flaxBinding1453 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsActionEvent",
  [_flaxBinding1438, _flaxBinding1439, _flaxBinding1440, _flaxBinding1441],
  {
    "copyWith": _flaxBinding1444,
    "@super:copyWith": FlaxInstanceMethod(
      _flaxBinding1443,
      _flaxBinding1031,
      _SemanticsActionEvent_super_copyWith,
    ),
    "@super:get:type": FlaxInstanceMethod(
      [],
      _flaxBinding1437,
      _SemanticsActionEvent_super_get_type,
    ),
    "@super:get:viewId": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _FlaxProxyDispatch7_super_get_viewId,
    ),
    "@super:get:nodeId": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _SemanticsActionEvent_super_get_nodeId,
    ),
    "@super:get:arguments": FlaxInstanceMethod(
      [],
      _flaxBinding896,
      _SemanticsActionEvent_super_get_arguments,
    ),
  },
  constructors: {"@implementation": _flaxBinding1445},
  create: _createSemanticsActionEvent,
  matches: _isSemanticsActionEvent,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1447,
    _flaxBinding1449,
    _flaxBinding1146,
    _flaxBinding1450,
    _flaxBinding1452,
  ]),
);
const _flaxBinding1454 = FlaxGetter(
  "index",
  _flaxBinding22,
  _SemanticsFlag_index,
);
const _flaxBinding1455 = FlaxGetter(
  "name",
  _flaxBinding13,
  _SemanticsFlag_name,
);
const _flaxBinding1456 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _SemanticsFlag_toString,
);
const _flaxBinding1457 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsFlag",
  [_flaxBinding1454, _flaxBinding1455],
  {"toString": _flaxBinding1456},
  constructors: {"@implementation": _flaxBinding12},
  create: _createSemanticsFlag,
  matches: _isSemanticsFlag,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding278,
    _flaxBinding1434,
    _flaxBinding1435,
  ]),
);
const _flaxBinding1458 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:CheckedState",
);
const _flaxBinding1459 = FlaxGetter(
  "isChecked",
  _flaxBinding1458,
  _SemanticsFlags_isChecked,
);
const _flaxBinding1460 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Tristate",
);
const _flaxBinding1461 = FlaxGetter(
  "isSelected",
  _flaxBinding1460,
  _SemanticsFlags_isSelected,
);
const _flaxBinding1462 = FlaxGetter(
  "isEnabled",
  _flaxBinding1460,
  _SemanticsFlags_isEnabled,
);
const _flaxBinding1463 = FlaxGetter(
  "isToggled",
  _flaxBinding1460,
  _SemanticsFlags_isToggled,
);
const _flaxBinding1464 = FlaxGetter(
  "isExpanded",
  _flaxBinding1460,
  _SemanticsFlags_isExpanded,
);
const _flaxBinding1465 = FlaxGetter(
  "isRequired",
  _flaxBinding1460,
  _SemanticsFlags_isRequired,
);
const _flaxBinding1466 = FlaxGetter(
  "isFocused",
  _flaxBinding1460,
  _SemanticsFlags_isFocused,
);
const _flaxBinding1467 = FlaxGetter(
  "isAccessibilityFocusBlocked",
  _flaxBinding0,
  _SemanticsFlags_isAccessibilityFocusBlocked,
);
const _flaxBinding1468 = FlaxGetter(
  "isButton",
  _flaxBinding0,
  _SemanticsFlags_isButton,
);
const _flaxBinding1469 = FlaxGetter(
  "isTextField",
  _flaxBinding0,
  _SemanticsFlags_isTextField,
);
const _flaxBinding1470 = FlaxGetter(
  "isInMutuallyExclusiveGroup",
  _flaxBinding0,
  _SemanticsFlags_isInMutuallyExclusiveGroup,
);
const _flaxBinding1471 = FlaxGetter(
  "isHeader",
  _flaxBinding0,
  _SemanticsFlags_isHeader,
);
const _flaxBinding1472 = FlaxGetter(
  "isObscured",
  _flaxBinding0,
  _SemanticsFlags_isObscured,
);
const _flaxBinding1473 = FlaxGetter(
  "scopesRoute",
  _flaxBinding0,
  _SemanticsFlags_scopesRoute,
);
const _flaxBinding1474 = FlaxGetter(
  "namesRoute",
  _flaxBinding0,
  _SemanticsFlags_namesRoute,
);
const _flaxBinding1475 = FlaxGetter(
  "isHidden",
  _flaxBinding0,
  _SemanticsFlags_isHidden,
);
const _flaxBinding1476 = FlaxGetter(
  "isImage",
  _flaxBinding0,
  _SemanticsFlags_isImage,
);
const _flaxBinding1477 = FlaxGetter(
  "isLiveRegion",
  _flaxBinding0,
  _SemanticsFlags_isLiveRegion,
);
const _flaxBinding1478 = FlaxGetter(
  "hasImplicitScrolling",
  _flaxBinding0,
  _SemanticsFlags_hasImplicitScrolling,
);
const _flaxBinding1479 = FlaxGetter(
  "isMultiline",
  _flaxBinding0,
  _SemanticsFlags_isMultiline,
);
const _flaxBinding1480 = FlaxGetter(
  "isReadOnly",
  _flaxBinding0,
  _SemanticsFlags_isReadOnly,
);
const _flaxBinding1481 = FlaxGetter(
  "isLink",
  _flaxBinding0,
  _SemanticsFlags_isLink,
);
const _flaxBinding1482 = FlaxGetter(
  "isSlider",
  _flaxBinding0,
  _SemanticsFlags_isSlider,
);
const _flaxBinding1483 = FlaxGetter(
  "isKeyboardKey",
  _flaxBinding0,
  _SemanticsFlags_isKeyboardKey,
);
const _flaxBinding1484 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding1485 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding1484, required: true),
];
const _flaxBinding1486 = FlaxInstanceMethod(
  _flaxBinding1485,
  _flaxBinding1484,
  _SemanticsFlags_merge,
);
const _flaxBinding1487 = FlaxTypeRef("bool", nullable: true);
const _flaxBinding1488 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:CheckedState",
  nullable: true,
);
const _flaxBinding1489 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Tristate",
  nullable: true,
);
const _flaxBinding1490 = <FlaxParameter>[
  FlaxParameter("hasImplicitScrolling", _flaxBinding1487, required: false),
  FlaxParameter(
    "isAccessibilityFocusBlocked",
    _flaxBinding1487,
    required: false,
  ),
  FlaxParameter("isButton", _flaxBinding1487, required: false),
  FlaxParameter("isChecked", _flaxBinding1488, required: false),
  FlaxParameter("isEnabled", _flaxBinding1489, required: false),
  FlaxParameter("isExpanded", _flaxBinding1489, required: false),
  FlaxParameter("isFocused", _flaxBinding1489, required: false),
  FlaxParameter("isHeader", _flaxBinding1487, required: false),
  FlaxParameter("isHidden", _flaxBinding1487, required: false),
  FlaxParameter("isImage", _flaxBinding1487, required: false),
  FlaxParameter(
    "isInMutuallyExclusiveGroup",
    _flaxBinding1487,
    required: false,
  ),
  FlaxParameter("isKeyboardKey", _flaxBinding1487, required: false),
  FlaxParameter("isLink", _flaxBinding1487, required: false),
  FlaxParameter("isLiveRegion", _flaxBinding1487, required: false),
  FlaxParameter("isMultiline", _flaxBinding1487, required: false),
  FlaxParameter("isObscured", _flaxBinding1487, required: false),
  FlaxParameter("isReadOnly", _flaxBinding1487, required: false),
  FlaxParameter("isRequired", _flaxBinding1489, required: false),
  FlaxParameter("isSelected", _flaxBinding1489, required: false),
  FlaxParameter("isSlider", _flaxBinding1487, required: false),
  FlaxParameter("isTextField", _flaxBinding1487, required: false),
  FlaxParameter("isToggled", _flaxBinding1489, required: false),
  FlaxParameter("namesRoute", _flaxBinding1487, required: false),
  FlaxParameter("scopesRoute", _flaxBinding1487, required: false),
];
const _flaxBinding1491 = FlaxInstanceMethod(
  _flaxBinding1490,
  _flaxBinding1484,
  _SemanticsFlags_copyWith,
);
const _flaxBinding1492 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding13,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection31Create,
    _collection31Matches,
    restore: _collection31Restore,
  ),
);
const _flaxBinding1493 = FlaxTypeRef(
  "list",
  item: _flaxBinding13,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection30Create,
    _collection30Matches,
  ),
  iterable: _flaxBinding1492,
);
const _flaxBinding1494 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding1493,
  _SemanticsFlags_toStrings,
);
const _flaxBinding1495 = FlaxInstanceMethod(
  _flaxBinding1485,
  _flaxBinding0,
  _SemanticsFlags_hasRepeatedFlags,
);
const _flaxBinding1496 = FlaxInstanceMethod(
  _flaxBinding1485,
  _flaxBinding0,
  _SemanticsFlags_hasConflictingFlags,
);
const _flaxBinding1497 = <FlaxParameter>[
  FlaxParameter(
    "isChecked",
    _flaxBinding1458,
    required: false,
    defaultValue: api.CheckedState.none,
  ),
  FlaxParameter(
    "isSelected",
    _flaxBinding1460,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isEnabled",
    _flaxBinding1460,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isToggled",
    _flaxBinding1460,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isExpanded",
    _flaxBinding1460,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isRequired",
    _flaxBinding1460,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isFocused",
    _flaxBinding1460,
    required: false,
    defaultValue: api.Tristate.none,
  ),
  FlaxParameter(
    "isButton",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isTextField",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isInMutuallyExclusiveGroup",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isHeader",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isObscured",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "scopesRoute",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "namesRoute",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isHidden",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("isImage", _flaxBinding0, required: false, defaultValue: false),
  FlaxParameter(
    "isLiveRegion",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "hasImplicitScrolling",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isMultiline",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isReadOnly",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("isLink", _flaxBinding0, required: false, defaultValue: false),
  FlaxParameter(
    "isSlider",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isKeyboardKey",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isAccessibilityFocusBlocked",
    _flaxBinding0,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding1498 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "other",
      _flaxBinding1484,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding1484,
  id: "callback:<>(p:r:other:object:flax.core/sdk_dart_ui#type:SemanticsFlags)->object:flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding1499 = FlaxProxyMember(
  "merge",
  0,
  _flaxBinding1498,
  hasSuper: true,
);
const _flaxBinding1500 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "isChecked",
      _flaxBinding1488,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isSelected",
      _flaxBinding1489,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isEnabled",
      _flaxBinding1489,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isToggled",
      _flaxBinding1489,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isExpanded",
      _flaxBinding1489,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isRequired",
      _flaxBinding1489,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isFocused",
      _flaxBinding1489,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isButton",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isTextField",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isInMutuallyExclusiveGroup",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isHeader",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isObscured",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "scopesRoute",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "namesRoute",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isHidden",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isImage",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isLiveRegion",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "hasImplicitScrolling",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isMultiline",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isReadOnly",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isLink",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isSlider",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isKeyboardKey",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "isAccessibilityFocusBlocked",
      _flaxBinding1487,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1484,
  id: "callback:<>(n:o:isChecked:enum?:flax.core/sdk_dart_ui#type:CheckedState,n:o:isSelected:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isEnabled:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isToggled:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isExpanded:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isRequired:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isFocused:enum?:flax.core/sdk_dart_ui#type:Tristate,n:o:isButton:bool?:,n:o:isTextField:bool?:,n:o:isInMutuallyExclusiveGroup:bool?:,n:o:isHeader:bool?:,n:o:isObscured:bool?:,n:o:scopesRoute:bool?:,n:o:namesRoute:bool?:,n:o:isHidden:bool?:,n:o:isImage:bool?:,n:o:isLiveRegion:bool?:,n:o:hasImplicitScrolling:bool?:,n:o:isMultiline:bool?:,n:o:isReadOnly:bool?:,n:o:isLink:bool?:,n:o:isSlider:bool?:,n:o:isKeyboardKey:bool?:,n:o:isAccessibilityFocusBlocked:bool?:)->object:flax.core/sdk_dart_ui#type:SemanticsFlags",
);
const _flaxBinding1501 = FlaxProxyMember(
  "copyWith",
  0,
  _flaxBinding1500,
  hasSuper: true,
);
const _flaxBinding1502 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1493,
  id: "callback:<>()->list:[String:]",
);
const _flaxBinding1503 = FlaxProxyMember(
  "toStrings",
  0,
  _flaxBinding1502,
  hasSuper: true,
);
const _flaxBinding1504 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "other",
      _flaxBinding1484,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:other:object:flax.core/sdk_dart_ui#type:SemanticsFlags)->bool:",
);
const _flaxBinding1505 = FlaxProxyMember(
  "hasRepeatedFlags",
  0,
  _flaxBinding1504,
  hasSuper: true,
);
const _flaxBinding1506 = FlaxProxyMember(
  "hasConflictingFlags",
  0,
  _flaxBinding1504,
  hasSuper: true,
);
const _flaxBinding1507 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1458,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:CheckedState",
);
const _flaxBinding1508 = FlaxProxyMember(
  "isChecked",
  1,
  _flaxBinding1507,
  hasSuper: true,
);
const _flaxBinding1509 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1460,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:Tristate",
);
const _flaxBinding1510 = FlaxProxyMember(
  "isSelected",
  1,
  _flaxBinding1509,
  hasSuper: true,
);
const _flaxBinding1511 = FlaxProxyMember(
  "isEnabled",
  1,
  _flaxBinding1509,
  hasSuper: true,
);
const _flaxBinding1512 = FlaxProxyMember(
  "isToggled",
  1,
  _flaxBinding1509,
  hasSuper: true,
);
const _flaxBinding1513 = FlaxProxyMember(
  "isExpanded",
  1,
  _flaxBinding1509,
  hasSuper: true,
);
const _flaxBinding1514 = FlaxProxyMember(
  "isRequired",
  1,
  _flaxBinding1509,
  hasSuper: true,
);
const _flaxBinding1515 = FlaxProxyMember(
  "isFocused",
  1,
  _flaxBinding1509,
  hasSuper: true,
);
const _flaxBinding1516 = FlaxProxyMember(
  "isAccessibilityFocusBlocked",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1517 = FlaxProxyMember(
  "isButton",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1518 = FlaxProxyMember(
  "isTextField",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1519 = FlaxProxyMember(
  "isInMutuallyExclusiveGroup",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1520 = FlaxProxyMember(
  "isHeader",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1521 = FlaxProxyMember(
  "isObscured",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1522 = FlaxProxyMember(
  "scopesRoute",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1523 = FlaxProxyMember(
  "namesRoute",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1524 = FlaxProxyMember(
  "isHidden",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1525 = FlaxProxyMember(
  "isImage",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1526 = FlaxProxyMember(
  "isLiveRegion",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1527 = FlaxProxyMember(
  "hasImplicitScrolling",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1528 = FlaxProxyMember(
  "isMultiline",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1529 = FlaxProxyMember(
  "isReadOnly",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1530 = FlaxProxyMember(
  "isLink",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1531 = FlaxProxyMember(
  "isSlider",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1532 = FlaxProxyMember(
  "isKeyboardKey",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1533 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsFlags",
  [
    _flaxBinding1459,
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
    _flaxBinding1479,
    _flaxBinding1480,
    _flaxBinding1481,
    _flaxBinding1482,
    _flaxBinding1483,
  ],
  {
    "merge": _flaxBinding1486,
    "copyWith": _flaxBinding1491,
    "toStrings": _flaxBinding1494,
    "hasRepeatedFlags": _flaxBinding1495,
    "hasConflictingFlags": _flaxBinding1496,
    "@super:merge": FlaxInstanceMethod(
      _flaxBinding1485,
      _flaxBinding1484,
      _SemanticsFlags_super_merge,
    ),
    "@super:copyWith": FlaxInstanceMethod(
      _flaxBinding1490,
      _flaxBinding1484,
      _SemanticsFlags_super_copyWith,
    ),
    "@super:toStrings": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding1493,
      _SemanticsFlags_super_toStrings,
    ),
    "@super:hasRepeatedFlags": FlaxInstanceMethod(
      _flaxBinding1485,
      _flaxBinding0,
      _SemanticsFlags_super_hasRepeatedFlags,
    ),
    "@super:hasConflictingFlags": FlaxInstanceMethod(
      _flaxBinding1485,
      _flaxBinding0,
      _SemanticsFlags_super_hasConflictingFlags,
    ),
    "@super:get:isChecked": FlaxInstanceMethod(
      [],
      _flaxBinding1458,
      _SemanticsFlags_super_get_isChecked,
    ),
    "@super:get:isSelected": FlaxInstanceMethod(
      [],
      _flaxBinding1460,
      _SemanticsFlags_super_get_isSelected,
    ),
    "@super:get:isEnabled": FlaxInstanceMethod(
      [],
      _flaxBinding1460,
      _SemanticsFlags_super_get_isEnabled,
    ),
    "@super:get:isToggled": FlaxInstanceMethod(
      [],
      _flaxBinding1460,
      _SemanticsFlags_super_get_isToggled,
    ),
    "@super:get:isExpanded": FlaxInstanceMethod(
      [],
      _flaxBinding1460,
      _SemanticsFlags_super_get_isExpanded,
    ),
    "@super:get:isRequired": FlaxInstanceMethod(
      [],
      _flaxBinding1460,
      _SemanticsFlags_super_get_isRequired,
    ),
    "@super:get:isFocused": FlaxInstanceMethod(
      [],
      _flaxBinding1460,
      _SemanticsFlags_super_get_isFocused,
    ),
    "@super:get:isAccessibilityFocusBlocked": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isAccessibilityFocusBlocked,
    ),
    "@super:get:isButton": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isButton,
    ),
    "@super:get:isTextField": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isTextField,
    ),
    "@super:get:isInMutuallyExclusiveGroup": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isInMutuallyExclusiveGroup,
    ),
    "@super:get:isHeader": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isHeader,
    ),
    "@super:get:isObscured": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isObscured,
    ),
    "@super:get:scopesRoute": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_scopesRoute,
    ),
    "@super:get:namesRoute": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_namesRoute,
    ),
    "@super:get:isHidden": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isHidden,
    ),
    "@super:get:isImage": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isImage,
    ),
    "@super:get:isLiveRegion": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isLiveRegion,
    ),
    "@super:get:hasImplicitScrolling": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_hasImplicitScrolling,
    ),
    "@super:get:isMultiline": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isMultiline,
    ),
    "@super:get:isReadOnly": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isReadOnly,
    ),
    "@super:get:isLink": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isLink,
    ),
    "@super:get:isSlider": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isSlider,
    ),
    "@super:get:isKeyboardKey": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _SemanticsFlags_super_get_isKeyboardKey,
    ),
  },
  constructors: {"@implementation": _flaxBinding1497},
  create: _createSemanticsFlags,
  matches: _isSemanticsFlags,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1499,
    _flaxBinding1501,
    _flaxBinding1503,
    _flaxBinding1505,
    _flaxBinding1506,
    _flaxBinding1508,
    _flaxBinding1510,
    _flaxBinding1511,
    _flaxBinding1512,
    _flaxBinding1513,
    _flaxBinding1514,
    _flaxBinding1515,
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
  ]),
);
const _flaxBinding1534 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _SemanticsUpdate_dispose,
);
const _flaxBinding1535 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsUpdate",
  [],
  {"dispose": _flaxBinding1534},
  constructors: {"@implementation": _flaxBinding12},
  create: _createSemanticsUpdate,
  matches: _isSemanticsUpdate,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding19]),
);
const _flaxBinding1536 = FlaxTypeRef("Int32List");
const _flaxBinding1537 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding13,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection30Create,
    _collection30Matches,
  ),
  iterable: _flaxBinding1492,
);
const _flaxBinding1538 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding583,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
    _collection33Create,
    _collection33Matches,
    restore: _collection33Restore,
  ),
);
const _flaxBinding1539 = FlaxTypeRef(
  "list",
  item: _flaxBinding583,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:StringAttribute]",
    _collection32Create,
    _collection32Matches,
  ),
  iterable: _flaxBinding1538,
);
const _flaxBinding1540 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior",
);
const _flaxBinding1541 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsInputType",
);
const _flaxBinding1542 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsRole",
);
const _flaxBinding1543 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:SemanticsValidationResult",
);
const _flaxBinding1544 = <FlaxParameter>[
  FlaxParameter("actions", _flaxBinding22, required: true),
  FlaxParameter("additionalActions", _flaxBinding1536, required: true),
  FlaxParameter("childrenInHitTestOrder", _flaxBinding1536, required: true),
  FlaxParameter("childrenInTraversalOrder", _flaxBinding1536, required: true),
  FlaxParameter("controlsNodes", _flaxBinding1537, required: true),
  FlaxParameter("currentValueLength", _flaxBinding22, required: true),
  FlaxParameter("decreasedValue", _flaxBinding13, required: true),
  FlaxParameter("decreasedValueAttributes", _flaxBinding1539, required: true),
  FlaxParameter("flags", _flaxBinding1484, required: true),
  FlaxParameter(
    "headingLevel",
    _flaxBinding22,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter("hint", _flaxBinding13, required: true),
  FlaxParameter("hintAttributes", _flaxBinding1539, required: true),
  FlaxParameter(
    "hitTestBehavior",
    _flaxBinding1540,
    required: false,
    defaultValue: api.SemanticsHitTestBehavior.defer,
  ),
  FlaxParameter("hitTestTransform", _flaxBinding47, required: true),
  FlaxParameter("id", _flaxBinding22, required: true),
  FlaxParameter("identifier", _flaxBinding13, required: true),
  FlaxParameter("increasedValue", _flaxBinding13, required: true),
  FlaxParameter("increasedValueAttributes", _flaxBinding1539, required: true),
  FlaxParameter("inputType", _flaxBinding1541, required: true),
  FlaxParameter("label", _flaxBinding13, required: true),
  FlaxParameter("labelAttributes", _flaxBinding1539, required: true),
  FlaxParameter("linkUrl", _flaxBinding13, required: false, defaultValue: ''),
  FlaxParameter("locale", _flaxBinding770, required: true),
  FlaxParameter("maxValue", _flaxBinding13, required: true),
  FlaxParameter("maxValueLength", _flaxBinding22, required: true),
  FlaxParameter("minValue", _flaxBinding13, required: true),
  FlaxParameter("platformViewId", _flaxBinding22, required: true),
  FlaxParameter("rect", _flaxBinding51, required: true),
  FlaxParameter(
    "role",
    _flaxBinding1542,
    required: false,
    defaultValue: api.SemanticsRole.none,
  ),
  FlaxParameter("scrollChildren", _flaxBinding22, required: true),
  FlaxParameter("scrollExtentMax", _flaxBinding37, required: true),
  FlaxParameter("scrollExtentMin", _flaxBinding37, required: true),
  FlaxParameter("scrollIndex", _flaxBinding22, required: true),
  FlaxParameter("scrollPosition", _flaxBinding37, required: true),
  FlaxParameter("textDirection", _flaxBinding765, required: true),
  FlaxParameter("textSelectionBase", _flaxBinding22, required: true),
  FlaxParameter("textSelectionExtent", _flaxBinding22, required: true),
  FlaxParameter("tooltip", _flaxBinding13, required: true),
  FlaxParameter("transform", _flaxBinding47, required: true),
  FlaxParameter("traversalParent", _flaxBinding22, required: true),
  FlaxParameter(
    "validationResult",
    _flaxBinding1543,
    required: false,
    defaultValue: api.SemanticsValidationResult.none,
  ),
  FlaxParameter("value", _flaxBinding13, required: true),
  FlaxParameter("valueAttributes", _flaxBinding1539, required: true),
];
const _flaxBinding1545 = FlaxInstanceMethod(
  _flaxBinding1544,
  _flaxBinding16,
  _SemanticsUpdateBuilder_updateNode,
);
const _flaxBinding1546 = <FlaxParameter>[
  FlaxParameter("hint", _flaxBinding531, required: false),
  FlaxParameter("id", _flaxBinding22, required: true),
  FlaxParameter("label", _flaxBinding531, required: false),
  FlaxParameter(
    "overrideId",
    _flaxBinding22,
    required: false,
    defaultValue: -1,
  ),
];
const _flaxBinding1547 = FlaxInstanceMethod(
  _flaxBinding1546,
  _flaxBinding16,
  _SemanticsUpdateBuilder_updateCustomAction,
);
const _flaxBinding1548 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding337,
  _SemanticsUpdateBuilder_build,
);
const _flaxBinding1549 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "id",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "flags",
      _flaxBinding1484,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "actions",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "maxValueLength",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "currentValueLength",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "textSelectionBase",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "textSelectionExtent",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "platformViewId",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "scrollChildren",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "scrollIndex",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "traversalParent",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "scrollPosition",
      _flaxBinding37,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "scrollExtentMax",
      _flaxBinding37,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "scrollExtentMin",
      _flaxBinding37,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "rect",
      _flaxBinding51,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "identifier",
      _flaxBinding13,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "label",
      _flaxBinding13,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "labelAttributes",
      _flaxBinding1539,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "value",
      _flaxBinding13,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "valueAttributes",
      _flaxBinding1539,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "increasedValue",
      _flaxBinding13,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "increasedValueAttributes",
      _flaxBinding1539,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "decreasedValue",
      _flaxBinding13,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "decreasedValueAttributes",
      _flaxBinding1539,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "hint",
      _flaxBinding13,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "hintAttributes",
      _flaxBinding1539,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "tooltip",
      _flaxBinding13,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "textDirection",
      _flaxBinding765,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "transform",
      _flaxBinding47,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "hitTestTransform",
      _flaxBinding47,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "childrenInTraversalOrder",
      _flaxBinding1536,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "childrenInHitTestOrder",
      _flaxBinding1536,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "additionalActions",
      _flaxBinding1536,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "headingLevel",
      _flaxBinding22,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "linkUrl",
      _flaxBinding13,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "role",
      _flaxBinding1542,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "controlsNodes",
      _flaxBinding1537,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "validationResult",
      _flaxBinding1543,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "hitTestBehavior",
      _flaxBinding1540,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "inputType",
      _flaxBinding1541,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "locale",
      _flaxBinding770,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "minValue",
      _flaxBinding13,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "maxValue",
      _flaxBinding13,
      required: true,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(n:r:id:int:,n:r:flags:object:flax.core/sdk_dart_ui#type:SemanticsFlags,n:r:actions:int:,n:r:maxValueLength:int:,n:r:currentValueLength:int:,n:r:textSelectionBase:int:,n:r:textSelectionExtent:int:,n:r:platformViewId:int:,n:r:scrollChildren:int:,n:r:scrollIndex:int:,n:r:traversalParent:int:,n:r:scrollPosition:double:,n:r:scrollExtentMax:double:,n:r:scrollExtentMin:double:,n:r:rect:object:flax.core/sdk_dart_ui#type:Rect,n:r:identifier:String:,n:r:label:String:,n:r:labelAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:value:String:,n:r:valueAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:increasedValue:String:,n:r:increasedValueAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:decreasedValue:String:,n:r:decreasedValueAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:hint:String:,n:r:hintAttributes:list:[object:flax.core/sdk_dart_ui#type:StringAttribute],n:r:tooltip:String:,n:r:textDirection:enum?:flax.core/flutter#type:TextDirection,n:r:transform:Float64List:,n:r:hitTestTransform:Float64List:,n:r:childrenInTraversalOrder:Int32List:,n:r:childrenInHitTestOrder:Int32List:,n:r:additionalActions:Int32List:,n:o:headingLevel:int:,n:o:linkUrl:String:,n:o:role:enum:flax.core/sdk_dart_ui#type:SemanticsRole,n:r:controlsNodes:list?:[String:],n:o:validationResult:enum:flax.core/sdk_dart_ui#type:SemanticsValidationResult,n:o:hitTestBehavior:enum:flax.core/sdk_dart_ui#type:SemanticsHitTestBehavior,n:r:inputType:enum:flax.core/sdk_dart_ui#type:SemanticsInputType,n:r:locale:object?:flax.core/sdk_dart_ui#type:Locale,n:r:minValue:String:,n:r:maxValue:String:)->void:",
);
const _flaxBinding1550 = FlaxProxyMember("updateNode", 0, _flaxBinding1549);
const _flaxBinding1551 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "id",
      _flaxBinding22,
      required: true,
      positional: false,
    ),
    FlaxCallbackParameter(
      "label",
      _flaxBinding531,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "hint",
      _flaxBinding531,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "overrideId",
      _flaxBinding22,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding16,
  id: "callback:<>(n:r:id:int:,n:o:label:String?:,n:o:hint:String?:,n:o:overrideId:int:)->void:",
);
const _flaxBinding1552 = FlaxProxyMember(
  "updateCustomAction",
  0,
  _flaxBinding1551,
);
const _flaxBinding1553 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding337,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:SemanticsUpdate",
);
const _flaxBinding1554 = FlaxProxyMember("build", 0, _flaxBinding1553);
const _flaxBinding1555 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SemanticsUpdateBuilder",
  [],
  {
    "updateNode": _flaxBinding1545,
    "updateCustomAction": _flaxBinding1547,
    "build": _flaxBinding1548,
  },
  constructors: {"": _flaxBinding12, "@implementation": _flaxBinding12},
  create: _createSemanticsUpdateBuilder,
  matches: _isSemanticsUpdateBuilder,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1550,
    _flaxBinding1552,
    _flaxBinding1554,
  ]),
);
const _flaxBinding1556 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding1557 = FlaxGetter("color", _flaxBinding66, _Shadow_color);
const _flaxBinding1558 = FlaxGetter("offset", _flaxBinding70, _Shadow_offset);
const _flaxBinding1559 = FlaxGetter(
  "blurRadius",
  _flaxBinding37,
  _Shadow_blurRadius,
);
const _flaxBinding1560 = FlaxGetter(
  "blurSigma",
  _flaxBinding37,
  _Shadow_blurSigma,
);
const _flaxBinding1561 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding30,
  _Shadow_toPaint,
);
const _flaxBinding1562 = <FlaxParameter>[
  FlaxParameter("factor", _flaxBinding37, required: true),
];
const _flaxBinding1563 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Shadow",
);
const _flaxBinding1564 = FlaxInstanceMethod(
  _flaxBinding1562,
  _flaxBinding1563,
  _Shadow_scale,
);
const _flaxBinding1565 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _Shadow_toString,
);
const _flaxBinding1566 = <FlaxParameter>[
  FlaxParameter("color", _flaxBinding66, required: false, omitWhenAbsent: true),
  FlaxParameter(
    "offset",
    _flaxBinding70,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "blurRadius",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
];
const _flaxBinding1567 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding30,
  id: "callback:<>()->object:flax.core/sdk_dart_ui#type:Paint",
);
const _flaxBinding1568 = FlaxProxyMember(
  "toPaint",
  0,
  _flaxBinding1567,
  hasSuper: true,
);
const _flaxBinding1569 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "factor",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding1563,
  id: "callback:<>(p:r:factor:double:)->object:flax.core/sdk_dart_ui#type:Shadow",
);
const _flaxBinding1570 = FlaxProxyMember(
  "scale",
  0,
  _flaxBinding1569,
  hasSuper: true,
);
const _flaxBinding1571 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding66,
  id: "callback:<>()->object:flax.core/flutter#type:Color",
);
const _flaxBinding1572 = FlaxProxyMember(
  "color",
  1,
  _flaxBinding1571,
  hasSuper: true,
);
const _flaxBinding1573 = FlaxProxyMember(
  "blurRadius",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1574 = FlaxProxyMember(
  "blurSigma",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1575 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Shadow",
  [_flaxBinding1557, _flaxBinding1558, _flaxBinding1559, _flaxBinding1560],
  {
    "toPaint": _flaxBinding1561,
    "scale": _flaxBinding1564,
    "toString": _flaxBinding1565,
    "@super:toPaint": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding30,
      _Shadow_super_toPaint,
    ),
    "@super:scale": FlaxInstanceMethod(
      _flaxBinding1562,
      _flaxBinding1563,
      _Shadow_super_scale,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:color": FlaxInstanceMethod(
      [],
      _flaxBinding66,
      _Shadow_super_get_color,
    ),
    "@super:get:offset": FlaxInstanceMethod(
      [],
      _flaxBinding70,
      _FlaxProxyDispatch1_super_get_offset,
    ),
    "@super:get:blurRadius": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _Shadow_super_get_blurRadius,
    ),
    "@super:get:blurSigma": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _Shadow_super_get_blurSigma,
    ),
  },
  constructors: {"@implementation": _flaxBinding1566},
  create: _createShadow,
  matches: _isShadow,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1568,
    _flaxBinding1570,
    _flaxBinding292,
    _flaxBinding1572,
    _flaxBinding464,
    _flaxBinding1573,
    _flaxBinding1574,
  ]),
);
const _flaxBinding1576 = FlaxGetter(
  "onMetricsChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_onMetricsChanged,
);
const _flaxBinding1577 = FlaxGetter(
  "locale",
  _flaxBinding586,
  _SingletonFlutterWindow_locale,
);
const _flaxBinding1578 = FlaxGetter(
  "locales",
  _flaxBinding1010,
  _SingletonFlutterWindow_locales,
);
const _flaxBinding1579 = FlaxGetter(
  "onLocaleChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_onLocaleChanged,
);
const _flaxBinding1580 = FlaxGetter(
  "initialLifecycleState",
  _flaxBinding13,
  _SingletonFlutterWindow_initialLifecycleState,
);
const _flaxBinding1581 = FlaxGetter(
  "textScaleFactor",
  _flaxBinding37,
  _SingletonFlutterWindow_textScaleFactor,
);
const _flaxBinding1582 = FlaxGetter(
  "nativeSpellCheckServiceDefined",
  _flaxBinding0,
  _SingletonFlutterWindow_nativeSpellCheckServiceDefined,
);
const _flaxBinding1583 = FlaxGetter(
  "supportsShowingSystemContextMenu",
  _flaxBinding0,
  _SingletonFlutterWindow_supportsShowingSystemContextMenu,
);
const _flaxBinding1584 = FlaxGetter(
  "brieflyShowPassword",
  _flaxBinding0,
  _SingletonFlutterWindow_brieflyShowPassword,
);
const _flaxBinding1585 = FlaxGetter(
  "alwaysUse24HourFormat",
  _flaxBinding0,
  _SingletonFlutterWindow_alwaysUse24HourFormat,
);
const _flaxBinding1586 = FlaxGetter(
  "onTextScaleFactorChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_onTextScaleFactorChanged,
);
const _flaxBinding1587 = FlaxGetter(
  "platformBrightness",
  _flaxBinding1024,
  _SingletonFlutterWindow_platformBrightness,
);
const _flaxBinding1588 = FlaxGetter(
  "onPlatformBrightnessChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_onPlatformBrightnessChanged,
);
const _flaxBinding1589 = FlaxGetter(
  "systemFontFamily",
  _flaxBinding531,
  _SingletonFlutterWindow_systemFontFamily,
);
const _flaxBinding1590 = FlaxGetter(
  "onSystemFontFamilyChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_onSystemFontFamilyChanged,
);
const _flaxBinding1591 = FlaxGetter(
  "onBeginFrame",
  _flaxBinding984,
  _SingletonFlutterWindow_onBeginFrame,
);
const _flaxBinding1592 = FlaxGetter(
  "onDrawFrame",
  _flaxBinding969,
  _SingletonFlutterWindow_onDrawFrame,
);
const _flaxBinding1593 = FlaxGetter(
  "onReportTimings",
  _flaxBinding999,
  _SingletonFlutterWindow_onReportTimings,
);
const _flaxBinding1594 = FlaxGetter(
  "onPointerDataPacket",
  _flaxBinding989,
  _SingletonFlutterWindow_onPointerDataPacket,
);
const _flaxBinding1595 = FlaxGetter(
  "onKeyData",
  _flaxBinding993,
  _SingletonFlutterWindow_onKeyData,
);
const _flaxBinding1596 = FlaxGetter(
  "defaultRouteName",
  _flaxBinding13,
  _SingletonFlutterWindow_defaultRouteName,
);
const _flaxBinding1597 = FlaxGetter(
  "semanticsEnabled",
  _flaxBinding0,
  _SingletonFlutterWindow_semanticsEnabled,
);
const _flaxBinding1598 = FlaxGetter(
  "onSemanticsEnabledChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_onSemanticsEnabledChanged,
);
const _flaxBinding1599 = FlaxGetter(
  "frameData",
  _flaxBinding1040,
  _SingletonFlutterWindow_frameData,
);
const _flaxBinding1600 = FlaxGetter(
  "onFrameDataChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_onFrameDataChanged,
);
const _flaxBinding1601 = FlaxGetter(
  "accessibilityFeatures",
  _flaxBinding1005,
  _SingletonFlutterWindow_accessibilityFeatures,
);
const _flaxBinding1602 = FlaxGetter(
  "onAccessibilityFeaturesChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_onAccessibilityFeaturesChanged,
);
const _flaxBinding1603 = FlaxGetter(
  "onPlatformMessage",
  _flaxBinding1003,
  _SingletonFlutterWindow_onPlatformMessage,
);
const _flaxBinding1604 = FlaxSetter(
  "onMetricsChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_set_onMetricsChanged,
);
const _flaxBinding1605 = FlaxSetter(
  "onLocaleChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_set_onLocaleChanged,
);
const _flaxBinding1606 = FlaxSetter(
  "onTextScaleFactorChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_set_onTextScaleFactorChanged,
);
const _flaxBinding1607 = FlaxSetter(
  "onPlatformBrightnessChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_set_onPlatformBrightnessChanged,
);
const _flaxBinding1608 = FlaxSetter(
  "onSystemFontFamilyChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_set_onSystemFontFamilyChanged,
);
const _flaxBinding1609 = FlaxSetter(
  "onBeginFrame",
  _flaxBinding984,
  _SingletonFlutterWindow_set_onBeginFrame,
);
const _flaxBinding1610 = FlaxSetter(
  "onDrawFrame",
  _flaxBinding969,
  _SingletonFlutterWindow_set_onDrawFrame,
);
const _flaxBinding1611 = FlaxSetter(
  "onReportTimings",
  _flaxBinding999,
  _SingletonFlutterWindow_set_onReportTimings,
);
const _flaxBinding1612 = FlaxSetter(
  "onPointerDataPacket",
  _flaxBinding989,
  _SingletonFlutterWindow_set_onPointerDataPacket,
);
const _flaxBinding1613 = FlaxSetter(
  "onKeyData",
  _flaxBinding993,
  _SingletonFlutterWindow_set_onKeyData,
);
const _flaxBinding1614 = FlaxSetter(
  "onSemanticsEnabledChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_set_onSemanticsEnabledChanged,
);
const _flaxBinding1615 = FlaxSetter(
  "onFrameDataChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_set_onFrameDataChanged,
);
const _flaxBinding1616 = FlaxSetter(
  "onAccessibilityFeaturesChanged",
  _flaxBinding969,
  _SingletonFlutterWindow_set_onAccessibilityFeaturesChanged,
);
const _flaxBinding1617 = FlaxSetter(
  "onPlatformMessage",
  _flaxBinding1003,
  _SingletonFlutterWindow_set_onPlatformMessage,
);
const _flaxBinding1618 = FlaxInstanceMethod(
  _flaxBinding1092,
  _flaxBinding770,
  _SingletonFlutterWindow_computePlatformResolvedLocale,
);
const _flaxBinding1619 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _SingletonFlutterWindow_scheduleFrame,
);
const _flaxBinding1620 = FlaxInstanceMethod(
  _flaxBinding1073,
  _flaxBinding16,
  _SingletonFlutterWindow_sendPlatformMessage,
);
const _flaxBinding1621 = FlaxInstanceMethod(
  _flaxBinding214,
  _flaxBinding16,
  _SingletonFlutterWindow_setIsolateDebugName,
);
const _flaxBinding1622 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SingletonFlutterWindow",
  [
    _flaxBinding1576,
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
    _flaxBinding1596,
    _flaxBinding1597,
    _flaxBinding1598,
    _flaxBinding1599,
    _flaxBinding1600,
    _flaxBinding1601,
    _flaxBinding1602,
    _flaxBinding1603,
  ],
  {
    "computePlatformResolvedLocale": _flaxBinding1618,
    "scheduleFrame": _flaxBinding1619,
    "sendPlatformMessage": _flaxBinding1620,
    "setIsolateDebugName": _flaxBinding1621,
  },
  constructors: {},
  create: _createSingletonFlutterWindow,
  matches: _isSingletonFlutterWindow,
  setters: [
    _flaxBinding1604,
    _flaxBinding1605,
    _flaxBinding1606,
    _flaxBinding1607,
    _flaxBinding1608,
    _flaxBinding1609,
    _flaxBinding1610,
    _flaxBinding1611,
    _flaxBinding1612,
    _flaxBinding1613,
    _flaxBinding1614,
    _flaxBinding1615,
    _flaxBinding1616,
    _flaxBinding1617,
  ],
  supertypes: ["flax.core/sdk_dart_ui#type:FlutterView", "dart:core::Object"],
  parent: _flaxBinding341,
);
const _flaxBinding1623 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _SpellOutStringAttribute_toString,
);
const _flaxBinding1624 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SpellOutStringAttribute",
  [],
  {
    "toString": _flaxBinding1623,
    "@super:copy": FlaxInstanceMethod(
      _flaxBinding582,
      _flaxBinding583,
      _FlaxProxyDispatch6_super_call_copy,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:range": FlaxInstanceMethod(
      [],
      _flaxBinding441,
      _FlaxProxyDispatch6_super_get_range,
    ),
  },
  constructors: {"@implementation": _flaxBinding582},
  create: _createSpellOutStringAttribute,
  matches: _isSpellOutStringAttribute,
  setters: [],
  supertypes: [
    "flax.core/sdk_dart_ui#type:StringAttribute",
    "dart:core::Object",
  ],
  parent: _flaxBinding585,
  proxy: FlaxProxyBinding([_flaxBinding591, _flaxBinding292, _flaxBinding595]),
);
const _flaxBinding1625 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TextLeadingDistribution",
  nullable: true,
);
const _flaxBinding1626 = <FlaxParameter>[
  FlaxParameter("fontFamily", _flaxBinding531, required: false),
  FlaxParameter("fontFamilyFallback", _flaxBinding1537, required: false),
  FlaxParameter("fontSize", _flaxBinding40, required: false),
  FlaxParameter("height", _flaxBinding40, required: false),
  FlaxParameter("leadingDistribution", _flaxBinding1625, required: false),
  FlaxParameter("leading", _flaxBinding40, required: false),
  FlaxParameter("fontWeight", _flaxBinding767, required: false),
  FlaxParameter("fontStyle", _flaxBinding768, required: false),
  FlaxParameter("forceStrutHeight", _flaxBinding1487, required: false),
];
const _flaxBinding1627 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:StrutStyle",
  [],
  {},
  constructors: {"": _flaxBinding1626},
  create: _createStrutStyle,
  matches: _isStrutStyle,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1628 = FlaxGetter("name", _flaxBinding13, _SystemColor_name);
const _flaxBinding1629 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
  nullable: true,
);
const _flaxBinding1630 = FlaxGetter(
  "value",
  _flaxBinding1629,
  _SystemColor_value,
);
const _flaxBinding1631 = FlaxGetter(
  "isSupported",
  _flaxBinding0,
  _SystemColor_isSupported,
);
const _flaxBinding1632 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding13, required: true),
  FlaxParameter("value", _flaxBinding1629, required: false),
];
const _flaxBinding1633 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SystemColor",
  [_flaxBinding1628, _flaxBinding1630, _flaxBinding1631],
  {},
  constructors: {"": _flaxBinding1632},
  create: _createSystemColor,
  matches: _isSystemColor,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1634 = FlaxGetter(
  "brightness",
  _flaxBinding1024,
  _SystemColorPalette_brightness,
);
const _flaxBinding1635 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SystemColor",
);
const _flaxBinding1636 = FlaxGetter(
  "accentColor",
  _flaxBinding1635,
  _SystemColorPalette_accentColor,
);
const _flaxBinding1637 = FlaxGetter(
  "accentColorText",
  _flaxBinding1635,
  _SystemColorPalette_accentColorText,
);
const _flaxBinding1638 = FlaxGetter(
  "activeText",
  _flaxBinding1635,
  _SystemColorPalette_activeText,
);
const _flaxBinding1639 = FlaxGetter(
  "buttonBorder",
  _flaxBinding1635,
  _SystemColorPalette_buttonBorder,
);
const _flaxBinding1640 = FlaxGetter(
  "buttonFace",
  _flaxBinding1635,
  _SystemColorPalette_buttonFace,
);
const _flaxBinding1641 = FlaxGetter(
  "buttonText",
  _flaxBinding1635,
  _SystemColorPalette_buttonText,
);
const _flaxBinding1642 = FlaxGetter(
  "canvas",
  _flaxBinding1635,
  _SystemColorPalette_canvas,
);
const _flaxBinding1643 = FlaxGetter(
  "canvasText",
  _flaxBinding1635,
  _SystemColorPalette_canvasText,
);
const _flaxBinding1644 = FlaxGetter(
  "field",
  _flaxBinding1635,
  _SystemColorPalette_field,
);
const _flaxBinding1645 = FlaxGetter(
  "fieldText",
  _flaxBinding1635,
  _SystemColorPalette_fieldText,
);
const _flaxBinding1646 = FlaxGetter(
  "grayText",
  _flaxBinding1635,
  _SystemColorPalette_grayText,
);
const _flaxBinding1647 = FlaxGetter(
  "highlight",
  _flaxBinding1635,
  _SystemColorPalette_highlight,
);
const _flaxBinding1648 = FlaxGetter(
  "highlightText",
  _flaxBinding1635,
  _SystemColorPalette_highlightText,
);
const _flaxBinding1649 = FlaxGetter(
  "linkText",
  _flaxBinding1635,
  _SystemColorPalette_linkText,
);
const _flaxBinding1650 = FlaxGetter(
  "mark",
  _flaxBinding1635,
  _SystemColorPalette_mark,
);
const _flaxBinding1651 = FlaxGetter(
  "markText",
  _flaxBinding1635,
  _SystemColorPalette_markText,
);
const _flaxBinding1652 = FlaxGetter(
  "selectedItem",
  _flaxBinding1635,
  _SystemColorPalette_selectedItem,
);
const _flaxBinding1653 = FlaxGetter(
  "selectedItemText",
  _flaxBinding1635,
  _SystemColorPalette_selectedItemText,
);
const _flaxBinding1654 = FlaxGetter(
  "visitedText",
  _flaxBinding1635,
  _SystemColorPalette_visitedText,
);
const _flaxBinding1655 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:SystemColorPalette",
  [
    _flaxBinding1634,
    _flaxBinding1636,
    _flaxBinding1637,
    _flaxBinding1638,
    _flaxBinding1639,
    _flaxBinding1640,
    _flaxBinding1641,
    _flaxBinding1642,
    _flaxBinding1643,
    _flaxBinding1644,
    _flaxBinding1645,
    _flaxBinding1646,
    _flaxBinding1647,
    _flaxBinding1648,
    _flaxBinding1649,
    _flaxBinding1650,
    _flaxBinding1651,
    _flaxBinding1652,
    _flaxBinding1653,
    _flaxBinding1654,
  ],
  {},
  constructors: {},
  create: _createSystemColorPalette,
  matches: _isSystemColorPalette,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1656 = FlaxGetter(
  "position",
  _flaxBinding70,
  _Tangent_position,
);
const _flaxBinding1657 = FlaxGetter("vector", _flaxBinding70, _Tangent_vector);
const _flaxBinding1658 = FlaxGetter("angle", _flaxBinding37, _Tangent_angle);
const _flaxBinding1659 = <FlaxParameter>[
  FlaxParameter("position", _flaxBinding70, required: true),
  FlaxParameter("vector", _flaxBinding70, required: true),
];
const _flaxBinding1660 = FlaxProxyMember(
  "position",
  1,
  _flaxBinding463,
  hasSuper: true,
);
const _flaxBinding1661 = FlaxProxyMember(
  "vector",
  1,
  _flaxBinding463,
  hasSuper: true,
);
const _flaxBinding1662 = FlaxProxyMember(
  "angle",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1663 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Tangent",
  [_flaxBinding1656, _flaxBinding1657, _flaxBinding1658],
  {
    "@super:get:position": FlaxInstanceMethod(
      [],
      _flaxBinding70,
      _Tangent_super_get_position,
    ),
    "@super:get:vector": FlaxInstanceMethod(
      [],
      _flaxBinding70,
      _Tangent_super_get_vector,
    ),
    "@super:get:angle": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _Tangent_super_get_angle,
    ),
  },
  constructors: {"@implementation": _flaxBinding1659},
  create: _createTangent,
  matches: _isTangent,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1660,
    _flaxBinding1661,
    _flaxBinding1662,
  ]),
);
const _flaxBinding1664 = FlaxGetter(
  "width",
  _flaxBinding364,
  _TargetImageSize_width,
);
const _flaxBinding1665 = FlaxGetter(
  "height",
  _flaxBinding364,
  _TargetImageSize_height,
);
const _flaxBinding1666 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _TargetImageSize_toString,
);
const _flaxBinding1667 = <FlaxParameter>[
  FlaxParameter("width", _flaxBinding364, required: false),
  FlaxParameter("height", _flaxBinding364, required: false),
];
const _flaxBinding1668 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding364,
  id: "callback:<>()->int?:",
);
const _flaxBinding1669 = FlaxProxyMember(
  "width",
  1,
  _flaxBinding1668,
  hasSuper: true,
);
const _flaxBinding1670 = FlaxProxyMember(
  "height",
  1,
  _flaxBinding1668,
  hasSuper: true,
);
const _flaxBinding1671 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TargetImageSize",
  [_flaxBinding1664, _flaxBinding1665],
  {
    "toString": _flaxBinding1666,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:width": FlaxInstanceMethod(
      [],
      _flaxBinding364,
      _TargetImageSize_super_get_width,
    ),
    "@super:get:height": FlaxInstanceMethod(
      [],
      _flaxBinding364,
      _TargetImageSize_super_get_height,
    ),
  },
  constructors: {"@implementation": _flaxBinding1667},
  create: _createTargetImageSize,
  matches: _isTargetImageSize,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding292,
    _flaxBinding1669,
    _flaxBinding1670,
  ]),
);
const _flaxBinding1672 = FlaxGetter("left", _flaxBinding37, _TextBox_left);
const _flaxBinding1673 = FlaxGetter("top", _flaxBinding37, _TextBox_top);
const _flaxBinding1674 = FlaxGetter("right", _flaxBinding37, _TextBox_right);
const _flaxBinding1675 = FlaxGetter("bottom", _flaxBinding37, _TextBox_bottom);
const _flaxBinding1676 = FlaxGetter(
  "direction",
  _flaxBinding443,
  _TextBox_direction,
);
const _flaxBinding1677 = FlaxGetter("start", _flaxBinding37, _TextBox_start);
const _flaxBinding1678 = FlaxGetter("end", _flaxBinding37, _TextBox_end);
const _flaxBinding1679 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding51,
  _TextBox_toRect,
);
const _flaxBinding1680 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _TextBox_toString,
);
const _flaxBinding1681 = <FlaxParameter>[
  FlaxParameter("left", _flaxBinding37, required: true),
  FlaxParameter("top", _flaxBinding37, required: true),
  FlaxParameter("right", _flaxBinding37, required: true),
  FlaxParameter("bottom", _flaxBinding37, required: true),
  FlaxParameter("direction", _flaxBinding443, required: true),
];
const _flaxBinding1682 = FlaxProxyMember(
  "toRect",
  0,
  _flaxBinding158,
  hasSuper: true,
);
const _flaxBinding1683 = FlaxProxyMember(
  "top",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1684 = FlaxProxyMember(
  "right",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1685 = FlaxProxyMember(
  "bottom",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1686 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding443,
  id: "callback:<>()->enum:flax.core/flutter#type:TextDirection",
);
const _flaxBinding1687 = FlaxProxyMember(
  "direction",
  1,
  _flaxBinding1686,
  hasSuper: true,
);
const _flaxBinding1688 = FlaxProxyMember(
  "start",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1689 = FlaxProxyMember(
  "end",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1690 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextBox",
  [
    _flaxBinding1672,
    _flaxBinding1673,
    _flaxBinding1674,
    _flaxBinding1675,
    _flaxBinding1676,
    _flaxBinding1677,
    _flaxBinding1678,
  ],
  {
    "toRect": _flaxBinding1679,
    "toString": _flaxBinding1680,
    "@super:toRect": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding51,
      _TextBox_super_toRect,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:left": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _FlaxProxyDispatch5_super_get_left,
    ),
    "@super:get:top": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _TextBox_super_get_top,
    ),
    "@super:get:right": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _TextBox_super_get_right,
    ),
    "@super:get:bottom": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _TextBox_super_get_bottom,
    ),
    "@super:get:direction": FlaxInstanceMethod(
      [],
      _flaxBinding443,
      _TextBox_super_get_direction,
    ),
    "@super:get:start": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _TextBox_super_get_start,
    ),
    "@super:get:end": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _TextBox_super_get_end,
    ),
  },
  constructors: {
    "@implementation": _flaxBinding1681,
    "@implementation:fromLTRBD": _flaxBinding1681,
  },
  create: _createTextBox,
  matches: _isTextBox,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1682,
    _flaxBinding292,
    _flaxBinding566,
    _flaxBinding1683,
    _flaxBinding1684,
    _flaxBinding1685,
    _flaxBinding1687,
    _flaxBinding1688,
    _flaxBinding1689,
  ]),
);
const _flaxBinding1691 = FlaxGetter(
  "maskValue",
  _flaxBinding22,
  _TextDecoration_maskValue,
);
const _flaxBinding1692 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextDecoration",
);
const _flaxBinding1693 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding1692, required: true),
];
const _flaxBinding1694 = FlaxInstanceMethod(
  _flaxBinding1693,
  _flaxBinding0,
  _TextDecoration_contains,
);
const _flaxBinding1695 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _TextDecoration_toString,
);
const _flaxBinding1696 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1692,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:TextDecoration]",
    _collection35Create,
    _collection35Matches,
    restore: _collection35Restore,
  ),
);
const _flaxBinding1697 = FlaxTypeRef(
  "list",
  item: _flaxBinding1692,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:TextDecoration]",
    _collection34Create,
    _collection34Matches,
  ),
  iterable: _flaxBinding1696,
);
const _flaxBinding1698 = <FlaxParameter>[
  FlaxParameter("decorations", _flaxBinding1697, required: true),
];
const _flaxBinding1699 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextDecoration",
  [_flaxBinding1691],
  {"contains": _flaxBinding1694, "toString": _flaxBinding1695},
  constructors: {"combine": _flaxBinding1698},
  create: _createTextDecoration,
  matches: _isTextDecoration,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1700 = FlaxGetter(
  "applyHeightToFirstAscent",
  _flaxBinding0,
  _TextHeightBehavior_applyHeightToFirstAscent,
);
const _flaxBinding1701 = FlaxGetter(
  "applyHeightToLastDescent",
  _flaxBinding0,
  _TextHeightBehavior_applyHeightToLastDescent,
);
const _flaxBinding1702 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TextLeadingDistribution",
);
const _flaxBinding1703 = FlaxGetter(
  "leadingDistribution",
  _flaxBinding1702,
  _TextHeightBehavior_leadingDistribution,
);
const _flaxBinding1704 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _TextHeightBehavior_toString,
);
const _flaxBinding1705 = <FlaxParameter>[
  FlaxParameter(
    "applyHeightToFirstAscent",
    _flaxBinding0,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "applyHeightToLastDescent",
    _flaxBinding0,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "leadingDistribution",
    _flaxBinding1702,
    required: false,
    defaultValue: api.TextLeadingDistribution.proportional,
  ),
];
const _flaxBinding1706 = FlaxProxyMember(
  "applyHeightToFirstAscent",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1707 = FlaxProxyMember(
  "applyHeightToLastDescent",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1708 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1702,
  id: "callback:<>()->enum:flax.core/sdk_dart_ui#type:TextLeadingDistribution",
);
const _flaxBinding1709 = FlaxProxyMember(
  "leadingDistribution",
  1,
  _flaxBinding1708,
  hasSuper: true,
);
const _flaxBinding1710 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextHeightBehavior",
  [_flaxBinding1700, _flaxBinding1701, _flaxBinding1703],
  {
    "toString": _flaxBinding1704,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:applyHeightToFirstAscent": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _TextHeightBehavior_super_get_applyHeightToFirstAscent,
    ),
    "@super:get:applyHeightToLastDescent": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _TextHeightBehavior_super_get_applyHeightToLastDescent,
    ),
    "@super:get:leadingDistribution": FlaxInstanceMethod(
      [],
      _flaxBinding1702,
      _TextHeightBehavior_super_get_leadingDistribution,
    ),
  },
  constructors: {"@implementation": _flaxBinding1705},
  create: _createTextHeightBehavior,
  matches: _isTextHeightBehavior,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding292,
    _flaxBinding1706,
    _flaxBinding1707,
    _flaxBinding1709,
  ]),
);
const _flaxBinding1711 = FlaxGetter(
  "offset",
  _flaxBinding22,
  _TextPosition_offset,
);
const _flaxBinding1712 = FlaxTypeRef(
  "enum",
  id: "flax.core/flutter#type:TextAffinity",
);
const _flaxBinding1713 = FlaxGetter(
  "affinity",
  _flaxBinding1712,
  _TextPosition_affinity,
);
const _flaxBinding1714 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _TextPosition_toString,
);
const _flaxBinding1715 = <FlaxParameter>[
  FlaxParameter("offset", _flaxBinding22, required: true),
  FlaxParameter(
    "affinity",
    _flaxBinding1712,
    required: false,
    defaultValue: api.TextAffinity.downstream,
  ),
];
const _flaxBinding1716 = FlaxProxyMember(
  "offset",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding1717 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1712,
  id: "callback:<>()->enum:flax.core/flutter#type:TextAffinity",
);
const _flaxBinding1718 = FlaxProxyMember(
  "affinity",
  1,
  _flaxBinding1717,
  hasSuper: true,
);
const _flaxBinding1719 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextPosition",
  [_flaxBinding1711, _flaxBinding1713],
  {
    "toString": _flaxBinding1714,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:get:offset": FlaxInstanceMethod(
      [],
      _flaxBinding22,
      _TextPosition_super_get_offset,
    ),
    "@super:get:affinity": FlaxInstanceMethod(
      [],
      _flaxBinding1712,
      _TextPosition_super_get_affinity,
    ),
  },
  constructors: {"@implementation": _flaxBinding1715},
  create: _createTextPosition,
  matches: _isTextPosition,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding292,
    _flaxBinding1716,
    _flaxBinding1718,
  ]),
);
const _flaxBinding1720 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _TextStyle_toString,
);
const _flaxBinding1721 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TextDecoration",
  nullable: true,
);
const _flaxBinding1722 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:TextDecorationStyle",
  nullable: true,
);
const _flaxBinding1723 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Paint",
  nullable: true,
);
const _flaxBinding1724 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1563,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Shadow]",
    _collection37Create,
    _collection37Matches,
    restore: _collection37Restore,
  ),
);
const _flaxBinding1725 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding1563,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Shadow]",
    _collection36Create,
    _collection36Matches,
  ),
  iterable: _flaxBinding1724,
);
const _flaxBinding1726 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FontFeature",
);
const _flaxBinding1727 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1726,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:FontFeature]",
    _collection39Create,
    _collection39Matches,
    restore: _collection39Restore,
  ),
);
const _flaxBinding1728 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding1726,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:FontFeature]",
    _collection38Create,
    _collection38Matches,
  ),
  iterable: _flaxBinding1727,
);
const _flaxBinding1729 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FontVariation",
);
const _flaxBinding1730 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1729,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:FontVariation]",
    _collection41Create,
    _collection41Matches,
    restore: _collection41Restore,
  ),
);
const _flaxBinding1731 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding1729,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:FontVariation]",
    _collection40Create,
    _collection40Matches,
  ),
  iterable: _flaxBinding1730,
);
const _flaxBinding1732 = <FlaxParameter>[
  FlaxParameter("color", _flaxBinding1629, required: false),
  FlaxParameter("decoration", _flaxBinding1721, required: false),
  FlaxParameter("decorationColor", _flaxBinding1629, required: false),
  FlaxParameter("decorationStyle", _flaxBinding1722, required: false),
  FlaxParameter("decorationThickness", _flaxBinding40, required: false),
  FlaxParameter("fontWeight", _flaxBinding767, required: false),
  FlaxParameter("fontStyle", _flaxBinding768, required: false),
  FlaxParameter("textBaseline", _flaxBinding740, required: false),
  FlaxParameter("fontFamily", _flaxBinding531, required: false),
  FlaxParameter("fontFamilyFallback", _flaxBinding1537, required: false),
  FlaxParameter("fontSize", _flaxBinding40, required: false),
  FlaxParameter("letterSpacing", _flaxBinding40, required: false),
  FlaxParameter("wordSpacing", _flaxBinding40, required: false),
  FlaxParameter("height", _flaxBinding40, required: false),
  FlaxParameter("leadingDistribution", _flaxBinding1625, required: false),
  FlaxParameter("locale", _flaxBinding770, required: false),
  FlaxParameter("background", _flaxBinding1723, required: false),
  FlaxParameter("foreground", _flaxBinding1723, required: false),
  FlaxParameter("shadows", _flaxBinding1725, required: false),
  FlaxParameter("fontFeatures", _flaxBinding1728, required: false),
  FlaxParameter("fontVariations", _flaxBinding1731, required: false),
];
const _flaxBinding1733 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:TextStyle",
  [],
  {
    "toString": _flaxBinding1720,
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
  },
  constructors: {"@implementation": _flaxBinding1732},
  create: _createTextStyle,
  matches: _isTextStyle,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding292]),
);
const _flaxBinding1734 = FlaxObjectBinding(
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
  parent: _flaxBinding20,
  disposeMethod: "dispose",
);
const _flaxBinding1735 = FlaxGetter(
  "length",
  _flaxBinding22,
  _UniformArray_length,
);
const _flaxBinding1736 = FlaxGetter(
  "shaderIndex",
  _flaxBinding22,
  _UniformFloatSlot_shaderIndex,
);
const _flaxBinding1737 = FlaxGetter(
  "name",
  _flaxBinding13,
  _UniformFloatSlot_name,
);
const _flaxBinding1738 = FlaxGetter(
  "index",
  _flaxBinding22,
  _UniformFloatSlot_index,
);
const _flaxBinding1739 = <FlaxParameter>[
  FlaxParameter("val", _flaxBinding37, required: true),
];
const _flaxBinding1740 = FlaxInstanceMethod(
  _flaxBinding1739,
  _flaxBinding16,
  _UniformFloatSlot_set,
);
const _flaxBinding1741 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformFloatSlot",
  [_flaxBinding1736, _flaxBinding1737, _flaxBinding1738],
  {"set": _flaxBinding1740},
  constructors: {},
  create: _createUniformFloatSlot,
  matches: _isUniformFloatSlot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1742 = <FlaxParameter>[
  FlaxParameter("m00", _flaxBinding37, required: true),
  FlaxParameter("m01", _flaxBinding37, required: true),
  FlaxParameter("m10", _flaxBinding37, required: true),
  FlaxParameter("m11", _flaxBinding37, required: true),
];
const _flaxBinding1743 = FlaxInstanceMethod(
  _flaxBinding1742,
  _flaxBinding16,
  _UniformMat2Slot_set,
);
const _flaxBinding1744 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformMat2Slot",
  [],
  {"set": _flaxBinding1743},
  constructors: {},
  create: _createUniformMat2Slot,
  matches: _isUniformMat2Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1745 = <FlaxParameter>[
  FlaxParameter("m00", _flaxBinding37, required: true),
  FlaxParameter("m01", _flaxBinding37, required: true),
  FlaxParameter("m02", _flaxBinding37, required: true),
  FlaxParameter("m10", _flaxBinding37, required: true),
  FlaxParameter("m11", _flaxBinding37, required: true),
  FlaxParameter("m12", _flaxBinding37, required: true),
  FlaxParameter("m20", _flaxBinding37, required: true),
  FlaxParameter("m21", _flaxBinding37, required: true),
  FlaxParameter("m22", _flaxBinding37, required: true),
];
const _flaxBinding1746 = FlaxInstanceMethod(
  _flaxBinding1745,
  _flaxBinding16,
  _UniformMat3Slot_set,
);
const _flaxBinding1747 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformMat3Slot",
  [],
  {"set": _flaxBinding1746},
  constructors: {},
  create: _createUniformMat3Slot,
  matches: _isUniformMat3Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1748 = <FlaxParameter>[
  FlaxParameter("m00", _flaxBinding37, required: true),
  FlaxParameter("m01", _flaxBinding37, required: true),
  FlaxParameter("m02", _flaxBinding37, required: true),
  FlaxParameter("m03", _flaxBinding37, required: true),
  FlaxParameter("m10", _flaxBinding37, required: true),
  FlaxParameter("m11", _flaxBinding37, required: true),
  FlaxParameter("m12", _flaxBinding37, required: true),
  FlaxParameter("m13", _flaxBinding37, required: true),
  FlaxParameter("m20", _flaxBinding37, required: true),
  FlaxParameter("m21", _flaxBinding37, required: true),
  FlaxParameter("m22", _flaxBinding37, required: true),
  FlaxParameter("m23", _flaxBinding37, required: true),
  FlaxParameter("m30", _flaxBinding37, required: true),
  FlaxParameter("m31", _flaxBinding37, required: true),
  FlaxParameter("m32", _flaxBinding37, required: true),
  FlaxParameter("m33", _flaxBinding37, required: true),
];
const _flaxBinding1749 = FlaxInstanceMethod(
  _flaxBinding1748,
  _flaxBinding16,
  _UniformMat4Slot_set,
);
const _flaxBinding1750 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformMat4Slot",
  [],
  {"set": _flaxBinding1749},
  constructors: {},
  create: _createUniformMat4Slot,
  matches: _isUniformMat4Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1751 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformType",
  [],
  {},
  constructors: {},
  create: _createUniformType,
  matches: _isUniformType,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1752 = FlaxInstanceMethod(
  _flaxBinding776,
  _flaxBinding16,
  _UniformVec2Slot_set,
);
const _flaxBinding1753 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformVec2Slot",
  [],
  {"set": _flaxBinding1752},
  constructors: {},
  create: _createUniformVec2Slot,
  matches: _isUniformVec2Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1754 = <FlaxParameter>[
  FlaxParameter("x", _flaxBinding37, required: true),
  FlaxParameter("y", _flaxBinding37, required: true),
  FlaxParameter("z", _flaxBinding37, required: true),
];
const _flaxBinding1755 = FlaxInstanceMethod(
  _flaxBinding1754,
  _flaxBinding16,
  _UniformVec3Slot_set,
);
const _flaxBinding1756 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformVec3Slot",
  [],
  {"set": _flaxBinding1755},
  constructors: {},
  create: _createUniformVec3Slot,
  matches: _isUniformVec3Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1757 = <FlaxParameter>[
  FlaxParameter("x", _flaxBinding37, required: true),
  FlaxParameter("y", _flaxBinding37, required: true),
  FlaxParameter("z", _flaxBinding37, required: true),
  FlaxParameter("w", _flaxBinding37, required: true),
];
const _flaxBinding1758 = FlaxInstanceMethod(
  _flaxBinding1757,
  _flaxBinding16,
  _UniformVec4Slot_set,
);
const _flaxBinding1759 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:UniformVec4Slot",
  [],
  {"set": _flaxBinding1758},
  constructors: {},
  create: _createUniformVec4Slot,
  matches: _isUniformVec4Slot,
  setters: [],
  supertypes: ["flax.core/sdk_dart_ui#type:UniformType", "dart:core::Object"],
);
const _flaxBinding1760 = FlaxGetter(
  "debugDisposed",
  _flaxBinding0,
  _Vertices_debugDisposed,
);
const _flaxBinding1761 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding16,
  _Vertices_dispose,
);
const _flaxBinding1762 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:VertexMode",
);
const _flaxBinding1763 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding70,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Offset]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding104,
);
const _flaxBinding1764 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding22,
  collection: FlaxCollectionBinding(
    "iterable:[int:]",
    _collection43Create,
    _collection43Matches,
    restore: _collection43Restore,
  ),
);
const _flaxBinding1765 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding22,
  collection: FlaxCollectionBinding(
    "list:[int:]",
    _collection42Create,
    _collection42Matches,
  ),
  iterable: _flaxBinding1764,
);
const _flaxBinding1766 = <FlaxParameter>[
  FlaxParameter("mode", _flaxBinding1762, required: true),
  FlaxParameter("positions", _flaxBinding105, required: true),
  FlaxParameter("colors", _flaxBinding120, required: false),
  FlaxParameter("textureCoordinates", _flaxBinding1763, required: false),
  FlaxParameter("indices", _flaxBinding1765, required: false),
];
const _flaxBinding1767 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:Vertices",
  [_flaxBinding1760],
  {
    "dispose": _flaxBinding1761,
    "@super:dispose": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding16,
      _FlaxProxyDispatch2_super_call_dispose,
    ),
    "@super:get:debugDisposed": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _FlaxProxyDispatch2_super_get_debugDisposed,
    ),
  },
  constructors: {"@implementation": _flaxBinding1766},
  create: _createVertices,
  matches: _isVertices,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
  proxy: FlaxProxyBinding([_flaxBinding516, _flaxBinding517]),
);
const _flaxBinding1768 = FlaxGetter(
  "minWidth",
  _flaxBinding37,
  _ViewConstraints_minWidth,
);
const _flaxBinding1769 = FlaxGetter(
  "maxWidth",
  _flaxBinding37,
  _ViewConstraints_maxWidth,
);
const _flaxBinding1770 = FlaxGetter(
  "minHeight",
  _flaxBinding37,
  _ViewConstraints_minHeight,
);
const _flaxBinding1771 = FlaxGetter(
  "maxHeight",
  _flaxBinding37,
  _ViewConstraints_maxHeight,
);
const _flaxBinding1772 = FlaxGetter(
  "isTight",
  _flaxBinding0,
  _ViewConstraints_isTight,
);
const _flaxBinding1773 = <FlaxParameter>[
  FlaxParameter("size", _flaxBinding273, required: true),
];
const _flaxBinding1774 = FlaxInstanceMethod(
  _flaxBinding1773,
  _flaxBinding0,
  _ViewConstraints_isSatisfiedBy,
);
const _flaxBinding1775 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _ViewConstraints_toString,
);
const _flaxBinding1776 = FlaxInstanceMethod(
  _flaxBinding1562,
  _flaxBinding317,
  _ViewConstraints_operatorDivide,
);
const _flaxBinding1777 = <FlaxParameter>[
  FlaxParameter("minWidth", _flaxBinding37, required: false, defaultValue: 0.0),
  FlaxParameter(
    "maxWidth",
    _flaxBinding37,
    required: false,
    defaultValue: double.infinity,
  ),
  FlaxParameter(
    "minHeight",
    _flaxBinding37,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "maxHeight",
    _flaxBinding37,
    required: false,
    defaultValue: double.infinity,
  ),
];
const _flaxBinding1778 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "size",
      _flaxBinding273,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:size:object:flax.core/flutter#type:Size)->bool:",
);
const _flaxBinding1779 = FlaxProxyMember(
  "isSatisfiedBy",
  0,
  _flaxBinding1778,
  hasSuper: true,
);
const _flaxBinding1780 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "factor",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding317,
  id: "callback:<>(p:r:factor:double:)->object:flax.core/sdk_dart_ui#type:ViewConstraints",
);
const _flaxBinding1781 = FlaxProxyMember(
  "operatorDivide",
  0,
  _flaxBinding1780,
  hasSuper: true,
);
const _flaxBinding1782 = FlaxProxyMember(
  "minWidth",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1783 = FlaxProxyMember(
  "maxWidth",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1784 = FlaxProxyMember(
  "minHeight",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1785 = FlaxProxyMember(
  "maxHeight",
  1,
  _flaxBinding280,
  hasSuper: true,
);
const _flaxBinding1786 = FlaxProxyMember(
  "isTight",
  1,
  _flaxBinding468,
  hasSuper: true,
);
const _flaxBinding1787 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ViewConstraints",
  [
    _flaxBinding1768,
    _flaxBinding1769,
    _flaxBinding1770,
    _flaxBinding1771,
    _flaxBinding1772,
  ],
  {
    "isSatisfiedBy": _flaxBinding1774,
    "toString": _flaxBinding1775,
    "operatorDivide": _flaxBinding1776,
    "@super:isSatisfiedBy": FlaxInstanceMethod(
      _flaxBinding1773,
      _flaxBinding0,
      _ViewConstraints_super_isSatisfiedBy,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding12,
      _flaxBinding13,
      _FlaxProxyDispatch0_super_call_toString,
    ),
    "@super:operatorDivide": FlaxInstanceMethod(
      _flaxBinding1562,
      _flaxBinding317,
      _ViewConstraints_super_operatorDivide,
    ),
    "@super:get:minWidth": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _ViewConstraints_super_get_minWidth,
    ),
    "@super:get:maxWidth": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _ViewConstraints_super_get_maxWidth,
    ),
    "@super:get:minHeight": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _ViewConstraints_super_get_minHeight,
    ),
    "@super:get:maxHeight": FlaxInstanceMethod(
      [],
      _flaxBinding37,
      _ViewConstraints_super_get_maxHeight,
    ),
    "@super:get:isTight": FlaxInstanceMethod(
      [],
      _flaxBinding0,
      _ViewConstraints_super_get_isTight,
    ),
  },
  constructors: {"@implementation": _flaxBinding1777},
  create: _createViewConstraints,
  matches: _isViewConstraints,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding1779,
    _flaxBinding292,
    _flaxBinding1781,
    _flaxBinding1782,
    _flaxBinding1783,
    _flaxBinding1784,
    _flaxBinding1785,
    _flaxBinding1786,
  ]),
);
const _flaxBinding1788 = FlaxGetter(
  "viewId",
  _flaxBinding22,
  _ViewFocusEvent_viewId,
);
const _flaxBinding1789 = FlaxGetter(
  "state",
  _flaxBinding1070,
  _ViewFocusEvent_state,
);
const _flaxBinding1790 = FlaxGetter(
  "direction",
  _flaxBinding1069,
  _ViewFocusEvent_direction,
);
const _flaxBinding1791 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _ViewFocusEvent_toString,
);
const _flaxBinding1792 = <FlaxParameter>[
  FlaxParameter("viewId", _flaxBinding22, required: true),
  FlaxParameter("state", _flaxBinding1070, required: true),
  FlaxParameter("direction", _flaxBinding1069, required: true),
];
const _flaxBinding1793 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ViewFocusEvent",
  [_flaxBinding1788, _flaxBinding1789, _flaxBinding1790],
  {"toString": _flaxBinding1791},
  constructors: {"": _flaxBinding1792},
  create: _createViewFocusEvent,
  matches: _isViewFocusEvent,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding1794 = FlaxGetter("left", _flaxBinding37, _ViewPadding_left);
const _flaxBinding1795 = FlaxGetter("top", _flaxBinding37, _ViewPadding_top);
const _flaxBinding1796 = FlaxGetter(
  "right",
  _flaxBinding37,
  _ViewPadding_right,
);
const _flaxBinding1797 = FlaxGetter(
  "bottom",
  _flaxBinding37,
  _ViewPadding_bottom,
);
const _flaxBinding1798 = FlaxInstanceMethod(
  _flaxBinding12,
  _flaxBinding13,
  _ViewPadding_toString,
);
const _flaxBinding1799 = FlaxProxyMember("left", 1, _flaxBinding280);
const _flaxBinding1800 = FlaxProxyMember("top", 1, _flaxBinding280);
const _flaxBinding1801 = FlaxProxyMember("right", 1, _flaxBinding280);
const _flaxBinding1802 = FlaxProxyMember("bottom", 1, _flaxBinding280);
const _flaxBinding1803 = FlaxObjectBinding(
  "flax.core/sdk_dart_ui#type:ViewPadding",
  [_flaxBinding1794, _flaxBinding1795, _flaxBinding1796, _flaxBinding1797],
  {"toString": _flaxBinding1798},
  constructors: {"@implementation": _flaxBinding12},
  create: _createViewPadding,
  matches: _isViewPadding,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding278,
    _flaxBinding1799,
    _flaxBinding1800,
    _flaxBinding1801,
    _flaxBinding1802,
  ]),
);
const _flaxBinding1804 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ChannelBuffers",
);
const _flaxBinding1805 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SingletonFlutterWindow",
);
const _flaxBinding1806 = FlaxTypeRef("Uint8List");
const _flaxBinding1807 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "result",
      _flaxBinding90,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<api.Image>,
  id: "callback:<>(p:r:result:object:flax.core/sdk_dart_ui#type:Image)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.Image>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.Image>,
);
const _flaxBinding1808 = FlaxTypeRef("callback", callback: _flaxBinding1807);
const _flaxBinding1809 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:TargetImageSize",
);
const _flaxBinding1810 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "intrinsicWidth",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "intrinsicHeight",
      _flaxBinding22,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding1809,
  FlaxCallbackAdapters.wrap2<int, int, api.TargetImageSize>,
  id: "callback:<>(p:r:intrinsicWidth:int:,p:r:intrinsicHeight:int:)->object:flax.core/sdk_dart_ui#type:TargetImageSize",
  invoke: FlaxCallbackAdapters.invoke2<int, int, api.TargetImageSize>,
  matches: FlaxCallbackAdapters.matches2<int, int, api.TargetImageSize>,
);
const _flaxBinding1811 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1810,
);
const _flaxBinding1812 = FlaxTypeRef("num", nullable: true);
const _flaxBinding1813 = FlaxTypeRef(
  "futureOr",
  item: _flaxBinding896,
  future: FlaxFutureBinding("any?:", _future5Adapt),
);
const _flaxBinding1814 = FlaxCallbackBinding(
  [],
  _flaxBinding1813,
  _callback6,
  id: "callback:<>()->futureOr:[any?:]",
  invoke: _callback6Invoke,
  matches: _callback6Matches,
);
const _flaxBinding1815 = FlaxTypeRef("callback", callback: _flaxBinding1814);
const _flaxBinding1816 = FlaxTypeRef(
  "future",
  item: _flaxBinding896,
  future: FlaxFutureBinding("any?:", _future5Adapt),
);
const _flaxBinding1817 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FontVariation",
  nullable: true,
);
const _flaxBinding1818 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:FragmentProgram",
);
const _flaxBinding1819 = FlaxTypeRef(
  "future",
  item: _flaxBinding1818,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:FragmentProgram",
    _future6Adapt,
  ),
);
const _flaxBinding1820 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "image",
      _flaxBinding90,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<api.Image>,
  id: "callback:<>(p:r:image:object:flax.core/sdk_dart_ui#type:Image)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.Image>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.Image>,
);
const _flaxBinding1821 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1820,
);
const _flaxBinding1822 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:ImageDescriptor",
);
const _flaxBinding1823 = FlaxTypeRef(
  "future",
  item: _flaxBinding1822,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:ImageDescriptor",
    _future7Adapt,
  ),
);
const _flaxBinding1824 = FlaxTypeRef(
  "future",
  item: _flaxBinding499,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dart_ui#type:ImmutableBuffer",
    _future8Adapt,
  ),
);
const _flaxBinding1825 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:PathOperation",
);
const _flaxBinding1826 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "picture",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding16,
  FlaxCallbackAdapters.wrapVoid1<api.Picture>,
  id: "callback:<>(p:r:picture:object:flax.core/sdk_dart_ui#type:Picture)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.Picture>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.Picture>,
);
const _flaxBinding1827 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1826,
);
const _flaxBinding1828 = FlaxTypeRef("function");
const _flaxBinding1829 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:CallbackHandle",
  nullable: true,
);
const _flaxBinding1830 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RRect",
  nullable: true,
);
const _flaxBinding1831 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RSuperellipse",
  nullable: true,
);
const _flaxBinding1832 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:RootIsolateToken",
  nullable: true,
);
const _flaxBinding1833 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1437,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:SemanticsAction]",
    _collection45Create,
    _collection45Matches,
    restore: _collection45Restore,
  ),
);
const _flaxBinding1834 = FlaxTypeRef(
  "list",
  item: _flaxBinding1437,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:SemanticsAction]",
    _collection44Create,
    _collection44Matches,
  ),
  iterable: _flaxBinding1833,
);
const _flaxBinding1835 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlag",
  nullable: true,
);
const _flaxBinding1836 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SemanticsFlag",
);
const _flaxBinding1837 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1836,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:SemanticsFlag]",
    _collection47Create,
    _collection47Matches,
    restore: _collection47Restore,
  ),
);
const _flaxBinding1838 = FlaxTypeRef(
  "list",
  item: _flaxBinding1836,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:SemanticsFlag]",
    _collection46Create,
    _collection46Matches,
  ),
  iterable: _flaxBinding1837,
);
const _flaxBinding1839 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Shadow",
  nullable: true,
);
const _flaxBinding1840 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:SystemColorPalette",
);
