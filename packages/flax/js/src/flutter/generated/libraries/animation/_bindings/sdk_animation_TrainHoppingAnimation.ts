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
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationEagerListenerMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationEagerListenerMixin';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters7, _flaxMemberParameters44 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TrainHoppingAnimation extends Omit<upstream0.Animation<number>, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.Animation<number>>, Omit<upstream2.ValueListenable<number>, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable>, Omit<upstream3.AnimationEagerListenerMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number>>, Omit<upstream4.AnimationLocalListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number> | keyof upstream3.AnimationEagerListenerMixin>, Omit<upstream5.AnimationLocalStatusListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number> | keyof upstream3.AnimationEagerListenerMixin | keyof upstream4.AnimationLocalListenersMixin>, Readonly<{ "__flaxBound:package:flutter/src/animation/animations.dart::TrainHoppingAnimation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [] }> { readonly __TrainHoppingAnimation: unique symbol;
readonly [_flaxDartTypeValue]: TrainHoppingAnimation;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature0;};
readonly status: upstream6.AnimationStatus;
readonly value: number;
readonly isDismissed: boolean;
readonly isCompleted: boolean;
readonly isAnimating: boolean;
readonly isForwardOrCompleted: boolean;
readonly currentTrain: upstream0.Animation<number> | null;
get onSwitchedTrain(): (() => void) | null;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream6.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream6.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream0.Animation<_FlaxDartOutput<U>>;
toString(): string;
toStringDetails(): string;
didRegisterListener(): void;
didUnregisterListener(): void;
dispose(): void;
clearListeners(): void;
notifyListeners(): void;
clearStatusListeners(): void;
notifyStatusListeners(status: upstream6.AnimationStatus): void;
set onSwitchedTrain(value: (() => void) | null);
}
defineObject("flax.core/sdk_animation#type:TrainHoppingAnimation", ["status","value","isDismissed","isCompleted","isAnimating","isForwardOrCompleted","currentTrain","onSwitchedTrain"], ["onSwitchedTrain"], _flaxBindingMethods("flax.core/sdk_animation#type:TrainHoppingAnimation", "object", {"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2,"didRegisterListener":_flaxMemberParameters2,"didUnregisterListener":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"clearListeners":_flaxMemberParameters2,"notifyListeners":_flaxMemberParameters2,"clearStatusListeners":_flaxMemberParameters2,"notifyStatusListeners":_flaxMemberParameters7}, {"drive":{"id":"drive","parameters":[{"name":"child","required":true,"positional":true}]}}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
export function _TrainHoppingAnimationFactory(_currentTrain: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, _nextTrain: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null, options: { onSwitchedTrain?: (() => void) | null | undefined } = {}): TrainHoppingAnimation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:TrainHoppingAnimation", "", [{"name":"_currentTrain","required":true,"positional":true},{"name":"_nextTrain","required":true,"positional":true},{"name":"onSwitchedTrain"}], [_currentTrain, _nextTrain], options) as TrainHoppingAnimation;
}
const _TrainHoppingAnimationProxy = {type: "flax.core/sdk_animation#type:TrainHoppingAnimation", parameters: _flaxMemberParameters44, constructors: {"": _flaxMemberParameters44}, methods: {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2,"didRegisterListener":_flaxMemberParameters2,"didUnregisterListener":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"clearListeners":_flaxMemberParameters2,"notifyListeners":_flaxMemberParameters2,"clearStatusListeners":_flaxMemberParameters2,"notifyStatusListeners":_flaxMemberParameters7}, getters: ["currentTrain","onSwitchedTrain","status","value","isDismissed","isCompleted","isAnimating","isForwardOrCompleted"], setters: ["onSwitchedTrain"], contextMembers: ["drive"], superMembers: ["get:currentTrain","get:onSwitchedTrain","get:status","get:value","get:isDismissed","get:isCompleted","get:isAnimating","get:isForwardOrCompleted","set:onSwitchedTrain","addListener","removeListener","addStatusListener","removeStatusListener","drive","toString","toStringDetails","didRegisterListener","didUnregisterListener","dispose","clearListeners","notifyListeners","clearStatusListeners","notifyStatusListeners"]} as const;
export interface _TrainHoppingAnimationNative extends TrainHoppingAnimation {
readonly [_flaxDartTypeValue]: _TrainHoppingAnimationNative;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature1;};
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream6.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream6.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream0.Animation<_FlaxDartOutput<U>>;
toString(): string;
toStringDetails(): string;
didRegisterListener(): void;
didUnregisterListener(): void;
dispose(): void;
clearListeners(): void;
notifyListeners(): void;
clearStatusListeners(): void;
notifyStatusListeners(status: upstream6.AnimationStatus): void;
get currentTrain(): upstream0.Animation<number> | null;
get onSwitchedTrain(): (() => void) | null;
get status(): upstream6.AnimationStatus;
get value(): number;
get isDismissed(): boolean;
get isCompleted(): boolean;
get isAnimating(): boolean;
get isForwardOrCompleted(): boolean;
set onSwitchedTrain(value: (() => void) | null);
}
export abstract class _TrainHoppingAnimationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TrainHoppingAnimation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TrainHoppingAnimation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:TrainHoppingAnimation", readonly [], false];
constructor(_currentTrain: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, _nextTrain: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null, options?: {onSwitchedTrain?: (() => void) | null | undefined}) { super(_TrainHoppingAnimationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TrainHoppingAnimationNative.prototype, _TrainHoppingAnimationProxy);
export namespace _TrainHoppingAnimationFactory { export function implement(args: [_currentTrain: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, _nextTrain: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null, options?: {onSwitchedTrain?: (() => void) | null | undefined}], implementation: {}): TrainHoppingAnimation {
return constructProxy(_TrainHoppingAnimationProxy, args, implementation) as TrainHoppingAnimation; } }
const _TrainHoppingAnimationBinding = _flaxProxyFactory(_TrainHoppingAnimationFactory, _TrainHoppingAnimationNative) as unknown as typeof _TrainHoppingAnimationFactory & (new(_currentTrain: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, _nextTrain: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null, options?: {onSwitchedTrain?: (() => void) | null | undefined}) => _TrainHoppingAnimationNative);
export const TrainHoppingAnimation: typeof _TrainHoppingAnimationBinding & _FlaxInstanceType<TrainHoppingAnimation> & _FlaxDartType<TrainHoppingAnimation, readonly ["class", "flax.core/sdk_animation#type:TrainHoppingAnimation", readonly [], false]> = _flaxBindInstanceType<TrainHoppingAnimation, typeof _TrainHoppingAnimationBinding>(_TrainHoppingAnimationBinding, "flax.core/sdk_animation#type:TrainHoppingAnimation", ["flax.core/sdk_animation#type:Animation","flax.core/flutter#type:Listenable","dart:core::Object","flax.core/flutter#type:ValueListenable","flax.core/sdk_animation#type:AnimationEagerListenerMixin","flax.core/sdk_animation#type:AnimationLocalListenersMixin","flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin"]) as typeof _TrainHoppingAnimationBinding & _FlaxInstanceType<TrainHoppingAnimation> & _FlaxDartType<TrainHoppingAnimation, readonly ["class", "flax.core/sdk_animation#type:TrainHoppingAnimation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "currentTrain" | "onSwitchedTrain" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toString" | "toStringDetails" | "didRegisterListener" | "didUnregisterListener" | "dispose" | "clearListeners" | "notifyListeners" | "clearStatusListeners" | "notifyStatusListeners" | "__flaxBound:package:flutter/src/animation/animations.dart::TrainHoppingAnimation" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
