import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
export interface TextInputFormatter extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
}> {
    readonly __TextInputFormatter: unique symbol;
}
export declare namespace TextInputFormatter {
    function withFunction(formatFunction: ((oldValue: upstream0.TextEditingValue, newValue: upstream0.TextEditingValue) => upstream0.TextEditingValue)): TextInputFormatter;
}
