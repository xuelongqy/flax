import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RSTransform extends Readonly<{
    "__flaxBound:dart:ui::RSTransform": readonly [];
}> {
    readonly __RSTransform: unique symbol;
    readonly [_flaxDartTypeValue]: RSTransform;
    readonly scos: number;
    readonly ssin: number;
    readonly tx: number;
    readonly ty: number;
}
export declare function _RSTransformFactory(scos: number, ssin: number, tx: number, ty: number): RSTransform;
export declare namespace _RSTransformFactory {
    function fromComponents(options: {
        rotation: number;
        scale: number;
        anchorX: number;
        anchorY: number;
        translateX: number;
        translateY: number;
    }): RSTransform;
}
export interface _RSTransformNative extends RSTransform {
    readonly [_flaxDartTypeValue]: _RSTransformNative;
    get scos(): number;
    get ssin(): number;
    get tx(): number;
    get ty(): number;
}
export declare abstract class _RSTransformNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RSTransform>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RSTransform;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:RSTransform", readonly [], false];
    constructor(scos: number, ssin: number, tx: number, ty: number);
}
export declare namespace _RSTransformFactory {
    function implement(args: [scos: number, ssin: number, tx: number, ty: number], implementation: {}): RSTransform;
}
declare const _RSTransformBinding: typeof _RSTransformFactory & (new (scos: number, ssin: number, tx: number, ty: number) => _RSTransformNative);
export declare const RSTransform: typeof _RSTransformBinding & _FlaxInstanceType<RSTransform> & _FlaxDartType<RSTransform, readonly ["class", "flax.core/sdk_dart_ui#type:RSTransform", readonly [], false]>;
export {};
