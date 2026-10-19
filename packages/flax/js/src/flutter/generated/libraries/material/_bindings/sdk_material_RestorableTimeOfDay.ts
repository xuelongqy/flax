// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
import '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
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
import { _flaxMemberParameters48, _flaxMemberParameters242, _flaxMemberParameters2, _flaxMemberParameters243, _flaxMemberParameters244, _flaxMemberParameters52 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableTimeOfDay extends Omit<upstream0.RestorableValue<upstream1.TimeOfDay>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<upstream1.TimeOfDay>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.TimeOfDay>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.TimeOfDay> | keyof upstream2.RestorableProperty<upstream1.TimeOfDay>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.TimeOfDay> | keyof upstream2.RestorableProperty<upstream1.TimeOfDay> | keyof upstream3.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::RestorableTimeOfDay": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [upstream1.TimeOfDay] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [upstream1.TimeOfDay] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableTimeOfDay: unique symbol;
readonly [_flaxDartTypeValue]: RestorableTimeOfDay;

}
defineObject("flax.core/sdk_material#type:RestorableTimeOfDay", ["value","enabled","state","isRegistered","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_material#type:RestorableTimeOfDay", "object", {"initWithValue":_flaxMemberParameters48,"didUpdateValue":_flaxMemberParameters242,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters243,"toPrimitives":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _RestorableTimeOfDayProxy = {type: "flax.core/sdk_material#type:RestorableTimeOfDay", parameters: _flaxMemberParameters244, constructors: {"": _flaxMemberParameters244}, methods: {"initWithValue":_flaxMemberParameters48,"didUpdateValue":_flaxMemberParameters242,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters243,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters52,"removeListener":_flaxMemberParameters52}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","initWithValue","didUpdateValue","createDefaultValue","fromPrimitives","toPrimitives","dispose","addListener","removeListener"]} as const;
export interface RestorableTimeOfDay {
readonly [_flaxDartTypeValue]: RestorableTimeOfDay;

initWithValue(value: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay] }>): void;
didUpdateValue(oldValue: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay] }> | null): void;
createDefaultValue(): upstream1.TimeOfDay;
fromPrimitives(data: unknown | null): upstream1.TimeOfDay;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): upstream1.TimeOfDay;
get enabled(): boolean;
get state(): upstream5.State<upstream6.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay] }>);
}
export abstract class RestorableTimeOfDay extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableTimeOfDay>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableTimeOfDay;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RestorableTimeOfDay", readonly [], false];
constructor(defaultValue: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay] }>) { super(_RestorableTimeOfDayProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RestorableTimeOfDay.prototype, _RestorableTimeOfDayProxy);
export namespace RestorableTimeOfDay { export function implement(args: [defaultValue: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.TimeOfDay] }>], implementation: {}): RestorableTimeOfDay {
return constructProxy(_RestorableTimeOfDayProxy, args, implementation) as RestorableTimeOfDay; } }
_flaxBindInstanceType<RestorableTimeOfDay, typeof RestorableTimeOfDay>(RestorableTimeOfDay, "flax.core/sdk_material#type:RestorableTimeOfDay", ["flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/material/time.dart::RestorableTimeOfDay" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
