import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/foundation/_bindings/sdk_foundation_WriteBuffer';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ReadBuffer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StandardMessageCodec extends Omit<upstream0.MessageCodec<unknown | null>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
}> {
    readonly __StandardMessageCodec: unique symbol;
    readonly [_flaxDartTypeValue]: StandardMessageCodec;
    encodeMessage(message: unknown | null): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): unknown | null;
    writeValue(buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [];
    }>, value: unknown | null): void;
    readValue(buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [];
    }>): unknown | null;
    readValueOfType(type: number, buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [];
    }>): unknown | null;
    writeSize(buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [];
    }>, value: number): void;
    readSize(buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [];
    }>): number;
}
export declare function _StandardMessageCodecFactory(): StandardMessageCodec;
export interface _StandardMessageCodecNative extends StandardMessageCodec {
    readonly [_flaxDartTypeValue]: _StandardMessageCodecNative;
    encodeMessage(message: unknown | null): globalThis.DataView | null;
    decodeMessage(message: globalThis.DataView | null): unknown | null;
    writeValue(buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [];
    }>, value: unknown | null): void;
    readValue(buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [];
    }>): unknown | null;
    readValueOfType(type: number, buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [];
    }>): unknown | null;
    writeSize(buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [];
    }>, value: number): void;
    readSize(buffer: Readonly<{
        "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [];
    }>): number;
}
export declare abstract class _StandardMessageCodecNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StandardMessageCodec>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StandardMessageCodec;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:StandardMessageCodec", readonly [], false];
    constructor();
}
export declare namespace _StandardMessageCodecFactory {
    function implement(args: [], implementation: {}): StandardMessageCodec;
}
declare const _StandardMessageCodecBinding: typeof _StandardMessageCodecFactory & (new () => _StandardMessageCodecNative);
export declare const StandardMessageCodec: typeof _StandardMessageCodecBinding & _FlaxInstanceType<StandardMessageCodec> & _FlaxDartType<StandardMessageCodec, readonly ["class", "flax.core/sdk_services#type:StandardMessageCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "encodeMessage" | "decodeMessage" | "writeValue" | "readValue" | "readValueOfType" | "writeSize" | "readSize" | "__flaxBound:package:flutter/src/services/message_codecs.dart::StandardMessageCodec" | "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec";
export {};
