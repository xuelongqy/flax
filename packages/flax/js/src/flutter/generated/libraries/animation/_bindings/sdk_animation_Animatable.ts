// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"animation","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"parent","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/animation/_bindings/sdk_animation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Animatable<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [T] }> { readonly __Animatable: unique symbol;
readonly [_flaxDartTypeValue]: Animatable<T>;

}
defineObject("flax.core/sdk_animation#type:Animatable", [], [], _flaxBindingMethods("flax.core/sdk_animation#type:Animatable", "object", {"transform":_flaxMemberParameters0,"evaluate":_flaxMemberParameters1,"animate":_flaxMemberParameters2,"chain":_flaxMemberParameters2}, {}), []);
const _AnimatableProxy = {type: "flax.core/sdk_animation#type:Animatable", parameters: [], constructors: {"":[]}, methods: {"transform":_flaxMemberParameters0,"evaluate":_flaxMemberParameters1,"animate":_flaxMemberParameters2,"chain":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["evaluate","animate","chain"]} as const;
export interface Animatable<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: Animatable<T>;

evaluate(animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): T;
animate(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): upstream3.Animation<T>;
chain(parent: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [number] }>): Animatable<T>;
}
export abstract class Animatable<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Animatable<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Animatable<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Animatable", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_AnimatableProxy, Array.from(arguments)); }
abstract transform(t: number): T;
}
_flaxDefineProxyBase(Animatable.prototype, _AnimatableProxy);
export namespace Animatable { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {transform: ((t: number) => (T | DartInput<T>))}): Animatable<T> {
return constructProxy(_AnimatableProxy, args, implementation) as Animatable<T>; } }
_flaxBindInstanceType<Animatable<unknown | null>, typeof Animatable>(Animatable, "flax.core/sdk_animation#type:Animatable", ["dart:core::Object"]);
_flaxDefineDartTypes(Animatable, "flax.core/sdk_animation#type:Animatable", {...{"category":"object","constructors":{}}, proxy: _AnimatableProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => Animatable<_Selected0>) & {readonly prototype: Animatable<_Selected0>;implement(args: readonly [], implementation: Partial<Animatable<_Selected0>>): Animatable<_Selected0>;} & _FlaxInstanceType<Animatable<_Selected0>> & _FlaxDartType<Animatable<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => Animatable<_Selected0>) & {readonly prototype: Animatable<_Selected0>;implement(args: readonly [], implementation: Partial<Animatable<_Selected0>>): Animatable<_Selected0>;} & _FlaxInstanceType<Animatable<_Selected0>> & _FlaxDartType<Animatable<_Selected0>> : never : never; }
