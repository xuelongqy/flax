// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { _flaxMemberParameters38, _flaxMemberParameters402, _flaxMemberParameters219, _flaxMemberParameters399, _flaxMemberParameters400, _flaxMemberParameters401, _flaxMemberParameters2, _flaxMemberParameters119 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverChildListDelegate extends Omit<upstream0.SliverChildDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildListDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [] }> { readonly __SliverChildListDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SliverChildListDelegate;

}
defineObject("flax.core/sdk_widgets#type:SliverChildListDelegate", ["estimatedChildCount","addAutomaticKeepAlives","addRepaintBoundaries","addSemanticIndexes","semanticIndexOffset","semanticIndexCallback","children"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverChildListDelegate", "object", {"shouldRebuild":_flaxMemberParameters38}, {}), [], undefined, "flax.core/sdk_widgets#type:SliverChildDelegate");
const _SliverChildListDelegateProxy = {type: "flax.core/sdk_widgets#type:SliverChildListDelegate", parameters: _flaxMemberParameters402, constructors: {"": _flaxMemberParameters402}, methods: {"build":_flaxMemberParameters219,"estimateMaxScrollOffset":_flaxMemberParameters399,"didFinishLayout":_flaxMemberParameters400,"shouldRebuild":_flaxMemberParameters38,"findIndexByKey":_flaxMemberParameters401,"toString":_flaxMemberParameters2,"debugFillDescription":_flaxMemberParameters119}, getters: ["addAutomaticKeepAlives","addRepaintBoundaries","addSemanticIndexes","semanticIndexOffset","semanticIndexCallback","children","estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:addAutomaticKeepAlives","get:addRepaintBoundaries","get:addSemanticIndexes","get:semanticIndexOffset","get:semanticIndexCallback","get:children","get:estimatedChildCount","build","estimateMaxScrollOffset","didFinishLayout","shouldRebuild","findIndexByKey","toString","debugFillDescription"]} as const;
export interface SliverChildListDelegate {
readonly [_flaxDartTypeValue]: SliverChildListDelegate;

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
export abstract class SliverChildListDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverChildListDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverChildListDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverChildListDelegate", readonly [], false];
constructor(children: DartListInput<Widget, Widget>, options?: {addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}) { super(_SliverChildListDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverChildListDelegate.prototype, _SliverChildListDelegateProxy);
export namespace SliverChildListDelegate { export function implement(args: [children: DartListInput<Widget, Widget>, options?: {addAutomaticKeepAlives?: boolean | undefined; addRepaintBoundaries?: boolean | undefined; addSemanticIndexes?: boolean | undefined; semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined; semanticIndexOffset?: number | undefined}], implementation: {}): SliverChildListDelegate {
return constructProxy(_SliverChildListDelegateProxy, args, implementation) as SliverChildListDelegate; } }
_flaxBindInstanceType<SliverChildListDelegate, typeof SliverChildListDelegate>(SliverChildListDelegate, "flax.core/sdk_widgets#type:SliverChildListDelegate", ["flax.core/sdk_widgets#type:SliverChildDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "addAutomaticKeepAlives" | "addRepaintBoundaries" | "addSemanticIndexes" | "semanticIndexOffset" | "semanticIndexCallback" | "children" | "build" | "estimateMaxScrollOffset" | "didFinishLayout" | "shouldRebuild" | "findIndexByKey" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildListDelegate" | "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate";
