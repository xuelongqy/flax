import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TwoDimensionalViewportParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Omit<upstream1.KeepAliveParentDataMixin, _flaxOwnMembers0 | keyof upstream0.ParentData>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::TwoDimensionalViewportParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin": readonly [];
}> {
    readonly __TwoDimensionalViewportParentData: unique symbol;
    readonly [_flaxDartTypeValue]: TwoDimensionalViewportParentData;
    get keepAlive(): boolean;
    readonly keptAlive: boolean;
    get layoutOffset(): upstream2.Offset | null;
    get vicinity(): upstream3.ChildVicinity;
    readonly isVisible: boolean;
    get paintOffset(): upstream2.Offset | null;
    detach(): void;
    toString(): string;
    set keepAlive(value: boolean);
    set layoutOffset(value: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
    set vicinity(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.ChildVicinity];
    }>);
    set paintOffset(value: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
}
export declare function _TwoDimensionalViewportParentDataFactory(): TwoDimensionalViewportParentData;
export interface _TwoDimensionalViewportParentDataNative extends TwoDimensionalViewportParentData {
    readonly [_flaxDartTypeValue]: _TwoDimensionalViewportParentDataNative;
    detach(): void;
    toString(): string;
    get layoutOffset(): upstream2.Offset | null;
    get vicinity(): upstream3.ChildVicinity;
    get isVisible(): boolean;
    get paintOffset(): upstream2.Offset | null;
    get keptAlive(): boolean;
    get keepAlive(): boolean;
    set layoutOffset(value: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
    set vicinity(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream3.ChildVicinity];
    }>);
    set paintOffset(value: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null);
    set keepAlive(value: boolean);
}
export declare abstract class _TwoDimensionalViewportParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TwoDimensionalViewportParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TwoDimensionalViewportParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalViewportParentData", readonly [], false];
    constructor();
}
export declare namespace _TwoDimensionalViewportParentDataFactory {
    function implement(args: [], implementation: {}): TwoDimensionalViewportParentData;
}
declare const _TwoDimensionalViewportParentDataBinding: typeof _TwoDimensionalViewportParentDataFactory & (new () => _TwoDimensionalViewportParentDataNative);
export declare const TwoDimensionalViewportParentData: typeof _TwoDimensionalViewportParentDataBinding & _FlaxInstanceType<TwoDimensionalViewportParentData> & _FlaxDartType<TwoDimensionalViewportParentData, readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalViewportParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "keepAlive" | "keptAlive" | "layoutOffset" | "vicinity" | "isVisible" | "paintOffset" | "detach" | "toString" | "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::TwoDimensionalViewportParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin";
export {};
