import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollContext';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream10 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPositionAlignmentPolicy';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPositionAlignmentPolicy';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollHoldController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollHoldController';
import type * as upstream15 from '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import type * as upstream16 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivity';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ScrollPosition extends Omit<upstream0.ViewportOffset, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ViewportOffset>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ViewportOffset | keyof upstream1.ChangeNotifier>, Omit<upstream3.ScrollMetrics, _flaxOwnMembers0 | keyof upstream0.ViewportOffset | keyof upstream1.ChangeNotifier | keyof upstream2.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
}> {
    readonly __ScrollPosition: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollPosition;
}
export interface ScrollPosition {
    readonly [_flaxDartTypeValue]: ScrollPosition;
    applyViewportDimension(viewportDimension: number): boolean;
    applyContentDimensions(minScrollExtent: number, maxScrollExtent: number): boolean;
    correctBy(correction: number): void;
    moveTo(to: number, options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream11.Duration];
        }>) | null | undefined;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | null | undefined;
        clamp?: boolean | null | undefined;
    }): Promise<void>;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    copyWith(options?: {
        minScrollExtent?: number | null | undefined;
        maxScrollExtent?: number | null | undefined;
        pixels?: number | null | undefined;
        viewportDimension?: number | null | undefined;
        axisDirection?: upstream7.AxisDirection | null | undefined;
        devicePixelRatio?: number | null | undefined;
    }): upstream3.ScrollMetrics;
    absorb(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>): void;
    setPixels(newPixels: number): number;
    correctPixels(value: number): void;
    forcePixels(value: number): void;
    saveScrollOffset(): void;
    restoreScrollOffset(): void;
    restoreOffset(offset: number, options?: {
        initialRestore?: boolean | undefined;
    }): void;
    saveOffset(): void;
    applyBoundaryConditions(value: number): number;
    correctForNewDimensions(oldPosition: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>, newPosition: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>): boolean;
    applyNewDimensions(): void;
    ensureVisible(object: Readonly<{
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
        alignment?: number | undefined;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream11.Duration];
        }>) | undefined;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
        alignmentPolicy?: upstream13.ScrollPositionAlignmentPolicy | undefined;
        targetRenderObject?: (Readonly<{
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
    }): Promise<void>;
    beginActivity(newActivity: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivity": readonly [];
    }> | null): void;
    didStartScroll(): void;
    didUpdateScrollPositionBy(delta: number): void;
    didEndScroll(): void;
    didOverscrollBy(value: number): void;
    didUpdateScrollDirection(direction: upstream6.ScrollDirection): void;
    didUpdateScrollMetrics(): void;
    recommendDeferredLoading(context: upstream18.BuildContext): boolean;
    notifyListeners(): void;
    get physics(): upstream4.ScrollPhysics;
    get context(): upstream5.ScrollContext;
    get keepScrollOffset(): boolean;
    get debugLabel(): string | null;
    get minScrollExtent(): number;
    get maxScrollExtent(): number;
    get hasContentDimensions(): boolean;
    get pixels(): number;
    get hasPixels(): boolean;
    get viewportDimension(): number;
    get hasViewportDimension(): boolean;
    get haveDimensions(): boolean;
    get shouldIgnorePointer(): boolean;
    get devicePixelRatio(): number;
    get isScrollingNotifier(): upstream9.ValueNotifier<boolean>;
    get allowImplicitScrolling(): boolean;
    get hasListeners(): boolean;
    get axis(): upstream8.Axis;
    get outOfRange(): boolean;
    get atEdge(): boolean;
    get extentBefore(): number;
    get extentInside(): number;
    get extentAfter(): number;
    get extentTotal(): number;
}
export declare abstract class ScrollPosition extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollPosition>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollPosition;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollPosition", readonly [], false];
    constructor(options: {
        physics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }>;
        context: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [];
        }>;
        keepScrollOffset?: boolean | undefined;
        oldPosition?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>) | null | undefined;
        debugLabel?: string | null | undefined;
    });
    abstract jumpTo(value: number): void;
    abstract animateTo(to: number, options: {
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream11.Duration];
        }>;
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>;
    }): Promise<void>;
    abstract pointerScroll(delta: number): void;
    abstract jumpToWithoutSettling(value: number): void;
    abstract hold(holdCancelCallback: (() => void)): upstream14.ScrollHoldController;
    abstract drag(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, dragCancelCallback: (() => void)): upstream15.Drag;
    abstract get userScrollDirection(): upstream6.ScrollDirection;
    abstract get axisDirection(): upstream7.AxisDirection;
}
export declare namespace ScrollPosition {
    function implement(args: [options: {
        physics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }>;
        context: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [];
        }>;
        keepScrollOffset?: boolean | undefined;
        oldPosition?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>) | null | undefined;
        debugLabel?: string | null | undefined;
    }], implementation: {
        jumpTo: ((value: number) => void);
        animateTo: ((to: number, options: {
            duration: upstream11.Duration;
            curve: upstream10.Curve;
        }) => Promise<void>);
        pointerScroll: ((delta: number) => void);
        jumpToWithoutSettling: ((value: number) => void);
        hold: ((holdCancelCallback: (() => void)) => Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollHoldController": readonly [];
        }>);
        drag: ((details: upstream16.DragStartDetails, dragCancelCallback: (() => void)) => Readonly<{
            "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
        }>);
        get userScrollDirection(): upstream6.ScrollDirection;
        get axisDirection(): upstream7.AxisDirection;
    }): ScrollPosition;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "pixels" | "hasPixels" | "userScrollDirection" | "allowImplicitScrolling" | "hasListeners" | "minScrollExtent" | "maxScrollExtent" | "hasContentDimensions" | "viewportDimension" | "hasViewportDimension" | "axisDirection" | "axis" | "outOfRange" | "atEdge" | "extentBefore" | "extentInside" | "extentAfter" | "extentTotal" | "devicePixelRatio" | "physics" | "context" | "keepScrollOffset" | "debugLabel" | "haveDimensions" | "shouldIgnorePointer" | "isScrollingNotifier" | "applyViewportDimension" | "applyContentDimensions" | "correctBy" | "jumpTo" | "animateTo" | "moveTo" | "toString" | "debugFillDescription" | "addListener" | "removeListener" | "dispose" | "copyWith" | "absorb" | "setPixels" | "correctPixels" | "forcePixels" | "saveScrollOffset" | "restoreScrollOffset" | "restoreOffset" | "saveOffset" | "applyBoundaryConditions" | "correctForNewDimensions" | "applyNewDimensions" | "ensureVisible" | "pointerScroll" | "jumpToWithoutSettling" | "hold" | "drag" | "beginActivity" | "didStartScroll" | "didUpdateScrollPositionBy" | "didEndScroll" | "didOverscrollBy" | "didUpdateScrollDirection" | "didUpdateScrollMetrics" | "recommendDeferredLoading" | "notifyListeners" | "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollPosition" | "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics";
export {};
