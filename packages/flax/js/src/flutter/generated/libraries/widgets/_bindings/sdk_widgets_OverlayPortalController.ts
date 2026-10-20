// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters2, _flaxMemberParameters243 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverlayPortalController extends Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [] }> { readonly __OverlayPortalController: unique symbol;
readonly [_flaxDartTypeValue]: OverlayPortalController;

readonly isShowing: boolean;
show(): void;
hide(): void;
toggle(): void;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:OverlayPortalController", ["isShowing"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:OverlayPortalController", "object", {"show":_flaxMemberParameters2,"hide":_flaxMemberParameters2,"toggle":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, {}), []);
export function _OverlayPortalControllerFactory(options: { debugLabel?: string | null | undefined } = {}): OverlayPortalController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:OverlayPortalController", "", [{"name":"debugLabel"}], [], options) as OverlayPortalController;
}
const _OverlayPortalControllerProxy = {type: "flax.core/sdk_widgets#type:OverlayPortalController", parameters: _flaxMemberParameters243, constructors: {"": _flaxMemberParameters243}, methods: {"show":_flaxMemberParameters2,"hide":_flaxMemberParameters2,"toggle":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["isShowing"], setters: [], contextMembers: [], superMembers: ["get:isShowing","show","hide","toggle","toString"]} as const;
export interface _OverlayPortalControllerNative extends OverlayPortalController {
readonly [_flaxDartTypeValue]: _OverlayPortalControllerNative;

show(): void;
hide(): void;
toggle(): void;
toString(): string;
get isShowing(): boolean;
}
export abstract class _OverlayPortalControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverlayPortalController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OverlayPortalController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverlayPortalController", readonly [], false];
constructor(options?: {debugLabel?: string | null | undefined}) { super(_OverlayPortalControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_OverlayPortalControllerNative.prototype, _OverlayPortalControllerProxy);
export namespace _OverlayPortalControllerFactory { export function implement(args: [options?: {debugLabel?: string | null | undefined}], implementation: {}): OverlayPortalController {
return constructProxy(_OverlayPortalControllerProxy, args, implementation) as OverlayPortalController; } }
const _OverlayPortalControllerBinding = _flaxProxyFactory(_OverlayPortalControllerFactory, _OverlayPortalControllerNative) as unknown as typeof _OverlayPortalControllerFactory & (new(options?: {debugLabel?: string | null | undefined}) => _OverlayPortalControllerNative);
export const OverlayPortalController: typeof _OverlayPortalControllerBinding & _FlaxInstanceType<OverlayPortalController> & _FlaxDartType<OverlayPortalController, readonly ["class", "flax.core/sdk_widgets#type:OverlayPortalController", readonly [], false]> = _flaxBindInstanceType<OverlayPortalController, typeof _OverlayPortalControllerBinding>(_OverlayPortalControllerBinding, "flax.core/sdk_widgets#type:OverlayPortalController", ["dart:core::Object"]) as typeof _OverlayPortalControllerBinding & _FlaxInstanceType<OverlayPortalController> & _FlaxDartType<OverlayPortalController, readonly ["class", "flax.core/sdk_widgets#type:OverlayPortalController", readonly [], false]>;
