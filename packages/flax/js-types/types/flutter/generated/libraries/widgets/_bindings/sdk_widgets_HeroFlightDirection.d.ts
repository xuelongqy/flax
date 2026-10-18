import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HeroFlightDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/heroes.dart::HeroFlightDirection">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/heroes.dart::HeroFlightDirection": readonly [];
}> {
    readonly __HeroFlightDirection: unique symbol;
    readonly [_flaxDartTypeValue]: HeroFlightDirection;
    readonly name: string;
    readonly index: number;
}
export declare const HeroFlightDirection: Readonly<{
    push: HeroFlightDirection;
    pop: HeroFlightDirection;
    values: readonly HeroFlightDirection[];
} & _FlaxInstanceType<HeroFlightDirection> & _FlaxDartType<HeroFlightDirection, readonly ["class", "flax.core/sdk_widgets#type:HeroFlightDirection", readonly [], false]>>;
