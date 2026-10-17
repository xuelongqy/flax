import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VisualDensity extends Readonly<{
    "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __VisualDensity: unique symbol;
    readonly horizontal: number;
    readonly vertical: number;
    readonly baseSizeAdjustment: upstream0.Offset;
    copyWith(options?: {
        horizontal?: number | null | undefined;
        vertical?: number | null | undefined;
    }): VisualDensity;
    effectiveConstraints(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }>): upstream2.BoxConstraints;
    toStringShort(): string;
}
export declare function _VisualDensityFactory(options?: {
    horizontal?: number | undefined;
    vertical?: number | undefined;
}): VisualDensity;
export declare namespace _VisualDensityFactory {
    const minimumDensity: number;
}
export declare namespace _VisualDensityFactory {
    const maximumDensity: number;
}
export declare namespace _VisualDensityFactory {
    const standard: VisualDensity;
}
export declare namespace _VisualDensityFactory {
    const comfortable: VisualDensity;
}
export declare namespace _VisualDensityFactory {
    const compact: VisualDensity;
}
export declare namespace _VisualDensityFactory {
    const adaptivePlatformDensity: VisualDensity;
}
export declare namespace _VisualDensityFactory {
    function defaultDensityForPlatform(platform: upstream1.TargetPlatform): VisualDensity;
}
export declare namespace _VisualDensityFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }>, t: number): VisualDensity;
}
export declare const VisualDensity: typeof _VisualDensityFactory & _FlaxInstanceType<VisualDensity> & _FlaxDartType<VisualDensity, readonly ["class", "flax.material/material#type:VisualDensity", readonly [], false]>;
