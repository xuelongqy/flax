import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ParametricCurve<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [T];
}> {
    readonly __ParametricCurve: unique symbol;
    readonly [_flaxDartTypeValue]: ParametricCurve<T>;
}
export interface ParametricCurve<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: ParametricCurve<T>;
    transform(t: number): T;
    transformInternal(t: number): T;
    toString(): string;
}
export declare abstract class ParametricCurve<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParametricCurve<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ParametricCurve<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:ParametricCurve", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
}
export declare namespace ParametricCurve {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): ParametricCurve<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => ParametricCurve<_Selected0>) & {
        readonly prototype: ParametricCurve<_Selected0>;
        implement(args: readonly [], implementation: Partial<ParametricCurve<_Selected0>>): ParametricCurve<_Selected0>;
    } & _FlaxInstanceType<ParametricCurve<_Selected0>> & _FlaxDartType<ParametricCurve<_Selected0>> : never : never;
}
export {};
