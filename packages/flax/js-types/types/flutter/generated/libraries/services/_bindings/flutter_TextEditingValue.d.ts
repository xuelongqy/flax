import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
        composing?: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }> | null | undefined;
        selection?: Readonly<{
            "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
        }> | null | undefined;
        text?: string | null | undefined;
    }): TextEditingValue;
}
declare function _TextEditingValueFactory(options?: {
    text?: string | undefined;
    selection?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> | undefined;
    composing?: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }> | undefined;
}): TextEditingValue;
declare namespace _TextEditingValueFactory {
    const empty: TextEditingValue;
}
export declare const TextEditingValue: typeof _TextEditingValueFactory & _FlaxInstanceType<TextEditingValue>;
export {};
