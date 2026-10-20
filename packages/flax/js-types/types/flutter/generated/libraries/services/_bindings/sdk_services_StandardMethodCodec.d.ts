import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_StandardMessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_StandardMessageCodec';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StandardMethodCodec extends Omit<upstream0.MethodCodec, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMethodCodec": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [];
}> {
    readonly __StandardMethodCodec: unique symbol;
    readonly [_flaxDartTypeValue]: StandardMethodCodec;
    readonly messageCodec: upstream1.StandardMessageCodec;
    encodeMethodCall(methodCall: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [];
    }>): globalThis.DataView;
    decodeMethodCall(methodCall: globalThis.DataView | null): upstream2.MethodCall;
    decodeEnvelope(envelope: globalThis.DataView): unknown | null;
    encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
    encodeErrorEnvelope(options: {
        code: string;
        details?: unknown | null | undefined;
        message?: string | null | undefined;
    }): globalThis.DataView;
}
export declare function _StandardMethodCodecFactory(messageCodec?: Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
}>): StandardMethodCodec;
export interface _StandardMethodCodecNative extends StandardMethodCodec {
    readonly [_flaxDartTypeValue]: _StandardMethodCodecNative;
    encodeMethodCall(methodCall: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [];
    }>): globalThis.DataView;
    decodeMethodCall(methodCall: globalThis.DataView | null): upstream2.MethodCall;
    decodeEnvelope(envelope: globalThis.DataView): unknown | null;
    encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
    encodeErrorEnvelope(options: {
        code: string;
        message?: string | null | undefined;
        details?: unknown | null | undefined;
    }): globalThis.DataView;
    get messageCodec(): upstream1.StandardMessageCodec;
}
export declare abstract class _StandardMethodCodecNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StandardMethodCodec>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StandardMethodCodec;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:StandardMethodCodec", readonly [], false];
    constructor(messageCodec?: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
    }>);
}
export declare namespace _StandardMethodCodecFactory {
    function implement(args: [messageCodec?: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
    }>], implementation: {}): StandardMethodCodec;
}
declare const _StandardMethodCodecBinding: typeof _StandardMethodCodecFactory & (new (messageCodec?: Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
}>) => _StandardMethodCodecNative);
export declare const StandardMethodCodec: typeof _StandardMethodCodecBinding & _FlaxInstanceType<StandardMethodCodec> & _FlaxDartType<StandardMethodCodec, readonly ["class", "flax.core/sdk_services#type:StandardMethodCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "messageCodec" | "encodeMethodCall" | "decodeMethodCall" | "decodeEnvelope" | "encodeSuccessEnvelope" | "encodeErrorEnvelope" | "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMethodCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec";
export {};
