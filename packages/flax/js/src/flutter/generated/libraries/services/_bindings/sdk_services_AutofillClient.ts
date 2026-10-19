// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
const _flaxMemberParameters0 = [{"name":"newEditingValue","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutofillClient extends Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }> { readonly __AutofillClient: unique symbol;
readonly [_flaxDartTypeValue]: AutofillClient;

readonly autofillId: string;
readonly textInputConfiguration: upstream0.TextInputConfiguration;
autofill(newEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): void;
}
defineObject("flax.core/sdk_services#type:AutofillClient", ["autofillId","textInputConfiguration"], [], _flaxBindingMethods("flax.core/sdk_services#type:AutofillClient", "object", {"autofill":_flaxMemberParameters0}, {}), []);
const _AutofillClientProxy = {type: "flax.core/sdk_services#type:AutofillClient", parameters: _flaxMemberParameters1, constructors: {}, methods: {"autofill":_flaxMemberParameters0}, getters: ["autofillId","textInputConfiguration"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _AutofillClientFactory { export function implement(args: [], implementation: {autofill: ((newEditingValue: upstream1.TextEditingValue) => void); get autofillId(): string; get textInputConfiguration(): Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [] }>}): AutofillClient {
return constructProxy(_AutofillClientProxy, args, implementation) as AutofillClient; } }
export const AutofillClient: typeof _AutofillClientFactory & _FlaxInstanceType<AutofillClient> & _FlaxDartType<AutofillClient, readonly ["class", "flax.core/sdk_services#type:AutofillClient", readonly [], false]> = _flaxBindInstanceType<AutofillClient, typeof _AutofillClientFactory>(_AutofillClientFactory, "flax.core/sdk_services#type:AutofillClient", ["dart:core::Object"]) as typeof _AutofillClientFactory & _FlaxInstanceType<AutofillClient> & _FlaxDartType<AutofillClient, readonly ["class", "flax.core/sdk_services#type:AutofillClient", readonly [], false]>;
