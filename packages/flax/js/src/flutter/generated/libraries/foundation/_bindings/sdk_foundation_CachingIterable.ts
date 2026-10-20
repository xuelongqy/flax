// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import { _flaxMemberParameters12, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters10, _flaxMemberParameters16, _flaxMemberParameters1, _flaxMemberParameters17, _flaxMemberParameters18, _flaxMemberParameters19, _flaxMemberParameters20, _flaxMemberParameters21, _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters24 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CachingIterable<E extends unknown | null = unknown | null> extends Omit<DartIterable<E>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/basic_types.dart::CachingIterable": readonly [E] }>, Readonly<{ "__flaxBound:dart:core::Iterable": readonly [E] }> { readonly __CachingIterable: unique symbol;
readonly [_flaxDartTypeValue]: CachingIterable<E>;
readonly [_flaxDartMethodCases]?: {map: _FlaxSignature1<E>;expand: _FlaxSignature2<E>;cast: _FlaxSignature3<E>;whereType: _FlaxSignature4<E>;fold: _FlaxSignature5<E>;};
readonly iterator: upstream0.Iterator<E>;
readonly length: number;
readonly isEmpty: boolean;
readonly isNotEmpty: boolean;
readonly first: E;
readonly last: E;
readonly single: E;
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
}
defineObject("flax.core/sdk_foundation#type:CachingIterable", ["iterator","length","isEmpty","isNotEmpty","first","last","single"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:CachingIterable", "object", {"map":_flaxMemberParameters12,"where":_flaxMemberParameters13,"expand":_flaxMemberParameters14,"take":_flaxMemberParameters15,"takeWhile":_flaxMemberParameters13,"skip":_flaxMemberParameters15,"skipWhile":_flaxMemberParameters13,"elementAt":_flaxMemberParameters10,"toList":_flaxMemberParameters16,"cast":_flaxMemberParameters1,"followedBy":_flaxMemberParameters17,"whereType":_flaxMemberParameters1,"contains":_flaxMemberParameters18,"forEach":_flaxMemberParameters19,"reduce":_flaxMemberParameters20,"fold":_flaxMemberParameters21,"every":_flaxMemberParameters13,"join":_flaxMemberParameters22,"any":_flaxMemberParameters13,"toSet":_flaxMemberParameters1,"firstWhere":_flaxMemberParameters23,"lastWhere":_flaxMemberParameters23,"singleWhere":_flaxMemberParameters23}, {"map":{"id":"map","parameters":[{"name":"toElement","required":true,"positional":true}]},"expand":{"id":"expand","parameters":[{"name":"toElements","required":true,"positional":true}]},"cast":{"id":"cast","parameters":[]},"whereType":{"id":"whereType","parameters":[]},"fold":{"id":"fold","parameters":[{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}]}}), [], "iterable");
export function _CachingIterableFactory<E extends unknown | null = unknown | null>(_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [_FlaxDartOutput<E>] }>): CachingIterable<E>;
export function _CachingIterableFactory(_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>): CachingIterable<unknown | null>;
export function _CachingIterableFactory(_prefillIterator: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:CachingIterable", "", [{"name":"_prefillIterator","required":true,"positional":true}], [_prefillIterator], {}) as CachingIterable<unknown | null>;
}
const _CachingIterableProxy = {type: "flax.core/sdk_foundation#type:CachingIterable", parameters: _flaxMemberParameters24, constructors: {"": _flaxMemberParameters24}, methods: {"map":_flaxMemberParameters12,"where":_flaxMemberParameters13,"expand":_flaxMemberParameters14,"take":_flaxMemberParameters15,"takeWhile":_flaxMemberParameters13,"skip":_flaxMemberParameters15,"skipWhile":_flaxMemberParameters13,"elementAt":_flaxMemberParameters10,"toList":_flaxMemberParameters16,"cast":_flaxMemberParameters1,"followedBy":_flaxMemberParameters17,"whereType":_flaxMemberParameters1,"contains":_flaxMemberParameters18,"forEach":_flaxMemberParameters19,"reduce":_flaxMemberParameters20,"fold":_flaxMemberParameters21,"every":_flaxMemberParameters13,"join":_flaxMemberParameters22,"any":_flaxMemberParameters13,"toSet":_flaxMemberParameters1,"firstWhere":_flaxMemberParameters23,"lastWhere":_flaxMemberParameters23,"singleWhere":_flaxMemberParameters23}, getters: ["iterator","length","isEmpty","isNotEmpty","first","last","single"], setters: [], contextMembers: ["map","expand","cast","whereType","fold"], superMembers: ["get:iterator","get:length","get:isEmpty","get:isNotEmpty","get:first","get:last","get:single","map","where","expand","take","takeWhile","skip","skipWhile","elementAt","toList","cast","followedBy","whereType","contains","forEach","reduce","fold","every","join","any","toSet","firstWhere","lastWhere","singleWhere"]} as const;
export interface _CachingIterableNative<E extends unknown | null = unknown | null> extends CachingIterable<E> {
readonly [_flaxDartTypeValue]: _CachingIterableNative<E>;
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
export abstract class _CachingIterableNative<E extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CachingIterable<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CachingIterable<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:CachingIterable", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature11;
constructor(_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>) { super(_CachingIterableProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CachingIterableNative.prototype, _CachingIterableProxy);
export namespace _CachingIterableFactory { export function implement<E extends unknown | null = unknown | null>(args: [_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>], implementation: {}): CachingIterable<E> {
return constructProxy(_CachingIterableProxy, args, implementation) as CachingIterable<E>; } }
const _CachingIterableBinding = _flaxProxyFactory(_CachingIterableFactory, _CachingIterableNative) as unknown as typeof _CachingIterableFactory & (new<E extends unknown | null = unknown | null>(_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>) => _CachingIterableNative<E>);
export const CachingIterable: typeof _CachingIterableBinding & _FlaxInstanceType<CachingIterable<unknown | null>> & _FlaxDartType<CachingIterable<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:CachingIterable", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<CachingIterable<unknown | null>, typeof _CachingIterableBinding>(_CachingIterableBinding, "flax.core/sdk_foundation#type:CachingIterable", ["dart:core::Iterable","dart:core::Object"]) as typeof _CachingIterableBinding & _FlaxInstanceType<CachingIterable<unknown | null>> & _FlaxDartType<CachingIterable<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:CachingIterable", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(CachingIterable, "flax.core/sdk_foundation#type:CachingIterable", {...{"category":"object","constructors":{"":[{"name":"_prefillIterator","required":true,"positional":true}]}}, proxy: _CachingIterableProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "iterator" | "length" | "isEmpty" | "isNotEmpty" | "first" | "last" | "single" | "map" | "where" | "expand" | "take" | "takeWhile" | "skip" | "skipWhile" | "elementAt" | "toList" | "cast" | "followedBy" | "whereType" | "contains" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toSet" | "firstWhere" | "lastWhere" | "singleWhere" | "__flaxBound:package:flutter/src/foundation/basic_types.dart::CachingIterable" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>) => _CachingIterableNative<_Selected0>) & {(_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [_Selected0] }>): _CachingIterableNative<_Selected0>;readonly prototype: _CachingIterableNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>], implementation: Partial<_CachingIterableNative<_Selected0>>): _CachingIterableNative<_Selected0>;} & _FlaxInstanceType<_CachingIterableNative<_Selected0>> & _FlaxDartType<_CachingIterableNative<_Selected0>> : never : never; }
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
interface _FlaxSignature11 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>) => _CachingIterableNative<_Selected0>) & {(_prefillIterator: Readonly<{ "__flaxBound:dart:core::Iterator": readonly [_Selected0] }>): _CachingIterableNative<_Selected0>;readonly prototype: _CachingIterableNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Iterator": readonly [unknown | null] }>], implementation: Partial<_CachingIterableNative<_Selected0>>): _CachingIterableNative<_Selected0>;} & _FlaxInstanceType<_CachingIterableNative<_Selected0>> & _FlaxDartType<_CachingIterableNative<_Selected0>> : never : never; }
