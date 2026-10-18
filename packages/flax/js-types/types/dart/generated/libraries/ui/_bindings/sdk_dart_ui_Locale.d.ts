import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Locale extends Readonly<{
    "__flaxBound:dart:ui::Locale": readonly [];
}> {
    readonly __Locale: unique symbol;
    readonly [_flaxDartTypeValue]: Locale;
}
export interface Locale {
    readonly [_flaxDartTypeValue]: Locale;
    toString(): string;
    toLanguageTag(): string;
    get languageCode(): string;
    get scriptCode(): string | null;
    get countryCode(): string | null;
}
export declare abstract class Locale extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Locale>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Locale;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Locale", readonly [], false];
    constructor(_languageCode: string, _countryCode?: string | null);
}
export declare namespace Locale {
    function implement(args: [_languageCode: string, _countryCode?: string | null], implementation: {}): Locale;
}
