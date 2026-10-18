import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Curve2DSample extends Readonly<{
    "__flaxBound:package:flutter/src/animation/curves.dart::Curve2DSample": readonly [];
}> {
    readonly __Curve2DSample: unique symbol;
    readonly [_flaxDartTypeValue]: Curve2DSample;
}
export interface Curve2DSample {
    readonly [_flaxDartTypeValue]: Curve2DSample;
    toString(): string;
    get t(): number;
    get value(): upstream0.Offset;
}
export declare abstract class Curve2DSample extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Curve2DSample>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Curve2DSample;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_animation#type:Curve2DSample", readonly [], false];
    constructor(t: number, value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
}
export declare namespace Curve2DSample {
    function implement(args: [t: number, value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>], implementation: {}): Curve2DSample;
}
