// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_KeepAliveParentDataMixin';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ChildVicinity';
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TwoDimensionalViewportParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Omit<upstream1.KeepAliveParentDataMixin, _flaxOwnMembers0 | keyof upstream0.ParentData>, Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::TwoDimensionalViewportParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin": readonly [] }> { readonly __TwoDimensionalViewportParentData: unique symbol;
readonly [_flaxDartTypeValue]: TwoDimensionalViewportParentData;

}
defineObject("flax.core/sdk_widgets#type:TwoDimensionalViewportParentData", ["keepAlive","keptAlive","layoutOffset","vicinity","isVisible","paintOffset"], ["keepAlive","layoutOffset","vicinity","paintOffset"], _flaxBindingMethods("flax.core/sdk_widgets#type:TwoDimensionalViewportParentData", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:KeepAliveParentDataMixin");
const _TwoDimensionalViewportParentDataProxy = {type: "flax.core/sdk_widgets#type:TwoDimensionalViewportParentData", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"detach":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["layoutOffset","vicinity","isVisible","paintOffset","keptAlive","keepAlive"], setters: ["layoutOffset","vicinity","paintOffset","keepAlive"], contextMembers: [], superMembers: ["get:layoutOffset","get:vicinity","get:isVisible","get:paintOffset","get:keptAlive","get:keepAlive","set:layoutOffset","set:vicinity","set:paintOffset","set:keepAlive","detach","toString"]} as const;
export interface TwoDimensionalViewportParentData {
readonly [_flaxDartTypeValue]: TwoDimensionalViewportParentData;

detach(): void;
toString(): string;
get layoutOffset(): upstream2.Offset | null;
get vicinity(): upstream3.ChildVicinity;
get isVisible(): boolean;
get paintOffset(): upstream2.Offset | null;
get keptAlive(): boolean;
get keepAlive(): boolean;
set layoutOffset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
set vicinity(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::ChildVicinity": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.ChildVicinity] }>);
set paintOffset(value: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null);
set keepAlive(value: boolean);
}
export abstract class TwoDimensionalViewportParentData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TwoDimensionalViewportParentData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TwoDimensionalViewportParentData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalViewportParentData", readonly [], false];
constructor() { super(_TwoDimensionalViewportParentDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TwoDimensionalViewportParentData.prototype, _TwoDimensionalViewportParentDataProxy);
export namespace TwoDimensionalViewportParentData { export function implement(args: [], implementation: {}): TwoDimensionalViewportParentData {
return constructProxy(_TwoDimensionalViewportParentDataProxy, args, implementation) as TwoDimensionalViewportParentData; } }
_flaxBindInstanceType<TwoDimensionalViewportParentData, typeof TwoDimensionalViewportParentData>(TwoDimensionalViewportParentData, "flax.core/sdk_widgets#type:TwoDimensionalViewportParentData", ["flax.core/sdk_rendering#type:ParentData","dart:core::Object","flax.core/sdk_rendering#type:KeepAliveParentDataMixin"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "keepAlive" | "keptAlive" | "layoutOffset" | "vicinity" | "isVisible" | "paintOffset" | "detach" | "toString" | "__flaxBound:package:flutter/src/widgets/two_dimensional_viewport.dart::TwoDimensionalViewportParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin";
