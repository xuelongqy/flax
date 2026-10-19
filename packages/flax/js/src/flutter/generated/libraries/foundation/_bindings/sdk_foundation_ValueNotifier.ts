// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { _flaxMemberParameters28, _flaxMemberParameters1, _flaxMemberParameters86 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueNotifier<T extends unknown | null = unknown | null> extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Omit<upstream2.ValueListenable<T>, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier | keyof upstream1.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T] }> { readonly __ValueNotifier: unique symbol;
readonly [_flaxDartTypeValue]: ValueNotifier<T>;

}
defineObject("flax.core/sdk_foundation#type:ValueNotifier", ["hasListeners","value"], ["value"], _flaxBindingMethods("flax.core/sdk_foundation#type:ValueNotifier", "object", {"addListener":_flaxMemberParameters28,"removeListener":_flaxMemberParameters28,"dispose":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), ["removeListener"]);
const _ValueNotifierProxy = {type: "flax.core/sdk_foundation#type:ValueNotifier", parameters: _flaxMemberParameters86, constructors: {"": _flaxMemberParameters86}, methods: {"addListener":_flaxMemberParameters28,"removeListener":_flaxMemberParameters28,"dispose":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["value","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:hasListeners","set:value","addListener","removeListener","dispose","toString"]} as const;
export interface ValueNotifier<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: ValueNotifier<T>;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
toString(): string;
get value(): T;
get hasListeners(): boolean;
set value(value: (T | DartInput<T>));
}
export abstract class ValueNotifier<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ValueNotifier<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ValueNotifier<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ValueNotifier", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(_value: unknown | null) { super(_ValueNotifierProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ValueNotifier.prototype, _ValueNotifierProxy);
export namespace ValueNotifier { export function implement<T extends unknown | null = unknown | null>(args: [_value: unknown | null], implementation: {}): ValueNotifier<T> {
return constructProxy(_ValueNotifierProxy, args, implementation) as ValueNotifier<T>; } }
_flaxBindInstanceType<ValueNotifier<unknown | null>, typeof ValueNotifier>(ValueNotifier, "flax.core/sdk_foundation#type:ValueNotifier", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable"]);
_flaxDefineDartTypes(ValueNotifier, "flax.core/sdk_foundation#type:ValueNotifier", {...{"category":"object","constructors":{}}, proxy: _ValueNotifierProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "value" | "addListener" | "removeListener" | "dispose" | "toString" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (_value: unknown | null) => ValueNotifier<_Selected0>) & {readonly prototype: ValueNotifier<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<ValueNotifier<_Selected0>>): ValueNotifier<_Selected0>;} & _FlaxInstanceType<ValueNotifier<_Selected0>> & _FlaxDartType<ValueNotifier<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (_value: unknown | null) => ValueNotifier<_Selected0>) & {readonly prototype: ValueNotifier<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<ValueNotifier<_Selected0>>): ValueNotifier<_Selected0>;} & _FlaxInstanceType<ValueNotifier<_Selected0>> & _FlaxDartType<ValueNotifier<_Selected0>> : never : never; }
