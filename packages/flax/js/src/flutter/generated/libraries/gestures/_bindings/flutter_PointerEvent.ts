// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters95, _flaxMemberParameters96 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerEvent extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PointerEvent: unique symbol;
readonly [_flaxDartTypeValue]: PointerEvent;

readonly viewId: number;
readonly embedderId: number;
readonly timeStamp: upstream1.Duration;
readonly pointer: number;
readonly kind: upstream2.PointerDeviceKind;
readonly device: number;
readonly position: upstream3.Offset;
readonly localPosition: upstream3.Offset;
readonly delta: upstream3.Offset;
readonly localDelta: upstream3.Offset;
readonly buttons: number;
readonly down: boolean;
readonly obscured: boolean;
readonly pressure: number;
readonly pressureMin: number;
readonly pressureMax: number;
readonly distance: number;
readonly distanceMin: number;
readonly distanceMax: number;
readonly size: number;
readonly radiusMajor: number;
readonly radiusMinor: number;
readonly radiusMin: number;
readonly radiusMax: number;
readonly orientation: number;
readonly tilt: number;
readonly platformData: number;
readonly synthesized: boolean;
readonly transform: upstream4.Matrix4 | null;
readonly original: PointerEvent | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
transformed(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): PointerEvent;
copyWith(options?: {buttons?: number | null | undefined; delta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; device?: number | null | undefined; distance?: number | null | undefined; distanceMax?: number | null | undefined; embedderId?: number | null | undefined; kind?: upstream2.PointerDeviceKind | null | undefined; obscured?: boolean | null | undefined; orientation?: number | null | undefined; pointer?: number | null | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; pressure?: number | null | undefined; pressureMax?: number | null | undefined; pressureMin?: number | null | undefined; radiusMajor?: number | null | undefined; radiusMax?: number | null | undefined; radiusMin?: number | null | undefined; radiusMinor?: number | null | undefined; size?: number | null | undefined; synthesized?: boolean | null | undefined; tilt?: number | null | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration] }> | null | undefined; viewId?: number | null | undefined}): PointerEvent;
}
defineObject("flax.core/flutter#type:PointerEvent", ["viewId","embedderId","timeStamp","pointer","kind","device","position","localPosition","delta","localDelta","buttons","down","obscured","pressure","pressureMin","pressureMax","distance","distanceMin","distanceMax","size","radiusMajor","radiusMinor","radiusMin","radiusMax","orientation","tilt","platformData","synthesized","transform","original"], [], _flaxBindingMethods("flax.core/flutter#type:PointerEvent", "object", {"transformed":_flaxMemberParameters95,"copyWith":_flaxMemberParameters96}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export namespace _PointerEventFactory { export function transformPosition(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null, position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream3.Offset {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:PointerEvent.transformPosition", [transform, position]);
return _flaxResult as upstream3.Offset;
} }
export namespace _PointerEventFactory { export function transformDeltaViaPositions(options: { transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null; transformedEndPosition?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; untransformedDelta: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; untransformedEndPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): upstream3.Offset {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["transform","transformedEndPosition","untransformedDelta","untransformedEndPosition"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:PointerEvent.transformDeltaViaPositions", [options.transform, options.transformedEndPosition, options.untransformedDelta, options.untransformedEndPosition]);
return _flaxResult as upstream3.Offset;
} }
export namespace _PointerEventFactory { export function removePerspectiveTransform(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): upstream4.Matrix4 {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:PointerEvent.removePerspectiveTransform", [transform]);
return _flaxResult as upstream4.Matrix4;
} }
export const PointerEvent: typeof _PointerEventFactory & _FlaxInstanceType<PointerEvent> & _FlaxDartType<PointerEvent, readonly ["class", "flax.core/flutter#type:PointerEvent", readonly [], false]> = _flaxBindInstanceType<PointerEvent, typeof _PointerEventFactory>(_PointerEventFactory, "flax.core/flutter#type:PointerEvent", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PointerEventFactory & _FlaxInstanceType<PointerEvent> & _FlaxDartType<PointerEvent, readonly ["class", "flax.core/flutter#type:PointerEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "embedderId" | "timeStamp" | "pointer" | "kind" | "device" | "position" | "localPosition" | "delta" | "localDelta" | "buttons" | "down" | "obscured" | "pressure" | "pressureMin" | "pressureMax" | "distance" | "distanceMin" | "distanceMax" | "size" | "radiusMajor" | "radiusMinor" | "radiusMin" | "radiusMax" | "orientation" | "tilt" | "platformData" | "synthesized" | "transform" | "original" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "transformed" | "copyWith" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
