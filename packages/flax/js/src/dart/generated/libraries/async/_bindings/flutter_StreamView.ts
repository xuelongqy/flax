// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamView<T extends unknown | null = unknown | null> extends AsyncIterable<T> { readonly __StreamView: unique symbol;
readonly isBroadcast: boolean;
readonly length: Promise<number>;
readonly isEmpty: Promise<boolean>;
readonly first: Promise<T>;
readonly last: Promise<T>;
readonly single: Promise<T>;
asBroadcastStream(options?: {onCancel?: ((subscription: upstream1.StreamSubscription<T>) => void) | null | undefined; onListen?: ((subscription: upstream1.StreamSubscription<T>) => void) | null | undefined}): upstream0.Stream<T>;
listen(onData: ((value: T) => void) | null, options?: {cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: upstream2.StackTrace) => void) | null | undefined}): upstream1.StreamSubscription<T>;
where(test: ((event: T) => boolean)): upstream0.Stream<T>;
map<S extends unknown | null = unknown | null>(convert: ((event: T) => S)): upstream0.Stream<S>;
asyncMap<E extends unknown | null = unknown | null>(convert: ((event: T) => E | Promise<E>)): upstream0.Stream<E>;
asyncExpand<E extends unknown | null = unknown | null>(convert: ((event: T) => upstream0.Stream<E> | null)): upstream0.Stream<E>;
handleError(onError: ((p0: {}, p1?: upstream2.StackTrace) => void), options?: {test?: ((error: unknown | null) => boolean) | null | undefined}): upstream0.Stream<T>;
expand<S extends unknown | null = unknown | null>(convert: ((element: T) => DartIterableInput<S, S>)): upstream0.Stream<S>;
pipe(streamConsumer: upstream3.StreamConsumer<T>): Promise<unknown | null>;
transform<S extends unknown | null = unknown | null>(streamTransformer: upstream4.StreamTransformer<T, S>): upstream0.Stream<S>;
reduce(combine: ((previous: T, element: T) => T)): Promise<T>;
fold<S extends unknown | null = unknown | null>(initialValue: S, combine: ((previous: S, element: T) => S)): Promise<S>;
join(separator?: string): Promise<string>;
contains(needle: unknown | null): Promise<boolean>;
forEach(action: ((element: T) => void)): Promise<void>;
every(test: ((element: T) => boolean)): Promise<boolean>;
any(test: ((element: T) => boolean)): Promise<boolean>;
cast<R extends unknown | null = unknown | null>(): upstream0.Stream<R>;
toList(): Promise<DartList<T>>;
toSet(): Promise<DartSet<T>>;
drain<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
take(count: number): upstream0.Stream<T>;
takeWhile(test: ((element: T) => boolean)): upstream0.Stream<T>;
skip(count: number): upstream0.Stream<T>;
skipWhile(test: ((element: T) => boolean)): upstream0.Stream<T>;
distinct(equals?: ((previous: T, next: T) => boolean) | null): upstream0.Stream<T>;
firstWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
lastWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
singleWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
elementAt(index: number): Promise<T>;
timeout(timeLimit: upstream5.Duration, options?: {onTimeout?: ((sink: upstream6.EventSink<T>) => void) | null | undefined}): upstream0.Stream<T>;
}
defineStream("flax.core/flutter#type:StreamView", ["isBroadcast","length","isEmpty","first","last","single"], {asBroadcastStream(this: object, options: { onCancel?: ((subscription: upstream1.StreamSubscription<unknown | null>) => void) | null | undefined; onListen?: ((subscription: upstream1.StreamSubscription<unknown | null>) => void) | null | undefined } = {}): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["onCancel","onListen"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "asBroadcastStream", [options.onCancel, options.onListen]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
listen(this: object, onData: ((value: unknown | null) => void) | null, options: { cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: upstream2.StackTrace) => void) | null | undefined } = {}): upstream1.StreamSubscription<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["cancelOnError","onDone","onError"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "listen", [onData, options.cancelOnError, options.onDone, options.onError]);
return _flaxResult as upstream1.StreamSubscription<unknown | null>;
},
where(this: object, test: ((event: unknown | null) => boolean)): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "where", [test]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
map(this: object, convert: ((event: unknown | null) => unknown | null)): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "map", [convert]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
asyncMap(this: object, convert: ((event: unknown | null) => unknown | null | Promise<unknown | null>)): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "asyncMap", [convert]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
asyncExpand(this: object, convert: ((event: unknown | null) => upstream0.Stream<unknown | null> | null)): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "asyncExpand", [convert]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
handleError(this: object, onError: ((p0: {}, p1?: upstream2.StackTrace) => void), options: { test?: ((error: unknown | null) => boolean) | null | undefined } = {}): upstream0.Stream<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["test"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "handleError", [onError, options.test]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
expand(this: object, convert: ((element: unknown | null) => DartIterableInput<unknown | null, unknown | null>)): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "expand", [convert]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
pipe(this: object, streamConsumer: upstream3.StreamConsumer<unknown | null>): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "pipe", [streamConsumer]);
return _flaxResult as Promise<unknown | null>;
},
transform(this: object, streamTransformer: upstream4.StreamTransformer<unknown | null, unknown | null>): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "transform", [streamTransformer]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
reduce(this: object, combine: ((previous: unknown | null, element: unknown | null) => unknown | null)): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "reduce", [combine]);
return _flaxResult as Promise<unknown | null>;
},
fold(this: object, initialValue: unknown | null, combine: ((previous: unknown | null, element: unknown | null) => unknown | null)): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "fold", [initialValue, combine]);
return _flaxResult as Promise<unknown | null>;
},
join(this: object, separator?: string): Promise<string> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "join", [separator]);
return _flaxResult as Promise<string>;
},
contains(this: object, needle: unknown | null): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "contains", [needle]);
return _flaxResult as Promise<boolean>;
},
forEach(this: object, action: ((element: unknown | null) => void)): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "forEach", [action]);
return _flaxResult as Promise<void>;
},
every(this: object, test: ((element: unknown | null) => boolean)): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "every", [test]);
return _flaxResult as Promise<boolean>;
},
any(this: object, test: ((element: unknown | null) => boolean)): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "any", [test]);
return _flaxResult as Promise<boolean>;
},
cast(this: object): upstream0.Stream<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "cast", []);
return _flaxResult as upstream0.Stream<unknown | null>;
},
toList(this: object): Promise<DartList<unknown | null>> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "toList", []);
return _flaxResult as Promise<DartList<unknown | null>>;
},
toSet(this: object): Promise<DartSet<unknown | null>> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "toSet", []);
return _flaxResult as Promise<DartSet<unknown | null>>;
},
drain(this: object, futureValue?: unknown | null): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "drain", [futureValue]);
return _flaxResult as Promise<unknown | null>;
},
take(this: object, count: number): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "take", [count]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
takeWhile(this: object, test: ((element: unknown | null) => boolean)): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "takeWhile", [test]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
skip(this: object, count: number): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "skip", [count]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
skipWhile(this: object, test: ((element: unknown | null) => boolean)): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "skipWhile", [test]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
distinct(this: object, equals?: ((previous: unknown | null, next: unknown | null) => boolean) | null): upstream0.Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "distinct", [equals]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
firstWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "firstWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
lastWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "lastWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
singleWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "singleWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
elementAt(this: object, index: number): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "elementAt", [index]);
return _flaxResult as Promise<unknown | null>;
},
timeout(this: object, timeLimit: upstream5.Duration, options: { onTimeout?: ((sink: upstream6.EventSink<unknown | null>) => void) | null | undefined } = {}): upstream0.Stream<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["onTimeout"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "timeout", [timeLimit, options.onTimeout]);
return _flaxResult as upstream0.Stream<unknown | null>;
},
});
export function StreamView<T extends unknown | null = unknown | null>(stream: upstream0.Stream<T>): StreamView<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:StreamView", "", [{"name":"stream","required":true,"positional":true}], [stream], {}) as StreamView<T>;
}
