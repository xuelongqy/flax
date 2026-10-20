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
export interface RestorableEnumN<T extends upstream0.Enum = upstream0.Enum> extends Omit<upstream1.RestorableValue<T | null>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<T | null>, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T | null>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T | null> | keyof upstream2.RestorableProperty<T | null>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream1.RestorableValue<T | null> | keyof upstream2.RestorableProperty<T | null> | keyof upstream3.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnumN": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [T | null] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [T | null] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableEnumN: unique symbol;
readonly [_flaxDartTypeValue]: RestorableEnumN<T>;

get value(): T | null;
readonly enabled: boolean;
readonly state: upstream5.State<upstream6.StatefulWidget>;
readonly isRegistered: boolean;
readonly hasListeners: boolean;
get values(): DartSet<T>;
initWithValue(value: (T | DartInput<T>) | null): void;
didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
createDefaultValue(): T | null;
fromPrimitives(data: unknown | null): T | null;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set value(value: (T | DartInput<T>) | null);
set values(value: DartSetInput<T, (T | DartInput<T>)>);
}
defineObject("flax.core/sdk_widgets#type:RestorableEnumN", ["value","enabled","state","isRegistered","hasListeners","values"], ["value","values"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableEnumN", "object", {"initWithValue":_flaxMemberParameters33,"didUpdateValue":_flaxMemberParameters321,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters323,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, {}), ["removeListener"]);
export function _RestorableEnumNFactory<T extends upstream0.Enum = upstream0.Enum>(defaultValue: (T | DartInput<T>) | null, options: { values: DartIterableInput<T, (T | DartInput<T>)> }): RestorableEnumN<T>;
export function _RestorableEnumNFactory(defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }> | null, options: { values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>> }): RestorableEnumN<upstream0.Enum>;
export function _RestorableEnumNFactory(defaultValue: unknown, options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RestorableEnumN", "", [{"name":"defaultValue","required":true,"positional":true},{"name":"values","required":true}], [defaultValue], options) as RestorableEnumN<upstream0.Enum>;
}
const _RestorableEnumNProxy = {type: "flax.core/sdk_widgets#type:RestorableEnumN", parameters: _flaxMemberParameters324, constructors: {"": _flaxMemberParameters324}, methods: {"initWithValue":_flaxMemberParameters33,"didUpdateValue":_flaxMemberParameters321,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters323,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, getters: ["values","value","enabled","state","isRegistered","hasListeners"], setters: ["value","values"], contextMembers: [], superMembers: ["get:values","get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","set:values","initWithValue","didUpdateValue","createDefaultValue","fromPrimitives","toPrimitives","dispose","addListener","removeListener"]} as const;
export interface _RestorableEnumNNative<T extends upstream0.Enum = upstream0.Enum> extends RestorableEnumN<T> {
readonly [_flaxDartTypeValue]: _RestorableEnumNNative<T>;

initWithValue(value: (T | DartInput<T>) | null): void;
didUpdateValue(oldValue: (T | DartInput<T>) | null): void;
createDefaultValue(): T | null;
fromPrimitives(data: unknown | null): T | null;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get values(): DartSet<T>;
get value(): T | null;
get enabled(): boolean;
get state(): upstream5.State<upstream6.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: (T | DartInput<T>) | null);
set values(value: DartSetInput<T, (T | DartInput<T>)>);
}
export abstract class _RestorableEnumNNative<T extends upstream0.Enum = upstream0.Enum> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableEnumN<upstream0.Enum>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableEnumN<upstream0.Enum>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableEnumN", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }> | null, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) { super(_RestorableEnumNProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorableEnumNNative.prototype, _RestorableEnumNProxy);
export namespace _RestorableEnumNFactory { export function implement<T extends upstream0.Enum = upstream0.Enum>(args: [defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }> | null, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}], implementation: {}): RestorableEnumN<T> {
return constructProxy(_RestorableEnumNProxy, args, implementation) as RestorableEnumN<T>; } }
const _RestorableEnumNBinding = _flaxProxyFactory(_RestorableEnumNFactory, _RestorableEnumNNative) as unknown as typeof _RestorableEnumNFactory & (new<T extends upstream0.Enum = upstream0.Enum>(defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }> | null, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) => _RestorableEnumNNative<T>);
export const RestorableEnumN: typeof _RestorableEnumNBinding & _FlaxInstanceType<RestorableEnumN<upstream0.Enum>> & _FlaxDartType<RestorableEnumN<upstream0.Enum>, readonly ["class", "flax.core/sdk_widgets#type:RestorableEnumN", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<RestorableEnumN<upstream0.Enum>, typeof _RestorableEnumNBinding>(_RestorableEnumNBinding, "flax.core/sdk_widgets#type:RestorableEnumN", ["flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorableEnumNBinding & _FlaxInstanceType<RestorableEnumN<upstream0.Enum>> & _FlaxDartType<RestorableEnumN<upstream0.Enum>, readonly ["class", "flax.core/sdk_widgets#type:RestorableEnumN", readonly [readonly ["class", "flax.core/flutter#type:Enum", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(RestorableEnumN, "flax.core/sdk_widgets#type:RestorableEnumN", {...{"category":"object","constructors":{"":[{"name":"defaultValue","required":true,"positional":true},{"name":"values","required":true,"positional":false}]}}, proxy: _RestorableEnumNProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "values" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableEnumN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (new (defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }> | null, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) => _RestorableEnumNNative<_Selected0>) & {(defaultValue: (_Selected0 | DartInput<_Selected0>) | null, options: {values: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>}): _RestorableEnumNNative<_Selected0>;readonly prototype: _RestorableEnumNNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }> | null, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}], implementation: Partial<_RestorableEnumNNative<_Selected0>>): _RestorableEnumNNative<_Selected0>;} & _FlaxInstanceType<_RestorableEnumNNative<_Selected0>> & _FlaxDartType<_RestorableEnumNNative<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (new (defaultValue: Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }> | null, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}) => _RestorableEnumNNative<_Selected0>) & {(defaultValue: (_Selected0 | DartInput<_Selected0>) | null, options: {values: DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>}): _RestorableEnumNNative<_Selected0>;readonly prototype: _RestorableEnumNNative<_Selected0>;implement(args: readonly [Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }> | null, options: {values: DartIterableInput<upstream0.Enum, Readonly<{ "__flaxBound:dart:core::Enum": readonly [] }>>}], implementation: Partial<_RestorableEnumNNative<_Selected0>>): _RestorableEnumNNative<_Selected0>;} & _FlaxInstanceType<_RestorableEnumNNative<_Selected0>> & _FlaxDartType<_RestorableEnumNNative<_Selected0>> : never : never; }
