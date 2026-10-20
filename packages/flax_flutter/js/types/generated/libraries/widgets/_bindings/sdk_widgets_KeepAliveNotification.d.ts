import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeepAliveNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}> {
    readonly __KeepAliveNotification: unique symbol;
    readonly [_flaxDartTypeValue]: KeepAliveNotification;
    readonly handle: upstream1.Listenable;
    dispatch(target: upstream2.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
}
export declare function _KeepAliveNotificationFactory(handle: Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>): KeepAliveNotification;
export interface _KeepAliveNotificationNative extends KeepAliveNotification {
    readonly [_flaxDartTypeValue]: _KeepAliveNotificationNative;
    dispatch(target: upstream2.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    get handle(): upstream1.Listenable;
}
export declare abstract class _KeepAliveNotificationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeepAliveNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: KeepAliveNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:KeepAliveNotification", readonly [], false];
    constructor(handle: Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>);
}
export declare namespace _KeepAliveNotificationFactory {
    function implement(args: [handle: Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>], implementation: {}): KeepAliveNotification;
}
declare const _KeepAliveNotificationBinding: typeof _KeepAliveNotificationFactory & (new (handle: Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>) => _KeepAliveNotificationNative);
export declare const KeepAliveNotification: typeof _KeepAliveNotificationBinding & _FlaxInstanceType<KeepAliveNotification> & _FlaxDartType<KeepAliveNotification, readonly ["class", "flax.core/sdk_widgets#type:KeepAliveNotification", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "handle" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::KeepAliveNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";
export {};
