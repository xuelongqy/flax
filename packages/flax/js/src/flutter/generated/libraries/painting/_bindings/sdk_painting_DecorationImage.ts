// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BoxFit';
import '@flax/flutter/painting/_bindings/flutter_BoxFit';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_DecorationImagePainter';
import '@flax/flutter/painting/_bindings/sdk_painting_DecorationImagePainter';
import { _flaxMemberParameters24, _flaxMemberParameters48, _flaxMemberParameters2, _flaxMemberParameters49 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DecorationImage extends Readonly<{ "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [] }> { readonly __DecorationImage: unique symbol;
readonly [_flaxDartTypeValue]: DecorationImage;

readonly image: upstream0.ImageProvider<any>;
readonly onError: ((exception: {}, stackTrace: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null) => void) | null;
readonly colorFilter: upstream2.ColorFilter | null;
readonly fit: upstream3.BoxFit | null;
readonly alignment: upstream4.AlignmentGeometry;
readonly centerSlice: upstream5.Rect | null;
readonly repeat: upstream6.ImageRepeat;
readonly matchTextDirection: boolean;
readonly scale: number;
readonly opacity: number;
readonly filterQuality: upstream7.FilterQuality;
readonly invertColors: boolean;
readonly isAntiAlias: boolean;
createPainter(onChanged: (() => void)): upstream8.DecorationImagePainter;
toString(): string;
}
defineObject("flax.core/sdk_painting#type:DecorationImage", ["image","onError","colorFilter","fit","alignment","centerSlice","repeat","matchTextDirection","scale","opacity","filterQuality","invertColors","isAntiAlias"], [], _flaxBindingMethods("flax.core/sdk_painting#type:DecorationImage", "object", {"createPainter":_flaxMemberParameters48,"toString":_flaxMemberParameters2}, {}), []);
export function _DecorationImageFactory(options: { image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>; onError?: ((exception: {}, stackTrace: upstream1.StackTrace | null) => void) | null | undefined; colorFilter?: Readonly<{ "__flaxBound:dart:ui::ColorFilter": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null | undefined; fit?: upstream3.BoxFit | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; centerSlice?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; repeat?: upstream6.ImageRepeat | undefined; matchTextDirection?: boolean | undefined; scale?: number | undefined; opacity?: number | undefined; filterQuality?: upstream7.FilterQuality | undefined; invertColors?: boolean | undefined; isAntiAlias?: boolean | undefined }): DecorationImage {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:DecorationImage", "", [{"name":"image","required":true},{"name":"onError"},{"name":"colorFilter"},{"name":"fit"},{"name":"alignment"},{"name":"centerSlice"},{"name":"repeat"},{"name":"matchTextDirection"},{"name":"scale"},{"name":"opacity"},{"name":"filterQuality"},{"name":"invertColors"},{"name":"isAntiAlias"}], [], options) as DecorationImage;
}
const _DecorationImageProxy = {type: "flax.core/sdk_painting#type:DecorationImage", parameters: _flaxMemberParameters49, constructors: {"": _flaxMemberParameters49}, methods: {"createPainter":_flaxMemberParameters48,"toString":_flaxMemberParameters2}, getters: ["image","onError","colorFilter","fit","alignment","centerSlice","repeat","matchTextDirection","scale","opacity","filterQuality","invertColors","isAntiAlias"], setters: [], contextMembers: [], superMembers: ["get:image","get:onError","get:colorFilter","get:fit","get:alignment","get:centerSlice","get:repeat","get:matchTextDirection","get:scale","get:opacity","get:filterQuality","get:invertColors","get:isAntiAlias","createPainter","toString"]} as const;
export interface _DecorationImageNative extends DecorationImage {
readonly [_flaxDartTypeValue]: _DecorationImageNative;

createPainter(onChanged: (() => void)): upstream8.DecorationImagePainter;
toString(): string;
get image(): upstream0.ImageProvider<any>;
get onError(): ((exception: {}, stackTrace: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null) => void) | null;
get colorFilter(): upstream2.ColorFilter | null;
get fit(): upstream3.BoxFit | null;
get alignment(): upstream4.AlignmentGeometry;
get centerSlice(): upstream5.Rect | null;
get repeat(): upstream6.ImageRepeat;
get matchTextDirection(): boolean;
get scale(): number;
get opacity(): number;
get filterQuality(): upstream7.FilterQuality;
get invertColors(): boolean;
get isAntiAlias(): boolean;
}
export abstract class _DecorationImageNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DecorationImage>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DecorationImage;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:DecorationImage", readonly [], false];
constructor(options: {image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>; onError?: ((exception: {}, stackTrace: upstream1.StackTrace | null) => void) | null | undefined; colorFilter?: Readonly<{ "__flaxBound:dart:ui::ColorFilter": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null | undefined; fit?: upstream3.BoxFit | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; centerSlice?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; repeat?: upstream6.ImageRepeat | undefined; matchTextDirection?: boolean | undefined; scale?: number | undefined; opacity?: number | undefined; filterQuality?: upstream7.FilterQuality | undefined; invertColors?: boolean | undefined; isAntiAlias?: boolean | undefined}) { super(_DecorationImageProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DecorationImageNative.prototype, _DecorationImageProxy);
export namespace _DecorationImageFactory { export function implement(args: [options: {image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>; onError?: ((exception: {}, stackTrace: upstream1.StackTrace | null) => void) | null | undefined; colorFilter?: Readonly<{ "__flaxBound:dart:ui::ColorFilter": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null | undefined; fit?: upstream3.BoxFit | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; centerSlice?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; repeat?: upstream6.ImageRepeat | undefined; matchTextDirection?: boolean | undefined; scale?: number | undefined; opacity?: number | undefined; filterQuality?: upstream7.FilterQuality | undefined; invertColors?: boolean | undefined; isAntiAlias?: boolean | undefined}], implementation: {}): DecorationImage {
return constructProxy(_DecorationImageProxy, args, implementation) as DecorationImage; } }
const _DecorationImageBinding = _flaxProxyFactory(_DecorationImageFactory, _DecorationImageNative) as unknown as typeof _DecorationImageFactory & (new(options: {image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>; onError?: ((exception: {}, stackTrace: upstream1.StackTrace | null) => void) | null | undefined; colorFilter?: Readonly<{ "__flaxBound:dart:ui::ColorFilter": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null | undefined; fit?: upstream3.BoxFit | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; centerSlice?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; repeat?: upstream6.ImageRepeat | undefined; matchTextDirection?: boolean | undefined; scale?: number | undefined; opacity?: number | undefined; filterQuality?: upstream7.FilterQuality | undefined; invertColors?: boolean | undefined; isAntiAlias?: boolean | undefined}) => _DecorationImageNative);
export namespace _DecorationImageFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration_image.dart::DecorationImage": readonly [] }> | null, t: number): DecorationImage | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_painting#function:DecorationImage.lerp", [a, b, t], _flaxMemberParameters24);
return _flaxResult as DecorationImage | null;
} }
export const DecorationImage: typeof _DecorationImageBinding & _FlaxInstanceType<DecorationImage> & _FlaxDartType<DecorationImage, readonly ["class", "flax.core/sdk_painting#type:DecorationImage", readonly [], false]> = _flaxBindInstanceType<DecorationImage, typeof _DecorationImageBinding>(_DecorationImageBinding, "flax.core/sdk_painting#type:DecorationImage", ["dart:core::Object"]) as typeof _DecorationImageBinding & _FlaxInstanceType<DecorationImage> & _FlaxDartType<DecorationImage, readonly ["class", "flax.core/sdk_painting#type:DecorationImage", readonly [], false]>;
