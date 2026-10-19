// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableCellVerticalAlignment';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableCellVerticalAlignment';
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TableCellParentData extends Omit<upstream0.BoxParentData, _flaxOwnMembers0>, Omit<upstream1.ParentData, _flaxOwnMembers0 | keyof upstream0.BoxParentData>, Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableCellParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }> { readonly __TableCellParentData: unique symbol;
readonly [_flaxDartTypeValue]: TableCellParentData;

}
defineObject("flax.core/sdk_rendering#type:TableCellParentData", ["offset","verticalAlignment","x","y"], ["offset","verticalAlignment","x","y"], _flaxBindingMethods("flax.core/sdk_rendering#type:TableCellParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:BoxParentData");
const _TableCellParentDataProxy = {type: "flax.core/sdk_rendering#type:TableCellParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters1,"detach":_flaxMemberParameters1}, getters: ["verticalAlignment","x","y","offset"], setters: ["verticalAlignment","x","y","offset"], contextMembers: [], superMembers: ["get:verticalAlignment","get:x","get:y","get:offset","set:verticalAlignment","set:x","set:y","set:offset","toString","detach"]} as const;
export interface TableCellParentData {
readonly [_flaxDartTypeValue]: TableCellParentData;

toString(): string;
detach(): void;
get verticalAlignment(): upstream3.TableCellVerticalAlignment | null;
get x(): number | null;
get y(): number | null;
get offset(): upstream2.Offset;
set verticalAlignment(value: upstream3.TableCellVerticalAlignment | null);
set x(value: number | null);
set y(value: number | null);
set offset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
}
export abstract class TableCellParentData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TableCellParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TableCellParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TableCellParentData", readonly [], false];
constructor() { super(_TableCellParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TableCellParentData.prototype, _TableCellParentDataProxy);
export namespace TableCellParentData { export function implement(args: [], implementation: {}): TableCellParentData {
return constructProxy(_TableCellParentDataProxy, args, implementation) as TableCellParentData; } }
_flaxBindInstanceType<TableCellParentData, typeof TableCellParentData>(TableCellParentData, "flax.core/sdk_rendering#type:TableCellParentData", ["flax.core/sdk_rendering#type:BoxParentData","flax.core/sdk_rendering#type:ParentData","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "verticalAlignment" | "x" | "y" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/table.dart::TableCellParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
