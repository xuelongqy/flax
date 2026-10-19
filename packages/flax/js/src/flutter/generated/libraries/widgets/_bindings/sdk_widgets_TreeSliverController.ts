// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
const _flaxMemberParameters0 = [{"name":"node","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"content","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TreeSliverController extends Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverController": readonly [] }> { readonly __TreeSliverController: unique symbol;
readonly [_flaxDartTypeValue]: TreeSliverController;

}
defineObject("flax.core/sdk_widgets#type:TreeSliverController", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TreeSliverController", "object", {"isExpanded":_flaxMemberParameters0,"isActive":_flaxMemberParameters0,"getNodeFor":_flaxMemberParameters1,"toggleNode":_flaxMemberParameters0,"expandNode":_flaxMemberParameters0,"expandAll":_flaxMemberParameters2,"collapseAll":_flaxMemberParameters2,"collapseNode":_flaxMemberParameters0,"getActiveIndexFor":_flaxMemberParameters0}, {}), []);
const _TreeSliverControllerProxy = {type: "flax.core/sdk_widgets#type:TreeSliverController", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"isExpanded":_flaxMemberParameters0,"isActive":_flaxMemberParameters0,"getNodeFor":_flaxMemberParameters1,"toggleNode":_flaxMemberParameters0,"expandNode":_flaxMemberParameters0,"expandAll":_flaxMemberParameters2,"collapseAll":_flaxMemberParameters2,"collapseNode":_flaxMemberParameters0,"getActiveIndexFor":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: ["isExpanded","isActive","getNodeFor","toggleNode","expandNode","expandAll","collapseAll","collapseNode","getActiveIndexFor"]} as const;
export interface TreeSliverController {
readonly [_flaxDartTypeValue]: TreeSliverController;

isExpanded(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>): boolean;
isActive(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>): boolean;
getNodeFor(content: unknown | null): upstream1.TreeSliverNode<unknown | null> | null;
toggleNode(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>): void;
expandNode(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>): void;
expandAll(): void;
collapseAll(): void;
collapseNode(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>): void;
getActiveIndexFor(node: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null] }>): number | null;
}
export abstract class TreeSliverController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TreeSliverController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TreeSliverController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TreeSliverController", readonly [], false];
constructor() { super(_TreeSliverControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TreeSliverController.prototype, _TreeSliverControllerProxy);
export namespace TreeSliverController { export function implement(args: [], implementation: {}): TreeSliverController {
return constructProxy(_TreeSliverControllerProxy, args, implementation) as TreeSliverController; } }
export namespace TreeSliverController { export function of(context: upstream0.BuildContext): TreeSliverController {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:TreeSliverController.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as TreeSliverController;
} }
export namespace TreeSliverController { export function maybeOf(context: upstream0.BuildContext): TreeSliverController | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:TreeSliverController.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as TreeSliverController | null;
} }
_flaxBindInstanceType<TreeSliverController, typeof TreeSliverController>(TreeSliverController, "flax.core/sdk_widgets#type:TreeSliverController", ["dart:core::Object"]);
