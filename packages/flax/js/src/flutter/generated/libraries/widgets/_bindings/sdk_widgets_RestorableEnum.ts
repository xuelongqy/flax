// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
const _flaxMemberParameters0 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"oldValue","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"data","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"defaultValue","required":true,"positional":true},{"name":"values","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableEnum<T extends upstream0.Enum = upstream0.Enum> extends Omit<upstream1.RestorableValue<T>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<T>, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T> | keyof upstream2.RestorableProperty<T>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T> | keyof upstream2.RestorableProperty<T> | keyof upstream3.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnum": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableEnum: unique symbol;
readonly [_flaxDartTypeValue]: RestorableEnum<T>;

}
defineObject("flax.core/sdk_widgets#type:RestorableEnum", ["value","enabled","state","isRegistered","hasListeners","values"], ["value","values"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableEnum", "object", {"initWithValue":_flaxMemberParameters0,"didUpdateValue":_flaxMemberParameters1,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters3,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters4,"removeListener":_flaxMemberParameters4}, {}), ["removeListener"]);
const _RestorableEnumProxy = {type: "flax.core/sdk_widgets#type:RestorableEnum", parameters: _flaxMemberParameters5, constructors: {"": _flaxMemberParameters5}, methods: {"initWithValue":_flaxMemberParameters0,"didUpdateValue":_flaxMemberParameters1,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters3,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters4,"removeListener":_flaxMemberParameters4}, getters: ["values","value","enabled","state","isRegistered","hasListeners"], setters: ["value","values"], contextMembers: [], superMembers: ["get:values","get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","set:values","initWithValue","didUpdateValue","createDefaultValue","fromPrimitives","toPrimitives","dispose","addListener","removeListener"]} as const;
export interface RestorableEnum<T extends upstream0.Enum = upstream0.Enum> {
readonly [_flaxDartTypeValue]: RestorableEnum<T>;

initWithValue(value: (T | DartInput<T>)): void;
didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
createDefaultValue(): T;
fromPrimitives(data: unknown | null): T;
toPrimitives(): {};
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get values(): DartSet<T>;
get value(): T;
get enabled(): boolean;
get state(): upstream5.State<upstream6.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: (T | DartInput<T>));
set values(value: DartSetInput<T, (T | DartInput<T>)>);
}
export abstract class RestorableEnum<T extends upstream0.Enum = upstream0.Enum> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableEnum<upstream0.Enum>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableEnum<upstream0.Enum>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableEnum", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) { super(_RestorableEnumProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RestorableEnum.prototype, _RestorableEnumProxy);
export namespace RestorableEnum { export function implement<T extends upstream0.Enum = upstream0.Enum>(args: [defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}], implementation: {}): RestorableEnum<T> {
return constructProxy(_RestorableEnumProxy, args, implementation) as RestorableEnum<T>; } }
_flaxBindInstanceType<RestorableEnum<upstream0.Enum>, typeof RestorableEnum>(RestorableEnum, "flax.core/sdk_widgets#type:RestorableEnum", ["flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
_flaxDefineDartTypes(RestorableEnum, "flax.core/sdk_widgets#type:RestorableEnum", {...{"category":"object","constructors":{}}, proxy: _RestorableEnumProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "values" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnum" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (abstract new (defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) => RestorableEnum<_Selected0>) & {readonly prototype: RestorableEnum<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}], implementation: Partial<RestorableEnum<_Selected0>>): RestorableEnum<_Selected0>;} & _FlaxInstanceType<RestorableEnum<_Selected0>> & _FlaxDartType<RestorableEnum<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (abstract new (defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) => RestorableEnum<_Selected0>) & {readonly prototype: RestorableEnum<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}], implementation: Partial<RestorableEnum<_Selected0>>): RestorableEnum<_Selected0>;} & _FlaxInstanceType<RestorableEnum<_Selected0>> & _FlaxDartType<RestorableEnum<_Selected0>> : never : never; }
