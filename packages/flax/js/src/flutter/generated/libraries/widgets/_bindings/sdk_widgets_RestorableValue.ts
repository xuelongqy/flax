// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { _flaxMemberParameters2, _flaxMemberParameters338, _flaxMemberParameters33, _flaxMemberParameters12, _flaxMemberParameters336 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableValue<T extends unknown | null = unknown | null> extends Omit<upstream0.RestorableProperty<T>, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableProperty<T>>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableProperty<T> | keyof upstream1.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableValue: unique symbol;
readonly [_flaxDartTypeValue]: RestorableValue<T>;

}
defineObject("flax.core/sdk_widgets#type:RestorableValue", ["enabled","state","isRegistered","hasListeners","value"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableValue", "object", {"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters338,"initWithValue":_flaxMemberParameters33,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"didUpdateValue":_flaxMemberParameters336}, {}), ["removeListener"]);
const _RestorableValueProxy = {type: "flax.core/sdk_widgets#type:RestorableValue", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters338,"initWithValue":_flaxMemberParameters33,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"didUpdateValue":_flaxMemberParameters336}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","initWithValue","dispose","addListener","removeListener"]} as const;
export interface RestorableValue<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: RestorableValue<T>;

initWithValue(value: (T | DartInput<T>)): void;
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
export abstract class RestorableValue<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableValue<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableValue<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableValue", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_RestorableValueProxy, Array.from(arguments)); }
abstract createDefaultValue(): T;
abstract fromPrimitives(data: unknown | null): T;
abstract toPrimitives(): unknown | null;
abstract didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
}
_flaxDefineProxyBase(RestorableValue.prototype, _RestorableValueProxy);
export namespace RestorableValue { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {createDefaultValue: (() => (T | DartInput<T>)); fromPrimitives: ((data: unknown | null) => (T | DartInput<T>)); toPrimitives: (() => unknown | null); didUpdateValue: ((oldValue: T | null) => void)}): RestorableValue<T> {
return constructProxy(_RestorableValueProxy, args, implementation) as RestorableValue<T>; } }
_flaxBindInstanceType<RestorableValue<unknown | null>, typeof RestorableValue>(RestorableValue, "flax.core/sdk_widgets#type:RestorableValue", ["flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
_flaxDefineDartTypes(RestorableValue, "flax.core/sdk_widgets#type:RestorableValue", {...{"category":"object","constructors":{}}, proxy: _RestorableValueProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabled" | "state" | "isRegistered" | "hasListeners" | "value" | "createDefaultValue" | "fromPrimitives" | "initWithValue" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "didUpdateValue" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RestorableValue<_Selected0>) & {readonly prototype: RestorableValue<_Selected0>;implement(args: readonly [], implementation: Partial<RestorableValue<_Selected0>>): RestorableValue<_Selected0>;} & _FlaxInstanceType<RestorableValue<_Selected0>> & _FlaxDartType<RestorableValue<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RestorableValue<_Selected0>) & {readonly prototype: RestorableValue<_Selected0>;implement(args: readonly [], implementation: Partial<RestorableValue<_Selected0>>): RestorableValue<_Selected0>;} & _FlaxInstanceType<RestorableValue<_Selected0>> & _FlaxDartType<RestorableValue<_Selected0>> : never : never; }
