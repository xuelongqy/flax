import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}> {
    readonly __BoxParentData: unique symbol;
    readonly [_flaxDartTypeValue]: BoxParentData;
    get offset(): upstream1.Offset;
    detach(): void;
    toString(): string;
    set offset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
}
export declare function _BoxParentDataFactory(): BoxParentData;
export interface _BoxParentDataNative extends BoxParentData {
    readonly [_flaxDartTypeValue]: _BoxParentDataNative;
    detach(): void;
    toString(): string;
    get offset(): upstream1.Offset;
    set offset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
}
export declare abstract class _BoxParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BoxParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:BoxParentData", readonly [], false];
    constructor();
}
export declare namespace _BoxParentDataFactory {
    function implement(args: [], implementation: {}): BoxParentData;
}
declare const _BoxParentDataBinding: typeof _BoxParentDataFactory & (new () => _BoxParentDataNative);
export declare const BoxParentData: typeof _BoxParentDataBinding & _FlaxInstanceType<BoxParentData> & _FlaxDartType<BoxParentData, readonly ["class", "flax.core/sdk_rendering#type:BoxParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
export {};
