import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HitTestResponse extends Readonly<{
    "__flaxBound:dart:ui::HitTestResponse": readonly [];
}> {
    readonly __HitTestResponse: unique symbol;
    readonly [_flaxDartTypeValue]: HitTestResponse;
    readonly hasPlatformView: boolean;
}
export declare function _HitTestResponseFactory(options: {
    hasPlatformView: boolean;
}): HitTestResponse;
export interface _HitTestResponseNative extends HitTestResponse {
    readonly [_flaxDartTypeValue]: _HitTestResponseNative;
    get hasPlatformView(): boolean;
}
export declare abstract class _HitTestResponseNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestResponse>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HitTestResponse;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:HitTestResponse", readonly [], false];
    constructor(options: {
        hasPlatformView: boolean;
    });
}
export declare namespace _HitTestResponseFactory {
    function implement(args: [options: {
        hasPlatformView: boolean;
    }], implementation: {}): HitTestResponse;
}
declare const _HitTestResponseBinding: typeof _HitTestResponseFactory & (new (options: {
    hasPlatformView: boolean;
}) => _HitTestResponseNative);
export declare namespace _HitTestResponseFactory {
    const empty: HitTestResponse;
}
export declare const HitTestResponse: typeof _HitTestResponseBinding & _FlaxInstanceType<HitTestResponse> & _FlaxDartType<HitTestResponse, readonly ["class", "flax.core/sdk_dart_ui#type:HitTestResponse", readonly [], false]>;
export {};
