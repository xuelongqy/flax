// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
const _flaxMemberParameters0 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"data","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorableTextEditingController extends Omit<upstream0.RestorableChangeNotifier<upstream1.TextEditingController>, _flaxOwnMembers0>, Omit<upstream2.RestorableListenable<upstream1.TextEditingController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.TextEditingController>>, Omit<upstream3.RestorableProperty<upstream1.TextEditingController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.TextEditingController> | keyof upstream2.RestorableListenable<upstream1.TextEditingController>>, Omit<upstream4.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.TextEditingController> | keyof upstream2.RestorableListenable<upstream1.TextEditingController> | keyof upstream3.RestorableProperty<upstream1.TextEditingController>>, Omit<upstream5.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.TextEditingController> | keyof upstream2.RestorableListenable<upstream1.TextEditingController> | keyof upstream3.RestorableProperty<upstream1.TextEditingController> | keyof upstream4.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableTextEditingController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier": readonly [upstream1.TextEditingController] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable": readonly [upstream1.TextEditingController] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [upstream1.TextEditingController] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RestorableTextEditingController: unique symbol;
readonly [_flaxDartTypeValue]: RestorableTextEditingController;

}
defineObject("flax.core/sdk_widgets#type:RestorableTextEditingController", ["value","enabled","state","isRegistered","hasListeners"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorableTextEditingController", "object", {"initWithValue":_flaxMemberParameters0,"createDefaultValue":_flaxMemberParameters1,"fromPrimitives":_flaxMemberParameters2,"toPrimitives":_flaxMemberParameters1}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _RestorableTextEditingControllerProxy = {type: "flax.core/sdk_widgets#type:RestorableTextEditingController", parameters: _flaxMemberParameters0, constructors: {"fromValue": _flaxMemberParameters0}, methods: {"initWithValue":_flaxMemberParameters0,"dispose":_flaxMemberParameters1,"createDefaultValue":_flaxMemberParameters1,"fromPrimitives":_flaxMemberParameters2,"toPrimitives":_flaxMemberParameters1,"addListener":_flaxMemberParameters3,"removeListener":_flaxMemberParameters3}, getters: ["value","enabled","state","isRegistered","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:value","get:enabled","get:state","get:isRegistered","get:hasListeners","initWithValue","dispose","createDefaultValue","fromPrimitives","toPrimitives","addListener","removeListener"]} as const;
export interface RestorableTextEditingController {
readonly [_flaxDartTypeValue]: RestorableTextEditingController;

initWithValue(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream6.TextEditingValue] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream6.TextEditingValue] }>): void;
dispose(): void;
createDefaultValue(): upstream1.TextEditingController;
fromPrimitives(data: unknown | null): upstream1.TextEditingController;
toPrimitives(): {};
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
get value(): upstream1.TextEditingController;
get enabled(): boolean;
get state(): upstream7.State<upstream8.StatefulWidget>;
get isRegistered(): boolean;
get hasListeners(): boolean;
}
export abstract class RestorableTextEditingController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableTextEditingController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RestorableTextEditingController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableTextEditingController", readonly [], false];
constructor(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>) { super(_RestorableTextEditingControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RestorableTextEditingController.prototype, _RestorableTextEditingControllerProxy);
export namespace RestorableTextEditingController { export function implement(args: [value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>], implementation: {}): RestorableTextEditingController {
return constructProxy(_RestorableTextEditingControllerProxy, args, implementation) as RestorableTextEditingController; } }
_flaxBindInstanceType<RestorableTextEditingController, typeof RestorableTextEditingController>(RestorableTextEditingController, "flax.core/sdk_widgets#type:RestorableTextEditingController", ["flax.core/sdk_widgets#type:RestorableChangeNotifier","flax.core/sdk_widgets#type:RestorableListenable","flax.core/sdk_widgets#type:RestorableProperty","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "dispose" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableTextEditingController" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
