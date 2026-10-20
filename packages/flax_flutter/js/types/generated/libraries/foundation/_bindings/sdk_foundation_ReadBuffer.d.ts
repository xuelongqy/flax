import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Endian';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ReadBuffer extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/serialization.dart::ReadBuffer": readonly [];
}> {
    readonly __ReadBuffer: unique symbol;
    readonly [_flaxDartTypeValue]: ReadBuffer;
    readonly data: globalThis.DataView;
    readonly hasRemaining: boolean;
    getUint8(): number;
    getUint16(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getUint32(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getInt32(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getInt64(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getFloat64(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getUint8List(length: number): globalThis.Uint8Array;
    getInt32List(length: number): globalThis.Int32Array;
    getInt64List(length: number): globalThis.BigInt64Array;
    getFloat32List(length: number): globalThis.Float32Array;
    getFloat64List(length: number): globalThis.Float64Array;
}
export declare function _ReadBufferFactory(data: globalThis.DataView): ReadBuffer;
export interface _ReadBufferNative extends ReadBuffer {
    readonly [_flaxDartTypeValue]: _ReadBufferNative;
    getUint8(): number;
    getUint16(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getUint32(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getInt32(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getInt64(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getFloat64(options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): number;
    getUint8List(length: number): globalThis.Uint8Array;
    getInt32List(length: number): globalThis.Int32Array;
    getInt64List(length: number): globalThis.BigInt64Array;
    getFloat32List(length: number): globalThis.Float32Array;
    getFloat64List(length: number): globalThis.Float64Array;
    get data(): globalThis.DataView;
    get hasRemaining(): boolean;
}
export declare abstract class _ReadBufferNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ReadBuffer>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ReadBuffer;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:ReadBuffer", readonly [], false];
    constructor(data: globalThis.DataView);
}
export declare namespace _ReadBufferFactory {
    function implement(args: [data: globalThis.DataView], implementation: {}): ReadBuffer;
}
declare const _ReadBufferBinding: typeof _ReadBufferFactory & (new (data: globalThis.DataView) => _ReadBufferNative);
export declare const ReadBuffer: typeof _ReadBufferBinding & _FlaxInstanceType<ReadBuffer> & _FlaxDartType<ReadBuffer, readonly ["class", "flax.core/sdk_foundation#type:ReadBuffer", readonly [], false]>;
export {};
