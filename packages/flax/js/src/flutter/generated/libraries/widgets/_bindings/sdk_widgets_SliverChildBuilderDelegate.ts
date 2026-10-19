// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
const _flaxMemberParameters0 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"builder","required":true,"positional":true},{"name":"findChildIndexCallback"},{"name":"childCount"},{"name":"addAutomaticKeepAlives"},{"name":"addRepaintBoundaries"},{"name":"addSemanticIndexes"},{"name":"semanticIndexCallback"},{"name":"semanticIndexOffset"}] as const;
const _flaxMemberParameters2 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"firstIndex","required":true,"positional":true},{"name":"lastIndex","required":true,"positional":true},{"name":"leadingScrollOffset","required":true,"positional":true},{"name":"trailingScrollOffset","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"firstIndex","required":true,"positional":true},{"name":"lastIndex","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"key","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [] as const;
const _flaxMemberParameters7 = [{"name":"description","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverChildBuilderDelegate extends Omit<upstream0.SliverChildDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }> { readonly __SliverChildBuilderDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SliverChildBuilderDelegate;

}
defineObject("flax.core/sdk_widgets#type:SliverChildBuilderDelegate", ["estimatedChildCount","builder","childCount","addAutomaticKeepAlives","addRepaintBoundaries","addSemanticIndexes","semanticIndexOffset","semanticIndexCallback","findChildIndexCallback"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverChildBuilderDelegate", "object", {"shouldRebuild":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:SliverChildDelegate");
const _SliverChildBuilderDelegateProxy = {type: "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"build":_flaxMemberParameters2,"estimateMaxScrollOffset":_flaxMemberParameters3,"didFinishLayout":_flaxMemberParameters4,"shouldRebuild":_flaxMemberParameters0,"findIndexByKey":_flaxMemberParameters5,"toString":_flaxMemberParameters6,"debugFillDescription":_flaxMemberParameters7}, getters: ["builder","childCount","addAutomaticKeepAlives","addRepaintBoundaries","addSemanticIndexes","semanticIndexOffset","semanticIndexCallback","findChildIndexCallback","estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:builder","get:childCount","get:addAutomaticKeepAlives","get:addRepaintBoundaries","get:addSemanticIndexes","get:semanticIndexOffset","get:semanticIndexCallback","get:findChildIndexCallback","get:estimatedChildCount","build","estimateMaxScrollOffset","didFinishLayout","shouldRebuild","findIndexByKey","toString","debugFillDescription"]} as const;
export interface SliverChildBuilderDelegate {
readonly [_flaxDartTypeValue]: SliverChildBuilderDelegate;

build(context: upstream1.BuildContext, index: number): Widget | null;
estimateMaxScrollOffset(firstIndex: number, lastIndex: number, leadingScrollOffset: number, trailingScrollOffset: number): number | null;
didFinishLayout(firstIndex: number, lastIndex: number): void;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }>): boolean;
findIndexByKey(key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>): number | null;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
get builder(): ((context: upstream1.BuildContext, index: number) => Widget | null);
get childCount(): number | null;
get addAutomaticKeepAlives(): boolean;
get addRepaintBoundaries(): boolean;
get addSemanticIndexes(): boolean;
get semanticIndexOffset(): number;
get semanticIndexCallback(): ((widget: Widget, localIndex: number) => number | null);
get findChildIndexCallback(): ((key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>) => number | null) | null;
get estimatedChildCount(): number | null;
}
export abstract class SliverChildBuilderDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverChildBuilderDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverChildBuilderDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", readonly [], false];
constructor(builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options?: {findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined; childCount?: number | null | undefined; addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}) { super(_SliverChildBuilderDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverChildBuilderDelegate.prototype, _SliverChildBuilderDelegateProxy);
export namespace SliverChildBuilderDelegate { export function implement(args: [builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options?: {findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined; childCount?: number | null | undefined; addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}], implementation: {}): SliverChildBuilderDelegate {
return constructProxy(_SliverChildBuilderDelegateProxy, args, implementation) as SliverChildBuilderDelegate; } }
_flaxBindInstanceType<SliverChildBuilderDelegate, typeof SliverChildBuilderDelegate>(SliverChildBuilderDelegate, "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", ["flax.core/sdk_widgets#type:SliverChildDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "builder" | "childCount" | "addAutomaticKeepAlives" | "addRepaintBoundaries" | "addSemanticIndexes" | "semanticIndexOffset" | "semanticIndexCallback" | "findChildIndexCallback" | "build" | "estimateMaxScrollOffset" | "didFinishLayout" | "shouldRebuild" | "findIndexByKey" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate";
