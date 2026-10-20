import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Locale extends Readonly<{
    "__flaxBound:dart:ui::Locale": readonly [];
}> {
    readonly __Locale: unique symbol;
    readonly [_flaxDartTypeValue]: Locale;
    readonly languageCode: string;
    readonly scriptCode: string | null;
    readonly countryCode: string | null;
    toString(): string;
    toLanguageTag(): string;
}
export declare function _LocaleFactory(_languageCode: string, _countryCode?: string | null): Locale;
export declare namespace _LocaleFactory {
    function fromSubtags(options?: {
        languageCode?: string | undefined;
        scriptCode?: string | null | undefined;
        countryCode?: string | null | undefined;
    }): Locale;
}
export interface _LocaleNative extends Locale {
    readonly [_flaxDartTypeValue]: _LocaleNative;
    readonly [_flaxDartConstructors]?: {
        "": (_languageCode: string, _countryCode?: string | null) => void;
        "fromSubtags": (options?: {
            languageCode?: string | undefined;
            scriptCode?: string | null | undefined;
            countryCode?: string | null | undefined;
        }) => void;
    };
    toString(): string;
    toLanguageTag(): string;
    get languageCode(): string;
    get scriptCode(): string | null;
    get countryCode(): string | null;
}
export declare abstract class _LocaleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Locale>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Locale;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:Locale", readonly [], false];
    constructor(_languageCode: string, _countryCode?: string | null);
    constructor(call: _FlaxProxySuper<_LocaleNative>);
}
export declare namespace _LocaleFactory {
    function implement(args: [_languageCode: string, _countryCode?: string | null], implementation: {}): Locale;
}
declare const _LocaleBinding: typeof _LocaleFactory & (new (_languageCode: string, _countryCode?: string | null) => _LocaleNative) & (new (call: _FlaxProxySuper<_LocaleNative>) => _LocaleNative);
export declare const Locale: typeof _LocaleBinding & _FlaxInstanceType<Locale> & _FlaxDartType<Locale, readonly ["class", "flax.core/sdk_dart_ui#type:Locale", readonly [], false]>;
export {};
