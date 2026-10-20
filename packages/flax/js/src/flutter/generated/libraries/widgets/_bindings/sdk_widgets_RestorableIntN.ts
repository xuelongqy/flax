// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableNumN';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableNumN';
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
import { _flaxMemberParameters2, _flaxMemberParameters321, _flaxMemberParameters322, _flaxMemberParameters33, _flaxMemberParameters30, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableIntN extends Omit<upstream0.RestorableNumN<number | null>, _flaxOwnMembers0>, Omit<upstream1.RestorableValue<number | null>, _flaxOwnMembers0 | keyof upstream0.RestorableNumN<number | null>>, Omit<upstream2.RestorableProperty<number | null>, _flaxOwnMembers0 | keyof upstream0.RestorableNumN<number | null> | keyof upstream1.RestorableValue<number | null>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableNumN<number | null> | keyof upstream1.RestorableValue<number | null> | keyof upstream2.RestorableProperty<number | null>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableNumN<number | null> | keyof upstream1.RestorableValue<number | null> | keyof upstream2.RestorableProperty<number | null> | keyof upstream3.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableIntN": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNumN": readonly [number | null] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN": readonly [number | null] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [number | null] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [number | null] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableIntN: unique symbol;
readonly [_flaxDartTypeValue]: RestorableIntN;

get value(): number | null;
readonly enabled: boolean;
readonly state: upstream5.State<upstream6.StatefulWidget>;
readonly isRegistered: boolean;
readonly hasListeners: boolean;
createDefaultValue(): number | null;
didUpdateValue(oldValue: number | null): void;
fromPrimitives(serialized: unknown | null): number | null;
toPrimitives(): unknown | null;
initWithValue(value: number | null): void;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set value(value: number | null);
}
defineObject("flax.core/sdk_widgets#type:RestorableIntN", ["value","enabled","state","isRegistered","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableIntN", "object", {"createDefaultValue":_flaxMemberParameters2,"didUpdateValue":_flaxMemberParameters321,"fromPrimitives":_flaxMemberParameters322,"toPrimitives":_flaxMemberParameters2,"initWithValue":_flaxMemberParameters33}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _RestorableIntNFactory(defaultValue: number | null): RestorableIntN {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RestorableIntN", "", [{"name":"defaultValue","required":true,"positional":true}], [defaultValue], {}) as RestorableIntN;
}
const _RestorableIntNProxy = {type: "flax.core/sdk_widgets#type:RestorableIntN", parameters: _flaxMemberParameters30, constructors: {"": _flaxMemberParameters30}, methods: {"createDefaultValue":_flaxMemberParameters2,"didUpdateValue":_flaxMemberParameters321,"fromPrimitives":_flaxMemberParameters322,"toPrimitives":_flaxMemberParameters2,"initWithValue":_flaxMemberParameters33,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","createDefaultValue","didUpdateValue","fromPrimitives","toPrimitives","initWithValue","dispose","addListener","removeListener"]} as const;
export interface _RestorableIntNNative extends RestorableIntN {
readonly [_flaxDartTypeValue]: _RestorableIntNNative;

createDefaultValue(): number | null;
didUpdateValue(oldValue: number | null): void;
fromPrimitives(serialized: unknown | null): number | null;
toPrimitives(): unknown | null;
initWithValue(value: number | null): void;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): number | null;
get enabled(): boolean;
get state(): upstream5.State<upstream6.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: number | null);
}
export abstract class _RestorableIntNNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableIntN>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableIntN;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableIntN", readonly [], false];
constructor(defaultValue: number | null) { super(_RestorableIntNProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorableIntNNative.prototype, _RestorableIntNProxy);
export namespace _RestorableIntNFactory { export function implement(args: [defaultValue: number | null], implementation: {}): RestorableIntN {
return constructProxy(_RestorableIntNProxy, args, implementation) as RestorableIntN; } }
const _RestorableIntNBinding = _flaxProxyFactory(_RestorableIntNFactory, _RestorableIntNNative) as unknown as typeof _RestorableIntNFactory & (new(defaultValue: number | null) => _RestorableIntNNative);
export const RestorableIntN: typeof _RestorableIntNBinding & _FlaxInstanceType<RestorableIntN> & _FlaxDartType<RestorableIntN, readonly ["class", "flax.core/sdk_widgets#type:RestorableIntN", readonly [], false]> = _flaxBindInstanceType<RestorableIntN, typeof _RestorableIntNBinding>(_RestorableIntNBinding, "flax.core/sdk_widgets#type:RestorableIntN", ["flax.core/sdk_widgets#type:RestorableNumN","package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN","flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorableIntNBinding & _FlaxInstanceType<RestorableIntN> & _FlaxDartType<RestorableIntN, readonly ["class", "flax.core/sdk_widgets#type:RestorableIntN", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "createDefaultValue" | "didUpdateValue" | "fromPrimitives" | "toPrimitives" | "initWithValue" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableIntN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableNumN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::_RestorablePrimitiveValueN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
