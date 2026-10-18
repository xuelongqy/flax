import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BorderRadiusGeometry extends Readonly<{
    "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
}> {
    readonly __BorderRadiusGeometry: unique symbol;
    readonly [_flaxDartTypeValue]: BorderRadiusGeometry;
    subtract(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>): BorderRadiusGeometry;
    add(other: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>): BorderRadiusGeometry;
    resolve(direction: upstream2.TextDirection | null): upstream1.BorderRadius;
    toString(): string;
    operatorMultiply(other: number): BorderRadiusGeometry;
    operatorDivide(other: number): BorderRadiusGeometry;
    operatorTruncateDivide(other: number): BorderRadiusGeometry;
    operatorModulo(other: number): BorderRadiusGeometry;
    operatorNegate(): BorderRadiusGeometry;
}
export declare namespace _BorderRadiusGeometryFactory {
    function all(radius: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): BorderRadiusGeometry;
}
export declare namespace _BorderRadiusGeometryFactory {
    function circular(radius: number): BorderRadiusGeometry;
}
export declare namespace _BorderRadiusGeometryFactory {
    function horizontal(options?: {
        left?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        right?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        start?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
        end?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | null | undefined;
    }): BorderRadiusGeometry;
}
export declare namespace _BorderRadiusGeometryFactory {
    function only(options?: {
        topLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        topRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): BorderRadiusGeometry;
}
export declare namespace _BorderRadiusGeometryFactory {
    function directional(options?: {
        topStart?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        topEnd?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomStart?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomEnd?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): BorderRadiusGeometry;
}
export declare namespace _BorderRadiusGeometryFactory {
    function vertical(options?: {
        top?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottom?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): BorderRadiusGeometry;
}
export declare namespace _BorderRadiusGeometryFactory {
    const zero: BorderRadiusGeometry;
}
export declare namespace _BorderRadiusGeometryFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }> | null, t: number): BorderRadiusGeometry | null;
}
export declare const BorderRadiusGeometry: typeof _BorderRadiusGeometryFactory & _FlaxInstanceType<BorderRadiusGeometry> & _FlaxDartType<BorderRadiusGeometry, readonly ["class", "flax.core/flutter#type:BorderRadiusGeometry", readonly [], false]>;
