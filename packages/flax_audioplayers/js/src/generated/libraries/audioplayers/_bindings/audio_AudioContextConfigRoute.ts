// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioContextConfigRoute extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfigRoute": readonly [] }> { readonly __AudioContextConfigRoute: unique symbol;
readonly [_flaxDartTypeValue]: AudioContextConfigRoute;
readonly name: string;
readonly index: number;

}
defineEnum("flax.audio/audio#type:AudioContextConfigRoute", ["system","earpiece","speaker"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AudioContextConfigRoute_api = {
system: enumValue<AudioContextConfigRoute>("flax.audio/audio#type:AudioContextConfigRoute", "system"),
earpiece: enumValue<AudioContextConfigRoute>("flax.audio/audio#type:AudioContextConfigRoute", "earpiece"),
speaker: enumValue<AudioContextConfigRoute>("flax.audio/audio#type:AudioContextConfigRoute", "speaker"),
values: Object.freeze([enumValue<AudioContextConfigRoute>("flax.audio/audio#type:AudioContextConfigRoute", "system"), enumValue<AudioContextConfigRoute>("flax.audio/audio#type:AudioContextConfigRoute", "earpiece"), enumValue<AudioContextConfigRoute>("flax.audio/audio#type:AudioContextConfigRoute", "speaker")]),
};
export const AudioContextConfigRoute = Object.freeze(_flaxBindInstanceType<AudioContextConfigRoute, typeof _flaxEnum_AudioContextConfigRoute_api>(_flaxEnum_AudioContextConfigRoute_api, "flax.audio/audio#type:AudioContextConfigRoute", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AudioContextConfigRoute_api & _FlaxInstanceType<AudioContextConfigRoute> & _FlaxDartType<AudioContextConfigRoute, readonly ["class", "flax.audio/audio#type:AudioContextConfigRoute", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context_config.dart::AudioContextConfigRoute";
