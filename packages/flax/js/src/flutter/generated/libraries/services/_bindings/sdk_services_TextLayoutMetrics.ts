// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { _flaxMemberParameters25, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextLayoutMetrics extends Readonly<{ "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [] }> { readonly __TextLayoutMetrics: unique symbol;
readonly [_flaxDartTypeValue]: TextLayoutMetrics;

getLineAtOffset(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream0.TextSelection;
getWordBoundary(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream2.TextRange;
getTextPositionAbove(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream1.TextPosition;
getTextPositionBelow(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): upstream1.TextPosition;
}
defineObject("flax.core/sdk_services#type:TextLayoutMetrics", [], [], _flaxBindingMethods("flax.core/sdk_services#type:TextLayoutMetrics", "object", {"getLineAtOffset":_flaxMemberParameters25,"getWordBoundary":_flaxMemberParameters25,"getTextPositionAbove":_flaxMemberParameters25,"getTextPositionBelow":_flaxMemberParameters25}, {}), []);
const _TextLayoutMetricsProxy = {type: "flax.core/sdk_services#type:TextLayoutMetrics", parameters: _flaxMemberParameters0, constructors: {}, methods: {"getLineAtOffset":_flaxMemberParameters25,"getWordBoundary":_flaxMemberParameters25,"getTextPositionAbove":_flaxMemberParameters25,"getTextPositionBelow":_flaxMemberParameters25}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _TextLayoutMetricsFactory { export function implement(args: [], implementation: {getLineAtOffset: ((position: upstream1.TextPosition) => Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>); getWordBoundary: ((position: upstream1.TextPosition) => Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>); getTextPositionAbove: ((position: upstream1.TextPosition) => Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>); getTextPositionBelow: ((position: upstream1.TextPosition) => Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>)}): TextLayoutMetrics {
return constructProxy(_TextLayoutMetricsProxy, args, implementation) as TextLayoutMetrics; } }
export namespace _TextLayoutMetricsFactory { export function isWhitespace(codeUnit: number): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextLayoutMetrics.isWhitespace", [codeUnit]);
return _flaxResult as boolean;
} }
export namespace _TextLayoutMetricsFactory { export function isLineTerminator(codeUnit: number): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:TextLayoutMetrics.isLineTerminator", [codeUnit]);
return _flaxResult as boolean;
} }
export const TextLayoutMetrics: typeof _TextLayoutMetricsFactory & _FlaxInstanceType<TextLayoutMetrics> & _FlaxDartType<TextLayoutMetrics, readonly ["class", "flax.core/sdk_services#type:TextLayoutMetrics", readonly [], false]> = _flaxBindInstanceType<TextLayoutMetrics, typeof _TextLayoutMetricsFactory>(_TextLayoutMetricsFactory, "flax.core/sdk_services#type:TextLayoutMetrics", ["dart:core::Object"]) as typeof _TextLayoutMetricsFactory & _FlaxInstanceType<TextLayoutMetrics> & _FlaxDartType<TextLayoutMetrics, readonly ["class", "flax.core/sdk_services#type:TextLayoutMetrics", readonly [], false]>;
