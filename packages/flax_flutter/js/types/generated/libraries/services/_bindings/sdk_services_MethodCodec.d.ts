import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import '@flax/flutter/services/_bindings/sdk_services_MethodCall';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MethodCodec extends Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCodec": readonly [];
}> {
    readonly __MethodCodec: unique symbol;
    readonly [_flaxDartTypeValue]: MethodCodec;
    encodeMethodCall(methodCall: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [];
    }>): globalThis.DataView;
    decodeMethodCall(methodCall: globalThis.DataView | null): upstream0.MethodCall;
    decodeEnvelope(envelope: globalThis.DataView): unknown | null;
    encodeSuccessEnvelope(result: unknown | null): globalThis.DataView;
    encodeErrorEnvelope(options: {
        code: string;
        details?: unknown | null | undefined;
        message?: string | null | undefined;
    }): globalThis.DataView;
}
export declare namespace _MethodCodecFactory {
    function implement(args: [], implementation: {
        encodeMethodCall: ((methodCall: upstream0.MethodCall) => globalThis.DataView);
        decodeMethodCall: ((methodCall: globalThis.DataView | null) => Readonly<{
            "__flaxBound:package:flutter/src/services/message_codec.dart::MethodCall": readonly [];
        }>);
        decodeEnvelope: ((envelope: globalThis.DataView) => unknown | null);
        encodeSuccessEnvelope: ((result: unknown | null) => globalThis.DataView);
        encodeErrorEnvelope: ((options: {
            code: string;
            message?: string | null | undefined;
            details?: unknown | null | undefined;
        }) => globalThis.DataView);
    }): MethodCodec;
}
export declare const MethodCodec: typeof _MethodCodecFactory & _FlaxInstanceType<MethodCodec> & _FlaxDartType<MethodCodec, readonly ["class", "flax.core/sdk_services#type:MethodCodec", readonly [], false]>;
