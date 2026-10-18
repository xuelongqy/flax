import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FilteringTextInputFormatter extends Omit<upstream0.TextInputFormatter, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_formatter.dart::FilteringTextInputFormatter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [];
}> {
    readonly __FilteringTextInputFormatter: unique symbol;
    readonly [_flaxDartTypeValue]: FilteringTextInputFormatter;
    readonly filterPattern: upstream1.Pattern | string;
    readonly allow: boolean;
    readonly replacementString: string;
    formatEditUpdate(oldValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>, newValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): upstream2.TextEditingValue;
}
export declare function _FilteringTextInputFormatterFactory(filterPattern: DartInput<Readonly<{
    "__flaxBound:dart:core::Pattern": readonly [];
}>> | string, options: {
    allow: boolean;
    replacementString?: string | undefined;
}): FilteringTextInputFormatter;
export declare namespace _FilteringTextInputFormatterFactory {
    function allow(filterPattern: DartInput<Readonly<{
        "__flaxBound:dart:core::Pattern": readonly [];
    }>> | string, options?: {
        replacementString?: string | undefined;
    }): FilteringTextInputFormatter;
}
export declare namespace _FilteringTextInputFormatterFactory {
    function deny(filterPattern: DartInput<Readonly<{
        "__flaxBound:dart:core::Pattern": readonly [];
    }>> | string, options?: {
        replacementString?: string | undefined;
    }): FilteringTextInputFormatter;
}
export declare namespace _FilteringTextInputFormatterFactory {
    const singleLineFormatter: upstream0.TextInputFormatter;
}
export declare namespace _FilteringTextInputFormatterFactory {
    const digitsOnly: upstream0.TextInputFormatter;
}
export declare const FilteringTextInputFormatter: typeof _FilteringTextInputFormatterFactory & _FlaxInstanceType<FilteringTextInputFormatter> & _FlaxDartType<FilteringTextInputFormatter, readonly ["class", "flax.core/flutter#type:FilteringTextInputFormatter", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "filterPattern" | "allow" | "replacementString" | "formatEditUpdate" | "__flaxBound:package:flutter/src/services/text_formatter.dart::FilteringTextInputFormatter" | "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter";
export {};
