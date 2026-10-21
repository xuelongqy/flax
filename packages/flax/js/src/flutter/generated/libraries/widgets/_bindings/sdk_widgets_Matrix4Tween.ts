// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters47, _flaxMemberParameters2, _flaxMemberParameters48, _flaxMemberParameters49, _flaxMemberParameters50 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Matrix4Tween extends Omit<upstream0.Tween<upstream1.Matrix4>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.Matrix4>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.Matrix4>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::Matrix4Tween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.Matrix4] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.Matrix4] }> { readonly __Matrix4Tween: unique symbol;
readonly [_flaxDartTypeValue]: Matrix4Tween;

get begin(): upstream1.Matrix4 | null;
get end(): upstream1.Matrix4 | null;
lerp(t: number): upstream1.Matrix4;
transform(t: number): upstream1.Matrix4;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.Matrix4;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.Matrix4>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.Matrix4>;
set begin(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null);
}
defineObject("flax.core/sdk_widgets#type:Matrix4Tween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_widgets#type:Matrix4Tween", "object", {"lerp":_flaxMemberParameters47,"transform":_flaxMemberParameters47,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters48,"animate":_flaxMemberParameters49,"chain":_flaxMemberParameters49}, {}), []);
export function _Matrix4TweenFactory(options: { begin?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined } = {}): Matrix4Tween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Matrix4Tween", "", [{"name":"begin"},{"name":"end"}], [], options) as Matrix4Tween;
}
const _Matrix4TweenProxy = {type: "flax.core/sdk_widgets#type:Matrix4Tween", parameters: _flaxMemberParameters50, constructors: {"": _flaxMemberParameters50}, methods: {"lerp":_flaxMemberParameters47,"transform":_flaxMemberParameters47,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters48,"animate":_flaxMemberParameters49,"chain":_flaxMemberParameters49}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _Matrix4TweenNative extends Matrix4Tween {
readonly [_flaxDartTypeValue]: _Matrix4TweenNative;

lerp(t: number): upstream1.Matrix4;
transform(t: number): upstream1.Matrix4;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.Matrix4;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.Matrix4>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.Matrix4>;
get begin(): upstream1.Matrix4 | null;
get end(): upstream1.Matrix4 | null;
set begin(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null);
}
export abstract class _Matrix4TweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Matrix4Tween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Matrix4Tween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:Matrix4Tween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined}) { super(_Matrix4TweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_Matrix4TweenNative.prototype, _Matrix4TweenProxy);
export namespace _Matrix4TweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined}], implementation: {}): Matrix4Tween {
return constructProxy(_Matrix4TweenProxy, args, implementation) as Matrix4Tween; } }
const _Matrix4TweenBinding = _flaxProxyFactory(_Matrix4TweenFactory, _Matrix4TweenNative) as unknown as typeof _Matrix4TweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null | undefined}) => _Matrix4TweenNative);
export const Matrix4Tween: typeof _Matrix4TweenBinding & _FlaxInstanceType<Matrix4Tween> & _FlaxDartType<Matrix4Tween, readonly ["class", "flax.core/sdk_widgets#type:Matrix4Tween", readonly [], false]> = _flaxBindInstanceType<Matrix4Tween, typeof _Matrix4TweenBinding>(_Matrix4TweenBinding, "flax.core/sdk_widgets#type:Matrix4Tween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _Matrix4TweenBinding & _FlaxInstanceType<Matrix4Tween> & _FlaxDartType<Matrix4Tween, readonly ["class", "flax.core/sdk_widgets#type:Matrix4Tween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::Matrix4Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
