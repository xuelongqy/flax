import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseEntry';
import '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseEntry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LicenseRegistry extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseRegistry": readonly [];
}> {
    readonly __LicenseRegistry: unique symbol;
    readonly [_flaxDartTypeValue]: LicenseRegistry;
}
export declare namespace _LicenseRegistryFactory {
    const licenses: upstream0.Stream<upstream1.LicenseEntry>;
}
export declare namespace _LicenseRegistryFactory {
    function addLicense(collector: (() => (upstream0.Stream<upstream1.LicenseEntry> | upstream0.Stream<Readonly<{
        "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntry": readonly [];
    }>>))): void;
}
export declare const LicenseRegistry: typeof _LicenseRegistryFactory & _FlaxInstanceType<LicenseRegistry> & _FlaxDartType<LicenseRegistry, readonly ["class", "flax.core/sdk_foundation#type:LicenseRegistry", readonly [], false]>;
