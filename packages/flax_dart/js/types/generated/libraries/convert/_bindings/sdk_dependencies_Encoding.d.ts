import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Encoding extends Readonly<{
    "__flaxBound:dart:convert::Encoding": readonly [];
}>, Readonly<{
    "__flaxBound:dart:convert::Codec": readonly [string, DartList<number>];
}> {
    readonly __Encoding: unique symbol;
    readonly [_flaxDartTypeValue]: Encoding;
    readonly name: string;
    decodeStream(byteStream: (upstream0.Stream<DartList<number>> | upstream0.Stream<DartListInput<number, number>>)): Promise<string>;
    encode(input: string): DartList<number>;
    decode(encoded: DartListInput<number, number>): string;
}
export declare namespace _EncodingFactory {
    function getByName(name: string | null): Encoding | null;
}
export declare const Encoding: typeof _EncodingFactory & _FlaxInstanceType<Encoding> & _FlaxDartType<Encoding, readonly ["class", "flax.core/sdk_dependencies#type:Encoding", readonly [], false]>;
