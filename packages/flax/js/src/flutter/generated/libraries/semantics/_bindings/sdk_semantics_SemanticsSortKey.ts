// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters3, _flaxMemberParameters45, _flaxMemberParameters2, _flaxMemberParameters18, _flaxMemberParameters17, _flaxMemberParameters16 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsSortKey extends Omit<upstream0.Comparable<SemanticsSortKey>, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Comparable<SemanticsSortKey>>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [SemanticsSortKey] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SemanticsSortKey: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsSortKey;

}
defineObject("flax.core/sdk_semantics#type:SemanticsSortKey", ["name"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:SemanticsSortKey", "object", {"compareTo":_flaxMemberParameters3,"doCompare":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _SemanticsSortKeyProxy = {type: "flax.core/sdk_semantics#type:SemanticsSortKey", parameters: _flaxMemberParameters45, constructors: {"": _flaxMemberParameters45}, methods: {"compareTo":_flaxMemberParameters3,"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters18,"toDiagnosticsNode":_flaxMemberParameters17,"debugFillProperties":_flaxMemberParameters16,"doCompare":_flaxMemberParameters3}, getters: ["name"], setters: [], contextMembers: [], superMembers: ["get:name","compareTo","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface SemanticsSortKey {
readonly [_flaxDartTypeValue]: SemanticsSortKey;

compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [SemanticsSortKey] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get name(): string | null;
}
export abstract class SemanticsSortKey extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsSortKey>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsSortKey;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsSortKey", readonly [], false];
constructor(options?: {name?: string | null | undefined}) { super(_SemanticsSortKeyProxy, Array.from(arguments)); }
abstract doCompare(other: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [SemanticsSortKey] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
}
_flaxDefineProxyBase(SemanticsSortKey.prototype, _SemanticsSortKeyProxy);
export namespace SemanticsSortKey { export function implement(args: [options?: {name?: string | null | undefined}], implementation: {doCompare: ((other: SemanticsSortKey) => number)}): SemanticsSortKey {
return constructProxy(_SemanticsSortKeyProxy, args, implementation) as SemanticsSortKey; } }
_flaxBindInstanceType<SemanticsSortKey, typeof SemanticsSortKey>(SemanticsSortKey, "flax.core/sdk_semantics#type:SemanticsSortKey", ["dart:core::Object","flax.core/flutter#type:Comparable","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "compareTo" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "doCompare" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
