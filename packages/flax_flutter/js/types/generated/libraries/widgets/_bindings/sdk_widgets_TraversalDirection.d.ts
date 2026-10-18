import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TraversalDirection extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::TraversalDirection">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::TraversalDirection": readonly [];
}> {
    readonly __TraversalDirection: unique symbol;
    readonly [_flaxDartTypeValue]: TraversalDirection;
    readonly name: string;
    readonly index: number;
}
export declare const TraversalDirection: Readonly<{
    up: TraversalDirection;
    right: TraversalDirection;
    down: TraversalDirection;
    left: TraversalDirection;
    values: readonly TraversalDirection[];
} & _FlaxInstanceType<TraversalDirection> & _FlaxDartType<TraversalDirection, readonly ["class", "flax.core/sdk_widgets#type:TraversalDirection", readonly [], false]>>;
