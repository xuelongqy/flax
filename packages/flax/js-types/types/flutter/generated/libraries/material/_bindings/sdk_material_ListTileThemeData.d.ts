import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_ListTileStyle';
import '@flax/flutter/material/_bindings/sdk_material_ListTileStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream8 from '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import type * as upstream9 from '@flax/flutter/material/_bindings/sdk_material_ListTileTitleAlignment';
import '@flax/flutter/material/_bindings/sdk_material_ListTileTitleAlignment';
import type * as upstream10 from '@flax/flutter/material/_bindings/sdk_material_ListTileControlAffinity';
import '@flax/flutter/material/_bindings/sdk_material_ListTileControlAffinity';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListTileThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/list_tile_theme.dart::ListTileThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ListTileThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: ListTileThemeData;
    readonly dense: boolean | null;
    readonly shape: upstream1.ShapeBorder | null;
    readonly style: upstream2.ListTileStyle | null;
    readonly selectedColor: upstream3.Color | null;
    readonly iconColor: upstream3.Color | null;
    readonly textColor: upstream3.Color | null;
    readonly titleTextStyle: upstream4.TextStyle | null;
    readonly subtitleTextStyle: upstream4.TextStyle | null;
    readonly leadingAndTrailingTextStyle: upstream4.TextStyle | null;
    readonly contentPadding: upstream5.EdgeInsetsGeometry | null;
    readonly tileColor: upstream3.Color | null;
    readonly selectedTileColor: upstream3.Color | null;
    readonly horizontalTitleGap: number | null;
    readonly minVerticalPadding: number | null;
    readonly minLeadingWidth: number | null;
    readonly minTileHeight: number | null;
    readonly enableFeedback: boolean | null;
    readonly mouseCursor: upstream6.WidgetStateProperty<upstream7.MouseCursor | null> | null;
    readonly visualDensity: upstream8.VisualDensity | null;
    readonly titleAlignment: upstream9.ListTileTitleAlignment | null;
    readonly controlAffinity: upstream10.ListTileControlAffinity | null;
    readonly isThreeLine: boolean | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        controlAffinity?: upstream10.ListTileControlAffinity | null | undefined;
        dense?: boolean | null | undefined;
        enableFeedback?: boolean | null | undefined;
        horizontalTitleGap?: number | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        isThreeLine?: boolean | null | undefined;
        leadingAndTrailingTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        minLeadingWidth?: number | null | undefined;
        minTileHeight?: number | null | undefined;
        minVerticalPadding?: number | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
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
        style?: upstream2.ListTileStyle | null | undefined;
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
        titleAlignment?: upstream9.ListTileTitleAlignment | null | undefined;
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
    }): ListTileThemeData;
}
export declare function _ListTileThemeDataFactory(options?: {
    dense?: boolean | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    style?: upstream2.ListTileStyle | null | undefined;
    selectedColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    textColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    titleTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    subtitleTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    leadingAndTrailingTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    tileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectedTileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    horizontalTitleGap?: number | null | undefined;
    minVerticalPadding?: number | null | undefined;
    minLeadingWidth?: number | null | undefined;
    enableFeedback?: boolean | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    minTileHeight?: number | null | undefined;
    titleAlignment?: upstream9.ListTileTitleAlignment | null | undefined;
    controlAffinity?: upstream10.ListTileControlAffinity | null | undefined;
    isThreeLine?: boolean | null | undefined;
}): ListTileThemeData;
export interface _ListTileThemeDataNative extends ListTileThemeData {
    readonly [_flaxDartTypeValue]: _ListTileThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        dense?: boolean | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        style?: upstream2.ListTileStyle | null | undefined;
        selectedColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        titleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        subtitleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        leadingAndTrailingTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        tileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedTileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        horizontalTitleGap?: number | null | undefined;
        minVerticalPadding?: number | null | undefined;
        minLeadingWidth?: number | null | undefined;
        minTileHeight?: number | null | undefined;
        enableFeedback?: boolean | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
        }> | null | undefined;
        isThreeLine?: boolean | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        titleAlignment?: upstream9.ListTileTitleAlignment | null | undefined;
        controlAffinity?: upstream10.ListTileControlAffinity | null | undefined;
    }): ListTileThemeData;
    get dense(): boolean | null;
    get shape(): upstream1.ShapeBorder | null;
    get style(): upstream2.ListTileStyle | null;
    get selectedColor(): upstream3.Color | null;
    get iconColor(): upstream3.Color | null;
    get textColor(): upstream3.Color | null;
    get titleTextStyle(): upstream4.TextStyle | null;
    get subtitleTextStyle(): upstream4.TextStyle | null;
    get leadingAndTrailingTextStyle(): upstream4.TextStyle | null;
    get contentPadding(): upstream5.EdgeInsetsGeometry | null;
    get tileColor(): upstream3.Color | null;
    get selectedTileColor(): upstream3.Color | null;
    get horizontalTitleGap(): number | null;
    get minVerticalPadding(): number | null;
    get minLeadingWidth(): number | null;
    get minTileHeight(): number | null;
    get enableFeedback(): boolean | null;
    get mouseCursor(): upstream6.WidgetStateProperty<upstream7.MouseCursor | null> | null;
    get visualDensity(): upstream8.VisualDensity | null;
    get titleAlignment(): upstream9.ListTileTitleAlignment | null;
    get controlAffinity(): upstream10.ListTileControlAffinity | null;
    get isThreeLine(): boolean | null;
}
export declare abstract class _ListTileThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListTileThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ListTileThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ListTileThemeData", readonly [], false];
    constructor(options?: {
        dense?: boolean | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        style?: upstream2.ListTileStyle | null | undefined;
        selectedColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        titleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        subtitleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        leadingAndTrailingTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        tileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedTileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        horizontalTitleGap?: number | null | undefined;
        minVerticalPadding?: number | null | undefined;
        minLeadingWidth?: number | null | undefined;
        enableFeedback?: boolean | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        minTileHeight?: number | null | undefined;
        titleAlignment?: upstream9.ListTileTitleAlignment | null | undefined;
        controlAffinity?: upstream10.ListTileControlAffinity | null | undefined;
        isThreeLine?: boolean | null | undefined;
    });
}
export declare namespace _ListTileThemeDataFactory {
    function implement(args: [options?: {
        dense?: boolean | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        style?: upstream2.ListTileStyle | null | undefined;
        selectedColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        titleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        subtitleTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        leadingAndTrailingTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        contentPadding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        tileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectedTileColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        horizontalTitleGap?: number | null | undefined;
        minVerticalPadding?: number | null | undefined;
        minLeadingWidth?: number | null | undefined;
        enableFeedback?: boolean | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        minTileHeight?: number | null | undefined;
        titleAlignment?: upstream9.ListTileTitleAlignment | null | undefined;
        controlAffinity?: upstream10.ListTileControlAffinity | null | undefined;
        isThreeLine?: boolean | null | undefined;
    }], implementation: {}): ListTileThemeData;
}
declare const _ListTileThemeDataBinding: typeof _ListTileThemeDataFactory & (new (options?: {
    dense?: boolean | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    style?: upstream2.ListTileStyle | null | undefined;
    selectedColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    textColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    titleTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    subtitleTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    leadingAndTrailingTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    tileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectedTileColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    horizontalTitleGap?: number | null | undefined;
    minVerticalPadding?: number | null | undefined;
    minLeadingWidth?: number | null | undefined;
    enableFeedback?: boolean | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor | null];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    minTileHeight?: number | null | undefined;
    titleAlignment?: upstream9.ListTileTitleAlignment | null | undefined;
    controlAffinity?: upstream10.ListTileControlAffinity | null | undefined;
    isThreeLine?: boolean | null | undefined;
}) => _ListTileThemeDataNative);
export declare namespace _ListTileThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/material/list_tile_theme.dart::ListTileThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/material/list_tile_theme.dart::ListTileThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ListTileThemeData | null;
}
export declare const ListTileThemeData: typeof _ListTileThemeDataBinding & _FlaxInstanceType<ListTileThemeData> & _FlaxDartType<ListTileThemeData, readonly ["class", "flax.core/sdk_material#type:ListTileThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "dense" | "shape" | "style" | "selectedColor" | "iconColor" | "textColor" | "titleTextStyle" | "subtitleTextStyle" | "leadingAndTrailingTextStyle" | "contentPadding" | "tileColor" | "selectedTileColor" | "horizontalTitleGap" | "minVerticalPadding" | "minLeadingWidth" | "minTileHeight" | "enableFeedback" | "mouseCursor" | "visualDensity" | "titleAlignment" | "controlAffinity" | "isThreeLine" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/list_tile_theme.dart::ListTileThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
