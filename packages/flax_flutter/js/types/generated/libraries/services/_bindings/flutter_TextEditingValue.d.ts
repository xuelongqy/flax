import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextRange';
import '@flax/flutter/services/_bindings/flutter_TextRange';
export interface TextEditingValue extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
}> {
    readonly __TextEditingValue: unique symbol;
    readonly text: string;
    readonly selection: upstream0.TextSelection;
    readonly composing: upstream1.TextRange;
    readonly isComposingRangeValid: boolean;
    copyWith(options?: {
        composing?: upstream1.TextRange | null | undefined;
        selection?: upstream0.TextSelection | null | undefined;
        text?: string | null | undefined;
    }): TextEditingValue;
}
export declare function TextEditingValue(options?: {
    text?: string | undefined;
    selection?: upstream0.TextSelection | undefined;
    composing?: upstream1.TextRange | undefined;
}): TextEditingValue;
export declare namespace TextEditingValue {
    const empty: TextEditingValue;
}
