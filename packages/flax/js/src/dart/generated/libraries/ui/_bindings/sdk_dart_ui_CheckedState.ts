// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { _flaxMemberParameters40, _flaxMemberParameters41 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CheckedState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "value" | "hasConflict" | "merge" | "__flaxBound:dart:ui::CheckedState">, Readonly<{ "__flaxBound:dart:ui::CheckedState": readonly [] }> { readonly __CheckedState: unique symbol;
readonly [_flaxDartTypeValue]: CheckedState;
readonly name: string;
readonly index: number;

readonly value: number;
hasConflict(other: CheckedState): boolean;
merge(other: CheckedState): CheckedState;
}
defineEnum("flax.core/sdk_dart_ui#type:CheckedState", ["none","isTrue","isFalse","mixed"], {
get value(): number { return invokeTopLevel("flax.core/sdk_dart_ui#function:CheckedState.value%3Aget", [this]) as number; },
hasConflict(this: object, other: CheckedState): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:CheckedState.hasConflict%3Acall", [this, other], _flaxMemberParameters41);
return _flaxResult as boolean;
},
merge(this: object, other: CheckedState): CheckedState {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:CheckedState.merge%3Acall", [this, other], _flaxMemberParameters41);
return _flaxResult as CheckedState;
},
}, ["value"], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_CheckedState_api = {
none: enumValue<CheckedState>("flax.core/sdk_dart_ui#type:CheckedState", "none"),
isTrue: enumValue<CheckedState>("flax.core/sdk_dart_ui#type:CheckedState", "isTrue"),
isFalse: enumValue<CheckedState>("flax.core/sdk_dart_ui#type:CheckedState", "isFalse"),
mixed: enumValue<CheckedState>("flax.core/sdk_dart_ui#type:CheckedState", "mixed"),
values: Object.freeze([enumValue<CheckedState>("flax.core/sdk_dart_ui#type:CheckedState", "none"), enumValue<CheckedState>("flax.core/sdk_dart_ui#type:CheckedState", "isTrue"), enumValue<CheckedState>("flax.core/sdk_dart_ui#type:CheckedState", "isFalse"), enumValue<CheckedState>("flax.core/sdk_dart_ui#type:CheckedState", "mixed")]),
};
export const CheckedState = Object.freeze(_flaxBindInstanceType<CheckedState, typeof _flaxEnum_CheckedState_api>(_flaxEnum_CheckedState_api, "flax.core/sdk_dart_ui#type:CheckedState", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_CheckedState_api & _FlaxInstanceType<CheckedState> & _FlaxDartType<CheckedState, readonly ["class", "flax.core/sdk_dart_ui#type:CheckedState", readonly [], false]>);
