globalThis.__flaxModules.define({"specifier":"@flax/core/bindings","owner":"@flax/core:dist/runtime/bindings.js","version":"0.0.0","artifact":"66a4e1dec440db0d5474db3ccda62e08ca493e653602f97be92ec39528610a71","asset":"assets/flax_modules/_flax_core_bindings-d3b4a70bd856.js","package":"@flax/core","source":"dist/runtime/bindings.js","dependencies":{},"bindings":[]}, function(module, exports, require) {
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __yieldStar = (value) => {
  var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
  if (obj == null) {
    obj = value[__knownSymbol("iterator")]();
    method = (k) => it[k] = (x2) => obj[k](x2);
  } else {
    obj = obj.call(value);
    method = (k) => it[k] = (v2) => {
      if (isAwait) {
        isAwait = false;
        if (k === "throw") throw v2;
        return v2;
      }
      isAwait = true;
      return {
        done: false,
        value: new __await(new Promise((resolve) => {
          var x2 = obj[k](v2);
          if (!(x2 instanceof Object)) __typeError("Object expected");
          resolve(x2);
        }), 1)
      };
    };
  }
  return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x2) => {
    throw x2;
  }, "return" in obj && method("return"), it;
};

// ../../../packages/flax/js/dist/runtime/bindings.js
var bindings_exports = {};
__export(bindings_exports, {
  bindingVersion: () => bindingVersion,
  componentStateCall: () => componentStateCall,
  componentStateWidget: () => componentStateWidget,
  construct: () => construct,
  constructAsyncIterableStream: () => constructAsyncIterableStream,
  constructDeferredObject: () => constructDeferredObject,
  constructObject: () => constructObject,
  constructProxy: () => constructProxy,
  constructStream: () => constructStream,
  contextHandle: () => contextHandle,
  copyNavigationData: () => copyNavigationData,
  defineContext: () => defineContext,
  defineObject: () => defineObject,
  defineState: () => defineState,
  defineStream: () => defineStream,
  enumValue: () => enumValue,
  invokeInstance: () => invokeInstance,
  invokeObject: () => invokeObject,
  invokeObjectStatic: () => invokeObjectStatic,
  invokeStatic: () => invokeStatic,
  invokeStream: () => invokeStream,
  invokeTopLevel: () => invokeTopLevel,
  isBinding: () => isBinding,
  mountRoot: () => mountRoot,
  registerComponent: () => registerComponent,
  registerComponentBase: () => registerComponentBase,
  registerComponentState: () => registerComponentState,
  registerPage: () => registerPage
});
module.exports = __toCommonJS(bindings_exports);

// ../../../node_modules/.pnpm/@preact+signals-core@1.14.4/node_modules/@preact/signals-core/dist/signals-core.mjs
var i = /* @__PURE__ */ Symbol.for("preact-signals");
function t() {
  if (e > 1) {
    e--;
    return;
  }
  let i2, t2 = false;
  !(function() {
    let i3 = f;
    f = void 0;
    while (void 0 !== i3) {
      const t3 = i3.S;
      if (t3.v === i3.v) {
        for (let n2 = t3.t; void 0 !== n2; n2 = n2.x) if (n2.i === i3.i) n2.i = t3.i;
      }
      i3 = i3.o;
    }
  })();
  while (void 0 !== h) {
    let n2 = h;
    h = void 0;
    c++;
    while (void 0 !== n2) {
      const o2 = n2.u;
      n2.u = void 0;
      n2.f &= -3;
      if (!(8 & n2.f) && w(n2)) try {
        n2.c();
      } catch (n3) {
        if (!t2) {
          i2 = n3;
          t2 = true;
        }
      }
      n2 = o2;
    }
  }
  c = 0;
  e--;
  if (t2) throw i2;
}
var o;
var s;
var h;
function r(i2) {
  const t2 = o, n2 = s;
  o = void 0;
  s = void 0;
  try {
    return i2();
  } finally {
    o = t2;
    s = n2;
  }
}
var f;
var e = 0;
var c = 0;
var d = 0;
var v = 0;
function l(i2) {
  if (void 0 === o) return;
  let t2 = i2.n;
  if (void 0 === t2 || t2.t !== o) {
    t2 = { i: 0, S: i2, p: o.s, n: void 0, t: o, e: void 0, x: void 0, r: t2 };
    if (void 0 !== o.s) o.s.n = t2;
    o.s = t2;
    i2.n = t2;
    if (32 & o.f) i2.S(t2);
    return t2;
  } else if (-1 === t2.i) {
    t2.i = 0;
    if (void 0 !== t2.n) {
      t2.n.p = t2.p;
      if (void 0 !== t2.p) t2.p.n = t2.n;
      t2.p = o.s;
      t2.n = void 0;
      o.s.n = t2;
      o.s = t2;
    }
    return t2;
  }
}
function a(i2, t2) {
  this.v = i2;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
  this.l = 0;
  this.W = null == t2 ? void 0 : t2.watched;
  this.Z = null == t2 ? void 0 : t2.unwatched;
  this.name = null == t2 ? void 0 : t2.name;
}
a.prototype.brand = i;
a.prototype.h = function() {
  return true;
};
a.prototype.S = function(i2) {
  const t2 = this.t;
  if (t2 !== i2 && void 0 === i2.e) {
    i2.x = t2;
    this.t = i2;
    if (void 0 !== t2) t2.e = i2;
    else r(() => {
      var i3;
      null == (i3 = this.W) || i3.call(this);
    });
  }
};
a.prototype.U = function(i2) {
  if (void 0 !== this.t) {
    const t2 = i2.e, n2 = i2.x;
    if (void 0 !== t2) {
      t2.x = n2;
      i2.e = void 0;
    }
    if (void 0 !== n2) {
      n2.e = t2;
      i2.x = void 0;
    }
    if (i2 === this.t) {
      this.t = n2;
      if (void 0 === n2) r(() => {
        var i3;
        null == (i3 = this.Z) || i3.call(this);
      });
    }
  }
};
a.prototype.subscribe = function(i2) {
  return j(() => {
    const t2 = this.value;
    r(() => i2(t2));
  }, { name: "sub" });
};
a.prototype.valueOf = function() {
  return this.value;
};
a.prototype.toString = function() {
  return this.value + "";
};
a.prototype.toJSON = function() {
  return this.value;
};
a.prototype.peek = function() {
  return r(() => this.value);
};
Object.defineProperty(a.prototype, "value", { get() {
  const i2 = l(this);
  if (void 0 !== i2) i2.i = this.i;
  return this.v;
}, set(i2) {
  if (i2 !== this.v) {
    if (c > 100) throw new Error("Cycle detected");
    !(function(i3) {
      if (0 !== e && 0 === c) {
        if (i3.l !== d) {
          i3.l = d;
          f = { S: i3, v: i3.v, i: i3.i, o: f };
        }
      }
    })(this);
    this.v = i2;
    this.i++;
    v++;
    e++;
    try {
      for (let i3 = this.t; void 0 !== i3; i3 = i3.x) i3.t.N();
    } finally {
      t();
    }
  }
} });
function y(i2, t2) {
  return new a(i2, t2);
}
function w(i2) {
  for (let t2 = i2.s; void 0 !== t2; t2 = t2.n) if (t2.S.i !== t2.i || !t2.S.h() || t2.S.i !== t2.i) return true;
  return false;
}
function _(i2) {
  for (let t2 = i2.s; void 0 !== t2; t2 = t2.n) {
    const n2 = t2.S.n;
    if (void 0 !== n2) t2.r = n2;
    t2.S.n = t2;
    t2.i = -1;
    if (void 0 === t2.n) {
      i2.s = t2;
      break;
    }
  }
}
function b(i2) {
  let t2, n2 = i2.s;
  while (void 0 !== n2) {
    const i3 = n2.p;
    if (-1 === n2.i) {
      n2.S.U(n2);
      if (void 0 !== i3) i3.n = n2.n;
      if (void 0 !== n2.n) n2.n.p = i3;
    } else t2 = n2;
    n2.S.n = n2.r;
    if (void 0 !== n2.r) n2.r = void 0;
    n2 = i3;
  }
  i2.s = t2;
}
function p(i2, t2) {
  a.call(this, void 0, t2);
  this.x = i2;
  this.s = void 0;
  this.g = v - 1;
  this.f = 4;
}
p.prototype = new a();
p.prototype.h = function() {
  this.f &= -3;
  if (1 & this.f) return false;
  if (32 == (36 & this.f)) return true;
  this.f &= -5;
  if (this.g === v) return true;
  this.g = v;
  this.f |= 1;
  if (this.i > 0 && !w(this)) {
    this.f &= -2;
    return true;
  }
  const i2 = o;
  try {
    _(this);
    o = this;
    const i3 = this.x();
    if (16 & this.f || this.v !== i3 || 0 === this.i) {
      this.v = i3;
      this.f &= -17;
      this.i++;
    }
  } catch (i3) {
    this.v = i3;
    this.f |= 16;
    this.i++;
  }
  o = i2;
  b(this);
  this.f &= -2;
  return true;
};
p.prototype.S = function(i2) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (let i3 = this.s; void 0 !== i3; i3 = i3.n) i3.S.S(i3);
  }
  a.prototype.S.call(this, i2);
};
p.prototype.U = function(i2) {
  if (void 0 !== this.t) {
    a.prototype.U.call(this, i2);
    if (void 0 === this.t) {
      this.f &= -33;
      for (let i3 = this.s; void 0 !== i3; i3 = i3.n) i3.S.U(i3);
    }
  }
};
p.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (let i2 = this.t; void 0 !== i2; i2 = i2.x) i2.t.N();
  }
};
Object.defineProperty(p.prototype, "value", { get() {
  if (1 & this.f) throw new Error("Cycle detected");
  const i2 = l(this);
  this.h();
  if (void 0 !== i2) i2.i = this.i;
  if (16 & this.f) throw this.v;
  return this.v;
} });
function g(i2, t2) {
  return new p(i2, t2);
}
function S(i2) {
  const n2 = i2.m;
  i2.m = void 0;
  if ("function" == typeof n2) {
    e++;
    const s2 = o;
    o = void 0;
    try {
      n2();
    } catch (t2) {
      i2.f &= -2;
      i2.f |= 8;
      m(i2);
      throw t2;
    } finally {
      o = s2;
      t();
    }
  }
}
function m(i2) {
  for (let t2 = i2.s; void 0 !== t2; t2 = t2.n) t2.S.U(t2);
  i2.x = void 0;
  i2.s = void 0;
  S(i2);
}
function x(i2) {
  if (o !== this) throw new Error("Out-of-order effect");
  b(this);
  o = i2;
  this.f &= -2;
  if (8 & this.f) m(this);
  t();
}
function E(i2, t2) {
  this.x = i2;
  this.m = void 0;
  this.s = void 0;
  this.u = void 0;
  this.f = 32;
  this.name = null == t2 ? void 0 : t2.name;
  if (s) s.push(this);
}
E.prototype.c = function() {
  const i2 = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    const t2 = this.x();
    if ("function" == typeof t2) this.m = t2;
  } finally {
    i2();
  }
};
E.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  S(this);
  _(this);
  e++;
  const i2 = o;
  o = this;
  return x.bind(this, i2);
};
E.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.u = h;
    h = this;
  }
};
E.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f)) m(this);
};
E.prototype.dispose = function() {
  this.d();
};
function j(i2, t2) {
  const n2 = new E(i2, t2);
  try {
    n2.c();
  } catch (i3) {
    n2.d();
    throw i3;
  }
  const o2 = n2.d.bind(n2);
  o2[Symbol.dispose] = o2;
  return o2;
}

// ../../../packages/flax/js/dist/runtime/index.js
function notify(token) {
  const host = globalThis;
  if (!host.__flaxInvalidate)
    throw new Error("A Flax host is required to subscribe");
  host.__flaxInvalidate(token);
}
function bind(read) {
  const result = g(() => {
    try {
      return { ok: true, value: read() };
    } catch (error) {
      return { ok: false, error };
    }
  });
  return Object.freeze({
    kind: "binding",
    read() {
      const current = result.value;
      if (!current.ok)
        throw current.error;
      return current.value;
    },
    observe(token) {
      let previous;
      return j(() => {
        const current = result.value;
        const changed = previous !== void 0 && (!previous.ok || !current.ok || !Object.is(previous.value, current.value));
        previous = current;
        if (changed)
          notify(token);
      });
    }
  });
}
function signal(value) {
  const source = y(value);
  const binding = bind(() => source.value);
  return Object.freeze({
    get value() {
      return source.value;
    },
    set value(next) {
      source.value = next;
    },
    bind: binding
  });
}
function computed(read) {
  const source = g(read);
  return Object.freeze({
    get value() {
      return source.value;
    },
    bind: bind(() => source.value)
  });
}

// ../../../packages/flax/js/dist/runtime/bindings.js
var bindingVersion = 20;
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
    retired: false,
    claimed: false
  });
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
  const names = new Set(parameters.filter((p2) => !p2.positional).map((p2) => p2.name));
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
  if (parameters.some((p2) => p2.readonly)) {
    return Object.freeze(Object.assign(descriptor, Object.fromEntries(parameters.filter((p2) => p2.readonly).map((p2) => [
      p2.name,
      Object.prototype.hasOwnProperty.call(args, p2.name) ? args[p2.name] : p2.defaultValue
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
var contexts = /* @__PURE__ */ new Map();
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
  if (!record.active || promises.get(id) !== record)
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
var promises = /* @__PURE__ */ new Map();
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
var objectHandles = /* @__PURE__ */ new WeakMap();
var objects = /* @__PURE__ */ new Map();
var deferredObjects = /* @__PURE__ */ new WeakMap();
var iterableObjectTypes = /* @__PURE__ */ new Set();
var objectSweep;
function cachedObject(type, id) {
  const aliases = objects.get(id);
  if (!aliases)
    return null;
  for (const alias of aliases) {
    const value = alias.deref();
    if (!value) {
      aliases.delete(alias);
      continue;
    }
    const handle = objectHandles.get(value);
    if ((handle == null ? void 0 : handle.alive) && handle.type === type)
      return value;
  }
  if (aliases.size === 0)
    objects.delete(id);
  return null;
}
function trackObject(value, type, id) {
  var _a;
  const current = objectHandles.get(value);
  if (current) {
    if (!current.alive || current.type !== type || current.id !== id)
      throw new TypeError("Object identity mismatch");
    return;
  }
  objectHandles.set(value, { type, id, alive: true });
  const aliases = (_a = objects.get(id)) != null ? _a : /* @__PURE__ */ new Set();
  aliases.add(new WeakRef(value));
  objects.set(id, aliases);
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
var nextAsyncIterableSource = 1;
function constructAsyncIterableStream(type, source) {
  if (source === null || typeof source !== "object" && typeof source !== "function")
    throw new TypeError("Expected an AsyncIterable");
  const create = globalThis.__flaxCreateAsyncIterableStream;
  if (!create)
    throw new Error("AsyncIterable Streams require a Flax host");
  const id = nextAsyncIterableSource++;
  asyncIterableSources.set(id, {
    source,
    iterator: null,
    closed: false,
    pendingReject: null
  });
  try {
    return create(bindingVersion, type, id);
  } catch (error) {
    asyncIterableSources.delete(id);
    throw error;
  }
}
function asyncIterableSource(id) {
  const record = asyncIterableSources.get(id);
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
  const record = asyncIterableSources.get(id);
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
  const iteratorId = create(bindingVersion, ref.id);
  let pending = false;
  let finished = false;
  return {
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
  const positional = parameters.filter((p2) => p2.positional).length;
  const hasNamed = parameters.some((p2) => !p2.positional);
  if (args.length > positional + (hasNamed ? 1 : 0))
    throw new TypeError("Too many proxy constructor arguments");
  if (implementation === null || typeof implementation !== "object" || Object.keys(implementation).some((k) => !names.includes(k) && !getters.includes(k) && !setters.includes(k)))
    throw new TypeError("Invalid proxy implementation");
  const descriptor = construct("value", type, "@implementation", parameters, args.slice(0, positional), (_a = args[positional]) != null ? _a : {});
  const values = { ...descriptor.args };
  function property(name) {
    for (let object = implementation; object !== null; object = Object.getPrototypeOf(object)) {
      const descriptor2 = Object.getOwnPropertyDescriptor(object, name);
      if (descriptor2)
        return descriptor2;
    }
    return void 0;
  }
  for (const name of names) {
    const method = (_b = property(name)) == null ? void 0 : _b.value;
    if (typeof method !== "function")
      throw new TypeError(`Missing proxy method: ${name}`);
    values[`@call:${name}`] = method.bind(implementation);
  }
  for (const kind of ["get", "set"]) {
    for (const name of kind === "get" ? getters : setters) {
      if (names.includes(name))
        throw new TypeError(`Conflicting proxy member: ${name}`);
      const accessor = (_c = property(name)) == null ? void 0 : _c[kind];
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
    return array ? Array.from({ length: value.length }, (_2, i2) => read(String(i2))) : Object.fromEntries(Object.keys(value).map((key) => [key, read(key)]));
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
      for (let i2 = 0; i2 < namedCount; i2++) {
        options[values[positionalCount + 1 + i2 * 2]] = values[positionalCount + 2 + i2 * 2];
      }
      return Reflect.apply(callback, void 0, [...positional, options]);
    },
    componentType,
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
      if (!state || state.claimed)
        throw new TypeError("createState must return a fresh State");
      state.claimed = true;
      state.widget = widget;
      state.id = id;
      return value;
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
      const params = signal(freezeData(copyNavigationData(arguments_)));
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
        const widget = factory(computed(() => params.value), lifecycle);
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
      const expired = [];
      objectSweep != null ? objectSweep : objectSweep = objects.keys();
      for (let i2 = 0; i2 < 64; i2++) {
        const next = objectSweep.next();
        if (next.done) {
          objectSweep = void 0;
          break;
        }
        const aliases = objects.get(next.value);
        if (!aliases)
          continue;
        for (const alias of aliases) {
          if (!alias.deref())
            aliases.delete(alias);
        }
        if (aliases.size === 0) {
          objects.delete(next.value);
          expired.push(next.value);
        }
      }
      return expired;
    },
    releaseObject(id) {
      var _a;
      for (const alias of (_a = objects.get(id)) != null ? _a : []) {
        const value = alias.deref();
        const handle = value && objectHandles.get(value);
        if (handle)
          handle.alive = false;
      }
      objects.delete(id);
    },
    enumValue,
    enumType(value) {
      var _a;
      return (_a = enumTypes.get(value)) != null ? _a : null;
    },
    copyData: copyNavigationData,
    array: (...values) => Object.freeze(values),
    record: (...values) => Object.freeze(Object.fromEntries(Array.from({ length: values.length / 2 }, (_2, i2) => [
      values[i2 * 2],
      values[i2 * 2 + 1]
    ]))),
    future(id) {
      const promise = new Promise((resolve, reject) => futures.set(id, { resolve, reject }));
      void promise.catch(() => {
      });
      return promise;
    },
    settleFuture(id, success, value) {
      const pending = futures.get(id);
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
        promises.set(id, record2);
        void Promise.reject(error).catch((reason) => settlePromise(id, record2, false, reason)).catch(reportCleanupError);
        return;
      }
      if (typeof then !== "function") {
        throw new TypeError("Future callbacks must return a Promise");
      }
      const record = { active: true };
      promises.set(id, record);
      const assimilated = Promise.resolve({
        then(resolve, reject) {
          Reflect.apply(then, value, [resolve, reject]);
        }
      });
      void assimilated.then((result) => settlePromise(id, record, true, result), (reason) => settlePromise(id, record, false, reason)).catch(reportCleanupError);
    },
    cancelPromises() {
      for (const record of promises.values())
        record.active = false;
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
      const cached = contexts.get(id);
      if (cached)
        return cached;
      const fields = contextTypes.get(type);
      if (!fields)
        throw new TypeError(`Unregistered context type: ${type}`);
      const state = { type, id, alive: true };
      const value = {};
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
      contexts.set(id, Object.freeze(value));
      return value;
    },
    releaseContext(id) {
      const value = contexts.get(id);
      if (value)
        contextStates.get(value).alive = false;
      contexts.delete(id);
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
