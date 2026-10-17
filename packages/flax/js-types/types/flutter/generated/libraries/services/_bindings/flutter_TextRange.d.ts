import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextRange extends Readonly<{
    "__flaxBound:dart:ui::TextRange": readonly [];
}> {
    readonly __TextRange: unique symbol;
    readonly start: number;
    readonly end: number;
    readonly isValid: boolean;
    readonly isCollapsed: boolean;
    readonly isNormalized: boolean;
    textBefore(text: string): string;
    textAfter(text: string): string;
    textInside(text: string): string;
    toString(): string;
}
export declare function _TextRangeFactory(options: {
    start: number;
    end: number;
}): TextRange;
export declare namespace _TextRangeFactory {
    function collapsed(offset: number): TextRange;
}
export declare namespace _TextRangeFactory {
    const empty: TextRange;
}
export declare const TextRange: typeof _TextRangeFactory & _FlaxInstanceType<TextRange> & _FlaxDartType<TextRange, readonly ["class", "flax.core/flutter#type:TextRange", readonly [], false]>;
