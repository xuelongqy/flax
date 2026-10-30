import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream7 from '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlayStyle';
import '@flax/flutter/services/_bindings/sdk_services_SystemUiOverlayStyle';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
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
export interface SliverAppBar extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/app_bar.dart::SliverAppBar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SliverAppBar: unique symbol;
    readonly [_flaxDartTypeValue]: SliverAppBar;
    readonly leading: Widget | null;
    readonly automaticallyImplyLeading: boolean;
    readonly title: Widget | null;
    readonly actions: DartList<Widget> | null;
    readonly automaticallyImplyActions: boolean;
    readonly flexibleSpace: Widget | null;
    readonly bottom: upstream2.PreferredSizeWidget | null;
    readonly elevation: number | null;
    readonly scrolledUnderElevation: number | null;
    readonly shadowColor: upstream3.Color | null;
    readonly surfaceTintColor: upstream3.Color | null;
    readonly forceElevated: boolean;
    readonly backgroundColor: upstream3.Color | null;
    readonly foregroundColor: upstream3.Color | null;
    readonly iconTheme: upstream4.IconThemeData | null;
    readonly actionsIconTheme: upstream4.IconThemeData | null;
    readonly primary: boolean;
    readonly centerTitle: boolean | null;
    readonly excludeHeaderSemantics: boolean;
    readonly titleSpacing: number | null;
    readonly collapsedHeight: number | null;
    readonly expandedHeight: number | null;
    readonly floating: boolean;
    readonly pinned: boolean;
    readonly shape: upstream5.ShapeBorder | null;
    readonly snap: boolean;
    readonly stretch: boolean;
    readonly stretchTriggerOffset: number;
    readonly onStretchTrigger: (() => Promise<void>) | null;
    readonly toolbarHeight: number;
    readonly leadingWidth: number | null;
    readonly toolbarTextStyle: upstream6.TextStyle | null;
    readonly titleTextStyle: upstream6.TextStyle | null;
    readonly systemOverlayStyle: upstream7.SystemUiOverlayStyle | null;
    readonly forceMaterialTransparency: boolean;
    readonly useDefaultSemanticsOrder: boolean;
    readonly clipBehavior: upstream8.Clip | null;
    readonly actionsPadding: upstream9.EdgeInsetsGeometry | null;
    readonly key: upstream1.Key | null;
    createState(): upstream10.State<SliverAppBar>;
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
export declare function _SliverAppBarFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    leading?: Widget | null | undefined;
    automaticallyImplyLeading?: boolean | undefined;
    title?: Widget | null | undefined;
    actions?: DartListInput<Widget, Widget> | null | undefined;
    automaticallyImplyActions?: boolean | undefined;
    flexibleSpace?: Widget | null | undefined;
    bottom?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    elevation?: number | null | undefined;
    scrolledUnderElevation?: number | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    forceElevated?: boolean | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    foregroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    actionsIconTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    primary?: boolean | undefined;
    centerTitle?: boolean | null | undefined;
    excludeHeaderSemantics?: boolean | undefined;
    titleSpacing?: number | null | undefined;
    collapsedHeight?: number | null | undefined;
    expandedHeight?: number | null | undefined;
    floating?: boolean | undefined;
    pinned?: boolean | undefined;
    snap?: boolean | undefined;
    stretch?: boolean | undefined;
    stretchTriggerOffset?: number | undefined;
    onStretchTrigger?: (() => Promise<void>) | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    toolbarHeight?: number | undefined;
    leadingWidth?: number | null | undefined;
    toolbarTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    titleTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    systemOverlayStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    forceMaterialTransparency?: boolean | undefined;
    useDefaultSemanticsOrder?: boolean | undefined;
    clipBehavior?: upstream8.Clip | null | undefined;
    actionsPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}): SliverAppBar;
export declare namespace _SliverAppBarFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _SliverAppBarFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _SliverAppBarFactory {
    function medium(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        leading?: Widget | null | undefined;
        automaticallyImplyLeading?: boolean | undefined;
        title?: Widget | null | undefined;
        actions?: DartListInput<Widget, Widget> | null | undefined;
        automaticallyImplyActions?: boolean | undefined;
        flexibleSpace?: Widget | null | undefined;
        bottom?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        elevation?: number | null | undefined;
        scrolledUnderElevation?: number | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        forceElevated?: boolean | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        actionsIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        primary?: boolean | undefined;
        centerTitle?: boolean | null | undefined;
        excludeHeaderSemantics?: boolean | undefined;
        titleSpacing?: number | null | undefined;
        collapsedHeight?: number | null | undefined;
        expandedHeight?: number | null | undefined;
        floating?: boolean | undefined;
        pinned?: boolean | undefined;
        snap?: boolean | undefined;
        stretch?: boolean | undefined;
        stretchTriggerOffset?: number | undefined;
        onStretchTrigger?: (() => Promise<void>) | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        toolbarHeight?: number | undefined;
        leadingWidth?: number | null | undefined;
        toolbarTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        titleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        systemOverlayStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        forceMaterialTransparency?: boolean | undefined;
        useDefaultSemanticsOrder?: boolean | undefined;
        clipBehavior?: upstream8.Clip | null | undefined;
        actionsPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }): SliverAppBar;
    namespace medium {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof medium>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _SliverAppBarFactory {
    function large(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        leading?: Widget | null | undefined;
        automaticallyImplyLeading?: boolean | undefined;
        title?: Widget | null | undefined;
        actions?: DartListInput<Widget, Widget> | null | undefined;
        automaticallyImplyActions?: boolean | undefined;
        flexibleSpace?: Widget | null | undefined;
        bottom?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        elevation?: number | null | undefined;
        scrolledUnderElevation?: number | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        forceElevated?: boolean | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        actionsIconTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        primary?: boolean | undefined;
        centerTitle?: boolean | null | undefined;
        excludeHeaderSemantics?: boolean | undefined;
        titleSpacing?: number | null | undefined;
        collapsedHeight?: number | null | undefined;
        expandedHeight?: number | null | undefined;
        floating?: boolean | undefined;
        pinned?: boolean | undefined;
        snap?: boolean | undefined;
        stretch?: boolean | undefined;
        stretchTriggerOffset?: number | undefined;
        onStretchTrigger?: (() => Promise<void>) | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        toolbarHeight?: number | undefined;
        leadingWidth?: number | null | undefined;
        toolbarTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        titleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        systemOverlayStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/services/system_chrome.dart::SystemUiOverlayStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        forceMaterialTransparency?: boolean | undefined;
        useDefaultSemanticsOrder?: boolean | undefined;
        clipBehavior?: upstream8.Clip | null | undefined;
        actionsPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }): SliverAppBar;
    namespace large {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof large>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare const SliverAppBar: typeof _SliverAppBarFactory & _FlaxInstanceType<SliverAppBar> & _FlaxDartType<SliverAppBar, readonly ["class", "flax.material/material#type:SliverAppBar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "leading" | "automaticallyImplyLeading" | "title" | "actions" | "automaticallyImplyActions" | "flexibleSpace" | "bottom" | "elevation" | "scrolledUnderElevation" | "shadowColor" | "surfaceTintColor" | "forceElevated" | "backgroundColor" | "foregroundColor" | "iconTheme" | "actionsIconTheme" | "primary" | "centerTitle" | "excludeHeaderSemantics" | "titleSpacing" | "collapsedHeight" | "expandedHeight" | "floating" | "pinned" | "shape" | "snap" | "stretch" | "stretchTriggerOffset" | "onStretchTrigger" | "toolbarHeight" | "leadingWidth" | "toolbarTextStyle" | "titleTextStyle" | "systemOverlayStyle" | "forceMaterialTransparency" | "useDefaultSemanticsOrder" | "clipBehavior" | "actionsPadding" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/app_bar.dart::SliverAppBar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
