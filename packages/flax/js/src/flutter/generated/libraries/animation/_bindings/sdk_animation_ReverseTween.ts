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
import { _flaxMemberParameters4, _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters6 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ReverseTween<T extends unknown | null = unknown | null> extends Omit<upstream0.Tween<T>, _flaxOwnMembers0>, Omit<upstream1.Animatable<T>, _flaxOwnMembers0 | keyof upstream0.Tween<T>>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::ReverseTween": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T] }> { readonly __ReverseTween: unique symbol;
readonly [_flaxDartTypeValue]: ReverseTween<T>;

get begin(): T | null;
get end(): T | null;
readonly parent: upstream0.Tween<T>;
lerp(t: number): T;
transform(t: number): T;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): T;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Animation<T>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream1.Animatable<T>;
set begin(value: (T | DartInput<T>) | null);
set end(value: (T | DartInput<T>) | null);
}
defineObject("flax.core/sdk_animation#type:ReverseTween", ["begin","end","parent"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_animation#type:ReverseTween", "object", {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, {}), []);
export function _ReverseTweenFactory<T extends unknown | null = unknown | null>(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [_FlaxDartOutput<T>] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<T>] }>): ReverseTween<T>;
export function _ReverseTweenFactory(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>): ReverseTween<unknown | null>;
export function _ReverseTweenFactory(parent: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:ReverseTween", "", _flaxMemberParameters6, [parent], {}) as ReverseTween<unknown | null>;
}
const _ReverseTweenProxy = {type: "flax.core/sdk_animation#type:ReverseTween", parameters: _flaxMemberParameters6, constructors: {"": _flaxMemberParameters6}, methods: {"lerp":_flaxMemberParameters4,"transform":_flaxMemberParameters4,"toString":_flaxMemberParameters2,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6}, getters: ["parent","begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:parent","get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface _ReverseTweenNative<T extends unknown | null = unknown | null> extends ReverseTween<T> {
readonly [_flaxDartTypeValue]: _ReverseTweenNative<T>;

lerp(t: number): T;
transform(t: number): T;
toString(): string;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): T;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream2.Animation<T>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream1.Animatable<T>;
get parent(): upstream0.Tween<T>;
get begin(): T | null;
get end(): T | null;
set begin(value: (T | DartInput<T>) | null);
set end(value: (T | DartInput<T>) | null);
}
export abstract class _ReverseTweenNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ReverseTween<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ReverseTween<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ReverseTween", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>) { super(_ReverseTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ReverseTweenNative.prototype, _ReverseTweenProxy);
export namespace _ReverseTweenFactory { export function implement<T extends unknown | null = unknown | null>(args: [parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>], implementation: {}): ReverseTween<T> {
return constructProxy(_ReverseTweenProxy, args, implementation) as ReverseTween<T>; } }
const _ReverseTweenBinding = _flaxProxyFactory(_ReverseTweenFactory, _ReverseTweenNative) as unknown as typeof _ReverseTweenFactory & (new<T extends unknown | null = unknown | null>(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>) => _ReverseTweenNative<T>);
export const ReverseTween: typeof _ReverseTweenBinding & _FlaxInstanceType<ReverseTween<unknown | null>> & _FlaxDartType<ReverseTween<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:ReverseTween", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ReverseTween<unknown | null>, typeof _ReverseTweenBinding>(_ReverseTweenBinding, "flax.core/sdk_animation#type:ReverseTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _ReverseTweenBinding & _FlaxInstanceType<ReverseTween<unknown | null>> & _FlaxDartType<ReverseTween<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:ReverseTween", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ReverseTween, "flax.core/sdk_animation#type:ReverseTween", {...{"category":"object","constructors":{"":[{"name":"parent","required":true,"positional":true}]}}, proxy: _ReverseTweenProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "parent" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::ReverseTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>) => _ReverseTweenNative<_Selected0>) & {(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [_Selected0] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>): _ReverseTweenNative<_Selected0>;readonly prototype: _ReverseTweenNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>], implementation: Partial<_ReverseTweenNative<_Selected0>>): _ReverseTweenNative<_Selected0>;} & _FlaxInstanceType<_ReverseTweenNative<_Selected0>> & _FlaxDartType<_ReverseTweenNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>) => _ReverseTweenNative<_Selected0>) & {(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [_Selected0] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>): _ReverseTweenNative<_Selected0>;readonly prototype: _ReverseTweenNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>], implementation: Partial<_ReverseTweenNative<_Selected0>>): _ReverseTweenNative<_Selected0>;} & _FlaxInstanceType<_ReverseTweenNative<_Selected0>> & _FlaxDartType<_ReverseTweenNative<_Selected0>> : never : never; }
