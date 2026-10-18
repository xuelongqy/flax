// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction, DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_StreamSubscription';
import '@flax/dart/async/_bindings/flutter_StreamSubscription';
import type * as upstream3 from '@flax/dart/async/_bindings/flutter_StreamConsumer';
import '@flax/dart/async/_bindings/flutter_StreamConsumer';
import type * as upstream4 from '@flax/dart/async/_bindings/flutter_StreamTransformer';
import '@flax/dart/async/_bindings/flutter_StreamTransformer';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream6 from '@flax/dart/async/_bindings/flutter_EventSink';
import '@flax/dart/async/_bindings/flutter_EventSink';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_StackTrace';
const _flaxMemberParameters0 = [{"name":"method","required":false,"positional":true},{"name":"url","required":false,"positional":true},{"name":"followLoops","required":false,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"onCancel","required":false,"positional":false},{"name":"onListen","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"onData","required":true,"positional":true},{"name":"cancelOnError","required":false,"positional":false},{"name":"onDone","required":false,"positional":false},{"name":"onError","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"test","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"convert","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"onError","required":true,"positional":true},{"name":"test","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"streamConsumer","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"streamTransformer","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"combine","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"separator","required":false,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"needle","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"action","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [] as const;
const _flaxMemberParameters14 = [{"name":"futureValue","required":false,"positional":true}] as const;
const _flaxMemberParameters15 = [{"name":"count","required":true,"positional":true}] as const;
const _flaxMemberParameters16 = [{"name":"equals","required":false,"positional":true}] as const;
const _flaxMemberParameters17 = [{"name":"test","required":true,"positional":true},{"name":"orElse","required":false,"positional":false}] as const;
const _flaxMemberParameters18 = [{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters19 = [{"name":"timeLimit","required":true,"positional":true},{"name":"onTimeout","required":false,"positional":false}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HttpClientResponse extends Omit<upstream0.Stream<DartList<number>>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:_http::HttpClientResponse": readonly [] }>, Readonly<{ "__flaxBound:dart:async::Stream": readonly [DartList<number>] }> { readonly __HttpClientResponse: unique symbol;
readonly [_flaxDartTypeValue]: HttpClientResponse;
readonly [_flaxDartMethodCases]?: {map: _FlaxSignature0;asyncMap: _FlaxSignature1;asyncExpand: _FlaxSignature2;expand: _FlaxSignature3;transform: _FlaxSignature4;fold: _FlaxSignature5;cast: _FlaxSignature6;drain: _FlaxSignature7;};
readonly statusCode: number;
readonly reasonPhrase: string;
readonly contentLength: number;
readonly persistentConnection: boolean;
readonly isRedirect: boolean;
readonly isBroadcast: boolean;
readonly length: Promise<number>;
readonly isEmpty: Promise<boolean>;
readonly first: Promise<DartList<number>>;
readonly last: Promise<DartList<number>>;
readonly single: Promise<DartList<number>>;
redirect(method?: string | null, url?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null, followLoops?: boolean | null): Promise<HttpClientResponse>;
asBroadcastStream: upstream0.Stream<DartList<number>>["asBroadcastStream"];
listen(onData: ((event: DartList<number>) => void) | null, options?: {cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: _FlaxDartFunction | null | undefined}): upstream2.StreamSubscription<DartList<number>>;
where: upstream0.Stream<DartList<number>>["where"];
map: upstream0.Stream<DartList<number>>["map"];
asyncMap: upstream0.Stream<DartList<number>>["asyncMap"];
asyncExpand: upstream0.Stream<DartList<number>>["asyncExpand"];
handleError(onError: _FlaxDartFunction, options?: {test?: ((error: unknown | null) => boolean) | null | undefined}): upstream0.Stream<DartList<number>>;
expand: upstream0.Stream<DartList<number>>["expand"];
pipe: upstream0.Stream<DartList<number>>["pipe"];
transform: upstream0.Stream<DartList<number>>["transform"];
reduce: upstream0.Stream<DartList<number>>["reduce"];
fold: upstream0.Stream<DartList<number>>["fold"];
join: upstream0.Stream<DartList<number>>["join"];
contains: upstream0.Stream<DartList<number>>["contains"];
forEach: upstream0.Stream<DartList<number>>["forEach"];
every: upstream0.Stream<DartList<number>>["every"];
any: upstream0.Stream<DartList<number>>["any"];
cast: upstream0.Stream<DartList<number>>["cast"];
toList: upstream0.Stream<DartList<number>>["toList"];
toSet: upstream0.Stream<DartList<number>>["toSet"];
drain: upstream0.Stream<DartList<number>>["drain"];
take: upstream0.Stream<DartList<number>>["take"];
takeWhile: upstream0.Stream<DartList<number>>["takeWhile"];
skip: upstream0.Stream<DartList<number>>["skip"];
skipWhile: upstream0.Stream<DartList<number>>["skipWhile"];
distinct: upstream0.Stream<DartList<number>>["distinct"];
firstWhere: upstream0.Stream<DartList<number>>["firstWhere"];
lastWhere: upstream0.Stream<DartList<number>>["lastWhere"];
singleWhere: upstream0.Stream<DartList<number>>["singleWhere"];
elementAt: upstream0.Stream<DartList<number>>["elementAt"];
timeout: upstream0.Stream<DartList<number>>["timeout"];
}
defineObject("flax.core/sdk_foundation#type:HttpClientResponse", ["statusCode","reasonPhrase","contentLength","persistentConnection","isRedirect","isBroadcast","length","isEmpty","first","last","single"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:HttpClientResponse", "object", {"redirect":_flaxMemberParameters0,"asBroadcastStream":_flaxMemberParameters1,"listen":_flaxMemberParameters2,"where":_flaxMemberParameters3,"map":_flaxMemberParameters4,"asyncMap":_flaxMemberParameters4,"asyncExpand":_flaxMemberParameters4,"handleError":_flaxMemberParameters5,"expand":_flaxMemberParameters4,"pipe":_flaxMemberParameters6,"transform":_flaxMemberParameters7,"reduce":_flaxMemberParameters8,"fold":_flaxMemberParameters9,"join":_flaxMemberParameters10,"contains":_flaxMemberParameters11,"forEach":_flaxMemberParameters12,"every":_flaxMemberParameters3,"any":_flaxMemberParameters3,"cast":_flaxMemberParameters13,"toList":_flaxMemberParameters13,"toSet":_flaxMemberParameters13,"drain":_flaxMemberParameters14,"take":_flaxMemberParameters15,"takeWhile":_flaxMemberParameters3,"skip":_flaxMemberParameters15,"skipWhile":_flaxMemberParameters3,"distinct":_flaxMemberParameters16,"firstWhere":_flaxMemberParameters17,"lastWhere":_flaxMemberParameters17,"singleWhere":_flaxMemberParameters17,"elementAt":_flaxMemberParameters18,"timeout":_flaxMemberParameters19}, {"map":{"id":"map","parameters":[{"name":"convert","required":true,"positional":true}]},"asyncMap":{"id":"asyncMap","parameters":[{"name":"convert","required":true,"positional":true}]},"asyncExpand":{"id":"asyncExpand","parameters":[{"name":"convert","required":true,"positional":true}]},"expand":{"id":"expand","parameters":[{"name":"convert","required":true,"positional":true}]},"transform":{"id":"transform","parameters":[{"name":"streamTransformer","required":true,"positional":true}]},"fold":{"id":"fold","parameters":[{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}]},"cast":{"id":"cast","parameters":[]},"drain":{"id":"drain","parameters":[{"name":"futureValue","required":false,"positional":true}]}}), []);
export const HttpClientResponse: object & _FlaxInstanceType<HttpClientResponse> & _FlaxDartType<HttpClientResponse, readonly ["class", "flax.core/sdk_foundation#type:HttpClientResponse", readonly [], false]> = _flaxBindInstanceType<HttpClientResponse, object>({}, "flax.core/sdk_foundation#type:HttpClientResponse", ["dart:core::Object","flax.core/flutter#type:Stream"]) as object & _FlaxInstanceType<HttpClientResponse> & _FlaxDartType<HttpClientResponse, readonly ["class", "flax.core/sdk_foundation#type:HttpClientResponse", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "statusCode" | "reasonPhrase" | "contentLength" | "persistentConnection" | "isRedirect" | "isBroadcast" | "length" | "isEmpty" | "first" | "last" | "single" | "redirect" | "asBroadcastStream" | "listen" | "where" | "map" | "asyncMap" | "asyncExpand" | "handleError" | "expand" | "pipe" | "transform" | "reduce" | "fold" | "join" | "contains" | "forEach" | "every" | "any" | "cast" | "toList" | "toSet" | "drain" | "take" | "takeWhile" | "skip" | "skipWhile" | "distinct" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "timeout" | "__flaxBound:dart:_http::HttpClientResponse" | "__flaxBound:dart:async::Stream";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: DartList<number>) => (_Selected0 | DartInput<_Selected0>))) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: DartList<number>) => (_Selected0 | DartInput<_Selected0>) | Promise<(_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((event: DartList<number>) => (upstream0.Stream<_Selected0> | upstream0.Stream<(_Selected0 | DartInput<_Selected0>)>) | null)) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (convert: ((element: DartList<number>) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (streamTransformer: Readonly<{ "__flaxBound:dart:async::StreamTransformer": readonly [DartList<number>, _Selected0] }>) => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>),combine: ((previous: _Selected0, element: DartList<number>) => (_Selected0 | DartInput<_Selected0>))) => Promise<_Selected0> : never : never; }
interface _FlaxSignature6 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => upstream0.Stream<_Selected0> : never : never; }
interface _FlaxSignature7 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (futureValue?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<_Selected0> : never : never; }
