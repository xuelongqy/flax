// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_StrutStyle';
import '@flax/dart/ui/_bindings/sdk_dart_ui_StrutStyle';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ParagraphStyle extends Readonly<{ "__flaxBound:dart:ui::ParagraphStyle": readonly [] }> { readonly __ParagraphStyle: unique symbol;
readonly [_flaxDartTypeValue]: ParagraphStyle;

}
defineObject("flax.core/sdk_dart_ui#type:ParagraphStyle", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ParagraphStyle", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _ParagraphStyleProxy = {type: "flax.core/sdk_dart_ui#type:ParagraphStyle", parameters: [{"name":"textAlign","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"maxLines","required":false,"positional":false},{"name":"fontFamily","required":false,"positional":false},{"name":"fontSize","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"textHeightBehavior","required":false,"positional":false},{"name":"fontWeight","required":false,"positional":false},{"name":"fontStyle","required":false,"positional":false},{"name":"strutStyle","required":false,"positional":false},{"name":"ellipsis","required":false,"positional":false},{"name":"locale","required":false,"positional":false}], constructors: {"":[{"name":"textAlign","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"maxLines","required":false,"positional":false},{"name":"fontFamily","required":false,"positional":false},{"name":"fontSize","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"textHeightBehavior","required":false,"positional":false},{"name":"fontWeight","required":false,"positional":false},{"name":"fontStyle","required":false,"positional":false},{"name":"strutStyle","required":false,"positional":false},{"name":"ellipsis","required":false,"positional":false},{"name":"locale","required":false,"positional":false}]}, methods: {"toString":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["toString"]} as const;
export interface ParagraphStyle {
readonly [_flaxDartTypeValue]: ParagraphStyle;

toString(): string;
}
export abstract class ParagraphStyle extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ParagraphStyle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ParagraphStyle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ParagraphStyle", readonly [], false];
constructor(options?: {textAlign?: upstream0.TextAlign | null | undefined; textDirection?: upstream1.TextDirection | null | undefined; maxLines?: number | null | undefined; fontFamily?: string | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream4.FontStyle | null | undefined; strutStyle?: Readonly<{ "__flaxBound:dart:ui::StrutStyle": readonly [] }> | null | undefined; ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined}) { super(_ParagraphStyleProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ParagraphStyle.prototype, _ParagraphStyleProxy);
export namespace ParagraphStyle { export function implement(args: [options?: {textAlign?: upstream0.TextAlign | null | undefined; textDirection?: upstream1.TextDirection | null | undefined; maxLines?: number | null | undefined; fontFamily?: string | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; textHeightBehavior?: Readonly<{ "__flaxBound:dart:ui::TextHeightBehavior": readonly [] }> | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream4.FontStyle | null | undefined; strutStyle?: Readonly<{ "__flaxBound:dart:ui::StrutStyle": readonly [] }> | null | undefined; ellipsis?: string | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined}], implementation: {}): ParagraphStyle {
return constructProxy(_ParagraphStyleProxy, args, implementation) as ParagraphStyle; } }
_flaxBindInstanceType<ParagraphStyle, typeof ParagraphStyle>(ParagraphStyle, "flax.core/sdk_dart_ui#type:ParagraphStyle", ["dart:core::Object"]);
