// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Hyphens';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Hyphens';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextBox';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextBox';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream11 from '@flax/flutter/painting/_bindings/sdk_painting_WordBoundary';
import '@flax/flutter/painting/_bindings/sdk_painting_WordBoundary';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream15 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream16 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream17 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream18 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream19 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import type * as upstream20 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import type * as upstream21 from '@flax/dart/ui/_bindings/sdk_dart_ui_GlyphInfo';
import '@flax/dart/ui/_bindings/sdk_dart_ui_GlyphInfo';
import type * as upstream22 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream23 from '@flax/dart/ui/_bindings/sdk_dart_ui_LineMetrics';
import '@flax/dart/ui/_bindings/sdk_dart_ui_LineMetrics';
import { _flaxMemberParameters135, _flaxMemberParameters69, _flaxMemberParameters2, _flaxMemberParameters136, _flaxMemberParameters137, _flaxMemberParameters138, _flaxMemberParameters110, _flaxMemberParameters139, _flaxMemberParameters140, _flaxMemberParameters87, _flaxMemberParameters141 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextPainter extends Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [] }> { readonly __TextPainter: unique symbol;
readonly [_flaxDartTypeValue]: TextPainter;

get text(): upstream0.InlineSpan | null;
readonly plainText: string;
get textAlign(): upstream1.TextAlign;
get textDirection(): upstream2.TextDirection | null;
get textScaleFactor(): number;
get textScaler(): upstream3.TextScaler;
get ellipsis(): string | null;
get locale(): upstream4.Locale | null;
get maxLines(): number | null;
get strutStyle(): upstream5.StrutStyle | null;
get textWidthBasis(): upstream6.TextWidthBasis;
get textHeightBehavior(): upstream7.TextHeightBehavior | null;
get hyphens(): upstream8.Hyphens;
readonly inlinePlaceholderBoxes: DartList<upstream9.TextBox> | null;
readonly preferredLineHeight: number;
readonly minIntrinsicWidth: number;
readonly maxIntrinsicWidth: number;
readonly width: number;
readonly height: number;
readonly size: upstream10.Size;
readonly didExceedMaxLines: boolean;
get debugPaintTextLayoutBoxes(): boolean;
readonly wordBoundaries: upstream11.WordBoundary;
readonly debugDisposed: boolean;
markNeedsLayout(): void;
setPlaceholderDimensions(value: DartListInput<upstream12.PlaceholderDimensions, Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [] }>> | null): void;
computeDistanceToActualBaseline(baseline: upstream13.TextBaseline): number;
layout(options?: {maxWidth?: number | undefined; minWidth?: number | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getOffsetAfter(offset: number): number | null;
getOffsetBefore(offset: number): number | null;
getOffsetForCaret(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, caretPrototype: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream15.Offset;
getFullHeightForCaret(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, caretPrototype: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): number;
getBoxesForSelection(selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, options?: {boxHeightStyle?: upstream19.BoxHeightStyle | undefined; boxWidthStyle?: upstream20.BoxWidthStyle | undefined}): DartList<upstream9.TextBox>;
getClosestGlyphForOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream21.GlyphInfo | null;
getPositionForOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream16.TextPosition;
getWordBoundary(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream22.TextRange;
getLineBoundary(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream22.TextRange;
computeLineMetrics(): DartList<upstream23.LineMetrics>;
dispose(): void;
set text(value: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set textAlign(value: upstream1.TextAlign);
set textDirection(value: upstream2.TextDirection | null);
set textScaleFactor(value: number);
set textScaler(value: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }>);
set ellipsis(value: string | null);
set locale(value: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null);
set maxLines(value: number | null);
set strutStyle(value: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set textWidthBasis(value: upstream6.TextWidthBasis);
set textHeightBehavior(value: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null);
set hyphens(value: upstream8.Hyphens);
set debugPaintTextLayoutBoxes(value: boolean);
}
defineObject("flax.core/sdk_painting#type:TextPainter", ["text","plainText","textAlign","textDirection","textScaleFactor","textScaler","ellipsis","locale","maxLines","strutStyle","textWidthBasis","textHeightBehavior","hyphens","inlinePlaceholderBoxes","preferredLineHeight","minIntrinsicWidth","maxIntrinsicWidth","width","height","size","didExceedMaxLines","debugPaintTextLayoutBoxes","wordBoundaries","debugDisposed"], ["text","textAlign","textDirection","textScaleFactor","textScaler","ellipsis","locale","maxLines","strutStyle","textWidthBasis","textHeightBehavior","hyphens","debugPaintTextLayoutBoxes"], _flaxBindingMethods("flax.core/sdk_painting#type:TextPainter", "object", {"markNeedsLayout":_flaxMemberParameters2,"setPlaceholderDimensions":_flaxMemberParameters69,"computeDistanceToActualBaseline":_flaxMemberParameters136,"layout":_flaxMemberParameters137,"paint":_flaxMemberParameters138,"getOffsetAfter":_flaxMemberParameters110,"getOffsetBefore":_flaxMemberParameters110,"getOffsetForCaret":_flaxMemberParameters139,"getFullHeightForCaret":_flaxMemberParameters139,"getBoxesForSelection":_flaxMemberParameters140,"getClosestGlyphForOffset":_flaxMemberParameters110,"getPositionForOffset":_flaxMemberParameters110,"getWordBoundary":_flaxMemberParameters87,"getLineBoundary":_flaxMemberParameters87,"computeLineMetrics":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, {}), []);
export function _TextPainterFactory(options: { text?: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textAlign?: upstream1.TextAlign | undefined; textDirection?: upstream2.TextDirection | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; maxLines?: number | null | undefined; ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; hyphens?: upstream8.Hyphens | undefined } = {}): TextPainter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:TextPainter", "", [{"name":"text"},{"name":"textAlign"},{"name":"textDirection"},{"name":"textScaleFactor"},{"name":"textScaler"},{"name":"maxLines"},{"name":"ellipsis"},{"name":"locale"},{"name":"strutStyle"},{"name":"textWidthBasis"},{"name":"textHeightBehavior"},{"name":"hyphens"}], [], options) as TextPainter;
}
const _TextPainterProxy = {type: "flax.core/sdk_painting#type:TextPainter", parameters: _flaxMemberParameters141, constructors: {"": _flaxMemberParameters141}, methods: {"markNeedsLayout":_flaxMemberParameters2,"setPlaceholderDimensions":_flaxMemberParameters69,"computeDistanceToActualBaseline":_flaxMemberParameters136,"layout":_flaxMemberParameters137,"paint":_flaxMemberParameters138,"getOffsetAfter":_flaxMemberParameters110,"getOffsetBefore":_flaxMemberParameters110,"getOffsetForCaret":_flaxMemberParameters139,"getFullHeightForCaret":_flaxMemberParameters139,"getBoxesForSelection":_flaxMemberParameters140,"getClosestGlyphForOffset":_flaxMemberParameters110,"getPositionForOffset":_flaxMemberParameters110,"getWordBoundary":_flaxMemberParameters87,"getLineBoundary":_flaxMemberParameters87,"computeLineMetrics":_flaxMemberParameters2,"dispose":_flaxMemberParameters2}, getters: ["text","plainText","textAlign","textDirection","textScaleFactor","textScaler","ellipsis","locale","maxLines","strutStyle","textWidthBasis","textHeightBehavior","hyphens","inlinePlaceholderBoxes","preferredLineHeight","minIntrinsicWidth","maxIntrinsicWidth","width","height","size","didExceedMaxLines","debugPaintTextLayoutBoxes","wordBoundaries","debugDisposed"], setters: ["text","textAlign","textDirection","textScaleFactor","textScaler","ellipsis","locale","maxLines","strutStyle","textWidthBasis","textHeightBehavior","hyphens","debugPaintTextLayoutBoxes"], contextMembers: [], superMembers: ["get:text","get:plainText","get:textAlign","get:textDirection","get:textScaleFactor","get:textScaler","get:ellipsis","get:locale","get:maxLines","get:strutStyle","get:textWidthBasis","get:textHeightBehavior","get:hyphens","get:inlinePlaceholderBoxes","get:preferredLineHeight","get:minIntrinsicWidth","get:maxIntrinsicWidth","get:width","get:height","get:size","get:didExceedMaxLines","get:debugPaintTextLayoutBoxes","get:wordBoundaries","get:debugDisposed","set:text","set:textAlign","set:textDirection","set:textScaleFactor","set:textScaler","set:ellipsis","set:locale","set:maxLines","set:strutStyle","set:textWidthBasis","set:textHeightBehavior","set:hyphens","set:debugPaintTextLayoutBoxes","markNeedsLayout","setPlaceholderDimensions","computeDistanceToActualBaseline","layout","paint","getOffsetAfter","getOffsetBefore","getOffsetForCaret","getFullHeightForCaret","getBoxesForSelection","getClosestGlyphForOffset","getPositionForOffset","getWordBoundary","getLineBoundary","computeLineMetrics","dispose"]} as const;
export interface _TextPainterNative extends TextPainter {
readonly [_flaxDartTypeValue]: _TextPainterNative;

markNeedsLayout(): void;
setPlaceholderDimensions(value: DartListInput<upstream12.PlaceholderDimensions, Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [] }>> | null): void;
computeDistanceToActualBaseline(baseline: upstream13.TextBaseline): number;
layout(options?: {minWidth?: number | undefined; maxWidth?: number | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getOffsetAfter(offset: number): number | null;
getOffsetBefore(offset: number): number | null;
getOffsetForCaret(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, caretPrototype: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream15.Offset;
getFullHeightForCaret(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, caretPrototype: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): number;
getBoxesForSelection(selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, options?: {boxHeightStyle?: upstream19.BoxHeightStyle | undefined; boxWidthStyle?: upstream20.BoxWidthStyle | undefined}): DartList<upstream9.TextBox>;
getClosestGlyphForOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream21.GlyphInfo | null;
getPositionForOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream16.TextPosition;
getWordBoundary(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream22.TextRange;
getLineBoundary(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream22.TextRange;
computeLineMetrics(): DartList<upstream23.LineMetrics>;
dispose(): void;
get text(): upstream0.InlineSpan | null;
get plainText(): string;
get textAlign(): upstream1.TextAlign;
get textDirection(): upstream2.TextDirection | null;
get textScaleFactor(): number;
get textScaler(): upstream3.TextScaler;
get ellipsis(): string | null;
get locale(): upstream4.Locale | null;
get maxLines(): number | null;
get strutStyle(): upstream5.StrutStyle | null;
get textWidthBasis(): upstream6.TextWidthBasis;
get textHeightBehavior(): upstream7.TextHeightBehavior | null;
get hyphens(): upstream8.Hyphens;
get inlinePlaceholderBoxes(): DartList<upstream9.TextBox> | null;
get preferredLineHeight(): number;
get minIntrinsicWidth(): number;
get maxIntrinsicWidth(): number;
get width(): number;
get height(): number;
get size(): upstream10.Size;
get didExceedMaxLines(): boolean;
get debugPaintTextLayoutBoxes(): boolean;
get wordBoundaries(): upstream11.WordBoundary;
get debugDisposed(): boolean;
set text(value: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set textAlign(value: upstream1.TextAlign);
set textDirection(value: upstream2.TextDirection | null);
set textScaleFactor(value: number);
set textScaler(value: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }>);
set ellipsis(value: string | null);
set locale(value: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null);
set maxLines(value: number | null);
set strutStyle(value: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set textWidthBasis(value: upstream6.TextWidthBasis);
set textHeightBehavior(value: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null);
set hyphens(value: upstream8.Hyphens);
set debugPaintTextLayoutBoxes(value: boolean);
}
export abstract class _TextPainterNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextPainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextPainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextPainter", readonly [], false];
constructor(options?: {text?: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textAlign?: upstream1.TextAlign | undefined; textDirection?: upstream2.TextDirection | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; maxLines?: number | null | undefined; ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; hyphens?: upstream8.Hyphens | undefined}) { super(_TextPainterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextPainterNative.prototype, _TextPainterProxy);
export namespace _TextPainterFactory { export function implement(args: [options?: {text?: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textAlign?: upstream1.TextAlign | undefined; textDirection?: upstream2.TextDirection | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; maxLines?: number | null | undefined; ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; hyphens?: upstream8.Hyphens | undefined}], implementation: {}): TextPainter {
return constructProxy(_TextPainterProxy, args, implementation) as TextPainter; } }
const _TextPainterBinding = _flaxProxyFactory(_TextPainterFactory, _TextPainterNative) as unknown as typeof _TextPainterFactory & (new(options?: {text?: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textAlign?: upstream1.TextAlign | undefined; textDirection?: upstream2.TextDirection | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; maxLines?: number | null | undefined; ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; hyphens?: upstream8.Hyphens | undefined}) => _TextPainterNative);
export namespace _TextPainterFactory { export function computeWidth(options: { ellipsis?: string | null | undefined; hyphens?: upstream8.Hyphens | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; maxLines?: number | null | undefined; maxWidth?: number | undefined; minWidth?: number | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; text: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textAlign?: upstream1.TextAlign | undefined; textDirection: upstream2.TextDirection; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined }): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["ellipsis","hyphens","locale","maxLines","maxWidth","minWidth","strutStyle","text","textAlign","textDirection","textHeightBehavior","textScaleFactor","textScaler","textWidthBasis"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:TextPainter.computeWidth", [options.ellipsis, options.hyphens, options.locale, options.maxLines, options.maxWidth, options.minWidth, options.strutStyle, options.text, options.textAlign, options.textDirection, options.textHeightBehavior, options.textScaleFactor, options.textScaler, options.textWidthBasis], _flaxMemberParameters135);
return _flaxResult as number;
} }
export namespace _TextPainterFactory { export function computeMaxIntrinsicWidth(options: { ellipsis?: string | null | undefined; hyphens?: upstream8.Hyphens | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; maxLines?: number | null | undefined; maxWidth?: number | undefined; minWidth?: number | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; text: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textAlign?: upstream1.TextAlign | undefined; textDirection: upstream2.TextDirection; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined }): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["ellipsis","hyphens","locale","maxLines","maxWidth","minWidth","strutStyle","text","textAlign","textDirection","textHeightBehavior","textScaleFactor","textScaler","textWidthBasis"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:TextPainter.computeMaxIntrinsicWidth", [options.ellipsis, options.hyphens, options.locale, options.maxLines, options.maxWidth, options.minWidth, options.strutStyle, options.text, options.textAlign, options.textDirection, options.textHeightBehavior, options.textScaleFactor, options.textScaler, options.textWidthBasis], _flaxMemberParameters135);
return _flaxResult as number;
} }
export namespace _TextPainterFactory { export function isHighSurrogate(value: number): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:TextPainter.isHighSurrogate", [value], _flaxMemberParameters69);
return _flaxResult as boolean;
} }
export namespace _TextPainterFactory { export function isLowSurrogate(value: number): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:TextPainter.isLowSurrogate", [value], _flaxMemberParameters69);
return _flaxResult as boolean;
} }
export const TextPainter: typeof _TextPainterBinding & _FlaxInstanceType<TextPainter> & _FlaxDartType<TextPainter, readonly ["class", "flax.core/sdk_painting#type:TextPainter", readonly [], false]> = _flaxBindInstanceType<TextPainter, typeof _TextPainterBinding>(_TextPainterBinding, "flax.core/sdk_painting#type:TextPainter", ["dart:core::Object"]) as typeof _TextPainterBinding & _FlaxInstanceType<TextPainter> & _FlaxDartType<TextPainter, readonly ["class", "flax.core/sdk_painting#type:TextPainter", readonly [], false]>;
