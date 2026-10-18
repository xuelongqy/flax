import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MaskFilter extends Readonly<{
    "__flaxBound:dart:ui::MaskFilter": readonly [];
}> {
    readonly __MaskFilter: unique symbol;
    readonly [_flaxDartTypeValue]: MaskFilter;
}
export interface MaskFilter {
    readonly [_flaxDartTypeValue]: MaskFilter;
    toString(): string;
}
export declare abstract class MaskFilter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaskFilter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaskFilter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:MaskFilter", readonly [], false];
    constructor(_style: upstream0.BlurStyle, _sigma: number);
}
export declare namespace MaskFilter {
    function implement(args: [_style: upstream0.BlurStyle, _sigma: number], implementation: {}): MaskFilter;
}
