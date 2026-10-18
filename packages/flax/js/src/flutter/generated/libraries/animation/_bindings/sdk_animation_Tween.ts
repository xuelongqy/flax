// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"animation","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"parent","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Tween<T extends unknown | null = unknown | null> extends Omit<upstream0.Animatable<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T] }> { readonly __Tween: unique symbol;
readonly [_flaxDartTypeValue]: Tween<T>;

}
defineObject("flax.core/sdk_animation#type:Tween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_animation#type:Tween", "object", {"transform":_flaxMemberParameters0,"evaluate":_flaxMemberParameters1,"animate":_flaxMemberParameters2,"chain":_flaxMemberParameters2,"lerp":_flaxMemberParameters0,"toString":_flaxMemberParameters3}, {}), []);
const _TweenProxy = {type: "flax.core/sdk_animation#type:Tween", parameters: [{"name":"begin","required":false,"positional":false},{"name":"end","required":false,"positional":false}], constructors: {"":[{"name":"begin","required":false,"positional":false},{"name":"end","required":false,"positional":false}]}, methods: {"transform":_flaxMemberParameters0,"evaluate":_flaxMemberParameters1,"animate":_flaxMemberParameters2,"chain":_flaxMemberParameters2,"lerp":_flaxMemberParameters0,"toString":_flaxMemberParameters3}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","transform","evaluate","animate","chain","lerp","toString"]} as const;
export interface Tween<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: Tween<T>;

transform(t: number): T;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): T;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream4.Animation<T>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream0.Animatable<T>;
lerp(t: number): T;
toString(): string;
get begin(): T | null;
get end(): T | null;
set begin(value: (T | DartInput<T>) | null);
set end(value: (T | DartInput<T>) | null);
}
export abstract class Tween<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Tween<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Tween<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Tween", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options?: {begin?: unknown | null | undefined; end?: unknown | null | undefined}) { super(_TweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Tween.prototype, _TweenProxy);
export namespace Tween { export function implement<T extends unknown | null = unknown | null>(args: [options?: {begin?: unknown | null | undefined; end?: unknown | null | undefined}], implementation: {}): Tween<T> {
return constructProxy(_TweenProxy, args, implementation) as Tween<T>; } }
_flaxBindInstanceType<Tween<unknown | null>, typeof Tween>(Tween, "flax.core/sdk_animation#type:Tween", ["flax.core/sdk_animation#type:Animatable","dart:core::Object"]);
_flaxDefineDartTypes(Tween, "flax.core/sdk_animation#type:Tween", {...{"category":"object","constructors":{}}, proxy: _TweenProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "transform" | "evaluate" | "animate" | "chain" | "lerp" | "toString" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options?: {begin?: unknown | null | undefined;end?: unknown | null | undefined}) => Tween<_Selected0>) & {readonly prototype: Tween<_Selected0>;implement(args: readonly [options?: {begin?: unknown | null | undefined; end?: unknown | null | undefined}], implementation: Partial<Tween<_Selected0>>): Tween<_Selected0>;} & _FlaxInstanceType<Tween<_Selected0>> & _FlaxDartType<Tween<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options?: {begin?: unknown | null | undefined;end?: unknown | null | undefined}) => Tween<_Selected0>) & {readonly prototype: Tween<_Selected0>;implement(args: readonly [options?: {begin?: unknown | null | undefined; end?: unknown | null | undefined}], implementation: Partial<Tween<_Selected0>>): Tween<_Selected0>;} & _FlaxInstanceType<Tween<_Selected0>> & _FlaxDartType<Tween<_Selected0>> : never : never; }
