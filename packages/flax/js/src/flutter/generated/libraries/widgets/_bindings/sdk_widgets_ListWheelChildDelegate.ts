// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters219, _flaxMemberParameters77, _flaxMemberParameters38, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ListWheelChildDelegate extends Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }> { readonly __ListWheelChildDelegate: unique symbol;
readonly [_flaxDartTypeValue]: ListWheelChildDelegate;

}
defineObject("flax.core/sdk_widgets#type:ListWheelChildDelegate", ["estimatedChildCount"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ListWheelChildDelegate", "object", {"build":_flaxMemberParameters219,"trueIndexOf":_flaxMemberParameters77,"shouldRebuild":_flaxMemberParameters38}, {}), []);
const _ListWheelChildDelegateProxy = {type: "flax.core/sdk_widgets#type:ListWheelChildDelegate", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"build":_flaxMemberParameters219,"trueIndexOf":_flaxMemberParameters77,"shouldRebuild":_flaxMemberParameters38}, getters: ["estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["trueIndexOf"]} as const;
export interface ListWheelChildDelegate {
readonly [_flaxDartTypeValue]: ListWheelChildDelegate;

trueIndexOf(index: number): number;
}
export abstract class ListWheelChildDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ListWheelChildDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildDelegate", readonly [], false];
constructor() { super(_ListWheelChildDelegateProxy, Array.from(arguments)); }
abstract build(context: upstream0.BuildContext, index: number): Widget | null;
abstract shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }>): boolean;
abstract get estimatedChildCount(): number | null;
}
_flaxDefineProxyBase(ListWheelChildDelegate.prototype, _ListWheelChildDelegateProxy);
export namespace ListWheelChildDelegate { export function implement(args: [], implementation: {build: ((context: upstream0.BuildContext, index: number) => Widget | null); shouldRebuild: ((oldDelegate: ListWheelChildDelegate) => boolean); get estimatedChildCount(): number | null}): ListWheelChildDelegate {
return constructProxy(_ListWheelChildDelegateProxy, args, implementation) as ListWheelChildDelegate; } }
_flaxBindInstanceType<ListWheelChildDelegate, typeof ListWheelChildDelegate>(ListWheelChildDelegate, "flax.core/sdk_widgets#type:ListWheelChildDelegate", ["dart:core::Object"]);
