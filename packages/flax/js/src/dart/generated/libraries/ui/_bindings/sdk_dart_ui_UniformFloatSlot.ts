// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_UniformType';
import { _flaxMemberParameters60 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UniformFloatSlot extends Omit<upstream0.UniformType, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:ui::UniformFloatSlot": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::UniformType": readonly [] }> { readonly __UniformFloatSlot: unique symbol;
readonly [_flaxDartTypeValue]: UniformFloatSlot;

readonly shaderIndex: number;
readonly name: string;
readonly index: number;
set(val: number): void;
}
defineObject("flax.core/sdk_dart_ui#type:UniformFloatSlot", ["shaderIndex","name","index"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:UniformFloatSlot", "object", {"set":_flaxMemberParameters60}, {}), []);
export const UniformFloatSlot: object & _FlaxInstanceType<UniformFloatSlot> & _FlaxDartType<UniformFloatSlot, readonly ["class", "flax.core/sdk_dart_ui#type:UniformFloatSlot", readonly [], false]> = _flaxBindInstanceType<UniformFloatSlot, object>({}, "flax.core/sdk_dart_ui#type:UniformFloatSlot", ["flax.core/sdk_dart_ui#type:UniformType","dart:core::Object"]) as object & _FlaxInstanceType<UniformFloatSlot> & _FlaxDartType<UniformFloatSlot, readonly ["class", "flax.core/sdk_dart_ui#type:UniformFloatSlot", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "shaderIndex" | "name" | "index" | "set" | "__flaxBound:dart:ui::UniformFloatSlot" | "__flaxBound:dart:ui::UniformType";
