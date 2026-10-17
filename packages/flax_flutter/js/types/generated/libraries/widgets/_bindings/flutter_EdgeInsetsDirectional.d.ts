import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_Axis';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface EdgeInsetsDirectional extends Omit<upstream0.EdgeInsetsGeometry, typeof _flaxDartTypeValue | "isNonNegative" | "horizontal" | "vertical" | "collapsedSize" | "flipped" | "start" | "top" | "end" | "bottom" | "along" | "inflateSize" | "deflateSize" | "subtract" | "add" | "clamp" | "resolve" | "toString" | "copyWith" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract">, Readonly<{
    "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
}> {
    readonly __EdgeInsetsDirectional: unique symbol;
    readonly isNonNegative: boolean;
    readonly horizontal: number;
    readonly vertical: number;
    readonly collapsedSize: upstream1.Size;
    readonly flipped: EdgeInsetsDirectional;
    readonly start: number;
    readonly top: number;
    readonly end: number;
    readonly bottom: number;
    along(axis: upstream2.Axis): number;
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
    resolve(direction: upstream4.TextDirection | null): upstream3.EdgeInsets;
    toString(): string;
    copyWith(options?: {
        bottom?: number | null | undefined;
        end?: number | null | undefined;
        start?: number | null | undefined;
        top?: number | null | undefined;
    }): EdgeInsetsDirectional;
    operatorMultiply(other: number): EdgeInsetsDirectional;
    operatorDivide(other: number): EdgeInsetsDirectional;
    operatorTruncateDivide(other: number): EdgeInsetsDirectional;
    operatorModulo(other: number): EdgeInsetsDirectional;
    operatorNegate(): EdgeInsetsDirectional;
    operatorAdd(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
    }>): EdgeInsetsDirectional;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
    }>): EdgeInsetsDirectional;
}
export declare namespace _EdgeInsetsDirectionalFactory {
    function fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsDirectional;
}
export declare namespace _EdgeInsetsDirectionalFactory {
    function only(options?: {
        start?: number | undefined;
        top?: number | undefined;
        end?: number | undefined;
        bottom?: number | undefined;
    }): EdgeInsetsDirectional;
}
export declare namespace _EdgeInsetsDirectionalFactory {
    function symmetric(options?: {
        horizontal?: number | undefined;
        vertical?: number | undefined;
    }): EdgeInsetsDirectional;
}
export declare namespace _EdgeInsetsDirectionalFactory {
    function all(value: number): EdgeInsetsDirectional;
}
export declare namespace _EdgeInsetsDirectionalFactory {
    const zero: EdgeInsetsDirectional;
}
export declare namespace _EdgeInsetsDirectionalFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
    }> | null, t: number): EdgeInsetsDirectional | null;
}
export declare const EdgeInsetsDirectional: typeof _EdgeInsetsDirectionalFactory & _FlaxInstanceType<EdgeInsetsDirectional> & _FlaxDartType<EdgeInsetsDirectional, readonly ["class", "flax.core/flutter#type:EdgeInsetsDirectional", readonly [], false]>;
