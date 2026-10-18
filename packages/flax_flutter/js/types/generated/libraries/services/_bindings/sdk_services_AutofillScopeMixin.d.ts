import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AutofillScopeMixin extends Omit<upstream0.AutofillScope, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScopeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScope": readonly [];
}> {
    readonly __AutofillScopeMixin: unique symbol;
    readonly [_flaxDartTypeValue]: AutofillScopeMixin;
    readonly autofillClients: DartIterable<upstream1.AutofillClient>;
    getAutofillClient(autofillId: string): upstream1.AutofillClient | null;
    attach(trigger: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
    }>, configuration: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [];
    }>): upstream2.TextInputConnection;
}
export declare const AutofillScopeMixin: object & _FlaxInstanceType<AutofillScopeMixin> & _FlaxDartType<AutofillScopeMixin, readonly ["class", "flax.core/sdk_services#type:AutofillScopeMixin", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "autofillClients" | "getAutofillClient" | "attach" | "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScopeMixin" | "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScope";
export {};
