import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
export interface TextInputFormatter extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
}> {
    readonly __TextInputFormatter: unique symbol;
}
declare namespace _TextInputFormatterFactory {
    function withFunction(formatFunction: ((oldValue: upstream0.TextEditingValue, newValue: upstream0.TextEditingValue) => Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>)): TextInputFormatter;
}
export declare const TextInputFormatter: typeof _TextInputFormatterFactory & _FlaxInstanceType<TextInputFormatter>;
export {};
