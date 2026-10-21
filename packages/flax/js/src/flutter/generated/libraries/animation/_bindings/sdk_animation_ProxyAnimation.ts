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
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLazyListenerMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLazyListenerMixin';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalListenersMixin';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationLocalStatusListenersMixin';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters7, _flaxMemberParameters39 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ProxyAnimation extends Omit<upstream0.Animation<number>, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.Animation<number>>, Omit<upstream2.ValueListenable<number>, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable>, Omit<upstream3.AnimationLazyListenerMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number>>, Omit<upstream4.AnimationLocalListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number> | keyof upstream3.AnimationLazyListenerMixin>, Omit<upstream5.AnimationLocalStatusListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number> | keyof upstream3.AnimationLazyListenerMixin | keyof upstream4.AnimationLocalListenersMixin>, Readonly<{ "__flaxBound:package:flutter/src/animation/animations.dart::ProxyAnimation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [] }> { readonly __ProxyAnimation: unique symbol;
readonly [_flaxDartTypeValue]: ProxyAnimation;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature0;};
readonly status: upstream6.AnimationStatus;
readonly value: number;
readonly isDismissed: boolean;
readonly isCompleted: boolean;
readonly isAnimating: boolean;
readonly isForwardOrCompleted: boolean;
readonly isListening: boolean;
get parent(): upstream0.Animation<number> | null;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream6.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream6.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream0.Animation<_FlaxDartOutput<U>>;
toString(): string;
toStringDetails(): string;
didRegisterListener(): void;
didUnregisterListener(): void;
didStartListening(): void;
didStopListening(): void;
clearListeners(): void;
notifyListeners(): void;
clearStatusListeners(): void;
notifyStatusListeners(status: upstream6.AnimationStatus): void;
set parent(value: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null);
}
defineObject("flax.core/sdk_animation#type:ProxyAnimation", ["status","value","isDismissed","isCompleted","isAnimating","isForwardOrCompleted","isListening","parent"], ["parent"], _flaxBindingMethods("flax.core/sdk_animation#type:ProxyAnimation", "object", {"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2,"didRegisterListener":_flaxMemberParameters2,"didUnregisterListener":_flaxMemberParameters2,"didStartListening":_flaxMemberParameters2,"didStopListening":_flaxMemberParameters2,"clearListeners":_flaxMemberParameters2,"notifyListeners":_flaxMemberParameters2,"clearStatusListeners":_flaxMemberParameters2,"notifyStatusListeners":_flaxMemberParameters7}, {"drive":{"id":"drive","parameters":[{"name":"child","required":true,"positional":true}]}}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
export function _ProxyAnimationFactory(animation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null): ProxyAnimation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:ProxyAnimation", "", [{"name":"animation","positional":true}], [animation], {}) as ProxyAnimation;
}
const _ProxyAnimationProxy = {type: "flax.core/sdk_animation#type:ProxyAnimation", parameters: _flaxMemberParameters39, constructors: {"": _flaxMemberParameters39}, methods: {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2,"didRegisterListener":_flaxMemberParameters2,"didUnregisterListener":_flaxMemberParameters2,"didStartListening":_flaxMemberParameters2,"didStopListening":_flaxMemberParameters2,"clearListeners":_flaxMemberParameters2,"notifyListeners":_flaxMemberParameters2,"clearStatusListeners":_flaxMemberParameters2,"notifyStatusListeners":_flaxMemberParameters7}, getters: ["parent","status","value","isDismissed","isCompleted","isAnimating","isForwardOrCompleted","isListening"], setters: ["parent"], contextMembers: ["drive"], superMembers: ["get:parent","get:status","get:value","get:isDismissed","get:isCompleted","get:isAnimating","get:isForwardOrCompleted","get:isListening","set:parent","addListener","removeListener","addStatusListener","removeStatusListener","drive","toString","toStringDetails","didRegisterListener","didUnregisterListener","didStartListening","didStopListening","clearListeners","notifyListeners","clearStatusListeners","notifyStatusListeners"]} as const;
export interface _ProxyAnimationNative extends ProxyAnimation {
readonly [_flaxDartTypeValue]: _ProxyAnimationNative;
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
didStartListening(): void;
didStopListening(): void;
clearListeners(): void;
notifyListeners(): void;
clearStatusListeners(): void;
notifyStatusListeners(status: upstream6.AnimationStatus): void;
get parent(): upstream0.Animation<number> | null;
get status(): upstream6.AnimationStatus;
get value(): number;
get isDismissed(): boolean;
get isCompleted(): boolean;
get isAnimating(): boolean;
get isForwardOrCompleted(): boolean;
get isListening(): boolean;
set parent(value: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null);
}
export abstract class _ProxyAnimationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ProxyAnimation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ProxyAnimation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ProxyAnimation", readonly [], false];
constructor(animation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null) { super(_ProxyAnimationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ProxyAnimationNative.prototype, _ProxyAnimationProxy);
export namespace _ProxyAnimationFactory { export function implement(args: [animation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null], implementation: {}): ProxyAnimation {
return constructProxy(_ProxyAnimationProxy, args, implementation) as ProxyAnimation; } }
const _ProxyAnimationBinding = _flaxProxyFactory(_ProxyAnimationFactory, _ProxyAnimationNative) as unknown as typeof _ProxyAnimationFactory & (new(animation?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null) => _ProxyAnimationNative);
export const ProxyAnimation: typeof _ProxyAnimationBinding & _FlaxInstanceType<ProxyAnimation> & _FlaxDartType<ProxyAnimation, readonly ["class", "flax.core/sdk_animation#type:ProxyAnimation", readonly [], false]> = _flaxBindInstanceType<ProxyAnimation, typeof _ProxyAnimationBinding>(_ProxyAnimationBinding, "flax.core/sdk_animation#type:ProxyAnimation", ["flax.core/sdk_animation#type:Animation","flax.core/flutter#type:Listenable","dart:core::Object","flax.core/flutter#type:ValueListenable","flax.core/sdk_animation#type:AnimationLazyListenerMixin","flax.core/sdk_animation#type:AnimationLocalListenersMixin","flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin"]) as typeof _ProxyAnimationBinding & _FlaxInstanceType<ProxyAnimation> & _FlaxDartType<ProxyAnimation, readonly ["class", "flax.core/sdk_animation#type:ProxyAnimation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "isListening" | "parent" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toString" | "toStringDetails" | "didRegisterListener" | "didUnregisterListener" | "didStartListening" | "didStopListening" | "clearListeners" | "notifyListeners" | "clearStatusListeners" | "notifyStatusListeners" | "__flaxBound:package:flutter/src/animation/animations.dart::ProxyAnimation" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLazyListenerMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
