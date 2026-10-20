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
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationBehavior';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationBehavior';
import type * as upstream8 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream9 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import type * as upstream10 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream11 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_TickerFuture';
import type * as upstream12 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream13 from '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import '@flax/flutter/physics/_bindings/sdk_physics_SpringDescription';
import type * as upstream14 from '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import '@flax/flutter/physics/_bindings/sdk_physics_Simulation';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters7, _flaxMemberParameters8, _flaxMemberParameters9, _flaxMemberParameters10, _flaxMemberParameters11, _flaxMemberParameters12, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimationController extends Omit<upstream0.Animation<number>, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.Animation<number>>, Omit<upstream2.ValueListenable<number>, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable>, Omit<upstream3.AnimationEagerListenerMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number>>, Omit<upstream4.AnimationLocalListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number> | keyof upstream3.AnimationEagerListenerMixin>, Omit<upstream5.AnimationLocalStatusListenersMixin, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number> | keyof upstream3.AnimationEagerListenerMixin | keyof upstream4.AnimationLocalListenersMixin>, Readonly<{ "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [] }> { readonly __AnimationController: unique symbol;
readonly [_flaxDartTypeValue]: AnimationController;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature0;};
readonly status: upstream9.AnimationStatus;
get value(): number;
readonly isDismissed: boolean;
readonly isCompleted: boolean;
readonly isAnimating: boolean;
readonly isForwardOrCompleted: boolean;
readonly lowerBound: number;
readonly upperBound: number;
readonly debugLabel: string | null;
readonly animationBehavior: upstream7.AnimationBehavior;
readonly view: upstream0.Animation<number>;
get duration(): upstream6.Duration | null;
get reverseDuration(): upstream6.Duration | null;
readonly velocity: number;
readonly lastElapsedDuration: upstream6.Duration | null;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream9.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream9.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream0.Animation<_FlaxDartOutput<U>>;
toString(): string;
toStringDetails(): string;
didRegisterListener(): void;
didUnregisterListener(): void;
dispose(): void;
clearListeners(): void;
notifyListeners(): void;
clearStatusListeners(): void;
notifyStatusListeners(status: upstream9.AnimationStatus): void;
resync(vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>): void;
reset(): void;
forward(options?: {from?: number | null | undefined}): upstream11.TickerFuture;
reverse(options?: {from?: number | null | undefined}): upstream11.TickerFuture;
toggle(options?: {from?: number | null | undefined}): upstream11.TickerFuture;
animateTo(target: number, options?: {curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined}): upstream11.TickerFuture;
animateBack(target: number, options?: {curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined}): upstream11.TickerFuture;
repeat(options?: {count?: number | null | undefined; max?: number | null | undefined; min?: number | null | undefined; period?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; reverse?: boolean | undefined}): upstream11.TickerFuture;
fling(options?: {animationBehavior?: upstream7.AnimationBehavior | null | undefined; springDescription?: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }> | null | undefined; velocity?: number | undefined}): upstream11.TickerFuture;
animateWith(simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>): upstream11.TickerFuture;
animateBackWith(simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>): upstream11.TickerFuture;
stop(options?: {canceled?: boolean | undefined}): void;
set duration(value: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null);
set reverseDuration(value: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null);
set value(value: number);
}
defineObject("flax.core/sdk_animation#type:AnimationController", ["status","value","isDismissed","isCompleted","isAnimating","isForwardOrCompleted","lowerBound","upperBound","debugLabel","animationBehavior","view","duration","reverseDuration","velocity","lastElapsedDuration"], ["duration","reverseDuration","value"], _flaxBindingMethods("flax.core/sdk_animation#type:AnimationController", "object", {"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2,"didRegisterListener":_flaxMemberParameters2,"didUnregisterListener":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"clearListeners":_flaxMemberParameters2,"notifyListeners":_flaxMemberParameters2,"clearStatusListeners":_flaxMemberParameters2,"notifyStatusListeners":_flaxMemberParameters7,"resync":_flaxMemberParameters8,"reset":_flaxMemberParameters2,"forward":_flaxMemberParameters9,"reverse":_flaxMemberParameters9,"toggle":_flaxMemberParameters9,"animateTo":_flaxMemberParameters10,"animateBack":_flaxMemberParameters10,"repeat":_flaxMemberParameters11,"fling":_flaxMemberParameters12,"animateWith":_flaxMemberParameters13,"animateBackWith":_flaxMemberParameters13,"stop":_flaxMemberParameters14}, {"drive":{"id":"drive","parameters":[{"name":"child","required":true,"positional":true}]}}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
export function _AnimationControllerFactory(options: { value?: number | null | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; reverseDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; debugLabel?: string | null | undefined; lowerBound?: number | undefined; upperBound?: number | undefined; animationBehavior?: upstream7.AnimationBehavior | undefined; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> }): AnimationController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:AnimationController", "", [{"name":"value"},{"name":"duration"},{"name":"reverseDuration"},{"name":"debugLabel"},{"name":"lowerBound"},{"name":"upperBound"},{"name":"animationBehavior"},{"name":"vsync","required":true}], [], options) as AnimationController;
}
export namespace _AnimationControllerFactory {
export function unbounded(options: { value?: number | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; reverseDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; debugLabel?: string | null | undefined; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>; animationBehavior?: upstream7.AnimationBehavior | undefined }): AnimationController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:AnimationController", "unbounded", [{"name":"value"},{"name":"duration"},{"name":"reverseDuration"},{"name":"debugLabel"},{"name":"vsync","required":true},{"name":"animationBehavior"}], [], options) as AnimationController;
}
}
const _AnimationControllerProxy = {type: "flax.core/sdk_animation#type:AnimationController", parameters: _flaxMemberParameters15, constructors: {"": _flaxMemberParameters15,"unbounded": _flaxMemberParameters16}, methods: {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2,"didRegisterListener":_flaxMemberParameters2,"didUnregisterListener":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"clearListeners":_flaxMemberParameters2,"notifyListeners":_flaxMemberParameters2,"clearStatusListeners":_flaxMemberParameters2,"notifyStatusListeners":_flaxMemberParameters7,"resync":_flaxMemberParameters8,"reset":_flaxMemberParameters2,"forward":_flaxMemberParameters9,"reverse":_flaxMemberParameters9,"toggle":_flaxMemberParameters9,"animateTo":_flaxMemberParameters10,"animateBack":_flaxMemberParameters10,"repeat":_flaxMemberParameters11,"fling":_flaxMemberParameters12,"animateWith":_flaxMemberParameters13,"animateBackWith":_flaxMemberParameters13,"stop":_flaxMemberParameters14}, getters: ["lowerBound","upperBound","debugLabel","animationBehavior","view","duration","reverseDuration","value","velocity","lastElapsedDuration","isAnimating","status","isDismissed","isCompleted","isForwardOrCompleted"], setters: ["duration","reverseDuration","value"], contextMembers: ["drive"], superMembers: ["get:lowerBound","get:upperBound","get:debugLabel","get:animationBehavior","get:view","get:duration","get:reverseDuration","get:value","get:velocity","get:lastElapsedDuration","get:isAnimating","get:status","get:isDismissed","get:isCompleted","get:isForwardOrCompleted","set:duration","set:reverseDuration","set:value","addListener","removeListener","addStatusListener","removeStatusListener","drive","toString","toStringDetails","didRegisterListener","didUnregisterListener","dispose","clearListeners","notifyListeners","clearStatusListeners","notifyStatusListeners","resync","reset","forward","reverse","toggle","animateTo","animateBack","repeat","fling","animateWith","animateBackWith","stop"]} as const;
export interface _AnimationControllerNative extends AnimationController {
readonly [_flaxDartTypeValue]: _AnimationControllerNative;
readonly [_flaxDartConstructors]?: {"": (options: {value?: number | null | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; reverseDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; debugLabel?: string | null | undefined; lowerBound?: number | undefined; upperBound?: number | undefined; animationBehavior?: upstream7.AnimationBehavior | undefined; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>}) => void;"unbounded": (options: {value?: number | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; reverseDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; debugLabel?: string | null | undefined; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>; animationBehavior?: upstream7.AnimationBehavior | undefined}) => void;};
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature1;};
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream9.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream9.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream0.Animation<_FlaxDartOutput<U>>;
toString(): string;
toStringDetails(): string;
didRegisterListener(): void;
didUnregisterListener(): void;
dispose(): void;
clearListeners(): void;
notifyListeners(): void;
clearStatusListeners(): void;
notifyStatusListeners(status: upstream9.AnimationStatus): void;
resync(vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>): void;
reset(): void;
forward(options?: {from?: number | null | undefined}): upstream11.TickerFuture;
reverse(options?: {from?: number | null | undefined}): upstream11.TickerFuture;
toggle(options?: {from?: number | null | undefined}): upstream11.TickerFuture;
animateTo(target: number, options?: {duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined}): upstream11.TickerFuture;
animateBack(target: number, options?: {duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined}): upstream11.TickerFuture;
repeat(options?: {min?: number | null | undefined; max?: number | null | undefined; reverse?: boolean | undefined; period?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; count?: number | null | undefined}): upstream11.TickerFuture;
fling(options?: {velocity?: number | undefined; springDescription?: Readonly<{ "__flaxBound:package:flutter/src/physics/spring_simulation.dart::SpringDescription": readonly [] }> | null | undefined; animationBehavior?: upstream7.AnimationBehavior | null | undefined}): upstream11.TickerFuture;
animateWith(simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>): upstream11.TickerFuture;
animateBackWith(simulation: Readonly<{ "__flaxBound:package:flutter/src/physics/simulation.dart::Simulation": readonly [] }>): upstream11.TickerFuture;
stop(options?: {canceled?: boolean | undefined}): void;
get lowerBound(): number;
get upperBound(): number;
get debugLabel(): string | null;
get animationBehavior(): upstream7.AnimationBehavior;
get view(): upstream0.Animation<number>;
get duration(): upstream6.Duration | null;
get reverseDuration(): upstream6.Duration | null;
get value(): number;
get velocity(): number;
get lastElapsedDuration(): upstream6.Duration | null;
get isAnimating(): boolean;
get status(): upstream9.AnimationStatus;
get isDismissed(): boolean;
get isCompleted(): boolean;
get isForwardOrCompleted(): boolean;
set duration(value: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null);
set reverseDuration(value: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null);
set value(value: number);
}
export abstract class _AnimationControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnimationController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AnimationController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:AnimationController", readonly [], false];
constructor(options: {value?: number | null | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; reverseDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; debugLabel?: string | null | undefined; lowerBound?: number | undefined; upperBound?: number | undefined; animationBehavior?: upstream7.AnimationBehavior | undefined; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>}); constructor(call: _FlaxProxySuper<_AnimationControllerNative>); constructor(...args: unknown[]) { super(_AnimationControllerProxy, args); }
}
_flaxDefineProxyBase(_AnimationControllerNative.prototype, _AnimationControllerProxy);
export namespace _AnimationControllerFactory { export function implement(args: [options: {value?: number | null | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; reverseDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; debugLabel?: string | null | undefined; lowerBound?: number | undefined; upperBound?: number | undefined; animationBehavior?: upstream7.AnimationBehavior | undefined; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>}], implementation: {}): AnimationController {
return constructProxy(_AnimationControllerProxy, args, implementation) as AnimationController; } }
const _AnimationControllerBinding = _flaxProxyFactory(_AnimationControllerFactory, _AnimationControllerNative) as unknown as typeof _AnimationControllerFactory & (new(options: {value?: number | null | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; reverseDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration] }> | null | undefined; debugLabel?: string | null | undefined; lowerBound?: number | undefined; upperBound?: number | undefined; animationBehavior?: upstream7.AnimationBehavior | undefined; vsync: Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>}) => _AnimationControllerNative) & (new(call: _FlaxProxySuper<_AnimationControllerNative>) => _AnimationControllerNative);
export const AnimationController: typeof _AnimationControllerBinding & _FlaxInstanceType<AnimationController> & _FlaxDartType<AnimationController, readonly ["class", "flax.core/sdk_animation#type:AnimationController", readonly [], false]> = _flaxBindInstanceType<AnimationController, typeof _AnimationControllerBinding>(_AnimationControllerBinding, "flax.core/sdk_animation#type:AnimationController", ["flax.core/sdk_animation#type:Animation","flax.core/flutter#type:Listenable","dart:core::Object","flax.core/flutter#type:ValueListenable","flax.core/sdk_animation#type:AnimationEagerListenerMixin","flax.core/sdk_animation#type:AnimationLocalListenersMixin","flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin"]) as typeof _AnimationControllerBinding & _FlaxInstanceType<AnimationController> & _FlaxDartType<AnimationController, readonly ["class", "flax.core/sdk_animation#type:AnimationController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "lowerBound" | "upperBound" | "debugLabel" | "animationBehavior" | "view" | "duration" | "reverseDuration" | "velocity" | "lastElapsedDuration" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toString" | "toStringDetails" | "didRegisterListener" | "didUnregisterListener" | "dispose" | "clearListeners" | "notifyListeners" | "clearStatusListeners" | "notifyStatusListeners" | "resync" | "reset" | "forward" | "reverse" | "toggle" | "animateTo" | "animateBack" | "repeat" | "fling" | "animateWith" | "animateBackWith" | "stop" | "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin" | "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
