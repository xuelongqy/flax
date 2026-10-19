// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ParagraphStyle';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextStyle';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Paragraph';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Paragraph';
import { _flaxMemberParameters75, _flaxMemberParameters0, _flaxMemberParameters76, _flaxMemberParameters77, _flaxMemberParameters78 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ParagraphBuilder extends Readonly<{ "__flaxBound:dart:ui::ParagraphBuilder": readonly [] }> { readonly __ParagraphBuilder: unique symbol;
readonly [_flaxDartTypeValue]: ParagraphBuilder;

readonly placeholderCount: number;
readonly placeholderScales: DartList<number>;
pushStyle(style: Readonly<{ "__flaxBound:dart:ui::TextStyle": readonly [] }>): void;
pop(): void;
addText(text: string): void;
addPlaceholder(width: number, height: number, alignment: upstream2.PlaceholderAlignment, options?: {baseline?: upstream3.TextBaseline | null | undefined; baselineOffset?: number | null | undefined; scale?: number | undefined}): void;
build(): upstream4.Paragraph;
}
defineObject("flax.core/sdk_dart_ui#type:ParagraphBuilder", ["placeholderCount","placeholderScales"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ParagraphBuilder", "object", {"pushStyle":_flaxMemberParameters75,"pop":_flaxMemberParameters0,"addText":_flaxMemberParameters76,"addPlaceholder":_flaxMemberParameters77,"build":_flaxMemberParameters0}, {}), []);
export function _ParagraphBuilderFactory(style: Readonly<{ "__flaxBound:dart:ui::ParagraphStyle": readonly [] }>): ParagraphBuilder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ParagraphBuilder", "", _flaxMemberParameters75, [style], {}) as ParagraphBuilder;
}
const _ParagraphBuilderProxy = {type: "flax.core/sdk_dart_ui#type:ParagraphBuilder", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters75}, methods: {"pushStyle":_flaxMemberParameters75,"pop":_flaxMemberParameters0,"addText":_flaxMemberParameters76,"addPlaceholder":_flaxMemberParameters78,"build":_flaxMemberParameters0}, getters: ["placeholderCount","placeholderScales"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ParagraphBuilderFactory { export function implement(args: [], implementation: {pushStyle: ((style: upstream1.TextStyle) => void); pop: (() => void); addText: ((text: string) => void); addPlaceholder: ((width: number, height: number, alignment: upstream2.PlaceholderAlignment, options?: { scale?: number | undefined; baselineOffset?: number | null | undefined; baseline?: upstream3.TextBaseline | null | undefined }) => void); build: (() => Readonly<{ "__flaxBound:dart:ui::Paragraph": readonly [] }>); get placeholderCount(): number; get placeholderScales(): DartListInput<number, number>}): ParagraphBuilder {
return constructProxy(_ParagraphBuilderProxy, args, implementation) as ParagraphBuilder; } }
export const ParagraphBuilder: typeof _ParagraphBuilderFactory & _FlaxInstanceType<ParagraphBuilder> & _FlaxDartType<ParagraphBuilder, readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphBuilder", readonly [], false]> = _flaxBindInstanceType<ParagraphBuilder, typeof _ParagraphBuilderFactory>(_ParagraphBuilderFactory, "flax.core/sdk_dart_ui#type:ParagraphBuilder", ["dart:core::Object"]) as typeof _ParagraphBuilderFactory & _FlaxInstanceType<ParagraphBuilder> & _FlaxDartType<ParagraphBuilder, readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphBuilder", readonly [], false]>;
