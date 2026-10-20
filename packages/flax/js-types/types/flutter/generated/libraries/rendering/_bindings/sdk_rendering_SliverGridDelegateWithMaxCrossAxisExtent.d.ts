import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverGridDelegateWithMaxCrossAxisExtent extends Omit<upstream0.SliverGridDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
}> {
    readonly __SliverGridDelegateWithMaxCrossAxisExtent: unique symbol;
    readonly [_flaxDartTypeValue]: SliverGridDelegateWithMaxCrossAxisExtent;
    readonly maxCrossAxisExtent: number;
    readonly mainAxisSpacing: number;
    readonly crossAxisSpacing: number;
    readonly childAspectRatio: number;
    readonly mainAxisExtent: number | null;
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
}
export declare function _SliverGridDelegateWithMaxCrossAxisExtentFactory(options: {
    maxCrossAxisExtent: number;
    mainAxisSpacing?: number | undefined;
    crossAxisSpacing?: number | undefined;
    childAspectRatio?: number | undefined;
    mainAxisExtent?: number | null | undefined;
}): SliverGridDelegateWithMaxCrossAxisExtent;
export interface _SliverGridDelegateWithMaxCrossAxisExtentNative extends SliverGridDelegateWithMaxCrossAxisExtent {
    readonly [_flaxDartTypeValue]: _SliverGridDelegateWithMaxCrossAxisExtentNative;
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
export declare abstract class _SliverGridDelegateWithMaxCrossAxisExtentNative extends _FlaxProxyBase {
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
export declare namespace _SliverGridDelegateWithMaxCrossAxisExtentFactory {
    function implement(args: [options: {
        maxCrossAxisExtent: number;
        mainAxisSpacing?: number | undefined;
        crossAxisSpacing?: number | undefined;
        childAspectRatio?: number | undefined;
        mainAxisExtent?: number | null | undefined;
    }], implementation: {}): SliverGridDelegateWithMaxCrossAxisExtent;
}
declare const _SliverGridDelegateWithMaxCrossAxisExtentBinding: typeof _SliverGridDelegateWithMaxCrossAxisExtentFactory & (new (options: {
    maxCrossAxisExtent: number;
    mainAxisSpacing?: number | undefined;
    crossAxisSpacing?: number | undefined;
    childAspectRatio?: number | undefined;
    mainAxisExtent?: number | null | undefined;
}) => _SliverGridDelegateWithMaxCrossAxisExtentNative);
export declare const SliverGridDelegateWithMaxCrossAxisExtent: typeof _SliverGridDelegateWithMaxCrossAxisExtentBinding & _FlaxInstanceType<SliverGridDelegateWithMaxCrossAxisExtent> & _FlaxDartType<SliverGridDelegateWithMaxCrossAxisExtent, readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithMaxCrossAxisExtent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "maxCrossAxisExtent" | "mainAxisSpacing" | "crossAxisSpacing" | "childAspectRatio" | "mainAxisExtent" | "getLayout" | "shouldRelayout" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithMaxCrossAxisExtent" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate";
export {};
