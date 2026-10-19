// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_BackdropKey';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BackdropKey';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [{"name":"result","required":true,"positional":true},{"name":"localPosition","required":true,"positional":true},{"name":"onlyFirst","required":true}] as const;
const _flaxMemberParameters1 = [{"name":"localPosition","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"filter"},{"name":"blendMode"}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"builder","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"owner","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"child","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"child","required":true,"positional":true},{"name":"transform","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"joiner"},{"name":"minLevel"}] as const;
const _flaxMemberParameters11 = [{"name":"minLevel"},{"name":"prefixLineOne"},{"name":"prefixOtherLines"},{"name":"wrapWidth"}] as const;
const _flaxMemberParameters12 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters13 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BackdropFilterLayer extends Omit<upstream0.ContainerLayer, _flaxOwnMembers0>, Omit<upstream1.Layer, _flaxOwnMembers0 | keyof upstream0.ContainerLayer>, Omit<upstream2.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer>, Omit<upstream3.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer | keyof upstream2.DiagnosticableTreeMixin>, Omit<upstream4.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer | keyof upstream2.DiagnosticableTreeMixin | keyof upstream3.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::BackdropFilterLayer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __BackdropFilterLayer: unique symbol;
readonly [_flaxDartTypeValue]: BackdropFilterLayer;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature0;find: _FlaxSignature1;findAllAnnotations: _FlaxSignature2;};
}
defineObject("flax.core/sdk_rendering#type:BackdropFilterLayer", ["firstChild","lastChild","hasChildren","subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator","filter","blendMode","backdropKey"], ["debugCreator","filter","blendMode","backdropKey"], _flaxBindingMethods("flax.core/sdk_rendering#type:BackdropFilterLayer", "object", {"findAnnotations":_flaxMemberParameters0,"find":_flaxMemberParameters1,"findAllAnnotations":_flaxMemberParameters1}, {"findAnnotations":{"id":"findAnnotations","parameters":[{"name":"result","required":true,"positional":true},{"name":"localPosition","required":true,"positional":true},{"name":"onlyFirst","required":true}]},"find":{"id":"find","parameters":[{"name":"localPosition","required":true,"positional":true}]},"findAllAnnotations":{"id":"findAllAnnotations","parameters":[{"name":"localPosition","required":true,"positional":true}]}}), [], undefined, "flax.core/sdk_rendering#type:ContainerLayer");
const _BackdropFilterLayerProxy = {type: "flax.core/sdk_rendering#type:BackdropFilterLayer", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"supportsRasterization":_flaxMemberParameters3,"buildScene":_flaxMemberParameters4,"dispose":_flaxMemberParameters3,"updateSubtreeNeedsAddToScene":_flaxMemberParameters3,"findAnnotations":_flaxMemberParameters0,"attach":_flaxMemberParameters5,"detach":_flaxMemberParameters3,"append":_flaxMemberParameters6,"redepthChildren":_flaxMemberParameters3,"redepthChild":_flaxMemberParameters6,"removeAllChildren":_flaxMemberParameters3,"addToScene":_flaxMemberParameters4,"addChildrenToScene":_flaxMemberParameters4,"applyTransform":_flaxMemberParameters7,"debugDescribeChildren":_flaxMemberParameters3,"describeClipBounds":_flaxMemberParameters3,"addCompositionCallback":_flaxMemberParameters8,"remove":_flaxMemberParameters3,"find":_flaxMemberParameters1,"findAllAnnotations":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters9,"toStringShallow":_flaxMemberParameters10,"toStringDeep":_flaxMemberParameters11,"toDiagnosticsNode":_flaxMemberParameters12,"toString":_flaxMemberParameters13}, getters: ["filter","blendMode","backdropKey","firstChild","lastChild","hasChildren","subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator"], setters: ["filter","blendMode","backdropKey","debugCreator"], contextMembers: ["findAnnotations","find","findAllAnnotations"], superMembers: ["get:filter","get:blendMode","get:backdropKey","get:firstChild","get:lastChild","get:hasChildren","get:subtreeHasCompositionCallbacks","get:debugDisposed","get:debugHandleCount","get:parent","get:alwaysNeedsAddToScene","get:owner","get:attached","get:depth","get:nextSibling","get:previousSibling","get:debugCreator","set:filter","set:blendMode","set:backdropKey","set:debugCreator","supportsRasterization","buildScene","dispose","updateSubtreeNeedsAddToScene","findAnnotations","attach","detach","append","redepthChildren","redepthChild","removeAllChildren","addToScene","addChildrenToScene","applyTransform","debugDescribeChildren","describeClipBounds","addCompositionCallback","remove","find","findAllAnnotations","toStringShort","debugFillProperties","toStringShallow","toStringDeep","toDiagnosticsNode","toString"]} as const;
export interface BackdropFilterLayer {
readonly [_flaxDartTypeValue]: BackdropFilterLayer;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature3;find: _FlaxSignature4;findAllAnnotations: _FlaxSignature5;};
supportsRasterization(): boolean;
buildScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): upstream8.Scene;
dispose(): void;
updateSubtreeNeedsAddToScene(): void;
findAnnotations<S extends {} = {}>(result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>] }>, localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {onlyFirst: boolean}): boolean;
attach(owner: {}): void;
detach(): void;
append(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
redepthChildren(): void;
redepthChild(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
removeAllChildren(): void;
addToScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): void;
addChildrenToScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): void;
applyTransform(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>): void;
debugDescribeChildren(): DartList<upstream13.DiagnosticsNode>;
describeClipBounds(): upstream14.Rect | null;
addCompositionCallback(callback: ((layer: upstream1.Layer) => void)): (() => void);
remove(): void;
find<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): _FlaxDartOutput<S> | null;
findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream10.AnnotationResult<_FlaxDartOutput<S>>;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream16.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream16.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream17.DiagnosticsTreeStyle | null | undefined}): upstream13.DiagnosticsNode;
toString(options?: {minLevel?: upstream16.DiagnosticLevel | undefined}): string;
get filter(): upstream5.ImageFilter | null;
get blendMode(): upstream6.BlendMode;
get backdropKey(): upstream7.BackdropKey | null;
get firstChild(): upstream1.Layer | null;
get lastChild(): upstream1.Layer | null;
get hasChildren(): boolean;
get subtreeHasCompositionCallbacks(): boolean;
get debugDisposed(): boolean;
get debugHandleCount(): number;
get parent(): upstream0.ContainerLayer | null;
get alwaysNeedsAddToScene(): boolean;
get owner(): unknown | null;
get attached(): boolean;
get depth(): number;
get nextSibling(): upstream1.Layer | null;
get previousSibling(): upstream1.Layer | null;
get debugCreator(): unknown | null;
set filter(value: Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null);
set blendMode(value: upstream6.BlendMode);
set backdropKey(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::BackdropKey": readonly [] }> | null);
set debugCreator(value: unknown | null);
}
export abstract class BackdropFilterLayer extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BackdropFilterLayer>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BackdropFilterLayer;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:BackdropFilterLayer", readonly [], false];
constructor(options?: {filter?: Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null | undefined; blendMode?: upstream6.BlendMode | undefined}) { super(_BackdropFilterLayerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BackdropFilterLayer.prototype, _BackdropFilterLayerProxy);
export namespace BackdropFilterLayer { export function implement(args: [options?: {filter?: Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> | null | undefined; blendMode?: upstream6.BlendMode | undefined}], implementation: {}): BackdropFilterLayer {
return constructProxy(_BackdropFilterLayerProxy, args, implementation) as BackdropFilterLayer; } }
_flaxBindInstanceType<BackdropFilterLayer, typeof BackdropFilterLayer>(BackdropFilterLayer, "flax.core/sdk_rendering#type:BackdropFilterLayer", ["flax.core/sdk_rendering#type:ContainerLayer","flax.core/sdk_rendering#type:Layer","dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "firstChild" | "lastChild" | "hasChildren" | "subtreeHasCompositionCallbacks" | "debugDisposed" | "debugHandleCount" | "parent" | "alwaysNeedsAddToScene" | "owner" | "attached" | "depth" | "nextSibling" | "previousSibling" | "debugCreator" | "filter" | "blendMode" | "backdropKey" | "supportsRasterization" | "buildScene" | "dispose" | "updateSubtreeNeedsAddToScene" | "findAnnotations" | "attach" | "detach" | "append" | "redepthChildren" | "redepthChild" | "removeAllChildren" | "addToScene" | "addChildrenToScene" | "applyTransform" | "debugDescribeChildren" | "describeClipBounds" | "addCompositionCallback" | "remove" | "find" | "findAllAnnotations" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/rendering/layer.dart::BackdropFilterLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::Layer" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream10.AnnotationResult<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream10.AnnotationResult<_Selected0> : never : never; }
