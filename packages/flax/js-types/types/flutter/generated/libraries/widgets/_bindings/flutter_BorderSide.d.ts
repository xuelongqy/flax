import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
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
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        strokeAlign?: number | null | undefined;
        style?: upstream1.BorderStyle | null | undefined;
        width?: number | null | undefined;
    }): BorderSide;
}
declare function _BorderSideFactory(options?: {
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    width?: number | undefined;
    style?: upstream1.BorderStyle | undefined;
    strokeAlign?: number | undefined;
}): BorderSide;
declare namespace _BorderSideFactory {
    const none: BorderSide;
}
declare namespace _BorderSideFactory {
    const strokeAlignInside: number;
}
declare namespace _BorderSideFactory {
    const strokeAlignCenter: number;
}
declare namespace _BorderSideFactory {
    const strokeAlignOutside: number;
}
export declare const BorderSide: typeof _BorderSideFactory & _FlaxInstanceType<BorderSide>;
export {};
