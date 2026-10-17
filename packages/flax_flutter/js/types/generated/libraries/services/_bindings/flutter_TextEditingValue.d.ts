import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextRange';
import '@flax/flutter/services/_bindings/flutter_TextRange';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
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
    replaced(replacementRange: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>, replacementString: string): TextEditingValue;
    toJSON(): DartMap<string, unknown | null>;
    toString(): string;
}
export declare function _TextEditingValueFactory(options?: {
    text?: string | undefined;
    selection?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> | undefined;
    composing?: Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }> | undefined;
}): TextEditingValue;
export declare namespace _TextEditingValueFactory {
    function fromJSON(encoded: DartMapInput<string, unknown | null, string, unknown | null>): TextEditingValue;
}
export declare namespace _TextEditingValueFactory {
    const empty: TextEditingValue;
}
export declare const TextEditingValue: typeof _TextEditingValueFactory & _FlaxInstanceType<TextEditingValue> & _FlaxDartType<TextEditingValue, readonly ["class", "flax.core/flutter#type:TextEditingValue", readonly [], false]>;
