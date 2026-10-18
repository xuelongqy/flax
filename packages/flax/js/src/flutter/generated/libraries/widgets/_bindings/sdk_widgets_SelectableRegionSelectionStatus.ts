// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectableRegionSelectionStatus extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionSelectionStatus">, Readonly<{ "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionSelectionStatus": readonly [] }> { readonly __SelectableRegionSelectionStatus: unique symbol;
readonly [_flaxDartTypeValue]: SelectableRegionSelectionStatus;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:SelectableRegionSelectionStatus", ["changing","finalized"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_SelectableRegionSelectionStatus_api = {
changing: enumValue<SelectableRegionSelectionStatus>("flax.core/sdk_widgets#type:SelectableRegionSelectionStatus", "changing"),
finalized: enumValue<SelectableRegionSelectionStatus>("flax.core/sdk_widgets#type:SelectableRegionSelectionStatus", "finalized"),
values: Object.freeze([enumValue<SelectableRegionSelectionStatus>("flax.core/sdk_widgets#type:SelectableRegionSelectionStatus", "changing"), enumValue<SelectableRegionSelectionStatus>("flax.core/sdk_widgets#type:SelectableRegionSelectionStatus", "finalized")]),
};
export const SelectableRegionSelectionStatus = Object.freeze(_flaxBindInstanceType<SelectableRegionSelectionStatus, typeof _flaxEnum_SelectableRegionSelectionStatus_api>(_flaxEnum_SelectableRegionSelectionStatus_api, "flax.core/sdk_widgets#type:SelectableRegionSelectionStatus", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_SelectableRegionSelectionStatus_api & _FlaxInstanceType<SelectableRegionSelectionStatus> & _FlaxDartType<SelectableRegionSelectionStatus, readonly ["class", "flax.core/sdk_widgets#type:SelectableRegionSelectionStatus", readonly [], false]>);
