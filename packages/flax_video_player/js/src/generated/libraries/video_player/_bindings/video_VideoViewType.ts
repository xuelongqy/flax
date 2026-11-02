// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VideoViewType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoViewType": readonly [] }> { readonly __VideoViewType: unique symbol;
readonly [_flaxDartTypeValue]: VideoViewType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.video/video#type:VideoViewType", ["textureView","platformView"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_VideoViewType_api = {
textureView: enumValue<VideoViewType>("flax.video/video#type:VideoViewType", "textureView"),
platformView: enumValue<VideoViewType>("flax.video/video#type:VideoViewType", "platformView"),
values: Object.freeze([enumValue<VideoViewType>("flax.video/video#type:VideoViewType", "textureView"), enumValue<VideoViewType>("flax.video/video#type:VideoViewType", "platformView")]),
};
export const VideoViewType = Object.freeze(_flaxBindInstanceType<VideoViewType, typeof _flaxEnum_VideoViewType_api>(_flaxEnum_VideoViewType_api, "flax.video/video#type:VideoViewType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_VideoViewType_api & _FlaxInstanceType<VideoViewType> & _FlaxDartType<VideoViewType, readonly ["class", "flax.video/video#type:VideoViewType", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::VideoViewType";
