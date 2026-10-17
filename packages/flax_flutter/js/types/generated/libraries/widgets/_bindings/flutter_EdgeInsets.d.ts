import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_Axis';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface EdgeInsets extends Omit<upstream0.EdgeInsetsGeometry, typeof _flaxDartTypeValue | "isNonNegative" | "horizontal" | "vertical" | "collapsedSize" | "flipped" | "left" | "top" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "along" | "inflateSize" | "deflateSize" | "subtract" | "add" | "clamp" | "resolve" | "toString" | "copyWith" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract">, Readonly<{
    "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
}> {
    readonly __EdgeInsets: unique symbol;
    readonly isNonNegative: boolean;
    readonly horizontal: number;
    readonly vertical: number;
    readonly collapsedSize: upstream1.Size;
    readonly flipped: EdgeInsets;
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly topLeft: upstream2.Offset;
    readonly topRight: upstream2.Offset;
    readonly bottomLeft: upstream2.Offset;
    readonly bottomRight: upstream2.Offset;
    along(axis: upstream3.Axis): number;
    inflateSize(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): upstream1.Size;
    deflateSize(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): upstream1.Size;
    subtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>): upstream0.EdgeInsetsGeometry;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>): upstream0.EdgeInsetsGeometry;
    clamp(min: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>, max: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>): upstream0.EdgeInsetsGeometry;
    resolve(direction: upstream4.TextDirection | null): EdgeInsets;
    toString(): string;
    copyWith(options?: {
        bottom?: number | null | undefined;
        left?: number | null | undefined;
        right?: number | null | undefined;
        top?: number | null | undefined;
    }): EdgeInsets;
    operatorMultiply(other: number): EdgeInsets;
    operatorDivide(other: number): EdgeInsets;
    operatorTruncateDivide(other: number): EdgeInsets;
    operatorModulo(other: number): EdgeInsets;
    operatorNegate(): EdgeInsets;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }>): EdgeInsets;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }>): EdgeInsets;
}
export declare namespace _EdgeInsetsFactory {
    function fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsets;
}
export declare namespace _EdgeInsetsFactory {
    function all(value: number): EdgeInsets;
}
export declare namespace _EdgeInsetsFactory {
    function only(options?: {
        left?: number | undefined;
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
    }): EdgeInsets;
}
export declare namespace _EdgeInsetsFactory {
    function symmetric(options?: {
        vertical?: number | undefined;
        horizontal?: number | undefined;
    }): EdgeInsets;
}
export declare namespace _EdgeInsetsFactory {
    const zero: EdgeInsets;
}
export declare namespace _EdgeInsetsFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> | null, t: number): EdgeInsets | null;
}
export declare const EdgeInsets: typeof _EdgeInsetsFactory & _FlaxInstanceType<EdgeInsets> & _FlaxDartType<EdgeInsets, readonly ["class", "flax.core/flutter#type:EdgeInsets", readonly [], false]>;
