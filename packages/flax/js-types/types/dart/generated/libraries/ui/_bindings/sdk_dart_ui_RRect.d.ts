import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RRect extends Readonly<{
    "__flaxBound:dart:ui::RRect": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::_RRectLike": readonly [RRect];
}> {
    readonly __RRect: unique symbol;
    readonly [_flaxDartTypeValue]: RRect;
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly tlRadiusX: number;
    readonly tlRadiusY: number;
    readonly tlRadius: upstream0.Radius;
    readonly trRadiusX: number;
    readonly trRadiusY: number;
    readonly trRadius: upstream0.Radius;
    readonly brRadiusX: number;
    readonly brRadiusY: number;
    readonly brRadius: upstream0.Radius;
    readonly blRadiusX: number;
    readonly blRadiusY: number;
    readonly blRadius: upstream0.Radius;
    readonly width: number;
    readonly height: number;
    readonly outerRect: upstream1.Rect;
    readonly safeInnerRect: upstream1.Rect;
    readonly middleRect: upstream1.Rect;
    readonly wideMiddleRect: upstream1.Rect;
    readonly tallMiddleRect: upstream1.Rect;
    readonly isEmpty: boolean;
    readonly isFinite: boolean;
    readonly isRect: boolean;
    readonly isStadium: boolean;
    readonly isEllipse: boolean;
    readonly isCircle: boolean;
    readonly shortestSide: number;
    readonly longestSide: number;
    readonly hasNaN: boolean;
    readonly center: upstream2.Offset;
    contains(point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    toString(): string;
    shift(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): RRect;
    inflate(delta: number): RRect;
    deflate(delta: number): RRect;
    scaleRadii(): RRect;
}
export declare namespace _RRectFactory {
    function fromLTRBXY(left: number, top: number, right: number, bottom: number, radiusX: number, radiusY: number): RRect;
}
export declare namespace _RRectFactory {
    function fromLTRBR(left: number, top: number, right: number, bottom: number, radius: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): RRect;
}
export declare namespace _RRectFactory {
    function fromRectXY(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, radiusX: number, radiusY: number): RRect;
}
export declare namespace _RRectFactory {
    function fromRectAndRadius(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, radius: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): RRect;
}
export declare namespace _RRectFactory {
    function fromLTRBAndCorners(left: number, top: number, right: number, bottom: number, options?: {
        topLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        topRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): RRect;
}
export declare namespace _RRectFactory {
    function fromRectAndCorners(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        topLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        topRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomRight?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        bottomLeft?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
    }): RRect;
}
export declare namespace _RRectFactory {
    const zero: RRect;
}
export declare namespace _RRectFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [RRect];
    }>) | null, b: (Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [RRect];
    }>) | null, t: number): RRect | null;
}
export declare const RRect: typeof _RRectFactory & _FlaxInstanceType<RRect> & _FlaxDartType<RRect, readonly ["class", "flax.core/sdk_dart_ui#type:RRect", readonly [], false]>;
