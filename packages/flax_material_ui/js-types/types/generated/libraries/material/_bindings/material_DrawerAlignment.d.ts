import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DrawerAlignment extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/drawer.dart::DrawerAlignment">, Readonly<{
    "__flaxBound:package:material_ui/src/drawer.dart::DrawerAlignment": readonly [];
}> {
    readonly __DrawerAlignment: unique symbol;
    readonly [_flaxDartTypeValue]: DrawerAlignment;
    readonly name: string;
    readonly index: number;
}
export declare const DrawerAlignment: Readonly<{
    start: DrawerAlignment;
    end: DrawerAlignment;
    values: readonly DrawerAlignment[];
} & _FlaxInstanceType<DrawerAlignment> & _FlaxDartType<DrawerAlignment, readonly ["class", "flax.material/material#type:DrawerAlignment", readonly [], false]>>;
