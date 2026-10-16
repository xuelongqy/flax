globalThis.__flaxModules.define({"specifier":"@flax/core/bindings","owner":"@flax/core-runtime:dist/runtime/bindings.js","version":"0.0.0","artifact":"56861fbf988d69eb632e5f7391b5c7748a5b59689d5c5c0821a9cc6f9f7305df","asset":"assets/flax_modules/_flax_core_bindings-d3b4a70bd856.js","package":"@flax/core-runtime","source":"dist/runtime/bindings.js","dependencies":{"@flax/core":"0.0.0"},"bindings":[],"subpaths":[]}, function(module, exports, require) {
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __yieldStar = (value) => {
  var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
  if (obj == null) {
    obj = value[__knownSymbol("iterator")]();
    method = (k) => it[k] = (x) => obj[k](x);
  } else {
    obj = obj.call(value);
    method = (k) => it[k] = (v) => {
      if (isAwait) {
        isAwait = false;
        if (k === "throw") throw v;
        return v;
      }
      isAwait = true;
      return {
        done: false,
        value: new __await(new Promise((resolve) => {
          var x = obj[k](v);
          if (!(x instanceof Object)) __typeError("Object expected");
          resolve(x);
        }), 1)
      };
    };
  }
  return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
    throw x;
  }, "return" in obj && method("return"), it;
};

// ../../js/dist/runtime/bindings.js
var bindings_exports = {};
__export(bindings_exports, {
  FlaxProxyBase: () => FlaxProxyBase,
  asDart: () => asDart,
  bindDartExtension: () => bindDartExtension,
  bindInstanceType: () => bindInstanceType,
  bindingMethods: () => bindingMethods,
  bindingVersion: () => bindingVersion,
  componentStateCall: () => componentStateCall,
  componentStateWidget: () => componentStateWidget,
  construct: () => construct,
  constructAsyncIterableStream: () => constructAsyncIterableStream,
  constructDeferredObject: () => constructDeferredObject,
  constructExtendedProxy: () => constructExtendedProxy,
  constructObject: () => constructObject,
  constructProxy: () => constructProxy,
  constructStream: () => constructStream,
  contextHandle: () => contextHandle,
  copyNavigationData: () => copyNavigationData,
  dartSuper: () => dartSuper,
  dartType: () => dartType,
  dartTypes: () => dartTypes,
  defineContext: () => defineContext,
  defineDartCallTypes: () => defineDartCallTypes,
  defineDartTypes: () => defineDartTypes,
  defineEnum: () => defineEnum,
  defineObject: () => defineObject,
  defineProxyBase: () => defineProxyBase,
  defineState: () => defineState,
  defineStateMembers: () => defineStateMembers,
  defineStream: () => defineStream,
  enumValue: () => enumValue,
  extensionReceiver: () => extensionReceiver,
  flaxDartConstructors: () => flaxDartConstructors,
  flaxDartExtensionTypes: () => flaxDartExtensionTypes,
  flaxDartMethodCases: () => flaxDartMethodCases,
  flaxDartTypeCases: () => flaxDartTypeCases,
  flaxDartTypeKey: () => flaxDartTypeKey,
  flaxDartTypeValue: () => flaxDartTypeValue,
  getDartType: () => getDartType,
  installBindingModule: () => installBindingModule,
  invokeDartSuper: () => invokeDartSuper,
  invokeEnum: () => invokeEnum,
  invokeInstance: () => invokeInstance,
  invokeObject: () => invokeObject,
  invokeObjectStatic: () => invokeObjectStatic,
  invokeProxySuper: () => invokeProxySuper,
  invokeStatic: () => invokeStatic,
  invokeStream: () => invokeStream,
  invokeTopLevel: () => invokeTopLevel,
  isBinding: () => isBinding,
  mountRoot: () => mountRoot,
  registerComponent: () => registerComponent,
  registerComponentBase: () => registerComponentBase,
  registerComponentState: () => registerComponentState,
  registerComponentStateVariant: () => registerComponentStateVariant,
  registerPage: () => registerPage,
  widgetProxyFactory: () => widgetProxyFactory
});
module.exports = __toCommonJS(bindings_exports);
var import_index = require("@flax/core");

// ../../js/dist/runtime/references.js
var ReferenceCache = class {
  constructor() {
    __publicField(this, "handles", /* @__PURE__ */ new WeakMap());
    __publicField(this, "aliases", /* @__PURE__ */ new Map());
    __publicField(this, "cursor");
  }
  get(type, id) {
    const aliases = this.aliases.get(id);
    if (!aliases)
      return null;
    for (const alias of aliases) {
      const value = alias.deref();
      if (!value) {
        aliases.delete(alias);
        continue;
      }
      const handle = this.handles.get(value);
      if ((handle == null ? void 0 : handle.alive) && handle.type === type)
        return value;
    }
    return null;
  }
  track(value, type, id) {
    var _a2;
    const current = this.handles.get(value);
    if (current) {
      if (!current.alive || current.type !== type || current.id !== id)
        throw new TypeError("Object identity mismatch");
      return;
    }
    this.handles.set(value, { type, id, alive: true });
    const aliases = (_a2 = this.aliases.get(id)) != null ? _a2 : /* @__PURE__ */ new Set();
    aliases.add(new WeakRef(value));
    this.aliases.set(id, aliases);
  }
  transfer(source, target) {
    const ref = this.handles.get(source);
    if (!ref || !ref.alive)
      throw new TypeError("Invalid Dart object alias");
    this.track(target, ref.type, ref.id);
    for (const alias of this.aliases.get(ref.id)) {
      const value = alias.deref();
      if (!value || value === source)
        this.aliases.get(ref.id).delete(alias);
    }
    this.handles.delete(source);
  }
  release(id) {
    var _a2;
    for (const alias of (_a2 = this.aliases.get(id)) != null ? _a2 : []) {
      const value = alias.deref();
      const handle = value && this.handles.get(value);
      if (handle)
        handle.alive = false;
    }
    this.aliases.delete(id);
  }
  sweep() {
    var _a2;
    const expired = [];
    (_a2 = this.cursor) != null ? _a2 : this.cursor = this.aliases.keys();
    for (let i = 0; i < 64; i++) {
      const next = this.cursor.next();
      if (next.done) {
        this.cursor = void 0;
        break;
      }
      const aliases = this.aliases.get(next.value);
      if (!aliases)
        continue;
      for (const alias of aliases) {
        if (!alias.deref())
          aliases.delete(alias);
      }
      if (aliases.size === 0) {
        this.aliases.delete(next.value);
        expired.push(next.value);
      }
    }
    return expired;
  }
};

// ../../js/dist/runtime/dart_types.js
var flaxDartTypeValue = /* @__PURE__ */ Symbol("Flax Dart type value");
var flaxDartTypeKey = /* @__PURE__ */ Symbol("Flax Dart type key");
var flaxDartTypeCases = /* @__PURE__ */ Symbol("Flax Dart type cases");
var flaxDartMethodCases = /* @__PURE__ */ Symbol("Flax Dart method cases");
var flaxDartExtensionTypes = /* @__PURE__ */ Symbol("Flax Dart extension types");
var unwrapTypeResult = (value) => value;
function installDartTypeUnwrap(unwrap) {
  unwrapTypeResult = unwrap;
}
var descriptions = /* @__PURE__ */ new WeakMap();
function registerDartTypeDescription(value, description) {
  descriptions.set(value, description);
}
function dartTypeDescription(value) {
  const description = value !== null && (typeof value === "object" || typeof value === "function") ? descriptions.get(value) : void 0;
  if (!description)
    throw new TypeError("Expected an authenticated Dart type");
  return description;
}
function token(description) {
  const value = Object.freeze({});
  descriptions.set(value, Object.freeze(description));
  return value;
}
function primitive(kind, nullable) {
  return token([kind, null, [], nullable]);
}
var dartTypes = Object.freeze({
  of(value) {
    const host = globalThis;
    if (!host.__flaxDartType)
      throw new Error("Dart types require the Flax engine");
    const result = host.__flaxDartType(24, "of", value);
    return unwrapTypeResult(result);
  },
  string: primitive("String", false),
  bool: primitive("bool", false),
  int: primitive("int", false),
  double: primitive("double", false),
  num: primitive("num", false),
  bigInt: primitive("BigInt", false),
  void: primitive("void", false),
  never: primitive("Never", false),
  null: primitive("Null", true),
  object: primitive("any", false),
  unknown: primitive("any", true),
  widget: token([
    "widget",
    null,
    [],
    false
  ]),
  list(item) {
    return token(["list", null, [dartTypeDescription(item)], false]);
  },
  iterable(item) {
    return token(["iterable", null, [dartTypeDescription(item)], false]);
  },
  map(key, value) {
    return token([
      "map",
      null,
      [dartTypeDescription(key), dartTypeDescription(value)],
      false
    ]);
  },
  set(item) {
    return token(["set", null, [dartTypeDescription(item)], false]);
  },
  future(item) {
    return token(["future", null, [dartTypeDescription(item)], false]);
  },
  futureOr(item) {
    return token(["futureOr", null, [dartTypeDescription(item)], false]);
  },
  stream(item) {
    return token(["stream", null, [dartTypeDescription(item)], false]);
  },
  nullable(type) {
    const [kind, id, args] = dartTypeDescription(type);
    return token([kind, id, args, true]);
  }
});

// ../../js/dist/runtime/bindings.js
installDartTypeUnwrap(unwrapCall);
var nativeApply = Reflect.apply;
var nativeWeakMap = WeakMap;
var nativeIsArray = Array.isArray;
var nativeIsView = ArrayBuffer.isView;
var bindingVersion = 24;
var supportedBindingCapabilities = /* @__PURE__ */ new Set([
  "native-functions",
  "lazy-js-iterables",
  "callback-map-keys",
  "proxy-super-constructors",
  "bottom-types",
  "explicit-generic-types",
  "engine-type-handles",
  "generic-call-types",
  "dart-type-tokens",
  "generic-member-views",
  "instance-checks",
  "native-core-inputs",
  "native-bigint",
  "native-widget-proxies",
  "widget-interface-proxies",
  "native-navigation-objects",
  "shared-buffers",
  "shared-uint8"
]);
function installBindingModule(moduleId, uiProtocol, requiredCapabilities) {
  if (typeof moduleId !== "string" || moduleId.length === 0 || moduleId.indexOf("/") < 1 || moduleId.indexOf("/") !== moduleId.lastIndexOf("/") || moduleId.startsWith("/") || moduleId.endsWith("/")) {
    throw new TypeError("Invalid binding moduleId");
  }
  if (uiProtocol !== bindingVersion) {
    throw new TypeError(`Incompatible binding uiProtocol: ${uiProtocol}`);
  }
  let previous;
  for (const capability of requiredCapabilities) {
    if (typeof capability !== "string" || previous !== void 0 && capability <= previous) {
      throw new TypeError("requiredCapabilities must be sorted unique strings");
    }
    previous = capability;
    if (!supportedBindingCapabilities.has(capability)) {
      throw new TypeError(`Unsupported binding capability ${capability}`);
    }
  }
  return Object.freeze({
    moduleId,
    uiProtocol,
    requiredCapabilities: Object.freeze([...requiredCapabilities]),
    construct,
    constructProxy,
    constructObject,
    constructDeferredObject,
    constructStream,
    constructAsyncIterableStream,
    bindInstanceType,
    defineDartTypes,
    defineObject,
    defineStream,
    invokeObject,
    invokeObjectStatic,
    invokeStream,
    enumValue,
    defineEnum,
    invokeEnum,
    defineContext,
    defineState,
    contextHandle,
    invokeStatic,
    invokeInstance,
    invokeTopLevel
  });
}
var components = /* @__PURE__ */ new WeakMap();
var componentTypes = /* @__PURE__ */ new WeakMap();
var componentBases = /* @__PURE__ */ new WeakMap();
function registerComponentBase(type, stateful) {
  componentBases.set(type.prototype, stateful);
}
function componentType(type) {
  if (typeof type !== "function" || !type.prototype || componentBases.has(type.prototype))
    throw new TypeError("Expected a custom component constructor");
  const existing = componentTypes.get(type);
  if (existing)
    return existing;
  let prototype = Object.getPrototypeOf(type.prototype);
  while (prototype !== null) {
    const stateful = componentBases.get(prototype);
    if (stateful !== void 0) {
      const info = Object.freeze({
        type: nextComponentType++,
        name: type.name || "AnonymousComponent",
        stateful
      });
      componentTypes.set(type, info);
      return info;
    }
    prototype = Object.getPrototypeOf(prototype);
  }
  throw new TypeError("Expected a custom component constructor");
}
var nextComponent = 1;
var nextComponentType = 1;
var componentStates = /* @__PURE__ */ new WeakMap();
function registerComponent(instance, type, stateful, key) {
  const info = componentType(type);
  if (info.stateful !== stateful)
    throw new TypeError("Invalid component kind");
  components.set(instance, { ...info, id: nextComponent++, key: key != null ? key : null });
}
function registerComponentState(instance) {
  componentStates.set(instance, {
    id: null,
    widget: null,
    variant: null,
    retired: false,
    claimed: false
  });
}
function registerComponentStateVariant(instance, variant) {
  const state = componentStates.get(instance);
  if (!state || state.claimed || state.retired)
    throw new Error("State variant must be selected by a fresh State");
  if (typeof variant !== "string" || variant.length === 0)
    throw new TypeError("Expected a State variant identity");
  if (state.variant !== null && state.variant !== variant)
    throw new Error("State variant is already selected");
  state.variant = variant;
}
function componentStateWidget(instance) {
  const state = componentStates.get(instance);
  if (!(state == null ? void 0 : state.widget) || state.retired)
    throw new Error("State has no mounted widget");
  return state.widget;
}
function componentStateCall(instance, operation, args) {
  const state = componentStates.get(instance);
  if (!state || state.retired || state.id === null) {
    if (operation === "mounted")
      return false;
    throw new Error("State is not mounted or has been disposed");
  }
  const call = globalThis.__flaxComponent;
  if (!call)
    throw new Error("Components require a FlaxView host");
  return call(bindingVersion, state.id, operation, ...args);
}
function synchronous(value, operation = "Component callbacks") {
  if (value !== null && (typeof value === "object" || typeof value === "function") && typeof value.then === "function") {
    throw new TypeError(`${operation} must be synchronous; Promise is not supported`);
  }
  return value;
}
function isBinding(value) {
  return typeof value === "object" && value !== null && "kind" in value && value.kind === "binding";
}
function construct(kind, type, ctor, parameters, positional, options) {
  if (options === null || typeof options !== "object" || Array.isArray(options)) {
    throw new TypeError("Named arguments must be an options object");
  }
  const names = new Set(parameters.filter((p) => !p.positional).map((p) => p.name));
  for (const name of Object.keys(options)) {
    if (!names.has(name))
      throw new TypeError(`Unsupported argument: ${type}.${name}`);
  }
  let index = 0;
  const args = {};
  for (const parameter of parameters) {
    const value = parameter.positional ? positional[index++] : options[parameter.name];
    if (value === void 0) {
      if (parameter.required) {
        throw new TypeError(`Missing required argument: ${type}.${parameter.name}`);
      }
      continue;
    }
    if (isBinding(value) && parameter.fixed) {
      throw new TypeError("This argument is fixed; bind the containing Widget parameter instead");
    }
    if (isBinding(value) && (kind !== "widget" || parameter.name === "key")) {
      throw new TypeError("Bind widget properties, not keys or value constructor fields");
    }
    args[parameter.name] = kind === "widget" && Array.isArray(value) ? Object.freeze([...value]) : value;
  }
  const descriptor = {
    kind: kind === "widget" ? "widget" : "value",
    type,
    ctor,
    args: Object.freeze(args)
  };
  if (parameters.some((p) => p.readonly)) {
    return Object.freeze(Object.assign(descriptor, Object.fromEntries(parameters.filter((p) => p.readonly).map((p) => [
      p.name,
      Object.prototype.hasOwnProperty.call(args, p.name) ? args[p.name] : p.defaultValue
    ]))));
  }
  return Object.freeze(descriptor);
}
function defineEnum(type, names, members = {}, cached = [], parents = []) {
  if (enumDefinitions.has(type))
    throw new Error(`Duplicate enum type: ${type}`);
  if (new Set(names).size !== names.length)
    throw new TypeError("Duplicate enum constant");
  const prototype = /* @__PURE__ */ Object.create(null);
  const requireReceiver = (value) => {
    const identity = enumIdentities.get(value);
    if (!identity || identity.type !== type)
      throw new TypeError("Invalid or foreign Dart enum");
    return identity;
  };
  Object.defineProperties(prototype, {
    name: {
      get() {
        return requireReceiver(this).name;
      },
      configurable: true
    },
    index: {
      get() {
        return requireReceiver(this).index;
      },
      configurable: true
    }
  });
  for (const [name, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(members))) {
    const values = cached.includes(name) ? /* @__PURE__ */ new WeakMap() : void 0;
    Object.defineProperty(prototype, name, {
      ...descriptor.value === void 0 ? {} : {
        value(...args) {
          requireReceiver(this);
          return descriptor.value.apply(this, args);
        }
      },
      ...descriptor.get ? {
        get() {
          requireReceiver(this);
          if (values == null ? void 0 : values.has(this))
            return values.get(this);
          const value = descriptor.get.call(this);
          values == null ? void 0 : values.set(this, value);
          return value;
        }
      } : {},
      ...descriptor.set ? {
        set(value) {
          requireReceiver(this);
          descriptor.set.call(this, value);
        }
      } : {}
    });
  }
  enumDefinitions.set(type, {
    names: new Set(names),
    prototype: Object.freeze(prototype)
  });
  instanceParents.set(type, Object.freeze([...parents]));
}
function enumValue(type, name) {
  const definition = enumDefinitions.get(type);
  if (!definition || !definition.names.has(name))
    throw new TypeError(`Unknown Dart enum: ${type}.${name}`);
  const key = `${type}
${name}`;
  let value = enums.get(key);
  if (!value) {
    value = Object.freeze(Object.create(definition.prototype));
    enums.set(key, value);
    enumIdentities.set(value, {
      type,
      name,
      index: [...definition.names].indexOf(name)
    });
  }
  return value;
}
var enums = /* @__PURE__ */ new Map();
var enumDefinitions = /* @__PURE__ */ new Map();
var enumIdentities = /* @__PURE__ */ new WeakMap();
function invokeEnum(receiver, operations, args) {
  const identity = enumIdentities.get(receiver);
  const operation = identity && operations[identity.index];
  if (!operation)
    throw new TypeError("Invalid or foreign Dart enum");
  return invokeTopLevel(operation, [receiver, ...args]);
}
var contextTypes = /* @__PURE__ */ new Map();
var statePrototypes = /* @__PURE__ */ new Map();
var contextPrototypes = /* @__PURE__ */ new Map();
var contextStates = /* @__PURE__ */ new WeakMap();
var callbackMemos = /* @__PURE__ */ new WeakMap();
var recordShapes = /* @__PURE__ */ new WeakMap();
var recordDartTypes = /* @__PURE__ */ new WeakMap();
function defineContext(type, fields) {
  if (contextTypes.has(type))
    throw new Error(`Duplicate context type: ${type}`);
  contextTypes.set(type, Object.freeze([...fields]));
}
function contextHandle(value, type) {
  if (value === null || value === void 0)
    return value;
  const state = typeof value === "object" ? contextStates.get(value) : void 0;
  if (!state || state.type !== type || !state.alive) {
    throw new TypeError("Invalid, foreign, or unmounted BuildContext");
  }
  return state.id;
}
function invokeStatic(type, member, args) {
  return invokeOperation("static", type, 0, "call", member, args);
}
function invokeTopLevel(id, args) {
  return invokeOperation("top", id, 0, "call", "", args);
}
function stringProperty(value, name) {
  if (value === null || typeof value !== "object" && typeof value !== "function") {
    return null;
  }
  try {
    const property = value[name];
    return typeof property === "string" ? property : null;
  } catch {
    return null;
  }
}
function rejectionDetails(value) {
  const propertyMessage = stringProperty(value, "message");
  let message = propertyMessage;
  if (message === null) {
    try {
      message = String(value);
    } catch {
      message = "Promise rejected";
    }
  }
  return { message, stack: stringProperty(value, "stack") };
}
function errorDetails(value) {
  if (value === null || typeof value !== "object" && typeof value !== "function")
    return null;
  try {
    if (Object.prototype.toString.call(value) !== "[object Error]")
      return null;
  } catch {
    return null;
  }
  return rejectionDetails(value);
}
var callFailures = /* @__PURE__ */ new WeakMap();
var NativeError = Error;
function failedCall(error) {
  const failure = Object.freeze({ error, ...rejectionDetails(error) });
  callFailures.set(failure, error);
  return failure;
}
function unwrapCall(value) {
  if (value !== null && typeof value === "object" && callFailures.has(value))
    throw callFailures.get(value);
  return value;
}
function reportCleanupError(error) {
  var _a2, _b;
  const host = globalThis;
  const details = rejectionDetails(error);
  try {
    const report = details.stack && !details.stack.includes(details.message) ? `${details.message}
${details.stack}` : (_a2 = details.stack) != null ? _a2 : details.message;
    (_b = host.__flaxAsyncError) == null ? void 0 : _b.call(host, report);
  } catch {
  }
}
function settlePromise(id, record, success, value) {
  var _a2, _b;
  if (!record.active || ((_a2 = promises.get(id)) == null ? void 0 : _a2.deref()) !== record)
    return;
  const host = globalThis;
  const rejection = success ? null : rejectionDetails(value);
  record.active = false;
  promises.delete(id);
  if (!host.__flaxPromiseSettlement)
    return;
  if (success) {
    host.__flaxPromiseSettlement(bindingVersion, id, true, value, null);
    return;
  }
  host.__flaxPromiseSettlement(bindingVersion, id, false, value !== null && typeof value === "object" && ((_b = objectHandles.get(value)) == null ? void 0 : _b.type) === "flax:dart-error" ? value : rejection.message, rejection.stack);
}
var pageFactories = /* @__PURE__ */ new Map();
var registrationOpen = true;
function hotDev() {
  var _a2;
  return (_a2 = globalThis.__flaxModules) == null ? void 0 : _a2.dev;
}
function registerPage(name, factory) {
  var _a2;
  if (typeof name !== "string" || name.length === 0 || typeof factory !== "function")
    throw new TypeError("Expected a page name and synchronous factory");
  if ((_a2 = hotDev()) == null ? void 0 : _a2.capturePage(name, factory, (next) => pageFactories.set(name, next)))
    return;
  if (!registrationOpen)
    throw new Error("Page registration is closed");
  if (pageFactories.has(name))
    throw new Error(`Duplicate page: ${name}`);
  pageFactories.set(name, factory);
}
function freezeData(value) {
  if (value !== null && typeof value === "object") {
    for (const item of Object.values(value))
      freezeData(item);
    Object.freeze(value);
  }
  return value;
}
var stateTypes = /* @__PURE__ */ new Map();
var stateHandles = /* @__PURE__ */ new WeakMap();
var futures = /* @__PURE__ */ new Map();
var futureOwners = /* @__PURE__ */ new WeakMap();
var futureFinalizer = new FinalizationRegistry((id) => futures.delete(id));
var promises = /* @__PURE__ */ new Map();
var promiseFinalizer = new FinalizationRegistry((id) => promises.delete(id));
function defineState(type, fields, methods) {
  if (stateTypes.has(type))
    throw new Error(`Duplicate State type: ${type}`);
  stateTypes.set(type, { fields, methods });
}
function invokeInstance(receiver, type, method, args) {
  const ref = stateHandles.get(receiver);
  if (!ref || ref.type !== type && objectViewTypes.get(ref.type) !== type)
    throw new TypeError("Invalid or foreign State");
  return invokeOperation("state", ref.type, ref.id, "call", method, args);
}
var objectTypes = /* @__PURE__ */ new Map();
var objectViewTypes = /* @__PURE__ */ new Map();
var references = new ReferenceCache();
var objectHandles = references.handles;
var instanceParents = /* @__PURE__ */ new Map();
var instanceTypes = /* @__PURE__ */ new WeakMap();
var genericInstanceTypes = /* @__PURE__ */ new Set();
var genericTypes = /* @__PURE__ */ new WeakMap();
var selectedProxyTypes = /* @__PURE__ */ new WeakMap();
var genericCalls = /* @__PURE__ */ new WeakMap();
var genericMethods = /* @__PURE__ */ new Map();
var selectedMethods = /* @__PURE__ */ new WeakMap();
var extensionViews = /* @__PURE__ */ new WeakMap();
function bindDartExtension(view, owner, receiver, methods) {
  extensionViews.set(view, { owner, receiver, methods });
}
function extensionReceiver(view, owner) {
  const reference = extensionViews.get(view);
  if (!reference || reference.owner !== owner)
    throw new TypeError("Invalid extension view");
  return reference.receiver;
}
function defineDartCallTypes(value, target) {
  if (typeof value !== "function" || genericCalls.has(value))
    throw new TypeError("Conflicting generated Dart callable");
  genericCalls.set(value, { target, selected: /* @__PURE__ */ new Map() });
  return value;
}
function defineDartTypes(value, type, target) {
  if (instanceTypes.get(value) !== type || genericTypes.has(value))
    throw new TypeError("Conflicting generated Dart type");
  if ("$type" in value)
    throw new TypeError("Conflicting generated $type entry");
  Object.defineProperty(value, "$type", { value: selectDartClass });
  genericTypes.set(value, { type, target, selected: /* @__PURE__ */ new Map() });
  genericInstanceTypes.add(type);
}
function selectDartClass(...types) {
  return nativeApply(dartType, void 0, [this, ...types]);
}
function selectDart(operation, id, descriptions2, ...extra) {
  const host = globalThis;
  if (!host.__flaxDartType)
    throw new Error("Dart types require the Flax engine");
  const result = unwrapCall(host.__flaxDartType(bindingVersion, operation, id, JSON.stringify(descriptions2), ...extra));
  if (operation === "callback") {
    if (typeof result !== "function")
      throw new TypeError("Invalid Dart callback selection");
  } else if (typeof result !== "string")
    throw new TypeError("Invalid Dart type selection");
  return result;
}
function dartType(value, ...args) {
  var _a2, _b, _c, _d;
  if (typeof args[0] === "string") {
    const member = args[0];
    const extension = extensionViews.get(value);
    if (extension) {
      const target3 = Object.hasOwn(extension.methods, member) ? extension.methods[member] : void 0;
      if (!target3)
        throw new TypeError("Expected a generated generic method");
      const descriptions3 = args.slice(1).map(dartTypeDescription);
      const key3 = `${member}:${JSON.stringify(descriptions3)}`;
      let cache2 = selectedMethods.get(value);
      if (!cache2)
        selectedMethods.set(value, cache2 = /* @__PURE__ */ new Map());
      const cached3 = cache2.get(key3);
      if (cached3)
        return cached3;
      const argumentsFor2 = memberArguments(target3.parameters.slice(1));
      const id = descriptions3.length ? selectDart("function", target3.id, descriptions3) : target3.id;
      const selected3 = (...inputs) => invokeTopLevel(id, [extension.receiver, ...argumentsFor2(inputs)]);
      cache2.set(key3, selected3);
      return selected3;
    }
    const nativeType = instanceTypes.get(value);
    const ref = nativeType === void 0 ? requireDartReference(value) : value;
    const type = (_c = nativeType != null ? nativeType : (_a2 = objectHandles.get(ref)) == null ? void 0 : _a2.type) != null ? _c : (_b = stateHandles.get(ref)) == null ? void 0 : _b.type;
    const owner = type === void 0 ? void 0 : (_d = objectViewTypes.get(type)) != null ? _d : type;
    const definition = owner === void 0 ? void 0 : genericMethods.get(owner);
    const key2 = JSON.stringify(args.slice(1).map(dartTypeDescription));
    const declarationMember = member.startsWith("@super:") ? member.slice(7) : member;
    const target2 = definition && Object.hasOwn(definition.methods, declarationMember) ? definition.methods[declarationMember] : void 0;
    if (!definition || !target2 || owner === void 0)
      throw new TypeError("Expected a generated generic method");
    let cache = selectedMethods.get(value);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      selectedMethods.set(value, cache);
    }
    const cacheKey = `${owner}\0${member}\0${key2}`;
    const cached2 = cache.get(cacheKey);
    if (cached2)
      return cached2;
    const argumentsFor = memberArguments(target2.parameters);
    const descriptions2 = args.slice(1).map(dartTypeDescription);
    const invoke = definition.category === "stream" ? invokeStream : definition.category === "state" ? invokeInstance : invokeObject;
    if (nativeType !== void 0) {
      const selections = /* @__PURE__ */ new WeakMap();
      const selected3 = function(...inputs) {
        let operation = selections.get(this);
        if (!operation) {
          operation = selectDart("method", nativeType, descriptions2, member, requireDartReference(this));
          selections.set(this, operation);
        }
        return invoke(this, nativeType, operation, argumentsFor(inputs));
      };
      cache.set(cacheKey, selected3);
      return selected3;
    }
    const targetId2 = selectDart("method", type, descriptions2, member, ref);
    const selected2 = (...inputs) => invoke(ref, type, targetId2, argumentsFor(inputs));
    cache.set(cacheKey, selected2);
    return selected2;
  }
  const call = typeof value === "function" ? genericCalls.get(value) : void 0;
  if (call) {
    if (!args.length)
      return value;
    const key2 = JSON.stringify(args.map(dartTypeDescription));
    const target2 = call.target;
    const cached2 = call.selected.get(key2);
    if (cached2)
      return cached2;
    if (target2.callback !== void 0) {
      const selected3 = selectDart("callback", target2.id, args.map(dartTypeDescription), target2.callback);
      call.selected.set(key2, selected3);
      return selected3;
    }
    const argumentsFor = memberArguments(target2.parameters);
    const targetId2 = selectDart("function", target2.id, args.map(dartTypeDescription));
    const selected2 = (...inputs) => invokeTopLevel(targetId2, argumentsFor(inputs));
    call.selected.set(key2, selected2);
    return selected2;
  }
  if (!instanceTypes.has(value))
    throw new TypeError("Expected a generated Dart class");
  if (!args.length)
    return value;
  const metadata = genericTypes.get(value);
  const arguments_ = args.map(dartTypeDescription);
  const key = JSON.stringify(arguments_);
  const source = metadata == null ? void 0 : metadata.target;
  if (!metadata || !source)
    throw new TypeError("Expected a generated generic class");
  const cached = metadata.selected.get(key);
  if (cached)
    return cached;
  const targetId = selectDart("class", metadata.type, arguments_);
  if (objectTypes.has(metadata.type) || streamTypes.has(metadata.type) || stateTypes.has(metadata.type))
    registerObjectView(targetId, metadata.type);
  else
    objectViewTypes.set(targetId, metadata.type);
  const target = {
    ...source,
    id: targetId,
    ...source.proxy ? { proxy: { ...source.proxy, type: targetId } } : {}
  };
  const factories = /* @__PURE__ */ new Map();
  const create = (name, inputs) => {
    var _a3;
    const parameters = target.constructors[name];
    if (!parameters)
      throw new TypeError("No selected Dart constructor");
    if (target.category === "enum") {
      let id = factories.get(name);
      if (!id) {
        id = selectDart("function", target.factories[name], arguments_);
        factories.set(name, id);
      }
      return invokeTopLevel(id, memberArguments(parameters)(inputs));
    }
    const positional = parameters.filter((p) => p.positional).length;
    const named = parameters.some((p) => !p.positional);
    if (inputs.length > positional + (named ? 1 : 0))
      throw new TypeError("Too many constructor arguments");
    const values = inputs.slice(0, positional);
    const options = named && inputs[positional] !== void 0 ? inputs[positional] : {};
    if (target.category === "object" || target.category === "widget" && ((_a3 = target.proxy) == null ? void 0 : _a3.nativeWidget))
      return constructObject("object", target.id, name, parameters, values, options);
    if (target.category === "stream")
      return constructStream("stream", target.id, name, parameters, values, options);
    if (target.category === "widget" || target.category === "route" || target.category === "page")
      return construct(target.category, target.id, name, parameters, values, options);
    throw new TypeError("This Dart type has no constructor");
  };
  const selected = function(...inputs) {
    if (new.target) {
      if (!target.proxy)
        throw new TypeError("This Dart factory is not a JS subclass constructor");
      return Reflect.construct(value, inputs, new.target);
    }
    return create("", inputs);
  };
  if ("prototype" in value)
    selected.prototype = value.prototype;
  Object.setPrototypeOf(selected, value);
  for (const name of Object.keys(target.constructors)) {
    if (name)
      Object.defineProperty(selected, name, {
        value: (...inputs) => create(name, inputs)
      });
  }
  if (target.proxy) {
    const proxy = target.proxy;
    proxyLayouts.set(proxy, { prototype: selected.prototype });
    selectedProxyTypes.set(selected, proxy);
    Object.defineProperty(selected, "implement", {
      value: (inputs, implementation) => constructProxy(proxy, inputs, implementation)
    });
  }
  bindInstanceType(selected, target.id, [metadata.type]);
  genericInstanceTypes.add(target.id);
  registerDartTypeDescription(selected, ["class", metadata.type, arguments_, false]);
  metadata.selected.set(key, selected);
  return selected;
}
function requireDartReference(value) {
  if (value === null || typeof value !== "object" && typeof value !== "function")
    throw new TypeError("Expected a Dart reference");
  const ref = objectHandles.get(value);
  if (ref) {
    if (!ref.alive)
      throw new TypeError("Released Dart reference");
    return value;
  }
  if (stateHandles.has(value) || enumIdentities.has(value))
    return value;
  if (recordDartTypes.has(value))
    return value;
  const state = componentStates.get(value);
  if (state && !state.retired && state.id !== null)
    return value;
  throw new TypeError("Expected a live Dart reference from this session");
}
function asDart(value, target) {
  const type = instanceTypes.get(target);
  if (!type)
    throw new TypeError("Expected a generated Dart type");
  return invokeOperation("reference", type, 0, "cast", "", [
    requireDartReference(value)
  ]);
}
function getDartType(value) {
  return invokeOperation("reference", "", 0, "type", "", [
    requireDartReference(value)
  ]);
}
function bindInstanceType(value, type, parents) {
  if (!instanceParents.has(type))
    instanceParents.set(type, Object.freeze([...parents]));
  Object.defineProperty(value, Symbol.hasInstance, {
    value(candidate) {
      var _a2, _b, _c, _d, _e, _f, _g;
      if (this !== value) {
        return typeof this === "function" && Function.prototype[Symbol.hasInstance].call(this, candidate);
      }
      if (candidate === null || typeof candidate !== "object" && typeof candidate !== "function")
        return false;
      const object = objectHandles.get(candidate);
      const context = contextStates.get(candidate);
      if ((object == null ? void 0 : object.alive) === false || (context == null ? void 0 : context.alive) === false)
        return false;
      const source = (_e = (_c = (_b = object == null ? void 0 : object.type) != null ? _b : (_a2 = stateHandles.get(candidate)) == null ? void 0 : _a2.type) != null ? _c : context == null ? void 0 : context.type) != null ? _e : (_d = enumIdentities.get(candidate)) == null ? void 0 : _d.type;
      if (!source) {
        return recordDartTypes.has(candidate) ? Boolean(invokeOperation("reference", type, 0, "is", "", [candidate])) : false;
      }
      const root = (_f = objectViewTypes.get(type)) != null ? _f : type;
      if (source !== type && source !== root && !((_g = instanceParents.get(source)) == null ? void 0 : _g.includes(root)))
        return false;
      return genericInstanceTypes.has(type) || stateHandles.has(candidate) || context !== void 0 ? Boolean(invokeOperation("reference", type, 0, "is", "", [candidate])) : true;
    }
  });
  instanceTypes.set(value, type);
  registerDartTypeDescription(value, ["class", type, [], false]);
  return value;
}
var constructingExtendedProxies = /* @__PURE__ */ new WeakSet();
var deferredObjects = /* @__PURE__ */ new WeakMap();
var iterableObjectTypes = /* @__PURE__ */ new Set();
var operationIds = /* @__PURE__ */ new Map();
function invokeOperation(category, type, id, operation, member, args) {
  const host = globalThis;
  if (!host.__flaxResolveOperation || !host.__flaxInvokeOperation)
    throw new Error("Dart bindings require the Flax engine");
  const key = `${category}\0${type}\0${operation}\0${member}`;
  let slot = operationIds.get(key);
  if (slot === void 0) {
    slot = host.__flaxResolveOperation(bindingVersion, type, category, operation, member);
    operationIds.set(key, slot);
  }
  return (0, import_index.withBindingSnapshots)(() => unwrapCall(host.__flaxInvokeOperation(slot, id, ...args)));
}
function cachedObject(type, id) {
  return references.get(type, id);
}
function trackObject(value, type, id) {
  references.track(value, type, id);
}
function transferObjectAlias(source, target) {
  const host = globalThis;
  if (!host.__flaxBindPeer)
    throw new Error("Object aliases require the Flax engine");
  host.__flaxBindPeer(bindingVersion, source, target);
  references.transfer(source, target);
}
function defineObject(type, fields, setters, methods, removers, collectionKind) {
  if (objectTypes.has(type))
    throw new Error(`Duplicate object type: ${type}`);
  let iteratorMember = "toArray";
  if (collectionKind !== void 0) {
    const selected = /* @__PURE__ */ new Set([...fields, ...setters, ...Object.keys(methods)]);
    const collection = collectionDefinition(type, collectionKind, selected);
    if (selected.has("toArray"))
      iteratorMember = "@collection:toArray";
    fields = [...collection.fields, ...fields];
    methods = {
      ...collection.methods,
      ...methods
    };
    if (collectionKind !== "map")
      iterableObjectTypes.add(type);
  }
  objectTypes.set(type, {
    fields,
    setters,
    methods,
    removers,
    collectionKind,
    iteratorMember
  });
}
function collectionDefinition(type, kind, selected) {
  const names = kind === "map" ? ["get", "set", "containsKey", "remove", "clear", "toMap"] : kind === "list" ? ["contains", "get", "set", "add", "addAll", "removeAt", "clear", "toArray"] : kind === "set" ? ["contains", "add", "addAll", "remove", "clear", "toArray", "toSet"] : kind === "iterable" ? ["contains", "toArray"] : null;
  if (names === null)
    throw new TypeError(`Invalid collection kind: ${kind}`);
  const methods = {};
  for (const name of names) {
    if (selected.has(name))
      continue;
    methods[name] = function(...args) {
      return invokeObject(this, type, name, args);
    };
  }
  return {
    fields: (kind === "map" ? ["length"] : ["length", "isEmpty"]).filter((name) => !selected.has(name)),
    methods
  };
}
var streamTypes = /* @__PURE__ */ new Map();
function defineStream(type, fields, methods) {
  if (streamTypes.has(type))
    throw new Error(`Duplicate Stream type: ${type}`);
  streamTypes.set(type, { fields, methods });
}
var asyncIterableSources = /* @__PURE__ */ new Map();
var asyncIterableOwners = /* @__PURE__ */ new WeakMap();
var asyncIterableFinalizer = new FinalizationRegistry((id) => asyncIterableSources.delete(id));
var nextAsyncIterableSource = 1;
function constructAsyncIterableStream(type, source) {
  if (source === null || typeof source !== "object" && typeof source !== "function")
    throw new TypeError("Expected an AsyncIterable");
  const create = globalThis.__flaxCreateAsyncIterableStream;
  if (!create)
    throw new Error("AsyncIterable Streams require a Flax host");
  const id = nextAsyncIterableSource++;
  const record = {
    source,
    iterator: null,
    closed: false,
    pendingReject: null
  };
  asyncIterableSources.set(id, new WeakRef(record));
  asyncIterableFinalizer.register(record, id);
  try {
    const stream = create(bindingVersion, type, id);
    asyncIterableOwners.set(stream, record);
    return stream;
  } catch (error) {
    asyncIterableSources.delete(id);
    throw error;
  }
}
function asyncIterableSource(id) {
  var _a2;
  const record = (_a2 = asyncIterableSources.get(id)) == null ? void 0 : _a2.deref();
  if (!record || record.closed)
    throw new Error("Released AsyncIterable Stream");
  return record;
}
function asyncIterableNext(id) {
  let record;
  try {
    record = asyncIterableSource(id);
    if (record.iterator === null) {
      const factory = record.source[Symbol.asyncIterator];
      if (typeof factory !== "function")
        throw new TypeError("Expected an AsyncIterable");
      const iterator = nativeApply(factory, record.source, []);
      if (iterator === null || typeof iterator !== "object")
        throw new TypeError("Invalid AsyncIterator");
      record.iterator = iterator;
    }
    if (record.pendingReject !== null)
      throw new Error("Concurrent AsyncIterable next");
    const next = record.iterator.next();
    let rejectPending;
    const pending = new Promise((resolve, reject) => {
      rejectPending = reject;
      Promise.resolve(next).then(resolve, reject);
    });
    record.pendingReject = rejectPending;
    return pending.then((result) => {
      record.pendingReject = null;
      if (result === null || typeof result !== "object")
        throw new TypeError("Invalid AsyncIterator result");
      if (result.done) {
        record.closed = true;
        asyncIterableSources.delete(id);
        return [true];
      }
      return [false, result.value];
    }, (error) => {
      record.pendingReject = null;
      throw error;
    });
  } catch (error) {
    return Promise.reject(error);
  }
}
function asyncIterableReturn(id) {
  var _a2;
  const record = (_a2 = asyncIterableSources.get(id)) == null ? void 0 : _a2.deref();
  if (!record || record.closed)
    return Promise.resolve();
  record.closed = true;
  asyncIterableSources.delete(id);
  const rejectPending = record.pendingReject;
  record.pendingReject = null;
  rejectPending == null ? void 0 : rejectPending(new Error("AsyncIterable Stream cancelled"));
  if (record.iterator === null)
    return Promise.resolve();
  const close = record.iterator.return;
  if (typeof close !== "function")
    return Promise.resolve();
  try {
    return Promise.resolve(nativeApply(close, record.iterator, [])).then(() => {
    });
  } catch (error) {
    return Promise.reject(error);
  }
}
function cancelAsyncIterables() {
  for (const id of [...asyncIterableSources.keys()]) {
    void asyncIterableReturn(id).catch(reportCleanupError);
  }
}
function constructStream(_kind, type, ctor, parameters, positional, options) {
  const descriptor = construct("value", type, ctor, parameters, positional, options);
  const create = globalThis.__flaxCreateStream;
  if (!create)
    throw new Error("Dart Streams require a Flax host");
  return (0, import_index.withBindingSnapshots)(() => unwrapCall(create(bindingVersion, type, descriptor)));
}
function callStream(receiver, type, operation, member, args) {
  var _a2;
  const ref = objectHandles.get(receiver);
  if (!ref || !ref.alive)
    throw new TypeError("Invalid or released Dart Stream");
  if (ref.type !== type && objectViewTypes.get(ref.type) !== type)
    throw new TypeError("Invalid or foreign Dart Stream");
  const definition = streamTypes.get((_a2 = objectViewTypes.get(type)) != null ? _a2 : type);
  if (!definition)
    throw new TypeError(`Unknown Stream type: ${type}`);
  return invokeOperation("stream", ref.type, ref.id, operation, member, args);
}
function invokeStream(receiver, type, method, args) {
  if (args.some(isBinding))
    throw new TypeError("Stream methods do not accept bindings");
  return callStream(receiver, type, "call", method, args);
}
var streamPrototypes = /* @__PURE__ */ new Map();
function streamWrapper(type, view, id) {
  var _a2;
  if (view !== type)
    registerObjectView(view, type);
  const cached = cachedObject(view, id);
  if (cached)
    return cached;
  const definition = streamTypes.get((_a2 = objectViewTypes.get(type)) != null ? _a2 : type);
  if (!definition)
    throw new TypeError(`Unknown Stream type: ${type}`);
  let prototype = streamPrototypes.get(type);
  if (!prototype) {
    const prototype2 = {};
    for (const field of definition.fields) {
      Object.defineProperty(prototype2, field, {
        enumerable: true,
        get() {
          return callStream(this, type, "get", field, []);
        }
      });
    }
    for (const [name, method] of Object.entries(definition.methods)) {
      Object.defineProperty(prototype2, name, { value: method });
    }
    Object.defineProperty(prototype2, Symbol.asyncIterator, {
      value() {
        return streamAsyncIterator(this, type);
      }
    });
    Object.freeze(prototype2);
    streamPrototypes.set(type, prototype2);
    return streamWrapper(type, view, id);
  }
  const value = Object.create(prototype);
  const frozen = Object.freeze(value);
  trackObject(frozen, view, id);
  return frozen;
}
function streamAsyncIterator(stream, _type) {
  const host = globalThis;
  const ref = objectHandles.get(stream);
  if (!(ref == null ? void 0 : ref.alive))
    throw new TypeError("Invalid or released Dart Stream");
  const create = host.__flaxCreateStreamIterator;
  const call = host.__flaxStreamIterator;
  if (!create || !call)
    throw new Error("Dart Stream iteration requires a Flax host");
  let iteratorId;
  let pending = false;
  let finished = false;
  const iterator = {
    async next() {
      if (pending)
        throw new Error("Concurrent Stream iterator next");
      if (finished)
        return Promise.resolve({ value: void 0, done: true });
      pending = true;
      try {
        const hasValue = await call(bindingVersion, iteratorId, "next");
        if (hasValue !== true) {
          finished = true;
          return { value: void 0, done: true };
        }
        return {
          value: call(bindingVersion, iteratorId, "current"),
          done: false
        };
      } finally {
        pending = false;
      }
    },
    async return() {
      finished = true;
      await call(bindingVersion, iteratorId, "cancel");
      return { value: void 0, done: true };
    },
    async throw(reason) {
      finished = true;
      await call(bindingVersion, iteratorId, "cancel");
      throw reason;
    }
  };
  iteratorId = create(bindingVersion, ref.id, iterator);
  return iterator;
}
function constructObject(_kind, type, ctor, parameters, positional, options) {
  const descriptor = construct("value", type, ctor, parameters, positional, options);
  const create = globalThis.__flaxCreateObject;
  if (!create)
    throw new Error("Dart objects require a Flax host");
  return (0, import_index.withBindingSnapshots)(() => unwrapCall(create(bindingVersion, type, descriptor)));
}
function constructDeferredObject(type, factory, parameters, positional, options) {
  const descriptor = construct("value", type, factory, parameters, positional, options);
  const value = createObjectWrapper(type);
  deferredObjects.set(value, {
    type,
    factory,
    descriptor,
    materializer: null
  });
  return Object.freeze(value);
}
var proxyLayouts = /* @__PURE__ */ new WeakMap();
function proxyLayout(definition) {
  let prepared = proxyLayouts.get(definition);
  if (!prepared) {
    prepared = {};
    proxyLayouts.set(definition, prepared);
  }
  if (prepared.token !== void 0)
    return prepared.token;
  const supers = new Set(definition.superMembers);
  const contexts = new Set(definition.contextMembers);
  const row = (name, kind, parameters) => {
    const property = prepared.prototype && Object.getOwnPropertyDescriptor(prepared.prototype, name);
    const base = kind === 0 ? property == null ? void 0 : property.value : kind === 1 ? property == null ? void 0 : property.get : property == null ? void 0 : property.set;
    return Object.freeze([
      name,
      kind,
      parameters.filter((p) => p.positional && p.required).length,
      parameters.filter((p) => p.positional).length + (parameters.some((p) => !p.positional) ? 1 : 0) + (kind === 0 && contexts.has(name) ? 1 : 0),
      base,
      supers.has(kind === 0 ? name : `${kind === 1 ? "get" : "set"}:${name}`)
    ]);
  };
  const rows = [
    ...Object.entries(definition.methods).map(([name, parameters]) => row(name, 0, parameters)),
    ...definition.getters.map((name) => row(name, 1, [])),
    ...definition.setters.map((name) => row(name, 2, [{ name: "value", positional: true, required: true }]))
  ];
  const prepare = globalThis.__flaxPrepareProxy;
  if (!prepare)
    throw new Error("Dart proxies require the Flax engine");
  prepared.token = prepare(bindingVersion, definition.type, Object.freeze(rows));
  return prepared.token;
}
function completeProxyAccessors(receiver, definition) {
  var _a2, _b, _c;
  const base = (_a2 = proxyLayouts.get(definition)) == null ? void 0 : _a2.prototype;
  if (!base)
    return;
  for (const name of definition.getters) {
    if (!definition.setters.includes(name))
      continue;
    for (let owner = receiver; owner && owner !== base; owner = Object.getPrototypeOf(owner)) {
      const descriptor = Object.getOwnPropertyDescriptor(owner, name);
      if (!descriptor)
        continue;
      if ("value" in descriptor)
        break;
      const native = Object.getOwnPropertyDescriptor(base, name);
      const get = (_b = descriptor.get) != null ? _b : definition.superMembers.includes(`get:${name}`) ? native == null ? void 0 : native.get : void 0;
      const set = (_c = descriptor.set) != null ? _c : definition.superMembers.includes(`set:${name}`) ? native == null ? void 0 : native.set : void 0;
      if (get !== descriptor.get || set !== descriptor.set) {
        Object.defineProperty(owner, name, {
          ...descriptor,
          ...get ? { get } : {},
          ...set ? { set } : {}
        });
      }
      break;
    }
  }
}
function constructProxy(definition, args, implementation) {
  const names = /* @__PURE__ */ new Set([
    ...Object.keys(definition.methods),
    ...definition.getters,
    ...definition.setters
  ]);
  if (implementation === null || typeof implementation !== "object" || Object.keys(implementation).some((name) => !names.has(name))) {
    throw new TypeError("Invalid proxy implementation");
  }
  completeProxyAccessors(implementation, definition);
  const property = (name) => {
    for (let value = implementation; value; value = Object.getPrototypeOf(value)) {
      const descriptor2 = Object.getOwnPropertyDescriptor(value, name);
      if (descriptor2)
        return descriptor2;
    }
    return void 0;
  };
  for (const name of Object.keys(definition.methods)) {
    const descriptor2 = property(name);
    if (!descriptor2 && definition.superMembers.includes(name))
      continue;
    if (!descriptor2 || ("value" in descriptor2 ? typeof descriptor2.value !== "function" : typeof descriptor2.get !== "function"))
      throw new TypeError(`Missing proxy method: ${name}`);
  }
  for (const name of definition.getters) {
    const descriptor2 = property(name);
    if (!descriptor2 && definition.superMembers.includes(`get:${name}`))
      continue;
    if (!descriptor2 || !("value" in descriptor2) && typeof descriptor2.get !== "function")
      throw new TypeError(`Missing proxy getter: ${name}`);
  }
  for (const name of definition.setters) {
    const descriptor2 = property(name);
    if (!descriptor2 && definition.superMembers.includes(`set:${name}`))
      continue;
    if (!descriptor2 || ("value" in descriptor2 ? !descriptor2.writable : typeof descriptor2.set !== "function"))
      throw new TypeError(`Missing proxy setter: ${name}`);
  }
  const descriptor = proxyDescriptor(definition, args);
  const create = globalThis.__flaxCreateObject;
  if (!create)
    throw new Error("Dart proxies require a Flax host");
  return (0, import_index.withBindingSnapshots)(() => unwrapCall(create(bindingVersion, definition.type, {
    ...descriptor,
    receiver: implementation,
    layout: proxyLayout(definition)
  })));
}
function proxyDescriptor(definition, args) {
  var _a2;
  const positional = definition.parameters.filter((p) => p.positional).length;
  const hasNamed = definition.parameters.some((p) => !p.positional);
  if (args.length > positional + (hasNamed ? 1 : 0))
    throw new TypeError("Too many proxy constructor arguments");
  return construct("value", definition.type, (_a2 = definition.superConstructor) != null ? _a2 : "@implementation", definition.parameters, args.slice(0, positional), args[positional] === void 0 ? {} : args[positional]);
}
var flaxDartConstructors = /* @__PURE__ */ Symbol("Dart constructors");
var proxyDefinitions = /* @__PURE__ */ new WeakMap();
var superCalls = /* @__PURE__ */ new WeakMap();
var selectedConstructors = /* @__PURE__ */ new WeakMap();
function dartSuper(owner, name, ...args) {
  var _a2;
  let definition;
  for (let value = owner; value && !definition; value = Object.getPrototypeOf(value)) {
    definition = (_a2 = selectedProxyTypes.get(value)) != null ? _a2 : proxyDefinitions.get(value);
  }
  if (!definition || typeof name !== "string" || !definition.constructors || !Object.prototype.hasOwnProperty.call(definition.constructors, name))
    throw new TypeError("Unknown Dart super constructor");
  const token2 = Object.freeze({});
  superCalls.set(token2, { type: definition.type, name, args });
  return token2;
}
function proxyConstructor(definition, name) {
  var _a2;
  let constructors = selectedConstructors.get(definition);
  const existing = constructors == null ? void 0 : constructors.get(name);
  if (existing)
    return existing;
  const parameters = definition.constructors && Object.prototype.hasOwnProperty.call(definition.constructors, name) ? definition.constructors[name] : void 0;
  if (!parameters)
    throw new TypeError("No selected Dart super constructor");
  const selected = {
    ...definition,
    parameters,
    superConstructor: name ? `@implementation:${name}` : "@implementation"
  };
  const prototype = (_a2 = proxyLayouts.get(definition)) == null ? void 0 : _a2.prototype;
  if (prototype)
    proxyLayouts.set(selected, { prototype });
  if (!constructors)
    selectedConstructors.set(definition, constructors = /* @__PURE__ */ new Map());
  constructors.set(name, selected);
  return selected;
}
var FlaxProxyBase = class {
  constructor(definition, args) {
    for (let owner = new.target; owner; owner = Object.getPrototypeOf(owner)) {
      const selected = selectedProxyTypes.get(owner);
      if (selected) {
        if (objectViewTypes.get(selected.type) !== definition.type)
          throw new TypeError("Incompatible proxy type selection");
        definition = selected;
        break;
      }
    }
    if (args.length === 1 && args[0] !== null && typeof args[0] === "object") {
      const call = superCalls.get(args[0]);
      if (call) {
        const baseType = (type) => {
          var _a2;
          return (_a2 = objectViewTypes.get(type)) != null ? _a2 : type;
        };
        if (baseType(call.type) !== baseType(definition.type))
          throw new TypeError("Foreign Dart super constructor");
        definition = proxyConstructor(definition, call.name);
        args = call.args;
      }
    }
    constructExtendedProxy(this, definition, args, definition.nativeWidget && !componentBases.has(new.target.prototype) ? componentType(new.target).type : void 0);
  }
};
function widgetProxyFactory(factory, native) {
  const callable = function(...args) {
    if (new.target)
      return Reflect.construct(native, args, new.target);
    if (typeof factory !== "function")
      throw new TypeError("This Widget has only named constructors");
    return nativeApply(factory, void 0, args);
  };
  callable.prototype = native.prototype;
  Object.setPrototypeOf(callable, factory);
  registerComponentBase(callable, false);
  return callable;
}
var memberLayouts = /* @__PURE__ */ new WeakMap();
function memberArguments(parameters) {
  const cached = memberLayouts.get(parameters);
  if (cached)
    return cached;
  for (const parameter of parameters)
    Object.freeze(parameter);
  Object.freeze(parameters);
  if (parameters.every((p) => p.required && p.positional && !p.context)) {
    const argumentsFor2 = (args) => {
      if (args.length > parameters.length)
        throw new TypeError("Too many method arguments");
      for (let i = 0; i < parameters.length; i++)
        if (args[i] === void 0)
          throw new TypeError(`Missing required argument: ${parameters[i].name}`);
      return args;
    };
    memberLayouts.set(parameters, argumentsFor2);
    return argumentsFor2;
  }
  const positional = parameters.filter((p) => p.positional);
  const named = parameters.filter((p) => !p.positional);
  const names = new Set(named.map((p) => p.name));
  const argumentsFor = (args) => {
    if (args.length > positional.length + (named.length ? 1 : 0))
      throw new TypeError("Too many method arguments");
    const options = named.length ? args[positional.length] === void 0 ? {} : args[positional.length] : {};
    if (options === null || typeof options !== "object" || Array.isArray(options) || Object.keys(options).some((name) => !names.has(name)))
      throw new TypeError("Invalid named method arguments");
    let omitted = false;
    for (let i = 0; i < positional.length; i++) {
      if (!positional[i].required && args[i] === void 0)
        omitted = true;
      else if (omitted && args[i] !== void 0)
        throw new TypeError("Optional positional arguments must omit a trailing suffix");
    }
    let index = 0;
    return parameters.map((parameter) => {
      const value = parameter.positional ? args[index++] : options[parameter.name];
      if (value === void 0 && parameter.required)
        throw new TypeError(`Missing required argument: ${parameter.name}`);
      return parameter.context ? contextHandle(value, parameter.context) : value;
    });
  };
  memberLayouts.set(parameters, argumentsFor);
  return argumentsFor;
}
function bindingMethods(type, category, methods, generic) {
  if (generic !== void 0 && Object.keys(generic).length)
    genericMethods.set(type, { category, methods: generic });
  const invoke = category === "object" ? invokeObject : category === "stream" ? invokeStream : invokeInstance;
  return Object.fromEntries(Object.entries(methods).map(([name, parameters]) => {
    const argumentsFor = memberArguments(parameters);
    return [
      name,
      function(...args) {
        return invoke(this, type, name, argumentsFor(args));
      }
    ];
  }));
}
function installMembers(prototype, methods, getters, setters, invoke) {
  for (const [name, parameters] of Object.entries(methods)) {
    const argumentsFor = memberArguments(parameters);
    Object.defineProperty(prototype, name, {
      configurable: true,
      writable: true,
      value(...args) {
        return invoke(this, name, argumentsFor(args));
      }
    });
  }
  for (const name of /* @__PURE__ */ new Set([...getters, ...setters])) {
    Object.defineProperty(prototype, name, {
      configurable: true,
      ...getters.includes(name) ? {
        get() {
          return invoke(this, `get:${name}`, []);
        }
      } : {},
      ...setters.includes(name) ? {
        set(value) {
          invoke(this, `set:${name}`, [value]);
        }
      } : {}
    });
  }
}
function defineProxyBase(prototype, definition, nativeGetters = []) {
  var _a2, _b;
  if (definition.nativeWidget)
    componentBases.set(prototype, false);
  installMembers(prototype, {}, nativeGetters, [], (receiver, member, args) => callObject(receiver, definition.type, "get", member.slice(4), args));
  for (const parameters of Object.values(definition.methods)) {
    for (const parameter of parameters)
      Object.freeze(parameter);
    Object.freeze(parameters);
  }
  for (const parameter of definition.parameters)
    Object.freeze(parameter);
  Object.freeze(definition.parameters);
  Object.freeze(definition.methods);
  Object.freeze(definition.getters);
  Object.freeze(definition.setters);
  Object.freeze(definition.superMembers);
  Object.freeze(definition.contextMembers);
  Object.freeze(definition);
  const members = new Set(definition.superMembers);
  installMembers(prototype, Object.fromEntries(Object.entries(definition.methods).filter(([name]) => members.has(name))), definition.getters.filter((name) => members.has(`get:${name}`)), definition.setters.filter((name) => members.has(`set:${name}`)), (receiver, member, args) => invokeProxySuper(receiver, definition.type, member, args));
  for (const name of members) {
    const value = (_a2 = Object.getOwnPropertyDescriptor(prototype, name)) == null ? void 0 : _a2.value;
    if (typeof value === "function")
      proxySuperFunctions.add(value);
  }
  proxyLayouts.set(definition, { prototype });
  proxyDefinitions.set(prototype.constructor, definition);
  if (((_b = objectTypes.get(definition.type)) == null ? void 0 : _b.collectionKind) !== void 0) {
    const selected = /* @__PURE__ */ new Set([
      ...nativeGetters,
      ...definition.getters,
      ...definition.setters,
      ...Object.keys(definition.methods)
    ]);
    const base = objectPrototype(definition.type);
    for (const name of Reflect.ownKeys(base)) {
      if (!selected.has(name) && !Reflect.has(prototype, name))
        Object.defineProperty(prototype, name, Object.getOwnPropertyDescriptor(base, name));
    }
  }
}
function defineStateMembers(prototype, methods, getters, setters) {
  installMembers(prototype, methods, getters, setters, (receiver, member, args) => componentStateCall(receiver, `native:${member}`, args));
}
function constructExtendedProxy(receiver, definition, args, widgetType) {
  if (receiver === null || typeof receiver !== "object")
    throw new TypeError("Expected a proxy class instance");
  if (objectHandles.has(receiver))
    throw new TypeError("Proxy class instance is already initialized");
  completeProxyAccessors(receiver, definition);
  const descriptor = proxyDescriptor(definition, args);
  const create = globalThis.__flaxCreateObject;
  if (!create)
    throw new Error("Dart proxies require a Flax host");
  constructingExtendedProxies.add(receiver);
  try {
    const created = (0, import_index.withBindingSnapshots)(() => unwrapCall(create(bindingVersion, definition.type, {
      ...descriptor,
      receiver,
      layout: proxyLayout(definition),
      ...widgetType === void 0 ? {} : { widgetType }
    })));
    const ref = objectHandles.get(created);
    if (!ref || !ref.alive || ref.type !== definition.type && objectViewTypes.get(ref.type) !== definition.type)
      throw new TypeError("Invalid Dart proxy result");
    transferObjectAlias(created, receiver);
  } finally {
    constructingExtendedProxies.delete(receiver);
  }
}
var proxySuperFunctions = /* @__PURE__ */ new WeakSet();
function invokeDartSuper(receiver, method, member, args, types, context) {
  var _a2, _b, _c, _d, _e;
  let call = context;
  if (types !== null) {
    const selected = nativeApply(dartType, void 0, [
      receiver,
      `@super:${member}`,
      ...types
    ]);
    call = Object.freeze({ super: selected });
  }
  if (proxySuperFunctions.has(method)) {
    return call ? nativeApply(call.super, void 0, args) : nativeApply(method, receiver, args);
  }
  if (!call)
    return nativeApply(method, receiver, args);
  const reference = requireDartReference(receiver);
  const type = (_c = (_a2 = objectHandles.get(reference)) == null ? void 0 : _a2.type) != null ? _c : (_b = stateHandles.get(reference)) == null ? void 0 : _b.type;
  const definition = type && genericMethods.get((_d = objectViewTypes.get(type)) != null ? _d : type);
  const parameters = definition && ((_e = definition.methods[member]) == null ? void 0 : _e.parameters);
  if (!parameters)
    throw new TypeError("Expected a generated generic super method");
  const count = parameters.filter((p) => p.positional).length + (parameters.some((p) => !p.positional) ? 1 : 0);
  const forwarded = [...args];
  while (forwarded.length < count)
    forwarded.push(void 0);
  forwarded.push(call);
  return nativeApply(method, receiver, forwarded);
}
function invokeProxySuper(receiver, type, member, args) {
  if (constructingExtendedProxies.has(receiver) && !objectHandles.has(receiver)) {
    throw new Error("Dart proxy construction is not complete");
  }
  return invokeObject(receiver, type, `@super:${member}`, args);
}
function callObject(receiver, type, operation, member, args) {
  const ref = objectHandles.get(receiver);
  if (!ref) {
    if (deferredObjects.has(receiver))
      throw new Error("Deferred Dart object has not been materialized");
    throw new TypeError("Invalid or foreign Dart object");
  }
  if (ref.type !== type && objectViewTypes.get(ref.type) !== type)
    throw new TypeError("Invalid or foreign Dart object");
  if (!ref.alive) {
    if (operation === "call" && objectTypes.get(type).removers.includes(member))
      return;
    throw new Error("Disposed Dart object");
  }
  return invokeOperation("object", ref.type, ref.id, operation, member, args);
}
function invokeObject(receiver, type, method, args) {
  if (args.some(isBinding))
    throw new TypeError("Object methods do not accept bindings");
  return callObject(receiver, type, "call", method, args);
}
function invokeObjectStatic(type, member) {
  return invokeOperation("object", type, 0, "static", member, []);
}
var objectPrototypes = /* @__PURE__ */ new Map();
function objectPrototype(type) {
  const base = objectViewTypes.get(type);
  if (base)
    return objectPrototype(base);
  const cached = objectPrototypes.get(type);
  if (cached)
    return cached;
  const definition = objectTypes.get(type);
  if (!definition)
    throw new TypeError(`Unknown object: ${type}`);
  const value = {};
  for (const field of /* @__PURE__ */ new Set([...definition.fields, ...definition.setters])) {
    Object.defineProperty(value, field, {
      enumerable: true,
      ...definition.fields.includes(field) ? {
        get() {
          return callObject(this, type, "get", field, []);
        }
      } : {},
      ...definition.setters.includes(field) ? {
        set(input) {
          if (isBinding(input))
            throw new TypeError("Object setters do not accept bindings");
          callObject(this, type, "set", field, [input]);
        }
      } : {}
    });
  }
  for (const [name, method] of Object.entries(definition.methods)) {
    Object.defineProperty(value, name, { value: method });
  }
  if (iterableObjectTypes.has(type)) {
    Object.defineProperty(value, Symbol.iterator, {
      value: function* () {
        const copy = callObject(this, type, "call", definition.iteratorMember, []);
        if (!Array.isArray(copy))
          throw new TypeError("Invalid Dart Iterable copy");
        yield* __yieldStar(copy);
      }
    });
  }
  Object.freeze(value);
  objectPrototypes.set(type, value);
  return value;
}
function createObjectWrapper(type) {
  return Object.create(objectPrototype(type));
}
function objectWrapper(type, id) {
  const cached = cachedObject(type, id);
  if (cached)
    return cached;
  const value = createObjectWrapper(type);
  const frozen = Object.freeze(value);
  trackObject(frozen, type, id);
  return frozen;
}
function registerObjectView(type, base) {
  var _a2, _b;
  const root = (_a2 = objectViewTypes.get(base)) != null ? _a2 : base;
  const existing = objectViewTypes.get(type);
  if (!objectTypes.has(root) && !streamTypes.has(root) && !stateTypes.has(root) || objectTypes.has(type) || existing !== void 0 && existing !== root)
    throw new TypeError(`Conflicting object view: ${type} -> ${base}`);
  if (existing !== void 0)
    return;
  objectViewTypes.set(type, root);
  instanceParents.set(type, Object.freeze([base, ...(_b = instanceParents.get(base)) != null ? _b : []]));
}
function scopedObjectWrapper(type, id, base) {
  if (base !== void 0)
    registerObjectView(type, base);
  const value = Object.freeze(createObjectWrapper(type));
  trackObject(value, type, id);
  return value;
}
function copyNavigationData(value, path = /* @__PURE__ */ new Set()) {
  if (value === null || typeof value === "boolean" || typeof value === "string")
    return value;
  if (typeof value === "number") {
    if (!Number.isFinite(value) || Number.isInteger(value) && !Number.isSafeInteger(value))
      throw new TypeError("Invalid navigation number");
    return value;
  }
  if (typeof value !== "object" || path.has(value))
    throw new TypeError("Invalid or cyclic navigation data");
  if (Object.getOwnPropertySymbols(value).length)
    throw new TypeError("Navigation data requires string keys");
  if (contextStates.has(value) || stateHandles.has(value) || objectHandles.has(value) || enumIdentities.has(value))
    throw new TypeError("Host references are not navigation data");
  const array = Array.isArray(value);
  if (!array && Object.getPrototypeOf(value) !== Object.prototype && Object.getPrototypeOf(value) !== null)
    throw new TypeError("Expected a plain object");
  path.add(value);
  try {
    const read = (key) => {
      const field = Object.getOwnPropertyDescriptor(value, key);
      if (!field || !("value" in field))
        throw new TypeError("Expected a data property");
      return copyNavigationData(field.value, path);
    };
    return array ? Array.from({ length: value.length }, (_, i) => read(String(i))) : Object.fromEntries(Object.keys(value).map((key) => [key, read(key)]));
  } finally {
    path.delete(value);
  }
}
function finishComponentState(value, widget, id) {
  value = synchronous(value);
  const state = value !== null && typeof value === "object" ? componentStates.get(value) : void 0;
  const native = value !== null && typeof value === "object" ? stateHandles.get(value) : void 0;
  if (native)
    return Object.freeze({ native: native.id });
  if (!state || state.claimed)
    throw new TypeError("createState must return a fresh State");
  state.claimed = true;
  state.widget = widget;
  state.id = id;
  return Object.freeze({ state: value, variant: state.variant });
}
var typedArrayTag = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;
var dateGetTime = Date.prototype.getTime;
var regExpPrototype = RegExp.prototype;
var regExpSource = Object.getOwnPropertyDescriptor(regExpPrototype, "source").get;
var regExpFlags = Object.fromEntries([
  "ignoreCase",
  "multiline",
  "dotAll",
  "unicode",
  "global",
  "sticky",
  "hasIndices",
  "unicodeSets"
].map((name) => {
  var _a2;
  return [name, (_a2 = Object.getOwnPropertyDescriptor(regExpPrototype, name)) == null ? void 0 : _a2.get];
}));
var bufferDartTypes = Object.freeze({
  Int8Array: "Int8List",
  Uint8Array: "Uint8List",
  Uint8ClampedArray: "Uint8ClampedList",
  Int16Array: "Int16List",
  Uint16Array: "Uint16List",
  Int32Array: "Int32List",
  Uint32Array: "Uint32List",
  BigInt64Array: "Int64List",
  BigUint64Array: "Uint64List",
  Float32Array: "Float32List",
  Float64Array: "Float64List"
});
var arrayBufferLength = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
var dataViewBuffer = Object.getOwnPropertyDescriptor(DataView.prototype, "buffer").get;
var nativeURL = globalThis.URL;
var _a;
var urlHref = nativeURL && ((_a = Object.getOwnPropertyDescriptor(nativeURL.prototype, "href")) == null ? void 0 : _a.get);
function tryComponentStateId(value) {
  const state = componentStates.get(value);
  if (state == null ? void 0 : state.retired)
    throw new Error("Disposed component State");
  return (state == null ? void 0 : state.claimed) ? state.id : null;
}
function stateHandle(value) {
  var _a2;
  const state = stateHandles.get(value);
  return (_a2 = state == null ? void 0 : state.id) != null ? _a2 : null;
}
function collectionShape(value) {
  if (Array.isArray(value))
    return "list";
  if (value instanceof Map)
    return "map";
  if (value instanceof Set)
    return "set";
  if (typeof value[Symbol.iterator] === "function")
    return "iterable";
  const prototype = Object.getPrototypeOf(value);
  if (prototype === null || prototype === Object.prototype)
    return "record";
  return null;
}
function tryObjectHandle(value) {
  var _a2;
  const ref = objectHandles.get(value);
  if (ref && !ref.alive)
    throw new Error("Released Dart object");
  return (_a2 = ref == null ? void 0 : ref.id) != null ? _a2 : null;
}
function valueType(value) {
  var _a2;
  const enumeration = (_a2 = enumIdentities.get(value)) == null ? void 0 : _a2.type;
  if (enumeration)
    return enumeration;
  try {
    if (nativeIsArray(value))
      return null;
  } catch {
  }
  const tag = nativeApply(typedArrayTag, value, []);
  if (tag && Object.hasOwn(bufferDartTypes, tag))
    return bufferDartTypes[tag];
  if (nativeIsView(value)) {
    try {
      nativeApply(dataViewBuffer, value, []);
      return "ByteData";
    } catch {
    }
  }
  try {
    nativeApply(arrayBufferLength, value, []);
    return "ByteBuffer";
  } catch {
    return null;
  }
}
Object.assign(globalThis, {
  __flaxBindings: Object.freeze({
    dartType(id, name) {
      const value = Object.freeze({ name });
      registerDartTypeDescription(value, ["native", id, [], false]);
      return value;
    },
    nativeRecordType(value) {
      var _a2;
      return (_a2 = recordDartTypes.get(value)) != null ? _a2 : null;
    },
    recordDartType(value, type) {
      recordDartTypes.set(value, type);
    },
    version: bindingVersion,
    readBindingSnapshot: import_index.readBindingSnapshot,
    nativeDateMilliseconds(value) {
      let milliseconds;
      try {
        milliseconds = nativeApply(dateGetTime, value, []);
      } catch {
        throw new TypeError("Expected a JS Date");
      }
      if (!Number.isFinite(milliseconds))
        throw new TypeError("Invalid JS Date");
      return milliseconds;
    },
    nativeUriText(value) {
      if (!urlHref)
        throw new TypeError("Expected a JS URL or URI string");
      try {
        return nativeApply(urlHref, value, []);
      } catch {
        throw new TypeError("Expected a JS URL or URI string");
      }
    },
    nativeRegExp(value) {
      let source;
      try {
        source = nativeApply(regExpSource, value, []);
        if (value === regExpPrototype)
          throw new TypeError();
      } catch {
        throw new TypeError("Expected a JS RegExp");
      }
      const flag = (name) => {
        const getter = regExpFlags[name];
        return getter !== void 0 && nativeApply(getter, value, []) === true;
      };
      if (["global", "sticky", "hasIndices", "unicodeSets"].some(flag))
        throw new TypeError("Dart RegExp supports only i, m, s and u flags");
      return [
        source,
        flag("multiline"),
        !flag("ignoreCase"),
        flag("unicode"),
        flag("dotAll")
      ];
    },
    invokeCallback(callback, positionalCount, ...values) {
      const positional = values.slice(0, positionalCount);
      const namedCount = values[positionalCount];
      if (namedCount === 0) {
        try {
          return nativeApply(callback, void 0, positional);
        } catch (error) {
          return failedCall(error);
        }
      }
      const options = {};
      for (let i = 0; i < namedCount; i++) {
        options[values[positionalCount + 1 + i * 2]] = values[positionalCount + 2 + i * 2];
      }
      try {
        return nativeApply(callback, void 0, [...positional, options]);
      } catch (error) {
        return failedCall(error);
      }
    },
    callbackOptions(...entries) {
      const options = {};
      for (let i = 0; i < entries.length; i += 2)
        options[entries[i]] = entries[i + 1];
      return options;
    },
    genericCallContext(superCall) {
      return Object.freeze({ super: superCall });
    },
    componentType,
    freezeWidget(value) {
      Object.freeze(value);
    },
    component(value) {
      const info = components.get(value);
      if (!info)
        throw new TypeError("Unknown or foreign component");
      Object.freeze(value);
      return info;
    },
    createComponentState(widget, id) {
      const value = synchronous(nativeApply(widget.createState, widget, []));
      return finishComponentState(value, widget, id);
    },
    finishComponentState,
    tryComponentStateId,
    stateHandle,
    updateComponentState(value, widget) {
      const state = componentStates.get(value);
      if (!state || state.retired)
        throw new Error("Disposed component State");
      state.widget = widget;
    },
    releaseComponentState(value) {
      const state = componentStates.get(value);
      if (state) {
        state.retired = true;
        state.id = null;
        state.widget = null;
      }
    },
    invokeComponent(value, method, ...args) {
      const state = componentStates.get(value);
      if (state == null ? void 0 : state.retired)
        throw new Error("Disposed component State");
      if (method.startsWith("get:")) {
        if (args.length !== 0)
          throw new TypeError("Invalid getter arguments");
        return value[method.slice(4)];
      }
      if (method.startsWith("set:")) {
        if (args.length !== 1)
          throw new TypeError("Invalid setter arguments");
        value[method.slice(4)] = args[0];
        return void 0;
      }
      const fn = value[method];
      if (typeof fn !== "function")
        throw new TypeError(`Missing component method: ${method}`);
      return synchronous(nativeApply(fn, value, args));
    },
    invokeSynchronous(fn) {
      return synchronous(fn());
    },
    finishRegistration() {
      registrationOpen = false;
      return pageFactories.size;
    },
    createPage(name, arguments_) {
      if (registrationOpen)
        throw new Error("Page initialization requires a mounted host");
      const factory = pageFactories.get(name);
      if (!factory)
        throw new Error(`Unknown page: ${name}`);
      const params = (0, import_index.signal)(freezeData(copyNavigationData(arguments_)));
      const cleanup = [];
      let initializing = true;
      let disposed = false;
      const lifecycle = Object.freeze({
        onDispose(callback) {
          if (!initializing)
            throw new Error("onDispose requires the synchronous page factory");
          if (typeof callback !== "function")
            throw new TypeError("Expected a cleanup function");
          cleanup.push(callback);
        }
      });
      const dispose = () => {
        if (disposed)
          return;
        disposed = true;
        while (cleanup.length) {
          try {
            const result = cleanup.pop()();
            if (result instanceof Promise) {
              void result.catch(reportCleanupError);
              throw new TypeError("Page cleanup must be synchronous");
            }
          } catch (error) {
            reportCleanupError(error);
          }
        }
      };
      try {
        const widget = factory((0, import_index.computed)(() => params.value), lifecycle);
        return Object.freeze({
          widget,
          dispose,
          update(value) {
            if (disposed)
              throw new Error("Disposed page content");
            params.value = freezeData(copyNavigationData(value));
          }
        });
      } catch (error) {
        initializing = false;
        dispose();
        throw error;
      } finally {
        initializing = false;
      }
    },
    classifyAny(value) {
      const type = valueType(value);
      if (type !== null)
        return enumIdentities.has(value) ? "type:" + type : type;
      const object = tryObjectHandle(value);
      if (object !== null)
        return object;
      const state = stateHandle(value);
      if (state !== null)
        return ["state", state];
      const component = tryComponentStateId(value);
      if (component !== null)
        return ["componentState", component];
      const then = value.then;
      if (typeof then === "symbol")
        return then;
      if (typeof then === "function")
        return "promise";
      const error = errorDetails(value);
      if (error)
        return ["error", error.message, error.stack];
      return collectionShape(value);
    },
    callbackMemo(input, key, canonical) {
      let signatures = callbackMemos.get(input);
      if (canonical !== void 0) {
        if (!signatures)
          callbackMemos.set(input, signatures = /* @__PURE__ */ new Map());
        signatures.set(key, canonical);
        return void 0;
      }
      return signatures == null ? void 0 : signatures.get(key);
    },
    collectionIdentity() {
      const ids = new nativeWeakMap();
      let next = 0;
      return (value) => {
        let id = ids.get(value);
        if (id === void 0)
          ids.set(value, id = next++);
        return id;
      };
    },
    collectionShape,
    iterableIterator(value) {
      const iterator = value[Symbol.iterator]();
      if (iterator === null || typeof iterator !== "object" && typeof iterator !== "function")
        throw new TypeError("Expected a synchronous JS Iterator");
      const next = iterator.next;
      if (typeof next !== "function")
        throw new TypeError("Expected a synchronous JS Iterator");
      return { next: () => nativeApply(next, iterator, []) };
    },
    iteratorNext(iterator) {
      const result = iterator.next();
      if (result === null || typeof result !== "object" && typeof result !== "function")
        throw new TypeError("Invalid JS Iterator result");
      return result.done ? { done: true, value: void 0 } : { done: false, value: result.value };
    },
    collectionEntries(value) {
      return Array.isArray(value) ? value : value instanceof Map ? [...Map.prototype.entries.call(value)] : value instanceof Set ? [...Set.prototype.values.call(value)] : Symbol.iterator in Object(value) ? [...value] : Object.entries(value);
    },
    emptyRecord(signature) {
      const value = {};
      recordShapes.set(value, signature);
      return value;
    },
    recordType(value) {
      var _a2;
      return (_a2 = recordShapes.get(value)) != null ? _a2 : null;
    },
    emptyCollection(kind) {
      return kind === "map" ? /* @__PURE__ */ new Map() : kind === "set" ? /* @__PURE__ */ new Set() : [];
    },
    mapSet(map, key, value) {
      map.set(key, value);
    },
    setAdd(set, value) {
      set.add(value);
    },
    tryObjectHandle,
    hasObjectView(value, type) {
      const ref = objectHandles.get(value);
      return Boolean((ref == null ? void 0 : ref.alive) && (ref.type === type || objectViewTypes.get(ref.type) === type));
    },
    deferredObject(value) {
      const record = deferredObjects.get(value);
      return record ? Object.freeze({ ...record }) : null;
    },
    materializeDeferred(value, type, id, materializer, base = type) {
      var _a2;
      const record = deferredObjects.get(value);
      const owner = (_a2 = objectViewTypes.get(type)) != null ? _a2 : base;
      if (!record || record.type !== type && record.type !== owner)
        throw new TypeError("Invalid deferred Dart object");
      if (record.materializer !== null && record.materializer !== materializer)
        throw new TypeError("Deferred Dart object type mismatch");
      record.materializer = materializer;
      if (type !== owner)
        registerObjectView(type, owner);
      trackObject(value, type, id);
    },
    defineCollection(type, kind) {
      if (objectTypes.has(type))
        return;
      defineObject(type, [], [], {}, [], kind);
    },
    object: objectWrapper,
    objectView(type, id, base) {
      registerObjectView(type, base);
      return objectWrapper(type, id);
    },
    scopedObject: scopedObjectWrapper,
    streamObject: streamWrapper,
    asyncIterableNext,
    asyncIterableReturn,
    cancelAsyncIterables,
    errorDetails,
    failedCall,
    callFailure(value) {
      return callFailures.has(value) ? value : null;
    },
    dartError(id, message, stack) {
      const cached = cachedObject("flax:dart-error", id);
      if (cached)
        return cached;
      const value = new NativeError(message);
      if (stack !== null) {
        try {
          value.stack = stack;
        } catch {
        }
      }
      trackObject(value, "flax:dart-error", id);
      return value;
    },
    contextHandle,
    dartWidget(id) {
      const cached = cachedObject("flax:dart-widget", id);
      if (cached)
        return cached;
      const value = Object.freeze(Object.defineProperty({}, "kind", { value: "dart-widget" }));
      trackObject(value, "flax:dart-widget", id);
      return value;
    },
    function(type, id, shape, generic = false) {
      const cached = cachedObject(type, id);
      if (cached)
        return cached;
      const parameters = JSON.parse(shape);
      const positional = parameters.filter((parameter) => parameter.positional);
      const named = parameters.filter((parameter) => !parameter.positional);
      const requiredPositional = positional.filter((parameter) => parameter.required).length;
      const value = (...args) => {
        if (!objectHandles.get(value).alive)
          throw new Error("Released Dart function");
        if (named.length === 0) {
          if (args.length < requiredPositional || args.length > positional.length)
            throw new TypeError("Invalid Dart function arity");
          let count = args.length;
          while (count > requiredPositional && args[count - 1] === void 0)
            count--;
          if (args.slice(requiredPositional, count).includes(void 0))
            throw new TypeError("Optional positional arguments cannot contain holes");
          args.length = count;
        } else {
          if (args.length < positional.length || args.length > positional.length + 1)
            throw new TypeError("Invalid Dart function arity");
        }
        const call = globalThis.__flaxFunction;
        if (!call)
          throw new Error("Dart functions require a Flax host");
        const positionalValues = args.slice(0, positional.length);
        const namedValues = [];
        if (named.length !== 0) {
          const input = args[positional.length];
          if (input === void 0) {
            if (named.some((parameter) => parameter.required))
              throw new TypeError("Missing required named Dart function argument");
          } else {
            if (input === null || typeof input !== "object" || Array.isArray(input) || Object.getOwnPropertySymbols(input).length !== 0)
              throw new TypeError("Invalid named Dart function arguments");
            const keys = Object.keys(input);
            if (keys.some((key) => !named.some((parameter) => parameter.name === key)))
              throw new TypeError("Unknown named Dart function argument");
            for (const parameter of named) {
              const present = Object.prototype.hasOwnProperty.call(input, parameter.name);
              const field = present ? Object.getOwnPropertyDescriptor(input, parameter.name) : void 0;
              if (field && !("value" in field))
                throw new TypeError("Named Dart arguments require data properties");
              const fieldValue = field == null ? void 0 : field.value;
              if (parameter.required && (!present || fieldValue === void 0))
                throw new TypeError("Missing required named Dart function argument");
              if (present && fieldValue !== void 0)
                namedValues.push(parameter.name, fieldValue);
            }
          }
        }
        return (0, import_index.withBindingSnapshots)(() => unwrapCall(call(bindingVersion, type, id, positionalValues.length, ...positionalValues, namedValues.length / 2, ...namedValues)));
      };
      Object.defineProperty(value, "kind", { value: "dart-function" });
      if (generic)
        defineDartCallTypes(value, { id: type, parameters, callback: id });
      const frozen = Object.freeze(value);
      trackObject(frozen, type, id);
      return frozen;
    },
    objectHandle(value) {
      const ref = objectHandles.get(value);
      if (!ref || !ref.alive)
        throw new TypeError("Invalid, foreign, or disposed Dart object");
      return ref.id;
    },
    sweepObjects() {
      return references.sweep();
    },
    releaseObject(id) {
      references.release(id);
    },
    enumValue,
    valueType,
    enumType(value) {
      var _a2, _b;
      return (_b = (_a2 = enumIdentities.get(value)) == null ? void 0 : _a2.type) != null ? _b : null;
    },
    enumName(value) {
      var _a2, _b;
      return (_b = (_a2 = enumIdentities.get(value)) == null ? void 0 : _a2.name) != null ? _b : null;
    },
    copyData: copyNavigationData,
    array: (...values) => Object.freeze(values),
    record: (...values) => Object.freeze(Object.fromEntries(Array.from({ length: values.length / 2 }, (_, i) => [
      values[i * 2],
      values[i * 2 + 1]
    ]))),
    future(id) {
      let record;
      const promise = new Promise((resolve, reject) => {
        record = { resolve, reject };
      });
      futures.set(id, new WeakRef(record));
      futureOwners.set(promise, record);
      futureFinalizer.register(record, id);
      void promise.catch(() => {
      });
      return promise;
    },
    settleFuture(id, success, value) {
      var _a2;
      const pending = (_a2 = futures.get(id)) == null ? void 0 : _a2.deref();
      if (!pending)
        return;
      futures.delete(id);
      if (success)
        pending.resolve(value);
      else
        pending.reject(value);
    },
    observePromise(id, value) {
      if (value === null || typeof value !== "object" && typeof value !== "function") {
        throw new TypeError("Future callbacks must return a Promise");
      }
      let then;
      try {
        then = value.then;
      } catch (error) {
        const record2 = { active: true };
        promises.set(id, new WeakRef(record2));
        promiseFinalizer.register(record2, id);
        void Promise.reject(error).catch((reason) => settlePromise(id, record2, false, reason)).catch(reportCleanupError);
        return;
      }
      if (typeof then !== "function") {
        throw new TypeError("Future callbacks must return a Promise");
      }
      const record = { active: true };
      promises.set(id, new WeakRef(record));
      promiseFinalizer.register(record, id);
      const assimilated = Promise.resolve({
        then(resolve, reject) {
          nativeApply(then, value, [resolve, reject]);
        }
      });
      void assimilated.then((result) => settlePromise(id, record, true, result), (reason) => settlePromise(id, record, false, reason)).catch(reportCleanupError);
    },
    cancelPromises() {
      for (const weak of promises.values()) {
        const record = weak.deref();
        if (record)
          record.active = false;
      }
      promises.clear();
    },
    observeEvent(value) {
      if (value instanceof Promise)
        void value.catch(reportCleanupError);
    },
    state(type, id, base = type) {
      var _a2;
      if (type !== base)
        registerObjectView(type, base);
      const root = (_a2 = objectViewTypes.get(type)) != null ? _a2 : type;
      let prototype = statePrototypes.get(root);
      if (!prototype) {
        const definition = stateTypes.get(root);
        if (!definition)
          throw new TypeError(`Unknown State: ${type}`);
        prototype = {};
        for (const field of definition.fields)
          Object.defineProperty(prototype, field, {
            enumerable: true,
            get() {
              const ref = stateHandles.get(this);
              if (!ref || ref.type !== root && objectViewTypes.get(ref.type) !== root)
                throw new TypeError("Invalid or foreign State");
              return invokeOperation("state", ref.type, ref.id, "get", field, []);
            }
          });
        for (const [name, method] of Object.entries(definition.methods))
          Object.defineProperty(prototype, name, { value: method });
        Object.freeze(prototype);
        statePrototypes.set(root, prototype);
      }
      const value = Object.create(prototype);
      stateHandles.set(value, { type, id });
      return Object.freeze(value);
    },
    context(type, id) {
      const cached = cachedObject(type, id);
      if (cached)
        return cached;
      let prototype = contextPrototypes.get(type);
      if (!prototype) {
        const fields = contextTypes.get(type);
        if (!fields)
          throw new TypeError(`Unregistered context type: ${type}`);
        prototype = {};
        for (const field of fields)
          Object.defineProperty(prototype, field, {
            enumerable: true,
            get() {
              const ref = contextStates.get(this);
              if (!ref || ref.type !== type)
                throw new TypeError("Invalid or foreign Context");
              if (!ref.alive) {
                if (field === "mounted")
                  return false;
                throw new Error("Unmounted BuildContext");
              }
              return invokeOperation("context", type, ref.id, "get", field, []);
            }
          });
        Object.defineProperty(prototype, "findAncestorWidgetOfExactType", {
          value(constructor) {
            const ref = contextStates.get(this);
            if (!ref || ref.type !== type || !ref.alive)
              throw new Error("Unmounted BuildContext");
            const info = componentType(constructor);
            const call = globalThis.__flaxAncestor;
            if (!call)
              throw new Error("Ancestor queries require a Flax host");
            return call(bindingVersion, type, ref.id, info.type);
          }
        });
        Object.freeze(prototype);
        contextPrototypes.set(type, prototype);
      }
      const value = Object.create(prototype);
      trackObject(value, type, id);
      contextStates.set(value, objectHandles.get(value));
      return Object.freeze(value);
    },
    releaseContext(id) {
      references.release(id);
    }
  })
});
var mounted = false;
function mountRoot(widget) {
  var _a2;
  if ((_a2 = hotDev()) == null ? void 0 : _a2.captureRoot(widget))
    return;
  if (mounted)
    throw new Error("This runtime already has an application root");
  const host = globalThis;
  if (!host.__flaxMount)
    throw new Error("runApp requires a FlaxView host");
  host.__flaxMount(widget, bindingVersion);
  mounted = true;
}

});
