// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioContextConfigFocus extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfigFocus": readonly [] }> { readonly __AudioContextConfigFocus: unique symbol;
readonly [_flaxDartTypeValue]: AudioContextConfigFocus;
readonly name: string;
readonly index: number;

}
defineEnum("flax.audio/audio#type:AudioContextConfigFocus", ["gain","duckOthers","mixWithOthers"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AudioContextConfigFocus_api = {
gain: enumValue<AudioContextConfigFocus>("flax.audio/audio#type:AudioContextConfigFocus", "gain"),
duckOthers: enumValue<AudioContextConfigFocus>("flax.audio/audio#type:AudioContextConfigFocus", "duckOthers"),
mixWithOthers: enumValue<AudioContextConfigFocus>("flax.audio/audio#type:AudioContextConfigFocus", "mixWithOthers"),
values: Object.freeze([enumValue<AudioContextConfigFocus>("flax.audio/audio#type:AudioContextConfigFocus", "gain"), enumValue<AudioContextConfigFocus>("flax.audio/audio#type:AudioContextConfigFocus", "duckOthers"), enumValue<AudioContextConfigFocus>("flax.audio/audio#type:AudioContextConfigFocus", "mixWithOthers")]),
};
export const AudioContextConfigFocus = Object.freeze(_flaxBindInstanceType<AudioContextConfigFocus, typeof _flaxEnum_AudioContextConfigFocus_api>(_flaxEnum_AudioContextConfigFocus_api, "flax.audio/audio#type:AudioContextConfigFocus", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AudioContextConfigFocus_api & _FlaxInstanceType<AudioContextConfigFocus> & _FlaxDartType<AudioContextConfigFocus, readonly ["class", "flax.audio/audio#type:AudioContextConfigFocus", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfigFocus";
