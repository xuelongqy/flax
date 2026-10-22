// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters69, _flaxMemberParameters0, _flaxMemberParameters52, _flaxMemberParameters51, _flaxMemberParameters50 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MouseTrackerAnnotation extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MouseTrackerAnnotation: unique symbol;
readonly [_flaxDartTypeValue]: MouseTrackerAnnotation;

readonly onEnter: ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEnterEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerEnterEvent": readonly [] }>) => void) | null;
readonly onExit: ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerExitEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerExitEvent": readonly [] }>) => void) | null;
readonly cursor: upstream3.MouseCursor;
readonly validForMouseTracker: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_services#type:MouseTrackerAnnotation", ["onEnter","onExit","cursor","validForMouseTracker"], [], _flaxBindingMethods("flax.core/sdk_services#type:MouseTrackerAnnotation", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _MouseTrackerAnnotationFactory(options: { onEnter?: ((event: upstream1.PointerEnterEvent) => void) | null | undefined; onExit?: ((event: upstream2.PointerExitEvent) => void) | null | undefined; cursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; validForMouseTracker?: boolean | undefined } = {}): MouseTrackerAnnotation {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:MouseTrackerAnnotation", "", [{"name":"onEnter"},{"name":"onExit"},{"name":"cursor"},{"name":"validForMouseTracker"}], [], options) as MouseTrackerAnnotation;
}
const _MouseTrackerAnnotationProxy = {type: "flax.core/sdk_services#type:MouseTrackerAnnotation", parameters: _flaxMemberParameters69, constructors: {"": _flaxMemberParameters69}, methods: {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters52,"toDiagnosticsNode":_flaxMemberParameters51,"debugFillProperties":_flaxMemberParameters50}, getters: ["onEnter","onExit","cursor","validForMouseTracker"], setters: [], contextMembers: [], superMembers: ["get:onEnter","get:onExit","get:cursor","get:validForMouseTracker","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _MouseTrackerAnnotationNative extends MouseTrackerAnnotation {
readonly [_flaxDartTypeValue]: _MouseTrackerAnnotationNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get onEnter(): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEnterEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerEnterEvent": readonly [] }>) => void) | null;
get onExit(): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerExitEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerExitEvent": readonly [] }>) => void) | null;
get cursor(): upstream3.MouseCursor;
get validForMouseTracker(): boolean;
}
export abstract class _MouseTrackerAnnotationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseTrackerAnnotation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MouseTrackerAnnotation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MouseTrackerAnnotation", readonly [], false];
constructor(options?: {onEnter?: ((event: upstream1.PointerEnterEvent) => void) | null | undefined; onExit?: ((event: upstream2.PointerExitEvent) => void) | null | undefined; cursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; validForMouseTracker?: boolean | undefined}) { super(_MouseTrackerAnnotationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MouseTrackerAnnotationNative.prototype, _MouseTrackerAnnotationProxy);
export namespace _MouseTrackerAnnotationFactory { export function implement(args: [options?: {onEnter?: ((event: upstream1.PointerEnterEvent) => void) | null | undefined; onExit?: ((event: upstream2.PointerExitEvent) => void) | null | undefined; cursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; validForMouseTracker?: boolean | undefined}], implementation: {}): MouseTrackerAnnotation {
return constructProxy(_MouseTrackerAnnotationProxy, args, implementation) as MouseTrackerAnnotation; } }
const _MouseTrackerAnnotationBinding = _flaxProxyFactory(_MouseTrackerAnnotationFactory, _MouseTrackerAnnotationNative) as unknown as typeof _MouseTrackerAnnotationFactory & (new(options?: {onEnter?: ((event: upstream1.PointerEnterEvent) => void) | null | undefined; onExit?: ((event: upstream2.PointerExitEvent) => void) | null | undefined; cursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; validForMouseTracker?: boolean | undefined}) => _MouseTrackerAnnotationNative);
export const MouseTrackerAnnotation: typeof _MouseTrackerAnnotationBinding & _FlaxInstanceType<MouseTrackerAnnotation> & _FlaxDartType<MouseTrackerAnnotation, readonly ["class", "flax.core/sdk_services#type:MouseTrackerAnnotation", readonly [], false]> = _flaxBindInstanceType<MouseTrackerAnnotation, typeof _MouseTrackerAnnotationBinding>(_MouseTrackerAnnotationBinding, "flax.core/sdk_services#type:MouseTrackerAnnotation", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _MouseTrackerAnnotationBinding & _FlaxInstanceType<MouseTrackerAnnotation> & _FlaxDartType<MouseTrackerAnnotation, readonly ["class", "flax.core/sdk_services#type:MouseTrackerAnnotation", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onEnter" | "onExit" | "cursor" | "validForMouseTracker" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
