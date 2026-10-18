import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ViewportNotificationMixin';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DraggableScrollableNotification extends Omit<upstream0.Notification, _flaxOwnMembers0>, Omit<upstream1.ViewportNotificationMixin, _flaxOwnMembers0 | keyof upstream0.Notification>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableNotification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [];
}> {
    readonly __DraggableScrollableNotification: unique symbol;
    readonly [_flaxDartTypeValue]: DraggableScrollableNotification;
}
export interface DraggableScrollableNotification {
    readonly [_flaxDartTypeValue]: DraggableScrollableNotification;
    dispatch(target: upstream2.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    get extent(): number;
    get minExtent(): number;
    get maxExtent(): number;
    get initialExtent(): number;
    get context(): upstream2.BuildContext;
    get shouldCloseOnMinExtent(): boolean;
    get depth(): number;
}
export declare abstract class DraggableScrollableNotification extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DraggableScrollableNotification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DraggableScrollableNotification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DraggableScrollableNotification", readonly [], false];
    constructor(options: {
        extent: number;
        minExtent: number;
        maxExtent: number;
        initialExtent: number;
        context: upstream2.BuildContext;
        shouldCloseOnMinExtent?: boolean | undefined;
    });
}
export declare namespace DraggableScrollableNotification {
    function implement(args: [options: {
        extent: number;
        minExtent: number;
        maxExtent: number;
        initialExtent: number;
        context: upstream2.BuildContext;
        shouldCloseOnMinExtent?: boolean | undefined;
    }], implementation: {}): DraggableScrollableNotification;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "depth" | "extent" | "minExtent" | "maxExtent" | "initialExtent" | "context" | "shouldCloseOnMinExtent" | "dispatch" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/draggable_scrollable_sheet.dart::DraggableScrollableNotification" | "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification" | "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin";
export {};
