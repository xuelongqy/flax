import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionUtils extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionUtils": readonly [];
}> {
    readonly __SelectionUtils: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionUtils;
}
export declare namespace _SelectionUtilsFactory {
    function getResultBasedOnRect(targetRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream0.SelectionResult;
}
export declare namespace _SelectionUtilsFactory {
    function adjustDragOffset(targetRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        direction?: upstream3.TextDirection | undefined;
    }): upstream2.Offset;
}
export declare const SelectionUtils: typeof _SelectionUtilsFactory & _FlaxInstanceType<SelectionUtils> & _FlaxDartType<SelectionUtils, readonly ["class", "flax.core/sdk_rendering#type:SelectionUtils", readonly [], false]>;
