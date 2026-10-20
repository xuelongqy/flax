import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LayoutChangedNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}> {
    readonly __LayoutChangedNotification: unique symbol;
    readonly [_flaxDartTypeValue]: LayoutChangedNotification;
    dispatch(target: upstream1.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
}
export declare function _LayoutChangedNotificationFactory(): LayoutChangedNotification;
export interface _LayoutChangedNotificationNative extends LayoutChangedNotification {
    readonly [_flaxDartTypeValue]: _LayoutChangedNotificationNative;
    dispatch(target: upstream1.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
}
export declare abstract class _LayoutChangedNotificationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayoutChangedNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LayoutChangedNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LayoutChangedNotification", readonly [], false];
    constructor();
}
export declare namespace _LayoutChangedNotificationFactory {
    function implement(args: [], implementation: {}): LayoutChangedNotification;
}
declare const _LayoutChangedNotificationBinding: typeof _LayoutChangedNotificationFactory & (new () => _LayoutChangedNotificationNative);
export declare const LayoutChangedNotification: typeof _LayoutChangedNotificationBinding & _FlaxInstanceType<LayoutChangedNotification> & _FlaxDartType<LayoutChangedNotification, readonly ["class", "flax.core/sdk_widgets#type:LayoutChangedNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";
export {};
