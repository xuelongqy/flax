// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusOrder';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusOrder';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Comparable';
import '@flax/dart/core/_bindings/flutter_Comparable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
const _flaxMemberParameters0 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"order","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NumericFocusOrder extends Omit<upstream0.FocusOrder, _flaxOwnMembers0>, Omit<upstream1.Comparable<upstream0.FocusOrder>, _flaxOwnMembers0 | keyof upstream0.FocusOrder>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.FocusOrder | keyof upstream1.Comparable<upstream0.FocusOrder>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NumericFocusOrder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __NumericFocusOrder: unique symbol;
readonly [_flaxDartTypeValue]: NumericFocusOrder;

}
defineObject("flax.core/sdk_widgets#type:NumericFocusOrder", ["order"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:NumericFocusOrder", "object", {"doCompare":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:FocusOrder");
const _NumericFocusOrderProxy = {type: "flax.core/sdk_widgets#type:NumericFocusOrder", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"doCompare":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4,"toString":_flaxMemberParameters5}, getters: ["order"], setters: [], contextMembers: [], superMembers: ["get:order","doCompare","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface NumericFocusOrder {
readonly [_flaxDartTypeValue]: NumericFocusOrder;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;

doCompare(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NumericFocusOrder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
get order(): number;
}
export abstract class NumericFocusOrder extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NumericFocusOrder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: NumericFocusOrder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:NumericFocusOrder", readonly [], false];
constructor(order: number) { super(_NumericFocusOrderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(NumericFocusOrder.prototype, _NumericFocusOrderProxy);
export namespace NumericFocusOrder { export function implement(args: [order: number], implementation: {}): NumericFocusOrder {
return constructProxy(_NumericFocusOrderProxy, args, implementation) as NumericFocusOrder; } }
_flaxBindInstanceType<NumericFocusOrder, typeof NumericFocusOrder>(NumericFocusOrder, "flax.core/sdk_widgets#type:NumericFocusOrder", ["flax.core/sdk_widgets#type:FocusOrder","dart:core::Object","flax.core/flutter#type:Comparable","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "order" | "compareTo" | "doCompare" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::NumericFocusOrder" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
