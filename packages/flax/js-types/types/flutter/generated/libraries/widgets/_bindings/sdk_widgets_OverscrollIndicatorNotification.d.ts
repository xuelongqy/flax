import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OverscrollIndicatorNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Omit<upstream1.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.Notification>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::OverscrollIndicatorNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [];
}> {
    readonly __OverscrollIndicatorNotification: unique symbol;
    readonly [_flaxDartTypeValue]: OverscrollIndicatorNotification;
    readonly depth: number;
    readonly leading: boolean;
    get paintOffset(): number;
    get accepted(): boolean;
    dispatch(target: upstream2.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    disallowIndicator(): void;
    set paintOffset(value: number);
    set accepted(value: boolean);
}
export declare function _OverscrollIndicatorNotificationFactory(options: {
    leading: boolean;
}): OverscrollIndicatorNotification;
export interface _OverscrollIndicatorNotificationNative extends OverscrollIndicatorNotification {
    readonly [_flaxDartTypeValue]: _OverscrollIndicatorNotificationNative;
    dispatch(target: upstream2.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    disallowIndicator(): void;
    get leading(): boolean;
    get paintOffset(): number;
    get accepted(): boolean;
    get depth(): number;
    set paintOffset(value: number);
    set accepted(value: boolean);
}
export declare abstract class _OverscrollIndicatorNotificationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverscrollIndicatorNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: OverscrollIndicatorNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", readonly [], false];
    constructor(options: {
        leading: boolean;
    });
}
export declare namespace _OverscrollIndicatorNotificationFactory {
    function implement(args: [options: {
        leading: boolean;
    }], implementation: {}): OverscrollIndicatorNotification;
}
declare const _OverscrollIndicatorNotificationBinding: typeof _OverscrollIndicatorNotificationFactory & (new (options: {
    leading: boolean;
}) => _OverscrollIndicatorNotificationNative);
export declare const OverscrollIndicatorNotification: typeof _OverscrollIndicatorNotificationBinding & _FlaxInstanceType<OverscrollIndicatorNotification> & _FlaxDartType<OverscrollIndicatorNotification, readonly ["class", "flax.core/sdk_widgets#type:OverscrollIndicatorNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "leading" | "paintOffset" | "accepted" | "dispatch" | "toString" | "debugFillDescription" | "disallowIndicator" | "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::OverscrollIndicatorNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";
export {};
