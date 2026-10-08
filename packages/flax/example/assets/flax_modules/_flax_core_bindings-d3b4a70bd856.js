globalThis.__flaxModules.define({"specifier":"@flax/core/bindings","owner":"@flax/core-runtime:dist/runtime/bindings.js","version":"0.0.0","artifact":"4feb97dc198c2dba0063fbb5ad422e4cd29d3232604af9229a28e34e7469704c","asset":"assets/flax_modules/_flax_core_bindings-d3b4a70bd856.js","package":"@flax/core-runtime","source":"dist/runtime/bindings.js","dependencies":{"@flax/core":"0.0.0"},"bindings":[],"subpaths":[]}, function(module, exports, require) {
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
  defineContext: () => defineContext,
  defineObject: () => defineObject,
  defineProxyBase: () => defineProxyBase,
  defineState: () => defineState,
  defineStateMembers: () => defineStateMembers,
  defineStream: () => defineStream,
  enumValue: () => enumValue,
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
    var _a;
    const current = this.handles.get(value);
    if (current) {
      if (!current.alive || current.type !== type || current.id !== id)
        throw new TypeError("Object identity mismatch");
      return;
    }
    this.handles.set(value, { type, id, alive: true });
    const aliases = (_a = this.aliases.get(id)) != null ? _a : /* @__PURE__ */ new Set();
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
    var _a;
    for (const alias of (_a = this.aliases.get(id)) != null ? _a : []) {
      const value = alias.deref();
      const handle = value && this.handles.get(value);
      if (handle)
        handle.alive = false;
    }
    this.aliases.delete(id);
  }
  sweep() {
    var _a;
    const expired = [];
    (_a = this.cursor) != null ? _a : this.cursor = this.aliases.keys();
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

// ../../js/dist/runtime/bindings.js
var bindingVersion = 22;
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
function enumValue(type, name) {
  const key = `${type}
${name}`;
  let value = enums.get(key);
  if (!value) {
    value = Object.freeze({ kind: "enum", type, name });
    enums.set(key, value);
    enumTypes.set(value, type);
  }
  return value;
}
var enums = /* @__PURE__ */ new Map();
var enumTypes = /* @__PURE__ */ new WeakMap();
var contextTypes = /* @__PURE__ */ new Map();
var contextStates = /* @__PURE__ */ new WeakMap();
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
  const call = globalThis.__flaxCall;
  if (!call)
    throw new Error("Dart members require a FlaxView host");
  return call(bindingVersion, type, member, ...args);
}
function invokeTopLevel(id, args) {
  const call = globalThis.__flaxTopLevel;
  if (!call)
    throw new Error("Dart functions require a FlaxView host");
  return call(bindingVersion, id, ...args);
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
function reportCleanupError(error) {
  var _a, _b;
  const host = globalThis;
  const details = rejectionDetails(error);
  try {
    (_b = host.__flaxAsyncError) == null ? void 0 : _b.call(host, (_a = details.stack) != null ? _a : details.message);
  } catch {
  }
}
function settlePromise(id, record, success, value) {
  var _a;
  if (!record.active || ((_a = promises.get(id)) == null ? void 0 : _a.deref()) !== record)
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
  host.__flaxPromiseSettlement(bindingVersion, id, false, rejection.message, rejection.stack);
}
var pageFactories = /* @__PURE__ */ new Map();
var registrationOpen = true;
function registerPage(name, factory) {
  if (!registrationOpen)
    throw new Error("Page registration is closed");
  if (typeof name !== "string" || name.length === 0 || typeof factory !== "function")
    throw new TypeError("Expected a page name and synchronous factory");
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
  if (!ref || ref.type !== type)
    throw new TypeError("Invalid or foreign State");
  const host = globalThis;
  if (!host.__flaxInstance)
    throw new Error("State methods require a Flax host");
  return host.__flaxInstance(bindingVersion, type, ref.id, method, ...args);
}
var objectTypes = /* @__PURE__ */ new Map();
var references = new ReferenceCache();
var objectHandles = references.handles;
var constructingExtendedProxies = /* @__PURE__ */ new WeakSet();
var deferredObjects = /* @__PURE__ */ new WeakMap();
var iterableObjectTypes = /* @__PURE__ */ new Set();
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
function defineObject(type, fields, setters, methods, removers) {
  if (objectTypes.has(type))
    throw new Error(`Duplicate object type: ${type}`);
  objectTypes.set(type, { fields, setters, methods, removers });
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
  var _a;
  const record = (_a = asyncIterableSources.get(id)) == null ? void 0 : _a.deref();
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
      const iterator = Reflect.apply(factory, record.source, []);
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
  var _a;
  const record = (_a = asyncIterableSources.get(id)) == null ? void 0 : _a.deref();
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
    return Promise.resolve(Reflect.apply(close, record.iterator, [])).then(() => {
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
  return create(bindingVersion, type, descriptor);
}
function callStream(receiver, type, operation, member, args) {
  const ref = objectHandles.get(receiver);
  if (!ref || !ref.alive)
    throw new TypeError("Invalid or released Dart Stream");
  const definition = streamTypes.get(type);
  if (!definition)
    throw new TypeError(`Unknown Stream type: ${type}`);
  const call = globalThis.__flaxStream;
  if (!call)
    throw new Error("Dart Streams require a Flax host");
  return call(bindingVersion, type, ref.id, operation, member, ...args);
}
function invokeStream(receiver, type, method, args) {
  if (args.some(isBinding))
    throw new TypeError("Stream methods do not accept bindings");
  return callStream(receiver, type, "call", method, args);
}
function streamWrapper(type, view, id) {
  const cached = cachedObject(view, id);
  if (cached)
    return cached;
  const definition = streamTypes.get(type);
  if (!definition)
    throw new TypeError(`Unknown Stream type: ${type}`);
  const value = {};
  for (const field of definition.fields) {
    Object.defineProperty(value, field, {
      enumerable: true,
      get: () => callStream(value, type, "get", field, [])
    });
  }
  for (const [name, method] of Object.entries(definition.methods)) {
    Object.defineProperty(value, name, { value: method.bind(value) });
  }
  Object.defineProperty(value, Symbol.asyncIterator, {
    value: () => streamAsyncIterator(value, type)
  });
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
  return create(bindingVersion, type, descriptor);
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
function constructProxy(type, parameters, args, implementation, names, getters, setters) {
  var _a, _b, _c;
  const positional = parameters.filter((p) => p.positional).length;
  const hasNamed = parameters.some((p) => !p.positional);
  if (args.length > positional + (hasNamed ? 1 : 0))
    throw new TypeError("Too many proxy constructor arguments");
  if (implementation === null || typeof implementation !== "object" || Object.keys(implementation).some((k) => !names.includes(k) && !getters.includes(k) && !setters.includes(k)))
    throw new TypeError("Invalid proxy implementation");
  const descriptor = construct("value", type, "@implementation", parameters, args.slice(0, positional), (_a = args[positional]) != null ? _a : {});
  const values = { ...descriptor.args };
  for (const name of names) {
    const method = (_b = proxyProperty(implementation, name)) == null ? void 0 : _b.value;
    if (typeof method !== "function")
      throw new TypeError(`Missing proxy method: ${name}`);
    values[`@call:${name}`] = method.bind(implementation);
  }
  for (const kind of ["get", "set"]) {
    for (const name of kind === "get" ? getters : setters) {
      if (names.includes(name))
        throw new TypeError(`Conflicting proxy member: ${name}`);
      const accessor = (_c = proxyProperty(implementation, name)) == null ? void 0 : _c[kind];
      if (typeof accessor !== "function")
        throw new TypeError(`Missing proxy ${kind} accessor: ${name}`);
      values[`@${kind}:${name}`] = (...args2) => synchronous(Reflect.apply(accessor, implementation, args2), `Proxy ${kind} ${name}`);
    }
  }
  const create = globalThis.__flaxCreateObject;
  if (!create)
    throw new Error("Dart proxies require a Flax host");
  return create(bindingVersion, type, { ...descriptor, args: Object.freeze(values) });
}
function proxyProperty(implementation, name, stopBefore) {
  for (let object = implementation; object !== null && object !== stopBefore; object = Object.getPrototypeOf(object)) {
    const descriptor = Object.getOwnPropertyDescriptor(object, name);
    if (descriptor)
      return descriptor;
  }
  return void 0;
}
var FlaxProxyBase = class {
  constructor(prototype, definition, args) {
    constructExtendedProxy(this, prototype, definition.type, definition.parameters, args, Object.keys(definition.methods), definition.getters, definition.setters, definition.superMembers, definition.nativeWidget && !componentBases.has(new.target.prototype) ? componentType(new.target).type : void 0);
  }
};
function widgetProxyFactory(factory, native) {
  const callable = function(...args) {
    if (new.target)
      return Reflect.construct(native, args, new.target);
    if (typeof factory !== "function")
      throw new TypeError("This Widget has only named constructors");
    return Reflect.apply(factory, void 0, args);
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
function bindingMethods(type, category, methods) {
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
  Object.freeze(definition);
  const members = new Set(definition.superMembers);
  installMembers(prototype, Object.fromEntries(Object.entries(definition.methods).filter(([name]) => members.has(name))), definition.getters.filter((name) => members.has(`get:${name}`)), definition.setters.filter((name) => members.has(`set:${name}`)), (receiver, member, args) => invokeProxySuper(receiver, definition.type, member, args));
}
function defineStateMembers(prototype, methods, getters, setters) {
  installMembers(prototype, methods, getters, setters, (receiver, member, args) => componentStateCall(receiver, `native:${member}`, args));
}
function constructExtendedProxy(receiver, basePrototype, type, parameters, args, names, getters, setters, superMembers, widgetType) {
  var _a, _b, _c;
  if (receiver === null || typeof receiver !== "object")
    throw new TypeError("Expected a proxy class instance");
  if (objectHandles.has(receiver))
    throw new TypeError("Proxy class instance is already initialized");
  const positional = parameters.filter((p) => p.positional).length;
  const hasNamed = parameters.some((p) => !p.positional);
  if (args.length > positional + (hasNamed ? 1 : 0))
    throw new TypeError("Too many proxy constructor arguments");
  const descriptor = construct("value", type, "@implementation", parameters, args.slice(0, positional), (_a = args[positional]) != null ? _a : {});
  const values = { ...descriptor.args };
  for (const name of names) {
    const method = (_b = proxyProperty(receiver, name, basePrototype)) == null ? void 0 : _b.value;
    if (typeof method !== "function") {
      if (superMembers.includes(name))
        continue;
      throw new TypeError(`Missing proxy method: ${name}`);
    }
    values[`@call:${name}`] = method.bind(receiver);
  }
  for (const kind of ["get", "set"]) {
    for (const name of kind === "get" ? getters : setters) {
      if (names.includes(name))
        throw new TypeError(`Conflicting proxy member: ${name}`);
      const accessor = (_c = proxyProperty(receiver, name, basePrototype)) == null ? void 0 : _c[kind];
      const superName = `${kind}:${name}`;
      if (typeof accessor !== "function") {
        if (superMembers.includes(superName))
          continue;
        throw new TypeError(`Missing proxy ${kind} accessor: ${name}`);
      }
      values[`@${kind}:${name}`] = (...callArgs) => synchronous(Reflect.apply(accessor, receiver, callArgs), `Proxy ${kind} ${name}`);
    }
  }
  const create = globalThis.__flaxCreateObject;
  if (!create)
    throw new Error("Dart proxies require a Flax host");
  constructingExtendedProxies.add(receiver);
  try {
    const created = create(bindingVersion, type, {
      ...descriptor,
      ...widgetType === void 0 ? {} : { widgetType },
      args: Object.freeze(values)
    });
    const ref = objectHandles.get(created);
    if (!ref || !ref.alive || ref.type !== type)
      throw new TypeError("Invalid Dart proxy result");
    transferObjectAlias(created, receiver);
  } finally {
    constructingExtendedProxies.delete(receiver);
  }
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
  if (ref.type !== type)
    throw new TypeError("Invalid or foreign Dart object");
  if (!ref.alive) {
    if (operation === "call" && objectTypes.get(type).removers.includes(member))
      return;
    throw new Error("Disposed Dart object");
  }
  const call = globalThis.__flaxObject;
  if (!call)
    throw new Error("Dart objects require a Flax host");
  return call(bindingVersion, type, ref.id, operation, member, ...args);
}
function invokeObject(receiver, type, method, args) {
  if (args.some(isBinding))
    throw new TypeError("Object methods do not accept bindings");
  return callObject(receiver, type, "call", method, args);
}
function invokeObjectStatic(type, member) {
  const call = globalThis.__flaxObject;
  if (!call)
    throw new Error("Dart objects require a Flax host");
  return call(bindingVersion, type, 0, "static", member);
}
function createObjectWrapper(type) {
  const definition = objectTypes.get(type);
  if (!definition)
    throw new TypeError(`Unknown object: ${type}`);
  const value = {};
  for (const field of /* @__PURE__ */ new Set([...definition.fields, ...definition.setters])) {
    Object.defineProperty(value, field, {
      enumerable: true,
      ...definition.fields.includes(field) ? {
        get() {
          return callObject(value, type, "get", field, []);
        }
      } : {},
      ...definition.setters.includes(field) ? {
        set(input) {
          if (isBinding(input))
            throw new TypeError("Object setters do not accept bindings");
          callObject(value, type, "set", field, [input]);
        }
      } : {}
    });
  }
  for (const [name, method] of Object.entries(definition.methods)) {
    Object.defineProperty(value, name, { value: method.bind(value) });
  }
  if (iterableObjectTypes.has(type)) {
    Object.defineProperty(value, Symbol.iterator, {
      value: function* () {
        const copy = callObject(value, type, "call", "toArray", []);
        if (!Array.isArray(copy))
          throw new TypeError("Invalid Dart Iterable copy");
        yield* __yieldStar(copy);
      }
    });
  }
  return value;
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
function scopedObjectWrapper(type, id) {
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
  const array = Array.isArray(value);
  if (!array && Object.getPrototypeOf(value) !== Object.prototype && Object.getPrototypeOf(value) !== null)
    throw new TypeError("Expected a plain object");
  if (contextStates.has(value) || stateHandles.has(value) || objectHandles.has(value) || enumTypes.has(value))
    throw new TypeError("Host references are not navigation data");
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
Object.assign(globalThis, {
  __flaxBindings: Object.freeze({
    version: bindingVersion,
    invokeCallback(callback, positionalCount, ...values) {
      const positional = values.slice(0, positionalCount);
      const namedCount = values[positionalCount];
      if (namedCount === 0)
        return Reflect.apply(callback, void 0, positional);
      const options = {};
      for (let i = 0; i < namedCount; i++) {
        options[values[positionalCount + 1 + i * 2]] = values[positionalCount + 2 + i * 2];
      }
      return Reflect.apply(callback, void 0, [...positional, options]);
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
      const value = synchronous(Reflect.apply(widget.createState, widget, []));
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
    },
    tryComponentStateId(value) {
      const state = componentStates.get(value);
      if (state == null ? void 0 : state.retired)
        throw new Error("Disposed component State");
      return (state == null ? void 0 : state.claimed) ? state.id : null;
    },
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
      return synchronous(Reflect.apply(fn, value, args));
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
    collectionShape(value) {
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
    },
    collectionEntries(value) {
      return Array.isArray(value) ? value : value instanceof Map ? [...value.entries()] : value instanceof Set || Symbol.iterator in Object(value) ? [...value] : Object.entries(value);
    },
    emptyRecord() {
      return {};
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
    tryObjectHandle(value) {
      var _a;
      const ref = objectHandles.get(value);
      if (ref && !ref.alive)
        throw new Error("Released Dart object");
      return (_a = ref == null ? void 0 : ref.id) != null ? _a : null;
    },
    deferredObject(value) {
      const record = deferredObjects.get(value);
      return record ? Object.freeze({ ...record }) : null;
    },
    materializeDeferred(value, type, id, materializer) {
      const record = deferredObjects.get(value);
      if (!record || record.type !== type)
        throw new TypeError("Invalid deferred Dart object");
      if (record.materializer !== null && record.materializer !== materializer)
        throw new TypeError("Deferred Dart object type mismatch");
      record.materializer = materializer;
      trackObject(value, type, id);
    },
    defineCollection(type, kind) {
      if (objectTypes.has(type))
        return;
      const names = kind === "map" ? ["get", "set", "containsKey", "remove", "clear", "toMap"] : kind === "list" ? [
        "contains",
        "get",
        "set",
        "add",
        "addAll",
        "removeAt",
        "clear",
        "toArray"
      ] : kind === "set" ? ["contains", "add", "addAll", "remove", "clear", "toArray", "toSet"] : ["contains", "toArray"];
      const methods = {};
      for (const name of names) {
        methods[name] = function(...args) {
          return invokeObject(this, type, name, args);
        };
      }
      if (kind !== "map")
        iterableObjectTypes.add(type);
      defineObject(type, kind === "map" ? ["length"] : ["length", "isEmpty"], [], methods, []);
    },
    object: objectWrapper,
    scopedObject: scopedObjectWrapper,
    streamObject: streamWrapper,
    asyncIterableNext,
    asyncIterableReturn,
    cancelAsyncIterables,
    errorDetails,
    dartError(id, message, stack) {
      const cached = cachedObject("flax:dart-error", id);
      if (cached)
        return cached;
      const value = new Error(message);
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
    function(type, id, shape) {
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
        return call(bindingVersion, type, id, positionalValues.length, ...positionalValues, namedValues.length / 2, ...namedValues);
      };
      Object.defineProperty(value, "kind", { value: "dart-function" });
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
    enumType(value) {
      var _a;
      return (_a = enumTypes.get(value)) != null ? _a : null;
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
      var _a;
      const pending = (_a = futures.get(id)) == null ? void 0 : _a.deref();
      if (!pending)
        return;
      futures.delete(id);
      if (success)
        pending.resolve(value);
      else
        pending.reject(new Error(String(value)));
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
          Reflect.apply(then, value, [resolve, reject]);
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
      if (value instanceof Promise) {
        void value.catch((error) => {
          var _a, _b;
          const host = globalThis;
          (_b = host.__flaxAsyncError) == null ? void 0 : _b.call(host, error instanceof Error ? (_a = error.stack) != null ? _a : error.message : String(error));
        });
      }
    },
    state(type, id) {
      const definition = stateTypes.get(type);
      if (!definition)
        throw new TypeError(`Unknown State: ${type}`);
      const value = {};
      stateHandles.set(value, { type, id });
      definition.fields.forEach((field) => {
        Object.defineProperty(value, field, {
          enumerable: true,
          get() {
            const host = globalThis;
            if (!host.__flaxStateGet)
              throw new Error("State getters require a Flax host");
            return host.__flaxStateGet(bindingVersion, type, id, field);
          }
        });
      });
      for (const [name, method] of Object.entries(definition.methods)) {
        Object.defineProperty(value, name, { value: method.bind(value) });
      }
      return Object.freeze(value);
    },
    context(type, id) {
      const cached = cachedObject(type, id);
      if (cached)
        return cached;
      const fields = contextTypes.get(type);
      if (!fields)
        throw new TypeError(`Unregistered context type: ${type}`);
      const value = {};
      trackObject(value, type, id);
      const state = objectHandles.get(value);
      for (const field of fields) {
        Object.defineProperty(value, field, {
          enumerable: true,
          get() {
            if (!state.alive) {
              if (field === "mounted")
                return false;
              throw new Error("Unmounted BuildContext");
            }
            const get = globalThis.__flaxGet;
            if (!get)
              throw new Error("Dart members require a FlaxView host");
            return get(bindingVersion, type, id, field);
          }
        });
      }
      Object.defineProperty(value, "findAncestorWidgetOfExactType", {
        value: (constructor) => {
          if (!state.alive)
            throw new Error("Unmounted BuildContext");
          const info = componentType(constructor);
          const call = globalThis.__flaxAncestor;
          if (!call)
            throw new Error("Ancestor queries require a Flax host");
          return call(bindingVersion, type, id, info.type);
        }
      });
      contextStates.set(value, state);
      return Object.freeze(value);
    },
    releaseContext(id) {
      references.release(id);
    }
  })
});
var mounted = false;
function mountRoot(widget) {
  if (mounted)
    throw new Error("This runtime already has an application root");
  const host = globalThis;
  if (!host.__flaxMount)
    throw new Error("runApp requires a FlaxView host");
  host.__flaxMount(widget, bindingVersion);
  mounted = true;
}

});
