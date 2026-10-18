import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationDestinationLabelBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/navigation_bar.dart::NavigationDestinationLabelBehavior">, Readonly<{
    "__flaxBound:package:flutter/src/material/navigation_bar.dart::NavigationDestinationLabelBehavior": readonly [];
}> {
    readonly __NavigationDestinationLabelBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: NavigationDestinationLabelBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const NavigationDestinationLabelBehavior: Readonly<{
    alwaysShow: NavigationDestinationLabelBehavior;
    alwaysHide: NavigationDestinationLabelBehavior;
    onlyShowSelected: NavigationDestinationLabelBehavior;
    values: readonly NavigationDestinationLabelBehavior[];
} & _FlaxInstanceType<NavigationDestinationLabelBehavior> & _FlaxDartType<NavigationDestinationLabelBehavior, readonly ["class", "flax.core/sdk_material#type:NavigationDestinationLabelBehavior", readonly [], false]>>;
