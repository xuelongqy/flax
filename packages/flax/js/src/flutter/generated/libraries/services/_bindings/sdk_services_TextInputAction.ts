// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextInputAction extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/services/text_input.dart::TextInputAction">, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputAction": readonly [] }> { readonly __TextInputAction: unique symbol;
readonly [_flaxDartTypeValue]: TextInputAction;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_services#type:TextInputAction", ["none","unspecified","done","go","search","send","next","previous","continueAction","join","route","emergencyCall","newline"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_TextInputAction_api = {
none: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "none"),
unspecified: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "unspecified"),
done: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "done"),
go: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "go"),
search: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "search"),
send: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "send"),
next: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "next"),
previous: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "previous"),
continueAction: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "continueAction"),
join: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "join"),
route: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "route"),
emergencyCall: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "emergencyCall"),
newline: enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "newline"),
values: Object.freeze([enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "none"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "unspecified"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "done"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "go"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "search"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "send"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "next"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "previous"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "continueAction"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "join"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "route"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "emergencyCall"), enumValue<TextInputAction>("flax.core/sdk_services#type:TextInputAction", "newline")]),
};
export const TextInputAction = Object.freeze(_flaxBindInstanceType<TextInputAction, typeof _flaxEnum_TextInputAction_api>(_flaxEnum_TextInputAction_api, "flax.core/sdk_services#type:TextInputAction", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_TextInputAction_api & _FlaxInstanceType<TextInputAction> & _FlaxDartType<TextInputAction, readonly ["class", "flax.core/sdk_services#type:TextInputAction", readonly [], false]>);
