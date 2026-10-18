import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface AutofillConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [];
}> {
    readonly __AutofillConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: AutofillConfiguration;
}
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
export declare abstract class AutofillConfiguration extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AutofillConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AutofillConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:AutofillConfiguration", readonly [], false];
    constructor(options: {
        uniqueIdentifier: string;
        autofillHints: DartListInput<string, string>;
        currentEditingValue: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
        }>;
        hintText?: string | null | undefined;
    });
}
export declare namespace AutofillConfiguration {
    function implement(args: [options: {
        uniqueIdentifier: string;
        autofillHints: DartListInput<string, string>;
        currentEditingValue: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
        }>;
        hintText?: string | null | undefined;
    }], implementation: {}): AutofillConfiguration;
}
export declare namespace AutofillConfiguration {
    const disabled: AutofillConfiguration;
}
