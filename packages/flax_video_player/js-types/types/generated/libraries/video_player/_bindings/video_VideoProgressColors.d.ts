import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoProgressColors extends Readonly<{
    "__flaxBound:package:video_player/video_player.dart::VideoProgressColors": readonly [];
}> {
    readonly __VideoProgressColors: unique symbol;
    readonly [_flaxDartTypeValue]: VideoProgressColors;
    readonly playedColor: upstream0.Color;
    readonly bufferedColor: upstream0.Color;
    readonly backgroundColor: upstream0.Color;
}
export declare function _VideoProgressColorsFactory(options?: {
    playedColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    bufferedColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
}): VideoProgressColors;
export interface _VideoProgressColorsNative extends VideoProgressColors {
    readonly [_flaxDartTypeValue]: _VideoProgressColorsNative;
    get playedColor(): upstream0.Color;
    get bufferedColor(): upstream0.Color;
    get backgroundColor(): upstream0.Color;
}
export declare abstract class _VideoProgressColorsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoProgressColors>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VideoProgressColors;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoProgressColors", readonly [], false];
    constructor(options?: {
        playedColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        bufferedColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
    });
}
export declare namespace _VideoProgressColorsFactory {
    function implement(args: [options?: {
        playedColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        bufferedColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | undefined;
    }], implementation: {}): VideoProgressColors;
}
declare const _VideoProgressColorsBinding: typeof _VideoProgressColorsFactory & (new (options?: {
    playedColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    bufferedColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | undefined;
}) => _VideoProgressColorsNative);
export declare const VideoProgressColors: typeof _VideoProgressColorsBinding & _FlaxInstanceType<VideoProgressColors> & _FlaxDartType<VideoProgressColors, readonly ["class", "flax.video/video#type:VideoProgressColors", readonly [], false]>;
export {};
