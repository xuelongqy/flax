import * as streams from 'web-streams-polyfill';
import { Blob, File, FormData } from './data.js';
import { encodingStreams } from './encoding-streams.js';
import URL from 'core-js-pure/actual/url/index.js';
import URLSearchParams from 'core-js-pure/actual/url-search-params/index.js';
import decodeBase64 from 'core-js-pure/actual/atob.js';
import encodeBase64 from 'core-js-pure/actual/btoa.js';
import { TextEncoder, TextDecoder } from '@exodus/bytes/encoding.js';
import {
  AbortController,
  AbortSignal,
  Event,
  EventTarget,
  CustomEvent,
  MessageEvent,
  DOMException,
  setEventErrorReporter,
} from './events.js';
import type { Console } from './index.js';

// Engines can expose Base64 functions that throw non-standard exception classes.
// Convert arguments first so conversion errors remain TypeErrors, then normalize codec errors.
function base64(codec: (input: string) => string, input: string): string {
  if (typeof input === 'symbol') throw new TypeError('Cannot convert Symbol to string');
  const text = String(input);
  try {
    return codec(text);
  } catch {
    throw new DOMException('Invalid Base64 input', 'InvalidCharacterError');
  }
}
function atob(input: string): string {
  if (arguments.length === 0) throw new TypeError('Expected one argument');
  return base64(decodeBase64, input);
}
function btoa(input: string): string {
  if (arguments.length === 0) throw new TypeError('Expected one argument');
  return base64(encodeBase64, input);
}

type Call = (operation: string, ...args: unknown[]) => unknown;
export function install(
  global: typeof globalThis,
  call: Call,
): { fire(id: number): void; fireRaf(time: number): void; close(): void } {
  let open = true;
  let next = 1;
  let nesting = 0;
  const timers = new Map<
    number,
    {
      callback: (...args: any[]) => unknown;
      args: unknown[];
      repeat: boolean;
      nesting: number;
    }
  >();
  const report = (error: unknown) =>
    call(
      'error',
      error instanceof Error ? (error.stack ?? String(error)) : String(error),
    );
  setEventErrorReporter(report);
  const clearGlobalEvents = EventTarget.installGlobal(global);
  const enqueueMicrotask = (callback: () => void) => {
    if (typeof callback !== 'function') throw new TypeError('Expected a function');
    Promise.resolve().then(() => {
      try {
        callback();
      } catch (error) {
        report(error);
      }
    });
    call('checkpoint');
  };
  const animationFrames = new Map<number, (time: number) => unknown>();
  let nextAnimationFrame = 1;
  let rafScheduled = false;
  function requestAnimationFrame(callback: (time: number) => unknown): number {
    if (!open) throw new Error('FlaxSessionClosed');
    if (typeof callback !== 'function')
      throw new TypeError('requestAnimationFrame callbacks must be functions');
    const id = nextAnimationFrame++;
    animationFrames.set(id, callback);
    if (!rafScheduled) {
      rafScheduled = true;
      call('raf');
    }
    return id;
  }
  function cancelAnimationFrame(id = 0): void {
    animationFrames.delete(Number(id) | 0);
  }
  function timer(
    callback: (...args: any[]) => unknown,
    milliseconds: number,
    repeat: boolean,
    args: unknown[],
  ): number {
    if (!open) throw new Error('FlaxSessionClosed');
    if (typeof callback !== 'function')
      throw new TypeError('Timer callbacks must be functions');
    let delay = Number(milliseconds) | 0;
    delay = Math.max(0, delay);
    if (nesting > 5) delay = Math.max(delay, 4);
    const id = next++;
    timers.set(id, { callback, args, repeat, nesting: nesting + 1 });
    try {
      call('timer', id, delay, repeat);
    } catch (error) {
      timers.delete(id);
      throw error;
    }
    return id;
  }
  const clear = (id = 0) => {
    const handle = Number(id) | 0;
    timers.delete(handle);
    call('clearTimer', handle);
  };
  let indentation = 0;
  const counts = new Map<string, number>();
  const times = new Map<string, number>();
  const now = () => call('now') as number;
  function inspect(value: unknown, seen = new Set<object>(), depth = 0): string {
    if (typeof value === 'string') return value;
    if (value === null || typeof value !== 'object') return String(value);
    if (value instanceof Error) return value.stack ?? String(value);
    if (seen.has(value)) return '[Circular]';
    if (depth === 3) return '[Object]';
    seen.add(value);
    try {
      const fields = Object.entries(Object.getOwnPropertyDescriptors(value))
        .slice(0, 50)
        .map(
          ([key, descriptor]) =>
            `${key}: ${'value' in descriptor ? inspect(descriptor.value, seen, depth + 1) : '[Getter]'}`,
        );
      return `${Array.isArray(value) ? '[' : '{'}${fields.join(', ')}${Array.isArray(value) ? ']' : '}'}`;
    } finally {
      seen.delete(value);
    }
  }
  const log = (level: string, args: unknown[]) =>
    call(
      'log',
      level,
      '  '.repeat(indentation) + args.map((a) => inspect(a)).join(' '),
    );
  const console: Console = {
    log: (...args) => {
      log('log', args);
    },
    info: (...args) => {
      log('info', args);
    },
    debug: (...args) => {
      log('debug', args);
    },
    warn: (...args) => {
      log('warn', args);
    },
    error: (...args) => {
      log('error', args);
    },
    assert: (condition, ...args) => {
      if (!condition) log('error', ['Assertion failed:', ...args]);
    },
    trace: (...args) => {
      log('trace', [...args, new Error().stack]);
    },
    dir: (value) => {
      log('log', [value]);
    },
    table: (value) => {
      log('log', [value]);
    },
    group: (...args) => {
      log('log', args);
      indentation++;
    },
    groupCollapsed: (...args) => {
      log('log', args);
      indentation++;
    },
    groupEnd: () => {
      indentation = Math.max(0, indentation - 1);
    },
    count: (label = 'default') => {
      const value = (counts.get(label) ?? 0) + 1;
      counts.set(label, value);
      log('log', [`${label}: ${value}`]);
    },
    countReset: (label = 'default') => {
      counts.delete(label);
    },
    time: (label = 'default') => {
      if (!times.has(label)) times.set(label, now());
    },
    timeLog: (label = 'default', ...args) => {
      const start = times.get(label);
      if (start !== undefined) log('log', [`${label}: ${now() - start}ms`, ...args]);
    },
    timeEnd: (label = 'default') => {
      console.timeLog(label);
      times.delete(label);
    },
    clear: () => {
      indentation = 0;
      call('log', 'clear', '');
    },
  };
  const globals = {
    ...streams,
    ...encodingStreams,
    Blob,
    File,
    FormData,
    URL,
    URLSearchParams,
    TextEncoder,
    TextDecoder,
    atob,
    btoa,
    Event,
    EventTarget,
    CustomEvent,
    MessageEvent,
    DOMException,
    AbortController,
    AbortSignal,
    console,
    performance: Object.freeze({ now, timeOrigin: call('timeOrigin') as number }),
    queueMicrotask: enqueueMicrotask,
    requestAnimationFrame,
    cancelAnimationFrame,
    setTimeout: (
      callback: (...args: any[]) => unknown,
      delay = 0,
      ...args: unknown[]
    ) => timer(callback, delay, false, args),
    setInterval: (
      callback: (...args: any[]) => unknown,
      delay = 0,
      ...args: unknown[]
    ) => timer(callback, delay, true, args),
    clearTimeout: clear,
    clearInterval: clear,
  };
  for (const [name, value] of Object.entries(globals))
    Object.defineProperty(global, name, { value, writable: true, configurable: true });
  return {
    fire(id) {
      const task = timers.get(id);
      if (!task || !open) return;
      if (!task.repeat) timers.delete(id);
      const previous = nesting;
      nesting = task.nesting;
      try {
        task.callback.apply(global, task.args);
      } catch (error) {
        report(error);
      } finally {
        nesting = previous;
      }
    },
    fireRaf(time: number) {
      rafScheduled = false;
      if (!open) {
        animationFrames.clear();
        return;
      }
      const ids = [...animationFrames.keys()];
      for (const id of ids) {
        const callback = animationFrames.get(id);
        if (!callback) continue;
        animationFrames.delete(id);
        try {
          callback(time);
        } catch (error) {
          report(error);
        }
      }
      if (open && animationFrames.size > 0 && !rafScheduled) {
        rafScheduled = true;
        call('raf');
      }
    },
    close() {
      open = false;
      timers.clear();
      animationFrames.clear();
      rafScheduled = false;
      clearGlobalEvents();
    },
  };
}
