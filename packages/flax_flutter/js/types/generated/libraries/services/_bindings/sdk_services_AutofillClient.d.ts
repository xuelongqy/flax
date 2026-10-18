import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AutofillClient extends Readonly<{
    "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
}> {
    readonly __AutofillClient: unique symbol;
    readonly [_flaxDartTypeValue]: AutofillClient;
    readonly autofillId: string;
    readonly textInputConfiguration: upstream0.TextInputConfiguration;
    autofill(newEditingValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): void;
}
export declare namespace _AutofillClientFactory {
    function implement(args: [], implementation: {
        autofill: ((newEditingValue: upstream1.TextEditingValue) => void);
        get autofillId(): string;
        get textInputConfiguration(): Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [];
        }>;
    }): AutofillClient;
}
export declare const AutofillClient: typeof _AutofillClientFactory & _FlaxInstanceType<AutofillClient> & _FlaxDartType<AutofillClient, readonly ["class", "flax.core/sdk_services#type:AutofillClient", readonly [], false]>;
