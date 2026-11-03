// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlayerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/player_mode.dart::PlayerMode">, Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/player_mode.dart::PlayerMode": readonly [] }> { readonly __PlayerMode: unique symbol;
readonly [_flaxDartTypeValue]: PlayerMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.audio/audio#type:PlayerMode", ["mediaPlayer","lowLatency"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PlayerMode_api = {
mediaPlayer: enumValue<PlayerMode>("flax.audio/audio#type:PlayerMode", "mediaPlayer"),
lowLatency: enumValue<PlayerMode>("flax.audio/audio#type:PlayerMode", "lowLatency"),
values: Object.freeze([enumValue<PlayerMode>("flax.audio/audio#type:PlayerMode", "mediaPlayer"), enumValue<PlayerMode>("flax.audio/audio#type:PlayerMode", "lowLatency")]),
};
export const PlayerMode = Object.freeze(_flaxBindInstanceType<PlayerMode, typeof _flaxEnum_PlayerMode_api>(_flaxEnum_PlayerMode_api, "flax.audio/audio#type:PlayerMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PlayerMode_api & _FlaxInstanceType<PlayerMode> & _FlaxDartType<PlayerMode, readonly ["class", "flax.audio/audio#type:PlayerMode", readonly [], false]>);
