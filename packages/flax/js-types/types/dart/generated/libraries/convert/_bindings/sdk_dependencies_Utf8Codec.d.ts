import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Utf8Codec extends Omit<upstream0.Encoding, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:convert::Utf8Codec": readonly [];
}>, Readonly<{
    "__flaxBound:dart:convert::Encoding": readonly [];
}>, Readonly<{
    "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
}> {
    readonly __Utf8Codec: unique symbol;
    readonly [_flaxDartTypeValue]: Utf8Codec;
    readonly name: string;
    decodeStream(byteStream: (upstream1.Stream<DartList<number>> | upstream1.Stream<DartListInput<number, number>>)): Promise<string>;
    encode(string: string): globalThis.Uint8Array;
    decode(codeUnits: DartListInput<number, number>, options?: {
        allowMalformed?: boolean | null | undefined;
    }): string;
}
export declare function _Utf8CodecFactory(options?: {
    allowMalformed?: boolean | undefined;
}): Utf8Codec;
export declare const Utf8Codec: typeof _Utf8CodecFactory & _FlaxInstanceType<Utf8Codec> & _FlaxDartType<Utf8Codec, readonly ["class", "flax.core/sdk_dependencies#type:Utf8Codec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "decodeStream" | "encode" | "decode" | "__flaxBound:dart:convert::Utf8Codec" | "__flaxBound:dart:convert::Encoding" | "__flaxBound:dart:convert::Codec";
export {};
