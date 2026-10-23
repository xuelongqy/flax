import { parseColor, type Rgba } from './color.js';
import { cssLength } from './font.js';

export type FilterStep = { kind: number; values: number[] };

export function parseFilter(value: string, fontSize = 10): FilterStep[] | null {
  const text = value.trim();
  if (text === 'none') return [];
  if (!text) return null;
  const functions = text.match(/[a-z-]+\((?:[^()]|\([^()]*\))*\)/gi);
  if (!functions || functions.join('').replace(/\s/g, '') !== text.replace(/\s/g, ''))
    return null;
  if (functions.length > 256) return null;
  const steps: FilterStep[] = [];
  for (const fn of functions) {
    const name = fn.slice(0, fn.indexOf('(')).toLowerCase();
    const argument = fn.slice(fn.indexOf('(') + 1, -1).trim();
    if (name === 'drop-shadow') {
      const tokens = argument.match(/(?:rgba?|hsla?)\([^()]*\)|[^\s]+/gi) ?? [];
      let color: Rgba | null = null;
      const lengths: number[] = [];
      for (const token of tokens) {
        const length = /(?:ex|ch|ic)$/i.test(token) ? null : cssLength(token, fontSize);
        if (length) lengths.push(length.px);
        else {
          if (color !== null) return null;
          color = parseColor(token);
          if (color === null) return null;
        }
      }
      if (lengths.length < 2 || lengths.length > 3 || (lengths[2] ?? 0) < 0)
        return null;
      steps.push({
        kind: 2,
        values: [lengths[0]!, lengths[1]!, lengths[2] ?? 0, ...(color ?? [0, 0, 0, 1])],
      });
      continue;
    }
    if (name === 'blur') {
      const radius = /(?:ex|ch|ic)$/i.test(argument)
        ? null
        : cssLength(argument || '0px', fontSize);
      if (!radius || radius.px < 0) return null;
      steps.push({ kind: 1, values: [radius.px] });
      continue;
    }
    let amount: number;
    if (name === 'hue-rotate') {
      const angle =
        /^([+-]?(?:\d*\.\d+|\d+\.?\d*)(?:e[+-]?\d+)?)(deg|grad|rad|turn)?$/i.exec(
          argument || '0',
        );
      if (!angle || (!angle[2] && Number(angle[1]) !== 0)) return null;
      const factors: Record<string, number> = {
        deg: Math.PI / 180,
        grad: Math.PI / 200,
        rad: 1,
        turn: Math.PI * 2,
      };
      amount = Number(angle[1]) * factors[angle[2]?.toLowerCase() ?? 'rad']!;
    } else {
      if (
        !/^(?:brightness|contrast|grayscale|invert|opacity|saturate|sepia)$/.test(name)
      )
        return null;
      if (argument && !/^[+]?(?:\d*\.\d+|\d+\.?\d*)(?:e[+-]?\d+)?%?$/i.test(argument))
        return null;
      amount = argument ? parseFloat(argument) / (argument.endsWith('%') ? 100 : 1) : 1;
      if (!['brightness', 'contrast', 'saturate'].includes(name))
        amount = Math.min(1, amount);
    }
    if (!Number.isFinite(amount) || Math.abs(amount) > 1e10) return null;
    const n = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
    if (name === 'brightness') n[0] = n[6] = n[12] = amount;
    else if (name === 'contrast') {
      n[0] = n[6] = n[12] = amount;
      n[4] = n[9] = n[14] = 0.5 * (1 - amount);
    } else if (name === 'opacity') n[18] = amount;
    else if (name === 'invert') {
      n[0] = n[6] = n[12] = 1 - 2 * amount;
      n[4] = n[9] = n[14] = amount;
    } else if (name === 'grayscale' || name === 'saturate') {
      const t = name === 'grayscale' ? 1 - amount : amount;
      for (let row = 0; row < 3; row++)
        for (let col = 0; col < 3; col++)
          n[row * 5 + col] =
            [0.2126, 0.7152, 0.0722][col]! * (1 - t) + (row === col ? t : 0);
    } else if (name === 'sepia') {
      const m = [0.393, 0.769, 0.189, 0.349, 0.686, 0.168, 0.272, 0.534, 0.131];
      for (let row = 0; row < 3; row++)
        for (let col = 0; col < 3; col++)
          n[row * 5 + col] =
            m[row * 3 + col]! * amount + (row === col ? 1 - amount : 0);
    } else if (name === 'hue-rotate') {
      const c = Math.cos(amount),
        s = Math.sin(amount);
      n.splice(
        0,
        15,
        0.213 + c * 0.787 - s * 0.213,
        0.715 - c * 0.715 - s * 0.715,
        0.072 - c * 0.072 + s * 0.928,
        0,
        0,
        0.213 - c * 0.213 + s * 0.143,
        0.715 + c * 0.285 + s * 0.14,
        0.072 - c * 0.072 - s * 0.283,
        0,
        0,
        0.213 - c * 0.213 - s * 0.787,
        0.715 - c * 0.715 + s * 0.715,
        0.072 + c * 0.928 + s * 0.072,
        0,
        0,
      );
    }
    steps.push({ kind: 0, values: n });
  }
  return steps;
}

export function acceptedFilter(value: string): string | null {
  return parseFilter(value) === null ? null : value.trim();
}
