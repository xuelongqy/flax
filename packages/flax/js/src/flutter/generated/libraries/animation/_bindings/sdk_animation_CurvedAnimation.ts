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
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationWithParentMixin';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationWithParentMixin';
import type * as upstream4 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream5 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters2, _flaxMemberParameters34 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CurvedAnimation extends Omit<upstream0.Animation<number>, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.Animation<number>>, Omit<upstream2.ValueListenable<number>, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable>, Omit<upstream3.AnimationWithParentMixin<number>, _flaxOwnMembers0 | keyof upstream0.Animation<number> | keyof upstream1.Listenable | keyof upstream2.ValueListenable<number>>, Readonly<{ "__flaxBound:package:flutter/src/animation/animations.dart::CurvedAnimation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/animations.dart::AnimationWithParentMixin": readonly [number] }> { readonly __CurvedAnimation: unique symbol;
readonly [_flaxDartTypeValue]: CurvedAnimation;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature0;};
readonly status: upstream5.AnimationStatus;
readonly value: number;
readonly isDismissed: boolean;
readonly isCompleted: boolean;
readonly isAnimating: boolean;
readonly isForwardOrCompleted: boolean;
readonly parent: upstream0.Animation<number>;
get curve(): upstream4.Curve;
get reverseCurve(): upstream4.Curve | null;
get isDisposed(): boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream5.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream5.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream0.Animation<_FlaxDartOutput<U>>;
toString(): string;
toStringDetails(): string;
dispose(): void;
set curve(value: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>);
set reverseCurve(value: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | null);
set isDisposed(value: boolean);
}
defineObject("flax.core/sdk_animation#type:CurvedAnimation", ["status","value","isDismissed","isCompleted","isAnimating","isForwardOrCompleted","parent","curve","reverseCurve","isDisposed"], ["curve","reverseCurve","isDisposed"], _flaxBindingMethods("flax.core/sdk_animation#type:CurvedAnimation", "object", {"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, {"drive":{"id":"drive","parameters":[{"name":"child","required":true,"positional":true}]}}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
export function _CurvedAnimationFactory(options: { parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>; reverseCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | null | undefined }): CurvedAnimation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:CurvedAnimation", "", [{"name":"parent","required":true},{"name":"curve","required":true},{"name":"reverseCurve"}], [], options) as CurvedAnimation;
}
const _CurvedAnimationProxy = {type: "flax.core/sdk_animation#type:CurvedAnimation", parameters: _flaxMemberParameters34, constructors: {"": _flaxMemberParameters34}, methods: {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"addStatusListener":_flaxMemberParameters0,"removeStatusListener":_flaxMemberParameters0,"drive":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toStringDetails":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, getters: ["parent","curve","reverseCurve","isDisposed","value","status","isDismissed","isCompleted","isAnimating","isForwardOrCompleted"], setters: ["curve","reverseCurve","isDisposed"], contextMembers: ["drive"], superMembers: ["get:parent","get:curve","get:reverseCurve","get:isDisposed","get:value","get:status","get:isDismissed","get:isCompleted","get:isAnimating","get:isForwardOrCompleted","set:curve","set:reverseCurve","set:isDisposed","addListener","removeListener","addStatusListener","removeStatusListener","drive","toString","toStringDetails","dispose"]} as const;
export interface _CurvedAnimationNative extends CurvedAnimation {
readonly [_flaxDartTypeValue]: _CurvedAnimationNative;
readonly [_flaxDartMethodCases]?: {drive: _FlaxSignature1;};
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
addStatusListener(listener: ((status: upstream5.AnimationStatus) => void)): void;
removeStatusListener(listener: ((status: upstream5.AnimationStatus) => void)): void;
drive<U extends unknown | null = unknown | null>(child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<U>] }>): upstream0.Animation<_FlaxDartOutput<U>>;
toString(): string;
toStringDetails(): string;
dispose(): void;
get parent(): upstream0.Animation<number>;
get curve(): upstream4.Curve;
get reverseCurve(): upstream4.Curve | null;
get isDisposed(): boolean;
get value(): number;
get status(): upstream5.AnimationStatus;
get isDismissed(): boolean;
get isCompleted(): boolean;
get isAnimating(): boolean;
get isForwardOrCompleted(): boolean;
set curve(value: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>);
set reverseCurve(value: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | null);
set isDisposed(value: boolean);
}
export abstract class _CurvedAnimationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CurvedAnimation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CurvedAnimation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:CurvedAnimation", readonly [], false];
constructor(options: {parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>; reverseCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | null | undefined}) { super(_CurvedAnimationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CurvedAnimationNative.prototype, _CurvedAnimationProxy);
export namespace _CurvedAnimationFactory { export function implement(args: [options: {parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>; reverseCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | null | undefined}], implementation: {}): CurvedAnimation {
return constructProxy(_CurvedAnimationProxy, args, implementation) as CurvedAnimation; } }
const _CurvedAnimationBinding = _flaxProxyFactory(_CurvedAnimationFactory, _CurvedAnimationNative) as unknown as typeof _CurvedAnimationFactory & (new(options: {parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>; curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }>; reverseCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | null | undefined}) => _CurvedAnimationNative);
export const CurvedAnimation: typeof _CurvedAnimationBinding & _FlaxInstanceType<CurvedAnimation> & _FlaxDartType<CurvedAnimation, readonly ["class", "flax.core/sdk_animation#type:CurvedAnimation", readonly [], false]> = _flaxBindInstanceType<CurvedAnimation, typeof _CurvedAnimationBinding>(_CurvedAnimationBinding, "flax.core/sdk_animation#type:CurvedAnimation", ["flax.core/sdk_animation#type:Animation","flax.core/flutter#type:Listenable","dart:core::Object","flax.core/flutter#type:ValueListenable","flax.core/sdk_animation#type:AnimationWithParentMixin"]) as typeof _CurvedAnimationBinding & _FlaxInstanceType<CurvedAnimation> & _FlaxDartType<CurvedAnimation, readonly ["class", "flax.core/sdk_animation#type:CurvedAnimation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "status" | "value" | "isDismissed" | "isCompleted" | "isAnimating" | "isForwardOrCompleted" | "parent" | "curve" | "reverseCurve" | "isDisposed" | "addListener" | "removeListener" | "addStatusListener" | "removeStatusListener" | "drive" | "toString" | "toStringDetails" | "dispose" | "__flaxBound:package:flutter/src/animation/animations.dart::CurvedAnimation" | "__flaxBound:package:flutter/src/animation/animation.dart::Animation" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/animation/animations.dart::AnimationWithParentMixin";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (child: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>) => upstream0.Animation<_Selected0> : never : never; }
