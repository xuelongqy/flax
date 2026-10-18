import { type FlaxInstanceType as _FlaxInstanceType, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetStatesConstraint extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
}> {
    readonly __WidgetStatesConstraint: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStatesConstraint;
    isSatisfiedBy(states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>): boolean;
    operatorBitAnd(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>): WidgetStatesConstraint;
    operatorBitOr(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>): WidgetStatesConstraint;
    operatorBitNot(): WidgetStatesConstraint;
}
export declare const WidgetStatesConstraint: object & _FlaxInstanceType<WidgetStatesConstraint> & _FlaxDartType<WidgetStatesConstraint, readonly ["class", "flax.core/sdk_widgets#type:WidgetStatesConstraint", readonly [], false]>;
