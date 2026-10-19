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
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"backgroundColor"},{"name":"fillColor"},{"name":"innerRadius"},{"name":"materialTapTargetSize"},{"name":"mouseCursor"},{"name":"overlayColor"},{"name":"side"},{"name":"splashRadius"},{"name":"visualDensity"}] as const;
const _flaxMemberParameters1 = [{"name":"mouseCursor"},{"name":"fillColor"},{"name":"overlayColor"},{"name":"splashRadius"},{"name":"materialTapTargetSize"},{"name":"visualDensity"},{"name":"backgroundColor"},{"name":"side"},{"name":"innerRadius"}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters4 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RadioThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/radio_theme.dart::RadioThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RadioThemeData: unique symbol;
readonly [_flaxDartTypeValue]: RadioThemeData;

}
defineObject("flax.core/sdk_material#type:RadioThemeData", ["mouseCursor","fillColor","overlayColor","splashRadius","materialTapTargetSize","visualDensity","backgroundColor","side","innerRadius"], [], _flaxBindingMethods("flax.core/sdk_material#type:RadioThemeData", "object", {"copyWith":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _RadioThemeDataProxy = {type: "flax.core/sdk_material#type:RadioThemeData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters0}, getters: ["mouseCursor","fillColor","overlayColor","splashRadius","materialTapTargetSize","visualDensity","backgroundColor","side","innerRadius"], setters: [], contextMembers: [], superMembers: ["get:mouseCursor","get:fillColor","get:overlayColor","get:splashRadius","get:materialTapTargetSize","get:visualDensity","get:backgroundColor","get:side","get:innerRadius","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface RadioThemeData {
readonly [_flaxDartTypeValue]: RadioThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; fillColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; splashRadius?: number | null | undefined; materialTapTargetSize?: upstream4.MaterialTapTargetSize | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; innerRadius?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null] }> | null | undefined}): RadioThemeData;
get mouseCursor(): upstream1.WidgetStateProperty<upstream2.MouseCursor | null> | null;
get fillColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
get overlayColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
get splashRadius(): number | null;
get materialTapTargetSize(): upstream4.MaterialTapTargetSize | null;
get visualDensity(): upstream5.VisualDensity | null;
get backgroundColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
get side(): upstream6.BorderSide | null;
get innerRadius(): upstream1.WidgetStateProperty<number | null> | null;
}
export abstract class RadioThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RadioThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RadioThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:RadioThemeData", readonly [], false];
constructor(options?: {mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; fillColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; splashRadius?: number | null | undefined; materialTapTargetSize?: upstream4.MaterialTapTargetSize | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; innerRadius?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null] }> | null | undefined}) { super(_RadioThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RadioThemeData.prototype, _RadioThemeDataProxy);
export namespace RadioThemeData { export function implement(args: [options?: {mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.MouseCursor | null] }> | null | undefined; fillColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; overlayColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; splashRadius?: number | null | undefined; materialTapTargetSize?: upstream4.MaterialTapTargetSize | null | undefined; visualDensity?: Readonly<{ "__flaxBound:package:flutter/src/material/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; innerRadius?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null] }> | null | undefined}], implementation: {}): RadioThemeData {
return constructProxy(_RadioThemeDataProxy, args, implementation) as RadioThemeData; } }
export namespace RadioThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/radio_theme.dart::RadioThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/radio_theme.dart::RadioThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): RadioThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:RadioThemeData.lerp", [a, b, t]);
return _flaxResult as RadioThemeData;
} }
_flaxBindInstanceType<RadioThemeData, typeof RadioThemeData>(RadioThemeData, "flax.core/sdk_material#type:RadioThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "mouseCursor" | "fillColor" | "overlayColor" | "splashRadius" | "materialTapTargetSize" | "visualDensity" | "backgroundColor" | "side" | "innerRadius" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/radio_theme.dart::RadioThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
