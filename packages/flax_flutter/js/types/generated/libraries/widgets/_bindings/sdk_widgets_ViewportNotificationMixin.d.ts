import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ViewportNotificationMixin extends Omit<upstream0.Notification, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}> {
    readonly __ViewportNotificationMixin: unique symbol;
    readonly [_flaxDartTypeValue]: ViewportNotificationMixin;
    readonly depth: number;
    dispatch(target: upstream1.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
}
export declare const ViewportNotificationMixin: object & _FlaxInstanceType<ViewportNotificationMixin> & _FlaxDartType<ViewportNotificationMixin, readonly ["class", "flax.core/sdk_widgets#type:ViewportNotificationMixin", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification";
export {};
