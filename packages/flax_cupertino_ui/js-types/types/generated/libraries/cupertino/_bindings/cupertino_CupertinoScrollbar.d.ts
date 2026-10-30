import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawScrollbar';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RawScrollbar';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream9 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawScrollbarState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RawScrollbarState';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoScrollbar extends _FlaxDartWidget, Omit<upstream0.RawScrollbar, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.RawScrollbar>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.RawScrollbar | keyof upstream1.StatefulWidget>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/scrollbar.dart::CupertinoScrollbar": readonly [];
}>, Readonly<{
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
    readonly __CupertinoScrollbar: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoScrollbar;
    readonly thicknessWhileDragging: number;
    readonly radiusWhileDragging: upstream4.Radius;
    readonly child: Widget;
    readonly controller: upstream3.ScrollController | null;
    readonly thumbVisibility: boolean | null;
    readonly shape: upstream7.OutlinedBorder | null;
    readonly radius: upstream4.Radius | null;
    readonly thickness: number | null;
    readonly thumbColor: upstream8.Color | null;
    readonly minThumbLength: number;
    readonly minOverscrollLength: number | null;
    readonly trackVisibility: boolean | null;
    readonly trackRadius: upstream4.Radius | null;
    readonly trackColor: upstream8.Color | null;
    readonly trackBorderColor: upstream8.Color | null;
    readonly fadeDuration: upstream9.Duration;
    readonly timeToFade: upstream9.Duration;
    readonly pressDuration: upstream9.Duration;
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
    readonly scrollbarOrientation: upstream6.ScrollbarOrientation | null;
    readonly mainAxisMargin: number;
    readonly crossAxisMargin: number;
    readonly padding: upstream10.EdgeInsetsGeometry | null;
    readonly key: upstream2.Key | null;
    createState(): upstream11.RawScrollbarState<CupertinoScrollbar>;
    createElement(): upstream12.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream15.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
}
export declare function _CupertinoScrollbarFactory(options: {
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
    thickness?: number | undefined;
    thicknessWhileDragging?: number | undefined;
    radius?: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }> | undefined;
    radiusWhileDragging?: Readonly<{
        "__flaxBound:dart:ui::Radius": readonly [];
    }> | undefined;
    notificationPredicate?: ((notification: upstream5.ScrollNotification) => boolean) | null | undefined;
    scrollbarOrientation?: upstream6.ScrollbarOrientation | null | undefined;
    mainAxisMargin?: number | undefined;
}): CupertinoScrollbar;
export declare namespace _CupertinoScrollbarFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoScrollbarFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoScrollbarFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoScrollbarFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _CupertinoScrollbarFactory {
    const defaultThickness: number;
}
export declare namespace _CupertinoScrollbarFactory {
    const defaultThicknessWhileDragging: number;
}
export declare namespace _CupertinoScrollbarFactory {
    const defaultRadius: upstream4.Radius;
}
export declare namespace _CupertinoScrollbarFactory {
    const defaultRadiusWhileDragging: upstream4.Radius;
}
export declare const CupertinoScrollbar: typeof _CupertinoScrollbarFactory & _FlaxInstanceType<CupertinoScrollbar> & _FlaxDartType<CupertinoScrollbar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoScrollbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "thicknessWhileDragging" | "radiusWhileDragging" | "child" | "controller" | "thumbVisibility" | "shape" | "radius" | "thickness" | "thumbColor" | "minThumbLength" | "minOverscrollLength" | "trackVisibility" | "trackRadius" | "trackColor" | "trackBorderColor" | "fadeDuration" | "timeToFade" | "pressDuration" | "notificationPredicate" | "interactive" | "scrollbarOrientation" | "mainAxisMargin" | "crossAxisMargin" | "padding" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/scrollbar.dart::CupertinoScrollbar" | "__flaxBound:package:flutter/src/widgets/scrollbar.dart::RawScrollbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
