// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { _flaxMemberParameters4, _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters3 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ConstantTween<T extends unknown | null = unknown | null> extends Omit<upstream0.Tween<T>, _flaxOwnMembers0>, Omit<upstream1.Animatable<T>, _flaxOwnMembers0 | keyof upstream0.Tween<T>>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::ConstantTween": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T] }> { readonly __ConstantTween: unique symbol;
readonly [_flaxDartTypeValue]: ConstantTween<T>;

get begin(): T | null;
get end(): T | null;
lerp(t: number): T;
transform(t: number): T;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): T;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Animation<T>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream1.Animatable<T>;
set begin(value: (T | DartInput<T>) | null);
set end(value: (T | DartInput<T>) | null);
}
defineObject("flax.core/sdk_animation#type:ConstantTween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_animation#type:ConstantTween", "object", {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, {}), []);
export function _ConstantTweenFactory<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>)): ConstantTween<T>;
export function _ConstantTweenFactory(value: unknown | null): ConstantTween<unknown | null>;
export function _ConstantTweenFactory(value: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:ConstantTween", "", [{"name":"value","required":true,"positional":true}], [value], {}) as ConstantTween<unknown | null>;
}
const _ConstantTweenProxy = {type: "flax.core/sdk_animation#type:ConstantTween", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _ConstantTweenNative<T extends unknown | null = unknown | null> extends ConstantTween<T> {
readonly [_flaxDartTypeValue]: _ConstantTweenNative<T>;

lerp(t: number): T;
transform(t: number): T;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): T;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Animation<T>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream1.Animatable<T>;
get begin(): T | null;
get end(): T | null;
set begin(value: (T | DartInput<T>) | null);
set end(value: (T | DartInput<T>) | null);
}
export abstract class _ConstantTweenNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ConstantTween<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ConstantTween<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ConstantTween", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(value: unknown | null) { super(_ConstantTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ConstantTweenNative.prototype, _ConstantTweenProxy);
export namespace _ConstantTweenFactory { export function implement<T extends unknown | null = unknown | null>(args: [value: unknown | null], implementation: {}): ConstantTween<T> {
return constructProxy(_ConstantTweenProxy, args, implementation) as ConstantTween<T>; } }
const _ConstantTweenBinding = _flaxProxyFactory(_ConstantTweenFactory, _ConstantTweenNative) as unknown as typeof _ConstantTweenFactory & (new<T extends unknown | null = unknown | null>(value: unknown | null) => _ConstantTweenNative<T>);
export const ConstantTween: typeof _ConstantTweenBinding & _FlaxInstanceType<ConstantTween<unknown | null>> & _FlaxDartType<ConstantTween<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:ConstantTween", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ConstantTween<unknown | null>, typeof _ConstantTweenBinding>(_ConstantTweenBinding, "flax.core/sdk_animation#type:ConstantTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _ConstantTweenBinding & _FlaxInstanceType<ConstantTween<unknown | null>> & _FlaxDartType<ConstantTween<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:ConstantTween", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ConstantTween, "flax.core/sdk_animation#type:ConstantTween", {...{"category":"object","constructors":{"":[{"name":"value","required":true,"positional":true}]}}, proxy: _ConstantTweenProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::ConstantTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (value: unknown | null) => _ConstantTweenNative<_Selected0>) & {(value: (_Selected0 | DartInput<_Selected0>)): _ConstantTweenNative<_Selected0>;readonly prototype: _ConstantTweenNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_ConstantTweenNative<_Selected0>>): _ConstantTweenNative<_Selected0>;} & _FlaxInstanceType<_ConstantTweenNative<_Selected0>> & _FlaxDartType<_ConstantTweenNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (value: unknown | null) => _ConstantTweenNative<_Selected0>) & {(value: (_Selected0 | DartInput<_Selected0>)): _ConstantTweenNative<_Selected0>;readonly prototype: _ConstantTweenNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_ConstantTweenNative<_Selected0>>): _ConstantTweenNative<_Selected0>;} & _FlaxInstanceType<_ConstantTweenNative<_Selected0>> & _FlaxDartType<_ConstantTweenNative<_Selected0>> : never : never; }
