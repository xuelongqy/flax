// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
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
import { _flaxMemberParameters151, _flaxMemberParameters152, _flaxMemberParameters115, _flaxMemberParameters153, _flaxMemberParameters154, _flaxMemberParameters155, _flaxMemberParameters156, _flaxMemberParameters119, _flaxMemberParameters120, _flaxMemberParameters121, _flaxMemberParameters157, _flaxMemberParameters118, _flaxMemberParameters3, _flaxMemberParameters158, _flaxMemberParameters123, _flaxMemberParameters159, _flaxMemberParameters124, _flaxMemberParameters125, _flaxMemberParameters160 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Stream<T extends unknown | null = unknown | null> extends AsyncIterable<T> { readonly __Stream: unique symbol;
readonly [_flaxDartTypeValue]: Stream<T>;
readonly [_flaxDartMethodCases]?: {map: _FlaxSignature2<T>;asyncMap: _FlaxSignature3<T>;asyncExpand: _FlaxSignature4<T>;expand: _FlaxSignature5<T>;transform: _FlaxSignature6<T>;fold: _FlaxSignature7<T>;cast: _FlaxSignature8<T>;drain: _FlaxSignature9<T>;};
readonly isBroadcast: boolean;
readonly length: Promise<number>;
readonly isEmpty: Promise<boolean>;
readonly first: Promise<T>;
readonly last: Promise<T>;
readonly single: Promise<T>;
asBroadcastStream(options?: {onCancel?: ((subscription: upstream4.StreamSubscription<T>) => void) | null | undefined; onListen?: ((subscription: upstream4.StreamSubscription<T>) => void) | null | undefined}): Stream<T>;
listen(onData: ((event: T) => void) | null, options?: {cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: upstream0.StackTrace) => void) | null | undefined}): upstream4.StreamSubscription<T>;
where(test: ((event: T) => boolean)): Stream<T>;
map<S extends unknown | null = unknown | null>(convert: ((event: T) => (S | _FlaxDartOutput<S>))): Stream<_FlaxDartOutput<S>>;
asyncMap<E extends unknown | null = unknown | null>(convert: ((event: T) => (E | _FlaxDartOutput<E>) | Promise<(E | _FlaxDartOutput<E>)>)): Stream<_FlaxDartOutput<E>>;
asyncExpand<E extends unknown | null = unknown | null>(convert: ((event: T) => (Stream<_FlaxDartOutput<E>> | Stream<(E | _FlaxDartOutput<E>)>) | null)): Stream<_FlaxDartOutput<E>>;
handleError(onError: ((p0: {}, p1?: upstream0.StackTrace) => void), options?: {test?: ((error: unknown | null) => boolean) | null | undefined}): Stream<T>;
expand<S extends unknown | null = unknown | null>(convert: ((element: T) => DartIterableInput<_FlaxDartOutput<S>, (S | _FlaxDartOutput<S>)>)): Stream<_FlaxDartOutput<S>>;
pipe(streamConsumer: Readonly<{ "__flaxBound:dart:async::StreamConsumer": readonly [T] }>): Promise<unknown | null>;
transform<S extends unknown | null = unknown | null>(streamTransformer: Readonly<{ "__flaxBound:dart:async::StreamTransformer": readonly [T, _FlaxDartOutput<S>] }>): Stream<_FlaxDartOutput<S>>;
reduce(combine: ((previous: T, element: T) => (T | DartInput<T>))): Promise<T>;
fold<S extends unknown | null = unknown | null>(initialValue: (S | _FlaxDartOutput<S>), combine: ((previous: _FlaxDartOutput<S>, element: T) => (S | _FlaxDartOutput<S>))): Promise<_FlaxDartOutput<S>>;
join(separator?: string): Promise<string>;
contains(needle: unknown | null): Promise<boolean>;
forEach(action: ((element: T) => void)): Promise<void>;
every(test: ((element: T) => boolean)): Promise<boolean>;
any(test: ((element: T) => boolean)): Promise<boolean>;
cast<R extends unknown | null = unknown | null>(): Stream<_FlaxDartOutput<R>>;
toList(): Promise<DartList<T>>;
toSet(): Promise<DartSet<T>>;
drain<E extends unknown | null = unknown | null>(futureValue?: (E | _FlaxDartOutput<E>) | null): Promise<_FlaxDartOutput<E>>;
take(count: number): Stream<T>;
takeWhile(test: ((element: T) => boolean)): Stream<T>;
skip(count: number): Stream<T>;
skipWhile(test: ((element: T) => boolean)): Stream<T>;
distinct(equals?: ((previous: T, next: T) => boolean) | null): Stream<T>;
firstWhere(test: ((element: T) => boolean), options?: {orElse?: (() => (T | DartInput<T>)) | null | undefined}): Promise<T>;
lastWhere(test: ((element: T) => boolean), options?: {orElse?: (() => (T | DartInput<T>)) | null | undefined}): Promise<T>;
singleWhere(test: ((element: T) => boolean), options?: {orElse?: (() => (T | DartInput<T>)) | null | undefined}): Promise<T>;
elementAt(index: number): Promise<T>;
timeout(timeLimit: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }>, options?: {onTimeout?: ((sink: upstream3.EventSink<T>) => void) | null | undefined}): Stream<T>;
}
defineStream("flax.core/flutter#type:Stream", ["isBroadcast","length","isEmpty","first","last","single"], _flaxBindingMethods("flax.core/flutter#type:Stream", "stream", {"asBroadcastStream":_flaxMemberParameters151,"listen":_flaxMemberParameters152,"where":_flaxMemberParameters115,"map":_flaxMemberParameters153,"asyncMap":_flaxMemberParameters153,"asyncExpand":_flaxMemberParameters153,"handleError":_flaxMemberParameters154,"expand":_flaxMemberParameters153,"pipe":_flaxMemberParameters155,"transform":_flaxMemberParameters156,"reduce":_flaxMemberParameters119,"fold":_flaxMemberParameters120,"join":_flaxMemberParameters121,"contains":_flaxMemberParameters157,"forEach":_flaxMemberParameters118,"every":_flaxMemberParameters115,"any":_flaxMemberParameters115,"cast":_flaxMemberParameters3,"toList":_flaxMemberParameters3,"toSet":_flaxMemberParameters3,"drain":_flaxMemberParameters158,"take":_flaxMemberParameters123,"takeWhile":_flaxMemberParameters115,"skip":_flaxMemberParameters123,"skipWhile":_flaxMemberParameters115,"distinct":_flaxMemberParameters159,"firstWhere":_flaxMemberParameters124,"lastWhere":_flaxMemberParameters124,"singleWhere":_flaxMemberParameters124,"elementAt":_flaxMemberParameters125,"timeout":_flaxMemberParameters160}, {"map":{"id":"map","parameters":[{"name":"convert","required":true,"positional":true}]},"asyncMap":{"id":"asyncMap","parameters":[{"name":"convert","required":true,"positional":true}]},"asyncExpand":{"id":"asyncExpand","parameters":[{"name":"convert","required":true,"positional":true}]},"expand":{"id":"expand","parameters":[{"name":"convert","required":true,"positional":true}]},"transform":{"id":"transform","parameters":[{"name":"streamTransformer","required":true,"positional":true}]},"fold":{"id":"fold","parameters":[{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}]},"cast":{"id":"cast","parameters":[]},"drain":{"id":"drain","parameters":[{"name":"futureValue","positional":true}]}}));
export namespace _StreamFactory {
export function fromAsyncIterable<T extends unknown | null >(source: AsyncIterable<T>): Stream<T> {
return constructAsyncIterableStream("flax.core/flutter#type:Stream", source) as Stream<T>;
} }
export namespace _StreamFactory {
export function empty<T extends unknown | null = unknown | null>(options: { broadcast?: boolean | undefined } = {}): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "empty", [{"name":"broadcast"}], [], options) as Stream<T>;
}
}
export namespace _StreamFactory {
export function value<T extends unknown | null = unknown | null>(value: (T | DartInput<T>)): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "value", [{"name":"value","required":true,"positional":true}], [value], {}) as Stream<T>;
}
}
export namespace _StreamFactory {
export function error<T extends unknown | null = unknown | null>(error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "error", [{"name":"error","required":true,"positional":true},{"name":"stackTrace","positional":true}], [error, stackTrace], {}) as Stream<T>;
}
}
export namespace _StreamFactory {
export function fromFuture<T extends unknown | null = unknown | null>(future: Promise<(T | DartInput<T>)>): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromFuture", [{"name":"future","required":true,"positional":true}], [future], {}) as Stream<T>;
}
}
export namespace _StreamFactory {
export function fromFutures<T extends unknown | null = unknown | null>(futures: DartIterableInput<Promise<T>, Promise<(T | DartInput<T>)>>): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromFutures", [{"name":"futures","required":true,"positional":true}], [futures], {}) as Stream<T>;
}
}
export namespace _StreamFactory {
export function fromIterable<T extends unknown | null = unknown | null>(elements: DartIterableInput<T, (T | DartInput<T>)>): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromIterable", [{"name":"elements","required":true,"positional":true}], [elements], {}) as Stream<T>;
}
}
export namespace _StreamFactory {
export function multi<T extends unknown | null = unknown | null>(onListen: ((p0: upstream1.MultiStreamController<T>) => void), options: { isBroadcast?: boolean | undefined } = {}): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "multi", [{"name":"onListen","required":true,"positional":true},{"name":"isBroadcast"}], [onListen], options) as Stream<T>;
}
}
export namespace _StreamFactory {
export function periodic<T extends unknown | null = unknown | null>(period: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }>, computation?: ((computationCount: number) => (T | DartInput<T>)) | null): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "periodic", [{"name":"period","required":true,"positional":true},{"name":"computation","positional":true}], [period, computation], {}) as Stream<T>;
}
}
export namespace _StreamFactory {
export function eventTransformed<T extends unknown | null = unknown | null>(source: Stream<unknown | null>, mapSink: ((sink: upstream3.EventSink<T>) => Readonly<{ "__flaxBound:dart:async::EventSink": readonly [unknown | null] }> & Readonly<{ "__flaxBound:dart:core::Sink": readonly [unknown | null] }>)): Stream<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "eventTransformed", [{"name":"source","required":true,"positional":true},{"name":"mapSink","required":true,"positional":true}], [source, mapSink], {}) as Stream<T>;
}
}
export namespace _StreamFactory { function _flaxDefault_castFrom<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(source: (Stream<_FlaxDartOutput<S>> | Stream<(S | _FlaxDartOutput<S>)>)): Stream<_FlaxDartOutput<T>> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Stream.castFrom", [source]);
return _flaxResult as Stream<_FlaxDartOutput<T>>;
}
export const castFrom = _flaxDefineDartCallTypes(_flaxDefault_castFrom, {"id":"flax.core/flutter#function:Stream.castFrom","parameters":[{"name":"source","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_castFrom, _FlaxSignature1>;
}
export const Stream: typeof _StreamFactory & _FlaxInstanceType<Stream<unknown | null>> & _FlaxDartType<Stream<unknown | null>, readonly ["class", "flax.core/flutter#type:Stream", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<Stream<unknown | null>, typeof _StreamFactory>(_StreamFactory, "flax.core/flutter#type:Stream", ["dart:core::Object"]) as typeof _StreamFactory & _FlaxInstanceType<Stream<unknown | null>> & _FlaxDartType<Stream<unknown | null>, readonly ["class", "flax.core/flutter#type:Stream", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(Stream, "flax.core/flutter#type:Stream", {"category":"stream","constructors":{"empty":[{"name":"broadcast","required":false,"positional":false}],"value":[{"name":"value","required":true,"positional":true}],"error":[{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}],"fromFuture":[{"name":"future","required":true,"positional":true}],"fromFutures":[{"name":"futures","required":true,"positional":true}],"fromIterable":[{"name":"elements","required":true,"positional":true}],"multi":[{"name":"onListen","required":true,"positional":true},{"name":"isBroadcast","required":false,"positional":false}],"periodic":[{"name":"period","required":true,"positional":true},{"name":"computation","required":false,"positional":true}],"eventTransformed":[{"name":"source","required":true,"positional":true},{"name":"mapSink","required":true,"positional":true}]}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {empty: (options?: {broadcast?: boolean | undefined})=> Stream<_Selected0>;value: (value: (_Selected0 | DartInput<_Selected0>))=> Stream<_Selected0>;error: (error: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null)=> Stream<_Selected0>;fromFuture: (future: Promise<(_Selected0 | DartInput<_Selected0>)>)=> Stream<_Selected0>;fromFutures: (futures: DartIterableInput<Promise<_Selected0>, Promise<(_Selected0 | DartInput<_Selected0>)>>)=> Stream<_Selected0>;fromIterable: (elements: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)=> Stream<_Selected0>;multi: (onListen: ((p0: upstream1.MultiStreamController<_Selected0>) => void), options?: {isBroadcast?: boolean | undefined})=> Stream<_Selected0>;periodic: (period: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }>, computation?: ((computationCount: number) => (_Selected0 | DartInput<_Selected0>)) | null)=> Stream<_Selected0>;eventTransformed: (source: Stream<unknown | null>, mapSink: ((sink: upstream3.EventSink<_Selected0>) => Readonly<{ "__flaxBound:dart:async::EventSink": readonly [unknown | null] }> & Readonly<{ "__flaxBound:dart:core::Sink": readonly [unknown | null] }>))=> Stream<_Selected0>;readonly prototype: Stream<_Selected0>;} & _FlaxInstanceType<Stream<_Selected0>> & _FlaxDartType<Stream<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (source: (Stream<_Selected0> | Stream<(_Selected0 | DartInput<_Selected0>)>)) => Stream<_Selected1> : never : never : never; }
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => Stream<_Selected0> : never : never; }
interface _FlaxSignature3<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => Stream<_Selected0> : never : never; }
interface _FlaxSignature4<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (Stream<_Selected0> | Stream<(_Selected0 | DartInput<_Selected0>)>) | null)) => Stream<_Selected0> : never : never; }
interface _FlaxSignature5<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => Stream<_Selected0> : never : never; }
interface _FlaxSignature6<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (streamTransformer: Readonly<{ "__flaxBound:dart:async::StreamTransformer": readonly [_OwnerType0, _Selected0] }>) => Stream<_Selected0> : never : never; }
interface _FlaxSignature7<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>),combine: ((previous: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => Promise<_Selected0> : never : never; }
interface _FlaxSignature8<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => Stream<_Selected0> : never : never; }
interface _FlaxSignature9<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never; }
