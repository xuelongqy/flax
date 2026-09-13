const named: Record<string, string> = {
  black: '#000000',
  silver: '#c0c0c0',
  gray: '#808080',
  white: '#ffffff',
  maroon: '#800000',
  red: '#ff0000',
  purple: '#800080',
  fuchsia: '#ff00ff',
  green: '#008000',
  lime: '#00ff00',
  olive: '#808000',
  yellow: '#ffff00',
  navy: '#000080',
  blue: '#0000ff',
  teal: '#008080',
  aqua: '#00ffff',
  orange: '#ffa500',
  transparent: '#00000000',
};

export type Rgba = [number, number, number, number];

export function parseColor(input: string): Rgba | null {
  const value = input.trim().toLowerCase();
  if (value === 'transparent') return [0, 0, 0, 0];
  const mapped = named[value] ?? value;
  const hex = /^#([0-9a-f]{3,8})$/.exec(mapped);
  const digits = hex?.[1];
  if (digits) {
    if (digits.length === 3 || digits.length === 4) {
      const r = parseInt(digits[0]! + digits[0]!, 16) / 255;
      const g = parseInt(digits[1]! + digits[1]!, 16) / 255;
      const b = parseInt(digits[2]! + digits[2]!, 16) / 255;
      const a = digits.length === 4 ? parseInt(digits[3]! + digits[3]!, 16) / 255 : 1;
      return [r, g, b, a];
    }
    if (digits.length === 6 || digits.length === 8) {
      return [
        parseInt(digits.slice(0, 2), 16) / 255,
        parseInt(digits.slice(2, 4), 16) / 255,
        parseInt(digits.slice(4, 6), 16) / 255,
        digits.length === 8 ? parseInt(digits.slice(6, 8), 16) / 255 : 1,
      ];
    }
  }
  const rgb = /^rgba?\(([^)]+)\)$/.exec(value);
  const rgbParts = rgb?.[1]?.split(',').map((part) => part.trim());
  if (rgbParts && rgbParts.length >= 3) {
    const n = (part: string, scaled: boolean): number | null => {
      const number = part.endsWith('%') ? parseFloat(part) / 100 : parseFloat(part);
      if (!Number.isFinite(number)) return null;
      return scaled && !part.endsWith('%')
        ? Math.min(1, Math.max(0, number / 255))
        : Math.min(1, Math.max(0, number));
    };
    const r = n(rgbParts[0]!, true);
    const g = n(rgbParts[1]!, true);
    const b = n(rgbParts[2]!, true);
    const a = rgbParts[3] ? n(rgbParts[3], false) : 1;
    if (r == null || g == null || b == null || a == null) return null;
    return [r, g, b, a];
  }
  const hsl = /^hsla?\(([^)]+)\)$/.exec(value);
  const hslParts = hsl?.[1]?.split(',').map((part) => part.trim());
  if (hslParts && hslParts.length >= 3) {
    const h = parseFloat(hslParts[0]!);
    const s = parseFloat(hslParts[1]!) / 100;
    const l = parseFloat(hslParts[2]!) / 100;
    const a = hslParts[3] ? parseFloat(hslParts[3]) : 1;
    if (![h, s, l, a].every(Number.isFinite)) return null;
    return hsla(h, s, l, a);
  }
  return null;
}

function hsla(h: number, s: number, l: number, a: number): Rgba {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = (((h % 360) + 360) % 360) / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r = 0,
    g = 0,
    b = 0;
  if (hp < 1) [r, g] = [c, x];
  else if (hp < 2) [r, g] = [x, c];
  else if (hp < 3) [g, b] = [c, x];
  else if (hp < 4) [g, b] = [x, c];
  else if (hp < 5) [r, b] = [x, c];
  else [r, b] = [c, x];
  const m = l - c / 2;
  return [r + m, g + m, b + m, a];
}
