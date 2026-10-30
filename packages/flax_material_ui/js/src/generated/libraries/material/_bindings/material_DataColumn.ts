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
import { _flaxMemberParameters84 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DataColumn extends Readonly<{ "__flaxBound:package:material_ui/src/data_table.dart::DataColumn": readonly [] }> { readonly __DataColumn: unique symbol;
readonly [_flaxDartTypeValue]: DataColumn;

readonly label: Widget;
readonly columnWidth: upstream0.TableColumnWidth | null;
readonly tooltip: string | null;
readonly numeric: boolean;
readonly onSort: ((columnIndex: number, ascending: boolean) => void) | null;
readonly mouseCursor: upstream1.WidgetStateProperty<upstream2.MouseCursor | null> | null;
readonly headingRowAlignment: upstream3.MainAxisAlignment | null;
}
defineObject("flax.material/material#type:DataColumn", ["label","columnWidth","tooltip","numeric","onSort","mouseCursor","headingRowAlignment"], [], _flaxBindingMethods("flax.material/material#type:DataColumn", "object", {}, {}), []);
export function _DataColumnFactory(options: { label: Widget; columnWidth?: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }> | null | undefined; tooltip?: string | null | undefined; numeric?: boolean | undefined; onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined }): DataColumn {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:DataColumn", "", [{"name":"label","required":true},{"name":"columnWidth"},{"name":"tooltip"},{"name":"numeric"},{"name":"onSort"},{"name":"mouseCursor"},{"name":"headingRowAlignment"}], [], options) as DataColumn;
}
const _DataColumnProxy = {type: "flax.material/material#type:DataColumn", parameters: _flaxMemberParameters84, constructors: {"": _flaxMemberParameters84}, methods: {}, getters: ["label","columnWidth","tooltip","numeric","onSort","mouseCursor","headingRowAlignment"], setters: [], contextMembers: [], superMembers: ["get:label","get:columnWidth","get:tooltip","get:numeric","get:onSort","get:mouseCursor","get:headingRowAlignment"]} as const;
export interface _DataColumnNative extends DataColumn {
readonly [_flaxDartTypeValue]: _DataColumnNative;

get label(): Widget;
get columnWidth(): upstream0.TableColumnWidth | null;
get tooltip(): string | null;
get numeric(): boolean;
get onSort(): ((columnIndex: number, ascending: boolean) => void) | null;
get mouseCursor(): upstream1.WidgetStateProperty<upstream2.MouseCursor | null> | null;
get headingRowAlignment(): upstream3.MainAxisAlignment | null;
}
export abstract class _DataColumnNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataColumn>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DataColumn;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:DataColumn", readonly [], false];
constructor(options: {label: Widget; columnWidth?: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }> | null | undefined; tooltip?: string | null | undefined; numeric?: boolean | undefined; onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined}) { super(_DataColumnProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DataColumnNative.prototype, _DataColumnProxy);
export namespace _DataColumnFactory { export function implement(args: [options: {label: Widget; columnWidth?: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }> | null | undefined; tooltip?: string | null | undefined; numeric?: boolean | undefined; onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined}], implementation: {}): DataColumn {
return constructProxy(_DataColumnProxy, args, implementation) as DataColumn; } }
const _DataColumnBinding = _flaxProxyFactory(_DataColumnFactory, _DataColumnNative) as unknown as typeof _DataColumnFactory & (new(options: {label: Widget; columnWidth?: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }> | null | undefined; tooltip?: string | null | undefined; numeric?: boolean | undefined; onSort?: ((columnIndex: number, ascending: boolean) => void) | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; headingRowAlignment?: upstream3.MainAxisAlignment | null | undefined}) => _DataColumnNative);
export const DataColumn: typeof _DataColumnBinding & _FlaxInstanceType<DataColumn> & _FlaxDartType<DataColumn, readonly ["class", "flax.material/material#type:DataColumn", readonly [], false]> = _flaxBindInstanceType<DataColumn, typeof _DataColumnBinding>(_DataColumnBinding, "flax.material/material#type:DataColumn", ["dart:core::Object"]) as typeof _DataColumnBinding & _FlaxInstanceType<DataColumn> & _FlaxDartType<DataColumn, readonly ["class", "flax.material/material#type:DataColumn", readonly [], false]>;
