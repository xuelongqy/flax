import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DisplayCornerRadii extends Readonly<{
    "__flaxBound:dart:ui::DisplayCornerRadii": readonly [];
}> {
    readonly __DisplayCornerRadii: unique symbol;
    readonly [_flaxDartTypeValue]: DisplayCornerRadii;
}
export interface DisplayCornerRadii {
    readonly [_flaxDartTypeValue]: DisplayCornerRadii;
    toString(): string;
    get topLeft(): number;
    get topRight(): number;
    get bottomRight(): number;
    get bottomLeft(): number;
}
export declare abstract class DisplayCornerRadii extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DisplayCornerRadii>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DisplayCornerRadii;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:DisplayCornerRadii", readonly [], false];
    constructor(options: {
        topLeft: number;
        topRight: number;
        bottomRight: number;
        bottomLeft: number;
    });
}
export declare namespace DisplayCornerRadii {
    function implement(args: [options: {
        topLeft: number;
        topRight: number;
        bottomRight: number;
        bottomLeft: number;
    }], implementation: {}): DisplayCornerRadii;
}
