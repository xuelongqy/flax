import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ServicesServiceExtensions extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/service_extensions.dart::ServicesServiceExtensions">, Readonly<{
    "__flaxBound:package:flutter/src/services/service_extensions.dart::ServicesServiceExtensions": readonly [];
}> {
    readonly __ServicesServiceExtensions: unique symbol;
    readonly [_flaxDartTypeValue]: ServicesServiceExtensions;
    readonly name: string;
    readonly index: number;
}
export declare const ServicesServiceExtensions: Readonly<{
    profilePlatformChannels: ServicesServiceExtensions;
    evict: ServicesServiceExtensions;
    values: readonly ServicesServiceExtensions[];
} & _FlaxInstanceType<ServicesServiceExtensions> & _FlaxDartType<ServicesServiceExtensions, readonly ["class", "flax.core/sdk_services#type:ServicesServiceExtensions", readonly [], false]>>;
