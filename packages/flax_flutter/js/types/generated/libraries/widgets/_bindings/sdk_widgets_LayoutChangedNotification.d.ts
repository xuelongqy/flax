import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface LayoutChangedNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}> {
    readonly __LayoutChangedNotification: unique symbol;
    readonly [_flaxDartTypeValue]: LayoutChangedNotification;
}
export interface LayoutChangedNotification {
    readonly [_flaxDartTypeValue]: LayoutChangedNotification;
    dispatch(target: upstream1.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
}
export declare abstract class LayoutChangedNotification extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayoutChangedNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LayoutChangedNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LayoutChangedNotification", readonly [], false];
    constructor();
}
export declare namespace LayoutChangedNotification {
    function implement(args: [], implementation: {}): LayoutChangedNotification;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";
export {};
