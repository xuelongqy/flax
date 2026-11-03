// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ReleaseMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:audioplayers_platform_interface/src/api/release_mode.dart::ReleaseMode">, Readonly<{ "__flaxBound:package:audioplayers_platform_interface/src/api/release_mode.dart::ReleaseMode": readonly [] }> { readonly __ReleaseMode: unique symbol;
readonly [_flaxDartTypeValue]: ReleaseMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.audio/audio#type:ReleaseMode", ["release","loop","stop"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ReleaseMode_api = {
release: enumValue<ReleaseMode>("flax.audio/audio#type:ReleaseMode", "release"),
loop: enumValue<ReleaseMode>("flax.audio/audio#type:ReleaseMode", "loop"),
stop: enumValue<ReleaseMode>("flax.audio/audio#type:ReleaseMode", "stop"),
values: Object.freeze([enumValue<ReleaseMode>("flax.audio/audio#type:ReleaseMode", "release"), enumValue<ReleaseMode>("flax.audio/audio#type:ReleaseMode", "loop"), enumValue<ReleaseMode>("flax.audio/audio#type:ReleaseMode", "stop")]),
};
export const ReleaseMode = Object.freeze(_flaxBindInstanceType<ReleaseMode, typeof _flaxEnum_ReleaseMode_api>(_flaxEnum_ReleaseMode_api, "flax.audio/audio#type:ReleaseMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ReleaseMode_api & _FlaxInstanceType<ReleaseMode> & _FlaxDartType<ReleaseMode, readonly ["class", "flax.audio/audio#type:ReleaseMode", readonly [], false]>);
