import type { Blob } from './data.js';

export interface URLSearchParams {
  readonly size: number;
  append(name: string, value: string): void;
  delete(name: string, value?: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string, value?: string): boolean;
  set(name: string, value: string): void;
  sort(): void;
  toString(): string;
  forEach(
    callback: (value: string, key: string, parent: URLSearchParams) => void,
    thisArg?: unknown,
  ): void;
  entries(): IterableIterator<[string, string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  [Symbol.iterator](): IterableIterator<[string, string]>;
}
export interface URLSearchParamsConstructor {
  new (
    init?: string | Iterable<readonly [string, string]> | Record<string, string>,
  ): URLSearchParams;
}
export interface URL {
  href: string;
  readonly origin: string;
  protocol: string;
  username: string;
  password: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  readonly searchParams: URLSearchParams;
  toString(): string;
  toJSON(): string;
}
export interface URLConstructor {
  new (url: string | URL, base?: string | URL): URL;
  canParse(url: string | URL, base?: string | URL): boolean;
  parse(url: string | URL, base?: string | URL): URL | null;
  createObjectURL(blob: Blob): string;
  revokeObjectURL(url: string): void;
}
export function installObjectURLs(global: typeof globalThis): () => void {
  const g = global as any;
  const blobs = new Map<string, Blob>();
  const prefix = `blob:null/${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}/`;
  let next = 1,
    open = true;
  Object.defineProperties(g.URL, {
    createObjectURL: {
      configurable: true,
      writable: true,
      value(blob: Blob) {
        if (!open)
          throw new g.DOMException('The session is closed', 'InvalidStateError');
        if (!(blob instanceof g.Blob))
          throw new TypeError('Expected a Blob from this session');
        const url = prefix + next++;
        blobs.set(url, blob);
        return url;
      },
    },
    revokeObjectURL: {
      configurable: true,
      writable: true,
      value(url: string) {
        if (arguments.length === 0) throw new TypeError('Expected an object URL');
        blobs.delete(('' + url).split('#', 1)[0]!);
      },
    },
  });
  // Plugin scripts are separate bundles; a session-local symbol shares the Blob identity.
  Object.defineProperty(g, Symbol.for('flax.blob.url'), {
    configurable: true,
    value(url: string) {
      return open ? blobs.get(String(url).split('#', 1)[0]!) : undefined;
    },
  });
  return () => {
    open = false;
    blobs.clear();
  };
}
