export interface DateTime extends Readonly<{
    "__flaxBound:dart:core::DateTime": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [DateTime];
}> {
    readonly __DateTime: unique symbol;
    readonly year: number;
    readonly isUtc: boolean;
    toIso8601String(): string;
}
export declare namespace DateTime {
    function fromMillisecondsSinceEpoch(millisecondsSinceEpoch: number, options?: {
        isUtc?: boolean | undefined;
    }): DateTime;
}
