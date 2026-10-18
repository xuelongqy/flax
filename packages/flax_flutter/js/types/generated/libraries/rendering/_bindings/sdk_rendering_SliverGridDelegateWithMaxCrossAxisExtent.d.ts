import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverGridDelegateWithMaxCrossAxisExtent extends Omit<upstream0.SliverGridDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
}> {
    readonly __SliverGridDelegateWithMaxCrossAxisExtent: unique symbol;
    readonly [_flaxDartTypeValue]: SliverGridDelegateWithMaxCrossAxisExtent;
}
export interface SliverGridDelegateWithMaxCrossAxisExtent {
    readonly [_flaxDartTypeValue]: SliverGridDelegateWithMaxCrossAxisExtent;
    getLayout(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream1.SliverGridLayout;
    shouldRelayout(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
    }>): boolean;
    get maxCrossAxisExtent(): number;
    get mainAxisSpacing(): number;
    get crossAxisSpacing(): number;
    get childAspectRatio(): number;
    get mainAxisExtent(): number | null;
}
export declare abstract class SliverGridDelegateWithMaxCrossAxisExtent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridDelegateWithMaxCrossAxisExtent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverGridDelegateWithMaxCrossAxisExtent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", readonly [], false];
    constructor(options: {
        maxCrossAxisExtent: number;
        mainAxisSpacing?: number | undefined;
        crossAxisSpacing?: number | undefined;
        childAspectRatio?: number | undefined;
        mainAxisExtent?: number | null | undefined;
    });
}
export declare namespace SliverGridDelegateWithMaxCrossAxisExtent {
    function implement(args: [options: {
        maxCrossAxisExtent: number;
        mainAxisSpacing?: number | undefined;
        crossAxisSpacing?: number | undefined;
        childAspectRatio?: number | undefined;
        mainAxisExtent?: number | null | undefined;
    }], implementation: {}): SliverGridDelegateWithMaxCrossAxisExtent;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "maxCrossAxisExtent" | "mainAxisSpacing" | "crossAxisSpacing" | "childAspectRatio" | "mainAxisExtent" | "getLayout" | "shouldRelayout" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate";
export {};
