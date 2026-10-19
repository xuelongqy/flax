// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2, _flaxMemberParameters438 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TreeSliverNode<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T] }> { readonly __TreeSliverNode: unique symbol;
readonly [_flaxDartTypeValue]: TreeSliverNode<T>;

}
defineObject("flax.core/sdk_widgets#type:TreeSliverNode", ["content","children","isExpanded","depth","parent"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TreeSliverNode", "object", {"toString":_flaxMemberParameters2}, {}), []);
const _TreeSliverNodeProxy = {type: "flax.core/sdk_widgets#type:TreeSliverNode", parameters: _flaxMemberParameters438, constructors: {"": _flaxMemberParameters438}, methods: {"toString":_flaxMemberParameters2}, getters: ["content","children","isExpanded","depth","parent"], setters: [], contextMembers: [], superMembers: ["get:content","get:children","get:isExpanded","get:depth","get:parent","toString"]} as const;
export interface TreeSliverNode<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: TreeSliverNode<T>;

toString(): string;
get content(): T;
get children(): DartList<TreeSliverNode<T>>;
get isExpanded(): boolean;
get depth(): number | null;
get parent(): TreeSliverNode<T> | null;
}
export abstract class TreeSliverNode<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TreeSliverNode<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TreeSliverNode<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TreeSliverNode", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor(content: unknown | null, options?: {children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>> | null | undefined; expanded?: boolean | undefined}) { super(_TreeSliverNodeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TreeSliverNode.prototype, _TreeSliverNodeProxy);
export namespace TreeSliverNode { export function implement<T extends unknown | null = unknown | null>(args: [content: unknown | null, options?: {children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>> | null | undefined; expanded?: boolean | undefined}], implementation: {}): TreeSliverNode<T> {
return constructProxy(_TreeSliverNodeProxy, args, implementation) as TreeSliverNode<T>; } }
_flaxBindInstanceType<TreeSliverNode<unknown | null>, typeof TreeSliverNode>(TreeSliverNode, "flax.core/sdk_widgets#type:TreeSliverNode", ["dart:core::Object"]);
_flaxDefineDartTypes(TreeSliverNode, "flax.core/sdk_widgets#type:TreeSliverNode", {...{"category":"object","constructors":{}}, proxy: _TreeSliverNodeProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (content: unknown | null, options?: {children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>> | null | undefined;expanded?: boolean | undefined}) => TreeSliverNode<_Selected0>) & {readonly prototype: TreeSliverNode<_Selected0>;implement(args: readonly [unknown | null, options?: {children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>> | null | undefined; expanded?: boolean | undefined}], implementation: Partial<TreeSliverNode<_Selected0>>): TreeSliverNode<_Selected0>;} & _FlaxInstanceType<TreeSliverNode<_Selected0>> & _FlaxDartType<TreeSliverNode<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (content: unknown | null, options?: {children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>> | null | undefined;expanded?: boolean | undefined}) => TreeSliverNode<_Selected0>) & {readonly prototype: TreeSliverNode<_Selected0>;implement(args: readonly [unknown | null, options?: {children?: DartListInput<TreeSliverNode<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>> | null | undefined; expanded?: boolean | undefined}], implementation: Partial<TreeSliverNode<_Selected0>>): TreeSliverNode<_Selected0>;} & _FlaxInstanceType<TreeSliverNode<_Selected0>> & _FlaxDartType<TreeSliverNode<_Selected0>> : never : never; }
