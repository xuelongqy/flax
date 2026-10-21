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
import { _flaxMemberParameters61, _flaxMemberParameters222, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LexicalFocusOrder extends Omit<upstream0.FocusOrder, _flaxOwnMembers0>, Omit<upstream1.Comparable<upstream0.FocusOrder>, _flaxOwnMembers0 | keyof upstream0.FocusOrder>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.FocusOrder | keyof upstream1.Comparable<upstream0.FocusOrder>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::LexicalFocusOrder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __LexicalFocusOrder: unique symbol;
readonly [_flaxDartTypeValue]: LexicalFocusOrder;

readonly order: string;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
doCompare(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::LexicalFocusOrder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:LexicalFocusOrder", ["order"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:LexicalFocusOrder", "object", {"doCompare":_flaxMemberParameters61}, {}), [], undefined, "flax.core/sdk_widgets#type:FocusOrder");
export function _LexicalFocusOrderFactory(order: string): LexicalFocusOrder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:LexicalFocusOrder", "", [{"name":"order","required":true,"positional":true}], [order], {}) as LexicalFocusOrder;
}
const _LexicalFocusOrderProxy = {type: "flax.core/sdk_widgets#type:LexicalFocusOrder", parameters: _flaxMemberParameters222, constructors: {"": _flaxMemberParameters222}, methods: {"doCompare":_flaxMemberParameters61,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["order"], setters: [], contextMembers: [], superMembers: ["get:order","doCompare","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _LexicalFocusOrderNative extends LexicalFocusOrder {
readonly [_flaxDartTypeValue]: _LexicalFocusOrderNative;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;

doCompare(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::LexicalFocusOrder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.FocusOrder] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): number;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
get order(): string;
}
export abstract class _LexicalFocusOrderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LexicalFocusOrder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LexicalFocusOrder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LexicalFocusOrder", readonly [], false];
constructor(order: string) { super(_LexicalFocusOrderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_LexicalFocusOrderNative.prototype, _LexicalFocusOrderProxy);
export namespace _LexicalFocusOrderFactory { export function implement(args: [order: string], implementation: {}): LexicalFocusOrder {
return constructProxy(_LexicalFocusOrderProxy, args, implementation) as LexicalFocusOrder; } }
const _LexicalFocusOrderBinding = _flaxProxyFactory(_LexicalFocusOrderFactory, _LexicalFocusOrderNative) as unknown as typeof _LexicalFocusOrderFactory & (new(order: string) => _LexicalFocusOrderNative);
export const LexicalFocusOrder: typeof _LexicalFocusOrderBinding & _FlaxInstanceType<LexicalFocusOrder> & _FlaxDartType<LexicalFocusOrder, readonly ["class", "flax.core/sdk_widgets#type:LexicalFocusOrder", readonly [], false]> = _flaxBindInstanceType<LexicalFocusOrder, typeof _LexicalFocusOrderBinding>(_LexicalFocusOrderBinding, "flax.core/sdk_widgets#type:LexicalFocusOrder", ["flax.core/sdk_widgets#type:FocusOrder","dart:core::Object","flax.core/flutter#type:Comparable","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _LexicalFocusOrderBinding & _FlaxInstanceType<LexicalFocusOrder> & _FlaxDartType<LexicalFocusOrder, readonly ["class", "flax.core/sdk_widgets#type:LexicalFocusOrder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "order" | "compareTo" | "doCompare" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::LexicalFocusOrder" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::FocusOrder" | "__flaxBound:dart:core::Comparable" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
