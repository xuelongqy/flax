import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextAffinity';
import '@flax/dart/ui/_bindings/flutter_TextAffinity';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextPosition extends Readonly<{
    "__flaxBound:dart:ui::TextPosition": readonly [];
}> {
    readonly __TextPosition: unique symbol;
    readonly [_flaxDartTypeValue]: TextPosition;
}
export interface TextPosition {
    readonly [_flaxDartTypeValue]: TextPosition;
    toString(): string;
    get offset(): number;
    get affinity(): upstream0.TextAffinity;
}
export declare abstract class TextPosition extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextPosition>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextPosition;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextPosition", readonly [], false];
    constructor(options: {
        offset: number;
        affinity?: upstream0.TextAffinity | undefined;
    });
}
export declare namespace TextPosition {
    function implement(args: [options: {
        offset: number;
        affinity?: upstream0.TextAffinity | undefined;
    }], implementation: {}): TextPosition;
}
