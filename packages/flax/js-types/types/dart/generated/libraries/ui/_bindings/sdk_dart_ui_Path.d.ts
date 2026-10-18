import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathFillType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathFillType';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathOperation';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathOperation';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetrics';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetrics';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Path extends Readonly<{
    "__flaxBound:dart:ui::Path": readonly [];
}> {
    readonly __Path: unique symbol;
    readonly [_flaxDartTypeValue]: Path;
    get fillType(): upstream0.PathFillType;
    moveTo(x: number, y: number): void;
    relativeMoveTo(dx: number, dy: number): void;
    lineTo(x: number, y: number): void;
    relativeLineTo(dx: number, dy: number): void;
    quadraticBezierTo(x1: number, y1: number, x2: number, y2: number): void;
    relativeQuadraticBezierTo(x1: number, y1: number, x2: number, y2: number): void;
    cubicTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    relativeCubicTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    conicTo(x1: number, y1: number, x2: number, y2: number, w: number): void;
    relativeConicTo(x1: number, y1: number, x2: number, y2: number, w: number): void;
    arcTo(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, startAngle: number, sweepAngle: number, forceMoveTo: boolean): void;
    arcToPoint(arcEnd: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        clockwise?: boolean | undefined;
        largeArc?: boolean | undefined;
        radius?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        rotation?: number | undefined;
    }): void;
    relativeArcToPoint(arcEndDelta: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        clockwise?: boolean | undefined;
        largeArc?: boolean | undefined;
        radius?: Readonly<{
            "__flaxBound:dart:ui::Radius": readonly [];
        }> | undefined;
        rotation?: number | undefined;
    }): void;
    addRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): void;
    addOval(oval: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): void;
    addArc(oval: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, startAngle: number, sweepAngle: number): void;
    addPolygon(points: DartListInput<upstream3.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, close: boolean): void;
    addRRect(rrect: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream5.RRect];
    }>): void;
    addRSuperellipse(rsuperellipse: Readonly<{
        "__flaxBound:dart:ui::RSuperellipse": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream6.RSuperellipse];
    }>): void;
    addPath(path: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        matrix4?: globalThis.Float64Array | null | undefined;
    }): void;
    extendWithPath(path: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        matrix4?: globalThis.Float64Array | null | undefined;
    }): void;
    close(): void;
    reset(): void;
    contains(point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    shift(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): Path;
    transform(matrix4: globalThis.Float64Array): Path;
    getBounds(): upstream2.Rect;
    computeMetrics(options?: {
        forceClosed?: boolean | undefined;
    }): upstream7.PathMetrics;
    set fillType(value: upstream0.PathFillType);
}
export declare function _PathFactory(): Path;
export declare namespace _PathFactory {
    function from(source: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>): Path;
}
export declare namespace _PathFactory {
    function implement(args: [], implementation: {
        moveTo: ((x: number, y: number) => void);
        relativeMoveTo: ((dx: number, dy: number) => void);
        lineTo: ((x: number, y: number) => void);
        relativeLineTo: ((dx: number, dy: number) => void);
        quadraticBezierTo: ((x1: number, y1: number, x2: number, y2: number) => void);
        relativeQuadraticBezierTo: ((x1: number, y1: number, x2: number, y2: number) => void);
        cubicTo: ((x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => void);
        relativeCubicTo: ((x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => void);
        conicTo: ((x1: number, y1: number, x2: number, y2: number, w: number) => void);
        relativeConicTo: ((x1: number, y1: number, x2: number, y2: number, w: number) => void);
        arcTo: ((rect: upstream2.Rect, startAngle: number, sweepAngle: number, forceMoveTo: boolean) => void);
        arcToPoint: ((arcEnd: upstream3.Offset, options?: {
            radius?: upstream4.Radius | undefined;
            rotation?: number | undefined;
            largeArc?: boolean | undefined;
            clockwise?: boolean | undefined;
        }) => void);
        relativeArcToPoint: ((arcEndDelta: upstream3.Offset, options?: {
            radius?: upstream4.Radius | undefined;
            rotation?: number | undefined;
            largeArc?: boolean | undefined;
            clockwise?: boolean | undefined;
        }) => void);
        addRect: ((rect: upstream2.Rect) => void);
        addOval: ((oval: upstream2.Rect) => void);
        addArc: ((oval: upstream2.Rect, startAngle: number, sweepAngle: number) => void);
        addPolygon: ((points: DartList<upstream3.Offset>, close: boolean) => void);
        addRRect: ((rrect: upstream5.RRect) => void);
        addRSuperellipse: ((rsuperellipse: upstream6.RSuperellipse) => void);
        addPath: ((path: Path, offset: upstream3.Offset, options?: {
            matrix4?: globalThis.Float64Array | null | undefined;
        }) => void);
        extendWithPath: ((path: Path, offset: upstream3.Offset, options?: {
            matrix4?: globalThis.Float64Array | null | undefined;
        }) => void);
        close: (() => void);
        reset: (() => void);
        contains: ((point: upstream3.Offset) => boolean);
        shift: ((offset: upstream3.Offset) => Readonly<{
            "__flaxBound:dart:ui::Path": readonly [];
        }>);
        transform: ((matrix4: globalThis.Float64Array) => Readonly<{
            "__flaxBound:dart:ui::Path": readonly [];
        }>);
        getBounds: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>);
        computeMetrics: ((options?: {
            forceClosed?: boolean | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::PathMetrics": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Iterable": readonly [upstream8.PathMetric];
        }>);
        get fillType(): upstream0.PathFillType;
        set fillType(value: upstream0.PathFillType);
    }): Path;
}
export declare namespace _PathFactory {
    function combine(operation: upstream1.PathOperation, path1: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, path2: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>): Path;
}
export declare const Path: typeof _PathFactory & _FlaxInstanceType<Path> & _FlaxDartType<Path, readonly ["class", "flax.core/sdk_dart_ui#type:Path", readonly [], false]>;
