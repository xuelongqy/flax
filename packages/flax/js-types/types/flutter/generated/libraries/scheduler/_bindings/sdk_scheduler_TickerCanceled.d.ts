import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TickerCanceled extends Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerCanceled": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Exception": readonly [];
}> {
    readonly __TickerCanceled: unique symbol;
    readonly [_flaxDartTypeValue]: TickerCanceled;
}
export interface TickerCanceled {
    readonly [_flaxDartTypeValue]: TickerCanceled;
    toString(): string;
    get ticker(): upstream0.Ticker | null;
}
export declare abstract class TickerCanceled extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerCanceled>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TickerCanceled;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_scheduler#type:TickerCanceled", readonly [], false];
    constructor(ticker?: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [];
    }> | null);
}
export declare namespace TickerCanceled {
    function implement(args: [ticker?: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [];
    }> | null], implementation: {}): TickerCanceled;
}
