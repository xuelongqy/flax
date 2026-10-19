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
import { _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters4, _flaxMemberParameters2 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CatmullRomSpline extends Omit<upstream0.Curve2D, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<upstream2.Offset>, _flaxOwnMembers0 | keyof upstream0.Curve2D>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomSpline": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [upstream2.Offset] }> { readonly __CatmullRomSpline: unique symbol;
readonly [_flaxDartTypeValue]: CatmullRomSpline;

}
defineObject("flax.core/sdk_animation#type:CatmullRomSpline", ["samplingSeed"], [], _flaxBindingMethods("flax.core/sdk_animation#type:CatmullRomSpline", "object", {}, {}), [], undefined, "flax.core/sdk_animation#type:Curve2D");
const _CatmullRomSplineProxy = {type: "flax.core/sdk_animation#type:CatmullRomSpline", parameters: _flaxMemberParameters24, constructors: {"": _flaxMemberParameters24}, methods: {"generateSamples":_flaxMemberParameters25,"findInverse":_flaxMemberParameters26,"transform":_flaxMemberParameters4,"transformInternal":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, getters: ["samplingSeed"], setters: [], contextMembers: [], superMembers: ["get:samplingSeed","generateSamples","findInverse","transform","transformInternal","toString"]} as const;
export interface CatmullRomSpline {
readonly [_flaxDartTypeValue]: CatmullRomSpline;

generateSamples(options?: {start?: number | undefined; end?: number | undefined; tolerance?: number | undefined}): DartIterable<upstream3.Curve2DSample>;
findInverse(x: number): number;
transform(t: number): upstream2.Offset;
transformInternal(t: number): upstream2.Offset;
toString(): string;
get samplingSeed(): number;
}
export abstract class CatmullRomSpline extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CatmullRomSpline>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CatmullRomSpline;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CatmullRomSpline", readonly [], false];
constructor(controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {tension?: number | undefined; startHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; endHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) { super(_CatmullRomSplineProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CatmullRomSpline.prototype, _CatmullRomSplineProxy);
export namespace CatmullRomSpline { export function implement(args: [controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {tension?: number | undefined; startHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; endHandle?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}], implementation: {}): CatmullRomSpline {
return constructProxy(_CatmullRomSplineProxy, args, implementation) as CatmullRomSpline; } }
_flaxBindInstanceType<CatmullRomSpline, typeof CatmullRomSpline>(CatmullRomSpline, "flax.core/sdk_animation#type:CatmullRomSpline", ["flax.core/sdk_animation#type:Curve2D","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "samplingSeed" | "generateSamples" | "findInverse" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomSpline" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
