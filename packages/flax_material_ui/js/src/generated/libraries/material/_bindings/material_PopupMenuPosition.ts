// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopupMenuPosition extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/popup_menu_theme.dart::PopupMenuPosition">, Readonly<{ "__flaxBound:package:material_ui/src/popup_menu_theme.dart::PopupMenuPosition": readonly [] }> { readonly __PopupMenuPosition: unique symbol;
readonly [_flaxDartTypeValue]: PopupMenuPosition;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:PopupMenuPosition", ["over","under"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_PopupMenuPosition_api = {
over: enumValue<PopupMenuPosition>("flax.material/material#type:PopupMenuPosition", "over"),
under: enumValue<PopupMenuPosition>("flax.material/material#type:PopupMenuPosition", "under"),
values: Object.freeze([enumValue<PopupMenuPosition>("flax.material/material#type:PopupMenuPosition", "over"), enumValue<PopupMenuPosition>("flax.material/material#type:PopupMenuPosition", "under")]),
};
export const PopupMenuPosition = Object.freeze(_flaxBindInstanceType<PopupMenuPosition, typeof _flaxEnum_PopupMenuPosition_api>(_flaxEnum_PopupMenuPosition_api, "flax.material/material#type:PopupMenuPosition", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_PopupMenuPosition_api & _FlaxInstanceType<PopupMenuPosition> & _FlaxDartType<PopupMenuPosition, readonly ["class", "flax.material/material#type:PopupMenuPosition", readonly [], false]>);
