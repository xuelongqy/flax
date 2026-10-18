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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DataColumn extends Readonly<{
    "__flaxBound:package:flutter/src/material/data_table.dart::DataColumn": readonly [];
}> {
    readonly __DataColumn: unique symbol;
    readonly [_flaxDartTypeValue]: DataColumn;
}
export interface DataColumn {
    readonly [_flaxDartTypeValue]: DataColumn;
    get label(): Widget;
    get columnWidth(): upstream0.TableColumnWidth | null;
    get tooltip(): string | null;
    get numeric(): boolean;
    get onSort(): ((columnIndex: number, ascending: boolean) => void) | null;
    get mouseCursor(): upstream1.WidgetStateProperty<upstream2.MouseCursor | null> | null;
    get headingRowAlignment(): upstream3.MainAxisAlignment | null;
}
export declare abstract class DataColumn extends _FlaxProxyBase {
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
export declare namespace DataColumn {
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
