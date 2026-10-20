// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters4, _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters28 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ColorTween extends Omit<upstream0.Tween<upstream1.Color | null>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.Color | null>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.Color | null>>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::ColorTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.Color | null] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.Color | null] }> { readonly __ColorTween: unique symbol;
readonly [_flaxDartTypeValue]: ColorTween;

get begin(): upstream1.Color | null;
get end(): upstream1.Color | null;
lerp(t: number): upstream1.Color | null;
transform(t: number): upstream1.Color | null;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.Color | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.Color | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.Color | null>;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null);
}
defineObject("flax.core/sdk_animation#type:ColorTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_animation#type:ColorTween", "object", {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, {}), []);
export function _ColorTweenFactory(options: { begin?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined } = {}): ColorTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:ColorTween", "", [{"name":"begin"},{"name":"end"}], [], options) as ColorTween;
}
const _ColorTweenProxy = {type: "flax.core/sdk_animation#type:ColorTween", parameters: _flaxMemberParameters28, constructors: {"": _flaxMemberParameters28}, methods: {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _ColorTweenNative extends ColorTween {
readonly [_flaxDartTypeValue]: _ColorTweenNative;

lerp(t: number): upstream1.Color | null;
transform(t: number): upstream1.Color | null;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.Color | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.Color | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.Color | null>;
get begin(): upstream1.Color | null;
get end(): upstream1.Color | null;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null);
}
export abstract class _ColorTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ColorTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ColorTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ColorTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) { super(_ColorTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ColorTweenNative.prototype, _ColorTweenProxy);
export namespace _ColorTweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}], implementation: {}): ColorTween {
return constructProxy(_ColorTweenProxy, args, implementation) as ColorTween; } }
const _ColorTweenBinding = _flaxProxyFactory(_ColorTweenFactory, _ColorTweenNative) as unknown as typeof _ColorTweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}) => _ColorTweenNative);
export const ColorTween: typeof _ColorTweenBinding & _FlaxInstanceType<ColorTween> & _FlaxDartType<ColorTween, readonly ["class", "flax.core/sdk_animation#type:ColorTween", readonly [], false]> = _flaxBindInstanceType<ColorTween, typeof _ColorTweenBinding>(_ColorTweenBinding, "flax.core/sdk_animation#type:ColorTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _ColorTweenBinding & _FlaxInstanceType<ColorTween> & _FlaxDartType<ColorTween, readonly ["class", "flax.core/sdk_animation#type:ColorTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::ColorTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
