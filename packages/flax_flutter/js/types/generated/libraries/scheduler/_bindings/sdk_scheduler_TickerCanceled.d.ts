import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TickerCanceled extends Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerCanceled": readonly [];
}>, Readonly<{
    "__flaxBound:dart:core::Exception": readonly [];
}> {
    readonly __TickerCanceled: unique symbol;
    readonly [_flaxDartTypeValue]: TickerCanceled;
    readonly ticker: upstream0.Ticker | null;
    toString(): string;
}
export declare function _TickerCanceledFactory(ticker?: Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [];
}> | null): TickerCanceled;
export interface _TickerCanceledNative extends TickerCanceled {
    readonly [_flaxDartTypeValue]: _TickerCanceledNative;
    toString(): string;
    get ticker(): upstream0.Ticker | null;
}
export declare abstract class _TickerCanceledNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerCanceled>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TickerCanceled;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_scheduler#type:TickerCanceled", readonly [], false];
    constructor(ticker?: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [];
    }> | null);
}
export declare namespace _TickerCanceledFactory {
    function implement(args: [ticker?: Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [];
    }> | null], implementation: {}): TickerCanceled;
}
declare const _TickerCanceledBinding: typeof _TickerCanceledFactory & (new (ticker?: Readonly<{
    "__flaxBound:package:flutter/src/scheduler/ticker.dart::Ticker": readonly [];
}> | null) => _TickerCanceledNative);
export declare const TickerCanceled: typeof _TickerCanceledBinding & _FlaxInstanceType<TickerCanceled> & _FlaxDartType<TickerCanceled, readonly ["class", "flax.core/sdk_scheduler#type:TickerCanceled", readonly [], false]>;
export {};
