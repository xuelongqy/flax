// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueListenable<T extends unknown | null = unknown | null> extends upstream0.Listenable, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T] }> { readonly __ValueListenable: unique symbol;

}
defineObject("flax.core/flutter#type:ValueListenable", ["value"], [], _flaxBindingMethods("flax.core/flutter#type:ValueListenable", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0}, {}), ["removeListener"]);
const _ValueListenableProxy = {type: "flax.core/flutter#type:ValueListenable", parameters: [], constructors: {"":[]}, methods: {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0}, getters: ["value"], setters: [], contextMembers: [], superMembers: []} as const;
export interface ValueListenable<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: ValueListenable<T>;

}
export abstract class ValueListenable<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ValueListenable<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ValueListenable<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/flutter#type:ValueListenable", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_ValueListenableProxy, Array.from(arguments)); }
abstract addListener(listener: (() => void)): void;
abstract removeListener(listener: (() => void)): void;
abstract get value(): T;
}
_flaxDefineProxyBase(ValueListenable.prototype, _ValueListenableProxy);
export namespace ValueListenable { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {addListener: ((listener: (() => void)) => void); removeListener: ((listener: (() => void)) => void); get value(): (T | DartInput<T>)}): ValueListenable<T> {
return constructProxy(_ValueListenableProxy, args, implementation) as ValueListenable<T>; } }
_flaxBindInstanceType<ValueListenable<unknown | null>, typeof ValueListenable>(ValueListenable, "flax.core/flutter#type:ValueListenable", ["flax.core/flutter#type:Listenable","dart:core::Object"]);
_flaxDefineDartTypes(ValueListenable, "flax.core/flutter#type:ValueListenable", {...{"category":"object","constructors":{}}, proxy: _ValueListenableProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => ValueListenable<_Selected0>) & {readonly prototype: ValueListenable<_Selected0>;implement(args: readonly [], implementation: Partial<ValueListenable<_Selected0>>): ValueListenable<_Selected0>;} & _FlaxInstanceType<ValueListenable<_Selected0>> & _FlaxDartType<ValueListenable<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => ValueListenable<_Selected0>) & {readonly prototype: ValueListenable<_Selected0>;implement(args: readonly [], implementation: Partial<ValueListenable<_Selected0>>): ValueListenable<_Selected0>;} & _FlaxInstanceType<ValueListenable<_Selected0>> & _FlaxDartType<ValueListenable<_Selected0>> : never : never; }
