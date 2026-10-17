import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Border extends Omit<upstream0.BoxBorder, typeof _flaxDartTypeValue | "top" | "bottom" | "isUniform" | "preferPaintInterior" | "dimensions" | "right" | "left" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Omit<upstream1.ShapeBorder, typeof _flaxDartTypeValue | "top" | "bottom" | "isUniform" | "preferPaintInterior" | "dimensions" | "right" | "left" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Readonly<{
    "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
}> {
    readonly __Border: unique symbol;
    readonly top: upstream2.BorderSide;
    readonly bottom: upstream2.BorderSide;
    readonly isUniform: boolean;
    readonly preferPaintInterior: boolean;
    readonly dimensions: upstream5.EdgeInsetsGeometry;
    readonly right: upstream2.BorderSide;
    readonly left: upstream2.BorderSide;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): Border | null;
    scale(t: number): Border;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream1.ShapeBorder | null;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream1.ShapeBorder;
}
export declare function _BorderFactory(options?: {
    top?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
    right?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
    bottom?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
    left?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }> | undefined;
}): Border;
export declare namespace _BorderFactory {
    function fromBorderSide(side: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }>): Border;
}
export declare namespace _BorderFactory {
    function symmetric(options?: {
        vertical?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | undefined;
        horizontal?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | undefined;
    }): Border;
}
export declare namespace _BorderFactory {
    function all(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        width?: number | undefined;
        style?: upstream4.BorderStyle | undefined;
        strokeAlign?: number | undefined;
    }): Border;
}
export declare namespace _BorderFactory {
    function merge(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
    }>): Border;
}
export declare namespace _BorderFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
    }> | null, t: number): Border | null;
}
export declare const Border: typeof _BorderFactory & _FlaxInstanceType<Border> & _FlaxDartType<Border, readonly ["class", "flax.core/flutter#type:Border", readonly [], false]>;
