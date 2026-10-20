import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigationNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}> {
    readonly __NavigationNotification: unique symbol;
    readonly [_flaxDartTypeValue]: NavigationNotification;
    readonly canHandlePop: boolean;
    dispatch(target: upstream1.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
}
export declare function _NavigationNotificationFactory(options: {
    canHandlePop: boolean;
}): NavigationNotification;
export interface _NavigationNotificationNative extends NavigationNotification {
    readonly [_flaxDartTypeValue]: _NavigationNotificationNative;
    dispatch(target: upstream1.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    get canHandlePop(): boolean;
}
export declare abstract class _NavigationNotificationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NavigationNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: NavigationNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:NavigationNotification", readonly [], false];
    constructor(options: {
        canHandlePop: boolean;
    });
}
export declare namespace _NavigationNotificationFactory {
    function implement(args: [options: {
        canHandlePop: boolean;
    }], implementation: {}): NavigationNotification;
}
declare const _NavigationNotificationBinding: typeof _NavigationNotificationFactory & (new (options: {
    canHandlePop: boolean;
}) => _NavigationNotificationNative);
export declare const NavigationNotification: typeof _NavigationNotificationBinding & _FlaxInstanceType<NavigationNotification> & _FlaxDartType<NavigationNotification, readonly ["class", "flax.core/sdk_widgets#type:NavigationNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "canHandlePop" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigationNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";
export {};
