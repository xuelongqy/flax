import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ClipContext';
import '@flax/flutter/painting/_bindings/sdk_painting_ClipContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_PictureRecorder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PictureRecorder';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_ClipRectLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ClipRectLayer';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_ClipRRectLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ClipRRectLayer';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_ClipRSuperellipseLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ClipRSuperellipseLayer';
import type * as upstream15 from '@flax/flutter/rendering/_bindings/sdk_rendering_ClipPathLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ClipPathLayer';
import type * as upstream16 from '@flax/flutter/rendering/_bindings/sdk_rendering_ColorFilterLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ColorFilterLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import type * as upstream18 from '@flax/flutter/rendering/_bindings/sdk_rendering_TransformLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TransformLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream20 from '@flax/flutter/rendering/_bindings/sdk_rendering_OpacityLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OpacityLayer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PaintingContext extends Omit<upstream0.ClipContext, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
}> {
    readonly __PaintingContext: unique symbol;
    readonly [_flaxDartTypeValue]: PaintingContext;
}
export interface PaintingContext {
    readonly [_flaxDartTypeValue]: PaintingContext;
    clipPathAndPaint(path: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, clipBehavior: upstream7.Clip, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, painter: (() => void)): void;
    clipRRectAndPaint(rrect: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream8.RRect];
    }>, clipBehavior: upstream7.Clip, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, painter: (() => void)): void;
    clipRSuperellipseAndPaint(rse: Readonly<{
        "__flaxBound:dart:ui::RSuperellipse": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream9.RSuperellipse];
    }>, clipBehavior: upstream7.Clip, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, painter: (() => void)): void;
    clipRectAndPaint(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, clipBehavior: upstream7.Clip, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, painter: (() => void)): void;
    paintChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    appendLayer(layer: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    addCompositionCallback(callback: ((layer: upstream11.Layer) => void)): (() => void);
    stopRecordingIfNeeded(): void;
    setIsComplexHint(): void;
    setWillChangeHint(): void;
    addLayer(layer: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    pushLayer(childLayer: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, painter: ((context: PaintingContext, offset: upstream10.Offset) => void), offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        childPaintBounds?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }): void;
    createChildContext(childLayer: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): PaintingContext;
    pushClipRect(needsCompositing: boolean, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, clipRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, painter: ((context: PaintingContext, offset: upstream10.Offset) => void), options?: {
        clipBehavior?: upstream7.Clip | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ClipRectLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream12.ClipRectLayer | null;
    pushClipRRect(needsCompositing: boolean, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, clipRRect: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream8.RRect];
    }>, painter: ((context: PaintingContext, offset: upstream10.Offset) => void), options?: {
        clipBehavior?: upstream7.Clip | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ClipRRectLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream13.ClipRRectLayer | null;
    pushClipRSuperellipse(needsCompositing: boolean, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, clipRSuperellipse: Readonly<{
        "__flaxBound:dart:ui::RSuperellipse": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream9.RSuperellipse];
    }>, painter: ((context: PaintingContext, offset: upstream10.Offset) => void), options?: {
        clipBehavior?: upstream7.Clip | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ClipRSuperellipseLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream14.ClipRSuperellipseLayer | null;
    pushClipPath(needsCompositing: boolean, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, clipPath: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, painter: ((context: PaintingContext, offset: upstream10.Offset) => void), options?: {
        clipBehavior?: upstream7.Clip | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ClipPathLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream15.ClipPathLayer | null;
    pushColorFilter(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, colorFilter: Readonly<{
        "__flaxBound:dart:ui::ColorFilter": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::ImageFilter": readonly [];
    }>, painter: ((context: PaintingContext, offset: upstream10.Offset) => void), options?: {
        oldLayer?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ColorFilterLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream16.ColorFilterLayer;
    pushTransform(needsCompositing: boolean, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>, painter: ((context: PaintingContext, offset: upstream10.Offset) => void), options?: {
        oldLayer?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::TransformLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::OffsetLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream18.TransformLayer | null;
    pushOpacity(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, alpha: number, painter: ((context: PaintingContext, offset: upstream10.Offset) => void), options?: {
        oldLayer?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::OpacityLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::OffsetLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream20.OpacityLayer;
    toString(): string;
    get estimatedBounds(): upstream2.Rect;
    get recorder(): upstream4.PictureRecorder;
    get canvas(): upstream3.Canvas;
}
export declare abstract class PaintingContext extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PaintingContext>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PaintingContext;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PaintingContext", readonly [], false];
    constructor(_containerLayer: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, estimatedBounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>);
}
export declare namespace PaintingContext {
    function implement(args: [_containerLayer: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, estimatedBounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>], implementation: {}): PaintingContext;
}
export declare namespace PaintingContext {
    function repaintCompositedChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, options?: {
        debugAlsoPaintedParent?: boolean | undefined;
    }): void;
}
export declare namespace PaintingContext {
    function updateLayerProperties(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
}
export declare namespace PaintingContext {
    function debugInstrumentRepaintCompositedChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, options: {
        customContext: Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
        }>;
        debugAlsoPaintedParent?: boolean | undefined;
    }): void;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "canvas" | "estimatedBounds" | "recorder" | "clipPathAndPaint" | "clipRRectAndPaint" | "clipRSuperellipseAndPaint" | "clipRectAndPaint" | "paintChild" | "appendLayer" | "addCompositionCallback" | "stopRecordingIfNeeded" | "setIsComplexHint" | "setWillChangeHint" | "addLayer" | "pushLayer" | "createChildContext" | "pushClipRect" | "pushClipRRect" | "pushClipRSuperellipse" | "pushClipPath" | "pushColorFilter" | "pushTransform" | "pushOpacity" | "toString" | "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext" | "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext";
export {};
