import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DartPluginRegistrant extends Readonly<{
    "__flaxBound:dart:ui::DartPluginRegistrant": readonly [];
}> {
    readonly __DartPluginRegistrant: unique symbol;
    readonly [_flaxDartTypeValue]: DartPluginRegistrant;
}
export declare namespace _DartPluginRegistrantFactory {
    function ensureInitialized(): void;
}
export declare const DartPluginRegistrant: typeof _DartPluginRegistrantFactory & _FlaxInstanceType<DartPluginRegistrant> & _FlaxDartType<DartPluginRegistrant, readonly ["class", "flax.core/sdk_dart_ui#type:DartPluginRegistrant", readonly [], false]>;
