import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LinearBorderEdge extends Readonly<{
    "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
}> {
    readonly __LinearBorderEdge: unique symbol;
    readonly [_flaxDartTypeValue]: LinearBorderEdge;
}
export interface LinearBorderEdge {
    readonly [_flaxDartTypeValue]: LinearBorderEdge;
    toString(): string;
    get size(): number;
    get alignment(): number;
}
export declare abstract class LinearBorderEdge extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearBorderEdge>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LinearBorderEdge;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearBorderEdge", readonly [], false];
    constructor(options?: {
        size?: number | undefined;
        alignment?: number | undefined;
    });
}
export declare namespace LinearBorderEdge {
    function implement(args: [options?: {
        size?: number | undefined;
        alignment?: number | undefined;
    }], implementation: {}): LinearBorderEdge;
}
export declare namespace LinearBorderEdge {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null, t: number): LinearBorderEdge | null;
}
