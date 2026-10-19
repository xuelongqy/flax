// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"other","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ThemeExtension<T extends ThemeExtension<T> > extends Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T] }> { readonly __ThemeExtension: unique symbol;
readonly [_flaxDartTypeValue]: ThemeExtension<T>;

}
defineObject("flax.core/sdk_material#type:ThemeExtension", ["type"], [], _flaxBindingMethods("flax.core/sdk_material#type:ThemeExtension", "object", {"copyWith":_flaxMemberParameters0,"lerp":_flaxMemberParameters1}, {}), []);
const _ThemeExtensionProxy = {type: "flax.core/sdk_material#type:ThemeExtension", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"copyWith":_flaxMemberParameters0,"lerp":_flaxMemberParameters1}, getters: ["type"], setters: [], contextMembers: [], superMembers: ["get:type"]} as const;
export interface ThemeExtension<T extends ThemeExtension<T> > {
readonly [_flaxDartTypeValue]: ThemeExtension<T>;

get type(): {};
}
export abstract class ThemeExtension<T extends ThemeExtension<T> > extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ThemeExtension<never>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ThemeExtension<never>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ThemeExtension", readonly [], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_ThemeExtensionProxy, Array.from(arguments)); }
abstract copyWith(): ThemeExtension<T>;
abstract lerp(other: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T] }> | null, t: number): ThemeExtension<T>;
}
_flaxDefineProxyBase(ThemeExtension.prototype, _ThemeExtensionProxy);
export namespace ThemeExtension { export function implement<T extends ThemeExtension<T> >(args: [], implementation: {copyWith: (() => Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T] }>); lerp: ((other: ThemeExtension<T> | null, t: number) => Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeExtension": readonly [T] }>)}): ThemeExtension<T> {
return constructProxy(_ThemeExtensionProxy, args, implementation) as ThemeExtension<T>; } }
_flaxBindInstanceType<ThemeExtension<never>, typeof ThemeExtension>(ThemeExtension, "flax.core/sdk_material#type:ThemeExtension", ["dart:core::Object"]);
_flaxDefineDartTypes(ThemeExtension, "flax.core/sdk_material#type:ThemeExtension", {...{"category":"object","constructors":{}}, proxy: _ThemeExtensionProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0 extends ThemeExtension<any>] ? [_Selected0] extends [ThemeExtension<_Selected0>] ? (abstract new () => ThemeExtension<_Selected0>) & {readonly prototype: ThemeExtension<_Selected0>;implement(args: readonly [], implementation: Partial<ThemeExtension<_Selected0>>): ThemeExtension<_Selected0>;} & _FlaxInstanceType<ThemeExtension<_Selected0>> & _FlaxDartType<ThemeExtension<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0 extends ThemeExtension<any>] ? [_Selected0] extends [ThemeExtension<_Selected0>] ? (abstract new () => ThemeExtension<_Selected0>) & {readonly prototype: ThemeExtension<_Selected0>;implement(args: readonly [], implementation: Partial<ThemeExtension<_Selected0>>): ThemeExtension<_Selected0>;} & _FlaxInstanceType<ThemeExtension<_Selected0>> & _FlaxDartType<ThemeExtension<_Selected0>> : never : never; }
