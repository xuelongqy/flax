import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface StackFrame extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [];
}> {
    readonly __StackFrame: unique symbol;
    readonly [_flaxDartTypeValue]: StackFrame;
}
export interface StackFrame {
    readonly [_flaxDartTypeValue]: StackFrame;
    toString(): string;
    get source(): string;
    get number(): number;
    get packageScheme(): string;
    get package(): string;
    get packagePath(): string;
    get line(): number;
    get column(): number;
    get className(): string;
    get method(): string;
    get isConstructor(): boolean;
}
export declare abstract class StackFrame extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StackFrame>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StackFrame;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:StackFrame", readonly [], false];
    constructor(options: {
        number: number;
        column: number;
        line: number;
        packageScheme: string;
        package: string;
        packagePath: string;
        className?: string | undefined;
        method: string;
        isConstructor?: boolean | undefined;
        source: string;
    });
}
export declare namespace StackFrame {
    function implement(args: [options: {
        number: number;
        column: number;
        line: number;
        packageScheme: string;
        package: string;
        packagePath: string;
        className?: string | undefined;
        method: string;
        isConstructor?: boolean | undefined;
        source: string;
    }], implementation: {}): StackFrame;
}
export declare namespace StackFrame {
    const asynchronousSuspension: StackFrame;
}
export declare namespace StackFrame {
    const stackOverFlowElision: StackFrame;
}
export declare namespace StackFrame {
    function fromStackTrace(stack: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>): DartList<StackFrame>;
}
export declare namespace StackFrame {
    function fromStackString(stack: string): DartList<StackFrame>;
}
export declare namespace StackFrame {
    function fromStackTraceLine(line: string): StackFrame | null;
}
