// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters3, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters2, _flaxMemberParameters16, _flaxMemberParameters17 } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/semantics/_bindings/sdk_semantics.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OrdinalSortKey extends Omit<upstream0.SemanticsSortKey, _flaxOwnMembers0>, Omit<upstream1.Comparable<upstream0.SemanticsSortKey>, _flaxOwnMembers0 | keyof upstream0.SemanticsSortKey>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.SemanticsSortKey | keyof upstream1.Comparable<upstream0.SemanticsSortKey>>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::OrdinalSortKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.SemanticsSortKey] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __OrdinalSortKey: unique symbol;
readonly [_flaxDartTypeValue]: OrdinalSortKey;

}
defineObject("flax.core/sdk_semantics#type:OrdinalSortKey", ["name","order"], [], _flaxBindingMethods("flax.core/sdk_semantics#type:OrdinalSortKey", "object", {"doCompare":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_semantics#type:SemanticsSortKey");
const _OrdinalSortKeyProxy = {type: "flax.core/sdk_semantics#type:OrdinalSortKey", parameters: _flaxMemberParameters14, constructors: {"": _flaxMemberParameters14}, methods: {"compareTo":_flaxMemberParameters3,"doCompare":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters15,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters16,"toString":_flaxMemberParameters17}, getters: ["order","name"], setters: [], contextMembers: [], superMembers: ["get:order","get:name","compareTo","doCompare","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface OrdinalSortKey {
readonly [_flaxDartTypeValue]: OrdinalSortKey;

compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.SemanticsSortKey] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
doCompare(other: Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::OrdinalSortKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.SemanticsSortKey] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
get order(): number;
get name(): string | null;
}
export abstract class OrdinalSortKey extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OrdinalSortKey>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OrdinalSortKey;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:OrdinalSortKey", readonly [], false];
constructor(order: number, options?: {name?: string | null | undefined}) { super(_OrdinalSortKeyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(OrdinalSortKey.prototype, _OrdinalSortKeyProxy);
export namespace OrdinalSortKey { export function implement(args: [order: number, options?: {name?: string | null | undefined}], implementation: {}): OrdinalSortKey {
return constructProxy(_OrdinalSortKeyProxy, args, implementation) as OrdinalSortKey; } }
_flaxBindInstanceType<OrdinalSortKey, typeof OrdinalSortKey>(OrdinalSortKey, "flax.core/sdk_semantics#type:OrdinalSortKey", ["flax.core/sdk_semantics#type:SemanticsSortKey","dart:core::Object","flax.core/flutter#type:Comparable","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "order" | "compareTo" | "doCompare" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics.dart::OrdinalSortKey" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
