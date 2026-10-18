import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_CallbackHandle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_CallbackHandle';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PluginUtilities extends Readonly<{
    "__flaxBound:dart:ui::PluginUtilities": readonly [];
}> {
    readonly __PluginUtilities: unique symbol;
    readonly [_flaxDartTypeValue]: PluginUtilities;
}
export declare namespace _PluginUtilitiesFactory {
    function getCallbackHandle(callback: _FlaxDartFunction): upstream0.CallbackHandle | null;
}
export declare const PluginUtilities: typeof _PluginUtilitiesFactory & _FlaxInstanceType<PluginUtilities> & _FlaxDartType<PluginUtilities, readonly ["class", "flax.core/sdk_dart_ui#type:PluginUtilities", readonly [], false]>;
