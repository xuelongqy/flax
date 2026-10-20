import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AutofillConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [];
}> {
    readonly __AutofillConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: AutofillConfiguration;
    readonly enabled: boolean;
    readonly uniqueIdentifier: string;
    readonly autofillHints: DartList<string>;
    readonly currentEditingValue: upstream0.TextEditingValue;
    readonly hintText: string | null;
    toJson(): DartMap<string, unknown | null> | null;
    toString(): string;
}
export declare function _AutofillConfigurationFactory(options: {
    uniqueIdentifier: string;
    autofillHints: DartListInput<string, string>;
    currentEditingValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>;
    hintText?: string | null | undefined;
}): AutofillConfiguration;
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
export declare abstract class _AutofillConfigurationNative extends _FlaxProxyBase {
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
export declare namespace _AutofillConfigurationFactory {
    function implement(args: [options: {
        uniqueIdentifier: string;
        autofillHints: DartListInput<string, string>;
        currentEditingValue: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
        }>;
        hintText?: string | null | undefined;
    }], implementation: {}): AutofillConfiguration;
}
declare const _AutofillConfigurationBinding: typeof _AutofillConfigurationFactory & (new (options: {
    uniqueIdentifier: string;
    autofillHints: DartListInput<string, string>;
    currentEditingValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>;
    hintText?: string | null | undefined;
}) => _AutofillConfigurationNative);
export declare namespace _AutofillConfigurationFactory {
    const disabled: AutofillConfiguration;
}
export declare const AutofillConfiguration: typeof _AutofillConfigurationBinding & _FlaxInstanceType<AutofillConfiguration> & _FlaxDartType<AutofillConfiguration, readonly ["class", "flax.core/sdk_services#type:AutofillConfiguration", readonly [], false]>;
export {};
