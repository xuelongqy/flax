import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliverLogicalParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}> {
    readonly __SliverLogicalParentData: unique symbol;
    readonly [_flaxDartTypeValue]: SliverLogicalParentData;
}
export interface SliverLogicalParentData {
    readonly [_flaxDartTypeValue]: SliverLogicalParentData;
    detach(): void;
    toString(): string;
    get layoutOffset(): number | null;
    set layoutOffset(value: number | null);
}
export declare abstract class SliverLogicalParentData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverLogicalParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverLogicalParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverLogicalParentData", readonly [], false];
    constructor();
}
export declare namespace SliverLogicalParentData {
    function implement(args: [], implementation: {}): SliverLogicalParentData;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "layoutOffset" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLogicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
export {};
