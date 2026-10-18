// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutofillScopeMixin extends Omit<upstream0.AutofillScope, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScopeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScope": readonly [] }> { readonly __AutofillScopeMixin: unique symbol;
readonly [_flaxDartTypeValue]: AutofillScopeMixin;

readonly autofillClients: DartIterable<upstream1.AutofillClient>;
getAutofillClient(autofillId: string): upstream1.AutofillClient | null;
attach(trigger: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>, configuration: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [] }>): upstream2.TextInputConnection;
}
defineObject("flax.core/sdk_services#type:AutofillScopeMixin", ["autofillClients"], [], _flaxBindingMethods("flax.core/sdk_services#type:AutofillScopeMixin", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:AutofillScope");
export const AutofillScopeMixin: object & _FlaxInstanceType<AutofillScopeMixin> & _FlaxDartType<AutofillScopeMixin, readonly ["class", "flax.core/sdk_services#type:AutofillScopeMixin", readonly [], false]> = _flaxBindInstanceType<AutofillScopeMixin, object>({}, "flax.core/sdk_services#type:AutofillScopeMixin", ["dart:core::Object","flax.core/sdk_services#type:AutofillScope"]) as object & _FlaxInstanceType<AutofillScopeMixin> & _FlaxDartType<AutofillScopeMixin, readonly ["class", "flax.core/sdk_services#type:AutofillScopeMixin", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "autofillClients" | "getAutofillClient" | "attach" | "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScopeMixin" | "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScope";
