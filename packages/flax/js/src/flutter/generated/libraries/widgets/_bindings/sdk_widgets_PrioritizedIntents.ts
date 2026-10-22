// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters303, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PrioritizedIntents extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PrioritizedIntents: unique symbol;
readonly [_flaxDartTypeValue]: PrioritizedIntents;

readonly orderedIntents: DartList<upstream0.Intent>;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:PrioritizedIntents", ["orderedIntents"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PrioritizedIntents", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Intent");
export function _PrioritizedIntentsFactory(options: { orderedIntents: DartListInput<upstream0.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> }): PrioritizedIntents {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:PrioritizedIntents", "", [{"name":"orderedIntents","required":true}], [], options) as PrioritizedIntents;
}
const _PrioritizedIntentsProxy = {type: "flax.core/sdk_widgets#type:PrioritizedIntents", parameters: _flaxMemberParameters303, constructors: {"": _flaxMemberParameters303}, methods: {"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["orderedIntents"], setters: [], contextMembers: [], superMembers: ["get:orderedIntents","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _PrioritizedIntentsNative extends PrioritizedIntents {
readonly [_flaxDartTypeValue]: _PrioritizedIntentsNative;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
get orderedIntents(): DartList<upstream0.Intent>;
}
export abstract class _PrioritizedIntentsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PrioritizedIntents>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PrioritizedIntents;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PrioritizedIntents", readonly [], false];
constructor(options: {orderedIntents: DartListInput<upstream0.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}) { super(_PrioritizedIntentsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PrioritizedIntentsNative.prototype, _PrioritizedIntentsProxy);
export namespace _PrioritizedIntentsFactory { export function implement(args: [options: {orderedIntents: DartListInput<upstream0.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}], implementation: {}): PrioritizedIntents {
return constructProxy(_PrioritizedIntentsProxy, args, implementation) as PrioritizedIntents; } }
const _PrioritizedIntentsBinding = _flaxProxyFactory(_PrioritizedIntentsFactory, _PrioritizedIntentsNative) as unknown as typeof _PrioritizedIntentsFactory & (new(options: {orderedIntents: DartListInput<upstream0.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>}) => _PrioritizedIntentsNative);
export const PrioritizedIntents: typeof _PrioritizedIntentsBinding & _FlaxInstanceType<PrioritizedIntents> & _FlaxDartType<PrioritizedIntents, readonly ["class", "flax.core/sdk_widgets#type:PrioritizedIntents", readonly [], false]> = _flaxBindInstanceType<PrioritizedIntents, typeof _PrioritizedIntentsBinding>(_PrioritizedIntentsBinding, "flax.core/sdk_widgets#type:PrioritizedIntents", ["flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PrioritizedIntentsBinding & _FlaxInstanceType<PrioritizedIntents> & _FlaxDartType<PrioritizedIntents, readonly ["class", "flax.core/sdk_widgets#type:PrioritizedIntents", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "orderedIntents" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
