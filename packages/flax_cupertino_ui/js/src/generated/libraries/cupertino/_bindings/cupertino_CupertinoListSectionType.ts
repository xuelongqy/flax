// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoListSectionType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/list_section.dart::CupertinoListSectionType">, Readonly<{ "__flaxBound:package:cupertino_ui/src/list_section.dart::CupertinoListSectionType": readonly [] }> { readonly __CupertinoListSectionType: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoListSectionType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.cupertino/cupertino#type:CupertinoListSectionType", ["base","insetGrouped"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_CupertinoListSectionType_api = {
base: enumValue<CupertinoListSectionType>("flax.cupertino/cupertino#type:CupertinoListSectionType", "base"),
insetGrouped: enumValue<CupertinoListSectionType>("flax.cupertino/cupertino#type:CupertinoListSectionType", "insetGrouped"),
values: Object.freeze([enumValue<CupertinoListSectionType>("flax.cupertino/cupertino#type:CupertinoListSectionType", "base"), enumValue<CupertinoListSectionType>("flax.cupertino/cupertino#type:CupertinoListSectionType", "insetGrouped")]),
};
export const CupertinoListSectionType = Object.freeze(_flaxBindInstanceType<CupertinoListSectionType, typeof _flaxEnum_CupertinoListSectionType_api>(_flaxEnum_CupertinoListSectionType_api, "flax.cupertino/cupertino#type:CupertinoListSectionType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_CupertinoListSectionType_api & _FlaxInstanceType<CupertinoListSectionType> & _FlaxDartType<CupertinoListSectionType, readonly ["class", "flax.cupertino/cupertino#type:CupertinoListSectionType", readonly [], false]>);
