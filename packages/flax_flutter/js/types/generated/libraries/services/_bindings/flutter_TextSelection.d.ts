import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextAffinity';
import '@flax/dart/ui/_bindings/flutter_TextAffinity';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelection extends Omit<upstream0.TextRange, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::TextRange": readonly [];
}> {
    readonly __TextSelection: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelection;
    readonly start: number;
    readonly end: number;
    readonly isValid: boolean;
    readonly isCollapsed: boolean;
    readonly isNormalized: boolean;
    readonly baseOffset: number;
    readonly extentOffset: number;
    readonly affinity: upstream1.TextAffinity;
    readonly isDirectional: boolean;
    readonly base: upstream2.TextPosition;
    readonly extent: upstream2.TextPosition;
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
    expandTo(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>, extentAtIndex?: boolean): TextSelection;
    extendTo(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): TextSelection;
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
export declare namespace _TextSelectionFactory {
    function fromPosition(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): TextSelection;
}
export declare const TextSelection: typeof _TextSelectionFactory & _FlaxInstanceType<TextSelection> & _FlaxDartType<TextSelection, readonly ["class", "flax.core/flutter#type:TextSelection", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "start" | "end" | "isValid" | "isCollapsed" | "isNormalized" | "baseOffset" | "extentOffset" | "affinity" | "isDirectional" | "base" | "extent" | "textBefore" | "textAfter" | "textInside" | "toString" | "copyWith" | "expandTo" | "extendTo" | "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection" | "__flaxBound:dart:ui::TextRange";
export {};
