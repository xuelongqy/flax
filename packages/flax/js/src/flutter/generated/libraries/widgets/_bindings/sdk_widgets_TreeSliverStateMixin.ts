// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import { _flaxMemberParameters178, _flaxMemberParameters2, _flaxMemberParameters125 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TreeSliverStateMixin<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverStateMixin": readonly [T] }> { readonly __TreeSliverStateMixin: unique symbol;
readonly [_flaxDartTypeValue]: TreeSliverStateMixin<T>;

isExpanded(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T] }>): boolean;
isActive(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T] }>): boolean;
toggleNode(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T] }>): void;
collapseAll(): void;
expandAll(): void;
getNodeFor(content: (T | DartInput<T>)): upstream0.TreeSliverNode<T> | null;
getActiveIndexFor(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [T] }>): number | null;
}
defineObject("flax.core/sdk_widgets#type:TreeSliverStateMixin", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TreeSliverStateMixin", "object", {"isExpanded":_flaxMemberParameters178,"isActive":_flaxMemberParameters178,"toggleNode":_flaxMemberParameters178,"collapseAll":_flaxMemberParameters2,"expandAll":_flaxMemberParameters2,"getNodeFor":_flaxMemberParameters125,"getActiveIndexFor":_flaxMemberParameters178}, {}), []);
export const TreeSliverStateMixin: object & _FlaxInstanceType<TreeSliverStateMixin<unknown | null>> & _FlaxDartType<TreeSliverStateMixin<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:TreeSliverStateMixin", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<TreeSliverStateMixin<unknown | null>, object>({}, "flax.core/sdk_widgets#type:TreeSliverStateMixin", ["dart:core::Object"]) as object & _FlaxInstanceType<TreeSliverStateMixin<unknown | null>> & _FlaxDartType<TreeSliverStateMixin<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:TreeSliverStateMixin", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(TreeSliverStateMixin, "flax.core/sdk_widgets#type:TreeSliverStateMixin", {"category":"object","constructors":{}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: TreeSliverStateMixin<_Selected0>;} & _FlaxInstanceType<TreeSliverStateMixin<_Selected0>> & _FlaxDartType<TreeSliverStateMixin<_Selected0>> : never : never; }
