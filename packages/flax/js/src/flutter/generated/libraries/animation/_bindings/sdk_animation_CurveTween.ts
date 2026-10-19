// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream1 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"animation","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"parent","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"curve","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CurveTween extends Omit<upstream0.Animatable<number>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::CurveTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }> { readonly __CurveTween: unique symbol;
readonly [_flaxDartTypeValue]: CurveTween;

}
defineObject("flax.core/sdk_animation#type:CurveTween", ["curve"], ["curve"], _flaxBindingMethods("flax.core/sdk_animation#type:CurveTween", "object", {"transform":_flaxMemberParameters0,"evaluate":_flaxMemberParameters1,"animate":_flaxMemberParameters2,"chain":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, {}), []);
const _CurveTweenProxy = {type: "flax.core/sdk_animation#type:CurveTween", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"transform":_flaxMemberParameters0,"evaluate":_flaxMemberParameters1,"animate":_flaxMemberParameters2,"chain":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, getters: ["curve"], setters: ["curve"], contextMembers: [], superMembers: ["get:curve","set:curve","transform","evaluate","animate","chain","toString"]} as const;
export interface CurveTween {
readonly [_flaxDartTypeValue]: CurveTween;

transform(t: number): number;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): number;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Animation<number>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream0.Animatable<number>;
toString(): string;
get curve(): upstream1.Curve;
set curve(value: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>);
}
export abstract class CurveTween extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CurveTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CurveTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CurveTween", readonly [], false];
constructor(options: {curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>}) { super(_CurveTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CurveTween.prototype, _CurveTweenProxy);
export namespace CurveTween { export function implement(args: [options: {curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>}], implementation: {}): CurveTween {
return constructProxy(_CurveTweenProxy, args, implementation) as CurveTween; } }
_flaxBindInstanceType<CurveTween, typeof CurveTween>(CurveTween, "flax.core/sdk_animation#type:CurveTween", ["flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "curve" | "transform" | "evaluate" | "animate" | "chain" | "toString" | "__flaxBound:package:flutter/src/animation/tween.dart::CurveTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
