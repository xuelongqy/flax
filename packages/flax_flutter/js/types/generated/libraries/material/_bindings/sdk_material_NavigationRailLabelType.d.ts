import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationRailLabelType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/navigation_rail.dart::NavigationRailLabelType">, Readonly<{
    "__flaxBound:package:flutter/src/material/navigation_rail.dart::NavigationRailLabelType": readonly [];
}> {
    readonly __NavigationRailLabelType: unique symbol;
    readonly [_flaxDartTypeValue]: NavigationRailLabelType;
    readonly name: string;
    readonly index: number;
}
export declare const NavigationRailLabelType: Readonly<{
    none: NavigationRailLabelType;
    selected: NavigationRailLabelType;
    all: NavigationRailLabelType;
    values: readonly NavigationRailLabelType[];
} & _FlaxInstanceType<NavigationRailLabelType> & _FlaxDartType<NavigationRailLabelType, readonly ["class", "flax.core/sdk_material#type:NavigationRailLabelType", readonly [], false]>>;
