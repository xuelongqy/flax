import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FontLoader extends Readonly<{
    "__flaxBound:package:flutter/src/services/font_loader.dart::FontLoader": readonly [];
}> {
    readonly __FontLoader: unique symbol;
    readonly [_flaxDartTypeValue]: FontLoader;
    readonly family: string;
    addFont(bytes: Promise<globalThis.DataView>): void;
    load(): Promise<void>;
}
export declare function _FontLoaderFactory(family: string): FontLoader;
export interface _FontLoaderNative extends FontLoader {
    readonly [_flaxDartTypeValue]: _FontLoaderNative;
    addFont(bytes: Promise<globalThis.DataView>): void;
    load(): Promise<void>;
    get family(): string;
}
export declare abstract class _FontLoaderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontLoader>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FontLoader;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:FontLoader", readonly [], false];
    constructor(family: string);
}
export declare namespace _FontLoaderFactory {
    function implement(args: [family: string], implementation: {}): FontLoader;
}
declare const _FontLoaderBinding: typeof _FontLoaderFactory & (new (family: string) => _FontLoaderNative);
export declare const FontLoader: typeof _FontLoaderBinding & _FlaxInstanceType<FontLoader> & _FlaxDartType<FontLoader, readonly ["class", "flax.core/sdk_services#type:FontLoader", readonly [], false]>;
export {};
