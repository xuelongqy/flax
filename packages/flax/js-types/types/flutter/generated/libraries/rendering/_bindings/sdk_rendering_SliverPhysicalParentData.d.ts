import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverPhysicalParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}> {
    readonly __SliverPhysicalParentData: unique symbol;
    readonly [_flaxDartTypeValue]: SliverPhysicalParentData;
    get paintOffset(): upstream1.Offset;
    get crossAxisFlex(): number | null;
    detach(): void;
    toString(): string;
    applyPaintTransform(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    set paintOffset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
    set crossAxisFlex(value: number | null);
}
export declare function _SliverPhysicalParentDataFactory(): SliverPhysicalParentData;
export interface _SliverPhysicalParentDataNative extends SliverPhysicalParentData {
    readonly [_flaxDartTypeValue]: _SliverPhysicalParentDataNative;
    detach(): void;
    toString(): string;
    applyPaintTransform(transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    get paintOffset(): upstream1.Offset;
    get crossAxisFlex(): number | null;
    set paintOffset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
    set crossAxisFlex(value: number | null);
}
export declare abstract class _SliverPhysicalParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverPhysicalParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliverPhysicalParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverPhysicalParentData", readonly [], false];
    constructor();
}
export declare namespace _SliverPhysicalParentDataFactory {
    function implement(args: [], implementation: {}): SliverPhysicalParentData;
}
declare const _SliverPhysicalParentDataBinding: typeof _SliverPhysicalParentDataFactory & (new () => _SliverPhysicalParentDataNative);
export declare const SliverPhysicalParentData: typeof _SliverPhysicalParentDataBinding & _FlaxInstanceType<SliverPhysicalParentData> & _FlaxDartType<SliverPhysicalParentData, readonly ["class", "flax.core/sdk_rendering#type:SliverPhysicalParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "paintOffset" | "crossAxisFlex" | "detach" | "toString" | "applyPaintTransform" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverPhysicalParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
export {};
