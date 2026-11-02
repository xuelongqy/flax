// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/video-player/_bindings/video_ClosedCaptionFile';
import '@flax/video-player/_bindings/video_ClosedCaptionFile';
import type * as upstream1 from '@flax/video-player/_bindings/video_Caption';
import '@flax/video-player/_bindings/video_Caption';
import { _flaxMemberParameters4 } from "@flax/video-player/_bindings/video.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WebVTTCaptionFile extends Omit<upstream0.ClosedCaptionFile, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:video_player/src/web_vtt.dart::WebVTTCaptionFile": readonly [] }>, Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [] }> { readonly __WebVTTCaptionFile: unique symbol;
readonly [_flaxDartTypeValue]: WebVTTCaptionFile;

readonly captions: DartList<upstream1.Caption>;
}
defineObject("flax.video/video#type:WebVTTCaptionFile", ["captions"], [], _flaxBindingMethods("flax.video/video#type:WebVTTCaptionFile", "object", {}, {}), [], undefined, "flax.video/video#type:ClosedCaptionFile");
export function _WebVTTCaptionFileFactory(fileContents: string): WebVTTCaptionFile {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:WebVTTCaptionFile", "", [{"name":"fileContents","required":true,"positional":true}], [fileContents], {}) as WebVTTCaptionFile;
}
const _WebVTTCaptionFileProxy = {type: "flax.video/video#type:WebVTTCaptionFile", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {}, getters: ["captions"], setters: [], contextMembers: [], superMembers: ["get:captions"]} as const;
export interface _WebVTTCaptionFileNative extends WebVTTCaptionFile {
readonly [_flaxDartTypeValue]: _WebVTTCaptionFileNative;

get captions(): DartList<upstream1.Caption>;
}
export abstract class _WebVTTCaptionFileNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WebVTTCaptionFile>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WebVTTCaptionFile;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:WebVTTCaptionFile", readonly [], false];
constructor(fileContents: string) { super(_WebVTTCaptionFileProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_WebVTTCaptionFileNative.prototype, _WebVTTCaptionFileProxy);
export namespace _WebVTTCaptionFileFactory { export function implement(args: [fileContents: string], implementation: {}): WebVTTCaptionFile {
return constructProxy(_WebVTTCaptionFileProxy, args, implementation) as WebVTTCaptionFile; } }
const _WebVTTCaptionFileBinding = _flaxProxyFactory(_WebVTTCaptionFileFactory, _WebVTTCaptionFileNative) as unknown as typeof _WebVTTCaptionFileFactory & (new(fileContents: string) => _WebVTTCaptionFileNative);
export const WebVTTCaptionFile: typeof _WebVTTCaptionFileBinding & _FlaxInstanceType<WebVTTCaptionFile> & _FlaxDartType<WebVTTCaptionFile, readonly ["class", "flax.video/video#type:WebVTTCaptionFile", readonly [], false]> = _flaxBindInstanceType<WebVTTCaptionFile, typeof _WebVTTCaptionFileBinding>(_WebVTTCaptionFileBinding, "flax.video/video#type:WebVTTCaptionFile", ["flax.video/video#type:ClosedCaptionFile","dart:core::Object"]) as typeof _WebVTTCaptionFileBinding & _FlaxInstanceType<WebVTTCaptionFile> & _FlaxDartType<WebVTTCaptionFile, readonly ["class", "flax.video/video#type:WebVTTCaptionFile", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "captions" | "__flaxBound:package:video_player/src/web_vtt.dart::WebVTTCaptionFile" | "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile";
