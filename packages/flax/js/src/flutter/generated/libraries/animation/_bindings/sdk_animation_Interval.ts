// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
const _flaxMemberParameters0 = [{"name":"begin","required":true,"positional":true},{"name":"end","required":true,"positional":true},{"name":"curve"}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Interval extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Interval": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __Interval: unique symbol;
readonly [_flaxDartTypeValue]: Interval;

}
defineObject("flax.core/sdk_animation#type:Interval", ["flipped","begin","end","curve"], [], _flaxBindingMethods("flax.core/sdk_animation#type:Interval", "object", {}, {}), [], undefined, "flax.core/flutter#type:Curve");
const _IntervalProxy = {type: "flax.core/sdk_animation#type:Interval", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"transform":_flaxMemberParameters1,"transformInternal":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: ["begin","end","curve","flipped"], setters: [], contextMembers: [], superMembers: ["get:begin","get:end","get:curve","get:flipped","transform","transformInternal","toString"]} as const;
export interface Interval {
readonly [_flaxDartTypeValue]: Interval;

transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
get begin(): number;
get end(): number;
get curve(): upstream0.Curve;
get flipped(): upstream0.Curve;
}
export abstract class Interval extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Interval>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Interval;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Interval", readonly [], false];
constructor(begin: number, end: number, options?: {curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined}) { super(_IntervalProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Interval.prototype, _IntervalProxy);
export namespace Interval { export function implement(args: [begin: number, end: number, options?: {curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined}], implementation: {}): Interval {
return constructProxy(_IntervalProxy, args, implementation) as Interval; } }
_flaxBindInstanceType<Interval, typeof Interval>(Interval, "flax.core/sdk_animation#type:Interval", ["flax.core/flutter#type:Curve","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "begin" | "end" | "curve" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::Interval" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
