import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TableCellVerticalAlignment extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/table.dart::TableCellVerticalAlignment">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableCellVerticalAlignment": readonly [];
}> {
    readonly __TableCellVerticalAlignment: unique symbol;
    readonly [_flaxDartTypeValue]: TableCellVerticalAlignment;
    readonly name: string;
    readonly index: number;
}
export declare const TableCellVerticalAlignment: Readonly<{
    top: TableCellVerticalAlignment;
    middle: TableCellVerticalAlignment;
    bottom: TableCellVerticalAlignment;
    baseline: TableCellVerticalAlignment;
    fill: TableCellVerticalAlignment;
    intrinsicHeight: TableCellVerticalAlignment;
    values: readonly TableCellVerticalAlignment[];
} & _FlaxInstanceType<TableCellVerticalAlignment> & _FlaxDartType<TableCellVerticalAlignment, readonly ["class", "flax.core/sdk_rendering#type:TableCellVerticalAlignment", readonly [], false]>>;
