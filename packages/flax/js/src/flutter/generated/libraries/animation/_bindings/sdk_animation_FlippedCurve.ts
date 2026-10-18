// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlippedCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::FlippedCurve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __FlippedCurve: unique symbol;
readonly [_flaxDartTypeValue]: FlippedCurve;

}
defineObject("flax.core/sdk_animation#type:FlippedCurve", ["flipped","curve"], [], _flaxBindingMethods("flax.core/sdk_animation#type:FlippedCurve", "object", {}, {}), [], undefined, "flax.core/flutter#type:Curve");
const _FlippedCurveProxy = {type: "flax.core/sdk_animation#type:FlippedCurve", parameters: [{"name":"curve","required":true,"positional":true}], constructors: {"":[{"name":"curve","required":true,"positional":true}]}, methods: {"transform":_flaxMemberParameters0,"transformInternal":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, getters: ["curve","flipped"], setters: [], contextMembers: [], superMembers: ["get:curve","get:flipped","transform","transformInternal","toString"]} as const;
export interface FlippedCurve {
readonly [_flaxDartTypeValue]: FlippedCurve;

transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
get curve(): upstream0.Curve;
get flipped(): upstream0.Curve;
}
export abstract class FlippedCurve extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlippedCurve>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlippedCurve;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:FlippedCurve", readonly [], false];
constructor(curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>) { super(_FlippedCurveProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FlippedCurve.prototype, _FlippedCurveProxy);
export namespace FlippedCurve { export function implement(args: [curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>], implementation: {}): FlippedCurve {
return constructProxy(_FlippedCurveProxy, args, implementation) as FlippedCurve; } }
_flaxBindInstanceType<FlippedCurve, typeof FlippedCurve>(FlippedCurve, "flax.core/sdk_animation#type:FlippedCurve", ["flax.core/flutter#type:Curve","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "curve" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::FlippedCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
