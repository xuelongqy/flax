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
const _flaxMemberParameters0 = [{"name":"onEnter"},{"name":"onExit"},{"name":"cursor"},{"name":"validForMouseTracker"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters3 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MouseTrackerAnnotation extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MouseTrackerAnnotation: unique symbol;
readonly [_flaxDartTypeValue]: MouseTrackerAnnotation;

}
defineObject("flax.core/sdk_services#type:MouseTrackerAnnotation", ["onEnter","onExit","cursor","validForMouseTracker"], [], _flaxBindingMethods("flax.core/sdk_services#type:MouseTrackerAnnotation", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _MouseTrackerAnnotationProxy = {type: "flax.core/sdk_services#type:MouseTrackerAnnotation", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4}, getters: ["onEnter","onExit","cursor","validForMouseTracker"], setters: [], contextMembers: [], superMembers: ["get:onEnter","get:onExit","get:cursor","get:validForMouseTracker","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface MouseTrackerAnnotation {
readonly [_flaxDartTypeValue]: MouseTrackerAnnotation;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get onEnter(): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEnterEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerEnterEvent": readonly [] }>) => void) | null;
get onExit(): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerExitEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerExitEvent": readonly [] }>) => void) | null;
get cursor(): upstream3.MouseCursor;
get validForMouseTracker(): boolean;
}
export abstract class MouseTrackerAnnotation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseTrackerAnnotation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MouseTrackerAnnotation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MouseTrackerAnnotation", readonly [], false];
constructor(options?: {onEnter?: ((event: upstream1.PointerEnterEvent) => void) | null | undefined; onExit?: ((event: upstream2.PointerExitEvent) => void) | null | undefined; cursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; validForMouseTracker?: boolean | undefined}) { super(_MouseTrackerAnnotationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MouseTrackerAnnotation.prototype, _MouseTrackerAnnotationProxy);
export namespace MouseTrackerAnnotation { export function implement(args: [options?: {onEnter?: ((event: upstream1.PointerEnterEvent) => void) | null | undefined; onExit?: ((event: upstream2.PointerExitEvent) => void) | null | undefined; cursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; validForMouseTracker?: boolean | undefined}], implementation: {}): MouseTrackerAnnotation {
return constructProxy(_MouseTrackerAnnotationProxy, args, implementation) as MouseTrackerAnnotation; } }
_flaxBindInstanceType<MouseTrackerAnnotation, typeof MouseTrackerAnnotation>(MouseTrackerAnnotation, "flax.core/sdk_services#type:MouseTrackerAnnotation", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onEnter" | "onExit" | "cursor" | "validForMouseTracker" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
