globalThis.__flaxModules.define({"specifier":"@flax/flutter/material","owner":"@flax/material-ui:dist/generated/libraries/material/index.js","version":"0.0.0","artifact":"3272e29fc1a53b9a5589c02b3423da87c2377fbe6704bcd663182bc31f82c1e9","asset":"assets/flax_modules/_flax_flutter_material-4c07c7c9bace.js","package":"@flax/material-ui","source":"dist/generated/libraries/material/index.js","dependencies":{"@flax/core/bindings":"0.0.0","@flax/dart/core":"0.0.0","@flax/dart/ui":"0.0.0","@flax/flutter/foundation":"0.0.0","@flax/flutter/gestures":"0.0.0","@flax/flutter/services":"0.0.0","@flax/flutter/widgets":"0.0.0"},"bindings":[{"moduleId":"flax.material/material","uiProtocol":24,"requiredCapabilities":["generic-member-views","instance-checks","native-navigation-objects","native-widget-proxies"],"types":["flax.material/material#type:AlertDialog","flax.material/material#type:AppBar","flax.material/material#type:Brightness","flax.material/material#type:ButtonStyle","flax.material/material#type:Card","flax.material/material#type:Checkbox","flax.material/material#type:CircularProgressIndicator","flax.material/material#type:ColorScheme","flax.material/material#type:Divider","flax.material/material#type:Drawer","flax.material/material#type:ElevatedButton","flax.material/material#type:FilledButton","flax.material/material#type:FloatingActionButton","flax.material/material#type:IconButton","flax.material/material#type:InkWell","flax.material/material#type:InputDecoration","flax.material/material#type:LinearProgressIndicator","flax.material/material#type:ListTile","flax.material/material#type:ListTileStyle","flax.material/material#type:Material","flax.material/material#type:MaterialApp","flax.material/material#type:MaterialPage","flax.material/material#type:MaterialPageRoute","flax.material/material#type:MaterialType","flax.material/material#type:NavigationBar","flax.material/material#type:NavigationDestination","flax.material/material#type:NavigationDestinationLabelBehavior","flax.material/material#type:OutlinedButton","flax.material/material#type:RefreshIndicator","flax.material/material#type:Scaffold","flax.material/material#type:Switch","flax.material/material#type:TextButton","flax.material/material#type:TextField","flax.material/material#type:TextInputAction","flax.material/material#type:TextTheme","flax.material/material#type:Theme","flax.material/material#type:ThemeData","flax.material/material#type:ThemeMode","flax.material/material#type:VerticalDivider","flax.material/material#type:VisualDensity"],"functions":["flax.material/material#function:showDialog","flax.material/material#read:Checkbox.width","flax.material/material#read:CircularProgressIndicator.defaultAnimationDuration","flax.material/material#read:CircularProgressIndicator.strokeAlignCenter","flax.material/material#read:CircularProgressIndicator.strokeAlignInside","flax.material/material#read:CircularProgressIndicator.strokeAlignOutside","flax.material/material#read:LinearProgressIndicator.defaultAnimationDuration","flax.material/material#read:Material.defaultSplashRadius","flax.material/material#read:TextField.materialMisspelledTextStyle","flax.material/material#read:TextField.noMaxLength","flax.material/material#read:VisualDensity.adaptivePlatformDensity","flax.material/material#read:VisualDensity.comfortable","flax.material/material#read:VisualDensity.compact","flax.material/material#read:VisualDensity.maximumDensity","flax.material/material#read:VisualDensity.minimumDensity","flax.material/material#read:VisualDensity.standard","flax.material/material#read:kTabScrollDuration"]}],"subpaths":["@flax/flutter/material/index"]}, function(module, exports, require) {
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/index.js
var index_exports = {};
__export(index_exports, {
  AlertDialog: () => AlertDialog,
  AppBar: () => AppBar,
  Brightness: () => Brightness,
  ButtonStyle: () => ButtonStyle,
  Card: () => Card,
  Checkbox: () => Checkbox,
  CircularProgressIndicator: () => CircularProgressIndicator,
  ColorScheme: () => ColorScheme,
  Divider: () => Divider,
  Drawer: () => Drawer,
  ElevatedButton: () => ElevatedButton,
  FilledButton: () => FilledButton,
  FloatingActionButton: () => FloatingActionButton,
  IconButton: () => IconButton,
  InkWell: () => InkWell,
  InputDecoration: () => InputDecoration,
  LinearProgressIndicator: () => LinearProgressIndicator,
  ListTile: () => ListTile,
  ListTileStyle: () => ListTileStyle,
  Material: () => Material,
  MaterialApp: () => MaterialApp,
  MaterialPage: () => MaterialPage,
  MaterialPageRoute: () => MaterialPageRoute,
  MaterialType: () => MaterialType,
  NavigationBar: () => NavigationBar,
  NavigationDestination: () => NavigationDestination,
  NavigationDestinationLabelBehavior: () => NavigationDestinationLabelBehavior,
  OutlinedButton: () => OutlinedButton,
  RefreshIndicator: () => RefreshIndicator,
  Scaffold: () => Scaffold,
  Switch: () => Switch,
  TextButton: () => TextButton,
  TextField: () => TextField,
  TextInputAction: () => TextInputAction,
  TextTheme: () => TextTheme,
  Theme: () => Theme,
  ThemeData: () => ThemeData,
  ThemeMode: () => ThemeMode,
  VerticalDivider: () => VerticalDivider,
  VisualDensity: () => VisualDensity,
  getKTabScrollDuration: () => getKTabScrollDuration,
  kToolbarHeight: () => kToolbarHeight,
  showDialog: () => _flaxGeneric_showDialog
});
module.exports = __toCommonJS(index_exports);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ButtonStyle.js
var import_bindings4 = require("@flax/core/bindings");
var import_flutter_WidgetStateProperty = require("@flax/flutter/widgets");
var import_flutter_TextStyle = require("@flax/flutter/widgets");
var import_flutter_Color = require("@flax/flutter/services");
var import_flutter_EdgeInsetsGeometry = require("@flax/flutter/widgets");
var import_flutter_Size = require("@flax/flutter/services");
var import_flutter_BorderSide = require("@flax/flutter/widgets");
var import_flutter_OutlinedBorder = require("@flax/flutter/widgets");
var import_flutter_MouseCursor = require("@flax/flutter/services");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_VisualDensity.js
var import_bindings2 = require("@flax/core/bindings");
var import_flutter_TargetPlatform = require("@flax/flutter/foundation");
var import_flutter_BoxConstraints = require("@flax/flutter/widgets");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material.__module.js
var import_bindings = require("@flax/core/bindings");
var materialBindingModule = (0, import_bindings.installBindingModule)("flax.material/material", 24, Object.freeze(["dart-type-tokens", "engine-type-handles", "generic-call-types", "generic-member-views", "instance-checks", "lazy-js-iterables", "native-navigation-objects", "native-widget-proxies"]));
var { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = materialBindingModule;

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_VisualDensity.js
var import_bindings3 = require("@flax/core/bindings");
var _flaxMemberParameters0 = [{ "name": "horizontal", "required": false, "positional": false }, { "name": "vertical", "required": false, "positional": false }];
var _flaxMemberParameters1 = [{ "name": "constraints", "required": true, "positional": true }];
var _flaxMemberParameters2 = [];
defineObject("flax.material/material#type:VisualDensity", ["horizontal", "vertical", "baseSizeAdjustment"], [], (0, import_bindings2.bindingMethods)("flax.material/material#type:VisualDensity", "object", { "copyWith": _flaxMemberParameters0, "effectiveConstraints": _flaxMemberParameters1, "toStringShort": _flaxMemberParameters2 }, {}), []);
function _VisualDensityFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:VisualDensity", "", [{ "name": "horizontal", "required": false, "positional": false }, { "name": "vertical", "required": false, "positional": false }], [], options);
}
/* @__PURE__ */ (function(_VisualDensityFactory2) {
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
Object.defineProperty(_VisualDensityFactory, "minimumDensity", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.minimumDensity", []) });
/* @__PURE__ */ (function(_VisualDensityFactory2) {
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
Object.defineProperty(_VisualDensityFactory, "maximumDensity", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.maximumDensity", []) });
/* @__PURE__ */ (function(_VisualDensityFactory2) {
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
Object.defineProperty(_VisualDensityFactory, "standard", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.standard", []) });
/* @__PURE__ */ (function(_VisualDensityFactory2) {
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
Object.defineProperty(_VisualDensityFactory, "comfortable", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.comfortable", []) });
/* @__PURE__ */ (function(_VisualDensityFactory2) {
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
Object.defineProperty(_VisualDensityFactory, "compact", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.compact", []) });
/* @__PURE__ */ (function(_VisualDensityFactory2) {
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
Object.defineProperty(_VisualDensityFactory, "adaptivePlatformDensity", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.adaptivePlatformDensity", []) });
(function(_VisualDensityFactory2) {
  function defaultDensityForPlatform(platform) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:VisualDensity.defaultDensityForPlatform", [platform]);
    return _flaxResult;
  }
  _VisualDensityFactory2.defaultDensityForPlatform = defaultDensityForPlatform;
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
(function(_VisualDensityFactory2) {
  function lerp(a, b, t) {
    if (arguments.length > 3)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:VisualDensity.lerp", [a, b, t]);
    return _flaxResult;
  }
  _VisualDensityFactory2.lerp = lerp;
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
var VisualDensity = _flaxBindInstanceType(_VisualDensityFactory, "flax.material/material#type:VisualDensity", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ButtonStyle.js
var import_flutter_Duration = require("@flax/dart/core");
var import_flutter_AlignmentGeometry = require("@flax/flutter/widgets");
var import_flutter_BuildContext = require("@flax/flutter/widgets");
var import_flutter_WidgetState = require("@flax/flutter/widgets");
var import_bindings5 = require("@flax/core/bindings");
var _flaxMemberParameters02 = [{ "name": "alignment", "required": false, "positional": false }, { "name": "animationDuration", "required": false, "positional": false }, { "name": "backgroundBuilder", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }, { "name": "fixedSize", "required": false, "positional": false }, { "name": "foregroundBuilder", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "iconColor", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "maximumSize", "required": false, "positional": false }, { "name": "minimumSize", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "side", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "textStyle", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }];
var _flaxMemberParameters12 = [{ "name": "style", "required": true, "positional": true }];
var _flaxMemberParameters22 = [];
defineObject("flax.material/material#type:ButtonStyle", ["textStyle", "backgroundColor", "foregroundColor", "overlayColor", "shadowColor", "surfaceTintColor", "elevation", "padding", "minimumSize", "fixedSize", "maximumSize", "iconColor", "iconSize", "side", "shape", "mouseCursor", "visualDensity", "animationDuration", "enableFeedback", "alignment", "backgroundBuilder", "foregroundBuilder"], [], (0, import_bindings4.bindingMethods)("flax.material/material#type:ButtonStyle", "object", { "copyWith": _flaxMemberParameters02, "merge": _flaxMemberParameters12, "toStringShort": _flaxMemberParameters22 }, {}), []);
function _ButtonStyleFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:ButtonStyle", "", [{ "name": "textStyle", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "minimumSize", "required": false, "positional": false }, { "name": "fixedSize", "required": false, "positional": false }, { "name": "maximumSize", "required": false, "positional": false }, { "name": "iconColor", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "side", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }, { "name": "animationDuration", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "backgroundBuilder", "required": false, "positional": false }, { "name": "foregroundBuilder", "required": false, "positional": false }], [], options);
}
(function(_ButtonStyleFactory2) {
  function lerp(a, b, t) {
    if (arguments.length > 3)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:ButtonStyle.lerp", [a, b, t]);
    return _flaxResult;
  }
  _ButtonStyleFactory2.lerp = lerp;
})(_ButtonStyleFactory || (_ButtonStyleFactory = {}));
var ButtonStyle = _flaxBindInstanceType(_ButtonStyleFactory, "flax.material/material#type:ButtonStyle", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ColorScheme.js
var import_bindings8 = require("@flax/core/bindings");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Brightness.js
var import_bindings6 = require("@flax/core/bindings");
var import_bindings7 = require("@flax/core/bindings");
defineEnum("flax.material/material#type:Brightness", ["dark", "light"]);
var _flaxEnum_Brightness_api = {
  dark: enumValue("flax.material/material#type:Brightness", "dark"),
  light: enumValue("flax.material/material#type:Brightness", "light"),
  values: Object.freeze([enumValue("flax.material/material#type:Brightness", "dark"), enumValue("flax.material/material#type:Brightness", "light")])
};
var Brightness = Object.freeze(_flaxBindInstanceType(_flaxEnum_Brightness_api, "flax.material/material#type:Brightness", []));

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ColorScheme.js
var import_flutter_Color2 = require("@flax/flutter/services");
var import_flutter_BuildContext2 = require("@flax/flutter/widgets");
var import_bindings9 = require("@flax/core/bindings");
var _flaxMemberParameters03 = [{ "name": "background", "required": false, "positional": false }, { "name": "brightness", "required": false, "positional": false }, { "name": "error", "required": false, "positional": false }, { "name": "errorContainer", "required": false, "positional": false }, { "name": "inversePrimary", "required": false, "positional": false }, { "name": "inverseSurface", "required": false, "positional": false }, { "name": "onBackground", "required": false, "positional": false }, { "name": "onError", "required": false, "positional": false }, { "name": "onErrorContainer", "required": false, "positional": false }, { "name": "onInverseSurface", "required": false, "positional": false }, { "name": "onPrimary", "required": false, "positional": false }, { "name": "onPrimaryContainer", "required": false, "positional": false }, { "name": "onPrimaryFixed", "required": false, "positional": false }, { "name": "onPrimaryFixedVariant", "required": false, "positional": false }, { "name": "onSecondary", "required": false, "positional": false }, { "name": "onSecondaryContainer", "required": false, "positional": false }, { "name": "onSecondaryFixed", "required": false, "positional": false }, { "name": "onSecondaryFixedVariant", "required": false, "positional": false }, { "name": "onSurface", "required": false, "positional": false }, { "name": "onSurfaceVariant", "required": false, "positional": false }, { "name": "onTertiary", "required": false, "positional": false }, { "name": "onTertiaryContainer", "required": false, "positional": false }, { "name": "onTertiaryFixed", "required": false, "positional": false }, { "name": "onTertiaryFixedVariant", "required": false, "positional": false }, { "name": "outline", "required": false, "positional": false }, { "name": "outlineVariant", "required": false, "positional": false }, { "name": "primary", "required": false, "positional": false }, { "name": "primaryContainer", "required": false, "positional": false }, { "name": "primaryFixed", "required": false, "positional": false }, { "name": "primaryFixedDim", "required": false, "positional": false }, { "name": "scrim", "required": false, "positional": false }, { "name": "secondary", "required": false, "positional": false }, { "name": "secondaryContainer", "required": false, "positional": false }, { "name": "secondaryFixed", "required": false, "positional": false }, { "name": "secondaryFixedDim", "required": false, "positional": false }, { "name": "shadow", "required": false, "positional": false }, { "name": "surface", "required": false, "positional": false }, { "name": "surfaceBright", "required": false, "positional": false }, { "name": "surfaceContainer", "required": false, "positional": false }, { "name": "surfaceContainerHigh", "required": false, "positional": false }, { "name": "surfaceContainerHighest", "required": false, "positional": false }, { "name": "surfaceContainerLow", "required": false, "positional": false }, { "name": "surfaceContainerLowest", "required": false, "positional": false }, { "name": "surfaceDim", "required": false, "positional": false }, { "name": "surfaceTint", "required": false, "positional": false }, { "name": "surfaceVariant", "required": false, "positional": false }, { "name": "tertiary", "required": false, "positional": false }, { "name": "tertiaryContainer", "required": false, "positional": false }, { "name": "tertiaryFixed", "required": false, "positional": false }, { "name": "tertiaryFixedDim", "required": false, "positional": false }];
var _flaxMemberParameters13 = [];
defineObject("flax.material/material#type:ColorScheme", ["brightness", "primary", "onPrimary", "primaryContainer", "onPrimaryContainer", "primaryFixed", "primaryFixedDim", "onPrimaryFixed", "onPrimaryFixedVariant", "secondary", "onSecondary", "secondaryContainer", "onSecondaryContainer", "secondaryFixed", "secondaryFixedDim", "onSecondaryFixed", "onSecondaryFixedVariant", "tertiary", "onTertiary", "tertiaryContainer", "onTertiaryContainer", "tertiaryFixed", "tertiaryFixedDim", "onTertiaryFixed", "onTertiaryFixedVariant", "error", "onError", "errorContainer", "onErrorContainer", "surface", "onSurface", "surfaceVariant", "surfaceDim", "surfaceBright", "surfaceContainerLowest", "surfaceContainerLow", "surfaceContainer", "surfaceContainerHigh", "surfaceContainerHighest", "onSurfaceVariant", "outline", "outlineVariant", "shadow", "scrim", "inverseSurface", "onInverseSurface", "inversePrimary", "surfaceTint", "background", "onBackground"], [], (0, import_bindings8.bindingMethods)("flax.material/material#type:ColorScheme", "object", { "copyWith": _flaxMemberParameters03, "toStringShort": _flaxMemberParameters13 }, {}), []);
function _ColorSchemeFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:ColorScheme", "", [{ "name": "brightness", "required": true, "positional": false }, { "name": "primary", "required": true, "positional": false }, { "name": "onPrimary", "required": true, "positional": false }, { "name": "primaryContainer", "required": false, "positional": false }, { "name": "onPrimaryContainer", "required": false, "positional": false }, { "name": "primaryFixed", "required": false, "positional": false }, { "name": "primaryFixedDim", "required": false, "positional": false }, { "name": "onPrimaryFixed", "required": false, "positional": false }, { "name": "onPrimaryFixedVariant", "required": false, "positional": false }, { "name": "secondary", "required": true, "positional": false }, { "name": "onSecondary", "required": true, "positional": false }, { "name": "secondaryContainer", "required": false, "positional": false }, { "name": "onSecondaryContainer", "required": false, "positional": false }, { "name": "secondaryFixed", "required": false, "positional": false }, { "name": "secondaryFixedDim", "required": false, "positional": false }, { "name": "onSecondaryFixed", "required": false, "positional": false }, { "name": "onSecondaryFixedVariant", "required": false, "positional": false }, { "name": "tertiary", "required": false, "positional": false }, { "name": "onTertiary", "required": false, "positional": false }, { "name": "tertiaryContainer", "required": false, "positional": false }, { "name": "onTertiaryContainer", "required": false, "positional": false }, { "name": "tertiaryFixed", "required": false, "positional": false }, { "name": "tertiaryFixedDim", "required": false, "positional": false }, { "name": "onTertiaryFixed", "required": false, "positional": false }, { "name": "onTertiaryFixedVariant", "required": false, "positional": false }, { "name": "error", "required": true, "positional": false }, { "name": "onError", "required": true, "positional": false }, { "name": "errorContainer", "required": false, "positional": false }, { "name": "onErrorContainer", "required": false, "positional": false }, { "name": "surface", "required": true, "positional": false }, { "name": "onSurface", "required": true, "positional": false }, { "name": "surfaceDim", "required": false, "positional": false }, { "name": "surfaceBright", "required": false, "positional": false }, { "name": "surfaceContainerLowest", "required": false, "positional": false }, { "name": "surfaceContainerLow", "required": false, "positional": false }, { "name": "surfaceContainer", "required": false, "positional": false }, { "name": "surfaceContainerHigh", "required": false, "positional": false }, { "name": "surfaceContainerHighest", "required": false, "positional": false }, { "name": "onSurfaceVariant", "required": false, "positional": false }, { "name": "outline", "required": false, "positional": false }, { "name": "outlineVariant", "required": false, "positional": false }, { "name": "shadow", "required": false, "positional": false }, { "name": "scrim", "required": false, "positional": false }, { "name": "inverseSurface", "required": false, "positional": false }, { "name": "onInverseSurface", "required": false, "positional": false }, { "name": "inversePrimary", "required": false, "positional": false }, { "name": "surfaceTint", "required": false, "positional": false }, { "name": "background", "required": false, "positional": false }, { "name": "onBackground", "required": false, "positional": false }, { "name": "surfaceVariant", "required": false, "positional": false }], [], options);
}
(function(_ColorSchemeFactory2) {
  function fromSeed(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ColorScheme", "fromSeed", [{ "name": "seedColor", "required": true, "positional": false }, { "name": "brightness", "required": false, "positional": false }, { "name": "contrastLevel", "required": false, "positional": false }, { "name": "primary", "required": false, "positional": false }, { "name": "onPrimary", "required": false, "positional": false }, { "name": "primaryContainer", "required": false, "positional": false }, { "name": "onPrimaryContainer", "required": false, "positional": false }, { "name": "primaryFixed", "required": false, "positional": false }, { "name": "primaryFixedDim", "required": false, "positional": false }, { "name": "onPrimaryFixed", "required": false, "positional": false }, { "name": "onPrimaryFixedVariant", "required": false, "positional": false }, { "name": "secondary", "required": false, "positional": false }, { "name": "onSecondary", "required": false, "positional": false }, { "name": "secondaryContainer", "required": false, "positional": false }, { "name": "onSecondaryContainer", "required": false, "positional": false }, { "name": "secondaryFixed", "required": false, "positional": false }, { "name": "secondaryFixedDim", "required": false, "positional": false }, { "name": "onSecondaryFixed", "required": false, "positional": false }, { "name": "onSecondaryFixedVariant", "required": false, "positional": false }, { "name": "tertiary", "required": false, "positional": false }, { "name": "onTertiary", "required": false, "positional": false }, { "name": "tertiaryContainer", "required": false, "positional": false }, { "name": "onTertiaryContainer", "required": false, "positional": false }, { "name": "tertiaryFixed", "required": false, "positional": false }, { "name": "tertiaryFixedDim", "required": false, "positional": false }, { "name": "onTertiaryFixed", "required": false, "positional": false }, { "name": "onTertiaryFixedVariant", "required": false, "positional": false }, { "name": "error", "required": false, "positional": false }, { "name": "onError", "required": false, "positional": false }, { "name": "errorContainer", "required": false, "positional": false }, { "name": "onErrorContainer", "required": false, "positional": false }, { "name": "outline", "required": false, "positional": false }, { "name": "outlineVariant", "required": false, "positional": false }, { "name": "surface", "required": false, "positional": false }, { "name": "onSurface", "required": false, "positional": false }, { "name": "surfaceDim", "required": false, "positional": false }, { "name": "surfaceBright", "required": false, "positional": false }, { "name": "surfaceContainerLowest", "required": false, "positional": false }, { "name": "surfaceContainerLow", "required": false, "positional": false }, { "name": "surfaceContainer", "required": false, "positional": false }, { "name": "surfaceContainerHigh", "required": false, "positional": false }, { "name": "surfaceContainerHighest", "required": false, "positional": false }, { "name": "onSurfaceVariant", "required": false, "positional": false }, { "name": "inverseSurface", "required": false, "positional": false }, { "name": "onInverseSurface", "required": false, "positional": false }, { "name": "inversePrimary", "required": false, "positional": false }, { "name": "shadow", "required": false, "positional": false }, { "name": "scrim", "required": false, "positional": false }, { "name": "surfaceTint", "required": false, "positional": false }, { "name": "background", "required": false, "positional": false }, { "name": "onBackground", "required": false, "positional": false }, { "name": "surfaceVariant", "required": false, "positional": false }], [], options);
  }
  _ColorSchemeFactory2.fromSeed = fromSeed;
})(_ColorSchemeFactory || (_ColorSchemeFactory = {}));
(function(_ColorSchemeFactory2) {
  function light(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ColorScheme", "light", [{ "name": "brightness", "required": false, "positional": false }, { "name": "primary", "required": false, "positional": false }, { "name": "onPrimary", "required": false, "positional": false }, { "name": "primaryContainer", "required": false, "positional": false }, { "name": "onPrimaryContainer", "required": false, "positional": false }, { "name": "primaryFixed", "required": false, "positional": false }, { "name": "primaryFixedDim", "required": false, "positional": false }, { "name": "onPrimaryFixed", "required": false, "positional": false }, { "name": "onPrimaryFixedVariant", "required": false, "positional": false }, { "name": "secondary", "required": false, "positional": false }, { "name": "onSecondary", "required": false, "positional": false }, { "name": "secondaryContainer", "required": false, "positional": false }, { "name": "onSecondaryContainer", "required": false, "positional": false }, { "name": "secondaryFixed", "required": false, "positional": false }, { "name": "secondaryFixedDim", "required": false, "positional": false }, { "name": "onSecondaryFixed", "required": false, "positional": false }, { "name": "onSecondaryFixedVariant", "required": false, "positional": false }, { "name": "tertiary", "required": false, "positional": false }, { "name": "onTertiary", "required": false, "positional": false }, { "name": "tertiaryContainer", "required": false, "positional": false }, { "name": "onTertiaryContainer", "required": false, "positional": false }, { "name": "tertiaryFixed", "required": false, "positional": false }, { "name": "tertiaryFixedDim", "required": false, "positional": false }, { "name": "onTertiaryFixed", "required": false, "positional": false }, { "name": "onTertiaryFixedVariant", "required": false, "positional": false }, { "name": "error", "required": false, "positional": false }, { "name": "onError", "required": false, "positional": false }, { "name": "errorContainer", "required": false, "positional": false }, { "name": "onErrorContainer", "required": false, "positional": false }, { "name": "surface", "required": false, "positional": false }, { "name": "onSurface", "required": false, "positional": false }, { "name": "surfaceDim", "required": false, "positional": false }, { "name": "surfaceBright", "required": false, "positional": false }, { "name": "surfaceContainerLowest", "required": false, "positional": false }, { "name": "surfaceContainerLow", "required": false, "positional": false }, { "name": "surfaceContainer", "required": false, "positional": false }, { "name": "surfaceContainerHigh", "required": false, "positional": false }, { "name": "surfaceContainerHighest", "required": false, "positional": false }, { "name": "onSurfaceVariant", "required": false, "positional": false }, { "name": "outline", "required": false, "positional": false }, { "name": "outlineVariant", "required": false, "positional": false }, { "name": "shadow", "required": false, "positional": false }, { "name": "scrim", "required": false, "positional": false }, { "name": "inverseSurface", "required": false, "positional": false }, { "name": "onInverseSurface", "required": false, "positional": false }, { "name": "inversePrimary", "required": false, "positional": false }, { "name": "surfaceTint", "required": false, "positional": false }, { "name": "background", "required": false, "positional": false }, { "name": "onBackground", "required": false, "positional": false }, { "name": "surfaceVariant", "required": false, "positional": false }], [], options);
  }
  _ColorSchemeFactory2.light = light;
})(_ColorSchemeFactory || (_ColorSchemeFactory = {}));
(function(_ColorSchemeFactory2) {
  function dark(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ColorScheme", "dark", [{ "name": "brightness", "required": false, "positional": false }, { "name": "primary", "required": false, "positional": false }, { "name": "onPrimary", "required": false, "positional": false }, { "name": "primaryContainer", "required": false, "positional": false }, { "name": "onPrimaryContainer", "required": false, "positional": false }, { "name": "primaryFixed", "required": false, "positional": false }, { "name": "primaryFixedDim", "required": false, "positional": false }, { "name": "onPrimaryFixed", "required": false, "positional": false }, { "name": "onPrimaryFixedVariant", "required": false, "positional": false }, { "name": "secondary", "required": false, "positional": false }, { "name": "onSecondary", "required": false, "positional": false }, { "name": "secondaryContainer", "required": false, "positional": false }, { "name": "onSecondaryContainer", "required": false, "positional": false }, { "name": "secondaryFixed", "required": false, "positional": false }, { "name": "secondaryFixedDim", "required": false, "positional": false }, { "name": "onSecondaryFixed", "required": false, "positional": false }, { "name": "onSecondaryFixedVariant", "required": false, "positional": false }, { "name": "tertiary", "required": false, "positional": false }, { "name": "onTertiary", "required": false, "positional": false }, { "name": "tertiaryContainer", "required": false, "positional": false }, { "name": "onTertiaryContainer", "required": false, "positional": false }, { "name": "tertiaryFixed", "required": false, "positional": false }, { "name": "tertiaryFixedDim", "required": false, "positional": false }, { "name": "onTertiaryFixed", "required": false, "positional": false }, { "name": "onTertiaryFixedVariant", "required": false, "positional": false }, { "name": "error", "required": false, "positional": false }, { "name": "onError", "required": false, "positional": false }, { "name": "errorContainer", "required": false, "positional": false }, { "name": "onErrorContainer", "required": false, "positional": false }, { "name": "surface", "required": false, "positional": false }, { "name": "onSurface", "required": false, "positional": false }, { "name": "surfaceDim", "required": false, "positional": false }, { "name": "surfaceBright", "required": false, "positional": false }, { "name": "surfaceContainerLowest", "required": false, "positional": false }, { "name": "surfaceContainerLow", "required": false, "positional": false }, { "name": "surfaceContainer", "required": false, "positional": false }, { "name": "surfaceContainerHigh", "required": false, "positional": false }, { "name": "surfaceContainerHighest", "required": false, "positional": false }, { "name": "onSurfaceVariant", "required": false, "positional": false }, { "name": "outline", "required": false, "positional": false }, { "name": "outlineVariant", "required": false, "positional": false }, { "name": "shadow", "required": false, "positional": false }, { "name": "scrim", "required": false, "positional": false }, { "name": "inverseSurface", "required": false, "positional": false }, { "name": "onInverseSurface", "required": false, "positional": false }, { "name": "inversePrimary", "required": false, "positional": false }, { "name": "surfaceTint", "required": false, "positional": false }, { "name": "background", "required": false, "positional": false }, { "name": "onBackground", "required": false, "positional": false }, { "name": "surfaceVariant", "required": false, "positional": false }], [], options);
  }
  _ColorSchemeFactory2.dark = dark;
})(_ColorSchemeFactory || (_ColorSchemeFactory = {}));
(function(_ColorSchemeFactory2) {
  function highContrastLight(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ColorScheme", "highContrastLight", [{ "name": "brightness", "required": false, "positional": false }, { "name": "primary", "required": false, "positional": false }, { "name": "onPrimary", "required": false, "positional": false }, { "name": "primaryContainer", "required": false, "positional": false }, { "name": "onPrimaryContainer", "required": false, "positional": false }, { "name": "primaryFixed", "required": false, "positional": false }, { "name": "primaryFixedDim", "required": false, "positional": false }, { "name": "onPrimaryFixed", "required": false, "positional": false }, { "name": "onPrimaryFixedVariant", "required": false, "positional": false }, { "name": "secondary", "required": false, "positional": false }, { "name": "onSecondary", "required": false, "positional": false }, { "name": "secondaryContainer", "required": false, "positional": false }, { "name": "onSecondaryContainer", "required": false, "positional": false }, { "name": "secondaryFixed", "required": false, "positional": false }, { "name": "secondaryFixedDim", "required": false, "positional": false }, { "name": "onSecondaryFixed", "required": false, "positional": false }, { "name": "onSecondaryFixedVariant", "required": false, "positional": false }, { "name": "tertiary", "required": false, "positional": false }, { "name": "onTertiary", "required": false, "positional": false }, { "name": "tertiaryContainer", "required": false, "positional": false }, { "name": "onTertiaryContainer", "required": false, "positional": false }, { "name": "tertiaryFixed", "required": false, "positional": false }, { "name": "tertiaryFixedDim", "required": false, "positional": false }, { "name": "onTertiaryFixed", "required": false, "positional": false }, { "name": "onTertiaryFixedVariant", "required": false, "positional": false }, { "name": "error", "required": false, "positional": false }, { "name": "onError", "required": false, "positional": false }, { "name": "errorContainer", "required": false, "positional": false }, { "name": "onErrorContainer", "required": false, "positional": false }, { "name": "surface", "required": false, "positional": false }, { "name": "onSurface", "required": false, "positional": false }, { "name": "surfaceDim", "required": false, "positional": false }, { "name": "surfaceBright", "required": false, "positional": false }, { "name": "surfaceContainerLowest", "required": false, "positional": false }, { "name": "surfaceContainerLow", "required": false, "positional": false }, { "name": "surfaceContainer", "required": false, "positional": false }, { "name": "surfaceContainerHigh", "required": false, "positional": false }, { "name": "surfaceContainerHighest", "required": false, "positional": false }, { "name": "onSurfaceVariant", "required": false, "positional": false }, { "name": "outline", "required": false, "positional": false }, { "name": "outlineVariant", "required": false, "positional": false }, { "name": "shadow", "required": false, "positional": false }, { "name": "scrim", "required": false, "positional": false }, { "name": "inverseSurface", "required": false, "positional": false }, { "name": "onInverseSurface", "required": false, "positional": false }, { "name": "inversePrimary", "required": false, "positional": false }, { "name": "surfaceTint", "required": false, "positional": false }, { "name": "background", "required": false, "positional": false }, { "name": "onBackground", "required": false, "positional": false }, { "name": "surfaceVariant", "required": false, "positional": false }], [], options);
  }
  _ColorSchemeFactory2.highContrastLight = highContrastLight;
})(_ColorSchemeFactory || (_ColorSchemeFactory = {}));
(function(_ColorSchemeFactory2) {
  function highContrastDark(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ColorScheme", "highContrastDark", [{ "name": "brightness", "required": false, "positional": false }, { "name": "primary", "required": false, "positional": false }, { "name": "onPrimary", "required": false, "positional": false }, { "name": "primaryContainer", "required": false, "positional": false }, { "name": "onPrimaryContainer", "required": false, "positional": false }, { "name": "primaryFixed", "required": false, "positional": false }, { "name": "primaryFixedDim", "required": false, "positional": false }, { "name": "onPrimaryFixed", "required": false, "positional": false }, { "name": "onPrimaryFixedVariant", "required": false, "positional": false }, { "name": "secondary", "required": false, "positional": false }, { "name": "onSecondary", "required": false, "positional": false }, { "name": "secondaryContainer", "required": false, "positional": false }, { "name": "onSecondaryContainer", "required": false, "positional": false }, { "name": "secondaryFixed", "required": false, "positional": false }, { "name": "secondaryFixedDim", "required": false, "positional": false }, { "name": "onSecondaryFixed", "required": false, "positional": false }, { "name": "onSecondaryFixedVariant", "required": false, "positional": false }, { "name": "tertiary", "required": false, "positional": false }, { "name": "onTertiary", "required": false, "positional": false }, { "name": "tertiaryContainer", "required": false, "positional": false }, { "name": "onTertiaryContainer", "required": false, "positional": false }, { "name": "tertiaryFixed", "required": false, "positional": false }, { "name": "tertiaryFixedDim", "required": false, "positional": false }, { "name": "onTertiaryFixed", "required": false, "positional": false }, { "name": "onTertiaryFixedVariant", "required": false, "positional": false }, { "name": "error", "required": false, "positional": false }, { "name": "onError", "required": false, "positional": false }, { "name": "errorContainer", "required": false, "positional": false }, { "name": "onErrorContainer", "required": false, "positional": false }, { "name": "surface", "required": false, "positional": false }, { "name": "onSurface", "required": false, "positional": false }, { "name": "surfaceDim", "required": false, "positional": false }, { "name": "surfaceBright", "required": false, "positional": false }, { "name": "surfaceContainerLowest", "required": false, "positional": false }, { "name": "surfaceContainerLow", "required": false, "positional": false }, { "name": "surfaceContainer", "required": false, "positional": false }, { "name": "surfaceContainerHigh", "required": false, "positional": false }, { "name": "surfaceContainerHighest", "required": false, "positional": false }, { "name": "onSurfaceVariant", "required": false, "positional": false }, { "name": "outline", "required": false, "positional": false }, { "name": "outlineVariant", "required": false, "positional": false }, { "name": "shadow", "required": false, "positional": false }, { "name": "scrim", "required": false, "positional": false }, { "name": "inverseSurface", "required": false, "positional": false }, { "name": "onInverseSurface", "required": false, "positional": false }, { "name": "inversePrimary", "required": false, "positional": false }, { "name": "surfaceTint", "required": false, "positional": false }, { "name": "background", "required": false, "positional": false }, { "name": "onBackground", "required": false, "positional": false }, { "name": "surfaceVariant", "required": false, "positional": false }], [], options);
  }
  _ColorSchemeFactory2.highContrastDark = highContrastDark;
})(_ColorSchemeFactory || (_ColorSchemeFactory = {}));
(function(_ColorSchemeFactory2) {
  function fromSwatch(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ColorScheme", "fromSwatch", [{ "name": "accentColor", "required": false, "positional": false }, { "name": "cardColor", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "errorColor", "required": false, "positional": false }, { "name": "brightness", "required": false, "positional": false }], [], options);
  }
  _ColorSchemeFactory2.fromSwatch = fromSwatch;
})(_ColorSchemeFactory || (_ColorSchemeFactory = {}));
(function(_ColorSchemeFactory2) {
  function lerp(a, b, t) {
    if (arguments.length > 3)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:ColorScheme.lerp", [a, b, t]);
    return _flaxResult;
  }
  _ColorSchemeFactory2.lerp = lerp;
})(_ColorSchemeFactory || (_ColorSchemeFactory = {}));
(function(_ColorSchemeFactory2) {
  function of(context) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:ColorScheme.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
    return _flaxResult;
  }
  _ColorSchemeFactory2.of = of;
})(_ColorSchemeFactory || (_ColorSchemeFactory = {}));
var ColorScheme = _flaxBindInstanceType(_ColorSchemeFactory, "flax.material/material#type:ColorScheme", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_InputDecoration.js
var import_bindings10 = require("@flax/core/bindings");
var import_flutter_Color3 = require("@flax/flutter/services");
var import_flutter_TextStyle2 = require("@flax/flutter/widgets");
var import_flutter_TextDirection = require("@flax/flutter/services");
var import_flutter_Duration2 = require("@flax/dart/core");
var import_flutter_EdgeInsetsGeometry2 = require("@flax/flutter/widgets");
var import_flutter_BoxConstraints2 = require("@flax/flutter/widgets");
var import_bindings11 = require("@flax/core/bindings");
var _flaxMemberParameters04 = [{ "name": "alignLabelWithHint", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "contentPadding", "required": false, "positional": false }, { "name": "counter", "required": false, "positional": false }, { "name": "counterStyle", "required": false, "positional": false }, { "name": "counterText", "required": false, "positional": false }, { "name": "enabled", "required": false, "positional": false }, { "name": "error", "required": false, "positional": false }, { "name": "errorMaxLines", "required": false, "positional": false }, { "name": "errorStyle", "required": false, "positional": false }, { "name": "errorText", "required": false, "positional": false }, { "name": "fillColor", "required": false, "positional": false }, { "name": "filled", "required": false, "positional": false }, { "name": "floatingLabelStyle", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "helper", "required": false, "positional": false }, { "name": "helperMaxLines", "required": false, "positional": false }, { "name": "helperStyle", "required": false, "positional": false }, { "name": "helperText", "required": false, "positional": false }, { "name": "hint", "required": false, "positional": false }, { "name": "hintFadeDuration", "required": false, "positional": false }, { "name": "hintMaxLines", "required": false, "positional": false }, { "name": "hintStyle", "required": false, "positional": false }, { "name": "hintText", "required": false, "positional": false }, { "name": "hintTextDirection", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "iconColor", "required": false, "positional": false }, { "name": "isCollapsed", "required": false, "positional": false }, { "name": "isDense", "required": false, "positional": false }, { "name": "label", "required": false, "positional": false }, { "name": "labelStyle", "required": false, "positional": false }, { "name": "labelText", "required": false, "positional": false }, { "name": "maintainHintHeight", "required": false, "positional": false }, { "name": "maintainHintSize", "required": false, "positional": false }, { "name": "maintainLabelSize", "required": false, "positional": false }, { "name": "prefix", "required": false, "positional": false }, { "name": "prefixIcon", "required": false, "positional": false }, { "name": "prefixIconColor", "required": false, "positional": false }, { "name": "prefixIconConstraints", "required": false, "positional": false }, { "name": "prefixStyle", "required": false, "positional": false }, { "name": "prefixText", "required": false, "positional": false }, { "name": "semanticCounterText", "required": false, "positional": false }, { "name": "suffix", "required": false, "positional": false }, { "name": "suffixIcon", "required": false, "positional": false }, { "name": "suffixIconColor", "required": false, "positional": false }, { "name": "suffixIconConstraints", "required": false, "positional": false }, { "name": "suffixStyle", "required": false, "positional": false }, { "name": "suffixText", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }];
var _flaxMemberParameters14 = [{ "name": "inputDecorationTheme", "required": true, "positional": true }];
var _flaxMemberParameters23 = [];
defineObject("flax.material/material#type:InputDecoration", ["icon", "iconColor", "label", "labelText", "labelStyle", "floatingLabelStyle", "helper", "helperText", "helperStyle", "helperMaxLines", "hintText", "hint", "hintStyle", "hintTextDirection", "hintMaxLines", "hintFadeDuration", "maintainHintHeight", "maintainHintSize", "maintainLabelSize", "error", "errorText", "errorStyle", "errorMaxLines", "isDense", "contentPadding", "isCollapsed", "prefixIcon", "prefixIconConstraints", "prefix", "prefixText", "prefixStyle", "prefixIconColor", "suffixIcon", "suffix", "suffixText", "suffixStyle", "suffixIconColor", "suffixIconConstraints", "counterText", "counter", "counterStyle", "filled", "fillColor", "focusColor", "hoverColor", "enabled", "semanticCounterText", "alignLabelWithHint", "constraints", "visualDensity"], [], (0, import_bindings10.bindingMethods)("flax.material/material#type:InputDecoration", "object", { "copyWith": _flaxMemberParameters04, "applyDefaults": _flaxMemberParameters14, "toString": _flaxMemberParameters23 }, {}), []);
function _InputDecorationFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:InputDecoration", "", [{ "name": "icon", "required": false, "positional": false }, { "name": "iconColor", "required": false, "positional": false }, { "name": "label", "required": false, "positional": false }, { "name": "labelText", "required": false, "positional": false }, { "name": "labelStyle", "required": false, "positional": false }, { "name": "floatingLabelStyle", "required": false, "positional": false }, { "name": "helper", "required": false, "positional": false }, { "name": "helperText", "required": false, "positional": false }, { "name": "helperStyle", "required": false, "positional": false }, { "name": "helperMaxLines", "required": false, "positional": false }, { "name": "hintText", "required": false, "positional": false }, { "name": "hint", "required": false, "positional": false }, { "name": "hintStyle", "required": false, "positional": false }, { "name": "hintTextDirection", "required": false, "positional": false }, { "name": "hintMaxLines", "required": false, "positional": false }, { "name": "hintFadeDuration", "required": false, "positional": false }, { "name": "maintainHintHeight", "required": false, "positional": false }, { "name": "maintainHintSize", "required": false, "positional": false }, { "name": "maintainLabelSize", "required": false, "positional": false }, { "name": "error", "required": false, "positional": false }, { "name": "errorText", "required": false, "positional": false }, { "name": "errorStyle", "required": false, "positional": false }, { "name": "errorMaxLines", "required": false, "positional": false }, { "name": "isCollapsed", "required": false, "positional": false }, { "name": "isDense", "required": false, "positional": false }, { "name": "contentPadding", "required": false, "positional": false }, { "name": "prefixIcon", "required": false, "positional": false }, { "name": "prefixIconConstraints", "required": false, "positional": false }, { "name": "prefix", "required": false, "positional": false }, { "name": "prefixText", "required": false, "positional": false }, { "name": "prefixStyle", "required": false, "positional": false }, { "name": "prefixIconColor", "required": false, "positional": false }, { "name": "suffixIcon", "required": false, "positional": false }, { "name": "suffix", "required": false, "positional": false }, { "name": "suffixText", "required": false, "positional": false }, { "name": "suffixStyle", "required": false, "positional": false }, { "name": "suffixIconColor", "required": false, "positional": false }, { "name": "suffixIconConstraints", "required": false, "positional": false }, { "name": "counter", "required": false, "positional": false }, { "name": "counterText", "required": false, "positional": false }, { "name": "counterStyle", "required": false, "positional": false }, { "name": "filled", "required": false, "positional": false }, { "name": "fillColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "enabled", "required": false, "positional": false }, { "name": "semanticCounterText", "required": false, "positional": false }, { "name": "alignLabelWithHint", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }], [], options);
}
(function(_InputDecorationFactory2) {
  function collapsed(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:InputDecoration", "collapsed", [{ "name": "hintText", "required": true, "positional": false }, { "name": "hintStyle", "required": false, "positional": false }, { "name": "hint", "required": false, "positional": false }, { "name": "hintTextDirection", "required": false, "positional": false }, { "name": "hintMaxLines", "required": false, "positional": false }, { "name": "hintFadeDuration", "required": false, "positional": false }, { "name": "maintainHintHeight", "required": false, "positional": false }, { "name": "maintainHintSize", "required": false, "positional": false }, { "name": "maintainLabelSize", "required": false, "positional": false }, { "name": "filled", "required": false, "positional": false }, { "name": "fillColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "enabled", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }], [], options);
  }
  _InputDecorationFactory2.collapsed = collapsed;
})(_InputDecorationFactory || (_InputDecorationFactory = {}));
var InputDecoration = _flaxBindInstanceType(_InputDecorationFactory, "flax.material/material#type:InputDecoration", ["dart:core::Object"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_MaterialPage.js
var import_bindings12 = require("@flax/core/bindings");
var import_flutter_Page = require("@flax/flutter/widgets");
var import_flutter_RouteSettings = require("@flax/flutter/widgets");
var import_flutter_LocalKey = require("@flax/flutter/foundation");
var import_flutter_Route = require("@flax/flutter/widgets");
var import_flutter_BuildContext3 = require("@flax/flutter/widgets");
var import_bindings13 = require("@flax/core/bindings");
var _flaxMemberParameters05 = [];
var _flaxMemberParameters15 = [{ "name": "other", "required": true, "positional": true }];
var _flaxMemberParameters24 = [{ "name": "context", "required": true, "positional": true, "context": "flax.core/flutter#type:BuildContext" }];
defineObject("flax.material/material#type:MaterialPage", ["name", "arguments", "key", "restorationId", "onPopInvoked", "canPop", "child", "maintainState", "fullscreenDialog", "allowSnapshotting"], [], (0, import_bindings12.bindingMethods)("flax.material/material#type:MaterialPage", "object", { "toString": _flaxMemberParameters05, "canUpdate": _flaxMemberParameters15, "createRoute": _flaxMemberParameters24 }, {}), []);
function _MaterialPageFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:MaterialPage", "", [{ "name": "child", "required": true, "positional": false }, { "name": "maintainState", "required": false, "positional": false }, { "name": "fullscreenDialog", "required": false, "positional": false }, { "name": "allowSnapshotting", "required": false, "positional": false }, { "name": "key", "required": false, "positional": false }, { "name": "canPop", "required": false, "positional": false }, { "name": "onPopInvoked", "required": false, "positional": false }, { "name": "name", "required": false, "positional": false }, { "name": "arguments", "required": false, "positional": false }, { "name": "restorationId", "required": false, "positional": false }], [], options);
}
var MaterialPage = _flaxBindInstanceType(_MaterialPageFactory, "flax.material/material#type:MaterialPage", ["flax.core/flutter#type:Page", "flax.core/flutter#type:RouteSettings", "dart:core::Object"]);
_flaxDefineDartTypes(MaterialPage, "flax.material/material#type:MaterialPage", { "category": "object", "constructors": { "": [{ "name": "child", "required": true, "positional": false }, { "name": "maintainState", "required": false, "positional": false }, { "name": "fullscreenDialog", "required": false, "positional": false }, { "name": "allowSnapshotting", "required": false, "positional": false }, { "name": "key", "required": false, "positional": false }, { "name": "canPop", "required": false, "positional": false }, { "name": "onPopInvoked", "required": false, "positional": false }, { "name": "name", "required": false, "positional": false }, { "name": "arguments", "required": false, "positional": false }, { "name": "restorationId", "required": false, "positional": false }] } });

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_MaterialPageRoute.js
var import_bindings14 = require("@flax/core/bindings");
var import_flutter_Route2 = require("@flax/flutter/widgets");
var import_flutter_BuildContext4 = require("@flax/flutter/widgets");
var import_flutter_RouteSettings2 = require("@flax/flutter/widgets");
var import_flutter_NavigatorState = require("@flax/flutter/widgets");
var import_flutter_ValueListenable = require("@flax/flutter/foundation");
var import_flutter_ImageFilter = require("@flax/dart/ui");
var import_flutter_Color4 = require("@flax/flutter/services");
var import_flutter_Curve = require("@flax/flutter/widgets");
var import_flutter_Duration3 = require("@flax/dart/core");
var import_bindings15 = require("@flax/core/bindings");
var _flaxMemberParameters06 = [];
var _flaxMemberParameters16 = [{ "name": "oldRoute", "required": true, "positional": true }];
var _flaxMemberParameters25 = [{ "name": "didPop", "required": true, "positional": true }];
var _flaxMemberParameters3 = [{ "name": "didPop", "required": true, "positional": true }, { "name": "result", "required": true, "positional": true }];
var _flaxMemberParameters4 = [{ "name": "result", "required": true, "positional": true }];
var _flaxMemberParameters5 = [{ "name": "nextRoute", "required": true, "positional": true }];
var _flaxMemberParameters6 = [{ "name": "previousRoute", "required": true, "positional": true }];
var _flaxMemberParameters7 = [{ "name": "context", "required": true, "positional": true, "context": "flax.core/flutter#type:BuildContext" }];
var _flaxMemberParameters8 = [{ "name": "fn", "required": true, "positional": true }];
var _flaxMemberParameters9 = [{ "name": "callback", "required": true, "positional": true }];
var _flaxMemberParameters10 = [{ "name": "progress", "required": false, "positional": false }];
var _flaxMemberParameters11 = [{ "name": "progress", "required": true, "positional": false }];
defineObject("flax.material/material#type:MaterialPageRoute", ["requestFocus", "navigator", "settings", "restorationScopeId", "willHandlePopInternally", "currentResult", "popped", "isCurrent", "isFirst", "hasActiveRouteBelow", "isActive", "builder", "maintainState", "debugLabel", "fullscreenDialog", "allowSnapshotting", "opaque", "barrierDismissible", "popGestureEnabled", "filter", "semanticsDismissible", "barrierColor", "barrierLabel", "barrierCurve", "popGestureInProgress", "offstage", "subtreeContext", "hasScopedWillPopCallback", "canPop", "impliesAppBarDismissal", "completed", "transitionDuration", "reverseTransitionDuration", "finishedWhenPopped", "willDisposeAnimationController"], ["offstage", "willDisposeAnimationController"], (0, import_bindings14.bindingMethods)("flax.material/material#type:MaterialPageRoute", "object", { "install": _flaxMemberParameters06, "didAdd": _flaxMemberParameters06, "didReplace": _flaxMemberParameters16, "onPopInvoked": _flaxMemberParameters25, "onPopInvokedWithResult": _flaxMemberParameters3, "didPop": _flaxMemberParameters4, "didComplete": _flaxMemberParameters4, "didPopNext": _flaxMemberParameters5, "didChangeNext": _flaxMemberParameters5, "didChangePrevious": _flaxMemberParameters6, "changedInternalState": _flaxMemberParameters06, "changedExternalState": _flaxMemberParameters06, "dispose": _flaxMemberParameters06, "buildContent": _flaxMemberParameters7, "setState": _flaxMemberParameters8, "addScopedWillPopCallback": _flaxMemberParameters9, "removeScopedWillPopCallback": _flaxMemberParameters9, "buildModalBarrier": _flaxMemberParameters06, "debugTransitionCompleted": _flaxMemberParameters06, "handleStartBackGesture": _flaxMemberParameters10, "handleUpdateBackGestureProgress": _flaxMemberParameters11, "handleCancelBackGesture": _flaxMemberParameters06, "handleCommitBackGesture": _flaxMemberParameters06 }, {}), []);
function _MaterialPageRouteFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:MaterialPageRoute", "", [{ "name": "builder", "required": true, "positional": false }, { "name": "settings", "required": false, "positional": false }, { "name": "requestFocus", "required": false, "positional": false }, { "name": "maintainState", "required": false, "positional": false }, { "name": "fullscreenDialog", "required": false, "positional": false }, { "name": "allowSnapshotting", "required": false, "positional": false }, { "name": "barrierDismissible", "required": false, "positional": false }], [], options);
}
var MaterialPageRoute = _flaxBindInstanceType(_MaterialPageRouteFactory, "flax.material/material#type:MaterialPageRoute", ["package:flutter/src/widgets/pages.dart::PageRoute", "package:flutter/src/widgets/routes.dart::ModalRoute", "package:flutter/src/widgets/routes.dart::TransitionRoute", "package:flutter/src/widgets/routes.dart::OverlayRoute", "flax.core/flutter#type:Route", "package:flutter/src/widgets/navigator.dart::_RoutePlaceholder", "package:flutter/src/widgets/routes.dart::PredictiveBackRoute", "package:flutter/src/widgets/routes.dart::LocalHistoryRoute", "package:material_ui/src/page.dart::MaterialRouteTransitionMixin"]);
_flaxDefineDartTypes(MaterialPageRoute, "flax.material/material#type:MaterialPageRoute", { "category": "object", "constructors": { "": [{ "name": "builder", "required": true, "positional": false }, { "name": "settings", "required": false, "positional": false }, { "name": "requestFocus", "required": false, "positional": false }, { "name": "maintainState", "required": false, "positional": false }, { "name": "fullscreenDialog", "required": false, "positional": false }, { "name": "allowSnapshotting", "required": false, "positional": false }, { "name": "barrierDismissible", "required": false, "positional": false }] } });

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_TextTheme.js
var import_bindings16 = require("@flax/core/bindings");
var import_flutter_TextStyle3 = require("@flax/flutter/widgets");
var import_flutter_BuildContext5 = require("@flax/flutter/widgets");
var import_flutter_Color5 = require("@flax/flutter/services");
var import_bindings17 = require("@flax/core/bindings");
var _flaxMemberParameters07 = [{ "name": "bodyLarge", "required": false, "positional": false }, { "name": "bodyMedium", "required": false, "positional": false }, { "name": "bodySmall", "required": false, "positional": false }, { "name": "displayLarge", "required": false, "positional": false }, { "name": "displayMedium", "required": false, "positional": false }, { "name": "displaySmall", "required": false, "positional": false }, { "name": "headlineLarge", "required": false, "positional": false }, { "name": "headlineMedium", "required": false, "positional": false }, { "name": "headlineSmall", "required": false, "positional": false }, { "name": "labelLarge", "required": false, "positional": false }, { "name": "labelMedium", "required": false, "positional": false }, { "name": "labelSmall", "required": false, "positional": false }, { "name": "titleLarge", "required": false, "positional": false }, { "name": "titleMedium", "required": false, "positional": false }, { "name": "titleSmall", "required": false, "positional": false }];
var _flaxMemberParameters17 = [{ "name": "other", "required": true, "positional": true }];
var _flaxMemberParameters26 = [{ "name": "bodyColor", "required": false, "positional": false }, { "name": "decorationColor", "required": false, "positional": false }, { "name": "displayColor", "required": false, "positional": false }, { "name": "fontFamily", "required": false, "positional": false }, { "name": "fontFamilyFallback", "required": false, "positional": false }, { "name": "fontSizeDelta", "required": false, "positional": false }, { "name": "fontSizeFactor", "required": false, "positional": false }, { "name": "heightDelta", "required": false, "positional": false }, { "name": "heightFactor", "required": false, "positional": false }, { "name": "letterSpacingDelta", "required": false, "positional": false }, { "name": "letterSpacingFactor", "required": false, "positional": false }, { "name": "package", "required": false, "positional": false }, { "name": "wordSpacingDelta", "required": false, "positional": false }, { "name": "wordSpacingFactor", "required": false, "positional": false }];
var _flaxMemberParameters32 = [];
defineObject("flax.material/material#type:TextTheme", ["displayLarge", "displayMedium", "displaySmall", "headlineLarge", "headlineMedium", "headlineSmall", "titleLarge", "titleMedium", "titleSmall", "bodyLarge", "bodyMedium", "bodySmall", "labelLarge", "labelMedium", "labelSmall"], [], (0, import_bindings16.bindingMethods)("flax.material/material#type:TextTheme", "object", { "copyWith": _flaxMemberParameters07, "merge": _flaxMemberParameters17, "apply": _flaxMemberParameters26, "toStringShort": _flaxMemberParameters32 }, {}), []);
function _TextThemeFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:TextTheme", "", [{ "name": "displayLarge", "required": false, "positional": false }, { "name": "displayMedium", "required": false, "positional": false }, { "name": "displaySmall", "required": false, "positional": false }, { "name": "headlineLarge", "required": false, "positional": false }, { "name": "headlineMedium", "required": false, "positional": false }, { "name": "headlineSmall", "required": false, "positional": false }, { "name": "titleLarge", "required": false, "positional": false }, { "name": "titleMedium", "required": false, "positional": false }, { "name": "titleSmall", "required": false, "positional": false }, { "name": "bodyLarge", "required": false, "positional": false }, { "name": "bodyMedium", "required": false, "positional": false }, { "name": "bodySmall", "required": false, "positional": false }, { "name": "labelLarge", "required": false, "positional": false }, { "name": "labelMedium", "required": false, "positional": false }, { "name": "labelSmall", "required": false, "positional": false }], [], options);
}
(function(_TextThemeFactory2) {
  function lerp(a, b, t) {
    if (arguments.length > 3)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:TextTheme.lerp", [a, b, t]);
    return _flaxResult;
  }
  _TextThemeFactory2.lerp = lerp;
})(_TextThemeFactory || (_TextThemeFactory = {}));
(function(_TextThemeFactory2) {
  function of(context) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:TextTheme.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
    return _flaxResult;
  }
  _TextThemeFactory2.of = of;
})(_TextThemeFactory || (_TextThemeFactory = {}));
(function(_TextThemeFactory2) {
  function primaryOf(context) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:TextTheme.primaryOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
    return _flaxResult;
  }
  _TextThemeFactory2.primaryOf = primaryOf;
})(_TextThemeFactory || (_TextThemeFactory = {}));
var TextTheme = _flaxBindInstanceType(_TextThemeFactory, "flax.material/material#type:TextTheme", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ThemeData.js
var import_bindings18 = require("@flax/core/bindings");
var import_flutter_TargetPlatform2 = require("@flax/flutter/foundation");
var import_flutter_Color6 = require("@flax/flutter/services");
var import_bindings19 = require("@flax/core/bindings");
var _flaxMemberParameters08 = [];
var _flaxMemberParameters18 = [{ "name": "appBarTheme", "required": false, "positional": false }, { "name": "applyElevationOverlayColor", "required": false, "positional": false }, { "name": "brightness", "required": false, "positional": false }, { "name": "canvasColor", "required": false, "positional": false }, { "name": "cardColor", "required": false, "positional": false }, { "name": "colorScheme", "required": false, "positional": false }, { "name": "dialogBackgroundColor", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "dividerColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "highlightColor", "required": false, "positional": false }, { "name": "hintColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "indicatorColor", "required": false, "positional": false }, { "name": "inputDecorationTheme", "required": false, "positional": false }, { "name": "platform", "required": false, "positional": false }, { "name": "primaryColor", "required": false, "positional": false }, { "name": "primaryColorDark", "required": false, "positional": false }, { "name": "primaryColorLight", "required": false, "positional": false }, { "name": "primaryTextTheme", "required": false, "positional": false }, { "name": "scaffoldBackgroundColor", "required": false, "positional": false }, { "name": "secondaryHeaderColor", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "textTheme", "required": false, "positional": false }, { "name": "unselectedWidgetColor", "required": false, "positional": false }, { "name": "useMaterial3", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }];
defineObject("flax.material/material#type:ThemeData", ["brightness", "applyElevationOverlayColor", "platform", "useMaterial3", "visualDensity", "canvasColor", "cardColor", "colorScheme", "disabledColor", "dividerColor", "focusColor", "highlightColor", "hintColor", "hoverColor", "primaryColor", "primaryColorDark", "primaryColorLight", "scaffoldBackgroundColor", "secondaryHeaderColor", "shadowColor", "splashColor", "unselectedWidgetColor", "primaryTextTheme", "textTheme", "dialogBackgroundColor", "indicatorColor"], [], (0, import_bindings18.bindingMethods)("flax.material/material#type:ThemeData", "object", { "extension": _flaxMemberParameters08, "copyWith": _flaxMemberParameters18, "toStringShort": _flaxMemberParameters08 }, { "extension": { "id": "extension", "parameters": [] } }), []);
function _ThemeDataFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:ThemeData", "", [{ "name": "applyElevationOverlayColor", "required": false, "positional": false }, { "name": "inputDecorationTheme", "required": false, "positional": false }, { "name": "platform", "required": false, "positional": false }, { "name": "useMaterial3", "required": false, "positional": false }, { "name": "useSystemColors", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }, { "name": "colorScheme", "required": false, "positional": false }, { "name": "brightness", "required": false, "positional": false }, { "name": "colorSchemeSeed", "required": false, "positional": false }, { "name": "canvasColor", "required": false, "positional": false }, { "name": "cardColor", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "dividerColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "highlightColor", "required": false, "positional": false }, { "name": "hintColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "primaryColor", "required": false, "positional": false }, { "name": "primaryColorDark", "required": false, "positional": false }, { "name": "primaryColorLight", "required": false, "positional": false }, { "name": "scaffoldBackgroundColor", "required": false, "positional": false }, { "name": "secondaryHeaderColor", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "unselectedWidgetColor", "required": false, "positional": false }, { "name": "fontFamily", "required": false, "positional": false }, { "name": "fontFamilyFallback", "required": false, "positional": false }, { "name": "package", "required": false, "positional": false }, { "name": "primaryTextTheme", "required": false, "positional": false }, { "name": "textTheme", "required": false, "positional": false }, { "name": "appBarTheme", "required": false, "positional": false }, { "name": "dialogBackgroundColor", "required": false, "positional": false }, { "name": "indicatorColor", "required": false, "positional": false }], [], options);
}
(function(_ThemeDataFactory2) {
  function from(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ThemeData", "from", [{ "name": "colorScheme", "required": true, "positional": false }, { "name": "textTheme", "required": false, "positional": false }, { "name": "useMaterial3", "required": false, "positional": false }], [], options);
  }
  _ThemeDataFactory2.from = from;
})(_ThemeDataFactory || (_ThemeDataFactory = {}));
(function(_ThemeDataFactory2) {
  function light(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ThemeData", "light", [{ "name": "useMaterial3", "required": false, "positional": false }], [], options);
  }
  _ThemeDataFactory2.light = light;
})(_ThemeDataFactory || (_ThemeDataFactory = {}));
(function(_ThemeDataFactory2) {
  function dark(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ThemeData", "dark", [{ "name": "useMaterial3", "required": false, "positional": false }], [], options);
  }
  _ThemeDataFactory2.dark = dark;
})(_ThemeDataFactory || (_ThemeDataFactory = {}));
(function(_ThemeDataFactory2) {
  function fallback(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ThemeData", "fallback", [{ "name": "useMaterial3", "required": false, "positional": false }], [], options);
  }
  _ThemeDataFactory2.fallback = fallback;
})(_ThemeDataFactory || (_ThemeDataFactory = {}));
(function(_ThemeDataFactory2) {
  function localize(baseTheme, localTextGeometry) {
    if (arguments.length > 2)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:ThemeData.localize", [baseTheme, localTextGeometry]);
    return _flaxResult;
  }
  _ThemeDataFactory2.localize = localize;
})(_ThemeDataFactory || (_ThemeDataFactory = {}));
(function(_ThemeDataFactory2) {
  function estimateBrightnessForColor(color) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:ThemeData.estimateBrightnessForColor", [color]);
    return _flaxResult;
  }
  _ThemeDataFactory2.estimateBrightnessForColor = estimateBrightnessForColor;
})(_ThemeDataFactory || (_ThemeDataFactory = {}));
(function(_ThemeDataFactory2) {
  function lerp(a, b, t) {
    if (arguments.length > 3)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:ThemeData.lerp", [a, b, t]);
    return _flaxResult;
  }
  _ThemeDataFactory2.lerp = lerp;
})(_ThemeDataFactory || (_ThemeDataFactory = {}));
var ThemeData = _flaxBindInstanceType(_ThemeDataFactory, "flax.material/material#type:ThemeData", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_AlertDialog.js
var import_bindings20 = require("@flax/core/bindings");
var import_flutter_Key = require("@flax/flutter/foundation");
var import_flutter_EdgeInsetsGeometry3 = require("@flax/flutter/widgets");
var import_flutter_Color7 = require("@flax/flutter/services");
var import_flutter_TextStyle4 = require("@flax/flutter/widgets");
var import_flutter_MainAxisAlignment = require("@flax/flutter/widgets");
var import_flutter_VerticalDirection = require("@flax/flutter/widgets");
var import_flutter_EdgeInsets = require("@flax/flutter/widgets");
var import_flutter_Clip = require("@flax/flutter/widgets");
var import_flutter_ShapeBorder = require("@flax/flutter/widgets");
var import_flutter_AlignmentGeometry2 = require("@flax/flutter/widgets");
var import_flutter_BoxConstraints3 = require("@flax/flutter/widgets");
var import_flutter_ScrollController = require("@flax/flutter/widgets");
var import_flutter_Duration4 = require("@flax/dart/core");
var import_flutter_Curve2 = require("@flax/flutter/widgets");
var import_bindings21 = require("@flax/core/bindings");
function _AlertDialogFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:AlertDialog", "", [{ "name": "key", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "iconPadding", "required": false, "positional": false }, { "name": "iconColor", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "titlePadding", "required": false, "positional": false }, { "name": "titleTextStyle", "required": false, "positional": false }, { "name": "content", "required": false, "positional": false }, { "name": "contentPadding", "required": false, "positional": false }, { "name": "contentTextStyle", "required": false, "positional": false }, { "name": "actions", "required": false, "positional": false }, { "name": "actionsPadding", "required": false, "positional": false }, { "name": "actionsAlignment", "required": false, "positional": false }, { "name": "actionsOverflowDirection", "required": false, "positional": false }, { "name": "actionsOverflowButtonSpacing", "required": false, "positional": false }, { "name": "buttonPadding", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "semanticLabel", "required": false, "positional": false }, { "name": "insetPadding", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "scrollable", "required": false, "positional": false }], [], options);
}
(function(_AlertDialogFactory2) {
  function adaptive(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:AlertDialog", "adaptive", [{ "name": "key", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "iconPadding", "required": false, "positional": false }, { "name": "iconColor", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "titlePadding", "required": false, "positional": false }, { "name": "titleTextStyle", "required": false, "positional": false }, { "name": "content", "required": false, "positional": false }, { "name": "contentPadding", "required": false, "positional": false }, { "name": "contentTextStyle", "required": false, "positional": false }, { "name": "actions", "required": false, "positional": false }, { "name": "actionsPadding", "required": false, "positional": false }, { "name": "actionsAlignment", "required": false, "positional": false }, { "name": "actionsOverflowDirection", "required": false, "positional": false }, { "name": "actionsOverflowButtonSpacing", "required": false, "positional": false }, { "name": "buttonPadding", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "semanticLabel", "required": false, "positional": false }, { "name": "insetPadding", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "scrollable", "required": false, "positional": false }, { "name": "scrollController", "required": false, "positional": false }, { "name": "actionScrollController", "required": false, "positional": false }, { "name": "insetAnimationDuration", "required": false, "positional": false }, { "name": "insetAnimationCurve", "required": false, "positional": false }], [], options);
  }
  _AlertDialogFactory2.adaptive = adaptive;
})(_AlertDialogFactory || (_AlertDialogFactory = {}));
var AlertDialog = _flaxBindInstanceType(_AlertDialogFactory, "flax.material/material#type:AlertDialog", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_AppBar.js
var import_bindings22 = require("@flax/core/bindings");
var import_bindings23 = require("@flax/core/bindings");
var import_components_StatefulWidget = require("@flax/flutter/widgets");
var import_flutter_PreferredSizeWidget = require("@flax/flutter/widgets");
var import_flutter_Key2 = require("@flax/flutter/foundation");
var import_flutter_Color8 = require("@flax/flutter/services");
var import_flutter_ShapeBorder2 = require("@flax/flutter/widgets");
var import_flutter_TextStyle5 = require("@flax/flutter/widgets");
var import_flutter_Clip2 = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry4 = require("@flax/flutter/widgets");
var import_flutter_Size2 = require("@flax/flutter/services");
var import_flutter_BuildContext6 = require("@flax/flutter/widgets");
var import_components_State = require("@flax/flutter/widgets");
var import_bindings24 = require("@flax/core/bindings");
var _flaxMemberParameters09 = [];
var _flaxMemberParameters19 = [{ "name": "joiner", "required": false, "positional": false }];
var _flaxMemberParameters27 = [{ "name": "prefixLineOne", "required": false, "positional": false }, { "name": "prefixOtherLines", "required": false, "positional": false }, { "name": "wrapWidth", "required": false, "positional": false }];
defineObject("flax.material/material#type:AppBar", ["preferredSize", "leading", "automaticallyImplyLeading", "title", "actions", "automaticallyImplyActions", "flexibleSpace", "bottom", "elevation", "scrolledUnderElevation", "shadowColor", "surfaceTintColor", "shape", "backgroundColor", "foregroundColor", "primary", "centerTitle", "excludeHeaderSemantics", "titleSpacing", "toolbarOpacity", "bottomOpacity", "toolbarHeight", "leadingWidth", "toolbarTextStyle", "titleTextStyle", "forceMaterialTransparency", "useDefaultSemanticsOrder", "clipBehavior", "actionsPadding", "animateColor", "key"], [], (0, import_bindings22.bindingMethods)("flax.material/material#type:AppBar", "object", { "createState": _flaxMemberParameters09, "toStringShort": _flaxMemberParameters09, "toStringShallow": _flaxMemberParameters19, "toStringDeep": _flaxMemberParameters27 }, {}), []);
function _AppBarFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:AppBar", "", [{ "name": "key", "fixed": true, "required": false, "positional": false }, { "name": "leading", "fixed": true, "required": false, "positional": false }, { "name": "automaticallyImplyLeading", "fixed": true, "required": false, "positional": false }, { "name": "title", "fixed": true, "required": false, "positional": false }, { "name": "actions", "fixed": true, "required": false, "positional": false }, { "name": "automaticallyImplyActions", "fixed": true, "required": false, "positional": false }, { "name": "flexibleSpace", "fixed": true, "required": false, "positional": false }, { "name": "bottom", "fixed": true, "required": false, "positional": false }, { "name": "elevation", "fixed": true, "required": false, "positional": false }, { "name": "scrolledUnderElevation", "fixed": true, "required": false, "positional": false }, { "name": "shadowColor", "fixed": true, "required": false, "positional": false }, { "name": "surfaceTintColor", "fixed": true, "required": false, "positional": false }, { "name": "shape", "fixed": true, "required": false, "positional": false }, { "name": "backgroundColor", "fixed": true, "required": false, "positional": false }, { "name": "foregroundColor", "fixed": true, "required": false, "positional": false }, { "name": "primary", "fixed": true, "required": false, "positional": false }, { "name": "centerTitle", "fixed": true, "required": false, "positional": false }, { "name": "excludeHeaderSemantics", "fixed": true, "required": false, "positional": false }, { "name": "titleSpacing", "fixed": true, "required": false, "positional": false }, { "name": "toolbarOpacity", "fixed": true, "required": false, "positional": false }, { "name": "bottomOpacity", "fixed": true, "required": false, "positional": false }, { "name": "toolbarHeight", "fixed": true, "required": false, "positional": false }, { "name": "leadingWidth", "fixed": true, "required": false, "positional": false }, { "name": "toolbarTextStyle", "fixed": true, "required": false, "positional": false }, { "name": "titleTextStyle", "fixed": true, "required": false, "positional": false }, { "name": "forceMaterialTransparency", "fixed": true, "required": false, "positional": false }, { "name": "useDefaultSemanticsOrder", "fixed": true, "required": false, "positional": false }, { "name": "clipBehavior", "fixed": true, "required": false, "positional": false }, { "name": "actionsPadding", "fixed": true, "required": false, "positional": false }, { "name": "animateColor", "fixed": true, "required": false, "positional": false }], [], options);
}
(function(_AppBarFactory2) {
  function preferredHeightFor(context, preferredSize) {
    if (arguments.length > 2)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:AppBar.preferredHeightFor", [contextHandle(context, "flax.core/flutter#type:BuildContext"), preferredSize]);
    return _flaxResult;
  }
  _AppBarFactory2.preferredHeightFor = preferredHeightFor;
})(_AppBarFactory || (_AppBarFactory = {}));
var AppBar = _flaxBindInstanceType(_AppBarFactory, "flax.material/material#type:AppBar", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable", "flax.core/flutter#type:PreferredSizeWidget"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Card.js
var import_bindings25 = require("@flax/core/bindings");
var import_flutter_Key3 = require("@flax/flutter/foundation");
var import_flutter_Color9 = require("@flax/flutter/services");
var import_flutter_ShapeBorder3 = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry5 = require("@flax/flutter/widgets");
var import_flutter_Clip3 = require("@flax/flutter/widgets");
var import_bindings26 = require("@flax/core/bindings");
function _CardFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Card", "", [{ "name": "key", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "borderOnForeground", "required": false, "positional": false }, { "name": "margin", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "semanticContainer", "required": false, "positional": false }], [], options);
}
(function(_CardFactory2) {
  function filled(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:Card", "filled", [{ "name": "key", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "borderOnForeground", "required": false, "positional": false }, { "name": "margin", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "semanticContainer", "required": false, "positional": false }], [], options);
  }
  _CardFactory2.filled = filled;
})(_CardFactory || (_CardFactory = {}));
(function(_CardFactory2) {
  function outlined(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:Card", "outlined", [{ "name": "key", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "borderOnForeground", "required": false, "positional": false }, { "name": "margin", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "semanticContainer", "required": false, "positional": false }], [], options);
  }
  _CardFactory2.outlined = outlined;
})(_CardFactory || (_CardFactory = {}));
var Card = _flaxBindInstanceType(_CardFactory, "flax.material/material#type:Card", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Checkbox.js
var import_bindings27 = require("@flax/core/bindings");
var import_flutter_Key4 = require("@flax/flutter/foundation");
var import_flutter_MouseCursor2 = require("@flax/flutter/services");
var import_flutter_Color10 = require("@flax/flutter/services");
var import_flutter_WidgetStateProperty2 = require("@flax/flutter/widgets");
var import_flutter_FocusNode = require("@flax/flutter/widgets");
var import_flutter_OutlinedBorder2 = require("@flax/flutter/widgets");
var import_flutter_BorderSide2 = require("@flax/flutter/widgets");
var import_bindings28 = require("@flax/core/bindings");
function _CheckboxFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Checkbox", "", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": true, "positional": false }, { "name": "tristate", "required": false, "positional": false }, { "name": "onChanged", "required": true, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "activeColor", "required": false, "positional": false }, { "name": "fillColor", "required": false, "positional": false }, { "name": "checkColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "splashRadius", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "side", "required": false, "positional": false }, { "name": "isError", "required": false, "positional": false }, { "name": "semanticLabel", "required": false, "positional": false }], [], options);
}
(function(_CheckboxFactory2) {
  function adaptive(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:Checkbox", "adaptive", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": true, "positional": false }, { "name": "tristate", "required": false, "positional": false }, { "name": "onChanged", "required": true, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "activeColor", "required": false, "positional": false }, { "name": "fillColor", "required": false, "positional": false }, { "name": "checkColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "splashRadius", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "side", "required": false, "positional": false }, { "name": "isError", "required": false, "positional": false }, { "name": "semanticLabel", "required": false, "positional": false }], [], options);
  }
  _CheckboxFactory2.adaptive = adaptive;
})(_CheckboxFactory || (_CheckboxFactory = {}));
/* @__PURE__ */ (function(_CheckboxFactory2) {
})(_CheckboxFactory || (_CheckboxFactory = {}));
Object.defineProperty(_CheckboxFactory, "width", { get: () => invokeTopLevel("flax.material/material#read:Checkbox.width", []) });
var Checkbox = _flaxBindInstanceType(_CheckboxFactory, "flax.material/material#type:Checkbox", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_CircularProgressIndicator.js
var import_bindings29 = require("@flax/core/bindings");
var import_flutter_Key5 = require("@flax/flutter/foundation");
var import_flutter_Color11 = require("@flax/flutter/services");
var import_flutter_BoxConstraints4 = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry6 = require("@flax/flutter/widgets");
var import_flutter_Duration5 = require("@flax/dart/core");
var import_bindings30 = require("@flax/core/bindings");
function _CircularProgressIndicatorFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:CircularProgressIndicator", "", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "strokeWidth", "required": false, "positional": false }, { "name": "strokeAlign", "required": false, "positional": false }, { "name": "semanticsLabel", "required": false, "positional": false }, { "name": "semanticsValue", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "trackGap", "required": false, "positional": false }, { "name": "year2023", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }], [], options);
}
(function(_CircularProgressIndicatorFactory2) {
  function adaptive(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:CircularProgressIndicator", "adaptive", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "strokeWidth", "required": false, "positional": false }, { "name": "semanticsLabel", "required": false, "positional": false }, { "name": "semanticsValue", "required": false, "positional": false }, { "name": "strokeAlign", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "trackGap", "required": false, "positional": false }, { "name": "year2023", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }], [], options);
  }
  _CircularProgressIndicatorFactory2.adaptive = adaptive;
})(_CircularProgressIndicatorFactory || (_CircularProgressIndicatorFactory = {}));
/* @__PURE__ */ (function(_CircularProgressIndicatorFactory2) {
})(_CircularProgressIndicatorFactory || (_CircularProgressIndicatorFactory = {}));
Object.defineProperty(_CircularProgressIndicatorFactory, "strokeAlignInside", { get: () => invokeTopLevel("flax.material/material#read:CircularProgressIndicator.strokeAlignInside", []) });
/* @__PURE__ */ (function(_CircularProgressIndicatorFactory2) {
})(_CircularProgressIndicatorFactory || (_CircularProgressIndicatorFactory = {}));
Object.defineProperty(_CircularProgressIndicatorFactory, "strokeAlignCenter", { get: () => invokeTopLevel("flax.material/material#read:CircularProgressIndicator.strokeAlignCenter", []) });
/* @__PURE__ */ (function(_CircularProgressIndicatorFactory2) {
})(_CircularProgressIndicatorFactory || (_CircularProgressIndicatorFactory = {}));
Object.defineProperty(_CircularProgressIndicatorFactory, "strokeAlignOutside", { get: () => invokeTopLevel("flax.material/material#read:CircularProgressIndicator.strokeAlignOutside", []) });
/* @__PURE__ */ (function(_CircularProgressIndicatorFactory2) {
})(_CircularProgressIndicatorFactory || (_CircularProgressIndicatorFactory = {}));
Object.defineProperty(_CircularProgressIndicatorFactory, "defaultAnimationDuration", { get: () => invokeTopLevel("flax.material/material#read:CircularProgressIndicator.defaultAnimationDuration", []) });
var CircularProgressIndicator = _flaxBindInstanceType(_CircularProgressIndicatorFactory, "flax.material/material#type:CircularProgressIndicator", ["package:material_ui/src/progress_indicator.dart::ProgressIndicator", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Divider.js
var import_bindings31 = require("@flax/core/bindings");
var import_flutter_Key6 = require("@flax/flutter/foundation");
var import_flutter_Color12 = require("@flax/flutter/services");
var import_flutter_BorderRadiusGeometry = require("@flax/flutter/widgets");
var import_flutter_BorderSide3 = require("@flax/flutter/widgets");
var import_flutter_BuildContext7 = require("@flax/flutter/widgets");
var import_bindings32 = require("@flax/core/bindings");
function _DividerFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Divider", "", [{ "name": "key", "required": false, "positional": false }, { "name": "height", "required": false, "positional": false }, { "name": "thickness", "required": false, "positional": false }, { "name": "indent", "required": false, "positional": false }, { "name": "endIndent", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "radius", "required": false, "positional": false }], [], options);
}
(function(_DividerFactory2) {
  function createBorderSide(context, options = {}) {
    if (arguments.length > 2)
      throw new TypeError("Too many method arguments");
    if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["color", "width"].includes(k)))
      throw new TypeError("Invalid named method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:Divider.createBorderSide", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.color, options.width]);
    return _flaxResult;
  }
  _DividerFactory2.createBorderSide = createBorderSide;
})(_DividerFactory || (_DividerFactory = {}));
var Divider = _flaxBindInstanceType(_DividerFactory, "flax.material/material#type:Divider", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Drawer.js
var import_bindings33 = require("@flax/core/bindings");
var import_flutter_Key7 = require("@flax/flutter/foundation");
var import_flutter_Color13 = require("@flax/flutter/services");
var import_flutter_ShapeBorder4 = require("@flax/flutter/widgets");
var import_flutter_Clip4 = require("@flax/flutter/widgets");
var import_bindings34 = require("@flax/core/bindings");
function _DrawerFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Drawer", "", [{ "name": "key", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "width", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "semanticLabel", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }], [], options);
}
var Drawer = _flaxBindInstanceType(_DrawerFactory, "flax.material/material#type:Drawer", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ElevatedButton.js
var import_bindings35 = require("@flax/core/bindings");
var import_flutter_Key8 = require("@flax/flutter/foundation");
var import_flutter_FocusNode2 = require("@flax/flutter/widgets");
var import_flutter_Clip5 = require("@flax/flutter/widgets");
var import_flutter_AlignmentGeometry3 = require("@flax/flutter/widgets");
var import_flutter_Duration6 = require("@flax/dart/core");
var import_flutter_BuildContext8 = require("@flax/flutter/widgets");
var import_flutter_WidgetState2 = require("@flax/flutter/widgets");
var import_flutter_Color14 = require("@flax/flutter/services");
var import_flutter_MouseCursor3 = require("@flax/flutter/services");
var import_flutter_Size3 = require("@flax/flutter/services");
var import_flutter_EdgeInsetsGeometry7 = require("@flax/flutter/widgets");
var import_flutter_OutlinedBorder3 = require("@flax/flutter/widgets");
var import_flutter_BorderSide4 = require("@flax/flutter/widgets");
var import_flutter_TextStyle6 = require("@flax/flutter/widgets");
var import_bindings36 = require("@flax/core/bindings");
function _ElevatedButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:ElevatedButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
(function(_ElevatedButtonFactory2) {
  function icon(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:ElevatedButton", "icon", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "label", "required": true, "positional": false }], [], options);
  }
  _ElevatedButtonFactory2.icon = icon;
})(_ElevatedButtonFactory || (_ElevatedButtonFactory = {}));
(function(_ElevatedButtonFactory2) {
  function styleFrom(options = {}) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["alignment", "animationDuration", "backgroundBuilder", "backgroundColor", "disabledBackgroundColor", "disabledForegroundColor", "disabledIconColor", "disabledMouseCursor", "elevation", "enableFeedback", "enabledMouseCursor", "fixedSize", "foregroundBuilder", "foregroundColor", "iconColor", "iconSize", "maximumSize", "minimumSize", "overlayColor", "padding", "shadowColor", "shape", "side", "surfaceTintColor", "textStyle", "visualDensity"].includes(k)))
      throw new TypeError("Invalid named method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:ElevatedButton.styleFrom", [options.alignment, options.animationDuration, options.backgroundBuilder, options.backgroundColor, options.disabledBackgroundColor, options.disabledForegroundColor, options.disabledIconColor, options.disabledMouseCursor, options.elevation, options.enableFeedback, options.enabledMouseCursor, options.fixedSize, options.foregroundBuilder, options.foregroundColor, options.iconColor, options.iconSize, options.maximumSize, options.minimumSize, options.overlayColor, options.padding, options.shadowColor, options.shape, options.side, options.surfaceTintColor, options.textStyle, options.visualDensity]);
    return _flaxResult;
  }
  _ElevatedButtonFactory2.styleFrom = styleFrom;
})(_ElevatedButtonFactory || (_ElevatedButtonFactory = {}));
var ElevatedButton = _flaxBindInstanceType(_ElevatedButtonFactory, "flax.material/material#type:ElevatedButton", ["package:material_ui/src/button_style_button.dart::ButtonStyleButton", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_FilledButton.js
var import_bindings37 = require("@flax/core/bindings");
var import_flutter_Key9 = require("@flax/flutter/foundation");
var import_flutter_FocusNode3 = require("@flax/flutter/widgets");
var import_flutter_Clip6 = require("@flax/flutter/widgets");
var import_flutter_AlignmentGeometry4 = require("@flax/flutter/widgets");
var import_flutter_Duration7 = require("@flax/dart/core");
var import_flutter_BuildContext9 = require("@flax/flutter/widgets");
var import_flutter_WidgetState3 = require("@flax/flutter/widgets");
var import_flutter_Color15 = require("@flax/flutter/services");
var import_flutter_MouseCursor4 = require("@flax/flutter/services");
var import_flutter_Size4 = require("@flax/flutter/services");
var import_flutter_EdgeInsetsGeometry8 = require("@flax/flutter/widgets");
var import_flutter_OutlinedBorder4 = require("@flax/flutter/widgets");
var import_flutter_BorderSide5 = require("@flax/flutter/widgets");
var import_flutter_TextStyle7 = require("@flax/flutter/widgets");
var import_bindings38 = require("@flax/core/bindings");
function _FilledButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:FilledButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
(function(_FilledButtonFactory2) {
  function icon(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FilledButton", "icon", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "label", "required": true, "positional": false }], [], options);
  }
  _FilledButtonFactory2.icon = icon;
})(_FilledButtonFactory || (_FilledButtonFactory = {}));
(function(_FilledButtonFactory2) {
  function tonal(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FilledButton", "tonal", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
  }
  _FilledButtonFactory2.tonal = tonal;
})(_FilledButtonFactory || (_FilledButtonFactory = {}));
(function(_FilledButtonFactory2) {
  function tonalIcon(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FilledButton", "tonalIcon", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "label", "required": true, "positional": false }], [], options);
  }
  _FilledButtonFactory2.tonalIcon = tonalIcon;
})(_FilledButtonFactory || (_FilledButtonFactory = {}));
(function(_FilledButtonFactory2) {
  function styleFrom(options = {}) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["alignment", "animationDuration", "backgroundBuilder", "backgroundColor", "disabledBackgroundColor", "disabledForegroundColor", "disabledIconColor", "disabledMouseCursor", "elevation", "enableFeedback", "enabledMouseCursor", "fixedSize", "foregroundBuilder", "foregroundColor", "iconColor", "iconSize", "maximumSize", "minimumSize", "overlayColor", "padding", "shadowColor", "shape", "side", "surfaceTintColor", "textStyle", "visualDensity"].includes(k)))
      throw new TypeError("Invalid named method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:FilledButton.styleFrom", [options.alignment, options.animationDuration, options.backgroundBuilder, options.backgroundColor, options.disabledBackgroundColor, options.disabledForegroundColor, options.disabledIconColor, options.disabledMouseCursor, options.elevation, options.enableFeedback, options.enabledMouseCursor, options.fixedSize, options.foregroundBuilder, options.foregroundColor, options.iconColor, options.iconSize, options.maximumSize, options.minimumSize, options.overlayColor, options.padding, options.shadowColor, options.shape, options.side, options.surfaceTintColor, options.textStyle, options.visualDensity]);
    return _flaxResult;
  }
  _FilledButtonFactory2.styleFrom = styleFrom;
})(_FilledButtonFactory || (_FilledButtonFactory = {}));
var FilledButton = _flaxBindInstanceType(_FilledButtonFactory, "flax.material/material#type:FilledButton", ["package:material_ui/src/button_style_button.dart::ButtonStyleButton", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_FloatingActionButton.js
var import_bindings39 = require("@flax/core/bindings");
var import_flutter_Key10 = require("@flax/flutter/foundation");
var import_flutter_Color16 = require("@flax/flutter/services");
var import_flutter_MouseCursor5 = require("@flax/flutter/services");
var import_flutter_ShapeBorder5 = require("@flax/flutter/widgets");
var import_flutter_Clip7 = require("@flax/flutter/widgets");
var import_flutter_FocusNode4 = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry9 = require("@flax/flutter/widgets");
var import_flutter_TextStyle8 = require("@flax/flutter/widgets");
var import_bindings40 = require("@flax/core/bindings");
function _FloatingActionButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:FloatingActionButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "heroTag", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "focusElevation", "required": false, "positional": false }, { "name": "hoverElevation", "required": false, "positional": false }, { "name": "highlightElevation", "required": false, "positional": false }, { "name": "disabledElevation", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "mini", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "isExtended", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }], [], options);
}
(function(_FloatingActionButtonFactory2) {
  function small(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FloatingActionButton", "small", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "heroTag", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "focusElevation", "required": false, "positional": false }, { "name": "hoverElevation", "required": false, "positional": false }, { "name": "highlightElevation", "required": false, "positional": false }, { "name": "disabledElevation", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }], [], options);
  }
  _FloatingActionButtonFactory2.small = small;
})(_FloatingActionButtonFactory || (_FloatingActionButtonFactory = {}));
(function(_FloatingActionButtonFactory2) {
  function large(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FloatingActionButton", "large", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "heroTag", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "focusElevation", "required": false, "positional": false }, { "name": "hoverElevation", "required": false, "positional": false }, { "name": "highlightElevation", "required": false, "positional": false }, { "name": "disabledElevation", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }], [], options);
  }
  _FloatingActionButtonFactory2.large = large;
})(_FloatingActionButtonFactory || (_FloatingActionButtonFactory = {}));
(function(_FloatingActionButtonFactory2) {
  function extended(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FloatingActionButton", "extended", [{ "name": "key", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "heroTag", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "focusElevation", "required": false, "positional": false }, { "name": "hoverElevation", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "highlightElevation", "required": false, "positional": false }, { "name": "disabledElevation", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "isExtended", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "extendedIconLabelSpacing", "required": false, "positional": false }, { "name": "extendedPadding", "required": false, "positional": false }, { "name": "extendedTextStyle", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "label", "required": true, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }], [], options);
  }
  _FloatingActionButtonFactory2.extended = extended;
})(_FloatingActionButtonFactory || (_FloatingActionButtonFactory = {}));
var FloatingActionButton = _flaxBindInstanceType(_FloatingActionButtonFactory, "flax.material/material#type:FloatingActionButton", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_IconButton.js
var import_bindings41 = require("@flax/core/bindings");
var import_flutter_Key11 = require("@flax/flutter/foundation");
var import_flutter_EdgeInsetsGeometry10 = require("@flax/flutter/widgets");
var import_flutter_AlignmentGeometry5 = require("@flax/flutter/widgets");
var import_flutter_Color17 = require("@flax/flutter/services");
var import_flutter_MouseCursor6 = require("@flax/flutter/services");
var import_flutter_FocusNode5 = require("@flax/flutter/widgets");
var import_flutter_BoxConstraints5 = require("@flax/flutter/widgets");
var import_flutter_Duration8 = require("@flax/dart/core");
var import_flutter_Size5 = require("@flax/flutter/services");
var import_flutter_OutlinedBorder5 = require("@flax/flutter/widgets");
var import_flutter_BorderSide6 = require("@flax/flutter/widgets");
var import_bindings42 = require("@flax/core/bindings");
function _IconButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:IconButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "splashRadius", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "highlightColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "isSelected", "required": false, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }], [], options);
}
(function(_IconButtonFactory2) {
  function filled(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:IconButton", "filled", [{ "name": "key", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "splashRadius", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "highlightColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "isSelected", "required": false, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }], [], options);
  }
  _IconButtonFactory2.filled = filled;
})(_IconButtonFactory || (_IconButtonFactory = {}));
(function(_IconButtonFactory2) {
  function filledTonal(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:IconButton", "filledTonal", [{ "name": "key", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "splashRadius", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "highlightColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "isSelected", "required": false, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }], [], options);
  }
  _IconButtonFactory2.filledTonal = filledTonal;
})(_IconButtonFactory || (_IconButtonFactory = {}));
(function(_IconButtonFactory2) {
  function outlined(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:IconButton", "outlined", [{ "name": "key", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "splashRadius", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "highlightColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }, { "name": "constraints", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "isSelected", "required": false, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }], [], options);
  }
  _IconButtonFactory2.outlined = outlined;
})(_IconButtonFactory || (_IconButtonFactory = {}));
(function(_IconButtonFactory2) {
  function styleFrom(options = {}) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["alignment", "animationDuration", "backgroundColor", "disabledBackgroundColor", "disabledForegroundColor", "disabledMouseCursor", "elevation", "enableFeedback", "enabledMouseCursor", "fixedSize", "focusColor", "foregroundColor", "highlightColor", "hoverColor", "iconSize", "maximumSize", "minimumSize", "overlayColor", "padding", "shadowColor", "shape", "side", "surfaceTintColor", "visualDensity"].includes(k)))
      throw new TypeError("Invalid named method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:IconButton.styleFrom", [options.alignment, options.animationDuration, options.backgroundColor, options.disabledBackgroundColor, options.disabledForegroundColor, options.disabledMouseCursor, options.elevation, options.enableFeedback, options.enabledMouseCursor, options.fixedSize, options.focusColor, options.foregroundColor, options.highlightColor, options.hoverColor, options.iconSize, options.maximumSize, options.minimumSize, options.overlayColor, options.padding, options.shadowColor, options.shape, options.side, options.surfaceTintColor, options.visualDensity]);
    return _flaxResult;
  }
  _IconButtonFactory2.styleFrom = styleFrom;
})(_IconButtonFactory || (_IconButtonFactory = {}));
var IconButton = _flaxBindInstanceType(_IconButtonFactory, "flax.material/material#type:IconButton", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_InkWell.js
var import_bindings43 = require("@flax/core/bindings");
var import_flutter_Key12 = require("@flax/flutter/foundation");
var import_flutter_MouseCursor7 = require("@flax/flutter/services");
var import_flutter_Color18 = require("@flax/flutter/services");
var import_flutter_WidgetStateProperty3 = require("@flax/flutter/widgets");
var import_flutter_BorderRadius = require("@flax/flutter/widgets");
var import_flutter_ShapeBorder6 = require("@flax/flutter/widgets");
var import_flutter_FocusNode6 = require("@flax/flutter/widgets");
var import_flutter_Duration9 = require("@flax/dart/core");
var import_bindings44 = require("@flax/core/bindings");
function _InkWellFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:InkWell", "", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "onTap", "required": false, "positional": false }, { "name": "onDoubleTap", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onLongPressUp", "required": false, "positional": false }, { "name": "onTapCancel", "required": false, "positional": false }, { "name": "onSecondaryTap", "required": false, "positional": false }, { "name": "onSecondaryTapCancel", "required": false, "positional": false }, { "name": "onHighlightChanged", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "highlightColor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "radius", "required": false, "positional": false }, { "name": "borderRadius", "required": false, "positional": false }, { "name": "customBorder", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }, { "name": "excludeFromSemantics", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "canRequestFocus", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "hoverDuration", "required": false, "positional": false }], [], options);
}
var InkWell = _flaxBindInstanceType(_InkWellFactory, "flax.material/material#type:InkWell", ["package:material_ui/src/ink_well.dart::InkResponse", "package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_LinearProgressIndicator.js
var import_bindings45 = require("@flax/core/bindings");
var import_flutter_Key13 = require("@flax/flutter/foundation");
var import_flutter_Color19 = require("@flax/flutter/services");
var import_flutter_BorderRadiusGeometry2 = require("@flax/flutter/widgets");
var import_flutter_Duration10 = require("@flax/dart/core");
var import_bindings46 = require("@flax/core/bindings");
function _LinearProgressIndicatorFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:LinearProgressIndicator", "", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "minHeight", "required": false, "positional": false }, { "name": "semanticsLabel", "required": false, "positional": false }, { "name": "semanticsValue", "required": false, "positional": false }, { "name": "borderRadius", "required": false, "positional": false }, { "name": "stopIndicatorColor", "required": false, "positional": false }, { "name": "stopIndicatorRadius", "required": false, "positional": false }, { "name": "trackGap", "required": false, "positional": false }, { "name": "year2023", "required": false, "positional": false }], [], options);
}
/* @__PURE__ */ (function(_LinearProgressIndicatorFactory2) {
})(_LinearProgressIndicatorFactory || (_LinearProgressIndicatorFactory = {}));
Object.defineProperty(_LinearProgressIndicatorFactory, "defaultAnimationDuration", { get: () => invokeTopLevel("flax.material/material#read:LinearProgressIndicator.defaultAnimationDuration", []) });
var LinearProgressIndicator = _flaxBindInstanceType(_LinearProgressIndicatorFactory, "flax.material/material#type:LinearProgressIndicator", ["package:material_ui/src/progress_indicator.dart::ProgressIndicator", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ListTile.js
var import_bindings49 = require("@flax/core/bindings");
var import_flutter_Key14 = require("@flax/flutter/foundation");
var import_flutter_ShapeBorder7 = require("@flax/flutter/widgets");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ListTileStyle.js
var import_bindings47 = require("@flax/core/bindings");
var import_bindings48 = require("@flax/core/bindings");
defineEnum("flax.material/material#type:ListTileStyle", ["list", "drawer"]);
var _flaxEnum_ListTileStyle_api = {
  list: enumValue("flax.material/material#type:ListTileStyle", "list"),
  drawer: enumValue("flax.material/material#type:ListTileStyle", "drawer"),
  values: Object.freeze([enumValue("flax.material/material#type:ListTileStyle", "list"), enumValue("flax.material/material#type:ListTileStyle", "drawer")])
};
var ListTileStyle = Object.freeze(_flaxBindInstanceType(_flaxEnum_ListTileStyle_api, "flax.material/material#type:ListTileStyle", []));

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ListTile.js
var import_flutter_Color20 = require("@flax/flutter/services");
var import_flutter_TextStyle9 = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry11 = require("@flax/flutter/widgets");
var import_flutter_MouseCursor8 = require("@flax/flutter/services");
var import_flutter_FocusNode7 = require("@flax/flutter/widgets");
var import_flutter_BuildContext10 = require("@flax/flutter/widgets");
var import_bindings50 = require("@flax/core/bindings");
function _ListTileFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:ListTile", "", [{ "name": "key", "required": false, "positional": false }, { "name": "leading", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "subtitle", "required": false, "positional": false }, { "name": "trailing", "required": false, "positional": false }, { "name": "isThreeLine", "required": false, "positional": false }, { "name": "dense", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "selectedColor", "required": false, "positional": false }, { "name": "iconColor", "required": false, "positional": false }, { "name": "textColor", "required": false, "positional": false }, { "name": "titleTextStyle", "required": false, "positional": false }, { "name": "subtitleTextStyle", "required": false, "positional": false }, { "name": "leadingAndTrailingTextStyle", "required": false, "positional": false }, { "name": "contentPadding", "required": false, "positional": false }, { "name": "enabled", "required": false, "positional": false }, { "name": "onTap", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "selected", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "tileColor", "required": false, "positional": false }, { "name": "selectedTileColor", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }, { "name": "horizontalTitleGap", "required": false, "positional": false }, { "name": "minVerticalPadding", "required": false, "positional": false }, { "name": "minLeadingWidth", "required": false, "positional": false }, { "name": "minTileHeight", "required": false, "positional": false }, { "name": "internalAddSemanticForOnTap", "required": false, "positional": false }], [], options);
}
(function(_ListTileFactory2) {
  function divideTiles(options) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["color", "context", "tiles"].includes(k)))
      throw new TypeError("Invalid named method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:ListTile.divideTiles", [options.color, contextHandle(options.context, "flax.core/flutter#type:BuildContext"), options.tiles]);
    return _flaxResult;
  }
  _ListTileFactory2.divideTiles = divideTiles;
})(_ListTileFactory || (_ListTileFactory = {}));
var ListTile = _flaxBindInstanceType(_ListTileFactory, "flax.material/material#type:ListTile", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Material.js
var import_bindings53 = require("@flax/core/bindings");
var import_flutter_Key15 = require("@flax/flutter/foundation");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_MaterialType.js
var import_bindings51 = require("@flax/core/bindings");
var import_bindings52 = require("@flax/core/bindings");
defineEnum("flax.material/material#type:MaterialType", ["canvas", "card", "circle", "button", "transparency"]);
var _flaxEnum_MaterialType_api = {
  canvas: enumValue("flax.material/material#type:MaterialType", "canvas"),
  card: enumValue("flax.material/material#type:MaterialType", "card"),
  circle: enumValue("flax.material/material#type:MaterialType", "circle"),
  button: enumValue("flax.material/material#type:MaterialType", "button"),
  transparency: enumValue("flax.material/material#type:MaterialType", "transparency"),
  values: Object.freeze([enumValue("flax.material/material#type:MaterialType", "canvas"), enumValue("flax.material/material#type:MaterialType", "card"), enumValue("flax.material/material#type:MaterialType", "circle"), enumValue("flax.material/material#type:MaterialType", "button"), enumValue("flax.material/material#type:MaterialType", "transparency")])
};
var MaterialType = Object.freeze(_flaxBindInstanceType(_flaxEnum_MaterialType_api, "flax.material/material#type:MaterialType", []));

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Material.js
var import_flutter_Color21 = require("@flax/flutter/services");
var import_flutter_TextStyle10 = require("@flax/flutter/widgets");
var import_flutter_BorderRadiusGeometry3 = require("@flax/flutter/widgets");
var import_flutter_ShapeBorder8 = require("@flax/flutter/widgets");
var import_flutter_Clip8 = require("@flax/flutter/widgets");
var import_flutter_Duration11 = require("@flax/dart/core");
var import_bindings54 = require("@flax/core/bindings");
function _MaterialFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Material", "", [{ "name": "key", "required": false, "positional": false }, { "name": "type", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "textStyle", "required": false, "positional": false }, { "name": "borderRadius", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "borderOnForeground", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "animationDuration", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "animateColor", "required": false, "positional": false }], [], options);
}
/* @__PURE__ */ (function(_MaterialFactory2) {
})(_MaterialFactory || (_MaterialFactory = {}));
Object.defineProperty(_MaterialFactory, "defaultSplashRadius", { get: () => invokeTopLevel("flax.material/material#read:Material.defaultSplashRadius", []) });
var Material = _flaxBindInstanceType(_MaterialFactory, "flax.material/material#type:Material", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_MaterialApp.js
var import_bindings57 = require("@flax/core/bindings");
var import_flutter_Key16 = require("@flax/flutter/foundation");
var import_flutter_BuildContext11 = require("@flax/flutter/widgets");
var import_flutter_Route3 = require("@flax/flutter/widgets");
var import_flutter_RouteSettings3 = require("@flax/flutter/widgets");
var import_flutter_NavigatorObserver = require("@flax/flutter/widgets");
var import_flutter_Color22 = require("@flax/flutter/services");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ThemeMode.js
var import_bindings55 = require("@flax/core/bindings");
var import_bindings56 = require("@flax/core/bindings");
defineEnum("flax.material/material#type:ThemeMode", ["system", "light", "dark"]);
var _flaxEnum_ThemeMode_api = {
  system: enumValue("flax.material/material#type:ThemeMode", "system"),
  light: enumValue("flax.material/material#type:ThemeMode", "light"),
  dark: enumValue("flax.material/material#type:ThemeMode", "dark"),
  values: Object.freeze([enumValue("flax.material/material#type:ThemeMode", "system"), enumValue("flax.material/material#type:ThemeMode", "light"), enumValue("flax.material/material#type:ThemeMode", "dark")])
};
var ThemeMode = Object.freeze(_flaxBindInstanceType(_flaxEnum_ThemeMode_api, "flax.material/material#type:ThemeMode", []));

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_MaterialApp.js
var import_flutter_Duration12 = require("@flax/dart/core");
var import_flutter_Curve3 = require("@flax/flutter/widgets");
var import_bindings58 = require("@flax/core/bindings");
function _MaterialAppFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:MaterialApp", "", [{ "name": "key", "required": false, "positional": false }, { "name": "home", "required": false, "positional": false }, { "name": "routes", "required": false, "positional": false }, { "name": "initialRoute", "required": false, "positional": false }, { "name": "onGenerateRoute", "required": false, "positional": false }, { "name": "onGenerateInitialRoutes", "required": false, "positional": false }, { "name": "onUnknownRoute", "required": false, "positional": false }, { "name": "navigatorObservers", "required": false, "positional": false }, { "name": "builder", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "onGenerateTitle", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "theme", "required": false, "positional": false }, { "name": "darkTheme", "required": false, "positional": false }, { "name": "highContrastTheme", "required": false, "positional": false }, { "name": "highContrastDarkTheme", "required": false, "positional": false }, { "name": "themeMode", "required": false, "positional": false }, { "name": "themeAnimationDuration", "required": false, "positional": false }, { "name": "themeAnimationCurve", "required": false, "positional": false }, { "name": "debugShowMaterialGrid", "required": false, "positional": false }, { "name": "showPerformanceOverlay", "required": false, "positional": false }, { "name": "checkerboardRasterCacheImages", "required": false, "positional": false }, { "name": "checkerboardOffscreenLayers", "required": false, "positional": false }, { "name": "showSemanticsDebugger", "required": false, "positional": false }, { "name": "debugShowCheckedModeBanner", "required": false, "positional": false }, { "name": "restorationScopeId", "required": false, "positional": false }, { "name": "useInheritedMediaQuery", "required": false, "positional": false }], [], options);
}
(function(_MaterialAppFactory2) {
  function router(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:MaterialApp", "router", [{ "name": "key", "required": false, "positional": false }, { "name": "builder", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "onGenerateTitle", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "theme", "required": false, "positional": false }, { "name": "darkTheme", "required": false, "positional": false }, { "name": "highContrastTheme", "required": false, "positional": false }, { "name": "highContrastDarkTheme", "required": false, "positional": false }, { "name": "themeMode", "required": false, "positional": false }, { "name": "themeAnimationDuration", "required": false, "positional": false }, { "name": "themeAnimationCurve", "required": false, "positional": false }, { "name": "debugShowMaterialGrid", "required": false, "positional": false }, { "name": "showPerformanceOverlay", "required": false, "positional": false }, { "name": "checkerboardRasterCacheImages", "required": false, "positional": false }, { "name": "checkerboardOffscreenLayers", "required": false, "positional": false }, { "name": "showSemanticsDebugger", "required": false, "positional": false }, { "name": "debugShowCheckedModeBanner", "required": false, "positional": false }, { "name": "restorationScopeId", "required": false, "positional": false }, { "name": "useInheritedMediaQuery", "required": false, "positional": false }], [], options);
  }
  _MaterialAppFactory2.router = router;
})(_MaterialAppFactory || (_MaterialAppFactory = {}));
var MaterialApp = _flaxBindInstanceType(_MaterialAppFactory, "flax.material/material#type:MaterialApp", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_NavigationBar.js
var import_bindings61 = require("@flax/core/bindings");
var import_flutter_Key17 = require("@flax/flutter/foundation");
var import_flutter_Duration13 = require("@flax/dart/core");
var import_flutter_Color23 = require("@flax/flutter/services");
var import_flutter_ShapeBorder9 = require("@flax/flutter/widgets");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_NavigationDestinationLabelBehavior.js
var import_bindings59 = require("@flax/core/bindings");
var import_bindings60 = require("@flax/core/bindings");
defineEnum("flax.material/material#type:NavigationDestinationLabelBehavior", ["alwaysShow", "alwaysHide", "onlyShowSelected"]);
var _flaxEnum_NavigationDestinationLabelBehavior_api = {
  alwaysShow: enumValue("flax.material/material#type:NavigationDestinationLabelBehavior", "alwaysShow"),
  alwaysHide: enumValue("flax.material/material#type:NavigationDestinationLabelBehavior", "alwaysHide"),
  onlyShowSelected: enumValue("flax.material/material#type:NavigationDestinationLabelBehavior", "onlyShowSelected"),
  values: Object.freeze([enumValue("flax.material/material#type:NavigationDestinationLabelBehavior", "alwaysShow"), enumValue("flax.material/material#type:NavigationDestinationLabelBehavior", "alwaysHide"), enumValue("flax.material/material#type:NavigationDestinationLabelBehavior", "onlyShowSelected")])
};
var NavigationDestinationLabelBehavior = Object.freeze(_flaxBindInstanceType(_flaxEnum_NavigationDestinationLabelBehavior_api, "flax.material/material#type:NavigationDestinationLabelBehavior", []));

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_NavigationBar.js
var import_flutter_WidgetStateProperty4 = require("@flax/flutter/widgets");
var import_flutter_TextStyle11 = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry12 = require("@flax/flutter/widgets");
var import_bindings62 = require("@flax/core/bindings");
function _NavigationBarFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:NavigationBar", "", [{ "name": "key", "required": false, "positional": false }, { "name": "animationDuration", "required": false, "positional": false }, { "name": "selectedIndex", "required": false, "positional": false }, { "name": "destinations", "required": true, "positional": false }, { "name": "onDestinationSelected", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "indicatorColor", "required": false, "positional": false }, { "name": "indicatorShape", "required": false, "positional": false }, { "name": "height", "required": false, "positional": false }, { "name": "labelBehavior", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "labelTextStyle", "required": false, "positional": false }, { "name": "labelPadding", "required": false, "positional": false }, { "name": "maintainBottomViewPadding", "required": false, "positional": false }], [], options);
}
var NavigationBar = _flaxBindInstanceType(_NavigationBarFactory, "flax.material/material#type:NavigationBar", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_NavigationDestination.js
var import_bindings63 = require("@flax/core/bindings");
var import_flutter_Key18 = require("@flax/flutter/foundation");
var import_bindings64 = require("@flax/core/bindings");
function _NavigationDestinationFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:NavigationDestination", "", [{ "name": "key", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "label", "required": true, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "enabled", "required": false, "positional": false }], [], options);
}
var NavigationDestination = _flaxBindInstanceType(_NavigationDestinationFactory, "flax.material/material#type:NavigationDestination", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_OutlinedButton.js
var import_bindings65 = require("@flax/core/bindings");
var import_flutter_Key19 = require("@flax/flutter/foundation");
var import_flutter_FocusNode8 = require("@flax/flutter/widgets");
var import_flutter_Clip9 = require("@flax/flutter/widgets");
var import_flutter_AlignmentGeometry6 = require("@flax/flutter/widgets");
var import_flutter_Duration14 = require("@flax/dart/core");
var import_flutter_BuildContext12 = require("@flax/flutter/widgets");
var import_flutter_WidgetState4 = require("@flax/flutter/widgets");
var import_flutter_Color24 = require("@flax/flutter/services");
var import_flutter_MouseCursor9 = require("@flax/flutter/services");
var import_flutter_Size6 = require("@flax/flutter/services");
var import_flutter_EdgeInsetsGeometry13 = require("@flax/flutter/widgets");
var import_flutter_OutlinedBorder6 = require("@flax/flutter/widgets");
var import_flutter_BorderSide7 = require("@flax/flutter/widgets");
var import_flutter_TextStyle12 = require("@flax/flutter/widgets");
var import_bindings66 = require("@flax/core/bindings");
function _OutlinedButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:OutlinedButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
(function(_OutlinedButtonFactory2) {
  function icon(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:OutlinedButton", "icon", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "label", "required": true, "positional": false }], [], options);
  }
  _OutlinedButtonFactory2.icon = icon;
})(_OutlinedButtonFactory || (_OutlinedButtonFactory = {}));
(function(_OutlinedButtonFactory2) {
  function styleFrom(options = {}) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["alignment", "animationDuration", "backgroundBuilder", "backgroundColor", "disabledBackgroundColor", "disabledForegroundColor", "disabledIconColor", "disabledMouseCursor", "elevation", "enableFeedback", "enabledMouseCursor", "fixedSize", "foregroundBuilder", "foregroundColor", "iconColor", "iconSize", "maximumSize", "minimumSize", "overlayColor", "padding", "shadowColor", "shape", "side", "surfaceTintColor", "textStyle", "visualDensity"].includes(k)))
      throw new TypeError("Invalid named method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:OutlinedButton.styleFrom", [options.alignment, options.animationDuration, options.backgroundBuilder, options.backgroundColor, options.disabledBackgroundColor, options.disabledForegroundColor, options.disabledIconColor, options.disabledMouseCursor, options.elevation, options.enableFeedback, options.enabledMouseCursor, options.fixedSize, options.foregroundBuilder, options.foregroundColor, options.iconColor, options.iconSize, options.maximumSize, options.minimumSize, options.overlayColor, options.padding, options.shadowColor, options.shape, options.side, options.surfaceTintColor, options.textStyle, options.visualDensity]);
    return _flaxResult;
  }
  _OutlinedButtonFactory2.styleFrom = styleFrom;
})(_OutlinedButtonFactory || (_OutlinedButtonFactory = {}));
var OutlinedButton = _flaxBindInstanceType(_OutlinedButtonFactory, "flax.material/material#type:OutlinedButton", ["package:material_ui/src/button_style_button.dart::ButtonStyleButton", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_RefreshIndicator.js
var import_bindings67 = require("@flax/core/bindings");
var import_flutter_Key20 = require("@flax/flutter/foundation");
var import_flutter_Color25 = require("@flax/flutter/services");
var import_bindings68 = require("@flax/core/bindings");
function _RefreshIndicatorFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:RefreshIndicator", "", [{ "name": "key", "required": false, "positional": false }, { "name": "displacement", "required": false, "positional": false }, { "name": "edgeOffset", "required": false, "positional": false }, { "name": "onRefresh", "required": true, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "semanticsLabel", "required": false, "positional": false }, { "name": "semanticsValue", "required": false, "positional": false }, { "name": "strokeWidth", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
(function(_RefreshIndicatorFactory2) {
  function adaptive(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:RefreshIndicator", "adaptive", [{ "name": "key", "required": false, "positional": false }, { "name": "displacement", "required": false, "positional": false }, { "name": "edgeOffset", "required": false, "positional": false }, { "name": "onRefresh", "required": true, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "semanticsLabel", "required": false, "positional": false }, { "name": "semanticsValue", "required": false, "positional": false }, { "name": "strokeWidth", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
  }
  _RefreshIndicatorFactory2.adaptive = adaptive;
})(_RefreshIndicatorFactory || (_RefreshIndicatorFactory = {}));
(function(_RefreshIndicatorFactory2) {
  function noSpinner(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:RefreshIndicator", "noSpinner", [{ "name": "key", "required": false, "positional": false }, { "name": "onRefresh", "required": true, "positional": false }, { "name": "semanticsLabel", "required": false, "positional": false }, { "name": "semanticsValue", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
  }
  _RefreshIndicatorFactory2.noSpinner = noSpinner;
})(_RefreshIndicatorFactory || (_RefreshIndicatorFactory = {}));
var RefreshIndicator = _flaxBindInstanceType(_RefreshIndicatorFactory, "flax.material/material#type:RefreshIndicator", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Scaffold.js
var import_bindings69 = require("@flax/core/bindings");
var import_flutter_Key21 = require("@flax/flutter/foundation");
var import_flutter_PreferredSizeWidget2 = require("@flax/flutter/widgets");
var import_flutter_AlignmentDirectional = require("@flax/flutter/widgets");
var import_flutter_BoxDecoration = require("@flax/flutter/widgets");
var import_flutter_Color26 = require("@flax/flutter/services");
var import_flutter_DragStartBehavior = require("@flax/flutter/gestures");
var import_flutter_BuildContext13 = require("@flax/flutter/widgets");
var import_bindings70 = require("@flax/core/bindings");
function _ScaffoldFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Scaffold", "", [{ "name": "key", "required": false, "positional": false }, { "name": "appBar", "required": false, "positional": false }, { "name": "body", "required": false, "positional": false }, { "name": "floatingActionButton", "required": false, "positional": false }, { "name": "persistentFooterButtons", "required": false, "positional": false }, { "name": "persistentFooterAlignment", "required": false, "positional": false }, { "name": "persistentFooterDecoration", "required": false, "positional": false }, { "name": "drawer", "required": false, "positional": false }, { "name": "onDrawerChanged", "required": false, "positional": false }, { "name": "endDrawer", "required": false, "positional": false }, { "name": "onEndDrawerChanged", "required": false, "positional": false }, { "name": "bottomNavigationBar", "required": false, "positional": false }, { "name": "bottomSheet", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "resizeToAvoidBottomInset", "required": false, "positional": false }, { "name": "primary", "required": false, "positional": false }, { "name": "drawerDragStartBehavior", "required": false, "positional": false }, { "name": "extendBody", "required": false, "positional": false }, { "name": "drawerBarrierDismissible", "required": false, "positional": false }, { "name": "extendBodyBehindAppBar", "required": false, "positional": false }, { "name": "drawerScrimColor", "required": false, "positional": false }, { "name": "drawerEdgeDragWidth", "required": false, "positional": false }, { "name": "drawerEnableOpenDragGesture", "required": false, "positional": false }, { "name": "endDrawerEnableOpenDragGesture", "required": false, "positional": false }, { "name": "restorationId", "required": false, "positional": false }], [], options);
}
(function(_ScaffoldFactory2) {
  function hasDrawer(context, options = {}) {
    if (arguments.length > 2)
      throw new TypeError("Too many method arguments");
    if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["registerForUpdates"].includes(k)))
      throw new TypeError("Invalid named method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:Scaffold.hasDrawer", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.registerForUpdates]);
    return _flaxResult;
  }
  _ScaffoldFactory2.hasDrawer = hasDrawer;
})(_ScaffoldFactory || (_ScaffoldFactory = {}));
var Scaffold = _flaxBindInstanceType(_ScaffoldFactory, "flax.material/material#type:Scaffold", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Switch.js
var import_bindings71 = require("@flax/core/bindings");
var import_flutter_Key22 = require("@flax/flutter/foundation");
var import_flutter_Color27 = require("@flax/flutter/services");
var import_flutter_StackTrace = require("@flax/dart/core");
var import_flutter_WidgetStateProperty5 = require("@flax/flutter/widgets");
var import_flutter_DragStartBehavior2 = require("@flax/flutter/gestures");
var import_flutter_MouseCursor10 = require("@flax/flutter/services");
var import_flutter_FocusNode9 = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry14 = require("@flax/flutter/widgets");
var import_bindings72 = require("@flax/core/bindings");
function _SwitchFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Switch", "", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": true, "positional": false }, { "name": "onChanged", "required": true, "positional": false }, { "name": "activeColor", "required": false, "positional": false }, { "name": "activeThumbColor", "required": false, "positional": false }, { "name": "activeTrackColor", "required": false, "positional": false }, { "name": "inactiveThumbColor", "required": false, "positional": false }, { "name": "inactiveTrackColor", "required": false, "positional": false }, { "name": "onActiveThumbImageError", "required": false, "positional": false }, { "name": "onInactiveThumbImageError", "required": false, "positional": false }, { "name": "thumbColor", "required": false, "positional": false }, { "name": "trackColor", "required": false, "positional": false }, { "name": "trackOutlineColor", "required": false, "positional": false }, { "name": "trackOutlineWidth", "required": false, "positional": false }, { "name": "dragStartBehavior", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "splashRadius", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }], [], options);
}
(function(_SwitchFactory2) {
  function adaptive(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:Switch", "adaptive", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": true, "positional": false }, { "name": "onChanged", "required": true, "positional": false }, { "name": "activeColor", "required": false, "positional": false }, { "name": "activeThumbColor", "required": false, "positional": false }, { "name": "activeTrackColor", "required": false, "positional": false }, { "name": "inactiveThumbColor", "required": false, "positional": false }, { "name": "inactiveTrackColor", "required": false, "positional": false }, { "name": "onActiveThumbImageError", "required": false, "positional": false }, { "name": "onInactiveThumbImageError", "required": false, "positional": false }, { "name": "thumbColor", "required": false, "positional": false }, { "name": "trackColor", "required": false, "positional": false }, { "name": "trackOutlineColor", "required": false, "positional": false }, { "name": "trackOutlineWidth", "required": false, "positional": false }, { "name": "dragStartBehavior", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "splashRadius", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "applyCupertinoTheme", "required": false, "positional": false }], [], options);
  }
  _SwitchFactory2.adaptive = adaptive;
})(_SwitchFactory || (_SwitchFactory = {}));
var Switch = _flaxBindInstanceType(_SwitchFactory, "flax.material/material#type:Switch", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_TextButton.js
var import_bindings73 = require("@flax/core/bindings");
var import_flutter_Key23 = require("@flax/flutter/foundation");
var import_flutter_FocusNode10 = require("@flax/flutter/widgets");
var import_flutter_Clip10 = require("@flax/flutter/widgets");
var import_flutter_AlignmentGeometry7 = require("@flax/flutter/widgets");
var import_flutter_Duration15 = require("@flax/dart/core");
var import_flutter_BuildContext14 = require("@flax/flutter/widgets");
var import_flutter_WidgetState5 = require("@flax/flutter/widgets");
var import_flutter_Color28 = require("@flax/flutter/services");
var import_flutter_MouseCursor11 = require("@flax/flutter/services");
var import_flutter_Size7 = require("@flax/flutter/services");
var import_flutter_EdgeInsetsGeometry15 = require("@flax/flutter/widgets");
var import_flutter_OutlinedBorder7 = require("@flax/flutter/widgets");
var import_flutter_BorderSide8 = require("@flax/flutter/widgets");
var import_flutter_TextStyle13 = require("@flax/flutter/widgets");
var import_bindings74 = require("@flax/core/bindings");
function _TextButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:TextButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "isSemanticButton", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
(function(_TextButtonFactory2) {
  function icon(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:TextButton", "icon", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "label", "required": true, "positional": false }], [], options);
  }
  _TextButtonFactory2.icon = icon;
})(_TextButtonFactory || (_TextButtonFactory = {}));
(function(_TextButtonFactory2) {
  function styleFrom(options = {}) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["alignment", "animationDuration", "backgroundBuilder", "backgroundColor", "disabledBackgroundColor", "disabledForegroundColor", "disabledIconColor", "disabledMouseCursor", "elevation", "enableFeedback", "enabledMouseCursor", "fixedSize", "foregroundBuilder", "foregroundColor", "iconColor", "iconSize", "maximumSize", "minimumSize", "overlayColor", "padding", "shadowColor", "shape", "side", "surfaceTintColor", "textStyle", "visualDensity"].includes(k)))
      throw new TypeError("Invalid named method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:TextButton.styleFrom", [options.alignment, options.animationDuration, options.backgroundBuilder, options.backgroundColor, options.disabledBackgroundColor, options.disabledForegroundColor, options.disabledIconColor, options.disabledMouseCursor, options.elevation, options.enableFeedback, options.enabledMouseCursor, options.fixedSize, options.foregroundBuilder, options.foregroundColor, options.iconColor, options.iconSize, options.maximumSize, options.minimumSize, options.overlayColor, options.padding, options.shadowColor, options.shape, options.side, options.surfaceTintColor, options.textStyle, options.visualDensity]);
    return _flaxResult;
  }
  _TextButtonFactory2.styleFrom = styleFrom;
})(_TextButtonFactory || (_TextButtonFactory = {}));
var TextButton = _flaxBindInstanceType(_TextButtonFactory, "flax.material/material#type:TextButton", ["package:material_ui/src/button_style_button.dart::ButtonStyleButton", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_TextField.js
var import_bindings77 = require("@flax/core/bindings");
var import_flutter_Key24 = require("@flax/flutter/foundation");
var import_flutter_TextEditingController = require("@flax/flutter/widgets");
var import_flutter_FocusNode11 = require("@flax/flutter/widgets");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_TextInputAction.js
var import_bindings75 = require("@flax/core/bindings");
var import_bindings76 = require("@flax/core/bindings");
defineEnum("flax.material/material#type:TextInputAction", ["none", "unspecified", "done", "go", "search", "send", "next", "previous", "continueAction", "join", "route", "emergencyCall", "newline"]);
var _flaxEnum_TextInputAction_api = {
  none: enumValue("flax.material/material#type:TextInputAction", "none"),
  unspecified: enumValue("flax.material/material#type:TextInputAction", "unspecified"),
  done: enumValue("flax.material/material#type:TextInputAction", "done"),
  go: enumValue("flax.material/material#type:TextInputAction", "go"),
  search: enumValue("flax.material/material#type:TextInputAction", "search"),
  send: enumValue("flax.material/material#type:TextInputAction", "send"),
  next: enumValue("flax.material/material#type:TextInputAction", "next"),
  previous: enumValue("flax.material/material#type:TextInputAction", "previous"),
  continueAction: enumValue("flax.material/material#type:TextInputAction", "continueAction"),
  join: enumValue("flax.material/material#type:TextInputAction", "join"),
  route: enumValue("flax.material/material#type:TextInputAction", "route"),
  emergencyCall: enumValue("flax.material/material#type:TextInputAction", "emergencyCall"),
  newline: enumValue("flax.material/material#type:TextInputAction", "newline"),
  values: Object.freeze([enumValue("flax.material/material#type:TextInputAction", "none"), enumValue("flax.material/material#type:TextInputAction", "unspecified"), enumValue("flax.material/material#type:TextInputAction", "done"), enumValue("flax.material/material#type:TextInputAction", "go"), enumValue("flax.material/material#type:TextInputAction", "search"), enumValue("flax.material/material#type:TextInputAction", "send"), enumValue("flax.material/material#type:TextInputAction", "next"), enumValue("flax.material/material#type:TextInputAction", "previous"), enumValue("flax.material/material#type:TextInputAction", "continueAction"), enumValue("flax.material/material#type:TextInputAction", "join"), enumValue("flax.material/material#type:TextInputAction", "route"), enumValue("flax.material/material#type:TextInputAction", "emergencyCall"), enumValue("flax.material/material#type:TextInputAction", "newline")])
};
var TextInputAction = Object.freeze(_flaxBindInstanceType(_flaxEnum_TextInputAction_api, "flax.material/material#type:TextInputAction", []));

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_TextField.js
var import_flutter_TextStyle14 = require("@flax/flutter/widgets");
var import_flutter_TextAlign = require("@flax/flutter/services");
var import_flutter_TextDirection2 = require("@flax/flutter/services");
var import_flutter_MaxLengthEnforcement = require("@flax/flutter/services");
var import_flutter_TextInputFormatter = require("@flax/flutter/services");
var import_flutter_Radius = require("@flax/flutter/widgets");
var import_flutter_Color29 = require("@flax/flutter/services");
var import_flutter_EdgeInsets2 = require("@flax/flutter/widgets");
var import_flutter_DragStartBehavior3 = require("@flax/flutter/gestures");
var import_flutter_MouseCursor12 = require("@flax/flutter/services");
var import_flutter_BuildContext15 = require("@flax/flutter/widgets");
var import_flutter_ScrollController2 = require("@flax/flutter/widgets");
var import_flutter_ScrollPhysics = require("@flax/flutter/widgets");
var import_flutter_Clip11 = require("@flax/flutter/widgets");
var import_bindings78 = require("@flax/core/bindings");
function _TextFieldFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:TextField", "", [{ "name": "key", "required": false, "positional": false }, { "name": "groupId", "required": false, "positional": false }, { "name": "controller", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "decoration", "required": false, "positional": false }, { "name": "textInputAction", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "textAlign", "required": false, "positional": false }, { "name": "textDirection", "required": false, "positional": false }, { "name": "readOnly", "required": false, "positional": false }, { "name": "showCursor", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "obscuringCharacter", "required": false, "positional": false }, { "name": "obscureText", "required": false, "positional": false }, { "name": "autocorrect", "required": false, "positional": false }, { "name": "enableSuggestions", "required": false, "positional": false }, { "name": "maxLines", "required": false, "positional": false }, { "name": "minLines", "required": false, "positional": false }, { "name": "expands", "required": false, "positional": false }, { "name": "maxLength", "required": false, "positional": false }, { "name": "maxLengthEnforcement", "required": false, "positional": false }, { "name": "onChanged", "required": false, "positional": false }, { "name": "onEditingComplete", "required": false, "positional": false }, { "name": "onSubmitted", "required": false, "positional": false }, { "name": "onAppPrivateCommand", "required": false, "positional": false }, { "name": "inputFormatters", "required": false, "positional": false }, { "name": "enabled", "required": false, "positional": false }, { "name": "ignorePointers", "required": false, "positional": false }, { "name": "cursorWidth", "required": false, "positional": false }, { "name": "cursorHeight", "required": false, "positional": false }, { "name": "cursorRadius", "required": false, "positional": false }, { "name": "cursorOpacityAnimates", "required": false, "positional": false }, { "name": "cursorColor", "required": false, "positional": false }, { "name": "cursorErrorColor", "required": false, "positional": false }, { "name": "keyboardAppearance", "required": false, "positional": false }, { "name": "scrollPadding", "required": false, "positional": false }, { "name": "dragStartBehavior", "required": false, "positional": false }, { "name": "enableInteractiveSelection", "required": false, "positional": false }, { "name": "selectAllOnFocus", "required": false, "positional": false }, { "name": "onTap", "required": false, "positional": false }, { "name": "onTapAlwaysCalled", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "buildCounter", "required": false, "positional": false }, { "name": "scrollController", "required": false, "positional": false }, { "name": "scrollPhysics", "required": false, "positional": false }, { "name": "autofillHints", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "restorationId", "required": false, "positional": false }, { "name": "scribbleEnabled", "required": false, "positional": false }, { "name": "stylusHandwritingEnabled", "required": false, "positional": false }, { "name": "enableIMEPersonalizedLearning", "required": false, "positional": false }, { "name": "enableInlinePrediction", "required": false, "positional": false }, { "name": "canRequestFocus", "required": false, "positional": false }], [], options);
}
/* @__PURE__ */ (function(_TextFieldFactory2) {
})(_TextFieldFactory || (_TextFieldFactory = {}));
Object.defineProperty(_TextFieldFactory, "noMaxLength", { get: () => invokeTopLevel("flax.material/material#read:TextField.noMaxLength", []) });
/* @__PURE__ */ (function(_TextFieldFactory2) {
})(_TextFieldFactory || (_TextFieldFactory = {}));
Object.defineProperty(_TextFieldFactory, "materialMisspelledTextStyle", { get: () => invokeTopLevel("flax.material/material#read:TextField.materialMisspelledTextStyle", []) });
var TextField = _flaxBindInstanceType(_TextFieldFactory, "flax.material/material#type:TextField", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Theme.js
var import_bindings79 = require("@flax/core/bindings");
var import_flutter_Key25 = require("@flax/flutter/foundation");
var import_flutter_BuildContext16 = require("@flax/flutter/widgets");
var import_bindings80 = require("@flax/core/bindings");
function _ThemeFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Theme", "", [{ "name": "key", "required": false, "positional": false }, { "name": "data", "required": true, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
(function(_ThemeFactory2) {
  function of(context) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:Theme.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
    return _flaxResult;
  }
  _ThemeFactory2.of = of;
})(_ThemeFactory || (_ThemeFactory = {}));
(function(_ThemeFactory2) {
  function brightnessOf(context) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:Theme.brightnessOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
    return _flaxResult;
  }
  _ThemeFactory2.brightnessOf = brightnessOf;
})(_ThemeFactory || (_ThemeFactory = {}));
(function(_ThemeFactory2) {
  function maybeBrightnessOf(context) {
    if (arguments.length > 1)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.material/material#function:Theme.maybeBrightnessOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
    return _flaxResult;
  }
  _ThemeFactory2.maybeBrightnessOf = maybeBrightnessOf;
})(_ThemeFactory || (_ThemeFactory = {}));
var Theme = _flaxBindInstanceType(_ThemeFactory, "flax.material/material#type:Theme", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_VerticalDivider.js
var import_bindings81 = require("@flax/core/bindings");
var import_flutter_Key26 = require("@flax/flutter/foundation");
var import_flutter_Color30 = require("@flax/flutter/services");
var import_flutter_BorderRadiusGeometry4 = require("@flax/flutter/widgets");
var import_bindings82 = require("@flax/core/bindings");
function _VerticalDividerFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:VerticalDivider", "", [{ "name": "key", "required": false, "positional": false }, { "name": "width", "required": false, "positional": false }, { "name": "thickness", "required": false, "positional": false }, { "name": "indent", "required": false, "positional": false }, { "name": "endIndent", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "radius", "required": false, "positional": false }], [], options);
}
var VerticalDivider = _flaxBindInstanceType(_VerticalDividerFactory, "flax.material/material#type:VerticalDivider", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_kTabScrollDuration.js
var import_bindings83 = require("@flax/core/bindings");
var import_flutter_Duration16 = require("@flax/dart/core");
var import_bindings84 = require("@flax/core/bindings");
function getKTabScrollDuration() {
  return invokeTopLevel("flax.material/material#read:kTabScrollDuration", []);
}

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_kToolbarHeight.js
var import_bindings85 = require("@flax/core/bindings");
var import_bindings86 = require("@flax/core/bindings");
var kToolbarHeight = 56;

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_showDialog.js
var import_bindings87 = require("@flax/core/bindings");
var import_flutter_Color31 = require("@flax/flutter/services");
var import_flutter_BuildContext17 = require("@flax/flutter/widgets");
var import_flutter_RouteSettings4 = require("@flax/flutter/widgets");
var import_bindings88 = require("@flax/core/bindings");
function _flaxTopLevel_showDialog(options) {
  if (arguments.length > 1)
    throw new TypeError("Too many method arguments");
  if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["anchorPoint", "barrierColor", "barrierDismissible", "barrierLabel", "builder", "context", "fullscreenDialog", "requestFocus", "routeSettings", "useRootNavigator", "useSafeArea"].includes(k)))
    throw new TypeError("Invalid named method arguments");
  const _flaxResult = invokeTopLevel("flax.material/material#function:showDialog", [options.anchorPoint, options.barrierColor, options.barrierDismissible, options.barrierLabel, options.builder, contextHandle(options.context, "flax.core/flutter#type:BuildContext"), options.fullscreenDialog, options.requestFocus, options.routeSettings, options.useRootNavigator, options.useSafeArea]);
  return _flaxResult;
}
var _flaxGeneric_showDialog = (0, import_bindings87.defineDartCallTypes)(_flaxTopLevel_showDialog, { "id": "flax.material/material#function:showDialog", "parameters": [{ "name": "anchorPoint", "required": false, "positional": false }, { "name": "barrierColor", "required": false, "positional": false }, { "name": "barrierDismissible", "required": false, "positional": false }, { "name": "barrierLabel", "required": false, "positional": false }, { "name": "builder", "required": true, "positional": false }, { "name": "context", "required": true, "positional": false, "context": "flax.core/flutter#type:BuildContext" }, { "name": "fullscreenDialog", "required": false, "positional": false }, { "name": "requestFocus", "required": false, "positional": false }, { "name": "routeSettings", "required": false, "positional": false }, { "name": "useRootNavigator", "required": false, "positional": false }, { "name": "useSafeArea", "required": false, "positional": false }] });

});
