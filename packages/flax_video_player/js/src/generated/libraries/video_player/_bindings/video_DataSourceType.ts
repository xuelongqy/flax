// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DataSourceType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DataSourceType": readonly [] }> { readonly __DataSourceType: unique symbol;
readonly [_flaxDartTypeValue]: DataSourceType;
readonly name: string;
readonly index: number;

}
defineEnum("flax.video/video#type:DataSourceType", ["asset","network","file","contentUri"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_DataSourceType_api = {
asset: enumValue<DataSourceType>("flax.video/video#type:DataSourceType", "asset"),
network: enumValue<DataSourceType>("flax.video/video#type:DataSourceType", "network"),
file: enumValue<DataSourceType>("flax.video/video#type:DataSourceType", "file"),
contentUri: enumValue<DataSourceType>("flax.video/video#type:DataSourceType", "contentUri"),
values: Object.freeze([enumValue<DataSourceType>("flax.video/video#type:DataSourceType", "asset"), enumValue<DataSourceType>("flax.video/video#type:DataSourceType", "network"), enumValue<DataSourceType>("flax.video/video#type:DataSourceType", "file"), enumValue<DataSourceType>("flax.video/video#type:DataSourceType", "contentUri")]),
};
export const DataSourceType = Object.freeze(_flaxBindInstanceType<DataSourceType, typeof _flaxEnum_DataSourceType_api>(_flaxEnum_DataSourceType_api, "flax.video/video#type:DataSourceType", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_DataSourceType_api & _FlaxInstanceType<DataSourceType> & _FlaxDartType<DataSourceType, readonly ["class", "flax.video/video#type:DataSourceType", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DataSourceType";
