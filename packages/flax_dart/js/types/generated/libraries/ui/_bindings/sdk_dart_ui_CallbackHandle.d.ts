import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CallbackHandle extends Readonly<{
    "__flaxBound:dart:ui::CallbackHandle": readonly [];
}> {
    readonly __CallbackHandle: unique symbol;
    readonly [_flaxDartTypeValue]: CallbackHandle;
}
export interface CallbackHandle {
    readonly [_flaxDartTypeValue]: CallbackHandle;
    toRawHandle(): number;
}
export declare abstract class CallbackHandle extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CallbackHandle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CallbackHandle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:CallbackHandle", readonly [], false];
    constructor(_handle: number);
}
export declare namespace CallbackHandle {
    function implement(args: [_handle: number], implementation: {}): CallbackHandle;
}
