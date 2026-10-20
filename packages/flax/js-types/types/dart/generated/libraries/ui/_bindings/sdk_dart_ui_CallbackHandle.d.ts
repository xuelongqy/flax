import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CallbackHandle extends Readonly<{
    "__flaxBound:dart:ui::CallbackHandle": readonly [];
}> {
    readonly __CallbackHandle: unique symbol;
    readonly [_flaxDartTypeValue]: CallbackHandle;
    toRawHandle(): number;
}
export declare namespace _CallbackHandleFactory {
    function fromRawHandle(_handle: number): CallbackHandle;
}
export interface _CallbackHandleNative extends CallbackHandle {
    readonly [_flaxDartTypeValue]: _CallbackHandleNative;
    readonly [_flaxDartConstructors]?: {
        "fromRawHandle": (_handle: number) => void;
    };
    toRawHandle(): number;
}
export declare abstract class _CallbackHandleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CallbackHandle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CallbackHandle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:CallbackHandle", readonly [], false];
    constructor(_handle: number);
    constructor(call: _FlaxProxySuper<_CallbackHandleNative>);
}
export declare namespace _CallbackHandleFactory {
    function implement(args: [_handle: number], implementation: {}): CallbackHandle;
}
declare const _CallbackHandleBinding: typeof _CallbackHandleFactory & (new (_handle: number) => _CallbackHandleNative) & (new (call: _FlaxProxySuper<_CallbackHandleNative>) => _CallbackHandleNative);
export declare const CallbackHandle: typeof _CallbackHandleBinding & _FlaxInstanceType<CallbackHandle> & _FlaxDartType<CallbackHandle, readonly ["class", "flax.core/sdk_dart_ui#type:CallbackHandle", readonly [], false]>;
export {};
