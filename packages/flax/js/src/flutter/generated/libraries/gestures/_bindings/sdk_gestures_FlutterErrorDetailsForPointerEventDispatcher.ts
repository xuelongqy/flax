// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [{"name":"exception","required":true},{"name":"stack"},{"name":"library"},{"name":"context"},{"name":"event"},{"name":"hitTestEntry"},{"name":"informationCollector"},{"name":"silent"}] as const;
const _flaxMemberParameters1 = [{"name":"context"},{"name":"exception"},{"name":"informationCollector"},{"name":"library"},{"name":"silent"},{"name":"stack"},{"name":"stackFilter"}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters5 = [{"name":"name"},{"name":"style"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlutterErrorDetailsForPointerEventDispatcher extends Omit<upstream0.FlutterErrorDetails, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.FlutterErrorDetails>, Readonly<{ "__flaxBound:package:flutter/src/gestures/binding.dart::FlutterErrorDetailsForPointerEventDispatcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __FlutterErrorDetailsForPointerEventDispatcher: unique symbol;
readonly [_flaxDartTypeValue]: FlutterErrorDetailsForPointerEventDispatcher;

}
defineObject("flax.core/sdk_gestures#type:FlutterErrorDetailsForPointerEventDispatcher", ["exception","stack","library","context","stackFilter","informationCollector","silent","summary","event","hitTestEntry"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:FlutterErrorDetailsForPointerEventDispatcher", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:FlutterErrorDetails");
const _FlutterErrorDetailsForPointerEventDispatcherProxy = {type: "flax.core/sdk_gestures#type:FlutterErrorDetailsForPointerEventDispatcher", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"copyWith":_flaxMemberParameters1,"exceptionAsString":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters4,"toDiagnosticsNode":_flaxMemberParameters5}, getters: ["event","hitTestEntry","exception","stack","library","context","stackFilter","informationCollector","silent","summary"], setters: [], contextMembers: [], superMembers: ["get:event","get:hitTestEntry","get:exception","get:stack","get:library","get:context","get:stackFilter","get:informationCollector","get:silent","get:summary","copyWith","exceptionAsString","debugFillProperties","toStringShort","toString","toDiagnosticsNode"]} as const;
export interface FlutterErrorDetailsForPointerEventDispatcher {
readonly [_flaxDartTypeValue]: FlutterErrorDetailsForPointerEventDispatcher;

copyWith(options?: {context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; exception?: unknown | null | undefined; informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; library?: string | null | undefined; silent?: boolean | null | undefined; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined; stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined}): upstream0.FlutterErrorDetails;
exceptionAsString(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
get event(): upstream4.PointerEvent | null;
get hitTestEntry(): upstream5.HitTestEntry<upstream6.HitTestTarget> | null;
get exception(): {};
get stack(): upstream2.StackTrace | null;
get library(): string | null;
get context(): upstream3.DiagnosticsNode | null;
get stackFilter(): ((input: DartIterableInput<string, string>) => DartIterable<string>) | null;
get informationCollector(): (() => DartIterable<upstream3.DiagnosticsNode>) | null;
get silent(): boolean;
get summary(): upstream3.DiagnosticsNode;
}
export abstract class FlutterErrorDetailsForPointerEventDispatcher extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlutterErrorDetailsForPointerEventDispatcher>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlutterErrorDetailsForPointerEventDispatcher;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:FlutterErrorDetailsForPointerEventDispatcher", readonly [], false];
constructor(options: {exception: {}; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined; library?: string | null | undefined; context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; event?: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; hitTestEntry?: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream6.HitTestTarget] }> | null | undefined; informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; silent?: boolean | undefined}) { super(_FlutterErrorDetailsForPointerEventDispatcherProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FlutterErrorDetailsForPointerEventDispatcher.prototype, _FlutterErrorDetailsForPointerEventDispatcherProxy);
export namespace FlutterErrorDetailsForPointerEventDispatcher { export function implement(args: [options: {exception: {}; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined; library?: string | null | undefined; context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; event?: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; hitTestEntry?: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream6.HitTestTarget] }> | null | undefined; informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; silent?: boolean | undefined}], implementation: {}): FlutterErrorDetailsForPointerEventDispatcher {
return constructProxy(_FlutterErrorDetailsForPointerEventDispatcherProxy, args, implementation) as FlutterErrorDetailsForPointerEventDispatcher; } }
_flaxBindInstanceType<FlutterErrorDetailsForPointerEventDispatcher, typeof FlutterErrorDetailsForPointerEventDispatcher>(FlutterErrorDetailsForPointerEventDispatcher, "flax.core/sdk_gestures#type:FlutterErrorDetailsForPointerEventDispatcher", ["flax.core/sdk_foundation#type:FlutterErrorDetails","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "exception" | "stack" | "library" | "context" | "stackFilter" | "informationCollector" | "silent" | "summary" | "event" | "hitTestEntry" | "copyWith" | "exceptionAsString" | "debugFillProperties" | "toStringShort" | "toString" | "toDiagnosticsNode" | "__flaxBound:package:flutter/src/gestures/binding.dart::FlutterErrorDetailsForPointerEventDispatcher" | "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
