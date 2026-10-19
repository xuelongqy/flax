// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PositionedGestureDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PositionedGestureDetails';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters93, _flaxMemberParameters7, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters9 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TapDragEndDetails extends Omit<upstream0.PositionedGestureDetails, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PositionedGestureDetails>, Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TapDragEndDetails: unique symbol;
readonly [_flaxDartTypeValue]: TapDragEndDetails;

}
defineObject("flax.core/sdk_gestures#type:TapDragEndDetails", ["globalPosition","localPosition","velocity","primaryVelocity","consecutiveTapCount"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:TapDragEndDetails", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _TapDragEndDetailsProxy = {type: "flax.core/sdk_gestures#type:TapDragEndDetails", parameters: _flaxMemberParameters93, constructors: {"": _flaxMemberParameters93}, methods: {"toStringShort":_flaxMemberParameters7,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters9}, getters: ["globalPosition","localPosition","velocity","primaryVelocity","consecutiveTapCount"], setters: [], contextMembers: [], superMembers: ["get:globalPosition","get:localPosition","get:velocity","get:primaryVelocity","get:consecutiveTapCount","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface TapDragEndDetails {
readonly [_flaxDartTypeValue]: TapDragEndDetails;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get globalPosition(): upstream2.Offset;
get localPosition(): upstream2.Offset;
get velocity(): upstream3.Velocity;
get primaryVelocity(): number | null;
get consecutiveTapCount(): number;
}
export abstract class TapDragEndDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TapDragEndDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TapDragEndDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:TapDragEndDetails", readonly [], false];
constructor(options: {globalPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; velocity?: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }> | undefined; primaryVelocity?: number | null | undefined; consecutiveTapCount: number}) { super(_TapDragEndDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TapDragEndDetails.prototype, _TapDragEndDetailsProxy);
export namespace TapDragEndDetails { export function implement(args: [options: {globalPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; velocity?: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }> | undefined; primaryVelocity?: number | null | undefined; consecutiveTapCount: number}], implementation: {}): TapDragEndDetails {
return constructProxy(_TapDragEndDetailsProxy, args, implementation) as TapDragEndDetails; } }
_flaxBindInstanceType<TapDragEndDetails, typeof TapDragEndDetails>(TapDragEndDetails, "flax.core/sdk_gestures#type:TapDragEndDetails", ["dart:core::Object","flax.core/sdk_gestures#type:PositionedGestureDetails","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "globalPosition" | "localPosition" | "velocity" | "primaryVelocity" | "consecutiveTapCount" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails" | "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
