// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
const _flaxMemberParameters0 = [{"name":"index","required":true,"positional":true},{"name":"after","required":true,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"child","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"constraints","required":true,"positional":true},{"name":"firstIndex","required":false,"positional":false},{"name":"lastIndex","required":false,"positional":false},{"name":"leadingScrollOffset","required":false,"positional":false},{"name":"trailingScrollOffset","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RenderSliverBoxChildManager extends Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::RenderSliverBoxChildManager": readonly [] }> { readonly __RenderSliverBoxChildManager: unique symbol;
readonly [_flaxDartTypeValue]: RenderSliverBoxChildManager;

}
defineObject("flax.core/sdk_rendering#type:RenderSliverBoxChildManager", ["childCount","estimatedChildCount"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:RenderSliverBoxChildManager", "object", {"createChild":_flaxMemberParameters0,"removeChild":_flaxMemberParameters1,"estimateMaxScrollOffset":_flaxMemberParameters2,"didAdoptChild":_flaxMemberParameters1,"setDidUnderflow":_flaxMemberParameters3,"didStartLayout":_flaxMemberParameters4,"didFinishLayout":_flaxMemberParameters4,"debugAssertChildListLocked":_flaxMemberParameters4}, {}), []);
const _RenderSliverBoxChildManagerProxy = {type: "flax.core/sdk_rendering#type:RenderSliverBoxChildManager", parameters: [], constructors: {"":[]}, methods: {"createChild":_flaxMemberParameters0,"removeChild":_flaxMemberParameters1,"estimateMaxScrollOffset":_flaxMemberParameters2,"didAdoptChild":_flaxMemberParameters1,"setDidUnderflow":_flaxMemberParameters3,"didStartLayout":_flaxMemberParameters4,"didFinishLayout":_flaxMemberParameters4,"debugAssertChildListLocked":_flaxMemberParameters4}, getters: ["childCount","estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:estimatedChildCount","didStartLayout","didFinishLayout","debugAssertChildListLocked"]} as const;
export interface RenderSliverBoxChildManager {
readonly [_flaxDartTypeValue]: RenderSliverBoxChildManager;

didStartLayout(): void;
didFinishLayout(): void;
debugAssertChildListLocked(): boolean;
get estimatedChildCount(): number | null;
}
export abstract class RenderSliverBoxChildManager extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RenderSliverBoxChildManager>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RenderSliverBoxChildManager;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:RenderSliverBoxChildManager", readonly [], false];
constructor() { super(_RenderSliverBoxChildManagerProxy, Array.from(arguments)); }
abstract createChild(index: number, options: {after: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null}): void;
abstract removeChild(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
abstract estimateMaxScrollOffset(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>, options?: {firstIndex?: number | null | undefined; lastIndex?: number | null | undefined; leadingScrollOffset?: number | null | undefined; trailingScrollOffset?: number | null | undefined}): number;
abstract didAdoptChild(child: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
abstract setDidUnderflow(value: boolean): void;
abstract get childCount(): number;
}
_flaxDefineProxyBase(RenderSliverBoxChildManager.prototype, _RenderSliverBoxChildManagerProxy);
export namespace RenderSliverBoxChildManager { export function implement(args: [], implementation: {createChild: ((index: number, options: { after: upstream0.RenderBox | null }) => void); removeChild: ((child: upstream0.RenderBox) => void); estimateMaxScrollOffset: ((constraints: upstream1.SliverConstraints, options?: { firstIndex?: number | null | undefined; lastIndex?: number | null | undefined; leadingScrollOffset?: number | null | undefined; trailingScrollOffset?: number | null | undefined }) => number); didAdoptChild: ((child: upstream0.RenderBox) => void); setDidUnderflow: ((value: boolean) => void); get childCount(): number}): RenderSliverBoxChildManager {
return constructProxy(_RenderSliverBoxChildManagerProxy, args, implementation) as RenderSliverBoxChildManager; } }
_flaxBindInstanceType<RenderSliverBoxChildManager, typeof RenderSliverBoxChildManager>(RenderSliverBoxChildManager, "flax.core/sdk_rendering#type:RenderSliverBoxChildManager", ["dart:core::Object"]);
