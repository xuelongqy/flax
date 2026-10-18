import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollMetrics';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollUpdateNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollUpdateNotification';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ScrollMetricsNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Omit<upstream1.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.Notification>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollMetricsNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [];
}> {
    readonly __ScrollMetricsNotification: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollMetricsNotification;
}
export interface ScrollMetricsNotification {
    readonly [_flaxDartTypeValue]: ScrollMetricsNotification;
    dispatch(target: upstream3.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    asScrollUpdate(): upstream4.ScrollUpdateNotification;
    get metrics(): upstream2.ScrollMetrics;
    get context(): upstream3.BuildContext;
    get depth(): number;
}
export declare abstract class ScrollMetricsNotification extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollMetricsNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollMetricsNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollMetricsNotification", readonly [], false];
    constructor(options: {
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        context: upstream3.BuildContext;
    });
}
export declare namespace ScrollMetricsNotification {
    function implement(args: [options: {
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        context: upstream3.BuildContext;
    }], implementation: {}): ScrollMetricsNotification;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "metrics" | "context" | "dispatch" | "toString" | "debugFillDescription" | "asScrollUpdate" | "__flaxBound:package:flutter/src/widgets/scroll_position.dart::ScrollMetricsNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";
export {};
