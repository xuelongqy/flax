// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"position","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MenuController extends Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [] }> { readonly __MenuController: unique symbol;
readonly [_flaxDartTypeValue]: MenuController;

}
defineObject("flax.core/sdk_widgets#type:MenuController", ["isOpen"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:MenuController", "object", {"open":_flaxMemberParameters0,"close":_flaxMemberParameters1,"closeChildren":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, {}), []);
const _MenuControllerProxy = {type: "flax.core/sdk_widgets#type:MenuController", parameters: [], constructors: {"":[]}, methods: {"open":_flaxMemberParameters0,"close":_flaxMemberParameters1,"closeChildren":_flaxMemberParameters1,"toString":_flaxMemberParameters1}, getters: ["isOpen"], setters: [], contextMembers: [], superMembers: ["get:isOpen","open","close","closeChildren","toString"]} as const;
export interface MenuController {
readonly [_flaxDartTypeValue]: MenuController;

open(options?: {position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}): void;
close(): void;
closeChildren(): void;
toString(): string;
get isOpen(): boolean;
}
export abstract class MenuController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MenuController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MenuController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MenuController", readonly [], false];
constructor() { super(_MenuControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MenuController.prototype, _MenuControllerProxy);
export namespace MenuController { export function implement(args: [], implementation: {}): MenuController {
return constructProxy(_MenuControllerProxy, args, implementation) as MenuController; } }
export namespace MenuController { export function maybeOf(context: upstream0.BuildContext): MenuController | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MenuController.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as MenuController | null;
} }
export namespace MenuController { export function maybeIsOpenOf(context: upstream0.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MenuController.maybeIsOpenOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
_flaxBindInstanceType<MenuController, typeof MenuController>(MenuController, "flax.core/sdk_widgets#type:MenuController", ["dart:core::Object"]);
