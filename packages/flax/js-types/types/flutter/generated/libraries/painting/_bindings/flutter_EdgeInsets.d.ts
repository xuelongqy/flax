import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewPadding';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface EdgeInsets extends Omit<upstream0.EdgeInsetsGeometry, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
}> {
    readonly __EdgeInsets: unique symbol;
    readonly [_flaxDartTypeValue]: EdgeInsets;
    readonly isNonNegative: boolean;
    readonly horizontal: number;
    readonly vertical: number;
    readonly collapsedSize: upstream2.Size;
    readonly flipped: EdgeInsets;
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly topLeft: upstream3.Offset;
    readonly topRight: upstream3.Offset;
    readonly bottomLeft: upstream3.Offset;
    readonly bottomRight: upstream3.Offset;
    along(axis: upstream4.Axis): number;
    inflateSize(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream2.Size;
    deflateSize(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream2.Size;
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
    resolve(direction: upstream5.TextDirection | null): EdgeInsets;
    toString(): string;
    inflateRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream6.Rect;
    deflateRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): upstream6.Rect;
    inflateRRect(rect: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream7.RRect];
    }>): upstream7.RRect;
    deflateRRect(rect: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream7.RRect];
    }>): upstream7.RRect;
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
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>): EdgeInsets;
    operatorSubtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
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
    function fromViewPadding(padding: Readonly<{
        "__flaxBound:dart:ui::ViewPadding": readonly [];
    }>, devicePixelRatio: number): EdgeInsets;
}
export declare namespace _EdgeInsetsFactory {
    function fromWindowPadding(padding: Readonly<{
        "__flaxBound:dart:ui::ViewPadding": readonly [];
    }>, devicePixelRatio: number): EdgeInsets;
}
export declare namespace _EdgeInsetsFactory {
    const zero: EdgeInsets;
}
export declare namespace _EdgeInsetsFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null, t: number): EdgeInsets | null;
}
export declare const EdgeInsets: typeof _EdgeInsetsFactory & _FlaxInstanceType<EdgeInsets> & _FlaxDartType<EdgeInsets, readonly ["class", "flax.core/flutter#type:EdgeInsets", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isNonNegative" | "horizontal" | "vertical" | "collapsedSize" | "flipped" | "left" | "top" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "along" | "inflateSize" | "deflateSize" | "subtract" | "add" | "clamp" | "resolve" | "toString" | "inflateRect" | "deflateRect" | "inflateRRect" | "deflateRRect" | "copyWith" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "operatorNegate" | "operatorAdd" | "operatorSubtract" | "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets" | "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry";
export {};
