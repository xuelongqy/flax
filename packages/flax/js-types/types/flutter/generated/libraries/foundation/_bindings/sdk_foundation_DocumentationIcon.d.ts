import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DocumentationIcon extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/annotations.dart::DocumentationIcon": readonly [];
}> {
    readonly __DocumentationIcon: unique symbol;
    readonly [_flaxDartTypeValue]: DocumentationIcon;
    readonly url: string;
}
export declare function _DocumentationIconFactory(url: string): DocumentationIcon;
export interface _DocumentationIconNative extends DocumentationIcon {
    readonly [_flaxDartTypeValue]: _DocumentationIconNative;
    get url(): string;
}
export declare abstract class _DocumentationIconNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DocumentationIcon>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DocumentationIcon;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DocumentationIcon", readonly [], false];
    constructor(url: string);
}
export declare namespace _DocumentationIconFactory {
    function implement(args: [url: string], implementation: {}): DocumentationIcon;
}
declare const _DocumentationIconBinding: typeof _DocumentationIconFactory & (new (url: string) => _DocumentationIconNative);
export declare const DocumentationIcon: typeof _DocumentationIconBinding & _FlaxInstanceType<DocumentationIcon> & _FlaxDartType<DocumentationIcon, readonly ["class", "flax.core/sdk_foundation#type:DocumentationIcon", readonly [], false]>;
export {};
