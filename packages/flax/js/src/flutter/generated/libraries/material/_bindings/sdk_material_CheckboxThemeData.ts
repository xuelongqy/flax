// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import '@flax/flutter/material/_bindings/sdk_material_MaterialTapTargetSize';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import '@flax/flutter/material/_bindings/sdk_material_VisualDensity';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"checkColor"},{"name":"fillColor"},{"name":"materialTapTargetSize"},{"name":"mouseCursor"},{"name":"overlayColor"},{"name":"shape"},{"name":"side"},{"name":"splashRadius"},{"name":"visualDensity"}] as const;
const _flaxMemberParameters1 = [{"name":"mouseCursor"},{"name":"fillColor"},{"name":"checkColor"},{"name":"overlayColor"},{"name":"splashRadius"},{"name":"materialTapTargetSize"},{"name":"visualDensity"},{"name":"shape"},{"name":"side"}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters4 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CheckboxThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/checkbox_theme.dart::CheckboxThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CheckboxThemeData: unique symbol;
readonly [_flaxDartTypeValue]: CheckboxThemeData;

}
defineObject("flax.core/sdk_material#type:CheckboxThemeData", ["mouseCursor","fillColor","checkColor","overlayColor","splashRadius","materialTapTargetSize","visualDensity","shape","side"], [], _flaxBindingMethods("flax.core/sdk_material#type:CheckboxThemeData", "object", {"copyWith":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _CheckboxThemeDataProxy = {type: "flax.core/sdk_material#type:CheckboxThemeData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters0}, getters: ["mouseCursor","fillColor","checkColor","overlayColor","splashRadius","materialTapTargetSize","visualDensity","shape","side"], setters: [], contextMembers: [], superMembers: ["get:mouseCursor","get:fillColor","get:checkColor","get:overlayColor","get:splashRadius","get:materialTapTargetSize","get:visualDensity","get:shape","get:side","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface CheckboxThemeData {
readonly [_flaxDartTypeValue]: CheckboxThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; fillColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; checkColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; splashRadius?: number | null | undefined; materialTapTargetSize?: upstream4.MaterialTapTargetSize | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): CheckboxThemeData;
get mouseCursor(): upstream1.WidgetStateProperty<upstream2.MouseCursor | null> | null;
get fillColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
get checkColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
get overlayColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
get splashRadius(): number | null;
get materialTapTargetSize(): upstream4.MaterialTapTargetSize | null;
get visualDensity(): upstream5.VisualDensity | null;
get shape(): upstream6.OutlinedBorder | null;
get side(): upstream7.BorderSide | null;
}
export abstract class CheckboxThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CheckboxThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CheckboxThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:CheckboxThemeData", readonly [], false];
constructor(options?: {mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; fillColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; checkColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; splashRadius?: number | null | undefined; materialTapTargetSize?: upstream4.MaterialTapTargetSize | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_CheckboxThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CheckboxThemeData.prototype, _CheckboxThemeDataProxy);
export namespace CheckboxThemeData { export function implement(args: [options?: {mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; fillColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; checkColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; splashRadius?: number | null | undefined; materialTapTargetSize?: upstream4.MaterialTapTargetSize | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): CheckboxThemeData {
return constructProxy(_CheckboxThemeDataProxy, args, implementation) as CheckboxThemeData; } }
export namespace CheckboxThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/checkbox_theme.dart::CheckboxThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/checkbox_theme.dart::CheckboxThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): CheckboxThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:CheckboxThemeData.lerp", [a, b, t]);
return _flaxResult as CheckboxThemeData;
} }
_flaxBindInstanceType<CheckboxThemeData, typeof CheckboxThemeData>(CheckboxThemeData, "flax.core/sdk_material#type:CheckboxThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mouseCursor" | "fillColor" | "checkColor" | "overlayColor" | "splashRadius" | "materialTapTargetSize" | "visualDensity" | "shape" | "side" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/checkbox_theme.dart::CheckboxThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
