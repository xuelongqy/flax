import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/services/_bindings/sdk_services_TextInputControl';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/sdk_services_ScribbleClient';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextInput extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextInput": readonly [];
}> {
    readonly __TextInput: unique symbol;
    readonly [_flaxDartTypeValue]: TextInput;
    readonly scribbleInProgress: boolean;
}
export declare namespace _TextInputFactory {
    function setInputControl(newControl: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputControl": readonly [];
    }> | null): void;
}
export declare namespace _TextInputFactory {
    function restorePlatformInputControl(): void;
}
export declare namespace _TextInputFactory {
    function ensureInitialized(): void;
}
export declare namespace _TextInputFactory {
    function attach(client: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
    }>, configuration: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [];
    }>): upstream1.TextInputConnection;
}
export declare namespace _TextInputFactory {
    function updateEditingValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): void;
}
export declare namespace _TextInputFactory {
    function finishAutofillContext(options?: {
        shouldSave?: boolean | undefined;
    }): void;
}
export declare namespace _TextInputFactory {
    function registerScribbleElement(elementIdentifier: string, scribbleClient: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::ScribbleClient": readonly [];
    }>): void;
}
export declare namespace _TextInputFactory {
    function unregisterScribbleElement(elementIdentifier: string): void;
}
export declare const TextInput: typeof _TextInputFactory & _FlaxInstanceType<TextInput> & _FlaxDartType<TextInput, readonly ["class", "flax.core/sdk_services#type:TextInput", readonly [], false]>;
