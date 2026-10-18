import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ElevationOverlay extends Readonly<{
    "__flaxBound:package:flutter/src/material/elevation_overlay.dart::ElevationOverlay": readonly [];
}> {
    readonly __ElevationOverlay: unique symbol;
    readonly [_flaxDartTypeValue]: ElevationOverlay;
}
export declare namespace _ElevationOverlayFactory {
    function applySurfaceTint(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>, surfaceTint: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, elevation: number): upstream0.Color;
}
export declare namespace _ElevationOverlayFactory {
    function applyOverlay(context: upstream1.BuildContext, color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>, elevation: number): upstream0.Color;
}
export declare namespace _ElevationOverlayFactory {
    function overlayColor(context: upstream1.BuildContext, elevation: number): upstream0.Color;
}
export declare namespace _ElevationOverlayFactory {
    function colorWithOverlay(surface: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>, overlay: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>, elevation: number): upstream0.Color;
}
export declare const ElevationOverlay: typeof _ElevationOverlayFactory & _FlaxInstanceType<ElevationOverlay> & _FlaxDartType<ElevationOverlay, readonly ["class", "flax.core/sdk_material#type:ElevationOverlay", readonly [], false]>;
