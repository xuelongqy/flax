import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextRange';
import '@flax/flutter/services/_bindings/flutter_TextRange';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextAffinity';
import '@flax/flutter/services/_bindings/flutter_TextAffinity';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelection extends Omit<upstream0.TextRange, typeof _flaxDartTypeValue | "start" | "end" | "isValid" | "isCollapsed" | "isNormalized" | "baseOffset" | "extentOffset" | "affinity" | "isDirectional" | "textBefore" | "textAfter" | "textInside" | "toString" | "copyWith">, Readonly<{
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
    textBefore(text: string): string;
    textAfter(text: string): string;
    textInside(text: string): string;
    toString(): string;
    copyWith(options?: {
        affinity?: upstream1.TextAffinity | null | undefined;
        baseOffset?: number | null | undefined;
        extentOffset?: number | null | undefined;
        isDirectional?: boolean | null | undefined;
    }): TextSelection;
}
export declare function _TextSelectionFactory(options: {
    baseOffset: number;
    extentOffset: number;
    affinity?: upstream1.TextAffinity | undefined;
    isDirectional?: boolean | undefined;
}): TextSelection;
export declare namespace _TextSelectionFactory {
    function collapsed(options: {
        offset: number;
        affinity?: upstream1.TextAffinity | undefined;
    }): TextSelection;
}
export declare const TextSelection: typeof _TextSelectionFactory & _FlaxInstanceType<TextSelection> & _FlaxDartType<TextSelection, readonly ["class", "flax.core/flutter#type:TextSelection", readonly [], false]>;
