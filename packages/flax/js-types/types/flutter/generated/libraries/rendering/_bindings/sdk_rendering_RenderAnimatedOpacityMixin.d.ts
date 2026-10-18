import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObjectWithChildMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObjectWithChildMixin';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineOwner';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineOwner';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Constraints';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream11 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsNode';
import type * as upstream12 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OpacityLayer';
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
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RenderAnimatedOpacityMixin<T extends upstream0.RenderObject = upstream0.RenderObject> extends Omit<upstream1.RenderObjectWithChildMixin<T>, _flaxOwnMembers0>, Omit<upstream0.RenderObject, _flaxOwnMembers0 | keyof upstream1.RenderObjectWithChildMixin<T>>, Omit<upstream2.HitTestTarget, _flaxOwnMembers0 | keyof upstream1.RenderObjectWithChildMixin<T> | keyof upstream0.RenderObject>, Omit<upstream3.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream1.RenderObjectWithChildMixin<T> | keyof upstream0.RenderObject | keyof upstream2.HitTestTarget>, Omit<upstream4.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream1.RenderObjectWithChildMixin<T> | keyof upstream0.RenderObject | keyof upstream2.HitTestTarget | keyof upstream3.DiagnosticableTreeMixin>, Omit<upstream5.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.RenderObjectWithChildMixin<T> | keyof upstream0.RenderObject | keyof upstream2.HitTestTarget | keyof upstream3.DiagnosticableTreeMixin | keyof upstream4.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderAnimatedOpacityMixin": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [T];
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
    readonly __RenderAnimatedOpacityMixin: unique symbol;
    readonly [_flaxDartTypeValue]: RenderAnimatedOpacityMixin<T>;
    readonly [_flaxDartMethodCases]?: {
        invokeLayoutCallback: _FlaxSignature1<T>;
    };
    get child(): T | null;
    readonly debugDisposed: boolean | null;
    get parentData(): upstream6.ParentData | null;
    readonly depth: number;
    readonly parent: upstream0.RenderObject | null;
    get debugCreator(): unknown | null;
    readonly debugDoingThisResize: boolean;
    readonly debugDoingThisLayout: boolean;
    readonly debugCanParentUseSize: boolean;
    readonly debugLayoutParent: upstream0.RenderObject | null;
    readonly owner: upstream7.PipelineOwner | null;
    readonly attached: boolean;
    readonly debugNeedsLayout: boolean;
    readonly debugDoingThisLayoutWithCallback: boolean;
    readonly constraints: upstream8.Constraints;
    readonly sizedByParent: boolean;
    readonly debugDoingThisPaint: boolean;
    readonly isRepaintBoundary: boolean;
    readonly alwaysNeedsCompositing: boolean;
    get layer(): upstream9.ContainerLayer | null;
    readonly debugLayer: upstream9.ContainerLayer | null;
    readonly needsCompositing: boolean;
    readonly debugNeedsPaint: boolean;
    readonly debugNeedsCompositedLayerUpdate: boolean;
    readonly paintBounds: upstream10.Rect;
    readonly semanticBounds: upstream10.Rect;
    readonly debugNeedsSemanticsUpdate: boolean;
    readonly debugSemantics: upstream11.SemanticsNode | null;
    get opacity(): upstream12.Animation<number>;
    get alwaysIncludeSemantics(): boolean;
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
    visitChildren(visitor: ((child: upstream0.RenderObject) => void)): void;
    debugDescribeChildren(): DartList<upstream13.DiagnosticsNode>;
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
    invokeLayoutCallback<T extends upstream8.Constraints = upstream8.Constraints>(callback: ((constraints: T) => void)): void;
    debugRegisterRepaintBoundaryPaint(options?: {
        includedChild?: boolean | undefined;
        includedParent?: boolean | undefined;
    }): void;
    updateCompositedLayer(options: {
        oldLayer: (Readonly<{
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
        }>) | null;
    }): upstream14.OffsetLayer;
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
    }>, children: DartIterableInput<upstream11.SemanticsNode, Readonly<{
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
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream2.HitTestTarget];
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
    }): upstream13.DiagnosticsNode;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream27.DiagnosticsTreeStyle | null | undefined;
    }): upstream13.DiagnosticsNode;
    toString(options?: {
        minLevel?: upstream23.DiagnosticLevel | undefined;
    }): string;
    set child(value: (T | DartInput<T>) | null);
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
    set opacity(value: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number];
    }>);
    set alwaysIncludeSemantics(value: boolean);
}
export declare const RenderAnimatedOpacityMixin: object & _FlaxInstanceType<RenderAnimatedOpacityMixin<upstream0.RenderObject>> & _FlaxDartType<RenderAnimatedOpacityMixin<upstream0.RenderObject>, readonly ["class", "flax.core/sdk_rendering#type:RenderAnimatedOpacityMixin", readonly [readonly ["class", "flax.core/sdk_rendering#type:RenderObject", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "child" | "debugDisposed" | "parentData" | "depth" | "parent" | "debugCreator" | "debugDoingThisResize" | "debugDoingThisLayout" | "debugCanParentUseSize" | "debugLayoutParent" | "owner" | "attached" | "debugNeedsLayout" | "debugDoingThisLayoutWithCallback" | "constraints" | "sizedByParent" | "debugDoingThisPaint" | "isRepaintBoundary" | "alwaysNeedsCompositing" | "layer" | "debugLayer" | "needsCompositing" | "debugNeedsPaint" | "debugNeedsCompositedLayerUpdate" | "paintBounds" | "semanticBounds" | "debugNeedsSemanticsUpdate" | "debugSemantics" | "opacity" | "alwaysIncludeSemantics" | "debugValidateChild" | "attach" | "detach" | "redepthChildren" | "visitChildren" | "debugDescribeChildren" | "reassemble" | "dispose" | "setupParentData" | "redepthChild" | "adoptChild" | "dropChild" | "debugAssertDoesMeetConstraints" | "markNeedsLayout" | "markParentNeedsLayout" | "markNeedsLayoutForSizedByParentChange" | "scheduleInitialLayout" | "layout" | "debugResetSize" | "performResize" | "performLayout" | "invokeLayoutCallback" | "debugRegisterRepaintBoundaryPaint" | "updateCompositedLayer" | "markNeedsCompositingBitsUpdate" | "markNeedsPaint" | "markNeedsCompositedLayerUpdate" | "scheduleInitialPaint" | "replaceRootLayer" | "debugPaint" | "paint" | "applyPaintTransform" | "paintsChild" | "getTransformTo" | "describeApproximatePaintClip" | "describeSemanticsClip" | "scheduleInitialSemantics" | "describeSemanticsConfiguration" | "sendSemanticsEvent" | "clearSemantics" | "markNeedsSemanticsUpdate" | "visitChildrenForSemantics" | "assembleSemanticsNode" | "handleEvent" | "toStringShort" | "toStringDeep" | "toStringShallow" | "debugFillProperties" | "showOnScreen" | "describeForError" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderAnimatedOpacityMixin" | "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin" | "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.RenderObject] ? {
        readonly prototype: RenderAnimatedOpacityMixin<_Selected0>;
    } & _FlaxInstanceType<RenderAnimatedOpacityMixin<_Selected0>> & _FlaxDartType<RenderAnimatedOpacityMixin<_Selected0>> : never : never;
}
interface _FlaxSignature1<_OwnerType0 extends upstream0.RenderObject> extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream8.Constraints] ? (callback: ((constraints: _Selected0) => void)) => void : never : never;
}
export {};
