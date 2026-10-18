import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NotchedShape extends Readonly<{
    "__flaxBound:package:flutter/src/painting/notched_shapes.dart::NotchedShape": readonly [];
}> {
    readonly __NotchedShape: unique symbol;
    readonly [_flaxDartTypeValue]: NotchedShape;
    getOuterPath(host: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, guest: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null): upstream0.Path;
}
export declare namespace _NotchedShapeFactory {
    function implement(args: [], implementation: {
        getOuterPath: ((host: upstream1.Rect, guest: upstream1.Rect | null) => Readonly<{
            "__flaxBound:dart:ui::Path": readonly [];
        }>);
    }): NotchedShape;
}
export declare const NotchedShape: typeof _NotchedShapeFactory & _FlaxInstanceType<NotchedShape> & _FlaxDartType<NotchedShape, readonly ["class", "flax.core/sdk_painting#type:NotchedShape", readonly [], false]>;
