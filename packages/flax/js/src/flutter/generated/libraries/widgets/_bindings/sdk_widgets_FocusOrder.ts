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
import { _flaxMemberParameters61, _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FocusOrder extends Omit<upstream0.Comparable<FocusOrder>, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Comparable<FocusOrder>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [FocusOrder] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __FocusOrder: unique symbol;
readonly [_flaxDartTypeValue]: FocusOrder;

compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
doCompare(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
}
defineObject("flax.core/sdk_widgets#type:FocusOrder", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:FocusOrder", "object", {"compareTo":_flaxMemberParameters61,"doCompare":_flaxMemberParameters61}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export namespace _FocusOrderFactory {
export function lexical(order: string): FocusOrder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FocusOrder", "lexical", [{"name":"order","required":true,"positional":true}], [order], {}) as FocusOrder;
}
}
export namespace _FocusOrderFactory {
export function numeric(order: number): FocusOrder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FocusOrder", "numeric", [{"name":"order","required":true,"positional":true}], [order], {}) as FocusOrder;
}
}
const _FocusOrderProxy = {type: "flax.core/sdk_widgets#type:FocusOrder", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"doCompare":_flaxMemberParameters61}, getters: [], setters: [], contextMembers: [], superMembers: ["toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _FocusOrderNative extends FocusOrder {
readonly [_flaxDartTypeValue]: _FocusOrderNative;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;

toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
export abstract class _FocusOrderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FocusOrder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FocusOrder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:FocusOrder", readonly [], false];
constructor() { super(_FocusOrderProxy, Array.from(arguments)); }
abstract doCompare(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
}
_flaxDefineProxyBase(_FocusOrderNative.prototype, _FocusOrderProxy);
export namespace _FocusOrderFactory { export function implement(args: [], implementation: {doCompare: ((other: FocusOrder) => number)}): FocusOrder {
return constructProxy(_FocusOrderProxy, args, implementation) as FocusOrder; } }
const _FocusOrderBinding = _flaxProxyFactory(_FocusOrderFactory, _FocusOrderNative) as unknown as typeof _FocusOrderFactory & (abstract new() => _FocusOrderNative);
export const FocusOrder: typeof _FocusOrderBinding & _FlaxInstanceType<FocusOrder> & _FlaxDartType<FocusOrder, readonly ["class", "flax.core/sdk_widgets#type:FocusOrder", readonly [], false]> = _flaxBindInstanceType<FocusOrder, typeof _FocusOrderBinding>(_FocusOrderBinding, "flax.core/sdk_widgets#type:FocusOrder", ["dart:core::Object","flax.core/flutter#type:Comparable","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _FocusOrderBinding & _FlaxInstanceType<FocusOrder> & _FlaxDartType<FocusOrder, readonly ["class", "flax.core/sdk_widgets#type:FocusOrder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "compareTo" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "doCompare" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
