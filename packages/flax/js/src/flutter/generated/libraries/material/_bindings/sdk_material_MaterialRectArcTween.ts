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
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"animation","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"parent","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialRectArcTween extends Omit<upstream0.RectTween, _flaxOwnMembers0>, Omit<upstream1.Tween<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween>, Omit<upstream3.Animatable<upstream2.Rect | null>, _flaxOwnMembers0 | keyof upstream0.RectTween | keyof upstream1.Tween<upstream2.Rect | null>>, Readonly<{ "__flaxBound:package:flutter/src/material/arc.dart::MaterialRectArcTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::RectTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream2.Rect | null] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream2.Rect | null] }> { readonly __MaterialRectArcTween: unique symbol;
readonly [_flaxDartTypeValue]: MaterialRectArcTween;

}
defineObject("flax.core/sdk_material#type:MaterialRectArcTween", ["begin","end","beginArc","endArc"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_material#type:MaterialRectArcTween", "object", {"lerp":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_animation#type:RectTween");
const _MaterialRectArcTweenProxy = {type: "flax.core/sdk_material#type:MaterialRectArcTween", parameters: [{"name":"begin","required":false,"positional":false},{"name":"end","required":false,"positional":false}], constructors: {"":[{"name":"begin","required":false,"positional":false},{"name":"end","required":false,"positional":false}]}, methods: {"lerp":_flaxMemberParameters0,"transform":_flaxMemberParameters0,"evaluate":_flaxMemberParameters1,"animate":_flaxMemberParameters2,"chain":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, getters: ["beginArc","endArc","begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:beginArc","get:endArc","get:begin","get:end","set:begin","set:end","lerp","transform","evaluate","animate","chain","toString"]} as const;
export interface MaterialRectArcTween {
readonly [_flaxDartTypeValue]: MaterialRectArcTween;

lerp(t: number): upstream2.Rect;
transform(t: number): upstream2.Rect | null;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Rect | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream5.Animation<upstream2.Rect | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream3.Animatable<upstream2.Rect | null>;
toString(): string;
get beginArc(): upstream4.MaterialPointArcTween | null;
get endArc(): upstream4.MaterialPointArcTween | null;
get begin(): upstream2.Rect | null;
get end(): upstream2.Rect | null;
set begin(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null);
}
export abstract class MaterialRectArcTween extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaterialRectArcTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaterialRectArcTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:MaterialRectArcTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}) { super(_MaterialRectArcTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MaterialRectArcTween.prototype, _MaterialRectArcTweenProxy);
export namespace MaterialRectArcTween { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined}], implementation: {}): MaterialRectArcTween {
return constructProxy(_MaterialRectArcTweenProxy, args, implementation) as MaterialRectArcTween; } }
_flaxBindInstanceType<MaterialRectArcTween, typeof MaterialRectArcTween>(MaterialRectArcTween, "flax.core/sdk_material#type:MaterialRectArcTween", ["flax.core/sdk_animation#type:RectTween","flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "beginArc" | "endArc" | "lerp" | "transform" | "evaluate" | "animate" | "chain" | "toString" | "__flaxBound:package:flutter/src/material/arc.dart::MaterialRectArcTween" | "__flaxBound:package:flutter/src/animation/tween.dart::RectTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
