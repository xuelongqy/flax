// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import { _flaxMemberParameters217 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NavigationRailDestination extends Readonly<{ "__flaxBound:package:material_ui/src/navigation_rail.dart::NavigationRailDestination": readonly [] }> { readonly __NavigationRailDestination: unique symbol;
readonly [_flaxDartTypeValue]: NavigationRailDestination;

readonly icon: Widget;
readonly selectedIcon: Widget;
readonly indicatorColor: upstream0.Color | null;
readonly indicatorShape: upstream1.ShapeBorder | null;
readonly label: Widget;
readonly padding: upstream2.EdgeInsetsGeometry | null;
readonly disabled: boolean;
}
defineObject("flax.material/material#type:NavigationRailDestination", ["icon","selectedIcon","indicatorColor","indicatorShape","label","padding","disabled"], [], _flaxBindingMethods("flax.material/material#type:NavigationRailDestination", "object", {}, {}), []);
export function _NavigationRailDestinationFactory(options: { icon: Widget; selectedIcon?: Widget | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; label: Widget; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; disabled?: boolean | undefined }): NavigationRailDestination {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:NavigationRailDestination", "", [{"name":"icon","required":true},{"name":"selectedIcon"},{"name":"indicatorColor"},{"name":"indicatorShape"},{"name":"label","required":true},{"name":"padding"},{"name":"disabled"}], [], options) as NavigationRailDestination;
}
const _NavigationRailDestinationProxy = {type: "flax.material/material#type:NavigationRailDestination", parameters: _flaxMemberParameters217, constructors: {"": _flaxMemberParameters217}, methods: {}, getters: ["icon","selectedIcon","indicatorColor","indicatorShape","label","padding","disabled"], setters: [], contextMembers: [], superMembers: ["get:icon","get:selectedIcon","get:indicatorColor","get:indicatorShape","get:label","get:padding","get:disabled"]} as const;
export interface _NavigationRailDestinationNative extends NavigationRailDestination {
readonly [_flaxDartTypeValue]: _NavigationRailDestinationNative;

get icon(): Widget;
get selectedIcon(): Widget;
get indicatorColor(): upstream0.Color | null;
get indicatorShape(): upstream1.ShapeBorder | null;
get label(): Widget;
get padding(): upstream2.EdgeInsetsGeometry | null;
get disabled(): boolean;
}
export abstract class _NavigationRailDestinationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NavigationRailDestination>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NavigationRailDestination;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:NavigationRailDestination", readonly [], false];
constructor(options: {icon: Widget; selectedIcon?: Widget | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; label: Widget; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; disabled?: boolean | undefined}) { super(_NavigationRailDestinationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_NavigationRailDestinationNative.prototype, _NavigationRailDestinationProxy);
export namespace _NavigationRailDestinationFactory { export function implement(args: [options: {icon: Widget; selectedIcon?: Widget | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; label: Widget; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; disabled?: boolean | undefined}], implementation: {}): NavigationRailDestination {
return constructProxy(_NavigationRailDestinationProxy, args, implementation) as NavigationRailDestination; } }
const _NavigationRailDestinationBinding = _flaxProxyFactory(_NavigationRailDestinationFactory, _NavigationRailDestinationNative) as unknown as typeof _NavigationRailDestinationFactory & (new(options: {icon: Widget; selectedIcon?: Widget | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; label: Widget; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; disabled?: boolean | undefined}) => _NavigationRailDestinationNative);
export const NavigationRailDestination: typeof _NavigationRailDestinationBinding & _FlaxInstanceType<NavigationRailDestination> & _FlaxDartType<NavigationRailDestination, readonly ["class", "flax.material/material#type:NavigationRailDestination", readonly [], false]> = _flaxBindInstanceType<NavigationRailDestination, typeof _NavigationRailDestinationBinding>(_NavigationRailDestinationBinding, "flax.material/material#type:NavigationRailDestination", ["dart:core::Object"]) as typeof _NavigationRailDestinationBinding & _FlaxInstanceType<NavigationRailDestination> & _FlaxDartType<NavigationRailDestination, readonly ["class", "flax.material/material#type:NavigationRailDestination", readonly [], false]>;
