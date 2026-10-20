import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverLayoutDimensions extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLayoutDimensions": readonly [];
}> {
    readonly __SliverLayoutDimensions: unique symbol;
    readonly [_flaxDartTypeValue]: SliverLayoutDimensions;
    readonly scrollOffset: number;
    readonly precedingScrollExtent: number;
    readonly viewportMainAxisExtent: number;
    readonly crossAxisExtent: number;
    toString(): string;
}
export declare function _SliverLayoutDimensionsFactory(options: {
    scrollOffset: number;
    precedingScrollExtent: number;
    viewportMainAxisExtent: number;
    crossAxisExtent: number;
}): SliverLayoutDimensions;
export interface _SliverLayoutDimensionsNative extends SliverLayoutDimensions {
    readonly [_flaxDartTypeValue]: _SliverLayoutDimensionsNative;
    toString(): string;
    get scrollOffset(): number;
    get precedingScrollExtent(): number;
    get viewportMainAxisExtent(): number;
    get crossAxisExtent(): number;
}
export declare abstract class _SliverLayoutDimensionsNative extends _FlaxProxyBase {
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
export declare namespace _SliverLayoutDimensionsFactory {
    function implement(args: [options: {
        scrollOffset: number;
        precedingScrollExtent: number;
        viewportMainAxisExtent: number;
        crossAxisExtent: number;
    }], implementation: {}): SliverLayoutDimensions;
}
declare const _SliverLayoutDimensionsBinding: typeof _SliverLayoutDimensionsFactory & (new (options: {
    scrollOffset: number;
    precedingScrollExtent: number;
    viewportMainAxisExtent: number;
    crossAxisExtent: number;
}) => _SliverLayoutDimensionsNative);
export declare const SliverLayoutDimensions: typeof _SliverLayoutDimensionsBinding & _FlaxInstanceType<SliverLayoutDimensions> & _FlaxDartType<SliverLayoutDimensions, readonly ["class", "flax.core/sdk_rendering#type:SliverLayoutDimensions", readonly [], false]>;
export {};
