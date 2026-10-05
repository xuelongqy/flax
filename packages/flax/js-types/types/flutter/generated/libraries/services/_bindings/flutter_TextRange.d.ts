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
export declare function TextRange(options: {
    start: number;
    end: number;
}): TextRange;
export declare namespace TextRange {
    function collapsed(offset: number): TextRange;
}
export declare namespace TextRange {
    const empty: TextRange;
}
