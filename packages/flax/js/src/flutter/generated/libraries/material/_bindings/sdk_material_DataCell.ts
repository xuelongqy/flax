// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import { _flaxMemberParameters73 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DataCell extends Readonly<{ "__flaxBound:package:flutter/src/material/data_table.dart::DataCell": readonly [] }> { readonly __DataCell: unique symbol;
readonly [_flaxDartTypeValue]: DataCell;

}
defineObject("flax.core/sdk_material#type:DataCell", ["child","placeholder","showEditIcon","onTap","onDoubleTap","onLongPress","onTapDown","onTapCancel"], [], _flaxBindingMethods("flax.core/sdk_material#type:DataCell", "object", {}, {}), []);
const _DataCellProxy = {type: "flax.core/sdk_material#type:DataCell", parameters: _flaxMemberParameters73, constructors: {"": _flaxMemberParameters73}, methods: {}, getters: ["child","placeholder","showEditIcon","onTap","onDoubleTap","onLongPress","onTapDown","onTapCancel"], setters: [], contextMembers: [], superMembers: ["get:child","get:placeholder","get:showEditIcon","get:onTap","get:onDoubleTap","get:onLongPress","get:onTapDown","get:onTapCancel"]} as const;
export interface DataCell {
readonly [_flaxDartTypeValue]: DataCell;

get child(): Widget;
get placeholder(): boolean;
get showEditIcon(): boolean;
get onTap(): (() => void) | null;
get onDoubleTap(): (() => void) | null;
get onLongPress(): (() => void) | null;
get onTapDown(): ((details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => void) | null;
get onTapCancel(): (() => void) | null;
}
export abstract class DataCell extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataCell>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DataCell;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DataCell", readonly [], false];
constructor(child: Widget, options?: {placeholder?: boolean | undefined; showEditIcon?: boolean | undefined; onTap?: (() => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined; onDoubleTap?: (() => void) | null | undefined; onTapCancel?: (() => void) | null | undefined}) { super(_DataCellProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DataCell.prototype, _DataCellProxy);
export namespace DataCell { export function implement(args: [child: Widget, options?: {placeholder?: boolean | undefined; showEditIcon?: boolean | undefined; onTap?: (() => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined; onDoubleTap?: (() => void) | null | undefined; onTapCancel?: (() => void) | null | undefined}], implementation: {}): DataCell {
return constructProxy(_DataCellProxy, args, implementation) as DataCell; } }
export namespace DataCell { export declare const empty: DataCell; }
_flaxDefineStaticGetters(DataCell, "flax.core/sdk_material#read:DataCell.", ["empty"]);
_flaxBindInstanceType<DataCell, typeof DataCell>(DataCell, "flax.core/sdk_material#type:DataCell", ["dart:core::Object"]);
