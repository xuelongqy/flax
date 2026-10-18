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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ScrollDragController extends Omit<upstream0.Drag, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [];
}> {
    readonly __ScrollDragController: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollDragController;
}
export interface ScrollDragController {
    readonly [_flaxDartTypeValue]: ScrollDragController;
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
export declare abstract class ScrollDragController extends _FlaxProxyBase {
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
export declare namespace ScrollDragController {
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
export declare namespace ScrollDragController {
    const momentumRetainStationaryDurationThreshold: upstream3.Duration;
}
export declare namespace ScrollDragController {
    const momentumRetainVelocityThresholdFactor: number;
}
export declare namespace ScrollDragController {
    const motionStoppedDurationThreshold: upstream3.Duration;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "delegate" | "onDragCanceled" | "carriedVelocity" | "motionStartDistanceThreshold" | "lastDetails" | "update" | "end" | "cancel" | "updateDelegate" | "dispose" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_activity.dart::ScrollDragController" | "__flaxBound:package:flutter/src/gestures/drag.dart::Drag";
export {};
