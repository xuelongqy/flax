import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Endian';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WriteBuffer extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/serialization.dart::WriteBuffer": readonly [];
}> {
    readonly __WriteBuffer: unique symbol;
    readonly [_flaxDartTypeValue]: WriteBuffer;
    putUint8(byte: number): void;
    putUint16(value: number, options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): void;
    putUint32(value: number, options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): void;
    putInt32(value: number, options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): void;
    putInt64(value: number, options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): void;
    putFloat64(value: number, options?: {
        endian?: Readonly<{
            "__flaxBound:dart:typed_data::Endian": readonly [];
        }> | null | undefined;
    }): void;
    putUint8List(list: globalThis.Uint8Array): void;
    putInt32List(list: globalThis.Int32Array): void;
    putInt64List(list: globalThis.BigInt64Array): void;
    putFloat32List(list: globalThis.Float32Array): void;
    putFloat64List(list: globalThis.Float64Array): void;
    done(): globalThis.DataView;
}
export declare function _WriteBufferFactory(options?: {
    startCapacity?: number | undefined;
}): WriteBuffer;
export declare const WriteBuffer: typeof _WriteBufferFactory & _FlaxInstanceType<WriteBuffer> & _FlaxDartType<WriteBuffer, readonly ["class", "flax.core/sdk_foundation#type:WriteBuffer", readonly [], false]>;
