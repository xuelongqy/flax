import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface UrlSource extends Omit<upstream0.Source, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers/src/source.dart::UrlSource": readonly [];
}>, Readonly<{
    "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
}> {
    readonly __UrlSource: unique symbol;
    readonly [_flaxDartTypeValue]: UrlSource;
    readonly mimeType: string | null;
    readonly url: string;
    setOnPlayer(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>): Promise<void>;
    toString(): string;
}
export declare function _UrlSourceFactory(url: string, options?: {
    mimeType?: string | null | undefined;
}): UrlSource;
export interface _UrlSourceNative extends UrlSource {
    readonly [_flaxDartTypeValue]: _UrlSourceNative;
    setOnPlayer(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>): Promise<void>;
    toString(): string;
    get url(): string;
    get mimeType(): string | null;
}
export declare abstract class _UrlSourceNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UrlSource>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: UrlSource;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:UrlSource", readonly [], false];
    constructor(url: string, options?: {
        mimeType?: string | null | undefined;
    });
}
export declare namespace _UrlSourceFactory {
    function implement(args: [url: string, options?: {
        mimeType?: string | null | undefined;
    }], implementation: {}): UrlSource;
}
declare const _UrlSourceBinding: typeof _UrlSourceFactory & (new (url: string, options?: {
    mimeType?: string | null | undefined;
}) => _UrlSourceNative);
export declare const UrlSource: typeof _UrlSourceBinding & _FlaxInstanceType<UrlSource> & _FlaxDartType<UrlSource, readonly ["class", "flax.audio/audio#type:UrlSource", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mimeType" | "url" | "setOnPlayer" | "toString" | "__flaxBound:package:audioplayers/src/source.dart::UrlSource" | "__flaxBound:package:audioplayers/src/source.dart::Source";
export {};
