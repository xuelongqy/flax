// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
const _flaxMemberParameters0 = [{"name":"label","required":true},{"name":"columnWidth"},{"name":"tooltip"},{"name":"numeric"},{"name":"onSort"},{"name":"mouseCursor"},{"name":"headingRowAlignment"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DataColumn extends Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataColumn": readonly [] }> { readonly __DataColumn: unique symbol;
readonly [_flaxDartTypeValue]: DataColumn;

}
defineObject("flax.core/sdk_material#type:DataColumn", ["label","columnWidth","tooltip","numeric","onSort","mouseCursor","headingRowAlignment"], [], _flaxBindingMethods("flax.core/sdk_material#type:DataColumn", "object", {}, {}), []);
const _DataColumnProxy = {type: "flax.core/sdk_material#type:DataColumn", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["label","columnWidth","tooltip","numeric","onSort","mouseCursor","headingRowAlignment"], setters: [], contextMembers: [], superMembers: ["get:label","get:columnWidth","get:tooltip","get:numeric","get:onSort","get:mouseCursor","get:headingRowAlignment"]} as const;
export interface DataColumn {
readonly [_flaxDartTypeValue]: DataColumn;

get label(): Widget;
get columnWidth(): upstream0.TableColumnWidth | null;
get tooltip(): string | null;
get numeric(): boolean;
get onSort(): ((columnIndex: number, ascending: boolean) => void) | null;
get mouseCursor(): upstream1.WidgetStateProperty<upstream2.MouseCursor | null> | null;
get headingRowAlignment(): upstream3.MainAxisAlignment | null;
}
export abstract class DataColumn extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataColumn>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DataColumn;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DataColumn", readonly [], false];
constructor(options: {label: Widget; columnWidth?: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }> | null | undefined; tooltip?: string | null | undefined; numeric?: boolean | undefined; onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined}) { super(_DataColumnProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DataColumn.prototype, _DataColumnProxy);
export namespace DataColumn { export function implement(args: [options: {label: Widget; columnWidth?: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }> | null | undefined; tooltip?: string | null | undefined; numeric?: boolean | undefined; onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined}], implementation: {}): DataColumn {
return constructProxy(_DataColumnProxy, args, implementation) as DataColumn; } }
_flaxBindInstanceType<DataColumn, typeof DataColumn>(DataColumn, "flax.core/sdk_material#type:DataColumn", ["dart:core::Object"]);
