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
import { _flaxMemberParameters1, _flaxMemberParameters148, _flaxMemberParameters149, _flaxMemberParameters8, _flaxMemberParameters34, _flaxMemberParameters150, _flaxMemberParameters16, _flaxMemberParameters13, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters12 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PipelineOwner extends Omit<upstream0.DiagnosticableTreeMixin, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PipelineOwner: unique symbol;
readonly [_flaxDartTypeValue]: PipelineOwner;

readonly onNeedVisualUpdate: (() => void) | null;
readonly onSemanticsOwnerCreated: (() => void) | null;
readonly onSemanticsUpdate: ((update: Readonly<{ "__flaxBound:dart:ui::SemanticsUpdate": readonly [] }>) => void) | null;
readonly onSemanticsOwnerDisposed: (() => void) | null;
get rootNode(): upstream4.RenderObject | null;
readonly nodesNeedingLayout: DartIterable<upstream4.RenderObject>;
readonly debugDoingLayout: boolean;
readonly nodesNeedingPaint: DartIterable<upstream4.RenderObject>;
readonly debugDoingPaint: boolean;
readonly semanticsOwner: upstream5.SemanticsOwner | null;
readonly debugOutstandingSemanticsHandles: number;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream6.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
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
set rootNode(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
}
defineObject("flax.core/sdk_rendering#type:PipelineOwner", ["onNeedVisualUpdate","onSemanticsOwnerCreated","onSemanticsUpdate","onSemanticsOwnerDisposed","rootNode","nodesNeedingLayout","debugDoingLayout","nodesNeedingPaint","debugDoingPaint","semanticsOwner","debugOutstandingSemanticsHandles"], ["rootNode"], _flaxBindingMethods("flax.core/sdk_rendering#type:PipelineOwner", "object", {"requestVisualUpdate":_flaxMemberParameters1,"flushLayout":_flaxMemberParameters1,"flushCompositingBits":_flaxMemberParameters1,"flushPaint":_flaxMemberParameters1,"ensureSemantics":_flaxMemberParameters148,"flushSemantics":_flaxMemberParameters1,"attach":_flaxMemberParameters149,"detach":_flaxMemberParameters1,"adoptChild":_flaxMemberParameters8,"dropChild":_flaxMemberParameters8,"visitChildren":_flaxMemberParameters34,"dispose":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticableTreeMixin");
export function _PipelineOwnerFactory(options: { onNeedVisualUpdate?: (() => void) | null | undefined; onSemanticsOwnerCreated?: (() => void) | null | undefined; onSemanticsUpdate?: ((update: upstream3.SemanticsUpdate) => void) | null | undefined; onSemanticsOwnerDisposed?: (() => void) | null | undefined } = {}): PipelineOwner {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:PipelineOwner", "", [{"name":"onNeedVisualUpdate"},{"name":"onSemanticsOwnerCreated"},{"name":"onSemanticsUpdate"},{"name":"onSemanticsOwnerDisposed"}], [], options) as PipelineOwner;
}
const _PipelineOwnerProxy = {type: "flax.core/sdk_rendering#type:PipelineOwner", parameters: _flaxMemberParameters150, constructors: {"": _flaxMemberParameters150}, methods: {"toString":_flaxMemberParameters16,"toStringShallow":_flaxMemberParameters13,"toStringDeep":_flaxMemberParameters14,"toStringShort":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters15,"debugDescribeChildren":_flaxMemberParameters1,"debugFillProperties":_flaxMemberParameters12,"requestVisualUpdate":_flaxMemberParameters1,"flushLayout":_flaxMemberParameters1,"flushCompositingBits":_flaxMemberParameters1,"flushPaint":_flaxMemberParameters1,"ensureSemantics":_flaxMemberParameters148,"flushSemantics":_flaxMemberParameters1,"attach":_flaxMemberParameters149,"detach":_flaxMemberParameters1,"adoptChild":_flaxMemberParameters8,"dropChild":_flaxMemberParameters8,"visitChildren":_flaxMemberParameters34,"dispose":_flaxMemberParameters1}, getters: ["onNeedVisualUpdate","onSemanticsOwnerCreated","onSemanticsUpdate","onSemanticsOwnerDisposed","rootNode","debugDoingLayout","debugDoingPaint","semanticsOwner","debugOutstandingSemanticsHandles"], setters: ["rootNode"], contextMembers: [], superMembers: ["get:onNeedVisualUpdate","get:onSemanticsOwnerCreated","get:onSemanticsUpdate","get:onSemanticsOwnerDisposed","get:rootNode","get:debugDoingLayout","get:debugDoingPaint","get:semanticsOwner","get:debugOutstandingSemanticsHandles","set:rootNode","toString","toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","debugFillProperties","requestVisualUpdate","flushLayout","flushCompositingBits","flushPaint","ensureSemantics","flushSemantics","attach","detach","adoptChild","dropChild","visitChildren","dispose"]} as const;
export interface _PipelineOwnerNative extends PipelineOwner {
readonly [_flaxDartTypeValue]: _PipelineOwnerNative;
get nodesNeedingLayout(): DartIterable<upstream4.RenderObject>;
get nodesNeedingPaint(): DartIterable<upstream4.RenderObject>;

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
export abstract class _PipelineOwnerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PipelineOwner>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PipelineOwner;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:PipelineOwner", readonly [], false];
constructor(options?: {onNeedVisualUpdate?: (() => void) | null | undefined; onSemanticsOwnerCreated?: (() => void) | null | undefined; onSemanticsUpdate?: ((update: upstream3.SemanticsUpdate) => void) | null | undefined; onSemanticsOwnerDisposed?: (() => void) | null | undefined}) { super(_PipelineOwnerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PipelineOwnerNative.prototype, _PipelineOwnerProxy);
export namespace _PipelineOwnerFactory { export function implement(args: [options?: {onNeedVisualUpdate?: (() => void) | null | undefined; onSemanticsOwnerCreated?: (() => void) | null | undefined; onSemanticsUpdate?: ((update: upstream3.SemanticsUpdate) => void) | null | undefined; onSemanticsOwnerDisposed?: (() => void) | null | undefined}], implementation: {}): PipelineOwner {
return constructProxy(_PipelineOwnerProxy, args, implementation) as PipelineOwner; } }
const _PipelineOwnerBinding = _flaxProxyFactory(_PipelineOwnerFactory, _PipelineOwnerNative) as unknown as typeof _PipelineOwnerFactory & (new(options?: {onNeedVisualUpdate?: (() => void) | null | undefined; onSemanticsOwnerCreated?: (() => void) | null | undefined; onSemanticsUpdate?: ((update: upstream3.SemanticsUpdate) => void) | null | undefined; onSemanticsOwnerDisposed?: (() => void) | null | undefined}) => _PipelineOwnerNative);
export const PipelineOwner: typeof _PipelineOwnerBinding & _FlaxInstanceType<PipelineOwner> & _FlaxDartType<PipelineOwner, readonly ["class", "flax.core/sdk_rendering#type:PipelineOwner", readonly [], false]> = _flaxBindInstanceType<PipelineOwner, typeof _PipelineOwnerBinding>(_PipelineOwnerBinding, "flax.core/sdk_rendering#type:PipelineOwner", ["dart:core::Object","flax.core/sdk_foundation#type:DiagnosticableTreeMixin","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PipelineOwnerBinding & _FlaxInstanceType<PipelineOwner> & _FlaxDartType<PipelineOwner, readonly ["class", "flax.core/sdk_rendering#type:PipelineOwner", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "onNeedVisualUpdate" | "onSemanticsOwnerCreated" | "onSemanticsUpdate" | "onSemanticsOwnerDisposed" | "rootNode" | "nodesNeedingLayout" | "debugDoingLayout" | "nodesNeedingPaint" | "debugDoingPaint" | "semanticsOwner" | "debugOutstandingSemanticsHandles" | "toString" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "requestVisualUpdate" | "flushLayout" | "flushCompositingBits" | "flushPaint" | "ensureSemantics" | "flushSemantics" | "attach" | "detach" | "adoptChild" | "dropChild" | "visitChildren" | "dispose" | "__flaxBound:package:flutter/src/rendering/object.dart::PipelineOwner" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
