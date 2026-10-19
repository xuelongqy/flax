// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_DisposableBuildContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DisposableBuildContext';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStream';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageConfiguration';
import type * as upstream6 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCacheStatus';
import type * as upstream7 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageCache_cx';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageStreamCompleter';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Codec';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImmutableBuffer';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TargetImageSize';
import { _flaxMemberParameters280, _flaxMemberParameters351, _flaxMemberParameters352, _flaxMemberParameters353, _flaxMemberParameters354, _flaxMemberParameters2, _flaxMemberParameters355 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollAwareImageProvider<T extends {} = {}> extends Omit<upstream0.ImageProvider<T>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_aware_image_provider.dart::ScrollAwareImageProvider": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [T] }> { readonly __ScrollAwareImageProvider: unique symbol;
readonly [_flaxDartTypeValue]: ScrollAwareImageProvider<T>;

}
defineObject("flax.core/sdk_widgets#type:ScrollAwareImageProvider", ["context","imageProvider"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollAwareImageProvider", "object", {"resolve":_flaxMemberParameters280,"createStream":_flaxMemberParameters280,"obtainCacheStatus":_flaxMemberParameters351,"resolveStreamForKey":_flaxMemberParameters352,"evict":_flaxMemberParameters353,"obtainKey":_flaxMemberParameters280,"loadBuffer":_flaxMemberParameters354,"loadImage":_flaxMemberParameters354,"toString":_flaxMemberParameters2}, {}), []);
const _ScrollAwareImageProviderProxy = {type: "flax.core/sdk_widgets#type:ScrollAwareImageProvider", parameters: _flaxMemberParameters355, constructors: {"": _flaxMemberParameters355}, methods: {"createStream":_flaxMemberParameters280,"obtainCacheStatus":_flaxMemberParameters351,"resolveStreamForKey":_flaxMemberParameters352,"evict":_flaxMemberParameters353,"obtainKey":_flaxMemberParameters280,"loadBuffer":_flaxMemberParameters354,"loadImage":_flaxMemberParameters354,"toString":_flaxMemberParameters2}, getters: ["context","imageProvider"], setters: [], contextMembers: [], superMembers: ["get:context","get:imageProvider","createStream","obtainCacheStatus","resolveStreamForKey","evict","obtainKey","loadBuffer","loadImage","toString"]} as const;
export interface ScrollAwareImageProvider<T extends {} = {}> {
readonly [_flaxDartTypeValue]: ScrollAwareImageProvider<T>;
resolve(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream4.ImageStream;

createStream(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): upstream4.ImageStream;
obtainCacheStatus(options: {configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>; handleError?: ((exception: {}, stackTrace: upstream7.StackTrace | null) => void) | null | undefined}): Promise<upstream6.ImageCacheStatus | null>;
resolveStreamForKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>, stream: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageStream": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, key: (T | DartInput<T>), handleError: ((exception: {}, stackTrace: upstream7.StackTrace | null) => void)): void;
evict(options?: {cache?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_cache.dart::ImageCache": readonly [] }> | null | undefined; configuration?: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }> | undefined}): Promise<boolean>;
obtainKey(configuration: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageConfiguration": readonly [] }>): Promise<T>;
loadBuffer(key: (T | DartInput<T>), decode: ((buffer: upstream11.ImmutableBuffer, options?: { allowUpscaling?: boolean | undefined; cacheHeight?: number | null | undefined; cacheWidth?: number | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream9.ImageStreamCompleter;
loadImage(key: (T | DartInput<T>), decode: ((buffer: upstream11.ImmutableBuffer, options?: { getTargetSize?: ((intrinsicWidth: number, intrinsicHeight: number) => upstream12.TargetImageSize) | null | undefined }) => Promise<Readonly<{ "__flaxBound:dart:ui::Codec": readonly [] }>>)): upstream9.ImageStreamCompleter;
toString(): string;
get context(): upstream1.DisposableBuildContext<upstream2.State<upstream3.StatefulWidget>>;
get imageProvider(): upstream0.ImageProvider<T>;
}
export abstract class ScrollAwareImageProvider<T extends {} = {}> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollAwareImageProvider<{}>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScrollAwareImageProvider<{}>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollAwareImageProvider", readonly [readonly ["any", null, readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(options: {context: Readonly<{ "__flaxBound:package:flutter/src/widgets/disposable_build_context.dart::DisposableBuildContext": readonly [upstream2.State<upstream3.StatefulWidget>] }>; imageProvider: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>}) { super(_ScrollAwareImageProviderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScrollAwareImageProvider.prototype, _ScrollAwareImageProviderProxy);
export namespace ScrollAwareImageProvider { export function implement<T extends {} = {}>(args: [options: {context: Readonly<{ "__flaxBound:package:flutter/src/widgets/disposable_build_context.dart::DisposableBuildContext": readonly [upstream2.State<upstream3.StatefulWidget>] }>; imageProvider: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>}], implementation: {}): ScrollAwareImageProvider<T> {
return constructProxy(_ScrollAwareImageProviderProxy, args, implementation) as ScrollAwareImageProvider<T>; } }
_flaxBindInstanceType<ScrollAwareImageProvider<{}>, typeof ScrollAwareImageProvider>(ScrollAwareImageProvider, "flax.core/sdk_widgets#type:ScrollAwareImageProvider", ["flax.core/sdk_painting#type:ImageProvider","dart:core::Object"]);
_flaxDefineDartTypes(ScrollAwareImageProvider, "flax.core/sdk_widgets#type:ScrollAwareImageProvider", {...{"category":"object","constructors":{}}, proxy: _ScrollAwareImageProviderProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "context" | "imageProvider" | "resolve" | "createStream" | "obtainCacheStatus" | "resolveStreamForKey" | "evict" | "obtainKey" | "loadBuffer" | "loadImage" | "toString" | "__flaxBound:package:flutter/src/widgets/scroll_aware_image_provider.dart::ScrollAwareImageProvider" | "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (abstract new (options: {context: Readonly<{ "__flaxBound:package:flutter/src/widgets/disposable_build_context.dart::DisposableBuildContext": readonly [upstream2.State<upstream3.StatefulWidget>] }>;imageProvider: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>}) => ScrollAwareImageProvider<_Selected0>) & {readonly prototype: ScrollAwareImageProvider<_Selected0>;implement(args: readonly [options: {context: Readonly<{ "__flaxBound:package:flutter/src/widgets/disposable_build_context.dart::DisposableBuildContext": readonly [upstream2.State<upstream3.StatefulWidget>] }>; imageProvider: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>}], implementation: Partial<ScrollAwareImageProvider<_Selected0>>): ScrollAwareImageProvider<_Selected0>;} & _FlaxInstanceType<ScrollAwareImageProvider<_Selected0>> & _FlaxDartType<ScrollAwareImageProvider<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (abstract new (options: {context: Readonly<{ "__flaxBound:package:flutter/src/widgets/disposable_build_context.dart::DisposableBuildContext": readonly [upstream2.State<upstream3.StatefulWidget>] }>;imageProvider: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>}) => ScrollAwareImageProvider<_Selected0>) & {readonly prototype: ScrollAwareImageProvider<_Selected0>;implement(args: readonly [options: {context: Readonly<{ "__flaxBound:package:flutter/src/widgets/disposable_build_context.dart::DisposableBuildContext": readonly [upstream2.State<upstream3.StatefulWidget>] }>; imageProvider: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>}], implementation: Partial<ScrollAwareImageProvider<_Selected0>>): ScrollAwareImageProvider<_Selected0>;} & _FlaxInstanceType<ScrollAwareImageProvider<_Selected0>> & _FlaxDartType<ScrollAwareImageProvider<_Selected0>> : never : never; }
