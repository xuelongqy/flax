globalThis.__flaxModules.define({"specifier":"@flax/flutter/cupertino","owner":"@flax/cupertino-ui:dist/generated/libraries/cupertino/index.js","version":"0.0.0","artifact":"4d4f9516107cb07829038ddeece9b99ef2aa0095c9e03b71fc5331b77b8fc1a3","asset":"assets/flax_modules/_flax_flutter_cupertino-e4e1688bc6db.js","package":"@flax/cupertino-ui","source":"dist/generated/libraries/cupertino/index.js","dependencies":{"@flax/core/bindings":"0.0.0","@flax/flutter/foundation":"0.0.0","@flax/flutter/services":"0.0.0","@flax/flutter/widgets":"0.0.0"},"bindings":[{"moduleId":"flax.cupertino/cupertino","uiProtocol":22,"types":["flax.cupertino/cupertino#type:CupertinoApp","flax.cupertino/cupertino#type:CupertinoButton","flax.cupertino/cupertino#type:CupertinoNavigationBar","flax.cupertino/cupertino#type:CupertinoPageScaffold","flax.cupertino/cupertino#type:CupertinoThemeData","flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget"],"functions":[]}],"subpaths":["@flax/flutter/cupertino/index"]}, function(module, exports, require) {
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
  CupertinoThemeData: () => CupertinoThemeData
});
module.exports = __toCommonJS(index_exports);

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoThemeData.js
var import_bindings2 = require("@flax/core/bindings");
var import_flutter_Color = require("@flax/flutter/services");

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino.__module.js
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
    if (capability !== "native-widget-proxies") {
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
var cupertinoBindingModule = _flaxInstallBindingModule("flax.cupertino/cupertino", 22, Object.freeze(["native-widget-proxies"]));
var { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = cupertinoBindingModule;

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoThemeData.js
defineObject("flax.cupertino/cupertino#type:CupertinoThemeData", ["primaryColor", "scaffoldBackgroundColor"], [], (0, import_bindings2.bindingMethods)("flax.cupertino/cupertino#type:CupertinoThemeData", "object", {}), []);
function CupertinoThemeData(options = {}) {
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return constructObject("object", "flax.cupertino/cupertino#type:CupertinoThemeData", "", [{ "name": "primaryColor", "required": false, "positional": false }, { "name": "scaffoldBackgroundColor", "required": false, "positional": false }], [], options);
}

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoApp.js
var import_bindings3 = require("@flax/core/bindings");
var import_flutter_Key = require("@flax/flutter/foundation");
function CupertinoApp(options = {}) {
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.cupertino/cupertino#type:CupertinoApp", "", [{ "name": "key", "required": false, "positional": false }, { "name": "home", "required": false, "positional": false }, { "name": "theme", "required": false, "positional": false }, { "name": "debugShowCheckedModeBanner", "required": false, "positional": false }], [], options);
}

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoButton.js
var import_bindings4 = require("@flax/core/bindings");
var import_flutter_Key2 = require("@flax/flutter/foundation");
function CupertinoButton(options) {
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.cupertino/cupertino#type:CupertinoButton", "", [{ "name": "key", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }, { "name": "onPressed", "required": true, "positional": false }], [], options);
}

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoNavigationBar.js
var import_bindings5 = require("@flax/core/bindings");
var import_flutter_Key3 = require("@flax/flutter/foundation");
var import_flutter_Border = require("@flax/flutter/widgets");
var import_flutter_Color2 = require("@flax/flutter/services");
function CupertinoNavigationBar(options = {}) {
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.cupertino/cupertino#type:CupertinoNavigationBar", "", [{ "name": "key", "fixed": true, "required": false, "positional": false }, { "name": "leading", "fixed": true, "required": false, "positional": false }, { "name": "automaticallyImplyLeading", "fixed": true, "required": false, "positional": false }, { "name": "middle", "fixed": true, "required": false, "positional": false }, { "name": "trailing", "fixed": true, "required": false, "positional": false }, { "name": "border", "fixed": true, "required": false, "positional": false }, { "name": "backgroundColor", "fixed": true, "required": false, "positional": false }, { "name": "transitionBetweenRoutes", "fixed": true, "required": false, "positional": false }], [], options);
}

// ../../js/dist/generated/libraries/cupertino/_bindings/cupertino_CupertinoPageScaffold.js
var import_bindings6 = require("@flax/core/bindings");
var import_flutter_Key4 = require("@flax/flutter/foundation");
var import_flutter_Color3 = require("@flax/flutter/services");
function CupertinoPageScaffold(options) {
  if (arguments.length > 1)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.cupertino/cupertino#type:CupertinoPageScaffold", "", [{ "name": "key", "required": false, "positional": false }, { "name": "navigationBar", "required": false, "positional": false }, { "name": "backgroundColor", "required": false, "positional": false }, { "name": "resizeToAvoidBottomInset", "required": false, "positional": false }, { "name": "child", "required": true, "positional": false }], [], options);
}

});
