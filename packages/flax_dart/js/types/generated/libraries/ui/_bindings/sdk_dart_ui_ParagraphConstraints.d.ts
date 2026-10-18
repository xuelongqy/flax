import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ParagraphConstraints extends Readonly<{
    "__flaxBound:dart:ui::ParagraphConstraints": readonly [];
}> {
    readonly __ParagraphConstraints: unique symbol;
    readonly [_flaxDartTypeValue]: ParagraphConstraints;
}
export interface ParagraphConstraints {
    readonly [_flaxDartTypeValue]: ParagraphConstraints;
    toString(): string;
    get width(): number;
}
export declare abstract class ParagraphConstraints extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParagraphConstraints>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ParagraphConstraints;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphConstraints", readonly [], false];
    constructor(options: {
        width: number;
    });
}
export declare namespace ParagraphConstraints {
    function implement(args: [options: {
        width: number;
    }], implementation: {}): ParagraphConstraints;
}
