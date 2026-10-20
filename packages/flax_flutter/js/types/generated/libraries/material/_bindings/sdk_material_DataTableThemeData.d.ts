import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DataTableThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/data_table_theme.dart::DataTableThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DataTableThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: DataTableThemeData;
    readonly decoration: upstream1.Decoration | null;
    readonly dataRowColor: upstream2.WidgetStateProperty<upstream3.Color | null> | null;
    readonly dataRowHeight: number | null;
    readonly dataRowMinHeight: number | null;
    readonly dataRowMaxHeight: number | null;
    readonly dataTextStyle: upstream4.TextStyle | null;
    readonly headingRowColor: upstream2.WidgetStateProperty<upstream3.Color | null> | null;
    readonly headingRowHeight: number | null;
    readonly headingTextStyle: upstream4.TextStyle | null;
    readonly horizontalMargin: number | null;
    readonly columnSpacing: number | null;
    readonly dividerThickness: number | null;
    readonly checkboxHorizontalMargin: number | null;
    readonly headingCellCursor: upstream2.WidgetStateProperty<upstream5.MouseCursor | null> | null;
    readonly dataRowCursor: upstream2.WidgetStateProperty<upstream5.MouseCursor | null> | null;
    readonly headingRowAlignment: upstream6.MainAxisAlignment | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        checkboxHorizontalMargin?: number | null | undefined;
        columnSpacing?: number | null | undefined;
        dataRowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        dataRowCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
        }> | null | undefined;
        dataRowHeight?: number | null | undefined;
        dataRowMaxHeight?: number | null | undefined;
        dataRowMinHeight?: number | null | undefined;
        dataTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        dividerThickness?: number | null | undefined;
        headingCellCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
        }> | null | undefined;
        headingRowAlignment?: upstream6.MainAxisAlignment | null | undefined;
        headingRowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        headingRowHeight?: number | null | undefined;
        headingTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        horizontalMargin?: number | null | undefined;
    }): DataTableThemeData;
}
export declare function _DataTableThemeDataFactory(options?: {
    decoration?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dataRowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    dataRowHeight?: number | null | undefined;
    dataRowMinHeight?: number | null | undefined;
    dataRowMaxHeight?: number | null | undefined;
    dataTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    headingRowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    headingRowHeight?: number | null | undefined;
    headingTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    horizontalMargin?: number | null | undefined;
    columnSpacing?: number | null | undefined;
    dividerThickness?: number | null | undefined;
    checkboxHorizontalMargin?: number | null | undefined;
    headingCellCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
    }> | null | undefined;
    dataRowCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
    }> | null | undefined;
    headingRowAlignment?: upstream6.MainAxisAlignment | null | undefined;
}): DataTableThemeData;
export interface _DataTableThemeDataNative extends DataTableThemeData {
    readonly [_flaxDartTypeValue]: _DataTableThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        dataRowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        dataRowHeight?: number | null | undefined;
        dataRowMinHeight?: number | null | undefined;
        dataRowMaxHeight?: number | null | undefined;
        dataTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        headingRowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        headingRowHeight?: number | null | undefined;
        headingTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        horizontalMargin?: number | null | undefined;
        columnSpacing?: number | null | undefined;
        dividerThickness?: number | null | undefined;
        checkboxHorizontalMargin?: number | null | undefined;
        headingCellCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
        }> | null | undefined;
        dataRowCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
        }> | null | undefined;
        headingRowAlignment?: upstream6.MainAxisAlignment | null | undefined;
    }): DataTableThemeData;
    get decoration(): upstream1.Decoration | null;
    get dataRowColor(): upstream2.WidgetStateProperty<upstream3.Color | null> | null;
    get dataRowHeight(): number | null;
    get dataRowMinHeight(): number | null;
    get dataRowMaxHeight(): number | null;
    get dataTextStyle(): upstream4.TextStyle | null;
    get headingRowColor(): upstream2.WidgetStateProperty<upstream3.Color | null> | null;
    get headingRowHeight(): number | null;
    get headingTextStyle(): upstream4.TextStyle | null;
    get horizontalMargin(): number | null;
    get columnSpacing(): number | null;
    get dividerThickness(): number | null;
    get checkboxHorizontalMargin(): number | null;
    get headingCellCursor(): upstream2.WidgetStateProperty<upstream5.MouseCursor | null> | null;
    get dataRowCursor(): upstream2.WidgetStateProperty<upstream5.MouseCursor | null> | null;
    get headingRowAlignment(): upstream6.MainAxisAlignment | null;
}
export declare abstract class _DataTableThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataTableThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DataTableThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DataTableThemeData", readonly [], false];
    constructor(options?: {
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        dataRowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        dataRowHeight?: number | null | undefined;
        dataRowMinHeight?: number | null | undefined;
        dataRowMaxHeight?: number | null | undefined;
        dataTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        headingRowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        headingRowHeight?: number | null | undefined;
        headingTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        horizontalMargin?: number | null | undefined;
        columnSpacing?: number | null | undefined;
        dividerThickness?: number | null | undefined;
        checkboxHorizontalMargin?: number | null | undefined;
        headingCellCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
        }> | null | undefined;
        dataRowCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
        }> | null | undefined;
        headingRowAlignment?: upstream6.MainAxisAlignment | null | undefined;
    });
}
export declare namespace _DataTableThemeDataFactory {
    function implement(args: [options?: {
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        dataRowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        dataRowHeight?: number | null | undefined;
        dataRowMinHeight?: number | null | undefined;
        dataRowMaxHeight?: number | null | undefined;
        dataTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        headingRowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        headingRowHeight?: number | null | undefined;
        headingTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        horizontalMargin?: number | null | undefined;
        columnSpacing?: number | null | undefined;
        dividerThickness?: number | null | undefined;
        checkboxHorizontalMargin?: number | null | undefined;
        headingCellCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
        }> | null | undefined;
        dataRowCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
        }> | null | undefined;
        headingRowAlignment?: upstream6.MainAxisAlignment | null | undefined;
    }], implementation: {}): DataTableThemeData;
}
declare const _DataTableThemeDataBinding: typeof _DataTableThemeDataFactory & (new (options?: {
    decoration?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dataRowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    dataRowHeight?: number | null | undefined;
    dataRowMinHeight?: number | null | undefined;
    dataRowMaxHeight?: number | null | undefined;
    dataTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    headingRowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    headingRowHeight?: number | null | undefined;
    headingTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    horizontalMargin?: number | null | undefined;
    columnSpacing?: number | null | undefined;
    dividerThickness?: number | null | undefined;
    checkboxHorizontalMargin?: number | null | undefined;
    headingCellCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
    }> | null | undefined;
    dataRowCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.MouseCursor | null];
    }> | null | undefined;
    headingRowAlignment?: upstream6.MainAxisAlignment | null | undefined;
}) => _DataTableThemeDataNative);
export declare namespace _DataTableThemeDataFactory {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/material/data_table_theme.dart::DataTableThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/material/data_table_theme.dart::DataTableThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, t: number): DataTableThemeData;
}
export declare const DataTableThemeData: typeof _DataTableThemeDataBinding & _FlaxInstanceType<DataTableThemeData> & _FlaxDartType<DataTableThemeData, readonly ["class", "flax.core/sdk_material#type:DataTableThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "decoration" | "dataRowColor" | "dataRowHeight" | "dataRowMinHeight" | "dataRowMaxHeight" | "dataTextStyle" | "headingRowColor" | "headingRowHeight" | "headingTextStyle" | "horizontalMargin" | "columnSpacing" | "dividerThickness" | "checkboxHorizontalMargin" | "headingCellCursor" | "dataRowCursor" | "headingRowAlignment" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/data_table_theme.dart::DataTableThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
