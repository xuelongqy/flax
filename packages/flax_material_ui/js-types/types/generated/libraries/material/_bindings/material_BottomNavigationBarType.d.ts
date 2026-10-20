import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BottomNavigationBarType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/bottom_navigation_bar.dart::BottomNavigationBarType">, Readonly<{
    "__flaxBound:package:material_ui/src/bottom_navigation_bar.dart::BottomNavigationBarType": readonly [];
}> {
    readonly __BottomNavigationBarType: unique symbol;
    readonly [_flaxDartTypeValue]: BottomNavigationBarType;
    readonly name: string;
    readonly index: number;
}
export declare const BottomNavigationBarType: Readonly<{
    fixed: BottomNavigationBarType;
    shifting: BottomNavigationBarType;
    values: readonly BottomNavigationBarType[];
} & _FlaxInstanceType<BottomNavigationBarType> & _FlaxDartType<BottomNavigationBarType, readonly ["class", "flax.material/material#type:BottomNavigationBarType", readonly [], false]>>;
