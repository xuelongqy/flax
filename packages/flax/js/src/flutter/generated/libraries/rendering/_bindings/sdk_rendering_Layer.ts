// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_AnnotationResult';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SceneBuilder';
import { _flaxMemberParameters1, _flaxMemberParameters10, _flaxMemberParameters7, _flaxMemberParameters6, _flaxMemberParameters11, _flaxMemberParameters5, _flaxMemberParameters16, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters12 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Layer extends Omit<upstream0.DiagnosticableTreeMixin, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Layer: unique symbol;
readonly [_flaxDartTypeValue]: Layer;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature0;find: _FlaxSignature1;findAllAnnotations: _FlaxSignature2;};
}
defineObject("flax.core/sdk_rendering#type:Layer", ["subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator"], ["debugCreator"], _flaxBindingMethods("flax.core/sdk_rendering#type:Layer", "object", {"supportsRasterization":_flaxMemberParameters1,"describeClipBounds":_flaxMemberParameters1,"addCompositionCallback":_flaxMemberParameters10,"attach":_flaxMemberParameters7,"detach":_flaxMemberParameters1,"redepthChildren":_flaxMemberParameters1,"remove":_flaxMemberParameters1,"findAnnotations":_flaxMemberParameters6,"find":_flaxMemberParameters11,"findAllAnnotations":_flaxMemberParameters11,"addToScene":_flaxMemberParameters5}, {"findAnnotations":{"id":"findAnnotations","parameters":[{"name":"result","required":true,"positional":true},{"name":"localPosition","required":true,"positional":true},{"name":"onlyFirst","required":true}]},"find":{"id":"find","parameters":[{"name":"localPosition","required":true,"positional":true}]},"findAllAnnotations":{"id":"findAllAnnotations","parameters":[{"name":"localPosition","required":true,"positional":true}]}}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticableTreeMixin");
const _LayerProxy = {type: "flax.core/sdk_rendering#type:Layer", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters16,"toStringShallow":_flaxMemberParameters13,"toStringDeep":_flaxMemberParameters14,"toStringShort":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters15,"debugDescribeChildren":_flaxMemberParameters1,"debugFillProperties":_flaxMemberParameters12,"supportsRasterization":_flaxMemberParameters1,"describeClipBounds":_flaxMemberParameters1,"addCompositionCallback":_flaxMemberParameters10,"attach":_flaxMemberParameters7,"detach":_flaxMemberParameters1,"redepthChildren":_flaxMemberParameters1,"remove":_flaxMemberParameters1,"findAnnotations":_flaxMemberParameters6,"find":_flaxMemberParameters11,"findAllAnnotations":_flaxMemberParameters11,"addToScene":_flaxMemberParameters5}, getters: ["subtreeHasCompositionCallbacks","debugDisposed","debugHandleCount","parent","alwaysNeedsAddToScene","owner","attached","depth","nextSibling","previousSibling","debugCreator"], setters: ["debugCreator"], contextMembers: ["findAnnotations","find","findAllAnnotations"], superMembers: ["get:subtreeHasCompositionCallbacks","get:debugDisposed","get:debugHandleCount","get:parent","get:alwaysNeedsAddToScene","get:owner","get:attached","get:depth","get:nextSibling","get:previousSibling","get:debugCreator","set:debugCreator","toString","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","debugFillProperties","supportsRasterization","describeClipBounds","addCompositionCallback","attach","detach","redepthChildren","remove","findAnnotations","find","findAllAnnotations"]} as const;
export interface Layer {
readonly [_flaxDartTypeValue]: Layer;
readonly [_flaxDartMethodCases]?: {findAnnotations: _FlaxSignature3;find: _FlaxSignature4;findAllAnnotations: _FlaxSignature5;};
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream4.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream5.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
supportsRasterization(): boolean;
describeClipBounds(): upstream8.Rect | null;
addCompositionCallback(callback: ((layer: Layer) => void)): (() => void);
attach(owner: {}): void;
detach(): void;
redepthChildren(): void;
remove(): void;
findAnnotations<S extends {} = {}>(result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_FlaxDartOutput<S>] }>, localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options: {onlyFirst: boolean}): boolean;
find<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): _FlaxDartOutput<S> | null;
findAllAnnotations<S extends {} = {}>(localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream9.AnnotationResult<_FlaxDartOutput<S>>;
get subtreeHasCompositionCallbacks(): boolean;
get debugDisposed(): boolean;
get debugHandleCount(): number;
get parent(): upstream3.ContainerLayer | null;
get alwaysNeedsAddToScene(): boolean;
get owner(): unknown | null;
get attached(): boolean;
get depth(): number;
get nextSibling(): Layer | null;
get previousSibling(): Layer | null;
get debugCreator(): unknown | null;
set debugCreator(value: unknown | null);
}
export abstract class Layer extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Layer>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Layer;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:Layer", readonly [], false];
constructor() { super(_LayerProxy, Array.from(arguments)); }
abstract addToScene(builder: Readonly<{ "__flaxBound:dart:ui::SceneBuilder": readonly [] }>): void;
}
_flaxDefineProxyBase(Layer.prototype, _LayerProxy);
export namespace Layer { export function implement(args: [], implementation: {addToScene: ((builder: upstream11.SceneBuilder) => void)}): Layer {
return constructProxy(_LayerProxy, args, implementation) as Layer; } }
_flaxBindInstanceType<Layer, typeof Layer>(Layer, "flax.core/sdk_rendering#type:Layer", ["dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "subtreeHasCompositionCallbacks" | "debugDisposed" | "debugHandleCount" | "parent" | "alwaysNeedsAddToScene" | "owner" | "attached" | "depth" | "nextSibling" | "previousSibling" | "debugCreator" | "toString" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "supportsRasterization" | "describeClipBounds" | "addCompositionCallback" | "attach" | "detach" | "redepthChildren" | "remove" | "findAnnotations" | "find" | "findAllAnnotations" | "addToScene" | "__flaxBound:package:flutter/src/rendering/layer.dart::Layer" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream9.AnnotationResult<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (result: Readonly<{ "__flaxBound:package:flutter/src/rendering/layer.dart::AnnotationResult": readonly [_Selected0] }>,localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>,options: {onlyFirst: boolean}) => boolean : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _Selected0 | null : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream9.AnnotationResult<_Selected0> : never : never; }
