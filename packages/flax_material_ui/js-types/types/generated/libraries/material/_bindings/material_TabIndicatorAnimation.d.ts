import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TabIndicatorAnimation extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/tabs.dart::TabIndicatorAnimation">, Readonly<{
    "__flaxBound:package:material_ui/src/tabs.dart::TabIndicatorAnimation": readonly [];
}> {
    readonly __TabIndicatorAnimation: unique symbol;
    readonly [_flaxDartTypeValue]: TabIndicatorAnimation;
    readonly name: string;
    readonly index: number;
}
export declare const TabIndicatorAnimation: Readonly<{
    linear: TabIndicatorAnimation;
    elastic: TabIndicatorAnimation;
    values: readonly TabIndicatorAnimation[];
} & _FlaxInstanceType<TabIndicatorAnimation> & _FlaxDartType<TabIndicatorAnimation, readonly ["class", "flax.material/material#type:TabIndicatorAnimation", readonly [], false]>>;
