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
export interface MaterialRectArcTween extends Omit<upstream0.RectTween, _flaxOwnMembers0>, Omit<upstream1.Tween<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween>, Omit<upstream3.Animatable<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween | keyof upstream1.Tween<upstream2.Rect | null>>, Readonly<{ "__flaxBound:package:material_ui/src/arc.dart::MaterialRectArcTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::RectTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream2.Rect | null] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream2.Rect | null] }> { readonly __MaterialRectArcTween: unique symbol;
readonly [_flaxDartTypeValue]: MaterialRectArcTween;

get begin(): upstream2.Rect | null;
get end(): upstream2.Rect | null;
readonly beginArc: upstream4.MaterialPointArcTween | null;
readonly endArc: upstream4.MaterialPointArcTween | null;
lerp(t: number): upstream2.Rect;
transform(t: number): upstream2.Rect | null;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Rect | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream5.Animation<upstream2.Rect | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream3.Animatable<upstream2.Rect | null>;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
}
defineObject("flax.material/material#type:MaterialRectArcTween", ["begin","end","beginArc","endArc"], ["begin","end"], _flaxBindingMethods("flax.material/material#type:MaterialRectArcTween", "object", {"lerp":_flaxMemberParameters160,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194}, {}), [], undefined, "flax.core/sdk_animation#type:RectTween");
export function _MaterialRectArcTweenFactory(options: { begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined } = {}): MaterialRectArcTween {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialRectArcTween", "", [{"name":"begin"},{"name":"end"}], [], options) as MaterialRectArcTween;
}
const _MaterialRectArcTweenProxy = {type: "flax.material/material#type:MaterialRectArcTween", parameters: _flaxMemberParameters195, constructors: {"": _flaxMemberParameters195}, methods: {"lerp":_flaxMemberParameters160,"transform":_flaxMemberParameters160,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters193,"animate":_flaxMemberParameters194,"chain":_flaxMemberParameters194}, getters: ["beginArc","endArc","begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:beginArc","get:endArc","get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _MaterialRectArcTweenNative extends MaterialRectArcTween {
readonly [_flaxDartTypeValue]: _MaterialRectArcTweenNative;

lerp(t: number): upstream2.Rect;
transform(t: number): upstream2.Rect | null;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Rect | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream5.Animation<upstream2.Rect | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream3.Animatable<upstream2.Rect | null>;
get beginArc(): upstream4.MaterialPointArcTween | null;
get endArc(): upstream4.MaterialPointArcTween | null;
get begin(): upstream2.Rect | null;
get end(): upstream2.Rect | null;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
}
export abstract class _MaterialRectArcTweenNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialRectArcTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialRectArcTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:MaterialRectArcTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}) { super(_MaterialRectArcTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MaterialRectArcTweenNative.prototype, _MaterialRectArcTweenProxy);
export namespace _MaterialRectArcTweenFactory { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}], implementation: {}): MaterialRectArcTween {
return constructProxy(_MaterialRectArcTweenProxy, args, implementation) as MaterialRectArcTween; } }
const _MaterialRectArcTweenBinding = _flaxProxyFactory(_MaterialRectArcTweenFactory, _MaterialRectArcTweenNative) as unknown as typeof _MaterialRectArcTweenFactory & (new(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}) => _MaterialRectArcTweenNative);
export const MaterialRectArcTween: typeof _MaterialRectArcTweenBinding & _FlaxInstanceType<MaterialRectArcTween> & _FlaxDartType<MaterialRectArcTween, readonly ["class", "flax.material/material#type:MaterialRectArcTween", readonly [], false]> = _flaxBindInstanceType<MaterialRectArcTween, typeof _MaterialRectArcTweenBinding>(_MaterialRectArcTweenBinding, "flax.material/material#type:MaterialRectArcTween", ["flax.core/sdk_animation#type:RectTween","flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _MaterialRectArcTweenBinding & _FlaxInstanceType<MaterialRectArcTween> & _FlaxDartType<MaterialRectArcTween, readonly ["class", "flax.material/material#type:MaterialRectArcTween", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "beginArc" | "endArc" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:material_ui/src/arc.dart::MaterialRectArcTween" | "__flaxBound:package:flutter/src/animation/tween.dart::RectTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
