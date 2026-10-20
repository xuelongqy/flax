import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListTileControlAffinity extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/list_tile.dart::ListTileControlAffinity">, Readonly<{
    "__flaxBound:package:material_ui/src/list_tile.dart::ListTileControlAffinity": readonly [];
}> {
    readonly __ListTileControlAffinity: unique symbol;
    readonly [_flaxDartTypeValue]: ListTileControlAffinity;
    readonly name: string;
    readonly index: number;
}
export declare const ListTileControlAffinity: Readonly<{
    leading: ListTileControlAffinity;
    trailing: ListTileControlAffinity;
    platform: ListTileControlAffinity;
    values: readonly ListTileControlAffinity[];
} & _FlaxInstanceType<ListTileControlAffinity> & _FlaxDartType<ListTileControlAffinity, readonly ["class", "flax.material/material#type:ListTileControlAffinity", readonly [], false]>>;
