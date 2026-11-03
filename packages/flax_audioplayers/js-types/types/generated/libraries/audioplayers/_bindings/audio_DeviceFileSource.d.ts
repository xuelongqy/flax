import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_Source';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DeviceFileSource extends Omit<upstream0.Source, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers/src/source.dart::DeviceFileSource": readonly [];
}>, Readonly<{
    "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
}> {
    readonly __DeviceFileSource: unique symbol;
    readonly [_flaxDartTypeValue]: DeviceFileSource;
    readonly mimeType: string | null;
    readonly path: string;
    setOnPlayer(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>): Promise<void>;
    toString(): string;
}
export declare function _DeviceFileSourceFactory(path: string, options?: {
    mimeType?: string | null | undefined;
}): DeviceFileSource;
export interface _DeviceFileSourceNative extends DeviceFileSource {
    readonly [_flaxDartTypeValue]: _DeviceFileSourceNative;
    setOnPlayer(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>): Promise<void>;
    toString(): string;
    get path(): string;
    get mimeType(): string | null;
}
export declare abstract class _DeviceFileSourceNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DeviceFileSource>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DeviceFileSource;
    static [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:DeviceFileSource", readonly [], false];
    constructor(path: string, options?: {
        mimeType?: string | null | undefined;
    });
}
export declare namespace _DeviceFileSourceFactory {
    function implement(args: [path: string, options?: {
        mimeType?: string | null | undefined;
    }], implementation: {}): DeviceFileSource;
}
declare const _DeviceFileSourceBinding: typeof _DeviceFileSourceFactory & (new (path: string, options?: {
    mimeType?: string | null | undefined;
}) => _DeviceFileSourceNative);
export declare const DeviceFileSource: typeof _DeviceFileSourceBinding & _FlaxInstanceType<DeviceFileSource> & _FlaxDartType<DeviceFileSource, readonly ["class", "flax.audio/audio#type:DeviceFileSource", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mimeType" | "path" | "setOnPlayer" | "toString" | "__flaxBound:package:audioplayers/src/source.dart::DeviceFileSource" | "__flaxBound:package:audioplayers/src/source.dart::Source";
export {};
