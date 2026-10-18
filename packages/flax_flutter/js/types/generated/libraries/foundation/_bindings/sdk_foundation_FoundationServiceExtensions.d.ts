import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FoundationServiceExtensions extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/foundation/service_extensions.dart::FoundationServiceExtensions">, Readonly<{
    "__flaxBound:package:flutter/src/foundation/service_extensions.dart::FoundationServiceExtensions": readonly [];
}> {
    readonly __FoundationServiceExtensions: unique symbol;
    readonly [_flaxDartTypeValue]: FoundationServiceExtensions;
    readonly name: string;
    readonly index: number;
}
export declare const FoundationServiceExtensions: Readonly<{
    reassemble: FoundationServiceExtensions;
    exit: FoundationServiceExtensions;
    connectedVmServiceUri: FoundationServiceExtensions;
    activeDevToolsServerAddress: FoundationServiceExtensions;
    platformOverride: FoundationServiceExtensions;
    brightnessOverride: FoundationServiceExtensions;
    values: readonly FoundationServiceExtensions[];
} & _FlaxInstanceType<FoundationServiceExtensions> & _FlaxDartType<FoundationServiceExtensions, readonly ["class", "flax.core/sdk_foundation#type:FoundationServiceExtensions", readonly [], false]>>;
