import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseParagraph';
import '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseParagraph';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LicenseEntry extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntry": readonly [];
}> {
    readonly __LicenseEntry: unique symbol;
    readonly [_flaxDartTypeValue]: LicenseEntry;
    readonly packages: DartIterable<string>;
    readonly paragraphs: DartIterable<upstream0.LicenseParagraph>;
}
export declare namespace _LicenseEntryFactory {
    function implement(args: [], implementation: {
        get packages(): DartIterableInput<string, string>;
        get paragraphs(): DartIterableInput<upstream0.LicenseParagraph, Readonly<{
            "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseParagraph": readonly [];
        }>>;
    }): LicenseEntry;
}
export declare const LicenseEntry: typeof _LicenseEntryFactory & _FlaxInstanceType<LicenseEntry> & _FlaxDartType<LicenseEntry, readonly ["class", "flax.core/sdk_foundation#type:LicenseEntry", readonly [], false]>;
