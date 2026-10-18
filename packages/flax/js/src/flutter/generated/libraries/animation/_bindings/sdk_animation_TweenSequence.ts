// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_TweenSequenceItem';
import '@flax/flutter/animation/_bindings/sdk_animation_TweenSequenceItem';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"animation","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"parent","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TweenSequence<T extends unknown | null = unknown | null> extends Omit<upstream0.Animatable<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequence": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T] }> { readonly __TweenSequence: unique symbol;
readonly [_flaxDartTypeValue]: TweenSequence<T>;

}
defineObject("flax.core/sdk_animation#type:TweenSequence", [], [], _flaxBindingMethods("flax.core/sdk_animation#type:TweenSequence", "object", {"transform":_flaxMemberParameters0,"evaluate":_flaxMemberParameters1,"animate":_flaxMemberParameters2,"chain":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, {}), []);
const _TweenSequenceProxy = {type: "flax.core/sdk_animation#type:TweenSequence", parameters: [{"name":"items","required":true,"positional":true}], constructors: {"":[{"name":"items","required":true,"positional":true}]}, methods: {"transform":_flaxMemberParameters0,"evaluate":_flaxMemberParameters1,"animate":_flaxMemberParameters2,"chain":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, getters: [], setters: [], contextMembers: [], superMembers: ["transform","evaluate","animate","chain","toString"]} as const;
export interface TweenSequence<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: TweenSequence<T>;

transform(t: number): T;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): T;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Animation<T>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream0.Animatable<T>;
toString(): string;
}
export abstract class TweenSequence<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TweenSequence<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TweenSequence<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:TweenSequence", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null] }>>) { super(_TweenSequenceProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TweenSequence.prototype, _TweenSequenceProxy);
export namespace TweenSequence { export function implement<T extends unknown | null = unknown | null>(args: [items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null] }>>], implementation: {}): TweenSequence<T> {
return constructProxy(_TweenSequenceProxy, args, implementation) as TweenSequence<T>; } }
_flaxBindInstanceType<TweenSequence<unknown | null>, typeof TweenSequence>(TweenSequence, "flax.core/sdk_animation#type:TweenSequence", ["flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
_flaxDefineDartTypes(TweenSequence, "flax.core/sdk_animation#type:TweenSequence", {...{"category":"object","constructors":{}}, proxy: _TweenSequenceProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "transform" | "evaluate" | "animate" | "chain" | "toString" | "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequence" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null] }>>) => TweenSequence<_Selected0>) & {readonly prototype: TweenSequence<_Selected0>;implement(args: readonly [DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null] }>>], implementation: Partial<TweenSequence<_Selected0>>): TweenSequence<_Selected0>;} & _FlaxInstanceType<TweenSequence<_Selected0>> & _FlaxDartType<TweenSequence<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (items: DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null] }>>) => TweenSequence<_Selected0>) & {readonly prototype: TweenSequence<_Selected0>;implement(args: readonly [DartListInput<upstream1.TweenSequenceItem<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [unknown | null] }>>], implementation: Partial<TweenSequence<_Selected0>>): TweenSequence<_Selected0>;} & _FlaxInstanceType<TweenSequence<_Selected0>> & _FlaxDartType<TweenSequence<_Selected0>> : never : never; }
