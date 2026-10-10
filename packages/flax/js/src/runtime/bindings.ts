import { computed, signal, type Binding, type ReadonlySignal } from './index.js';
import { ReferenceCache } from './references.js';

/** Experimental generated-binding extension. Independent of the native C ABI. */
export const bindingVersion = 24;

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
  readonly __dartEnum: unique symbol;
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
  variant: string | null;
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
    variant: null,
    retired: false,
    claimed: false,
  });
}

/** Selects a pre-generated real Dart State composition before createState returns. */
export function registerComponentStateVariant(instance: object, variant: string): void {
  const state = componentStates.get(instance);
  if (!state || state.claimed || state.retired)
    throw new Error('State variant must be selected by a fresh State');
  if (typeof variant !== 'string' || variant.length === 0)
    throw new TypeError('Expected a State variant identity');
  if (state.variant !== null && state.variant !== variant)
    throw new Error('State variant is already selected');
  state.variant = variant;
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

/** Installs one shared prototype. Identity never occupies a business property. */
export function defineEnum(
  type: string,
  names: readonly string[],
  members: object = {},
  cached: readonly string[] = [],
  parents: readonly string[] = [],
): void {
  if (enumDefinitions.has(type)) throw new Error(`Duplicate enum type: ${type}`);
  if (new Set(names).size !== names.length)
    throw new TypeError('Duplicate enum constant');
  const prototype = Object.create(null) as object;
  const requireReceiver = (value: object) => {
    const identity = enumIdentities.get(value);
    if (!identity || identity.type !== type)
      throw new TypeError('Invalid or foreign Dart enum');
    return identity;
  };
  Object.defineProperties(prototype, {
    name: {
      get(this: object) {
        return requireReceiver(this).name;
      },
      configurable: true,
    },
    index: {
      get(this: object) {
        return requireReceiver(this).index;
      },
      configurable: true,
    },
  });
  for (const [name, descriptor] of Object.entries(
    Object.getOwnPropertyDescriptors(members),
  )) {
    const values = cached.includes(name) ? new WeakMap<object, unknown>() : undefined;
    Object.defineProperty(prototype, name, {
      ...(descriptor.value === undefined
        ? {}
        : {
            value(this: object, ...args: unknown[]) {
              requireReceiver(this);
              return descriptor.value.apply(this, args);
            },
          }),
      ...(descriptor.get
        ? {
            get(this: object) {
              requireReceiver(this);
              if (values?.has(this)) return values.get(this);
              const value = descriptor.get!.call(this);
              values?.set(this, value);
              return value;
            },
          }
        : {}),
      ...(descriptor.set
        ? {
            set(this: object, value: unknown) {
              requireReceiver(this);
              descriptor.set!.call(this, value);
            },
          }
        : {}),
    });
  }
  enumDefinitions.set(type, {
    names: new Set(names),
    prototype: Object.freeze(prototype),
  });
  instanceParents.set(type, Object.freeze([...parents]));
}

export function enumValue<T extends DartEnum>(type: string, name: string): T {
  const definition = enumDefinitions.get(type);
  if (!definition || !definition.names.has(name))
    throw new TypeError(`Unknown Dart enum: ${type}.${name}`);
  const key = `${type}\n${name}`;
  let value = enums.get(key);
  if (!value) {
    value = Object.freeze(Object.create(definition.prototype)) as DartEnum;
    enums.set(key, value);
    enumIdentities.set(value, {
      type,
      name,
      index: [...definition.names].indexOf(name),
    });
  }
  return value as T;
}

const enums = new Map<string, DartEnum>();
const enumDefinitions = new Map<
  string,
  { names: ReadonlySet<string>; prototype: object }
>();
const enumIdentities = new WeakMap<
  object,
  { type: string; name: string; index: number }
>();

/** Closed generic constants select typed calls while sharing one prototype. */
export function invokeEnum(
  receiver: object,
  operations: readonly string[],
  args: readonly unknown[],
): unknown {
  const identity = enumIdentities.get(receiver);
  const operation = identity && operations[identity.index];
  if (!operation) throw new TypeError('Invalid or foreign Dart enum');
  return invokeTopLevel(operation, [receiver, ...args]);
}
const contextTypes = new Map<string, readonly string[]>();
type ContextState = { type: string; id: number; alive: boolean };
const statePrototypes = new Map<string, object>();
const contextPrototypes = new Map<string, object>();
const contextStates = new WeakMap<object, ContextState>();
const recordShapes = new WeakMap<object, string>();
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
  return invokeOperation('static', type, 0, 'call', member, args);
}

/** Generated exports share a typed Dart function registry. */
export function invokeTopLevel(id: string, args: readonly unknown[]): unknown {
  return invokeOperation('top', id, 0, 'call', '', args);
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
  if (!record.active || promises.get(id)?.deref() !== record) return;
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
type FutureSettlement = { resolve(value: unknown): void; reject(error: Error): void };
const futures = new Map<number, WeakRef<FutureSettlement>>();
const futureOwners = new WeakMap<object, FutureSettlement>();
const futureFinalizer = new FinalizationRegistry<number>((id) => futures.delete(id));
const promises = new Map<number, WeakRef<{ active: boolean }>>();
const promiseFinalizer = new FinalizationRegistry<number>((id) => promises.delete(id));

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
  return invokeOperation('state', type, ref.id, 'call', method, args);
}

type ObjectDefinition = {
  fields: readonly string[];
  setters: readonly string[];
  methods: Readonly<Record<string, StateMethod>>;
  removers: readonly string[];
};
const objectTypes = new Map<string, ObjectDefinition>();
const references = new ReferenceCache();
const objectHandles = references.handles;
const instanceParents = new Map<string, readonly string[]>();

/** A bound view check; it never constructs, casts, or reads the Dart object. */
export interface FlaxInstanceType<T> {
  // Factory prototypes are any; only a concrete class prototype can narrow further.
  [Symbol.hasInstance]<C>(
    this: C,
    value: unknown,
  ): value is C extends abstract new (...args: any[]) => infer I
    ? I
    : C extends { readonly prototype: infer I }
      ? unknown extends I
        ? T
        : I
      : T;
}

export function bindInstanceType<T, V extends object>(
  value: V,
  type: string,
  parents: readonly string[],
): V & FlaxInstanceType<T> {
  if (!instanceParents.has(type))
    instanceParents.set(type, Object.freeze([...parents]));
  Object.defineProperty(value, Symbol.hasInstance, {
    value(this: object, candidate: unknown): boolean {
      // JS subclasses inherit this function, but keep their own prototype test.
      if (this !== value) {
        return (
          typeof this === 'function' &&
          Function.prototype[Symbol.hasInstance].call(this, candidate)
        );
      }
      if (candidate === null || typeof candidate !== 'object') return false;
      const ref = objectHandles.get(candidate);
      const enumType = enumIdentities.get(candidate)?.type;
      if (enumType)
        return (
          enumType === type || Boolean(instanceParents.get(enumType)?.includes(type))
        );
      return Boolean(
        ref?.alive &&
        (ref.type === type || instanceParents.get(ref.type)?.includes(type)),
      );
    },
  });
  return value as V & FlaxInstanceType<T>;
}

const constructingExtendedProxies = new WeakSet<object>();
type DeferredObject = {
  type: string;
  factory: string;
  descriptor: DartValue;
  materializer: string | null;
};
const deferredObjects = new WeakMap<object, DeferredObject>();
const iterableObjectTypes = new Set<string>();
type OperationHost = typeof globalThis & {
  __flaxResolveOperation?: (
    version: number,
    type: string,
    category: string,
    operation: string,
    member: string,
  ) => number;
  __flaxInvokeOperation?: (
    operation: number,
    receiver: number,
    ...args: unknown[]
  ) => unknown;
};
const operationIds = new Map<string, number>();
function invokeOperation(
  category: string,
  type: string,
  id: number,
  operation: string,
  member: string,
  args: readonly unknown[],
): unknown {
  const host = globalThis as OperationHost;
  if (!host.__flaxResolveOperation || !host.__flaxInvokeOperation)
    throw new Error('Dart bindings require the Flax engine');
  const key = `${category}\0${type}\0${operation}\0${member}`;
  let slot = operationIds.get(key);
  if (slot === undefined) {
    slot = host.__flaxResolveOperation(
      bindingVersion,
      type,
      category,
      operation,
      member,
    );
    operationIds.set(key, slot);
  }
  return host.__flaxInvokeOperation(slot, id, ...args);
}

type ObjectHost = typeof globalThis & {
  __flaxCreateObject?: (
    version: number,
    type: string,
    descriptor: DartValue & { receiver?: object; layout?: number; widgetType?: number },
  ) => object;
  __flaxPrepareProxy?: (
    version: number,
    type: string,
    rows: readonly (readonly unknown[])[],
  ) => number;
  __flaxBindPeer?: (version: number, source: object, target: object) => void;
};

function cachedObject(type: string, id: number): object | null {
  return references.get(type, id);
}

function trackObject(value: object, type: string, id: number): void {
  references.track(value, type, id);
}

function transferObjectAlias(source: object, target: object): void {
  const host = globalThis as ObjectHost;
  if (!host.__flaxBindPeer) throw new Error('Object aliases require the Flax engine');
  host.__flaxBindPeer(bindingVersion, source, target);
  references.transfer(source, target);
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
  __flaxCreateStreamIterator?: (
    version: number,
    streamId: number,
    iterator: object,
  ) => number;
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
const asyncIterableSources = new Map<number, WeakRef<AsyncIterableSource>>();
const asyncIterableOwners = new WeakMap<object, AsyncIterableSource>();
const asyncIterableFinalizer = new FinalizationRegistry<number>((id) =>
  asyncIterableSources.delete(id),
);
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
  const record: AsyncIterableSource = {
    source: source as AsyncIterable<unknown>,
    iterator: null,
    closed: false,
    pendingReject: null,
  };
  asyncIterableSources.set(id, new WeakRef(record));
  asyncIterableFinalizer.register(record, id);
  try {
    const stream = create(bindingVersion, type, id);
    asyncIterableOwners.set(stream, record);
    return stream;
  } catch (error) {
    asyncIterableSources.delete(id);
    throw error;
  }
}

function asyncIterableSource(id: number): AsyncIterableSource {
  const record = asyncIterableSources.get(id)?.deref();
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
  const record = asyncIterableSources.get(id)?.deref();
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
  return invokeOperation('stream', type, ref.id, operation, member, args);
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

const streamPrototypes = new Map<string, object>();
function streamWrapper(type: string, view: string, id: number): object {
  const cached = cachedObject(view, id);
  if (cached) return cached;
  const definition = streamTypes.get(type);
  if (!definition) throw new TypeError(`Unknown Stream type: ${type}`);
  let prototype = streamPrototypes.get(type);
  if (!prototype) {
    const prototype = {};
    for (const field of definition.fields) {
      Object.defineProperty(prototype, field, {
        enumerable: true,
        get(this: object) {
          return callStream(this, type, 'get', field, []);
        },
      });
    }
    for (const [name, method] of Object.entries(definition.methods)) {
      Object.defineProperty(prototype, name, { value: method });
    }
    Object.defineProperty(prototype, Symbol.asyncIterator, {
      value(this: object) {
        return streamAsyncIterator(this, type);
      },
    });
    Object.freeze(prototype);
    streamPrototypes.set(type, prototype);
    return streamWrapper(type, view, id);
  }
  const value = Object.create(prototype) as object;
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
  let iteratorId: number;
  let pending = false;
  let finished = false;

  const iterator: AsyncIterator<unknown> = {
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
  iteratorId = create(bindingVersion, ref.id, iterator);
  return iterator;
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

const proxyLayouts = new WeakMap<
  ProxyDefinition,
  { prototype?: object; token?: number }
>();

function proxyLayout(definition: ProxyDefinition): number {
  let prepared = proxyLayouts.get(definition);
  if (!prepared) {
    prepared = {};
    proxyLayouts.set(definition, prepared);
  }
  if (prepared.token !== undefined) return prepared.token;
  const supers = new Set(definition.superMembers);
  const row = (name: string, kind: number, parameters: readonly MemberParameter[]) => {
    const property =
      prepared!.prototype && Object.getOwnPropertyDescriptor(prepared!.prototype, name);
    const base =
      kind === 0 ? property?.value : kind === 1 ? property?.get : property?.set;
    return Object.freeze([
      name,
      kind,
      parameters.filter((p) => p.positional && p.required).length,
      parameters.filter((p) => p.positional).length +
        (parameters.some((p) => !p.positional) ? 1 : 0),
      base,
      supers.has(kind === 0 ? name : `${kind === 1 ? 'get' : 'set'}:${name}`),
    ]);
  };
  const rows = [
    ...Object.entries(definition.methods).map(([name, parameters]) =>
      row(name, 0, parameters),
    ),
    ...definition.getters.map((name) => row(name, 1, [])),
    ...definition.setters.map((name) =>
      row(name, 2, [{ name: 'value', positional: true, required: true }]),
    ),
  ];
  const prepare = (globalThis as ObjectHost).__flaxPrepareProxy;
  if (!prepare) throw new Error('Dart proxies require the Flax engine');
  prepared.token = prepare(bindingVersion, definition.type, Object.freeze(rows));
  return prepared.token;
}

export function constructProxy(
  definition: ProxyDefinition,
  args: readonly unknown[],
  implementation: object,
): object {
  const names = new Set([
    ...Object.keys(definition.methods),
    ...definition.getters,
    ...definition.setters,
  ]);
  if (
    implementation === null ||
    typeof implementation !== 'object' ||
    Object.keys(implementation).some((name) => !names.has(name))
  ) {
    throw new TypeError('Invalid proxy implementation');
  }
  // Inspect descriptors without evaluating getters or snapshotting their values.
  const property = (name: string) => {
    for (
      let value: object | null = implementation;
      value;
      value = Object.getPrototypeOf(value)
    ) {
      const descriptor = Object.getOwnPropertyDescriptor(value, name);
      if (descriptor) return descriptor;
    }
    return undefined;
  };
  for (const name of Object.keys(definition.methods)) {
    const descriptor = property(name);
    if (!descriptor && definition.superMembers.includes(name)) continue;
    if (
      !descriptor ||
      ('value' in descriptor
        ? typeof descriptor.value !== 'function'
        : typeof descriptor.get !== 'function')
    )
      throw new TypeError(`Missing proxy method: ${name}`);
  }
  for (const name of definition.getters) {
    const descriptor = property(name);
    if (!descriptor && definition.superMembers.includes(`get:${name}`)) continue;
    if (
      !descriptor ||
      (!('value' in descriptor) && typeof descriptor.get !== 'function')
    )
      throw new TypeError(`Missing proxy getter: ${name}`);
  }
  for (const name of definition.setters) {
    const descriptor = property(name);
    if (!descriptor && definition.superMembers.includes(`set:${name}`)) continue;
    if (
      !descriptor ||
      ('value' in descriptor
        ? !descriptor.writable
        : typeof descriptor.set !== 'function')
    )
      throw new TypeError(`Missing proxy setter: ${name}`);
  }
  const descriptor = proxyDescriptor(definition, args);
  const create = (globalThis as ObjectHost).__flaxCreateObject;
  if (!create) throw new Error('Dart proxies require a Flax host');
  return create(bindingVersion, definition.type, {
    ...descriptor,
    receiver: implementation,
    layout: proxyLayout(definition),
  });
}

function proxyDescriptor(
  definition: ProxyDefinition,
  args: readonly unknown[],
): DartValue {
  const positional = definition.parameters.filter((p) => p.positional).length;
  const hasNamed = definition.parameters.some((p) => !p.positional);
  if (args.length > positional + (hasNamed ? 1 : 0))
    throw new TypeError('Too many proxy constructor arguments');
  return construct(
    'value',
    definition.type,
    '@implementation',
    definition.parameters,
    args.slice(0, positional),
    (args[positional] ?? {}) as Record<string, unknown>,
  ) as DartValue;
}

/** Generated signatures remain in TypeScript; executable forwarding is shared. */
export interface ProxyDefinition {
  readonly nativeWidget?: boolean;
  readonly type: string;
  readonly parameters: readonly Parameter[];
  readonly methods: Readonly<Record<string, readonly MemberParameter[]>>;
  readonly getters: readonly string[];
  readonly setters: readonly string[];
  readonly superMembers: readonly string[];
}

export interface MemberParameter extends Parameter {
  readonly context?: string;
}

export abstract class FlaxProxyBase {
  protected constructor(definition: ProxyDefinition, args: readonly unknown[]) {
    constructExtendedProxy(
      this,
      definition,
      args,
      definition.nativeWidget && !componentBases.has(new.target.prototype as object)
        ? componentType(new.target).type
        : undefined,
    );
  }
}

/** Keeps descriptor calls and native subclass construction on one public export. */
export function widgetProxyFactory<
  F extends object,
  C extends abstract new (...args: never[]) => object,
>(
  factory: F,
  native: C,
): F & (new (...args: ConstructorParameters<C>) => InstanceType<C>) {
  const callable = function (this: object, ...args: unknown[]): unknown {
    if (new.target) return Reflect.construct(native, args, new.target);
    if (typeof factory !== 'function')
      throw new TypeError('This Widget has only named constructors');
    return Reflect.apply(factory, undefined, args);
  };
  callable.prototype = native.prototype;
  Object.setPrototypeOf(callable, factory);
  registerComponentBase(callable, false);
  return callable as unknown as F &
    (new (...args: ConstructorParameters<C>) => InstanceType<C>);
}

const memberLayouts = new WeakMap<
  readonly MemberParameter[],
  (args: readonly unknown[]) => readonly unknown[]
>();

function memberArguments(parameters: readonly MemberParameter[]) {
  const cached = memberLayouts.get(parameters);
  if (cached) return cached;
  for (const parameter of parameters) Object.freeze(parameter);
  Object.freeze(parameters);
  if (parameters.every((p) => p.required && p.positional && !p.context)) {
    const argumentsFor = (args: readonly unknown[]) => {
      if (args.length > parameters.length)
        throw new TypeError('Too many method arguments');
      for (let i = 0; i < parameters.length; i++)
        if (args[i] === undefined)
          throw new TypeError(`Missing required argument: ${parameters[i]!.name}`);
      return args;
    };
    memberLayouts.set(parameters, argumentsFor);
    return argumentsFor;
  }

  const positional = parameters.filter((p) => p.positional);
  const named = parameters.filter((p) => !p.positional);
  const names = new Set(named.map((p) => p.name));
  const argumentsFor = (args: readonly unknown[]): unknown[] => {
    if (args.length > positional.length + (named.length ? 1 : 0))
      throw new TypeError('Too many method arguments');
    const options = named.length
      ? args[positional.length] === undefined
        ? {}
        : args[positional.length]
      : {};
    if (
      options === null ||
      typeof options !== 'object' ||
      Array.isArray(options) ||
      Object.keys(options).some((name) => !names.has(name))
    )
      throw new TypeError('Invalid named method arguments');
    let omitted = false;
    for (let i = 0; i < positional.length; i++) {
      if (!positional[i]!.required && args[i] === undefined) omitted = true;
      else if (omitted && args[i] !== undefined)
        throw new TypeError(
          'Optional positional arguments must omit a trailing suffix',
        );
    }
    let index = 0;
    return parameters.map((parameter) => {
      const value = parameter.positional
        ? args[index++]
        : (options as Record<string, unknown>)[parameter.name];
      if (value === undefined && parameter.required)
        throw new TypeError(`Missing required argument: ${parameter.name}`);
      return parameter.context ? contextHandle(value, parameter.context) : value;
    });
  };
  memberLayouts.set(parameters, argumentsFor);
  return argumentsFor;
}

export function bindingMethods(
  type: string,
  category: 'object' | 'state' | 'stream',
  methods: Readonly<Record<string, readonly MemberParameter[]>>,
): Record<string, StateMethod> {
  const invoke =
    category === 'object'
      ? invokeObject
      : category === 'stream'
        ? invokeStream
        : invokeInstance;
  return Object.fromEntries(
    Object.entries(methods).map(([name, parameters]) => {
      const argumentsFor = memberArguments(parameters);
      return [
        name,
        function (this: object, ...args: unknown[]) {
          return invoke(this, type, name, argumentsFor(args));
        },
      ];
    }),
  );
}

function installMembers(
  prototype: object,
  methods: Readonly<Record<string, readonly MemberParameter[]>>,
  getters: readonly string[],
  setters: readonly string[],
  invoke: (receiver: object, member: string, args: readonly unknown[]) => unknown,
): void {
  for (const [name, parameters] of Object.entries(methods)) {
    const argumentsFor = memberArguments(parameters);
    Object.defineProperty(prototype, name, {
      configurable: true,
      writable: true,
      value(this: object, ...args: unknown[]) {
        return invoke(this, name, argumentsFor(args));
      },
    });
  }
  for (const name of new Set([...getters, ...setters])) {
    Object.defineProperty(prototype, name, {
      configurable: true,
      ...(getters.includes(name)
        ? {
            get(this: object) {
              return invoke(this, `get:${name}`, []);
            },
          }
        : {}),
      ...(setters.includes(name)
        ? {
            set(this: object, value: unknown) {
              invoke(this, `set:${name}`, [value]);
            },
          }
        : {}),
    });
  }
}

export function defineProxyBase(
  prototype: object,
  definition: ProxyDefinition,
  nativeGetters: readonly string[] = [],
): void {
  installMembers(prototype, {}, nativeGetters, [], (receiver, member, args) =>
    callObject(receiver, definition.type, 'get', member.slice(4), args),
  );
  // Generated metadata is shared by all instances of this class.
  for (const parameters of Object.values(definition.methods)) {
    for (const parameter of parameters) Object.freeze(parameter);
    Object.freeze(parameters);
  }
  for (const parameter of definition.parameters) Object.freeze(parameter);
  Object.freeze(definition.parameters);
  Object.freeze(definition.methods);
  Object.freeze(definition.getters);
  Object.freeze(definition.setters);
  Object.freeze(definition.superMembers);
  Object.freeze(definition);
  const members = new Set(definition.superMembers);
  installMembers(
    prototype,
    Object.fromEntries(
      Object.entries(definition.methods).filter(([name]) => members.has(name)),
    ),
    definition.getters.filter((name) => members.has(`get:${name}`)),
    definition.setters.filter((name) => members.has(`set:${name}`)),
    (receiver, member, args) =>
      invokeProxySuper(receiver, definition.type, member, args),
  );
  proxyLayouts.set(definition, { prototype });
}

export function defineStateMembers(
  prototype: object,
  methods: Readonly<Record<string, readonly MemberParameter[]>>,
  getters: readonly string[],
  setters: readonly string[],
): void {
  installMembers(prototype, methods, getters, setters, (receiver, member, args) =>
    componentStateCall(receiver, `native:${member}`, args),
  );
}

/**
 * Attaches a newly-created Dart extends proxy to the JS instance currently
 * being initialized by a generated abstract base class.
 */
export function constructExtendedProxy(
  receiver: object,
  definition: ProxyDefinition,
  args: readonly unknown[],
  widgetType?: number,
): void {
  if (receiver === null || typeof receiver !== 'object')
    throw new TypeError('Expected a proxy class instance');
  if (objectHandles.has(receiver))
    throw new TypeError('Proxy class instance is already initialized');
  const descriptor = proxyDescriptor(definition, args);
  const create = (globalThis as ObjectHost).__flaxCreateObject;
  if (!create) throw new Error('Dart proxies require a Flax host');
  constructingExtendedProxies.add(receiver);
  try {
    const created = create(bindingVersion, definition.type, {
      ...descriptor,
      receiver,
      layout: proxyLayout(definition),
      ...(widgetType === undefined ? {} : { widgetType }),
    });
    const ref = objectHandles.get(created);
    if (!ref || !ref.alive || ref.type !== definition.type)
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
  return invokeOperation('object', type, ref.id, operation, member, args);
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
  return invokeOperation('object', type, 0, 'static', member, []);
}

const objectPrototypes = new Map<string, object>();
function createObjectWrapper(type: string): object {
  const cached = objectPrototypes.get(type);
  if (cached) return Object.create(cached) as object;
  const definition = objectTypes.get(type);
  if (!definition) throw new TypeError(`Unknown object: ${type}`);
  const value = {};
  for (const field of new Set([...definition.fields, ...definition.setters])) {
    Object.defineProperty(value, field, {
      enumerable: true,
      ...(definition.fields.includes(field)
        ? {
            get(this: object) {
              return callObject(this, type, 'get', field, []);
            },
          }
        : {}),
      ...(definition.setters.includes(field)
        ? {
            set(this: object, input: unknown) {
              if (isBinding(input))
                throw new TypeError('Object setters do not accept bindings');
              callObject(this, type, 'set', field, [input]);
            },
          }
        : {}),
    });
  }
  for (const [name, method] of Object.entries(definition.methods)) {
    Object.defineProperty(value, name, { value: method });
  }
  if (iterableObjectTypes.has(type)) {
    Object.defineProperty(value, Symbol.iterator, {
      value: function* (this: object): IterableIterator<unknown> {
        const copy = callObject(this, type, 'call', 'toArray', []);
        if (!Array.isArray(copy)) throw new TypeError('Invalid Dart Iterable copy');
        yield* copy;
      },
    });
  }
  Object.freeze(value);
  objectPrototypes.set(type, value);
  return Object.create(value) as object;
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
  if (
    contextStates.has(value) ||
    stateHandles.has(value) ||
    objectHandles.has(value) ||
    enumIdentities.has(value)
  )
    throw new TypeError('Host references are not navigation data');
  const array = Array.isArray(value);
  if (
    !array &&
    Object.getPrototypeOf(value) !== Object.prototype &&
    Object.getPrototypeOf(value) !== null
  )
    throw new TypeError('Expected a plain object');
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

function finishComponentState(
  value: unknown,
  widget: object,
  id: number,
): { state: object; variant: string | null } | { native: number } {
  value = synchronous(value);
  const state =
    value !== null && typeof value === 'object'
      ? componentStates.get(value)
      : undefined;
  const native =
    value !== null && typeof value === 'object' ? stateHandles.get(value) : undefined;
  if (native) return Object.freeze({ native: native.id });
  if (!state || state.claimed)
    throw new TypeError('createState must return a fresh State');
  state.claimed = true;
  state.widget = widget;
  state.id = id;
  return Object.freeze({ state: value as object, variant: state.variant });
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
    callbackOptions(...entries: unknown[]): object {
      const options: Record<string, unknown> = {};
      for (let i = 0; i < entries.length; i += 2)
        options[entries[i] as string] = entries[i + 1];
      return options;
    },
    componentType,
    freezeWidget(value: object): void {
      Object.freeze(value);
    },
    component(value: object): ComponentInfo {
      const info = components.get(value);
      if (!info) throw new TypeError('Unknown or foreign component');
      Object.freeze(value);
      return info;
    },
    createComponentState(
      widget: object,
      id: number,
    ): { state: object; variant: string | null } | { native: number } {
      const value = synchronous(
        Reflect.apply((widget as { createState: Function }).createState, widget, []),
      );
      return finishComponentState(value, widget, id);
    },
    finishComponentState,

    tryComponentStateId(value: object): number | null {
      const state = componentStates.get(value);
      if (state?.retired) throw new Error('Disposed component State');
      return state?.claimed ? state.id : null;
    },
    stateHandle(value: object, type: string): number | null {
      const state = stateHandles.get(value);
      if (state && state.type !== type) throw new TypeError('Incompatible State');
      return state?.id ?? null;
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
      if (method.startsWith('get:')) {
        if (args.length !== 0) throw new TypeError('Invalid getter arguments');
        return (value as Record<string, unknown>)[method.slice(4)];
      }
      if (method.startsWith('set:')) {
        if (args.length !== 1) throw new TypeError('Invalid setter arguments');
        (value as Record<string, unknown>)[method.slice(4)] = args[0];
        return undefined;
      }
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
    collectionShape(value: object, finiteWidgetIterable = false): string | null {
      if (Array.isArray(value)) return 'list';
      if (value instanceof Map) return 'map';
      if (value instanceof Set) return 'set';
      if (finiteWidgetIterable) return null;
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
      finiteWidgetIterable = false,
    ): unknown[] {
      if (finiteWidgetIterable && value instanceof Set) {
        return [...Set.prototype.values.call(value)];
      }
      return Array.isArray(value)
        ? value
        : value instanceof Map
          ? [...value.entries()]
          : value instanceof Set || Symbol.iterator in Object(value)
            ? [...(value as Iterable<unknown>)]
            : Object.entries(value);
    },
    emptyRecord(signature: string): object {
      const value = {};
      recordShapes.set(value, signature);
      return value;
    },
    recordType(value: object): string | null {
      return recordShapes.get(value) ?? null;
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
      return references.sweep();
    },
    releaseObject(id: number): void {
      references.release(id);
    },
    enumValue,
    enumType(value: object): string | null {
      return enumIdentities.get(value)?.type ?? null;
    },
    enumName(value: object): string | null {
      return enumIdentities.get(value)?.name ?? null;
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
      let record!: FutureSettlement;
      const promise = new Promise((resolve, reject) => {
        record = { resolve, reject };
      });
      futures.set(id, new WeakRef(record));
      futureOwners.set(promise, record);
      futureFinalizer.register(record, id);
      // A host Future can be deliberately ignored just like a Dart Future.
      // Event-returned promises have a separate observable error boundary.
      void promise.catch(() => {});
      return promise;
    },
    settleFuture(id: number, success: boolean, value: unknown): void {
      const pending = futures.get(id)?.deref();
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
        promises.set(id, new WeakRef(record));
        promiseFinalizer.register(record, id);
        void Promise.reject(error)
          .catch((reason) => settlePromise(id, record, false, reason))
          .catch(reportCleanupError);
        return;
      }
      if (typeof then !== 'function') {
        throw new TypeError('Future callbacks must return a Promise');
      }
      const record = { active: true };
      promises.set(id, new WeakRef(record));
      promiseFinalizer.register(record, id);
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
      for (const weak of promises.values()) {
        const record = weak.deref();
        if (record) record.active = false;
      }
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
      let prototype = statePrototypes.get(type);
      if (!prototype) {
        const definition = stateTypes.get(type);
        if (!definition) throw new TypeError(`Unknown State: ${type}`);
        prototype = {};
        for (const field of definition.fields)
          Object.defineProperty(prototype, field, {
            enumerable: true,
            get(this: object) {
              const ref = stateHandles.get(this);
              if (!ref || ref.type !== type)
                throw new TypeError('Invalid or foreign State');
              return invokeOperation('state', type, ref.id, 'get', field, []);
            },
          });
        for (const [name, method] of Object.entries(definition.methods))
          Object.defineProperty(prototype, name, { value: method });
        Object.freeze(prototype);
        statePrototypes.set(type, prototype);
      }
      const value = Object.create(prototype) as object;
      stateHandles.set(value, { type, id });
      return Object.freeze(value);
    },
    context(type: string, id: number): object {
      const cached = cachedObject(type, id);
      if (cached) return cached;
      let prototype = contextPrototypes.get(type);
      if (!prototype) {
        const fields = contextTypes.get(type);
        if (!fields) throw new TypeError(`Unregistered context type: ${type}`);
        prototype = {};
        for (const field of fields)
          Object.defineProperty(prototype, field, {
            enumerable: true,
            get(this: object) {
              const ref = contextStates.get(this);
              if (!ref || ref.type !== type)
                throw new TypeError('Invalid or foreign Context');
              if (!ref.alive) {
                if (field === 'mounted') return false;
                throw new Error('Unmounted BuildContext');
              }
              return invokeOperation('context', type, ref.id, 'get', field, []);
            },
          });
        Object.defineProperty(prototype, 'findAncestorWidgetOfExactType', {
          value(this: object, constructor: ComponentConstructor) {
            const ref = contextStates.get(this);
            if (!ref || ref.type !== type || !ref.alive)
              throw new Error('Unmounted BuildContext');
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
            return call(bindingVersion, type, ref.id, info.type);
          },
        });
        Object.freeze(prototype);
        contextPrototypes.set(type, prototype);
      }
      const value = Object.create(prototype) as object;
      trackObject(value, type, id);
      contextStates.set(value, objectHandles.get(value)!);
      return Object.freeze(value);
    },
    releaseContext(id: number): void {
      references.release(id);
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
