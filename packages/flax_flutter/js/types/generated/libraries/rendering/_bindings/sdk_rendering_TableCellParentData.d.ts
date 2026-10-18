import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableCellVerticalAlignment';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableCellVerticalAlignment';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TableCellParentData extends Omit<upstream0.BoxParentData, _flaxOwnMembers0>, Omit<upstream1.ParentData, _flaxOwnMembers0 | keyof upstream0.BoxParentData>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableCellParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}> {
    readonly __TableCellParentData: unique symbol;
    readonly [_flaxDartTypeValue]: TableCellParentData;
}
export interface TableCellParentData {
    readonly [_flaxDartTypeValue]: TableCellParentData;
    toString(): string;
    detach(): void;
    get verticalAlignment(): upstream3.TableCellVerticalAlignment | null;
    get x(): number | null;
    get y(): number | null;
    get offset(): upstream2.Offset;
    set verticalAlignment(value: upstream3.TableCellVerticalAlignment | null);
    set x(value: number | null);
    set y(value: number | null);
    set offset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
}
export declare abstract class TableCellParentData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TableCellParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TableCellParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TableCellParentData", readonly [], false];
    constructor();
}
export declare namespace TableCellParentData {
    function implement(args: [], implementation: {}): TableCellParentData;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "verticalAlignment" | "x" | "y" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/table.dart::TableCellParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
export {};
