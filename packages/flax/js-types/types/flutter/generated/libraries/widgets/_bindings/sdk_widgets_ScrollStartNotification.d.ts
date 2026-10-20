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
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragStartDetails';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScrollStartNotification extends Omit<upstream0.ScrollNotification, _flaxOwnMembers0>, Omit<upstream1.LayoutChangedNotification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification>, Omit<upstream2.Notification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification>, Omit<upstream3.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification | keyof upstream2.Notification>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollStartNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [];
}> {
    readonly __ScrollStartNotification: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollStartNotification;
    readonly metrics: upstream4.ScrollMetrics;
    readonly context: upstream5.BuildContext | null;
    readonly depth: number;
    readonly dragDetails: upstream6.DragStartDetails | null;
    debugFillDescription(description: DartListInput<string, string>): void;
    dispatch(target: upstream5.BuildContext | null): void;
    toString(): string;
}
export declare function _ScrollStartNotificationFactory(options: {
    metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>;
    context: upstream5.BuildContext | null;
    dragDetails?: (Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): ScrollStartNotification;
export interface _ScrollStartNotificationNative extends ScrollStartNotification {
    readonly [_flaxDartTypeValue]: _ScrollStartNotificationNative;
    debugFillDescription(description: DartListInput<string, string>): void;
    dispatch(target: upstream5.BuildContext | null): void;
    toString(): string;
    get dragDetails(): upstream6.DragStartDetails | null;
    get metrics(): upstream4.ScrollMetrics;
    get context(): upstream5.BuildContext | null;
    get depth(): number;
}
export declare abstract class _ScrollStartNotificationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollStartNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollStartNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollStartNotification", readonly [], false];
    constructor(options: {
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        context: upstream5.BuildContext | null;
        dragDetails?: (Readonly<{
            "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _ScrollStartNotificationFactory {
    function implement(args: [options: {
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        context: upstream5.BuildContext | null;
        dragDetails?: (Readonly<{
            "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): ScrollStartNotification;
}
declare const _ScrollStartNotificationBinding: typeof _ScrollStartNotificationFactory & (new (options: {
    metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>;
    context: upstream5.BuildContext | null;
    dragDetails?: (Readonly<{
        "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}) => _ScrollStartNotificationNative);
export declare const ScrollStartNotification: typeof _ScrollStartNotificationBinding & _FlaxInstanceType<ScrollStartNotification> & _FlaxDartType<ScrollStartNotification, readonly ["class", "flax.core/sdk_widgets#type:ScrollStartNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "metrics" | "context" | "depth" | "dragDetails" | "debugFillDescription" | "dispatch" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollStartNotification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";
export {};
