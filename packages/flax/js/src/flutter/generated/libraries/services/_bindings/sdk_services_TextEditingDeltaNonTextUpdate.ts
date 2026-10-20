// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import '@flax/flutter/services/_bindings/sdk_services_TextEditingDelta';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
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
import { _flaxMemberParameters108, _flaxMemberParameters107, _flaxMemberParameters0, _flaxMemberParameters44, _flaxMemberParameters43, _flaxMemberParameters45 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextEditingDeltaNonTextUpdate extends Omit<upstream0.TextEditingDelta, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.TextEditingDelta>, Readonly<{ "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaNonTextUpdate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextEditingDeltaNonTextUpdate: unique symbol;
readonly [_flaxDartTypeValue]: TextEditingDeltaNonTextUpdate;

readonly oldText: string;
readonly selection: upstream2.TextSelection;
readonly composing: upstream3.TextRange;
apply(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream4.TextEditingValue;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_services#type:TextEditingDeltaNonTextUpdate", ["oldText","selection","composing"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextEditingDeltaNonTextUpdate", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:TextEditingDelta");
export function _TextEditingDeltaNonTextUpdateFactory(options: { oldText: string; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> }): TextEditingDeltaNonTextUpdate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:TextEditingDeltaNonTextUpdate", "", [{"name":"oldText","required":true},{"name":"selection","required":true},{"name":"composing","required":true}], [], options) as TextEditingDeltaNonTextUpdate;
}
const _TextEditingDeltaNonTextUpdateProxy = {type: "flax.core/sdk_services#type:TextEditingDeltaNonTextUpdate", parameters: _flaxMemberParameters108, constructors: {"": _flaxMemberParameters108}, methods: {"apply":_flaxMemberParameters107,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters44,"debugFillProperties":_flaxMemberParameters43,"toString":_flaxMemberParameters45}, getters: ["oldText","selection","composing"], setters: [], contextMembers: [], superMembers: ["get:oldText","get:selection","get:composing","apply","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _TextEditingDeltaNonTextUpdateNative extends TextEditingDeltaNonTextUpdate {
readonly [_flaxDartTypeValue]: _TextEditingDeltaNonTextUpdateNative;

apply(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream4.TextEditingValue;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
get oldText(): string;
get selection(): upstream2.TextSelection;
get composing(): upstream3.TextRange;
}
export abstract class _TextEditingDeltaNonTextUpdateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextEditingDeltaNonTextUpdate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextEditingDeltaNonTextUpdate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaNonTextUpdate", readonly [], false];
constructor(options: {oldText: string; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}) { super(_TextEditingDeltaNonTextUpdateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextEditingDeltaNonTextUpdateNative.prototype, _TextEditingDeltaNonTextUpdateProxy);
export namespace _TextEditingDeltaNonTextUpdateFactory { export function implement(args: [options: {oldText: string; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}], implementation: {}): TextEditingDeltaNonTextUpdate {
return constructProxy(_TextEditingDeltaNonTextUpdateProxy, args, implementation) as TextEditingDeltaNonTextUpdate; } }
const _TextEditingDeltaNonTextUpdateBinding = _flaxProxyFactory(_TextEditingDeltaNonTextUpdateFactory, _TextEditingDeltaNonTextUpdateNative) as unknown as typeof _TextEditingDeltaNonTextUpdateFactory & (new(options: {oldText: string; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}) => _TextEditingDeltaNonTextUpdateNative);
export const TextEditingDeltaNonTextUpdate: typeof _TextEditingDeltaNonTextUpdateBinding & _FlaxInstanceType<TextEditingDeltaNonTextUpdate> & _FlaxDartType<TextEditingDeltaNonTextUpdate, readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaNonTextUpdate", readonly [], false]> = _flaxBindInstanceType<TextEditingDeltaNonTextUpdate, typeof _TextEditingDeltaNonTextUpdateBinding>(_TextEditingDeltaNonTextUpdateBinding, "flax.core/sdk_services#type:TextEditingDeltaNonTextUpdate", ["flax.core/sdk_services#type:TextEditingDelta","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TextEditingDeltaNonTextUpdateBinding & _FlaxInstanceType<TextEditingDeltaNonTextUpdate> & _FlaxDartType<TextEditingDeltaNonTextUpdate, readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaNonTextUpdate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "oldText" | "selection" | "composing" | "apply" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaNonTextUpdate" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
