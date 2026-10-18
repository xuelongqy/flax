import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AutofillScope extends Readonly<{
    "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScope": readonly [];
}> {
    readonly __AutofillScope: unique symbol;
    readonly [_flaxDartTypeValue]: AutofillScope;
    readonly autofillClients: DartIterable<upstream0.AutofillClient>;
    getAutofillClient(autofillId: string): upstream0.AutofillClient | null;
    attach(trigger: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
    }>, configuration: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [];
    }>): upstream1.TextInputConnection;
}
export declare namespace _AutofillScopeFactory {
    function implement(args: [], implementation: {
        getAutofillClient: ((autofillId: string) => Readonly<{
            "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
        }> | null);
        attach: ((trigger: upstream2.TextInputClient, configuration: upstream3.TextInputConfiguration) => Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConnection": readonly [];
        }>);
        get autofillClients(): DartIterableInput<upstream0.AutofillClient, Readonly<{
            "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
        }>>;
    }): AutofillScope;
}
export declare const AutofillScope: typeof _AutofillScopeFactory & _FlaxInstanceType<AutofillScope> & _FlaxDartType<AutofillScope, readonly ["class", "flax.core/sdk_services#type:AutofillScope", readonly [], false]>;
