import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StringCodec extends Omit<upstream0.MessageCodec<string>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::StringCodec": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [string];
}> {
    readonly __StringCodec: unique symbol;
    readonly [_flaxDartTypeValue]: StringCodec;
    encodeMessage(message: string | null): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): string | null;
}
export declare function _StringCodecFactory(): StringCodec;
export interface _StringCodecNative extends StringCodec {
    readonly [_flaxDartTypeValue]: _StringCodecNative;
    encodeMessage(message: string | null): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): string | null;
}
export declare abstract class _StringCodecNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StringCodec>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StringCodec;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:StringCodec", readonly [], false];
    constructor();
}
export declare namespace _StringCodecFactory {
    function implement(args: [], implementation: {}): StringCodec;
}
declare const _StringCodecBinding: typeof _StringCodecFactory & (new () => _StringCodecNative);
export declare const StringCodec: typeof _StringCodecBinding & _FlaxInstanceType<StringCodec> & _FlaxDartType<StringCodec, readonly ["class", "flax.core/sdk_services#type:StringCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::StringCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
export {};
