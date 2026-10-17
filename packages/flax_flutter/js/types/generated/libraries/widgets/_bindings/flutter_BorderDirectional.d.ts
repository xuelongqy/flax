import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BorderDirectional extends Omit<upstream0.BoxBorder, typeof _flaxDartTypeValue | "top" | "bottom" | "isUniform" | "preferPaintInterior" | "dimensions" | "start" | "end" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Omit<upstream1.ShapeBorder, typeof _flaxDartTypeValue | "top" | "bottom" | "isUniform" | "preferPaintInterior" | "dimensions" | "start" | "end" | "add" | "scale" | "lerpFrom" | "lerpTo" | "toString" | "operatorAdd">, Readonly<{
    "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [];
}> {
    readonly __BorderDirectional: unique symbol;
    readonly top: upstream2.BorderSide;
    readonly bottom: upstream2.BorderSide;
    readonly isUniform: boolean;
    readonly preferPaintInterior: boolean;
    readonly dimensions: upstream3.EdgeInsetsGeometry;
    readonly start: upstream2.BorderSide;
    readonly end: upstream2.BorderSide;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>, options?: {
        reversed?: boolean | undefined;
    }): upstream0.BoxBorder | null;
    scale(t: number): BorderDirectional;
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
export declare function _BorderDirectionalFactory(options?: {
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
}): BorderDirectional;
export declare namespace _BorderDirectionalFactory {
    function merge(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [];
    }>): BorderDirectional;
}
export declare namespace _BorderDirectionalFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [];
    }> | null, t: number): BorderDirectional | null;
}
export declare const BorderDirectional: typeof _BorderDirectionalFactory & _FlaxInstanceType<BorderDirectional> & _FlaxDartType<BorderDirectional, readonly ["class", "flax.core/flutter#type:BorderDirectional", readonly [], false]>;
