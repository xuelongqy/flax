// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RepeatMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/repeating_animation_builder.dart::RepeatMode">, Readonly<{ "__flaxBound:package:flutter/src/widgets/repeating_animation_builder.dart::RepeatMode": readonly [] }> { readonly __RepeatMode: unique symbol;
readonly [_flaxDartTypeValue]: RepeatMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:RepeatMode", ["restart","reverse"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_RepeatMode_api = {
restart: enumValue<RepeatMode>("flax.core/sdk_widgets#type:RepeatMode", "restart"),
reverse: enumValue<RepeatMode>("flax.core/sdk_widgets#type:RepeatMode", "reverse"),
values: Object.freeze([enumValue<RepeatMode>("flax.core/sdk_widgets#type:RepeatMode", "restart"), enumValue<RepeatMode>("flax.core/sdk_widgets#type:RepeatMode", "reverse")]),
};
export const RepeatMode = Object.freeze(_flaxBindInstanceType<RepeatMode, typeof _flaxEnum_RepeatMode_api>(_flaxEnum_RepeatMode_api, "flax.core/sdk_widgets#type:RepeatMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_RepeatMode_api & _FlaxInstanceType<RepeatMode> & _FlaxDartType<RepeatMode, readonly ["class", "flax.core/sdk_widgets#type:RepeatMode", readonly [], false]>);
