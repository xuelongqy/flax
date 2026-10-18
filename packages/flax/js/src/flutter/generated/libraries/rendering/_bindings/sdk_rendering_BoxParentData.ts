// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }> { readonly __BoxParentData: unique symbol;
readonly [_flaxDartTypeValue]: BoxParentData;

}
defineObject("flax.core/sdk_rendering#type:BoxParentData", ["offset"], ["offset"], _flaxBindingMethods("flax.core/sdk_rendering#type:BoxParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:ParentData");
const _BoxParentDataProxy = {type: "flax.core/sdk_rendering#type:BoxParentData", parameters: [], constructors: {"":[]}, methods: {"detach":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["offset"], setters: ["offset"], contextMembers: [], superMembers: ["get:offset","set:offset","detach","toString"]} as const;
export interface BoxParentData {
readonly [_flaxDartTypeValue]: BoxParentData;

detach(): void;
toString(): string;
get offset(): upstream1.Offset;
set offset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>);
}
export abstract class BoxParentData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BoxParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:BoxParentData", readonly [], false];
constructor() { super(_BoxParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BoxParentData.prototype, _BoxParentDataProxy);
export namespace BoxParentData { export function implement(args: [], implementation: {}): BoxParentData {
return constructProxy(_BoxParentDataProxy, args, implementation) as BoxParentData; } }
_flaxBindInstanceType<BoxParentData, typeof BoxParentData>(BoxParentData, "flax.core/sdk_rendering#type:BoxParentData", ["flax.core/sdk_rendering#type:ParentData","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
