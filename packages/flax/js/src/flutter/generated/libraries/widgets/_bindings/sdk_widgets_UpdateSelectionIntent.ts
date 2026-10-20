// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters430, _flaxMemberParameters2, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UpdateSelectionIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::UpdateSelectionIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __UpdateSelectionIntent: unique symbol;
readonly [_flaxDartTypeValue]: UpdateSelectionIntent;

readonly currentTextEditingValue: upstream2.TextEditingValue;
readonly newSelection: upstream3.TextSelection;
readonly cause: upstream4.SelectionChangedCause;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:UpdateSelectionIntent", ["currentTextEditingValue","newSelection","cause"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:UpdateSelectionIntent", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Intent");
export function _UpdateSelectionIntentFactory(currentTextEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, newSelection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, cause: upstream4.SelectionChangedCause): UpdateSelectionIntent {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:UpdateSelectionIntent", "", [{"name":"currentTextEditingValue","required":true,"positional":true},{"name":"newSelection","required":true,"positional":true},{"name":"cause","required":true,"positional":true}], [currentTextEditingValue, newSelection, cause], {}) as UpdateSelectionIntent;
}
const _UpdateSelectionIntentProxy = {type: "flax.core/sdk_widgets#type:UpdateSelectionIntent", parameters: _flaxMemberParameters430, constructors: {"": _flaxMemberParameters430}, methods: {"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"toString":_flaxMemberParameters9}, getters: ["currentTextEditingValue","newSelection","cause"], setters: [], contextMembers: [], superMembers: ["get:currentTextEditingValue","get:newSelection","get:cause","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _UpdateSelectionIntentNative extends UpdateSelectionIntent {
readonly [_flaxDartTypeValue]: _UpdateSelectionIntentNative;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
get currentTextEditingValue(): upstream2.TextEditingValue;
get newSelection(): upstream3.TextSelection;
get cause(): upstream4.SelectionChangedCause;
}
export abstract class _UpdateSelectionIntentNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UpdateSelectionIntent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UpdateSelectionIntent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UpdateSelectionIntent", readonly [], false];
constructor(currentTextEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, newSelection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, cause: upstream4.SelectionChangedCause) { super(_UpdateSelectionIntentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_UpdateSelectionIntentNative.prototype, _UpdateSelectionIntentProxy);
export namespace _UpdateSelectionIntentFactory { export function implement(args: [currentTextEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, newSelection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, cause: upstream4.SelectionChangedCause], implementation: {}): UpdateSelectionIntent {
return constructProxy(_UpdateSelectionIntentProxy, args, implementation) as UpdateSelectionIntent; } }
const _UpdateSelectionIntentBinding = _flaxProxyFactory(_UpdateSelectionIntentFactory, _UpdateSelectionIntentNative) as unknown as typeof _UpdateSelectionIntentFactory & (new(currentTextEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, newSelection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, cause: upstream4.SelectionChangedCause) => _UpdateSelectionIntentNative);
export const UpdateSelectionIntent: typeof _UpdateSelectionIntentBinding & _FlaxInstanceType<UpdateSelectionIntent> & _FlaxDartType<UpdateSelectionIntent, readonly ["class", "flax.core/sdk_widgets#type:UpdateSelectionIntent", readonly [], false]> = _flaxBindInstanceType<UpdateSelectionIntent, typeof _UpdateSelectionIntentBinding>(_UpdateSelectionIntentBinding, "flax.core/sdk_widgets#type:UpdateSelectionIntent", ["flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _UpdateSelectionIntentBinding & _FlaxInstanceType<UpdateSelectionIntent> & _FlaxDartType<UpdateSelectionIntent, readonly ["class", "flax.core/sdk_widgets#type:UpdateSelectionIntent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentTextEditingValue" | "newSelection" | "cause" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::UpdateSelectionIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
