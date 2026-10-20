import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TargetImageSize extends Readonly<{
    "__flaxBound:dart:ui::TargetImageSize": readonly [];
}> {
    readonly __TargetImageSize: unique symbol;
    readonly [_flaxDartTypeValue]: TargetImageSize;
    readonly width: number | null;
    readonly height: number | null;
    toString(): string;
}
export declare function _TargetImageSizeFactory(options?: {
    width?: number | null | undefined;
    height?: number | null | undefined;
}): TargetImageSize;
export interface _TargetImageSizeNative extends TargetImageSize {
    readonly [_flaxDartTypeValue]: _TargetImageSizeNative;
    toString(): string;
    get width(): number | null;
    get height(): number | null;
}
export declare abstract class _TargetImageSizeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TargetImageSize>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TargetImageSize;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TargetImageSize", readonly [], false];
    constructor(options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    });
}
export declare namespace _TargetImageSizeFactory {
    function implement(args: [options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    }], implementation: {}): TargetImageSize;
}
declare const _TargetImageSizeBinding: typeof _TargetImageSizeFactory & (new (options?: {
    width?: number | null | undefined;
    height?: number | null | undefined;
}) => _TargetImageSizeNative);
export declare const TargetImageSize: typeof _TargetImageSizeBinding & _FlaxInstanceType<TargetImageSize> & _FlaxDartType<TargetImageSize, readonly ["class", "flax.core/sdk_dart_ui#type:TargetImageSize", readonly [], false]>;
export {};
