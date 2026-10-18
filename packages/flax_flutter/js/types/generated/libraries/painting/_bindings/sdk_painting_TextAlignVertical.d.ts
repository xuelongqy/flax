import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextAlignVertical extends Readonly<{
    "__flaxBound:package:flutter/src/painting/alignment.dart::TextAlignVertical": readonly [];
}> {
    readonly __TextAlignVertical: unique symbol;
    readonly [_flaxDartTypeValue]: TextAlignVertical;
}
export interface TextAlignVertical {
    readonly [_flaxDartTypeValue]: TextAlignVertical;
    toString(): string;
    get y(): number;
}
export declare abstract class TextAlignVertical extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextAlignVertical>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextAlignVertical;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextAlignVertical", readonly [], false];
    constructor(options: {
        y: number;
    });
}
export declare namespace TextAlignVertical {
    function implement(args: [options: {
        y: number;
    }], implementation: {}): TextAlignVertical;
}
export declare namespace TextAlignVertical {
    const top: TextAlignVertical;
}
export declare namespace TextAlignVertical {
    const center: TextAlignVertical;
}
export declare namespace TextAlignVertical {
    const bottom: TextAlignVertical;
}
