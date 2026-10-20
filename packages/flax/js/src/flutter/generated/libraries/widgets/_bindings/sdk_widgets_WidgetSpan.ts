// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderSpan';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream8 from '@flax/dart/core/_bindings/flutter_StringBuffer';
import '@flax/dart/core/_bindings/flutter_StringBuffer';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream14 from '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import type * as upstream15 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters448, _flaxMemberParameters449, _flaxMemberParameters450, _flaxMemberParameters5, _flaxMemberParameters2, _flaxMemberParameters451, _flaxMemberParameters19, _flaxMemberParameters39, _flaxMemberParameters148, _flaxMemberParameters452, _flaxMemberParameters202, _flaxMemberParameters453, _flaxMemberParameters56, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8, _flaxMemberParameters9 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetSpan extends Omit<upstream0.PlaceholderSpan, _flaxOwnMembers0>, Omit<upstream1.InlineSpan, _flaxOwnMembers0 | keyof upstream0.PlaceholderSpan>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.PlaceholderSpan | keyof upstream1.InlineSpan>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PlaceholderSpan | keyof upstream1.InlineSpan | keyof upstream2.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_span.dart::WidgetSpan": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __WidgetSpan: unique symbol;
readonly [_flaxDartTypeValue]: WidgetSpan;

readonly alignment: upstream4.PlaceholderAlignment;
readonly baseline: upstream5.TextBaseline | null;
readonly style: upstream6.TextStyle | null;
readonly child: Widget;
computeToPlainText(buffer: Readonly<{ "__flaxBound:dart:core::StringBuffer": readonly [] }> & Readonly<{ "__flaxBound:dart:core::StringSink": readonly [] }>, options?: {includePlaceholders?: boolean | undefined; includeSemanticsLabels?: boolean | undefined}): void;
computeSemanticsInformation(collector: DartListInput<upstream9.InlineSpanSemanticsInformation, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [] }>>): void;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
debugAssertIsValid(): boolean;
build(builder: Readonly<{ "__flaxBound:dart:ui::ParagraphBuilder": readonly [] }>, options?: {dimensions?: DartListInput<upstream12.PlaceholderDimensions, Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [] }>> | null | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined}): void;
visitChildren(visitor: ((span: upstream1.InlineSpan) => boolean)): boolean;
visitDirectChildren(visitor: ((span: upstream1.InlineSpan) => boolean)): boolean;
getSpanForPosition(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream1.InlineSpan | null;
getSpanForPositionVisitor(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, offset: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }>): upstream1.InlineSpan | null;
toPlainText(options?: {includePlaceholders?: boolean | undefined; includeSemanticsLabels?: boolean | undefined}): string;
getSemanticsInformation(): DartList<upstream9.InlineSpanSemanticsInformation>;
codeUnitAt(index: number): number | null;
codeUnitAtVisitor(index: number, offset: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }>): number | null;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): upstream15.RenderComparison;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream16.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream16.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream18.DiagnosticsTreeStyle | null | undefined}): upstream17.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
toString(options?: {minLevel?: upstream16.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:WidgetSpan", ["alignment","baseline","style","child"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetSpan", "object", {}, {}), [], undefined, "flax.core/sdk_painting#type:PlaceholderSpan");
export function _WidgetSpanFactory(options: { child: Widget; alignment?: upstream4.PlaceholderAlignment | undefined; baseline?: upstream5.TextBaseline | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined }): WidgetSpan {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:WidgetSpan", "", [{"name":"child","required":true},{"name":"alignment"},{"name":"baseline"},{"name":"style"}], [], options) as WidgetSpan;
}
const _WidgetSpanProxy = {type: "flax.core/sdk_widgets#type:WidgetSpan", parameters: _flaxMemberParameters448, constructors: {"": _flaxMemberParameters448}, methods: {"computeToPlainText":_flaxMemberParameters449,"computeSemanticsInformation":_flaxMemberParameters450,"debugFillProperties":_flaxMemberParameters5,"debugAssertIsValid":_flaxMemberParameters2,"build":_flaxMemberParameters451,"visitChildren":_flaxMemberParameters19,"visitDirectChildren":_flaxMemberParameters19,"getSpanForPosition":_flaxMemberParameters39,"getSpanForPositionVisitor":_flaxMemberParameters148,"toPlainText":_flaxMemberParameters452,"getSemanticsInformation":_flaxMemberParameters2,"codeUnitAt":_flaxMemberParameters202,"codeUnitAtVisitor":_flaxMemberParameters453,"compareTo":_flaxMemberParameters56,"toStringShallow":_flaxMemberParameters6,"toStringDeep":_flaxMemberParameters7,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugDescribeChildren":_flaxMemberParameters2,"toString":_flaxMemberParameters9}, getters: ["child","alignment","baseline","style"], setters: [], contextMembers: [], superMembers: ["get:child","get:alignment","get:baseline","get:style","computeToPlainText","computeSemanticsInformation","debugFillProperties","debugAssertIsValid","build","visitChildren","visitDirectChildren","getSpanForPosition","getSpanForPositionVisitor","toPlainText","getSemanticsInformation","codeUnitAt","codeUnitAtVisitor","compareTo","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","toString"]} as const;
export interface _WidgetSpanNative extends WidgetSpan {
readonly [_flaxDartTypeValue]: _WidgetSpanNative;

computeToPlainText(buffer: Readonly<{ "__flaxBound:dart:core::StringBuffer": readonly [] }> & Readonly<{ "__flaxBound:dart:core::StringSink": readonly [] }>, options?: {includeSemanticsLabels?: boolean | undefined; includePlaceholders?: boolean | undefined}): void;
computeSemanticsInformation(collector: DartListInput<upstream9.InlineSpanSemanticsInformation, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [] }>>): void;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
debugAssertIsValid(): boolean;
build(builder: Readonly<{ "__flaxBound:dart:ui::ParagraphBuilder": readonly [] }>, options?: {textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; dimensions?: DartListInput<upstream12.PlaceholderDimensions, Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [] }>> | null | undefined}): void;
visitChildren(visitor: ((span: upstream1.InlineSpan) => boolean)): boolean;
visitDirectChildren(visitor: ((span: upstream1.InlineSpan) => boolean)): boolean;
getSpanForPosition(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream1.InlineSpan | null;
getSpanForPositionVisitor(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, offset: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }>): upstream1.InlineSpan | null;
toPlainText(options?: {includeSemanticsLabels?: boolean | undefined; includePlaceholders?: boolean | undefined}): string;
getSemanticsInformation(): DartList<upstream9.InlineSpanSemanticsInformation>;
codeUnitAt(index: number): number | null;
codeUnitAtVisitor(index: number, offset: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }>): number | null;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): upstream15.RenderComparison;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream16.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream16.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream18.DiagnosticsTreeStyle | null | undefined}): upstream17.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
toString(options?: {minLevel?: upstream16.DiagnosticLevel | undefined}): string;
get child(): Widget;
get alignment(): upstream4.PlaceholderAlignment;
get baseline(): upstream5.TextBaseline | null;
get style(): upstream6.TextStyle | null;
}
export abstract class _WidgetSpanNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetSpan>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetSpan;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetSpan", readonly [], false];
constructor(options: {child: Widget; alignment?: upstream4.PlaceholderAlignment | undefined; baseline?: upstream5.TextBaseline | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_WidgetSpanProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_WidgetSpanNative.prototype, _WidgetSpanProxy);
export namespace _WidgetSpanFactory { export function implement(args: [options: {child: Widget; alignment?: upstream4.PlaceholderAlignment | undefined; baseline?: upstream5.TextBaseline | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): WidgetSpan {
return constructProxy(_WidgetSpanProxy, args, implementation) as WidgetSpan; } }
const _WidgetSpanBinding = _flaxProxyFactory(_WidgetSpanFactory, _WidgetSpanNative) as unknown as typeof _WidgetSpanFactory & (new(options: {child: Widget; alignment?: upstream4.PlaceholderAlignment | undefined; baseline?: upstream5.TextBaseline | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) => _WidgetSpanNative);
export namespace _WidgetSpanFactory { export function extractFromInlineSpan(span: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, textScaler: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }>): DartList<Widget> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:WidgetSpan.extractFromInlineSpan", [span, textScaler]);
return _flaxResult as DartList<Widget>;
} }
export const WidgetSpan: typeof _WidgetSpanBinding & _FlaxInstanceType<WidgetSpan> & _FlaxDartType<WidgetSpan, readonly ["class", "flax.core/sdk_widgets#type:WidgetSpan", readonly [], false]> = _flaxBindInstanceType<WidgetSpan, typeof _WidgetSpanBinding>(_WidgetSpanBinding, "flax.core/sdk_widgets#type:WidgetSpan", ["flax.core/sdk_painting#type:PlaceholderSpan","flax.core/sdk_painting#type:InlineSpan","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _WidgetSpanBinding & _FlaxInstanceType<WidgetSpan> & _FlaxDartType<WidgetSpan, readonly ["class", "flax.core/sdk_widgets#type:WidgetSpan", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "alignment" | "baseline" | "style" | "child" | "computeToPlainText" | "computeSemanticsInformation" | "debugFillProperties" | "debugAssertIsValid" | "build" | "visitChildren" | "visitDirectChildren" | "getSpanForPosition" | "getSpanForPositionVisitor" | "toPlainText" | "getSemanticsInformation" | "codeUnitAt" | "codeUnitAtVisitor" | "compareTo" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/widgets/widget_span.dart::WidgetSpan" | "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan" | "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
