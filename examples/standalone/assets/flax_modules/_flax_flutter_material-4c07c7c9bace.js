globalThis.__flaxModules.define({"specifier":"@flax/flutter/material","owner":"@flax/material-ui:dist/generated/libraries/material/index.js","version":"0.0.0","artifact":"6a9971dea7afff5618838ce043cb4871f261e7b858de8eb8f022cf015b59e566","asset":"assets/flax_modules/_flax_flutter_material-4c07c7c9bace.js","package":"@flax/material-ui","source":"dist/generated/libraries/material/index.js","dependencies":{"@flax/core/bindings":"0.0.0","@flax/dart/core":"0.0.0","@flax/flutter/foundation":"0.0.0","@flax/flutter/services":"0.0.0","@flax/flutter/widgets":"0.0.0"},"bindings":[{"moduleId":"flax.material/material","uiProtocol":23,"types":["flax.material/material#type:AlertDialog","flax.material/material#type:AppBar","flax.material/material#type:Brightness","flax.material/material#type:ButtonStyle","flax.material/material#type:Card","flax.material/material#type:Checkbox","flax.material/material#type:CircularProgressIndicator","flax.material/material#type:ColorScheme","flax.material/material#type:Divider","flax.material/material#type:Drawer","flax.material/material#type:ElevatedButton","flax.material/material#type:FilledButton","flax.material/material#type:FloatingActionButton","flax.material/material#type:IconButton","flax.material/material#type:InkWell","flax.material/material#type:InputDecoration","flax.material/material#type:LinearProgressIndicator","flax.material/material#type:ListTile","flax.material/material#type:ListTileStyle","flax.material/material#type:Material","flax.material/material#type:MaterialApp","flax.material/material#type:MaterialPage","flax.material/material#type:MaterialPageRoute","flax.material/material#type:MaterialType","flax.material/material#type:NavigationBar","flax.material/material#type:NavigationDestination","flax.material/material#type:NavigationDestinationLabelBehavior","flax.material/material#type:OutlinedButton","flax.material/material#type:RefreshIndicator","flax.material/material#type:Scaffold","flax.material/material#type:Switch","flax.material/material#type:TextButton","flax.material/material#type:TextField","flax.material/material#type:TextInputAction","flax.material/material#type:TextTheme","flax.material/material#type:Theme","flax.material/material#type:ThemeData","flax.material/material#type:ThemeMode","flax.material/material#type:VerticalDivider","flax.material/material#type:VisualDensity"],"functions":["flax.material/material#function:showDialog","flax.material/material#read:kTabScrollDuration"]}],"subpaths":["@flax/flutter/material/index"]}, function(module, exports, require) {
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
  showDialog: () => _flaxTopLevel_showDialog
});
module.exports = __toCommonJS(index_exports);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ButtonStyle.js
var import_bindings3 = require("@flax/core/bindings");
var import_flutter_WidgetStateProperty = require("@flax/flutter/widgets");
var import_flutter_Color = require("@flax/flutter/services");
var import_flutter_OutlinedBorder = require("@flax/flutter/widgets");
var import_flutter_MouseCursor = require("@flax/flutter/services");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_VisualDensity.js
var import_bindings2 = require("@flax/core/bindings");

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material.__module.js
var import_bindings = require("@flax/core/bindings");
function _flaxInstallBindingModule(moduleId, uiProtocol, requiredCapabilities) {
  if (typeof moduleId !== "string" || moduleId.length === 0 || moduleId.indexOf("/") < 1 || moduleId.indexOf("/") !== moduleId.lastIndexOf("/") || moduleId.startsWith("/") || moduleId.endsWith("/")) {
    throw new TypeError("Invalid binding moduleId");
  }
  if (uiProtocol !== import_bindings.bindingVersion) {
    throw new TypeError(`Incompatible binding uiProtocol: ${uiProtocol}`);
  }
  let previous;
  for (const capability of requiredCapabilities) {
    if (typeof capability !== "string" || previous !== void 0 && capability <= previous) {
      throw new TypeError("requiredCapabilities must be sorted unique strings");
    }
    previous = capability;
    if (capability !== "instance-checks" && capability !== "native-widget-proxies") {
      throw new TypeError(`Unsupported binding capability ${capability}`);
    }
  }
  return Object.freeze({
    moduleId,
    uiProtocol,
    requiredCapabilities: Object.freeze([...requiredCapabilities]),
    construct: import_bindings.construct,
    constructProxy: import_bindings.constructProxy,
    constructObject: import_bindings.constructObject,
    constructDeferredObject: import_bindings.constructDeferredObject,
    constructStream: import_bindings.constructStream,
    constructAsyncIterableStream: import_bindings.constructAsyncIterableStream,
    bindInstanceType: import_bindings.bindInstanceType,
    defineObject: import_bindings.defineObject,
    defineStream: import_bindings.defineStream,
    invokeObject: import_bindings.invokeObject,
    invokeObjectStatic: import_bindings.invokeObjectStatic,
    invokeStream: import_bindings.invokeStream,
    enumValue: import_bindings.enumValue,
    defineContext: import_bindings.defineContext,
    defineState: import_bindings.defineState,
    contextHandle: import_bindings.contextHandle,
    invokeStatic: import_bindings.invokeStatic,
    invokeInstance: import_bindings.invokeInstance,
    invokeTopLevel: import_bindings.invokeTopLevel
  });
}
var materialBindingModule = _flaxInstallBindingModule("flax.material/material", 23, Object.freeze(["instance-checks", "native-widget-proxies"]));
var { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = materialBindingModule;

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_VisualDensity.js
var _flaxMemberParameters0 = [{ "name": "horizontal", "required": false, "positional": false }, { "name": "vertical", "required": false, "positional": false }];
defineObject("flax.material/material#type:VisualDensity", ["horizontal", "vertical"], [], (0, import_bindings2.bindingMethods)("flax.material/material#type:VisualDensity", "object", { "copyWith": _flaxMemberParameters0 }), []);
function _VisualDensityFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:VisualDensity", "", [{ "name": "horizontal", "required": false, "positional": false }, { "name": "vertical", "required": false, "positional": false }], [], options);
}
/* @__PURE__ */ (function(_VisualDensityFactory2) {
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
Object.defineProperty(_VisualDensityFactory, "standard", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.standard", []) });
/* @__PURE__ */ (function(_VisualDensityFactory2) {
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
Object.defineProperty(_VisualDensityFactory, "comfortable", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.comfortable", []) });
/* @__PURE__ */ (function(_VisualDensityFactory2) {
})(_VisualDensityFactory || (_VisualDensityFactory = {}));
Object.defineProperty(_VisualDensityFactory, "compact", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.compact", []) });
var VisualDensity = _flaxBindInstanceType(_VisualDensityFactory, "flax.material/material#type:VisualDensity", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ButtonStyle.js
var _flaxMemberParameters02 = [{ "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }];
defineObject("flax.material/material#type:ButtonStyle", ["backgroundColor", "foregroundColor", "overlayColor", "elevation", "shape", "mouseCursor", "visualDensity"], [], (0, import_bindings3.bindingMethods)("flax.material/material#type:ButtonStyle", "object", { "copyWith": _flaxMemberParameters02 }), []);
function _ButtonStyleFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:ButtonStyle", "", [{ "name": "backgroundColor", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "visualDensity", "required": false, "positional": false }], [], options);
}
var ButtonStyle = _flaxBindInstanceType(_ButtonStyleFactory, "flax.material/material#type:ButtonStyle", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ColorScheme.js
var import_bindings4 = require("@flax/core/bindings");
var import_flutter_Color2 = require("@flax/flutter/services");
var _flaxMemberParameters03 = [{ "name": "brightness", "required": false, "positional": false }, { "name": "error", "required": false, "positional": false }, { "name": "onError", "required": false, "positional": false }, { "name": "onPrimary", "required": false, "positional": false }, { "name": "onSurface", "required": false, "positional": false }, { "name": "primary", "required": false, "positional": false }, { "name": "surface", "required": false, "positional": false }];
defineObject("flax.material/material#type:ColorScheme", ["brightness", "primary", "onPrimary", "surface", "onSurface", "error", "onError"], [], (0, import_bindings4.bindingMethods)("flax.material/material#type:ColorScheme", "object", { "copyWith": _flaxMemberParameters03 }), []);
var _ColorSchemeFactory;
(function(_ColorSchemeFactory2) {
  function fromSeed(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.material/material#type:ColorScheme", "fromSeed", [{ "name": "seedColor", "required": true, "positional": false }, { "name": "brightness", "required": false, "positional": false }], [], options);
  }
  _ColorSchemeFactory2.fromSeed = fromSeed;
})(_ColorSchemeFactory || (_ColorSchemeFactory = {}));
var ColorScheme = _flaxBindInstanceType(_ColorSchemeFactory, "flax.material/material#type:ColorScheme", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_InputDecoration.js
var import_bindings5 = require("@flax/core/bindings");
var import_flutter_TextStyle = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry = require("@flax/flutter/widgets");
var import_flutter_Color3 = require("@flax/flutter/services");
var _flaxMemberParameters04 = [{ "name": "contentPadding", "required": false, "positional": false }, { "name": "errorStyle", "required": false, "positional": false }, { "name": "errorText", "required": false, "positional": false }, { "name": "fillColor", "required": false, "positional": false }, { "name": "filled", "required": false, "positional": false }, { "name": "helperStyle", "required": false, "positional": false }, { "name": "helperText", "required": false, "positional": false }, { "name": "hintStyle", "required": false, "positional": false }, { "name": "hintText", "required": false, "positional": false }, { "name": "isDense", "required": false, "positional": false }, { "name": "labelStyle", "required": false, "positional": false }, { "name": "labelText", "required": false, "positional": false }];
defineObject("flax.material/material#type:InputDecoration", ["labelText", "hintText", "helperText", "errorText", "labelStyle", "hintStyle", "helperStyle", "errorStyle", "isDense", "contentPadding", "filled", "fillColor"], [], (0, import_bindings5.bindingMethods)("flax.material/material#type:InputDecoration", "object", { "copyWith": _flaxMemberParameters04 }), []);
function _InputDecorationFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:InputDecoration", "", [{ "name": "labelText", "required": false, "positional": false }, { "name": "labelStyle", "required": false, "positional": false }, { "name": "helperText", "required": false, "positional": false }, { "name": "helperStyle", "required": false, "positional": false }, { "name": "hintText", "required": false, "positional": false }, { "name": "hintStyle", "required": false, "positional": false }, { "name": "errorText", "required": false, "positional": false }, { "name": "errorStyle", "required": false, "positional": false }, { "name": "isDense", "required": false, "positional": false }, { "name": "contentPadding", "required": false, "positional": false }, { "name": "filled", "required": false, "positional": false }, { "name": "fillColor", "required": false, "positional": false }], [], options);
}
var InputDecoration = _flaxBindInstanceType(_InputDecorationFactory, "flax.material/material#type:InputDecoration", ["dart:core::Object"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_TextTheme.js
var import_bindings6 = require("@flax/core/bindings");
var import_flutter_TextStyle2 = require("@flax/flutter/widgets");
var _flaxMemberParameters05 = [{ "name": "bodyLarge", "required": false, "positional": false }, { "name": "bodyMedium", "required": false, "positional": false }, { "name": "labelLarge", "required": false, "positional": false }, { "name": "titleLarge", "required": false, "positional": false }, { "name": "titleMedium", "required": false, "positional": false }];
defineObject("flax.material/material#type:TextTheme", ["titleLarge", "titleMedium", "bodyLarge", "bodyMedium", "labelLarge"], [], (0, import_bindings6.bindingMethods)("flax.material/material#type:TextTheme", "object", { "copyWith": _flaxMemberParameters05 }), []);
function _TextThemeFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:TextTheme", "", [{ "name": "titleLarge", "required": false, "positional": false }, { "name": "titleMedium", "required": false, "positional": false }, { "name": "bodyLarge", "required": false, "positional": false }, { "name": "bodyMedium", "required": false, "positional": false }, { "name": "labelLarge", "required": false, "positional": false }], [], options);
}
var TextTheme = _flaxBindInstanceType(_TextThemeFactory, "flax.material/material#type:TextTheme", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ThemeData.js
var import_bindings7 = require("@flax/core/bindings");
var import_flutter_Color4 = require("@flax/flutter/services");
var _flaxMemberParameters06 = [{ "name": "brightness", "required": false, "positional": false }, { "name": "colorScheme", "required": false, "positional": false }, { "name": "textTheme", "required": false, "positional": false }];
defineObject("flax.material/material#type:ThemeData", ["brightness", "colorScheme", "textTheme"], [], (0, import_bindings7.bindingMethods)("flax.material/material#type:ThemeData", "object", { "copyWith": _flaxMemberParameters06 }), []);
function _ThemeDataFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.material/material#type:ThemeData", "", [{ "name": "colorScheme", "required": false, "positional": false }, { "name": "brightness", "required": false, "positional": false }, { "name": "colorSchemeSeed", "required": false, "positional": false }, { "name": "textTheme", "required": false, "positional": false }], [], options);
}
var ThemeData = _flaxBindInstanceType(_ThemeDataFactory, "flax.material/material#type:ThemeData", ["dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_AlertDialog.js
var import_bindings8 = require("@flax/core/bindings");
var import_flutter_Key = require("@flax/flutter/foundation");
function _AlertDialogFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:AlertDialog", "", [{ "name": "key", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "content", "required": false, "positional": false }, { "name": "actions", "required": false, "positional": false }, { "name": "scrollable", "required": false, "positional": false }], [], options);
}
var AlertDialog = _flaxBindInstanceType(_AlertDialogFactory, "flax.material/material#type:AlertDialog", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_AppBar.js
var import_bindings9 = require("@flax/core/bindings");
var import_flutter_Key2 = require("@flax/flutter/foundation");
var import_flutter_Color5 = require("@flax/flutter/services");
function _AppBarFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:AppBar", "", [{ "name": "key", "fixed": true, "required": false, "positional": false }, { "name": "leading", "fixed": true, "required": false, "positional": false }, { "name": "automaticallyImplyLeading", "fixed": true, "required": false, "positional": false }, { "name": "title", "fixed": true, "required": false, "positional": false }, { "name": "actions", "fixed": true, "required": false, "positional": false }, { "name": "bottom", "fixed": true, "required": false, "positional": false }, { "name": "elevation", "fixed": true, "required": false, "positional": false }, { "name": "backgroundColor", "fixed": true, "required": false, "positional": false }, { "name": "foregroundColor", "fixed": true, "required": false, "positional": false }, { "name": "primary", "fixed": true, "required": false, "positional": false }, { "name": "centerTitle", "fixed": true, "required": false, "positional": false }, { "name": "toolbarHeight", "fixed": true, "required": false, "positional": false }], [], options);
}
var AppBar = _flaxBindInstanceType(_AppBarFactory, "flax.material/material#type:AppBar", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable", "flax.core/flutter#type:PreferredSizeWidget"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Brightness.js
var import_bindings10 = require("@flax/core/bindings");
var Brightness = Object.freeze({
  dark: enumValue("flax.material/material#type:Brightness", "dark"),
  light: enumValue("flax.material/material#type:Brightness", "light")
});

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Card.js
var import_bindings11 = require("@flax/core/bindings");
var import_flutter_Key3 = require("@flax/flutter/foundation");
var import_flutter_Color6 = require("@flax/flutter/services");
var import_flutter_EdgeInsetsGeometry2 = require("@flax/flutter/widgets");
function _CardFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Card", "", [{ "name": "key", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "margin", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "semanticContainer", "required": false, "positional": false }], [], options);
}
(function(_CardFactory2) {
  function filled(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:Card", "filled", [{ "name": "key", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "margin", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "semanticContainer", "required": false, "positional": false }], [], options);
  }
  _CardFactory2.filled = filled;
})(_CardFactory || (_CardFactory = {}));
(function(_CardFactory2) {
  function outlined(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:Card", "outlined", [{ "name": "key", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "margin", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "semanticContainer", "required": false, "positional": false }], [], options);
  }
  _CardFactory2.outlined = outlined;
})(_CardFactory || (_CardFactory = {}));
var Card = _flaxBindInstanceType(_CardFactory, "flax.material/material#type:Card", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Checkbox.js
var import_bindings12 = require("@flax/core/bindings");
var import_flutter_Key4 = require("@flax/flutter/foundation");
var import_flutter_Color7 = require("@flax/flutter/services");
var import_flutter_WidgetStateProperty2 = require("@flax/flutter/widgets");
var import_flutter_FocusNode = require("@flax/flutter/widgets");
function _CheckboxFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Checkbox", "", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": true, "positional": false }, { "name": "tristate", "required": false, "positional": false }, { "name": "onChanged", "required": true, "positional": false }, { "name": "activeColor", "required": false, "positional": false }, { "name": "fillColor", "required": false, "positional": false }, { "name": "checkColor", "required": false, "positional": false }, { "name": "overlayColor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "isError", "required": false, "positional": false }], [], options);
}
var Checkbox = _flaxBindInstanceType(_CheckboxFactory, "flax.material/material#type:Checkbox", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_CircularProgressIndicator.js
var import_bindings13 = require("@flax/core/bindings");
var import_flutter_Key5 = require("@flax/flutter/foundation");
var import_flutter_Color8 = require("@flax/flutter/services");
function _CircularProgressIndicatorFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:CircularProgressIndicator", "", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "strokeWidth", "required": false, "positional": false }, { "name": "semanticsLabel", "required": false, "positional": false }], [], options);
}
var CircularProgressIndicator = _flaxBindInstanceType(_CircularProgressIndicatorFactory, "flax.material/material#type:CircularProgressIndicator", ["package:material_ui/src/progress_indicator.dart::ProgressIndicator", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Divider.js
var import_bindings14 = require("@flax/core/bindings");
var import_flutter_Key6 = require("@flax/flutter/foundation");
var import_flutter_Color9 = require("@flax/flutter/services");
var import_flutter_BorderRadiusGeometry = require("@flax/flutter/widgets");
function _DividerFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Divider", "", [{ "name": "key", "required": false, "positional": false }, { "name": "height", "required": false, "positional": false }, { "name": "thickness", "required": false, "positional": false }, { "name": "indent", "required": false, "positional": false }, { "name": "endIndent", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "radius", "required": false, "positional": false }], [], options);
}
var Divider = _flaxBindInstanceType(_DividerFactory, "flax.material/material#type:Divider", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Drawer.js
var import_bindings15 = require("@flax/core/bindings");
var import_flutter_Key7 = require("@flax/flutter/foundation");
var import_flutter_Color10 = require("@flax/flutter/services");
function _DrawerFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Drawer", "", [{ "name": "key", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "width", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "semanticLabel", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }], [], options);
}
var Drawer = _flaxBindInstanceType(_DrawerFactory, "flax.material/material#type:Drawer", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ElevatedButton.js
var import_bindings16 = require("@flax/core/bindings");
var import_flutter_Key8 = require("@flax/flutter/foundation");
function _ElevatedButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:ElevatedButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
var ElevatedButton = _flaxBindInstanceType(_ElevatedButtonFactory, "flax.material/material#type:ElevatedButton", ["package:material_ui/src/button_style_button.dart::ButtonStyleButton", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_FilledButton.js
var import_bindings17 = require("@flax/core/bindings");
var import_flutter_Key9 = require("@flax/flutter/foundation");
function _FilledButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:FilledButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
(function(_FilledButtonFactory2) {
  function tonal(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FilledButton", "tonal", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
  }
  _FilledButtonFactory2.tonal = tonal;
})(_FilledButtonFactory || (_FilledButtonFactory = {}));
var FilledButton = _flaxBindInstanceType(_FilledButtonFactory, "flax.material/material#type:FilledButton", ["package:material_ui/src/button_style_button.dart::ButtonStyleButton", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_FloatingActionButton.js
var import_bindings18 = require("@flax/core/bindings");
var import_flutter_Key10 = require("@flax/flutter/foundation");
var import_flutter_Color11 = require("@flax/flutter/services");
var import_flutter_FocusNode2 = require("@flax/flutter/widgets");
function _FloatingActionButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:FloatingActionButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "mini", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }], [], options);
}
(function(_FloatingActionButtonFactory2) {
  function small(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FloatingActionButton", "small", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }], [], options);
  }
  _FloatingActionButtonFactory2.small = small;
})(_FloatingActionButtonFactory || (_FloatingActionButtonFactory = {}));
(function(_FloatingActionButtonFactory2) {
  function large(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FloatingActionButton", "large", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }], [], options);
  }
  _FloatingActionButtonFactory2.large = large;
})(_FloatingActionButtonFactory || (_FloatingActionButtonFactory = {}));
(function(_FloatingActionButtonFactory2) {
  function extended(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:FloatingActionButton", "extended", [{ "name": "key", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "icon", "required": false, "positional": false }, { "name": "label", "required": true, "positional": false }], [], options);
  }
  _FloatingActionButtonFactory2.extended = extended;
})(_FloatingActionButtonFactory || (_FloatingActionButtonFactory = {}));
var FloatingActionButton = _flaxBindInstanceType(_FloatingActionButtonFactory, "flax.material/material#type:FloatingActionButton", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_IconButton.js
var import_bindings19 = require("@flax/core/bindings");
var import_flutter_Key11 = require("@flax/flutter/foundation");
var import_flutter_EdgeInsetsGeometry3 = require("@flax/flutter/widgets");
var import_flutter_AlignmentGeometry = require("@flax/flutter/widgets");
var import_flutter_Color12 = require("@flax/flutter/services");
var import_flutter_FocusNode3 = require("@flax/flutter/widgets");
function _IconButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:IconButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "isSelected", "required": false, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }], [], options);
}
(function(_IconButtonFactory2) {
  function filled(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:IconButton", "filled", [{ "name": "key", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "isSelected", "required": false, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }], [], options);
  }
  _IconButtonFactory2.filled = filled;
})(_IconButtonFactory || (_IconButtonFactory = {}));
(function(_IconButtonFactory2) {
  function filledTonal(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:IconButton", "filledTonal", [{ "name": "key", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "isSelected", "required": false, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }], [], options);
  }
  _IconButtonFactory2.filledTonal = filledTonal;
})(_IconButtonFactory || (_IconButtonFactory = {}));
(function(_IconButtonFactory2) {
  function outlined(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.material/material#type:IconButton", "outlined", [{ "name": "key", "required": false, "positional": false }, { "name": "iconSize", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "isSelected", "required": false, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }], [], options);
  }
  _IconButtonFactory2.outlined = outlined;
})(_IconButtonFactory || (_IconButtonFactory = {}));
var IconButton = _flaxBindInstanceType(_IconButtonFactory, "flax.material/material#type:IconButton", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_InkWell.js
var import_bindings20 = require("@flax/core/bindings");
var import_flutter_Key12 = require("@flax/flutter/foundation");
var import_flutter_MouseCursor2 = require("@flax/flutter/services");
var import_flutter_Color13 = require("@flax/flutter/services");
var import_flutter_BorderRadius = require("@flax/flutter/widgets");
var import_flutter_ShapeBorder = require("@flax/flutter/widgets");
function _InkWellFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:InkWell", "", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }, { "name": "onTap", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onHighlightChanged", "required": false, "positional": false }, { "name": "onHover", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "hoverColor", "required": false, "positional": false }, { "name": "highlightColor", "required": false, "positional": false }, { "name": "splashColor", "required": false, "positional": false }, { "name": "borderRadius", "required": false, "positional": false }, { "name": "customBorder", "required": false, "positional": false }, { "name": "enableFeedback", "required": false, "positional": false }], [], options);
}
var InkWell = _flaxBindInstanceType(_InkWellFactory, "flax.material/material#type:InkWell", ["package:material_ui/src/ink_well.dart::InkResponse", "package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_LinearProgressIndicator.js
var import_bindings21 = require("@flax/core/bindings");
var import_flutter_Key13 = require("@flax/flutter/foundation");
var import_flutter_Color14 = require("@flax/flutter/services");
var import_flutter_BorderRadiusGeometry2 = require("@flax/flutter/widgets");
function _LinearProgressIndicatorFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:LinearProgressIndicator", "", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "minHeight", "required": false, "positional": false }, { "name": "semanticsLabel", "required": false, "positional": false }, { "name": "semanticsValue", "required": false, "positional": false }, { "name": "borderRadius", "required": false, "positional": false }], [], options);
}
var LinearProgressIndicator = _flaxBindInstanceType(_LinearProgressIndicatorFactory, "flax.material/material#type:LinearProgressIndicator", ["package:material_ui/src/progress_indicator.dart::ProgressIndicator", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ListTile.js
var import_bindings22 = require("@flax/core/bindings");
var import_flutter_Key14 = require("@flax/flutter/foundation");
var import_flutter_Color15 = require("@flax/flutter/services");
var import_flutter_TextStyle3 = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry4 = require("@flax/flutter/widgets");
var import_flutter_FocusNode4 = require("@flax/flutter/widgets");
function _ListTileFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:ListTile", "", [{ "name": "key", "required": false, "positional": false }, { "name": "leading", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "subtitle", "required": false, "positional": false }, { "name": "trailing", "required": false, "positional": false }, { "name": "isThreeLine", "required": false, "positional": false }, { "name": "dense", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "selectedColor", "required": false, "positional": false }, { "name": "iconColor", "required": false, "positional": false }, { "name": "textColor", "required": false, "positional": false }, { "name": "titleTextStyle", "required": false, "positional": false }, { "name": "contentPadding", "required": false, "positional": false }, { "name": "enabled", "required": false, "positional": false }, { "name": "onTap", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "selected", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "tileColor", "required": false, "positional": false }, { "name": "selectedTileColor", "required": false, "positional": false }], [], options);
}
var ListTile = _flaxBindInstanceType(_ListTileFactory, "flax.material/material#type:ListTile", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ListTileStyle.js
var import_bindings23 = require("@flax/core/bindings");
var ListTileStyle = Object.freeze({
  list: enumValue("flax.material/material#type:ListTileStyle", "list"),
  drawer: enumValue("flax.material/material#type:ListTileStyle", "drawer")
});

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Material.js
var import_bindings24 = require("@flax/core/bindings");
var import_flutter_Key15 = require("@flax/flutter/foundation");
var import_flutter_Color16 = require("@flax/flutter/services");
var import_flutter_TextStyle4 = require("@flax/flutter/widgets");
var import_flutter_BorderRadiusGeometry3 = require("@flax/flutter/widgets");
var import_flutter_ShapeBorder2 = require("@flax/flutter/widgets");
function _MaterialFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Material", "", [{ "name": "key", "required": false, "positional": false }, { "name": "type", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "surfaceTintColor", "required": false, "positional": false }, { "name": "textStyle", "required": false, "positional": false }, { "name": "borderRadius", "required": false, "positional": false }, { "name": "shape", "required": false, "positional": false }, { "name": "clipBehavior", "required": false, "positional": false }, { "name": "child", "required": false, "positional": false }], [], options);
}
var Material = _flaxBindInstanceType(_MaterialFactory, "flax.material/material#type:Material", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_MaterialApp.js
var import_bindings25 = require("@flax/core/bindings");
var import_flutter_Key16 = require("@flax/flutter/foundation");
var import_flutter_NavigatorObserver = require("@flax/flutter/widgets");
function _MaterialAppFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:MaterialApp", "", [{ "name": "key", "required": false, "positional": false }, { "name": "home", "required": false, "positional": false }, { "name": "navigatorObservers", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "theme", "required": false, "positional": false }, { "name": "darkTheme", "required": false, "positional": false }, { "name": "themeMode", "required": false, "positional": false }, { "name": "debugShowCheckedModeBanner", "required": false, "positional": false }], [], options);
}
var MaterialApp = _flaxBindInstanceType(_MaterialAppFactory, "flax.material/material#type:MaterialApp", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_MaterialPage.js
var import_bindings26 = require("@flax/core/bindings");
var import_flutter_LocalKey = require("@flax/flutter/foundation");
function _MaterialPageFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("page", "flax.material/material#type:MaterialPage", "", [{ "name": "child", "required": true, "positional": false }, { "name": "maintainState", "required": false, "positional": false }, { "name": "fullscreenDialog", "required": false, "positional": false }, { "name": "key", "required": false, "positional": false, "readonly": true, "defaultValue": null }, { "name": "canPop", "required": false, "positional": false }, { "name": "onPopInvoked", "required": false, "positional": false }, { "name": "name", "required": false, "positional": false, "readonly": true, "defaultValue": null }, { "name": "arguments", "required": false, "positional": false, "readonly": true, "defaultValue": null }], [], options);
}
var MaterialPage = _flaxBindInstanceType(_MaterialPageFactory, "flax.material/material#type:MaterialPage", ["flax.core/flutter#type:Page", "flax.core/flutter#type:RouteSettings", "dart:core::Object"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_MaterialPageRoute.js
var import_bindings27 = require("@flax/core/bindings");
var import_flutter_BuildContext = require("@flax/flutter/widgets");
var import_flutter_RouteSettings = require("@flax/flutter/widgets");
function _MaterialPageRouteFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("route", "flax.material/material#type:MaterialPageRoute", "", [{ "name": "builder", "required": true, "positional": false }, { "name": "settings", "required": false, "positional": false }, { "name": "maintainState", "required": false, "positional": false }, { "name": "fullscreenDialog", "required": false, "positional": false }], [], options);
}
var MaterialPageRoute = _flaxBindInstanceType(_MaterialPageRouteFactory, "flax.material/material#type:MaterialPageRoute", ["package:flutter/src/widgets/pages.dart::PageRoute", "package:flutter/src/widgets/routes.dart::ModalRoute", "package:flutter/src/widgets/routes.dart::TransitionRoute", "package:flutter/src/widgets/routes.dart::OverlayRoute", "flax.core/flutter#type:Route", "package:flutter/src/widgets/navigator.dart::_RoutePlaceholder", "package:flutter/src/widgets/routes.dart::PredictiveBackRoute", "package:flutter/src/widgets/routes.dart::LocalHistoryRoute", "package:material_ui/src/page.dart::MaterialRouteTransitionMixin"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_MaterialType.js
var import_bindings28 = require("@flax/core/bindings");
var MaterialType = Object.freeze({
  canvas: enumValue("flax.material/material#type:MaterialType", "canvas"),
  card: enumValue("flax.material/material#type:MaterialType", "card"),
  circle: enumValue("flax.material/material#type:MaterialType", "circle"),
  button: enumValue("flax.material/material#type:MaterialType", "button"),
  transparency: enumValue("flax.material/material#type:MaterialType", "transparency")
});

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_NavigationBar.js
var import_bindings29 = require("@flax/core/bindings");
var import_flutter_Key17 = require("@flax/flutter/foundation");
var import_flutter_Color17 = require("@flax/flutter/services");
function _NavigationBarFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:NavigationBar", "", [{ "name": "key", "required": false, "positional": false }, { "name": "selectedIndex", "required": false, "positional": false }, { "name": "destinations", "required": true, "positional": false }, { "name": "onDestinationSelected", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "elevation", "required": false, "positional": false }, { "name": "shadowColor", "required": false, "positional": false }, { "name": "indicatorColor", "required": false, "positional": false }, { "name": "height", "required": false, "positional": false }, { "name": "labelBehavior", "required": false, "positional": false }], [], options);
}
var NavigationBar = _flaxBindInstanceType(_NavigationBarFactory, "flax.material/material#type:NavigationBar", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_NavigationDestination.js
var import_bindings30 = require("@flax/core/bindings");
var import_flutter_Key18 = require("@flax/flutter/foundation");
function _NavigationDestinationFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:NavigationDestination", "", [{ "name": "key", "required": false, "positional": false }, { "name": "icon", "required": true, "positional": false }, { "name": "selectedIcon", "required": false, "positional": false }, { "name": "label", "required": true, "positional": false }, { "name": "tooltip", "required": false, "positional": false }, { "name": "enabled", "required": false, "positional": false }], [], options);
}
var NavigationDestination = _flaxBindInstanceType(_NavigationDestinationFactory, "flax.material/material#type:NavigationDestination", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_NavigationDestinationLabelBehavior.js
var import_bindings31 = require("@flax/core/bindings");
var NavigationDestinationLabelBehavior = Object.freeze({
  alwaysShow: enumValue("flax.material/material#type:NavigationDestinationLabelBehavior", "alwaysShow"),
  alwaysHide: enumValue("flax.material/material#type:NavigationDestinationLabelBehavior", "alwaysHide"),
  onlyShowSelected: enumValue("flax.material/material#type:NavigationDestinationLabelBehavior", "onlyShowSelected")
});

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_OutlinedButton.js
var import_bindings32 = require("@flax/core/bindings");
var import_flutter_Key19 = require("@flax/flutter/foundation");
function _OutlinedButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:OutlinedButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
var OutlinedButton = _flaxBindInstanceType(_OutlinedButtonFactory, "flax.material/material#type:OutlinedButton", ["package:material_ui/src/button_style_button.dart::ButtonStyleButton", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_RefreshIndicator.js
var import_bindings33 = require("@flax/core/bindings");
var import_flutter_Key20 = require("@flax/flutter/foundation");
function _RefreshIndicatorFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:RefreshIndicator", "", [{ "name": "key", "required": false, "positional": false }, { "name": "onRefresh", "required": true, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
var RefreshIndicator = _flaxBindInstanceType(_RefreshIndicatorFactory, "flax.material/material#type:RefreshIndicator", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Scaffold.js
var import_bindings34 = require("@flax/core/bindings");
var import_flutter_Key21 = require("@flax/flutter/foundation");
var import_flutter_Color18 = require("@flax/flutter/services");
function _ScaffoldFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Scaffold", "", [{ "name": "key", "required": false, "positional": false }, { "name": "appBar", "required": false, "positional": false }, { "name": "body", "required": false, "positional": false }, { "name": "floatingActionButton", "required": false, "positional": false }, { "name": "drawer", "required": false, "positional": false }, { "name": "endDrawer", "required": false, "positional": false }, { "name": "bottomNavigationBar", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "resizeToAvoidBottomInset", "required": false, "positional": false }, { "name": "primary", "required": false, "positional": false }, { "name": "extendBody", "required": false, "positional": false }, { "name": "extendBodyBehindAppBar", "required": false, "positional": false }], [], options);
}
var Scaffold = _flaxBindInstanceType(_ScaffoldFactory, "flax.material/material#type:Scaffold", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Switch.js
var import_bindings35 = require("@flax/core/bindings");
var import_flutter_Key22 = require("@flax/flutter/foundation");
var import_flutter_Color19 = require("@flax/flutter/services");
var import_flutter_FocusNode5 = require("@flax/flutter/widgets");
var import_flutter_EdgeInsetsGeometry5 = require("@flax/flutter/widgets");
function _SwitchFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:Switch", "", [{ "name": "key", "required": false, "positional": false }, { "name": "value", "required": true, "positional": false }, { "name": "onChanged", "required": true, "positional": false }, { "name": "activeThumbColor", "required": false, "positional": false }, { "name": "activeTrackColor", "required": false, "positional": false }, { "name": "inactiveThumbColor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "padding", "required": false, "positional": false }], [], options);
}
var Switch = _flaxBindInstanceType(_SwitchFactory, "flax.material/material#type:Switch", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_TextButton.js
var import_bindings36 = require("@flax/core/bindings");
var import_flutter_Key23 = require("@flax/flutter/foundation");
function _TextButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:TextButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
var TextButton = _flaxBindInstanceType(_TextButtonFactory, "flax.material/material#type:TextButton", ["package:material_ui/src/button_style_button.dart::ButtonStyleButton", "flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_TextField.js
var import_bindings37 = require("@flax/core/bindings");
var import_flutter_Key24 = require("@flax/flutter/foundation");
var import_flutter_TextEditingController = require("@flax/flutter/widgets");
var import_flutter_FocusNode6 = require("@flax/flutter/widgets");
var import_flutter_TextStyle5 = require("@flax/flutter/widgets");
var import_flutter_TextInputFormatter = require("@flax/flutter/services");
function _TextFieldFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:TextField", "", [{ "name": "key", "required": false, "positional": false }, { "name": "controller", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "decoration", "required": false, "positional": false }, { "name": "textInputAction", "required": false, "positional": false }, { "name": "style", "required": false, "positional": false }, { "name": "readOnly", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "obscureText", "required": false, "positional": false }, { "name": "autocorrect", "required": false, "positional": false }, { "name": "enableSuggestions", "required": false, "positional": false }, { "name": "maxLines", "required": false, "positional": false }, { "name": "minLines", "required": false, "positional": false }, { "name": "onChanged", "required": false, "positional": false }, { "name": "onEditingComplete", "required": false, "positional": false }, { "name": "onSubmitted", "required": false, "positional": false }, { "name": "inputFormatters", "required": false, "positional": false }, { "name": "enabled", "required": false, "positional": false }], [], options);
}
var TextField = _flaxBindInstanceType(_TextFieldFactory, "flax.material/material#type:TextField", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_TextInputAction.js
var import_bindings38 = require("@flax/core/bindings");
var TextInputAction = Object.freeze({
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
  newline: enumValue("flax.material/material#type:TextInputAction", "newline")
});

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_Theme.js
var import_bindings39 = require("@flax/core/bindings");
var import_flutter_Key25 = require("@flax/flutter/foundation");
var import_flutter_BuildContext2 = require("@flax/flutter/widgets");
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
    const _flaxResult = invokeStatic("flax.material/material#type:Theme", "of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
    return _flaxResult;
  }
  _ThemeFactory2.of = of;
})(_ThemeFactory || (_ThemeFactory = {}));
var Theme = _flaxBindInstanceType(_ThemeFactory, "flax.material/material#type:Theme", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_ThemeMode.js
var import_bindings40 = require("@flax/core/bindings");
var ThemeMode = Object.freeze({
  system: enumValue("flax.material/material#type:ThemeMode", "system"),
  light: enumValue("flax.material/material#type:ThemeMode", "light"),
  dark: enumValue("flax.material/material#type:ThemeMode", "dark")
});

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_VerticalDivider.js
var import_bindings41 = require("@flax/core/bindings");
var import_flutter_Key26 = require("@flax/flutter/foundation");
var import_flutter_Color20 = require("@flax/flutter/services");
var import_flutter_BorderRadiusGeometry4 = require("@flax/flutter/widgets");
function _VerticalDividerFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.material/material#type:VerticalDivider", "", [{ "name": "key", "required": false, "positional": false }, { "name": "width", "required": false, "positional": false }, { "name": "thickness", "required": false, "positional": false }, { "name": "indent", "required": false, "positional": false }, { "name": "endIndent", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "radius", "required": false, "positional": false }], [], options);
}
var VerticalDivider = _flaxBindInstanceType(_VerticalDividerFactory, "flax.material/material#type:VerticalDivider", ["package:flutter/src/widgets/framework.dart::StatelessWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_kTabScrollDuration.js
var import_bindings42 = require("@flax/core/bindings");
var import_flutter_Duration = require("@flax/dart/core");
function getKTabScrollDuration() {
  return invokeTopLevel("flax.material/material#read:kTabScrollDuration", []);
}

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_kToolbarHeight.js
var import_bindings43 = require("@flax/core/bindings");
var kToolbarHeight = 56;

// ../../../packages/flax_material_ui/js/dist/generated/libraries/material/_bindings/material_showDialog.js
var import_bindings44 = require("@flax/core/bindings");
var import_flutter_Color21 = require("@flax/flutter/services");
var import_flutter_BuildContext3 = require("@flax/flutter/widgets");
var import_flutter_RouteSettings2 = require("@flax/flutter/widgets");
function _flaxTopLevel_showDialog(options) {
  if (arguments.length > 1)
    throw new TypeError("Too many method arguments");
  if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((k) => !["barrierColor", "barrierDismissible", "barrierLabel", "builder", "context", "fullscreenDialog", "requestFocus", "routeSettings", "useRootNavigator", "useSafeArea"].includes(k)))
    throw new TypeError("Invalid named method arguments");
  const _flaxResult = invokeTopLevel("flax.material/material#function:showDialog", [options.barrierColor, options.barrierDismissible, options.barrierLabel, options.builder, contextHandle(options.context, "flax.core/flutter#type:BuildContext"), options.fullscreenDialog, options.requestFocus, options.routeSettings, options.useRootNavigator, options.useSafeArea]);
  return _flaxResult;
}

});
