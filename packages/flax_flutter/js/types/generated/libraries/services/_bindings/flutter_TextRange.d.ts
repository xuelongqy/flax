import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface TextRange extends Readonly<{
    "__flaxBound:dart:ui::TextRange": readonly [];
}> {
    readonly __TextRange: unique symbol;
    readonly start: number;
    readonly end: number;
    readonly isValid: boolean;
    readonly isCollapsed: boolean;
    readonly isNormalized: boolean;
}
declare function _TextRangeFactory(options: {
    start: number;
    end: number;
}): TextRange;
declare namespace _TextRangeFactory {
    function collapsed(offset: number): TextRange;
}
declare namespace _TextRangeFactory {
    const empty: TextRange;
}
export declare const TextRange: typeof _TextRangeFactory & _FlaxInstanceType<TextRange>;
export {};
