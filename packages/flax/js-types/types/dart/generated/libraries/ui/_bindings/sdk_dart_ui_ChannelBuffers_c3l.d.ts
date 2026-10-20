import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ChannelBuffers extends Readonly<{
    "__flaxBound:dart:ui::ChannelBuffers": readonly [];
}> {
    readonly __ChannelBuffers: unique symbol;
    readonly [_flaxDartTypeValue]: ChannelBuffers;
    push(name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)): void;
    setListener(name: string, callback: ((data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)) => void)): void;
    clearListener(name: string): void;
    sendChannelUpdate(name: string, options: {
        listening: boolean;
    }): void;
    drain(name: string, callback: ((data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)) => Promise<void>)): Promise<void>;
    handleMessage(data: globalThis.DataView): void;
    resize(name: string, newSize: number): void;
    allowOverflow(name: string, allowed: boolean): void;
}
export declare function _ChannelBuffersFactory(): ChannelBuffers;
export interface _ChannelBuffersNative extends ChannelBuffers {
    readonly [_flaxDartTypeValue]: _ChannelBuffersNative;
    push(name: string, data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)): void;
    setListener(name: string, callback: ((data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)) => void)): void;
    clearListener(name: string): void;
    sendChannelUpdate(name: string, options: {
        listening: boolean;
    }): void;
    drain(name: string, callback: ((data: globalThis.DataView | null, callback: ((data: globalThis.DataView | null) => void)) => Promise<void>)): Promise<void>;
    handleMessage(data: globalThis.DataView): void;
    resize(name: string, newSize: number): void;
    allowOverflow(name: string, allowed: boolean): void;
}
export declare abstract class _ChannelBuffersNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChannelBuffers>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ChannelBuffers;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ChannelBuffers", readonly [], false];
    constructor();
}
export declare namespace _ChannelBuffersFactory {
    function implement(args: [], implementation: {}): ChannelBuffers;
}
declare const _ChannelBuffersBinding: typeof _ChannelBuffersFactory & (new () => _ChannelBuffersNative);
export declare namespace _ChannelBuffersFactory {
    const kDefaultBufferSize: number;
}
export declare namespace _ChannelBuffersFactory {
    const kControlChannelName: string;
}
export declare const ChannelBuffers: typeof _ChannelBuffersBinding & _FlaxInstanceType<ChannelBuffers> & _FlaxDartType<ChannelBuffers, readonly ["class", "flax.core/sdk_dart_ui#type:ChannelBuffers", readonly [], false]>;
export {};
