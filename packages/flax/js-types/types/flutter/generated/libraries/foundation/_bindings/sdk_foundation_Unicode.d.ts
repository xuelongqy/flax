import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Unicode extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/unicode.dart::Unicode": readonly [];
}> {
    readonly __Unicode: unique symbol;
    readonly [_flaxDartTypeValue]: Unicode;
}
declare const _UnicodeFactory: {
    readonly LRE: string;
    readonly RLE: string;
    readonly PDF: string;
    readonly LRO: string;
    readonly RLO: string;
    readonly LRI: string;
    readonly RLI: string;
    readonly FSI: string;
    readonly PDI: string;
    readonly LRM: string;
    readonly RLM: string;
    readonly ALM: string;
};
export declare const Unicode: typeof _UnicodeFactory & _FlaxInstanceType<Unicode> & _FlaxDartType<Unicode, readonly ["class", "flax.core/sdk_foundation#type:Unicode", readonly [], false]>;
export {};
