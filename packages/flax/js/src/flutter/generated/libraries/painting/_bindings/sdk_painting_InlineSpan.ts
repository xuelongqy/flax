// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream11 from '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import type * as upstream13 from '@flax/dart/core/_bindings/flutter_StringBuffer';
import '@flax/dart/core/_bindings/flutter_StringBuffer';
import type * as upstream14 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import { _flaxMemberParameters84, _flaxMemberParameters85, _flaxMemberParameters86, _flaxMemberParameters87, _flaxMemberParameters88, _flaxMemberParameters2, _flaxMemberParameters89, _flaxMemberParameters90, _flaxMemberParameters91, _flaxMemberParameters92, _flaxMemberParameters21, _flaxMemberParameters93, _flaxMemberParameters94, _flaxMemberParameters95, _flaxMemberParameters56, _flaxMemberParameters57, _flaxMemberParameters58, _flaxMemberParameters96, _flaxMemberParameters97 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InlineSpan extends Omit<upstream0.DiagnosticableTree, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __InlineSpan: unique symbol;
readonly [_flaxDartTypeValue]: InlineSpan;

}
defineObject("flax.core/sdk_painting#type:InlineSpan", ["style"], [], _flaxBindingMethods("flax.core/sdk_painting#type:InlineSpan", "object", {"build":_flaxMemberParameters84,"visitChildren":_flaxMemberParameters85,"visitDirectChildren":_flaxMemberParameters85,"getSpanForPosition":_flaxMemberParameters86,"getSpanForPositionVisitor":_flaxMemberParameters87,"toPlainText":_flaxMemberParameters88,"getSemanticsInformation":_flaxMemberParameters2,"computeSemanticsInformation":_flaxMemberParameters89,"computeToPlainText":_flaxMemberParameters90,"codeUnitAt":_flaxMemberParameters91,"codeUnitAtVisitor":_flaxMemberParameters92,"debugAssertIsValid":_flaxMemberParameters2,"compareTo":_flaxMemberParameters21}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticableTree");
const _InlineSpanProxy = {type: "flax.core/sdk_painting#type:InlineSpan", parameters: _flaxMemberParameters93, constructors: {"": _flaxMemberParameters93}, methods: {"toStringShallow":_flaxMemberParameters94,"toStringDeep":_flaxMemberParameters95,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters56,"debugDescribeChildren":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters57,"toString":_flaxMemberParameters58,"build":_flaxMemberParameters96,"visitChildren":_flaxMemberParameters85,"visitDirectChildren":_flaxMemberParameters85,"getSpanForPosition":_flaxMemberParameters86,"getSpanForPositionVisitor":_flaxMemberParameters87,"toPlainText":_flaxMemberParameters88,"getSemanticsInformation":_flaxMemberParameters2,"computeSemanticsInformation":_flaxMemberParameters89,"computeToPlainText":_flaxMemberParameters97,"codeUnitAt":_flaxMemberParameters91,"codeUnitAtVisitor":_flaxMemberParameters92,"debugAssertIsValid":_flaxMemberParameters2,"compareTo":_flaxMemberParameters21}, getters: ["style"], setters: [], contextMembers: [], superMembers: ["get:style","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","debugFillProperties","toString","getSpanForPosition","toPlainText","getSemanticsInformation","codeUnitAt","debugAssertIsValid"]} as const;
export interface InlineSpan {
readonly [_flaxDartTypeValue]: InlineSpan;

toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream3.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream4.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
getSpanForPosition(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): InlineSpan | null;
toPlainText(options?: {includeSemanticsLabels?: boolean | undefined; includePlaceholders?: boolean | undefined}): string;
getSemanticsInformation(): DartList<upstream12.InlineSpanSemanticsInformation>;
codeUnitAt(index: number): number | null;
debugAssertIsValid(): boolean;
get style(): upstream2.TextStyle | null;
}
export abstract class InlineSpan extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InlineSpan>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: InlineSpan;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:InlineSpan", readonly [], false];
constructor(options?: {style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_InlineSpanProxy, Array.from(arguments)); }
abstract build(builder: Readonly<{ "__flaxBound:dart:ui::ParagraphBuilder": readonly [] }>, options?: {textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; dimensions?: DartListInput<upstream8.PlaceholderDimensions, Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [] }>> | null | undefined}): void;
abstract visitChildren(visitor: ((span: InlineSpan) => boolean)): boolean;
abstract visitDirectChildren(visitor: ((span: InlineSpan) => boolean)): boolean;
abstract getSpanForPositionVisitor(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, offset: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }>): InlineSpan | null;
abstract computeSemanticsInformation(collector: DartListInput<upstream12.InlineSpanSemanticsInformation, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [] }>>): void;
abstract computeToPlainText(buffer: Readonly<{ "__flaxBound:dart:core::StringBuffer": readonly [] }> & Readonly<{ "__flaxBound:dart:core::StringSink": readonly [] }>, options?: {includeSemanticsLabels?: boolean | undefined; includePlaceholders?: boolean | undefined}): void;
abstract codeUnitAtVisitor(index: number, offset: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }>): number | null;
abstract compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): upstream14.RenderComparison;
}
_flaxDefineProxyBase(InlineSpan.prototype, _InlineSpanProxy);
export namespace InlineSpan { export function implement(args: [options?: {style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {build: ((builder: upstream7.ParagraphBuilder, options?: { textScaler?: upstream9.TextScaler | undefined; dimensions?: DartList<upstream8.PlaceholderDimensions> | null | undefined }) => void); visitChildren: ((visitor: ((span: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => boolean)) => boolean); visitDirectChildren: ((visitor: ((span: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => boolean)) => boolean); getSpanForPositionVisitor: ((position: upstream10.TextPosition, offset: upstream11.Accumulator) => Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null); computeSemanticsInformation: ((collector: DartList<upstream12.InlineSpanSemanticsInformation>) => void); computeToPlainText: ((buffer: upstream13.StringBuffer, options?: { includeSemanticsLabels?: boolean | undefined; includePlaceholders?: boolean | undefined }) => void); codeUnitAtVisitor: ((index: number, offset: upstream11.Accumulator) => number | null); compareTo: ((other: InlineSpan) => upstream14.RenderComparison)}): InlineSpan {
return constructProxy(_InlineSpanProxy, args, implementation) as InlineSpan; } }
_flaxBindInstanceType<InlineSpan, typeof InlineSpan>(InlineSpan, "flax.core/sdk_painting#type:InlineSpan", ["flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "build" | "visitChildren" | "visitDirectChildren" | "getSpanForPosition" | "getSpanForPositionVisitor" | "toPlainText" | "getSemanticsInformation" | "computeSemanticsInformation" | "computeToPlainText" | "codeUnitAt" | "codeUnitAtVisitor" | "debugAssertIsValid" | "compareTo" | "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
