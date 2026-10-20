import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TickerModeData extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerModeData": readonly [];
}> {
    readonly __TickerModeData: unique symbol;
    readonly [_flaxDartTypeValue]: TickerModeData;
    readonly enabled: boolean;
    readonly forceFrames: boolean;
}
export declare function _TickerModeDataFactory(options: {
    enabled: boolean;
    forceFrames: boolean;
}): TickerModeData;
export interface _TickerModeDataNative extends TickerModeData {
    readonly [_flaxDartTypeValue]: _TickerModeDataNative;
    get enabled(): boolean;
    get forceFrames(): boolean;
}
export declare abstract class _TickerModeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerModeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TickerModeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TickerModeData", readonly [], false];
    constructor(options: {
        enabled: boolean;
        forceFrames: boolean;
    });
}
export declare namespace _TickerModeDataFactory {
    function implement(args: [options: {
        enabled: boolean;
        forceFrames: boolean;
    }], implementation: {}): TickerModeData;
}
declare const _TickerModeDataBinding: typeof _TickerModeDataFactory & (new (options: {
    enabled: boolean;
    forceFrames: boolean;
}) => _TickerModeDataNative);
export declare namespace _TickerModeDataFactory {
    const fallback: TickerModeData;
}
export declare const TickerModeData: typeof _TickerModeDataBinding & _FlaxInstanceType<TickerModeData> & _FlaxDartType<TickerModeData, readonly ["class", "flax.core/sdk_widgets#type:TickerModeData", readonly [], false]>;
export {};
