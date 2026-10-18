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
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UpdateSelectionIntent extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::UpdateSelectionIntent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __UpdateSelectionIntent: unique symbol;
readonly [_flaxDartTypeValue]: UpdateSelectionIntent;

}
defineObject("flax.core/sdk_widgets#type:UpdateSelectionIntent", ["currentTextEditingValue","newSelection","cause"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:UpdateSelectionIntent", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:Intent");
const _UpdateSelectionIntentProxy = {type: "flax.core/sdk_widgets#type:UpdateSelectionIntent", parameters: [{"name":"currentTextEditingValue","required":true,"positional":true},{"name":"newSelection","required":true,"positional":true},{"name":"cause","required":true,"positional":true}], constructors: {"":[{"name":"currentTextEditingValue","required":true,"positional":true},{"name":"newSelection","required":true,"positional":true},{"name":"cause","required":true,"positional":true}]}, methods: {"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters1,"debugFillProperties":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, getters: ["currentTextEditingValue","newSelection","cause"], setters: [], contextMembers: [], superMembers: ["get:currentTextEditingValue","get:newSelection","get:cause","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface UpdateSelectionIntent {
readonly [_flaxDartTypeValue]: UpdateSelectionIntent;

toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
get currentTextEditingValue(): upstream2.TextEditingValue;
get newSelection(): upstream3.TextSelection;
get cause(): upstream4.SelectionChangedCause;
}
export abstract class UpdateSelectionIntent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<UpdateSelectionIntent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: UpdateSelectionIntent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:UpdateSelectionIntent", readonly [], false];
constructor(currentTextEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, newSelection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, cause: upstream4.SelectionChangedCause) { super(_UpdateSelectionIntentProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(UpdateSelectionIntent.prototype, _UpdateSelectionIntentProxy);
export namespace UpdateSelectionIntent { export function implement(args: [currentTextEditingValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, newSelection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, cause: upstream4.SelectionChangedCause], implementation: {}): UpdateSelectionIntent {
return constructProxy(_UpdateSelectionIntentProxy, args, implementation) as UpdateSelectionIntent; } }
_flaxBindInstanceType<UpdateSelectionIntent, typeof UpdateSelectionIntent>(UpdateSelectionIntent, "flax.core/sdk_widgets#type:UpdateSelectionIntent", ["flax.core/sdk_widgets#type:Intent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentTextEditingValue" | "newSelection" | "cause" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/text_editing_intents.dart::UpdateSelectionIntent" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
