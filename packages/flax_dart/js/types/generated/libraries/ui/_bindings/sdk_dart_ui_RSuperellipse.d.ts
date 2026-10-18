import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RSuperellipse extends Readonly<{
    "__flaxBound:dart:ui::RSuperellipse": readonly [];
}>, Readonly<{
    "__flaxBound:dart:ui::_RRectLike": readonly [RSuperellipse];
}> {
    readonly __RSuperellipse: unique symbol;
    readonly [_flaxDartTypeValue]: RSuperellipse;
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
    }>): RSuperellipse;
    inflate(delta: number): RSuperellipse;
    deflate(delta: number): RSuperellipse;
    scaleRadii(): RSuperellipse;
}
export declare namespace _RSuperellipseFactory {
    function fromLTRBXY(left: number, top: number, right: number, bottom: number, radiusX: number, radiusY: number): RSuperellipse;
}
export declare namespace _RSuperellipseFactory {
    function fromLTRBR(left: number, top: number, right: number, bottom: number, radius: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): RSuperellipse;
}
export declare namespace _RSuperellipseFactory {
    function fromRectXY(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, radiusX: number, radiusY: number): RSuperellipse;
}
export declare namespace _RSuperellipseFactory {
    function fromRectAndRadius(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, radius: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }>): RSuperellipse;
}
export declare namespace _RSuperellipseFactory {
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
    }): RSuperellipse;
}
export declare namespace _RSuperellipseFactory {
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
    }): RSuperellipse;
}
export declare namespace _RSuperellipseFactory {
    const zero: RSuperellipse;
}
export declare namespace _RSuperellipseFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:dart:ui::RSuperellipse": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [RSuperellipse];
    }>) | null, b: (Readonly<{
        "__flaxBound:dart:ui::RSuperellipse": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [RSuperellipse];
    }>) | null, t: number): RSuperellipse | null;
}
export declare const RSuperellipse: typeof _RSuperellipseFactory & _FlaxInstanceType<RSuperellipse> & _FlaxDartType<RSuperellipse, readonly ["class", "flax.core/sdk_dart_ui#type:RSuperellipse", readonly [], false]>;
