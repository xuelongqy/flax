import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import '@flax/flutter/animation/_bindings/sdk_animation_ParametricCurve';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SawTooth extends Omit<upstream0.Curve, _flaxOwnMembers0>, Omit<upstream1.ParametricCurve<number>, _flaxOwnMembers0 | keyof upstream0.Curve>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::SawTooth": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
}> {
    readonly __SawTooth: unique symbol;
    readonly [_flaxDartTypeValue]: SawTooth;
    readonly flipped: upstream0.Curve;
    readonly count: number;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
}
export declare function _SawToothFactory(count: number): SawTooth;
export interface _SawToothNative extends SawTooth {
    readonly [_flaxDartTypeValue]: _SawToothNative;
    transform(t: number): number;
    transformInternal(t: number): number;
    toString(): string;
    get count(): number;
    get flipped(): upstream0.Curve;
}
export declare abstract class _SawToothNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SawTooth>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SawTooth;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:SawTooth", readonly [], false];
    constructor(count: number);
}
export declare namespace _SawToothFactory {
    function implement(args: [count: number], implementation: {}): SawTooth;
}
declare const _SawToothBinding: typeof _SawToothFactory & (new (count: number) => _SawToothNative);
export declare const SawTooth: typeof _SawToothBinding & _FlaxInstanceType<SawTooth> & _FlaxDartType<SawTooth, readonly ["class", "flax.core/sdk_animation#type:SawTooth", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flipped" | "count" | "transform" | "transformInternal" | "toString" | "__flaxBound:package:flutter/src/animation/curves.dart::SawTooth" | "__flaxBound:package:flutter/src/animation/curves.dart::Curve" | "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve";
export {};
