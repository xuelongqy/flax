import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LineMetrics extends Readonly<{
    "__flaxBound:dart:ui::LineMetrics": readonly [];
}> {
    readonly __LineMetrics: unique symbol;
    readonly [_flaxDartTypeValue]: LineMetrics;
    readonly hardBreak: boolean;
    readonly ascent: number;
    readonly descent: number;
    readonly unscaledAscent: number;
    readonly height: number;
    readonly width: number;
    readonly left: number;
    readonly baseline: number;
    readonly lineNumber: number;
    toString(): string;
}
export declare function _LineMetricsFactory(options: {
    hardBreak: boolean;
    ascent: number;
    descent: number;
    unscaledAscent: number;
    height: number;
    width: number;
    left: number;
    baseline: number;
    lineNumber: number;
}): LineMetrics;
export interface _LineMetricsNative extends LineMetrics {
    readonly [_flaxDartTypeValue]: _LineMetricsNative;
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
export declare abstract class _LineMetricsNative extends _FlaxProxyBase {
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
export declare namespace _LineMetricsFactory {
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
declare const _LineMetricsBinding: typeof _LineMetricsFactory & (new (options: {
    hardBreak: boolean;
    ascent: number;
    descent: number;
    unscaledAscent: number;
    height: number;
    width: number;
    left: number;
    baseline: number;
    lineNumber: number;
}) => _LineMetricsNative);
export declare const LineMetrics: typeof _LineMetricsBinding & _FlaxInstanceType<LineMetrics> & _FlaxDartType<LineMetrics, readonly ["class", "flax.core/sdk_dart_ui#type:LineMetrics", readonly [], false]>;
export {};
