// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesController';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_IconAlignment';
import '@flax/flutter/material/_bindings/sdk_material_IconAlignment';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ButtonStyleButton extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/button_style_button.dart::ButtonStyleButton": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ButtonStyleButton: unique symbol;
readonly [_flaxDartTypeValue]: ButtonStyleButton;

readonly onPressed: (() => void) | null;
readonly onLongPress: (() => void) | null;
readonly onHover: ((value: boolean) => void) | null;
readonly onFocusChange: ((value: boolean) => void) | null;
readonly style: upstream1.ButtonStyle | null;
readonly clipBehavior: upstream2.Clip | null;
readonly focusNode: upstream3.FocusNode | null;
readonly autofocus: boolean;
readonly statesController: upstream4.WidgetStatesController | null;
readonly isSemanticButton: boolean | null;
readonly iconAlignment: upstream5.IconAlignment | null;
readonly tooltip: string | null;
readonly child: Widget | null;
readonly enabled: boolean;
readonly key: upstream6.Key | null;
defaultStyleOf(context: upstream10.BuildContext): upstream1.ButtonStyle;
themeStyleOf(context: upstream10.BuildContext): upstream1.ButtonStyle | null;
createState(): upstream11.State<ButtonStyleButton>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream13.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream14.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream14.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream16.DiagnosticsTreeStyle | null | undefined}): upstream15.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:ButtonStyleButton", ["onPressed","onLongPress","onHover","onFocusChange","style","clipBehavior","focusNode","autofocus","statesController","isSemanticButton","iconAlignment","tooltip","child","enabled","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:ButtonStyleButton", "object", {"defaultStyleOf":_flaxMemberParameters0,"themeStyleOf":_flaxMemberParameters0,"createState":_flaxMemberParameters1,"createElement":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export namespace _ButtonStyleButtonFactory { function _flaxDefault_allOrNull<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>) | null): upstream7.WidgetStateProperty<_FlaxDartOutput<T>> | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:ButtonStyleButton.allOrNull", [value]);
return _flaxResult as upstream7.WidgetStateProperty<_FlaxDartOutput<T>> | null;
}
export const allOrNull = _flaxDefineDartCallTypes(_flaxDefault_allOrNull, {"id":"flax.core/sdk_material#function:ButtonStyleButton.allOrNull","parameters":[{"name":"value","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_allOrNull, _FlaxSignature0>;
}
export namespace _ButtonStyleButtonFactory { export function defaultColor(enabled: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, disabled: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null): upstream7.WidgetStateProperty<upstream8.Color | null> | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:ButtonStyleButton.defaultColor", [enabled, disabled]);
return _flaxResult as upstream7.WidgetStateProperty<upstream8.Color | null> | null;
} }
export namespace _ButtonStyleButtonFactory { export function scaledPadding(geometry1x: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>, geometry2x: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>, geometry3x: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }>, fontSizeMultiplier: number): upstream9.EdgeInsetsGeometry {
if (arguments.length > 4) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:ButtonStyleButton.scaledPadding", [geometry1x, geometry2x, geometry3x, fontSizeMultiplier]);
return _flaxResult as upstream9.EdgeInsetsGeometry;
} }
export const ButtonStyleButton: typeof _ButtonStyleButtonFactory & _FlaxInstanceType<ButtonStyleButton> & _FlaxDartType<ButtonStyleButton, readonly ["class", "flax.core/sdk_material#type:ButtonStyleButton", readonly [], false]> = _flaxBindInstanceType<ButtonStyleButton, typeof _ButtonStyleButtonFactory>(_ButtonStyleButtonFactory, "flax.core/sdk_material#type:ButtonStyleButton", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ButtonStyleButtonFactory & _FlaxInstanceType<ButtonStyleButton> & _FlaxDartType<ButtonStyleButton, readonly ["class", "flax.core/sdk_material#type:ButtonStyleButton", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onPressed" | "onLongPress" | "onHover" | "onFocusChange" | "style" | "clipBehavior" | "focusNode" | "autofocus" | "statesController" | "isSemanticButton" | "iconAlignment" | "tooltip" | "child" | "enabled" | "key" | "defaultStyleOf" | "themeStyleOf" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/button_style_button.dart::ButtonStyleButton" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (value: (_Selected0 | DartInput<_Selected0>) | null) => upstream7.WidgetStateProperty<_Selected0> | null : never : never; }
