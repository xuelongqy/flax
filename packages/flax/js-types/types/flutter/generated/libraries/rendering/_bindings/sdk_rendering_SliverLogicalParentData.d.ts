import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverLogicalParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}> {
    readonly __SliverLogicalParentData: unique symbol;
    readonly [_flaxDartTypeValue]: SliverLogicalParentData;
    get layoutOffset(): number | null;
    detach(): void;
    toString(): string;
    set layoutOffset(value: number | null);
}
export declare function _SliverLogicalParentDataFactory(): SliverLogicalParentData;
export interface _SliverLogicalParentDataNative extends SliverLogicalParentData {
    readonly [_flaxDartTypeValue]: _SliverLogicalParentDataNative;
    detach(): void;
    toString(): string;
    get layoutOffset(): number | null;
    set layoutOffset(value: number | null);
}
export declare abstract class _SliverLogicalParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverLogicalParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverLogicalParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalParentData", readonly [], false];
    constructor();
}
export declare namespace _SliverLogicalParentDataFactory {
    function implement(args: [], implementation: {}): SliverLogicalParentData;
}
declare const _SliverLogicalParentDataBinding: typeof _SliverLogicalParentDataFactory & (new () => _SliverLogicalParentDataNative);
export declare const SliverLogicalParentData: typeof _SliverLogicalParentDataBinding & _FlaxInstanceType<SliverLogicalParentData> & _FlaxDartType<SliverLogicalParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "layoutOffset" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
export {};
