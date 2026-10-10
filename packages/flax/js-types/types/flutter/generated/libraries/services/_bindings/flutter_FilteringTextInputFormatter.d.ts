import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/dart/core/_bindings/flutter_Pattern';
export interface FilteringTextInputFormatter extends upstream0.TextInputFormatter, Readonly<{
    "__flaxBound:package:flutter/src/services/text_formatter.dart::FilteringTextInputFormatter": readonly [];
}> {
    readonly __FilteringTextInputFormatter: unique symbol;
}
declare function _FilteringTextInputFormatterFactory(filterPattern: Readonly<{
    "__flaxBound:dart:core::Pattern": readonly [];
}> | string, options: {
    allow: boolean;
    replacementString?: string | undefined;
}): FilteringTextInputFormatter;
declare namespace _FilteringTextInputFormatterFactory {
    function allow(filterPattern: Readonly<{
        "__flaxBound:dart:core::Pattern": readonly [];
    }> | string, options?: {
        replacementString?: string | undefined;
    }): FilteringTextInputFormatter;
}
declare namespace _FilteringTextInputFormatterFactory {
    function deny(filterPattern: Readonly<{
        "__flaxBound:dart:core::Pattern": readonly [];
    }> | string, options?: {
        replacementString?: string | undefined;
    }): FilteringTextInputFormatter;
}
declare namespace _FilteringTextInputFormatterFactory {
    const digitsOnly: upstream0.TextInputFormatter;
}
declare namespace _FilteringTextInputFormatterFactory {
    const singleLineFormatter: upstream0.TextInputFormatter;
}
export declare const FilteringTextInputFormatter: typeof _FilteringTextInputFormatterFactory & _FlaxInstanceType<FilteringTextInputFormatter>;
export {};
