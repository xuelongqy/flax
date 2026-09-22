// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_MultiStreamController';
import '@flax/dart/async/_bindings/flutter_MultiStreamController';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream5 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream6 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Stream<T extends unknown | null = unknown | null> extends AsyncIterable<T> { readonly __Stream: unique symbol;
readonly isBroadcast: boolean;
readonly length: Promise<number>;
readonly isEmpty: Promise<boolean>;
readonly first: Promise<T>;
readonly last: Promise<T>;
readonly single: Promise<T>;
asBroadcastStream(options?: {onCancel?: ((subscription: upstream4.StreamSubscription<T>) => void) | null | undefined; onListen?: ((subscription: upstream4.StreamSubscription<T>) => void) | null | undefined}): Stream<T>;
listen(onData: ((event: T) => void) | null, options?: {cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: upstream0.StackTrace) => void) | null | undefined}): upstream4.StreamSubscription<T>;
where(test: ((event: T) => boolean)): Stream<T>;
map<S extends unknown | null = unknown | null>(convert: ((event: T) => S)): Stream<S>;
asyncMap<E extends unknown | null = unknown | null>(convert: ((event: T) => E | Promise<E>)): Stream<E>;
asyncExpand<E extends unknown | null = unknown | null>(convert: ((event: T) => Stream<E> | null)): Stream<E>;
handleError(onError: ((p0: {}, p1?: upstream0.StackTrace) => void), options?: {test?: ((error: unknown | null) => boolean) | null | undefined}): Stream<T>;
expand<S extends unknown | null = unknown | null>(convert: ((element: T) => DartIterableInput<S, S>)): Stream<S>;
pipe(streamConsumer: upstream5.StreamConsumer<T>): Promise<unknown | null>;
transform<S extends unknown | null = unknown | null>(streamTransformer: upstream6.StreamTransformer<T, S>): Stream<S>;
reduce(combine: ((previous: T, element: T) => T)): Promise<T>;
fold<S extends unknown | null = unknown | null>(initialValue: S, combine: ((previous: S, element: T) => S)): Promise<S>;
join(separator?: string): Promise<string>;
contains(needle: unknown | null): Promise<boolean>;
forEach(action: ((element: T) => void)): Promise<void>;
every(test: ((element: T) => boolean)): Promise<boolean>;
any(test: ((element: T) => boolean)): Promise<boolean>;
cast<R extends unknown | null = unknown | null>(): Stream<R>;
toList(): Promise<DartList<T>>;
toSet(): Promise<DartSet<T>>;
drain<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
take(count: number): Stream<T>;
takeWhile(test: ((element: T) => boolean)): Stream<T>;
skip(count: number): Stream<T>;
skipWhile(test: ((element: T) => boolean)): Stream<T>;
distinct(equals?: ((previous: T, next: T) => boolean) | null): Stream<T>;
firstWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
lastWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
singleWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
elementAt(index: number): Promise<T>;
timeout(timeLimit: upstream2.Duration, options?: {onTimeout?: ((sink: upstream3.EventSink<T>) => void) | null | undefined}): Stream<T>;
}
defineStream("flax.core/flutter#type:Stream", ["isBroadcast","length","isEmpty","first","last","single"], {asBroadcastStream(this: object, options: { onCancel?: ((subscription: upstream4.StreamSubscription<unknown | null>) => void) | null | undefined; onListen?: ((subscription: upstream4.StreamSubscription<unknown | null>) => void) | null | undefined } = {}): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["onCancel","onListen"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "asBroadcastStream", [options.onCancel, options.onListen]);
return _flaxResult as Stream<unknown | null>;
},
listen(this: object, onData: ((event: unknown | null) => void) | null, options: { cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: upstream0.StackTrace) => void) | null | undefined } = {}): upstream4.StreamSubscription<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["cancelOnError","onDone","onError"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "listen", [onData, options.cancelOnError, options.onDone, options.onError]);
return _flaxResult as upstream4.StreamSubscription<unknown | null>;
},
where(this: object, test: ((event: unknown | null) => boolean)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "where", [test]);
return _flaxResult as Stream<unknown | null>;
},
map(this: object, convert: ((event: unknown | null) => unknown | null)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "map", [convert]);
return _flaxResult as Stream<unknown | null>;
},
asyncMap(this: object, convert: ((event: unknown | null) => unknown | null | Promise<unknown | null>)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "asyncMap", [convert]);
return _flaxResult as Stream<unknown | null>;
},
asyncExpand(this: object, convert: ((event: unknown | null) => Stream<unknown | null> | null)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "asyncExpand", [convert]);
return _flaxResult as Stream<unknown | null>;
},
handleError(this: object, onError: ((p0: {}, p1?: upstream0.StackTrace) => void), options: { test?: ((error: unknown | null) => boolean) | null | undefined } = {}): Stream<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["test"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "handleError", [onError, options.test]);
return _flaxResult as Stream<unknown | null>;
},
expand(this: object, convert: ((element: unknown | null) => DartIterableInput<unknown | null, unknown | null>)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "expand", [convert]);
return _flaxResult as Stream<unknown | null>;
},
pipe(this: object, streamConsumer: upstream5.StreamConsumer<unknown | null>): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "pipe", [streamConsumer]);
return _flaxResult as Promise<unknown | null>;
},
transform(this: object, streamTransformer: upstream6.StreamTransformer<unknown | null, unknown | null>): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "transform", [streamTransformer]);
return _flaxResult as Stream<unknown | null>;
},
reduce(this: object, combine: ((previous: unknown | null, element: unknown | null) => unknown | null)): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "reduce", [combine]);
return _flaxResult as Promise<unknown | null>;
},
fold(this: object, initialValue: unknown | null, combine: ((previous: unknown | null, element: unknown | null) => unknown | null)): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "fold", [initialValue, combine]);
return _flaxResult as Promise<unknown | null>;
},
join(this: object, separator?: string): Promise<string> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "join", [separator]);
return _flaxResult as Promise<string>;
},
contains(this: object, needle: unknown | null): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "contains", [needle]);
return _flaxResult as Promise<boolean>;
},
forEach(this: object, action: ((element: unknown | null) => void)): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "forEach", [action]);
return _flaxResult as Promise<void>;
},
every(this: object, test: ((element: unknown | null) => boolean)): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "every", [test]);
return _flaxResult as Promise<boolean>;
},
any(this: object, test: ((element: unknown | null) => boolean)): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "any", [test]);
return _flaxResult as Promise<boolean>;
},
cast(this: object): Stream<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "cast", []);
return _flaxResult as Stream<unknown | null>;
},
toList(this: object): Promise<DartList<unknown | null>> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "toList", []);
return _flaxResult as Promise<DartList<unknown | null>>;
},
toSet(this: object): Promise<DartSet<unknown | null>> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "toSet", []);
return _flaxResult as Promise<DartSet<unknown | null>>;
},
drain(this: object, futureValue?: unknown | null): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "drain", [futureValue]);
return _flaxResult as Promise<unknown | null>;
},
take(this: object, count: number): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "take", [count]);
return _flaxResult as Stream<unknown | null>;
},
takeWhile(this: object, test: ((element: unknown | null) => boolean)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "takeWhile", [test]);
return _flaxResult as Stream<unknown | null>;
},
skip(this: object, count: number): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "skip", [count]);
return _flaxResult as Stream<unknown | null>;
},
skipWhile(this: object, test: ((element: unknown | null) => boolean)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "skipWhile", [test]);
return _flaxResult as Stream<unknown | null>;
},
distinct(this: object, equals?: ((previous: unknown | null, next: unknown | null) => boolean) | null): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "distinct", [equals]);
return _flaxResult as Stream<unknown | null>;
},
firstWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "firstWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
lastWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "lastWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
singleWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "singleWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
elementAt(this: object, index: number): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "elementAt", [index]);
return _flaxResult as Promise<unknown | null>;
},
timeout(this: object, timeLimit: upstream2.Duration, options: { onTimeout?: ((sink: upstream3.EventSink<unknown | null>) => void) | null | undefined } = {}): Stream<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["onTimeout"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "timeout", [timeLimit, options.onTimeout]);
return _flaxResult as Stream<unknown | null>;
},
});
export namespace Stream {
export function fromAsyncIterable<T extends unknown | null >(source: AsyncIterable<T>): Stream<T> {
return constructAsyncIterableStream("flax.core/flutter#type:Stream", source) as Stream<T>;
} }
export namespace Stream {
export function empty<T extends unknown | null = unknown | null>(options: { broadcast?: boolean | undefined } = {}): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "empty", [{"name":"broadcast","required":false,"positional":false}], [], options) as Stream<T>;
}
}
export namespace Stream {
export function value<T extends unknown | null = unknown | null>(value: T): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "value", [{"name":"value","required":true,"positional":true}], [value], {}) as Stream<T>;
}
}
export namespace Stream {
export function error<T extends unknown | null = unknown | null>(error: {}, stackTrace?: upstream0.StackTrace | null): Stream<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "error", [{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}], [error, stackTrace], {}) as Stream<T>;
}
}
export namespace Stream {
export function fromFuture<T extends unknown | null = unknown | null>(future: Promise<T>): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromFuture", [{"name":"future","required":true,"positional":true}], [future], {}) as Stream<T>;
}
}
export namespace Stream {
export function fromFutures<T extends unknown | null = unknown | null>(futures: DartIterableInput<Promise<T>, Promise<T>>): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromFutures", [{"name":"futures","required":true,"positional":true}], [futures], {}) as Stream<T>;
}
}
export namespace Stream {
export function fromIterable<T extends unknown | null = unknown | null>(elements: DartIterableInput<T, T>): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromIterable", [{"name":"elements","required":true,"positional":true}], [elements], {}) as Stream<T>;
}
}
export namespace Stream {
export function multi<T extends unknown | null = unknown | null>(onListen: ((p0: upstream1.MultiStreamController<T>) => void), options: { isBroadcast?: boolean | undefined } = {}): Stream<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "multi", [{"name":"onListen","required":true,"positional":true},{"name":"isBroadcast","required":false,"positional":false}], [onListen], options) as Stream<T>;
}
}
export namespace Stream {
export function periodic<T extends unknown | null = unknown | null>(period: upstream2.Duration, computation?: ((computationCount: number) => T) | null): Stream<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "periodic", [{"name":"period","required":true,"positional":true},{"name":"computation","required":false,"positional":true}], [period, computation], {}) as Stream<T>;
}
}
export namespace Stream {
export function eventTransformed<T extends unknown | null = unknown | null>(source: Stream<unknown | null>, mapSink: ((sink: upstream3.EventSink<T>) => upstream3.EventSink<unknown | null>)): Stream<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "eventTransformed", [{"name":"source","required":true,"positional":true},{"name":"mapSink","required":true,"positional":true}], [source, mapSink], {}) as Stream<T>;
}
}
export namespace Stream { export function castFrom<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(source: Stream<S>): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStatic("flax.core/flutter#type:Stream", "castFrom", [source]);
return _flaxResult as Stream<T>;
} }
