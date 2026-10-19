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
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_MaterialPointArcTween';
import '@flax/flutter/material/_bindings/sdk_material_MaterialPointArcTween';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters158, _flaxMemberParameters192, _flaxMemberParameters190, _flaxMemberParameters191, _flaxMemberParameters2 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialRectCenterArcTween extends Omit<upstream0.RectTween, _flaxOwnMembers0>, Omit<upstream1.Tween<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween>, Omit<upstream3.Animatable<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween | keyof upstream1.Tween<upstream2.Rect | null>>, Readonly<{ "__flaxBound:package:flutter/src/material/arc.dart::MaterialRectCenterArcTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::RectTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream2.Rect | null] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream2.Rect | null] }> { readonly __MaterialRectCenterArcTween: unique symbol;
readonly [_flaxDartTypeValue]: MaterialRectCenterArcTween;

}
defineObject("flax.core/sdk_material#type:MaterialRectCenterArcTween", ["begin","end","centerArc"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_material#type:MaterialRectCenterArcTween", "object", {"lerp":_flaxMemberParameters158}, {}), [], undefined, "flax.core/sdk_animation#type:RectTween");
const _MaterialRectCenterArcTweenProxy = {type: "flax.core/sdk_material#type:MaterialRectCenterArcTween", parameters: _flaxMemberParameters192, constructors: {"": _flaxMemberParameters192}, methods: {"lerp":_flaxMemberParameters158,"transform":_flaxMemberParameters158,"evaluate":_flaxMemberParameters190,"animate":_flaxMemberParameters191,"chain":_flaxMemberParameters191,"toString":_flaxMemberParameters2}, getters: ["centerArc","begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:centerArc","get:begin","get:end","set:begin","set:end","lerp","transform","evaluate","animate","chain","toString"]} as const;
export interface MaterialRectCenterArcTween {
readonly [_flaxDartTypeValue]: MaterialRectCenterArcTween;

lerp(t: number): upstream2.Rect;
transform(t: number): upstream2.Rect | null;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Rect | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream5.Animation<upstream2.Rect | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream3.Animatable<upstream2.Rect | null>;
toString(): string;
get centerArc(): upstream4.MaterialPointArcTween | null;
get begin(): upstream2.Rect | null;
get end(): upstream2.Rect | null;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
}
export abstract class MaterialRectCenterArcTween extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialRectCenterArcTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialRectCenterArcTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialRectCenterArcTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}) { super(_MaterialRectCenterArcTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MaterialRectCenterArcTween.prototype, _MaterialRectCenterArcTweenProxy);
export namespace MaterialRectCenterArcTween { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}], implementation: {}): MaterialRectCenterArcTween {
return constructProxy(_MaterialRectCenterArcTweenProxy, args, implementation) as MaterialRectCenterArcTween; } }
_flaxBindInstanceType<MaterialRectCenterArcTween, typeof MaterialRectCenterArcTween>(MaterialRectCenterArcTween, "flax.core/sdk_material#type:MaterialRectCenterArcTween", ["flax.core/sdk_animation#type:RectTween","flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "centerArc" | "lerp" | "transform" | "evaluate" | "animate" | "chain" | "toString" | "__flaxBound:package:flutter/src/material/arc.dart::MaterialRectCenterArcTween" | "__flaxBound:package:flutter/src/animation/tween.dart::RectTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
