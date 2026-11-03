import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AssetSource extends Omit<upstream0.Source, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers/src/source.dart::AssetSource": readonly [];
}>, Readonly<{
    "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
}> {
    readonly __AssetSource: unique symbol;
    readonly [_flaxDartTypeValue]: AssetSource;
    readonly mimeType: string | null;
    readonly path: string;
    setOnPlayer(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>): Promise<void>;
    toString(): string;
}
export declare function _AssetSourceFactory(path: string, options?: {
    mimeType?: string | null | undefined;
}): AssetSource;
export interface _AssetSourceNative extends AssetSource {
    readonly [_flaxDartTypeValue]: _AssetSourceNative;
    setOnPlayer(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>): Promise<void>;
    toString(): string;
    get path(): string;
    get mimeType(): string | null;
}
export declare abstract class _AssetSourceNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AssetSource>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AssetSource;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AssetSource", readonly [], false];
    constructor(path: string, options?: {
        mimeType?: string | null | undefined;
    });
}
export declare namespace _AssetSourceFactory {
    function implement(args: [path: string, options?: {
        mimeType?: string | null | undefined;
    }], implementation: {}): AssetSource;
}
declare const _AssetSourceBinding: typeof _AssetSourceFactory & (new (path: string, options?: {
    mimeType?: string | null | undefined;
}) => _AssetSourceNative);
export declare const AssetSource: typeof _AssetSourceBinding & _FlaxInstanceType<AssetSource> & _FlaxDartType<AssetSource, readonly ["class", "flax.audio/audio#type:AssetSource", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mimeType" | "path" | "setOnPlayer" | "toString" | "__flaxBound:package:audioplayers/src/source.dart::AssetSource" | "__flaxBound:package:audioplayers/src/source.dart::Source";
export {};
