// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters160, _flaxMemberParameters193, _flaxMemberParameters194, _flaxMemberParameters2, _flaxMemberParameters195 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShapeBorderTween extends Omit<upstream0.Tween<upstream1.ShapeBorder | null>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.ShapeBorder | null>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.ShapeBorder | null>>, Readonly<{ "__flaxBound:package:material_ui/src/material.dart::ShapeBorderTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.ShapeBorder | null] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.ShapeBorder | null] }> { readonly __ShapeBorderTween: unique symbol;
readonly [_flaxDartTypeValue]: ShapeBorderTween;

get begin(): upstream1.ShapeBorder | null;
get end(): upstream1.ShapeBorder | null;
transform(t: number): upstream1.ShapeBorder | null;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.ShapeBorder | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.ShapeBorder | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.ShapeBorder | null>;
lerp(t: number): upstream1.ShapeBorder | null;
toString(): string;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
}
defineObject("flax.material/material#type:ShapeBorderTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.material/material#type:ShapeBorderTween", "object", {"transform":_flaxMemberParameters160,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194,"lerp":_flaxMemberParameters160,"toString":_flaxMemberParameters2}, {}), []);
export function _ShapeBorderTweenFactory(options: { begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined } = {}): ShapeBorderTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ShapeBorderTween", "", [{"name":"begin"},{"name":"end"}], [], options) as ShapeBorderTween;
}
const _ShapeBorderTweenProxy = {type: "flax.material/material#type:ShapeBorderTween", parameters: _flaxMemberParameters195, constructors: {"": _flaxMemberParameters195}, methods: {"transform":_flaxMemberParameters160,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194,"lerp":_flaxMemberParameters160,"toString":_flaxMemberParameters2}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","transform","evaluate","animate","chain","lerp","toString"]} as const;
export interface _ShapeBorderTweenNative extends ShapeBorderTween {
readonly [_flaxDartTypeValue]: _ShapeBorderTweenNative;

transform(t: number): upstream1.ShapeBorder | null;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.ShapeBorder | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.ShapeBorder | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.ShapeBorder | null>;
lerp(t: number): upstream1.ShapeBorder | null;
toString(): string;
get begin(): upstream1.ShapeBorder | null;
get end(): upstream1.ShapeBorder | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null);
}
export abstract class _ShapeBorderTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapeBorderTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShapeBorderTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ShapeBorderTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined}) { super(_ShapeBorderTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ShapeBorderTweenNative.prototype, _ShapeBorderTweenProxy);
export namespace _ShapeBorderTweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined}], implementation: {}): ShapeBorderTween {
return constructProxy(_ShapeBorderTweenProxy, args, implementation) as ShapeBorderTween; } }
const _ShapeBorderTweenBinding = _flaxProxyFactory(_ShapeBorderTweenFactory, _ShapeBorderTweenNative) as unknown as typeof _ShapeBorderTweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined}) => _ShapeBorderTweenNative);
export const ShapeBorderTween: typeof _ShapeBorderTweenBinding & _FlaxInstanceType<ShapeBorderTween> & _FlaxDartType<ShapeBorderTween, readonly ["class", "flax.material/material#type:ShapeBorderTween", readonly [], false]> = _flaxBindInstanceType<ShapeBorderTween, typeof _ShapeBorderTweenBinding>(_ShapeBorderTweenBinding, "flax.material/material#type:ShapeBorderTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _ShapeBorderTweenBinding & _FlaxInstanceType<ShapeBorderTween> & _FlaxDartType<ShapeBorderTween, readonly ["class", "flax.material/material#type:ShapeBorderTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "transform" | "evaluate" | "animate" | "chain" | "lerp" | "toString" | "__flaxBound:package:material_ui/src/material.dart::ShapeBorderTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
