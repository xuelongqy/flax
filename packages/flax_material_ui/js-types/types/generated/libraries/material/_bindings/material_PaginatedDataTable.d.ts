import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/material-ui/_bindings/material_DataColumn';
import '@flax/material-ui/_bindings/material_DataColumn';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/material-ui/_bindings/material_DataTableSource';
import '@flax/material-ui/_bindings/material_DataTableSource';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream8 from '@flax/material-ui/_bindings/material_PaginatedDataTableState';
import '@flax/material-ui/_bindings/material_PaginatedDataTableState';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PaginatedDataTable extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/paginated_data_table.dart::PaginatedDataTable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PaginatedDataTable: unique symbol;
    readonly [_flaxDartTypeValue]: PaginatedDataTable;
    readonly header: Widget | null;
    readonly actions: DartList<Widget> | null;
    readonly columns: DartList<upstream2.DataColumn>;
    readonly sortColumnIndex: number | null;
    readonly sortAscending: boolean;
    readonly onSelectAll: ((value: boolean | null) => void) | null;
    readonly dataRowHeight: number | null;
    readonly dataRowMinHeight: number | null;
    readonly dataRowMaxHeight: number | null;
    readonly headingRowHeight: number;
    readonly horizontalMargin: number;
    readonly columnSpacing: number;
    readonly showCheckboxColumn: boolean;
    readonly showFirstLastButtons: boolean;
    readonly initialFirstRowIndex: number | null;
    readonly dividerThickness: number | null;
    readonly onPageChanged: ((value: number) => void) | null;
    readonly rowsPerPage: number;
    readonly availableRowsPerPage: DartList<number>;
    readonly onRowsPerPageChanged: ((value: number | null) => void) | null;
    readonly source: upstream5.DataTableSource;
    readonly dragStartBehavior: upstream3.DragStartBehavior;
    readonly checkboxHorizontalMargin: number | null;
    readonly arrowHeadColor: upstream4.Color | null;
    readonly controller: upstream6.ScrollController | null;
    readonly primary: boolean | null;
    readonly headingRowColor: upstream7.WidgetStateProperty<upstream4.Color | null> | null;
    readonly showEmptyRows: boolean;
    readonly key: upstream1.Key | null;
    createState(): upstream8.PaginatedDataTableState;
    createElement(): upstream9.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
export declare function _PaginatedDataTableFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    header?: Widget | null | undefined;
    actions?: DartListInput<Widget, Widget> | null | undefined;
    columns: DartListInput<upstream2.DataColumn, Readonly<{
        "__flaxBound:package:material_ui/src/data_table.dart::DataColumn": readonly [];
    }>>;
    sortColumnIndex?: number | null | undefined;
    sortAscending?: boolean | undefined;
    onSelectAll?: ((value: boolean | null) => void) | null | undefined;
    dataRowHeight?: number | null | undefined;
    dataRowMinHeight?: number | null | undefined;
    dataRowMaxHeight?: number | null | undefined;
    headingRowHeight?: number | undefined;
    horizontalMargin?: number | undefined;
    columnSpacing?: number | undefined;
    showCheckboxColumn?: boolean | undefined;
    showFirstLastButtons?: boolean | undefined;
    initialFirstRowIndex?: number | null | undefined;
    onPageChanged?: ((value: number) => void) | null | undefined;
    rowsPerPage?: number | undefined;
    availableRowsPerPage?: DartListInput<number, number> | undefined;
    onRowsPerPageChanged?: ((value: number | null) => void) | null | undefined;
    dragStartBehavior?: upstream3.DragStartBehavior | undefined;
    arrowHeadColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    source: Readonly<{
        "__flaxBound:package:material_ui/src/data_table_source.dart::DataTableSource": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>;
    checkboxHorizontalMargin?: number | null | undefined;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    primary?: boolean | null | undefined;
    headingRowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.Color | null];
    }> | null | undefined;
    dividerThickness?: number | null | undefined;
    showEmptyRows?: boolean | undefined;
}): PaginatedDataTable;
export declare namespace _PaginatedDataTableFactory {
    const defaultRowsPerPage: number;
}
export declare const PaginatedDataTable: typeof _PaginatedDataTableFactory & _FlaxInstanceType<PaginatedDataTable> & _FlaxDartType<PaginatedDataTable, readonly ["class", "flax.material/material#type:PaginatedDataTable", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "header" | "actions" | "columns" | "sortColumnIndex" | "sortAscending" | "onSelectAll" | "dataRowHeight" | "dataRowMinHeight" | "dataRowMaxHeight" | "headingRowHeight" | "horizontalMargin" | "columnSpacing" | "showCheckboxColumn" | "showFirstLastButtons" | "initialFirstRowIndex" | "dividerThickness" | "onPageChanged" | "rowsPerPage" | "availableRowsPerPage" | "onRowsPerPageChanged" | "source" | "dragStartBehavior" | "checkboxHorizontalMargin" | "arrowHeadColor" | "controller" | "primary" | "headingRowColor" | "showEmptyRows" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/paginated_data_table.dart::PaginatedDataTable" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
