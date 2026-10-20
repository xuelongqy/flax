// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters41, _flaxMemberParameters58, _flaxMemberParameters7, _flaxMemberParameters68, _flaxMemberParameters15, _flaxMemberParameters9, _flaxMemberParameters16 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerPanZoomEndEvent extends Omit<upstream0.PointerEvent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PointerEvent>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomEndEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomEndEvent": readonly [] }> { readonly __PointerPanZoomEndEvent: unique symbol;
readonly [_flaxDartTypeValue]: PointerPanZoomEndEvent;

readonly viewId: number;
readonly embedderId: number;
readonly timeStamp: upstream2.Duration;
readonly pointer: number;
readonly kind: upstream4.PointerDeviceKind;
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
readonly transform: upstream5.Matrix4 | null;
readonly original: upstream0.PointerEvent | null;
transformed(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): PointerPanZoomEndEvent;
copyWith(options?: {buttons?: number | null | undefined; delta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; device?: number | null | undefined; distance?: number | null | undefined; distanceMax?: number | null | undefined; embedderId?: number | null | undefined; kind?: upstream4.PointerDeviceKind | null | undefined; obscured?: boolean | null | undefined; orientation?: number | null | undefined; pointer?: number | null | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; pressure?: number | null | undefined; pressureMax?: number | null | undefined; pressureMin?: number | null | undefined; radiusMajor?: number | null | undefined; radiusMax?: number | null | undefined; radiusMin?: number | null | undefined; radiusMinor?: number | null | undefined; size?: number | null | undefined; synthesized?: boolean | null | undefined; tilt?: number | null | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; viewId?: number | null | undefined}): PointerPanZoomEndEvent;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringFull(): string;
}
defineObject("flax.core/sdk_gestures#type:PointerPanZoomEndEvent", ["viewId","embedderId","timeStamp","pointer","kind","device","position","localPosition","delta","localDelta","buttons","down","obscured","pressure","pressureMin","pressureMax","distance","distanceMin","distanceMax","size","radiusMajor","radiusMinor","radiusMin","radiusMax","orientation","tilt","platformData","synthesized","transform","original"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:PointerPanZoomEndEvent", "object", {"transformed":_flaxMemberParameters41,"copyWith":_flaxMemberParameters58,"toStringFull":_flaxMemberParameters7}, {}), [], undefined, "flax.core/flutter#type:PointerEvent");
export function _PointerPanZoomEndEventFactory(options: { viewId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | undefined; device?: number | undefined; pointer?: number | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; embedderId?: number | undefined; synthesized?: boolean | undefined } = {}): PointerPanZoomEndEvent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:PointerPanZoomEndEvent", "", [{"name":"viewId"},{"name":"timeStamp"},{"name":"device"},{"name":"pointer"},{"name":"position"},{"name":"embedderId"},{"name":"synthesized"}], [], options) as PointerPanZoomEndEvent;
}
const _PointerPanZoomEndEventProxy = {type: "flax.core/sdk_gestures#type:PointerPanZoomEndEvent", parameters: _flaxMemberParameters68, constructors: {"": _flaxMemberParameters68}, methods: {"transformed":_flaxMemberParameters41,"copyWith":_flaxMemberParameters58,"toStringShort":_flaxMemberParameters7,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters9,"toString":_flaxMemberParameters16,"toStringFull":_flaxMemberParameters7}, getters: ["viewId","embedderId","timeStamp","pointer","kind","device","position","localPosition","delta","localDelta","buttons","down","obscured","pressure","pressureMin","pressureMax","distance","distanceMin","distanceMax","size","radiusMajor","radiusMinor","radiusMin","radiusMax","orientation","tilt","platformData","synthesized","transform","original"], setters: [], contextMembers: [], superMembers: ["get:viewId","get:embedderId","get:timeStamp","get:pointer","get:kind","get:device","get:position","get:localPosition","get:delta","get:localDelta","get:buttons","get:down","get:obscured","get:pressure","get:pressureMin","get:pressureMax","get:distance","get:distanceMin","get:distanceMax","get:size","get:radiusMajor","get:radiusMinor","get:radiusMin","get:radiusMax","get:orientation","get:tilt","get:platformData","get:synthesized","get:transform","get:original","transformed","copyWith","toStringShort","toDiagnosticsNode","debugFillProperties","toString","toStringFull"]} as const;
export interface _PointerPanZoomEndEventNative extends PointerPanZoomEndEvent {
readonly [_flaxDartTypeValue]: _PointerPanZoomEndEventNative;

transformed(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): PointerPanZoomEndEvent;
copyWith(options?: {viewId?: number | null | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; pointer?: number | null | undefined; kind?: upstream4.PointerDeviceKind | null | undefined; device?: number | null | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; delta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; buttons?: number | null | undefined; obscured?: boolean | null | undefined; pressure?: number | null | undefined; pressureMin?: number | null | undefined; pressureMax?: number | null | undefined; distance?: number | null | undefined; distanceMax?: number | null | undefined; size?: number | null | undefined; radiusMajor?: number | null | undefined; radiusMinor?: number | null | undefined; radiusMin?: number | null | undefined; radiusMax?: number | null | undefined; orientation?: number | null | undefined; tilt?: number | null | undefined; synthesized?: boolean | null | undefined; embedderId?: number | null | undefined}): PointerPanZoomEndEvent;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringFull(): string;
get viewId(): number;
get embedderId(): number;
get timeStamp(): upstream2.Duration;
get pointer(): number;
get kind(): upstream4.PointerDeviceKind;
get device(): number;
get position(): upstream3.Offset;
get localPosition(): upstream3.Offset;
get delta(): upstream3.Offset;
get localDelta(): upstream3.Offset;
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
get transform(): upstream5.Matrix4 | null;
get original(): upstream0.PointerEvent | null;
}
export abstract class _PointerPanZoomEndEventNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerPanZoomEndEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerPanZoomEndEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerPanZoomEndEvent", readonly [], false];
constructor(options?: {viewId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | undefined; device?: number | undefined; pointer?: number | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; embedderId?: number | undefined; synthesized?: boolean | undefined}) { super(_PointerPanZoomEndEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PointerPanZoomEndEventNative.prototype, _PointerPanZoomEndEventProxy);
export namespace _PointerPanZoomEndEventFactory { export function implement(args: [options?: {viewId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | undefined; device?: number | undefined; pointer?: number | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; embedderId?: number | undefined; synthesized?: boolean | undefined}], implementation: {}): PointerPanZoomEndEvent {
return constructProxy(_PointerPanZoomEndEventProxy, args, implementation) as PointerPanZoomEndEvent; } }
const _PointerPanZoomEndEventBinding = _flaxProxyFactory(_PointerPanZoomEndEventFactory, _PointerPanZoomEndEventNative) as unknown as typeof _PointerPanZoomEndEventFactory & (new(options?: {viewId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | undefined; device?: number | undefined; pointer?: number | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; embedderId?: number | undefined; synthesized?: boolean | undefined}) => _PointerPanZoomEndEventNative);
export const PointerPanZoomEndEvent: typeof _PointerPanZoomEndEventBinding & _FlaxInstanceType<PointerPanZoomEndEvent> & _FlaxDartType<PointerPanZoomEndEvent, readonly ["class", "flax.core/sdk_gestures#type:PointerPanZoomEndEvent", readonly [], false]> = _flaxBindInstanceType<PointerPanZoomEndEvent, typeof _PointerPanZoomEndEventBinding>(_PointerPanZoomEndEventBinding, "flax.core/sdk_gestures#type:PointerPanZoomEndEvent", ["flax.core/flutter#type:PointerEvent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","package:flutter/src/gestures/events.dart::_PointerEventDescription","package:flutter/src/gestures/events.dart::_CopyPointerPanZoomEndEvent"]) as typeof _PointerPanZoomEndEventBinding & _FlaxInstanceType<PointerPanZoomEndEvent> & _FlaxDartType<PointerPanZoomEndEvent, readonly ["class", "flax.core/sdk_gestures#type:PointerPanZoomEndEvent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "embedderId" | "timeStamp" | "pointer" | "kind" | "device" | "position" | "localPosition" | "delta" | "localDelta" | "buttons" | "down" | "obscured" | "pressure" | "pressureMin" | "pressureMax" | "distance" | "distanceMin" | "distanceMax" | "size" | "radiusMajor" | "radiusMinor" | "radiusMin" | "radiusMax" | "orientation" | "tilt" | "platformData" | "synthesized" | "transform" | "original" | "transformed" | "copyWith" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "toStringFull" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomEndEvent" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription" | "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomEndEvent";
