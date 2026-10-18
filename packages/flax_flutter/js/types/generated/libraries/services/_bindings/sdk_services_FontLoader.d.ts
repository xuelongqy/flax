import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface FontLoader extends Readonly<{
    "__flaxBound:package:flutter/src/services/font_loader.dart::FontLoader": readonly [];
}> {
    readonly __FontLoader: unique symbol;
    readonly [_flaxDartTypeValue]: FontLoader;
}
export interface FontLoader {
    readonly [_flaxDartTypeValue]: FontLoader;
    addFont(bytes: Promise<globalThis.DataView>): void;
    load(): Promise<void>;
    get family(): string;
}
export declare abstract class FontLoader extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FontLoader>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FontLoader;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:FontLoader", readonly [], false];
    constructor(family: string);
}
export declare namespace FontLoader {
    function implement(args: [family: string], implementation: {}): FontLoader;
}
