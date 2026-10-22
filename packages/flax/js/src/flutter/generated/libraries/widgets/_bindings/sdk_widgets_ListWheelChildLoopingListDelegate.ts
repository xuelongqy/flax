// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ListWheelChildDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters43, _flaxMemberParameters226, _flaxMemberParameters224, _flaxMemberParameters225 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ListWheelChildLoopingListDelegate extends Omit<upstream0.ListWheelChildDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }> { readonly __ListWheelChildLoopingListDelegate: unique symbol;
readonly [_flaxDartTypeValue]: ListWheelChildLoopingListDelegate;

readonly estimatedChildCount: number | null;
readonly children: DartList<Widget>;
build(context: upstream1.BuildContext, index: number): Widget | null;
trueIndexOf(index: number): number;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }>): boolean;
}
defineObject("flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", ["estimatedChildCount","children"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", "object", {"shouldRebuild":_flaxMemberParameters43}, {}), [], undefined, "flax.core/sdk_widgets#type:ListWheelChildDelegate");
export function _ListWheelChildLoopingListDelegateFactory(options: { children: DartListInput<Widget, Widget> }): ListWheelChildLoopingListDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", "", [{"name":"children","required":true}], [], options) as ListWheelChildLoopingListDelegate;
}
const _ListWheelChildLoopingListDelegateProxy = {type: "flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", parameters: _flaxMemberParameters226, constructors: {"": _flaxMemberParameters226}, methods: {"build":_flaxMemberParameters224,"trueIndexOf":_flaxMemberParameters225,"shouldRebuild":_flaxMemberParameters43}, getters: ["children","estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:children","get:estimatedChildCount","build","trueIndexOf","shouldRebuild"]} as const;
export interface _ListWheelChildLoopingListDelegateNative extends ListWheelChildLoopingListDelegate {
readonly [_flaxDartTypeValue]: _ListWheelChildLoopingListDelegateNative;

build(context: upstream1.BuildContext, index: number): Widget | null;
trueIndexOf(index: number): number;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }>): boolean;
get children(): DartList<Widget>;
get estimatedChildCount(): number | null;
}
export abstract class _ListWheelChildLoopingListDelegateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildLoopingListDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ListWheelChildLoopingListDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", readonly [], false];
constructor(options: {children: DartListInput<Widget, Widget>}) { super(_ListWheelChildLoopingListDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ListWheelChildLoopingListDelegateNative.prototype, _ListWheelChildLoopingListDelegateProxy);
export namespace _ListWheelChildLoopingListDelegateFactory { export function implement(args: [options: {children: DartListInput<Widget, Widget>}], implementation: {}): ListWheelChildLoopingListDelegate {
return constructProxy(_ListWheelChildLoopingListDelegateProxy, args, implementation) as ListWheelChildLoopingListDelegate; } }
const _ListWheelChildLoopingListDelegateBinding = _flaxProxyFactory(_ListWheelChildLoopingListDelegateFactory, _ListWheelChildLoopingListDelegateNative) as unknown as typeof _ListWheelChildLoopingListDelegateFactory & (new(options: {children: DartListInput<Widget, Widget>}) => _ListWheelChildLoopingListDelegateNative);
export const ListWheelChildLoopingListDelegate: typeof _ListWheelChildLoopingListDelegateBinding & _FlaxInstanceType<ListWheelChildLoopingListDelegate> & _FlaxDartType<ListWheelChildLoopingListDelegate, readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", readonly [], false]> = _flaxBindInstanceType<ListWheelChildLoopingListDelegate, typeof _ListWheelChildLoopingListDelegateBinding>(_ListWheelChildLoopingListDelegateBinding, "flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", ["flax.core/sdk_widgets#type:ListWheelChildDelegate","dart:core::Object"]) as typeof _ListWheelChildLoopingListDelegateBinding & _FlaxInstanceType<ListWheelChildLoopingListDelegate> & _FlaxDartType<ListWheelChildLoopingListDelegate, readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildLoopingListDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "children" | "build" | "trueIndexOf" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildLoopingListDelegate" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate";
