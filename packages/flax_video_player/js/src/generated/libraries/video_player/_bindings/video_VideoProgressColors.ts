// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import { _flaxMemberParameters20 } from "@flax/video-player/_bindings/video.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VideoProgressColors extends Readonly<{ "__flaxBound:package:video_player/video_player.dart::VideoProgressColors": readonly [] }> { readonly __VideoProgressColors: unique symbol;
readonly [_flaxDartTypeValue]: VideoProgressColors;

readonly playedColor: upstream0.Color;
readonly bufferedColor: upstream0.Color;
readonly backgroundColor: upstream0.Color;
}
defineObject("flax.video/video#type:VideoProgressColors", ["playedColor","bufferedColor","backgroundColor"], [], _flaxBindingMethods("flax.video/video#type:VideoProgressColors", "object", {}, {}), []);
export function _VideoProgressColorsFactory(options: { playedColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; bufferedColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined } = {}): VideoProgressColors {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:VideoProgressColors", "", [{"name":"playedColor"},{"name":"bufferedColor"},{"name":"backgroundColor"}], [], options) as VideoProgressColors;
}
const _VideoProgressColorsProxy = {type: "flax.video/video#type:VideoProgressColors", parameters: _flaxMemberParameters20, constructors: {"": _flaxMemberParameters20}, methods: {}, getters: ["playedColor","bufferedColor","backgroundColor"], setters: [], contextMembers: [], superMembers: ["get:playedColor","get:bufferedColor","get:backgroundColor"]} as const;
export interface _VideoProgressColorsNative extends VideoProgressColors {
readonly [_flaxDartTypeValue]: _VideoProgressColorsNative;

get playedColor(): upstream0.Color;
get bufferedColor(): upstream0.Color;
get backgroundColor(): upstream0.Color;
}
export abstract class _VideoProgressColorsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<VideoProgressColors>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: VideoProgressColors;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:VideoProgressColors", readonly [], false];
constructor(options?: {playedColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; bufferedColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined}) { super(_VideoProgressColorsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_VideoProgressColorsNative.prototype, _VideoProgressColorsProxy);
export namespace _VideoProgressColorsFactory { export function implement(args: [options?: {playedColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; bufferedColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined}], implementation: {}): VideoProgressColors {
return constructProxy(_VideoProgressColorsProxy, args, implementation) as VideoProgressColors; } }
const _VideoProgressColorsBinding = _flaxProxyFactory(_VideoProgressColorsFactory, _VideoProgressColorsNative) as unknown as typeof _VideoProgressColorsFactory & (new(options?: {playedColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; bufferedColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined}) => _VideoProgressColorsNative);
export const VideoProgressColors: typeof _VideoProgressColorsBinding & _FlaxInstanceType<VideoProgressColors> & _FlaxDartType<VideoProgressColors, readonly ["class", "flax.video/video#type:VideoProgressColors", readonly [], false]> = _flaxBindInstanceType<VideoProgressColors, typeof _VideoProgressColorsBinding>(_VideoProgressColorsBinding, "flax.video/video#type:VideoProgressColors", ["dart:core::Object"]) as typeof _VideoProgressColorsBinding & _FlaxInstanceType<VideoProgressColors> & _FlaxDartType<VideoProgressColors, readonly ["class", "flax.video/video#type:VideoProgressColors", readonly [], false]>;
