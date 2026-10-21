// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
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
import { _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters2, _flaxMemberParameters30 } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Tween<T extends unknown | null = unknown | null> extends Omit<upstream0.Animatable<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Tween": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T] }> { readonly __Tween: unique symbol;
readonly [_flaxDartTypeValue]: Tween<T>;

get begin(): T | null;
get end(): T | null;
transform(t: number): T;
evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): T;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream4.Animation<T>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): upstream0.Animatable<T>;
lerp(t: number): T;
toString(): string;
set begin(value: (T | DartInput<T>) | null);
set end(value: (T | DartInput<T>) | null);
}
defineObject("flax.core/sdk_animation#type:Tween", ["begin","end"], ["begin","end"], _flaxBindingMethods("flax.core/sdk_animation#type:Tween", "object", {"transform":_flaxMemberParameters4,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6,"lerp":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, {}), []);
export function _TweenFactory<T extends unknown | null = unknown | null>(options?: { begin?: (T | _FlaxDartOutput<T>) | null | undefined; end?: (T | _FlaxDartOutput<T>) | null | undefined }): Tween<T>;
export function _TweenFactory(options?: { begin?: unknown | null | undefined; end?: unknown | null | undefined }): Tween<unknown | null>;
export function _TweenFactory(options: Record<string, unknown> = {}): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_animation#type:Tween", "", [{"name":"begin"},{"name":"end"}], [], options) as Tween<unknown | null>;
}
const _TweenProxy = {type: "flax.core/sdk_animation#type:Tween", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"transform":_flaxMemberParameters4,"evaluate":_flaxMemberParameters5,"animate":_flaxMemberParameters6,"chain":_flaxMemberParameters6,"lerp":_flaxMemberParameters4,"toString":_flaxMemberParameters2}, getters: ["begin","end"], setters: ["begin","end"], contextMembers: [], superMembers: ["get:begin","get:end","set:begin","set:end","transform","evaluate","animate","chain","lerp","toString"]} as const;
export interface _TweenNative<T extends unknown | null = unknown | null> extends Tween<T> {
readonly [_flaxDartTypeValue]: _TweenNative<T>;

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
export abstract class _TweenNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Tween<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Tween<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Tween", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options?: {begin?: unknown | null | undefined; end?: unknown | null | undefined}) { super(_TweenProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TweenNative.prototype, _TweenProxy);
export namespace _TweenFactory { export function implement<T extends unknown | null = unknown | null>(args: [options?: {begin?: unknown | null | undefined; end?: unknown | null | undefined}], implementation: {}): Tween<T> {
return constructProxy(_TweenProxy, args, implementation) as Tween<T>; } }
const _TweenBinding = _flaxProxyFactory(_TweenFactory, _TweenNative) as unknown as typeof _TweenFactory & (new<T extends unknown | null = unknown | null>(options?: {begin?: unknown | null | undefined; end?: unknown | null | undefined}) => _TweenNative<T>);
export const Tween: typeof _TweenBinding & _FlaxInstanceType<Tween<unknown | null>> & _FlaxDartType<Tween<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:Tween", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<Tween<unknown | null>, typeof _TweenBinding>(_TweenBinding, "flax.core/sdk_animation#type:Tween", ["flax.core/sdk_animation#type:Animatable","dart:core::Object"]) as typeof _TweenBinding & _FlaxInstanceType<Tween<unknown | null>> & _FlaxDartType<Tween<unknown | null>, readonly ["class", "flax.core/sdk_animation#type:Tween", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(Tween, "flax.core/sdk_animation#type:Tween", {...{"category":"object","constructors":{"":[{"name":"begin","required":false,"positional":false},{"name":"end","required":false,"positional":false}]}}, proxy: _TweenProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "begin" | "end" | "transform" | "evaluate" | "animate" | "chain" | "lerp" | "toString" | "__flaxBound:package:flutter/src/animation/tween.dart::Tween" | "__flaxBound:package:flutter/src/animation/tween.dart::Animatable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options?: {begin?: unknown | null | undefined;end?: unknown | null | undefined}) => _TweenNative<_Selected0>) & {(options?: {begin?: (_Selected0 | DartInput<_Selected0>) | null | undefined;end?: (_Selected0 | DartInput<_Selected0>) | null | undefined}): _TweenNative<_Selected0>;readonly prototype: _TweenNative<_Selected0>;implement(args: readonly [options?: {begin?: unknown | null | undefined; end?: unknown | null | undefined}], implementation: Partial<_TweenNative<_Selected0>>): _TweenNative<_Selected0>;} & _FlaxInstanceType<_TweenNative<_Selected0>> & _FlaxDartType<_TweenNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options?: {begin?: unknown | null | undefined;end?: unknown | null | undefined}) => _TweenNative<_Selected0>) & {(options?: {begin?: (_Selected0 | DartInput<_Selected0>) | null | undefined;end?: (_Selected0 | DartInput<_Selected0>) | null | undefined}): _TweenNative<_Selected0>;readonly prototype: _TweenNative<_Selected0>;implement(args: readonly [options?: {begin?: unknown | null | undefined; end?: unknown | null | undefined}], implementation: Partial<_TweenNative<_Selected0>>): _TweenNative<_Selected0>;} & _FlaxInstanceType<_TweenNative<_Selected0>> & _FlaxDartType<_TweenNative<_Selected0>> : never : never; }
