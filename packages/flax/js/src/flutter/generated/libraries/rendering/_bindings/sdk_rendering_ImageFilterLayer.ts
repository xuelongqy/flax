// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OffsetLayer';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters6, _flaxMemberParameters11, _flaxMemberParameters82, _flaxMemberParameters9, _flaxMemberParameters5, _flaxMemberParameters12, _flaxMemberParameters83, _flaxMemberParameters1, _flaxMemberParameters7, _flaxMemberParameters8, _flaxMemberParameters10, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ImageFilterLayer extends Omit<upstream0.OffsetLayer, _flaxOwnMembers0>, Omit<upstream1.ContainerLayer, _flaxOwnMembers0 | keyof upstream0.OffsetLayer>, Omit<upstream2.Layer, _flaxOwnMembers0 | keyof upstream0.OffsetLayer | keyof upstream1.ContainerLayer>, Omit<upstream3.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.OffsetLayer | keyof upstream1.ContainerLayer | keyof upstream2.Layer>, Omit<upstream4.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.OffsetLayer | keyof upstream1.ContainerLayer | keyof upstream2.Layer | keyof upstream3.DiagnosticableTreeMixin>, Omit<upstream5.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.OffsetLayer | keyof upstream1.ContainerLayer | keyof upstream2.Layer | keyof upstream3.DiagnosticableTreeMixin | keyof upstream4.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::ImageFilterLayer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::OffsetLayer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ImageFilterLayer: unique symbol;
readonly [_flaxDartTypeValue]: ImageFilterLayer;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature0;find: _FlaxSignature1;findAllAnnotations: _FlaxSignature2;};
}
defineObject("flax.core/sdk_rendering#type:ImageFilterLayer", ["offset","firstChild","lastChild","hasChildren","subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator","imageFilter"], ["offset","debugCreator","imageFilter"], _flaxBindingMethods("flax.core/sdk_rendering#type:ImageFilterLayer", "object", {"findAnnotations":_flaxMemberParameters6,"find":_flaxMemberParameters11,"findAllAnnotations":_flaxMemberParameters11}, {"findAnnotations":{"id":"findAnnotations","parameters":[{"name":"result","required":true,"positional":true},{"name":"localPosition","required":true,"positional":true},{"name":"onlyFirst","required":true}]},"find":{"id":"find","parameters":[{"name":"localPosition","required":true,"positional":true}]},"findAllAnnotations":{"id":"findAllAnnotations","parameters":[{"name":"localPosition","required":true,"positional":true}]}}), [], undefined, "flax.core/sdk_rendering#type:OffsetLayer");
const _ImageFilterLayerProxy = {type: "flax.core/sdk_rendering#type:ImageFilterLayer", parameters: _flaxMemberParameters82, constructors: {"": _flaxMemberParameters82}, methods: {"findAnnotations":_flaxMemberParameters6,"applyTransform":_flaxMemberParameters9,"addToScene":_flaxMemberParameters5,"debugFillProperties":_flaxMemberParameters12,"toImage":_flaxMemberParameters83,"toImageSync":_flaxMemberParameters83,"supportsRasterization":_flaxMemberParameters1,"buildScene":_flaxMemberParameters5,"dispose":_flaxMemberParameters1,"updateSubtreeNeedsAddToScene":_flaxMemberParameters1,"attach":_flaxMemberParameters7,"detach":_flaxMemberParameters1,"append":_flaxMemberParameters8,"redepthChildren":_flaxMemberParameters1,"redepthChild":_flaxMemberParameters8,"removeAllChildren":_flaxMemberParameters1,"addChildrenToScene":_flaxMemberParameters5,"debugDescribeChildren":_flaxMemberParameters1,"describeClipBounds":_flaxMemberParameters1,"addCompositionCallback":_flaxMemberParameters10,"remove":_flaxMemberParameters1,"find":_flaxMemberParameters11,"findAllAnnotations":_flaxMemberParameters11,"toStringShort":_flaxMemberParameters1,"toStringShallow":_flaxMemberParameters13,"toStringDeep":_flaxMemberParameters14,"toDiagnosticsNode":_flaxMemberParameters15,"toString":_flaxMemberParameters16}, getters: ["imageFilter","offset","firstChild","lastChild","hasChildren","subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator"], setters: ["imageFilter","offset","debugCreator"], contextMembers: ["findAnnotations","find","findAllAnnotations"], superMembers: ["get:imageFilter","get:offset","get:firstChild","get:lastChild","get:hasChildren","get:subtreeHasCompositionCallbacks","get:debugDisposed","get:debugHandleCount","get:parent","get:alwaysNeedsAddToScene","get:owner","get:attached","get:depth","get:nextSibling","get:previousSibling","get:debugCreator","set:imageFilter","set:offset","set:debugCreator","findAnnotations","applyTransform","addToScene","debugFillProperties","toImage","toImageSync","supportsRasterization","buildScene","dispose","updateSubtreeNeedsAddToScene","attach","detach","append","redepthChildren","redepthChild","removeAllChildren","addChildrenToScene","debugDescribeChildren","describeClipBounds","addCompositionCallback","remove","find","findAllAnnotations","toStringShort","toStringShallow","toStringDeep","toDiagnosticsNode","toString"]} as const;
export interface ImageFilterLayer {
readonly [_flaxDartTypeValue]: ImageFilterLayer;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature3;find: _FlaxSignature4;findAllAnnotations: _FlaxSignature5;};
findAnnotations<S extends {} = {}>(result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>] }>, localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {onlyFirst: boolean}): boolean;
applyTransform(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
addToScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): void;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toImage(bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {pixelRatio?: number | undefined}): Promise<upstream12.Image>;
toImageSync(bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options?: {pixelRatio?: number | undefined}): upstream12.Image;
supportsRasterization(): boolean;
buildScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): upstream14.Scene;
dispose(): void;
updateSubtreeNeedsAddToScene(): void;
attach(owner: {}): void;
detach(): void;
append(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
redepthChildren(): void;
redepthChild(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
removeAllChildren(): void;
addChildrenToScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): void;
debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
describeClipBounds(): upstream13.Rect | null;
addCompositionCallback(callback: ((layer: upstream2.Layer) => void)): (() => void);
remove(): void;
find<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): _FlaxDartOutput<S> | null;
findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream8.AnnotationResult<_FlaxDartOutput<S>>;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream16.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream16.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream17.DiagnosticsTreeStyle | null | undefined}): upstream15.DiagnosticsNode;
toString(options?: {minLevel?: upstream16.DiagnosticLevel | undefined}): string;
get imageFilter(): upstream6.ImageFilter | null;
get offset(): upstream7.Offset;
get firstChild(): upstream2.Layer | null;
get lastChild(): upstream2.Layer | null;
get hasChildren(): boolean;
get subtreeHasCompositionCallbacks(): boolean;
get debugDisposed(): boolean;
get debugHandleCount(): number;
get parent(): upstream1.ContainerLayer | null;
get alwaysNeedsAddToScene(): boolean;
get owner(): unknown | null;
get attached(): boolean;
get depth(): number;
get nextSibling(): upstream2.Layer | null;
get previousSibling(): upstream2.Layer | null;
get debugCreator(): unknown | null;
set imageFilter(value: Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null);
set offset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
set debugCreator(value: unknown | null);
}
export abstract class ImageFilterLayer extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ImageFilterLayer>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ImageFilterLayer;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ImageFilterLayer", readonly [], false];
constructor(options?: {imageFilter?: Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined}) { super(_ImageFilterLayerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ImageFilterLayer.prototype, _ImageFilterLayerProxy);
export namespace ImageFilterLayer { export function implement(args: [options?: {imageFilter?: Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined}], implementation: {}): ImageFilterLayer {
return constructProxy(_ImageFilterLayerProxy, args, implementation) as ImageFilterLayer; } }
_flaxBindInstanceType<ImageFilterLayer, typeof ImageFilterLayer>(ImageFilterLayer, "flax.core/sdk_rendering#type:ImageFilterLayer", ["flax.core/sdk_rendering#type:OffsetLayer","flax.core/sdk_rendering#type:ContainerLayer","flax.core/sdk_rendering#type:Layer","dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "firstChild" | "lastChild" | "hasChildren" | "subtreeHasCompositionCallbacks" | "debugDisposed" | "debugHandleCount" | "parent" | "alwaysNeedsAddToScene" | "owner" | "attached" | "depth" | "nextSibling" | "previousSibling" | "debugCreator" | "imageFilter" | "findAnnotations" | "applyTransform" | "addToScene" | "debugFillProperties" | "toImage" | "toImageSync" | "supportsRasterization" | "buildScene" | "dispose" | "updateSubtreeNeedsAddToScene" | "attach" | "detach" | "append" | "redepthChildren" | "redepthChild" | "removeAllChildren" | "addChildrenToScene" | "debugDescribeChildren" | "describeClipBounds" | "addCompositionCallback" | "remove" | "find" | "findAllAnnotations" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/rendering/layer.dart::ImageFilterLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::OffsetLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::Layer" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream8.AnnotationResult<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream8.AnnotationResult<_Selected0> : never : never; }
