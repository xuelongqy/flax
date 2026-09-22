import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
export interface BorderSide extends Readonly<{
    "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __BorderSide: unique symbol;
    readonly color: upstream0.Color;
    readonly width: number;
    readonly style: upstream1.BorderStyle;
    readonly strokeAlign: number;
    copyWith(options?: {
        color?: upstream0.Color | null | undefined;
        strokeAlign?: number | null | undefined;
        style?: upstream1.BorderStyle | null | undefined;
        width?: number | null | undefined;
    }): BorderSide;
}
export declare function BorderSide(options?: {
    color?: upstream0.Color | undefined;
    width?: number | undefined;
    style?: upstream1.BorderStyle | undefined;
    strokeAlign?: number | undefined;
}): BorderSide;
export declare namespace BorderSide {
    const none: BorderSide;
}
export declare namespace BorderSide {
    const strokeAlignInside: number;
}
export declare namespace BorderSide {
    const strokeAlignCenter: number;
}
export declare namespace BorderSide {
    const strokeAlignOutside: number;
}
