export interface StackTrace extends Readonly<{
    "__flaxBound:dart:core::StackTrace": readonly [];
}> {
    readonly __StackTrace: unique symbol;
    toString(): string;
}
export declare const StackTrace: {
    readonly current: StackTrace;
    readonly empty: StackTrace;
};
