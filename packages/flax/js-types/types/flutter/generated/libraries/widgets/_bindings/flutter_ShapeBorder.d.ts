import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ShapeBorder extends Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
}> {
    readonly __ShapeBorder: unique symbol;
    readonly dimensions: upstream0.EdgeInsetsGeometry;
    readonly preferPaintInterior: boolean;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): ShapeBorder | null;
    scale(t: number): ShapeBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): ShapeBorder | null;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): ShapeBorder;
}
export declare namespace _ShapeBorderFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): ShapeBorder | null;
}
export declare const ShapeBorder: typeof _ShapeBorderFactory & _FlaxInstanceType<ShapeBorder> & _FlaxDartType<ShapeBorder, readonly ["class", "flax.core/flutter#type:ShapeBorder", readonly [], false]>;
