// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters138, _flaxMemberParameters139, _flaxMemberParameters140, _flaxMemberParameters2 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FloatingActionButtonAnimator extends Readonly<{ "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FloatingActionButtonAnimator": readonly [] }> { readonly __FloatingActionButtonAnimator: unique symbol;
readonly [_flaxDartTypeValue]: FloatingActionButtonAnimator;

}
defineObject("flax.core/sdk_material#type:FloatingActionButtonAnimator", [], [], _flaxBindingMethods("flax.core/sdk_material#type:FloatingActionButtonAnimator", "object", {"getOffset":_flaxMemberParameters138,"getScaleAnimation":_flaxMemberParameters139,"getRotationAnimation":_flaxMemberParameters139,"getAnimationRestart":_flaxMemberParameters140,"toString":_flaxMemberParameters2}, {}), []);
const _FloatingActionButtonAnimatorProxy = {type: "flax.core/sdk_material#type:FloatingActionButtonAnimator", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"getOffset":_flaxMemberParameters138,"getScaleAnimation":_flaxMemberParameters139,"getRotationAnimation":_flaxMemberParameters139,"getAnimationRestart":_flaxMemberParameters140,"toString":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["getAnimationRestart","toString"]} as const;
export interface FloatingActionButtonAnimator {
readonly [_flaxDartTypeValue]: FloatingActionButtonAnimator;

getAnimationRestart(previousValue: number): number;
toString(): string;
}
export abstract class FloatingActionButtonAnimator extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FloatingActionButtonAnimator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FloatingActionButtonAnimator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:FloatingActionButtonAnimator", readonly [], false];
constructor() { super(_FloatingActionButtonAnimatorProxy, Array.from(arguments)); }
abstract getOffset(options: {begin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; end: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; progress: number}): upstream0.Offset;
abstract getScaleAnimation(options: {parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>}): upstream1.Animation<number>;
abstract getRotationAnimation(options: {parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>}): upstream1.Animation<number>;
}
_flaxDefineProxyBase(FloatingActionButtonAnimator.prototype, _FloatingActionButtonAnimatorProxy);
export namespace FloatingActionButtonAnimator { export function implement(args: [], implementation: {getOffset: ((options: { begin: upstream0.Offset; end: upstream0.Offset; progress: number }) => Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>); getScaleAnimation: ((options: { parent: upstream1.Animation<number> }) => Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>); getRotationAnimation: ((options: { parent: upstream1.Animation<number> }) => Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>)}): FloatingActionButtonAnimator {
return constructProxy(_FloatingActionButtonAnimatorProxy, args, implementation) as FloatingActionButtonAnimator; } }
export namespace FloatingActionButtonAnimator { export declare const scaling: FloatingActionButtonAnimator; }
export namespace FloatingActionButtonAnimator { export declare const noAnimation: FloatingActionButtonAnimator; }
_flaxDefineStaticGetters(FloatingActionButtonAnimator, "flax.core/sdk_material#read:FloatingActionButtonAnimator.", ["scaling","noAnimation"]);
_flaxBindInstanceType<FloatingActionButtonAnimator, typeof FloatingActionButtonAnimator>(FloatingActionButtonAnimator, "flax.core/sdk_material#type:FloatingActionButtonAnimator", ["dart:core::Object"]);
