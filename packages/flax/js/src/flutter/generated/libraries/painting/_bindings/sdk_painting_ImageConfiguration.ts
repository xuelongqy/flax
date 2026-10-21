// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import { _flaxMemberParameters73, _flaxMemberParameters2, _flaxMemberParameters74 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }> { readonly __ImageConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: ImageConfiguration;

readonly bundle: upstream0.AssetBundle | null;
readonly devicePixelRatio: number | null;
readonly locale: upstream1.Locale | null;
readonly textDirection: upstream2.TextDirection | null;
readonly size: upstream3.Size | null;
readonly platform: upstream4.TargetPlatform | null;
copyWith(options?: {bundle?: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> | null | undefined; devicePixelRatio?: number | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; platform?: upstream4.TargetPlatform | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; textDirection?: upstream2.TextDirection | null | undefined}): ImageConfiguration;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:ImageConfiguration", ["bundle","devicePixelRatio","locale","textDirection","size","platform"], [], _flaxBindingMethods("flax.core/sdk_painting#type:ImageConfiguration", "object", {"copyWith":_flaxMemberParameters73,"toString":_flaxMemberParameters2}, {}), []);
export function _ImageConfigurationFactory(options: { bundle?: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> | null | undefined; devicePixelRatio?: number | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; textDirection?: upstream2.TextDirection | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; platform?: upstream4.TargetPlatform | null | undefined } = {}): ImageConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:ImageConfiguration", "", [{"name":"bundle"},{"name":"devicePixelRatio"},{"name":"locale"},{"name":"textDirection"},{"name":"size"},{"name":"platform"}], [], options) as ImageConfiguration;
}
const _ImageConfigurationProxy = {type: "flax.core/sdk_painting#type:ImageConfiguration", parameters: _flaxMemberParameters74, constructors: {"": _flaxMemberParameters74}, methods: {"copyWith":_flaxMemberParameters73,"toString":_flaxMemberParameters2}, getters: ["bundle","devicePixelRatio","locale","textDirection","size","platform"], setters: [], contextMembers: [], superMembers: ["get:bundle","get:devicePixelRatio","get:locale","get:textDirection","get:size","get:platform","copyWith","toString"]} as const;
export interface _ImageConfigurationNative extends ImageConfiguration {
readonly [_flaxDartTypeValue]: _ImageConfigurationNative;

copyWith(options?: {bundle?: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> | null | undefined; devicePixelRatio?: number | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; textDirection?: upstream2.TextDirection | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; platform?: upstream4.TargetPlatform | null | undefined}): ImageConfiguration;
toString(): string;
get bundle(): upstream0.AssetBundle | null;
get devicePixelRatio(): number | null;
get locale(): upstream1.Locale | null;
get textDirection(): upstream2.TextDirection | null;
get size(): upstream3.Size | null;
get platform(): upstream4.TargetPlatform | null;
}
export abstract class _ImageConfigurationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:ImageConfiguration", readonly [], false];
constructor(options?: {bundle?: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> | null | undefined; devicePixelRatio?: number | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; textDirection?: upstream2.TextDirection | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; platform?: upstream4.TargetPlatform | null | undefined}) { super(_ImageConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ImageConfigurationNative.prototype, _ImageConfigurationProxy);
export namespace _ImageConfigurationFactory { export function implement(args: [options?: {bundle?: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> | null | undefined; devicePixelRatio?: number | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; textDirection?: upstream2.TextDirection | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; platform?: upstream4.TargetPlatform | null | undefined}], implementation: {}): ImageConfiguration {
return constructProxy(_ImageConfigurationProxy, args, implementation) as ImageConfiguration; } }
const _ImageConfigurationBinding = _flaxProxyFactory(_ImageConfigurationFactory, _ImageConfigurationNative) as unknown as typeof _ImageConfigurationFactory & (new(options?: {bundle?: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> | null | undefined; devicePixelRatio?: number | null | undefined; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; textDirection?: upstream2.TextDirection | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; platform?: upstream4.TargetPlatform | null | undefined}) => _ImageConfigurationNative);
export namespace _ImageConfigurationFactory { export declare const empty: ImageConfiguration; }
_flaxDefineStaticGetters(_ImageConfigurationFactory, "flax.core/sdk_painting#read:ImageConfiguration.", ["empty"]);
export const ImageConfiguration: typeof _ImageConfigurationBinding & _FlaxInstanceType<ImageConfiguration> & _FlaxDartType<ImageConfiguration, readonly ["class", "flax.core/sdk_painting#type:ImageConfiguration", readonly [], false]> = _flaxBindInstanceType<ImageConfiguration, typeof _ImageConfigurationBinding>(_ImageConfigurationBinding, "flax.core/sdk_painting#type:ImageConfiguration", ["dart:core::Object"]) as typeof _ImageConfigurationBinding & _FlaxInstanceType<ImageConfiguration> & _FlaxDartType<ImageConfiguration, readonly ["class", "flax.core/sdk_painting#type:ImageConfiguration", readonly [], false]>;
