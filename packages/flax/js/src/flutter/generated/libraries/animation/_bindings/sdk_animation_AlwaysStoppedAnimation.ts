// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters3 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AlwaysStoppedAnimation<T extends unknown | null = unknown | null> extends Omit<upstream0.Animation<T>, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.Animation<T>>, Omit<upstream2.ValueListenable<T>, _flaxOwnMembers0 | keyof upstream0.Animation<T> | keyof upstream1.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/animation/animations.dart::AlwaysStoppedAnimation": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T] }> { readonly __AlwaysStoppedAnimation: unique symbol;
readonly [_flaxDartTypeValue]: AlwaysStoppedAnimation<T>;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature1<T>;};
}
defineObject("flax.core/sdk_animation#type:AlwaysStoppedAnimation", ["status","value","isDismissed","isCompleted","isAnimating","isForwardOrCompleted"], [], _flaxBindingMethods("flax.core/sdk_animation#type:AlwaysStoppedAnimation", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2}, {"drive":{"id":"drive","parameters":[{"name":"child","required":true,"positional":true}]}}), ["removeListener"]);
const _AlwaysStoppedAnimationProxy = {type: "flax.core/sdk_animation#type:AlwaysStoppedAnimation", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2}, getters: ["value","status","isDismissed","isCompleted","isAnimating","isForwardOrCompleted"], setters: [], contextMembers: ["drive"], superMembers: ["get:value","get:status","get:isDismissed","get:isCompleted","get:isAnimating","get:isForwardOrCompleted","addListener","removeListener","addStatusListener","removeStatusListener","drive","toString","toStringDetails"]} as const;
export interface AlwaysStoppedAnimation<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: AlwaysStoppedAnimation<T>;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature2<T>;};
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream3.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream3.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream0.Animation<_FlaxDartOutput<U>>;
toString(): string;
toStringDetails(): string;
get value(): T;
get status(): upstream3.AnimationStatus;
get isDismissed(): boolean;
get isCompleted(): boolean;
get isAnimating(): boolean;
get isForwardOrCompleted(): boolean;
}
export abstract class AlwaysStoppedAnimation<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AlwaysStoppedAnimation<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AlwaysStoppedAnimation<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:AlwaysStoppedAnimation", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature3;
constructor(value: unknown | null) { super(_AlwaysStoppedAnimationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AlwaysStoppedAnimation.prototype, _AlwaysStoppedAnimationProxy);
export namespace AlwaysStoppedAnimation { export function implement<T extends unknown | null = unknown | null>(args: [value: unknown | null], implementation: {}): AlwaysStoppedAnimation<T> {
return constructProxy(_AlwaysStoppedAnimationProxy, args, implementation) as AlwaysStoppedAnimation<T>; } }
_flaxBindInstanceType<AlwaysStoppedAnimation<unknown | null>, typeof AlwaysStoppedAnimation>(AlwaysStoppedAnimation, "flax.core/sdk_animation#type:AlwaysStoppedAnimation", ["flax.core/sdk_animation#type:Animation","flax.core/flutter#type:Listenable","dart:core::Object","flax.core/flutter#type:ValueListenable"]);
_flaxDefineDartTypes(AlwaysStoppedAnimation, "flax.core/sdk_animation#type:AlwaysStoppedAnimation", {...{"category":"object","constructors":{}}, proxy: _AlwaysStoppedAnimationProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toString" | "toStringDetails" | "__flaxBound:package:flutter/src/animation/animations.dart::AlwaysStoppedAnimation" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (value: unknown | null) => AlwaysStoppedAnimation<_Selected0>) & {readonly prototype: AlwaysStoppedAnimation<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<AlwaysStoppedAnimation<_Selected0>>): AlwaysStoppedAnimation<_Selected0>;} & _FlaxInstanceType<AlwaysStoppedAnimation<_Selected0>> & _FlaxDartType<AlwaysStoppedAnimation<_Selected0>> : never : never; }
interface _FlaxSignature1<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
interface _FlaxSignature2<_OwnerType0 extends unknown | null> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (value: unknown | null) => AlwaysStoppedAnimation<_Selected0>) & {readonly prototype: AlwaysStoppedAnimation<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<AlwaysStoppedAnimation<_Selected0>>): AlwaysStoppedAnimation<_Selected0>;} & _FlaxInstanceType<AlwaysStoppedAnimation<_Selected0>> & _FlaxDartType<AlwaysStoppedAnimation<_Selected0>> : never : never; }
