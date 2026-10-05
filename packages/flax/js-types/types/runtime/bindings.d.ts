import { type Binding, type ReadonlySignal } from './index.js';
/** Experimental generated-binding extension. Independent of the native C ABI. */
export declare const bindingVersion = 22;
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
} ? Array<DartCopy<V>> : T extends {
    readonly [dartCollectionKind]: 'map';
    readonly [dartCollectionKey]: infer K;
    readonly [dartCollectionItem]: infer V;
} ? Map<DartCopy<K>, DartCopy<V>> : T extends {
    readonly [dartCollectionKind]: 'set';
    readonly [dartCollectionItem]: infer V;
} ? Set<DartCopy<V>> : T extends {
    readonly [dartCollectionKind]: 'iterable';
    readonly [dartCollectionItem]: infer V;
} ? Array<DartCopy<V>> : T;
type DartOutput<T> = T extends ReadonlyArray<infer V> ? DartList<DartOutput<V>> : T extends ReadonlyMap<infer K, infer V> ? DartMap<DartOutput<K>, DartOutput<V>> : T extends ReadonlySet<infer V> ? DartSet<DartOutput<V>> : T;
type DartCallbackResult<R> = R extends Promise<infer V> ? Promise<V extends Widget ? V : DartInput<V>> : R extends Widget ? R : DartInput<R>;
type DartCallbackInput<A extends readonly unknown[], R> = (...args: {
    [K in keyof A]: DartOutput<A[K]>;
}) => DartCallbackResult<R>;
type DartElementInput<T> = T extends (...args: infer A) => infer R ? DartCallbackInput<A, R> : DartInput<T>;
export type DartInput<T> = T extends Widget ? never : T extends (...args: infer A) => infer R ? DartCallbackInput<A, R> : T extends Promise<unknown> ? never : T extends {
    readonly [dartCollectionKind]: 'list';
    readonly [dartCollectionItem]: infer V;
} ? DartListInput<V> : T extends {
    readonly [dartCollectionKind]: 'map';
    readonly [dartCollectionKey]: infer K;
    readonly [dartCollectionItem]: infer V;
} ? DartMapInput<K, V> : T extends {
    readonly [dartCollectionKind]: 'set';
    readonly [dartCollectionItem]: infer V;
} ? DartSetInput<V> : T extends {
    readonly [dartCollectionKind]: 'iterable';
    readonly [dartCollectionItem]: infer V;
} ? DartIterableInput<V> : T;
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
export type DartIterableInput<T, I = DartInput<T>> = Omit<DartIterable<T>, typeof Symbol.iterator> | Iterable<I>;
export type DartListInput<T, I = DartInput<T>> = Omit<DartList<T>, typeof Symbol.iterator> | ReadonlyArray<I>;
export type DartMapInput<K, V, IK = DartInput<K>, IV = DartInput<V>> = DartMap<K, V> | ReadonlyMap<IK, IV> | (K extends string ? Readonly<Record<string, IV>> : never);
export type DartSetInput<T, I = DartInput<T>> = Omit<DartSet<T>, typeof Symbol.iterator> | ReadonlySet<I>;
export interface DartEnum {
    readonly kind: 'enum';
    readonly type: string;
    readonly name: string;
}
/** A generated Dart Stream reference. It is unrelated to Web ReadableStream. */
export interface FlaxStreamReference<T = unknown> extends AsyncIterable<T> {
}
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
export type ComponentConstructor<T extends ComponentWidget = ComponentWidget> = abstract new (...args: never[]) => T;
/** Component-aware operations on a real Flutter BuildContext. */
export interface ComponentContext {
    findAncestorWidgetOfExactType<T extends ComponentWidget>(type: ComponentConstructor<T>): T | null;
}
export declare function registerComponentBase(type: Function, stateful: boolean): void;
export declare function registerComponent(instance: object, type: Function, stateful: boolean, key: unknown): void;
export declare function registerComponentState(instance: object): void;
/** Selects a pre-generated real Dart State composition before createState returns. */
export declare function registerComponentStateVariant(instance: object, variant: string): void;
export declare function componentStateWidget(instance: object): object;
export declare function componentStateCall(instance: object, operation: string, args: readonly unknown[]): unknown;
export interface Parameter {
    readonly name: string;
    readonly required: boolean;
    readonly positional: boolean;
    readonly defaultValue?: unknown;
    readonly readonly?: boolean;
    readonly fixed?: boolean;
}
export declare function isBinding(value: unknown): value is Binding<unknown>;
/** Called by generated constructors, never a second handwritten widget catalog. */
export declare function construct(kind: 'widget' | 'value' | 'route' | 'page', type: string, ctor: string, parameters: readonly Parameter[], positional: readonly unknown[], options: Readonly<Record<string, unknown>>): WidgetDescription | DartValue;
export declare function enumValue<T extends DartEnum>(type: T['type'], name: string): T;
/** Generated declarations select the only fields available to application JS. */
export declare function defineContext(type: string, fields: readonly string[]): void;
export declare function contextHandle(value: unknown, type: string): number | null | undefined;
export declare function invokeStatic(type: string, member: string, args: readonly unknown[]): unknown;
/** Generated exports share a typed Dart function registry. */
export declare function invokeTopLevel(id: string, args: readonly unknown[]): unknown;
export type NavigationData = null | boolean | number | string | NavigationData[] | {
    [key: string]: NavigationData;
};
export interface PageLifecycle {
    onDispose(callback: () => void): void;
}
type PageFactory = (params: ReadonlySignal<NavigationData>, lifecycle: PageLifecycle) => Widget;
export declare function registerPage(name: string, factory: PageFactory): void;
type StateMethod = (this: object, ...args: never[]) => unknown;
export declare function defineState(type: string, fields: readonly string[], methods: Readonly<Record<string, StateMethod>>): void;
export declare function invokeInstance(receiver: object, type: string, method: string, args: readonly unknown[]): unknown;
type ObjectDefinition = {
    fields: readonly string[];
    setters: readonly string[];
    methods: Readonly<Record<string, StateMethod>>;
    removers: readonly string[];
};
export declare function defineObject(type: string, fields: ObjectDefinition['fields'], setters: readonly string[], methods: ObjectDefinition['methods'], removers: readonly string[]): void;
export declare function defineStream(type: string, fields: readonly string[], methods: Readonly<Record<string, StateMethod>>): void;
export declare function constructAsyncIterableStream<T>(type: string, source: AsyncIterable<T>): object;
export declare function constructStream(_kind: 'stream', type: string, ctor: string, parameters: readonly Parameter[], positional: readonly unknown[], options: Readonly<Record<string, unknown>>): object;
export declare function invokeStream(receiver: object, type: string, method: string, args: readonly unknown[]): unknown;
export declare function constructObject(_kind: 'object', type: string, ctor: string, parameters: readonly Parameter[], positional: readonly unknown[], options: Readonly<Record<string, unknown>>): object;
/** Records a generic factory call until a concrete Dart parameter supplies T. */
export declare function constructDeferredObject(type: string, factory: string, parameters: readonly Parameter[], positional: readonly unknown[], options: Readonly<Record<string, unknown>>): object;
export declare function constructProxy(type: string, parameters: readonly Parameter[], args: readonly unknown[], implementation: object, names: readonly string[], getters: readonly string[], setters: readonly string[]): object;
/**
 * Attaches a newly-created Dart extends proxy to the JS instance currently
 * being initialized by a generated abstract base class.
 */
export declare function constructExtendedProxy(receiver: object, basePrototype: object, type: string, parameters: readonly Parameter[], args: readonly unknown[], names: readonly string[], getters: readonly string[], setters: readonly string[], superMembers: readonly string[]): void;
export declare function invokeProxySuper(receiver: object, type: string, member: string, args: readonly unknown[]): unknown;
export declare function invokeObject(receiver: object, type: string, method: string, args: readonly unknown[]): unknown;
export declare function invokeObjectStatic(type: string, member: string): unknown;
/** A plain-data snapshot, without invoking getters or serializing through JSON. */
export declare function copyNavigationData(value: unknown, path?: Set<object>): NavigationData;
export declare function mountRoot(widget: Widget): void;
export {};
