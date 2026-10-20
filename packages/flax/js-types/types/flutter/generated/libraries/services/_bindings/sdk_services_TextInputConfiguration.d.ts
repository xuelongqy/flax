import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_SmartDashesType';
import '@flax/flutter/services/_bindings/sdk_services_SmartDashesType';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_SmartQuotesType';
import '@flax/flutter/services/_bindings/sdk_services_SmartQuotesType';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_AutofillConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_AutofillConfiguration';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextInputConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [];
}> {
    readonly __TextInputConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: TextInputConfiguration;
    readonly viewId: number | null;
    readonly inputType: upstream0.TextInputType;
    readonly readOnly: boolean;
    readonly obscureText: boolean;
    readonly autocorrect: boolean;
    readonly autofillConfiguration: upstream6.AutofillConfiguration;
    readonly smartDashesType: upstream1.SmartDashesType;
    readonly smartQuotesType: upstream2.SmartQuotesType;
    readonly enableSuggestions: boolean;
    readonly enableInteractiveSelection: boolean;
    readonly actionLabel: string | null;
    readonly inputAction: upstream3.TextInputAction;
    readonly textCapitalization: upstream5.TextCapitalization;
    readonly keyboardAppearance: upstream4.Brightness;
    readonly enableIMEPersonalizedLearning: boolean;
    readonly allowedMimeTypes: DartList<string>;
    readonly hintLocales: DartList<upstream7.Locale> | null;
    readonly enableInlinePrediction: boolean | null;
    readonly enableDeltaModel: boolean;
    copyWith(options?: {
        actionLabel?: string | null | undefined;
        allowedMimeTypes?: DartListInput<string, string> | null | undefined;
        autocorrect?: boolean | null | undefined;
        autofillConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [];
        }> | null | undefined;
        enableDeltaModel?: boolean | null | undefined;
        enableIMEPersonalizedLearning?: boolean | null | undefined;
        enableInlinePrediction?: boolean | null | undefined;
        enableInteractiveSelection?: boolean | null | undefined;
        enableSuggestions?: boolean | null | undefined;
        hintLocales?: DartListInput<upstream7.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>> | null | undefined;
        inputAction?: upstream3.TextInputAction | null | undefined;
        inputType?: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
        }> | null | undefined;
        keyboardAppearance?: upstream4.Brightness | null | undefined;
        obscureText?: boolean | null | undefined;
        readOnly?: boolean | null | undefined;
        smartDashesType?: upstream1.SmartDashesType | null | undefined;
        smartQuotesType?: upstream2.SmartQuotesType | null | undefined;
        textCapitalization?: upstream5.TextCapitalization | null | undefined;
        viewId?: number | null | undefined;
    }): TextInputConfiguration;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare function _TextInputConfigurationFactory(options?: {
    viewId?: number | null | undefined;
    inputType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | undefined;
    readOnly?: boolean | undefined;
    obscureText?: boolean | undefined;
    autocorrect?: boolean | undefined;
    smartDashesType?: upstream1.SmartDashesType | null | undefined;
    smartQuotesType?: upstream2.SmartQuotesType | null | undefined;
    enableSuggestions?: boolean | undefined;
    enableInteractiveSelection?: boolean | undefined;
    actionLabel?: string | null | undefined;
    inputAction?: upstream3.TextInputAction | undefined;
    keyboardAppearance?: upstream4.Brightness | undefined;
    textCapitalization?: upstream5.TextCapitalization | undefined;
    autofillConfiguration?: Readonly<{
        "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [];
    }> | undefined;
    enableIMEPersonalizedLearning?: boolean | undefined;
    allowedMimeTypes?: DartListInput<string, string> | undefined;
    enableDeltaModel?: boolean | undefined;
    hintLocales?: DartListInput<upstream7.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null | undefined;
    enableInlinePrediction?: boolean | null | undefined;
}): TextInputConfiguration;
export interface _TextInputConfigurationNative extends TextInputConfiguration {
    readonly [_flaxDartTypeValue]: _TextInputConfigurationNative;
    copyWith(options?: {
        viewId?: number | null | undefined;
        inputType?: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
        }> | null | undefined;
        readOnly?: boolean | null | undefined;
        obscureText?: boolean | null | undefined;
        autocorrect?: boolean | null | undefined;
        smartDashesType?: upstream1.SmartDashesType | null | undefined;
        smartQuotesType?: upstream2.SmartQuotesType | null | undefined;
        enableSuggestions?: boolean | null | undefined;
        enableInteractiveSelection?: boolean | null | undefined;
        actionLabel?: string | null | undefined;
        inputAction?: upstream3.TextInputAction | null | undefined;
        keyboardAppearance?: upstream4.Brightness | null | undefined;
        textCapitalization?: upstream5.TextCapitalization | null | undefined;
        enableIMEPersonalizedLearning?: boolean | null | undefined;
        allowedMimeTypes?: DartListInput<string, string> | null | undefined;
        autofillConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [];
        }> | null | undefined;
        enableDeltaModel?: boolean | null | undefined;
        hintLocales?: DartListInput<upstream7.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>> | null | undefined;
        enableInlinePrediction?: boolean | null | undefined;
    }): TextInputConfiguration;
    toJson(): DartMap<string, unknown | null>;
    toString(): string;
    get viewId(): number | null;
    get inputType(): upstream0.TextInputType;
    get readOnly(): boolean;
    get obscureText(): boolean;
    get autocorrect(): boolean;
    get autofillConfiguration(): upstream6.AutofillConfiguration;
    get smartDashesType(): upstream1.SmartDashesType;
    get smartQuotesType(): upstream2.SmartQuotesType;
    get enableSuggestions(): boolean;
    get enableInteractiveSelection(): boolean;
    get actionLabel(): string | null;
    get inputAction(): upstream3.TextInputAction;
    get textCapitalization(): upstream5.TextCapitalization;
    get keyboardAppearance(): upstream4.Brightness;
    get enableIMEPersonalizedLearning(): boolean;
    get allowedMimeTypes(): DartList<string>;
    get hintLocales(): DartList<upstream7.Locale> | null;
    get enableInlinePrediction(): boolean | null;
    get enableDeltaModel(): boolean;
}
export declare abstract class _TextInputConfigurationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextInputConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextInputConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextInputConfiguration", readonly [], false];
    constructor(options?: {
        viewId?: number | null | undefined;
        inputType?: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
        }> | undefined;
        readOnly?: boolean | undefined;
        obscureText?: boolean | undefined;
        autocorrect?: boolean | undefined;
        smartDashesType?: upstream1.SmartDashesType | null | undefined;
        smartQuotesType?: upstream2.SmartQuotesType | null | undefined;
        enableSuggestions?: boolean | undefined;
        enableInteractiveSelection?: boolean | undefined;
        actionLabel?: string | null | undefined;
        inputAction?: upstream3.TextInputAction | undefined;
        keyboardAppearance?: upstream4.Brightness | undefined;
        textCapitalization?: upstream5.TextCapitalization | undefined;
        autofillConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [];
        }> | undefined;
        enableIMEPersonalizedLearning?: boolean | undefined;
        allowedMimeTypes?: DartListInput<string, string> | undefined;
        enableDeltaModel?: boolean | undefined;
        hintLocales?: DartListInput<upstream7.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>> | null | undefined;
        enableInlinePrediction?: boolean | null | undefined;
    });
}
export declare namespace _TextInputConfigurationFactory {
    function implement(args: [options?: {
        viewId?: number | null | undefined;
        inputType?: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
        }> | undefined;
        readOnly?: boolean | undefined;
        obscureText?: boolean | undefined;
        autocorrect?: boolean | undefined;
        smartDashesType?: upstream1.SmartDashesType | null | undefined;
        smartQuotesType?: upstream2.SmartQuotesType | null | undefined;
        enableSuggestions?: boolean | undefined;
        enableInteractiveSelection?: boolean | undefined;
        actionLabel?: string | null | undefined;
        inputAction?: upstream3.TextInputAction | undefined;
        keyboardAppearance?: upstream4.Brightness | undefined;
        textCapitalization?: upstream5.TextCapitalization | undefined;
        autofillConfiguration?: Readonly<{
            "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [];
        }> | undefined;
        enableIMEPersonalizedLearning?: boolean | undefined;
        allowedMimeTypes?: DartListInput<string, string> | undefined;
        enableDeltaModel?: boolean | undefined;
        hintLocales?: DartListInput<upstream7.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>> | null | undefined;
        enableInlinePrediction?: boolean | null | undefined;
    }], implementation: {}): TextInputConfiguration;
}
declare const _TextInputConfigurationBinding: typeof _TextInputConfigurationFactory & (new (options?: {
    viewId?: number | null | undefined;
    inputType?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
    }> | undefined;
    readOnly?: boolean | undefined;
    obscureText?: boolean | undefined;
    autocorrect?: boolean | undefined;
    smartDashesType?: upstream1.SmartDashesType | null | undefined;
    smartQuotesType?: upstream2.SmartQuotesType | null | undefined;
    enableSuggestions?: boolean | undefined;
    enableInteractiveSelection?: boolean | undefined;
    actionLabel?: string | null | undefined;
    inputAction?: upstream3.TextInputAction | undefined;
    keyboardAppearance?: upstream4.Brightness | undefined;
    textCapitalization?: upstream5.TextCapitalization | undefined;
    autofillConfiguration?: Readonly<{
        "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [];
    }> | undefined;
    enableIMEPersonalizedLearning?: boolean | undefined;
    allowedMimeTypes?: DartListInput<string, string> | undefined;
    enableDeltaModel?: boolean | undefined;
    hintLocales?: DartListInput<upstream7.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null | undefined;
    enableInlinePrediction?: boolean | null | undefined;
}) => _TextInputConfigurationNative);
export declare const TextInputConfiguration: typeof _TextInputConfigurationBinding & _FlaxInstanceType<TextInputConfiguration> & _FlaxDartType<TextInputConfiguration, readonly ["class", "flax.core/sdk_services#type:TextInputConfiguration", readonly [], false]>;
export {};
