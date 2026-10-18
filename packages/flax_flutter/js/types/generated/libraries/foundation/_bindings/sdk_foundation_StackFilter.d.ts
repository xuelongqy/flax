import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StackFilter extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/assertions.dart::StackFilter": readonly [];
}> {
    readonly __StackFilter: unique symbol;
    readonly [_flaxDartTypeValue]: StackFilter;
    filter(stackFrames: DartListInput<upstream0.StackFrame, Readonly<{
        "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [];
    }>>, reasons: DartListInput<string | null, string | null>): void;
}
export declare namespace _StackFilterFactory {
    function implement(args: [], implementation: {
        filter: ((stackFrames: DartList<upstream0.StackFrame>, reasons: DartList<string | null>) => void);
    }): StackFilter;
}
export declare const StackFilter: typeof _StackFilterFactory & _FlaxInstanceType<StackFilter> & _FlaxDartType<StackFilter, readonly ["class", "flax.core/sdk_foundation#type:StackFilter", readonly [], false]>;
