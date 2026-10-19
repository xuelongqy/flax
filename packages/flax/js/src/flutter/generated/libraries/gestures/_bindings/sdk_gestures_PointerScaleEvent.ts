// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerSignalEvent';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters41, _flaxMemberParameters75, _flaxMemberParameters7, _flaxMemberParameters76, _flaxMemberParameters15, _flaxMemberParameters9, _flaxMemberParameters77, _flaxMemberParameters16 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerScaleEvent extends Omit<upstream0.PointerSignalEvent, _flaxOwnMembers0>, Omit<upstream1.PointerEvent, _flaxOwnMembers0 | keyof upstream0.PointerSignalEvent>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PointerSignalEvent | keyof upstream1.PointerEvent>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerScaleEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerScaleEvent": readonly [] }> { readonly __PointerScaleEvent: unique symbol;
readonly [_flaxDartTypeValue]: PointerScaleEvent;

}
defineObject("flax.core/sdk_gestures#type:PointerScaleEvent", ["viewId","embedderId","timeStamp","pointer","kind","device","position","localPosition","delta","localDelta","buttons","down","obscured","pressure","pressureMin","pressureMax","distance","distanceMin","distanceMax","size","radiusMajor","radiusMinor","radiusMin","radiusMax","orientation","tilt","platformData","synthesized","transform","original","scale"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:PointerScaleEvent", "object", {"transformed":_flaxMemberParameters41,"copyWith":_flaxMemberParameters75,"toStringFull":_flaxMemberParameters7}, {}), [], undefined, "flax.core/sdk_gestures#type:PointerSignalEvent");
const _PointerScaleEventProxy = {type: "flax.core/sdk_gestures#type:PointerScaleEvent", parameters: _flaxMemberParameters76, constructors: {"": _flaxMemberParameters76}, methods: {"transformed":_flaxMemberParameters41,"copyWith":_flaxMemberParameters75,"toStringShort":_flaxMemberParameters7,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters9,"respond":_flaxMemberParameters77,"toString":_flaxMemberParameters16,"toStringFull":_flaxMemberParameters7}, getters: ["scale","viewId","embedderId","timeStamp","pointer","kind","device","position","localPosition","delta","localDelta","buttons","down","obscured","pressure","pressureMin","pressureMax","distance","distanceMin","distanceMax","size","radiusMajor","radiusMinor","radiusMin","radiusMax","orientation","tilt","platformData","synthesized","transform","original"], setters: [], contextMembers: [], superMembers: ["get:scale","get:viewId","get:embedderId","get:timeStamp","get:pointer","get:kind","get:device","get:position","get:localPosition","get:delta","get:localDelta","get:buttons","get:down","get:obscured","get:pressure","get:pressureMin","get:pressureMax","get:distance","get:distanceMin","get:distanceMax","get:size","get:radiusMajor","get:radiusMinor","get:radiusMin","get:radiusMax","get:orientation","get:tilt","get:platformData","get:synthesized","get:transform","get:original","transformed","copyWith","toStringShort","toDiagnosticsNode","debugFillProperties","respond","toString","toStringFull"]} as const;
export interface PointerScaleEvent {
readonly [_flaxDartTypeValue]: PointerScaleEvent;

transformed(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): PointerScaleEvent;
copyWith(options?: {viewId?: number | null | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }> | null | undefined; pointer?: number | null | undefined; kind?: upstream4.PointerDeviceKind | null | undefined; device?: number | null | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; delta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; buttons?: number | null | undefined; obscured?: boolean | null | undefined; pressure?: number | null | undefined; pressureMin?: number | null | undefined; pressureMax?: number | null | undefined; distance?: number | null | undefined; distanceMax?: number | null | undefined; size?: number | null | undefined; radiusMajor?: number | null | undefined; radiusMinor?: number | null | undefined; radiusMin?: number | null | undefined; radiusMax?: number | null | undefined; orientation?: number | null | undefined; tilt?: number | null | undefined; synthesized?: boolean | null | undefined; embedderId?: number | null | undefined; scale?: number | null | undefined}): PointerScaleEvent;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
respond(options: {allowPlatformDefault: boolean}): void;
toString(options?: {minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringFull(): string;
get scale(): number;
get viewId(): number;
get embedderId(): number;
get timeStamp(): upstream3.Duration;
get pointer(): number;
get kind(): upstream4.PointerDeviceKind;
get device(): number;
get position(): upstream5.Offset;
get localPosition(): upstream5.Offset;
get delta(): upstream5.Offset;
get localDelta(): upstream5.Offset;
get buttons(): number;
get down(): boolean;
get obscured(): boolean;
get pressure(): number;
get pressureMin(): number;
get pressureMax(): number;
get distance(): number;
get distanceMin(): number;
get distanceMax(): number;
get size(): number;
get radiusMajor(): number;
get radiusMinor(): number;
get radiusMin(): number;
get radiusMax(): number;
get orientation(): number;
get tilt(): number;
get platformData(): number;
get synthesized(): boolean;
get transform(): upstream6.Matrix4 | null;
get original(): upstream1.PointerEvent | null;
}
export abstract class PointerScaleEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerScaleEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerScaleEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerScaleEvent", readonly [], false];
constructor(options?: {viewId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }> | undefined; kind?: upstream4.PointerDeviceKind | undefined; device?: number | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; embedderId?: number | undefined; scale?: number | undefined}) { super(_PointerScaleEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PointerScaleEvent.prototype, _PointerScaleEventProxy);
export namespace PointerScaleEvent { export function implement(args: [options?: {viewId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }> | undefined; kind?: upstream4.PointerDeviceKind | undefined; device?: number | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; embedderId?: number | undefined; scale?: number | undefined}], implementation: {}): PointerScaleEvent {
return constructProxy(_PointerScaleEventProxy, args, implementation) as PointerScaleEvent; } }
_flaxBindInstanceType<PointerScaleEvent, typeof PointerScaleEvent>(PointerScaleEvent, "flax.core/sdk_gestures#type:PointerScaleEvent", ["flax.core/sdk_gestures#type:PointerSignalEvent","flax.core/flutter#type:PointerEvent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","package:flutter/src/gestures/events.dart::_RespondablePointerEvent","package:flutter/src/gestures/events.dart::_PointerEventDescription","package:flutter/src/gestures/events.dart::_CopyPointerScaleEvent"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "embedderId" | "timeStamp" | "pointer" | "kind" | "device" | "position" | "localPosition" | "delta" | "localDelta" | "buttons" | "down" | "obscured" | "pressure" | "pressureMin" | "pressureMax" | "distance" | "distanceMin" | "distanceMax" | "size" | "radiusMajor" | "radiusMinor" | "radiusMin" | "radiusMax" | "orientation" | "tilt" | "platformData" | "synthesized" | "transform" | "original" | "scale" | "transformed" | "copyWith" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "respond" | "toString" | "toStringFull" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerScaleEvent" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerSignalEvent" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/gestures/events.dart::_RespondablePointerEvent" | "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription" | "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerScaleEvent";
