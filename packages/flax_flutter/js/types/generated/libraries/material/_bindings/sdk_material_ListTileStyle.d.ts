import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListTileStyle extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/list_tile.dart::ListTileStyle">, Readonly<{
    "__flaxBound:package:flutter/src/material/list_tile.dart::ListTileStyle": readonly [];
}> {
    readonly __ListTileStyle: unique symbol;
    readonly [_flaxDartTypeValue]: ListTileStyle;
    readonly name: string;
    readonly index: number;
}
export declare const ListTileStyle: Readonly<{
    list: ListTileStyle;
    drawer: ListTileStyle;
    values: readonly ListTileStyle[];
} & _FlaxInstanceType<ListTileStyle> & _FlaxDartType<ListTileStyle, readonly ["class", "flax.core/sdk_material#type:ListTileStyle", readonly [], false]>>;
