// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_BoxBorder';
import '@flax/flutter/painting/_bindings/flutter_BoxBorder';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import '@flax/flutter/painting/_bindings/sdk_painting_Gradient';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters297, _flaxMemberParameters298, _flaxMemberParameters299, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StepStyle extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __StepStyle: unique symbol;
readonly [_flaxDartTypeValue]: StepStyle;

readonly color: upstream1.Color | null;
readonly errorColor: upstream1.Color | null;
readonly connectorColor: upstream1.Color | null;
readonly connectorThickness: number | null;
readonly border: upstream2.BoxBorder | null;
readonly boxShadow: upstream3.BoxShadow | null;
readonly gradient: upstream4.Gradient | null;
readonly indexStyle: upstream5.TextStyle | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; boxShadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorThickness?: number | null | undefined; errorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; indexStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): StepStyle;
merge(stepStyle: Readonly<{ "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): StepStyle;
}
defineObject("flax.material/material#type:StepStyle", ["color","errorColor","connectorColor","connectorThickness","border","boxShadow","gradient","indexStyle"], [], _flaxBindingMethods("flax.material/material#type:StepStyle", "object", {"copyWith":_flaxMemberParameters297,"merge":_flaxMemberParameters298}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _StepStyleFactory(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; errorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorThickness?: number | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; boxShadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; indexStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined } = {}): StepStyle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:StepStyle", "", [{"name":"color"},{"name":"errorColor"},{"name":"connectorColor"},{"name":"connectorThickness"},{"name":"border"},{"name":"boxShadow"},{"name":"gradient"},{"name":"indexStyle"}], [], options) as StepStyle;
}
const _StepStyleProxy = {type: "flax.material/material#type:StepStyle", parameters: _flaxMemberParameters299, constructors: {"": _flaxMemberParameters299}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters297,"merge":_flaxMemberParameters298}, getters: ["color","errorColor","connectorColor","connectorThickness","border","boxShadow","gradient","indexStyle"], setters: [], contextMembers: [], superMembers: ["get:color","get:errorColor","get:connectorColor","get:connectorThickness","get:border","get:boxShadow","get:gradient","get:indexStyle","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith","merge"]} as const;
export interface _StepStyleNative extends StepStyle {
readonly [_flaxDartTypeValue]: _StepStyleNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; errorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorThickness?: number | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; boxShadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; indexStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}): StepStyle;
merge(stepStyle: Readonly<{ "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): StepStyle;
get color(): upstream1.Color | null;
get errorColor(): upstream1.Color | null;
get connectorColor(): upstream1.Color | null;
get connectorThickness(): number | null;
get border(): upstream2.BoxBorder | null;
get boxShadow(): upstream3.BoxShadow | null;
get gradient(): upstream4.Gradient | null;
get indexStyle(): upstream5.TextStyle | null;
}
export abstract class _StepStyleNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StepStyle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StepStyle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:StepStyle", readonly [], false];
constructor(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; errorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorThickness?: number | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; boxShadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; indexStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_StepStyleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_StepStyleNative.prototype, _StepStyleProxy);
export namespace _StepStyleFactory { export function implement(args: [options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; errorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorThickness?: number | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; boxShadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; indexStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): StepStyle {
return constructProxy(_StepStyleProxy, args, implementation) as StepStyle; } }
const _StepStyleBinding = _flaxProxyFactory(_StepStyleFactory, _StepStyleNative) as unknown as typeof _StepStyleFactory & (new(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; errorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; connectorThickness?: number | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; boxShadow?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }> | null | undefined; gradient?: Readonly<{ "__flaxBound:package:flutter/src/painting/gradient.dart::Gradient": readonly [] }> | null | undefined; indexStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) => _StepStyleNative);
export const StepStyle: typeof _StepStyleBinding & _FlaxInstanceType<StepStyle> & _FlaxDartType<StepStyle, readonly ["class", "flax.material/material#type:StepStyle", readonly [], false]> = _flaxBindInstanceType<StepStyle, typeof _StepStyleBinding>(_StepStyleBinding, "flax.material/material#type:StepStyle", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _StepStyleBinding & _FlaxInstanceType<StepStyle> & _FlaxDartType<StepStyle, readonly ["class", "flax.material/material#type:StepStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "color" | "errorColor" | "connectorColor" | "connectorThickness" | "border" | "boxShadow" | "gradient" | "indexStyle" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "merge" | "__flaxBound:package:material_ui/src/stepper.dart::StepStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
