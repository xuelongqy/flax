// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { _flaxMemberParameters26, _flaxMemberParameters1, _flaxMemberParameters89 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueNotifier<T extends unknown | null = unknown | null> extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Omit<upstream2.ValueListenable<T>, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier | keyof upstream1.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T] }> { readonly __ValueNotifier: unique symbol;
readonly [_flaxDartTypeValue]: ValueNotifier<T>;

readonly hasListeners: boolean;
get value(): T;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
toString(): string;
set value(value: (T | DartInput<T>));
}
defineObject("flax.core/sdk_foundation#type:ValueNotifier", ["hasListeners","value"], ["value"], _flaxBindingMethods("flax.core/sdk_foundation#type:ValueNotifier", "object", {"addListener":_flaxMemberParameters26,"removeListener":_flaxMemberParameters26,"dispose":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), ["removeListener"]);
export function _ValueNotifierFactory<T extends unknown | null = unknown | null>(_value: (T | _FlaxDartOutput<T>)): ValueNotifier<T>;
export function _ValueNotifierFactory(_value: unknown | null): ValueNotifier<unknown | null>;
export function _ValueNotifierFactory(_value: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:ValueNotifier", "", [{"name":"_value","required":true,"positional":true}], [_value], {}) as ValueNotifier<unknown | null>;
}
const _ValueNotifierProxy = {type: "flax.core/sdk_foundation#type:ValueNotifier", parameters: _flaxMemberParameters89, constructors: {"": _flaxMemberParameters89}, methods: {"addListener":_flaxMemberParameters26,"removeListener":_flaxMemberParameters26,"dispose":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["value","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:hasListeners","set:value","addListener","removeListener","dispose","toString"]} as const;
export interface _ValueNotifierNative<T extends unknown | null = unknown | null> extends ValueNotifier<T> {
readonly [_flaxDartTypeValue]: _ValueNotifierNative<T>;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
toString(): string;
get value(): T;
get hasListeners(): boolean;
set value(value: (T | DartInput<T>));
}
export abstract class _ValueNotifierNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ValueNotifier<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ValueNotifier<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ValueNotifier", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(_value: unknown | null) { super(_ValueNotifierProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ValueNotifierNative.prototype, _ValueNotifierProxy);
export namespace _ValueNotifierFactory { export function implement<T extends unknown | null = unknown | null>(args: [_value: unknown | null], implementation: {}): ValueNotifier<T> {
return constructProxy(_ValueNotifierProxy, args, implementation) as ValueNotifier<T>; } }
const _ValueNotifierBinding = _flaxProxyFactory(_ValueNotifierFactory, _ValueNotifierNative) as unknown as typeof _ValueNotifierFactory & (new<T extends unknown | null = unknown | null>(_value: unknown | null) => _ValueNotifierNative<T>);
export const ValueNotifier: typeof _ValueNotifierBinding & _FlaxInstanceType<ValueNotifier<unknown | null>> & _FlaxDartType<ValueNotifier<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:ValueNotifier", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<ValueNotifier<unknown | null>, typeof _ValueNotifierBinding>(_ValueNotifierBinding, "flax.core/sdk_foundation#type:ValueNotifier", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable"]) as typeof _ValueNotifierBinding & _FlaxInstanceType<ValueNotifier<unknown | null>> & _FlaxDartType<ValueNotifier<unknown | null>, readonly ["class", "flax.core/sdk_foundation#type:ValueNotifier", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(ValueNotifier, "flax.core/sdk_foundation#type:ValueNotifier", {...{"category":"object","constructors":{"":[{"name":"_value","required":true,"positional":true}]}}, proxy: _ValueNotifierProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "value" | "addListener" | "removeListener" | "dispose" | "toString" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_value: unknown | null) => _ValueNotifierNative<_Selected0>) & {(_value: (_Selected0 | DartInput<_Selected0>)): _ValueNotifierNative<_Selected0>;readonly prototype: _ValueNotifierNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_ValueNotifierNative<_Selected0>>): _ValueNotifierNative<_Selected0>;} & _FlaxInstanceType<_ValueNotifierNative<_Selected0>> & _FlaxDartType<_ValueNotifierNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (_value: unknown | null) => _ValueNotifierNative<_Selected0>) & {(_value: (_Selected0 | DartInput<_Selected0>)): _ValueNotifierNative<_Selected0>;readonly prototype: _ValueNotifierNative<_Selected0>;implement(args: readonly [unknown | null], implementation: Partial<_ValueNotifierNative<_Selected0>>): _ValueNotifierNative<_Selected0>;} & _FlaxInstanceType<_ValueNotifierNative<_Selected0>> & _FlaxDartType<_ValueNotifierNative<_Selected0>> : never : never; }
