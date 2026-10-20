// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters231, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MenuController extends Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [] }> { readonly __MenuController: unique symbol;
readonly [_flaxDartTypeValue]: MenuController;

readonly isOpen: boolean;
open(options?: {position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}): void;
close(): void;
closeChildren(): void;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:MenuController", ["isOpen"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:MenuController", "object", {"open":_flaxMemberParameters231,"close":_flaxMemberParameters2,"closeChildren":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, {}), []);
export function _MenuControllerFactory(): MenuController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:MenuController", "", _flaxMemberParameters2, [], {}) as MenuController;
}
const _MenuControllerProxy = {type: "flax.core/sdk_widgets#type:MenuController", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"open":_flaxMemberParameters231,"close":_flaxMemberParameters2,"closeChildren":_flaxMemberParameters2,"toString":_flaxMemberParameters2}, getters: ["isOpen"], setters: [], contextMembers: [], superMembers: ["get:isOpen","open","close","closeChildren","toString"]} as const;
export interface _MenuControllerNative extends MenuController {
readonly [_flaxDartTypeValue]: _MenuControllerNative;

open(options?: {position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}): void;
close(): void;
closeChildren(): void;
toString(): string;
get isOpen(): boolean;
}
export abstract class _MenuControllerNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MenuController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MenuController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MenuController", readonly [], false];
constructor() { super(_MenuControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MenuControllerNative.prototype, _MenuControllerProxy);
export namespace _MenuControllerFactory { export function implement(args: [], implementation: {}): MenuController {
return constructProxy(_MenuControllerProxy, args, implementation) as MenuController; } }
const _MenuControllerBinding = _flaxProxyFactory(_MenuControllerFactory, _MenuControllerNative) as unknown as typeof _MenuControllerFactory & (new() => _MenuControllerNative);
export namespace _MenuControllerFactory { export function maybeOf(context: upstream0.BuildContext): MenuController | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MenuController.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as MenuController | null;
} }
export namespace _MenuControllerFactory { export function maybeIsOpenOf(context: upstream0.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MenuController.maybeIsOpenOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export const MenuController: typeof _MenuControllerBinding & _FlaxInstanceType<MenuController> & _FlaxDartType<MenuController, readonly ["class", "flax.core/sdk_widgets#type:MenuController", readonly [], false]> = _flaxBindInstanceType<MenuController, typeof _MenuControllerBinding>(_MenuControllerBinding, "flax.core/sdk_widgets#type:MenuController", ["dart:core::Object"]) as typeof _MenuControllerBinding & _FlaxInstanceType<MenuController> & _FlaxDartType<MenuController, readonly ["class", "flax.core/sdk_widgets#type:MenuController", readonly [], false]>;
