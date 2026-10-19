// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_CardThemeData';
import '@flax/flutter/material/_bindings/sdk_material_CardThemeData';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters43, _flaxMemberParameters0 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CardTheme extends _FlaxDartWidget, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/card_theme.dart::CardTheme": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CardTheme: unique symbol;
readonly [_flaxDartTypeValue]: CardTheme;

readonly clipBehavior: upstream3.Clip | null;
readonly color: upstream4.Color | null;
readonly surfaceTintColor: upstream4.Color | null;
readonly shadowColor: upstream4.Color | null;
readonly elevation: number | null;
readonly margin: upstream5.EdgeInsetsGeometry | null;
readonly shape: upstream6.ShapeBorder | null;
readonly data: upstream7.CardThemeData;
readonly child: Widget;
readonly key: upstream2.Key | null;
copyWith(options?: {clipBehavior?: upstream3.Clip | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; margin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}): CardTheme;
updateShouldNotify(oldWidget: CardTheme): boolean;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream10.InheritedElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:CardTheme", ["clipBehavior","color","surfaceTintColor","shadowColor","elevation","margin","shape","data","child","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:CardTheme", "object", {"copyWith":_flaxMemberParameters43,"updateShouldNotify":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:InheritedWidget");
export function _CardThemeFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; clipBehavior?: upstream3.Clip | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; margin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; data?: Readonly<{ "__flaxBound:package:flutter/src/material/card_theme.dart::CardThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; child?: Widget | null | undefined } = {}): CardTheme {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:CardTheme", "", [{"name":"key"},{"name":"clipBehavior"},{"name":"color"},{"name":"surfaceTintColor"},{"name":"shadowColor"},{"name":"elevation"},{"name":"margin"},{"name":"shape"},{"name":"data"},{"name":"child"}], [], options) as CardTheme;
}
export namespace _CardThemeFactory { export function of(context: upstream8.BuildContext): upstream7.CardThemeData {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:CardTheme.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream7.CardThemeData;
} }
export namespace _CardThemeFactory { export function lerp(a: CardTheme | null, b: CardTheme | null, t: number): CardTheme {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:CardTheme.lerp", [a, b, t]);
return _flaxResult as CardTheme;
} }
export const CardTheme: typeof _CardThemeFactory & _FlaxInstanceType<CardTheme> & _FlaxDartType<CardTheme, readonly ["class", "flax.core/sdk_material#type:CardTheme", readonly [], false]> = _flaxBindInstanceType<CardTheme, typeof _CardThemeFactory>(_CardThemeFactory, "flax.core/sdk_material#type:CardTheme", ["flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CardThemeFactory & _FlaxInstanceType<CardTheme> & _FlaxDartType<CardTheme, readonly ["class", "flax.core/sdk_material#type:CardTheme", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "clipBehavior" | "color" | "surfaceTintColor" | "shadowColor" | "elevation" | "margin" | "shape" | "data" | "child" | "key" | "copyWith" | "updateShouldNotify" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/card_theme.dart::CardTheme" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
