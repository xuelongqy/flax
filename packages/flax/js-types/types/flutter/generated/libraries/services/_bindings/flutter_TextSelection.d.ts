import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextRange';
import '@flax/flutter/services/_bindings/flutter_TextRange';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextAffinity';
export interface TextSelection extends upstream0.TextRange, Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
}> {
    readonly __TextSelection: unique symbol;
    readonly start: number;
    readonly end: number;
    readonly isValid: boolean;
    readonly isCollapsed: boolean;
    readonly isNormalized: boolean;
    readonly baseOffset: number;
    readonly extentOffset: number;
    readonly affinity: upstream1.TextAffinity;
    readonly isDirectional: boolean;
    copyWith(options?: {
        affinity?: upstream1.TextAffinity | null | undefined;
        baseOffset?: number | null | undefined;
        extentOffset?: number | null | undefined;
        isDirectional?: boolean | null | undefined;
    }): TextSelection;
}
export declare function TextSelection(options: {
    baseOffset: number;
    extentOffset: number;
    affinity?: upstream1.TextAffinity | undefined;
    isDirectional?: boolean | undefined;
}): TextSelection;
export declare namespace TextSelection {
    function collapsed(options: {
        offset: number;
        affinity?: upstream1.TextAffinity | undefined;
    }): TextSelection;
}
