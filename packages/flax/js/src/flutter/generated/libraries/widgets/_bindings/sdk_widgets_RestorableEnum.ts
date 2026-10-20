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
import { _flaxMemberParameters33, _flaxMemberParameters321, _flaxMemberParameters2, _flaxMemberParameters323, _flaxMemberParameters12, _flaxMemberParameters324 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableEnum<T extends upstream0.Enum = upstream0.Enum> extends Omit<upstream1.RestorableValue<T>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<T>, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T> | keyof upstream2.RestorableProperty<T>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T> | keyof upstream2.RestorableProperty<T> | keyof upstream3.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnum": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableEnum: unique symbol;
readonly [_flaxDartTypeValue]: RestorableEnum<T>;

get value(): T;
readonly enabled: boolean;
readonly state: upstream5.State<upstream6.StatefulWidget>;
readonly isRegistered: boolean;
readonly hasListeners: boolean;
get values(): DartSet<T>;
initWithValue(value: (T | DartInput<T>)): void;
didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
createDefaultValue(): T;
fromPrimitives(data: unknown | null): T;
toPrimitives(): {};
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set value(value: (T | DartInput<T>));
set values(value: DartSetInput<T, (T | DartInput<T>)>);
}
defineObject("flax.core/sdk_widgets#type:RestorableEnum", ["value","enabled","state","isRegistered","hasListeners","values"], ["value","values"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableEnum", "object", {"initWithValue":_flaxMemberParameters33,"didUpdateValue":_flaxMemberParameters321,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters323,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, {}), ["removeListener"]);
export function _RestorableEnumFactory<T extends upstream0.Enum = upstream0.Enum>(defaultValue: (T | DartInput<T>), options: { values: DartIterableInput<T, (T | DartInput<T>)> }): RestorableEnum<T>;
export function _RestorableEnumFactory(defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: { values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>> }): RestorableEnum<upstream0.Enum>;
export function _RestorableEnumFactory(defaultValue: unknown, options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RestorableEnum", "", [{"name":"defaultValue","required":true,"positional":true},{"name":"values","required":true}], [defaultValue], options) as RestorableEnum<upstream0.Enum>;
}
const _RestorableEnumProxy = {type: "flax.core/sdk_widgets#type:RestorableEnum", parameters: _flaxMemberParameters324, constructors: {"": _flaxMemberParameters324}, methods: {"initWithValue":_flaxMemberParameters33,"didUpdateValue":_flaxMemberParameters321,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters323,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, getters: ["values","value","enabled","state","isRegistered","hasListeners"], setters: ["value","values"], contextMembers: [], superMembers: ["get:values","get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","set:values","initWithValue","didUpdateValue","createDefaultValue","fromPrimitives","toPrimitives","dispose","addListener","removeListener"]} as const;
export interface _RestorableEnumNative<T extends upstream0.Enum = upstream0.Enum> extends RestorableEnum<T> {
readonly [_flaxDartTypeValue]: _RestorableEnumNative<T>;

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
export abstract class _RestorableEnumNative<T extends upstream0.Enum = upstream0.Enum> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableEnum<upstream0.Enum>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableEnum<upstream0.Enum>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableEnum", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) { super(_RestorableEnumProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorableEnumNative.prototype, _RestorableEnumProxy);
export namespace _RestorableEnumFactory { export function implement<T extends upstream0.Enum = upstream0.Enum>(args: [defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}], implementation: {}): RestorableEnum<T> {
return constructProxy(_RestorableEnumProxy, args, implementation) as RestorableEnum<T>; } }
const _RestorableEnumBinding = _flaxProxyFactory(_RestorableEnumFactory, _RestorableEnumNative) as unknown as typeof _RestorableEnumFactory & (new<T extends upstream0.Enum = upstream0.Enum>(defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) => _RestorableEnumNative<T>);
export const RestorableEnum: typeof _RestorableEnumBinding & _FlaxInstanceType<RestorableEnum<upstream0.Enum>> & _FlaxDartType<RestorableEnum<upstream0.Enum>, readonly ["class", "flax.core/sdk_widgets#type:RestorableEnum", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<RestorableEnum<upstream0.Enum>, typeof _RestorableEnumBinding>(_RestorableEnumBinding, "flax.core/sdk_widgets#type:RestorableEnum", ["flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorableEnumBinding & _FlaxInstanceType<RestorableEnum<upstream0.Enum>> & _FlaxDartType<RestorableEnum<upstream0.Enum>, readonly ["class", "flax.core/sdk_widgets#type:RestorableEnum", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(RestorableEnum, "flax.core/sdk_widgets#type:RestorableEnum", {...{"category":"object","constructors":{"":[{"name":"defaultValue","required":true,"positional":true},{"name":"values","required":true,"positional":false}]}}, proxy: _RestorableEnumProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "values" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnum" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (new (defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) => _RestorableEnumNative<_Selected0>) & {(defaultValue: (_Selected0 | DartInput<_Selected0>), options: {values: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>}): _RestorableEnumNative<_Selected0>;readonly prototype: _RestorableEnumNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}], implementation: Partial<_RestorableEnumNative<_Selected0>>): _RestorableEnumNative<_Selected0>;} & _FlaxInstanceType<_RestorableEnumNative<_Selected0>> & _FlaxDartType<_RestorableEnumNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (new (defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) => _RestorableEnumNative<_Selected0>) & {(defaultValue: (_Selected0 | DartInput<_Selected0>), options: {values: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>}): _RestorableEnumNative<_Selected0>;readonly prototype: _RestorableEnumNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}], implementation: Partial<_RestorableEnumNative<_Selected0>>): _RestorableEnumNative<_Selected0>;} & _FlaxInstanceType<_RestorableEnumNative<_Selected0>> & _FlaxDartType<_RestorableEnumNative<_Selected0>> : never : never; }
