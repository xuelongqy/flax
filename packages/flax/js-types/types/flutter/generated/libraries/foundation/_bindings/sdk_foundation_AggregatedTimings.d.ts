import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_TimedBlock';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TimedBlock';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_AggregatedTimedBlock';
import '@flax/flutter/foundation/_bindings/sdk_foundation_AggregatedTimedBlock';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AggregatedTimings extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/timeline.dart::AggregatedTimings": readonly [];
}> {
    readonly __AggregatedTimings: unique symbol;
    readonly [_flaxDartTypeValue]: AggregatedTimings;
    readonly timedBlocks: DartList<upstream0.TimedBlock>;
    readonly aggregatedBlocks: DartList<upstream1.AggregatedTimedBlock>;
    getAggregated(name: string): upstream1.AggregatedTimedBlock;
}
export declare function _AggregatedTimingsFactory(timedBlocks: DartListInput<upstream0.TimedBlock, Readonly<{
    "__flaxBound:package:flutter/src/foundation/timeline.dart::TimedBlock": readonly [];
}>>): AggregatedTimings;
export declare const AggregatedTimings: typeof _AggregatedTimingsFactory & _FlaxInstanceType<AggregatedTimings> & _FlaxDartType<AggregatedTimings, readonly ["class", "flax.core/sdk_foundation#type:AggregatedTimings", readonly [], false]>;
