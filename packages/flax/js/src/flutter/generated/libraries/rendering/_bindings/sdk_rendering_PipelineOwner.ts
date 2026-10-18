// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdate';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream5 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsOwner';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsOwner';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHandle';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHandle';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineManifold';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PipelineManifold';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"listener","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"manifold","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"child","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"visitor","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters7 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters8 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters9 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PipelineOwner extends Omit<upstream0.DiagnosticableTreeMixin, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PipelineOwner: unique symbol;
readonly [_flaxDartTypeValue]: PipelineOwner;

}
defineObject("flax.core/sdk_rendering#type:PipelineOwner", ["onNeedVisualUpdate","onSemanticsOwnerCreated","onSemanticsUpdate","onSemanticsOwnerDisposed","rootNode","debugDoingLayout","debugDoingPaint","semanticsOwner","debugOutstandingSemanticsHandles"], ["rootNode"], _flaxBindingMethods("flax.core/sdk_rendering#type:PipelineOwner", "object", {"requestVisualUpdate":_flaxMemberParameters0,"flushLayout":_flaxMemberParameters0,"flushCompositingBits":_flaxMemberParameters0,"flushPaint":_flaxMemberParameters0,"ensureSemantics":_flaxMemberParameters1,"flushSemantics":_flaxMemberParameters0,"attach":_flaxMemberParameters2,"detach":_flaxMemberParameters0,"adoptChild":_flaxMemberParameters3,"dropChild":_flaxMemberParameters3,"visitChildren":_flaxMemberParameters4,"dispose":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticableTreeMixin");
const _PipelineOwnerProxy = {type: "flax.core/sdk_rendering#type:PipelineOwner", parameters: [{"name":"onNeedVisualUpdate","required":false,"positional":false},{"name":"onSemanticsOwnerCreated","required":false,"positional":false},{"name":"onSemanticsUpdate","required":false,"positional":false},{"name":"onSemanticsOwnerDisposed","required":false,"positional":false}], constructors: {"":[{"name":"onNeedVisualUpdate","required":false,"positional":false},{"name":"onSemanticsOwnerCreated","required":false,"positional":false},{"name":"onSemanticsUpdate","required":false,"positional":false},{"name":"onSemanticsOwnerDisposed","required":false,"positional":false}]}, methods: {"toString":_flaxMemberParameters5,"toStringShallow":_flaxMemberParameters6,"toStringDeep":_flaxMemberParameters7,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters8,"debugDescribeChildren":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters9,"requestVisualUpdate":_flaxMemberParameters0,"flushLayout":_flaxMemberParameters0,"flushCompositingBits":_flaxMemberParameters0,"flushPaint":_flaxMemberParameters0,"ensureSemantics":_flaxMemberParameters1,"flushSemantics":_flaxMemberParameters0,"attach":_flaxMemberParameters2,"detach":_flaxMemberParameters0,"adoptChild":_flaxMemberParameters3,"dropChild":_flaxMemberParameters3,"visitChildren":_flaxMemberParameters4,"dispose":_flaxMemberParameters0}, getters: ["onNeedVisualUpdate","onSemanticsOwnerCreated","onSemanticsUpdate","onSemanticsOwnerDisposed","rootNode","debugDoingLayout","debugDoingPaint","semanticsOwner","debugOutstandingSemanticsHandles"], setters: ["rootNode"], contextMembers: [], superMembers: ["get:onNeedVisualUpdate","get:onSemanticsOwnerCreated","get:onSemanticsUpdate","get:onSemanticsOwnerDisposed","get:rootNode","get:debugDoingLayout","get:debugDoingPaint","get:semanticsOwner","get:debugOutstandingSemanticsHandles","set:rootNode","toString","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","debugFillProperties","requestVisualUpdate","flushLayout","flushCompositingBits","flushPaint","ensureSemantics","flushSemantics","attach","detach","adoptChild","dropChild","visitChildren","dispose"]} as const;
export interface PipelineOwner {
readonly [_flaxDartTypeValue]: PipelineOwner;

toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream6.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream7.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
requestVisualUpdate(): void;
flushLayout(): void;
flushCompositingBits(): void;
flushPaint(): void;
ensureSemantics(options?: {listener?: (() => void) | null | undefined}): upstream10.SemanticsHandle;
flushSemantics(): void;
attach(manifold: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PipelineManifold": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): void;
detach(): void;
adoptChild(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
dropChild(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
visitChildren(visitor: ((child: PipelineOwner) => void)): void;
dispose(): void;
get onNeedVisualUpdate(): (() => void) | null;
get onSemanticsOwnerCreated(): (() => void) | null;
get onSemanticsUpdate(): ((update: Readonly<{ "__flaxBound:dart:ui::SemanticsUpdate": readonly [] }>) => void) | null;
get onSemanticsOwnerDisposed(): (() => void) | null;
get rootNode(): upstream4.RenderObject | null;
get debugDoingLayout(): boolean;
get debugDoingPaint(): boolean;
get semanticsOwner(): upstream5.SemanticsOwner | null;
get debugOutstandingSemanticsHandles(): number;
set rootNode(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
export abstract class PipelineOwner extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PipelineOwner>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PipelineOwner;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PipelineOwner", readonly [], false];
constructor(options?: {onNeedVisualUpdate?: (() => void) | null | undefined; onSemanticsOwnerCreated?: (() => void) | null | undefined; onSemanticsUpdate?: ((update: upstream3.SemanticsUpdate) => void) | null | undefined; onSemanticsOwnerDisposed?: (() => void) | null | undefined}) { super(_PipelineOwnerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PipelineOwner.prototype, _PipelineOwnerProxy);
export namespace PipelineOwner { export function implement(args: [options?: {onNeedVisualUpdate?: (() => void) | null | undefined; onSemanticsOwnerCreated?: (() => void) | null | undefined; onSemanticsUpdate?: ((update: upstream3.SemanticsUpdate) => void) | null | undefined; onSemanticsOwnerDisposed?: (() => void) | null | undefined}], implementation: {}): PipelineOwner {
return constructProxy(_PipelineOwnerProxy, args, implementation) as PipelineOwner; } }
_flaxBindInstanceType<PipelineOwner, typeof PipelineOwner>(PipelineOwner, "flax.core/sdk_rendering#type:PipelineOwner", ["dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onNeedVisualUpdate" | "onSemanticsOwnerCreated" | "onSemanticsUpdate" | "onSemanticsOwnerDisposed" | "rootNode" | "debugDoingLayout" | "debugDoingPaint" | "semanticsOwner" | "debugOutstandingSemanticsHandles" | "toString" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "requestVisualUpdate" | "flushLayout" | "flushCompositingBits" | "flushPaint" | "ensureSemantics" | "flushSemantics" | "attach" | "detach" | "adoptChild" | "dropChild" | "visitChildren" | "dispose" | "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
