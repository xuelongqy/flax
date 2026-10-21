// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters4, _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters30 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StepTween extends Omit<upstream0.Tween<number>, _flaxOwnMembers0>, Omit<upstream1.Animatable<number>, _flaxOwnMembers0 | keyof upstream0.Tween<number>>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::StepTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }> { readonly __StepTween: unique symbol;
readonly [_flaxDartTypeValue]: StepTween;

get begin(): number | null;
get end(): number | null;
lerp(t: number): number;
transform(t: number): number;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): number;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Animation<number>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream1.Animatable<number>;
set begin(value: number | null);
set end(value: number | null);
}
defineObject("flax.core/sdk_animation#type:StepTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_animation#type:StepTween", "object", {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, {}), []);
export function _StepTweenFactory(options: { begin?: number | null | undefined; end?: number | null | undefined } = {}): StepTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:StepTween", "", [{"name":"begin"},{"name":"end"}], [], options) as StepTween;
}
const _StepTweenProxy = {type: "flax.core/sdk_animation#type:StepTween", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _StepTweenNative extends StepTween {
readonly [_flaxDartTypeValue]: _StepTweenNative;

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
export abstract class _StepTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StepTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StepTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:StepTween", readonly [], false];
constructor(options?: {begin?: number | null | undefined; end?: number | null | undefined}) { super(_StepTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_StepTweenNative.prototype, _StepTweenProxy);
export namespace _StepTweenFactory { export function implement(args: [options?: {begin?: number | null | undefined; end?: number | null | undefined}], implementation: {}): StepTween {
return constructProxy(_StepTweenProxy, args, implementation) as StepTween; } }
const _StepTweenBinding = _flaxProxyFactory(_StepTweenFactory, _StepTweenNative) as unknown as typeof _StepTweenFactory & (new(options?: {begin?: number | null | undefined; end?: number | null | undefined}) => _StepTweenNative);
export const StepTween: typeof _StepTweenBinding & _FlaxInstanceType<StepTween> & _FlaxDartType<StepTween, readonly ["class", "flax.core/sdk_animation#type:StepTween", readonly [], false]> = _flaxBindInstanceType<StepTween, typeof _StepTweenBinding>(_StepTweenBinding, "flax.core/sdk_animation#type:StepTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _StepTweenBinding & _FlaxInstanceType<StepTween> & _FlaxDartType<StepTween, readonly ["class", "flax.core/sdk_animation#type:StepTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::StepTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
