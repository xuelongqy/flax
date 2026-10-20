// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters160, _flaxMemberParameters2, _flaxMemberParameters193, _flaxMemberParameters194, _flaxMemberParameters195 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ThemeDataTween extends Omit<upstream0.Tween<upstream1.ThemeData>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.ThemeData>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.ThemeData>>, Readonly<{ "__flaxBound:package:flutter/src/material/theme.dart::ThemeDataTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.ThemeData] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.ThemeData] }> { readonly __ThemeDataTween: unique symbol;
readonly [_flaxDartTypeValue]: ThemeDataTween;

get begin(): upstream1.ThemeData | null;
get end(): upstream1.ThemeData | null;
lerp(t: number): upstream1.ThemeData;
transform(t: number): upstream1.ThemeData;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.ThemeData;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.ThemeData>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.ThemeData>;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
defineObject("flax.core/sdk_material#type:ThemeDataTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_material#type:ThemeDataTween", "object", {"lerp":_flaxMemberParameters160,"transform":_flaxMemberParameters160,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194}, {}), []);
export function _ThemeDataTweenFactory(options: { begin?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined } = {}): ThemeDataTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:ThemeDataTween", "", [{"name":"begin"},{"name":"end"}], [], options) as ThemeDataTween;
}
const _ThemeDataTweenProxy = {type: "flax.core/sdk_material#type:ThemeDataTween", parameters: _flaxMemberParameters195, constructors: {"": _flaxMemberParameters195}, methods: {"lerp":_flaxMemberParameters160,"transform":_flaxMemberParameters160,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _ThemeDataTweenNative extends ThemeDataTween {
readonly [_flaxDartTypeValue]: _ThemeDataTweenNative;

lerp(t: number): upstream1.ThemeData;
transform(t: number): upstream1.ThemeData;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.ThemeData;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.ThemeData>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.ThemeData>;
get begin(): upstream1.ThemeData | null;
get end(): upstream1.ThemeData | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
export abstract class _ThemeDataTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ThemeDataTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ThemeDataTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ThemeDataTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_ThemeDataTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ThemeDataTweenNative.prototype, _ThemeDataTweenProxy);
export namespace _ThemeDataTweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): ThemeDataTween {
return constructProxy(_ThemeDataTweenProxy, args, implementation) as ThemeDataTween; } }
const _ThemeDataTweenBinding = _flaxProxyFactory(_ThemeDataTweenFactory, _ThemeDataTweenNative) as unknown as typeof _ThemeDataTweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::ThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) => _ThemeDataTweenNative);
export const ThemeDataTween: typeof _ThemeDataTweenBinding & _FlaxInstanceType<ThemeDataTween> & _FlaxDartType<ThemeDataTween, readonly ["class", "flax.core/sdk_material#type:ThemeDataTween", readonly [], false]> = _flaxBindInstanceType<ThemeDataTween, typeof _ThemeDataTweenBinding>(_ThemeDataTweenBinding, "flax.core/sdk_material#type:ThemeDataTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _ThemeDataTweenBinding & _FlaxInstanceType<ThemeDataTween> & _FlaxDartType<ThemeDataTween, readonly ["class", "flax.core/sdk_material#type:ThemeDataTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/material/theme.dart::ThemeDataTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
