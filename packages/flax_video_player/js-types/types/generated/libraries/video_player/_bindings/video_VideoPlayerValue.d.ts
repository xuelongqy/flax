import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/video-player/_bindings/video_Caption';
import '@flax/video-player/_bindings/video_Caption';
import type * as upstream3 from '@flax/video-player/_bindings/video_DurationRange';
import '@flax/video-player/_bindings/video_DurationRange';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoPlayerValue extends Readonly<{
    "__flaxBound:package:video_player/video_player.dart::VideoPlayerValue": readonly [];
}> {
    readonly __VideoPlayerValue: unique symbol;
    readonly [_flaxDartTypeValue]: VideoPlayerValue;
    readonly duration: upstream0.Duration;
    readonly position: upstream0.Duration;
    readonly caption: upstream2.Caption;
    readonly captionOffset: upstream0.Duration;
    readonly buffered: DartList<upstream3.DurationRange>;
    readonly isPlaying: boolean;
    readonly isLooping: boolean;
    readonly isBuffering: boolean;
    readonly volume: number;
    readonly playbackSpeed: number;
    readonly errorDescription: string | null;
    readonly isCompleted: boolean;
    readonly preventsDisplaySleepDuringVideoPlayback: boolean;
    readonly size: upstream1.Size;
    readonly rotationCorrection: number;
    readonly isInitialized: boolean;
    readonly hasError: boolean;
    readonly aspectRatio: number;
    copyWith(options?: {
        buffered?: DartListInput<upstream3.DurationRange, Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [];
        }>> | null | undefined;
        caption?: Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [];
        }> | null | undefined;
        captionOffset?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | null | undefined;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | null | undefined;
        errorDescription?: string | null | undefined;
        isBuffering?: boolean | null | undefined;
        isCompleted?: boolean | null | undefined;
        isInitialized?: boolean | null | undefined;
        isLooping?: boolean | null | undefined;
        isPlaying?: boolean | null | undefined;
        playbackSpeed?: number | null | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | null | undefined;
        preventsDisplaySleepDuringVideoPlayback?: boolean | null | undefined;
        rotationCorrection?: number | null | undefined;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        volume?: number | null | undefined;
    }): VideoPlayerValue;
    toString(): string;
}
export declare function _VideoPlayerValueFactory(options: {
    duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>;
    size?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    position?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>) | undefined;
    caption?: Readonly<{
        "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [];
    }> | undefined;
    captionOffset?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>) | undefined;
    buffered?: DartListInput<upstream3.DurationRange, Readonly<{
        "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [];
    }>> | undefined;
    isInitialized?: boolean | undefined;
    isPlaying?: boolean | undefined;
    isLooping?: boolean | undefined;
    isBuffering?: boolean | undefined;
    volume?: number | undefined;
    playbackSpeed?: number | undefined;
    rotationCorrection?: number | undefined;
    errorDescription?: string | null | undefined;
    isCompleted?: boolean | undefined;
    preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
}): VideoPlayerValue;
export declare namespace _VideoPlayerValueFactory {
    function uninitialized(): VideoPlayerValue;
}
export declare namespace _VideoPlayerValueFactory {
    function erroneous(errorDescription: string): VideoPlayerValue;
}
export interface _VideoPlayerValueNative extends VideoPlayerValue {
    readonly [_flaxDartTypeValue]: _VideoPlayerValueNative;
    readonly [_flaxDartConstructors]?: {
        "": (options: {
            duration: Readonly<{
                "__flaxBound:dart:core::Duration": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
            }>;
            size?: (Readonly<{
                "__flaxBound:dart:ui::Size": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | undefined;
            position?: (Readonly<{
                "__flaxBound:dart:core::Duration": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
            }>) | undefined;
            caption?: Readonly<{
                "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [];
            }> | undefined;
            captionOffset?: (Readonly<{
                "__flaxBound:dart:core::Duration": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
            }>) | undefined;
            buffered?: DartListInput<upstream3.DurationRange, Readonly<{
                "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [];
            }>> | undefined;
            isInitialized?: boolean | undefined;
            isPlaying?: boolean | undefined;
            isLooping?: boolean | undefined;
            isBuffering?: boolean | undefined;
            volume?: number | undefined;
            playbackSpeed?: number | undefined;
            rotationCorrection?: number | undefined;
            errorDescription?: string | null | undefined;
            isCompleted?: boolean | undefined;
            preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
        }) => void;
        "uninitialized": () => void;
        "erroneous": (errorDescription: string) => void;
    };
    copyWith(options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | null | undefined;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | null | undefined;
        caption?: Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [];
        }> | null | undefined;
        captionOffset?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | null | undefined;
        buffered?: DartListInput<upstream3.DurationRange, Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [];
        }>> | null | undefined;
        isInitialized?: boolean | null | undefined;
        isPlaying?: boolean | null | undefined;
        isLooping?: boolean | null | undefined;
        isBuffering?: boolean | null | undefined;
        volume?: number | null | undefined;
        playbackSpeed?: number | null | undefined;
        rotationCorrection?: number | null | undefined;
        errorDescription?: string | null | undefined;
        isCompleted?: boolean | null | undefined;
        preventsDisplaySleepDuringVideoPlayback?: boolean | null | undefined;
    }): VideoPlayerValue;
    toString(): string;
    get duration(): upstream0.Duration;
    get position(): upstream0.Duration;
    get caption(): upstream2.Caption;
    get captionOffset(): upstream0.Duration;
    get buffered(): DartList<upstream3.DurationRange>;
    get isPlaying(): boolean;
    get isLooping(): boolean;
    get isBuffering(): boolean;
    get volume(): number;
    get playbackSpeed(): number;
    get errorDescription(): string | null;
    get isCompleted(): boolean;
    get preventsDisplaySleepDuringVideoPlayback(): boolean;
    get size(): upstream1.Size;
    get rotationCorrection(): number;
    get isInitialized(): boolean;
    get hasError(): boolean;
    get aspectRatio(): number;
}
export declare abstract class _VideoPlayerValueNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoPlayerValue>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: VideoPlayerValue;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoPlayerValue", readonly [], false];
    constructor(options: {
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | undefined;
        caption?: Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [];
        }> | undefined;
        captionOffset?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | undefined;
        buffered?: DartListInput<upstream3.DurationRange, Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [];
        }>> | undefined;
        isInitialized?: boolean | undefined;
        isPlaying?: boolean | undefined;
        isLooping?: boolean | undefined;
        isBuffering?: boolean | undefined;
        volume?: number | undefined;
        playbackSpeed?: number | undefined;
        rotationCorrection?: number | undefined;
        errorDescription?: string | null | undefined;
        isCompleted?: boolean | undefined;
        preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
    });
    constructor(call: _FlaxProxySuper<_VideoPlayerValueNative>);
}
export declare namespace _VideoPlayerValueFactory {
    function implement(args: [options: {
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>;
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        position?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | undefined;
        caption?: Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [];
        }> | undefined;
        captionOffset?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | undefined;
        buffered?: DartListInput<upstream3.DurationRange, Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [];
        }>> | undefined;
        isInitialized?: boolean | undefined;
        isPlaying?: boolean | undefined;
        isLooping?: boolean | undefined;
        isBuffering?: boolean | undefined;
        volume?: number | undefined;
        playbackSpeed?: number | undefined;
        rotationCorrection?: number | undefined;
        errorDescription?: string | null | undefined;
        isCompleted?: boolean | undefined;
        preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
    }], implementation: {}): VideoPlayerValue;
}
declare const _VideoPlayerValueBinding: typeof _VideoPlayerValueFactory & (new (options: {
    duration: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>;
    size?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    position?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>) | undefined;
    caption?: Readonly<{
        "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [];
    }> | undefined;
    captionOffset?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
    }>) | undefined;
    buffered?: DartListInput<upstream3.DurationRange, Readonly<{
        "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [];
    }>> | undefined;
    isInitialized?: boolean | undefined;
    isPlaying?: boolean | undefined;
    isLooping?: boolean | undefined;
    isBuffering?: boolean | undefined;
    volume?: number | undefined;
    playbackSpeed?: number | undefined;
    rotationCorrection?: number | undefined;
    errorDescription?: string | null | undefined;
    isCompleted?: boolean | undefined;
    preventsDisplaySleepDuringVideoPlayback?: boolean | undefined;
}) => _VideoPlayerValueNative) & (new (call: _FlaxProxySuper<_VideoPlayerValueNative>) => _VideoPlayerValueNative);
export declare const VideoPlayerValue: typeof _VideoPlayerValueBinding & _FlaxInstanceType<VideoPlayerValue> & _FlaxDartType<VideoPlayerValue, readonly ["class", "flax.video/video#type:VideoPlayerValue", readonly [], false]>;
export {};
