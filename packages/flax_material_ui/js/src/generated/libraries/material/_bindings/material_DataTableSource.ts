// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/material-ui/_bindings/material_DataRow';
import '@flax/material-ui/_bindings/material_DataRow';
import { _flaxMemberParameters87, _flaxMemberParameters4, _flaxMemberParameters55 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DataTableSource extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:material_ui/src/data_table_source.dart::DataTableSource": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __DataTableSource: unique symbol;
readonly [_flaxDartTypeValue]: DataTableSource;

}
defineObject("flax.material/material#type:DataTableSource", ["hasListeners","rowCount","isRowCountApproximate","selectedRowCount"], [], _flaxBindingMethods("flax.material/material#type:DataTableSource", "object", {"getRow":_flaxMemberParameters87}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _DataTableSourceProxy = {type: "flax.material/material#type:DataTableSource", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"addListener":_flaxMemberParameters55,"removeListener":_flaxMemberParameters55,"dispose":_flaxMemberParameters4,"getRow":_flaxMemberParameters87}, getters: ["rowCount","isRowCountApproximate","selectedRowCount","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:hasListeners","addListener","removeListener","dispose"]} as const;
export interface DataTableSource {
readonly [_flaxDartTypeValue]: DataTableSource;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get hasListeners(): boolean;
}
export abstract class DataTableSource extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataTableSource>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DataTableSource;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:DataTableSource", readonly [], false];
constructor() { super(_DataTableSourceProxy, Array.from(arguments)); }
abstract getRow(index: number): upstream2.DataRow | null;
abstract get rowCount(): number;
abstract get isRowCountApproximate(): boolean;
abstract get selectedRowCount(): number;
}
_flaxDefineProxyBase(DataTableSource.prototype, _DataTableSourceProxy);
export namespace DataTableSource { export function implement(args: [], implementation: {getRow: ((index: number) => Readonly<{ "__flaxBound:package:material_ui/src/data_table.dart::DataRow": readonly [] }> | null); get rowCount(): number; get isRowCountApproximate(): boolean; get selectedRowCount(): number}): DataTableSource {
return constructProxy(_DataTableSourceProxy, args, implementation) as DataTableSource; } }
_flaxBindInstanceType<DataTableSource, typeof DataTableSource>(DataTableSource, "flax.material/material#type:DataTableSource", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "rowCount" | "isRowCountApproximate" | "selectedRowCount" | "addListener" | "removeListener" | "dispose" | "getRow" | "__flaxBound:package:material_ui/src/data_table_source.dart::DataTableSource" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
