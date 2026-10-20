// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphConstraints';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphConstraints';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextBox';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextBox';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxHeightStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BoxWidthStyle';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_GlyphInfo';
import '@flax/dart/ui/_bindings/sdk_dart_ui_GlyphInfo';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_LineMetrics';
import '@flax/dart/ui/_bindings/sdk_dart_ui_LineMetrics';
import { _flaxMemberParameters72, _flaxMemberParameters73, _flaxMemberParameters0, _flaxMemberParameters74, _flaxMemberParameters75, _flaxMemberParameters76, _flaxMemberParameters77 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Paragraph extends Readonly<{ "__flaxBound:dart:ui::Paragraph": readonly [] }> { readonly __Paragraph: unique symbol;
readonly [_flaxDartTypeValue]: Paragraph;

readonly width: number;
readonly height: number;
readonly longestLine: number;
readonly minIntrinsicWidth: number;
readonly maxIntrinsicWidth: number;
readonly alphabeticBaseline: number;
readonly ideographicBaseline: number;
readonly didExceedMaxLines: boolean;
readonly numberOfLines: number;
readonly debugDisposed: boolean;
layout(constraints: Readonly<{ "__flaxBound:dart:ui::ParagraphConstraints": readonly [] }>): void;
getBoxesForRange(start: number, end: number, options?: {boxHeightStyle?: upstream2.BoxHeightStyle | undefined; boxWidthStyle?: upstream3.BoxWidthStyle | undefined}): DartList<upstream1.TextBox>;
getBoxesForPlaceholders(): DartList<upstream1.TextBox>;
getPositionForOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream4.TextPosition;
getClosestGlyphInfoForOffset(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream6.GlyphInfo | null;
getGlyphInfoAt(codeUnitOffset: number): upstream6.GlyphInfo | null;
getWordBoundary(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream7.TextRange;
getLineBoundary(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream7.TextRange;
computeLineMetrics(): DartList<upstream8.LineMetrics>;
getLineMetricsAt(lineNumber: number): upstream8.LineMetrics | null;
getLineNumberAt(codeUnitOffset: number): number | null;
dispose(): void;
}
defineObject("flax.core/sdk_dart_ui#type:Paragraph", ["width","height","longestLine","minIntrinsicWidth","maxIntrinsicWidth","alphabeticBaseline","ideographicBaseline","didExceedMaxLines","numberOfLines","debugDisposed"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Paragraph", "object", {"layout":_flaxMemberParameters72,"getBoxesForRange":_flaxMemberParameters73,"getBoxesForPlaceholders":_flaxMemberParameters0,"getPositionForOffset":_flaxMemberParameters74,"getClosestGlyphInfoForOffset":_flaxMemberParameters74,"getGlyphInfoAt":_flaxMemberParameters75,"getWordBoundary":_flaxMemberParameters76,"getLineBoundary":_flaxMemberParameters76,"computeLineMetrics":_flaxMemberParameters0,"getLineMetricsAt":_flaxMemberParameters77,"getLineNumberAt":_flaxMemberParameters75,"dispose":_flaxMemberParameters0}, {}), []);
const _ParagraphProxy = {type: "flax.core/sdk_dart_ui#type:Paragraph", parameters: _flaxMemberParameters0, constructors: {}, methods: {"layout":_flaxMemberParameters72,"getBoxesForRange":_flaxMemberParameters73,"getBoxesForPlaceholders":_flaxMemberParameters0,"getPositionForOffset":_flaxMemberParameters74,"getClosestGlyphInfoForOffset":_flaxMemberParameters74,"getGlyphInfoAt":_flaxMemberParameters75,"getWordBoundary":_flaxMemberParameters76,"getLineBoundary":_flaxMemberParameters76,"computeLineMetrics":_flaxMemberParameters0,"getLineMetricsAt":_flaxMemberParameters77,"getLineNumberAt":_flaxMemberParameters75,"dispose":_flaxMemberParameters0}, getters: ["width","height","longestLine","minIntrinsicWidth","maxIntrinsicWidth","alphabeticBaseline","ideographicBaseline","didExceedMaxLines","numberOfLines","debugDisposed"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ParagraphFactory { export function implement(args: [], implementation: {layout: ((constraints: upstream0.ParagraphConstraints) => void); getBoxesForRange: ((start: number, end: number, options?: { boxHeightStyle?: upstream2.BoxHeightStyle | undefined; boxWidthStyle?: upstream3.BoxWidthStyle | undefined }) => DartListInput<upstream1.TextBox, Readonly<{ "__flaxBound:dart:ui::TextBox": readonly [] }>>); getBoxesForPlaceholders: (() => DartListInput<upstream1.TextBox, Readonly<{ "__flaxBound:dart:ui::TextBox": readonly [] }>>); getPositionForOffset: ((offset: upstream5.Offset) => Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>); getClosestGlyphInfoForOffset: ((offset: upstream5.Offset) => Readonly<{ "__flaxBound:dart:ui::GlyphInfo": readonly [] }> | null); getGlyphInfoAt: ((codeUnitOffset: number) => Readonly<{ "__flaxBound:dart:ui::GlyphInfo": readonly [] }> | null); getWordBoundary: ((position: upstream4.TextPosition) => Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>); getLineBoundary: ((position: upstream4.TextPosition) => Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>); computeLineMetrics: (() => DartListInput<upstream8.LineMetrics, Readonly<{ "__flaxBound:dart:ui::LineMetrics": readonly [] }>>); getLineMetricsAt: ((lineNumber: number) => Readonly<{ "__flaxBound:dart:ui::LineMetrics": readonly [] }> | null); getLineNumberAt: ((codeUnitOffset: number) => number | null); dispose: (() => void); get width(): number; get height(): number; get longestLine(): number; get minIntrinsicWidth(): number; get maxIntrinsicWidth(): number; get alphabeticBaseline(): number; get ideographicBaseline(): number; get didExceedMaxLines(): boolean; get numberOfLines(): number; get debugDisposed(): boolean}): Paragraph {
return constructProxy(_ParagraphProxy, args, implementation) as Paragraph; } }
export const Paragraph: typeof _ParagraphFactory & _FlaxInstanceType<Paragraph> & _FlaxDartType<Paragraph, readonly ["class", "flax.core/sdk_dart_ui#type:Paragraph", readonly [], false]> = _flaxBindInstanceType<Paragraph, typeof _ParagraphFactory>(_ParagraphFactory, "flax.core/sdk_dart_ui#type:Paragraph", ["dart:core::Object"]) as typeof _ParagraphFactory & _FlaxInstanceType<Paragraph> & _FlaxDartType<Paragraph, readonly ["class", "flax.core/sdk_dart_ui#type:Paragraph", readonly [], false]>;
