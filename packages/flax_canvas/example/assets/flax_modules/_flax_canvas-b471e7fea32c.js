globalThis.__flaxModules.define({"specifier":"@flax/canvas","owner":"@flax/canvas-runtime:dist/index.js","version":"0.0.0","artifact":"f5d842e198f25e02a05e7fe7d21b3bc1b136ff56ad94e3b5cbfc8b6614438cb9","asset":"assets/flax_modules/_flax_canvas-b471e7fea32c.js","package":"@flax/canvas-runtime","source":"dist/index.js","dependencies":{"@flax/core/bindings":"0.0.0","@flax/flutter/foundation":"0.0.0"},"bindings":[{"moduleId":"flax.canvas/canvas","uiProtocol":23,"types":["flax.canvas/canvas#type:FlaxCanvasSurface","flax.canvas/canvas#type:FlaxCanvasView"],"functions":[]}],"subpaths":[]}, function(module, exports, require) {
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// ../../js/dist/index.js
var index_exports = {};
__export(index_exports, {
  CanvasView: () => CanvasView2
});
module.exports = __toCommonJS(index_exports);

// ../../js/dist/generated/bindings.js
var import_bindings = require("@flax/core/bindings");
var import_foundation = require("@flax/flutter/foundation");
var import_foundation2 = require("@flax/flutter/foundation");
var _flaxMemberParameters0 = [{ "name": "listener", "required": true, "positional": true }];
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
var canvasBindingModule = _flaxInstallBindingModule("flax.canvas/canvas", 23, Object.freeze(["native-widget-proxies"]));
var { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = canvasBindingModule;
defineObject("flax.canvas/canvas#type:FlaxCanvasSurface", ["width", "height"], ["width", "height"], (0, import_bindings.bindingMethods)("flax.canvas/canvas#type:FlaxCanvasSurface", "object", { "addListener": _flaxMemberParameters0, "removeListener": _flaxMemberParameters0 }), ["removeListener"]);
function CanvasView(canvas, options = {}) {
  if (arguments.length > 2)
    throw new TypeError("Too many constructor arguments");
  return construct("widget", "flax.canvas/canvas#type:FlaxCanvasView", "", [{ "name": "canvas", "required": true, "positional": true }, { "name": "key", "required": false, "positional": false }, { "name": "width", "required": false, "positional": false }, { "name": "height", "required": false, "positional": false }], [canvas], options);
}

// ../../js/dist/commands.js
var MAGIC = 826496579;
var VERSION = 1;
var OP = {
  save: 1,
  restore: 2,
  reset: 3,
  setTransform: 4,
  transform: 5,
  translate: 6,
  rotate: 7,
  scale: 8,
  resetTransform: 9,
  fillRect: 10,
  strokeRect: 11,
  clearRect: 12,
  fillPath: 13,
  strokePath: 14,
  clipPath: 15,
  fillText: 16,
  strokeText: 17,
  drawImage: 18,
  putImageData: 19,
  setFillColor: 20,
  setStrokeColor: 21,
  setFillLinear: 22,
  setStrokeLinear: 23,
  setFillRadial: 24,
  setStrokeRadial: 25,
  setFillConic: 26,
  setStrokeConic: 27,
  setGlobalAlpha: 28,
  setComposite: 29,
  setLineWidth: 30,
  setLineCap: 31,
  setLineJoin: 32,
  setMiterLimit: 33,
  setLineDash: 34,
  setLineDashOffset: 35,
  setShadow: 36,
  setSmoothing: 37,
  setFilter: 38,
  setFont: 39,
  setTextAlign: 40,
  setTextBaseline: 41,
  setDirection: 42,
  setLetterSpacing: 43,
  setWordSpacing: 44,
  setFillPattern: 45,
  setStrokePattern: 46
};
var PATH = {
  move: 1,
  line: 2,
  close: 3,
  rect: 4,
  cubic: 5,
  quad: 6,
  arc: 7,
  ellipse: 8,
  arcTo: 9,
  roundRect: 10,
  svg: 11,
  add: 12,
  extend: 13
};
var CommandBuffer = class {
  constructor() {
    __publicField(this, "buffer", new ArrayBuffer(4096));
    __publicField(this, "view", new DataView(this.buffer));
    __publicField(this, "used", 24);
  }
  grow(need) {
    if (this.used + need <= this.buffer.byteLength)
      return;
    let size = this.buffer.byteLength;
    while (size < this.used + need)
      size *= 2;
    const next = new ArrayBuffer(size);
    new Uint8Array(next).set(new Uint8Array(this.buffer, 0, this.used));
    this.buffer = next;
    this.view = new DataView(next);
  }
  reset() {
    this.used = 24;
  }
  u16(value) {
    this.grow(2);
    this.view.setUint16(this.used, value, true);
    this.used += 2;
  }
  u32(value) {
    this.grow(4);
    this.view.setUint32(this.used, value, true);
    this.used += 4;
  }
  f64(value) {
    this.grow(8);
    this.view.setFloat64(this.used, value, true);
    this.used += 8;
  }
  bytes(value) {
    this.grow(value.byteLength);
    new Uint8Array(this.buffer, this.used, value.byteLength).set(value);
    this.used += value.byteLength;
  }
  text(value) {
    const Encoder = globalThis.TextEncoder;
    if (Encoder == null)
      throw new TypeError("TextEncoder is required");
    const encoded = new Encoder().encode(value);
    this.u32(encoded.length);
    this.bytes(encoded);
  }
  align() {
    const pad = (8 - this.used % 8) % 8;
    if (pad)
      this.grow(pad);
    this.used += pad;
  }
  record(opcode, write) {
    const start = this.used;
    this.u16(opcode);
    this.u16(0);
    this.u32(0);
    const payload = this.used;
    write();
    const length = this.used - payload;
    this.view.setUint32(start + 4, length, true);
    this.align();
  }
  path(commands) {
    var _a3;
    this.u32(commands.length);
    for (const command of commands) {
      this.u16(command.op);
      if (command.text != null)
        this.text(command.text);
      for (const value of (_a3 = command.numbers) != null ? _a3 : [])
        this.f64(value);
      if (command.children)
        this.path(command.children);
    }
  }
  usedBytes() {
    return new Uint8Array(this.buffer, 0, this.used);
  }
  header(generation, sequence) {
    this.view.setUint32(0, MAGIC, true);
    this.view.setUint32(4, VERSION, true);
    this.view.setUint32(8, 0, true);
    this.view.setUint32(12, generation, true);
    this.view.setUint32(16, sequence, true);
    this.view.setUint32(20, this.used, true);
    return this.usedBytes();
  }
};

// ../../js/dist/color.js
var named = {
  black: "#000000",
  silver: "#c0c0c0",
  gray: "#808080",
  white: "#ffffff",
  maroon: "#800000",
  red: "#ff0000",
  purple: "#800080",
  fuchsia: "#ff00ff",
  green: "#008000",
  lime: "#00ff00",
  olive: "#808000",
  yellow: "#ffff00",
  navy: "#000080",
  blue: "#0000ff",
  teal: "#008080",
  aqua: "#00ffff",
  orange: "#ffa500",
  transparent: "#00000000"
};
function parseColor(input) {
  var _a3, _b, _c;
  const value = input.trim().toLowerCase();
  if (value === "transparent")
    return [0, 0, 0, 0];
  const mapped = (_a3 = named[value]) != null ? _a3 : value;
  const hex = /^#([0-9a-f]{3,8})$/.exec(mapped);
  const digits = hex == null ? void 0 : hex[1];
  if (digits) {
    if (digits.length === 3 || digits.length === 4) {
      const r = parseInt(digits[0] + digits[0], 16) / 255;
      const g = parseInt(digits[1] + digits[1], 16) / 255;
      const b = parseInt(digits[2] + digits[2], 16) / 255;
      const a = digits.length === 4 ? parseInt(digits[3] + digits[3], 16) / 255 : 1;
      return [r, g, b, a];
    }
    if (digits.length === 6 || digits.length === 8) {
      return [
        parseInt(digits.slice(0, 2), 16) / 255,
        parseInt(digits.slice(2, 4), 16) / 255,
        parseInt(digits.slice(4, 6), 16) / 255,
        digits.length === 8 ? parseInt(digits.slice(6, 8), 16) / 255 : 1
      ];
    }
  }
  const rgb = /^rgba?\(([^)]+)\)$/.exec(value);
  const rgbParts = (_b = rgb == null ? void 0 : rgb[1]) == null ? void 0 : _b.split(",").map((part) => part.trim());
  if (rgbParts && rgbParts.length >= 3) {
    const n = (part, scaled) => {
      const number = part.endsWith("%") ? parseFloat(part) / 100 : parseFloat(part);
      if (!Number.isFinite(number))
        return null;
      return scaled && !part.endsWith("%") ? Math.min(1, Math.max(0, number / 255)) : Math.min(1, Math.max(0, number));
    };
    const r = n(rgbParts[0], true);
    const g = n(rgbParts[1], true);
    const b = n(rgbParts[2], true);
    const a = rgbParts[3] ? n(rgbParts[3], false) : 1;
    if (r == null || g == null || b == null || a == null)
      return null;
    return [r, g, b, a];
  }
  const hsl = /^hsla?\(([^)]+)\)$/.exec(value);
  const hslParts = (_c = hsl == null ? void 0 : hsl[1]) == null ? void 0 : _c.split(",").map((part) => part.trim());
  if (hslParts && hslParts.length >= 3) {
    const h = parseFloat(hslParts[0]);
    const s = parseFloat(hslParts[1]) / 100;
    const l = parseFloat(hslParts[2]) / 100;
    const a = hslParts[3] ? parseFloat(hslParts[3]) : 1;
    if (![h, s, l, a].every(Number.isFinite))
      return null;
    return hsla(h, s, l, a);
  }
  return null;
}
function hsla(h, s, l, a) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = (h % 360 + 360) % 360 / 60;
  const x = c * (1 - Math.abs(hp % 2 - 1));
  let r = 0, g = 0, b = 0;
  if (hp < 1)
    [r, g] = [c, x];
  else if (hp < 2)
    [r, g] = [x, c];
  else if (hp < 3)
    [g, b] = [c, x];
  else if (hp < 4)
    [g, b] = [x, c];
  else if (hp < 5)
    [r, b] = [x, c];
  else
    [r, b] = [c, x];
  const m = l - c / 2;
  return [r + m, g + m, b + m, a];
}

// ../../js/dist/path.js
function copyCommands(commands) {
  return commands.map((command) => {
    const copy = { op: command.op };
    if (command.numbers)
      copy.numbers = command.numbers.slice();
    if (command.text != null)
      copy.text = command.text;
    if (command.children)
      copy.children = copyCommands(command.children);
    return copy;
  });
}
function indexSizeError(message) {
  const Exception = globalThis.DOMException;
  if (typeof Exception === "function") {
    try {
      return new Exception(message, "IndexSizeError");
    } catch {
    }
  }
  return new RangeError(message);
}
function ellipsePoint(x, y, rx, ry, rotation, angle) {
  const px = rx * Math.cos(angle);
  const py = ry * Math.sin(angle);
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  return [x + px * cos - py * sin, y + px * sin + py * cos];
}
function mapPoint(t, x, y) {
  return [t.a * x + t.c * y + t.e, t.b * x + t.d * y + t.f];
}
function arcToGeometry(current, x1, y1, x2, y2, radius) {
  if (current == null)
    return { kind: "move", x: x1, y: y1 };
  const [x0, y0] = current;
  if (radius === 0 || x0 === x1 && y0 === y1 || x1 === x2 && y1 === y2) {
    return { kind: "line", x: x1, y: y1 };
  }
  const v1x = x0 - x1;
  const v1y = y0 - y1;
  const v2x = x2 - x1;
  const v2y = y2 - y1;
  const len1 = Math.hypot(v1x, v1y);
  const len2 = Math.hypot(v2x, v2y);
  if (len1 === 0 || len2 === 0)
    return { kind: "line", x: x1, y: y1 };
  const dx1 = v1x / len1;
  const dy1 = v1y / len1;
  const dx2 = v2x / len2;
  const dy2 = v2y / len2;
  const cross = dx1 * dy2 - dy1 * dx2;
  if (Math.abs(cross) < 1e-12)
    return { kind: "line", x: x1, y: y1 };
  const dot = Math.min(1, Math.max(-1, dx1 * dx2 + dy1 * dy2));
  const omega = Math.acos(dot);
  const dist = Math.abs(radius) / Math.tan(omega / 2);
  const t1x = x1 + dx1 * dist;
  const t1y = y1 + dy1 * dist;
  const t2x = x1 + dx2 * dist;
  const t2y = y1 + dy2 * dist;
  const sign = cross < 0 ? 1 : -1;
  const cx = t1x + -dy1 * Math.abs(radius) * sign;
  const cy = t1y + dx1 * Math.abs(radius) * sign;
  const start = Math.atan2(t1y - cy, t1x - cx);
  const end = Math.atan2(t2y - cy, t2x - cx);
  return {
    kind: "arc",
    x1: t1x,
    y1: t1y,
    x2: t2x,
    y2: t2y,
    x: cx,
    y: cy,
    rx: Math.abs(radius),
    ry: Math.abs(radius),
    start,
    end,
    ccw: cross > 0
  };
}
function adoptTransformed(target, source, transform) {
  const map = (x, y) => transform ? mapPoint(transform, x, y) : [x, y];
  if (source.subpathStart && target.subpathStart == null) {
    target.subpathStart = map(source.subpathStart[0], source.subpathStart[1]);
  }
  if (source.current) {
    target.current = map(source.current[0], source.current[1]);
  }
}
var Path2D = class {
  constructor(path) {
    __publicField(this, "commands", []);
    __publicField(this, "current", null);
    __publicField(this, "subpathStart", null);
    if (typeof path === "string")
      this.commands.push({ op: PATH.svg, text: path });
    else if (path) {
      this.commands = copyCommands(path.commands);
      this.current = path.current ? [path.current[0], path.current[1]] : null;
      this.subpathStart = path.subpathStart ? [path.subpathStart[0], path.subpathStart[1]] : null;
    }
  }
  addPath(path, transform) {
    const commands = copyCommands(path.commands);
    if (!transform) {
      this.commands.push(...commands);
      adoptTransformed(this, path);
      return;
    }
    this.commands.push({
      op: PATH.add,
      numbers: [
        transform.a,
        transform.b,
        transform.c,
        transform.d,
        transform.e,
        transform.f
      ],
      children: commands
    });
    adoptTransformed(this, path, transform);
  }
  extendPath(path, transform) {
    this.commands.push({
      op: PATH.extend,
      numbers: [
        transform.a,
        transform.b,
        transform.c,
        transform.d,
        transform.e,
        transform.f
      ],
      children: copyCommands(path.commands)
    });
    adoptTransformed(this, path, transform);
  }
  closePath() {
    this.commands.push({ op: PATH.close });
    this.current = this.subpathStart;
  }
  moveTo(x, y) {
    this.commands.push({ op: PATH.move, numbers: [x, y] });
    this.current = this.subpathStart = [x, y];
  }
  lineTo(x, y) {
    this.commands.push({ op: PATH.line, numbers: [x, y] });
    if (this.current == null)
      this.current = this.subpathStart = [x, y];
    else
      this.current = [x, y];
  }
  rect(x, y, w, h) {
    this.commands.push({ op: PATH.rect, numbers: [x, y, w, h] });
    this.current = this.subpathStart = [x, y];
  }
  roundRect(x, y, w, h, radii = 0) {
    var _a3, _b, _c, _d;
    const list = Array.isArray(radii) ? radii : [radii];
    if (list.some((radius) => radius < 0)) {
      throw new RangeError("The radius provided is negative.");
    }
    const tl = (_a3 = list[0]) != null ? _a3 : 0;
    const tr = (_b = list[1]) != null ? _b : tl;
    const br = (_c = list[2]) != null ? _c : tl;
    const bl = (_d = list[3]) != null ? _d : tr;
    this.commands.push({
      op: PATH.roundRect,
      numbers: [x, y, w, h, tl, tl, tr, tr, br, br, bl, bl]
    });
    this.current = this.subpathStart = [x, y];
  }
  arc(x, y, r, start, end, ccw = false) {
    if (r < 0)
      throw indexSizeError("The radius provided is negative.");
    this.commands.push({ op: PATH.arc, numbers: [x, y, r, start, end, ccw ? 1 : 0] });
    const point = ellipsePoint(x, y, r, r, 0, start === end ? start : end);
    if (this.current == null)
      this.subpathStart = ellipsePoint(x, y, r, r, 0, start);
    this.current = point;
  }
  arcTo(x1, y1, x2, y2, r) {
    if (r < 0)
      throw indexSizeError("The radius provided is negative.");
    const geo = arcToGeometry(this.current, x1, y1, x2, y2, r);
    this.commands.push({ op: PATH.arcTo, numbers: [x2, y2, r, x1, y1] });
    if (geo.kind === "move")
      this.current = this.subpathStart = [geo.x, geo.y];
    else if (geo.kind === "line")
      this.current = [geo.x, geo.y];
    else
      this.current = [geo.x2, geo.y2];
  }
  ellipse(x, y, rx, ry, rotation, start, end, ccw = false) {
    if (rx < 0 || ry < 0)
      throw indexSizeError("The radius provided is negative.");
    this.commands.push({
      op: PATH.ellipse,
      numbers: [x, y, rx, ry, rotation, start, end, ccw ? 1 : 0]
    });
    const point = ellipsePoint(x, y, rx, ry, rotation, start === end ? start : end);
    if (this.current == null) {
      this.subpathStart = ellipsePoint(x, y, rx, ry, rotation, start);
    }
    this.current = point;
  }
  quadraticCurveTo(cpx, cpy, x, y) {
    this.commands.push({ op: PATH.quad, numbers: [cpx, cpy, x, y] });
    if (this.current == null)
      this.subpathStart = [cpx, cpy];
    this.current = [x, y];
  }
  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this.commands.push({ op: PATH.cubic, numbers: [cp1x, cp1y, cp2x, cp2y, x, y] });
    if (this.current == null)
      this.subpathStart = [cp1x, cp1y];
    this.current = [x, y];
  }
};

// ../../js/dist/filter.js
var filterPart = /^(?:blur\(\s*[\d.]+\s*px\s*\)|brightness\(\s*[\d.]+%?\s*\)|contrast\(\s*[\d.]+%?\s*\)|grayscale\(\s*[\d.]+%?\s*\)|invert\(\s*[\d.]+%?\s*\)|opacity\(\s*[\d.]+%?\s*\)|saturate\(\s*[\d.]+%?\s*\)|sepia\(\s*[\d.]+%?\s*\)|hue-rotate\(\s*-?[\d.]+\s*deg\s*\))$/;
function acceptedFilter(value) {
  const text = value.trim();
  if (text === "none" || text === "")
    return "none";
  if (/\burl\s*\(|drop-shadow/i.test(text))
    return null;
  const parts = text.split(/\)\s*/).filter(Boolean);
  if (parts.length === 0)
    return null;
  for (const part of parts) {
    if (!filterPart.test(`${part})`))
      return null;
  }
  return text;
}

// ../../js/dist/canvas.js
var surfaceKey = /* @__PURE__ */ Symbol.for("flaxCanvasSurface");
var imageIdKey = /* @__PURE__ */ Symbol.for("flaxCanvasImageId");
var internalKey = /* @__PURE__ */ Symbol("flaxCanvasInternal");
function surfaceOf(canvas) {
  return canvas[surfaceKey];
}
var viewCanvases = /* @__PURE__ */ new WeakMap();
function holdCanvas(host, canvas) {
  viewCanvases.set(host, canvas);
}
var composites = /* @__PURE__ */ new Set([
  "source-over",
  "source-in",
  "source-out",
  "source-atop",
  "destination-over",
  "destination-in",
  "destination-out",
  "destination-atop",
  "xor",
  "copy",
  "lighter",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity"
]);
var Affine = class _Affine {
  constructor(a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
    __publicField(this, "a");
    __publicField(this, "b");
    __publicField(this, "c");
    __publicField(this, "d");
    __publicField(this, "e");
    __publicField(this, "f");
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;
  }
  clone() {
    return new _Affine(this.a, this.b, this.c, this.d, this.e, this.f);
  }
  get isIdentity() {
    return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1 && this.e === 0 && this.f === 0;
  }
  get det() {
    return this.a * this.d - this.b * this.c;
  }
  get isInvertible() {
    return Math.abs(this.det) >= 1e-12;
  }
  multiply(o) {
    return new _Affine(this.a * o.a + this.c * o.b, this.b * o.a + this.d * o.b, this.a * o.c + this.c * o.d, this.b * o.c + this.d * o.d, this.a * o.e + this.c * o.f + this.e, this.b * o.e + this.d * o.f + this.f);
  }
  invert() {
    const det = this.det;
    if (Math.abs(det) < 1e-12)
      return new _Affine();
    return new _Affine(this.d / det, -this.b / det, -this.c / det, this.a / det, (this.c * this.f - this.d * this.e) / det, (this.b * this.e - this.a * this.f) / det);
  }
  map(x, y) {
    return [this.a * x + this.c * y + this.e, this.b * x + this.d * y + this.f];
  }
};
function illegalConstructor() {
  throw new TypeError("Illegal constructor");
}
function invalidState(message) {
  const Exception = globalThis.DOMException;
  if (typeof Exception === "function") {
    try {
      return new Exception(message, "InvalidStateError");
    } catch {
    }
  }
  return new Error(message);
}
function acceptedFont(value) {
  return /(?:^|\s)\d*\.?\d+px\s+\S/.test(value.trim());
}
function acceptedPxLength(value) {
  const match = /^([+-]?(?:\d+\.?\d*|\.\d+))px$/.exec(value.trim());
  if (!match)
    return null;
  const amount = Number(match[1]);
  return Number.isFinite(amount) ? amount : null;
}
var CanvasGradient = class {
  constructor(kind, values, token) {
    __publicField(this, "kind");
    __publicField(this, "values");
    __publicField(this, "stops", []);
    __publicField(this, "version", 0);
    this.kind = kind;
    this.values = values;
    if (token !== internalKey)
      illegalConstructor();
  }
  addColorStop(offset, color) {
    const parsed = parseColor(color);
    if (!Number.isFinite(offset) || offset < 0 || offset > 1 || !parsed)
      throw new TypeError("Invalid color stop");
    this.stops.push({ offset, color: parsed });
    this.version++;
  }
};
var CanvasPattern = class {
  constructor(image, repeat, token) {
    __publicField(this, "image");
    __publicField(this, "repeat");
    __publicField(this, "transform", new Affine());
    __publicField(this, "version", 0);
    this.image = image;
    this.repeat = repeat;
    if (token !== internalKey)
      illegalConstructor();
  }
  setTransform(a, b = 0, c = 0, d = 1, e = 0, f = 0) {
    this.transform = a instanceof Affine || a && typeof a === "object" ? new Affine(a.a, a.b, a.c, a.d, a.e, a.f) : new Affine(Number(a != null ? a : 1), b, c, d, e, f);
    this.version++;
  }
};
function imageDataIndexError(message) {
  return indexSizeError(message);
}
function checkedImageSize(width, height) {
  const w = width | 0;
  const h = height | 0;
  if (w <= 0 || h <= 0) {
    throw imageDataIndexError("The source width and height must be greater than zero.");
  }
  const pixels = w * h;
  if (!Number.isFinite(pixels) || pixels > Math.floor(2147483647 / 4)) {
    throw new RangeError("The ImageData dimensions are too large.");
  }
  return { width: w, height: h, length: pixels * 4 };
}
var ImageData = class {
  constructor(dataOrWidth, widthOrHeight, height) {
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "data");
    if (typeof dataOrWidth === "number") {
      const size = checkedImageSize(dataOrWidth, widthOrHeight);
      this.width = size.width;
      this.height = size.height;
      this.data = new Uint8ClampedArray(size.length);
      return;
    }
    const width = widthOrHeight | 0;
    if (width <= 0) {
      throw imageDataIndexError("The source width must be greater than zero.");
    }
    if (dataOrWidth.length % 4 !== 0) {
      throw imageDataIndexError("The source data length is not a multiple of 4.");
    }
    let resolvedHeight;
    if (height == null) {
      if (dataOrWidth.length === 0 || dataOrWidth.length % (4 * width) !== 0) {
        throw imageDataIndexError("The source data does not match the width.");
      }
      resolvedHeight = dataOrWidth.length / (4 * width);
    } else {
      resolvedHeight = height | 0;
      if (resolvedHeight <= 0) {
        throw imageDataIndexError("The source height must be greater than zero.");
      }
      if (dataOrWidth.length !== 4 * width * resolvedHeight) {
        throw imageDataIndexError("The source data does not match the dimensions.");
      }
    }
    this.width = width;
    this.height = resolvedHeight;
    this.data = dataOrWidth;
  }
};
function defaults() {
  return {
    transform: new Affine(),
    fill: "#000000",
    stroke: "#000000",
    alpha: 1,
    composite: "source-over",
    lineWidth: 1,
    lineCap: "butt",
    lineJoin: "miter",
    miterLimit: 10,
    lineDash: [],
    lineDashOffset: 0,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    smoothing: true,
    smoothingQuality: "low",
    filter: "none",
    font: "10px sans-serif",
    textAlign: "start",
    textBaseline: "alphabetic",
    direction: "ltr",
    letterSpacing: "0px",
    wordSpacing: "0px"
  };
}
var OffscreenCanvasRenderingContext2D = class {
  constructor(canvas, call, buffer, dirty, token) {
    __publicField(this, "canvas");
    __publicField(this, "call");
    __publicField(this, "buffer");
    __publicField(this, "dirty");
    __publicField(this, "state", defaults());
    __publicField(this, "stack", []);
    __publicField(this, "path", new Path2D());
    __publicField(this, "fillVersion", -1);
    __publicField(this, "strokeVersion", -1);
    if (token !== internalKey || canvas == null || call == null || buffer == null || dirty == null) {
      illegalConstructor();
    }
    this.canvas = canvas;
    this.call = call;
    this.buffer = buffer;
    this.dirty = dirty;
  }
  get fillStyle() {
    return this.state.fill;
  }
  set fillStyle(value) {
    if (typeof value === "string") {
      const color = parseColor(value);
      if (!color)
        return;
      this.state.fill = value;
      this.record(OP.setFillColor, () => color.forEach((n) => this.buffer.f64(n)));
      return;
    }
    this.state.fill = value;
    this.writeStyle(true, value);
    this.fillVersion = value.version;
  }
  get strokeStyle() {
    return this.state.stroke;
  }
  set strokeStyle(value) {
    if (typeof value === "string") {
      const color = parseColor(value);
      if (!color)
        return;
      this.state.stroke = value;
      this.record(OP.setStrokeColor, () => color.forEach((n) => this.buffer.f64(n)));
      return;
    }
    this.state.stroke = value;
    this.writeStyle(false, value);
    this.strokeVersion = value.version;
  }
  get globalAlpha() {
    return this.state.alpha;
  }
  set globalAlpha(value) {
    if (!Number.isFinite(value) || value < 0 || value > 1)
      return;
    this.state.alpha = value;
    this.record(OP.setGlobalAlpha, () => this.buffer.f64(value));
  }
  get globalCompositeOperation() {
    return this.state.composite;
  }
  set globalCompositeOperation(value) {
    if (!composites.has(value))
      return;
    this.state.composite = value;
    this.record(OP.setComposite, () => this.buffer.text(value));
  }
  get lineWidth() {
    return this.state.lineWidth;
  }
  set lineWidth(value) {
    if (!Number.isFinite(value) || value <= 0)
      return;
    this.state.lineWidth = value;
    this.record(OP.setLineWidth, () => this.buffer.f64(value));
  }
  get lineCap() {
    return this.state.lineCap;
  }
  set lineCap(value) {
    if (!["butt", "round", "square"].includes(value))
      return;
    this.state.lineCap = value;
    this.record(OP.setLineCap, () => this.buffer.text(value));
  }
  get lineJoin() {
    return this.state.lineJoin;
  }
  set lineJoin(value) {
    if (!["miter", "round", "bevel"].includes(value))
      return;
    this.state.lineJoin = value;
    this.record(OP.setLineJoin, () => this.buffer.text(value));
  }
  get miterLimit() {
    return this.state.miterLimit;
  }
  set miterLimit(value) {
    if (!Number.isFinite(value) || value <= 0)
      return;
    this.state.miterLimit = value;
    this.record(OP.setMiterLimit, () => this.buffer.f64(value));
  }
  get lineDashOffset() {
    return this.state.lineDashOffset;
  }
  set lineDashOffset(value) {
    if (!Number.isFinite(value))
      return;
    this.state.lineDashOffset = value;
    this.record(OP.setLineDashOffset, () => this.buffer.f64(value));
  }
  get shadowColor() {
    return this.state.shadowColor;
  }
  set shadowColor(value) {
    if (!parseColor(value))
      return;
    this.state.shadowColor = value;
    this.writeShadow();
  }
  get shadowBlur() {
    return this.state.shadowBlur;
  }
  set shadowBlur(value) {
    if (!Number.isFinite(value) || value < 0)
      return;
    this.state.shadowBlur = value;
    this.writeShadow();
  }
  get shadowOffsetX() {
    return this.state.shadowOffsetX;
  }
  set shadowOffsetX(value) {
    if (!Number.isFinite(value))
      return;
    this.state.shadowOffsetX = value;
    this.writeShadow();
  }
  get shadowOffsetY() {
    return this.state.shadowOffsetY;
  }
  set shadowOffsetY(value) {
    if (!Number.isFinite(value))
      return;
    this.state.shadowOffsetY = value;
    this.writeShadow();
  }
  get imageSmoothingEnabled() {
    return this.state.smoothing;
  }
  set imageSmoothingEnabled(value) {
    this.state.smoothing = Boolean(value);
    this.writeSmoothing();
  }
  get imageSmoothingQuality() {
    return this.state.smoothingQuality;
  }
  set imageSmoothingQuality(value) {
    if (!["low", "medium", "high"].includes(value))
      return;
    this.state.smoothingQuality = value;
    this.writeSmoothing();
  }
  get filter() {
    return this.state.filter;
  }
  set filter(value) {
    if (typeof value !== "string")
      return;
    const accepted = acceptedFilter(value);
    if (accepted == null)
      return;
    this.state.filter = accepted;
    this.record(OP.setFilter, () => this.buffer.text(accepted));
  }
  get font() {
    return this.state.font;
  }
  set font(value) {
    if (typeof value !== "string" || !acceptedFont(value))
      return;
    this.state.font = value;
    this.record(OP.setFont, () => this.buffer.text(value));
  }
  get textAlign() {
    return this.state.textAlign;
  }
  set textAlign(value) {
    if (!["start", "end", "left", "right", "center"].includes(value))
      return;
    this.state.textAlign = value;
    this.record(OP.setTextAlign, () => this.buffer.text(value));
  }
  get textBaseline() {
    return this.state.textBaseline;
  }
  set textBaseline(value) {
    if (!["alphabetic", "top", "hanging", "middle", "ideographic", "bottom"].includes(value))
      return;
    this.state.textBaseline = value;
    this.record(OP.setTextBaseline, () => this.buffer.text(value));
  }
  get direction() {
    return this.state.direction;
  }
  set direction(value) {
    if (!["ltr", "rtl", "inherit"].includes(value))
      return;
    this.state.direction = value;
    this.record(OP.setDirection, () => this.buffer.text(value));
  }
  get letterSpacing() {
    return this.state.letterSpacing;
  }
  set letterSpacing(value) {
    const amount = acceptedPxLength(value);
    if (amount == null)
      return;
    this.state.letterSpacing = value;
    this.record(OP.setLetterSpacing, () => this.buffer.f64(amount));
  }
  get wordSpacing() {
    return this.state.wordSpacing;
  }
  set wordSpacing(value) {
    const amount = acceptedPxLength(value);
    if (amount == null)
      return;
    this.state.wordSpacing = value;
    this.record(OP.setWordSpacing, () => this.buffer.f64(amount));
  }
  save() {
    this.stack.push({
      ...this.state,
      transform: this.state.transform.clone(),
      lineDash: this.state.lineDash.slice()
    });
    this.record(OP.save, () => {
    });
  }
  restore() {
    const next = this.stack.pop();
    if (!next)
      return;
    this.state = next;
    this.record(OP.restore, () => {
    });
  }
  reset() {
    this.state = defaults();
    this.stack = [];
    this.path = new Path2D();
    this.fillVersion = -1;
    this.strokeVersion = -1;
    this.record(OP.reset, () => {
    });
  }
  getContextAttributes() {
    return { ...this.canvas.attributes };
  }
  beginPath() {
    this.path = new Path2D();
  }
  closePath() {
    this.path.closePath();
  }
  moveTo(x, y) {
    this.path.moveTo(...this.mapPoint(x, y));
  }
  lineTo(x, y) {
    this.path.lineTo(...this.mapPoint(x, y));
  }
  rect(x, y, w, h) {
    if (this.state.transform.isIdentity) {
      this.path.rect(x, y, w, h);
      return;
    }
    const p0 = this.mapPoint(x, y);
    const p1 = this.mapPoint(x + w, y);
    const p2 = this.mapPoint(x + w, y + h);
    const p3 = this.mapPoint(x, y + h);
    this.path.moveTo(p0[0], p0[1]);
    this.path.lineTo(p1[0], p1[1]);
    this.path.lineTo(p2[0], p2[1]);
    this.path.lineTo(p3[0], p3[1]);
    this.path.closePath();
  }
  roundRect(x, y, w, h, radii) {
    if (this.state.transform.isIdentity) {
      this.path.roundRect(x, y, w, h, radii);
      return;
    }
    const other = new Path2D();
    other.roundRect(x, y, w, h, radii);
    this.path.addPath(other, this.state.transform);
    this.path.current = this.path.subpathStart = this.mapPoint(x, y);
  }
  arc(x, y, r, start, end, ccw = false) {
    if (r < 0)
      throw indexSizeError("The radius provided is negative.");
    if (this.state.transform.isIdentity) {
      this.path.arc(x, y, r, start, end, ccw);
      return;
    }
    this.extendCurrent((path) => path.arc(x, y, r, start, end, ccw));
  }
  arcTo(x1, y1, x2, y2, r) {
    if (r < 0)
      throw indexSizeError("The radius provided is negative.");
    if (this.state.transform.isIdentity) {
      this.path.arcTo(x1, y1, x2, y2, r);
      return;
    }
    const transform = this.state.transform;
    const currentUser = this.path.current == null || !transform.isInvertible ? null : transform.invert().map(this.path.current[0], this.path.current[1]);
    this.extendCurrent((path) => {
      if (currentUser)
        path.moveTo(currentUser[0], currentUser[1]);
      path.arcTo(x1, y1, x2, y2, r);
    });
  }
  ellipse(x, y, rx, ry, rotation, start, end, ccw = false) {
    if (rx < 0 || ry < 0)
      throw indexSizeError("The radius provided is negative.");
    if (this.state.transform.isIdentity) {
      this.path.ellipse(x, y, rx, ry, rotation, start, end, ccw);
      return;
    }
    this.extendCurrent((path) => path.ellipse(x, y, rx, ry, rotation, start, end, ccw));
  }
  quadraticCurveTo(cpx, cpy, x, y) {
    const c = this.mapPoint(cpx, cpy);
    const p = this.mapPoint(x, y);
    this.path.quadraticCurveTo(c[0], c[1], p[0], p[1]);
  }
  bezierCurveTo(a, b, c, d, e, f) {
    const c1 = this.mapPoint(a, b);
    const c2 = this.mapPoint(c, d);
    const p = this.mapPoint(e, f);
    this.path.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], p[0], p[1]);
  }
  fill(path, rule) {
    const explicit = path instanceof Path2D;
    const [commands, fillRule] = pathAndRule(this.path, path, rule);
    this.aroundCurrentPath(explicit, () => {
      this.record(OP.fillPath, () => {
        this.buffer.path(commands);
        this.buffer.u32(fillRule === "evenodd" ? 1 : 0);
      });
    });
  }
  stroke(path) {
    const explicit = path instanceof Path2D;
    const commands = explicit ? path.commands : this.path.commands;
    this.aroundCurrentPath(explicit, () => {
      this.record(OP.strokePath, () => this.buffer.path(commands));
    });
  }
  clip(path, rule) {
    const explicit = path instanceof Path2D;
    const [commands, fillRule] = pathAndRule(this.path, path, rule);
    this.aroundCurrentPath(explicit, () => {
      this.record(OP.clipPath, () => {
        this.buffer.path(commands);
        this.buffer.u32(fillRule === "evenodd" ? 1 : 0);
      });
    });
  }
  fillRect(x, y, w, h) {
    this.syncLiveStyles();
    this.record(OP.fillRect, () => [x, y, w, h].forEach((n) => this.buffer.f64(n)));
  }
  strokeRect(x, y, w, h) {
    this.syncLiveStyles();
    this.record(OP.strokeRect, () => [x, y, w, h].forEach((n) => this.buffer.f64(n)));
  }
  clearRect(x, y, w, h) {
    this.record(OP.clearRect, () => [x, y, w, h].forEach((n) => this.buffer.f64(n)));
  }
  translate(x, y) {
    this.state.transform = this.state.transform.multiply(new Affine(1, 0, 0, 1, x, y));
    this.record(OP.translate, () => {
      this.buffer.f64(x);
      this.buffer.f64(y);
    });
  }
  rotate(angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    this.state.transform = this.state.transform.multiply(new Affine(cos, sin, -sin, cos, 0, 0));
    this.record(OP.rotate, () => this.buffer.f64(angle));
  }
  scale(x, y) {
    this.state.transform = this.state.transform.multiply(new Affine(x, 0, 0, y, 0, 0));
    this.record(OP.scale, () => {
      this.buffer.f64(x);
      this.buffer.f64(y);
    });
  }
  transform(a, b, c, d, e, f) {
    this.state.transform = this.state.transform.multiply(new Affine(a, b, c, d, e, f));
    this.record(OP.transform, () => [a, b, c, d, e, f].forEach((n) => this.buffer.f64(n)));
  }
  setTransform(a, b = 0, c = 0, d = 1, e = 0, f = 0) {
    const next = a instanceof Affine || a && typeof a === "object" && "a" in a ? new Affine(a.a, a.b, a.c, a.d, a.e, a.f) : new Affine(Number(a != null ? a : 1), b, c, d, e, f);
    this.state.transform = next;
    this.writeTransform(next);
  }
  resetTransform() {
    this.state.transform = new Affine();
    this.record(OP.resetTransform, () => {
    });
  }
  getTransform() {
    return this.state.transform.clone();
  }
  setLineDash(segments) {
    const values = [...segments].map(Number);
    if (values.some((n) => !Number.isFinite(n) || n < 0))
      return;
    if (values.length % 2 === 1)
      values.push(...values);
    this.state.lineDash = values;
    this.record(OP.setLineDash, () => {
      this.buffer.u32(values.length);
      values.forEach((n) => this.buffer.f64(n));
    });
  }
  getLineDash() {
    return this.state.lineDash.slice();
  }
  fillText(text, x, y) {
    this.syncLiveStyles();
    this.record(OP.fillText, () => {
      this.buffer.text(String(text));
      this.buffer.f64(x);
      this.buffer.f64(y);
    });
  }
  strokeText(text, x, y) {
    this.syncLiveStyles();
    this.record(OP.strokeText, () => {
      this.buffer.text(String(text));
      this.buffer.f64(x);
      this.buffer.f64(y);
    });
  }
  measureText(text) {
    this.canvas.flush();
    return this.call("measureText", surfaceOf(this.canvas), String(text));
  }
  drawImage(image, dx, dy, dw, dh, ...rest) {
    var _a3, _b, _c, _d;
    if (image instanceof ImageData && rest.length === 0 && dw == null) {
      this.putImageData(image, dx, dy);
      return;
    }
    const id = imageId(image, this.call, this.canvas);
    if (id == null)
      return;
    let sx = 0, sy = 0, sw = image.width, sh = image.height, x = dx, y = dy, w = dw != null ? dw : image.width, h = dh != null ? dh : image.height;
    if (rest.length >= 2) {
      sx = dx;
      sy = dy;
      sw = dw != null ? dw : sw;
      sh = dh != null ? dh : sh;
      x = (_a3 = rest[0]) != null ? _a3 : x;
      y = (_b = rest[1]) != null ? _b : y;
      w = (_c = rest[2]) != null ? _c : sw;
      h = (_d = rest[3]) != null ? _d : sh;
    }
    this.record(OP.drawImage, () => {
      this.buffer.u32(id);
      [sx, sy, sw, sh, x, y, w, h].forEach((n) => this.buffer.f64(n));
    });
  }
  createLinearGradient(x0, y0, x1, y1) {
    return new CanvasGradient("linear", [x0, y0, x1, y1], internalKey);
  }
  createRadialGradient(x0, y0, r0, x1, y1, r1) {
    if (r0 < 0 || r1 < 0)
      throw indexSizeError("The radius provided is negative.");
    return new CanvasGradient("radial", [x0, y0, r0, x1, y1, r1], internalKey);
  }
  createConicGradient(angle, x, y) {
    return new CanvasGradient("conic", [x, y, angle], internalKey);
  }
  createPattern(image, repeat) {
    const value = repeat == null || repeat === "" ? "repeat" : repeat;
    if (value !== "repeat" && value !== "repeat-x" && value !== "repeat-y" && value !== "no-repeat") {
      throw new TypeError("Invalid pattern repetition");
    }
    const id = patternImageId(image, this.call);
    if (id == null)
      return null;
    const pattern = new CanvasPattern(id, value, internalKey);
    registerPattern(pattern, id, this.call);
    return pattern;
  }
  createImageData(sw, sh) {
    return new ImageData(sw, sh);
  }
  putImageData(image, dx, dy) {
    this.record(OP.putImageData, () => {
      this.buffer.u32(image.width);
      this.buffer.u32(image.height);
      this.buffer.f64(dx);
      this.buffer.f64(dy);
      this.buffer.bytes(new Uint8Array(image.data.buffer, image.data.byteOffset, image.data.byteLength));
    });
  }
  getImageDataAsync(sx, sy, sw, sh) {
    return this.canvas.readPixels(sx, sy, sw, sh);
  }
  isPointInPath(pathOrX, xOrY, yOrRule, rule = "nonzero") {
    let commands = this.path.commands;
    let x;
    let y;
    let fillRule = rule;
    let explicit = false;
    if (typeof pathOrX === "object") {
      commands = pathOrX.commands;
      x = xOrY;
      y = Number(yOrRule);
      fillRule = typeof rule === "string" ? rule : "nonzero";
      explicit = true;
    } else {
      x = pathOrX;
      y = xOrY;
      fillRule = typeof yOrRule === "string" ? yOrRule : "nonzero";
    }
    if (explicit) {
      if (!this.state.transform.isInvertible)
        return false;
      const inverted = this.state.transform.invert().map(x, y);
      x = inverted[0];
      y = inverted[1];
    }
    const encoded = new CommandBuffer();
    encoded.used = 0;
    encoded.path(commands);
    return Boolean(this.call("isPointInPath", encoded.usedBytes(), x, y, fillRule));
  }
  resyncState() {
    const transform = this.state.transform;
    this.writeTransform(transform);
    this.writePaint(true);
    this.writePaint(false);
    this.record(OP.setGlobalAlpha, () => this.buffer.f64(this.state.alpha));
    this.record(OP.setComposite, () => this.buffer.text(this.state.composite));
    this.record(OP.setLineWidth, () => this.buffer.f64(this.state.lineWidth));
    this.record(OP.setLineCap, () => this.buffer.text(this.state.lineCap));
    this.record(OP.setLineJoin, () => this.buffer.text(this.state.lineJoin));
    this.record(OP.setMiterLimit, () => this.buffer.f64(this.state.miterLimit));
    this.record(OP.setLineDash, () => {
      this.buffer.u32(this.state.lineDash.length);
      this.state.lineDash.forEach((n) => this.buffer.f64(n));
    });
    this.record(OP.setLineDashOffset, () => this.buffer.f64(this.state.lineDashOffset));
    this.writeShadow();
    this.writeSmoothing();
    this.record(OP.setFilter, () => this.buffer.text(this.state.filter));
    this.record(OP.setFont, () => this.buffer.text(this.state.font));
    this.record(OP.setTextAlign, () => this.buffer.text(this.state.textAlign));
    this.record(OP.setTextBaseline, () => this.buffer.text(this.state.textBaseline));
    this.record(OP.setDirection, () => this.buffer.text(this.state.direction));
    this.record(OP.setLetterSpacing, () => {
      var _a3;
      return this.buffer.f64((_a3 = acceptedPxLength(this.state.letterSpacing)) != null ? _a3 : 0);
    });
    this.record(OP.setWordSpacing, () => {
      var _a3;
      return this.buffer.f64((_a3 = acceptedPxLength(this.state.wordSpacing)) != null ? _a3 : 0);
    });
  }
  mapPoint(x, y) {
    return this.state.transform.map(x, y);
  }
  extendCurrent(build) {
    const child = new Path2D();
    build(child);
    this.path.extendPath(child, this.state.transform);
  }
  aroundCurrentPath(explicit, write) {
    this.syncLiveStyles();
    if (explicit || this.state.transform.isIdentity) {
      write();
      return;
    }
    const current = this.state.transform;
    this.writeTransform(new Affine());
    write();
    this.writeTransform(current);
  }
  writeTransform(transform) {
    this.record(OP.setTransform, () => [
      transform.a,
      transform.b,
      transform.c,
      transform.d,
      transform.e,
      transform.f
    ].forEach((n) => this.buffer.f64(n)));
  }
  syncLiveStyles() {
    this.syncStyle(true);
    this.syncStyle(false);
  }
  syncStyle(fill) {
    const value = fill ? this.state.fill : this.state.stroke;
    if (typeof value === "string")
      return;
    const last = fill ? this.fillVersion : this.strokeVersion;
    if (value.version === last)
      return;
    this.writeStyle(fill, value);
    if (fill)
      this.fillVersion = value.version;
    else
      this.strokeVersion = value.version;
  }
  writeShadow() {
    var _a3;
    const color = (_a3 = parseColor(this.state.shadowColor)) != null ? _a3 : [0, 0, 0, 0];
    this.record(OP.setShadow, () => {
      color.forEach((n) => this.buffer.f64(n));
      this.buffer.f64(this.state.shadowBlur);
      this.buffer.f64(this.state.shadowOffsetX);
      this.buffer.f64(this.state.shadowOffsetY);
    });
  }
  writeStyle(fill, value) {
    if (value instanceof CanvasGradient) {
      const opcode = value.kind === "linear" ? fill ? OP.setFillLinear : OP.setStrokeLinear : value.kind === "radial" ? fill ? OP.setFillRadial : OP.setStrokeRadial : fill ? OP.setFillConic : OP.setStrokeConic;
      this.record(opcode, () => {
        value.values.forEach((n) => this.buffer.f64(n));
        this.buffer.u32(value.stops.length);
        for (const stop of value.stops) {
          this.buffer.f64(stop.offset);
          stop.color.forEach((n) => this.buffer.f64(n));
        }
      });
      return;
    }
    this.record(fill ? OP.setFillPattern : OP.setStrokePattern, () => {
      this.buffer.u32(value.image);
      this.buffer.text(value.repeat);
      const t = value.transform;
      [t.a, t.b, t.c, t.d, t.e, t.f].forEach((n) => this.buffer.f64(n));
    });
  }
  writePaint(fill) {
    const value = fill ? this.state.fill : this.state.stroke;
    if (typeof value === "string") {
      const color = parseColor(value);
      if (!color)
        return;
      this.record(fill ? OP.setFillColor : OP.setStrokeColor, () => color.forEach((n) => this.buffer.f64(n)));
      return;
    }
    this.writeStyle(fill, value);
    if (fill)
      this.fillVersion = value.version;
    else
      this.strokeVersion = value.version;
  }
  writeSmoothing() {
    const quality = this.state.smoothingQuality === "high" ? 2 : this.state.smoothingQuality === "medium" ? 1 : 0;
    this.record(OP.setSmoothing, () => {
      this.buffer.u32(this.state.smoothing ? 1 : 0);
      this.buffer.u32(quality);
    });
  }
  record(opcode, write) {
    this.buffer.record(opcode, write);
    this.dirty();
  }
};
var _a;
_a = surfaceKey;
var OffscreenCanvas = class {
  constructor(width, height, call) {
    __publicField(this, _a);
    __publicField(this, "call");
    __publicField(this, "buffer", new CommandBuffer());
    __publicField(this, "context", null);
    __publicField(this, "queued", false);
    __publicField(this, "borrowed", []);
    __publicField(this, "generation", 0);
    __publicField(this, "sequence", 0);
    __publicField(this, "attributes", {
      alpha: true,
      desynchronized: false,
      willReadFrequently: false,
      colorSpace: "srgb"
    });
    this.call = call;
    this[surfaceKey] = call("create", width | 0, height | 0);
    trackSurface(call, this, this[surfaceKey]);
  }
  get width() {
    return this[surfaceKey].width;
  }
  set width(value) {
    this.resize(value | 0, this.height);
  }
  get height() {
    return this[surfaceKey].height;
  }
  set height(value) {
    this.resize(this.width, value | 0);
  }
  getContext(type, options) {
    if (type !== "2d")
      return null;
    if (this.context)
      return this.context;
    if ((options == null ? void 0 : options.colorSpace) && options.colorSpace !== "srgb")
      return null;
    this.attributes = {
      alpha: (options == null ? void 0 : options.alpha) !== false,
      desynchronized: Boolean(options == null ? void 0 : options.desynchronized),
      willReadFrequently: Boolean(options == null ? void 0 : options.willReadFrequently),
      colorSpace: "srgb"
    };
    if ((options == null ? void 0 : options.alpha) === false)
      this.call("setAlpha", this[surfaceKey], 0);
    this.context = new OffscreenCanvasRenderingContext2D(this, this.call, this.buffer, () => this.mark(), internalKey);
    return this.context;
  }
  borrowImage(id) {
    if (id > 0)
      this.borrowed.push(id);
  }
  flush() {
    var _a3;
    this.queued = false;
    sweepHidden(this.call);
    try {
      if (this.buffer.used <= 24)
        return;
      const bytes = this.buffer.header(this.generation, this.sequence++);
      try {
        this.call("commit", this[surfaceKey], bytes);
        this.buffer.reset();
      } catch (error) {
        this.buffer.reset();
        (_a3 = this.context) == null ? void 0 : _a3.resyncState();
        throw error;
      }
    } finally {
      this.releaseBorrowed();
    }
  }
  releaseBorrowed() {
    for (const id of this.borrowed)
      this.call("closeImage", id);
    this.borrowed.length = 0;
  }
  mark() {
    if (this.queued)
      return;
    this.queued = true;
    const enqueue = globalThis.queueMicrotask;
    if (enqueue)
      enqueue(() => this.flush());
    else
      void Promise.resolve().then(() => this.flush());
  }
  resize(width, height) {
    var _a3;
    this.flush();
    this.call("resize", this[surfaceKey], width, height);
    this.generation++;
    this.sequence = 0;
    (_a3 = this.context) == null ? void 0 : _a3.reset();
    this.buffer.reset();
  }
  convertToBlob(options) {
    var _a3;
    this.flush();
    const type = (_a3 = options == null ? void 0 : options.type) != null ? _a3 : "image/png";
    const BlobCtor = globalThis.Blob;
    if (BlobCtor == null)
      throw new TypeError("Blob is required");
    return rpc(this.call, "convertToBlob", this[surfaceKey], type).then((bytes) => new BlobCtor([bytes], { type }));
  }
  transferToImageBitmap() {
    var _a3;
    this.flush();
    const id = this.call("transferToImageBitmap", this[surfaceKey]);
    const width = this.width;
    const height = this.height;
    (_a3 = this.context) == null ? void 0 : _a3.reset();
    return new ImageBitmap(id, width, height, this.call, internalKey);
  }
  readPixels(sx, sy, sw, sh) {
    this.flush();
    return rpc(this.call, "getImageData", this[surfaceKey], sx, sy, sw, sh).then((bytes) => new ImageData(new Uint8ClampedArray(bytes), sw, sh));
  }
};
var rpcId = 1;
var rpcs = /* @__PURE__ */ new Map();
function rpc(call, operation, ...args) {
  const id = rpcId++;
  return new Promise((resolve, reject) => {
    rpcs.set(id, { resolve, reject });
    try {
      call(operation, id, ...args);
    } catch (error) {
      rpcs.delete(id);
      reject(error);
    }
  });
}
function pathAndRule(current, path, rule) {
  if (typeof path === "string")
    return [current.commands, path];
  if (path instanceof Path2D)
    return [path.commands, rule != null ? rule : "nonzero"];
  return [current.commands, rule != null ? rule : "nonzero"];
}
var _a2;
_a2 = imageIdKey;
var ImageBitmap = class {
  constructor(id, width, height, call, token) {
    __publicField(this, _a2);
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "call");
    __publicField(this, "release");
    if (token !== internalKey || id == null || width == null || height == null || call == null) {
      illegalConstructor();
    }
    this[imageIdKey] = id;
    this.width = width;
    this.height = height;
    this.call = call;
    this.release = trackImageRelease(call, this, id);
  }
  close() {
    if (this[imageIdKey] < 0)
      return;
    this[imageIdKey] = -1;
    releaseImage(this.release);
  }
};
function closedId(id) {
  return id < 0;
}
function readImageId(image) {
  if (image instanceof ImageBitmap)
    return image[imageIdKey];
  const id = image[imageIdKey];
  return typeof id === "number" ? id : null;
}
function imageId(image, call, borrow) {
  if (image instanceof OffscreenCanvas) {
    image.flush();
    const id2 = call("snapshotImageSync", surfaceOf(image));
    borrow == null ? void 0 : borrow.borrowImage(id2);
    return id2;
  }
  const id = readImageId(image);
  if (id == null)
    return null;
  if (closedId(id))
    throw invalidState("The ImageBitmap is closed.");
  call("retainImage", id);
  borrow == null ? void 0 : borrow.borrowImage(id);
  return id;
}
function patternImageId(image, call) {
  if (image instanceof OffscreenCanvas) {
    image.flush();
    return call("snapshotImageSync", surfaceOf(image));
  }
  const id = readImageId(image);
  if (id == null)
    return null;
  if (closedId(id))
    throw invalidState("The ImageBitmap is closed.");
  call("retainImage", id);
  return id;
}
var hiddenResources = /* @__PURE__ */ new WeakMap();
function hiddenFor(call) {
  let hidden = hiddenResources.get(call);
  if (!hidden) {
    hidden = [];
    hiddenResources.set(call, hidden);
  }
  return hidden;
}
function weakRef(target) {
  const Ctor = globalThis.WeakRef;
  if (typeof Ctor !== "function")
    return null;
  return new Ctor(target);
}
function sweepHidden(call) {
  const hidden = hiddenResources.get(call);
  if (!hidden)
    return;
  const dead = [];
  for (let i = hidden.length - 1; i >= 0; i--) {
    const item = hidden[i];
    if (item == null || item.ref.deref() != null)
      continue;
    hidden.splice(i, 1);
    dead.push(item);
  }
  for (const item of dead) {
    try {
      if (item.kind === "surface")
        call("disposeSurface", item.surface);
      else
        releaseImage(item.token);
    } catch {
    }
  }
}
function trackSurface(call, canvas, surface) {
  const ref = weakRef(canvas);
  if (ref == null)
    return;
  hiddenFor(call).push({ kind: "surface", ref, surface });
}
function trackImageRelease(call, owner, id) {
  const token = { id, released: false, call };
  const ref = weakRef(owner);
  if (ref != null)
    hiddenFor(call).push({ kind: "image", ref, token });
  return token;
}
function releaseImage(token) {
  if (token.released)
    return;
  token.released = true;
  try {
    token.call("closeImage", token.id);
  } catch {
  }
}
function registerPattern(pattern, id, call) {
  trackImageRelease(call, pattern, id);
}

// ../../js/dist/index.js
function CanvasView2(canvas, options) {
  const view = CanvasView(surfaceOf(canvas), options);
  holdCanvas(view, canvas);
  return view;
}

});
