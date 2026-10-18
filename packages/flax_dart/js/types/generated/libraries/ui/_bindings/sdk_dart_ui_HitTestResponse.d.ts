import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface HitTestResponse extends Readonly<{
    "__flaxBound:dart:ui::HitTestResponse": readonly [];
}> {
    readonly __HitTestResponse: unique symbol;
    readonly [_flaxDartTypeValue]: HitTestResponse;
}
export interface HitTestResponse {
    readonly [_flaxDartTypeValue]: HitTestResponse;
    get hasPlatformView(): boolean;
}
export declare abstract class HitTestResponse extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestResponse>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HitTestResponse;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:HitTestResponse", readonly [], false];
    constructor(options: {
        hasPlatformView: boolean;
    });
}
export declare namespace HitTestResponse {
    function implement(args: [options: {
        hasPlatformView: boolean;
    }], implementation: {}): HitTestResponse;
}
export declare namespace HitTestResponse {
    const empty: HitTestResponse;
}
