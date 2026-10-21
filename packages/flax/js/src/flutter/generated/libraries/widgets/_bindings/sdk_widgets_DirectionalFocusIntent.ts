// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TraversalDirection';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters91, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DirectionalFocusIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DirectionalFocusIntent: unique symbol;
readonly [_flaxDartTypeValue]: DirectionalFocusIntent;

readonly direction: upstream2.TraversalDirection;
readonly ignoreTextFields: boolean;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:DirectionalFocusIntent", ["direction","ignoreTextFields"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DirectionalFocusIntent", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Intent");
export function _DirectionalFocusIntentFactory(direction: upstream2.TraversalDirection, options: { ignoreTextFields?: boolean | undefined } = {}): DirectionalFocusIntent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DirectionalFocusIntent", "", [{"name":"direction","required":true,"positional":true},{"name":"ignoreTextFields"}], [direction], options) as DirectionalFocusIntent;
}
const _DirectionalFocusIntentProxy = {type: "flax.core/sdk_widgets#type:DirectionalFocusIntent", parameters: _flaxMemberParameters91, constructors: {"": _flaxMemberParameters91}, methods: {"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["direction","ignoreTextFields"], setters: [], contextMembers: [], superMembers: ["get:direction","get:ignoreTextFields","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _DirectionalFocusIntentNative extends DirectionalFocusIntent {
readonly [_flaxDartTypeValue]: _DirectionalFocusIntentNative;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
get direction(): upstream2.TraversalDirection;
get ignoreTextFields(): boolean;
}
export abstract class _DirectionalFocusIntentNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DirectionalFocusIntent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DirectionalFocusIntent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DirectionalFocusIntent", readonly [], false];
constructor(direction: upstream2.TraversalDirection, options?: {ignoreTextFields?: boolean | undefined}) { super(_DirectionalFocusIntentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DirectionalFocusIntentNative.prototype, _DirectionalFocusIntentProxy);
export namespace _DirectionalFocusIntentFactory { export function implement(args: [direction: upstream2.TraversalDirection, options?: {ignoreTextFields?: boolean | undefined}], implementation: {}): DirectionalFocusIntent {
return constructProxy(_DirectionalFocusIntentProxy, args, implementation) as DirectionalFocusIntent; } }
const _DirectionalFocusIntentBinding = _flaxProxyFactory(_DirectionalFocusIntentFactory, _DirectionalFocusIntentNative) as unknown as typeof _DirectionalFocusIntentFactory & (new(direction: upstream2.TraversalDirection, options?: {ignoreTextFields?: boolean | undefined}) => _DirectionalFocusIntentNative);
export const DirectionalFocusIntent: typeof _DirectionalFocusIntentBinding & _FlaxInstanceType<DirectionalFocusIntent> & _FlaxDartType<DirectionalFocusIntent, readonly ["class", "flax.core/sdk_widgets#type:DirectionalFocusIntent", readonly [], false]> = _flaxBindInstanceType<DirectionalFocusIntent, typeof _DirectionalFocusIntentBinding>(_DirectionalFocusIntentBinding, "flax.core/sdk_widgets#type:DirectionalFocusIntent", ["flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DirectionalFocusIntentBinding & _FlaxInstanceType<DirectionalFocusIntent> & _FlaxDartType<DirectionalFocusIntent, readonly ["class", "flax.core/sdk_widgets#type:DirectionalFocusIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "direction" | "ignoreTextFields" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/focus_traversal.dart::DirectionalFocusIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
