import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface StackTrace extends Readonly<{
    "__flaxBound:dart:core::StackTrace": readonly [];
}> {
    readonly __StackTrace: unique symbol;
    toString(): string;
}
declare const _StackTraceFactory: {
    readonly current: StackTrace;
    readonly empty: StackTrace;
};
export declare const StackTrace: typeof _StackTraceFactory & _FlaxInstanceType<StackTrace>;
export {};
