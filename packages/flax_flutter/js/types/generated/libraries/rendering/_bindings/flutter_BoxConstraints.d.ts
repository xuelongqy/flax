import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewConstraints';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxConstraints extends Omit<upstream0.Constraints, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
}> {
    readonly __BoxConstraints: unique symbol;
    readonly [_flaxDartTypeValue]: BoxConstraints;
    readonly isTight: boolean;
    readonly isNormalized: boolean;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly minHeight: number;
    readonly maxHeight: number;
    readonly flipped: BoxConstraints;
    readonly biggest: upstream1.Size;
    readonly smallest: upstream1.Size;
    readonly hasTightWidth: boolean;
    readonly hasTightHeight: boolean;
    readonly hasBoundedWidth: boolean;
    readonly hasBoundedHeight: boolean;
    readonly hasInfiniteWidth: boolean;
    readonly hasInfiniteHeight: boolean;
    debugAssertIsValid(options?: {
        informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        isAppliedConstraint?: boolean | undefined;
    }): boolean;
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
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
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
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Size;
    constrainDimensions(width: number, height: number): upstream1.Size;
    constrainSizeAndAttemptToPreserveAspectRatio(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Size;
    isSatisfiedBy(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
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
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
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
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): BoxConstraints;
}
export declare namespace _BoxConstraintsFactory {
    function expand(options?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
    }): BoxConstraints;
}
export declare namespace _BoxConstraintsFactory {
    function fromViewConstraints(constraints: Readonly<{
        "__flaxBound:dart:ui::ViewConstraints": readonly [];
    }>): BoxConstraints;
}
export declare namespace _BoxConstraintsFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null, t: number): BoxConstraints | null;
}
export declare const BoxConstraints: typeof _BoxConstraintsFactory & _FlaxInstanceType<BoxConstraints> & _FlaxDartType<BoxConstraints, readonly ["class", "flax.core/flutter#type:BoxConstraints", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isTight" | "isNormalized" | "minWidth" | "maxWidth" | "minHeight" | "maxHeight" | "flipped" | "biggest" | "smallest" | "hasTightWidth" | "hasTightHeight" | "hasBoundedWidth" | "hasBoundedHeight" | "hasInfiniteWidth" | "hasInfiniteHeight" | "debugAssertIsValid" | "copyWith" | "deflate" | "loosen" | "enforce" | "tighten" | "widthConstraints" | "heightConstraints" | "constrainWidth" | "constrainHeight" | "constrain" | "constrainDimensions" | "constrainSizeAndAttemptToPreserveAspectRatio" | "isSatisfiedBy" | "normalize" | "toString" | "operatorMultiply" | "operatorDivide" | "operatorTruncateDivide" | "operatorModulo" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints" | "__flaxBound:package:flutter/src/rendering/object.dart::Constraints";
export {};
