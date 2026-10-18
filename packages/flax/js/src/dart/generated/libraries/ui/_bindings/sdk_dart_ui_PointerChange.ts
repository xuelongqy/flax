// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerChange extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::PointerChange">, Readonly<{ "__flaxBound:dart:ui::PointerChange": readonly [] }> { readonly __PointerChange: unique symbol;
readonly [_flaxDartTypeValue]: PointerChange;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:PointerChange", ["cancel","add","remove","hover","down","move","up","panZoomStart","panZoomUpdate","panZoomEnd"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PointerChange_api = {
cancel: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "cancel"),
add: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "add"),
remove: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "remove"),
hover: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "hover"),
down: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "down"),
move: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "move"),
up: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "up"),
panZoomStart: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "panZoomStart"),
panZoomUpdate: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "panZoomUpdate"),
panZoomEnd: enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "panZoomEnd"),
values: Object.freeze([enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "cancel"), enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "add"), enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "remove"), enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "hover"), enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "down"), enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "move"), enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "up"), enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "panZoomStart"), enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "panZoomUpdate"), enumValue<PointerChange>("flax.core/sdk_dart_ui#type:PointerChange", "panZoomEnd")]),
};
export const PointerChange = Object.freeze(_flaxBindInstanceType<PointerChange, typeof _flaxEnum_PointerChange_api>(_flaxEnum_PointerChange_api, "flax.core/sdk_dart_ui#type:PointerChange", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PointerChange_api & _FlaxInstanceType<PointerChange> & _FlaxDartType<PointerChange, readonly ["class", "flax.core/sdk_dart_ui#type:PointerChange", readonly [], false]>);
