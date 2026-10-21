// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { _flaxMemberParameters43, _flaxMemberParameters435, _flaxMemberParameters224, _flaxMemberParameters436, _flaxMemberParameters437, _flaxMemberParameters305, _flaxMemberParameters2, _flaxMemberParameters110 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverChildBuilderDelegate extends Omit<upstream0.SliverChildDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }> { readonly __SliverChildBuilderDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SliverChildBuilderDelegate;

readonly estimatedChildCount: number | null;
readonly builder: ((context: upstream1.BuildContext, index: number) => Widget | null);
readonly childCount: number | null;
readonly addAutomaticKeepAlives: boolean;
readonly addRepaintBoundaries: boolean;
readonly addSemanticIndexes: boolean;
readonly semanticIndexOffset: number;
readonly semanticIndexCallback: ((widget: Widget, localIndex: number) => number | null);
readonly findChildIndexCallback: ((key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>) => number | null) | null;
build(context: upstream1.BuildContext, index: number): Widget | null;
estimateMaxScrollOffset(firstIndex: number, lastIndex: number, leadingScrollOffset: number, trailingScrollOffset: number): number | null;
didFinishLayout(firstIndex: number, lastIndex: number): void;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }>): boolean;
findIndexByKey(key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>): number | null;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
defineObject("flax.core/sdk_widgets#type:SliverChildBuilderDelegate", ["estimatedChildCount","builder","childCount","addAutomaticKeepAlives","addRepaintBoundaries","addSemanticIndexes","semanticIndexOffset","semanticIndexCallback","findChildIndexCallback"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverChildBuilderDelegate", "object", {"shouldRebuild":_flaxMemberParameters43}, {}), [], undefined, "flax.core/sdk_widgets#type:SliverChildDelegate");
export function _SliverChildBuilderDelegateFactory(builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options: { findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined; childCount?: number | null | undefined; addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined } = {}): SliverChildBuilderDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", "", [{"name":"builder","required":true,"positional":true},{"name":"findChildIndexCallback"},{"name":"childCount"},{"name":"addAutomaticKeepAlives"},{"name":"addRepaintBoundaries"},{"name":"addSemanticIndexes"},{"name":"semanticIndexCallback"},{"name":"semanticIndexOffset"}], [builder], options) as SliverChildBuilderDelegate;
}
const _SliverChildBuilderDelegateProxy = {type: "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", parameters: _flaxMemberParameters435, constructors: {"": _flaxMemberParameters435}, methods: {"build":_flaxMemberParameters224,"estimateMaxScrollOffset":_flaxMemberParameters436,"didFinishLayout":_flaxMemberParameters437,"shouldRebuild":_flaxMemberParameters43,"findIndexByKey":_flaxMemberParameters305,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters110}, getters: ["builder","childCount","addAutomaticKeepAlives","addRepaintBoundaries","addSemanticIndexes","semanticIndexOffset","semanticIndexCallback","findChildIndexCallback","estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:builder","get:childCount","get:addAutomaticKeepAlives","get:addRepaintBoundaries","get:addSemanticIndexes","get:semanticIndexOffset","get:semanticIndexCallback","get:findChildIndexCallback","get:estimatedChildCount","build","estimateMaxScrollOffset","didFinishLayout","shouldRebuild","findIndexByKey","toString","debugFillDescription"]} as const;
export interface _SliverChildBuilderDelegateNative extends SliverChildBuilderDelegate {
readonly [_flaxDartTypeValue]: _SliverChildBuilderDelegateNative;

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
export abstract class _SliverChildBuilderDelegateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverChildBuilderDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverChildBuilderDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", readonly [], false];
constructor(builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options?: {findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined; childCount?: number | null | undefined; addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}) { super(_SliverChildBuilderDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SliverChildBuilderDelegateNative.prototype, _SliverChildBuilderDelegateProxy);
export namespace _SliverChildBuilderDelegateFactory { export function implement(args: [builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options?: {findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined; childCount?: number | null | undefined; addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}], implementation: {}): SliverChildBuilderDelegate {
return constructProxy(_SliverChildBuilderDelegateProxy, args, implementation) as SliverChildBuilderDelegate; } }
const _SliverChildBuilderDelegateBinding = _flaxProxyFactory(_SliverChildBuilderDelegateFactory, _SliverChildBuilderDelegateNative) as unknown as typeof _SliverChildBuilderDelegateFactory & (new(builder: ((context: upstream1.BuildContext, index: number) => Widget | null), options?: {findChildIndexCallback?: ((key: upstream2.Key) => number | null) | null | undefined; childCount?: number | null | undefined; addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}) => _SliverChildBuilderDelegateNative);
export const SliverChildBuilderDelegate: typeof _SliverChildBuilderDelegateBinding & _FlaxInstanceType<SliverChildBuilderDelegate> & _FlaxDartType<SliverChildBuilderDelegate, readonly ["class", "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", readonly [], false]> = _flaxBindInstanceType<SliverChildBuilderDelegate, typeof _SliverChildBuilderDelegateBinding>(_SliverChildBuilderDelegateBinding, "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", ["flax.core/sdk_widgets#type:SliverChildDelegate","dart:core::Object"]) as typeof _SliverChildBuilderDelegateBinding & _FlaxInstanceType<SliverChildBuilderDelegate> & _FlaxDartType<SliverChildBuilderDelegate, readonly ["class", "flax.core/sdk_widgets#type:SliverChildBuilderDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "builder" | "childCount" | "addAutomaticKeepAlives" | "addRepaintBoundaries" | "addSemanticIndexes" | "semanticIndexOffset" | "semanticIndexCallback" | "findChildIndexCallback" | "build" | "estimateMaxScrollOffset" | "didFinishLayout" | "shouldRebuild" | "findIndexByKey" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildBuilderDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate";
