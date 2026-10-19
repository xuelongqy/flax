import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Latin1Codec extends Omit<upstream0.Encoding, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:convert::Latin1Codec": readonly [];
}>, Readonly<{
    "__flaxBound:dart:convert::Encoding": readonly [];
}>, Readonly<{
    "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
}> {
    readonly __Latin1Codec: unique symbol;
    readonly [_flaxDartTypeValue]: Latin1Codec;
    readonly name: string;
    decodeStream(byteStream: (upstream1.Stream<DartList<number>> | upstream1.Stream<DartListInput<number, number>>)): Promise<string>;
    encode(source: string): globalThis.Uint8Array;
    decode(bytes: DartListInput<number, number>, options?: {
        allowInvalid?: boolean | null | undefined;
    }): string;
}
export declare function _Latin1CodecFactory(options?: {
    allowInvalid?: boolean | undefined;
}): Latin1Codec;
export declare const Latin1Codec: typeof _Latin1CodecFactory & _FlaxInstanceType<Latin1Codec> & _FlaxDartType<Latin1Codec, readonly ["class", "flax.core/sdk_dependencies#type:Latin1Codec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "decodeStream" | "encode" | "decode" | "__flaxBound:dart:convert::Latin1Codec" | "__flaxBound:dart:convert::Encoding" | "__flaxBound:dart:convert::Codec";
export {};
