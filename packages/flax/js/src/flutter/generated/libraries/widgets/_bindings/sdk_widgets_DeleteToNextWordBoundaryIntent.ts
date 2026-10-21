// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalTextEditingIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DirectionalTextEditingIntent';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
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
import { _flaxMemberParameters81, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DeleteToNextWordBoundaryIntent extends Omit<upstream0.DirectionalTextEditingIntent, _flaxOwnMembers0>, Omit<upstream1.Intent, _flaxOwnMembers0 | keyof upstream0.DirectionalTextEditingIntent>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DirectionalTextEditingIntent | keyof upstream1.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DeleteToNextWordBoundaryIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalTextEditingIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DeleteToNextWordBoundaryIntent: unique symbol;
readonly [_flaxDartTypeValue]: DeleteToNextWordBoundaryIntent;

readonly forward: boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:DeleteToNextWordBoundaryIntent", ["forward"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DeleteToNextWordBoundaryIntent", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:DirectionalTextEditingIntent");
export function _DeleteToNextWordBoundaryIntentFactory(options: { forward: boolean }): DeleteToNextWordBoundaryIntent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DeleteToNextWordBoundaryIntent", "", [{"name":"forward","required":true}], [], options) as DeleteToNextWordBoundaryIntent;
}
const _DeleteToNextWordBoundaryIntentProxy = {type: "flax.core/sdk_widgets#type:DeleteToNextWordBoundaryIntent", parameters: _flaxMemberParameters81, constructors: {"": _flaxMemberParameters81}, methods: {"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["forward"], setters: [], contextMembers: [], superMembers: ["get:forward","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _DeleteToNextWordBoundaryIntentNative extends DeleteToNextWordBoundaryIntent {
readonly [_flaxDartTypeValue]: _DeleteToNextWordBoundaryIntentNative;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
get forward(): boolean;
}
export abstract class _DeleteToNextWordBoundaryIntentNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DeleteToNextWordBoundaryIntent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DeleteToNextWordBoundaryIntent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DeleteToNextWordBoundaryIntent", readonly [], false];
constructor(options: {forward: boolean}) { super(_DeleteToNextWordBoundaryIntentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DeleteToNextWordBoundaryIntentNative.prototype, _DeleteToNextWordBoundaryIntentProxy);
export namespace _DeleteToNextWordBoundaryIntentFactory { export function implement(args: [options: {forward: boolean}], implementation: {}): DeleteToNextWordBoundaryIntent {
return constructProxy(_DeleteToNextWordBoundaryIntentProxy, args, implementation) as DeleteToNextWordBoundaryIntent; } }
const _DeleteToNextWordBoundaryIntentBinding = _flaxProxyFactory(_DeleteToNextWordBoundaryIntentFactory, _DeleteToNextWordBoundaryIntentNative) as unknown as typeof _DeleteToNextWordBoundaryIntentFactory & (new(options: {forward: boolean}) => _DeleteToNextWordBoundaryIntentNative);
export const DeleteToNextWordBoundaryIntent: typeof _DeleteToNextWordBoundaryIntentBinding & _FlaxInstanceType<DeleteToNextWordBoundaryIntent> & _FlaxDartType<DeleteToNextWordBoundaryIntent, readonly ["class", "flax.core/sdk_widgets#type:DeleteToNextWordBoundaryIntent", readonly [], false]> = _flaxBindInstanceType<DeleteToNextWordBoundaryIntent, typeof _DeleteToNextWordBoundaryIntentBinding>(_DeleteToNextWordBoundaryIntentBinding, "flax.core/sdk_widgets#type:DeleteToNextWordBoundaryIntent", ["flax.core/sdk_widgets#type:DirectionalTextEditingIntent","flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DeleteToNextWordBoundaryIntentBinding & _FlaxInstanceType<DeleteToNextWordBoundaryIntent> & _FlaxDartType<DeleteToNextWordBoundaryIntent, readonly ["class", "flax.core/sdk_widgets#type:DeleteToNextWordBoundaryIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "forward" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DeleteToNextWordBoundaryIntent" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::DirectionalTextEditingIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
