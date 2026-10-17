import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_Axis';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsets';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface EdgeInsetsGeometry extends Readonly<{
    "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
}> {
    readonly __EdgeInsetsGeometry: unique symbol;
    readonly isNonNegative: boolean;
    readonly horizontal: number;
    readonly vertical: number;
    readonly collapsedSize: upstream0.Size;
    readonly flipped: EdgeInsetsGeometry;
    along(axis: upstream1.Axis): number;
    inflateSize(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): upstream0.Size;
    deflateSize(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): upstream0.Size;
    subtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>): EdgeInsetsGeometry;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>): EdgeInsetsGeometry;
    clamp(min: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>, max: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>): EdgeInsetsGeometry;
    resolve(direction: upstream3.TextDirection | null): upstream2.EdgeInsets;
    toString(): string;
    operatorMultiply(other: number): EdgeInsetsGeometry;
    operatorDivide(other: number): EdgeInsetsGeometry;
    operatorTruncateDivide(other: number): EdgeInsetsGeometry;
    operatorModulo(other: number): EdgeInsetsGeometry;
    operatorNegate(): EdgeInsetsGeometry;
}
export declare namespace _EdgeInsetsGeometryFactory {
    function all(value: number): EdgeInsetsGeometry;
}
export declare namespace _EdgeInsetsGeometryFactory {
    function only(options?: {
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
        bottom?: number | undefined;
    }): EdgeInsetsGeometry;
}
export declare namespace _EdgeInsetsGeometryFactory {
    function directional(options?: {
        start?: number | undefined;
        end?: number | undefined;
        top?: number | undefined;
        bottom?: number | undefined;
    }): EdgeInsetsGeometry;
}
export declare namespace _EdgeInsetsGeometryFactory {
    function symmetric(options?: {
        vertical?: number | undefined;
        horizontal?: number | undefined;
    }): EdgeInsetsGeometry;
}
export declare namespace _EdgeInsetsGeometryFactory {
    function fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsetsGeometry;
}
export declare namespace _EdgeInsetsGeometryFactory {
    function fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsGeometry;
}
export declare namespace _EdgeInsetsGeometryFactory {
    const zero: EdgeInsetsGeometry;
}
export declare namespace _EdgeInsetsGeometryFactory {
    const infinity: EdgeInsetsGeometry;
}
export declare namespace _EdgeInsetsGeometryFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null, t: number): EdgeInsetsGeometry | null;
}
export declare const EdgeInsetsGeometry: typeof _EdgeInsetsGeometryFactory & _FlaxInstanceType<EdgeInsetsGeometry> & _FlaxDartType<EdgeInsetsGeometry, readonly ["class", "flax.core/flutter#type:EdgeInsetsGeometry", readonly [], false]>;
