import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_SwipeEdge';
import '@flax/flutter/services/_bindings/sdk_services_SwipeEdge';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PredictiveBackEvent extends Readonly<{
    "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [];
}> {
    readonly __PredictiveBackEvent: unique symbol;
    readonly [_flaxDartTypeValue]: PredictiveBackEvent;
    readonly touchOffset: upstream0.Offset | null;
    readonly progress: number;
    readonly swipeEdge: upstream1.SwipeEdge;
    readonly isButtonEvent: boolean;
    toString(): string;
}
export declare namespace _PredictiveBackEventFactory {
    function fromMap(map: DartMapInput<string | null, unknown | null, string | null, unknown | null>): PredictiveBackEvent;
}
export declare const PredictiveBackEvent: typeof _PredictiveBackEventFactory & _FlaxInstanceType<PredictiveBackEvent> & _FlaxDartType<PredictiveBackEvent, readonly ["class", "flax.core/sdk_services#type:PredictiveBackEvent", readonly [], false]>;
