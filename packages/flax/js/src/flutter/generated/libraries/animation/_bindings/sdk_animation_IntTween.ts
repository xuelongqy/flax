// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"animation","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"parent","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"begin"},{"name":"end"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IntTween extends Omit<upstream0.Tween<number>, _flaxOwnMembers0>, Omit<upstream1.Animatable<number>, _flaxOwnMembers0 | keyof upstream0.Tween<number>>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::IntTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }> { readonly __IntTween: unique symbol;
readonly [_flaxDartTypeValue]: IntTween;

}
defineObject("flax.core/sdk_animation#type:IntTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_animation#type:IntTween", "object", {"lerp":_flaxMemberParameters0,"transform":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"evaluate":_flaxMemberParameters2,"animate":_flaxMemberParameters3,"chain":_flaxMemberParameters3}, {}), []);
const _IntTweenProxy = {type: "flax.core/sdk_animation#type:IntTween", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"lerp":_flaxMemberParameters0,"transform":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"evaluate":_flaxMemberParameters2,"animate":_flaxMemberParameters3,"chain":_flaxMemberParameters3}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface IntTween {
readonly [_flaxDartTypeValue]: IntTween;

lerp(t: number): number;
transform(t: number): number;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): number;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Animation<number>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream1.Animatable<number>;
get begin(): number | null;
get end(): number | null;
set begin(value: number | null);
set end(value: number | null);
}
export abstract class IntTween extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IntTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IntTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:IntTween", readonly [], false];
constructor(options?: {begin?: number | null | undefined; end?: number | null | undefined}) { super(_IntTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(IntTween.prototype, _IntTweenProxy);
export namespace IntTween { export function implement(args: [options?: {begin?: number | null | undefined; end?: number | null | undefined}], implementation: {}): IntTween {
return constructProxy(_IntTweenProxy, args, implementation) as IntTween; } }
_flaxBindInstanceType<IntTween, typeof IntTween>(IntTween, "flax.core/sdk_animation#type:IntTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::IntTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
