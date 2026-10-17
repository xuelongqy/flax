import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/widgets/_bindings/flutter_OutlinedBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RoundedRectangleBorder extends Omit<upstream0.OutlinedBorder, typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "borderRadius" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "toString" | "operatorAdd">, Omit<upstream1.ShapeBorder, typeof _flaxDartTypeValue | "dimensions" | "side" | "preferPaintInterior" | "borderRadius" | "copyWith" | "scale" | "lerpFrom" | "lerpTo" | "add" | "toString" | "operatorAdd">, Readonly<{
    "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::RoundedRectangleBorder": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/rounded_rectangle_border.dart::_RRectLikeBorder": readonly [];
}> {
    readonly __RoundedRectangleBorder: unique symbol;
    readonly dimensions: upstream4.EdgeInsetsGeometry;
    readonly side: upstream2.BorderSide;
    readonly preferPaintInterior: boolean;
    readonly borderRadius: upstream3.BorderRadiusGeometry;
    copyWith(options?: {
        borderRadius?: Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }> | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | null | undefined;
    }): RoundedRectangleBorder;
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
export declare function _RoundedRectangleBorderFactory(options?: {
    side?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
    borderRadius?: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | undefined;
}): RoundedRectangleBorder;
export declare const RoundedRectangleBorder: typeof _RoundedRectangleBorderFactory & _FlaxInstanceType<RoundedRectangleBorder> & _FlaxDartType<RoundedRectangleBorder, readonly ["class", "flax.core/flutter#type:RoundedRectangleBorder", readonly [], false]>;
