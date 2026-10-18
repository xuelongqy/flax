import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartListInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerBoxParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerBoxParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerRenderObjectMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerRenderObjectMixin';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineOwner';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineOwner';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream13 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream18 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream23 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream26 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream27 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream28 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxHitTestResult';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RenderBoxContainerDefaultsMixin<ChildType extends upstream0.RenderBox = upstream0.RenderBox, ParentDataType extends upstream1.ContainerBoxParentData<ChildType> = upstream1.ContainerBoxParentData<ChildType>> extends Omit<upstream2.ContainerRenderObjectMixin<ChildType, ParentDataType>, _flaxOwnMembers0>, Omit<upstream3.RenderObject, _flaxOwnMembers0 | keyof upstream2.ContainerRenderObjectMixin<ChildType, ParentDataType>>, Omit<upstream4.HitTestTarget, _flaxOwnMembers0 | keyof upstream2.ContainerRenderObjectMixin<ChildType, ParentDataType> | keyof upstream3.RenderObject>, Omit<upstream5.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream2.ContainerRenderObjectMixin<ChildType, ParentDataType> | keyof upstream3.RenderObject | keyof upstream4.HitTestTarget>, Omit<upstream6.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream2.ContainerRenderObjectMixin<ChildType, ParentDataType> | keyof upstream3.RenderObject | keyof upstream4.HitTestTarget | keyof upstream5.DiagnosticableTreeMixin>, Omit<upstream7.Diagnosticable, _flaxOwnMembers0 | keyof upstream2.ContainerRenderObjectMixin<ChildType, ParentDataType> | keyof upstream3.RenderObject | keyof upstream4.HitTestTarget | keyof upstream5.DiagnosticableTreeMixin | keyof upstream6.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::RenderBoxContainerDefaultsMixin": readonly [ChildType, ParentDataType];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [ChildType, ParentDataType];
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
}> {
    readonly __RenderBoxContainerDefaultsMixin: unique symbol;
    readonly [_flaxDartTypeValue]: RenderBoxContainerDefaultsMixin<ChildType, ParentDataType>;
    readonly [_flaxDartMethodCases]?: {
        invokeLayoutCallback: _FlaxSignature1<ChildType, ParentDataType>;
    };
    readonly childCount: number;
    readonly firstChild: ChildType | null;
    readonly lastChild: ChildType | null;
    readonly debugDisposed: boolean | null;
    get parentData(): upstream8.ParentData | null;
    readonly depth: number;
    readonly parent: upstream3.RenderObject | null;
    get debugCreator(): unknown | null;
    readonly debugDoingThisResize: boolean;
    readonly debugDoingThisLayout: boolean;
    readonly debugCanParentUseSize: boolean;
    readonly debugLayoutParent: upstream3.RenderObject | null;
    readonly owner: upstream9.PipelineOwner | null;
    readonly attached: boolean;
    readonly debugNeedsLayout: boolean;
    readonly debugDoingThisLayoutWithCallback: boolean;
    readonly constraints: upstream10.Constraints;
    readonly sizedByParent: boolean;
    readonly debugDoingThisPaint: boolean;
    readonly isRepaintBoundary: boolean;
    readonly alwaysNeedsCompositing: boolean;
    get layer(): upstream11.ContainerLayer | null;
    readonly debugLayer: upstream11.ContainerLayer | null;
    readonly needsCompositing: boolean;
    readonly debugNeedsPaint: boolean;
    readonly debugNeedsCompositedLayerUpdate: boolean;
    readonly paintBounds: upstream12.Rect;
    readonly semanticBounds: upstream12.Rect;
    readonly debugNeedsSemanticsUpdate: boolean;
    readonly debugSemantics: upstream13.SemanticsNode | null;
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
    insert(child: (ChildType | DartInput<ChildType>), options?: {
        after?: (ChildType | DartInput<ChildType>) | null | undefined;
    }): void;
    add(child: (ChildType | DartInput<ChildType>)): void;
    addAll(children: DartListInput<ChildType, (ChildType | DartInput<ChildType>)> | null): void;
    remove(child: (ChildType | DartInput<ChildType>)): void;
    removeAll(): void;
    move(child: (ChildType | DartInput<ChildType>), options?: {
        after?: (ChildType | DartInput<ChildType>) | null | undefined;
    }): void;
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
    redepthChildren(): void;
    visitChildren(visitor: ((child: upstream3.RenderObject) => void)): void;
    childBefore(child: (ChildType | DartInput<ChildType>)): ChildType | null;
    childAfter(child: (ChildType | DartInput<ChildType>)): ChildType | null;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
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
    invokeLayoutCallback<T extends upstream10.Constraints = upstream10.Constraints>(callback: ((constraints: T) => void)): void;
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
    }): upstream15.OffsetLayer;
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
    }>) | null): upstream18.Matrix4;
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
    }>): upstream12.Rect | null;
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
    }>) | null): upstream12.Rect | null;
    scheduleInitialSemantics(): void;
    describeSemanticsConfiguration(config: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>): void;
    sendSemanticsEvent(semanticsEvent: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
    }>): void;
    clearSemantics(): void;
    markNeedsSemanticsUpdate(): void;
    visitChildrenForSemantics(visitor: ((child: upstream3.RenderObject) => void)): void;
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
    }>, children: DartIterableInput<upstream13.SemanticsNode, Readonly<{
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
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream4.HitTestTarget];
    }>): void;
    toStringShort(): string;
    toStringDeep(options?: {
        minLevel?: upstream23.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream23.DiagnosticLevel | undefined;
    }): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
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
            "__flaxBound:dart:core::Comparable": readonly [upstream26.Duration];
        }>) | undefined;
        rect?: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }> | null | undefined;
    }): void;
    describeForError(name: string, options?: {
        style?: upstream27.DiagnosticsTreeStyle | undefined;
    }): upstream14.DiagnosticsNode;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream27.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream23.DiagnosticLevel | undefined;
    }): string;
    defaultComputeDistanceToFirstActualBaseline(baseline: upstream28.TextBaseline): number | null;
    defaultComputeDistanceToHighestActualBaseline(baseline: upstream28.TextBaseline): number | null;
    defaultHitTestChildren(result: Readonly<{
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
    defaultPaint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    getChildrenAsList(): DartList<ChildType>;
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
}
export declare const RenderBoxContainerDefaultsMixin: object & _FlaxInstanceType<RenderBoxContainerDefaultsMixin<upstream0.RenderBox, upstream1.ContainerBoxParentData<upstream0.RenderBox>>> & _FlaxDartType<RenderBoxContainerDefaultsMixin<upstream0.RenderBox, upstream1.ContainerBoxParentData<upstream0.RenderBox>>, readonly ["class", "flax.core/sdk_rendering#type:RenderBoxContainerDefaultsMixin", readonly [readonly ["class", "flax.core/sdk_rendering#type:RenderBox", readonly [], false], readonly ["class", "flax.core/sdk_rendering#type:ContainerBoxParentData", readonly [readonly ["class", "flax.core/sdk_rendering#type:RenderBox", readonly [], false]], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "childCount" | "firstChild" | "lastChild" | "debugDisposed" | "parentData" | "depth" | "parent" | "debugCreator" | "debugDoingThisResize" | "debugDoingThisLayout" | "debugCanParentUseSize" | "debugLayoutParent" | "owner" | "attached" | "debugNeedsLayout" | "debugDoingThisLayoutWithCallback" | "constraints" | "sizedByParent" | "debugDoingThisPaint" | "isRepaintBoundary" | "alwaysNeedsCompositing" | "layer" | "debugLayer" | "needsCompositing" | "debugNeedsPaint" | "debugNeedsCompositedLayerUpdate" | "paintBounds" | "semanticBounds" | "debugNeedsSemanticsUpdate" | "debugSemantics" | "debugValidateChild" | "insert" | "add" | "addAll" | "remove" | "removeAll" | "move" | "attach" | "detach" | "redepthChildren" | "visitChildren" | "childBefore" | "childAfter" | "debugDescribeChildren" | "reassemble" | "dispose" | "setupParentData" | "redepthChild" | "adoptChild" | "dropChild" | "debugAssertDoesMeetConstraints" | "markNeedsLayout" | "markParentNeedsLayout" | "markNeedsLayoutForSizedByParentChange" | "scheduleInitialLayout" | "layout" | "debugResetSize" | "performResize" | "performLayout" | "invokeLayoutCallback" | "debugRegisterRepaintBoundaryPaint" | "updateCompositedLayer" | "markNeedsCompositingBitsUpdate" | "markNeedsPaint" | "markNeedsCompositedLayerUpdate" | "scheduleInitialPaint" | "replaceRootLayer" | "debugPaint" | "paint" | "applyPaintTransform" | "paintsChild" | "getTransformTo" | "describeApproximatePaintClip" | "describeSemanticsClip" | "scheduleInitialSemantics" | "describeSemanticsConfiguration" | "sendSemanticsEvent" | "clearSemantics" | "markNeedsSemanticsUpdate" | "visitChildrenForSemantics" | "assembleSemanticsNode" | "handleEvent" | "toStringShort" | "toStringDeep" | "toStringShallow" | "debugFillProperties" | "showOnScreen" | "describeForError" | "toDiagnosticsNode" | "toString" | "defaultComputeDistanceToFirstActualBaseline" | "defaultComputeDistanceToHighestActualBaseline" | "defaultHitTestChildren" | "defaultPaint" | "getChildrenAsList" | "__flaxBound:package:flutter/src/rendering/box.dart::RenderBoxContainerDefaultsMixin" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin" | "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1 extends upstream1.ContainerBoxParentData<any>] ? [_Selected0] extends [upstream0.RenderBox] ? [_Selected1] extends [upstream1.ContainerBoxParentData<_Selected0>] ? {
        readonly prototype: RenderBoxContainerDefaultsMixin<_Selected0, _Selected1>;
    } & _FlaxInstanceType<RenderBoxContainerDefaultsMixin<_Selected0, _Selected1>> & _FlaxDartType<RenderBoxContainerDefaultsMixin<_Selected0, _Selected1>> : never : never : never;
}
interface _FlaxSignature1<_OwnerType0 extends upstream0.RenderBox, _OwnerType1 extends upstream1.ContainerBoxParentData<_OwnerType0>> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream10.Constraints] ? (callback: ((constraints: _Selected0) => void)) => void : never : never;
}
export {};
