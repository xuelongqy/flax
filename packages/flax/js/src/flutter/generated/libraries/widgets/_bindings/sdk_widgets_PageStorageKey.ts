// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import '@flax/flutter/foundation/_bindings/flutter_ValueKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { _flaxMemberParameters2, _flaxMemberParameters33 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PageStorageKey<T extends unknown | null = unknown | null> extends Omit<upstream0.ValueKey<T>, _flaxOwnMembers0>, Omit<upstream1.LocalKey, _flaxOwnMembers0 | keyof upstream0.ValueKey<T>>, Omit<upstream2.Key, _flaxOwnMembers0 | keyof upstream0.ValueKey<T> | keyof upstream1.LocalKey>, Readonly<{ "__flaxBound:package:flutter/src/widgets/page_storage.dart::PageStorageKey": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> { readonly __PageStorageKey: unique symbol;
readonly [_flaxDartTypeValue]: PageStorageKey<T>;

readonly value: T;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:PageStorageKey", ["value"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PageStorageKey", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _PageStorageKeyFactory<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>)): PageStorageKey<T>;
export function _PageStorageKeyFactory(value: unknown | null): PageStorageKey<unknown | null>;
export function _PageStorageKeyFactory(value: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:PageStorageKey", "", [{"name":"value","required":true,"positional":true}], [value], {}) as PageStorageKey<unknown | null>;
}
const _PageStorageKeyProxy = {type: "flax.core/sdk_widgets#type:PageStorageKey", parameters: _flaxMemberParameters33, constructors: {"": _flaxMemberParameters33}, methods: {"toString":_flaxMemberParameters2}, getters: ["value"], setters: [], contextMembers: [], superMembers: ["get:value","toString"]} as const;
export interface _PageStorageKeyNative<T extends unknown | null = unknown | null> extends PageStorageKey<T> {
readonly [_flaxDartTypeValue]: _PageStorageKeyNative<T>;

toString(): string;
get value(): T;
}
export abstract class _PageStorageKeyNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageStorageKey<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PageStorageKey<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageStorageKey", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(value: unknown | null) { super(_PageStorageKeyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PageStorageKeyNative.prototype, _PageStorageKeyProxy);
export namespace _PageStorageKeyFactory { export function implement<T extends unknown | null = unknown | null>(args: [value: unknown | null], implementation: {}): PageStorageKey<T> {
return constructProxy(_PageStorageKeyProxy, args, implementation) as PageStorageKey<T>; } }
const _PageStorageKeyBinding = _flaxProxyFactory(_PageStorageKeyFactory, _PageStorageKeyNative) as unknown as typeof _PageStorageKeyFactory & (new<T extends unknown | null = unknown | null>(value: unknown | null) => _PageStorageKeyNative<T>);
export const PageStorageKey: typeof _PageStorageKeyBinding & _FlaxInstanceType<PageStorageKey<unknown | null>> & _FlaxDartType<PageStorageKey<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:PageStorageKey", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<PageStorageKey<unknown | null>, typeof _PageStorageKeyBinding>(_PageStorageKeyBinding, "flax.core/sdk_widgets#type:PageStorageKey", ["flax.core/flutter#type:ValueKey","flax.core/flutter#type:LocalKey","flax.core/flutter#type:Key","dart:core::Object"]) as typeof _PageStorageKeyBinding & _FlaxInstanceType<PageStorageKey<unknown | null>> & _FlaxDartType<PageStorageKey<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:PageStorageKey", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(PageStorageKey, "flax.core/sdk_widgets#type:PageStorageKey", {...{"category":"object","constructors":{"":[{"name":"value","required":true,"positional":true}]}}, proxy: _PageStorageKeyProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "toString" | "__flaxBound:package:flutter/src/widgets/page_storage.dart::PageStorageKey" | "__flaxBound:package:flutter/src/foundation/key.dart::ValueKey" | "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (value: unknown | null) => _PageStorageKeyNative<_Selected0>) & {(value: (_Selected0 | DartInput<_Selected0>)): _PageStorageKeyNative<_Selected0>;readonly prototype: _PageStorageKeyNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_PageStorageKeyNative<_Selected0>>): _PageStorageKeyNative<_Selected0>;} & _FlaxInstanceType<_PageStorageKeyNative<_Selected0>> & _FlaxDartType<_PageStorageKeyNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (value: unknown | null) => _PageStorageKeyNative<_Selected0>) & {(value: (_Selected0 | DartInput<_Selected0>)): _PageStorageKeyNative<_Selected0>;readonly prototype: _PageStorageKeyNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_PageStorageKeyNative<_Selected0>>): _PageStorageKeyNative<_Selected0>;} & _FlaxInstanceType<_PageStorageKeyNative<_Selected0>> & _FlaxDartType<_PageStorageKeyNative<_Selected0>> : never : never; }
