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
export interface ElasticInOutCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ElasticInOutCurve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __ElasticInOutCurve: unique symbol;
readonly [_flaxDartTypeValue]: ElasticInOutCurve;

readonly flipped: upstream0.Curve;
readonly period: number;
transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
}
defineObject("flax.core/sdk_animation#type:ElasticInOutCurve", ["flipped","period"], [], _flaxBindingMethods("flax.core/sdk_animation#type:ElasticInOutCurve", "object", {}, {}), [], undefined, "flax.core/flutter#type:Curve");
export function _ElasticInOutCurveFactory(period?: number): ElasticInOutCurve {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:ElasticInOutCurve", "", [{"name":"period","positional":true}], [period], {}) as ElasticInOutCurve;
}
const _ElasticInOutCurveProxy = {type: "flax.core/sdk_animation#type:ElasticInOutCurve", parameters: _flaxMemberParameters35, constructors: {"": _flaxMemberParameters35}, methods: {"transform":_flaxMemberParameters4,"transformInternal":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, getters: ["period","flipped"], setters: [], contextMembers: [], superMembers: ["get:period","get:flipped","transform","transformInternal","toString"]} as const;
export interface _ElasticInOutCurveNative extends ElasticInOutCurve {
readonly [_flaxDartTypeValue]: _ElasticInOutCurveNative;

transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
get period(): number;
get flipped(): upstream0.Curve;
}
export abstract class _ElasticInOutCurveNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ElasticInOutCurve>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ElasticInOutCurve;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ElasticInOutCurve", readonly [], false];
constructor(period?: number) { super(_ElasticInOutCurveProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ElasticInOutCurveNative.prototype, _ElasticInOutCurveProxy);
export namespace _ElasticInOutCurveFactory { export function implement(args: [period?: number], implementation: {}): ElasticInOutCurve {
return constructProxy(_ElasticInOutCurveProxy, args, implementation) as ElasticInOutCurve; } }
const _ElasticInOutCurveBinding = _flaxProxyFactory(_ElasticInOutCurveFactory, _ElasticInOutCurveNative) as unknown as typeof _ElasticInOutCurveFactory & (new(period?: number) => _ElasticInOutCurveNative);
export const ElasticInOutCurve: typeof _ElasticInOutCurveBinding & _FlaxInstanceType<ElasticInOutCurve> & _FlaxDartType<ElasticInOutCurve, readonly ["class", "flax.core/sdk_animation#type:ElasticInOutCurve", readonly [], false]> = _flaxBindInstanceType<ElasticInOutCurve, typeof _ElasticInOutCurveBinding>(_ElasticInOutCurveBinding, "flax.core/sdk_animation#type:ElasticInOutCurve", ["flax.core/flutter#type:Curve","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]) as typeof _ElasticInOutCurveBinding & _FlaxInstanceType<ElasticInOutCurve> & _FlaxDartType<ElasticInOutCurve, readonly ["class", "flax.core/sdk_animation#type:ElasticInOutCurve", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "period" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::ElasticInOutCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
