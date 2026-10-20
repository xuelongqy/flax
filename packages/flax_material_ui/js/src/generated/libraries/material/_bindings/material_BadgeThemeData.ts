// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters12, _flaxMemberParameters13, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BadgeThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/badge_theme.dart::BadgeThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __BadgeThemeData: unique symbol;
readonly [_flaxDartTypeValue]: BadgeThemeData;

readonly backgroundColor: upstream1.Color | null;
readonly textColor: upstream1.Color | null;
readonly smallSize: number | null;
readonly largeSize: number | null;
readonly textStyle: upstream2.TextStyle | null;
readonly padding: upstream3.EdgeInsetsGeometry | null;
readonly alignment: upstream4.AlignmentGeometry | null;
readonly offset: upstream5.Offset | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; largeSize?: number | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; smallSize?: number | null | undefined; textColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): BadgeThemeData;
}
defineObject("flax.material/material#type:BadgeThemeData", ["backgroundColor","textColor","smallSize","largeSize","textStyle","padding","alignment","offset"], [], _flaxBindingMethods("flax.material/material#type:BadgeThemeData", "object", {"copyWith":_flaxMemberParameters12}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _BadgeThemeDataFactory(options: { backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; smallSize?: number | null | undefined; largeSize?: number | null | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined } = {}): BadgeThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:BadgeThemeData", "", [{"name":"backgroundColor"},{"name":"textColor"},{"name":"smallSize"},{"name":"largeSize"},{"name":"textStyle"},{"name":"padding"},{"name":"alignment"},{"name":"offset"}], [], options) as BadgeThemeData;
}
const _BadgeThemeDataProxy = {type: "flax.material/material#type:BadgeThemeData", parameters: _flaxMemberParameters13, constructors: {"": _flaxMemberParameters13}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters12}, getters: ["backgroundColor","textColor","smallSize","largeSize","textStyle","padding","alignment","offset"], setters: [], contextMembers: [], superMembers: ["get:backgroundColor","get:textColor","get:smallSize","get:largeSize","get:textStyle","get:padding","get:alignment","get:offset","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _BadgeThemeDataNative extends BadgeThemeData {
readonly [_flaxDartTypeValue]: _BadgeThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; smallSize?: number | null | undefined; largeSize?: number | null | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}): BadgeThemeData;
get backgroundColor(): upstream1.Color | null;
get textColor(): upstream1.Color | null;
get smallSize(): number | null;
get largeSize(): number | null;
get textStyle(): upstream2.TextStyle | null;
get padding(): upstream3.EdgeInsetsGeometry | null;
get alignment(): upstream4.AlignmentGeometry | null;
get offset(): upstream5.Offset | null;
}
export abstract class _BadgeThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BadgeThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BadgeThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:BadgeThemeData", readonly [], false];
constructor(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; smallSize?: number | null | undefined; largeSize?: number | null | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) { super(_BadgeThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_BadgeThemeDataNative.prototype, _BadgeThemeDataProxy);
export namespace _BadgeThemeDataFactory { export function implement(args: [options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; smallSize?: number | null | undefined; largeSize?: number | null | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}], implementation: {}): BadgeThemeData {
return constructProxy(_BadgeThemeDataProxy, args, implementation) as BadgeThemeData; } }
const _BadgeThemeDataBinding = _flaxProxyFactory(_BadgeThemeDataFactory, _BadgeThemeDataNative) as unknown as typeof _BadgeThemeDataFactory & (new(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; smallSize?: number | null | undefined; largeSize?: number | null | undefined; textStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) => _BadgeThemeDataNative);
export namespace _BadgeThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/badge_theme.dart::BadgeThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:material_ui/src/badge_theme.dart::BadgeThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): BadgeThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:BadgeThemeData.lerp", [a, b, t]);
return _flaxResult as BadgeThemeData;
} }
export const BadgeThemeData: typeof _BadgeThemeDataBinding & _FlaxInstanceType<BadgeThemeData> & _FlaxDartType<BadgeThemeData, readonly ["class", "flax.material/material#type:BadgeThemeData", readonly [], false]> = _flaxBindInstanceType<BadgeThemeData, typeof _BadgeThemeDataBinding>(_BadgeThemeDataBinding, "flax.material/material#type:BadgeThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _BadgeThemeDataBinding & _FlaxInstanceType<BadgeThemeData> & _FlaxDartType<BadgeThemeData, readonly ["class", "flax.material/material#type:BadgeThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "backgroundColor" | "textColor" | "smallSize" | "largeSize" | "textStyle" | "padding" | "alignment" | "offset" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/badge_theme.dart::BadgeThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
