// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters47, _flaxMemberParameters2, _flaxMemberParameters48, _flaxMemberParameters49, _flaxMemberParameters50 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface EdgeInsetsGeometryTween extends Omit<upstream0.Tween<upstream1.EdgeInsetsGeometry>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.EdgeInsetsGeometry>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.EdgeInsetsGeometry>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::EdgeInsetsGeometryTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.EdgeInsetsGeometry] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.EdgeInsetsGeometry] }> { readonly __EdgeInsetsGeometryTween: unique symbol;
readonly [_flaxDartTypeValue]: EdgeInsetsGeometryTween;

get begin(): upstream1.EdgeInsetsGeometry | null;
get end(): upstream1.EdgeInsetsGeometry | null;
lerp(t: number): upstream1.EdgeInsetsGeometry;
transform(t: number): upstream1.EdgeInsetsGeometry;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.EdgeInsetsGeometry;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.EdgeInsetsGeometry>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.EdgeInsetsGeometry>;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null);
}
defineObject("flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", "object", {"lerp":_flaxMemberParameters47,"transform":_flaxMemberParameters47,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters48,"animate":_flaxMemberParameters49,"chain":_flaxMemberParameters49}, {}), []);
export function _EdgeInsetsGeometryTweenFactory(options: { begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined } = {}): EdgeInsetsGeometryTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", "", [{"name":"begin"},{"name":"end"}], [], options) as EdgeInsetsGeometryTween;
}
const _EdgeInsetsGeometryTweenProxy = {type: "flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", parameters: _flaxMemberParameters50, constructors: {"": _flaxMemberParameters50}, methods: {"lerp":_flaxMemberParameters47,"transform":_flaxMemberParameters47,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters48,"animate":_flaxMemberParameters49,"chain":_flaxMemberParameters49}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _EdgeInsetsGeometryTweenNative extends EdgeInsetsGeometryTween {
readonly [_flaxDartTypeValue]: _EdgeInsetsGeometryTweenNative;

lerp(t: number): upstream1.EdgeInsetsGeometry;
transform(t: number): upstream1.EdgeInsetsGeometry;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.EdgeInsetsGeometry;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.EdgeInsetsGeometry>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.EdgeInsetsGeometry>;
get begin(): upstream1.EdgeInsetsGeometry | null;
get end(): upstream1.EdgeInsetsGeometry | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null);
}
export abstract class _EdgeInsetsGeometryTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<EdgeInsetsGeometryTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: EdgeInsetsGeometryTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined}) { super(_EdgeInsetsGeometryTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_EdgeInsetsGeometryTweenNative.prototype, _EdgeInsetsGeometryTweenProxy);
export namespace _EdgeInsetsGeometryTweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined}], implementation: {}): EdgeInsetsGeometryTween {
return constructProxy(_EdgeInsetsGeometryTweenProxy, args, implementation) as EdgeInsetsGeometryTween; } }
const _EdgeInsetsGeometryTweenBinding = _flaxProxyFactory(_EdgeInsetsGeometryTweenFactory, _EdgeInsetsGeometryTweenNative) as unknown as typeof _EdgeInsetsGeometryTweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined}) => _EdgeInsetsGeometryTweenNative);
export const EdgeInsetsGeometryTween: typeof _EdgeInsetsGeometryTweenBinding & _FlaxInstanceType<EdgeInsetsGeometryTween> & _FlaxDartType<EdgeInsetsGeometryTween, readonly ["class", "flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", readonly [], false]> = _flaxBindInstanceType<EdgeInsetsGeometryTween, typeof _EdgeInsetsGeometryTweenBinding>(_EdgeInsetsGeometryTweenBinding, "flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _EdgeInsetsGeometryTweenBinding & _FlaxInstanceType<EdgeInsetsGeometryTween> & _FlaxDartType<EdgeInsetsGeometryTween, readonly ["class", "flax.core/sdk_widgets#type:EdgeInsetsGeometryTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/widgets/implicit_animations.dart::EdgeInsetsGeometryTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
