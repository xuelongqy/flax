import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PolynomialFit extends Readonly<{
    "__flaxBound:package:flutter/src/gestures/lsq_solver.dart::PolynomialFit": readonly [];
}> {
    readonly __PolynomialFit: unique symbol;
    readonly [_flaxDartTypeValue]: PolynomialFit;
}
export interface PolynomialFit {
    readonly [_flaxDartTypeValue]: PolynomialFit;
    toString(): string;
    get coefficients(): DartList<number>;
    get confidence(): number;
    set confidence(value: number);
}
export declare abstract class PolynomialFit extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PolynomialFit>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PolynomialFit;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PolynomialFit", readonly [], false];
    constructor(degree: number);
}
export declare namespace PolynomialFit {
    function implement(args: [degree: number], implementation: {}): PolynomialFit;
}
