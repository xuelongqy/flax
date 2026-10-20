// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SnackBarClosedReason extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/snack_bar.dart::SnackBarClosedReason">, Readonly<{ "__flaxBound:package:material_ui/src/snack_bar.dart::SnackBarClosedReason": readonly [] }> { readonly __SnackBarClosedReason: unique symbol;
readonly [_flaxDartTypeValue]: SnackBarClosedReason;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:SnackBarClosedReason", ["action","dismiss","swipe","hide","remove","timeout"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SnackBarClosedReason_api = {
action: enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "action"),
dismiss: enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "dismiss"),
swipe: enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "swipe"),
hide: enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "hide"),
remove: enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "remove"),
timeout: enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "timeout"),
values: Object.freeze([enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "action"), enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "dismiss"), enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "swipe"), enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "hide"), enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "remove"), enumValue<SnackBarClosedReason>("flax.material/material#type:SnackBarClosedReason", "timeout")]),
};
export const SnackBarClosedReason = Object.freeze(_flaxBindInstanceType<SnackBarClosedReason, typeof _flaxEnum_SnackBarClosedReason_api>(_flaxEnum_SnackBarClosedReason_api, "flax.material/material#type:SnackBarClosedReason", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SnackBarClosedReason_api & _FlaxInstanceType<SnackBarClosedReason> & _FlaxDartType<SnackBarClosedReason, readonly ["class", "flax.material/material#type:SnackBarClosedReason", readonly [], false]>);
