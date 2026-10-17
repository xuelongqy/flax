globalThis.__flaxModules.define({"specifier":"@flax/flutter/cupertino","owner":"@flax/cupertino-ui:dist/generated/libraries/cupertino/index.js","version":"0.0.0","artifact":"8c7ea5bd33e3334f1a00d983259f6249d1d88ec5a53993cebbdbf77d7a9c2e22","asset":"assets/flax_modules/_flax_flutter_cupertino-e4e1688bc6db.js","package":"@flax/cupertino-ui","source":"dist/generated/libraries/cupertino/index.js","dependencies":{"@flax/core/bindings":"0.0.0","@flax/flutter/foundation":"0.0.0","@flax/flutter/services":"0.0.0","@flax/flutter/widgets":"0.0.0"},"bindings":[{"moduleId":"flax.cupertino/cupertino","uiProtocol":24,"requiredCapabilities":["generic-member-views","instance-checks","native-navigation-objects","native-widget-proxies"],"types":["flax.cupertino/cupertino#type:CupertinoApp","flax.cupertino/cupertino#type:CupertinoButton","flax.cupertino/cupertino#type:CupertinoNavigationBar","flax.cupertino/cupertino#type:CupertinoPageScaffold","flax.cupertino/cupertino#type:CupertinoThemeData","flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget"],"functions":[]}],"subpaths":["@flax/flutter/cupertino/index"]}, function(module, exports, require) {
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

// ../../js/dist/generated/libraries/cupertino/index.js
var index_exports = {};
__export(index_exports, {
  CupertinoApp: () => CupertinoApp,
  CupertinoButton: () => CupertinoButton,
  CupertinoNavigationBar: () => CupertinoNavigationBar,
  CupertinoPageScaffold: () => CupertinoPageScaffold,
  CupertinoThemeData: () => CupertinoThemeData,
  ObstructingPreferredSizeWidget: () => ObstructingPreferredSizeWidget
});
module.exports = __toCommonJS(index_exports);

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoThemeData.js
var import_bindings2 = require("@flax/core/bindings");
var import_flutter_Color = require("@flax/flutter/services");
var import_flutter_BuildContext = require("@flax/flutter/widgets");

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino.__module.js
var import_bindings = require("@flax/core/bindings");
var cupertinoBindingModule = (0, import_bindings.installBindingModule)("flax.cupertino/cupertino", 24, Object.freeze(["generic-member-views", "instance-checks", "native-navigation-objects", "native-widget-proxies", "widget-interface-proxies"]));
var { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = cupertinoBindingModule;

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoThemeData.js
var import_bindings3 = require("@flax/core/bindings");
var _flaxMemberParameters0 = [{ "name": "context", "required": true, "positional": true, "context": "flax.core/flutter#type:BuildContext" }];
var _flaxMemberParameters1 = [{ "name": "applyThemeToAll", "required": false, "positional": false }, { "name": "barBackgroundColor", "required": false, "positional": false }, { "name": "primaryColor", "required": false, "positional": false }, { "name": "primaryContrastingColor", "required": false, "positional": false }, { "name": "scaffoldBackgroundColor", "required": false, "positional": false }, { "name": "selectionHandleColor", "required": false, "positional": false }];
var _flaxMemberParameters2 = [];
defineObject("flax.cupertino/cupertino#type:CupertinoThemeData", ["primaryColor", "primaryContrastingColor", "barBackgroundColor", "scaffoldBackgroundColor", "selectionHandleColor", "applyThemeToAll"], [], (0, import_bindings2.bindingMethods)("flax.cupertino/cupertino#type:CupertinoThemeData", "object", { "resolveFrom": _flaxMemberParameters0, "copyWith": _flaxMemberParameters1, "toStringShort": _flaxMemberParameters2 }, {}), []);
function _CupertinoThemeDataFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.cupertino/cupertino#type:CupertinoThemeData", "", [{ "name": "primaryColor", "required": false, "positional": false }, { "name": "primaryContrastingColor", "required": false, "positional": false }, { "name": "barBackgroundColor", "required": false, "positional": false }, { "name": "scaffoldBackgroundColor", "required": false, "positional": false }, { "name": "selectionHandleColor", "required": false, "positional": false }, { "name": "applyThemeToAll", "required": false, "positional": false }], [], options);
}
var CupertinoThemeData = _flaxBindInstanceType(_CupertinoThemeDataFactory, "flax.cupertino/cupertino#type:CupertinoThemeData", ["package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget.js
var import_bindings4 = require("@flax/core/bindings");
var import_bindings5 = require("@flax/core/bindings");
var import_flutter_PreferredSizeWidget = require("@flax/flutter/widgets");
var import_flutter_Key = require("@flax/flutter/foundation");
var import_flutter_Size = require("@flax/flutter/services");
var import_flutter_BuildContext2 = require("@flax/flutter/widgets");
var import_bindings6 = require("@flax/core/bindings");
var _flaxMemberParameters02 = [{ "name": "context", "required": true, "positional": true, "context": "flax.core/flutter#type:BuildContext" }];
defineObject("flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", ["preferredSize"], [], (0, import_bindings4.bindingMethods)("flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", "object", { "shouldFullyObstruct": _flaxMemberParameters02 }, {}), []);
var _ObstructingPreferredSizeWidgetProxy = { nativeWidget: true, type: "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", parameters: [{ "name": "key", "required": false, "positional": false }], constructors: { "": [{ "name": "key", "required": false, "positional": false }] }, methods: { "shouldFullyObstruct": _flaxMemberParameters02, "build": _flaxMemberParameters02 }, getters: ["preferredSize"], setters: [], contextMembers: [], superMembers: [] };
var _ObstructingPreferredSizeWidgetImplementation = class extends import_bindings5.FlaxProxyBase {
  constructor(options) {
    super(_ObstructingPreferredSizeWidgetProxy, Array.from(arguments));
  }
};
(0, import_bindings5.defineProxyBase)(_ObstructingPreferredSizeWidgetImplementation.prototype, _ObstructingPreferredSizeWidgetProxy);
var ObstructingPreferredSizeWidget = _flaxBindInstanceType(_ObstructingPreferredSizeWidgetImplementation, "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", ["dart:core::Object", "flax.core/flutter#type:PreferredSizeWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoApp.js
var import_bindings7 = require("@flax/core/bindings");
var import_flutter_Key2 = require("@flax/flutter/foundation");
var import_flutter_BuildContext3 = require("@flax/flutter/widgets");
var import_flutter_Route = require("@flax/flutter/widgets");
var import_flutter_RouteSettings = require("@flax/flutter/widgets");
var import_flutter_NavigatorObserver = require("@flax/flutter/widgets");
var import_flutter_Color2 = require("@flax/flutter/services");
var import_bindings8 = require("@flax/core/bindings");
function _CupertinoAppFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.cupertino/cupertino#type:CupertinoApp", "", [{ "name": "key", "required": false, "positional": false }, { "name": "home", "required": false, "positional": false }, { "name": "theme", "required": false, "positional": false }, { "name": "routes", "required": false, "positional": false }, { "name": "initialRoute", "required": false, "positional": false }, { "name": "onGenerateRoute", "required": false, "positional": false }, { "name": "onGenerateInitialRoutes", "required": false, "positional": false }, { "name": "onUnknownRoute", "required": false, "positional": false }, { "name": "navigatorObservers", "required": false, "positional": false }, { "name": "builder", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "onGenerateTitle", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "showPerformanceOverlay", "required": false, "positional": false }, { "name": "checkerboardRasterCacheImages", "required": false, "positional": false }, { "name": "checkerboardOffscreenLayers", "required": false, "positional": false }, { "name": "showSemanticsDebugger", "required": false, "positional": false }, { "name": "debugShowCheckedModeBanner", "required": false, "positional": false }, { "name": "restorationScopeId", "required": false, "positional": false }, { "name": "useInheritedMediaQuery", "required": false, "positional": false }], [], options);
}
(function(_CupertinoAppFactory2) {
  function router(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.cupertino/cupertino#type:CupertinoApp", "router", [{ "name": "key", "required": false, "positional": false }, { "name": "theme", "required": false, "positional": false }, { "name": "builder", "required": false, "positional": false }, { "name": "title", "required": false, "positional": false }, { "name": "onGenerateTitle", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "showPerformanceOverlay", "required": false, "positional": false }, { "name": "checkerboardRasterCacheImages", "required": false, "positional": false }, { "name": "checkerboardOffscreenLayers", "required": false, "positional": false }, { "name": "showSemanticsDebugger", "required": false, "positional": false }, { "name": "debugShowCheckedModeBanner", "required": false, "positional": false }, { "name": "restorationScopeId", "required": false, "positional": false }, { "name": "useInheritedMediaQuery", "required": false, "positional": false }], [], options);
  }
  _CupertinoAppFactory2.router = router;
})(_CupertinoAppFactory || (_CupertinoAppFactory = {}));
var CupertinoApp = _flaxBindInstanceType(_CupertinoAppFactory, "flax.cupertino/cupertino#type:CupertinoApp", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoButton.js
var import_bindings9 = require("@flax/core/bindings");
var import_flutter_Key3 = require("@flax/flutter/foundation");
var import_flutter_EdgeInsetsGeometry = require("@flax/flutter/widgets");
var import_flutter_Color3 = require("@flax/flutter/services");
var import_flutter_Size2 = require("@flax/flutter/services");
var import_flutter_BorderRadius = require("@flax/flutter/widgets");
var import_flutter_AlignmentGeometry = require("@flax/flutter/widgets");
var import_flutter_FocusNode = require("@flax/flutter/widgets");
var import_flutter_MouseCursor = require("@flax/flutter/services");
var import_bindings10 = require("@flax/core/bindings");
function _CupertinoButtonFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.cupertino/cupertino#type:CupertinoButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "minSize", "required": false, "positional": false }, { "name": "minimumSize", "required": false, "positional": false }, { "name": "pressedOpacity", "required": false, "positional": false }, { "name": "borderRadius", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }], [], options);
}
(function(_CupertinoButtonFactory2) {
  function tinted(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.cupertino/cupertino#type:CupertinoButton", "tinted", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "minSize", "required": false, "positional": false }, { "name": "minimumSize", "required": false, "positional": false }, { "name": "pressedOpacity", "required": false, "positional": false }, { "name": "borderRadius", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }], [], options);
  }
  _CupertinoButtonFactory2.tinted = tinted;
})(_CupertinoButtonFactory || (_CupertinoButtonFactory = {}));
(function(_CupertinoButtonFactory2) {
  function filled(options) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return construct("widget", "flax.cupertino/cupertino#type:CupertinoButton", "filled", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }, { "name": "padding", "required": false, "positional": false }, { "name": "color", "required": false, "positional": false }, { "name": "disabledColor", "required": false, "positional": false }, { "name": "foregroundColor", "required": false, "positional": false }, { "name": "minSize", "required": false, "positional": false }, { "name": "minimumSize", "required": false, "positional": false }, { "name": "pressedOpacity", "required": false, "positional": false }, { "name": "borderRadius", "required": false, "positional": false }, { "name": "alignment", "required": false, "positional": false }, { "name": "focusColor", "required": false, "positional": false }, { "name": "focusNode", "required": false, "positional": false }, { "name": "onFocusChange", "required": false, "positional": false }, { "name": "autofocus", "required": false, "positional": false }, { "name": "mouseCursor", "required": false, "positional": false }, { "name": "onLongPress", "required": false, "positional": false }, { "name": "onPressed", "required": true, "positional": false }], [], options);
  }
  _CupertinoButtonFactory2.filled = filled;
})(_CupertinoButtonFactory || (_CupertinoButtonFactory = {}));
(function(_CupertinoButtonFactory2) {
  function tapMoveSlop() {
    if (arguments.length > 0)
      throw new TypeError("Too many method arguments");
    const _flaxResult = invokeTopLevel("flax.cupertino/cupertino#function:CupertinoButton.tapMoveSlop", []);
    return _flaxResult;
  }
  _CupertinoButtonFactory2.tapMoveSlop = tapMoveSlop;
})(_CupertinoButtonFactory || (_CupertinoButtonFactory = {}));
var CupertinoButton = _flaxBindInstanceType(_CupertinoButtonFactory, "flax.cupertino/cupertino#type:CupertinoButton", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoNavigationBar.js
var import_bindings11 = require("@flax/core/bindings");
var import_bindings12 = require("@flax/core/bindings");
var import_components_StatefulWidget = require("@flax/flutter/widgets");
var import_flutter_Key4 = require("@flax/flutter/foundation");
var import_flutter_Border = require("@flax/flutter/widgets");
var import_flutter_Color4 = require("@flax/flutter/services");
var import_flutter_EdgeInsetsDirectional = require("@flax/flutter/widgets");
var import_flutter_PreferredSizeWidget2 = require("@flax/flutter/widgets");
var import_flutter_Size3 = require("@flax/flutter/services");
var import_flutter_BuildContext4 = require("@flax/flutter/widgets");
var import_components_State = require("@flax/flutter/widgets");
var import_bindings13 = require("@flax/core/bindings");
var _flaxMemberParameters03 = [{ "name": "context", "required": true, "positional": true, "context": "flax.core/flutter#type:BuildContext" }];
var _flaxMemberParameters12 = [];
var _flaxMemberParameters22 = [{ "name": "joiner", "required": false, "positional": false }];
var _flaxMemberParameters3 = [{ "name": "prefixLineOne", "required": false, "positional": false }, { "name": "prefixOtherLines", "required": false, "positional": false }, { "name": "wrapWidth", "required": false, "positional": false }];
defineObject("flax.cupertino/cupertino#type:CupertinoNavigationBar", ["preferredSize", "largeTitle", "leading", "automaticallyImplyLeading", "automaticallyImplyMiddle", "previousPageTitle", "middle", "trailing", "backgroundColor", "automaticBackgroundVisibility", "padding", "border", "transitionBetweenRoutes", "enableBackgroundFilterBlur", "heroTag", "bottom", "key"], [], (0, import_bindings11.bindingMethods)("flax.cupertino/cupertino#type:CupertinoNavigationBar", "object", { "shouldFullyObstruct": _flaxMemberParameters03, "createState": _flaxMemberParameters12, "toStringShort": _flaxMemberParameters12, "toStringShallow": _flaxMemberParameters22, "toStringDeep": _flaxMemberParameters3 }, {}), []);
function _CupertinoNavigationBarFactory(options = {}) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.cupertino/cupertino#type:CupertinoNavigationBar", "", [{ "name": "key", "fixed": true, "required": false, "positional": false }, { "name": "leading", "fixed": true, "required": false, "positional": false }, { "name": "automaticallyImplyLeading", "fixed": true, "required": false, "positional": false }, { "name": "automaticallyImplyMiddle", "fixed": true, "required": false, "positional": false }, { "name": "previousPageTitle", "fixed": true, "required": false, "positional": false }, { "name": "middle", "fixed": true, "required": false, "positional": false }, { "name": "trailing", "fixed": true, "required": false, "positional": false }, { "name": "border", "fixed": true, "required": false, "positional": false }, { "name": "backgroundColor", "fixed": true, "required": false, "positional": false }, { "name": "automaticBackgroundVisibility", "fixed": true, "required": false, "positional": false }, { "name": "enableBackgroundFilterBlur", "fixed": true, "required": false, "positional": false }, { "name": "padding", "fixed": true, "required": false, "positional": false }, { "name": "transitionBetweenRoutes", "fixed": true, "required": false, "positional": false }, { "name": "heroTag", "fixed": true, "required": false, "positional": false }, { "name": "bottom", "fixed": true, "required": false, "positional": false }], [], options);
}
(function(_CupertinoNavigationBarFactory2) {
  function large(options = {}) {
    if (new.target)
      throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
    if (arguments.length > 1)
      throw new TypeError("Too many constructor arguments");
    return constructObject("object", "flax.cupertino/cupertino#type:CupertinoNavigationBar", "large", [{ "name": "key", "fixed": true, "required": false, "positional": false }, { "name": "largeTitle", "fixed": true, "required": false, "positional": false }, { "name": "leading", "fixed": true, "required": false, "positional": false }, { "name": "automaticallyImplyLeading", "fixed": true, "required": false, "positional": false }, { "name": "automaticallyImplyTitle", "fixed": true, "required": false, "positional": false }, { "name": "previousPageTitle", "fixed": true, "required": false, "positional": false }, { "name": "trailing", "fixed": true, "required": false, "positional": false }, { "name": "border", "fixed": true, "required": false, "positional": false }, { "name": "backgroundColor", "fixed": true, "required": false, "positional": false }, { "name": "automaticBackgroundVisibility", "fixed": true, "required": false, "positional": false }, { "name": "enableBackgroundFilterBlur", "fixed": true, "required": false, "positional": false }, { "name": "padding", "fixed": true, "required": false, "positional": false }, { "name": "transitionBetweenRoutes", "fixed": true, "required": false, "positional": false }, { "name": "heroTag", "fixed": true, "required": false, "positional": false }, { "name": "bottom", "fixed": true, "required": false, "positional": false }], [], options);
  }
  _CupertinoNavigationBarFactory2.large = large;
})(_CupertinoNavigationBarFactory || (_CupertinoNavigationBarFactory = {}));
var CupertinoNavigationBar = _flaxBindInstanceType(_CupertinoNavigationBarFactory, "flax.cupertino/cupertino#type:CupertinoNavigationBar", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable", "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", "flax.core/flutter#type:PreferredSizeWidget"]);

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoPageScaffold.js
var import_bindings14 = require("@flax/core/bindings");
var import_flutter_Key5 = require("@flax/flutter/foundation");
var import_flutter_Color5 = require("@flax/flutter/services");
var import_bindings15 = require("@flax/core/bindings");
function _CupertinoPageScaffoldFactory(options) {
  if (new.target)
    throw new TypeError("Use the Dart factory call; this binding is not a JS subclass constructor");
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.cupertino/cupertino#type:CupertinoPageScaffold", "", [{ "name": "key", "required": false, "positional": false }, { "name": "navigationBar", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "resizeToAvoidBottomInset", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}
var CupertinoPageScaffold = _flaxBindInstanceType(_CupertinoPageScaffoldFactory, "flax.cupertino/cupertino#type:CupertinoPageScaffold", ["flax.core/components#type:StatefulWidget", "package:flutter/src/widgets/framework.dart::Widget", "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree", "dart:core::Object", "package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);

});
