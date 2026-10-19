// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
const _flaxMemberParameters0 = [{"name":"count","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SawTooth extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::SawTooth": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __SawTooth: unique symbol;
readonly [_flaxDartTypeValue]: SawTooth;

}
defineObject("flax.core/sdk_animation#type:SawTooth", ["flipped","count"], [], _flaxBindingMethods("flax.core/sdk_animation#type:SawTooth", "object", {}, {}), [], undefined, "flax.core/flutter#type:Curve");
const _SawToothProxy = {type: "flax.core/sdk_animation#type:SawTooth", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"transform":_flaxMemberParameters1,"transformInternal":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: ["count","flipped"], setters: [], contextMembers: [], superMembers: ["get:count","get:flipped","transform","transformInternal","toString"]} as const;
export interface SawTooth {
readonly [_flaxDartTypeValue]: SawTooth;

transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
get count(): number;
get flipped(): upstream0.Curve;
}
export abstract class SawTooth extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SawTooth>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SawTooth;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:SawTooth", readonly [], false];
constructor(count: number) { super(_SawToothProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SawTooth.prototype, _SawToothProxy);
export namespace SawTooth { export function implement(args: [count: number], implementation: {}): SawTooth {
return constructProxy(_SawToothProxy, args, implementation) as SawTooth; } }
_flaxBindInstanceType<SawTooth, typeof SawTooth>(SawTooth, "flax.core/sdk_animation#type:SawTooth", ["flax.core/flutter#type:Curve","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "count" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::SawTooth" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
