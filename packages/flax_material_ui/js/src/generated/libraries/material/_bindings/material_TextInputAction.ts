// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface TextInputAction extends DartEnum { readonly __TextInputAction: unique symbol; readonly name: string; readonly index: number; }
defineEnum("flax.material/material#type:TextInputAction", ["none","unspecified","done","go","search","send","next","previous","continueAction","join","route","emergencyCall","newline"]);
const _flaxEnum_TextInputAction_api = {
none: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "none"),
unspecified: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "unspecified"),
done: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "done"),
go: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "go"),
search: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "search"),
send: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "send"),
next: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "next"),
previous: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "previous"),
continueAction: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "continueAction"),
join: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "join"),
route: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "route"),
emergencyCall: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "emergencyCall"),
newline: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "newline"),
values: Object.freeze([enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "none"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "unspecified"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "done"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "go"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "search"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "send"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "next"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "previous"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "continueAction"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "join"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "route"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "emergencyCall"), enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "newline")]),
};
export const TextInputAction = Object.freeze(_flaxBindInstanceType<TextInputAction, typeof _flaxEnum_TextInputAction_api>(_flaxEnum_TextInputAction_api, "flax.material/material#type:TextInputAction", []) as typeof _flaxEnum_TextInputAction_api & _FlaxInstanceType<TextInputAction> & _FlaxDartType<TextInputAction, readonly ["class", "flax.material/material#type:TextInputAction", readonly [], false]>);
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
