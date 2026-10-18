import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Rect extends Readonly<{
    "__flaxBound:dart:ui::Rect": readonly [];
}> {
    readonly __Rect: unique symbol;
    readonly [_flaxDartTypeValue]: Rect;
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly width: number;
    readonly height: number;
    readonly size: upstream1.Size;
    readonly hasNaN: boolean;
    readonly isInfinite: boolean;
    readonly isFinite: boolean;
    readonly isEmpty: boolean;
    readonly shortestSide: number;
    readonly longestSide: number;
    readonly topLeft: upstream0.Offset;
    readonly topCenter: upstream0.Offset;
    readonly topRight: upstream0.Offset;
    readonly centerLeft: upstream0.Offset;
    readonly center: upstream0.Offset;
    readonly centerRight: upstream0.Offset;
    readonly bottomLeft: upstream0.Offset;
    readonly bottomCenter: upstream0.Offset;
    readonly bottomRight: upstream0.Offset;
    shift(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): Rect;
    translate(translateX: number, translateY: number): Rect;
    inflate(delta: number): Rect;
    deflate(delta: number): Rect;
    intersect(other: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): Rect;
    expandToInclude(other: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): Rect;
    overlaps(other: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): boolean;
    contains(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    toString(): string;
}
export declare namespace _RectFactory {
    function fromLTRB(left: number, top: number, right: number, bottom: number): Rect;
}
export declare namespace _RectFactory {
    function fromLTWH(left: number, top: number, width: number, height: number): Rect;
}
export declare namespace _RectFactory {
    function fromCircle(options: {
        center: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        radius: number;
    }): Rect;
}
export declare namespace _RectFactory {
    function fromCenter(options: {
        center: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        width: number;
        height: number;
    }): Rect;
}
export declare namespace _RectFactory {
    function fromPoints(a: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, b: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): Rect;
}
export declare namespace _RectFactory {
    const zero: Rect;
}
export declare namespace _RectFactory {
    const largest: Rect;
}
export declare namespace _RectFactory {
    function lerp(a: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null, b: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null, t: number): Rect | null;
}
export declare const Rect: typeof _RectFactory & _FlaxInstanceType<Rect> & _FlaxDartType<Rect, readonly ["class", "flax.core/sdk_dart_ui#type:Rect", readonly [], false]>;
