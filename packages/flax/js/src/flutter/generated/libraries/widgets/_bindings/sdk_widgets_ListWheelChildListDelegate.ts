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
export interface ListWheelChildListDelegate extends Omit<upstream0.ListWheelChildDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }> { readonly __ListWheelChildListDelegate: unique symbol;
readonly [_flaxDartTypeValue]: ListWheelChildListDelegate;

readonly estimatedChildCount: number;
readonly children: DartList<Widget>;
build(context: upstream1.BuildContext, index: number): Widget | null;
trueIndexOf(index: number): number;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }>): boolean;
}
defineObject("flax.core/sdk_widgets#type:ListWheelChildListDelegate", ["estimatedChildCount","children"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ListWheelChildListDelegate", "object", {"shouldRebuild":_flaxMemberParameters43}, {}), [], undefined, "flax.core/sdk_widgets#type:ListWheelChildDelegate");
export function _ListWheelChildListDelegateFactory(options: { children: DartListInput<Widget, Widget> }): ListWheelChildListDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ListWheelChildListDelegate", "", [{"name":"children","required":true}], [], options) as ListWheelChildListDelegate;
}
const _ListWheelChildListDelegateProxy = {type: "flax.core/sdk_widgets#type:ListWheelChildListDelegate", parameters: _flaxMemberParameters226, constructors: {"": _flaxMemberParameters226}, methods: {"build":_flaxMemberParameters224,"trueIndexOf":_flaxMemberParameters225,"shouldRebuild":_flaxMemberParameters43}, getters: ["children","estimatedChildCount"], setters: [], contextMembers: [], superMembers: ["get:children","get:estimatedChildCount","build","trueIndexOf","shouldRebuild"]} as const;
export interface _ListWheelChildListDelegateNative extends ListWheelChildListDelegate {
readonly [_flaxDartTypeValue]: _ListWheelChildListDelegateNative;

build(context: upstream1.BuildContext, index: number): Widget | null;
trueIndexOf(index: number): number;
shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate": readonly [] }>): boolean;
get children(): DartList<Widget>;
get estimatedChildCount(): number;
}
export abstract class _ListWheelChildListDelegateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListWheelChildListDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ListWheelChildListDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildListDelegate", readonly [], false];
constructor(options: {children: DartListInput<Widget, Widget>}) { super(_ListWheelChildListDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ListWheelChildListDelegateNative.prototype, _ListWheelChildListDelegateProxy);
export namespace _ListWheelChildListDelegateFactory { export function implement(args: [options: {children: DartListInput<Widget, Widget>}], implementation: {}): ListWheelChildListDelegate {
return constructProxy(_ListWheelChildListDelegateProxy, args, implementation) as ListWheelChildListDelegate; } }
const _ListWheelChildListDelegateBinding = _flaxProxyFactory(_ListWheelChildListDelegateFactory, _ListWheelChildListDelegateNative) as unknown as typeof _ListWheelChildListDelegateFactory & (new(options: {children: DartListInput<Widget, Widget>}) => _ListWheelChildListDelegateNative);
export const ListWheelChildListDelegate: typeof _ListWheelChildListDelegateBinding & _FlaxInstanceType<ListWheelChildListDelegate> & _FlaxDartType<ListWheelChildListDelegate, readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildListDelegate", readonly [], false]> = _flaxBindInstanceType<ListWheelChildListDelegate, typeof _ListWheelChildListDelegateBinding>(_ListWheelChildListDelegateBinding, "flax.core/sdk_widgets#type:ListWheelChildListDelegate", ["flax.core/sdk_widgets#type:ListWheelChildDelegate","dart:core::Object"]) as typeof _ListWheelChildListDelegateBinding & _FlaxInstanceType<ListWheelChildListDelegate> & _FlaxDartType<ListWheelChildListDelegate, readonly ["class", "flax.core/sdk_widgets#type:ListWheelChildListDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "estimatedChildCount" | "children" | "build" | "trueIndexOf" | "shouldRebuild" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildListDelegate" | "__flaxBound:package:flutter/src/widgets/list_wheel_scroll_view.dart::ListWheelChildDelegate";
