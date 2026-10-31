import { Blob } from '../data.js';

const token = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
function mimeType(input: string): string {
  if (input.startsWith(';')) input = 'text/plain' + input;
  const end = input.indexOf(';');
  const essence = (end < 0 ? input : input.slice(0, end)).trim().toLowerCase();
  const pieces = essence.split('/');
  if (pieces.length !== 2 || !pieces.every((value) => token.test(value)))
    return 'text/plain;charset=US-ASCII';
  const parameters = new Map<string, string>();
  let at = end < 0 ? input.length : end;
  while (at < input.length) {
    at++;
    const start = at;
    while (at < input.length && !'=;'.includes(input[at]!)) at++;
    const name = input.slice(start, at).trim().toLowerCase();
    if (input[at] !== '=') continue;
    at++;
    let value = '';
    if (input[at] === '"') {
      at++;
      while (at < input.length && input[at] !== '"') {
        if (input[at] === '\\' && at + 1 < input.length) at++;
        value += input[at++];
      }
      if (input[at] === '"') at++;
      while (at < input.length && input[at] !== ';') at++;
    } else {
      const start = at;
      while (at < input.length && input[at] !== ';') at++;
      value = input.slice(start, at).trim();
      if (!value) continue;
    }
    if (
      token.test(name) &&
      !/[\x00-\x08\x0a-\x1f\x7f]/.test(value) &&
      !parameters.has(name)
    )
      parameters.set(name, value);
  }
  return (
    essence +
    [...parameters]
      .map(
        ([name, value]) =>
          ';' +
          name +
          '=' +
          (token.test(value) ? value : '"' + value.replace(/["\\]/g, '\\$&') + '"'),
      )
      .join('')
  );
}

export function dataResource(url: string): { blob: Blob; type: string } {
  const comma = url.indexOf(',');
  if (comma < 0) throw new TypeError('Data URL needs a comma');
  let metadata = url.slice(5, comma).trim();
  const base64 = /; *base64$/i.test(metadata);
  if (base64) metadata = metadata.replace(/; *base64$/i, '');
  const encoded = new TextEncoder().encode(url.slice(comma + 1));
  const bytes = new Uint8Array(encoded.length);
  let length = 0;
  for (let at = 0; at < encoded.length; at++) {
    const pair = String.fromCharCode(encoded[at + 1] ?? 0, encoded[at + 2] ?? 0);
    if (encoded[at] === 37 && /^[\da-f]{2}$/i.test(pair)) {
      bytes[length++] = parseInt(pair, 16);
      at += 2;
    } else bytes[length++] = encoded[at]!;
  }
  let data = bytes.subarray(0, length);
  if (base64) {
    let binary = '';
    for (let at = 0; at < data.length; at += 8192)
      binary += String.fromCharCode(...data.subarray(at, at + 8192));
    try {
      data = Uint8Array.from(atob(binary), (value) => value.charCodeAt(0));
    } catch {
      throw new TypeError('Invalid data URL base64');
    }
  }
  const type = mimeType(metadata);
  return { blob: new Blob([data], { type }), type };
}

export function blobRange(blob: Blob, input: string): { blob: Blob; range: string } {
  const match = /^bytes=[\t ]*(\d*)[\t ]*-[\t ]*(\d*)[\t ]*$/.exec(input);
  if (!match || (!match[1] && !match[2]))
    throw new TypeError('Invalid Blob byte range');
  const size = BigInt(blob.size),
    zero = BigInt(0),
    one = BigInt(1);
  let start: bigint, end: bigint;
  if (!match[1]) {
    const count = BigInt(match[2]!);
    if (count === zero) throw new TypeError('Empty Blob byte range');
    start = count >= size ? zero : size - count;
    end = size - one;
  } else {
    start = BigInt(match[1]);
    end = match[2] ? BigInt(match[2]) : size - one;
    if (end >= size) end = size - one;
  }
  if (start > end || start >= size) throw new TypeError('Unsatisfied Blob byte range');
  return {
    blob: blob.slice(Number(start), Number(end + one), blob.type),
    range: `bytes ${start}-${end}/${size}`,
  };
}
