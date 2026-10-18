import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverLayoutDimensions extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLayoutDimensions": readonly [];
}> {
    readonly __SliverLayoutDimensions: unique symbol;
    readonly [_flaxDartTypeValue]: SliverLayoutDimensions;
}
export interface SliverLayoutDimensions {
    readonly [_flaxDartTypeValue]: SliverLayoutDimensions;
    toString(): string;
    get scrollOffset(): number;
    get precedingScrollExtent(): number;
    get viewportMainAxisExtent(): number;
    get crossAxisExtent(): number;
}
export declare abstract class SliverLayoutDimensions extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverLayoutDimensions>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverLayoutDimensions;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverLayoutDimensions", readonly [], false];
    constructor(options: {
        scrollOffset: number;
        precedingScrollExtent: number;
        viewportMainAxisExtent: number;
        crossAxisExtent: number;
    });
}
export declare namespace SliverLayoutDimensions {
    function implement(args: [options: {
        scrollOffset: number;
        precedingScrollExtent: number;
        viewportMainAxisExtent: number;
        crossAxisExtent: number;
    }], implementation: {}): SliverLayoutDimensions;
}
