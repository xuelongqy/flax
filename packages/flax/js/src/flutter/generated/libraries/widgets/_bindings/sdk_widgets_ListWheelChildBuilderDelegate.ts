// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters38, _flaxMemberParameters218, _flaxMemberParameters219, _flaxMemberParameters77 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ListWheelChildBuilderDelegate extends Omit<upstream0.ListWheelChildDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildBuilderDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }> { readonly __ListWheelChildBuilderDelegate: unique symbol;
readonly [_flaxDartTypeValue]: ListWheelChildBuilderDelegate;

}
defineObject("flax.core/sdk_widgets#type:ListWheelChildBuilderDelegate", ["estimatedChildCount","builder","childCount"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ListWheelChildBuilderDelegate", "object", {"shouldRebuild":_flaxMemberParameters38}, {}), [], undefined, "flax.core/sdk_widgets#type:ListWheelChildDelegate");
const _ListWheelChildBuilderDelegateProxy = {type: "flax.core/sdk_widgets#type:ListWheelChildBuilderDelegate", parameters: _flaxMemberParameters218, constructors: {"": _flaxMemberParameters218}, methods: {"build":_flaxMemberParameters219,"trueIndexOf":_flaxMemberParameters77,"shouldRebuild":_flaxMemberParameters38}, getters: ["builder","childCount","estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:builder","get:childCount","get:estimatedChildCount","build","trueIndexOf","shouldRebuild"]} as const;
export interface ListWheelChildBuilderDelegate {
readonly [_flaxDartTypeValue]: ListWheelChildBuilderDelegate;

build(context: upstream1.BuildContext, index: number): Widget | null;
trueIndexOf(index: number): number;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildBuilderDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }>): boolean;
get builder(): ((context: upstream1.BuildContext, index: number) => Widget | null);
get childCount(): number | null;
get estimatedChildCount(): number | null;
}
export abstract class ListWheelChildBuilderDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildBuilderDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ListWheelChildBuilderDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildBuilderDelegate", readonly [], false];
constructor(options: {builder: ((context: upstream1.BuildContext, index: number) => Widget | null); childCount?: number | null | undefined}) { super(_ListWheelChildBuilderDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ListWheelChildBuilderDelegate.prototype, _ListWheelChildBuilderDelegateProxy);
export namespace ListWheelChildBuilderDelegate { export function implement(args: [options: {builder: ((context: upstream1.BuildContext, index: number) => Widget | null); childCount?: number | null | undefined}], implementation: {}): ListWheelChildBuilderDelegate {
return constructProxy(_ListWheelChildBuilderDelegateProxy, args, implementation) as ListWheelChildBuilderDelegate; } }
_flaxBindInstanceType<ListWheelChildBuilderDelegate, typeof ListWheelChildBuilderDelegate>(ListWheelChildBuilderDelegate, "flax.core/sdk_widgets#type:ListWheelChildBuilderDelegate", ["flax.core/sdk_widgets#type:ListWheelChildDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "builder" | "childCount" | "build" | "trueIndexOf" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildBuilderDelegate" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate";
