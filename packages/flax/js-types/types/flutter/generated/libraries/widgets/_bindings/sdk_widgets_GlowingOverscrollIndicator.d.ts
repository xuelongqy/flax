import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface GlowingOverscrollIndicator extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::GlowingOverscrollIndicator": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __GlowingOverscrollIndicator: unique symbol;
    readonly [_flaxDartTypeValue]: GlowingOverscrollIndicator;
    readonly showLeading: boolean;
    readonly showTrailing: boolean;
    readonly axisDirection: upstream2.AxisDirection;
    readonly axis: upstream5.Axis;
    readonly color: upstream3.Color;
    readonly notificationPredicate: ((notification: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [];
    }>) => boolean);
    readonly child: Widget | null;
    readonly key: upstream1.Key | null;
    createState(): upstream6.State<GlowingOverscrollIndicator>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream8.StatefulElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
export declare function _GlowingOverscrollIndicatorFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    showLeading?: boolean | undefined;
    showTrailing?: boolean | undefined;
    axisDirection: upstream2.AxisDirection;
    color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    notificationPredicate?: ((notification: upstream4.ScrollNotification) => boolean) | undefined;
    child?: Widget | null | undefined;
}): GlowingOverscrollIndicator;
export declare namespace _GlowingOverscrollIndicatorFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _GlowingOverscrollIndicatorFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _GlowingOverscrollIndicatorFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _GlowingOverscrollIndicatorFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare const GlowingOverscrollIndicator: typeof _GlowingOverscrollIndicatorFactory & _FlaxInstanceType<GlowingOverscrollIndicator> & _FlaxDartType<GlowingOverscrollIndicator, readonly ["class", "flax.core/sdk_widgets#type:GlowingOverscrollIndicator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "showLeading" | "showTrailing" | "axisDirection" | "axis" | "color" | "notificationPredicate" | "child" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::GlowingOverscrollIndicator" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
