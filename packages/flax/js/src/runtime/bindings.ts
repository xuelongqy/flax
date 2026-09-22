import { computed, signal, type Binding, type ReadonlySignal } from './index.js';

/** Experimental generated-binding extension. Independent of the native C ABI. */
export const bindingVersion = 20;

type CallbackParameter = {
  name: string;
  required: boolean;
  positional: boolean;
};
export type Bindable<T> = T | Binding<T>;

export interface DartValue {
  readonly kind: 'value';
  readonly type: string;
  readonly ctor: string;
  readonly args: Readonly<Record<string, unknown>>;
}

declare const dartCollectionKind: unique symbol;
declare const dartCollectionItem: unique symbol;
declare const dartCollectionKey: unique symbol;

/** Collection copies preserve graphs; ordinary Dart objects stay references. */
export type DartCopy<T> = T extends {
  readonly [dartCollectionKind]: 'list';
  readonly [dartCollectionItem]: infer V;
}
  ? Array<DartCopy<V>>
  : T extends {
        readonly [dartCollectionKind]: 'map';
        readonly [dartCollectionKey]: infer K;
        readonly [dartCollectionItem]: infer V;
      }
    ? Map<DartCopy<K>, DartCopy<V>>
    : T extends {
          readonly [dartCollectionKind]: 'set';
          readonly [dartCollectionItem]: infer V;
        }
      ? Set<DartCopy<V>>
      : T extends {
            readonly [dartCollectionKind]: 'iterable';
            readonly [dartCollectionItem]: infer V;
          }
        ? Array<DartCopy<V>>
        : T;
type DartOutput<T> =
  T extends ReadonlyArray<infer V>
    ? DartList<DartOutput<V>>
    : T extends ReadonlyMap<infer K, infer V>
      ? DartMap<DartOutput<K>, DartOutput<V>>
      : T extends ReadonlySet<infer V>
        ? DartSet<DartOutput<V>>
        : T;
type DartCallbackResult<R> =
  R extends Promise<infer V>
    ? Promise<V extends Widget ? V : DartInput<V>>
    : R extends Widget
      ? R
      : DartInput<R>;
type DartCallbackInput<A extends readonly unknown[], R> = (
  ...args: { [K in keyof A]: DartOutput<A[K]> }
) => DartCallbackResult<R>;
type DartElementInput<T> = T extends (...args: infer A) => infer R
  ? DartCallbackInput<A, R>
  : DartInput<T>;
export type DartInput<T> = T extends Widget
  ? never
  : T extends (...args: infer A) => infer R
    ? DartCallbackInput<A, R>
    : T extends Promise<unknown>
      ? never
      : T extends {
            readonly [dartCollectionKind]: 'list';
            readonly [dartCollectionItem]: infer V;
          }
        ? DartListInput<V>
        : T extends {
              readonly [dartCollectionKind]: 'map';
              readonly [dartCollectionKey]: infer K;
              readonly [dartCollectionItem]: infer V;
            }
          ? DartMapInput<K, V>
          : T extends {
                readonly [dartCollectionKind]: 'set';
                readonly [dartCollectionItem]: infer V;
              }
            ? DartSetInput<V>
            : T extends {
                  readonly [dartCollectionKind]: 'iterable';
                  readonly [dartCollectionItem]: infer V;
                }
              ? DartIterableInput<V>
              : T;

/** References to real Dart collections. Explicit copying never installs observers. */
export interface DartIterable<T> extends Iterable<DartCopy<T>> {
  readonly __dartIterable: unique symbol;
  readonly [dartCollectionKind]: 'iterable' | 'list' | 'set';
  readonly [dartCollectionItem]: T;
  readonly length: number;
  readonly isEmpty: boolean;
  readonly contains: (value: DartElementInput<T>) => boolean;
  toArray(): Array<DartCopy<T>>;
}
export interface DartList<T> extends DartIterable<T> {
  readonly __dartList: unique symbol;
  readonly [dartCollectionKind]: 'list';
  get(index: number): T;
  readonly set: (index: number, value: DartElementInput<T>) => void;
  readonly add: (value: DartElementInput<T>) => void;
  addAll(values: DartIterableInput<T, DartElementInput<T>>): void;
  removeAt(index: number): T;
  clear(): void;
}
export interface DartMap<K, V> {
  readonly __dartMap: unique symbol;
  readonly [dartCollectionKind]: 'map';
  readonly [dartCollectionKey]: K;
  readonly [dartCollectionItem]: V;
  readonly length: number;
  get(key: DartInput<K>): V | null;
  set(key: DartInput<K>, value: DartInput<V>): void;
  containsKey(key: DartInput<K>): boolean;
  remove(key: DartInput<K>): V | null;
  clear(): void;
  toMap(): Map<DartCopy<K>, DartCopy<V>>;
}
export interface DartSet<T> extends DartIterable<T> {
  readonly __dartSet: unique symbol;
  readonly [dartCollectionKind]: 'set';
  readonly add: (value: DartElementInput<T>) => boolean;
  addAll(values: DartIterableInput<T, DartElementInput<T>>): void;
  readonly remove: (value: DartElementInput<T>) => boolean;
  clear(): void;
  toSet(): Set<DartCopy<T>>;
}

// Omitting the iterator from the Dart-reference branch lets TypeScript
// contextually type array and Set literals from the JavaScript branch.
export type DartIterableInput<T, I = DartInput<T>> =
  Omit<DartIterable<T>, typeof Symbol.iterator> | Iterable<I>;
export type DartListInput<T, I = DartInput<T>> =
  Omit<DartList<T>, typeof Symbol.iterator> | ReadonlyArray<I>;
export type DartMapInput<K, V, IK = DartInput<K>, IV = DartInput<V>> =
  | DartMap<K, V>
  | ReadonlyMap<IK, IV>
  | (K extends string ? Readonly<Record<string, IV>> : never);
export type DartSetInput<T, I = DartInput<T>> =
  Omit<DartSet<T>, typeof Symbol.iterator> | ReadonlySet<I>;

export interface DartEnum {
  readonly kind: 'enum';
  readonly type: string;
  readonly name: string;
}

/** A generated Dart Stream reference. It is unrelated to Web ReadableStream. */
export interface FlaxStreamReference<T = unknown> extends AsyncIterable<T> {}

export interface WidgetDescription {
  readonly kind: 'widget';
  readonly type: string;
  readonly ctor: string;
  readonly args: Readonly<Record<string, unknown>>;
}

/** Custom configurations are branded by their base constructor, not their fields. */
export interface ComponentWidget {
  readonly kind: 'component';
}
/** An existing Flutter Widget. Only the Dart host can create this reference. */
export interface DartWidget {
  readonly __dartWidget: unique symbol;
}
export type Widget = WidgetDescription | ComponentWidget | DartWidget;

export type ComponentConstructor<T extends ComponentWidget = ComponentWidget> =
  abstract new (...args: never[]) => T;

/** Component-aware operations on a real Flutter BuildContext. */
export interface ComponentContext {
  findAncestorWidgetOfExactType<T extends ComponentWidget>(
    type: ComponentConstructor<T>,
  ): T | null;
}

type ComponentTypeInfo = { type: number; name: string; stateful: boolean };
type ComponentInfo = ComponentTypeInfo & { id: number; key: unknown };
const components = new WeakMap<object, ComponentInfo>();
const componentTypes = new WeakMap<Function, ComponentTypeInfo>();
const componentBases = new WeakMap<object, boolean>();

export function registerComponentBase(type: Function, stateful: boolean): void {
  componentBases.set(type.prototype as object, stateful);
}

function componentType(type: Function): ComponentTypeInfo {
  if (
    typeof type !== 'function' ||
    !type.prototype ||
    componentBases.has(type.prototype)
  )
    throw new TypeError('Expected a custom component constructor');
  const existing = componentTypes.get(type);
  if (existing) return existing;
  let prototype = Object.getPrototypeOf(type.prototype) as object | null;
  while (prototype !== null) {
    const stateful = componentBases.get(prototype);
    if (stateful !== undefined) {
      const info = Object.freeze({
        type: nextComponentType++,
        name: type.name || 'AnonymousComponent',
        stateful,
      });
      componentTypes.set(type, info);
      return info;
    }
    prototype = Object.getPrototypeOf(prototype) as object | null;
  }
  throw new TypeError('Expected a custom component constructor');
}
let nextComponent = 1;
let nextComponentType = 1;
type ComponentStateInfo = {
  id: number | null;
  widget: object | null;
  retired: boolean;
  claimed: boolean;
};
const componentStates = new WeakMap<object, ComponentStateInfo>();

export function registerComponent(
  instance: object,
  type: Function,
  stateful: boolean,
  key: unknown,
): void {
  const info = componentType(type);
  if (info.stateful !== stateful) throw new TypeError('Invalid component kind');
  components.set(instance, { ...info, id: nextComponent++, key: key ?? null });
}

export function registerComponentState(instance: object): void {
  componentStates.set(instance, {
    id: null,
    widget: null,
    retired: false,
    claimed: false,
  });
}

export function componentStateWidget(instance: object): object {
  const state = componentStates.get(instance);
  if (!state?.widget || state.retired) throw new Error('State has no mounted widget');
  return state.widget;
}

export function componentStateCall(
  instance: object,
  operation: string,
  args: readonly unknown[],
): unknown {
  const state = componentStates.get(instance);
  if (!state || state.retired || state.id === null) {
    if (operation === 'mounted') return false;
    throw new Error('State is not mounted or has been disposed');
  }
  const call = (
    globalThis as typeof globalThis & {
      __flaxComponent?: (
        version: number,
        id: number,
        operation: string,
        ...args: unknown[]
      ) => unknown;
    }
  ).__flaxComponent;
  if (!call) throw new Error('Components require a FlaxView host');
  return call(bindingVersion, state.id, operation, ...args);
}

function synchronous(value: unknown, operation = 'Component callbacks'): unknown {
  if (
    value !== null &&
    (typeof value === 'object' || typeof value === 'function') &&
    typeof (value as { then?: unknown }).then === 'function'
  ) {
    throw new TypeError(`${operation} must be synchronous; Promise is not supported`);
  }
  return value;
}

export interface Parameter {
  readonly name: string;
  readonly required: boolean;
  readonly positional: boolean;
  readonly defaultValue?: unknown;
  readonly readonly?: boolean;
  readonly fixed?: boolean;
}

export function isBinding(value: unknown): value is Binding<unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'kind' in value &&
    value.kind === 'binding'
  );
}

/** Called by generated constructors, never a second handwritten widget catalog. */
export function construct(
  kind: 'widget' | 'value' | 'route' | 'page',
  type: string,
  ctor: string,
  parameters: readonly Parameter[],
  positional: readonly unknown[],
  options: Readonly<Record<string, unknown>>,
): WidgetDescription | DartValue {
  if (options === null || typeof options !== 'object' || Array.isArray(options)) {
    throw new TypeError('Named arguments must be an options object');
  }
  const names = new Set(parameters.filter((p) => !p.positional).map((p) => p.name));
  for (const name of Object.keys(options)) {
    if (!names.has(name)) throw new TypeError(`Unsupported argument: ${type}.${name}`);
  }
  let index = 0;
  const args: Record<string, unknown> = {};
  for (const parameter of parameters) {
    const value = parameter.positional ? positional[index++] : options[parameter.name];
    if (value === undefined) {
      if (parameter.required) {
        throw new TypeError(`Missing required argument: ${type}.${parameter.name}`);
      }
      continue;
    }
    if (isBinding(value) && parameter.fixed) {
      throw new TypeError(
        'This argument is fixed; bind the containing Widget parameter instead',
      );
    }
    if (isBinding(value) && (kind !== 'widget' || parameter.name === 'key')) {
      throw new TypeError(
        'Bind widget properties, not keys or value constructor fields',
      );
    }
    args[parameter.name] =
      kind === 'widget' && Array.isArray(value) ? Object.freeze([...value]) : value;
  }
  const descriptor = {
    kind: kind === 'widget' ? ('widget' as const) : ('value' as const),
    type,
    ctor,
    args: Object.freeze(args),
  };
  if (parameters.some((p) => p.readonly)) {
    return Object.freeze(
      Object.assign(
        descriptor,
        Object.fromEntries(
          parameters
            .filter((p) => p.readonly)
            .map((p) => [
              p.name,
              Object.prototype.hasOwnProperty.call(args, p.name)
                ? args[p.name]
                : p.defaultValue,
            ]),
        ),
      ),
    );
  }
  return Object.freeze(descriptor);
}

export function enumValue<T extends DartEnum>(type: T['type'], name: string): T {
  const key = `${type}\n${name}`;
  let value = enums.get(key);
  if (!value) {
    value = Object.freeze({ kind: 'enum', type, name });
    enums.set(key, value);
    enumTypes.set(value, type);
  }
  return value as T;
}

const enums = new Map<string, DartEnum>();
const enumTypes = new WeakMap<object, string>();
const contextTypes = new Map<string, readonly string[]>();
type ContextState = { type: string; id: number; alive: boolean };
const contextStates = new WeakMap<object, ContextState>();
const contexts = new Map<number, object>();
type BindingHost = typeof globalThis & {
  __flaxCall?: (
    version: number,
    type: string,
    member: string,
    ...args: unknown[]
  ) => unknown;
  __flaxGet?: (version: number, type: string, id: number, member: string) => unknown;
};

/** Generated declarations select the only fields available to application JS. */
export function defineContext(type: string, fields: readonly string[]): void {
  if (contextTypes.has(type)) throw new Error(`Duplicate context type: ${type}`);
  contextTypes.set(type, Object.freeze([...fields]));
}

export function contextHandle(value: unknown, type: string): number | null | undefined {
  if (value === null || value === undefined) return value;
  const state = typeof value === 'object' ? contextStates.get(value) : undefined;
  if (!state || state.type !== type || !state.alive) {
    throw new TypeError('Invalid, foreign, or unmounted BuildContext');
  }
  return state.id;
}

export function invokeStatic(
  type: string,
  member: string,
  args: readonly unknown[],
): unknown {
  const call = (globalThis as BindingHost).__flaxCall;
  if (!call) throw new Error('Dart members require a FlaxView host');
  return call(bindingVersion, type, member, ...args);
}

/** Generated exports share a typed Dart function registry. */
export function invokeTopLevel(id: string, args: readonly unknown[]): unknown {
  const call = (
    globalThis as typeof globalThis & {
      __flaxTopLevel?: (version: number, id: string, ...args: unknown[]) => unknown;
    }
  ).__flaxTopLevel;
  if (!call) throw new Error('Dart functions require a FlaxView host');
  return call(bindingVersion, id, ...args);
}

export type NavigationData =
  | null
  | boolean
  | number
  | string
  | NavigationData[]
  | { [key: string]: NavigationData };

export interface PageLifecycle {
  onDispose(callback: () => void): void;
}

type PageFactory = (
  params: ReadonlySignal<NavigationData>,
  lifecycle: PageLifecycle,
) => Widget;

function stringProperty(value: unknown, name: string): string | null {
  if (value === null || (typeof value !== 'object' && typeof value !== 'function')) {
    return null;
  }
  try {
    const property = (value as Record<string, unknown>)[name];
    return typeof property === 'string' ? property : null;
  } catch {
    return null;
  }
}

function rejectionDetails(value: unknown): {
  message: string;
  stack: string | null;
} {
  const propertyMessage = stringProperty(value, 'message');
  let message = propertyMessage;
  if (message === null) {
    try {
      message = String(value);
    } catch {
      message = 'Promise rejected';
    }
  }
  return { message, stack: stringProperty(value, 'stack') };
}

function errorDetails(
  value: unknown,
): { message: string; stack: string | null } | null {
  if (value === null || (typeof value !== 'object' && typeof value !== 'function'))
    return null;
  try {
    if (Object.prototype.toString.call(value) !== '[object Error]') return null;
  } catch {
    return null;
  }
  return rejectionDetails(value);
}

function reportCleanupError(error: unknown): void {
  const host = globalThis as typeof globalThis & {
    __flaxAsyncError?: (error: string) => void;
  };
  const details = rejectionDetails(error);
  try {
    host.__flaxAsyncError?.(details.stack ?? details.message);
  } catch {
    // An error reporter cannot report its own failure.
  }
}
function settlePromise(
  id: number,
  record: { active: boolean },
  success: boolean,
  value: unknown,
): void {
  if (!record.active || promises.get(id) !== record) return;
  const host = globalThis as typeof globalThis & {
    __flaxPromiseSettlement?: (
      version: number,
      id: number,
      success: boolean,
      value: unknown,
      stack: string | null,
    ) => void;
  };
  const rejection = success ? null : rejectionDetails(value);
  record.active = false;
  promises.delete(id);
  if (!host.__flaxPromiseSettlement) return;
  if (success) {
    host.__flaxPromiseSettlement(bindingVersion, id, true, value, null);
    return;
  }
  host.__flaxPromiseSettlement(
    bindingVersion,
    id,
    false,
    rejection!.message,
    rejection!.stack,
  );
}

const pageFactories = new Map<string, PageFactory>();
let registrationOpen = true;

export function registerPage(name: string, factory: PageFactory): void {
  if (!registrationOpen) throw new Error('Page registration is closed');
  if (typeof name !== 'string' || name.length === 0 || typeof factory !== 'function')
    throw new TypeError('Expected a page name and synchronous factory');
  if (pageFactories.has(name)) throw new Error(`Duplicate page: ${name}`);
  pageFactories.set(name, factory);
}

function freezeData(value: NavigationData): NavigationData {
  if (value !== null && typeof value === 'object') {
    for (const item of Object.values(value)) freezeData(item);
    Object.freeze(value);
  }
  return value;
}

type StateMethod = (this: object, ...args: never[]) => unknown;
const stateTypes = new Map<
  string,
  { fields: readonly string[]; methods: Readonly<Record<string, StateMethod>> }
>();
const stateHandles = new WeakMap<object, { type: string; id: number }>();
const futures = new Map<
  number,
  { resolve(value: unknown): void; reject(error: Error): void }
>();
const promises = new Map<number, { active: boolean }>();

export function defineState(
  type: string,
  fields: readonly string[],
  methods: Readonly<Record<string, StateMethod>>,
): void {
  if (stateTypes.has(type)) throw new Error(`Duplicate State type: ${type}`);
  stateTypes.set(type, { fields, methods });
}

export function invokeInstance(
  receiver: object,
  type: string,
  method: string,
  args: readonly unknown[],
): unknown {
  const ref = stateHandles.get(receiver);
  if (!ref || ref.type !== type) throw new TypeError('Invalid or foreign State');
  const host = globalThis as typeof globalThis & {
    __flaxInstance?: (
      version: number,
      type: string,
      id: number,
      method: string,
      ...args: unknown[]
    ) => unknown;
  };
  if (!host.__flaxInstance) throw new Error('State methods require a Flax host');
  return host.__flaxInstance(bindingVersion, type, ref.id, method, ...args);
}

type ObjectDefinition = {
  fields: readonly string[];
  setters: readonly string[];
  methods: Readonly<Record<string, StateMethod>>;
  removers: readonly string[];
};
const objectTypes = new Map<string, ObjectDefinition>();
const objectHandles = new WeakMap<
  object,
  { type: string; id: number; alive: boolean }
>();
const objects = new Map<number, Set<WeakRef<object>>>();
const constructingExtendedProxies = new WeakSet<object>();
type DeferredObject = {
  type: string;
  factory: string;
  descriptor: DartValue;
  materializer: string | null;
};
const deferredObjects = new WeakMap<object, DeferredObject>();
const iterableObjectTypes = new Set<string>();
let objectSweep: MapIterator<number> | undefined;
type ObjectHost = typeof globalThis & {
  __flaxObject?: (
    version: number,
    type: string,
    id: number,
    operation: string,
    member: string,
    ...args: unknown[]
  ) => unknown;
  __flaxCreateObject?: (version: number, type: string, descriptor: DartValue) => object;
};

function cachedObject(type: string, id: number): object | null {
  const aliases = objects.get(id);
  if (!aliases) return null;
  for (const alias of aliases) {
    const value = alias.deref();
    if (!value) {
      aliases.delete(alias);
      continue;
    }
    const handle = objectHandles.get(value);
    if (handle?.alive && handle.type === type) return value;
  }
  if (aliases.size === 0) objects.delete(id);
  return null;
}

function trackObject(value: object, type: string, id: number): void {
  const current = objectHandles.get(value);
  if (current) {
    if (!current.alive || current.type !== type || current.id !== id)
      throw new TypeError('Object identity mismatch');
    return;
  }
  objectHandles.set(value, { type, id, alive: true });
  const aliases = objects.get(id) ?? new Set<WeakRef<object>>();
  aliases.add(new WeakRef(value));
  objects.set(id, aliases);
}

function transferObjectAlias(source: object, target: object): void {
  const ref = objectHandles.get(source);
  if (!ref || !ref.alive) throw new TypeError('Invalid Dart object alias');
  trackObject(target, ref.type, ref.id);
  const aliases = objects.get(ref.id)!;
  for (const alias of aliases) {
    const value = alias.deref();
    if (!value || value === source) aliases.delete(alias);
  }
  objectHandles.delete(source);
}

export function defineObject(
  type: string,
  fields: ObjectDefinition['fields'],
  setters: readonly string[],
  methods: ObjectDefinition['methods'],
  removers: readonly string[],
): void {
  if (objectTypes.has(type)) throw new Error(`Duplicate object type: ${type}`);
  objectTypes.set(type, { fields, setters, methods, removers });
}

type StreamDefinition = {
  fields: readonly string[];
  methods: Readonly<Record<string, StateMethod>>;
};
const streamTypes = new Map<string, StreamDefinition>();

export function defineStream(
  type: string,
  fields: readonly string[],
  methods: Readonly<Record<string, StateMethod>>,
): void {
  if (streamTypes.has(type)) throw new Error(`Duplicate Stream type: ${type}`);
  streamTypes.set(type, { fields, methods });
}

type StreamHost = typeof globalThis & {
  __flaxCreateStream?: (version: number, type: string, descriptor: DartValue) => object;
  __flaxStream?: (
    version: number,
    type: string,
    id: number,
    operation: string,
    member: string,
    ...args: unknown[]
  ) => unknown;
  __flaxCreateStreamIterator?: (version: number, streamId: number) => number;
  __flaxStreamIterator?: (
    version: number,
    iteratorId: number,
    operation: 'next' | 'current' | 'cancel',
  ) => unknown;
  __flaxCreateAsyncIterableStream?: (
    version: number,
    type: string,
    sourceId: number,
  ) => object;
};

type AsyncIterableSource = {
  source: AsyncIterable<unknown>;
  iterator: AsyncIterator<unknown> | null;
  closed: boolean;
  pendingReject: ((reason: unknown) => void) | null;
};
const asyncIterableSources = new Map<number, AsyncIterableSource>();
let nextAsyncIterableSource = 1;

export function constructAsyncIterableStream<T>(
  type: string,
  source: AsyncIterable<T>,
): object {
  if (source === null || (typeof source !== 'object' && typeof source !== 'function'))
    throw new TypeError('Expected an AsyncIterable');
  const create = (globalThis as StreamHost).__flaxCreateAsyncIterableStream;
  if (!create) throw new Error('AsyncIterable Streams require a Flax host');
  const id = nextAsyncIterableSource++;
  asyncIterableSources.set(id, {
    source: source as AsyncIterable<unknown>,
    iterator: null,
    closed: false,
    pendingReject: null,
  });
  try {
    return create(bindingVersion, type, id);
  } catch (error) {
    asyncIterableSources.delete(id);
    throw error;
  }
}

function asyncIterableSource(id: number): AsyncIterableSource {
  const record = asyncIterableSources.get(id);
  if (!record || record.closed) throw new Error('Released AsyncIterable Stream');
  return record;
}

function asyncIterableNext(id: number): Promise<readonly unknown[]> {
  let record: AsyncIterableSource;
  try {
    record = asyncIterableSource(id);
    if (record.iterator === null) {
      const factory = record.source[Symbol.asyncIterator];
      if (typeof factory !== 'function')
        throw new TypeError('Expected an AsyncIterable');
      const iterator = Reflect.apply(factory, record.source, []);
      if (iterator === null || typeof iterator !== 'object')
        throw new TypeError('Invalid AsyncIterator');
      record.iterator = iterator;
    }
    if (record.pendingReject !== null) throw new Error('Concurrent AsyncIterable next');
    const next = record.iterator.next();
    let rejectPending!: (reason: unknown) => void;
    const pending = new Promise<IteratorResult<unknown>>((resolve, reject) => {
      rejectPending = reject;
      Promise.resolve(next).then(resolve, reject);
    });
    record.pendingReject = rejectPending;
    return pending.then(
      (result) => {
        record.pendingReject = null;
        if (result === null || typeof result !== 'object')
          throw new TypeError('Invalid AsyncIterator result');
        if (result.done) {
          record.closed = true;
          asyncIterableSources.delete(id);
          return [true] as const;
        }
        return [false, result.value] as const;
      },
      (error) => {
        record.pendingReject = null;
        throw error;
      },
    );
  } catch (error) {
    return Promise.reject(error);
  }
}

function asyncIterableReturn(id: number): Promise<void> {
  const record = asyncIterableSources.get(id);
  if (!record || record.closed) return Promise.resolve();
  record.closed = true;
  asyncIterableSources.delete(id);
  const rejectPending = record.pendingReject;
  record.pendingReject = null;
  rejectPending?.(new Error('AsyncIterable Stream cancelled'));
  if (record.iterator === null) return Promise.resolve();
  const close = record.iterator.return;
  if (typeof close !== 'function') return Promise.resolve();
  try {
    return Promise.resolve(Reflect.apply(close, record.iterator, [])).then(() => {});
  } catch (error) {
    return Promise.reject(error);
  }
}

function cancelAsyncIterables(): void {
  for (const id of [...asyncIterableSources.keys()]) {
    void asyncIterableReturn(id).catch(reportCleanupError);
  }
}

export function constructStream(
  _kind: 'stream',
  type: string,
  ctor: string,
  parameters: readonly Parameter[],
  positional: readonly unknown[],
  options: Readonly<Record<string, unknown>>,
): object {
  const descriptor = construct(
    'value',
    type,
    ctor,
    parameters,
    positional,
    options,
  ) as DartValue;
  const create = (globalThis as StreamHost).__flaxCreateStream;
  if (!create) throw new Error('Dart Streams require a Flax host');
  return create(bindingVersion, type, descriptor);
}

function callStream(
  receiver: object,
  type: string,
  operation: string,
  member: string,
  args: readonly unknown[],
): unknown {
  const ref = objectHandles.get(receiver);
  if (!ref || !ref.alive) throw new TypeError('Invalid or released Dart Stream');
  const definition = streamTypes.get(type);
  if (!definition) throw new TypeError(`Unknown Stream type: ${type}`);
  const call = (globalThis as StreamHost).__flaxStream;
  if (!call) throw new Error('Dart Streams require a Flax host');
  return call(bindingVersion, type, ref.id, operation, member, ...args);
}

export function invokeStream(
  receiver: object,
  type: string,
  method: string,
  args: readonly unknown[],
): unknown {
  if (args.some(isBinding))
    throw new TypeError('Stream methods do not accept bindings');
  return callStream(receiver, type, 'call', method, args);
}

function streamWrapper(type: string, view: string, id: number): object {
  const cached = cachedObject(view, id);
  if (cached) return cached;
  const definition = streamTypes.get(type);
  if (!definition) throw new TypeError(`Unknown Stream type: ${type}`);
  const value = {};
  for (const field of definition.fields) {
    Object.defineProperty(value, field, {
      enumerable: true,
      get: () => callStream(value, type, 'get', field, []),
    });
  }
  for (const [name, method] of Object.entries(definition.methods)) {
    Object.defineProperty(value, name, { value: method.bind(value) });
  }
  Object.defineProperty(value, Symbol.asyncIterator, {
    value: () => streamAsyncIterator(value, type),
  });
  const frozen = Object.freeze(value);
  trackObject(frozen, view, id);
  return frozen;
}

function streamAsyncIterator(stream: object, _type: string): AsyncIterator<unknown> {
  const host = globalThis as StreamHost;
  const ref = objectHandles.get(stream);
  if (!ref?.alive) throw new TypeError('Invalid or released Dart Stream');
  const create = host.__flaxCreateStreamIterator;
  const call = host.__flaxStreamIterator;
  if (!create || !call) throw new Error('Dart Stream iteration requires a Flax host');
  const iteratorId = create(bindingVersion, ref.id);
  let pending = false;
  let finished = false;

  return {
    async next(): Promise<IteratorResult<unknown>> {
      if (pending) throw new Error('Concurrent Stream iterator next');
      if (finished) return Promise.resolve({ value: undefined, done: true });
      pending = true;
      try {
        const hasValue = await call(bindingVersion, iteratorId, 'next');
        if (hasValue !== true) {
          finished = true;
          return { value: undefined, done: true };
        }
        return {
          value: call(bindingVersion, iteratorId, 'current'),
          done: false,
        };
      } finally {
        pending = false;
      }
    },
    async return(): Promise<IteratorResult<unknown>> {
      finished = true;
      await call(bindingVersion, iteratorId, 'cancel');
      return { value: undefined, done: true };
    },
    async throw(reason?: unknown): Promise<IteratorResult<unknown>> {
      finished = true;
      await call(bindingVersion, iteratorId, 'cancel');
      throw reason;
    },
  };
}

export function constructObject(
  _kind: 'object',
  type: string,
  ctor: string,
  parameters: readonly Parameter[],
  positional: readonly unknown[],
  options: Readonly<Record<string, unknown>>,
): object {
  const descriptor = construct(
    'value',
    type,
    ctor,
    parameters,
    positional,
    options,
  ) as DartValue;
  const create = (globalThis as ObjectHost).__flaxCreateObject;
  if (!create) throw new Error('Dart objects require a Flax host');
  return create(bindingVersion, type, descriptor);
}

/** Records a generic factory call until a concrete Dart parameter supplies T. */
export function constructDeferredObject(
  type: string,
  factory: string,
  parameters: readonly Parameter[],
  positional: readonly unknown[],
  options: Readonly<Record<string, unknown>>,
): object {
  const descriptor = construct(
    'value',
    type,
    factory,
    parameters,
    positional,
    options,
  ) as DartValue;
  const value = createObjectWrapper(type);
  deferredObjects.set(value, {
    type,
    factory,
    descriptor,
    materializer: null,
  });
  return Object.freeze(value);
}

export function constructProxy(
  type: string,
  parameters: readonly Parameter[],
  args: readonly unknown[],
  implementation: object,
  names: readonly string[],
  getters: readonly string[],
  setters: readonly string[],
): object {
  const positional = parameters.filter((p) => p.positional).length;
  const hasNamed = parameters.some((p) => !p.positional);
  if (args.length > positional + (hasNamed ? 1 : 0))
    throw new TypeError('Too many proxy constructor arguments');
  if (
    implementation === null ||
    typeof implementation !== 'object' ||
    Object.keys(implementation).some(
      (k) => !names.includes(k) && !getters.includes(k) && !setters.includes(k),
    )
  )
    throw new TypeError('Invalid proxy implementation');
  const descriptor = construct(
    'value',
    type,
    '@implementation',
    parameters,
    args.slice(0, positional),
    (args[positional] ?? {}) as Record<string, unknown>,
  ) as DartValue;
  const values: Record<string, unknown> = { ...descriptor.args };
  for (const name of names) {
    const method: unknown = proxyProperty(implementation, name)?.value;
    if (typeof method !== 'function')
      throw new TypeError(`Missing proxy method: ${name}`);
    values[`@call:${name}`] = method.bind(implementation);
  }
  for (const kind of ['get', 'set'] as const) {
    for (const name of kind === 'get' ? getters : setters) {
      if (names.includes(name))
        throw new TypeError(`Conflicting proxy member: ${name}`);
      const accessor = proxyProperty(implementation, name)?.[kind];
      if (typeof accessor !== 'function')
        throw new TypeError(`Missing proxy ${kind} accessor: ${name}`);
      values[`@${kind}:${name}`] = (...args: unknown[]) =>
        synchronous(
          Reflect.apply(accessor, implementation, args),
          `Proxy ${kind} ${name}`,
        );
    }
  }
  const create = (globalThis as ObjectHost).__flaxCreateObject;
  if (!create) throw new Error('Dart proxies require a Flax host');
  return create(bindingVersion, type, { ...descriptor, args: Object.freeze(values) });
}

function proxyProperty(
  implementation: object,
  name: string,
  stopBefore?: object,
): PropertyDescriptor | undefined {
  for (
    let object: object | null = implementation;
    object !== null && object !== stopBefore;
    object = Object.getPrototypeOf(object)
  ) {
    const descriptor = Object.getOwnPropertyDescriptor(object, name);
    if (descriptor) return descriptor;
  }
  return undefined;
}

/**
 * Attaches a newly-created Dart extends proxy to the JS instance currently
 * being initialized by a generated abstract base class.
 */
export function constructExtendedProxy(
  receiver: object,
  basePrototype: object,
  type: string,
  parameters: readonly Parameter[],
  args: readonly unknown[],
  names: readonly string[],
  getters: readonly string[],
  setters: readonly string[],
  superMembers: readonly string[],
): void {
  if (receiver === null || typeof receiver !== 'object')
    throw new TypeError('Expected a proxy class instance');
  if (objectHandles.has(receiver))
    throw new TypeError('Proxy class instance is already initialized');

  const positional = parameters.filter((p) => p.positional).length;
  const hasNamed = parameters.some((p) => !p.positional);
  if (args.length > positional + (hasNamed ? 1 : 0))
    throw new TypeError('Too many proxy constructor arguments');

  const descriptor = construct(
    'value',
    type,
    '@implementation',
    parameters,
    args.slice(0, positional),
    (args[positional] ?? {}) as Record<string, unknown>,
  ) as DartValue;
  const values: Record<string, unknown> = { ...descriptor.args };

  for (const name of names) {
    const method: unknown = proxyProperty(receiver, name, basePrototype)?.value;
    if (typeof method !== 'function') {
      if (superMembers.includes(name)) continue;
      throw new TypeError(`Missing proxy method: ${name}`);
    }
    values[`@call:${name}`] = method.bind(receiver);
  }
  for (const kind of ['get', 'set'] as const) {
    for (const name of kind === 'get' ? getters : setters) {
      if (names.includes(name))
        throw new TypeError(`Conflicting proxy member: ${name}`);
      const accessor = proxyProperty(receiver, name, basePrototype)?.[kind];
      const superName = `${kind}:${name}`;
      if (typeof accessor !== 'function') {
        if (superMembers.includes(superName)) continue;
        throw new TypeError(`Missing proxy ${kind} accessor: ${name}`);
      }
      values[`@${kind}:${name}`] = (...callArgs: unknown[]) =>
        synchronous(
          Reflect.apply(accessor, receiver, callArgs),
          `Proxy ${kind} ${name}`,
        );
    }
  }

  const create = (globalThis as ObjectHost).__flaxCreateObject;
  if (!create) throw new Error('Dart proxies require a Flax host');
  constructingExtendedProxies.add(receiver);
  try {
    const created = create(bindingVersion, type, {
      ...descriptor,
      args: Object.freeze(values),
    });
    const ref = objectHandles.get(created);
    if (!ref || !ref.alive || ref.type !== type)
      throw new TypeError('Invalid Dart proxy result');
    transferObjectAlias(created, receiver);
  } finally {
    constructingExtendedProxies.delete(receiver);
  }
}

export function invokeProxySuper(
  receiver: object,
  type: string,
  member: string,
  args: readonly unknown[],
): unknown {
  if (constructingExtendedProxies.has(receiver) && !objectHandles.has(receiver)) {
    throw new Error('Dart proxy construction is not complete');
  }
  return invokeObject(receiver, type, `@super:${member}`, args);
}

function callObject(
  receiver: object,
  type: string,
  operation: string,
  member: string,
  args: readonly unknown[],
): unknown {
  const ref = objectHandles.get(receiver);
  if (!ref) {
    if (deferredObjects.has(receiver))
      throw new Error('Deferred Dart object has not been materialized');
    throw new TypeError('Invalid or foreign Dart object');
  }
  if (ref.type !== type) throw new TypeError('Invalid or foreign Dart object');
  if (!ref.alive) {
    if (operation === 'call' && objectTypes.get(type)!.removers.includes(member))
      return;
    throw new Error('Disposed Dart object');
  }
  const call = (globalThis as ObjectHost).__flaxObject;
  if (!call) throw new Error('Dart objects require a Flax host');
  return call(bindingVersion, type, ref.id, operation, member, ...args);
}

export function invokeObject(
  receiver: object,
  type: string,
  method: string,
  args: readonly unknown[],
): unknown {
  if (args.some(isBinding))
    throw new TypeError('Object methods do not accept bindings');
  return callObject(receiver, type, 'call', method, args);
}

export function invokeObjectStatic(type: string, member: string): unknown {
  const call = (globalThis as ObjectHost).__flaxObject;
  if (!call) throw new Error('Dart objects require a Flax host');
  return call(bindingVersion, type, 0, 'static', member);
}

function createObjectWrapper(type: string): object {
  const definition = objectTypes.get(type);
  if (!definition) throw new TypeError(`Unknown object: ${type}`);
  const value = {};
  for (const field of new Set([...definition.fields, ...definition.setters])) {
    Object.defineProperty(value, field, {
      enumerable: true,
      ...(definition.fields.includes(field)
        ? {
            get() {
              return callObject(value, type, 'get', field, []);
            },
          }
        : {}),
      ...(definition.setters.includes(field)
        ? {
            set(input: unknown) {
              if (isBinding(input))
                throw new TypeError('Object setters do not accept bindings');
              callObject(value, type, 'set', field, [input]);
            },
          }
        : {}),
    });
  }
  for (const [name, method] of Object.entries(definition.methods)) {
    Object.defineProperty(value, name, { value: method.bind(value) });
  }
  if (iterableObjectTypes.has(type)) {
    Object.defineProperty(value, Symbol.iterator, {
      value: function* (): IterableIterator<unknown> {
        const copy = callObject(value, type, 'call', 'toArray', []);
        if (!Array.isArray(copy)) throw new TypeError('Invalid Dart Iterable copy');
        yield* copy;
      },
    });
  }
  return value;
}

function objectWrapper(type: string, id: number): object {
  const cached = cachedObject(type, id);
  if (cached) return cached;
  const value = createObjectWrapper(type);
  const frozen = Object.freeze(value);
  trackObject(frozen, type, id);
  return frozen;
}

function scopedObjectWrapper(type: string, id: number): object {
  const value = Object.freeze(createObjectWrapper(type));
  trackObject(value, type, id);
  return value;
}

/** A plain-data snapshot, without invoking getters or serializing through JSON. */
export function copyNavigationData(
  value: unknown,
  path = new Set<object>(),
): NavigationData {
  if (value === null || typeof value === 'boolean' || typeof value === 'string')
    return value;
  if (typeof value === 'number') {
    if (
      !Number.isFinite(value) ||
      (Number.isInteger(value) && !Number.isSafeInteger(value))
    )
      throw new TypeError('Invalid navigation number');
    return value;
  }
  if (typeof value !== 'object' || path.has(value))
    throw new TypeError('Invalid or cyclic navigation data');
  if (Object.getOwnPropertySymbols(value).length)
    throw new TypeError('Navigation data requires string keys');
  const array = Array.isArray(value);
  if (
    !array &&
    Object.getPrototypeOf(value) !== Object.prototype &&
    Object.getPrototypeOf(value) !== null
  )
    throw new TypeError('Expected a plain object');
  if (
    contextStates.has(value) ||
    stateHandles.has(value) ||
    objectHandles.has(value) ||
    enumTypes.has(value)
  )
    throw new TypeError('Host references are not navigation data');
  path.add(value);
  try {
    const read = (key: string): NavigationData => {
      const field = Object.getOwnPropertyDescriptor(value, key);
      if (!field || !('value' in field))
        throw new TypeError('Expected a data property');
      return copyNavigationData(field.value, path);
    };
    return array
      ? Array.from({ length: value.length }, (_, i) => read(String(i)))
      : Object.fromEntries(Object.keys(value).map((key) => [key, read(key)]));
  } finally {
    path.delete(value);
  }
}

// One synchronous helper boundary per realm; no browser, Node, or module loader.
Object.assign(globalThis, {
  __flaxBindings: Object.freeze({
    version: bindingVersion,
    invokeCallback(
      callback: (...args: unknown[]) => unknown,
      positionalCount: number,
      ...values: unknown[]
    ): unknown {
      const positional = values.slice(0, positionalCount);
      const namedCount = values[positionalCount] as number;
      if (namedCount === 0) return Reflect.apply(callback, undefined, positional);
      const options: Record<string, unknown> = {};
      for (let i = 0; i < namedCount; i++) {
        options[values[positionalCount + 1 + i * 2] as string] =
          values[positionalCount + 2 + i * 2];
      }
      return Reflect.apply(callback, undefined, [...positional, options]);
    },
    componentType,
    component(value: object): ComponentInfo {
      const info = components.get(value);
      if (!info) throw new TypeError('Unknown or foreign component');
      Object.freeze(value);
      return info;
    },
    createComponentState(widget: object, id: number): object {
      const value = synchronous(
        Reflect.apply((widget as { createState: Function }).createState, widget, []),
      );
      const state =
        value !== null && typeof value === 'object'
          ? componentStates.get(value)
          : undefined;
      if (!state || state.claimed)
        throw new TypeError('createState must return a fresh State');
      state.claimed = true;
      state.widget = widget;
      state.id = id;
      return value as object;
    },
    updateComponentState(value: object, widget: object): void {
      const state = componentStates.get(value);
      if (!state || state.retired) throw new Error('Disposed component State');
      state.widget = widget;
    },
    releaseComponentState(value: object): void {
      const state = componentStates.get(value);
      if (state) {
        state.retired = true;
        state.id = null;
        state.widget = null;
      }
    },
    invokeComponent(value: object, method: string, ...args: unknown[]): unknown {
      const state = componentStates.get(value);
      if (state?.retired) throw new Error('Disposed component State');
      const fn = (value as Record<string, unknown>)[method];
      if (typeof fn !== 'function')
        throw new TypeError(`Missing component method: ${method}`);
      return synchronous(Reflect.apply(fn, value, args));
    },
    invokeSynchronous(fn: () => unknown): unknown {
      return synchronous(fn());
    },
    finishRegistration(): number {
      registrationOpen = false;
      return pageFactories.size;
    },
    createPage(name: string, arguments_: NavigationData): object {
      if (registrationOpen)
        throw new Error('Page initialization requires a mounted host');
      const factory = pageFactories.get(name);
      if (!factory) throw new Error(`Unknown page: ${name}`);
      const params = signal(freezeData(copyNavigationData(arguments_)));
      const cleanup: (() => void)[] = [];
      let initializing = true;
      let disposed = false;
      const lifecycle: PageLifecycle = Object.freeze({
        onDispose(callback: () => void): void {
          if (!initializing)
            throw new Error('onDispose requires the synchronous page factory');
          if (typeof callback !== 'function')
            throw new TypeError('Expected a cleanup function');
          cleanup.push(callback);
        },
      });
      const dispose = (): void => {
        if (disposed) return;
        disposed = true;
        while (cleanup.length) {
          try {
            const result: unknown = cleanup.pop()!();
            if (result instanceof Promise) {
              void result.catch(reportCleanupError);
              throw new TypeError('Page cleanup must be synchronous');
            }
          } catch (error) {
            reportCleanupError(error);
          }
        }
      };
      try {
        const widget = factory(
          computed(() => params.value),
          lifecycle,
        );
        return Object.freeze({
          widget,
          dispose,
          update(value: NavigationData): void {
            if (disposed) throw new Error('Disposed page content');
            params.value = freezeData(copyNavigationData(value));
          },
        });
      } catch (error) {
        initializing = false;
        dispose();
        throw error;
      } finally {
        initializing = false;
      }
    },
    collectionShape(value: object): string | null {
      if (Array.isArray(value)) return 'list';
      if (value instanceof Map) return 'map';
      if (value instanceof Set) return 'set';
      if (
        typeof (value as { [Symbol.iterator]?: unknown })[Symbol.iterator] ===
        'function'
      )
        return 'iterable';
      const prototype = Object.getPrototypeOf(value);
      if (prototype === null || prototype === Object.prototype) return 'record';
      return null;
    },
    collectionEntries(
      value: Iterable<unknown> | Map<unknown, unknown> | Record<string, unknown>,
    ): unknown[] {
      return Array.isArray(value)
        ? value
        : value instanceof Map
          ? [...value.entries()]
          : value instanceof Set || Symbol.iterator in Object(value)
            ? [...(value as Iterable<unknown>)]
            : Object.entries(value);
    },
    emptyRecord(): object {
      return {};
    },
    emptyCollection(kind: string): object {
      return kind === 'map' ? new Map() : kind === 'set' ? new Set() : [];
    },
    mapSet(map: Map<unknown, unknown>, key: unknown, value: unknown): void {
      map.set(key, value);
    },
    setAdd(set: Set<unknown>, value: unknown): void {
      set.add(value);
    },
    tryObjectHandle(value: object): number | null {
      const ref = objectHandles.get(value);
      if (ref && !ref.alive) throw new Error('Released Dart object');
      return ref?.id ?? null;
    },
    deferredObject(value: object): DeferredObject | null {
      const record = deferredObjects.get(value);
      return record ? Object.freeze({ ...record }) : null;
    },
    materializeDeferred(
      value: object,
      type: string,
      id: number,
      materializer: string,
    ): void {
      const record = deferredObjects.get(value);
      if (!record || record.type !== type)
        throw new TypeError('Invalid deferred Dart object');
      if (record.materializer !== null && record.materializer !== materializer)
        throw new TypeError('Deferred Dart object type mismatch');
      record.materializer = materializer;
      trackObject(value, type, id);
    },
    defineCollection(type: string, kind: string): void {
      if (objectTypes.has(type)) return;
      const names =
        kind === 'map'
          ? ['get', 'set', 'containsKey', 'remove', 'clear', 'toMap']
          : kind === 'list'
            ? [
                'contains',
                'get',
                'set',
                'add',
                'addAll',
                'removeAt',
                'clear',
                'toArray',
              ]
            : kind === 'set'
              ? ['contains', 'add', 'addAll', 'remove', 'clear', 'toArray', 'toSet']
              : ['contains', 'toArray'];
      const methods: Record<string, StateMethod> = {};
      for (const name of names) {
        methods[name] = function (this: object, ...args: unknown[]): unknown {
          return invokeObject(this, type, name, args);
        };
      }
      if (kind !== 'map') iterableObjectTypes.add(type);
      defineObject(
        type,
        kind === 'map' ? ['length'] : ['length', 'isEmpty'],
        [],
        methods,
        [],
      );
    },
    object: objectWrapper,
    scopedObject: scopedObjectWrapper,
    streamObject: streamWrapper,
    asyncIterableNext,
    asyncIterableReturn,
    cancelAsyncIterables,
    errorDetails,
    dartError(id: number, message: string, stack: string | null): Error {
      const cached = cachedObject('flax:dart-error', id);
      if (cached) return cached as Error;
      const value = new Error(message);
      if (stack !== null) {
        try {
          value.stack = stack;
        } catch {
          // Error stacks are diagnostic and engine-specific.
        }
      }
      trackObject(value, 'flax:dart-error', id);
      return value;
    },
    contextHandle,
    dartWidget(id: number): object {
      const cached = cachedObject('flax:dart-widget', id);
      if (cached) return cached;
      const value = Object.freeze(
        Object.defineProperty({}, 'kind', { value: 'dart-widget' }),
      );
      trackObject(value, 'flax:dart-widget', id);
      return value;
    },
    function(type: string, id: number, shape: string): object {
      const cached = cachedObject(type, id);
      if (cached) return cached;
      const parameters = JSON.parse(shape) as CallbackParameter[];
      const positional = parameters.filter((parameter) => parameter.positional);
      const named = parameters.filter((parameter) => !parameter.positional);
      const requiredPositional = positional.filter(
        (parameter) => parameter.required,
      ).length;
      const value = (...args: unknown[]): unknown => {
        if (!objectHandles.get(value)!.alive) throw new Error('Released Dart function');
        if (named.length === 0) {
          if (args.length < requiredPositional || args.length > positional.length)
            throw new TypeError('Invalid Dart function arity');
          let count = args.length;
          while (count > requiredPositional && args[count - 1] === undefined) count--;
          if (args.slice(requiredPositional, count).includes(undefined))
            throw new TypeError('Optional positional arguments cannot contain holes');
          args.length = count;
        } else {
          if (args.length < positional.length || args.length > positional.length + 1)
            throw new TypeError('Invalid Dart function arity');
        }
        const call = (
          globalThis as typeof globalThis & {
            __flaxFunction?: (
              version: number,
              type: string,
              id: number,
              ...args: unknown[]
            ) => unknown;
          }
        ).__flaxFunction;
        if (!call) throw new Error('Dart functions require a Flax host');
        const positionalValues = args.slice(0, positional.length);
        const namedValues: unknown[] = [];
        if (named.length !== 0) {
          const input = args[positional.length];
          if (input === undefined) {
            if (named.some((parameter) => parameter.required))
              throw new TypeError('Missing required named Dart function argument');
          } else {
            if (
              input === null ||
              typeof input !== 'object' ||
              Array.isArray(input) ||
              Object.getOwnPropertySymbols(input).length !== 0
            )
              throw new TypeError('Invalid named Dart function arguments');
            const keys = Object.keys(input);
            if (keys.some((key) => !named.some((parameter) => parameter.name === key)))
              throw new TypeError('Unknown named Dart function argument');
            for (const parameter of named) {
              const present = Object.prototype.hasOwnProperty.call(
                input,
                parameter.name,
              );
              const field = present
                ? Object.getOwnPropertyDescriptor(input, parameter.name)
                : undefined;
              if (field && !('value' in field))
                throw new TypeError('Named Dart arguments require data properties');
              const fieldValue = field?.value;
              if (parameter.required && (!present || fieldValue === undefined))
                throw new TypeError('Missing required named Dart function argument');
              if (present && fieldValue !== undefined)
                namedValues.push(parameter.name, fieldValue);
            }
          }
        }
        return call(
          bindingVersion,
          type,
          id,
          positionalValues.length,
          ...positionalValues,
          namedValues.length / 2,
          ...namedValues,
        );
      };
      Object.defineProperty(value, 'kind', { value: 'dart-function' });
      const frozen = Object.freeze(value);
      trackObject(frozen, type, id);
      return frozen;
    },
    objectHandle(value: object): number {
      const ref = objectHandles.get(value);
      if (!ref || !ref.alive)
        throw new TypeError('Invalid, foreign, or disposed Dart object');
      return ref.id;
    },
    sweepObjects(): number[] {
      const expired: number[] = [];
      objectSweep ??= objects.keys();
      for (let i = 0; i < 64; i++) {
        const next = objectSweep.next();
        if (next.done) {
          objectSweep = undefined;
          break;
        }
        const aliases = objects.get(next.value);
        if (!aliases) continue;
        for (const alias of aliases) {
          if (!alias.deref()) aliases.delete(alias);
        }
        if (aliases.size === 0) {
          objects.delete(next.value);
          expired.push(next.value);
        }
      }
      return expired;
    },
    releaseObject(id: number): void {
      for (const alias of objects.get(id) ?? []) {
        const value = alias.deref();
        const handle = value && objectHandles.get(value);
        if (handle) handle.alive = false;
      }
      objects.delete(id);
    },
    enumValue,
    enumType(value: object): string | null {
      return enumTypes.get(value) ?? null;
    },
    copyData: copyNavigationData,
    array: (...values: unknown[]) => Object.freeze(values),
    record: (...values: unknown[]) =>
      Object.freeze(
        Object.fromEntries(
          Array.from({ length: values.length / 2 }, (_, i) => [
            values[i * 2],
            values[i * 2 + 1],
          ]),
        ),
      ),
    future(id: number): Promise<unknown> {
      const promise = new Promise((resolve, reject) =>
        futures.set(id, { resolve, reject }),
      );
      // A host Future can be deliberately ignored just like a Dart Future.
      // Event-returned promises have a separate observable error boundary.
      void promise.catch(() => {});
      return promise;
    },
    settleFuture(id: number, success: boolean, value: unknown): void {
      const pending = futures.get(id);
      if (!pending) return;
      futures.delete(id);
      if (success) pending.resolve(value);
      else pending.reject(new Error(String(value)));
    },
    observePromise(id: number, value: unknown): void {
      if (
        value === null ||
        (typeof value !== 'object' && typeof value !== 'function')
      ) {
        throw new TypeError('Future callbacks must return a Promise');
      }
      let then: unknown;
      try {
        then = (value as { then?: unknown }).then;
      } catch (error) {
        const record = { active: true };
        promises.set(id, record);
        void Promise.reject(error)
          .catch((reason) => settlePromise(id, record, false, reason))
          .catch(reportCleanupError);
        return;
      }
      if (typeof then !== 'function') {
        throw new TypeError('Future callbacks must return a Promise');
      }
      const record = { active: true };
      promises.set(id, record);
      const assimilated = Promise.resolve({
        then(resolve: (result: unknown) => void, reject: (reason: unknown) => void) {
          Reflect.apply(then as Function, value, [resolve, reject]);
        },
      });
      void assimilated
        .then(
          (result) => settlePromise(id, record, true, result),
          (reason) => settlePromise(id, record, false, reason),
        )
        .catch(reportCleanupError);
    },
    cancelPromises(): void {
      for (const record of promises.values()) record.active = false;
      promises.clear();
    },
    observeEvent(value: unknown): void {
      if (value instanceof Promise) {
        void value.catch((error) => {
          const host = globalThis as typeof globalThis & {
            __flaxAsyncError?: (error: string) => void;
          };
          host.__flaxAsyncError?.(
            error instanceof Error ? (error.stack ?? error.message) : String(error),
          );
        });
      }
    },
    state(type: string, id: number): object {
      const definition = stateTypes.get(type);
      if (!definition) throw new TypeError(`Unknown State: ${type}`);
      const value = {};
      stateHandles.set(value, { type, id });
      definition.fields.forEach((field) => {
        Object.defineProperty(value, field, {
          enumerable: true,
          get() {
            const host = globalThis as typeof globalThis & {
              __flaxStateGet?: (
                version: number,
                type: string,
                id: number,
                field: string,
              ) => unknown;
            };
            if (!host.__flaxStateGet)
              throw new Error('State getters require a Flax host');
            return host.__flaxStateGet(bindingVersion, type, id, field);
          },
        });
      });
      for (const [name, method] of Object.entries(definition.methods)) {
        Object.defineProperty(value, name, { value: method.bind(value) });
      }
      return Object.freeze(value);
    },
    context(type: string, id: number): object {
      const cached = contexts.get(id);
      if (cached) return cached;
      const fields = contextTypes.get(type);
      if (!fields) throw new TypeError(`Unregistered context type: ${type}`);
      const state = { type, id, alive: true };
      const value = {};
      for (const field of fields) {
        Object.defineProperty(value, field, {
          enumerable: true,
          get() {
            if (!state.alive) {
              if (field === 'mounted') return false;
              throw new Error('Unmounted BuildContext');
            }
            const get = (globalThis as BindingHost).__flaxGet;
            if (!get) throw new Error('Dart members require a FlaxView host');
            return get(bindingVersion, type, id, field);
          },
        });
      }
      Object.defineProperty(value, 'findAncestorWidgetOfExactType', {
        value: (constructor: ComponentConstructor) => {
          if (!state.alive) throw new Error('Unmounted BuildContext');
          const info = componentType(constructor);
          const call = (
            globalThis as typeof globalThis & {
              __flaxAncestor?: (
                version: number,
                type: string,
                context: number,
                component: number,
              ) => unknown;
            }
          ).__flaxAncestor;
          if (!call) throw new Error('Ancestor queries require a Flax host');
          return call(bindingVersion, type, id, info.type);
        },
      });
      contextStates.set(value, state);
      contexts.set(id, Object.freeze(value));
      return value;
    },
    releaseContext(id: number): void {
      const value = contexts.get(id);
      if (value) contextStates.get(value)!.alive = false;
      contexts.delete(id);
    },
  }),
});

let mounted = false;

export function mountRoot(widget: Widget): void {
  if (mounted) throw new Error('This runtime already has an application root');
  const host = globalThis as typeof globalThis & {
    __flaxMount?: (root: Widget, version: number) => void;
  };
  if (!host.__flaxMount) throw new Error('runApp requires a FlaxView host');
  host.__flaxMount(widget, bindingVersion);
  mounted = true;
}
