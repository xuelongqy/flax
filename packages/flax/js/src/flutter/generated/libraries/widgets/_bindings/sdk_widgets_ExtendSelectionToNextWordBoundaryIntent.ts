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
import { _flaxMemberParameters151, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ExtendSelectionToNextWordBoundaryIntent extends Omit<upstream0.DirectionalCaretMovementIntent, _flaxOwnMembers0>, Omit<upstream1.DirectionalTextEditingIntent, _flaxOwnMembers0 | keyof upstream0.DirectionalCaretMovementIntent>, Omit<upstream2.Intent, _flaxOwnMembers0 | keyof upstream0.DirectionalCaretMovementIntent | keyof upstream1.DirectionalTextEditingIntent>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DirectionalCaretMovementIntent | keyof upstream1.DirectionalTextEditingIntent | keyof upstream2.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::ExtendSelectionToNextWordBoundaryIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalCaretMovementIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalTextEditingIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ExtendSelectionToNextWordBoundaryIntent: unique symbol;
readonly [_flaxDartTypeValue]: ExtendSelectionToNextWordBoundaryIntent;

readonly collapseSelection: boolean;
readonly collapseAtReversal: boolean;
readonly continuesAtWrap: boolean;
readonly forward: boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:ExtendSelectionToNextWordBoundaryIntent", ["collapseSelection","collapseAtReversal","continuesAtWrap","forward"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ExtendSelectionToNextWordBoundaryIntent", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:DirectionalCaretMovementIntent");
export function _ExtendSelectionToNextWordBoundaryIntentFactory(options: { forward: boolean; collapseSelection: boolean }): ExtendSelectionToNextWordBoundaryIntent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ExtendSelectionToNextWordBoundaryIntent", "", [{"name":"forward","required":true},{"name":"collapseSelection","required":true}], [], options) as ExtendSelectionToNextWordBoundaryIntent;
}
const _ExtendSelectionToNextWordBoundaryIntentProxy = {type: "flax.core/sdk_widgets#type:ExtendSelectionToNextWordBoundaryIntent", parameters: _flaxMemberParameters151, constructors: {"": _flaxMemberParameters151}, methods: {"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["collapseSelection","collapseAtReversal","continuesAtWrap","forward"], setters: [], contextMembers: [], superMembers: ["get:collapseSelection","get:collapseAtReversal","get:continuesAtWrap","get:forward","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _ExtendSelectionToNextWordBoundaryIntentNative extends ExtendSelectionToNextWordBoundaryIntent {
readonly [_flaxDartTypeValue]: _ExtendSelectionToNextWordBoundaryIntentNative;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
get collapseSelection(): boolean;
get collapseAtReversal(): boolean;
get continuesAtWrap(): boolean;
get forward(): boolean;
}
export abstract class _ExtendSelectionToNextWordBoundaryIntentNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ExtendSelectionToNextWordBoundaryIntent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ExtendSelectionToNextWordBoundaryIntent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ExtendSelectionToNextWordBoundaryIntent", readonly [], false];
constructor(options: {forward: boolean; collapseSelection: boolean}) { super(_ExtendSelectionToNextWordBoundaryIntentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ExtendSelectionToNextWordBoundaryIntentNative.prototype, _ExtendSelectionToNextWordBoundaryIntentProxy);
export namespace _ExtendSelectionToNextWordBoundaryIntentFactory { export function implement(args: [options: {forward: boolean; collapseSelection: boolean}], implementation: {}): ExtendSelectionToNextWordBoundaryIntent {
return constructProxy(_ExtendSelectionToNextWordBoundaryIntentProxy, args, implementation) as ExtendSelectionToNextWordBoundaryIntent; } }
const _ExtendSelectionToNextWordBoundaryIntentBinding = _flaxProxyFactory(_ExtendSelectionToNextWordBoundaryIntentFactory, _ExtendSelectionToNextWordBoundaryIntentNative) as unknown as typeof _ExtendSelectionToNextWordBoundaryIntentFactory & (new(options: {forward: boolean; collapseSelection: boolean}) => _ExtendSelectionToNextWordBoundaryIntentNative);
export const ExtendSelectionToNextWordBoundaryIntent: typeof _ExtendSelectionToNextWordBoundaryIntentBinding & _FlaxInstanceType<ExtendSelectionToNextWordBoundaryIntent> & _FlaxDartType<ExtendSelectionToNextWordBoundaryIntent, readonly ["class", "flax.core/sdk_widgets#type:ExtendSelectionToNextWordBoundaryIntent", readonly [], false]> = _flaxBindInstanceType<ExtendSelectionToNextWordBoundaryIntent, typeof _ExtendSelectionToNextWordBoundaryIntentBinding>(_ExtendSelectionToNextWordBoundaryIntentBinding, "flax.core/sdk_widgets#type:ExtendSelectionToNextWordBoundaryIntent", ["flax.core/sdk_widgets#type:DirectionalCaretMovementIntent","flax.core/sdk_widgets#type:DirectionalTextEditingIntent","flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ExtendSelectionToNextWordBoundaryIntentBinding & _FlaxInstanceType<ExtendSelectionToNextWordBoundaryIntent> & _FlaxDartType<ExtendSelectionToNextWordBoundaryIntent, readonly ["class", "flax.core/sdk_widgets#type:ExtendSelectionToNextWordBoundaryIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "collapseSelection" | "collapseAtReversal" | "continuesAtWrap" | "forward" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::ExtendSelectionToNextWordBoundaryIntent" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalCaretMovementIntent" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalTextEditingIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
