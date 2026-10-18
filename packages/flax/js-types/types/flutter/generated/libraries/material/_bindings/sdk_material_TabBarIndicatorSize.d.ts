import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TabBarIndicatorSize extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/tabs.dart::TabBarIndicatorSize">, Readonly<{
    "__flaxBound:package:flutter/src/material/tabs.dart::TabBarIndicatorSize": readonly [];
}> {
    readonly __TabBarIndicatorSize: unique symbol;
    readonly [_flaxDartTypeValue]: TabBarIndicatorSize;
    readonly name: string;
    readonly index: number;
}
export declare const TabBarIndicatorSize: Readonly<{
    tab: TabBarIndicatorSize;
    label: TabBarIndicatorSize;
    values: readonly TabBarIndicatorSize[];
} & _FlaxInstanceType<TabBarIndicatorSize> & _FlaxDartType<TabBarIndicatorSize, readonly ["class", "flax.core/sdk_material#type:TabBarIndicatorSize", readonly [], false]>>;
