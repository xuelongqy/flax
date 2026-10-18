// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PageStorageKey<T extends unknown | null = unknown | null> extends Omit<upstream0.ValueKey<T>, _flaxOwnMembers0>, Omit<upstream1.LocalKey, _flaxOwnMembers0 | keyof upstream0.ValueKey<T>>, Omit<upstream2.Key, _flaxOwnMembers0 | keyof upstream0.ValueKey<T> | keyof upstream1.LocalKey>, Readonly<{ "__flaxBound:package:flutter/src/widgets/page_storage.dart::PageStorageKey": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> { readonly __PageStorageKey: unique symbol;
readonly [_flaxDartTypeValue]: PageStorageKey<T>;

}
defineObject("flax.core/sdk_widgets#type:PageStorageKey", ["value"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PageStorageKey", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _PageStorageKeyProxy = {type: "flax.core/sdk_widgets#type:PageStorageKey", parameters: [{"name":"value","required":true,"positional":true}], constructors: {"":[{"name":"value","required":true,"positional":true}]}, methods: {"toString":_flaxMemberParameters0}, getters: ["value"], setters: [], contextMembers: [], superMembers: ["get:value","toString"]} as const;
export interface PageStorageKey<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: PageStorageKey<T>;

toString(): string;
get value(): T;
}
export abstract class PageStorageKey<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageStorageKey<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PageStorageKey<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageStorageKey", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(value: unknown | null) { super(_PageStorageKeyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PageStorageKey.prototype, _PageStorageKeyProxy);
export namespace PageStorageKey { export function implement<T extends unknown | null = unknown | null>(args: [value: unknown | null], implementation: {}): PageStorageKey<T> {
return constructProxy(_PageStorageKeyProxy, args, implementation) as PageStorageKey<T>; } }
_flaxBindInstanceType<PageStorageKey<unknown | null>, typeof PageStorageKey>(PageStorageKey, "flax.core/sdk_widgets#type:PageStorageKey", ["flax.core/flutter#type:ValueKey","flax.core/flutter#type:LocalKey","flax.core/flutter#type:Key","dart:core::Object"]);
_flaxDefineDartTypes(PageStorageKey, "flax.core/sdk_widgets#type:PageStorageKey", {...{"category":"object","constructors":{}}, proxy: _PageStorageKeyProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "toString" | "__flaxBound:package:flutter/src/widgets/page_storage.dart::PageStorageKey" | "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (value: unknown | null) => PageStorageKey<_Selected0>) & {readonly prototype: PageStorageKey<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<PageStorageKey<_Selected0>>): PageStorageKey<_Selected0>;} & _FlaxInstanceType<PageStorageKey<_Selected0>> & _FlaxDartType<PageStorageKey<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (value: unknown | null) => PageStorageKey<_Selected0>) & {readonly prototype: PageStorageKey<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<PageStorageKey<_Selected0>>): PageStorageKey<_Selected0>;} & _FlaxInstanceType<PageStorageKey<_Selected0>> & _FlaxDartType<PageStorageKey<_Selected0>> : never : never; }
