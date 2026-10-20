import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ApplicationSwitcherDescription extends Readonly<{
    "__flaxBound:package:flutter/src/services/system_chrome.dart::ApplicationSwitcherDescription": readonly [];
}> {
    readonly __ApplicationSwitcherDescription: unique symbol;
    readonly [_flaxDartTypeValue]: ApplicationSwitcherDescription;
    readonly label: string | null;
    readonly primaryColor: number | null;
}
export declare function _ApplicationSwitcherDescriptionFactory(options?: {
    label?: string | null | undefined;
    primaryColor?: number | null | undefined;
}): ApplicationSwitcherDescription;
export interface _ApplicationSwitcherDescriptionNative extends ApplicationSwitcherDescription {
    readonly [_flaxDartTypeValue]: _ApplicationSwitcherDescriptionNative;
    get label(): string | null;
    get primaryColor(): number | null;
}
export declare abstract class _ApplicationSwitcherDescriptionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ApplicationSwitcherDescription>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ApplicationSwitcherDescription;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ApplicationSwitcherDescription", readonly [], false];
    constructor(options?: {
        label?: string | null | undefined;
        primaryColor?: number | null | undefined;
    });
}
export declare namespace _ApplicationSwitcherDescriptionFactory {
    function implement(args: [options?: {
        label?: string | null | undefined;
        primaryColor?: number | null | undefined;
    }], implementation: {}): ApplicationSwitcherDescription;
}
declare const _ApplicationSwitcherDescriptionBinding: typeof _ApplicationSwitcherDescriptionFactory & (new (options?: {
    label?: string | null | undefined;
    primaryColor?: number | null | undefined;
}) => _ApplicationSwitcherDescriptionNative);
export declare const ApplicationSwitcherDescription: typeof _ApplicationSwitcherDescriptionBinding & _FlaxInstanceType<ApplicationSwitcherDescription> & _FlaxDartType<ApplicationSwitcherDescription, readonly ["class", "flax.core/sdk_services#type:ApplicationSwitcherDescription", readonly [], false]>;
export {};
