// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_MainAxisSize';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisSize';
import type * as upstream3 from '@flax/material-ui/_bindings/material_ButtonTextTheme';
import '@flax/material-ui/_bindings/material_ButtonTextTheme';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/material-ui/_bindings/material_ButtonBarLayoutBehavior';
import '@flax/material-ui/_bindings/material_ButtonBarLayoutBehavior';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_VerticalDirection';
import '@flax/flutter/painting/_bindings/flutter_VerticalDirection';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters2, _flaxMemberParameters26, _flaxMemberParameters27, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonBarThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/button_bar_theme.dart::ButtonBarThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ButtonBarThemeData: unique symbol;
readonly [_flaxDartTypeValue]: ButtonBarThemeData;

readonly alignment: upstream1.MainAxisAlignment | null;
readonly mainAxisSize: upstream2.MainAxisSize | null;
readonly buttonTextTheme: upstream3.ButtonTextTheme | null;
readonly buttonMinWidth: number | null;
readonly buttonHeight: number | null;
readonly buttonPadding: upstream4.EdgeInsetsGeometry | null;
readonly buttonAlignedDropdown: boolean | null;
readonly layoutBehavior: upstream5.ButtonBarLayoutBehavior | null;
readonly overflowDirection: upstream6.VerticalDirection | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {alignment?: upstream1.MainAxisAlignment | null | undefined; buttonAlignedDropdown?: boolean | null | undefined; buttonHeight?: number | null | undefined; buttonMinWidth?: number | null | undefined; buttonPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined; layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined; mainAxisSize?: upstream2.MainAxisSize | null | undefined; overflowDirection?: upstream6.VerticalDirection | null | undefined}): ButtonBarThemeData;
}
defineObject("flax.material/material#type:ButtonBarThemeData", ["alignment","mainAxisSize","buttonTextTheme","buttonMinWidth","buttonHeight","buttonPadding","buttonAlignedDropdown","layoutBehavior","overflowDirection"], [], _flaxBindingMethods("flax.material/material#type:ButtonBarThemeData", "object", {"copyWith":_flaxMemberParameters26}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _ButtonBarThemeDataFactory(options: { alignment?: upstream1.MainAxisAlignment | null | undefined; mainAxisSize?: upstream2.MainAxisSize | null | undefined; buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined; buttonMinWidth?: number | null | undefined; buttonHeight?: number | null | undefined; buttonPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; buttonAlignedDropdown?: boolean | null | undefined; layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined; overflowDirection?: upstream6.VerticalDirection | null | undefined } = {}): ButtonBarThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ButtonBarThemeData", "", [{"name":"alignment"},{"name":"mainAxisSize"},{"name":"buttonTextTheme"},{"name":"buttonMinWidth"},{"name":"buttonHeight"},{"name":"buttonPadding"},{"name":"buttonAlignedDropdown"},{"name":"layoutBehavior"},{"name":"overflowDirection"}], [], options) as ButtonBarThemeData;
}
const _ButtonBarThemeDataProxy = {type: "flax.material/material#type:ButtonBarThemeData", parameters: _flaxMemberParameters27, constructors: {"": _flaxMemberParameters27}, methods: {"toStringShort":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"toDiagnosticsNode":_flaxMemberParameters6,"debugFillProperties":_flaxMemberParameters7,"copyWith":_flaxMemberParameters26}, getters: ["alignment","mainAxisSize","buttonTextTheme","buttonMinWidth","buttonHeight","buttonPadding","buttonAlignedDropdown","layoutBehavior","overflowDirection"], setters: [], contextMembers: [], superMembers: ["get:alignment","get:mainAxisSize","get:buttonTextTheme","get:buttonMinWidth","get:buttonHeight","get:buttonPadding","get:buttonAlignedDropdown","get:layoutBehavior","get:overflowDirection","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _ButtonBarThemeDataNative extends ButtonBarThemeData {
readonly [_flaxDartTypeValue]: _ButtonBarThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {alignment?: upstream1.MainAxisAlignment | null | undefined; mainAxisSize?: upstream2.MainAxisSize | null | undefined; buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined; buttonMinWidth?: number | null | undefined; buttonHeight?: number | null | undefined; buttonPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; buttonAlignedDropdown?: boolean | null | undefined; layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined; overflowDirection?: upstream6.VerticalDirection | null | undefined}): ButtonBarThemeData;
get alignment(): upstream1.MainAxisAlignment | null;
get mainAxisSize(): upstream2.MainAxisSize | null;
get buttonTextTheme(): upstream3.ButtonTextTheme | null;
get buttonMinWidth(): number | null;
get buttonHeight(): number | null;
get buttonPadding(): upstream4.EdgeInsetsGeometry | null;
get buttonAlignedDropdown(): boolean | null;
get layoutBehavior(): upstream5.ButtonBarLayoutBehavior | null;
get overflowDirection(): upstream6.VerticalDirection | null;
}
export abstract class _ButtonBarThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ButtonBarThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ButtonBarThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ButtonBarThemeData", readonly [], false];
constructor(options?: {alignment?: upstream1.MainAxisAlignment | null | undefined; mainAxisSize?: upstream2.MainAxisSize | null | undefined; buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined; buttonMinWidth?: number | null | undefined; buttonHeight?: number | null | undefined; buttonPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; buttonAlignedDropdown?: boolean | null | undefined; layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined; overflowDirection?: upstream6.VerticalDirection | null | undefined}) { super(_ButtonBarThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ButtonBarThemeDataNative.prototype, _ButtonBarThemeDataProxy);
export namespace _ButtonBarThemeDataFactory { export function implement(args: [options?: {alignment?: upstream1.MainAxisAlignment | null | undefined; mainAxisSize?: upstream2.MainAxisSize | null | undefined; buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined; buttonMinWidth?: number | null | undefined; buttonHeight?: number | null | undefined; buttonPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; buttonAlignedDropdown?: boolean | null | undefined; layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined; overflowDirection?: upstream6.VerticalDirection | null | undefined}], implementation: {}): ButtonBarThemeData {
return constructProxy(_ButtonBarThemeDataProxy, args, implementation) as ButtonBarThemeData; } }
const _ButtonBarThemeDataBinding = _flaxProxyFactory(_ButtonBarThemeDataFactory, _ButtonBarThemeDataNative) as unknown as typeof _ButtonBarThemeDataFactory & (new(options?: {alignment?: upstream1.MainAxisAlignment | null | undefined; mainAxisSize?: upstream2.MainAxisSize | null | undefined; buttonTextTheme?: upstream3.ButtonTextTheme | null | undefined; buttonMinWidth?: number | null | undefined; buttonHeight?: number | null | undefined; buttonPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; buttonAlignedDropdown?: boolean | null | undefined; layoutBehavior?: upstream5.ButtonBarLayoutBehavior | null | undefined; overflowDirection?: upstream6.VerticalDirection | null | undefined}) => _ButtonBarThemeDataNative);
export namespace _ButtonBarThemeDataFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/button_bar_theme.dart::ButtonBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:material_ui/src/button_bar_theme.dart::ButtonBarThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): ButtonBarThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ButtonBarThemeData.lerp", [a, b, t], _flaxMemberParameters2);
return _flaxResult as ButtonBarThemeData | null;
} }
export const ButtonBarThemeData: typeof _ButtonBarThemeDataBinding & _FlaxInstanceType<ButtonBarThemeData> & _FlaxDartType<ButtonBarThemeData, readonly ["class", "flax.material/material#type:ButtonBarThemeData", readonly [], false]> = _flaxBindInstanceType<ButtonBarThemeData, typeof _ButtonBarThemeDataBinding>(_ButtonBarThemeDataBinding, "flax.material/material#type:ButtonBarThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ButtonBarThemeDataBinding & _FlaxInstanceType<ButtonBarThemeData> & _FlaxDartType<ButtonBarThemeData, readonly ["class", "flax.material/material#type:ButtonBarThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "alignment" | "mainAxisSize" | "buttonTextTheme" | "buttonMinWidth" | "buttonHeight" | "buttonPadding" | "buttonAlignedDropdown" | "layoutBehavior" | "overflowDirection" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/button_bar_theme.dart::ButtonBarThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
