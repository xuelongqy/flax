import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DataColumn extends Readonly<{
    "__flaxBound:package:flutter/src/material/data_table.dart::DataColumn": readonly [];
}> {
    readonly __DataColumn: unique symbol;
    readonly [_flaxDartTypeValue]: DataColumn;
    readonly label: Widget;
    readonly columnWidth: upstream0.TableColumnWidth | null;
    readonly tooltip: string | null;
    readonly numeric: boolean;
    readonly onSort: ((columnIndex: number, ascending: boolean) => void) | null;
    readonly mouseCursor: upstream1.WidgetStateProperty<upstream2.MouseCursor | null> | null;
    readonly headingRowAlignment: upstream3.MainAxisAlignment | null;
}
export declare function _DataColumnFactory(options: {
    label: Widget;
    columnWidth?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }> | null | undefined;
    tooltip?: string | null | undefined;
    numeric?: boolean | undefined;
    onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null];
    }> | null | undefined;
    headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined;
}): DataColumn;
export interface _DataColumnNative extends DataColumn {
    readonly [_flaxDartTypeValue]: _DataColumnNative;
    get label(): Widget;
    get columnWidth(): upstream0.TableColumnWidth | null;
    get tooltip(): string | null;
    get numeric(): boolean;
    get onSort(): ((columnIndex: number, ascending: boolean) => void) | null;
    get mouseCursor(): upstream1.WidgetStateProperty<upstream2.MouseCursor | null> | null;
    get headingRowAlignment(): upstream3.MainAxisAlignment | null;
}
export declare abstract class _DataColumnNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataColumn>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DataColumn;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DataColumn", readonly [], false];
    constructor(options: {
        label: Widget;
        columnWidth?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
        }> | null | undefined;
        tooltip?: string | null | undefined;
        numeric?: boolean | undefined;
        onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null];
        }> | null | undefined;
        headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined;
    });
}
export declare namespace _DataColumnFactory {
    function implement(args: [options: {
        label: Widget;
        columnWidth?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
        }> | null | undefined;
        tooltip?: string | null | undefined;
        numeric?: boolean | undefined;
        onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null];
        }> | null | undefined;
        headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined;
    }], implementation: {}): DataColumn;
}
declare const _DataColumnBinding: typeof _DataColumnFactory & (new (options: {
    label: Widget;
    columnWidth?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }> | null | undefined;
    tooltip?: string | null | undefined;
    numeric?: boolean | undefined;
    onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null];
    }> | null | undefined;
    headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined;
}) => _DataColumnNative);
export declare const DataColumn: typeof _DataColumnBinding & _FlaxInstanceType<DataColumn> & _FlaxDartType<DataColumn, readonly ["class", "flax.core/sdk_material#type:DataColumn", readonly [], false]>;
export {};
