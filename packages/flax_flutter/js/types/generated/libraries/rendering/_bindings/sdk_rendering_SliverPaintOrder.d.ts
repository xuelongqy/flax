import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverPaintOrder extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/viewport.dart::SliverPaintOrder">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport.dart::SliverPaintOrder": readonly [];
}> {
    readonly __SliverPaintOrder: unique symbol;
    readonly [_flaxDartTypeValue]: SliverPaintOrder;
    readonly name: string;
    readonly index: number;
}
export declare const SliverPaintOrder: Readonly<{
    firstIsTop: SliverPaintOrder;
    lastIsTop: SliverPaintOrder;
    values: readonly SliverPaintOrder[];
} & _FlaxInstanceType<SliverPaintOrder> & _FlaxDartType<SliverPaintOrder, readonly ["class", "flax.core/sdk_rendering#type:SliverPaintOrder", readonly [], false]>>;
