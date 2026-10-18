import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_DataRow';
import '@flax/flutter/material/_bindings/sdk_material_DataRow';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DataTableSource extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/material/data_table_source.dart::DataTableSource": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __DataTableSource: unique symbol;
    readonly [_flaxDartTypeValue]: DataTableSource;
}
export interface DataTableSource {
    readonly [_flaxDartTypeValue]: DataTableSource;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get hasListeners(): boolean;
}
export declare abstract class DataTableSource extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataTableSource>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DataTableSource;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DataTableSource", readonly [], false];
    constructor();
    abstract getRow(index: number): upstream2.DataRow | null;
    abstract get rowCount(): number;
    abstract get isRowCountApproximate(): boolean;
    abstract get selectedRowCount(): number;
}
export declare namespace DataTableSource {
    function implement(args: [], implementation: {
        getRow: ((index: number) => Readonly<{
            "__flaxBound:package:flutter/src/material/data_table.dart::DataRow": readonly [];
        }> | null);
        get rowCount(): number;
        get isRowCountApproximate(): boolean;
        get selectedRowCount(): number;
    }): DataTableSource;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "rowCount" | "isRowCountApproximate" | "selectedRowCount" | "addListener" | "removeListener" | "dispose" | "getRow" | "__flaxBound:package:flutter/src/material/data_table_source.dart::DataTableSource" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
