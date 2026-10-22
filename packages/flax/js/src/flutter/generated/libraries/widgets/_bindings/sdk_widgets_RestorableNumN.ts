// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { _flaxMemberParameters38, _flaxMemberParameters364, _flaxMemberParameters2, _flaxMemberParameters365, _flaxMemberParameters12, _flaxMemberParameters35 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableNumN<T extends number | null = number | null> extends Omit<upstream0.RestorableValue<T>, _flaxOwnMembers0>, Omit<upstream1.RestorableProperty<T>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<T>>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<T> | keyof upstream1.RestorableProperty<T>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<T> | keyof upstream1.RestorableProperty<T> | keyof upstream2.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNumN": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableNumN: unique symbol;
readonly [_flaxDartTypeValue]: RestorableNumN<T>;

get value(): T;
readonly enabled: boolean;
readonly state: upstream4.State<upstream5.StatefulWidget>;
readonly isRegistered: boolean;
readonly hasListeners: boolean;
initWithValue(value: (T | DartInput<T>)): void;
didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
createDefaultValue(): T;
fromPrimitives(serialized: unknown | null): T;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set value(value: (T | DartInput<T>));
}
defineObject("flax.core/sdk_widgets#type:RestorableNumN", ["value","enabled","state","isRegistered","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableNumN", "object", {"initWithValue":_flaxMemberParameters38,"didUpdateValue":_flaxMemberParameters364,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters365,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, {}), ["removeListener"]);
export function _RestorableNumNFactory<T extends number | null = number | null>(defaultValue: (T | DartInput<T>)): RestorableNumN<T>;
export function _RestorableNumNFactory(defaultValue: number | null): RestorableNumN<number | null>;
export function _RestorableNumNFactory(defaultValue: unknown): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RestorableNumN", "", [{"name":"defaultValue","required":true,"positional":true}], [defaultValue], {}) as RestorableNumN<number | null>;
}
const _RestorableNumNProxy = {type: "flax.core/sdk_widgets#type:RestorableNumN", parameters: _flaxMemberParameters35, constructors: {"": _flaxMemberParameters35}, methods: {"initWithValue":_flaxMemberParameters38,"didUpdateValue":_flaxMemberParameters364,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters365,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","initWithValue","didUpdateValue","createDefaultValue","fromPrimitives","toPrimitives","dispose","addListener","removeListener"]} as const;
export interface _RestorableNumNNative<T extends number | null = number | null> extends RestorableNumN<T> {
readonly [_flaxDartTypeValue]: _RestorableNumNNative<T>;

initWithValue(value: (T | DartInput<T>)): void;
didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
createDefaultValue(): T;
fromPrimitives(serialized: unknown | null): T;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): T;
get enabled(): boolean;
get state(): upstream4.State<upstream5.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: (T | DartInput<T>));
}
export abstract class _RestorableNumNNative<T extends number | null = number | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableNumN<number | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableNumN<number | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableNumN", readonly [readonly ["num", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(defaultValue: number | null) { super(_RestorableNumNProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorableNumNNative.prototype, _RestorableNumNProxy);
export namespace _RestorableNumNFactory { export function implement<T extends number | null = number | null>(args: [defaultValue: number | null], implementation: {}): RestorableNumN<T> {
return constructProxy(_RestorableNumNProxy, args, implementation) as RestorableNumN<T>; } }
const _RestorableNumNBinding = _flaxProxyFactory(_RestorableNumNFactory, _RestorableNumNNative) as unknown as typeof _RestorableNumNFactory & (new<T extends number | null = number | null>(defaultValue: number | null) => _RestorableNumNNative<T>);
export const RestorableNumN: typeof _RestorableNumNBinding & _FlaxInstanceType<RestorableNumN<number | null>> & _FlaxDartType<RestorableNumN<number | null>, readonly ["class", "flax.core/sdk_widgets#type:RestorableNumN", readonly [readonly ["num", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<RestorableNumN<number | null>, typeof _RestorableNumNBinding>(_RestorableNumNBinding, "flax.core/sdk_widgets#type:RestorableNumN", ["package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN","flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorableNumNBinding & _FlaxInstanceType<RestorableNumN<number | null>> & _FlaxDartType<RestorableNumN<number | null>, readonly ["class", "flax.core/sdk_widgets#type:RestorableNumN", readonly [readonly ["num", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(RestorableNumN, "flax.core/sdk_widgets#type:RestorableNumN", {...{"category":"object","constructors":{"":[{"name":"defaultValue","required":true,"positional":true}]}}, proxy: _RestorableNumNProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNumN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [number | null] ? (new (defaultValue: number | null) => _RestorableNumNNative<_Selected0>) & {(defaultValue: (_Selected0 | DartInput<_Selected0>)): _RestorableNumNNative<_Selected0>;readonly prototype: _RestorableNumNNative<_Selected0>;implement(args: readonly [number | null], implementation: Partial<_RestorableNumNNative<_Selected0>>): _RestorableNumNNative<_Selected0>;} & _FlaxInstanceType<_RestorableNumNNative<_Selected0>> & _FlaxDartType<_RestorableNumNNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [number | null] ? (new (defaultValue: number | null) => _RestorableNumNNative<_Selected0>) & {(defaultValue: (_Selected0 | DartInput<_Selected0>)): _RestorableNumNNative<_Selected0>;readonly prototype: _RestorableNumNNative<_Selected0>;implement(args: readonly [number | null], implementation: Partial<_RestorableNumNNative<_Selected0>>): _RestorableNumNNative<_Selected0>;} & _FlaxInstanceType<_RestorableNumNNative<_Selected0>> & _FlaxDartType<_RestorableNumNNative<_Selected0>> : never : never; }
