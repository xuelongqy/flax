import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverGridGeometry extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridGeometry": readonly [];
}> {
    readonly __SliverGridGeometry: unique symbol;
    readonly [_flaxDartTypeValue]: SliverGridGeometry;
}
export interface SliverGridGeometry {
    readonly [_flaxDartTypeValue]: SliverGridGeometry;
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
export declare abstract class SliverGridGeometry extends _FlaxProxyBase {
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
export declare namespace SliverGridGeometry {
    function implement(args: [options: {
        scrollOffset: number;
        crossAxisOffset: number;
        mainAxisExtent: number;
        crossAxisExtent: number;
    }], implementation: {}): SliverGridGeometry;
}
