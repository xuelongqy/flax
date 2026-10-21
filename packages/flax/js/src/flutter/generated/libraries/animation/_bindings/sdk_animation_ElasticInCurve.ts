// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { _flaxMemberParameters35, _flaxMemberParameters4, _flaxMemberParameters2 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ElasticInCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ElasticInCurve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __ElasticInCurve: unique symbol;
readonly [_flaxDartTypeValue]: ElasticInCurve;

readonly flipped: upstream0.Curve;
readonly period: number;
transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
}
defineObject("flax.core/sdk_animation#type:ElasticInCurve", ["flipped","period"], [], _flaxBindingMethods("flax.core/sdk_animation#type:ElasticInCurve", "object", {}, {}), [], undefined, "flax.core/flutter#type:Curve");
export function _ElasticInCurveFactory(period?: number): ElasticInCurve {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:ElasticInCurve", "", [{"name":"period","positional":true}], [period], {}) as ElasticInCurve;
}
const _ElasticInCurveProxy = {type: "flax.core/sdk_animation#type:ElasticInCurve", parameters: _flaxMemberParameters35, constructors: {"": _flaxMemberParameters35}, methods: {"transform":_flaxMemberParameters4,"transformInternal":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, getters: ["period","flipped"], setters: [], contextMembers: [], superMembers: ["get:period","get:flipped","transform","transformInternal","toString"]} as const;
export interface _ElasticInCurveNative extends ElasticInCurve {
readonly [_flaxDartTypeValue]: _ElasticInCurveNative;

transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
get period(): number;
get flipped(): upstream0.Curve;
}
export abstract class _ElasticInCurveNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ElasticInCurve>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ElasticInCurve;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ElasticInCurve", readonly [], false];
constructor(period?: number) { super(_ElasticInCurveProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ElasticInCurveNative.prototype, _ElasticInCurveProxy);
export namespace _ElasticInCurveFactory { export function implement(args: [period?: number], implementation: {}): ElasticInCurve {
return constructProxy(_ElasticInCurveProxy, args, implementation) as ElasticInCurve; } }
const _ElasticInCurveBinding = _flaxProxyFactory(_ElasticInCurveFactory, _ElasticInCurveNative) as unknown as typeof _ElasticInCurveFactory & (new(period?: number) => _ElasticInCurveNative);
export const ElasticInCurve: typeof _ElasticInCurveBinding & _FlaxInstanceType<ElasticInCurve> & _FlaxDartType<ElasticInCurve, readonly ["class", "flax.core/sdk_animation#type:ElasticInCurve", readonly [], false]> = _flaxBindInstanceType<ElasticInCurve, typeof _ElasticInCurveBinding>(_ElasticInCurveBinding, "flax.core/sdk_animation#type:ElasticInCurve", ["flax.core/flutter#type:Curve","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]) as typeof _ElasticInCurveBinding & _FlaxInstanceType<ElasticInCurve> & _FlaxDartType<ElasticInCurve, readonly ["class", "flax.core/sdk_animation#type:ElasticInCurve", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "period" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::ElasticInCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
