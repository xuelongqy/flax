import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_StackFilter';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFilter';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_PartialStackFrame';
import '@flax/flutter/foundation/_bindings/sdk_foundation_PartialStackFrame';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RepetitiveStackFrameFilter extends Omit<upstream0.StackFilter, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/assertions.dart::RepetitiveStackFrameFilter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/assertions.dart::StackFilter": readonly [];
}> {
    readonly __RepetitiveStackFrameFilter: unique symbol;
    readonly [_flaxDartTypeValue]: RepetitiveStackFrameFilter;
}
export interface RepetitiveStackFrameFilter {
    readonly [_flaxDartTypeValue]: RepetitiveStackFrameFilter;
    filter(stackFrames: DartListInput<upstream2.StackFrame, Readonly<{
        "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [];
    }>>, reasons: DartListInput<string | null, string | null>): void;
    get frames(): DartList<upstream1.PartialStackFrame>;
    get numFrames(): number;
    get replacement(): string;
}
export declare abstract class RepetitiveStackFrameFilter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RepetitiveStackFrameFilter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RepetitiveStackFrameFilter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:RepetitiveStackFrameFilter", readonly [], false];
    constructor(options: {
        frames: DartListInput<upstream1.PartialStackFrame, Readonly<{
            "__flaxBound:package:flutter/src/foundation/assertions.dart::PartialStackFrame": readonly [];
        }>>;
        replacement: string;
    });
}
export declare namespace RepetitiveStackFrameFilter {
    function implement(args: [options: {
        frames: DartListInput<upstream1.PartialStackFrame, Readonly<{
            "__flaxBound:package:flutter/src/foundation/assertions.dart::PartialStackFrame": readonly [];
        }>>;
        replacement: string;
    }], implementation: {}): RepetitiveStackFrameFilter;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "frames" | "numFrames" | "replacement" | "filter" | "__flaxBound:package:flutter/src/foundation/assertions.dart::RepetitiveStackFrameFilter" | "__flaxBound:package:flutter/src/foundation/assertions.dart::StackFilter";
export {};
