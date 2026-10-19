// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"controlPoints","required":true,"positional":true},{"name":"tension"}] as const;
const _flaxMemberParameters1 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CatmullRomCurve extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomCurve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __CatmullRomCurve: unique symbol;
readonly [_flaxDartTypeValue]: CatmullRomCurve;

}
defineObject("flax.core/sdk_animation#type:CatmullRomCurve", ["flipped","controlPoints","tension"], [], _flaxBindingMethods("flax.core/sdk_animation#type:CatmullRomCurve", "object", {}, {}), [], undefined, "flax.core/flutter#type:Curve");
const _CatmullRomCurveProxy = {type: "flax.core/sdk_animation#type:CatmullRomCurve", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"transform":_flaxMemberParameters1,"transformInternal":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: ["controlPoints","tension","flipped"], setters: [], contextMembers: [], superMembers: ["get:controlPoints","get:tension","get:flipped","transform","transformInternal","toString"]} as const;
export interface CatmullRomCurve {
readonly [_flaxDartTypeValue]: CatmullRomCurve;

transform(t: number): number;
transformInternal(t: number): number;
toString(): string;
get controlPoints(): DartList<upstream2.Offset>;
get tension(): number;
get flipped(): upstream0.Curve;
}
export abstract class CatmullRomCurve extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CatmullRomCurve>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CatmullRomCurve;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CatmullRomCurve", readonly [], false];
constructor(controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {tension?: number | undefined}) { super(_CatmullRomCurveProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CatmullRomCurve.prototype, _CatmullRomCurveProxy);
export namespace CatmullRomCurve { export function implement(args: [controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options?: {tension?: number | undefined}], implementation: {}): CatmullRomCurve {
return constructProxy(_CatmullRomCurveProxy, args, implementation) as CatmullRomCurve; } }
export namespace CatmullRomCurve { export function validateControlPoints(controlPoints: DartListInput<upstream2.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>> | null, options: { reasons?: DartListInput<string, string> | null | undefined; tension?: number | undefined } = {}): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["reasons","tension"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_animation#function:CatmullRomCurve.validateControlPoints", [controlPoints, options.reasons, options.tension]);
return _flaxResult as boolean;
} }
_flaxBindInstanceType<CatmullRomCurve, typeof CatmullRomCurve>(CatmullRomCurve, "flax.core/sdk_animation#type:CatmullRomCurve", ["flax.core/flutter#type:Curve","flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "controlPoints" | "tension" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::CatmullRomCurve" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
