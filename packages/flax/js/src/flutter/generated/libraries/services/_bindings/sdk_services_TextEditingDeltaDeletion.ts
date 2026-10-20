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
import { _flaxMemberParameters109, _flaxMemberParameters107, _flaxMemberParameters0, _flaxMemberParameters44, _flaxMemberParameters43, _flaxMemberParameters45 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextEditingDeltaDeletion extends Omit<upstream0.TextEditingDelta, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.TextEditingDelta>, Readonly<{ "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaDeletion": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextEditingDeltaDeletion: unique symbol;
readonly [_flaxDartTypeValue]: TextEditingDeltaDeletion;

readonly oldText: string;
readonly selection: upstream3.TextSelection;
readonly composing: upstream2.TextRange;
readonly deletedRange: upstream2.TextRange;
readonly textDeleted: string;
apply(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream4.TextEditingValue;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_services#type:TextEditingDeltaDeletion", ["oldText","selection","composing","deletedRange","textDeleted"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextEditingDeltaDeletion", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:TextEditingDelta");
export function _TextEditingDeltaDeletionFactory(options: { oldText: string; deletedRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> }): TextEditingDeltaDeletion {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:TextEditingDeltaDeletion", "", [{"name":"oldText","required":true},{"name":"deletedRange","required":true},{"name":"selection","required":true},{"name":"composing","required":true}], [], options) as TextEditingDeltaDeletion;
}
const _TextEditingDeltaDeletionProxy = {type: "flax.core/sdk_services#type:TextEditingDeltaDeletion", parameters: _flaxMemberParameters109, constructors: {"": _flaxMemberParameters109}, methods: {"apply":_flaxMemberParameters107,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters44,"debugFillProperties":_flaxMemberParameters43,"toString":_flaxMemberParameters45}, getters: ["deletedRange","textDeleted","oldText","selection","composing"], setters: [], contextMembers: [], superMembers: ["get:deletedRange","get:textDeleted","get:oldText","get:selection","get:composing","apply","toStringShort","toDiagnosticsNode","debugFillProperties","toString"]} as const;
export interface _TextEditingDeltaDeletionNative extends TextEditingDeltaDeletion {
readonly [_flaxDartTypeValue]: _TextEditingDeltaDeletionNative;

apply(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream4.TextEditingValue;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
get deletedRange(): upstream2.TextRange;
get textDeleted(): string;
get oldText(): string;
get selection(): upstream3.TextSelection;
get composing(): upstream2.TextRange;
}
export abstract class _TextEditingDeltaDeletionNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextEditingDeltaDeletion>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextEditingDeltaDeletion;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaDeletion", readonly [], false];
constructor(options: {oldText: string; deletedRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}) { super(_TextEditingDeltaDeletionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextEditingDeltaDeletionNative.prototype, _TextEditingDeltaDeletionProxy);
export namespace _TextEditingDeltaDeletionFactory { export function implement(args: [options: {oldText: string; deletedRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}], implementation: {}): TextEditingDeltaDeletion {
return constructProxy(_TextEditingDeltaDeletionProxy, args, implementation) as TextEditingDeltaDeletion; } }
const _TextEditingDeltaDeletionBinding = _flaxProxyFactory(_TextEditingDeltaDeletionFactory, _TextEditingDeltaDeletionNative) as unknown as typeof _TextEditingDeltaDeletionFactory & (new(options: {oldText: string; deletedRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>; composing: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>}) => _TextEditingDeltaDeletionNative);
export const TextEditingDeltaDeletion: typeof _TextEditingDeltaDeletionBinding & _FlaxInstanceType<TextEditingDeltaDeletion> & _FlaxDartType<TextEditingDeltaDeletion, readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaDeletion", readonly [], false]> = _flaxBindInstanceType<TextEditingDeltaDeletion, typeof _TextEditingDeltaDeletionBinding>(_TextEditingDeltaDeletionBinding, "flax.core/sdk_services#type:TextEditingDeltaDeletion", ["flax.core/sdk_services#type:TextEditingDelta","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TextEditingDeltaDeletionBinding & _FlaxInstanceType<TextEditingDeltaDeletion> & _FlaxDartType<TextEditingDeltaDeletion, readonly ["class", "flax.core/sdk_services#type:TextEditingDeltaDeletion", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "oldText" | "selection" | "composing" | "deletedRange" | "textDeleted" | "apply" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDeltaDeletion" | "__flaxBound:package:flutter/src/services/text_editing_delta.dart::TextEditingDelta" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
