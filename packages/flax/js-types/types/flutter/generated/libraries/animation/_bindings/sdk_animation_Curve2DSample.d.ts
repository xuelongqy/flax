import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Curve2DSample extends Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve2DSample": readonly [];
}> {
    readonly __Curve2DSample: unique symbol;
    readonly [_flaxDartTypeValue]: Curve2DSample;
    readonly t: number;
    readonly value: upstream0.Offset;
    toString(): string;
}
export declare function _Curve2DSampleFactory(t: number, value: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>): Curve2DSample;
export interface _Curve2DSampleNative extends Curve2DSample {
    readonly [_flaxDartTypeValue]: _Curve2DSampleNative;
    toString(): string;
    get t(): number;
    get value(): upstream0.Offset;
}
export declare abstract class _Curve2DSampleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Curve2DSample>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Curve2DSample;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Curve2DSample", readonly [], false];
    constructor(t: number, value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
}
export declare namespace _Curve2DSampleFactory {
    function implement(args: [t: number, value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>], implementation: {}): Curve2DSample;
}
declare const _Curve2DSampleBinding: typeof _Curve2DSampleFactory & (new (t: number, value: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>) => _Curve2DSampleNative);
export declare const Curve2DSample: typeof _Curve2DSampleBinding & _FlaxInstanceType<Curve2DSample> & _FlaxDartType<Curve2DSample, readonly ["class", "flax.core/sdk_animation#type:Curve2DSample", readonly [], false]>;
export {};
