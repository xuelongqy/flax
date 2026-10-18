// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NavigationRailDestination extends Readonly<{ "__flaxBound:package:flutter/src/material/navigation_rail.dart::NavigationRailDestination": readonly [] }> { readonly __NavigationRailDestination: unique symbol;
readonly [_flaxDartTypeValue]: NavigationRailDestination;

}
defineObject("flax.core/sdk_material#type:NavigationRailDestination", ["icon","selectedIcon","indicatorColor","indicatorShape","label","padding","disabled"], [], _flaxBindingMethods("flax.core/sdk_material#type:NavigationRailDestination", "object", {}, {}), []);
const _NavigationRailDestinationProxy = {type: "flax.core/sdk_material#type:NavigationRailDestination", parameters: [{"name":"icon","required":true,"positional":false},{"name":"selectedIcon","required":false,"positional":false},{"name":"indicatorColor","required":false,"positional":false},{"name":"indicatorShape","required":false,"positional":false},{"name":"label","required":true,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"disabled","required":false,"positional":false}], constructors: {"":[{"name":"icon","required":true,"positional":false},{"name":"selectedIcon","required":false,"positional":false},{"name":"indicatorColor","required":false,"positional":false},{"name":"indicatorShape","required":false,"positional":false},{"name":"label","required":true,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"disabled","required":false,"positional":false}]}, methods: {}, getters: ["icon","selectedIcon","indicatorColor","indicatorShape","label","padding","disabled"], setters: [], contextMembers: [], superMembers: ["get:icon","get:selectedIcon","get:indicatorColor","get:indicatorShape","get:label","get:padding","get:disabled"]} as const;
export interface NavigationRailDestination {
readonly [_flaxDartTypeValue]: NavigationRailDestination;

get icon(): Widget;
get selectedIcon(): Widget;
get indicatorColor(): upstream0.Color | null;
get indicatorShape(): upstream1.ShapeBorder | null;
get label(): Widget;
get padding(): upstream2.EdgeInsetsGeometry | null;
get disabled(): boolean;
}
export abstract class NavigationRailDestination extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NavigationRailDestination>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NavigationRailDestination;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:NavigationRailDestination", readonly [], false];
constructor(options: {icon: Widget; selectedIcon?: Widget | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; label: Widget; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; disabled?: boolean | undefined}) { super(_NavigationRailDestinationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(NavigationRailDestination.prototype, _NavigationRailDestinationProxy);
export namespace NavigationRailDestination { export function implement(args: [options: {icon: Widget; selectedIcon?: Widget | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; label: Widget; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; disabled?: boolean | undefined}], implementation: {}): NavigationRailDestination {
return constructProxy(_NavigationRailDestinationProxy, args, implementation) as NavigationRailDestination; } }
_flaxBindInstanceType<NavigationRailDestination, typeof NavigationRailDestination>(NavigationRailDestination, "flax.core/sdk_material#type:NavigationRailDestination", ["dart:core::Object"]);
