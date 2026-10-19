// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
const _flaxMemberParameters0 = [{"name":"cells","required":true,"positional":true},{"name":"containerWidth","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"cells","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TableColumnWidth extends Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }> { readonly __TableColumnWidth: unique symbol;
readonly [_flaxDartTypeValue]: TableColumnWidth;

}
defineObject("flax.core/sdk_rendering#type:TableColumnWidth", [], [], _flaxBindingMethods("flax.core/sdk_rendering#type:TableColumnWidth", "object", {"minIntrinsicWidth":_flaxMemberParameters0,"maxIntrinsicWidth":_flaxMemberParameters0,"flex":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, {}), []);
const _TableColumnWidthProxy = {type: "flax.core/sdk_rendering#type:TableColumnWidth", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"minIntrinsicWidth":_flaxMemberParameters0,"maxIntrinsicWidth":_flaxMemberParameters0,"flex":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["flex","toString"]} as const;
export interface TableColumnWidth {
readonly [_flaxDartTypeValue]: TableColumnWidth;

flex(cells: DartIterableInput<upstream0.RenderBox, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): number | null;
toString(): string;
}
export abstract class TableColumnWidth extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TableColumnWidth>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TableColumnWidth;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TableColumnWidth", readonly [], false];
constructor() { super(_TableColumnWidthProxy, Array.from(arguments)); }
abstract minIntrinsicWidth(cells: DartIterableInput<upstream0.RenderBox, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, containerWidth: number): number;
abstract maxIntrinsicWidth(cells: DartIterableInput<upstream0.RenderBox, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, containerWidth: number): number;
}
_flaxDefineProxyBase(TableColumnWidth.prototype, _TableColumnWidthProxy);
export namespace TableColumnWidth { export function implement(args: [], implementation: {minIntrinsicWidth: ((cells: DartIterable<upstream0.RenderBox>, containerWidth: number) => number); maxIntrinsicWidth: ((cells: DartIterable<upstream0.RenderBox>, containerWidth: number) => number)}): TableColumnWidth {
return constructProxy(_TableColumnWidthProxy, args, implementation) as TableColumnWidth; } }
_flaxBindInstanceType<TableColumnWidth, typeof TableColumnWidth>(TableColumnWidth, "flax.core/sdk_rendering#type:TableColumnWidth", ["dart:core::Object"]);
