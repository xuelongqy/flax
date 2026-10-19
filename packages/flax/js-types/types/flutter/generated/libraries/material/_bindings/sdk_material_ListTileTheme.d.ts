import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedTheme';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_ListTileThemeData';
import '@flax/flutter/material/_bindings/sdk_material_ListTileThemeData';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_ListTileStyle';
import '@flax/flutter/material/_bindings/sdk_material_ListTileStyle';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream10 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream11 from '@flax/flutter/material/_bindings/sdk_material_ListTileControlAffinity';
import '@flax/flutter/material/_bindings/sdk_material_ListTileControlAffinity';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream14 from '@flax/flutter/material/_bindings/sdk_material_ListTileTitleAlignment';
import '@flax/flutter/material/_bindings/sdk_material_ListTileTitleAlignment';
import '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListTileTheme extends _FlaxDartWidget, Omit<upstream0.InheritedTheme, _flaxOwnMembers0>, Omit<upstream1.InheritedWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedTheme | keyof upstream1.InheritedWidget | keyof upstream2.ProxyWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/list_tile_theme.dart::ListTileTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ListTileTheme: unique symbol;
    readonly [_flaxDartTypeValue]: ListTileTheme;
    readonly data: upstream4.ListTileThemeData;
    readonly dense: boolean | null;
    readonly shape: upstream5.ShapeBorder | null;
    readonly style: upstream6.ListTileStyle | null;
    readonly selectedColor: upstream7.Color | null;
    readonly iconColor: upstream7.Color | null;
    readonly textColor: upstream7.Color | null;
    readonly contentPadding: upstream8.EdgeInsetsGeometry | null;
    readonly tileColor: upstream7.Color | null;
    readonly selectedTileColor: upstream7.Color | null;
    readonly horizontalTitleGap: number | null;
    readonly minVerticalPadding: number | null;
    readonly minLeadingWidth: number | null;
    readonly enableFeedback: boolean | null;
    readonly controlAffinity: upstream11.ListTileControlAffinity | null;
    readonly child: Widget;
    readonly key: upstream3.Key | null;
    wrap(context: upstream12.BuildContext, child: Widget): Widget;
    updateShouldNotify(oldWidget: ListTileTheme): boolean;
    createElement(): upstream16.InheritedElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream18.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream18.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream20.DiagnosticsTreeStyle | null | undefined;
    }): upstream19.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream19.DiagnosticsNode>;
}
export declare function _ListTileThemeFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    data?: (Readonly<{
        "__flaxBound:package:flutter/src/material/list_tile_theme.dart::ListTileThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dense?: boolean | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    style?: upstream6.ListTileStyle | null | undefined;
    selectedColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    textColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    tileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectedTileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    enableFeedback?: boolean | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream10.MouseCursor | null];
    }> | null | undefined;
    horizontalTitleGap?: number | null | undefined;
    minVerticalPadding?: number | null | undefined;
    minLeadingWidth?: number | null | undefined;
    controlAffinity?: upstream11.ListTileControlAffinity | null | undefined;
    child: Widget;
}): ListTileTheme;
export declare namespace _ListTileThemeFactory {
    function of(context: upstream12.BuildContext): upstream4.ListTileThemeData;
}
export declare namespace _ListTileThemeFactory {
    function merge(options: {
        child: Widget;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        controlAffinity?: upstream11.ListTileControlAffinity | null | undefined;
        dense?: boolean | null | undefined;
        enableFeedback?: boolean | null | undefined;
        horizontalTitleGap?: number | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        isThreeLine?: boolean | null | undefined;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        leadingAndTrailingTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        minLeadingWidth?: number | null | undefined;
        minTileHeight?: number | null | undefined;
        minVerticalPadding?: number | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream10.MouseCursor | null];
        }> | null | undefined;
        selectedColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedTileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        style?: upstream6.ListTileStyle | null | undefined;
        subtitleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        tileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        titleAlignment?: upstream14.ListTileTitleAlignment | null | undefined;
        titleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): Widget;
}
export declare const ListTileTheme: typeof _ListTileThemeFactory & _FlaxInstanceType<ListTileTheme> & _FlaxDartType<ListTileTheme, readonly ["class", "flax.core/sdk_material#type:ListTileTheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "data" | "dense" | "shape" | "style" | "selectedColor" | "iconColor" | "textColor" | "contentPadding" | "tileColor" | "selectedTileColor" | "horizontalTitleGap" | "minVerticalPadding" | "minLeadingWidth" | "enableFeedback" | "controlAffinity" | "child" | "key" | "wrap" | "updateShouldNotify" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/list_tile_theme.dart::ListTileTheme" | "__flaxBound:package:flutter/src/widgets/inherited_theme.dart::InheritedTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
