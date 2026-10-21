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
export interface IntTween extends Omit<upstream0.Tween<number>, _flaxOwnMembers0>, Omit<upstream1.Animatable<number>, _flaxOwnMembers0 | keyof upstream0.Tween<number>>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::IntTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }> { readonly __IntTween: unique symbol;
readonly [_flaxDartTypeValue]: IntTween;

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
defineObject("flax.core/sdk_animation#type:IntTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_animation#type:IntTween", "object", {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, {}), []);
export function _IntTweenFactory(options: { begin?: number | null | undefined; end?: number | null | undefined } = {}): IntTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:IntTween", "", [{"name":"begin"},{"name":"end"}], [], options) as IntTween;
}
const _IntTweenProxy = {type: "flax.core/sdk_animation#type:IntTween", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _IntTweenNative extends IntTween {
readonly [_flaxDartTypeValue]: _IntTweenNative;

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
export abstract class _IntTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IntTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IntTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:IntTween", readonly [], false];
constructor(options?: {begin?: number | null | undefined; end?: number | null | undefined}) { super(_IntTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_IntTweenNative.prototype, _IntTweenProxy);
export namespace _IntTweenFactory { export function implement(args: [options?: {begin?: number | null | undefined; end?: number | null | undefined}], implementation: {}): IntTween {
return constructProxy(_IntTweenProxy, args, implementation) as IntTween; } }
const _IntTweenBinding = _flaxProxyFactory(_IntTweenFactory, _IntTweenNative) as unknown as typeof _IntTweenFactory & (new(options?: {begin?: number | null | undefined; end?: number | null | undefined}) => _IntTweenNative);
export const IntTween: typeof _IntTweenBinding & _FlaxInstanceType<IntTween> & _FlaxDartType<IntTween, readonly ["class", "flax.core/sdk_animation#type:IntTween", readonly [], false]> = _flaxBindInstanceType<IntTween, typeof _IntTweenBinding>(_IntTweenBinding, "flax.core/sdk_animation#type:IntTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _IntTweenBinding & _FlaxInstanceType<IntTween> & _FlaxDartType<IntTween, readonly ["class", "flax.core/sdk_animation#type:IntTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::IntTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
