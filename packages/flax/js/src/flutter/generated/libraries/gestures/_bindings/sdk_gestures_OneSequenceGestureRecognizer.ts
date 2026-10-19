// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaMember';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureArenaTeam';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerPanZoomStartEvent';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream15 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureDisposition';
import type * as upstream16 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
const _flaxMemberParameters0 = [{"name":"name","required":true,"positional":true},{"name":"callback","required":true,"positional":true},{"name":"debugReport"}] as const;
const _flaxMemberParameters1 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"pointer","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"disposition","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"pointer","required":true,"positional":true},{"name":"disposition","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"pointer","required":true,"positional":true},{"name":"transform","positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"debugOwner"},{"name":"supportedDevices"},{"name":"allowedButtonsFilter"}] as const;
const _flaxMemberParameters7 = [] as const;
const _flaxMemberParameters8 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"joiner"},{"name":"minLevel"}] as const;
const _flaxMemberParameters10 = [{"name":"minLevel"},{"name":"prefixLineOne"},{"name":"prefixOtherLines"},{"name":"wrapWidth"}] as const;
const _flaxMemberParameters11 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters12 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OneSequenceGestureRecognizer extends Omit<upstream0.GestureRecognizer, _flaxOwnMembers0>, Omit<upstream1.GestureArenaMember, _flaxOwnMembers0 | keyof upstream0.GestureRecognizer>, Omit<upstream2.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.GestureRecognizer | keyof upstream1.GestureArenaMember>, Omit<upstream3.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.GestureRecognizer | keyof upstream1.GestureArenaMember | keyof upstream2.DiagnosticableTreeMixin>, Omit<upstream4.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.GestureRecognizer | keyof upstream1.GestureArenaMember | keyof upstream2.DiagnosticableTreeMixin | keyof upstream3.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::OneSequenceGestureRecognizer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __OneSequenceGestureRecognizer: unique symbol;
readonly [_flaxDartTypeValue]: OneSequenceGestureRecognizer;
readonly [_flaxDartMethodCases]?: {invokeCallback: _FlaxSignature0;};
}
defineObject("flax.core/sdk_gestures#type:OneSequenceGestureRecognizer", ["debugOwner","gestureSettings","supportedDevices","allowedButtonsFilter","debugDescription","team"], ["gestureSettings","supportedDevices","team"], _flaxBindingMethods("flax.core/sdk_gestures#type:OneSequenceGestureRecognizer", "object", {"invokeCallback":_flaxMemberParameters0,"handleEvent":_flaxMemberParameters1,"didStopTrackingLastPointer":_flaxMemberParameters2,"resolve":_flaxMemberParameters3,"resolvePointer":_flaxMemberParameters4,"startTrackingPointer":_flaxMemberParameters5,"stopTrackingPointer":_flaxMemberParameters2,"stopTrackingIfPointerNoLongerDown":_flaxMemberParameters1}, {"invokeCallback":{"id":"invokeCallback","parameters":[{"name":"name","required":true,"positional":true},{"name":"callback","required":true,"positional":true},{"name":"debugReport"}]}}), [], undefined, "flax.core/sdk_gestures#type:GestureRecognizer");
const _OneSequenceGestureRecognizerProxy = {type: "flax.core/sdk_gestures#type:OneSequenceGestureRecognizer", parameters: _flaxMemberParameters6, constructors: {"": _flaxMemberParameters6}, methods: {"addPointerPanZoom":_flaxMemberParameters1,"addAllowedPointerPanZoom":_flaxMemberParameters1,"addPointer":_flaxMemberParameters1,"addAllowedPointer":_flaxMemberParameters1,"handleNonAllowedPointer":_flaxMemberParameters1,"isPointerAllowed":_flaxMemberParameters1,"handleNonAllowedPointerPanZoom":_flaxMemberParameters1,"isPointerPanZoomAllowed":_flaxMemberParameters1,"getKindForPointer":_flaxMemberParameters2,"getButtonsForPointer":_flaxMemberParameters2,"dispose":_flaxMemberParameters7,"invokeCallback":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters8,"acceptGesture":_flaxMemberParameters2,"rejectGesture":_flaxMemberParameters2,"toStringShallow":_flaxMemberParameters9,"toStringDeep":_flaxMemberParameters10,"toStringShort":_flaxMemberParameters7,"toDiagnosticsNode":_flaxMemberParameters11,"debugDescribeChildren":_flaxMemberParameters7,"toString":_flaxMemberParameters12,"handleEvent":_flaxMemberParameters1,"didStopTrackingLastPointer":_flaxMemberParameters2,"resolve":_flaxMemberParameters3,"resolvePointer":_flaxMemberParameters4,"startTrackingPointer":_flaxMemberParameters5,"stopTrackingPointer":_flaxMemberParameters2,"stopTrackingIfPointerNoLongerDown":_flaxMemberParameters1}, getters: ["team","debugOwner","gestureSettings","supportedDevices","allowedButtonsFilter","debugDescription"], setters: ["team","gestureSettings","supportedDevices"], contextMembers: ["invokeCallback"], superMembers: ["get:team","get:debugOwner","get:gestureSettings","get:supportedDevices","get:allowedButtonsFilter","set:team","set:gestureSettings","set:supportedDevices","addPointerPanZoom","addAllowedPointerPanZoom","addPointer","addAllowedPointer","handleNonAllowedPointer","isPointerAllowed","handleNonAllowedPointerPanZoom","isPointerPanZoomAllowed","getKindForPointer","getButtonsForPointer","dispose","invokeCallback","debugFillProperties","acceptGesture","rejectGesture","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","toString","resolve","resolvePointer","startTrackingPointer","stopTrackingPointer","stopTrackingIfPointerNoLongerDown"]} as const;
export interface OneSequenceGestureRecognizer {
readonly [_flaxDartTypeValue]: OneSequenceGestureRecognizer;
readonly [_flaxDartMethodCases]?: {invokeCallback: _FlaxSignature1;};
addPointerPanZoom(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomStartEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomStartEvent": readonly [] }>): void;
addAllowedPointerPanZoom(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomStartEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomStartEvent": readonly [] }>): void;
addPointer(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [] }>): void;
addAllowedPointer(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [] }>): void;
handleNonAllowedPointer(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [] }>): void;
isPointerAllowed(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [] }>): boolean;
handleNonAllowedPointerPanZoom(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomStartEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomStartEvent": readonly [] }>): void;
isPointerPanZoomAllowed(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerPanZoomStartEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerPanZoomStartEvent": readonly [] }>): boolean;
getKindForPointer(pointer: number): upstream5.PointerDeviceKind;
getButtonsForPointer(pointer: number): number;
dispose(): void;
invokeCallback<T extends unknown | null = unknown | null>(name: string, callback: (() => (T | _FlaxDartOutput<T>)), options?: {debugReport?: (() => string) | null | undefined}): _FlaxDartOutput<T> | null;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
acceptGesture(pointer: number): void;
rejectGesture(pointer: number): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream11.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
toString(options?: {minLevel?: upstream11.DiagnosticLevel | undefined}): string;
resolve(disposition: upstream15.GestureDisposition): void;
resolvePointer(pointer: number, disposition: upstream15.GestureDisposition): void;
startTrackingPointer(pointer: number, transform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): void;
stopTrackingPointer(pointer: number): void;
stopTrackingIfPointerNoLongerDown(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
get team(): upstream7.GestureArenaTeam | null;
get debugOwner(): unknown | null;
get gestureSettings(): upstream6.DeviceGestureSettings | null;
get supportedDevices(): DartSet<upstream5.PointerDeviceKind> | null;
get allowedButtonsFilter(): ((buttons: number) => boolean);
set team(value: Readonly<{ "__flaxBound:package:flutter/src/gestures/team.dart::GestureArenaTeam": readonly [] }> | null);
set gestureSettings(value: Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [] }> | null);
set supportedDevices(value: DartSetInput<upstream5.PointerDeviceKind, upstream5.PointerDeviceKind> | null);
}
export abstract class OneSequenceGestureRecognizer extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OneSequenceGestureRecognizer>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OneSequenceGestureRecognizer;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:OneSequenceGestureRecognizer", readonly [], false];
constructor(options?: {debugOwner?: unknown | null | undefined; supportedDevices?: DartSetInput<upstream5.PointerDeviceKind, upstream5.PointerDeviceKind> | null | undefined; allowedButtonsFilter?: ((buttons: number) => boolean) | undefined}) { super(_OneSequenceGestureRecognizerProxy, Array.from(arguments)); }
abstract handleEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
abstract didStopTrackingLastPointer(pointer: number): void;
abstract get debugDescription(): string;
}
_flaxDefineProxyBase(OneSequenceGestureRecognizer.prototype, _OneSequenceGestureRecognizerProxy);
export namespace OneSequenceGestureRecognizer { export function implement(args: [options?: {debugOwner?: unknown | null | undefined; supportedDevices?: DartSetInput<upstream5.PointerDeviceKind, upstream5.PointerDeviceKind> | null | undefined; allowedButtonsFilter?: ((buttons: number) => boolean) | undefined}], implementation: {handleEvent: ((event: upstream14.PointerEvent) => void); didStopTrackingLastPointer: ((pointer: number) => void); get debugDescription(): string}): OneSequenceGestureRecognizer {
return constructProxy(_OneSequenceGestureRecognizerProxy, args, implementation) as OneSequenceGestureRecognizer; } }
_flaxBindInstanceType<OneSequenceGestureRecognizer, typeof OneSequenceGestureRecognizer>(OneSequenceGestureRecognizer, "flax.core/sdk_gestures#type:OneSequenceGestureRecognizer", ["flax.core/sdk_gestures#type:GestureRecognizer","flax.core/sdk_gestures#type:GestureArenaMember","dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugOwner" | "gestureSettings" | "supportedDevices" | "allowedButtonsFilter" | "debugDescription" | "team" | "addPointerPanZoom" | "addAllowedPointerPanZoom" | "addPointer" | "addAllowedPointer" | "handleNonAllowedPointer" | "isPointerAllowed" | "handleNonAllowedPointerPanZoom" | "isPointerPanZoomAllowed" | "getKindForPointer" | "getButtonsForPointer" | "dispose" | "invokeCallback" | "debugFillProperties" | "acceptGesture" | "rejectGesture" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "handleEvent" | "didStopTrackingLastPointer" | "resolve" | "resolvePointer" | "startTrackingPointer" | "stopTrackingPointer" | "stopTrackingIfPointerNoLongerDown" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::OneSequenceGestureRecognizer" | "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer" | "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (name: string,callback: (() => (_Selected0 | DartInput<_Selected0>)),options?: {debugReport?: (() => string) | null | undefined}) => _Selected0 | null : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (name: string,callback: (() => (_Selected0 | DartInput<_Selected0>)),options?: {debugReport?: (() => string) | null | undefined}) => _Selected0 | null : never : never; }
