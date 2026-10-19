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
import { _flaxMemberParameters26, _flaxMemberParameters7, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters9 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DragStartDetails extends Omit<upstream0.PositionedGestureDetails, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PositionedGestureDetails>, Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DragStartDetails: unique symbol;
readonly [_flaxDartTypeValue]: DragStartDetails;

}
defineObject("flax.core/sdk_gestures#type:DragStartDetails", ["globalPosition","localPosition","sourceTimeStamp","kind"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:DragStartDetails", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _DragStartDetailsProxy = {type: "flax.core/sdk_gestures#type:DragStartDetails", parameters: _flaxMemberParameters26, constructors: {"": _flaxMemberParameters26}, methods: {"toStringShort":_flaxMemberParameters7,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters9}, getters: ["globalPosition","localPosition","sourceTimeStamp","kind"], setters: [], contextMembers: [], superMembers: ["get:globalPosition","get:localPosition","get:sourceTimeStamp","get:kind","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface DragStartDetails {
readonly [_flaxDartTypeValue]: DragStartDetails;

toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get globalPosition(): upstream2.Offset;
get localPosition(): upstream2.Offset;
get sourceTimeStamp(): upstream3.Duration | null;
get kind(): upstream4.PointerDeviceKind | null;
}
export abstract class DragStartDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DragStartDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DragStartDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:DragStartDetails", readonly [], false];
constructor(options?: {globalPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }> | null | undefined; kind?: upstream4.PointerDeviceKind | null | undefined}) { super(_DragStartDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DragStartDetails.prototype, _DragStartDetailsProxy);
export namespace DragStartDetails { export function implement(args: [options?: {globalPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }> | null | undefined; kind?: upstream4.PointerDeviceKind | null | undefined}], implementation: {}): DragStartDetails {
return constructProxy(_DragStartDetailsProxy, args, implementation) as DragStartDetails; } }
_flaxBindInstanceType<DragStartDetails, typeof DragStartDetails>(DragStartDetails, "flax.core/sdk_gestures#type:DragStartDetails", ["dart:core::Object","flax.core/sdk_gestures#type:PositionedGestureDetails","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "globalPosition" | "localPosition" | "sourceTimeStamp" | "kind" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragStartDetails" | "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
