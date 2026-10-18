import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ContentSensitivity extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/sensitive_content.dart::ContentSensitivity">, Readonly<{
    "__flaxBound:package:flutter/src/services/sensitive_content.dart::ContentSensitivity": readonly [];
}> {
    readonly __ContentSensitivity: unique symbol;
    readonly [_flaxDartTypeValue]: ContentSensitivity;
    readonly name: string;
    readonly index: number;
}
export declare const ContentSensitivity: Readonly<{
    autoSensitive: ContentSensitivity;
    sensitive: ContentSensitivity;
    notSensitive: ContentSensitivity;
    values: readonly ContentSensitivity[];
} & _FlaxInstanceType<ContentSensitivity> & _FlaxDartType<ContentSensitivity, readonly ["class", "flax.core/sdk_services#type:ContentSensitivity", readonly [], false]>>;
