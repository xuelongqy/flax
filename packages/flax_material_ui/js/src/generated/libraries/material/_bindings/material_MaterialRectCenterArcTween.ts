// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_RectTween';
import '@flax/flutter/animation/_bindings/sdk_animation_RectTween';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream4 from '@flax/material-ui/_bindings/material_MaterialPointArcTween';
import '@flax/material-ui/_bindings/material_MaterialPointArcTween';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters160, _flaxMemberParameters193, _flaxMemberParameters194, _flaxMemberParameters195, _flaxMemberParameters2 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialRectCenterArcTween extends Omit<upstream0.RectTween, _flaxOwnMembers0>, Omit<upstream1.Tween<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween>, Omit<upstream3.Animatable<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween | keyof upstream1.Tween<upstream2.Rect | null>>, Readonly<{ "__flaxBound:package:material_ui/src/arc.dart::MaterialRectCenterArcTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::RectTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream2.Rect | null] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream2.Rect | null] }> { readonly __MaterialRectCenterArcTween: unique symbol;
readonly [_flaxDartTypeValue]: MaterialRectCenterArcTween;

get begin(): upstream2.Rect | null;
get end(): upstream2.Rect | null;
readonly centerArc: upstream4.MaterialPointArcTween | null;
lerp(t: number): upstream2.Rect;
transform(t: number): upstream2.Rect | null;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Rect | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream5.Animation<upstream2.Rect | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream3.Animatable<upstream2.Rect | null>;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
}
defineObject("flax.material/material#type:MaterialRectCenterArcTween", ["begin","end","centerArc"], ["begin","end"], _flaxBindingMethods("flax.material/material#type:MaterialRectCenterArcTween", "object", {"lerp":_flaxMemberParameters160,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194}, {}), [], undefined, "flax.core/sdk_animation#type:RectTween");
export function _MaterialRectCenterArcTweenFactory(options: { begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined } = {}): MaterialRectCenterArcTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialRectCenterArcTween", "", [{"name":"begin"},{"name":"end"}], [], options) as MaterialRectCenterArcTween;
}
const _MaterialRectCenterArcTweenProxy = {type: "flax.material/material#type:MaterialRectCenterArcTween", parameters: _flaxMemberParameters195, constructors: {"": _flaxMemberParameters195}, methods: {"lerp":_flaxMemberParameters160,"transform":_flaxMemberParameters160,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194}, getters: ["centerArc","begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:centerArc","get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _MaterialRectCenterArcTweenNative extends MaterialRectCenterArcTween {
readonly [_flaxDartTypeValue]: _MaterialRectCenterArcTweenNative;

lerp(t: number): upstream2.Rect;
transform(t: number): upstream2.Rect | null;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Rect | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream5.Animation<upstream2.Rect | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream3.Animatable<upstream2.Rect | null>;
get centerArc(): upstream4.MaterialPointArcTween | null;
get begin(): upstream2.Rect | null;
get end(): upstream2.Rect | null;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
}
export abstract class _MaterialRectCenterArcTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialRectCenterArcTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialRectCenterArcTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialRectCenterArcTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}) { super(_MaterialRectCenterArcTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialRectCenterArcTweenNative.prototype, _MaterialRectCenterArcTweenProxy);
export namespace _MaterialRectCenterArcTweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}], implementation: {}): MaterialRectCenterArcTween {
return constructProxy(_MaterialRectCenterArcTweenProxy, args, implementation) as MaterialRectCenterArcTween; } }
const _MaterialRectCenterArcTweenBinding = _flaxProxyFactory(_MaterialRectCenterArcTweenFactory, _MaterialRectCenterArcTweenNative) as unknown as typeof _MaterialRectCenterArcTweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}) => _MaterialRectCenterArcTweenNative);
export const MaterialRectCenterArcTween: typeof _MaterialRectCenterArcTweenBinding & _FlaxInstanceType<MaterialRectCenterArcTween> & _FlaxDartType<MaterialRectCenterArcTween, readonly ["class", "flax.material/material#type:MaterialRectCenterArcTween", readonly [], false]> = _flaxBindInstanceType<MaterialRectCenterArcTween, typeof _MaterialRectCenterArcTweenBinding>(_MaterialRectCenterArcTweenBinding, "flax.material/material#type:MaterialRectCenterArcTween", ["flax.core/sdk_animation#type:RectTween","flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _MaterialRectCenterArcTweenBinding & _FlaxInstanceType<MaterialRectCenterArcTween> & _FlaxDartType<MaterialRectCenterArcTween, readonly ["class", "flax.material/material#type:MaterialRectCenterArcTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "centerArc" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:material_ui/src/arc.dart::MaterialRectCenterArcTween" | "__flaxBound:package:flutter/src/animation/tween.dart::RectTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
