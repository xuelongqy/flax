// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters111, _flaxMemberParameters107, _flaxMemberParameters0, _flaxMemberParameters44, _flaxMemberParameters43, _flaxMemberParameters45 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextEditingDeltaReplacement extends Omit<upstream0.TextEditingDelta, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.TextEditingDelta>, Readonly<{ "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaReplacement": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextEditingDeltaReplacement: unique symbol;
readonly [_flaxDartTypeValue]: TextEditingDeltaReplacement;

readonly oldText: string;
readonly selection: upstream3.TextSelection;
readonly composing: upstream2.TextRange;
readonly replacementText: string;
readonly replacedRange: upstream2.TextRange;
readonly textReplaced: string;
apply(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream4.TextEditingValue;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_services#type:TextEditingDeltaReplacement", ["oldText","selection","composing","replacementText","replacedRange","textReplaced"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextEditingDeltaReplacement", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:TextEditingDelta");
export function _TextEditingDeltaReplacementFactory(options: { oldText: string; replacementText: string; replacedRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> }): TextEditingDeltaReplacement {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:TextEditingDeltaReplacement", "", [{"name":"oldText","required":true},{"name":"replacementText","required":true},{"name":"replacedRange","required":true},{"name":"selection","required":true},{"name":"composing","required":true}], [], options) as TextEditingDeltaReplacement;
}
const _TextEditingDeltaReplacementProxy = {type: "flax.core/sdk_services#type:TextEditingDeltaReplacement", parameters: _flaxMemberParameters111, constructors: {"": _flaxMemberParameters111}, methods: {"apply":_flaxMemberParameters107,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters44,"debugFillProperties":_flaxMemberParameters43,"toString":_flaxMemberParameters45}, getters: ["replacementText","replacedRange","textReplaced","oldText","selection","composing"], setters: [], contextMembers: [], superMembers: ["get:replacementText","get:replacedRange","get:textReplaced","get:oldText","get:selection","get:composing","apply","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _TextEditingDeltaReplacementNative extends TextEditingDeltaReplacement {
readonly [_flaxDartTypeValue]: _TextEditingDeltaReplacementNative;

apply(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream4.TextEditingValue;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
get replacementText(): string;
get replacedRange(): upstream2.TextRange;
get textReplaced(): string;
get oldText(): string;
get selection(): upstream3.TextSelection;
get composing(): upstream2.TextRange;
}
export abstract class _TextEditingDeltaReplacementNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextEditingDeltaReplacement>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextEditingDeltaReplacement;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaReplacement", readonly [], false];
constructor(options: {oldText: string; replacementText: string; replacedRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}) { super(_TextEditingDeltaReplacementProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextEditingDeltaReplacementNative.prototype, _TextEditingDeltaReplacementProxy);
export namespace _TextEditingDeltaReplacementFactory { export function implement(args: [options: {oldText: string; replacementText: string; replacedRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}], implementation: {}): TextEditingDeltaReplacement {
return constructProxy(_TextEditingDeltaReplacementProxy, args, implementation) as TextEditingDeltaReplacement; } }
const _TextEditingDeltaReplacementBinding = _flaxProxyFactory(_TextEditingDeltaReplacementFactory, _TextEditingDeltaReplacementNative) as unknown as typeof _TextEditingDeltaReplacementFactory & (new(options: {oldText: string; replacementText: string; replacedRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}) => _TextEditingDeltaReplacementNative);
export const TextEditingDeltaReplacement: typeof _TextEditingDeltaReplacementBinding & _FlaxInstanceType<TextEditingDeltaReplacement> & _FlaxDartType<TextEditingDeltaReplacement, readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaReplacement", readonly [], false]> = _flaxBindInstanceType<TextEditingDeltaReplacement, typeof _TextEditingDeltaReplacementBinding>(_TextEditingDeltaReplacementBinding, "flax.core/sdk_services#type:TextEditingDeltaReplacement", ["flax.core/sdk_services#type:TextEditingDelta","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TextEditingDeltaReplacementBinding & _FlaxInstanceType<TextEditingDeltaReplacement> & _FlaxDartType<TextEditingDeltaReplacement, readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaReplacement", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "oldText" | "selection" | "composing" | "replacementText" | "replacedRange" | "textReplaced" | "apply" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaReplacement" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
