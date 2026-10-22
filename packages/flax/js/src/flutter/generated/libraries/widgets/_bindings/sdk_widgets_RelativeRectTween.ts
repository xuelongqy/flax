// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters47, _flaxMemberParameters2, _flaxMemberParameters48, _flaxMemberParameters49, _flaxMemberParameters50 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RelativeRectTween extends Omit<upstream0.Tween<upstream1.RelativeRect>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.RelativeRect>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.RelativeRect>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/transitions.dart::RelativeRectTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.RelativeRect] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.RelativeRect] }> { readonly __RelativeRectTween: unique symbol;
readonly [_flaxDartTypeValue]: RelativeRectTween;

get begin(): upstream1.RelativeRect | null;
get end(): upstream1.RelativeRect | null;
lerp(t: number): upstream1.RelativeRect;
transform(t: number): upstream1.RelativeRect;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.RelativeRect;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.RelativeRect>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.RelativeRect>;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null);
}
defineObject("flax.core/sdk_widgets#type:RelativeRectTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_widgets#type:RelativeRectTween", "object", {"lerp":_flaxMemberParameters47,"transform":_flaxMemberParameters47,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters48,"animate":_flaxMemberParameters49,"chain":_flaxMemberParameters49}, {}), []);
export function _RelativeRectTweenFactory(options: { begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined } = {}): RelativeRectTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RelativeRectTween", "", [{"name":"begin"},{"name":"end"}], [], options) as RelativeRectTween;
}
const _RelativeRectTweenProxy = {type: "flax.core/sdk_widgets#type:RelativeRectTween", parameters: _flaxMemberParameters50, constructors: {"": _flaxMemberParameters50}, methods: {"lerp":_flaxMemberParameters47,"transform":_flaxMemberParameters47,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters48,"animate":_flaxMemberParameters49,"chain":_flaxMemberParameters49}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _RelativeRectTweenNative extends RelativeRectTween {
readonly [_flaxDartTypeValue]: _RelativeRectTweenNative;

lerp(t: number): upstream1.RelativeRect;
transform(t: number): upstream1.RelativeRect;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.RelativeRect;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.RelativeRect>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.RelativeRect>;
get begin(): upstream1.RelativeRect | null;
get end(): upstream1.RelativeRect | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null);
}
export abstract class _RelativeRectTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RelativeRectTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RelativeRectTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RelativeRectTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined}) { super(_RelativeRectTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RelativeRectTweenNative.prototype, _RelativeRectTweenProxy);
export namespace _RelativeRectTweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined}], implementation: {}): RelativeRectTween {
return constructProxy(_RelativeRectTweenProxy, args, implementation) as RelativeRectTween; } }
const _RelativeRectTweenBinding = _flaxProxyFactory(_RelativeRectTweenFactory, _RelativeRectTweenNative) as unknown as typeof _RelativeRectTweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null | undefined}) => _RelativeRectTweenNative);
export const RelativeRectTween: typeof _RelativeRectTweenBinding & _FlaxInstanceType<RelativeRectTween> & _FlaxDartType<RelativeRectTween, readonly ["class", "flax.core/sdk_widgets#type:RelativeRectTween", readonly [], false]> = _flaxBindInstanceType<RelativeRectTween, typeof _RelativeRectTweenBinding>(_RelativeRectTweenBinding, "flax.core/sdk_widgets#type:RelativeRectTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _RelativeRectTweenBinding & _FlaxInstanceType<RelativeRectTween> & _FlaxDartType<RelativeRectTween, readonly ["class", "flax.core/sdk_widgets#type:RelativeRectTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/widgets/transitions.dart::RelativeRectTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
