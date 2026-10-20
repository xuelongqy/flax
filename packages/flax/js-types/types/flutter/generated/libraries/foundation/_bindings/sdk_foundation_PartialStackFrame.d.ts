import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/dart/core/_bindings/flutter_Pattern';
import '@flax/flutter/foundation/_bindings/sdk_foundation_StackFrame';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PartialStackFrame extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/assertions.dart::PartialStackFrame": readonly [];
}> {
    readonly __PartialStackFrame: unique symbol;
    readonly [_flaxDartTypeValue]: PartialStackFrame;
    readonly package: upstream0.Pattern | string;
    readonly className: string;
    readonly method: string;
    matches(stackFrame: Readonly<{
        "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [];
    }>): boolean;
}
export declare function _PartialStackFrameFactory(options: {
    package: DartInput<Readonly<{
        "__flaxBound:dart:core::Pattern": readonly [];
    }>> | string;
    className: string;
    method: string;
}): PartialStackFrame;
export interface _PartialStackFrameNative extends PartialStackFrame {
    readonly [_flaxDartTypeValue]: _PartialStackFrameNative;
    matches(stackFrame: Readonly<{
        "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [];
    }>): boolean;
    get package(): upstream0.Pattern | string;
    get className(): string;
    get method(): string;
}
export declare abstract class _PartialStackFrameNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PartialStackFrame>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PartialStackFrame;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:PartialStackFrame", readonly [], false];
    constructor(options: {
        package: DartInput<Readonly<{
            "__flaxBound:dart:core::Pattern": readonly [];
        }>> | string;
        className: string;
        method: string;
    });
}
export declare namespace _PartialStackFrameFactory {
    function implement(args: [options: {
        package: DartInput<Readonly<{
            "__flaxBound:dart:core::Pattern": readonly [];
        }>> | string;
        className: string;
        method: string;
    }], implementation: {}): PartialStackFrame;
}
declare const _PartialStackFrameBinding: typeof _PartialStackFrameFactory & (new (options: {
    package: DartInput<Readonly<{
        "__flaxBound:dart:core::Pattern": readonly [];
    }>> | string;
    className: string;
    method: string;
}) => _PartialStackFrameNative);
export declare namespace _PartialStackFrameFactory {
    const asynchronousSuspension: PartialStackFrame;
}
export declare const PartialStackFrame: typeof _PartialStackFrameBinding & _FlaxInstanceType<PartialStackFrame> & _FlaxDartType<PartialStackFrame, readonly ["class", "flax.core/sdk_foundation#type:PartialStackFrame", readonly [], false]>;
export {};
