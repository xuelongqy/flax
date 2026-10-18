// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoUserInterfaceLevelData extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/cupertino/interface_level.dart::CupertinoUserInterfaceLevelData">, Readonly<{ "__flaxBound:package:flutter/src/cupertino/interface_level.dart::CupertinoUserInterfaceLevelData": readonly [] }> { readonly __CupertinoUserInterfaceLevelData: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoUserInterfaceLevelData;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_cupertino#type:CupertinoUserInterfaceLevelData", ["base","elevated"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_CupertinoUserInterfaceLevelData_api = {
base: enumValue<CupertinoUserInterfaceLevelData>("flax.core/sdk_cupertino#type:CupertinoUserInterfaceLevelData", "base"),
elevated: enumValue<CupertinoUserInterfaceLevelData>("flax.core/sdk_cupertino#type:CupertinoUserInterfaceLevelData", "elevated"),
values: Object.freeze([enumValue<CupertinoUserInterfaceLevelData>("flax.core/sdk_cupertino#type:CupertinoUserInterfaceLevelData", "base"), enumValue<CupertinoUserInterfaceLevelData>("flax.core/sdk_cupertino#type:CupertinoUserInterfaceLevelData", "elevated")]),
};
export const CupertinoUserInterfaceLevelData = Object.freeze(_flaxBindInstanceType<CupertinoUserInterfaceLevelData, typeof _flaxEnum_CupertinoUserInterfaceLevelData_api>(_flaxEnum_CupertinoUserInterfaceLevelData_api, "flax.core/sdk_cupertino#type:CupertinoUserInterfaceLevelData", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_CupertinoUserInterfaceLevelData_api & _FlaxInstanceType<CupertinoUserInterfaceLevelData> & _FlaxDartType<CupertinoUserInterfaceLevelData, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoUserInterfaceLevelData", readonly [], false]>);
