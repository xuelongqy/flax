// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableValue';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
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
import { _flaxMemberParameters38, _flaxMemberParameters364, _flaxMemberParameters2, _flaxMemberParameters366, _flaxMemberParameters35, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableDateTime extends Omit<upstream0.RestorableValue<upstream1.DateTime>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<upstream1.DateTime>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.DateTime>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.DateTime> | keyof upstream2.RestorableProperty<upstream1.DateTime>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.DateTime> | keyof upstream2.RestorableProperty<upstream1.DateTime> | keyof upstream3.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableDateTime": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [upstream1.DateTime] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [upstream1.DateTime] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableDateTime: unique symbol;
readonly [_flaxDartTypeValue]: RestorableDateTime;

get value(): upstream1.DateTime;
readonly enabled: boolean;
readonly state: upstream5.State<upstream6.StatefulWidget>;
readonly isRegistered: boolean;
readonly hasListeners: boolean;
initWithValue(value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): void;
didUpdateValue(oldValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): void;
createDefaultValue(): upstream1.DateTime;
fromPrimitives(data: unknown | null): upstream1.DateTime;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set value(value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>);
}
defineObject("flax.core/sdk_widgets#type:RestorableDateTime", ["value","enabled","state","isRegistered","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableDateTime", "object", {"initWithValue":_flaxMemberParameters38,"didUpdateValue":_flaxMemberParameters364,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters366,"toPrimitives":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _RestorableDateTimeFactory(defaultValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): RestorableDateTime {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RestorableDateTime", "", [{"name":"defaultValue","required":true,"positional":true}], [defaultValue], {}) as RestorableDateTime;
}
const _RestorableDateTimeProxy = {type: "flax.core/sdk_widgets#type:RestorableDateTime", parameters: _flaxMemberParameters35, constructors: {"": _flaxMemberParameters35}, methods: {"initWithValue":_flaxMemberParameters38,"didUpdateValue":_flaxMemberParameters364,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters366,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","initWithValue","didUpdateValue","createDefaultValue","fromPrimitives","toPrimitives","dispose","addListener","removeListener"]} as const;
export interface _RestorableDateTimeNative extends RestorableDateTime {
readonly [_flaxDartTypeValue]: _RestorableDateTimeNative;

initWithValue(value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>): void;
didUpdateValue(oldValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): void;
createDefaultValue(): upstream1.DateTime;
fromPrimitives(data: unknown | null): upstream1.DateTime;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): upstream1.DateTime;
get enabled(): boolean;
get state(): upstream5.State<upstream6.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>);
}
export abstract class _RestorableDateTimeNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableDateTime>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableDateTime;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableDateTime", readonly [], false];
constructor(defaultValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>) { super(_RestorableDateTimeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorableDateTimeNative.prototype, _RestorableDateTimeProxy);
export namespace _RestorableDateTimeFactory { export function implement(args: [defaultValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>], implementation: {}): RestorableDateTime {
return constructProxy(_RestorableDateTimeProxy, args, implementation) as RestorableDateTime; } }
const _RestorableDateTimeBinding = _flaxProxyFactory(_RestorableDateTimeFactory, _RestorableDateTimeNative) as unknown as typeof _RestorableDateTimeFactory & (new(defaultValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>) => _RestorableDateTimeNative);
export const RestorableDateTime: typeof _RestorableDateTimeBinding & _FlaxInstanceType<RestorableDateTime> & _FlaxDartType<RestorableDateTime, readonly ["class", "flax.core/sdk_widgets#type:RestorableDateTime", readonly [], false]> = _flaxBindInstanceType<RestorableDateTime, typeof _RestorableDateTimeBinding>(_RestorableDateTimeBinding, "flax.core/sdk_widgets#type:RestorableDateTime", ["flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorableDateTimeBinding & _FlaxInstanceType<RestorableDateTime> & _FlaxDartType<RestorableDateTime, readonly ["class", "flax.core/sdk_widgets#type:RestorableDateTime", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableDateTime" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
