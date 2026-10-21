// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import { _flaxMemberParameters82 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DataCell extends Readonly<{ "__flaxBound:package:material_ui/src/data_table.dart::DataCell": readonly [] }> { readonly __DataCell: unique symbol;
readonly [_flaxDartTypeValue]: DataCell;

readonly child: Widget;
readonly placeholder: boolean;
readonly showEditIcon: boolean;
readonly onTap: (() => void) | null;
readonly onDoubleTap: (() => void) | null;
readonly onLongPress: (() => void) | null;
readonly onTapDown: ((details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => void) | null;
readonly onTapCancel: (() => void) | null;
}
defineObject("flax.material/material#type:DataCell", ["child","placeholder","showEditIcon","onTap","onDoubleTap","onLongPress","onTapDown","onTapCancel"], [], _flaxBindingMethods("flax.material/material#type:DataCell", "object", {}, {}), []);
export function _DataCellFactory(child: Widget, options: { placeholder?: boolean | undefined; showEditIcon?: boolean | undefined; onTap?: (() => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined; onDoubleTap?: (() => void) | null | undefined; onTapCancel?: (() => void) | null | undefined } = {}): DataCell {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:DataCell", "", [{"name":"child","required":true,"positional":true},{"name":"placeholder"},{"name":"showEditIcon"},{"name":"onTap"},{"name":"onLongPress"},{"name":"onTapDown"},{"name":"onDoubleTap"},{"name":"onTapCancel"}], [child], options) as DataCell;
}
const _DataCellProxy = {type: "flax.material/material#type:DataCell", parameters: _flaxMemberParameters82, constructors: {"": _flaxMemberParameters82}, methods: {}, getters: ["child","placeholder","showEditIcon","onTap","onDoubleTap","onLongPress","onTapDown","onTapCancel"], setters: [], contextMembers: [], superMembers: ["get:child","get:placeholder","get:showEditIcon","get:onTap","get:onDoubleTap","get:onLongPress","get:onTapDown","get:onTapCancel"]} as const;
export interface _DataCellNative extends DataCell {
readonly [_flaxDartTypeValue]: _DataCellNative;

get child(): Widget;
get placeholder(): boolean;
get showEditIcon(): boolean;
get onTap(): (() => void) | null;
get onDoubleTap(): (() => void) | null;
get onLongPress(): (() => void) | null;
get onTapDown(): ((details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => void) | null;
get onTapCancel(): (() => void) | null;
}
export abstract class _DataCellNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DataCell>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DataCell;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:DataCell", readonly [], false];
constructor(child: Widget, options?: {placeholder?: boolean | undefined; showEditIcon?: boolean | undefined; onTap?: (() => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined; onDoubleTap?: (() => void) | null | undefined; onTapCancel?: (() => void) | null | undefined}) { super(_DataCellProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DataCellNative.prototype, _DataCellProxy);
export namespace _DataCellFactory { export function implement(args: [child: Widget, options?: {placeholder?: boolean | undefined; showEditIcon?: boolean | undefined; onTap?: (() => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined; onDoubleTap?: (() => void) | null | undefined; onTapCancel?: (() => void) | null | undefined}], implementation: {}): DataCell {
return constructProxy(_DataCellProxy, args, implementation) as DataCell; } }
const _DataCellBinding = _flaxProxyFactory(_DataCellFactory, _DataCellNative) as unknown as typeof _DataCellFactory & (new(child: Widget, options?: {placeholder?: boolean | undefined; showEditIcon?: boolean | undefined; onTap?: (() => void) | null | undefined; onLongPress?: (() => void) | null | undefined; onTapDown?: ((details: upstream0.TapDownDetails) => void) | null | undefined; onDoubleTap?: (() => void) | null | undefined; onTapCancel?: (() => void) | null | undefined}) => _DataCellNative);
export namespace _DataCellFactory { export declare const empty: DataCell; }
_flaxDefineStaticGetters(_DataCellFactory, "flax.material/material#read:DataCell.", ["empty"]);
export const DataCell: typeof _DataCellBinding & _FlaxInstanceType<DataCell> & _FlaxDartType<DataCell, readonly ["class", "flax.material/material#type:DataCell", readonly [], false]> = _flaxBindInstanceType<DataCell, typeof _DataCellBinding>(_DataCellBinding, "flax.material/material#type:DataCell", ["dart:core::Object"]) as typeof _DataCellBinding & _FlaxInstanceType<DataCell> & _FlaxDartType<DataCell, readonly ["class", "flax.material/material#type:DataCell", readonly [], false]>;
