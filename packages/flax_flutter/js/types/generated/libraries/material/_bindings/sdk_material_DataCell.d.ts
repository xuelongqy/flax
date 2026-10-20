import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DataCell extends Readonly<{
    "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [];
}> {
    readonly __DataCell: unique symbol;
    readonly [_flaxDartTypeValue]: DataCell;
    readonly child: Widget;
    readonly placeholder: boolean;
    readonly showEditIcon: boolean;
    readonly onTap: (() => void) | null;
    readonly onDoubleTap: (() => void) | null;
    readonly onLongPress: (() => void) | null;
    readonly onTapDown: ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    readonly onTapCancel: (() => void) | null;
}
export declare function _DataCellFactory(child: Widget, options?: {
    placeholder?: boolean | undefined;
    showEditIcon?: boolean | undefined;
    onTap?: (() => void) | null | undefined;
    onLongPress?: (() => void) | null | undefined;
    onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined;
    onDoubleTap?: (() => void) | null | undefined;
    onTapCancel?: (() => void) | null | undefined;
}): DataCell;
export interface _DataCellNative extends DataCell {
    readonly [_flaxDartTypeValue]: _DataCellNative;
    get child(): Widget;
    get placeholder(): boolean;
    get showEditIcon(): boolean;
    get onTap(): (() => void) | null;
    get onDoubleTap(): (() => void) | null;
    get onLongPress(): (() => void) | null;
    get onTapDown(): ((details: Readonly<{
        "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => void) | null;
    get onTapCancel(): (() => void) | null;
}
export declare abstract class _DataCellNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataCell>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DataCell;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DataCell", readonly [], false];
    constructor(child: Widget, options?: {
        placeholder?: boolean | undefined;
        showEditIcon?: boolean | undefined;
        onTap?: (() => void) | null | undefined;
        onLongPress?: (() => void) | null | undefined;
        onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined;
        onDoubleTap?: (() => void) | null | undefined;
        onTapCancel?: (() => void) | null | undefined;
    });
}
export declare namespace _DataCellFactory {
    function implement(args: [child: Widget, options?: {
        placeholder?: boolean | undefined;
        showEditIcon?: boolean | undefined;
        onTap?: (() => void) | null | undefined;
        onLongPress?: (() => void) | null | undefined;
        onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined;
        onDoubleTap?: (() => void) | null | undefined;
        onTapCancel?: (() => void) | null | undefined;
    }], implementation: {}): DataCell;
}
declare const _DataCellBinding: typeof _DataCellFactory & (new (child: Widget, options?: {
    placeholder?: boolean | undefined;
    showEditIcon?: boolean | undefined;
    onTap?: (() => void) | null | undefined;
    onLongPress?: (() => void) | null | undefined;
    onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined;
    onDoubleTap?: (() => void) | null | undefined;
    onTapCancel?: (() => void) | null | undefined;
}) => _DataCellNative);
export declare namespace _DataCellFactory {
    const empty: DataCell;
}
export declare const DataCell: typeof _DataCellBinding & _FlaxInstanceType<DataCell> & _FlaxDartType<DataCell, readonly ["class", "flax.core/sdk_material#type:DataCell", readonly [], false]>;
export {};
