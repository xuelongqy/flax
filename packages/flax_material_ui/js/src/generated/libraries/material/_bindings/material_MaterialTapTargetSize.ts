// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialTapTargetSize extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/theme_data.dart::MaterialTapTargetSize">, Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::MaterialTapTargetSize": readonly [] }> { readonly __MaterialTapTargetSize: unique symbol;
readonly [_flaxDartTypeValue]: MaterialTapTargetSize;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:MaterialTapTargetSize", ["padded","shrinkWrap"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_MaterialTapTargetSize_api = {
padded: enumValue<MaterialTapTargetSize>("flax.material/material#type:MaterialTapTargetSize", "padded"),
shrinkWrap: enumValue<MaterialTapTargetSize>("flax.material/material#type:MaterialTapTargetSize", "shrinkWrap"),
values: Object.freeze([enumValue<MaterialTapTargetSize>("flax.material/material#type:MaterialTapTargetSize", "padded"), enumValue<MaterialTapTargetSize>("flax.material/material#type:MaterialTapTargetSize", "shrinkWrap")]),
};
export const MaterialTapTargetSize = Object.freeze(_flaxBindInstanceType<MaterialTapTargetSize, typeof _flaxEnum_MaterialTapTargetSize_api>(_flaxEnum_MaterialTapTargetSize_api, "flax.material/material#type:MaterialTapTargetSize", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_MaterialTapTargetSize_api & _FlaxInstanceType<MaterialTapTargetSize> & _FlaxDartType<MaterialTapTargetSize, readonly ["class", "flax.material/material#type:MaterialTapTargetSize", readonly [], false]>);
