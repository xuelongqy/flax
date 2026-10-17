import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CircleBorder extends Omit<upstream0.OutlinedBorder, typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "eccentricity" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "toString" | "operatorAdd">, Omit<upstream1.ShapeBorder, typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "eccentricity" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "toString" | "operatorAdd">, Readonly<{
    "__flaxBound:package:flutter/src/painting/circle_border.dart::CircleBorder": readonly [];
}> {
    readonly __CircleBorder: unique symbol;
    readonly dimensions: upstream3.EdgeInsetsGeometry;
    readonly side: upstream2.BorderSide;
    readonly preferPaintInterior: boolean;
    readonly eccentricity: number;
    copyWith(options?: {
        eccentricity?: number | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | null | undefined;
    }): CircleBorder;
    scale(t: number): upstream1.ShapeBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream1.ShapeBorder | null;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
}
export declare function _CircleBorderFactory(options?: {
    side?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
    eccentricity?: number | undefined;
}): CircleBorder;
export declare const CircleBorder: typeof _CircleBorderFactory & _FlaxInstanceType<CircleBorder> & _FlaxDartType<CircleBorder, readonly ["class", "flax.core/flutter#type:CircleBorder", readonly [], false]>;
