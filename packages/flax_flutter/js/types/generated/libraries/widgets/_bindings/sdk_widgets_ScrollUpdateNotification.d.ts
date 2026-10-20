import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollUpdateNotification extends Omit<upstream0.ScrollNotification, _flaxOwnMembers0>, Omit<upstream1.LayoutChangedNotification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification>, Omit<upstream2.Notification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification>, Omit<upstream3.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification | keyof upstream2.Notification>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollUpdateNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [];
}> {
    readonly __ScrollUpdateNotification: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollUpdateNotification;
    readonly metrics: upstream4.ScrollMetrics;
    readonly context: upstream5.BuildContext | null;
    readonly depth: number;
    readonly dragDetails: upstream6.DragUpdateDetails | null;
    readonly scrollDelta: number | null;
    debugFillDescription(description: DartListInput<string, string>): void;
    dispatch(target: upstream5.BuildContext | null): void;
    toString(): string;
}
export declare function _ScrollUpdateNotificationFactory(options: {
    metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>;
    context: upstream5.BuildContext;
    dragDetails?: (Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    scrollDelta?: number | null | undefined;
    depth?: number | null | undefined;
}): ScrollUpdateNotification;
export interface _ScrollUpdateNotificationNative extends ScrollUpdateNotification {
    readonly [_flaxDartTypeValue]: _ScrollUpdateNotificationNative;
    debugFillDescription(description: DartListInput<string, string>): void;
    dispatch(target: upstream5.BuildContext | null): void;
    toString(): string;
    get dragDetails(): upstream6.DragUpdateDetails | null;
    get scrollDelta(): number | null;
    get metrics(): upstream4.ScrollMetrics;
    get context(): upstream5.BuildContext | null;
    get depth(): number;
}
export declare abstract class _ScrollUpdateNotificationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollUpdateNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollUpdateNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollUpdateNotification", readonly [], false];
    constructor(options: {
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        context: upstream5.BuildContext;
        dragDetails?: (Readonly<{
            "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        scrollDelta?: number | null | undefined;
        depth?: number | null | undefined;
    });
}
export declare namespace _ScrollUpdateNotificationFactory {
    function implement(args: [options: {
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        context: upstream5.BuildContext;
        dragDetails?: (Readonly<{
            "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        scrollDelta?: number | null | undefined;
        depth?: number | null | undefined;
    }], implementation: {}): ScrollUpdateNotification;
}
declare const _ScrollUpdateNotificationBinding: typeof _ScrollUpdateNotificationFactory & (new (options: {
    metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>;
    context: upstream5.BuildContext;
    dragDetails?: (Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    scrollDelta?: number | null | undefined;
    depth?: number | null | undefined;
}) => _ScrollUpdateNotificationNative);
export declare const ScrollUpdateNotification: typeof _ScrollUpdateNotificationBinding & _FlaxInstanceType<ScrollUpdateNotification> & _FlaxDartType<ScrollUpdateNotification, readonly ["class", "flax.core/sdk_widgets#type:ScrollUpdateNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "metrics" | "context" | "depth" | "dragDetails" | "scrollDelta" | "debugFillDescription" | "dispatch" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollUpdateNotification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";
export {};
