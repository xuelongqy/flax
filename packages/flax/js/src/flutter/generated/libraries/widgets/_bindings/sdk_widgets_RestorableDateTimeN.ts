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
export interface RestorableDateTimeN extends Omit<upstream0.RestorableValue<upstream1.DateTime | null>, _flaxOwnMembers0>, Omit<upstream2.RestorableProperty<upstream1.DateTime | null>, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.DateTime | null>>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.DateTime | null> | keyof upstream2.RestorableProperty<upstream1.DateTime | null>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableValue<upstream1.DateTime | null> | keyof upstream2.RestorableProperty<upstream1.DateTime | null> | keyof upstream3.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableDateTimeN": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue": readonly [upstream1.DateTime | null] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [upstream1.DateTime | null] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableDateTimeN: unique symbol;
readonly [_flaxDartTypeValue]: RestorableDateTimeN;

get value(): upstream1.DateTime | null;
readonly enabled: boolean;
readonly state: upstream5.State<upstream6.StatefulWidget>;
readonly isRegistered: boolean;
readonly hasListeners: boolean;
initWithValue(value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): void;
didUpdateValue(oldValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): void;
createDefaultValue(): upstream1.DateTime | null;
fromPrimitives(data: unknown | null): upstream1.DateTime | null;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set value(value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null);
}
defineObject("flax.core/sdk_widgets#type:RestorableDateTimeN", ["value","enabled","state","isRegistered","hasListeners"], ["value"], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableDateTimeN", "object", {"initWithValue":_flaxMemberParameters38,"didUpdateValue":_flaxMemberParameters364,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters366,"toPrimitives":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _RestorableDateTimeNFactory(defaultValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): RestorableDateTimeN {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RestorableDateTimeN", "", [{"name":"defaultValue","required":true,"positional":true}], [defaultValue], {}) as RestorableDateTimeN;
}
const _RestorableDateTimeNProxy = {type: "flax.core/sdk_widgets#type:RestorableDateTimeN", parameters: _flaxMemberParameters35, constructors: {"": _flaxMemberParameters35}, methods: {"initWithValue":_flaxMemberParameters38,"didUpdateValue":_flaxMemberParameters364,"createDefaultValue":_flaxMemberParameters2,"fromPrimitives":_flaxMemberParameters366,"toPrimitives":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: ["value"], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","set:value","initWithValue","didUpdateValue","createDefaultValue","fromPrimitives","toPrimitives","dispose","addListener","removeListener"]} as const;
export interface _RestorableDateTimeNNative extends RestorableDateTimeN {
readonly [_flaxDartTypeValue]: _RestorableDateTimeNNative;

initWithValue(value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): void;
didUpdateValue(oldValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null): void;
createDefaultValue(): upstream1.DateTime | null;
fromPrimitives(data: unknown | null): upstream1.DateTime | null;
toPrimitives(): unknown | null;
dispose(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): upstream1.DateTime | null;
get enabled(): boolean;
get state(): upstream5.State<upstream6.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
set value(value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null);
}
export abstract class _RestorableDateTimeNNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableDateTimeN>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableDateTimeN;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableDateTimeN", readonly [], false];
constructor(defaultValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null) { super(_RestorableDateTimeNProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_RestorableDateTimeNNative.prototype, _RestorableDateTimeNProxy);
export namespace _RestorableDateTimeNFactory { export function implement(args: [defaultValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null], implementation: {}): RestorableDateTimeN {
return constructProxy(_RestorableDateTimeNProxy, args, implementation) as RestorableDateTimeN; } }
const _RestorableDateTimeNBinding = _flaxProxyFactory(_RestorableDateTimeNFactory, _RestorableDateTimeNNative) as unknown as typeof _RestorableDateTimeNFactory & (new(defaultValue: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null) => _RestorableDateTimeNNative);
export const RestorableDateTimeN: typeof _RestorableDateTimeNBinding & _FlaxInstanceType<RestorableDateTimeN> & _FlaxDartType<RestorableDateTimeN, readonly ["class", "flax.core/sdk_widgets#type:RestorableDateTimeN", readonly [], false]> = _flaxBindInstanceType<RestorableDateTimeN, typeof _RestorableDateTimeNBinding>(_RestorableDateTimeNBinding, "flax.core/sdk_widgets#type:RestorableDateTimeN", ["flax.core/sdk_widgets#type:RestorableValue","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _RestorableDateTimeNBinding & _FlaxInstanceType<RestorableDateTimeN> & _FlaxDartType<RestorableDateTimeN, readonly ["class", "flax.core/sdk_widgets#type:RestorableDateTimeN", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "didUpdateValue" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "dispose" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableDateTimeN" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableValue" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
