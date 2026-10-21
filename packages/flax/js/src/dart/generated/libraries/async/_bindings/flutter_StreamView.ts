// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
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
import { _flaxMemberParameters191, _flaxMemberParameters192, _flaxMemberParameters154, _flaxMemberParameters193, _flaxMemberParameters194, _flaxMemberParameters195, _flaxMemberParameters196, _flaxMemberParameters158, _flaxMemberParameters159, _flaxMemberParameters160, _flaxMemberParameters197, _flaxMemberParameters157, _flaxMemberParameters4, _flaxMemberParameters198, _flaxMemberParameters162, _flaxMemberParameters199, _flaxMemberParameters163, _flaxMemberParameters164, _flaxMemberParameters200 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamView<T extends unknown | null = unknown | null> extends AsyncIterable<T> { readonly __StreamView: unique symbol;
readonly [_flaxDartTypeValue]: StreamView<T>;
readonly [_flaxDartMethodCases]?: {map: _FlaxSignature1<T>;asyncMap: _FlaxSignature2<T>;asyncExpand: _FlaxSignature3<T>;expand: _FlaxSignature4<T>;transform: _FlaxSignature5<T>;fold: _FlaxSignature6<T>;cast: _FlaxSignature7<T>;drain: _FlaxSignature8<T>;};
readonly isBroadcast: boolean;
readonly length: Promise<number>;
readonly isEmpty: Promise<boolean>;
readonly first: Promise<T>;
readonly last: Promise<T>;
readonly single: Promise<T>;
asBroadcastStream: upstream0.Stream<T>["asBroadcastStream"];
listen(onData: ((value: T) => void) | null, options?: {cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: upstream2.StackTrace) => void) | null | undefined}): upstream1.StreamSubscription<T>;
where: upstream0.Stream<T>["where"];
map: upstream0.Stream<T>["map"];
asyncMap: upstream0.Stream<T>["asyncMap"];
asyncExpand: upstream0.Stream<T>["asyncExpand"];
handleError: upstream0.Stream<T>["handleError"];
expand: upstream0.Stream<T>["expand"];
pipe: upstream0.Stream<T>["pipe"];
transform: upstream0.Stream<T>["transform"];
reduce: upstream0.Stream<T>["reduce"];
fold: upstream0.Stream<T>["fold"];
join: upstream0.Stream<T>["join"];
contains: upstream0.Stream<T>["contains"];
forEach: upstream0.Stream<T>["forEach"];
every: upstream0.Stream<T>["every"];
any: upstream0.Stream<T>["any"];
cast: upstream0.Stream<T>["cast"];
toList: upstream0.Stream<T>["toList"];
toSet: upstream0.Stream<T>["toSet"];
drain: upstream0.Stream<T>["drain"];
take: upstream0.Stream<T>["take"];
takeWhile: upstream0.Stream<T>["takeWhile"];
skip: upstream0.Stream<T>["skip"];
skipWhile: upstream0.Stream<T>["skipWhile"];
distinct: upstream0.Stream<T>["distinct"];
firstWhere: upstream0.Stream<T>["firstWhere"];
lastWhere: upstream0.Stream<T>["lastWhere"];
singleWhere: upstream0.Stream<T>["singleWhere"];
elementAt: upstream0.Stream<T>["elementAt"];
timeout: upstream0.Stream<T>["timeout"];
}
defineStream("flax.core/flutter#type:StreamView", ["isBroadcast","length","isEmpty","first","last","single"], _flaxBindingMethods("flax.core/flutter#type:StreamView", "stream", {"asBroadcastStream":_flaxMemberParameters191,"listen":_flaxMemberParameters192,"where":_flaxMemberParameters154,"map":_flaxMemberParameters193,"asyncMap":_flaxMemberParameters193,"asyncExpand":_flaxMemberParameters193,"handleError":_flaxMemberParameters194,"expand":_flaxMemberParameters193,"pipe":_flaxMemberParameters195,"transform":_flaxMemberParameters196,"reduce":_flaxMemberParameters158,"fold":_flaxMemberParameters159,"join":_flaxMemberParameters160,"contains":_flaxMemberParameters197,"forEach":_flaxMemberParameters157,"every":_flaxMemberParameters154,"any":_flaxMemberParameters154,"cast":_flaxMemberParameters4,"toList":_flaxMemberParameters4,"toSet":_flaxMemberParameters4,"drain":_flaxMemberParameters198,"take":_flaxMemberParameters162,"takeWhile":_flaxMemberParameters154,"skip":_flaxMemberParameters162,"skipWhile":_flaxMemberParameters154,"distinct":_flaxMemberParameters199,"firstWhere":_flaxMemberParameters163,"lastWhere":_flaxMemberParameters163,"singleWhere":_flaxMemberParameters163,"elementAt":_flaxMemberParameters164,"timeout":_flaxMemberParameters200}, {"map":{"id":"map","parameters":[{"name":"convert","required":true,"positional":true}]},"asyncMap":{"id":"asyncMap","parameters":[{"name":"convert","required":true,"positional":true}]},"asyncExpand":{"id":"asyncExpand","parameters":[{"name":"convert","required":true,"positional":true}]},"expand":{"id":"expand","parameters":[{"name":"convert","required":true,"positional":true}]},"transform":{"id":"transform","parameters":[{"name":"streamTransformer","required":true,"positional":true}]},"fold":{"id":"fold","parameters":[{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}]},"cast":{"id":"cast","parameters":[]},"drain":{"id":"drain","parameters":[{"name":"futureValue","positional":true}]}}));
export function _StreamViewFactory<T extends unknown | null = unknown | null>(stream: (upstream0.Stream<T> | upstream0.Stream<(T | DartInput<T>)>)): StreamView<T> {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:StreamView", "", [{"name":"stream","required":true,"positional":true}], [stream], {}) as StreamView<T>;
}
export const StreamView: typeof _StreamViewFactory & _FlaxInstanceType<StreamView<unknown | null>> & _FlaxDartType<StreamView<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamView", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<StreamView<unknown | null>, typeof _StreamViewFactory>(_StreamViewFactory, "flax.core/flutter#type:StreamView", ["flax.core/flutter#type:Stream","dart:core::Object"]) as typeof _StreamViewFactory & _FlaxInstanceType<StreamView<unknown | null>> & _FlaxDartType<StreamView<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamView", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(StreamView, "flax.core/flutter#type:StreamView", {"category":"stream","constructors":{"":[{"name":"stream","required":true,"positional":true}]}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {(stream: (upstream0.Stream<_Selected0> | upstream0.Stream<(_Selected0 | DartInput<_Selected0>)>)): StreamView<_Selected0>;readonly prototype: StreamView<_Selected0>;} & _FlaxInstanceType<StreamView<_Selected0>> & _FlaxDartType<StreamView<_Selected0>> : never : never; }
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature3<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: _OwnerType0) => (upstream0.Stream<_Selected0> | upstream0.Stream<(_Selected0 | DartInput<_Selected0>)>) | null)) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature4<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature5<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (streamTransformer: Readonly<{ "__flaxBound:dart:async::StreamTransformer": readonly [_OwnerType0, _Selected0] }>) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature6<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>),combine: ((previous: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => Promise<_Selected0> : never : never; }
interface _FlaxSignature7<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature8<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never; }
