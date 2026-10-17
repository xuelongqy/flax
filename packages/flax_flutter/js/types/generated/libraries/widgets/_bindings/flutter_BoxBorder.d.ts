import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxBorder extends Omit<upstream0.ShapeBorder, typeof _flaxDartTypeValue | "dimensions" | "preferPaintInterior" | "top" | "bottom" | "isUniform" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Readonly<{
    "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
}> {
    readonly __BoxBorder: unique symbol;
    readonly dimensions: upstream4.EdgeInsetsGeometry;
    readonly preferPaintInterior: boolean;
    readonly top: upstream1.BorderSide;
    readonly bottom: upstream1.BorderSide;
    readonly isUniform: boolean;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): BoxBorder | null;
    scale(t: number): upstream0.ShapeBorder;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream0.ShapeBorder | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null, t: number): upstream0.ShapeBorder | null;
    toString(): string;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>): upstream0.ShapeBorder;
}
export declare namespace _BoxBorderFactory {
    function fromLTRB(options?: {
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
    }): BoxBorder;
}
export declare namespace _BoxBorderFactory {
    function all(options?: {
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        width?: number | undefined;
        style?: upstream3.BorderStyle | undefined;
        strokeAlign?: number | undefined;
    }): BoxBorder;
}
export declare namespace _BoxBorderFactory {
    function fromBorderSide(side: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
    }>): BoxBorder;
}
export declare namespace _BoxBorderFactory {
    function symmetric(options?: {
        vertical?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | undefined;
        horizontal?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | undefined;
    }): BoxBorder;
}
export declare namespace _BoxBorderFactory {
    function fromSTEB(options?: {
        top?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | undefined;
        start?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | undefined;
        end?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | undefined;
        bottom?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
        }> | undefined;
    }): BoxBorder;
}
export declare namespace _BoxBorderFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
    }> | null, t: number): BoxBorder | null;
}
export declare const BoxBorder: typeof _BoxBorderFactory & _FlaxInstanceType<BoxBorder> & _FlaxDartType<BoxBorder, readonly ["class", "flax.core/flutter#type:BoxBorder", readonly [], false]>;
