import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TickerModeData extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerModeData": readonly [];
}> {
    readonly __TickerModeData: unique symbol;
    readonly [_flaxDartTypeValue]: TickerModeData;
}
export interface TickerModeData {
    readonly [_flaxDartTypeValue]: TickerModeData;
    get enabled(): boolean;
    get forceFrames(): boolean;
}
export declare abstract class TickerModeData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TickerModeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TickerModeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TickerModeData", readonly [], false];
    constructor(options: {
        enabled: boolean;
        forceFrames: boolean;
    });
}
export declare namespace TickerModeData {
    function implement(args: [options: {
        enabled: boolean;
        forceFrames: boolean;
    }], implementation: {}): TickerModeData;
}
export declare namespace TickerModeData {
    const fallback: TickerModeData;
}
