// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeyEventType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "label" | "__flaxBound:dart:ui::KeyEventType">, Readonly<{ "__flaxBound:dart:ui::KeyEventType": readonly [] }> { readonly __KeyEventType: unique symbol;
readonly [_flaxDartTypeValue]: KeyEventType;
readonly name: string;
readonly index: number;

readonly label: string;
}
defineEnum("flax.core/sdk_dart_ui#type:KeyEventType", ["down","up","repeat"], {
get label(): string { return invokeTopLevel("flax.core/sdk_dart_ui#function:KeyEventType.label%3Aget", [this]) as string; },
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_KeyEventType_api = {
down: enumValue<KeyEventType>("flax.core/sdk_dart_ui#type:KeyEventType", "down"),
up: enumValue<KeyEventType>("flax.core/sdk_dart_ui#type:KeyEventType", "up"),
repeat: enumValue<KeyEventType>("flax.core/sdk_dart_ui#type:KeyEventType", "repeat"),
values: Object.freeze([enumValue<KeyEventType>("flax.core/sdk_dart_ui#type:KeyEventType", "down"), enumValue<KeyEventType>("flax.core/sdk_dart_ui#type:KeyEventType", "up"), enumValue<KeyEventType>("flax.core/sdk_dart_ui#type:KeyEventType", "repeat")]),
};
export const KeyEventType = Object.freeze(_flaxBindInstanceType<KeyEventType, typeof _flaxEnum_KeyEventType_api>(_flaxEnum_KeyEventType_api, "flax.core/sdk_dart_ui#type:KeyEventType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_KeyEventType_api & _FlaxInstanceType<KeyEventType> & _FlaxDartType<KeyEventType, readonly ["class", "flax.core/sdk_dart_ui#type:KeyEventType", readonly [], false]>);
