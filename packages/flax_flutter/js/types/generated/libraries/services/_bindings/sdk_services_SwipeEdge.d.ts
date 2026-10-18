import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SwipeEdge extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/predictive_back_event.dart::SwipeEdge">, Readonly<{
    "__flaxBound:package:flutter/src/services/predictive_back_event.dart::SwipeEdge": readonly [];
}> {
    readonly __SwipeEdge: unique symbol;
    readonly [_flaxDartTypeValue]: SwipeEdge;
    readonly name: string;
    readonly index: number;
}
export declare const SwipeEdge: Readonly<{
    left: SwipeEdge;
    right: SwipeEdge;
    values: readonly SwipeEdge[];
} & _FlaxInstanceType<SwipeEdge> & _FlaxDartType<SwipeEdge, readonly ["class", "flax.core/sdk_services#type:SwipeEdge", readonly [], false]>>;
