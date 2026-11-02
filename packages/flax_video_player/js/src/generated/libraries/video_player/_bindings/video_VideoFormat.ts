// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VideoFormat extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoFormat": readonly [] }> { readonly __VideoFormat: unique symbol;
readonly [_flaxDartTypeValue]: VideoFormat;
readonly name: string;
readonly index: number;

}
defineEnum("flax.video/video#type:VideoFormat", ["dash","hls","ss","other"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_VideoFormat_api = {
dash: enumValue<VideoFormat>("flax.video/video#type:VideoFormat", "dash"),
hls: enumValue<VideoFormat>("flax.video/video#type:VideoFormat", "hls"),
ss: enumValue<VideoFormat>("flax.video/video#type:VideoFormat", "ss"),
other: enumValue<VideoFormat>("flax.video/video#type:VideoFormat", "other"),
values: Object.freeze([enumValue<VideoFormat>("flax.video/video#type:VideoFormat", "dash"), enumValue<VideoFormat>("flax.video/video#type:VideoFormat", "hls"), enumValue<VideoFormat>("flax.video/video#type:VideoFormat", "ss"), enumValue<VideoFormat>("flax.video/video#type:VideoFormat", "other")]),
};
export const VideoFormat = Object.freeze(_flaxBindInstanceType<VideoFormat, typeof _flaxEnum_VideoFormat_api>(_flaxEnum_VideoFormat_api, "flax.video/video#type:VideoFormat", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_VideoFormat_api & _FlaxInstanceType<VideoFormat> & _FlaxDartType<VideoFormat, readonly ["class", "flax.video/video#type:VideoFormat", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoFormat";
