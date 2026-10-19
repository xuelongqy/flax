// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters1 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContainerBoxParentData<ChildType extends upstream0.RenderObject = upstream0.RenderObject> extends Omit<upstream1.BoxParentData, _flaxOwnMembers0>, Omit<upstream2.ParentData, _flaxOwnMembers0 | keyof upstream1.BoxParentData>, Omit<upstream3.ContainerParentDataMixin<ChildType>, _flaxOwnMembers0 | keyof upstream1.BoxParentData | keyof upstream2.ParentData>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData": readonly [ChildType] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [ChildType] }> { readonly __ContainerBoxParentData: unique symbol;
readonly [_flaxDartTypeValue]: ContainerBoxParentData<ChildType>;

}
defineObject("flax.core/sdk_rendering#type:ContainerBoxParentData", ["offset","previousSibling","nextSibling"], ["offset","previousSibling","nextSibling"], _flaxBindingMethods("flax.core/sdk_rendering#type:ContainerBoxParentData", "object", {"toString":_flaxMemberParameters1,"detach":_flaxMemberParameters1}, {}), []);
const _ContainerBoxParentDataProxy = {type: "flax.core/sdk_rendering#type:ContainerBoxParentData", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters1,"detach":_flaxMemberParameters1}, getters: ["offset","previousSibling","nextSibling"], setters: ["offset","previousSibling","nextSibling"], contextMembers: [], superMembers: ["get:offset","get:previousSibling","get:nextSibling","set:offset","set:previousSibling","set:nextSibling","toString","detach"]} as const;
export interface ContainerBoxParentData<ChildType extends upstream0.RenderObject = upstream0.RenderObject> {
readonly [_flaxDartTypeValue]: ContainerBoxParentData<ChildType>;

toString(): string;
detach(): void;
get offset(): upstream5.Offset;
get previousSibling(): ChildType | null;
get nextSibling(): ChildType | null;
set offset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
set previousSibling(value: (ChildType | DartInput<ChildType>) | null);
set nextSibling(value: (ChildType | DartInput<ChildType>) | null);
}
export abstract class ContainerBoxParentData<ChildType extends upstream0.RenderObject = upstream0.RenderObject> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContainerBoxParentData<upstream0.RenderObject>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ContainerBoxParentData<upstream0.RenderObject>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ContainerBoxParentData", readonly [readonly ["class", "flax.core/sdk_rendering#type:RenderObject", readonly [], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_ContainerBoxParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ContainerBoxParentData.prototype, _ContainerBoxParentDataProxy);
export namespace ContainerBoxParentData { export function implement<ChildType extends upstream0.RenderObject = upstream0.RenderObject>(args: [], implementation: {}): ContainerBoxParentData<ChildType> {
return constructProxy(_ContainerBoxParentDataProxy, args, implementation) as ContainerBoxParentData<ChildType>; } }
_flaxBindInstanceType<ContainerBoxParentData<upstream0.RenderObject>, typeof ContainerBoxParentData>(ContainerBoxParentData, "flax.core/sdk_rendering#type:ContainerBoxParentData", ["flax.core/sdk_rendering#type:BoxParentData","flax.core/sdk_rendering#type:ParentData","dart:core::Object","flax.core/sdk_rendering#type:ContainerParentDataMixin"]);
_flaxDefineDartTypes(ContainerBoxParentData, "flax.core/sdk_rendering#type:ContainerBoxParentData", {...{"category":"object","constructors":{}}, proxy: _ContainerBoxParentDataProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "previousSibling" | "nextSibling" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.RenderObject] ? (abstract new () => ContainerBoxParentData<_Selected0>) & {readonly prototype: ContainerBoxParentData<_Selected0>;implement(args: readonly [], implementation: Partial<ContainerBoxParentData<_Selected0>>): ContainerBoxParentData<_Selected0>;} & _FlaxInstanceType<ContainerBoxParentData<_Selected0>> & _FlaxDartType<ContainerBoxParentData<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.RenderObject] ? (abstract new () => ContainerBoxParentData<_Selected0>) & {readonly prototype: ContainerBoxParentData<_Selected0>;implement(args: readonly [], implementation: Partial<ContainerBoxParentData<_Selected0>>): ContainerBoxParentData<_Selected0>;} & _FlaxInstanceType<ContainerBoxParentData<_Selected0>> & _FlaxDartType<ContainerBoxParentData<_Selected0>> : never : never; }
