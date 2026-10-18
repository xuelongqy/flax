// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialBannerClosedReason extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/material/banner.dart::MaterialBannerClosedReason">, Readonly<{ "__flaxBound:package:flutter/src/material/banner.dart::MaterialBannerClosedReason": readonly [] }> { readonly __MaterialBannerClosedReason: unique symbol;
readonly [_flaxDartTypeValue]: MaterialBannerClosedReason;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_material#type:MaterialBannerClosedReason", ["dismiss","swipe","hide","remove"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_MaterialBannerClosedReason_api = {
dismiss: enumValue<MaterialBannerClosedReason>("flax.core/sdk_material#type:MaterialBannerClosedReason", "dismiss"),
swipe: enumValue<MaterialBannerClosedReason>("flax.core/sdk_material#type:MaterialBannerClosedReason", "swipe"),
hide: enumValue<MaterialBannerClosedReason>("flax.core/sdk_material#type:MaterialBannerClosedReason", "hide"),
remove: enumValue<MaterialBannerClosedReason>("flax.core/sdk_material#type:MaterialBannerClosedReason", "remove"),
values: Object.freeze([enumValue<MaterialBannerClosedReason>("flax.core/sdk_material#type:MaterialBannerClosedReason", "dismiss"), enumValue<MaterialBannerClosedReason>("flax.core/sdk_material#type:MaterialBannerClosedReason", "swipe"), enumValue<MaterialBannerClosedReason>("flax.core/sdk_material#type:MaterialBannerClosedReason", "hide"), enumValue<MaterialBannerClosedReason>("flax.core/sdk_material#type:MaterialBannerClosedReason", "remove")]),
};
export const MaterialBannerClosedReason = Object.freeze(_flaxBindInstanceType<MaterialBannerClosedReason, typeof _flaxEnum_MaterialBannerClosedReason_api>(_flaxEnum_MaterialBannerClosedReason_api, "flax.core/sdk_material#type:MaterialBannerClosedReason", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_MaterialBannerClosedReason_api & _FlaxInstanceType<MaterialBannerClosedReason> & _FlaxDartType<MaterialBannerClosedReason, readonly ["class", "flax.core/sdk_material#type:MaterialBannerClosedReason", readonly [], false]>);
