// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AlignmentGeometryTween extends Omit<upstream0.Tween<upstream1.AlignmentGeometry | null>, _flaxOwnMembers0>, Omit<upstream2.Animatable<upstream1.AlignmentGeometry | null>, _flaxOwnMembers0 | keyof upstream0.Tween<upstream1.AlignmentGeometry | null>>, Readonly<{ "__flaxBound:package:flutter/src/rendering/tweens.dart::AlignmentGeometryTween": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [upstream1.AlignmentGeometry | null] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [upstream1.AlignmentGeometry | null] }> { readonly __AlignmentGeometryTween: unique symbol;
readonly [_flaxDartTypeValue]: AlignmentGeometryTween;

}
defineObject("flax.core/sdk_rendering#type:AlignmentGeometryTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_rendering#type:AlignmentGeometryTween", "object", {"lerp":_flaxMemberParameters0,"transform":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"evaluate":_flaxMemberParameters2,"animate":_flaxMemberParameters3,"chain":_flaxMemberParameters3}, {}), []);
const _AlignmentGeometryTweenProxy = {type: "flax.core/sdk_rendering#type:AlignmentGeometryTween", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"lerp":_flaxMemberParameters0,"transform":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"evaluate":_flaxMemberParameters2,"animate":_flaxMemberParameters3,"chain":_flaxMemberParameters3}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface AlignmentGeometryTween {
readonly [_flaxDartTypeValue]: AlignmentGeometryTween;

lerp(t: number): upstream1.AlignmentGeometry | null;
transform(t: number): upstream1.AlignmentGeometry | null;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream1.AlignmentGeometry | null;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<upstream1.AlignmentGeometry | null>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream2.Animatable<upstream1.AlignmentGeometry | null>;
get begin(): upstream1.AlignmentGeometry | null;
get end(): upstream1.AlignmentGeometry | null;
set begin(value: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null);
set end(value: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null);
}
export abstract class AlignmentGeometryTween extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AlignmentGeometryTween>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AlignmentGeometryTween;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:AlignmentGeometryTween", readonly [], false];
constructor(options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined}) { super(_AlignmentGeometryTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AlignmentGeometryTween.prototype, _AlignmentGeometryTweenProxy);
export namespace AlignmentGeometryTween { export function implement(args: [options?: {begin?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; end?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined}], implementation: {}): AlignmentGeometryTween {
return constructProxy(_AlignmentGeometryTweenProxy, args, implementation) as AlignmentGeometryTween; } }
_flaxBindInstanceType<AlignmentGeometryTween, typeof AlignmentGeometryTween>(AlignmentGeometryTween, "flax.core/sdk_rendering#type:AlignmentGeometryTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/rendering/tweens.dart::AlignmentGeometryTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
