import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Decoration';
import '@flax/flutter/widgets/_bindings/flutter_Decoration';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BoxShape';
import '@flax/flutter/widgets/_bindings/flutter_BoxShape';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream8 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxDecoration extends Omit<upstream0.Decoration, typeof _flaxDartTypeValue | "padding" | "isComplex" | "color" | "border" | "borderRadius" | "shape" | "toStringShort" | "debugAssertIsValid" | "lerpFrom" | "lerpTo" | "hitTest" | "copyWith" | "scale">, Readonly<{
    "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __BoxDecoration: unique symbol;
    readonly padding: upstream5.EdgeInsetsGeometry;
    readonly isComplex: boolean;
    readonly color: upstream1.Color | null;
    readonly border: upstream2.BoxBorder | null;
    readonly borderRadius: upstream3.BorderRadiusGeometry | null;
    readonly shape: upstream4.BoxShape;
    toStringShort(): string;
    debugAssertIsValid(): boolean;
    lerpFrom(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> | null, t: number): BoxDecoration | null;
    lerpTo(b: Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> | null, t: number): BoxDecoration | null;
    hitTest(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>, position: upstream7.Offset, options?: {
        textDirection?: upstream8.TextDirection | null | undefined;
    }): boolean;
    copyWith(options?: {
        border?: Readonly<{
            "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
        }> | null | undefined;
        borderRadius?: Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }> | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shape?: upstream4.BoxShape | null | undefined;
    }): BoxDecoration;
    scale(factor: number): BoxDecoration;
}
export declare function _BoxDecorationFactory(options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    border?: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
    }> | null | undefined;
    borderRadius?: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | null | undefined;
    shape?: upstream4.BoxShape | undefined;
}): BoxDecoration;
export declare namespace _BoxDecorationFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [];
    }> | null, t: number): BoxDecoration | null;
}
export declare const BoxDecoration: typeof _BoxDecorationFactory & _FlaxInstanceType<BoxDecoration> & _FlaxDartType<BoxDecoration, readonly ["class", "flax.core/flutter#type:BoxDecoration", readonly [], false]>;
