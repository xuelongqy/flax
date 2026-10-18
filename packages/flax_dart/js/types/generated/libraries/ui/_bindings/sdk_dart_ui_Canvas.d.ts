import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PictureRecorder';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paint';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_ClipOp';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ClipOp';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paragraph';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paragraph';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointMode';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_Vertices';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Vertices';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSTransform';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSTransform';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Canvas extends Readonly<{
    "__flaxBound:dart:ui::Canvas": readonly [];
}> {
    readonly __Canvas: unique symbol;
    readonly [_flaxDartTypeValue]: Canvas;
    save(): void;
    saveLayer(bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    restore(): void;
    restoreToCount(count: number): void;
    getSaveCount(): number;
    translate(dx: number, dy: number): void;
    scale(sx: number, sy?: number | null): void;
    rotate(radians: number): void;
    skew(sx: number, sy: number): void;
    transform(matrix4: globalThis.Float64Array): void;
    getTransform(): globalThis.Float64Array;
    clipRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        clipOp?: upstream3.ClipOp | undefined;
        doAntiAlias?: boolean | undefined;
    }): void;
    clipRRect(rrect: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream4.RRect];
    }>, options?: {
        doAntiAlias?: boolean | undefined;
    }): void;
    clipRSuperellipse(rsuperellipse: Readonly<{
        "__flaxBound:dart:ui::RSuperellipse": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream5.RSuperellipse];
    }>, options?: {
        doAntiAlias?: boolean | undefined;
    }): void;
    clipPath(path: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, options?: {
        doAntiAlias?: boolean | undefined;
    }): void;
    getLocalClipBounds(): upstream1.Rect;
    getDestinationClipBounds(): upstream1.Rect;
    drawColor(color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>, blendMode: upstream8.BlendMode): void;
    drawLine(p1: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, p2: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawPaint(paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawRRect(rrect: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream4.RRect];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawDRRect(outer: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream4.RRect];
    }>, inner: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream4.RRect];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawRSuperellipse(rsuperellipse: Readonly<{
        "__flaxBound:dart:ui::RSuperellipse": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream5.RSuperellipse];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawOval(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawCircle(c: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, radius: number, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawArc(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, startAngle: number, sweepAngle: number, useCenter: boolean, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawPath(path: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawImage(image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawImageRect(image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>, src: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, dst: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawImageNine(image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>, center: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, dst: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawPicture(picture: Readonly<{
        "__flaxBound:dart:ui::Picture": readonly [];
    }>): void;
    drawParagraph(paragraph: Readonly<{
        "__flaxBound:dart:ui::Paragraph": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    drawPoints(pointMode: upstream13.PointMode, points: DartListInput<upstream9.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawRawPoints(pointMode: upstream13.PointMode, points: globalThis.Float32Array, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawVertices(vertices: Readonly<{
        "__flaxBound:dart:ui::Vertices": readonly [];
    }>, blendMode: upstream8.BlendMode, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawAtlas(atlas: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>, transforms: DartListInput<upstream15.RSTransform, Readonly<{
        "__flaxBound:dart:ui::RSTransform": readonly [];
    }>>, rects: DartListInput<upstream1.Rect, Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>>, colors: DartListInput<upstream7.Color, Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>> | null, blendMode: upstream8.BlendMode | null, cullRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawRawAtlas(atlas: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>, rstTransforms: globalThis.Float32Array, rects: globalThis.Float32Array, colors: globalThis.Int32Array | null, blendMode: upstream8.BlendMode | null, cullRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null, paint: Readonly<{
        "__flaxBound:dart:ui::Paint": readonly [];
    }>): void;
    drawShadow(path: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>, elevation: number, transparentOccluder: boolean): void;
}
export declare function _CanvasFactory(recorder: Readonly<{
    "__flaxBound:dart:ui::PictureRecorder": readonly [];
}>, cullRect?: Readonly<{
    "__flaxBound:dart:ui::Rect": readonly [];
}> | null): Canvas;
export declare namespace _CanvasFactory {
    function implement(args: [], implementation: {
        save: (() => void);
        saveLayer: ((bounds: upstream1.Rect | null, paint: upstream2.Paint) => void);
        restore: (() => void);
        restoreToCount: ((count: number) => void);
        getSaveCount: (() => number);
        translate: ((dx: number, dy: number) => void);
        scale: ((sx: number, sy?: number | null) => void);
        rotate: ((radians: number) => void);
        skew: ((sx: number, sy: number) => void);
        transform: ((matrix4: globalThis.Float64Array) => void);
        getTransform: (() => globalThis.Float64Array);
        clipRect: ((rect: upstream1.Rect, options?: {
            clipOp?: upstream3.ClipOp | undefined;
            doAntiAlias?: boolean | undefined;
        }) => void);
        clipRRect: ((rrect: upstream4.RRect, options?: {
            doAntiAlias?: boolean | undefined;
        }) => void);
        clipRSuperellipse: ((rsuperellipse: upstream5.RSuperellipse, options?: {
            doAntiAlias?: boolean | undefined;
        }) => void);
        clipPath: ((path: upstream6.Path, options?: {
            doAntiAlias?: boolean | undefined;
        }) => void);
        getLocalClipBounds: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>);
        getDestinationClipBounds: (() => Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>);
        drawColor: ((color: upstream7.Color, blendMode: upstream8.BlendMode) => void);
        drawLine: ((p1: upstream9.Offset, p2: upstream9.Offset, paint: upstream2.Paint) => void);
        drawPaint: ((paint: upstream2.Paint) => void);
        drawRect: ((rect: upstream1.Rect, paint: upstream2.Paint) => void);
        drawRRect: ((rrect: upstream4.RRect, paint: upstream2.Paint) => void);
        drawDRRect: ((outer: upstream4.RRect, inner: upstream4.RRect, paint: upstream2.Paint) => void);
        drawRSuperellipse: ((rsuperellipse: upstream5.RSuperellipse, paint: upstream2.Paint) => void);
        drawOval: ((rect: upstream1.Rect, paint: upstream2.Paint) => void);
        drawCircle: ((c: upstream9.Offset, radius: number, paint: upstream2.Paint) => void);
        drawArc: ((rect: upstream1.Rect, startAngle: number, sweepAngle: number, useCenter: boolean, paint: upstream2.Paint) => void);
        drawPath: ((path: upstream6.Path, paint: upstream2.Paint) => void);
        drawImage: ((image: upstream10.Image, offset: upstream9.Offset, paint: upstream2.Paint) => void);
        drawImageRect: ((image: upstream10.Image, src: upstream1.Rect, dst: upstream1.Rect, paint: upstream2.Paint) => void);
        drawImageNine: ((image: upstream10.Image, center: upstream1.Rect, dst: upstream1.Rect, paint: upstream2.Paint) => void);
        drawPicture: ((picture: upstream11.Picture) => void);
        drawParagraph: ((paragraph: upstream12.Paragraph, offset: upstream9.Offset) => void);
        drawPoints: ((pointMode: upstream13.PointMode, points: DartList<upstream9.Offset>, paint: upstream2.Paint) => void);
        drawRawPoints: ((pointMode: upstream13.PointMode, points: globalThis.Float32Array, paint: upstream2.Paint) => void);
        drawVertices: ((vertices: upstream14.Vertices, blendMode: upstream8.BlendMode, paint: upstream2.Paint) => void);
        drawAtlas: ((atlas: upstream10.Image, transforms: DartList<upstream15.RSTransform>, rects: DartList<upstream1.Rect>, colors: DartList<upstream7.Color> | null, blendMode: upstream8.BlendMode | null, cullRect: upstream1.Rect | null, paint: upstream2.Paint) => void);
        drawRawAtlas: ((atlas: upstream10.Image, rstTransforms: globalThis.Float32Array, rects: globalThis.Float32Array, colors: globalThis.Int32Array | null, blendMode: upstream8.BlendMode | null, cullRect: upstream1.Rect | null, paint: upstream2.Paint) => void);
        drawShadow: ((path: upstream6.Path, color: upstream7.Color, elevation: number, transparentOccluder: boolean) => void);
    }): Canvas;
}
export declare const Canvas: typeof _CanvasFactory & _FlaxInstanceType<Canvas> & _FlaxDartType<Canvas, readonly ["class", "flax.core/sdk_dart_ui#type:Canvas", readonly [], false]>;
