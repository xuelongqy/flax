// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioEventType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_event.dart::AudioEventType">, Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/audio_event.dart::AudioEventType": readonly [] }> { readonly __AudioEventType: unique symbol;
readonly [_flaxDartTypeValue]: AudioEventType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.audio/audio#type:AudioEventType", ["log","duration","seekComplete","complete","prepared"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AudioEventType_api = {
log: enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "log"),
duration: enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "duration"),
seekComplete: enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "seekComplete"),
complete: enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "complete"),
prepared: enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "prepared"),
values: Object.freeze([enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "log"), enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "duration"), enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "seekComplete"), enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "complete"), enumValue<AudioEventType>("flax.audio/audio#type:AudioEventType", "prepared")]),
};
export const AudioEventType = Object.freeze(_flaxBindInstanceType<AudioEventType, typeof _flaxEnum_AudioEventType_api>(_flaxEnum_AudioEventType_api, "flax.audio/audio#type:AudioEventType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AudioEventType_api & _FlaxInstanceType<AudioEventType> & _FlaxDartType<AudioEventType, readonly ["class", "flax.audio/audio#type:AudioEventType", readonly [], false]>);
