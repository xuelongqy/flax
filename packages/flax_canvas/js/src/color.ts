// Named colors: https://www.w3.org/TR/css-color-4/#named-colors
const named: Record<string, string> = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};

export type Rgba = [number, number, number, number];
// OffscreenCanvas has no CSS color-scheme; these use its default light palette.
const system: Record<string, string> = {
  accentcolor: '#0078d4',
  accentcolortext: '#ffffff',
  activetext: '#ff0000',
  buttonborder: '#767676',
  buttonface: '#efefef',
  buttontext: '#000000',
  canvas: '#ffffff',
  canvastext: '#000000',
  field: '#ffffff',
  fieldtext: '#000000',
  graytext: '#6d6d6d',
  highlight: '#0078d7',
  highlighttext: '#ffffff',
  linktext: '#0000ff',
  mark: '#ffff00',
  marktext: '#000000',
  selecteditem: '#0078d7',
  selecteditemtext: '#ffffff',
  visitedtext: '#800080',
  activeborder: '#b4b4b4',
  activecaption: '#99b4d1',
  appworkspace: '#ababab',
  background: '#000000',
  buttonhighlight: '#ffffff',
  buttonshadow: '#a0a0a0',
  captiontext: '#000000',
  inactiveborder: '#f4f7fc',
  inactivecaption: '#bfcddb',
  inactivecaptiontext: '#434e54',
  infobackground: '#ffffe1',
  infotext: '#000000',
  menu: '#f0f0f0',
  menutext: '#000000',
  scrollbar: '#c8c8c8',
  threeddarkshadow: '#404040',
  threedface: '#efefef',
  threedhighlight: '#ffffff',
  threedlightshadow: '#e3e3e3',
  threedshadow: '#a0a0a0',
  window: '#ffffff',
  windowframe: '#646464',
  windowtext: '#000000',
};
const numeric = /^([+-]?(?:\d*\.\d+|\d+)(?:e[+-]?\d+)?)(%|deg|grad|rad|turn)?$/i;
const clamp = (value: number) => Math.min(1, Math.max(0, value));

function component(value: string, scale: number, missing: boolean): number | null {
  if (missing && value === 'none') return 0;
  const match = numeric.exec(value);
  if (!match || (match[2] && match[2] !== '%')) return null;
  const result = Number(match[1]) / (match[2] === '%' ? 100 : scale);
  return Math.max(-Number.MAX_VALUE, Math.min(Number.MAX_VALUE, result));
}

function hue(value: string, missing: boolean): number | null {
  if (missing && value === 'none') return 0;
  const match = numeric.exec(value);
  if (!match || match[2] === '%') return null;
  const factors: Record<string, number> = {
    deg: 1,
    grad: 0.9,
    rad: 180 / Math.PI,
    turn: 360,
  };
  const result = Number(match[1]) * (factors[match[2] ?? 'deg'] ?? NaN);
  return Number.isFinite(result) ? ((result % 360) + 360) % 360 : null;
}

function hsl(h: number, s: number, l: number): [number, number, number] {
  const a = s * Math.min(l, 1 - l);
  const channel = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };
  return [channel(0), channel(8), channel(4)];
}

export function parseColor(input: string): Rgba | null {
  const value = input
    .toLowerCase()
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .trim();
  if (value === 'transparent') return [0, 0, 0, 0];
  // OffscreenCanvas has no element from which currentColor can inherit.
  if (value === 'currentcolor') return [0, 0, 0, 1];
  const hex = /^#([0-9a-f]{3,8})$/.exec(named[value] ?? system[value] ?? value)?.[1];
  if (hex && [3, 4, 6, 8].includes(hex.length)) {
    const expanded = hex.length < 5 ? [...hex].map((c) => c + c).join('') : hex;
    return [
      parseInt(expanded.slice(0, 2), 16) / 255,
      parseInt(expanded.slice(2, 4), 16) / 255,
      parseInt(expanded.slice(4, 6), 16) / 255,
      expanded.length === 8 ? parseInt(expanded.slice(6), 16) / 255 : 1,
    ];
  }
  // CSS syntax closes an unfinished function at EOF, but extra tokens remain invalid.
  const fn = /^(rgb|rgba|hsl|hsla|hwb)\(([^()]*)\)?$/.exec(value);
  if (!fn) return null;
  const legacy = fn[2]!.includes(',');
  let parts: string[], alpha: string | undefined;
  if (legacy) {
    if (fn[1] === 'hwb' || fn[2]!.includes('/')) return null;
    parts = fn[2]!.split(',').map((p) => p.trim());
    if (parts.length === 4) alpha = parts.pop();
  } else {
    const slash = fn[2]!.split('/');
    if (slash.length > 2) return null;
    parts = slash[0]!.trim().split(/\s+/);
    alpha = slash[1]?.trim();
  }
  if (parts.length !== 3 || parts.some((p) => p === '') || alpha === '') return null;
  const a = alpha === undefined ? 1 : component(alpha, 1, !legacy);
  if (a === null) return null;
  if (fn[1]!.startsWith('rgb')) {
    if (legacy && parts.some((p) => p.endsWith('%') !== parts[0]!.endsWith('%')))
      return null;
    const values = parts.map((p) => component(p, 255, !legacy));
    if (values.some((v) => v === null)) return null;
    return [...values.map((v) => clamp(v!)), clamp(a)] as Rgba;
  }
  if (legacy && parts.slice(1).some((p) => !p.endsWith('%'))) return null;
  const h = hue(parts[0]!, !legacy);
  const s = component(parts[1]!, 100, !legacy);
  const l = component(parts[2]!, 100, !legacy);
  if (h === null || s === null || l === null) return null;
  if (fn[1] === 'hwb') {
    const white = Math.max(0, s),
      black = Math.max(0, l),
      scale = Math.max(white, black, 1),
      gray = white / scale / (white / scale + black / scale);
    const rgb =
      white + black >= 1
        ? [gray, gray, gray]
        : hsl(h, 1, 0.5).map((c) => c * (1 - white - black) + white);
    return [...rgb, clamp(a)] as Rgba;
  }
  return [...hsl(h, clamp(s), clamp(l)), clamp(a)];
}

export function serializeColor(color: Rgba): string {
  const rgb = color.slice(0, 3).map((c) => Math.round(clamp(c) * 255));
  if (color[3] === 1)
    return '#' + rgb.map((c) => c.toString(16).padStart(2, '0')).join('');
  return `rgba(${rgb.join(', ')}, ${Number(color[3].toFixed(3))})`;
}
