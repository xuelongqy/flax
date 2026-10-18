import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderShiftedBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderShiftedBox';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObjectWithChildMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObjectWithChildMixin';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineOwner';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineOwner';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream15 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream17 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxHitTestResult';
import '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterError';
import type * as upstream20 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxHitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream25 from '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import type * as upstream26 from '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import type * as upstream29 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream30 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream32 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream33 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RenderBaseline extends Omit<upstream0.RenderShiftedBox, _flaxOwnMembers0>, Omit<upstream1.RenderBox, _flaxOwnMembers0 | keyof upstream0.RenderShiftedBox>, Omit<upstream2.RenderObject, _flaxOwnMembers0 | keyof upstream0.RenderShiftedBox | keyof upstream1.RenderBox>, Omit<upstream3.HitTestTarget, _flaxOwnMembers0 | keyof upstream0.RenderShiftedBox | keyof upstream1.RenderBox | keyof upstream2.RenderObject>, Omit<upstream4.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.RenderShiftedBox | keyof upstream1.RenderBox | keyof upstream2.RenderObject | keyof upstream3.HitTestTarget>, Omit<upstream5.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.RenderShiftedBox | keyof upstream1.RenderBox | keyof upstream2.RenderObject | keyof upstream3.HitTestTarget | keyof upstream4.DiagnosticableTreeMixin>, Omit<upstream6.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RenderShiftedBox | keyof upstream1.RenderBox | keyof upstream2.RenderObject | keyof upstream3.HitTestTarget | keyof upstream4.DiagnosticableTreeMixin | keyof upstream5.DiagnosticableTree>, Omit<upstream7.RenderObjectWithChildMixin<upstream1.RenderBox>, _flaxOwnMembers0 | keyof upstream0.RenderShiftedBox | keyof upstream1.RenderBox | keyof upstream2.RenderObject | keyof upstream3.HitTestTarget | keyof upstream4.DiagnosticableTreeMixin | keyof upstream5.DiagnosticableTree | keyof upstream6.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/shifted_box.dart::RenderBaseline": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/shifted_box.dart::RenderShiftedBox": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream1.RenderBox];
}> {
    readonly __RenderBaseline: unique symbol;
    readonly [_flaxDartTypeValue]: RenderBaseline;
    readonly [_flaxDartMethodCases]?: {
        invokeLayoutCallback: _FlaxSignature0;
    };
}
export interface RenderBaseline {
    readonly [_flaxDartTypeValue]: RenderBaseline;
    readonly [_flaxDartMethodCases]?: {
        invokeLayoutCallback: _FlaxSignature1;
    };
    computeMinIntrinsicWidth(height: number): number;
    computeMaxIntrinsicWidth(height: number): number;
    computeMinIntrinsicHeight(width: number): number;
    computeMaxIntrinsicHeight(width: number): number;
    computeDistanceToActualBaseline(baseline: upstream8.TextBaseline): number | null;
    computeDryBaseline(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>, baseline: upstream8.TextBaseline): number | null;
    paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    hitTestChildren(result: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestResult": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>, options: {
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): boolean;
    setupParentData(child: Readonly<{
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
    getMinIntrinsicWidth(height: number): number;
    getMaxIntrinsicWidth(height: number): number;
    getMinIntrinsicHeight(width: number): number;
    getMaxIntrinsicHeight(width: number): number;
    getDryLayout(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream9.Size;
    computeDryLayout(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream9.Size;
    getDryBaseline(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>, baseline: upstream8.TextBaseline): number | null;
    debugCannotComputeDryLayout(options?: {
        reason?: string | null | undefined;
        error?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterError": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Error": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::AssertionError": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): boolean;
    debugAdoptSize(value: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream9.Size;
    debugResetSize(): void;
    getDistanceToBaseline(baseline: upstream8.TextBaseline, options?: {
        onlyReal?: boolean | undefined;
    }): number | null;
    getDistanceToActualBaseline(baseline: upstream8.TextBaseline): number | null;
    debugAssertDoesMeetConstraints(): void;
    markNeedsLayout(): void;
    performResize(): void;
    performLayout(): void;
    hitTest(result: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestResult": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>, options: {
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): boolean;
    hitTestSelf(position: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): boolean;
    applyPaintTransform(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }>): void;
    globalToLocal(point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        ancestor?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream17.Offset;
    localToGlobal(point: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, options?: {
        ancestor?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): upstream17.Offset;
    handleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream3.HitTestTarget];
    }>): void;
    debugHandleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream3.HitTestTarget];
    }>): boolean;
    debugPaint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    debugPaintBaselines(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    debugPaintPointers(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    reassemble(): void;
    dispose(): void;
    redepthChild(child: Readonly<{
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
    redepthChildren(): void;
    adoptChild(child: Readonly<{
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
    dropChild(child: Readonly<{
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
    visitChildren(visitor: ((child: upstream2.RenderObject) => void)): void;
    attach(owner: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    detach(): void;
    markParentNeedsLayout(): void;
    markNeedsLayoutForSizedByParentChange(): void;
    scheduleInitialLayout(): void;
    layout(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>, options?: {
        parentUsesSize?: boolean | undefined;
    }): void;
    invokeLayoutCallback<T extends upstream25.Constraints = upstream25.Constraints>(callback: ((constraints: T) => void)): void;
    debugRegisterRepaintBoundaryPaint(options?: {
        includedParent?: boolean | undefined;
        includedChild?: boolean | undefined;
    }): void;
    updateCompositedLayer(options: {
        oldLayer: (Readonly<{
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
        }>) | null;
    }): upstream26.OffsetLayer;
    markNeedsCompositingBitsUpdate(): void;
    markNeedsPaint(): void;
    markNeedsCompositedLayerUpdate(): void;
    scheduleInitialPaint(rootLayer: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    replaceRootLayer(rootLayer: Readonly<{
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
    }>): void;
    paintsChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    getTransformTo(target: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): upstream20.Matrix4;
    describeApproximatePaintClip(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): upstream10.Rect | null;
    describeSemanticsClip(child: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): upstream10.Rect | null;
    scheduleInitialSemantics(): void;
    describeSemanticsConfiguration(config: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>): void;
    sendSemanticsEvent(semanticsEvent: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
    }>): void;
    clearSemantics(): void;
    markNeedsSemanticsUpdate(): void;
    visitChildrenForSemantics(visitor: ((child: upstream2.RenderObject) => void)): void;
    assembleSemanticsNode(node: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, config: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>, children: DartIterableInput<upstream15.SemanticsNode, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
    toStringShort(): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream29.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream29.DiagnosticLevel | undefined;
    }): string;
    debugDescribeChildren(): DartList<upstream30.DiagnosticsNode>;
    showOnScreen(options?: {
        descendant?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        rect?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream32.Duration];
        }>) | undefined;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    }): void;
    describeForError(name: string, options?: {
        style?: upstream33.DiagnosticsTreeStyle | undefined;
    }): upstream30.DiagnosticsNode;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream33.DiagnosticsTreeStyle | null | undefined;
    }): upstream30.DiagnosticsNode;
    debugValidateChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toString(options?: {
        minLevel?: upstream29.DiagnosticLevel | undefined;
    }): string;
    get baseline(): number;
    get baselineType(): upstream8.TextBaseline;
    get hasSize(): boolean;
    get size(): upstream9.Size;
    get semanticBounds(): upstream10.Rect;
    get constraints(): upstream11.BoxConstraints;
    get paintBounds(): upstream10.Rect;
    get debugDisposed(): boolean | null;
    get parentData(): upstream12.ParentData | null;
    get depth(): number;
    get parent(): upstream2.RenderObject | null;
    get debugCreator(): unknown | null;
    get debugDoingThisResize(): boolean;
    get debugDoingThisLayout(): boolean;
    get debugCanParentUseSize(): boolean;
    get debugLayoutParent(): upstream2.RenderObject | null;
    get owner(): upstream13.PipelineOwner | null;
    get attached(): boolean;
    get debugNeedsLayout(): boolean;
    get debugDoingThisLayoutWithCallback(): boolean;
    get sizedByParent(): boolean;
    get debugDoingThisPaint(): boolean;
    get isRepaintBoundary(): boolean;
    get alwaysNeedsCompositing(): boolean;
    get layer(): upstream14.ContainerLayer | null;
    get debugLayer(): upstream14.ContainerLayer | null;
    get needsCompositing(): boolean;
    get debugNeedsPaint(): boolean;
    get debugNeedsCompositedLayerUpdate(): boolean;
    get debugNeedsSemanticsUpdate(): boolean;
    get debugSemantics(): upstream15.SemanticsNode | null;
    get child(): upstream1.RenderBox | null;
    set baseline(value: number);
    set baselineType(value: upstream8.TextBaseline);
    set size(value: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
    set parentData(value: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
    }> | null);
    set debugCreator(value: unknown | null);
    set layer(value: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set child(value: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
}
export declare abstract class RenderBaseline extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RenderBaseline>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RenderBaseline;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:RenderBaseline", readonly [], false];
    constructor(options: {
        child?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        baseline: number;
        baselineType: upstream8.TextBaseline;
    });
}
export declare namespace RenderBaseline {
    function implement(args: [options: {
        child?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        baseline: number;
        baselineType: upstream8.TextBaseline;
    }], implementation: {}): RenderBaseline;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasSize" | "size" | "semanticBounds" | "constraints" | "paintBounds" | "debugDisposed" | "parentData" | "depth" | "parent" | "debugCreator" | "debugDoingThisResize" | "debugDoingThisLayout" | "debugCanParentUseSize" | "debugLayoutParent" | "owner" | "attached" | "debugNeedsLayout" | "debugDoingThisLayoutWithCallback" | "sizedByParent" | "debugDoingThisPaint" | "isRepaintBoundary" | "alwaysNeedsCompositing" | "layer" | "debugLayer" | "needsCompositing" | "debugNeedsPaint" | "debugNeedsCompositedLayerUpdate" | "debugNeedsSemanticsUpdate" | "debugSemantics" | "child" | "baseline" | "baselineType" | "computeMinIntrinsicWidth" | "computeMaxIntrinsicWidth" | "computeMinIntrinsicHeight" | "computeMaxIntrinsicHeight" | "computeDistanceToActualBaseline" | "computeDryBaseline" | "paint" | "hitTestChildren" | "setupParentData" | "getMinIntrinsicWidth" | "getMaxIntrinsicWidth" | "getMinIntrinsicHeight" | "getMaxIntrinsicHeight" | "getDryLayout" | "computeDryLayout" | "getDryBaseline" | "debugCannotComputeDryLayout" | "debugAdoptSize" | "debugResetSize" | "getDistanceToBaseline" | "getDistanceToActualBaseline" | "debugAssertDoesMeetConstraints" | "markNeedsLayout" | "performResize" | "performLayout" | "hitTest" | "hitTestSelf" | "applyPaintTransform" | "globalToLocal" | "localToGlobal" | "handleEvent" | "debugHandleEvent" | "debugPaint" | "debugPaintBaselines" | "debugPaintPointers" | "debugFillProperties" | "reassemble" | "dispose" | "redepthChild" | "redepthChildren" | "adoptChild" | "dropChild" | "visitChildren" | "attach" | "detach" | "markParentNeedsLayout" | "markNeedsLayoutForSizedByParentChange" | "scheduleInitialLayout" | "layout" | "invokeLayoutCallback" | "debugRegisterRepaintBoundaryPaint" | "updateCompositedLayer" | "markNeedsCompositingBitsUpdate" | "markNeedsPaint" | "markNeedsCompositedLayerUpdate" | "scheduleInitialPaint" | "replaceRootLayer" | "paintsChild" | "getTransformTo" | "describeApproximatePaintClip" | "describeSemanticsClip" | "scheduleInitialSemantics" | "describeSemanticsConfiguration" | "sendSemanticsEvent" | "clearSemantics" | "markNeedsSemanticsUpdate" | "visitChildrenForSemantics" | "assembleSemanticsNode" | "toStringShort" | "toStringDeep" | "toStringShallow" | "debugDescribeChildren" | "showOnScreen" | "describeForError" | "toDiagnosticsNode" | "debugValidateChild" | "toString" | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::RenderBaseline" | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::RenderShiftedBox" | "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox" | "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream25.Constraints] ? (callback: ((constraints: _Selected0) => void)) => void : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream25.Constraints] ? (callback: ((constraints: _Selected0) => void)) => void : never : never;
}
export {};
