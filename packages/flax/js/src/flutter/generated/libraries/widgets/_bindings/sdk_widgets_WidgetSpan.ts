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
const _flaxMemberParameters0 = [{"name":"child","required":true},{"name":"alignment"},{"name":"baseline"},{"name":"style"}] as const;
const _flaxMemberParameters1 = [{"name":"buffer","required":true,"positional":true},{"name":"includePlaceholders"},{"name":"includeSemanticsLabels"}] as const;
const _flaxMemberParameters2 = [{"name":"collector","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"builder","required":true,"positional":true},{"name":"dimensions"},{"name":"textScaler"}] as const;
const _flaxMemberParameters6 = [{"name":"visitor","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"position","required":true,"positional":true},{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"includePlaceholders"},{"name":"includeSemanticsLabels"}] as const;
const _flaxMemberParameters10 = [{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"index","required":true,"positional":true},{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"joiner"},{"name":"minLevel"}] as const;
const _flaxMemberParameters14 = [{"name":"minLevel"},{"name":"prefixLineOne"},{"name":"prefixOtherLines"},{"name":"wrapWidth"}] as const;
const _flaxMemberParameters15 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters16 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetSpan extends Omit<upstream0.PlaceholderSpan, _flaxOwnMembers0>, Omit<upstream1.InlineSpan, _flaxOwnMembers0 | keyof upstream0.PlaceholderSpan>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.PlaceholderSpan | keyof upstream1.InlineSpan>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PlaceholderSpan | keyof upstream1.InlineSpan | keyof upstream2.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_span.dart::WidgetSpan": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __WidgetSpan: unique symbol;
readonly [_flaxDartTypeValue]: WidgetSpan;

}
defineObject("flax.core/sdk_widgets#type:WidgetSpan", ["alignment","baseline","style","child"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetSpan", "object", {}, {}), [], undefined, "flax.core/sdk_painting#type:PlaceholderSpan");
const _WidgetSpanProxy = {type: "flax.core/sdk_widgets#type:WidgetSpan", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"computeToPlainText":_flaxMemberParameters1,"computeSemanticsInformation":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"debugAssertIsValid":_flaxMemberParameters4,"build":_flaxMemberParameters5,"visitChildren":_flaxMemberParameters6,"visitDirectChildren":_flaxMemberParameters6,"getSpanForPosition":_flaxMemberParameters7,"getSpanForPositionVisitor":_flaxMemberParameters8,"toPlainText":_flaxMemberParameters9,"getSemanticsInformation":_flaxMemberParameters4,"codeUnitAt":_flaxMemberParameters10,"codeUnitAtVisitor":_flaxMemberParameters11,"compareTo":_flaxMemberParameters12,"toStringShallow":_flaxMemberParameters13,"toStringDeep":_flaxMemberParameters14,"toStringShort":_flaxMemberParameters4,"toDiagnosticsNode":_flaxMemberParameters15,"debugDescribeChildren":_flaxMemberParameters4,"toString":_flaxMemberParameters16}, getters: ["child","alignment","baseline","style"], setters: [], contextMembers: [], superMembers: ["get:child","get:alignment","get:baseline","get:style","computeToPlainText","computeSemanticsInformation","debugFillProperties","debugAssertIsValid","build","visitChildren","visitDirectChildren","getSpanForPosition","getSpanForPositionVisitor","toPlainText","getSemanticsInformation","codeUnitAt","codeUnitAtVisitor","compareTo","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","toString"]} as const;
export interface WidgetSpan {
readonly [_flaxDartTypeValue]: WidgetSpan;

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
export abstract class WidgetSpan extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetSpan>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetSpan;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetSpan", readonly [], false];
constructor(options: {child: Widget; alignment?: upstream4.PlaceholderAlignment | undefined; baseline?: upstream5.TextBaseline | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}) { super(_WidgetSpanProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(WidgetSpan.prototype, _WidgetSpanProxy);
export namespace WidgetSpan { export function implement(args: [options: {child: Widget; alignment?: upstream4.PlaceholderAlignment | undefined; baseline?: upstream5.TextBaseline | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined}], implementation: {}): WidgetSpan {
return constructProxy(_WidgetSpanProxy, args, implementation) as WidgetSpan; } }
export namespace WidgetSpan { export function extractFromInlineSpan(span: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, textScaler: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }>): DartList<Widget> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:WidgetSpan.extractFromInlineSpan", [span, textScaler]);
return _flaxResult as DartList<Widget>;
} }
_flaxBindInstanceType<WidgetSpan, typeof WidgetSpan>(WidgetSpan, "flax.core/sdk_widgets#type:WidgetSpan", ["flax.core/sdk_painting#type:PlaceholderSpan","flax.core/sdk_painting#type:InlineSpan","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "alignment" | "baseline" | "style" | "child" | "computeToPlainText" | "computeSemanticsInformation" | "debugFillProperties" | "debugAssertIsValid" | "build" | "visitChildren" | "visitDirectChildren" | "getSpanForPosition" | "getSpanForPositionVisitor" | "toPlainText" | "getSemanticsInformation" | "codeUnitAt" | "codeUnitAtVisitor" | "compareTo" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/widgets/widget_span.dart::WidgetSpan" | "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan" | "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
