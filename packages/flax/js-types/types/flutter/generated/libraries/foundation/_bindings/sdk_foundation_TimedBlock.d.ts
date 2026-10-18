import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TimedBlock extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/timeline.dart::TimedBlock": readonly [];
}> {
    readonly __TimedBlock: unique symbol;
    readonly [_flaxDartTypeValue]: TimedBlock;
    readonly name: string;
    readonly start: number;
    readonly end: number;
    readonly duration: number;
    toString(): string;
}
export declare function _TimedBlockFactory(options: {
    name: string;
    start: number;
    end: number;
}): TimedBlock;
export declare const TimedBlock: typeof _TimedBlockFactory & _FlaxInstanceType<TimedBlock> & _FlaxDartType<TimedBlock, readonly ["class", "flax.core/sdk_foundation#type:TimedBlock", readonly [], false]>;
