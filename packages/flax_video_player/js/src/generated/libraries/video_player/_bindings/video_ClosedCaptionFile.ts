// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/video-player/_bindings/video_Caption';
import '@flax/video-player/_bindings/video_Caption';
import { _flaxMemberParameters0 } from "@flax/video-player/_bindings/video.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClosedCaptionFile extends Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [] }> { readonly __ClosedCaptionFile: unique symbol;
readonly [_flaxDartTypeValue]: ClosedCaptionFile;

readonly captions: DartList<upstream0.Caption>;
}
defineObject("flax.video/video#type:ClosedCaptionFile", ["captions"], [], _flaxBindingMethods("flax.video/video#type:ClosedCaptionFile", "object", {}, {}), []);
const _ClosedCaptionFileProxy = {type: "flax.video/video#type:ClosedCaptionFile", parameters: _flaxMemberParameters0, constructors: {}, methods: {}, getters: ["captions"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ClosedCaptionFileFactory { export function implement(args: [], implementation: {get captions(): DartListInput<upstream0.Caption, Readonly<{ "__flaxBound:package:video_player/src/closed_caption_file.dart::Caption": readonly [] }>>}): ClosedCaptionFile {
return constructProxy(_ClosedCaptionFileProxy, args, implementation) as ClosedCaptionFile; } }
export const ClosedCaptionFile: typeof _ClosedCaptionFileFactory & _FlaxInstanceType<ClosedCaptionFile> & _FlaxDartType<ClosedCaptionFile, readonly ["class", "flax.video/video#type:ClosedCaptionFile", readonly [], false]> = _flaxBindInstanceType<ClosedCaptionFile, typeof _ClosedCaptionFileFactory>(_ClosedCaptionFileFactory, "flax.video/video#type:ClosedCaptionFile", ["dart:core::Object"]) as typeof _ClosedCaptionFileFactory & _FlaxInstanceType<ClosedCaptionFile> & _FlaxDartType<ClosedCaptionFile, readonly ["class", "flax.video/video#type:ClosedCaptionFile", readonly [], false]>;
