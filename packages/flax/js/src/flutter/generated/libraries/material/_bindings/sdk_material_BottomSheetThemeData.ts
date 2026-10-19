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
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters19, _flaxMemberParameters20, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BottomSheetThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/material/bottom_sheet_theme.dart::BottomSheetThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __BottomSheetThemeData: unique symbol;
readonly [_flaxDartTypeValue]: BottomSheetThemeData;

}
defineObject("flax.core/sdk_material#type:BottomSheetThemeData", ["backgroundColor","surfaceTintColor","elevation","modalBackgroundColor","modalBarrierColor","shadowColor","modalElevation","shape","showDragHandle","dragHandleColor","dragHandleSize","clipBehavior","constraints"], [], _flaxBindingMethods("flax.core/sdk_material#type:BottomSheetThemeData", "object", {"copyWith":_flaxMemberParameters19}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _BottomSheetThemeDataProxy = {type: "flax.core/sdk_material#type:BottomSheetThemeData", parameters: _flaxMemberParameters20, constructors: {"": _flaxMemberParameters20}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters19}, getters: ["backgroundColor","surfaceTintColor","elevation","modalBackgroundColor","modalBarrierColor","shadowColor","modalElevation","shape","showDragHandle","dragHandleColor","dragHandleSize","clipBehavior","constraints"], setters: [], contextMembers: [], superMembers: ["get:backgroundColor","get:surfaceTintColor","get:elevation","get:modalBackgroundColor","get:modalBarrierColor","get:shadowColor","get:modalElevation","get:shape","get:showDragHandle","get:dragHandleColor","get:dragHandleSize","get:clipBehavior","get:constraints","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface BottomSheetThemeData {
readonly [_flaxDartTypeValue]: BottomSheetThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; modalBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; modalBarrierColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; modalElevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; showDragHandle?: boolean | null | undefined; dragHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dragHandleSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; clipBehavior?: upstream4.Clip | null | undefined; constraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined}): BottomSheetThemeData;
get backgroundColor(): upstream1.Color | null;
get surfaceTintColor(): upstream1.Color | null;
get elevation(): number | null;
get modalBackgroundColor(): upstream1.Color | null;
get modalBarrierColor(): upstream1.Color | null;
get shadowColor(): upstream1.Color | null;
get modalElevation(): number | null;
get shape(): upstream2.ShapeBorder | null;
get showDragHandle(): boolean | null;
get dragHandleColor(): upstream1.Color | null;
get dragHandleSize(): upstream3.Size | null;
get clipBehavior(): upstream4.Clip | null;
get constraints(): upstream5.BoxConstraints | null;
}
export abstract class BottomSheetThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BottomSheetThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BottomSheetThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:BottomSheetThemeData", readonly [], false];
constructor(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; modalBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; modalBarrierColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; modalElevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; showDragHandle?: boolean | null | undefined; dragHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dragHandleSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; clipBehavior?: upstream4.Clip | null | undefined; constraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined}) { super(_BottomSheetThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BottomSheetThemeData.prototype, _BottomSheetThemeDataProxy);
export namespace BottomSheetThemeData { export function implement(args: [options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; modalBackgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; modalBarrierColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; modalElevation?: number | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; showDragHandle?: boolean | null | undefined; dragHandleColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; dragHandleSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; clipBehavior?: upstream4.Clip | null | undefined; constraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined}], implementation: {}): BottomSheetThemeData {
return constructProxy(_BottomSheetThemeDataProxy, args, implementation) as BottomSheetThemeData; } }
export namespace BottomSheetThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/material/bottom_sheet_theme.dart::BottomSheetThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/material/bottom_sheet_theme.dart::BottomSheetThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): BottomSheetThemeData | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:BottomSheetThemeData.lerp", [a, b, t]);
return _flaxResult as BottomSheetThemeData | null;
} }
_flaxBindInstanceType<BottomSheetThemeData, typeof BottomSheetThemeData>(BottomSheetThemeData, "flax.core/sdk_material#type:BottomSheetThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "backgroundColor" | "surfaceTintColor" | "elevation" | "modalBackgroundColor" | "modalBarrierColor" | "shadowColor" | "modalElevation" | "shape" | "showDragHandle" | "dragHandleColor" | "dragHandleSize" | "clipBehavior" | "constraints" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/bottom_sheet_theme.dart::BottomSheetThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
