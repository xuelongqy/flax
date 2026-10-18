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
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextBox';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextBox';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream10 from '@flax/flutter/painting/_bindings/sdk_painting_WordBoundary';
import '@flax/flutter/painting/_bindings/sdk_painting_WordBoundary';
import type * as upstream11 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderDimensions';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream14 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream16 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream17 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream18 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import type * as upstream19 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import type * as upstream20 from '@flax/dart/ui/_bindings/sdk_dart_ui_GlyphInfo';
import '@flax/dart/ui/_bindings/sdk_dart_ui_GlyphInfo';
import type * as upstream21 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream22 from '@flax/dart/ui/_bindings/sdk_dart_ui_LineMetrics';
import '@flax/dart/ui/_bindings/sdk_dart_ui_LineMetrics';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"baseline","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"maxWidth","required":false,"positional":false},{"name":"minWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"canvas","required":true,"positional":true},{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"position","required":true,"positional":true},{"name":"caretPrototype","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"selection","required":true,"positional":true},{"name":"boxHeightStyle","required":false,"positional":false},{"name":"boxWidthStyle","required":false,"positional":false}] as const;
const _flaxMemberParameters8 = [{"name":"position","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextPainter extends Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::TextPainter": readonly [] }> { readonly __TextPainter: unique symbol;
readonly [_flaxDartTypeValue]: TextPainter;

}
defineObject("flax.core/sdk_painting#type:TextPainter", ["text","plainText","textAlign","textDirection","textScaleFactor","textScaler","ellipsis","locale","maxLines","strutStyle","textWidthBasis","textHeightBehavior","inlinePlaceholderBoxes","preferredLineHeight","minIntrinsicWidth","maxIntrinsicWidth","width","height","size","didExceedMaxLines","debugPaintTextLayoutBoxes","wordBoundaries","debugDisposed"], ["text","textAlign","textDirection","textScaleFactor","textScaler","ellipsis","locale","maxLines","strutStyle","textWidthBasis","textHeightBehavior","debugPaintTextLayoutBoxes"], _flaxBindingMethods("flax.core/sdk_painting#type:TextPainter", "object", {"markNeedsLayout":_flaxMemberParameters0,"setPlaceholderDimensions":_flaxMemberParameters1,"computeDistanceToActualBaseline":_flaxMemberParameters2,"layout":_flaxMemberParameters3,"paint":_flaxMemberParameters4,"getOffsetAfter":_flaxMemberParameters5,"getOffsetBefore":_flaxMemberParameters5,"getOffsetForCaret":_flaxMemberParameters6,"getFullHeightForCaret":_flaxMemberParameters6,"getBoxesForSelection":_flaxMemberParameters7,"getClosestGlyphForOffset":_flaxMemberParameters5,"getPositionForOffset":_flaxMemberParameters5,"getWordBoundary":_flaxMemberParameters8,"getLineBoundary":_flaxMemberParameters8,"computeLineMetrics":_flaxMemberParameters0,"dispose":_flaxMemberParameters0}, {}), []);
const _TextPainterProxy = {type: "flax.core/sdk_painting#type:TextPainter", parameters: [{"name":"text","required":false,"positional":false},{"name":"textAlign","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"textScaleFactor","required":false,"positional":false},{"name":"textScaler","required":false,"positional":false},{"name":"maxLines","required":false,"positional":false},{"name":"ellipsis","required":false,"positional":false},{"name":"locale","required":false,"positional":false},{"name":"strutStyle","required":false,"positional":false},{"name":"textWidthBasis","required":false,"positional":false},{"name":"textHeightBehavior","required":false,"positional":false}], constructors: {"":[{"name":"text","required":false,"positional":false},{"name":"textAlign","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"textScaleFactor","required":false,"positional":false},{"name":"textScaler","required":false,"positional":false},{"name":"maxLines","required":false,"positional":false},{"name":"ellipsis","required":false,"positional":false},{"name":"locale","required":false,"positional":false},{"name":"strutStyle","required":false,"positional":false},{"name":"textWidthBasis","required":false,"positional":false},{"name":"textHeightBehavior","required":false,"positional":false}]}, methods: {"markNeedsLayout":_flaxMemberParameters0,"setPlaceholderDimensions":_flaxMemberParameters1,"computeDistanceToActualBaseline":_flaxMemberParameters2,"layout":_flaxMemberParameters3,"paint":_flaxMemberParameters4,"getOffsetAfter":_flaxMemberParameters5,"getOffsetBefore":_flaxMemberParameters5,"getOffsetForCaret":_flaxMemberParameters6,"getFullHeightForCaret":_flaxMemberParameters6,"getBoxesForSelection":_flaxMemberParameters7,"getClosestGlyphForOffset":_flaxMemberParameters5,"getPositionForOffset":_flaxMemberParameters5,"getWordBoundary":_flaxMemberParameters8,"getLineBoundary":_flaxMemberParameters8,"computeLineMetrics":_flaxMemberParameters0,"dispose":_flaxMemberParameters0}, getters: ["text","plainText","textAlign","textDirection","textScaleFactor","textScaler","ellipsis","locale","maxLines","strutStyle","textWidthBasis","textHeightBehavior","inlinePlaceholderBoxes","preferredLineHeight","minIntrinsicWidth","maxIntrinsicWidth","width","height","size","didExceedMaxLines","debugPaintTextLayoutBoxes","wordBoundaries","debugDisposed"], setters: ["text","textAlign","textDirection","textScaleFactor","textScaler","ellipsis","locale","maxLines","strutStyle","textWidthBasis","textHeightBehavior","debugPaintTextLayoutBoxes"], contextMembers: [], superMembers: ["get:text","get:plainText","get:textAlign","get:textDirection","get:textScaleFactor","get:textScaler","get:ellipsis","get:locale","get:maxLines","get:strutStyle","get:textWidthBasis","get:textHeightBehavior","get:inlinePlaceholderBoxes","get:preferredLineHeight","get:minIntrinsicWidth","get:maxIntrinsicWidth","get:width","get:height","get:size","get:didExceedMaxLines","get:debugPaintTextLayoutBoxes","get:wordBoundaries","get:debugDisposed","set:text","set:textAlign","set:textDirection","set:textScaleFactor","set:textScaler","set:ellipsis","set:locale","set:maxLines","set:strutStyle","set:textWidthBasis","set:textHeightBehavior","set:debugPaintTextLayoutBoxes","markNeedsLayout","setPlaceholderDimensions","computeDistanceToActualBaseline","layout","paint","getOffsetAfter","getOffsetBefore","getOffsetForCaret","getFullHeightForCaret","getBoxesForSelection","getClosestGlyphForOffset","getPositionForOffset","getWordBoundary","getLineBoundary","computeLineMetrics","dispose"]} as const;
export interface TextPainter {
readonly [_flaxDartTypeValue]: TextPainter;

markNeedsLayout(): void;
setPlaceholderDimensions(value: DartListInput<upstream11.PlaceholderDimensions, Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [] }>> | null): void;
computeDistanceToActualBaseline(baseline: upstream12.TextBaseline): number;
layout(options?: {minWidth?: number | undefined; maxWidth?: number | undefined}): void;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
getOffsetAfter(offset: number): number | null;
getOffsetBefore(offset: number): number | null;
getOffsetForCaret(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, caretPrototype: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream14.Offset;
getFullHeightForCaret(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, caretPrototype: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): number;
getBoxesForSelection(selection: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, options?: {boxHeightStyle?: upstream18.BoxHeightStyle | undefined; boxWidthStyle?: upstream19.BoxWidthStyle | undefined}): DartList<upstream8.TextBox>;
getClosestGlyphForOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream20.GlyphInfo | null;
getPositionForOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream15.TextPosition;
getWordBoundary(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream21.TextRange;
getLineBoundary(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream21.TextRange;
computeLineMetrics(): DartList<upstream22.LineMetrics>;
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
get inlinePlaceholderBoxes(): DartList<upstream8.TextBox> | null;
get preferredLineHeight(): number;
get minIntrinsicWidth(): number;
get maxIntrinsicWidth(): number;
get width(): number;
get height(): number;
get size(): upstream9.Size;
get didExceedMaxLines(): boolean;
get debugPaintTextLayoutBoxes(): boolean;
get wordBoundaries(): upstream10.WordBoundary;
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
set debugPaintTextLayoutBoxes(value: boolean);
}
export abstract class TextPainter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextPainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextPainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:TextPainter", readonly [], false];
constructor(options?: {text?: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textAlign?: upstream1.TextAlign | undefined; textDirection?: upstream2.TextDirection | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; maxLines?: number | null | undefined; ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined}) { super(_TextPainterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextPainter.prototype, _TextPainterProxy);
export namespace TextPainter { export function implement(args: [options?: {text?: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textAlign?: upstream1.TextAlign | undefined; textDirection?: upstream2.TextDirection | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; maxLines?: number | null | undefined; ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined}], implementation: {}): TextPainter {
return constructProxy(_TextPainterProxy, args, implementation) as TextPainter; } }
export namespace TextPainter { export function computeWidth(options: { ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; maxLines?: number | null | undefined; maxWidth?: number | undefined; minWidth?: number | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; text: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textAlign?: upstream1.TextAlign | undefined; textDirection: upstream2.TextDirection; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined }): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["ellipsis","locale","maxLines","maxWidth","minWidth","strutStyle","text","textAlign","textDirection","textHeightBehavior","textScaleFactor","textScaler","textWidthBasis"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:TextPainter.computeWidth", [options.ellipsis, options.locale, options.maxLines, options.maxWidth, options.minWidth, options.strutStyle, options.text, options.textAlign, options.textDirection, options.textHeightBehavior, options.textScaleFactor, options.textScaler, options.textWidthBasis]);
return _flaxResult as number;
} }
export namespace TextPainter { export function computeMaxIntrinsicWidth(options: { ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; maxLines?: number | null | undefined; maxWidth?: number | undefined; minWidth?: number | undefined; strutStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; text: Readonly<{ "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; textAlign?: upstream1.TextAlign | undefined; textDirection: upstream2.TextDirection; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; textScaleFactor?: number | undefined; textScaler?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [] }> | undefined; textWidthBasis?: upstream6.TextWidthBasis | undefined }): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["ellipsis","locale","maxLines","maxWidth","minWidth","strutStyle","text","textAlign","textDirection","textHeightBehavior","textScaleFactor","textScaler","textWidthBasis"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:TextPainter.computeMaxIntrinsicWidth", [options.ellipsis, options.locale, options.maxLines, options.maxWidth, options.minWidth, options.strutStyle, options.text, options.textAlign, options.textDirection, options.textHeightBehavior, options.textScaleFactor, options.textScaler, options.textWidthBasis]);
return _flaxResult as number;
} }
export namespace TextPainter { export function isHighSurrogate(value: number): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:TextPainter.isHighSurrogate", [value]);
return _flaxResult as boolean;
} }
export namespace TextPainter { export function isLowSurrogate(value: number): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:TextPainter.isLowSurrogate", [value]);
return _flaxResult as boolean;
} }
_flaxBindInstanceType<TextPainter, typeof TextPainter>(TextPainter, "flax.core/sdk_painting#type:TextPainter", ["dart:core::Object"]);
