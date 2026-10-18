import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DocumentationIcon extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/annotations.dart::DocumentationIcon": readonly [];
}> {
    readonly __DocumentationIcon: unique symbol;
    readonly [_flaxDartTypeValue]: DocumentationIcon;
}
export interface DocumentationIcon {
    readonly [_flaxDartTypeValue]: DocumentationIcon;
    get url(): string;
}
export declare abstract class DocumentationIcon extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DocumentationIcon>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DocumentationIcon;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DocumentationIcon", readonly [], false];
    constructor(url: string);
}
export declare namespace DocumentationIcon {
    function implement(args: [url: string], implementation: {}): DocumentationIcon;
}
