import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverGridGeometry extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridGeometry": readonly [];
}> {
    readonly __SliverGridGeometry: unique symbol;
    readonly [_flaxDartTypeValue]: SliverGridGeometry;
    readonly scrollOffset: number;
    readonly crossAxisOffset: number;
    readonly mainAxisExtent: number;
    readonly crossAxisExtent: number;
    readonly trailingScrollOffset: number;
    getBoxConstraints(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream0.BoxConstraints;
    toString(): string;
}
export declare function _SliverGridGeometryFactory(options: {
    scrollOffset: number;
    crossAxisOffset: number;
    mainAxisExtent: number;
    crossAxisExtent: number;
}): SliverGridGeometry;
export interface _SliverGridGeometryNative extends SliverGridGeometry {
    readonly [_flaxDartTypeValue]: _SliverGridGeometryNative;
    getBoxConstraints(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream0.BoxConstraints;
    toString(): string;
    get scrollOffset(): number;
    get crossAxisOffset(): number;
    get mainAxisExtent(): number;
    get crossAxisExtent(): number;
    get trailingScrollOffset(): number;
}
export declare abstract class _SliverGridGeometryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridGeometry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverGridGeometry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridGeometry", readonly [], false];
    constructor(options: {
        scrollOffset: number;
        crossAxisOffset: number;
        mainAxisExtent: number;
        crossAxisExtent: number;
    });
}
export declare namespace _SliverGridGeometryFactory {
    function implement(args: [options: {
        scrollOffset: number;
        crossAxisOffset: number;
        mainAxisExtent: number;
        crossAxisExtent: number;
    }], implementation: {}): SliverGridGeometry;
}
declare const _SliverGridGeometryBinding: typeof _SliverGridGeometryFactory & (new (options: {
    scrollOffset: number;
    crossAxisOffset: number;
    mainAxisExtent: number;
    crossAxisExtent: number;
}) => _SliverGridGeometryNative);
export declare const SliverGridGeometry: typeof _SliverGridGeometryBinding & _FlaxInstanceType<SliverGridGeometry> & _FlaxDartType<SliverGridGeometry, readonly ["class", "flax.core/sdk_rendering#type:SliverGridGeometry", readonly [], false]>;
export {};
