import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BinaryCodec extends Omit<upstream0.MessageCodec<globalThis.DataView>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::BinaryCodec": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [globalThis.DataView];
}> {
    readonly __BinaryCodec: unique symbol;
    readonly [_flaxDartTypeValue]: BinaryCodec;
}
export interface BinaryCodec {
    readonly [_flaxDartTypeValue]: BinaryCodec;
    encodeMessage(message: globalThis.DataView | null): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): globalThis.DataView | null;
}
export declare abstract class BinaryCodec extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BinaryCodec>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BinaryCodec;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:BinaryCodec", readonly [], false];
    constructor();
}
export declare namespace BinaryCodec {
    function implement(args: [], implementation: {}): BinaryCodec;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "__flaxBound:package:flutter/src/services/message_codecs.dart::BinaryCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
export {};
