import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_MaxLengthEnforcement';
export interface LengthLimitingTextInputFormatter extends upstream0.TextInputFormatter, Readonly<{
    "__flaxBound:package:flutter/src/services/text_formatter.dart::LengthLimitingTextInputFormatter": readonly [];
}> {
    readonly __LengthLimitingTextInputFormatter: unique symbol;
}
export declare function LengthLimitingTextInputFormatter(maxLength: number | null, options?: {
    maxLengthEnforcement?: upstream1.MaxLengthEnforcement | null | undefined;
}): LengthLimitingTextInputFormatter;
