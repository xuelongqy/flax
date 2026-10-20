// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableNum';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableNum';
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
import { _flaxMemberParameters322, _flaxMemberParameters2, _flaxMemberParameters321, _flaxMemberParameters33, _flaxMemberParameters30, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableInt extends Omit<upstream0.RestorableNum<number>, _flaxOwnMembers0>, Omit<upstream1.RestorableValue<number>, _flaxOwnMembers0 | keyof upstream0.RestorableNum<number>>, Omit<upstream2.RestorableProperty<number>, _flaxOwnMembers0 | keyof upstream0.RestorableNum<number> | keyof upstream1.RestorableValue<number>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableNum<number> | keyof upstream1.RestorableValue<number> | keyof upstream2.RestorableProperty<number>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableNum<number> | keyof upstream1.RestorableValue<number> | keyof upstream2.RestorableProperty<number> | keyof upstream3.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableInt": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNum": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [number] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableInt: unique symbol;
readonly [_flaxDartTypeValue]: RestorableInt;

get value(): number;
readonly enabled: boolean;
readonly state: upstream5.State<upstream6.StatefulWidget>;
readonly isRegistered: boolean;
readonly hasListeners: boolean;
fromPrimitives(serialized: unknown | null): number;
toPrimitives(): {};
createDefaultValue(): number;
didUpdateValue(oldValue: number | null): void;
initWithValue(value: number): void;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set value(value: number);
}
defineObject("flax.core/sdk_widgets#type:RestorableInt", ["value","enabled","state","isRegistered","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableInt", "object", {"fromPrimitives":_flaxMemberParameters322,"toPrimitives":_flaxMemberParameters2,"createDefaultValue":_flaxMemberParameters2,"didUpdateValue":_flaxMemberParameters321,"initWithValue":_flaxMemberParameters33}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _RestorableIntFactory(defaultValue: number): RestorableInt {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RestorableInt", "", [{"name":"defaultValue","required":true,"positional":true}], [defaultValue], {}) as RestorableInt;
}
const _RestorableIntProxy = {type: "flax.core/sdk_widgets#type:RestorableInt", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"fromPrimitives":_flaxMemberParameters322,"toPrimitives":_flaxMemberParameters2,"createDefaultValue":_flaxMemberParameters2,"didUpdateValue":_flaxMemberParameters321,"initWithValue":_flaxMemberParameters33,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","fromPrimitives","toPrimitives","createDefaultValue","didUpdateValue","initWithValue","dispose","addListener","removeListener"]} as const;
export interface _RestorableIntNative extends RestorableInt {
readonly [_flaxDartTypeValue]: _RestorableIntNative;

fromPrimitives(serialized: unknown | null): number;
toPrimitives(): {};
createDefaultValue(): number;
didUpdateValue(oldValue: number | null): void;
initWithValue(value: number): void;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): number;
get enabled(): boolean;
get state(): upstream5.State<upstream6.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: number);
}
export abstract class _RestorableIntNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableInt>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableInt;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableInt", readonly [], false];
constructor(defaultValue: number) { super(_RestorableIntProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorableIntNative.prototype, _RestorableIntProxy);
export namespace _RestorableIntFactory { export function implement(args: [defaultValue: number], implementation: {}): RestorableInt {
return constructProxy(_RestorableIntProxy, args, implementation) as RestorableInt; } }
const _RestorableIntBinding = _flaxProxyFactory(_RestorableIntFactory, _RestorableIntNative) as unknown as typeof _RestorableIntFactory & (new(defaultValue: number) => _RestorableIntNative);
export const RestorableInt: typeof _RestorableIntBinding & _FlaxInstanceType<RestorableInt> & _FlaxDartType<RestorableInt, readonly ["class", "flax.core/sdk_widgets#type:RestorableInt", readonly [], false]> = _flaxBindInstanceType<RestorableInt, typeof _RestorableIntBinding>(_RestorableIntBinding, "flax.core/sdk_widgets#type:RestorableInt", ["flax.core/sdk_widgets#type:RestorableNum","package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue","package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN","flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorableIntBinding & _FlaxInstanceType<RestorableInt> & _FlaxDartType<RestorableInt, readonly ["class", "flax.core/sdk_widgets#type:RestorableInt", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "fromPrimitives" | "toPrimitives" | "createDefaultValue" | "didUpdateValue" | "initWithValue" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableInt" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNum" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
