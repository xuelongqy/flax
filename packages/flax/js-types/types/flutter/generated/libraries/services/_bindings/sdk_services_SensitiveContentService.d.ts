import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import '@flax/flutter/services/_bindings/sdk_services_MethodChannel';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_ContentSensitivity';
import '@flax/flutter/services/_bindings/sdk_services_ContentSensitivity';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SensitiveContentService extends Readonly<{
    "__flaxBound:package:flutter/src/services/sensitive_content.dart::SensitiveContentService": readonly [];
}> {
    readonly __SensitiveContentService: unique symbol;
    readonly [_flaxDartTypeValue]: SensitiveContentService;
}
export interface SensitiveContentService {
    readonly [_flaxDartTypeValue]: SensitiveContentService;
    setContentSensitivity(contentSensitivity: upstream1.ContentSensitivity): Promise<void>;
    getContentSensitivity(): Promise<upstream1.ContentSensitivity>;
    isSupported(): Promise<boolean>;
    get sensitiveContentChannel(): upstream0.MethodChannel;
    set sensitiveContentChannel(value: Readonly<{
        "__flaxBound:package:flutter/src/services/platform_channel.dart::MethodChannel": readonly [];
    }>);
}
export declare abstract class SensitiveContentService extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SensitiveContentService>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SensitiveContentService;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:SensitiveContentService", readonly [], false];
    constructor();
}
export declare namespace SensitiveContentService {
    function implement(args: [], implementation: {}): SensitiveContentService;
}
