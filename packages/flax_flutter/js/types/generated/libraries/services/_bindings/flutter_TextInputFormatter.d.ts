import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextInputFormatter extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
}> {
    readonly __TextInputFormatter: unique symbol;
    readonly [_flaxDartTypeValue]: TextInputFormatter;
    formatEditUpdate(oldValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>, newValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): upstream0.TextEditingValue;
}
export declare namespace _TextInputFormatterFactory {
    function withFunction(formatFunction: ((oldValue: upstream0.TextEditingValue, newValue: upstream0.TextEditingValue) => Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>)): TextInputFormatter;
}
export declare const TextInputFormatter: typeof _TextInputFormatterFactory & _FlaxInstanceType<TextInputFormatter> & _FlaxDartType<TextInputFormatter, readonly ["class", "flax.core/flutter#type:TextInputFormatter", readonly [], false]>;
