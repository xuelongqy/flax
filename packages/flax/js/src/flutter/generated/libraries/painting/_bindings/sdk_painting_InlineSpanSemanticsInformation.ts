// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StringAttribute';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import { _flaxMemberParameters2, _flaxMemberParameters97 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InlineSpanSemanticsInformation extends Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [] }> { readonly __InlineSpanSemanticsInformation: unique symbol;
readonly [_flaxDartTypeValue]: InlineSpanSemanticsInformation;

}
defineObject("flax.core/sdk_painting#type:InlineSpanSemanticsInformation", ["text","semanticsLabel","semanticsIdentifier","recognizer","isPlaceholder","requiresOwnNode","stringAttributes"], [], _flaxBindingMethods("flax.core/sdk_painting#type:InlineSpanSemanticsInformation", "object", {"toString":_flaxMemberParameters2}, {}), []);
const _InlineSpanSemanticsInformationProxy = {type: "flax.core/sdk_painting#type:InlineSpanSemanticsInformation", parameters: _flaxMemberParameters97, constructors: {"": _flaxMemberParameters97}, methods: {"toString":_flaxMemberParameters2}, getters: ["text","semanticsLabel","semanticsIdentifier","recognizer","isPlaceholder","requiresOwnNode","stringAttributes"], setters: [], contextMembers: [], superMembers: ["get:text","get:semanticsLabel","get:semanticsIdentifier","get:recognizer","get:isPlaceholder","get:requiresOwnNode","get:stringAttributes","toString"]} as const;
export interface InlineSpanSemanticsInformation {
readonly [_flaxDartTypeValue]: InlineSpanSemanticsInformation;

toString(): string;
get text(): string;
get semanticsLabel(): string | null;
get semanticsIdentifier(): string | null;
get recognizer(): upstream1.GestureRecognizer | null;
get isPlaceholder(): boolean;
get requiresOwnNode(): boolean;
get stringAttributes(): DartList<upstream0.StringAttribute>;
}
export abstract class InlineSpanSemanticsInformation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InlineSpanSemanticsInformation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: InlineSpanSemanticsInformation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:InlineSpanSemanticsInformation", readonly [], false];
constructor(text: string, options?: {isPlaceholder?: boolean | undefined; semanticsLabel?: string | null | undefined; semanticsIdentifier?: string | null | undefined; stringAttributes?: DartListInput<upstream0.StringAttribute, Readonly<{ "__flaxBound:dart:ui::StringAttribute": readonly [] }>> | undefined; recognizer?: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_InlineSpanSemanticsInformationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(InlineSpanSemanticsInformation.prototype, _InlineSpanSemanticsInformationProxy);
export namespace InlineSpanSemanticsInformation { export function implement(args: [text: string, options?: {isPlaceholder?: boolean | undefined; semanticsLabel?: string | null | undefined; semanticsIdentifier?: string | null | undefined; stringAttributes?: DartListInput<upstream0.StringAttribute, Readonly<{ "__flaxBound:dart:ui::StringAttribute": readonly [] }>> | undefined; recognizer?: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): InlineSpanSemanticsInformation {
return constructProxy(_InlineSpanSemanticsInformationProxy, args, implementation) as InlineSpanSemanticsInformation; } }
export namespace InlineSpanSemanticsInformation { export declare const placeholder: InlineSpanSemanticsInformation; }
_flaxDefineStaticGetters(InlineSpanSemanticsInformation, "flax.core/sdk_painting#read:InlineSpanSemanticsInformation.", ["placeholder"]);
_flaxBindInstanceType<InlineSpanSemanticsInformation, typeof InlineSpanSemanticsInformation>(InlineSpanSemanticsInformation, "flax.core/sdk_painting#type:InlineSpanSemanticsInformation", ["dart:core::Object"]);
