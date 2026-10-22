// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { _flaxMemberParameters40, _flaxMemberParameters41, _flaxMemberParameters0, _flaxMemberParameters179 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Tristate extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "value" | "hasConflict" | "merge" | "toBoolOrNull" | "__flaxBound:dart:ui::Tristate">, Readonly<{ "__flaxBound:dart:ui::Tristate": readonly [] }> { readonly __Tristate: unique symbol;
readonly [_flaxDartTypeValue]: Tristate;
readonly name: string;
readonly index: number;

readonly value: number;
hasConflict(other: Tristate): boolean;
merge(other: Tristate): Tristate;
toBoolOrNull(): boolean | null;
}
defineEnum("flax.core/sdk_dart_ui#type:Tristate", ["none","isTrue","isFalse"], {
get value(): number { return invokeTopLevel("flax.core/sdk_dart_ui#function:Tristate.value%3Aget", [this]) as number; },
hasConflict(this: object, other: Tristate): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Tristate.hasConflict%3Acall", [this, other], _flaxMemberParameters41);
return _flaxResult as boolean;
},
merge(this: object, other: Tristate): Tristate {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Tristate.merge%3Acall", [this, other], _flaxMemberParameters41);
return _flaxResult as Tristate;
},
toBoolOrNull(this: object): boolean | null {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Tristate.toBoolOrNull%3Acall", [this], _flaxMemberParameters179);
return _flaxResult as boolean | null;
},
}, ["value"], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_Tristate_api = {
none: enumValue<Tristate>("flax.core/sdk_dart_ui#type:Tristate", "none"),
isTrue: enumValue<Tristate>("flax.core/sdk_dart_ui#type:Tristate", "isTrue"),
isFalse: enumValue<Tristate>("flax.core/sdk_dart_ui#type:Tristate", "isFalse"),
values: Object.freeze([enumValue<Tristate>("flax.core/sdk_dart_ui#type:Tristate", "none"), enumValue<Tristate>("flax.core/sdk_dart_ui#type:Tristate", "isTrue"), enumValue<Tristate>("flax.core/sdk_dart_ui#type:Tristate", "isFalse")]),
};
export const Tristate = Object.freeze(_flaxBindInstanceType<Tristate, typeof _flaxEnum_Tristate_api>(_flaxEnum_Tristate_api, "flax.core/sdk_dart_ui#type:Tristate", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_Tristate_api & _FlaxInstanceType<Tristate> & _FlaxDartType<Tristate, readonly ["class", "flax.core/sdk_dart_ui#type:Tristate", readonly [], false]>);
