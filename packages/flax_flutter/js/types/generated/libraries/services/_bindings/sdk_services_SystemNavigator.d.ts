import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import '@flax/dart/core/_bindings/flutter_Uri';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemNavigator extends Readonly<{
    "__flaxBound:package:flutter/src/services/system_navigator.dart::SystemNavigator": readonly [];
}> {
    readonly __SystemNavigator: unique symbol;
    readonly [_flaxDartTypeValue]: SystemNavigator;
}
export declare namespace _SystemNavigatorFactory {
    function setFrameworkHandlesBack(frameworkHandlesBack: boolean): Promise<void>;
}
export declare namespace _SystemNavigatorFactory {
    function pop(options?: {
        animated?: boolean | null | undefined;
    }): Promise<void>;
}
export declare namespace _SystemNavigatorFactory {
    function selectSingleEntryHistory(): Promise<void>;
}
export declare namespace _SystemNavigatorFactory {
    function selectMultiEntryHistory(): Promise<void>;
}
export declare namespace _SystemNavigatorFactory {
    function routeInformationUpdated(options?: {
        location?: string | null | undefined;
        replace?: boolean | undefined;
        state?: unknown | null | undefined;
        uri?: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null | undefined;
    }): Promise<void>;
}
export declare const SystemNavigator: typeof _SystemNavigatorFactory & _FlaxInstanceType<SystemNavigator> & _FlaxDartType<SystemNavigator, readonly ["class", "flax.core/sdk_services#type:SystemNavigator", readonly [], false]>;
