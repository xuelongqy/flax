// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
const _flaxMemberParameters0 = [{"name":"tween","required":true},{"name":"weight","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TweenSequenceItem<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [T] }> { readonly __TweenSequenceItem: unique symbol;
readonly [_flaxDartTypeValue]: TweenSequenceItem<T>;

}
defineObject("flax.core/sdk_animation#type:TweenSequenceItem", ["tween","weight"], [], _flaxBindingMethods("flax.core/sdk_animation#type:TweenSequenceItem", "object", {}, {}), []);
const _TweenSequenceItemProxy = {type: "flax.core/sdk_animation#type:TweenSequenceItem", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["tween","weight"], setters: [], contextMembers: [], superMembers: ["get:tween","get:weight"]} as const;
export interface TweenSequenceItem<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: TweenSequenceItem<T>;

get tween(): upstream0.Animatable<T>;
get weight(): number;
}
export abstract class TweenSequenceItem<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TweenSequenceItem<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TweenSequenceItem<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:TweenSequenceItem", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number}) { super(_TweenSequenceItemProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TweenSequenceItem.prototype, _TweenSequenceItemProxy);
export namespace TweenSequenceItem { export function implement<T extends unknown | null = unknown | null>(args: [options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number}], implementation: {}): TweenSequenceItem<T> {
return constructProxy(_TweenSequenceItemProxy, args, implementation) as TweenSequenceItem<T>; } }
_flaxBindInstanceType<TweenSequenceItem<unknown | null>, typeof TweenSequenceItem>(TweenSequenceItem, "flax.core/sdk_animation#type:TweenSequenceItem", ["dart:core::Object"]);
_flaxDefineDartTypes(TweenSequenceItem, "flax.core/sdk_animation#type:TweenSequenceItem", {...{"category":"object","constructors":{}}, proxy: _TweenSequenceItemProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>;weight: number}) => TweenSequenceItem<_Selected0>) & {readonly prototype: TweenSequenceItem<_Selected0>;implement(args: readonly [options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number}], implementation: Partial<TweenSequenceItem<_Selected0>>): TweenSequenceItem<_Selected0>;} & _FlaxInstanceType<TweenSequenceItem<_Selected0>> & _FlaxDartType<TweenSequenceItem<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>;weight: number}) => TweenSequenceItem<_Selected0>) & {readonly prototype: TweenSequenceItem<_Selected0>;implement(args: readonly [options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number}], implementation: Partial<TweenSequenceItem<_Selected0>>): TweenSequenceItem<_Selected0>;} & _FlaxInstanceType<TweenSequenceItem<_Selected0>> & _FlaxDartType<TweenSequenceItem<_Selected0>> : never : never; }
