// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverlayPortalController extends Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [] }> { readonly __OverlayPortalController: unique symbol;
readonly [_flaxDartTypeValue]: OverlayPortalController;

}
defineObject("flax.core/sdk_widgets#type:OverlayPortalController", ["isShowing"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:OverlayPortalController", "object", {"show":_flaxMemberParameters0,"hide":_flaxMemberParameters0,"toggle":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
const _OverlayPortalControllerProxy = {type: "flax.core/sdk_widgets#type:OverlayPortalController", parameters: [{"name":"debugLabel","required":false,"positional":false}], constructors: {"":[{"name":"debugLabel","required":false,"positional":false}]}, methods: {"show":_flaxMemberParameters0,"hide":_flaxMemberParameters0,"toggle":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["isShowing"], setters: [], contextMembers: [], superMembers: ["get:isShowing","show","hide","toggle","toString"]} as const;
export interface OverlayPortalController {
readonly [_flaxDartTypeValue]: OverlayPortalController;

show(): void;
hide(): void;
toggle(): void;
toString(): string;
get isShowing(): boolean;
}
export abstract class OverlayPortalController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<OverlayPortalController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: OverlayPortalController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:OverlayPortalController", readonly [], false];
constructor(options?: {debugLabel?: string | null | undefined}) { super(_OverlayPortalControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(OverlayPortalController.prototype, _OverlayPortalControllerProxy);
export namespace OverlayPortalController { export function implement(args: [options?: {debugLabel?: string | null | undefined}], implementation: {}): OverlayPortalController {
return constructProxy(_OverlayPortalControllerProxy, args, implementation) as OverlayPortalController; } }
_flaxBindInstanceType<OverlayPortalController, typeof OverlayPortalController>(OverlayPortalController, "flax.core/sdk_widgets#type:OverlayPortalController", ["dart:core::Object"]);
