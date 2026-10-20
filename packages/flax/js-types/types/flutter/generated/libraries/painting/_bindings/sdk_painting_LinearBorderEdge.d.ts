import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LinearBorderEdge extends Readonly<{
    "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
}> {
    readonly __LinearBorderEdge: unique symbol;
    readonly [_flaxDartTypeValue]: LinearBorderEdge;
    readonly size: number;
    readonly alignment: number;
    toString(): string;
}
export declare function _LinearBorderEdgeFactory(options?: {
    size?: number | undefined;
    alignment?: number | undefined;
}): LinearBorderEdge;
export interface _LinearBorderEdgeNative extends LinearBorderEdge {
    readonly [_flaxDartTypeValue]: _LinearBorderEdgeNative;
    toString(): string;
    get size(): number;
    get alignment(): number;
}
export declare abstract class _LinearBorderEdgeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LinearBorderEdge>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LinearBorderEdge;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:LinearBorderEdge", readonly [], false];
    constructor(options?: {
        size?: number | undefined;
        alignment?: number | undefined;
    });
}
export declare namespace _LinearBorderEdgeFactory {
    function implement(args: [options?: {
        size?: number | undefined;
        alignment?: number | undefined;
    }], implementation: {}): LinearBorderEdge;
}
declare const _LinearBorderEdgeBinding: typeof _LinearBorderEdgeFactory & (new (options?: {
    size?: number | undefined;
    alignment?: number | undefined;
}) => _LinearBorderEdgeNative);
export declare namespace _LinearBorderEdgeFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/linear_border.dart::LinearBorderEdge": readonly [];
    }> | null, t: number): LinearBorderEdge | null;
}
export declare const LinearBorderEdge: typeof _LinearBorderEdgeBinding & _FlaxInstanceType<LinearBorderEdge> & _FlaxDartType<LinearBorderEdge, readonly ["class", "flax.core/sdk_painting#type:LinearBorderEdge", readonly [], false]>;
export {};
