import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
export interface FilteringTextInputFormatter extends upstream0.TextInputFormatter, Readonly<{
    "__flaxBound:package:flutter/src/services/text_formatter.dart::FilteringTextInputFormatter": readonly [];
}> {
    readonly __FilteringTextInputFormatter: unique symbol;
}
export declare function FilteringTextInputFormatter(filterPattern: upstream1.Pattern | string, options: {
    allow: boolean;
    replacementString?: string | undefined;
}): FilteringTextInputFormatter;
export declare namespace FilteringTextInputFormatter {
    function allow(filterPattern: upstream1.Pattern | string, options?: {
        replacementString?: string | undefined;
    }): FilteringTextInputFormatter;
}
export declare namespace FilteringTextInputFormatter {
    function deny(filterPattern: upstream1.Pattern | string, options?: {
        replacementString?: string | undefined;
    }): FilteringTextInputFormatter;
}
export declare namespace FilteringTextInputFormatter {
    const digitsOnly: upstream0.TextInputFormatter;
}
export declare namespace FilteringTextInputFormatter {
    const singleLineFormatter: upstream0.TextInputFormatter;
}
