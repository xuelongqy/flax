// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ParametricCurve<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [T] }> { readonly __ParametricCurve: unique symbol;
readonly [_flaxDartTypeValue]: ParametricCurve<T>;

}
defineObject("flax.core/sdk_animation#type:ParametricCurve", [], [], _flaxBindingMethods("flax.core/sdk_animation#type:ParametricCurve", "object", {"transform":_flaxMemberParameters0,"transformInternal":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
const _ParametricCurveProxy = {type: "flax.core/sdk_animation#type:ParametricCurve", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"transform":_flaxMemberParameters0,"transformInternal":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: ["transform","transformInternal","toString"]} as const;
export interface ParametricCurve<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: ParametricCurve<T>;

transform(t: number): T;
transformInternal(t: number): T;
toString(): string;
}
export abstract class ParametricCurve<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParametricCurve<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ParametricCurve<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ParametricCurve", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_ParametricCurveProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ParametricCurve.prototype, _ParametricCurveProxy);
export namespace ParametricCurve { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): ParametricCurve<T> {
return constructProxy(_ParametricCurveProxy, args, implementation) as ParametricCurve<T>; } }
_flaxBindInstanceType<ParametricCurve<unknown | null>, typeof ParametricCurve>(ParametricCurve, "flax.core/sdk_animation#type:ParametricCurve", ["dart:core::Object"]);
_flaxDefineDartTypes(ParametricCurve, "flax.core/sdk_animation#type:ParametricCurve", {...{"category":"object","constructors":{}}, proxy: _ParametricCurveProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => ParametricCurve<_Selected0>) & {readonly prototype: ParametricCurve<_Selected0>;implement(args: readonly [], implementation: Partial<ParametricCurve<_Selected0>>): ParametricCurve<_Selected0>;} & _FlaxInstanceType<ParametricCurve<_Selected0>> & _FlaxDartType<ParametricCurve<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => ParametricCurve<_Selected0>) & {readonly prototype: ParametricCurve<_Selected0>;implement(args: readonly [], implementation: Partial<ParametricCurve<_Selected0>>): ParametricCurve<_Selected0>;} & _FlaxInstanceType<ParametricCurve<_Selected0>> & _FlaxDartType<ParametricCurve<_Selected0>> : never : never; }
