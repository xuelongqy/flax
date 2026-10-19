import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import '@flax/dart/convert/_bindings/sdk_dependencies_Encoding';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AsciiCodec extends Omit<upstream0.Encoding, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:dart:convert::AsciiCodec": readonly [];
}>, Readonly<{
    "__flaxBound:dart:convert::Encoding": readonly [];
}>, Readonly<{
    "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
}> {
    readonly __AsciiCodec: unique symbol;
    readonly [_flaxDartTypeValue]: AsciiCodec;
    readonly name: string;
    decodeStream(byteStream: (upstream1.Stream<DartList<number>> | upstream1.Stream<DartListInput<number, number>>)): Promise<string>;
    encode(source: string): globalThis.Uint8Array;
    decode(bytes: DartListInput<number, number>, options?: {
        allowInvalid?: boolean | null | undefined;
    }): string;
}
export declare function _AsciiCodecFactory(options?: {
    allowInvalid?: boolean | undefined;
}): AsciiCodec;
export declare const AsciiCodec: typeof _AsciiCodecFactory & _FlaxInstanceType<AsciiCodec> & _FlaxDartType<AsciiCodec, readonly ["class", "flax.core/sdk_dependencies#type:AsciiCodec", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "decodeStream" | "encode" | "decode" | "__flaxBound:dart:convert::AsciiCodec" | "__flaxBound:dart:convert::Encoding" | "__flaxBound:dart:convert::Codec";
export {};
