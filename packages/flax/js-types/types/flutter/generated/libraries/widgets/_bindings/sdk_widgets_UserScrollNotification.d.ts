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
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UserScrollNotification extends Omit<upstream0.ScrollNotification, _flaxOwnMembers0>, Omit<upstream1.LayoutChangedNotification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification>, Omit<upstream2.Notification, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification>, Omit<upstream3.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.ScrollNotification | keyof upstream1.LayoutChangedNotification | keyof upstream2.Notification>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::UserScrollNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [];
}> {
    readonly __UserScrollNotification: unique symbol;
    readonly [_flaxDartTypeValue]: UserScrollNotification;
    readonly metrics: upstream4.ScrollMetrics;
    readonly context: upstream5.BuildContext | null;
    readonly depth: number;
    readonly direction: upstream6.ScrollDirection;
    debugFillDescription(description: DartListInput<string, string>): void;
    dispatch(target: upstream5.BuildContext | null): void;
    toString(): string;
}
export declare function _UserScrollNotificationFactory(options: {
    metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>;
    context: upstream5.BuildContext;
    direction: upstream6.ScrollDirection;
}): UserScrollNotification;
export interface _UserScrollNotificationNative extends UserScrollNotification {
    readonly [_flaxDartTypeValue]: _UserScrollNotificationNative;
    debugFillDescription(description: DartListInput<string, string>): void;
    dispatch(target: upstream5.BuildContext | null): void;
    toString(): string;
    get direction(): upstream6.ScrollDirection;
    get metrics(): upstream4.ScrollMetrics;
    get context(): upstream5.BuildContext | null;
    get depth(): number;
}
export declare abstract class _UserScrollNotificationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UserScrollNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: UserScrollNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UserScrollNotification", readonly [], false];
    constructor(options: {
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        context: upstream5.BuildContext;
        direction: upstream6.ScrollDirection;
    });
}
export declare namespace _UserScrollNotificationFactory {
    function implement(args: [options: {
        metrics: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
        }>;
        context: upstream5.BuildContext;
        direction: upstream6.ScrollDirection;
    }], implementation: {}): UserScrollNotification;
}
declare const _UserScrollNotificationBinding: typeof _UserScrollNotificationFactory & (new (options: {
    metrics: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_metrics.dart::ScrollMetrics": readonly [];
    }>;
    context: upstream5.BuildContext;
    direction: upstream6.ScrollDirection;
}) => _UserScrollNotificationNative);
export declare const UserScrollNotification: typeof _UserScrollNotificationBinding & _FlaxInstanceType<UserScrollNotification> & _FlaxDartType<UserScrollNotification, readonly ["class", "flax.core/sdk_widgets#type:UserScrollNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "metrics" | "context" | "depth" | "direction" | "debugFillDescription" | "dispatch" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::UserScrollNotification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";
export {};
