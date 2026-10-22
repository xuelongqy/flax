// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementType';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters392, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ScrollIntent: unique symbol;
readonly [_flaxDartTypeValue]: ScrollIntent;

readonly direction: upstream2.AxisDirection;
readonly type: upstream3.ScrollIncrementType;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:ScrollIntent", ["direction","type"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollIntent", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Intent");
export function _ScrollIntentFactory(options: { direction: upstream2.AxisDirection; type?: upstream3.ScrollIncrementType | undefined }): ScrollIntent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ScrollIntent", "", [{"name":"direction","required":true},{"name":"type"}], [], options) as ScrollIntent;
}
const _ScrollIntentProxy = {type: "flax.core/sdk_widgets#type:ScrollIntent", parameters: _flaxMemberParameters392, constructors: {"": _flaxMemberParameters392}, methods: {"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["direction","type"], setters: [], contextMembers: [], superMembers: ["get:direction","get:type","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _ScrollIntentNative extends ScrollIntent {
readonly [_flaxDartTypeValue]: _ScrollIntentNative;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
get direction(): upstream2.AxisDirection;
get type(): upstream3.ScrollIncrementType;
}
export abstract class _ScrollIntentNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollIntent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollIntent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollIntent", readonly [], false];
constructor(options: {direction: upstream2.AxisDirection; type?: upstream3.ScrollIncrementType | undefined}) { super(_ScrollIntentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ScrollIntentNative.prototype, _ScrollIntentProxy);
export namespace _ScrollIntentFactory { export function implement(args: [options: {direction: upstream2.AxisDirection; type?: upstream3.ScrollIncrementType | undefined}], implementation: {}): ScrollIntent {
return constructProxy(_ScrollIntentProxy, args, implementation) as ScrollIntent; } }
const _ScrollIntentBinding = _flaxProxyFactory(_ScrollIntentFactory, _ScrollIntentNative) as unknown as typeof _ScrollIntentFactory & (new(options: {direction: upstream2.AxisDirection; type?: upstream3.ScrollIncrementType | undefined}) => _ScrollIntentNative);
export const ScrollIntent: typeof _ScrollIntentBinding & _FlaxInstanceType<ScrollIntent> & _FlaxDartType<ScrollIntent, readonly ["class", "flax.core/sdk_widgets#type:ScrollIntent", readonly [], false]> = _flaxBindInstanceType<ScrollIntent, typeof _ScrollIntentBinding>(_ScrollIntentBinding, "flax.core/sdk_widgets#type:ScrollIntent", ["flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ScrollIntentBinding & _FlaxInstanceType<ScrollIntent> & _FlaxDartType<ScrollIntent, readonly ["class", "flax.core/sdk_widgets#type:ScrollIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "direction" | "type" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
