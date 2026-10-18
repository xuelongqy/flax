// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"backgroundColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"iconTheme","required":false,"positional":false},{"name":"indicatorColor","required":false,"positional":false},{"name":"indicatorShape","required":false,"positional":false},{"name":"indicatorSize","required":false,"positional":false},{"name":"labelTextStyle","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"surfaceTintColor","required":false,"positional":false},{"name":"tileHeight","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NavigationDrawerThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/navigation_drawer_theme.dart::NavigationDrawerThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __NavigationDrawerThemeData: unique symbol;
readonly [_flaxDartTypeValue]: NavigationDrawerThemeData;

}
defineObject("flax.core/sdk_material#type:NavigationDrawerThemeData", ["tileHeight","backgroundColor","elevation","shadowColor","surfaceTintColor","indicatorColor","indicatorShape","indicatorSize","labelTextStyle","iconTheme"], [], _flaxBindingMethods("flax.core/sdk_material#type:NavigationDrawerThemeData", "object", {"copyWith":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _NavigationDrawerThemeDataProxy = {type: "flax.core/sdk_material#type:NavigationDrawerThemeData", parameters: [{"name":"tileHeight","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"surfaceTintColor","required":false,"positional":false},{"name":"indicatorColor","required":false,"positional":false},{"name":"indicatorShape","required":false,"positional":false},{"name":"indicatorSize","required":false,"positional":false},{"name":"labelTextStyle","required":false,"positional":false},{"name":"iconTheme","required":false,"positional":false}], constructors: {"":[{"name":"tileHeight","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"surfaceTintColor","required":false,"positional":false},{"name":"indicatorColor","required":false,"positional":false},{"name":"indicatorShape","required":false,"positional":false},{"name":"indicatorSize","required":false,"positional":false},{"name":"labelTextStyle","required":false,"positional":false},{"name":"iconTheme","required":false,"positional":false}]}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4,"copyWith":_flaxMemberParameters0}, getters: ["tileHeight","backgroundColor","elevation","shadowColor","surfaceTintColor","indicatorColor","indicatorShape","indicatorSize","labelTextStyle","iconTheme"], setters: [], contextMembers: [], superMembers: ["get:tileHeight","get:backgroundColor","get:elevation","get:shadowColor","get:surfaceTintColor","get:indicatorColor","get:indicatorShape","get:indicatorSize","get:labelTextStyle","get:iconTheme","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface NavigationDrawerThemeData {
readonly [_flaxDartTypeValue]: NavigationDrawerThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {tileHeight?: number | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; indicatorSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; labelTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.TextStyle | null] }> | null | undefined; iconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.IconThemeData | null] }> | null | undefined}): NavigationDrawerThemeData;
get tileHeight(): number | null;
get backgroundColor(): upstream1.Color | null;
get elevation(): number | null;
get shadowColor(): upstream1.Color | null;
get surfaceTintColor(): upstream1.Color | null;
get indicatorColor(): upstream1.Color | null;
get indicatorShape(): upstream2.ShapeBorder | null;
get indicatorSize(): upstream3.Size | null;
get labelTextStyle(): upstream4.WidgetStateProperty<upstream5.TextStyle | null> | null;
get iconTheme(): upstream4.WidgetStateProperty<upstream6.IconThemeData | null> | null;
}
export abstract class NavigationDrawerThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NavigationDrawerThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NavigationDrawerThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:NavigationDrawerThemeData", readonly [], false];
constructor(options?: {tileHeight?: number | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; indicatorSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; labelTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.TextStyle | null] }> | null | undefined; iconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.IconThemeData | null] }> | null | undefined}) { super(_NavigationDrawerThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(NavigationDrawerThemeData.prototype, _NavigationDrawerThemeDataProxy);
export namespace NavigationDrawerThemeData { export function implement(args: [options?: {tileHeight?: number | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; indicatorSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; labelTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.TextStyle | null] }> | null | undefined; iconTheme?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.IconThemeData | null] }> | null | undefined}], implementation: {}): NavigationDrawerThemeData {
return constructProxy(_NavigationDrawerThemeDataProxy, args, implementation) as NavigationDrawerThemeData; } }
export namespace NavigationDrawerThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/navigation_drawer_theme.dart::NavigationDrawerThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/navigation_drawer_theme.dart::NavigationDrawerThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): NavigationDrawerThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:NavigationDrawerThemeData.lerp", [a, b, t]);
return _flaxResult as NavigationDrawerThemeData | null;
} }
_flaxBindInstanceType<NavigationDrawerThemeData, typeof NavigationDrawerThemeData>(NavigationDrawerThemeData, "flax.core/sdk_material#type:NavigationDrawerThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "tileHeight" | "backgroundColor" | "elevation" | "shadowColor" | "surfaceTintColor" | "indicatorColor" | "indicatorShape" | "indicatorSize" | "labelTextStyle" | "iconTheme" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/navigation_drawer_theme.dart::NavigationDrawerThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
