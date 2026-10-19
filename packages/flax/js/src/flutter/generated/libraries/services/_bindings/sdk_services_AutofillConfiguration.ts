// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { _flaxMemberParameters0, _flaxMemberParameters15 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutofillConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [] }> { readonly __AutofillConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: AutofillConfiguration;

}
defineObject("flax.core/sdk_services#type:AutofillConfiguration", ["enabled","uniqueIdentifier","autofillHints","currentEditingValue","hintText"], [], _flaxBindingMethods("flax.core/sdk_services#type:AutofillConfiguration", "object", {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
const _AutofillConfigurationProxy = {type: "flax.core/sdk_services#type:AutofillConfiguration", parameters: _flaxMemberParameters15, constructors: {"": _flaxMemberParameters15}, methods: {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["enabled","uniqueIdentifier","autofillHints","currentEditingValue","hintText"], setters: [], contextMembers: [], superMembers: ["get:enabled","get:uniqueIdentifier","get:autofillHints","get:currentEditingValue","get:hintText","toJson","toString"]} as const;
export interface AutofillConfiguration {
readonly [_flaxDartTypeValue]: AutofillConfiguration;

toJson(): DartMap<string, unknown | null> | null;
toString(): string;
get enabled(): boolean;
get uniqueIdentifier(): string;
get autofillHints(): DartList<string>;
get currentEditingValue(): upstream0.TextEditingValue;
get hintText(): string | null;
}
export abstract class AutofillConfiguration extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AutofillConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AutofillConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AutofillConfiguration", readonly [], false];
constructor(options: {uniqueIdentifier: string; autofillHints: DartListInput<string, string>; currentEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>; hintText?: string | null | undefined}) { super(_AutofillConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AutofillConfiguration.prototype, _AutofillConfigurationProxy);
export namespace AutofillConfiguration { export function implement(args: [options: {uniqueIdentifier: string; autofillHints: DartListInput<string, string>; currentEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>; hintText?: string | null | undefined}], implementation: {}): AutofillConfiguration {
return constructProxy(_AutofillConfigurationProxy, args, implementation) as AutofillConfiguration; } }
export namespace AutofillConfiguration { export declare const disabled: AutofillConfiguration; }
_flaxDefineStaticGetters(AutofillConfiguration, "flax.core/sdk_services#read:AutofillConfiguration.", ["disabled"]);
_flaxBindInstanceType<AutofillConfiguration, typeof AutofillConfiguration>(AutofillConfiguration, "flax.core/sdk_services#type:AutofillConfiguration", ["dart:core::Object"]);
