import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LiveText extends Readonly<{
    "__flaxBound:package:flutter/src/services/live_text.dart::LiveText": readonly [];
}> {
    readonly __LiveText: unique symbol;
    readonly [_flaxDartTypeValue]: LiveText;
}
export declare namespace _LiveTextFactory {
    function isLiveTextInputAvailable(): Promise<boolean>;
}
export declare namespace _LiveTextFactory {
    function startLiveTextInput(): Promise<void>;
}
export declare const LiveText: typeof _LiveTextFactory & _FlaxInstanceType<LiveText> & _FlaxDartType<LiveText, readonly ["class", "flax.core/sdk_services#type:LiveText", readonly [], false]>;
