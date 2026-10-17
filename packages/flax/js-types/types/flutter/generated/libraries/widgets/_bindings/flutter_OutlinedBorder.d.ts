import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OutlinedBorder extends Omit<upstream0.ShapeBorder, typeof _flaxDartTypeValue | "dimensions" | "preferPaintInterior" | "side" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "copyWith" | "operatorAdd">, Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
}> {
    readonly __OutlinedBorder: unique symbol;
    readonly dimensions: upstream1.EdgeInsetsGeometry;
    readonly preferPaintInterior: boolean;
    readonly side: upstream2.BorderSide;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream0.ShapeBorder | null;
    scale(t: number): upstream0.ShapeBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream0.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream0.ShapeBorder | null;
    toString(): string;
    copyWith(options?: {
        side?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | null | undefined;
    }): OutlinedBorder;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream0.ShapeBorder;
}
export declare namespace _OutlinedBorderFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
    }> | null, t: number): OutlinedBorder | null;
}
export declare const OutlinedBorder: typeof _OutlinedBorderFactory & _FlaxInstanceType<OutlinedBorder> & _FlaxDartType<OutlinedBorder, readonly ["class", "flax.core/flutter#type:OutlinedBorder", readonly [], false]>;
