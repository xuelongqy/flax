// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import '@flax/flutter/animation/_bindings/sdk_animation_Tween';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"animation","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"parent","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ReverseTween<T extends unknown | null = unknown | null> extends Omit<upstream0.Tween<T>, _flaxOwnMembers0>, Omit<upstream1.Animatable<T>, _flaxOwnMembers0 | keyof upstream0.Tween<T>>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::ReverseTween": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T] }> { readonly __ReverseTween: unique symbol;
readonly [_flaxDartTypeValue]: ReverseTween<T>;

}
defineObject("flax.core/sdk_animation#type:ReverseTween", ["begin","end","parent"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_animation#type:ReverseTween", "object", {"lerp":_flaxMemberParameters0,"transform":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"evaluate":_flaxMemberParameters2,"animate":_flaxMemberParameters3,"chain":_flaxMemberParameters3}, {}), []);
const _ReverseTweenProxy = {type: "flax.core/sdk_animation#type:ReverseTween", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"lerp":_flaxMemberParameters0,"transform":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"evaluate":_flaxMemberParameters2,"animate":_flaxMemberParameters3,"chain":_flaxMemberParameters3}, getters: ["parent","begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:parent","get:begin","get:end","set:begin","set:end","lerp","transform","toString","evaluate","animate","chain"]} as const;
export interface ReverseTween<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: ReverseTween<T>;

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
export abstract class ReverseTween<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ReverseTween<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ReverseTween<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ReverseTween", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>) { super(_ReverseTweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ReverseTween.prototype, _ReverseTweenProxy);
export namespace ReverseTween { export function implement<T extends unknown | null = unknown | null>(args: [parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>], implementation: {}): ReverseTween<T> {
return constructProxy(_ReverseTweenProxy, args, implementation) as ReverseTween<T>; } }
_flaxBindInstanceType<ReverseTween<unknown | null>, typeof ReverseTween>(ReverseTween, "flax.core/sdk_animation#type:ReverseTween", ["flax.core/sdk_animation#type:Tween","flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
_flaxDefineDartTypes(ReverseTween, "flax.core/sdk_animation#type:ReverseTween", {...{"category":"object","constructors":{}}, proxy: _ReverseTweenProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "parent" | "lerp" | "transform" | "toString" | "evaluate" | "animate" | "chain" | "__flaxBound:package:flutter/src/animation/tween.dart::ReverseTween" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>) => ReverseTween<_Selected0>) & {readonly prototype: ReverseTween<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>], implementation: Partial<ReverseTween<_Selected0>>): ReverseTween<_Selected0>;} & _FlaxInstanceType<ReverseTween<_Selected0>> & _FlaxDartType<ReverseTween<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>) => ReverseTween<_Selected0>) & {readonly prototype: ReverseTween<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [unknown | null] }>], implementation: Partial<ReverseTween<_Selected0>>): ReverseTween<_Selected0>;} & _FlaxInstanceType<ReverseTween<_Selected0>> & _FlaxDartType<ReverseTween<_Selected0>> : never : never; }
