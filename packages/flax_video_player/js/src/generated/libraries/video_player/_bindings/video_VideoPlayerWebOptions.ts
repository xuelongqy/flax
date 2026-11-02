// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/video-player/_bindings/video_VideoPlayerWebOptionsControls';
import '@flax/video-player/_bindings/video_VideoPlayerWebOptionsControls';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import { _flaxMemberParameters19 } from "@flax/video-player/_bindings/video.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VideoPlayerWebOptions extends Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptions": readonly [] }> { readonly __VideoPlayerWebOptions: unique symbol;
readonly [_flaxDartTypeValue]: VideoPlayerWebOptions;

readonly controls: upstream0.VideoPlayerWebOptionsControls;
readonly allowContextMenu: boolean;
readonly allowRemotePlayback: boolean;
readonly poster: upstream1.Uri | null;
}
defineObject("flax.video/video#type:VideoPlayerWebOptions", ["controls","allowContextMenu","allowRemotePlayback","poster"], [], _flaxBindingMethods("flax.video/video#type:VideoPlayerWebOptions", "object", {}, {}), []);
export function _VideoPlayerWebOptionsFactory(options: { controls?: Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [] }> | undefined; allowContextMenu?: boolean | undefined; allowRemotePlayback?: boolean | undefined; poster?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined } = {}): VideoPlayerWebOptions {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:VideoPlayerWebOptions", "", [{"name":"controls"},{"name":"allowContextMenu"},{"name":"allowRemotePlayback"},{"name":"poster"}], [], options) as VideoPlayerWebOptions;
}
const _VideoPlayerWebOptionsProxy = {type: "flax.video/video#type:VideoPlayerWebOptions", parameters: _flaxMemberParameters19, constructors: {"": _flaxMemberParameters19}, methods: {}, getters: ["controls","allowContextMenu","allowRemotePlayback","poster"], setters: [], contextMembers: [], superMembers: ["get:controls","get:allowContextMenu","get:allowRemotePlayback","get:poster"]} as const;
export interface _VideoPlayerWebOptionsNative extends VideoPlayerWebOptions {
readonly [_flaxDartTypeValue]: _VideoPlayerWebOptionsNative;

get controls(): upstream0.VideoPlayerWebOptionsControls;
get allowContextMenu(): boolean;
get allowRemotePlayback(): boolean;
get poster(): upstream1.Uri | null;
}
export abstract class _VideoPlayerWebOptionsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoPlayerWebOptions>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VideoPlayerWebOptions;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoPlayerWebOptions", readonly [], false];
constructor(options?: {controls?: Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [] }> | undefined; allowContextMenu?: boolean | undefined; allowRemotePlayback?: boolean | undefined; poster?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined}) { super(_VideoPlayerWebOptionsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_VideoPlayerWebOptionsNative.prototype, _VideoPlayerWebOptionsProxy);
export namespace _VideoPlayerWebOptionsFactory { export function implement(args: [options?: {controls?: Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [] }> | undefined; allowContextMenu?: boolean | undefined; allowRemotePlayback?: boolean | undefined; poster?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined}], implementation: {}): VideoPlayerWebOptions {
return constructProxy(_VideoPlayerWebOptionsProxy, args, implementation) as VideoPlayerWebOptions; } }
const _VideoPlayerWebOptionsBinding = _flaxProxyFactory(_VideoPlayerWebOptionsFactory, _VideoPlayerWebOptionsNative) as unknown as typeof _VideoPlayerWebOptionsFactory & (new(options?: {controls?: Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoPlayerWebOptionsControls": readonly [] }> | undefined; allowContextMenu?: boolean | undefined; allowRemotePlayback?: boolean | undefined; poster?: DartInput<Readonly<{ "__flaxBound:dart:core::Uri": readonly [] }>> | null | undefined}) => _VideoPlayerWebOptionsNative);
export const VideoPlayerWebOptions: typeof _VideoPlayerWebOptionsBinding & _FlaxInstanceType<VideoPlayerWebOptions> & _FlaxDartType<VideoPlayerWebOptions, readonly ["class", "flax.video/video#type:VideoPlayerWebOptions", readonly [], false]> = _flaxBindInstanceType<VideoPlayerWebOptions, typeof _VideoPlayerWebOptionsBinding>(_VideoPlayerWebOptionsBinding, "flax.video/video#type:VideoPlayerWebOptions", ["dart:core::Object"]) as typeof _VideoPlayerWebOptionsBinding & _FlaxInstanceType<VideoPlayerWebOptions> & _FlaxDartType<VideoPlayerWebOptions, readonly ["class", "flax.video/video#type:VideoPlayerWebOptions", readonly [], false]>;
