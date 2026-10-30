// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageChunkEvent';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream8 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_BoxFit';
import '@flax/flutter/painting/_bindings/flutter_BoxFit';
import type * as upstream11 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream12 from '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageRepeat';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import type * as upstream15 from '@flax/flutter/painting/_bindings/sdk_painting_WebHtmlElementStrategy';
import '@flax/flutter/painting/_bindings/sdk_painting_WebHtmlElementStrategy';
import type * as upstream16 from '@flax/dart/io/_bindings/sdk_dependencies_File';
import '@flax/dart/io/_bindings/sdk_dependencies_File';
import type * as upstream17 from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream23 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream24 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Image extends _FlaxDartWidget, Omit<upstream1.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream1.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/image.dart::Image": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Image: unique symbol;
readonly [_flaxDartTypeValue]: Image;

readonly image: upstream3.ImageProvider<any>;
readonly frameBuilder: ((context: upstream4.BuildContext, child: Widget, frame: number | null, wasSynchronouslyLoaded: boolean) => Widget) | null;
readonly loadingBuilder: ((context: upstream4.BuildContext, child: Widget, loadingProgress: Readonly<{ "__flaxBound:package:flutter/src/painting/image_stream.dart::ImageChunkEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null) => Widget) | null;
readonly errorBuilder: ((context: upstream4.BuildContext, error: {}, stackTrace: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null) => Widget) | null;
readonly width: number | null;
readonly height: number | null;
readonly color: upstream7.Color | null;
readonly opacity: upstream8.Animation<number> | null;
readonly filterQuality: upstream14.FilterQuality;
readonly colorBlendMode: upstream9.BlendMode | null;
readonly fit: upstream10.BoxFit | null;
readonly alignment: upstream11.AlignmentGeometry;
readonly repeat: upstream12.ImageRepeat;
readonly centerSlice: upstream13.Rect | null;
readonly matchTextDirection: boolean;
readonly gaplessPlayback: boolean;
readonly semanticLabel: string | null;
readonly excludeFromSemantics: boolean;
readonly isAntiAlias: boolean;
readonly key: upstream2.Key | null;
createState(): upstream18.State<Image>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream20.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream21.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream21.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream23.DiagnosticsTreeStyle | null | undefined}): upstream22.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream22.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:Image", ["image","frameBuilder","loadingBuilder","errorBuilder","width","height","color","opacity","filterQuality","colorBlendMode","fit","alignment","repeat","centerSlice","matchTextDirection","gaplessPlayback","semanticLabel","excludeFromSemantics","isAntiAlias","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Image", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _ImageFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; image: Readonly<{ "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}] }>; frameBuilder?: ((context: upstream4.BuildContext, child: Widget, frame: number | null, wasSynchronouslyLoaded: boolean) => Widget) | null | undefined; loadingBuilder?: ((context: upstream4.BuildContext, child: Widget, loadingProgress: upstream5.ImageChunkEvent | null) => Widget) | null | undefined; errorBuilder?: ((context: upstream4.BuildContext, error: {}, stackTrace: upstream6.StackTrace | null) => Widget) | null | undefined; semanticLabel?: string | null | undefined; excludeFromSemantics?: boolean | undefined; width?: number | null | undefined; height?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null | undefined; colorBlendMode?: upstream9.BlendMode | null | undefined; fit?: upstream10.BoxFit | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; repeat?: upstream12.ImageRepeat | undefined; centerSlice?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; matchTextDirection?: boolean | undefined; gaplessPlayback?: boolean | undefined; isAntiAlias?: boolean | undefined; filterQuality?: upstream14.FilterQuality | undefined }): Image {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Image", "", [{"name":"key"},{"name":"image","required":true},{"name":"frameBuilder"},{"name":"loadingBuilder"},{"name":"errorBuilder"},{"name":"semanticLabel"},{"name":"excludeFromSemantics"},{"name":"width"},{"name":"height"},{"name":"color"},{"name":"opacity"},{"name":"colorBlendMode"},{"name":"fit"},{"name":"alignment"},{"name":"repeat"},{"name":"centerSlice"},{"name":"matchTextDirection"},{"name":"gaplessPlayback"},{"name":"isAntiAlias"},{"name":"filterQuality"}], [], options) as Image;
}
export declare namespace _ImageFactory { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _ImageFactory>[0]>); readonly slot: null; readonly many: false; }; }
export namespace _ImageFactory {
export function network(src: string, options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; scale?: number | undefined; frameBuilder?: ((context: upstream4.BuildContext, child: Widget, frame: number | null, wasSynchronouslyLoaded: boolean) => Widget) | null | undefined; loadingBuilder?: ((context: upstream4.BuildContext, child: Widget, loadingProgress: upstream5.ImageChunkEvent | null) => Widget) | null | undefined; errorBuilder?: ((context: upstream4.BuildContext, error: {}, stackTrace: upstream6.StackTrace | null) => Widget) | null | undefined; semanticLabel?: string | null | undefined; excludeFromSemantics?: boolean | undefined; width?: number | null | undefined; height?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null | undefined; colorBlendMode?: upstream9.BlendMode | null | undefined; fit?: upstream10.BoxFit | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; repeat?: upstream12.ImageRepeat | undefined; centerSlice?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; matchTextDirection?: boolean | undefined; gaplessPlayback?: boolean | undefined; filterQuality?: upstream14.FilterQuality | undefined; isAntiAlias?: boolean | undefined; headers?: DartMapInput<string, string, string, string> | null | undefined; cacheWidth?: number | null | undefined; cacheHeight?: number | null | undefined; webHtmlElementStrategy?: upstream15.WebHtmlElementStrategy | undefined } = {}): Image {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Image", "network", [{"name":"src","required":true,"positional":true},{"name":"key"},{"name":"scale"},{"name":"frameBuilder"},{"name":"loadingBuilder"},{"name":"errorBuilder"},{"name":"semanticLabel"},{"name":"excludeFromSemantics"},{"name":"width"},{"name":"height"},{"name":"color"},{"name":"opacity"},{"name":"colorBlendMode"},{"name":"fit"},{"name":"alignment"},{"name":"repeat"},{"name":"centerSlice"},{"name":"matchTextDirection"},{"name":"gaplessPlayback"},{"name":"filterQuality"},{"name":"isAntiAlias"},{"name":"headers"},{"name":"cacheWidth"},{"name":"cacheHeight"},{"name":"webHtmlElementStrategy"}], [src], options) as Image;
}
export declare namespace network { const __flaxJsx: { readonly props: ({ "src": globalThis.Parameters<typeof network>[0] } & globalThis.NonNullable<globalThis.Parameters<typeof network>[1]>); readonly slot: null; readonly many: false; }; }
}
export namespace _ImageFactory {
export function file(file: Readonly<{ "__flaxBound:dart:io::File": readonly [] }> & Readonly<{ "__flaxBound:dart:io::FileSystemEntity": readonly [] }>, options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; scale?: number | undefined; frameBuilder?: ((context: upstream4.BuildContext, child: Widget, frame: number | null, wasSynchronouslyLoaded: boolean) => Widget) | null | undefined; errorBuilder?: ((context: upstream4.BuildContext, error: {}, stackTrace: upstream6.StackTrace | null) => Widget) | null | undefined; semanticLabel?: string | null | undefined; excludeFromSemantics?: boolean | undefined; width?: number | null | undefined; height?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null | undefined; colorBlendMode?: upstream9.BlendMode | null | undefined; fit?: upstream10.BoxFit | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; repeat?: upstream12.ImageRepeat | undefined; centerSlice?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; matchTextDirection?: boolean | undefined; gaplessPlayback?: boolean | undefined; isAntiAlias?: boolean | undefined; filterQuality?: upstream14.FilterQuality | undefined; cacheWidth?: number | null | undefined; cacheHeight?: number | null | undefined } = {}): Image {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Image", "file", [{"name":"file","required":true,"positional":true},{"name":"key"},{"name":"scale"},{"name":"frameBuilder"},{"name":"errorBuilder"},{"name":"semanticLabel"},{"name":"excludeFromSemantics"},{"name":"width"},{"name":"height"},{"name":"color"},{"name":"opacity"},{"name":"colorBlendMode"},{"name":"fit"},{"name":"alignment"},{"name":"repeat"},{"name":"centerSlice"},{"name":"matchTextDirection"},{"name":"gaplessPlayback"},{"name":"isAntiAlias"},{"name":"filterQuality"},{"name":"cacheWidth"},{"name":"cacheHeight"}], [file], options) as Image;
}
export declare namespace file { const __flaxJsx: { readonly props: ({ "file": globalThis.Parameters<typeof file>[0] } & globalThis.NonNullable<globalThis.Parameters<typeof file>[1]>); readonly slot: null; readonly many: false; }; }
}
export namespace _ImageFactory {
export function asset(name: string, options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; bundle?: Readonly<{ "__flaxBound:package:flutter/src/services/asset_bundle.dart::AssetBundle": readonly [] }> | null | undefined; frameBuilder?: ((context: upstream4.BuildContext, child: Widget, frame: number | null, wasSynchronouslyLoaded: boolean) => Widget) | null | undefined; errorBuilder?: ((context: upstream4.BuildContext, error: {}, stackTrace: upstream6.StackTrace | null) => Widget) | null | undefined; semanticLabel?: string | null | undefined; excludeFromSemantics?: boolean | undefined; scale?: number | null | undefined; width?: number | null | undefined; height?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null | undefined; colorBlendMode?: upstream9.BlendMode | null | undefined; fit?: upstream10.BoxFit | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; repeat?: upstream12.ImageRepeat | undefined; centerSlice?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; matchTextDirection?: boolean | undefined; gaplessPlayback?: boolean | undefined; isAntiAlias?: boolean | undefined; package?: string | null | undefined; filterQuality?: upstream14.FilterQuality | undefined; cacheWidth?: number | null | undefined; cacheHeight?: number | null | undefined } = {}): Image {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Image", "asset", [{"name":"name","required":true,"positional":true},{"name":"key"},{"name":"bundle"},{"name":"frameBuilder"},{"name":"errorBuilder"},{"name":"semanticLabel"},{"name":"excludeFromSemantics"},{"name":"scale"},{"name":"width"},{"name":"height"},{"name":"color"},{"name":"opacity"},{"name":"colorBlendMode"},{"name":"fit"},{"name":"alignment"},{"name":"repeat"},{"name":"centerSlice"},{"name":"matchTextDirection"},{"name":"gaplessPlayback"},{"name":"isAntiAlias"},{"name":"package"},{"name":"filterQuality"},{"name":"cacheWidth"},{"name":"cacheHeight"}], [name], options) as Image;
}
export declare namespace asset { const __flaxJsx: { readonly props: ({ "name": globalThis.Parameters<typeof asset>[0] } & globalThis.NonNullable<globalThis.Parameters<typeof asset>[1]>); readonly slot: null; readonly many: false; }; }
}
export namespace _ImageFactory {
export function memory(bytes: globalThis.Uint8Array, options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; scale?: number | undefined; frameBuilder?: ((context: upstream4.BuildContext, child: Widget, frame: number | null, wasSynchronouslyLoaded: boolean) => Widget) | null | undefined; errorBuilder?: ((context: upstream4.BuildContext, error: {}, stackTrace: upstream6.StackTrace | null) => Widget) | null | undefined; semanticLabel?: string | null | undefined; excludeFromSemantics?: boolean | undefined; width?: number | null | undefined; height?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> | null | undefined; colorBlendMode?: upstream9.BlendMode | null | undefined; fit?: upstream10.BoxFit | null | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; repeat?: upstream12.ImageRepeat | undefined; centerSlice?: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> | null | undefined; matchTextDirection?: boolean | undefined; gaplessPlayback?: boolean | undefined; isAntiAlias?: boolean | undefined; filterQuality?: upstream14.FilterQuality | undefined; cacheWidth?: number | null | undefined; cacheHeight?: number | null | undefined } = {}): Image {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Image", "memory", [{"name":"bytes","required":true,"positional":true},{"name":"key"},{"name":"scale"},{"name":"frameBuilder"},{"name":"errorBuilder"},{"name":"semanticLabel"},{"name":"excludeFromSemantics"},{"name":"width"},{"name":"height"},{"name":"color"},{"name":"opacity"},{"name":"colorBlendMode"},{"name":"fit"},{"name":"alignment"},{"name":"repeat"},{"name":"centerSlice"},{"name":"matchTextDirection"},{"name":"gaplessPlayback"},{"name":"isAntiAlias"},{"name":"filterQuality"},{"name":"cacheWidth"},{"name":"cacheHeight"}], [bytes], options) as Image;
}
export declare namespace memory { const __flaxJsx: { readonly props: ({ "bytes": globalThis.Parameters<typeof memory>[0] } & globalThis.NonNullable<globalThis.Parameters<typeof memory>[1]>); readonly slot: null; readonly many: false; }; }
}
export const Image: typeof _ImageFactory & _FlaxInstanceType<Image> & _FlaxDartType<Image, readonly ["class", "flax.core/sdk_widgets#type:Image", readonly [], false]> = _flaxBindInstanceType<Image, typeof _ImageFactory>(_ImageFactory, "flax.core/sdk_widgets#type:Image", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ImageFactory & _FlaxInstanceType<Image> & _FlaxDartType<Image, readonly ["class", "flax.core/sdk_widgets#type:Image", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "image" | "frameBuilder" | "loadingBuilder" | "errorBuilder" | "width" | "height" | "color" | "opacity" | "filterQuality" | "colorBlendMode" | "fit" | "alignment" | "repeat" | "centerSlice" | "matchTextDirection" | "gaplessPlayback" | "semanticLabel" | "excludeFromSemantics" | "isAntiAlias" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/image.dart::Image" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
