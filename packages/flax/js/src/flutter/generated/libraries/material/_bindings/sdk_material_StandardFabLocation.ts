// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonLocation';
import '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonLocation';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_ScaffoldPrelayoutGeometry';
import '@flax/flutter/material/_bindings/sdk_material_ScaffoldPrelayoutGeometry';
import { _flaxMemberParameters294, _flaxMemberParameters2, _flaxMemberParameters141 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StandardFabLocation extends Omit<upstream0.FloatingActionButtonLocation, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::StandardFabLocation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [] }> { readonly __StandardFabLocation: unique symbol;
readonly [_flaxDartTypeValue]: StandardFabLocation;

}
defineObject("flax.core/sdk_material#type:StandardFabLocation", [], [], _flaxBindingMethods("flax.core/sdk_material#type:StandardFabLocation", "object", {"getOffsetX":_flaxMemberParameters294,"getOffsetY":_flaxMemberParameters294,"isMini":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_material#type:FloatingActionButtonLocation");
const _StandardFabLocationProxy = {type: "flax.core/sdk_material#type:StandardFabLocation", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"getOffset":_flaxMemberParameters141,"toString":_flaxMemberParameters2,"getOffsetX":_flaxMemberParameters294,"getOffsetY":_flaxMemberParameters294,"isMini":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["getOffset","toString","isMini"]} as const;
export interface StandardFabLocation {
readonly [_flaxDartTypeValue]: StandardFabLocation;

getOffset(scaffoldGeometry: Readonly<{ "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [] }>): upstream1.Offset;
toString(): string;
isMini(): boolean;
}
export abstract class StandardFabLocation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StandardFabLocation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StandardFabLocation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:StandardFabLocation", readonly [], false];
constructor() { super(_StandardFabLocationProxy, Array.from(arguments)); }
abstract getOffsetX(scaffoldGeometry: Readonly<{ "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [] }>, adjustment: number): number;
abstract getOffsetY(scaffoldGeometry: Readonly<{ "__flaxBound:package:flutter/src/material/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [] }>, adjustment: number): number;
}
_flaxDefineProxyBase(StandardFabLocation.prototype, _StandardFabLocationProxy);
export namespace StandardFabLocation { export function implement(args: [], implementation: {getOffsetX: ((scaffoldGeometry: upstream2.ScaffoldPrelayoutGeometry, adjustment: number) => number); getOffsetY: ((scaffoldGeometry: upstream2.ScaffoldPrelayoutGeometry, adjustment: number) => number)}): StandardFabLocation {
return constructProxy(_StandardFabLocationProxy, args, implementation) as StandardFabLocation; } }
_flaxBindInstanceType<StandardFabLocation, typeof StandardFabLocation>(StandardFabLocation, "flax.core/sdk_material#type:StandardFabLocation", ["flax.core/sdk_material#type:FloatingActionButtonLocation","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "getOffset" | "toString" | "getOffsetX" | "getOffsetY" | "isMini" | "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::StandardFabLocation" | "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FloatingActionButtonLocation";
