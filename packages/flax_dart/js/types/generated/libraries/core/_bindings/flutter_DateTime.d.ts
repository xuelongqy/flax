import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
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
declare namespace _DateTimeFactory {
    function fromMillisecondsSinceEpoch(millisecondsSinceEpoch: number, options?: {
        isUtc?: boolean | undefined;
    }): DateTime;
}
export declare const DateTime: typeof _DateTimeFactory & _FlaxInstanceType<DateTime>;
export {};
