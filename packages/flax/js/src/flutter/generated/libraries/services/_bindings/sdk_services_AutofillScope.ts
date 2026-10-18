// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
const _flaxMemberParameters0 = [{"name":"autofillId","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"trigger","required":true,"positional":true},{"name":"configuration","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutofillScope extends Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScope": readonly [] }> { readonly __AutofillScope: unique symbol;
readonly [_flaxDartTypeValue]: AutofillScope;

readonly autofillClients: DartIterable<upstream0.AutofillClient>;
getAutofillClient(autofillId: string): upstream0.AutofillClient | null;
attach(trigger: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>, configuration: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [] }>): upstream1.TextInputConnection;
}
defineObject("flax.core/sdk_services#type:AutofillScope", ["autofillClients"], [], _flaxBindingMethods("flax.core/sdk_services#type:AutofillScope", "object", {"getAutofillClient":_flaxMemberParameters0,"attach":_flaxMemberParameters1}, {}), []);
const _AutofillScopeProxy = {type: "flax.core/sdk_services#type:AutofillScope", parameters: [], constructors: {}, methods: {"getAutofillClient":_flaxMemberParameters0,"attach":_flaxMemberParameters1}, getters: ["autofillClients"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _AutofillScopeFactory { export function implement(args: [], implementation: {getAutofillClient: ((autofillId: string) => Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }> | null); attach: ((trigger: upstream2.TextInputClient, configuration: upstream3.TextInputConfiguration) => Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConnection": readonly [] }>); get autofillClients(): DartIterableInput<upstream0.AutofillClient, Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }>>}): AutofillScope {
return constructProxy(_AutofillScopeProxy, args, implementation) as AutofillScope; } }
export const AutofillScope: typeof _AutofillScopeFactory & _FlaxInstanceType<AutofillScope> & _FlaxDartType<AutofillScope, readonly ["class", "flax.core/sdk_services#type:AutofillScope", readonly [], false]> = _flaxBindInstanceType<AutofillScope, typeof _AutofillScopeFactory>(_AutofillScopeFactory, "flax.core/sdk_services#type:AutofillScope", ["dart:core::Object"]) as typeof _AutofillScopeFactory & _FlaxInstanceType<AutofillScope> & _FlaxDartType<AutofillScope, readonly ["class", "flax.core/sdk_services#type:AutofillScope", readonly [], false]>;
