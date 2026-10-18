import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LineMetrics extends Readonly<{
    "__flaxBound:dart:ui::LineMetrics": readonly [];
}> {
    readonly __LineMetrics: unique symbol;
    readonly [_flaxDartTypeValue]: LineMetrics;
}
export interface LineMetrics {
    readonly [_flaxDartTypeValue]: LineMetrics;
    toString(): string;
    get hardBreak(): boolean;
    get ascent(): number;
    get descent(): number;
    get unscaledAscent(): number;
    get height(): number;
    get width(): number;
    get left(): number;
    get baseline(): number;
    get lineNumber(): number;
}
export declare abstract class LineMetrics extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LineMetrics>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LineMetrics;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:LineMetrics", readonly [], false];
    constructor(options: {
        hardBreak: boolean;
        ascent: number;
        descent: number;
        unscaledAscent: number;
        height: number;
        width: number;
        left: number;
        baseline: number;
        lineNumber: number;
    });
}
export declare namespace LineMetrics {
    function implement(args: [options: {
        hardBreak: boolean;
        ascent: number;
        descent: number;
        unscaledAscent: number;
        height: number;
        width: number;
        left: number;
        baseline: number;
        lineNumber: number;
    }], implementation: {}): LineMetrics;
}
