// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalCaretMovementIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalCaretMovementIntent';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalTextEditingIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalTextEditingIntent';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
const _flaxMemberParameters0 = [{"name":"forward","required":true},{"name":"collapseSelection","required":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ExtendSelectionVerticallyToAdjacentPageIntent extends Omit<upstream0.DirectionalCaretMovementIntent, _flaxOwnMembers0>, Omit<upstream1.DirectionalTextEditingIntent, _flaxOwnMembers0 | keyof upstream0.DirectionalCaretMovementIntent>, Omit<upstream2.Intent, _flaxOwnMembers0 | keyof upstream0.DirectionalCaretMovementIntent | keyof upstream1.DirectionalTextEditingIntent>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DirectionalCaretMovementIntent | keyof upstream1.DirectionalTextEditingIntent | keyof upstream2.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::ExtendSelectionVerticallyToAdjacentPageIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalCaretMovementIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalTextEditingIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ExtendSelectionVerticallyToAdjacentPageIntent: unique symbol;
readonly [_flaxDartTypeValue]: ExtendSelectionVerticallyToAdjacentPageIntent;

}
defineObject("flax.core/sdk_widgets#type:ExtendSelectionVerticallyToAdjacentPageIntent", ["collapseSelection","collapseAtReversal","continuesAtWrap","forward"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ExtendSelectionVerticallyToAdjacentPageIntent", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:DirectionalCaretMovementIntent");
const _ExtendSelectionVerticallyToAdjacentPageIntentProxy = {type: "flax.core/sdk_widgets#type:ExtendSelectionVerticallyToAdjacentPageIntent", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"toStringShort":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"toString":_flaxMemberParameters4}, getters: ["collapseSelection","collapseAtReversal","continuesAtWrap","forward"], setters: [], contextMembers: [], superMembers: ["get:collapseSelection","get:collapseAtReversal","get:continuesAtWrap","get:forward","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface ExtendSelectionVerticallyToAdjacentPageIntent {
readonly [_flaxDartTypeValue]: ExtendSelectionVerticallyToAdjacentPageIntent;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
get collapseSelection(): boolean;
get collapseAtReversal(): boolean;
get continuesAtWrap(): boolean;
get forward(): boolean;
}
export abstract class ExtendSelectionVerticallyToAdjacentPageIntent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExtendSelectionVerticallyToAdjacentPageIntent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ExtendSelectionVerticallyToAdjacentPageIntent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ExtendSelectionVerticallyToAdjacentPageIntent", readonly [], false];
constructor(options: {forward: boolean; collapseSelection: boolean}) { super(_ExtendSelectionVerticallyToAdjacentPageIntentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ExtendSelectionVerticallyToAdjacentPageIntent.prototype, _ExtendSelectionVerticallyToAdjacentPageIntentProxy);
export namespace ExtendSelectionVerticallyToAdjacentPageIntent { export function implement(args: [options: {forward: boolean; collapseSelection: boolean}], implementation: {}): ExtendSelectionVerticallyToAdjacentPageIntent {
return constructProxy(_ExtendSelectionVerticallyToAdjacentPageIntentProxy, args, implementation) as ExtendSelectionVerticallyToAdjacentPageIntent; } }
_flaxBindInstanceType<ExtendSelectionVerticallyToAdjacentPageIntent, typeof ExtendSelectionVerticallyToAdjacentPageIntent>(ExtendSelectionVerticallyToAdjacentPageIntent, "flax.core/sdk_widgets#type:ExtendSelectionVerticallyToAdjacentPageIntent", ["flax.core/sdk_widgets#type:DirectionalCaretMovementIntent","flax.core/sdk_widgets#type:DirectionalTextEditingIntent","flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "collapseSelection" | "collapseAtReversal" | "continuesAtWrap" | "forward" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::ExtendSelectionVerticallyToAdjacentPageIntent" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalCaretMovementIntent" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalTextEditingIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
