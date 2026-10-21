// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { _flaxMemberParameters0, _flaxMemberParameters17 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutofillConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [] }> { readonly __AutofillConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: AutofillConfiguration;

readonly enabled: boolean;
readonly uniqueIdentifier: string;
readonly autofillHints: DartList<string>;
readonly currentEditingValue: upstream0.TextEditingValue;
readonly hintText: string | null;
toJson(): DartMap<string, unknown | null> | null;
toString(): string;
}
defineObject("flax.core/sdk_services#type:AutofillConfiguration", ["enabled","uniqueIdentifier","autofillHints","currentEditingValue","hintText"], [], _flaxBindingMethods("flax.core/sdk_services#type:AutofillConfiguration", "object", {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
export function _AutofillConfigurationFactory(options: { uniqueIdentifier: string; autofillHints: DartListInput<string, string>; currentEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>; hintText?: string | null | undefined }): AutofillConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:AutofillConfiguration", "", [{"name":"uniqueIdentifier","required":true},{"name":"autofillHints","required":true},{"name":"currentEditingValue","required":true},{"name":"hintText"}], [], options) as AutofillConfiguration;
}
const _AutofillConfigurationProxy = {type: "flax.core/sdk_services#type:AutofillConfiguration", parameters: _flaxMemberParameters17, constructors: {"": _flaxMemberParameters17}, methods: {"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["enabled","uniqueIdentifier","autofillHints","currentEditingValue","hintText"], setters: [], contextMembers: [], superMembers: ["get:enabled","get:uniqueIdentifier","get:autofillHints","get:currentEditingValue","get:hintText","toJson","toString"]} as const;
export interface _AutofillConfigurationNative extends AutofillConfiguration {
readonly [_flaxDartTypeValue]: _AutofillConfigurationNative;

toJson(): DartMap<string, unknown | null> | null;
toString(): string;
get enabled(): boolean;
get uniqueIdentifier(): string;
get autofillHints(): DartList<string>;
get currentEditingValue(): upstream0.TextEditingValue;
get hintText(): string | null;
}
export abstract class _AutofillConfigurationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AutofillConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AutofillConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AutofillConfiguration", readonly [], false];
constructor(options: {uniqueIdentifier: string; autofillHints: DartListInput<string, string>; currentEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>; hintText?: string | null | undefined}) { super(_AutofillConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_AutofillConfigurationNative.prototype, _AutofillConfigurationProxy);
export namespace _AutofillConfigurationFactory { export function implement(args: [options: {uniqueIdentifier: string; autofillHints: DartListInput<string, string>; currentEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>; hintText?: string | null | undefined}], implementation: {}): AutofillConfiguration {
return constructProxy(_AutofillConfigurationProxy, args, implementation) as AutofillConfiguration; } }
const _AutofillConfigurationBinding = _flaxProxyFactory(_AutofillConfigurationFactory, _AutofillConfigurationNative) as unknown as typeof _AutofillConfigurationFactory & (new(options: {uniqueIdentifier: string; autofillHints: DartListInput<string, string>; currentEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>; hintText?: string | null | undefined}) => _AutofillConfigurationNative);
export namespace _AutofillConfigurationFactory { export declare const disabled: AutofillConfiguration; }
_flaxDefineStaticGetters(_AutofillConfigurationFactory, "flax.core/sdk_services#read:AutofillConfiguration.", ["disabled"]);
export const AutofillConfiguration: typeof _AutofillConfigurationBinding & _FlaxInstanceType<AutofillConfiguration> & _FlaxDartType<AutofillConfiguration, readonly ["class", "flax.core/sdk_services#type:AutofillConfiguration", readonly [], false]> = _flaxBindInstanceType<AutofillConfiguration, typeof _AutofillConfigurationBinding>(_AutofillConfigurationBinding, "flax.core/sdk_services#type:AutofillConfiguration", ["dart:core::Object"]) as typeof _AutofillConfigurationBinding & _FlaxInstanceType<AutofillConfiguration> & _FlaxDartType<AutofillConfiguration, readonly ["class", "flax.core/sdk_services#type:AutofillConfiguration", readonly [], false]>;
