// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { _flaxMemberParameters98, _flaxMemberParameters126, _flaxMemberParameters0, _flaxMemberParameters52, _flaxMemberParameters51, _flaxMemberParameters50 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextEditingDelta extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextEditingDelta: unique symbol;
readonly [_flaxDartTypeValue]: TextEditingDelta;

readonly oldText: string;
readonly selection: upstream1.TextSelection;
readonly composing: upstream2.TextRange;
toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
apply(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream7.TextEditingValue;
}
defineObject("flax.core/sdk_services#type:TextEditingDelta", ["oldText","selection","composing"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextEditingDelta", "object", {"apply":_flaxMemberParameters98}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export namespace _TextEditingDeltaFactory {
export function fromJSON(encoded: DartMapInput<string, unknown | null, string, unknown | null>): TextEditingDelta {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:TextEditingDelta", "fromJSON", [{"name":"encoded","required":true,"positional":true}], [encoded], {}) as TextEditingDelta;
}
}
const _TextEditingDeltaProxy = {type: "flax.core/sdk_services#type:TextEditingDelta", parameters: _flaxMemberParameters126, constructors: {"": _flaxMemberParameters126}, methods: {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters52,"toDiagnosticsNode":_flaxMemberParameters51,"debugFillProperties":_flaxMemberParameters50,"apply":_flaxMemberParameters98}, getters: ["oldText","selection","composing"], setters: [], contextMembers: [], superMembers: ["get:oldText","get:selection","get:composing","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _TextEditingDeltaNative extends TextEditingDelta {
readonly [_flaxDartTypeValue]: _TextEditingDeltaNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get oldText(): string;
get selection(): upstream1.TextSelection;
get composing(): upstream2.TextRange;
}
export abstract class _TextEditingDeltaNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextEditingDelta>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextEditingDelta;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextEditingDelta", readonly [], false];
constructor(options: {oldText: string; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}) { super(_TextEditingDeltaProxy, Array.from(arguments)); }
abstract apply(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream7.TextEditingValue;
}
_flaxDefineProxyBase(_TextEditingDeltaNative.prototype, _TextEditingDeltaProxy);
export namespace _TextEditingDeltaFactory { export function implement(args: [options: {oldText: string; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}], implementation: {apply: ((value: upstream7.TextEditingValue) => Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>)}): TextEditingDelta {
return constructProxy(_TextEditingDeltaProxy, args, implementation) as TextEditingDelta; } }
const _TextEditingDeltaBinding = _flaxProxyFactory(_TextEditingDeltaFactory, _TextEditingDeltaNative) as unknown as typeof _TextEditingDeltaFactory & (abstract new(options: {oldText: string; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}) => _TextEditingDeltaNative);
export const TextEditingDelta: typeof _TextEditingDeltaBinding & _FlaxInstanceType<TextEditingDelta> & _FlaxDartType<TextEditingDelta, readonly ["class", "flax.core/sdk_services#type:TextEditingDelta", readonly [], false]> = _flaxBindInstanceType<TextEditingDelta, typeof _TextEditingDeltaBinding>(_TextEditingDeltaBinding, "flax.core/sdk_services#type:TextEditingDelta", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TextEditingDeltaBinding & _FlaxInstanceType<TextEditingDelta> & _FlaxDartType<TextEditingDelta, readonly ["class", "flax.core/sdk_services#type:TextEditingDelta", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "oldText" | "selection" | "composing" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "apply" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
