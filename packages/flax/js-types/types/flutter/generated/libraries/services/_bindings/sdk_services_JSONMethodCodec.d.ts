import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import '@flax/flutter/services/_bindings/sdk_services_MethodCodec';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface JSONMethodCodec extends Omit<upstream0.MethodCodec, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMethodCodec": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [];
}> {
    readonly __JSONMethodCodec: unique symbol;
    readonly [_flaxDartTypeValue]: JSONMethodCodec;
    encodeMethodCall(methodCall: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [];
    }>): globalThis.DataView;
    decodeMethodCall(methodCall: globalThis.DataView | null): upstream1.MethodCall;
    decodeEnvelope(envelope: globalThis.DataView): unknown | null;
    encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
    encodeErrorEnvelope(options: {
        code: string;
        details?: unknown | null | undefined;
        message?: string | null | undefined;
    }): globalThis.DataView;
}
export declare function _JSONMethodCodecFactory(): JSONMethodCodec;
export interface _JSONMethodCodecNative extends JSONMethodCodec {
    readonly [_flaxDartTypeValue]: _JSONMethodCodecNative;
    encodeMethodCall(methodCall: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [];
    }>): globalThis.DataView;
    decodeMethodCall(methodCall: globalThis.DataView | null): upstream1.MethodCall;
    decodeEnvelope(envelope: globalThis.DataView): unknown | null;
    encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
    encodeErrorEnvelope(options: {
        code: string;
        message?: string | null | undefined;
        details?: unknown | null | undefined;
    }): globalThis.DataView;
}
export declare abstract class _JSONMethodCodecNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<JSONMethodCodec>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: JSONMethodCodec;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:JSONMethodCodec", readonly [], false];
    constructor();
}
export declare namespace _JSONMethodCodecFactory {
    function implement(args: [], implementation: {}): JSONMethodCodec;
}
declare const _JSONMethodCodecBinding: typeof _JSONMethodCodecFactory & (new () => _JSONMethodCodecNative);
export declare const JSONMethodCodec: typeof _JSONMethodCodecBinding & _FlaxInstanceType<JSONMethodCodec> & _FlaxDartType<JSONMethodCodec, readonly ["class", "flax.core/sdk_services#type:JSONMethodCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMethodCall" | "decodeMethodCall" | "decodeEnvelope" | "encodeSuccessEnvelope" | "encodeErrorEnvelope" | "__flaxBound:package:flutter/src/services/message_codecs.dart::JSONMethodCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec";
export {};
