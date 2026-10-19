// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"size","required":true},{"name":"alignment","required":true},{"name":"baseline"},{"name":"baselineOffset"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlaceholderDimensions extends Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [] }> { readonly __PlaceholderDimensions: unique symbol;
readonly [_flaxDartTypeValue]: PlaceholderDimensions;

}
defineObject("flax.core/sdk_painting#type:PlaceholderDimensions", ["size","alignment","baselineOffset","baseline"], [], _flaxBindingMethods("flax.core/sdk_painting#type:PlaceholderDimensions", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _PlaceholderDimensionsProxy = {type: "flax.core/sdk_painting#type:PlaceholderDimensions", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["size","alignment","baselineOffset","baseline"], setters: [], contextMembers: [], superMembers: ["get:size","get:alignment","get:baselineOffset","get:baseline","toString"]} as const;
export interface PlaceholderDimensions {
readonly [_flaxDartTypeValue]: PlaceholderDimensions;

toString(): string;
get size(): upstream0.Size;
get alignment(): upstream1.PlaceholderAlignment;
get baselineOffset(): number | null;
get baseline(): upstream2.TextBaseline | null;
}
export abstract class PlaceholderDimensions extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlaceholderDimensions>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlaceholderDimensions;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:PlaceholderDimensions", readonly [], false];
constructor(options: {size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; alignment: upstream1.PlaceholderAlignment; baseline?: upstream2.TextBaseline | null | undefined; baselineOffset?: number | null | undefined}) { super(_PlaceholderDimensionsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PlaceholderDimensions.prototype, _PlaceholderDimensionsProxy);
export namespace PlaceholderDimensions { export function implement(args: [options: {size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; alignment: upstream1.PlaceholderAlignment; baseline?: upstream2.TextBaseline | null | undefined; baselineOffset?: number | null | undefined}], implementation: {}): PlaceholderDimensions {
return constructProxy(_PlaceholderDimensionsProxy, args, implementation) as PlaceholderDimensions; } }
export namespace PlaceholderDimensions { export declare const empty: PlaceholderDimensions; }
_flaxDefineStaticGetters(PlaceholderDimensions, "flax.core/sdk_painting#read:PlaceholderDimensions.", ["empty"]);
_flaxBindInstanceType<PlaceholderDimensions, typeof PlaceholderDimensions>(PlaceholderDimensions, "flax.core/sdk_painting#type:PlaceholderDimensions", ["dart:core::Object"]);
