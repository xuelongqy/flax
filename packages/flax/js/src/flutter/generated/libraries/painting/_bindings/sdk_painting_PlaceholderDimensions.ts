// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlaceholderAlignment';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import { _flaxMemberParameters2, _flaxMemberParameters112 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PlaceholderDimensions extends Readonly<{ "__flaxBound:package:flutter/src/painting/text_painter.dart::PlaceholderDimensions": readonly [] }> { readonly __PlaceholderDimensions: unique symbol;
readonly [_flaxDartTypeValue]: PlaceholderDimensions;

readonly size: upstream0.Size;
readonly alignment: upstream1.PlaceholderAlignment;
readonly baselineOffset: number | null;
readonly baseline: upstream2.TextBaseline | null;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:PlaceholderDimensions", ["size","alignment","baselineOffset","baseline"], [], _flaxBindingMethods("flax.core/sdk_painting#type:PlaceholderDimensions", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _PlaceholderDimensionsFactory(options: { size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; alignment: upstream1.PlaceholderAlignment; baseline?: upstream2.TextBaseline | null | undefined; baselineOffset?: number | null | undefined }): PlaceholderDimensions {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:PlaceholderDimensions", "", [{"name":"size","required":true},{"name":"alignment","required":true},{"name":"baseline"},{"name":"baselineOffset"}], [], options) as PlaceholderDimensions;
}
const _PlaceholderDimensionsProxy = {type: "flax.core/sdk_painting#type:PlaceholderDimensions", parameters: _flaxMemberParameters112, constructors: {"": _flaxMemberParameters112}, methods: {"toString":_flaxMemberParameters2}, getters: ["size","alignment","baselineOffset","baseline"], setters: [], contextMembers: [], superMembers: ["get:size","get:alignment","get:baselineOffset","get:baseline","toString"]} as const;
export interface _PlaceholderDimensionsNative extends PlaceholderDimensions {
readonly [_flaxDartTypeValue]: _PlaceholderDimensionsNative;

toString(): string;
get size(): upstream0.Size;
get alignment(): upstream1.PlaceholderAlignment;
get baselineOffset(): number | null;
get baseline(): upstream2.TextBaseline | null;
}
export abstract class _PlaceholderDimensionsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PlaceholderDimensions>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PlaceholderDimensions;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:PlaceholderDimensions", readonly [], false];
constructor(options: {size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; alignment: upstream1.PlaceholderAlignment; baseline?: upstream2.TextBaseline | null | undefined; baselineOffset?: number | null | undefined}) { super(_PlaceholderDimensionsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PlaceholderDimensionsNative.prototype, _PlaceholderDimensionsProxy);
export namespace _PlaceholderDimensionsFactory { export function implement(args: [options: {size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; alignment: upstream1.PlaceholderAlignment; baseline?: upstream2.TextBaseline | null | undefined; baselineOffset?: number | null | undefined}], implementation: {}): PlaceholderDimensions {
return constructProxy(_PlaceholderDimensionsProxy, args, implementation) as PlaceholderDimensions; } }
const _PlaceholderDimensionsBinding = _flaxProxyFactory(_PlaceholderDimensionsFactory, _PlaceholderDimensionsNative) as unknown as typeof _PlaceholderDimensionsFactory & (new(options: {size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; alignment: upstream1.PlaceholderAlignment; baseline?: upstream2.TextBaseline | null | undefined; baselineOffset?: number | null | undefined}) => _PlaceholderDimensionsNative);
export namespace _PlaceholderDimensionsFactory { export declare const empty: PlaceholderDimensions; }
_flaxDefineStaticGetters(_PlaceholderDimensionsFactory, "flax.core/sdk_painting#read:PlaceholderDimensions.", ["empty"]);
export const PlaceholderDimensions: typeof _PlaceholderDimensionsBinding & _FlaxInstanceType<PlaceholderDimensions> & _FlaxDartType<PlaceholderDimensions, readonly ["class", "flax.core/sdk_painting#type:PlaceholderDimensions", readonly [], false]> = _flaxBindInstanceType<PlaceholderDimensions, typeof _PlaceholderDimensionsBinding>(_PlaceholderDimensionsBinding, "flax.core/sdk_painting#type:PlaceholderDimensions", ["dart:core::Object"]) as typeof _PlaceholderDimensionsBinding & _FlaxInstanceType<PlaceholderDimensions> & _FlaxDartType<PlaceholderDimensions, readonly ["class", "flax.core/sdk_painting#type:PlaceholderDimensions", readonly [], false]>;
