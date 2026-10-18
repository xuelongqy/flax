import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TabAlignment extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/tabs.dart::TabAlignment">, Readonly<{
    "__flaxBound:package:flutter/src/material/tabs.dart::TabAlignment": readonly [];
}> {
    readonly __TabAlignment: unique symbol;
    readonly [_flaxDartTypeValue]: TabAlignment;
    readonly name: string;
    readonly index: number;
}
export declare const TabAlignment: Readonly<{
    start: TabAlignment;
    startOffset: TabAlignment;
    fill: TabAlignment;
    center: TabAlignment;
    values: readonly TabAlignment[];
} & _FlaxInstanceType<TabAlignment> & _FlaxDartType<TabAlignment, readonly ["class", "flax.core/sdk_material#type:TabAlignment", readonly [], false]>>;
