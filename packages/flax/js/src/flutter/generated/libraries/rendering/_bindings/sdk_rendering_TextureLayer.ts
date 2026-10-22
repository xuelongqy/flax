// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters6, _flaxMemberParameters11, _flaxMemberParameters369, _flaxMemberParameters1, _flaxMemberParameters10, _flaxMemberParameters7, _flaxMemberParameters5, _flaxMemberParameters12, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextureLayer extends Omit<upstream0.Layer, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.Layer>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.Layer | keyof upstream1.DiagnosticableTreeMixin>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Layer | keyof upstream1.DiagnosticableTreeMixin | keyof upstream2.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::TextureLayer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextureLayer: unique symbol;
readonly [_flaxDartTypeValue]: TextureLayer;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature0;find: _FlaxSignature1;findAllAnnotations: _FlaxSignature2;};
readonly subtreeHasCompositionCallbacks: boolean;
readonly debugDisposed: boolean;
readonly debugHandleCount: number;
readonly parent: upstream6.ContainerLayer | null;
readonly alwaysNeedsAddToScene: boolean;
readonly owner: unknown | null;
readonly attached: boolean;
readonly depth: number;
readonly nextSibling: upstream0.Layer | null;
readonly previousSibling: upstream0.Layer | null;
get debugCreator(): unknown | null;
readonly rect: upstream4.Rect;
readonly textureId: number;
readonly freeze: boolean;
readonly filterQuality: upstream5.FilterQuality;
supportsRasterization(): boolean;
describeClipBounds(): upstream4.Rect | null;
addCompositionCallback(callback: ((layer: upstream0.Layer) => void)): (() => void);
attach(owner: {}): void;
detach(): void;
redepthChildren(): void;
remove(): void;
findAnnotations<S extends {} = {}>(result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>] }>, localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {onlyFirst: boolean}): boolean;
find<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): _FlaxDartOutput<S> | null;
findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream7.AnnotationResult<_FlaxDartOutput<S>>;
addToScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): void;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
toString(options?: {minLevel?: upstream11.DiagnosticLevel | undefined}): string;
set debugCreator(value: unknown | null);
}
defineObject("flax.core/sdk_rendering#type:TextureLayer", ["subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator","rect","textureId","freeze","filterQuality"], ["debugCreator"], _flaxBindingMethods("flax.core/sdk_rendering#type:TextureLayer", "object", {"findAnnotations":_flaxMemberParameters6,"find":_flaxMemberParameters11,"findAllAnnotations":_flaxMemberParameters11}, {"findAnnotations":{"id":"findAnnotations","parameters":[{"name":"result","required":true,"positional":true},{"name":"localPosition","required":true,"positional":true},{"name":"onlyFirst","required":true}]},"find":{"id":"find","parameters":[{"name":"localPosition","required":true,"positional":true}]},"findAllAnnotations":{"id":"findAllAnnotations","parameters":[{"name":"localPosition","required":true,"positional":true}]}}), [], undefined, "flax.core/sdk_rendering#type:Layer");
export function _TextureLayerFactory(options: { rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; textureId: number; freeze?: boolean | undefined; filterQuality?: upstream5.FilterQuality | undefined }): TextureLayer {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:TextureLayer", "", [{"name":"rect","required":true},{"name":"textureId","required":true},{"name":"freeze"},{"name":"filterQuality"}], [], options) as TextureLayer;
}
const _TextureLayerProxy = {type: "flax.core/sdk_rendering#type:TextureLayer", parameters: _flaxMemberParameters369, constructors: {"": _flaxMemberParameters369}, methods: {"supportsRasterization":_flaxMemberParameters1,"describeClipBounds":_flaxMemberParameters1,"addCompositionCallback":_flaxMemberParameters10,"attach":_flaxMemberParameters7,"detach":_flaxMemberParameters1,"redepthChildren":_flaxMemberParameters1,"remove":_flaxMemberParameters1,"findAnnotations":_flaxMemberParameters6,"find":_flaxMemberParameters11,"findAllAnnotations":_flaxMemberParameters11,"addToScene":_flaxMemberParameters5,"toStringShort":_flaxMemberParameters1,"debugFillProperties":_flaxMemberParameters12,"toStringShallow":_flaxMemberParameters13,"toStringDeep":_flaxMemberParameters14,"toDiagnosticsNode":_flaxMemberParameters15,"debugDescribeChildren":_flaxMemberParameters1,"toString":_flaxMemberParameters16}, getters: ["rect","textureId","freeze","filterQuality","subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator"], setters: ["debugCreator"], contextMembers: ["findAnnotations","find","findAllAnnotations"], superMembers: ["get:rect","get:textureId","get:freeze","get:filterQuality","get:subtreeHasCompositionCallbacks","get:debugDisposed","get:debugHandleCount","get:parent","get:alwaysNeedsAddToScene","get:owner","get:attached","get:depth","get:nextSibling","get:previousSibling","get:debugCreator","set:debugCreator","supportsRasterization","describeClipBounds","addCompositionCallback","attach","detach","redepthChildren","remove","findAnnotations","find","findAllAnnotations","addToScene","toStringShort","debugFillProperties","toStringShallow","toStringDeep","toDiagnosticsNode","debugDescribeChildren","toString"]} as const;
export interface _TextureLayerNative extends TextureLayer {
readonly [_flaxDartTypeValue]: _TextureLayerNative;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature3;find: _FlaxSignature4;findAllAnnotations: _FlaxSignature5;};
supportsRasterization(): boolean;
describeClipBounds(): upstream4.Rect | null;
addCompositionCallback(callback: ((layer: upstream0.Layer) => void)): (() => void);
attach(owner: {}): void;
detach(): void;
redepthChildren(): void;
remove(): void;
findAnnotations<S extends {} = {}>(result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>] }>, localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {onlyFirst: boolean}): boolean;
find<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): _FlaxDartOutput<S> | null;
findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream7.AnnotationResult<_FlaxDartOutput<S>>;
addToScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): void;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream11.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
toString(options?: {minLevel?: upstream11.DiagnosticLevel | undefined}): string;
get rect(): upstream4.Rect;
get textureId(): number;
get freeze(): boolean;
get filterQuality(): upstream5.FilterQuality;
get subtreeHasCompositionCallbacks(): boolean;
get debugDisposed(): boolean;
get debugHandleCount(): number;
get parent(): upstream6.ContainerLayer | null;
get alwaysNeedsAddToScene(): boolean;
get owner(): unknown | null;
get attached(): boolean;
get depth(): number;
get nextSibling(): upstream0.Layer | null;
get previousSibling(): upstream0.Layer | null;
get debugCreator(): unknown | null;
set debugCreator(value: unknown | null);
}
export abstract class _TextureLayerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextureLayer>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextureLayer;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TextureLayer", readonly [], false];
constructor(options: {rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; textureId: number; freeze?: boolean | undefined; filterQuality?: upstream5.FilterQuality | undefined}) { super(_TextureLayerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextureLayerNative.prototype, _TextureLayerProxy);
export namespace _TextureLayerFactory { export function implement(args: [options: {rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; textureId: number; freeze?: boolean | undefined; filterQuality?: upstream5.FilterQuality | undefined}], implementation: {}): TextureLayer {
return constructProxy(_TextureLayerProxy, args, implementation) as TextureLayer; } }
const _TextureLayerBinding = _flaxProxyFactory(_TextureLayerFactory, _TextureLayerNative) as unknown as typeof _TextureLayerFactory & (new(options: {rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; textureId: number; freeze?: boolean | undefined; filterQuality?: upstream5.FilterQuality | undefined}) => _TextureLayerNative);
export const TextureLayer: typeof _TextureLayerBinding & _FlaxInstanceType<TextureLayer> & _FlaxDartType<TextureLayer, readonly ["class", "flax.core/sdk_rendering#type:TextureLayer", readonly [], false]> = _flaxBindInstanceType<TextureLayer, typeof _TextureLayerBinding>(_TextureLayerBinding, "flax.core/sdk_rendering#type:TextureLayer", ["flax.core/sdk_rendering#type:Layer","dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TextureLayerBinding & _FlaxInstanceType<TextureLayer> & _FlaxDartType<TextureLayer, readonly ["class", "flax.core/sdk_rendering#type:TextureLayer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "subtreeHasCompositionCallbacks" | "debugDisposed" | "debugHandleCount" | "parent" | "alwaysNeedsAddToScene" | "owner" | "attached" | "depth" | "nextSibling" | "previousSibling" | "debugCreator" | "rect" | "textureId" | "freeze" | "filterQuality" | "supportsRasterization" | "describeClipBounds" | "addCompositionCallback" | "attach" | "detach" | "redepthChildren" | "remove" | "findAnnotations" | "find" | "findAllAnnotations" | "addToScene" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "toString" | "__flaxBound:package:flutter/src/rendering/layer.dart::TextureLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::Layer" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream7.AnnotationResult<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream7.AnnotationResult<_Selected0> : never : never; }
