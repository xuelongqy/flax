// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_DataCell';
import '@flax/flutter/material/_bindings/sdk_material_DataCell';
const _flaxMemberParameters0 = [{"name":"key"},{"name":"selected"},{"name":"onSelectChanged"},{"name":"onLongPress"},{"name":"onHover"},{"name":"color"},{"name":"mouseCursor"},{"name":"cells","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DataRow extends Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataRow": readonly [] }> { readonly __DataRow: unique symbol;
readonly [_flaxDartTypeValue]: DataRow;

}
defineObject("flax.core/sdk_material#type:DataRow", ["key","onSelectChanged","onLongPress","onHover","selected","cells","color","mouseCursor"], [], _flaxBindingMethods("flax.core/sdk_material#type:DataRow", "object", {}, {}), []);
const _DataRowProxy = {type: "flax.core/sdk_material#type:DataRow", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["key","onSelectChanged","onLongPress","onHover","selected","cells","color","mouseCursor"], setters: [], contextMembers: [], superMembers: ["get:key","get:onSelectChanged","get:onLongPress","get:onHover","get:selected","get:cells","get:color","get:mouseCursor"]} as const;
export interface DataRow {
readonly [_flaxDartTypeValue]: DataRow;

get key(): upstream0.LocalKey | null;
get onSelectChanged(): ((value: boolean | null) => void) | null;
get onLongPress(): (() => void) | null;
get onHover(): ((value: boolean) => void) | null;
get selected(): boolean;
get cells(): DartList<upstream4.DataCell>;
get color(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
get mouseCursor(): upstream1.WidgetStateProperty<upstream3.MouseCursor | null> | null;
}
export abstract class DataRow extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataRow>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DataRow;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DataRow", readonly [], false];
constructor(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; selected?: boolean | undefined; onSelectChanged?: ((value: boolean | null) => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null] }> | null | undefined; cells: DartListInput<upstream4.DataCell, Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }>>}) { super(_DataRowProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DataRow.prototype, _DataRowProxy);
export namespace DataRow { export function implement(args: [options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; selected?: boolean | undefined; onSelectChanged?: ((value: boolean | null) => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null] }> | null | undefined; cells: DartListInput<upstream4.DataCell, Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }>>}], implementation: {}): DataRow {
return constructProxy(_DataRowProxy, args, implementation) as DataRow; } }
_flaxBindInstanceType<DataRow, typeof DataRow>(DataRow, "flax.core/sdk_material#type:DataRow", ["dart:core::Object"]);
