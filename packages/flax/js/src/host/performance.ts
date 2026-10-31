import clone from 'core-js-pure/actual/structured-clone.js';
import type { EventTarget } from './events.js';

export interface PerformanceEntry {
  readonly name: string;
  readonly entryType: string;
  readonly startTime: number;
  readonly duration: number;
  readonly navigationId: number | null;
  toJSON(): {
    name: string;
    entryType: string;
    startTime: number;
    duration: number;
    navigationId: number | null;
  };
}
export interface PerformanceMark extends PerformanceEntry {
  readonly detail: unknown;
}
export interface PerformanceMeasure extends PerformanceEntry {
  readonly detail: unknown;
}
export interface PerformanceMarkOptions {
  detail?: unknown;
  startTime?: number;
}
export interface PerformanceMeasureOptions {
  detail?: unknown;
  start?: string | number;
  end?: string | number;
  duration?: number;
}
export interface Performance extends EventTarget {
  readonly timeOrigin: number;
  now(): number;
  mark(name: string, options?: PerformanceMarkOptions): PerformanceMark;
  measure(
    name: string,
    startOrOptions?: string | PerformanceMeasureOptions,
    endMark?: string,
  ): PerformanceMeasure;
  clearMarks(name?: string): void;
  clearMeasures(name?: string): void;
  getEntries(): PerformanceEntry[];
  getEntriesByType(type: string): PerformanceEntry[];
  getEntriesByName(name: string, type?: string): PerformanceEntry[];
  toJSON(): { timeOrigin: number };
}
export interface PerformanceObserverInit {
  entryTypes?: Iterable<string>;
  type?: string;
  buffered?: boolean;
}
export interface PerformanceObserverEntryList {
  getEntries(): PerformanceEntry[];
  getEntriesByType(type: string): PerformanceEntry[];
  getEntriesByName(name: string, type?: string): PerformanceEntry[];
}
export interface PerformanceObserver {
  observe(options: PerformanceObserverInit): void;
  disconnect(): void;
  takeRecords(): PerformanceEntry[];
}
export type PerformanceObserverCallback = (
  this: PerformanceObserver,
  entries: PerformanceObserverEntryList,
  observer: PerformanceObserver,
  options: { droppedEntriesCount?: number },
) => void;
export interface PerformanceObserverConstructor {
  new (callback: PerformanceObserverCallback): PerformanceObserver;
  readonly prototype: PerformanceObserver;
  readonly supportedEntryTypes: readonly string[];
}
export interface PerformanceMarkConstructor {
  new (name: string, options?: PerformanceMarkOptions): PerformanceMark;
  readonly prototype: PerformanceMark;
}

type Entry = PerformanceEntry;

type EntryData = {
  name: string;
  entryType: string;
  startTime: number;
  duration: number;
  detail: unknown;
};
type ObserverState = {
  callback: PerformanceObserverCallback;
  mode?: 'single' | 'multiple';
  types: Set<string>;
  records: PerformanceEntry[];
  dropped: boolean;
};
const reservedNames = new Set(
  'navigationStart unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd'.split(
    ' ',
  ),
);
function text(value: unknown): string {
  if (typeof value === 'symbol')
    throw new TypeError('Cannot convert a Symbol to a string');
  return String(value);
}
function dictionary(value: unknown): any {
  if (value == null) return {};
  if (typeof value !== 'object' && typeof value !== 'function')
    throw new TypeError('Expected an options dictionary');
  return value;
}
function number(value: unknown, nonnegative = false): number {
  const result = +(value as number);
  if (!Number.isFinite(result) || (nonnegative && result < 0))
    throw new TypeError('Invalid performance timestamp');
  return result;
}
function filtered(entries: PerformanceEntry[], name?: string, type?: string) {
  return entries
    .filter(
      (entry) =>
        (name === undefined || entry.name === name) &&
        (type === undefined || entry.entryType === type),
    )
    .sort((a, b) => a.startTime - b.startTime);
}

export function installPerformance(
  global: typeof globalThis,
  clock: () => number,
  timeOrigin: number,
  report: (error: unknown) => void,
  cloneValue: (value: unknown) => unknown = clone,
) {
  const g = global as any,
    secret = {};
  const values = new WeakMap<object, EntryData>(),
    lists = new WeakMap<object, Entry[]>(),
    states = new WeakMap<object, ObserverState>();
  const observers = new Set<PerformanceObserver>();
  let entries: Entry[] = [],
    timer: number | undefined,
    open = true;
  function check() {
    if (!open) throw new g.DOMException('The session is closed', 'InvalidStateError');
  }
  function entry(object: object) {
    const value = values.get(object);
    if (!value) throw new TypeError('Illegal PerformanceEntry invocation');
    return value;
  }
  function state(object: object) {
    const value = states.get(object);
    if (!value) throw new TypeError('Illegal PerformanceObserver invocation');
    return value;
  }
  function detail(value: unknown): unknown {
    if (value == null) return null;
    try {
      return cloneValue(value);
    } catch (error) {
      if ((error as Error)?.name === 'DataCloneError')
        throw new g.DOMException((error as Error).message, 'DataCloneError');
      throw error;
    }
  }
  function queue() {
    if (timer !== undefined) return;
    timer = g.setTimeout(() => {
      timer = undefined;
      if (!open) return;
      for (const observer of [...observers]) {
        const current = state(observer),
          records = current.records;
        if (!records.length) continue;
        current.records = [];
        const options = current.dropped ? { droppedEntriesCount: 0 } : {};
        current.dropped = false;
        try {
          current.callback.call(
            observer,
            new PerformanceObserverEntryList(secret, records),
            observer,
            options,
          );
        } catch (error) {
          report(error);
        }
      }
    }, 0);
  }
  function add<T extends Entry>(value: T): T {
    entries.push(value);
    let notify = false;
    for (const observer of observers) {
      const current = state(observer);
      if (current.types.has(value.entryType)) {
        current.records.push(value);
        notify = true;
      }
    }
    if (notify) queue();
    return value;
  }
  function timestamp(value: string | number): number {
    if (typeof value !== 'string') return number(value, true);
    if (value === 'navigationStart') return 0;
    if (reservedNames.has(value))
      throw new g.DOMException(
        'Navigation timing is unavailable',
        'InvalidAccessError',
      );
    let latest: Entry | undefined;
    for (const entry of entries)
      if (
        entry.entryType === 'mark' &&
        entry.name === value &&
        (!latest || entry.startTime >= latest.startTime)
      )
        latest = entry;
    if (!latest)
      throw new g.DOMException(
        'The performance mark does not exist: ' + value,
        'SyntaxError',
      );
    return latest.startTime;
  }
  class PerformanceEntry {
    constructor(key: object, value: EntryData) {
      if (key !== secret) throw new TypeError('Illegal constructor');
      values.set(this, value);
    }
    get name() {
      return entry(this).name;
    }
    get entryType() {
      return entry(this).entryType;
    }
    get startTime() {
      return entry(this).startTime;
    }
    get duration() {
      return entry(this).duration;
    }
    get navigationId(): null {
      entry(this);
      return null;
    }
    toJSON() {
      const value = entry(this);
      return {
        name: value.name,
        entryType: value.entryType,
        startTime: value.startTime,
        duration: value.duration,
        navigationId: null,
      };
    }
  }
  class PerformanceMark extends PerformanceEntry {
    constructor(name: string, options: PerformanceMarkOptions = {}) {
      if (arguments.length === 0) throw new TypeError('Expected a mark name');
      const label = text(name),
        input = dictionary(options),
        data = input.detail,
        rawStart = input.startTime,
        start = rawStart === undefined ? clock() : number(rawStart, true);
      if (reservedNames.has(label))
        throw new g.DOMException('Reserved performance mark name', 'SyntaxError');
      super(secret, {
        name: label,
        entryType: 'mark',
        startTime: start,
        duration: 0,
        detail: detail(data),
      });
    }
    get detail() {
      return entry(this).detail;
    }
  }
  class PerformanceMeasure extends PerformanceEntry {
    constructor(key: object, value: EntryData) {
      super(key, value);
    }
    get detail() {
      return entry(this).detail;
    }
  }
  class PerformanceObserverEntryList {
    constructor(key: object, entries: Entry[]) {
      if (key !== secret) throw new TypeError('Illegal constructor');
      lists.set(this, entries);
    }
    getEntries() {
      const entries = lists.get(this);
      if (!entries)
        throw new TypeError('Illegal PerformanceObserverEntryList invocation');
      return filtered(entries);
    }
    getEntriesByType(type: string) {
      if (!arguments.length) throw new TypeError('Expected entry type');
      return filtered(this.getEntries(), undefined, text(type));
    }
    getEntriesByName(name: string, type?: string) {
      if (!arguments.length) throw new TypeError('Expected entry name');
      return filtered(
        this.getEntries(),
        text(name),
        type === undefined ? undefined : text(type),
      );
    }
  }
  class PerformanceObserver {
    constructor(callback: PerformanceObserverCallback) {
      if (typeof callback !== 'function')
        throw new TypeError('Expected observer callback');
      states.set(this, { callback, types: new Set(), records: [], dropped: false });
    }
    observe(options: PerformanceObserverInit) {
      check();
      const current = state(this),
        input = dictionary(options);
      const buffered = Boolean(input.buffered),
        types = input.entryTypes,
        rawType = input.type,
        type = rawType === undefined ? undefined : text(rawType);
      if (
        (types === undefined && type === undefined) ||
        (types !== undefined && type !== undefined)
      )
        throw new TypeError('Specify entryTypes or type');
      const mode = types === undefined ? 'single' : 'multiple';
      if (current.mode && current.mode !== mode)
        throw new g.DOMException(
          'Observer mode cannot change',
          'InvalidModificationError',
        );
      let selected: string[];
      if (types !== undefined) {
        if (
          types === null ||
          (typeof types !== 'object' && typeof types !== 'function') ||
          typeof types[Symbol.iterator] !== 'function'
        )
          throw new TypeError('Expected an entry type sequence');
        selected = Array.from(types, text);
      } else selected = [type!];
      current.mode = mode;
      selected = selected.filter((type) => type === 'mark' || type === 'measure');
      if (!selected.length) return;
      if (mode === 'multiple') current.types = new Set(selected);
      else current.types.add(type!);
      current.dropped = true;
      observers.add(this);
      if (mode === 'single' && buffered) {
        current.records.push(...entries.filter((entry) => entry.entryType === type));
        if (current.records.length) queue();
      }
    }
    takeRecords() {
      const current = state(this),
        result = current.records.slice();
      current.records = [];
      return result;
    }
    disconnect() {
      const current = state(this);
      current.types.clear();
      current.records = [];
      observers.delete(this);
      if (!observers.size && timer !== undefined) {
        g.clearTimeout(timer);
        timer = undefined;
      }
    }
  }
  class Performance extends g.EventTarget {
    constructor(key: object) {
      super();
      if (key !== secret) throw new TypeError('Illegal constructor');
    }
    get timeOrigin() {
      if (this !== performance) throw new TypeError('Illegal Performance invocation');
      return timeOrigin;
    }
    now() {
      if (this !== performance) throw new TypeError('Illegal Performance invocation');
      return clock();
    }
    mark(name: string, options: PerformanceMarkOptions = {}) {
      if (this !== performance) throw new TypeError('Illegal Performance invocation');
      check();
      if (!arguments.length) throw new TypeError('Expected mark name');
      return add(new PerformanceMark(name, options));
    }
    measure(
      name: string,
      startOrOptions: string | PerformanceMeasureOptions = {},
      endMark?: string,
    ) {
      if (this !== performance) throw new TypeError('Illegal Performance invocation');
      check();
      if (!arguments.length) throw new TypeError('Expected measure name');
      const label = text(name);
      let input: any, legacy: string | undefined;
      if (
        startOrOptions !== null &&
        typeof startOrOptions !== 'object' &&
        typeof startOrOptions !== 'function'
      )
        legacy = text(startOrOptions);
      else input = dictionary(startOrOptions);
      const data = input?.detail,
        rawDuration = input?.duration,
        duration = rawDuration === undefined ? undefined : number(rawDuration),
        rawEnd = input?.end,
        end =
          rawEnd === undefined
            ? undefined
            : typeof rawEnd === 'number'
              ? number(rawEnd, true)
              : text(rawEnd),
        rawStart = input?.start,
        start =
          rawStart === undefined
            ? undefined
            : typeof rawStart === 'number'
              ? number(rawStart, true)
              : text(rawStart);
      if (
        input &&
        (start !== undefined ||
          end !== undefined ||
          duration !== undefined ||
          data !== undefined)
      ) {
        if (
          endMark !== undefined ||
          (start === undefined && end === undefined) ||
          (start !== undefined && end !== undefined && duration !== undefined)
        )
          throw new TypeError('Invalid performance measure options');
      }
      const endTime =
        endMark !== undefined
          ? timestamp(text(endMark))
          : end !== undefined
            ? timestamp(end)
            : start !== undefined && duration !== undefined
              ? timestamp(start) + duration
              : clock();
      const startTime =
        start !== undefined
          ? timestamp(start)
          : end !== undefined && duration !== undefined
            ? timestamp(end) - duration
            : legacy !== undefined
              ? timestamp(legacy)
              : 0;
      return add(
        new PerformanceMeasure(secret, {
          name: label,
          entryType: 'measure',
          startTime,
          duration: endTime - startTime,
          detail: detail(data),
        }),
      );
    }
    clearMarks(name?: string) {
      if (this !== performance) throw new TypeError('Illegal Performance invocation');
      const label = name === undefined ? undefined : text(name);
      entries = entries.filter(
        (entry) =>
          entry.entryType !== 'mark' || (label !== undefined && entry.name !== label),
      );
    }
    clearMeasures(name?: string) {
      if (this !== performance) throw new TypeError('Illegal Performance invocation');
      const label = name === undefined ? undefined : text(name);
      entries = entries.filter(
        (entry) =>
          entry.entryType !== 'measure' ||
          (label !== undefined && entry.name !== label),
      );
    }
    getEntries() {
      if (this !== performance) throw new TypeError('Illegal Performance invocation');
      return filtered(entries);
    }
    getEntriesByType(type: string) {
      if (!arguments.length) throw new TypeError('Expected entry type');
      return filtered(this.getEntries(), undefined, text(type));
    }
    getEntriesByName(name: string, type?: string) {
      if (!arguments.length) throw new TypeError('Expected entry name');
      return filtered(
        this.getEntries(),
        text(name),
        type === undefined ? undefined : text(type),
      );
    }
    toJSON() {
      return { timeOrigin: this.timeOrigin };
    }
  }
  const performance = new Performance(secret);
  Object.defineProperty(PerformanceObserver, 'supportedEntryTypes', {
    value: Object.freeze(['mark', 'measure']),
    enumerable: true,
  });
  for (const [name, Constructor] of [
    ['Performance', Performance],
    ['PerformanceEntry', PerformanceEntry],
    ['PerformanceMark', PerformanceMark],
    ['PerformanceMeasure', PerformanceMeasure],
    ['PerformanceObserver', PerformanceObserver],
    ['PerformanceObserverEntryList', PerformanceObserverEntryList],
  ] as const) {
    Object.defineProperty(Constructor.prototype, Symbol.toStringTag, {
      value: name,
      configurable: true,
    });
    Object.defineProperty(g, name, {
      value: Constructor,
      writable: true,
      configurable: true,
    });
  }
  Object.defineProperty(g, 'performance', {
    value: performance,
    writable: true,
    configurable: true,
  });
  return {
    close() {
      open = false;
      entries = [];
      for (const observer of observers) observer.disconnect();
      observers.clear();
      if (timer !== undefined) g.clearTimeout(timer);
      timer = undefined;
    },
  };
}
