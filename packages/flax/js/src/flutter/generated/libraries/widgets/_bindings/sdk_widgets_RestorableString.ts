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
import { _flaxMemberParameters33, _flaxMemberParameters321, _flaxMemberParameters2, _flaxMemberParameters322, _flaxMemberParameters30, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableString extends Omit<upstream0.RestorableValue<string>, _flaxOwnMembers0>, Omit<upstream1.RestorableProperty<string>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<string>>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<string> | keyof upstream1.RestorableProperty<string>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<string> | keyof upstream1.RestorableProperty<string> | keyof upstream2.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableString": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue": readonly [string] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [string] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [string] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [string] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableString: unique symbol;
readonly [_flaxDartTypeValue]: RestorableString;

get value(): string;
readonly enabled: boolean;
readonly state: upstream4.State<upstream5.StatefulWidget>;
readonly isRegistered: boolean;
readonly hasListeners: boolean;
initWithValue(value: string): void;
didUpdateValue(oldValue: string | null): void;
createDefaultValue(): string;
fromPrimitives(serialized: unknown | null): string;
toPrimitives(): {};
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set value(value: string);
}
defineObject("flax.core/sdk_widgets#type:RestorableString", ["value","enabled","state","isRegistered","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableString", "object", {"initWithValue":_flaxMemberParameters33,"didUpdateValue":_flaxMemberParameters321,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters322,"toPrimitives":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _RestorableStringFactory(defaultValue: string): RestorableString {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RestorableString", "", [{"name":"defaultValue","required":true,"positional":true}], [defaultValue], {}) as RestorableString;
}
const _RestorableStringProxy = {type: "flax.core/sdk_widgets#type:RestorableString", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"initWithValue":_flaxMemberParameters33,"didUpdateValue":_flaxMemberParameters321,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters322,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","initWithValue","didUpdateValue","createDefaultValue","fromPrimitives","toPrimitives","dispose","addListener","removeListener"]} as const;
export interface _RestorableStringNative extends RestorableString {
readonly [_flaxDartTypeValue]: _RestorableStringNative;

initWithValue(value: string): void;
didUpdateValue(oldValue: string | null): void;
createDefaultValue(): string;
fromPrimitives(serialized: unknown | null): string;
toPrimitives(): {};
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): string;
get enabled(): boolean;
get state(): upstream4.State<upstream5.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: string);
}
export abstract class _RestorableStringNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableString>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableString;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableString", readonly [], false];
constructor(defaultValue: string) { super(_RestorableStringProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorableStringNative.prototype, _RestorableStringProxy);
export namespace _RestorableStringFactory { export function implement(args: [defaultValue: string], implementation: {}): RestorableString {
return constructProxy(_RestorableStringProxy, args, implementation) as RestorableString; } }
const _RestorableStringBinding = _flaxProxyFactory(_RestorableStringFactory, _RestorableStringNative) as unknown as typeof _RestorableStringFactory & (new(defaultValue: string) => _RestorableStringNative);
export const RestorableString: typeof _RestorableStringBinding & _FlaxInstanceType<RestorableString> & _FlaxDartType<RestorableString, readonly ["class", "flax.core/sdk_widgets#type:RestorableString", readonly [], false]> = _flaxBindInstanceType<RestorableString, typeof _RestorableStringBinding>(_RestorableStringBinding, "flax.core/sdk_widgets#type:RestorableString", ["package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue","package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN","flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorableStringBinding & _FlaxInstanceType<RestorableString> & _FlaxDartType<RestorableString, readonly ["class", "flax.core/sdk_widgets#type:RestorableString", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableString" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
