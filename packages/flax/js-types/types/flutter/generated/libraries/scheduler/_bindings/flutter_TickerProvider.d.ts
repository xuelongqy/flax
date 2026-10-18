import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TickerProvider extends Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
}> {
    readonly __TickerProvider: unique symbol;
    readonly [_flaxDartTypeValue]: TickerProvider;
    createTicker(onTick: ((elapsed: upstream1.Duration) => void)): upstream0.Ticker;
}
export declare const TickerProvider: object & _FlaxInstanceType<TickerProvider> & _FlaxDartType<TickerProvider, readonly ["class", "flax.core/flutter#type:TickerProvider", readonly [], false]>;
