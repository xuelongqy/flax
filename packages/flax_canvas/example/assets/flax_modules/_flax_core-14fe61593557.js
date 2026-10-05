globalThis.__flaxModules.define({"specifier":"@flax/core","owner":"@flax/core-runtime:dist/runtime/index.js","version":"0.0.0","artifact":"e1be7ef3915295461922b1d64f89a141583a9d2fff311baaf641085d2a5f998e","asset":"assets/flax_modules/_flax_core-14fe61593557.js","package":"@flax/core-runtime","source":"dist/runtime/index.js","dependencies":{},"bindings":[],"subpaths":[]}, function(module, exports, require) {
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

// ../../../flax/js/dist/runtime/index.js
var index_exports = {};
__export(index_exports, {
  batch: () => batch,
  bind: () => bind,
  computed: () => computed,
  signal: () => signal
});
module.exports = __toCommonJS(index_exports);

// ../../../../node_modules/.pnpm/@preact+signals-core@1.14.4/node_modules/@preact/signals-core/dist/signals-core.mjs
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
function n(i2) {
  if (e > 0) return i2();
  d = ++u;
  e++;
  try {
    return i2();
  } finally {
    t();
  }
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
var u = 0;
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

// ../../../flax/js/dist/runtime/index.js
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
function batch(action) {
  return n(action);
}

});
