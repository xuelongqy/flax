// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import { _flaxMemberParameters45 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TweenSequenceItem<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/animation/tween_sequence.dart::TweenSequenceItem": readonly [T] }> { readonly __TweenSequenceItem: unique symbol;
readonly [_flaxDartTypeValue]: TweenSequenceItem<T>;

readonly tween: upstream0.Animatable<T>;
readonly weight: number;
}
defineObject("flax.core/sdk_animation#type:TweenSequenceItem", ["tween","weight"], [], _flaxBindingMethods("flax.core/sdk_animation#type:TweenSequenceItem", "object", {}, {}), []);
export function _TweenSequenceItemFactory<T extends unknown | null = unknown | null>(options: { tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<T>] }>; weight: number }): TweenSequenceItem<T>;
export function _TweenSequenceItemFactory(options: { tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number }): TweenSequenceItem<unknown | null>;
export function _TweenSequenceItemFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:TweenSequenceItem", "", [{"name":"tween","required":true},{"name":"weight","required":true}], [], options) as TweenSequenceItem<unknown | null>;
}
const _TweenSequenceItemProxy = {type: "flax.core/sdk_animation#type:TweenSequenceItem", parameters: _flaxMemberParameters45, constructors: {"": _flaxMemberParameters45}, methods: {}, getters: ["tween","weight"], setters: [], contextMembers: [], superMembers: ["get:tween","get:weight"]} as const;
export interface _TweenSequenceItemNative<T extends unknown | null = unknown | null> extends TweenSequenceItem<T> {
readonly [_flaxDartTypeValue]: _TweenSequenceItemNative<T>;

get tween(): upstream0.Animatable<T>;
get weight(): number;
}
export abstract class _TweenSequenceItemNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TweenSequenceItem<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TweenSequenceItem<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:TweenSequenceItem", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number}) { super(_TweenSequenceItemProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TweenSequenceItemNative.prototype, _TweenSequenceItemProxy);
export namespace _TweenSequenceItemFactory { export function implement<T extends unknown | null = unknown | null>(args: [options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number}], implementation: {}): TweenSequenceItem<T> {
return constructProxy(_TweenSequenceItemProxy, args, implementation) as TweenSequenceItem<T>; } }
const _TweenSequenceItemBinding = _flaxProxyFactory(_TweenSequenceItemFactory, _TweenSequenceItemNative) as unknown as typeof _TweenSequenceItemFactory & (new<T extends unknown | null = unknown | null>(options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number}) => _TweenSequenceItemNative<T>);
export const TweenSequenceItem: typeof _TweenSequenceItemBinding & _FlaxInstanceType<TweenSequenceItem<unknown | null>> & _FlaxDartType<TweenSequenceItem<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:TweenSequenceItem", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<TweenSequenceItem<unknown | null>, typeof _TweenSequenceItemBinding>(_TweenSequenceItemBinding, "flax.core/sdk_animation#type:TweenSequenceItem", ["dart:core::Object"]) as typeof _TweenSequenceItemBinding & _FlaxInstanceType<TweenSequenceItem<unknown | null>> & _FlaxDartType<TweenSequenceItem<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:TweenSequenceItem", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(TweenSequenceItem, "flax.core/sdk_animation#type:TweenSequenceItem", {...{"category":"object","constructors":{"":[{"name":"tween","required":true,"positional":false},{"name":"weight","required":true,"positional":false}]}}, proxy: _TweenSequenceItemProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>;weight: number}) => _TweenSequenceItemNative<_Selected0>) & {(options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>;weight: number}): _TweenSequenceItemNative<_Selected0>;readonly prototype: _TweenSequenceItemNative<_Selected0>;implement(args: readonly [options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number}], implementation: Partial<_TweenSequenceItemNative<_Selected0>>): _TweenSequenceItemNative<_Selected0>;} & _FlaxInstanceType<_TweenSequenceItemNative<_Selected0>> & _FlaxDartType<_TweenSequenceItemNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>;weight: number}) => _TweenSequenceItemNative<_Selected0>) & {(options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>;weight: number}): _TweenSequenceItemNative<_Selected0>;readonly prototype: _TweenSequenceItemNative<_Selected0>;implement(args: readonly [options: {tween: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>; weight: number}], implementation: Partial<_TweenSequenceItemNative<_Selected0>>): _TweenSequenceItemNative<_Selected0>;} & _FlaxInstanceType<_TweenSequenceItemNative<_Selected0>> & _FlaxDartType<_TweenSequenceItemNative<_Selected0>> : never : never; }
