import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PolynomialFit extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/lsq_solver.dart::PolynomialFit": readonly [];
}> {
    readonly __PolynomialFit: unique symbol;
    readonly [_flaxDartTypeValue]: PolynomialFit;
    readonly coefficients: DartList<number>;
    get confidence(): number;
    toString(): string;
    set confidence(value: number);
}
export declare function _PolynomialFitFactory(degree: number): PolynomialFit;
export interface _PolynomialFitNative extends PolynomialFit {
    readonly [_flaxDartTypeValue]: _PolynomialFitNative;
    toString(): string;
    get coefficients(): DartList<number>;
    get confidence(): number;
    set confidence(value: number);
}
export declare abstract class _PolynomialFitNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PolynomialFit>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PolynomialFit;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PolynomialFit", readonly [], false];
    constructor(degree: number);
}
export declare namespace _PolynomialFitFactory {
    function implement(args: [degree: number], implementation: {}): PolynomialFit;
}
declare const _PolynomialFitBinding: typeof _PolynomialFitFactory & (new (degree: number) => _PolynomialFitNative);
export declare const PolynomialFit: typeof _PolynomialFitBinding & _FlaxInstanceType<PolynomialFit> & _FlaxDartType<PolynomialFit, readonly ["class", "flax.core/sdk_gestures#type:PolynomialFit", readonly [], false]>;
export {};
