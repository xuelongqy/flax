// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_CompoundAnimation';
import '@flax/flutter/animation/_bindings/sdk_animation_CompoundAnimation';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLazyListenerMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLazyListenerMixin';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import type * as upstream8 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { _flaxMemberParameters2, _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters7, _flaxMemberParameters18 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimationMean extends Omit<upstream0.CompoundAnimation<number>, _flaxOwnMembers0>, Omit<upstream1.Animation<number>, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number>>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number>>, Omit<upstream3.ValueListenable<number>, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number> | keyof upstream2.Listenable>, Omit<upstream4.AnimationLazyListenerMixin, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number> | keyof upstream2.Listenable | keyof upstream3.ValueListenable<number>>, Omit<upstream5.AnimationLocalListenersMixin, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number> | keyof upstream2.Listenable | keyof upstream3.ValueListenable<number> | keyof upstream4.AnimationLazyListenerMixin>, Omit<upstream6.AnimationLocalStatusListenersMixin, _flaxOwnMembers0 | keyof upstream0.CompoundAnimation<number> | keyof upstream1.Animation<number> | keyof upstream2.Listenable | keyof upstream3.ValueListenable<number> | keyof upstream4.AnimationLazyListenerMixin | keyof upstream5.AnimationLocalListenersMixin>, Readonly<{ "__flaxBound:package:flutter/src/animation/animations.dart::AnimationMean": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/animations.dart::CompoundAnimation": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [] }> { readonly __AnimationMean: unique symbol;
readonly [_flaxDartTypeValue]: AnimationMean;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature0;};
readonly first: upstream1.Animation<number>;
readonly next: upstream1.Animation<number>;
readonly status: upstream7.AnimationStatus;
readonly value: number;
readonly isDismissed: boolean;
readonly isCompleted: boolean;
readonly isAnimating: boolean;
readonly isForwardOrCompleted: boolean;
readonly isListening: boolean;
didStartListening(): void;
didStopListening(): void;
toString(): string;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream7.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream7.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream1.Animation<_FlaxDartOutput<U>>;
toStringDetails(): string;
didRegisterListener(): void;
didUnregisterListener(): void;
clearListeners(): void;
notifyListeners(): void;
clearStatusListeners(): void;
notifyStatusListeners(status: upstream7.AnimationStatus): void;
}
defineObject("flax.core/sdk_animation#type:AnimationMean", ["first","next","status","value","isDismissed","isCompleted","isAnimating","isForwardOrCompleted","isListening"], [], _flaxBindingMethods("flax.core/sdk_animation#type:AnimationMean", "object", {"didStartListening":_flaxMemberParameters2,"didStopListening":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toStringDetails":_flaxMemberParameters2,"didRegisterListener":_flaxMemberParameters2,"didUnregisterListener":_flaxMemberParameters2,"clearListeners":_flaxMemberParameters2,"notifyListeners":_flaxMemberParameters2,"clearStatusListeners":_flaxMemberParameters2,"notifyStatusListeners":_flaxMemberParameters7}, {"drive":{"id":"drive","parameters":[{"name":"child","required":true,"positional":true}]}}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
export function _AnimationMeanFactory(options: { left: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; right: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> }): AnimationMean {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:AnimationMean", "", [{"name":"left","required":true},{"name":"right","required":true}], [], options) as AnimationMean;
}
const _AnimationMeanProxy = {type: "flax.core/sdk_animation#type:AnimationMean", parameters: _flaxMemberParameters18, constructors: {"": _flaxMemberParameters18}, methods: {"didStartListening":_flaxMemberParameters2,"didStopListening":_flaxMemberParameters2,"toString":_flaxMemberParameters2,"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toStringDetails":_flaxMemberParameters2,"didRegisterListener":_flaxMemberParameters2,"didUnregisterListener":_flaxMemberParameters2,"clearListeners":_flaxMemberParameters2,"notifyListeners":_flaxMemberParameters2,"clearStatusListeners":_flaxMemberParameters2,"notifyStatusListeners":_flaxMemberParameters7}, getters: ["value","first","next","status","isDismissed","isCompleted","isAnimating","isForwardOrCompleted","isListening"], setters: [], contextMembers: ["drive"], superMembers: ["get:value","get:first","get:next","get:status","get:isDismissed","get:isCompleted","get:isAnimating","get:isForwardOrCompleted","get:isListening","didStartListening","didStopListening","toString","addListener","removeListener","addStatusListener","removeStatusListener","drive","toStringDetails","didRegisterListener","didUnregisterListener","clearListeners","notifyListeners","clearStatusListeners","notifyStatusListeners"]} as const;
export interface _AnimationMeanNative extends AnimationMean {
readonly [_flaxDartTypeValue]: _AnimationMeanNative;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature1;};
didStartListening(): void;
didStopListening(): void;
toString(): string;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream7.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream7.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream1.Animation<_FlaxDartOutput<U>>;
toStringDetails(): string;
didRegisterListener(): void;
didUnregisterListener(): void;
clearListeners(): void;
notifyListeners(): void;
clearStatusListeners(): void;
notifyStatusListeners(status: upstream7.AnimationStatus): void;
get value(): number;
get first(): upstream1.Animation<number>;
get next(): upstream1.Animation<number>;
get status(): upstream7.AnimationStatus;
get isDismissed(): boolean;
get isCompleted(): boolean;
get isAnimating(): boolean;
get isForwardOrCompleted(): boolean;
get isListening(): boolean;
}
export abstract class _AnimationMeanNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnimationMean>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AnimationMean;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:AnimationMean", readonly [], false];
constructor(options: {left: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; right: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>}) { super(_AnimationMeanProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AnimationMeanNative.prototype, _AnimationMeanProxy);
export namespace _AnimationMeanFactory { export function implement(args: [options: {left: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; right: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>}], implementation: {}): AnimationMean {
return constructProxy(_AnimationMeanProxy, args, implementation) as AnimationMean; } }
const _AnimationMeanBinding = _flaxProxyFactory(_AnimationMeanFactory, _AnimationMeanNative) as unknown as typeof _AnimationMeanFactory & (new(options: {left: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; right: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>}) => _AnimationMeanNative);
export const AnimationMean: typeof _AnimationMeanBinding & _FlaxInstanceType<AnimationMean> & _FlaxDartType<AnimationMean, readonly ["class", "flax.core/sdk_animation#type:AnimationMean", readonly [], false]> = _flaxBindInstanceType<AnimationMean, typeof _AnimationMeanBinding>(_AnimationMeanBinding, "flax.core/sdk_animation#type:AnimationMean", ["flax.core/sdk_animation#type:CompoundAnimation","flax.core/sdk_animation#type:Animation","flax.core/flutter#type:Listenable","dart:core::Object","flax.core/flutter#type:ValueListenable","flax.core/sdk_animation#type:AnimationLazyListenerMixin","flax.core/sdk_animation#type:AnimationLocalListenersMixin","flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin"]) as typeof _AnimationMeanBinding & _FlaxInstanceType<AnimationMean> & _FlaxDartType<AnimationMean, readonly ["class", "flax.core/sdk_animation#type:AnimationMean", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "first" | "next" | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "isListening" | "didStartListening" | "didStopListening" | "toString" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toStringDetails" | "didRegisterListener" | "didUnregisterListener" | "clearListeners" | "notifyListeners" | "clearStatusListeners" | "notifyStatusListeners" | "__flaxBound:package:flutter/src/animation/animations.dart::AnimationMean" | "__flaxBound:package:flutter/src/animation/animations.dart::CompoundAnimation" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream1.Animation<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream1.Animation<_Selected0> : never : never; }
