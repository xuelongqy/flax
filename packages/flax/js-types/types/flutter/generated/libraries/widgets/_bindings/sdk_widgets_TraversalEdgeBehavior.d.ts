import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TraversalEdgeBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::TraversalEdgeBehavior">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::TraversalEdgeBehavior": readonly [];
}> {
    readonly __TraversalEdgeBehavior: unique symbol;
    readonly [_flaxDartTypeValue]: TraversalEdgeBehavior;
    readonly name: string;
    readonly index: number;
}
export declare const TraversalEdgeBehavior: Readonly<{
    closedLoop: TraversalEdgeBehavior;
    leaveFlutterView: TraversalEdgeBehavior;
    parentScope: TraversalEdgeBehavior;
    stop: TraversalEdgeBehavior;
    values: readonly TraversalEdgeBehavior[];
} & _FlaxInstanceType<TraversalEdgeBehavior> & _FlaxDartType<TraversalEdgeBehavior, readonly ["class", "flax.core/sdk_widgets#type:TraversalEdgeBehavior", readonly [], false]>>;
