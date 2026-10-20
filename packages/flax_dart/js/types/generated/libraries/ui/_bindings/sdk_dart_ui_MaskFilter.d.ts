import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlurStyle';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaskFilter extends Readonly<{
    "__flaxBound:dart:ui::MaskFilter": readonly [];
}> {
    readonly __MaskFilter: unique symbol;
    readonly [_flaxDartTypeValue]: MaskFilter;
    toString(): string;
}
export declare namespace _MaskFilterFactory {
    function blur(_style: upstream0.BlurStyle, _sigma: number): MaskFilter;
}
export interface _MaskFilterNative extends MaskFilter {
    readonly [_flaxDartTypeValue]: _MaskFilterNative;
    readonly [_flaxDartConstructors]?: {
        "blur": (_style: upstream0.BlurStyle, _sigma: number) => void;
    };
    toString(): string;
}
export declare abstract class _MaskFilterNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaskFilter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaskFilter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:MaskFilter", readonly [], false];
    constructor(_style: upstream0.BlurStyle, _sigma: number);
    constructor(call: _FlaxProxySuper<_MaskFilterNative>);
}
export declare namespace _MaskFilterFactory {
    function implement(args: [_style: upstream0.BlurStyle, _sigma: number], implementation: {}): MaskFilter;
}
declare const _MaskFilterBinding: typeof _MaskFilterFactory & (new (_style: upstream0.BlurStyle, _sigma: number) => _MaskFilterNative) & (new (call: _FlaxProxySuper<_MaskFilterNative>) => _MaskFilterNative);
export declare const MaskFilter: typeof _MaskFilterBinding & _FlaxInstanceType<MaskFilter> & _FlaxDartType<MaskFilter, readonly ["class", "flax.core/sdk_dart_ui#type:MaskFilter", readonly [], false]>;
export {};
