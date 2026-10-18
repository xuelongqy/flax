import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ApplicationSwitcherDescription extends Readonly<{
    "__flaxBound:package:flutter/src/services/system_chrome.dart::ApplicationSwitcherDescription": readonly [];
}> {
    readonly __ApplicationSwitcherDescription: unique symbol;
    readonly [_flaxDartTypeValue]: ApplicationSwitcherDescription;
}
export interface ApplicationSwitcherDescription {
    readonly [_flaxDartTypeValue]: ApplicationSwitcherDescription;
    get label(): string | null;
    get primaryColor(): number | null;
}
export declare abstract class ApplicationSwitcherDescription extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ApplicationSwitcherDescription>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ApplicationSwitcherDescription;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:ApplicationSwitcherDescription", readonly [], false];
    constructor(options?: {
        label?: string | null | undefined;
        primaryColor?: number | null | undefined;
    });
}
export declare namespace ApplicationSwitcherDescription {
    function implement(args: [options?: {
        label?: string | null | undefined;
        primaryColor?: number | null | undefined;
    }], implementation: {}): ApplicationSwitcherDescription;
}
