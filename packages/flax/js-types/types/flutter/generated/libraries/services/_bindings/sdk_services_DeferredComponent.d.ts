import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DeferredComponent extends Readonly<{
    "__flaxBound:package:flutter/src/services/deferred_component.dart::DeferredComponent": readonly [];
}> {
    readonly __DeferredComponent: unique symbol;
    readonly [_flaxDartTypeValue]: DeferredComponent;
}
export declare namespace _DeferredComponentFactory {
    function installDeferredComponent(options: {
        componentName: string;
    }): Promise<void>;
}
export declare namespace _DeferredComponentFactory {
    function uninstallDeferredComponent(options: {
        componentName: string;
    }): Promise<void>;
}
export declare const DeferredComponent: typeof _DeferredComponentFactory & _FlaxInstanceType<DeferredComponent> & _FlaxDartType<DeferredComponent, readonly ["class", "flax.core/sdk_services#type:DeferredComponent", readonly [], false]>;
