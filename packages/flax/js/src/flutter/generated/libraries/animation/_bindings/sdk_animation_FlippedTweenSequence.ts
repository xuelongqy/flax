// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_TweenSequence';
import '@flax/flutter/animation/_bindings/sdk_animation_TweenSequence';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_TweenSequenceItem';
import '@flax/flutter/animation/_bindings/sdk_animation_TweenSequenceItem';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters4, _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters34 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlippedTweenSequence extends Omit<upstream0.TweenSequence<number>, _flaxOwnMembers0>, Omit<upstream1.Animatable<number>, _flaxOwnMembers0 | keyof upstream0.TweenSequence<number>>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::FlippedTweenSequence": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequence": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }> { readonly __FlippedTweenSequence: unique symbol;
readonly [_flaxDartTypeValue]: FlippedTweenSequence;

}
defineObject("flax.core/sdk_animation#type:FlippedTweenSequence", [], [], _flaxBindingMethods("flax.core/sdk_animation#type:FlippedTweenSequence", "object", {"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, {}), []);
const _FlippedTweenSequenceProxy = {type: "flax.core/sdk_animation#type:FlippedTweenSequence", parameters: _flaxMemberParameters34, constructors: {"": _flaxMemberParameters34}, methods: {"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, getters: [], setters: [], contextMembers: [], superMembers: ["transform","toString","evaluate","animate","chain"]} as const;
export interface FlippedTweenSequence {
readonly [_flaxDartTypeValue]: FlippedTweenSequence;

transform(t: number): number;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): number;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<number>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream1.Animatable<number>;
}
export abstract class FlippedTweenSequence extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlippedTweenSequence>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlippedTweenSequence;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:FlippedTweenSequence", readonly [], false];
constructor(items: DartListInput<upstream2.TweenSequenceItem<number>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [number] }>>) { super(_FlippedTweenSequenceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FlippedTweenSequence.prototype, _FlippedTweenSequenceProxy);
export namespace FlippedTweenSequence { export function implement(args: [items: DartListInput<upstream2.TweenSequenceItem<number>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [number] }>>], implementation: {}): FlippedTweenSequence {
return constructProxy(_FlippedTweenSequenceProxy, args, implementation) as FlippedTweenSequence; } }
_flaxBindInstanceType<FlippedTweenSequence, typeof FlippedTweenSequence>(FlippedTweenSequence, "flax.core/sdk_animation#type:FlippedTweenSequence", ["flax.core/sdk_animation#type:TweenSequence","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween_sequence.dart::FlippedTweenSequence" | "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequence" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
