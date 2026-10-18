// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"index","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"index","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ListWheelChildListDelegate extends Omit<upstream0.ListWheelChildDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }> { readonly __ListWheelChildListDelegate: unique symbol;
readonly [_flaxDartTypeValue]: ListWheelChildListDelegate;

}
defineObject("flax.core/sdk_widgets#type:ListWheelChildListDelegate", ["estimatedChildCount","children"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ListWheelChildListDelegate", "object", {"shouldRebuild":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:ListWheelChildDelegate");
const _ListWheelChildListDelegateProxy = {type: "flax.core/sdk_widgets#type:ListWheelChildListDelegate", parameters: [{"name":"children","required":true,"positional":false}], constructors: {"":[{"name":"children","required":true,"positional":false}]}, methods: {"build":_flaxMemberParameters1,"trueIndexOf":_flaxMemberParameters2,"shouldRebuild":_flaxMemberParameters0}, getters: ["children","estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:children","get:estimatedChildCount","build","trueIndexOf","shouldRebuild"]} as const;
export interface ListWheelChildListDelegate {
readonly [_flaxDartTypeValue]: ListWheelChildListDelegate;

build(context: upstream1.BuildContext, index: number): Widget | null;
trueIndexOf(index: number): number;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }>): boolean;
get children(): DartList<Widget>;
get estimatedChildCount(): number;
}
export abstract class ListWheelChildListDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildListDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ListWheelChildListDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildListDelegate", readonly [], false];
constructor(options: {children: DartListInput<Widget, Widget>}) { super(_ListWheelChildListDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ListWheelChildListDelegate.prototype, _ListWheelChildListDelegateProxy);
export namespace ListWheelChildListDelegate { export function implement(args: [options: {children: DartListInput<Widget, Widget>}], implementation: {}): ListWheelChildListDelegate {
return constructProxy(_ListWheelChildListDelegateProxy, args, implementation) as ListWheelChildListDelegate; } }
_flaxBindInstanceType<ListWheelChildListDelegate, typeof ListWheelChildListDelegate>(ListWheelChildListDelegate, "flax.core/sdk_widgets#type:ListWheelChildListDelegate", ["flax.core/sdk_widgets#type:ListWheelChildDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "children" | "build" | "trueIndexOf" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate";
