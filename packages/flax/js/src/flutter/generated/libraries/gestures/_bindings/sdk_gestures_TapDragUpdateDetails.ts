// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PositionedGestureDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PositionedGestureDetails';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters96, _flaxMemberParameters7, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters9 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TapDragUpdateDetails extends Omit<upstream0.PositionedGestureDetails, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PositionedGestureDetails>, Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpdateDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TapDragUpdateDetails: unique symbol;
readonly [_flaxDartTypeValue]: TapDragUpdateDetails;

}
defineObject("flax.core/sdk_gestures#type:TapDragUpdateDetails", ["globalPosition","localPosition","sourceTimeStamp","delta","primaryDelta","kind","offsetFromOrigin","localOffsetFromOrigin","consecutiveTapCount"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:TapDragUpdateDetails", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _TapDragUpdateDetailsProxy = {type: "flax.core/sdk_gestures#type:TapDragUpdateDetails", parameters: _flaxMemberParameters96, constructors: {"": _flaxMemberParameters96}, methods: {"toStringShort":_flaxMemberParameters7,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters9}, getters: ["globalPosition","localPosition","sourceTimeStamp","delta","primaryDelta","kind","offsetFromOrigin","localOffsetFromOrigin","consecutiveTapCount"], setters: [], contextMembers: [], superMembers: ["get:globalPosition","get:localPosition","get:sourceTimeStamp","get:delta","get:primaryDelta","get:kind","get:offsetFromOrigin","get:localOffsetFromOrigin","get:consecutiveTapCount","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface TapDragUpdateDetails {
readonly [_flaxDartTypeValue]: TapDragUpdateDetails;

toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get globalPosition(): upstream2.Offset;
get localPosition(): upstream2.Offset;
get sourceTimeStamp(): upstream3.Duration | null;
get delta(): upstream2.Offset;
get primaryDelta(): number | null;
get kind(): upstream4.PointerDeviceKind | null;
get offsetFromOrigin(): upstream2.Offset;
get localOffsetFromOrigin(): upstream2.Offset;
get consecutiveTapCount(): number;
}
export abstract class TapDragUpdateDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TapDragUpdateDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TapDragUpdateDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:TapDragUpdateDetails", readonly [], false];
constructor(options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }> | null | undefined; delta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; primaryDelta?: number | null | undefined; kind?: upstream4.PointerDeviceKind | null | undefined; offsetFromOrigin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; localOffsetFromOrigin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; consecutiveTapCount: number}) { super(_TapDragUpdateDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TapDragUpdateDetails.prototype, _TapDragUpdateDetailsProxy);
export namespace TapDragUpdateDetails { export function implement(args: [options: {globalPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }> | null | undefined; delta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; primaryDelta?: number | null | undefined; kind?: upstream4.PointerDeviceKind | null | undefined; offsetFromOrigin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; localOffsetFromOrigin: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; consecutiveTapCount: number}], implementation: {}): TapDragUpdateDetails {
return constructProxy(_TapDragUpdateDetailsProxy, args, implementation) as TapDragUpdateDetails; } }
_flaxBindInstanceType<TapDragUpdateDetails, typeof TapDragUpdateDetails>(TapDragUpdateDetails, "flax.core/sdk_gestures#type:TapDragUpdateDetails", ["dart:core::Object","flax.core/sdk_gestures#type:PositionedGestureDetails","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "globalPosition" | "localPosition" | "sourceTimeStamp" | "delta" | "primaryDelta" | "kind" | "offsetFromOrigin" | "localOffsetFromOrigin" | "consecutiveTapCount" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpdateDetails" | "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
