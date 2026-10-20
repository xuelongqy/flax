import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseEntry';
import '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseEntry';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseParagraph';
import '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseParagraph';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LicenseEntryWithLineBreaks extends Omit<upstream0.LicenseEntry, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntryWithLineBreaks": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntry": readonly [];
}> {
    readonly __LicenseEntryWithLineBreaks: unique symbol;
    readonly [_flaxDartTypeValue]: LicenseEntryWithLineBreaks;
    readonly packages: DartList<string>;
    readonly paragraphs: DartIterable<upstream1.LicenseParagraph>;
    readonly text: string;
}
export declare function _LicenseEntryWithLineBreaksFactory(packages: DartListInput<string, string>, text: string): LicenseEntryWithLineBreaks;
export interface _LicenseEntryWithLineBreaksNative extends LicenseEntryWithLineBreaks {
    readonly [_flaxDartTypeValue]: _LicenseEntryWithLineBreaksNative;
    get packages(): DartList<string>;
    get text(): string;
    get paragraphs(): DartIterable<upstream1.LicenseParagraph>;
}
export declare abstract class _LicenseEntryWithLineBreaksNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LicenseEntryWithLineBreaks>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LicenseEntryWithLineBreaks;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:LicenseEntryWithLineBreaks", readonly [], false];
    constructor(packages: DartListInput<string, string>, text: string);
}
export declare namespace _LicenseEntryWithLineBreaksFactory {
    function implement(args: [packages: DartListInput<string, string>, text: string], implementation: {}): LicenseEntryWithLineBreaks;
}
declare const _LicenseEntryWithLineBreaksBinding: typeof _LicenseEntryWithLineBreaksFactory & (new (packages: DartListInput<string, string>, text: string) => _LicenseEntryWithLineBreaksNative);
export declare const LicenseEntryWithLineBreaks: typeof _LicenseEntryWithLineBreaksBinding & _FlaxInstanceType<LicenseEntryWithLineBreaks> & _FlaxDartType<LicenseEntryWithLineBreaks, readonly ["class", "flax.core/sdk_foundation#type:LicenseEntryWithLineBreaks", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "packages" | "paragraphs" | "text" | "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntryWithLineBreaks" | "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntry";
export {};
