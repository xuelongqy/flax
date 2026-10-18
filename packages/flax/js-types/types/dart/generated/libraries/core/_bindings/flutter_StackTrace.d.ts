import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StackTrace extends Readonly<{
    "__flaxBound:dart:core::StackTrace": readonly [];
}> {
    readonly __StackTrace: unique symbol;
    readonly [_flaxDartTypeValue]: StackTrace;
    toString(): string;
}
export declare namespace _StackTraceFactory {
    function fromString(stackTraceString: string): StackTrace;
}
export declare namespace _StackTraceFactory {
    const empty: StackTrace;
}
export declare namespace _StackTraceFactory {
    const current: StackTrace;
}
export declare const StackTrace: typeof _StackTraceFactory & _FlaxInstanceType<StackTrace> & _FlaxDartType<StackTrace, readonly ["class", "flax.core/flutter#type:StackTrace", readonly [], false]>;
