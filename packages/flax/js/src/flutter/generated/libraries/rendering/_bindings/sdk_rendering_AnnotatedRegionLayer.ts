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
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"builder","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"result","required":true,"positional":true},{"name":"localPosition","required":true,"positional":true},{"name":"onlyFirst","required":true}] as const;
const _flaxMemberParameters3 = [{"name":"owner","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"child","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"child","required":true,"positional":true},{"name":"transform","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"localPosition","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"joiner"},{"name":"minLevel"}] as const;
const _flaxMemberParameters10 = [{"name":"minLevel"},{"name":"prefixLineOne"},{"name":"prefixOtherLines"},{"name":"wrapWidth"}] as const;
const _flaxMemberParameters11 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters12 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters13 = [{"name":"value","required":true,"positional":true},{"name":"size"},{"name":"offset"},{"name":"opaque"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnnotatedRegionLayer<T extends {} = {}> extends Omit<upstream0.ContainerLayer, _flaxOwnMembers0>, Omit<upstream1.Layer, _flaxOwnMembers0 | keyof upstream0.ContainerLayer>, Omit<upstream2.DiagnosticableTreeMixin, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer>, Omit<upstream3.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer | keyof upstream2.DiagnosticableTreeMixin>, Omit<upstream4.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ContainerLayer | keyof upstream1.Layer | keyof upstream2.DiagnosticableTreeMixin | keyof upstream3.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotatedRegionLayer": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AnnotatedRegionLayer: unique symbol;
readonly [_flaxDartTypeValue]: AnnotatedRegionLayer<T>;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature1<T>;find: _FlaxSignature2<T>;findAllAnnotations: _FlaxSignature3<T>;};
}
defineObject("flax.core/sdk_rendering#type:AnnotatedRegionLayer", ["firstChild","lastChild","hasChildren","subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator","value","size","offset","opaque"], ["debugCreator"], _flaxBindingMethods("flax.core/sdk_rendering#type:AnnotatedRegionLayer", "object", {"supportsRasterization":_flaxMemberParameters0,"buildScene":_flaxMemberParameters1,"dispose":_flaxMemberParameters0,"updateSubtreeNeedsAddToScene":_flaxMemberParameters0,"findAnnotations":_flaxMemberParameters2,"attach":_flaxMemberParameters3,"detach":_flaxMemberParameters0,"append":_flaxMemberParameters4,"redepthChildren":_flaxMemberParameters0,"redepthChild":_flaxMemberParameters4,"removeAllChildren":_flaxMemberParameters0,"addToScene":_flaxMemberParameters1,"addChildrenToScene":_flaxMemberParameters1,"applyTransform":_flaxMemberParameters5,"debugDescribeChildren":_flaxMemberParameters0,"describeClipBounds":_flaxMemberParameters0,"addCompositionCallback":_flaxMemberParameters6,"remove":_flaxMemberParameters0,"find":_flaxMemberParameters7,"findAllAnnotations":_flaxMemberParameters7,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters8,"toStringShallow":_flaxMemberParameters9,"toStringDeep":_flaxMemberParameters10,"toDiagnosticsNode":_flaxMemberParameters11,"toString":_flaxMemberParameters12}, {"findAnnotations":{"id":"findAnnotations","parameters":[{"name":"result","required":true,"positional":true},{"name":"localPosition","required":true,"positional":true},{"name":"onlyFirst","required":true}]},"find":{"id":"find","parameters":[{"name":"localPosition","required":true,"positional":true}]},"findAllAnnotations":{"id":"findAllAnnotations","parameters":[{"name":"localPosition","required":true,"positional":true}]}}), []);
const _AnnotatedRegionLayerProxy = {type: "flax.core/sdk_rendering#type:AnnotatedRegionLayer", parameters: _flaxMemberParameters13, constructors: {"": _flaxMemberParameters13}, methods: {"supportsRasterization":_flaxMemberParameters0,"buildScene":_flaxMemberParameters1,"dispose":_flaxMemberParameters0,"updateSubtreeNeedsAddToScene":_flaxMemberParameters0,"findAnnotations":_flaxMemberParameters2,"attach":_flaxMemberParameters3,"detach":_flaxMemberParameters0,"append":_flaxMemberParameters4,"redepthChildren":_flaxMemberParameters0,"redepthChild":_flaxMemberParameters4,"removeAllChildren":_flaxMemberParameters0,"addToScene":_flaxMemberParameters1,"addChildrenToScene":_flaxMemberParameters1,"applyTransform":_flaxMemberParameters5,"debugDescribeChildren":_flaxMemberParameters0,"describeClipBounds":_flaxMemberParameters0,"addCompositionCallback":_flaxMemberParameters6,"remove":_flaxMemberParameters0,"find":_flaxMemberParameters7,"findAllAnnotations":_flaxMemberParameters7,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters8,"toStringShallow":_flaxMemberParameters9,"toStringDeep":_flaxMemberParameters10,"toDiagnosticsNode":_flaxMemberParameters11,"toString":_flaxMemberParameters12}, getters: ["value","size","offset","opaque","firstChild","lastChild","hasChildren","subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator"], setters: ["debugCreator"], contextMembers: ["findAnnotations","find","findAllAnnotations"], superMembers: ["get:value","get:size","get:offset","get:opaque","get:firstChild","get:lastChild","get:hasChildren","get:subtreeHasCompositionCallbacks","get:debugDisposed","get:debugHandleCount","get:parent","get:alwaysNeedsAddToScene","get:owner","get:attached","get:depth","get:nextSibling","get:previousSibling","get:debugCreator","set:debugCreator","supportsRasterization","buildScene","dispose","updateSubtreeNeedsAddToScene","findAnnotations","attach","detach","append","redepthChildren","redepthChild","removeAllChildren","addToScene","addChildrenToScene","applyTransform","debugDescribeChildren","describeClipBounds","addCompositionCallback","remove","find","findAllAnnotations","toStringShort","debugFillProperties","toStringShallow","toStringDeep","toDiagnosticsNode","toString"]} as const;
export interface AnnotatedRegionLayer<T extends {} = {}> {
readonly [_flaxDartTypeValue]: AnnotatedRegionLayer<T>;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature4<T>;find: _FlaxSignature5<T>;findAllAnnotations: _FlaxSignature6<T>;};
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
debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
describeClipBounds(): upstream12.Rect | null;
addCompositionCallback(callback: ((layer: upstream1.Layer) => void)): (() => void);
remove(): void;
find<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): _FlaxDartOutput<S> | null;
findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream9.AnnotationResult<_FlaxDartOutput<S>>;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream14.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream14.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream15.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
toString(options?: {minLevel?: upstream14.DiagnosticLevel | undefined}): string;
get value(): T;
get size(): upstream5.Size | null;
get offset(): upstream6.Offset;
get opaque(): boolean;
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
set debugCreator(value: unknown | null);
}
export abstract class AnnotatedRegionLayer<T extends {} = {}> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<AnnotatedRegionLayer<{}>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: AnnotatedRegionLayer<{}>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:AnnotatedRegionLayer", readonly [readonly ["any", null, readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature7;
constructor(value: {}, options?: {size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; opaque?: boolean | undefined}) { super(_AnnotatedRegionLayerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(AnnotatedRegionLayer.prototype, _AnnotatedRegionLayerProxy);
export namespace AnnotatedRegionLayer { export function implement<T extends {} = {}>(args: [value: {}, options?: {size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; opaque?: boolean | undefined}], implementation: {}): AnnotatedRegionLayer<T> {
return constructProxy(_AnnotatedRegionLayerProxy, args, implementation) as AnnotatedRegionLayer<T>; } }
_flaxBindInstanceType<AnnotatedRegionLayer<{}>, typeof AnnotatedRegionLayer>(AnnotatedRegionLayer, "flax.core/sdk_rendering#type:AnnotatedRegionLayer", ["flax.core/sdk_rendering#type:ContainerLayer","flax.core/sdk_rendering#type:Layer","dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]);
_flaxDefineDartTypes(AnnotatedRegionLayer, "flax.core/sdk_rendering#type:AnnotatedRegionLayer", {...{"category":"object","constructors":{}}, proxy: _AnnotatedRegionLayerProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "firstChild" | "lastChild" | "hasChildren" | "subtreeHasCompositionCallbacks" | "debugDisposed" | "debugHandleCount" | "parent" | "alwaysNeedsAddToScene" | "owner" | "attached" | "depth" | "nextSibling" | "previousSibling" | "debugCreator" | "value" | "size" | "offset" | "opaque" | "supportsRasterization" | "buildScene" | "dispose" | "updateSubtreeNeedsAddToScene" | "findAnnotations" | "attach" | "detach" | "append" | "redepthChildren" | "redepthChild" | "removeAllChildren" | "addToScene" | "addChildrenToScene" | "applyTransform" | "debugDescribeChildren" | "describeClipBounds" | "addCompositionCallback" | "remove" | "find" | "findAllAnnotations" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotatedRegionLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::ContainerLayer" | "__flaxBound:package:flutter/src/rendering/layer.dart::Layer" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (abstract new (value: {}, options?: {size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined;offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined;opaque?: boolean | undefined}) => AnnotatedRegionLayer<_Selected0>) & {readonly prototype: AnnotatedRegionLayer<_Selected0>;implement(args: readonly [{}, options?: {size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; opaque?: boolean | undefined}], implementation: Partial<AnnotatedRegionLayer<_Selected0>>): AnnotatedRegionLayer<_Selected0>;} & _FlaxInstanceType<AnnotatedRegionLayer<_Selected0>> & _FlaxDartType<AnnotatedRegionLayer<_Selected0>> : never : never; }
interface _FlaxSignature1<_OwnerType0 extends {}> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature2<_OwnerType0 extends {}> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature3<_OwnerType0 extends {}> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream9.AnnotationResult<_Selected0> : never : never; }
interface _FlaxSignature4<_OwnerType0 extends {}> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature5<_OwnerType0 extends {}> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature6<_OwnerType0 extends {}> extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream9.AnnotationResult<_Selected0> : never : never; }
interface _FlaxSignature7 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (abstract new (value: {}, options?: {size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined;offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined;opaque?: boolean | undefined}) => AnnotatedRegionLayer<_Selected0>) & {readonly prototype: AnnotatedRegionLayer<_Selected0>;implement(args: readonly [{}, options?: {size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; offset?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; opaque?: boolean | undefined}], implementation: Partial<AnnotatedRegionLayer<_Selected0>>): AnnotatedRegionLayer<_Selected0>;} & _FlaxInstanceType<AnnotatedRegionLayer<_Selected0>> & _FlaxDartType<AnnotatedRegionLayer<_Selected0>> : never : never; }
