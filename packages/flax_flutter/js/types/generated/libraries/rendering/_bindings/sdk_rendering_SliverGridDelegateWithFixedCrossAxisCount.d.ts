import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridLayout';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverGridDelegateWithFixedCrossAxisCount extends Omit<upstream0.SliverGridDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
}> {
    readonly __SliverGridDelegateWithFixedCrossAxisCount: unique symbol;
    readonly [_flaxDartTypeValue]: SliverGridDelegateWithFixedCrossAxisCount;
    readonly crossAxisCount: number;
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
        "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
    }>): boolean;
}
export declare function _SliverGridDelegateWithFixedCrossAxisCountFactory(options: {
    crossAxisCount: number;
    mainAxisSpacing?: number | undefined;
    crossAxisSpacing?: number | undefined;
    childAspectRatio?: number | undefined;
    mainAxisExtent?: number | null | undefined;
}): SliverGridDelegateWithFixedCrossAxisCount;
export interface _SliverGridDelegateWithFixedCrossAxisCountNative extends SliverGridDelegateWithFixedCrossAxisCount {
    readonly [_flaxDartTypeValue]: _SliverGridDelegateWithFixedCrossAxisCountNative;
    getLayout(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream1.SliverGridLayout;
    shouldRelayout(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [];
    }>): boolean;
    get crossAxisCount(): number;
    get mainAxisSpacing(): number;
    get crossAxisSpacing(): number;
    get childAspectRatio(): number;
    get mainAxisExtent(): number | null;
}
export declare abstract class _SliverGridDelegateWithFixedCrossAxisCountNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGridDelegateWithFixedCrossAxisCount>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverGridDelegateWithFixedCrossAxisCount;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", readonly [], false];
    constructor(options: {
        crossAxisCount: number;
        mainAxisSpacing?: number | undefined;
        crossAxisSpacing?: number | undefined;
        childAspectRatio?: number | undefined;
        mainAxisExtent?: number | null | undefined;
    });
}
export declare namespace _SliverGridDelegateWithFixedCrossAxisCountFactory {
    function implement(args: [options: {
        crossAxisCount: number;
        mainAxisSpacing?: number | undefined;
        crossAxisSpacing?: number | undefined;
        childAspectRatio?: number | undefined;
        mainAxisExtent?: number | null | undefined;
    }], implementation: {}): SliverGridDelegateWithFixedCrossAxisCount;
}
declare const _SliverGridDelegateWithFixedCrossAxisCountBinding: typeof _SliverGridDelegateWithFixedCrossAxisCountFactory & (new (options: {
    crossAxisCount: number;
    mainAxisSpacing?: number | undefined;
    crossAxisSpacing?: number | undefined;
    childAspectRatio?: number | undefined;
    mainAxisExtent?: number | null | undefined;
}) => _SliverGridDelegateWithFixedCrossAxisCountNative);
export declare const SliverGridDelegateWithFixedCrossAxisCount: typeof _SliverGridDelegateWithFixedCrossAxisCountBinding & _FlaxInstanceType<SliverGridDelegateWithFixedCrossAxisCount> & _FlaxDartType<SliverGridDelegateWithFixedCrossAxisCount, readonly ["class", "flax.core/sdk_rendering#type:SliverGridDelegateWithFixedCrossAxisCount", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "crossAxisCount" | "mainAxisSpacing" | "crossAxisSpacing" | "childAspectRatio" | "mainAxisExtent" | "getLayout" | "shouldRelayout" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegateWithFixedCrossAxisCount" | "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate";
export {};
