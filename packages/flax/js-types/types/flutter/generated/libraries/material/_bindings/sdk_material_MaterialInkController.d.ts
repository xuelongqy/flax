import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import '@flax/flutter/material/_bindings/sdk_material_InkFeature';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialInkController extends Readonly<{
    "__flaxBound:package:flutter/src/material/material.dart::MaterialInkController": readonly [];
}> {
    readonly __MaterialInkController: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialInkController;
    readonly color: upstream0.Color | null;
    readonly vsync: upstream1.TickerProvider;
    addInkFeature(feature: Readonly<{
        "__flaxBound:package:flutter/src/material/material.dart::InkFeature": readonly [];
    }>): void;
    markNeedsPaint(): void;
}
export declare namespace _MaterialInkControllerFactory {
    function implement(args: [], implementation: {
        addInkFeature: ((feature: upstream2.InkFeature) => void);
        markNeedsPaint: (() => void);
        get color(): Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null;
        get vsync(): Readonly<{
            "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
        }>;
    }): MaterialInkController;
}
export declare const MaterialInkController: typeof _MaterialInkControllerFactory & _FlaxInstanceType<MaterialInkController> & _FlaxDartType<MaterialInkController, readonly ["class", "flax.core/sdk_material#type:MaterialInkController", readonly [], false]>;
