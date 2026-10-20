import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface JSONMessageCodec extends Omit<upstream0.MessageCodec<unknown | null>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMessageCodec": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
}> {
    readonly __JSONMessageCodec: unique symbol;
    readonly [_flaxDartTypeValue]: JSONMessageCodec;
    encodeMessage(message: unknown | null): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): unknown | null;
}
export declare function _JSONMessageCodecFactory(): JSONMessageCodec;
export interface _JSONMessageCodecNative extends JSONMessageCodec {
    readonly [_flaxDartTypeValue]: _JSONMessageCodecNative;
    encodeMessage(message: unknown | null): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): unknown | null;
}
export declare abstract class _JSONMessageCodecNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<JSONMessageCodec>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: JSONMessageCodec;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:JSONMessageCodec", readonly [], false];
    constructor();
}
export declare namespace _JSONMessageCodecFactory {
    function implement(args: [], implementation: {}): JSONMessageCodec;
}
declare const _JSONMessageCodecBinding: typeof _JSONMessageCodecFactory & (new () => _JSONMessageCodecNative);
export declare const JSONMessageCodec: typeof _JSONMessageCodecBinding & _FlaxInstanceType<JSONMessageCodec> & _FlaxDartType<JSONMessageCodec, readonly ["class", "flax.core/sdk_services#type:JSONMessageCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMessageCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
export {};
