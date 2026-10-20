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
export interface RestorableBool extends Omit<upstream0.RestorableValue<boolean>, _flaxOwnMembers0>, Omit<upstream1.RestorableProperty<boolean>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<boolean>>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<boolean> | keyof upstream1.RestorableProperty<boolean>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<boolean> | keyof upstream1.RestorableProperty<boolean> | keyof upstream2.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableBool": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue": readonly [boolean] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [boolean] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [boolean] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [boolean] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableBool: unique symbol;
readonly [_flaxDartTypeValue]: RestorableBool;

get value(): boolean;
readonly enabled: boolean;
readonly state: upstream4.State<upstream5.StatefulWidget>;
readonly isRegistered: boolean;
readonly hasListeners: boolean;
initWithValue(value: boolean): void;
didUpdateValue(oldValue: boolean | null): void;
createDefaultValue(): boolean;
fromPrimitives(serialized: unknown | null): boolean;
toPrimitives(): {};
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set value(value: boolean);
}
defineObject("flax.core/sdk_widgets#type:RestorableBool", ["value","enabled","state","isRegistered","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableBool", "object", {"initWithValue":_flaxMemberParameters33,"didUpdateValue":_flaxMemberParameters321,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters322,"toPrimitives":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _RestorableBoolFactory(defaultValue: boolean): RestorableBool {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RestorableBool", "", [{"name":"defaultValue","required":true,"positional":true}], [defaultValue], {}) as RestorableBool;
}
const _RestorableBoolProxy = {type: "flax.core/sdk_widgets#type:RestorableBool", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"initWithValue":_flaxMemberParameters33,"didUpdateValue":_flaxMemberParameters321,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters322,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","initWithValue","didUpdateValue","createDefaultValue","fromPrimitives","toPrimitives","dispose","addListener","removeListener"]} as const;
export interface _RestorableBoolNative extends RestorableBool {
readonly [_flaxDartTypeValue]: _RestorableBoolNative;

initWithValue(value: boolean): void;
didUpdateValue(oldValue: boolean | null): void;
createDefaultValue(): boolean;
fromPrimitives(serialized: unknown | null): boolean;
toPrimitives(): {};
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): boolean;
get enabled(): boolean;
get state(): upstream4.State<upstream5.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: boolean);
}
export abstract class _RestorableBoolNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableBool>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableBool;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableBool", readonly [], false];
constructor(defaultValue: boolean) { super(_RestorableBoolProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorableBoolNative.prototype, _RestorableBoolProxy);
export namespace _RestorableBoolFactory { export function implement(args: [defaultValue: boolean], implementation: {}): RestorableBool {
return constructProxy(_RestorableBoolProxy, args, implementation) as RestorableBool; } }
const _RestorableBoolBinding = _flaxProxyFactory(_RestorableBoolFactory, _RestorableBoolNative) as unknown as typeof _RestorableBoolFactory & (new(defaultValue: boolean) => _RestorableBoolNative);
export const RestorableBool: typeof _RestorableBoolBinding & _FlaxInstanceType<RestorableBool> & _FlaxDartType<RestorableBool, readonly ["class", "flax.core/sdk_widgets#type:RestorableBool", readonly [], false]> = _flaxBindInstanceType<RestorableBool, typeof _RestorableBoolBinding>(_RestorableBoolBinding, "flax.core/sdk_widgets#type:RestorableBool", ["package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue","package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN","flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorableBoolBinding & _FlaxInstanceType<RestorableBool> & _FlaxDartType<RestorableBool, readonly ["class", "flax.core/sdk_widgets#type:RestorableBool", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableBool" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValue" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
