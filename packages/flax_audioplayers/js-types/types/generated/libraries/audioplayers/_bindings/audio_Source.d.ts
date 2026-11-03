import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioPlayer';
import '@flax/audioplayers/_bindings/audio_AudioPlayer';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Source extends Readonly<{
    "__flaxBound:package:audioplayers/src/source.dart::Source": readonly [];
}> {
    readonly __Source: unique symbol;
    readonly [_flaxDartTypeValue]: Source;
    readonly mimeType: string | null;
    setOnPlayer(player: Readonly<{
        "__flaxBound:package:audioplayers/src/audioplayer.dart::AudioPlayer": readonly [];
    }>): Promise<void>;
}
export declare namespace _SourceFactory {
    function implement(args: [], implementation: {
        setOnPlayer: ((player: upstream0.AudioPlayer) => Promise<void>);
        get mimeType(): string | null;
    }): Source;
}
export declare const Source: typeof _SourceFactory & _FlaxInstanceType<Source> & _FlaxDartType<Source, readonly ["class", "flax.audio/audio#type:Source", readonly [], false]>;
