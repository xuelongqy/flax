import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LayoutChangedNotification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SizeChangedLayoutNotification extends Omit<upstream0.LayoutChangedNotification, _flaxOwnMembers0>, Omit<upstream1.Notification, _flaxOwnMembers0 | keyof upstream0.LayoutChangedNotification>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/size_changed_layout_notifier.dart::SizeChangedLayoutNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}> {
    readonly __SizeChangedLayoutNotification: unique symbol;
    readonly [_flaxDartTypeValue]: SizeChangedLayoutNotification;
    dispatch(target: upstream2.BuildContext | null): void;
    debugFillDescription(description: DartListInput<string, string>): void;
    toString(): string;
}
export declare function _SizeChangedLayoutNotificationFactory(): SizeChangedLayoutNotification;
export interface _SizeChangedLayoutNotificationNative extends SizeChangedLayoutNotification {
    readonly [_flaxDartTypeValue]: _SizeChangedLayoutNotificationNative;
    dispatch(target: upstream2.BuildContext | null): void;
    debugFillDescription(description: DartListInput<string, string>): void;
    toString(): string;
}
export declare abstract class _SizeChangedLayoutNotificationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SizeChangedLayoutNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SizeChangedLayoutNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", readonly [], false];
    constructor();
}
export declare namespace _SizeChangedLayoutNotificationFactory {
    function implement(args: [], implementation: {}): SizeChangedLayoutNotification;
}
declare const _SizeChangedLayoutNotificationBinding: typeof _SizeChangedLayoutNotificationFactory & (new () => _SizeChangedLayoutNotificationNative);
export declare const SizeChangedLayoutNotification: typeof _SizeChangedLayoutNotificationBinding & _FlaxInstanceType<SizeChangedLayoutNotification> & _FlaxDartType<SizeChangedLayoutNotification, readonly ["class", "flax.core/sdk_widgets#type:SizeChangedLayoutNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispatch" | "debugFillDescription" | "toString" | "__flaxBound:package:flutter/src/widgets/size_changed_layout_notifier.dart::SizeChangedLayoutNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";
export {};
