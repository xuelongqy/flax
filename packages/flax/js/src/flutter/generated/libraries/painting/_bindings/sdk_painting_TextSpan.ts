// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_MouseTrackerAnnotation';
import '@flax/flutter/services/_bindings/sdk_services_MouseTrackerAnnotation';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerEnterEvent';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerExitEvent';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphBuilder';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import type * as upstream13 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream15 from '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import '@flax/flutter/painting/_bindings/sdk_painting_Accumulator';
import type * as upstream16 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpanSemanticsInformation';
import type * as upstream17 from '@flax/dart/core/_bindings/flutter_StringBuffer';
import '@flax/dart/core/_bindings/flutter_StringBuffer';
import type * as upstream18 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream23 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream24 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
const _flaxMemberParameters0 = [{"name":"collector","required":true,"positional":true},{"name":"inheritedLocale","required":false,"positional":false},{"name":"inheritedSpellOut","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"event","required":true,"positional":true},{"name":"entry","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"builder","required":true,"positional":true},{"name":"dimensions","required":false,"positional":false},{"name":"textScaler","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"visitor","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"position","required":true,"positional":true},{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"includePlaceholders","required":false,"positional":false},{"name":"includeSemanticsLabels","required":false,"positional":false}] as const;
const _flaxMemberParameters7 = [] as const;
const _flaxMemberParameters8 = [{"name":"buffer","required":true,"positional":true},{"name":"includePlaceholders","required":false,"positional":false},{"name":"includeSemanticsLabels","required":false,"positional":false}] as const;
const _flaxMemberParameters9 = [{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"index","required":true,"positional":true},{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters14 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters15 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters16 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSpan extends Omit<upstream0.InlineSpan, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.InlineSpan>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.InlineSpan | keyof upstream1.DiagnosticableTree>, Omit<upstream3.HitTestTarget, _flaxOwnMembers0 | keyof upstream0.InlineSpan | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable>, Omit<upstream4.MouseTrackerAnnotation, _flaxOwnMembers0 | keyof upstream0.InlineSpan | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable | keyof upstream3.HitTestTarget>, Readonly<{ "__flaxBound:package:flutter/src/painting/text_span.dart::TextSpan": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation": readonly [] }> { readonly __TextSpan: unique symbol;
readonly [_flaxDartTypeValue]: TextSpan;

}
defineObject("flax.core/sdk_painting#type:TextSpan", ["style","onEnter","onExit","cursor","validForMouseTracker","text","children","recognizer","mouseCursor","semanticsLabel","semanticsIdentifier","locale","spellOut"], [], _flaxBindingMethods("flax.core/sdk_painting#type:TextSpan", "object", {"computeSemanticsInformation":_flaxMemberParameters0,"handleEvent":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_painting#type:InlineSpan");
const _TextSpanProxy = {type: "flax.core/sdk_painting#type:TextSpan", parameters: [{"name":"text","required":false,"positional":false},{"name":"children","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"recognizer","required":false,"positional":false},{"name":"mouseCursor","required":false,"positional":false},{"name":"onEnter","required":false,"positional":false},{"name":"onExit","required":false,"positional":false},{"name":"semanticsLabel","required":false,"positional":false},{"name":"semanticsIdentifier","required":false,"positional":false},{"name":"locale","required":false,"positional":false},{"name":"spellOut","required":false,"positional":false}], constructors: {"":[{"name":"text","required":false,"positional":false},{"name":"children","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"recognizer","required":false,"positional":false},{"name":"mouseCursor","required":false,"positional":false},{"name":"onEnter","required":false,"positional":false},{"name":"onExit","required":false,"positional":false},{"name":"semanticsLabel","required":false,"positional":false},{"name":"semanticsIdentifier","required":false,"positional":false},{"name":"locale","required":false,"positional":false},{"name":"spellOut","required":false,"positional":false}]}, methods: {"build":_flaxMemberParameters2,"visitChildren":_flaxMemberParameters3,"visitDirectChildren":_flaxMemberParameters3,"getSpanForPosition":_flaxMemberParameters4,"getSpanForPositionVisitor":_flaxMemberParameters5,"toPlainText":_flaxMemberParameters6,"getSemanticsInformation":_flaxMemberParameters7,"computeSemanticsInformation":_flaxMemberParameters0,"computeToPlainText":_flaxMemberParameters8,"codeUnitAt":_flaxMemberParameters9,"codeUnitAtVisitor":_flaxMemberParameters10,"debugAssertIsValid":_flaxMemberParameters7,"compareTo":_flaxMemberParameters11,"debugFillProperties":_flaxMemberParameters12,"toStringShallow":_flaxMemberParameters13,"toStringDeep":_flaxMemberParameters14,"toStringShort":_flaxMemberParameters7,"toDiagnosticsNode":_flaxMemberParameters15,"debugDescribeChildren":_flaxMemberParameters7,"toString":_flaxMemberParameters16,"handleEvent":_flaxMemberParameters1}, getters: ["text","children","recognizer","mouseCursor","onEnter","onExit","cursor","semanticsLabel","semanticsIdentifier","locale","spellOut","validForMouseTracker","style"], setters: [], contextMembers: [], superMembers: ["get:text","get:children","get:recognizer","get:mouseCursor","get:onEnter","get:onExit","get:cursor","get:semanticsLabel","get:semanticsIdentifier","get:locale","get:spellOut","get:validForMouseTracker","get:style","build","visitChildren","visitDirectChildren","getSpanForPosition","getSpanForPositionVisitor","toPlainText","getSemanticsInformation","computeSemanticsInformation","computeToPlainText","codeUnitAt","codeUnitAtVisitor","debugAssertIsValid","compareTo","debugFillProperties","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","toString","handleEvent"]} as const;
export interface TextSpan {
readonly [_flaxDartTypeValue]: TextSpan;

build(builder: Readonly<{ "__flaxBound:dart:ui::ParagraphBuilder": readonly [] }>, options?: {textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; dimensions?: DartListInput<upstream12.PlaceholderDimensions, Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [] }>> | null | undefined}): void;
visitChildren(visitor: ((span: upstream0.InlineSpan) => boolean)): boolean;
visitDirectChildren(visitor: ((span: upstream0.InlineSpan) => boolean)): boolean;
getSpanForPosition(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream0.InlineSpan | null;
getSpanForPositionVisitor(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, offset: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }>): upstream0.InlineSpan | null;
toPlainText(options?: {includeSemanticsLabels?: boolean | undefined; includePlaceholders?: boolean | undefined}): string;
getSemanticsInformation(): DartList<upstream16.InlineSpanSemanticsInformation>;
computeSemanticsInformation(collector: DartListInput<upstream16.InlineSpanSemanticsInformation, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpanSemanticsInformation": readonly [] }>>, options?: {inheritedLocale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; inheritedSpellOut?: boolean | undefined}): void;
computeToPlainText(buffer: Readonly<{ "__flaxBound:dart:core::StringBuffer": readonly [] }> & Readonly<{ "__flaxBound:dart:core::StringSink": readonly [] }>, options?: {includeSemanticsLabels?: boolean | undefined; includePlaceholders?: boolean | undefined}): void;
codeUnitAt(index: number): number | null;
codeUnitAtVisitor(index: number, offset: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::Accumulator": readonly [] }>): number | null;
debugAssertIsValid(): boolean;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): upstream18.RenderComparison;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream20.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream20.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream22.DiagnosticsTreeStyle | null | undefined}): upstream21.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream21.DiagnosticsNode>;
toString(options?: {minLevel?: upstream20.DiagnosticLevel | undefined}): string;
handleEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream3.HitTestTarget] }>): void;
get text(): string | null;
get children(): DartList<upstream0.InlineSpan> | null;
get recognizer(): upstream6.GestureRecognizer | null;
get mouseCursor(): upstream7.MouseCursor;
get onEnter(): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEnterEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerEnterEvent": readonly [] }>) => void) | null;
get onExit(): ((event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerExitEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerExitEvent": readonly [] }>) => void) | null;
get cursor(): upstream7.MouseCursor;
get semanticsLabel(): string | null;
get semanticsIdentifier(): string | null;
get locale(): upstream10.Locale | null;
get spellOut(): boolean | null;
get validForMouseTracker(): boolean;
get style(): upstream5.TextStyle | null;
}
export abstract class TextSpan extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSpan>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSpan;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextSpan", readonly [], false];
constructor(options?: {text?: string | null | undefined; children?: DartListInput<upstream0.InlineSpan, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; recognizer?: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; onEnter?: ((event: upstream8.PointerEnterEvent) => void) | null | undefined; onExit?: ((event: upstream9.PointerExitEvent) => void) | null | undefined; semanticsLabel?: string | null | undefined; semanticsIdentifier?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; spellOut?: boolean | null | undefined}) { super(_TextSpanProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextSpan.prototype, _TextSpanProxy);
export namespace TextSpan { export function implement(args: [options?: {text?: string | null | undefined; children?: DartListInput<upstream0.InlineSpan, Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; recognizer?: Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; onEnter?: ((event: upstream8.PointerEnterEvent) => void) | null | undefined; onExit?: ((event: upstream9.PointerExitEvent) => void) | null | undefined; semanticsLabel?: string | null | undefined; semanticsIdentifier?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; spellOut?: boolean | null | undefined}], implementation: {}): TextSpan {
return constructProxy(_TextSpanProxy, args, implementation) as TextSpan; } }
_flaxBindInstanceType<TextSpan, typeof TextSpan>(TextSpan, "flax.core/sdk_painting#type:TextSpan", ["flax.core/sdk_painting#type:InlineSpan","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_gestures#type:HitTestTarget","flax.core/sdk_services#type:MouseTrackerAnnotation"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "style" | "onEnter" | "onExit" | "cursor" | "validForMouseTracker" | "text" | "children" | "recognizer" | "mouseCursor" | "semanticsLabel" | "semanticsIdentifier" | "locale" | "spellOut" | "build" | "visitChildren" | "visitDirectChildren" | "getSpanForPosition" | "getSpanForPositionVisitor" | "toPlainText" | "getSemanticsInformation" | "computeSemanticsInformation" | "computeToPlainText" | "codeUnitAt" | "codeUnitAtVisitor" | "debugAssertIsValid" | "compareTo" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "handleEvent" | "__flaxBound:package:flutter/src/painting/text_span.dart::TextSpan" | "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget" | "__flaxBound:package:flutter/src/services/mouse_tracking.dart::MouseTrackerAnnotation";
