import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BytesSource extends Omit<upstream0.Source, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers/src/source.dart::BytesSource": readonly [];
}>, Readonly<{
    "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
}> {
    readonly __BytesSource: unique symbol;
    readonly [_flaxDartTypeValue]: BytesSource;
    readonly mimeType: string | null;
    readonly bytes: globalThis.Uint8Array;
    setOnPlayer(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>): Promise<void>;
    toString(): string;
}
export declare function _BytesSourceFactory(bytes: globalThis.Uint8Array, options?: {
    mimeType?: string | null | undefined;
}): BytesSource;
export interface _BytesSourceNative extends BytesSource {
    readonly [_flaxDartTypeValue]: _BytesSourceNative;
    setOnPlayer(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>): Promise<void>;
    toString(): string;
    get bytes(): globalThis.Uint8Array;
    get mimeType(): string | null;
}
export declare abstract class _BytesSourceNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BytesSource>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BytesSource;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:BytesSource", readonly [], false];
    constructor(bytes: globalThis.Uint8Array, options?: {
        mimeType?: string | null | undefined;
    });
}
export declare namespace _BytesSourceFactory {
    function implement(args: [bytes: globalThis.Uint8Array, options?: {
        mimeType?: string | null | undefined;
    }], implementation: {}): BytesSource;
}
declare const _BytesSourceBinding: typeof _BytesSourceFactory & (new (bytes: globalThis.Uint8Array, options?: {
    mimeType?: string | null | undefined;
}) => _BytesSourceNative);
export declare const BytesSource: typeof _BytesSourceBinding & _FlaxInstanceType<BytesSource> & _FlaxDartType<BytesSource, readonly ["class", "flax.audio/audio#type:BytesSource", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mimeType" | "bytes" | "setOnPlayer" | "toString" | "__flaxBound:package:audioplayers/src/source.dart::BytesSource" | "__flaxBound:package:audioplayers/src/source.dart::Source";
export {};
