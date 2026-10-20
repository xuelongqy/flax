import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListTileTitleAlignment extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/list_tile.dart::ListTileTitleAlignment">, Readonly<{
    "__flaxBound:package:material_ui/src/list_tile.dart::ListTileTitleAlignment": readonly [];
}> {
    readonly __ListTileTitleAlignment: unique symbol;
    readonly [_flaxDartTypeValue]: ListTileTitleAlignment;
    readonly name: string;
    readonly index: number;
}
export declare const ListTileTitleAlignment: Readonly<{
    threeLine: ListTileTitleAlignment;
    titleHeight: ListTileTitleAlignment;
    top: ListTileTitleAlignment;
    center: ListTileTitleAlignment;
    bottom: ListTileTitleAlignment;
    values: readonly ListTileTitleAlignment[];
} & _FlaxInstanceType<ListTileTitleAlignment> & _FlaxDartType<ListTileTitleAlignment, readonly ["class", "flax.material/material#type:ListTileTitleAlignment", readonly [], false]>>;
