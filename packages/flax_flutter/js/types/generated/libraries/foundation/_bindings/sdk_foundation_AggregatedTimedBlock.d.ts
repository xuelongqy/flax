import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AggregatedTimedBlock extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/timeline.dart::AggregatedTimedBlock": readonly [];
}> {
    readonly __AggregatedTimedBlock: unique symbol;
    readonly [_flaxDartTypeValue]: AggregatedTimedBlock;
    readonly name: string;
    readonly duration: number;
    readonly count: number;
    toString(): string;
}
export declare function _AggregatedTimedBlockFactory(options: {
    name: string;
    duration: number;
    count: number;
}): AggregatedTimedBlock;
export declare const AggregatedTimedBlock: typeof _AggregatedTimedBlockFactory & _FlaxInstanceType<AggregatedTimedBlock> & _FlaxDartType<AggregatedTimedBlock, readonly ["class", "flax.core/sdk_foundation#type:AggregatedTimedBlock", readonly [], false]>;
