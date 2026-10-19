// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import { _flaxMemberParameters63, _flaxMemberParameters1, _flaxMemberParameters20, _flaxMemberParameters18, _flaxMemberParameters19, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16, _flaxMemberParameters21, _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters17, _flaxMemberParameters25, _flaxMemberParameters10 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObserverList<T extends unknown | null = unknown | null> extends Omit<DartIterable<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/observer_list.dart::ObserverList": readonly [T] }>, Readonly<{ "__flaxBound:dart:core::Iterable": readonly [T] }> { readonly __ObserverList: unique symbol;
readonly [_flaxDartTypeValue]: ObserverList<T>;
readonly [_flaxDartMethodCases]?: {cast: _FlaxSignature1<T>;map: _FlaxSignature2<T>;whereType: _FlaxSignature3<T>;expand: _FlaxSignature4<T>;fold: _FlaxSignature5<T>;};
}
defineObject("flax.core/sdk_foundation#type:ObserverList", ["iterator","isEmpty","isNotEmpty","length","first","last","single"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:ObserverList", "object", {"add":_flaxMemberParameters63,"remove":_flaxMemberParameters63,"clear":_flaxMemberParameters1,"contains":_flaxMemberParameters20,"toList":_flaxMemberParameters18,"cast":_flaxMemberParameters1,"followedBy":_flaxMemberParameters19,"map":_flaxMemberParameters14,"where":_flaxMemberParameters15,"whereType":_flaxMemberParameters1,"expand":_flaxMemberParameters16,"forEach":_flaxMemberParameters21,"reduce":_flaxMemberParameters22,"fold":_flaxMemberParameters23,"every":_flaxMemberParameters15,"join":_flaxMemberParameters24,"any":_flaxMemberParameters15,"toSet":_flaxMemberParameters1,"take":_flaxMemberParameters17,"takeWhile":_flaxMemberParameters15,"skip":_flaxMemberParameters17,"skipWhile":_flaxMemberParameters15,"firstWhere":_flaxMemberParameters25,"lastWhere":_flaxMemberParameters25,"singleWhere":_flaxMemberParameters25,"elementAt":_flaxMemberParameters10}, {"cast":{"id":"cast","parameters":[]},"map":{"id":"map","parameters":[{"name":"toElement","required":true,"positional":true}]},"whereType":{"id":"whereType","parameters":[]},"expand":{"id":"expand","parameters":[{"name":"toElements","required":true,"positional":true}]},"fold":{"id":"fold","parameters":[{"name":"initialValue","required":true,"positional":true},{"name":"combine","required":true,"positional":true}]}}), [], "iterable");
const _ObserverListProxy = {type: "flax.core/sdk_foundation#type:ObserverList", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"add":_flaxMemberParameters63,"remove":_flaxMemberParameters63,"clear":_flaxMemberParameters1,"contains":_flaxMemberParameters20,"toList":_flaxMemberParameters18,"cast":_flaxMemberParameters1,"followedBy":_flaxMemberParameters19,"map":_flaxMemberParameters14,"where":_flaxMemberParameters15,"whereType":_flaxMemberParameters1,"expand":_flaxMemberParameters16,"forEach":_flaxMemberParameters21,"reduce":_flaxMemberParameters22,"fold":_flaxMemberParameters23,"every":_flaxMemberParameters15,"join":_flaxMemberParameters24,"any":_flaxMemberParameters15,"toSet":_flaxMemberParameters1,"take":_flaxMemberParameters17,"takeWhile":_flaxMemberParameters15,"skip":_flaxMemberParameters17,"skipWhile":_flaxMemberParameters15,"firstWhere":_flaxMemberParameters25,"lastWhere":_flaxMemberParameters25,"singleWhere":_flaxMemberParameters25,"elementAt":_flaxMemberParameters10}, getters: ["iterator","isEmpty","isNotEmpty","length","first","last","single"], setters: [], contextMembers: ["cast","map","whereType","expand","fold"], superMembers: ["get:iterator","get:isEmpty","get:isNotEmpty","get:length","get:first","get:last","get:single","add","remove","clear","contains","toList","cast","followedBy","map","where","whereType","expand","forEach","reduce","fold","every","join","any","toSet","take","takeWhile","skip","skipWhile","firstWhere","lastWhere","singleWhere","elementAt"]} as const;
export interface ObserverList<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: ObserverList<T>;
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
export abstract class ObserverList<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObserverList<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ObserverList<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ObserverList", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature11;
constructor() { super(_ObserverListProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ObserverList.prototype, _ObserverListProxy);
export namespace ObserverList { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): ObserverList<T> {
return constructProxy(_ObserverListProxy, args, implementation) as ObserverList<T>; } }
_flaxBindInstanceType<ObserverList<unknown | null>, typeof ObserverList>(ObserverList, "flax.core/sdk_foundation#type:ObserverList", ["dart:core::Iterable","dart:core::Object"]);
_flaxDefineDartTypes(ObserverList, "flax.core/sdk_foundation#type:ObserverList", {...{"category":"object","constructors":{}}, proxy: _ObserverListProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "iterator" | "isEmpty" | "isNotEmpty" | "length" | "first" | "last" | "single" | "add" | "remove" | "clear" | "contains" | "toList" | "cast" | "followedBy" | "map" | "where" | "whereType" | "expand" | "forEach" | "reduce" | "fold" | "every" | "join" | "any" | "toSet" | "take" | "takeWhile" | "skip" | "skipWhile" | "firstWhere" | "lastWhere" | "singleWhere" | "elementAt" | "__flaxBound:package:flutter/src/foundation/observer_list.dart::ObserverList" | "__flaxBound:dart:core::Iterable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => ObserverList<_Selected0>) & {readonly prototype: ObserverList<_Selected0>;implement(args: readonly [], implementation: Partial<ObserverList<_Selected0>>): ObserverList<_Selected0>;} & _FlaxInstanceType<ObserverList<_Selected0>> & _FlaxDartType<ObserverList<_Selected0>> : never : never; }
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
interface _FlaxSignature11 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => ObserverList<_Selected0>) & {readonly prototype: ObserverList<_Selected0>;implement(args: readonly [], implementation: Partial<ObserverList<_Selected0>>): ObserverList<_Selected0>;} & _FlaxInstanceType<ObserverList<_Selected0>> & _FlaxDartType<ObserverList<_Selected0>> : never : never; }
