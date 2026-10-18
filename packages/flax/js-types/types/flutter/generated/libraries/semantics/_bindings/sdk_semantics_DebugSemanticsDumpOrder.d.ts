import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DebugSemanticsDumpOrder extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/semantics/semantics.dart::DebugSemanticsDumpOrder">, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::DebugSemanticsDumpOrder": readonly [];
}> {
    readonly __DebugSemanticsDumpOrder: unique symbol;
    readonly [_flaxDartTypeValue]: DebugSemanticsDumpOrder;
    readonly name: string;
    readonly index: number;
}
export declare const DebugSemanticsDumpOrder: Readonly<{
    inverseHitTest: DebugSemanticsDumpOrder;
    traversalOrder: DebugSemanticsDumpOrder;
    values: readonly DebugSemanticsDumpOrder[];
} & _FlaxInstanceType<DebugSemanticsDumpOrder> & _FlaxDartType<DebugSemanticsDumpOrder, readonly ["class", "flax.core/sdk_semantics#type:DebugSemanticsDumpOrder", readonly [], false]>>;
