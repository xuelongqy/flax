import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObjectWithChildMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObjectWithChildMixin';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_ViewConfiguration';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewConfiguration';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineOwner';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineOwner';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream14 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import type * as upstream15 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream16 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream17 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream18 from '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import type * as upstream19 from '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import type * as upstream20 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream25 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream27 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream29 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream30 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestResult';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RenderView extends Omit<upstream0.RenderObject, _flaxOwnMembers0>, Omit<upstream1.HitTestTarget, _flaxOwnMembers0 | keyof upstream0.RenderObject>, Omit<upstream2.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.RenderObject | keyof upstream1.HitTestTarget>, Omit<upstream3.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.RenderObject | keyof upstream1.HitTestTarget | keyof upstream2.DiagnosticableTreeMixin>, Omit<upstream4.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RenderObject | keyof upstream1.HitTestTarget | keyof upstream2.DiagnosticableTreeMixin | keyof upstream3.DiagnosticableTree>, Omit<upstream5.RenderObjectWithChildMixin<upstream6.RenderBox>, _flaxOwnMembers0 | keyof upstream0.RenderObject | keyof upstream1.HitTestTarget | keyof upstream2.DiagnosticableTreeMixin | keyof upstream3.DiagnosticableTree | keyof upstream4.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/view.dart::RenderView": readonly [];
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
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream6.RenderBox];
}> {
    readonly __RenderView: unique symbol;
    readonly [_flaxDartTypeValue]: RenderView;
    readonly [_flaxDartMethodCases]?: {
        invokeLayoutCallback: _FlaxSignature0;
    };
    readonly debugDisposed: boolean | null;
    get parentData(): upstream9.ParentData | null;
    readonly depth: number;
    readonly parent: upstream0.RenderObject | null;
    get debugCreator(): unknown | null;
    readonly debugDoingThisResize: boolean;
    readonly debugDoingThisLayout: boolean;
    readonly debugCanParentUseSize: boolean;
    readonly debugLayoutParent: upstream0.RenderObject | null;
    readonly owner: upstream10.PipelineOwner | null;
    readonly attached: boolean;
    readonly debugNeedsLayout: boolean;
    readonly debugDoingThisLayoutWithCallback: boolean;
    readonly constraints: upstream11.BoxConstraints;
    readonly sizedByParent: boolean;
    readonly debugDoingThisPaint: boolean;
    readonly isRepaintBoundary: boolean;
    readonly alwaysNeedsCompositing: boolean;
    get layer(): upstream12.ContainerLayer | null;
    readonly debugLayer: upstream12.ContainerLayer | null;
    readonly needsCompositing: boolean;
    readonly debugNeedsPaint: boolean;
    readonly debugNeedsCompositedLayerUpdate: boolean;
    readonly paintBounds: upstream13.Rect;
    readonly semanticBounds: upstream13.Rect;
    readonly debugNeedsSemanticsUpdate: boolean;
    readonly debugSemantics: upstream14.SemanticsNode | null;
    get child(): upstream6.RenderBox | null;
    readonly size: upstream15.Size;
    get configuration(): upstream7.ViewConfiguration;
    readonly hasConfiguration: boolean;
    readonly flutterView: upstream8.FlutterView;
    get automaticSystemUiAdjustment(): boolean;
    reassemble(): void;
    dispose(): void;
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
    visitChildren(visitor: ((child: upstream0.RenderObject) => void)): void;
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
    debugAssertDoesMeetConstraints(): void;
    markNeedsLayout(): void;
    markParentNeedsLayout(): void;
    markNeedsLayoutForSizedByParentChange(): void;
    scheduleInitialLayout(): void;
    layout(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>, options?: {
        parentUsesSize?: boolean | undefined;
    }): void;
    debugResetSize(): void;
    performResize(): void;
    performLayout(): void;
    invokeLayoutCallback<T extends upstream18.Constraints = upstream18.Constraints>(callback: ((constraints: T) => void)): void;
    debugRegisterRepaintBoundaryPaint(options?: {
        includedChild?: boolean | undefined;
        includedParent?: boolean | undefined;
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
    }): upstream19.OffsetLayer;
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
    debugPaint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    applyPaintTransform(child: Readonly<{
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
    }>, transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
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
    }>): upstream13.Rect | null;
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
    }>) | null): upstream13.Rect | null;
    scheduleInitialSemantics(): void;
    describeSemanticsConfiguration(config: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>): void;
    sendSemanticsEvent(semanticsEvent: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
    }>): void;
    clearSemantics(): void;
    markNeedsSemanticsUpdate(): void;
    visitChildrenForSemantics(visitor: ((child: upstream0.RenderObject) => void)): void;
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
    }>, children: DartIterableInput<upstream14.SemanticsNode, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
    handleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.HitTestTarget];
    }>): void;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream25.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream25.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream25.DiagnosticLevel | undefined;
    }): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    debugDescribeChildren(): DartList<upstream27.DiagnosticsNode>;
    showOnScreen(options?: {
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
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
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream29.Duration];
        }>) | undefined;
        rect?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }): void;
    describeForError(name: string, options?: {
        style?: upstream30.DiagnosticsTreeStyle | undefined;
    }): upstream27.DiagnosticsNode;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream30.DiagnosticsTreeStyle | null | undefined;
    }): upstream27.DiagnosticsNode;
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
    prepareInitialFrame(): void;
    hitTest(result: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>, options: {
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): boolean;
    compositeFrame(): void;
    updateSemantics(update: Readonly<{
        "__flaxBound:dart:ui::SemanticsUpdate": readonly [];
    }>): void;
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
    set configuration(value: Readonly<{
        "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [];
    }>);
    set automaticSystemUiAdjustment(value: boolean);
}
export declare function _RenderViewFactory(options: {
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
    configuration?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [];
    }> | null | undefined;
    view: Readonly<{
        "__flaxBound:dart:ui::FlutterView": readonly [];
    }>;
}): RenderView;
export interface _RenderViewNative extends RenderView {
    readonly [_flaxDartTypeValue]: _RenderViewNative;
    readonly [_flaxDartMethodCases]?: {
        invokeLayoutCallback: _FlaxSignature1;
    };
    reassemble(): void;
    dispose(): void;
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
    visitChildren(visitor: ((child: upstream0.RenderObject) => void)): void;
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
    debugAssertDoesMeetConstraints(): void;
    markNeedsLayout(): void;
    markParentNeedsLayout(): void;
    markNeedsLayoutForSizedByParentChange(): void;
    scheduleInitialLayout(): void;
    layout(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>, options?: {
        parentUsesSize?: boolean | undefined;
    }): void;
    debugResetSize(): void;
    performResize(): void;
    performLayout(): void;
    invokeLayoutCallback<T extends upstream18.Constraints = upstream18.Constraints>(callback: ((constraints: T) => void)): void;
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
    }): upstream19.OffsetLayer;
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
    debugPaint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    applyPaintTransform(child: Readonly<{
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
    }>, transform: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
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
    }>): upstream13.Rect | null;
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
    }>) | null): upstream13.Rect | null;
    scheduleInitialSemantics(): void;
    describeSemanticsConfiguration(config: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>): void;
    sendSemanticsEvent(semanticsEvent: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
    }>): void;
    clearSemantics(): void;
    markNeedsSemanticsUpdate(): void;
    visitChildrenForSemantics(visitor: ((child: upstream0.RenderObject) => void)): void;
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
    }>, children: DartIterableInput<upstream14.SemanticsNode, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
    handleEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, entry: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.HitTestTarget];
    }>): void;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream25.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream25.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream25.DiagnosticLevel | undefined;
    }): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    debugDescribeChildren(): DartList<upstream27.DiagnosticsNode>;
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
            "__flaxBound:dart:core::Comparable": readonly [upstream29.Duration];
        }>) | undefined;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
    }): void;
    describeForError(name: string, options?: {
        style?: upstream30.DiagnosticsTreeStyle | undefined;
    }): upstream27.DiagnosticsNode;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream30.DiagnosticsTreeStyle | null | undefined;
    }): upstream27.DiagnosticsNode;
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
    prepareInitialFrame(): void;
    hitTest(result: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestResult": readonly [];
    }>, options: {
        position: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): boolean;
    compositeFrame(): void;
    updateSemantics(update: Readonly<{
        "__flaxBound:dart:ui::SemanticsUpdate": readonly [];
    }>): void;
    get size(): upstream15.Size;
    get configuration(): upstream7.ViewConfiguration;
    get hasConfiguration(): boolean;
    get constraints(): upstream11.BoxConstraints;
    get flutterView(): upstream8.FlutterView;
    get automaticSystemUiAdjustment(): boolean;
    get isRepaintBoundary(): boolean;
    get paintBounds(): upstream13.Rect;
    get semanticBounds(): upstream13.Rect;
    get debugDisposed(): boolean | null;
    get parentData(): upstream9.ParentData | null;
    get depth(): number;
    get parent(): upstream0.RenderObject | null;
    get debugCreator(): unknown | null;
    get debugDoingThisResize(): boolean;
    get debugDoingThisLayout(): boolean;
    get debugCanParentUseSize(): boolean;
    get debugLayoutParent(): upstream0.RenderObject | null;
    get owner(): upstream10.PipelineOwner | null;
    get attached(): boolean;
    get debugNeedsLayout(): boolean;
    get debugDoingThisLayoutWithCallback(): boolean;
    get sizedByParent(): boolean;
    get debugDoingThisPaint(): boolean;
    get alwaysNeedsCompositing(): boolean;
    get layer(): upstream12.ContainerLayer | null;
    get debugLayer(): upstream12.ContainerLayer | null;
    get needsCompositing(): boolean;
    get debugNeedsPaint(): boolean;
    get debugNeedsCompositedLayerUpdate(): boolean;
    get debugNeedsSemanticsUpdate(): boolean;
    get debugSemantics(): upstream14.SemanticsNode | null;
    get child(): upstream6.RenderBox | null;
    set configuration(value: Readonly<{
        "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [];
    }>);
    set automaticSystemUiAdjustment(value: boolean);
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
export declare abstract class _RenderViewNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RenderView>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RenderView;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:RenderView", readonly [], false];
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
        configuration?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [];
        }> | null | undefined;
        view: Readonly<{
            "__flaxBound:dart:ui::FlutterView": readonly [];
        }>;
    });
}
export declare namespace _RenderViewFactory {
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
        configuration?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [];
        }> | null | undefined;
        view: Readonly<{
            "__flaxBound:dart:ui::FlutterView": readonly [];
        }>;
    }], implementation: {}): RenderView;
}
declare const _RenderViewBinding: typeof _RenderViewFactory & (new (options: {
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
    configuration?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [];
    }> | null | undefined;
    view: Readonly<{
        "__flaxBound:dart:ui::FlutterView": readonly [];
    }>;
}) => _RenderViewNative);
export declare namespace _RenderViewFactory {
    function debugAddPaintCallback(callback: ((context: upstream16.PaintingContext, offset: upstream17.Offset, renderView: RenderView) => void)): void;
}
export declare namespace _RenderViewFactory {
    function debugRemovePaintCallback(callback: ((context: upstream16.PaintingContext, offset: upstream17.Offset, renderView: RenderView) => void)): void;
}
export declare const RenderView: typeof _RenderViewBinding & _FlaxInstanceType<RenderView> & _FlaxDartType<RenderView, readonly ["class", "flax.core/sdk_rendering#type:RenderView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDisposed" | "parentData" | "depth" | "parent" | "debugCreator" | "debugDoingThisResize" | "debugDoingThisLayout" | "debugCanParentUseSize" | "debugLayoutParent" | "owner" | "attached" | "debugNeedsLayout" | "debugDoingThisLayoutWithCallback" | "constraints" | "sizedByParent" | "debugDoingThisPaint" | "isRepaintBoundary" | "alwaysNeedsCompositing" | "layer" | "debugLayer" | "needsCompositing" | "debugNeedsPaint" | "debugNeedsCompositedLayerUpdate" | "paintBounds" | "semanticBounds" | "debugNeedsSemanticsUpdate" | "debugSemantics" | "child" | "size" | "configuration" | "hasConfiguration" | "flutterView" | "automaticSystemUiAdjustment" | "reassemble" | "dispose" | "setupParentData" | "redepthChild" | "redepthChildren" | "adoptChild" | "dropChild" | "visitChildren" | "attach" | "detach" | "debugAssertDoesMeetConstraints" | "markNeedsLayout" | "markParentNeedsLayout" | "markNeedsLayoutForSizedByParentChange" | "scheduleInitialLayout" | "layout" | "debugResetSize" | "performResize" | "performLayout" | "invokeLayoutCallback" | "debugRegisterRepaintBoundaryPaint" | "updateCompositedLayer" | "markNeedsCompositingBitsUpdate" | "markNeedsPaint" | "markNeedsCompositedLayerUpdate" | "scheduleInitialPaint" | "replaceRootLayer" | "debugPaint" | "paint" | "applyPaintTransform" | "paintsChild" | "getTransformTo" | "describeApproximatePaintClip" | "describeSemanticsClip" | "scheduleInitialSemantics" | "describeSemanticsConfiguration" | "sendSemanticsEvent" | "clearSemantics" | "markNeedsSemanticsUpdate" | "visitChildrenForSemantics" | "assembleSemanticsNode" | "handleEvent" | "toStringShort" | "toString" | "toStringDeep" | "toStringShallow" | "debugFillProperties" | "debugDescribeChildren" | "showOnScreen" | "describeForError" | "toDiagnosticsNode" | "debugValidateChild" | "prepareInitialFrame" | "hitTest" | "compositeFrame" | "updateSemantics" | "__flaxBound:package:flutter/src/rendering/view.dart::RenderView" | "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream18.Constraints] ? (callback: ((constraints: _Selected0) => void)) => void : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream18.Constraints] ? (callback: ((constraints: _Selected0) => void)) => void : never : never;
}
export {};
