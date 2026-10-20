// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PositionedGestureDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PositionedGestureDetails';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters93, _flaxMemberParameters7, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters9 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TapDragDownDetails extends Omit<upstream0.PositionedGestureDetails, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PositionedGestureDetails>, Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TapDragDownDetails: unique symbol;
readonly [_flaxDartTypeValue]: TapDragDownDetails;

readonly globalPosition: upstream2.Offset;
readonly localPosition: upstream2.Offset;
readonly kind: upstream3.PointerDeviceKind | null;
readonly consecutiveTapCount: number;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_gestures#type:TapDragDownDetails", ["globalPosition","localPosition","kind","consecutiveTapCount"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:TapDragDownDetails", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _TapDragDownDetailsFactory(options: { globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; kind?: upstream3.PointerDeviceKind | null | undefined; consecutiveTapCount: number }): TapDragDownDetails {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:TapDragDownDetails", "", [{"name":"globalPosition","required":true},{"name":"localPosition","required":true},{"name":"kind"},{"name":"consecutiveTapCount","required":true}], [], options) as TapDragDownDetails;
}
const _TapDragDownDetailsProxy = {type: "flax.core/sdk_gestures#type:TapDragDownDetails", parameters: _flaxMemberParameters93, constructors: {"": _flaxMemberParameters93}, methods: {"toStringShort":_flaxMemberParameters7,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters9}, getters: ["globalPosition","localPosition","kind","consecutiveTapCount"], setters: [], contextMembers: [], superMembers: ["get:globalPosition","get:localPosition","get:kind","get:consecutiveTapCount","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _TapDragDownDetailsNative extends TapDragDownDetails {
readonly [_flaxDartTypeValue]: _TapDragDownDetailsNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get globalPosition(): upstream2.Offset;
get localPosition(): upstream2.Offset;
get kind(): upstream3.PointerDeviceKind | null;
get consecutiveTapCount(): number;
}
export abstract class _TapDragDownDetailsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TapDragDownDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TapDragDownDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:TapDragDownDetails", readonly [], false];
constructor(options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; kind?: upstream3.PointerDeviceKind | null | undefined; consecutiveTapCount: number}) { super(_TapDragDownDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TapDragDownDetailsNative.prototype, _TapDragDownDetailsProxy);
export namespace _TapDragDownDetailsFactory { export function implement(args: [options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; kind?: upstream3.PointerDeviceKind | null | undefined; consecutiveTapCount: number}], implementation: {}): TapDragDownDetails {
return constructProxy(_TapDragDownDetailsProxy, args, implementation) as TapDragDownDetails; } }
const _TapDragDownDetailsBinding = _flaxProxyFactory(_TapDragDownDetailsFactory, _TapDragDownDetailsNative) as unknown as typeof _TapDragDownDetailsFactory & (new(options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; kind?: upstream3.PointerDeviceKind | null | undefined; consecutiveTapCount: number}) => _TapDragDownDetailsNative);
export const TapDragDownDetails: typeof _TapDragDownDetailsBinding & _FlaxInstanceType<TapDragDownDetails> & _FlaxDartType<TapDragDownDetails, readonly ["class", "flax.core/sdk_gestures#type:TapDragDownDetails", readonly [], false]> = _flaxBindInstanceType<TapDragDownDetails, typeof _TapDragDownDetailsBinding>(_TapDragDownDetailsBinding, "flax.core/sdk_gestures#type:TapDragDownDetails", ["dart:core::Object","flax.core/sdk_gestures#type:PositionedGestureDetails","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TapDragDownDetailsBinding & _FlaxInstanceType<TapDragDownDetails> & _FlaxDartType<TapDragDownDetails, readonly ["class", "flax.core/sdk_gestures#type:TapDragDownDetails", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "globalPosition" | "localPosition" | "kind" | "consecutiveTapCount" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails" | "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
