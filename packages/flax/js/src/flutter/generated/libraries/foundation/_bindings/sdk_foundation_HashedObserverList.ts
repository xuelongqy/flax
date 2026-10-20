// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import { _flaxMemberParameters64, _flaxMemberParameters1, _flaxMemberParameters18, _flaxMemberParameters16, _flaxMemberParameters17, _flaxMemberParameters12, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters19, _flaxMemberParameters20, _flaxMemberParameters21, _flaxMemberParameters22, _flaxMemberParameters15, _flaxMemberParameters23, _flaxMemberParameters10 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HashedObserverList<T extends unknown | null = unknown | null> extends Omit<DartIterable<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/observer_list.dart::HashedObserverList": readonly [T] }>, Readonly<{ "__flaxBound:dart:core::Iterable": readonly [T] }> { readonly __HashedObserverList: unique symbol;
readonly [_flaxDartTypeValue]: HashedObserverList<T>;
readonly [_flaxDartMethodCases]?: {cast: _FlaxSignature1<T>;map: _FlaxSignature2<T>;whereType: _FlaxSignature3<T>;expand: _FlaxSignature4<T>;fold: _FlaxSignature5<T>;};
readonly iterator: upstream0.Iterator<T>;
readonly isEmpty: boolean;
readonly isNotEmpty: boolean;
readonly length: number;
readonly first: T;
readonly last: T;
readonly single: T;
add(item: (T | DartInput<T>)): void;
remove(item: (T | DartInput<T>)): boolean;
clear(): void;
contains(element: unknown | null): boolean;
toList(options?: {growable?: boolean | undefined}): DartList<T>;
cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
followedBy(other: DartIterableInput<T, (T | DartInput<T>)>): DartIterable<T>;
map<T extends unknown | null = unknown | null>(toElement: ((e: _FlaxDartOutput<T>) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
where(test: ((element: T) => boolean)): DartIterable<T>;
whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
expand<T extends unknown | null = unknown | null>(toElements: ((element: _FlaxDartOutput<T>) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
forEach(action: ((element: T) => void)): void;
reduce(combine: ((value: T, element: T) => (T | DartInput<T>))): T;
fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: _FlaxDartOutput<T>) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
every(test: ((element: T) => boolean)): boolean;
join(separator?: string): string;
any(test: ((element: T) => boolean)): boolean;
toSet(): DartSet<T>;
take(count: number): DartIterable<T>;
takeWhile(test: ((value: T) => boolean)): DartIterable<T>;
skip(count: number): DartIterable<T>;
skipWhile(test: ((value: T) => boolean)): DartIterable<T>;
firstWhere(test: ((element: T) => boolean), options?: {orElse?: (() => (T | DartInput<T>)) | null | undefined}): T;
lastWhere(test: ((element: T) => boolean), options?: {orElse?: (() => (T | DartInput<T>)) | null | undefined}): T;
singleWhere(test: ((element: T) => boolean), options?: {orElse?: (() => (T | DartInput<T>)) | null | undefined}): T;
elementAt(index: number): T;
}
defineObject("flax.core/sdk_foundation#type:HashedObserverList", ["iterator","isEmpty","isNotEmpty","length","first","last","single"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:HashedObserverList", "object", {"add":_flaxMemberParameters64,"remove":_flaxMemberParameters64,"clear":_flaxMemberParameters1,"contains":_flaxMemberParameters18,"toList":_flaxMemberParameters16,"cast":_flaxMemberParameters1,"followedBy":_flaxMemberParameters17,"map":_flaxMemberParameters12,"where":_flaxMemberParameters13,"whereType":_flaxMemberParameters1,"expand":_flaxMemberParameters14,"forEach":_flaxMemberParameters19,"reduce":_flaxMemberParameters20,"fold":_flaxMemberParameters21,"every":_flaxMemberParameters13,"join":_flaxMemberParameters22,"any":_flaxMemberParameters13,"toSet":_flaxMemberParameters1,"take":_flaxMemberParameters15,"takeWhile":_flaxMemberParameters13,"skip":_flaxMemberParameters15,"skipWhile":_flaxMemberParameters13,"firstWhere":_flaxMemberParameters23,"lastWhere":_flaxMemberParameters23,"singleWhere":_flaxMemberParameters23,"elementAt":_flaxMemberParameters10}, {"cast":{"id":"cast","parameters":[]},"map":{"id":"map","parameters":[{"name":"toElement","required":true,"positional":true}]},"whereType":{"id":"whereType","parameters":[]},"expand":{"id":"expand","parameters":[{"name":"toElements","required":true,"positional":true}]},"fold":{"id":"fold","parameters":[{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}]}}), [], "iterable");
export function _HashedObserverListFactory<T extends unknown | null = unknown | null>(): HashedObserverList<T>;
export function _HashedObserverListFactory(): HashedObserverList<unknown | null>;
export function _HashedObserverListFactory(): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:HashedObserverList", "", _flaxMemberParameters1, [], {}) as HashedObserverList<unknown | null>;
}
const _HashedObserverListProxy = {type: "flax.core/sdk_foundation#type:HashedObserverList", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"add":_flaxMemberParameters64,"remove":_flaxMemberParameters64,"clear":_flaxMemberParameters1,"contains":_flaxMemberParameters18,"toList":_flaxMemberParameters16,"cast":_flaxMemberParameters1,"followedBy":_flaxMemberParameters17,"map":_flaxMemberParameters12,"where":_flaxMemberParameters13,"whereType":_flaxMemberParameters1,"expand":_flaxMemberParameters14,"forEach":_flaxMemberParameters19,"reduce":_flaxMemberParameters20,"fold":_flaxMemberParameters21,"every":_flaxMemberParameters13,"join":_flaxMemberParameters22,"any":_flaxMemberParameters13,"toSet":_flaxMemberParameters1,"take":_flaxMemberParameters15,"takeWhile":_flaxMemberParameters13,"skip":_flaxMemberParameters15,"skipWhile":_flaxMemberParameters13,"firstWhere":_flaxMemberParameters23,"lastWhere":_flaxMemberParameters23,"singleWhere":_flaxMemberParameters23,"elementAt":_flaxMemberParameters10}, getters: ["iterator","isEmpty","isNotEmpty","length","first","last","single"], setters: [], contextMembers: ["cast","map","whereType","expand","fold"], superMembers: ["get:iterator","get:isEmpty","get:isNotEmpty","get:length","get:first","get:last","get:single","add","remove","clear","contains","toList","cast","followedBy","map","where","whereType","expand","forEach","reduce","fold","every","join","any","toSet","take","takeWhile","skip","skipWhile","firstWhere","lastWhere","singleWhere","elementAt"]} as const;
export interface _HashedObserverListNative<T extends unknown | null = unknown | null> extends HashedObserverList<T> {
readonly [_flaxDartTypeValue]: _HashedObserverListNative<T>;
readonly [_flaxDartMethodCases]?: {cast: _FlaxSignature6<T>;map: _FlaxSignature7<T>;whereType: _FlaxSignature8<T>;expand: _FlaxSignature9<T>;fold: _FlaxSignature10<T>;};
add(item: (T | DartInput<T>)): void;
remove(item: (T | DartInput<T>)): boolean;
clear(): void;
contains(element: unknown | null): boolean;
toList(options?: {growable?: boolean | undefined}): DartList<T>;
cast<R extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<R>>;
followedBy(other: DartIterableInput<T, (T | DartInput<T>)>): DartIterable<T>;
map<T extends unknown | null = unknown | null>(toElement: ((e: _FlaxDartOutput<T>) => (T | _FlaxDartOutput<T>))): DartIterable<_FlaxDartOutput<T>>;
where(test: ((element: T) => boolean)): DartIterable<T>;
whereType<T extends unknown | null = unknown | null>(): DartIterable<_FlaxDartOutput<T>>;
expand<T extends unknown | null = unknown | null>(toElements: ((element: _FlaxDartOutput<T>) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>)): DartIterable<_FlaxDartOutput<T>>;
forEach(action: ((element: T) => void)): void;
reduce(combine: ((value: T, element: T) => (T | DartInput<T>))): T;
fold<T extends unknown | null = unknown | null>(initialValue: (T | _FlaxDartOutput<T>), combine: ((previousValue: _FlaxDartOutput<T>, element: _FlaxDartOutput<T>) => (T | _FlaxDartOutput<T>))): _FlaxDartOutput<T>;
every(test: ((element: T) => boolean)): boolean;
join(separator?: string): string;
any(test: ((element: T) => boolean)): boolean;
toSet(): DartSet<T>;
take(count: number): DartIterable<T>;
takeWhile(test: ((value: T) => boolean)): DartIterable<T>;
skip(count: number): DartIterable<T>;
skipWhile(test: ((value: T) => boolean)): DartIterable<T>;
firstWhere(test: ((element: T) => boolean), options?: {orElse?: (() => (T | DartInput<T>)) | null | undefined}): T;
lastWhere(test: ((element: T) => boolean), options?: {orElse?: (() => (T | DartInput<T>)) | null | undefined}): T;
singleWhere(test: ((element: T) => boolean), options?: {orElse?: (() => (T | DartInput<T>)) | null | undefined}): T;
elementAt(index: number): T;
get iterator(): upstream0.Iterator<T>;
get isEmpty(): boolean;
get isNotEmpty(): boolean;
get length(): number;
get first(): T;
get last(): T;
get single(): T;
}
export abstract class _HashedObserverListNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HashedObserverList<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: HashedObserverList<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:HashedObserverList", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature11;
constructor() { super(_HashedObserverListProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_HashedObserverListNative.prototype, _HashedObserverListProxy);
export namespace _HashedObserverListFactory { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): HashedObserverList<T> {
return constructProxy(_HashedObserverListProxy, args, implementation) as HashedObserverList<T>; } }
const _HashedObserverListBinding = _flaxProxyFactory(_HashedObserverListFactory, _HashedObserverListNative) as unknown as typeof _HashedObserverListFactory & (new<T extends unknown | null = unknown | null>() => _HashedObserverListNative<T>);
export const HashedObserverList: typeof _HashedObserverListBinding & _FlaxInstanceType<HashedObserverList<unknown | null>> & _FlaxDartType<HashedObserverList<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:HashedObserverList", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<HashedObserverList<unknown | null>, typeof _HashedObserverListBinding>(_HashedObserverListBinding, "flax.core/sdk_foundation#type:HashedObserverList", ["dart:core::Iterable","dart:core::Object"]) as typeof _HashedObserverListBinding & _FlaxInstanceType<HashedObserverList<unknown | null>> & _FlaxDartType<HashedObserverList<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:HashedObserverList", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(HashedObserverList, "flax.core/sdk_foundation#type:HashedObserverList", {...{"category":"object","constructors":{"":[]}}, proxy: _HashedObserverListProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "iterator" | "isEmpty" | "isNotEmpty" | "length" | "first" | "last" | "single" | "add" | "remove" | "clear" | "contains" | "toList" | "cast" | "followedBy" | "map" | "where" | "whereType" | "expand" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toSet" | "take" | "takeWhile" | "skip" | "skipWhile" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "__flaxBound:package:flutter/src/foundation/observer_list.dart::HashedObserverList" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _HashedObserverListNative<_Selected0>) & {(): _HashedObserverListNative<_Selected0>;readonly prototype: _HashedObserverListNative<_Selected0>;implement(args: readonly [], implementation: Partial<_HashedObserverListNative<_Selected0>>): _HashedObserverListNative<_Selected0>;} & _FlaxInstanceType<_HashedObserverListNative<_Selected0>> & _FlaxDartType<_HashedObserverListNative<_Selected0>> : never : never; }
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature3<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature4<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature5<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>),combine: ((previousValue: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never; }
interface _FlaxSignature6<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature7<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElement: ((e: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature8<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? () => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature9<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (toElements: ((element: _OwnerType0) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>)) => DartIterable<_Selected0> : never : never; }
interface _FlaxSignature10<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (initialValue: (_Selected0 | DartInput<_Selected0>),combine: ((previousValue: _Selected0, element: _OwnerType0) => (_Selected0 | DartInput<_Selected0>))) => _Selected0 : never : never; }
interface _FlaxSignature11 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new () => _HashedObserverListNative<_Selected0>) & {(): _HashedObserverListNative<_Selected0>;readonly prototype: _HashedObserverListNative<_Selected0>;implement(args: readonly [], implementation: Partial<_HashedObserverListNative<_Selected0>>): _HashedObserverListNative<_Selected0>;} & _FlaxInstanceType<_HashedObserverListNative<_Selected0>> & _FlaxDartType<_HashedObserverListNative<_Selected0>> : never : never; }
