import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream1 from '@flax/video-player/_bindings/video_VideoPlayerValue';
import '@flax/video-player/_bindings/video_VideoPlayerValue';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream5 from '@flax/video-player/_bindings/video_ClosedCaptionFile';
import '@flax/video-player/_bindings/video_ClosedCaptionFile';
import type * as upstream6 from '@flax/video-player/_bindings/video_VideoPlayerOptions';
import '@flax/video-player/_bindings/video_VideoPlayerOptions';
import type * as upstream7 from '@flax/video-player/_bindings/video_VideoViewType';
import '@flax/video-player/_bindings/video_VideoViewType';
import type * as upstream8 from '@flax/video-player/_bindings/video_VideoFormat';
import '@flax/video-player/_bindings/video_VideoFormat';
import '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/io/_bindings/sdk_dependencies_File';
import type * as upstream11 from '@flax/video-player/_bindings/video_DataSourceType';
import '@flax/video-player/_bindings/video_DataSourceType';
import type * as upstream12 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream13 from '@flax/video-player/_bindings/video_VideoAudioTrack';
import '@flax/video-player/_bindings/video_VideoAudioTrack';
import type * as upstream14 from '@flax/video-player/_bindings/video_VideoTrack';
import '@flax/video-player/_bindings/video_VideoTrack';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface VideoPlayerController extends Omit<upstream0.ValueNotifier<upstream1.VideoPlayerValue>, _flaxOwnMembers0>, Omit<upstream2.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.VideoPlayerValue>>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.VideoPlayerValue> | keyof upstream2.ChangeNotifier>, Omit<upstream4.ValueListenable<upstream1.VideoPlayerValue>, _flaxOwnMembers0 | keyof upstream0.ValueNotifier<upstream1.VideoPlayerValue> | keyof upstream2.ChangeNotifier | keyof upstream3.Listenable>, Readonly<{
    "__flaxBound:package:video_player/video_player.dart::VideoPlayerController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream1.VideoPlayerValue];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.VideoPlayerValue];
}> {
    readonly __VideoPlayerController: unique symbol;
    readonly [_flaxDartTypeValue]: VideoPlayerController;
    readonly hasListeners: boolean;
    get value(): upstream1.VideoPlayerValue;
    readonly dataSource: string;
    readonly httpHeaders: DartMap<string, string>;
    readonly formatHint: upstream8.VideoFormat | null;
    readonly dataSourceType: upstream11.DataSourceType;
    readonly videoPlayerOptions: upstream6.VideoPlayerOptions | null;
    readonly package: string | null;
    readonly viewType: upstream7.VideoViewType;
    readonly position: Promise<upstream12.Duration | null>;
    readonly closedCaptionFile: Promise<upstream5.ClosedCaptionFile> | null;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): Promise<void>;
    toString(): string;
    initialize(): Promise<void>;
    play(): Promise<void>;
    setLooping(looping: boolean): Promise<void>;
    setPreventsDisplaySleepDuringVideoPlayback(preventsDisplaySleepDuringVideoPlayback: boolean): Promise<void>;
    pause(): Promise<void>;
    seekTo(position: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream12.Duration];
    }>): Promise<void>;
    setVolume(volume: number): Promise<void>;
    setPlaybackSpeed(speed: number): Promise<void>;
    setCaptionOffset(offset: Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream12.Duration];
    }>): void;
    setClosedCaptionFile(closedCaptionFile: Promise<Readonly<{
        "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [];
    }>> | null): Promise<void>;
    getAudioTracks(): Promise<DartList<upstream13.VideoAudioTrack>>;
    selectAudioTrack(trackId: string): Promise<void>;
    isAudioTrackSupportAvailable(): boolean;
    getVideoTracks(): Promise<DartList<upstream14.VideoTrack>>;
    selectVideoTrack(track: Readonly<{
        "__flaxBound:package:video_player/video_player.dart::VideoTrack": readonly [];
    }> | null): Promise<void>;
    isVideoTrackSupportAvailable(): boolean;
    set value(value: Readonly<{
        "__flaxBound:package:video_player/video_player.dart::VideoPlayerValue": readonly [];
    }>);
}
export declare namespace _VideoPlayerControllerFactory {
    function asset(dataSource: string, options?: {
        package?: string | null | undefined;
        closedCaptionFile?: Promise<Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [];
        }>> | null | undefined;
        videoPlayerOptions?: Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerOptions": readonly [];
        }> | null | undefined;
        viewType?: upstream7.VideoViewType | undefined;
    }): VideoPlayerController;
}
export declare namespace _VideoPlayerControllerFactory {
    function network(dataSource: string, options?: {
        formatHint?: upstream8.VideoFormat | null | undefined;
        closedCaptionFile?: Promise<Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [];
        }>> | null | undefined;
        videoPlayerOptions?: Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerOptions": readonly [];
        }> | null | undefined;
        httpHeaders?: DartMapInput<string, string, string, string> | undefined;
        viewType?: upstream7.VideoViewType | undefined;
    }): VideoPlayerController;
}
export declare namespace _VideoPlayerControllerFactory {
    function networkUrl(url: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>, options?: {
        formatHint?: upstream8.VideoFormat | null | undefined;
        closedCaptionFile?: Promise<Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [];
        }>> | null | undefined;
        videoPlayerOptions?: Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerOptions": readonly [];
        }> | null | undefined;
        httpHeaders?: DartMapInput<string, string, string, string> | undefined;
        viewType?: upstream7.VideoViewType | undefined;
    }): VideoPlayerController;
}
export declare namespace _VideoPlayerControllerFactory {
    function file(file: Readonly<{
        "__flaxBound:dart:io::File": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:io::FileSystemEntity": readonly [];
    }>, options?: {
        closedCaptionFile?: Promise<Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [];
        }>> | null | undefined;
        videoPlayerOptions?: Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerOptions": readonly [];
        }> | null | undefined;
        httpHeaders?: DartMapInput<string, string, string, string> | undefined;
        viewType?: upstream7.VideoViewType | undefined;
    }): VideoPlayerController;
}
export declare namespace _VideoPlayerControllerFactory {
    function contentUri(contentUri: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>>, options?: {
        closedCaptionFile?: Promise<Readonly<{
            "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [];
        }>> | null | undefined;
        videoPlayerOptions?: Readonly<{
            "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerOptions": readonly [];
        }> | null | undefined;
        viewType?: upstream7.VideoViewType | undefined;
    }): VideoPlayerController;
}
export declare namespace _VideoPlayerControllerFactory {
    const kUninitializedPlayerId: number;
}
export declare const VideoPlayerController: typeof _VideoPlayerControllerFactory & _FlaxInstanceType<VideoPlayerController> & _FlaxDartType<VideoPlayerController, readonly ["class", "flax.video/video#type:VideoPlayerController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "value" | "dataSource" | "httpHeaders" | "formatHint" | "dataSourceType" | "videoPlayerOptions" | "package" | "viewType" | "position" | "closedCaptionFile" | "addListener" | "removeListener" | "dispose" | "toString" | "initialize" | "play" | "setLooping" | "setPreventsDisplaySleepDuringVideoPlayback" | "pause" | "seekTo" | "setVolume" | "setPlaybackSpeed" | "setCaptionOffset" | "setClosedCaptionFile" | "getAudioTracks" | "selectAudioTrack" | "isAudioTrackSupportAvailable" | "getVideoTracks" | "selectVideoTrack" | "isVideoTrackSupportAvailable" | "__flaxBound:package:video_player/video_player.dart::VideoPlayerController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
export {};
