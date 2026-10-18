import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface StringCodec extends Omit<upstream0.MessageCodec<string>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::StringCodec": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [string];
}> {
    readonly __StringCodec: unique symbol;
    readonly [_flaxDartTypeValue]: StringCodec;
}
export interface StringCodec {
    readonly [_flaxDartTypeValue]: StringCodec;
    encodeMessage(message: string | null): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): string | null;
}
export declare abstract class StringCodec extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StringCodec>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StringCodec;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:StringCodec", readonly [], false];
    constructor();
}
export declare namespace StringCodec {
    function implement(args: [], implementation: {}): StringCodec;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::StringCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
export {};
