import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PolynomialFit';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PolynomialFit';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LeastSquaresSolver extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/lsq_solver.dart::LeastSquaresSolver": readonly [];
}> {
    readonly __LeastSquaresSolver: unique symbol;
    readonly [_flaxDartTypeValue]: LeastSquaresSolver;
    readonly x: DartList<number>;
    readonly y: DartList<number>;
    readonly w: DartList<number>;
    solve(degree: number): upstream0.PolynomialFit | null;
}
export declare function _LeastSquaresSolverFactory(x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>): LeastSquaresSolver;
export interface _LeastSquaresSolverNative extends LeastSquaresSolver {
    readonly [_flaxDartTypeValue]: _LeastSquaresSolverNative;
    solve(degree: number): upstream0.PolynomialFit | null;
    get x(): DartList<number>;
    get y(): DartList<number>;
    get w(): DartList<number>;
}
export declare abstract class _LeastSquaresSolverNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LeastSquaresSolver>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LeastSquaresSolver;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:LeastSquaresSolver", readonly [], false];
    constructor(x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>);
}
export declare namespace _LeastSquaresSolverFactory {
    function implement(args: [x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>], implementation: {}): LeastSquaresSolver;
}
declare const _LeastSquaresSolverBinding: typeof _LeastSquaresSolverFactory & (new (x: DartListInput<number, number>, y: DartListInput<number, number>, w: DartListInput<number, number>) => _LeastSquaresSolverNative);
export declare const LeastSquaresSolver: typeof _LeastSquaresSolverBinding & _FlaxInstanceType<LeastSquaresSolver> & _FlaxDartType<LeastSquaresSolver, readonly ["class", "flax.core/sdk_gestures#type:LeastSquaresSolver", readonly [], false]>;
export {};
