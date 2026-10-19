// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"context"},{"name":"exception"},{"name":"informationCollector"},{"name":"library"},{"name":"silent"},{"name":"stack"},{"name":"stackFilter"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"exception","required":true},{"name":"stack"},{"name":"library"},{"name":"context"},{"name":"stackFilter"},{"name":"informationCollector"},{"name":"silent"}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters4 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters5 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlutterErrorDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __FlutterErrorDetails: unique symbol;
readonly [_flaxDartTypeValue]: FlutterErrorDetails;

}
defineObject("flax.core/sdk_foundation#type:FlutterErrorDetails", ["exception","stack","library","context","stackFilter","informationCollector","silent","summary"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:FlutterErrorDetails", "object", {"copyWith":_flaxMemberParameters0,"exceptionAsString":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _FlutterErrorDetailsProxy = {type: "flax.core/sdk_foundation#type:FlutterErrorDetails", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters0,"exceptionAsString":_flaxMemberParameters1}, getters: ["exception","stack","library","context","stackFilter","informationCollector","silent","summary"], setters: [], contextMembers: [], superMembers: ["get:exception","get:stack","get:library","get:context","get:stackFilter","get:informationCollector","get:silent","get:summary","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith","exceptionAsString"]} as const;
export interface FlutterErrorDetails {
readonly [_flaxDartTypeValue]: FlutterErrorDetails;

toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; exception?: unknown | null | undefined; informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; library?: string | null | undefined; silent?: boolean | null | undefined; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined; stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined}): FlutterErrorDetails;
exceptionAsString(): string;
get exception(): {};
get stack(): upstream1.StackTrace | null;
get library(): string | null;
get context(): upstream2.DiagnosticsNode | null;
get stackFilter(): ((input: DartIterableInput<string, string>) => DartIterable<string>) | null;
get informationCollector(): (() => DartIterable<upstream2.DiagnosticsNode>) | null;
get silent(): boolean;
get summary(): upstream2.DiagnosticsNode;
}
export abstract class FlutterErrorDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlutterErrorDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlutterErrorDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:FlutterErrorDetails", readonly [], false];
constructor(options: {exception: {}; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined; library?: string | null | undefined; context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined; informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; silent?: boolean | undefined}) { super(_FlutterErrorDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FlutterErrorDetails.prototype, _FlutterErrorDetailsProxy);
export namespace FlutterErrorDetails { export function implement(args: [options: {exception: {}; stack?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null | undefined; library?: string | null | undefined; context?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> | null | undefined; stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined; informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined; silent?: boolean | undefined}], implementation: {}): FlutterErrorDetails {
return constructProxy(_FlutterErrorDetailsProxy, args, implementation) as FlutterErrorDetails; } }
export namespace FlutterErrorDetails { export declare const propertiesTransformers: DartList<((properties: DartIterableInput<upstream2.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) => DartIterable<upstream2.DiagnosticsNode>)>; }
_flaxDefineStaticGetters(FlutterErrorDetails, "flax.core/sdk_foundation#read:FlutterErrorDetails.", ["propertiesTransformers"]);
_flaxBindInstanceType<FlutterErrorDetails, typeof FlutterErrorDetails>(FlutterErrorDetails, "flax.core/sdk_foundation#type:FlutterErrorDetails", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "exception" | "stack" | "library" | "context" | "stackFilter" | "informationCollector" | "silent" | "summary" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "exceptionAsString" | "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
