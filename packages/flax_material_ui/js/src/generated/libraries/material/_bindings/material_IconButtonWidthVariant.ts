// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IconButtonWidthVariant extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/button_style.dart::IconButtonWidthVariant">, Readonly<{ "__flaxBound:package:material_ui/src/button_style.dart::IconButtonWidthVariant": readonly [] }> { readonly __IconButtonWidthVariant: unique symbol;
readonly [_flaxDartTypeValue]: IconButtonWidthVariant;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:IconButtonWidthVariant", ["narrow","standard","wide"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_IconButtonWidthVariant_api = {
narrow: enumValue<IconButtonWidthVariant>("flax.material/material#type:IconButtonWidthVariant", "narrow"),
standard: enumValue<IconButtonWidthVariant>("flax.material/material#type:IconButtonWidthVariant", "standard"),
wide: enumValue<IconButtonWidthVariant>("flax.material/material#type:IconButtonWidthVariant", "wide"),
values: Object.freeze([enumValue<IconButtonWidthVariant>("flax.material/material#type:IconButtonWidthVariant", "narrow"), enumValue<IconButtonWidthVariant>("flax.material/material#type:IconButtonWidthVariant", "standard"), enumValue<IconButtonWidthVariant>("flax.material/material#type:IconButtonWidthVariant", "wide")]),
};
export const IconButtonWidthVariant = Object.freeze(_flaxBindInstanceType<IconButtonWidthVariant, typeof _flaxEnum_IconButtonWidthVariant_api>(_flaxEnum_IconButtonWidthVariant_api, "flax.material/material#type:IconButtonWidthVariant", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_IconButtonWidthVariant_api & _FlaxInstanceType<IconButtonWidthVariant> & _FlaxDartType<IconButtonWidthVariant, readonly ["class", "flax.material/material#type:IconButtonWidthVariant", readonly [], false]>);
