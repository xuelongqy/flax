const number = '[+-]?(?:\\d*\\.\\d+|\\d+)(?:e[+-]?\\d+)?';
const length = new RegExp(`^(${number})(px|pt|pc|in|cm|mm|q|em|rem|ex|ch|ic|%)$`, 'i');

export function cssLength(
  value: string,
  size = 10,
  percentage = false,
): { css: string; px: number } | null {
  const match = length.exec(value.trim());
  if (!match) return value.trim() === '0' ? { css: '0px', px: 0 } : null;
  const amount = Number(match[1]),
    unit = match[2]!.toLowerCase();
  const factors: Record<string, number> = {
    px: 1,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    q: 96 / 101.6,
    em: size,
    rem: 16,
    // The API 3 decoder resolves these from the selected font; px is the legacy slot.
    ex: 0,
    ch: 0,
    ic: 0,
    '%': size / 100,
  };
  if (!Number.isFinite(amount) || Math.abs(amount) > 3.4028234663852886e38) return null;
  const px = amount * factors[unit]!;
  if (
    (!percentage && unit === '%') ||
    !Number.isFinite(px) ||
    Math.abs(px) > 3.4028234663852886e38
  )
    return null;
  return { css: `${amount}${unit}`, px };
}

export type FontDefaults = readonly [number, number, number, string];

type Token = {
  kind: 'word' | 'string' | 'numeric' | 'symbol' | 'function';
  text: string;
  value?: number;
  unit?: string;
  space: boolean;
};

function tokens(source: string): Token[] | null {
  const result: Token[] = [];
  let at = 0,
    space = false;
  const nameStart = (c: string) => /[_a-zA-Z\u0080-\uffff]/.test(c);
  const escape = (): string | null => {
    ++at;
    if (at === source.length || /[\n\r\f]/.test(source[at]!)) return null;
    const hex = /^[\da-f]{1,6}/i.exec(source.slice(at));
    if (!hex) return source[at++]!;
    at += hex[0].length;
    if (source[at] === '\r' && source[at + 1] === '\n') ++at;
    if (/[\t\n\r\f ]/.test(source[at] ?? '')) ++at;
    const code = parseInt(hex[0], 16);
    return String.fromCodePoint(
      code === 0 || code > 0x10ffff || (code >= 0xd800 && code <= 0xdfff)
        ? 0xfffd
        : code,
    );
  };
  const name = (): string | null => {
    let value = '';
    while (at < source.length) {
      const c = source[at]!;
      if (c === '\\') {
        const decoded = escape();
        if (decoded === null) return null;
        value += decoded;
      } else if (nameStart(c) || /[\d-]/.test(c)) {
        value += c;
        ++at;
      } else break;
    }
    return value;
  };
  while (at < source.length) {
    const c = source[at]!;
    if (/[\t\n\r\f ]/.test(c)) {
      space = true;
      ++at;
      continue;
    }
    if (source.startsWith('/*', at)) {
      const end = source.indexOf('*/', at + 2);
      at = end < 0 ? source.length : end + 2;
      continue;
    }
    let token: Token;
    if (c === '"' || c === "'") {
      ++at;
      let text = '';
      while (at < source.length && source[at] !== c) {
        if (/[\n\r\f]/.test(source[at]!)) return null;
        if (source[at] === '\\') {
          if (/[\n\r\f]/.test(source[at + 1] ?? '')) {
            ++at;
            if (source[at] === '\r' && source[at + 1] === '\n') ++at;
            ++at;
          } else {
            const decoded = escape();
            if (decoded === null) return null;
            text += decoded;
          }
        } else text += source[at++]!;
      }
      if (at < source.length) ++at; // CSS closes strings at EOF.
      token = { kind: 'string', text, space };
    } else {
      const numeric = new RegExp('^' + number, 'i').exec(source.slice(at));
      if (numeric) {
        at += numeric[0].length;
        let unit = '';
        if (source[at] === '%') {
          unit = '%';
          ++at;
        } else if (
          source[at] === '\\' ||
          nameStart(source[at] ?? '') ||
          source[at] === '-'
        ) {
          const parsed = name();
          if (parsed === null) return null;
          unit = parsed.toLowerCase();
        }
        token = {
          kind: 'numeric',
          text: numeric[0],
          value: Number(numeric[0]),
          unit,
          space,
        };
      } else if (
        c === '\\' ||
        nameStart(c) ||
        (c === '-' &&
          (source[at + 1] === '-' ||
            source[at + 1] === '\\' ||
            nameStart(source[at + 1] ?? '')))
      ) {
        const text = name();
        if (text === null) return null;
        const func = source[at] === '(';
        if (func) ++at;
        token = { kind: func ? 'function' : 'word', text, space };
      } else {
        ++at;
        token = { kind: 'symbol', text: c, space };
      }
    }
    result.push(token);
    space = false;
  }
  return result;
}

type Quantity = { value: number; kind: 'number' | 'length' | 'angle' };
const sizeKeywords: Record<string, number> = {
  'xx-small': 9,
  'x-small': 10,
  small: 13,
  medium: 16,
  large: 18,
  'x-large': 24,
  'xx-large': 32,
  'xxx-large': 48,
  smaller: 10 / 1.2,
  larger: 12,
};
const widths = new Set([
  'ultra-condensed',
  'extra-condensed',
  'condensed',
  'semi-condensed',
  'semi-expanded',
  'expanded',
  'extra-expanded',
  'ultra-expanded',
]);
const generic =
  /^(?:serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-serif|ui-sans-serif|ui-monospace|ui-rounded|math|fangsong)$/i;
const reserved = /^(?:initial|inherit|unset|revert|revert-layer|default)$/i;
const quoteFamily = (value: string) =>
  '"' +
  value.replace(/["\\\x00-\x1f\x7f]/g, (c) =>
    c === '"' || c === '\\' ? '\\' + c : '\\' + c.charCodeAt(0).toString(16) + ' ',
  ) +
  '"';

export function canvasFont(
  value: string,
  defaults?: () => FontDefaults,
): string | null {
  const input = tokens(value.replace(/[\0\ud800-\udfff]/gu, '\ufffd'));
  if (!input?.length) return null;
  let at = 0,
    metrics: FontDefaults | undefined;
  if (
    input.length === 1 &&
    input[0]!.kind === 'word' &&
    /^(caption|icon|menu|message-box|small-caption|status-bar)$/i.test(input[0]!.text)
  ) {
    if (!defaults) return null;
    return '14px ' + quoteFamily(defaults()[3] || 'sans-serif');
  }
  const atom = (depth: number, relativeSize: number): Quantity | null => {
    if (depth > 32) return null;
    const token = input[at++];
    if (!token) return null;
    if (token.kind === 'numeric') {
      const n = token.value!,
        unit = token.unit!;
      if (!Number.isFinite(n)) return null;
      if (!unit) return { value: n, kind: 'number' };
      const angles: Record<string, number> = {
        deg: 1,
        grad: 0.9,
        rad: 180 / Math.PI,
        turn: 360,
      };
      if (angles[unit] !== undefined)
        return { value: n * angles[unit]!, kind: 'angle' };
      if (/^(ex|ch|ic)$/.test(unit)) {
        if (!defaults) return null;
        metrics ??= defaults();
        return {
          value:
            (n * metrics[unit === 'ex' ? 0 : unit === 'ch' ? 1 : 2] * relativeSize) /
            10,
          kind: 'length',
        };
      }
      const length = cssLength(n + unit, relativeSize, true);
      return length && { value: length.px, kind: 'length' };
    }
    const func =
      token.kind === 'function'
        ? token.text.toLowerCase()
        : token.text === '('
          ? 'calc'
          : '';
    if (!['calc', 'min', 'max', 'clamp'].includes(func)) return null;
    const args: Quantity[] = [];
    do {
      const arg = sum(depth + 1, relativeSize);
      if (!arg) return null;
      args.push(arg);
      if (input[at]?.text !== ',') break;
      ++at;
    } while (true);
    if (input[at++]?.text !== ')' || args.some((v) => v.kind !== args[0]!.kind))
      return null;
    const numbers = args.map((v) => v.value);
    let result: number;
    if (func === 'calc') {
      if (args.length !== 1) return null;
      result = numbers[0]!;
    } else if (func === 'clamp') {
      if (args.length !== 3) return null;
      result = Math.max(numbers[0]!, Math.min(numbers[1]!, numbers[2]!));
    } else result = func === 'min' ? Math.min(...numbers) : Math.max(...numbers);
    return { value: result, kind: args[0]!.kind };
  };
  const product = (depth: number, size: number): Quantity | null => {
    let left = atom(depth, size);
    while (left && ['*', '/'].includes(input[at]?.text ?? '')) {
      const op = input[at++]!.text,
        right = atom(depth, size);
      if (
        !right ||
        (op === '*' && left.kind !== 'number' && right.kind !== 'number') ||
        (op === '/' && right.kind !== 'number')
      )
        return null;
      left = {
        value: op === '*' ? left.value * right.value : left.value / right.value,
        kind: op === '*' && left.kind === 'number' ? right.kind : left.kind,
      };
    }
    return left;
  };
  const sum = (depth: number, size: number): Quantity | null => {
    let left = product(depth, size);
    while (left && ['+', '-'].includes(input[at]?.text ?? '')) {
      const token = input[at++]!;
      if (!token.space || !input[at]?.space) return null;
      const right = product(depth, size);
      if (!right || left.kind !== right.kind) return null;
      left = {
        value: left.value + (token.text === '+' ? right.value : -right.value),
        kind: left.kind,
      };
    }
    return left;
  };
  let style = '',
    variant = '',
    weight = '',
    width = '',
    prefixes = 0,
    size: number | undefined;
  while (at < input.length) {
    const token = input[at]!,
      word = token.kind === 'word' ? token.text.toLowerCase() : '';
    const keyword = sizeKeywords[word];
    if (keyword !== undefined) {
      size = keyword;
      ++at;
      break;
    }
    if (token.kind === 'numeric' && !token.unit && token.value === 0) {
      size = 0;
      ++at;
      break;
    }
    if ((token.kind === 'numeric' && token.unit) || token.kind === 'function') {
      const start = at,
        parsed = atom(0, 10);
      if (parsed?.kind === 'length') {
        if (parsed.value < 0 && token.kind !== 'function') return null;
        size = Math.max(0, parsed.value);
        break;
      }
      at = start;
    }
    ++at;
    if (word === 'normal') {
      /* consumes one of the four optional fields */
    } else if (word === 'italic' || word === 'oblique') {
      if (style) return null;
      style = word;
      if (
        word === 'oblique' &&
        ((input[at]?.kind === 'numeric' && input[at]?.unit) ||
          input[at]?.kind === 'function')
      ) {
        const start = at,
          angle = atom(0, 10);
        if (angle?.kind === 'angle') {
          if (!Number.isFinite(angle.value)) return null;
          if (input[start]!.kind === 'function')
            angle.value = Math.max(-90, Math.min(90, angle.value));
          else if (Math.abs(angle.value) > 90) return null;
          style += ' ' + angle.value + 'deg';
        } else at = start;
      }
    } else if (word === 'small-caps') {
      if (variant) return null;
      variant = word;
    } else if (widths.has(word)) {
      if (width) return null;
      width = word;
    } else if (/^(bold|bolder|lighter)$/.test(word)) {
      if (weight) return null;
      weight = word === 'bolder' ? 'bold' : word === 'lighter' ? '100' : word;
    } else if ((token.kind === 'numeric' && !token.unit) || token.kind === 'function') {
      if (weight) return null;
      --at;
      const parsed = atom(0, 10);
      // CSS math ranges clamp at computed-value time; literal tokens must be in range.
      if (parsed && token.kind === 'function')
        parsed.value = Math.max(1, Math.min(1000, parsed.value));
      if (
        !parsed ||
        parsed.kind !== 'number' ||
        !Number.isFinite(parsed.value) ||
        parsed.value < 1 ||
        parsed.value > 1000
      )
        return null;
      weight = String(parsed.value);
    } else return null;
    if (++prefixes > 4) return null;
  }
  if (size === undefined || !Number.isFinite(size) || size > 3.4028234663852886e38)
    return null;
  if (input[at]?.text === '/') {
    ++at;
    if (input[at]?.kind === 'word' && input[at]?.text.toLowerCase() === 'normal') ++at;
    else {
      const calculated = input[at]?.kind === 'function';
      const line = atom(0, size);
      if (
        !line ||
        line.kind === 'angle' ||
        !Number.isFinite(line.value) ||
        (!calculated && line.value < 0)
      )
        return null;
    }
  }
  const families: string[] = [];
  while (at < input.length) {
    const token = input[at++]!;
    if (token.kind === 'string') families.push(quoteFamily(token.text));
    else if (token.kind === 'word') {
      const words = [token.text];
      while (input[at]?.kind === 'word') words.push(input[at++]!.text);
      if (
        words.some(
          (word) => reserved.test(word) || (words.length > 1 && generic.test(word)),
        )
      )
        return null;
      const family = words.join(' ');
      families.push(
        generic.test(family)
          ? family.toLowerCase()
          : words.length > 1 ||
              !/^-?[_a-zA-Z\u0080-\uffff][\w\u0080-\uffff-]*$/.test(family)
            ? quoteFamily(family)
            : family,
      );
    } else return null;
    if (at === input.length) break;
    if (input[at++]?.text !== ',' || at === input.length) return null;
  }
  if (!families.length) return null;
  return [
    style,
    variant,
    weight === '400' ? '' : weight,
    width,
    size + 'px',
    families.join(', '),
  ]
    .filter(Boolean)
    .join(' ');
}
