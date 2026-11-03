import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AudioCache extends Readonly<{
    "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [];
}> {
    readonly __AudioCache: unique symbol;
    readonly [_flaxDartTypeValue]: AudioCache;
    readonly loadedFiles: DartMap<string, upstream0.Uri>;
    get prefix(): string;
    get cacheId(): string | null;
    clear(fileName: string): Promise<void>;
    clearAll(): Promise<void>;
    fetchToMemory(fileName: string): Promise<upstream0.Uri>;
    load(fileName: string): Promise<upstream0.Uri>;
    loadPath(fileName: string): Promise<string>;
    loadAsBytes(fileName: string): Promise<globalThis.Uint8Array>;
    loadAll(fileNames: DartListInput<string, string>): Promise<DartList<upstream0.Uri>>;
    set prefix(value: string);
    set cacheId(value: string | null);
}
export declare function _AudioCacheFactory(options?: {
    prefix?: string | undefined;
    cacheId?: string | null | undefined;
}): AudioCache;
export interface _AudioCacheNative extends AudioCache {
    readonly [_flaxDartTypeValue]: _AudioCacheNative;
    clear(fileName: string): Promise<void>;
    clearAll(): Promise<void>;
    fetchToMemory(fileName: string): Promise<upstream0.Uri>;
    load(fileName: string): Promise<upstream0.Uri>;
    loadPath(fileName: string): Promise<string>;
    loadAsBytes(fileName: string): Promise<globalThis.Uint8Array>;
    loadAll(fileNames: DartListInput<string, string>): Promise<DartList<upstream0.Uri>>;
    get loadedFiles(): DartMap<string, upstream0.Uri>;
    get prefix(): string;
    get cacheId(): string | null;
    set prefix(value: string);
    set cacheId(value: string | null);
}
export declare abstract class _AudioCacheNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AudioCache>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: AudioCache;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:AudioCache", readonly [], false];
    constructor(options?: {
        prefix?: string | undefined;
        cacheId?: string | null | undefined;
    });
}
export declare namespace _AudioCacheFactory {
    function implement(args: [options?: {
        prefix?: string | undefined;
        cacheId?: string | null | undefined;
    }], implementation: {}): AudioCache;
}
declare const _AudioCacheBinding: typeof _AudioCacheFactory & (new (options?: {
    prefix?: string | undefined;
    cacheId?: string | null | undefined;
}) => _AudioCacheNative);
export declare namespace _AudioCacheFactory {
    function setInstance(value: Readonly<{
        "__flaxBound:package:audioplayers/src/audio_cache.dart::AudioCache": readonly [];
    }>): void;
}
export declare namespace _AudioCacheFactory {
    const instance: AudioCache;
}
export declare const AudioCache: typeof _AudioCacheBinding & _FlaxInstanceType<AudioCache> & _FlaxDartType<AudioCache, readonly ["class", "flax.audio/audio#type:AudioCache", readonly [], false]>;
export {};
