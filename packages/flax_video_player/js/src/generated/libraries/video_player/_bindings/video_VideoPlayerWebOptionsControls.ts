// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters0 } from "@flax/video-player/_bindings/video.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VideoPlayerWebOptionsControls extends Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [] }> { readonly __VideoPlayerWebOptionsControls: unique symbol;
readonly [_flaxDartTypeValue]: VideoPlayerWebOptionsControls;

readonly enabled: boolean;
readonly allowDownload: boolean;
readonly allowFullscreen: boolean;
readonly allowPlaybackRate: boolean;
readonly allowPictureInPicture: boolean;
readonly controlsList: string;
}
defineObject("flax.video/video#type:VideoPlayerWebOptionsControls", ["enabled","allowDownload","allowFullscreen","allowPlaybackRate","allowPictureInPicture","controlsList"], [], _flaxBindingMethods("flax.video/video#type:VideoPlayerWebOptionsControls", "object", {}, {}), []);
const _VideoPlayerWebOptionsControlsProxy = {type: "flax.video/video#type:VideoPlayerWebOptionsControls", parameters: _flaxMemberParameters0, constructors: {}, methods: {}, getters: ["enabled","allowDownload","allowFullscreen","allowPlaybackRate","allowPictureInPicture","controlsList"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _VideoPlayerWebOptionsControlsFactory { export function implement(args: [], implementation: {get enabled(): boolean; get allowDownload(): boolean; get allowFullscreen(): boolean; get allowPlaybackRate(): boolean; get allowPictureInPicture(): boolean; get controlsList(): string}): VideoPlayerWebOptionsControls {
return constructProxy(_VideoPlayerWebOptionsControlsProxy, args, implementation) as VideoPlayerWebOptionsControls; } }
export const VideoPlayerWebOptionsControls: typeof _VideoPlayerWebOptionsControlsFactory & _FlaxInstanceType<VideoPlayerWebOptionsControls> & _FlaxDartType<VideoPlayerWebOptionsControls, readonly ["class", "flax.video/video#type:VideoPlayerWebOptionsControls", readonly [], false]> = _flaxBindInstanceType<VideoPlayerWebOptionsControls, typeof _VideoPlayerWebOptionsControlsFactory>(_VideoPlayerWebOptionsControlsFactory, "flax.video/video#type:VideoPlayerWebOptionsControls", ["dart:core::Object"]) as typeof _VideoPlayerWebOptionsControlsFactory & _FlaxInstanceType<VideoPlayerWebOptionsControls> & _FlaxDartType<VideoPlayerWebOptionsControls, readonly ["class", "flax.video/video#type:VideoPlayerWebOptionsControls", readonly [], false]>;
