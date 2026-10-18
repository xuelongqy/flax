import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface JSONMessageCodec extends Omit<upstream0.MessageCodec<unknown | null>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMessageCodec": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
}> {
    readonly __JSONMessageCodec: unique symbol;
    readonly [_flaxDartTypeValue]: JSONMessageCodec;
}
export interface JSONMessageCodec {
    readonly [_flaxDartTypeValue]: JSONMessageCodec;
    encodeMessage(message: unknown | null): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): unknown | null;
}
export declare abstract class JSONMessageCodec extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<JSONMessageCodec>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: JSONMessageCodec;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:JSONMessageCodec", readonly [], false];
    constructor();
}
export declare namespace JSONMessageCodec {
    function implement(args: [], implementation: {}): JSONMessageCodec;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMessageCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
export {};
