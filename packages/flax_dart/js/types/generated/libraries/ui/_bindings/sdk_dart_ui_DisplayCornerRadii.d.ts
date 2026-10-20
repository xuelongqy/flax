import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DisplayCornerRadii extends Readonly<{
    "__flaxBound:dart:ui::DisplayCornerRadii": readonly [];
}> {
    readonly __DisplayCornerRadii: unique symbol;
    readonly [_flaxDartTypeValue]: DisplayCornerRadii;
    readonly topLeft: number;
    readonly topRight: number;
    readonly bottomRight: number;
    readonly bottomLeft: number;
    toString(): string;
}
export declare function _DisplayCornerRadiiFactory(options: {
    topLeft: number;
    topRight: number;
    bottomRight: number;
    bottomLeft: number;
}): DisplayCornerRadii;
export interface _DisplayCornerRadiiNative extends DisplayCornerRadii {
    readonly [_flaxDartTypeValue]: _DisplayCornerRadiiNative;
    toString(): string;
    get topLeft(): number;
    get topRight(): number;
    get bottomRight(): number;
    get bottomLeft(): number;
}
export declare abstract class _DisplayCornerRadiiNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DisplayCornerRadii>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DisplayCornerRadii;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:DisplayCornerRadii", readonly [], false];
    constructor(options: {
        topLeft: number;
        topRight: number;
        bottomRight: number;
        bottomLeft: number;
    });
}
export declare namespace _DisplayCornerRadiiFactory {
    function implement(args: [options: {
        topLeft: number;
        topRight: number;
        bottomRight: number;
        bottomLeft: number;
    }], implementation: {}): DisplayCornerRadii;
}
declare const _DisplayCornerRadiiBinding: typeof _DisplayCornerRadiiFactory & (new (options: {
    topLeft: number;
    topRight: number;
    bottomRight: number;
    bottomLeft: number;
}) => _DisplayCornerRadiiNative);
export declare const DisplayCornerRadii: typeof _DisplayCornerRadiiBinding & _FlaxInstanceType<DisplayCornerRadii> & _FlaxDartType<DisplayCornerRadii, readonly ["class", "flax.core/sdk_dart_ui#type:DisplayCornerRadii", readonly [], false]>;
export {};
