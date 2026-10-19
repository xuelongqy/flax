// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters271, _flaxMemberParameters272, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PageStorageBucket extends Readonly<{ "__flaxBound:package:flutter/src/widgets/page_storage.dart::PageStorageBucket": readonly [] }> { readonly __PageStorageBucket: unique symbol;
readonly [_flaxDartTypeValue]: PageStorageBucket;

}
defineObject("flax.core/sdk_widgets#type:PageStorageBucket", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:PageStorageBucket", "object", {"writeState":_flaxMemberParameters271,"readState":_flaxMemberParameters272}, {}), []);
const _PageStorageBucketProxy = {type: "flax.core/sdk_widgets#type:PageStorageBucket", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"writeState":_flaxMemberParameters271,"readState":_flaxMemberParameters272}, getters: [], setters: [], contextMembers: [], superMembers: ["writeState","readState"]} as const;
export interface PageStorageBucket {
readonly [_flaxDartTypeValue]: PageStorageBucket;

writeState(context: upstream0.BuildContext, data: unknown | null, options?: {identifier?: unknown | null | undefined}): void;
readState(context: upstream0.BuildContext, options?: {identifier?: unknown | null | undefined}): unknown | null;
}
export abstract class PageStorageBucket extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PageStorageBucket>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PageStorageBucket;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PageStorageBucket", readonly [], false];
constructor() { super(_PageStorageBucketProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PageStorageBucket.prototype, _PageStorageBucketProxy);
export namespace PageStorageBucket { export function implement(args: [], implementation: {}): PageStorageBucket {
return constructProxy(_PageStorageBucketProxy, args, implementation) as PageStorageBucket; } }
_flaxBindInstanceType<PageStorageBucket, typeof PageStorageBucket>(PageStorageBucket, "flax.core/sdk_widgets#type:PageStorageBucket", ["dart:core::Object"]);
