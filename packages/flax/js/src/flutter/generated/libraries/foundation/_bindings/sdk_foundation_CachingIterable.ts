// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
const _flaxMemberParameters0 = [{"name":"toElement","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"test","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"toElements","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"count","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"growable"}] as const;
const _flaxMemberParameters6 = [] as const;
const _flaxMemberParameters7 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"element","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"action","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"combine","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"separator","positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"test","required":true,"positional":true},{"name":"orElse"}] as const;
const _flaxMemberParameters14 = [{"name":"_prefillIterator","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CachingIterable<E extends unknown | null = unknown | null> extends Omit<DartIterable<E>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/basic_types.dart::CachingIterable": readonly [E] }>, Readonly<{ "__flaxBound:dart:core::Iterable": readonly [E] }> { readonly __CachingIterable: unique symbol;
readonly [_flaxDartTypeValue]: CachingIterable<E>;
readonly [_flaxDartMethodCases]?: {map: _FlaxSignature1<E>;expand: _FlaxSignature2<E>;cast: _FlaxSignature3<E>;whereType: _FlaxSignature4<E>;fold: _FlaxSignature5<E>;};
}
defineObject("flax.core/sdk_foundation#type:CachingIterable", ["iterator","length","isEmpty","isNotEmpty","first","last","single"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:CachingIterable", "object", {"map":_flaxMemberParameters0,"where":_flaxMemberParameters1,"expand":_flaxMemberParameters2,"take":_flaxMemberParameters3,"takeWhile":_flaxMemberParameters1,"skip":_flaxMemberParameters3,"skipWhile":_flaxMemberParameters1,"elementAt":_flaxMemberParameters4,"toList":_flaxMemberParameters5,"cast":_flaxMemberParameters6,"followedBy":_flaxMemberParameters7,"whereType":_flaxMemberParameters6,"contains":_flaxMemberParameters8,"forEach":_flaxMemberParameters9,"reduce":_flaxMemberParameters10,"fold":_flaxMemberParameters11,"every":_flaxMemberParameters1,"join":_flaxMemberParameters12,"any":_flaxMemberParameters1,"toSet":_flaxMemberParameters6,"firstWhere":_flaxMemberParameters13,"lastWhere":_flaxMemberParameters13,"singleWhere":_flaxMemberParameters13}, {"map":{"id":"map","parameters":[{"name":"toElement","required":true,"positional":true}]},"expand":{"id":"expand","parameters":[{"name":"toElements","required":true,"positional":true}]},"cast":{"id":"cast","parameters":[]},"whereType":{"id":"whereType","parameters":[]},"fold":{"id":"fold","parameters":[{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}]}}), [], "iterable");
const _CachingIterableProxy = {type: "flax.core/sdk_foundation#type:CachingIterable", parameters: _flaxMemberParameters14, constructors: {"": _flaxMemberParameters14}, methods: {"map":_flaxMemberParameters0,"where":_flaxMemberParameters1,"expand":_flaxMemberParameters2,"take":_flaxMemberParameters3,"takeWhile":_flaxMemberParameters1,"skip":_flaxMemberParameters3,"skipWhile":_flaxMemberParameters1,"elementAt":_flaxMemberParameters4,"toList":_flaxMemberParameters5,"cast":_flaxMemberParameters6,"followedBy":_flaxMemberParameters7,"whereType":_flaxMemberParameters6,"contains":_flaxMemberParameters8,"forEach":_flaxMemberParameters9,"reduce":_flaxMemberParameters10,"fold":_flaxMemberParameters11,"every":_flaxMemberParameters1,"join":_flaxMemberParameters12,"any":_flaxMemberParameters1,"toSet":_flaxMemberParameters6,"firstWhere":_flaxMemberParameters13,"lastWhere":_flaxMemberParameters13,"singleWhere":_flaxMemberParameters13}, getters: ["iterator","length","isEmpty","isNotEmpty","first","last","single"], setters: [], contextMembers: ["map","expand","cast","whereType","fold"], superMembers: ["get:iterator","get:length","get:isEmpty","get:isNotEmpty","get:first","get:last","get:single","map","where","expand","take","takeWhile","skip","skipWhile","elementAt","toList","cast","followedBy","whereType","contains","forEach","reduce","fold","every","join","any","toSet","firstWhere","lastWhere","singleWhere"]} as const;
export interface CachingIterable<E extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: CachingIterable<E>;
readonly [_flaxDartMethodCases]?: {map: _FlaxSignature6<E>;expand: _FlaxSignature7<E>;cast: _FlaxSignature8<E>;whereType: _FlaxSignature9<E>;fold: _FlaxSignature10<E>;};
map<T extends unknown | null = unknown | null>(toElement: ((e: E) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
where(test: ((element: E) => boolean)): DartIterable<E>;
expand<T extends unknown | null = unknown | null>(toElements: ((element: E) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
take(count: number): DartIterable<E>;
takeWhile(test: ((value: E) => boolean)): DartIterable<E>;
skip(count: number): DartIterable<E>;
skipWhile(test: ((value: E) => boolean)): DartIterable<E>;
elementAt(index: number): E;
toList(options?: {growable?: boolean | undefined}): DartList<E>;
cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
followedBy(other: DartIterableInput<E, (E | DartInput<E>)>): DartIterable<E>;
whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
contains(element: unknown | null): boolean;
forEach(action: ((element: E) => void)): void;
reduce(combine: ((value: E, element: E) => (E | DartInput<E>))): E;
fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: E) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
every(test: ((element: E) => boolean)): boolean;
join(separator?: string): string;
any(test: ((element: E) => boolean)): boolean;
toSet(): DartSet<E>;
firstWhere(test: ((element: E) => boolean), options?: {orElse?: (() => (E | DartInput<E>)) | null | undefined}): E;
lastWhere(test: ((element: E) => boolean), options?: {orElse?: (() => (E | DartInput<E>)) | null | undefined}): E;
singleWhere(test: ((element: E) => boolean), options?: {orElse?: (() => (E | DartInput<E>)) | null | undefined}): E;
get iterator(): upstream0.Iterator<E>;
get length(): number;
get isEmpty(): boolean;
get isNotEmpty(): boolean;
get first(): E;
get last(): E;
get single(): E;
}
export abstract class CachingIterable<E extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CachingIterable<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CachingIterable<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:CachingIterable", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature11;
constructor(_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>) { super(_CachingIterableProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CachingIterable.prototype, _CachingIterableProxy);
export namespace CachingIterable { export function implement<E extends unknown | null = unknown | null>(args: [_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>], implementation: {}): CachingIterable<E> {
return constructProxy(_CachingIterableProxy, args, implementation) as CachingIterable<E>; } }
_flaxBindInstanceType<CachingIterable<unknown | null>, typeof CachingIterable>(CachingIterable, "flax.core/sdk_foundation#type:CachingIterable", ["dart:core::Iterable","dart:core::Object"]);
_flaxDefineDartTypes(CachingIterable, "flax.core/sdk_foundation#type:CachingIterable", {...{"category":"object","constructors":{}}, proxy: _CachingIterableProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "iterator" | "length" | "isEmpty" | "isNotEmpty" | "first" | "last" | "single" | "map" | "where" | "expand" | "take" | "takeWhile" | "skip" | "skipWhile" | "elementAt" | "toList" | "cast" | "followedBy" | "whereType" | "contains" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toSet" | "firstWhere" | "lastWhere" | "singleWhere" | "__flaxBound:package:flutter/src/foundation/basic_types.dart::CachingIterable" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>) => CachingIterable<_Selected0>) & {readonly prototype: CachingIterable<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>], implementation: Partial<CachingIterable<_Selected0>>): CachingIterable<_Selected0>;} & _FlaxInstanceType<CachingIterable<_Selected0>> & _FlaxDartType<CachingIterable<_Selected0>> : never : never; }
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature3<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature4<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature5<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>),combine: ((previousValue: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never; }
interface _FlaxSignature6<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature7<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature8<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature9<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature10<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>),combine: ((previousValue: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never; }
interface _FlaxSignature11 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>) => CachingIterable<_Selected0>) & {readonly prototype: CachingIterable<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>], implementation: Partial<CachingIterable<_Selected0>>): CachingIterable<_Selected0>;} & _FlaxInstanceType<CachingIterable<_Selected0>> & _FlaxDartType<CachingIterable<_Selected0>> : never : never; }
