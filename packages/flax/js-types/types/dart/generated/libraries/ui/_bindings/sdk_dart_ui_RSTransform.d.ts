import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RSTransform extends Readonly<{
    "__flaxBound:dart:ui::RSTransform": readonly [];
}> {
    readonly __RSTransform: unique symbol;
    readonly [_flaxDartTypeValue]: RSTransform;
}
export interface RSTransform {
    readonly [_flaxDartTypeValue]: RSTransform;
    get scos(): number;
    get ssin(): number;
    get tx(): number;
    get ty(): number;
}
export declare abstract class RSTransform extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RSTransform>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RSTransform;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:RSTransform", readonly [], false];
    constructor(scos: number, ssin: number, tx: number, ty: number);
}
export declare namespace RSTransform {
    function implement(args: [scos: number, ssin: number, tx: number, ty: number], implementation: {}): RSTransform;
}
