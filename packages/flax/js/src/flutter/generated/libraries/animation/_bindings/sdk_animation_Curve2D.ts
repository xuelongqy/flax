// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
import '@flax/flutter/animation/_bindings/sdk_animation_Curve2DSample';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"end","required":false,"positional":false},{"name":"start","required":false,"positional":false},{"name":"tolerance","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"x","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Curve2D extends Omit<upstream0.ParametricCurve<upstream1.Offset>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [upstream1.Offset] }> { readonly __Curve2D: unique symbol;
readonly [_flaxDartTypeValue]: Curve2D;

}
defineObject("flax.core/sdk_animation#type:Curve2D", ["samplingSeed"], [], _flaxBindingMethods("flax.core/sdk_animation#type:Curve2D", "object", {"transform":_flaxMemberParameters0,"transformInternal":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"generateSamples":_flaxMemberParameters2,"findInverse":_flaxMemberParameters3}, {}), []);
const _Curve2DProxy = {type: "flax.core/sdk_animation#type:Curve2D", parameters: [], constructors: {"":[]}, methods: {"transform":_flaxMemberParameters0,"transformInternal":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"generateSamples":_flaxMemberParameters2,"findInverse":_flaxMemberParameters3}, getters: ["samplingSeed"], setters: [], contextMembers: [], superMembers: ["get:samplingSeed","transform","transformInternal","toString","generateSamples","findInverse"]} as const;
export interface Curve2D {
readonly [_flaxDartTypeValue]: Curve2D;

transform(t: number): upstream1.Offset;
transformInternal(t: number): upstream1.Offset;
toString(): string;
generateSamples(options?: {start?: number | undefined; end?: number | undefined; tolerance?: number | undefined}): DartIterable<upstream2.Curve2DSample>;
findInverse(x: number): number;
get samplingSeed(): number;
}
export abstract class Curve2D extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Curve2D>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Curve2D;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Curve2D", readonly [], false];
constructor() { super(_Curve2DProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Curve2D.prototype, _Curve2DProxy);
export namespace Curve2D { export function implement(args: [], implementation: {}): Curve2D {
return constructProxy(_Curve2DProxy, args, implementation) as Curve2D; } }
_flaxBindInstanceType<Curve2D, typeof Curve2D>(Curve2D, "flax.core/sdk_animation#type:Curve2D", ["flax.core/sdk_animation#type:ParametricCurve","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "samplingSeed" | "transform" | "transformInternal" | "toString" | "generateSamples" | "findInverse" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve2D" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
