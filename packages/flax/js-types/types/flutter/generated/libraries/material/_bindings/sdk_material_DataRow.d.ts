import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_DataCell';
import '@flax/flutter/material/_bindings/sdk_material_DataCell';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DataRow extends Readonly<{
    "__flaxBound:package:flutter/src/material/data_table.dart::DataRow": readonly [];
}> {
    readonly __DataRow: unique symbol;
    readonly [_flaxDartTypeValue]: DataRow;
    readonly key: upstream0.LocalKey | null;
    readonly onSelectChanged: ((value: boolean | null) => void) | null;
    readonly onLongPress: (() => void) | null;
    readonly onHover: ((value: boolean) => void) | null;
    readonly selected: boolean;
    readonly cells: DartList<upstream4.DataCell>;
    readonly color: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    readonly mouseCursor: upstream1.WidgetStateProperty<upstream3.MouseCursor | null> | null;
}
export declare function _DataRowFactory(options: {
    key?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) | null | undefined;
    selected?: boolean | undefined;
    onSelectChanged?: ((value: boolean | null) => void) | null | undefined;
    onLongPress?: (() => void) | null | undefined;
    onHover?: ((value: boolean) => void) | null | undefined;
    color?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null];
    }> | null | undefined;
    cells: DartListInput<upstream4.DataCell, Readonly<{
        "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [];
    }>>;
}): DataRow;
export declare namespace _DataRowFactory {
    function byIndex(options: {
        index?: number | null | undefined;
        selected?: boolean | undefined;
        onSelectChanged?: ((value: boolean | null) => void) | null | undefined;
        onLongPress?: (() => void) | null | undefined;
        onHover?: ((value: boolean) => void) | null | undefined;
        color?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null];
        }> | null | undefined;
        cells: DartListInput<upstream4.DataCell, Readonly<{
            "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [];
        }>>;
    }): DataRow;
}
export interface _DataRowNative extends DataRow {
    readonly [_flaxDartTypeValue]: _DataRowNative;
    readonly [_flaxDartConstructors]?: {
        "": (options: {
            key?: (Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }>) | null | undefined;
            selected?: boolean | undefined;
            onSelectChanged?: ((value: boolean | null) => void) | null | undefined;
            onLongPress?: (() => void) | null | undefined;
            onHover?: ((value: boolean) => void) | null | undefined;
            color?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
            }> | null | undefined;
            mouseCursor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null];
            }> | null | undefined;
            cells: DartListInput<upstream4.DataCell, Readonly<{
                "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [];
            }>>;
        }) => void;
        "byIndex": (options: {
            index?: number | null | undefined;
            selected?: boolean | undefined;
            onSelectChanged?: ((value: boolean | null) => void) | null | undefined;
            onLongPress?: (() => void) | null | undefined;
            onHover?: ((value: boolean) => void) | null | undefined;
            color?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
            }> | null | undefined;
            mouseCursor?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null];
            }> | null | undefined;
            cells: DartListInput<upstream4.DataCell, Readonly<{
                "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [];
            }>>;
        }) => void;
    };
    get key(): upstream0.LocalKey | null;
    get onSelectChanged(): ((value: boolean | null) => void) | null;
    get onLongPress(): (() => void) | null;
    get onHover(): ((value: boolean) => void) | null;
    get selected(): boolean;
    get cells(): DartList<upstream4.DataCell>;
    get color(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    get mouseCursor(): upstream1.WidgetStateProperty<upstream3.MouseCursor | null> | null;
}
export declare abstract class _DataRowNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataRow>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DataRow;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DataRow", readonly [], false];
    constructor(options: {
        key?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>) | null | undefined;
        selected?: boolean | undefined;
        onSelectChanged?: ((value: boolean | null) => void) | null | undefined;
        onLongPress?: (() => void) | null | undefined;
        onHover?: ((value: boolean) => void) | null | undefined;
        color?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null];
        }> | null | undefined;
        cells: DartListInput<upstream4.DataCell, Readonly<{
            "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [];
        }>>;
    });
    constructor(call: _FlaxProxySuper<_DataRowNative>);
}
export declare namespace _DataRowFactory {
    function implement(args: [options: {
        key?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>) | null | undefined;
        selected?: boolean | undefined;
        onSelectChanged?: ((value: boolean | null) => void) | null | undefined;
        onLongPress?: (() => void) | null | undefined;
        onHover?: ((value: boolean) => void) | null | undefined;
        color?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null];
        }> | null | undefined;
        cells: DartListInput<upstream4.DataCell, Readonly<{
            "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [];
        }>>;
    }], implementation: {}): DataRow;
}
declare const _DataRowBinding: typeof _DataRowFactory & (new (options: {
    key?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) | null | undefined;
    selected?: boolean | undefined;
    onSelectChanged?: ((value: boolean | null) => void) | null | undefined;
    onLongPress?: (() => void) | null | undefined;
    onHover?: ((value: boolean) => void) | null | undefined;
    color?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null];
    }> | null | undefined;
    cells: DartListInput<upstream4.DataCell, Readonly<{
        "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [];
    }>>;
}) => _DataRowNative) & (new (call: _FlaxProxySuper<_DataRowNative>) => _DataRowNative);
export declare const DataRow: typeof _DataRowBinding & _FlaxInstanceType<DataRow> & _FlaxDartType<DataRow, readonly ["class", "flax.core/sdk_material#type:DataRow", readonly [], false]>;
export {};
