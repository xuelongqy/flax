import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/material-ui/_bindings/material_DataColumn';
import '@flax/material-ui/_bindings/material_DataColumn';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream7 from '@flax/material-ui/_bindings/material_DataRow';
import '@flax/material-ui/_bindings/material_DataRow';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableBorder';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableBorder';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DataTable extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/data_table.dart::DataTable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DataTable: unique symbol;
    readonly [_flaxDartTypeValue]: DataTable;
    readonly columns: DartList<upstream2.DataColumn>;
    readonly sortColumnIndex: number | null;
    readonly sortAscending: boolean;
    readonly onSelectAll: ((value: boolean | null) => void) | null;
    readonly decoration: upstream3.Decoration | null;
    readonly dataRowColor: upstream4.WidgetStateProperty<upstream5.Color | null> | null;
    readonly dataRowHeight: number | null;
    readonly dataRowMinHeight: number | null;
    readonly dataRowMaxHeight: number | null;
    readonly dataTextStyle: upstream6.TextStyle | null;
    readonly headingRowColor: upstream4.WidgetStateProperty<upstream5.Color | null> | null;
    readonly headingRowHeight: number | null;
    readonly headingTextStyle: upstream6.TextStyle | null;
    readonly horizontalMargin: number | null;
    readonly columnSpacing: number | null;
    readonly showCheckboxColumn: boolean;
    readonly rows: DartList<upstream7.DataRow>;
    readonly dividerThickness: number | null;
    readonly showBottomBorder: boolean;
    readonly checkboxHorizontalMargin: number | null;
    readonly border: upstream8.TableBorder | null;
    readonly clipBehavior: upstream9.Clip;
    readonly key: upstream1.Key | null;
    build(context: upstream10.BuildContext): Widget;
    createElement(): upstream11.StatelessElement;
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
export declare function _DataTableFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    columns: DartListInput<upstream2.DataColumn, Readonly<{
        "__flaxBound:package:material_ui/src/data_table.dart::DataColumn": readonly [];
    }>>;
    sortColumnIndex?: number | null | undefined;
    sortAscending?: boolean | undefined;
    onSelectAll?: ((value: boolean | null) => void) | null | undefined;
    decoration?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    dataRowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Color | null];
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
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Color | null];
    }> | null | undefined;
    headingRowHeight?: number | null | undefined;
    headingTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    horizontalMargin?: number | null | undefined;
    columnSpacing?: number | null | undefined;
    showCheckboxColumn?: boolean | undefined;
    showBottomBorder?: boolean | undefined;
    dividerThickness?: number | null | undefined;
    rows: DartListInput<upstream7.DataRow, Readonly<{
        "__flaxBound:package:material_ui/src/data_table.dart::DataRow": readonly [];
    }>>;
    checkboxHorizontalMargin?: number | null | undefined;
    border?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table_border.dart::TableBorder": readonly [];
    }> | null | undefined;
    clipBehavior?: upstream9.Clip | undefined;
}): DataTable;
export declare const DataTable: typeof _DataTableFactory & _FlaxInstanceType<DataTable> & _FlaxDartType<DataTable, readonly ["class", "flax.material/material#type:DataTable", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "columns" | "sortColumnIndex" | "sortAscending" | "onSelectAll" | "decoration" | "dataRowColor" | "dataRowHeight" | "dataRowMinHeight" | "dataRowMaxHeight" | "dataTextStyle" | "headingRowColor" | "headingRowHeight" | "headingTextStyle" | "horizontalMargin" | "columnSpacing" | "showCheckboxColumn" | "rows" | "dividerThickness" | "showBottomBorder" | "checkboxHorizontalMargin" | "border" | "clipBehavior" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/data_table.dart::DataTable" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
