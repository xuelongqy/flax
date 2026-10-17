import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxConstraints extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
}> {
    readonly __BoxConstraints: unique symbol;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly minHeight: number;
    readonly maxHeight: number;
    readonly flipped: BoxConstraints;
    readonly biggest: upstream0.Size;
    readonly smallest: upstream0.Size;
    readonly hasTightWidth: boolean;
    readonly hasTightHeight: boolean;
    readonly isTight: boolean;
    readonly hasBoundedWidth: boolean;
    readonly hasBoundedHeight: boolean;
    readonly hasInfiniteWidth: boolean;
    readonly hasInfiniteHeight: boolean;
    readonly isNormalized: boolean;
    copyWith(options?: {
        maxHeight?: number | null | undefined;
        maxWidth?: number | null | undefined;
        minHeight?: number | null | undefined;
        minWidth?: number | null | undefined;
    }): BoxConstraints;
    deflate(edges: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>): BoxConstraints;
    loosen(): BoxConstraints;
    enforce(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }>): BoxConstraints;
    tighten(options?: {
        height?: number | null | undefined;
        width?: number | null | undefined;
    }): BoxConstraints;
    widthConstraints(): BoxConstraints;
    heightConstraints(): BoxConstraints;
    constrainWidth(width?: number): number;
    constrainHeight(height?: number): number;
    constrain(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): upstream0.Size;
    constrainDimensions(width: number, height: number): upstream0.Size;
    constrainSizeAndAttemptToPreserveAspectRatio(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): upstream0.Size;
    isSatisfiedBy(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): boolean;
    debugAssertIsValid(options?: {
        isAppliedConstraint?: boolean | undefined;
    }): boolean;
    normalize(): BoxConstraints;
    toString(): string;
    operatorMultiply(factor: number): BoxConstraints;
    operatorDivide(factor: number): BoxConstraints;
    operatorTruncateDivide(factor: number): BoxConstraints;
    operatorModulo(value: number): BoxConstraints;
}
export declare function _BoxConstraintsFactory(options?: {
    minWidth?: number | undefined;
    maxWidth?: number | undefined;
    minHeight?: number | undefined;
    maxHeight?: number | undefined;
}): BoxConstraints;
export declare namespace _BoxConstraintsFactory {
    function tight(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): BoxConstraints;
}
export declare namespace _BoxConstraintsFactory {
    function tightFor(options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    }): BoxConstraints;
}
export declare namespace _BoxConstraintsFactory {
    function tightForFinite(options?: {
        width?: number | undefined;
        height?: number | undefined;
    }): BoxConstraints;
}
export declare namespace _BoxConstraintsFactory {
    function loose(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }>): BoxConstraints;
}
export declare namespace _BoxConstraintsFactory {
    function expand(options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    }): BoxConstraints;
}
export declare namespace _BoxConstraintsFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> | null, t: number): BoxConstraints | null;
}
export declare const BoxConstraints: typeof _BoxConstraintsFactory & _FlaxInstanceType<BoxConstraints> & _FlaxDartType<BoxConstraints, readonly ["class", "flax.core/flutter#type:BoxConstraints", readonly [], false]>;
