// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { _flaxMemberParameters43, _flaxMemberParameters4, _flaxMemberParameters2 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Threshold extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Threshold": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __Threshold: unique symbol;
readonly [_flaxDartTypeValue]: Threshold;

readonly flipped: upstream0.Curve;
readonly threshold: number;
transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
}
defineObject("flax.core/sdk_animation#type:Threshold", ["flipped","threshold"], [], _flaxBindingMethods("flax.core/sdk_animation#type:Threshold", "object", {}, {}), [], undefined, "flax.core/flutter#type:Curve");
export function _ThresholdFactory(threshold: number): Threshold {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:Threshold", "", [{"name":"threshold","required":true,"positional":true}], [threshold], {}) as Threshold;
}
const _ThresholdProxy = {type: "flax.core/sdk_animation#type:Threshold", parameters: _flaxMemberParameters43, constructors: {"": _flaxMemberParameters43}, methods: {"transform":_flaxMemberParameters4,"transformInternal":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, getters: ["threshold","flipped"], setters: [], contextMembers: [], superMembers: ["get:threshold","get:flipped","transform","transformInternal","toString"]} as const;
export interface _ThresholdNative extends Threshold {
readonly [_flaxDartTypeValue]: _ThresholdNative;

transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
get threshold(): number;
get flipped(): upstream0.Curve;
}
export abstract class _ThresholdNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Threshold>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Threshold;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Threshold", readonly [], false];
constructor(threshold: number) { super(_ThresholdProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ThresholdNative.prototype, _ThresholdProxy);
export namespace _ThresholdFactory { export function implement(args: [threshold: number], implementation: {}): Threshold {
return constructProxy(_ThresholdProxy, args, implementation) as Threshold; } }
const _ThresholdBinding = _flaxProxyFactory(_ThresholdFactory, _ThresholdNative) as unknown as typeof _ThresholdFactory & (new(threshold: number) => _ThresholdNative);
export const Threshold: typeof _ThresholdBinding & _FlaxInstanceType<Threshold> & _FlaxDartType<Threshold, readonly ["class", "flax.core/sdk_animation#type:Threshold", readonly [], false]> = _flaxBindInstanceType<Threshold, typeof _ThresholdBinding>(_ThresholdBinding, "flax.core/sdk_animation#type:Threshold", ["flax.core/flutter#type:Curve","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]) as typeof _ThresholdBinding & _FlaxInstanceType<Threshold> & _FlaxDartType<Threshold, readonly ["class", "flax.core/sdk_animation#type:Threshold", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "threshold" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::Threshold" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
