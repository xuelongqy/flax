import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Scribe extends Readonly<{
    "__flaxBound:package:flutter/src/services/scribe.dart::Scribe": readonly [];
}> {
    readonly __Scribe: unique symbol;
    readonly [_flaxDartTypeValue]: Scribe;
}
export declare namespace _ScribeFactory {
    function isFeatureAvailable(): Promise<boolean>;
}
export declare namespace _ScribeFactory {
    function isStylusHandwritingAvailable(): Promise<boolean>;
}
export declare namespace _ScribeFactory {
    function startStylusHandwriting(): Promise<void>;
}
export declare const Scribe: typeof _ScribeFactory & _FlaxInstanceType<Scribe> & _FlaxDartType<Scribe, readonly ["class", "flax.core/sdk_services#type:Scribe", readonly [], false]>;
