// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import { _flaxMemberParameters2, _flaxMemberParameters418 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TableRow extends Readonly<{ "__flaxBound:package:flutter/src/widgets/table.dart::TableRow": readonly [] }> { readonly __TableRow: unique symbol;
readonly [_flaxDartTypeValue]: TableRow;

}
defineObject("flax.core/sdk_widgets#type:TableRow", ["key","decoration","children"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TableRow", "object", {"toString":_flaxMemberParameters2}, {}), []);
const _TableRowProxy = {type: "flax.core/sdk_widgets#type:TableRow", parameters: _flaxMemberParameters418, constructors: {"": _flaxMemberParameters418}, methods: {"toString":_flaxMemberParameters2}, getters: ["key","decoration","children"], setters: [], contextMembers: [], superMembers: ["get:key","get:decoration","get:children","toString"]} as const;
export interface TableRow {
readonly [_flaxDartTypeValue]: TableRow;

toString(): string;
get key(): upstream0.LocalKey | null;
get decoration(): upstream1.Decoration | null;
get children(): DartList<Widget>;
}
export abstract class TableRow extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TableRow>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TableRow;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TableRow", readonly [], false];
constructor(options?: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; decoration?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; children?: DartListInput<Widget, Widget> | undefined}) { super(_TableRowProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TableRow.prototype, _TableRowProxy);
export namespace TableRow { export function implement(args: [options?: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; decoration?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; children?: DartListInput<Widget, Widget> | undefined}], implementation: {}): TableRow {
return constructProxy(_TableRowProxy, args, implementation) as TableRow; } }
_flaxBindInstanceType<TableRow, typeof TableRow>(TableRow, "flax.core/sdk_widgets#type:TableRow", ["dart:core::Object"]);
