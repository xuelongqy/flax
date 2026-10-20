// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { _flaxMemberParameters38, _flaxMemberParameters388, _flaxMemberParameters201, _flaxMemberParameters385, _flaxMemberParameters386, _flaxMemberParameters387, _flaxMemberParameters2, _flaxMemberParameters98 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverChildListDelegate extends Omit<upstream0.SliverChildDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildListDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }> { readonly __SliverChildListDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SliverChildListDelegate;

readonly estimatedChildCount: number | null;
readonly addAutomaticKeepAlives: boolean;
readonly addRepaintBoundaries: boolean;
readonly addSemanticIndexes: boolean;
readonly semanticIndexOffset: number;
readonly semanticIndexCallback: ((widget: Widget, localIndex: number) => number | null);
readonly children: DartList<Widget>;
build(context: upstream1.BuildContext, index: number): Widget | null;
estimateMaxScrollOffset(firstIndex: number, lastIndex: number, leadingScrollOffset: number, trailingScrollOffset: number): number | null;
didFinishLayout(firstIndex: number, lastIndex: number): void;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildListDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }>): boolean;
findIndexByKey(key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>): number | null;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
}
defineObject("flax.core/sdk_widgets#type:SliverChildListDelegate", ["estimatedChildCount","addAutomaticKeepAlives","addRepaintBoundaries","addSemanticIndexes","semanticIndexOffset","semanticIndexCallback","children"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverChildListDelegate", "object", {"shouldRebuild":_flaxMemberParameters38}, {}), [], undefined, "flax.core/sdk_widgets#type:SliverChildDelegate");
export function _SliverChildListDelegateFactory(children: DartListInput<Widget, Widget>, options: { addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined } = {}): SliverChildListDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverChildListDelegate", "", [{"name":"children","required":true,"positional":true},{"name":"addAutomaticKeepAlives"},{"name":"addRepaintBoundaries"},{"name":"addSemanticIndexes"},{"name":"semanticIndexCallback"},{"name":"semanticIndexOffset"}], [children], options) as SliverChildListDelegate;
}
export namespace _SliverChildListDelegateFactory {
export function fixed(children: DartListInput<Widget, Widget>, options: { addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined } = {}): SliverChildListDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverChildListDelegate", "fixed", [{"name":"children","required":true,"positional":true},{"name":"addAutomaticKeepAlives"},{"name":"addRepaintBoundaries"},{"name":"addSemanticIndexes"},{"name":"semanticIndexCallback"},{"name":"semanticIndexOffset"}], [children], options) as SliverChildListDelegate;
}
}
const _SliverChildListDelegateProxy = {type: "flax.core/sdk_widgets#type:SliverChildListDelegate", parameters: _flaxMemberParameters388, constructors: {"": _flaxMemberParameters388,"fixed": _flaxMemberParameters388}, methods: {"build":_flaxMemberParameters201,"estimateMaxScrollOffset":_flaxMemberParameters385,"didFinishLayout":_flaxMemberParameters386,"shouldRebuild":_flaxMemberParameters38,"findIndexByKey":_flaxMemberParameters387,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters98}, getters: ["addAutomaticKeepAlives","addRepaintBoundaries","addSemanticIndexes","semanticIndexOffset","semanticIndexCallback","children","estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:addAutomaticKeepAlives","get:addRepaintBoundaries","get:addSemanticIndexes","get:semanticIndexOffset","get:semanticIndexCallback","get:children","get:estimatedChildCount","build","estimateMaxScrollOffset","didFinishLayout","shouldRebuild","findIndexByKey","toString","debugFillDescription"]} as const;
export interface _SliverChildListDelegateNative extends SliverChildListDelegate {
readonly [_flaxDartTypeValue]: _SliverChildListDelegateNative;
readonly [_flaxDartConstructors]?: {"": (children: DartListInput<Widget, Widget>, options?: {addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}) => void;"fixed": (children: DartListInput<Widget, Widget>, options?: {addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}) => void;};

build(context: upstream1.BuildContext, index: number): Widget | null;
estimateMaxScrollOffset(firstIndex: number, lastIndex: number, leadingScrollOffset: number, trailingScrollOffset: number): number | null;
didFinishLayout(firstIndex: number, lastIndex: number): void;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildListDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }>): boolean;
findIndexByKey(key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>): number | null;
toString(): string;
debugFillDescription(description: DartListInput<string, string>): void;
get addAutomaticKeepAlives(): boolean;
get addRepaintBoundaries(): boolean;
get addSemanticIndexes(): boolean;
get semanticIndexOffset(): number;
get semanticIndexCallback(): ((widget: Widget, localIndex: number) => number | null);
get children(): DartList<Widget>;
get estimatedChildCount(): number | null;
}
export abstract class _SliverChildListDelegateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverChildListDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverChildListDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverChildListDelegate", readonly [], false];
constructor(children: DartListInput<Widget, Widget>, options?: {addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}); constructor(call: _FlaxProxySuper<_SliverChildListDelegateNative>); constructor(...args: unknown[]) { super(_SliverChildListDelegateProxy, args); }
}
_flaxDefineProxyBase(_SliverChildListDelegateNative.prototype, _SliverChildListDelegateProxy);
export namespace _SliverChildListDelegateFactory { export function implement(args: [children: DartListInput<Widget, Widget>, options?: {addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}], implementation: {}): SliverChildListDelegate {
return constructProxy(_SliverChildListDelegateProxy, args, implementation) as SliverChildListDelegate; } }
const _SliverChildListDelegateBinding = _flaxProxyFactory(_SliverChildListDelegateFactory, _SliverChildListDelegateNative) as unknown as typeof _SliverChildListDelegateFactory & (new(children: DartListInput<Widget, Widget>, options?: {addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}) => _SliverChildListDelegateNative) & (new(call: _FlaxProxySuper<_SliverChildListDelegateNative>) => _SliverChildListDelegateNative);
export const SliverChildListDelegate: typeof _SliverChildListDelegateBinding & _FlaxInstanceType<SliverChildListDelegate> & _FlaxDartType<SliverChildListDelegate, readonly ["class", "flax.core/sdk_widgets#type:SliverChildListDelegate", readonly [], false]> = _flaxBindInstanceType<SliverChildListDelegate, typeof _SliverChildListDelegateBinding>(_SliverChildListDelegateBinding, "flax.core/sdk_widgets#type:SliverChildListDelegate", ["flax.core/sdk_widgets#type:SliverChildDelegate","dart:core::Object"]) as typeof _SliverChildListDelegateBinding & _FlaxInstanceType<SliverChildListDelegate> & _FlaxDartType<SliverChildListDelegate, readonly ["class", "flax.core/sdk_widgets#type:SliverChildListDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "addAutomaticKeepAlives" | "addRepaintBoundaries" | "addSemanticIndexes" | "semanticIndexOffset" | "semanticIndexCallback" | "children" | "build" | "estimateMaxScrollOffset" | "didFinishLayout" | "shouldRebuild" | "findIndexByKey" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildListDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate";
