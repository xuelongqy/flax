// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters2, _flaxMemberParameters72, _flaxMemberParameters73 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContextMenuController extends Readonly<{ "__flaxBound:package:flutter/src/widgets/context_menu_controller.dart::ContextMenuController": readonly [] }> { readonly __ContextMenuController: unique symbol;
readonly [_flaxDartTypeValue]: ContextMenuController;

readonly onRemove: (() => void) | null;
readonly isShown: boolean;
show(options: {context: upstream0.BuildContext; contextMenuBuilder: ((context: upstream0.BuildContext) => Widget); debugRequiredFor?: Widget | null | undefined}): void;
markNeedsBuild(): void;
remove(): void;
}
defineObject("flax.core/sdk_widgets#type:ContextMenuController", ["onRemove","isShown"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ContextMenuController", "object", {"show":_flaxMemberParameters72,"markNeedsBuild":_flaxMemberParameters2,"remove":_flaxMemberParameters2}, {}), []);
export function _ContextMenuControllerFactory(options: { onRemove?: (() => void) | null | undefined } = {}): ContextMenuController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ContextMenuController", "", [{"name":"onRemove"}], [], options) as ContextMenuController;
}
const _ContextMenuControllerProxy = {type: "flax.core/sdk_widgets#type:ContextMenuController", parameters: _flaxMemberParameters73, constructors: {"": _flaxMemberParameters73}, methods: {"show":_flaxMemberParameters72,"markNeedsBuild":_flaxMemberParameters2,"remove":_flaxMemberParameters2}, getters: ["onRemove","isShown"], setters: [], contextMembers: [], superMembers: ["get:onRemove","get:isShown","show","markNeedsBuild","remove"]} as const;
export interface _ContextMenuControllerNative extends ContextMenuController {
readonly [_flaxDartTypeValue]: _ContextMenuControllerNative;

show(options: {context: upstream0.BuildContext; contextMenuBuilder: ((context: upstream0.BuildContext) => Widget); debugRequiredFor?: Widget | null | undefined}): void;
markNeedsBuild(): void;
remove(): void;
get onRemove(): (() => void) | null;
get isShown(): boolean;
}
export abstract class _ContextMenuControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContextMenuController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ContextMenuController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContextMenuController", readonly [], false];
constructor(options?: {onRemove?: (() => void) | null | undefined}) { super(_ContextMenuControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ContextMenuControllerNative.prototype, _ContextMenuControllerProxy);
export namespace _ContextMenuControllerFactory { export function implement(args: [options?: {onRemove?: (() => void) | null | undefined}], implementation: {}): ContextMenuController {
return constructProxy(_ContextMenuControllerProxy, args, implementation) as ContextMenuController; } }
const _ContextMenuControllerBinding = _flaxProxyFactory(_ContextMenuControllerFactory, _ContextMenuControllerNative) as unknown as typeof _ContextMenuControllerFactory & (new(options?: {onRemove?: (() => void) | null | undefined}) => _ContextMenuControllerNative);
export namespace _ContextMenuControllerFactory { export function removeAny(): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ContextMenuController.removeAny", [], _flaxMemberParameters2);
} }
export const ContextMenuController: typeof _ContextMenuControllerBinding & _FlaxInstanceType<ContextMenuController> & _FlaxDartType<ContextMenuController, readonly ["class", "flax.core/sdk_widgets#type:ContextMenuController", readonly [], false]> = _flaxBindInstanceType<ContextMenuController, typeof _ContextMenuControllerBinding>(_ContextMenuControllerBinding, "flax.core/sdk_widgets#type:ContextMenuController", ["dart:core::Object"]) as typeof _ContextMenuControllerBinding & _FlaxInstanceType<ContextMenuController> & _FlaxDartType<ContextMenuController, readonly ["class", "flax.core/sdk_widgets#type:ContextMenuController", readonly [], false]>;
