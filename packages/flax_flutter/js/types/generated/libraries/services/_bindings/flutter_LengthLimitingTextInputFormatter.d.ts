import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_MaxLengthEnforcement';
import '@flax/flutter/services/_bindings/flutter_MaxLengthEnforcement';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LengthLimitingTextInputFormatter extends Omit<upstream0.TextInputFormatter, typeof _flaxDartTypeValue | "maxLength" | "maxLengthEnforcement" | "formatEditUpdate">, Readonly<{
    "__flaxBound:package:flutter/src/services/text_formatter.dart::LengthLimitingTextInputFormatter": readonly [];
}> {
    readonly __LengthLimitingTextInputFormatter: unique symbol;
    readonly maxLength: number | null;
    readonly maxLengthEnforcement: upstream1.MaxLengthEnforcement | null;
    formatEditUpdate(oldValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>, newValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): upstream3.TextEditingValue;
}
export declare function _LengthLimitingTextInputFormatterFactory(maxLength: number | null, options?: {
    maxLengthEnforcement?: upstream1.MaxLengthEnforcement | null | undefined;
}): LengthLimitingTextInputFormatter;
export declare namespace _LengthLimitingTextInputFormatterFactory {
    function getDefaultMaxLengthEnforcement(platform?: upstream2.TargetPlatform | null): upstream1.MaxLengthEnforcement;
}
export declare const LengthLimitingTextInputFormatter: typeof _LengthLimitingTextInputFormatterFactory & _FlaxInstanceType<LengthLimitingTextInputFormatter> & _FlaxDartType<LengthLimitingTextInputFormatter, readonly ["class", "flax.core/flutter#type:LengthLimitingTextInputFormatter", readonly [], false]>;
