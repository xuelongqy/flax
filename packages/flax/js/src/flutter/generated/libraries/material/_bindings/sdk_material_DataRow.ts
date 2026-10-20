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
import { _flaxMemberParameters76, _flaxMemberParameters77 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DataRow extends Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataRow": readonly [] }> { readonly __DataRow: unique symbol;
readonly [_flaxDartTypeValue]: DataRow;

readonly key: upstream0.LocalKey | null;
readonly onSelectChanged: ((value: boolean | null) => void) | null;
readonly onLongPress: (() => void) | null;
readonly onHover: ((value: boolean) => void) | null;
readonly selected: boolean;
readonly cells: DartList<upstream4.DataCell>;
readonly color: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
readonly mouseCursor: upstream1.WidgetStateProperty<upstream3.MouseCursor | null> | null;
}
defineObject("flax.core/sdk_material#type:DataRow", ["key","onSelectChanged","onLongPress","onHover","selected","cells","color","mouseCursor"], [], _flaxBindingMethods("flax.core/sdk_material#type:DataRow", "object", {}, {}), []);
export function _DataRowFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; selected?: boolean | undefined; onSelectChanged?: ((value: boolean | null) => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null] }> | null | undefined; cells: DartListInput<upstream4.DataCell, Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }>> }): DataRow {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:DataRow", "", [{"name":"key"},{"name":"selected"},{"name":"onSelectChanged"},{"name":"onLongPress"},{"name":"onHover"},{"name":"color"},{"name":"mouseCursor"},{"name":"cells","required":true}], [], options) as DataRow;
}
export namespace _DataRowFactory {
export function byIndex(options: { index?: number | null | undefined; selected?: boolean | undefined; onSelectChanged?: ((value: boolean | null) => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null] }> | null | undefined; cells: DartListInput<upstream4.DataCell, Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }>> }): DataRow {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:DataRow", "byIndex", [{"name":"index"},{"name":"selected"},{"name":"onSelectChanged"},{"name":"onLongPress"},{"name":"onHover"},{"name":"color"},{"name":"mouseCursor"},{"name":"cells","required":true}], [], options) as DataRow;
}
}
const _DataRowProxy = {type: "flax.core/sdk_material#type:DataRow", parameters: _flaxMemberParameters76, constructors: {"": _flaxMemberParameters76,"byIndex": _flaxMemberParameters77}, methods: {}, getters: ["key","onSelectChanged","onLongPress","onHover","selected","cells","color","mouseCursor"], setters: [], contextMembers: [], superMembers: ["get:key","get:onSelectChanged","get:onLongPress","get:onHover","get:selected","get:cells","get:color","get:mouseCursor"]} as const;
export interface _DataRowNative extends DataRow {
readonly [_flaxDartTypeValue]: _DataRowNative;
readonly [_flaxDartConstructors]?: {"": (options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; selected?: boolean | undefined; onSelectChanged?: ((value: boolean | null) => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null] }> | null | undefined; cells: DartListInput<upstream4.DataCell, Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }>>}) => void;"byIndex": (options: {index?: number | null | undefined; selected?: boolean | undefined; onSelectChanged?: ((value: boolean | null) => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null] }> | null | undefined; cells: DartListInput<upstream4.DataCell, Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }>>}) => void;};

get key(): upstream0.LocalKey | null;
get onSelectChanged(): ((value: boolean | null) => void) | null;
get onLongPress(): (() => void) | null;
get onHover(): ((value: boolean) => void) | null;
get selected(): boolean;
get cells(): DartList<upstream4.DataCell>;
get color(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
get mouseCursor(): upstream1.WidgetStateProperty<upstream3.MouseCursor | null> | null;
}
export abstract class _DataRowNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataRow>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DataRow;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DataRow", readonly [], false];
constructor(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; selected?: boolean | undefined; onSelectChanged?: ((value: boolean | null) => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null] }> | null | undefined; cells: DartListInput<upstream4.DataCell, Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }>>}); constructor(call: _FlaxProxySuper<_DataRowNative>); constructor(...args: unknown[]) { super(_DataRowProxy, args); }
}
_flaxDefineProxyBase(_DataRowNative.prototype, _DataRowProxy);
export namespace _DataRowFactory { export function implement(args: [options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; selected?: boolean | undefined; onSelectChanged?: ((value: boolean | null) => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null] }> | null | undefined; cells: DartListInput<upstream4.DataCell, Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }>>}], implementation: {}): DataRow {
return constructProxy(_DataRowProxy, args, implementation) as DataRow; } }
const _DataRowBinding = _flaxProxyFactory(_DataRowFactory, _DataRowNative) as unknown as typeof _DataRowFactory & (new(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; selected?: boolean | undefined; onSelectChanged?: ((value: boolean | null) => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onHover?: ((value: boolean) => void) | null | undefined; color?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.MouseCursor | null] }> | null | undefined; cells: DartListInput<upstream4.DataCell, Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }>>}) => _DataRowNative) & (new(call: _FlaxProxySuper<_DataRowNative>) => _DataRowNative);
export const DataRow: typeof _DataRowBinding & _FlaxInstanceType<DataRow> & _FlaxDartType<DataRow, readonly ["class", "flax.core/sdk_material#type:DataRow", readonly [], false]> = _flaxBindInstanceType<DataRow, typeof _DataRowBinding>(_DataRowBinding, "flax.core/sdk_material#type:DataRow", ["dart:core::Object"]) as typeof _DataRowBinding & _FlaxInstanceType<DataRow> & _FlaxDartType<DataRow, readonly ["class", "flax.core/sdk_material#type:DataRow", readonly [], false]>;
