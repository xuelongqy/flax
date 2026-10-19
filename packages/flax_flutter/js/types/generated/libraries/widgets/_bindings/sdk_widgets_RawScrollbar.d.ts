import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawScrollbarState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RawScrollbarState';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawScrollbar extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollbar.dart::RawScrollbar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawScrollbar: unique symbol;
    readonly [_flaxDartTypeValue]: RawScrollbar;
    readonly child: Widget;
    readonly controller: upstream2.ScrollController | null;
    readonly thumbVisibility: boolean | null;
    readonly shape: upstream3.OutlinedBorder | null;
    readonly radius: upstream4.Radius | null;
    readonly thickness: number | null;
    readonly thumbColor: upstream5.Color | null;
    readonly minThumbLength: number;
    readonly minOverscrollLength: number | null;
    readonly trackVisibility: boolean | null;
    readonly trackRadius: upstream4.Radius | null;
    readonly trackColor: upstream5.Color | null;
    readonly trackBorderColor: upstream5.Color | null;
    readonly fadeDuration: upstream6.Duration;
    readonly timeToFade: upstream6.Duration;
    readonly pressDuration: upstream6.Duration;
    readonly notificationPredicate: ((notification: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [];
    }>) => boolean);
    readonly interactive: boolean | null;
    readonly scrollbarOrientation: upstream8.ScrollbarOrientation | null;
    readonly mainAxisMargin: number;
    readonly crossAxisMargin: number;
    readonly padding: upstream9.EdgeInsetsGeometry | null;
    readonly key: upstream1.Key | null;
    createState(): upstream10.RawScrollbarState<RawScrollbar>;
    createElement(): upstream11.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
export declare function _RawScrollbarFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Widget;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    thumbVisibility?: boolean | null | undefined;
    shape?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    radius?: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }> | null | undefined;
    thickness?: number | null | undefined;
    thumbColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    minThumbLength?: number | undefined;
    minOverscrollLength?: number | null | undefined;
    trackVisibility?: boolean | null | undefined;
    trackRadius?: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }> | null | undefined;
    trackColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    trackBorderColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    fadeDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | undefined;
    timeToFade?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | undefined;
    pressDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream6.Duration];
    }>) | undefined;
    notificationPredicate?: ((notification: upstream7.ScrollNotification) => boolean) | undefined;
    interactive?: boolean | null | undefined;
    scrollbarOrientation?: upstream8.ScrollbarOrientation | null | undefined;
    mainAxisMargin?: number | undefined;
    crossAxisMargin?: number | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}): RawScrollbar;
export declare const RawScrollbar: typeof _RawScrollbarFactory & _FlaxInstanceType<RawScrollbar> & _FlaxDartType<RawScrollbar, readonly ["class", "flax.core/sdk_widgets#type:RawScrollbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "controller" | "thumbVisibility" | "shape" | "radius" | "thickness" | "thumbColor" | "minThumbLength" | "minOverscrollLength" | "trackVisibility" | "trackRadius" | "trackColor" | "trackBorderColor" | "fadeDuration" | "timeToFade" | "pressDuration" | "notificationPredicate" | "interactive" | "scrollbarOrientation" | "mainAxisMargin" | "crossAxisMargin" | "padding" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/scrollbar.dart::RawScrollbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
