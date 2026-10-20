import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StackFrame extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/stack_frame.dart::StackFrame": readonly [];
}> {
    readonly __StackFrame: unique symbol;
    readonly [_flaxDartTypeValue]: StackFrame;
    readonly source: string;
    readonly number: number;
    readonly packageScheme: string;
    readonly package: string;
    readonly packagePath: string;
    readonly line: number;
    readonly column: number;
    readonly className: string;
    readonly method: string;
    readonly isConstructor: boolean;
    toString(): string;
}
export declare function _StackFrameFactory(options: {
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
}): StackFrame;
export interface _StackFrameNative extends StackFrame {
    readonly [_flaxDartTypeValue]: _StackFrameNative;
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
export declare abstract class _StackFrameNative extends _FlaxProxyBase {
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
export declare namespace _StackFrameFactory {
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
declare const _StackFrameBinding: typeof _StackFrameFactory & (new (options: {
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
}) => _StackFrameNative);
export declare namespace _StackFrameFactory {
    const asynchronousSuspension: StackFrame;
}
export declare namespace _StackFrameFactory {
    const stackOverFlowElision: StackFrame;
}
export declare namespace _StackFrameFactory {
    function fromStackTrace(stack: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }>): DartList<StackFrame>;
}
export declare namespace _StackFrameFactory {
    function fromStackString(stack: string): DartList<StackFrame>;
}
export declare namespace _StackFrameFactory {
    function fromStackTraceLine(line: string): StackFrame | null;
}
export declare const StackFrame: typeof _StackFrameBinding & _FlaxInstanceType<StackFrame> & _FlaxDartType<StackFrame, readonly ["class", "flax.core/sdk_foundation#type:StackFrame", readonly [], false]>;
export {};
