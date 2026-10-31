import { installWorkers, type WorkerScopeOptions } from './workers.js';
import { installCanvasHost } from './canvas.js';
import { installImageHost } from './images.js';
import * as streams from 'web-streams-polyfill';
import { install as installFetch } from './fetch/bootstrap.js';
import { Blob, File, FormData, blobBuffer } from './data.js';
import { installObjectURLs, type URLConstructor } from './url.js';
import { installFileReader, installFileReaderSync } from './file-reader.js';
import { installPerformance } from './performance.js';
import { installCrypto } from './crypto.js';
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
  ProgressEvent,
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
  worker?: WorkerScopeOptions,
) {
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
  let workerError: ((error: unknown) => boolean | undefined) | undefined;
  let workerReport: ((error: unknown) => void) | undefined;
  let reportingError = false;
  const report = (error: unknown) => {
    if (workerError && !reportingError) {
      reportingError = true;
      try {
        if (workerError(error) === false) return;
      } finally {
        reportingError = false;
      }
    }
    if (workerReport) {
      workerReport(error);
      return;
    }
    call(
      'error',
      error instanceof Error ? (error.stack ?? String(error)) : String(error),
    );
  };
  setEventErrorReporter(report);
  const clearGlobalEvents = EventTarget.installGlobal(global);
  const canvases = worker
    ? undefined
    : installCanvasHost(global, call, EventTarget, DOMException, Event);
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
    ProgressEvent,
    MessageEvent,
    DOMException,
    AbortController,
    AbortSignal,
    console,
    navigator: {
      userAgent: 'Flax',
      platform: 'Flax',
      get hardwareConcurrency() {
        return Number(call('hardwareConcurrency')) || 1;
      },
    },
    queueMicrotask: enqueueMicrotask,
    ...(worker ? {} : { requestAnimationFrame, cancelAnimationFrame }),
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
  Object.defineProperty(global, 'self', {
    get: () => global,
    configurable: true,
    enumerable: true,
  });
  if (!worker)
    Object.defineProperty(global, 'window', {
      get: () => global,
      enumerable: true,
      configurable: true,
    });
  const baseUrl = call('fetch', 'baseUrl') as string | undefined;
  const address = new (URL as URLConstructor)(baseUrl ?? 'about:blank');
  const location: Record<string, unknown> = { toString: () => address.href };
  for (const key of [
    'href',
    'origin',
    'protocol',
    'host',
    'hostname',
    'port',
    'pathname',
    'search',
    'hash',
  ] as const)
    location[key] = address[key];
  if (worker) {
    const g = global as any;
    const navigator = g.navigator;
    class WorkerLocation {
      constructor() {
        throw new TypeError('Illegal constructor');
      }
      toString() {
        if (this !== location) throw new TypeError('Illegal invocation');
        return address.href;
      }
      get [Symbol.toStringTag]() {
        return 'WorkerLocation';
      }
    }
    class WorkerNavigator {
      constructor() {
        throw new TypeError('Illegal constructor');
      }
      get userAgent() {
        if (this !== navigator) throw new TypeError('Illegal invocation');
        return 'Flax';
      }
      get platform() {
        if (this !== navigator) throw new TypeError('Illegal invocation');
        return 'Flax';
      }
      get hardwareConcurrency() {
        if (this !== navigator) throw new TypeError('Illegal invocation');
        return Number(call('hardwareConcurrency')) || 1;
      }
      get [Symbol.toStringTag]() {
        return 'WorkerNavigator';
      }
    }
    for (const key of Object.keys(location)) {
      delete location[key];
      if (key === 'toString') continue;
      Object.defineProperty(WorkerLocation.prototype, key, {
        configurable: true,
        enumerable: true,
        get() {
          if (this !== location) throw new TypeError('Illegal invocation');
          return address[key as keyof typeof address];
        },
      });
    }
    for (const key of Object.keys(navigator)) delete navigator[key];
    Object.setPrototypeOf(location, WorkerLocation.prototype);
    Object.setPrototypeOf(g.navigator, WorkerNavigator.prototype);
    g.WorkerLocation = WorkerLocation;
    g.WorkerNavigator = WorkerNavigator;
  }
  Object.defineProperty(global, 'location', {
    value: Object.freeze(location),
    configurable: true,
    enumerable: true,
  });
  if (worker) Object.freeze(global.navigator);
  const randomness = installCrypto(
    global,
    (length) => call('random', length) as ArrayBuffer,
  );
  const clearObjectURLs = installObjectURLs(global);
  const readers = installFileReader(global);
  if (worker) installFileReaderSync(global);
  const images = canvases
    ? installImageHost(global, call, canvases, DOMException)
    : undefined;
  const fetch = installFetch(
    global,
    (operation, ...args) => call('fetch', operation, ...args),
    baseUrl,
  );
  const nativeClone = typeof (global as any).__flaxNativeWorker?.clone === 'function';
  const workers = installWorkers(global, call, worker);
  const measurements = installPerformance(
    global,
    now,
    call('timeOrigin') as number,
    report,
    nativeClone ? (global as any).structuredClone : undefined,
  );
  // Polyfilled platform objects cannot silently become empty ordinary records.
  const g = global as any;
  for (const name of [
    'Blob',
    'File',
    'FileReaderSync',
    'WorkerNavigator',
    'WorkerLocation',
    'Crypto',
    'Performance',
    'PerformanceEntry',
    'PerformanceObserver',
    'PerformanceObserverEntryList',
    'FormData',
    'Request',
    'Response',
    'Headers',
    'ReadableStream',
    'WritableStream',
    'TransformStream',
    'URL',
    'URLSearchParams',
    'AbortSignal',
    'AbortController',
    'Event',
    'EventTarget',
    'DOMException',
    'ImageBitmap',
    'ImageData',
    'OffscreenCanvas',
  ]) {
    const prototype = g[name]?.prototype;
    if (
      prototype &&
      !Object.prototype.hasOwnProperty.call(prototype, Symbol.for('flax.uncloneable'))
    )
      Object.defineProperty(prototype, Symbol.for('flax.uncloneable'), { value: true });
  }

  if (worker) {
    workerError = (error) =>
      workers.error(
        worker.id,
        ...(workers.details(error) as [string, string, string, string, string]),
        error,
      );
    workerReport = workers.report;
  }
  return {
    blobSource(url: string) {
      const blob = (global as any)[Symbol.for('flax.blob.url')]?.(url);
      return blob ? [blobBuffer(blob), blob.type] : undefined;
    },
    fetch,
    workerMessage: workers.receive,
    workerFinished: workers.finished,
    workerError: workers.error,
    workerRejections: workers.rejections,
    workerResourceSettled: workers.resourceSettled,
    fire(id: number) {
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
    present() {
      images?.sweep();
      canvases?.present();
    },
    canvasEvent(target: object, event: string) {
      return canvases?.receive(target, JSON.parse(event));
    },
    imageSettled(id: number, ok: boolean, value: unknown) {
      images?.settle(id, ok, value);
    },
    close() {
      workers.close();
      fetch.close();
      open = false;
      timers.clear();
      measurements.close();
      randomness.close();
      readers.close();
      animationFrames.clear();
      rafScheduled = false;
      clearGlobalEvents();
      clearObjectURLs();
      images?.close();
      canvases?.close();
    },
  };
}
