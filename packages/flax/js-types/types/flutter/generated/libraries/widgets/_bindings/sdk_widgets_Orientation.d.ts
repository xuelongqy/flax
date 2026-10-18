import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Orientation extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/media_query.dart::Orientation">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/media_query.dart::Orientation": readonly [];
}> {
    readonly __Orientation: unique symbol;
    readonly [_flaxDartTypeValue]: Orientation;
    readonly name: string;
    readonly index: number;
}
export declare const Orientation: Readonly<{
    portrait: Orientation;
    landscape: Orientation;
    values: readonly Orientation[];
} & _FlaxInstanceType<Orientation> & _FlaxDartType<Orientation, readonly ["class", "flax.core/sdk_widgets#type:Orientation", readonly [], false]>>;
