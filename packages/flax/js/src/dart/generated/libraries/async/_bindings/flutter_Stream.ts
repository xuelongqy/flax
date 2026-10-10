// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"onCancel","required":false,"positional":false},{"name":"onListen","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"onData","required":true,"positional":true},{"name":"cancelOnError","required":false,"positional":false},{"name":"onDone","required":false,"positional":false},{"name":"onError","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"test","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"convert","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"onError","required":true,"positional":true},{"name":"test","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"streamConsumer","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"streamTransformer","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"combine","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"separator","required":false,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"needle","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"action","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [] as const;
const _flaxMemberParameters13 = [{"name":"futureValue","required":false,"positional":true}] as const;
const _flaxMemberParameters14 = [{"name":"count","required":true,"positional":true}] as const;
const _flaxMemberParameters15 = [{"name":"equals","required":false,"positional":true}] as const;
const _flaxMemberParameters16 = [{"name":"test","required":true,"positional":true},{"name":"orElse","required":false,"positional":false}] as const;
const _flaxMemberParameters17 = [{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters18 = [{"name":"timeLimit","required":true,"positional":true},{"name":"onTimeout","required":false,"positional":false}] as const;
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
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
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
pipe(streamConsumer: Readonly<{ "__flaxBound:dart:async::StreamConsumer": readonly [T] }>): Promise<unknown | null>;
transform<S extends unknown | null = unknown | null>(streamTransformer: Readonly<{ "__flaxBound:dart:async::StreamTransformer": readonly [T, S] }>): Stream<S>;
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
timeout(timeLimit: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>, options?: {onTimeout?: ((sink: upstream3.EventSink<T>) => void) | null | undefined}): Stream<T>;
}
defineStream("flax.core/flutter#type:Stream", ["isBroadcast","length","isEmpty","first","last","single"], _flaxBindingMethods("flax.core/flutter#type:Stream", "stream", {"asBroadcastStream":_flaxMemberParameters0,"listen":_flaxMemberParameters1,"where":_flaxMemberParameters2,"map":_flaxMemberParameters3,"asyncMap":_flaxMemberParameters3,"asyncExpand":_flaxMemberParameters3,"handleError":_flaxMemberParameters4,"expand":_flaxMemberParameters3,"pipe":_flaxMemberParameters5,"transform":_flaxMemberParameters6,"reduce":_flaxMemberParameters7,"fold":_flaxMemberParameters8,"join":_flaxMemberParameters9,"contains":_flaxMemberParameters10,"forEach":_flaxMemberParameters11,"every":_flaxMemberParameters2,"any":_flaxMemberParameters2,"cast":_flaxMemberParameters12,"toList":_flaxMemberParameters12,"toSet":_flaxMemberParameters12,"drain":_flaxMemberParameters13,"take":_flaxMemberParameters14,"takeWhile":_flaxMemberParameters2,"skip":_flaxMemberParameters14,"skipWhile":_flaxMemberParameters2,"distinct":_flaxMemberParameters15,"firstWhere":_flaxMemberParameters16,"lastWhere":_flaxMemberParameters16,"singleWhere":_flaxMemberParameters16,"elementAt":_flaxMemberParameters17,"timeout":_flaxMemberParameters18}));
namespace _StreamFactory {
export function fromAsyncIterable<T extends unknown | null >(source: AsyncIterable<T>): Stream<T> {
return constructAsyncIterableStream("flax.core/flutter#type:Stream", source) as Stream<T>;
} }
namespace _StreamFactory {
export function empty<T extends unknown | null = unknown | null>(options: { broadcast?: boolean | undefined } = {}): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "empty", [{"name":"broadcast","required":false,"positional":false}], [], options) as Stream<T>;
}
}
namespace _StreamFactory {
export function value<T extends unknown | null = unknown | null>(value: T): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "value", [{"name":"value","required":true,"positional":true}], [value], {}) as Stream<T>;
}
}
namespace _StreamFactory {
export function error<T extends unknown | null = unknown | null>(error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "error", [{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}], [error, stackTrace], {}) as Stream<T>;
}
}
namespace _StreamFactory {
export function fromFuture<T extends unknown | null = unknown | null>(future: Promise<T>): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromFuture", [{"name":"future","required":true,"positional":true}], [future], {}) as Stream<T>;
}
}
namespace _StreamFactory {
export function fromFutures<T extends unknown | null = unknown | null>(futures: DartIterableInput<Promise<T>, Promise<T>>): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromFutures", [{"name":"futures","required":true,"positional":true}], [futures], {}) as Stream<T>;
}
}
namespace _StreamFactory {
export function fromIterable<T extends unknown | null = unknown | null>(elements: DartIterableInput<T, T>): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromIterable", [{"name":"elements","required":true,"positional":true}], [elements], {}) as Stream<T>;
}
}
namespace _StreamFactory {
export function multi<T extends unknown | null = unknown | null>(onListen: ((p0: upstream1.MultiStreamController<T>) => void), options: { isBroadcast?: boolean | undefined } = {}): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "multi", [{"name":"onListen","required":true,"positional":true},{"name":"isBroadcast","required":false,"positional":false}], [onListen], options) as Stream<T>;
}
}
namespace _StreamFactory {
export function periodic<T extends unknown | null = unknown | null>(period: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>, computation?: ((computationCount: number) => T) | null): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "periodic", [{"name":"period","required":true,"positional":true},{"name":"computation","required":false,"positional":true}], [period, computation], {}) as Stream<T>;
}
}
namespace _StreamFactory {
export function eventTransformed<T extends unknown | null = unknown | null>(source: Stream<unknown | null>, mapSink: ((sink: upstream3.EventSink<T>) => Readonly<{ "__flaxBound:dart:async::EventSink": readonly [unknown | null] }>)): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "eventTransformed", [{"name":"source","required":true,"positional":true},{"name":"mapSink","required":true,"positional":true}], [source, mapSink], {}) as Stream<T>;
}
}
namespace _StreamFactory { export function castFrom<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(source: Stream<S>): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStatic("flax.core/flutter#type:Stream", "castFrom", [source]);
return _flaxResult as Stream<T>;
} }
export const Stream: typeof _StreamFactory & _FlaxInstanceType<Stream<any>> = _flaxBindInstanceType<Stream<any>, typeof _StreamFactory>(_StreamFactory, "flax.core/flutter#type:Stream", ["dart:core::Object"]);
