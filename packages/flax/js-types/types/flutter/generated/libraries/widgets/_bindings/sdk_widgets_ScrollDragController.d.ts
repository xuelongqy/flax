import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Drag';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollActivityDelegate';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragEndDetails';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollDragController extends Omit<upstream0.Drag, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
}> {
    readonly __ScrollDragController: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollDragController;
    readonly delegate: upstream1.ScrollActivityDelegate;
    readonly onDragCanceled: (() => void) | null;
    readonly carriedVelocity: number | null;
    readonly motionStartDistanceThreshold: number | null;
    readonly lastDetails: unknown | null;
    update(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    end(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    cancel(): void;
    updateDelegate(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>): void;
    dispose(): void;
    toString(): string;
}
export declare function _ScrollDragControllerFactory(options: {
    delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>;
    details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    onDragCanceled?: (() => void) | null | undefined;
    carriedVelocity?: number | null | undefined;
    motionStartDistanceThreshold?: number | null | undefined;
}): ScrollDragController;
export interface _ScrollDragControllerNative extends ScrollDragController {
    readonly [_flaxDartTypeValue]: _ScrollDragControllerNative;
    update(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    end(details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragEndDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    cancel(): void;
    updateDelegate(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>): void;
    dispose(): void;
    toString(): string;
    get delegate(): upstream1.ScrollActivityDelegate;
    get onDragCanceled(): (() => void) | null;
    get carriedVelocity(): number | null;
    get motionStartDistanceThreshold(): number | null;
    get lastDetails(): unknown | null;
}
export declare abstract class _ScrollDragControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollDragController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollDragController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollDragController", readonly [], false];
    constructor(options: {
        delegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
        }>;
        details: Readonly<{
            "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        onDragCanceled?: (() => void) | null | undefined;
        carriedVelocity?: number | null | undefined;
        motionStartDistanceThreshold?: number | null | undefined;
    });
}
export declare namespace _ScrollDragControllerFactory {
    function implement(args: [options: {
        delegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
        }>;
        details: Readonly<{
            "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
        onDragCanceled?: (() => void) | null | undefined;
        carriedVelocity?: number | null | undefined;
        motionStartDistanceThreshold?: number | null | undefined;
    }], implementation: {}): ScrollDragController;
}
declare const _ScrollDragControllerBinding: typeof _ScrollDragControllerFactory & (new (options: {
    delegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollActivityDelegate": readonly [];
    }>;
    details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
    onDragCanceled?: (() => void) | null | undefined;
    carriedVelocity?: number | null | undefined;
    motionStartDistanceThreshold?: number | null | undefined;
}) => _ScrollDragControllerNative);
export declare namespace _ScrollDragControllerFactory {
    const momentumRetainStationaryDurationThreshold: upstream3.Duration;
}
export declare namespace _ScrollDragControllerFactory {
    const momentumRetainVelocityThresholdFactor: number;
}
export declare namespace _ScrollDragControllerFactory {
    const motionStoppedDurationThreshold: upstream3.Duration;
}
export declare const ScrollDragController: typeof _ScrollDragControllerBinding & _FlaxInstanceType<ScrollDragController> & _FlaxDartType<ScrollDragController, readonly ["class", "flax.core/sdk_widgets#type:ScrollDragController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "onDragCanceled" | "carriedVelocity" | "motionStartDistanceThreshold" | "lastDetails" | "update" | "end" | "cancel" | "updateDelegate" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController" | "__flaxBound:package:flutter/src/gestures/drag.dart::Drag";
export {};
