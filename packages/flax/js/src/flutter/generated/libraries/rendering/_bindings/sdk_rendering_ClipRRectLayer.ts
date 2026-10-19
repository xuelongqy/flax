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
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters6, _flaxMemberParameters11, _flaxMemberParameters28, _flaxMemberParameters1, _flaxMemberParameters5, _flaxMemberParameters7, _flaxMemberParameters8, _flaxMemberParameters9, _flaxMemberParameters10, _flaxMemberParameters12, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters16 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClipRRectLayer extends Omit<upstream0.ContainerLayer, _flaxOwnMembers0>, Omit<upstream1.Layer, _flaxOwnMembers0 | keyof upstream0.ContainerLayer>, Omit<upstream2.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer>, Omit<upstream3.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer | keyof upstream2.DiagnosticableTreeMixin>, Omit<upstream4.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer | keyof upstream2.DiagnosticableTreeMixin | keyof upstream3.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::ClipRRectLayer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ClipRRectLayer: unique symbol;
readonly [_flaxDartTypeValue]: ClipRRectLayer;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature0;find: _FlaxSignature1;findAllAnnotations: _FlaxSignature2;};
}
defineObject("flax.core/sdk_rendering#type:ClipRRectLayer", ["firstChild","lastChild","hasChildren","subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator","clipRRect","clipBehavior"], ["debugCreator","clipRRect","clipBehavior"], _flaxBindingMethods("flax.core/sdk_rendering#type:ClipRRectLayer", "object", {"findAnnotations":_flaxMemberParameters6,"find":_flaxMemberParameters11,"findAllAnnotations":_flaxMemberParameters11}, {"findAnnotations":{"id":"findAnnotations","parameters":[{"name":"result","required":true,"positional":true},{"name":"localPosition","required":true,"positional":true},{"name":"onlyFirst","required":true}]},"find":{"id":"find","parameters":[{"name":"localPosition","required":true,"positional":true}]},"findAllAnnotations":{"id":"findAllAnnotations","parameters":[{"name":"localPosition","required":true,"positional":true}]}}), [], undefined, "flax.core/sdk_rendering#type:ContainerLayer");
const _ClipRRectLayerProxy = {type: "flax.core/sdk_rendering#type:ClipRRectLayer", parameters: _flaxMemberParameters28, constructors: {"": _flaxMemberParameters28}, methods: {"supportsRasterization":_flaxMemberParameters1,"buildScene":_flaxMemberParameters5,"dispose":_flaxMemberParameters1,"updateSubtreeNeedsAddToScene":_flaxMemberParameters1,"findAnnotations":_flaxMemberParameters6,"attach":_flaxMemberParameters7,"detach":_flaxMemberParameters1,"append":_flaxMemberParameters8,"redepthChildren":_flaxMemberParameters1,"redepthChild":_flaxMemberParameters8,"removeAllChildren":_flaxMemberParameters1,"addToScene":_flaxMemberParameters5,"addChildrenToScene":_flaxMemberParameters5,"applyTransform":_flaxMemberParameters9,"debugDescribeChildren":_flaxMemberParameters1,"describeClipBounds":_flaxMemberParameters1,"addCompositionCallback":_flaxMemberParameters10,"remove":_flaxMemberParameters1,"find":_flaxMemberParameters11,"findAllAnnotations":_flaxMemberParameters11,"toStringShort":_flaxMemberParameters1,"debugFillProperties":_flaxMemberParameters12,"toStringShallow":_flaxMemberParameters13,"toStringDeep":_flaxMemberParameters14,"toDiagnosticsNode":_flaxMemberParameters15,"toString":_flaxMemberParameters16}, getters: ["clipRRect","clipBehavior","firstChild","lastChild","hasChildren","subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator"], setters: ["clipRRect","clipBehavior","debugCreator"], contextMembers: ["findAnnotations","find","findAllAnnotations"], superMembers: ["get:clipRRect","get:clipBehavior","get:firstChild","get:lastChild","get:hasChildren","get:subtreeHasCompositionCallbacks","get:debugDisposed","get:debugHandleCount","get:parent","get:alwaysNeedsAddToScene","get:owner","get:attached","get:depth","get:nextSibling","get:previousSibling","get:debugCreator","set:clipRRect","set:clipBehavior","set:debugCreator","supportsRasterization","buildScene","dispose","updateSubtreeNeedsAddToScene","findAnnotations","attach","detach","append","redepthChildren","redepthChild","removeAllChildren","addToScene","addChildrenToScene","applyTransform","debugDescribeChildren","describeClipBounds","addCompositionCallback","remove","find","findAllAnnotations","toStringShort","debugFillProperties","toStringShallow","toStringDeep","toDiagnosticsNode","toString"]} as const;
export interface ClipRRectLayer {
readonly [_flaxDartTypeValue]: ClipRRectLayer;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature3;find: _FlaxSignature4;findAllAnnotations: _FlaxSignature5;};
supportsRasterization(): boolean;
buildScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): upstream7.Scene;
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
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
describeClipBounds(): upstream13.Rect | null;
addCompositionCallback(callback: ((layer: upstream1.Layer) => void)): (() => void);
remove(): void;
find<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): _FlaxDartOutput<S> | null;
findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream9.AnnotationResult<_FlaxDartOutput<S>>;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream15.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream15.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream16.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
toString(options?: {minLevel?: upstream15.DiagnosticLevel | undefined}): string;
get clipRRect(): upstream5.RRect | null;
get clipBehavior(): upstream6.Clip;
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
set clipRRect(value: Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [upstream5.RRect] }> | null);
set clipBehavior(value: upstream6.Clip);
set debugCreator(value: unknown | null);
}
export abstract class ClipRRectLayer extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ClipRRectLayer>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ClipRRectLayer;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ClipRRectLayer", readonly [], false];
constructor(options?: {clipRRect?: Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [upstream5.RRect] }> | null | undefined; clipBehavior?: upstream6.Clip | undefined}) { super(_ClipRRectLayerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ClipRRectLayer.prototype, _ClipRRectLayerProxy);
export namespace ClipRRectLayer { export function implement(args: [options?: {clipRRect?: Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [upstream5.RRect] }> | null | undefined; clipBehavior?: upstream6.Clip | undefined}], implementation: {}): ClipRRectLayer {
return constructProxy(_ClipRRectLayerProxy, args, implementation) as ClipRRectLayer; } }
_flaxBindInstanceType<ClipRRectLayer, typeof ClipRRectLayer>(ClipRRectLayer, "flax.core/sdk_rendering#type:ClipRRectLayer", ["flax.core/sdk_rendering#type:ContainerLayer","flax.core/sdk_rendering#type:Layer","dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "firstChild" | "lastChild" | "hasChildren" | "subtreeHasCompositionCallbacks" | "debugDisposed" | "debugHandleCount" | "parent" | "alwaysNeedsAddToScene" | "owner" | "attached" | "depth" | "nextSibling" | "previousSibling" | "debugCreator" | "clipRRect" | "clipBehavior" | "supportsRasterization" | "buildScene" | "dispose" | "updateSubtreeNeedsAddToScene" | "findAnnotations" | "attach" | "detach" | "append" | "redepthChildren" | "redepthChild" | "removeAllChildren" | "addToScene" | "addChildrenToScene" | "applyTransform" | "debugDescribeChildren" | "describeClipBounds" | "addCompositionCallback" | "remove" | "find" | "findAllAnnotations" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/rendering/layer.dart::ClipRRectLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::Layer" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream9.AnnotationResult<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream9.AnnotationResult<_Selected0> : never : never; }
