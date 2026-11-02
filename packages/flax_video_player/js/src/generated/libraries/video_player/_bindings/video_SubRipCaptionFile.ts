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
export interface SubRipCaptionFile extends Omit<upstream0.ClosedCaptionFile, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:video_player/src/sub_rip.dart::SubRipCaptionFile": readonly [] }>, Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [] }> { readonly __SubRipCaptionFile: unique symbol;
readonly [_flaxDartTypeValue]: SubRipCaptionFile;

readonly captions: DartList<upstream1.Caption>;
readonly fileContents: string;
}
defineObject("flax.video/video#type:SubRipCaptionFile", ["captions","fileContents"], [], _flaxBindingMethods("flax.video/video#type:SubRipCaptionFile", "object", {}, {}), [], undefined, "flax.video/video#type:ClosedCaptionFile");
export function _SubRipCaptionFileFactory(fileContents: string): SubRipCaptionFile {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:SubRipCaptionFile", "", [{"name":"fileContents","required":true,"positional":true}], [fileContents], {}) as SubRipCaptionFile;
}
const _SubRipCaptionFileProxy = {type: "flax.video/video#type:SubRipCaptionFile", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {}, getters: ["fileContents","captions"], setters: [], contextMembers: [], superMembers: ["get:fileContents","get:captions"]} as const;
export interface _SubRipCaptionFileNative extends SubRipCaptionFile {
readonly [_flaxDartTypeValue]: _SubRipCaptionFileNative;

get fileContents(): string;
get captions(): DartList<upstream1.Caption>;
}
export abstract class _SubRipCaptionFileNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SubRipCaptionFile>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SubRipCaptionFile;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:SubRipCaptionFile", readonly [], false];
constructor(fileContents: string) { super(_SubRipCaptionFileProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SubRipCaptionFileNative.prototype, _SubRipCaptionFileProxy);
export namespace _SubRipCaptionFileFactory { export function implement(args: [fileContents: string], implementation: {}): SubRipCaptionFile {
return constructProxy(_SubRipCaptionFileProxy, args, implementation) as SubRipCaptionFile; } }
const _SubRipCaptionFileBinding = _flaxProxyFactory(_SubRipCaptionFileFactory, _SubRipCaptionFileNative) as unknown as typeof _SubRipCaptionFileFactory & (new(fileContents: string) => _SubRipCaptionFileNative);
export const SubRipCaptionFile: typeof _SubRipCaptionFileBinding & _FlaxInstanceType<SubRipCaptionFile> & _FlaxDartType<SubRipCaptionFile, readonly ["class", "flax.video/video#type:SubRipCaptionFile", readonly [], false]> = _flaxBindInstanceType<SubRipCaptionFile, typeof _SubRipCaptionFileBinding>(_SubRipCaptionFileBinding, "flax.video/video#type:SubRipCaptionFile", ["flax.video/video#type:ClosedCaptionFile","dart:core::Object"]) as typeof _SubRipCaptionFileBinding & _FlaxInstanceType<SubRipCaptionFile> & _FlaxDartType<SubRipCaptionFile, readonly ["class", "flax.video/video#type:SubRipCaptionFile", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "captions" | "fileContents" | "__flaxBound:package:video_player/src/sub_rip.dart::SubRipCaptionFile" | "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile";
