// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TwoDimensionalChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TwoDimensionalChildDelegate';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import { _flaxMemberParameters439, _flaxMemberParameters440, _flaxMemberParameters38, _flaxMemberParameters12, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TwoDimensionalChildBuilderDelegate extends Omit<upstream0.TwoDimensionalChildDelegate, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.TwoDimensionalChildDelegate | keyof upstream1.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildBuilderDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __TwoDimensionalChildBuilderDelegate: unique symbol;
readonly [_flaxDartTypeValue]: TwoDimensionalChildBuilderDelegate;

}
defineObject("flax.core/sdk_widgets#type:TwoDimensionalChildBuilderDelegate", ["hasListeners","builder","maxXIndex","maxYIndex","addRepaintBoundaries","addAutomaticKeepAlives"], ["maxXIndex","maxYIndex"], _flaxBindingMethods("flax.core/sdk_widgets#type:TwoDimensionalChildBuilderDelegate", "object", {}, {}), ["removeListener"], undefined, "flax.core/sdk_widgets#type:TwoDimensionalChildDelegate");
const _TwoDimensionalChildBuilderDelegateProxy = {type: "flax.core/sdk_widgets#type:TwoDimensionalChildBuilderDelegate", parameters: _flaxMemberParameters439, constructors: {"": _flaxMemberParameters439}, methods: {"build":_flaxMemberParameters440,"shouldRebuild":_flaxMemberParameters38,"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2}, getters: ["builder","maxXIndex","maxYIndex","addRepaintBoundaries","addAutomaticKeepAlives","hasListeners"], setters: ["maxXIndex","maxYIndex"], contextMembers: [], superMembers: ["get:builder","get:maxXIndex","get:maxYIndex","get:addRepaintBoundaries","get:addAutomaticKeepAlives","get:hasListeners","set:maxXIndex","set:maxYIndex","build","shouldRebuild","addListener","removeListener","dispose"]} as const;
export interface TwoDimensionalChildBuilderDelegate {
readonly [_flaxDartTypeValue]: TwoDimensionalChildBuilderDelegate;

build(context: upstream3.BuildContext, vicinity: Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.ChildVicinity] }>): Widget | null;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get builder(): ((context: upstream3.BuildContext, vicinity: Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.ChildVicinity] }>) => Widget | null);
get maxXIndex(): number | null;
get maxYIndex(): number | null;
get addRepaintBoundaries(): boolean;
get addAutomaticKeepAlives(): boolean;
get hasListeners(): boolean;
set maxXIndex(value: number | null);
set maxYIndex(value: number | null);
}
export abstract class TwoDimensionalChildBuilderDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TwoDimensionalChildBuilderDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TwoDimensionalChildBuilderDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalChildBuilderDelegate", readonly [], false];
constructor(options: {builder: ((context: upstream3.BuildContext, vicinity: upstream4.ChildVicinity) => Widget | null); maxXIndex?: number | null | undefined; maxYIndex?: number | null | undefined; addRepaintBoundaries?: boolean | undefined; addAutomaticKeepAlives?: boolean | undefined}) { super(_TwoDimensionalChildBuilderDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TwoDimensionalChildBuilderDelegate.prototype, _TwoDimensionalChildBuilderDelegateProxy);
export namespace TwoDimensionalChildBuilderDelegate { export function implement(args: [options: {builder: ((context: upstream3.BuildContext, vicinity: upstream4.ChildVicinity) => Widget | null); maxXIndex?: number | null | undefined; maxYIndex?: number | null | undefined; addRepaintBoundaries?: boolean | undefined; addAutomaticKeepAlives?: boolean | undefined}], implementation: {}): TwoDimensionalChildBuilderDelegate {
return constructProxy(_TwoDimensionalChildBuilderDelegateProxy, args, implementation) as TwoDimensionalChildBuilderDelegate; } }
_flaxBindInstanceType<TwoDimensionalChildBuilderDelegate, typeof TwoDimensionalChildBuilderDelegate>(TwoDimensionalChildBuilderDelegate, "flax.core/sdk_widgets#type:TwoDimensionalChildBuilderDelegate", ["flax.core/sdk_widgets#type:TwoDimensionalChildDelegate","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "builder" | "maxXIndex" | "maxYIndex" | "addRepaintBoundaries" | "addAutomaticKeepAlives" | "build" | "shouldRebuild" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildBuilderDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::TwoDimensionalChildDelegate" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
