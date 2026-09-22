export interface Duration extends Readonly<{
    "__flaxBound:dart:core::Duration": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Comparable": readonly [Duration];
}> {
    readonly __Duration: unique symbol;
    readonly inDays: number;
    readonly inHours: number;
    readonly inMinutes: number;
    readonly inSeconds: number;
    readonly inMilliseconds: number;
    readonly inMicroseconds: number;
}
export declare function Duration(options?: {
    days?: number | undefined;
    hours?: number | undefined;
    minutes?: number | undefined;
    seconds?: number | undefined;
    milliseconds?: number | undefined;
    microseconds?: number | undefined;
}): Duration;
export declare namespace Duration {
    const zero: Duration;
}
