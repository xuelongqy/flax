// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Curve2D';
import '@flax/flutter/animation/_bindings/sdk_animation_Curve2D';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
import '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
import { _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters27, _flaxMemberParameters4, _flaxMemberParameters2 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CatmullRomSpline extends Omit<upstream0.Curve2D, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<upstream2.Offset>, _flaxOwnMembers0 | keyof upstream0.Curve2D>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomSpline": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [upstream2.Offset] }> { readonly __CatmullRomSpline: unique symbol;
readonly [_flaxDartTypeValue]: CatmullRomSpline;

readonly samplingSeed: number;
generateSamples(options?: {end?: number | undefined; start?: number | undefined; tolerance?: number | undefined}): DartIterable<upstream3.Curve2DSample>;
findInverse(x: number): number;
transform(t: number): upstream2.Offset;
transformInternal(t: number): upstream2.Offset;
toString(): string;
}
defineObject("flax.core/sdk_animation#type:CatmullRomSpline", ["samplingSeed"], [], _flaxBindingMethods("flax.core/sdk_animation#type:CatmullRomSpline", "object", {}, {}), [], undefined, "flax.core/sdk_animation#type:Curve2D");
export function _CatmullRomSplineFactory(controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options: { tension?: number | undefined; startHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; endHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined } = {}): CatmullRomSpline {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:CatmullRomSpline", "", [{"name":"controlPoints","required":true,"positional":true},{"name":"tension"},{"name":"startHandle"},{"name":"endHandle"}], [controlPoints], options) as CatmullRomSpline;
}
export namespace _CatmullRomSplineFactory {
export function precompute(controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options: { tension?: number | undefined; startHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; endHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined } = {}): CatmullRomSpline {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:CatmullRomSpline", "precompute", [{"name":"controlPoints","required":true,"positional":true},{"name":"tension"},{"name":"startHandle"},{"name":"endHandle"}], [controlPoints], options) as CatmullRomSpline;
}
}
const _CatmullRomSplineProxy = {type: "flax.core/sdk_animation#type:CatmullRomSpline", parameters: _flaxMemberParameters25, constructors: {"": _flaxMemberParameters25,"precompute": _flaxMemberParameters25}, methods: {"generateSamples":_flaxMemberParameters26,"findInverse":_flaxMemberParameters27,"transform":_flaxMemberParameters4,"transformInternal":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, getters: ["samplingSeed"], setters: [], contextMembers: [], superMembers: ["get:samplingSeed","generateSamples","findInverse","transform","transformInternal","toString"]} as const;
export interface _CatmullRomSplineNative extends CatmullRomSpline {
readonly [_flaxDartTypeValue]: _CatmullRomSplineNative;
readonly [_flaxDartConstructors]?: {"": (controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {tension?: number | undefined; startHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; endHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) => void;"precompute": (controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {tension?: number | undefined; startHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; endHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) => void;};

generateSamples(options?: {start?: number | undefined; end?: number | undefined; tolerance?: number | undefined}): DartIterable<upstream3.Curve2DSample>;
findInverse(x: number): number;
transform(t: number): upstream2.Offset;
transformInternal(t: number): upstream2.Offset;
toString(): string;
get samplingSeed(): number;
}
export abstract class _CatmullRomSplineNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CatmullRomSpline>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CatmullRomSpline;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CatmullRomSpline", readonly [], false];
constructor(controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {tension?: number | undefined; startHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; endHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}); constructor(call: _FlaxProxySuper<_CatmullRomSplineNative>); constructor(...args: unknown[]) { super(_CatmullRomSplineProxy, args); }
}
_flaxDefineProxyBase(_CatmullRomSplineNative.prototype, _CatmullRomSplineProxy);
export namespace _CatmullRomSplineFactory { export function implement(args: [controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {tension?: number | undefined; startHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; endHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}], implementation: {}): CatmullRomSpline {
return constructProxy(_CatmullRomSplineProxy, args, implementation) as CatmullRomSpline; } }
const _CatmullRomSplineBinding = _flaxProxyFactory(_CatmullRomSplineFactory, _CatmullRomSplineNative) as unknown as typeof _CatmullRomSplineFactory & (new(controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {tension?: number | undefined; startHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; endHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) => _CatmullRomSplineNative) & (new(call: _FlaxProxySuper<_CatmullRomSplineNative>) => _CatmullRomSplineNative);
export const CatmullRomSpline: typeof _CatmullRomSplineBinding & _FlaxInstanceType<CatmullRomSpline> & _FlaxDartType<CatmullRomSpline, readonly ["class", "flax.core/sdk_animation#type:CatmullRomSpline", readonly [], false]> = _flaxBindInstanceType<CatmullRomSpline, typeof _CatmullRomSplineBinding>(_CatmullRomSplineBinding, "flax.core/sdk_animation#type:CatmullRomSpline", ["flax.core/sdk_animation#type:Curve2D","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]) as typeof _CatmullRomSplineBinding & _FlaxInstanceType<CatmullRomSpline> & _FlaxDartType<CatmullRomSpline, readonly ["class", "flax.core/sdk_animation#type:CatmullRomSpline", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "samplingSeed" | "generateSamples" | "findInverse" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomSpline" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
